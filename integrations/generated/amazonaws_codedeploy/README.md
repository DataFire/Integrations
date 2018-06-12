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

amazonaws_codedeploy.AddTagsToOnPremisesInstances({
  "tags": [],
  "instanceNames": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CodeDeploy</fullname> <p>AWS CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, or serverless AWS Lambda functions.</p> <p>You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. AWS CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use AWS CodeDeploy.</p> <p>AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.</p> <p> <b>AWS CodeDeploy Components</b> </p> <p>Use the information in this guide to help you work with the following AWS CodeDeploy components:</p> <ul> <li> <p> <b>Application</b>: A name that uniquely identifies the application you want to deploy. AWS CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.</p> </li> <li> <p> <b>Deployment group</b>: A set of individual instances or CodeDeploy Lambda applications. A Lambda deployment group contains a group of applications. An EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Auto Scaling groups, or both. </p> </li> <li> <p> <b>Deployment configuration</b>: A set of deployment rules and deployment success and failure conditions used by AWS CodeDeploy during a deployment.</p> </li> <li> <p> <b>Deployment</b>: The process and the components used in the process of updating a Lambda function or of installing content on one or more instances. </p> </li> <li> <p> <b>Application revisions</b>: For an AWS Lambda deployment, this is an AppSpec file that specifies the Lambda function to update and one or more functions to validate deployment lifecycle events. For an EC2/On-premises deployment, this is an archive file containing source content—source code, web pages, executable files, and deployment scripts—along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.</p> </li> </ul> <p>This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for AWS CodeDeploy deployments, and to get details about a Lambda function deployment.</p> <p> <b>AWS CodeDeploy Information Resources</b> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy User Guide</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/codedeploy/latest/APIReference/">AWS CodeDeploy API Reference Guide</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">AWS CLI Reference for AWS CodeDeploy</a> </p> </li> <li> <p> <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">AWS CodeDeploy Developer Forum</a> </p> </li> </ul>

## Actions

### AddTagsToOnPremisesInstances



```js
amazonaws_codedeploy.AddTagsToOnPremisesInstances({
  "tags": [],
  "instanceNames": []
}, context)
```

#### Input
* input `object`
  * instanceNames **required** [InstanceNameList](#instancenamelist)
  * tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*

### BatchGetApplicationRevisions



```js
amazonaws_codedeploy.BatchGetApplicationRevisions({
  "applicationName": "",
  "revisions": []
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)
  * revisions **required** [RevisionLocationList](#revisionlocationlist)

#### Output
* output [BatchGetApplicationRevisionsOutput](#batchgetapplicationrevisionsoutput)

### BatchGetApplications



```js
amazonaws_codedeploy.BatchGetApplications({
  "applicationNames": []
}, context)
```

#### Input
* input `object`
  * applicationNames **required** [ApplicationsList](#applicationslist)

#### Output
* output [BatchGetApplicationsOutput](#batchgetapplicationsoutput)

### BatchGetDeploymentGroups



```js
amazonaws_codedeploy.BatchGetDeploymentGroups({
  "applicationName": "",
  "deploymentGroupNames": []
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)
  * deploymentGroupNames **required** [DeploymentGroupsList](#deploymentgroupslist)

#### Output
* output [BatchGetDeploymentGroupsOutput](#batchgetdeploymentgroupsoutput)

### BatchGetDeploymentInstances



```js
amazonaws_codedeploy.BatchGetDeploymentInstances({
  "deploymentId": "",
  "instanceIds": []
}, context)
```

#### Input
* input `object`
  * deploymentId **required** [DeploymentId](#deploymentid)
  * instanceIds **required** [InstancesList](#instanceslist)

#### Output
* output [BatchGetDeploymentInstancesOutput](#batchgetdeploymentinstancesoutput)

### BatchGetDeployments



```js
amazonaws_codedeploy.BatchGetDeployments({
  "deploymentIds": []
}, context)
```

#### Input
* input `object`
  * deploymentIds **required** [DeploymentsList](#deploymentslist)

#### Output
* output [BatchGetDeploymentsOutput](#batchgetdeploymentsoutput)

### BatchGetOnPremisesInstances



```js
amazonaws_codedeploy.BatchGetOnPremisesInstances({
  "instanceNames": []
}, context)
```

#### Input
* input `object`
  * instanceNames **required** [InstanceNameList](#instancenamelist)

#### Output
* output [BatchGetOnPremisesInstancesOutput](#batchgetonpremisesinstancesoutput)

### ContinueDeployment



```js
amazonaws_codedeploy.ContinueDeployment({}, context)
```

#### Input
* input `object`
  * deploymentId [DeploymentId](#deploymentid)

#### Output
*Output schema unknown*

### CreateApplication



```js
amazonaws_codedeploy.CreateApplication({
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)
  * computePlatform [ComputePlatform](#computeplatform)

#### Output
* output [CreateApplicationOutput](#createapplicationoutput)

### CreateDeployment



```js
amazonaws_codedeploy.CreateDeployment({
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)
  * autoRollbackConfiguration [AutoRollbackConfiguration](#autorollbackconfiguration)
  * deploymentConfigName [DeploymentConfigName](#deploymentconfigname)
  * deploymentGroupName [DeploymentGroupName](#deploymentgroupname)
  * description [Description](#description)
  * fileExistsBehavior [FileExistsBehavior](#fileexistsbehavior)
  * ignoreApplicationStopFailures [Boolean](#boolean)
  * revision [RevisionLocation](#revisionlocation)
  * targetInstances [TargetInstances](#targetinstances)
  * updateOutdatedInstancesOnly [Boolean](#boolean)

#### Output
* output [CreateDeploymentOutput](#createdeploymentoutput)

### CreateDeploymentConfig



```js
amazonaws_codedeploy.CreateDeploymentConfig({
  "deploymentConfigName": ""
}, context)
```

#### Input
* input `object`
  * computePlatform [ComputePlatform](#computeplatform)
  * deploymentConfigName **required** [DeploymentConfigName](#deploymentconfigname)
  * minimumHealthyHosts [MinimumHealthyHosts](#minimumhealthyhosts)
  * trafficRoutingConfig [TrafficRoutingConfig](#trafficroutingconfig)

#### Output
* output [CreateDeploymentConfigOutput](#createdeploymentconfigoutput)

### CreateDeploymentGroup



```js
amazonaws_codedeploy.CreateDeploymentGroup({
  "applicationName": "",
  "deploymentGroupName": "",
  "serviceRoleArn": ""
}, context)
```

#### Input
* input `object`
  * alarmConfiguration [AlarmConfiguration](#alarmconfiguration)
  * applicationName **required** [ApplicationName](#applicationname)
  * autoRollbackConfiguration [AutoRollbackConfiguration](#autorollbackconfiguration)
  * autoScalingGroups [AutoScalingGroupNameList](#autoscalinggroupnamelist)
  * blueGreenDeploymentConfiguration [BlueGreenDeploymentConfiguration](#bluegreendeploymentconfiguration)
  * deploymentConfigName [DeploymentConfigName](#deploymentconfigname)
  * deploymentGroupName **required** [DeploymentGroupName](#deploymentgroupname)
  * deploymentStyle [DeploymentStyle](#deploymentstyle)
  * ec2TagFilters [EC2TagFilterList](#ec2tagfilterlist)
  * ec2TagSet [EC2TagSet](#ec2tagset)
  * loadBalancerInfo [LoadBalancerInfo](#loadbalancerinfo)
  * onPremisesInstanceTagFilters [TagFilterList](#tagfilterlist)
  * onPremisesTagSet [OnPremisesTagSet](#onpremisestagset)
  * serviceRoleArn **required** [Role](#role)
  * triggerConfigurations [TriggerConfigList](#triggerconfiglist)

#### Output
* output [CreateDeploymentGroupOutput](#createdeploymentgroupoutput)

### DeleteApplication



```js
amazonaws_codedeploy.DeleteApplication({
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)

#### Output
*Output schema unknown*

### DeleteDeploymentConfig



```js
amazonaws_codedeploy.DeleteDeploymentConfig({
  "deploymentConfigName": ""
}, context)
```

#### Input
* input `object`
  * deploymentConfigName **required** [DeploymentConfigName](#deploymentconfigname)

#### Output
*Output schema unknown*

### DeleteDeploymentGroup



```js
amazonaws_codedeploy.DeleteDeploymentGroup({
  "applicationName": "",
  "deploymentGroupName": ""
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)
  * deploymentGroupName **required** [DeploymentGroupName](#deploymentgroupname)

#### Output
* output [DeleteDeploymentGroupOutput](#deletedeploymentgroupoutput)

### DeleteGitHubAccountToken



```js
amazonaws_codedeploy.DeleteGitHubAccountToken({}, context)
```

#### Input
* input `object`
  * tokenName [GitHubAccountTokenName](#githubaccounttokenname)

#### Output
* output [DeleteGitHubAccountTokenOutput](#deletegithubaccounttokenoutput)

### DeregisterOnPremisesInstance



```js
amazonaws_codedeploy.DeregisterOnPremisesInstance({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [InstanceName](#instancename)

#### Output
*Output schema unknown*

### GetApplication



```js
amazonaws_codedeploy.GetApplication({
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)

#### Output
* output [GetApplicationOutput](#getapplicationoutput)

### GetApplicationRevision



```js
amazonaws_codedeploy.GetApplicationRevision({
  "applicationName": "",
  "revision": {}
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)
  * revision **required** [RevisionLocation](#revisionlocation)

#### Output
* output [GetApplicationRevisionOutput](#getapplicationrevisionoutput)

### GetDeployment



```js
amazonaws_codedeploy.GetDeployment({
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * deploymentId **required** [DeploymentId](#deploymentid)

#### Output
* output [GetDeploymentOutput](#getdeploymentoutput)

### GetDeploymentConfig



```js
amazonaws_codedeploy.GetDeploymentConfig({
  "deploymentConfigName": ""
}, context)
```

#### Input
* input `object`
  * deploymentConfigName **required** [DeploymentConfigName](#deploymentconfigname)

#### Output
* output [GetDeploymentConfigOutput](#getdeploymentconfigoutput)

### GetDeploymentGroup



```js
amazonaws_codedeploy.GetDeploymentGroup({
  "applicationName": "",
  "deploymentGroupName": ""
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)
  * deploymentGroupName **required** [DeploymentGroupName](#deploymentgroupname)

#### Output
* output [GetDeploymentGroupOutput](#getdeploymentgroupoutput)

### GetDeploymentInstance



```js
amazonaws_codedeploy.GetDeploymentInstance({
  "deploymentId": "",
  "instanceId": ""
}, context)
```

#### Input
* input `object`
  * deploymentId **required** [DeploymentId](#deploymentid)
  * instanceId **required** [InstanceId](#instanceid)

#### Output
* output [GetDeploymentInstanceOutput](#getdeploymentinstanceoutput)

### GetOnPremisesInstance



```js
amazonaws_codedeploy.GetOnPremisesInstance({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [InstanceName](#instancename)

#### Output
* output [GetOnPremisesInstanceOutput](#getonpremisesinstanceoutput)

### ListApplicationRevisions



```js
amazonaws_codedeploy.ListApplicationRevisions({
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * applicationName **required** [ApplicationName](#applicationname)
  * deployed [ListStateFilterAction](#liststatefilteraction)
  * nextToken [NextToken](#nexttoken)
  * s3Bucket [S3Bucket](#s3bucket)
  * s3KeyPrefix [S3Key](#s3key)
  * sortBy [ApplicationRevisionSortBy](#applicationrevisionsortby)
  * sortOrder [SortOrder](#sortorder)

#### Output
* output [ListApplicationRevisionsOutput](#listapplicationrevisionsoutput)

### ListApplications



```js
amazonaws_codedeploy.ListApplications({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListApplicationsOutput](#listapplicationsoutput)

### ListDeploymentConfigs



```js
amazonaws_codedeploy.ListDeploymentConfigs({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListDeploymentConfigsOutput](#listdeploymentconfigsoutput)

### ListDeploymentGroups



```js
amazonaws_codedeploy.ListDeploymentGroups({
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * applicationName **required** [ApplicationName](#applicationname)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListDeploymentGroupsOutput](#listdeploymentgroupsoutput)

### ListDeploymentInstances



```js
amazonaws_codedeploy.ListDeploymentInstances({
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * deploymentId **required** [DeploymentId](#deploymentid)
  * instanceStatusFilter [InstanceStatusList](#instancestatuslist)
  * instanceTypeFilter [InstanceTypeList](#instancetypelist)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListDeploymentInstancesOutput](#listdeploymentinstancesoutput)

### ListDeployments



```js
amazonaws_codedeploy.ListDeployments({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * applicationName [ApplicationName](#applicationname)
  * createTimeRange [TimeRange](#timerange)
  * deploymentGroupName [DeploymentGroupName](#deploymentgroupname)
  * includeOnlyStatuses [DeploymentStatusList](#deploymentstatuslist)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListDeploymentsOutput](#listdeploymentsoutput)

### ListGitHubAccountTokenNames



```js
amazonaws_codedeploy.ListGitHubAccountTokenNames({}, context)
```

#### Input
* input `object`
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListGitHubAccountTokenNamesOutput](#listgithubaccounttokennamesoutput)

### ListOnPremisesInstances



```js
amazonaws_codedeploy.ListOnPremisesInstances({}, context)
```

#### Input
* input `object`
  * nextToken [NextToken](#nexttoken)
  * registrationStatus [RegistrationStatus](#registrationstatus)
  * tagFilters [TagFilterList](#tagfilterlist)

#### Output
* output [ListOnPremisesInstancesOutput](#listonpremisesinstancesoutput)

### PutLifecycleEventHookExecutionStatus



```js
amazonaws_codedeploy.PutLifecycleEventHookExecutionStatus({}, context)
```

#### Input
* input `object`
  * deploymentId [DeploymentId](#deploymentid)
  * lifecycleEventHookExecutionId [LifecycleEventHookExecutionId](#lifecycleeventhookexecutionid)
  * status [LifecycleEventStatus](#lifecycleeventstatus)

#### Output
* output [PutLifecycleEventHookExecutionStatusOutput](#putlifecycleeventhookexecutionstatusoutput)

### RegisterApplicationRevision



```js
amazonaws_codedeploy.RegisterApplicationRevision({
  "applicationName": "",
  "revision": {}
}, context)
```

#### Input
* input `object`
  * applicationName **required** [ApplicationName](#applicationname)
  * description [Description](#description)
  * revision **required** [RevisionLocation](#revisionlocation)

#### Output
*Output schema unknown*

### RegisterOnPremisesInstance



```js
amazonaws_codedeploy.RegisterOnPremisesInstance({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * iamSessionArn [IamSessionArn](#iamsessionarn)
  * iamUserArn [IamUserArn](#iamuserarn)
  * instanceName **required** [InstanceName](#instancename)

#### Output
*Output schema unknown*

### RemoveTagsFromOnPremisesInstances



```js
amazonaws_codedeploy.RemoveTagsFromOnPremisesInstances({
  "tags": [],
  "instanceNames": []
}, context)
```

#### Input
* input `object`
  * instanceNames **required** [InstanceNameList](#instancenamelist)
  * tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*

### SkipWaitTimeForInstanceTermination



```js
amazonaws_codedeploy.SkipWaitTimeForInstanceTermination({}, context)
```

#### Input
* input `object`
  * deploymentId [DeploymentId](#deploymentid)

#### Output
*Output schema unknown*

### StopDeployment



```js
amazonaws_codedeploy.StopDeployment({
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * autoRollbackEnabled [NullableBoolean](#nullableboolean)
  * deploymentId **required** [DeploymentId](#deploymentid)

#### Output
* output [StopDeploymentOutput](#stopdeploymentoutput)

### UpdateApplication



```js
amazonaws_codedeploy.UpdateApplication({}, context)
```

#### Input
* input `object`
  * applicationName [ApplicationName](#applicationname)
  * newApplicationName [ApplicationName](#applicationname)

#### Output
*Output schema unknown*

### UpdateDeploymentGroup



```js
amazonaws_codedeploy.UpdateDeploymentGroup({
  "applicationName": "",
  "currentDeploymentGroupName": ""
}, context)
```

#### Input
* input `object`
  * alarmConfiguration [AlarmConfiguration](#alarmconfiguration)
  * applicationName **required** [ApplicationName](#applicationname)
  * autoRollbackConfiguration [AutoRollbackConfiguration](#autorollbackconfiguration)
  * autoScalingGroups [AutoScalingGroupNameList](#autoscalinggroupnamelist)
  * blueGreenDeploymentConfiguration [BlueGreenDeploymentConfiguration](#bluegreendeploymentconfiguration)
  * currentDeploymentGroupName **required** [DeploymentGroupName](#deploymentgroupname)
  * deploymentConfigName [DeploymentConfigName](#deploymentconfigname)
  * deploymentStyle [DeploymentStyle](#deploymentstyle)
  * ec2TagFilters [EC2TagFilterList](#ec2tagfilterlist)
  * ec2TagSet [EC2TagSet](#ec2tagset)
  * loadBalancerInfo [LoadBalancerInfo](#loadbalancerinfo)
  * newDeploymentGroupName [DeploymentGroupName](#deploymentgroupname)
  * onPremisesInstanceTagFilters [TagFilterList](#tagfilterlist)
  * onPremisesTagSet [OnPremisesTagSet](#onpremisestagset)
  * serviceRoleArn [Role](#role)
  * triggerConfigurations [TriggerConfigList](#triggerconfiglist)

#### Output
* output [UpdateDeploymentGroupOutput](#updatedeploymentgroupoutput)



## Definitions

### AddTagsToOnPremisesInstancesInput
* AddTagsToOnPremisesInstancesInput `object`: Represents the input of, and adds tags to, an on-premises instance operation.
  * instanceNames **required** [InstanceNameList](#instancenamelist)
  * tags **required** [TagList](#taglist)

### AdditionalDeploymentStatusInfo
* AdditionalDeploymentStatusInfo `string`

### Alarm
* Alarm `object`: Information about an alarm.
  * name [AlarmName](#alarmname)

### AlarmConfiguration
* AlarmConfiguration `object`: Information about alarms associated with the deployment group.
  * alarms [AlarmList](#alarmlist)
  * enabled [Boolean](#boolean)
  * ignorePollAlarmFailure [Boolean](#boolean)

### AlarmList
* AlarmList `array`
  * items [Alarm](#alarm)

### AlarmName
* AlarmName `string`

### AlarmsLimitExceededException
* AlarmsLimitExceededException `object`: The maximum number of alarms for a deployment group (10) was exceeded.

### ApplicationAlreadyExistsException
* ApplicationAlreadyExistsException `object`: An application with the specified name already exists with the applicable IAM user or AWS account.

### ApplicationDoesNotExistException
* ApplicationDoesNotExistException `object`: The application does not exist with the applicable IAM user or AWS account.

### ApplicationId
* ApplicationId `string`

### ApplicationInfo
* ApplicationInfo `object`: Information about an application.
  * applicationId [ApplicationId](#applicationid)
  * applicationName [ApplicationName](#applicationname)
  * computePlatform [ComputePlatform](#computeplatform)
  * createTime [Timestamp](#timestamp)
  * gitHubAccountName [GitHubAccountTokenName](#githubaccounttokenname)
  * linkedToGitHub [Boolean](#boolean)

### ApplicationLimitExceededException
* ApplicationLimitExceededException `object`: More applications were attempted to be created than are allowed.

### ApplicationName
* ApplicationName `string`

### ApplicationNameRequiredException
* ApplicationNameRequiredException `object`: The minimum number of required application names was not specified.

### ApplicationRevisionSortBy
* ApplicationRevisionSortBy `string` (values: registerTime, firstUsedTime, lastUsedTime)

### ApplicationsInfoList
* ApplicationsInfoList `array`
  * items [ApplicationInfo](#applicationinfo)

### ApplicationsList
* ApplicationsList `array`
  * items [ApplicationName](#applicationname)

### AutoRollbackConfiguration
* AutoRollbackConfiguration `object`: Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment doesn't complete successfully.
  * enabled [Boolean](#boolean)
  * events [AutoRollbackEventsList](#autorollbackeventslist)

### AutoRollbackEvent
* AutoRollbackEvent `string` (values: DEPLOYMENT_FAILURE, DEPLOYMENT_STOP_ON_ALARM, DEPLOYMENT_STOP_ON_REQUEST)

### AutoRollbackEventsList
* AutoRollbackEventsList `array`
  * items [AutoRollbackEvent](#autorollbackevent)

### AutoScalingGroup
* AutoScalingGroup `object`: Information about an Auto Scaling group.
  * hook [AutoScalingGroupHook](#autoscalinggrouphook)
  * name [AutoScalingGroupName](#autoscalinggroupname)

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
* BatchGetApplicationRevisionsInput `object`: Represents the input of a BatchGetApplicationRevisions operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * revisions **required** [RevisionLocationList](#revisionlocationlist)

### BatchGetApplicationRevisionsOutput
* BatchGetApplicationRevisionsOutput `object`: Represents the output of a BatchGetApplicationRevisions operation.
  * applicationName [ApplicationName](#applicationname)
  * errorMessage [ErrorMessage](#errormessage)
  * revisions [RevisionInfoList](#revisioninfolist)

### BatchGetApplicationsInput
* BatchGetApplicationsInput `object`: Represents the input of a BatchGetApplications operation.
  * applicationNames **required** [ApplicationsList](#applicationslist)

### BatchGetApplicationsOutput
* BatchGetApplicationsOutput `object`: Represents the output of a BatchGetApplications operation.
  * applicationsInfo [ApplicationsInfoList](#applicationsinfolist)

### BatchGetDeploymentGroupsInput
* BatchGetDeploymentGroupsInput `object`: Represents the input of a BatchGetDeploymentGroups operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * deploymentGroupNames **required** [DeploymentGroupsList](#deploymentgroupslist)

### BatchGetDeploymentGroupsOutput
* BatchGetDeploymentGroupsOutput `object`: Represents the output of a BatchGetDeploymentGroups operation.
  * deploymentGroupsInfo [DeploymentGroupInfoList](#deploymentgroupinfolist)
  * errorMessage [ErrorMessage](#errormessage)

### BatchGetDeploymentInstancesInput
* BatchGetDeploymentInstancesInput `object`: Represents the input of a BatchGetDeploymentInstances operation.
  * deploymentId **required** [DeploymentId](#deploymentid)
  * instanceIds **required** [InstancesList](#instanceslist)

### BatchGetDeploymentInstancesOutput
* BatchGetDeploymentInstancesOutput `object`: Represents the output of a BatchGetDeploymentInstances operation.
  * errorMessage [ErrorMessage](#errormessage)
  * instancesSummary [InstanceSummaryList](#instancesummarylist)

### BatchGetDeploymentsInput
* BatchGetDeploymentsInput `object`: Represents the input of a BatchGetDeployments operation.
  * deploymentIds **required** [DeploymentsList](#deploymentslist)

### BatchGetDeploymentsOutput
* BatchGetDeploymentsOutput `object`: Represents the output of a BatchGetDeployments operation.
  * deploymentsInfo [DeploymentsInfoList](#deploymentsinfolist)

### BatchGetOnPremisesInstancesInput
* BatchGetOnPremisesInstancesInput `object`: Represents the input of a BatchGetOnPremisesInstances operation.
  * instanceNames **required** [InstanceNameList](#instancenamelist)

### BatchGetOnPremisesInstancesOutput
* BatchGetOnPremisesInstancesOutput `object`: Represents the output of a BatchGetOnPremisesInstances operation.
  * instanceInfos [InstanceInfoList](#instanceinfolist)

### BatchLimitExceededException
* BatchLimitExceededException `object`: The maximum number of names or IDs allowed for this request (100) was exceeded.

### BlueGreenDeploymentConfiguration
* BlueGreenDeploymentConfiguration `object`: Information about blue/green deployment options for a deployment group.
  * deploymentReadyOption [DeploymentReadyOption](#deploymentreadyoption)
  * greenFleetProvisioningOption [GreenFleetProvisioningOption](#greenfleetprovisioningoption)
  * terminateBlueInstancesOnDeploymentSuccess [BlueInstanceTerminationOption](#blueinstanceterminationoption)

### BlueInstanceTerminationOption
* BlueInstanceTerminationOption `object`: Information about whether instances in the original environment are terminated when a blue/green deployment is successful.
  * action [InstanceAction](#instanceaction)
  * terminationWaitTimeInMinutes [Duration](#duration)

### Boolean
* Boolean `boolean`

### BucketNameFilterRequiredException
* BucketNameFilterRequiredException `object`: A bucket name is required, but was not provided.

### BundleType
* BundleType `string` (values: tar, tgz, zip, YAML, JSON)

### CommitId
* CommitId `string`

### ComputePlatform
* ComputePlatform `string` (values: Server, Lambda)

### ContinueDeploymentInput
* ContinueDeploymentInput `object`
  * deploymentId [DeploymentId](#deploymentid)

### CreateApplicationInput
* CreateApplicationInput `object`: Represents the input of a CreateApplication operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * computePlatform [ComputePlatform](#computeplatform)

### CreateApplicationOutput
* CreateApplicationOutput `object`: Represents the output of a CreateApplication operation.
  * applicationId [ApplicationId](#applicationid)

### CreateDeploymentConfigInput
* CreateDeploymentConfigInput `object`: Represents the input of a CreateDeploymentConfig operation.
  * computePlatform [ComputePlatform](#computeplatform)
  * deploymentConfigName **required** [DeploymentConfigName](#deploymentconfigname)
  * minimumHealthyHosts [MinimumHealthyHosts](#minimumhealthyhosts)
  * trafficRoutingConfig [TrafficRoutingConfig](#trafficroutingconfig)

### CreateDeploymentConfigOutput
* CreateDeploymentConfigOutput `object`: Represents the output of a CreateDeploymentConfig operation.
  * deploymentConfigId [DeploymentConfigId](#deploymentconfigid)

### CreateDeploymentGroupInput
* CreateDeploymentGroupInput `object`: Represents the input of a CreateDeploymentGroup operation.
  * alarmConfiguration [AlarmConfiguration](#alarmconfiguration)
  * applicationName **required** [ApplicationName](#applicationname)
  * autoRollbackConfiguration [AutoRollbackConfiguration](#autorollbackconfiguration)
  * autoScalingGroups [AutoScalingGroupNameList](#autoscalinggroupnamelist)
  * blueGreenDeploymentConfiguration [BlueGreenDeploymentConfiguration](#bluegreendeploymentconfiguration)
  * deploymentConfigName [DeploymentConfigName](#deploymentconfigname)
  * deploymentGroupName **required** [DeploymentGroupName](#deploymentgroupname)
  * deploymentStyle [DeploymentStyle](#deploymentstyle)
  * ec2TagFilters [EC2TagFilterList](#ec2tagfilterlist)
  * ec2TagSet [EC2TagSet](#ec2tagset)
  * loadBalancerInfo [LoadBalancerInfo](#loadbalancerinfo)
  * onPremisesInstanceTagFilters [TagFilterList](#tagfilterlist)
  * onPremisesTagSet [OnPremisesTagSet](#onpremisestagset)
  * serviceRoleArn **required** [Role](#role)
  * triggerConfigurations [TriggerConfigList](#triggerconfiglist)

### CreateDeploymentGroupOutput
* CreateDeploymentGroupOutput `object`: Represents the output of a CreateDeploymentGroup operation.
  * deploymentGroupId [DeploymentGroupId](#deploymentgroupid)

### CreateDeploymentInput
* CreateDeploymentInput `object`: Represents the input of a CreateDeployment operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * autoRollbackConfiguration [AutoRollbackConfiguration](#autorollbackconfiguration)
  * deploymentConfigName [DeploymentConfigName](#deploymentconfigname)
  * deploymentGroupName [DeploymentGroupName](#deploymentgroupname)
  * description [Description](#description)
  * fileExistsBehavior [FileExistsBehavior](#fileexistsbehavior)
  * ignoreApplicationStopFailures [Boolean](#boolean)
  * revision [RevisionLocation](#revisionlocation)
  * targetInstances [TargetInstances](#targetinstances)
  * updateOutdatedInstancesOnly [Boolean](#boolean)

### CreateDeploymentOutput
* CreateDeploymentOutput `object`: Represents the output of a CreateDeployment operation.
  * deploymentId [DeploymentId](#deploymentid)

### DeleteApplicationInput
* DeleteApplicationInput `object`: Represents the input of a DeleteApplication operation.
  * applicationName **required** [ApplicationName](#applicationname)

### DeleteDeploymentConfigInput
* DeleteDeploymentConfigInput `object`: Represents the input of a DeleteDeploymentConfig operation.
  * deploymentConfigName **required** [DeploymentConfigName](#deploymentconfigname)

### DeleteDeploymentGroupInput
* DeleteDeploymentGroupInput `object`: Represents the input of a DeleteDeploymentGroup operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * deploymentGroupName **required** [DeploymentGroupName](#deploymentgroupname)

### DeleteDeploymentGroupOutput
* DeleteDeploymentGroupOutput `object`: Represents the output of a DeleteDeploymentGroup operation.
  * hooksNotCleanedUp [AutoScalingGroupList](#autoscalinggrouplist)

### DeleteGitHubAccountTokenInput
* DeleteGitHubAccountTokenInput `object`: Represents the input of a DeleteGitHubAccount operation.
  * tokenName [GitHubAccountTokenName](#githubaccounttokenname)

### DeleteGitHubAccountTokenOutput
* DeleteGitHubAccountTokenOutput `object`: Represents the output of a DeleteGitHubAccountToken operation.
  * tokenName [GitHubAccountTokenName](#githubaccounttokenname)

### DeploymentAlreadyCompletedException
* DeploymentAlreadyCompletedException `object`: The deployment is already complete.

### DeploymentConfigAlreadyExistsException
* DeploymentConfigAlreadyExistsException `object`: A deployment configuration with the specified name already exists with the applicable IAM user or AWS account.

### DeploymentConfigDoesNotExistException
* DeploymentConfigDoesNotExistException `object`: The deployment configuration does not exist with the applicable IAM user or AWS account.

### DeploymentConfigId
* DeploymentConfigId `string`

### DeploymentConfigInUseException
* DeploymentConfigInUseException `object`: The deployment configuration is still in use.

### DeploymentConfigInfo
* DeploymentConfigInfo `object`: Information about a deployment configuration.
  * computePlatform [ComputePlatform](#computeplatform)
  * createTime [Timestamp](#timestamp)
  * deploymentConfigId [DeploymentConfigId](#deploymentconfigid)
  * deploymentConfigName [DeploymentConfigName](#deploymentconfigname)
  * minimumHealthyHosts [MinimumHealthyHosts](#minimumhealthyhosts)
  * trafficRoutingConfig [TrafficRoutingConfig](#trafficroutingconfig)

### DeploymentConfigLimitExceededException
* DeploymentConfigLimitExceededException `object`: The deployment configurations limit was exceeded.

### DeploymentConfigName
* DeploymentConfigName `string`

### DeploymentConfigNameRequiredException
* DeploymentConfigNameRequiredException `object`: The deployment configuration name was not specified.

### DeploymentConfigsList
* DeploymentConfigsList `array`
  * items [DeploymentConfigName](#deploymentconfigname)

### DeploymentCreator
* DeploymentCreator `string` (values: user, autoscaling, codeDeployRollback)

### DeploymentDoesNotExistException
* DeploymentDoesNotExistException `object`: The deployment does not exist with the applicable IAM user or AWS account.

### DeploymentGroupAlreadyExistsException
* DeploymentGroupAlreadyExistsException `object`: A deployment group with the specified name already exists with the applicable IAM user or AWS account.

### DeploymentGroupDoesNotExistException
* DeploymentGroupDoesNotExistException `object`: The named deployment group does not exist with the applicable IAM user or AWS account.

### DeploymentGroupId
* DeploymentGroupId `string`

### DeploymentGroupInfo
* DeploymentGroupInfo `object`: Information about a deployment group.
  * alarmConfiguration [AlarmConfiguration](#alarmconfiguration)
  * applicationName [ApplicationName](#applicationname)
  * autoRollbackConfiguration [AutoRollbackConfiguration](#autorollbackconfiguration)
  * autoScalingGroups [AutoScalingGroupList](#autoscalinggrouplist)
  * blueGreenDeploymentConfiguration [BlueGreenDeploymentConfiguration](#bluegreendeploymentconfiguration)
  * computePlatform [ComputePlatform](#computeplatform)
  * deploymentConfigName [DeploymentConfigName](#deploymentconfigname)
  * deploymentGroupId [DeploymentGroupId](#deploymentgroupid)
  * deploymentGroupName [DeploymentGroupName](#deploymentgroupname)
  * deploymentStyle [DeploymentStyle](#deploymentstyle)
  * ec2TagFilters [EC2TagFilterList](#ec2tagfilterlist)
  * ec2TagSet [EC2TagSet](#ec2tagset)
  * lastAttemptedDeployment [LastDeploymentInfo](#lastdeploymentinfo)
  * lastSuccessfulDeployment [LastDeploymentInfo](#lastdeploymentinfo)
  * loadBalancerInfo [LoadBalancerInfo](#loadbalancerinfo)
  * onPremisesInstanceTagFilters [TagFilterList](#tagfilterlist)
  * onPremisesTagSet [OnPremisesTagSet](#onpremisestagset)
  * serviceRoleArn [Role](#role)
  * targetRevision [RevisionLocation](#revisionlocation)
  * triggerConfigurations [TriggerConfigList](#triggerconfiglist)

### DeploymentGroupInfoList
* DeploymentGroupInfoList `array`
  * items [DeploymentGroupInfo](#deploymentgroupinfo)

### DeploymentGroupLimitExceededException
* DeploymentGroupLimitExceededException `object`:  The deployment groups limit was exceeded.

### DeploymentGroupName
* DeploymentGroupName `string`

### DeploymentGroupNameRequiredException
* DeploymentGroupNameRequiredException `object`: The deployment group name was not specified.

### DeploymentGroupsList
* DeploymentGroupsList `array`
  * items [DeploymentGroupName](#deploymentgroupname)

### DeploymentId
* DeploymentId `string`

### DeploymentIdRequiredException
* DeploymentIdRequiredException `object`: At least one deployment ID must be specified.

### DeploymentInfo
* DeploymentInfo `object`: Information about a deployment.
  * additionalDeploymentStatusInfo [AdditionalDeploymentStatusInfo](#additionaldeploymentstatusinfo)
  * applicationName [ApplicationName](#applicationname)
  * autoRollbackConfiguration [AutoRollbackConfiguration](#autorollbackconfiguration)
  * blueGreenDeploymentConfiguration [BlueGreenDeploymentConfiguration](#bluegreendeploymentconfiguration)
  * completeTime [Timestamp](#timestamp)
  * computePlatform [ComputePlatform](#computeplatform)
  * createTime [Timestamp](#timestamp)
  * creator [DeploymentCreator](#deploymentcreator)
  * deploymentConfigName [DeploymentConfigName](#deploymentconfigname)
  * deploymentGroupName [DeploymentGroupName](#deploymentgroupname)
  * deploymentId [DeploymentId](#deploymentid)
  * deploymentOverview [DeploymentOverview](#deploymentoverview)
  * deploymentStatusMessages [DeploymentStatusMessageList](#deploymentstatusmessagelist)
  * deploymentStyle [DeploymentStyle](#deploymentstyle)
  * description [Description](#description)
  * errorInformation [ErrorInformation](#errorinformation)
  * fileExistsBehavior [FileExistsBehavior](#fileexistsbehavior)
  * ignoreApplicationStopFailures [Boolean](#boolean)
  * instanceTerminationWaitTimeStarted [Boolean](#boolean)
  * loadBalancerInfo [LoadBalancerInfo](#loadbalancerinfo)
  * previousRevision [RevisionLocation](#revisionlocation)
  * revision [RevisionLocation](#revisionlocation)
  * rollbackInfo [RollbackInfo](#rollbackinfo)
  * startTime [Timestamp](#timestamp)
  * status [DeploymentStatus](#deploymentstatus)
  * targetInstances [TargetInstances](#targetinstances)
  * updateOutdatedInstancesOnly [Boolean](#boolean)

### DeploymentIsNotInReadyStateException
* DeploymentIsNotInReadyStateException `object`: The deployment does not have a status of Ready and can't continue yet.

### DeploymentLimitExceededException
* DeploymentLimitExceededException `object`: The number of allowed deployments was exceeded.

### DeploymentNotStartedException
* DeploymentNotStartedException `object`: The specified deployment has not started.

### DeploymentOption
* DeploymentOption `string` (values: WITH_TRAFFIC_CONTROL, WITHOUT_TRAFFIC_CONTROL)

### DeploymentOverview
* DeploymentOverview `object`: Information about the deployment status of the instances in the deployment.
  * Failed [InstanceCount](#instancecount)
  * InProgress [InstanceCount](#instancecount)
  * Pending [InstanceCount](#instancecount)
  * Ready [InstanceCount](#instancecount)
  * Skipped [InstanceCount](#instancecount)
  * Succeeded [InstanceCount](#instancecount)

### DeploymentReadyAction
* DeploymentReadyAction `string` (values: CONTINUE_DEPLOYMENT, STOP_DEPLOYMENT)

### DeploymentReadyOption
* DeploymentReadyOption `object`: Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
  * actionOnTimeout [DeploymentReadyAction](#deploymentreadyaction)
  * waitTimeInMinutes [Duration](#duration)

### DeploymentStatus
* DeploymentStatus `string` (values: Created, Queued, InProgress, Succeeded, Failed, Stopped, Ready)

### DeploymentStatusList
* DeploymentStatusList `array`
  * items [DeploymentStatus](#deploymentstatus)

### DeploymentStatusMessageList
* DeploymentStatusMessageList `array`
  * items [ErrorMessage](#errormessage)

### DeploymentStyle
* DeploymentStyle `object`: Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
  * deploymentOption [DeploymentOption](#deploymentoption)
  * deploymentType [DeploymentType](#deploymenttype)

### DeploymentType
* DeploymentType `string` (values: IN_PLACE, BLUE_GREEN)

### DeploymentsInfoList
* DeploymentsInfoList `array`
  * items [DeploymentInfo](#deploymentinfo)

### DeploymentsList
* DeploymentsList `array`
  * items [DeploymentId](#deploymentid)

### DeregisterOnPremisesInstanceInput
* DeregisterOnPremisesInstanceInput `object`: Represents the input of a DeregisterOnPremisesInstance operation.
  * instanceName **required** [InstanceName](#instancename)

### Description
* Description `string`

### DescriptionTooLongException
* DescriptionTooLongException `object`: The description is too long.

### Diagnostics
* Diagnostics `object`: Diagnostic information about executable scripts that are part of a deployment.
  * errorCode [LifecycleErrorCode](#lifecycleerrorcode)
  * logTail [LogTail](#logtail)
  * message [LifecycleMessage](#lifecyclemessage)
  * scriptName [ScriptName](#scriptname)

### Duration
* Duration `integer`

### EC2TagFilter
* EC2TagFilter `object`: Information about an EC2 tag filter.
  * Key [Key](#key)
  * Type [EC2TagFilterType](#ec2tagfiltertype)
  * Value [Value](#value)

### EC2TagFilterList
* EC2TagFilterList `array`
  * items [EC2TagFilter](#ec2tagfilter)

### EC2TagFilterType
* EC2TagFilterType `string` (values: KEY_ONLY, VALUE_ONLY, KEY_AND_VALUE)

### EC2TagSet
* EC2TagSet `object`: Information about groups of EC2 instance tags.
  * ec2TagSetList [EC2TagSetList](#ec2tagsetlist)

### EC2TagSetList
* EC2TagSetList `array`
  * items [EC2TagFilterList](#ec2tagfilterlist)

### ELBInfo
* ELBInfo `object`: Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer.
  * name [ELBName](#elbname)

### ELBInfoList
* ELBInfoList `array`
  * items [ELBInfo](#elbinfo)

### ELBName
* ELBName `string`

### ETag
* ETag `string`

### ErrorCode
* ErrorCode `string` (values: DEPLOYMENT_GROUP_MISSING, APPLICATION_MISSING, REVISION_MISSING, IAM_ROLE_MISSING, IAM_ROLE_PERMISSIONS, NO_EC2_SUBSCRIPTION, OVER_MAX_INSTANCES, NO_INSTANCES, TIMEOUT, HEALTH_CONSTRAINTS_INVALID, HEALTH_CONSTRAINTS, INTERNAL_ERROR, THROTTLED, ALARM_ACTIVE, AGENT_ISSUE, AUTO_SCALING_IAM_ROLE_PERMISSIONS, AUTO_SCALING_CONFIGURATION, MANUAL_STOP, MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION, MISSING_ELB_INFORMATION, MISSING_GITHUB_TOKEN, ELASTIC_LOAD_BALANCING_INVALID, ELB_INVALID_INSTANCE, INVALID_LAMBDA_CONFIGURATION, INVALID_LAMBDA_FUNCTION, HOOK_EXECUTION_FAILURE)

### ErrorInformation
* ErrorInformation `object`: Information about a deployment error.
  * code [ErrorCode](#errorcode)
  * message [ErrorMessage](#errormessage)

### ErrorMessage
* ErrorMessage `string`

### FileExistsBehavior
* FileExistsBehavior `string` (values: DISALLOW, OVERWRITE, RETAIN)

### GenericRevisionInfo
* GenericRevisionInfo `object`: Information about an application revision.
  * deploymentGroups [DeploymentGroupsList](#deploymentgroupslist)
  * description [Description](#description)
  * firstUsedTime [Timestamp](#timestamp)
  * lastUsedTime [Timestamp](#timestamp)
  * registerTime [Timestamp](#timestamp)

### GetApplicationInput
* GetApplicationInput `object`: Represents the input of a GetApplication operation.
  * applicationName **required** [ApplicationName](#applicationname)

### GetApplicationOutput
* GetApplicationOutput `object`: Represents the output of a GetApplication operation.
  * application [ApplicationInfo](#applicationinfo)

### GetApplicationRevisionInput
* GetApplicationRevisionInput `object`: Represents the input of a GetApplicationRevision operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * revision **required** [RevisionLocation](#revisionlocation)

### GetApplicationRevisionOutput
* GetApplicationRevisionOutput `object`: Represents the output of a GetApplicationRevision operation.
  * applicationName [ApplicationName](#applicationname)
  * revision [RevisionLocation](#revisionlocation)
  * revisionInfo [GenericRevisionInfo](#genericrevisioninfo)

### GetDeploymentConfigInput
* GetDeploymentConfigInput `object`: Represents the input of a GetDeploymentConfig operation.
  * deploymentConfigName **required** [DeploymentConfigName](#deploymentconfigname)

### GetDeploymentConfigOutput
* GetDeploymentConfigOutput `object`: Represents the output of a GetDeploymentConfig operation.
  * deploymentConfigInfo [DeploymentConfigInfo](#deploymentconfiginfo)

### GetDeploymentGroupInput
* GetDeploymentGroupInput `object`: Represents the input of a GetDeploymentGroup operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * deploymentGroupName **required** [DeploymentGroupName](#deploymentgroupname)

### GetDeploymentGroupOutput
* GetDeploymentGroupOutput `object`: Represents the output of a GetDeploymentGroup operation.
  * deploymentGroupInfo [DeploymentGroupInfo](#deploymentgroupinfo)

### GetDeploymentInput
* GetDeploymentInput `object`: Represents the input of a GetDeployment operation.
  * deploymentId **required** [DeploymentId](#deploymentid)

### GetDeploymentInstanceInput
* GetDeploymentInstanceInput `object`: Represents the input of a GetDeploymentInstance operation.
  * deploymentId **required** [DeploymentId](#deploymentid)
  * instanceId **required** [InstanceId](#instanceid)

### GetDeploymentInstanceOutput
* GetDeploymentInstanceOutput `object`: Represents the output of a GetDeploymentInstance operation.
  * instanceSummary [InstanceSummary](#instancesummary)

### GetDeploymentOutput
* GetDeploymentOutput `object`: Represents the output of a GetDeployment operation.
  * deploymentInfo [DeploymentInfo](#deploymentinfo)

### GetOnPremisesInstanceInput
* GetOnPremisesInstanceInput `object`: Represents the input of a GetOnPremisesInstance operation.
  * instanceName **required** [InstanceName](#instancename)

### GetOnPremisesInstanceOutput
* GetOnPremisesInstanceOutput `object`: Represents the output of a GetOnPremisesInstance operation.
  * instanceInfo [InstanceInfo](#instanceinfo)

### GitHubAccountTokenDoesNotExistException
* GitHubAccountTokenDoesNotExistException `object`: No GitHub account connection exists with the named specified in the call.

### GitHubAccountTokenName
* GitHubAccountTokenName `string`

### GitHubAccountTokenNameList
* GitHubAccountTokenNameList `array`
  * items [GitHubAccountTokenName](#githubaccounttokenname)

### GitHubAccountTokenNameRequiredException
* GitHubAccountTokenNameRequiredException `object`: The call is missing a required GitHub account connection name.

### GitHubLocation
* GitHubLocation `object`: Information about the location of application artifacts stored in GitHub.
  * commitId [CommitId](#commitid)
  * repository [Repository](#repository)

### GreenFleetProvisioningAction
* GreenFleetProvisioningAction `string` (values: DISCOVER_EXISTING, COPY_AUTO_SCALING_GROUP)

### GreenFleetProvisioningOption
* GreenFleetProvisioningOption `object`: Information about the instances that belong to the replacement environment in a blue/green deployment.
  * action [GreenFleetProvisioningAction](#greenfleetprovisioningaction)

### IamArnRequiredException
* IamArnRequiredException `object`: No IAM ARN was included in the request. You must use an IAM session ARN or IAM user ARN in the request.

### IamSessionArn
* IamSessionArn `string`

### IamSessionArnAlreadyRegisteredException
* IamSessionArnAlreadyRegisteredException `object`: The request included an IAM session ARN that has already been used to register a different instance.

### IamUserArn
* IamUserArn `string`

### IamUserArnAlreadyRegisteredException
* IamUserArnAlreadyRegisteredException `object`: The specified IAM user ARN is already registered with an on-premises instance.

### IamUserArnRequiredException
* IamUserArnRequiredException `object`: An IAM user ARN was not specified.

### InstanceAction
* InstanceAction `string` (values: TERMINATE, KEEP_ALIVE)

### InstanceArn
* InstanceArn `string`

### InstanceCount
* InstanceCount `integer`

### InstanceDoesNotExistException
* InstanceDoesNotExistException `object`: The specified instance does not exist in the deployment group.

### InstanceId
* InstanceId `string`

### InstanceIdRequiredException
* InstanceIdRequiredException `object`: The instance ID was not specified.

### InstanceInfo
* InstanceInfo `object`: Information about an on-premises instance.
  * deregisterTime [Timestamp](#timestamp)
  * iamSessionArn [IamSessionArn](#iamsessionarn)
  * iamUserArn [IamUserArn](#iamuserarn)
  * instanceArn [InstanceArn](#instancearn)
  * instanceName [InstanceName](#instancename)
  * registerTime [Timestamp](#timestamp)
  * tags [TagList](#taglist)

### InstanceInfoList
* InstanceInfoList `array`
  * items [InstanceInfo](#instanceinfo)

### InstanceLimitExceededException
* InstanceLimitExceededException `object`: The maximum number of allowed on-premises instances in a single call was exceeded.

### InstanceName
* InstanceName `string`

### InstanceNameAlreadyRegisteredException
* InstanceNameAlreadyRegisteredException `object`: The specified on-premises instance name is already registered.

### InstanceNameList
* InstanceNameList `array`
  * items [InstanceName](#instancename)

### InstanceNameRequiredException
* InstanceNameRequiredException `object`: An on-premises instance name was not specified.

### InstanceNotRegisteredException
* InstanceNotRegisteredException `object`: The specified on-premises instance is not registered.

### InstanceStatus
* InstanceStatus `string` (values: Pending, InProgress, Succeeded, Failed, Skipped, Unknown, Ready)

### InstanceStatusList
* InstanceStatusList `array`
  * items [InstanceStatus](#instancestatus)

### InstanceSummary
* InstanceSummary `object`: Information about an instance in a deployment.
  * deploymentId [DeploymentId](#deploymentid)
  * instanceId [InstanceId](#instanceid)
  * instanceType [InstanceType](#instancetype)
  * lastUpdatedAt [Timestamp](#timestamp)
  * lifecycleEvents [LifecycleEventList](#lifecycleeventlist)
  * status [InstanceStatus](#instancestatus)

### InstanceSummaryList
* InstanceSummaryList `array`
  * items [InstanceSummary](#instancesummary)

### InstanceType
* InstanceType `string` (values: Blue, Green)

### InstanceTypeList
* InstanceTypeList `array`
  * items [InstanceType](#instancetype)

### InstancesList
* InstancesList `array`
  * items [InstanceId](#instanceid)

### InvalidAlarmConfigException
* InvalidAlarmConfigException `object`: <p>The format of the alarm configuration is invalid. Possible causes include:</p> <ul> <li> <p>The alarm list is null.</p> </li> <li> <p>The alarm object is null.</p> </li> <li> <p>The alarm name is empty or null or exceeds the 255 character limit.</p> </li> <li> <p>Two alarms with the same name have been specified.</p> </li> <li> <p>The alarm configuration is enabled but the alarm list is empty.</p> </li> </ul>

### InvalidApplicationNameException
* InvalidApplicationNameException `object`: The application name was specified in an invalid format.

### InvalidAutoRollbackConfigException
* InvalidAutoRollbackConfigException `object`: The automatic rollback configuration was specified in an invalid format. For example, automatic rollback is enabled but an invalid triggering event type or no event types were listed.

### InvalidAutoScalingGroupException
* InvalidAutoScalingGroupException `object`: The Auto Scaling group was specified in an invalid format or does not exist.

### InvalidBlueGreenDeploymentConfigurationException
* InvalidBlueGreenDeploymentConfigurationException `object`: The configuration for the blue/green deployment group was provided in an invalid format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.

### InvalidBucketNameFilterException
* InvalidBucketNameFilterException `object`: The bucket name either doesn't exist or was specified in an invalid format.

### InvalidComputePlatformException
* InvalidComputePlatformException `object`: The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or <code>Server</code>.

### InvalidDeployedStateFilterException
* InvalidDeployedStateFilterException `object`: The deployed state filter was specified in an invalid format.

### InvalidDeploymentConfigNameException
* InvalidDeploymentConfigNameException `object`: The deployment configuration name was specified in an invalid format.

### InvalidDeploymentGroupNameException
* InvalidDeploymentGroupNameException `object`: The deployment group name was specified in an invalid format.

### InvalidDeploymentIdException
* InvalidDeploymentIdException `object`: At least one of the deployment IDs was specified in an invalid format.

### InvalidDeploymentInstanceTypeException
* InvalidDeploymentInstanceTypeException `object`: An instance type was specified for an in-place deployment. Instance types are supported for blue/green deployments only.

### InvalidDeploymentStatusException
* InvalidDeploymentStatusException `object`: The specified deployment status doesn't exist or cannot be determined.

### InvalidDeploymentStyleException
* InvalidDeploymentStyleException `object`: An invalid deployment style was specified. Valid deployment types include "IN_PLACE" and "BLUE_GREEN". Valid deployment options include "WITH_TRAFFIC_CONTROL" and "WITHOUT_TRAFFIC_CONTROL".

### InvalidEC2TagCombinationException
* InvalidEC2TagCombinationException `object`: A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of these data types can be used in a single call.

### InvalidEC2TagException
* InvalidEC2TagException `object`: The tag was specified in an invalid format.

### InvalidFileExistsBehaviorException
* InvalidFileExistsBehaviorException `object`: An invalid fileExistsBehavior option was specified to determine how AWS CodeDeploy handles files or directories that already exist in a deployment target location but weren't part of the previous successful deployment. Valid values include "DISALLOW", "OVERWRITE", and "RETAIN".

### InvalidGitHubAccountTokenException
* InvalidGitHubAccountTokenException `object`: The GitHub token is not valid.

### InvalidGitHubAccountTokenNameException
* InvalidGitHubAccountTokenNameException `object`: The format of the specified GitHub account connection name is invalid.

### InvalidIamSessionArnException
* InvalidIamSessionArnException `object`: The IAM session ARN was specified in an invalid format.

### InvalidIamUserArnException
* InvalidIamUserArnException `object`: The IAM user ARN was specified in an invalid format.

### InvalidIgnoreApplicationStopFailuresValueException
* InvalidIgnoreApplicationStopFailuresValueException `object`: The IgnoreApplicationStopFailures value is invalid. For AWS Lambda deployments, <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code> or <code>false</code> is expected.

### InvalidInputException
* InvalidInputException `object`: The specified input was specified in an invalid format.

### InvalidInstanceIdException
* InvalidInstanceIdException `object`:  

### InvalidInstanceNameException
* InvalidInstanceNameException `object`: The specified on-premises instance name was specified in an invalid format.

### InvalidInstanceStatusException
* InvalidInstanceStatusException `object`: The specified instance status does not exist.

### InvalidInstanceTypeException
* InvalidInstanceTypeException `object`: An invalid instance type was specified for instances in a blue/green deployment. Valid values include "Blue" for an original environment and "Green" for a replacement environment.

### InvalidKeyPrefixFilterException
* InvalidKeyPrefixFilterException `object`: The specified key prefix filter was specified in an invalid format.

### InvalidLifecycleEventHookExecutionIdException
* InvalidLifecycleEventHookExecutionIdException `object`: A lifecycle event hook is invalid. Review the <code>hooks</code> section in your AppSpec file to ensure the lifecycle events and <code>hooks</code> functions are valid.

### InvalidLifecycleEventHookExecutionStatusException
* InvalidLifecycleEventHookExecutionStatusException `object`: The result of a Lambda validation function that verifies a lifecycle event is invalid. It should return <code>Succeeded</code> or <code>Failed</code>.

### InvalidLoadBalancerInfoException
* InvalidLoadBalancerInfoException `object`: An invalid load balancer name, or no load balancer name, was specified.

### InvalidMinimumHealthyHostValueException
* InvalidMinimumHealthyHostValueException `object`: The minimum healthy instance value was specified in an invalid format.

### InvalidNextTokenException
* InvalidNextTokenException `object`: The next token was specified in an invalid format.

### InvalidOnPremisesTagCombinationException
* InvalidOnPremisesTagCombinationException `object`: A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet, but only one of these data types can be used in a single call.

### InvalidOperationException
* InvalidOperationException `object`: An invalid operation was detected.

### InvalidRegistrationStatusException
* InvalidRegistrationStatusException `object`: The registration status was specified in an invalid format.

### InvalidRevisionException
* InvalidRevisionException `object`: The revision was specified in an invalid format.

### InvalidRoleException
* InvalidRoleException `object`: The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Auto Scaling.

### InvalidSortByException
* InvalidSortByException `object`: The column name to sort by is either not present or was specified in an invalid format.

### InvalidSortOrderException
* InvalidSortOrderException `object`: The sort order was specified in an invalid format.

### InvalidTagException
* InvalidTagException `object`: The specified tag was specified in an invalid format.

### InvalidTagFilterException
* InvalidTagFilterException `object`: The specified tag filter was specified in an invalid format.

### InvalidTargetInstancesException
* InvalidTargetInstancesException `object`: <p>The target instance configuration is invalid. Possible causes include:</p> <ul> <li> <p>Configuration data for target instances was entered for an in-place deployment.</p> </li> <li> <p>The limit of 10 tags for a tag type was exceeded.</p> </li> <li> <p>The combined length of the tag names exceeded the limit. </p> </li> <li> <p>A specified tag is not currently applied to any instances.</p> </li> </ul>

### InvalidTimeRangeException
* InvalidTimeRangeException `object`: The specified time range was specified in an invalid format.

### InvalidTrafficRoutingConfigurationException
* InvalidTrafficRoutingConfigurationException `object`:  The configuration that specifies how traffic is routed during a deployment is invalid.

### InvalidTriggerConfigException
* InvalidTriggerConfigException `object`: The trigger was specified in an invalid format.

### InvalidUpdateOutdatedInstancesOnlyValueException
* InvalidUpdateOutdatedInstancesOnlyValueException `object`: The UpdateOutdatedInstancesOnly value is invalid. For AWS Lambda deployments, <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code> or <code>false</code> is expected.

### Key
* Key `string`

### LastDeploymentInfo
* LastDeploymentInfo `object`: Information about the most recent attempted or successful deployment to a deployment group.
  * createTime [Timestamp](#timestamp)
  * deploymentId [DeploymentId](#deploymentid)
  * endTime [Timestamp](#timestamp)
  * status [DeploymentStatus](#deploymentstatus)

### LifecycleErrorCode
* LifecycleErrorCode `string` (values: Success, ScriptMissing, ScriptNotExecutable, ScriptTimedOut, ScriptFailed, UnknownError)

### LifecycleEvent
* LifecycleEvent `object`: Information about a deployment lifecycle event.
  * diagnostics [Diagnostics](#diagnostics)
  * endTime [Timestamp](#timestamp)
  * lifecycleEventName [LifecycleEventName](#lifecycleeventname)
  * startTime [Timestamp](#timestamp)
  * status [LifecycleEventStatus](#lifecycleeventstatus)

### LifecycleEventAlreadyCompletedException
* LifecycleEventAlreadyCompletedException `object`: An attempt to return the status of an already completed lifecycle event occurred.

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
* LifecycleHookLimitExceededException `object`: The limit for lifecycle hooks was exceeded.

### LifecycleMessage
* LifecycleMessage `string`

### ListApplicationRevisionsInput
* ListApplicationRevisionsInput `object`: Represents the input of a ListApplicationRevisions operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * deployed [ListStateFilterAction](#liststatefilteraction)
  * nextToken [NextToken](#nexttoken)
  * s3Bucket [S3Bucket](#s3bucket)
  * s3KeyPrefix [S3Key](#s3key)
  * sortBy [ApplicationRevisionSortBy](#applicationrevisionsortby)
  * sortOrder [SortOrder](#sortorder)

### ListApplicationRevisionsOutput
* ListApplicationRevisionsOutput `object`: Represents the output of a ListApplicationRevisions operation.
  * nextToken [NextToken](#nexttoken)
  * revisions [RevisionLocationList](#revisionlocationlist)

### ListApplicationsInput
* ListApplicationsInput `object`: Represents the input of a ListApplications operation.
  * nextToken [NextToken](#nexttoken)

### ListApplicationsOutput
* ListApplicationsOutput `object`: Represents the output of a ListApplications operation.
  * applications [ApplicationsList](#applicationslist)
  * nextToken [NextToken](#nexttoken)

### ListDeploymentConfigsInput
* ListDeploymentConfigsInput `object`: Represents the input of a ListDeploymentConfigs operation.
  * nextToken [NextToken](#nexttoken)

### ListDeploymentConfigsOutput
* ListDeploymentConfigsOutput `object`: Represents the output of a ListDeploymentConfigs operation.
  * deploymentConfigsList [DeploymentConfigsList](#deploymentconfigslist)
  * nextToken [NextToken](#nexttoken)

### ListDeploymentGroupsInput
* ListDeploymentGroupsInput `object`: Represents the input of a ListDeploymentGroups operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * nextToken [NextToken](#nexttoken)

### ListDeploymentGroupsOutput
* ListDeploymentGroupsOutput `object`: Represents the output of a ListDeploymentGroups operation.
  * applicationName [ApplicationName](#applicationname)
  * deploymentGroups [DeploymentGroupsList](#deploymentgroupslist)
  * nextToken [NextToken](#nexttoken)

### ListDeploymentInstancesInput
* ListDeploymentInstancesInput `object`: Represents the input of a ListDeploymentInstances operation.
  * deploymentId **required** [DeploymentId](#deploymentid)
  * instanceStatusFilter [InstanceStatusList](#instancestatuslist)
  * instanceTypeFilter [InstanceTypeList](#instancetypelist)
  * nextToken [NextToken](#nexttoken)

### ListDeploymentInstancesOutput
* ListDeploymentInstancesOutput `object`: Represents the output of a ListDeploymentInstances operation.
  * instancesList [InstancesList](#instanceslist)
  * nextToken [NextToken](#nexttoken)

### ListDeploymentsInput
* ListDeploymentsInput `object`: Represents the input of a ListDeployments operation.
  * applicationName [ApplicationName](#applicationname)
  * createTimeRange [TimeRange](#timerange)
  * deploymentGroupName [DeploymentGroupName](#deploymentgroupname)
  * includeOnlyStatuses [DeploymentStatusList](#deploymentstatuslist)
  * nextToken [NextToken](#nexttoken)

### ListDeploymentsOutput
* ListDeploymentsOutput `object`: Represents the output of a ListDeployments operation.
  * deployments [DeploymentsList](#deploymentslist)
  * nextToken [NextToken](#nexttoken)

### ListGitHubAccountTokenNamesInput
* ListGitHubAccountTokenNamesInput `object`: Represents the input of a ListGitHubAccountTokenNames operation.
  * nextToken [NextToken](#nexttoken)

### ListGitHubAccountTokenNamesOutput
* ListGitHubAccountTokenNamesOutput `object`: Represents the output of a ListGitHubAccountTokenNames operation.
  * nextToken [NextToken](#nexttoken)
  * tokenNameList [GitHubAccountTokenNameList](#githubaccounttokennamelist)

### ListOnPremisesInstancesInput
* ListOnPremisesInstancesInput `object`: Represents the input of a ListOnPremisesInstances operation.
  * nextToken [NextToken](#nexttoken)
  * registrationStatus [RegistrationStatus](#registrationstatus)
  * tagFilters [TagFilterList](#tagfilterlist)

### ListOnPremisesInstancesOutput
* ListOnPremisesInstancesOutput `object`: Represents the output of list on-premises instances operation.
  * instanceNames [InstanceNameList](#instancenamelist)
  * nextToken [NextToken](#nexttoken)

### ListStateFilterAction
* ListStateFilterAction `string` (values: include, exclude, ignore)

### LoadBalancerInfo
* LoadBalancerInfo `object`: Information about the Elastic Load Balancing load balancer or target group used in a deployment.
  * elbInfoList [ELBInfoList](#elbinfolist)
  * targetGroupInfoList [TargetGroupInfoList](#targetgroupinfolist)

### LogTail
* LogTail `string`

### Message
* Message `string`

### MinimumHealthyHosts
* MinimumHealthyHosts `object`: Information about minimum healthy instance.
  * type [MinimumHealthyHostsType](#minimumhealthyhoststype)
  * value [MinimumHealthyHostsValue](#minimumhealthyhostsvalue)

### MinimumHealthyHostsType
* MinimumHealthyHostsType `string` (values: HOST_COUNT, FLEET_PERCENT)

### MinimumHealthyHostsValue
* MinimumHealthyHostsValue `integer`

### MultipleIamArnsProvidedException
* MultipleIamArnsProvidedException `object`: Both an IAM user ARN and an IAM session ARN were included in the request. Use only one ARN type.

### NextToken
* NextToken `string`

### NullableBoolean
* NullableBoolean `boolean`

### OnPremisesTagSet
* OnPremisesTagSet `object`: Information about groups of on-premises instance tags.
  * onPremisesTagSetList [OnPremisesTagSetList](#onpremisestagsetlist)

### OnPremisesTagSetList
* OnPremisesTagSetList `array`
  * items [TagFilterList](#tagfilterlist)

### OperationNotSupportedException
* OperationNotSupportedException `object`: The API used does not support the deployment.

### Percentage
* Percentage `integer`

### PutLifecycleEventHookExecutionStatusInput
* PutLifecycleEventHookExecutionStatusInput `object`
  * deploymentId [DeploymentId](#deploymentid)
  * lifecycleEventHookExecutionId [LifecycleEventHookExecutionId](#lifecycleeventhookexecutionid)
  * status [LifecycleEventStatus](#lifecycleeventstatus)

### PutLifecycleEventHookExecutionStatusOutput
* PutLifecycleEventHookExecutionStatusOutput `object`
  * lifecycleEventHookExecutionId [LifecycleEventHookExecutionId](#lifecycleeventhookexecutionid)

### RawString
* RawString `object`: A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.
  * content [RawStringContent](#rawstringcontent)
  * sha256 [RawStringSha256](#rawstringsha256)

### RawStringContent
* RawStringContent `string`

### RawStringSha256
* RawStringSha256 `string`

### RegisterApplicationRevisionInput
* RegisterApplicationRevisionInput `object`: Represents the input of a RegisterApplicationRevision operation.
  * applicationName **required** [ApplicationName](#applicationname)
  * description [Description](#description)
  * revision **required** [RevisionLocation](#revisionlocation)

### RegisterOnPremisesInstanceInput
* RegisterOnPremisesInstanceInput `object`: Represents the input of the register on-premises instance operation.
  * iamSessionArn [IamSessionArn](#iamsessionarn)
  * iamUserArn [IamUserArn](#iamuserarn)
  * instanceName **required** [InstanceName](#instancename)

### RegistrationStatus
* RegistrationStatus `string` (values: Registered, Deregistered)

### RemoveTagsFromOnPremisesInstancesInput
* RemoveTagsFromOnPremisesInstancesInput `object`: Represents the input of a RemoveTagsFromOnPremisesInstances operation.
  * instanceNames **required** [InstanceNameList](#instancenamelist)
  * tags **required** [TagList](#taglist)

### Repository
* Repository `string`

### ResourceValidationException
* ResourceValidationException `object`: The specified resource could not be validated.

### RevisionDoesNotExistException
* RevisionDoesNotExistException `object`: The named revision does not exist with the applicable IAM user or AWS account.

### RevisionInfo
* RevisionInfo `object`: Information about an application revision.
  * genericRevisionInfo [GenericRevisionInfo](#genericrevisioninfo)
  * revisionLocation [RevisionLocation](#revisionlocation)

### RevisionInfoList
* RevisionInfoList `array`
  * items [RevisionInfo](#revisioninfo)

### RevisionLocation
* RevisionLocation `object`: Information about the location of an application revision.
  * gitHubLocation [GitHubLocation](#githublocation)
  * revisionType [RevisionLocationType](#revisionlocationtype)
  * s3Location [S3Location](#s3location)
  * string [RawString](#rawstring)

### RevisionLocationList
* RevisionLocationList `array`
  * items [RevisionLocation](#revisionlocation)

### RevisionLocationType
* RevisionLocationType `string` (values: S3, GitHub, String)

### RevisionRequiredException
* RevisionRequiredException `object`: The revision ID was not specified.

### Role
* Role `string`

### RoleRequiredException
* RoleRequiredException `object`: The role ID was not specified.

### RollbackInfo
* RollbackInfo `object`: Information about a deployment rollback.
  * rollbackDeploymentId [DeploymentId](#deploymentid)
  * rollbackMessage [Description](#description)
  * rollbackTriggeringDeploymentId [DeploymentId](#deploymentid)

### S3Bucket
* S3Bucket `string`

### S3Key
* S3Key `string`

### S3Location
* S3Location `object`: Information about the location of application artifacts stored in Amazon S3.
  * bucket [S3Bucket](#s3bucket)
  * bundleType [BundleType](#bundletype)
  * eTag [ETag](#etag)
  * key [S3Key](#s3key)
  * version [VersionId](#versionid)

### ScriptName
* ScriptName `string`

### SkipWaitTimeForInstanceTerminationInput
* SkipWaitTimeForInstanceTerminationInput `object`
  * deploymentId [DeploymentId](#deploymentid)

### SortOrder
* SortOrder `string` (values: ascending, descending)

### StopDeploymentInput
* StopDeploymentInput `object`: Represents the input of a StopDeployment operation.
  * autoRollbackEnabled [NullableBoolean](#nullableboolean)
  * deploymentId **required** [DeploymentId](#deploymentid)

### StopDeploymentOutput
* StopDeploymentOutput `object`: Represents the output of a StopDeployment operation.
  * status [StopStatus](#stopstatus)
  * statusMessage [Message](#message)

### StopStatus
* StopStatus `string` (values: Pending, Succeeded)

### Tag
* Tag `object`: Information about a tag.
  * Key [Key](#key)
  * Value [Value](#value)

### TagFilter
* TagFilter `object`: Information about an on-premises instance tag filter.
  * Key [Key](#key)
  * Type [TagFilterType](#tagfiltertype)
  * Value [Value](#value)

### TagFilterList
* TagFilterList `array`
  * items [TagFilter](#tagfilter)

### TagFilterType
* TagFilterType `string` (values: KEY_ONLY, VALUE_ONLY, KEY_AND_VALUE)

### TagLimitExceededException
* TagLimitExceededException `object`: The maximum allowed number of tags was exceeded.

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagRequiredException
* TagRequiredException `object`: A tag was not specified.

### TagSetListLimitExceededException
* TagSetListLimitExceededException `object`: The number of tag groups included in the tag set list exceeded the maximum allowed limit of 3.

### TargetGroupInfo
* TargetGroupInfo `object`: Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group.
  * name [TargetGroupName](#targetgroupname)

### TargetGroupInfoList
* TargetGroupInfoList `array`
  * items [TargetGroupInfo](#targetgroupinfo)

### TargetGroupName
* TargetGroupName `string`

### TargetInstances
* TargetInstances `object`: Information about the instances to be used in the replacement environment in a blue/green deployment.
  * autoScalingGroups [AutoScalingGroupNameList](#autoscalinggroupnamelist)
  * ec2TagSet [EC2TagSet](#ec2tagset)
  * tagFilters [EC2TagFilterList](#ec2tagfilterlist)

### ThrottlingException
* ThrottlingException `object`: An API function was called too frequently.

### TimeBasedCanary
* TimeBasedCanary `object`: A configuration that shifts traffic from one version of a Lambda function to another in two increments. The original and target Lambda function versions are specified in the deployment's AppSpec file.
  * canaryInterval [WaitTimeInMins](#waittimeinmins)
  * canaryPercentage [Percentage](#percentage)

### TimeBasedLinear
* TimeBasedLinear `object`: A configuration that shifts traffic from one version of a Lambda function to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions are specified in the deployment's AppSpec file.
  * linearInterval [WaitTimeInMins](#waittimeinmins)
  * linearPercentage [Percentage](#percentage)

### TimeRange
* TimeRange `object`: Information about a time range.
  * end [Timestamp](#timestamp)
  * start [Timestamp](#timestamp)

### Timestamp
* Timestamp `string`

### TrafficRoutingConfig
* TrafficRoutingConfig `object`: The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment.
  * timeBasedCanary [TimeBasedCanary](#timebasedcanary)
  * timeBasedLinear [TimeBasedLinear](#timebasedlinear)
  * type [TrafficRoutingType](#trafficroutingtype)

### TrafficRoutingType
* TrafficRoutingType `string` (values: TimeBasedCanary, TimeBasedLinear, AllAtOnce)

### TriggerConfig
* TriggerConfig `object`: Information about notification triggers for the deployment group.
  * triggerEvents [TriggerEventTypeList](#triggereventtypelist)
  * triggerName [TriggerName](#triggername)
  * triggerTargetArn [TriggerTargetArn](#triggertargetarn)

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
* TriggerTargetsLimitExceededException `object`: The maximum allowed number of triggers was exceeded.

### UnsupportedActionForDeploymentTypeException
* UnsupportedActionForDeploymentTypeException `object`: A call was submitted that is not supported for the specified deployment type.

### UpdateApplicationInput
* UpdateApplicationInput `object`: Represents the input of an UpdateApplication operation.
  * applicationName [ApplicationName](#applicationname)
  * newApplicationName [ApplicationName](#applicationname)

### UpdateDeploymentGroupInput
* UpdateDeploymentGroupInput `object`: Represents the input of an UpdateDeploymentGroup operation.
  * alarmConfiguration [AlarmConfiguration](#alarmconfiguration)
  * applicationName **required** [ApplicationName](#applicationname)
  * autoRollbackConfiguration [AutoRollbackConfiguration](#autorollbackconfiguration)
  * autoScalingGroups [AutoScalingGroupNameList](#autoscalinggroupnamelist)
  * blueGreenDeploymentConfiguration [BlueGreenDeploymentConfiguration](#bluegreendeploymentconfiguration)
  * currentDeploymentGroupName **required** [DeploymentGroupName](#deploymentgroupname)
  * deploymentConfigName [DeploymentConfigName](#deploymentconfigname)
  * deploymentStyle [DeploymentStyle](#deploymentstyle)
  * ec2TagFilters [EC2TagFilterList](#ec2tagfilterlist)
  * ec2TagSet [EC2TagSet](#ec2tagset)
  * loadBalancerInfo [LoadBalancerInfo](#loadbalancerinfo)
  * newDeploymentGroupName [DeploymentGroupName](#deploymentgroupname)
  * onPremisesInstanceTagFilters [TagFilterList](#tagfilterlist)
  * onPremisesTagSet [OnPremisesTagSet](#onpremisestagset)
  * serviceRoleArn [Role](#role)
  * triggerConfigurations [TriggerConfigList](#triggerconfiglist)

### UpdateDeploymentGroupOutput
* UpdateDeploymentGroupOutput `object`: Represents the output of an UpdateDeploymentGroup operation.
  * hooksNotCleanedUp [AutoScalingGroupList](#autoscalinggrouplist)

### Value
* Value `string`

### VersionId
* VersionId `string`

### WaitTimeInMins
* WaitTimeInMins `integer`


