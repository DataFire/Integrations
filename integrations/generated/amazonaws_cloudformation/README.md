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

amazonaws_cloudformation.CancelUpdateStack({
  "StackName": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CloudFormation</fullname> <p>AWS CloudFormation allows you to create and manage AWS infrastructure deployments predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly scalable, cost-effective applications without creating or configuring the underlying AWS infrastructure.</p> <p>With AWS CloudFormation, you declare all of your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. AWS CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you.</p> <p>For more information about AWS CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">AWS CloudFormation Product Page</a>.</p> <p>Amazon CloudFormation makes use of other AWS products. If you need additional technical information about a specific AWS product, you can find the product's technical documentation at <a href="http://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>

## Actions

### CancelUpdateStack



```js
amazonaws_cloudformation.CancelUpdateStack({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * StackName **required** [StackName](#stackname)

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
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * ResourcesToSkip [ResourcesToSkip](#resourcestoskip)
  * RoleARN [RoleARN](#rolearn)
  * StackName **required** [StackNameOrId](#stacknameorid)

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
  * Capabilities [Capabilities](#capabilities)
  * ChangeSetName **required** [ChangeSetName](#changesetname)
  * ChangeSetType [ChangeSetType](#changesettype)
  * ClientToken [ClientToken](#clienttoken)
  * Description [Description](#description)
  * NotificationARNs [NotificationARNs](#notificationarns)
  * Parameters [Parameters](#parameters)
  * ResourceTypes [ResourceTypes](#resourcetypes)
  * RoleARN [RoleARN](#rolearn)
  * RollbackConfiguration [RollbackConfiguration](#rollbackconfiguration)
  * StackName **required** [StackNameOrId](#stacknameorid)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)
  * UsePreviousTemplate [UsePreviousTemplate](#useprevioustemplate)

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
  * Capabilities [Capabilities](#capabilities)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * DisableRollback [DisableRollback](#disablerollback)
  * EnableTerminationProtection [EnableTerminationProtection](#enableterminationprotection)
  * NotificationARNs [NotificationARNs](#notificationarns)
  * OnFailure [OnFailure](#onfailure)
  * Parameters [Parameters](#parameters)
  * ResourceTypes [ResourceTypes](#resourcetypes)
  * RoleARN [RoleARN](#rolearn)
  * RollbackConfiguration [RollbackConfiguration](#rollbackconfiguration)
  * StackName **required** [StackName](#stackname)
  * StackPolicyBody [StackPolicyBody](#stackpolicybody)
  * StackPolicyURL [StackPolicyURL](#stackpolicyurl)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)
  * TimeoutInMinutes [TimeoutMinutes](#timeoutminutes)

#### Output
* output [CreateStackOutput](#createstackoutput)

### CreateStackInstances



```js
amazonaws_cloudformation.CreateStackInstances({
  "StackSetName": "",
  "Accounts": [],
  "Regions": []
}, context)
```

#### Input
* input `object`
  * Accounts **required** [AccountList](#accountlist)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * ParameterOverrides [Parameters](#parameters)
  * Regions **required** [RegionList](#regionlist)
  * StackSetName **required** [StackSetName](#stacksetname)

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
  * Capabilities [Capabilities](#capabilities)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Description [Description](#description)
  * Parameters [Parameters](#parameters)
  * StackSetName **required** [StackSetName](#stacksetname)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)

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
  * ChangeSetName **required** [ChangeSetNameOrId](#changesetnameorid)
  * StackName [StackNameOrId](#stacknameorid)

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
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * RetainResources [RetainResources](#retainresources)
  * RoleARN [RoleARN](#rolearn)
  * StackName **required** [StackName](#stackname)

#### Output
*Output schema unknown*

### DeleteStackInstances



```js
amazonaws_cloudformation.DeleteStackInstances({
  "StackSetName": "",
  "Accounts": [],
  "Regions": [],
  "RetainStacks": true
}, context)
```

#### Input
* input `object`
  * Accounts **required** [AccountList](#accountlist)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * Regions **required** [RegionList](#regionlist)
  * RetainStacks **required** [RetainStacks](#retainstacks)
  * StackSetName **required** [StackSetName](#stacksetname)

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
  * StackSetName **required** [StackSetName](#stacksetname)

#### Output
* output [DeleteStackSetOutput](#deletestacksetoutput)

### DescribeAccountLimits



```js
amazonaws_cloudformation.DescribeAccountLimits({}, context)
```

#### Input
* input `object`
  * NextToken [NextToken](#nexttoken)

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
  * ChangeSetName **required** [ChangeSetNameOrId](#changesetnameorid)
  * NextToken [NextToken](#nexttoken)
  * StackName [StackNameOrId](#stacknameorid)

#### Output
* output [DescribeChangeSetOutput](#describechangesetoutput)

### DescribeStackEvents



```js
amazonaws_cloudformation.DescribeStackEvents({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [NextToken](#nexttoken)
  * StackName [StackName](#stackname)

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
  * StackInstanceAccount **required** [Account](#account)
  * StackInstanceRegion **required** [Region](#region)
  * StackSetName **required** [StackSetName](#stacksetname)

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
  * LogicalResourceId **required** [LogicalResourceId](#logicalresourceid)
  * StackName **required** [StackName](#stackname)

#### Output
* output [DescribeStackResourceOutput](#describestackresourceoutput)

### DescribeStackResources



```js
amazonaws_cloudformation.DescribeStackResources({}, context)
```

#### Input
* input `object`
  * LogicalResourceId [LogicalResourceId](#logicalresourceid)
  * PhysicalResourceId [PhysicalResourceId](#physicalresourceid)
  * StackName [StackName](#stackname)

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
  * StackSetName **required** [StackSetName](#stacksetname)

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
  * OperationId **required** [ClientRequestToken](#clientrequesttoken)
  * StackSetName **required** [StackSetName](#stacksetname)

#### Output
* output [DescribeStackSetOperationOutput](#describestacksetoperationoutput)

### DescribeStacks



```js
amazonaws_cloudformation.DescribeStacks({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [NextToken](#nexttoken)
  * StackName [StackName](#stackname)

#### Output
* output [DescribeStacksOutput](#describestacksoutput)

### EstimateTemplateCost



```js
amazonaws_cloudformation.EstimateTemplateCost({}, context)
```

#### Input
* input `object`
  * Parameters [Parameters](#parameters)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)

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
  * ChangeSetName **required** [ChangeSetNameOrId](#changesetnameorid)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * StackName [StackNameOrId](#stacknameorid)

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
  * StackName **required** [StackName](#stackname)

#### Output
* output [GetStackPolicyOutput](#getstackpolicyoutput)

### GetTemplate



```js
amazonaws_cloudformation.GetTemplate({}, context)
```

#### Input
* input `object`
  * ChangeSetName [ChangeSetNameOrId](#changesetnameorid)
  * StackName [StackName](#stackname)
  * TemplateStage [TemplateStage](#templatestage)

#### Output
* output [GetTemplateOutput](#gettemplateoutput)

### GetTemplateSummary



```js
amazonaws_cloudformation.GetTemplateSummary({}, context)
```

#### Input
* input `object`
  * StackName [StackNameOrId](#stacknameorid)
  * StackSetName [StackSetNameOrId](#stacksetnameorid)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)

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
  * NextToken [NextToken](#nexttoken)
  * StackName **required** [StackNameOrId](#stacknameorid)

#### Output
* output [ListChangeSetsOutput](#listchangesetsoutput)

### ListExports



```js
amazonaws_cloudformation.ListExports({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [NextToken](#nexttoken)

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
  * NextToken `string`
  * ExportName **required** [ExportName](#exportname)
  * NextToken [NextToken](#nexttoken)

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
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * StackInstanceAccount [Account](#account)
  * StackInstanceRegion [Region](#region)
  * StackSetName **required** [StackSetName](#stacksetname)

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
  * NextToken `string`
  * NextToken [NextToken](#nexttoken)
  * StackName **required** [StackName](#stackname)

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
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OperationId **required** [ClientRequestToken](#clientrequesttoken)
  * StackSetName **required** [StackSetName](#stacksetname)

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
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * StackSetName **required** [StackSetName](#stacksetname)

#### Output
* output [ListStackSetOperationsOutput](#liststacksetoperationsoutput)

### ListStackSets



```js
amazonaws_cloudformation.ListStackSets({}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * Status [StackSetStatus](#stacksetstatus)

#### Output
* output [ListStackSetsOutput](#liststacksetsoutput)

### ListStacks



```js
amazonaws_cloudformation.ListStacks({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken [NextToken](#nexttoken)
  * StackStatusFilter [StackStatusFilter](#stackstatusfilter)

#### Output
* output [ListStacksOutput](#liststacksoutput)

### SetStackPolicy



```js
amazonaws_cloudformation.SetStackPolicy({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * StackName **required** [StackName](#stackname)
  * StackPolicyBody [StackPolicyBody](#stackpolicybody)
  * StackPolicyURL [StackPolicyURL](#stackpolicyurl)

#### Output
*Output schema unknown*

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
  * LogicalResourceId **required** [LogicalResourceId](#logicalresourceid)
  * StackName **required** [StackNameOrId](#stacknameorid)
  * Status **required** [ResourceSignalStatus](#resourcesignalstatus)
  * UniqueId **required** [ResourceSignalUniqueId](#resourcesignaluniqueid)

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
  * OperationId **required** [ClientRequestToken](#clientrequesttoken)
  * StackSetName **required** [StackSetName](#stacksetname)

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
  * Capabilities [Capabilities](#capabilities)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * NotificationARNs [NotificationARNs](#notificationarns)
  * Parameters [Parameters](#parameters)
  * ResourceTypes [ResourceTypes](#resourcetypes)
  * RoleARN [RoleARN](#rolearn)
  * RollbackConfiguration [RollbackConfiguration](#rollbackconfiguration)
  * StackName **required** [StackName](#stackname)
  * StackPolicyBody [StackPolicyBody](#stackpolicybody)
  * StackPolicyDuringUpdateBody [StackPolicyDuringUpdateBody](#stackpolicyduringupdatebody)
  * StackPolicyDuringUpdateURL [StackPolicyDuringUpdateURL](#stackpolicyduringupdateurl)
  * StackPolicyURL [StackPolicyURL](#stackpolicyurl)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)
  * UsePreviousTemplate [UsePreviousTemplate](#useprevioustemplate)

#### Output
* output [UpdateStackOutput](#updatestackoutput)

### UpdateStackInstances



```js
amazonaws_cloudformation.UpdateStackInstances({
  "StackSetName": "",
  "Accounts": [],
  "Regions": []
}, context)
```

#### Input
* input `object`
  * Accounts **required** [AccountList](#accountlist)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * ParameterOverrides [Parameters](#parameters)
  * Regions **required** [RegionList](#regionlist)
  * StackSetName **required** [StackSetName](#stacksetname)

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
  * Capabilities [Capabilities](#capabilities)
  * Description [Description](#description)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * Parameters [Parameters](#parameters)
  * StackSetName **required** [StackSetName](#stacksetname)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)
  * UsePreviousTemplate [UsePreviousTemplate](#useprevioustemplate)

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
  * EnableTerminationProtection **required** [EnableTerminationProtection](#enableterminationprotection)
  * StackName **required** [StackNameOrId](#stacknameorid)

#### Output
* output [UpdateTerminationProtectionOutput](#updateterminationprotectionoutput)

### ValidateTemplate



```js
amazonaws_cloudformation.ValidateTemplate({}, context)
```

#### Input
* input `object`
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)

#### Output
* output [ValidateTemplateOutput](#validatetemplateoutput)



## Definitions

### Account
* Account `string`

### AccountGateResult
* AccountGateResult `object`: <p>Structure that contains the results of the account gate function which AWS CloudFormation invokes, if present, before proceeding with a stack set operation in an account and region.</p> <p>For each account and region, AWS CloudFormation lets you specify a Lamdba function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and region. CloudFormation invokes the function each time a stack set operation is requested for that account and region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and region, and sets the stack set operation result status for that account and region to <code>FAILED</code>. </p> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p>
  * Status [AccountGateStatus](#accountgatestatus)
  * StatusReason [AccountGateStatusReason](#accountgatestatusreason)

### AccountGateStatus
* AccountGateStatus `string` (values: SUCCEEDED, FAILED, SKIPPED)

### AccountGateStatusReason
* AccountGateStatusReason `string`

### AccountLimit
* AccountLimit `object`: The AccountLimit data type.
  * Name [LimitName](#limitname)
  * Value [LimitValue](#limitvalue)

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
* AlreadyExistsException `object`: The resource with the name requested already exists.

### Arn
* Arn `string`

### CancelUpdateStackInput
* CancelUpdateStackInput `object`: The input for the <a>CancelUpdateStack</a> action.
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * StackName **required** [StackName](#stackname)

### Capabilities
* Capabilities `array`
  * items [Capability](#capability)

### CapabilitiesReason
* CapabilitiesReason `string`

### Capability
* Capability `string` (values: CAPABILITY_IAM, CAPABILITY_NAMED_IAM)

### CausingEntity
* CausingEntity `string`

### Change
* Change `object`: The <code>Change</code> structure describes the changes AWS CloudFormation will perform if you execute the change set.
  * ResourceChange [ResourceChange](#resourcechange)
  * Type [ChangeType](#changetype)

### ChangeAction
* ChangeAction `string` (values: Add, Modify, Remove)

### ChangeSetId
* ChangeSetId `string`

### ChangeSetName
* ChangeSetName `string`

### ChangeSetNameOrId
* ChangeSetNameOrId `string`

### ChangeSetNotFoundException
* ChangeSetNotFoundException `object`: The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the <code>ListChangeSets</code> action.

### ChangeSetStatus
* ChangeSetStatus `string` (values: CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_COMPLETE, DELETE_COMPLETE, FAILED)

### ChangeSetStatusReason
* ChangeSetStatusReason `string`

### ChangeSetSummaries
* ChangeSetSummaries `array`
  * items [ChangeSetSummary](#changesetsummary)

### ChangeSetSummary
* ChangeSetSummary `object`: The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated.
  * ChangeSetId [ChangeSetId](#changesetid)
  * ChangeSetName [ChangeSetName](#changesetname)
  * CreationTime [CreationTime](#creationtime)
  * Description [Description](#description)
  * ExecutionStatus [ExecutionStatus](#executionstatus)
  * StackId [StackId](#stackid)
  * StackName [StackName](#stackname)
  * Status [ChangeSetStatus](#changesetstatus)
  * StatusReason [ChangeSetStatusReason](#changesetstatusreason)

### ChangeSetType
* ChangeSetType `string` (values: CREATE, UPDATE)

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
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * ResourcesToSkip [ResourcesToSkip](#resourcestoskip)
  * RoleARN [RoleARN](#rolearn)
  * StackName **required** [StackNameOrId](#stacknameorid)

### ContinueUpdateRollbackOutput
* ContinueUpdateRollbackOutput `object`: The output for a <a>ContinueUpdateRollback</a> action.

### CreateChangeSetInput
* CreateChangeSetInput `object`: The input for the <a>CreateChangeSet</a> action.
  * Capabilities [Capabilities](#capabilities)
  * ChangeSetName **required** [ChangeSetName](#changesetname)
  * ChangeSetType [ChangeSetType](#changesettype)
  * ClientToken [ClientToken](#clienttoken)
  * Description [Description](#description)
  * NotificationARNs [NotificationARNs](#notificationarns)
  * Parameters [Parameters](#parameters)
  * ResourceTypes [ResourceTypes](#resourcetypes)
  * RoleARN [RoleARN](#rolearn)
  * RollbackConfiguration [RollbackConfiguration](#rollbackconfiguration)
  * StackName **required** [StackNameOrId](#stacknameorid)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)
  * UsePreviousTemplate [UsePreviousTemplate](#useprevioustemplate)

### CreateChangeSetOutput
* CreateChangeSetOutput `object`: The output for the <a>CreateChangeSet</a> action.
  * Id [ChangeSetId](#changesetid)
  * StackId [StackId](#stackid)

### CreateStackInput
* CreateStackInput `object`: The input for <a>CreateStack</a> action.
  * Capabilities [Capabilities](#capabilities)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * DisableRollback [DisableRollback](#disablerollback)
  * EnableTerminationProtection [EnableTerminationProtection](#enableterminationprotection)
  * NotificationARNs [NotificationARNs](#notificationarns)
  * OnFailure [OnFailure](#onfailure)
  * Parameters [Parameters](#parameters)
  * ResourceTypes [ResourceTypes](#resourcetypes)
  * RoleARN [RoleARN](#rolearn)
  * RollbackConfiguration [RollbackConfiguration](#rollbackconfiguration)
  * StackName **required** [StackName](#stackname)
  * StackPolicyBody [StackPolicyBody](#stackpolicybody)
  * StackPolicyURL [StackPolicyURL](#stackpolicyurl)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)
  * TimeoutInMinutes [TimeoutMinutes](#timeoutminutes)

### CreateStackInstancesInput
* CreateStackInstancesInput `object`
  * Accounts **required** [AccountList](#accountlist)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * ParameterOverrides [Parameters](#parameters)
  * Regions **required** [RegionList](#regionlist)
  * StackSetName **required** [StackSetName](#stacksetname)

### CreateStackInstancesOutput
* CreateStackInstancesOutput `object`
  * OperationId [ClientRequestToken](#clientrequesttoken)

### CreateStackOutput
* CreateStackOutput `object`: The output for a <a>CreateStack</a> action.
  * StackId [StackId](#stackid)

### CreateStackSetInput
* CreateStackSetInput `object`
  * Capabilities [Capabilities](#capabilities)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Description [Description](#description)
  * Parameters [Parameters](#parameters)
  * StackSetName **required** [StackSetName](#stacksetname)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)

### CreateStackSetOutput
* CreateStackSetOutput `object`
  * StackSetId [StackSetId](#stacksetid)

### CreatedButModifiedException
* CreatedButModifiedException `object`: The specified resource exists, but has been changed.

### CreationTime
* CreationTime `string`

### DeleteChangeSetInput
* DeleteChangeSetInput `object`: The input for the <a>DeleteChangeSet</a> action.
  * ChangeSetName **required** [ChangeSetNameOrId](#changesetnameorid)
  * StackName [StackNameOrId](#stacknameorid)

### DeleteChangeSetOutput
* DeleteChangeSetOutput `object`: The output for the <a>DeleteChangeSet</a> action.

### DeleteStackInput
* DeleteStackInput `object`: The input for <a>DeleteStack</a> action.
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * RetainResources [RetainResources](#retainresources)
  * RoleARN [RoleARN](#rolearn)
  * StackName **required** [StackName](#stackname)

### DeleteStackInstancesInput
* DeleteStackInstancesInput `object`
  * Accounts **required** [AccountList](#accountlist)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * Regions **required** [RegionList](#regionlist)
  * RetainStacks **required** [RetainStacks](#retainstacks)
  * StackSetName **required** [StackSetName](#stacksetname)

### DeleteStackInstancesOutput
* DeleteStackInstancesOutput `object`
  * OperationId [ClientRequestToken](#clientrequesttoken)

### DeleteStackSetInput
* DeleteStackSetInput `object`
  * StackSetName **required** [StackSetName](#stacksetname)

### DeleteStackSetOutput
* DeleteStackSetOutput `object`

### DeletionTime
* DeletionTime `string`

### DescribeAccountLimitsInput
* DescribeAccountLimitsInput `object`: The input for the <a>DescribeAccountLimits</a> action.
  * NextToken [NextToken](#nexttoken)

### DescribeAccountLimitsOutput
* DescribeAccountLimitsOutput `object`: The output for the <a>DescribeAccountLimits</a> action.
  * AccountLimits [AccountLimitList](#accountlimitlist)
  * NextToken [NextToken](#nexttoken)

### DescribeChangeSetInput
* DescribeChangeSetInput `object`: The input for the <a>DescribeChangeSet</a> action.
  * ChangeSetName **required** [ChangeSetNameOrId](#changesetnameorid)
  * NextToken [NextToken](#nexttoken)
  * StackName [StackNameOrId](#stacknameorid)

### DescribeChangeSetOutput
* DescribeChangeSetOutput `object`: The output for the <a>DescribeChangeSet</a> action.
  * Capabilities [Capabilities](#capabilities)
  * ChangeSetId [ChangeSetId](#changesetid)
  * ChangeSetName [ChangeSetName](#changesetname)
  * Changes [Changes](#changes)
  * CreationTime [CreationTime](#creationtime)
  * Description [Description](#description)
  * ExecutionStatus [ExecutionStatus](#executionstatus)
  * NextToken [NextToken](#nexttoken)
  * NotificationARNs [NotificationARNs](#notificationarns)
  * Parameters [Parameters](#parameters)
  * RollbackConfiguration [RollbackConfiguration](#rollbackconfiguration)
  * StackId [StackId](#stackid)
  * StackName [StackName](#stackname)
  * Status [ChangeSetStatus](#changesetstatus)
  * StatusReason [ChangeSetStatusReason](#changesetstatusreason)
  * Tags [Tags](#tags)

### DescribeStackEventsInput
* DescribeStackEventsInput `object`: The input for <a>DescribeStackEvents</a> action.
  * NextToken [NextToken](#nexttoken)
  * StackName [StackName](#stackname)

### DescribeStackEventsOutput
* DescribeStackEventsOutput `object`: The output for a <a>DescribeStackEvents</a> action.
  * NextToken [NextToken](#nexttoken)
  * StackEvents [StackEvents](#stackevents)

### DescribeStackInstanceInput
* DescribeStackInstanceInput `object`
  * StackInstanceAccount **required** [Account](#account)
  * StackInstanceRegion **required** [Region](#region)
  * StackSetName **required** [StackSetName](#stacksetname)

### DescribeStackInstanceOutput
* DescribeStackInstanceOutput `object`
  * StackInstance [StackInstance](#stackinstance)

### DescribeStackResourceInput
* DescribeStackResourceInput `object`: The input for <a>DescribeStackResource</a> action.
  * LogicalResourceId **required** [LogicalResourceId](#logicalresourceid)
  * StackName **required** [StackName](#stackname)

### DescribeStackResourceOutput
* DescribeStackResourceOutput `object`: The output for a <a>DescribeStackResource</a> action.
  * StackResourceDetail [StackResourceDetail](#stackresourcedetail)

### DescribeStackResourcesInput
* DescribeStackResourcesInput `object`: The input for <a>DescribeStackResources</a> action.
  * LogicalResourceId [LogicalResourceId](#logicalresourceid)
  * PhysicalResourceId [PhysicalResourceId](#physicalresourceid)
  * StackName [StackName](#stackname)

### DescribeStackResourcesOutput
* DescribeStackResourcesOutput `object`: The output for a <a>DescribeStackResources</a> action.
  * StackResources [StackResources](#stackresources)

### DescribeStackSetInput
* DescribeStackSetInput `object`
  * StackSetName **required** [StackSetName](#stacksetname)

### DescribeStackSetOperationInput
* DescribeStackSetOperationInput `object`
  * OperationId **required** [ClientRequestToken](#clientrequesttoken)
  * StackSetName **required** [StackSetName](#stacksetname)

### DescribeStackSetOperationOutput
* DescribeStackSetOperationOutput `object`
  * StackSetOperation [StackSetOperation](#stacksetoperation)

### DescribeStackSetOutput
* DescribeStackSetOutput `object`
  * StackSet [StackSet](#stackset)

### DescribeStacksInput
* DescribeStacksInput `object`: The input for <a>DescribeStacks</a> action.
  * NextToken [NextToken](#nexttoken)
  * StackName [StackName](#stackname)

### DescribeStacksOutput
* DescribeStacksOutput `object`: The output for a <a>DescribeStacks</a> action.
  * NextToken [NextToken](#nexttoken)
  * Stacks [Stacks](#stacks)

### Description
* Description `string`

### DisableRollback
* DisableRollback `boolean`

### EnableTerminationProtection
* EnableTerminationProtection `boolean`

### EstimateTemplateCostInput
* EstimateTemplateCostInput `object`: The input for an <a>EstimateTemplateCost</a> action.
  * Parameters [Parameters](#parameters)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)

### EstimateTemplateCostOutput
* EstimateTemplateCostOutput `object`: The output for a <a>EstimateTemplateCost</a> action.
  * Url [Url](#url)

### EvaluationType
* EvaluationType `string` (values: Static, Dynamic)

### EventId
* EventId `string`

### ExecuteChangeSetInput
* ExecuteChangeSetInput `object`: The input for the <a>ExecuteChangeSet</a> action.
  * ChangeSetName **required** [ChangeSetNameOrId](#changesetnameorid)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * StackName [StackNameOrId](#stacknameorid)

### ExecuteChangeSetOutput
* ExecuteChangeSetOutput `object`: The output for the <a>ExecuteChangeSet</a> action.

### ExecutionStatus
* ExecutionStatus `string` (values: UNAVAILABLE, AVAILABLE, EXECUTE_IN_PROGRESS, EXECUTE_COMPLETE, EXECUTE_FAILED, OBSOLETE)

### Export
* Export `object`: The <code>Export</code> structure describes the exported output values for a stack.
  * ExportingStackId [StackId](#stackid)
  * Name [ExportName](#exportname)
  * Value [ExportValue](#exportvalue)

### ExportName
* ExportName `string`

### ExportValue
* ExportValue `string`

### Exports
* Exports `array`
  * items [Export](#export)

### FailureToleranceCount
* FailureToleranceCount `integer`

### FailureTolerancePercentage
* FailureTolerancePercentage `integer`

### GetStackPolicyInput
* GetStackPolicyInput `object`: The input for the <a>GetStackPolicy</a> action.
  * StackName **required** [StackName](#stackname)

### GetStackPolicyOutput
* GetStackPolicyOutput `object`: The output for the <a>GetStackPolicy</a> action.
  * StackPolicyBody [StackPolicyBody](#stackpolicybody)

### GetTemplateInput
* GetTemplateInput `object`: The input for a <a>GetTemplate</a> action.
  * ChangeSetName [ChangeSetNameOrId](#changesetnameorid)
  * StackName [StackName](#stackname)
  * TemplateStage [TemplateStage](#templatestage)

### GetTemplateOutput
* GetTemplateOutput `object`: The output for <a>GetTemplate</a> action.
  * StagesAvailable [StageList](#stagelist)
  * TemplateBody [TemplateBody](#templatebody)

### GetTemplateSummaryInput
* GetTemplateSummaryInput `object`: The input for the <a>GetTemplateSummary</a> action.
  * StackName [StackNameOrId](#stacknameorid)
  * StackSetName [StackSetNameOrId](#stacksetnameorid)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)

### GetTemplateSummaryOutput
* GetTemplateSummaryOutput `object`: The output for the <a>GetTemplateSummary</a> action.
  * Capabilities [Capabilities](#capabilities)
  * CapabilitiesReason [CapabilitiesReason](#capabilitiesreason)
  * DeclaredTransforms [TransformsList](#transformslist)
  * Description [Description](#description)
  * Metadata [Metadata](#metadata)
  * Parameters [ParameterDeclarations](#parameterdeclarations)
  * ResourceTypes [ResourceTypes](#resourcetypes)
  * Version [Version](#version)

### Imports
* Imports `array`
  * items [StackName](#stackname)

### InsufficientCapabilitiesException
* InsufficientCapabilitiesException `object`: The template contains resources with capabilities that weren't specified in the Capabilities parameter.

### InvalidChangeSetStatusException
* InvalidChangeSetStatusException `object`: The specified change set can't be used to update the stack. For example, the change set status might be <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.

### InvalidOperationException
* InvalidOperationException `object`: The specified operation isn't valid.

### LastUpdatedTime
* LastUpdatedTime `string`

### LimitExceededException
* LimitExceededException `object`: <p>The quota for the resource has already been reached.</p> <p>For information on stack set limitations, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-limitations.html">Limitations of StackSets</a>.</p>

### LimitName
* LimitName `string`

### LimitValue
* LimitValue `integer`

### ListChangeSetsInput
* ListChangeSetsInput `object`: The input for the <a>ListChangeSets</a> action.
  * NextToken [NextToken](#nexttoken)
  * StackName **required** [StackNameOrId](#stacknameorid)

### ListChangeSetsOutput
* ListChangeSetsOutput `object`: The output for the <a>ListChangeSets</a> action.
  * NextToken [NextToken](#nexttoken)
  * Summaries [ChangeSetSummaries](#changesetsummaries)

### ListExportsInput
* ListExportsInput `object`
  * NextToken [NextToken](#nexttoken)

### ListExportsOutput
* ListExportsOutput `object`
  * Exports [Exports](#exports)
  * NextToken [NextToken](#nexttoken)

### ListImportsInput
* ListImportsInput `object`
  * ExportName **required** [ExportName](#exportname)
  * NextToken [NextToken](#nexttoken)

### ListImportsOutput
* ListImportsOutput `object`
  * Imports [Imports](#imports)
  * NextToken [NextToken](#nexttoken)

### ListStackInstancesInput
* ListStackInstancesInput `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * StackInstanceAccount [Account](#account)
  * StackInstanceRegion [Region](#region)
  * StackSetName **required** [StackSetName](#stacksetname)

### ListStackInstancesOutput
* ListStackInstancesOutput `object`
  * NextToken [NextToken](#nexttoken)
  * Summaries [StackInstanceSummaries](#stackinstancesummaries)

### ListStackResourcesInput
* ListStackResourcesInput `object`: The input for the <a>ListStackResource</a> action.
  * NextToken [NextToken](#nexttoken)
  * StackName **required** [StackName](#stackname)

### ListStackResourcesOutput
* ListStackResourcesOutput `object`: The output for a <a>ListStackResources</a> action.
  * NextToken [NextToken](#nexttoken)
  * StackResourceSummaries [StackResourceSummaries](#stackresourcesummaries)

### ListStackSetOperationResultsInput
* ListStackSetOperationResultsInput `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OperationId **required** [ClientRequestToken](#clientrequesttoken)
  * StackSetName **required** [StackSetName](#stacksetname)

### ListStackSetOperationResultsOutput
* ListStackSetOperationResultsOutput `object`
  * NextToken [NextToken](#nexttoken)
  * Summaries [StackSetOperationResultSummaries](#stacksetoperationresultsummaries)

### ListStackSetOperationsInput
* ListStackSetOperationsInput `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * StackSetName **required** [StackSetName](#stacksetname)

### ListStackSetOperationsOutput
* ListStackSetOperationsOutput `object`
  * NextToken [NextToken](#nexttoken)
  * Summaries [StackSetOperationSummaries](#stacksetoperationsummaries)

### ListStackSetsInput
* ListStackSetsInput `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * Status [StackSetStatus](#stacksetstatus)

### ListStackSetsOutput
* ListStackSetsOutput `object`
  * NextToken [NextToken](#nexttoken)
  * Summaries [StackSetSummaries](#stacksetsummaries)

### ListStacksInput
* ListStacksInput `object`: The input for <a>ListStacks</a> action.
  * NextToken [NextToken](#nexttoken)
  * StackStatusFilter [StackStatusFilter](#stackstatusfilter)

### ListStacksOutput
* ListStacksOutput `object`: The output for <a>ListStacks</a> action.
  * NextToken [NextToken](#nexttoken)
  * StackSummaries [StackSummaries](#stacksummaries)

### LogicalResourceId
* LogicalResourceId `string`

### MaxConcurrentCount
* MaxConcurrentCount `integer`

### MaxConcurrentPercentage
* MaxConcurrentPercentage `integer`

### MaxResults
* MaxResults `integer`

### Metadata
* Metadata `string`

### MonitoringTimeInMinutes
* MonitoringTimeInMinutes `integer`

### NameAlreadyExistsException
* NameAlreadyExistsException `object`: The specified name is already in use.

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
* OperationIdAlreadyExistsException `object`: The specified operation ID already exists.

### OperationInProgressException
* OperationInProgressException `object`: Another operation is currently in progress for this stack set. Only one operation can be performed for a stack set at a given time.

### OperationNotFoundException
* OperationNotFoundException `object`: The specified ID refers to an operation that doesn't exist.

### Output
* Output `object`: The Output data type.
  * Description [Description](#description)
  * ExportName [ExportName](#exportname)
  * OutputKey [OutputKey](#outputkey)
  * OutputValue [OutputValue](#outputvalue)

### OutputKey
* OutputKey `string`

### OutputValue
* OutputValue `string`

### Outputs
* Outputs `array`
  * items [Output](#output)

### Parameter
* Parameter `object`: The Parameter data type.
  * ParameterKey [ParameterKey](#parameterkey)
  * ParameterValue [ParameterValue](#parametervalue)
  * ResolvedValue [ParameterValue](#parametervalue)
  * UsePreviousValue [UsePreviousValue](#usepreviousvalue)

### ParameterConstraints
* ParameterConstraints `object`: A set of criteria that AWS CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, AWS CloudFormation returns only the <code>AllowedValues</code> property.
  * AllowedValues [AllowedValues](#allowedvalues)

### ParameterDeclaration
* ParameterDeclaration `object`: The ParameterDeclaration data type.
  * DefaultValue [ParameterValue](#parametervalue)
  * Description [Description](#description)
  * NoEcho [NoEcho](#noecho)
  * ParameterConstraints [ParameterConstraints](#parameterconstraints)
  * ParameterKey [ParameterKey](#parameterkey)
  * ParameterType [ParameterType](#parametertype)

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

### PhysicalResourceId
* PhysicalResourceId `string`

### PropertyName
* PropertyName `string`

### Reason
* Reason `string`

### Region
* Region `string`

### RegionList
* RegionList `array`
  * items [Region](#region)

### Replacement
* Replacement `string` (values: True, False, Conditional)

### RequiresRecreation
* RequiresRecreation `string` (values: Never, Conditionally, Always)

### ResourceAttribute
* ResourceAttribute `string` (values: Properties, Metadata, CreationPolicy, UpdatePolicy, DeletionPolicy, Tags)

### ResourceChange
* ResourceChange `object`: The <code>ResourceChange</code> structure describes the resource and the action that AWS CloudFormation will perform on it if you execute this change set.
  * Action [ChangeAction](#changeaction)
  * Details [ResourceChangeDetails](#resourcechangedetails)
  * LogicalResourceId [LogicalResourceId](#logicalresourceid)
  * PhysicalResourceId [PhysicalResourceId](#physicalresourceid)
  * Replacement [Replacement](#replacement)
  * ResourceType [ResourceType](#resourcetype)
  * Scope [Scope](#scope)

### ResourceChangeDetail
* ResourceChangeDetail `object`: For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes AWS CloudFormation will make to that resource.
  * CausingEntity [CausingEntity](#causingentity)
  * ChangeSource [ChangeSource](#changesource)
  * Evaluation [EvaluationType](#evaluationtype)
  * Target [ResourceTargetDefinition](#resourcetargetdefinition)

### ResourceChangeDetails
* ResourceChangeDetails `array`
  * items [ResourceChangeDetail](#resourcechangedetail)

### ResourceProperties
* ResourceProperties `string`

### ResourceSignalStatus
* ResourceSignalStatus `string` (values: SUCCESS, FAILURE)

### ResourceSignalUniqueId
* ResourceSignalUniqueId `string`

### ResourceStatus
* ResourceStatus `string` (values: CREATE_IN_PROGRESS, CREATE_FAILED, CREATE_COMPLETE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, DELETE_SKIPPED, UPDATE_IN_PROGRESS, UPDATE_FAILED, UPDATE_COMPLETE)

### ResourceStatusReason
* ResourceStatusReason `string`

### ResourceTargetDefinition
* ResourceTargetDefinition `object`: The field that AWS CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated.
  * Attribute [ResourceAttribute](#resourceattribute)
  * Name [PropertyName](#propertyname)
  * RequiresRecreation [RequiresRecreation](#requiresrecreation)

### ResourceToSkip
* ResourceToSkip `string`

### ResourceType
* ResourceType `string`

### ResourceTypes
* ResourceTypes `array`
  * items [ResourceType](#resourcetype)

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

### RoleARN
* RoleARN `string`

### RollbackConfiguration
* RollbackConfiguration `object`: <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For each rollback trigger you create, you specify the Cloudwatch alarm that CloudFormation should monitor. CloudFormation monitors the specified alarms during the stack create or update operation, and for the specified amount of time after all resources have been deployed. If any of the alarms goes to ALERT state during the stack operation or the monitoring period, CloudFormation rolls back the entire stack operation. If the monitoring period expires without any alarms going to ALERT state, CloudFormation proceeds to dispose of old resources as usual.</p> <p>By default, CloudFormation only rolls back stack operations if an alarm goes to ALERT state, not INSUFFICIENT_DATA state. To have CloudFormation roll back the stack operation if an alarm goes to INSUFFICIENT_DATA state as well, edit the CloudWatch alarm to treat missing data as <code>breaching</code>. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html">Configuring How CloudWatch Alarms Treats Missing Data</a>.</p> <p>AWS CloudFormation does not monitor rollback triggers when it rolls back a stack during an update operation.</p>
  * MonitoringTimeInMinutes [MonitoringTimeInMinutes](#monitoringtimeinminutes)
  * RollbackTriggers [RollbackTriggers](#rollbacktriggers)

### RollbackTrigger
* RollbackTrigger `object`: A rollback trigger AWS CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALERT state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation. 
  * Arn **required** [Arn](#arn)
  * Type **required** [Type](#type)

### RollbackTriggers
* RollbackTriggers `array`
  * items [RollbackTrigger](#rollbacktrigger)

### Scope
* Scope `array`
  * items [ResourceAttribute](#resourceattribute)

### SetStackPolicyInput
* SetStackPolicyInput `object`: The input for the <a>SetStackPolicy</a> action.
  * StackName **required** [StackName](#stackname)
  * StackPolicyBody [StackPolicyBody](#stackpolicybody)
  * StackPolicyURL [StackPolicyURL](#stackpolicyurl)

### SignalResourceInput
* SignalResourceInput `object`: The input for the <a>SignalResource</a> action.
  * LogicalResourceId **required** [LogicalResourceId](#logicalresourceid)
  * StackName **required** [StackNameOrId](#stacknameorid)
  * Status **required** [ResourceSignalStatus](#resourcesignalstatus)
  * UniqueId **required** [ResourceSignalUniqueId](#resourcesignaluniqueid)

### Stack
* Stack `object`: The Stack data type.
  * Capabilities [Capabilities](#capabilities)
  * ChangeSetId [ChangeSetId](#changesetid)
  * CreationTime **required** [CreationTime](#creationtime)
  * DeletionTime [DeletionTime](#deletiontime)
  * Description [Description](#description)
  * DisableRollback [DisableRollback](#disablerollback)
  * EnableTerminationProtection [EnableTerminationProtection](#enableterminationprotection)
  * LastUpdatedTime [LastUpdatedTime](#lastupdatedtime)
  * NotificationARNs [NotificationARNs](#notificationarns)
  * Outputs [Outputs](#outputs)
  * Parameters [Parameters](#parameters)
  * ParentId [StackId](#stackid)
  * RoleARN [RoleARN](#rolearn)
  * RollbackConfiguration [RollbackConfiguration](#rollbackconfiguration)
  * RootId [StackId](#stackid)
  * StackId [StackId](#stackid)
  * StackName **required** [StackName](#stackname)
  * StackStatus **required** [StackStatus](#stackstatus)
  * StackStatusReason [StackStatusReason](#stackstatusreason)
  * Tags [Tags](#tags)
  * TimeoutInMinutes [TimeoutMinutes](#timeoutminutes)

### StackEvent
* StackEvent `object`: The StackEvent data type.
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * EventId **required** [EventId](#eventid)
  * LogicalResourceId [LogicalResourceId](#logicalresourceid)
  * PhysicalResourceId [PhysicalResourceId](#physicalresourceid)
  * ResourceProperties [ResourceProperties](#resourceproperties)
  * ResourceStatus [ResourceStatus](#resourcestatus)
  * ResourceStatusReason [ResourceStatusReason](#resourcestatusreason)
  * ResourceType [ResourceType](#resourcetype)
  * StackId **required** [StackId](#stackid)
  * StackName **required** [StackName](#stackname)
  * Timestamp **required** [Timestamp](#timestamp)

### StackEvents
* StackEvents `array`
  * items [StackEvent](#stackevent)

### StackId
* StackId `string`

### StackInstance
* StackInstance `object`: An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.
  * Account [Account](#account)
  * ParameterOverrides [Parameters](#parameters)
  * Region [Region](#region)
  * StackId [StackId](#stackid)
  * StackSetId [StackSetId](#stacksetid)
  * Status [StackInstanceStatus](#stackinstancestatus)
  * StatusReason [Reason](#reason)

### StackInstanceNotFoundException
* StackInstanceNotFoundException `object`: The specified stack instance doesn't exist.

### StackInstanceStatus
* StackInstanceStatus `string` (values: CURRENT, OUTDATED, INOPERABLE)

### StackInstanceSummaries
* StackInstanceSummaries `array`
  * items [StackInstanceSummary](#stackinstancesummary)

### StackInstanceSummary
* StackInstanceSummary `object`: The structure that contains summary information about a stack instance.
  * Account [Account](#account)
  * Region [Region](#region)
  * StackId [StackId](#stackid)
  * StackSetId [StackSetId](#stacksetid)
  * Status [StackInstanceStatus](#stackinstancestatus)
  * StatusReason [Reason](#reason)

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
  * Description [Description](#description)
  * LogicalResourceId **required** [LogicalResourceId](#logicalresourceid)
  * PhysicalResourceId [PhysicalResourceId](#physicalresourceid)
  * ResourceStatus **required** [ResourceStatus](#resourcestatus)
  * ResourceStatusReason [ResourceStatusReason](#resourcestatusreason)
  * ResourceType **required** [ResourceType](#resourcetype)
  * StackId [StackId](#stackid)
  * StackName [StackName](#stackname)
  * Timestamp **required** [Timestamp](#timestamp)

### StackResourceDetail
* StackResourceDetail `object`: Contains detailed information about the specified stack resource.
  * Description [Description](#description)
  * LastUpdatedTimestamp **required** [Timestamp](#timestamp)
  * LogicalResourceId **required** [LogicalResourceId](#logicalresourceid)
  * Metadata [Metadata](#metadata)
  * PhysicalResourceId [PhysicalResourceId](#physicalresourceid)
  * ResourceStatus **required** [ResourceStatus](#resourcestatus)
  * ResourceStatusReason [ResourceStatusReason](#resourcestatusreason)
  * ResourceType **required** [ResourceType](#resourcetype)
  * StackId [StackId](#stackid)
  * StackName [StackName](#stackname)

### StackResourceSummaries
* StackResourceSummaries `array`
  * items [StackResourceSummary](#stackresourcesummary)

### StackResourceSummary
* StackResourceSummary `object`: Contains high-level information about the specified stack resource.
  * LastUpdatedTimestamp **required** [Timestamp](#timestamp)
  * LogicalResourceId **required** [LogicalResourceId](#logicalresourceid)
  * PhysicalResourceId [PhysicalResourceId](#physicalresourceid)
  * ResourceStatus **required** [ResourceStatus](#resourcestatus)
  * ResourceStatusReason [ResourceStatusReason](#resourcestatusreason)
  * ResourceType **required** [ResourceType](#resourcetype)

### StackResources
* StackResources `array`
  * items [StackResource](#stackresource)

### StackSet
* StackSet `object`: A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires. 
  * Capabilities [Capabilities](#capabilities)
  * Description [Description](#description)
  * Parameters [Parameters](#parameters)
  * StackSetId [StackSetId](#stacksetid)
  * StackSetName [StackSetName](#stacksetname)
  * Status [StackSetStatus](#stacksetstatus)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)

### StackSetId
* StackSetId `string`

### StackSetName
* StackSetName `string`

### StackSetNameOrId
* StackSetNameOrId `string`

### StackSetNotEmptyException
* StackSetNotEmptyException `object`: You can't yet delete this stack set, because it still contains one or more stack instances. Delete all stack instances from the stack set before deleting the stack set.

### StackSetNotFoundException
* StackSetNotFoundException `object`: The specified stack set doesn't exist.

### StackSetOperation
* StackSetOperation `object`: The structure that contains information about a stack set operation. 
  * Action [StackSetOperationAction](#stacksetoperationaction)
  * CreationTimestamp [Timestamp](#timestamp)
  * EndTimestamp [Timestamp](#timestamp)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * RetainStacks [RetainStacksNullable](#retainstacksnullable)
  * StackSetId [StackSetId](#stacksetid)
  * Status [StackSetOperationStatus](#stacksetoperationstatus)

### StackSetOperationAction
* StackSetOperationAction `string` (values: CREATE, UPDATE, DELETE)

### StackSetOperationPreferences
* StackSetOperationPreferences `object`: <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
  * FailureToleranceCount [FailureToleranceCount](#failuretolerancecount)
  * FailureTolerancePercentage [FailureTolerancePercentage](#failuretolerancepercentage)
  * MaxConcurrentCount [MaxConcurrentCount](#maxconcurrentcount)
  * MaxConcurrentPercentage [MaxConcurrentPercentage](#maxconcurrentpercentage)
  * RegionOrder [RegionList](#regionlist)

### StackSetOperationResultStatus
* StackSetOperationResultStatus `string` (values: PENDING, RUNNING, SUCCEEDED, FAILED, CANCELLED)

### StackSetOperationResultSummaries
* StackSetOperationResultSummaries `array`
  * items [StackSetOperationResultSummary](#stacksetoperationresultsummary)

### StackSetOperationResultSummary
* StackSetOperationResultSummary `object`: The structure that contains information about a specified operation's results for a given account in a given region.
  * Account [Account](#account)
  * AccountGateResult [AccountGateResult](#accountgateresult)
  * Region [Region](#region)
  * Status [StackSetOperationResultStatus](#stacksetoperationresultstatus)
  * StatusReason [Reason](#reason)

### StackSetOperationStatus
* StackSetOperationStatus `string` (values: RUNNING, SUCCEEDED, FAILED, STOPPING, STOPPED)

### StackSetOperationSummaries
* StackSetOperationSummaries `array`
  * items [StackSetOperationSummary](#stacksetoperationsummary)

### StackSetOperationSummary
* StackSetOperationSummary `object`: The structures that contain summary information about the specified operation.
  * Action [StackSetOperationAction](#stacksetoperationaction)
  * CreationTimestamp [Timestamp](#timestamp)
  * EndTimestamp [Timestamp](#timestamp)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * Status [StackSetOperationStatus](#stacksetoperationstatus)

### StackSetStatus
* StackSetStatus `string` (values: ACTIVE, DELETED)

### StackSetSummaries
* StackSetSummaries `array`
  * items [StackSetSummary](#stacksetsummary)

### StackSetSummary
* StackSetSummary `object`: The structures that contain summary information about the specified stack set.
  * Description [Description](#description)
  * StackSetId [StackSetId](#stacksetid)
  * StackSetName [StackSetName](#stacksetname)
  * Status [StackSetStatus](#stacksetstatus)

### StackStatus
* StackStatus `string` (values: CREATE_IN_PROGRESS, CREATE_FAILED, CREATE_COMPLETE, ROLLBACK_IN_PROGRESS, ROLLBACK_FAILED, ROLLBACK_COMPLETE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, UPDATE_IN_PROGRESS, UPDATE_COMPLETE_CLEANUP_IN_PROGRESS, UPDATE_COMPLETE, UPDATE_ROLLBACK_IN_PROGRESS, UPDATE_ROLLBACK_FAILED, UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS, UPDATE_ROLLBACK_COMPLETE, REVIEW_IN_PROGRESS)

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
  * CreationTime **required** [CreationTime](#creationtime)
  * DeletionTime [DeletionTime](#deletiontime)
  * LastUpdatedTime [LastUpdatedTime](#lastupdatedtime)
  * ParentId [StackId](#stackid)
  * RootId [StackId](#stackid)
  * StackId [StackId](#stackid)
  * StackName **required** [StackName](#stackname)
  * StackStatus **required** [StackStatus](#stackstatus)
  * StackStatusReason [StackStatusReason](#stackstatusreason)
  * TemplateDescription [TemplateDescription](#templatedescription)

### Stacks
* Stacks `array`
  * items [Stack](#stack)

### StageList
* StageList `array`
  * items [TemplateStage](#templatestage)

### StaleRequestException
* StaleRequestException `object`: Another operation has been performed on this stack set since the specified operation was performed. 

### StopStackSetOperationInput
* StopStackSetOperationInput `object`
  * OperationId **required** [ClientRequestToken](#clientrequesttoken)
  * StackSetName **required** [StackSetName](#stacksetname)

### StopStackSetOperationOutput
* StopStackSetOperationOutput `object`

### Tag
* Tag `object`: The Tag type enables you to specify a key-value pair that can be used to store information about an AWS CloudFormation stack.
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

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
  * DefaultValue [ParameterValue](#parametervalue)
  * Description [Description](#description)
  * NoEcho [NoEcho](#noecho)
  * ParameterKey [ParameterKey](#parameterkey)

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
* TokenAlreadyExistsException `object`: A client request token already exists.

### TransformName
* TransformName `string`

### TransformsList
* TransformsList `array`
  * items [TransformName](#transformname)

### Type
* Type `string`

### UpdateStackInput
* UpdateStackInput `object`: The input for an <a>UpdateStack</a> action.
  * Capabilities [Capabilities](#capabilities)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * NotificationARNs [NotificationARNs](#notificationarns)
  * Parameters [Parameters](#parameters)
  * ResourceTypes [ResourceTypes](#resourcetypes)
  * RoleARN [RoleARN](#rolearn)
  * RollbackConfiguration [RollbackConfiguration](#rollbackconfiguration)
  * StackName **required** [StackName](#stackname)
  * StackPolicyBody [StackPolicyBody](#stackpolicybody)
  * StackPolicyDuringUpdateBody [StackPolicyDuringUpdateBody](#stackpolicyduringupdatebody)
  * StackPolicyDuringUpdateURL [StackPolicyDuringUpdateURL](#stackpolicyduringupdateurl)
  * StackPolicyURL [StackPolicyURL](#stackpolicyurl)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)
  * UsePreviousTemplate [UsePreviousTemplate](#useprevioustemplate)

### UpdateStackInstancesInput
* UpdateStackInstancesInput `object`
  * Accounts **required** [AccountList](#accountlist)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * ParameterOverrides [Parameters](#parameters)
  * Regions **required** [RegionList](#regionlist)
  * StackSetName **required** [StackSetName](#stacksetname)

### UpdateStackInstancesOutput
* UpdateStackInstancesOutput `object`
  * OperationId [ClientRequestToken](#clientrequesttoken)

### UpdateStackOutput
* UpdateStackOutput `object`: The output for an <a>UpdateStack</a> action.
  * StackId [StackId](#stackid)

### UpdateStackSetInput
* UpdateStackSetInput `object`
  * Capabilities [Capabilities](#capabilities)
  * Description [Description](#description)
  * OperationId [ClientRequestToken](#clientrequesttoken)
  * OperationPreferences [StackSetOperationPreferences](#stacksetoperationpreferences)
  * Parameters [Parameters](#parameters)
  * StackSetName **required** [StackSetName](#stacksetname)
  * Tags [Tags](#tags)
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)
  * UsePreviousTemplate [UsePreviousTemplate](#useprevioustemplate)

### UpdateStackSetOutput
* UpdateStackSetOutput `object`
  * OperationId [ClientRequestToken](#clientrequesttoken)

### UpdateTerminationProtectionInput
* UpdateTerminationProtectionInput `object`
  * EnableTerminationProtection **required** [EnableTerminationProtection](#enableterminationprotection)
  * StackName **required** [StackNameOrId](#stacknameorid)

### UpdateTerminationProtectionOutput
* UpdateTerminationProtectionOutput `object`
  * StackId [StackId](#stackid)

### Url
* Url `string`

### UsePreviousTemplate
* UsePreviousTemplate `boolean`

### UsePreviousValue
* UsePreviousValue `boolean`

### ValidateTemplateInput
* ValidateTemplateInput `object`: The input for <a>ValidateTemplate</a> action.
  * TemplateBody [TemplateBody](#templatebody)
  * TemplateURL [TemplateURL](#templateurl)

### ValidateTemplateOutput
* ValidateTemplateOutput `object`: The output for <a>ValidateTemplate</a> action.
  * Capabilities [Capabilities](#capabilities)
  * CapabilitiesReason [CapabilitiesReason](#capabilitiesreason)
  * DeclaredTransforms [TransformsList](#transformslist)
  * Description [Description](#description)
  * Parameters [TemplateParameters](#templateparameters)

### Version
* Version `string`


