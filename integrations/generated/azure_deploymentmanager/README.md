# @datafire/azure_deploymentmanager

Client library for AzureDeploymentManager

## Installation and Usage
```bash
npm install --save @datafire/azure_deploymentmanager
```
```js
let azure_deploymentmanager = require('@datafire/azure_deploymentmanager').create({
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

REST APIs for orchestrating deployments using the Azure Deployment Manager (ADM). See https://docs.microsoft.com/en-us/azure/azure-resource-manager/deployment-manager-overview for more information.

## Actions

### Operations_List
Lists the supported operations.


```js
azure_deploymentmanager.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [OperationsList](#operationslist)

### ArtifactSources_List
Lists the artifact sources in a resource group.


```js
azure_deploymentmanager.ArtifactSources_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ArtifactSourceListResult](#artifactsourcelistresult)

### ArtifactSources_Delete
Deletes an artifact source.


```js
azure_deploymentmanager.ArtifactSources_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "artifactSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * artifactSourceName **required** `string`: The name of the artifact source.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### ArtifactSources_Get
Gets an artifact source.


```js
azure_deploymentmanager.ArtifactSources_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "artifactSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * artifactSourceName **required** `string`: The name of the artifact source.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ArtifactSource](#artifactsource)

### ArtifactSources_CreateOrUpdate
Synchronously creates a new artifact source or updates an existing artifact source.


```js
azure_deploymentmanager.ArtifactSources_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "artifactSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * artifactSourceName **required** `string`: The name of the artifact source.
  * api-version **required** `string`: The API version to use for this operation.
  * artifactSourceInfo [ArtifactSource](#artifactsource)

#### Output
* output [ArtifactSource](#artifactsource)

### Rollouts_List
Lists the rollouts in a resource group.


```js
azure_deploymentmanager.Rollouts_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RolloutListResult](#rolloutlistresult)

### Rollouts_Delete
Only rollouts in terminal state can be deleted.


```js
azure_deploymentmanager.Rollouts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "rolloutName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * rolloutName **required** `string`: The rollout name.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Rollouts_Get
Gets detailed information of a rollout.


```js
azure_deploymentmanager.Rollouts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "rolloutName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * rolloutName **required** `string`: The rollout name.
  * api-version **required** `string`: The API version to use for this operation.
  * retryAttempt `integer`: Rollout retry attempt ordinal to get the result of. If not specified, result of the latest attempt will be returned.

#### Output
* output [Rollout](#rollout)

### Rollouts_CreateOrUpdate
This is an asynchronous operation and can be polled to completion using the location header returned by this operation.


```js
azure_deploymentmanager.Rollouts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "rolloutName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * rolloutName **required** `string`: The rollout name.
  * api-version **required** `string`: The API version to use for this operation.
  * rolloutRequest [RolloutRequest](#rolloutrequest)

#### Output
* output [RolloutRequest](#rolloutrequest)

### Rollouts_Cancel
Only running rollouts can be canceled.


```js
azure_deploymentmanager.Rollouts_Cancel({
  "subscriptionId": "",
  "resourceGroupName": "",
  "rolloutName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * rolloutName **required** `string`: The rollout name.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [Rollout](#rollout)

### Rollouts_Restart
Only failed rollouts can be restarted.


```js
azure_deploymentmanager.Rollouts_Restart({
  "subscriptionId": "",
  "resourceGroupName": "",
  "rolloutName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * rolloutName **required** `string`: The rollout name.
  * skipSucceeded `boolean`: If true, will skip all succeeded steps so far in the rollout. If false, will execute the entire rollout again regardless of the current state of individual resources. Defaults to false if not specified.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [Rollout](#rollout)

### ServiceTopologies_List
Lists the service topologies in the resource group.


```js
azure_deploymentmanager.ServiceTopologies_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ServiceTopologiesListResult](#servicetopologieslistresult)

### ServiceTopologies_Delete
Deletes the service topology.


```js
azure_deploymentmanager.ServiceTopologies_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### ServiceTopologies_Get
Gets the service topology.


```js
azure_deploymentmanager.ServiceTopologies_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ServiceTopologyResource](#servicetopologyresource)

### ServiceTopologies_CreateOrUpdate
Synchronously creates a new service topology or updates an existing service topology.


```js
azure_deploymentmanager.ServiceTopologies_CreateOrUpdate({
  "serviceTopologyInfo": null,
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceTopologyInfo **required** [ServiceTopologyResource](#servicetopologyresource)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ServiceTopologyResource](#servicetopologyresource)

### Services_List
Lists the services in the service topology.


```js
azure_deploymentmanager.Services_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ServiceListResult](#servicelistresult)

### Services_Delete
Deletes the service.


```js
azure_deploymentmanager.Services_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * serviceName **required** `string`: The name of the service resource.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Services_Get
Gets the service.


```js
azure_deploymentmanager.Services_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * serviceName **required** `string`: The name of the service resource.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ServiceResource](#serviceresource)

### Services_CreateOrUpdate
Synchronously creates a new service or updates an existing service.


```js
azure_deploymentmanager.Services_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "serviceName": "",
  "api-version": "",
  "serviceInfo": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * serviceName **required** `string`: The name of the service resource.
  * api-version **required** `string`: The API version to use for this operation.
  * serviceInfo **required** [ServiceResource](#serviceresource)

#### Output
* output [ServiceResource](#serviceresource)

### ServiceUnits_List
Lists the service units under a service in the service topology.


```js
azure_deploymentmanager.ServiceUnits_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * serviceName **required** `string`: The name of the service resource.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ServiceUnitListResult](#serviceunitlistresult)

### ServiceUnits_Delete
Deletes the service unit.


```js
azure_deploymentmanager.ServiceUnits_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "serviceName": "",
  "serviceUnitName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * serviceName **required** `string`: The name of the service resource.
  * serviceUnitName **required** `string`: The name of the service unit resource.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### ServiceUnits_Get
Gets the service unit.


```js
azure_deploymentmanager.ServiceUnits_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "serviceName": "",
  "serviceUnitName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * serviceName **required** `string`: The name of the service resource.
  * serviceUnitName **required** `string`: The name of the service unit resource.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ServiceUnitResource](#serviceunitresource)

### ServiceUnits_CreateOrUpdate
This is an asynchronous operation and can be polled to completion using the operation resource returned by this operation.


```js
azure_deploymentmanager.ServiceUnits_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceTopologyName": "",
  "serviceName": "",
  "serviceUnitName": "",
  "api-version": "",
  "serviceUnitInfo": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serviceTopologyName **required** `string`: The name of the service topology .
  * serviceName **required** `string`: The name of the service resource.
  * serviceUnitName **required** `string`: The name of the service unit resource.
  * api-version **required** `string`: The API version to use for this operation.
  * serviceUnitInfo **required** [ServiceUnitResource](#serviceunitresource)

#### Output
* output [ServiceUnitResource](#serviceunitresource)

### Steps_List
Lists the steps in a resource group.


```js
azure_deploymentmanager.Steps_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [StepResourceListResult](#stepresourcelistresult)

### Steps_Delete
Deletes the step.


```js
azure_deploymentmanager.Steps_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "stepName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * stepName **required** `string`: The name of the deployment step.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Steps_Get
Gets the step.


```js
azure_deploymentmanager.Steps_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "stepName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * stepName **required** `string`: The name of the deployment step.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [StepResource](#stepresource)

### Steps_CreateOrUpdate
Synchronously creates a new step or updates an existing step.


```js
azure_deploymentmanager.Steps_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "stepName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * stepName **required** `string`: The name of the deployment step.
  * api-version **required** `string`: The API version to use for this operation.
  * stepInfo [StepResource](#stepresource)

#### Output
* output [StepResource](#stepresource)



## Definitions

### ApiKeyAuthentication
* ApiKeyAuthentication `object`: ApiKey authentication gives a name and a value that can be included in either the request header or query parameters.
  * in **required** `string` (values: Query, Header): The location of the authentication key/value pair in the request.
  * name **required** `string`: The key name of the authentication key/value pair.
  * value **required** `string`: The value of the authentication key/value pair.
  * type **required** `string` (values: ApiKey, RolloutIdentity): The authentication type.

### ArtifactSource
* ArtifactSource `object`: The resource that defines the source location where the artifacts are located.
  * properties: The properties that define the artifact source.
    * artifactRoot `string`: The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
    * authentication **required** [Authentication](#authentication)
    * sourceType **required** `string`: The type of artifact source used.
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ArtifactSourceListResult
* ArtifactSourceListResult `array`: The list of artifact sources.
  * items [ArtifactSource](#artifactsource)

### ArtifactSourceProperties
* ArtifactSourceProperties `object`: The properties that define the source location where the artifacts are located.
  * artifactRoot `string`: The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
  * authentication **required** [Authentication](#authentication)
  * sourceType **required** `string`: The type of artifact source used.

### Authentication
* Authentication `object`: Defines the authentication method and properties to access the artifacts.
  * type **required** `string`: The authentication type

### CloudError
* CloudError `object`: The error information object.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: Detailed error information of any failure.
  * code `string`: Error code string.
  * details `array`: More detailed error information.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: Descriptive error information.
  * target `string`: Error target

### HealthCheckStepAttributes
* HealthCheckStepAttributes `object`: The attributes for the health check step.
  * healthyStateDuration **required** `string`: The duration in ISO 8601 format for which the resource is expected to be continuously healthy. If maxElasticDuration is specified, healthy state duration is enforced after the detection of first healthy signal.
  * maxElasticDuration `string`: The duration in ISO 8601 format for which the health check waits for the resource to become healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration once resource becomes healthy.
  * type **required** `string`: The type of health check.
  * waitDuration `string`: The duration in ISO 8601 format for which health check waits idly without any checks.

### HealthCheckStepProperties
* HealthCheckStepProperties `object`: Defines the properties of a health check step.
  * attributes **required** [HealthCheckStepAttributes](#healthcheckstepattributes)
  * stepType **required** `string` (values: Wait, HealthCheck): The type of step.

### Identity
* Identity `object`: Identity for the resource.
  * identityIds **required** `array`: The list of identities.
    * items `string`
  * type **required** `string`: The identity type.

### Message
* Message `object`: Supplementary contextual messages during a rollout.
  * message `string`: The actual message text.
  * timeStamp `string`: Time in UTC this message was provided.

### Operation
* Operation `object`: Represents an operation that can be performed on the service.
  * display [OperationDetail](#operationdetail)
  * name `string`: The name of the operation.
  * origin `string`: The origin of the operation.
  * properties `object`: The properties of the operation.

### OperationDetail
* OperationDetail `object`: The detail about an operation.
  * description `string`: The description of the operation.
  * operation `string`: The name of the operation.
  * provider `string`: The name of the provider that supports the operation.
  * resource `string`: The resource type on which this operation can be performed.

### OperationsList
* OperationsList `object`: The operations response.
  * value [Operation](#operation)

### PrePostStep
* PrePostStep `object`: The properties that define a step.
  * stepId **required** `string`: The resource Id of the step to be run.

### ResourceOperation
* ResourceOperation `object`: Individual resource operation information.
  * operationId `string`: Unique identifier of the operation. For ARM resources, this is the operationId obtained from ARM service.
  * provisioningState `string`: State of the resource deployment. For ARM resources, this is the current provisioning state of the resource.
  * resourceName `string`: Name of the resource as specified in the artifacts. For ARM resources, this is the name of the resource specified in the template.
  * resourceType `string`: Type of the resource as specified in the artifacts. For ARM resources, this is the type of the resource specified in the template.
  * statusCode `string`: Http status code of the operation.
  * statusMessage `string`: Descriptive information of the resource operation.

### RestHealthCheck
* RestHealthCheck `object`: A REST based health check
  * name **required** `string`: A unique name for this check.
  * request **required** [RestRequest](#restrequest)
  * response [RestResponse](#restresponse)

### RestHealthCheckStepAttributes
* RestHealthCheckStepAttributes `object`: Defines the REST health check step properties.
  * properties [RestParameters](#restparameters)
  * healthyStateDuration **required** `string`: The duration in ISO 8601 format for which the resource is expected to be continuously healthy. If maxElasticDuration is specified, healthy state duration is enforced after the detection of first healthy signal.
  * maxElasticDuration `string`: The duration in ISO 8601 format for which the health check waits for the resource to become healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration once resource becomes healthy.
  * type **required** `string`: The type of health check.
  * waitDuration `string`: The duration in ISO 8601 format for which health check waits idly without any checks.

### RestParameters
* RestParameters `object`: The parameters for the REST health check.
  * healthChecks **required** `array`: The list of checks that form the health check step.
    * items [RestHealthCheck](#resthealthcheck)

### RestRequest
* RestRequest `object`: The properties that make up a REST request
  * authentication **required** [RestRequestAuthentication](#restrequestauthentication)
  * method **required** `string` (values: GET, POST): The HTTP method to use for the request.
  * uri **required** `string`: The HTTP URI to use for the request.

### RestRequestAuthentication
* RestRequestAuthentication `object`: The authentication information required in the REST health check request to the health provider.
  * type **required** `string` (values: ApiKey, RolloutIdentity): The authentication type.

### RestResponse
* RestResponse `object`: The properties that make up the expected REST response
  * regex `object`: The regular expressions to match the response content with.
    * matchQuantifier `string` (values: All, Any): Indicates whether any or all of the expressions should match with the response content.
    * matches `array`: The list of regular expressions.
      * items `string`
  * successStatusCodes `array`: The HTTP status codes expected in a successful health check response. The response is expected to match one of the given status codes. If no expected status codes are provided, default expected status code is 200 OK.
    * items `string`

### Rollout
* Rollout `object`: Defines the rollout.
  * identity [Identity](#identity)
  * properties: The properties that define a rollout.
    * artifactSourceId `string`: The reference to the artifact source resource Id where the payload is located.
    * buildVersion **required** `string`: The version of the build being deployed.
    * stepGroups **required** `array`: The list of step groups that define the orchestration.
      * items [StepGroup](#stepgroup)
    * targetServiceTopologyId **required** `string`: The resource Id of the service topology from which service units are being referenced in step groups to be deployed.
    * operationInfo [RolloutOperationInfo](#rolloutoperationinfo)
    * services `array`: The detailed information on the services being deployed.
      * items [Service](#service)
    * status `string`: The current status of the rollout.
    * totalRetryAttempts `integer`: The cardinal count of total number of retries performed on the rollout at a given time.
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### RolloutIdentityAuthentication
* RolloutIdentityAuthentication `object`: RolloutIdentity uses the user-assigned managed identity authentication context specified in the Identity property during rollout creation.
  * type **required** `string` (values: ApiKey, RolloutIdentity): The authentication type.

### RolloutListResult
* RolloutListResult `array`: The list of rollouts.
  * items [Rollout](#rollout)

### RolloutOperationInfo
* RolloutOperationInfo `object`: Detailed runtime information of the rollout.
  * endTime `string`: The start time of the rollout in UTC. This property will not be set if the rollout has not completed yet.
  * error [CloudErrorBody](#clouderrorbody)
  * retryAttempt `integer`: The ordinal count of the number of retry attempts on a rollout. 0 if no retries of the rollout have been performed. If the rollout is updated with a PUT, this count is reset to 0.
  * skipSucceededOnRetry `boolean`: True, if all steps that succeeded on the previous run/attempt were chosen to be skipped in this retry attempt. False, otherwise.
  * startTime `string`: The start time of the rollout in UTC.

### RolloutProperties
* RolloutProperties `object`: Defines the properties of a rollout.
  * operationInfo [RolloutOperationInfo](#rolloutoperationinfo)
  * services `array`: The detailed information on the services being deployed.
    * items [Service](#service)
  * status `string`: The current status of the rollout.
  * totalRetryAttempts `integer`: The cardinal count of total number of retries performed on the rollout at a given time.

### RolloutRequest
* RolloutRequest `object`: Defines the PUT rollout request body.
  * identity **required** [Identity](#identity)
  * properties **required** [RolloutRequestProperties](#rolloutrequestproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### RolloutRequestProperties
* RolloutRequestProperties `object`: The properties for defining a rollout.
  * artifactSourceId `string`: The reference to the artifact source resource Id where the payload is located.
  * buildVersion **required** `string`: The version of the build being deployed.
  * stepGroups **required** `array`: The list of step groups that define the orchestration.
    * items [StepGroup](#stepgroup)
  * targetServiceTopologyId **required** `string`: The resource Id of the service topology from which service units are being referenced in step groups to be deployed.

### RolloutStep
* RolloutStep `object`: Defines a specific step on a target service unit.
  * messages `array`: Supplementary informative messages during rollout.
    * items [Message](#message)
  * name **required** `string`: Name of the step.
  * operationInfo [StepOperationInfo](#stepoperationinfo)
  * resourceOperations `array`: Set of resource operations that were performed, if any, on an Azure resource.
    * items [ResourceOperation](#resourceoperation)
  * status `string`: Current state of the step.
  * stepGroup `string`: The step group the current step is part of.

### SasAuthentication
* SasAuthentication `object`: Defines the properties to access the artifacts using an Azure Storage SAS URI.
  * properties [SasProperties](#sasproperties)
  * type **required** `string`: The authentication type

### SasProperties
* SasProperties `object`: The properties that define SAS authentication.
  * sasUri **required** `string`: The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot.

### Service
* Service `object`: Defines a service.
  * name `string`: Name of the service.
  * serviceUnits `array`: The detailed information about the units that make up the service.
    * items [ServiceUnit](#serviceunit)
  * targetLocation **required** `string`: The Azure location to which the resources in the service belong to or should be deployed to.
  * targetSubscriptionId **required** `string`: The subscription to which the resources in the service belong to or should be deployed to.

### ServiceListResult
* ServiceListResult `array`: The list of services.
  * items [ServiceResource](#serviceresource)

### ServiceProperties
* ServiceProperties `object`: The properties of a service.
  * targetLocation **required** `string`: The Azure location to which the resources in the service belong to or should be deployed to.
  * targetSubscriptionId **required** `string`: The subscription to which the resources in the service belong to or should be deployed to.

### ServiceResource
* ServiceResource `object`: The resource representation of a service in a service topology.
  * properties **required**: The properties that define a service in a service topology.
    * targetLocation **required** `string`: The Azure location to which the resources in the service belong to or should be deployed to.
    * targetSubscriptionId **required** `string`: The subscription to which the resources in the service belong to or should be deployed to.
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ServiceTopologiesListResult
* ServiceTopologiesListResult `array`: The list of service topologies.
  * items [ServiceTopologyResource](#servicetopologyresource)

### ServiceTopologyProperties
* ServiceTopologyProperties `object`: The properties of a service topology.
  * artifactSourceId `string`: The resource Id of the artifact source that contains the artifacts that can be referenced in the service units.

### ServiceTopologyResource
* ServiceTopologyResource `object`: The resource representation of a service topology.
  * properties **required**: The properties that define the service topology.
    * artifactSourceId `string`: The resource Id of the artifact source that contains the artifacts that can be referenced in the service units.
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ServiceUnit
* ServiceUnit `object`: Defines a service unit.
  * name `string`: Name of the service unit.
  * steps `array`: Detailed step information, if present.
    * items [RolloutStep](#rolloutstep)
  * artifacts [ServiceUnitArtifacts](#serviceunitartifacts)
  * deploymentMode **required** `string` (values: Incremental, Complete): Describes the type of ARM deployment to be performed on the resource.
  * targetResourceGroup **required** `string`: The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.

### ServiceUnitArtifacts
* ServiceUnitArtifacts `object`: Defines the artifacts of a service unit.
  * parametersArtifactSourceRelativePath `string`: The path to the ARM parameters file relative to the artifact source.
  * parametersUri `string`: The full URI of the ARM parameters file with the SAS token.
  * templateArtifactSourceRelativePath `string`: The path to the ARM template file relative to the artifact source.
  * templateUri `string`: The full URI of the ARM template file with the SAS token.

### ServiceUnitListResult
* ServiceUnitListResult `array`: The list of service units.
  * items [ServiceUnitResource](#serviceunitresource)

### ServiceUnitProperties
* ServiceUnitProperties `object`: Defines the properties of a service unit.
  * artifacts [ServiceUnitArtifacts](#serviceunitartifacts)
  * deploymentMode **required** `string` (values: Incremental, Complete): Describes the type of ARM deployment to be performed on the resource.
  * targetResourceGroup **required** `string`: The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.

### ServiceUnitResource
* ServiceUnitResource `object`: Represents the response of a service unit resource.
  * properties **required**: The properties that define the service unit.
    * artifacts [ServiceUnitArtifacts](#serviceunitartifacts)
    * deploymentMode **required** `string` (values: Incremental, Complete): Describes the type of ARM deployment to be performed on the resource.
    * targetResourceGroup **required** `string`: The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### StepGroup
* StepGroup `object`: The properties that define a Step group in a rollout.
  * dependsOnStepGroups `array`: The list of step group names on which this step group depends on.
    * items `string`
  * deploymentTargetId **required** `string`: The resource Id of service unit to be deployed. The service unit should be from the service topology referenced in targetServiceTopologyId
  * name **required** `string`: The name of the step group.
  * postDeploymentSteps `array`: The list of steps to be run after deploying the target.
    * items [PrePostStep](#prepoststep)
  * preDeploymentSteps `array`: The list of steps to be run before deploying the target.
    * items [PrePostStep](#prepoststep)

### StepOperationInfo
* StepOperationInfo `object`: Detailed information of a specific step run.
  * correlationId `string`: Unique identifier to track the request for ARM-based resources.
  * deploymentName `string`: The name of the ARM deployment initiated as part of the step.
  * endTime `string`: End time of the action in UTC.
  * error [CloudErrorBody](#clouderrorbody)
  * lastUpdatedTime `string`: Last time in UTC this operation was updated.
  * startTime `string`: Start time of the action in UTC.

### StepProperties
* StepProperties `object`: The properties of a step resource.
  * stepType **required** `string` (values: Wait, HealthCheck): The type of step.

### StepResource
* StepResource `object`: The resource representation of a rollout step.
  * properties **required** [StepProperties](#stepproperties)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### StepResourceListResult
* StepResourceListResult `array`: The list of steps.
  * items [StepResource](#stepresource)

### WaitStepAttributes
* WaitStepAttributes `object`: The parameters for the wait step.
  * duration **required** `string`: The duration in ISO 8601 format of how long the wait should be.

### WaitStepProperties
* WaitStepProperties `object`: Defines the properties of a Wait step.
  * attributes **required** [WaitStepAttributes](#waitstepattributes)
  * stepType **required** `string` (values: Wait, HealthCheck): The type of step.


