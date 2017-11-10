# @datafire/amazonaws_cloudformation

Client library for AWS CloudFormation

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudformation
```

```js
let datafire = require('datafire');
let amazonaws_cloudformation = require('@datafire/amazonaws_cloudformation').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_cloudformation.CancelUpdateStack({}).then(data => {
  console.log(data);
})
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

#### Parameters
* ClientRequestToken (string)
* StackName (string) **required**

### ContinueUpdateRollback



```js
amazonaws_cloudformation.ContinueUpdateRollback({
  "StackName": ""
}, context)
```

#### Parameters
* ClientRequestToken (string)
* ResourcesToSkip (array)
* RoleARN (string)
* StackName (string) **required**

### CreateChangeSet



```js
amazonaws_cloudformation.CreateChangeSet({
  "StackName": "",
  "ChangeSetName": ""
}, context)
```

#### Parameters
* Capabilities (array)
* ChangeSetName (string) **required**
* ChangeSetType (string)
* ClientToken (string)
* Description (string)
* NotificationARNs (array)
* Parameters (array)
* ResourceTypes (array)
* RoleARN (string)
* RollbackConfiguration (object) - <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For each rollback trigger you create, you specify the Cloudwatch alarm that CloudFormation should monitor. CloudFormation monitors the specified alarms during the stack create or update operation, and for the specified amount of time after all resources have been deployed. If any of the alarms goes to ALERT state during the stack operation or the monitoring period, CloudFormation rolls back the entire stack operation. If the monitoring period expires without any alarms going to ALERT state, CloudFormation proceeds to dispose of old resources as usual.</p> <p>By default, CloudFormation only rolls back stack operations if an alarm goes to ALERT state, not INSUFFICIENT_DATA state. To have CloudFormation roll back the stack operation if an alarm goes to INSUFFICIENT_DATA state as well, edit the CloudWatch alarm to treat missing data as <code>breaching</code>. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html">Configuring How CloudWatch Alarms Treats Missing Data</a>.</p> <p>AWS CloudFormation does not monitor rollback triggers when it rolls back a stack during an update operation.</p>
* StackName (string) **required**
* Tags (array)
* TemplateBody (string)
* TemplateURL (string)
* UsePreviousTemplate (boolean)

### CreateStack



```js
amazonaws_cloudformation.CreateStack({
  "StackName": ""
}, context)
```

#### Parameters
* Capabilities (array)
* ClientRequestToken (string)
* DisableRollback (boolean)
* EnableTerminationProtection (boolean)
* NotificationARNs (array)
* OnFailure (string)
* Parameters (array)
* ResourceTypes (array)
* RoleARN (string)
* RollbackConfiguration (object) - <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For each rollback trigger you create, you specify the Cloudwatch alarm that CloudFormation should monitor. CloudFormation monitors the specified alarms during the stack create or update operation, and for the specified amount of time after all resources have been deployed. If any of the alarms goes to ALERT state during the stack operation or the monitoring period, CloudFormation rolls back the entire stack operation. If the monitoring period expires without any alarms going to ALERT state, CloudFormation proceeds to dispose of old resources as usual.</p> <p>By default, CloudFormation only rolls back stack operations if an alarm goes to ALERT state, not INSUFFICIENT_DATA state. To have CloudFormation roll back the stack operation if an alarm goes to INSUFFICIENT_DATA state as well, edit the CloudWatch alarm to treat missing data as <code>breaching</code>. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html">Configuring How CloudWatch Alarms Treats Missing Data</a>.</p> <p>AWS CloudFormation does not monitor rollback triggers when it rolls back a stack during an update operation.</p>
* StackName (string) **required**
* StackPolicyBody (string)
* StackPolicyURL (string)
* Tags (array)
* TemplateBody (string)
* TemplateURL (string)
* TimeoutInMinutes (integer)

### CreateStackInstances



```js
amazonaws_cloudformation.CreateStackInstances({
  "StackSetName": "",
  "Accounts": [],
  "Regions": []
}, context)
```

#### Parameters
* Accounts (array) **required**
* OperationId (string)
* OperationPreferences (object) - <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
* Regions (array) **required**
* StackSetName (string) **required**

### CreateStackSet



```js
amazonaws_cloudformation.CreateStackSet({
  "StackSetName": ""
}, context)
```

#### Parameters
* Capabilities (array)
* ClientRequestToken (string)
* Description (string)
* Parameters (array)
* StackSetName (string) **required**
* Tags (array)
* TemplateBody (string)
* TemplateURL (string)

### DeleteChangeSet



```js
amazonaws_cloudformation.DeleteChangeSet({
  "ChangeSetName": ""
}, context)
```

#### Parameters
* ChangeSetName (string) **required**
* StackName (string)

### DeleteStack



```js
amazonaws_cloudformation.DeleteStack({
  "StackName": ""
}, context)
```

#### Parameters
* ClientRequestToken (string)
* RetainResources (array)
* RoleARN (string)
* StackName (string) **required**

### DeleteStackInstances



```js
amazonaws_cloudformation.DeleteStackInstances({
  "StackSetName": "",
  "Accounts": [],
  "Regions": [],
  "RetainStacks": true
}, context)
```

#### Parameters
* Accounts (array) **required**
* OperationId (string)
* OperationPreferences (object) - <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
* Regions (array) **required**
* RetainStacks (boolean) **required**
* StackSetName (string) **required**

### DeleteStackSet



```js
amazonaws_cloudformation.DeleteStackSet({
  "StackSetName": ""
}, context)
```

#### Parameters
* StackSetName (string) **required**

### DescribeAccountLimits



```js
amazonaws_cloudformation.DescribeAccountLimits({}, context)
```

#### Parameters
* NextToken (string)

### DescribeChangeSet



```js
amazonaws_cloudformation.DescribeChangeSet({
  "ChangeSetName": ""
}, context)
```

#### Parameters
* ChangeSetName (string) **required**
* NextToken (string)
* StackName (string)

### DescribeStackEvents



```js
amazonaws_cloudformation.DescribeStackEvents({}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)
* StackName (string)

### DescribeStackInstance



```js
amazonaws_cloudformation.DescribeStackInstance({
  "StackSetName": "",
  "StackInstanceAccount": "",
  "StackInstanceRegion": ""
}, context)
```

#### Parameters
* StackInstanceAccount (string) **required**
* StackInstanceRegion (string) **required**
* StackSetName (string) **required**

### DescribeStackResource



```js
amazonaws_cloudformation.DescribeStackResource({
  "StackName": "",
  "LogicalResourceId": ""
}, context)
```

#### Parameters
* LogicalResourceId (string) **required**
* StackName (string) **required**

### DescribeStackResources



```js
amazonaws_cloudformation.DescribeStackResources({}, context)
```

#### Parameters
* LogicalResourceId (string)
* PhysicalResourceId (string)
* StackName (string)

### DescribeStackSet



```js
amazonaws_cloudformation.DescribeStackSet({
  "StackSetName": ""
}, context)
```

#### Parameters
* StackSetName (string) **required**

### DescribeStackSetOperation



```js
amazonaws_cloudformation.DescribeStackSetOperation({
  "StackSetName": "",
  "OperationId": ""
}, context)
```

#### Parameters
* OperationId (string) **required**
* StackSetName (string) **required**

### DescribeStacks



```js
amazonaws_cloudformation.DescribeStacks({}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)
* StackName (string)

### EstimateTemplateCost



```js
amazonaws_cloudformation.EstimateTemplateCost({}, context)
```

#### Parameters
* Parameters (array)
* TemplateBody (string)
* TemplateURL (string)

### ExecuteChangeSet



```js
amazonaws_cloudformation.ExecuteChangeSet({
  "ChangeSetName": ""
}, context)
```

#### Parameters
* ChangeSetName (string) **required**
* ClientRequestToken (string)
* StackName (string)

### GetStackPolicy



```js
amazonaws_cloudformation.GetStackPolicy({
  "StackName": ""
}, context)
```

#### Parameters
* StackName (string) **required**

### GetTemplate



```js
amazonaws_cloudformation.GetTemplate({}, context)
```

#### Parameters
* ChangeSetName (string)
* StackName (string)
* TemplateStage (string)

### GetTemplateSummary



```js
amazonaws_cloudformation.GetTemplateSummary({}, context)
```

#### Parameters
* StackName (string)
* StackSetName (string)
* TemplateBody (string)
* TemplateURL (string)

### ListChangeSets



```js
amazonaws_cloudformation.ListChangeSets({
  "StackName": ""
}, context)
```

#### Parameters
* NextToken (string)
* StackName (string) **required**

### ListExports



```js
amazonaws_cloudformation.ListExports({}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)

### ListImports



```js
amazonaws_cloudformation.ListImports({
  "ExportName": ""
}, context)
```

#### Parameters
* NextToken (string)
* ExportName (string) **required**
* NextToken (string)

### ListStackInstances



```js
amazonaws_cloudformation.ListStackInstances({
  "StackSetName": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* StackInstanceAccount (string)
* StackInstanceRegion (string)
* StackSetName (string) **required**

### ListStackResources



```js
amazonaws_cloudformation.ListStackResources({
  "StackName": ""
}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)
* StackName (string) **required**

### ListStackSetOperationResults



```js
amazonaws_cloudformation.ListStackSetOperationResults({
  "StackSetName": "",
  "OperationId": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* OperationId (string) **required**
* StackSetName (string) **required**

### ListStackSetOperations



```js
amazonaws_cloudformation.ListStackSetOperations({
  "StackSetName": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* StackSetName (string) **required**

### ListStackSets



```js
amazonaws_cloudformation.ListStackSets({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* Status (string)

### ListStacks



```js
amazonaws_cloudformation.ListStacks({}, context)
```

#### Parameters
* NextToken (string)
* NextToken (string)
* StackStatusFilter (array)

### SetStackPolicy



```js
amazonaws_cloudformation.SetStackPolicy({
  "StackName": ""
}, context)
```

#### Parameters
* StackName (string) **required**
* StackPolicyBody (string)
* StackPolicyURL (string)

### SignalResource



```js
amazonaws_cloudformation.SignalResource({
  "StackName": "",
  "LogicalResourceId": "",
  "UniqueId": "",
  "Status": ""
}, context)
```

#### Parameters
* LogicalResourceId (string) **required**
* StackName (string) **required**
* Status (string) **required**
* UniqueId (string) **required**

### StopStackSetOperation



```js
amazonaws_cloudformation.StopStackSetOperation({
  "StackSetName": "",
  "OperationId": ""
}, context)
```

#### Parameters
* OperationId (string) **required**
* StackSetName (string) **required**

### UpdateStack



```js
amazonaws_cloudformation.UpdateStack({
  "StackName": ""
}, context)
```

#### Parameters
* Capabilities (array)
* ClientRequestToken (string)
* NotificationARNs (array)
* Parameters (array)
* ResourceTypes (array)
* RoleARN (string)
* RollbackConfiguration (object) - <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For each rollback trigger you create, you specify the Cloudwatch alarm that CloudFormation should monitor. CloudFormation monitors the specified alarms during the stack create or update operation, and for the specified amount of time after all resources have been deployed. If any of the alarms goes to ALERT state during the stack operation or the monitoring period, CloudFormation rolls back the entire stack operation. If the monitoring period expires without any alarms going to ALERT state, CloudFormation proceeds to dispose of old resources as usual.</p> <p>By default, CloudFormation only rolls back stack operations if an alarm goes to ALERT state, not INSUFFICIENT_DATA state. To have CloudFormation roll back the stack operation if an alarm goes to INSUFFICIENT_DATA state as well, edit the CloudWatch alarm to treat missing data as <code>breaching</code>. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html">Configuring How CloudWatch Alarms Treats Missing Data</a>.</p> <p>AWS CloudFormation does not monitor rollback triggers when it rolls back a stack during an update operation.</p>
* StackName (string) **required**
* StackPolicyBody (string)
* StackPolicyDuringUpdateBody (string)
* StackPolicyDuringUpdateURL (string)
* StackPolicyURL (string)
* Tags (array)
* TemplateBody (string)
* TemplateURL (string)
* UsePreviousTemplate (boolean)

### UpdateStackSet



```js
amazonaws_cloudformation.UpdateStackSet({
  "StackSetName": ""
}, context)
```

#### Parameters
* Capabilities (array)
* Description (string)
* OperationId (string)
* OperationPreferences (object) - <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
* Parameters (array)
* StackSetName (string) **required**
* Tags (array)
* TemplateBody (string)
* TemplateURL (string)
* UsePreviousTemplate (boolean)

### UpdateTerminationProtection



```js
amazonaws_cloudformation.UpdateTerminationProtection({
  "EnableTerminationProtection": true,
  "StackName": ""
}, context)
```

#### Parameters
* EnableTerminationProtection (boolean) **required**
* StackName (string) **required**

### ValidateTemplate



```js
amazonaws_cloudformation.ValidateTemplate({}, context)
```

#### Parameters
* TemplateBody (string)
* TemplateURL (string)

