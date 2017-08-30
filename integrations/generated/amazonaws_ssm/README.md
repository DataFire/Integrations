# @datafire/amazonaws_ssm

Client library for Amazon Simple Systems Manager (SSM)

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ssm
```

```js
let datafire = require('datafire');
let amazonaws_ssm = require('@datafire/amazonaws_ssm').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_ssm.AddTagsToResource({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon EC2 Systems Manager</fullname> <p>Amazon EC2 Systems Manager is a collection of capabilities that helps you automate management tasks such as collecting system inventory, applying operating system (OS) patches, automating the creation of Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale. Systems Manager lets you remotely and securely manage the configuration of your managed instances. A <i>managed instance</i> is any Amazon EC2 instance or on-premises machine in your hybrid environment that has been configured for Systems Manager.</p> <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon EC2 Systems Manager User Guide</a>.</p> <p>To get started, verify prerequisites and configure managed instances. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Systems Manager Prerequisites</a>.</p>

## Actions
### AddTagsToResource



```js
amazonaws_ssm.AddTagsToResource({
  "ResourceType": "",
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* ResourceType (string) **required**
* Tags (array) **required**

### CancelCommand



```js
amazonaws_ssm.CancelCommand({
  "CommandId": ""
}, context)
```

#### Parameters
* CommandId (string) **required**
* InstanceIds (array)

### CreateActivation



```js
amazonaws_ssm.CreateActivation({
  "IamRole": ""
}, context)
```

#### Parameters
* DefaultInstanceName (string)
* Description (string)
* ExpirationDate (string)
* IamRole (string) **required**
* RegistrationLimit (integer)

### CreateAssociation



```js
amazonaws_ssm.CreateAssociation({
  "Name": ""
}, context)
```

#### Parameters
* DocumentVersion (string)
* InstanceId (string)
* Name (string) **required**
* OutputLocation (object) - An Amazon S3 bucket where you want to store the results of this request.
* Parameters (array)
* ScheduleExpression (string)
* Targets (array)

### CreateAssociationBatch



```js
amazonaws_ssm.CreateAssociationBatch({
  "Entries": []
}, context)
```

#### Parameters
* Entries (array) **required**

### CreateDocument



```js
amazonaws_ssm.CreateDocument({
  "Content": "",
  "Name": ""
}, context)
```

#### Parameters
* Content (string) **required**
* DocumentType (string)
* Name (string) **required**

### CreateMaintenanceWindow



```js
amazonaws_ssm.CreateMaintenanceWindow({
  "Name": "",
  "Schedule": "",
  "Duration": 0,
  "Cutoff": 0,
  "AllowUnassociatedTargets": true
}, context)
```

#### Parameters
* AllowUnassociatedTargets (boolean) **required**
* ClientToken (string)
* Cutoff (integer) **required**
* Duration (integer) **required**
* Name (string) **required**
* Schedule (string) **required**

### CreatePatchBaseline



```js
amazonaws_ssm.CreatePatchBaseline({
  "Name": ""
}, context)
```

#### Parameters
* ApprovalRules (object) - A set of rules defining the approval rules for a patch baseline.
* ApprovedPatches (array)
* ClientToken (string)
* Description (string)
* GlobalFilters (object) - A set of patch filters, typically used for approval rules.
* Name (string) **required**
* RejectedPatches (array)

### DeleteActivation



```js
amazonaws_ssm.DeleteActivation({
  "ActivationId": ""
}, context)
```

#### Parameters
* ActivationId (string) **required**

### DeleteAssociation



```js
amazonaws_ssm.DeleteAssociation({}, context)
```

#### Parameters
* AssociationId (string)
* InstanceId (string)
* Name (string)

### DeleteDocument



```js
amazonaws_ssm.DeleteDocument({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeleteMaintenanceWindow



```js
amazonaws_ssm.DeleteMaintenanceWindow({
  "WindowId": ""
}, context)
```

#### Parameters
* WindowId (string) **required**

### DeleteParameter



```js
amazonaws_ssm.DeleteParameter({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeletePatchBaseline



```js
amazonaws_ssm.DeletePatchBaseline({
  "BaselineId": ""
}, context)
```

#### Parameters
* BaselineId (string) **required**

### DeregisterManagedInstance



```js
amazonaws_ssm.DeregisterManagedInstance({
  "InstanceId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**

### DeregisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.DeregisterPatchBaselineForPatchGroup({
  "BaselineId": "",
  "PatchGroup": ""
}, context)
```

#### Parameters
* BaselineId (string) **required**
* PatchGroup (string) **required**

### DeregisterTargetFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTargetFromMaintenanceWindow({
  "WindowId": "",
  "WindowTargetId": ""
}, context)
```

#### Parameters
* WindowId (string) **required**
* WindowTargetId (string) **required**

### DeregisterTaskFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTaskFromMaintenanceWindow({
  "WindowId": "",
  "WindowTaskId": ""
}, context)
```

#### Parameters
* WindowId (string) **required**
* WindowTaskId (string) **required**

### DescribeActivations



```js
amazonaws_ssm.DescribeActivations({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribeAssociation



```js
amazonaws_ssm.DescribeAssociation({}, context)
```

#### Parameters
* AssociationId (string)
* InstanceId (string)
* Name (string)

### DescribeAutomationExecutions



```js
amazonaws_ssm.DescribeAutomationExecutions({}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribeAvailablePatches



```js
amazonaws_ssm.DescribeAvailablePatches({}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribeDocument



```js
amazonaws_ssm.DescribeDocument({
  "Name": ""
}, context)
```

#### Parameters
* DocumentVersion (string)
* Name (string) **required**

### DescribeDocumentPermission



```js
amazonaws_ssm.DescribeDocumentPermission({
  "Name": "",
  "PermissionType": ""
}, context)
```

#### Parameters
* Name (string) **required**
* PermissionType (string) **required**

### DescribeEffectiveInstanceAssociations



```js
amazonaws_ssm.DescribeEffectiveInstanceAssociations({
  "InstanceId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**
* MaxResults (integer)
* NextToken (string)

### DescribeEffectivePatchesForPatchBaseline



```js
amazonaws_ssm.DescribeEffectivePatchesForPatchBaseline({
  "BaselineId": ""
}, context)
```

#### Parameters
* BaselineId (string) **required**
* MaxResults (integer)
* NextToken (string)

### DescribeInstanceAssociationsStatus



```js
amazonaws_ssm.DescribeInstanceAssociationsStatus({
  "InstanceId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**
* MaxResults (integer)
* NextToken (string)

### DescribeInstanceInformation



```js
amazonaws_ssm.DescribeInstanceInformation({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* Filters (array)
* InstanceInformationFilterList (array)
* MaxResults (integer)
* NextToken (string)

### DescribeInstancePatchStates



```js
amazonaws_ssm.DescribeInstancePatchStates({
  "InstanceIds": []
}, context)
```

#### Parameters
* InstanceIds (array) **required**
* MaxResults (integer)
* NextToken (string)

### DescribeInstancePatchStatesForPatchGroup



```js
amazonaws_ssm.DescribeInstancePatchStatesForPatchGroup({
  "PatchGroup": ""
}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* PatchGroup (string) **required**

### DescribeInstancePatches



```js
amazonaws_ssm.DescribeInstancePatches({
  "InstanceId": ""
}, context)
```

#### Parameters
* Filters (array)
* InstanceId (string) **required**
* MaxResults (integer)
* NextToken (string)

### DescribeMaintenanceWindowExecutionTaskInvocations



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTaskInvocations({
  "WindowExecutionId": "",
  "TaskId": ""
}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* TaskId (string) **required**
* WindowExecutionId (string) **required**

### DescribeMaintenanceWindowExecutionTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTasks({
  "WindowExecutionId": ""
}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* WindowExecutionId (string) **required**

### DescribeMaintenanceWindowExecutions



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutions({
  "WindowId": ""
}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* WindowId (string) **required**

### DescribeMaintenanceWindowTargets



```js
amazonaws_ssm.DescribeMaintenanceWindowTargets({
  "WindowId": ""
}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* WindowId (string) **required**

### DescribeMaintenanceWindowTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowTasks({
  "WindowId": ""
}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* WindowId (string) **required**

### DescribeMaintenanceWindows



```js
amazonaws_ssm.DescribeMaintenanceWindows({}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribeParameters



```js
amazonaws_ssm.DescribeParameters({}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribePatchBaselines



```js
amazonaws_ssm.DescribePatchBaselines({}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribePatchGroupState



```js
amazonaws_ssm.DescribePatchGroupState({
  "PatchGroup": ""
}, context)
```

#### Parameters
* PatchGroup (string) **required**

### DescribePatchGroups



```js
amazonaws_ssm.DescribePatchGroups({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)

### GetAutomationExecution



```js
amazonaws_ssm.GetAutomationExecution({
  "AutomationExecutionId": ""
}, context)
```

#### Parameters
* AutomationExecutionId (string) **required**

### GetCommandInvocation



```js
amazonaws_ssm.GetCommandInvocation({
  "CommandId": "",
  "InstanceId": ""
}, context)
```

#### Parameters
* CommandId (string) **required**
* InstanceId (string) **required**
* PluginName (string)

### GetDefaultPatchBaseline



```js
amazonaws_ssm.GetDefaultPatchBaseline({}, context)
```

#### Parameters
*This action has no parameters*

### GetDeployablePatchSnapshotForInstance



```js
amazonaws_ssm.GetDeployablePatchSnapshotForInstance({
  "InstanceId": "",
  "SnapshotId": ""
}, context)
```

#### Parameters
* InstanceId (string) **required**
* SnapshotId (string) **required**

### GetDocument



```js
amazonaws_ssm.GetDocument({
  "Name": ""
}, context)
```

#### Parameters
* DocumentVersion (string)
* Name (string) **required**

### GetInventory



```js
amazonaws_ssm.GetInventory({}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* ResultAttributes (array)

### GetInventorySchema



```js
amazonaws_ssm.GetInventorySchema({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* TypeName (string)

### GetMaintenanceWindow



```js
amazonaws_ssm.GetMaintenanceWindow({
  "WindowId": ""
}, context)
```

#### Parameters
* WindowId (string) **required**

### GetMaintenanceWindowExecution



```js
amazonaws_ssm.GetMaintenanceWindowExecution({
  "WindowExecutionId": ""
}, context)
```

#### Parameters
* WindowExecutionId (string) **required**

### GetMaintenanceWindowExecutionTask



```js
amazonaws_ssm.GetMaintenanceWindowExecutionTask({
  "WindowExecutionId": "",
  "TaskId": ""
}, context)
```

#### Parameters
* TaskId (string) **required**
* WindowExecutionId (string) **required**

### GetParameterHistory



```js
amazonaws_ssm.GetParameterHistory({
  "Name": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* Name (string) **required**
* NextToken (string)
* WithDecryption (boolean)

### GetParameters



```js
amazonaws_ssm.GetParameters({
  "Names": []
}, context)
```

#### Parameters
* Names (array) **required**
* WithDecryption (boolean)

### GetPatchBaseline



```js
amazonaws_ssm.GetPatchBaseline({
  "BaselineId": ""
}, context)
```

#### Parameters
* BaselineId (string) **required**

### GetPatchBaselineForPatchGroup



```js
amazonaws_ssm.GetPatchBaselineForPatchGroup({
  "PatchGroup": ""
}, context)
```

#### Parameters
* PatchGroup (string) **required**

### ListAssociations



```js
amazonaws_ssm.ListAssociations({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* AssociationFilterList (array)
* MaxResults (integer)
* NextToken (string)

### ListCommandInvocations



```js
amazonaws_ssm.ListCommandInvocations({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CommandId (string)
* Details (boolean)
* Filters (array)
* InstanceId (string)
* MaxResults (integer)
* NextToken (string)

### ListCommands



```js
amazonaws_ssm.ListCommands({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* CommandId (string)
* Filters (array)
* InstanceId (string)
* MaxResults (integer)
* NextToken (string)

### ListDocumentVersions



```js
amazonaws_ssm.ListDocumentVersions({
  "Name": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* Name (string) **required**
* NextToken (string)

### ListDocuments



```js
amazonaws_ssm.ListDocuments({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DocumentFilterList (array)
* MaxResults (integer)
* NextToken (string)

### ListInventoryEntries



```js
amazonaws_ssm.ListInventoryEntries({
  "InstanceId": "",
  "TypeName": ""
}, context)
```

#### Parameters
* Filters (array)
* InstanceId (string) **required**
* MaxResults (integer)
* NextToken (string)
* TypeName (string) **required**

### ListTagsForResource



```js
amazonaws_ssm.ListTagsForResource({
  "ResourceType": "",
  "ResourceId": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**
* ResourceType (string) **required**

### ModifyDocumentPermission



```js
amazonaws_ssm.ModifyDocumentPermission({
  "Name": "",
  "PermissionType": ""
}, context)
```

#### Parameters
* AccountIdsToAdd (array)
* AccountIdsToRemove (array)
* Name (string) **required**
* PermissionType (string) **required**

### PutInventory



```js
amazonaws_ssm.PutInventory({
  "InstanceId": "",
  "Items": []
}, context)
```

#### Parameters
* InstanceId (string) **required**
* Items (array) **required**

### PutParameter



```js
amazonaws_ssm.PutParameter({
  "Name": "",
  "Value": "",
  "Type": ""
}, context)
```

#### Parameters
* Description (string)
* KeyId (string)
* Name (string) **required**
* Overwrite (boolean)
* Type (string) **required**
* Value (string) **required**

### RegisterDefaultPatchBaseline



```js
amazonaws_ssm.RegisterDefaultPatchBaseline({
  "BaselineId": ""
}, context)
```

#### Parameters
* BaselineId (string) **required**

### RegisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.RegisterPatchBaselineForPatchGroup({
  "BaselineId": "",
  "PatchGroup": ""
}, context)
```

#### Parameters
* BaselineId (string) **required**
* PatchGroup (string) **required**

### RegisterTargetWithMaintenanceWindow



```js
amazonaws_ssm.RegisterTargetWithMaintenanceWindow({
  "WindowId": "",
  "ResourceType": "",
  "Targets": []
}, context)
```

#### Parameters
* ClientToken (string)
* OwnerInformation (string)
* ResourceType (string) **required**
* Targets (array) **required**
* WindowId (string) **required**

### RegisterTaskWithMaintenanceWindow



```js
amazonaws_ssm.RegisterTaskWithMaintenanceWindow({
  "WindowId": "",
  "Targets": [],
  "TaskArn": "",
  "ServiceRoleArn": "",
  "TaskType": "",
  "MaxConcurrency": "",
  "MaxErrors": ""
}, context)
```

#### Parameters
* ClientToken (string)
* LoggingInfo (object) - Information about an Amazon S3 bucket to write instance-level logs to.
* MaxConcurrency (string) **required**
* MaxErrors (string) **required**
* Priority (integer)
* ServiceRoleArn (string) **required**
* Targets (array) **required**
* TaskArn (string) **required**
* TaskParameters (array)
* TaskType (string) **required**
* WindowId (string) **required**

### RemoveTagsFromResource



```js
amazonaws_ssm.RemoveTagsFromResource({
  "ResourceType": "",
  "ResourceId": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* ResourceType (string) **required**
* TagKeys (array) **required**

### SendCommand



```js
amazonaws_ssm.SendCommand({
  "DocumentName": ""
}, context)
```

#### Parameters
* Comment (string)
* DocumentHash (string)
* DocumentHashType (string)
* DocumentName (string) **required**
* InstanceIds (array)
* MaxConcurrency (string)
* MaxErrors (string)
* NotificationConfig (object) - Configurations for sending notifications.
* OutputS3BucketName (string)
* OutputS3KeyPrefix (string)
* OutputS3Region (string)
* Parameters (array)
* ServiceRoleArn (string)
* Targets (array)
* TimeoutSeconds (integer)

### StartAutomationExecution



```js
amazonaws_ssm.StartAutomationExecution({
  "DocumentName": ""
}, context)
```

#### Parameters
* DocumentName (string) **required**
* DocumentVersion (string)
* Parameters (array)

### StopAutomationExecution



```js
amazonaws_ssm.StopAutomationExecution({
  "AutomationExecutionId": ""
}, context)
```

#### Parameters
* AutomationExecutionId (string) **required**

### UpdateAssociation



```js
amazonaws_ssm.UpdateAssociation({
  "AssociationId": ""
}, context)
```

#### Parameters
* AssociationId (string) **required**
* DocumentVersion (string)
* OutputLocation (object) - An Amazon S3 bucket where you want to store the results of this request.
* Parameters (array)
* ScheduleExpression (string)

### UpdateAssociationStatus



```js
amazonaws_ssm.UpdateAssociationStatus({
  "Name": "",
  "InstanceId": "",
  "AssociationStatus": {
    "Date": "",
    "Name": "",
    "Message": ""
  }
}, context)
```

#### Parameters
* AssociationStatus (object) **required** - Describes an association status.
* InstanceId (string) **required**
* Name (string) **required**

### UpdateDocument



```js
amazonaws_ssm.UpdateDocument({
  "Content": "",
  "Name": ""
}, context)
```

#### Parameters
* Content (string) **required**
* DocumentVersion (string)
* Name (string) **required**

### UpdateDocumentDefaultVersion



```js
amazonaws_ssm.UpdateDocumentDefaultVersion({
  "Name": "",
  "DocumentVersion": ""
}, context)
```

#### Parameters
* DocumentVersion (string) **required**
* Name (string) **required**

### UpdateMaintenanceWindow



```js
amazonaws_ssm.UpdateMaintenanceWindow({
  "WindowId": ""
}, context)
```

#### Parameters
* AllowUnassociatedTargets (boolean)
* Cutoff (integer)
* Duration (integer)
* Enabled (boolean)
* Name (string)
* Schedule (string)
* WindowId (string) **required**

### UpdateManagedInstanceRole



```js
amazonaws_ssm.UpdateManagedInstanceRole({
  "InstanceId": "",
  "IamRole": ""
}, context)
```

#### Parameters
* IamRole (string) **required**
* InstanceId (string) **required**

### UpdatePatchBaseline



```js
amazonaws_ssm.UpdatePatchBaseline({
  "BaselineId": ""
}, context)
```

#### Parameters
* ApprovalRules (object) - A set of rules defining the approval rules for a patch baseline.
* ApprovedPatches (array)
* BaselineId (string) **required**
* Description (string)
* GlobalFilters (object) - A set of patch filters, typically used for approval rules.
* Name (string)
* RejectedPatches (array)

