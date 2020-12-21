# @datafire/amazonaws_greengrassv2

Client library for AWS IoT Greengrass V2

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_greengrassv2
```
```js
let amazonaws_greengrassv2 = require('@datafire/amazonaws_greengrassv2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities to edge devices. This enables devices to collect and analyze data closer to the source of information, react autonomously to local events, and communicate securely with each other on local networks. Local devices can also communicate securely with AWS IoT Core and export IoT data to the AWS Cloud. AWS IoT Greengrass developers can use AWS Lambda functions and components to create and deploy applications to fleets of edge devices for local operation.</p> <p>AWS IoT Greengrass Version 2 provides a new major version of the AWS IoT Greengrass Core software, new APIs, and a new console. Use this API reference to learn how to use the AWS IoT Greengrass V2 API operations to manage components, manage deployments, and core devices.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is AWS IoT Greengrass?</a> in the <i>AWS IoT Greengrass V2 Developer Guide</i>.</p>

## Actions

### ListComponents



```js
amazonaws_greengrassv2.ListComponents({}, context)
```

#### Input
* input `object`
  * scope `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListComponentsResponse](#listcomponentsresponse)

### DeleteComponent



```js
amazonaws_greengrassv2.DeleteComponent({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
*Output schema unknown*

### GetComponent



```js
amazonaws_greengrassv2.GetComponent({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * recipeOutputFormat `string`
  * arn **required** `string`

#### Output
* output [GetComponentResponse](#getcomponentresponse)

### GetComponentVersionArtifact



```js
amazonaws_greengrassv2.GetComponentVersionArtifact({
  "arn": "",
  "artifactName": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`
  * artifactName **required** `string`

#### Output
* output [GetComponentVersionArtifactResponse](#getcomponentversionartifactresponse)

### DescribeComponent



```js
amazonaws_greengrassv2.DescribeComponent({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
* output [DescribeComponentResponse](#describecomponentresponse)

### ListComponentVersions



```js
amazonaws_greengrassv2.ListComponentVersions({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListComponentVersionsResponse](#listcomponentversionsresponse)

### ListCoreDevices



```js
amazonaws_greengrassv2.ListCoreDevices({}, context)
```

#### Input
* input `object`
  * thingGroupArn `string`
  * status `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListCoreDevicesResponse](#listcoredevicesresponse)

### DeleteCoreDevice



```js
amazonaws_greengrassv2.DeleteCoreDevice({
  "coreDeviceThingName": ""
}, context)
```

#### Input
* input `object`
  * coreDeviceThingName **required** `string`

#### Output
*Output schema unknown*

### GetCoreDevice



```js
amazonaws_greengrassv2.GetCoreDevice({
  "coreDeviceThingName": ""
}, context)
```

#### Input
* input `object`
  * coreDeviceThingName **required** `string`

#### Output
* output [GetCoreDeviceResponse](#getcoredeviceresponse)

### ListEffectiveDeployments



```js
amazonaws_greengrassv2.ListEffectiveDeployments({
  "coreDeviceThingName": ""
}, context)
```

#### Input
* input `object`
  * coreDeviceThingName **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListEffectiveDeploymentsResponse](#listeffectivedeploymentsresponse)

### ListInstalledComponents



```js
amazonaws_greengrassv2.ListInstalledComponents({
  "coreDeviceThingName": ""
}, context)
```

#### Input
* input `object`
  * coreDeviceThingName **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListInstalledComponentsResponse](#listinstalledcomponentsresponse)

### CreateComponentVersion



```js
amazonaws_greengrassv2.CreateComponentVersion({}, context)
```

#### Input
* input `object`
  * tags `object`: A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/tag-resources.html">Tag your resources</a> in the <i>AWS IoT Greengrass V2 Developer Guide</i>.
  * inlineRecipe `string`: <p>The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.</p> <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p>
  * lambdaFunction `object`: Contains information about an AWS Lambda function to import to create a component.
    * componentDependencies
    * componentLambdaParameters
      * environmentVariables
      * eventSources
        * items [LambdaEventSource](#lambdaeventsource)
      * execArgs
        * items [LambdaExecArg](#lambdaexecarg)
      * inputPayloadEncodingType
      * linuxProcessParams
        * containerParams
          * devices
          * memorySizeInKB
          * mountROSysfs
          * volumes
        * isolationMode
      * maxIdleTimeInSeconds
      * maxInstancesCount
      * maxQueueSize
      * pinned
      * statusTimeoutInSeconds
      * timeoutInSeconds
    * componentName
    * componentPlatforms
      * items [ComponentPlatform](#componentplatform)
    * componentVersion
    * lambdaArn

#### Output
*Output schema unknown*

### ListDeployments



```js
amazonaws_greengrassv2.ListDeployments({}, context)
```

#### Input
* input `object`
  * targetArn `string`
  * historyFilter `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListDeploymentsResponse](#listdeploymentsresponse)

### CreateDeployment



```js
amazonaws_greengrassv2.CreateDeployment({
  "targetArn": ""
}, context)
```

#### Input
* input `object`
  * components `object`: The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.
  * tags `object`: A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/tag-resources.html">Tag your resources</a> in the <i>AWS IoT Greengrass V2 Developer Guide</i>.
  * deploymentName `string`: <p>The name of the deployment.</p> <p>You can create deployments without names. If you create a deployment without a name, the AWS IoT Greengrass V2 console shows the deployment name as <code>&lt;targetType&gt;:&lt;targetName&gt;</code>, where <code>targetType</code> and <code>targetName</code> are the type and name of the deployment target.</p>
  * deploymentPolicies `object`: Contains information about policies that define how a deployment updates components and handles failure.
    * componentUpdatePolicy
      * action
      * timeoutInSeconds
    * configurationValidationPolicy
      * timeoutInSeconds
    * failureHandlingPolicy
  * iotJobConfiguration `object`: Contains information about an AWS IoT job configuration.
    * abortConfig
      * criteriaList **required**
        * items [IoTJobAbortCriteria](#iotjobabortcriteria)
    * jobExecutionsRolloutConfig
      * exponentialRate
        * baseRatePerMinute **required**
        * incrementFactor **required**
        * rateIncreaseCriteria **required**
          * numberOfNotifiedThings
          * numberOfSucceededThings
      * maximumPerMinute
    * timeoutConfig
      * inProgressTimeoutInMinutes
  * targetArn **required** `string`: The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target AWS IoT thing or thing group.

#### Output
*Output schema unknown*

### GetDeployment



```js
amazonaws_greengrassv2.GetDeployment({
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * deploymentId **required** `string`

#### Output
* output [GetDeploymentResponse](#getdeploymentresponse)

### CancelDeployment



```js
amazonaws_greengrassv2.CancelDeployment({
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * deploymentId **required** `string`

#### Output
* output [CancelDeploymentResponse](#canceldeploymentresponse)

### ResolveComponentCandidates



```js
amazonaws_greengrassv2.ResolveComponentCandidates({
  "platform": {},
  "componentCandidates": []
}, context)
```

#### Input
* input `object`
  * componentCandidates **required** `array`: The list of components to resolve.
    * items [ComponentCandidate](#componentcandidate)
  * platform **required** `object`: Contains information about a platform that a component supports.
    * attributes
    * name

#### Output
* output [ResolveComponentCandidatesResponse](#resolvecomponentcandidatesresponse)

### ListTagsForResource



```js
amazonaws_greengrassv2.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_greengrassv2.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/tag-resources.html">Tag your resources</a> in the <i>AWS IoT Greengrass V2 Developer Guide</i>.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_greengrassv2.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AccessDeniedException


### CancelDeploymentRequest
* CancelDeploymentRequest `object`

### CancelDeploymentResponse
* CancelDeploymentResponse `object`
  * message

### CloudComponentState
* CloudComponentState `string` (values: REQUESTED, INITIATED, DEPLOYABLE, FAILED, DEPRECATED)

### CloudComponentStatus
* CloudComponentStatus `object`: Contains the status of a component in the AWS IoT Greengrass service.
  * componentState
  * errors
  * message

### Component
* Component `object`: Contains information about a component.
  * arn
  * componentName
  * latestVersion
    * arn
    * componentVersion
    * creationTimestamp
    * description
    * platforms
      * items [ComponentPlatform](#componentplatform)
    * publisher

### ComponentARN
* ComponentARN `string`

### ComponentCandidate
* ComponentCandidate `object`: Contains information about a component that is a candidate to deploy to a AWS IoT Greengrass core device.
  * componentName
  * componentVersion
  * versionRequirements

### ComponentCandidateList
* ComponentCandidateList `array`
  * items [ComponentCandidate](#componentcandidate)

### ComponentConfigurationPath
* ComponentConfigurationPath `string`

### ComponentConfigurationPathList
* ComponentConfigurationPathList `array`
  * items [ComponentConfigurationPath](#componentconfigurationpath)

### ComponentConfigurationString
* ComponentConfigurationString `string`

### ComponentConfigurationUpdate
* ComponentConfigurationUpdate `object`: Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>AWS IoT Greengrass V2 Developer Guide</i>.
  * merge
  * reset
    * items [ComponentConfigurationPath](#componentconfigurationpath)

### ComponentDependencyMap
* ComponentDependencyMap `object`

### ComponentDependencyRequirement
* ComponentDependencyRequirement `object`: Contains information about a component dependency for a Lambda function component.
  * dependencyType
  * versionRequirement

### ComponentDependencyType
* ComponentDependencyType `string` (values: HARD, SOFT)

### ComponentDeploymentSpecification
* ComponentDeploymentSpecification `object`: Contains information about a component to deploy.
  * componentVersion
  * configurationUpdate
    * merge
    * reset
      * items [ComponentConfigurationPath](#componentconfigurationpath)
  * runWith
    * posixUser

### ComponentDeploymentSpecifications
* ComponentDeploymentSpecifications `object`

### ComponentLatestVersion
* ComponentLatestVersion `object`: Contains information about the latest version of a component.
  * arn
  * componentVersion
  * creationTimestamp
  * description
  * platforms
    * items [ComponentPlatform](#componentplatform)
  * publisher

### ComponentList
* ComponentList `array`
  * items [Component](#component)

### ComponentNameString
* ComponentNameString `string`

### ComponentPlatform
* ComponentPlatform `object`: Contains information about a platform that a component supports.
  * attributes
  * name

### ComponentPlatformList
* ComponentPlatformList `array`
  * items [ComponentPlatform](#componentplatform)

### ComponentRunWith
* ComponentRunWith `object`: Contains information system user and group that the AWS IoT Greengrass Core software uses to run component processes on the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>AWS IoT Greengrass V2 Developer Guide</i>.
  * posixUser

### ComponentVersionARN
* ComponentVersionARN `string`

### ComponentVersionList
* ComponentVersionList `array`
  * items [ComponentVersionListItem](#componentversionlistitem)

### ComponentVersionListItem
* ComponentVersionListItem `object`: Contains information about a component version in a list.
  * arn
  * componentName
  * componentVersion

### ComponentVersionRequirementMap
* ComponentVersionRequirementMap `object`

### ComponentVersionString
* ComponentVersionString `string`

### ComponentVisibilityScope
* ComponentVisibilityScope `string` (values: PRIVATE, PUBLIC)

### ConflictException


### CoreDevice
* CoreDevice `object`: Contains information about a AWS IoT Greengrass core device, which is an AWS IoT thing that runs the AWS IoT Greengrass Core software.
  * coreDeviceThingName
  * lastStatusUpdateTimestamp
  * status

### CoreDeviceArchitectureString
* CoreDeviceArchitectureString `string`

### CoreDevicePlatformString
* CoreDevicePlatformString `string`

### CoreDeviceStatus
* CoreDeviceStatus `string` (values: HEALTHY, UNHEALTHY)

### CoreDeviceThingName
* CoreDeviceThingName `string`

### CoreDevicesList
* CoreDevicesList `array`
  * items [CoreDevice](#coredevice)

### CreateComponentVersionRequest
* CreateComponentVersionRequest `object`
  * tags
  * inlineRecipe
  * lambdaFunction
    * componentDependencies
    * componentLambdaParameters
      * environmentVariables
      * eventSources
        * items [LambdaEventSource](#lambdaeventsource)
      * execArgs
        * items [LambdaExecArg](#lambdaexecarg)
      * inputPayloadEncodingType
      * linuxProcessParams
        * containerParams
          * devices
          * memorySizeInKB
          * mountROSysfs
          * volumes
        * isolationMode
      * maxIdleTimeInSeconds
      * maxInstancesCount
      * maxQueueSize
      * pinned
      * statusTimeoutInSeconds
      * timeoutInSeconds
    * componentName
    * componentPlatforms
      * items [ComponentPlatform](#componentplatform)
    * componentVersion
    * lambdaArn **required**

### CreateComponentVersionResponse
* CreateComponentVersionResponse `object`
  * arn
  * componentName **required**
  * componentVersion **required**
  * creationTimestamp **required**
  * status **required**
    * componentState
    * errors
    * message

### CreateDeploymentRequest
* CreateDeploymentRequest `object`
  * components
  * tags
  * deploymentName
  * deploymentPolicies
    * componentUpdatePolicy
      * action
      * timeoutInSeconds
    * configurationValidationPolicy
      * timeoutInSeconds
    * failureHandlingPolicy
  * iotJobConfiguration
    * abortConfig
      * criteriaList **required**
        * items [IoTJobAbortCriteria](#iotjobabortcriteria)
    * jobExecutionsRolloutConfig
      * exponentialRate
        * baseRatePerMinute **required**
        * incrementFactor **required**
        * rateIncreaseCriteria **required**
          * numberOfNotifiedThings
          * numberOfSucceededThings
      * maximumPerMinute
    * timeoutConfig
      * inProgressTimeoutInMinutes
  * targetArn **required**

### CreateDeploymentResponse
* CreateDeploymentResponse `object`
  * deploymentId
  * iotJobArn
  * iotJobId

### DefaultMaxResults
* DefaultMaxResults `integer`

### DeleteComponentRequest
* DeleteComponentRequest `object`

### DeleteCoreDeviceRequest
* DeleteCoreDeviceRequest `object`

### Deployment
* Deployment `object`: Contains information about a deployment.
  * creationTimestamp
  * deploymentId
  * deploymentName
  * deploymentStatus
  * isLatestForTarget
  * revisionId
  * targetArn

### DeploymentComponentUpdatePolicy
* DeploymentComponentUpdatePolicy `object`: <p>Contains information about a deployment's policy that defines when components are safe to update.</p> <p>Each component on a device can report whether or not it's ready to update. After a component and its dependencies are ready, they can apply the update in the deployment. You can configure whether or not the deployment notifies components of an update and waits for a response. You specify the amount of time each component has to respond to the update notification.</p>
  * action
  * timeoutInSeconds

### DeploymentComponentUpdatePolicyAction
* DeploymentComponentUpdatePolicyAction `string` (values: NOTIFY_COMPONENTS, SKIP_NOTIFY_COMPONENTS)

### DeploymentConfigurationValidationPolicy
* DeploymentConfigurationValidationPolicy `object`: Contains information about how long a component on a core device can validate its configuration updates before it times out. Components can use the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetovalidateconfigurationupdates">SubscribeToValidateConfigurationUpdates</a> IPC operation to receive notifications when a deployment specifies a configuration update. Then, components can respond with the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-sendconfigurationvalidityreport">SendConfigurationValidityReport</a> IPC operation. For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/latest/developerguide/create-deployments.html">Create deployments</a> in the <i>AWS IoT Greengrass V2 Developer Guide</i>.
  * timeoutInSeconds

### DeploymentFailureHandlingPolicy
* DeploymentFailureHandlingPolicy `string` (values: ROLLBACK, DO_NOTHING)

### DeploymentHistoryFilter
* DeploymentHistoryFilter `string` (values: ALL, LATEST_ONLY)

### DeploymentID
* DeploymentID `string`

### DeploymentIoTJobConfiguration
* DeploymentIoTJobConfiguration `object`: Contains information about an AWS IoT job configuration.
  * abortConfig
    * criteriaList **required**
      * items [IoTJobAbortCriteria](#iotjobabortcriteria)
  * jobExecutionsRolloutConfig
    * exponentialRate
      * baseRatePerMinute **required**
      * incrementFactor **required**
      * rateIncreaseCriteria **required**
        * numberOfNotifiedThings
        * numberOfSucceededThings
    * maximumPerMinute
  * timeoutConfig
    * inProgressTimeoutInMinutes

### DeploymentList
* DeploymentList `array`
  * items [Deployment](#deployment)

### DeploymentName
* DeploymentName `string`

### DeploymentPolicies
* DeploymentPolicies `object`: Contains information about policies that define how a deployment updates components and handles failure.
  * componentUpdatePolicy
    * action
    * timeoutInSeconds
  * configurationValidationPolicy
    * timeoutInSeconds
  * failureHandlingPolicy

### DeploymentStatus
* DeploymentStatus `string` (values: ACTIVE, COMPLETED, CANCELED, FAILED, INACTIVE)

### DescribeComponentRequest
* DescribeComponentRequest `object`

### DescribeComponentResponse
* DescribeComponentResponse `object`
  * tags
  * arn
  * componentName
  * componentVersion
  * creationTimestamp
  * description
  * platforms
    * items [ComponentPlatform](#componentplatform)
  * publisher
  * status
    * componentState
    * errors
    * message

### Description
* Description `string`

### DescriptionString
* DescriptionString `string`

### EffectiveDeployment
* EffectiveDeployment `object`: Contains information about a deployment job that AWS IoT Greengrass sends to a AWS IoT Greengrass core device.
  * coreDeviceExecutionStatus **required**
  * creationTimestamp **required**
  * deploymentId **required**
  * deploymentName **required**
  * description
  * iotJobArn
  * iotJobId
  * modifiedTimestamp **required**
  * reason
  * targetArn **required**

### EffectiveDeploymentExecutionStatus
* EffectiveDeploymentExecutionStatus `string` (values: IN_PROGRESS, QUEUED, FAILED, COMPLETED, TIMED_OUT, CANCELED, REJECTED)

### EffectiveDeploymentsList
* EffectiveDeploymentsList `array`
  * items [EffectiveDeployment](#effectivedeployment)

### FileSystemPath
* FileSystemPath `string`

### GGCVersion
* GGCVersion `string`

### GenericV2ARN
* GenericV2ARN `string`

### GetComponentRequest
* GetComponentRequest `object`

### GetComponentResponse
* GetComponentResponse `object`
  * tags
  * recipe **required**
  * recipeOutputFormat **required**

### GetComponentVersionArtifactRequest
* GetComponentVersionArtifactRequest `object`

### GetComponentVersionArtifactResponse
* GetComponentVersionArtifactResponse `object`
  * preSignedUrl **required**

### GetCoreDeviceRequest
* GetCoreDeviceRequest `object`

### GetCoreDeviceResponse
* GetCoreDeviceResponse `object`
  * tags
  * architecture
  * coreDeviceThingName
  * coreVersion
  * lastStatusUpdateTimestamp
  * platform
  * status

### GetDeploymentRequest
* GetDeploymentRequest `object`

### GetDeploymentResponse
* GetDeploymentResponse `object`
  * components
  * tags
  * creationTimestamp
  * deploymentId
  * deploymentName
  * deploymentPolicies
    * componentUpdatePolicy
      * action
      * timeoutInSeconds
    * configurationValidationPolicy
      * timeoutInSeconds
    * failureHandlingPolicy
  * deploymentStatus
  * iotJobArn
  * iotJobConfiguration
    * abortConfig
      * criteriaList **required**
        * items [IoTJobAbortCriteria](#iotjobabortcriteria)
    * jobExecutionsRolloutConfig
      * exponentialRate
        * baseRatePerMinute **required**
        * incrementFactor **required**
        * rateIncreaseCriteria **required**
          * numberOfNotifiedThings
          * numberOfSucceededThings
      * maximumPerMinute
    * timeoutConfig
      * inProgressTimeoutInMinutes
  * iotJobId
  * isLatestForTarget
  * revisionId
  * targetArn

### InstalledComponent
* InstalledComponent `object`: Contains information about a component on a AWS IoT Greengrass core device.
  * componentName
  * componentVersion
  * isRoot
  * lifecycleState
  * lifecycleStateDetails

### InstalledComponentLifecycleState
* InstalledComponentLifecycleState `string` (values: NEW, INSTALLED, STARTING, RUNNING, STOPPING, ERRORED, BROKEN, FINISHED)

### InstalledComponentList
* InstalledComponentList `array`
  * items [InstalledComponent](#installedcomponent)

### InternalServerException


### IoTJobARN
* IoTJobARN `string`

### IoTJobAbortAction
* IoTJobAbortAction `string` (values: CANCEL)

### IoTJobAbortConfig
* IoTJobAbortConfig `object`: Contains a list of criteria that define when and how to cancel a configuration deployment.
  * criteriaList **required**
    * items [IoTJobAbortCriteria](#iotjobabortcriteria)

### IoTJobAbortCriteria
* IoTJobAbortCriteria `object`: <p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol>
  * action **required**
  * failureType **required**
  * minNumberOfExecutedThings **required**
  * thresholdPercentage **required**

### IoTJobAbortCriteriaList
* IoTJobAbortCriteriaList `array`
  * items [IoTJobAbortCriteria](#iotjobabortcriteria)

### IoTJobAbortThresholdPercentage
* IoTJobAbortThresholdPercentage `number`

### IoTJobExecutionFailureType
* IoTJobExecutionFailureType `string` (values: FAILED, REJECTED, TIMED_OUT, ALL)

### IoTJobExecutionsRolloutConfig
* IoTJobExecutionsRolloutConfig `object`: Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.
  * exponentialRate
    * baseRatePerMinute **required**
    * incrementFactor **required**
    * rateIncreaseCriteria **required**
      * numberOfNotifiedThings
      * numberOfSucceededThings
  * maximumPerMinute

### IoTJobExponentialRolloutRate
* IoTJobExponentialRolloutRate `object`: Contains information about an exponential rollout rate for a configuration deployment job.
  * baseRatePerMinute **required**
  * incrementFactor **required**
  * rateIncreaseCriteria **required**
    * numberOfNotifiedThings
    * numberOfSucceededThings

### IoTJobId
* IoTJobId `string`

### IoTJobInProgressTimeoutInMinutes
* IoTJobInProgressTimeoutInMinutes `integer`

### IoTJobMaxExecutionsPerMin
* IoTJobMaxExecutionsPerMin `integer`

### IoTJobMinimumNumberOfExecutedThings
* IoTJobMinimumNumberOfExecutedThings `integer`

### IoTJobNumberOfThings
* IoTJobNumberOfThings `integer`

### IoTJobRateIncreaseCriteria
* IoTJobRateIncreaseCriteria `object`: Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>.
  * numberOfNotifiedThings
  * numberOfSucceededThings

### IoTJobRolloutBaseRatePerMinute
* IoTJobRolloutBaseRatePerMinute `integer`

### IoTJobRolloutIncrementFactor
* IoTJobRolloutIncrementFactor `number`

### IoTJobTimeoutConfig
* IoTJobTimeoutConfig `object`: Contains information about the timeout configuration for a job.
  * inProgressTimeoutInMinutes

### IsLatestForTarget
* IsLatestForTarget `boolean`

### IsRoot
* IsRoot `boolean`

### LambdaContainerParams
* LambdaContainerParams `object`: Contains information about a container in which AWS Lambda functions run on AWS IoT Greengrass core devices.
  * devices
    * items [LambdaDeviceMount](#lambdadevicemount)
  * memorySizeInKB
  * mountROSysfs
  * volumes
    * items [LambdaVolumeMount](#lambdavolumemount)

### LambdaDeviceList
* LambdaDeviceList `array`
  * items [LambdaDeviceMount](#lambdadevicemount)

### LambdaDeviceMount
* LambdaDeviceMount `object`: Contains information about a device that Linux processes in a container can access.
  * addGroupOwner
  * path **required**
  * permission

### LambdaEnvironmentVariables
* LambdaEnvironmentVariables `object`

### LambdaEventSource
* LambdaEventSource `object`: Contains information about an event source for an AWS Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
  * topic **required**
  * type **required**

### LambdaEventSourceList
* LambdaEventSourceList `array`
  * items [LambdaEventSource](#lambdaeventsource)

### LambdaEventSourceType
* LambdaEventSourceType `string` (values: PUB_SUB, IOT_CORE)

### LambdaExecArg
* LambdaExecArg `string`

### LambdaExecArgsList
* LambdaExecArgsList `array`
  * items [LambdaExecArg](#lambdaexecarg)

### LambdaExecutionParameters
* LambdaExecutionParameters `object`: Contains parameters for a Lambda function that runs on AWS IoT Greengrass.
  * environmentVariables
  * eventSources
    * items [LambdaEventSource](#lambdaeventsource)
  * execArgs
    * items [LambdaExecArg](#lambdaexecarg)
  * inputPayloadEncodingType
  * linuxProcessParams
    * containerParams
      * devices
        * items [LambdaDeviceMount](#lambdadevicemount)
      * memorySizeInKB
      * mountROSysfs
      * volumes
        * items [LambdaVolumeMount](#lambdavolumemount)
    * isolationMode
  * maxIdleTimeInSeconds
  * maxInstancesCount
  * maxQueueSize
  * pinned
  * statusTimeoutInSeconds
  * timeoutInSeconds

### LambdaFilesystemPermission
* LambdaFilesystemPermission `string` (values: ro, rw)

### LambdaFunctionARNWithVersionNumber
* LambdaFunctionARNWithVersionNumber `string`

### LambdaFunctionRecipeSource
* LambdaFunctionRecipeSource `object`: Contains information about an AWS Lambda function to import to create a component.
  * componentDependencies
  * componentLambdaParameters
    * environmentVariables
    * eventSources
      * items [LambdaEventSource](#lambdaeventsource)
    * execArgs
      * items [LambdaExecArg](#lambdaexecarg)
    * inputPayloadEncodingType
    * linuxProcessParams
      * containerParams
        * devices
          * items [LambdaDeviceMount](#lambdadevicemount)
        * memorySizeInKB
        * mountROSysfs
        * volumes
          * items [LambdaVolumeMount](#lambdavolumemount)
      * isolationMode
    * maxIdleTimeInSeconds
    * maxInstancesCount
    * maxQueueSize
    * pinned
    * statusTimeoutInSeconds
    * timeoutInSeconds
  * componentName
  * componentPlatforms
    * items [ComponentPlatform](#componentplatform)
  * componentVersion
  * lambdaArn **required**

### LambdaInputPayloadEncodingType
* LambdaInputPayloadEncodingType `string` (values: json, binary)

### LambdaIsolationMode
* LambdaIsolationMode `string` (values: GreengrassContainer, NoContainer)

### LambdaLinuxProcessParams
* LambdaLinuxProcessParams `object`: Contains parameters for a Linux process that contains an AWS Lambda function.
  * containerParams
    * devices
      * items [LambdaDeviceMount](#lambdadevicemount)
    * memorySizeInKB
    * mountROSysfs
    * volumes
      * items [LambdaVolumeMount](#lambdavolumemount)
  * isolationMode

### LambdaVolumeList
* LambdaVolumeList `array`
  * items [LambdaVolumeMount](#lambdavolumemount)

### LambdaVolumeMount
* LambdaVolumeMount `object`: Contains information about a volume that Linux processes in a container can access. When you define a volume, the AWS IoT Greengrass Core software mounts the source files to the destination inside the container.
  * addGroupOwner
  * destinationPath **required**
  * permission
  * sourcePath **required**

### LifecycleStateDetails
* LifecycleStateDetails `string`

### ListComponentVersionsRequest
* ListComponentVersionsRequest `object`

### ListComponentVersionsResponse
* ListComponentVersionsResponse `object`
  * componentVersions
    * items [ComponentVersionListItem](#componentversionlistitem)
  * nextToken

### ListComponentsRequest
* ListComponentsRequest `object`

### ListComponentsResponse
* ListComponentsResponse `object`
  * components
    * items [Component](#component)
  * nextToken

### ListCoreDevicesRequest
* ListCoreDevicesRequest `object`

### ListCoreDevicesResponse
* ListCoreDevicesResponse `object`
  * coreDevices
    * items [CoreDevice](#coredevice)
  * nextToken

### ListDeploymentsRequest
* ListDeploymentsRequest `object`

### ListDeploymentsResponse
* ListDeploymentsResponse `object`
  * deployments
    * items [Deployment](#deployment)
  * nextToken

### ListEffectiveDeploymentsRequest
* ListEffectiveDeploymentsRequest `object`

### ListEffectiveDeploymentsResponse
* ListEffectiveDeploymentsResponse `object`
  * effectiveDeployments
    * items [EffectiveDeployment](#effectivedeployment)
  * nextToken

### ListInstalledComponentsRequest
* ListInstalledComponentsRequest `object`

### ListInstalledComponentsResponse
* ListInstalledComponentsResponse `object`
  * installedComponents
    * items [InstalledComponent](#installedcomponent)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### NextTokenString
* NextTokenString `string`

### NonEmptyString
* NonEmptyString `string`

### NullableString
* NullableString `string`

### OptionalBoolean
* OptionalBoolean `boolean`

### OptionalInteger
* OptionalInteger `integer`

### PlatformAttributesMap
* PlatformAttributesMap `object`

### PublisherString
* PublisherString `string`

### Reason
* Reason `string`

### RecipeBlob
* RecipeBlob `string`

### RecipeOutputFormat
* RecipeOutputFormat `string` (values: JSON, YAML)

### ResolveComponentCandidatesRequest
* ResolveComponentCandidatesRequest `object`
  * componentCandidates **required**
    * items [ComponentCandidate](#componentcandidate)
  * platform **required**
    * attributes
    * name

### ResolveComponentCandidatesResponse
* ResolveComponentCandidatesResponse `object`
  * resolvedComponentVersions
    * items [ResolvedComponentVersion](#resolvedcomponentversion)

### ResolvedComponentVersion
* ResolvedComponentVersion `object`: Contains information about a component version that is compatible to run on a AWS IoT Greengrass core device.
  * arn
  * componentName
  * componentVersion
  * recipe

### ResolvedComponentVersionsList
* ResolvedComponentVersionsList `array`
  * items [ResolvedComponentVersion](#resolvedcomponentversion)

### ResourceNotFoundException


### ServiceQuotaExceededException


### String
* String `string`

### StringMap
* StringMap `object`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TargetARN
* TargetARN `string`

### ThingGroupARN
* ThingGroupARN `string`

### ThrottlingException


### Timestamp
* Timestamp `string`

### TopicString
* TopicString `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### ValidationException



