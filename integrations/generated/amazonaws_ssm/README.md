# @datafire/amazonaws_ssm

Client library for Amazon Simple Systems Manager (SSM)

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ssm
```

```js
let datafire = require('datafire');
let amazonaws_ssm = require('@datafire/amazonaws_ssm').actions;
let context = new datafire.Context();

amazonaws_ssm.AddTagsToResource({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon EC2 Systems Manager</fullname> <p>Amazon EC2 Systems Manager is a collection of capabilities that helps you automate management tasks such as collecting system inventory, applying operating system (OS) patches, automating the creation of Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale. Systems Manager lets you remotely and securely manage the configuration of your managed instances. A <i>managed instance</i> is any Amazon EC2 instance or on-premises machine in your hybrid environment that has been configured for Systems Manager.</p> <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon EC2 Systems Manager User Guide</a>.</p> <p>To get started, verify prerequisites and configure managed instances. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Systems Manager Prerequisites</a>.</p>

## Actions
### AddTagsToResource



```js
amazonaws_ssm.AddTagsToResource({}, context)
```

#### Parameters

### CancelCommand



```js
amazonaws_ssm.CancelCommand({}, context)
```

#### Parameters

### CreateActivation



```js
amazonaws_ssm.CreateActivation({}, context)
```

#### Parameters

### CreateAssociation



```js
amazonaws_ssm.CreateAssociation({}, context)
```

#### Parameters

### CreateAssociationBatch



```js
amazonaws_ssm.CreateAssociationBatch({}, context)
```

#### Parameters

### CreateDocument



```js
amazonaws_ssm.CreateDocument({}, context)
```

#### Parameters

### CreateMaintenanceWindow



```js
amazonaws_ssm.CreateMaintenanceWindow({}, context)
```

#### Parameters

### CreatePatchBaseline



```js
amazonaws_ssm.CreatePatchBaseline({}, context)
```

#### Parameters

### DeleteActivation



```js
amazonaws_ssm.DeleteActivation({}, context)
```

#### Parameters

### DeleteAssociation



```js
amazonaws_ssm.DeleteAssociation({}, context)
```

#### Parameters

### DeleteDocument



```js
amazonaws_ssm.DeleteDocument({}, context)
```

#### Parameters

### DeleteMaintenanceWindow



```js
amazonaws_ssm.DeleteMaintenanceWindow({}, context)
```

#### Parameters

### DeleteParameter



```js
amazonaws_ssm.DeleteParameter({}, context)
```

#### Parameters

### DeletePatchBaseline



```js
amazonaws_ssm.DeletePatchBaseline({}, context)
```

#### Parameters

### DeregisterManagedInstance



```js
amazonaws_ssm.DeregisterManagedInstance({}, context)
```

#### Parameters

### DeregisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.DeregisterPatchBaselineForPatchGroup({}, context)
```

#### Parameters

### DeregisterTargetFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTargetFromMaintenanceWindow({}, context)
```

#### Parameters

### DeregisterTaskFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTaskFromMaintenanceWindow({}, context)
```

#### Parameters

### DescribeActivations



```js
amazonaws_ssm.DescribeActivations({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeAssociation



```js
amazonaws_ssm.DescribeAssociation({}, context)
```

#### Parameters

### DescribeAutomationExecutions



```js
amazonaws_ssm.DescribeAutomationExecutions({}, context)
```

#### Parameters

### DescribeAvailablePatches



```js
amazonaws_ssm.DescribeAvailablePatches({}, context)
```

#### Parameters

### DescribeDocument



```js
amazonaws_ssm.DescribeDocument({}, context)
```

#### Parameters

### DescribeDocumentPermission



```js
amazonaws_ssm.DescribeDocumentPermission({}, context)
```

#### Parameters

### DescribeEffectiveInstanceAssociations



```js
amazonaws_ssm.DescribeEffectiveInstanceAssociations({}, context)
```

#### Parameters

### DescribeEffectivePatchesForPatchBaseline



```js
amazonaws_ssm.DescribeEffectivePatchesForPatchBaseline({}, context)
```

#### Parameters

### DescribeInstanceAssociationsStatus



```js
amazonaws_ssm.DescribeInstanceAssociationsStatus({}, context)
```

#### Parameters

### DescribeInstanceInformation



```js
amazonaws_ssm.DescribeInstanceInformation({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeInstancePatchStates



```js
amazonaws_ssm.DescribeInstancePatchStates({}, context)
```

#### Parameters

### DescribeInstancePatchStatesForPatchGroup



```js
amazonaws_ssm.DescribeInstancePatchStatesForPatchGroup({}, context)
```

#### Parameters

### DescribeInstancePatches



```js
amazonaws_ssm.DescribeInstancePatches({}, context)
```

#### Parameters

### DescribeMaintenanceWindowExecutionTaskInvocations



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTaskInvocations({}, context)
```

#### Parameters

### DescribeMaintenanceWindowExecutionTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTasks({}, context)
```

#### Parameters

### DescribeMaintenanceWindowExecutions



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutions({}, context)
```

#### Parameters

### DescribeMaintenanceWindowTargets



```js
amazonaws_ssm.DescribeMaintenanceWindowTargets({}, context)
```

#### Parameters

### DescribeMaintenanceWindowTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowTasks({}, context)
```

#### Parameters

### DescribeMaintenanceWindows



```js
amazonaws_ssm.DescribeMaintenanceWindows({}, context)
```

#### Parameters

### DescribeParameters



```js
amazonaws_ssm.DescribeParameters({}, context)
```

#### Parameters

### DescribePatchBaselines



```js
amazonaws_ssm.DescribePatchBaselines({}, context)
```

#### Parameters

### DescribePatchGroupState



```js
amazonaws_ssm.DescribePatchGroupState({}, context)
```

#### Parameters

### DescribePatchGroups



```js
amazonaws_ssm.DescribePatchGroups({}, context)
```

#### Parameters

### GetAutomationExecution



```js
amazonaws_ssm.GetAutomationExecution({}, context)
```

#### Parameters

### GetCommandInvocation



```js
amazonaws_ssm.GetCommandInvocation({}, context)
```

#### Parameters

### GetDefaultPatchBaseline



```js
amazonaws_ssm.GetDefaultPatchBaseline({}, context)
```

#### Parameters

### GetDeployablePatchSnapshotForInstance



```js
amazonaws_ssm.GetDeployablePatchSnapshotForInstance({}, context)
```

#### Parameters

### GetDocument



```js
amazonaws_ssm.GetDocument({}, context)
```

#### Parameters

### GetInventory



```js
amazonaws_ssm.GetInventory({}, context)
```

#### Parameters

### GetInventorySchema



```js
amazonaws_ssm.GetInventorySchema({}, context)
```

#### Parameters

### GetMaintenanceWindow



```js
amazonaws_ssm.GetMaintenanceWindow({}, context)
```

#### Parameters

### GetMaintenanceWindowExecution



```js
amazonaws_ssm.GetMaintenanceWindowExecution({}, context)
```

#### Parameters

### GetMaintenanceWindowExecutionTask



```js
amazonaws_ssm.GetMaintenanceWindowExecutionTask({}, context)
```

#### Parameters

### GetParameterHistory



```js
amazonaws_ssm.GetParameterHistory({}, context)
```

#### Parameters

### GetParameters



```js
amazonaws_ssm.GetParameters({}, context)
```

#### Parameters

### GetPatchBaseline



```js
amazonaws_ssm.GetPatchBaseline({}, context)
```

#### Parameters

### GetPatchBaselineForPatchGroup



```js
amazonaws_ssm.GetPatchBaselineForPatchGroup({}, context)
```

#### Parameters

### ListAssociations



```js
amazonaws_ssm.ListAssociations({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListCommandInvocations



```js
amazonaws_ssm.ListCommandInvocations({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListCommands



```js
amazonaws_ssm.ListCommands({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListDocumentVersions



```js
amazonaws_ssm.ListDocumentVersions({}, context)
```

#### Parameters

### ListDocuments



```js
amazonaws_ssm.ListDocuments({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListInventoryEntries



```js
amazonaws_ssm.ListInventoryEntries({}, context)
```

#### Parameters

### ListTagsForResource



```js
amazonaws_ssm.ListTagsForResource({}, context)
```

#### Parameters

### ModifyDocumentPermission



```js
amazonaws_ssm.ModifyDocumentPermission({}, context)
```

#### Parameters

### PutInventory



```js
amazonaws_ssm.PutInventory({}, context)
```

#### Parameters

### PutParameter



```js
amazonaws_ssm.PutParameter({}, context)
```

#### Parameters

### RegisterDefaultPatchBaseline



```js
amazonaws_ssm.RegisterDefaultPatchBaseline({}, context)
```

#### Parameters

### RegisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.RegisterPatchBaselineForPatchGroup({}, context)
```

#### Parameters

### RegisterTargetWithMaintenanceWindow



```js
amazonaws_ssm.RegisterTargetWithMaintenanceWindow({}, context)
```

#### Parameters

### RegisterTaskWithMaintenanceWindow



```js
amazonaws_ssm.RegisterTaskWithMaintenanceWindow({}, context)
```

#### Parameters

### RemoveTagsFromResource



```js
amazonaws_ssm.RemoveTagsFromResource({}, context)
```

#### Parameters

### SendCommand



```js
amazonaws_ssm.SendCommand({}, context)
```

#### Parameters

### StartAutomationExecution



```js
amazonaws_ssm.StartAutomationExecution({}, context)
```

#### Parameters

### StopAutomationExecution



```js
amazonaws_ssm.StopAutomationExecution({}, context)
```

#### Parameters

### UpdateAssociation



```js
amazonaws_ssm.UpdateAssociation({}, context)
```

#### Parameters

### UpdateAssociationStatus



```js
amazonaws_ssm.UpdateAssociationStatus({}, context)
```

#### Parameters

### UpdateDocument



```js
amazonaws_ssm.UpdateDocument({}, context)
```

#### Parameters

### UpdateDocumentDefaultVersion



```js
amazonaws_ssm.UpdateDocumentDefaultVersion({}, context)
```

#### Parameters

### UpdateMaintenanceWindow



```js
amazonaws_ssm.UpdateMaintenanceWindow({}, context)
```

#### Parameters

### UpdateManagedInstanceRole



```js
amazonaws_ssm.UpdateManagedInstanceRole({}, context)
```

#### Parameters

### UpdatePatchBaseline



```js
amazonaws_ssm.UpdatePatchBaseline({}, context)
```

#### Parameters

