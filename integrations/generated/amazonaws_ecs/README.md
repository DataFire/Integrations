# @datafire/amazonaws_ecs

Client library for Amazon EC2 Container Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ecs
```

```js
let datafire = require('datafire');
let amazonaws_ecs = require('@datafire/amazonaws_ecs').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_ecs.CreateCluster({}).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon EC2 Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster of EC2 instances. Amazon ECS lets you launch and stop container-enabled applications with simple API calls, allows you to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features like security groups, Amazon EBS volumes, and IAM roles.</p> <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. Amazon EC2 Container Service eliminates the need for you to operate your own cluster management and configuration management systems or worry about scaling your management infrastructure.</p>

## Actions
### CreateCluster



```js
amazonaws_ecs.CreateCluster({}, context)
```

#### Parameters
* clusterName (string)

### CreateService



```js
amazonaws_ecs.CreateService({
  "serviceName": "",
  "taskDefinition": "",
  "desiredCount": 0
}, context)
```

#### Parameters
* clientToken (string)
* cluster (string)
* deploymentConfiguration (object) - Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
* desiredCount (integer) **required**
* loadBalancers (array)
* placementConstraints (array)
* placementStrategy (array)
* role (string)
* serviceName (string) **required**
* taskDefinition (string) **required**

### DeleteAttributes



```js
amazonaws_ecs.DeleteAttributes({
  "attributes": []
}, context)
```

#### Parameters
* attributes (array) **required**
* cluster (string)

### DeleteCluster



```js
amazonaws_ecs.DeleteCluster({
  "cluster": ""
}, context)
```

#### Parameters
* cluster (string) **required**

### DeleteService



```js
amazonaws_ecs.DeleteService({
  "service": ""
}, context)
```

#### Parameters
* cluster (string)
* service (string) **required**

### DeregisterContainerInstance



```js
amazonaws_ecs.DeregisterContainerInstance({
  "containerInstance": ""
}, context)
```

#### Parameters
* cluster (string)
* containerInstance (string) **required**
* force (boolean)

### DeregisterTaskDefinition



```js
amazonaws_ecs.DeregisterTaskDefinition({
  "taskDefinition": ""
}, context)
```

#### Parameters
* taskDefinition (string) **required**

### DescribeClusters



```js
amazonaws_ecs.DescribeClusters({}, context)
```

#### Parameters
* clusters (array)

### DescribeContainerInstances



```js
amazonaws_ecs.DescribeContainerInstances({
  "containerInstances": []
}, context)
```

#### Parameters
* cluster (string)
* containerInstances (array) **required**

### DescribeServices



```js
amazonaws_ecs.DescribeServices({
  "services": []
}, context)
```

#### Parameters
* cluster (string)
* services (array) **required**

### DescribeTaskDefinition



```js
amazonaws_ecs.DescribeTaskDefinition({
  "taskDefinition": ""
}, context)
```

#### Parameters
* taskDefinition (string) **required**

### DescribeTasks



```js
amazonaws_ecs.DescribeTasks({
  "tasks": []
}, context)
```

#### Parameters
* cluster (string)
* tasks (array) **required**

### DiscoverPollEndpoint



```js
amazonaws_ecs.DiscoverPollEndpoint({}, context)
```

#### Parameters
* cluster (string)
* containerInstance (string)

### ListAttributes



```js
amazonaws_ecs.ListAttributes({
  "targetType": ""
}, context)
```

#### Parameters
* attributeName (string)
* attributeValue (string)
* cluster (string)
* maxResults (integer)
* nextToken (string)
* targetType (string) **required**

### ListClusters



```js
amazonaws_ecs.ListClusters({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer)
* nextToken (string)

### ListContainerInstances



```js
amazonaws_ecs.ListContainerInstances({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* cluster (string)
* filter (string)
* maxResults (integer)
* nextToken (string)
* status (string)

### ListServices



```js
amazonaws_ecs.ListServices({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* cluster (string)
* maxResults (integer)
* nextToken (string)

### ListTaskDefinitionFamilies



```js
amazonaws_ecs.ListTaskDefinitionFamilies({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* familyPrefix (string)
* maxResults (integer)
* nextToken (string)
* status (string)

### ListTaskDefinitions



```js
amazonaws_ecs.ListTaskDefinitions({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* familyPrefix (string)
* maxResults (integer)
* nextToken (string)
* sort (string)
* status (string)

### ListTasks



```js
amazonaws_ecs.ListTasks({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* cluster (string)
* containerInstance (string)
* desiredStatus (string)
* family (string)
* maxResults (integer)
* nextToken (string)
* serviceName (string)
* startedBy (string)

### PutAttributes



```js
amazonaws_ecs.PutAttributes({
  "attributes": []
}, context)
```

#### Parameters
* attributes (array) **required**
* cluster (string)

### RegisterContainerInstance



```js
amazonaws_ecs.RegisterContainerInstance({}, context)
```

#### Parameters
* attributes (array)
* cluster (string)
* containerInstanceArn (string)
* instanceIdentityDocument (string)
* instanceIdentityDocumentSignature (string)
* totalResources (array)
* versionInfo (object) - The Docker and Amazon ECS container agent version information about a container instance.

### RegisterTaskDefinition



```js
amazonaws_ecs.RegisterTaskDefinition({
  "family": "",
  "containerDefinitions": []
}, context)
```

#### Parameters
* containerDefinitions (array) **required**
* family (string) **required**
* networkMode (string)
* placementConstraints (array)
* taskRoleArn (string)
* volumes (array)

### RunTask



```js
amazonaws_ecs.RunTask({
  "taskDefinition": ""
}, context)
```

#### Parameters
* cluster (string)
* count (integer)
* group (string)
* overrides (object) - The overrides associated with a task.
* placementConstraints (array)
* placementStrategy (array)
* startedBy (string)
* taskDefinition (string) **required**

### StartTask



```js
amazonaws_ecs.StartTask({
  "taskDefinition": "",
  "containerInstances": []
}, context)
```

#### Parameters
* cluster (string)
* containerInstances (array) **required**
* group (string)
* overrides (object) - The overrides associated with a task.
* startedBy (string)
* taskDefinition (string) **required**

### StopTask



```js
amazonaws_ecs.StopTask({
  "task": ""
}, context)
```

#### Parameters
* cluster (string)
* reason (string)
* task (string) **required**

### SubmitContainerStateChange



```js
amazonaws_ecs.SubmitContainerStateChange({}, context)
```

#### Parameters
* cluster (string)
* containerName (string)
* exitCode (integer)
* networkBindings (array)
* reason (string)
* status (string)
* task (string)

### SubmitTaskStateChange



```js
amazonaws_ecs.SubmitTaskStateChange({}, context)
```

#### Parameters
* cluster (string)
* reason (string)
* status (string)
* task (string)

### UpdateContainerAgent



```js
amazonaws_ecs.UpdateContainerAgent({
  "containerInstance": ""
}, context)
```

#### Parameters
* cluster (string)
* containerInstance (string) **required**

### UpdateContainerInstancesState



```js
amazonaws_ecs.UpdateContainerInstancesState({
  "containerInstances": [],
  "status": ""
}, context)
```

#### Parameters
* cluster (string)
* containerInstances (array) **required**
* status (string) **required**

### UpdateService



```js
amazonaws_ecs.UpdateService({
  "service": ""
}, context)
```

#### Parameters
* cluster (string)
* deploymentConfiguration (object) - Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
* desiredCount (integer)
* service (string) **required**
* taskDefinition (string)

