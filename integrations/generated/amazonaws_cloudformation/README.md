# @datafire/amazonaws_cloudformation

Client library for AWS CloudFormation

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cloudformation
```
```js
let amazonaws_cloudformation = require('@datafire/amazonaws_cloudformation').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CloudFormation</fullname> <p>AWS CloudFormation allows you to create and manage AWS infrastructure deployments predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly scalable, cost-effective applications without creating or configuring the underlying AWS infrastructure.</p> <p>With AWS CloudFormation, you declare all of your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. AWS CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you.</p> <p>For more information about AWS CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">AWS CloudFormation Product Page</a>.</p> <p>Amazon CloudFormation makes use of other AWS products. If you need additional technical information about a specific AWS product, you can find the product's technical documentation at <a href="https://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>

## Actions

### CancelUpdateStack



```js
amazonaws_cloudformation.CancelUpdateStack({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * ClientRequestToken `string`

#### Output
*Output schema unknown*

### CancelUpdateStack



```js
amazonaws_cloudformation.CancelUpdateStack({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * StackName **required**

#### Output
*Output schema unknown*

### ContinueUpdateRollback



```js
amazonaws_cloudformation.ContinueUpdateRollback({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * RoleARN `string`
  * ResourcesToSkip `array`
  * ClientRequestToken `string`

#### Output
* output [ContinueUpdateRollbackOutput](#continueupdaterollbackoutput)

### ContinueUpdateRollback



```js
amazonaws_cloudformation.ContinueUpdateRollback({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * ResourcesToSkip
    * items [ResourceToSkip](#resourcetoskip)
  * RoleARN
  * StackName **required**

#### Output
* output [ContinueUpdateRollbackOutput](#continueupdaterollbackoutput)

### CreateChangeSet



```js
amazonaws_cloudformation.CreateChangeSet({
  "StackName": "",
  "ChangeSetName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * TemplateBody `string`
  * TemplateURL `string`
  * UsePreviousTemplate `boolean`
  * Parameters `array`
  * Capabilities `array`
  * ResourceTypes `array`
  * RoleARN `string`
  * RollbackConfiguration `object`
  * NotificationARNs `array`
  * Tags `array`
  * ChangeSetName **required** `string`
  * ClientToken `string`
  * Description `string`
  * ChangeSetType `string`
  * ResourcesToImport `array`
  * IncludeNestedStacks `boolean`

#### Output
* output [CreateChangeSetOutput](#createchangesetoutput)

### CreateChangeSet



```js
amazonaws_cloudformation.CreateChangeSet({
  "StackName": null,
  "ChangeSetName": null
}, context)
```

#### Input
* input `object`
  * Capabilities
    * items [Capability](#capability)
  * ChangeSetName **required**
  * ChangeSetType
  * ClientToken
  * Description
  * IncludeNestedStacks
  * NotificationARNs
    * items [NotificationARN](#notificationarn)
  * Parameters
    * items [Parameter](#parameter)
  * ResourceTypes
    * items [ResourceType](#resourcetype)
  * ResourcesToImport
    * items [ResourceToImport](#resourcetoimport)
  * RoleARN
  * RollbackConfiguration
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * StackName **required**
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL
  * UsePreviousTemplate

#### Output
* output [CreateChangeSetOutput](#createchangesetoutput)

### CreateStack



```js
amazonaws_cloudformation.CreateStack({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * TemplateBody `string`
  * TemplateURL `string`
  * Parameters `array`
  * DisableRollback `boolean`
  * RollbackConfiguration `object`
  * TimeoutInMinutes `integer`
  * NotificationARNs `array`
  * Capabilities `array`
  * ResourceTypes `array`
  * RoleARN `string`
  * OnFailure `string`
  * StackPolicyBody `string`
  * StackPolicyURL `string`
  * Tags `array`
  * ClientRequestToken `string`
  * EnableTerminationProtection `boolean`

#### Output
* output [CreateStackOutput](#createstackoutput)

### CreateStack



```js
amazonaws_cloudformation.CreateStack({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * Capabilities
    * items [Capability](#capability)
  * ClientRequestToken
  * DisableRollback
  * EnableTerminationProtection
  * NotificationARNs
    * items [NotificationARN](#notificationarn)
  * OnFailure
  * Parameters
    * items [Parameter](#parameter)
  * ResourceTypes
    * items [ResourceType](#resourcetype)
  * RoleARN
  * RollbackConfiguration
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * StackName **required**
  * StackPolicyBody
  * StackPolicyURL
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL
  * TimeoutInMinutes

#### Output
* output [CreateStackOutput](#createstackoutput)

### CreateStackInstances



```js
amazonaws_cloudformation.CreateStackInstances({
  "StackSetName": "",
  "Regions": []
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * Accounts `array`
  * DeploymentTargets `object`
  * Regions **required** `array`
  * ParameterOverrides `array`
  * OperationPreferences `object`
  * OperationId `string`

#### Output
* output [CreateStackInstancesOutput](#createstackinstancesoutput)

### CreateStackInstances



```js
amazonaws_cloudformation.CreateStackInstances({
  "StackSetName": null,
  "Regions": null
}, context)
```

#### Input
* input `object`
  * Accounts
    * items [Account](#account)
  * DeploymentTargets
    * Accounts
      * items [Account](#account)
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
  * OperationId
  * OperationPreferences
    * FailureToleranceCount
    * FailureTolerancePercentage
    * MaxConcurrentCount
    * MaxConcurrentPercentage
    * RegionOrder
      * items [Region](#region)
  * ParameterOverrides
    * items [Parameter](#parameter)
  * Regions **required**
    * items [Region](#region)
  * StackSetName **required**

#### Output
* output [CreateStackInstancesOutput](#createstackinstancesoutput)

### CreateStackSet



```js
amazonaws_cloudformation.CreateStackSet({
  "StackSetName": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * Description `string`
  * TemplateBody `string`
  * TemplateURL `string`
  * Parameters `array`
  * Capabilities `array`
  * Tags `array`
  * AdministrationRoleARN `string`
  * ExecutionRoleName `string`
  * PermissionModel `string`
  * AutoDeployment `object`
  * ClientRequestToken `string`

#### Output
* output [CreateStackSetOutput](#createstacksetoutput)

### CreateStackSet



```js
amazonaws_cloudformation.CreateStackSet({
  "StackSetName": null
}, context)
```

#### Input
* input `object`
  * AdministrationRoleARN
  * AutoDeployment
    * Enabled
    * RetainStacksOnAccountRemoval
  * Capabilities
    * items [Capability](#capability)
  * ClientRequestToken
  * Description
  * ExecutionRoleName
  * Parameters
    * items [Parameter](#parameter)
  * PermissionModel
  * StackSetName **required**
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL

#### Output
* output [CreateStackSetOutput](#createstacksetoutput)

### DeleteChangeSet



```js
amazonaws_cloudformation.DeleteChangeSet({
  "ChangeSetName": ""
}, context)
```

#### Input
* input `object`
  * ChangeSetName **required** `string`
  * StackName `string`

#### Output
* output [DeleteChangeSetOutput](#deletechangesetoutput)

### DeleteChangeSet



```js
amazonaws_cloudformation.DeleteChangeSet({
  "ChangeSetName": null
}, context)
```

#### Input
* input `object`
  * ChangeSetName **required**
  * StackName

#### Output
* output [DeleteChangeSetOutput](#deletechangesetoutput)

### DeleteStack



```js
amazonaws_cloudformation.DeleteStack({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * RetainResources `array`
  * RoleARN `string`
  * ClientRequestToken `string`

#### Output
*Output schema unknown*

### DeleteStack



```js
amazonaws_cloudformation.DeleteStack({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * RetainResources
    * items [LogicalResourceId](#logicalresourceid)
  * RoleARN
  * StackName **required**

#### Output
*Output schema unknown*

### DeleteStackInstances



```js
amazonaws_cloudformation.DeleteStackInstances({
  "StackSetName": "",
  "Regions": [],
  "RetainStacks": true
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * Accounts `array`
  * DeploymentTargets `object`
  * Regions **required** `array`
  * OperationPreferences `object`
  * RetainStacks **required** `boolean`
  * OperationId `string`

#### Output
* output [DeleteStackInstancesOutput](#deletestackinstancesoutput)

### DeleteStackInstances



```js
amazonaws_cloudformation.DeleteStackInstances({
  "StackSetName": null,
  "Regions": null,
  "RetainStacks": null
}, context)
```

#### Input
* input `object`
  * Accounts
    * items [Account](#account)
  * DeploymentTargets
    * Accounts
      * items [Account](#account)
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
  * OperationId
  * OperationPreferences
    * FailureToleranceCount
    * FailureTolerancePercentage
    * MaxConcurrentCount
    * MaxConcurrentPercentage
    * RegionOrder
      * items [Region](#region)
  * Regions **required**
    * items [Region](#region)
  * RetainStacks **required**
  * StackSetName **required**

#### Output
* output [DeleteStackInstancesOutput](#deletestackinstancesoutput)

### DeleteStackSet



```js
amazonaws_cloudformation.DeleteStackSet({
  "StackSetName": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`

#### Output
* output [DeleteStackSetOutput](#deletestacksetoutput)

### DeleteStackSet



```js
amazonaws_cloudformation.DeleteStackSet({
  "StackSetName": null
}, context)
```

#### Input
* input `object`
  * StackSetName **required**

#### Output
* output [DeleteStackSetOutput](#deletestacksetoutput)

### DeregisterType



```js
amazonaws_cloudformation.DeregisterType({}, context)
```

#### Input
* input `object`
  * Arn `string`
  * Type `string`
  * TypeName `string`
  * VersionId `string`

#### Output
* output [DeregisterTypeOutput](#deregistertypeoutput)

### DeregisterType



```js
amazonaws_cloudformation.DeregisterType({}, context)
```

#### Input
* input `object`
  * Arn
  * Type
  * TypeName
  * VersionId

#### Output
* output [DeregisterTypeOutput](#deregistertypeoutput)

### DescribeAccountLimits



```js
amazonaws_cloudformation.DescribeAccountLimits({}, context)
```

#### Input
* input `object`
  * NextToken `string`

#### Output
* output [DescribeAccountLimitsOutput](#describeaccountlimitsoutput)

### DescribeAccountLimits



```js
amazonaws_cloudformation.DescribeAccountLimits({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken

#### Output
* output [DescribeAccountLimitsOutput](#describeaccountlimitsoutput)

### DescribeChangeSet



```js
amazonaws_cloudformation.DescribeChangeSet({
  "ChangeSetName": ""
}, context)
```

#### Input
* input `object`
  * ChangeSetName **required** `string`
  * StackName `string`
  * NextToken `string`

#### Output
* output [DescribeChangeSetOutput](#describechangesetoutput)

### DescribeChangeSet



```js
amazonaws_cloudformation.DescribeChangeSet({
  "ChangeSetName": null
}, context)
```

#### Input
* input `object`
  * ChangeSetName **required**
  * NextToken
  * StackName

#### Output
* output [DescribeChangeSetOutput](#describechangesetoutput)

### DescribeStackDriftDetectionStatus



```js
amazonaws_cloudformation.DescribeStackDriftDetectionStatus({
  "StackDriftDetectionId": ""
}, context)
```

#### Input
* input `object`
  * StackDriftDetectionId **required** `string`

#### Output
* output [DescribeStackDriftDetectionStatusOutput](#describestackdriftdetectionstatusoutput)

### DescribeStackDriftDetectionStatus



```js
amazonaws_cloudformation.DescribeStackDriftDetectionStatus({
  "StackDriftDetectionId": null
}, context)
```

#### Input
* input `object`
  * StackDriftDetectionId **required**

#### Output
* output [DescribeStackDriftDetectionStatusOutput](#describestackdriftdetectionstatusoutput)

### DescribeStackEvents



```js
amazonaws_cloudformation.DescribeStackEvents({}, context)
```

#### Input
* input `object`
  * StackName `string`
  * NextToken `string`

#### Output
* output [DescribeStackEventsOutput](#describestackeventsoutput)

### DescribeStackEvents



```js
amazonaws_cloudformation.DescribeStackEvents({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken
  * StackName

#### Output
* output [DescribeStackEventsOutput](#describestackeventsoutput)

### DescribeStackInstance



```js
amazonaws_cloudformation.DescribeStackInstance({
  "StackSetName": "",
  "StackInstanceAccount": "",
  "StackInstanceRegion": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * StackInstanceAccount **required** `string`
  * StackInstanceRegion **required** `string`

#### Output
* output [DescribeStackInstanceOutput](#describestackinstanceoutput)

### DescribeStackInstance



```js
amazonaws_cloudformation.DescribeStackInstance({
  "StackSetName": null,
  "StackInstanceAccount": null,
  "StackInstanceRegion": null
}, context)
```

#### Input
* input `object`
  * StackInstanceAccount **required**
  * StackInstanceRegion **required**
  * StackSetName **required**

#### Output
* output [DescribeStackInstanceOutput](#describestackinstanceoutput)

### DescribeStackResource



```js
amazonaws_cloudformation.DescribeStackResource({
  "StackName": "",
  "LogicalResourceId": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * LogicalResourceId **required** `string`

#### Output
* output [DescribeStackResourceOutput](#describestackresourceoutput)

### DescribeStackResource



```js
amazonaws_cloudformation.DescribeStackResource({
  "StackName": null,
  "LogicalResourceId": null
}, context)
```

#### Input
* input `object`
  * LogicalResourceId **required**
  * StackName **required**

#### Output
* output [DescribeStackResourceOutput](#describestackresourceoutput)

### DescribeStackResourceDrifts



```js
amazonaws_cloudformation.DescribeStackResourceDrifts({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * StackResourceDriftStatusFilters `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeStackResourceDriftsOutput](#describestackresourcedriftsoutput)

### DescribeStackResourceDrifts



```js
amazonaws_cloudformation.DescribeStackResourceDrifts({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * StackName **required**
  * StackResourceDriftStatusFilters
    * items [StackResourceDriftStatus](#stackresourcedriftstatus)

#### Output
* output [DescribeStackResourceDriftsOutput](#describestackresourcedriftsoutput)

### DescribeStackResources



```js
amazonaws_cloudformation.DescribeStackResources({}, context)
```

#### Input
* input `object`
  * StackName `string`
  * LogicalResourceId `string`
  * PhysicalResourceId `string`

#### Output
* output [DescribeStackResourcesOutput](#describestackresourcesoutput)

### DescribeStackResources



```js
amazonaws_cloudformation.DescribeStackResources({}, context)
```

#### Input
* input `object`
  * LogicalResourceId
  * PhysicalResourceId
  * StackName

#### Output
* output [DescribeStackResourcesOutput](#describestackresourcesoutput)

### DescribeStackSet



```js
amazonaws_cloudformation.DescribeStackSet({
  "StackSetName": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`

#### Output
* output [DescribeStackSetOutput](#describestacksetoutput)

### DescribeStackSet



```js
amazonaws_cloudformation.DescribeStackSet({
  "StackSetName": null
}, context)
```

#### Input
* input `object`
  * StackSetName **required**

#### Output
* output [DescribeStackSetOutput](#describestacksetoutput)

### DescribeStackSetOperation



```js
amazonaws_cloudformation.DescribeStackSetOperation({
  "StackSetName": "",
  "OperationId": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * OperationId **required** `string`

#### Output
* output [DescribeStackSetOperationOutput](#describestacksetoperationoutput)

### DescribeStackSetOperation



```js
amazonaws_cloudformation.DescribeStackSetOperation({
  "StackSetName": null,
  "OperationId": null
}, context)
```

#### Input
* input `object`
  * OperationId **required**
  * StackSetName **required**

#### Output
* output [DescribeStackSetOperationOutput](#describestacksetoperationoutput)

### DescribeStacks



```js
amazonaws_cloudformation.DescribeStacks({}, context)
```

#### Input
* input `object`
  * StackName `string`
  * NextToken `string`

#### Output
* output [DescribeStacksOutput](#describestacksoutput)

### DescribeStacks



```js
amazonaws_cloudformation.DescribeStacks({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken
  * StackName

#### Output
* output [DescribeStacksOutput](#describestacksoutput)

### DescribeType



```js
amazonaws_cloudformation.DescribeType({}, context)
```

#### Input
* input `object`
  * Type `string`
  * TypeName `string`
  * Arn `string`
  * VersionId `string`

#### Output
* output [DescribeTypeOutput](#describetypeoutput)

### DescribeType



```js
amazonaws_cloudformation.DescribeType({}, context)
```

#### Input
* input `object`
  * Arn
  * Type
  * TypeName
  * VersionId

#### Output
* output [DescribeTypeOutput](#describetypeoutput)

### DescribeTypeRegistration



```js
amazonaws_cloudformation.DescribeTypeRegistration({
  "RegistrationToken": ""
}, context)
```

#### Input
* input `object`
  * RegistrationToken **required** `string`

#### Output
* output [DescribeTypeRegistrationOutput](#describetyperegistrationoutput)

### DescribeTypeRegistration



```js
amazonaws_cloudformation.DescribeTypeRegistration({
  "RegistrationToken": null
}, context)
```

#### Input
* input `object`
  * RegistrationToken **required**

#### Output
* output [DescribeTypeRegistrationOutput](#describetyperegistrationoutput)

### DetectStackDrift



```js
amazonaws_cloudformation.DetectStackDrift({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * LogicalResourceIds `array`

#### Output
* output [DetectStackDriftOutput](#detectstackdriftoutput)

### DetectStackDrift



```js
amazonaws_cloudformation.DetectStackDrift({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * LogicalResourceIds
    * items [LogicalResourceId](#logicalresourceid)
  * StackName **required**

#### Output
* output [DetectStackDriftOutput](#detectstackdriftoutput)

### DetectStackResourceDrift



```js
amazonaws_cloudformation.DetectStackResourceDrift({
  "StackName": "",
  "LogicalResourceId": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * LogicalResourceId **required** `string`

#### Output
* output [DetectStackResourceDriftOutput](#detectstackresourcedriftoutput)

### DetectStackResourceDrift



```js
amazonaws_cloudformation.DetectStackResourceDrift({
  "StackName": null,
  "LogicalResourceId": null
}, context)
```

#### Input
* input `object`
  * LogicalResourceId **required**
  * StackName **required**

#### Output
* output [DetectStackResourceDriftOutput](#detectstackresourcedriftoutput)

### DetectStackSetDrift



```js
amazonaws_cloudformation.DetectStackSetDrift({
  "StackSetName": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * OperationPreferences `object`
  * OperationId `string`

#### Output
* output [DetectStackSetDriftOutput](#detectstacksetdriftoutput)

### DetectStackSetDrift



```js
amazonaws_cloudformation.DetectStackSetDrift({
  "StackSetName": null
}, context)
```

#### Input
* input `object`
  * OperationId
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * StackSetName **required**

#### Output
* output [DetectStackSetDriftOutput](#detectstacksetdriftoutput)

### EstimateTemplateCost



```js
amazonaws_cloudformation.EstimateTemplateCost({}, context)
```

#### Input
* input `object`
  * TemplateBody `string`
  * TemplateURL `string`
  * Parameters `array`

#### Output
* output [EstimateTemplateCostOutput](#estimatetemplatecostoutput)

### EstimateTemplateCost



```js
amazonaws_cloudformation.EstimateTemplateCost({}, context)
```

#### Input
* input `object`
  * Parameters
    * items [Parameter](#parameter)
  * TemplateBody
  * TemplateURL

#### Output
* output [EstimateTemplateCostOutput](#estimatetemplatecostoutput)

### ExecuteChangeSet



```js
amazonaws_cloudformation.ExecuteChangeSet({
  "ChangeSetName": ""
}, context)
```

#### Input
* input `object`
  * ChangeSetName **required** `string`
  * StackName `string`
  * ClientRequestToken `string`

#### Output
* output [ExecuteChangeSetOutput](#executechangesetoutput)

### ExecuteChangeSet



```js
amazonaws_cloudformation.ExecuteChangeSet({
  "ChangeSetName": null
}, context)
```

#### Input
* input `object`
  * ChangeSetName **required**
  * ClientRequestToken
  * StackName

#### Output
* output [ExecuteChangeSetOutput](#executechangesetoutput)

### GetStackPolicy



```js
amazonaws_cloudformation.GetStackPolicy({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`

#### Output
* output [GetStackPolicyOutput](#getstackpolicyoutput)

### GetStackPolicy



```js
amazonaws_cloudformation.GetStackPolicy({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * StackName **required**

#### Output
* output [GetStackPolicyOutput](#getstackpolicyoutput)

### GetTemplate



```js
amazonaws_cloudformation.GetTemplate({}, context)
```

#### Input
* input `object`
  * StackName `string`
  * ChangeSetName `string`
  * TemplateStage `string`

#### Output
* output [GetTemplateOutput](#gettemplateoutput)

### GetTemplate



```js
amazonaws_cloudformation.GetTemplate({}, context)
```

#### Input
* input `object`
  * ChangeSetName
  * StackName
  * TemplateStage

#### Output
* output [GetTemplateOutput](#gettemplateoutput)

### GetTemplateSummary



```js
amazonaws_cloudformation.GetTemplateSummary({}, context)
```

#### Input
* input `object`
  * TemplateBody `string`
  * TemplateURL `string`
  * StackName `string`
  * StackSetName `string`

#### Output
* output [GetTemplateSummaryOutput](#gettemplatesummaryoutput)

### GetTemplateSummary



```js
amazonaws_cloudformation.GetTemplateSummary({}, context)
```

#### Input
* input `object`
  * StackName
  * StackSetName
  * TemplateBody
  * TemplateURL

#### Output
* output [GetTemplateSummaryOutput](#gettemplatesummaryoutput)

### ListChangeSets



```js
amazonaws_cloudformation.ListChangeSets({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * NextToken `string`

#### Output
* output [ListChangeSetsOutput](#listchangesetsoutput)

### ListChangeSets



```js
amazonaws_cloudformation.ListChangeSets({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken
  * StackName **required**

#### Output
* output [ListChangeSetsOutput](#listchangesetsoutput)

### ListExports



```js
amazonaws_cloudformation.ListExports({}, context)
```

#### Input
* input `object`
  * NextToken `string`

#### Output
* output [ListExportsOutput](#listexportsoutput)

### ListExports



```js
amazonaws_cloudformation.ListExports({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken

#### Output
* output [ListExportsOutput](#listexportsoutput)

### ListImports



```js
amazonaws_cloudformation.ListImports({
  "ExportName": ""
}, context)
```

#### Input
* input `object`
  * ExportName **required** `string`
  * NextToken `string`

#### Output
* output [ListImportsOutput](#listimportsoutput)

### ListImports



```js
amazonaws_cloudformation.ListImports({
  "ExportName": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * ExportName **required**
  * NextToken

#### Output
* output [ListImportsOutput](#listimportsoutput)

### ListStackInstances



```js
amazonaws_cloudformation.ListStackInstances({
  "StackSetName": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * NextToken `string`
  * MaxResults `integer`
  * Filters `array`
  * StackInstanceAccount `string`
  * StackInstanceRegion `string`

#### Output
* output [ListStackInstancesOutput](#liststackinstancesoutput)

### ListStackInstances



```js
amazonaws_cloudformation.ListStackInstances({
  "StackSetName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [StackInstanceFilter](#stackinstancefilter)
  * MaxResults
  * NextToken
  * StackInstanceAccount
  * StackInstanceRegion
  * StackSetName **required**

#### Output
* output [ListStackInstancesOutput](#liststackinstancesoutput)

### ListStackResources



```js
amazonaws_cloudformation.ListStackResources({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * NextToken `string`

#### Output
* output [ListStackResourcesOutput](#liststackresourcesoutput)

### ListStackResources



```js
amazonaws_cloudformation.ListStackResources({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken
  * StackName **required**

#### Output
* output [ListStackResourcesOutput](#liststackresourcesoutput)

### ListStackSetOperationResults



```js
amazonaws_cloudformation.ListStackSetOperationResults({
  "StackSetName": "",
  "OperationId": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * OperationId **required** `string`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListStackSetOperationResultsOutput](#liststacksetoperationresultsoutput)

### ListStackSetOperationResults



```js
amazonaws_cloudformation.ListStackSetOperationResults({
  "StackSetName": null,
  "OperationId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * OperationId **required**
  * StackSetName **required**

#### Output
* output [ListStackSetOperationResultsOutput](#liststacksetoperationresultsoutput)

### ListStackSetOperations



```js
amazonaws_cloudformation.ListStackSetOperations({
  "StackSetName": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListStackSetOperationsOutput](#liststacksetoperationsoutput)

### ListStackSetOperations



```js
amazonaws_cloudformation.ListStackSetOperations({
  "StackSetName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * StackSetName **required**

#### Output
* output [ListStackSetOperationsOutput](#liststacksetoperationsoutput)

### ListStackSets



```js
amazonaws_cloudformation.ListStackSets({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`
  * Status `string`

#### Output
* output [ListStackSetsOutput](#liststacksetsoutput)

### ListStackSets



```js
amazonaws_cloudformation.ListStackSets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * Status

#### Output
* output [ListStackSetsOutput](#liststacksetsoutput)

### ListStacks



```js
amazonaws_cloudformation.ListStacks({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * StackStatusFilter `array`

#### Output
* output [ListStacksOutput](#liststacksoutput)

### ListStacks



```js
amazonaws_cloudformation.ListStacks({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken
  * StackStatusFilter
    * items [StackStatus](#stackstatus)

#### Output
* output [ListStacksOutput](#liststacksoutput)

### ListTypeRegistrations



```js
amazonaws_cloudformation.ListTypeRegistrations({}, context)
```

#### Input
* input `object`
  * Type `string`
  * TypeName `string`
  * TypeArn `string`
  * RegistrationStatusFilter `string`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListTypeRegistrationsOutput](#listtyperegistrationsoutput)

### ListTypeRegistrations



```js
amazonaws_cloudformation.ListTypeRegistrations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * RegistrationStatusFilter
  * Type
  * TypeArn
  * TypeName

#### Output
* output [ListTypeRegistrationsOutput](#listtyperegistrationsoutput)

### ListTypeVersions



```js
amazonaws_cloudformation.ListTypeVersions({}, context)
```

#### Input
* input `object`
  * Type `string`
  * TypeName `string`
  * Arn `string`
  * MaxResults `integer`
  * NextToken `string`
  * DeprecatedStatus `string`

#### Output
* output [ListTypeVersionsOutput](#listtypeversionsoutput)

### ListTypeVersions



```js
amazonaws_cloudformation.ListTypeVersions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Arn
  * DeprecatedStatus
  * MaxResults
  * NextToken
  * Type
  * TypeName

#### Output
* output [ListTypeVersionsOutput](#listtypeversionsoutput)

### ListTypes



```js
amazonaws_cloudformation.ListTypes({}, context)
```

#### Input
* input `object`
  * Visibility `string`
  * ProvisioningType `string`
  * DeprecatedStatus `string`
  * Type `string`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListTypesOutput](#listtypesoutput)

### ListTypes



```js
amazonaws_cloudformation.ListTypes({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DeprecatedStatus
  * MaxResults
  * NextToken
  * ProvisioningType
  * Type
  * Visibility

#### Output
* output [ListTypesOutput](#listtypesoutput)

### RecordHandlerProgress



```js
amazonaws_cloudformation.RecordHandlerProgress({
  "BearerToken": "",
  "OperationStatus": ""
}, context)
```

#### Input
* input `object`
  * BearerToken **required** `string`
  * OperationStatus **required** `string`
  * CurrentOperationStatus `string`
  * StatusMessage `string`
  * ErrorCode `string`
  * ResourceModel `string`
  * ClientRequestToken `string`

#### Output
* output [RecordHandlerProgressOutput](#recordhandlerprogressoutput)

### RecordHandlerProgress



```js
amazonaws_cloudformation.RecordHandlerProgress({
  "BearerToken": null,
  "OperationStatus": null
}, context)
```

#### Input
* input `object`
  * BearerToken **required**
  * ClientRequestToken
  * CurrentOperationStatus
  * ErrorCode
  * OperationStatus **required**
  * ResourceModel
  * StatusMessage

#### Output
* output [RecordHandlerProgressOutput](#recordhandlerprogressoutput)

### RegisterType



```js
amazonaws_cloudformation.RegisterType({
  "TypeName": "",
  "SchemaHandlerPackage": ""
}, context)
```

#### Input
* input `object`
  * Type `string`
  * TypeName **required** `string`
  * SchemaHandlerPackage **required** `string`
  * LoggingConfig `object`
  * ExecutionRoleArn `string`
  * ClientRequestToken `string`

#### Output
* output [RegisterTypeOutput](#registertypeoutput)

### RegisterType



```js
amazonaws_cloudformation.RegisterType({
  "TypeName": null,
  "SchemaHandlerPackage": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * ExecutionRoleArn
  * LoggingConfig
    * LogGroupName **required**
    * LogRoleArn **required**
  * SchemaHandlerPackage **required**
  * Type
  * TypeName **required**

#### Output
* output [RegisterTypeOutput](#registertypeoutput)

### SetStackPolicy



```js
amazonaws_cloudformation.SetStackPolicy({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * StackPolicyBody `string`
  * StackPolicyURL `string`

#### Output
*Output schema unknown*

### SetStackPolicy



```js
amazonaws_cloudformation.SetStackPolicy({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * StackName **required**
  * StackPolicyBody
  * StackPolicyURL

#### Output
*Output schema unknown*

### SetTypeDefaultVersion



```js
amazonaws_cloudformation.SetTypeDefaultVersion({}, context)
```

#### Input
* input `object`
  * Arn `string`
  * Type `string`
  * TypeName `string`
  * VersionId `string`

#### Output
* output [SetTypeDefaultVersionOutput](#settypedefaultversionoutput)

### SetTypeDefaultVersion



```js
amazonaws_cloudformation.SetTypeDefaultVersion({}, context)
```

#### Input
* input `object`
  * Arn
  * Type
  * TypeName
  * VersionId

#### Output
* output [SetTypeDefaultVersionOutput](#settypedefaultversionoutput)

### SignalResource



```js
amazonaws_cloudformation.SignalResource({
  "StackName": "",
  "LogicalResourceId": "",
  "UniqueId": "",
  "Status": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * LogicalResourceId **required** `string`
  * UniqueId **required** `string`
  * Status **required** `string`

#### Output
*Output schema unknown*

### SignalResource



```js
amazonaws_cloudformation.SignalResource({
  "StackName": null,
  "LogicalResourceId": null,
  "UniqueId": null,
  "Status": null
}, context)
```

#### Input
* input `object`
  * LogicalResourceId **required**
  * StackName **required**
  * Status **required**
  * UniqueId **required**

#### Output
*Output schema unknown*

### StopStackSetOperation



```js
amazonaws_cloudformation.StopStackSetOperation({
  "StackSetName": "",
  "OperationId": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * OperationId **required** `string`

#### Output
* output [StopStackSetOperationOutput](#stopstacksetoperationoutput)

### StopStackSetOperation



```js
amazonaws_cloudformation.StopStackSetOperation({
  "StackSetName": null,
  "OperationId": null
}, context)
```

#### Input
* input `object`
  * OperationId **required**
  * StackSetName **required**

#### Output
* output [StopStackSetOperationOutput](#stopstacksetoperationoutput)

### UpdateStack



```js
amazonaws_cloudformation.UpdateStack({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** `string`
  * TemplateBody `string`
  * TemplateURL `string`
  * UsePreviousTemplate `boolean`
  * StackPolicyDuringUpdateBody `string`
  * StackPolicyDuringUpdateURL `string`
  * Parameters `array`
  * Capabilities `array`
  * ResourceTypes `array`
  * RoleARN `string`
  * RollbackConfiguration `object`
  * StackPolicyBody `string`
  * StackPolicyURL `string`
  * NotificationARNs `array`
  * Tags `array`
  * ClientRequestToken `string`

#### Output
* output [UpdateStackOutput](#updatestackoutput)

### UpdateStack



```js
amazonaws_cloudformation.UpdateStack({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * Capabilities
    * items [Capability](#capability)
  * ClientRequestToken
  * NotificationARNs
    * items [NotificationARN](#notificationarn)
  * Parameters
    * items [Parameter](#parameter)
  * ResourceTypes
    * items [ResourceType](#resourcetype)
  * RoleARN
  * RollbackConfiguration
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * StackName **required**
  * StackPolicyBody
  * StackPolicyDuringUpdateBody
  * StackPolicyDuringUpdateURL
  * StackPolicyURL
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL
  * UsePreviousTemplate

#### Output
* output [UpdateStackOutput](#updatestackoutput)

### UpdateStackInstances



```js
amazonaws_cloudformation.UpdateStackInstances({
  "StackSetName": "",
  "Regions": []
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * Accounts `array`
  * DeploymentTargets `object`
  * Regions **required** `array`
  * ParameterOverrides `array`
  * OperationPreferences `object`
  * OperationId `string`

#### Output
* output [UpdateStackInstancesOutput](#updatestackinstancesoutput)

### UpdateStackInstances



```js
amazonaws_cloudformation.UpdateStackInstances({
  "StackSetName": null,
  "Regions": null
}, context)
```

#### Input
* input `object`
  * Accounts
    * items [Account](#account)
  * DeploymentTargets
    * Accounts
      * items [Account](#account)
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
  * OperationId
  * OperationPreferences
    * FailureToleranceCount
    * FailureTolerancePercentage
    * MaxConcurrentCount
    * MaxConcurrentPercentage
    * RegionOrder
      * items [Region](#region)
  * ParameterOverrides
    * items [Parameter](#parameter)
  * Regions **required**
    * items [Region](#region)
  * StackSetName **required**

#### Output
* output [UpdateStackInstancesOutput](#updatestackinstancesoutput)

### UpdateStackSet



```js
amazonaws_cloudformation.UpdateStackSet({
  "StackSetName": ""
}, context)
```

#### Input
* input `object`
  * StackSetName **required** `string`
  * Description `string`
  * TemplateBody `string`
  * TemplateURL `string`
  * UsePreviousTemplate `boolean`
  * Parameters `array`
  * Capabilities `array`
  * Tags `array`
  * OperationPreferences `object`
  * AdministrationRoleARN `string`
  * ExecutionRoleName `string`
  * DeploymentTargets `object`
  * PermissionModel `string`
  * AutoDeployment `object`
  * OperationId `string`
  * Accounts `array`
  * Regions `array`

#### Output
* output [UpdateStackSetOutput](#updatestacksetoutput)

### UpdateStackSet



```js
amazonaws_cloudformation.UpdateStackSet({
  "StackSetName": null
}, context)
```

#### Input
* input `object`
  * Accounts
    * items [Account](#account)
  * AdministrationRoleARN
  * AutoDeployment
    * Enabled
    * RetainStacksOnAccountRemoval
  * Capabilities
    * items [Capability](#capability)
  * DeploymentTargets
    * Accounts
      * items [Account](#account)
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
  * Description
  * ExecutionRoleName
  * OperationId
  * OperationPreferences
    * FailureToleranceCount
    * FailureTolerancePercentage
    * MaxConcurrentCount
    * MaxConcurrentPercentage
    * RegionOrder
      * items [Region](#region)
  * Parameters
    * items [Parameter](#parameter)
  * PermissionModel
  * Regions
    * items [Region](#region)
  * StackSetName **required**
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL
  * UsePreviousTemplate

#### Output
* output [UpdateStackSetOutput](#updatestacksetoutput)

### UpdateTerminationProtection



```js
amazonaws_cloudformation.UpdateTerminationProtection({
  "EnableTerminationProtection": true,
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * EnableTerminationProtection **required** `boolean`
  * StackName **required** `string`

#### Output
* output [UpdateTerminationProtectionOutput](#updateterminationprotectionoutput)

### UpdateTerminationProtection



```js
amazonaws_cloudformation.UpdateTerminationProtection({
  "EnableTerminationProtection": null,
  "StackName": null
}, context)
```

#### Input
* input `object`
  * EnableTerminationProtection **required**
  * StackName **required**

#### Output
* output [UpdateTerminationProtectionOutput](#updateterminationprotectionoutput)

### ValidateTemplate



```js
amazonaws_cloudformation.ValidateTemplate({}, context)
```

#### Input
* input `object`
  * TemplateBody `string`
  * TemplateURL `string`

#### Output
* output [ValidateTemplateOutput](#validatetemplateoutput)

### ValidateTemplate



```js
amazonaws_cloudformation.ValidateTemplate({}, context)
```

#### Input
* input `object`
  * TemplateBody
  * TemplateURL

#### Output
* output [ValidateTemplateOutput](#validatetemplateoutput)



## Definitions

### Account
* Account `string`

### AccountGateResult
* AccountGateResult `object`: <p>Structure that contains the results of the account gate function which AWS CloudFormation invokes, if present, before proceeding with a stack set operation in an account and Region.</p> <p>For each account and Region, AWS CloudFormation lets you specify a Lamdba function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and Region. CloudFormation invokes the function each time a stack set operation is requested for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and Region, and sets the stack set operation result status for that account and Region to <code>FAILED</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p>
  * Status
  * StatusReason

### AccountGateStatus
* AccountGateStatus `string` (values: SUCCEEDED, FAILED, SKIPPED)

### AccountGateStatusReason
* AccountGateStatusReason `string`

### AccountLimit
* AccountLimit `object`: <p>The AccountLimit data type. </p> <p>CloudFormation has the following limits per account:</p> <ul> <li> <p>Number of concurrent resources</p> </li> <li> <p>Number of stacks</p> </li> <li> <p>Number of stack outputs</p> </li> </ul> <p>For more information about these account limits, and other CloudFormation limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
  * Name
  * Value

### AccountLimitList
* AccountLimitList `array`
  * items [AccountLimit](#accountlimit)

### AccountList
* AccountList `array`
  * items [Account](#account)

### AllowedValue
* AllowedValue `string`

### AllowedValues
* AllowedValues `array`
  * items [AllowedValue](#allowedvalue)

### AlreadyExistsException


### Arn
* Arn `string`

### AutoDeployment
* AutoDeployment `object`: [<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU).
  * Enabled
  * RetainStacksOnAccountRemoval

### AutoDeploymentNullable
* AutoDeploymentNullable `boolean`

### BoxedInteger
* BoxedInteger `integer`

### BoxedMaxResults
* BoxedMaxResults `integer`

### CFNRegistryException


### CancelUpdateStackInput
* CancelUpdateStackInput `object`: The input for the <a>CancelUpdateStack</a> action.
  * ClientRequestToken
  * StackName **required**

### Capabilities
* Capabilities `array`
  * items [Capability](#capability)

### CapabilitiesReason
* CapabilitiesReason `string`

### Capability
* Capability `string` (values: CAPABILITY_IAM, CAPABILITY_NAMED_IAM, CAPABILITY_AUTO_EXPAND)

### CausingEntity
* CausingEntity `string`

### Change
* Change `object`: The <code>Change</code> structure describes the changes AWS CloudFormation will perform if you execute the change set.
  * ResourceChange
    * Action
    * ChangeSetId
    * Details
      * items [ResourceChangeDetail](#resourcechangedetail)
    * LogicalResourceId
    * ModuleInfo
      * LogicalIdHierarchy
      * TypeHierarchy
    * PhysicalResourceId
    * Replacement
    * ResourceType
    * Scope
      * items [ResourceAttribute](#resourceattribute)
  * Type

### ChangeAction
* ChangeAction `string` (values: Add, Modify, Remove, Import, Dynamic)

### ChangeSetId
* ChangeSetId `string`

### ChangeSetName
* ChangeSetName `string`

### ChangeSetNameOrId
* ChangeSetNameOrId `string`

### ChangeSetNotFoundException


### ChangeSetStatus
* ChangeSetStatus `string` (values: CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_COMPLETE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_COMPLETE, DELETE_FAILED, FAILED)

### ChangeSetStatusReason
* ChangeSetStatusReason `string`

### ChangeSetSummaries
* ChangeSetSummaries `array`
  * items [ChangeSetSummary](#changesetsummary)

### ChangeSetSummary
* ChangeSetSummary `object`: The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated.
  * ChangeSetId
  * ChangeSetName
  * CreationTime
  * Description
  * ExecutionStatus
  * IncludeNestedStacks
  * ParentChangeSetId
  * RootChangeSetId
  * StackId
  * StackName
  * Status
  * StatusReason

### ChangeSetType
* ChangeSetType `string` (values: CREATE, UPDATE, IMPORT)

### ChangeSource
* ChangeSource `string` (values: ResourceReference, ParameterReference, ResourceAttribute, DirectModification, Automatic)

### ChangeType
* ChangeType `string` (values: Resource)

### Changes
* Changes `array`
  * items [Change](#change)

### ClientRequestToken
* ClientRequestToken `string`

### ClientToken
* ClientToken `string`

### ContinueUpdateRollbackInput
* ContinueUpdateRollbackInput `object`: The input for the <a>ContinueUpdateRollback</a> action.
  * ClientRequestToken
  * ResourcesToSkip
    * items [ResourceToSkip](#resourcetoskip)
  * RoleARN
  * StackName **required**

### ContinueUpdateRollbackOutput
* ContinueUpdateRollbackOutput `object`: The output for a <a>ContinueUpdateRollback</a> action.

### CreateChangeSetInput
* CreateChangeSetInput `object`: The input for the <a>CreateChangeSet</a> action.
  * Capabilities
    * items [Capability](#capability)
  * ChangeSetName **required**
  * ChangeSetType
  * ClientToken
  * Description
  * IncludeNestedStacks
  * NotificationARNs
    * items [NotificationARN](#notificationarn)
  * Parameters
    * items [Parameter](#parameter)
  * ResourceTypes
    * items [ResourceType](#resourcetype)
  * ResourcesToImport
    * items [ResourceToImport](#resourcetoimport)
  * RoleARN
  * RollbackConfiguration
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * StackName **required**
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL
  * UsePreviousTemplate

### CreateChangeSetOutput
* CreateChangeSetOutput `object`: The output for the <a>CreateChangeSet</a> action.
  * Id
  * StackId

### CreateStackInput
* CreateStackInput `object`: The input for <a>CreateStack</a> action.
  * Capabilities
    * items [Capability](#capability)
  * ClientRequestToken
  * DisableRollback
  * EnableTerminationProtection
  * NotificationARNs
    * items [NotificationARN](#notificationarn)
  * OnFailure
  * Parameters
    * items [Parameter](#parameter)
  * ResourceTypes
    * items [ResourceType](#resourcetype)
  * RoleARN
  * RollbackConfiguration
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * StackName **required**
  * StackPolicyBody
  * StackPolicyURL
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL
  * TimeoutInMinutes

### CreateStackInstancesInput
* CreateStackInstancesInput `object`
  * Accounts
    * items [Account](#account)
  * DeploymentTargets
    * Accounts
      * items [Account](#account)
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
  * OperationId
  * OperationPreferences
    * FailureToleranceCount
    * FailureTolerancePercentage
    * MaxConcurrentCount
    * MaxConcurrentPercentage
    * RegionOrder
      * items [Region](#region)
  * ParameterOverrides
    * items [Parameter](#parameter)
  * Regions **required**
    * items [Region](#region)
  * StackSetName **required**

### CreateStackInstancesOutput
* CreateStackInstancesOutput `object`
  * OperationId

### CreateStackOutput
* CreateStackOutput `object`: The output for a <a>CreateStack</a> action.
  * StackId

### CreateStackSetInput
* CreateStackSetInput `object`
  * AdministrationRoleARN
  * AutoDeployment
    * Enabled
    * RetainStacksOnAccountRemoval
  * Capabilities
    * items [Capability](#capability)
  * ClientRequestToken
  * Description
  * ExecutionRoleName
  * Parameters
    * items [Parameter](#parameter)
  * PermissionModel
  * StackSetName **required**
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL

### CreateStackSetOutput
* CreateStackSetOutput `object`
  * StackSetId

### CreatedButModifiedException


### CreationTime
* CreationTime `string`

### DeleteChangeSetInput
* DeleteChangeSetInput `object`: The input for the <a>DeleteChangeSet</a> action.
  * ChangeSetName **required**
  * StackName

### DeleteChangeSetOutput
* DeleteChangeSetOutput `object`: The output for the <a>DeleteChangeSet</a> action.

### DeleteStackInput
* DeleteStackInput `object`: The input for <a>DeleteStack</a> action.
  * ClientRequestToken
  * RetainResources
    * items [LogicalResourceId](#logicalresourceid)
  * RoleARN
  * StackName **required**

### DeleteStackInstancesInput
* DeleteStackInstancesInput `object`
  * Accounts
    * items [Account](#account)
  * DeploymentTargets
    * Accounts
      * items [Account](#account)
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
  * OperationId
  * OperationPreferences
    * FailureToleranceCount
    * FailureTolerancePercentage
    * MaxConcurrentCount
    * MaxConcurrentPercentage
    * RegionOrder
      * items [Region](#region)
  * Regions **required**
    * items [Region](#region)
  * RetainStacks **required**
  * StackSetName **required**

### DeleteStackInstancesOutput
* DeleteStackInstancesOutput `object`
  * OperationId

### DeleteStackSetInput
* DeleteStackSetInput `object`
  * StackSetName **required**

### DeleteStackSetOutput
* DeleteStackSetOutput `object`

### DeletionTime
* DeletionTime `string`

### DeploymentTargets
* DeploymentTargets `object`: <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p>
  * Accounts
    * items [Account](#account)
  * OrganizationalUnitIds
    * items [OrganizationalUnitId](#organizationalunitid)

### DeprecatedStatus
* DeprecatedStatus `string` (values: LIVE, DEPRECATED)

### DeregisterTypeInput
* DeregisterTypeInput `object`
  * Arn
  * Type
  * TypeName
  * VersionId

### DeregisterTypeOutput
* DeregisterTypeOutput `object`

### DescribeAccountLimitsInput
* DescribeAccountLimitsInput `object`: The input for the <a>DescribeAccountLimits</a> action.
  * NextToken

### DescribeAccountLimitsOutput
* DescribeAccountLimitsOutput `object`: The output for the <a>DescribeAccountLimits</a> action.
  * AccountLimits
    * items [AccountLimit](#accountlimit)
  * NextToken

### DescribeChangeSetInput
* DescribeChangeSetInput `object`: The input for the <a>DescribeChangeSet</a> action.
  * ChangeSetName **required**
  * NextToken
  * StackName

### DescribeChangeSetOutput
* DescribeChangeSetOutput `object`: The output for the <a>DescribeChangeSet</a> action.
  * Capabilities
    * items [Capability](#capability)
  * ChangeSetId
  * ChangeSetName
  * Changes
    * items [Change](#change)
  * CreationTime
  * Description
  * ExecutionStatus
  * IncludeNestedStacks
  * NextToken
  * NotificationARNs
    * items [NotificationARN](#notificationarn)
  * Parameters
    * items [Parameter](#parameter)
  * ParentChangeSetId
  * RollbackConfiguration
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * RootChangeSetId
  * StackId
  * StackName
  * Status
  * StatusReason
  * Tags
    * items [Tag](#tag)

### DescribeStackDriftDetectionStatusInput
* DescribeStackDriftDetectionStatusInput `object`
  * StackDriftDetectionId **required**

### DescribeStackDriftDetectionStatusOutput
* DescribeStackDriftDetectionStatusOutput `object`
  * DetectionStatus **required**
  * DetectionStatusReason
  * DriftedStackResourceCount
  * StackDriftDetectionId **required**
  * StackDriftStatus
  * StackId **required**
  * Timestamp **required**

### DescribeStackEventsInput
* DescribeStackEventsInput `object`: The input for <a>DescribeStackEvents</a> action.
  * NextToken
  * StackName

### DescribeStackEventsOutput
* DescribeStackEventsOutput `object`: The output for a <a>DescribeStackEvents</a> action.
  * NextToken
  * StackEvents
    * items [StackEvent](#stackevent)

### DescribeStackInstanceInput
* DescribeStackInstanceInput `object`
  * StackInstanceAccount **required**
  * StackInstanceRegion **required**
  * StackSetName **required**

### DescribeStackInstanceOutput
* DescribeStackInstanceOutput `object`
  * StackInstance
    * Account
    * DriftStatus
    * LastDriftCheckTimestamp
    * OrganizationalUnitId
    * ParameterOverrides
      * items [Parameter](#parameter)
    * Region
    * StackId
    * StackInstanceStatus
      * DetailedStatus
    * StackSetId
    * Status
    * StatusReason

### DescribeStackResourceDriftsInput
* DescribeStackResourceDriftsInput `object`
  * MaxResults
  * NextToken
  * StackName **required**
  * StackResourceDriftStatusFilters
    * items [StackResourceDriftStatus](#stackresourcedriftstatus)

### DescribeStackResourceDriftsOutput
* DescribeStackResourceDriftsOutput `object`
  * NextToken
  * StackResourceDrifts **required**
    * items [StackResourceDrift](#stackresourcedrift)

### DescribeStackResourceInput
* DescribeStackResourceInput `object`: The input for <a>DescribeStackResource</a> action.
  * LogicalResourceId **required**
  * StackName **required**

### DescribeStackResourceOutput
* DescribeStackResourceOutput `object`: The output for a <a>DescribeStackResource</a> action.
  * StackResourceDetail
    * Description
    * DriftInformation
      * LastCheckTimestamp
      * StackResourceDriftStatus **required**
    * LastUpdatedTimestamp **required**
    * LogicalResourceId **required**
    * Metadata
    * ModuleInfo
      * LogicalIdHierarchy
      * TypeHierarchy
    * PhysicalResourceId
    * ResourceStatus **required**
    * ResourceStatusReason
    * ResourceType **required**
    * StackId
    * StackName

### DescribeStackResourcesInput
* DescribeStackResourcesInput `object`: The input for <a>DescribeStackResources</a> action.
  * LogicalResourceId
  * PhysicalResourceId
  * StackName

### DescribeStackResourcesOutput
* DescribeStackResourcesOutput `object`: The output for a <a>DescribeStackResources</a> action.
  * StackResources
    * items [StackResource](#stackresource)

### DescribeStackSetInput
* DescribeStackSetInput `object`
  * StackSetName **required**

### DescribeStackSetOperationInput
* DescribeStackSetOperationInput `object`
  * OperationId **required**
  * StackSetName **required**

### DescribeStackSetOperationOutput
* DescribeStackSetOperationOutput `object`
  * StackSetOperation
    * Action
    * AdministrationRoleARN
    * CreationTimestamp
    * DeploymentTargets
      * Accounts
        * items [Account](#account)
      * OrganizationalUnitIds
        * items [OrganizationalUnitId](#organizationalunitid)
    * EndTimestamp
    * ExecutionRoleName
    * OperationId
    * OperationPreferences
      * FailureToleranceCount
      * FailureTolerancePercentage
      * MaxConcurrentCount
      * MaxConcurrentPercentage
      * RegionOrder
        * items [Region](#region)
    * RetainStacks
    * StackSetDriftDetectionDetails
      * DriftDetectionStatus
      * DriftStatus
      * DriftedStackInstancesCount
      * FailedStackInstancesCount
      * InProgressStackInstancesCount
      * InSyncStackInstancesCount
      * LastDriftCheckTimestamp
      * TotalStackInstancesCount
    * StackSetId
    * Status

### DescribeStackSetOutput
* DescribeStackSetOutput `object`
  * StackSet
    * AdministrationRoleARN
    * AutoDeployment
      * Enabled
      * RetainStacksOnAccountRemoval
    * Capabilities
      * items [Capability](#capability)
    * Description
    * ExecutionRoleName
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
    * Parameters
      * items [Parameter](#parameter)
    * PermissionModel
    * StackSetARN
    * StackSetDriftDetectionDetails
      * DriftDetectionStatus
      * DriftStatus
      * DriftedStackInstancesCount
      * FailedStackInstancesCount
      * InProgressStackInstancesCount
      * InSyncStackInstancesCount
      * LastDriftCheckTimestamp
      * TotalStackInstancesCount
    * StackSetId
    * StackSetName
    * Status
    * Tags
      * items [Tag](#tag)
    * TemplateBody

### DescribeStacksInput
* DescribeStacksInput `object`: The input for <a>DescribeStacks</a> action.
  * NextToken
  * StackName

### DescribeStacksOutput
* DescribeStacksOutput `object`: The output for a <a>DescribeStacks</a> action.
  * NextToken
  * Stacks
    * items [Stack](#stack)

### DescribeTypeInput
* DescribeTypeInput `object`
  * Arn
  * Type
  * TypeName
  * VersionId

### DescribeTypeOutput
* DescribeTypeOutput `object`
  * Arn
  * DefaultVersionId
  * DeprecatedStatus
  * Description
  * DocumentationUrl
  * ExecutionRoleArn
  * IsDefaultVersion
  * LastUpdated
  * LoggingConfig
    * LogGroupName **required**
    * LogRoleArn **required**
  * ProvisioningType
  * Schema
  * SourceUrl
  * TimeCreated
  * Type
  * TypeName
  * Visibility

### DescribeTypeRegistrationInput
* DescribeTypeRegistrationInput `object`
  * RegistrationToken **required**

### DescribeTypeRegistrationOutput
* DescribeTypeRegistrationOutput `object`
  * Description
  * ProgressStatus
  * TypeArn
  * TypeVersionArn

### Description
* Description `string`

### DetectStackDriftInput
* DetectStackDriftInput `object`
  * LogicalResourceIds
    * items [LogicalResourceId](#logicalresourceid)
  * StackName **required**

### DetectStackDriftOutput
* DetectStackDriftOutput `object`
  * StackDriftDetectionId **required**

### DetectStackResourceDriftInput
* DetectStackResourceDriftInput `object`
  * LogicalResourceId **required**
  * StackName **required**

### DetectStackResourceDriftOutput
* DetectStackResourceDriftOutput `object`
  * StackResourceDrift **required**
    * ActualProperties
    * ExpectedProperties
    * LogicalResourceId **required**
    * ModuleInfo
      * LogicalIdHierarchy
      * TypeHierarchy
    * PhysicalResourceId
    * PhysicalResourceIdContext
      * items [PhysicalResourceIdContextKeyValuePair](#physicalresourceidcontextkeyvaluepair)
    * PropertyDifferences
      * items [PropertyDifference](#propertydifference)
    * ResourceType **required**
    * StackId **required**
    * StackResourceDriftStatus **required**
    * Timestamp **required**

### DetectStackSetDriftInput
* DetectStackSetDriftInput `object`
  * OperationId
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * StackSetName **required**

### DetectStackSetDriftOutput
* DetectStackSetDriftOutput `object`
  * OperationId

### DifferenceType
* DifferenceType `string` (values: ADD, REMOVE, NOT_EQUAL)

### DisableRollback
* DisableRollback `boolean`

### DriftedStackInstancesCount
* DriftedStackInstancesCount `integer`

### EnableTerminationProtection
* EnableTerminationProtection `boolean`

### EstimateTemplateCostInput
* EstimateTemplateCostInput `object`: The input for an <a>EstimateTemplateCost</a> action.
  * Parameters
    * items [Parameter](#parameter)
  * TemplateBody
  * TemplateURL

### EstimateTemplateCostOutput
* EstimateTemplateCostOutput `object`: The output for a <a>EstimateTemplateCost</a> action.
  * Url

### EvaluationType
* EvaluationType `string` (values: Static, Dynamic)

### EventId
* EventId `string`

### ExecuteChangeSetInput
* ExecuteChangeSetInput `object`: The input for the <a>ExecuteChangeSet</a> action.
  * ChangeSetName **required**
  * ClientRequestToken
  * StackName

### ExecuteChangeSetOutput
* ExecuteChangeSetOutput `object`: The output for the <a>ExecuteChangeSet</a> action.

### ExecutionRoleName
* ExecutionRoleName `string`

### ExecutionStatus
* ExecutionStatus `string` (values: UNAVAILABLE, AVAILABLE, EXECUTE_IN_PROGRESS, EXECUTE_COMPLETE, EXECUTE_FAILED, OBSOLETE)

### Export
* Export `object`: The <code>Export</code> structure describes the exported output values for a stack.
  * ExportingStackId
  * Name
  * Value

### ExportName
* ExportName `string`

### ExportValue
* ExportValue `string`

### Exports
* Exports `array`
  * items [Export](#export)

### FailedStackInstancesCount
* FailedStackInstancesCount `integer`

### FailureToleranceCount
* FailureToleranceCount `integer`

### FailureTolerancePercentage
* FailureTolerancePercentage `integer`

### GetStackPolicyInput
* GetStackPolicyInput `object`: The input for the <a>GetStackPolicy</a> action.
  * StackName **required**

### GetStackPolicyOutput
* GetStackPolicyOutput `object`: The output for the <a>GetStackPolicy</a> action.
  * StackPolicyBody

### GetTemplateInput
* GetTemplateInput `object`: The input for a <a>GetTemplate</a> action.
  * ChangeSetName
  * StackName
  * TemplateStage

### GetTemplateOutput
* GetTemplateOutput `object`: The output for <a>GetTemplate</a> action.
  * StagesAvailable
    * items [TemplateStage](#templatestage)
  * TemplateBody

### GetTemplateSummaryInput
* GetTemplateSummaryInput `object`: The input for the <a>GetTemplateSummary</a> action.
  * StackName
  * StackSetName
  * TemplateBody
  * TemplateURL

### GetTemplateSummaryOutput
* GetTemplateSummaryOutput `object`: The output for the <a>GetTemplateSummary</a> action.
  * Capabilities
    * items [Capability](#capability)
  * CapabilitiesReason
  * DeclaredTransforms
    * items [TransformName](#transformname)
  * Description
  * Metadata
  * Parameters
    * items [ParameterDeclaration](#parameterdeclaration)
  * ResourceIdentifierSummaries
    * items [ResourceIdentifierSummary](#resourceidentifiersummary)
  * ResourceTypes
    * items [ResourceType](#resourcetype)
  * Version

### HandlerErrorCode
* HandlerErrorCode `string` (values: NotUpdatable, InvalidRequest, AccessDenied, InvalidCredentials, AlreadyExists, NotFound, ResourceConflict, Throttling, ServiceLimitExceeded, NotStabilized, GeneralServiceException, ServiceInternalError, NetworkFailure, InternalFailure)

### Imports
* Imports `array`
  * items [StackName](#stackname)

### InProgressStackInstancesCount
* InProgressStackInstancesCount `integer`

### InSyncStackInstancesCount
* InSyncStackInstancesCount `integer`

### IncludeNestedStacks
* IncludeNestedStacks `boolean`

### InsufficientCapabilitiesException


### InvalidChangeSetStatusException


### InvalidOperationException


### InvalidStateTransitionException


### IsDefaultVersion
* IsDefaultVersion `boolean`

### Key
* Key `string`

### LastUpdatedTime
* LastUpdatedTime `string`

### LimitExceededException


### LimitName
* LimitName `string`

### LimitValue
* LimitValue `integer`

### ListChangeSetsInput
* ListChangeSetsInput `object`: The input for the <a>ListChangeSets</a> action.
  * NextToken
  * StackName **required**

### ListChangeSetsOutput
* ListChangeSetsOutput `object`: The output for the <a>ListChangeSets</a> action.
  * NextToken
  * Summaries
    * items [ChangeSetSummary](#changesetsummary)

### ListExportsInput
* ListExportsInput `object`
  * NextToken

### ListExportsOutput
* ListExportsOutput `object`
  * Exports
    * items [Export](#export)
  * NextToken

### ListImportsInput
* ListImportsInput `object`
  * ExportName **required**
  * NextToken

### ListImportsOutput
* ListImportsOutput `object`
  * Imports
    * items [StackName](#stackname)
  * NextToken

### ListStackInstancesInput
* ListStackInstancesInput `object`
  * Filters
    * items [StackInstanceFilter](#stackinstancefilter)
  * MaxResults
  * NextToken
  * StackInstanceAccount
  * StackInstanceRegion
  * StackSetName **required**

### ListStackInstancesOutput
* ListStackInstancesOutput `object`
  * NextToken
  * Summaries
    * items [StackInstanceSummary](#stackinstancesummary)

### ListStackResourcesInput
* ListStackResourcesInput `object`: The input for the <a>ListStackResource</a> action.
  * NextToken
  * StackName **required**

### ListStackResourcesOutput
* ListStackResourcesOutput `object`: The output for a <a>ListStackResources</a> action.
  * NextToken
  * StackResourceSummaries
    * items [StackResourceSummary](#stackresourcesummary)

### ListStackSetOperationResultsInput
* ListStackSetOperationResultsInput `object`
  * MaxResults
  * NextToken
  * OperationId **required**
  * StackSetName **required**

### ListStackSetOperationResultsOutput
* ListStackSetOperationResultsOutput `object`
  * NextToken
  * Summaries
    * items [StackSetOperationResultSummary](#stacksetoperationresultsummary)

### ListStackSetOperationsInput
* ListStackSetOperationsInput `object`
  * MaxResults
  * NextToken
  * StackSetName **required**

### ListStackSetOperationsOutput
* ListStackSetOperationsOutput `object`
  * NextToken
  * Summaries
    * items [StackSetOperationSummary](#stacksetoperationsummary)

### ListStackSetsInput
* ListStackSetsInput `object`
  * MaxResults
  * NextToken
  * Status

### ListStackSetsOutput
* ListStackSetsOutput `object`
  * NextToken
  * Summaries
    * items [StackSetSummary](#stacksetsummary)

### ListStacksInput
* ListStacksInput `object`: The input for <a>ListStacks</a> action.
  * NextToken
  * StackStatusFilter
    * items [StackStatus](#stackstatus)

### ListStacksOutput
* ListStacksOutput `object`: The output for <a>ListStacks</a> action.
  * NextToken
  * StackSummaries
    * items [StackSummary](#stacksummary)

### ListTypeRegistrationsInput
* ListTypeRegistrationsInput `object`
  * MaxResults
  * NextToken
  * RegistrationStatusFilter
  * Type
  * TypeArn
  * TypeName

### ListTypeRegistrationsOutput
* ListTypeRegistrationsOutput `object`
  * NextToken
  * RegistrationTokenList
    * items [RegistrationToken](#registrationtoken)

### ListTypeVersionsInput
* ListTypeVersionsInput `object`
  * Arn
  * DeprecatedStatus
  * MaxResults
  * NextToken
  * Type
  * TypeName

### ListTypeVersionsOutput
* ListTypeVersionsOutput `object`
  * NextToken
  * TypeVersionSummaries
    * items [TypeVersionSummary](#typeversionsummary)

### ListTypesInput
* ListTypesInput `object`
  * DeprecatedStatus
  * MaxResults
  * NextToken
  * ProvisioningType
  * Type
  * Visibility

### ListTypesOutput
* ListTypesOutput `object`
  * NextToken
  * TypeSummaries
    * items [TypeSummary](#typesummary)

### LogGroupName
* LogGroupName `string`

### LoggingConfig
* LoggingConfig `object`: Contains logging configuration information for a type.
  * LogGroupName **required**
  * LogRoleArn **required**

### LogicalIdHierarchy
* LogicalIdHierarchy `string`

### LogicalResourceId
* LogicalResourceId `string`

### LogicalResourceIds
* LogicalResourceIds `array`
  * items [LogicalResourceId](#logicalresourceid)

### MaxConcurrentCount
* MaxConcurrentCount `integer`

### MaxConcurrentPercentage
* MaxConcurrentPercentage `integer`

### MaxResults
* MaxResults `integer`

### Metadata
* Metadata `string`

### ModuleInfo
* ModuleInfo `object`: <p>Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.</p> <p>For more information on modules, see <a href="AWSCloudFormation/latest/UserGuide/modules.html">Using modules to encapsulate and reuse resource configurations</a> in the <i>CloudFormation User Guide</i>.</p>
  * LogicalIdHierarchy
  * TypeHierarchy

### MonitoringTimeInMinutes
* MonitoringTimeInMinutes `integer`

### NameAlreadyExistsException


### NextToken
* NextToken `string`

### NoEcho
* NoEcho `boolean`

### NotificationARN
* NotificationARN `string`

### NotificationARNs
* NotificationARNs `array`
  * items [NotificationARN](#notificationarn)

### OnFailure
* OnFailure `string` (values: DO_NOTHING, ROLLBACK, DELETE)

### OperationIdAlreadyExistsException


### OperationInProgressException


### OperationNotFoundException


### OperationStatus
* OperationStatus `string` (values: PENDING, IN_PROGRESS, SUCCESS, FAILED)

### OperationStatusCheckFailedException


### OptionalSecureUrl
* OptionalSecureUrl `string`

### OrganizationalUnitId
* OrganizationalUnitId `string`

### OrganizationalUnitIdList
* OrganizationalUnitIdList `array`
  * items [OrganizationalUnitId](#organizationalunitid)

### Output
* Output `object`: The Output data type.
  * Description
  * ExportName
  * OutputKey
  * OutputValue

### OutputKey
* OutputKey `string`

### OutputValue
* OutputValue `string`

### Outputs
* Outputs `array`
  * items [Output](#output)

### Parameter
* Parameter `object`: The Parameter data type.
  * ParameterKey
  * ParameterValue
  * ResolvedValue
  * UsePreviousValue

### ParameterConstraints
* ParameterConstraints `object`: A set of criteria that AWS CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, AWS CloudFormation returns only the <code>AllowedValues</code> property.
  * AllowedValues
    * items [AllowedValue](#allowedvalue)

### ParameterDeclaration
* ParameterDeclaration `object`: The ParameterDeclaration data type.
  * DefaultValue
  * Description
  * NoEcho
  * ParameterConstraints
    * AllowedValues
      * items [AllowedValue](#allowedvalue)
  * ParameterKey
  * ParameterType

### ParameterDeclarations
* ParameterDeclarations `array`
  * items [ParameterDeclaration](#parameterdeclaration)

### ParameterKey
* ParameterKey `string`

### ParameterType
* ParameterType `string`

### ParameterValue
* ParameterValue `string`

### Parameters
* Parameters `array`
  * items [Parameter](#parameter)

### PermissionModels
* PermissionModels `string` (values: SERVICE_MANAGED, SELF_MANAGED)

### PhysicalResourceId
* PhysicalResourceId `string`

### PhysicalResourceIdContext
* PhysicalResourceIdContext `array`
  * items [PhysicalResourceIdContextKeyValuePair](#physicalresourceidcontextkeyvaluepair)

### PhysicalResourceIdContextKeyValuePair
* PhysicalResourceIdContextKeyValuePair `object`: Context information that enables AWS CloudFormation to uniquely identify a resource. AWS CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs are not enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource.
  * Key **required**
  * Value **required**

### PrivateTypeArn
* PrivateTypeArn `string`

### Properties
* Properties `string`

### PropertyDifference
* PropertyDifference `object`: Information about a resource property whose actual value differs from its expected value, as defined in the stack template and any values specified as template parameters. These will be present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.
  * ActualValue **required**
  * DifferenceType **required**
  * ExpectedValue **required**
  * PropertyPath **required**

### PropertyDifferences
* PropertyDifferences `array`
  * items [PropertyDifference](#propertydifference)

### PropertyName
* PropertyName `string`

### PropertyPath
* PropertyPath `string`

### PropertyValue
* PropertyValue `string`

### ProvisioningType
* ProvisioningType `string` (values: NON_PROVISIONABLE, IMMUTABLE, FULLY_MUTABLE)

### Reason
* Reason `string`

### RecordHandlerProgressInput
* RecordHandlerProgressInput `object`
  * BearerToken **required**
  * ClientRequestToken
  * CurrentOperationStatus
  * ErrorCode
  * OperationStatus **required**
  * ResourceModel
  * StatusMessage

### RecordHandlerProgressOutput
* RecordHandlerProgressOutput `object`

### Region
* Region `string`

### RegionList
* RegionList `array`
  * items [Region](#region)

### RegisterTypeInput
* RegisterTypeInput `object`
  * ClientRequestToken
  * ExecutionRoleArn
  * LoggingConfig
    * LogGroupName **required**
    * LogRoleArn **required**
  * SchemaHandlerPackage **required**
  * Type
  * TypeName **required**

### RegisterTypeOutput
* RegisterTypeOutput `object`
  * RegistrationToken

### RegistrationStatus
* RegistrationStatus `string` (values: COMPLETE, IN_PROGRESS, FAILED)

### RegistrationToken
* RegistrationToken `string`

### RegistrationTokenList
* RegistrationTokenList `array`
  * items [RegistrationToken](#registrationtoken)

### RegistryType
* RegistryType `string` (values: RESOURCE, MODULE)

### Replacement
* Replacement `string` (values: True, False, Conditional)

### RequestToken
* RequestToken `string`

### RequiresRecreation
* RequiresRecreation `string` (values: Never, Conditionally, Always)

### ResourceAttribute
* ResourceAttribute `string` (values: Properties, Metadata, CreationPolicy, UpdatePolicy, DeletionPolicy, Tags)

### ResourceChange
* ResourceChange `object`: The <code>ResourceChange</code> structure describes the resource and the action that AWS CloudFormation will perform on it if you execute this change set.
  * Action
  * ChangeSetId
  * Details
    * items [ResourceChangeDetail](#resourcechangedetail)
  * LogicalResourceId
  * ModuleInfo
    * LogicalIdHierarchy
    * TypeHierarchy
  * PhysicalResourceId
  * Replacement
  * ResourceType
  * Scope
    * items [ResourceAttribute](#resourceattribute)

### ResourceChangeDetail
* ResourceChangeDetail `object`: For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes AWS CloudFormation will make to that resource.
  * CausingEntity
  * ChangeSource
  * Evaluation
  * Target
    * Attribute
    * Name
    * RequiresRecreation

### ResourceChangeDetails
* ResourceChangeDetails `array`
  * items [ResourceChangeDetail](#resourcechangedetail)

### ResourceIdentifierProperties
* ResourceIdentifierProperties `object`

### ResourceIdentifierPropertyKey
* ResourceIdentifierPropertyKey `string`

### ResourceIdentifierPropertyValue
* ResourceIdentifierPropertyValue `string`

### ResourceIdentifierSummaries
* ResourceIdentifierSummaries `array`
  * items [ResourceIdentifierSummary](#resourceidentifiersummary)

### ResourceIdentifierSummary
* ResourceIdentifierSummary `object`: Describes the target resources of a specific type in your import template (for example, all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the import to identify resources of that type.
  * LogicalResourceIds
    * items [LogicalResourceId](#logicalresourceid)
  * ResourceIdentifiers
    * items [ResourceIdentifierPropertyKey](#resourceidentifierpropertykey)
  * ResourceType

### ResourceIdentifiers
* ResourceIdentifiers `array`
  * items [ResourceIdentifierPropertyKey](#resourceidentifierpropertykey)

### ResourceModel
* ResourceModel `string`

### ResourceProperties
* ResourceProperties `string`

### ResourceSignalStatus
* ResourceSignalStatus `string` (values: SUCCESS, FAILURE)

### ResourceSignalUniqueId
* ResourceSignalUniqueId `string`

### ResourceStatus
* ResourceStatus `string` (values: CREATE_IN_PROGRESS, CREATE_FAILED, CREATE_COMPLETE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, DELETE_SKIPPED, UPDATE_IN_PROGRESS, UPDATE_FAILED, UPDATE_COMPLETE, IMPORT_FAILED, IMPORT_COMPLETE, IMPORT_IN_PROGRESS, IMPORT_ROLLBACK_IN_PROGRESS, IMPORT_ROLLBACK_FAILED, IMPORT_ROLLBACK_COMPLETE)

### ResourceStatusReason
* ResourceStatusReason `string`

### ResourceTargetDefinition
* ResourceTargetDefinition `object`: The field that AWS CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated.
  * Attribute
  * Name
  * RequiresRecreation

### ResourceToImport
* ResourceToImport `object`: Describes the target resource of an import operation.
  * LogicalResourceId **required**
  * ResourceIdentifier **required**
  * ResourceType **required**

### ResourceToSkip
* ResourceToSkip `string`

### ResourceType
* ResourceType `string`

### ResourceTypes
* ResourceTypes `array`
  * items [ResourceType](#resourcetype)

### ResourcesToImport
* ResourcesToImport `array`
  * items [ResourceToImport](#resourcetoimport)

### ResourcesToSkip
* ResourcesToSkip `array`
  * items [ResourceToSkip](#resourcetoskip)

### RetainResources
* RetainResources `array`
  * items [LogicalResourceId](#logicalresourceid)

### RetainStacks
* RetainStacks `boolean`

### RetainStacksNullable
* RetainStacksNullable `boolean`

### RetainStacksOnAccountRemovalNullable
* RetainStacksOnAccountRemovalNullable `boolean`

### RoleARN
* RoleARN `string`

### RoleArn
* RoleArn `string`

### RollbackConfiguration
* RollbackConfiguration `object`: <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p>
  * MonitoringTimeInMinutes
  * RollbackTriggers
    * items [RollbackTrigger](#rollbacktrigger)

### RollbackTrigger
* RollbackTrigger `object`: A rollback trigger AWS CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation. 
  * Arn **required**
  * Type **required**

### RollbackTriggers
* RollbackTriggers `array`
  * items [RollbackTrigger](#rollbacktrigger)

### S3Url
* S3Url `string`

### Scope
* Scope `array`
  * items [ResourceAttribute](#resourceattribute)

### SetStackPolicyInput
* SetStackPolicyInput `object`: The input for the <a>SetStackPolicy</a> action.
  * StackName **required**
  * StackPolicyBody
  * StackPolicyURL

### SetTypeDefaultVersionInput
* SetTypeDefaultVersionInput `object`
  * Arn
  * Type
  * TypeName
  * VersionId

### SetTypeDefaultVersionOutput
* SetTypeDefaultVersionOutput `object`

### SignalResourceInput
* SignalResourceInput `object`: The input for the <a>SignalResource</a> action.
  * LogicalResourceId **required**
  * StackName **required**
  * Status **required**
  * UniqueId **required**

### Stack
* Stack `object`: The Stack data type.
  * Capabilities
    * items [Capability](#capability)
  * ChangeSetId
  * CreationTime **required**
  * DeletionTime
  * Description
  * DisableRollback
  * DriftInformation
    * LastCheckTimestamp
    * StackDriftStatus **required**
  * EnableTerminationProtection
  * LastUpdatedTime
  * NotificationARNs
    * items [NotificationARN](#notificationarn)
  * Outputs
    * items [Output](#output)
  * Parameters
    * items [Parameter](#parameter)
  * ParentId
  * RoleARN
  * RollbackConfiguration
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * RootId
  * StackId
  * StackName **required**
  * StackStatus **required**
  * StackStatusReason
  * Tags
    * items [Tag](#tag)
  * TimeoutInMinutes

### StackDriftDetectionId
* StackDriftDetectionId `string`

### StackDriftDetectionStatus
* StackDriftDetectionStatus `string` (values: DETECTION_IN_PROGRESS, DETECTION_FAILED, DETECTION_COMPLETE)

### StackDriftDetectionStatusReason
* StackDriftDetectionStatusReason `string`

### StackDriftInformation
* StackDriftInformation `object`: Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted.
  * LastCheckTimestamp
  * StackDriftStatus **required**

### StackDriftInformationSummary
* StackDriftInformationSummary `object`: Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted.
  * LastCheckTimestamp
  * StackDriftStatus **required**

### StackDriftStatus
* StackDriftStatus `string` (values: DRIFTED, IN_SYNC, UNKNOWN, NOT_CHECKED)

### StackEvent
* StackEvent `object`: The StackEvent data type.
  * ClientRequestToken
  * EventId **required**
  * LogicalResourceId
  * PhysicalResourceId
  * ResourceProperties
  * ResourceStatus
  * ResourceStatusReason
  * ResourceType
  * StackId **required**
  * StackName **required**
  * Timestamp **required**

### StackEvents
* StackEvents `array`
  * items [StackEvent](#stackevent)

### StackId
* StackId `string`

### StackInstance
* StackInstance `object`: An AWS CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.
  * Account
  * DriftStatus
  * LastDriftCheckTimestamp
  * OrganizationalUnitId
  * ParameterOverrides
    * items [Parameter](#parameter)
  * Region
  * StackId
  * StackInstanceStatus
    * DetailedStatus
  * StackSetId
  * Status
  * StatusReason

### StackInstanceComprehensiveStatus
* StackInstanceComprehensiveStatus `object`: The detailed status of the stack instance.
  * DetailedStatus

### StackInstanceDetailedStatus
* StackInstanceDetailedStatus `string` (values: PENDING, RUNNING, SUCCEEDED, FAILED, CANCELLED, INOPERABLE)

### StackInstanceFilter
* StackInstanceFilter `object`: The status that stack instances are filtered by.
  * Name
  * Values

### StackInstanceFilterName
* StackInstanceFilterName `string` (values: DETAILED_STATUS)

### StackInstanceFilterValues
* StackInstanceFilterValues `string`

### StackInstanceFilters
* StackInstanceFilters `array`
  * items [StackInstanceFilter](#stackinstancefilter)

### StackInstanceNotFoundException


### StackInstanceStatus
* StackInstanceStatus `string` (values: CURRENT, OUTDATED, INOPERABLE)

### StackInstanceSummaries
* StackInstanceSummaries `array`
  * items [StackInstanceSummary](#stackinstancesummary)

### StackInstanceSummary
* StackInstanceSummary `object`: The structure that contains summary information about a stack instance.
  * Account
  * DriftStatus
  * LastDriftCheckTimestamp
  * OrganizationalUnitId
  * Region
  * StackId
  * StackInstanceStatus
    * DetailedStatus
  * StackSetId
  * Status
  * StatusReason

### StackName
* StackName `string`

### StackNameOrId
* StackNameOrId `string`

### StackPolicyBody
* StackPolicyBody `string`

### StackPolicyDuringUpdateBody
* StackPolicyDuringUpdateBody `string`

### StackPolicyDuringUpdateURL
* StackPolicyDuringUpdateURL `string`

### StackPolicyURL
* StackPolicyURL `string`

### StackResource
* StackResource `object`: The StackResource data type.
  * Description
  * DriftInformation
    * LastCheckTimestamp
    * StackResourceDriftStatus **required**
  * LogicalResourceId **required**
  * ModuleInfo
    * LogicalIdHierarchy
    * TypeHierarchy
  * PhysicalResourceId
  * ResourceStatus **required**
  * ResourceStatusReason
  * ResourceType **required**
  * StackId
  * StackName
  * Timestamp **required**

### StackResourceDetail
* StackResourceDetail `object`: Contains detailed information about the specified stack resource.
  * Description
  * DriftInformation
    * LastCheckTimestamp
    * StackResourceDriftStatus **required**
  * LastUpdatedTimestamp **required**
  * LogicalResourceId **required**
  * Metadata
  * ModuleInfo
    * LogicalIdHierarchy
    * TypeHierarchy
  * PhysicalResourceId
  * ResourceStatus **required**
  * ResourceStatusReason
  * ResourceType **required**
  * StackId
  * StackName

### StackResourceDrift
* StackResourceDrift `object`: <p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which AWS CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p>
  * ActualProperties
  * ExpectedProperties
  * LogicalResourceId **required**
  * ModuleInfo
    * LogicalIdHierarchy
    * TypeHierarchy
  * PhysicalResourceId
  * PhysicalResourceIdContext
    * items [PhysicalResourceIdContextKeyValuePair](#physicalresourceidcontextkeyvaluepair)
  * PropertyDifferences
    * items [PropertyDifference](#propertydifference)
  * ResourceType **required**
  * StackId **required**
  * StackResourceDriftStatus **required**
  * Timestamp **required**

### StackResourceDriftInformation
* StackResourceDriftInformation `object`: Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration.
  * LastCheckTimestamp
  * StackResourceDriftStatus **required**

### StackResourceDriftInformationSummary
* StackResourceDriftInformationSummary `object`: Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration.
  * LastCheckTimestamp
  * StackResourceDriftStatus **required**

### StackResourceDriftStatus
* StackResourceDriftStatus `string` (values: IN_SYNC, MODIFIED, DELETED, NOT_CHECKED)

### StackResourceDriftStatusFilters
* StackResourceDriftStatusFilters `array`
  * items [StackResourceDriftStatus](#stackresourcedriftstatus)

### StackResourceDrifts
* StackResourceDrifts `array`
  * items [StackResourceDrift](#stackresourcedrift)

### StackResourceSummaries
* StackResourceSummaries `array`
  * items [StackResourceSummary](#stackresourcesummary)

### StackResourceSummary
* StackResourceSummary `object`: Contains high-level information about the specified stack resource.
  * DriftInformation
    * LastCheckTimestamp
    * StackResourceDriftStatus **required**
  * LastUpdatedTimestamp **required**
  * LogicalResourceId **required**
  * ModuleInfo
    * LogicalIdHierarchy
    * TypeHierarchy
  * PhysicalResourceId
  * ResourceStatus **required**
  * ResourceStatusReason
  * ResourceType **required**

### StackResources
* StackResources `array`
  * items [StackResource](#stackresource)

### StackSet
* StackSet `object`: A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires. 
  * AdministrationRoleARN
  * AutoDeployment
    * Enabled
    * RetainStacksOnAccountRemoval
  * Capabilities
    * items [Capability](#capability)
  * Description
  * ExecutionRoleName
  * OrganizationalUnitIds
    * items [OrganizationalUnitId](#organizationalunitid)
  * Parameters
    * items [Parameter](#parameter)
  * PermissionModel
  * StackSetARN
  * StackSetDriftDetectionDetails
    * DriftDetectionStatus
    * DriftStatus
    * DriftedStackInstancesCount
    * FailedStackInstancesCount
    * InProgressStackInstancesCount
    * InSyncStackInstancesCount
    * LastDriftCheckTimestamp
    * TotalStackInstancesCount
  * StackSetId
  * StackSetName
  * Status
  * Tags
    * items [Tag](#tag)
  * TemplateBody

### StackSetARN
* StackSetARN `string`

### StackSetDriftDetectionDetails
* StackSetDriftDetectionDetails `object`: <p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress is not included. </p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a> in the <i>AWS CloudFormation User Guide</i>.</p>
  * DriftDetectionStatus
  * DriftStatus
  * DriftedStackInstancesCount
  * FailedStackInstancesCount
  * InProgressStackInstancesCount
  * InSyncStackInstancesCount
  * LastDriftCheckTimestamp
  * TotalStackInstancesCount

### StackSetDriftDetectionStatus
* StackSetDriftDetectionStatus `string` (values: COMPLETED, FAILED, PARTIAL_SUCCESS, IN_PROGRESS, STOPPED)

### StackSetDriftStatus
* StackSetDriftStatus `string` (values: DRIFTED, IN_SYNC, NOT_CHECKED)

### StackSetId
* StackSetId `string`

### StackSetName
* StackSetName `string`

### StackSetNameOrId
* StackSetNameOrId `string`

### StackSetNotEmptyException


### StackSetNotFoundException


### StackSetOperation
* StackSetOperation `object`: The structure that contains information about a stack set operation. 
  * Action
  * AdministrationRoleARN
  * CreationTimestamp
  * DeploymentTargets
    * Accounts
      * items [Account](#account)
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
  * EndTimestamp
  * ExecutionRoleName
  * OperationId
  * OperationPreferences
    * FailureToleranceCount
    * FailureTolerancePercentage
    * MaxConcurrentCount
    * MaxConcurrentPercentage
    * RegionOrder
      * items [Region](#region)
  * RetainStacks
  * StackSetDriftDetectionDetails
    * DriftDetectionStatus
    * DriftStatus
    * DriftedStackInstancesCount
    * FailedStackInstancesCount
    * InProgressStackInstancesCount
    * InSyncStackInstancesCount
    * LastDriftCheckTimestamp
    * TotalStackInstancesCount
  * StackSetId
  * Status

### StackSetOperationAction
* StackSetOperationAction `string` (values: CREATE, UPDATE, DELETE, DETECT_DRIFT)

### StackSetOperationPreferences
* StackSetOperationPreferences `object`: <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
  * FailureToleranceCount
  * FailureTolerancePercentage
  * MaxConcurrentCount
  * MaxConcurrentPercentage
  * RegionOrder
    * items [Region](#region)

### StackSetOperationResultStatus
* StackSetOperationResultStatus `string` (values: PENDING, RUNNING, SUCCEEDED, FAILED, CANCELLED)

### StackSetOperationResultSummaries
* StackSetOperationResultSummaries `array`
  * items [StackSetOperationResultSummary](#stacksetoperationresultsummary)

### StackSetOperationResultSummary
* StackSetOperationResultSummary `object`: The structure that contains information about a specified operation's results for a given account in a given Region.
  * Account
  * AccountGateResult
    * Status
    * StatusReason
  * OrganizationalUnitId
  * Region
  * Status
  * StatusReason

### StackSetOperationStatus
* StackSetOperationStatus `string` (values: RUNNING, SUCCEEDED, FAILED, STOPPING, STOPPED, QUEUED)

### StackSetOperationSummaries
* StackSetOperationSummaries `array`
  * items [StackSetOperationSummary](#stacksetoperationsummary)

### StackSetOperationSummary
* StackSetOperationSummary `object`: The structures that contain summary information about the specified operation.
  * Action
  * CreationTimestamp
  * EndTimestamp
  * OperationId
  * Status

### StackSetStatus
* StackSetStatus `string` (values: ACTIVE, DELETED)

### StackSetSummaries
* StackSetSummaries `array`
  * items [StackSetSummary](#stacksetsummary)

### StackSetSummary
* StackSetSummary `object`: The structures that contain summary information about the specified stack set.
  * AutoDeployment
    * Enabled
    * RetainStacksOnAccountRemoval
  * Description
  * DriftStatus
  * LastDriftCheckTimestamp
  * PermissionModel
  * StackSetId
  * StackSetName
  * Status

### StackStatus
* StackStatus `string` (values: CREATE_IN_PROGRESS, CREATE_FAILED, CREATE_COMPLETE, ROLLBACK_IN_PROGRESS, ROLLBACK_FAILED, ROLLBACK_COMPLETE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, UPDATE_IN_PROGRESS, UPDATE_COMPLETE_CLEANUP_IN_PROGRESS, UPDATE_COMPLETE, UPDATE_ROLLBACK_IN_PROGRESS, UPDATE_ROLLBACK_FAILED, UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS, UPDATE_ROLLBACK_COMPLETE, REVIEW_IN_PROGRESS, IMPORT_IN_PROGRESS, IMPORT_COMPLETE, IMPORT_ROLLBACK_IN_PROGRESS, IMPORT_ROLLBACK_FAILED, IMPORT_ROLLBACK_COMPLETE)

### StackStatusFilter
* StackStatusFilter `array`
  * items [StackStatus](#stackstatus)

### StackStatusReason
* StackStatusReason `string`

### StackSummaries
* StackSummaries `array`
  * items [StackSummary](#stacksummary)

### StackSummary
* StackSummary `object`: The StackSummary Data Type
  * CreationTime **required**
  * DeletionTime
  * DriftInformation
    * LastCheckTimestamp
    * StackDriftStatus **required**
  * LastUpdatedTime
  * ParentId
  * RootId
  * StackId
  * StackName **required**
  * StackStatus **required**
  * StackStatusReason
  * TemplateDescription

### Stacks
* Stacks `array`
  * items [Stack](#stack)

### StageList
* StageList `array`
  * items [TemplateStage](#templatestage)

### StaleRequestException


### StatusMessage
* StatusMessage `string`

### StopStackSetOperationInput
* StopStackSetOperationInput `object`
  * OperationId **required**
  * StackSetName **required**

### StopStackSetOperationOutput
* StopStackSetOperationOutput `object`

### Tag
* Tag `object`: The Tag type enables you to specify a key-value pair that can be used to store information about an AWS CloudFormation stack.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TemplateBody
* TemplateBody `string`

### TemplateDescription
* TemplateDescription `string`

### TemplateParameter
* TemplateParameter `object`: The TemplateParameter data type.
  * DefaultValue
  * Description
  * NoEcho
  * ParameterKey

### TemplateParameters
* TemplateParameters `array`
  * items [TemplateParameter](#templateparameter)

### TemplateStage
* TemplateStage `string` (values: Original, Processed)

### TemplateURL
* TemplateURL `string`

### TimeoutMinutes
* TimeoutMinutes `integer`

### Timestamp
* Timestamp `string`

### TokenAlreadyExistsException


### TotalStackInstancesCount
* TotalStackInstancesCount `integer`

### TransformName
* TransformName `string`

### TransformsList
* TransformsList `array`
  * items [TransformName](#transformname)

### Type
* Type `string`

### TypeArn
* TypeArn `string`

### TypeHierarchy
* TypeHierarchy `string`

### TypeName
* TypeName `string`

### TypeNotFoundException


### TypeSchema
* TypeSchema `string`

### TypeSummaries
* TypeSummaries `array`
  * items [TypeSummary](#typesummary)

### TypeSummary
* TypeSummary `object`: Contains summary information about the specified CloudFormation type.
  * DefaultVersionId
  * Description
  * LastUpdated
  * Type
  * TypeArn
  * TypeName

### TypeVersionId
* TypeVersionId `string`

### TypeVersionSummaries
* TypeVersionSummaries `array`
  * items [TypeVersionSummary](#typeversionsummary)

### TypeVersionSummary
* TypeVersionSummary `object`: Contains summary information about a specific version of a CloudFormation type.
  * Arn
  * Description
  * IsDefaultVersion
  * TimeCreated
  * Type
  * TypeName
  * VersionId

### UpdateStackInput
* UpdateStackInput `object`: The input for an <a>UpdateStack</a> action.
  * Capabilities
    * items [Capability](#capability)
  * ClientRequestToken
  * NotificationARNs
    * items [NotificationARN](#notificationarn)
  * Parameters
    * items [Parameter](#parameter)
  * ResourceTypes
    * items [ResourceType](#resourcetype)
  * RoleARN
  * RollbackConfiguration
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * StackName **required**
  * StackPolicyBody
  * StackPolicyDuringUpdateBody
  * StackPolicyDuringUpdateURL
  * StackPolicyURL
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL
  * UsePreviousTemplate

### UpdateStackInstancesInput
* UpdateStackInstancesInput `object`
  * Accounts
    * items [Account](#account)
  * DeploymentTargets
    * Accounts
      * items [Account](#account)
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
  * OperationId
  * OperationPreferences
    * FailureToleranceCount
    * FailureTolerancePercentage
    * MaxConcurrentCount
    * MaxConcurrentPercentage
    * RegionOrder
      * items [Region](#region)
  * ParameterOverrides
    * items [Parameter](#parameter)
  * Regions **required**
    * items [Region](#region)
  * StackSetName **required**

### UpdateStackInstancesOutput
* UpdateStackInstancesOutput `object`
  * OperationId

### UpdateStackOutput
* UpdateStackOutput `object`: The output for an <a>UpdateStack</a> action.
  * StackId

### UpdateStackSetInput
* UpdateStackSetInput `object`
  * Accounts
    * items [Account](#account)
  * AdministrationRoleARN
  * AutoDeployment
    * Enabled
    * RetainStacksOnAccountRemoval
  * Capabilities
    * items [Capability](#capability)
  * DeploymentTargets
    * Accounts
      * items [Account](#account)
    * OrganizationalUnitIds
      * items [OrganizationalUnitId](#organizationalunitid)
  * Description
  * ExecutionRoleName
  * OperationId
  * OperationPreferences
    * FailureToleranceCount
    * FailureTolerancePercentage
    * MaxConcurrentCount
    * MaxConcurrentPercentage
    * RegionOrder
      * items [Region](#region)
  * Parameters
    * items [Parameter](#parameter)
  * PermissionModel
  * Regions
    * items [Region](#region)
  * StackSetName **required**
  * Tags
    * items [Tag](#tag)
  * TemplateBody
  * TemplateURL
  * UsePreviousTemplate

### UpdateStackSetOutput
* UpdateStackSetOutput `object`
  * OperationId

### UpdateTerminationProtectionInput
* UpdateTerminationProtectionInput `object`
  * EnableTerminationProtection **required**
  * StackName **required**

### UpdateTerminationProtectionOutput
* UpdateTerminationProtectionOutput `object`
  * StackId

### Url
* Url `string`

### UsePreviousTemplate
* UsePreviousTemplate `boolean`

### UsePreviousValue
* UsePreviousValue `boolean`

### ValidateTemplateInput
* ValidateTemplateInput `object`: The input for <a>ValidateTemplate</a> action.
  * TemplateBody
  * TemplateURL

### ValidateTemplateOutput
* ValidateTemplateOutput `object`: The output for <a>ValidateTemplate</a> action.
  * Capabilities
    * items [Capability](#capability)
  * CapabilitiesReason
  * DeclaredTransforms
    * items [TransformName](#transformname)
  * Description
  * Parameters
    * items [TemplateParameter](#templateparameter)

### Value
* Value `string`

### Version
* Version `string`

### Visibility
* Visibility `string` (values: PUBLIC, PRIVATE)


