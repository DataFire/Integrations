# @datafire/azure_migrate

Client library for Azure Migrate

## Installation and Usage
```bash
npm install --save @datafire/azure_migrate
```
```js
let azure_migrate = require('@datafire/azure_migrate').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_migrate.Operations_List(null).then(data => {
  console.log(data);
});
```

## Description

Move your workloads to Azure.

## Actions

### Operations_List
Get a list of REST API supported by Microsoft.Migrate provider.


```js
azure_migrate.Operations_List(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationResultList](#operationresultlist)

### Assessments_ListByProject
Get all assessments created in the project.

Returns a json array of objects of type 'assessment' as specified in Models section.



```js
azure_migrate.Assessments_ListByProject({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
* output [AssessmentResultList](#assessmentresultlist)

### Groups_ListByProject
Get all groups created in the project. Returns a json array of objects of type 'group' as specified in the Models section.


```js
azure_migrate.Groups_ListByProject({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
* output [GroupResultList](#groupresultlist)

### Groups_Delete
Delete the group from the project. The machines remain in the project. Deleting a non-existent group results in a no-operation.

A group is an aggregation mechanism for machines in a project. Therefore, deleting group does not delete machines in it.



```js
azure_migrate.Groups_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
*Output schema unknown*

### Groups_Get
Get information related to a specific group in the project. Returns a json object of type 'group' as specified in the models section.


```js
azure_migrate.Groups_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
* output [Group](#group)

### Groups_Create
Create a new group by sending a json object of type 'group' as given in Models section as part of the Request Body. The group name in a project is unique. Labels can be applied on a group as part of creation.

If a group with the groupName specified in the URL already exists, then this call acts as an update.

This operation is Idempotent.



```js
azure_migrate.Groups_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.
  * group [Group](#group)

#### Output
* output [Group](#group)

### Assessments_ListByGroup
Get all assessments created for the specified group.

Returns a json array of objects of type 'assessment' as specified in Models section.



```js
azure_migrate.Assessments_ListByGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
* output [AssessmentResultList](#assessmentresultlist)

### Assessments_Delete
Delete an assessment from the project. The machines remain in the assessment. Deleting a non-existent assessment results in a no-operation.

When an assessment is under computation, as indicated by the 'computationState' field, it cannot be deleted. Any such attempt will return a 400 - Bad Request.



```js
azure_migrate.Assessments_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "assessmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * assessmentName **required** `string`: Unique name of an assessment within a project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
*Output schema unknown*

### Assessments_Get
Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.


```js
azure_migrate.Assessments_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "assessmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * assessmentName **required** `string`: Unique name of an assessment within a project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
* output [Assessment](#assessment)

### Assessments_Create
Create a new assessment with the given name and the specified settings. Since name of an assessment in a project is a unique identiefier, if an assessment with the name provided already exists, then the existing assessment is updated.

Any PUT operation, resulting in either create or update on an assessment, will cause the assessment to go in a "InProgress" state. This will be indicated by the field 'computationState' on the Assessment object. During this time no other PUT operation will be allowed on that assessment object, nor will a Delete operation. Once the computation for the assessment is complete, the field 'computationState' will be updated to 'Ready', and then other PUT or DELETE operations can happen on the assessment.

When assessment is under computation, any PUT will lead to a 400 - Bad Request error.



```js
azure_migrate.Assessments_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "assessmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * assessmentName **required** `string`: Unique name of an assessment within a project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.
  * assessment [Assessment](#assessment)

#### Output
* output [Assessment](#assessment)

### AssessedMachines_ListByAssessment
Get list of machines that assessed as part of the specified assessment. Returns a json array of objects of type 'assessedMachine' as specified in the Models section.

Whenever an assessment is created or updated, it goes under computation. During this phase, the 'status' field of Assessment object reports 'Computing'.
During the period when the assessment is under computation, the list of assessed machines is empty and no assessed machines are returned by this call.



```js
azure_migrate.AssessedMachines_ListByAssessment({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "assessmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * assessmentName **required** `string`: Unique name of an assessment within a project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
* output [AssessedMachineResultList](#assessedmachineresultlist)

### AssessedMachines_Get
Get an assessed machine with its size & cost estimnate that was evaluated in the specified assessment.


```js
azure_migrate.AssessedMachines_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "assessmentName": "",
  "assessedMachineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * assessmentName **required** `string`: Unique name of an assessment within a project.
  * assessedMachineName **required** `string`: Unique name of an assessed machine evaluated as part of an assessment.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
* output [AssessedMachine](#assessedmachine)

### Assessments_GetReportDownloadUrl
Get the URL for downloading the assessment in a report format.


```js
azure_migrate.Assessments_GetReportDownloadUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "groupName": "",
  "assessmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * groupName **required** `string`: Unique name of a group within a project.
  * assessmentName **required** `string`: Unique name of an assessment within a project.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [DownloadUrl](#downloadurl)

### Machines_ListByProject
Get data of all the machines available in the project. Returns a json array of objects of type 'machine' defined in Models section.


```js
azure_migrate.Machines_ListByProject({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
* output [MachineResultList](#machineresultlist)

### Machines_Get
Get the machine with the specified name. Returns a json object of type 'machine' defined in Models section.


```js
azure_migrate.Machines_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "machineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * machineName **required** `string`: Unique name of a machine in private datacenter.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.

#### Output
* output [Machine](#machine)

### Projects_List
Get all the projects in the resource group.


```js
azure_migrate.Projects_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [ProjectResultList](#projectresultlist)

### Projects_Delete
Delete the project. Deleting non-existent project is a no-operation.


```js
azure_migrate.Projects_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
*Output schema unknown*

### Projects_Get
Get the project with the specified name.


```js
azure_migrate.Projects_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [Project](#project)

### Projects_Update
Update a project with specified name. Supports partial updates, for example only tags can be provided.


```js
azure_migrate.Projects_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * project [Project](#project)

#### Output
* output [Project](#project)

### Projects_Create
Create a project with specified name. If a project already exists, update it.


```js
azure_migrate.Projects_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.
  * project [Project](#project)

#### Output
* output [Project](#project)

### Projects_GetKeys
Gets the Log Analytics Workspace ID and Primary Key for the specified project.


```js
azure_migrate.Projects_GetKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "projectName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription Id in which project was created.
  * resourceGroupName **required** `string`: Name of the Azure Resource Group that project is part of.
  * projectName **required** `string`: Name of the Azure Migrate project.
  * api-version **required** `string` (values: 2018-02-02): Standard request header. Used by service to identify API version used by client.
  * Accept-Language `string`: Standard request header. Used by service to respond to client in appropriate language.

#### Output
* output [ProjectKey](#projectkey)



## Definitions

### AssessedDisk
* AssessedDisk `object`: A disk assessed for an assessment.
  * gigabytesConsumed `number`: Gigabytes of storage consumed by this disk.
  * gigabytesForRecommendedDiskSize `integer`: Gigabytes of storage provided by the recommended Azure disk size.
  * gigabytesProvisioned `number`: Gigabytes of storage provisioned for this disk.
  * megabytesPerSecondOfRead `number`: Disk throughput in MegaBytes per second.
  * megabytesPerSecondOfReadDataPointsExpected `integer`: Expected data points for MegaBytes per second of read.
  * megabytesPerSecondOfReadDataPointsReceived `integer`: Received data points for MegaBytes per second of read.
  * megabytesPerSecondOfWrite `number`: Disk throughput in MegaBytes per second.
  * megabytesPerSecondOfWriteDataPointsExpected `integer`: Expected data points for MegaBytes per second of write.
  * megabytesPerSecondOfWriteDataPointsReceived `integer`: Received data points for MegaBytes per second of write.
  * monthlyStorageCost `number`: Estimated aggregate storage cost for a 31-day month for this disk.
  * name `string`: Name of the assessed disk.
  * numberOfReadOperationsPerSecond `number`: Number of read operations per second for the disk.
  * numberOfReadOperationsPerSecondDataPointsExpected `integer`: Expected number of data points for read operations per second.
  * numberOfReadOperationsPerSecondDataPointsReceived `integer`: Received number of data points for read operations per second.
  * numberOfWriteOperationsPerSecond `number`: Number of read and write operations per second for the disk.
  * numberOfWriteOperationsPerSecondDataPointsExpected `integer`: Expected number of data points for write operations per second.
  * numberOfWriteOperationsPerSecondDataPointsReceived `integer`: Received number of data points for write operations per second.
  * recommendedDiskSize `string` (values: Unknown, Standard_S4, Standard_S6, Standard_S10, Standard_S20, Standard_S30, Standard_S40, Standard_S50, Premium_P4, Premium_P6, Premium_P10, Premium_P20, Premium_P30, Premium_P40, Premium_P50): Recommended Azure size for the disk, given utilization data and preferences set on Assessment.
  * recommendedDiskType `string` (values: Unknown, Standard, Premium): Storage type selected for this disk.
  * suitability `string` (values: Unknown, NotSuitable, Suitable, ConditionallySuitable, ReadinessUnknown): Whether this disk is suitable for Azure.
  * suitabilityExplanation `string` (values: Unknown, NotApplicable, DiskSizeGreaterThanSupported, NoSuitableDiskSizeForIops, NoSuitableDiskSizeForThroughput, NoDiskSizeFoundInSelectedLocation, NoDiskSizeFoundForSelectedRedundancy, InternalErrorOccurredForDiskEvaluation): If disk is suitable, this explains the reasons and mitigation steps.

### AssessedMachine
* AssessedMachine `object`: A machine evaluated as part of an assessment.
  * eTag `string`: For optimistic concurrency control.
  * id `string`: Path reference to this assessed machine. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName}
  * name `string`: Name of the machine.
  * properties [AssessedMachineProperties](#assessedmachineproperties)
  * type `string`: Type of the object = [Microsoft.Migrate/projects/groups/assessments/assessedMachines].

### AssessedMachineProperties
* AssessedMachineProperties `object`: Properties of an assessed machine.
  * bootType `string` (values: Unknown, EFI, BIOS): Boot type of the machine.
  * createdTimestamp `string`: Time when this machine was created. Date-Time represented in ISO-8601 format.
  * datacenterContainer `string`: Container defined in the management solution that this machine is part of in the datacenter.
  * datacenterMachineId `string`: ID of the machine as tracked by the datacenter management solution.
  * datacenterManagementServer `string`: Name of the server hosting the datacenter management solution.
  * datacenterManagementServerId `string`: ID of the server hosting the datacenter management solution.
  * description `string`: Description of the machine
  * discoveredTimestamp `string`: Time when this machine was discovered by Azure Migrate agent. Date-Time represented in ISO-8601 format.
  * disks `object`: Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object.
  * displayName `string`: User readable name of the machine as defined by the user in their private datacenter.
  * groups `array`: List of references to the groups that the machine is member of.
    * items `string`: Reference to a group that this machine is member of. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}
  * megabytesOfMemory `number`: Memory in Megabytes.
  * megabytesOfMemoryForRecommendedSize `number`: Megabytes of memory in the Recommended Azure VM Size.
  * monthlyBandwidthCost `number`: Monthly network cost estimate for the network adapters that are attached to this machine as a group, for a 31-day month.
  * monthlyComputeCostForRecommendedSize `number`: Compute Cost for a 31-day month, if the machine is migrated to Azure with the Recommended Size.
  * monthlyStorageCost `number`: Monthly storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month.
  * networkAdapters `object`: Dictionary of network adapters attached to the machine. Key is name of the adapter. Value is a network adapter object.
  * numberOfCores `integer`: Processor count.
  * numberOfCoresForRecommendedSize `integer`: Number of CPU cores in the Recommended Azure VM Size.
  * operatingSystem `string`: Operating System of the machine.
  * percentageCoresUtilization `number`: Utilization percentage of the processor core as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
  * percentageCoresUtilizationDataPointsExpected `integer`: Expected data points for percentage of cores utilization.
  * percentageCoresUtilizationDataPointsReceived `integer`: Received data points for percentage of cores utilization.
  * percentageMemoryUtilization `number`: Utilization percentage of the memory as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment.
  * percentageMemoryUtilizationDataPointsExpected `integer`: Expected data points for percentage of memory utilization.
  * percentageMemoryUtilizationDataPointsReceived `integer`: Received data points for percentage of memory utilization.
  * recommendedSize `string` (values: Unknown, Basic_A0, Basic_A1, Basic_A2, Basic_A3, Basic_A4, Standard_A0, Standard_A1, Standard_A2, Standard_A3, Standard_A4, Standard_A5, Standard_A6, Standard_A7, Standard_A8, Standard_A9, Standard_A10, Standard_A11, Standard_A1_v2, Standard_A2_v2, Standard_A4_v2, Standard_A8_v2, Standard_A2m_v2, Standard_A4m_v2, Standard_A8m_v2, Standard_D1, Standard_D2, Standard_D3, Standard_D4, Standard_D11, Standard_D12, Standard_D13, Standard_D14, Standard_D1_v2, Standard_D2_v2, Standard_D3_v2, Standard_D4_v2, Standard_D5_v2, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_D15_v2, Standard_DS1, Standard_DS2, Standard_DS3, Standard_DS4, Standard_DS11, Standard_DS12, Standard_DS13, Standard_DS14, Standard_DS1_v2, Standard_DS2_v2, Standard_DS3_v2, Standard_DS4_v2, Standard_DS5_v2, Standard_DS11_v2, Standard_DS12_v2, Standard_DS13_v2, Standard_DS14_v2, Standard_DS15_v2, Standard_F1, Standard_F2, Standard_F4, Standard_F8, Standard_F16, Standard_F1s, Standard_F2s, Standard_F4s, Standard_F8s, Standard_F16s, Standard_G1, Standard_G2, Standard_G3, Standard_G4, Standard_G5, Standard_GS1, Standard_GS2, Standard_GS3, Standard_GS4, Standard_GS5, Standard_H8, Standard_H16, Standard_H8m, Standard_H16m, Standard_H16r, Standard_H16mr, Standard_L4s, Standard_L8s, Standard_L16s, Standard_L32s): Recommended Azure size for this machine.
  * suitability `string` (values: Unknown, NotSuitable, Suitable, ConditionallySuitable, ReadinessUnknown): Whether machine is suitable for migration to Azure.
  * suitabilityExplanation `string` (values: Unknown, NotApplicable, GuestOperatingSystemArchitectureNotSupported, GuestOperatingSystemNotSupported, BootTypeNotSupported, MoreDisksThanSupported, NoSuitableVmSizeFound, OneOrMoreDisksNotSuitable, OneOrMoreAdaptersNotSuitable, InternalErrorOccuredDuringComputeEvaluation, InternalErrorOccuredDuringStorageEvaluation, InternalErrorOccuredDuringNetworkEvaluation, NoVmSizeSupportsStoragePerformance, NoVmSizeSupportsNetworkPerformance, NoVmSizeForSelectedPricingTier, NoVmSizeForSelectedAzureLocation, CheckRedHatLinuxVersion, CheckOpenSuseLinuxVersion, CheckWindowsServer2008R2Version, CheckCentOsVersion, CheckDebianLinuxVersion, CheckSuseLinuxVersion, CheckOracleLinuxVersion, CheckUbuntuLinuxVersion, CheckCoreOsLinuxVersion, WindowsServerVersionConditionallySupported, NoGuestOperatingSystemConditionallySupported, WindowsClientVersionsConditionallySupported, BootTypeUnknown, GuestOperatingSystemUnknown, WindowsServerVersionsSupportedWithCaveat, WindowsOSNoLongerUnderMSSupport, EndorsedWithConditionsLinuxDistributions, UnendorsedLinuxDistributions, NoVmSizeForStandardPricingTier, NoVmSizeForBasicPricingTier): If machine is not ready to be migrated, this explains the reasons and mitigation steps.
  * updatedTimestamp `string`: Time when this machine was last updated. Date-Time represented in ISO-8601 format.

### AssessedMachineResultList
* AssessedMachineResultList `object`: List of assessed machines.
  * value `array`: List of assessed machines.
    * items [AssessedMachine](#assessedmachine)

### AssessedNetworkAdapter
* AssessedNetworkAdapter `object`: A network adapter assessed for an assessment.
  * ipAddresses `array`: List of IP Addresses on the network adapter.
    * items `string`: IP Address of the network adapter.
  * macAddress `string`: MAC Address of the network adapter.
  * megabytesPerSecondOfReadDataPointsReceived `integer`: Received data points for incoming traffic in MegaBytes per second.
  * megabytesPerSecondReceived `number`: Adapter throughput for incoming traffic in MegaBytes per second.
  * megabytesPerSecondReceivedDataPointsExpected `integer`: Expected data points for incoming traffic in MegaBytes per second.
  * megabytesPerSecondTransmitted `number`: Adapter throughput for outgoing traffic in MegaBytes per second.
  * megabytesPerSecondTransmittedDataPointsExpected `integer`: Expected data points for outgoing traffic in MegaBytes per second.
  * megabytesPerSecondTransmittedDataPointsReceived `integer`: Received data points for outgoing traffic in MegaBytes per second.
  * monthlyBandwidthCosts `number`: Monthly cost estimate for network bandwidth used by this network adapter.
  * netGigabytesTransmittedPerMonth `number`: Gigabytes transmitted through this adapter each month.
  * suitability `string` (values: Unknown, NotSuitable, Suitable, ConditionallySuitable, ReadinessUnknown): Whether this adapter is suitable for Azure.
  * suitabilityExplanation `string` (values: Unknown, NotApplicable, InternalErrorOccured): If network adapter is suitable, this explains the reasons and mitigation steps.

### Assessment
* Assessment `object`: An assessment created for a group in the Migration project.
  * eTag `string`: For optimistic concurrency control.
  * id `string`: Path reference to this assessment. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessment/{assessmentName}
  * name `string`: Unique name of an assessment.
  * properties **required** [AssessmentProperties](#assessmentproperties)
  * type `string`: Type of the object = [Microsoft.Migrate/projects/groups/assessments].

### AssessmentProperties
* AssessmentProperties `object`: Properties of an assessment.
  * azureHybridUseBenefit **required** `string` (values: Unknown, Yes, No): AHUB discount on windows virtual machines.
  * azureLocation **required** `string` (values: Unknown, EastAsia, SoutheastAsia, AustraliaEast, AustraliaSoutheast, BrazilSouth, CanadaCentral, CanadaEast, WestEurope, NorthEurope, CentralIndia, SouthIndia, WestIndia, JapanEast, JapanWest, KoreaCentral, KoreaSouth, UkWest, UkSouth, NorthCentralUs, EastUs, WestUs2, SouthCentralUs, CentralUs, EastUs2, WestUs, WestCentralUs, GermanyCentral, GermanyNortheast, ChinaNorth, ChinaEast): Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
  * azureOfferCode **required** `string` (values: Unknown, MSAZR0003P, MSAZR0044P, MSAZR0059P, MSAZR0060P, MSAZR0062P, MSAZR0063P, MSAZR0064P, MSAZR0029P, MSAZR0022P, MSAZR0023P, MSAZR0148P, MSAZR0025P, MSAZR0036P, MSAZR0120P, MSAZR0121P, MSAZR0122P, MSAZR0123P, MSAZR0124P, MSAZR0125P, MSAZR0126P, MSAZR0127P, MSAZR0128P, MSAZR0129P, MSAZR0130P, MSAZR0111P, MSAZR0144P, MSAZR0149P, MSMCAZR0044P, MSMCAZR0059P, MSMCAZR0060P, MSMCAZR0063P, MSMCAZR0120P, MSMCAZR0121P, MSMCAZR0125P, MSMCAZR0128P, MSAZRDE0003P, MSAZRDE0044P): Offer code according to which cost estimation is done.
  * azurePricingTier **required** `string` (values: Standard, Basic): Pricing tier for Size evaluation.
  * azureStorageRedundancy **required** `string` (values: Unknown, LocallyRedundant, ZoneRedundant, GeoRedundant, ReadAccessGeoRedundant): Storage Redundancy type offered by Azure.
  * confidenceRatingInPercentage `number`: Confidence rating percentage for assessment. Can be in the range [0, 100].
  * createdTimestamp `string`: Time when this project was created. Date-Time represented in ISO-8601 format.
  * currency **required** `string` (values: Unknown, USD, DKK, CAD, IDR, JPY, KRW, NZD, NOK, RUB, SAR, ZAR, SEK, TRY, GBP, MXN, MYR, INR, HKD, BRL, TWD, EUR, CHF, ARS, AUD, CNY): Currency to report prices in.
  * discountPercentage **required** `number`: Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
  * monthlyBandwidthCost `number`: Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
  * monthlyComputeCost `number`: Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
  * monthlyStorageCost `number`: Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
  * numberOfMachines `integer`: Number of assessed machines part of this assessment.
  * percentile **required** `string` (values: Percentile50, Percentile90, Percentile95, Percentile99): Percentile of performance data used to recommend Azure size.
  * pricesTimestamp `string`: Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
  * scalingFactor **required** `number`: Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
  * sizingCriterion **required** `string` (values: PerformanceBased, AsOnPremises): Assessment sizing criterion.
  * stage **required** `string` (values: InProgress, UnderReview, Approved): User configurable setting that describes the status of the assessment.
  * status `string` (values: Created, Updated, Running, Completed, Invalid): Wheter the assessment has been created and is valid.
  * timeRange **required** `string` (values: Day, Week, Month): Time range of performance data used to recommend a size.
  * updatedTimestamp `string`: Time when this project was last updated. Date-Time represented in ISO-8601 format.

### AssessmentResultList
* AssessmentResultList `object`: List of assessments.
  * value `array`: List of assessments.
    * items [Assessment](#assessment)

### Disk
* Disk `object`: A disk discovered on a machine.
  * gigabytesAllocated `number`: Gigabytes of storage provisioned for this disk.
  * gigabytesConsumed `number`: Gigabytes of storage consumed by this disk.

### DownloadUrl
* DownloadUrl `object`: Download URL for assessment report.
  * assessmentReportUrl `string`: Hyperlink to download report.
  * expirationTime `string`: Expiry date of download url.

### Group
* Group `object`: A group created in a Migration project.
  * eTag `string`: For optimistic concurrency control.
  * id `string`: Path reference to this group. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}
  * name `string`: Name of the group.
  * properties **required** [GroupProperties](#groupproperties)
  * type `string`: Type of the object = [Microsoft.Migrate/projects/groups].

### GroupProperties
* GroupProperties `object`: Properties of group resource.
  * assessments `array`: List of References to Assessments created on this group.
    * items `string`: Reference to an Assessment. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}
  * createdTimestamp `string`: Time when this project was created. Date-Time represented in ISO-8601 format.
  * machines **required** `array`: List of machine names that are part of this group.
    * items `string`: Reference to a machine. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/machines/{machineName}
  * updatedTimestamp `string`: Time when this project was last updated. Date-Time represented in ISO-8601 format.

### GroupResultList
* GroupResultList `object`: List of groups.
  * value `array`: List of groups.
    * items [Group](#group)

### Machine
* Machine `object`: A machine in a migration project.
  * eTag `string`: For optimistic concurrency control.
  * id `string`: Path reference to this machine. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/machines/{machineName}
  * name `string`: Name of the machine. It is a GUID which is unique identifier of machine in private data center. For user-readable name, we have a displayName property on this machine.
  * properties [MachineProperties](#machineproperties)
  * type `string`: Type of the object = [Microsoft.Migrate/projects/machines].

### MachineProperties
* MachineProperties `object`: Properties of a machine.
  * bootType `string` (values: Unknown, EFI, BIOS): Boot type of the machine.
  * createdTimestamp `string`: Time when this machine was created. Date-Time represented in ISO-8601 format.
  * datacenterContainer `string`: Container defined in the management solution that this machine is part of in the datacenter.
  * datacenterMachineId `string`: ID of the machine as tracked by the datacenter management solution.
  * datacenterManagementServer `string`: Name of the server hosting the datacenter management solution.
  * datacenterManagementServerId `string`: ID of the server hosting the datacenter management solution.
  * description `string`: Description of the machine
  * discoveredTimestamp `string`: Time when this machine was discovered by Azure Migrate agent. Date-Time represented in ISO-8601 format.
  * disks `object`: Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object
  * displayName `string`: User readable name of the machine as defined by the user in their private datacenter.
  * groups `array`: List of references to the groups that the machine is member of.
    * items `string`: Reference to a group that this machine is member of. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}
  * megabytesOfMemory `number`: Memory in Megabytes.
  * networkAdapters `object`: Dictionary of network adapters attached to the machine. Key is ID of network adapter. Value is a network adapter object
  * numberOfCores `integer`: Processor count.
  * operatingSystem `string`: Operating System of the machine.
  * updatedTimestamp `string`: Time when this machine was last updated. Date-Time represented in ISO-8601 format.

### MachineResultList
* MachineResultList `object`: List of machines.
  * value `array`: List of machines.
    * items [Machine](#machine)

### NetworkAdapter
* NetworkAdapter `object`: A network adapter discovered on a machine.
  * ipAddresses `array`: List of IP Addresses on the network adapter.
    * items `string`: IP Address of the network adapter.
  * macAddress `string`: MAC Address of the network adapter.

### Operation
* Operation `object`: A REST API operation supported by the provider.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Name of the operation.
  * origin `string`: Origin of the operation.

### OperationDisplay
* OperationDisplay `object`: Displayable properties of the operation.
  * description `string`: Description of the operation.
  * operation `string`: Operation Type.
  * provider `string`: Provider of the operation.
  * resource `string`: Resource operated on by the operation.

### OperationResultList
* OperationResultList `object`: List of API operations.
  * value `array`: List of operations.
    * items [Operation](#operation)

### Project
* Project `object`: Azure Migrate Project.
  * eTag `string`: For optimistic concurrency control.
  * id `string`: Path reference to this project /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}
  * location `string`: Azure location in which project is created.
  * name `string`: Name of the project.
  * properties [ProjectProperties](#projectproperties)
  * tags `object`: Tags provided by Azure Tagging service.
  * type `string`: Type of the object = [Microsoft.Migrate/projects].

### ProjectKey
* ProjectKey `object`: ID and Key for Migration Project.
  * workspaceId `string`: ID of Migration Project.
  * workspaceKey `string`: Key of Migration Project.

### ProjectProperties
* ProjectProperties `object`: Properties of a project.
  * createdTimestamp `string`: Time when this project was created. Date-Time represented in ISO-8601 format.
  * customerWorkspaceId `string`: ARM ID of the Service Map workspace created by user.
  * customerWorkspaceLocation `string`: Location of the Service Map workspace created by user.
  * discoveryStatus `string` (values: Unknown, NotStarted, InProgress, Completed): Reports whether project is under discovery.
  * lastAssessmentTimestamp `string`: Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created.
  * lastDiscoverySessionId `string`: Session id of the last discovery.
  * lastDiscoveryTimestamp `string`: Time when this project was created. Date-Time represented in ISO-8601 format. This value will be null until discovery is complete.
  * numberOfAssessments `integer`: Number of assessments created in the project.
  * numberOfGroups `integer`: Number of groups created in the project.
  * numberOfMachines `integer`: Number of machines in the project.
  * provisioningState `string` (values: Accepted, Creating, Deleting, Failed, Moving, Succeeded): Provisioning state of the project.
  * updatedTimestamp `string`: Time when this project was last updated. Date-Time represented in ISO-8601 format.

### ProjectResultList
* ProjectResultList `object`: List of projects.
  * value `array`: List of projects.
    * items [Project](#project)


