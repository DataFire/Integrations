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

amazonaws_ecs.CreateCluster({}).then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster. You can host your cluster on a serverless infrastructure that is managed by Amazon ECS by launching your services or tasks using the Fargate launch type. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage by using the EC2 launch type. For more information about launch types, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a>.</p> <p>Amazon ECS lets you launch and stop container-based applications with simple API calls, allows you to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features.</p> <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates the need for you to operate your own cluster management and configuration management systems or worry about scaling your management infrastructure.</p>

## Actions

### CreateCluster



```js
amazonaws_ecs.CreateCluster({}, context)
```

#### Input
* input `object`
  * clusterName [String](#string)

#### Output
* output [CreateClusterResponse](#createclusterresponse)

### CreateService



```js
amazonaws_ecs.CreateService({
  "serviceName": "",
  "taskDefinition": "",
  "desiredCount": 0
}, context)
```

#### Input
* input `object`
  * clientToken [String](#string)
  * cluster [String](#string)
  * deploymentConfiguration [DeploymentConfiguration](#deploymentconfiguration)
  * desiredCount **required** [BoxedInteger](#boxedinteger)
  * healthCheckGracePeriodSeconds [BoxedInteger](#boxedinteger)
  * launchType [LaunchType](#launchtype)
  * loadBalancers [LoadBalancers](#loadbalancers)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * placementConstraints [PlacementConstraints](#placementconstraints)
  * placementStrategy [PlacementStrategies](#placementstrategies)
  * platformVersion [String](#string)
  * role [String](#string)
  * serviceName **required** [String](#string)
  * taskDefinition **required** [String](#string)

#### Output
* output [CreateServiceResponse](#createserviceresponse)

### DeleteAttributes



```js
amazonaws_ecs.DeleteAttributes({
  "attributes": []
}, context)
```

#### Input
* input `object`
  * attributes **required** [Attributes](#attributes)
  * cluster [String](#string)

#### Output
* output [DeleteAttributesResponse](#deleteattributesresponse)

### DeleteCluster



```js
amazonaws_ecs.DeleteCluster({
  "cluster": ""
}, context)
```

#### Input
* input `object`
  * cluster **required** [String](#string)

#### Output
* output [DeleteClusterResponse](#deleteclusterresponse)

### DeleteService



```js
amazonaws_ecs.DeleteService({
  "service": ""
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * service **required** [String](#string)

#### Output
* output [DeleteServiceResponse](#deleteserviceresponse)

### DeregisterContainerInstance



```js
amazonaws_ecs.DeregisterContainerInstance({
  "containerInstance": ""
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * containerInstance **required** [String](#string)
  * force [BoxedBoolean](#boxedboolean)

#### Output
* output [DeregisterContainerInstanceResponse](#deregistercontainerinstanceresponse)

### DeregisterTaskDefinition



```js
amazonaws_ecs.DeregisterTaskDefinition({
  "taskDefinition": ""
}, context)
```

#### Input
* input `object`
  * taskDefinition **required** [String](#string)

#### Output
* output [DeregisterTaskDefinitionResponse](#deregistertaskdefinitionresponse)

### DescribeClusters



```js
amazonaws_ecs.DescribeClusters({}, context)
```

#### Input
* input `object`
  * clusters [StringList](#stringlist)
  * include [ClusterFieldList](#clusterfieldlist)

#### Output
* output [DescribeClustersResponse](#describeclustersresponse)

### DescribeContainerInstances



```js
amazonaws_ecs.DescribeContainerInstances({
  "containerInstances": []
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * containerInstances **required** [StringList](#stringlist)

#### Output
* output [DescribeContainerInstancesResponse](#describecontainerinstancesresponse)

### DescribeServices



```js
amazonaws_ecs.DescribeServices({
  "services": []
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * services **required** [StringList](#stringlist)

#### Output
* output [DescribeServicesResponse](#describeservicesresponse)

### DescribeTaskDefinition



```js
amazonaws_ecs.DescribeTaskDefinition({
  "taskDefinition": ""
}, context)
```

#### Input
* input `object`
  * taskDefinition **required** [String](#string)

#### Output
* output [DescribeTaskDefinitionResponse](#describetaskdefinitionresponse)

### DescribeTasks



```js
amazonaws_ecs.DescribeTasks({
  "tasks": []
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * tasks **required** [StringList](#stringlist)

#### Output
* output [DescribeTasksResponse](#describetasksresponse)

### DiscoverPollEndpoint



```js
amazonaws_ecs.DiscoverPollEndpoint({}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * containerInstance [String](#string)

#### Output
* output [DiscoverPollEndpointResponse](#discoverpollendpointresponse)

### ListAttributes



```js
amazonaws_ecs.ListAttributes({
  "targetType": ""
}, context)
```

#### Input
* input `object`
  * attributeName [String](#string)
  * attributeValue [String](#string)
  * cluster [String](#string)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * targetType **required** [TargetType](#targettype)

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
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)

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
  * cluster [String](#string)
  * filter [String](#string)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * status [ContainerInstanceStatus](#containerinstancestatus)

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
  * cluster [String](#string)
  * launchType [LaunchType](#launchtype)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)

#### Output
* output [ListServicesResponse](#listservicesresponse)

### ListTaskDefinitionFamilies



```js
amazonaws_ecs.ListTaskDefinitionFamilies({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * familyPrefix [String](#string)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * status [TaskDefinitionFamilyStatus](#taskdefinitionfamilystatus)

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
  * familyPrefix [String](#string)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * sort [SortOrder](#sortorder)
  * status [TaskDefinitionStatus](#taskdefinitionstatus)

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
  * cluster [String](#string)
  * containerInstance [String](#string)
  * desiredStatus [DesiredStatus](#desiredstatus)
  * family [String](#string)
  * launchType [LaunchType](#launchtype)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * serviceName [String](#string)
  * startedBy [String](#string)

#### Output
* output [ListTasksResponse](#listtasksresponse)

### PutAttributes



```js
amazonaws_ecs.PutAttributes({
  "attributes": []
}, context)
```

#### Input
* input `object`
  * attributes **required** [Attributes](#attributes)
  * cluster [String](#string)

#### Output
* output [PutAttributesResponse](#putattributesresponse)

### RegisterContainerInstance



```js
amazonaws_ecs.RegisterContainerInstance({}, context)
```

#### Input
* input `object`
  * attributes [Attributes](#attributes)
  * cluster [String](#string)
  * containerInstanceArn [String](#string)
  * instanceIdentityDocument [String](#string)
  * instanceIdentityDocumentSignature [String](#string)
  * totalResources [Resources](#resources)
  * versionInfo [VersionInfo](#versioninfo)

#### Output
* output [RegisterContainerInstanceResponse](#registercontainerinstanceresponse)

### RegisterTaskDefinition



```js
amazonaws_ecs.RegisterTaskDefinition({
  "family": "",
  "containerDefinitions": []
}, context)
```

#### Input
* input `object`
  * containerDefinitions **required** [ContainerDefinitions](#containerdefinitions)
  * cpu [String](#string)
  * executionRoleArn [String](#string)
  * family **required** [String](#string)
  * memory [String](#string)
  * networkMode [NetworkMode](#networkmode)
  * placementConstraints [TaskDefinitionPlacementConstraints](#taskdefinitionplacementconstraints)
  * requiresCompatibilities [CompatibilityList](#compatibilitylist)
  * taskRoleArn [String](#string)
  * volumes [VolumeList](#volumelist)

#### Output
* output [RegisterTaskDefinitionResponse](#registertaskdefinitionresponse)

### RunTask



```js
amazonaws_ecs.RunTask({
  "taskDefinition": ""
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * count [BoxedInteger](#boxedinteger)
  * group [String](#string)
  * launchType [LaunchType](#launchtype)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * overrides [TaskOverride](#taskoverride)
  * placementConstraints [PlacementConstraints](#placementconstraints)
  * placementStrategy [PlacementStrategies](#placementstrategies)
  * platformVersion [String](#string)
  * startedBy [String](#string)
  * taskDefinition **required** [String](#string)

#### Output
* output [RunTaskResponse](#runtaskresponse)

### StartTask



```js
amazonaws_ecs.StartTask({
  "taskDefinition": "",
  "containerInstances": []
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * containerInstances **required** [StringList](#stringlist)
  * group [String](#string)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * overrides [TaskOverride](#taskoverride)
  * startedBy [String](#string)
  * taskDefinition **required** [String](#string)

#### Output
* output [StartTaskResponse](#starttaskresponse)

### StopTask



```js
amazonaws_ecs.StopTask({
  "task": ""
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * reason [String](#string)
  * task **required** [String](#string)

#### Output
* output [StopTaskResponse](#stoptaskresponse)

### SubmitContainerStateChange



```js
amazonaws_ecs.SubmitContainerStateChange({}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * containerName [String](#string)
  * exitCode [BoxedInteger](#boxedinteger)
  * networkBindings [NetworkBindings](#networkbindings)
  * reason [String](#string)
  * status [String](#string)
  * task [String](#string)

#### Output
* output [SubmitContainerStateChangeResponse](#submitcontainerstatechangeresponse)

### SubmitTaskStateChange



```js
amazonaws_ecs.SubmitTaskStateChange({}, context)
```

#### Input
* input `object`
  * attachments [AttachmentStateChanges](#attachmentstatechanges)
  * cluster [String](#string)
  * containers [ContainerStateChanges](#containerstatechanges)
  * executionStoppedAt [Timestamp](#timestamp)
  * pullStartedAt [Timestamp](#timestamp)
  * pullStoppedAt [Timestamp](#timestamp)
  * reason [String](#string)
  * status [String](#string)
  * task [String](#string)

#### Output
* output [SubmitTaskStateChangeResponse](#submittaskstatechangeresponse)

### UpdateContainerAgent



```js
amazonaws_ecs.UpdateContainerAgent({
  "containerInstance": ""
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * containerInstance **required** [String](#string)

#### Output
* output [UpdateContainerAgentResponse](#updatecontaineragentresponse)

### UpdateContainerInstancesState



```js
amazonaws_ecs.UpdateContainerInstancesState({
  "containerInstances": [],
  "status": ""
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * containerInstances **required** [StringList](#stringlist)
  * status **required** [ContainerInstanceStatus](#containerinstancestatus)

#### Output
* output [UpdateContainerInstancesStateResponse](#updatecontainerinstancesstateresponse)

### UpdateService



```js
amazonaws_ecs.UpdateService({
  "service": ""
}, context)
```

#### Input
* input `object`
  * cluster [String](#string)
  * deploymentConfiguration [DeploymentConfiguration](#deploymentconfiguration)
  * desiredCount [BoxedInteger](#boxedinteger)
  * forceNewDeployment [Boolean](#boolean)
  * healthCheckGracePeriodSeconds [BoxedInteger](#boxedinteger)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * platformVersion [String](#string)
  * service **required** [String](#string)
  * taskDefinition [String](#string)

#### Output
* output [UpdateServiceResponse](#updateserviceresponse)



## Definitions

### AccessDeniedException
* AccessDeniedException `object`: You do not have authorization to perform the requested action.

### AgentUpdateStatus
* AgentUpdateStatus `string` (values: PENDING, STAGING, STAGED, UPDATING, UPDATED, FAILED)

### AssignPublicIp
* AssignPublicIp `string` (values: ENABLED, DISABLED)

### Attachment
* Attachment `object`: An object representing a container instance or task attachment.
  * details [AttachmentDetails](#attachmentdetails)
  * id [String](#string)
  * status [String](#string)
  * type [String](#string)

### AttachmentDetails
* AttachmentDetails `array`
  * items [KeyValuePair](#keyvaluepair)

### AttachmentStateChange
* AttachmentStateChange `object`: An object representing a change in state for a task attachment.
  * attachmentArn **required** [String](#string)
  * status **required** [String](#string)

### AttachmentStateChanges
* AttachmentStateChanges `array`
  * items [AttachmentStateChange](#attachmentstatechange)

### Attachments
* Attachments `array`
  * items [Attachment](#attachment)

### Attribute
* Attribute `object`: An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * name **required** [String](#string)
  * targetId [String](#string)
  * targetType [TargetType](#targettype)
  * value [String](#string)

### AttributeLimitExceededException
* AttributeLimitExceededException `object`: You can apply up to 10 custom attributes per resource. You can view the attributes of a resource with <a>ListAttributes</a>. You can remove existing attributes on a resource with <a>DeleteAttributes</a>.

### Attributes
* Attributes `array`
  * items [Attribute](#attribute)

### AwsVpcConfiguration
* AwsVpcConfiguration `object`: An object representing the networking details for a task or service.
  * assignPublicIp [AssignPublicIp](#assignpublicip)
  * securityGroups [StringList](#stringlist)
  * subnets **required** [StringList](#stringlist)

### BlockedException
* BlockedException `object`: Your AWS account has been blocked. <a href="http://aws.amazon.com/contact-us/">Contact AWS Customer Support</a> for more information.

### Boolean
* Boolean `boolean`

### BoxedBoolean
* BoxedBoolean `boolean`

### BoxedInteger
* BoxedInteger `integer`

### ClientException
* ClientException `object`: These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.
  * message [String](#string)

### Cluster
* Cluster `object`: A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.
  * activeServicesCount [Integer](#integer)
  * clusterArn [String](#string)
  * clusterName [String](#string)
  * pendingTasksCount [Integer](#integer)
  * registeredContainerInstancesCount [Integer](#integer)
  * runningTasksCount [Integer](#integer)
  * statistics [Statistics](#statistics)
  * status [String](#string)

### ClusterContainsContainerInstancesException
* ClusterContainsContainerInstancesException `object`: You cannot delete a cluster that has registered container instances. You must first deregister the container instances before you can delete the cluster. For more information, see <a>DeregisterContainerInstance</a>.

### ClusterContainsServicesException
* ClusterContainsServicesException `object`: You cannot delete a cluster that contains services. You must first update the service to reduce its desired task count to 0 and then delete the service. For more information, see <a>UpdateService</a> and <a>DeleteService</a>.

### ClusterContainsTasksException
* ClusterContainsTasksException `object`: You cannot delete a cluster that has active tasks.

### ClusterField
* ClusterField `string` (values: STATISTICS)

### ClusterFieldList
* ClusterFieldList `array`
  * items [ClusterField](#clusterfield)

### ClusterNotFoundException
* ClusterNotFoundException `object`: The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are region-specific.

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
  * containerArn [String](#string)
  * exitCode [BoxedInteger](#boxedinteger)
  * lastStatus [String](#string)
  * name [String](#string)
  * networkBindings [NetworkBindings](#networkbindings)
  * networkInterfaces [NetworkInterfaces](#networkinterfaces)
  * reason [String](#string)
  * taskArn [String](#string)

### ContainerDefinition
* ContainerDefinition `object`: Container definitions are used in task definitions to describe the different containers that are launched as part of a task.
  * command [StringList](#stringlist)
  * cpu [Integer](#integer)
  * disableNetworking [BoxedBoolean](#boxedboolean)
  * dnsSearchDomains [StringList](#stringlist)
  * dnsServers [StringList](#stringlist)
  * dockerLabels [DockerLabelsMap](#dockerlabelsmap)
  * dockerSecurityOptions [StringList](#stringlist)
  * entryPoint [StringList](#stringlist)
  * environment [EnvironmentVariables](#environmentvariables)
  * essential [BoxedBoolean](#boxedboolean)
  * extraHosts [HostEntryList](#hostentrylist)
  * hostname [String](#string)
  * image [String](#string)
  * links [StringList](#stringlist)
  * linuxParameters [LinuxParameters](#linuxparameters)
  * logConfiguration [LogConfiguration](#logconfiguration)
  * memory [BoxedInteger](#boxedinteger)
  * memoryReservation [BoxedInteger](#boxedinteger)
  * mountPoints [MountPointList](#mountpointlist)
  * name [String](#string)
  * portMappings [PortMappingList](#portmappinglist)
  * privileged [BoxedBoolean](#boxedboolean)
  * readonlyRootFilesystem [BoxedBoolean](#boxedboolean)
  * ulimits [UlimitList](#ulimitlist)
  * user [String](#string)
  * volumesFrom [VolumeFromList](#volumefromlist)
  * workingDirectory [String](#string)

### ContainerDefinitions
* ContainerDefinitions `array`
  * items [ContainerDefinition](#containerdefinition)

### ContainerInstance
* ContainerInstance `object`: An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.
  * agentConnected [Boolean](#boolean)
  * agentUpdateStatus [AgentUpdateStatus](#agentupdatestatus)
  * attachments [Attachments](#attachments)
  * attributes [Attributes](#attributes)
  * containerInstanceArn [String](#string)
  * ec2InstanceId [String](#string)
  * pendingTasksCount [Integer](#integer)
  * registeredAt [Timestamp](#timestamp)
  * registeredResources [Resources](#resources)
  * remainingResources [Resources](#resources)
  * runningTasksCount [Integer](#integer)
  * status [String](#string)
  * version [Long](#long)
  * versionInfo [VersionInfo](#versioninfo)

### ContainerInstanceStatus
* ContainerInstanceStatus `string` (values: ACTIVE, DRAINING)

### ContainerInstances
* ContainerInstances `array`
  * items [ContainerInstance](#containerinstance)

### ContainerOverride
* ContainerOverride `object`: The overrides that should be sent to a container.
  * command [StringList](#stringlist)
  * cpu [BoxedInteger](#boxedinteger)
  * environment [EnvironmentVariables](#environmentvariables)
  * memory [BoxedInteger](#boxedinteger)
  * memoryReservation [BoxedInteger](#boxedinteger)
  * name [String](#string)

### ContainerOverrides
* ContainerOverrides `array`
  * items [ContainerOverride](#containeroverride)

### ContainerStateChange
* ContainerStateChange `object`: An object representing a change in state for a container.
  * containerName [String](#string)
  * exitCode [BoxedInteger](#boxedinteger)
  * networkBindings [NetworkBindings](#networkbindings)
  * reason [String](#string)
  * status [String](#string)

### ContainerStateChanges
* ContainerStateChanges `array`
  * items [ContainerStateChange](#containerstatechange)

### Containers
* Containers `array`
  * items [Container](#container)

### CreateClusterRequest
* CreateClusterRequest `object`
  * clusterName [String](#string)

### CreateClusterResponse
* CreateClusterResponse `object`
  * cluster [Cluster](#cluster)

### CreateServiceRequest
* CreateServiceRequest `object`
  * clientToken [String](#string)
  * cluster [String](#string)
  * deploymentConfiguration [DeploymentConfiguration](#deploymentconfiguration)
  * desiredCount **required** [BoxedInteger](#boxedinteger)
  * healthCheckGracePeriodSeconds [BoxedInteger](#boxedinteger)
  * launchType [LaunchType](#launchtype)
  * loadBalancers [LoadBalancers](#loadbalancers)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * placementConstraints [PlacementConstraints](#placementconstraints)
  * placementStrategy [PlacementStrategies](#placementstrategies)
  * platformVersion [String](#string)
  * role [String](#string)
  * serviceName **required** [String](#string)
  * taskDefinition **required** [String](#string)

### CreateServiceResponse
* CreateServiceResponse `object`
  * service [Service](#service)

### DeleteAttributesRequest
* DeleteAttributesRequest `object`
  * attributes **required** [Attributes](#attributes)
  * cluster [String](#string)

### DeleteAttributesResponse
* DeleteAttributesResponse `object`
  * attributes [Attributes](#attributes)

### DeleteClusterRequest
* DeleteClusterRequest `object`
  * cluster **required** [String](#string)

### DeleteClusterResponse
* DeleteClusterResponse `object`
  * cluster [Cluster](#cluster)

### DeleteServiceRequest
* DeleteServiceRequest `object`
  * cluster [String](#string)
  * service **required** [String](#string)

### DeleteServiceResponse
* DeleteServiceResponse `object`
  * service [Service](#service)

### Deployment
* Deployment `object`: The details of an Amazon ECS service deployment.
  * createdAt [Timestamp](#timestamp)
  * desiredCount [Integer](#integer)
  * id [String](#string)
  * launchType [LaunchType](#launchtype)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * pendingCount [Integer](#integer)
  * platformVersion [String](#string)
  * runningCount [Integer](#integer)
  * status [String](#string)
  * taskDefinition [String](#string)
  * updatedAt [Timestamp](#timestamp)

### DeploymentConfiguration
* DeploymentConfiguration `object`: Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
  * maximumPercent [BoxedInteger](#boxedinteger)
  * minimumHealthyPercent [BoxedInteger](#boxedinteger)

### Deployments
* Deployments `array`
  * items [Deployment](#deployment)

### DeregisterContainerInstanceRequest
* DeregisterContainerInstanceRequest `object`
  * cluster [String](#string)
  * containerInstance **required** [String](#string)
  * force [BoxedBoolean](#boxedboolean)

### DeregisterContainerInstanceResponse
* DeregisterContainerInstanceResponse `object`
  * containerInstance [ContainerInstance](#containerinstance)

### DeregisterTaskDefinitionRequest
* DeregisterTaskDefinitionRequest `object`
  * taskDefinition **required** [String](#string)

### DeregisterTaskDefinitionResponse
* DeregisterTaskDefinitionResponse `object`
  * taskDefinition [TaskDefinition](#taskdefinition)

### DescribeClustersRequest
* DescribeClustersRequest `object`
  * clusters [StringList](#stringlist)
  * include [ClusterFieldList](#clusterfieldlist)

### DescribeClustersResponse
* DescribeClustersResponse `object`
  * clusters [Clusters](#clusters)
  * failures [Failures](#failures)

### DescribeContainerInstancesRequest
* DescribeContainerInstancesRequest `object`
  * cluster [String](#string)
  * containerInstances **required** [StringList](#stringlist)

### DescribeContainerInstancesResponse
* DescribeContainerInstancesResponse `object`
  * containerInstances [ContainerInstances](#containerinstances)
  * failures [Failures](#failures)

### DescribeServicesRequest
* DescribeServicesRequest `object`
  * cluster [String](#string)
  * services **required** [StringList](#stringlist)

### DescribeServicesResponse
* DescribeServicesResponse `object`
  * failures [Failures](#failures)
  * services [Services](#services)

### DescribeTaskDefinitionRequest
* DescribeTaskDefinitionRequest `object`
  * taskDefinition **required** [String](#string)

### DescribeTaskDefinitionResponse
* DescribeTaskDefinitionResponse `object`
  * taskDefinition [TaskDefinition](#taskdefinition)

### DescribeTasksRequest
* DescribeTasksRequest `object`
  * cluster [String](#string)
  * tasks **required** [StringList](#stringlist)

### DescribeTasksResponse
* DescribeTasksResponse `object`
  * failures [Failures](#failures)
  * tasks [Tasks](#tasks)

### DesiredStatus
* DesiredStatus `string` (values: RUNNING, PENDING, STOPPED)

### Device
* Device `object`: An object representing a container instance host device.
  * containerPath [String](#string)
  * hostPath **required** [String](#string)
  * permissions [DeviceCgroupPermissions](#devicecgrouppermissions)

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
  * cluster [String](#string)
  * containerInstance [String](#string)

### DiscoverPollEndpointResponse
* DiscoverPollEndpointResponse `object`
  * endpoint [String](#string)
  * telemetryEndpoint [String](#string)

### DockerLabelsMap
* DockerLabelsMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### Double
* Double `number`

### EnvironmentVariables
* EnvironmentVariables `array`
  * items [KeyValuePair](#keyvaluepair)

### Failure
* Failure `object`: A failed resource.
  * arn [String](#string)
  * reason [String](#string)

### Failures
* Failures `array`
  * items [Failure](#failure)

### HostEntry
* HostEntry `object`: Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. 
  * hostname **required** [String](#string)
  * ipAddress **required** [String](#string)

### HostEntryList
* HostEntryList `array`
  * items [HostEntry](#hostentry)

### HostVolumeProperties
* HostVolumeProperties `object`: Details on a container instance host volume.
  * sourcePath [String](#string)

### Integer
* Integer `integer`

### InvalidParameterException
* InvalidParameterException `object`: The specified parameter is invalid. Review the available parameters for the API request.

### KernelCapabilities
* KernelCapabilities `object`: The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information on the default capabilities and the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information on these Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page.
  * add [StringList](#stringlist)
  * drop [StringList](#stringlist)

### KeyValuePair
* KeyValuePair `object`: A key and value pair object.
  * name [String](#string)
  * value [String](#string)

### LaunchType
* LaunchType `string` (values: EC2, FARGATE)

### LinuxParameters
* LinuxParameters `object`: Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>.
  * capabilities [KernelCapabilities](#kernelcapabilities)
  * devices [DevicesList](#deviceslist)
  * initProcessEnabled [BoxedBoolean](#boxedboolean)

### ListAttributesRequest
* ListAttributesRequest `object`
  * attributeName [String](#string)
  * attributeValue [String](#string)
  * cluster [String](#string)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * targetType **required** [TargetType](#targettype)

### ListAttributesResponse
* ListAttributesResponse `object`
  * attributes [Attributes](#attributes)
  * nextToken [String](#string)

### ListClustersRequest
* ListClustersRequest `object`
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)

### ListClustersResponse
* ListClustersResponse `object`
  * clusterArns [StringList](#stringlist)
  * nextToken [String](#string)

### ListContainerInstancesRequest
* ListContainerInstancesRequest `object`
  * cluster [String](#string)
  * filter [String](#string)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * status [ContainerInstanceStatus](#containerinstancestatus)

### ListContainerInstancesResponse
* ListContainerInstancesResponse `object`
  * containerInstanceArns [StringList](#stringlist)
  * nextToken [String](#string)

### ListServicesRequest
* ListServicesRequest `object`
  * cluster [String](#string)
  * launchType [LaunchType](#launchtype)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)

### ListServicesResponse
* ListServicesResponse `object`
  * nextToken [String](#string)
  * serviceArns [StringList](#stringlist)

### ListTaskDefinitionFamiliesRequest
* ListTaskDefinitionFamiliesRequest `object`
  * familyPrefix [String](#string)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * status [TaskDefinitionFamilyStatus](#taskdefinitionfamilystatus)

### ListTaskDefinitionFamiliesResponse
* ListTaskDefinitionFamiliesResponse `object`
  * families [StringList](#stringlist)
  * nextToken [String](#string)

### ListTaskDefinitionsRequest
* ListTaskDefinitionsRequest `object`
  * familyPrefix [String](#string)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * sort [SortOrder](#sortorder)
  * status [TaskDefinitionStatus](#taskdefinitionstatus)

### ListTaskDefinitionsResponse
* ListTaskDefinitionsResponse `object`
  * nextToken [String](#string)
  * taskDefinitionArns [StringList](#stringlist)

### ListTasksRequest
* ListTasksRequest `object`
  * cluster [String](#string)
  * containerInstance [String](#string)
  * desiredStatus [DesiredStatus](#desiredstatus)
  * family [String](#string)
  * launchType [LaunchType](#launchtype)
  * maxResults [BoxedInteger](#boxedinteger)
  * nextToken [String](#string)
  * serviceName [String](#string)
  * startedBy [String](#string)

### ListTasksResponse
* ListTasksResponse `object`
  * nextToken [String](#string)
  * taskArns [StringList](#stringlist)

### LoadBalancer
* LoadBalancer `object`: Details on a load balancer that is used with a service.
  * containerName [String](#string)
  * containerPort [BoxedInteger](#boxedinteger)
  * loadBalancerName [String](#string)
  * targetGroupArn [String](#string)

### LoadBalancers
* LoadBalancers `array`
  * items [LoadBalancer](#loadbalancer)

### LogConfiguration
* LogConfiguration `object`: Log configuration options to send to a custom log driver for the container.
  * logDriver **required** [LogDriver](#logdriver)
  * options [LogConfigurationOptionsMap](#logconfigurationoptionsmap)

### LogConfigurationOptionsMap
* LogConfigurationOptionsMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### LogDriver
* LogDriver `string` (values: json-file, syslog, journald, gelf, fluentd, awslogs, splunk)

### Long
* Long `integer`

### MissingVersionException
* MissingVersionException `object`: Amazon ECS is unable to determine the current version of the Amazon ECS container agent on the container instance and does not have enough information to proceed with an update. This could be because the agent running on the container instance is an older or custom version that does not use our version information.

### MountPoint
* MountPoint `object`: Details on a volume mount point that is used in a container definition.
  * containerPath [String](#string)
  * readOnly [BoxedBoolean](#boxedboolean)
  * sourceVolume [String](#string)

### MountPointList
* MountPointList `array`
  * items [MountPoint](#mountpoint)

### NetworkBinding
* NetworkBinding `object`: Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.
  * bindIP [String](#string)
  * containerPort [BoxedInteger](#boxedinteger)
  * hostPort [BoxedInteger](#boxedinteger)
  * protocol [TransportProtocol](#transportprotocol)

### NetworkBindings
* NetworkBindings `array`
  * items [NetworkBinding](#networkbinding)

### NetworkConfiguration
* NetworkConfiguration `object`: An object representing the network configuration for a task or service.
  * awsvpcConfiguration [AwsVpcConfiguration](#awsvpcconfiguration)

### NetworkInterface
* NetworkInterface `object`: An object representing the Elastic Network Interface for tasks that use the <code>awsvpc</code> network mode.
  * attachmentId [String](#string)
  * ipv6Address [String](#string)
  * privateIpv4Address [String](#string)

### NetworkInterfaces
* NetworkInterfaces `array`
  * items [NetworkInterface](#networkinterface)

### NetworkMode
* NetworkMode `string` (values: bridge, host, awsvpc, none)

### NoUpdateAvailableException
* NoUpdateAvailableException `object`: There is no update available for this Amazon ECS container agent. This could be because the agent is already running the latest version, or it is so old that there is no update path to the current version.

### PlacementConstraint
* PlacementConstraint `object`: An object representing a constraint on task placement. For more information, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * expression [String](#string)
  * type [PlacementConstraintType](#placementconstrainttype)

### PlacementConstraintType
* PlacementConstraintType `string` (values: distinctInstance, memberOf)

### PlacementConstraints
* PlacementConstraints `array`
  * items [PlacementConstraint](#placementconstraint)

### PlacementStrategies
* PlacementStrategies `array`
  * items [PlacementStrategy](#placementstrategy)

### PlacementStrategy
* PlacementStrategy `object`: The task placement strategy for a task or service. For more information, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
  * field [String](#string)
  * type [PlacementStrategyType](#placementstrategytype)

### PlacementStrategyType
* PlacementStrategyType `string` (values: random, spread, binpack)

### PlatformTaskDefinitionIncompatibilityException
* PlatformTaskDefinitionIncompatibilityException `object`: The specified platform version does not satisfy the task definition’s required capabilities.

### PlatformUnknownException
* PlatformUnknownException `object`: The specified platform version does not exist.

### PortMapping
* PortMapping `object`: <p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If using containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, exposed ports should be specified using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>
  * containerPort [BoxedInteger](#boxedinteger)
  * hostPort [BoxedInteger](#boxedinteger)
  * protocol [TransportProtocol](#transportprotocol)

### PortMappingList
* PortMappingList `array`
  * items [PortMapping](#portmapping)

### PutAttributesRequest
* PutAttributesRequest `object`
  * attributes **required** [Attributes](#attributes)
  * cluster [String](#string)

### PutAttributesResponse
* PutAttributesResponse `object`
  * attributes [Attributes](#attributes)

### RegisterContainerInstanceRequest
* RegisterContainerInstanceRequest `object`
  * attributes [Attributes](#attributes)
  * cluster [String](#string)
  * containerInstanceArn [String](#string)
  * instanceIdentityDocument [String](#string)
  * instanceIdentityDocumentSignature [String](#string)
  * totalResources [Resources](#resources)
  * versionInfo [VersionInfo](#versioninfo)

### RegisterContainerInstanceResponse
* RegisterContainerInstanceResponse `object`
  * containerInstance [ContainerInstance](#containerinstance)

### RegisterTaskDefinitionRequest
* RegisterTaskDefinitionRequest `object`
  * containerDefinitions **required** [ContainerDefinitions](#containerdefinitions)
  * cpu [String](#string)
  * executionRoleArn [String](#string)
  * family **required** [String](#string)
  * memory [String](#string)
  * networkMode [NetworkMode](#networkmode)
  * placementConstraints [TaskDefinitionPlacementConstraints](#taskdefinitionplacementconstraints)
  * requiresCompatibilities [CompatibilityList](#compatibilitylist)
  * taskRoleArn [String](#string)
  * volumes [VolumeList](#volumelist)

### RegisterTaskDefinitionResponse
* RegisterTaskDefinitionResponse `object`
  * taskDefinition [TaskDefinition](#taskdefinition)

### RequiresAttributes
* RequiresAttributes `array`
  * items [Attribute](#attribute)

### Resource
* Resource `object`: Describes the resources available for a container instance.
  * doubleValue [Double](#double)
  * integerValue [Integer](#integer)
  * longValue [Long](#long)
  * name [String](#string)
  * stringSetValue [StringList](#stringlist)
  * type [String](#string)

### Resources
* Resources `array`
  * items [Resource](#resource)

### RunTaskRequest
* RunTaskRequest `object`
  * cluster [String](#string)
  * count [BoxedInteger](#boxedinteger)
  * group [String](#string)
  * launchType [LaunchType](#launchtype)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * overrides [TaskOverride](#taskoverride)
  * placementConstraints [PlacementConstraints](#placementconstraints)
  * placementStrategy [PlacementStrategies](#placementstrategies)
  * platformVersion [String](#string)
  * startedBy [String](#string)
  * taskDefinition **required** [String](#string)

### RunTaskResponse
* RunTaskResponse `object`
  * failures [Failures](#failures)
  * tasks [Tasks](#tasks)

### ServerException
* ServerException `object`: These errors are usually caused by a server issue.
  * message [String](#string)

### Service
* Service `object`: Details on a service within a cluster
  * clusterArn [String](#string)
  * createdAt [Timestamp](#timestamp)
  * deploymentConfiguration [DeploymentConfiguration](#deploymentconfiguration)
  * deployments [Deployments](#deployments)
  * desiredCount [Integer](#integer)
  * events [ServiceEvents](#serviceevents)
  * healthCheckGracePeriodSeconds [BoxedInteger](#boxedinteger)
  * launchType [LaunchType](#launchtype)
  * loadBalancers [LoadBalancers](#loadbalancers)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * pendingCount [Integer](#integer)
  * placementConstraints [PlacementConstraints](#placementconstraints)
  * placementStrategy [PlacementStrategies](#placementstrategies)
  * platformVersion [String](#string)
  * roleArn [String](#string)
  * runningCount [Integer](#integer)
  * serviceArn [String](#string)
  * serviceName [String](#string)
  * status [String](#string)
  * taskDefinition [String](#string)

### ServiceEvent
* ServiceEvent `object`: Details on an event associated with a service.
  * createdAt [Timestamp](#timestamp)
  * id [String](#string)
  * message [String](#string)

### ServiceEvents
* ServiceEvents `array`
  * items [ServiceEvent](#serviceevent)

### ServiceNotActiveException
* ServiceNotActiveException `object`: The specified service is not active. You can't update a service that is inactive. If you have previously deleted a service, you can re-create it with <a>CreateService</a>.

### ServiceNotFoundException
* ServiceNotFoundException `object`: The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and region-specific.

### Services
* Services `array`
  * items [Service](#service)

### SortOrder
* SortOrder `string` (values: ASC, DESC)

### StartTaskRequest
* StartTaskRequest `object`
  * cluster [String](#string)
  * containerInstances **required** [StringList](#stringlist)
  * group [String](#string)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * overrides [TaskOverride](#taskoverride)
  * startedBy [String](#string)
  * taskDefinition **required** [String](#string)

### StartTaskResponse
* StartTaskResponse `object`
  * failures [Failures](#failures)
  * tasks [Tasks](#tasks)

### Statistics
* Statistics `array`
  * items [KeyValuePair](#keyvaluepair)

### StopTaskRequest
* StopTaskRequest `object`
  * cluster [String](#string)
  * reason [String](#string)
  * task **required** [String](#string)

### StopTaskResponse
* StopTaskResponse `object`
  * task [Task](#task)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### SubmitContainerStateChangeRequest
* SubmitContainerStateChangeRequest `object`
  * cluster [String](#string)
  * containerName [String](#string)
  * exitCode [BoxedInteger](#boxedinteger)
  * networkBindings [NetworkBindings](#networkbindings)
  * reason [String](#string)
  * status [String](#string)
  * task [String](#string)

### SubmitContainerStateChangeResponse
* SubmitContainerStateChangeResponse `object`
  * acknowledgment [String](#string)

### SubmitTaskStateChangeRequest
* SubmitTaskStateChangeRequest `object`
  * attachments [AttachmentStateChanges](#attachmentstatechanges)
  * cluster [String](#string)
  * containers [ContainerStateChanges](#containerstatechanges)
  * executionStoppedAt [Timestamp](#timestamp)
  * pullStartedAt [Timestamp](#timestamp)
  * pullStoppedAt [Timestamp](#timestamp)
  * reason [String](#string)
  * status [String](#string)
  * task [String](#string)

### SubmitTaskStateChangeResponse
* SubmitTaskStateChangeResponse `object`
  * acknowledgment [String](#string)

### TargetNotFoundException
* TargetNotFoundException `object`: The specified target could not be found. You can view your available container instances with <a>ListContainerInstances</a>. Amazon ECS container instances are cluster-specific and region-specific.

### TargetType
* TargetType `string` (values: container-instance)

### Task
* Task `object`: Details on a task in a cluster.
  * attachments [Attachments](#attachments)
  * clusterArn [String](#string)
  * connectivity [Connectivity](#connectivity)
  * connectivityAt [Timestamp](#timestamp)
  * containerInstanceArn [String](#string)
  * containers [Containers](#containers)
  * cpu [String](#string)
  * createdAt [Timestamp](#timestamp)
  * desiredStatus [String](#string)
  * executionStoppedAt [Timestamp](#timestamp)
  * group [String](#string)
  * lastStatus [String](#string)
  * launchType [LaunchType](#launchtype)
  * memory [String](#string)
  * overrides [TaskOverride](#taskoverride)
  * platformVersion [String](#string)
  * pullStartedAt [Timestamp](#timestamp)
  * pullStoppedAt [Timestamp](#timestamp)
  * startedAt [Timestamp](#timestamp)
  * startedBy [String](#string)
  * stoppedAt [Timestamp](#timestamp)
  * stoppedReason [String](#string)
  * stoppingAt [Timestamp](#timestamp)
  * taskArn [String](#string)
  * taskDefinitionArn [String](#string)
  * version [Long](#long)

### TaskDefinition
* TaskDefinition `object`: Details of a task definition.
  * compatibilities [CompatibilityList](#compatibilitylist)
  * containerDefinitions [ContainerDefinitions](#containerdefinitions)
  * cpu [String](#string)
  * executionRoleArn [String](#string)
  * family [String](#string)
  * memory [String](#string)
  * networkMode [NetworkMode](#networkmode)
  * placementConstraints [TaskDefinitionPlacementConstraints](#taskdefinitionplacementconstraints)
  * requiresAttributes [RequiresAttributes](#requiresattributes)
  * requiresCompatibilities [CompatibilityList](#compatibilitylist)
  * revision [Integer](#integer)
  * status [TaskDefinitionStatus](#taskdefinitionstatus)
  * taskDefinitionArn [String](#string)
  * taskRoleArn [String](#string)
  * volumes [VolumeList](#volumelist)

### TaskDefinitionFamilyStatus
* TaskDefinitionFamilyStatus `string` (values: ACTIVE, INACTIVE, ALL)

### TaskDefinitionPlacementConstraint
* TaskDefinitionPlacementConstraint `object`: <p>An object representing a constraint on task placement in the task definition.</p> <p>If you are using the Fargate launch type, task placement contraints are not supported.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
  * expression [String](#string)
  * type [TaskDefinitionPlacementConstraintType](#taskdefinitionplacementconstrainttype)

### TaskDefinitionPlacementConstraintType
* TaskDefinitionPlacementConstraintType `string` (values: memberOf)

### TaskDefinitionPlacementConstraints
* TaskDefinitionPlacementConstraints `array`
  * items [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)

### TaskDefinitionStatus
* TaskDefinitionStatus `string` (values: ACTIVE, INACTIVE)

### TaskOverride
* TaskOverride `object`: The overrides associated with a task.
  * containerOverrides [ContainerOverrides](#containeroverrides)
  * executionRoleArn [String](#string)
  * taskRoleArn [String](#string)

### Tasks
* Tasks `array`
  * items [Task](#task)

### Timestamp
* Timestamp `string`

### TransportProtocol
* TransportProtocol `string` (values: tcp, udp)

### Ulimit
* Ulimit `object`: The <code>ulimit</code> settings to pass to the container.
  * hardLimit **required** [Integer](#integer)
  * name **required** [UlimitName](#ulimitname)
  * softLimit **required** [Integer](#integer)

### UlimitList
* UlimitList `array`
  * items [Ulimit](#ulimit)

### UlimitName
* UlimitName `string` (values: core, cpu, data, fsize, locks, memlock, msgqueue, nice, nofile, nproc, rss, rtprio, rttime, sigpending, stack)

### UnsupportedFeatureException
* UnsupportedFeatureException `object`: The specified task is not supported in this region.

### UpdateContainerAgentRequest
* UpdateContainerAgentRequest `object`
  * cluster [String](#string)
  * containerInstance **required** [String](#string)

### UpdateContainerAgentResponse
* UpdateContainerAgentResponse `object`
  * containerInstance [ContainerInstance](#containerinstance)

### UpdateContainerInstancesStateRequest
* UpdateContainerInstancesStateRequest `object`
  * cluster [String](#string)
  * containerInstances **required** [StringList](#stringlist)
  * status **required** [ContainerInstanceStatus](#containerinstancestatus)

### UpdateContainerInstancesStateResponse
* UpdateContainerInstancesStateResponse `object`
  * containerInstances [ContainerInstances](#containerinstances)
  * failures [Failures](#failures)

### UpdateInProgressException
* UpdateInProgressException `object`: There is already a current Amazon ECS container agent update in progress on the specified container instance. If the container agent becomes disconnected while it is in a transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the update process can get stuck in that state. However, when the agent reconnects, it resumes where it stopped previously.

### UpdateServiceRequest
* UpdateServiceRequest `object`
  * cluster [String](#string)
  * deploymentConfiguration [DeploymentConfiguration](#deploymentconfiguration)
  * desiredCount [BoxedInteger](#boxedinteger)
  * forceNewDeployment [Boolean](#boolean)
  * healthCheckGracePeriodSeconds [BoxedInteger](#boxedinteger)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * platformVersion [String](#string)
  * service **required** [String](#string)
  * taskDefinition [String](#string)

### UpdateServiceResponse
* UpdateServiceResponse `object`
  * service [Service](#service)

### VersionInfo
* VersionInfo `object`: The Docker and Amazon ECS container agent version information about a container instance.
  * agentHash [String](#string)
  * agentVersion [String](#string)
  * dockerVersion [String](#string)

### Volume
* Volume `object`: A data volume used in a task definition.
  * host [HostVolumeProperties](#hostvolumeproperties)
  * name [String](#string)

### VolumeFrom
* VolumeFrom `object`: Details on a data volume from another container in the same task definition.
  * readOnly [BoxedBoolean](#boxedboolean)
  * sourceContainer [String](#string)

### VolumeFromList
* VolumeFromList `array`
  * items [VolumeFrom](#volumefrom)

### VolumeList
* VolumeList `array`
  * items [Volume](#volume)


