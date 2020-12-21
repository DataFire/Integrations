# @datafire/azure_containerregistry_containerregistry_build

Client library for ContainerRegistryManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_containerregistry_containerregistry_build
```
```js
let azure_containerregistry_containerregistry_build = require('@datafire/azure_containerregistry_containerregistry_build').create({
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



## Actions

### Registries_GetBuildSourceUploadUrl
Get the upload location for the user to be able to upload the source.


```js
azure_containerregistry_containerregistry_build.Registries_GetBuildSourceUploadUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.

#### Output
* output [SourceUploadDefinition](#sourceuploaddefinition)

### Runs_List
Gets all the runs for a registry.


```js
azure_containerregistry_containerregistry_build.Runs_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * $filter `string`: The runs filter to apply on the operation. Arithmetic operators are not supported. The allowed string function is 'contains'. All logical operators except 'Not', 'Has', 'All' are allowed.
  * $top `integer`: $top is supported for get list of runs, which limits the maximum number of runs to return.

#### Output
* output [RunListResult](#runlistresult)

### Runs_Get
Gets the detailed information for a given run.


```js
azure_containerregistry_containerregistry_build.Runs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * runId **required** `string`: The run ID.

#### Output
* output [Run](#run)

### Runs_Update
Patch the run properties.


```js
azure_containerregistry_containerregistry_build.Runs_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "runId": "",
  "runUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * runId **required** `string`: The run ID.
  * runUpdateParameters **required** [RunUpdateParameters](#runupdateparameters)

#### Output
* output [Run](#run)

### Runs_Cancel
Cancel an existing run.


```js
azure_containerregistry_containerregistry_build.Runs_Cancel({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * runId **required** `string`: The run ID.

#### Output
*Output schema unknown*

### Runs_GetLogSasUrl
Gets a link to download the run logs.


```js
azure_containerregistry_containerregistry_build.Runs_GetLogSasUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * runId **required** `string`: The run ID.

#### Output
* output [RunGetLogResult](#rungetlogresult)

### Registries_ScheduleRun
Schedules a new run based on the request parameters and add it to the run queue.


```js
azure_containerregistry_containerregistry_build.Registries_ScheduleRun({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "runRequest": {
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * runRequest **required** [RunRequest](#runrequest)

#### Output
* output [Run](#run)

### TaskRuns_List
Lists all the task runs for a specified container registry.


```js
azure_containerregistry_containerregistry_build.TaskRuns_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.

#### Output
* output [TaskRunListResult](#taskrunlistresult)

### TaskRuns_Delete
Deletes a specified task run resource.


```js
azure_containerregistry_containerregistry_build.TaskRuns_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "taskRunName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * taskRunName **required** `string`: The task run name.

#### Output
*Output schema unknown*

### TaskRuns_Get
Gets the detailed information for a given task run.


```js
azure_containerregistry_containerregistry_build.TaskRuns_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "taskRunName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * taskRunName **required** `string`: The run request name.

#### Output
* output [TaskRun](#taskrun)

### TaskRuns_Update
Updates a task run with the specified parameters.


```js
azure_containerregistry_containerregistry_build.TaskRuns_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "taskRunName": "",
  "updateParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * taskRunName **required** `string`: The task run name.
  * updateParameters **required** [TaskRunUpdateParameters](#taskrunupdateparameters)

#### Output
* output [TaskRun](#taskrun)

### TaskRuns_Create
Creates a task run for a container registry with the specified parameters.


```js
azure_containerregistry_containerregistry_build.TaskRuns_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "taskRunName": "",
  "taskRun": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * taskRunName **required** `string`: The name of task run.
  * taskRun **required** [TaskRun](#taskrun)

#### Output
* output [TaskRun](#taskrun)

### Tasks_List
Lists all the tasks for a specified container registry.


```js
azure_containerregistry_containerregistry_build.Tasks_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.

#### Output
* output [TaskListResult](#tasklistresult)

### Tasks_Delete
Deletes a specified task.


```js
azure_containerregistry_containerregistry_build.Tasks_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "taskName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * taskName **required** `string`: The name of the container registry task.

#### Output
*Output schema unknown*

### Tasks_Get
Get the properties of a specified task.


```js
azure_containerregistry_containerregistry_build.Tasks_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "taskName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * taskName **required** `string`: The name of the container registry task.

#### Output
* output [Task](#task)

### Tasks_Update
Updates a task with the specified parameters.


```js
azure_containerregistry_containerregistry_build.Tasks_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "taskName": "",
  "taskUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * taskName **required** `string`: The name of the container registry task.
  * taskUpdateParameters **required** [TaskUpdateParameters](#taskupdateparameters)

#### Output
* output [Task](#task)

### Tasks_Create
Creates a task for a container registry with the specified parameters.


```js
azure_containerregistry_containerregistry_build.Tasks_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "taskName": "",
  "taskCreateParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * taskName **required** `string`: The name of the container registry task.
  * taskCreateParameters **required** [Task](#task)

#### Output
* output [Task](#task)

### Tasks_GetDetails
Returns a task with extended information that includes all secrets.


```js
azure_containerregistry_containerregistry_build.Tasks_GetDetails({
  "subscriptionId": "",
  "resourceGroupName": "",
  "registryName": "",
  "api-version": "",
  "taskName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the container registry belongs.
  * registryName **required** `string`: The name of the container registry.
  * api-version **required** `string`: The client API version.
  * taskName **required** `string`: The name of the container registry task.

#### Output
* output [Task](#task)



## Definitions

### AgentProperties
* AgentProperties `object`: The properties that determine the run agent configuration.
  * cpu `integer`: The CPU configuration in terms of number of cores required for the run.

### Argument
* Argument `object`: The properties of a run argument.
  * isSecret `boolean`: Flag to indicate whether the argument represents a secret and want to be removed from build logs.
  * name **required** `string`: The name of the argument.
  * value **required** `string`: The value of the argument.

### AuthInfo
* AuthInfo `object`: The authorization properties for accessing the source code repository.
  * expiresIn `integer`: Time in seconds that the token remains valid
  * refreshToken `string`: The refresh token used to refresh the access token.
  * scope `string`: The scope of the access token.
  * token **required** `string`: The access token used to access the source control provider.
  * tokenType **required** `string` (values: PAT, OAuth): The type of Auth token.

### AuthInfoUpdateParameters
* AuthInfoUpdateParameters `object`: The authorization properties for accessing the source code repository.
  * expiresIn `integer`: Time in seconds that the token remains valid
  * refreshToken `string`: The refresh token used to refresh the access token.
  * scope `string`: The scope of the access token.
  * token `string`: The access token used to access the source control provider.
  * tokenType `string` (values: PAT, OAuth): The type of Auth token.

### BaseImageDependency
* BaseImageDependency `object`: Properties that describe a base image dependency.
  * digest `string`: The sha256-based digest of the image manifest.
  * registry `string`: The registry login server.
  * repository `string`: The repository name.
  * tag `string`: The tag name.
  * type `string` (values: BuildTime, RunTime): The type of the base image dependency.

### BaseImageTrigger
* BaseImageTrigger `object`: The trigger based on base image dependency.
  * baseImageTriggerType **required** `string` (values: All, Runtime): The type of the auto trigger for base image dependency updates.
  * name **required** `string`: The name of the trigger.
  * status `string` (values: Disabled, Enabled): The current status of trigger.
  * updateTriggerEndpoint `string`: The endpoint URL for receiving update triggers.
  * updateTriggerPayloadType `string` (values: Default, Token): Type of Payload body for Base image update triggers.

### BaseImageTriggerUpdateParameters
* BaseImageTriggerUpdateParameters `object`: The properties for updating base image dependency trigger.
  * baseImageTriggerType `string` (values: All, Runtime): The type of the auto trigger for base image dependency updates.
  * name **required** `string`: The name of the trigger.
  * status `string` (values: Disabled, Enabled): The current status of trigger.
  * updateTriggerEndpoint `string`: The endpoint URL for receiving update triggers.
  * updateTriggerPayloadType `string` (values: Default, Token): Type of Payload body for Base image update triggers.

### Credentials
* Credentials `object`: The parameters that describes a set of credentials that will be used when a run is invoked.
  * customRegistries `object`: Describes the credential parameters for accessing other custom registries. The key
  * sourceRegistry [SourceRegistryCredentials](#sourceregistrycredentials)

### CustomRegistryCredentials
* CustomRegistryCredentials `object`: Describes the credentials that will be used to access a custom registry during a run.
  * identity `string`: Indicates the managed identity assigned to the custom credential. If a user-assigned identity
  * password [SecretObject](#secretobject)
  * userName [SecretObject](#secretobject)

### DockerBuildRequest
* DockerBuildRequest `object`: The parameters for a docker quick build.
  * agentConfiguration [AgentProperties](#agentproperties)
  * arguments `array`: The collection of override arguments to be used when executing the run.
    * items [Argument](#argument)
  * credentials [Credentials](#credentials)
  * dockerFilePath **required** `string`: The Docker file path relative to the source location.
  * imageNames `array`: The fully qualified image names including the repository and tag.
    * items `string`
  * isPushEnabled `boolean`: The value of this property indicates whether the image built should be pushed to the registry or not.
  * noCache `boolean`: The value of this property indicates whether the image cache is enabled or not.
  * platform **required** [PlatformProperties](#platformproperties)
  * sourceLocation `string`: The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
  * target `string`: The name of the target build stage for the docker build.
  * timeout `integer`: Run timeout in seconds.
  * isArchiveEnabled `boolean`: The value that indicates whether archiving is enabled for the run or not.
  * type **required** `string`: The type of the run request.

### DockerBuildStep
* DockerBuildStep `object`: The Docker build step.
  * arguments `array`: The collection of override arguments to be used when executing this build step.
    * items [Argument](#argument)
  * dockerFilePath **required** `string`: The Docker file path relative to the source context.
  * imageNames `array`: The fully qualified image names including the repository and tag.
    * items `string`
  * isPushEnabled `boolean`: The value of this property indicates whether the image built should be pushed to the registry or not.
  * noCache `boolean`: The value of this property indicates whether the image cache is enabled or not.
  * target `string`: The name of the target build stage for the docker build.
  * baseImageDependencies `array`: List of base image dependencies for a step.
    * items [BaseImageDependency](#baseimagedependency)
  * contextAccessToken `string`: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
  * contextPath `string`: The URL(absolute or relative) of the source context for the task step.
  * type **required** `string` (values: Docker, FileTask, EncodedTask): The type of the step.

### DockerBuildStepUpdateParameters
* DockerBuildStepUpdateParameters `object`: The properties for updating a docker build step.
  * arguments `array`: The collection of override arguments to be used when executing this build step.
    * items [Argument](#argument)
  * dockerFilePath `string`: The Docker file path relative to the source context.
  * imageNames `array`: The fully qualified image names including the repository and tag.
    * items `string`
  * isPushEnabled `boolean`: The value of this property indicates whether the image built should be pushed to the registry or not.
  * noCache `boolean`: The value of this property indicates whether the image cache is enabled or not.
  * target `string`: The name of the target build stage for the docker build.
  * contextAccessToken `string`: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
  * contextPath `string`: The URL(absolute or relative) of the source context for the task step.
  * type **required** `string` (values: Docker, FileTask, EncodedTask): The type of the step.

### EncodedTaskRunRequest
* EncodedTaskRunRequest `object`: The parameters for a quick task run request.
  * agentConfiguration [AgentProperties](#agentproperties)
  * credentials [Credentials](#credentials)
  * encodedTaskContent **required** `string`: Base64 encoded value of the template/definition file content.
  * encodedValuesContent `string`: Base64 encoded value of the parameters/values file content.
  * platform **required** [PlatformProperties](#platformproperties)
  * sourceLocation `string`: The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
  * timeout `integer`: Run timeout in seconds.
  * values `array`: The collection of overridable values that can be passed when running a task.
    * items [SetValue](#setvalue)
  * isArchiveEnabled `boolean`: The value that indicates whether archiving is enabled for the run or not.
  * type **required** `string`: The type of the run request.

### EncodedTaskStep
* EncodedTaskStep `object`: The properties of a encoded task step.
  * encodedTaskContent **required** `string`: Base64 encoded value of the template/definition file content.
  * encodedValuesContent `string`: Base64 encoded value of the parameters/values file content.
  * values `array`: The collection of overridable values that can be passed when running a task.
    * items [SetValue](#setvalue)
  * baseImageDependencies `array`: List of base image dependencies for a step.
    * items [BaseImageDependency](#baseimagedependency)
  * contextAccessToken `string`: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
  * contextPath `string`: The URL(absolute or relative) of the source context for the task step.
  * type **required** `string` (values: Docker, FileTask, EncodedTask): The type of the step.

### EncodedTaskStepUpdateParameters
* EncodedTaskStepUpdateParameters `object`: The properties for updating encoded task step.
  * encodedTaskContent `string`: Base64 encoded value of the template/definition file content.
  * encodedValuesContent `string`: Base64 encoded value of the parameters/values file content.
  * values `array`: The collection of overridable values that can be passed when running a task.
    * items [SetValue](#setvalue)
  * contextAccessToken `string`: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
  * contextPath `string`: The URL(absolute or relative) of the source context for the task step.
  * type **required** `string` (values: Docker, FileTask, EncodedTask): The type of the step.

### Error
* Error `object`: An error response from the Azure Container Registry service.
  * code **required** `string`: error code.
  * message **required** `string`: error message.

### ErrorSchema
* ErrorSchema `object`: An error response from the Azure Container Registry service.
  * error [Error](#error)

### FileTaskRunRequest
* FileTaskRunRequest `object`: The request parameters for a scheduling run against a task file.
  * agentConfiguration [AgentProperties](#agentproperties)
  * credentials [Credentials](#credentials)
  * platform **required** [PlatformProperties](#platformproperties)
  * sourceLocation `string`: The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
  * taskFilePath **required** `string`: The template/definition file path relative to the source.
  * timeout `integer`: Run timeout in seconds.
  * values `array`: The collection of overridable values that can be passed when running a task.
    * items [SetValue](#setvalue)
  * valuesFilePath `string`: The values/parameters file path relative to the source.
  * isArchiveEnabled `boolean`: The value that indicates whether archiving is enabled for the run or not.
  * type **required** `string`: The type of the run request.

### FileTaskStep
* FileTaskStep `object`: The properties of a task step.
  * taskFilePath **required** `string`: The task template/definition file path relative to the source context.
  * values `array`: The collection of overridable values that can be passed when running a task.
    * items [SetValue](#setvalue)
  * valuesFilePath `string`: The task values/parameters file path relative to the source context.
  * baseImageDependencies `array`: List of base image dependencies for a step.
    * items [BaseImageDependency](#baseimagedependency)
  * contextAccessToken `string`: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
  * contextPath `string`: The URL(absolute or relative) of the source context for the task step.
  * type **required** `string` (values: Docker, FileTask, EncodedTask): The type of the step.

### FileTaskStepUpdateParameters
* FileTaskStepUpdateParameters `object`: The properties of updating a task step.
  * taskFilePath `string`: The task template/definition file path relative to the source context.
  * values `array`: The collection of overridable values that can be passed when running a task.
    * items [SetValue](#setvalue)
  * valuesFilePath `string`: The values/parameters file path relative to the source context.
  * contextAccessToken `string`: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
  * contextPath `string`: The URL(absolute or relative) of the source context for the task step.
  * type **required** `string` (values: Docker, FileTask, EncodedTask): The type of the step.

### IdentityProperties
* IdentityProperties `object`: Managed identity for the resource.
  * principalId `string`: The principal ID of resource identity.
  * tenantId `string`: The tenant ID of resource.
  * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): The identity type.
  * userAssignedIdentities `object`: The list of user identities associated with the resource. The user identity 

### ImageDescriptor
* ImageDescriptor `object`: Properties for a registry image.
  * digest `string`: The sha256-based digest of the image manifest.
  * registry `string`: The registry login server.
  * repository `string`: The repository name.
  * tag `string`: The tag name.

### ImageUpdateTrigger
* ImageUpdateTrigger `object`: The image update trigger that caused a build.
  * id `string`: The unique ID of the trigger.
  * images `array`: The list of image updates that caused the build.
    * items [ImageDescriptor](#imagedescriptor)
  * timestamp `string`: The timestamp when the image update happened.

### OverrideTaskStepProperties
* OverrideTaskStepProperties `object`
  * arguments `array`: Gets or sets the collection of override arguments to be used when
    * items [Argument](#argument)
  * contextPath `string`: The source context against which run has to be queued.
  * file `string`: The file against which run has to be queued.
  * target `string`: The name of the target build stage for the docker build.
  * updateTriggerToken `string`: Base64 encoded update trigger token that will be attached with the base image trigger webhook.
  * values `array`: The collection of overridable values that can be passed when running a Task.
    * items [SetValue](#setvalue)

### PlatformProperties
* PlatformProperties `object`: The platform properties against which the run has to happen.
  * architecture `string` (values: amd64, x86, 386, arm, arm64): The OS architecture.
  * os **required** `string` (values: Windows, Linux): The operating system type required for the run.
  * variant `string` (values: v6, v7, v8): Variant of the CPU.

### PlatformUpdateParameters
* PlatformUpdateParameters `object`: The properties for updating the platform configuration.
  * architecture `string` (values: amd64, x86, 386, arm, arm64): The OS architecture.
  * os `string` (values: Windows, Linux): The operating system type required for the run.
  * variant `string` (values: v6, v7, v8): Variant of the CPU.

### ProxyResource
* ProxyResource `object`: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags.
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### Run
* Run `object`: Run resource properties
  * properties [RunProperties](#runproperties)
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### RunFilter
* RunFilter `object`: Properties that are enabled for Odata querying on runs.
  * createTime `string`: The create time for a run.
  * finishTime `string`: The time the run finished.
  * isArchiveEnabled `boolean`: The value that indicates whether archiving is enabled or not.
  * outputImageManifests `string`: The list of comma-separated image manifests that were generated from the run. This is applicable if the run is of
  * runId `string`: The unique identifier for the run.
  * runType `string` (values: QuickBuild, QuickRun, AutoBuild, AutoRun): The type of run.
  * status `string` (values: Queued, Started, Running, Succeeded, Failed, Canceled, Error, Timeout): The current status of the run.
  * taskName `string`: The name of the task that the run corresponds to.

### RunGetLogResult
* RunGetLogResult `object`: The result of get log link operation.
  * logLink `string`: The link to logs for a run on a azure container registry.

### RunListResult
* RunListResult `object`: Collection of runs.
  * nextLink `string`: The URI that can be used to request the next set of paged results.
  * value `array`: The collection value.
    * items [Run](#run)

### RunProperties
* RunProperties `object`: The properties for a run.
  * agentConfiguration [AgentProperties](#agentproperties)
  * createTime `string`: The time the run was scheduled.
  * customRegistries `array`: The list of custom registries that were logged in during this run.
    * items `string`
  * finishTime `string`: The time the run finished.
  * imageUpdateTrigger [ImageUpdateTrigger](#imageupdatetrigger)
  * isArchiveEnabled `boolean`: The value that indicates whether archiving is enabled or not.
  * lastUpdatedTime `string`: The last updated time for the run.
  * outputImages `array`: The list of all images that were generated from the run. This is applicable if the run generates base image dependencies.
    * items [ImageDescriptor](#imagedescriptor)
  * platform [PlatformProperties](#platformproperties)
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning state of a run.
  * runErrorMessage `string`: The error message received from backend systems after the run is scheduled.
  * runId `string`: The unique identifier for the run.
  * runType `string` (values: QuickBuild, QuickRun, AutoBuild, AutoRun): The type of run.
  * sourceRegistryAuth `string`: The scope of the credentials that were used to login to the source registry during this run.
  * sourceTrigger [SourceTriggerDescriptor](#sourcetriggerdescriptor)
  * startTime `string`: The time the run started.
  * status `string` (values: Queued, Started, Running, Succeeded, Failed, Canceled, Error, Timeout): The current status of the run.
  * task `string`: The task against which run was scheduled.
  * timerTrigger [TimerTriggerDescriptor](#timertriggerdescriptor)
  * updateTriggerToken `string`: The update trigger token passed for the Run.

### RunRequest
* RunRequest `object`: The request parameters for scheduling a run.
  * isArchiveEnabled `boolean`: The value that indicates whether archiving is enabled for the run or not.
  * type **required** `string`: The type of the run request.

### RunUpdateParameters
* RunUpdateParameters `object`: The set of run properties that can be updated.
  * isArchiveEnabled `boolean`: The value that indicates whether archiving is enabled or not.

### SecretObject
* SecretObject `object`: Describes the properties of a secret object value.
  * type `string` (values: Opaque, Vaultsecret): The type of the secret object which determines how the value of the secret object has to be
  * value `string`: The value of the secret. The format of this value will be determined

### SetValue
* SetValue `object`: The properties of a overridable value that can be passed to a task template.
  * isSecret `boolean`: Flag to indicate whether the value represents a secret or not.
  * name **required** `string`: The name of the overridable value.
  * value **required** `string`: The overridable value.

### SourceProperties
* SourceProperties `object`: The properties of the source code repository.
  * branch `string`: The branch name of the source code.
  * repositoryUrl **required** `string`: The full URL to the source code repository
  * sourceControlAuthProperties [AuthInfo](#authinfo)
  * sourceControlType **required** `string` (values: Github, VisualStudioTeamService): The type of source control service.

### SourceRegistryCredentials
* SourceRegistryCredentials `object`: Describes the credential parameters for accessing the source registry.
  * loginMode `string` (values: None, Default): The authentication mode which determines the source registry login scope. The credentials for the source registry

### SourceTrigger
* SourceTrigger `object`: The properties of a source based trigger.
  * name **required** `string`: The name of the trigger.
  * sourceRepository **required** [SourceProperties](#sourceproperties)
  * sourceTriggerEvents **required** `array`: The source event corresponding to the trigger.
    * items `string` (values: commit, pullrequest)
  * status `string` (values: Disabled, Enabled): The current status of trigger.

### SourceTriggerDescriptor
* SourceTriggerDescriptor `object`: The source trigger that caused a run.
  * branchName `string`: The branch name in the repository.
  * commitId `string`: The unique ID that identifies a commit.
  * eventType `string`: The event type of the trigger.
  * id `string`: The unique ID of the trigger.
  * providerType `string`: The source control provider type.
  * pullRequestId `string`: The unique ID that identifies pull request.
  * repositoryUrl `string`: The repository URL.

### SourceTriggerUpdateParameters
* SourceTriggerUpdateParameters `object`: The properties for updating a source based trigger.
  * name **required** `string`: The name of the trigger.
  * sourceRepository [SourceUpdateParameters](#sourceupdateparameters)
  * sourceTriggerEvents `array`: The source event corresponding to the trigger.
    * items `string` (values: commit, pullrequest)
  * status `string` (values: Disabled, Enabled): The current status of trigger.

### SourceUpdateParameters
* SourceUpdateParameters `object`: The properties for updating the source code repository.
  * branch `string`: The branch name of the source code.
  * repositoryUrl `string`: The full URL to the source code repository
  * sourceControlAuthProperties [AuthInfoUpdateParameters](#authinfoupdateparameters)
  * sourceControlType `string` (values: Github, VisualStudioTeamService): The type of source control service.

### SourceUploadDefinition
* SourceUploadDefinition `object`: The properties of a response to source upload request.
  * relativePath `string`: The relative path to the source. This is used to submit the subsequent queue build request.
  * uploadUrl `string`: The URL where the client can upload the source.

### Task
* Task `object`: The task that has the ARM resource and task properties. 
  * identity [IdentityProperties](#identityproperties)
  * properties [TaskProperties](#taskproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### TaskListResult
* TaskListResult `object`: The collection of tasks.
  * nextLink `string`: The URI that can be used to request the next set of paged results.
  * value `array`: The collection value.
    * items [Task](#task)

### TaskProperties
* TaskProperties `object`: The properties of a task.
  * agentConfiguration [AgentProperties](#agentproperties)
  * creationDate `string`: The creation date of task.
  * credentials [Credentials](#credentials)
  * platform **required** [PlatformProperties](#platformproperties)
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning state of the task.
  * status `string` (values: Disabled, Enabled): The current status of task.
  * step **required** [TaskStepProperties](#taskstepproperties)
  * timeout `integer`: Run timeout in seconds.
  * trigger [TriggerProperties](#triggerproperties)

### TaskPropertiesUpdateParameters
* TaskPropertiesUpdateParameters `object`: The properties for updating a task.
  * agentConfiguration [AgentProperties](#agentproperties)
  * credentials [Credentials](#credentials)
  * platform [PlatformUpdateParameters](#platformupdateparameters)
  * status `string` (values: Disabled, Enabled): The current status of task.
  * step [TaskStepUpdateParameters](#taskstepupdateparameters)
  * timeout `integer`: Run timeout in seconds.
  * trigger [TriggerUpdateParameters](#triggerupdateparameters)

### TaskRun
* TaskRun `object`: The task run that has the ARM resource and properties. 
  * identity [IdentityProperties](#identityproperties)
  * properties [TaskRunProperties](#taskrunproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### TaskRunListResult
* TaskRunListResult `object`: The collection of task runs.
  * nextLink `string`: The URI that can be used to request the next set of paged results.
  * value `array`: The collection value.
    * items [TaskRun](#taskrun)

### TaskRunProperties
* TaskRunProperties `object`: The properties of task run.
  * forceUpdateTag `string`: How the run should be forced to rerun even if the run request configuration has not changed
  * provisioningState `string` (values: Creating, Updating, Deleting, Succeeded, Failed, Canceled): The provisioning state of this task run
  * runRequest [RunRequest](#runrequest)
  * runResult [Run](#run)

### TaskRunPropertiesUpdateParameters
* TaskRunPropertiesUpdateParameters `object`: The properties of a task run update parameters.
  * forceUpdateTag `string`: How the run should be forced to rerun even if the run request configuration has not changed
  * runRequest [RunRequest](#runrequest)

### TaskRunRequest
* TaskRunRequest `object`: The parameters for a task run request.
  * overrideTaskStepProperties [OverrideTaskStepProperties](#overridetaskstepproperties)
  * taskId **required** `string`: The resource ID of task against which run has to be queued.
  * isArchiveEnabled `boolean`: The value that indicates whether archiving is enabled for the run or not.
  * type **required** `string`: The type of the run request.

### TaskRunUpdateParameters
* TaskRunUpdateParameters `object`: The parameters for updating a task run.
  * identity [IdentityProperties](#identityproperties)
  * properties [TaskRunPropertiesUpdateParameters](#taskrunpropertiesupdateparameters)
  * tags `object`: The ARM resource tags.

### TaskStepProperties
* TaskStepProperties `object`: Base properties for any task step.
  * baseImageDependencies `array`: List of base image dependencies for a step.
    * items [BaseImageDependency](#baseimagedependency)
  * contextAccessToken `string`: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
  * contextPath `string`: The URL(absolute or relative) of the source context for the task step.
  * type **required** `string` (values: Docker, FileTask, EncodedTask): The type of the step.

### TaskStepUpdateParameters
* TaskStepUpdateParameters `object`: Base properties for updating any task step.
  * contextAccessToken `string`: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
  * contextPath `string`: The URL(absolute or relative) of the source context for the task step.
  * type **required** `string` (values: Docker, FileTask, EncodedTask): The type of the step.

### TaskUpdateParameters
* TaskUpdateParameters `object`: The parameters for updating a task.
  * identity [IdentityProperties](#identityproperties)
  * properties [TaskPropertiesUpdateParameters](#taskpropertiesupdateparameters)
  * tags `object`: The ARM resource tags.

### TimerTrigger
* TimerTrigger `object`: The properties of a timer trigger.
  * name **required** `string`: The name of the trigger.
  * schedule **required** `string`: The CRON expression for the task schedule
  * status `string` (values: Disabled, Enabled): The current status of trigger.

### TimerTriggerDescriptor
* TimerTriggerDescriptor `object`
  * scheduleOccurrence `string`: The occurrence that triggered the run.
  * timerTriggerName `string`: The timer trigger name that caused the run.

### TimerTriggerUpdateParameters
* TimerTriggerUpdateParameters `object`: The properties for updating a timer trigger.
  * name **required** `string`: The name of the trigger.
  * schedule `string`: The CRON expression for the task schedule
  * status `string` (values: Disabled, Enabled): The current status of trigger.

### TriggerProperties
* TriggerProperties `object`: The properties of a trigger.
  * baseImageTrigger [BaseImageTrigger](#baseimagetrigger)
  * sourceTriggers `array`: The collection of triggers based on source code repository.
    * items [SourceTrigger](#sourcetrigger)
  * timerTriggers `array`: The collection of timer triggers.
    * items [TimerTrigger](#timertrigger)

### TriggerUpdateParameters
* TriggerUpdateParameters `object`: The properties for updating triggers.
  * baseImageTrigger [BaseImageTriggerUpdateParameters](#baseimagetriggerupdateparameters)
  * sourceTriggers `array`: The collection of triggers based on source code repository.
    * items [SourceTriggerUpdateParameters](#sourcetriggerupdateparameters)
  * timerTriggers `array`: The collection of timer triggers.
    * items [TimerTriggerUpdateParameters](#timertriggerupdateparameters)

### UserIdentityProperties
* UserIdentityProperties `object`
  * clientId `string`: The client id of user assigned identity.
  * principalId `string`: The principal id of user assigned identity.


