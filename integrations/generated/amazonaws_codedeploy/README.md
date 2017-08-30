# @datafire/amazonaws_codedeploy

Client library for AWS CodeDeploy

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_codedeploy
```

```js
let datafire = require('datafire');
let amazonaws_codedeploy = require('@datafire/amazonaws_codedeploy').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_codedeploy.AddTagsToOnPremisesInstances({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CodeDeploy</fullname> <p>AWS CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances or on-premises instances running in your own facility.</p> <p>You can deploy a nearly unlimited variety of application content, such as code, web and configuration files, executables, packages, scripts, multimedia files, and so on. AWS CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use AWS CodeDeploy.</p> <p>AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.</p> <p> <b>AWS CodeDeploy Components</b> </p> <p>Use the information in this guide to help you work with the following AWS CodeDeploy components:</p> <ul> <li> <p> <b>Application</b>: A name that uniquely identifies the application you want to deploy. AWS CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.</p> </li> <li> <p> <b>Deployment group</b>: A set of individual instances. A deployment group contains individually tagged instances, Amazon EC2 instances in Auto Scaling groups, or both. </p> </li> <li> <p> <b>Deployment configuration</b>: A set of deployment rules and deployment success and failure conditions used by AWS CodeDeploy during a deployment.</p> </li> <li> <p> <b>Deployment</b>: The process, and the components involved in the process, of installing content on one or more instances. </p> </li> <li> <p> <b>Application revisions</b>: An archive file containing source content—source code, web pages, executable files, and deployment scripts—along with an application specification file (AppSpec file). Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.</p> </li> </ul> <p>This guide also contains information to help you get details about the instances in your deployments and to make on-premises instances available for AWS CodeDeploy deployments.</p> <p> <b>AWS CodeDeploy Information Resources</b> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy User Guide</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/codedeploy/latest/APIReference/">AWS CodeDeploy API Reference Guide</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">AWS CLI Reference for AWS CodeDeploy</a> </p> </li> <li> <p> <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">AWS CodeDeploy Developer Forum</a> </p> </li> </ul>

## Actions
### AddTagsToOnPremisesInstances



```js
amazonaws_codedeploy.AddTagsToOnPremisesInstances({
  "tags": [],
  "instanceNames": []
}, context)
```

#### Parameters
* instanceNames (array) **required**
* tags (array) **required**

### BatchGetApplicationRevisions



```js
amazonaws_codedeploy.BatchGetApplicationRevisions({
  "applicationName": "",
  "revisions": []
}, context)
```

#### Parameters
* applicationName (string) **required**
* revisions (array) **required**

### BatchGetApplications



```js
amazonaws_codedeploy.BatchGetApplications({}, context)
```

#### Parameters
* applicationNames (array)

### BatchGetDeploymentGroups



```js
amazonaws_codedeploy.BatchGetDeploymentGroups({
  "applicationName": "",
  "deploymentGroupNames": []
}, context)
```

#### Parameters
* applicationName (string) **required**
* deploymentGroupNames (array) **required**

### BatchGetDeploymentInstances



```js
amazonaws_codedeploy.BatchGetDeploymentInstances({
  "deploymentId": "",
  "instanceIds": []
}, context)
```

#### Parameters
* deploymentId (string) **required**
* instanceIds (array) **required**

### BatchGetDeployments



```js
amazonaws_codedeploy.BatchGetDeployments({}, context)
```

#### Parameters
* deploymentIds (array)

### BatchGetOnPremisesInstances



```js
amazonaws_codedeploy.BatchGetOnPremisesInstances({}, context)
```

#### Parameters
* instanceNames (array)

### ContinueDeployment



```js
amazonaws_codedeploy.ContinueDeployment({}, context)
```

#### Parameters
* deploymentId (string)

### CreateApplication



```js
amazonaws_codedeploy.CreateApplication({
  "applicationName": ""
}, context)
```

#### Parameters
* applicationName (string) **required**

### CreateDeployment



```js
amazonaws_codedeploy.CreateDeployment({
  "applicationName": ""
}, context)
```

#### Parameters
* applicationName (string) **required**
* autoRollbackConfiguration (object) - Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment doesn't complete successfully.
* deploymentConfigName (string)
* deploymentGroupName (string)
* description (string)
* ignoreApplicationStopFailures (boolean)
* revision (object) - Information about the location of an application revision.
* targetInstances (object) - Information about the instances to be used in the replacement environment in a blue/green deployment.
* updateOutdatedInstancesOnly (boolean)

### CreateDeploymentConfig



```js
amazonaws_codedeploy.CreateDeploymentConfig({
  "deploymentConfigName": ""
}, context)
```

#### Parameters
* deploymentConfigName (string) **required**
* minimumHealthyHosts (object) - Information about minimum healthy instance.

### CreateDeploymentGroup



```js
amazonaws_codedeploy.CreateDeploymentGroup({
  "applicationName": "",
  "deploymentGroupName": "",
  "serviceRoleArn": ""
}, context)
```

#### Parameters
* alarmConfiguration (object) - Information about alarms associated with the deployment group.
* applicationName (string) **required**
* autoRollbackConfiguration (object) - Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment doesn't complete successfully.
* autoScalingGroups (array)
* blueGreenDeploymentConfiguration (object) - Information about blue/green deployment options for a deployment group.
* deploymentConfigName (string)
* deploymentGroupName (string) **required**
* deploymentStyle (object) - Information about the type of deployment, either standard or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
* ec2TagFilters (array)
* loadBalancerInfo (object) - Information about the load balancer used in a blue/green deployment.
* onPremisesInstanceTagFilters (array)
* serviceRoleArn (string) **required**
* triggerConfigurations (array)

### DeleteApplication



```js
amazonaws_codedeploy.DeleteApplication({
  "applicationName": ""
}, context)
```

#### Parameters
* applicationName (string) **required**

### DeleteDeploymentConfig



```js
amazonaws_codedeploy.DeleteDeploymentConfig({
  "deploymentConfigName": ""
}, context)
```

#### Parameters
* deploymentConfigName (string) **required**

### DeleteDeploymentGroup



```js
amazonaws_codedeploy.DeleteDeploymentGroup({
  "applicationName": "",
  "deploymentGroupName": ""
}, context)
```

#### Parameters
* applicationName (string) **required**
* deploymentGroupName (string) **required**

### DeregisterOnPremisesInstance



```js
amazonaws_codedeploy.DeregisterOnPremisesInstance({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**

### GetApplication



```js
amazonaws_codedeploy.GetApplication({
  "applicationName": ""
}, context)
```

#### Parameters
* applicationName (string) **required**

### GetApplicationRevision



```js
amazonaws_codedeploy.GetApplicationRevision({
  "applicationName": "",
  "revision": {}
}, context)
```

#### Parameters
* applicationName (string) **required**
* revision (object) **required** - Information about the location of an application revision.

### GetDeployment



```js
amazonaws_codedeploy.GetDeployment({
  "deploymentId": ""
}, context)
```

#### Parameters
* deploymentId (string) **required**

### GetDeploymentConfig



```js
amazonaws_codedeploy.GetDeploymentConfig({
  "deploymentConfigName": ""
}, context)
```

#### Parameters
* deploymentConfigName (string) **required**

### GetDeploymentGroup



```js
amazonaws_codedeploy.GetDeploymentGroup({
  "applicationName": "",
  "deploymentGroupName": ""
}, context)
```

#### Parameters
* applicationName (string) **required**
* deploymentGroupName (string) **required**

### GetDeploymentInstance



```js
amazonaws_codedeploy.GetDeploymentInstance({
  "deploymentId": "",
  "instanceId": ""
}, context)
```

#### Parameters
* deploymentId (string) **required**
* instanceId (string) **required**

### GetOnPremisesInstance



```js
amazonaws_codedeploy.GetOnPremisesInstance({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**

### ListApplicationRevisions



```js
amazonaws_codedeploy.ListApplicationRevisions({
  "applicationName": ""
}, context)
```

#### Parameters
* nextToken (string)
* applicationName (string) **required**
* deployed (string)
* nextToken (string)
* s3Bucket (string)
* s3KeyPrefix (string)
* sortBy (string)
* sortOrder (string)

### ListApplications



```js
amazonaws_codedeploy.ListApplications({}, context)
```

#### Parameters
* nextToken (string)
* nextToken (string)

### ListDeploymentConfigs



```js
amazonaws_codedeploy.ListDeploymentConfigs({}, context)
```

#### Parameters
* nextToken (string)
* nextToken (string)

### ListDeploymentGroups



```js
amazonaws_codedeploy.ListDeploymentGroups({
  "applicationName": ""
}, context)
```

#### Parameters
* nextToken (string)
* applicationName (string) **required**
* nextToken (string)

### ListDeploymentInstances



```js
amazonaws_codedeploy.ListDeploymentInstances({
  "deploymentId": ""
}, context)
```

#### Parameters
* nextToken (string)
* deploymentId (string) **required**
* instanceStatusFilter (array)
* instanceTypeFilter (array)
* nextToken (string)

### ListDeployments



```js
amazonaws_codedeploy.ListDeployments({}, context)
```

#### Parameters
* nextToken (string)
* applicationName (string)
* createTimeRange (object) - Information about a time range.
* deploymentGroupName (string)
* includeOnlyStatuses (array)
* nextToken (string)

### ListOnPremisesInstances



```js
amazonaws_codedeploy.ListOnPremisesInstances({}, context)
```

#### Parameters
* nextToken (string)
* registrationStatus (string)
* tagFilters (array)

### RegisterApplicationRevision



```js
amazonaws_codedeploy.RegisterApplicationRevision({
  "applicationName": "",
  "revision": {}
}, context)
```

#### Parameters
* applicationName (string) **required**
* description (string)
* revision (object) **required** - Information about the location of an application revision.

### RegisterOnPremisesInstance



```js
amazonaws_codedeploy.RegisterOnPremisesInstance({
  "instanceName": ""
}, context)
```

#### Parameters
* iamSessionArn (string)
* iamUserArn (string)
* instanceName (string) **required**

### RemoveTagsFromOnPremisesInstances



```js
amazonaws_codedeploy.RemoveTagsFromOnPremisesInstances({
  "tags": [],
  "instanceNames": []
}, context)
```

#### Parameters
* instanceNames (array) **required**
* tags (array) **required**

### SkipWaitTimeForInstanceTermination



```js
amazonaws_codedeploy.SkipWaitTimeForInstanceTermination({}, context)
```

#### Parameters
* deploymentId (string)

### StopDeployment



```js
amazonaws_codedeploy.StopDeployment({
  "deploymentId": ""
}, context)
```

#### Parameters
* autoRollbackEnabled (boolean)
* deploymentId (string) **required**

### UpdateApplication



```js
amazonaws_codedeploy.UpdateApplication({}, context)
```

#### Parameters
* applicationName (string)
* newApplicationName (string)

### UpdateDeploymentGroup



```js
amazonaws_codedeploy.UpdateDeploymentGroup({
  "applicationName": "",
  "currentDeploymentGroupName": ""
}, context)
```

#### Parameters
* alarmConfiguration (object) - Information about alarms associated with the deployment group.
* applicationName (string) **required**
* autoRollbackConfiguration (object) - Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment doesn't complete successfully.
* autoScalingGroups (array)
* blueGreenDeploymentConfiguration (object) - Information about blue/green deployment options for a deployment group.
* currentDeploymentGroupName (string) **required**
* deploymentConfigName (string)
* deploymentStyle (object) - Information about the type of deployment, either standard or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
* ec2TagFilters (array)
* loadBalancerInfo (object) - Information about the load balancer used in a blue/green deployment.
* newDeploymentGroupName (string)
* onPremisesInstanceTagFilters (array)
* serviceRoleArn (string)
* triggerConfigurations (array)

