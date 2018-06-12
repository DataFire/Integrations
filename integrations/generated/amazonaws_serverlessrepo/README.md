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

<p>The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find
 and deploy serverless applications in the AWS Cloud. For more information about serverless applications,
 see Serverless Computing and Applications on the AWS website.</p><p>The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of 
 all levels can get started with serverless computing without needing to learn anything new. You can use category 
 keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots. 
 You can also search for applications by name, publisher, or event source. To use an application, you simply choose it, 
 configure any required fields, and deploy it with a few clicks. </p><p>You can also easily publish applications, sharing them publicly with the community at large, or privately
 within your team or across your organization. To publish a serverless application (or app), you can use the
 AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the
 code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.
 For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs
 GitHub repository.</p><p>The AWS Serverless Application Repository Developer Guide contains more information about the two developer
 experiences available:</p><ul>
 <li>
 <p>Consuming Applications – Browse for applications and view information about them, including
 source code and readme files. Also install, configure, and deploy applications of your choosing. </p>
 <p>Publishing Applications – Configure and upload applications to make them available to other
 developers, and publish new versions of applications. </p>
 </li>
 </ul>

## Actions

### ListApplications



```js
amazonaws_serverlessrepo.ListApplications({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * NextToken `string`

#### Output
* output [ListApplicationsResponse](#listapplicationsresponse)

### CreateApplication



```js
amazonaws_serverlessrepo.CreateApplication({}, context)
```

#### Input
* input `object`
  * Author [__string](#__string)
  * Description [__string](#__string)
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
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

#### Output
*Output schema unknown*

### DeleteApplication



```js
amazonaws_serverlessrepo.DeleteApplication({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`

#### Output
*Output schema unknown*

### GetApplication



```js
amazonaws_serverlessrepo.GetApplication({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`

#### Output
* output [GetApplicationResponse](#getapplicationresponse)

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
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
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
  * ParameterOverrides [__listOfParameterValue](#__listofparametervalue)
  * SemanticVersion [__string](#__string)
  * StackName [__string](#__string)

#### Output
*Output schema unknown*

### GetApplicationPolicy



```js
amazonaws_serverlessrepo.GetApplicationPolicy({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`

#### Output
* output [GetApplicationPolicyResponse](#getapplicationpolicyresponse)

### PutApplicationPolicy



```js
amazonaws_serverlessrepo.PutApplicationPolicy({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * Statements [__listOfApplicationPolicyStatement](#__listofapplicationpolicystatement)

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
  * MaxItems `string`
  * NextToken `string`
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
  * ApplicationId **required** [__string](#__string)
  * Author **required** [__string](#__string)
  * CreationTime [__string](#__string)
  * Description **required** [__string](#__string)
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
  * LicenseUrl [__string](#__string)
  * Name **required** [__string](#__string)
  * ReadmeUrl [__string](#__string)
  * SpdxLicenseId [__string](#__string)
  * Version [Version](#version)

### ApplicationPage
* ApplicationPage `object`: List of application details.
  * Applications **required** [__listOfApplicationSummary](#__listofapplicationsummary)
  * NextToken [__string](#__string)

### ApplicationPolicy
* ApplicationPolicy `object`: Policy statements applied to the application.
  * Statements **required** [__listOfApplicationPolicyStatement](#__listofapplicationpolicystatement)

### ApplicationPolicyStatement
* ApplicationPolicyStatement `object`: Policy statement applied to the application.
  * Actions **required** [__listOf__string](#__listof__string)
  * Principals **required** [__listOf__string](#__listof__string)
  * StatementId [__string](#__string)

### ApplicationSummary
* ApplicationSummary `object`: Summary of details about the application.
  * ApplicationId **required** [__string](#__string)
  * Author **required** [__string](#__string)
  * CreationTime [__string](#__string)
  * Description **required** [__string](#__string)
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
  * Name **required** [__string](#__string)
  * SpdxLicenseId [__string](#__string)

### ApplicationVersionPage
* ApplicationVersionPage `object`: List of version summaries for the application.
  * NextToken [__string](#__string)
  * Versions **required** [__listOfVersionSummary](#__listofversionsummary)

### BadRequestException
* BadRequestException `object`: One of the parameters in the request is invalid.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### ChangeSetDetails
* ChangeSetDetails `object`: Details of the change set.
  * ApplicationId **required** [__string](#__string)
  * ChangeSetId **required** [__string](#__string)
  * SemanticVersion **required** [__string](#__string)
  * StackId **required** [__string](#__string)

### ConflictException
* ConflictException `object`: The resource already exists.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### CreateApplicationInput
* CreateApplicationInput `object`: Create application request.
  * Author **required** [__string](#__string)
  * Description **required** [__string](#__string)
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
  * LicenseBody [__string](#__string)
  * LicenseUrl [__string](#__string)
  * Name **required** [__string](#__string)
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
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
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
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
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
  * ParameterDefinitions [__listOfParameterDefinition](#__listofparameterdefinition)
  * SemanticVersion [__string](#__string)
  * SourceCodeUrl [__string](#__string)
  * TemplateUrl [__string](#__string)

### CreateCloudFormationChangeSetInput
* CreateCloudFormationChangeSetInput `object`: Create application ChangeSet request.
  * ParameterOverrides [__listOfParameterValue](#__listofparametervalue)
  * SemanticVersion [__string](#__string)
  * StackName **required** [__string](#__string)

### CreateCloudFormationChangeSetRequest
* CreateCloudFormationChangeSetRequest `object`
  * ParameterOverrides [__listOfParameterValue](#__listofparametervalue)
  * SemanticVersion [__string](#__string)
  * StackName [__string](#__string)

### CreateCloudFormationChangeSetResponse
* CreateCloudFormationChangeSetResponse `object`
  * ApplicationId [__string](#__string)
  * ChangeSetId [__string](#__string)
  * SemanticVersion [__string](#__string)
  * StackId [__string](#__string)

### DeleteApplicationRequest
* DeleteApplicationRequest `object`

### ForbiddenException
* ForbiddenException `object`: The client is not authenticated.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### GetApplicationPolicyRequest
* GetApplicationPolicyRequest `object`

### GetApplicationPolicyResponse
* GetApplicationPolicyResponse `object`
  * Statements [__listOfApplicationPolicyStatement](#__listofapplicationpolicystatement)

### GetApplicationRequest
* GetApplicationRequest `object`

### GetApplicationResponse
* GetApplicationResponse `object`
  * ApplicationId [__string](#__string)
  * Author [__string](#__string)
  * CreationTime [__string](#__string)
  * Description [__string](#__string)
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
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
  * Versions [__listOfVersionSummary](#__listofversionsummary)

### ListApplicationsRequest
* ListApplicationsRequest `object`

### ListApplicationsResponse
* ListApplicationsResponse `object`
  * Applications [__listOfApplicationSummary](#__listofapplicationsummary)
  * NextToken [__string](#__string)

### MaxItems
* MaxItems `integer`

### NotFoundException
* NotFoundException `object`: The resource (for example, an access policy statement) specified in the request does not exist.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### ParameterDefinition
* ParameterDefinition `object`: Parameters supported by the application.
  * AllowedPattern [__string](#__string)
  * AllowedValues [__listOf__string](#__listof__string)
  * ConstraintDescription [__string](#__string)
  * DefaultValue [__string](#__string)
  * Description [__string](#__string)
  * MaxLength [__integer](#__integer)
  * MaxValue [__integer](#__integer)
  * MinLength [__integer](#__integer)
  * MinValue [__integer](#__integer)
  * Name **required** [__string](#__string)
  * NoEcho [__boolean](#__boolean)
  * ReferencedByResources **required** [__listOf__string](#__listof__string)
  * Type [__string](#__string)

### ParameterValue
* ParameterValue `object`: Parameter value of the application.
  * Name **required** [__string](#__string)
  * Value **required** [__string](#__string)

### PutApplicationPolicyRequest
* PutApplicationPolicyRequest `object`
  * Statements [__listOfApplicationPolicyStatement](#__listofapplicationpolicystatement)

### PutApplicationPolicyResponse
* PutApplicationPolicyResponse `object`
  * Statements [__listOfApplicationPolicyStatement](#__listofapplicationpolicystatement)

### TooManyRequestsException
* TooManyRequestsException `object`: The client is sending more than the allowed number of requests per unit time.
  * ErrorCode [__string](#__string)
  * Message [__string](#__string)

### UpdateApplicationInput
* UpdateApplicationInput `object`: Update application request.
  * Author [__string](#__string)
  * Description [__string](#__string)
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
  * ReadmeBody [__string](#__string)
  * ReadmeUrl [__string](#__string)

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * Author [__string](#__string)
  * Description [__string](#__string)
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
  * ReadmeBody [__string](#__string)
  * ReadmeUrl [__string](#__string)

### UpdateApplicationResponse
* UpdateApplicationResponse `object`
  * ApplicationId [__string](#__string)
  * Author [__string](#__string)
  * CreationTime [__string](#__string)
  * Description [__string](#__string)
  * HomePageUrl [__string](#__string)
  * Labels [__listOf__string](#__listof__string)
  * LicenseUrl [__string](#__string)
  * Name [__string](#__string)
  * ReadmeUrl [__string](#__string)
  * SpdxLicenseId [__string](#__string)
  * Version [Version](#version)

### Version
* Version `object`: Application version details.
  * ApplicationId **required** [__string](#__string)
  * CreationTime **required** [__string](#__string)
  * ParameterDefinitions **required** [__listOfParameterDefinition](#__listofparameterdefinition)
  * SemanticVersion **required** [__string](#__string)
  * SourceCodeUrl [__string](#__string)
  * TemplateUrl **required** [__string](#__string)

### VersionSummary
* VersionSummary `object`: Application version summary.
  * ApplicationId **required** [__string](#__string)
  * CreationTime **required** [__string](#__string)
  * SemanticVersion **required** [__string](#__string)
  * SourceCodeUrl [__string](#__string)

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __listOfApplicationPolicyStatement
* __listOfApplicationPolicyStatement `array`
  * items [ApplicationPolicyStatement](#applicationpolicystatement)

### __listOfApplicationSummary
* __listOfApplicationSummary `array`
  * items [ApplicationSummary](#applicationsummary)

### __listOfParameterDefinition
* __listOfParameterDefinition `array`
  * items [ParameterDefinition](#parameterdefinition)

### __listOfParameterValue
* __listOfParameterValue `array`
  * items [ParameterValue](#parametervalue)

### __listOfVersionSummary
* __listOfVersionSummary `array`
  * items [VersionSummary](#versionsummary)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __long
* __long `integer`

### __string
* __string `string`


