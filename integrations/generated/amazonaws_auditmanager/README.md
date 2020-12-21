# @datafire/amazonaws_auditmanager

Client library for AWS Audit Manager

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_auditmanager
```
```js
let amazonaws_auditmanager = require('@datafire/amazonaws_auditmanager').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Welcome to the AWS Audit Manager API reference. This guide is for developers who need detailed information about the AWS Audit Manager API operations, data types, and errors. </p> <p>AWS Audit Manager is a service that provides automated evidence collection so that you can continuously audit your AWS usage, and assess the effectiveness of your controls to better manage risk and simplify compliance.</p> <p>AWS Audit Manager provides pre-built frameworks that structure and automate assessments for a given compliance standard. Frameworks include a pre-built collection of controls with descriptions and testing procedures, which are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with unique requirements. </p> <p>Use the following links to get started with the AWS Audit Manager API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all AWS Audit Manager API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all AWS Audit Manager data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to AWS Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html"> AWS Audit Manager User Guide</a>.</p>

## Actions

### DeregisterAccount



```js
amazonaws_auditmanager.DeregisterAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [DeregisterAccountResponse](#deregisteraccountresponse)

### DeregisterOrganizationAdminAccount



```js
amazonaws_auditmanager.DeregisterOrganizationAdminAccount({}, context)
```

#### Input
* input `object`
  * adminAccountId `string`:  The identifier for the specified administrator account. 

#### Output
* output [DeregisterOrganizationAdminAccountResponse](#deregisterorganizationadminaccountresponse)

### GetOrganizationAdminAccount



```js
amazonaws_auditmanager.GetOrganizationAdminAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetOrganizationAdminAccountResponse](#getorganizationadminaccountresponse)

### RegisterAccount



```js
amazonaws_auditmanager.RegisterAccount({}, context)
```

#### Input
* input `object`
  * delegatedAdminAccount `string`:  The delegated administrator account for AWS Audit Manager. 
  * kmsKey `string`:  The AWS KMS key details. 

#### Output
* output [RegisterAccountResponse](#registeraccountresponse)

### RegisterOrganizationAdminAccount



```js
amazonaws_auditmanager.RegisterOrganizationAdminAccount({
  "adminAccountId": ""
}, context)
```

#### Input
* input `object`
  * adminAccountId **required** `string`:  The identifier for the specified delegated administrator account. 

#### Output
* output [RegisterOrganizationAdminAccountResponse](#registerorganizationadminaccountresponse)

### GetAccountStatus



```js
amazonaws_auditmanager.GetAccountStatus({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountStatusResponse](#getaccountstatusresponse)

### CreateAssessmentFramework



```js
amazonaws_auditmanager.CreateAssessmentFramework({
  "name": "",
  "controlSets": []
}, context)
```

#### Input
* input `object`
  * complianceType `string`:  The compliance type that the new custom framework supports, such as CIS or HIPAA. 
  * controlSets **required** `array`:  The control sets to be associated with the framework. 
    * items [CreateAssessmentFrameworkControlSet](#createassessmentframeworkcontrolset)
  * description `string`:  An optional description for the new custom framework. 
  * name **required** `string`:  The name of the new custom framework. 

#### Output
* output [CreateAssessmentFrameworkResponse](#createassessmentframeworkresponse)

### ListAssessmentFrameworks



```js
amazonaws_auditmanager.ListAssessmentFrameworks({
  "frameworkType": ""
}, context)
```

#### Input
* input `object`
  * frameworkType **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAssessmentFrameworksResponse](#listassessmentframeworksresponse)

### DeleteAssessmentFramework



```js
amazonaws_auditmanager.DeleteAssessmentFramework({
  "frameworkId": ""
}, context)
```

#### Input
* input `object`
  * frameworkId **required** `string`

#### Output
* output [DeleteAssessmentFrameworkResponse](#deleteassessmentframeworkresponse)

### GetAssessmentFramework



```js
amazonaws_auditmanager.GetAssessmentFramework({
  "frameworkId": ""
}, context)
```

#### Input
* input `object`
  * frameworkId **required** `string`

#### Output
* output [GetAssessmentFrameworkResponse](#getassessmentframeworkresponse)

### UpdateAssessmentFramework



```js
amazonaws_auditmanager.UpdateAssessmentFramework({
  "frameworkId": "",
  "name": "",
  "controlSets": []
}, context)
```

#### Input
* input `object`
  * frameworkId **required** `string`
  * complianceType `string`:  The compliance type that the new custom framework supports, such as CIS or HIPAA. 
  * controlSets **required** `array`:  The control sets associated with the framework. 
    * items [UpdateAssessmentFrameworkControlSet](#updateassessmentframeworkcontrolset)
  * description `string`:  The description of the framework that is to be updated. 
  * name **required** `string`:  The name of the framework to be updated. 

#### Output
* output [UpdateAssessmentFrameworkResponse](#updateassessmentframeworkresponse)

### ListAssessmentReports



```js
amazonaws_auditmanager.ListAssessmentReports({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAssessmentReportsResponse](#listassessmentreportsresponse)

### ValidateAssessmentReportIntegrity



```js
amazonaws_auditmanager.ValidateAssessmentReportIntegrity({
  "s3RelativePath": ""
}, context)
```

#### Input
* input `object`
  * s3RelativePath **required** `string`:  The relative path of the specified Amazon S3 bucket in which the assessment report is stored. 

#### Output
* output [ValidateAssessmentReportIntegrityResponse](#validateassessmentreportintegrityresponse)

### ListAssessments



```js
amazonaws_auditmanager.ListAssessments({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAssessmentsResponse](#listassessmentsresponse)

### CreateAssessment



```js
amazonaws_auditmanager.CreateAssessment({
  "name": "",
  "assessmentReportsDestination": {},
  "scope": {},
  "roles": [],
  "frameworkId": ""
}, context)
```

#### Input
* input `object`
  * tags `object`:  The tags associated with the assessment. 
  * assessmentReportsDestination **required** `object`:  The location in which AWS Audit Manager saves assessment reports for the given assessment. 
    * destination
    * destinationType
  * description `string`:  The optional description of the assessment to be created. 
  * frameworkId **required** `string`:  The identifier for the specified framework. 
  * name **required** `string`:  The name of the assessment to be created. 
  * roles **required** `array`:  The list of roles for the specified assessment. 
    * items [Role](#role)
  * scope **required** `object`:  The wrapper that contains the AWS accounts and AWS services in scope for the assessment. 
    * awsAccounts
      * items [AWSAccount](#awsaccount)
    * awsServices
      * items [AWSService](#awsservice)

#### Output
* output [CreateAssessmentResponse](#createassessmentresponse)

### DeleteAssessment



```js
amazonaws_auditmanager.DeleteAssessment({
  "assessmentId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`

#### Output
* output [DeleteAssessmentResponse](#deleteassessmentresponse)

### GetAssessment



```js
amazonaws_auditmanager.GetAssessment({
  "assessmentId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`

#### Output
* output [GetAssessmentResponse](#getassessmentresponse)

### UpdateAssessment



```js
amazonaws_auditmanager.UpdateAssessment({
  "assessmentId": "",
  "scope": {}
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * assessmentDescription `string`:  The description of the specified assessment. 
  * assessmentName `string`:  The name of the specified assessment to be updated. 
  * assessmentReportsDestination `object`:  The location in which AWS Audit Manager saves assessment reports for the given assessment. 
    * destination
    * destinationType
  * roles `array`:  The list of roles for the specified assessment. 
    * items [Role](#role)
  * scope **required** `object`:  The wrapper that contains the AWS accounts and AWS services in scope for the assessment. 
    * awsAccounts
      * items [AWSAccount](#awsaccount)
    * awsServices
      * items [AWSService](#awsservice)

#### Output
* output [UpdateAssessmentResponse](#updateassessmentresponse)

### AssociateAssessmentReportEvidenceFolder



```js
amazonaws_auditmanager.AssociateAssessmentReportEvidenceFolder({
  "assessmentId": "",
  "evidenceFolderId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * evidenceFolderId **required** `string`:  The identifier for the folder in which evidence is stored. 

#### Output
* output [AssociateAssessmentReportEvidenceFolderResponse](#associateassessmentreportevidencefolderresponse)

### BatchAssociateAssessmentReportEvidence



```js
amazonaws_auditmanager.BatchAssociateAssessmentReportEvidence({
  "assessmentId": "",
  "evidenceFolderId": "",
  "evidenceIds": []
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * evidenceFolderId **required** `string`:  The identifier for the folder in which the evidence is stored. 
  * evidenceIds **required** `array`:  The list of evidence identifiers. 
    * items [UUID](#uuid)

#### Output
* output [BatchAssociateAssessmentReportEvidenceResponse](#batchassociateassessmentreportevidenceresponse)

### BatchDisassociateAssessmentReportEvidence



```js
amazonaws_auditmanager.BatchDisassociateAssessmentReportEvidence({
  "assessmentId": "",
  "evidenceFolderId": "",
  "evidenceIds": []
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * evidenceFolderId **required** `string`:  The identifier for the folder in which evidence is stored. 
  * evidenceIds **required** `array`:  The list of evidence identifiers. 
    * items [UUID](#uuid)

#### Output
* output [BatchDisassociateAssessmentReportEvidenceResponse](#batchdisassociateassessmentreportevidenceresponse)

### GetChangeLogs



```js
amazonaws_auditmanager.GetChangeLogs({
  "assessmentId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * controlSetId `string`
  * controlId `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [GetChangeLogsResponse](#getchangelogsresponse)

### UpdateAssessmentControl



```js
amazonaws_auditmanager.UpdateAssessmentControl({
  "assessmentId": "",
  "controlSetId": "",
  "controlId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * controlSetId **required** `string`
  * controlId **required** `string`
  * commentBody `string`:  The comment body text for the specified control. 
  * controlStatus `string` (values: UNDER_REVIEW, REVIEWED, INACTIVE):  The status of the specified control. 

#### Output
* output [UpdateAssessmentControlResponse](#updateassessmentcontrolresponse)

### BatchImportEvidenceToAssessmentControl



```js
amazonaws_auditmanager.BatchImportEvidenceToAssessmentControl({
  "assessmentId": "",
  "controlSetId": "",
  "controlId": "",
  "manualEvidence": []
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * controlSetId **required** `string`
  * controlId **required** `string`
  * manualEvidence **required** `array`:  The list of manual evidence objects. 
    * items [ManualEvidence](#manualevidence)

#### Output
* output [BatchImportEvidenceToAssessmentControlResponse](#batchimportevidencetoassessmentcontrolresponse)

### GetEvidenceFolder



```js
amazonaws_auditmanager.GetEvidenceFolder({
  "assessmentId": "",
  "controlSetId": "",
  "evidenceFolderId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * controlSetId **required** `string`
  * evidenceFolderId **required** `string`

#### Output
* output [GetEvidenceFolderResponse](#getevidencefolderresponse)

### GetEvidenceByEvidenceFolder



```js
amazonaws_auditmanager.GetEvidenceByEvidenceFolder({
  "assessmentId": "",
  "controlSetId": "",
  "evidenceFolderId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * controlSetId **required** `string`
  * evidenceFolderId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [GetEvidenceByEvidenceFolderResponse](#getevidencebyevidencefolderresponse)

### GetEvidence



```js
amazonaws_auditmanager.GetEvidence({
  "assessmentId": "",
  "controlSetId": "",
  "evidenceFolderId": "",
  "evidenceId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * controlSetId **required** `string`
  * evidenceFolderId **required** `string`
  * evidenceId **required** `string`

#### Output
* output [GetEvidenceResponse](#getevidenceresponse)

### UpdateAssessmentControlSetStatus



```js
amazonaws_auditmanager.UpdateAssessmentControlSetStatus({
  "assessmentId": "",
  "controlSetId": "",
  "status": "",
  "comment": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * controlSetId **required** `string`
  * comment **required** `string`:  The comment related to the status update. 
  * status **required** `string` (values: ACTIVE, UNDER_REVIEW, REVIEWED):  The status of the control set that is being updated. 

#### Output
* output [UpdateAssessmentControlSetStatusResponse](#updateassessmentcontrolsetstatusresponse)

### BatchCreateDelegationByAssessment



```js
amazonaws_auditmanager.BatchCreateDelegationByAssessment({
  "assessmentId": "",
  "createDelegationRequests": []
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * createDelegationRequests **required** `array`:  The API request to batch create delegations in AWS Audit Manager. 
    * items [CreateDelegationRequest](#createdelegationrequest)

#### Output
* output [BatchCreateDelegationByAssessmentResponse](#batchcreatedelegationbyassessmentresponse)

### BatchDeleteDelegationByAssessment



```js
amazonaws_auditmanager.BatchDeleteDelegationByAssessment({
  "assessmentId": "",
  "delegationIds": []
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * delegationIds **required** `array`:  The identifiers for the specified delegations. 
    * items [UUID](#uuid)

#### Output
* output [BatchDeleteDelegationByAssessmentResponse](#batchdeletedelegationbyassessmentresponse)

### DisassociateAssessmentReportEvidenceFolder



```js
amazonaws_auditmanager.DisassociateAssessmentReportEvidenceFolder({
  "assessmentId": "",
  "evidenceFolderId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * evidenceFolderId **required** `string`:  The identifier for the folder in which evidence is stored. 

#### Output
* output [DisassociateAssessmentReportEvidenceFolderResponse](#disassociateassessmentreportevidencefolderresponse)

### GetEvidenceFoldersByAssessment



```js
amazonaws_auditmanager.GetEvidenceFoldersByAssessment({
  "assessmentId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [GetEvidenceFoldersByAssessmentResponse](#getevidencefoldersbyassessmentresponse)

### GetEvidenceFoldersByAssessmentControl



```js
amazonaws_auditmanager.GetEvidenceFoldersByAssessmentControl({
  "assessmentId": "",
  "controlSetId": "",
  "controlId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * controlSetId **required** `string`
  * controlId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [GetEvidenceFoldersByAssessmentControlResponse](#getevidencefoldersbyassessmentcontrolresponse)

### CreateAssessmentReport



```js
amazonaws_auditmanager.CreateAssessmentReport({
  "assessmentId": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * description `string`:  The description of the assessment report. 
  * name **required** `string`:  The name of the new assessment report. 

#### Output
* output [CreateAssessmentReportResponse](#createassessmentreportresponse)

### DeleteAssessmentReport



```js
amazonaws_auditmanager.DeleteAssessmentReport({
  "assessmentId": "",
  "assessmentReportId": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * assessmentReportId **required** `string`

#### Output
* output [DeleteAssessmentReportResponse](#deleteassessmentreportresponse)

### GetAssessmentReportUrl



```js
amazonaws_auditmanager.GetAssessmentReportUrl({
  "assessmentReportId": "",
  "assessmentId": ""
}, context)
```

#### Input
* input `object`
  * assessmentReportId **required** `string`
  * assessmentId **required** `string`

#### Output
* output [GetAssessmentReportUrlResponse](#getassessmentreporturlresponse)

### UpdateAssessmentStatus



```js
amazonaws_auditmanager.UpdateAssessmentStatus({
  "assessmentId": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * assessmentId **required** `string`
  * status **required** `string` (values: ACTIVE, INACTIVE):  The current status of the specified assessment. 

#### Output
* output [UpdateAssessmentStatusResponse](#updateassessmentstatusresponse)

### CreateControl



```js
amazonaws_auditmanager.CreateControl({
  "name": "",
  "controlMappingSources": []
}, context)
```

#### Input
* input `object`
  * tags `object`:  The tags associated with the control. 
  * actionPlanInstructions `string`:  The recommended actions to carry out if the control is not fulfilled. 
  * actionPlanTitle `string`:  The title of the action plan for remediating the control. 
  * controlMappingSources **required** `array`:  The data source that determines from where AWS Audit Manager collects evidence for the control. 
    * items [CreateControlMappingSource](#createcontrolmappingsource)
  * description `string`:  The description of the control. 
  * name **required** `string`:  The name of the control. 
  * testingInformation `string`:  The steps to follow to determine if the control has been satisfied. 

#### Output
* output [CreateControlResponse](#createcontrolresponse)

### ListControls



```js
amazonaws_auditmanager.ListControls({
  "controlType": ""
}, context)
```

#### Input
* input `object`
  * controlType **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListControlsResponse](#listcontrolsresponse)

### DeleteControl



```js
amazonaws_auditmanager.DeleteControl({
  "controlId": ""
}, context)
```

#### Input
* input `object`
  * controlId **required** `string`

#### Output
* output [DeleteControlResponse](#deletecontrolresponse)

### GetControl



```js
amazonaws_auditmanager.GetControl({
  "controlId": ""
}, context)
```

#### Input
* input `object`
  * controlId **required** `string`

#### Output
* output [GetControlResponse](#getcontrolresponse)

### UpdateControl



```js
amazonaws_auditmanager.UpdateControl({
  "controlId": "",
  "name": "",
  "controlMappingSources": []
}, context)
```

#### Input
* input `object`
  * controlId **required** `string`
  * actionPlanInstructions `string`:  The recommended actions to carry out if the control is not fulfilled. 
  * actionPlanTitle `string`:  The title of the action plan for remediating the control. 
  * controlMappingSources **required** `array`:  The data source that determines from where AWS Audit Manager collects evidence for the control. 
    * items [ControlMappingSource](#controlmappingsource)
  * description `string`:  The optional description of the control. 
  * name **required** `string`:  The name of the control to be updated. 
  * testingInformation `string`:  The steps that to follow to determine if the control has been satisfied. 

#### Output
* output [UpdateControlResponse](#updatecontrolresponse)

### ListKeywordsForDataSource



```js
amazonaws_auditmanager.ListKeywordsForDataSource({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListKeywordsForDataSourceResponse](#listkeywordsfordatasourceresponse)

### GetDelegations



```js
amazonaws_auditmanager.GetDelegations({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [GetDelegationsResponse](#getdelegationsresponse)

### ListNotifications



```js
amazonaws_auditmanager.ListNotifications({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListNotificationsResponse](#listnotificationsresponse)

### GetServicesInScope



```js
amazonaws_auditmanager.GetServicesInScope({}, context)
```

#### Input
* input `object`

#### Output
* output [GetServicesInScopeResponse](#getservicesinscoperesponse)

### UpdateSettings



```js
amazonaws_auditmanager.UpdateSettings({}, context)
```

#### Input
* input `object`
  * defaultAssessmentReportsDestination `object`:  The location in which AWS Audit Manager saves assessment reports for the given assessment. 
    * destination
    * destinationType
  * defaultProcessOwners `array`:  A list of the default audit owners. 
    * items [Role](#role)
  * kmsKey `string`:  The AWS KMS key details. 
  * snsTopic `string`:  The Amazon Simple Notification Service (Amazon SNS) topic to which AWS Audit Manager sends notifications. 

#### Output
* output [UpdateSettingsResponse](#updatesettingsresponse)

### GetSettings



```js
amazonaws_auditmanager.GetSettings({
  "attribute": ""
}, context)
```

#### Input
* input `object`
  * attribute **required** `string`

#### Output
* output [GetSettingsResponse](#getsettingsresponse)

### ListTagsForResource



```js
amazonaws_auditmanager.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_auditmanager.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`:  The tags to be associated with the resource. 

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_auditmanager.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AWSAccount
* AWSAccount `object`:  The wrapper of AWS account details, such as account ID, email address, and so on. 
  * emailAddress
  * id
  * name

### AWSAccounts
* AWSAccounts `array`
  * items [AWSAccount](#awsaccount)

### AWSService
* AWSService `object`:  An AWS service such as Amazon S3, AWS CloudTrail, and so on. 
  * serviceName

### AWSServiceName
* AWSServiceName `string`

### AWSServices
* AWSServices `array`
  * items [AWSService](#awsservice)

### AccessDeniedException


### AccountId
* AccountId `string`

### AccountName
* AccountName `string`

### AccountStatus
* AccountStatus `string` (values: ACTIVE, INACTIVE, PENDING_ACTIVATION)

### ActionEnum
* ActionEnum `string` (values: CREATE, UPDATE_METADATA, ACTIVE, INACTIVE, DELETE, UNDER_REVIEW, REVIEWED, IMPORT_EVIDENCE)

### ActionPlanInstructions
* ActionPlanInstructions `string`

### ActionPlanTitle
* ActionPlanTitle `string`

### Assessment
* Assessment `object`:  An entity that defines the scope of audit evidence collected by AWS Audit Manager. An AWS Audit Manager assessment is an implementation of an AWS Audit Manager framework. 
  * tags
  * arn
  * awsAccount
    * emailAddress
    * id
    * name
  * framework
    * arn
    * controlSets
      * items [AssessmentControlSet](#assessmentcontrolset)
    * id
    * metadata [FrameworkMetadata](#frameworkmetadata)
  * metadata
    * assessmentReportsDestination
      * destination
      * destinationType
    * complianceType
    * creationTime
    * delegations
      * items [Delegation](#delegation)
    * description
    * id
    * lastUpdated
    * name
    * roles
      * items [Role](#role)
    * scope
      * awsAccounts
        * items [AWSAccount](#awsaccount)
      * awsServices
        * items [AWSService](#awsservice)
    * status

### AssessmentControl
* AssessmentControl `object`:  The control entity that represents a standard or custom control used in an AWS Audit Manager assessment. 
  * assessmentReportEvidenceCount
  * comments
    * items [ControlComment](#controlcomment)
  * description
  * evidenceCount
  * evidenceSources
    * items [NonEmptyString](#nonemptystring)
  * id
  * name
  * response
  * status

### AssessmentControlSet
* AssessmentControlSet `object`:  Represents a set of controls in an AWS Audit Manager assessment. 
  * controls
    * items [AssessmentControl](#assessmentcontrol)
  * delegations
    * items [Delegation](#delegation)
  * description
  * id
  * manualEvidenceCount
  * roles
    * items [Role](#role)
  * status
  * systemEvidenceCount

### AssessmentControlSets
* AssessmentControlSets `array`
  * items [AssessmentControlSet](#assessmentcontrolset)

### AssessmentControls
* AssessmentControls `array`
  * items [AssessmentControl](#assessmentcontrol)

### AssessmentDescription
* AssessmentDescription `string`

### AssessmentEvidenceFolder
* AssessmentEvidenceFolder `object`:  The folder in which AWS Audit Manager stores evidence for an assessment. 
  * assessmentId
  * assessmentReportSelectionCount
  * author
  * controlId
  * controlName
  * controlSetId
  * dataSource
  * date
  * evidenceAwsServiceSourceCount
  * evidenceByTypeComplianceCheckCount
  * evidenceByTypeComplianceCheckIssuesCount
  * evidenceByTypeConfigurationDataCount
  * evidenceByTypeManualCount
  * evidenceByTypeUserActivityCount
  * evidenceResourcesIncludedCount
  * id
  * name
  * totalEvidence

### AssessmentEvidenceFolderName
* AssessmentEvidenceFolderName `string`

### AssessmentEvidenceFolders
* AssessmentEvidenceFolders `array`
  * items [AssessmentEvidenceFolder](#assessmentevidencefolder)

### AssessmentFramework
* AssessmentFramework `object`:  The file used to structure and automate AWS Audit Manager assessments for a given compliance standard. 
  * arn
  * controlSets
    * items [AssessmentControlSet](#assessmentcontrolset)
  * id
  * metadata [FrameworkMetadata](#frameworkmetadata)

### AssessmentFrameworkDescription
* AssessmentFrameworkDescription `string`

### AssessmentFrameworkMetadata
* AssessmentFrameworkMetadata `object`:  The metadata associated with a standard or custom framework. 
  * complianceType
  * controlSetsCount
  * controlsCount
  * createdAt
  * description
  * id
  * lastUpdatedAt
  * logo
  * name
  * type

### AssessmentMetadata
* AssessmentMetadata `object`:  The metadata associated with the specified assessment. 
  * assessmentReportsDestination
    * destination
    * destinationType
  * complianceType
  * creationTime
  * delegations
    * items [Delegation](#delegation)
  * description
  * id
  * lastUpdated
  * name
  * roles
    * items [Role](#role)
  * scope
    * awsAccounts
      * items [AWSAccount](#awsaccount)
    * awsServices
      * items [AWSService](#awsservice)
  * status

### AssessmentMetadataItem
* AssessmentMetadataItem `object`:  A metadata object associated with an assessment in AWS Audit Manager. 
  * complianceType
  * creationTime
  * delegations
    * items [Delegation](#delegation)
  * id
  * lastUpdated
  * name
  * roles
    * items [Role](#role)
  * status

### AssessmentName
* AssessmentName `string`

### AssessmentReport
* AssessmentReport `object`:  A finalized document generated from an AWS Audit Manager assessment. These reports summarize the relevant evidence collected for your audit, and link to the relevant evidence folders which are named and organized according to the controls specified in your assessment. 
  * assessmentId
  * assessmentName
  * author
  * awsAccountId
  * creationTime
  * description
  * id
  * name
  * status

### AssessmentReportDescription
* AssessmentReportDescription `string`

### AssessmentReportDestinationType
* AssessmentReportDestinationType `string` (values: S3)

### AssessmentReportEvidenceError
* AssessmentReportEvidenceError `object`:  An error entity for the <code>AssessmentReportEvidence</code> API. This is used to provide more meaningful errors than a simple string message. 
  * errorCode
  * errorMessage
  * evidenceId

### AssessmentReportEvidenceErrors
* AssessmentReportEvidenceErrors `array`
  * items [AssessmentReportEvidenceError](#assessmentreportevidenceerror)

### AssessmentReportMetadata
* AssessmentReportMetadata `object`:  The metadata objects associated with the specified assessment report. 
  * assessmentId
  * assessmentName
  * author
  * creationTime
  * description
  * id
  * name
  * status

### AssessmentReportName
* AssessmentReportName `string`

### AssessmentReportStatus
* AssessmentReportStatus `string` (values: COMPLETE, IN_PROGRESS, FAILED)

### AssessmentReportsDestination
* AssessmentReportsDestination `object`:  The location in which AWS Audit Manager saves assessment reports for the given assessment. 
  * destination
  * destinationType

### AssessmentReportsMetadata
* AssessmentReportsMetadata `array`
  * items [AssessmentReportMetadata](#assessmentreportmetadata)

### AssessmentStatus
* AssessmentStatus `string` (values: ACTIVE, INACTIVE)

### AssociateAssessmentReportEvidenceFolderRequest
* AssociateAssessmentReportEvidenceFolderRequest `object`
  * evidenceFolderId **required**

### AssociateAssessmentReportEvidenceFolderResponse
* AssociateAssessmentReportEvidenceFolderResponse `object`

### AuditManagerArn
* AuditManagerArn `string`

### BatchAssociateAssessmentReportEvidenceRequest
* BatchAssociateAssessmentReportEvidenceRequest `object`
  * evidenceFolderId **required**
  * evidenceIds **required**
    * items [UUID](#uuid)

### BatchAssociateAssessmentReportEvidenceResponse
* BatchAssociateAssessmentReportEvidenceResponse `object`
  * errors
    * items [AssessmentReportEvidenceError](#assessmentreportevidenceerror)
  * evidenceIds
    * items [UUID](#uuid)

### BatchCreateDelegationByAssessmentError
* BatchCreateDelegationByAssessmentError `object`:  An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. 
  * createDelegationRequest
    * comment
    * controlSetId
    * roleArn
    * roleType
  * errorCode
  * errorMessage

### BatchCreateDelegationByAssessmentErrors
* BatchCreateDelegationByAssessmentErrors `array`
  * items [BatchCreateDelegationByAssessmentError](#batchcreatedelegationbyassessmenterror)

### BatchCreateDelegationByAssessmentRequest
* BatchCreateDelegationByAssessmentRequest `object`
  * createDelegationRequests **required**
    * items [CreateDelegationRequest](#createdelegationrequest)

### BatchCreateDelegationByAssessmentResponse
* BatchCreateDelegationByAssessmentResponse `object`
  * delegations
    * items [Delegation](#delegation)
  * errors
    * items [BatchCreateDelegationByAssessmentError](#batchcreatedelegationbyassessmenterror)

### BatchDeleteDelegationByAssessmentError
* BatchDeleteDelegationByAssessmentError `object`:  An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. 
  * delegationId
  * errorCode
  * errorMessage

### BatchDeleteDelegationByAssessmentErrors
* BatchDeleteDelegationByAssessmentErrors `array`
  * items [BatchDeleteDelegationByAssessmentError](#batchdeletedelegationbyassessmenterror)

### BatchDeleteDelegationByAssessmentRequest
* BatchDeleteDelegationByAssessmentRequest `object`
  * delegationIds **required**
    * items [UUID](#uuid)

### BatchDeleteDelegationByAssessmentResponse
* BatchDeleteDelegationByAssessmentResponse `object`
  * errors
    * items [BatchDeleteDelegationByAssessmentError](#batchdeletedelegationbyassessmenterror)

### BatchDisassociateAssessmentReportEvidenceRequest
* BatchDisassociateAssessmentReportEvidenceRequest `object`
  * evidenceFolderId **required**
  * evidenceIds **required**
    * items [UUID](#uuid)

### BatchDisassociateAssessmentReportEvidenceResponse
* BatchDisassociateAssessmentReportEvidenceResponse `object`
  * errors
    * items [AssessmentReportEvidenceError](#assessmentreportevidenceerror)
  * evidenceIds
    * items [UUID](#uuid)

### BatchImportEvidenceToAssessmentControlError
* BatchImportEvidenceToAssessmentControlError `object`:  An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message. 
  * errorCode
  * errorMessage
  * manualEvidence
    * s3ResourcePath

### BatchImportEvidenceToAssessmentControlErrors
* BatchImportEvidenceToAssessmentControlErrors `array`
  * items [BatchImportEvidenceToAssessmentControlError](#batchimportevidencetoassessmentcontrolerror)

### BatchImportEvidenceToAssessmentControlRequest
* BatchImportEvidenceToAssessmentControlRequest `object`
  * manualEvidence **required**
    * items [ManualEvidence](#manualevidence)

### BatchImportEvidenceToAssessmentControlResponse
* BatchImportEvidenceToAssessmentControlResponse `object`
  * errors
    * items [BatchImportEvidenceToAssessmentControlError](#batchimportevidencetoassessmentcontrolerror)

### Boolean
* Boolean `boolean`

### ChangeLog
* ChangeLog `object`:  The record of a change within AWS Audit Manager, such as a modified assessment, a delegated control set, and so on. 
  * action
  * createdAt
  * createdBy
  * objectName
  * objectType

### ChangeLogs
* ChangeLogs `array`
  * items [ChangeLog](#changelog)

### ComplianceType
* ComplianceType `string`

### Control
* Control `object`:  A control in AWS Audit Manager. 
  * tags
  * actionPlanInstructions
  * actionPlanTitle
  * arn
  * controlMappingSources
    * items [ControlMappingSource](#controlmappingsource)
  * controlSources
  * createdAt
  * createdBy
  * description
  * id
  * lastUpdatedAt
  * lastUpdatedBy
  * name
  * testingInformation
  * type

### ControlComment
* ControlComment `object`:  A comment posted by a user on a control. This includes the author's name, the comment text, and a timestamp. 
  * authorName
  * commentBody
  * postedDate

### ControlCommentBody
* ControlCommentBody `string`

### ControlComments
* ControlComments `array`
  * items [ControlComment](#controlcomment)

### ControlDescription
* ControlDescription `string`

### ControlMappingSource
* ControlMappingSource `object`:  The data source that determines from where AWS Audit Manager collects evidence for the control. 
  * sourceDescription
  * sourceFrequency
  * sourceId
  * sourceKeyword [SourceKeyword](#sourcekeyword)
  * sourceName
  * sourceSetUpOption
  * sourceType
  * troubleshootingText

### ControlMappingSources
* ControlMappingSources `array`
  * items [ControlMappingSource](#controlmappingsource)

### ControlMetadata
* ControlMetadata `object`:  The metadata associated with the specified standard or custom control. 
  * arn
  * controlSources
  * createdAt
  * id
  * lastUpdatedAt
  * name

### ControlMetadataList
* ControlMetadataList `array`
  * items [ControlMetadata](#controlmetadata)

### ControlName
* ControlName `string`

### ControlResponse
* ControlResponse `string` (values: MANUAL, AUTOMATE, DEFER, IGNORE)

### ControlSet
* ControlSet `object`:  A set of controls in AWS Audit Manager. 
  * controls
    * items [Control](#control)
  * id
  * name

### ControlSetId
* ControlSetId `string`

### ControlSetName
* ControlSetName `string`

### ControlSetStatus
* ControlSetStatus `string` (values: ACTIVE, UNDER_REVIEW, REVIEWED)

### ControlSets
* ControlSets `array`
  * items [ControlSet](#controlset)

### ControlSetsCount
* ControlSetsCount `integer`

### ControlSources
* ControlSources `string`

### ControlStatus
* ControlStatus `string` (values: UNDER_REVIEW, REVIEWED, INACTIVE)

### ControlType
* ControlType `string` (values: Standard, Custom)

### Controls
* Controls `array`
  * items [Control](#control)

### ControlsCount
* ControlsCount `integer`

### CreateAssessmentFrameworkControl
* CreateAssessmentFrameworkControl `object`:  Control entity attributes that uniquely identify an existing control to be added to a framework in AWS Audit Manager. 
  * id

### CreateAssessmentFrameworkControlSet
* CreateAssessmentFrameworkControlSet `object`:  A <code>controlSet</code> entity that represents a collection of controls in AWS Audit Manager. This does not contain the control set ID. 
  * controls
    * items [CreateAssessmentFrameworkControl](#createassessmentframeworkcontrol)
  * name

### CreateAssessmentFrameworkControlSets
* CreateAssessmentFrameworkControlSets `array`
  * items [CreateAssessmentFrameworkControlSet](#createassessmentframeworkcontrolset)

### CreateAssessmentFrameworkControls
* CreateAssessmentFrameworkControls `array`
  * items [CreateAssessmentFrameworkControl](#createassessmentframeworkcontrol)

### CreateAssessmentFrameworkRequest
* CreateAssessmentFrameworkRequest `object`
  * complianceType
  * controlSets **required**
    * items [CreateAssessmentFrameworkControlSet](#createassessmentframeworkcontrolset)
  * description
  * name **required**

### CreateAssessmentFrameworkResponse
* CreateAssessmentFrameworkResponse `object`
  * framework
    * arn
    * complianceType
    * controlSets
      * items [ControlSet](#controlset)
    * controlSources
    * createdAt
    * createdBy
    * description
    * id
    * lastUpdatedAt
    * lastUpdatedBy
    * logo
    * name
    * type

### CreateAssessmentReportRequest
* CreateAssessmentReportRequest `object`
  * description
  * name **required**

### CreateAssessmentReportResponse
* CreateAssessmentReportResponse `object`
  * assessmentReport
    * assessmentId
    * assessmentName
    * author
    * awsAccountId
    * creationTime
    * description
    * id
    * name
    * status

### CreateAssessmentRequest
* CreateAssessmentRequest `object`
  * tags
  * assessmentReportsDestination **required**
    * destination
    * destinationType
  * description
  * frameworkId **required**
  * name **required**
  * roles **required**
    * items [Role](#role)
  * scope **required** [Scope](#scope)

### CreateAssessmentResponse
* CreateAssessmentResponse `object`
  * assessment [Assessment](#assessment)

### CreateControlMappingSource
* CreateControlMappingSource `object`:  Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>. 
  * sourceDescription
  * sourceFrequency
  * sourceKeyword [SourceKeyword](#sourcekeyword)
  * sourceName
  * sourceSetUpOption
  * sourceType
  * troubleshootingText

### CreateControlMappingSources
* CreateControlMappingSources `array`
  * items [CreateControlMappingSource](#createcontrolmappingsource)

### CreateControlRequest
* CreateControlRequest `object`
  * tags
  * actionPlanInstructions
  * actionPlanTitle
  * controlMappingSources **required**
    * items [CreateControlMappingSource](#createcontrolmappingsource)
  * description
  * name **required**
  * testingInformation

### CreateControlResponse
* CreateControlResponse `object`
  * control
    * tags
    * actionPlanInstructions
    * actionPlanTitle
    * arn
    * controlMappingSources
      * items [ControlMappingSource](#controlmappingsource)
    * controlSources
    * createdAt
    * createdBy
    * description
    * id
    * lastUpdatedAt
    * lastUpdatedBy
    * name
    * testingInformation
    * type

### CreateDelegationRequest
* CreateDelegationRequest `object`:  A collection of attributes used to create a delegation for an assessment in AWS Audit Manager. 
  * comment
  * controlSetId
  * roleArn
  * roleType

### CreateDelegationRequests
* CreateDelegationRequests `array`
  * items [CreateDelegationRequest](#createdelegationrequest)

### CreatedBy
* CreatedBy `string`

### Delegation
* Delegation `object`:  The assignment of a control set to a delegate for review. 
  * assessmentId
  * assessmentName
  * comment
  * controlSetId
  * createdBy
  * creationTime
  * id
  * lastUpdated
  * roleArn
  * roleType
  * status

### DelegationComment
* DelegationComment `string`

### DelegationIds
* DelegationIds `array`
  * items [UUID](#uuid)

### DelegationMetadata
* DelegationMetadata `object`:  The metadata associated with the specified delegation. 
  * assessmentId
  * assessmentName
  * controlSetName
  * creationTime
  * id
  * roleArn
  * status

### DelegationMetadataList
* DelegationMetadataList `array`
  * items [DelegationMetadata](#delegationmetadata)

### DelegationStatus
* DelegationStatus `string` (values: IN_PROGRESS, UNDER_REVIEW, COMPLETE)

### Delegations
* Delegations `array`
  * items [Delegation](#delegation)

### DeleteAssessmentFrameworkRequest
* DeleteAssessmentFrameworkRequest `object`

### DeleteAssessmentFrameworkResponse
* DeleteAssessmentFrameworkResponse `object`

### DeleteAssessmentReportRequest
* DeleteAssessmentReportRequest `object`

### DeleteAssessmentReportResponse
* DeleteAssessmentReportResponse `object`

### DeleteAssessmentRequest
* DeleteAssessmentRequest `object`

### DeleteAssessmentResponse
* DeleteAssessmentResponse `object`

### DeleteControlRequest
* DeleteControlRequest `object`

### DeleteControlResponse
* DeleteControlResponse `object`

### DeregisterAccountRequest
* DeregisterAccountRequest `object`

### DeregisterAccountResponse
* DeregisterAccountResponse `object`
  * status

### DeregisterOrganizationAdminAccountRequest
* DeregisterOrganizationAdminAccountRequest `object`
  * adminAccountId

### DeregisterOrganizationAdminAccountResponse
* DeregisterOrganizationAdminAccountResponse `object`

### DisassociateAssessmentReportEvidenceFolderRequest
* DisassociateAssessmentReportEvidenceFolderRequest `object`
  * evidenceFolderId **required**

### DisassociateAssessmentReportEvidenceFolderResponse
* DisassociateAssessmentReportEvidenceFolderResponse `object`

### EmailAddress
* EmailAddress `string`

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### EventName
* EventName `string`

### Evidence
* Evidence `object`:  A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity triggered by a user, or a system configuration snapshot. 
  * assessmentReportSelection
  * attributes
  * awsAccountId
  * awsOrganization
  * complianceCheck
  * dataSource
  * eventName
  * eventSource
  * evidenceAwsAccountId
  * evidenceByType
  * evidenceFolderId
  * iamId
  * id
  * resourcesIncluded
    * items [Resource](#resource)
  * time

### EvidenceAttributeKey
* EvidenceAttributeKey `string`

### EvidenceAttributeValue
* EvidenceAttributeValue `string`

### EvidenceAttributes
* EvidenceAttributes `object`

### EvidenceIds
* EvidenceIds `array`
  * items [UUID](#uuid)

### EvidenceList
* EvidenceList `array`
  * items [Evidence](#evidence)

### EvidenceSources
* EvidenceSources `array`
  * items [NonEmptyString](#nonemptystring)

### Filename
* Filename `string`

### Framework
* Framework `object`:  The file used to structure and automate AWS Audit Manager assessments for a given compliance standard. 
  * arn
  * complianceType
  * controlSets
    * items [ControlSet](#controlset)
  * controlSources
  * createdAt
  * createdBy
  * description
  * id
  * lastUpdatedAt
  * lastUpdatedBy
  * logo
  * name
  * type

### FrameworkDescription
* FrameworkDescription `string`

### FrameworkMetadata
* FrameworkMetadata `object`:  The metadata of a framework, such as the name, ID, description, and so on. 
  * complianceType
  * description
  * logo
  * name

### FrameworkMetadataList
* FrameworkMetadataList `array`
  * items [AssessmentFrameworkMetadata](#assessmentframeworkmetadata)

### FrameworkName
* FrameworkName `string`

### FrameworkType
* FrameworkType `string` (values: Standard, Custom)

### GenericArn
* GenericArn `string`

### GetAccountStatusRequest
* GetAccountStatusRequest `object`

### GetAccountStatusResponse
* GetAccountStatusResponse `object`
  * status

### GetAssessmentFrameworkRequest
* GetAssessmentFrameworkRequest `object`

### GetAssessmentFrameworkResponse
* GetAssessmentFrameworkResponse `object`
  * framework
    * arn
    * complianceType
    * controlSets
      * items [ControlSet](#controlset)
    * controlSources
    * createdAt
    * createdBy
    * description
    * id
    * lastUpdatedAt
    * lastUpdatedBy
    * logo
    * name
    * type

### GetAssessmentReportUrlRequest
* GetAssessmentReportUrlRequest `object`

### GetAssessmentReportUrlResponse
* GetAssessmentReportUrlResponse `object`
  * preSignedUrl [URL](#url)

### GetAssessmentRequest
* GetAssessmentRequest `object`

### GetAssessmentResponse
* GetAssessmentResponse `object`
  * assessment [Assessment](#assessment)

### GetChangeLogsRequest
* GetChangeLogsRequest `object`

### GetChangeLogsResponse
* GetChangeLogsResponse `object`
  * changeLogs
    * items [ChangeLog](#changelog)
  * nextToken

### GetControlRequest
* GetControlRequest `object`

### GetControlResponse
* GetControlResponse `object`
  * control
    * tags
    * actionPlanInstructions
    * actionPlanTitle
    * arn
    * controlMappingSources
      * items [ControlMappingSource](#controlmappingsource)
    * controlSources
    * createdAt
    * createdBy
    * description
    * id
    * lastUpdatedAt
    * lastUpdatedBy
    * name
    * testingInformation
    * type

### GetDelegationsRequest
* GetDelegationsRequest `object`

### GetDelegationsResponse
* GetDelegationsResponse `object`
  * delegations
    * items [DelegationMetadata](#delegationmetadata)
  * nextToken

### GetEvidenceByEvidenceFolderRequest
* GetEvidenceByEvidenceFolderRequest `object`

### GetEvidenceByEvidenceFolderResponse
* GetEvidenceByEvidenceFolderResponse `object`
  * evidence
    * items [Evidence](#evidence)
  * nextToken

### GetEvidenceFolderRequest
* GetEvidenceFolderRequest `object`

### GetEvidenceFolderResponse
* GetEvidenceFolderResponse `object`
  * evidenceFolder
    * assessmentId
    * assessmentReportSelectionCount
    * author
    * controlId
    * controlName
    * controlSetId
    * dataSource
    * date
    * evidenceAwsServiceSourceCount
    * evidenceByTypeComplianceCheckCount
    * evidenceByTypeComplianceCheckIssuesCount
    * evidenceByTypeConfigurationDataCount
    * evidenceByTypeManualCount
    * evidenceByTypeUserActivityCount
    * evidenceResourcesIncludedCount
    * id
    * name
    * totalEvidence

### GetEvidenceFoldersByAssessmentControlRequest
* GetEvidenceFoldersByAssessmentControlRequest `object`

### GetEvidenceFoldersByAssessmentControlResponse
* GetEvidenceFoldersByAssessmentControlResponse `object`
  * evidenceFolders
    * items [AssessmentEvidenceFolder](#assessmentevidencefolder)
  * nextToken

### GetEvidenceFoldersByAssessmentRequest
* GetEvidenceFoldersByAssessmentRequest `object`

### GetEvidenceFoldersByAssessmentResponse
* GetEvidenceFoldersByAssessmentResponse `object`
  * evidenceFolders
    * items [AssessmentEvidenceFolder](#assessmentevidencefolder)
  * nextToken

### GetEvidenceRequest
* GetEvidenceRequest `object`

### GetEvidenceResponse
* GetEvidenceResponse `object`
  * evidence
    * assessmentReportSelection
    * attributes
    * awsAccountId
    * awsOrganization
    * complianceCheck
    * dataSource
    * eventName
    * eventSource
    * evidenceAwsAccountId
    * evidenceByType
    * evidenceFolderId
    * iamId
    * id
    * resourcesIncluded
      * items [Resource](#resource)
    * time

### GetOrganizationAdminAccountRequest
* GetOrganizationAdminAccountRequest `object`

### GetOrganizationAdminAccountResponse
* GetOrganizationAdminAccountResponse `object`
  * adminAccountId
  * organizationId

### GetServicesInScopeRequest
* GetServicesInScopeRequest `object`

### GetServicesInScopeResponse
* GetServicesInScopeResponse `object`
  * serviceMetadata
    * items [ServiceMetadata](#servicemetadata)

### GetSettingsRequest
* GetSettingsRequest `object`

### GetSettingsResponse
* GetSettingsResponse `object`
  * settings
    * defaultAssessmentReportsDestination
      * destination
      * destinationType
    * defaultProcessOwners
      * items [Role](#role)
    * isAwsOrgEnabled
    * kmsKey
    * snsTopic

### HyperlinkName
* HyperlinkName `string`

### IamArn
* IamArn `string`

### Integer
* Integer `integer`

### InternalServerException


### KeywordInputType
* KeywordInputType `string` (values: SELECT_FROM_LIST)

### KeywordValue
* KeywordValue `string`

### Keywords
* Keywords `array`
  * items [KeywordValue](#keywordvalue)

### KmsKey
* KmsKey `string`

### LastUpdatedBy
* LastUpdatedBy `string`

### ListAssessmentFrameworksRequest
* ListAssessmentFrameworksRequest `object`

### ListAssessmentFrameworksResponse
* ListAssessmentFrameworksResponse `object`
  * frameworkMetadataList
    * items [AssessmentFrameworkMetadata](#assessmentframeworkmetadata)
  * nextToken

### ListAssessmentMetadata
* ListAssessmentMetadata `array`
  * items [AssessmentMetadataItem](#assessmentmetadataitem)

### ListAssessmentReportsRequest
* ListAssessmentReportsRequest `object`

### ListAssessmentReportsResponse
* ListAssessmentReportsResponse `object`
  * assessmentReports
    * items [AssessmentReportMetadata](#assessmentreportmetadata)
  * nextToken

### ListAssessmentsRequest
* ListAssessmentsRequest `object`

### ListAssessmentsResponse
* ListAssessmentsResponse `object`
  * assessmentMetadata
    * items [AssessmentMetadataItem](#assessmentmetadataitem)
  * nextToken

### ListControlsRequest
* ListControlsRequest `object`

### ListControlsResponse
* ListControlsResponse `object`
  * controlMetadataList
    * items [ControlMetadata](#controlmetadata)
  * nextToken

### ListKeywordsForDataSourceRequest
* ListKeywordsForDataSourceRequest `object`

### ListKeywordsForDataSourceResponse
* ListKeywordsForDataSourceResponse `object`
  * keywords
    * items [KeywordValue](#keywordvalue)
  * nextToken

### ListNotificationsRequest
* ListNotificationsRequest `object`

### ListNotificationsResponse
* ListNotificationsResponse `object`
  * nextToken
  * notifications
    * items [Notification](#notification)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### ManualEvidence
* ManualEvidence `object`:  Evidence that is uploaded to AWS Audit Manager manually. 
  * s3ResourcePath

### ManualEvidenceList
* ManualEvidenceList `array`
  * items [ManualEvidence](#manualevidence)

### MaxResults
* MaxResults `integer`: Max results in the page.

### NonEmptyString
* NonEmptyString `string`

### Notification
* Notification `object`:  The notification used to inform a user of an update in AWS Audit Manager. For example, this includes the notification that is sent when a control set is delegated for review. 
  * assessmentId
  * assessmentName
  * controlSetId
  * controlSetName
  * description
  * eventTime
  * id
  * source

### Notifications
* Notifications `array`
  * items [Notification](#notification)

### ObjectTypeEnum
* ObjectTypeEnum `string` (values: ASSESSMENT, CONTROL_SET, CONTROL, DELEGATION, ASSESSMENT_REPORT)

### RegisterAccountRequest
* RegisterAccountRequest `object`
  * delegatedAdminAccount
  * kmsKey

### RegisterAccountResponse
* RegisterAccountResponse `object`
  * status

### RegisterOrganizationAdminAccountRequest
* RegisterOrganizationAdminAccountRequest `object`
  * adminAccountId **required**

### RegisterOrganizationAdminAccountResponse
* RegisterOrganizationAdminAccountResponse `object`
  * adminAccountId
  * organizationId

### Resource
* Resource `object`:  A system asset that is evaluated in an AWS Audit Manager assessment. 
  * arn
  * value

### ResourceNotFoundException


### Resources
* Resources `array`
  * items [Resource](#resource)

### Role
* Role `object`:  The wrapper that contains AWS Audit Manager role information, such as the role type and IAM Amazon Resource Name (ARN). 
  * roleArn
  * roleType

### RoleType
* RoleType `string` (values: PROCESS_OWNER, RESOURCE_OWNER)

### Roles
* Roles `array`
  * items [Role](#role)

### S3Url
* S3Url `string`

### SNSTopic
* SNSTopic `string`

### Scope
* Scope `object`:  The wrapper that contains the AWS accounts and AWS services in scope for the assessment. 
  * awsAccounts
    * items [AWSAccount](#awsaccount)
  * awsServices
    * items [AWSService](#awsservice)

### ServiceMetadata
* ServiceMetadata `object`:  The metadata associated with the specified AWS service. 
  * category
  * description
  * displayName
  * name

### ServiceMetadataList
* ServiceMetadataList `array`
  * items [ServiceMetadata](#servicemetadata)

### SettingAttribute
* SettingAttribute `string` (values: ALL, IS_AWS_ORG_ENABLED, SNS_TOPIC, DEFAULT_ASSESSMENT_REPORTS_DESTINATION, DEFAULT_PROCESS_OWNERS)

### Settings
* Settings `object`:  The settings object that holds all supported AWS Audit Manager settings. 
  * defaultAssessmentReportsDestination
    * destination
    * destinationType
  * defaultProcessOwners
    * items [Role](#role)
  * isAwsOrgEnabled
  * kmsKey
  * snsTopic

### SnsArn
* SnsArn `string`

### SourceDescription
* SourceDescription `string`

### SourceFrequency
* SourceFrequency `string` (values: DAILY, WEEKLY, MONTHLY)

### SourceKeyword
* SourceKeyword `object`:  The keyword to search for in AWS CloudTrail logs. 
  * keywordInputType
  * keywordValue

### SourceName
* SourceName `string`

### SourceSetUpOption
* SourceSetUpOption `string` (values: System_Controls_Mapping, Procedural_Controls_Mapping)

### SourceType
* SourceType `string` (values: AWS_Cloudtrail, AWS_Config, AWS_Security_Hub, AWS_API_Call, MANUAL)

### String
* String `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TestingInformation
* TestingInformation `string`

### Timestamp
* Timestamp `string`

### TimestampUUID
* TimestampUUID `string`

### Token
* Token `string`

### TroubleshootingText
* TroubleshootingText `string`

### URL
* URL `object`:  A uniform resource locator, used as a unique identifier to locate a resource on the internet. 
  * hyperlinkName
  * link

### UUID
* UUID `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAssessmentControlRequest
* UpdateAssessmentControlRequest `object`
  * commentBody
  * controlStatus

### UpdateAssessmentControlResponse
* UpdateAssessmentControlResponse `object`
  * control
    * assessmentReportEvidenceCount
    * comments
      * items [ControlComment](#controlcomment)
    * description
    * evidenceCount
    * evidenceSources
      * items [NonEmptyString](#nonemptystring)
    * id
    * name
    * response
    * status

### UpdateAssessmentControlSetStatusRequest
* UpdateAssessmentControlSetStatusRequest `object`
  * comment **required**
  * status **required**

### UpdateAssessmentControlSetStatusResponse
* UpdateAssessmentControlSetStatusResponse `object`
  * controlSet
    * controls
      * items [AssessmentControl](#assessmentcontrol)
    * delegations
      * items [Delegation](#delegation)
    * description
    * id
    * manualEvidenceCount
    * roles
      * items [Role](#role)
    * status
    * systemEvidenceCount

### UpdateAssessmentFrameworkControlSet
* UpdateAssessmentFrameworkControlSet `object`:  A <code>controlSet</code> entity that represents a collection of controls in AWS Audit Manager. This does not contain the control set ID. 
  * controls
    * items [CreateAssessmentFrameworkControl](#createassessmentframeworkcontrol)
  * id
  * name

### UpdateAssessmentFrameworkControlSets
* UpdateAssessmentFrameworkControlSets `array`
  * items [UpdateAssessmentFrameworkControlSet](#updateassessmentframeworkcontrolset)

### UpdateAssessmentFrameworkRequest
* UpdateAssessmentFrameworkRequest `object`
  * complianceType
  * controlSets **required**
    * items [UpdateAssessmentFrameworkControlSet](#updateassessmentframeworkcontrolset)
  * description
  * name **required**

### UpdateAssessmentFrameworkResponse
* UpdateAssessmentFrameworkResponse `object`
  * framework
    * arn
    * complianceType
    * controlSets
      * items [ControlSet](#controlset)
    * controlSources
    * createdAt
    * createdBy
    * description
    * id
    * lastUpdatedAt
    * lastUpdatedBy
    * logo
    * name
    * type

### UpdateAssessmentRequest
* UpdateAssessmentRequest `object`
  * assessmentDescription
  * assessmentName
  * assessmentReportsDestination
    * destination
    * destinationType
  * roles
    * items [Role](#role)
  * scope **required**
    * awsAccounts
      * items [AWSAccount](#awsaccount)
    * awsServices
      * items [AWSService](#awsservice)

### UpdateAssessmentResponse
* UpdateAssessmentResponse `object`
  * assessment
    * tags
    * arn
    * awsAccount
      * emailAddress
      * id
      * name
    * framework
      * arn
      * controlSets
        * items [AssessmentControlSet](#assessmentcontrolset)
      * id
      * metadata [FrameworkMetadata](#frameworkmetadata)
    * metadata
      * assessmentReportsDestination
        * destination
        * destinationType
      * complianceType
      * creationTime
      * delegations
        * items [Delegation](#delegation)
      * description
      * id
      * lastUpdated
      * name
      * roles
        * items [Role](#role)
      * scope
        * awsAccounts
          * items [AWSAccount](#awsaccount)
        * awsServices
          * items [AWSService](#awsservice)
      * status

### UpdateAssessmentStatusRequest
* UpdateAssessmentStatusRequest `object`
  * status **required**

### UpdateAssessmentStatusResponse
* UpdateAssessmentStatusResponse `object`
  * assessment
    * tags
    * arn
    * awsAccount
      * emailAddress
      * id
      * name
    * framework
      * arn
      * controlSets
        * items [AssessmentControlSet](#assessmentcontrolset)
      * id
      * metadata [FrameworkMetadata](#frameworkmetadata)
    * metadata
      * assessmentReportsDestination
        * destination
        * destinationType
      * complianceType
      * creationTime
      * delegations
        * items [Delegation](#delegation)
      * description
      * id
      * lastUpdated
      * name
      * roles
        * items [Role](#role)
      * scope
        * awsAccounts
          * items [AWSAccount](#awsaccount)
        * awsServices
          * items [AWSService](#awsservice)
      * status

### UpdateControlRequest
* UpdateControlRequest `object`
  * actionPlanInstructions
  * actionPlanTitle
  * controlMappingSources **required**
    * items [ControlMappingSource](#controlmappingsource)
  * description
  * name **required**
  * testingInformation

### UpdateControlResponse
* UpdateControlResponse `object`
  * control
    * tags
    * actionPlanInstructions
    * actionPlanTitle
    * arn
    * controlMappingSources
      * items [ControlMappingSource](#controlmappingsource)
    * controlSources
    * createdAt
    * createdBy
    * description
    * id
    * lastUpdatedAt
    * lastUpdatedBy
    * name
    * testingInformation
    * type

### UpdateSettingsRequest
* UpdateSettingsRequest `object`
  * defaultAssessmentReportsDestination
    * destination
    * destinationType
  * defaultProcessOwners
    * items [Role](#role)
  * kmsKey
  * snsTopic

### UpdateSettingsResponse
* UpdateSettingsResponse `object`
  * settings
    * defaultAssessmentReportsDestination
      * destination
      * destinationType
    * defaultProcessOwners
      * items [Role](#role)
    * isAwsOrgEnabled
    * kmsKey
    * snsTopic

### UrlLink
* UrlLink `string`

### Username
* Username `string`

### ValidateAssessmentReportIntegrityRequest
* ValidateAssessmentReportIntegrityRequest `object`
  * s3RelativePath **required**

### ValidateAssessmentReportIntegrityResponse
* ValidateAssessmentReportIntegrityResponse `object`
  * signatureAlgorithm
  * signatureDateTime
  * signatureKeyId
  * signatureValid
  * validationErrors
    * items [NonEmptyString](#nonemptystring)

### ValidationErrors
* ValidationErrors `array`
  * items [NonEmptyString](#nonemptystring)

### ValidationException


### organizationId
* organizationId `string`


