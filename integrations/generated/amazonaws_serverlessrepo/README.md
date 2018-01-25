# @datafire/amazonaws_serverlessrepo

Client library for AWSServerlessApplicationRepository

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_serverlessrepo
```
```js
let amazonaws_serverlessrepo = require('@datafire/amazonaws_serverlessrepo').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_serverlessrepo.ListApplications({}).then(data => {
  console.log(data);
});
```

## Description

AWS Serverless Repository

## Actions

### ListApplications



```js
amazonaws_serverlessrepo.ListApplications({}, context)
```

#### Input
* input `object`

#### Output
* output [ListApplicationsResponse](#listapplicationsresponse)

### UpdateApplication



```js
amazonaws_serverlessrepo.UpdateApplication({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * Author [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * ReadmeBody [__string](#__string)
  * ReadmeUrl [__string](#__string)

#### Output
* output [UpdateApplicationResponse](#updateapplicationresponse)

### CreateCloudFormationChangeSet



```js
amazonaws_serverlessrepo.CreateCloudFormationChangeSet({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * ParameterOverrides [ListOfParameterValue](#listofparametervalue)
  * SemanticVersion [__string](#__string)
  * StackName [__string](#__string)

#### Output
*Output schema unknown*

### PutApplicationPolicy



```js
amazonaws_serverlessrepo.PutApplicationPolicy({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * Statements [ListOfApplicationPolicyStatement](#listofapplicationpolicystatement)

#### Output
* output [PutApplicationPolicyResponse](#putapplicationpolicyresponse)

### ListApplicationVersions



```js
amazonaws_serverlessrepo.ListApplicationVersions({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`

#### Output
* output [ListApplicationVersionsResponse](#listapplicationversionsresponse)

### CreateApplicationVersion



```js
amazonaws_serverlessrepo.CreateApplicationVersion({
  "applicationId": "",
  "semanticVersion": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * semanticVersion **required** `string`
  * SourceCodeUrl [__string](#__string)
  * TemplateBody [__string](#__string)
  * TemplateUrl [__string](#__string)

#### Output
*Output schema unknown*



## Definitions

### Application
* Application `object`: Details about the application.
  * ApplicationId [__string](#__string)
  * Author [__string](#__string)
  * CreationTime [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * LicenseUrl [__string](#__string)
  * Name [__string](#__string)
  * ReadmeUrl [__string](#__string)
  * SpdxLicenseId [__string](#__string)
  * Version [Version](#version)

### ApplicationPage
* ApplicationPage `object`: List of application details.
  * Applications [ListOfApplicationSummary](#listofapplicationsummary)
  * NextToken [__string](#__string)

### ApplicationPolicy
* ApplicationPolicy `object`: Policy statements applied to the application.
  * Statements [ListOfApplicationPolicyStatement](#listofapplicationpolicystatement)

### ApplicationPolicyStatement
* ApplicationPolicyStatement `object`: Policy statement applied to the application.
  * Actions [ListOf__string](#listof__string)
  * Principals [ListOf__string](#listof__string)
  * StatementId [__string](#__string)

### ApplicationSummary
* ApplicationSummary `object`: Summary of details about the application.
  * ApplicationId [__string](#__string)
  * Author [__string](#__string)
  * CreationTime [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * Name [__string](#__string)
  * SpdxLicenseId [__string](#__string)

### ApplicationVersionPage
* ApplicationVersionPage `object`: List of version summaries for the application.
  * NextToken [__string](#__string)
  * Versions [ListOfVersionSummary](#listofversionsummary)

### BadRequestException
* BadRequestException `object`: One of the parameters in the request is invalid.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### ChangeSetDetails
* ChangeSetDetails `object`: Details of the change set.
  * ApplicationId [__string](#__string)
  * ChangeSetId [__string](#__string)
  * SemanticVersion [__string](#__string)
  * StackId [__string](#__string)

### ConflictException
* ConflictException `object`: The resource already exists.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### CreateApplicationInput
* CreateApplicationInput `object`: Create application request.
  * Author [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * LicenseBody [__string](#__string)
  * LicenseUrl [__string](#__string)
  * Name [__string](#__string)
  * ReadmeBody [__string](#__string)
  * ReadmeUrl [__string](#__string)
  * SemanticVersion [__string](#__string)
  * SourceCodeUrl [__string](#__string)
  * SpdxLicenseId [__string](#__string)
  * TemplateBody [__string](#__string)
  * TemplateUrl [__string](#__string)

### CreateApplicationRequest
* CreateApplicationRequest `object`
  * Author [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * LicenseBody [__string](#__string)
  * LicenseUrl [__string](#__string)
  * Name [__string](#__string)
  * ReadmeBody [__string](#__string)
  * ReadmeUrl [__string](#__string)
  * SemanticVersion [__string](#__string)
  * SourceCodeUrl [__string](#__string)
  * SpdxLicenseId [__string](#__string)
  * TemplateBody [__string](#__string)
  * TemplateUrl [__string](#__string)

### CreateApplicationResponse
* CreateApplicationResponse `object`
  * ApplicationId [__string](#__string)
  * Author [__string](#__string)
  * CreationTime [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * LicenseUrl [__string](#__string)
  * Name [__string](#__string)
  * ReadmeUrl [__string](#__string)
  * SpdxLicenseId [__string](#__string)
  * Version [Version](#version)

### CreateApplicationVersionInput
* CreateApplicationVersionInput `object`: Create version request.
  * SourceCodeUrl [__string](#__string)
  * TemplateBody [__string](#__string)
  * TemplateUrl [__string](#__string)

### CreateApplicationVersionRequest
* CreateApplicationVersionRequest `object`
  * SourceCodeUrl [__string](#__string)
  * TemplateBody [__string](#__string)
  * TemplateUrl [__string](#__string)

### CreateApplicationVersionResponse
* CreateApplicationVersionResponse `object`
  * ApplicationId [__string](#__string)
  * CreationTime [__string](#__string)
  * ParameterDefinitions [ListOfParameterDefinition](#listofparameterdefinition)
  * SemanticVersion [__string](#__string)
  * SourceCodeUrl [__string](#__string)
  * TemplateUrl [__string](#__string)

### CreateCloudFormationChangeSetInput
* CreateCloudFormationChangeSetInput `object`: Create application ChangeSet request.
  * ParameterOverrides [ListOfParameterValue](#listofparametervalue)
  * SemanticVersion [__string](#__string)
  * StackName [__string](#__string)

### CreateCloudFormationChangeSetRequest
* CreateCloudFormationChangeSetRequest `object`: Create application ChangeSet request
  * ParameterOverrides [ListOfParameterValue](#listofparametervalue)
  * SemanticVersion [__string](#__string)
  * StackName [__string](#__string)

### CreateCloudFormationChangeSetResponse
* CreateCloudFormationChangeSetResponse `object`
  * ApplicationId [__string](#__string)
  * ChangeSetId [__string](#__string)
  * SemanticVersion [__string](#__string)
  * StackId [__string](#__string)

### ForbiddenException
* ForbiddenException `object`: The client is not authenticated.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### GetApplicationPolicyRequest
* GetApplicationPolicyRequest `object`

### GetApplicationPolicyResponse
* GetApplicationPolicyResponse `object`
  * Statements [ListOfApplicationPolicyStatement](#listofapplicationpolicystatement)

### GetApplicationRequest
* GetApplicationRequest `object`

### GetApplicationResponse
* GetApplicationResponse `object`
  * ApplicationId [__string](#__string)
  * Author [__string](#__string)
  * CreationTime [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * LicenseUrl [__string](#__string)
  * Name [__string](#__string)
  * ReadmeUrl [__string](#__string)
  * SpdxLicenseId [__string](#__string)
  * Version [Version](#version)

### InternalServerErrorException
* InternalServerErrorException `object`: The AWS Serverless Application Repository service encountered an internal error.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### ListApplicationVersionsRequest
* ListApplicationVersionsRequest `object`

### ListApplicationVersionsResponse
* ListApplicationVersionsResponse `object`
  * NextToken [__string](#__string)
  * Versions [ListOfVersionSummary](#listofversionsummary)

### ListApplicationsRequest
* ListApplicationsRequest `object`

### ListApplicationsResponse
* ListApplicationsResponse `object`
  * Applications [ListOfApplicationSummary](#listofapplicationsummary)
  * NextToken [__string](#__string)

### ListOfApplicationPolicyStatement
* ListOfApplicationPolicyStatement `array`
  * items [ApplicationPolicyStatement](#applicationpolicystatement)

### ListOfApplicationSummary
* ListOfApplicationSummary `array`
  * items [ApplicationSummary](#applicationsummary)

### ListOfParameterDefinition
* ListOfParameterDefinition `array`
  * items [ParameterDefinition](#parameterdefinition)

### ListOfParameterValue
* ListOfParameterValue `array`
  * items [ParameterValue](#parametervalue)

### ListOfVersionSummary
* ListOfVersionSummary `array`
  * items [VersionSummary](#versionsummary)

### ListOf__string
* ListOf__string `array`
  * items [__string](#__string)

### MaxItems
* MaxItems `integer`

### NotFoundException
* NotFoundException `object`: The resource (for example, an access policy statement) specified in the request does not exist.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### ParameterDefinition
* ParameterDefinition `object`: Parameters supported by the application.
  * AllowedPattern [__string](#__string)
  * AllowedValues [ListOf__string](#listof__string)
  * ConstraintDescription [__string](#__string)
  * DefaultValue [__string](#__string)
  * Description [__string](#__string)
  * MaxLength [__integer](#__integer)
  * MaxValue [__integer](#__integer)
  * MinLength [__integer](#__integer)
  * MinValue [__integer](#__integer)
  * Name [__string](#__string)
  * NoEcho [__boolean](#__boolean)
  * ReferencedByResources [ListOf__string](#listof__string)
  * Type [__string](#__string)

### ParameterValue
* ParameterValue `object`: Parameter value of the application.
  * Name [__string](#__string)
  * Value [__string](#__string)

### PutApplicationPolicyRequest
* PutApplicationPolicyRequest `object`: Put policy request
  * Statements [ListOfApplicationPolicyStatement](#listofapplicationpolicystatement)

### PutApplicationPolicyResponse
* PutApplicationPolicyResponse `object`
  * Statements [ListOfApplicationPolicyStatement](#listofapplicationpolicystatement)

### TooManyRequestsException
* TooManyRequestsException `object`: The client is sending more than the allowed number of requests per unit time.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### UpdateApplicationInput
* UpdateApplicationInput `object`: Update application request.
  * Author [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * ReadmeBody [__string](#__string)
  * ReadmeUrl [__string](#__string)

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * Author [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * ReadmeBody [__string](#__string)
  * ReadmeUrl [__string](#__string)

### UpdateApplicationResponse
* UpdateApplicationResponse `object`
  * ApplicationId [__string](#__string)
  * Author [__string](#__string)
  * CreationTime [__string](#__string)
  * Description [__string](#__string)
  * Labels [ListOf__string](#listof__string)
  * LicenseUrl [__string](#__string)
  * Name [__string](#__string)
  * ReadmeUrl [__string](#__string)
  * SpdxLicenseId [__string](#__string)
  * Version [Version](#version)

### Version
* Version `object`: Application version details.
  * ApplicationId [__string](#__string)
  * CreationTime [__string](#__string)
  * ParameterDefinitions [ListOfParameterDefinition](#listofparameterdefinition)
  * SemanticVersion [__string](#__string)
  * SourceCodeUrl [__string](#__string)
  * TemplateUrl [__string](#__string)

### VersionSummary
* VersionSummary `object`: Application version summary.
  * ApplicationId [__string](#__string)
  * CreationTime [__string](#__string)
  * SemanticVersion [__string](#__string)
  * SourceCodeUrl [__string](#__string)

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __string
* __string `string`

### __timestamp
* __timestamp `string`


