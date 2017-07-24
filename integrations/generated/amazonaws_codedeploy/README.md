# @datafire/amazonaws_codedeploy

Client library for AWS CodeDeploy

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_codedeploy
```

```js
let datafire = require('datafire');
let amazonaws_codedeploy = require('@datafire/amazonaws_codedeploy').actions;
let context = new datafire.Context();

amazonaws_codedeploy.AddTagsToOnPremisesInstances({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CodeDeploy</fullname> <p>AWS CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances or on-premises instances running in your own facility.</p> <p>You can deploy a nearly unlimited variety of application content, such as code, web and configuration files, executables, packages, scripts, multimedia files, and so on. AWS CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use AWS CodeDeploy.</p> <p>AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.</p> <p> <b>AWS CodeDeploy Components</b> </p> <p>Use the information in this guide to help you work with the following AWS CodeDeploy components:</p> <ul> <li> <p> <b>Application</b>: A name that uniquely identifies the application you want to deploy. AWS CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.</p> </li> <li> <p> <b>Deployment group</b>: A set of individual instances. A deployment group contains individually tagged instances, Amazon EC2 instances in Auto Scaling groups, or both. </p> </li> <li> <p> <b>Deployment configuration</b>: A set of deployment rules and deployment success and failure conditions used by AWS CodeDeploy during a deployment.</p> </li> <li> <p> <b>Deployment</b>: The process, and the components involved in the process, of installing content on one or more instances. </p> </li> <li> <p> <b>Application revisions</b>: An archive file containing source content—source code, web pages, executable files, and deployment scripts—along with an application specification file (AppSpec file). Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.</p> </li> </ul> <p>This guide also contains information to help you get details about the instances in your deployments and to make on-premises instances available for AWS CodeDeploy deployments.</p> <p> <b>AWS CodeDeploy Information Resources</b> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy User Guide</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/codedeploy/latest/APIReference/">AWS CodeDeploy API Reference Guide</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">AWS CLI Reference for AWS CodeDeploy</a> </p> </li> <li> <p> <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">AWS CodeDeploy Developer Forum</a> </p> </li> </ul>

## Actions
### AddTagsToOnPremisesInstances



```js
amazonaws_codedeploy.AddTagsToOnPremisesInstances({}, context)
```


### BatchGetApplicationRevisions



```js
amazonaws_codedeploy.BatchGetApplicationRevisions({}, context)
```


### BatchGetApplications



```js
amazonaws_codedeploy.BatchGetApplications({}, context)
```


### BatchGetDeploymentGroups



```js
amazonaws_codedeploy.BatchGetDeploymentGroups({}, context)
```


### BatchGetDeploymentInstances



```js
amazonaws_codedeploy.BatchGetDeploymentInstances({}, context)
```


### BatchGetDeployments



```js
amazonaws_codedeploy.BatchGetDeployments({}, context)
```


### BatchGetOnPremisesInstances



```js
amazonaws_codedeploy.BatchGetOnPremisesInstances({}, context)
```


### ContinueDeployment



```js
amazonaws_codedeploy.ContinueDeployment({}, context)
```


### CreateApplication



```js
amazonaws_codedeploy.CreateApplication({}, context)
```


### CreateDeployment



```js
amazonaws_codedeploy.CreateDeployment({}, context)
```


### CreateDeploymentConfig



```js
amazonaws_codedeploy.CreateDeploymentConfig({}, context)
```


### CreateDeploymentGroup



```js
amazonaws_codedeploy.CreateDeploymentGroup({}, context)
```


### DeleteApplication



```js
amazonaws_codedeploy.DeleteApplication({}, context)
```


### DeleteDeploymentConfig



```js
amazonaws_codedeploy.DeleteDeploymentConfig({}, context)
```


### DeleteDeploymentGroup



```js
amazonaws_codedeploy.DeleteDeploymentGroup({}, context)
```


### DeregisterOnPremisesInstance



```js
amazonaws_codedeploy.DeregisterOnPremisesInstance({}, context)
```


### GetApplication



```js
amazonaws_codedeploy.GetApplication({}, context)
```


### GetApplicationRevision



```js
amazonaws_codedeploy.GetApplicationRevision({}, context)
```


### GetDeployment



```js
amazonaws_codedeploy.GetDeployment({}, context)
```


### GetDeploymentConfig



```js
amazonaws_codedeploy.GetDeploymentConfig({}, context)
```


### GetDeploymentGroup



```js
amazonaws_codedeploy.GetDeploymentGroup({}, context)
```


### GetDeploymentInstance



```js
amazonaws_codedeploy.GetDeploymentInstance({}, context)
```


### GetOnPremisesInstance



```js
amazonaws_codedeploy.GetOnPremisesInstance({}, context)
```


### ListApplicationRevisions



```js
amazonaws_codedeploy.ListApplicationRevisions({}, context)
```

#### Parameters
* nextToken (string)

### ListApplications



```js
amazonaws_codedeploy.ListApplications({}, context)
```

#### Parameters
* nextToken (string)

### ListDeploymentConfigs



```js
amazonaws_codedeploy.ListDeploymentConfigs({}, context)
```

#### Parameters
* nextToken (string)

### ListDeploymentGroups



```js
amazonaws_codedeploy.ListDeploymentGroups({}, context)
```

#### Parameters
* nextToken (string)

### ListDeploymentInstances



```js
amazonaws_codedeploy.ListDeploymentInstances({}, context)
```

#### Parameters
* nextToken (string)

### ListDeployments



```js
amazonaws_codedeploy.ListDeployments({}, context)
```

#### Parameters
* nextToken (string)

### ListOnPremisesInstances



```js
amazonaws_codedeploy.ListOnPremisesInstances({}, context)
```


### RegisterApplicationRevision



```js
amazonaws_codedeploy.RegisterApplicationRevision({}, context)
```


### RegisterOnPremisesInstance



```js
amazonaws_codedeploy.RegisterOnPremisesInstance({}, context)
```


### RemoveTagsFromOnPremisesInstances



```js
amazonaws_codedeploy.RemoveTagsFromOnPremisesInstances({}, context)
```


### SkipWaitTimeForInstanceTermination



```js
amazonaws_codedeploy.SkipWaitTimeForInstanceTermination({}, context)
```


### StopDeployment



```js
amazonaws_codedeploy.StopDeployment({}, context)
```


### UpdateApplication



```js
amazonaws_codedeploy.UpdateApplication({}, context)
```


### UpdateDeploymentGroup



```js
amazonaws_codedeploy.UpdateDeploymentGroup({}, context)
```


