# @datafire/amazonaws_ssm

Client library for Amazon Simple Systems Manager (SSM)

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ssm
```
```js
let amazonaws_ssm = require('@datafire/amazonaws_ssm').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_ssm.AddTagsToResource({
  "ResourceType": "",
  "ResourceId": "",
  "Tags": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Systems Manager</fullname> <p>AWS Systems Manager is a collection of capabilities that helps you automate management tasks such as collecting system inventory, applying operating system (OS) patches, automating the creation of Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale. Systems Manager lets you remotely and securely manage the configuration of your managed instances. A <i>managed instance</i> is any Amazon EC2 instance or on-premises machine in your hybrid environment that has been configured for Systems Manager.</p> <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/">AWS Systems Manager User Guide</a>.</p> <p>To get started, verify prerequisites and configure managed instances. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Systems Manager Prerequisites</a>.</p> <p>For information about other API actions you can perform on Amazon EC2 instances, see the <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/">Amazon EC2 API Reference</a>. For information about how to use a Query API, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/making-api-requests.html">Making API Requests</a>. </p>

## Actions

### AddTagsToResource



```js
amazonaws_ssm.AddTagsToResource({
  "ResourceType": "",
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * ResourceType **required** [ResourceTypeForTagging](#resourcetypefortagging)
  * Tags **required** [TagList](#taglist)

#### Output
* output [AddTagsToResourceResult](#addtagstoresourceresult)

### CancelCommand



```js
amazonaws_ssm.CancelCommand({
  "CommandId": ""
}, context)
```

#### Input
* input `object`
  * CommandId **required** [CommandId](#commandid)
  * InstanceIds [InstanceIdList](#instanceidlist)

#### Output
* output [CancelCommandResult](#cancelcommandresult)

### CreateActivation



```js
amazonaws_ssm.CreateActivation({
  "IamRole": ""
}, context)
```

#### Input
* input `object`
  * DefaultInstanceName [DefaultInstanceName](#defaultinstancename)
  * Description [ActivationDescription](#activationdescription)
  * ExpirationDate [ExpirationDate](#expirationdate)
  * IamRole **required** [IamRole](#iamrole)
  * RegistrationLimit [RegistrationLimit](#registrationlimit)

#### Output
* output [CreateActivationResult](#createactivationresult)

### CreateAssociation



```js
amazonaws_ssm.CreateAssociation({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AssociationName [AssociationName](#associationname)
  * DocumentVersion [DocumentVersion](#documentversion)
  * InstanceId [InstanceId](#instanceid)
  * Name **required** [DocumentName](#documentname)
  * OutputLocation [InstanceAssociationOutputLocation](#instanceassociationoutputlocation)
  * Parameters [Parameters](#parameters)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * Targets [Targets](#targets)

#### Output
* output [CreateAssociationResult](#createassociationresult)

### CreateAssociationBatch



```js
amazonaws_ssm.CreateAssociationBatch({
  "Entries": []
}, context)
```

#### Input
* input `object`
  * Entries **required** [CreateAssociationBatchRequestEntries](#createassociationbatchrequestentries)

#### Output
* output [CreateAssociationBatchResult](#createassociationbatchresult)

### CreateDocument



```js
amazonaws_ssm.CreateDocument({
  "Content": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Content **required** [DocumentContent](#documentcontent)
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentType [DocumentType](#documenttype)
  * Name **required** [DocumentName](#documentname)
  * TargetType [TargetType](#targettype)

#### Output
* output [CreateDocumentResult](#createdocumentresult)

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

#### Input
* input `object`
  * AllowUnassociatedTargets **required** [MaintenanceWindowAllowUnassociatedTargets](#maintenancewindowallowunassociatedtargets)
  * ClientToken [ClientToken](#clienttoken)
  * Cutoff **required** [MaintenanceWindowCutoff](#maintenancewindowcutoff)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Duration **required** [MaintenanceWindowDurationHours](#maintenancewindowdurationhours)
  * Name **required** [MaintenanceWindowName](#maintenancewindowname)
  * Schedule **required** [MaintenanceWindowSchedule](#maintenancewindowschedule)

#### Output
* output [CreateMaintenanceWindowResult](#createmaintenancewindowresult)

### CreatePatchBaseline



```js
amazonaws_ssm.CreatePatchBaseline({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * ApprovalRules [PatchRuleGroup](#patchrulegroup)
  * ApprovedPatches [PatchIdList](#patchidlist)
  * ApprovedPatchesComplianceLevel [PatchComplianceLevel](#patchcompliancelevel)
  * ApprovedPatchesEnableNonSecurity [Boolean](#boolean)
  * ClientToken [ClientToken](#clienttoken)
  * Description [BaselineDescription](#baselinedescription)
  * GlobalFilters [PatchFilterGroup](#patchfiltergroup)
  * Name **required** [BaselineName](#baselinename)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * RejectedPatches [PatchIdList](#patchidlist)
  * Sources [PatchSourceList](#patchsourcelist)

#### Output
* output [CreatePatchBaselineResult](#createpatchbaselineresult)

### CreateResourceDataSync



```js
amazonaws_ssm.CreateResourceDataSync({
  "SyncName": "",
  "S3Destination": {
    "BucketName": "",
    "SyncFormat": "",
    "Region": ""
  }
}, context)
```

#### Input
* input `object`
  * S3Destination **required** [ResourceDataSyncS3Destination](#resourcedatasyncs3destination)
  * SyncName **required** [ResourceDataSyncName](#resourcedatasyncname)

#### Output
* output [CreateResourceDataSyncResult](#createresourcedatasyncresult)

### DeleteActivation



```js
amazonaws_ssm.DeleteActivation({
  "ActivationId": ""
}, context)
```

#### Input
* input `object`
  * ActivationId **required** [ActivationId](#activationid)

#### Output
* output [DeleteActivationResult](#deleteactivationresult)

### DeleteAssociation



```js
amazonaws_ssm.DeleteAssociation({}, context)
```

#### Input
* input `object`
  * AssociationId [AssociationId](#associationid)
  * InstanceId [InstanceId](#instanceid)
  * Name [DocumentName](#documentname)

#### Output
* output [DeleteAssociationResult](#deleteassociationresult)

### DeleteDocument



```js
amazonaws_ssm.DeleteDocument({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [DocumentName](#documentname)

#### Output
* output [DeleteDocumentResult](#deletedocumentresult)

### DeleteInventory



```js
amazonaws_ssm.DeleteInventory({
  "TypeName": ""
}, context)
```

#### Input
* input `object`
  * ClientToken [ClientToken](#clienttoken)
  * DryRun [DryRun](#dryrun)
  * SchemaDeleteOption [InventorySchemaDeleteOption](#inventoryschemadeleteoption)
  * TypeName **required** [InventoryItemTypeName](#inventoryitemtypename)

#### Output
* output [DeleteInventoryResult](#deleteinventoryresult)

### DeleteMaintenanceWindow



```js
amazonaws_ssm.DeleteMaintenanceWindow({
  "WindowId": ""
}, context)
```

#### Input
* input `object`
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

#### Output
* output [DeleteMaintenanceWindowResult](#deletemaintenancewindowresult)

### DeleteParameter



```js
amazonaws_ssm.DeleteParameter({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [PSParameterName](#psparametername)

#### Output
* output [DeleteParameterResult](#deleteparameterresult)

### DeleteParameters



```js
amazonaws_ssm.DeleteParameters({
  "Names": []
}, context)
```

#### Input
* input `object`
  * Names **required** [ParameterNameList](#parameternamelist)

#### Output
* output [DeleteParametersResult](#deleteparametersresult)

### DeletePatchBaseline



```js
amazonaws_ssm.DeletePatchBaseline({
  "BaselineId": ""
}, context)
```

#### Input
* input `object`
  * BaselineId **required** [BaselineId](#baselineid)

#### Output
* output [DeletePatchBaselineResult](#deletepatchbaselineresult)

### DeleteResourceDataSync



```js
amazonaws_ssm.DeleteResourceDataSync({
  "SyncName": ""
}, context)
```

#### Input
* input `object`
  * SyncName **required** [ResourceDataSyncName](#resourcedatasyncname)

#### Output
* output [DeleteResourceDataSyncResult](#deleteresourcedatasyncresult)

### DeregisterManagedInstance



```js
amazonaws_ssm.DeregisterManagedInstance({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [ManagedInstanceId](#managedinstanceid)

#### Output
* output [DeregisterManagedInstanceResult](#deregistermanagedinstanceresult)

### DeregisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.DeregisterPatchBaselineForPatchGroup({
  "BaselineId": "",
  "PatchGroup": ""
}, context)
```

#### Input
* input `object`
  * BaselineId **required** [BaselineId](#baselineid)
  * PatchGroup **required** [PatchGroup](#patchgroup)

#### Output
* output [DeregisterPatchBaselineForPatchGroupResult](#deregisterpatchbaselineforpatchgroupresult)

### DeregisterTargetFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTargetFromMaintenanceWindow({
  "WindowId": "",
  "WindowTargetId": ""
}, context)
```

#### Input
* input `object`
  * Safe [Boolean](#boolean)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTargetId **required** [MaintenanceWindowTargetId](#maintenancewindowtargetid)

#### Output
* output [DeregisterTargetFromMaintenanceWindowResult](#deregistertargetfrommaintenancewindowresult)

### DeregisterTaskFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTaskFromMaintenanceWindow({
  "WindowId": "",
  "WindowTaskId": ""
}, context)
```

#### Input
* input `object`
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId **required** [MaintenanceWindowTaskId](#maintenancewindowtaskid)

#### Output
* output [DeregisterTaskFromMaintenanceWindowResult](#deregistertaskfrommaintenancewindowresult)

### DescribeActivations



```js
amazonaws_ssm.DescribeActivations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [DescribeActivationsFilterList](#describeactivationsfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeActivationsResult](#describeactivationsresult)

### DescribeAssociation



```js
amazonaws_ssm.DescribeAssociation({}, context)
```

#### Input
* input `object`
  * AssociationId [AssociationId](#associationid)
  * AssociationVersion [AssociationVersion](#associationversion)
  * InstanceId [InstanceId](#instanceid)
  * Name [DocumentName](#documentname)

#### Output
* output [DescribeAssociationResult](#describeassociationresult)

### DescribeAutomationExecutions



```js
amazonaws_ssm.DescribeAutomationExecutions({}, context)
```

#### Input
* input `object`
  * Filters [AutomationExecutionFilterList](#automationexecutionfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeAutomationExecutionsResult](#describeautomationexecutionsresult)

### DescribeAutomationStepExecutions



```js
amazonaws_ssm.DescribeAutomationStepExecutions({
  "AutomationExecutionId": ""
}, context)
```

#### Input
* input `object`
  * AutomationExecutionId **required** [AutomationExecutionId](#automationexecutionid)
  * Filters [StepExecutionFilterList](#stepexecutionfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ReverseOrder [Boolean](#boolean)

#### Output
* output [DescribeAutomationStepExecutionsResult](#describeautomationstepexecutionsresult)

### DescribeAvailablePatches



```js
amazonaws_ssm.DescribeAvailablePatches({}, context)
```

#### Input
* input `object`
  * Filters [PatchOrchestratorFilterList](#patchorchestratorfilterlist)
  * MaxResults [PatchBaselineMaxResults](#patchbaselinemaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeAvailablePatchesResult](#describeavailablepatchesresult)

### DescribeDocument



```js
amazonaws_ssm.DescribeDocument({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name **required** [DocumentARN](#documentarn)

#### Output
* output [DescribeDocumentResult](#describedocumentresult)

### DescribeDocumentPermission



```js
amazonaws_ssm.DescribeDocumentPermission({
  "Name": "",
  "PermissionType": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [DocumentName](#documentname)
  * PermissionType **required** [DocumentPermissionType](#documentpermissiontype)

#### Output
* output [DescribeDocumentPermissionResponse](#describedocumentpermissionresponse)

### DescribeEffectiveInstanceAssociations



```js
amazonaws_ssm.DescribeEffectiveInstanceAssociations({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [InstanceId](#instanceid)
  * MaxResults [EffectiveInstanceAssociationMaxResults](#effectiveinstanceassociationmaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeEffectiveInstanceAssociationsResult](#describeeffectiveinstanceassociationsresult)

### DescribeEffectivePatchesForPatchBaseline



```js
amazonaws_ssm.DescribeEffectivePatchesForPatchBaseline({
  "BaselineId": ""
}, context)
```

#### Input
* input `object`
  * BaselineId **required** [BaselineId](#baselineid)
  * MaxResults [PatchBaselineMaxResults](#patchbaselinemaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeEffectivePatchesForPatchBaselineResult](#describeeffectivepatchesforpatchbaselineresult)

### DescribeInstanceAssociationsStatus



```js
amazonaws_ssm.DescribeInstanceAssociationsStatus({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [InstanceId](#instanceid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeInstanceAssociationsStatusResult](#describeinstanceassociationsstatusresult)

### DescribeInstanceInformation



```js
amazonaws_ssm.DescribeInstanceInformation({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [InstanceInformationStringFilterList](#instanceinformationstringfilterlist)
  * InstanceInformationFilterList [InstanceInformationFilterList](#instanceinformationfilterlist)
  * MaxResults [MaxResultsEC2Compatible](#maxresultsec2compatible)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeInstanceInformationResult](#describeinstanceinformationresult)

### DescribeInstancePatchStates



```js
amazonaws_ssm.DescribeInstancePatchStates({
  "InstanceIds": []
}, context)
```

#### Input
* input `object`
  * InstanceIds **required** [InstanceIdList](#instanceidlist)
  * MaxResults [PatchComplianceMaxResults](#patchcompliancemaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeInstancePatchStatesResult](#describeinstancepatchstatesresult)

### DescribeInstancePatchStatesForPatchGroup



```js
amazonaws_ssm.DescribeInstancePatchStatesForPatchGroup({
  "PatchGroup": ""
}, context)
```

#### Input
* input `object`
  * Filters [InstancePatchStateFilterList](#instancepatchstatefilterlist)
  * MaxResults [PatchComplianceMaxResults](#patchcompliancemaxresults)
  * NextToken [NextToken](#nexttoken)
  * PatchGroup **required** [PatchGroup](#patchgroup)

#### Output
* output [DescribeInstancePatchStatesForPatchGroupResult](#describeinstancepatchstatesforpatchgroupresult)

### DescribeInstancePatches



```js
amazonaws_ssm.DescribeInstancePatches({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * Filters [PatchOrchestratorFilterList](#patchorchestratorfilterlist)
  * InstanceId **required** [InstanceId](#instanceid)
  * MaxResults [PatchComplianceMaxResults](#patchcompliancemaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeInstancePatchesResult](#describeinstancepatchesresult)

### DescribeInventoryDeletions



```js
amazonaws_ssm.DescribeInventoryDeletions({}, context)
```

#### Input
* input `object`
  * DeletionId [InventoryDeletionId](#inventorydeletionid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeInventoryDeletionsResult](#describeinventorydeletionsresult)

### DescribeMaintenanceWindowExecutionTaskInvocations



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTaskInvocations({
  "WindowExecutionId": "",
  "TaskId": ""
}, context)
```

#### Input
* input `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * TaskId **required** [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

#### Output
* output [DescribeMaintenanceWindowExecutionTaskInvocationsResult](#describemaintenancewindowexecutiontaskinvocationsresult)

### DescribeMaintenanceWindowExecutionTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTasks({
  "WindowExecutionId": ""
}, context)
```

#### Input
* input `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

#### Output
* output [DescribeMaintenanceWindowExecutionTasksResult](#describemaintenancewindowexecutiontasksresult)

### DescribeMaintenanceWindowExecutions



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutions({
  "WindowId": ""
}, context)
```

#### Input
* input `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

#### Output
* output [DescribeMaintenanceWindowExecutionsResult](#describemaintenancewindowexecutionsresult)

### DescribeMaintenanceWindowTargets



```js
amazonaws_ssm.DescribeMaintenanceWindowTargets({
  "WindowId": ""
}, context)
```

#### Input
* input `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

#### Output
* output [DescribeMaintenanceWindowTargetsResult](#describemaintenancewindowtargetsresult)

### DescribeMaintenanceWindowTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowTasks({
  "WindowId": ""
}, context)
```

#### Input
* input `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

#### Output
* output [DescribeMaintenanceWindowTasksResult](#describemaintenancewindowtasksresult)

### DescribeMaintenanceWindows



```js
amazonaws_ssm.DescribeMaintenanceWindows({}, context)
```

#### Input
* input `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeMaintenanceWindowsResult](#describemaintenancewindowsresult)

### DescribeParameters



```js
amazonaws_ssm.DescribeParameters({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [ParametersFilterList](#parametersfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ParameterFilters [ParameterStringFilterList](#parameterstringfilterlist)

#### Output
* output [DescribeParametersResult](#describeparametersresult)

### DescribePatchBaselines



```js
amazonaws_ssm.DescribePatchBaselines({}, context)
```

#### Input
* input `object`
  * Filters [PatchOrchestratorFilterList](#patchorchestratorfilterlist)
  * MaxResults [PatchBaselineMaxResults](#patchbaselinemaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribePatchBaselinesResult](#describepatchbaselinesresult)

### DescribePatchGroupState



```js
amazonaws_ssm.DescribePatchGroupState({
  "PatchGroup": ""
}, context)
```

#### Input
* input `object`
  * PatchGroup **required** [PatchGroup](#patchgroup)

#### Output
* output [DescribePatchGroupStateResult](#describepatchgroupstateresult)

### DescribePatchGroups



```js
amazonaws_ssm.DescribePatchGroups({}, context)
```

#### Input
* input `object`
  * Filters [PatchOrchestratorFilterList](#patchorchestratorfilterlist)
  * MaxResults [PatchBaselineMaxResults](#patchbaselinemaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribePatchGroupsResult](#describepatchgroupsresult)

### GetAutomationExecution



```js
amazonaws_ssm.GetAutomationExecution({
  "AutomationExecutionId": ""
}, context)
```

#### Input
* input `object`
  * AutomationExecutionId **required** [AutomationExecutionId](#automationexecutionid)

#### Output
* output [GetAutomationExecutionResult](#getautomationexecutionresult)

### GetCommandInvocation



```js
amazonaws_ssm.GetCommandInvocation({
  "CommandId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * CommandId **required** [CommandId](#commandid)
  * InstanceId **required** [InstanceId](#instanceid)
  * PluginName [CommandPluginName](#commandpluginname)

#### Output
* output [GetCommandInvocationResult](#getcommandinvocationresult)

### GetDefaultPatchBaseline



```js
amazonaws_ssm.GetDefaultPatchBaseline({}, context)
```

#### Input
* input `object`
  * OperatingSystem [OperatingSystem](#operatingsystem)

#### Output
* output [GetDefaultPatchBaselineResult](#getdefaultpatchbaselineresult)

### GetDeployablePatchSnapshotForInstance



```js
amazonaws_ssm.GetDeployablePatchSnapshotForInstance({
  "InstanceId": "",
  "SnapshotId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [InstanceId](#instanceid)
  * SnapshotId **required** [SnapshotId](#snapshotid)

#### Output
* output [GetDeployablePatchSnapshotForInstanceResult](#getdeployablepatchsnapshotforinstanceresult)

### GetDocument



```js
amazonaws_ssm.GetDocument({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name **required** [DocumentARN](#documentarn)

#### Output
* output [GetDocumentResult](#getdocumentresult)

### GetInventory



```js
amazonaws_ssm.GetInventory({}, context)
```

#### Input
* input `object`
  * Aggregators [InventoryAggregatorList](#inventoryaggregatorlist)
  * Filters [InventoryFilterList](#inventoryfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ResultAttributes [ResultAttributeList](#resultattributelist)

#### Output
* output [GetInventoryResult](#getinventoryresult)

### GetInventorySchema



```js
amazonaws_ssm.GetInventorySchema({}, context)
```

#### Input
* input `object`
  * Aggregator [AggregatorSchemaOnly](#aggregatorschemaonly)
  * MaxResults [GetInventorySchemaMaxResults](#getinventoryschemamaxresults)
  * NextToken [NextToken](#nexttoken)
  * SubType [IsSubTypeSchema](#issubtypeschema)
  * TypeName [InventoryItemTypeNameFilter](#inventoryitemtypenamefilter)

#### Output
* output [GetInventorySchemaResult](#getinventoryschemaresult)

### GetMaintenanceWindow



```js
amazonaws_ssm.GetMaintenanceWindow({
  "WindowId": ""
}, context)
```

#### Input
* input `object`
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

#### Output
* output [GetMaintenanceWindowResult](#getmaintenancewindowresult)

### GetMaintenanceWindowExecution



```js
amazonaws_ssm.GetMaintenanceWindowExecution({
  "WindowExecutionId": ""
}, context)
```

#### Input
* input `object`
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

#### Output
* output [GetMaintenanceWindowExecutionResult](#getmaintenancewindowexecutionresult)

### GetMaintenanceWindowExecutionTask



```js
amazonaws_ssm.GetMaintenanceWindowExecutionTask({
  "WindowExecutionId": "",
  "TaskId": ""
}, context)
```

#### Input
* input `object`
  * TaskId **required** [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

#### Output
* output [GetMaintenanceWindowExecutionTaskResult](#getmaintenancewindowexecutiontaskresult)

### GetMaintenanceWindowExecutionTaskInvocation



```js
amazonaws_ssm.GetMaintenanceWindowExecutionTaskInvocation({
  "WindowExecutionId": "",
  "TaskId": "",
  "InvocationId": ""
}, context)
```

#### Input
* input `object`
  * InvocationId **required** [MaintenanceWindowExecutionTaskInvocationId](#maintenancewindowexecutiontaskinvocationid)
  * TaskId **required** [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

#### Output
* output [GetMaintenanceWindowExecutionTaskInvocationResult](#getmaintenancewindowexecutiontaskinvocationresult)

### GetMaintenanceWindowTask



```js
amazonaws_ssm.GetMaintenanceWindowTask({
  "WindowId": "",
  "WindowTaskId": ""
}, context)
```

#### Input
* input `object`
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId **required** [MaintenanceWindowTaskId](#maintenancewindowtaskid)

#### Output
* output [GetMaintenanceWindowTaskResult](#getmaintenancewindowtaskresult)

### GetParameter



```js
amazonaws_ssm.GetParameter({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [PSParameterName](#psparametername)
  * WithDecryption [Boolean](#boolean)

#### Output
* output [GetParameterResult](#getparameterresult)

### GetParameterHistory



```js
amazonaws_ssm.GetParameterHistory({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * Name **required** [PSParameterName](#psparametername)
  * NextToken [NextToken](#nexttoken)
  * WithDecryption [Boolean](#boolean)

#### Output
* output [GetParameterHistoryResult](#getparameterhistoryresult)

### GetParameters



```js
amazonaws_ssm.GetParameters({
  "Names": []
}, context)
```

#### Input
* input `object`
  * Names **required** [ParameterNameList](#parameternamelist)
  * WithDecryption [Boolean](#boolean)

#### Output
* output [GetParametersResult](#getparametersresult)

### GetParametersByPath



```js
amazonaws_ssm.GetParametersByPath({
  "Path": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [GetParametersByPathMaxResults](#getparametersbypathmaxresults)
  * NextToken [NextToken](#nexttoken)
  * ParameterFilters [ParameterStringFilterList](#parameterstringfilterlist)
  * Path **required** [PSParameterName](#psparametername)
  * Recursive [Boolean](#boolean)
  * WithDecryption [Boolean](#boolean)

#### Output
* output [GetParametersByPathResult](#getparametersbypathresult)

### GetPatchBaseline



```js
amazonaws_ssm.GetPatchBaseline({
  "BaselineId": ""
}, context)
```

#### Input
* input `object`
  * BaselineId **required** [BaselineId](#baselineid)

#### Output
* output [GetPatchBaselineResult](#getpatchbaselineresult)

### GetPatchBaselineForPatchGroup



```js
amazonaws_ssm.GetPatchBaselineForPatchGroup({
  "PatchGroup": ""
}, context)
```

#### Input
* input `object`
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * PatchGroup **required** [PatchGroup](#patchgroup)

#### Output
* output [GetPatchBaselineForPatchGroupResult](#getpatchbaselineforpatchgroupresult)

### ListAssociationVersions



```js
amazonaws_ssm.ListAssociationVersions({
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** [AssociationId](#associationid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListAssociationVersionsResult](#listassociationversionsresult)

### ListAssociations



```js
amazonaws_ssm.ListAssociations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssociationFilterList [AssociationFilterList](#associationfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListAssociationsResult](#listassociationsresult)

### ListCommandInvocations



```js
amazonaws_ssm.ListCommandInvocations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CommandId [CommandId](#commandid)
  * Details [Boolean](#boolean)
  * Filters [CommandFilterList](#commandfilterlist)
  * InstanceId [InstanceId](#instanceid)
  * MaxResults [CommandMaxResults](#commandmaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListCommandInvocationsResult](#listcommandinvocationsresult)

### ListCommands



```js
amazonaws_ssm.ListCommands({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CommandId [CommandId](#commandid)
  * Filters [CommandFilterList](#commandfilterlist)
  * InstanceId [InstanceId](#instanceid)
  * MaxResults [CommandMaxResults](#commandmaxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListCommandsResult](#listcommandsresult)

### ListComplianceItems



```js
amazonaws_ssm.ListComplianceItems({}, context)
```

#### Input
* input `object`
  * Filters [ComplianceStringFilterList](#compliancestringfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceIds [ComplianceResourceIdList](#complianceresourceidlist)
  * ResourceTypes [ComplianceResourceTypeList](#complianceresourcetypelist)

#### Output
* output [ListComplianceItemsResult](#listcomplianceitemsresult)

### ListComplianceSummaries



```js
amazonaws_ssm.ListComplianceSummaries({}, context)
```

#### Input
* input `object`
  * Filters [ComplianceStringFilterList](#compliancestringfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListComplianceSummariesResult](#listcompliancesummariesresult)

### ListDocumentVersions



```js
amazonaws_ssm.ListDocumentVersions({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * Name **required** [DocumentName](#documentname)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListDocumentVersionsResult](#listdocumentversionsresult)

### ListDocuments



```js
amazonaws_ssm.ListDocuments({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DocumentFilterList [DocumentFilterList](#documentfilterlist)
  * Filters [DocumentKeyValuesFilterList](#documentkeyvaluesfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListDocumentsResult](#listdocumentsresult)

### ListInventoryEntries



```js
amazonaws_ssm.ListInventoryEntries({
  "InstanceId": "",
  "TypeName": ""
}, context)
```

#### Input
* input `object`
  * Filters [InventoryFilterList](#inventoryfilterlist)
  * InstanceId **required** [InstanceId](#instanceid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * TypeName **required** [InventoryItemTypeName](#inventoryitemtypename)

#### Output
* output [ListInventoryEntriesResult](#listinventoryentriesresult)

### ListResourceComplianceSummaries



```js
amazonaws_ssm.ListResourceComplianceSummaries({}, context)
```

#### Input
* input `object`
  * Filters [ComplianceStringFilterList](#compliancestringfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListResourceComplianceSummariesResult](#listresourcecompliancesummariesresult)

### ListResourceDataSync



```js
amazonaws_ssm.ListResourceDataSync({}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListResourceDataSyncResult](#listresourcedatasyncresult)

### ListTagsForResource



```js
amazonaws_ssm.ListTagsForResource({
  "ResourceType": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * ResourceType **required** [ResourceTypeForTagging](#resourcetypefortagging)

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)

### ModifyDocumentPermission



```js
amazonaws_ssm.ModifyDocumentPermission({
  "Name": "",
  "PermissionType": ""
}, context)
```

#### Input
* input `object`
  * AccountIdsToAdd [AccountIdList](#accountidlist)
  * AccountIdsToRemove [AccountIdList](#accountidlist)
  * Name **required** [DocumentName](#documentname)
  * PermissionType **required** [DocumentPermissionType](#documentpermissiontype)

#### Output
* output [ModifyDocumentPermissionResponse](#modifydocumentpermissionresponse)

### PutComplianceItems



```js
amazonaws_ssm.PutComplianceItems({
  "ResourceId": "",
  "ResourceType": "",
  "ComplianceType": "",
  "ExecutionSummary": {
    "ExecutionTime": ""
  },
  "Items": []
}, context)
```

#### Input
* input `object`
  * ComplianceType **required** [ComplianceTypeName](#compliancetypename)
  * ExecutionSummary **required** [ComplianceExecutionSummary](#complianceexecutionsummary)
  * ItemContentHash [ComplianceItemContentHash](#complianceitemcontenthash)
  * Items **required** [ComplianceItemEntryList](#complianceitementrylist)
  * ResourceId **required** [ComplianceResourceId](#complianceresourceid)
  * ResourceType **required** [ComplianceResourceType](#complianceresourcetype)

#### Output
* output [PutComplianceItemsResult](#putcomplianceitemsresult)

### PutInventory



```js
amazonaws_ssm.PutInventory({
  "InstanceId": "",
  "Items": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [InstanceId](#instanceid)
  * Items **required** [InventoryItemList](#inventoryitemlist)

#### Output
* output [PutInventoryResult](#putinventoryresult)

### PutParameter



```js
amazonaws_ssm.PutParameter({
  "Name": "",
  "Value": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * AllowedPattern [AllowedPattern](#allowedpattern)
  * Description [ParameterDescription](#parameterdescription)
  * KeyId [ParameterKeyId](#parameterkeyid)
  * Name **required** [PSParameterName](#psparametername)
  * Overwrite [Boolean](#boolean)
  * Type **required** [ParameterType](#parametertype)
  * Value **required** [PSParameterValue](#psparametervalue)

#### Output
* output [PutParameterResult](#putparameterresult)

### RegisterDefaultPatchBaseline



```js
amazonaws_ssm.RegisterDefaultPatchBaseline({
  "BaselineId": ""
}, context)
```

#### Input
* input `object`
  * BaselineId **required** [BaselineId](#baselineid)

#### Output
* output [RegisterDefaultPatchBaselineResult](#registerdefaultpatchbaselineresult)

### RegisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.RegisterPatchBaselineForPatchGroup({
  "BaselineId": "",
  "PatchGroup": ""
}, context)
```

#### Input
* input `object`
  * BaselineId **required** [BaselineId](#baselineid)
  * PatchGroup **required** [PatchGroup](#patchgroup)

#### Output
* output [RegisterPatchBaselineForPatchGroupResult](#registerpatchbaselineforpatchgroupresult)

### RegisterTargetWithMaintenanceWindow



```js
amazonaws_ssm.RegisterTargetWithMaintenanceWindow({
  "WindowId": "",
  "ResourceType": "",
  "Targets": []
}, context)
```

#### Input
* input `object`
  * ClientToken [ClientToken](#clienttoken)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * OwnerInformation [OwnerInformation](#ownerinformation)
  * ResourceType **required** [MaintenanceWindowResourceType](#maintenancewindowresourcetype)
  * Targets **required** [Targets](#targets)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

#### Output
* output [RegisterTargetWithMaintenanceWindowResult](#registertargetwithmaintenancewindowresult)

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

#### Input
* input `object`
  * ClientToken [ClientToken](#clienttoken)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * LoggingInfo [LoggingInfo](#logginginfo)
  * MaxConcurrency **required** [MaxConcurrency](#maxconcurrency)
  * MaxErrors **required** [MaxErrors](#maxerrors)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Priority [MaintenanceWindowTaskPriority](#maintenancewindowtaskpriority)
  * ServiceRoleArn **required** [ServiceRole](#servicerole)
  * Targets **required** [Targets](#targets)
  * TaskArn **required** [MaintenanceWindowTaskArn](#maintenancewindowtaskarn)
  * TaskInvocationParameters [MaintenanceWindowTaskInvocationParameters](#maintenancewindowtaskinvocationparameters)
  * TaskParameters [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)
  * TaskType **required** [MaintenanceWindowTaskType](#maintenancewindowtasktype)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

#### Output
* output [RegisterTaskWithMaintenanceWindowResult](#registertaskwithmaintenancewindowresult)

### RemoveTagsFromResource



```js
amazonaws_ssm.RemoveTagsFromResource({
  "ResourceType": "",
  "ResourceId": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * ResourceType **required** [ResourceTypeForTagging](#resourcetypefortagging)
  * TagKeys **required** [KeyList](#keylist)

#### Output
* output [RemoveTagsFromResourceResult](#removetagsfromresourceresult)

### SendAutomationSignal



```js
amazonaws_ssm.SendAutomationSignal({
  "AutomationExecutionId": "",
  "SignalType": ""
}, context)
```

#### Input
* input `object`
  * AutomationExecutionId **required** [AutomationExecutionId](#automationexecutionid)
  * Payload [AutomationParameterMap](#automationparametermap)
  * SignalType **required** [SignalType](#signaltype)

#### Output
* output [SendAutomationSignalResult](#sendautomationsignalresult)

### SendCommand



```js
amazonaws_ssm.SendCommand({
  "DocumentName": ""
}, context)
```

#### Input
* input `object`
  * Comment [Comment](#comment)
  * DocumentHash [DocumentHash](#documenthash)
  * DocumentHashType [DocumentHashType](#documenthashtype)
  * DocumentName **required** [DocumentARN](#documentarn)
  * DocumentVersion [DocumentVersion](#documentversion)
  * InstanceIds [InstanceIdList](#instanceidlist)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * NotificationConfig [NotificationConfig](#notificationconfig)
  * OutputS3BucketName [S3BucketName](#s3bucketname)
  * OutputS3KeyPrefix [S3KeyPrefix](#s3keyprefix)
  * OutputS3Region [S3Region](#s3region)
  * Parameters [Parameters](#parameters)
  * ServiceRoleArn [ServiceRole](#servicerole)
  * Targets [Targets](#targets)
  * TimeoutSeconds [TimeoutSeconds](#timeoutseconds)

#### Output
* output [SendCommandResult](#sendcommandresult)

### StartAutomationExecution



```js
amazonaws_ssm.StartAutomationExecution({
  "DocumentName": ""
}, context)
```

#### Input
* input `object`
  * ClientToken [IdempotencyToken](#idempotencytoken)
  * DocumentName **required** [DocumentARN](#documentarn)
  * DocumentVersion [DocumentVersion](#documentversion)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Mode [ExecutionMode](#executionmode)
  * Parameters [AutomationParameterMap](#automationparametermap)
  * TargetParameterName [AutomationParameterKey](#automationparameterkey)
  * Targets [Targets](#targets)

#### Output
* output [StartAutomationExecutionResult](#startautomationexecutionresult)

### StopAutomationExecution



```js
amazonaws_ssm.StopAutomationExecution({
  "AutomationExecutionId": ""
}, context)
```

#### Input
* input `object`
  * AutomationExecutionId **required** [AutomationExecutionId](#automationexecutionid)
  * Type [StopType](#stoptype)

#### Output
* output [StopAutomationExecutionResult](#stopautomationexecutionresult)

### UpdateAssociation



```js
amazonaws_ssm.UpdateAssociation({
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** [AssociationId](#associationid)
  * AssociationName [AssociationName](#associationname)
  * AssociationVersion [AssociationVersion](#associationversion)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name [DocumentName](#documentname)
  * OutputLocation [InstanceAssociationOutputLocation](#instanceassociationoutputlocation)
  * Parameters [Parameters](#parameters)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * Targets [Targets](#targets)

#### Output
* output [UpdateAssociationResult](#updateassociationresult)

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

#### Input
* input `object`
  * AssociationStatus **required** [AssociationStatus](#associationstatus)
  * InstanceId **required** [InstanceId](#instanceid)
  * Name **required** [DocumentName](#documentname)

#### Output
* output [UpdateAssociationStatusResult](#updateassociationstatusresult)

### UpdateDocument



```js
amazonaws_ssm.UpdateDocument({
  "Content": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Content **required** [DocumentContent](#documentcontent)
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name **required** [DocumentName](#documentname)
  * TargetType [TargetType](#targettype)

#### Output
* output [UpdateDocumentResult](#updatedocumentresult)

### UpdateDocumentDefaultVersion



```js
amazonaws_ssm.UpdateDocumentDefaultVersion({
  "Name": "",
  "DocumentVersion": ""
}, context)
```

#### Input
* input `object`
  * DocumentVersion **required** [DocumentVersionNumber](#documentversionnumber)
  * Name **required** [DocumentName](#documentname)

#### Output
* output [UpdateDocumentDefaultVersionResult](#updatedocumentdefaultversionresult)

### UpdateMaintenanceWindow



```js
amazonaws_ssm.UpdateMaintenanceWindow({
  "WindowId": ""
}, context)
```

#### Input
* input `object`
  * AllowUnassociatedTargets [MaintenanceWindowAllowUnassociatedTargets](#maintenancewindowallowunassociatedtargets)
  * Cutoff [MaintenanceWindowCutoff](#maintenancewindowcutoff)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Duration [MaintenanceWindowDurationHours](#maintenancewindowdurationhours)
  * Enabled [MaintenanceWindowEnabled](#maintenancewindowenabled)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Replace [Boolean](#boolean)
  * Schedule [MaintenanceWindowSchedule](#maintenancewindowschedule)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

#### Output
* output [UpdateMaintenanceWindowResult](#updatemaintenancewindowresult)

### UpdateMaintenanceWindowTarget



```js
amazonaws_ssm.UpdateMaintenanceWindowTarget({
  "WindowId": "",
  "WindowTargetId": ""
}, context)
```

#### Input
* input `object`
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * OwnerInformation [OwnerInformation](#ownerinformation)
  * Replace [Boolean](#boolean)
  * Targets [Targets](#targets)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTargetId **required** [MaintenanceWindowTargetId](#maintenancewindowtargetid)

#### Output
* output [UpdateMaintenanceWindowTargetResult](#updatemaintenancewindowtargetresult)

### UpdateMaintenanceWindowTask



```js
amazonaws_ssm.UpdateMaintenanceWindowTask({
  "WindowId": "",
  "WindowTaskId": ""
}, context)
```

#### Input
* input `object`
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * LoggingInfo [LoggingInfo](#logginginfo)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Priority [MaintenanceWindowTaskPriority](#maintenancewindowtaskpriority)
  * Replace [Boolean](#boolean)
  * ServiceRoleArn [ServiceRole](#servicerole)
  * Targets [Targets](#targets)
  * TaskArn [MaintenanceWindowTaskArn](#maintenancewindowtaskarn)
  * TaskInvocationParameters [MaintenanceWindowTaskInvocationParameters](#maintenancewindowtaskinvocationparameters)
  * TaskParameters [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId **required** [MaintenanceWindowTaskId](#maintenancewindowtaskid)

#### Output
* output [UpdateMaintenanceWindowTaskResult](#updatemaintenancewindowtaskresult)

### UpdateManagedInstanceRole



```js
amazonaws_ssm.UpdateManagedInstanceRole({
  "InstanceId": "",
  "IamRole": ""
}, context)
```

#### Input
* input `object`
  * IamRole **required** [IamRole](#iamrole)
  * InstanceId **required** [ManagedInstanceId](#managedinstanceid)

#### Output
* output [UpdateManagedInstanceRoleResult](#updatemanagedinstanceroleresult)

### UpdatePatchBaseline



```js
amazonaws_ssm.UpdatePatchBaseline({
  "BaselineId": ""
}, context)
```

#### Input
* input `object`
  * ApprovalRules [PatchRuleGroup](#patchrulegroup)
  * ApprovedPatches [PatchIdList](#patchidlist)
  * ApprovedPatchesComplianceLevel [PatchComplianceLevel](#patchcompliancelevel)
  * ApprovedPatchesEnableNonSecurity [Boolean](#boolean)
  * BaselineId **required** [BaselineId](#baselineid)
  * Description [BaselineDescription](#baselinedescription)
  * GlobalFilters [PatchFilterGroup](#patchfiltergroup)
  * Name [BaselineName](#baselinename)
  * RejectedPatches [PatchIdList](#patchidlist)
  * Replace [Boolean](#boolean)
  * Sources [PatchSourceList](#patchsourcelist)

#### Output
* output [UpdatePatchBaselineResult](#updatepatchbaselineresult)



## Definitions

### AccountId
* AccountId `string`

### AccountIdList
* AccountIdList `array`
  * items [AccountId](#accountid)

### Activation
* Activation `object`: An activation registers one or more on-premises servers or virtual machines (VMs) with AWS so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with AWS is called a managed instance.
  * ActivationId [ActivationId](#activationid)
  * CreatedDate [CreatedDate](#createddate)
  * DefaultInstanceName [DefaultInstanceName](#defaultinstancename)
  * Description [ActivationDescription](#activationdescription)
  * ExpirationDate [ExpirationDate](#expirationdate)
  * Expired [Boolean](#boolean)
  * IamRole [IamRole](#iamrole)
  * RegistrationLimit [RegistrationLimit](#registrationlimit)
  * RegistrationsCount [RegistrationsCount](#registrationscount)

### ActivationCode
* ActivationCode `string`

### ActivationDescription
* ActivationDescription `string`

### ActivationId
* ActivationId `string`

### ActivationList
* ActivationList `array`
  * items [Activation](#activation)

### AddTagsToResourceRequest
* AddTagsToResourceRequest `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * ResourceType **required** [ResourceTypeForTagging](#resourcetypefortagging)
  * Tags **required** [TagList](#taglist)

### AddTagsToResourceResult
* AddTagsToResourceResult `object`

### AgentErrorCode
* AgentErrorCode `string`

### AggregatorSchemaOnly
* AggregatorSchemaOnly `boolean`

### AllowedPattern
* AllowedPattern `string`

### AlreadyExistsException
* AlreadyExistsException `object`: Error returned if an attempt is made to register a patch group with a patch baseline that is already registered with a different patch baseline.
  * Message [String](#string)

### ApproveAfterDays
* ApproveAfterDays `integer`

### AssociatedInstances
* AssociatedInstances `object`: You must disassociate a document from all instances before you can delete it.

### Association
* Association `object`: Describes an association of a Systems Manager document and an instance.
  * AssociationId [AssociationId](#associationid)
  * AssociationName [AssociationName](#associationname)
  * AssociationVersion [AssociationVersion](#associationversion)
  * DocumentVersion [DocumentVersion](#documentversion)
  * InstanceId [InstanceId](#instanceid)
  * LastExecutionDate [DateTime](#datetime)
  * Name [DocumentName](#documentname)
  * Overview [AssociationOverview](#associationoverview)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * Targets [Targets](#targets)

### AssociationAlreadyExists
* AssociationAlreadyExists `object`: The specified association already exists.

### AssociationDescription
* AssociationDescription `object`: Describes the parameters for a document.
  * AssociationId [AssociationId](#associationid)
  * AssociationName [AssociationName](#associationname)
  * AssociationVersion [AssociationVersion](#associationversion)
  * Date [DateTime](#datetime)
  * DocumentVersion [DocumentVersion](#documentversion)
  * InstanceId [InstanceId](#instanceid)
  * LastExecutionDate [DateTime](#datetime)
  * LastSuccessfulExecutionDate [DateTime](#datetime)
  * LastUpdateAssociationDate [DateTime](#datetime)
  * Name [DocumentName](#documentname)
  * OutputLocation [InstanceAssociationOutputLocation](#instanceassociationoutputlocation)
  * Overview [AssociationOverview](#associationoverview)
  * Parameters [Parameters](#parameters)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * Status [AssociationStatus](#associationstatus)
  * Targets [Targets](#targets)

### AssociationDescriptionList
* AssociationDescriptionList `array`
  * items [AssociationDescription](#associationdescription)

### AssociationDoesNotExist
* AssociationDoesNotExist `object`: The specified association does not exist.
  * Message [String](#string)

### AssociationFilter
* AssociationFilter `object`: Describes a filter.
  * key **required** [AssociationFilterKey](#associationfilterkey)
  * value **required** [AssociationFilterValue](#associationfiltervalue)

### AssociationFilterKey
* AssociationFilterKey `string` (values: InstanceId, Name, AssociationId, AssociationStatusName, LastExecutedBefore, LastExecutedAfter, AssociationName)

### AssociationFilterList
* AssociationFilterList `array`
  * items [AssociationFilter](#associationfilter)

### AssociationFilterValue
* AssociationFilterValue `string`

### AssociationId
* AssociationId `string`

### AssociationLimitExceeded
* AssociationLimitExceeded `object`: You can have at most 2,000 active associations.

### AssociationList
* AssociationList `array`
  * items [Association](#association)

### AssociationName
* AssociationName `string`

### AssociationOverview
* AssociationOverview `object`: Information about the association.
  * AssociationStatusAggregatedCount [AssociationStatusAggregatedCount](#associationstatusaggregatedcount)
  * DetailedStatus [StatusName](#statusname)
  * Status [StatusName](#statusname)

### AssociationStatus
* AssociationStatus `object`: Describes an association status.
  * AdditionalInfo [StatusAdditionalInfo](#statusadditionalinfo)
  * Date **required** [DateTime](#datetime)
  * Message **required** [StatusMessage](#statusmessage)
  * Name **required** [AssociationStatusName](#associationstatusname)

### AssociationStatusAggregatedCount
* AssociationStatusAggregatedCount `array`
  * items `object`
    * key [StatusName](#statusname)
    * value [InstanceCount](#instancecount)

### AssociationStatusName
* AssociationStatusName `string` (values: Pending, Success, Failed)

### AssociationVersion
* AssociationVersion `string`

### AssociationVersionInfo
* AssociationVersionInfo `object`: Information about the association version.
  * AssociationId [AssociationId](#associationid)
  * AssociationName [AssociationName](#associationname)
  * AssociationVersion [AssociationVersion](#associationversion)
  * CreatedDate [DateTime](#datetime)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name [DocumentName](#documentname)
  * OutputLocation [InstanceAssociationOutputLocation](#instanceassociationoutputlocation)
  * Parameters [Parameters](#parameters)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * Targets [Targets](#targets)

### AssociationVersionLimitExceeded
* AssociationVersionLimitExceeded `object`: You have reached the maximum number versions allowed for an association. Each association has a limit of 1,000 versions. 
  * Message [String](#string)

### AssociationVersionList
* AssociationVersionList `array`
  * items [AssociationVersionInfo](#associationversioninfo)

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### AutomationActionName
* AutomationActionName `string`

### AutomationDefinitionNotFoundException
* AutomationDefinitionNotFoundException `object`: An Automation document with the specified name could not be found.
  * Message [String](#string)

### AutomationDefinitionVersionNotFoundException
* AutomationDefinitionVersionNotFoundException `object`: An Automation document with the specified name and version could not be found.
  * Message [String](#string)

### AutomationExecution
* AutomationExecution `object`: Detailed information about the current state of an individual Automation execution.
  * AutomationExecutionId [AutomationExecutionId](#automationexecutionid)
  * AutomationExecutionStatus [AutomationExecutionStatus](#automationexecutionstatus)
  * CurrentAction [String](#string)
  * CurrentStepName [String](#string)
  * DocumentName [DocumentName](#documentname)
  * DocumentVersion [DocumentVersion](#documentversion)
  * ExecutedBy [String](#string)
  * ExecutionEndTime [DateTime](#datetime)
  * ExecutionStartTime [DateTime](#datetime)
  * FailureMessage [String](#string)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Mode [ExecutionMode](#executionmode)
  * Outputs [AutomationParameterMap](#automationparametermap)
  * Parameters [AutomationParameterMap](#automationparametermap)
  * ParentAutomationExecutionId [AutomationExecutionId](#automationexecutionid)
  * ResolvedTargets [ResolvedTargets](#resolvedtargets)
  * StepExecutions [StepExecutionList](#stepexecutionlist)
  * StepExecutionsTruncated [Boolean](#boolean)
  * Target [String](#string)
  * TargetParameterName [AutomationParameterKey](#automationparameterkey)
  * Targets [Targets](#targets)

### AutomationExecutionFilter
* AutomationExecutionFilter `object`: A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.
  * Key **required** [AutomationExecutionFilterKey](#automationexecutionfilterkey)
  * Values **required** [AutomationExecutionFilterValueList](#automationexecutionfiltervaluelist)

### AutomationExecutionFilterKey
* AutomationExecutionFilterKey `string` (values: DocumentNamePrefix, ExecutionStatus, ExecutionId, ParentExecutionId, CurrentAction, StartTimeBefore, StartTimeAfter)

### AutomationExecutionFilterList
* AutomationExecutionFilterList `array`
  * items [AutomationExecutionFilter](#automationexecutionfilter)

### AutomationExecutionFilterValue
* AutomationExecutionFilterValue `string`

### AutomationExecutionFilterValueList
* AutomationExecutionFilterValueList `array`
  * items [AutomationExecutionFilterValue](#automationexecutionfiltervalue)

### AutomationExecutionId
* AutomationExecutionId `string`

### AutomationExecutionLimitExceededException
* AutomationExecutionLimitExceededException `object`: The number of simultaneously running Automation executions exceeded the allowable limit.
  * Message [String](#string)

### AutomationExecutionMetadata
* AutomationExecutionMetadata `object`: Details about a specific Automation execution.
  * AutomationExecutionId [AutomationExecutionId](#automationexecutionid)
  * AutomationExecutionStatus [AutomationExecutionStatus](#automationexecutionstatus)
  * CurrentAction [String](#string)
  * CurrentStepName [String](#string)
  * DocumentName [DocumentName](#documentname)
  * DocumentVersion [DocumentVersion](#documentversion)
  * ExecutedBy [String](#string)
  * ExecutionEndTime [DateTime](#datetime)
  * ExecutionStartTime [DateTime](#datetime)
  * FailureMessage [String](#string)
  * LogFile [String](#string)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Mode [ExecutionMode](#executionmode)
  * Outputs [AutomationParameterMap](#automationparametermap)
  * ParentAutomationExecutionId [AutomationExecutionId](#automationexecutionid)
  * ResolvedTargets [ResolvedTargets](#resolvedtargets)
  * Target [String](#string)
  * TargetParameterName [AutomationParameterKey](#automationparameterkey)
  * Targets [Targets](#targets)

### AutomationExecutionMetadataList
* AutomationExecutionMetadataList `array`
  * items [AutomationExecutionMetadata](#automationexecutionmetadata)

### AutomationExecutionNotFoundException
* AutomationExecutionNotFoundException `object`: There is no automation execution information for the requested automation execution ID.
  * Message [String](#string)

### AutomationExecutionStatus
* AutomationExecutionStatus `string` (values: Pending, InProgress, Waiting, Success, TimedOut, Cancelling, Cancelled, Failed)

### AutomationParameterKey
* AutomationParameterKey `string`

### AutomationParameterMap
* AutomationParameterMap `array`
  * items `object`
    * key [AutomationParameterKey](#automationparameterkey)
    * value [AutomationParameterValueList](#automationparametervaluelist)

### AutomationParameterValue
* AutomationParameterValue `string`

### AutomationParameterValueList
* AutomationParameterValueList `array`
  * items [AutomationParameterValue](#automationparametervalue)

### AutomationStepNotFoundException
* AutomationStepNotFoundException `object`: The specified step name and execution ID don't exist. Verify the information and try again.
  * Message [String](#string)

### BaselineDescription
* BaselineDescription `string`

### BaselineId
* BaselineId `string`

### BaselineName
* BaselineName `string`

### BatchErrorMessage
* BatchErrorMessage `string`

### Boolean
* Boolean `boolean`

### CancelCommandRequest
* CancelCommandRequest `object`: <p/>
  * CommandId **required** [CommandId](#commandid)
  * InstanceIds [InstanceIdList](#instanceidlist)

### CancelCommandResult
* CancelCommandResult `object`: Whether or not the command was successfully canceled. There is no guarantee that a request can be canceled.

### ClientToken
* ClientToken `string`

### Command
* Command `object`: Describes a command request.
  * CommandId [CommandId](#commandid)
  * Comment [Comment](#comment)
  * CompletedCount [CompletedCount](#completedcount)
  * DocumentName [DocumentName](#documentname)
  * DocumentVersion [DocumentVersion](#documentversion)
  * ErrorCount [ErrorCount](#errorcount)
  * ExpiresAfter [DateTime](#datetime)
  * InstanceIds [InstanceIdList](#instanceidlist)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * NotificationConfig [NotificationConfig](#notificationconfig)
  * OutputS3BucketName [S3BucketName](#s3bucketname)
  * OutputS3KeyPrefix [S3KeyPrefix](#s3keyprefix)
  * OutputS3Region [S3Region](#s3region)
  * Parameters [Parameters](#parameters)
  * RequestedDateTime [DateTime](#datetime)
  * ServiceRole [ServiceRole](#servicerole)
  * Status [CommandStatus](#commandstatus)
  * StatusDetails [StatusDetails](#statusdetails)
  * TargetCount [TargetCount](#targetcount)
  * Targets [Targets](#targets)

### CommandFilter
* CommandFilter `object`: Describes a command filter.
  * key **required** [CommandFilterKey](#commandfilterkey)
  * value **required** [CommandFilterValue](#commandfiltervalue)

### CommandFilterKey
* CommandFilterKey `string` (values: InvokedAfter, InvokedBefore, Status)

### CommandFilterList
* CommandFilterList `array`
  * items [CommandFilter](#commandfilter)

### CommandFilterValue
* CommandFilterValue `string`

### CommandId
* CommandId `string`

### CommandInvocation
* CommandInvocation `object`: An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user executes SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you executed. 
  * CommandId [CommandId](#commandid)
  * CommandPlugins [CommandPluginList](#commandpluginlist)
  * Comment [Comment](#comment)
  * DocumentName [DocumentName](#documentname)
  * DocumentVersion [DocumentVersion](#documentversion)
  * InstanceId [InstanceId](#instanceid)
  * InstanceName [InstanceTagName](#instancetagname)
  * NotificationConfig [NotificationConfig](#notificationconfig)
  * RequestedDateTime [DateTime](#datetime)
  * ServiceRole [ServiceRole](#servicerole)
  * StandardErrorUrl [Url](#url)
  * StandardOutputUrl [Url](#url)
  * Status [CommandInvocationStatus](#commandinvocationstatus)
  * StatusDetails [StatusDetails](#statusdetails)
  * TraceOutput [InvocationTraceOutput](#invocationtraceoutput)

### CommandInvocationList
* CommandInvocationList `array`
  * items [CommandInvocation](#commandinvocation)

### CommandInvocationStatus
* CommandInvocationStatus `string` (values: Pending, InProgress, Delayed, Success, Cancelled, TimedOut, Failed, Cancelling)

### CommandList
* CommandList `array`
  * items [Command](#command)

### CommandMaxResults
* CommandMaxResults `integer`

### CommandPlugin
* CommandPlugin `object`: Describes plugin details.
  * Name [CommandPluginName](#commandpluginname)
  * Output [CommandPluginOutput](#commandpluginoutput)
  * OutputS3BucketName [S3BucketName](#s3bucketname)
  * OutputS3KeyPrefix [S3KeyPrefix](#s3keyprefix)
  * OutputS3Region [S3Region](#s3region)
  * ResponseCode [ResponseCode](#responsecode)
  * ResponseFinishDateTime [DateTime](#datetime)
  * ResponseStartDateTime [DateTime](#datetime)
  * StandardErrorUrl [Url](#url)
  * StandardOutputUrl [Url](#url)
  * Status [CommandPluginStatus](#commandpluginstatus)
  * StatusDetails [StatusDetails](#statusdetails)

### CommandPluginList
* CommandPluginList `array`
  * items [CommandPlugin](#commandplugin)

### CommandPluginName
* CommandPluginName `string`

### CommandPluginOutput
* CommandPluginOutput `string`

### CommandPluginStatus
* CommandPluginStatus `string` (values: Pending, InProgress, Success, TimedOut, Cancelled, Failed)

### CommandStatus
* CommandStatus `string` (values: Pending, InProgress, Success, Cancelled, Failed, TimedOut, Cancelling)

### Comment
* Comment `string`

### CompletedCount
* CompletedCount `integer`

### ComplianceExecutionId
* ComplianceExecutionId `string`

### ComplianceExecutionSummary
* ComplianceExecutionSummary `object`: A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
  * ExecutionId [ComplianceExecutionId](#complianceexecutionid)
  * ExecutionTime **required** [DateTime](#datetime)
  * ExecutionType [ComplianceExecutionType](#complianceexecutiontype)

### ComplianceExecutionType
* ComplianceExecutionType `string`

### ComplianceFilterValue
* ComplianceFilterValue `string`

### ComplianceItem
* ComplianceItem `object`: Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, etc.
  * ComplianceType [ComplianceTypeName](#compliancetypename)
  * Details [ComplianceItemDetails](#complianceitemdetails)
  * ExecutionSummary [ComplianceExecutionSummary](#complianceexecutionsummary)
  * Id [ComplianceItemId](#complianceitemid)
  * ResourceId [ComplianceResourceId](#complianceresourceid)
  * ResourceType [ComplianceResourceType](#complianceresourcetype)
  * Severity [ComplianceSeverity](#complianceseverity)
  * Status [ComplianceStatus](#compliancestatus)
  * Title [ComplianceItemTitle](#complianceitemtitle)

### ComplianceItemContentHash
* ComplianceItemContentHash `string`

### ComplianceItemDetails
* ComplianceItemDetails `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### ComplianceItemEntry
* ComplianceItemEntry `object`: Information about a compliance item.
  * Details [ComplianceItemDetails](#complianceitemdetails)
  * Id [ComplianceItemId](#complianceitemid)
  * Severity **required** [ComplianceSeverity](#complianceseverity)
  * Status **required** [ComplianceStatus](#compliancestatus)
  * Title [ComplianceItemTitle](#complianceitemtitle)

### ComplianceItemEntryList
* ComplianceItemEntryList `array`
  * items [ComplianceItemEntry](#complianceitementry)

### ComplianceItemId
* ComplianceItemId `string`

### ComplianceItemList
* ComplianceItemList `array`
  * items [ComplianceItem](#complianceitem)

### ComplianceItemTitle
* ComplianceItemTitle `string`

### ComplianceQueryOperatorType
* ComplianceQueryOperatorType `string` (values: EQUAL, NOT_EQUAL, BEGIN_WITH, LESS_THAN, GREATER_THAN)

### ComplianceResourceId
* ComplianceResourceId `string`

### ComplianceResourceIdList
* ComplianceResourceIdList `array`
  * items [ComplianceResourceId](#complianceresourceid)

### ComplianceResourceType
* ComplianceResourceType `string`

### ComplianceResourceTypeList
* ComplianceResourceTypeList `array`
  * items [ComplianceResourceType](#complianceresourcetype)

### ComplianceSeverity
* ComplianceSeverity `string` (values: CRITICAL, HIGH, MEDIUM, LOW, INFORMATIONAL, UNSPECIFIED)

### ComplianceStatus
* ComplianceStatus `string` (values: COMPLIANT, NON_COMPLIANT)

### ComplianceStringFilter
* ComplianceStringFilter `object`: One or more filters. Use a filter to return a more specific list of results.
  * Key [ComplianceStringFilterKey](#compliancestringfilterkey)
  * Type [ComplianceQueryOperatorType](#compliancequeryoperatortype)
  * Values [ComplianceStringFilterValueList](#compliancestringfiltervaluelist)

### ComplianceStringFilterKey
* ComplianceStringFilterKey `string`

### ComplianceStringFilterList
* ComplianceStringFilterList `array`
  * items [ComplianceStringFilter](#compliancestringfilter)

### ComplianceStringFilterValueList
* ComplianceStringFilterValueList `array`
  * items [ComplianceFilterValue](#compliancefiltervalue)

### ComplianceSummaryCount
* ComplianceSummaryCount `integer`

### ComplianceSummaryItem
* ComplianceSummaryItem `object`: A summary of compliance information by compliance type.
  * ComplianceType [ComplianceTypeName](#compliancetypename)
  * CompliantSummary [CompliantSummary](#compliantsummary)
  * NonCompliantSummary [NonCompliantSummary](#noncompliantsummary)

### ComplianceSummaryItemList
* ComplianceSummaryItemList `array`
  * items [ComplianceSummaryItem](#compliancesummaryitem)

### ComplianceTypeCountLimitExceededException
* ComplianceTypeCountLimitExceededException `object`: You specified too many custom compliance types. You can specify a maximum of 10 different types. 
  * Message [String](#string)

### ComplianceTypeName
* ComplianceTypeName `string`

### CompliantSummary
* CompliantSummary `object`: A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.
  * CompliantCount [ComplianceSummaryCount](#compliancesummarycount)
  * SeveritySummary [SeveritySummary](#severitysummary)

### ComputerName
* ComputerName `string`

### CreateActivationRequest
* CreateActivationRequest `object`
  * DefaultInstanceName [DefaultInstanceName](#defaultinstancename)
  * Description [ActivationDescription](#activationdescription)
  * ExpirationDate [ExpirationDate](#expirationdate)
  * IamRole **required** [IamRole](#iamrole)
  * RegistrationLimit [RegistrationLimit](#registrationlimit)

### CreateActivationResult
* CreateActivationResult `object`
  * ActivationCode [ActivationCode](#activationcode)
  * ActivationId [ActivationId](#activationid)

### CreateAssociationBatchRequest
* CreateAssociationBatchRequest `object`
  * Entries **required** [CreateAssociationBatchRequestEntries](#createassociationbatchrequestentries)

### CreateAssociationBatchRequestEntries
* CreateAssociationBatchRequestEntries `array`
  * items [CreateAssociationBatchRequestEntry](#createassociationbatchrequestentry)

### CreateAssociationBatchRequestEntry
* CreateAssociationBatchRequestEntry `object`: Describes the association of a Systems Manager document and an instance.
  * AssociationName [AssociationName](#associationname)
  * DocumentVersion [DocumentVersion](#documentversion)
  * InstanceId [InstanceId](#instanceid)
  * Name **required** [DocumentName](#documentname)
  * OutputLocation [InstanceAssociationOutputLocation](#instanceassociationoutputlocation)
  * Parameters [Parameters](#parameters)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * Targets [Targets](#targets)

### CreateAssociationBatchResult
* CreateAssociationBatchResult `object`
  * Failed [FailedCreateAssociationList](#failedcreateassociationlist)
  * Successful [AssociationDescriptionList](#associationdescriptionlist)

### CreateAssociationRequest
* CreateAssociationRequest `object`
  * AssociationName [AssociationName](#associationname)
  * DocumentVersion [DocumentVersion](#documentversion)
  * InstanceId [InstanceId](#instanceid)
  * Name **required** [DocumentName](#documentname)
  * OutputLocation [InstanceAssociationOutputLocation](#instanceassociationoutputlocation)
  * Parameters [Parameters](#parameters)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * Targets [Targets](#targets)

### CreateAssociationResult
* CreateAssociationResult `object`
  * AssociationDescription [AssociationDescription](#associationdescription)

### CreateDocumentRequest
* CreateDocumentRequest `object`
  * Content **required** [DocumentContent](#documentcontent)
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentType [DocumentType](#documenttype)
  * Name **required** [DocumentName](#documentname)
  * TargetType [TargetType](#targettype)

### CreateDocumentResult
* CreateDocumentResult `object`
  * DocumentDescription [DocumentDescription](#documentdescription)

### CreateMaintenanceWindowRequest
* CreateMaintenanceWindowRequest `object`
  * AllowUnassociatedTargets **required** [MaintenanceWindowAllowUnassociatedTargets](#maintenancewindowallowunassociatedtargets)
  * ClientToken [ClientToken](#clienttoken)
  * Cutoff **required** [MaintenanceWindowCutoff](#maintenancewindowcutoff)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Duration **required** [MaintenanceWindowDurationHours](#maintenancewindowdurationhours)
  * Name **required** [MaintenanceWindowName](#maintenancewindowname)
  * Schedule **required** [MaintenanceWindowSchedule](#maintenancewindowschedule)

### CreateMaintenanceWindowResult
* CreateMaintenanceWindowResult `object`
  * WindowId [MaintenanceWindowId](#maintenancewindowid)

### CreatePatchBaselineRequest
* CreatePatchBaselineRequest `object`
  * ApprovalRules [PatchRuleGroup](#patchrulegroup)
  * ApprovedPatches [PatchIdList](#patchidlist)
  * ApprovedPatchesComplianceLevel [PatchComplianceLevel](#patchcompliancelevel)
  * ApprovedPatchesEnableNonSecurity [Boolean](#boolean)
  * ClientToken [ClientToken](#clienttoken)
  * Description [BaselineDescription](#baselinedescription)
  * GlobalFilters [PatchFilterGroup](#patchfiltergroup)
  * Name **required** [BaselineName](#baselinename)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * RejectedPatches [PatchIdList](#patchidlist)
  * Sources [PatchSourceList](#patchsourcelist)

### CreatePatchBaselineResult
* CreatePatchBaselineResult `object`
  * BaselineId [BaselineId](#baselineid)

### CreateResourceDataSyncRequest
* CreateResourceDataSyncRequest `object`
  * S3Destination **required** [ResourceDataSyncS3Destination](#resourcedatasyncs3destination)
  * SyncName **required** [ResourceDataSyncName](#resourcedatasyncname)

### CreateResourceDataSyncResult
* CreateResourceDataSyncResult `object`

### CreatedDate
* CreatedDate `string`

### CustomSchemaCountLimitExceededException
* CustomSchemaCountLimitExceededException `object`: You have exceeded the limit for custom schemas. Delete one or more custom schemas and try again.
  * Message [String](#string)

### DateTime
* DateTime `string`

### DefaultBaseline
* DefaultBaseline `boolean`

### DefaultInstanceName
* DefaultInstanceName `string`

### DeleteActivationRequest
* DeleteActivationRequest `object`
  * ActivationId **required** [ActivationId](#activationid)

### DeleteActivationResult
* DeleteActivationResult `object`

### DeleteAssociationRequest
* DeleteAssociationRequest `object`
  * AssociationId [AssociationId](#associationid)
  * InstanceId [InstanceId](#instanceid)
  * Name [DocumentName](#documentname)

### DeleteAssociationResult
* DeleteAssociationResult `object`

### DeleteDocumentRequest
* DeleteDocumentRequest `object`
  * Name **required** [DocumentName](#documentname)

### DeleteDocumentResult
* DeleteDocumentResult `object`

### DeleteInventoryRequest
* DeleteInventoryRequest `object`
  * ClientToken [ClientToken](#clienttoken)
  * DryRun [DryRun](#dryrun)
  * SchemaDeleteOption [InventorySchemaDeleteOption](#inventoryschemadeleteoption)
  * TypeName **required** [InventoryItemTypeName](#inventoryitemtypename)

### DeleteInventoryResult
* DeleteInventoryResult `object`
  * DeletionId [InventoryDeletionId](#inventorydeletionid)
  * DeletionSummary [InventoryDeletionSummary](#inventorydeletionsummary)
  * TypeName [InventoryItemTypeName](#inventoryitemtypename)

### DeleteMaintenanceWindowRequest
* DeleteMaintenanceWindowRequest `object`
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

### DeleteMaintenanceWindowResult
* DeleteMaintenanceWindowResult `object`
  * WindowId [MaintenanceWindowId](#maintenancewindowid)

### DeleteParameterRequest
* DeleteParameterRequest `object`
  * Name **required** [PSParameterName](#psparametername)

### DeleteParameterResult
* DeleteParameterResult `object`

### DeleteParametersRequest
* DeleteParametersRequest `object`
  * Names **required** [ParameterNameList](#parameternamelist)

### DeleteParametersResult
* DeleteParametersResult `object`
  * DeletedParameters [ParameterNameList](#parameternamelist)
  * InvalidParameters [ParameterNameList](#parameternamelist)

### DeletePatchBaselineRequest
* DeletePatchBaselineRequest `object`
  * BaselineId **required** [BaselineId](#baselineid)

### DeletePatchBaselineResult
* DeletePatchBaselineResult `object`
  * BaselineId [BaselineId](#baselineid)

### DeleteResourceDataSyncRequest
* DeleteResourceDataSyncRequest `object`
  * SyncName **required** [ResourceDataSyncName](#resourcedatasyncname)

### DeleteResourceDataSyncResult
* DeleteResourceDataSyncResult `object`

### DeregisterManagedInstanceRequest
* DeregisterManagedInstanceRequest `object`
  * InstanceId **required** [ManagedInstanceId](#managedinstanceid)

### DeregisterManagedInstanceResult
* DeregisterManagedInstanceResult `object`

### DeregisterPatchBaselineForPatchGroupRequest
* DeregisterPatchBaselineForPatchGroupRequest `object`
  * BaselineId **required** [BaselineId](#baselineid)
  * PatchGroup **required** [PatchGroup](#patchgroup)

### DeregisterPatchBaselineForPatchGroupResult
* DeregisterPatchBaselineForPatchGroupResult `object`
  * BaselineId [BaselineId](#baselineid)
  * PatchGroup [PatchGroup](#patchgroup)

### DeregisterTargetFromMaintenanceWindowRequest
* DeregisterTargetFromMaintenanceWindowRequest `object`
  * Safe [Boolean](#boolean)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTargetId **required** [MaintenanceWindowTargetId](#maintenancewindowtargetid)

### DeregisterTargetFromMaintenanceWindowResult
* DeregisterTargetFromMaintenanceWindowResult `object`
  * WindowId [MaintenanceWindowId](#maintenancewindowid)
  * WindowTargetId [MaintenanceWindowTargetId](#maintenancewindowtargetid)

### DeregisterTaskFromMaintenanceWindowRequest
* DeregisterTaskFromMaintenanceWindowRequest `object`
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId **required** [MaintenanceWindowTaskId](#maintenancewindowtaskid)

### DeregisterTaskFromMaintenanceWindowResult
* DeregisterTaskFromMaintenanceWindowResult `object`
  * WindowId [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId [MaintenanceWindowTaskId](#maintenancewindowtaskid)

### DescribeActivationsFilter
* DescribeActivationsFilter `object`: Filter for the DescribeActivation API.
  * FilterKey [DescribeActivationsFilterKeys](#describeactivationsfilterkeys)
  * FilterValues [StringList](#stringlist)

### DescribeActivationsFilterKeys
* DescribeActivationsFilterKeys `string` (values: ActivationIds, DefaultInstanceName, IamRole)

### DescribeActivationsFilterList
* DescribeActivationsFilterList `array`
  * items [DescribeActivationsFilter](#describeactivationsfilter)

### DescribeActivationsRequest
* DescribeActivationsRequest `object`
  * Filters [DescribeActivationsFilterList](#describeactivationsfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeActivationsResult
* DescribeActivationsResult `object`
  * ActivationList [ActivationList](#activationlist)
  * NextToken [NextToken](#nexttoken)

### DescribeAssociationRequest
* DescribeAssociationRequest `object`
  * AssociationId [AssociationId](#associationid)
  * AssociationVersion [AssociationVersion](#associationversion)
  * InstanceId [InstanceId](#instanceid)
  * Name [DocumentName](#documentname)

### DescribeAssociationResult
* DescribeAssociationResult `object`
  * AssociationDescription [AssociationDescription](#associationdescription)

### DescribeAutomationExecutionsRequest
* DescribeAutomationExecutionsRequest `object`
  * Filters [AutomationExecutionFilterList](#automationexecutionfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeAutomationExecutionsResult
* DescribeAutomationExecutionsResult `object`
  * AutomationExecutionMetadataList [AutomationExecutionMetadataList](#automationexecutionmetadatalist)
  * NextToken [NextToken](#nexttoken)

### DescribeAutomationStepExecutionsRequest
* DescribeAutomationStepExecutionsRequest `object`
  * AutomationExecutionId **required** [AutomationExecutionId](#automationexecutionid)
  * Filters [StepExecutionFilterList](#stepexecutionfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ReverseOrder [Boolean](#boolean)

### DescribeAutomationStepExecutionsResult
* DescribeAutomationStepExecutionsResult `object`
  * NextToken [NextToken](#nexttoken)
  * StepExecutions [StepExecutionList](#stepexecutionlist)

### DescribeAvailablePatchesRequest
* DescribeAvailablePatchesRequest `object`
  * Filters [PatchOrchestratorFilterList](#patchorchestratorfilterlist)
  * MaxResults [PatchBaselineMaxResults](#patchbaselinemaxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeAvailablePatchesResult
* DescribeAvailablePatchesResult `object`
  * NextToken [NextToken](#nexttoken)
  * Patches [PatchList](#patchlist)

### DescribeDocumentPermissionRequest
* DescribeDocumentPermissionRequest `object`
  * Name **required** [DocumentName](#documentname)
  * PermissionType **required** [DocumentPermissionType](#documentpermissiontype)

### DescribeDocumentPermissionResponse
* DescribeDocumentPermissionResponse `object`
  * AccountIds [AccountIdList](#accountidlist)

### DescribeDocumentRequest
* DescribeDocumentRequest `object`
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name **required** [DocumentARN](#documentarn)

### DescribeDocumentResult
* DescribeDocumentResult `object`
  * Document [DocumentDescription](#documentdescription)

### DescribeEffectiveInstanceAssociationsRequest
* DescribeEffectiveInstanceAssociationsRequest `object`
  * InstanceId **required** [InstanceId](#instanceid)
  * MaxResults [EffectiveInstanceAssociationMaxResults](#effectiveinstanceassociationmaxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeEffectiveInstanceAssociationsResult
* DescribeEffectiveInstanceAssociationsResult `object`
  * Associations [InstanceAssociationList](#instanceassociationlist)
  * NextToken [NextToken](#nexttoken)

### DescribeEffectivePatchesForPatchBaselineRequest
* DescribeEffectivePatchesForPatchBaselineRequest `object`
  * BaselineId **required** [BaselineId](#baselineid)
  * MaxResults [PatchBaselineMaxResults](#patchbaselinemaxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeEffectivePatchesForPatchBaselineResult
* DescribeEffectivePatchesForPatchBaselineResult `object`
  * EffectivePatches [EffectivePatchList](#effectivepatchlist)
  * NextToken [NextToken](#nexttoken)

### DescribeInstanceAssociationsStatusRequest
* DescribeInstanceAssociationsStatusRequest `object`
  * InstanceId **required** [InstanceId](#instanceid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeInstanceAssociationsStatusResult
* DescribeInstanceAssociationsStatusResult `object`
  * InstanceAssociationStatusInfos [InstanceAssociationStatusInfos](#instanceassociationstatusinfos)
  * NextToken [NextToken](#nexttoken)

### DescribeInstanceInformationRequest
* DescribeInstanceInformationRequest `object`
  * Filters [InstanceInformationStringFilterList](#instanceinformationstringfilterlist)
  * InstanceInformationFilterList [InstanceInformationFilterList](#instanceinformationfilterlist)
  * MaxResults [MaxResultsEC2Compatible](#maxresultsec2compatible)
  * NextToken [NextToken](#nexttoken)

### DescribeInstanceInformationResult
* DescribeInstanceInformationResult `object`
  * InstanceInformationList [InstanceInformationList](#instanceinformationlist)
  * NextToken [NextToken](#nexttoken)

### DescribeInstancePatchStatesForPatchGroupRequest
* DescribeInstancePatchStatesForPatchGroupRequest `object`
  * Filters [InstancePatchStateFilterList](#instancepatchstatefilterlist)
  * MaxResults [PatchComplianceMaxResults](#patchcompliancemaxresults)
  * NextToken [NextToken](#nexttoken)
  * PatchGroup **required** [PatchGroup](#patchgroup)

### DescribeInstancePatchStatesForPatchGroupResult
* DescribeInstancePatchStatesForPatchGroupResult `object`
  * InstancePatchStates [InstancePatchStatesList](#instancepatchstateslist)
  * NextToken [NextToken](#nexttoken)

### DescribeInstancePatchStatesRequest
* DescribeInstancePatchStatesRequest `object`
  * InstanceIds **required** [InstanceIdList](#instanceidlist)
  * MaxResults [PatchComplianceMaxResults](#patchcompliancemaxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeInstancePatchStatesResult
* DescribeInstancePatchStatesResult `object`
  * InstancePatchStates [InstancePatchStateList](#instancepatchstatelist)
  * NextToken [NextToken](#nexttoken)

### DescribeInstancePatchesRequest
* DescribeInstancePatchesRequest `object`
  * Filters [PatchOrchestratorFilterList](#patchorchestratorfilterlist)
  * InstanceId **required** [InstanceId](#instanceid)
  * MaxResults [PatchComplianceMaxResults](#patchcompliancemaxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeInstancePatchesResult
* DescribeInstancePatchesResult `object`
  * NextToken [NextToken](#nexttoken)
  * Patches [PatchComplianceDataList](#patchcompliancedatalist)

### DescribeInventoryDeletionsRequest
* DescribeInventoryDeletionsRequest `object`
  * DeletionId [InventoryDeletionId](#inventorydeletionid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeInventoryDeletionsResult
* DescribeInventoryDeletionsResult `object`
  * InventoryDeletions [InventoryDeletionsList](#inventorydeletionslist)
  * NextToken [NextToken](#nexttoken)

### DescribeMaintenanceWindowExecutionTaskInvocationsRequest
* DescribeMaintenanceWindowExecutionTaskInvocationsRequest `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * TaskId **required** [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

### DescribeMaintenanceWindowExecutionTaskInvocationsResult
* DescribeMaintenanceWindowExecutionTaskInvocationsResult `object`
  * NextToken [NextToken](#nexttoken)
  * WindowExecutionTaskInvocationIdentities [MaintenanceWindowExecutionTaskInvocationIdentityList](#maintenancewindowexecutiontaskinvocationidentitylist)

### DescribeMaintenanceWindowExecutionTasksRequest
* DescribeMaintenanceWindowExecutionTasksRequest `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

### DescribeMaintenanceWindowExecutionTasksResult
* DescribeMaintenanceWindowExecutionTasksResult `object`
  * NextToken [NextToken](#nexttoken)
  * WindowExecutionTaskIdentities [MaintenanceWindowExecutionTaskIdentityList](#maintenancewindowexecutiontaskidentitylist)

### DescribeMaintenanceWindowExecutionsRequest
* DescribeMaintenanceWindowExecutionsRequest `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

### DescribeMaintenanceWindowExecutionsResult
* DescribeMaintenanceWindowExecutionsResult `object`
  * NextToken [NextToken](#nexttoken)
  * WindowExecutions [MaintenanceWindowExecutionList](#maintenancewindowexecutionlist)

### DescribeMaintenanceWindowTargetsRequest
* DescribeMaintenanceWindowTargetsRequest `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

### DescribeMaintenanceWindowTargetsResult
* DescribeMaintenanceWindowTargetsResult `object`
  * NextToken [NextToken](#nexttoken)
  * Targets [MaintenanceWindowTargetList](#maintenancewindowtargetlist)

### DescribeMaintenanceWindowTasksRequest
* DescribeMaintenanceWindowTasksRequest `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

### DescribeMaintenanceWindowTasksResult
* DescribeMaintenanceWindowTasksResult `object`
  * NextToken [NextToken](#nexttoken)
  * Tasks [MaintenanceWindowTaskList](#maintenancewindowtasklist)

### DescribeMaintenanceWindowsRequest
* DescribeMaintenanceWindowsRequest `object`
  * Filters [MaintenanceWindowFilterList](#maintenancewindowfilterlist)
  * MaxResults [MaintenanceWindowMaxResults](#maintenancewindowmaxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeMaintenanceWindowsResult
* DescribeMaintenanceWindowsResult `object`
  * NextToken [NextToken](#nexttoken)
  * WindowIdentities [MaintenanceWindowIdentityList](#maintenancewindowidentitylist)

### DescribeParametersRequest
* DescribeParametersRequest `object`
  * Filters [ParametersFilterList](#parametersfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ParameterFilters [ParameterStringFilterList](#parameterstringfilterlist)

### DescribeParametersResult
* DescribeParametersResult `object`
  * NextToken [NextToken](#nexttoken)
  * Parameters [ParameterMetadataList](#parametermetadatalist)

### DescribePatchBaselinesRequest
* DescribePatchBaselinesRequest `object`
  * Filters [PatchOrchestratorFilterList](#patchorchestratorfilterlist)
  * MaxResults [PatchBaselineMaxResults](#patchbaselinemaxresults)
  * NextToken [NextToken](#nexttoken)

### DescribePatchBaselinesResult
* DescribePatchBaselinesResult `object`
  * BaselineIdentities [PatchBaselineIdentityList](#patchbaselineidentitylist)
  * NextToken [NextToken](#nexttoken)

### DescribePatchGroupStateRequest
* DescribePatchGroupStateRequest `object`
  * PatchGroup **required** [PatchGroup](#patchgroup)

### DescribePatchGroupStateResult
* DescribePatchGroupStateResult `object`
  * Instances [Integer](#integer)
  * InstancesWithFailedPatches [Integer](#integer)
  * InstancesWithInstalledOtherPatches [Integer](#integer)
  * InstancesWithInstalledPatches [Integer](#integer)
  * InstancesWithMissingPatches [Integer](#integer)
  * InstancesWithNotApplicablePatches [Integer](#integer)

### DescribePatchGroupsRequest
* DescribePatchGroupsRequest `object`
  * Filters [PatchOrchestratorFilterList](#patchorchestratorfilterlist)
  * MaxResults [PatchBaselineMaxResults](#patchbaselinemaxresults)
  * NextToken [NextToken](#nexttoken)

### DescribePatchGroupsResult
* DescribePatchGroupsResult `object`
  * Mappings [PatchGroupPatchBaselineMappingList](#patchgrouppatchbaselinemappinglist)
  * NextToken [NextToken](#nexttoken)

### DescriptionInDocument
* DescriptionInDocument `string`

### DocumentARN
* DocumentARN `string`

### DocumentAlreadyExists
* DocumentAlreadyExists `object`: The specified document already exists.
  * Message [String](#string)

### DocumentContent
* DocumentContent `string`

### DocumentDefaultVersionDescription
* DocumentDefaultVersionDescription `object`: A default version of a document.
  * DefaultVersion [DocumentVersion](#documentversion)
  * Name [DocumentName](#documentname)

### DocumentDescription
* DocumentDescription `object`: Describes a Systems Manager document. 
  * CreatedDate [DateTime](#datetime)
  * DefaultVersion [DocumentVersion](#documentversion)
  * Description [DescriptionInDocument](#descriptionindocument)
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentType [DocumentType](#documenttype)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Hash [DocumentHash](#documenthash)
  * HashType [DocumentHashType](#documenthashtype)
  * LatestVersion [DocumentVersion](#documentversion)
  * Name [DocumentARN](#documentarn)
  * Owner [DocumentOwner](#documentowner)
  * Parameters [DocumentParameterList](#documentparameterlist)
  * PlatformTypes [PlatformTypeList](#platformtypelist)
  * SchemaVersion [DocumentSchemaVersion](#documentschemaversion)
  * Sha1 [DocumentSha1](#documentsha1)
  * Status [DocumentStatus](#documentstatus)
  * Tags [TagList](#taglist)
  * TargetType [TargetType](#targettype)

### DocumentFilter
* DocumentFilter `object`: Describes a filter.
  * key **required** [DocumentFilterKey](#documentfilterkey)
  * value **required** [DocumentFilterValue](#documentfiltervalue)

### DocumentFilterKey
* DocumentFilterKey `string` (values: Name, Owner, PlatformTypes, DocumentType)

### DocumentFilterList
* DocumentFilterList `array`
  * items [DocumentFilter](#documentfilter)

### DocumentFilterValue
* DocumentFilterValue `string`

### DocumentFormat
* DocumentFormat `string` (values: YAML, JSON)

### DocumentHash
* DocumentHash `string`

### DocumentHashType
* DocumentHashType `string` (values: Sha256, Sha1)

### DocumentIdentifier
* DocumentIdentifier `object`: Describes the name of a Systems Manager document.
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentType [DocumentType](#documenttype)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name [DocumentARN](#documentarn)
  * Owner [DocumentOwner](#documentowner)
  * PlatformTypes [PlatformTypeList](#platformtypelist)
  * SchemaVersion [DocumentSchemaVersion](#documentschemaversion)
  * Tags [TagList](#taglist)
  * TargetType [TargetType](#targettype)

### DocumentIdentifierList
* DocumentIdentifierList `array`
  * items [DocumentIdentifier](#documentidentifier)

### DocumentKeyValuesFilter
* DocumentKeyValuesFilter `object`: <p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>Other valid values include Owner, Name, PlatformTypes, and DocumentType.</p> <p>Note that only one Owner can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <p>If you use Name as a key, you can use a name prefix to return a list of documents. For example, in the AWS CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key and value pair, use the format <code>Key=tag:[tagName],Values=[valueName]</code>.</p> <p>For example, if you created a Key called region and are using the AWS CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p>
  * Key [DocumentKeyValuesFilterKey](#documentkeyvaluesfilterkey)
  * Values [DocumentKeyValuesFilterValues](#documentkeyvaluesfiltervalues)

### DocumentKeyValuesFilterKey
* DocumentKeyValuesFilterKey `string`

### DocumentKeyValuesFilterList
* DocumentKeyValuesFilterList `array`
  * items [DocumentKeyValuesFilter](#documentkeyvaluesfilter)

### DocumentKeyValuesFilterValue
* DocumentKeyValuesFilterValue `string`

### DocumentKeyValuesFilterValues
* DocumentKeyValuesFilterValues `array`
  * items [DocumentKeyValuesFilterValue](#documentkeyvaluesfiltervalue)

### DocumentLimitExceeded
* DocumentLimitExceeded `object`: You can have at most 200 active Systems Manager documents.
  * Message [String](#string)

### DocumentName
* DocumentName `string`

### DocumentOwner
* DocumentOwner `string`

### DocumentParameter
* DocumentParameter `object`: Parameters specified in a System Manager document that execute on the server when the command is run. 
  * DefaultValue [DocumentParameterDefaultValue](#documentparameterdefaultvalue)
  * Description [DocumentParameterDescrption](#documentparameterdescrption)
  * Name [DocumentParameterName](#documentparametername)
  * Type [DocumentParameterType](#documentparametertype)

### DocumentParameterDefaultValue
* DocumentParameterDefaultValue `string`

### DocumentParameterDescrption
* DocumentParameterDescrption `string`

### DocumentParameterList
* DocumentParameterList `array`
  * items [DocumentParameter](#documentparameter)

### DocumentParameterName
* DocumentParameterName `string`

### DocumentParameterType
* DocumentParameterType `string` (values: String, StringList)

### DocumentPermissionLimit
* DocumentPermissionLimit `object`: The document cannot be shared with more AWS user accounts. You can share a document with a maximum of 20 accounts. You can publicly share up to five documents. If you need to increase this limit, contact AWS Support.
  * Message [String](#string)

### DocumentPermissionType
* DocumentPermissionType `string` (values: Share)

### DocumentSchemaVersion
* DocumentSchemaVersion `string`

### DocumentSha1
* DocumentSha1 `string`

### DocumentStatus
* DocumentStatus `string` (values: Creating, Active, Updating, Deleting)

### DocumentType
* DocumentType `string` (values: Command, Policy, Automation)

### DocumentVersion
* DocumentVersion `string`

### DocumentVersionInfo
* DocumentVersionInfo `object`: Version information about the document.
  * CreatedDate [DateTime](#datetime)
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentVersion [DocumentVersion](#documentversion)
  * IsDefaultVersion [Boolean](#boolean)
  * Name [DocumentName](#documentname)

### DocumentVersionLimitExceeded
* DocumentVersionLimitExceeded `object`: The document has too many versions. Delete one or more document versions and try again.
  * Message [String](#string)

### DocumentVersionList
* DocumentVersionList `array`
  * items [DocumentVersionInfo](#documentversioninfo)

### DocumentVersionNumber
* DocumentVersionNumber `string`

### DoesNotExistException
* DoesNotExistException `object`: <p>Error returned when the ID specified for a resource, such as a Maintenance Window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
  * Message [String](#string)

### DryRun
* DryRun `boolean`

### DuplicateDocumentContent
* DuplicateDocumentContent `object`: The content of the association document matches another document. Change the content of the document and try again.
  * Message [String](#string)

### DuplicateInstanceId
* DuplicateInstanceId `object`: You cannot specify an instance ID in more than one association.

### EffectiveInstanceAssociationMaxResults
* EffectiveInstanceAssociationMaxResults `integer`

### EffectivePatch
* EffectivePatch `object`: The EffectivePatch structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
  * Patch [Patch](#patch)
  * PatchStatus [PatchStatus](#patchstatus)

### EffectivePatchList
* EffectivePatchList `array`
  * items [EffectivePatch](#effectivepatch)

### ErrorCount
* ErrorCount `integer`

### ExecutionMode
* ExecutionMode `string` (values: Auto, Interactive)

### ExpirationDate
* ExpirationDate `string`

### FailedCreateAssociation
* FailedCreateAssociation `object`: Describes a failed association.
  * Entry [CreateAssociationBatchRequestEntry](#createassociationbatchrequestentry)
  * Fault [Fault](#fault)
  * Message [BatchErrorMessage](#batcherrormessage)

### FailedCreateAssociationList
* FailedCreateAssociationList `array`
  * items [FailedCreateAssociation](#failedcreateassociation)

### FailureDetails
* FailureDetails `object`: Information about an Automation failure.
  * Details [AutomationParameterMap](#automationparametermap)
  * FailureStage [String](#string)
  * FailureType [String](#string)

### Fault
* Fault `string` (values: Client, Server, Unknown)

### FeatureNotAvailableException
* FeatureNotAvailableException `object`: You attempted to register a LAMBDA or STEP_FUNCTION task in a region where the corresponding service is not available. 
  * Message [String](#string)

### GetAutomationExecutionRequest
* GetAutomationExecutionRequest `object`
  * AutomationExecutionId **required** [AutomationExecutionId](#automationexecutionid)

### GetAutomationExecutionResult
* GetAutomationExecutionResult `object`
  * AutomationExecution [AutomationExecution](#automationexecution)

### GetCommandInvocationRequest
* GetCommandInvocationRequest `object`
  * CommandId **required** [CommandId](#commandid)
  * InstanceId **required** [InstanceId](#instanceid)
  * PluginName [CommandPluginName](#commandpluginname)

### GetCommandInvocationResult
* GetCommandInvocationResult `object`
  * CommandId [CommandId](#commandid)
  * Comment [Comment](#comment)
  * DocumentName [DocumentName](#documentname)
  * DocumentVersion [DocumentVersion](#documentversion)
  * ExecutionElapsedTime [StringDateTime](#stringdatetime)
  * ExecutionEndDateTime [StringDateTime](#stringdatetime)
  * ExecutionStartDateTime [StringDateTime](#stringdatetime)
  * InstanceId [InstanceId](#instanceid)
  * PluginName [CommandPluginName](#commandpluginname)
  * ResponseCode [ResponseCode](#responsecode)
  * StandardErrorContent [StandardErrorContent](#standarderrorcontent)
  * StandardErrorUrl [Url](#url)
  * StandardOutputContent [StandardOutputContent](#standardoutputcontent)
  * StandardOutputUrl [Url](#url)
  * Status [CommandInvocationStatus](#commandinvocationstatus)
  * StatusDetails [StatusDetails](#statusdetails)

### GetDefaultPatchBaselineRequest
* GetDefaultPatchBaselineRequest `object`
  * OperatingSystem [OperatingSystem](#operatingsystem)

### GetDefaultPatchBaselineResult
* GetDefaultPatchBaselineResult `object`
  * BaselineId [BaselineId](#baselineid)
  * OperatingSystem [OperatingSystem](#operatingsystem)

### GetDeployablePatchSnapshotForInstanceRequest
* GetDeployablePatchSnapshotForInstanceRequest `object`
  * InstanceId **required** [InstanceId](#instanceid)
  * SnapshotId **required** [SnapshotId](#snapshotid)

### GetDeployablePatchSnapshotForInstanceResult
* GetDeployablePatchSnapshotForInstanceResult `object`
  * InstanceId [InstanceId](#instanceid)
  * Product [Product](#product)
  * SnapshotDownloadUrl [SnapshotDownloadUrl](#snapshotdownloadurl)
  * SnapshotId [SnapshotId](#snapshotid)

### GetDocumentRequest
* GetDocumentRequest `object`
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name **required** [DocumentARN](#documentarn)

### GetDocumentResult
* GetDocumentResult `object`
  * Content [DocumentContent](#documentcontent)
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentType [DocumentType](#documenttype)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name [DocumentARN](#documentarn)

### GetInventoryRequest
* GetInventoryRequest `object`
  * Aggregators [InventoryAggregatorList](#inventoryaggregatorlist)
  * Filters [InventoryFilterList](#inventoryfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ResultAttributes [ResultAttributeList](#resultattributelist)

### GetInventoryResult
* GetInventoryResult `object`
  * Entities [InventoryResultEntityList](#inventoryresultentitylist)
  * NextToken [NextToken](#nexttoken)

### GetInventorySchemaMaxResults
* GetInventorySchemaMaxResults `integer`

### GetInventorySchemaRequest
* GetInventorySchemaRequest `object`
  * Aggregator [AggregatorSchemaOnly](#aggregatorschemaonly)
  * MaxResults [GetInventorySchemaMaxResults](#getinventoryschemamaxresults)
  * NextToken [NextToken](#nexttoken)
  * SubType [IsSubTypeSchema](#issubtypeschema)
  * TypeName [InventoryItemTypeNameFilter](#inventoryitemtypenamefilter)

### GetInventorySchemaResult
* GetInventorySchemaResult `object`
  * NextToken [NextToken](#nexttoken)
  * Schemas [InventoryItemSchemaResultList](#inventoryitemschemaresultlist)

### GetMaintenanceWindowExecutionRequest
* GetMaintenanceWindowExecutionRequest `object`
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

### GetMaintenanceWindowExecutionResult
* GetMaintenanceWindowExecutionResult `object`
  * EndTime [DateTime](#datetime)
  * StartTime [DateTime](#datetime)
  * Status [MaintenanceWindowExecutionStatus](#maintenancewindowexecutionstatus)
  * StatusDetails [MaintenanceWindowExecutionStatusDetails](#maintenancewindowexecutionstatusdetails)
  * TaskIds [MaintenanceWindowExecutionTaskIdList](#maintenancewindowexecutiontaskidlist)
  * WindowExecutionId [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

### GetMaintenanceWindowExecutionTaskInvocationRequest
* GetMaintenanceWindowExecutionTaskInvocationRequest `object`
  * InvocationId **required** [MaintenanceWindowExecutionTaskInvocationId](#maintenancewindowexecutiontaskinvocationid)
  * TaskId **required** [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

### GetMaintenanceWindowExecutionTaskInvocationResult
* GetMaintenanceWindowExecutionTaskInvocationResult `object`
  * EndTime [DateTime](#datetime)
  * ExecutionId [MaintenanceWindowExecutionTaskExecutionId](#maintenancewindowexecutiontaskexecutionid)
  * InvocationId [MaintenanceWindowExecutionTaskInvocationId](#maintenancewindowexecutiontaskinvocationid)
  * OwnerInformation [OwnerInformation](#ownerinformation)
  * Parameters [MaintenanceWindowExecutionTaskInvocationParameters](#maintenancewindowexecutiontaskinvocationparameters)
  * StartTime [DateTime](#datetime)
  * Status [MaintenanceWindowExecutionStatus](#maintenancewindowexecutionstatus)
  * StatusDetails [MaintenanceWindowExecutionStatusDetails](#maintenancewindowexecutionstatusdetails)
  * TaskExecutionId [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * TaskType [MaintenanceWindowTaskType](#maintenancewindowtasktype)
  * WindowExecutionId [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)
  * WindowTargetId [MaintenanceWindowTaskTargetId](#maintenancewindowtasktargetid)

### GetMaintenanceWindowExecutionTaskRequest
* GetMaintenanceWindowExecutionTaskRequest `object`
  * TaskId **required** [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * WindowExecutionId **required** [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

### GetMaintenanceWindowExecutionTaskResult
* GetMaintenanceWindowExecutionTaskResult `object`
  * EndTime [DateTime](#datetime)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Priority [MaintenanceWindowTaskPriority](#maintenancewindowtaskpriority)
  * ServiceRole [ServiceRole](#servicerole)
  * StartTime [DateTime](#datetime)
  * Status [MaintenanceWindowExecutionStatus](#maintenancewindowexecutionstatus)
  * StatusDetails [MaintenanceWindowExecutionStatusDetails](#maintenancewindowexecutionstatusdetails)
  * TaskArn [MaintenanceWindowTaskArn](#maintenancewindowtaskarn)
  * TaskExecutionId [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * TaskParameters [MaintenanceWindowTaskParametersList](#maintenancewindowtaskparameterslist)
  * Type [MaintenanceWindowTaskType](#maintenancewindowtasktype)
  * WindowExecutionId [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

### GetMaintenanceWindowRequest
* GetMaintenanceWindowRequest `object`
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

### GetMaintenanceWindowResult
* GetMaintenanceWindowResult `object`
  * AllowUnassociatedTargets [MaintenanceWindowAllowUnassociatedTargets](#maintenancewindowallowunassociatedtargets)
  * CreatedDate [DateTime](#datetime)
  * Cutoff [MaintenanceWindowCutoff](#maintenancewindowcutoff)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Duration [MaintenanceWindowDurationHours](#maintenancewindowdurationhours)
  * Enabled [MaintenanceWindowEnabled](#maintenancewindowenabled)
  * ModifiedDate [DateTime](#datetime)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Schedule [MaintenanceWindowSchedule](#maintenancewindowschedule)
  * WindowId [MaintenanceWindowId](#maintenancewindowid)

### GetMaintenanceWindowTaskRequest
* GetMaintenanceWindowTaskRequest `object`
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId **required** [MaintenanceWindowTaskId](#maintenancewindowtaskid)

### GetMaintenanceWindowTaskResult
* GetMaintenanceWindowTaskResult `object`
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * LoggingInfo [LoggingInfo](#logginginfo)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Priority [MaintenanceWindowTaskPriority](#maintenancewindowtaskpriority)
  * ServiceRoleArn [ServiceRole](#servicerole)
  * Targets [Targets](#targets)
  * TaskArn [MaintenanceWindowTaskArn](#maintenancewindowtaskarn)
  * TaskInvocationParameters [MaintenanceWindowTaskInvocationParameters](#maintenancewindowtaskinvocationparameters)
  * TaskParameters [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)
  * TaskType [MaintenanceWindowTaskType](#maintenancewindowtasktype)
  * WindowId [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId [MaintenanceWindowTaskId](#maintenancewindowtaskid)

### GetParameterHistoryRequest
* GetParameterHistoryRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * Name **required** [PSParameterName](#psparametername)
  * NextToken [NextToken](#nexttoken)
  * WithDecryption [Boolean](#boolean)

### GetParameterHistoryResult
* GetParameterHistoryResult `object`
  * NextToken [NextToken](#nexttoken)
  * Parameters [ParameterHistoryList](#parameterhistorylist)

### GetParameterRequest
* GetParameterRequest `object`
  * Name **required** [PSParameterName](#psparametername)
  * WithDecryption [Boolean](#boolean)

### GetParameterResult
* GetParameterResult `object`
  * Parameter [Parameter](#parameter)

### GetParametersByPathMaxResults
* GetParametersByPathMaxResults `integer`

### GetParametersByPathRequest
* GetParametersByPathRequest `object`
  * MaxResults [GetParametersByPathMaxResults](#getparametersbypathmaxresults)
  * NextToken [NextToken](#nexttoken)
  * ParameterFilters [ParameterStringFilterList](#parameterstringfilterlist)
  * Path **required** [PSParameterName](#psparametername)
  * Recursive [Boolean](#boolean)
  * WithDecryption [Boolean](#boolean)

### GetParametersByPathResult
* GetParametersByPathResult `object`
  * NextToken [NextToken](#nexttoken)
  * Parameters [ParameterList](#parameterlist)

### GetParametersRequest
* GetParametersRequest `object`
  * Names **required** [ParameterNameList](#parameternamelist)
  * WithDecryption [Boolean](#boolean)

### GetParametersResult
* GetParametersResult `object`
  * InvalidParameters [ParameterNameList](#parameternamelist)
  * Parameters [ParameterList](#parameterlist)

### GetPatchBaselineForPatchGroupRequest
* GetPatchBaselineForPatchGroupRequest `object`
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * PatchGroup **required** [PatchGroup](#patchgroup)

### GetPatchBaselineForPatchGroupResult
* GetPatchBaselineForPatchGroupResult `object`
  * BaselineId [BaselineId](#baselineid)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * PatchGroup [PatchGroup](#patchgroup)

### GetPatchBaselineRequest
* GetPatchBaselineRequest `object`
  * BaselineId **required** [BaselineId](#baselineid)

### GetPatchBaselineResult
* GetPatchBaselineResult `object`
  * ApprovalRules [PatchRuleGroup](#patchrulegroup)
  * ApprovedPatches [PatchIdList](#patchidlist)
  * ApprovedPatchesComplianceLevel [PatchComplianceLevel](#patchcompliancelevel)
  * ApprovedPatchesEnableNonSecurity [Boolean](#boolean)
  * BaselineId [BaselineId](#baselineid)
  * CreatedDate [DateTime](#datetime)
  * Description [BaselineDescription](#baselinedescription)
  * GlobalFilters [PatchFilterGroup](#patchfiltergroup)
  * ModifiedDate [DateTime](#datetime)
  * Name [BaselineName](#baselinename)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * PatchGroups [PatchGroupList](#patchgrouplist)
  * RejectedPatches [PatchIdList](#patchidlist)
  * Sources [PatchSourceList](#patchsourcelist)

### HierarchyLevelLimitExceededException
* HierarchyLevelLimitExceededException `object`: A hierarchy can have a maximum of 15 levels. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-working.html">Working with Systems Manager Parameters</a>. 
  * message [String](#string)

### HierarchyTypeMismatchException
* HierarchyTypeMismatchException `object`: Parameter Store does not support changing a parameter type in a hierarchy. For example, you can't change a parameter from a String type to a SecureString type. You must create a new, unique parameter.
  * message [String](#string)

### IPAddress
* IPAddress `string`

### IamRole
* IamRole `string`

### IdempotencyToken
* IdempotencyToken `string`

### IdempotentParameterMismatch
* IdempotentParameterMismatch `object`: Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token. 
  * Message [String](#string)

### InstanceAggregatedAssociationOverview
* InstanceAggregatedAssociationOverview `object`: Status information about the aggregated associations.
  * DetailedStatus [StatusName](#statusname)
  * InstanceAssociationStatusAggregatedCount [InstanceAssociationStatusAggregatedCount](#instanceassociationstatusaggregatedcount)

### InstanceAssociation
* InstanceAssociation `object`: One or more association documents on the instance. 
  * AssociationId [AssociationId](#associationid)
  * AssociationVersion [AssociationVersion](#associationversion)
  * Content [DocumentContent](#documentcontent)
  * InstanceId [InstanceId](#instanceid)

### InstanceAssociationExecutionSummary
* InstanceAssociationExecutionSummary `string`

### InstanceAssociationList
* InstanceAssociationList `array`
  * items [InstanceAssociation](#instanceassociation)

### InstanceAssociationOutputLocation
* InstanceAssociationOutputLocation `object`: An Amazon S3 bucket where you want to store the results of this request.
  * S3Location [S3OutputLocation](#s3outputlocation)

### InstanceAssociationOutputUrl
* InstanceAssociationOutputUrl `object`: The URL of Amazon S3 bucket where you want to store the results of this request.
  * S3OutputUrl [S3OutputUrl](#s3outputurl)

### InstanceAssociationStatusAggregatedCount
* InstanceAssociationStatusAggregatedCount `array`
  * items `object`
    * key [StatusName](#statusname)
    * value [InstanceCount](#instancecount)

### InstanceAssociationStatusInfo
* InstanceAssociationStatusInfo `object`: Status information about the instance association.
  * AssociationId [AssociationId](#associationid)
  * AssociationName [AssociationName](#associationname)
  * AssociationVersion [AssociationVersion](#associationversion)
  * DetailedStatus [StatusName](#statusname)
  * DocumentVersion [DocumentVersion](#documentversion)
  * ErrorCode [AgentErrorCode](#agenterrorcode)
  * ExecutionDate [DateTime](#datetime)
  * ExecutionSummary [InstanceAssociationExecutionSummary](#instanceassociationexecutionsummary)
  * InstanceId [InstanceId](#instanceid)
  * Name [DocumentName](#documentname)
  * OutputUrl [InstanceAssociationOutputUrl](#instanceassociationoutputurl)
  * Status [StatusName](#statusname)

### InstanceAssociationStatusInfos
* InstanceAssociationStatusInfos `array`
  * items [InstanceAssociationStatusInfo](#instanceassociationstatusinfo)

### InstanceCount
* InstanceCount `integer`

### InstanceId
* InstanceId `string`

### InstanceIdList
* InstanceIdList `array`
  * items [InstanceId](#instanceid)

### InstanceInformation
* InstanceInformation `object`: Describes a filter for a specific list of instances. 
  * ActivationId [ActivationId](#activationid)
  * AgentVersion [Version](#version)
  * AssociationOverview [InstanceAggregatedAssociationOverview](#instanceaggregatedassociationoverview)
  * AssociationStatus [StatusName](#statusname)
  * ComputerName [ComputerName](#computername)
  * IPAddress [IPAddress](#ipaddress)
  * IamRole [IamRole](#iamrole)
  * InstanceId [InstanceId](#instanceid)
  * IsLatestVersion [Boolean](#boolean)
  * LastAssociationExecutionDate [DateTime](#datetime)
  * LastPingDateTime [DateTime](#datetime)
  * LastSuccessfulAssociationExecutionDate [DateTime](#datetime)
  * Name [String](#string)
  * PingStatus [PingStatus](#pingstatus)
  * PlatformName [String](#string)
  * PlatformType [PlatformType](#platformtype)
  * PlatformVersion [String](#string)
  * RegistrationDate [DateTime](#datetime)
  * ResourceType [ResourceType](#resourcetype)

### InstanceInformationFilter
* InstanceInformationFilter `object`: Describes a filter for a specific list of instances. 
  * key **required** [InstanceInformationFilterKey](#instanceinformationfilterkey)
  * valueSet **required** [InstanceInformationFilterValueSet](#instanceinformationfiltervalueset)

### InstanceInformationFilterKey
* InstanceInformationFilterKey `string` (values: InstanceIds, AgentVersion, PingStatus, PlatformTypes, ActivationIds, IamRole, ResourceType, AssociationStatus)

### InstanceInformationFilterList
* InstanceInformationFilterList `array`
  * items [InstanceInformationFilter](#instanceinformationfilter)

### InstanceInformationFilterValue
* InstanceInformationFilterValue `string`

### InstanceInformationFilterValueSet
* InstanceInformationFilterValueSet `array`
  * items [InstanceInformationFilterValue](#instanceinformationfiltervalue)

### InstanceInformationList
* InstanceInformationList `array`
  * items [InstanceInformation](#instanceinformation)

### InstanceInformationStringFilter
* InstanceInformationStringFilter `object`: The filters to describe or get information about your managed instances.
  * Key **required** [InstanceInformationStringFilterKey](#instanceinformationstringfilterkey)
  * Values **required** [InstanceInformationFilterValueSet](#instanceinformationfiltervalueset)

### InstanceInformationStringFilterKey
* InstanceInformationStringFilterKey `string`

### InstanceInformationStringFilterList
* InstanceInformationStringFilterList `array`
  * items [InstanceInformationStringFilter](#instanceinformationstringfilter)

### InstancePatchState
* InstancePatchState `object`: Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.
  * BaselineId **required** [BaselineId](#baselineid)
  * FailedCount [PatchFailedCount](#patchfailedcount)
  * InstalledCount [PatchInstalledCount](#patchinstalledcount)
  * InstalledOtherCount [PatchInstalledOtherCount](#patchinstalledothercount)
  * InstanceId **required** [InstanceId](#instanceid)
  * MissingCount [PatchMissingCount](#patchmissingcount)
  * NotApplicableCount [PatchNotApplicableCount](#patchnotapplicablecount)
  * Operation **required** [PatchOperationType](#patchoperationtype)
  * OperationEndTime **required** [DateTime](#datetime)
  * OperationStartTime **required** [DateTime](#datetime)
  * OwnerInformation [OwnerInformation](#ownerinformation)
  * PatchGroup **required** [PatchGroup](#patchgroup)
  * SnapshotId [SnapshotId](#snapshotid)

### InstancePatchStateFilter
* InstancePatchStateFilter `object`: Defines a filter used in DescribeInstancePatchStatesForPatchGroup used to scope down the information returned by the API.
  * Key **required** [InstancePatchStateFilterKey](#instancepatchstatefilterkey)
  * Type **required** [InstancePatchStateOperatorType](#instancepatchstateoperatortype)
  * Values **required** [InstancePatchStateFilterValues](#instancepatchstatefiltervalues)

### InstancePatchStateFilterKey
* InstancePatchStateFilterKey `string`

### InstancePatchStateFilterList
* InstancePatchStateFilterList `array`
  * items [InstancePatchStateFilter](#instancepatchstatefilter)

### InstancePatchStateFilterValue
* InstancePatchStateFilterValue `string`

### InstancePatchStateFilterValues
* InstancePatchStateFilterValues `array`
  * items [InstancePatchStateFilterValue](#instancepatchstatefiltervalue)

### InstancePatchStateList
* InstancePatchStateList `array`
  * items [InstancePatchState](#instancepatchstate)

### InstancePatchStateOperatorType
* InstancePatchStateOperatorType `string` (values: Equal, NotEqual, LessThan, GreaterThan)

### InstancePatchStatesList
* InstancePatchStatesList `array`
  * items [InstancePatchState](#instancepatchstate)

### InstanceTagName
* InstanceTagName `string`

### Integer
* Integer `integer`

### InternalServerError
* InternalServerError `object`: An error occurred on the server side.
  * Message [String](#string)

### InvalidActivation
* InvalidActivation `object`: The activation is not valid. The activation might have been deleted, or the ActivationId and the ActivationCode do not match.
  * Message [String](#string)

### InvalidActivationId
* InvalidActivationId `object`: The activation ID is not valid. Verify the you entered the correct ActivationId or ActivationCode and try again.
  * Message [String](#string)

### InvalidAllowedPatternException
* InvalidAllowedPatternException `object`: The request does not meet the regular expression requirement.
  * message [String](#string)

### InvalidAssociationVersion
* InvalidAssociationVersion `object`: The version you specified is not valid. Use ListAssociationVersions to view all versions of an association according to the association ID. Or, use the <code>$LATEST</code> parameter to view the latest version of the association.
  * Message [String](#string)

### InvalidAutomationExecutionParametersException
* InvalidAutomationExecutionParametersException `object`: The supplied parameters for invoking the specified Automation document are incorrect. For example, they may not match the set of parameters permitted for the specified Automation document.
  * Message [String](#string)

### InvalidAutomationSignalException
* InvalidAutomationSignalException `object`: The signal is not valid for the current Automation execution.
  * Message [String](#string)

### InvalidAutomationStatusUpdateException
* InvalidAutomationStatusUpdateException `object`: The specified update status operation is not valid.
  * Message [String](#string)

### InvalidCommandId
* InvalidCommandId `object`

### InvalidDeleteInventoryParametersException
* InvalidDeleteInventoryParametersException `object`: One or more of the parameters specified for the delete operation is not valid. Verify all parameters and try again.
  * Message [String](#string)

### InvalidDeletionIdException
* InvalidDeletionIdException `object`: The ID specified for the delete operation does not exist or is not valide. Verify the ID and try again.
  * Message [String](#string)

### InvalidDocument
* InvalidDocument `object`: The specified document does not exist.
  * Message [String](#string)

### InvalidDocumentContent
* InvalidDocumentContent `object`: The content for the document is not valid.
  * Message [String](#string)

### InvalidDocumentOperation
* InvalidDocumentOperation `object`: You attempted to delete a document while it is still shared. You must stop sharing the document before you can delete it.
  * Message [String](#string)

### InvalidDocumentSchemaVersion
* InvalidDocumentSchemaVersion `object`: The version of the document schema is not supported.
  * Message [String](#string)

### InvalidDocumentVersion
* InvalidDocumentVersion `object`: The document version is not valid or does not exist.
  * Message [String](#string)

### InvalidFilter
* InvalidFilter `object`: The filter name is not valid. Verify the you entered the correct name and try again.
  * Message [String](#string)

### InvalidFilterKey
* InvalidFilterKey `object`: The specified key is not valid.

### InvalidFilterOption
* InvalidFilterOption `object`: The specified filter option is not valid. Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.
  * message [String](#string)

### InvalidFilterValue
* InvalidFilterValue `object`: The filter value is not valid. Verify the value and try again.
  * Message [String](#string)

### InvalidInstanceId
* InvalidInstanceId `object`: <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>The SSM Agent is not running. On managed instances and Linux instances, verify that the SSM Agent is running. On EC2 Windows instances, verify that the EC2Config service is running.</p> <p>The SSM Agent or EC2Config service is not registered to the SSM endpoint. Try reinstalling the SSM Agent or EC2Config service.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
  * Message [String](#string)

### InvalidInstanceInformationFilterValue
* InvalidInstanceInformationFilterValue `object`: The specified filter value is not valid.
  * message [String](#string)

### InvalidInventoryItemContextException
* InvalidInventoryItemContextException `object`: You specified invalid keys or values in the <code>Context</code> attribute for <code>InventoryItem</code>. Verify the keys and values, and try again.
  * Message [String](#string)

### InvalidInventoryRequestException
* InvalidInventoryRequestException `object`: The request is not valid.
  * Message [String](#string)

### InvalidItemContentException
* InvalidItemContentException `object`: One or more content items is not valid.
  * Message [String](#string)
  * TypeName [InventoryItemTypeName](#inventoryitemtypename)

### InvalidKeyId
* InvalidKeyId `object`: The query key ID is not valid.
  * message [String](#string)

### InvalidNextToken
* InvalidNextToken `object`: The specified token is not valid.
  * Message [String](#string)

### InvalidNotificationConfig
* InvalidNotificationConfig `object`: One or more configuration items is not valid. Verify that a valid Amazon Resource Name (ARN) was provided for an Amazon SNS topic.
  * Message [String](#string)

### InvalidOptionException
* InvalidOptionException `object`: The delete inventory option specified is not valid. Verify the option and try again.
  * Message [String](#string)

### InvalidOutputFolder
* InvalidOutputFolder `object`: The S3 bucket does not exist.

### InvalidOutputLocation
* InvalidOutputLocation `object`: The output location is not valid or does not exist.

### InvalidParameters
* InvalidParameters `object`: You must specify values for all required parameters in the Systems Manager document. You can only supply values to parameters defined in the Systems Manager document.
  * Message [String](#string)

### InvalidPermissionType
* InvalidPermissionType `object`: The permission type is not supported. <i>Share</i> is the only supported permission type.
  * Message [String](#string)

### InvalidPluginName
* InvalidPluginName `object`: The plugin name is not valid.

### InvalidResourceId
* InvalidResourceId `object`: The resource ID is not valid. Verify that you entered the correct ID and try again.

### InvalidResourceType
* InvalidResourceType `object`: The resource type is not valid. For example, if you are attempting to tag an instance, the instance must be a registered, managed instance.

### InvalidResultAttributeException
* InvalidResultAttributeException `object`: The specified inventory item result attribute is not valid.
  * Message [String](#string)

### InvalidRole
* InvalidRole `object`: The role name can't contain invalid characters. Also verify that you specified an IAM role for notifications that includes the required trust policy. For information about configuring the IAM role for Run Command notifications, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/rc-sns-notifications.html">Configuring Amazon SNS Notifications for Run Command</a> in the <i>AWS Systems Manager User Guide</i>.
  * Message [String](#string)

### InvalidSchedule
* InvalidSchedule `object`: The schedule is invalid. Verify your cron or rate expression and try again.
  * Message [String](#string)

### InvalidTarget
* InvalidTarget `object`: The target is not valid or does not exist. It might not be configured for EC2 Systems Manager or you might not have permission to perform the operation.
  * Message [String](#string)

### InvalidTypeNameException
* InvalidTypeNameException `object`: The parameter type name is not valid.
  * Message [String](#string)

### InvalidUpdate
* InvalidUpdate `object`: The update is not valid.
  * Message [String](#string)

### InventoryAggregator
* InventoryAggregator `object`: Specifies the inventory type and attribute for the aggregation execution.
  * Aggregators [InventoryAggregatorList](#inventoryaggregatorlist)
  * Expression [InventoryAggregatorExpression](#inventoryaggregatorexpression)

### InventoryAggregatorExpression
* InventoryAggregatorExpression `string`

### InventoryAggregatorList
* InventoryAggregatorList `array`
  * items [InventoryAggregator](#inventoryaggregator)

### InventoryAttributeDataType
* InventoryAttributeDataType `string` (values: string, number)

### InventoryDeletionId
* InventoryDeletionId `string`

### InventoryDeletionLastStatusMessage
* InventoryDeletionLastStatusMessage `string`

### InventoryDeletionLastStatusUpdateTime
* InventoryDeletionLastStatusUpdateTime `string`

### InventoryDeletionStartTime
* InventoryDeletionStartTime `string`

### InventoryDeletionStatus
* InventoryDeletionStatus `string` (values: InProgress, Complete)

### InventoryDeletionStatusItem
* InventoryDeletionStatusItem `object`: Status information returned by the <code>DeleteInventory</code> action.
  * DeletionId [InventoryDeletionId](#inventorydeletionid)
  * DeletionStartTime [InventoryDeletionStartTime](#inventorydeletionstarttime)
  * DeletionSummary [InventoryDeletionSummary](#inventorydeletionsummary)
  * LastStatus [InventoryDeletionStatus](#inventorydeletionstatus)
  * LastStatusMessage [InventoryDeletionLastStatusMessage](#inventorydeletionlaststatusmessage)
  * LastStatusUpdateTime [InventoryDeletionLastStatusUpdateTime](#inventorydeletionlaststatusupdatetime)
  * TypeName [InventoryItemTypeName](#inventoryitemtypename)

### InventoryDeletionSummary
* InventoryDeletionSummary `object`: Information about the delete operation.
  * RemainingCount [RemainingCount](#remainingcount)
  * SummaryItems [InventoryDeletionSummaryItems](#inventorydeletionsummaryitems)
  * TotalCount [TotalCount](#totalcount)

### InventoryDeletionSummaryItem
* InventoryDeletionSummaryItem `object`: Either a count, remaining count, or a version number in a delete inventory summary.
  * Count [ResourceCount](#resourcecount)
  * RemainingCount [RemainingCount](#remainingcount)
  * Version [InventoryItemSchemaVersion](#inventoryitemschemaversion)

### InventoryDeletionSummaryItems
* InventoryDeletionSummaryItems `array`
  * items [InventoryDeletionSummaryItem](#inventorydeletionsummaryitem)

### InventoryDeletionsList
* InventoryDeletionsList `array`
  * items [InventoryDeletionStatusItem](#inventorydeletionstatusitem)

### InventoryFilter
* InventoryFilter `object`: One or more filters. Use a filter to return a more specific list of results.
  * Key **required** [InventoryFilterKey](#inventoryfilterkey)
  * Type [InventoryQueryOperatorType](#inventoryqueryoperatortype)
  * Values **required** [InventoryFilterValueList](#inventoryfiltervaluelist)

### InventoryFilterKey
* InventoryFilterKey `string`

### InventoryFilterList
* InventoryFilterList `array`
  * items [InventoryFilter](#inventoryfilter)

### InventoryFilterValue
* InventoryFilterValue `string`

### InventoryFilterValueList
* InventoryFilterValueList `array`
  * items [InventoryFilterValue](#inventoryfiltervalue)

### InventoryItem
* InventoryItem `object`: Information collected from managed instances based on your inventory policy document
  * CaptureTime **required** [InventoryItemCaptureTime](#inventoryitemcapturetime)
  * Content [InventoryItemEntryList](#inventoryitementrylist)
  * ContentHash [InventoryItemContentHash](#inventoryitemcontenthash)
  * Context [InventoryItemContentContext](#inventoryitemcontentcontext)
  * SchemaVersion **required** [InventoryItemSchemaVersion](#inventoryitemschemaversion)
  * TypeName **required** [InventoryItemTypeName](#inventoryitemtypename)

### InventoryItemAttribute
* InventoryItemAttribute `object`: Attributes are the entries within the inventory item content. It contains name and value.
  * DataType **required** [InventoryAttributeDataType](#inventoryattributedatatype)
  * Name **required** [InventoryItemAttributeName](#inventoryitemattributename)

### InventoryItemAttributeList
* InventoryItemAttributeList `array`
  * items [InventoryItemAttribute](#inventoryitemattribute)

### InventoryItemAttributeName
* InventoryItemAttributeName `string`

### InventoryItemCaptureTime
* InventoryItemCaptureTime `string`

### InventoryItemContentContext
* InventoryItemContentContext `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### InventoryItemContentHash
* InventoryItemContentHash `string`

### InventoryItemEntry
* InventoryItemEntry `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### InventoryItemEntryList
* InventoryItemEntryList `array`
  * items [InventoryItemEntry](#inventoryitementry)

### InventoryItemList
* InventoryItemList `array`
  * items [InventoryItem](#inventoryitem)

### InventoryItemSchema
* InventoryItemSchema `object`: The inventory item schema definition. Users can use this to compose inventory query filters.
  * Attributes **required** [InventoryItemAttributeList](#inventoryitemattributelist)
  * DisplayName [InventoryTypeDisplayName](#inventorytypedisplayname)
  * TypeName **required** [InventoryItemTypeName](#inventoryitemtypename)
  * Version [InventoryItemSchemaVersion](#inventoryitemschemaversion)

### InventoryItemSchemaResultList
* InventoryItemSchemaResultList `array`
  * items [InventoryItemSchema](#inventoryitemschema)

### InventoryItemSchemaVersion
* InventoryItemSchemaVersion `string`

### InventoryItemTypeName
* InventoryItemTypeName `string`

### InventoryItemTypeNameFilter
* InventoryItemTypeNameFilter `string`

### InventoryQueryOperatorType
* InventoryQueryOperatorType `string` (values: Equal, NotEqual, BeginWith, LessThan, GreaterThan)

### InventoryResultEntity
* InventoryResultEntity `object`: Inventory query results.
  * Data [InventoryResultItemMap](#inventoryresultitemmap)
  * Id [InventoryResultEntityId](#inventoryresultentityid)

### InventoryResultEntityId
* InventoryResultEntityId `string`

### InventoryResultEntityList
* InventoryResultEntityList `array`
  * items [InventoryResultEntity](#inventoryresultentity)

### InventoryResultItem
* InventoryResultItem `object`: The inventory result item.
  * CaptureTime [InventoryItemCaptureTime](#inventoryitemcapturetime)
  * Content **required** [InventoryItemEntryList](#inventoryitementrylist)
  * ContentHash [InventoryItemContentHash](#inventoryitemcontenthash)
  * SchemaVersion **required** [InventoryItemSchemaVersion](#inventoryitemschemaversion)
  * TypeName **required** [InventoryItemTypeName](#inventoryitemtypename)

### InventoryResultItemKey
* InventoryResultItemKey `string`

### InventoryResultItemMap
* InventoryResultItemMap `array`
  * items `object`
    * key [InventoryResultItemKey](#inventoryresultitemkey)
    * value [InventoryResultItem](#inventoryresultitem)

### InventorySchemaDeleteOption
* InventorySchemaDeleteOption `string` (values: DisableSchema, DeleteSchema)

### InventoryTypeDisplayName
* InventoryTypeDisplayName `string`

### InvocationDoesNotExist
* InvocationDoesNotExist `object`: The command ID and instance ID you specified did not match any invocations. Verify the command ID adn the instance ID and try again. 

### InvocationTraceOutput
* InvocationTraceOutput `string`

### IsSubTypeSchema
* IsSubTypeSchema `boolean`

### ItemContentMismatchException
* ItemContentMismatchException `object`: The inventory item has invalid content. 
  * Message [String](#string)
  * TypeName [InventoryItemTypeName](#inventoryitemtypename)

### ItemSizeLimitExceededException
* ItemSizeLimitExceededException `object`: The inventory item size has exceeded the size limit.
  * Message [String](#string)
  * TypeName [InventoryItemTypeName](#inventoryitemtypename)

### KeyList
* KeyList `array`
  * items [TagKey](#tagkey)

### LastResourceDataSyncMessage
* LastResourceDataSyncMessage `string`

### LastResourceDataSyncStatus
* LastResourceDataSyncStatus `string` (values: Successful, Failed, InProgress)

### LastResourceDataSyncTime
* LastResourceDataSyncTime `string`

### LastSuccessfulResourceDataSyncTime
* LastSuccessfulResourceDataSyncTime `string`

### ListAssociationVersionsRequest
* ListAssociationVersionsRequest `object`
  * AssociationId **required** [AssociationId](#associationid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListAssociationVersionsResult
* ListAssociationVersionsResult `object`
  * AssociationVersions [AssociationVersionList](#associationversionlist)
  * NextToken [NextToken](#nexttoken)

### ListAssociationsRequest
* ListAssociationsRequest `object`
  * AssociationFilterList [AssociationFilterList](#associationfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListAssociationsResult
* ListAssociationsResult `object`
  * Associations [AssociationList](#associationlist)
  * NextToken [NextToken](#nexttoken)

### ListCommandInvocationsRequest
* ListCommandInvocationsRequest `object`
  * CommandId [CommandId](#commandid)
  * Details [Boolean](#boolean)
  * Filters [CommandFilterList](#commandfilterlist)
  * InstanceId [InstanceId](#instanceid)
  * MaxResults [CommandMaxResults](#commandmaxresults)
  * NextToken [NextToken](#nexttoken)

### ListCommandInvocationsResult
* ListCommandInvocationsResult `object`
  * CommandInvocations [CommandInvocationList](#commandinvocationlist)
  * NextToken [NextToken](#nexttoken)

### ListCommandsRequest
* ListCommandsRequest `object`
  * CommandId [CommandId](#commandid)
  * Filters [CommandFilterList](#commandfilterlist)
  * InstanceId [InstanceId](#instanceid)
  * MaxResults [CommandMaxResults](#commandmaxresults)
  * NextToken [NextToken](#nexttoken)

### ListCommandsResult
* ListCommandsResult `object`
  * Commands [CommandList](#commandlist)
  * NextToken [NextToken](#nexttoken)

### ListComplianceItemsRequest
* ListComplianceItemsRequest `object`
  * Filters [ComplianceStringFilterList](#compliancestringfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceIds [ComplianceResourceIdList](#complianceresourceidlist)
  * ResourceTypes [ComplianceResourceTypeList](#complianceresourcetypelist)

### ListComplianceItemsResult
* ListComplianceItemsResult `object`
  * ComplianceItems [ComplianceItemList](#complianceitemlist)
  * NextToken [NextToken](#nexttoken)

### ListComplianceSummariesRequest
* ListComplianceSummariesRequest `object`
  * Filters [ComplianceStringFilterList](#compliancestringfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListComplianceSummariesResult
* ListComplianceSummariesResult `object`
  * ComplianceSummaryItems [ComplianceSummaryItemList](#compliancesummaryitemlist)
  * NextToken [NextToken](#nexttoken)

### ListDocumentVersionsRequest
* ListDocumentVersionsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * Name **required** [DocumentName](#documentname)
  * NextToken [NextToken](#nexttoken)

### ListDocumentVersionsResult
* ListDocumentVersionsResult `object`
  * DocumentVersions [DocumentVersionList](#documentversionlist)
  * NextToken [NextToken](#nexttoken)

### ListDocumentsRequest
* ListDocumentsRequest `object`
  * DocumentFilterList [DocumentFilterList](#documentfilterlist)
  * Filters [DocumentKeyValuesFilterList](#documentkeyvaluesfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListDocumentsResult
* ListDocumentsResult `object`
  * DocumentIdentifiers [DocumentIdentifierList](#documentidentifierlist)
  * NextToken [NextToken](#nexttoken)

### ListInventoryEntriesRequest
* ListInventoryEntriesRequest `object`
  * Filters [InventoryFilterList](#inventoryfilterlist)
  * InstanceId **required** [InstanceId](#instanceid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * TypeName **required** [InventoryItemTypeName](#inventoryitemtypename)

### ListInventoryEntriesResult
* ListInventoryEntriesResult `object`
  * CaptureTime [InventoryItemCaptureTime](#inventoryitemcapturetime)
  * Entries [InventoryItemEntryList](#inventoryitementrylist)
  * InstanceId [InstanceId](#instanceid)
  * NextToken [NextToken](#nexttoken)
  * SchemaVersion [InventoryItemSchemaVersion](#inventoryitemschemaversion)
  * TypeName [InventoryItemTypeName](#inventoryitemtypename)

### ListResourceComplianceSummariesRequest
* ListResourceComplianceSummariesRequest `object`
  * Filters [ComplianceStringFilterList](#compliancestringfilterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListResourceComplianceSummariesResult
* ListResourceComplianceSummariesResult `object`
  * NextToken [NextToken](#nexttoken)
  * ResourceComplianceSummaryItems [ResourceComplianceSummaryItemList](#resourcecompliancesummaryitemlist)

### ListResourceDataSyncRequest
* ListResourceDataSyncRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListResourceDataSyncResult
* ListResourceDataSyncResult `object`
  * NextToken [NextToken](#nexttoken)
  * ResourceDataSyncItems [ResourceDataSyncItemList](#resourcedatasyncitemlist)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * ResourceType **required** [ResourceTypeForTagging](#resourcetypefortagging)

### ListTagsForResourceResult
* ListTagsForResourceResult `object`
  * TagList [TagList](#taglist)

### LoggingInfo
* LoggingInfo `object`: <p>Information about an Amazon S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
  * S3BucketName **required** [S3BucketName](#s3bucketname)
  * S3KeyPrefix [S3KeyPrefix](#s3keyprefix)
  * S3Region **required** [S3Region](#s3region)

### Long
* Long `integer`

### MaintenanceWindowAllowUnassociatedTargets
* MaintenanceWindowAllowUnassociatedTargets `boolean`

### MaintenanceWindowAutomationParameters
* MaintenanceWindowAutomationParameters `object`: The parameters for an AUTOMATION task type.
  * DocumentVersion [DocumentVersion](#documentversion)
  * Parameters [AutomationParameterMap](#automationparametermap)

### MaintenanceWindowCutoff
* MaintenanceWindowCutoff `integer`

### MaintenanceWindowDescription
* MaintenanceWindowDescription `string`

### MaintenanceWindowDurationHours
* MaintenanceWindowDurationHours `integer`

### MaintenanceWindowEnabled
* MaintenanceWindowEnabled `boolean`

### MaintenanceWindowExecution
* MaintenanceWindowExecution `object`: Describes the information about an execution of a Maintenance Window. 
  * EndTime [DateTime](#datetime)
  * StartTime [DateTime](#datetime)
  * Status [MaintenanceWindowExecutionStatus](#maintenancewindowexecutionstatus)
  * StatusDetails [MaintenanceWindowExecutionStatusDetails](#maintenancewindowexecutionstatusdetails)
  * WindowExecutionId [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)
  * WindowId [MaintenanceWindowId](#maintenancewindowid)

### MaintenanceWindowExecutionId
* MaintenanceWindowExecutionId `string`

### MaintenanceWindowExecutionList
* MaintenanceWindowExecutionList `array`
  * items [MaintenanceWindowExecution](#maintenancewindowexecution)

### MaintenanceWindowExecutionStatus
* MaintenanceWindowExecutionStatus `string` (values: PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, CANCELLED, SKIPPED_OVERLAPPING)

### MaintenanceWindowExecutionStatusDetails
* MaintenanceWindowExecutionStatusDetails `string`

### MaintenanceWindowExecutionTaskExecutionId
* MaintenanceWindowExecutionTaskExecutionId `string`

### MaintenanceWindowExecutionTaskId
* MaintenanceWindowExecutionTaskId `string`

### MaintenanceWindowExecutionTaskIdList
* MaintenanceWindowExecutionTaskIdList `array`
  * items [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)

### MaintenanceWindowExecutionTaskIdentity
* MaintenanceWindowExecutionTaskIdentity `object`: Information about a task execution performed as part of a Maintenance Window execution.
  * EndTime [DateTime](#datetime)
  * StartTime [DateTime](#datetime)
  * Status [MaintenanceWindowExecutionStatus](#maintenancewindowexecutionstatus)
  * StatusDetails [MaintenanceWindowExecutionStatusDetails](#maintenancewindowexecutionstatusdetails)
  * TaskArn [MaintenanceWindowTaskArn](#maintenancewindowtaskarn)
  * TaskExecutionId [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * TaskType [MaintenanceWindowTaskType](#maintenancewindowtasktype)
  * WindowExecutionId [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)

### MaintenanceWindowExecutionTaskIdentityList
* MaintenanceWindowExecutionTaskIdentityList `array`
  * items [MaintenanceWindowExecutionTaskIdentity](#maintenancewindowexecutiontaskidentity)

### MaintenanceWindowExecutionTaskInvocationId
* MaintenanceWindowExecutionTaskInvocationId `string`

### MaintenanceWindowExecutionTaskInvocationIdentity
* MaintenanceWindowExecutionTaskInvocationIdentity `object`: Describes the information about a task invocation for a particular target as part of a task execution performed as part of a Maintenance Window execution.
  * EndTime [DateTime](#datetime)
  * ExecutionId [MaintenanceWindowExecutionTaskExecutionId](#maintenancewindowexecutiontaskexecutionid)
  * InvocationId [MaintenanceWindowExecutionTaskInvocationId](#maintenancewindowexecutiontaskinvocationid)
  * OwnerInformation [OwnerInformation](#ownerinformation)
  * Parameters [MaintenanceWindowExecutionTaskInvocationParameters](#maintenancewindowexecutiontaskinvocationparameters)
  * StartTime [DateTime](#datetime)
  * Status [MaintenanceWindowExecutionStatus](#maintenancewindowexecutionstatus)
  * StatusDetails [MaintenanceWindowExecutionStatusDetails](#maintenancewindowexecutionstatusdetails)
  * TaskExecutionId [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * TaskType [MaintenanceWindowTaskType](#maintenancewindowtasktype)
  * WindowExecutionId [MaintenanceWindowExecutionId](#maintenancewindowexecutionid)
  * WindowTargetId [MaintenanceWindowTaskTargetId](#maintenancewindowtasktargetid)

### MaintenanceWindowExecutionTaskInvocationIdentityList
* MaintenanceWindowExecutionTaskInvocationIdentityList `array`
  * items [MaintenanceWindowExecutionTaskInvocationIdentity](#maintenancewindowexecutiontaskinvocationidentity)

### MaintenanceWindowExecutionTaskInvocationParameters
* MaintenanceWindowExecutionTaskInvocationParameters `string`

### MaintenanceWindowFilter
* MaintenanceWindowFilter `object`: Filter used in the request.
  * Key [MaintenanceWindowFilterKey](#maintenancewindowfilterkey)
  * Values [MaintenanceWindowFilterValues](#maintenancewindowfiltervalues)

### MaintenanceWindowFilterKey
* MaintenanceWindowFilterKey `string`

### MaintenanceWindowFilterList
* MaintenanceWindowFilterList `array`
  * items [MaintenanceWindowFilter](#maintenancewindowfilter)

### MaintenanceWindowFilterValue
* MaintenanceWindowFilterValue `string`

### MaintenanceWindowFilterValues
* MaintenanceWindowFilterValues `array`
  * items [MaintenanceWindowFilterValue](#maintenancewindowfiltervalue)

### MaintenanceWindowId
* MaintenanceWindowId `string`

### MaintenanceWindowIdentity
* MaintenanceWindowIdentity `object`: Information about the Maintenance Window.
  * Cutoff [MaintenanceWindowCutoff](#maintenancewindowcutoff)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Duration [MaintenanceWindowDurationHours](#maintenancewindowdurationhours)
  * Enabled [MaintenanceWindowEnabled](#maintenancewindowenabled)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * WindowId [MaintenanceWindowId](#maintenancewindowid)

### MaintenanceWindowIdentityList
* MaintenanceWindowIdentityList `array`
  * items [MaintenanceWindowIdentity](#maintenancewindowidentity)

### MaintenanceWindowLambdaClientContext
* MaintenanceWindowLambdaClientContext `string`

### MaintenanceWindowLambdaParameters
* MaintenanceWindowLambdaParameters `object`: <p>The parameters for a LAMBDA task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note>
  * ClientContext [MaintenanceWindowLambdaClientContext](#maintenancewindowlambdaclientcontext)
  * Payload [MaintenanceWindowLambdaPayload](#maintenancewindowlambdapayload)
  * Qualifier [MaintenanceWindowLambdaQualifier](#maintenancewindowlambdaqualifier)

### MaintenanceWindowLambdaPayload
* MaintenanceWindowLambdaPayload `string`

### MaintenanceWindowLambdaQualifier
* MaintenanceWindowLambdaQualifier `string`

### MaintenanceWindowMaxResults
* MaintenanceWindowMaxResults `integer`

### MaintenanceWindowName
* MaintenanceWindowName `string`

### MaintenanceWindowResourceType
* MaintenanceWindowResourceType `string` (values: INSTANCE)

### MaintenanceWindowRunCommandParameters
* MaintenanceWindowRunCommandParameters `object`: <p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note>
  * Comment [Comment](#comment)
  * DocumentHash [DocumentHash](#documenthash)
  * DocumentHashType [DocumentHashType](#documenthashtype)
  * NotificationConfig [NotificationConfig](#notificationconfig)
  * OutputS3BucketName [S3BucketName](#s3bucketname)
  * OutputS3KeyPrefix [S3KeyPrefix](#s3keyprefix)
  * Parameters [Parameters](#parameters)
  * ServiceRoleArn [ServiceRole](#servicerole)
  * TimeoutSeconds [TimeoutSeconds](#timeoutseconds)

### MaintenanceWindowSchedule
* MaintenanceWindowSchedule `string`

### MaintenanceWindowStepFunctionsInput
* MaintenanceWindowStepFunctionsInput `string`

### MaintenanceWindowStepFunctionsName
* MaintenanceWindowStepFunctionsName `string`

### MaintenanceWindowStepFunctionsParameters
* MaintenanceWindowStepFunctionsParameters `object`: <p>The parameters for a STEP_FUNCTION task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note>
  * Input [MaintenanceWindowStepFunctionsInput](#maintenancewindowstepfunctionsinput)
  * Name [MaintenanceWindowStepFunctionsName](#maintenancewindowstepfunctionsname)

### MaintenanceWindowTarget
* MaintenanceWindowTarget `object`: The target registered with the Maintenance Window.
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * OwnerInformation [OwnerInformation](#ownerinformation)
  * ResourceType [MaintenanceWindowResourceType](#maintenancewindowresourcetype)
  * Targets [Targets](#targets)
  * WindowId [MaintenanceWindowId](#maintenancewindowid)
  * WindowTargetId [MaintenanceWindowTargetId](#maintenancewindowtargetid)

### MaintenanceWindowTargetId
* MaintenanceWindowTargetId `string`

### MaintenanceWindowTargetList
* MaintenanceWindowTargetList `array`
  * items [MaintenanceWindowTarget](#maintenancewindowtarget)

### MaintenanceWindowTask
* MaintenanceWindowTask `object`: Information about a task defined for a Maintenance Window.
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * LoggingInfo [LoggingInfo](#logginginfo)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Priority [MaintenanceWindowTaskPriority](#maintenancewindowtaskpriority)
  * ServiceRoleArn [ServiceRole](#servicerole)
  * Targets [Targets](#targets)
  * TaskArn [MaintenanceWindowTaskArn](#maintenancewindowtaskarn)
  * TaskParameters [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)
  * Type [MaintenanceWindowTaskType](#maintenancewindowtasktype)
  * WindowId [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId [MaintenanceWindowTaskId](#maintenancewindowtaskid)

### MaintenanceWindowTaskArn
* MaintenanceWindowTaskArn `string`

### MaintenanceWindowTaskId
* MaintenanceWindowTaskId `string`

### MaintenanceWindowTaskInvocationParameters
* MaintenanceWindowTaskInvocationParameters `object`: The parameters for task execution.
  * Automation [MaintenanceWindowAutomationParameters](#maintenancewindowautomationparameters)
  * Lambda [MaintenanceWindowLambdaParameters](#maintenancewindowlambdaparameters)
  * RunCommand [MaintenanceWindowRunCommandParameters](#maintenancewindowruncommandparameters)
  * StepFunctions [MaintenanceWindowStepFunctionsParameters](#maintenancewindowstepfunctionsparameters)

### MaintenanceWindowTaskList
* MaintenanceWindowTaskList `array`
  * items [MaintenanceWindowTask](#maintenancewindowtask)

### MaintenanceWindowTaskParameterName
* MaintenanceWindowTaskParameterName `string`

### MaintenanceWindowTaskParameterValue
* MaintenanceWindowTaskParameterValue `string`

### MaintenanceWindowTaskParameterValueExpression
* MaintenanceWindowTaskParameterValueExpression `object`: Defines the values for a task parameter.
  * Values [MaintenanceWindowTaskParameterValueList](#maintenancewindowtaskparametervaluelist)

### MaintenanceWindowTaskParameterValueList
* MaintenanceWindowTaskParameterValueList `array`
  * items [MaintenanceWindowTaskParameterValue](#maintenancewindowtaskparametervalue)

### MaintenanceWindowTaskParameters
* MaintenanceWindowTaskParameters `array`
  * items `object`
    * key [MaintenanceWindowTaskParameterName](#maintenancewindowtaskparametername)
    * value [MaintenanceWindowTaskParameterValueExpression](#maintenancewindowtaskparametervalueexpression)

### MaintenanceWindowTaskParametersList
* MaintenanceWindowTaskParametersList `array`
  * items [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)

### MaintenanceWindowTaskPriority
* MaintenanceWindowTaskPriority `integer`

### MaintenanceWindowTaskTargetId
* MaintenanceWindowTaskTargetId `string`

### MaintenanceWindowTaskType
* MaintenanceWindowTaskType `string` (values: RUN_COMMAND, AUTOMATION, STEP_FUNCTIONS, LAMBDA)

### ManagedInstanceId
* ManagedInstanceId `string`

### MaxConcurrency
* MaxConcurrency `string`

### MaxDocumentSizeExceeded
* MaxDocumentSizeExceeded `object`: The size limit of a document is 64 KB.
  * Message [String](#string)

### MaxErrors
* MaxErrors `string`

### MaxResults
* MaxResults `integer`

### MaxResultsEC2Compatible
* MaxResultsEC2Compatible `integer`

### ModifyDocumentPermissionRequest
* ModifyDocumentPermissionRequest `object`
  * AccountIdsToAdd [AccountIdList](#accountidlist)
  * AccountIdsToRemove [AccountIdList](#accountidlist)
  * Name **required** [DocumentName](#documentname)
  * PermissionType **required** [DocumentPermissionType](#documentpermissiontype)

### ModifyDocumentPermissionResponse
* ModifyDocumentPermissionResponse `object`

### NextToken
* NextToken `string`

### NonCompliantSummary
* NonCompliantSummary `object`: A summary of resources that are not compliant. The summary is organized according to resource type.
  * NonCompliantCount [ComplianceSummaryCount](#compliancesummarycount)
  * SeveritySummary [SeveritySummary](#severitysummary)

### NormalStringMap
* NormalStringMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### NotificationArn
* NotificationArn `string`

### NotificationConfig
* NotificationConfig `object`: Configurations for sending notifications.
  * NotificationArn [NotificationArn](#notificationarn)
  * NotificationEvents [NotificationEventList](#notificationeventlist)
  * NotificationType [NotificationType](#notificationtype)

### NotificationEvent
* NotificationEvent `string` (values: All, InProgress, Success, TimedOut, Cancelled, Failed)

### NotificationEventList
* NotificationEventList `array`
  * items [NotificationEvent](#notificationevent)

### NotificationType
* NotificationType `string` (values: Command, Invocation)

### OperatingSystem
* OperatingSystem `string` (values: WINDOWS, AMAZON_LINUX, UBUNTU, REDHAT_ENTERPRISE_LINUX, SUSE, CENTOS)

### OwnerInformation
* OwnerInformation `string`

### PSParameterName
* PSParameterName `string`

### PSParameterValue
* PSParameterValue `string`

### PSParameterVersion
* PSParameterVersion `integer`

### Parameter
* Parameter `object`: An Amazon EC2 Systems Manager parameter in Parameter Store.
  * Name [PSParameterName](#psparametername)
  * Type [ParameterType](#parametertype)
  * Value [PSParameterValue](#psparametervalue)
  * Version [PSParameterVersion](#psparameterversion)

### ParameterAlreadyExists
* ParameterAlreadyExists `object`: The parameter already exists. You can't create duplicate parameters.
  * message [String](#string)

### ParameterDescription
* ParameterDescription `string`

### ParameterHistory
* ParameterHistory `object`: Information about parameter usage.
  * AllowedPattern [AllowedPattern](#allowedpattern)
  * Description [ParameterDescription](#parameterdescription)
  * KeyId [ParameterKeyId](#parameterkeyid)
  * LastModifiedDate [DateTime](#datetime)
  * LastModifiedUser [String](#string)
  * Name [PSParameterName](#psparametername)
  * Type [ParameterType](#parametertype)
  * Value [PSParameterValue](#psparametervalue)
  * Version [PSParameterVersion](#psparameterversion)

### ParameterHistoryList
* ParameterHistoryList `array`
  * items [ParameterHistory](#parameterhistory)

### ParameterKeyId
* ParameterKeyId `string`

### ParameterLimitExceeded
* ParameterLimitExceeded `object`: You have exceeded the number of parameters for this AWS account. Delete one or more parameters and try again.
  * message [String](#string)

### ParameterList
* ParameterList `array`
  * items [Parameter](#parameter)

### ParameterMaxVersionLimitExceeded
* ParameterMaxVersionLimitExceeded `object`: The parameter exceeded the maximum number of allowed versions.
  * message [String](#string)

### ParameterMetadata
* ParameterMetadata `object`: Metada includes information like the ARN of the last user and the date/time the parameter was last used.
  * AllowedPattern [AllowedPattern](#allowedpattern)
  * Description [ParameterDescription](#parameterdescription)
  * KeyId [ParameterKeyId](#parameterkeyid)
  * LastModifiedDate [DateTime](#datetime)
  * LastModifiedUser [String](#string)
  * Name [PSParameterName](#psparametername)
  * Type [ParameterType](#parametertype)
  * Version [PSParameterVersion](#psparameterversion)

### ParameterMetadataList
* ParameterMetadataList `array`
  * items [ParameterMetadata](#parametermetadata)

### ParameterName
* ParameterName `string`

### ParameterNameList
* ParameterNameList `array`
  * items [PSParameterName](#psparametername)

### ParameterNotFound
* ParameterNotFound `object`: The parameter could not be found. Verify the name and try again.
  * message [String](#string)

### ParameterPatternMismatchException
* ParameterPatternMismatchException `object`: The parameter name is not valid.
  * message [String](#string)

### ParameterStringFilter
* ParameterStringFilter `object`: One or more filters. Use a filter to return a more specific list of results.
  * Key **required** [ParameterStringFilterKey](#parameterstringfilterkey)
  * Option [ParameterStringQueryOption](#parameterstringqueryoption)
  * Values [ParameterStringFilterValueList](#parameterstringfiltervaluelist)

### ParameterStringFilterKey
* ParameterStringFilterKey `string`

### ParameterStringFilterList
* ParameterStringFilterList `array`
  * items [ParameterStringFilter](#parameterstringfilter)

### ParameterStringFilterValue
* ParameterStringFilterValue `string`

### ParameterStringFilterValueList
* ParameterStringFilterValueList `array`
  * items [ParameterStringFilterValue](#parameterstringfiltervalue)

### ParameterStringQueryOption
* ParameterStringQueryOption `string`

### ParameterType
* ParameterType `string` (values: String, StringList, SecureString)

### ParameterValue
* ParameterValue `string`

### ParameterValueList
* ParameterValueList `array`
  * items [ParameterValue](#parametervalue)

### ParameterVersionNotFound
* ParameterVersionNotFound `object`: The specified parameter version was not found. Verify the parameter name and version, and try again.
  * message [String](#string)

### Parameters
* Parameters `array`
  * items `object`
    * key [ParameterName](#parametername)
    * value [ParameterValueList](#parametervaluelist)

### ParametersFilter
* ParametersFilter `object`: This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.
  * Key **required** [ParametersFilterKey](#parametersfilterkey)
  * Values **required** [ParametersFilterValueList](#parametersfiltervaluelist)

### ParametersFilterKey
* ParametersFilterKey `string` (values: Name, Type, KeyId)

### ParametersFilterList
* ParametersFilterList `array`
  * items [ParametersFilter](#parametersfilter)

### ParametersFilterValue
* ParametersFilterValue `string`

### ParametersFilterValueList
* ParametersFilterValueList `array`
  * items [ParametersFilterValue](#parametersfiltervalue)

### Patch
* Patch `object`: Represents metadata about a patch.
  * Classification [PatchClassification](#patchclassification)
  * ContentUrl [PatchContentUrl](#patchcontenturl)
  * Description [PatchDescription](#patchdescription)
  * Id [PatchId](#patchid)
  * KbNumber [PatchKbNumber](#patchkbnumber)
  * Language [PatchLanguage](#patchlanguage)
  * MsrcNumber [PatchMsrcNumber](#patchmsrcnumber)
  * MsrcSeverity [PatchMsrcSeverity](#patchmsrcseverity)
  * Product [PatchProduct](#patchproduct)
  * ProductFamily [PatchProductFamily](#patchproductfamily)
  * ReleaseDate [DateTime](#datetime)
  * Title [PatchTitle](#patchtitle)
  * Vendor [PatchVendor](#patchvendor)

### PatchBaselineIdentity
* PatchBaselineIdentity `object`: Defines the basic information about a patch baseline.
  * BaselineDescription [BaselineDescription](#baselinedescription)
  * BaselineId [BaselineId](#baselineid)
  * BaselineName [BaselineName](#baselinename)
  * DefaultBaseline [DefaultBaseline](#defaultbaseline)
  * OperatingSystem [OperatingSystem](#operatingsystem)

### PatchBaselineIdentityList
* PatchBaselineIdentityList `array`
  * items [PatchBaselineIdentity](#patchbaselineidentity)

### PatchBaselineMaxResults
* PatchBaselineMaxResults `integer`

### PatchClassification
* PatchClassification `string`

### PatchComplianceData
* PatchComplianceData `object`: Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance.
  * Classification **required** [PatchClassification](#patchclassification)
  * InstalledTime **required** [DateTime](#datetime)
  * KBId **required** [PatchKbNumber](#patchkbnumber)
  * Severity **required** [PatchSeverity](#patchseverity)
  * State **required** [PatchComplianceDataState](#patchcompliancedatastate)
  * Title **required** [PatchTitle](#patchtitle)

### PatchComplianceDataList
* PatchComplianceDataList `array`
  * items [PatchComplianceData](#patchcompliancedata)

### PatchComplianceDataState
* PatchComplianceDataState `string` (values: INSTALLED, INSTALLED_OTHER, MISSING, NOT_APPLICABLE, FAILED)

### PatchComplianceLevel
* PatchComplianceLevel `string` (values: CRITICAL, HIGH, MEDIUM, LOW, INFORMATIONAL, UNSPECIFIED)

### PatchComplianceMaxResults
* PatchComplianceMaxResults `integer`

### PatchContentUrl
* PatchContentUrl `string`

### PatchDeploymentStatus
* PatchDeploymentStatus `string` (values: APPROVED, PENDING_APPROVAL, EXPLICIT_APPROVED, EXPLICIT_REJECTED)

### PatchDescription
* PatchDescription `string`

### PatchFailedCount
* PatchFailedCount `integer`

### PatchFilter
* PatchFilter `object`: <p>Defines a patch filter.</p> <p>A patch filter consists of key/value pairs, but not all keys are valid for all operating system types. For example, the key <code>PRODUCT</code> is valid for all supported operating system types. The key <code>MSRC_SEVERITY</code>, however, is valid only for Windows operating systems, and the key <code>SECTION</code> is valid only for Ubuntu operating systems.</p> <p>Refer to the following sections for information about which keys may be used with each major operating system, and which values are valid for each key.</p> <p> <b>Windows Operating Systems</b> </p> <p>The supported keys for Windows operating systems are <code>PRODUCT</code>, <code>CLASSIFICATION</code>, and <code>MSRC_SEVERITY</code>. See the following lists for valid values for each of these keys.</p> <p> <i>Supported key:</i> <code>PRODUCT</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Windows7</code> </p> </li> <li> <p> <code>Windows8</code> </p> </li> <li> <p> <code>Windows8.1</code> </p> </li> <li> <p> <code>Windows8Embedded</code> </p> </li> <li> <p> <code>Windows10</code> </p> </li> <li> <p> <code>Windows10LTSB</code> </p> </li> <li> <p> <code>WindowsServer2008</code> </p> </li> <li> <p> <code>WindowsServer2008R2</code> </p> </li> <li> <p> <code>WindowsServer2012</code> </p> </li> <li> <p> <code>WindowsServer2012R2</code> </p> </li> <li> <p> <code>WindowsServer2016</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>CLASSIFICATION</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>CriticalUpdates</code> </p> </li> <li> <p> <code>DefinitionUpdates</code> </p> </li> <li> <p> <code>Drivers</code> </p> </li> <li> <p> <code>FeaturePacks</code> </p> </li> <li> <p> <code>SecurityUpdates</code> </p> </li> <li> <p> <code>ServicePacks</code> </p> </li> <li> <p> <code>Tools</code> </p> </li> <li> <p> <code>UpdateRollups</code> </p> </li> <li> <p> <code>Updates</code> </p> </li> <li> <p> <code>Upgrades</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>MSRC_SEVERITY</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Critical</code> </p> </li> <li> <p> <code>Important</code> </p> </li> <li> <p> <code>Moderate</code> </p> </li> <li> <p> <code>Low</code> </p> </li> <li> <p> <code>Unspecified</code> </p> </li> </ul> <p> <b>Ubuntu Operating Systems</b> </p> <p>The supported keys for Ubuntu operating systems are <code>PRODUCT</code>, <code>PRIORITY</code>, and <code>SECTION</code>. See the following lists for valid values for each of these keys.</p> <p> <i>Supported key:</i> <code>PRODUCT</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Ubuntu14.04</code> </p> </li> <li> <p> <code>Ubuntu16.04</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>PRIORITY</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Required</code> </p> </li> <li> <p> <code>Important</code> </p> </li> <li> <p> <code>Standard</code> </p> </li> <li> <p> <code>Optional</code> </p> </li> <li> <p> <code>Extra</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>SECTION</code> </p> <p>Only the length of the key value is validated. Minimum length is 1. Maximum length is 64.</p> <p> <b>Amazon Linux Operating Systems</b> </p> <p>The supported keys for Amazon Linux operating systems are <code>PRODUCT</code>, <code>CLASSIFICATION</code>, and <code>SEVERITY</code>. See the following lists for valid values for each of these keys.</p> <p> <i>Supported key:</i> <code>PRODUCT</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>AmazonLinux2012.03</code> </p> </li> <li> <p> <code>AmazonLinux2012.09</code> </p> </li> <li> <p> <code>AmazonLinux2013.03</code> </p> </li> <li> <p> <code>AmazonLinux2013.09</code> </p> </li> <li> <p> <code>AmazonLinux2014.03</code> </p> </li> <li> <p> <code>AmazonLinux2014.09</code> </p> </li> <li> <p> <code>AmazonLinux2015.03</code> </p> </li> <li> <p> <code>AmazonLinux2015.09</code> </p> </li> <li> <p> <code>AmazonLinux2016.03</code> </p> </li> <li> <p> <code>AmazonLinux2016.09</code> </p> </li> <li> <p> <code>AmazonLinux2017.03</code> </p> </li> <li> <p> <code>AmazonLinux2017.09</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>CLASSIFICATION</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Security</code> </p> </li> <li> <p> <code>Bugfix</code> </p> </li> <li> <p> <code>Enhancement</code> </p> </li> <li> <p> <code>Recommended</code> </p> </li> <li> <p> <code>Newpackage</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>SEVERITY</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Critical</code> </p> </li> <li> <p> <code>Important</code> </p> </li> <li> <p> <code>Medium</code> </p> </li> <li> <p> <code>Low</code> </p> </li> </ul> <p> <b>RedHat Enterprise Linux (RHEL) Operating Systems</b> </p> <p>The supported keys for RedHat Enterprise Linux operating systems are <code>PRODUCT</code>, <code>CLASSIFICATION</code>, and <code>SEVERITY</code>. See the following lists for valid values for each of these keys.</p> <p> <i>Supported key:</i> <code>PRODUCT</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>RedhatEnterpriseLinux6.5</code> </p> </li> <li> <p> <code>RedhatEnterpriseLinux6.6</code> </p> </li> <li> <p> <code>RedhatEnterpriseLinux6.7</code> </p> </li> <li> <p> <code>RedhatEnterpriseLinux6.8</code> </p> </li> <li> <p> <code>RedhatEnterpriseLinux6.9</code> </p> </li> <li> <p> <code>RedhatEnterpriseLinux7.0</code> </p> </li> <li> <p> <code>RedhatEnterpriseLinux7.1</code> </p> </li> <li> <p> <code>RedhatEnterpriseLinux7.2</code> </p> </li> <li> <p> <code>RedhatEnterpriseLinux7.3</code> </p> </li> <li> <p> <code>RedhatEnterpriseLinux7.4</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>CLASSIFICATION</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Security</code> </p> </li> <li> <p> <code>Bugfix</code> </p> </li> <li> <p> <code>Enhancement</code> </p> </li> <li> <p> <code>Recommended</code> </p> </li> <li> <p> <code>Newpackage</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>SEVERITY</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Critical</code> </p> </li> <li> <p> <code>Important</code> </p> </li> <li> <p> <code>Medium</code> </p> </li> <li> <p> <code>Low</code> </p> </li> </ul> <p> <b>SUSE Linux Enterprise Server (SLES) Operating Systems</b> </p> <p>The supported keys for SLES operating systems are <code>PRODUCT</code>, <code>CLASSIFICATION</code>, and <code>SEVERITY</code>. See the following lists for valid values for each of these keys.</p> <p> <i>Supported key:</i> <code>PRODUCT</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Suse12.0</code> </p> </li> <li> <p> <code>Suse12.1</code> </p> </li> <li> <p> <code>Suse12.2</code> </p> </li> <li> <p> <code>Suse12.3</code> </p> </li> <li> <p> <code>Suse12.4</code> </p> </li> <li> <p> <code>Suse12.5</code> </p> </li> <li> <p> <code>Suse12.6</code> </p> </li> <li> <p> <code>Suse12.7</code> </p> </li> <li> <p> <code>Suse12.8</code> </p> </li> <li> <p> <code>Suse12.9</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>CLASSIFICATION</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Security</code> </p> </li> <li> <p> <code>Recommended</code> </p> </li> <li> <p> <code>Optional</code> </p> </li> <li> <p> <code>Feature</code> </p> </li> <li> <p> <code>Document</code> </p> </li> <li> <p> <code>Yast</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>SEVERITY</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Critical</code> </p> </li> <li> <p> <code>Important</code> </p> </li> <li> <p> <code>Moderate</code> </p> </li> <li> <p> <code>Low</code> </p> </li> </ul> <p> <b>CentOS Operating Systems</b> </p> <p>The supported keys for CentOS operating systems are <code>PRODUCT</code>, <code>CLASSIFICATION</code>, and <code>SEVERITY</code>. See the following lists for valid values for each of these keys.</p> <p> <i>Supported key:</i> <code>PRODUCT</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>CentOS6.5</code> </p> </li> <li> <p> <code>CentOS6.6</code> </p> </li> <li> <p> <code>CentOS6.7</code> </p> </li> <li> <p> <code>CentOS6.8</code> </p> </li> <li> <p> <code>CentOS6.9</code> </p> </li> <li> <p> <code>CentOS7.0</code> </p> </li> <li> <p> <code>CentOS7.1</code> </p> </li> <li> <p> <code>CentOS7.2</code> </p> </li> <li> <p> <code>CentOS7.3</code> </p> </li> <li> <p> <code>CentOS7.4</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>CLASSIFICATION</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Security</code> </p> </li> <li> <p> <code>Bugfix</code> </p> </li> <li> <p> <code>Enhancement</code> </p> </li> <li> <p> <code>Recommended</code> </p> </li> <li> <p> <code>Newpackage</code> </p> </li> </ul> <p> <i>Supported key:</i> <code>SEVERITY</code> </p> <p> <i>Supported values:</i> </p> <ul> <li> <p> <code>Critical</code> </p> </li> <li> <p> <code>Important</code> </p> </li> <li> <p> <code>Medium</code> </p> </li> <li> <p> <code>Low</code> </p> </li> </ul>
  * Key **required** [PatchFilterKey](#patchfilterkey)
  * Values **required** [PatchFilterValueList](#patchfiltervaluelist)

### PatchFilterGroup
* PatchFilterGroup `object`: A set of patch filters, typically used for approval rules.
  * PatchFilters **required** [PatchFilterList](#patchfilterlist)

### PatchFilterKey
* PatchFilterKey `string` (values: PRODUCT, CLASSIFICATION, MSRC_SEVERITY, PATCH_ID, SECTION, PRIORITY, SEVERITY)

### PatchFilterList
* PatchFilterList `array`
  * items [PatchFilter](#patchfilter)

### PatchFilterValue
* PatchFilterValue `string`

### PatchFilterValueList
* PatchFilterValueList `array`
  * items [PatchFilterValue](#patchfiltervalue)

### PatchGroup
* PatchGroup `string`

### PatchGroupList
* PatchGroupList `array`
  * items [PatchGroup](#patchgroup)

### PatchGroupPatchBaselineMapping
* PatchGroupPatchBaselineMapping `object`: The mapping between a patch group and the patch baseline the patch group is registered with.
  * BaselineIdentity [PatchBaselineIdentity](#patchbaselineidentity)
  * PatchGroup [PatchGroup](#patchgroup)

### PatchGroupPatchBaselineMappingList
* PatchGroupPatchBaselineMappingList `array`
  * items [PatchGroupPatchBaselineMapping](#patchgrouppatchbaselinemapping)

### PatchId
* PatchId `string`

### PatchIdList
* PatchIdList `array`
  * items [PatchId](#patchid)

### PatchInstalledCount
* PatchInstalledCount `integer`

### PatchInstalledOtherCount
* PatchInstalledOtherCount `integer`

### PatchKbNumber
* PatchKbNumber `string`

### PatchLanguage
* PatchLanguage `string`

### PatchList
* PatchList `array`
  * items [Patch](#patch)

### PatchMissingCount
* PatchMissingCount `integer`

### PatchMsrcNumber
* PatchMsrcNumber `string`

### PatchMsrcSeverity
* PatchMsrcSeverity `string`

### PatchNotApplicableCount
* PatchNotApplicableCount `integer`

### PatchOperationType
* PatchOperationType `string` (values: Scan, Install)

### PatchOrchestratorFilter
* PatchOrchestratorFilter `object`: Defines a filter used in Patch Manager APIs.
  * Key [PatchOrchestratorFilterKey](#patchorchestratorfilterkey)
  * Values [PatchOrchestratorFilterValues](#patchorchestratorfiltervalues)

### PatchOrchestratorFilterKey
* PatchOrchestratorFilterKey `string`

### PatchOrchestratorFilterList
* PatchOrchestratorFilterList `array`
  * items [PatchOrchestratorFilter](#patchorchestratorfilter)

### PatchOrchestratorFilterValue
* PatchOrchestratorFilterValue `string`

### PatchOrchestratorFilterValues
* PatchOrchestratorFilterValues `array`
  * items [PatchOrchestratorFilterValue](#patchorchestratorfiltervalue)

### PatchProduct
* PatchProduct `string`

### PatchProductFamily
* PatchProductFamily `string`

### PatchRule
* PatchRule `object`: Defines an approval rule for a patch baseline.
  * ApproveAfterDays **required** [ApproveAfterDays](#approveafterdays)
  * ComplianceLevel [PatchComplianceLevel](#patchcompliancelevel)
  * EnableNonSecurity [Boolean](#boolean)
  * PatchFilterGroup **required** [PatchFilterGroup](#patchfiltergroup)

### PatchRuleGroup
* PatchRuleGroup `object`: A set of rules defining the approval rules for a patch baseline.
  * PatchRules **required** [PatchRuleList](#patchrulelist)

### PatchRuleList
* PatchRuleList `array`
  * items [PatchRule](#patchrule)

### PatchSeverity
* PatchSeverity `string`

### PatchSource
* PatchSource `object`: Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
  * Configuration **required** [PatchSourceConfiguration](#patchsourceconfiguration)
  * Name **required** [PatchSourceName](#patchsourcename)
  * Products **required** [PatchSourceProductList](#patchsourceproductlist)

### PatchSourceConfiguration
* PatchSourceConfiguration `string`

### PatchSourceList
* PatchSourceList `array`
  * items [PatchSource](#patchsource)

### PatchSourceName
* PatchSourceName `string`

### PatchSourceProduct
* PatchSourceProduct `string`

### PatchSourceProductList
* PatchSourceProductList `array`
  * items [PatchSourceProduct](#patchsourceproduct)

### PatchStatus
* PatchStatus `object`: Information about the approval status of a patch.
  * ApprovalDate [DateTime](#datetime)
  * ComplianceLevel [PatchComplianceLevel](#patchcompliancelevel)
  * DeploymentStatus [PatchDeploymentStatus](#patchdeploymentstatus)

### PatchTitle
* PatchTitle `string`

### PatchVendor
* PatchVendor `string`

### PingStatus
* PingStatus `string` (values: Online, ConnectionLost, Inactive)

### PlatformType
* PlatformType `string` (values: Windows, Linux)

### PlatformTypeList
* PlatformTypeList `array`
  * items [PlatformType](#platformtype)

### Product
* Product `string`

### PutComplianceItemsRequest
* PutComplianceItemsRequest `object`
  * ComplianceType **required** [ComplianceTypeName](#compliancetypename)
  * ExecutionSummary **required** [ComplianceExecutionSummary](#complianceexecutionsummary)
  * ItemContentHash [ComplianceItemContentHash](#complianceitemcontenthash)
  * Items **required** [ComplianceItemEntryList](#complianceitementrylist)
  * ResourceId **required** [ComplianceResourceId](#complianceresourceid)
  * ResourceType **required** [ComplianceResourceType](#complianceresourcetype)

### PutComplianceItemsResult
* PutComplianceItemsResult `object`

### PutInventoryMessage
* PutInventoryMessage `string`

### PutInventoryRequest
* PutInventoryRequest `object`
  * InstanceId **required** [InstanceId](#instanceid)
  * Items **required** [InventoryItemList](#inventoryitemlist)

### PutInventoryResult
* PutInventoryResult `object`
  * Message [PutInventoryMessage](#putinventorymessage)

### PutParameterRequest
* PutParameterRequest `object`
  * AllowedPattern [AllowedPattern](#allowedpattern)
  * Description [ParameterDescription](#parameterdescription)
  * KeyId [ParameterKeyId](#parameterkeyid)
  * Name **required** [PSParameterName](#psparametername)
  * Overwrite [Boolean](#boolean)
  * Type **required** [ParameterType](#parametertype)
  * Value **required** [PSParameterValue](#psparametervalue)

### PutParameterResult
* PutParameterResult `object`
  * Version [PSParameterVersion](#psparameterversion)

### RegisterDefaultPatchBaselineRequest
* RegisterDefaultPatchBaselineRequest `object`
  * BaselineId **required** [BaselineId](#baselineid)

### RegisterDefaultPatchBaselineResult
* RegisterDefaultPatchBaselineResult `object`
  * BaselineId [BaselineId](#baselineid)

### RegisterPatchBaselineForPatchGroupRequest
* RegisterPatchBaselineForPatchGroupRequest `object`
  * BaselineId **required** [BaselineId](#baselineid)
  * PatchGroup **required** [PatchGroup](#patchgroup)

### RegisterPatchBaselineForPatchGroupResult
* RegisterPatchBaselineForPatchGroupResult `object`
  * BaselineId [BaselineId](#baselineid)
  * PatchGroup [PatchGroup](#patchgroup)

### RegisterTargetWithMaintenanceWindowRequest
* RegisterTargetWithMaintenanceWindowRequest `object`
  * ClientToken [ClientToken](#clienttoken)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * OwnerInformation [OwnerInformation](#ownerinformation)
  * ResourceType **required** [MaintenanceWindowResourceType](#maintenancewindowresourcetype)
  * Targets **required** [Targets](#targets)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

### RegisterTargetWithMaintenanceWindowResult
* RegisterTargetWithMaintenanceWindowResult `object`
  * WindowTargetId [MaintenanceWindowTargetId](#maintenancewindowtargetid)

### RegisterTaskWithMaintenanceWindowRequest
* RegisterTaskWithMaintenanceWindowRequest `object`
  * ClientToken [ClientToken](#clienttoken)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * LoggingInfo [LoggingInfo](#logginginfo)
  * MaxConcurrency **required** [MaxConcurrency](#maxconcurrency)
  * MaxErrors **required** [MaxErrors](#maxerrors)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Priority [MaintenanceWindowTaskPriority](#maintenancewindowtaskpriority)
  * ServiceRoleArn **required** [ServiceRole](#servicerole)
  * Targets **required** [Targets](#targets)
  * TaskArn **required** [MaintenanceWindowTaskArn](#maintenancewindowtaskarn)
  * TaskInvocationParameters [MaintenanceWindowTaskInvocationParameters](#maintenancewindowtaskinvocationparameters)
  * TaskParameters [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)
  * TaskType **required** [MaintenanceWindowTaskType](#maintenancewindowtasktype)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

### RegisterTaskWithMaintenanceWindowResult
* RegisterTaskWithMaintenanceWindowResult `object`
  * WindowTaskId [MaintenanceWindowTaskId](#maintenancewindowtaskid)

### RegistrationLimit
* RegistrationLimit `integer`

### RegistrationsCount
* RegistrationsCount `integer`

### RemainingCount
* RemainingCount `integer`

### RemoveTagsFromResourceRequest
* RemoveTagsFromResourceRequest `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * ResourceType **required** [ResourceTypeForTagging](#resourcetypefortagging)
  * TagKeys **required** [KeyList](#keylist)

### RemoveTagsFromResourceResult
* RemoveTagsFromResourceResult `object`

### ResolvedTargets
* ResolvedTargets `object`: Information about targets that resolved during the Automation execution.
  * ParameterValues [TargetParameterList](#targetparameterlist)
  * Truncated [Boolean](#boolean)

### ResourceComplianceSummaryItem
* ResourceComplianceSummaryItem `object`: Compliance summary information for a specific resource. 
  * ComplianceType [ComplianceTypeName](#compliancetypename)
  * CompliantSummary [CompliantSummary](#compliantsummary)
  * ExecutionSummary [ComplianceExecutionSummary](#complianceexecutionsummary)
  * NonCompliantSummary [NonCompliantSummary](#noncompliantsummary)
  * OverallSeverity [ComplianceSeverity](#complianceseverity)
  * ResourceId [ComplianceResourceId](#complianceresourceid)
  * ResourceType [ComplianceResourceType](#complianceresourcetype)
  * Status [ComplianceStatus](#compliancestatus)

### ResourceComplianceSummaryItemList
* ResourceComplianceSummaryItemList `array`
  * items [ResourceComplianceSummaryItem](#resourcecompliancesummaryitem)

### ResourceCount
* ResourceCount `integer`

### ResourceDataSyncAWSKMSKeyARN
* ResourceDataSyncAWSKMSKeyARN `string`

### ResourceDataSyncAlreadyExistsException
* ResourceDataSyncAlreadyExistsException `object`: A sync configuration with the same name already exists.
  * SyncName [ResourceDataSyncName](#resourcedatasyncname)

### ResourceDataSyncCountExceededException
* ResourceDataSyncCountExceededException `object`: You have exceeded the allowed maximum sync configurations.
  * Message [String](#string)

### ResourceDataSyncCreatedTime
* ResourceDataSyncCreatedTime `string`

### ResourceDataSyncInvalidConfigurationException
* ResourceDataSyncInvalidConfigurationException `object`: The specified sync configuration is invalid.
  * Message [String](#string)

### ResourceDataSyncItem
* ResourceDataSyncItem `object`: Information about a Resource Data Sync configuration, including its current status and last successful sync.
  * LastStatus [LastResourceDataSyncStatus](#lastresourcedatasyncstatus)
  * LastSuccessfulSyncTime [LastSuccessfulResourceDataSyncTime](#lastsuccessfulresourcedatasynctime)
  * LastSyncStatusMessage [LastResourceDataSyncMessage](#lastresourcedatasyncmessage)
  * LastSyncTime [LastResourceDataSyncTime](#lastresourcedatasynctime)
  * S3Destination [ResourceDataSyncS3Destination](#resourcedatasyncs3destination)
  * SyncCreatedTime [ResourceDataSyncCreatedTime](#resourcedatasynccreatedtime)
  * SyncName [ResourceDataSyncName](#resourcedatasyncname)

### ResourceDataSyncItemList
* ResourceDataSyncItemList `array`
  * items [ResourceDataSyncItem](#resourcedatasyncitem)

### ResourceDataSyncName
* ResourceDataSyncName `string`

### ResourceDataSyncNotFoundException
* ResourceDataSyncNotFoundException `object`: The specified sync name was not found.
  * SyncName [ResourceDataSyncName](#resourcedatasyncname)

### ResourceDataSyncS3BucketName
* ResourceDataSyncS3BucketName `string`

### ResourceDataSyncS3Destination
* ResourceDataSyncS3Destination `object`: Information about the target Amazon S3 bucket for the Resource Data Sync.
  * AWSKMSKeyARN [ResourceDataSyncAWSKMSKeyARN](#resourcedatasyncawskmskeyarn)
  * BucketName **required** [ResourceDataSyncS3BucketName](#resourcedatasyncs3bucketname)
  * Prefix [ResourceDataSyncS3Prefix](#resourcedatasyncs3prefix)
  * Region **required** [ResourceDataSyncS3Region](#resourcedatasyncs3region)
  * SyncFormat **required** [ResourceDataSyncS3Format](#resourcedatasyncs3format)

### ResourceDataSyncS3Format
* ResourceDataSyncS3Format `string` (values: JsonSerDe)

### ResourceDataSyncS3Prefix
* ResourceDataSyncS3Prefix `string`

### ResourceDataSyncS3Region
* ResourceDataSyncS3Region `string`

### ResourceId
* ResourceId `string`

### ResourceInUseException
* ResourceInUseException `object`: Error returned if an attempt is made to delete a patch baseline that is registered for a patch group.
  * Message [String](#string)

### ResourceLimitExceededException
* ResourceLimitExceededException `object`: <p>Error returned when the caller has exceeded the default resource limits. For example, too many Maintenance Windows or Patch baselines have been created.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
  * Message [String](#string)

### ResourceType
* ResourceType `string` (values: ManagedInstance, Document, EC2Instance)

### ResourceTypeForTagging
* ResourceTypeForTagging `string` (values: Document, ManagedInstance, MaintenanceWindow, Parameter, PatchBaseline)

### ResponseCode
* ResponseCode `integer`

### ResultAttribute
* ResultAttribute `object`: The inventory item result attribute.
  * TypeName **required** [InventoryItemTypeName](#inventoryitemtypename)

### ResultAttributeList
* ResultAttributeList `array`
  * items [ResultAttribute](#resultattribute)

### S3BucketName
* S3BucketName `string`

### S3KeyPrefix
* S3KeyPrefix `string`

### S3OutputLocation
* S3OutputLocation `object`: An Amazon S3 bucket where you want to store the results of this request.
  * OutputS3BucketName [S3BucketName](#s3bucketname)
  * OutputS3KeyPrefix [S3KeyPrefix](#s3keyprefix)
  * OutputS3Region [S3Region](#s3region)

### S3OutputUrl
* S3OutputUrl `object`: A URL for the Amazon S3 bucket where you want to store the results of this request.
  * OutputUrl [Url](#url)

### S3Region
* S3Region `string`

### ScheduleExpression
* ScheduleExpression `string`

### SendAutomationSignalRequest
* SendAutomationSignalRequest `object`
  * AutomationExecutionId **required** [AutomationExecutionId](#automationexecutionid)
  * Payload [AutomationParameterMap](#automationparametermap)
  * SignalType **required** [SignalType](#signaltype)

### SendAutomationSignalResult
* SendAutomationSignalResult `object`

### SendCommandRequest
* SendCommandRequest `object`
  * Comment [Comment](#comment)
  * DocumentHash [DocumentHash](#documenthash)
  * DocumentHashType [DocumentHashType](#documenthashtype)
  * DocumentName **required** [DocumentARN](#documentarn)
  * DocumentVersion [DocumentVersion](#documentversion)
  * InstanceIds [InstanceIdList](#instanceidlist)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * NotificationConfig [NotificationConfig](#notificationconfig)
  * OutputS3BucketName [S3BucketName](#s3bucketname)
  * OutputS3KeyPrefix [S3KeyPrefix](#s3keyprefix)
  * OutputS3Region [S3Region](#s3region)
  * Parameters [Parameters](#parameters)
  * ServiceRoleArn [ServiceRole](#servicerole)
  * Targets [Targets](#targets)
  * TimeoutSeconds [TimeoutSeconds](#timeoutseconds)

### SendCommandResult
* SendCommandResult `object`
  * Command [Command](#command)

### ServiceRole
* ServiceRole `string`

### SeveritySummary
* SeveritySummary `object`: The number of managed instances found for each patch severity level defined in the request filter.
  * CriticalCount [ComplianceSummaryCount](#compliancesummarycount)
  * HighCount [ComplianceSummaryCount](#compliancesummarycount)
  * InformationalCount [ComplianceSummaryCount](#compliancesummarycount)
  * LowCount [ComplianceSummaryCount](#compliancesummarycount)
  * MediumCount [ComplianceSummaryCount](#compliancesummarycount)
  * UnspecifiedCount [ComplianceSummaryCount](#compliancesummarycount)

### SignalType
* SignalType `string` (values: Approve, Reject, StartStep, StopStep, Resume)

### SnapshotDownloadUrl
* SnapshotDownloadUrl `string`

### SnapshotId
* SnapshotId `string`

### StandardErrorContent
* StandardErrorContent `string`

### StandardOutputContent
* StandardOutputContent `string`

### StartAutomationExecutionRequest
* StartAutomationExecutionRequest `object`
  * ClientToken [IdempotencyToken](#idempotencytoken)
  * DocumentName **required** [DocumentARN](#documentarn)
  * DocumentVersion [DocumentVersion](#documentversion)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Mode [ExecutionMode](#executionmode)
  * Parameters [AutomationParameterMap](#automationparametermap)
  * TargetParameterName [AutomationParameterKey](#automationparameterkey)
  * Targets [Targets](#targets)

### StartAutomationExecutionResult
* StartAutomationExecutionResult `object`
  * AutomationExecutionId [AutomationExecutionId](#automationexecutionid)

### StatusAdditionalInfo
* StatusAdditionalInfo `string`

### StatusDetails
* StatusDetails `string`

### StatusMessage
* StatusMessage `string`

### StatusName
* StatusName `string`

### StatusUnchanged
* StatusUnchanged `object`: The updated status is the same as the current status.

### StepExecution
* StepExecution `object`: Detailed information about an the execution state of an Automation step.
  * Action [AutomationActionName](#automationactionname)
  * ExecutionEndTime [DateTime](#datetime)
  * ExecutionStartTime [DateTime](#datetime)
  * FailureDetails [FailureDetails](#failuredetails)
  * FailureMessage [String](#string)
  * Inputs [NormalStringMap](#normalstringmap)
  * MaxAttempts [Integer](#integer)
  * OnFailure [String](#string)
  * Outputs [AutomationParameterMap](#automationparametermap)
  * OverriddenParameters [AutomationParameterMap](#automationparametermap)
  * Response [String](#string)
  * ResponseCode [String](#string)
  * StepExecutionId [String](#string)
  * StepName [String](#string)
  * StepStatus [AutomationExecutionStatus](#automationexecutionstatus)
  * TimeoutSeconds [Long](#long)

### StepExecutionFilter
* StepExecutionFilter `object`: A filter to limit the amount of step execution information returned by the call.
  * Key **required** [StepExecutionFilterKey](#stepexecutionfilterkey)
  * Values **required** [StepExecutionFilterValueList](#stepexecutionfiltervaluelist)

### StepExecutionFilterKey
* StepExecutionFilterKey `string` (values: StartTimeBefore, StartTimeAfter, StepExecutionStatus, StepExecutionId, StepName, Action)

### StepExecutionFilterList
* StepExecutionFilterList `array`
  * items [StepExecutionFilter](#stepexecutionfilter)

### StepExecutionFilterValue
* StepExecutionFilterValue `string`

### StepExecutionFilterValueList
* StepExecutionFilterValueList `array`
  * items [StepExecutionFilterValue](#stepexecutionfiltervalue)

### StepExecutionList
* StepExecutionList `array`
  * items [StepExecution](#stepexecution)

### StopAutomationExecutionRequest
* StopAutomationExecutionRequest `object`
  * AutomationExecutionId **required** [AutomationExecutionId](#automationexecutionid)
  * Type [StopType](#stoptype)

### StopAutomationExecutionResult
* StopAutomationExecutionResult `object`

### StopType
* StopType `string` (values: Complete, Cancel)

### String
* String `string`

### StringDateTime
* StringDateTime `string`

### StringList
* StringList `array`
  * items [String](#string)

### SubTypeCountLimitExceededException
* SubTypeCountLimitExceededException `object`: The sub-type count exceeded the limit for the inventory type.
  * Message [String](#string)

### Tag
* Tag `object`: Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Systems Manager, you can apply tags to documents, managed instances, Maintenance Windows, Parameter Store parameters, and patch baselines.
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### Target
* Target `object`: <p>An array of search criteria that targets instances using a Key,Value combination that you specify. <code>Targets</code> is required if you don't provide one or more instance IDs in the call.</p> <p/>
  * Key [TargetKey](#targetkey)
  * Values [TargetValues](#targetvalues)

### TargetCount
* TargetCount `integer`

### TargetInUseException
* TargetInUseException `object`: You specified the <code>Safe</code> option for the DeregisterTargetFromMaintenanceWindow operation, but the target is still referenced in a task.
  * Message [String](#string)

### TargetKey
* TargetKey `string`

### TargetParameterList
* TargetParameterList `array`
  * items [ParameterValue](#parametervalue)

### TargetType
* TargetType `string`

### TargetValue
* TargetValue `string`

### TargetValues
* TargetValues `array`
  * items [TargetValue](#targetvalue)

### Targets
* Targets `array`
  * items [Target](#target)

### TimeoutSeconds
* TimeoutSeconds `integer`

### TooManyTagsError
* TooManyTagsError `object`: The Targets parameter includes too many tags. Remove one or more tags and try the command again.

### TooManyUpdates
* TooManyUpdates `object`: There are concurrent updates for a resource that supports one update at a time.
  * Message [String](#string)

### TotalCount
* TotalCount `integer`

### TotalSizeLimitExceededException
* TotalSizeLimitExceededException `object`: The size of inventory data has exceeded the total size limit for the resource.
  * Message [String](#string)

### UnsupportedInventoryItemContextException
* UnsupportedInventoryItemContextException `object`: The <code>Context</code> attribute that you specified for the <code>InventoryItem</code> is not allowed for this inventory type. You can only use the <code>Context</code> attribute with inventory types like <code>AWS:ComplianceItem</code>.
  * Message [String](#string)
  * TypeName [InventoryItemTypeName](#inventoryitemtypename)

### UnsupportedInventorySchemaVersionException
* UnsupportedInventorySchemaVersionException `object`: Inventory item type schema version has to match supported versions in the service. Check output of GetInventorySchema to see the available schema version for each type.
  * Message [String](#string)

### UnsupportedOperatingSystem
* UnsupportedOperatingSystem `object`: The operating systems you specified is not supported, or the operation is not supported for the operating system. Valid operating systems include: Windows, AmazonLinux, RedhatEnterpriseLinux, and Ubuntu.
  * Message [String](#string)

### UnsupportedParameterType
* UnsupportedParameterType `object`: The parameter type is not supported.
  * message [String](#string)

### UnsupportedPlatformType
* UnsupportedPlatformType `object`: The document does not support the platform type of the given instance ID(s). For example, you sent an document for a Windows instance to a Linux instance.
  * Message [String](#string)

### UpdateAssociationRequest
* UpdateAssociationRequest `object`
  * AssociationId **required** [AssociationId](#associationid)
  * AssociationName [AssociationName](#associationname)
  * AssociationVersion [AssociationVersion](#associationversion)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name [DocumentName](#documentname)
  * OutputLocation [InstanceAssociationOutputLocation](#instanceassociationoutputlocation)
  * Parameters [Parameters](#parameters)
  * ScheduleExpression [ScheduleExpression](#scheduleexpression)
  * Targets [Targets](#targets)

### UpdateAssociationResult
* UpdateAssociationResult `object`
  * AssociationDescription [AssociationDescription](#associationdescription)

### UpdateAssociationStatusRequest
* UpdateAssociationStatusRequest `object`
  * AssociationStatus **required** [AssociationStatus](#associationstatus)
  * InstanceId **required** [InstanceId](#instanceid)
  * Name **required** [DocumentName](#documentname)

### UpdateAssociationStatusResult
* UpdateAssociationStatusResult `object`
  * AssociationDescription [AssociationDescription](#associationdescription)

### UpdateDocumentDefaultVersionRequest
* UpdateDocumentDefaultVersionRequest `object`
  * DocumentVersion **required** [DocumentVersionNumber](#documentversionnumber)
  * Name **required** [DocumentName](#documentname)

### UpdateDocumentDefaultVersionResult
* UpdateDocumentDefaultVersionResult `object`
  * Description [DocumentDefaultVersionDescription](#documentdefaultversiondescription)

### UpdateDocumentRequest
* UpdateDocumentRequest `object`
  * Content **required** [DocumentContent](#documentcontent)
  * DocumentFormat [DocumentFormat](#documentformat)
  * DocumentVersion [DocumentVersion](#documentversion)
  * Name **required** [DocumentName](#documentname)
  * TargetType [TargetType](#targettype)

### UpdateDocumentResult
* UpdateDocumentResult `object`
  * DocumentDescription [DocumentDescription](#documentdescription)

### UpdateMaintenanceWindowRequest
* UpdateMaintenanceWindowRequest `object`
  * AllowUnassociatedTargets [MaintenanceWindowAllowUnassociatedTargets](#maintenancewindowallowunassociatedtargets)
  * Cutoff [MaintenanceWindowCutoff](#maintenancewindowcutoff)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Duration [MaintenanceWindowDurationHours](#maintenancewindowdurationhours)
  * Enabled [MaintenanceWindowEnabled](#maintenancewindowenabled)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Replace [Boolean](#boolean)
  * Schedule [MaintenanceWindowSchedule](#maintenancewindowschedule)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)

### UpdateMaintenanceWindowResult
* UpdateMaintenanceWindowResult `object`
  * AllowUnassociatedTargets [MaintenanceWindowAllowUnassociatedTargets](#maintenancewindowallowunassociatedtargets)
  * Cutoff [MaintenanceWindowCutoff](#maintenancewindowcutoff)
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Duration [MaintenanceWindowDurationHours](#maintenancewindowdurationhours)
  * Enabled [MaintenanceWindowEnabled](#maintenancewindowenabled)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Schedule [MaintenanceWindowSchedule](#maintenancewindowschedule)
  * WindowId [MaintenanceWindowId](#maintenancewindowid)

### UpdateMaintenanceWindowTargetRequest
* UpdateMaintenanceWindowTargetRequest `object`
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * OwnerInformation [OwnerInformation](#ownerinformation)
  * Replace [Boolean](#boolean)
  * Targets [Targets](#targets)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTargetId **required** [MaintenanceWindowTargetId](#maintenancewindowtargetid)

### UpdateMaintenanceWindowTargetResult
* UpdateMaintenanceWindowTargetResult `object`
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * OwnerInformation [OwnerInformation](#ownerinformation)
  * Targets [Targets](#targets)
  * WindowId [MaintenanceWindowId](#maintenancewindowid)
  * WindowTargetId [MaintenanceWindowTargetId](#maintenancewindowtargetid)

### UpdateMaintenanceWindowTaskRequest
* UpdateMaintenanceWindowTaskRequest `object`
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * LoggingInfo [LoggingInfo](#logginginfo)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Priority [MaintenanceWindowTaskPriority](#maintenancewindowtaskpriority)
  * Replace [Boolean](#boolean)
  * ServiceRoleArn [ServiceRole](#servicerole)
  * Targets [Targets](#targets)
  * TaskArn [MaintenanceWindowTaskArn](#maintenancewindowtaskarn)
  * TaskInvocationParameters [MaintenanceWindowTaskInvocationParameters](#maintenancewindowtaskinvocationparameters)
  * TaskParameters [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)
  * WindowId **required** [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId **required** [MaintenanceWindowTaskId](#maintenancewindowtaskid)

### UpdateMaintenanceWindowTaskResult
* UpdateMaintenanceWindowTaskResult `object`
  * Description [MaintenanceWindowDescription](#maintenancewindowdescription)
  * LoggingInfo [LoggingInfo](#logginginfo)
  * MaxConcurrency [MaxConcurrency](#maxconcurrency)
  * MaxErrors [MaxErrors](#maxerrors)
  * Name [MaintenanceWindowName](#maintenancewindowname)
  * Priority [MaintenanceWindowTaskPriority](#maintenancewindowtaskpriority)
  * ServiceRoleArn [ServiceRole](#servicerole)
  * Targets [Targets](#targets)
  * TaskArn [MaintenanceWindowTaskArn](#maintenancewindowtaskarn)
  * TaskInvocationParameters [MaintenanceWindowTaskInvocationParameters](#maintenancewindowtaskinvocationparameters)
  * TaskParameters [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)
  * WindowId [MaintenanceWindowId](#maintenancewindowid)
  * WindowTaskId [MaintenanceWindowTaskId](#maintenancewindowtaskid)

### UpdateManagedInstanceRoleRequest
* UpdateManagedInstanceRoleRequest `object`
  * IamRole **required** [IamRole](#iamrole)
  * InstanceId **required** [ManagedInstanceId](#managedinstanceid)

### UpdateManagedInstanceRoleResult
* UpdateManagedInstanceRoleResult `object`

### UpdatePatchBaselineRequest
* UpdatePatchBaselineRequest `object`
  * ApprovalRules [PatchRuleGroup](#patchrulegroup)
  * ApprovedPatches [PatchIdList](#patchidlist)
  * ApprovedPatchesComplianceLevel [PatchComplianceLevel](#patchcompliancelevel)
  * ApprovedPatchesEnableNonSecurity [Boolean](#boolean)
  * BaselineId **required** [BaselineId](#baselineid)
  * Description [BaselineDescription](#baselinedescription)
  * GlobalFilters [PatchFilterGroup](#patchfiltergroup)
  * Name [BaselineName](#baselinename)
  * RejectedPatches [PatchIdList](#patchidlist)
  * Replace [Boolean](#boolean)
  * Sources [PatchSourceList](#patchsourcelist)

### UpdatePatchBaselineResult
* UpdatePatchBaselineResult `object`
  * ApprovalRules [PatchRuleGroup](#patchrulegroup)
  * ApprovedPatches [PatchIdList](#patchidlist)
  * ApprovedPatchesComplianceLevel [PatchComplianceLevel](#patchcompliancelevel)
  * ApprovedPatchesEnableNonSecurity [Boolean](#boolean)
  * BaselineId [BaselineId](#baselineid)
  * CreatedDate [DateTime](#datetime)
  * Description [BaselineDescription](#baselinedescription)
  * GlobalFilters [PatchFilterGroup](#patchfiltergroup)
  * ModifiedDate [DateTime](#datetime)
  * Name [BaselineName](#baselinename)
  * OperatingSystem [OperatingSystem](#operatingsystem)
  * RejectedPatches [PatchIdList](#patchidlist)
  * Sources [PatchSourceList](#patchsourcelist)

### Url
* Url `string`

### Version
* Version `string`


