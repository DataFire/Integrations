# @datafire/amazonaws_ecs

Client library for Amazon EC2 Container Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ecs
```

```js
let datafire = require('datafire');
let amazonaws_ecs = require('@datafire/amazonaws_ecs').actions;
let context = new datafire.Context();

amazonaws_ecs.CreateCluster({}, context).then(data => {
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

### CreateService



```js
amazonaws_ecs.CreateService({}, context)
```

#### Parameters

### DeleteAttributes



```js
amazonaws_ecs.DeleteAttributes({}, context)
```

#### Parameters

### DeleteCluster



```js
amazonaws_ecs.DeleteCluster({}, context)
```

#### Parameters

### DeleteService



```js
amazonaws_ecs.DeleteService({}, context)
```

#### Parameters

### DeregisterContainerInstance



```js
amazonaws_ecs.DeregisterContainerInstance({}, context)
```

#### Parameters

### DeregisterTaskDefinition



```js
amazonaws_ecs.DeregisterTaskDefinition({}, context)
```

#### Parameters

### DescribeClusters



```js
amazonaws_ecs.DescribeClusters({}, context)
```

#### Parameters

### DescribeContainerInstances



```js
amazonaws_ecs.DescribeContainerInstances({}, context)
```

#### Parameters

### DescribeServices



```js
amazonaws_ecs.DescribeServices({}, context)
```

#### Parameters

### DescribeTaskDefinition



```js
amazonaws_ecs.DescribeTaskDefinition({}, context)
```

#### Parameters

### DescribeTasks



```js
amazonaws_ecs.DescribeTasks({}, context)
```

#### Parameters

### DiscoverPollEndpoint



```js
amazonaws_ecs.DiscoverPollEndpoint({}, context)
```

#### Parameters

### ListAttributes



```js
amazonaws_ecs.ListAttributes({}, context)
```

#### Parameters

### ListClusters



```js
amazonaws_ecs.ListClusters({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ListContainerInstances



```js
amazonaws_ecs.ListContainerInstances({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ListServices



```js
amazonaws_ecs.ListServices({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ListTaskDefinitionFamilies



```js
amazonaws_ecs.ListTaskDefinitionFamilies({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ListTaskDefinitions



```js
amazonaws_ecs.ListTaskDefinitions({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ListTasks



```js
amazonaws_ecs.ListTasks({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### PutAttributes



```js
amazonaws_ecs.PutAttributes({}, context)
```

#### Parameters

### RegisterContainerInstance



```js
amazonaws_ecs.RegisterContainerInstance({}, context)
```

#### Parameters

### RegisterTaskDefinition



```js
amazonaws_ecs.RegisterTaskDefinition({}, context)
```

#### Parameters

### RunTask



```js
amazonaws_ecs.RunTask({}, context)
```

#### Parameters

### StartTask



```js
amazonaws_ecs.StartTask({}, context)
```

#### Parameters

### StopTask



```js
amazonaws_ecs.StopTask({}, context)
```

#### Parameters

### SubmitContainerStateChange



```js
amazonaws_ecs.SubmitContainerStateChange({}, context)
```

#### Parameters

### SubmitTaskStateChange



```js
amazonaws_ecs.SubmitTaskStateChange({}, context)
```

#### Parameters

### UpdateContainerAgent



```js
amazonaws_ecs.UpdateContainerAgent({}, context)
```

#### Parameters

### UpdateContainerInstancesState



```js
amazonaws_ecs.UpdateContainerInstancesState({}, context)
```

#### Parameters

### UpdateService



```js
amazonaws_ecs.UpdateService({}, context)
```

#### Parameters

