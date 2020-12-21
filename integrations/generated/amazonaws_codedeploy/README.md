# @datafire/amazonaws_codedeploy

Client library for AWS CodeDeploy

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codedeploy
```
```js
let amazonaws_codedeploy = require('@datafire/amazonaws_codedeploy').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CodeDeploy</fullname> <p>AWS CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, serverless AWS Lambda functions, or applications in an Amazon ECS service.</p> <p>You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, updated applications in an Amazon ECS service, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. AWS CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use AWS CodeDeploy.</p> <p>AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.</p> <p> <b>AWS CodeDeploy Components</b> </p> <p>Use the information in this guide to help you work with the following AWS CodeDeploy components:</p> <ul> <li> <p> <b>Application</b>: A name that uniquely identifies the application you want to deploy. AWS CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.</p> </li> <li> <p> <b>Deployment group</b>: A set of individual instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS service and network details. A Lambda deployment group specifies how to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production traffic to an updated containerized application. An EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment groups can specify optional trigger, alarm, and rollback settings.</p> </li> <li> <p> <b>Deployment configuration</b>: A set of deployment rules and deployment success and failure conditions used by AWS CodeDeploy during a deployment.</p> </li> <li> <p> <b>Deployment</b>: The process and the components used when updating a Lambda function, a containerized application in an Amazon ECS service, or of installing content on one or more instances. </p> </li> <li> <p> <b>Application revisions</b>: For an AWS Lambda deployment, this is an AppSpec file that specifies the Lambda function to be updated and one or more functions to validate deployment lifecycle events. For an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS task definition, container, and port where production traffic is rerouted. For an EC2/On-premises deployment, this is an archive file that contains source content—source code, webpages, executable files, and deployment scripts—along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.</p> </li> </ul> <p>This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for AWS CodeDeploy deployments, to get details about a Lambda function deployment, and to get details about Amazon ECS service deployments.</p> <p> <b>AWS CodeDeploy Information Resources</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy User Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">AWS CodeDeploy API Reference Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">AWS CLI Reference for AWS CodeDeploy</a> </p> </li> <li> <p> <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">AWS CodeDeploy Developer Forum</a> </p> </li> </ul>

## Actions

### AddTagsToOnPremisesInstances



```js
amazonaws_codedeploy.AddTagsToOnPremisesInstances({
  "tags": null,
  "instanceNames": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * instanceNames **required**
    * items [InstanceName](#instancename)

#### Output
*Output schema unknown*

### BatchGetApplicationRevisions



```js
amazonaws_codedeploy.BatchGetApplicationRevisions({
  "applicationName": null,
  "revisions": null
}, context)
```

#### Input
* input `object`
  * applicationName **required**
  * revisions **required**
    * items [RevisionLocation](#revisionlocation)

#### Output
* output [BatchGetApplicationRevisionsOutput](#batchgetapplicationrevisionsoutput)

### BatchGetApplications



```js
amazonaws_codedeploy.BatchGetApplications({
  "applicationNames": null
}, context)
```

#### Input
* input `object`
  * applicationNames **required**
    * items [ApplicationName](#applicationname)

#### Output
* output [BatchGetApplicationsOutput](#batchgetapplicationsoutput)

### BatchGetDeploymentGroups



```js
amazonaws_codedeploy.BatchGetDeploymentGroups({
  "applicationName": null,
  "deploymentGroupNames": null
}, context)
```

#### Input
* input `object`
  * applicationName **required**
  * deploymentGroupNames **required**
    * items [DeploymentGroupName](#deploymentgroupname)

#### Output
* output [BatchGetDeploymentGroupsOutput](#batchgetdeploymentgroupsoutput)

### BatchGetDeploymentInstances



```js
amazonaws_codedeploy.BatchGetDeploymentInstances({
  "deploymentId": null,
  "instanceIds": null
}, context)
```

#### Input
* input `object`
  * deploymentId **required**
  * instanceIds **required**
    * items [InstanceId](#instanceid)

#### Output
* output [BatchGetDeploymentInstancesOutput](#batchgetdeploymentinstancesoutput)

### BatchGetDeploymentTargets



```js
amazonaws_codedeploy.BatchGetDeploymentTargets({}, context)
```

#### Input
* input `object`
  * deploymentId
  * targetIds
    * items [TargetId](#targetid)

#### Output
* output [BatchGetDeploymentTargetsOutput](#batchgetdeploymenttargetsoutput)

### BatchGetDeployments



```js
amazonaws_codedeploy.BatchGetDeployments({
  "deploymentIds": null
}, context)
```

#### Input
* input `object`
  * deploymentIds **required**
    * items [DeploymentId](#deploymentid)

#### Output
* output [BatchGetDeploymentsOutput](#batchgetdeploymentsoutput)

### BatchGetOnPremisesInstances



```js
amazonaws_codedeploy.BatchGetOnPremisesInstances({
  "instanceNames": null
}, context)
```

#### Input
* input `object`
  * instanceNames **required**
    * items [InstanceName](#instancename)

#### Output
* output [BatchGetOnPremisesInstancesOutput](#batchgetonpremisesinstancesoutput)

### ContinueDeployment



```js
amazonaws_codedeploy.ContinueDeployment({}, context)
```

#### Input
* input `object`
  * deploymentId
  * deploymentWaitType

#### Output
*Output schema unknown*

### CreateApplication



```js
amazonaws_codedeploy.CreateApplication({
  "applicationName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * applicationName **required**
  * computePlatform

#### Output
* output [CreateApplicationOutput](#createapplicationoutput)

### CreateDeployment



```js
amazonaws_codedeploy.CreateDeployment({
  "applicationName": null
}, context)
```

#### Input
* input `object`
  * applicationName **required**
  * autoRollbackConfiguration
    * enabled
    * events
      * items [AutoRollbackEvent](#autorollbackevent)
  * deploymentConfigName
  * deploymentGroupName
  * description
  * fileExistsBehavior
  * ignoreApplicationStopFailures
  * revision
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256
  * targetInstances
    * autoScalingGroups
      * items [AutoScalingGroupName](#autoscalinggroupname)
    * ec2TagSet
      * ec2TagSetList
        * items [EC2TagFilterList](#ec2tagfilterlist)
    * tagFilters
      * items [EC2TagFilter](#ec2tagfilter)
  * updateOutdatedInstancesOnly

#### Output
* output [CreateDeploymentOutput](#createdeploymentoutput)

### CreateDeploymentConfig



```js
amazonaws_codedeploy.CreateDeploymentConfig({
  "deploymentConfigName": null
}, context)
```

#### Input
* input `object`
  * computePlatform
  * deploymentConfigName **required**
  * minimumHealthyHosts
    * type
    * value
  * trafficRoutingConfig
    * timeBasedCanary
      * canaryInterval
      * canaryPercentage
    * timeBasedLinear
      * linearInterval
      * linearPercentage
    * type

#### Output
* output [CreateDeploymentConfigOutput](#createdeploymentconfigoutput)

### CreateDeploymentGroup



```js
amazonaws_codedeploy.CreateDeploymentGroup({
  "applicationName": null,
  "deploymentGroupName": null,
  "serviceRoleArn": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * alarmConfiguration
    * alarms
      * items [Alarm](#alarm)
    * enabled
    * ignorePollAlarmFailure
  * applicationName **required**
  * autoRollbackConfiguration
    * enabled
    * events
      * items [AutoRollbackEvent](#autorollbackevent)
  * autoScalingGroups
    * items [AutoScalingGroupName](#autoscalinggroupname)
  * blueGreenDeploymentConfiguration
    * deploymentReadyOption
      * actionOnTimeout
      * waitTimeInMinutes
    * greenFleetProvisioningOption
      * action
    * terminateBlueInstancesOnDeploymentSuccess
      * action
      * terminationWaitTimeInMinutes
  * deploymentConfigName
  * deploymentGroupName **required**
  * deploymentStyle
    * deploymentOption
    * deploymentType
  * ec2TagFilters
    * items [EC2TagFilter](#ec2tagfilter)
  * ec2TagSet
    * ec2TagSetList
      * items [EC2TagFilterList](#ec2tagfilterlist)
  * ecsServices
    * items [ECSService](#ecsservice)
  * loadBalancerInfo
    * elbInfoList
      * items [ELBInfo](#elbinfo)
    * targetGroupInfoList
      * items [TargetGroupInfo](#targetgroupinfo)
    * targetGroupPairInfoList
      * items [TargetGroupPairInfo](#targetgrouppairinfo)
  * onPremisesInstanceTagFilters
    * items [TagFilter](#tagfilter)
  * onPremisesTagSet
    * onPremisesTagSetList
      * items [TagFilterList](#tagfilterlist)
  * serviceRoleArn **required**
  * triggerConfigurations
    * items [TriggerConfig](#triggerconfig)

#### Output
* output [CreateDeploymentGroupOutput](#createdeploymentgroupoutput)

### DeleteApplication



```js
amazonaws_codedeploy.DeleteApplication({
  "applicationName": null
}, context)
```

#### Input
* input `object`
  * applicationName **required**

#### Output
*Output schema unknown*

### DeleteDeploymentConfig



```js
amazonaws_codedeploy.DeleteDeploymentConfig({
  "deploymentConfigName": null
}, context)
```

#### Input
* input `object`
  * deploymentConfigName **required**

#### Output
*Output schema unknown*

### DeleteDeploymentGroup



```js
amazonaws_codedeploy.DeleteDeploymentGroup({
  "applicationName": null,
  "deploymentGroupName": null
}, context)
```

#### Input
* input `object`
  * applicationName **required**
  * deploymentGroupName **required**

#### Output
* output [DeleteDeploymentGroupOutput](#deletedeploymentgroupoutput)

### DeleteGitHubAccountToken



```js
amazonaws_codedeploy.DeleteGitHubAccountToken({}, context)
```

#### Input
* input `object`
  * tokenName

#### Output
* output [DeleteGitHubAccountTokenOutput](#deletegithubaccounttokenoutput)

### DeleteResourcesByExternalId



```js
amazonaws_codedeploy.DeleteResourcesByExternalId({}, context)
```

#### Input
* input `object`
  * externalId

#### Output
* output [DeleteResourcesByExternalIdOutput](#deleteresourcesbyexternalidoutput)

### DeregisterOnPremisesInstance



```js
amazonaws_codedeploy.DeregisterOnPremisesInstance({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**

#### Output
*Output schema unknown*

### GetApplication



```js
amazonaws_codedeploy.GetApplication({
  "applicationName": null
}, context)
```

#### Input
* input `object`
  * applicationName **required**

#### Output
* output [GetApplicationOutput](#getapplicationoutput)

### GetApplicationRevision



```js
amazonaws_codedeploy.GetApplicationRevision({
  "applicationName": null,
  "revision": null
}, context)
```

#### Input
* input `object`
  * applicationName **required**
  * revision **required**
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256

#### Output
* output [GetApplicationRevisionOutput](#getapplicationrevisionoutput)

### GetDeployment



```js
amazonaws_codedeploy.GetDeployment({
  "deploymentId": null
}, context)
```

#### Input
* input `object`
  * deploymentId **required**

#### Output
* output [GetDeploymentOutput](#getdeploymentoutput)

### GetDeploymentConfig



```js
amazonaws_codedeploy.GetDeploymentConfig({
  "deploymentConfigName": null
}, context)
```

#### Input
* input `object`
  * deploymentConfigName **required**

#### Output
* output [GetDeploymentConfigOutput](#getdeploymentconfigoutput)

### GetDeploymentGroup



```js
amazonaws_codedeploy.GetDeploymentGroup({
  "applicationName": null,
  "deploymentGroupName": null
}, context)
```

#### Input
* input `object`
  * applicationName **required**
  * deploymentGroupName **required**

#### Output
* output [GetDeploymentGroupOutput](#getdeploymentgroupoutput)

### GetDeploymentInstance



```js
amazonaws_codedeploy.GetDeploymentInstance({
  "deploymentId": null,
  "instanceId": null
}, context)
```

#### Input
* input `object`
  * deploymentId **required**
  * instanceId **required**

#### Output
* output [GetDeploymentInstanceOutput](#getdeploymentinstanceoutput)

### GetDeploymentTarget



```js
amazonaws_codedeploy.GetDeploymentTarget({}, context)
```

#### Input
* input `object`
  * deploymentId
  * targetId

#### Output
* output [GetDeploymentTargetOutput](#getdeploymenttargetoutput)

### GetOnPremisesInstance



```js
amazonaws_codedeploy.GetOnPremisesInstance({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**

#### Output
* output [GetOnPremisesInstanceOutput](#getonpremisesinstanceoutput)

### ListApplicationRevisions



```js
amazonaws_codedeploy.ListApplicationRevisions({
  "applicationName": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * applicationName **required**
  * deployed
  * nextToken
  * s3Bucket
  * s3KeyPrefix
  * sortBy
  * sortOrder

#### Output
* output [ListApplicationRevisionsOutput](#listapplicationrevisionsoutput)

### ListApplications



```js
amazonaws_codedeploy.ListApplications({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken

#### Output
* output [ListApplicationsOutput](#listapplicationsoutput)

### ListDeploymentConfigs



```js
amazonaws_codedeploy.ListDeploymentConfigs({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken

#### Output
* output [ListDeploymentConfigsOutput](#listdeploymentconfigsoutput)

### ListDeploymentGroups



```js
amazonaws_codedeploy.ListDeploymentGroups({
  "applicationName": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * applicationName **required**
  * nextToken

#### Output
* output [ListDeploymentGroupsOutput](#listdeploymentgroupsoutput)

### ListDeploymentInstances



```js
amazonaws_codedeploy.ListDeploymentInstances({
  "deploymentId": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * deploymentId **required**
  * instanceStatusFilter
    * items [InstanceStatus](#instancestatus)
  * instanceTypeFilter
    * items [InstanceType](#instancetype)
  * nextToken

#### Output
* output [ListDeploymentInstancesOutput](#listdeploymentinstancesoutput)

### ListDeploymentTargets



```js
amazonaws_codedeploy.ListDeploymentTargets({}, context)
```

#### Input
* input `object`
  * deploymentId
  * nextToken
  * targetFilters

#### Output
* output [ListDeploymentTargetsOutput](#listdeploymenttargetsoutput)

### ListDeployments



```js
amazonaws_codedeploy.ListDeployments({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * applicationName
  * createTimeRange
    * end
    * start
  * deploymentGroupName
  * externalId
  * includeOnlyStatuses
    * items [DeploymentStatus](#deploymentstatus)
  * nextToken

#### Output
* output [ListDeploymentsOutput](#listdeploymentsoutput)

### ListGitHubAccountTokenNames



```js
amazonaws_codedeploy.ListGitHubAccountTokenNames({}, context)
```

#### Input
* input `object`
  * nextToken

#### Output
* output [ListGitHubAccountTokenNamesOutput](#listgithubaccounttokennamesoutput)

### ListOnPremisesInstances



```js
amazonaws_codedeploy.ListOnPremisesInstances({}, context)
```

#### Input
* input `object`
  * nextToken
  * registrationStatus
  * tagFilters
    * items [TagFilter](#tagfilter)

#### Output
* output [ListOnPremisesInstancesOutput](#listonpremisesinstancesoutput)

### ListTagsForResource



```js
amazonaws_codedeploy.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### PutLifecycleEventHookExecutionStatus



```js
amazonaws_codedeploy.PutLifecycleEventHookExecutionStatus({}, context)
```

#### Input
* input `object`
  * deploymentId
  * lifecycleEventHookExecutionId
  * status

#### Output
* output [PutLifecycleEventHookExecutionStatusOutput](#putlifecycleeventhookexecutionstatusoutput)

### RegisterApplicationRevision



```js
amazonaws_codedeploy.RegisterApplicationRevision({
  "applicationName": null,
  "revision": null
}, context)
```

#### Input
* input `object`
  * applicationName **required**
  * description
  * revision **required**
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256

#### Output
*Output schema unknown*

### RegisterOnPremisesInstance



```js
amazonaws_codedeploy.RegisterOnPremisesInstance({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * iamSessionArn
  * iamUserArn
  * instanceName **required**

#### Output
*Output schema unknown*

### RemoveTagsFromOnPremisesInstances



```js
amazonaws_codedeploy.RemoveTagsFromOnPremisesInstances({
  "tags": null,
  "instanceNames": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * instanceNames **required**
    * items [InstanceName](#instancename)

#### Output
*Output schema unknown*

### SkipWaitTimeForInstanceTermination



```js
amazonaws_codedeploy.SkipWaitTimeForInstanceTermination({}, context)
```

#### Input
* input `object`
  * deploymentId

#### Output
*Output schema unknown*

### StopDeployment



```js
amazonaws_codedeploy.StopDeployment({
  "deploymentId": null
}, context)
```

#### Input
* input `object`
  * autoRollbackEnabled
  * deploymentId **required**

#### Output
* output [StopDeploymentOutput](#stopdeploymentoutput)

### TagResource



```js
amazonaws_codedeploy.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### UntagResource



```js
amazonaws_codedeploy.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [Key](#key)

#### Output
* output [UntagResourceOutput](#untagresourceoutput)

### UpdateApplication



```js
amazonaws_codedeploy.UpdateApplication({}, context)
```

#### Input
* input `object`
  * applicationName
  * newApplicationName

#### Output
*Output schema unknown*

### UpdateDeploymentGroup



```js
amazonaws_codedeploy.UpdateDeploymentGroup({
  "applicationName": null,
  "currentDeploymentGroupName": null
}, context)
```

#### Input
* input `object`
  * alarmConfiguration
    * alarms
      * items [Alarm](#alarm)
    * enabled
    * ignorePollAlarmFailure
  * applicationName **required**
  * autoRollbackConfiguration
    * enabled
    * events
      * items [AutoRollbackEvent](#autorollbackevent)
  * autoScalingGroups
    * items [AutoScalingGroupName](#autoscalinggroupname)
  * blueGreenDeploymentConfiguration
    * deploymentReadyOption
      * actionOnTimeout
      * waitTimeInMinutes
    * greenFleetProvisioningOption
      * action
    * terminateBlueInstancesOnDeploymentSuccess
      * action
      * terminationWaitTimeInMinutes
  * currentDeploymentGroupName **required**
  * deploymentConfigName
  * deploymentStyle
    * deploymentOption
    * deploymentType
  * ec2TagFilters
    * items [EC2TagFilter](#ec2tagfilter)
  * ec2TagSet
    * ec2TagSetList
      * items [EC2TagFilterList](#ec2tagfilterlist)
  * ecsServices
    * items [ECSService](#ecsservice)
  * loadBalancerInfo
    * elbInfoList
      * items [ELBInfo](#elbinfo)
    * targetGroupInfoList
      * items [TargetGroupInfo](#targetgroupinfo)
    * targetGroupPairInfoList
      * items [TargetGroupPairInfo](#targetgrouppairinfo)
  * newDeploymentGroupName
  * onPremisesInstanceTagFilters
    * items [TagFilter](#tagfilter)
  * onPremisesTagSet
    * onPremisesTagSetList
      * items [TagFilterList](#tagfilterlist)
  * serviceRoleArn
  * triggerConfigurations
    * items [TriggerConfig](#triggerconfig)

#### Output
* output [UpdateDeploymentGroupOutput](#updatedeploymentgroupoutput)



## Definitions

### AddTagsToOnPremisesInstancesInput
* AddTagsToOnPremisesInstancesInput `object`: Represents the input of, and adds tags to, an on-premises instance operation.
  * tags **required**
    * items [Tag](#tag)
  * instanceNames **required**
    * items [InstanceName](#instancename)

### AdditionalDeploymentStatusInfo
* AdditionalDeploymentStatusInfo `string`: AdditionalDeploymentStatusInfo is deprecated, use DeploymentStatusMessageList instead.

### Alarm
* Alarm `object`: Information about an alarm.
  * name

### AlarmConfiguration
* AlarmConfiguration `object`: Information about alarms associated with the deployment group.
  * alarms
    * items [Alarm](#alarm)
  * enabled
  * ignorePollAlarmFailure

### AlarmList
* AlarmList `array`
  * items [Alarm](#alarm)

### AlarmName
* AlarmName `string`

### AlarmsLimitExceededException


### AppSpecContent
* AppSpecContent `object`:  A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type. 
  * content
  * sha256

### ApplicationAlreadyExistsException


### ApplicationDoesNotExistException


### ApplicationId
* ApplicationId `string`

### ApplicationInfo
* ApplicationInfo `object`: Information about an application.
  * applicationId
  * applicationName
  * computePlatform
  * createTime
  * gitHubAccountName
  * linkedToGitHub

### ApplicationLimitExceededException


### ApplicationName
* ApplicationName `string`

### ApplicationNameRequiredException


### ApplicationRevisionSortBy
* ApplicationRevisionSortBy `string` (values: registerTime, firstUsedTime, lastUsedTime)

### ApplicationsInfoList
* ApplicationsInfoList `array`
  * items [ApplicationInfo](#applicationinfo)

### ApplicationsList
* ApplicationsList `array`
  * items [ApplicationName](#applicationname)

### Arn
* Arn `string`

### ArnNotSupportedException


### AutoRollbackConfiguration
* AutoRollbackConfiguration `object`: Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.
  * enabled
  * events
    * items [AutoRollbackEvent](#autorollbackevent)

### AutoRollbackEvent
* AutoRollbackEvent `string` (values: DEPLOYMENT_FAILURE, DEPLOYMENT_STOP_ON_ALARM, DEPLOYMENT_STOP_ON_REQUEST)

### AutoRollbackEventsList
* AutoRollbackEventsList `array`
  * items [AutoRollbackEvent](#autorollbackevent)

### AutoScalingGroup
* AutoScalingGroup `object`: Information about an Auto Scaling group.
  * hook
  * name

### AutoScalingGroupHook
* AutoScalingGroupHook `string`

### AutoScalingGroupList
* AutoScalingGroupList `array`
  * items [AutoScalingGroup](#autoscalinggroup)

### AutoScalingGroupName
* AutoScalingGroupName `string`

### AutoScalingGroupNameList
* AutoScalingGroupNameList `array`
  * items [AutoScalingGroupName](#autoscalinggroupname)

### BatchGetApplicationRevisionsInput
* BatchGetApplicationRevisionsInput `object`: Represents the input of a <code>BatchGetApplicationRevisions</code> operation.
  * applicationName **required**
  * revisions **required**
    * items [RevisionLocation](#revisionlocation)

### BatchGetApplicationRevisionsOutput
* BatchGetApplicationRevisionsOutput `object`: Represents the output of a <code>BatchGetApplicationRevisions</code> operation.
  * applicationName
  * errorMessage
  * revisions
    * items [RevisionInfo](#revisioninfo)

### BatchGetApplicationsInput
* BatchGetApplicationsInput `object`: Represents the input of a <code>BatchGetApplications</code> operation.
  * applicationNames **required**
    * items [ApplicationName](#applicationname)

### BatchGetApplicationsOutput
* BatchGetApplicationsOutput `object`: Represents the output of a <code>BatchGetApplications</code> operation.
  * applicationsInfo
    * items [ApplicationInfo](#applicationinfo)

### BatchGetDeploymentGroupsInput
* BatchGetDeploymentGroupsInput `object`: Represents the input of a <code>BatchGetDeploymentGroups</code> operation.
  * applicationName **required**
  * deploymentGroupNames **required**
    * items [DeploymentGroupName](#deploymentgroupname)

### BatchGetDeploymentGroupsOutput
* BatchGetDeploymentGroupsOutput `object`: Represents the output of a <code>BatchGetDeploymentGroups</code> operation.
  * deploymentGroupsInfo
    * items [DeploymentGroupInfo](#deploymentgroupinfo)
  * errorMessage

### BatchGetDeploymentInstancesInput
* BatchGetDeploymentInstancesInput `object`:  Represents the input of a <code>BatchGetDeploymentInstances</code> operation. 
  * deploymentId **required**
  * instanceIds **required**
    * items [InstanceId](#instanceid)

### BatchGetDeploymentInstancesOutput
* BatchGetDeploymentInstancesOutput `object`: Represents the output of a <code>BatchGetDeploymentInstances</code> operation.
  * errorMessage
  * instancesSummary
    * items [InstanceSummary](#instancesummary)

### BatchGetDeploymentTargetsInput
* BatchGetDeploymentTargetsInput `object`
  * deploymentId
  * targetIds
    * items [TargetId](#targetid)

### BatchGetDeploymentTargetsOutput
* BatchGetDeploymentTargetsOutput `object`
  * deploymentTargets
    * items [DeploymentTarget](#deploymenttarget)

### BatchGetDeploymentsInput
* BatchGetDeploymentsInput `object`:  Represents the input of a <code>BatchGetDeployments</code> operation. 
  * deploymentIds **required**
    * items [DeploymentId](#deploymentid)

### BatchGetDeploymentsOutput
* BatchGetDeploymentsOutput `object`:  Represents the output of a <code>BatchGetDeployments</code> operation. 
  * deploymentsInfo
    * items [DeploymentInfo](#deploymentinfo)

### BatchGetOnPremisesInstancesInput
* BatchGetOnPremisesInstancesInput `object`: Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.
  * instanceNames **required**
    * items [InstanceName](#instancename)

### BatchGetOnPremisesInstancesOutput
* BatchGetOnPremisesInstancesOutput `object`: Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.
  * instanceInfos
    * items [InstanceInfo](#instanceinfo)

### BatchLimitExceededException


### BlueGreenDeploymentConfiguration
* BlueGreenDeploymentConfiguration `object`: Information about blue/green deployment options for a deployment group.
  * deploymentReadyOption
    * actionOnTimeout
    * waitTimeInMinutes
  * greenFleetProvisioningOption
    * action
  * terminateBlueInstancesOnDeploymentSuccess
    * action
    * terminationWaitTimeInMinutes

### BlueInstanceTerminationOption
* BlueInstanceTerminationOption `object`: Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments. 
  * action
  * terminationWaitTimeInMinutes

### Boolean
* Boolean `boolean`

### BucketNameFilterRequiredException


### BundleType
* BundleType `string` (values: tar, tgz, zip, YAML, JSON)

### CloudFormationResourceType
* CloudFormationResourceType `string`

### CloudFormationTarget
* CloudFormationTarget `object`:  Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
  * deploymentId
  * lastUpdatedAt
  * lifecycleEvents
    * items [LifecycleEvent](#lifecycleevent)
  * resourceType
  * status
  * targetId
  * targetVersionWeight

### CommitId
* CommitId `string`

### ComputePlatform
* ComputePlatform `string` (values: Server, Lambda, ECS)

### ContinueDeploymentInput
* ContinueDeploymentInput `object`
  * deploymentId
  * deploymentWaitType

### CreateApplicationInput
* CreateApplicationInput `object`: Represents the input of a <code>CreateApplication</code> operation.
  * tags
    * items [Tag](#tag)
  * applicationName **required**
  * computePlatform

### CreateApplicationOutput
* CreateApplicationOutput `object`: Represents the output of a <code>CreateApplication</code> operation.
  * applicationId

### CreateDeploymentConfigInput
* CreateDeploymentConfigInput `object`: Represents the input of a <code>CreateDeploymentConfig</code> operation.
  * computePlatform
  * deploymentConfigName **required**
  * minimumHealthyHosts
    * type
    * value
  * trafficRoutingConfig
    * timeBasedCanary
      * canaryInterval
      * canaryPercentage
    * timeBasedLinear
      * linearInterval
      * linearPercentage
    * type

### CreateDeploymentConfigOutput
* CreateDeploymentConfigOutput `object`: Represents the output of a <code>CreateDeploymentConfig</code> operation.
  * deploymentConfigId

### CreateDeploymentGroupInput
* CreateDeploymentGroupInput `object`: Represents the input of a <code>CreateDeploymentGroup</code> operation.
  * tags
    * items [Tag](#tag)
  * alarmConfiguration
    * alarms
      * items [Alarm](#alarm)
    * enabled
    * ignorePollAlarmFailure
  * applicationName **required**
  * autoRollbackConfiguration
    * enabled
    * events
      * items [AutoRollbackEvent](#autorollbackevent)
  * autoScalingGroups
    * items [AutoScalingGroupName](#autoscalinggroupname)
  * blueGreenDeploymentConfiguration
    * deploymentReadyOption
      * actionOnTimeout
      * waitTimeInMinutes
    * greenFleetProvisioningOption
      * action
    * terminateBlueInstancesOnDeploymentSuccess
      * action
      * terminationWaitTimeInMinutes
  * deploymentConfigName
  * deploymentGroupName **required**
  * deploymentStyle
    * deploymentOption
    * deploymentType
  * ec2TagFilters
    * items [EC2TagFilter](#ec2tagfilter)
  * ec2TagSet
    * ec2TagSetList
      * items [EC2TagFilterList](#ec2tagfilterlist)
  * ecsServices
    * items [ECSService](#ecsservice)
  * loadBalancerInfo
    * elbInfoList
      * items [ELBInfo](#elbinfo)
    * targetGroupInfoList
      * items [TargetGroupInfo](#targetgroupinfo)
    * targetGroupPairInfoList
      * items [TargetGroupPairInfo](#targetgrouppairinfo)
  * onPremisesInstanceTagFilters
    * items [TagFilter](#tagfilter)
  * onPremisesTagSet
    * onPremisesTagSetList
      * items [TagFilterList](#tagfilterlist)
  * serviceRoleArn **required**
  * triggerConfigurations
    * items [TriggerConfig](#triggerconfig)

### CreateDeploymentGroupOutput
* CreateDeploymentGroupOutput `object`: Represents the output of a <code>CreateDeploymentGroup</code> operation.
  * deploymentGroupId

### CreateDeploymentInput
* CreateDeploymentInput `object`: Represents the input of a <code>CreateDeployment</code> operation.
  * applicationName **required**
  * autoRollbackConfiguration
    * enabled
    * events
      * items [AutoRollbackEvent](#autorollbackevent)
  * deploymentConfigName
  * deploymentGroupName
  * description
  * fileExistsBehavior
  * ignoreApplicationStopFailures
  * revision
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256
  * targetInstances
    * autoScalingGroups
      * items [AutoScalingGroupName](#autoscalinggroupname)
    * ec2TagSet
      * ec2TagSetList
        * items [EC2TagFilterList](#ec2tagfilterlist)
    * tagFilters
      * items [EC2TagFilter](#ec2tagfilter)
  * updateOutdatedInstancesOnly

### CreateDeploymentOutput
* CreateDeploymentOutput `object`:  Represents the output of a <code>CreateDeployment</code> operation. 
  * deploymentId

### DeleteApplicationInput
* DeleteApplicationInput `object`: Represents the input of a <code>DeleteApplication</code> operation.
  * applicationName **required**

### DeleteDeploymentConfigInput
* DeleteDeploymentConfigInput `object`: Represents the input of a <code>DeleteDeploymentConfig</code> operation.
  * deploymentConfigName **required**

### DeleteDeploymentGroupInput
* DeleteDeploymentGroupInput `object`: Represents the input of a <code>DeleteDeploymentGroup</code> operation.
  * applicationName **required**
  * deploymentGroupName **required**

### DeleteDeploymentGroupOutput
* DeleteDeploymentGroupOutput `object`: Represents the output of a <code>DeleteDeploymentGroup</code> operation.
  * hooksNotCleanedUp
    * items [AutoScalingGroup](#autoscalinggroup)

### DeleteGitHubAccountTokenInput
* DeleteGitHubAccountTokenInput `object`: Represents the input of a <code>DeleteGitHubAccount</code> operation.
  * tokenName

### DeleteGitHubAccountTokenOutput
* DeleteGitHubAccountTokenOutput `object`: Represents the output of a <code>DeleteGitHubAccountToken</code> operation.
  * tokenName

### DeleteResourcesByExternalIdInput
* DeleteResourcesByExternalIdInput `object`
  * externalId

### DeleteResourcesByExternalIdOutput
* DeleteResourcesByExternalIdOutput `object`

### DeploymentAlreadyCompletedException


### DeploymentConfigAlreadyExistsException


### DeploymentConfigDoesNotExistException


### DeploymentConfigId
* DeploymentConfigId `string`

### DeploymentConfigInUseException


### DeploymentConfigInfo
* DeploymentConfigInfo `object`: Information about a deployment configuration.
  * computePlatform
  * createTime
  * deploymentConfigId
  * deploymentConfigName
  * minimumHealthyHosts
    * type
    * value
  * trafficRoutingConfig
    * timeBasedCanary
      * canaryInterval
      * canaryPercentage
    * timeBasedLinear
      * linearInterval
      * linearPercentage
    * type

### DeploymentConfigLimitExceededException


### DeploymentConfigName
* DeploymentConfigName `string`

### DeploymentConfigNameRequiredException


### DeploymentConfigsList
* DeploymentConfigsList `array`
  * items [DeploymentConfigName](#deploymentconfigname)

### DeploymentCreator
* DeploymentCreator `string` (values: user, autoscaling, codeDeployRollback, CodeDeploy, CloudFormation, CloudFormationRollback)

### DeploymentDoesNotExistException


### DeploymentGroupAlreadyExistsException


### DeploymentGroupDoesNotExistException


### DeploymentGroupId
* DeploymentGroupId `string`

### DeploymentGroupInfo
* DeploymentGroupInfo `object`: Information about a deployment group.
  * alarmConfiguration
    * alarms
      * items [Alarm](#alarm)
    * enabled
    * ignorePollAlarmFailure
  * applicationName
  * autoRollbackConfiguration
    * enabled
    * events
      * items [AutoRollbackEvent](#autorollbackevent)
  * autoScalingGroups
    * items [AutoScalingGroup](#autoscalinggroup)
  * blueGreenDeploymentConfiguration
    * deploymentReadyOption
      * actionOnTimeout
      * waitTimeInMinutes
    * greenFleetProvisioningOption
      * action
    * terminateBlueInstancesOnDeploymentSuccess
      * action
      * terminationWaitTimeInMinutes
  * computePlatform
  * deploymentConfigName
  * deploymentGroupId
  * deploymentGroupName
  * deploymentStyle
    * deploymentOption
    * deploymentType
  * ec2TagFilters
    * items [EC2TagFilter](#ec2tagfilter)
  * ec2TagSet
    * ec2TagSetList
      * items [EC2TagFilterList](#ec2tagfilterlist)
  * ecsServices
    * items [ECSService](#ecsservice)
  * lastAttemptedDeployment
    * createTime
    * deploymentId
    * endTime
    * status
  * lastSuccessfulDeployment
    * createTime
    * deploymentId
    * endTime
    * status
  * loadBalancerInfo
    * elbInfoList
      * items [ELBInfo](#elbinfo)
    * targetGroupInfoList
      * items [TargetGroupInfo](#targetgroupinfo)
    * targetGroupPairInfoList
      * items [TargetGroupPairInfo](#targetgrouppairinfo)
  * onPremisesInstanceTagFilters
    * items [TagFilter](#tagfilter)
  * onPremisesTagSet
    * onPremisesTagSetList
      * items [TagFilterList](#tagfilterlist)
  * serviceRoleArn
  * targetRevision
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256
  * triggerConfigurations
    * items [TriggerConfig](#triggerconfig)

### DeploymentGroupInfoList
* DeploymentGroupInfoList `array`
  * items [DeploymentGroupInfo](#deploymentgroupinfo)

### DeploymentGroupLimitExceededException


### DeploymentGroupName
* DeploymentGroupName `string`

### DeploymentGroupNameRequiredException


### DeploymentGroupsList
* DeploymentGroupsList `array`
  * items [DeploymentGroupName](#deploymentgroupname)

### DeploymentId
* DeploymentId `string`

### DeploymentIdRequiredException


### DeploymentInfo
* DeploymentInfo `object`: Information about a deployment.
  * additionalDeploymentStatusInfo
  * applicationName
  * autoRollbackConfiguration
    * enabled
    * events
      * items [AutoRollbackEvent](#autorollbackevent)
  * blueGreenDeploymentConfiguration
    * deploymentReadyOption
      * actionOnTimeout
      * waitTimeInMinutes
    * greenFleetProvisioningOption
      * action
    * terminateBlueInstancesOnDeploymentSuccess
      * action
      * terminationWaitTimeInMinutes
  * completeTime
  * computePlatform
  * createTime
  * creator
  * deploymentConfigName
  * deploymentGroupName
  * deploymentId
  * deploymentOverview
    * Failed
    * InProgress
    * Pending
    * Ready
    * Skipped
    * Succeeded
  * deploymentStatusMessages
    * items [ErrorMessage](#errormessage)
  * deploymentStyle
    * deploymentOption
    * deploymentType
  * description
  * errorInformation
    * code
    * message
  * externalId
  * fileExistsBehavior
  * ignoreApplicationStopFailures
  * instanceTerminationWaitTimeStarted
  * loadBalancerInfo
    * elbInfoList
      * items [ELBInfo](#elbinfo)
    * targetGroupInfoList
      * items [TargetGroupInfo](#targetgroupinfo)
    * targetGroupPairInfoList
      * items [TargetGroupPairInfo](#targetgrouppairinfo)
  * previousRevision
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256
  * revision
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256
  * rollbackInfo
    * rollbackDeploymentId
    * rollbackMessage
    * rollbackTriggeringDeploymentId
  * startTime
  * status
  * targetInstances
    * autoScalingGroups
      * items [AutoScalingGroupName](#autoscalinggroupname)
    * ec2TagSet
      * ec2TagSetList
        * items [EC2TagFilterList](#ec2tagfilterlist)
    * tagFilters
      * items [EC2TagFilter](#ec2tagfilter)
  * updateOutdatedInstancesOnly

### DeploymentIsNotInReadyStateException


### DeploymentLimitExceededException


### DeploymentNotStartedException


### DeploymentOption
* DeploymentOption `string` (values: WITH_TRAFFIC_CONTROL, WITHOUT_TRAFFIC_CONTROL)

### DeploymentOverview
* DeploymentOverview `object`: Information about the deployment status of the instances in the deployment.
  * Failed
  * InProgress
  * Pending
  * Ready
  * Skipped
  * Succeeded

### DeploymentReadyAction
* DeploymentReadyAction `string` (values: CONTINUE_DEPLOYMENT, STOP_DEPLOYMENT)

### DeploymentReadyOption
* DeploymentReadyOption `object`: Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
  * actionOnTimeout
  * waitTimeInMinutes

### DeploymentStatus
* DeploymentStatus `string` (values: Created, Queued, InProgress, Baking, Succeeded, Failed, Stopped, Ready)

### DeploymentStatusList
* DeploymentStatusList `array`
  * items [DeploymentStatus](#deploymentstatus)

### DeploymentStatusMessageList
* DeploymentStatusMessageList `array`
  * items [ErrorMessage](#errormessage)

### DeploymentStyle
* DeploymentStyle `object`: Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
  * deploymentOption
  * deploymentType

### DeploymentTarget
* DeploymentTarget `object`:  Information about the deployment target. 
  * cloudFormationTarget [CloudFormationTarget](#cloudformationtarget)
  * deploymentTargetType
  * ecsTarget
    * deploymentId
    * lastUpdatedAt
    * lifecycleEvents
      * items [LifecycleEvent](#lifecycleevent)
    * status
    * targetArn
    * targetId
    * taskSetsInfo
      * items [ECSTaskSet](#ecstaskset)
  * instanceTarget
    * deploymentId
    * instanceLabel
    * lastUpdatedAt
    * lifecycleEvents
      * items [LifecycleEvent](#lifecycleevent)
    * status
    * targetArn
    * targetId
  * lambdaTarget
    * deploymentId
    * lambdaFunctionInfo
      * currentVersion
      * functionAlias
      * functionName
      * targetVersion
      * targetVersionWeight
    * lastUpdatedAt
    * lifecycleEvents
      * items [LifecycleEvent](#lifecycleevent)
    * status
    * targetArn
    * targetId

### DeploymentTargetDoesNotExistException


### DeploymentTargetIdRequiredException


### DeploymentTargetList
* DeploymentTargetList `array`
  * items [DeploymentTarget](#deploymenttarget)

### DeploymentTargetListSizeExceededException


### DeploymentTargetType
* DeploymentTargetType `string` (values: InstanceTarget, LambdaTarget, ECSTarget, CloudFormationTarget)

### DeploymentType
* DeploymentType `string` (values: IN_PLACE, BLUE_GREEN)

### DeploymentWaitType
* DeploymentWaitType `string` (values: READY_WAIT, TERMINATION_WAIT)

### DeploymentsInfoList
* DeploymentsInfoList `array`
  * items [DeploymentInfo](#deploymentinfo)

### DeploymentsList
* DeploymentsList `array`
  * items [DeploymentId](#deploymentid)

### DeregisterOnPremisesInstanceInput
* DeregisterOnPremisesInstanceInput `object`: Represents the input of a <code>DeregisterOnPremisesInstance</code> operation.
  * instanceName **required**

### Description
* Description `string`

### DescriptionTooLongException


### Diagnostics
* Diagnostics `object`: Diagnostic information about executable scripts that are part of a deployment.
  * errorCode
  * logTail
  * message
  * scriptName

### Duration
* Duration `integer`

### EC2TagFilter
* EC2TagFilter `object`: Information about an EC2 tag filter.
  * Key
  * Type
  * Value

### EC2TagFilterList
* EC2TagFilterList `array`
  * items [EC2TagFilter](#ec2tagfilter)

### EC2TagFilterType
* EC2TagFilterType `string` (values: KEY_ONLY, VALUE_ONLY, KEY_AND_VALUE)

### EC2TagSet
* EC2TagSet `object`: Information about groups of EC2 instance tags.
  * ec2TagSetList
    * items [EC2TagFilterList](#ec2tagfilterlist)

### EC2TagSetList
* EC2TagSetList `array`
  * items [EC2TagFilterList](#ec2tagfilterlist)

### ECSClusterName
* ECSClusterName `string`

### ECSService
* ECSService `object`:  Contains the service and cluster names used to identify an Amazon ECS deployment's target. 
  * clusterName
  * serviceName

### ECSServiceList
* ECSServiceList `array`
  * items [ECSService](#ecsservice)

### ECSServiceMappingLimitExceededException


### ECSServiceName
* ECSServiceName `string`

### ECSTarget
* ECSTarget `object`:  Information about the target of an Amazon ECS deployment. 
  * deploymentId
  * lastUpdatedAt
  * lifecycleEvents
    * items [LifecycleEvent](#lifecycleevent)
  * status
  * targetArn
  * targetId
  * taskSetsInfo
    * items [ECSTaskSet](#ecstaskset)

### ECSTaskSet
* ECSTaskSet `object`:  Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set. 
  * desiredCount
  * identifer
  * pendingCount
  * runningCount
  * status
  * targetGroup
    * name
  * taskSetLabel
  * trafficWeight

### ECSTaskSetCount
* ECSTaskSetCount `integer`

### ECSTaskSetIdentifier
* ECSTaskSetIdentifier `string`

### ECSTaskSetList
* ECSTaskSetList `array`
  * items [ECSTaskSet](#ecstaskset)

### ECSTaskSetStatus
* ECSTaskSetStatus `string`

### ELBInfo
* ELBInfo `object`: Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer.
  * name

### ELBInfoList
* ELBInfoList `array`
  * items [ELBInfo](#elbinfo)

### ELBName
* ELBName `string`

### ETag
* ETag `string`

### ErrorCode
* ErrorCode `string` (values: AGENT_ISSUE, ALARM_ACTIVE, APPLICATION_MISSING, AUTOSCALING_VALIDATION_ERROR, AUTO_SCALING_CONFIGURATION, AUTO_SCALING_IAM_ROLE_PERMISSIONS, CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND, CUSTOMER_APPLICATION_UNHEALTHY, DEPLOYMENT_GROUP_MISSING, ECS_UPDATE_ERROR, ELASTIC_LOAD_BALANCING_INVALID, ELB_INVALID_INSTANCE, HEALTH_CONSTRAINTS, HEALTH_CONSTRAINTS_INVALID, HOOK_EXECUTION_FAILURE, IAM_ROLE_MISSING, IAM_ROLE_PERMISSIONS, INTERNAL_ERROR, INVALID_ECS_SERVICE, INVALID_LAMBDA_CONFIGURATION, INVALID_LAMBDA_FUNCTION, INVALID_REVISION, MANUAL_STOP, MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION, MISSING_ELB_INFORMATION, MISSING_GITHUB_TOKEN, NO_EC2_SUBSCRIPTION, NO_INSTANCES, OVER_MAX_INSTANCES, RESOURCE_LIMIT_EXCEEDED, REVISION_MISSING, THROTTLED, TIMEOUT, CLOUDFORMATION_STACK_FAILURE)

### ErrorInformation
* ErrorInformation `object`: Information about a deployment error.
  * code
  * message

### ErrorMessage
* ErrorMessage `string`

### ExternalId
* ExternalId `string`

### FileExistsBehavior
* FileExistsBehavior `string` (values: DISALLOW, OVERWRITE, RETAIN)

### FilterValue
* FilterValue `string`

### FilterValueList
* FilterValueList `array`
  * items [FilterValue](#filtervalue)

### GenericRevisionInfo
* GenericRevisionInfo `object`: Information about an application revision.
  * deploymentGroups
    * items [DeploymentGroupName](#deploymentgroupname)
  * description
  * firstUsedTime
  * lastUsedTime
  * registerTime

### GetApplicationInput
* GetApplicationInput `object`: Represents the input of a <code>GetApplication</code> operation.
  * applicationName **required**

### GetApplicationOutput
* GetApplicationOutput `object`: Represents the output of a <code>GetApplication</code> operation.
  * application
    * applicationId
    * applicationName
    * computePlatform
    * createTime
    * gitHubAccountName
    * linkedToGitHub

### GetApplicationRevisionInput
* GetApplicationRevisionInput `object`: Represents the input of a <code>GetApplicationRevision</code> operation.
  * applicationName **required**
  * revision **required**
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256

### GetApplicationRevisionOutput
* GetApplicationRevisionOutput `object`: Represents the output of a <code>GetApplicationRevision</code> operation.
  * applicationName
  * revision
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256
  * revisionInfo
    * deploymentGroups
      * items [DeploymentGroupName](#deploymentgroupname)
    * description
    * firstUsedTime
    * lastUsedTime
    * registerTime

### GetDeploymentConfigInput
* GetDeploymentConfigInput `object`: Represents the input of a <code>GetDeploymentConfig</code> operation.
  * deploymentConfigName **required**

### GetDeploymentConfigOutput
* GetDeploymentConfigOutput `object`: Represents the output of a <code>GetDeploymentConfig</code> operation.
  * deploymentConfigInfo
    * computePlatform
    * createTime
    * deploymentConfigId
    * deploymentConfigName
    * minimumHealthyHosts
      * type
      * value
    * trafficRoutingConfig
      * timeBasedCanary
        * canaryInterval
        * canaryPercentage
      * timeBasedLinear
        * linearInterval
        * linearPercentage
      * type

### GetDeploymentGroupInput
* GetDeploymentGroupInput `object`: Represents the input of a <code>GetDeploymentGroup</code> operation.
  * applicationName **required**
  * deploymentGroupName **required**

### GetDeploymentGroupOutput
* GetDeploymentGroupOutput `object`: Represents the output of a <code>GetDeploymentGroup</code> operation.
  * deploymentGroupInfo
    * alarmConfiguration
      * alarms
        * items [Alarm](#alarm)
      * enabled
      * ignorePollAlarmFailure
    * applicationName
    * autoRollbackConfiguration
      * enabled
      * events
        * items [AutoRollbackEvent](#autorollbackevent)
    * autoScalingGroups
      * items [AutoScalingGroup](#autoscalinggroup)
    * blueGreenDeploymentConfiguration
      * deploymentReadyOption
        * actionOnTimeout
        * waitTimeInMinutes
      * greenFleetProvisioningOption
        * action
      * terminateBlueInstancesOnDeploymentSuccess
        * action
        * terminationWaitTimeInMinutes
    * computePlatform
    * deploymentConfigName
    * deploymentGroupId
    * deploymentGroupName
    * deploymentStyle
      * deploymentOption
      * deploymentType
    * ec2TagFilters
      * items [EC2TagFilter](#ec2tagfilter)
    * ec2TagSet
      * ec2TagSetList
        * items [EC2TagFilterList](#ec2tagfilterlist)
    * ecsServices
      * items [ECSService](#ecsservice)
    * lastAttemptedDeployment
      * createTime
      * deploymentId
      * endTime
      * status
    * lastSuccessfulDeployment
      * createTime
      * deploymentId
      * endTime
      * status
    * loadBalancerInfo
      * elbInfoList
        * items [ELBInfo](#elbinfo)
      * targetGroupInfoList
        * items [TargetGroupInfo](#targetgroupinfo)
      * targetGroupPairInfoList
        * items [TargetGroupPairInfo](#targetgrouppairinfo)
    * onPremisesInstanceTagFilters
      * items [TagFilter](#tagfilter)
    * onPremisesTagSet
      * onPremisesTagSetList
        * items [TagFilterList](#tagfilterlist)
    * serviceRoleArn
    * targetRevision
      * appSpecContent
        * content
        * sha256
      * gitHubLocation
        * commitId
        * repository
      * revisionType
      * s3Location
        * bucket
        * bundleType
        * eTag
        * key
        * version
      * string
        * content
        * sha256
    * triggerConfigurations
      * items [TriggerConfig](#triggerconfig)

### GetDeploymentInput
* GetDeploymentInput `object`: Represents the input of a <code>GetDeployment</code> operation.
  * deploymentId **required**

### GetDeploymentInstanceInput
* GetDeploymentInstanceInput `object`:  Represents the input of a <code>GetDeploymentInstance</code> operation. 
  * deploymentId **required**
  * instanceId **required**

### GetDeploymentInstanceOutput
* GetDeploymentInstanceOutput `object`:  Represents the output of a <code>GetDeploymentInstance</code> operation. 
  * instanceSummary
    * deploymentId
    * instanceId
    * instanceType
    * lastUpdatedAt
    * lifecycleEvents
      * items [LifecycleEvent](#lifecycleevent)
    * status

### GetDeploymentOutput
* GetDeploymentOutput `object`: Represents the output of a <code>GetDeployment</code> operation.
  * deploymentInfo
    * additionalDeploymentStatusInfo
    * applicationName
    * autoRollbackConfiguration
      * enabled
      * events
        * items [AutoRollbackEvent](#autorollbackevent)
    * blueGreenDeploymentConfiguration
      * deploymentReadyOption
        * actionOnTimeout
        * waitTimeInMinutes
      * greenFleetProvisioningOption
        * action
      * terminateBlueInstancesOnDeploymentSuccess
        * action
        * terminationWaitTimeInMinutes
    * completeTime
    * computePlatform
    * createTime
    * creator
    * deploymentConfigName
    * deploymentGroupName
    * deploymentId
    * deploymentOverview
      * Failed
      * InProgress
      * Pending
      * Ready
      * Skipped
      * Succeeded
    * deploymentStatusMessages
      * items [ErrorMessage](#errormessage)
    * deploymentStyle
      * deploymentOption
      * deploymentType
    * description
    * errorInformation
      * code
      * message
    * externalId
    * fileExistsBehavior
    * ignoreApplicationStopFailures
    * instanceTerminationWaitTimeStarted
    * loadBalancerInfo
      * elbInfoList
        * items [ELBInfo](#elbinfo)
      * targetGroupInfoList
        * items [TargetGroupInfo](#targetgroupinfo)
      * targetGroupPairInfoList
        * items [TargetGroupPairInfo](#targetgrouppairinfo)
    * previousRevision
      * appSpecContent
        * content
        * sha256
      * gitHubLocation
        * commitId
        * repository
      * revisionType
      * s3Location
        * bucket
        * bundleType
        * eTag
        * key
        * version
      * string
        * content
        * sha256
    * revision
      * appSpecContent
        * content
        * sha256
      * gitHubLocation
        * commitId
        * repository
      * revisionType
      * s3Location
        * bucket
        * bundleType
        * eTag
        * key
        * version
      * string
        * content
        * sha256
    * rollbackInfo
      * rollbackDeploymentId
      * rollbackMessage
      * rollbackTriggeringDeploymentId
    * startTime
    * status
    * targetInstances
      * autoScalingGroups
        * items [AutoScalingGroupName](#autoscalinggroupname)
      * ec2TagSet
        * ec2TagSetList
          * items [EC2TagFilterList](#ec2tagfilterlist)
      * tagFilters
        * items [EC2TagFilter](#ec2tagfilter)
    * updateOutdatedInstancesOnly

### GetDeploymentTargetInput
* GetDeploymentTargetInput `object`
  * deploymentId
  * targetId

### GetDeploymentTargetOutput
* GetDeploymentTargetOutput `object`
  * deploymentTarget
    * cloudFormationTarget [CloudFormationTarget](#cloudformationtarget)
    * deploymentTargetType
    * ecsTarget
      * deploymentId
      * lastUpdatedAt
      * lifecycleEvents
        * items [LifecycleEvent](#lifecycleevent)
      * status
      * targetArn
      * targetId
      * taskSetsInfo
        * items [ECSTaskSet](#ecstaskset)
    * instanceTarget
      * deploymentId
      * instanceLabel
      * lastUpdatedAt
      * lifecycleEvents
        * items [LifecycleEvent](#lifecycleevent)
      * status
      * targetArn
      * targetId
    * lambdaTarget
      * deploymentId
      * lambdaFunctionInfo
        * currentVersion
        * functionAlias
        * functionName
        * targetVersion
        * targetVersionWeight
      * lastUpdatedAt
      * lifecycleEvents
        * items [LifecycleEvent](#lifecycleevent)
      * status
      * targetArn
      * targetId

### GetOnPremisesInstanceInput
* GetOnPremisesInstanceInput `object`:  Represents the input of a <code>GetOnPremisesInstance</code> operation. 
  * instanceName **required**

### GetOnPremisesInstanceOutput
* GetOnPremisesInstanceOutput `object`:  Represents the output of a <code>GetOnPremisesInstance</code> operation. 
  * instanceInfo
    * tags
      * items [Tag](#tag)
    * deregisterTime
    * iamSessionArn
    * iamUserArn
    * instanceArn
    * instanceName
    * registerTime

### GitHubAccountTokenDoesNotExistException


### GitHubAccountTokenName
* GitHubAccountTokenName `string`

### GitHubAccountTokenNameList
* GitHubAccountTokenNameList `array`
  * items [GitHubAccountTokenName](#githubaccounttokenname)

### GitHubAccountTokenNameRequiredException


### GitHubLocation
* GitHubLocation `object`: Information about the location of application artifacts stored in GitHub.
  * commitId
  * repository

### GreenFleetProvisioningAction
* GreenFleetProvisioningAction `string` (values: DISCOVER_EXISTING, COPY_AUTO_SCALING_GROUP)

### GreenFleetProvisioningOption
* GreenFleetProvisioningOption `object`: Information about the instances that belong to the replacement environment in a blue/green deployment.
  * action

### IamArnRequiredException


### IamSessionArn
* IamSessionArn `string`

### IamSessionArnAlreadyRegisteredException


### IamUserArn
* IamUserArn `string`

### IamUserArnAlreadyRegisteredException


### IamUserArnRequiredException


### InstanceAction
* InstanceAction `string` (values: TERMINATE, KEEP_ALIVE)

### InstanceArn
* InstanceArn `string`

### InstanceCount
* InstanceCount `integer`

### InstanceDoesNotExistException


### InstanceId
* InstanceId `string`

### InstanceIdRequiredException


### InstanceInfo
* InstanceInfo `object`: Information about an on-premises instance.
  * tags
    * items [Tag](#tag)
  * deregisterTime
  * iamSessionArn
  * iamUserArn
  * instanceArn
  * instanceName
  * registerTime

### InstanceInfoList
* InstanceInfoList `array`
  * items [InstanceInfo](#instanceinfo)

### InstanceLimitExceededException


### InstanceName
* InstanceName `string`

### InstanceNameAlreadyRegisteredException


### InstanceNameList
* InstanceNameList `array`
  * items [InstanceName](#instancename)

### InstanceNameRequiredException


### InstanceNotRegisteredException


### InstanceStatus
* InstanceStatus `string` (values: Pending, InProgress, Succeeded, Failed, Skipped, Unknown, Ready): InstanceStatus is deprecated, use TargetStatus instead.

### InstanceStatusList
* InstanceStatusList `array`
  * items [InstanceStatus](#instancestatus)

### InstanceSummary
* InstanceSummary `object`: Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead.
  * deploymentId
  * instanceId
  * instanceType
  * lastUpdatedAt
  * lifecycleEvents
    * items [LifecycleEvent](#lifecycleevent)
  * status

### InstanceSummaryList
* InstanceSummaryList `array`
  * items [InstanceSummary](#instancesummary)

### InstanceTarget
* InstanceTarget `object`:  A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform. 
  * deploymentId
  * instanceLabel
  * lastUpdatedAt
  * lifecycleEvents
    * items [LifecycleEvent](#lifecycleevent)
  * status
  * targetArn
  * targetId

### InstanceType
* InstanceType `string` (values: Blue, Green)

### InstanceTypeList
* InstanceTypeList `array`
  * items [InstanceType](#instancetype)

### InstancesList
* InstancesList `array`
  * items [InstanceId](#instanceid)

### InvalidAlarmConfigException


### InvalidApplicationNameException


### InvalidArnException


### InvalidAutoRollbackConfigException


### InvalidAutoScalingGroupException


### InvalidBlueGreenDeploymentConfigurationException


### InvalidBucketNameFilterException


### InvalidComputePlatformException


### InvalidDeployedStateFilterException


### InvalidDeploymentConfigNameException


### InvalidDeploymentGroupNameException


### InvalidDeploymentIdException


### InvalidDeploymentInstanceTypeException


### InvalidDeploymentStatusException


### InvalidDeploymentStyleException


### InvalidDeploymentTargetIdException


### InvalidDeploymentWaitTypeException


### InvalidEC2TagCombinationException


### InvalidEC2TagException


### InvalidECSServiceException


### InvalidExternalIdException


### InvalidFileExistsBehaviorException


### InvalidGitHubAccountTokenException


### InvalidGitHubAccountTokenNameException


### InvalidIamSessionArnException


### InvalidIamUserArnException


### InvalidIgnoreApplicationStopFailuresValueException


### InvalidInputException


### InvalidInstanceNameException


### InvalidInstanceStatusException


### InvalidInstanceTypeException


### InvalidKeyPrefixFilterException


### InvalidLifecycleEventHookExecutionIdException


### InvalidLifecycleEventHookExecutionStatusException


### InvalidLoadBalancerInfoException


### InvalidMinimumHealthyHostValueException


### InvalidNextTokenException


### InvalidOnPremisesTagCombinationException


### InvalidOperationException


### InvalidRegistrationStatusException


### InvalidRevisionException


### InvalidRoleException


### InvalidSortByException


### InvalidSortOrderException


### InvalidTagException


### InvalidTagFilterException


### InvalidTagsToAddException


### InvalidTargetFilterNameException


### InvalidTargetGroupPairException


### InvalidTargetInstancesException


### InvalidTimeRangeException


### InvalidTrafficRoutingConfigurationException


### InvalidTriggerConfigException


### InvalidUpdateOutdatedInstancesOnlyValueException


### Key
* Key `string`

### LambdaFunctionAlias
* LambdaFunctionAlias `string`

### LambdaFunctionInfo
* LambdaFunctionInfo `object`:  Information about a Lambda function specified in a deployment. 
  * currentVersion
  * functionAlias
  * functionName
  * targetVersion
  * targetVersionWeight

### LambdaFunctionName
* LambdaFunctionName `string`

### LambdaTarget
* LambdaTarget `object`:  Information about the target AWS Lambda function during an AWS Lambda deployment. 
  * deploymentId
  * lambdaFunctionInfo
    * currentVersion
    * functionAlias
    * functionName
    * targetVersion
    * targetVersionWeight
  * lastUpdatedAt
  * lifecycleEvents
    * items [LifecycleEvent](#lifecycleevent)
  * status
  * targetArn
  * targetId

### LastDeploymentInfo
* LastDeploymentInfo `object`: Information about the most recent attempted or successful deployment to a deployment group.
  * createTime
  * deploymentId
  * endTime
  * status

### LifecycleErrorCode
* LifecycleErrorCode `string` (values: Success, ScriptMissing, ScriptNotExecutable, ScriptTimedOut, ScriptFailed, UnknownError)

### LifecycleEvent
* LifecycleEvent `object`: Information about a deployment lifecycle event.
  * diagnostics
    * errorCode
    * logTail
    * message
    * scriptName
  * endTime
  * lifecycleEventName
  * startTime
  * status

### LifecycleEventAlreadyCompletedException


### LifecycleEventHookExecutionId
* LifecycleEventHookExecutionId `string`

### LifecycleEventList
* LifecycleEventList `array`
  * items [LifecycleEvent](#lifecycleevent)

### LifecycleEventName
* LifecycleEventName `string`

### LifecycleEventStatus
* LifecycleEventStatus `string` (values: Pending, InProgress, Succeeded, Failed, Skipped, Unknown)

### LifecycleHookLimitExceededException


### LifecycleMessage
* LifecycleMessage `string`

### ListApplicationRevisionsInput
* ListApplicationRevisionsInput `object`:  Represents the input of a <code>ListApplicationRevisions</code> operation. 
  * applicationName **required**
  * deployed
  * nextToken
  * s3Bucket
  * s3KeyPrefix
  * sortBy
  * sortOrder

### ListApplicationRevisionsOutput
* ListApplicationRevisionsOutput `object`: Represents the output of a <code>ListApplicationRevisions</code> operation.
  * nextToken
  * revisions
    * items [RevisionLocation](#revisionlocation)

### ListApplicationsInput
* ListApplicationsInput `object`: Represents the input of a <code>ListApplications</code> operation.
  * nextToken

### ListApplicationsOutput
* ListApplicationsOutput `object`: Represents the output of a ListApplications operation.
  * applications
    * items [ApplicationName](#applicationname)
  * nextToken

### ListDeploymentConfigsInput
* ListDeploymentConfigsInput `object`: Represents the input of a <code>ListDeploymentConfigs</code> operation.
  * nextToken

### ListDeploymentConfigsOutput
* ListDeploymentConfigsOutput `object`: Represents the output of a <code>ListDeploymentConfigs</code> operation.
  * deploymentConfigsList
    * items [DeploymentConfigName](#deploymentconfigname)
  * nextToken

### ListDeploymentGroupsInput
* ListDeploymentGroupsInput `object`: Represents the input of a <code>ListDeploymentGroups</code> operation.
  * applicationName **required**
  * nextToken

### ListDeploymentGroupsOutput
* ListDeploymentGroupsOutput `object`: Represents the output of a <code>ListDeploymentGroups</code> operation.
  * applicationName
  * deploymentGroups
    * items [DeploymentGroupName](#deploymentgroupname)
  * nextToken

### ListDeploymentInstancesInput
* ListDeploymentInstancesInput `object`:  Represents the input of a <code>ListDeploymentInstances</code> operation. 
  * deploymentId **required**
  * instanceStatusFilter
    * items [InstanceStatus](#instancestatus)
  * instanceTypeFilter
    * items [InstanceType](#instancetype)
  * nextToken

### ListDeploymentInstancesOutput
* ListDeploymentInstancesOutput `object`: Represents the output of a <code>ListDeploymentInstances</code> operation.
  * instancesList
    * items [InstanceId](#instanceid)
  * nextToken

### ListDeploymentTargetsInput
* ListDeploymentTargetsInput `object`
  * deploymentId
  * nextToken
  * targetFilters

### ListDeploymentTargetsOutput
* ListDeploymentTargetsOutput `object`
  * nextToken
  * targetIds
    * items [TargetId](#targetid)

### ListDeploymentsInput
* ListDeploymentsInput `object`: Represents the input of a <code>ListDeployments</code> operation.
  * applicationName
  * createTimeRange
    * end
    * start
  * deploymentGroupName
  * externalId
  * includeOnlyStatuses
    * items [DeploymentStatus](#deploymentstatus)
  * nextToken

### ListDeploymentsOutput
* ListDeploymentsOutput `object`: Represents the output of a <code>ListDeployments</code> operation.
  * deployments
    * items [DeploymentId](#deploymentid)
  * nextToken

### ListGitHubAccountTokenNamesInput
* ListGitHubAccountTokenNamesInput `object`: Represents the input of a <code>ListGitHubAccountTokenNames</code> operation.
  * nextToken

### ListGitHubAccountTokenNamesOutput
* ListGitHubAccountTokenNamesOutput `object`: Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.
  * nextToken
  * tokenNameList
    * items [GitHubAccountTokenName](#githubaccounttokenname)

### ListOnPremisesInstancesInput
* ListOnPremisesInstancesInput `object`: Represents the input of a <code>ListOnPremisesInstances</code> operation.
  * nextToken
  * registrationStatus
  * tagFilters
    * items [TagFilter](#tagfilter)

### ListOnPremisesInstancesOutput
* ListOnPremisesInstancesOutput `object`: Represents the output of the list on-premises instances operation.
  * instanceNames
    * items [InstanceName](#instancename)
  * nextToken

### ListStateFilterAction
* ListStateFilterAction `string` (values: include, exclude, ignore)

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * NextToken
  * ResourceArn **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### ListenerArn
* ListenerArn `string`

### ListenerArnList
* ListenerArnList `array`
  * items [ListenerArn](#listenerarn)

### LoadBalancerInfo
* LoadBalancerInfo `object`: Information about the Elastic Load Balancing load balancer or target group used in a deployment.
  * elbInfoList
    * items [ELBInfo](#elbinfo)
  * targetGroupInfoList
    * items [TargetGroupInfo](#targetgroupinfo)
  * targetGroupPairInfoList
    * items [TargetGroupPairInfo](#targetgrouppairinfo)

### LogTail
* LogTail `string`

### Message
* Message `string`

### MinimumHealthyHosts
* MinimumHealthyHosts `object`: Information about minimum healthy instance.
  * type
  * value

### MinimumHealthyHostsType
* MinimumHealthyHostsType `string` (values: HOST_COUNT, FLEET_PERCENT)

### MinimumHealthyHostsValue
* MinimumHealthyHostsValue `integer`

### MultipleIamArnsProvidedException


### NextToken
* NextToken `string`

### NullableBoolean
* NullableBoolean `boolean`

### OnPremisesTagSet
* OnPremisesTagSet `object`: Information about groups of on-premises instance tags.
  * onPremisesTagSetList
    * items [TagFilterList](#tagfilterlist)

### OnPremisesTagSetList
* OnPremisesTagSetList `array`
  * items [TagFilterList](#tagfilterlist)

### OperationNotSupportedException


### Percentage
* Percentage `integer`

### PutLifecycleEventHookExecutionStatusInput
* PutLifecycleEventHookExecutionStatusInput `object`
  * deploymentId
  * lifecycleEventHookExecutionId
  * status

### PutLifecycleEventHookExecutionStatusOutput
* PutLifecycleEventHookExecutionStatusOutput `object`
  * lifecycleEventHookExecutionId

### RawString
* RawString `object`: A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead.
  * content
  * sha256

### RawStringContent
* RawStringContent `string`

### RawStringSha256
* RawStringSha256 `string`

### RegisterApplicationRevisionInput
* RegisterApplicationRevisionInput `object`: Represents the input of a RegisterApplicationRevision operation.
  * applicationName **required**
  * description
  * revision **required**
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256

### RegisterOnPremisesInstanceInput
* RegisterOnPremisesInstanceInput `object`: Represents the input of the register on-premises instance operation.
  * iamSessionArn
  * iamUserArn
  * instanceName **required**

### RegistrationStatus
* RegistrationStatus `string` (values: Registered, Deregistered)

### RemoveTagsFromOnPremisesInstancesInput
* RemoveTagsFromOnPremisesInstancesInput `object`: Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.
  * tags **required**
    * items [Tag](#tag)
  * instanceNames **required**
    * items [InstanceName](#instancename)

### Repository
* Repository `string`

### ResourceArnRequiredException


### ResourceValidationException


### RevisionDoesNotExistException


### RevisionInfo
* RevisionInfo `object`: Information about an application revision.
  * genericRevisionInfo
    * deploymentGroups
      * items [DeploymentGroupName](#deploymentgroupname)
    * description
    * firstUsedTime
    * lastUsedTime
    * registerTime
  * revisionLocation
    * appSpecContent
      * content
      * sha256
    * gitHubLocation
      * commitId
      * repository
    * revisionType
    * s3Location
      * bucket
      * bundleType
      * eTag
      * key
      * version
    * string
      * content
      * sha256

### RevisionInfoList
* RevisionInfoList `array`
  * items [RevisionInfo](#revisioninfo)

### RevisionLocation
* RevisionLocation `object`: Information about the location of an application revision.
  * appSpecContent
    * content
    * sha256
  * gitHubLocation
    * commitId
    * repository
  * revisionType
  * s3Location
    * bucket
    * bundleType
    * eTag
    * key
    * version
  * string
    * content
    * sha256

### RevisionLocationList
* RevisionLocationList `array`
  * items [RevisionLocation](#revisionlocation)

### RevisionLocationType
* RevisionLocationType `string` (values: S3, GitHub, String, AppSpecContent)

### RevisionRequiredException


### Role
* Role `string`

### RoleRequiredException


### RollbackInfo
* RollbackInfo `object`: Information about a deployment rollback.
  * rollbackDeploymentId
  * rollbackMessage
  * rollbackTriggeringDeploymentId

### S3Bucket
* S3Bucket `string`

### S3Key
* S3Key `string`

### S3Location
* S3Location `object`: Information about the location of application artifacts stored in Amazon S3.
  * bucket
  * bundleType
  * eTag
  * key
  * version

### ScriptName
* ScriptName `string`

### SkipWaitTimeForInstanceTerminationInput
* SkipWaitTimeForInstanceTerminationInput `object`
  * deploymentId

### SortOrder
* SortOrder `string` (values: ascending, descending)

### StopDeploymentInput
* StopDeploymentInput `object`:  Represents the input of a <code>StopDeployment</code> operation. 
  * autoRollbackEnabled
  * deploymentId **required**

### StopDeploymentOutput
* StopDeploymentOutput `object`:  Represents the output of a <code>StopDeployment</code> operation. 
  * status
  * statusMessage

### StopStatus
* StopStatus `string` (values: Pending, Succeeded)

### Tag
* Tag `object`: Information about a tag.
  * Key
  * Value

### TagFilter
* TagFilter `object`: Information about an on-premises instance tag filter.
  * Key
  * Type
  * Value

### TagFilterList
* TagFilterList `array`
  * items [TagFilter](#tagfilter)

### TagFilterType
* TagFilterType `string` (values: KEY_ONLY, VALUE_ONLY, KEY_AND_VALUE)

### TagKeyList
* TagKeyList `array`
  * items [Key](#key)

### TagLimitExceededException


### TagList
* TagList `array`
  * items [Tag](#tag)

### TagRequiredException


### TagResourceInput
* TagResourceInput `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceOutput
* TagResourceOutput `object`

### TagSetListLimitExceededException


### TargetArn
* TargetArn `string`

### TargetFilterName
* TargetFilterName `string` (values: TargetStatus, ServerInstanceLabel)

### TargetFilters
* TargetFilters `object`

### TargetGroupInfo
* TargetGroupInfo `object`: Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group.
  * name

### TargetGroupInfoList
* TargetGroupInfoList `array`
  * items [TargetGroupInfo](#targetgroupinfo)

### TargetGroupName
* TargetGroupName `string`

### TargetGroupPairInfo
* TargetGroupPairInfo `object`:  Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified. 
  * prodTrafficRoute
    * listenerArns
      * items [ListenerArn](#listenerarn)
  * targetGroups
    * items [TargetGroupInfo](#targetgroupinfo)
  * testTrafficRoute
    * listenerArns
      * items [ListenerArn](#listenerarn)

### TargetGroupPairInfoList
* TargetGroupPairInfoList `array`
  * items [TargetGroupPairInfo](#targetgrouppairinfo)

### TargetId
* TargetId `string`

### TargetIdList
* TargetIdList `array`
  * items [TargetId](#targetid)

### TargetInstances
* TargetInstances `object`: Information about the instances to be used in the replacement environment in a blue/green deployment.
  * autoScalingGroups
    * items [AutoScalingGroupName](#autoscalinggroupname)
  * ec2TagSet
    * ec2TagSetList
      * items [EC2TagFilterList](#ec2tagfilterlist)
  * tagFilters
    * items [EC2TagFilter](#ec2tagfilter)

### TargetLabel
* TargetLabel `string` (values: Blue, Green)

### TargetStatus
* TargetStatus `string` (values: Pending, InProgress, Succeeded, Failed, Skipped, Unknown, Ready)

### ThrottlingException


### Time
* Time `string`

### TimeBasedCanary
* TimeBasedCanary `object`: A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
  * canaryInterval
  * canaryPercentage

### TimeBasedLinear
* TimeBasedLinear `object`: A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
  * linearInterval
  * linearPercentage

### TimeRange
* TimeRange `object`: Information about a time range.
  * end
  * start

### Timestamp
* Timestamp `string`

### TrafficRoute
* TrafficRoute `object`:  Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. 
  * listenerArns
    * items [ListenerArn](#listenerarn)

### TrafficRoutingConfig
* TrafficRoutingConfig `object`: The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
  * timeBasedCanary
    * canaryInterval
    * canaryPercentage
  * timeBasedLinear
    * linearInterval
    * linearPercentage
  * type

### TrafficRoutingType
* TrafficRoutingType `string` (values: TimeBasedCanary, TimeBasedLinear, AllAtOnce)

### TrafficWeight
* TrafficWeight `number`

### TriggerConfig
* TriggerConfig `object`: Information about notification triggers for the deployment group.
  * triggerEvents
    * items [TriggerEventType](#triggereventtype)
  * triggerName
  * triggerTargetArn

### TriggerConfigList
* TriggerConfigList `array`
  * items [TriggerConfig](#triggerconfig)

### TriggerEventType
* TriggerEventType `string` (values: DeploymentStart, DeploymentSuccess, DeploymentFailure, DeploymentStop, DeploymentRollback, DeploymentReady, InstanceStart, InstanceSuccess, InstanceFailure, InstanceReady)

### TriggerEventTypeList
* TriggerEventTypeList `array`
  * items [TriggerEventType](#triggereventtype)

### TriggerName
* TriggerName `string`

### TriggerTargetArn
* TriggerTargetArn `string`

### TriggerTargetsLimitExceededException


### UnsupportedActionForDeploymentTypeException


### UntagResourceInput
* UntagResourceInput `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [Key](#key)

### UntagResourceOutput
* UntagResourceOutput `object`

### UpdateApplicationInput
* UpdateApplicationInput `object`: Represents the input of an <code>UpdateApplication</code> operation.
  * applicationName
  * newApplicationName

### UpdateDeploymentGroupInput
* UpdateDeploymentGroupInput `object`: Represents the input of an <code>UpdateDeploymentGroup</code> operation.
  * alarmConfiguration
    * alarms
      * items [Alarm](#alarm)
    * enabled
    * ignorePollAlarmFailure
  * applicationName **required**
  * autoRollbackConfiguration
    * enabled
    * events
      * items [AutoRollbackEvent](#autorollbackevent)
  * autoScalingGroups
    * items [AutoScalingGroupName](#autoscalinggroupname)
  * blueGreenDeploymentConfiguration
    * deploymentReadyOption
      * actionOnTimeout
      * waitTimeInMinutes
    * greenFleetProvisioningOption
      * action
    * terminateBlueInstancesOnDeploymentSuccess
      * action
      * terminationWaitTimeInMinutes
  * currentDeploymentGroupName **required**
  * deploymentConfigName
  * deploymentStyle
    * deploymentOption
    * deploymentType
  * ec2TagFilters
    * items [EC2TagFilter](#ec2tagfilter)
  * ec2TagSet
    * ec2TagSetList
      * items [EC2TagFilterList](#ec2tagfilterlist)
  * ecsServices
    * items [ECSService](#ecsservice)
  * loadBalancerInfo
    * elbInfoList
      * items [ELBInfo](#elbinfo)
    * targetGroupInfoList
      * items [TargetGroupInfo](#targetgroupinfo)
    * targetGroupPairInfoList
      * items [TargetGroupPairInfo](#targetgrouppairinfo)
  * newDeploymentGroupName
  * onPremisesInstanceTagFilters
    * items [TagFilter](#tagfilter)
  * onPremisesTagSet
    * onPremisesTagSetList
      * items [TagFilterList](#tagfilterlist)
  * serviceRoleArn
  * triggerConfigurations
    * items [TriggerConfig](#triggerconfig)

### UpdateDeploymentGroupOutput
* UpdateDeploymentGroupOutput `object`: Represents the output of an <code>UpdateDeploymentGroup</code> operation.
  * hooksNotCleanedUp
    * items [AutoScalingGroup](#autoscalinggroup)

### Value
* Value `string`

### Version
* Version `string`

### VersionId
* VersionId `string`

### WaitTimeInMins
* WaitTimeInMins `integer`


