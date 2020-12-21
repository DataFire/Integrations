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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Systems Manager</fullname> <p>AWS Systems Manager is a collection of capabilities that helps you automate management tasks such as collecting system inventory, applying operating system (OS) patches, automating the creation of Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale. Systems Manager lets you remotely and securely manage the configuration of your managed instances. A <i>managed instance</i> is any Amazon Elastic Compute Cloud instance (EC2 instance), or any on-premises server or virtual machine (VM) in your hybrid environment that has been configured for Systems Manager.</p> <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">AWS Systems Manager User Guide</a>.</p> <p>To get started, verify prerequisites and configure managed instances. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up AWS Systems Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>For information about other API actions you can perform on EC2 instances, see the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/">Amazon EC2 API Reference</a>. For information about how to use a Query API, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/making-api-requests.html">Making API requests</a>. </p>

## Actions

### AddTagsToResource



```js
amazonaws_ssm.AddTagsToResource({
  "ResourceType": null,
  "ResourceId": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * ResourceType **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [AddTagsToResourceResult](#addtagstoresourceresult)

### CancelCommand



```js
amazonaws_ssm.CancelCommand({
  "CommandId": null
}, context)
```

#### Input
* input `object`
  * CommandId **required**
  * InstanceIds
    * items [InstanceId](#instanceid)

#### Output
* output [CancelCommandResult](#cancelcommandresult)

### CancelMaintenanceWindowExecution



```js
amazonaws_ssm.CancelMaintenanceWindowExecution({
  "WindowExecutionId": null
}, context)
```

#### Input
* input `object`
  * WindowExecutionId **required**

#### Output
* output [CancelMaintenanceWindowExecutionResult](#cancelmaintenancewindowexecutionresult)

### CreateActivation



```js
amazonaws_ssm.CreateActivation({
  "IamRole": null
}, context)
```

#### Input
* input `object`
  * DefaultInstanceName
  * Description
  * ExpirationDate
  * IamRole **required**
  * RegistrationLimit
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateActivationResult](#createactivationresult)

### CreateAssociation



```js
amazonaws_ssm.CreateAssociation({
  "Name": null
}, context)
```

#### Input
* input `object`
  * ApplyOnlyAtCronInterval
  * AssociationName
  * AutomationTargetParameterName
  * ComplianceSeverity
  * DocumentVersion
  * InstanceId
  * MaxConcurrency
  * MaxErrors
  * Name **required**
  * OutputLocation
    * S3Location
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * OutputS3Region
  * Parameters
  * ScheduleExpression
  * SyncCompliance
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * Targets
    * items [Target](#target)

#### Output
* output [CreateAssociationResult](#createassociationresult)

### CreateAssociationBatch



```js
amazonaws_ssm.CreateAssociationBatch({
  "Entries": null
}, context)
```

#### Input
* input `object`
  * Entries **required**
    * items [CreateAssociationBatchRequestEntry](#createassociationbatchrequestentry)

#### Output
* output [CreateAssociationBatchResult](#createassociationbatchresult)

### CreateDocument



```js
amazonaws_ssm.CreateDocument({
  "Content": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * Attachments
    * items [AttachmentsSource](#attachmentssource)
  * Content **required**
  * DocumentFormat
  * DocumentType
  * Name **required**
  * Requires
    * items [DocumentRequires](#documentrequires)
  * Tags
    * items [Tag](#tag)
  * TargetType
  * VersionName

#### Output
* output [CreateDocumentResult](#createdocumentresult)

### CreateMaintenanceWindow



```js
amazonaws_ssm.CreateMaintenanceWindow({
  "Name": null,
  "Schedule": null,
  "Duration": null,
  "Cutoff": null,
  "AllowUnassociatedTargets": null
}, context)
```

#### Input
* input `object`
  * AllowUnassociatedTargets **required**
  * ClientToken
  * Cutoff **required**
  * Description
  * Duration **required**
  * EndDate
  * Name **required**
  * Schedule **required**
  * ScheduleOffset
  * ScheduleTimezone
  * StartDate
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateMaintenanceWindowResult](#createmaintenancewindowresult)

### CreateOpsItem



```js
amazonaws_ssm.CreateOpsItem({
  "Description": null,
  "Source": null,
  "Title": null
}, context)
```

#### Input
* input `object`
  * ActualEndTime
  * ActualStartTime
  * Category
  * Description **required**
  * Notifications
    * items [OpsItemNotification](#opsitemnotification)
  * OperationalData
  * OpsItemType
  * PlannedEndTime
  * PlannedStartTime
  * Priority
  * RelatedOpsItems
    * items [RelatedOpsItem](#relatedopsitem)
  * Severity
  * Source **required**
  * Tags
    * items [Tag](#tag)
  * Title **required**

#### Output
* output [CreateOpsItemResponse](#createopsitemresponse)

### CreateOpsMetadata



```js
amazonaws_ssm.CreateOpsMetadata({
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * Metadata
  * ResourceId **required**

#### Output
* output [CreateOpsMetadataResult](#createopsmetadataresult)

### CreatePatchBaseline



```js
amazonaws_ssm.CreatePatchBaseline({
  "Name": null
}, context)
```

#### Input
* input `object`
  * ApprovalRules
    * PatchRules **required**
      * items [PatchRule](#patchrule)
  * ApprovedPatches
    * items [PatchId](#patchid)
  * ApprovedPatchesComplianceLevel
  * ApprovedPatchesEnableNonSecurity
  * ClientToken
  * Description
  * GlobalFilters
    * PatchFilters **required**
      * items [PatchFilter](#patchfilter)
  * Name **required**
  * OperatingSystem
  * RejectedPatches
    * items [PatchId](#patchid)
  * RejectedPatchesAction
  * Sources
    * items [PatchSource](#patchsource)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreatePatchBaselineResult](#createpatchbaselineresult)

### CreateResourceDataSync



```js
amazonaws_ssm.CreateResourceDataSync({
  "SyncName": null
}, context)
```

#### Input
* input `object`
  * S3Destination
    * AWSKMSKeyARN
    * BucketName **required**
    * DestinationDataSharing
      * DestinationDataSharingType
    * Prefix
    * Region **required**
    * SyncFormat **required**
  * SyncName **required**
  * SyncSource
    * AwsOrganizationsSource
      * OrganizationSourceType **required**
      * OrganizationalUnits
        * items [ResourceDataSyncOrganizationalUnit](#resourcedatasyncorganizationalunit)
    * IncludeFutureRegions
    * SourceRegions **required**
      * items [ResourceDataSyncSourceRegion](#resourcedatasyncsourceregion)
    * SourceType **required**
  * SyncType

#### Output
* output [CreateResourceDataSyncResult](#createresourcedatasyncresult)

### DeleteActivation



```js
amazonaws_ssm.DeleteActivation({
  "ActivationId": null
}, context)
```

#### Input
* input `object`
  * ActivationId **required**

#### Output
* output [DeleteActivationResult](#deleteactivationresult)

### DeleteAssociation



```js
amazonaws_ssm.DeleteAssociation({}, context)
```

#### Input
* input `object`
  * AssociationId
  * InstanceId
  * Name

#### Output
* output [DeleteAssociationResult](#deleteassociationresult)

### DeleteDocument



```js
amazonaws_ssm.DeleteDocument({
  "Name": null
}, context)
```

#### Input
* input `object`
  * DocumentVersion
  * Force
  * Name **required**
  * VersionName

#### Output
* output [DeleteDocumentResult](#deletedocumentresult)

### DeleteInventory



```js
amazonaws_ssm.DeleteInventory({
  "TypeName": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * SchemaDeleteOption
  * TypeName **required**

#### Output
* output [DeleteInventoryResult](#deleteinventoryresult)

### DeleteMaintenanceWindow



```js
amazonaws_ssm.DeleteMaintenanceWindow({
  "WindowId": null
}, context)
```

#### Input
* input `object`
  * WindowId **required**

#### Output
* output [DeleteMaintenanceWindowResult](#deletemaintenancewindowresult)

### DeleteOpsMetadata



```js
amazonaws_ssm.DeleteOpsMetadata({
  "OpsMetadataArn": null
}, context)
```

#### Input
* input `object`
  * OpsMetadataArn **required**

#### Output
* output [DeleteOpsMetadataResult](#deleteopsmetadataresult)

### DeleteParameter



```js
amazonaws_ssm.DeleteParameter({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteParameterResult](#deleteparameterresult)

### DeleteParameters



```js
amazonaws_ssm.DeleteParameters({
  "Names": null
}, context)
```

#### Input
* input `object`
  * Names **required**
    * items [PSParameterName](#psparametername)

#### Output
* output [DeleteParametersResult](#deleteparametersresult)

### DeletePatchBaseline



```js
amazonaws_ssm.DeletePatchBaseline({
  "BaselineId": null
}, context)
```

#### Input
* input `object`
  * BaselineId **required**

#### Output
* output [DeletePatchBaselineResult](#deletepatchbaselineresult)

### DeleteResourceDataSync



```js
amazonaws_ssm.DeleteResourceDataSync({
  "SyncName": null
}, context)
```

#### Input
* input `object`
  * SyncName **required**
  * SyncType

#### Output
* output [DeleteResourceDataSyncResult](#deleteresourcedatasyncresult)

### DeregisterManagedInstance



```js
amazonaws_ssm.DeregisterManagedInstance({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**

#### Output
* output [DeregisterManagedInstanceResult](#deregistermanagedinstanceresult)

### DeregisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.DeregisterPatchBaselineForPatchGroup({
  "BaselineId": null,
  "PatchGroup": null
}, context)
```

#### Input
* input `object`
  * BaselineId **required**
  * PatchGroup **required**

#### Output
* output [DeregisterPatchBaselineForPatchGroupResult](#deregisterpatchbaselineforpatchgroupresult)

### DeregisterTargetFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTargetFromMaintenanceWindow({
  "WindowId": null,
  "WindowTargetId": null
}, context)
```

#### Input
* input `object`
  * Safe
  * WindowId **required**
  * WindowTargetId **required**

#### Output
* output [DeregisterTargetFromMaintenanceWindowResult](#deregistertargetfrommaintenancewindowresult)

### DeregisterTaskFromMaintenanceWindow



```js
amazonaws_ssm.DeregisterTaskFromMaintenanceWindow({
  "WindowId": null,
  "WindowTaskId": null
}, context)
```

#### Input
* input `object`
  * WindowId **required**
  * WindowTaskId **required**

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
  * Filters
    * items [DescribeActivationsFilter](#describeactivationsfilter)
  * MaxResults
  * NextToken

#### Output
* output [DescribeActivationsResult](#describeactivationsresult)

### DescribeAssociation



```js
amazonaws_ssm.DescribeAssociation({}, context)
```

#### Input
* input `object`
  * AssociationId
  * AssociationVersion
  * InstanceId
  * Name

#### Output
* output [DescribeAssociationResult](#describeassociationresult)

### DescribeAssociationExecutionTargets



```js
amazonaws_ssm.DescribeAssociationExecutionTargets({
  "AssociationId": null,
  "ExecutionId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssociationId **required**
  * ExecutionId **required**
  * Filters
    * items [AssociationExecutionTargetsFilter](#associationexecutiontargetsfilter)
  * MaxResults
  * NextToken

#### Output
* output [DescribeAssociationExecutionTargetsResult](#describeassociationexecutiontargetsresult)

### DescribeAssociationExecutions



```js
amazonaws_ssm.DescribeAssociationExecutions({
  "AssociationId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssociationId **required**
  * Filters
    * items [AssociationExecutionFilter](#associationexecutionfilter)
  * MaxResults
  * NextToken

#### Output
* output [DescribeAssociationExecutionsResult](#describeassociationexecutionsresult)

### DescribeAutomationExecutions



```js
amazonaws_ssm.DescribeAutomationExecutions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [AutomationExecutionFilter](#automationexecutionfilter)
  * MaxResults
  * NextToken

#### Output
* output [DescribeAutomationExecutionsResult](#describeautomationexecutionsresult)

### DescribeAutomationStepExecutions



```js
amazonaws_ssm.DescribeAutomationStepExecutions({
  "AutomationExecutionId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AutomationExecutionId **required**
  * Filters
    * items [StepExecutionFilter](#stepexecutionfilter)
  * MaxResults
  * NextToken
  * ReverseOrder

#### Output
* output [DescribeAutomationStepExecutionsResult](#describeautomationstepexecutionsresult)

### DescribeAvailablePatches



```js
amazonaws_ssm.DescribeAvailablePatches({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * MaxResults
  * NextToken

#### Output
* output [DescribeAvailablePatchesResult](#describeavailablepatchesresult)

### DescribeDocument



```js
amazonaws_ssm.DescribeDocument({
  "Name": null
}, context)
```

#### Input
* input `object`
  * DocumentVersion
  * Name **required**
  * VersionName

#### Output
* output [DescribeDocumentResult](#describedocumentresult)

### DescribeDocumentPermission



```js
amazonaws_ssm.DescribeDocumentPermission({
  "Name": null,
  "PermissionType": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * PermissionType **required**

#### Output
* output [DescribeDocumentPermissionResponse](#describedocumentpermissionresponse)

### DescribeEffectiveInstanceAssociations



```js
amazonaws_ssm.DescribeEffectiveInstanceAssociations({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * InstanceId **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeEffectiveInstanceAssociationsResult](#describeeffectiveinstanceassociationsresult)

### DescribeEffectivePatchesForPatchBaseline



```js
amazonaws_ssm.DescribeEffectivePatchesForPatchBaseline({
  "BaselineId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * BaselineId **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeEffectivePatchesForPatchBaselineResult](#describeeffectivepatchesforpatchbaselineresult)

### DescribeInstanceAssociationsStatus



```js
amazonaws_ssm.DescribeInstanceAssociationsStatus({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * InstanceId **required**
  * MaxResults
  * NextToken

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
  * Filters
    * items [InstanceInformationStringFilter](#instanceinformationstringfilter)
  * InstanceInformationFilterList
    * items [InstanceInformationFilter](#instanceinformationfilter)
  * MaxResults
  * NextToken

#### Output
* output [DescribeInstanceInformationResult](#describeinstanceinformationresult)

### DescribeInstancePatchStates



```js
amazonaws_ssm.DescribeInstancePatchStates({
  "InstanceIds": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * InstanceIds **required**
    * items [InstanceId](#instanceid)
  * MaxResults
  * NextToken

#### Output
* output [DescribeInstancePatchStatesResult](#describeinstancepatchstatesresult)

### DescribeInstancePatchStatesForPatchGroup



```js
amazonaws_ssm.DescribeInstancePatchStatesForPatchGroup({
  "PatchGroup": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [InstancePatchStateFilter](#instancepatchstatefilter)
  * MaxResults
  * NextToken
  * PatchGroup **required**

#### Output
* output [DescribeInstancePatchStatesForPatchGroupResult](#describeinstancepatchstatesforpatchgroupresult)

### DescribeInstancePatches



```js
amazonaws_ssm.DescribeInstancePatches({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * InstanceId **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeInstancePatchesResult](#describeinstancepatchesresult)

### DescribeInventoryDeletions



```js
amazonaws_ssm.DescribeInventoryDeletions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DeletionId
  * MaxResults
  * NextToken

#### Output
* output [DescribeInventoryDeletionsResult](#describeinventorydeletionsresult)

### DescribeMaintenanceWindowExecutionTaskInvocations



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTaskInvocations({
  "WindowExecutionId": null,
  "TaskId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * TaskId **required**
  * WindowExecutionId **required**

#### Output
* output [DescribeMaintenanceWindowExecutionTaskInvocationsResult](#describemaintenancewindowexecutiontaskinvocationsresult)

### DescribeMaintenanceWindowExecutionTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutionTasks({
  "WindowExecutionId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * WindowExecutionId **required**

#### Output
* output [DescribeMaintenanceWindowExecutionTasksResult](#describemaintenancewindowexecutiontasksresult)

### DescribeMaintenanceWindowExecutions



```js
amazonaws_ssm.DescribeMaintenanceWindowExecutions({
  "WindowId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * WindowId **required**

#### Output
* output [DescribeMaintenanceWindowExecutionsResult](#describemaintenancewindowexecutionsresult)

### DescribeMaintenanceWindowSchedule



```js
amazonaws_ssm.DescribeMaintenanceWindowSchedule({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * MaxResults
  * NextToken
  * ResourceType
  * Targets
    * items [Target](#target)
  * WindowId

#### Output
* output [DescribeMaintenanceWindowScheduleResult](#describemaintenancewindowscheduleresult)

### DescribeMaintenanceWindowTargets



```js
amazonaws_ssm.DescribeMaintenanceWindowTargets({
  "WindowId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * WindowId **required**

#### Output
* output [DescribeMaintenanceWindowTargetsResult](#describemaintenancewindowtargetsresult)

### DescribeMaintenanceWindowTasks



```js
amazonaws_ssm.DescribeMaintenanceWindowTasks({
  "WindowId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * WindowId **required**

#### Output
* output [DescribeMaintenanceWindowTasksResult](#describemaintenancewindowtasksresult)

### DescribeMaintenanceWindows



```js
amazonaws_ssm.DescribeMaintenanceWindows({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken

#### Output
* output [DescribeMaintenanceWindowsResult](#describemaintenancewindowsresult)

### DescribeMaintenanceWindowsForTarget



```js
amazonaws_ssm.DescribeMaintenanceWindowsForTarget({
  "Targets": null,
  "ResourceType": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceType **required**
  * Targets **required**
    * items [Target](#target)

#### Output
* output [DescribeMaintenanceWindowsForTargetResult](#describemaintenancewindowsfortargetresult)

### DescribeOpsItems



```js
amazonaws_ssm.DescribeOpsItems({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * OpsItemFilters
    * items [OpsItemFilter](#opsitemfilter)

#### Output
* output [DescribeOpsItemsResponse](#describeopsitemsresponse)

### DescribeParameters



```js
amazonaws_ssm.DescribeParameters({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [ParametersFilter](#parametersfilter)
  * MaxResults
  * NextToken
  * ParameterFilters
    * items [ParameterStringFilter](#parameterstringfilter)

#### Output
* output [DescribeParametersResult](#describeparametersresult)

### DescribePatchBaselines



```js
amazonaws_ssm.DescribePatchBaselines({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * MaxResults
  * NextToken

#### Output
* output [DescribePatchBaselinesResult](#describepatchbaselinesresult)

### DescribePatchGroupState



```js
amazonaws_ssm.DescribePatchGroupState({
  "PatchGroup": null
}, context)
```

#### Input
* input `object`
  * PatchGroup **required**

#### Output
* output [DescribePatchGroupStateResult](#describepatchgroupstateresult)

### DescribePatchGroups



```js
amazonaws_ssm.DescribePatchGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * MaxResults
  * NextToken

#### Output
* output [DescribePatchGroupsResult](#describepatchgroupsresult)

### DescribePatchProperties



```js
amazonaws_ssm.DescribePatchProperties({
  "OperatingSystem": null,
  "Property": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * OperatingSystem **required**
  * PatchSet
  * Property **required**

#### Output
* output [DescribePatchPropertiesResult](#describepatchpropertiesresult)

### DescribeSessions



```js
amazonaws_ssm.DescribeSessions({
  "State": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [SessionFilter](#sessionfilter)
  * MaxResults
  * NextToken
  * State **required**

#### Output
* output [DescribeSessionsResponse](#describesessionsresponse)

### GetAutomationExecution



```js
amazonaws_ssm.GetAutomationExecution({
  "AutomationExecutionId": null
}, context)
```

#### Input
* input `object`
  * AutomationExecutionId **required**

#### Output
* output [GetAutomationExecutionResult](#getautomationexecutionresult)

### GetCalendarState



```js
amazonaws_ssm.GetCalendarState({
  "CalendarNames": null
}, context)
```

#### Input
* input `object`
  * AtTime
  * CalendarNames **required**
    * items [CalendarNameOrARN](#calendarnameorarn)

#### Output
* output [GetCalendarStateResponse](#getcalendarstateresponse)

### GetCommandInvocation



```js
amazonaws_ssm.GetCommandInvocation({
  "CommandId": null,
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * CommandId **required**
  * InstanceId **required**
  * PluginName

#### Output
* output [GetCommandInvocationResult](#getcommandinvocationresult)

### GetConnectionStatus



```js
amazonaws_ssm.GetConnectionStatus({
  "Target": null
}, context)
```

#### Input
* input `object`
  * Target **required**

#### Output
* output [GetConnectionStatusResponse](#getconnectionstatusresponse)

### GetDefaultPatchBaseline



```js
amazonaws_ssm.GetDefaultPatchBaseline({}, context)
```

#### Input
* input `object`
  * OperatingSystem

#### Output
* output [GetDefaultPatchBaselineResult](#getdefaultpatchbaselineresult)

### GetDeployablePatchSnapshotForInstance



```js
amazonaws_ssm.GetDeployablePatchSnapshotForInstance({
  "InstanceId": null,
  "SnapshotId": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**
  * SnapshotId **required**

#### Output
* output [GetDeployablePatchSnapshotForInstanceResult](#getdeployablepatchsnapshotforinstanceresult)

### GetDocument



```js
amazonaws_ssm.GetDocument({
  "Name": null
}, context)
```

#### Input
* input `object`
  * DocumentFormat
  * DocumentVersion
  * Name **required**
  * VersionName

#### Output
* output [GetDocumentResult](#getdocumentresult)

### GetInventory



```js
amazonaws_ssm.GetInventory({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Aggregators
    * items [InventoryAggregator](#inventoryaggregator)
  * Filters
    * items [InventoryFilter](#inventoryfilter)
  * MaxResults
  * NextToken
  * ResultAttributes
    * items [ResultAttribute](#resultattribute)

#### Output
* output [GetInventoryResult](#getinventoryresult)

### GetInventorySchema



```js
amazonaws_ssm.GetInventorySchema({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Aggregator
  * MaxResults
  * NextToken
  * SubType
  * TypeName

#### Output
* output [GetInventorySchemaResult](#getinventoryschemaresult)

### GetMaintenanceWindow



```js
amazonaws_ssm.GetMaintenanceWindow({
  "WindowId": null
}, context)
```

#### Input
* input `object`
  * WindowId **required**

#### Output
* output [GetMaintenanceWindowResult](#getmaintenancewindowresult)

### GetMaintenanceWindowExecution



```js
amazonaws_ssm.GetMaintenanceWindowExecution({
  "WindowExecutionId": null
}, context)
```

#### Input
* input `object`
  * WindowExecutionId **required**

#### Output
* output [GetMaintenanceWindowExecutionResult](#getmaintenancewindowexecutionresult)

### GetMaintenanceWindowExecutionTask



```js
amazonaws_ssm.GetMaintenanceWindowExecutionTask({
  "WindowExecutionId": null,
  "TaskId": null
}, context)
```

#### Input
* input `object`
  * TaskId **required**
  * WindowExecutionId **required**

#### Output
* output [GetMaintenanceWindowExecutionTaskResult](#getmaintenancewindowexecutiontaskresult)

### GetMaintenanceWindowExecutionTaskInvocation



```js
amazonaws_ssm.GetMaintenanceWindowExecutionTaskInvocation({
  "WindowExecutionId": null,
  "TaskId": null,
  "InvocationId": null
}, context)
```

#### Input
* input `object`
  * InvocationId **required**
  * TaskId **required**
  * WindowExecutionId **required**

#### Output
* output [GetMaintenanceWindowExecutionTaskInvocationResult](#getmaintenancewindowexecutiontaskinvocationresult)

### GetMaintenanceWindowTask



```js
amazonaws_ssm.GetMaintenanceWindowTask({
  "WindowId": null,
  "WindowTaskId": null
}, context)
```

#### Input
* input `object`
  * WindowId **required**
  * WindowTaskId **required**

#### Output
* output [GetMaintenanceWindowTaskResult](#getmaintenancewindowtaskresult)

### GetOpsItem



```js
amazonaws_ssm.GetOpsItem({
  "OpsItemId": null
}, context)
```

#### Input
* input `object`
  * OpsItemId **required**

#### Output
* output [GetOpsItemResponse](#getopsitemresponse)

### GetOpsMetadata



```js
amazonaws_ssm.GetOpsMetadata({
  "OpsMetadataArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken
  * OpsMetadataArn **required**

#### Output
* output [GetOpsMetadataResult](#getopsmetadataresult)

### GetOpsSummary



```js
amazonaws_ssm.GetOpsSummary({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Aggregators
    * items [OpsAggregator](#opsaggregator)
  * Filters
    * items [OpsFilter](#opsfilter)
  * MaxResults
  * NextToken
  * ResultAttributes
    * items [OpsResultAttribute](#opsresultattribute)
  * SyncName

#### Output
* output [GetOpsSummaryResult](#getopssummaryresult)

### GetParameter



```js
amazonaws_ssm.GetParameter({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * WithDecryption

#### Output
* output [GetParameterResult](#getparameterresult)

### GetParameterHistory



```js
amazonaws_ssm.GetParameterHistory({
  "Name": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * Name **required**
  * NextToken
  * WithDecryption

#### Output
* output [GetParameterHistoryResult](#getparameterhistoryresult)

### GetParameters



```js
amazonaws_ssm.GetParameters({
  "Names": null
}, context)
```

#### Input
* input `object`
  * Names **required**
    * items [PSParameterName](#psparametername)
  * WithDecryption

#### Output
* output [GetParametersResult](#getparametersresult)

### GetParametersByPath



```js
amazonaws_ssm.GetParametersByPath({
  "Path": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ParameterFilters
    * items [ParameterStringFilter](#parameterstringfilter)
  * Path **required**
  * Recursive
  * WithDecryption

#### Output
* output [GetParametersByPathResult](#getparametersbypathresult)

### GetPatchBaseline



```js
amazonaws_ssm.GetPatchBaseline({
  "BaselineId": null
}, context)
```

#### Input
* input `object`
  * BaselineId **required**

#### Output
* output [GetPatchBaselineResult](#getpatchbaselineresult)

### GetPatchBaselineForPatchGroup



```js
amazonaws_ssm.GetPatchBaselineForPatchGroup({
  "PatchGroup": null
}, context)
```

#### Input
* input `object`
  * OperatingSystem
  * PatchGroup **required**

#### Output
* output [GetPatchBaselineForPatchGroupResult](#getpatchbaselineforpatchgroupresult)

### GetServiceSetting



```js
amazonaws_ssm.GetServiceSetting({
  "SettingId": null
}, context)
```

#### Input
* input `object`
  * SettingId **required**

#### Output
* output [GetServiceSettingResult](#getservicesettingresult)

### LabelParameterVersion



```js
amazonaws_ssm.LabelParameterVersion({
  "Name": null,
  "Labels": null
}, context)
```

#### Input
* input `object`
  * Labels **required**
    * items [ParameterLabel](#parameterlabel)
  * Name **required**
  * ParameterVersion

#### Output
* output [LabelParameterVersionResult](#labelparameterversionresult)

### ListAssociationVersions



```js
amazonaws_ssm.ListAssociationVersions({
  "AssociationId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssociationId **required**
  * MaxResults
  * NextToken

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
  * AssociationFilterList
    * items [AssociationFilter](#associationfilter)
  * MaxResults
  * NextToken

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
  * CommandId
  * Details
  * Filters
    * items [CommandFilter](#commandfilter)
  * InstanceId
  * MaxResults
  * NextToken

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
  * CommandId
  * Filters
    * items [CommandFilter](#commandfilter)
  * InstanceId
  * MaxResults
  * NextToken

#### Output
* output [ListCommandsResult](#listcommandsresult)

### ListComplianceItems



```js
amazonaws_ssm.ListComplianceItems({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [ComplianceStringFilter](#compliancestringfilter)
  * MaxResults
  * NextToken
  * ResourceIds
    * items [ComplianceResourceId](#complianceresourceid)
  * ResourceTypes
    * items [ComplianceResourceType](#complianceresourcetype)

#### Output
* output [ListComplianceItemsResult](#listcomplianceitemsresult)

### ListComplianceSummaries



```js
amazonaws_ssm.ListComplianceSummaries({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [ComplianceStringFilter](#compliancestringfilter)
  * MaxResults
  * NextToken

#### Output
* output [ListComplianceSummariesResult](#listcompliancesummariesresult)

### ListDocumentMetadataHistory



```js
amazonaws_ssm.ListDocumentMetadataHistory({
  "Name": null,
  "Metadata": null
}, context)
```

#### Input
* input `object`
  * DocumentVersion
  * MaxResults
  * Metadata **required**
  * Name **required**
  * NextToken

#### Output
* output [ListDocumentMetadataHistoryResponse](#listdocumentmetadatahistoryresponse)

### ListDocumentVersions



```js
amazonaws_ssm.ListDocumentVersions({
  "Name": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * Name **required**
  * NextToken

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
  * DocumentFilterList
    * items [DocumentFilter](#documentfilter)
  * Filters
    * items [DocumentKeyValuesFilter](#documentkeyvaluesfilter)
  * MaxResults
  * NextToken

#### Output
* output [ListDocumentsResult](#listdocumentsresult)

### ListInventoryEntries



```js
amazonaws_ssm.ListInventoryEntries({
  "InstanceId": null,
  "TypeName": null
}, context)
```

#### Input
* input `object`
  * Filters
    * items [InventoryFilter](#inventoryfilter)
  * InstanceId **required**
  * MaxResults
  * NextToken
  * TypeName **required**

#### Output
* output [ListInventoryEntriesResult](#listinventoryentriesresult)

### ListOpsItemEvents



```js
amazonaws_ssm.ListOpsItemEvents({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [OpsItemEventFilter](#opsitemeventfilter)
  * MaxResults
  * NextToken

#### Output
* output [ListOpsItemEventsResponse](#listopsitemeventsresponse)

### ListOpsMetadata



```js
amazonaws_ssm.ListOpsMetadata({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [OpsMetadataFilter](#opsmetadatafilter)
  * MaxResults
  * NextToken

#### Output
* output [ListOpsMetadataResult](#listopsmetadataresult)

### ListResourceComplianceSummaries



```js
amazonaws_ssm.ListResourceComplianceSummaries({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [ComplianceStringFilter](#compliancestringfilter)
  * MaxResults
  * NextToken

#### Output
* output [ListResourceComplianceSummariesResult](#listresourcecompliancesummariesresult)

### ListResourceDataSync



```js
amazonaws_ssm.ListResourceDataSync({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * SyncType

#### Output
* output [ListResourceDataSyncResult](#listresourcedatasyncresult)

### ListTagsForResource



```js
amazonaws_ssm.ListTagsForResource({
  "ResourceType": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * ResourceType **required**

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)

### ModifyDocumentPermission



```js
amazonaws_ssm.ModifyDocumentPermission({
  "Name": null,
  "PermissionType": null
}, context)
```

#### Input
* input `object`
  * AccountIdsToAdd
    * items [AccountId](#accountid)
  * AccountIdsToRemove
    * items [AccountId](#accountid)
  * Name **required**
  * PermissionType **required**
  * SharedDocumentVersion

#### Output
* output [ModifyDocumentPermissionResponse](#modifydocumentpermissionresponse)

### PutComplianceItems



```js
amazonaws_ssm.PutComplianceItems({
  "ResourceId": null,
  "ResourceType": null,
  "ComplianceType": null,
  "ExecutionSummary": null,
  "Items": null
}, context)
```

#### Input
* input `object`
  * ComplianceType **required**
  * ExecutionSummary **required**
    * ExecutionId
    * ExecutionTime **required**
    * ExecutionType
  * ItemContentHash
  * Items **required**
    * items [ComplianceItemEntry](#complianceitementry)
  * ResourceId **required**
  * ResourceType **required**
  * UploadType

#### Output
* output [PutComplianceItemsResult](#putcomplianceitemsresult)

### PutInventory



```js
amazonaws_ssm.PutInventory({
  "InstanceId": null,
  "Items": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**
  * Items **required**
    * items [InventoryItem](#inventoryitem)

#### Output
* output [PutInventoryResult](#putinventoryresult)

### PutParameter



```js
amazonaws_ssm.PutParameter({
  "Name": null,
  "Value": null
}, context)
```

#### Input
* input `object`
  * AllowedPattern
  * DataType
  * Description
  * KeyId
  * Name **required**
  * Overwrite
  * Policies
  * Tags
    * items [Tag](#tag)
  * Tier
  * Type
  * Value **required**

#### Output
* output [PutParameterResult](#putparameterresult)

### RegisterDefaultPatchBaseline



```js
amazonaws_ssm.RegisterDefaultPatchBaseline({
  "BaselineId": null
}, context)
```

#### Input
* input `object`
  * BaselineId **required**

#### Output
* output [RegisterDefaultPatchBaselineResult](#registerdefaultpatchbaselineresult)

### RegisterPatchBaselineForPatchGroup



```js
amazonaws_ssm.RegisterPatchBaselineForPatchGroup({
  "BaselineId": null,
  "PatchGroup": null
}, context)
```

#### Input
* input `object`
  * BaselineId **required**
  * PatchGroup **required**

#### Output
* output [RegisterPatchBaselineForPatchGroupResult](#registerpatchbaselineforpatchgroupresult)

### RegisterTargetWithMaintenanceWindow



```js
amazonaws_ssm.RegisterTargetWithMaintenanceWindow({
  "WindowId": null,
  "ResourceType": null,
  "Targets": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * Name
  * OwnerInformation
  * ResourceType **required**
  * Targets **required**
    * items [Target](#target)
  * WindowId **required**

#### Output
* output [RegisterTargetWithMaintenanceWindowResult](#registertargetwithmaintenancewindowresult)

### RegisterTaskWithMaintenanceWindow



```js
amazonaws_ssm.RegisterTaskWithMaintenanceWindow({
  "WindowId": null,
  "Targets": null,
  "TaskArn": null,
  "TaskType": null,
  "MaxConcurrency": null,
  "MaxErrors": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * LoggingInfo
    * S3BucketName **required**
    * S3KeyPrefix
    * S3Region **required**
  * MaxConcurrency **required**
  * MaxErrors **required**
  * Name
  * Priority
  * ServiceRoleArn
  * Targets **required**
    * items [Target](#target)
  * TaskArn **required**
  * TaskInvocationParameters
    * Automation
      * DocumentVersion
      * Parameters
    * Lambda
      * ClientContext
      * Payload
      * Qualifier
    * RunCommand
      * CloudWatchOutputConfig [CloudWatchOutputConfig](#cloudwatchoutputconfig)
      * Comment
      * DocumentHash
      * DocumentHashType
      * DocumentVersion
      * NotificationConfig
        * NotificationArn
        * NotificationEvents
          * items [NotificationEvent](#notificationevent)
        * NotificationType
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * Parameters
      * ServiceRoleArn
      * TimeoutSeconds
    * StepFunctions
      * Input
      * Name
  * TaskParameters
  * TaskType **required**
  * WindowId **required**

#### Output
* output [RegisterTaskWithMaintenanceWindowResult](#registertaskwithmaintenancewindowresult)

### RemoveTagsFromResource



```js
amazonaws_ssm.RemoveTagsFromResource({
  "ResourceType": null,
  "ResourceId": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * ResourceType **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [RemoveTagsFromResourceResult](#removetagsfromresourceresult)

### ResetServiceSetting



```js
amazonaws_ssm.ResetServiceSetting({
  "SettingId": null
}, context)
```

#### Input
* input `object`
  * SettingId **required**

#### Output
* output [ResetServiceSettingResult](#resetservicesettingresult)

### ResumeSession



```js
amazonaws_ssm.ResumeSession({
  "SessionId": null
}, context)
```

#### Input
* input `object`
  * SessionId **required**

#### Output
* output [ResumeSessionResponse](#resumesessionresponse)

### SendAutomationSignal



```js
amazonaws_ssm.SendAutomationSignal({
  "AutomationExecutionId": null,
  "SignalType": null
}, context)
```

#### Input
* input `object`
  * AutomationExecutionId **required**
  * Payload
  * SignalType **required**

#### Output
* output [SendAutomationSignalResult](#sendautomationsignalresult)

### SendCommand



```js
amazonaws_ssm.SendCommand({
  "DocumentName": null
}, context)
```

#### Input
* input `object`
  * CloudWatchOutputConfig
    * CloudWatchLogGroupName
    * CloudWatchOutputEnabled
  * Comment
  * DocumentHash
  * DocumentHashType
  * DocumentName **required**
  * DocumentVersion
  * InstanceIds
    * items [InstanceId](#instanceid)
  * MaxConcurrency
  * MaxErrors
  * NotificationConfig
    * NotificationArn
    * NotificationEvents
      * items [NotificationEvent](#notificationevent)
    * NotificationType
  * OutputS3BucketName
  * OutputS3KeyPrefix
  * OutputS3Region
  * Parameters
  * ServiceRoleArn
  * Targets
    * items [Target](#target)
  * TimeoutSeconds

#### Output
* output [SendCommandResult](#sendcommandresult)

### StartAssociationsOnce



```js
amazonaws_ssm.StartAssociationsOnce({
  "AssociationIds": null
}, context)
```

#### Input
* input `object`
  * AssociationIds **required**
    * items [AssociationId](#associationid)

#### Output
* output [StartAssociationsOnceResult](#startassociationsonceresult)

### StartAutomationExecution



```js
amazonaws_ssm.StartAutomationExecution({
  "DocumentName": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DocumentName **required**
  * DocumentVersion
  * MaxConcurrency
  * MaxErrors
  * Mode
  * Parameters
  * Tags
    * items [Tag](#tag)
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * TargetMaps
    * items [TargetMap](#targetmap)
  * TargetParameterName
  * Targets
    * items [Target](#target)

#### Output
* output [StartAutomationExecutionResult](#startautomationexecutionresult)

### StartChangeRequestExecution



```js
amazonaws_ssm.StartChangeRequestExecution({
  "DocumentName": null,
  "Runbooks": null
}, context)
```

#### Input
* input `object`
  * ChangeRequestName
  * ClientToken
  * DocumentName **required**
  * DocumentVersion
  * Parameters
  * Runbooks **required**
    * items [Runbook](#runbook)
  * ScheduledTime
  * Tags
    * items [Tag](#tag)

#### Output
* output [StartChangeRequestExecutionResult](#startchangerequestexecutionresult)

### StartSession



```js
amazonaws_ssm.StartSession({
  "Target": null
}, context)
```

#### Input
* input `object`
  * DocumentName
  * Parameters
  * Target **required**

#### Output
* output [StartSessionResponse](#startsessionresponse)

### StopAutomationExecution



```js
amazonaws_ssm.StopAutomationExecution({
  "AutomationExecutionId": null
}, context)
```

#### Input
* input `object`
  * AutomationExecutionId **required**
  * Type

#### Output
* output [StopAutomationExecutionResult](#stopautomationexecutionresult)

### TerminateSession



```js
amazonaws_ssm.TerminateSession({
  "SessionId": null
}, context)
```

#### Input
* input `object`
  * SessionId **required**

#### Output
* output [TerminateSessionResponse](#terminatesessionresponse)

### UpdateAssociation



```js
amazonaws_ssm.UpdateAssociation({
  "AssociationId": null
}, context)
```

#### Input
* input `object`
  * ApplyOnlyAtCronInterval
  * AssociationId **required**
  * AssociationName
  * AssociationVersion
  * AutomationTargetParameterName
  * ComplianceSeverity
  * DocumentVersion
  * MaxConcurrency
  * MaxErrors
  * Name
  * OutputLocation
    * S3Location
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * OutputS3Region
  * Parameters
  * ScheduleExpression
  * SyncCompliance
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * Targets
    * items [Target](#target)

#### Output
* output [UpdateAssociationResult](#updateassociationresult)

### UpdateAssociationStatus



```js
amazonaws_ssm.UpdateAssociationStatus({
  "Name": null,
  "InstanceId": null,
  "AssociationStatus": null
}, context)
```

#### Input
* input `object`
  * AssociationStatus **required**
    * AdditionalInfo
    * Date **required**
    * Message **required**
    * Name **required**
  * InstanceId **required**
  * Name **required**

#### Output
* output [UpdateAssociationStatusResult](#updateassociationstatusresult)

### UpdateDocument



```js
amazonaws_ssm.UpdateDocument({
  "Content": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * Attachments
    * items [AttachmentsSource](#attachmentssource)
  * Content **required**
  * DocumentFormat
  * DocumentVersion
  * Name **required**
  * TargetType
  * VersionName

#### Output
* output [UpdateDocumentResult](#updatedocumentresult)

### UpdateDocumentDefaultVersion



```js
amazonaws_ssm.UpdateDocumentDefaultVersion({
  "Name": null,
  "DocumentVersion": null
}, context)
```

#### Input
* input `object`
  * DocumentVersion **required**
  * Name **required**

#### Output
* output [UpdateDocumentDefaultVersionResult](#updatedocumentdefaultversionresult)

### UpdateDocumentMetadata



```js
amazonaws_ssm.UpdateDocumentMetadata({
  "Name": null,
  "DocumentReviews": null
}, context)
```

#### Input
* input `object`
  * DocumentReviews **required**
    * Action **required**
    * Comment
      * items [DocumentReviewCommentSource](#documentreviewcommentsource)
  * DocumentVersion
  * Name **required**

#### Output
* output [UpdateDocumentMetadataResponse](#updatedocumentmetadataresponse)

### UpdateMaintenanceWindow



```js
amazonaws_ssm.UpdateMaintenanceWindow({
  "WindowId": null
}, context)
```

#### Input
* input `object`
  * AllowUnassociatedTargets
  * Cutoff
  * Description
  * Duration
  * Enabled
  * EndDate
  * Name
  * Replace
  * Schedule
  * ScheduleOffset
  * ScheduleTimezone
  * StartDate
  * WindowId **required**

#### Output
* output [UpdateMaintenanceWindowResult](#updatemaintenancewindowresult)

### UpdateMaintenanceWindowTarget



```js
amazonaws_ssm.UpdateMaintenanceWindowTarget({
  "WindowId": null,
  "WindowTargetId": null
}, context)
```

#### Input
* input `object`
  * Description
  * Name
  * OwnerInformation
  * Replace
  * Targets
    * items [Target](#target)
  * WindowId **required**
  * WindowTargetId **required**

#### Output
* output [UpdateMaintenanceWindowTargetResult](#updatemaintenancewindowtargetresult)

### UpdateMaintenanceWindowTask



```js
amazonaws_ssm.UpdateMaintenanceWindowTask({
  "WindowId": null,
  "WindowTaskId": null
}, context)
```

#### Input
* input `object`
  * Description
  * LoggingInfo
    * S3BucketName **required**
    * S3KeyPrefix
    * S3Region **required**
  * MaxConcurrency
  * MaxErrors
  * Name
  * Priority
  * Replace
  * ServiceRoleArn
  * Targets
    * items [Target](#target)
  * TaskArn
  * TaskInvocationParameters
    * Automation
      * DocumentVersion
      * Parameters
    * Lambda
      * ClientContext
      * Payload
      * Qualifier
    * RunCommand
      * CloudWatchOutputConfig [CloudWatchOutputConfig](#cloudwatchoutputconfig)
      * Comment
      * DocumentHash
      * DocumentHashType
      * DocumentVersion
      * NotificationConfig
        * NotificationArn
        * NotificationEvents
          * items [NotificationEvent](#notificationevent)
        * NotificationType
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * Parameters
      * ServiceRoleArn
      * TimeoutSeconds
    * StepFunctions
      * Input
      * Name
  * TaskParameters
  * WindowId **required**
  * WindowTaskId **required**

#### Output
* output [UpdateMaintenanceWindowTaskResult](#updatemaintenancewindowtaskresult)

### UpdateManagedInstanceRole



```js
amazonaws_ssm.UpdateManagedInstanceRole({
  "InstanceId": null,
  "IamRole": null
}, context)
```

#### Input
* input `object`
  * IamRole **required**
  * InstanceId **required**

#### Output
* output [UpdateManagedInstanceRoleResult](#updatemanagedinstanceroleresult)

### UpdateOpsItem



```js
amazonaws_ssm.UpdateOpsItem({
  "OpsItemId": null
}, context)
```

#### Input
* input `object`
  * ActualEndTime
  * ActualStartTime
  * Category
  * Description
  * Notifications
    * items [OpsItemNotification](#opsitemnotification)
  * OperationalData
  * OperationalDataToDelete
    * items [String](#string)
  * OpsItemId **required**
  * PlannedEndTime
  * PlannedStartTime
  * Priority
  * RelatedOpsItems
    * items [RelatedOpsItem](#relatedopsitem)
  * Severity
  * Status
  * Title

#### Output
* output [UpdateOpsItemResponse](#updateopsitemresponse)

### UpdateOpsMetadata



```js
amazonaws_ssm.UpdateOpsMetadata({
  "OpsMetadataArn": null
}, context)
```

#### Input
* input `object`
  * KeysToDelete
    * items [MetadataKey](#metadatakey)
  * MetadataToUpdate
  * OpsMetadataArn **required**

#### Output
* output [UpdateOpsMetadataResult](#updateopsmetadataresult)

### UpdatePatchBaseline



```js
amazonaws_ssm.UpdatePatchBaseline({
  "BaselineId": null
}, context)
```

#### Input
* input `object`
  * ApprovalRules
    * PatchRules **required**
      * items [PatchRule](#patchrule)
  * ApprovedPatches
    * items [PatchId](#patchid)
  * ApprovedPatchesComplianceLevel
  * ApprovedPatchesEnableNonSecurity
  * BaselineId **required**
  * Description
  * GlobalFilters
    * PatchFilters **required**
      * items [PatchFilter](#patchfilter)
  * Name
  * RejectedPatches
    * items [PatchId](#patchid)
  * RejectedPatchesAction
  * Replace
  * Sources
    * items [PatchSource](#patchsource)

#### Output
* output [UpdatePatchBaselineResult](#updatepatchbaselineresult)

### UpdateResourceDataSync



```js
amazonaws_ssm.UpdateResourceDataSync({
  "SyncName": null,
  "SyncType": null,
  "SyncSource": null
}, context)
```

#### Input
* input `object`
  * SyncName **required**
  * SyncSource **required**
    * AwsOrganizationsSource
      * OrganizationSourceType **required**
      * OrganizationalUnits
        * items [ResourceDataSyncOrganizationalUnit](#resourcedatasyncorganizationalunit)
    * IncludeFutureRegions
    * SourceRegions **required**
      * items [ResourceDataSyncSourceRegion](#resourcedatasyncsourceregion)
    * SourceType **required**
  * SyncType **required**

#### Output
* output [UpdateResourceDataSyncResult](#updateresourcedatasyncresult)

### UpdateServiceSetting



```js
amazonaws_ssm.UpdateServiceSetting({
  "SettingId": null,
  "SettingValue": null
}, context)
```

#### Input
* input `object`
  * SettingId **required**
  * SettingValue **required**

#### Output
* output [UpdateServiceSettingResult](#updateservicesettingresult)



## Definitions

### Account
* Account `string`

### AccountId
* AccountId `string`

### AccountIdList
* AccountIdList `array`
  * items [AccountId](#accountid)

### AccountSharingInfo
* AccountSharingInfo `object`: Information includes the AWS account ID where the current document is shared and the version shared with that account.
  * AccountId
  * SharedDocumentVersion

### AccountSharingInfoList
* AccountSharingInfoList `array`: A list of of AWS accounts where the current document is shared and the version shared with each account.
  * items [AccountSharingInfo](#accountsharinginfo)

### Accounts
* Accounts `array`
  * items [Account](#account)

### Activation
* Activation `object`: An activation registers one or more on-premises servers or virtual machines (VMs) with AWS so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with AWS is called a managed instance.
  * ActivationId
  * CreatedDate
  * DefaultInstanceName
  * Description
  * ExpirationDate
  * Expired
  * IamRole
  * RegistrationLimit
  * RegistrationsCount
  * Tags
    * items [Tag](#tag)

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
  * ResourceId **required**
  * ResourceType **required**
  * Tags **required**
    * items [Tag](#tag)

### AddTagsToResourceResult
* AddTagsToResourceResult `object`

### AgentErrorCode
* AgentErrorCode `string`

### AggregatorSchemaOnly
* AggregatorSchemaOnly `boolean`

### AllowedPattern
* AllowedPattern `string`

### AlreadyExistsException


### ApplyOnlyAtCronInterval
* ApplyOnlyAtCronInterval `boolean`

### ApproveAfterDays
* ApproveAfterDays `integer`

### AssociatedInstances


### Association
* Association `object`: Describes an association of a Systems Manager document and an instance.
  * AssociationId
  * AssociationName
  * AssociationVersion
  * DocumentVersion
  * InstanceId
  * LastExecutionDate
  * Name
  * Overview
    * AssociationStatusAggregatedCount
    * DetailedStatus
    * Status
  * ScheduleExpression
  * Targets
    * items [Target](#target)

### AssociationAlreadyExists


### AssociationComplianceSeverity
* AssociationComplianceSeverity `string` (values: CRITICAL, HIGH, MEDIUM, LOW, UNSPECIFIED)

### AssociationDescription
* AssociationDescription `object`: Describes the parameters for a document.
  * ApplyOnlyAtCronInterval
  * AssociationId
  * AssociationName
  * AssociationVersion
  * AutomationTargetParameterName
  * ComplianceSeverity
  * Date
  * DocumentVersion
  * InstanceId
  * LastExecutionDate
  * LastSuccessfulExecutionDate
  * LastUpdateAssociationDate
  * MaxConcurrency
  * MaxErrors
  * Name
  * OutputLocation
    * S3Location
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * OutputS3Region
  * Overview
    * AssociationStatusAggregatedCount
    * DetailedStatus
    * Status
  * Parameters
  * ScheduleExpression
  * Status
    * AdditionalInfo
    * Date **required**
    * Message **required**
    * Name **required**
  * SyncCompliance
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * Targets
    * items [Target](#target)

### AssociationDescriptionList
* AssociationDescriptionList `array`
  * items [AssociationDescription](#associationdescription)

### AssociationDoesNotExist


### AssociationExecution
* AssociationExecution `object`: Includes information about the specified association.
  * AssociationId
  * AssociationVersion
  * CreatedTime
  * DetailedStatus
  * ExecutionId
  * LastExecutionDate
  * ResourceCountByStatus
  * Status

### AssociationExecutionDoesNotExist


### AssociationExecutionFilter
* AssociationExecutionFilter `object`: Filters used in the request.
  * Key **required**
  * Type **required**
  * Value **required**

### AssociationExecutionFilterKey
* AssociationExecutionFilterKey `string` (values: ExecutionId, Status, CreatedTime)

### AssociationExecutionFilterList
* AssociationExecutionFilterList `array`
  * items [AssociationExecutionFilter](#associationexecutionfilter)

### AssociationExecutionFilterValue
* AssociationExecutionFilterValue `string`

### AssociationExecutionId
* AssociationExecutionId `string`

### AssociationExecutionTarget
* AssociationExecutionTarget `object`: Includes information about the specified association execution.
  * AssociationId
  * AssociationVersion
  * DetailedStatus
  * ExecutionId
  * LastExecutionDate
  * OutputSource
    * OutputSourceId
    * OutputSourceType
  * ResourceId
  * ResourceType
  * Status

### AssociationExecutionTargetsFilter
* AssociationExecutionTargetsFilter `object`: Filters for the association execution.
  * Key **required**
  * Value **required**

### AssociationExecutionTargetsFilterKey
* AssociationExecutionTargetsFilterKey `string` (values: Status, ResourceId, ResourceType)

### AssociationExecutionTargetsFilterList
* AssociationExecutionTargetsFilterList `array`
  * items [AssociationExecutionTargetsFilter](#associationexecutiontargetsfilter)

### AssociationExecutionTargetsFilterValue
* AssociationExecutionTargetsFilterValue `string`

### AssociationExecutionTargetsList
* AssociationExecutionTargetsList `array`
  * items [AssociationExecutionTarget](#associationexecutiontarget)

### AssociationExecutionsList
* AssociationExecutionsList `array`
  * items [AssociationExecution](#associationexecution)

### AssociationFilter
* AssociationFilter `object`: Describes a filter.
  * key **required**
  * value **required**

### AssociationFilterKey
* AssociationFilterKey `string` (values: InstanceId, Name, AssociationId, AssociationStatusName, LastExecutedBefore, LastExecutedAfter, AssociationName, ResourceGroupName)

### AssociationFilterList
* AssociationFilterList `array`
  * items [AssociationFilter](#associationfilter)

### AssociationFilterOperatorType
* AssociationFilterOperatorType `string` (values: EQUAL, LESS_THAN, GREATER_THAN)

### AssociationFilterValue
* AssociationFilterValue `string`

### AssociationId
* AssociationId `string`

### AssociationIdList
* AssociationIdList `array`
  * items [AssociationId](#associationid)

### AssociationLimitExceeded


### AssociationList
* AssociationList `array`
  * items [Association](#association)

### AssociationName
* AssociationName `string`

### AssociationOverview
* AssociationOverview `object`: Information about the association.
  * AssociationStatusAggregatedCount
  * DetailedStatus
  * Status

### AssociationResourceId
* AssociationResourceId `string`

### AssociationResourceType
* AssociationResourceType `string`

### AssociationStatus
* AssociationStatus `object`: Describes an association status.
  * AdditionalInfo
  * Date **required**
  * Message **required**
  * Name **required**

### AssociationStatusAggregatedCount
* AssociationStatusAggregatedCount `object`

### AssociationStatusName
* AssociationStatusName `string` (values: Pending, Success, Failed)

### AssociationSyncCompliance
* AssociationSyncCompliance `string` (values: AUTO, MANUAL)

### AssociationVersion
* AssociationVersion `string`

### AssociationVersionInfo
* AssociationVersionInfo `object`: Information about the association version.
  * ApplyOnlyAtCronInterval
  * AssociationId
  * AssociationName
  * AssociationVersion
  * ComplianceSeverity
  * CreatedDate
  * DocumentVersion
  * MaxConcurrency
  * MaxErrors
  * Name
  * OutputLocation
    * S3Location
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * OutputS3Region
  * Parameters
  * ScheduleExpression
  * SyncCompliance
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * Targets
    * items [Target](#target)

### AssociationVersionLimitExceeded


### AssociationVersionList
* AssociationVersionList `array`
  * items [AssociationVersionInfo](#associationversioninfo)

### AttachmentContent
* AttachmentContent `object`: A structure that includes attributes that describe a document attachment.
  * Hash
  * HashType
  * Name
  * Size
  * Url

### AttachmentContentList
* AttachmentContentList `array`
  * items [AttachmentContent](#attachmentcontent)

### AttachmentHash
* AttachmentHash `string`

### AttachmentHashType
* AttachmentHashType `string` (values: Sha256)

### AttachmentIdentifier
* AttachmentIdentifier `string`

### AttachmentInformation
* AttachmentInformation `object`: An attribute of an attachment, such as the attachment name.
  * Name

### AttachmentInformationList
* AttachmentInformationList `array`
  * items [AttachmentInformation](#attachmentinformation)

### AttachmentName
* AttachmentName `string`

### AttachmentUrl
* AttachmentUrl `string`

### AttachmentsSource
* AttachmentsSource `object`: Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
  * Key
  * Name
  * Values
    * items [AttachmentsSourceValue](#attachmentssourcevalue)

### AttachmentsSourceKey
* AttachmentsSourceKey `string` (values: SourceUrl, S3FileUrl, AttachmentReference)

### AttachmentsSourceList
* AttachmentsSourceList `array`
  * items [AttachmentsSource](#attachmentssource)

### AttachmentsSourceValue
* AttachmentsSourceValue `string`

### AttachmentsSourceValues
* AttachmentsSourceValues `array`
  * items [AttachmentsSourceValue](#attachmentssourcevalue)

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### AutomationActionName
* AutomationActionName `string`

### AutomationDefinitionNotApprovedException


### AutomationDefinitionNotFoundException


### AutomationDefinitionVersionNotFoundException


### AutomationExecution
* AutomationExecution `object`: Detailed information about the current state of an individual Automation execution.
  * AssociationId
  * AutomationExecutionId
  * AutomationExecutionStatus
  * AutomationSubtype
  * ChangeRequestName
  * CurrentAction
  * CurrentStepName
  * DocumentName
  * DocumentVersion
  * ExecutedBy
  * ExecutionEndTime
  * ExecutionStartTime
  * FailureMessage
  * MaxConcurrency
  * MaxErrors
  * Mode
  * OpsItemId
  * Outputs
  * Parameters
  * ParentAutomationExecutionId
  * ProgressCounters
    * CancelledSteps
    * FailedSteps
    * SuccessSteps
    * TimedOutSteps
    * TotalSteps
  * ResolvedTargets
    * ParameterValues
      * items [ParameterValue](#parametervalue)
    * Truncated
  * Runbooks
    * items [Runbook](#runbook)
  * ScheduledTime
  * StepExecutions
    * items [StepExecution](#stepexecution)
  * StepExecutionsTruncated
  * Target
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * TargetMaps
    * items [TargetMap](#targetmap)
  * TargetParameterName
  * Targets
    * items [Target](#target)

### AutomationExecutionFilter
* AutomationExecutionFilter `object`: A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.
  * Key **required**
  * Values **required**
    * items [AutomationExecutionFilterValue](#automationexecutionfiltervalue)

### AutomationExecutionFilterKey
* AutomationExecutionFilterKey `string` (values: DocumentNamePrefix, ExecutionStatus, ExecutionId, ParentExecutionId, CurrentAction, StartTimeBefore, StartTimeAfter, AutomationType, TagKey, TargetResourceGroup, AutomationSubtype, OpsItemId)

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


### AutomationExecutionMetadata
* AutomationExecutionMetadata `object`: Details about a specific Automation execution.
  * AssociationId
  * AutomationExecutionId
  * AutomationExecutionStatus
  * AutomationSubtype
  * AutomationType
  * ChangeRequestName
  * CurrentAction
  * CurrentStepName
  * DocumentName
  * DocumentVersion
  * ExecutedBy
  * ExecutionEndTime
  * ExecutionStartTime
  * FailureMessage
  * LogFile
  * MaxConcurrency
  * MaxErrors
  * Mode
  * OpsItemId
  * Outputs
  * ParentAutomationExecutionId
  * ResolvedTargets
    * ParameterValues
      * items [ParameterValue](#parametervalue)
    * Truncated
  * Runbooks
    * items [Runbook](#runbook)
  * ScheduledTime
  * Target
  * TargetMaps
    * items [TargetMap](#targetmap)
  * TargetParameterName
  * Targets
    * items [Target](#target)

### AutomationExecutionMetadataList
* AutomationExecutionMetadataList `array`
  * items [AutomationExecutionMetadata](#automationexecutionmetadata)

### AutomationExecutionNotFoundException


### AutomationExecutionStatus
* AutomationExecutionStatus `string` (values: Pending, InProgress, Waiting, Success, TimedOut, Cancelling, Cancelled, Failed, PendingApproval, Approved, Rejected, Scheduled, RunbookInProgress, PendingChangeCalendarOverride, ChangeCalendarOverrideApproved, ChangeCalendarOverrideRejected, CompletedWithSuccess, CompletedWithFailure)

### AutomationParameterKey
* AutomationParameterKey `string`

### AutomationParameterMap
* AutomationParameterMap `object`

### AutomationParameterValue
* AutomationParameterValue `string`

### AutomationParameterValueList
* AutomationParameterValueList `array`
  * items [AutomationParameterValue](#automationparametervalue)

### AutomationStepNotFoundException


### AutomationSubtype
* AutomationSubtype `string` (values: ChangeRequest)

### AutomationTargetParameterName
* AutomationTargetParameterName `string`

### AutomationType
* AutomationType `string` (values: CrossAccount, Local)

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

### CalendarNameOrARN
* CalendarNameOrARN `string`

### CalendarNameOrARNList
* CalendarNameOrARNList `array`
  * items [CalendarNameOrARN](#calendarnameorarn)

### CalendarState
* CalendarState `string` (values: OPEN, CLOSED)

### CancelCommandRequest
* CancelCommandRequest `object`: <p/>
  * CommandId **required**
  * InstanceIds
    * items [InstanceId](#instanceid)

### CancelCommandResult
* CancelCommandResult `object`: Whether or not the command was successfully canceled. There is no guarantee that a request can be canceled.

### CancelMaintenanceWindowExecutionRequest
* CancelMaintenanceWindowExecutionRequest `object`
  * WindowExecutionId **required**

### CancelMaintenanceWindowExecutionResult
* CancelMaintenanceWindowExecutionResult `object`
  * WindowExecutionId

### ChangeRequestName
* ChangeRequestName `string`

### ClientToken
* ClientToken `string`

### CloudWatchLogGroupName
* CloudWatchLogGroupName `string`

### CloudWatchOutputConfig
* CloudWatchOutputConfig `object`: Configuration options for sending command output to CloudWatch Logs.
  * CloudWatchLogGroupName
  * CloudWatchOutputEnabled

### CloudWatchOutputEnabled
* CloudWatchOutputEnabled `boolean`

### Command
* Command `object`: Describes a command request.
  * CloudWatchOutputConfig
    * CloudWatchLogGroupName
    * CloudWatchOutputEnabled
  * CommandId
  * Comment
  * CompletedCount
  * DeliveryTimedOutCount
  * DocumentName
  * DocumentVersion
  * ErrorCount
  * ExpiresAfter
  * InstanceIds
    * items [InstanceId](#instanceid)
  * MaxConcurrency
  * MaxErrors
  * NotificationConfig
    * NotificationArn
    * NotificationEvents
      * items [NotificationEvent](#notificationevent)
    * NotificationType
  * OutputS3BucketName
  * OutputS3KeyPrefix
  * OutputS3Region
  * Parameters
  * RequestedDateTime
  * ServiceRole
  * Status
  * StatusDetails
  * TargetCount
  * Targets
    * items [Target](#target)
  * TimeoutSeconds

### CommandFilter
* CommandFilter `object`: <p>Describes a command filter.</p> <note> <p>An instance ID can't be specified when a command status is <code>Pending</code> because the command hasn't run on the instance yet.</p> </note>
  * key **required**
  * value **required**

### CommandFilterKey
* CommandFilterKey `string` (values: InvokedAfter, InvokedBefore, Status, ExecutionStage, DocumentName)

### CommandFilterList
* CommandFilterList `array`
  * items [CommandFilter](#commandfilter)

### CommandFilterValue
* CommandFilterValue `string`

### CommandId
* CommandId `string`

### CommandInvocation
* CommandInvocation `object`: An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran. 
  * CloudWatchOutputConfig
    * CloudWatchLogGroupName
    * CloudWatchOutputEnabled
  * CommandId
  * CommandPlugins [CommandPluginList](#commandpluginlist)
  * Comment
  * DocumentName
  * DocumentVersion
  * InstanceId
  * InstanceName
  * NotificationConfig
    * NotificationArn
    * NotificationEvents
      * items [NotificationEvent](#notificationevent)
    * NotificationType
  * RequestedDateTime
  * ServiceRole
  * StandardErrorUrl
  * StandardOutputUrl
  * Status
  * StatusDetails
  * TraceOutput

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
  * Name
  * Output
  * OutputS3BucketName
  * OutputS3KeyPrefix
  * OutputS3Region
  * ResponseCode
  * ResponseFinishDateTime
  * ResponseStartDateTime
  * StandardErrorUrl
  * StandardOutputUrl
  * Status
  * StatusDetails

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
  * ExecutionId
  * ExecutionTime **required**
  * ExecutionType

### ComplianceExecutionType
* ComplianceExecutionType `string`

### ComplianceFilterValue
* ComplianceFilterValue `string`

### ComplianceItem
* ComplianceItem `object`: Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on.
  * ComplianceType
  * Details
  * ExecutionSummary
    * ExecutionId
    * ExecutionTime **required**
    * ExecutionType
  * Id
  * ResourceId
  * ResourceType
  * Severity
  * Status
  * Title

### ComplianceItemContentHash
* ComplianceItemContentHash `string`

### ComplianceItemDetails
* ComplianceItemDetails `object`

### ComplianceItemEntry
* ComplianceItemEntry `object`: Information about a compliance item.
  * Details
  * Id
  * Severity **required**
  * Status **required**
  * Title

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
  * Key
  * Type
  * Values
    * items [ComplianceFilterValue](#compliancefiltervalue)

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
  * ComplianceType
  * CompliantSummary
    * CompliantCount
    * SeveritySummary
      * CriticalCount
      * HighCount
      * InformationalCount
      * LowCount
      * MediumCount
      * UnspecifiedCount
  * NonCompliantSummary
    * NonCompliantCount
    * SeveritySummary
      * CriticalCount
      * HighCount
      * InformationalCount
      * LowCount
      * MediumCount
      * UnspecifiedCount

### ComplianceSummaryItemList
* ComplianceSummaryItemList `array`
  * items [ComplianceSummaryItem](#compliancesummaryitem)

### ComplianceTypeCountLimitExceededException


### ComplianceTypeName
* ComplianceTypeName `string`

### ComplianceUploadType
* ComplianceUploadType `string` (values: COMPLETE, PARTIAL)

### CompliantSummary
* CompliantSummary `object`: A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.
  * CompliantCount
  * SeveritySummary
    * CriticalCount
    * HighCount
    * InformationalCount
    * LowCount
    * MediumCount
    * UnspecifiedCount

### ComputerName
* ComputerName `string`

### ConnectionStatus
* ConnectionStatus `string` (values: Connected, NotConnected)

### ContentLength
* ContentLength `integer`

### CreateActivationRequest
* CreateActivationRequest `object`
  * DefaultInstanceName
  * Description
  * ExpirationDate
  * IamRole **required**
  * RegistrationLimit
  * Tags
    * items [Tag](#tag)

### CreateActivationResult
* CreateActivationResult `object`
  * ActivationCode
  * ActivationId

### CreateAssociationBatchRequest
* CreateAssociationBatchRequest `object`
  * Entries **required**
    * items [CreateAssociationBatchRequestEntry](#createassociationbatchrequestentry)

### CreateAssociationBatchRequestEntries
* CreateAssociationBatchRequestEntries `array`
  * items [CreateAssociationBatchRequestEntry](#createassociationbatchrequestentry)

### CreateAssociationBatchRequestEntry
* CreateAssociationBatchRequestEntry `object`: Describes the association of a Systems Manager SSM document and an instance.
  * ApplyOnlyAtCronInterval
  * AssociationName
  * AutomationTargetParameterName
  * ComplianceSeverity
  * DocumentVersion
  * InstanceId
  * MaxConcurrency
  * MaxErrors
  * Name **required**
  * OutputLocation
    * S3Location
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * OutputS3Region
  * Parameters
  * ScheduleExpression
  * SyncCompliance
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * Targets
    * items [Target](#target)

### CreateAssociationBatchResult
* CreateAssociationBatchResult `object`
  * Failed
    * items [FailedCreateAssociation](#failedcreateassociation)
  * Successful
    * items [AssociationDescription](#associationdescription)

### CreateAssociationRequest
* CreateAssociationRequest `object`
  * ApplyOnlyAtCronInterval
  * AssociationName
  * AutomationTargetParameterName
  * ComplianceSeverity
  * DocumentVersion
  * InstanceId
  * MaxConcurrency
  * MaxErrors
  * Name **required**
  * OutputLocation
    * S3Location
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * OutputS3Region
  * Parameters
  * ScheduleExpression
  * SyncCompliance
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * Targets
    * items [Target](#target)

### CreateAssociationResult
* CreateAssociationResult `object`
  * AssociationDescription
    * ApplyOnlyAtCronInterval
    * AssociationId
    * AssociationName
    * AssociationVersion
    * AutomationTargetParameterName
    * ComplianceSeverity
    * Date
    * DocumentVersion
    * InstanceId
    * LastExecutionDate
    * LastSuccessfulExecutionDate
    * LastUpdateAssociationDate
    * MaxConcurrency
    * MaxErrors
    * Name
    * OutputLocation
      * S3Location
        * OutputS3BucketName
        * OutputS3KeyPrefix
        * OutputS3Region
    * Overview
      * AssociationStatusAggregatedCount
      * DetailedStatus
      * Status
    * Parameters
    * ScheduleExpression
    * Status
      * AdditionalInfo
      * Date **required**
      * Message **required**
      * Name **required**
    * SyncCompliance
    * TargetLocations
      * items [TargetLocation](#targetlocation)
    * Targets
      * items [Target](#target)

### CreateDocumentRequest
* CreateDocumentRequest `object`
  * Attachments
    * items [AttachmentsSource](#attachmentssource)
  * Content **required**
  * DocumentFormat
  * DocumentType
  * Name **required**
  * Requires
    * items [DocumentRequires](#documentrequires)
  * Tags
    * items [Tag](#tag)
  * TargetType
  * VersionName

### CreateDocumentResult
* CreateDocumentResult `object`
  * DocumentDescription
    * ApprovedVersion
    * AttachmentsInformation
      * items [AttachmentInformation](#attachmentinformation)
    * Author
    * CreatedDate
    * DefaultVersion
    * Description
    * DocumentFormat
    * DocumentType
    * DocumentVersion
    * Hash
    * HashType
    * LatestVersion
    * Name
    * Owner
    * Parameters
      * items [DocumentParameter](#documentparameter)
    * PendingReviewVersion
    * PlatformTypes
      * items [PlatformType](#platformtype)
    * Requires
      * items [DocumentRequires](#documentrequires)
    * ReviewInformation
      * items [ReviewInformation](#reviewinformation)
    * ReviewStatus
    * SchemaVersion
    * Sha1
    * Status
    * StatusInformation
    * Tags
      * items [Tag](#tag)
    * TargetType
    * VersionName

### CreateMaintenanceWindowRequest
* CreateMaintenanceWindowRequest `object`
  * AllowUnassociatedTargets **required**
  * ClientToken
  * Cutoff **required**
  * Description
  * Duration **required**
  * EndDate
  * Name **required**
  * Schedule **required**
  * ScheduleOffset
  * ScheduleTimezone
  * StartDate
  * Tags
    * items [Tag](#tag)

### CreateMaintenanceWindowResult
* CreateMaintenanceWindowResult `object`
  * WindowId

### CreateOpsItemRequest
* CreateOpsItemRequest `object`
  * ActualEndTime
  * ActualStartTime
  * Category
  * Description **required**
  * Notifications
    * items [OpsItemNotification](#opsitemnotification)
  * OperationalData
  * OpsItemType
  * PlannedEndTime
  * PlannedStartTime
  * Priority
  * RelatedOpsItems
    * items [RelatedOpsItem](#relatedopsitem)
  * Severity
  * Source **required**
  * Tags
    * items [Tag](#tag)
  * Title **required**

### CreateOpsItemResponse
* CreateOpsItemResponse `object`
  * OpsItemId

### CreateOpsMetadataRequest
* CreateOpsMetadataRequest `object`
  * Metadata
  * ResourceId **required**

### CreateOpsMetadataResult
* CreateOpsMetadataResult `object`
  * OpsMetadataArn

### CreatePatchBaselineRequest
* CreatePatchBaselineRequest `object`
  * ApprovalRules
    * PatchRules **required**
      * items [PatchRule](#patchrule)
  * ApprovedPatches
    * items [PatchId](#patchid)
  * ApprovedPatchesComplianceLevel
  * ApprovedPatchesEnableNonSecurity
  * ClientToken
  * Description
  * GlobalFilters
    * PatchFilters **required**
      * items [PatchFilter](#patchfilter)
  * Name **required**
  * OperatingSystem
  * RejectedPatches
    * items [PatchId](#patchid)
  * RejectedPatchesAction
  * Sources
    * items [PatchSource](#patchsource)
  * Tags
    * items [Tag](#tag)

### CreatePatchBaselineResult
* CreatePatchBaselineResult `object`
  * BaselineId

### CreateResourceDataSyncRequest
* CreateResourceDataSyncRequest `object`
  * S3Destination
    * AWSKMSKeyARN
    * BucketName **required**
    * DestinationDataSharing
      * DestinationDataSharingType
    * Prefix
    * Region **required**
    * SyncFormat **required**
  * SyncName **required**
  * SyncSource
    * AwsOrganizationsSource
      * OrganizationSourceType **required**
      * OrganizationalUnits
        * items [ResourceDataSyncOrganizationalUnit](#resourcedatasyncorganizationalunit)
    * IncludeFutureRegions
    * SourceRegions **required**
      * items [ResourceDataSyncSourceRegion](#resourcedatasyncsourceregion)
    * SourceType **required**
  * SyncType

### CreateResourceDataSyncResult
* CreateResourceDataSyncResult `object`

### CreatedDate
* CreatedDate `string`

### CustomSchemaCountLimitExceededException


### DateTime
* DateTime `string`

### DefaultBaseline
* DefaultBaseline `boolean`

### DefaultInstanceName
* DefaultInstanceName `string`

### DeleteActivationRequest
* DeleteActivationRequest `object`
  * ActivationId **required**

### DeleteActivationResult
* DeleteActivationResult `object`

### DeleteAssociationRequest
* DeleteAssociationRequest `object`
  * AssociationId
  * InstanceId
  * Name

### DeleteAssociationResult
* DeleteAssociationResult `object`

### DeleteDocumentRequest
* DeleteDocumentRequest `object`
  * DocumentVersion
  * Force
  * Name **required**
  * VersionName

### DeleteDocumentResult
* DeleteDocumentResult `object`

### DeleteInventoryRequest
* DeleteInventoryRequest `object`
  * ClientToken
  * DryRun
  * SchemaDeleteOption
  * TypeName **required**

### DeleteInventoryResult
* DeleteInventoryResult `object`
  * DeletionId
  * DeletionSummary
    * RemainingCount
    * SummaryItems
      * items [InventoryDeletionSummaryItem](#inventorydeletionsummaryitem)
    * TotalCount
  * TypeName

### DeleteMaintenanceWindowRequest
* DeleteMaintenanceWindowRequest `object`
  * WindowId **required**

### DeleteMaintenanceWindowResult
* DeleteMaintenanceWindowResult `object`
  * WindowId

### DeleteOpsMetadataRequest
* DeleteOpsMetadataRequest `object`
  * OpsMetadataArn **required**

### DeleteOpsMetadataResult
* DeleteOpsMetadataResult `object`

### DeleteParameterRequest
* DeleteParameterRequest `object`
  * Name **required**

### DeleteParameterResult
* DeleteParameterResult `object`

### DeleteParametersRequest
* DeleteParametersRequest `object`
  * Names **required**
    * items [PSParameterName](#psparametername)

### DeleteParametersResult
* DeleteParametersResult `object`
  * DeletedParameters
    * items [PSParameterName](#psparametername)
  * InvalidParameters
    * items [PSParameterName](#psparametername)

### DeletePatchBaselineRequest
* DeletePatchBaselineRequest `object`
  * BaselineId **required**

### DeletePatchBaselineResult
* DeletePatchBaselineResult `object`
  * BaselineId

### DeleteResourceDataSyncRequest
* DeleteResourceDataSyncRequest `object`
  * SyncName **required**
  * SyncType

### DeleteResourceDataSyncResult
* DeleteResourceDataSyncResult `object`

### DeliveryTimedOutCount
* DeliveryTimedOutCount `integer`

### DeregisterManagedInstanceRequest
* DeregisterManagedInstanceRequest `object`
  * InstanceId **required**

### DeregisterManagedInstanceResult
* DeregisterManagedInstanceResult `object`

### DeregisterPatchBaselineForPatchGroupRequest
* DeregisterPatchBaselineForPatchGroupRequest `object`
  * BaselineId **required**
  * PatchGroup **required**

### DeregisterPatchBaselineForPatchGroupResult
* DeregisterPatchBaselineForPatchGroupResult `object`
  * BaselineId
  * PatchGroup

### DeregisterTargetFromMaintenanceWindowRequest
* DeregisterTargetFromMaintenanceWindowRequest `object`
  * Safe
  * WindowId **required**
  * WindowTargetId **required**

### DeregisterTargetFromMaintenanceWindowResult
* DeregisterTargetFromMaintenanceWindowResult `object`
  * WindowId
  * WindowTargetId

### DeregisterTaskFromMaintenanceWindowRequest
* DeregisterTaskFromMaintenanceWindowRequest `object`
  * WindowId **required**
  * WindowTaskId **required**

### DeregisterTaskFromMaintenanceWindowResult
* DeregisterTaskFromMaintenanceWindowResult `object`
  * WindowId
  * WindowTaskId

### DescribeActivationsFilter
* DescribeActivationsFilter `object`: Filter for the DescribeActivation API.
  * FilterKey
  * FilterValues
    * items [String](#string)

### DescribeActivationsFilterKeys
* DescribeActivationsFilterKeys `string` (values: ActivationIds, DefaultInstanceName, IamRole)

### DescribeActivationsFilterList
* DescribeActivationsFilterList `array`
  * items [DescribeActivationsFilter](#describeactivationsfilter)

### DescribeActivationsRequest
* DescribeActivationsRequest `object`
  * Filters
    * items [DescribeActivationsFilter](#describeactivationsfilter)
  * MaxResults
  * NextToken

### DescribeActivationsResult
* DescribeActivationsResult `object`
  * ActivationList
    * items [Activation](#activation)
  * NextToken

### DescribeAssociationExecutionTargetsRequest
* DescribeAssociationExecutionTargetsRequest `object`
  * AssociationId **required**
  * ExecutionId **required**
  * Filters
    * items [AssociationExecutionTargetsFilter](#associationexecutiontargetsfilter)
  * MaxResults
  * NextToken

### DescribeAssociationExecutionTargetsResult
* DescribeAssociationExecutionTargetsResult `object`
  * AssociationExecutionTargets
    * items [AssociationExecutionTarget](#associationexecutiontarget)
  * NextToken

### DescribeAssociationExecutionsRequest
* DescribeAssociationExecutionsRequest `object`
  * AssociationId **required**
  * Filters
    * items [AssociationExecutionFilter](#associationexecutionfilter)
  * MaxResults
  * NextToken

### DescribeAssociationExecutionsResult
* DescribeAssociationExecutionsResult `object`
  * AssociationExecutions
    * items [AssociationExecution](#associationexecution)
  * NextToken

### DescribeAssociationRequest
* DescribeAssociationRequest `object`
  * AssociationId
  * AssociationVersion
  * InstanceId
  * Name

### DescribeAssociationResult
* DescribeAssociationResult `object`
  * AssociationDescription
    * ApplyOnlyAtCronInterval
    * AssociationId
    * AssociationName
    * AssociationVersion
    * AutomationTargetParameterName
    * ComplianceSeverity
    * Date
    * DocumentVersion
    * InstanceId
    * LastExecutionDate
    * LastSuccessfulExecutionDate
    * LastUpdateAssociationDate
    * MaxConcurrency
    * MaxErrors
    * Name
    * OutputLocation
      * S3Location
        * OutputS3BucketName
        * OutputS3KeyPrefix
        * OutputS3Region
    * Overview
      * AssociationStatusAggregatedCount
      * DetailedStatus
      * Status
    * Parameters
    * ScheduleExpression
    * Status
      * AdditionalInfo
      * Date **required**
      * Message **required**
      * Name **required**
    * SyncCompliance
    * TargetLocations
      * items [TargetLocation](#targetlocation)
    * Targets
      * items [Target](#target)

### DescribeAutomationExecutionsRequest
* DescribeAutomationExecutionsRequest `object`
  * Filters
    * items [AutomationExecutionFilter](#automationexecutionfilter)
  * MaxResults
  * NextToken

### DescribeAutomationExecutionsResult
* DescribeAutomationExecutionsResult `object`
  * AutomationExecutionMetadataList
    * items [AutomationExecutionMetadata](#automationexecutionmetadata)
  * NextToken

### DescribeAutomationStepExecutionsRequest
* DescribeAutomationStepExecutionsRequest `object`
  * AutomationExecutionId **required**
  * Filters
    * items [StepExecutionFilter](#stepexecutionfilter)
  * MaxResults
  * NextToken
  * ReverseOrder

### DescribeAutomationStepExecutionsResult
* DescribeAutomationStepExecutionsResult `object`
  * NextToken
  * StepExecutions
    * items [StepExecution](#stepexecution)

### DescribeAvailablePatchesRequest
* DescribeAvailablePatchesRequest `object`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * MaxResults
  * NextToken

### DescribeAvailablePatchesResult
* DescribeAvailablePatchesResult `object`
  * NextToken
  * Patches
    * items [Patch](#patch)

### DescribeDocumentPermissionRequest
* DescribeDocumentPermissionRequest `object`
  * Name **required**
  * PermissionType **required**

### DescribeDocumentPermissionResponse
* DescribeDocumentPermissionResponse `object`
  * AccountIds
    * items [AccountId](#accountid)
  * AccountSharingInfoList
    * items [AccountSharingInfo](#accountsharinginfo)

### DescribeDocumentRequest
* DescribeDocumentRequest `object`
  * DocumentVersion
  * Name **required**
  * VersionName

### DescribeDocumentResult
* DescribeDocumentResult `object`
  * Document
    * ApprovedVersion
    * AttachmentsInformation
      * items [AttachmentInformation](#attachmentinformation)
    * Author
    * CreatedDate
    * DefaultVersion
    * Description
    * DocumentFormat
    * DocumentType
    * DocumentVersion
    * Hash
    * HashType
    * LatestVersion
    * Name
    * Owner
    * Parameters
      * items [DocumentParameter](#documentparameter)
    * PendingReviewVersion
    * PlatformTypes
      * items [PlatformType](#platformtype)
    * Requires
      * items [DocumentRequires](#documentrequires)
    * ReviewInformation
      * items [ReviewInformation](#reviewinformation)
    * ReviewStatus
    * SchemaVersion
    * Sha1
    * Status
    * StatusInformation
    * Tags
      * items [Tag](#tag)
    * TargetType
    * VersionName

### DescribeEffectiveInstanceAssociationsRequest
* DescribeEffectiveInstanceAssociationsRequest `object`
  * InstanceId **required**
  * MaxResults
  * NextToken

### DescribeEffectiveInstanceAssociationsResult
* DescribeEffectiveInstanceAssociationsResult `object`
  * Associations
    * items [InstanceAssociation](#instanceassociation)
  * NextToken

### DescribeEffectivePatchesForPatchBaselineRequest
* DescribeEffectivePatchesForPatchBaselineRequest `object`
  * BaselineId **required**
  * MaxResults
  * NextToken

### DescribeEffectivePatchesForPatchBaselineResult
* DescribeEffectivePatchesForPatchBaselineResult `object`
  * EffectivePatches
    * items [EffectivePatch](#effectivepatch)
  * NextToken

### DescribeInstanceAssociationsStatusRequest
* DescribeInstanceAssociationsStatusRequest `object`
  * InstanceId **required**
  * MaxResults
  * NextToken

### DescribeInstanceAssociationsStatusResult
* DescribeInstanceAssociationsStatusResult `object`
  * InstanceAssociationStatusInfos
    * items [InstanceAssociationStatusInfo](#instanceassociationstatusinfo)
  * NextToken

### DescribeInstanceInformationRequest
* DescribeInstanceInformationRequest `object`
  * Filters
    * items [InstanceInformationStringFilter](#instanceinformationstringfilter)
  * InstanceInformationFilterList
    * items [InstanceInformationFilter](#instanceinformationfilter)
  * MaxResults
  * NextToken

### DescribeInstanceInformationResult
* DescribeInstanceInformationResult `object`
  * InstanceInformationList
    * items [InstanceInformation](#instanceinformation)
  * NextToken

### DescribeInstancePatchStatesForPatchGroupRequest
* DescribeInstancePatchStatesForPatchGroupRequest `object`
  * Filters
    * items [InstancePatchStateFilter](#instancepatchstatefilter)
  * MaxResults
  * NextToken
  * PatchGroup **required**

### DescribeInstancePatchStatesForPatchGroupResult
* DescribeInstancePatchStatesForPatchGroupResult `object`
  * InstancePatchStates
    * items [InstancePatchState](#instancepatchstate)
  * NextToken

### DescribeInstancePatchStatesRequest
* DescribeInstancePatchStatesRequest `object`
  * InstanceIds **required**
    * items [InstanceId](#instanceid)
  * MaxResults
  * NextToken

### DescribeInstancePatchStatesResult
* DescribeInstancePatchStatesResult `object`
  * InstancePatchStates
    * items [InstancePatchState](#instancepatchstate)
  * NextToken

### DescribeInstancePatchesRequest
* DescribeInstancePatchesRequest `object`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * InstanceId **required**
  * MaxResults
  * NextToken

### DescribeInstancePatchesResult
* DescribeInstancePatchesResult `object`
  * NextToken
  * Patches
    * items [PatchComplianceData](#patchcompliancedata)

### DescribeInventoryDeletionsRequest
* DescribeInventoryDeletionsRequest `object`
  * DeletionId
  * MaxResults
  * NextToken

### DescribeInventoryDeletionsResult
* DescribeInventoryDeletionsResult `object`
  * InventoryDeletions
    * items [InventoryDeletionStatusItem](#inventorydeletionstatusitem)
  * NextToken

### DescribeMaintenanceWindowExecutionTaskInvocationsRequest
* DescribeMaintenanceWindowExecutionTaskInvocationsRequest `object`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * TaskId **required**
  * WindowExecutionId **required**

### DescribeMaintenanceWindowExecutionTaskInvocationsResult
* DescribeMaintenanceWindowExecutionTaskInvocationsResult `object`
  * NextToken
  * WindowExecutionTaskInvocationIdentities
    * items [MaintenanceWindowExecutionTaskInvocationIdentity](#maintenancewindowexecutiontaskinvocationidentity)

### DescribeMaintenanceWindowExecutionTasksRequest
* DescribeMaintenanceWindowExecutionTasksRequest `object`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * WindowExecutionId **required**

### DescribeMaintenanceWindowExecutionTasksResult
* DescribeMaintenanceWindowExecutionTasksResult `object`
  * NextToken
  * WindowExecutionTaskIdentities
    * items [MaintenanceWindowExecutionTaskIdentity](#maintenancewindowexecutiontaskidentity)

### DescribeMaintenanceWindowExecutionsRequest
* DescribeMaintenanceWindowExecutionsRequest `object`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * WindowId **required**

### DescribeMaintenanceWindowExecutionsResult
* DescribeMaintenanceWindowExecutionsResult `object`
  * NextToken
  * WindowExecutions
    * items [MaintenanceWindowExecution](#maintenancewindowexecution)

### DescribeMaintenanceWindowScheduleRequest
* DescribeMaintenanceWindowScheduleRequest `object`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * MaxResults
  * NextToken
  * ResourceType
  * Targets
    * items [Target](#target)
  * WindowId

### DescribeMaintenanceWindowScheduleResult
* DescribeMaintenanceWindowScheduleResult `object`
  * NextToken
  * ScheduledWindowExecutions
    * items [ScheduledWindowExecution](#scheduledwindowexecution)

### DescribeMaintenanceWindowTargetsRequest
* DescribeMaintenanceWindowTargetsRequest `object`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * WindowId **required**

### DescribeMaintenanceWindowTargetsResult
* DescribeMaintenanceWindowTargetsResult `object`
  * NextToken
  * Targets
    * items [MaintenanceWindowTarget](#maintenancewindowtarget)

### DescribeMaintenanceWindowTasksRequest
* DescribeMaintenanceWindowTasksRequest `object`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken
  * WindowId **required**

### DescribeMaintenanceWindowTasksResult
* DescribeMaintenanceWindowTasksResult `object`
  * NextToken
  * Tasks
    * items [MaintenanceWindowTask](#maintenancewindowtask)

### DescribeMaintenanceWindowsForTargetRequest
* DescribeMaintenanceWindowsForTargetRequest `object`
  * MaxResults
  * NextToken
  * ResourceType **required**
  * Targets **required**
    * items [Target](#target)

### DescribeMaintenanceWindowsForTargetResult
* DescribeMaintenanceWindowsForTargetResult `object`
  * NextToken
  * WindowIdentities
    * items [MaintenanceWindowIdentityForTarget](#maintenancewindowidentityfortarget)

### DescribeMaintenanceWindowsRequest
* DescribeMaintenanceWindowsRequest `object`
  * Filters
    * items [MaintenanceWindowFilter](#maintenancewindowfilter)
  * MaxResults
  * NextToken

### DescribeMaintenanceWindowsResult
* DescribeMaintenanceWindowsResult `object`
  * NextToken
  * WindowIdentities
    * items [MaintenanceWindowIdentity](#maintenancewindowidentity)

### DescribeOpsItemsRequest
* DescribeOpsItemsRequest `object`
  * MaxResults
  * NextToken
  * OpsItemFilters
    * items [OpsItemFilter](#opsitemfilter)

### DescribeOpsItemsResponse
* DescribeOpsItemsResponse `object`
  * NextToken
  * OpsItemSummaries
    * items [OpsItemSummary](#opsitemsummary)

### DescribeParametersRequest
* DescribeParametersRequest `object`
  * Filters
    * items [ParametersFilter](#parametersfilter)
  * MaxResults
  * NextToken
  * ParameterFilters
    * items [ParameterStringFilter](#parameterstringfilter)

### DescribeParametersResult
* DescribeParametersResult `object`
  * NextToken
  * Parameters
    * items [ParameterMetadata](#parametermetadata)

### DescribePatchBaselinesRequest
* DescribePatchBaselinesRequest `object`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * MaxResults
  * NextToken

### DescribePatchBaselinesResult
* DescribePatchBaselinesResult `object`
  * BaselineIdentities
    * items [PatchBaselineIdentity](#patchbaselineidentity)
  * NextToken

### DescribePatchGroupStateRequest
* DescribePatchGroupStateRequest `object`
  * PatchGroup **required**

### DescribePatchGroupStateResult
* DescribePatchGroupStateResult `object`
  * Instances
  * InstancesWithFailedPatches
  * InstancesWithInstalledOtherPatches
  * InstancesWithInstalledPatches
  * InstancesWithInstalledPendingRebootPatches
  * InstancesWithInstalledRejectedPatches
  * InstancesWithMissingPatches
  * InstancesWithNotApplicablePatches
  * InstancesWithUnreportedNotApplicablePatches

### DescribePatchGroupsRequest
* DescribePatchGroupsRequest `object`
  * Filters
    * items [PatchOrchestratorFilter](#patchorchestratorfilter)
  * MaxResults
  * NextToken

### DescribePatchGroupsResult
* DescribePatchGroupsResult `object`
  * Mappings
    * items [PatchGroupPatchBaselineMapping](#patchgrouppatchbaselinemapping)
  * NextToken

### DescribePatchPropertiesRequest
* DescribePatchPropertiesRequest `object`
  * MaxResults
  * NextToken
  * OperatingSystem **required**
  * PatchSet
  * Property **required**

### DescribePatchPropertiesResult
* DescribePatchPropertiesResult `object`
  * NextToken
  * Properties
    * items [PatchPropertyEntry](#patchpropertyentry)

### DescribeSessionsRequest
* DescribeSessionsRequest `object`
  * Filters
    * items [SessionFilter](#sessionfilter)
  * MaxResults
  * NextToken
  * State **required**

### DescribeSessionsResponse
* DescribeSessionsResponse `object`
  * NextToken
  * Sessions
    * items [Session](#session)

### DescriptionInDocument
* DescriptionInDocument `string`

### DocumentARN
* DocumentARN `string`

### DocumentAlreadyExists


### DocumentAuthor
* DocumentAuthor `string`

### DocumentContent
* DocumentContent `string`

### DocumentDefaultVersionDescription
* DocumentDefaultVersionDescription `object`: A default version of a document.
  * DefaultVersion
  * DefaultVersionName
  * Name

### DocumentDescription
* DocumentDescription `object`: Describes a Systems Manager document. 
  * ApprovedVersion
  * AttachmentsInformation
    * items [AttachmentInformation](#attachmentinformation)
  * Author
  * CreatedDate
  * DefaultVersion
  * Description
  * DocumentFormat
  * DocumentType
  * DocumentVersion
  * Hash
  * HashType
  * LatestVersion
  * Name
  * Owner
  * Parameters
    * items [DocumentParameter](#documentparameter)
  * PendingReviewVersion
  * PlatformTypes
    * items [PlatformType](#platformtype)
  * Requires
    * items [DocumentRequires](#documentrequires)
  * ReviewInformation
    * items [ReviewInformation](#reviewinformation)
  * ReviewStatus
  * SchemaVersion
  * Sha1
  * Status
  * StatusInformation
  * Tags
    * items [Tag](#tag)
  * TargetType
  * VersionName

### DocumentFilter
* DocumentFilter `object`: This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>.
  * key **required**
  * value **required**

### DocumentFilterKey
* DocumentFilterKey `string` (values: Name, Owner, PlatformTypes, DocumentType)

### DocumentFilterList
* DocumentFilterList `array`
  * items [DocumentFilter](#documentfilter)

### DocumentFilterValue
* DocumentFilterValue `string`

### DocumentFormat
* DocumentFormat `string` (values: YAML, JSON, TEXT)

### DocumentHash
* DocumentHash `string`

### DocumentHashType
* DocumentHashType `string` (values: Sha256, Sha1)

### DocumentIdentifier
* DocumentIdentifier `object`: Describes the name of a Systems Manager document.
  * Author
  * DocumentFormat
  * DocumentType
  * DocumentVersion
  * Name
  * Owner
  * PlatformTypes
    * items [PlatformType](#platformtype)
  * Requires
    * items [DocumentRequires](#documentrequires)
  * ReviewStatus
  * SchemaVersion
  * Tags
    * items [Tag](#tag)
  * TargetType
  * VersionName

### DocumentIdentifierList
* DocumentIdentifierList `array`
  * items [DocumentIdentifier](#documentidentifier)

### DocumentKeyValuesFilter
* DocumentKeyValuesFilter `object`: <p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>You can also use AWS-provided keys, some of which have specific allowed values. These keys and their associated values are as follows:</p> <dl> <dt>DocumentType</dt> <dd> <ul> <li> <p>ApplicationConfiguration</p> </li> <li> <p>ApplicationConfigurationSchema</p> </li> <li> <p>Automation</p> </li> <li> <p>ChangeCalendar</p> </li> <li> <p>Command</p> </li> <li> <p>DeploymentStrategy</p> </li> <li> <p>Package</p> </li> <li> <p>Policy</p> </li> <li> <p>Session</p> </li> </ul> </dd> <dt>Owner</dt> <dd> <p>Note that only one <code>Owner</code> can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <ul> <li> <p>Amazon</p> </li> <li> <p>Private</p> </li> <li> <p>Public</p> </li> <li> <p>Self</p> </li> <li> <p>ThirdParty</p> </li> </ul> </dd> <dt>PlatformTypes</dt> <dd> <ul> <li> <p>Linux</p> </li> <li> <p>Windows</p> </li> </ul> </dd> </dl> <p> <code>Name</code> is another AWS-provided key. If you use <code>Name</code> as a key, you can use a name prefix to return a list of documents. For example, in the AWS CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>You can also use the <code>TargetType</code> AWS-provided key. For a list of valid resource type values that can be used with this key, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS resource and property types reference</a> in the <i>AWS CloudFormation User Guide</i>.</p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key and value pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p> <p>For example, if you created a key called region and are using the AWS CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p>
  * Key
  * Values
    * items [DocumentKeyValuesFilterValue](#documentkeyvaluesfiltervalue)

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


### DocumentMetadataEnum
* DocumentMetadataEnum `string` (values: DocumentReviews)

### DocumentMetadataResponseInfo
* DocumentMetadataResponseInfo `object`: Details about the response to a document review request.
  * ReviewerResponse
    * items [DocumentReviewerResponseSource](#documentreviewerresponsesource)

### DocumentName
* DocumentName `string`

### DocumentOwner
* DocumentOwner `string`

### DocumentParameter
* DocumentParameter `object`: Parameters specified in a System Manager document that run on the server when the command is run. 
  * DefaultValue
  * Description
  * Name
  * Type

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


### DocumentPermissionType
* DocumentPermissionType `string` (values: Share)

### DocumentRequires
* DocumentRequires `object`: An SSM document required by the current document.
  * Name **required**
  * Version

### DocumentRequiresList
* DocumentRequiresList `array`
  * items [DocumentRequires](#documentrequires)

### DocumentReviewAction
* DocumentReviewAction `string` (values: SendForReview, UpdateReview, Approve, Reject)

### DocumentReviewComment
* DocumentReviewComment `string`

### DocumentReviewCommentList
* DocumentReviewCommentList `array`
  * items [DocumentReviewCommentSource](#documentreviewcommentsource)

### DocumentReviewCommentSource
* DocumentReviewCommentSource `object`: Information about comments added to a document review request.
  * Content
  * Type

### DocumentReviewCommentType
* DocumentReviewCommentType `string` (values: Comment)

### DocumentReviewerResponseList
* DocumentReviewerResponseList `array`
  * items [DocumentReviewerResponseSource](#documentreviewerresponsesource)

### DocumentReviewerResponseSource
* DocumentReviewerResponseSource `object`: Information about a reviewer's response to a document review request.
  * Comment
    * items [DocumentReviewCommentSource](#documentreviewcommentsource)
  * CreateTime
  * ReviewStatus
  * Reviewer
  * UpdatedTime

### DocumentReviews
* DocumentReviews `object`: Information about a document approval review.
  * Action **required**
  * Comment
    * items [DocumentReviewCommentSource](#documentreviewcommentsource)

### DocumentSchemaVersion
* DocumentSchemaVersion `string`

### DocumentSha1
* DocumentSha1 `string`

### DocumentStatus
* DocumentStatus `string` (values: Creating, Active, Updating, Deleting, Failed): The status of a document.

### DocumentStatusInformation
* DocumentStatusInformation `string`

### DocumentType
* DocumentType `string` (values: Command, Policy, Automation, Session, Package, ApplicationConfiguration, ApplicationConfigurationSchema, DeploymentStrategy, ChangeCalendar, Automation.ChangeTemplate)

### DocumentVersion
* DocumentVersion `string`

### DocumentVersionInfo
* DocumentVersionInfo `object`: Version information about the document.
  * CreatedDate
  * DocumentFormat
  * DocumentVersion
  * IsDefaultVersion
  * Name
  * ReviewStatus
  * Status
  * StatusInformation
  * VersionName

### DocumentVersionLimitExceeded


### DocumentVersionList
* DocumentVersionList `array`
  * items [DocumentVersionInfo](#documentversioninfo)

### DocumentVersionName
* DocumentVersionName `string`

### DocumentVersionNumber
* DocumentVersionNumber `string`

### DoesNotExistException


### DryRun
* DryRun `boolean`

### DuplicateDocumentContent


### DuplicateDocumentVersionName


### DuplicateInstanceId


### EffectiveInstanceAssociationMaxResults
* EffectiveInstanceAssociationMaxResults `integer`

### EffectivePatch
* EffectivePatch `object`: The EffectivePatch structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
  * Patch
    * AdvisoryIds
      * items [PatchAdvisoryId](#patchadvisoryid)
    * Arch
    * BugzillaIds
      * items [PatchBugzillaId](#patchbugzillaid)
    * CVEIds
      * items [PatchCVEId](#patchcveid)
    * Classification
    * ContentUrl
    * Description
    * Epoch
    * Id
    * KbNumber
    * Language
    * MsrcNumber
    * MsrcSeverity
    * Name
    * Product
    * ProductFamily
    * Release
    * ReleaseDate
    * Repository
    * Severity
    * Title
    * Vendor
    * Version
  * PatchStatus
    * ApprovalDate
    * ComplianceLevel
    * DeploymentStatus

### EffectivePatchList
* EffectivePatchList `array`
  * items [EffectivePatch](#effectivepatch)

### ErrorCount
* ErrorCount `integer`

### ExecutionMode
* ExecutionMode `string` (values: Auto, Interactive)

### ExecutionRoleName
* ExecutionRoleName `string`

### ExpirationDate
* ExpirationDate `string`

### FailedCreateAssociation
* FailedCreateAssociation `object`: Describes a failed association.
  * Entry
    * ApplyOnlyAtCronInterval
    * AssociationName
    * AutomationTargetParameterName
    * ComplianceSeverity
    * DocumentVersion
    * InstanceId
    * MaxConcurrency
    * MaxErrors
    * Name **required**
    * OutputLocation
      * S3Location
        * OutputS3BucketName
        * OutputS3KeyPrefix
        * OutputS3Region
    * Parameters
    * ScheduleExpression
    * SyncCompliance
    * TargetLocations
      * items [TargetLocation](#targetlocation)
    * Targets
      * items [Target](#target)
  * Fault
  * Message

### FailedCreateAssociationList
* FailedCreateAssociationList `array`
  * items [FailedCreateAssociation](#failedcreateassociation)

### FailureDetails
* FailureDetails `object`: Information about an Automation failure.
  * Details
  * FailureStage
  * FailureType

### Fault
* Fault `string` (values: Client, Server, Unknown)

### FeatureNotAvailableException


### GetAutomationExecutionRequest
* GetAutomationExecutionRequest `object`
  * AutomationExecutionId **required**

### GetAutomationExecutionResult
* GetAutomationExecutionResult `object`
  * AutomationExecution
    * AssociationId
    * AutomationExecutionId
    * AutomationExecutionStatus
    * AutomationSubtype
    * ChangeRequestName
    * CurrentAction
    * CurrentStepName
    * DocumentName
    * DocumentVersion
    * ExecutedBy
    * ExecutionEndTime
    * ExecutionStartTime
    * FailureMessage
    * MaxConcurrency
    * MaxErrors
    * Mode
    * OpsItemId
    * Outputs
    * Parameters
    * ParentAutomationExecutionId
    * ProgressCounters
      * CancelledSteps
      * FailedSteps
      * SuccessSteps
      * TimedOutSteps
      * TotalSteps
    * ResolvedTargets
      * ParameterValues
        * items [ParameterValue](#parametervalue)
      * Truncated
    * Runbooks
      * items [Runbook](#runbook)
    * ScheduledTime
    * StepExecutions
      * items [StepExecution](#stepexecution)
    * StepExecutionsTruncated
    * Target
    * TargetLocations
      * items [TargetLocation](#targetlocation)
    * TargetMaps
      * items [TargetMap](#targetmap)
    * TargetParameterName
    * Targets
      * items [Target](#target)

### GetCalendarStateRequest
* GetCalendarStateRequest `object`
  * AtTime
  * CalendarNames **required**
    * items [CalendarNameOrARN](#calendarnameorarn)

### GetCalendarStateResponse
* GetCalendarStateResponse `object`
  * AtTime
  * NextTransitionTime
  * State

### GetCommandInvocationRequest
* GetCommandInvocationRequest `object`
  * CommandId **required**
  * InstanceId **required**
  * PluginName

### GetCommandInvocationResult
* GetCommandInvocationResult `object`
  * CloudWatchOutputConfig
    * CloudWatchLogGroupName
    * CloudWatchOutputEnabled
  * CommandId
  * Comment
  * DocumentName
  * DocumentVersion
  * ExecutionElapsedTime
  * ExecutionEndDateTime
  * ExecutionStartDateTime
  * InstanceId
  * PluginName
  * ResponseCode
  * StandardErrorContent
  * StandardErrorUrl
  * StandardOutputContent
  * StandardOutputUrl
  * Status
  * StatusDetails

### GetConnectionStatusRequest
* GetConnectionStatusRequest `object`
  * Target **required**

### GetConnectionStatusResponse
* GetConnectionStatusResponse `object`
  * Status
  * Target

### GetDefaultPatchBaselineRequest
* GetDefaultPatchBaselineRequest `object`
  * OperatingSystem

### GetDefaultPatchBaselineResult
* GetDefaultPatchBaselineResult `object`
  * BaselineId
  * OperatingSystem

### GetDeployablePatchSnapshotForInstanceRequest
* GetDeployablePatchSnapshotForInstanceRequest `object`
  * InstanceId **required**
  * SnapshotId **required**

### GetDeployablePatchSnapshotForInstanceResult
* GetDeployablePatchSnapshotForInstanceResult `object`
  * InstanceId
  * Product
  * SnapshotDownloadUrl
  * SnapshotId

### GetDocumentRequest
* GetDocumentRequest `object`
  * DocumentFormat
  * DocumentVersion
  * Name **required**
  * VersionName

### GetDocumentResult
* GetDocumentResult `object`
  * AttachmentsContent
    * items [AttachmentContent](#attachmentcontent)
  * Content
  * DocumentFormat
  * DocumentType
  * DocumentVersion
  * Name
  * Requires
    * items [DocumentRequires](#documentrequires)
  * ReviewStatus
  * Status
  * StatusInformation
  * VersionName

### GetInventoryRequest
* GetInventoryRequest `object`
  * Aggregators
    * items [InventoryAggregator](#inventoryaggregator)
  * Filters
    * items [InventoryFilter](#inventoryfilter)
  * MaxResults
  * NextToken
  * ResultAttributes
    * items [ResultAttribute](#resultattribute)

### GetInventoryResult
* GetInventoryResult `object`
  * Entities
    * items [InventoryResultEntity](#inventoryresultentity)
  * NextToken

### GetInventorySchemaMaxResults
* GetInventorySchemaMaxResults `integer`

### GetInventorySchemaRequest
* GetInventorySchemaRequest `object`
  * Aggregator
  * MaxResults
  * NextToken
  * SubType
  * TypeName

### GetInventorySchemaResult
* GetInventorySchemaResult `object`
  * NextToken
  * Schemas
    * items [InventoryItemSchema](#inventoryitemschema)

### GetMaintenanceWindowExecutionRequest
* GetMaintenanceWindowExecutionRequest `object`
  * WindowExecutionId **required**

### GetMaintenanceWindowExecutionResult
* GetMaintenanceWindowExecutionResult `object`
  * EndTime
  * StartTime
  * Status
  * StatusDetails
  * TaskIds
    * items [MaintenanceWindowExecutionTaskId](#maintenancewindowexecutiontaskid)
  * WindowExecutionId

### GetMaintenanceWindowExecutionTaskInvocationRequest
* GetMaintenanceWindowExecutionTaskInvocationRequest `object`
  * InvocationId **required**
  * TaskId **required**
  * WindowExecutionId **required**

### GetMaintenanceWindowExecutionTaskInvocationResult
* GetMaintenanceWindowExecutionTaskInvocationResult `object`
  * EndTime
  * ExecutionId
  * InvocationId
  * OwnerInformation
  * Parameters
  * StartTime
  * Status
  * StatusDetails
  * TaskExecutionId
  * TaskType
  * WindowExecutionId
  * WindowTargetId

### GetMaintenanceWindowExecutionTaskRequest
* GetMaintenanceWindowExecutionTaskRequest `object`
  * TaskId **required**
  * WindowExecutionId **required**

### GetMaintenanceWindowExecutionTaskResult
* GetMaintenanceWindowExecutionTaskResult `object`
  * EndTime
  * MaxConcurrency
  * MaxErrors
  * Priority
  * ServiceRole
  * StartTime
  * Status
  * StatusDetails
  * TaskArn
  * TaskExecutionId
  * TaskParameters
    * items [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)
  * Type
  * WindowExecutionId

### GetMaintenanceWindowRequest
* GetMaintenanceWindowRequest `object`
  * WindowId **required**

### GetMaintenanceWindowResult
* GetMaintenanceWindowResult `object`
  * AllowUnassociatedTargets
  * CreatedDate
  * Cutoff
  * Description
  * Duration
  * Enabled
  * EndDate
  * ModifiedDate
  * Name
  * NextExecutionTime
  * Schedule
  * ScheduleOffset
  * ScheduleTimezone
  * StartDate
  * WindowId

### GetMaintenanceWindowTaskRequest
* GetMaintenanceWindowTaskRequest `object`
  * WindowId **required**
  * WindowTaskId **required**

### GetMaintenanceWindowTaskResult
* GetMaintenanceWindowTaskResult `object`
  * Description
  * LoggingInfo
    * S3BucketName **required**
    * S3KeyPrefix
    * S3Region **required**
  * MaxConcurrency
  * MaxErrors
  * Name
  * Priority
  * ServiceRoleArn
  * Targets
    * items [Target](#target)
  * TaskArn
  * TaskInvocationParameters
    * Automation
      * DocumentVersion
      * Parameters
    * Lambda
      * ClientContext
      * Payload
      * Qualifier
    * RunCommand
      * CloudWatchOutputConfig [CloudWatchOutputConfig](#cloudwatchoutputconfig)
      * Comment
      * DocumentHash
      * DocumentHashType
      * DocumentVersion
      * NotificationConfig
        * NotificationArn
        * NotificationEvents
          * items [NotificationEvent](#notificationevent)
        * NotificationType
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * Parameters
      * ServiceRoleArn
      * TimeoutSeconds
    * StepFunctions
      * Input
      * Name
  * TaskParameters
  * TaskType
  * WindowId
  * WindowTaskId

### GetOpsItemRequest
* GetOpsItemRequest `object`
  * OpsItemId **required**

### GetOpsItemResponse
* GetOpsItemResponse `object`
  * OpsItem
    * ActualEndTime
    * ActualStartTime
    * Category
    * CreatedBy
    * CreatedTime
    * Description
    * LastModifiedBy
    * LastModifiedTime
    * Notifications
      * items [OpsItemNotification](#opsitemnotification)
    * OperationalData
    * OpsItemId
    * OpsItemType
    * PlannedEndTime
    * PlannedStartTime
    * Priority
    * RelatedOpsItems
      * items [RelatedOpsItem](#relatedopsitem)
    * Severity
    * Source
    * Status
    * Title
    * Version

### GetOpsMetadataMaxResults
* GetOpsMetadataMaxResults `integer`

### GetOpsMetadataRequest
* GetOpsMetadataRequest `object`
  * MaxResults
  * NextToken
  * OpsMetadataArn **required**

### GetOpsMetadataResult
* GetOpsMetadataResult `object`
  * Metadata
  * NextToken
  * ResourceId

### GetOpsSummaryRequest
* GetOpsSummaryRequest `object`
  * Aggregators
    * items [OpsAggregator](#opsaggregator)
  * Filters
    * items [OpsFilter](#opsfilter)
  * MaxResults
  * NextToken
  * ResultAttributes
    * items [OpsResultAttribute](#opsresultattribute)
  * SyncName

### GetOpsSummaryResult
* GetOpsSummaryResult `object`
  * Entities
    * items [OpsEntity](#opsentity)
  * NextToken

### GetParameterHistoryRequest
* GetParameterHistoryRequest `object`
  * MaxResults
  * Name **required**
  * NextToken
  * WithDecryption

### GetParameterHistoryResult
* GetParameterHistoryResult `object`
  * NextToken
  * Parameters
    * items [ParameterHistory](#parameterhistory)

### GetParameterRequest
* GetParameterRequest `object`
  * Name **required**
  * WithDecryption

### GetParameterResult
* GetParameterResult `object`
  * Parameter
    * ARN
    * DataType
    * LastModifiedDate
    * Name
    * Selector
    * SourceResult
    * Type
    * Value
    * Version

### GetParametersByPathMaxResults
* GetParametersByPathMaxResults `integer`

### GetParametersByPathRequest
* GetParametersByPathRequest `object`
  * MaxResults
  * NextToken
  * ParameterFilters
    * items [ParameterStringFilter](#parameterstringfilter)
  * Path **required**
  * Recursive
  * WithDecryption

### GetParametersByPathResult
* GetParametersByPathResult `object`
  * NextToken
  * Parameters
    * items [Parameter](#parameter)

### GetParametersRequest
* GetParametersRequest `object`
  * Names **required**
    * items [PSParameterName](#psparametername)
  * WithDecryption

### GetParametersResult
* GetParametersResult `object`
  * InvalidParameters
    * items [PSParameterName](#psparametername)
  * Parameters
    * items [Parameter](#parameter)

### GetPatchBaselineForPatchGroupRequest
* GetPatchBaselineForPatchGroupRequest `object`
  * OperatingSystem
  * PatchGroup **required**

### GetPatchBaselineForPatchGroupResult
* GetPatchBaselineForPatchGroupResult `object`
  * BaselineId
  * OperatingSystem
  * PatchGroup

### GetPatchBaselineRequest
* GetPatchBaselineRequest `object`
  * BaselineId **required**

### GetPatchBaselineResult
* GetPatchBaselineResult `object`
  * ApprovalRules
    * PatchRules **required**
      * items [PatchRule](#patchrule)
  * ApprovedPatches
    * items [PatchId](#patchid)
  * ApprovedPatchesComplianceLevel
  * ApprovedPatchesEnableNonSecurity
  * BaselineId
  * CreatedDate
  * Description
  * GlobalFilters
    * PatchFilters **required**
      * items [PatchFilter](#patchfilter)
  * ModifiedDate
  * Name
  * OperatingSystem
  * PatchGroups
    * items [PatchGroup](#patchgroup)
  * RejectedPatches
    * items [PatchId](#patchid)
  * RejectedPatchesAction
  * Sources
    * items [PatchSource](#patchsource)

### GetServiceSettingRequest
* GetServiceSettingRequest `object`: The request body of the GetServiceSetting API action.
  * SettingId **required**

### GetServiceSettingResult
* GetServiceSettingResult `object`: The query result body of the GetServiceSetting API action.
  * ServiceSetting
    * ARN
    * LastModifiedDate
    * LastModifiedUser
    * SettingId
    * SettingValue
    * Status

### HierarchyLevelLimitExceededException


### HierarchyTypeMismatchException


### IPAddress
* IPAddress `string`

### ISO8601String
* ISO8601String `string`

### IamRole
* IamRole `string`

### IdempotencyToken
* IdempotencyToken `string`

### IdempotentParameterMismatch


### IncompatiblePolicyException


### InstallOverrideList
* InstallOverrideList `string`

### InstanceAggregatedAssociationOverview
* InstanceAggregatedAssociationOverview `object`: Status information about the aggregated associations.
  * DetailedStatus
  * InstanceAssociationStatusAggregatedCount

### InstanceAssociation
* InstanceAssociation `object`: One or more association documents on the instance. 
  * AssociationId
  * AssociationVersion
  * Content
  * InstanceId

### InstanceAssociationExecutionSummary
* InstanceAssociationExecutionSummary `string`

### InstanceAssociationList
* InstanceAssociationList `array`
  * items [InstanceAssociation](#instanceassociation)

### InstanceAssociationOutputLocation
* InstanceAssociationOutputLocation `object`: An S3 bucket where you want to store the results of this request.
  * S3Location
    * OutputS3BucketName
    * OutputS3KeyPrefix
    * OutputS3Region

### InstanceAssociationOutputUrl
* InstanceAssociationOutputUrl `object`: The URL of S3 bucket where you want to store the results of this request.
  * S3OutputUrl
    * OutputUrl

### InstanceAssociationStatusAggregatedCount
* InstanceAssociationStatusAggregatedCount `object`

### InstanceAssociationStatusInfo
* InstanceAssociationStatusInfo `object`: Status information about the instance association.
  * AssociationId
  * AssociationName
  * AssociationVersion
  * DetailedStatus
  * DocumentVersion
  * ErrorCode
  * ExecutionDate
  * ExecutionSummary
  * InstanceId
  * Name
  * OutputUrl
    * S3OutputUrl
      * OutputUrl
  * Status

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
  * ActivationId
  * AgentVersion
  * AssociationOverview
    * DetailedStatus
    * InstanceAssociationStatusAggregatedCount
  * AssociationStatus
  * ComputerName
  * IPAddress
  * IamRole
  * InstanceId
  * IsLatestVersion
  * LastAssociationExecutionDate
  * LastPingDateTime
  * LastSuccessfulAssociationExecutionDate
  * Name
  * PingStatus
  * PlatformName
  * PlatformType
  * PlatformVersion
  * RegistrationDate
  * ResourceType

### InstanceInformationFilter
* InstanceInformationFilter `object`: <p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this action instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and does not support tags. </p>
  * key **required**
  * valueSet **required**
    * items [InstanceInformationFilterValue](#instanceinformationfiltervalue)

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
  * Key **required**
  * Values **required**
    * items [InstanceInformationFilterValue](#instanceinformationfiltervalue)

### InstanceInformationStringFilterKey
* InstanceInformationStringFilterKey `string`

### InstanceInformationStringFilterList
* InstanceInformationStringFilterList `array`
  * items [InstanceInformationStringFilter](#instanceinformationstringfilter)

### InstancePatchState
* InstancePatchState `object`: Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.
  * BaselineId **required**
  * FailedCount
  * InstallOverrideList
  * InstalledCount
  * InstalledOtherCount
  * InstalledPendingRebootCount
  * InstalledRejectedCount
  * InstanceId **required**
  * LastNoRebootInstallOperationTime
  * MissingCount
  * NotApplicableCount
  * Operation **required**
  * OperationEndTime **required**
  * OperationStartTime **required**
  * OwnerInformation
  * PatchGroup **required**
  * RebootOption
  * SnapshotId
  * UnreportedNotApplicableCount

### InstancePatchStateFilter
* InstancePatchStateFilter `object`: Defines a filter used in <a>DescribeInstancePatchStatesForPatchGroup</a> used to scope down the information returned by the API.
  * Key **required**
  * Type **required**
  * Values **required**
    * items [InstancePatchStateFilterValue](#instancepatchstatefiltervalue)

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

### InstancesCount
* InstancesCount `integer`

### Integer
* Integer `integer`

### InternalServerError


### InvalidActivation


### InvalidActivationId


### InvalidAggregatorException


### InvalidAllowedPatternException


### InvalidAssociation


### InvalidAssociationVersion


### InvalidAutomationExecutionParametersException


### InvalidAutomationSignalException


### InvalidAutomationStatusUpdateException


### InvalidCommandId


### InvalidDeleteInventoryParametersException


### InvalidDeletionIdException


### InvalidDocument


### InvalidDocumentContent


### InvalidDocumentOperation


### InvalidDocumentSchemaVersion


### InvalidDocumentType


### InvalidDocumentVersion


### InvalidFilter


### InvalidFilterKey


### InvalidFilterOption


### InvalidFilterValue


### InvalidInstanceId


### InvalidInstanceInformationFilterValue


### InvalidInventoryGroupException


### InvalidInventoryItemContextException


### InvalidInventoryRequestException


### InvalidItemContentException


### InvalidKeyId


### InvalidNextToken


### InvalidNotificationConfig


### InvalidOptionException


### InvalidOutputFolder


### InvalidOutputLocation


### InvalidParameters


### InvalidPermissionType


### InvalidPluginName


### InvalidPolicyAttributeException


### InvalidPolicyTypeException


### InvalidResourceId


### InvalidResourceType


### InvalidResultAttributeException


### InvalidRole


### InvalidSchedule


### InvalidTarget


### InvalidTypeNameException


### InvalidUpdate


### InventoryAggregator
* InventoryAggregator `object`: Specifies the inventory type and attribute for the aggregation execution.
  * Aggregators
    * items [InventoryAggregator](#inventoryaggregator)
  * Expression
  * Groups
    * items [InventoryGroup](#inventorygroup)

### InventoryAggregatorExpression
* InventoryAggregatorExpression `string`

### InventoryAggregatorList
* InventoryAggregatorList `array`
  * items [InventoryAggregator](#inventoryaggregator)

### InventoryAttributeDataType
* InventoryAttributeDataType `string` (values: string, number)

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
  * DeletionId
  * DeletionStartTime
  * DeletionSummary
    * RemainingCount
    * SummaryItems
      * items [InventoryDeletionSummaryItem](#inventorydeletionsummaryitem)
    * TotalCount
  * LastStatus
  * LastStatusMessage
  * LastStatusUpdateTime
  * TypeName

### InventoryDeletionSummary
* InventoryDeletionSummary `object`: Information about the delete operation.
  * RemainingCount
  * SummaryItems
    * items [InventoryDeletionSummaryItem](#inventorydeletionsummaryitem)
  * TotalCount

### InventoryDeletionSummaryItem
* InventoryDeletionSummaryItem `object`: Either a count, remaining count, or a version number in a delete inventory summary.
  * Count
  * RemainingCount
  * Version

### InventoryDeletionSummaryItems
* InventoryDeletionSummaryItems `array`
  * items [InventoryDeletionSummaryItem](#inventorydeletionsummaryitem)

### InventoryDeletionsList
* InventoryDeletionsList `array`
  * items [InventoryDeletionStatusItem](#inventorydeletionstatusitem)

### InventoryFilter
* InventoryFilter `object`: One or more filters. Use a filter to return a more specific list of results.
  * Key **required**
  * Type
  * Values **required**
    * items [InventoryFilterValue](#inventoryfiltervalue)

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

### InventoryGroup
* InventoryGroup `object`: A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
  * Filters **required**
    * items [InventoryFilter](#inventoryfilter)
  * Name **required**

### InventoryGroupList
* InventoryGroupList `array`
  * items [InventoryGroup](#inventorygroup)

### InventoryGroupName
* InventoryGroupName `string`

### InventoryItem
* InventoryItem `object`: Information collected from managed instances based on your inventory policy document
  * CaptureTime **required**
  * Content
    * items [InventoryItemEntry](#inventoryitementry)
  * ContentHash
  * Context
  * SchemaVersion **required**
  * TypeName **required**

### InventoryItemAttribute
* InventoryItemAttribute `object`: Attributes are the entries within the inventory item content. It contains name and value.
  * DataType **required**
  * Name **required**

### InventoryItemAttributeList
* InventoryItemAttributeList `array`
  * items [InventoryItemAttribute](#inventoryitemattribute)

### InventoryItemAttributeName
* InventoryItemAttributeName `string`

### InventoryItemCaptureTime
* InventoryItemCaptureTime `string`

### InventoryItemContentContext
* InventoryItemContentContext `object`

### InventoryItemContentHash
* InventoryItemContentHash `string`

### InventoryItemEntry
* InventoryItemEntry `object`

### InventoryItemEntryList
* InventoryItemEntryList `array`
  * items [InventoryItemEntry](#inventoryitementry)

### InventoryItemList
* InventoryItemList `array`
  * items [InventoryItem](#inventoryitem)

### InventoryItemSchema
* InventoryItemSchema `object`: The inventory item schema definition. Users can use this to compose inventory query filters.
  * Attributes **required**
    * items [InventoryItemAttribute](#inventoryitemattribute)
  * DisplayName
  * TypeName **required**
  * Version

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
* InventoryQueryOperatorType `string` (values: Equal, NotEqual, BeginWith, LessThan, GreaterThan, Exists)

### InventoryResultEntity
* InventoryResultEntity `object`: Inventory query results.
  * Data
  * Id

### InventoryResultEntityId
* InventoryResultEntityId `string`

### InventoryResultEntityList
* InventoryResultEntityList `array`
  * items [InventoryResultEntity](#inventoryresultentity)

### InventoryResultItem
* InventoryResultItem `object`: The inventory result item.
  * CaptureTime
  * Content **required**
    * items [InventoryItemEntry](#inventoryitementry)
  * ContentHash
  * SchemaVersion **required**
  * TypeName **required**

### InventoryResultItemKey
* InventoryResultItemKey `string`

### InventoryResultItemMap
* InventoryResultItemMap `object`

### InventorySchemaDeleteOption
* InventorySchemaDeleteOption `string` (values: DisableSchema, DeleteSchema)

### InventoryTypeDisplayName
* InventoryTypeDisplayName `string`

### InvocationDoesNotExist


### InvocationTraceOutput
* InvocationTraceOutput `string`

### IsSubTypeSchema
* IsSubTypeSchema `boolean`

### ItemContentMismatchException


### ItemSizeLimitExceededException


### KeyList
* KeyList `array`
  * items [TagKey](#tagkey)

### LabelParameterVersionRequest
* LabelParameterVersionRequest `object`
  * Labels **required**
    * items [ParameterLabel](#parameterlabel)
  * Name **required**
  * ParameterVersion

### LabelParameterVersionResult
* LabelParameterVersionResult `object`
  * InvalidLabels
    * items [ParameterLabel](#parameterlabel)
  * ParameterVersion

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
  * AssociationId **required**
  * MaxResults
  * NextToken

### ListAssociationVersionsResult
* ListAssociationVersionsResult `object`
  * AssociationVersions
    * items [AssociationVersionInfo](#associationversioninfo)
  * NextToken

### ListAssociationsRequest
* ListAssociationsRequest `object`
  * AssociationFilterList
    * items [AssociationFilter](#associationfilter)
  * MaxResults
  * NextToken

### ListAssociationsResult
* ListAssociationsResult `object`
  * Associations
    * items [Association](#association)
  * NextToken

### ListCommandInvocationsRequest
* ListCommandInvocationsRequest `object`
  * CommandId
  * Details
  * Filters
    * items [CommandFilter](#commandfilter)
  * InstanceId
  * MaxResults
  * NextToken

### ListCommandInvocationsResult
* ListCommandInvocationsResult `object`
  * CommandInvocations
    * items [CommandInvocation](#commandinvocation)
  * NextToken

### ListCommandsRequest
* ListCommandsRequest `object`
  * CommandId
  * Filters
    * items [CommandFilter](#commandfilter)
  * InstanceId
  * MaxResults
  * NextToken

### ListCommandsResult
* ListCommandsResult `object`
  * Commands
    * items [Command](#command)
  * NextToken

### ListComplianceItemsRequest
* ListComplianceItemsRequest `object`
  * Filters
    * items [ComplianceStringFilter](#compliancestringfilter)
  * MaxResults
  * NextToken
  * ResourceIds
    * items [ComplianceResourceId](#complianceresourceid)
  * ResourceTypes
    * items [ComplianceResourceType](#complianceresourcetype)

### ListComplianceItemsResult
* ListComplianceItemsResult `object`
  * ComplianceItems
    * items [ComplianceItem](#complianceitem)
  * NextToken

### ListComplianceSummariesRequest
* ListComplianceSummariesRequest `object`
  * Filters
    * items [ComplianceStringFilter](#compliancestringfilter)
  * MaxResults
  * NextToken

### ListComplianceSummariesResult
* ListComplianceSummariesResult `object`
  * ComplianceSummaryItems
    * items [ComplianceSummaryItem](#compliancesummaryitem)
  * NextToken

### ListDocumentMetadataHistoryRequest
* ListDocumentMetadataHistoryRequest `object`
  * DocumentVersion
  * MaxResults
  * Metadata **required**
  * Name **required**
  * NextToken

### ListDocumentMetadataHistoryResponse
* ListDocumentMetadataHistoryResponse `object`
  * Author
  * DocumentVersion
  * Metadata
    * ReviewerResponse
      * items [DocumentReviewerResponseSource](#documentreviewerresponsesource)
  * Name
  * NextToken

### ListDocumentVersionsRequest
* ListDocumentVersionsRequest `object`
  * MaxResults
  * Name **required**
  * NextToken

### ListDocumentVersionsResult
* ListDocumentVersionsResult `object`
  * DocumentVersions
    * items [DocumentVersionInfo](#documentversioninfo)
  * NextToken

### ListDocumentsRequest
* ListDocumentsRequest `object`
  * DocumentFilterList
    * items [DocumentFilter](#documentfilter)
  * Filters
    * items [DocumentKeyValuesFilter](#documentkeyvaluesfilter)
  * MaxResults
  * NextToken

### ListDocumentsResult
* ListDocumentsResult `object`
  * DocumentIdentifiers
    * items [DocumentIdentifier](#documentidentifier)
  * NextToken

### ListInventoryEntriesRequest
* ListInventoryEntriesRequest `object`
  * Filters
    * items [InventoryFilter](#inventoryfilter)
  * InstanceId **required**
  * MaxResults
  * NextToken
  * TypeName **required**

### ListInventoryEntriesResult
* ListInventoryEntriesResult `object`
  * CaptureTime
  * Entries
    * items [InventoryItemEntry](#inventoryitementry)
  * InstanceId
  * NextToken
  * SchemaVersion
  * TypeName

### ListOpsItemEventsRequest
* ListOpsItemEventsRequest `object`
  * Filters
    * items [OpsItemEventFilter](#opsitemeventfilter)
  * MaxResults
  * NextToken

### ListOpsItemEventsResponse
* ListOpsItemEventsResponse `object`
  * NextToken
  * Summaries
    * items [OpsItemEventSummary](#opsitemeventsummary)

### ListOpsMetadataMaxResults
* ListOpsMetadataMaxResults `integer`

### ListOpsMetadataRequest
* ListOpsMetadataRequest `object`
  * Filters
    * items [OpsMetadataFilter](#opsmetadatafilter)
  * MaxResults
  * NextToken

### ListOpsMetadataResult
* ListOpsMetadataResult `object`
  * NextToken
  * OpsMetadataList
    * items [OpsMetadata](#opsmetadata)

### ListResourceComplianceSummariesRequest
* ListResourceComplianceSummariesRequest `object`
  * Filters
    * items [ComplianceStringFilter](#compliancestringfilter)
  * MaxResults
  * NextToken

### ListResourceComplianceSummariesResult
* ListResourceComplianceSummariesResult `object`
  * NextToken
  * ResourceComplianceSummaryItems
    * items [ResourceComplianceSummaryItem](#resourcecompliancesummaryitem)

### ListResourceDataSyncRequest
* ListResourceDataSyncRequest `object`
  * MaxResults
  * NextToken
  * SyncType

### ListResourceDataSyncResult
* ListResourceDataSyncResult `object`
  * NextToken
  * ResourceDataSyncItems
    * items [ResourceDataSyncItem](#resourcedatasyncitem)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceId **required**
  * ResourceType **required**

### ListTagsForResourceResult
* ListTagsForResourceResult `object`
  * TagList
    * items [Tag](#tag)

### LoggingInfo
* LoggingInfo `object`: <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
  * S3BucketName **required**
  * S3KeyPrefix
  * S3Region **required**

### Long
* Long `integer`

### MaintenanceWindowAllowUnassociatedTargets
* MaintenanceWindowAllowUnassociatedTargets `boolean`

### MaintenanceWindowAutomationParameters
* MaintenanceWindowAutomationParameters `object`: The parameters for an AUTOMATION task type.
  * DocumentVersion
  * Parameters

### MaintenanceWindowCutoff
* MaintenanceWindowCutoff `integer`

### MaintenanceWindowDescription
* MaintenanceWindowDescription `string`

### MaintenanceWindowDurationHours
* MaintenanceWindowDurationHours `integer`

### MaintenanceWindowEnabled
* MaintenanceWindowEnabled `boolean`

### MaintenanceWindowExecution
* MaintenanceWindowExecution `object`: Describes the information about an execution of a maintenance window. 
  * EndTime
  * StartTime
  * Status
  * StatusDetails
  * WindowExecutionId
  * WindowId

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
* MaintenanceWindowExecutionTaskIdentity `object`: Information about a task execution performed as part of a maintenance window execution.
  * EndTime
  * StartTime
  * Status
  * StatusDetails
  * TaskArn
  * TaskExecutionId
  * TaskType
  * WindowExecutionId

### MaintenanceWindowExecutionTaskIdentityList
* MaintenanceWindowExecutionTaskIdentityList `array`
  * items [MaintenanceWindowExecutionTaskIdentity](#maintenancewindowexecutiontaskidentity)

### MaintenanceWindowExecutionTaskInvocationId
* MaintenanceWindowExecutionTaskInvocationId `string`

### MaintenanceWindowExecutionTaskInvocationIdentity
* MaintenanceWindowExecutionTaskInvocationIdentity `object`: Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution.
  * EndTime
  * ExecutionId
  * InvocationId
  * OwnerInformation
  * Parameters
  * StartTime
  * Status
  * StatusDetails
  * TaskExecutionId
  * TaskType
  * WindowExecutionId
  * WindowTargetId

### MaintenanceWindowExecutionTaskInvocationIdentityList
* MaintenanceWindowExecutionTaskInvocationIdentityList `array`
  * items [MaintenanceWindowExecutionTaskInvocationIdentity](#maintenancewindowexecutiontaskinvocationidentity)

### MaintenanceWindowExecutionTaskInvocationParameters
* MaintenanceWindowExecutionTaskInvocationParameters `string`

### MaintenanceWindowFilter
* MaintenanceWindowFilter `object`: Filter used in the request. Supported filter keys are Name and Enabled.
  * Key
  * Values
    * items [MaintenanceWindowFilterValue](#maintenancewindowfiltervalue)

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
* MaintenanceWindowIdentity `object`: Information about the maintenance window.
  * Cutoff
  * Description
  * Duration
  * Enabled
  * EndDate
  * Name
  * NextExecutionTime
  * Schedule
  * ScheduleOffset
  * ScheduleTimezone
  * StartDate
  * WindowId

### MaintenanceWindowIdentityForTarget
* MaintenanceWindowIdentityForTarget `object`: The maintenance window to which the specified target belongs.
  * Name
  * WindowId

### MaintenanceWindowIdentityList
* MaintenanceWindowIdentityList `array`
  * items [MaintenanceWindowIdentity](#maintenancewindowidentity)

### MaintenanceWindowLambdaClientContext
* MaintenanceWindowLambdaClientContext `string`

### MaintenanceWindowLambdaParameters
* MaintenanceWindowLambdaParameters `object`: <p>The parameters for a LAMBDA task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note>
  * ClientContext
  * Payload
  * Qualifier

### MaintenanceWindowLambdaPayload
* MaintenanceWindowLambdaPayload `string`

### MaintenanceWindowLambdaQualifier
* MaintenanceWindowLambdaQualifier `string`

### MaintenanceWindowMaxResults
* MaintenanceWindowMaxResults `integer`

### MaintenanceWindowName
* MaintenanceWindowName `string`

### MaintenanceWindowOffset
* MaintenanceWindowOffset `integer`

### MaintenanceWindowResourceType
* MaintenanceWindowResourceType `string` (values: INSTANCE, RESOURCE_GROUP)

### MaintenanceWindowRunCommandParameters
* MaintenanceWindowRunCommandParameters `object`: <p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note>
  * CloudWatchOutputConfig [CloudWatchOutputConfig](#cloudwatchoutputconfig)
  * Comment
  * DocumentHash
  * DocumentHashType
  * DocumentVersion
  * NotificationConfig
    * NotificationArn
    * NotificationEvents
      * items [NotificationEvent](#notificationevent)
    * NotificationType
  * OutputS3BucketName
  * OutputS3KeyPrefix
  * Parameters
  * ServiceRoleArn
  * TimeoutSeconds

### MaintenanceWindowSchedule
* MaintenanceWindowSchedule `string`

### MaintenanceWindowSearchMaxResults
* MaintenanceWindowSearchMaxResults `integer`

### MaintenanceWindowStepFunctionsInput
* MaintenanceWindowStepFunctionsInput `string`

### MaintenanceWindowStepFunctionsName
* MaintenanceWindowStepFunctionsName `string`

### MaintenanceWindowStepFunctionsParameters
* MaintenanceWindowStepFunctionsParameters `object`: <p>The parameters for a STEP_FUNCTIONS task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note>
  * Input
  * Name

### MaintenanceWindowStringDateTime
* MaintenanceWindowStringDateTime `string`

### MaintenanceWindowTarget
* MaintenanceWindowTarget `object`: The target registered with the maintenance window.
  * Description
  * Name
  * OwnerInformation
  * ResourceType
  * Targets
    * items [Target](#target)
  * WindowId
  * WindowTargetId

### MaintenanceWindowTargetId
* MaintenanceWindowTargetId `string`

### MaintenanceWindowTargetList
* MaintenanceWindowTargetList `array`
  * items [MaintenanceWindowTarget](#maintenancewindowtarget)

### MaintenanceWindowTask
* MaintenanceWindowTask `object`: Information about a task defined for a maintenance window.
  * Description
  * LoggingInfo
    * S3BucketName **required**
    * S3KeyPrefix
    * S3Region **required**
  * MaxConcurrency
  * MaxErrors
  * Name
  * Priority
  * ServiceRoleArn
  * Targets
    * items [Target](#target)
  * TaskArn
  * TaskParameters
  * Type
  * WindowId
  * WindowTaskId

### MaintenanceWindowTaskArn
* MaintenanceWindowTaskArn `string`

### MaintenanceWindowTaskId
* MaintenanceWindowTaskId `string`

### MaintenanceWindowTaskInvocationParameters
* MaintenanceWindowTaskInvocationParameters `object`: The parameters for task execution.
  * Automation
    * DocumentVersion
    * Parameters
  * Lambda
    * ClientContext
    * Payload
    * Qualifier
  * RunCommand
    * CloudWatchOutputConfig [CloudWatchOutputConfig](#cloudwatchoutputconfig)
    * Comment
    * DocumentHash
    * DocumentHashType
    * DocumentVersion
    * NotificationConfig
      * NotificationArn
      * NotificationEvents
        * items [NotificationEvent](#notificationevent)
      * NotificationType
    * OutputS3BucketName
    * OutputS3KeyPrefix
    * Parameters
    * ServiceRoleArn
    * TimeoutSeconds
  * StepFunctions
    * Input
    * Name

### MaintenanceWindowTaskList
* MaintenanceWindowTaskList `array`
  * items [MaintenanceWindowTask](#maintenancewindowtask)

### MaintenanceWindowTaskParameterName
* MaintenanceWindowTaskParameterName `string`

### MaintenanceWindowTaskParameterValue
* MaintenanceWindowTaskParameterValue `string`

### MaintenanceWindowTaskParameterValueExpression
* MaintenanceWindowTaskParameterValueExpression `object`: Defines the values for a task parameter.
  * Values
    * items [MaintenanceWindowTaskParameterValue](#maintenancewindowtaskparametervalue)

### MaintenanceWindowTaskParameterValueList
* MaintenanceWindowTaskParameterValueList `array`
  * items [MaintenanceWindowTaskParameterValue](#maintenancewindowtaskparametervalue)

### MaintenanceWindowTaskParameters
* MaintenanceWindowTaskParameters `object`

### MaintenanceWindowTaskParametersList
* MaintenanceWindowTaskParametersList `array`
  * items [MaintenanceWindowTaskParameters](#maintenancewindowtaskparameters)

### MaintenanceWindowTaskPriority
* MaintenanceWindowTaskPriority `integer`

### MaintenanceWindowTaskTargetId
* MaintenanceWindowTaskTargetId `string`

### MaintenanceWindowTaskType
* MaintenanceWindowTaskType `string` (values: RUN_COMMAND, AUTOMATION, STEP_FUNCTIONS, LAMBDA)

### MaintenanceWindowTimezone
* MaintenanceWindowTimezone `string`

### MaintenanceWindowsForTargetList
* MaintenanceWindowsForTargetList `array`
  * items [MaintenanceWindowIdentityForTarget](#maintenancewindowidentityfortarget)

### ManagedInstanceId
* ManagedInstanceId `string`

### MaxConcurrency
* MaxConcurrency `string`

### MaxDocumentSizeExceeded


### MaxErrors
* MaxErrors `string`

### MaxResults
* MaxResults `integer`

### MaxResultsEC2Compatible
* MaxResultsEC2Compatible `integer`

### MetadataKey
* MetadataKey `string`

### MetadataKeysToDeleteList
* MetadataKeysToDeleteList `array`
  * items [MetadataKey](#metadatakey)

### MetadataMap
* MetadataMap `object`

### MetadataValue
* MetadataValue `object`: Metadata to assign to an Application Manager application.
  * Value

### MetadataValueString
* MetadataValueString `string`

### ModifyDocumentPermissionRequest
* ModifyDocumentPermissionRequest `object`
  * AccountIdsToAdd
    * items [AccountId](#accountid)
  * AccountIdsToRemove
    * items [AccountId](#accountid)
  * Name **required**
  * PermissionType **required**
  * SharedDocumentVersion

### ModifyDocumentPermissionResponse
* ModifyDocumentPermissionResponse `object`

### NextToken
* NextToken `string`

### NonCompliantSummary
* NonCompliantSummary `object`: A summary of resources that are not compliant. The summary is organized according to resource type.
  * NonCompliantCount
  * SeveritySummary
    * CriticalCount
    * HighCount
    * InformationalCount
    * LowCount
    * MediumCount
    * UnspecifiedCount

### NormalStringMap
* NormalStringMap `object`

### NotificationArn
* NotificationArn `string`

### NotificationConfig
* NotificationConfig `object`: Configurations for sending notifications.
  * NotificationArn
  * NotificationEvents
    * items [NotificationEvent](#notificationevent)
  * NotificationType

### NotificationEvent
* NotificationEvent `string` (values: All, InProgress, Success, TimedOut, Cancelled, Failed)

### NotificationEventList
* NotificationEventList `array`
  * items [NotificationEvent](#notificationevent)

### NotificationType
* NotificationType `string` (values: Command, Invocation)

### OperatingSystem
* OperatingSystem `string` (values: WINDOWS, AMAZON_LINUX, AMAZON_LINUX_2, UBUNTU, REDHAT_ENTERPRISE_LINUX, SUSE, CENTOS, ORACLE_LINUX, DEBIAN, MACOS)

### OpsAggregator
* OpsAggregator `object`: One or more aggregators for viewing counts of OpsItems using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few.
  * AggregatorType
  * Aggregators
    * items [OpsAggregator](#opsaggregator)
  * AttributeName
  * Filters
    * items [OpsFilter](#opsfilter)
  * TypeName
  * Values

### OpsAggregatorList
* OpsAggregatorList `array`
  * items [OpsAggregator](#opsaggregator)

### OpsAggregatorType
* OpsAggregatorType `string`

### OpsAggregatorValue
* OpsAggregatorValue `string`

### OpsAggregatorValueKey
* OpsAggregatorValueKey `string`

### OpsAggregatorValueMap
* OpsAggregatorValueMap `object`

### OpsDataAttributeName
* OpsDataAttributeName `string`

### OpsDataTypeName
* OpsDataTypeName `string`

### OpsEntity
* OpsEntity `object`: The result of the query.
  * Data
  * Id

### OpsEntityId
* OpsEntityId `string`

### OpsEntityItem
* OpsEntityItem `object`: The OpsItem summaries result item.
  * CaptureTime
  * Content
    * items [OpsEntityItemEntry](#opsentityitementry)

### OpsEntityItemCaptureTime
* OpsEntityItemCaptureTime `string`

### OpsEntityItemEntry
* OpsEntityItemEntry `object`

### OpsEntityItemEntryList
* OpsEntityItemEntryList `array`
  * items [OpsEntityItemEntry](#opsentityitementry)

### OpsEntityItemKey
* OpsEntityItemKey `string`

### OpsEntityItemMap
* OpsEntityItemMap `object`

### OpsEntityList
* OpsEntityList `array`
  * items [OpsEntity](#opsentity)

### OpsFilter
* OpsFilter `object`: A filter for viewing OpsItem summaries.
  * Key **required**
  * Type
  * Values **required**
    * items [OpsFilterValue](#opsfiltervalue)

### OpsFilterKey
* OpsFilterKey `string`

### OpsFilterList
* OpsFilterList `array`
  * items [OpsFilter](#opsfilter)

### OpsFilterOperatorType
* OpsFilterOperatorType `string` (values: Equal, NotEqual, BeginWith, LessThan, GreaterThan, Exists)

### OpsFilterValue
* OpsFilterValue `string`

### OpsFilterValueList
* OpsFilterValueList `array`
  * items [OpsFilterValue](#opsfiltervalue)

### OpsItem
* OpsItem `object`: Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. 
  * ActualEndTime
  * ActualStartTime
  * Category
  * CreatedBy
  * CreatedTime
  * Description
  * LastModifiedBy
  * LastModifiedTime
  * Notifications
    * items [OpsItemNotification](#opsitemnotification)
  * OperationalData
  * OpsItemId
  * OpsItemType
  * PlannedEndTime
  * PlannedStartTime
  * Priority
  * RelatedOpsItems
    * items [RelatedOpsItem](#relatedopsitem)
  * Severity
  * Source
  * Status
  * Title
  * Version

### OpsItemAlreadyExistsException


### OpsItemCategory
* OpsItemCategory `string`

### OpsItemDataKey
* OpsItemDataKey `string`

### OpsItemDataType
* OpsItemDataType `string` (values: SearchableString, String)

### OpsItemDataValue
* OpsItemDataValue `object`: An object that defines the value of the key and its type in the OperationalData map.
  * Type
  * Value

### OpsItemDataValueString
* OpsItemDataValueString `string`

### OpsItemDescription
* OpsItemDescription `string`

### OpsItemEventFilter
* OpsItemEventFilter `object`: Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping. 
  * Key **required**
  * Operator **required**
  * Values **required**
    * items [OpsItemEventFilterValue](#opsitemeventfiltervalue)

### OpsItemEventFilterKey
* OpsItemEventFilterKey `string` (values: OpsItemId)

### OpsItemEventFilterOperator
* OpsItemEventFilterOperator `string` (values: Equal)

### OpsItemEventFilterValue
* OpsItemEventFilterValue `string`

### OpsItemEventFilterValues
* OpsItemEventFilterValues `array`
  * items [OpsItemEventFilterValue](#opsitemeventfiltervalue)

### OpsItemEventFilters
* OpsItemEventFilters `array`
  * items [OpsItemEventFilter](#opsitemeventfilter)

### OpsItemEventMaxResults
* OpsItemEventMaxResults `integer`

### OpsItemEventSummaries
* OpsItemEventSummaries `array`
  * items [OpsItemEventSummary](#opsitemeventsummary)

### OpsItemEventSummary
* OpsItemEventSummary `object`: Summary information about an OpsItem event.
  * CreatedBy
    * Arn
  * CreatedTime
  * Detail
  * DetailType
  * EventId
  * OpsItemId
  * Source

### OpsItemFilter
* OpsItemFilter `object`: Describes an OpsItem filter.
  * Key **required**
  * Operator **required**
  * Values **required**
    * items [OpsItemFilterValue](#opsitemfiltervalue)

### OpsItemFilterKey
* OpsItemFilterKey `string` (values: Status, CreatedBy, Source, Priority, Title, OpsItemId, CreatedTime, LastModifiedTime, ActualStartTime, ActualEndTime, PlannedStartTime, PlannedEndTime, OperationalData, OperationalDataKey, OperationalDataValue, ResourceId, AutomationId, Category, Severity, OpsItemType, ChangeRequestByRequesterArn, ChangeRequestByRequesterName, ChangeRequestByApproverArn, ChangeRequestByApproverName, ChangeRequestByTemplate, ChangeRequestByTargetsResourceGroup)

### OpsItemFilterOperator
* OpsItemFilterOperator `string` (values: Equal, Contains, GreaterThan, LessThan)

### OpsItemFilterValue
* OpsItemFilterValue `string`

### OpsItemFilterValues
* OpsItemFilterValues `array`
  * items [OpsItemFilterValue](#opsitemfiltervalue)

### OpsItemFilters
* OpsItemFilters `array`
  * items [OpsItemFilter](#opsitemfilter)

### OpsItemId
* OpsItemId `string`

### OpsItemIdentity
* OpsItemIdentity `object`: Information about the user or resource that created an OpsItem event.
  * Arn

### OpsItemInvalidParameterException


### OpsItemLimitExceededException


### OpsItemMaxResults
* OpsItemMaxResults `integer`

### OpsItemNotFoundException


### OpsItemNotification
* OpsItemNotification `object`: A notification about the OpsItem.
  * Arn

### OpsItemNotifications
* OpsItemNotifications `array`
  * items [OpsItemNotification](#opsitemnotification)

### OpsItemOperationalData
* OpsItemOperationalData `object`

### OpsItemOpsDataKeysList
* OpsItemOpsDataKeysList `array`
  * items [String](#string)

### OpsItemPriority
* OpsItemPriority `integer`

### OpsItemSeverity
* OpsItemSeverity `string`

### OpsItemSource
* OpsItemSource `string`

### OpsItemStatus
* OpsItemStatus `string` (values: Open, InProgress, Resolved, Pending, TimedOut, Cancelling, Cancelled, Failed, CompletedWithSuccess, CompletedWithFailure, Scheduled, RunbookInProgress, PendingChangeCalendarOverride, ChangeCalendarOverrideApproved, ChangeCalendarOverrideRejected, PendingApproval, Approved, Rejected)

### OpsItemSummaries
* OpsItemSummaries `array`
  * items [OpsItemSummary](#opsitemsummary)

### OpsItemSummary
* OpsItemSummary `object`: A count of OpsItems.
  * ActualEndTime
  * ActualStartTime
  * Category
  * CreatedBy
  * CreatedTime
  * LastModifiedBy
  * LastModifiedTime
  * OperationalData
  * OpsItemId
  * OpsItemType
  * PlannedEndTime
  * PlannedStartTime
  * Priority
  * Severity
  * Source
  * Status
  * Title

### OpsItemTitle
* OpsItemTitle `string`

### OpsItemType
* OpsItemType `string`

### OpsMetadata
* OpsMetadata `object`: Operational metadata for an application in Application Manager.
  * CreationDate
  * LastModifiedDate
  * LastModifiedUser
  * OpsMetadataArn
  * ResourceId

### OpsMetadataAlreadyExistsException


### OpsMetadataArn
* OpsMetadataArn `string`

### OpsMetadataFilter
* OpsMetadataFilter `object`: A filter to limit the number of OpsMetadata objects displayed.
  * Key **required**
  * Values **required**
    * items [OpsMetadataFilterValue](#opsmetadatafiltervalue)

### OpsMetadataFilterKey
* OpsMetadataFilterKey `string`

### OpsMetadataFilterList
* OpsMetadataFilterList `array`
  * items [OpsMetadataFilter](#opsmetadatafilter)

### OpsMetadataFilterValue
* OpsMetadataFilterValue `string`

### OpsMetadataFilterValueList
* OpsMetadataFilterValueList `array`
  * items [OpsMetadataFilterValue](#opsmetadatafiltervalue)

### OpsMetadataInvalidArgumentException


### OpsMetadataKeyLimitExceededException


### OpsMetadataLimitExceededException


### OpsMetadataList
* OpsMetadataList `array`
  * items [OpsMetadata](#opsmetadata)

### OpsMetadataNotFoundException


### OpsMetadataResourceId
* OpsMetadataResourceId `string`

### OpsMetadataTooManyUpdatesException


### OpsResultAttribute
* OpsResultAttribute `object`: The OpsItem data type to return.
  * TypeName **required**

### OpsResultAttributeList
* OpsResultAttributeList `array`
  * items [OpsResultAttribute](#opsresultattribute)

### OutputSource
* OutputSource `object`: Information about the source where the association execution details are stored.
  * OutputSourceId
  * OutputSourceType

### OutputSourceId
* OutputSourceId `string`

### OutputSourceType
* OutputSourceType `string`

### OwnerInformation
* OwnerInformation `string`

### PSParameterName
* PSParameterName `string`

### PSParameterSelector
* PSParameterSelector `string`

### PSParameterValue
* PSParameterValue `string`

### PSParameterVersion
* PSParameterVersion `integer`

### Parameter
* Parameter `object`: An Systems Manager parameter in Parameter Store.
  * ARN
  * DataType
  * LastModifiedDate
  * Name
  * Selector
  * SourceResult
  * Type
  * Value
  * Version

### ParameterAlreadyExists


### ParameterDataType
* ParameterDataType `string`

### ParameterDescription
* ParameterDescription `string`

### ParameterHistory
* ParameterHistory `object`: Information about parameter usage.
  * AllowedPattern
  * DataType
  * Description
  * KeyId
  * Labels
    * items [ParameterLabel](#parameterlabel)
  * LastModifiedDate
  * LastModifiedUser
  * Name
  * Policies
    * items [ParameterInlinePolicy](#parameterinlinepolicy)
  * Tier
  * Type
  * Value
  * Version

### ParameterHistoryList
* ParameterHistoryList `array`
  * items [ParameterHistory](#parameterhistory)

### ParameterInlinePolicy
* ParameterInlinePolicy `object`: One or more policies assigned to a parameter.
  * PolicyStatus
  * PolicyText
  * PolicyType

### ParameterKeyId
* ParameterKeyId `string`

### ParameterLabel
* ParameterLabel `string`

### ParameterLabelList
* ParameterLabelList `array`
  * items [ParameterLabel](#parameterlabel)

### ParameterLimitExceeded


### ParameterList
* ParameterList `array`
  * items [Parameter](#parameter)

### ParameterMaxVersionLimitExceeded


### ParameterMetadata
* ParameterMetadata `object`: Metadata includes information like the ARN of the last user and the date/time the parameter was last used.
  * AllowedPattern
  * DataType
  * Description
  * KeyId
  * LastModifiedDate
  * LastModifiedUser
  * Name
  * Policies
    * items [ParameterInlinePolicy](#parameterinlinepolicy)
  * Tier
  * Type
  * Version

### ParameterMetadataList
* ParameterMetadataList `array`
  * items [ParameterMetadata](#parametermetadata)

### ParameterName
* ParameterName `string`

### ParameterNameList
* ParameterNameList `array`
  * items [PSParameterName](#psparametername)

### ParameterNotFound


### ParameterPatternMismatchException


### ParameterPolicies
* ParameterPolicies `string`

### ParameterPolicyList
* ParameterPolicyList `array`
  * items [ParameterInlinePolicy](#parameterinlinepolicy)

### ParameterStringFilter
* ParameterStringFilter `object`: One or more filters. Use a filter to return a more specific list of results.
  * Key **required**
  * Option
  * Values
    * items [ParameterStringFilterValue](#parameterstringfiltervalue)

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

### ParameterTier
* ParameterTier `string` (values: Standard, Advanced, Intelligent-Tiering)

### ParameterType
* ParameterType `string` (values: String, StringList, SecureString)

### ParameterValue
* ParameterValue `string`

### ParameterValueList
* ParameterValueList `array`
  * items [ParameterValue](#parametervalue)

### ParameterVersionLabelLimitExceeded


### ParameterVersionNotFound


### Parameters
* Parameters `object`

### ParametersFilter
* ParametersFilter `object`: This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.
  * Key **required**
  * Values **required**
    * items [ParametersFilterValue](#parametersfiltervalue)

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
  * AdvisoryIds
    * items [PatchAdvisoryId](#patchadvisoryid)
  * Arch
  * BugzillaIds
    * items [PatchBugzillaId](#patchbugzillaid)
  * CVEIds
    * items [PatchCVEId](#patchcveid)
  * Classification
  * ContentUrl
  * Description
  * Epoch
  * Id
  * KbNumber
  * Language
  * MsrcNumber
  * MsrcSeverity
  * Name
  * Product
  * ProductFamily
  * Release
  * ReleaseDate
  * Repository
  * Severity
  * Title
  * Vendor
  * Version

### PatchAction
* PatchAction `string` (values: ALLOW_AS_DEPENDENCY, BLOCK)

### PatchAdvisoryId
* PatchAdvisoryId `string`

### PatchAdvisoryIdList
* PatchAdvisoryIdList `array`
  * items [PatchAdvisoryId](#patchadvisoryid)

### PatchArch
* PatchArch `string`

### PatchBaselineIdentity
* PatchBaselineIdentity `object`: Defines the basic information about a patch baseline.
  * BaselineDescription
  * BaselineId
  * BaselineName
  * DefaultBaseline
  * OperatingSystem

### PatchBaselineIdentityList
* PatchBaselineIdentityList `array`
  * items [PatchBaselineIdentity](#patchbaselineidentity)

### PatchBaselineMaxResults
* PatchBaselineMaxResults `integer`

### PatchBugzillaId
* PatchBugzillaId `string`

### PatchBugzillaIdList
* PatchBugzillaIdList `array`
  * items [PatchBugzillaId](#patchbugzillaid)

### PatchCVEId
* PatchCVEId `string`

### PatchCVEIdList
* PatchCVEIdList `array`
  * items [PatchCVEId](#patchcveid)

### PatchCVEIds
* PatchCVEIds `string`

### PatchClassification
* PatchClassification `string`

### PatchComplianceData
* PatchComplianceData `object`: Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance.
  * CVEIds
  * Classification **required**
  * InstalledTime **required**
  * KBId **required**
  * Severity **required**
  * State **required**
  * Title **required**

### PatchComplianceDataList
* PatchComplianceDataList `array`
  * items [PatchComplianceData](#patchcompliancedata)

### PatchComplianceDataState
* PatchComplianceDataState `string` (values: INSTALLED, INSTALLED_OTHER, INSTALLED_PENDING_REBOOT, INSTALLED_REJECTED, MISSING, NOT_APPLICABLE, FAILED)

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

### PatchEpoch
* PatchEpoch `integer`

### PatchFailedCount
* PatchFailedCount `integer`

### PatchFilter
* PatchFilter `object`: <p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for WINDOWS are PATCH_SET, PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, and MSRC_SEVERITY. The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is PRODUCT and the filter values are ["Office 2013", "Office 2016"], then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p>
  * Key **required**
  * Values **required**
    * items [PatchFilterValue](#patchfiltervalue)

### PatchFilterGroup
* PatchFilterGroup `object`: A set of patch filters, typically used for approval rules.
  * PatchFilters **required**
    * items [PatchFilter](#patchfilter)

### PatchFilterKey
* PatchFilterKey `string` (values: ARCH, ADVISORY_ID, BUGZILLA_ID, PATCH_SET, PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, CVE_ID, EPOCH, MSRC_SEVERITY, NAME, PATCH_ID, SECTION, PRIORITY, REPOSITORY, RELEASE, SEVERITY, SECURITY, VERSION)

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
  * BaselineIdentity
    * BaselineDescription
    * BaselineId
    * BaselineName
    * DefaultBaseline
    * OperatingSystem
  * PatchGroup

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

### PatchInstalledPendingRebootCount
* PatchInstalledPendingRebootCount `integer`

### PatchInstalledRejectedCount
* PatchInstalledRejectedCount `integer`

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

### PatchName
* PatchName `string`

### PatchNotApplicableCount
* PatchNotApplicableCount `integer`

### PatchOperationType
* PatchOperationType `string` (values: Scan, Install)

### PatchOrchestratorFilter
* PatchOrchestratorFilter `object`: Defines a filter used in Patch Manager APIs.
  * Key
  * Values
    * items [PatchOrchestratorFilterValue](#patchorchestratorfiltervalue)

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

### PatchPropertiesList
* PatchPropertiesList `array`
  * items [PatchPropertyEntry](#patchpropertyentry)

### PatchProperty
* PatchProperty `string` (values: PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, MSRC_SEVERITY, PRIORITY, SEVERITY)

### PatchPropertyEntry
* PatchPropertyEntry `object`

### PatchRelease
* PatchRelease `string`

### PatchRepository
* PatchRepository `string`

### PatchRule
* PatchRule `object`: Defines an approval rule for a patch baseline.
  * ApproveAfterDays
  * ApproveUntilDate
  * ComplianceLevel
  * EnableNonSecurity
  * PatchFilterGroup **required**
    * PatchFilters **required**
      * items [PatchFilter](#patchfilter)

### PatchRuleGroup
* PatchRuleGroup `object`: A set of rules defining the approval rules for a patch baseline.
  * PatchRules **required**
    * items [PatchRule](#patchrule)

### PatchRuleList
* PatchRuleList `array`
  * items [PatchRule](#patchrule)

### PatchSet
* PatchSet `string` (values: OS, APPLICATION)

### PatchSeverity
* PatchSeverity `string`

### PatchSource
* PatchSource `object`: Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
  * Configuration **required**
  * Name **required**
  * Products **required**
    * items [PatchSourceProduct](#patchsourceproduct)

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
  * ApprovalDate
  * ComplianceLevel
  * DeploymentStatus

### PatchStringDateTime
* PatchStringDateTime `string`

### PatchTitle
* PatchTitle `string`

### PatchUnreportedNotApplicableCount
* PatchUnreportedNotApplicableCount `integer`

### PatchVendor
* PatchVendor `string`

### PatchVersion
* PatchVersion `string`

### PingStatus
* PingStatus `string` (values: Online, ConnectionLost, Inactive)

### PlatformType
* PlatformType `string` (values: Windows, Linux)

### PlatformTypeList
* PlatformTypeList `array`
  * items [PlatformType](#platformtype)

### PoliciesLimitExceededException


### Product
* Product `string`

### ProgressCounters
* ProgressCounters `object`: An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution.
  * CancelledSteps
  * FailedSteps
  * SuccessSteps
  * TimedOutSteps
  * TotalSteps

### PutComplianceItemsRequest
* PutComplianceItemsRequest `object`
  * ComplianceType **required**
  * ExecutionSummary **required**
    * ExecutionId
    * ExecutionTime **required**
    * ExecutionType
  * ItemContentHash
  * Items **required**
    * items [ComplianceItemEntry](#complianceitementry)
  * ResourceId **required**
  * ResourceType **required**
  * UploadType

### PutComplianceItemsResult
* PutComplianceItemsResult `object`

### PutInventoryMessage
* PutInventoryMessage `string`

### PutInventoryRequest
* PutInventoryRequest `object`
  * InstanceId **required**
  * Items **required**
    * items [InventoryItem](#inventoryitem)

### PutInventoryResult
* PutInventoryResult `object`
  * Message

### PutParameterRequest
* PutParameterRequest `object`
  * AllowedPattern
  * DataType
  * Description
  * KeyId
  * Name **required**
  * Overwrite
  * Policies
  * Tags
    * items [Tag](#tag)
  * Tier
  * Type
  * Value **required**

### PutParameterResult
* PutParameterResult `object`
  * Tier
  * Version

### RebootOption
* RebootOption `string` (values: RebootIfNeeded, NoReboot)

### Region
* Region `string`

### Regions
* Regions `array`
  * items [Region](#region)

### RegisterDefaultPatchBaselineRequest
* RegisterDefaultPatchBaselineRequest `object`
  * BaselineId **required**

### RegisterDefaultPatchBaselineResult
* RegisterDefaultPatchBaselineResult `object`
  * BaselineId

### RegisterPatchBaselineForPatchGroupRequest
* RegisterPatchBaselineForPatchGroupRequest `object`
  * BaselineId **required**
  * PatchGroup **required**

### RegisterPatchBaselineForPatchGroupResult
* RegisterPatchBaselineForPatchGroupResult `object`
  * BaselineId
  * PatchGroup

### RegisterTargetWithMaintenanceWindowRequest
* RegisterTargetWithMaintenanceWindowRequest `object`
  * ClientToken
  * Description
  * Name
  * OwnerInformation
  * ResourceType **required**
  * Targets **required**
    * items [Target](#target)
  * WindowId **required**

### RegisterTargetWithMaintenanceWindowResult
* RegisterTargetWithMaintenanceWindowResult `object`
  * WindowTargetId

### RegisterTaskWithMaintenanceWindowRequest
* RegisterTaskWithMaintenanceWindowRequest `object`
  * ClientToken
  * Description
  * LoggingInfo
    * S3BucketName **required**
    * S3KeyPrefix
    * S3Region **required**
  * MaxConcurrency **required**
  * MaxErrors **required**
  * Name
  * Priority
  * ServiceRoleArn
  * Targets **required**
    * items [Target](#target)
  * TaskArn **required**
  * TaskInvocationParameters
    * Automation
      * DocumentVersion
      * Parameters
    * Lambda
      * ClientContext
      * Payload
      * Qualifier
    * RunCommand
      * CloudWatchOutputConfig [CloudWatchOutputConfig](#cloudwatchoutputconfig)
      * Comment
      * DocumentHash
      * DocumentHashType
      * DocumentVersion
      * NotificationConfig
        * NotificationArn
        * NotificationEvents
          * items [NotificationEvent](#notificationevent)
        * NotificationType
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * Parameters
      * ServiceRoleArn
      * TimeoutSeconds
    * StepFunctions
      * Input
      * Name
  * TaskParameters
  * TaskType **required**
  * WindowId **required**

### RegisterTaskWithMaintenanceWindowResult
* RegisterTaskWithMaintenanceWindowResult `object`
  * WindowTaskId

### RegistrationLimit
* RegistrationLimit `integer`

### RegistrationsCount
* RegistrationsCount `integer`

### RelatedOpsItem
* RelatedOpsItem `object`: An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
  * OpsItemId **required**

### RelatedOpsItems
* RelatedOpsItems `array`
  * items [RelatedOpsItem](#relatedopsitem)

### RemainingCount
* RemainingCount `integer`

### RemoveTagsFromResourceRequest
* RemoveTagsFromResourceRequest `object`
  * ResourceId **required**
  * ResourceType **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### RemoveTagsFromResourceResult
* RemoveTagsFromResourceResult `object`

### ResetServiceSettingRequest
* ResetServiceSettingRequest `object`: The request body of the ResetServiceSetting API action.
  * SettingId **required**

### ResetServiceSettingResult
* ResetServiceSettingResult `object`: The result body of the ResetServiceSetting API action.
  * ServiceSetting
    * ARN
    * LastModifiedDate
    * LastModifiedUser
    * SettingId
    * SettingValue
    * Status

### ResolvedTargets
* ResolvedTargets `object`: Information about targets that resolved during the Automation execution.
  * ParameterValues
    * items [ParameterValue](#parametervalue)
  * Truncated

### ResourceComplianceSummaryItem
* ResourceComplianceSummaryItem `object`: Compliance summary information for a specific resource. 
  * ComplianceType
  * CompliantSummary
    * CompliantCount
    * SeveritySummary
      * CriticalCount
      * HighCount
      * InformationalCount
      * LowCount
      * MediumCount
      * UnspecifiedCount
  * ExecutionSummary
    * ExecutionId
    * ExecutionTime **required**
    * ExecutionType
  * NonCompliantSummary
    * NonCompliantCount
    * SeveritySummary
      * CriticalCount
      * HighCount
      * InformationalCount
      * LowCount
      * MediumCount
      * UnspecifiedCount
  * OverallSeverity
  * ResourceId
  * ResourceType
  * Status

### ResourceComplianceSummaryItemList
* ResourceComplianceSummaryItemList `array`
  * items [ResourceComplianceSummaryItem](#resourcecompliancesummaryitem)

### ResourceCount
* ResourceCount `integer`

### ResourceCountByStatus
* ResourceCountByStatus `string`

### ResourceDataSyncAWSKMSKeyARN
* ResourceDataSyncAWSKMSKeyARN `string`

### ResourceDataSyncAlreadyExistsException


### ResourceDataSyncAwsOrganizationsSource
* ResourceDataSyncAwsOrganizationsSource `object`: Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions.
  * OrganizationSourceType **required**
  * OrganizationalUnits
    * items [ResourceDataSyncOrganizationalUnit](#resourcedatasyncorganizationalunit)

### ResourceDataSyncConflictException


### ResourceDataSyncCountExceededException


### ResourceDataSyncCreatedTime
* ResourceDataSyncCreatedTime `string`

### ResourceDataSyncDestinationDataSharing
* ResourceDataSyncDestinationDataSharing `object`: Synchronize Systems Manager Inventory data from multiple AWS accounts defined in AWS Organizations to a centralized S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different AWS account ID.
  * DestinationDataSharingType

### ResourceDataSyncDestinationDataSharingType
* ResourceDataSyncDestinationDataSharingType `string`

### ResourceDataSyncIncludeFutureRegions
* ResourceDataSyncIncludeFutureRegions `boolean`

### ResourceDataSyncInvalidConfigurationException


### ResourceDataSyncItem
* ResourceDataSyncItem `object`: Information about a Resource Data Sync configuration, including its current status and last successful sync.
  * LastStatus
  * LastSuccessfulSyncTime
  * LastSyncStatusMessage
  * LastSyncTime
  * S3Destination
    * AWSKMSKeyARN
    * BucketName **required**
    * DestinationDataSharing
      * DestinationDataSharingType
    * Prefix
    * Region **required**
    * SyncFormat **required**
  * SyncCreatedTime
  * SyncLastModifiedTime
  * SyncName
  * SyncSource
    * AwsOrganizationsSource
      * OrganizationSourceType **required**
      * OrganizationalUnits
        * items [ResourceDataSyncOrganizationalUnit](#resourcedatasyncorganizationalunit)
    * IncludeFutureRegions
    * SourceRegions
      * items [ResourceDataSyncSourceRegion](#resourcedatasyncsourceregion)
    * SourceType
    * State
  * SyncType

### ResourceDataSyncItemList
* ResourceDataSyncItemList `array`
  * items [ResourceDataSyncItem](#resourcedatasyncitem)

### ResourceDataSyncLastModifiedTime
* ResourceDataSyncLastModifiedTime `string`

### ResourceDataSyncName
* ResourceDataSyncName `string`

### ResourceDataSyncNotFoundException


### ResourceDataSyncOrganizationSourceType
* ResourceDataSyncOrganizationSourceType `string`

### ResourceDataSyncOrganizationalUnit
* ResourceDataSyncOrganizationalUnit `object`: The AWS Organizations organizational unit data source for the sync.
  * OrganizationalUnitId

### ResourceDataSyncOrganizationalUnitId
* ResourceDataSyncOrganizationalUnitId `string`

### ResourceDataSyncOrganizationalUnitList
* ResourceDataSyncOrganizationalUnitList `array`
  * items [ResourceDataSyncOrganizationalUnit](#resourcedatasyncorganizationalunit)

### ResourceDataSyncS3BucketName
* ResourceDataSyncS3BucketName `string`

### ResourceDataSyncS3Destination
* ResourceDataSyncS3Destination `object`: Information about the target S3 bucket for the Resource Data Sync.
  * AWSKMSKeyARN
  * BucketName **required**
  * DestinationDataSharing
    * DestinationDataSharingType
  * Prefix
  * Region **required**
  * SyncFormat **required**

### ResourceDataSyncS3Format
* ResourceDataSyncS3Format `string` (values: JsonSerDe)

### ResourceDataSyncS3Prefix
* ResourceDataSyncS3Prefix `string`

### ResourceDataSyncS3Region
* ResourceDataSyncS3Region `string`

### ResourceDataSyncSource
* ResourceDataSyncSource `object`: Information about the source of the data included in the resource data sync.
  * AwsOrganizationsSource
    * OrganizationSourceType **required**
    * OrganizationalUnits
      * items [ResourceDataSyncOrganizationalUnit](#resourcedatasyncorganizationalunit)
  * IncludeFutureRegions
  * SourceRegions **required**
    * items [ResourceDataSyncSourceRegion](#resourcedatasyncsourceregion)
  * SourceType **required**

### ResourceDataSyncSourceRegion
* ResourceDataSyncSourceRegion `string`

### ResourceDataSyncSourceRegionList
* ResourceDataSyncSourceRegionList `array`
  * items [ResourceDataSyncSourceRegion](#resourcedatasyncsourceregion)

### ResourceDataSyncSourceType
* ResourceDataSyncSourceType `string`

### ResourceDataSyncSourceWithState
* ResourceDataSyncSourceWithState `object`: <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in AWS Organizations.)</p>
  * AwsOrganizationsSource
    * OrganizationSourceType **required**
    * OrganizationalUnits
      * items [ResourceDataSyncOrganizationalUnit](#resourcedatasyncorganizationalunit)
  * IncludeFutureRegions
  * SourceRegions
    * items [ResourceDataSyncSourceRegion](#resourcedatasyncsourceregion)
  * SourceType
  * State

### ResourceDataSyncState
* ResourceDataSyncState `string`

### ResourceDataSyncType
* ResourceDataSyncType `string`

### ResourceId
* ResourceId `string`

### ResourceInUseException


### ResourceLimitExceededException


### ResourceType
* ResourceType `string` (values: ManagedInstance, Document, EC2Instance)

### ResourceTypeForTagging
* ResourceTypeForTagging `string` (values: Document, ManagedInstance, MaintenanceWindow, Parameter, PatchBaseline, OpsItem)

### ResponseCode
* ResponseCode `integer`

### ResultAttribute
* ResultAttribute `object`: The inventory item result attribute.
  * TypeName **required**

### ResultAttributeList
* ResultAttributeList `array`
  * items [ResultAttribute](#resultattribute)

### ResumeSessionRequest
* ResumeSessionRequest `object`
  * SessionId **required**

### ResumeSessionResponse
* ResumeSessionResponse `object`
  * SessionId
  * StreamUrl
  * TokenValue

### ReviewInformation
* ReviewInformation `object`: Information about the result of a document review request.
  * ReviewedTime
  * Reviewer
  * Status

### ReviewInformationList
* ReviewInformationList `array`
  * items [ReviewInformation](#reviewinformation)

### ReviewStatus
* ReviewStatus `string` (values: APPROVED, NOT_REVIEWED, PENDING, REJECTED)

### Reviewer
* Reviewer `string`

### Runbook
* Runbook `object`: <p>Information about an Automation runbook (Automation document) used in a runbook workflow in Change Manager.</p> <note> <p>The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</p> </note>
  * DocumentName **required**
  * DocumentVersion
  * MaxConcurrency
  * MaxErrors
  * Parameters
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * TargetParameterName
  * Targets
    * items [Target](#target)

### Runbooks
* Runbooks `array`
  * items [Runbook](#runbook)

### S3BucketName
* S3BucketName `string`

### S3KeyPrefix
* S3KeyPrefix `string`

### S3OutputLocation
* S3OutputLocation `object`: An S3 bucket where you want to store the results of this request.
  * OutputS3BucketName
  * OutputS3KeyPrefix
  * OutputS3Region

### S3OutputUrl
* S3OutputUrl `object`: A URL for the S3 bucket where you want to store the results of this request.
  * OutputUrl

### S3Region
* S3Region `string`

### ScheduleExpression
* ScheduleExpression `string`

### ScheduledWindowExecution
* ScheduledWindowExecution `object`: Information about a scheduled execution for a maintenance window.
  * ExecutionTime
  * Name
  * WindowId

### ScheduledWindowExecutionList
* ScheduledWindowExecutionList `array`
  * items [ScheduledWindowExecution](#scheduledwindowexecution)

### SendAutomationSignalRequest
* SendAutomationSignalRequest `object`
  * AutomationExecutionId **required**
  * Payload
  * SignalType **required**

### SendAutomationSignalResult
* SendAutomationSignalResult `object`

### SendCommandRequest
* SendCommandRequest `object`
  * CloudWatchOutputConfig
    * CloudWatchLogGroupName
    * CloudWatchOutputEnabled
  * Comment
  * DocumentHash
  * DocumentHashType
  * DocumentName **required**
  * DocumentVersion
  * InstanceIds
    * items [InstanceId](#instanceid)
  * MaxConcurrency
  * MaxErrors
  * NotificationConfig
    * NotificationArn
    * NotificationEvents
      * items [NotificationEvent](#notificationevent)
    * NotificationType
  * OutputS3BucketName
  * OutputS3KeyPrefix
  * OutputS3Region
  * Parameters
  * ServiceRoleArn
  * Targets
    * items [Target](#target)
  * TimeoutSeconds

### SendCommandResult
* SendCommandResult `object`
  * Command
    * CloudWatchOutputConfig
      * CloudWatchLogGroupName
      * CloudWatchOutputEnabled
    * CommandId
    * Comment
    * CompletedCount
    * DeliveryTimedOutCount
    * DocumentName
    * DocumentVersion
    * ErrorCount
    * ExpiresAfter
    * InstanceIds
      * items [InstanceId](#instanceid)
    * MaxConcurrency
    * MaxErrors
    * NotificationConfig
      * NotificationArn
      * NotificationEvents
        * items [NotificationEvent](#notificationevent)
      * NotificationType
    * OutputS3BucketName
    * OutputS3KeyPrefix
    * OutputS3Region
    * Parameters
    * RequestedDateTime
    * ServiceRole
    * Status
    * StatusDetails
    * TargetCount
    * Targets
      * items [Target](#target)
    * TimeoutSeconds

### ServiceRole
* ServiceRole `string`

### ServiceSetting
* ServiceSetting `object`: <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p>
  * ARN
  * LastModifiedDate
  * LastModifiedUser
  * SettingId
  * SettingValue
  * Status

### ServiceSettingId
* ServiceSettingId `string`

### ServiceSettingNotFound


### ServiceSettingValue
* ServiceSettingValue `string`

### Session
* Session `object`: Information about a Session Manager connection to an instance.
  * Details
  * DocumentName
  * EndDate
  * OutputUrl
    * CloudWatchOutputUrl
    * S3OutputUrl
  * Owner
  * SessionId
  * StartDate
  * Status
  * Target

### SessionDetails
* SessionDetails `string`

### SessionFilter
* SessionFilter `object`: Describes a filter for Session Manager information.
  * key **required**
  * value **required**

### SessionFilterKey
* SessionFilterKey `string` (values: InvokedAfter, InvokedBefore, Target, Owner, Status, SessionId)

### SessionFilterList
* SessionFilterList `array`
  * items [SessionFilter](#sessionfilter)

### SessionFilterValue
* SessionFilterValue `string`

### SessionId
* SessionId `string`

### SessionList
* SessionList `array`
  * items [Session](#session)

### SessionManagerCloudWatchOutputUrl
* SessionManagerCloudWatchOutputUrl `string`

### SessionManagerOutputUrl
* SessionManagerOutputUrl `object`: Reserved for future use.
  * CloudWatchOutputUrl
  * S3OutputUrl

### SessionManagerParameterName
* SessionManagerParameterName `string`

### SessionManagerParameterValue
* SessionManagerParameterValue `string`

### SessionManagerParameterValueList
* SessionManagerParameterValueList `array`
  * items [SessionManagerParameterValue](#sessionmanagerparametervalue)

### SessionManagerParameters
* SessionManagerParameters `object`

### SessionManagerS3OutputUrl
* SessionManagerS3OutputUrl `string`

### SessionMaxResults
* SessionMaxResults `integer`

### SessionOwner
* SessionOwner `string`

### SessionState
* SessionState `string` (values: Active, History)

### SessionStatus
* SessionStatus `string` (values: Connected, Connecting, Disconnected, Terminated, Terminating, Failed)

### SessionTarget
* SessionTarget `string`

### SeveritySummary
* SeveritySummary `object`: The number of managed instances found for each patch severity level defined in the request filter.
  * CriticalCount
  * HighCount
  * InformationalCount
  * LowCount
  * MediumCount
  * UnspecifiedCount

### SharedDocumentVersion
* SharedDocumentVersion `string`: The document version shared with other accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.

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

### StartAssociationsOnceRequest
* StartAssociationsOnceRequest `object`
  * AssociationIds **required**
    * items [AssociationId](#associationid)

### StartAssociationsOnceResult
* StartAssociationsOnceResult `object`

### StartAutomationExecutionRequest
* StartAutomationExecutionRequest `object`
  * ClientToken
  * DocumentName **required**
  * DocumentVersion
  * MaxConcurrency
  * MaxErrors
  * Mode
  * Parameters
  * Tags
    * items [Tag](#tag)
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * TargetMaps
    * items [TargetMap](#targetmap)
  * TargetParameterName
  * Targets
    * items [Target](#target)

### StartAutomationExecutionResult
* StartAutomationExecutionResult `object`
  * AutomationExecutionId

### StartChangeRequestExecutionRequest
* StartChangeRequestExecutionRequest `object`
  * ChangeRequestName
  * ClientToken
  * DocumentName **required**
  * DocumentVersion
  * Parameters
  * Runbooks **required**
    * items [Runbook](#runbook)
  * ScheduledTime
  * Tags
    * items [Tag](#tag)

### StartChangeRequestExecutionResult
* StartChangeRequestExecutionResult `object`
  * AutomationExecutionId

### StartSessionRequest
* StartSessionRequest `object`
  * DocumentName
  * Parameters
  * Target **required**

### StartSessionResponse
* StartSessionResponse `object`
  * SessionId
  * StreamUrl
  * TokenValue

### StatusAdditionalInfo
* StatusAdditionalInfo `string`

### StatusDetails
* StatusDetails `string`

### StatusMessage
* StatusMessage `string`

### StatusName
* StatusName `string`

### StatusUnchanged


### StepExecution
* StepExecution `object`: Detailed information about an the execution state of an Automation step.
  * Action
  * ExecutionEndTime
  * ExecutionStartTime
  * FailureDetails
    * Details
    * FailureStage
    * FailureType
  * FailureMessage
  * Inputs
  * IsCritical
  * IsEnd
  * MaxAttempts
  * NextStep
  * OnFailure
  * Outputs
  * OverriddenParameters
  * Response
  * ResponseCode
  * StepExecutionId
  * StepName
  * StepStatus
  * TargetLocation
    * Accounts
      * items [Account](#account)
    * ExecutionRoleName
    * Regions
      * items [Region](#region)
    * TargetLocationMaxConcurrency
    * TargetLocationMaxErrors
  * Targets
    * items [Target](#target)
  * TimeoutSeconds
  * ValidNextSteps
    * items [ValidNextStep](#validnextstep)

### StepExecutionFilter
* StepExecutionFilter `object`: A filter to limit the amount of step execution information returned by the call.
  * Key **required**
  * Values **required**
    * items [StepExecutionFilterValue](#stepexecutionfiltervalue)

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
  * AutomationExecutionId **required**
  * Type

### StopAutomationExecutionResult
* StopAutomationExecutionResult `object`

### StopType
* StopType `string` (values: Complete, Cancel)

### StreamUrl
* StreamUrl `string`

### String
* String `string`

### StringDateTime
* StringDateTime `string`

### StringList
* StringList `array`
  * items [String](#string)

### SubTypeCountLimitExceededException


### Tag
* Tag `object`: Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Systems Manager, you can apply tags to documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### Target
* Target `object`: <p>An array of search criteria that targets instances using a Key,Value combination that you specify. </p> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i> </code> </p> </li> <li> <p> <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i> </code> </p> </li> <li> <p> <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i> </code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=<i>resource-group-name</i> </code> </p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i> </code> </p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup;Values=<i>resource-group-name</i> </code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i> </code> </p> <p>This example demonstrates how to target only EC2 instances and VPCs in your maintenance window.</p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup,Values=MyResourceGroup</code> </p> </li> <li> <p> <b>State Manager association targets only</b>: <code>Key=InstanceIds,Values=<i>*</i> </code> </p> <p>This example demonstrates how to target all managed instances in the AWS Region where the association was created.</p> </li> </ul> <p>For more information about how to send commands that target instances using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>AWS Systems Manager User Guide</i>.</p>
  * Key
  * Values
    * items [TargetValue](#targetvalue)

### TargetCount
* TargetCount `integer`

### TargetInUseException


### TargetKey
* TargetKey `string`

### TargetLocation
* TargetLocation `object`: The combination of AWS Regions and accounts targeted by the current Automation execution.
  * Accounts
    * items [Account](#account)
  * ExecutionRoleName
  * Regions
    * items [Region](#region)
  * TargetLocationMaxConcurrency
  * TargetLocationMaxErrors

### TargetLocations
* TargetLocations `array`
  * items [TargetLocation](#targetlocation)

### TargetMap
* TargetMap `object`

### TargetMapKey
* TargetMapKey `string`

### TargetMapValue
* TargetMapValue `string`

### TargetMapValueList
* TargetMapValueList `array`
  * items [TargetMapValue](#targetmapvalue)

### TargetMaps
* TargetMaps `array`
  * items [TargetMap](#targetmap)

### TargetNotConnected


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

### TerminateSessionRequest
* TerminateSessionRequest `object`
  * SessionId **required**

### TerminateSessionResponse
* TerminateSessionResponse `object`
  * SessionId

### TimeoutSeconds
* TimeoutSeconds `integer`

### TokenValue
* TokenValue `string`

### TooManyTagsError


### TooManyUpdates


### TotalCount
* TotalCount `integer`

### TotalSizeLimitExceededException


### UUID
* UUID `string`

### UnsupportedCalendarException


### UnsupportedFeatureRequiredException


### UnsupportedInventoryItemContextException


### UnsupportedInventorySchemaVersionException


### UnsupportedOperatingSystem


### UnsupportedParameterType


### UnsupportedPlatformType


### UpdateAssociationRequest
* UpdateAssociationRequest `object`
  * ApplyOnlyAtCronInterval
  * AssociationId **required**
  * AssociationName
  * AssociationVersion
  * AutomationTargetParameterName
  * ComplianceSeverity
  * DocumentVersion
  * MaxConcurrency
  * MaxErrors
  * Name
  * OutputLocation
    * S3Location
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * OutputS3Region
  * Parameters
  * ScheduleExpression
  * SyncCompliance
  * TargetLocations
    * items [TargetLocation](#targetlocation)
  * Targets
    * items [Target](#target)

### UpdateAssociationResult
* UpdateAssociationResult `object`
  * AssociationDescription
    * ApplyOnlyAtCronInterval
    * AssociationId
    * AssociationName
    * AssociationVersion
    * AutomationTargetParameterName
    * ComplianceSeverity
    * Date
    * DocumentVersion
    * InstanceId
    * LastExecutionDate
    * LastSuccessfulExecutionDate
    * LastUpdateAssociationDate
    * MaxConcurrency
    * MaxErrors
    * Name
    * OutputLocation
      * S3Location
        * OutputS3BucketName
        * OutputS3KeyPrefix
        * OutputS3Region
    * Overview
      * AssociationStatusAggregatedCount
      * DetailedStatus
      * Status
    * Parameters
    * ScheduleExpression
    * Status
      * AdditionalInfo
      * Date **required**
      * Message **required**
      * Name **required**
    * SyncCompliance
    * TargetLocations
      * items [TargetLocation](#targetlocation)
    * Targets
      * items [Target](#target)

### UpdateAssociationStatusRequest
* UpdateAssociationStatusRequest `object`
  * AssociationStatus **required**
    * AdditionalInfo
    * Date **required**
    * Message **required**
    * Name **required**
  * InstanceId **required**
  * Name **required**

### UpdateAssociationStatusResult
* UpdateAssociationStatusResult `object`
  * AssociationDescription
    * ApplyOnlyAtCronInterval
    * AssociationId
    * AssociationName
    * AssociationVersion
    * AutomationTargetParameterName
    * ComplianceSeverity
    * Date
    * DocumentVersion
    * InstanceId
    * LastExecutionDate
    * LastSuccessfulExecutionDate
    * LastUpdateAssociationDate
    * MaxConcurrency
    * MaxErrors
    * Name
    * OutputLocation
      * S3Location
        * OutputS3BucketName
        * OutputS3KeyPrefix
        * OutputS3Region
    * Overview
      * AssociationStatusAggregatedCount
      * DetailedStatus
      * Status
    * Parameters
    * ScheduleExpression
    * Status
      * AdditionalInfo
      * Date **required**
      * Message **required**
      * Name **required**
    * SyncCompliance
    * TargetLocations
      * items [TargetLocation](#targetlocation)
    * Targets
      * items [Target](#target)

### UpdateDocumentDefaultVersionRequest
* UpdateDocumentDefaultVersionRequest `object`
  * DocumentVersion **required**
  * Name **required**

### UpdateDocumentDefaultVersionResult
* UpdateDocumentDefaultVersionResult `object`
  * Description
    * DefaultVersion
    * DefaultVersionName
    * Name

### UpdateDocumentMetadataRequest
* UpdateDocumentMetadataRequest `object`
  * DocumentReviews **required**
    * Action **required**
    * Comment
      * items [DocumentReviewCommentSource](#documentreviewcommentsource)
  * DocumentVersion
  * Name **required**

### UpdateDocumentMetadataResponse
* UpdateDocumentMetadataResponse `object`

### UpdateDocumentRequest
* UpdateDocumentRequest `object`
  * Attachments
    * items [AttachmentsSource](#attachmentssource)
  * Content **required**
  * DocumentFormat
  * DocumentVersion
  * Name **required**
  * TargetType
  * VersionName

### UpdateDocumentResult
* UpdateDocumentResult `object`
  * DocumentDescription
    * ApprovedVersion
    * AttachmentsInformation
      * items [AttachmentInformation](#attachmentinformation)
    * Author
    * CreatedDate
    * DefaultVersion
    * Description
    * DocumentFormat
    * DocumentType
    * DocumentVersion
    * Hash
    * HashType
    * LatestVersion
    * Name
    * Owner
    * Parameters
      * items [DocumentParameter](#documentparameter)
    * PendingReviewVersion
    * PlatformTypes
      * items [PlatformType](#platformtype)
    * Requires
      * items [DocumentRequires](#documentrequires)
    * ReviewInformation
      * items [ReviewInformation](#reviewinformation)
    * ReviewStatus
    * SchemaVersion
    * Sha1
    * Status
    * StatusInformation
    * Tags
      * items [Tag](#tag)
    * TargetType
    * VersionName

### UpdateMaintenanceWindowRequest
* UpdateMaintenanceWindowRequest `object`
  * AllowUnassociatedTargets
  * Cutoff
  * Description
  * Duration
  * Enabled
  * EndDate
  * Name
  * Replace
  * Schedule
  * ScheduleOffset
  * ScheduleTimezone
  * StartDate
  * WindowId **required**

### UpdateMaintenanceWindowResult
* UpdateMaintenanceWindowResult `object`
  * AllowUnassociatedTargets
  * Cutoff
  * Description
  * Duration
  * Enabled
  * EndDate
  * Name
  * Schedule
  * ScheduleOffset
  * ScheduleTimezone
  * StartDate
  * WindowId

### UpdateMaintenanceWindowTargetRequest
* UpdateMaintenanceWindowTargetRequest `object`
  * Description
  * Name
  * OwnerInformation
  * Replace
  * Targets
    * items [Target](#target)
  * WindowId **required**
  * WindowTargetId **required**

### UpdateMaintenanceWindowTargetResult
* UpdateMaintenanceWindowTargetResult `object`
  * Description
  * Name
  * OwnerInformation
  * Targets
    * items [Target](#target)
  * WindowId
  * WindowTargetId

### UpdateMaintenanceWindowTaskRequest
* UpdateMaintenanceWindowTaskRequest `object`
  * Description
  * LoggingInfo
    * S3BucketName **required**
    * S3KeyPrefix
    * S3Region **required**
  * MaxConcurrency
  * MaxErrors
  * Name
  * Priority
  * Replace
  * ServiceRoleArn
  * Targets
    * items [Target](#target)
  * TaskArn
  * TaskInvocationParameters
    * Automation
      * DocumentVersion
      * Parameters
    * Lambda
      * ClientContext
      * Payload
      * Qualifier
    * RunCommand
      * CloudWatchOutputConfig [CloudWatchOutputConfig](#cloudwatchoutputconfig)
      * Comment
      * DocumentHash
      * DocumentHashType
      * DocumentVersion
      * NotificationConfig
        * NotificationArn
        * NotificationEvents
          * items [NotificationEvent](#notificationevent)
        * NotificationType
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * Parameters
      * ServiceRoleArn
      * TimeoutSeconds
    * StepFunctions
      * Input
      * Name
  * TaskParameters
  * WindowId **required**
  * WindowTaskId **required**

### UpdateMaintenanceWindowTaskResult
* UpdateMaintenanceWindowTaskResult `object`
  * Description
  * LoggingInfo
    * S3BucketName **required**
    * S3KeyPrefix
    * S3Region **required**
  * MaxConcurrency
  * MaxErrors
  * Name
  * Priority
  * ServiceRoleArn
  * Targets
    * items [Target](#target)
  * TaskArn
  * TaskInvocationParameters
    * Automation
      * DocumentVersion
      * Parameters
    * Lambda
      * ClientContext
      * Payload
      * Qualifier
    * RunCommand
      * CloudWatchOutputConfig [CloudWatchOutputConfig](#cloudwatchoutputconfig)
      * Comment
      * DocumentHash
      * DocumentHashType
      * DocumentVersion
      * NotificationConfig
        * NotificationArn
        * NotificationEvents
          * items [NotificationEvent](#notificationevent)
        * NotificationType
      * OutputS3BucketName
      * OutputS3KeyPrefix
      * Parameters
      * ServiceRoleArn
      * TimeoutSeconds
    * StepFunctions
      * Input
      * Name
  * TaskParameters
  * WindowId
  * WindowTaskId

### UpdateManagedInstanceRoleRequest
* UpdateManagedInstanceRoleRequest `object`
  * IamRole **required**
  * InstanceId **required**

### UpdateManagedInstanceRoleResult
* UpdateManagedInstanceRoleResult `object`

### UpdateOpsItemRequest
* UpdateOpsItemRequest `object`
  * ActualEndTime
  * ActualStartTime
  * Category
  * Description
  * Notifications
    * items [OpsItemNotification](#opsitemnotification)
  * OperationalData
  * OperationalDataToDelete
    * items [String](#string)
  * OpsItemId **required**
  * PlannedEndTime
  * PlannedStartTime
  * Priority
  * RelatedOpsItems
    * items [RelatedOpsItem](#relatedopsitem)
  * Severity
  * Status
  * Title

### UpdateOpsItemResponse
* UpdateOpsItemResponse `object`

### UpdateOpsMetadataRequest
* UpdateOpsMetadataRequest `object`
  * KeysToDelete
    * items [MetadataKey](#metadatakey)
  * MetadataToUpdate
  * OpsMetadataArn **required**

### UpdateOpsMetadataResult
* UpdateOpsMetadataResult `object`
  * OpsMetadataArn

### UpdatePatchBaselineRequest
* UpdatePatchBaselineRequest `object`
  * ApprovalRules
    * PatchRules **required**
      * items [PatchRule](#patchrule)
  * ApprovedPatches
    * items [PatchId](#patchid)
  * ApprovedPatchesComplianceLevel
  * ApprovedPatchesEnableNonSecurity
  * BaselineId **required**
  * Description
  * GlobalFilters
    * PatchFilters **required**
      * items [PatchFilter](#patchfilter)
  * Name
  * RejectedPatches
    * items [PatchId](#patchid)
  * RejectedPatchesAction
  * Replace
  * Sources
    * items [PatchSource](#patchsource)

### UpdatePatchBaselineResult
* UpdatePatchBaselineResult `object`
  * ApprovalRules
    * PatchRules **required**
      * items [PatchRule](#patchrule)
  * ApprovedPatches
    * items [PatchId](#patchid)
  * ApprovedPatchesComplianceLevel
  * ApprovedPatchesEnableNonSecurity
  * BaselineId
  * CreatedDate
  * Description
  * GlobalFilters
    * PatchFilters **required**
      * items [PatchFilter](#patchfilter)
  * ModifiedDate
  * Name
  * OperatingSystem
  * RejectedPatches
    * items [PatchId](#patchid)
  * RejectedPatchesAction
  * Sources
    * items [PatchSource](#patchsource)

### UpdateResourceDataSyncRequest
* UpdateResourceDataSyncRequest `object`
  * SyncName **required**
  * SyncSource **required**
    * AwsOrganizationsSource
      * OrganizationSourceType **required**
      * OrganizationalUnits
        * items [ResourceDataSyncOrganizationalUnit](#resourcedatasyncorganizationalunit)
    * IncludeFutureRegions
    * SourceRegions **required**
      * items [ResourceDataSyncSourceRegion](#resourcedatasyncsourceregion)
    * SourceType **required**
  * SyncType **required**

### UpdateResourceDataSyncResult
* UpdateResourceDataSyncResult `object`

### UpdateServiceSettingRequest
* UpdateServiceSettingRequest `object`: The request body of the UpdateServiceSetting API action.
  * SettingId **required**
  * SettingValue **required**

### UpdateServiceSettingResult
* UpdateServiceSettingResult `object`: The result body of the UpdateServiceSetting API action.

### Url
* Url `string`

### ValidNextStep
* ValidNextStep `string`

### ValidNextStepList
* ValidNextStepList `array`
  * items [ValidNextStep](#validnextstep)

### Version
* Version `string`


