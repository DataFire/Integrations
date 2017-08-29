# @datafire/amazonaws_ssm

Client library for Amazon Simple Systems Manager (SSM)

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ssm
```

```js
let datafire = require('datafire');
let amazonaws_ssm = require('@datafire/amazonaws_ssm').create();

amazonaws_ssm.AddTagsToResource({}).then(data => {
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


### CancelCommand



```js
amazonaws_ssm.CancelCommand({}, context)
```


### CreateActivation



```js
amazonaws_ssm.CreateActivation({}, context)
```


### CreateAssociation



```js
amazonaws_ssm.CreateAssociation({}, context)
```


### CreateAssociationBatch



```js
amazonaws_ssm.CreateAssociationBatch({}, context)
```


### CreateDocument



```js
amazonaws_ssm.CreateDocument({}, context)
```


### CreateMaintenanceWindow



```js
amazonaws_ssm.CreateMaintenanceWindow({}, context)
```


### CreatePatchBaseline



```js
amazonaws_ssm.CreatePatchBaseline({}, context)
```


### DeleteActivation



```js
amazonaws_ssm.DeleteActivation({}, context)
```


### DeleteAssociation



```js
amazonaws_ssm.DeleteAssociation({}, context)
```


### DeleteDocument



```js
amazonaws_ssm.DeleteDocument({}, context)
```


### DeleteMaintenanceWindow



```js
amazonaws_ssm.DeleteMaintenanceWindow({}, context)
```


### DeleteParameter



```js
amazonaws_ssm.DeleteParameter({}, context)
```


### DeletePatchBaseline



```js
amazonaws_ssm.DeletePatchBaseline({}, context)
```


### DeregisterManagedInstance



```js
amazonaws_ssm.DeregisterManagedInstance({}, context)
```


### DeregisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.DeregisterPatchBaselineForPatchGroup({}, context)
```


### DeregisterTargetFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTargetFromMaintenanceWindow({}, context)
```


### DeregisterTaskFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTaskFromMaintenanceWindow({}, context)
```


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


### DescribeAutomationExecutions



```js
amazonaws_ssm.DescribeAutomationExecutions({}, context)
```


### DescribeAvailablePatches



```js
amazonaws_ssm.DescribeAvailablePatches({}, context)
```


### DescribeDocument



```js
amazonaws_ssm.DescribeDocument({}, context)
```


### DescribeDocumentPermission



```js
amazonaws_ssm.DescribeDocumentPermission({}, context)
```


### DescribeEffectiveInstanceAssociations



```js
amazonaws_ssm.DescribeEffectiveInstanceAssociations({}, context)
```


### DescribeEffectivePatchesForPatchBaseline



```js
amazonaws_ssm.DescribeEffectivePatchesForPatchBaseline({}, context)
```


### DescribeInstanceAssociationsStatus



```js
amazonaws_ssm.DescribeInstanceAssociationsStatus({}, context)
```


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


### DescribeInstancePatchStatesForPatchGroup



```js
amazonaws_ssm.DescribeInstancePatchStatesForPatchGroup({}, context)
```


### DescribeInstancePatches



```js
amazonaws_ssm.DescribeInstancePatches({}, context)
```


### DescribeMaintenanceWindowExecutionTaskInvocations



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTaskInvocations({}, context)
```


### DescribeMaintenanceWindowExecutionTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTasks({}, context)
```


### DescribeMaintenanceWindowExecutions



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutions({}, context)
```


### DescribeMaintenanceWindowTargets



```js
amazonaws_ssm.DescribeMaintenanceWindowTargets({}, context)
```


### DescribeMaintenanceWindowTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowTasks({}, context)
```


### DescribeMaintenanceWindows



```js
amazonaws_ssm.DescribeMaintenanceWindows({}, context)
```


### DescribeParameters



```js
amazonaws_ssm.DescribeParameters({}, context)
```


### DescribePatchBaselines



```js
amazonaws_ssm.DescribePatchBaselines({}, context)
```


### DescribePatchGroupState



```js
amazonaws_ssm.DescribePatchGroupState({}, context)
```


### DescribePatchGroups



```js
amazonaws_ssm.DescribePatchGroups({}, context)
```


### GetAutomationExecution



```js
amazonaws_ssm.GetAutomationExecution({}, context)
```


### GetCommandInvocation



```js
amazonaws_ssm.GetCommandInvocation({}, context)
```


### GetDefaultPatchBaseline



```js
amazonaws_ssm.GetDefaultPatchBaseline({}, context)
```


### GetDeployablePatchSnapshotForInstance



```js
amazonaws_ssm.GetDeployablePatchSnapshotForInstance({}, context)
```


### GetDocument



```js
amazonaws_ssm.GetDocument({}, context)
```


### GetInventory



```js
amazonaws_ssm.GetInventory({}, context)
```


### GetInventorySchema



```js
amazonaws_ssm.GetInventorySchema({}, context)
```


### GetMaintenanceWindow



```js
amazonaws_ssm.GetMaintenanceWindow({}, context)
```


### GetMaintenanceWindowExecution



```js
amazonaws_ssm.GetMaintenanceWindowExecution({}, context)
```


### GetMaintenanceWindowExecutionTask



```js
amazonaws_ssm.GetMaintenanceWindowExecutionTask({}, context)
```


### GetParameterHistory



```js
amazonaws_ssm.GetParameterHistory({}, context)
```


### GetParameters



```js
amazonaws_ssm.GetParameters({}, context)
```


### GetPatchBaseline



```js
amazonaws_ssm.GetPatchBaseline({}, context)
```


### GetPatchBaselineForPatchGroup



```js
amazonaws_ssm.GetPatchBaselineForPatchGroup({}, context)
```


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


### ListTagsForResource



```js
amazonaws_ssm.ListTagsForResource({}, context)
```


### ModifyDocumentPermission



```js
amazonaws_ssm.ModifyDocumentPermission({}, context)
```


### PutInventory



```js
amazonaws_ssm.PutInventory({}, context)
```


### PutParameter



```js
amazonaws_ssm.PutParameter({}, context)
```


### RegisterDefaultPatchBaseline



```js
amazonaws_ssm.RegisterDefaultPatchBaseline({}, context)
```


### RegisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.RegisterPatchBaselineForPatchGroup({}, context)
```


### RegisterTargetWithMaintenanceWindow



```js
amazonaws_ssm.RegisterTargetWithMaintenanceWindow({}, context)
```


### RegisterTaskWithMaintenanceWindow



```js
amazonaws_ssm.RegisterTaskWithMaintenanceWindow({}, context)
```


### RemoveTagsFromResource



```js
amazonaws_ssm.RemoveTagsFromResource({}, context)
```


### SendCommand



```js
amazonaws_ssm.SendCommand({}, context)
```


### StartAutomationExecution



```js
amazonaws_ssm.StartAutomationExecution({}, context)
```


### StopAutomationExecution



```js
amazonaws_ssm.StopAutomationExecution({}, context)
```


### UpdateAssociation



```js
amazonaws_ssm.UpdateAssociation({}, context)
```


### UpdateAssociationStatus



```js
amazonaws_ssm.UpdateAssociationStatus({}, context)
```


### UpdateDocument



```js
amazonaws_ssm.UpdateDocument({}, context)
```


### UpdateDocumentDefaultVersion



```js
amazonaws_ssm.UpdateDocumentDefaultVersion({}, context)
```


### UpdateMaintenanceWindow



```js
amazonaws_ssm.UpdateMaintenanceWindow({}, context)
```


### UpdateManagedInstanceRole



```js
amazonaws_ssm.UpdateManagedInstanceRole({}, context)
```


### UpdatePatchBaseline



```js
amazonaws_ssm.UpdatePatchBaseline({}, context)
```


