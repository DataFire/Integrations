# @datafire/amazonaws_ecs

Client library for Amazon EC2 Container Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ecs
```
```js
let amazonaws_ecs = require('@datafire/amazonaws_ecs').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Elastic Container Service</fullname> <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster. You can host your cluster on a serverless infrastructure that is managed by Amazon ECS by launching your services or tasks using the Fargate launch type. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage by using the EC2 launch type. For more information about launch types, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a>.</p> <p>Amazon ECS lets you launch and stop container-based applications with simple API calls, allows you to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features.</p> <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates the need for you to operate your own cluster management and configuration management systems or worry about scaling your management infrastructure.</p>

## Actions

### CreateCapacityProvider



```js
amazonaws_ecs.CreateCapacityProvider({
  "name": null,
  "autoScalingGroupProvider": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * autoScalingGroupProvider **required**
    * autoScalingGroupArn **required**
    * managedScaling
      * instanceWarmupPeriod
      * maximumScalingStepSize
      * minimumScalingStepSize
      * status
      * targetCapacity
    * managedTerminationProtection
  * name **required**

#### Output
* output [CreateCapacityProviderResponse](#createcapacityproviderresponse)

### CreateCluster



```js
amazonaws_ecs.CreateCluster({}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * capacityProviders
    * items [String](#string)
  * clusterName
  * defaultCapacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * settings
    * items [ClusterSetting](#clustersetting)

#### Output
* output [CreateClusterResponse](#createclusterresponse)

### CreateService



```js
amazonaws_ecs.CreateService({
  "serviceName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * clientToken
  * cluster
  * deploymentConfiguration
    * deploymentCircuitBreaker
      * enable **required**
      * rollback **required**
    * maximumPercent
    * minimumHealthyPercent
  * deploymentController
    * type **required**
  * desiredCount
  * enableECSManagedTags
  * healthCheckGracePeriodSeconds
  * launchType
  * loadBalancers
    * items [LoadBalancer](#loadbalancer)
  * networkConfiguration
    * awsvpcConfiguration
      * assignPublicIp
      * securityGroups
        * items [String](#string)
      * subnets **required**
        * items [String](#string)
  * placementConstraints
    * items [PlacementConstraint](#placementconstraint)
  * placementStrategy
    * items [PlacementStrategy](#placementstrategy)
  * platformVersion
  * propagateTags
  * role
  * schedulingStrategy
  * serviceName **required**
  * serviceRegistries
    * items [ServiceRegistry](#serviceregistry)
  * taskDefinition

#### Output
* output [CreateServiceResponse](#createserviceresponse)

### CreateTaskSet



```js
amazonaws_ecs.CreateTaskSet({
  "service": null,
  "cluster": null,
  "taskDefinition": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * clientToken
  * cluster **required**
  * externalId
  * launchType
  * loadBalancers
    * items [LoadBalancer](#loadbalancer)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * platformVersion
  * scale [Scale](#scale)
  * service **required**
  * serviceRegistries
    * items [ServiceRegistry](#serviceregistry)
  * taskDefinition **required**

#### Output
* output [CreateTaskSetResponse](#createtasksetresponse)

### DeleteAccountSetting



```js
amazonaws_ecs.DeleteAccountSetting({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**
  * principalArn

#### Output
* output [DeleteAccountSettingResponse](#deleteaccountsettingresponse)

### DeleteAttributes



```js
amazonaws_ecs.DeleteAttributes({
  "attributes": null
}, context)
```

#### Input
* input `object`
  * attributes **required**
    * items [Attribute](#attribute)
  * cluster

#### Output
* output [DeleteAttributesResponse](#deleteattributesresponse)

### DeleteCapacityProvider



```js
amazonaws_ecs.DeleteCapacityProvider({
  "capacityProvider": null
}, context)
```

#### Input
* input `object`
  * capacityProvider **required**

#### Output
* output [DeleteCapacityProviderResponse](#deletecapacityproviderresponse)

### DeleteCluster



```js
amazonaws_ecs.DeleteCluster({
  "cluster": null
}, context)
```

#### Input
* input `object`
  * cluster **required**

#### Output
* output [DeleteClusterResponse](#deleteclusterresponse)

### DeleteService



```js
amazonaws_ecs.DeleteService({
  "service": null
}, context)
```

#### Input
* input `object`
  * cluster
  * force
  * service **required**

#### Output
* output [DeleteServiceResponse](#deleteserviceresponse)

### DeleteTaskSet



```js
amazonaws_ecs.DeleteTaskSet({
  "cluster": null,
  "service": null,
  "taskSet": null
}, context)
```

#### Input
* input `object`
  * cluster **required**
  * force
  * service **required**
  * taskSet **required**

#### Output
* output [DeleteTaskSetResponse](#deletetasksetresponse)

### DeregisterContainerInstance



```js
amazonaws_ecs.DeregisterContainerInstance({
  "containerInstance": null
}, context)
```

#### Input
* input `object`
  * cluster
  * containerInstance **required**
  * force

#### Output
* output [DeregisterContainerInstanceResponse](#deregistercontainerinstanceresponse)

### DeregisterTaskDefinition



```js
amazonaws_ecs.DeregisterTaskDefinition({
  "taskDefinition": null
}, context)
```

#### Input
* input `object`
  * taskDefinition **required**

#### Output
* output [DeregisterTaskDefinitionResponse](#deregistertaskdefinitionresponse)

### DescribeCapacityProviders



```js
amazonaws_ecs.DescribeCapacityProviders({}, context)
```

#### Input
* input `object`
  * capacityProviders
    * items [String](#string)
  * include
    * items [CapacityProviderField](#capacityproviderfield)
  * maxResults
  * nextToken

#### Output
* output [DescribeCapacityProvidersResponse](#describecapacityprovidersresponse)

### DescribeClusters



```js
amazonaws_ecs.DescribeClusters({}, context)
```

#### Input
* input `object`
  * clusters
    * items [String](#string)
  * include
    * items [ClusterField](#clusterfield)

#### Output
* output [DescribeClustersResponse](#describeclustersresponse)

### DescribeContainerInstances



```js
amazonaws_ecs.DescribeContainerInstances({
  "containerInstances": null
}, context)
```

#### Input
* input `object`
  * cluster
  * containerInstances **required**
    * items [String](#string)
  * include
    * items [ContainerInstanceField](#containerinstancefield)

#### Output
* output [DescribeContainerInstancesResponse](#describecontainerinstancesresponse)

### DescribeServices



```js
amazonaws_ecs.DescribeServices({
  "services": null
}, context)
```

#### Input
* input `object`
  * cluster
  * include
    * items [ServiceField](#servicefield)
  * services **required**
    * items [String](#string)

#### Output
* output [DescribeServicesResponse](#describeservicesresponse)

### DescribeTaskDefinition



```js
amazonaws_ecs.DescribeTaskDefinition({
  "taskDefinition": null
}, context)
```

#### Input
* input `object`
  * include
    * items [TaskDefinitionField](#taskdefinitionfield)
  * taskDefinition **required**

#### Output
* output [DescribeTaskDefinitionResponse](#describetaskdefinitionresponse)

### DescribeTaskSets



```js
amazonaws_ecs.DescribeTaskSets({
  "cluster": null,
  "service": null
}, context)
```

#### Input
* input `object`
  * cluster **required**
  * include
    * items [TaskSetField](#tasksetfield)
  * service **required**
  * taskSets
    * items [String](#string)

#### Output
* output [DescribeTaskSetsResponse](#describetasksetsresponse)

### DescribeTasks



```js
amazonaws_ecs.DescribeTasks({
  "tasks": null
}, context)
```

#### Input
* input `object`
  * cluster
  * include
    * items [TaskField](#taskfield)
  * tasks **required**
    * items [String](#string)

#### Output
* output [DescribeTasksResponse](#describetasksresponse)

### DiscoverPollEndpoint



```js
amazonaws_ecs.DiscoverPollEndpoint({}, context)
```

#### Input
* input `object`
  * cluster
  * containerInstance

#### Output
* output [DiscoverPollEndpointResponse](#discoverpollendpointresponse)

### ListAccountSettings



```js
amazonaws_ecs.ListAccountSettings({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * effectiveSettings
  * maxResults
  * name
  * nextToken
  * principalArn
  * value

#### Output
* output [ListAccountSettingsResponse](#listaccountsettingsresponse)

### ListAttributes



```js
amazonaws_ecs.ListAttributes({
  "targetType": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * attributeName
  * attributeValue
  * cluster
  * maxResults
  * nextToken
  * targetType **required**

#### Output
* output [ListAttributesResponse](#listattributesresponse)

### ListClusters



```js
amazonaws_ecs.ListClusters({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken

#### Output
* output [ListClustersResponse](#listclustersresponse)

### ListContainerInstances



```js
amazonaws_ecs.ListContainerInstances({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * cluster
  * filter
  * maxResults
  * nextToken
  * status

#### Output
* output [ListContainerInstancesResponse](#listcontainerinstancesresponse)

### ListServices



```js
amazonaws_ecs.ListServices({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * cluster
  * launchType
  * maxResults
  * nextToken
  * schedulingStrategy

#### Output
* output [ListServicesResponse](#listservicesresponse)

### ListTagsForResource



```js
amazonaws_ecs.ListTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTaskDefinitionFamilies



```js
amazonaws_ecs.ListTaskDefinitionFamilies({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * familyPrefix
  * maxResults
  * nextToken
  * status

#### Output
* output [ListTaskDefinitionFamiliesResponse](#listtaskdefinitionfamiliesresponse)

### ListTaskDefinitions



```js
amazonaws_ecs.ListTaskDefinitions({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * familyPrefix
  * maxResults
  * nextToken
  * sort
  * status

#### Output
* output [ListTaskDefinitionsResponse](#listtaskdefinitionsresponse)

### ListTasks



```js
amazonaws_ecs.ListTasks({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * cluster
  * containerInstance
  * desiredStatus
  * family
  * launchType
  * maxResults
  * nextToken
  * serviceName
  * startedBy

#### Output
* output [ListTasksResponse](#listtasksresponse)

### PutAccountSetting



```js
amazonaws_ecs.PutAccountSetting({
  "name": null,
  "value": null
}, context)
```

#### Input
* input `object`
  * name **required**
  * principalArn
  * value **required**

#### Output
* output [PutAccountSettingResponse](#putaccountsettingresponse)

### PutAccountSettingDefault



```js
amazonaws_ecs.PutAccountSettingDefault({
  "name": null,
  "value": null
}, context)
```

#### Input
* input `object`
  * name **required**
  * value **required**

#### Output
* output [PutAccountSettingDefaultResponse](#putaccountsettingdefaultresponse)

### PutAttributes



```js
amazonaws_ecs.PutAttributes({
  "attributes": null
}, context)
```

#### Input
* input `object`
  * attributes **required**
    * items [Attribute](#attribute)
  * cluster

#### Output
* output [PutAttributesResponse](#putattributesresponse)

### PutClusterCapacityProviders



```js
amazonaws_ecs.PutClusterCapacityProviders({
  "cluster": null,
  "capacityProviders": null,
  "defaultCapacityProviderStrategy": null
}, context)
```

#### Input
* input `object`
  * capacityProviders **required**
    * items [String](#string)
  * cluster **required**
  * defaultCapacityProviderStrategy **required**
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)

#### Output
* output [PutClusterCapacityProvidersResponse](#putclustercapacityprovidersresponse)

### RegisterContainerInstance



```js
amazonaws_ecs.RegisterContainerInstance({}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * attributes
    * items [Attribute](#attribute)
  * cluster
  * containerInstanceArn
  * instanceIdentityDocument
  * instanceIdentityDocumentSignature
  * platformDevices
    * items [PlatformDevice](#platformdevice)
  * totalResources
    * items [Resource](#resource)
  * versionInfo
    * agentHash
    * agentVersion
    * dockerVersion

#### Output
* output [RegisterContainerInstanceResponse](#registercontainerinstanceresponse)

### RegisterTaskDefinition



```js
amazonaws_ecs.RegisterTaskDefinition({
  "family": null,
  "containerDefinitions": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * containerDefinitions **required**
    * items [ContainerDefinition](#containerdefinition)
  * cpu
  * executionRoleArn
  * family **required**
  * inferenceAccelerators
    * items [InferenceAccelerator](#inferenceaccelerator)
  * ipcMode
  * memory
  * networkMode
  * pidMode
  * placementConstraints
    * items [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)
  * proxyConfiguration [ProxyConfiguration](#proxyconfiguration)
  * requiresCompatibilities
    * items [Compatibility](#compatibility)
  * taskRoleArn
  * volumes
    * items [Volume](#volume)

#### Output
* output [RegisterTaskDefinitionResponse](#registertaskdefinitionresponse)

### RunTask



```js
amazonaws_ecs.RunTask({
  "taskDefinition": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * cluster
  * count
  * enableECSManagedTags
  * group
  * launchType
  * networkConfiguration
    * awsvpcConfiguration
      * assignPublicIp
      * securityGroups
        * items [String](#string)
      * subnets **required**
        * items [String](#string)
  * overrides
    * containerOverrides
      * items [ContainerOverride](#containeroverride)
    * cpu
    * executionRoleArn
    * inferenceAcceleratorOverrides
      * items [InferenceAcceleratorOverride](#inferenceacceleratoroverride)
    * memory
    * taskRoleArn
  * placementConstraints
    * items [PlacementConstraint](#placementconstraint)
  * placementStrategy
    * items [PlacementStrategy](#placementstrategy)
  * platformVersion
  * propagateTags
  * referenceId
  * startedBy
  * taskDefinition **required**

#### Output
* output [RunTaskResponse](#runtaskresponse)

### StartTask



```js
amazonaws_ecs.StartTask({
  "containerInstances": null,
  "taskDefinition": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * cluster
  * containerInstances **required**
    * items [String](#string)
  * enableECSManagedTags
  * group
  * networkConfiguration
    * awsvpcConfiguration
      * assignPublicIp
      * securityGroups
        * items [String](#string)
      * subnets **required**
        * items [String](#string)
  * overrides
    * containerOverrides
      * items [ContainerOverride](#containeroverride)
    * cpu
    * executionRoleArn
    * inferenceAcceleratorOverrides
      * items [InferenceAcceleratorOverride](#inferenceacceleratoroverride)
    * memory
    * taskRoleArn
  * propagateTags
  * referenceId
  * startedBy
  * taskDefinition **required**

#### Output
* output [StartTaskResponse](#starttaskresponse)

### StopTask



```js
amazonaws_ecs.StopTask({
  "task": null
}, context)
```

#### Input
* input `object`
  * cluster
  * reason
  * task **required**

#### Output
* output [StopTaskResponse](#stoptaskresponse)

### SubmitAttachmentStateChanges



```js
amazonaws_ecs.SubmitAttachmentStateChanges({
  "attachments": null
}, context)
```

#### Input
* input `object`
  * attachments **required**
    * items [AttachmentStateChange](#attachmentstatechange)
  * cluster

#### Output
* output [SubmitAttachmentStateChangesResponse](#submitattachmentstatechangesresponse)

### SubmitContainerStateChange



```js
amazonaws_ecs.SubmitContainerStateChange({}, context)
```

#### Input
* input `object`
  * cluster
  * containerName
  * exitCode
  * networkBindings
    * items [NetworkBinding](#networkbinding)
  * reason
  * runtimeId
  * status
  * task

#### Output
* output [SubmitContainerStateChangeResponse](#submitcontainerstatechangeresponse)

### SubmitTaskStateChange



```js
amazonaws_ecs.SubmitTaskStateChange({}, context)
```

#### Input
* input `object`
  * attachments
    * items [AttachmentStateChange](#attachmentstatechange)
  * cluster
  * containers
    * items [ContainerStateChange](#containerstatechange)
  * executionStoppedAt
  * pullStartedAt
  * pullStoppedAt
  * reason
  * status
  * task

#### Output
* output [SubmitTaskStateChangeResponse](#submittaskstatechangeresponse)

### TagResource



```js
amazonaws_ecs.TagResource({
  "resourceArn": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_ecs.UntagResource({
  "resourceArn": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateCapacityProvider



```js
amazonaws_ecs.UpdateCapacityProvider({
  "name": null,
  "autoScalingGroupProvider": null
}, context)
```

#### Input
* input `object`
  * autoScalingGroupProvider **required**
    * managedScaling [ManagedScaling](#managedscaling)
    * managedTerminationProtection
  * name **required**

#### Output
* output [UpdateCapacityProviderResponse](#updatecapacityproviderresponse)

### UpdateClusterSettings



```js
amazonaws_ecs.UpdateClusterSettings({
  "cluster": null,
  "settings": null
}, context)
```

#### Input
* input `object`
  * cluster **required**
  * settings **required**
    * items [ClusterSetting](#clustersetting)

#### Output
* output [UpdateClusterSettingsResponse](#updateclustersettingsresponse)

### UpdateContainerAgent



```js
amazonaws_ecs.UpdateContainerAgent({
  "containerInstance": null
}, context)
```

#### Input
* input `object`
  * cluster
  * containerInstance **required**

#### Output
* output [UpdateContainerAgentResponse](#updatecontaineragentresponse)

### UpdateContainerInstancesState



```js
amazonaws_ecs.UpdateContainerInstancesState({
  "containerInstances": null,
  "status": null
}, context)
```

#### Input
* input `object`
  * cluster
  * containerInstances **required**
    * items [String](#string)
  * status **required**

#### Output
* output [UpdateContainerInstancesStateResponse](#updatecontainerinstancesstateresponse)

### UpdateService



```js
amazonaws_ecs.UpdateService({
  "service": null
}, context)
```

#### Input
* input `object`
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * cluster
  * deploymentConfiguration
    * deploymentCircuitBreaker
      * enable **required**
      * rollback **required**
    * maximumPercent
    * minimumHealthyPercent
  * desiredCount
  * forceNewDeployment
  * healthCheckGracePeriodSeconds
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * placementConstraints
    * items [PlacementConstraint](#placementconstraint)
  * placementStrategy
    * items [PlacementStrategy](#placementstrategy)
  * platformVersion
  * service **required**
  * taskDefinition

#### Output
* output [UpdateServiceResponse](#updateserviceresponse)

### UpdateServicePrimaryTaskSet



```js
amazonaws_ecs.UpdateServicePrimaryTaskSet({
  "cluster": null,
  "service": null,
  "primaryTaskSet": null
}, context)
```

#### Input
* input `object`
  * cluster **required**
  * primaryTaskSet **required**
  * service **required**

#### Output
* output [UpdateServicePrimaryTaskSetResponse](#updateserviceprimarytasksetresponse)

### UpdateTaskSet



```js
amazonaws_ecs.UpdateTaskSet({
  "cluster": null,
  "service": null,
  "taskSet": null,
  "scale": {}
}, context)
```

#### Input
* input `object`
  * cluster **required**
  * scale **required** [Scale](#scale)
  * service **required**
  * taskSet **required**

#### Output
* output [UpdateTaskSetResponse](#updatetasksetresponse)



## Definitions

### AccessDeniedException


### AgentUpdateStatus
* AgentUpdateStatus `string` (values: PENDING, STAGING, STAGED, UPDATING, UPDATED, FAILED)

### AssignPublicIp
* AssignPublicIp `string` (values: ENABLED, DISABLED)

### Attachment
* Attachment `object`: An object representing a container instance or task attachment.
  * details
    * items [KeyValuePair](#keyvaluepair)
  * id
  * status
  * type

### AttachmentDetails
* AttachmentDetails `array`
  * items [KeyValuePair](#keyvaluepair)

### AttachmentStateChange
* AttachmentStateChange `object`: An object representing a change in state for a task attachment.
  * attachmentArn **required**
  * status **required**

### AttachmentStateChanges
* AttachmentStateChanges `array`
  * items [AttachmentStateChange](#attachmentstatechange)

### Attachments
* Attachments `array`
  * items [Attachment](#attachment)

### Attribute
* Attribute `object`: An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * name **required**
  * targetId
  * targetType
  * value

### AttributeLimitExceededException


### Attributes
* Attributes `array`
  * items [Attribute](#attribute)

### AutoScalingGroupProvider
* AutoScalingGroupProvider `object`: The details of the Auto Scaling group for the capacity provider.
  * autoScalingGroupArn **required**
  * managedScaling
    * instanceWarmupPeriod
    * maximumScalingStepSize
    * minimumScalingStepSize
    * status
    * targetCapacity
  * managedTerminationProtection

### AutoScalingGroupProviderUpdate
* AutoScalingGroupProviderUpdate `object`: The details of the Auto Scaling group capacity provider to update.
  * managedScaling [ManagedScaling](#managedscaling)
  * managedTerminationProtection

### AwsVpcConfiguration
* AwsVpcConfiguration `object`: An object representing the networking details for a task or service.
  * assignPublicIp
  * securityGroups
    * items [String](#string)
  * subnets **required**
    * items [String](#string)

### BlockedException


### Boolean
* Boolean `boolean`

### BoxedBoolean
* BoxedBoolean `boolean`

### BoxedInteger
* BoxedInteger `integer`

### CapacityProvider
* CapacityProvider `object`: The details of a capacity provider.
  * tags
    * items [Tag](#tag)
  * autoScalingGroupProvider
    * autoScalingGroupArn **required**
    * managedScaling
      * instanceWarmupPeriod
      * maximumScalingStepSize
      * minimumScalingStepSize
      * status
      * targetCapacity
    * managedTerminationProtection
  * capacityProviderArn
  * name
  * status
  * updateStatus
  * updateStatusReason

### CapacityProviderField
* CapacityProviderField `string` (values: TAGS)

### CapacityProviderFieldList
* CapacityProviderFieldList `array`
  * items [CapacityProviderField](#capacityproviderfield)

### CapacityProviderStatus
* CapacityProviderStatus `string` (values: ACTIVE, INACTIVE)

### CapacityProviderStrategy
* CapacityProviderStrategy `array`
  * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)

### CapacityProviderStrategyItem
* CapacityProviderStrategyItem `object`: The details of a capacity provider strategy.
  * base
  * capacityProvider **required**
  * weight

### CapacityProviderStrategyItemBase
* CapacityProviderStrategyItemBase `integer`

### CapacityProviderStrategyItemWeight
* CapacityProviderStrategyItemWeight `integer`

### CapacityProviderUpdateStatus
* CapacityProviderUpdateStatus `string` (values: DELETE_IN_PROGRESS, DELETE_COMPLETE, DELETE_FAILED, UPDATE_IN_PROGRESS, UPDATE_COMPLETE, UPDATE_FAILED)

### CapacityProviders
* CapacityProviders `array`
  * items [CapacityProvider](#capacityprovider)

### ClientException


### Cluster
* Cluster `object`: A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.
  * tags
    * items [Tag](#tag)
  * activeServicesCount
  * attachments
    * items [Attachment](#attachment)
  * attachmentsStatus
  * capacityProviders
    * items [String](#string)
  * clusterArn
  * clusterName
  * defaultCapacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * pendingTasksCount
  * registeredContainerInstancesCount
  * runningTasksCount
  * settings
    * items [ClusterSetting](#clustersetting)
  * statistics
    * items [KeyValuePair](#keyvaluepair)
  * status

### ClusterContainsContainerInstancesException


### ClusterContainsServicesException


### ClusterContainsTasksException


### ClusterField
* ClusterField `string` (values: ATTACHMENTS, SETTINGS, STATISTICS, TAGS)

### ClusterFieldList
* ClusterFieldList `array`
  * items [ClusterField](#clusterfield)

### ClusterNotFoundException


### ClusterSetting
* ClusterSetting `object`: The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster.
  * name
  * value

### ClusterSettingName
* ClusterSettingName `string` (values: containerInsights)

### ClusterSettings
* ClusterSettings `array`
  * items [ClusterSetting](#clustersetting)

### Clusters
* Clusters `array`
  * items [Cluster](#cluster)

### Compatibility
* Compatibility `string` (values: EC2, FARGATE)

### CompatibilityList
* CompatibilityList `array`
  * items [Compatibility](#compatibility)

### Connectivity
* Connectivity `string` (values: CONNECTED, DISCONNECTED)

### Container
* Container `object`: A Docker container that is part of a task.
  * containerArn
  * cpu
  * exitCode
  * gpuIds
    * items [String](#string)
  * healthStatus
  * image
  * imageDigest
  * lastStatus
  * memory
  * memoryReservation
  * name
  * networkBindings
    * items [NetworkBinding](#networkbinding)
  * networkInterfaces
    * items [NetworkInterface](#networkinterface)
  * reason
  * runtimeId
  * taskArn

### ContainerCondition
* ContainerCondition `string` (values: START, COMPLETE, SUCCESS, HEALTHY)

### ContainerDefinition
* ContainerDefinition `object`: Container definitions are used in task definitions to describe the different containers that are launched as part of a task.
  * command
    * items [String](#string)
  * cpu
  * dependsOn
    * items [ContainerDependency](#containerdependency)
  * disableNetworking
  * dnsSearchDomains
    * items [String](#string)
  * dnsServers
    * items [String](#string)
  * dockerLabels
  * dockerSecurityOptions
    * items [String](#string)
  * entryPoint
    * items [String](#string)
  * environment
    * items [KeyValuePair](#keyvaluepair)
  * environmentFiles
    * items [EnvironmentFile](#environmentfile)
  * essential
  * extraHosts
    * items [HostEntry](#hostentry)
  * firelensConfiguration
    * options
    * type **required**
  * healthCheck
    * command **required**
      * items [String](#string)
    * interval
    * retries
    * startPeriod
    * timeout
  * hostname
  * image
  * interactive
  * links
    * items [String](#string)
  * linuxParameters
    * capabilities
      * add
        * items [String](#string)
      * drop
        * items [String](#string)
    * devices
      * items [Device](#device)
    * initProcessEnabled
    * maxSwap
    * sharedMemorySize
    * swappiness
    * tmpfs
      * items [Tmpfs](#tmpfs)
  * logConfiguration
    * logDriver **required**
    * options
    * secretOptions
      * items [Secret](#secret)
  * memory
  * memoryReservation
  * mountPoints
    * items [MountPoint](#mountpoint)
  * name
  * portMappings
    * items [PortMapping](#portmapping)
  * privileged
  * pseudoTerminal
  * readonlyRootFilesystem
  * repositoryCredentials
    * credentialsParameter **required**
  * resourceRequirements
    * items [ResourceRequirement](#resourcerequirement)
  * secrets
    * items [Secret](#secret)
  * startTimeout
  * stopTimeout
  * systemControls
    * items [SystemControl](#systemcontrol)
  * ulimits
    * items [Ulimit](#ulimit)
  * user
  * volumesFrom
    * items [VolumeFrom](#volumefrom)
  * workingDirectory

### ContainerDefinitions
* ContainerDefinitions `array`
  * items [ContainerDefinition](#containerdefinition)

### ContainerDependencies
* ContainerDependencies `array`
  * items [ContainerDependency](#containerdependency)

### ContainerDependency
* ContainerDependency `object`: <p>The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.</p> <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent to enable container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>For tasks using the Fargate launch type, this parameter requires that the task or service uses platform version 1.3.0 or later.</p> </note>
  * condition **required**
  * containerName **required**

### ContainerInstance
* ContainerInstance `object`: An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.
  * tags
    * items [Tag](#tag)
  * agentConnected
  * agentUpdateStatus
  * attachments
    * items [Attachment](#attachment)
  * attributes
    * items [Attribute](#attribute)
  * capacityProviderName
  * containerInstanceArn
  * ec2InstanceId
  * pendingTasksCount
  * registeredAt
  * registeredResources
    * items [Resource](#resource)
  * remainingResources
    * items [Resource](#resource)
  * runningTasksCount
  * status
  * statusReason
  * version
  * versionInfo
    * agentHash
    * agentVersion
    * dockerVersion

### ContainerInstanceField
* ContainerInstanceField `string` (values: TAGS)

### ContainerInstanceFieldList
* ContainerInstanceFieldList `array`
  * items [ContainerInstanceField](#containerinstancefield)

### ContainerInstanceStatus
* ContainerInstanceStatus `string` (values: ACTIVE, DRAINING, REGISTERING, DEREGISTERING, REGISTRATION_FAILED)

### ContainerInstances
* ContainerInstances `array`
  * items [ContainerInstance](#containerinstance)

### ContainerOverride
* ContainerOverride `object`: The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
  * command
    * items [String](#string)
  * cpu
  * environment
    * items [KeyValuePair](#keyvaluepair)
  * environmentFiles
    * items [EnvironmentFile](#environmentfile)
  * memory
  * memoryReservation
  * name
  * resourceRequirements
    * items [ResourceRequirement](#resourcerequirement)

### ContainerOverrides
* ContainerOverrides `array`
  * items [ContainerOverride](#containeroverride)

### ContainerStateChange
* ContainerStateChange `object`: An object representing a change in state for a container.
  * containerName
  * exitCode
  * imageDigest
  * networkBindings
    * items [NetworkBinding](#networkbinding)
  * reason
  * runtimeId
  * status

### ContainerStateChanges
* ContainerStateChanges `array`
  * items [ContainerStateChange](#containerstatechange)

### Containers
* Containers `array`
  * items [Container](#container)

### CreateCapacityProviderRequest
* CreateCapacityProviderRequest `object`
  * tags
    * items [Tag](#tag)
  * autoScalingGroupProvider **required**
    * autoScalingGroupArn **required**
    * managedScaling
      * instanceWarmupPeriod
      * maximumScalingStepSize
      * minimumScalingStepSize
      * status
      * targetCapacity
    * managedTerminationProtection
  * name **required**

### CreateCapacityProviderResponse
* CreateCapacityProviderResponse `object`
  * capacityProvider
    * tags
      * items [Tag](#tag)
    * autoScalingGroupProvider
      * autoScalingGroupArn **required**
      * managedScaling
        * instanceWarmupPeriod
        * maximumScalingStepSize
        * minimumScalingStepSize
        * status
        * targetCapacity
      * managedTerminationProtection
    * capacityProviderArn
    * name
    * status
    * updateStatus
    * updateStatusReason

### CreateClusterRequest
* CreateClusterRequest `object`
  * tags
    * items [Tag](#tag)
  * capacityProviders
    * items [String](#string)
  * clusterName
  * defaultCapacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * settings
    * items [ClusterSetting](#clustersetting)

### CreateClusterResponse
* CreateClusterResponse `object`
  * cluster
    * tags
      * items [Tag](#tag)
    * activeServicesCount
    * attachments
      * items [Attachment](#attachment)
    * attachmentsStatus
    * capacityProviders
      * items [String](#string)
    * clusterArn
    * clusterName
    * defaultCapacityProviderStrategy
      * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
    * pendingTasksCount
    * registeredContainerInstancesCount
    * runningTasksCount
    * settings
      * items [ClusterSetting](#clustersetting)
    * statistics
      * items [KeyValuePair](#keyvaluepair)
    * status

### CreateServiceRequest
* CreateServiceRequest `object`
  * tags
    * items [Tag](#tag)
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * clientToken
  * cluster
  * deploymentConfiguration
    * deploymentCircuitBreaker
      * enable **required**
      * rollback **required**
    * maximumPercent
    * minimumHealthyPercent
  * deploymentController
    * type **required**
  * desiredCount
  * enableECSManagedTags
  * healthCheckGracePeriodSeconds
  * launchType
  * loadBalancers
    * items [LoadBalancer](#loadbalancer)
  * networkConfiguration
    * awsvpcConfiguration
      * assignPublicIp
      * securityGroups
        * items [String](#string)
      * subnets **required**
        * items [String](#string)
  * placementConstraints
    * items [PlacementConstraint](#placementconstraint)
  * placementStrategy
    * items [PlacementStrategy](#placementstrategy)
  * platformVersion
  * propagateTags
  * role
  * schedulingStrategy
  * serviceName **required**
  * serviceRegistries
    * items [ServiceRegistry](#serviceregistry)
  * taskDefinition

### CreateServiceResponse
* CreateServiceResponse `object`
  * service
    * tags
      * items [Tag](#tag)
    * capacityProviderStrategy
      * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
    * clusterArn
    * createdAt
    * createdBy
    * deploymentConfiguration
      * deploymentCircuitBreaker
        * enable **required**
        * rollback **required**
      * maximumPercent
      * minimumHealthyPercent
    * deploymentController
      * type **required**
    * deployments
      * items [Deployment](#deployment)
    * desiredCount
    * enableECSManagedTags
    * events
      * items [ServiceEvent](#serviceevent)
    * healthCheckGracePeriodSeconds
    * launchType
    * loadBalancers
      * items [LoadBalancer](#loadbalancer)
    * networkConfiguration
      * awsvpcConfiguration
        * assignPublicIp
        * securityGroups
          * items [String](#string)
        * subnets **required**
          * items [String](#string)
    * pendingCount
    * placementConstraints
      * items [PlacementConstraint](#placementconstraint)
    * placementStrategy
      * items [PlacementStrategy](#placementstrategy)
    * platformVersion
    * propagateTags
    * roleArn
    * runningCount
    * schedulingStrategy
    * serviceArn
    * serviceName
    * serviceRegistries
      * items [ServiceRegistry](#serviceregistry)
    * status
    * taskDefinition
    * taskSets
      * items [TaskSet](#taskset)

### CreateTaskSetRequest
* CreateTaskSetRequest `object`
  * tags
    * items [Tag](#tag)
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * clientToken
  * cluster **required**
  * externalId
  * launchType
  * loadBalancers
    * items [LoadBalancer](#loadbalancer)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * platformVersion
  * scale [Scale](#scale)
  * service **required**
  * serviceRegistries
    * items [ServiceRegistry](#serviceregistry)
  * taskDefinition **required**

### CreateTaskSetResponse
* CreateTaskSetResponse `object`
  * taskSet [TaskSet](#taskset)

### DeleteAccountSettingRequest
* DeleteAccountSettingRequest `object`
  * name **required**
  * principalArn

### DeleteAccountSettingResponse
* DeleteAccountSettingResponse `object`
  * setting
    * name
    * principalArn
    * value

### DeleteAttributesRequest
* DeleteAttributesRequest `object`
  * attributes **required**
    * items [Attribute](#attribute)
  * cluster

### DeleteAttributesResponse
* DeleteAttributesResponse `object`
  * attributes
    * items [Attribute](#attribute)

### DeleteCapacityProviderRequest
* DeleteCapacityProviderRequest `object`
  * capacityProvider **required**

### DeleteCapacityProviderResponse
* DeleteCapacityProviderResponse `object`
  * capacityProvider [CapacityProvider](#capacityprovider)

### DeleteClusterRequest
* DeleteClusterRequest `object`
  * cluster **required**

### DeleteClusterResponse
* DeleteClusterResponse `object`
  * cluster
    * tags
      * items [Tag](#tag)
    * activeServicesCount
    * attachments
      * items [Attachment](#attachment)
    * attachmentsStatus
    * capacityProviders
      * items [String](#string)
    * clusterArn
    * clusterName
    * defaultCapacityProviderStrategy
      * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
    * pendingTasksCount
    * registeredContainerInstancesCount
    * runningTasksCount
    * settings
      * items [ClusterSetting](#clustersetting)
    * statistics
      * items [KeyValuePair](#keyvaluepair)
    * status

### DeleteServiceRequest
* DeleteServiceRequest `object`
  * cluster
  * force
  * service **required**

### DeleteServiceResponse
* DeleteServiceResponse `object`
  * service
    * tags
      * items [Tag](#tag)
    * capacityProviderStrategy
      * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
    * clusterArn
    * createdAt
    * createdBy
    * deploymentConfiguration
      * deploymentCircuitBreaker
        * enable **required**
        * rollback **required**
      * maximumPercent
      * minimumHealthyPercent
    * deploymentController
      * type **required**
    * deployments
      * items [Deployment](#deployment)
    * desiredCount
    * enableECSManagedTags
    * events
      * items [ServiceEvent](#serviceevent)
    * healthCheckGracePeriodSeconds
    * launchType
    * loadBalancers
      * items [LoadBalancer](#loadbalancer)
    * networkConfiguration
      * awsvpcConfiguration
        * assignPublicIp
        * securityGroups
          * items [String](#string)
        * subnets **required**
          * items [String](#string)
    * pendingCount
    * placementConstraints
      * items [PlacementConstraint](#placementconstraint)
    * placementStrategy
      * items [PlacementStrategy](#placementstrategy)
    * platformVersion
    * propagateTags
    * roleArn
    * runningCount
    * schedulingStrategy
    * serviceArn
    * serviceName
    * serviceRegistries
      * items [ServiceRegistry](#serviceregistry)
    * status
    * taskDefinition
    * taskSets
      * items [TaskSet](#taskset)

### DeleteTaskSetRequest
* DeleteTaskSetRequest `object`
  * cluster **required**
  * force
  * service **required**
  * taskSet **required**

### DeleteTaskSetResponse
* DeleteTaskSetResponse `object`
  * taskSet [TaskSet](#taskset)

### Deployment
* Deployment `object`: The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type.
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * createdAt
  * desiredCount
  * failedTasks
  * id
  * launchType
  * networkConfiguration
    * awsvpcConfiguration
      * assignPublicIp
      * securityGroups
        * items [String](#string)
      * subnets **required**
        * items [String](#string)
  * pendingCount
  * platformVersion
  * rolloutState
  * rolloutStateReason
  * runningCount
  * status
  * taskDefinition
  * updatedAt

### DeploymentCircuitBreaker
* DeploymentCircuitBreaker `object`: <note> <p>The deployment circuit breaker can only be used for services using the rolling update (<code>ECS</code>) deployment type that are not behind a Classic Load Balancer.</p> </note> <p>The <b>deployment circuit breaker</b> determines whether a service deployment will fail if the service can't reach a steady state. If enabled, a service deployment will transition to a failed state and stop launching new tasks. You can also enable Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
  * enable **required**
  * rollback **required**

### DeploymentConfiguration
* DeploymentConfiguration `object`: Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
  * deploymentCircuitBreaker
    * enable **required**
    * rollback **required**
  * maximumPercent
  * minimumHealthyPercent

### DeploymentController
* DeploymentController `object`: The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * type **required**

### DeploymentControllerType
* DeploymentControllerType `string` (values: ECS, CODE_DEPLOY, EXTERNAL)

### DeploymentRolloutState
* DeploymentRolloutState `string` (values: COMPLETED, FAILED, IN_PROGRESS)

### Deployments
* Deployments `array`
  * items [Deployment](#deployment)

### DeregisterContainerInstanceRequest
* DeregisterContainerInstanceRequest `object`
  * cluster
  * containerInstance **required**
  * force

### DeregisterContainerInstanceResponse
* DeregisterContainerInstanceResponse `object`
  * containerInstance
    * tags
      * items [Tag](#tag)
    * agentConnected
    * agentUpdateStatus
    * attachments
      * items [Attachment](#attachment)
    * attributes
      * items [Attribute](#attribute)
    * capacityProviderName
    * containerInstanceArn
    * ec2InstanceId
    * pendingTasksCount
    * registeredAt
    * registeredResources
      * items [Resource](#resource)
    * remainingResources
      * items [Resource](#resource)
    * runningTasksCount
    * status
    * statusReason
    * version
    * versionInfo
      * agentHash
      * agentVersion
      * dockerVersion

### DeregisterTaskDefinitionRequest
* DeregisterTaskDefinitionRequest `object`
  * taskDefinition **required**

### DeregisterTaskDefinitionResponse
* DeregisterTaskDefinitionResponse `object`
  * taskDefinition
    * compatibilities
      * items [Compatibility](#compatibility)
    * containerDefinitions
      * items [ContainerDefinition](#containerdefinition)
    * cpu
    * executionRoleArn
    * family
    * inferenceAccelerators
      * items [InferenceAccelerator](#inferenceaccelerator)
    * ipcMode
    * memory
    * networkMode
    * pidMode
    * placementConstraints
      * items [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)
    * proxyConfiguration
      * containerName **required**
      * properties
        * items [KeyValuePair](#keyvaluepair)
      * type
    * requiresAttributes
      * items [Attribute](#attribute)
    * requiresCompatibilities
      * items [Compatibility](#compatibility)
    * revision
    * status
    * taskDefinitionArn
    * taskRoleArn
    * volumes
      * items [Volume](#volume)

### DescribeCapacityProvidersRequest
* DescribeCapacityProvidersRequest `object`
  * capacityProviders
    * items [String](#string)
  * include
    * items [CapacityProviderField](#capacityproviderfield)
  * maxResults
  * nextToken

### DescribeCapacityProvidersResponse
* DescribeCapacityProvidersResponse `object`
  * capacityProviders
    * items [CapacityProvider](#capacityprovider)
  * failures
    * items [Failure](#failure)
  * nextToken

### DescribeClustersRequest
* DescribeClustersRequest `object`
  * clusters
    * items [String](#string)
  * include
    * items [ClusterField](#clusterfield)

### DescribeClustersResponse
* DescribeClustersResponse `object`
  * clusters
    * items [Cluster](#cluster)
  * failures
    * items [Failure](#failure)

### DescribeContainerInstancesRequest
* DescribeContainerInstancesRequest `object`
  * cluster
  * containerInstances **required**
    * items [String](#string)
  * include
    * items [ContainerInstanceField](#containerinstancefield)

### DescribeContainerInstancesResponse
* DescribeContainerInstancesResponse `object`
  * containerInstances
    * items [ContainerInstance](#containerinstance)
  * failures
    * items [Failure](#failure)

### DescribeServicesRequest
* DescribeServicesRequest `object`
  * cluster
  * include
    * items [ServiceField](#servicefield)
  * services **required**
    * items [String](#string)

### DescribeServicesResponse
* DescribeServicesResponse `object`
  * failures
    * items [Failure](#failure)
  * services
    * items [Service](#service)

### DescribeTaskDefinitionRequest
* DescribeTaskDefinitionRequest `object`
  * include
    * items [TaskDefinitionField](#taskdefinitionfield)
  * taskDefinition **required**

### DescribeTaskDefinitionResponse
* DescribeTaskDefinitionResponse `object`
  * tags
    * items [Tag](#tag)
  * taskDefinition
    * compatibilities
      * items [Compatibility](#compatibility)
    * containerDefinitions
      * items [ContainerDefinition](#containerdefinition)
    * cpu
    * executionRoleArn
    * family
    * inferenceAccelerators
      * items [InferenceAccelerator](#inferenceaccelerator)
    * ipcMode
    * memory
    * networkMode
    * pidMode
    * placementConstraints
      * items [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)
    * proxyConfiguration
      * containerName **required**
      * properties
        * items [KeyValuePair](#keyvaluepair)
      * type
    * requiresAttributes
      * items [Attribute](#attribute)
    * requiresCompatibilities
      * items [Compatibility](#compatibility)
    * revision
    * status
    * taskDefinitionArn
    * taskRoleArn
    * volumes
      * items [Volume](#volume)

### DescribeTaskSetsRequest
* DescribeTaskSetsRequest `object`
  * cluster **required**
  * include
    * items [TaskSetField](#tasksetfield)
  * service **required**
  * taskSets
    * items [String](#string)

### DescribeTaskSetsResponse
* DescribeTaskSetsResponse `object`
  * failures
    * items [Failure](#failure)
  * taskSets
    * items [TaskSet](#taskset)

### DescribeTasksRequest
* DescribeTasksRequest `object`
  * cluster
  * include
    * items [TaskField](#taskfield)
  * tasks **required**
    * items [String](#string)

### DescribeTasksResponse
* DescribeTasksResponse `object`
  * failures
    * items [Failure](#failure)
  * tasks
    * items [Task](#task)

### DesiredStatus
* DesiredStatus `string` (values: RUNNING, PENDING, STOPPED)

### Device
* Device `object`: An object representing a container instance host device.
  * containerPath
  * hostPath **required**
  * permissions
    * items [DeviceCgroupPermission](#devicecgrouppermission)

### DeviceCgroupPermission
* DeviceCgroupPermission `string` (values: read, write, mknod)

### DeviceCgroupPermissions
* DeviceCgroupPermissions `array`
  * items [DeviceCgroupPermission](#devicecgrouppermission)

### DevicesList
* DevicesList `array`
  * items [Device](#device)

### DiscoverPollEndpointRequest
* DiscoverPollEndpointRequest `object`
  * cluster
  * containerInstance

### DiscoverPollEndpointResponse
* DiscoverPollEndpointResponse `object`
  * endpoint
  * telemetryEndpoint

### DockerLabelsMap
* DockerLabelsMap `object`

### DockerVolumeConfiguration
* DockerVolumeConfiguration `object`: This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.
  * autoprovision
  * driver
  * driverOpts
  * labels
  * scope

### Double
* Double `number`

### EFSAuthorizationConfig
* EFSAuthorizationConfig `object`: The authorization configuration details for the Amazon EFS file system.
  * accessPointId
  * iam

### EFSAuthorizationConfigIAM
* EFSAuthorizationConfigIAM `string` (values: ENABLED, DISABLED)

### EFSTransitEncryption
* EFSTransitEncryption `string` (values: ENABLED, DISABLED)

### EFSVolumeConfiguration
* EFSVolumeConfiguration `object`: This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * authorizationConfig
    * accessPointId
    * iam
  * fileSystemId **required**
  * rootDirectory
  * transitEncryption
  * transitEncryptionPort

### EnvironmentFile
* EnvironmentFile `object`: <p>A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file should contain an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored. For more information on the environment variable file syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default environment variables in file</a>.</p> <p>If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they are processed from the top down. It is recommended to use unique variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying Environment Variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This field is not valid for containers in tasks using the Fargate launch type.</p>
  * type **required**
  * value **required**

### EnvironmentFileType
* EnvironmentFileType `string` (values: s3)

### EnvironmentFiles
* EnvironmentFiles `array`
  * items [EnvironmentFile](#environmentfile)

### EnvironmentVariables
* EnvironmentVariables `array`
  * items [KeyValuePair](#keyvaluepair)

### FSxWindowsFileServerAuthorizationConfig
* FSxWindowsFileServerAuthorizationConfig `object`: <p>The authorization configuration details for Amazon FSx for Windows File Server file system. See <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FSxWindowsFileServerVolumeConfiguration.html">FSxWindowsFileServerVolumeConfiguration</a> in the <i>Amazon Elastic Container Service API Reference</i>.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
  * credentialsParameter **required**
  * domain **required**

### FSxWindowsFileServerVolumeConfiguration
* FSxWindowsFileServerVolumeConfiguration `object`: <p>This parameter is specified when you are using <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html">Amazon FSx for Windows File Server</a> file system for task storage.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
  * authorizationConfig **required**
    * credentialsParameter **required**
    * domain **required**
  * fileSystemId **required**
  * rootDirectory **required**

### Failure
* Failure `object`: A failed resource. For a list of common causes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * arn
  * detail
  * reason

### Failures
* Failures `array`
  * items [Failure](#failure)

### FirelensConfiguration
* FirelensConfiguration `object`: The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom Log Routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * options
  * type **required**

### FirelensConfigurationOptionsMap
* FirelensConfigurationOptionsMap `object`

### FirelensConfigurationType
* FirelensConfigurationType `string` (values: fluentd, fluentbit)

### GpuIds
* GpuIds `array`
  * items [String](#string)

### HealthCheck
* HealthCheck `object`: <p>An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile).</p> <p>You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.</p> <p>The following describes the possible <code>healthStatus</code> values for a container:</p> <ul> <li> <p> <code>HEALTHY</code>-The container health check has passed successfully.</p> </li> <li> <p> <code>UNHEALTHY</code>-The container health check has failed.</p> </li> <li> <p> <code>UNKNOWN</code>-The container health check is being evaluated or there is no container health check defined.</p> </li> </ul> <p>The following describes the possible <code>healthStatus</code> values for a task. The container health check status of nonessential containers do not have an effect on the health status of a task.</p> <ul> <li> <p> <code>HEALTHY</code>-All essential containers within the task have passed their health checks.</p> </li> <li> <p> <code>UNHEALTHY</code>-One or more essential containers have failed their health check.</p> </li> <li> <p> <code>UNKNOWN</code>-The essential containers within the task are still having their health checks evaluated or there are no container health checks defined.</p> </li> </ul> <p>If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.</p> <p>The following are notes about container health check support:</p> <ul> <li> <p>Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a>.</p> </li> <li> <p>Container health checks are supported for Fargate tasks if you are using platform version 1.1.0 or greater. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a>.</p> </li> <li> <p>Container health checks are not supported for tasks that are part of a service that is configured to use a Classic Load Balancer.</p> </li> </ul>
  * command **required**
    * items [String](#string)
  * interval
  * retries
  * startPeriod
  * timeout

### HealthStatus
* HealthStatus `string` (values: HEALTHY, UNHEALTHY, UNKNOWN)

### HostEntry
* HostEntry `object`: Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. 
  * hostname **required**
  * ipAddress **required**

### HostEntryList
* HostEntryList `array`
  * items [HostEntry](#hostentry)

### HostVolumeProperties
* HostVolumeProperties `object`: Details on a container instance bind mount host volume.
  * sourcePath

### InferenceAccelerator
* InferenceAccelerator `object`: Details on a Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * deviceName **required**
  * deviceType **required**

### InferenceAcceleratorOverride
* InferenceAcceleratorOverride `object`: Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * deviceName
  * deviceType

### InferenceAcceleratorOverrides
* InferenceAcceleratorOverrides `array`
  * items [InferenceAcceleratorOverride](#inferenceacceleratoroverride)

### InferenceAccelerators
* InferenceAccelerators `array`
  * items [InferenceAccelerator](#inferenceaccelerator)

### Integer
* Integer `integer`

### InvalidParameterException


### IpcMode
* IpcMode `string` (values: host, task, none)

### KernelCapabilities
* KernelCapabilities `object`: The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information on the default capabilities and the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information on these Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page.
  * add
    * items [String](#string)
  * drop
    * items [String](#string)

### KeyValuePair
* KeyValuePair `object`: A key-value pair object.
  * name
  * value

### LaunchType
* LaunchType `string` (values: EC2, FARGATE)

### LimitExceededException


### LinuxParameters
* LinuxParameters `object`: Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>.
  * capabilities
    * add
      * items [String](#string)
    * drop
      * items [String](#string)
  * devices
    * items [Device](#device)
  * initProcessEnabled
  * maxSwap
  * sharedMemorySize
  * swappiness
  * tmpfs
    * items [Tmpfs](#tmpfs)

### ListAccountSettingsRequest
* ListAccountSettingsRequest `object`
  * effectiveSettings
  * maxResults
  * name
  * nextToken
  * principalArn
  * value

### ListAccountSettingsResponse
* ListAccountSettingsResponse `object`
  * nextToken
  * settings
    * items [Setting](#setting)

### ListAttributesRequest
* ListAttributesRequest `object`
  * attributeName
  * attributeValue
  * cluster
  * maxResults
  * nextToken
  * targetType **required**

### ListAttributesResponse
* ListAttributesResponse `object`
  * attributes
    * items [Attribute](#attribute)
  * nextToken

### ListClustersRequest
* ListClustersRequest `object`
  * maxResults
  * nextToken

### ListClustersResponse
* ListClustersResponse `object`
  * clusterArns
    * items [String](#string)
  * nextToken

### ListContainerInstancesRequest
* ListContainerInstancesRequest `object`
  * cluster
  * filter
  * maxResults
  * nextToken
  * status

### ListContainerInstancesResponse
* ListContainerInstancesResponse `object`
  * containerInstanceArns
    * items [String](#string)
  * nextToken

### ListServicesRequest
* ListServicesRequest `object`
  * cluster
  * launchType
  * maxResults
  * nextToken
  * schedulingStrategy

### ListServicesResponse
* ListServicesResponse `object`
  * nextToken
  * serviceArns
    * items [String](#string)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * resourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags
    * items [Tag](#tag)

### ListTaskDefinitionFamiliesRequest
* ListTaskDefinitionFamiliesRequest `object`
  * familyPrefix
  * maxResults
  * nextToken
  * status

### ListTaskDefinitionFamiliesResponse
* ListTaskDefinitionFamiliesResponse `object`
  * families
    * items [String](#string)
  * nextToken

### ListTaskDefinitionsRequest
* ListTaskDefinitionsRequest `object`
  * familyPrefix
  * maxResults
  * nextToken
  * sort
  * status

### ListTaskDefinitionsResponse
* ListTaskDefinitionsResponse `object`
  * nextToken
  * taskDefinitionArns
    * items [String](#string)

### ListTasksRequest
* ListTasksRequest `object`
  * cluster
  * containerInstance
  * desiredStatus
  * family
  * launchType
  * maxResults
  * nextToken
  * serviceName
  * startedBy

### ListTasksResponse
* ListTasksResponse `object`
  * nextToken
  * taskArns
    * items [String](#string)

### LoadBalancer
* LoadBalancer `object`: <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p>
  * containerName
  * containerPort
  * loadBalancerName
  * targetGroupArn

### LoadBalancers
* LoadBalancers `array`
  * items [LoadBalancer](#loadbalancer)

### LogConfiguration
* LogConfiguration `object`: <p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>.</p> <p>By default, containers use the same logging driver that the Docker daemon uses; however the container may use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition. For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>The following should be noted when specifying a log configuration for your containers:</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the valid values below). Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks on AWS Fargate, because you do not have access to the underlying infrastructure your tasks are hosted on, any additional software needed will have to be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul>
  * logDriver **required**
  * options
  * secretOptions
    * items [Secret](#secret)

### LogConfigurationOptionsMap
* LogConfigurationOptionsMap `object`

### LogDriver
* LogDriver `string` (values: json-file, syslog, journald, gelf, fluentd, awslogs, splunk, awsfirelens)

### Long
* Long `integer`

### ManagedScaling
* ManagedScaling `object`: <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is enabled, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS-managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using Managed Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is disabled, the user must manage the scaling of the Auto Scaling group.</p>
  * instanceWarmupPeriod
  * maximumScalingStepSize
  * minimumScalingStepSize
  * status
  * targetCapacity

### ManagedScalingInstanceWarmupPeriod
* ManagedScalingInstanceWarmupPeriod `integer`

### ManagedScalingStatus
* ManagedScalingStatus `string` (values: ENABLED, DISABLED)

### ManagedScalingStepSize
* ManagedScalingStepSize `integer`

### ManagedScalingTargetCapacity
* ManagedScalingTargetCapacity `integer`

### ManagedTerminationProtection
* ManagedTerminationProtection `string` (values: ENABLED, DISABLED)

### MissingVersionException


### MountPoint
* MountPoint `object`: Details on a volume mount point that is used in a container definition.
  * containerPath
  * readOnly
  * sourceVolume

### MountPointList
* MountPointList `array`
  * items [MountPoint](#mountpoint)

### NetworkBinding
* NetworkBinding `object`: Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.
  * bindIP
  * containerPort
  * hostPort
  * protocol

### NetworkBindings
* NetworkBindings `array`
  * items [NetworkBinding](#networkbinding)

### NetworkConfiguration
* NetworkConfiguration `object`: An object representing the network configuration for a task or service.
  * awsvpcConfiguration
    * assignPublicIp
    * securityGroups
      * items [String](#string)
    * subnets **required**
      * items [String](#string)

### NetworkInterface
* NetworkInterface `object`: An object representing the elastic network interface for tasks that use the <code>awsvpc</code> network mode.
  * attachmentId
  * ipv6Address
  * privateIpv4Address

### NetworkInterfaces
* NetworkInterfaces `array`
  * items [NetworkInterface](#networkinterface)

### NetworkMode
* NetworkMode `string` (values: bridge, host, awsvpc, none)

### NoUpdateAvailableException


### PidMode
* PidMode `string` (values: host, task)

### PlacementConstraint
* PlacementConstraint `object`: <p>An object representing a constraint on task placement. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> </note>
  * expression
  * type

### PlacementConstraintType
* PlacementConstraintType `string` (values: distinctInstance, memberOf)

### PlacementConstraints
* PlacementConstraints `array`
  * items [PlacementConstraint](#placementconstraint)

### PlacementStrategies
* PlacementStrategies `array`
  * items [PlacementStrategy](#placementstrategy)

### PlacementStrategy
* PlacementStrategy `object`: The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * field
  * type

### PlacementStrategyType
* PlacementStrategyType `string` (values: random, spread, binpack)

### PlatformDevice
* PlatformDevice `object`: The devices that are available on the container instance. The only supported device type is a GPU.
  * id **required**
  * type **required**

### PlatformDeviceType
* PlatformDeviceType `string` (values: GPU)

### PlatformDevices
* PlatformDevices `array`
  * items [PlatformDevice](#platformdevice)

### PlatformTaskDefinitionIncompatibilityException


### PlatformUnknownException


### PortMapping
* PortMapping `object`: <p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If you are using containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, exposed ports should be specified using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>
  * containerPort
  * hostPort
  * protocol

### PortMappingList
* PortMappingList `array`
  * items [PortMapping](#portmapping)

### PropagateTags
* PropagateTags `string` (values: TASK_DEFINITION, SERVICE)

### ProxyConfiguration
* ProxyConfiguration `object`: <p>The configuration details for the App Mesh proxy.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> </p>
  * containerName **required**
  * properties
    * items [KeyValuePair](#keyvaluepair)
  * type

### ProxyConfigurationProperties
* ProxyConfigurationProperties `array`
  * items [KeyValuePair](#keyvaluepair)

### ProxyConfigurationType
* ProxyConfigurationType `string` (values: APPMESH)

### PutAccountSettingDefaultRequest
* PutAccountSettingDefaultRequest `object`
  * name **required**
  * value **required**

### PutAccountSettingDefaultResponse
* PutAccountSettingDefaultResponse `object`
  * setting [Setting](#setting)

### PutAccountSettingRequest
* PutAccountSettingRequest `object`
  * name **required**
  * principalArn
  * value **required**

### PutAccountSettingResponse
* PutAccountSettingResponse `object`
  * setting
    * name
    * principalArn
    * value

### PutAttributesRequest
* PutAttributesRequest `object`
  * attributes **required**
    * items [Attribute](#attribute)
  * cluster

### PutAttributesResponse
* PutAttributesResponse `object`
  * attributes
    * items [Attribute](#attribute)

### PutClusterCapacityProvidersRequest
* PutClusterCapacityProvidersRequest `object`
  * capacityProviders **required**
    * items [String](#string)
  * cluster **required**
  * defaultCapacityProviderStrategy **required**
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)

### PutClusterCapacityProvidersResponse
* PutClusterCapacityProvidersResponse `object`
  * cluster [Cluster](#cluster)

### RegisterContainerInstanceRequest
* RegisterContainerInstanceRequest `object`
  * tags
    * items [Tag](#tag)
  * attributes
    * items [Attribute](#attribute)
  * cluster
  * containerInstanceArn
  * instanceIdentityDocument
  * instanceIdentityDocumentSignature
  * platformDevices
    * items [PlatformDevice](#platformdevice)
  * totalResources
    * items [Resource](#resource)
  * versionInfo
    * agentHash
    * agentVersion
    * dockerVersion

### RegisterContainerInstanceResponse
* RegisterContainerInstanceResponse `object`
  * containerInstance
    * tags
      * items [Tag](#tag)
    * agentConnected
    * agentUpdateStatus
    * attachments
      * items [Attachment](#attachment)
    * attributes
      * items [Attribute](#attribute)
    * capacityProviderName
    * containerInstanceArn
    * ec2InstanceId
    * pendingTasksCount
    * registeredAt
    * registeredResources
      * items [Resource](#resource)
    * remainingResources
      * items [Resource](#resource)
    * runningTasksCount
    * status
    * statusReason
    * version
    * versionInfo
      * agentHash
      * agentVersion
      * dockerVersion

### RegisterTaskDefinitionRequest
* RegisterTaskDefinitionRequest `object`
  * tags
    * items [Tag](#tag)
  * containerDefinitions **required**
    * items [ContainerDefinition](#containerdefinition)
  * cpu
  * executionRoleArn
  * family **required**
  * inferenceAccelerators
    * items [InferenceAccelerator](#inferenceaccelerator)
  * ipcMode
  * memory
  * networkMode
  * pidMode
  * placementConstraints
    * items [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)
  * proxyConfiguration [ProxyConfiguration](#proxyconfiguration)
  * requiresCompatibilities
    * items [Compatibility](#compatibility)
  * taskRoleArn
  * volumes
    * items [Volume](#volume)

### RegisterTaskDefinitionResponse
* RegisterTaskDefinitionResponse `object`
  * tags
    * items [Tag](#tag)
  * taskDefinition
    * compatibilities
      * items [Compatibility](#compatibility)
    * containerDefinitions
      * items [ContainerDefinition](#containerdefinition)
    * cpu
    * executionRoleArn
    * family
    * inferenceAccelerators
      * items [InferenceAccelerator](#inferenceaccelerator)
    * ipcMode
    * memory
    * networkMode
    * pidMode
    * placementConstraints
      * items [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)
    * proxyConfiguration
      * containerName **required**
      * properties
        * items [KeyValuePair](#keyvaluepair)
      * type
    * requiresAttributes
      * items [Attribute](#attribute)
    * requiresCompatibilities
      * items [Compatibility](#compatibility)
    * revision
    * status
    * taskDefinitionArn
    * taskRoleArn
    * volumes
      * items [Volume](#volume)

### RepositoryCredentials
* RepositoryCredentials `object`: The repository credentials for private registry authentication.
  * credentialsParameter **required**

### RequiresAttributes
* RequiresAttributes `array`
  * items [Attribute](#attribute)

### Resource
* Resource `object`: Describes the resources available for a container instance.
  * doubleValue
  * integerValue
  * longValue
  * name
  * stringSetValue
    * items [String](#string)
  * type

### ResourceInUseException


### ResourceNotFoundException


### ResourceRequirement
* ResourceRequirement `object`: The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i> 
  * type **required**
  * value **required**

### ResourceRequirements
* ResourceRequirements `array`
  * items [ResourceRequirement](#resourcerequirement)

### ResourceType
* ResourceType `string` (values: GPU, InferenceAccelerator)

### Resources
* Resources `array`
  * items [Resource](#resource)

### RunTaskRequest
* RunTaskRequest `object`
  * tags
    * items [Tag](#tag)
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * cluster
  * count
  * enableECSManagedTags
  * group
  * launchType
  * networkConfiguration
    * awsvpcConfiguration
      * assignPublicIp
      * securityGroups
        * items [String](#string)
      * subnets **required**
        * items [String](#string)
  * overrides
    * containerOverrides
      * items [ContainerOverride](#containeroverride)
    * cpu
    * executionRoleArn
    * inferenceAcceleratorOverrides
      * items [InferenceAcceleratorOverride](#inferenceacceleratoroverride)
    * memory
    * taskRoleArn
  * placementConstraints
    * items [PlacementConstraint](#placementconstraint)
  * placementStrategy
    * items [PlacementStrategy](#placementstrategy)
  * platformVersion
  * propagateTags
  * referenceId
  * startedBy
  * taskDefinition **required**

### RunTaskResponse
* RunTaskResponse `object`
  * failures
    * items [Failure](#failure)
  * tasks
    * items [Task](#task)

### Scale
* Scale `object`: A floating-point percentage of the desired number of tasks to place and keep running in the task set.
  * unit
  * value

### ScaleUnit
* ScaleUnit `string` (values: PERCENT)

### SchedulingStrategy
* SchedulingStrategy `string` (values: REPLICA, DAEMON)

### Scope
* Scope `string` (values: task, shared)

### Secret
* Secret `object`: <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
  * name **required**
  * valueFrom **required**

### SecretList
* SecretList `array`
  * items [Secret](#secret)

### ServerException


### Service
* Service `object`: Details on a service within a cluster
  * tags
    * items [Tag](#tag)
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * clusterArn
  * createdAt
  * createdBy
  * deploymentConfiguration
    * deploymentCircuitBreaker
      * enable **required**
      * rollback **required**
    * maximumPercent
    * minimumHealthyPercent
  * deploymentController
    * type **required**
  * deployments
    * items [Deployment](#deployment)
  * desiredCount
  * enableECSManagedTags
  * events
    * items [ServiceEvent](#serviceevent)
  * healthCheckGracePeriodSeconds
  * launchType
  * loadBalancers
    * items [LoadBalancer](#loadbalancer)
  * networkConfiguration
    * awsvpcConfiguration
      * assignPublicIp
      * securityGroups
        * items [String](#string)
      * subnets **required**
        * items [String](#string)
  * pendingCount
  * placementConstraints
    * items [PlacementConstraint](#placementconstraint)
  * placementStrategy
    * items [PlacementStrategy](#placementstrategy)
  * platformVersion
  * propagateTags
  * roleArn
  * runningCount
  * schedulingStrategy
  * serviceArn
  * serviceName
  * serviceRegistries
    * items [ServiceRegistry](#serviceregistry)
  * status
  * taskDefinition
  * taskSets
    * items [TaskSet](#taskset)

### ServiceEvent
* ServiceEvent `object`: Details on an event associated with a service.
  * createdAt
  * id
  * message

### ServiceEvents
* ServiceEvents `array`
  * items [ServiceEvent](#serviceevent)

### ServiceField
* ServiceField `string` (values: TAGS)

### ServiceFieldList
* ServiceFieldList `array`
  * items [ServiceField](#servicefield)

### ServiceNotActiveException


### ServiceNotFoundException


### ServiceRegistries
* ServiceRegistries `array`
  * items [ServiceRegistry](#serviceregistry)

### ServiceRegistry
* ServiceRegistry `object`: Details of the service registry.
  * containerName
  * containerPort
  * port
  * registryArn

### Services
* Services `array`
  * items [Service](#service)

### Setting
* Setting `object`: The current account setting for a resource.
  * name
  * principalArn
  * value

### SettingName
* SettingName `string` (values: serviceLongArnFormat, taskLongArnFormat, containerInstanceLongArnFormat, awsvpcTrunking, containerInsights)

### Settings
* Settings `array`
  * items [Setting](#setting)

### SortOrder
* SortOrder `string` (values: ASC, DESC)

### StabilityStatus
* StabilityStatus `string` (values: STEADY_STATE, STABILIZING)

### StartTaskRequest
* StartTaskRequest `object`
  * tags
    * items [Tag](#tag)
  * cluster
  * containerInstances **required**
    * items [String](#string)
  * enableECSManagedTags
  * group
  * networkConfiguration
    * awsvpcConfiguration
      * assignPublicIp
      * securityGroups
        * items [String](#string)
      * subnets **required**
        * items [String](#string)
  * overrides
    * containerOverrides
      * items [ContainerOverride](#containeroverride)
    * cpu
    * executionRoleArn
    * inferenceAcceleratorOverrides
      * items [InferenceAcceleratorOverride](#inferenceacceleratoroverride)
    * memory
    * taskRoleArn
  * propagateTags
  * referenceId
  * startedBy
  * taskDefinition **required**

### StartTaskResponse
* StartTaskResponse `object`
  * failures
    * items [Failure](#failure)
  * tasks
    * items [Task](#task)

### Statistics
* Statistics `array`
  * items [KeyValuePair](#keyvaluepair)

### StopTaskRequest
* StopTaskRequest `object`
  * cluster
  * reason
  * task **required**

### StopTaskResponse
* StopTaskResponse `object`
  * task
    * tags
      * items [Tag](#tag)
    * attachments
      * items [Attachment](#attachment)
    * attributes
      * items [Attribute](#attribute)
    * availabilityZone
    * capacityProviderName
    * clusterArn
    * connectivity
    * connectivityAt
    * containerInstanceArn
    * containers
      * items [Container](#container)
    * cpu
    * createdAt
    * desiredStatus
    * executionStoppedAt
    * group
    * healthStatus
    * inferenceAccelerators
      * items [InferenceAccelerator](#inferenceaccelerator)
    * lastStatus
    * launchType
    * memory
    * overrides
      * containerOverrides
        * items [ContainerOverride](#containeroverride)
      * cpu
      * executionRoleArn
      * inferenceAcceleratorOverrides
        * items [InferenceAcceleratorOverride](#inferenceacceleratoroverride)
      * memory
      * taskRoleArn
    * platformVersion
    * pullStartedAt
    * pullStoppedAt
    * startedAt
    * startedBy
    * stopCode
    * stoppedAt
    * stoppedReason
    * stoppingAt
    * taskArn
    * taskDefinitionArn
    * version

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### StringMap
* StringMap `object`

### SubmitAttachmentStateChangesRequest
* SubmitAttachmentStateChangesRequest `object`
  * attachments **required**
    * items [AttachmentStateChange](#attachmentstatechange)
  * cluster

### SubmitAttachmentStateChangesResponse
* SubmitAttachmentStateChangesResponse `object`
  * acknowledgment

### SubmitContainerStateChangeRequest
* SubmitContainerStateChangeRequest `object`
  * cluster
  * containerName
  * exitCode
  * networkBindings
    * items [NetworkBinding](#networkbinding)
  * reason
  * runtimeId
  * status
  * task

### SubmitContainerStateChangeResponse
* SubmitContainerStateChangeResponse `object`
  * acknowledgment

### SubmitTaskStateChangeRequest
* SubmitTaskStateChangeRequest `object`
  * attachments
    * items [AttachmentStateChange](#attachmentstatechange)
  * cluster
  * containers
    * items [ContainerStateChange](#containerstatechange)
  * executionStoppedAt
  * pullStartedAt
  * pullStoppedAt
  * reason
  * status
  * task

### SubmitTaskStateChangeResponse
* SubmitTaskStateChangeResponse `object`
  * acknowledgment

### SystemControl
* SystemControl `object`: <p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p> <p>It is not recommended that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task that also uses either the <code>awsvpc</code> or <code>host</code> network mode for the following reasons:</p> <ul> <li> <p>For tasks that use the <code>awsvpc</code> network mode, if you set <code>systemControls</code> for any container, it applies to all containers in the task. If you set different <code>systemControls</code> for multiple containers in a single task, the container that is started last determines which <code>systemControls</code> take effect.</p> </li> <li> <p>For tasks that use the <code>host</code> network mode, the <code>systemControls</code> parameter applies to the container instance's kernel parameter as well as that of all containers of any tasks running on that container instance.</p> </li> </ul>
  * namespace
  * value

### SystemControls
* SystemControls `array`
  * items [SystemControl](#systemcontrol)

### Tag
* Tag `object`: <p>The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>
  * key
  * value

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TargetNotFoundException


### TargetType
* TargetType `string` (values: container-instance)

### Task
* Task `object`: Details on a task in a cluster.
  * tags
    * items [Tag](#tag)
  * attachments
    * items [Attachment](#attachment)
  * attributes
    * items [Attribute](#attribute)
  * availabilityZone
  * capacityProviderName
  * clusterArn
  * connectivity
  * connectivityAt
  * containerInstanceArn
  * containers
    * items [Container](#container)
  * cpu
  * createdAt
  * desiredStatus
  * executionStoppedAt
  * group
  * healthStatus
  * inferenceAccelerators
    * items [InferenceAccelerator](#inferenceaccelerator)
  * lastStatus
  * launchType
  * memory
  * overrides
    * containerOverrides
      * items [ContainerOverride](#containeroverride)
    * cpu
    * executionRoleArn
    * inferenceAcceleratorOverrides
      * items [InferenceAcceleratorOverride](#inferenceacceleratoroverride)
    * memory
    * taskRoleArn
  * platformVersion
  * pullStartedAt
  * pullStoppedAt
  * startedAt
  * startedBy
  * stopCode
  * stoppedAt
  * stoppedReason
  * stoppingAt
  * taskArn
  * taskDefinitionArn
  * version

### TaskDefinition
* TaskDefinition `object`: The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
  * compatibilities
    * items [Compatibility](#compatibility)
  * containerDefinitions
    * items [ContainerDefinition](#containerdefinition)
  * cpu
  * executionRoleArn
  * family
  * inferenceAccelerators
    * items [InferenceAccelerator](#inferenceaccelerator)
  * ipcMode
  * memory
  * networkMode
  * pidMode
  * placementConstraints
    * items [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)
  * proxyConfiguration
    * containerName **required**
    * properties
      * items [KeyValuePair](#keyvaluepair)
    * type
  * requiresAttributes
    * items [Attribute](#attribute)
  * requiresCompatibilities
    * items [Compatibility](#compatibility)
  * revision
  * status
  * taskDefinitionArn
  * taskRoleArn
  * volumes
    * items [Volume](#volume)

### TaskDefinitionFamilyStatus
* TaskDefinitionFamilyStatus `string` (values: ACTIVE, INACTIVE, ALL)

### TaskDefinitionField
* TaskDefinitionField `string` (values: TAGS)

### TaskDefinitionFieldList
* TaskDefinitionFieldList `array`
  * items [TaskDefinitionField](#taskdefinitionfield)

### TaskDefinitionPlacementConstraint
* TaskDefinitionPlacementConstraint `object`: <p>An object representing a constraint on task placement in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> </note>
  * expression
  * type

### TaskDefinitionPlacementConstraintType
* TaskDefinitionPlacementConstraintType `string` (values: memberOf)

### TaskDefinitionPlacementConstraints
* TaskDefinitionPlacementConstraints `array`
  * items [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)

### TaskDefinitionStatus
* TaskDefinitionStatus `string` (values: ACTIVE, INACTIVE)

### TaskField
* TaskField `string` (values: TAGS)

### TaskFieldList
* TaskFieldList `array`
  * items [TaskField](#taskfield)

### TaskOverride
* TaskOverride `object`: The overrides associated with a task.
  * containerOverrides
    * items [ContainerOverride](#containeroverride)
  * cpu
  * executionRoleArn
  * inferenceAcceleratorOverrides
    * items [InferenceAcceleratorOverride](#inferenceacceleratoroverride)
  * memory
  * taskRoleArn

### TaskSet
* TaskSet `object`: Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.
  * tags
    * items [Tag](#tag)
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * clusterArn
  * computedDesiredCount
  * createdAt
  * externalId
  * id
  * launchType
  * loadBalancers
    * items [LoadBalancer](#loadbalancer)
  * networkConfiguration
    * awsvpcConfiguration
      * assignPublicIp
      * securityGroups
        * items [String](#string)
      * subnets **required**
        * items [String](#string)
  * pendingCount
  * platformVersion
  * runningCount
  * scale
    * unit
    * value
  * serviceArn
  * serviceRegistries
    * items [ServiceRegistry](#serviceregistry)
  * stabilityStatus
  * stabilityStatusAt
  * startedBy
  * status
  * taskDefinition
  * taskSetArn
  * updatedAt

### TaskSetField
* TaskSetField `string` (values: TAGS)

### TaskSetFieldList
* TaskSetFieldList `array`
  * items [TaskSetField](#tasksetfield)

### TaskSetNotFoundException


### TaskSets
* TaskSets `array`
  * items [TaskSet](#taskset)

### TaskStopCode
* TaskStopCode `string` (values: TaskFailedToStart, EssentialContainerExited, UserInitiated)

### Tasks
* Tasks `array`
  * items [Task](#task)

### Timestamp
* Timestamp `string`

### Tmpfs
* Tmpfs `object`: The container path, mount options, and size of the tmpfs mount.
  * containerPath **required**
  * mountOptions
    * items [String](#string)
  * size **required**

### TmpfsList
* TmpfsList `array`
  * items [Tmpfs](#tmpfs)

### TransportProtocol
* TransportProtocol `string` (values: tcp, udp)

### Ulimit
* Ulimit `object`: The <code>ulimit</code> settings to pass to the container.
  * hardLimit **required**
  * name **required**
  * softLimit **required**

### UlimitList
* UlimitList `array`
  * items [Ulimit](#ulimit)

### UlimitName
* UlimitName `string` (values: core, cpu, data, fsize, locks, memlock, msgqueue, nice, nofile, nproc, rss, rtprio, rttime, sigpending, stack)

### UnsupportedFeatureException


### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateCapacityProviderRequest
* UpdateCapacityProviderRequest `object`
  * autoScalingGroupProvider **required**
    * managedScaling [ManagedScaling](#managedscaling)
    * managedTerminationProtection
  * name **required**

### UpdateCapacityProviderResponse
* UpdateCapacityProviderResponse `object`
  * capacityProvider [CapacityProvider](#capacityprovider)

### UpdateClusterSettingsRequest
* UpdateClusterSettingsRequest `object`
  * cluster **required**
  * settings **required**
    * items [ClusterSetting](#clustersetting)

### UpdateClusterSettingsResponse
* UpdateClusterSettingsResponse `object`
  * cluster [Cluster](#cluster)

### UpdateContainerAgentRequest
* UpdateContainerAgentRequest `object`
  * cluster
  * containerInstance **required**

### UpdateContainerAgentResponse
* UpdateContainerAgentResponse `object`
  * containerInstance
    * tags
      * items [Tag](#tag)
    * agentConnected
    * agentUpdateStatus
    * attachments
      * items [Attachment](#attachment)
    * attributes
      * items [Attribute](#attribute)
    * capacityProviderName
    * containerInstanceArn
    * ec2InstanceId
    * pendingTasksCount
    * registeredAt
    * registeredResources
      * items [Resource](#resource)
    * remainingResources
      * items [Resource](#resource)
    * runningTasksCount
    * status
    * statusReason
    * version
    * versionInfo
      * agentHash
      * agentVersion
      * dockerVersion

### UpdateContainerInstancesStateRequest
* UpdateContainerInstancesStateRequest `object`
  * cluster
  * containerInstances **required**
    * items [String](#string)
  * status **required**

### UpdateContainerInstancesStateResponse
* UpdateContainerInstancesStateResponse `object`
  * containerInstances
    * items [ContainerInstance](#containerinstance)
  * failures
    * items [Failure](#failure)

### UpdateInProgressException


### UpdateServicePrimaryTaskSetRequest
* UpdateServicePrimaryTaskSetRequest `object`
  * cluster **required**
  * primaryTaskSet **required**
  * service **required**

### UpdateServicePrimaryTaskSetResponse
* UpdateServicePrimaryTaskSetResponse `object`
  * taskSet [TaskSet](#taskset)

### UpdateServiceRequest
* UpdateServiceRequest `object`
  * capacityProviderStrategy
    * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
  * cluster
  * deploymentConfiguration
    * deploymentCircuitBreaker
      * enable **required**
      * rollback **required**
    * maximumPercent
    * minimumHealthyPercent
  * desiredCount
  * forceNewDeployment
  * healthCheckGracePeriodSeconds
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * placementConstraints
    * items [PlacementConstraint](#placementconstraint)
  * placementStrategy
    * items [PlacementStrategy](#placementstrategy)
  * platformVersion
  * service **required**
  * taskDefinition

### UpdateServiceResponse
* UpdateServiceResponse `object`
  * service
    * tags
      * items [Tag](#tag)
    * capacityProviderStrategy
      * items [CapacityProviderStrategyItem](#capacityproviderstrategyitem)
    * clusterArn
    * createdAt
    * createdBy
    * deploymentConfiguration
      * deploymentCircuitBreaker
        * enable **required**
        * rollback **required**
      * maximumPercent
      * minimumHealthyPercent
    * deploymentController
      * type **required**
    * deployments
      * items [Deployment](#deployment)
    * desiredCount
    * enableECSManagedTags
    * events
      * items [ServiceEvent](#serviceevent)
    * healthCheckGracePeriodSeconds
    * launchType
    * loadBalancers
      * items [LoadBalancer](#loadbalancer)
    * networkConfiguration
      * awsvpcConfiguration
        * assignPublicIp
        * securityGroups
          * items [String](#string)
        * subnets **required**
          * items [String](#string)
    * pendingCount
    * placementConstraints
      * items [PlacementConstraint](#placementconstraint)
    * placementStrategy
      * items [PlacementStrategy](#placementstrategy)
    * platformVersion
    * propagateTags
    * roleArn
    * runningCount
    * schedulingStrategy
    * serviceArn
    * serviceName
    * serviceRegistries
      * items [ServiceRegistry](#serviceregistry)
    * status
    * taskDefinition
    * taskSets
      * items [TaskSet](#taskset)

### UpdateTaskSetRequest
* UpdateTaskSetRequest `object`
  * cluster **required**
  * scale **required** [Scale](#scale)
  * service **required**
  * taskSet **required**

### UpdateTaskSetResponse
* UpdateTaskSetResponse `object`
  * taskSet [TaskSet](#taskset)

### VersionInfo
* VersionInfo `object`: The Docker and Amazon ECS container agent version information about a container instance.
  * agentHash
  * agentVersion
  * dockerVersion

### Volume
* Volume `object`: A data volume used in a task definition. For tasks that use the Amazon Elastic File System (Amazon EFS), specify an <code>efsVolumeConfiguration</code>. For Windows tasks that use Amazon FSx for Windows File Server file system, specify a <code>fsxWindowsFileServerVolumeConfiguration</code>. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in Tasks</a>.
  * host
    * sourcePath
  * dockerVolumeConfiguration
    * autoprovision
    * driver
    * driverOpts
    * labels
    * scope
  * efsVolumeConfiguration
    * authorizationConfig
      * accessPointId
      * iam
    * fileSystemId **required**
    * rootDirectory
    * transitEncryption
    * transitEncryptionPort
  * fsxWindowsFileServerVolumeConfiguration
    * authorizationConfig **required**
      * credentialsParameter **required**
      * domain **required**
    * fileSystemId **required**
    * rootDirectory **required**
  * name

### VolumeFrom
* VolumeFrom `object`: Details on a data volume from another container in the same task definition.
  * readOnly
  * sourceContainer

### VolumeFromList
* VolumeFromList `array`
  * items [VolumeFrom](#volumefrom)

### VolumeList
* VolumeList `array`
  * items [Volume](#volume)


