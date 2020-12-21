# @datafire/letmc_maintenance

Client library for AgentOS Api V3, maintenance

## Installation and Usage
```bash
npm install --save @datafire/letmc_maintenance
```
```js
let letmc_maintenance = require('@datafire/letmc_maintenance').create({
  apiKey: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### MaintenanceController_CreateMaintenanceJob
Create a maintenance job for a specific branch


```js
letmc_maintenance.MaintenanceController_CreateMaintenanceJob({
  "shortName": "",
  "branchID": "",
  "issue": {}
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * issue **required** [MaintenanceIssueModel](#maintenanceissuemodel)

#### Output
* output [Object](#object)



## Definitions

### MaintenanceDocumentModel
* MaintenanceDocumentModel `object`: Submission Model - Handles all the fields required to attach documents to an online maintenance job
  * MimeType `string`: The document Mime Type
  * URL `string`: The document URL (This has to be public)

### MaintenanceIssueModel
* MaintenanceIssueModel `object`: Submission Model - Handles all fields required to submit an online maintenance job
  * Documents `array`: Documents linked to a submitted maintenance job
    * items [MaintenanceDocumentModel](#maintenancedocumentmodel)
  * ExternalID `string`: ID used externally to manage jobs before sending to the system. This has a 10 character limit.
  * IssueFault `string`: The fault title if applicable
  * IssueNotes `string`: Fault notes
  * IssuePriority `string` (values: Low, Medium, High): The priority of the job (Defaults to 'Low' if incorrect value or empty)
  * IssueTitle `string`: The title of the issue
  * PropertyAddress1 `string`: The first line of the property address
  * PropertyAddress2 `string`: The second line of the property address
  * PropertyAddress3 `string`: The third line of the property address
  * PropertyAddress4 `string`: The forth line of the property address
  * PropertyCountry `string`: The country the property is located
  * PropertyPostcode `string`: The property postcode
  * ReportedAt `string`: The date the job was reported
  * TenantEMailAddress `string`: The email address of the Tenant
  * TenantForename `string`: The forename of the Tenant
  * TenantPhonePrimary `string`: The primary phone number of the Tenant
  * TenantPhoneSecondary `string`: The secondary phone number of the Tenant
  * TenantPresenceRequested `boolean`: Is the Tenant’s presence requested during the maintenance visit? (Defaults to “false” if incorrect value or empty)
  * TenantSurname `string`: The surname of the Tenant
  * TenantTitle `string`: The title of the Tenant

### Object
* Object `object`


