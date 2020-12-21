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

.then(data => {
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
  * maxItems `integer`
  * nextToken `string`
  * MaxItems `string`
  * NextToken `string`

#### Output
* output [ListApplicationsResponse](#listapplicationsresponse)

### CreateApplication



```js
amazonaws_serverlessrepo.CreateApplication({
  "author": "",
  "description": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * author **required** `string`: <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
  * description **required** `string`: <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
  * homePageUrl `string`: A URL with more information about the application, for example the location of your GitHub repository for the application.
  * labels `array`: <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
    * items [__string](#__string)
  * licenseBody `string`: <p>A local text file that contains the license of the app that matches the spdxLicenseID value of your application.
  * licenseUrl `string`: <p>A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>
  * name **required** `string`: <p>The name of the application that you want to publish.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>
  * readmeBody `string`: <p>A local text readme file in Markdown language that contains a more detailed description of the application and how it works.
  * readmeUrl `string`: <p>A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>
  * semanticVersion `string`: <p>The semantic version of the application:</p><p>
  * sourceCodeArchiveUrl `string`: <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>
  * sourceCodeUrl `string`: A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.
  * spdxLicenseId `string`: A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>.
  * templateBody `string`: <p>The local raw packaged AWS SAM template file of your application.
  * templateUrl `string`: <p>A link to the S3 object containing the packaged AWS SAM template of your application.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>

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
  * semanticVersion `string`

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
  * author `string`: <p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>
  * description `string`: <p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>
  * homePageUrl `string`: A URL with more information about the application, for example the location of your GitHub repository for the application.
  * labels `array`: <p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>
    * items [__string](#__string)
  * readmeBody `string`: <p>A text readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>
  * readmeUrl `string`: <p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>

#### Output
* output [UpdateApplicationResponse](#updateapplicationresponse)

### CreateCloudFormationChangeSet



```js
amazonaws_serverlessrepo.CreateCloudFormationChangeSet({
  "applicationId": "",
  "stackName": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * tags `array`: This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
    * items [Tag](#tag)
  * capabilities `array`: <p>A list of values that you must specify before you can deploy certain applications.
    * items [__string](#__string)
  * changeSetName `string`: This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
  * clientToken `string`: This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
  * description `string`: This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
  * notificationArns `array`: This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
    * items [__string](#__string)
  * parameterOverrides `array`: A list of parameter values for the parameters of the application.
    * items [ParameterValue](#parametervalue)
  * resourceTypes `array`: This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
    * items [__string](#__string)
  * rollbackConfiguration `object`: This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * semanticVersion `string`: <p>The semantic version of the application:</p><p>
  * stackName **required** `string`: This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>
  * templateId `string`: <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>

#### Output
*Output schema unknown*

### ListApplicationDependencies



```js
amazonaws_serverlessrepo.ListApplicationDependencies({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * maxItems `integer`
  * nextToken `string`
  * semanticVersion `string`
  * MaxItems `string`
  * NextToken `string`

#### Output
* output [ListApplicationDependenciesResponse](#listapplicationdependenciesresponse)

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
  "applicationId": "",
  "statements": []
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * statements **required** `array`: An array of policy statements applied to the application.
    * items [ApplicationPolicyStatement](#applicationpolicystatement)

#### Output
* output [PutApplicationPolicyResponse](#putapplicationpolicyresponse)

### CreateCloudFormationTemplate



```js
amazonaws_serverlessrepo.CreateCloudFormationTemplate({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * semanticVersion `string`: <p>The semantic version of the application:</p><p>

#### Output
*Output schema unknown*

### GetCloudFormationTemplate



```js
amazonaws_serverlessrepo.GetCloudFormationTemplate({
  "applicationId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * templateId **required** `string`

#### Output
* output [GetCloudFormationTemplateResponse](#getcloudformationtemplateresponse)

### UnshareApplication



```js
amazonaws_serverlessrepo.UnshareApplication({
  "applicationId": "",
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * organizationId **required** `string`: The AWS Organization ID to unshare the application from.

#### Output
*Output schema unknown*

### ListApplicationVersions



```js
amazonaws_serverlessrepo.ListApplicationVersions({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`
  * maxItems `integer`
  * nextToken `string`
  * MaxItems `string`
  * NextToken `string`

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
  * sourceCodeArchiveUrl `string`: <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>
  * sourceCodeUrl `string`: A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.
  * templateBody `string`: The raw packaged AWS SAM template of your application.
  * templateUrl `string`: A link to the packaged AWS SAM template of your application.

#### Output
*Output schema unknown*



## Definitions

### ApplicationDependencySummary
* ApplicationDependencySummary `object`: A nested application summary.
  * ApplicationId **required**
  * SemanticVersion **required**

### ApplicationPolicyStatement
* ApplicationPolicyStatement `object`: Policy statement applied to the application.
  * Actions **required**
    * items [__string](#__string)
  * PrincipalOrgIDs
    * items [__string](#__string)
  * Principals **required**
    * items [__string](#__string)
  * StatementId

### ApplicationSummary
* ApplicationSummary `object`: Summary of details about the application.
  * ApplicationId **required**
  * Author **required**
  * CreationTime
  * Description **required**
  * HomePageUrl
  * Labels
    * items [__string](#__string)
  * Name **required**
  * SpdxLicenseId

### BadRequestException


### Capability
* Capability `string` (values: CAPABILITY_IAM, CAPABILITY_NAMED_IAM, CAPABILITY_AUTO_EXPAND, CAPABILITY_RESOURCE_POLICY): Values that must be specified in order to deploy some applications.

### ConflictException


### CreateApplicationRequest
* CreateApplicationRequest `object`
  * Author **required**
  * Description **required**
  * HomePageUrl
  * Labels
    * items [__string](#__string)
  * LicenseBody
  * LicenseUrl
  * Name **required**
  * ReadmeBody
  * ReadmeUrl
  * SemanticVersion
  * SourceCodeArchiveUrl
  * SourceCodeUrl
  * SpdxLicenseId
  * TemplateBody
  * TemplateUrl

### CreateApplicationResponse
* CreateApplicationResponse `object`
  * ApplicationId
  * Author
  * CreationTime
  * Description
  * HomePageUrl
  * IsVerifiedAuthor
  * Labels
    * items [__string](#__string)
  * LicenseUrl
  * Name
  * ReadmeUrl
  * SpdxLicenseId
  * VerifiedAuthorUrl
  * Version
    * ApplicationId **required**
    * CreationTime **required**
    * ParameterDefinitions **required**
      * items [ParameterDefinition](#parameterdefinition)
    * RequiredCapabilities **required**
      * items [Capability](#capability)
    * ResourcesSupported **required**
    * SemanticVersion **required**
    * SourceCodeArchiveUrl
    * SourceCodeUrl
    * TemplateUrl **required**

### CreateApplicationVersionRequest
* CreateApplicationVersionRequest `object`
  * SourceCodeArchiveUrl
  * SourceCodeUrl
  * TemplateBody
  * TemplateUrl

### CreateApplicationVersionResponse
* CreateApplicationVersionResponse `object`
  * ApplicationId
  * CreationTime
  * ParameterDefinitions
    * items [ParameterDefinition](#parameterdefinition)
  * RequiredCapabilities
    * items [Capability](#capability)
  * ResourcesSupported
  * SemanticVersion
  * SourceCodeArchiveUrl
  * SourceCodeUrl
  * TemplateUrl

### CreateCloudFormationChangeSetRequest
* CreateCloudFormationChangeSetRequest `object`
  * Capabilities
    * items [__string](#__string)
  * ChangeSetName
  * ClientToken
  * Description
  * NotificationArns
    * items [__string](#__string)
  * ParameterOverrides
    * items [ParameterValue](#parametervalue)
  * ResourceTypes
    * items [__string](#__string)
  * RollbackConfiguration
    * MonitoringTimeInMinutes
    * RollbackTriggers
      * items [RollbackTrigger](#rollbacktrigger)
  * SemanticVersion
  * StackName **required**
  * Tags
    * items [Tag](#tag)
  * TemplateId

### CreateCloudFormationChangeSetResponse
* CreateCloudFormationChangeSetResponse `object`
  * ApplicationId
  * ChangeSetId
  * SemanticVersion
  * StackId

### CreateCloudFormationTemplateRequest
* CreateCloudFormationTemplateRequest `object`
  * SemanticVersion

### CreateCloudFormationTemplateResponse
* CreateCloudFormationTemplateResponse `object`
  * ApplicationId
  * CreationTime
  * ExpirationTime
  * SemanticVersion
  * Status
  * TemplateId
  * TemplateUrl

### DeleteApplicationRequest
* DeleteApplicationRequest `object`

### ForbiddenException


### GetApplicationPolicyRequest
* GetApplicationPolicyRequest `object`

### GetApplicationPolicyResponse
* GetApplicationPolicyResponse `object`
  * Statements
    * items [ApplicationPolicyStatement](#applicationpolicystatement)

### GetApplicationRequest
* GetApplicationRequest `object`

### GetApplicationResponse
* GetApplicationResponse `object`
  * ApplicationId
  * Author
  * CreationTime
  * Description
  * HomePageUrl
  * IsVerifiedAuthor
  * Labels
    * items [__string](#__string)
  * LicenseUrl
  * Name
  * ReadmeUrl
  * SpdxLicenseId
  * VerifiedAuthorUrl
  * Version
    * ApplicationId **required**
    * CreationTime **required**
    * ParameterDefinitions **required**
      * items [ParameterDefinition](#parameterdefinition)
    * RequiredCapabilities **required**
      * items [Capability](#capability)
    * ResourcesSupported **required**
    * SemanticVersion **required**
    * SourceCodeArchiveUrl
    * SourceCodeUrl
    * TemplateUrl **required**

### GetCloudFormationTemplateRequest
* GetCloudFormationTemplateRequest `object`

### GetCloudFormationTemplateResponse
* GetCloudFormationTemplateResponse `object`
  * ApplicationId
  * CreationTime
  * ExpirationTime
  * SemanticVersion
  * Status
  * TemplateId
  * TemplateUrl

### InternalServerErrorException


### ListApplicationDependenciesRequest
* ListApplicationDependenciesRequest `object`

### ListApplicationDependenciesResponse
* ListApplicationDependenciesResponse `object`
  * Dependencies
    * items [ApplicationDependencySummary](#applicationdependencysummary)
  * NextToken

### ListApplicationVersionsRequest
* ListApplicationVersionsRequest `object`

### ListApplicationVersionsResponse
* ListApplicationVersionsResponse `object`
  * NextToken
  * Versions
    * items [VersionSummary](#versionsummary)

### ListApplicationsRequest
* ListApplicationsRequest `object`

### ListApplicationsResponse
* ListApplicationsResponse `object`
  * Applications
    * items [ApplicationSummary](#applicationsummary)
  * NextToken

### MaxItems
* MaxItems `integer`

### NotFoundException


### ParameterDefinition
* ParameterDefinition `object`: Parameters supported by the application.
  * AllowedPattern
  * AllowedValues
    * items [__string](#__string)
  * ConstraintDescription
  * DefaultValue
  * Description
  * MaxLength
  * MaxValue
  * MinLength
  * MinValue
  * Name **required**
  * NoEcho
  * ReferencedByResources **required**
    * items [__string](#__string)
  * Type

### ParameterValue
* ParameterValue `object`: Parameter value of the application.
  * Name **required**
  * Value **required**

### PutApplicationPolicyRequest
* PutApplicationPolicyRequest `object`
  * Statements **required**
    * items [ApplicationPolicyStatement](#applicationpolicystatement)

### PutApplicationPolicyResponse
* PutApplicationPolicyResponse `object`
  * Statements
    * items [ApplicationPolicyStatement](#applicationpolicystatement)

### RollbackConfiguration
* RollbackConfiguration `object`: This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
  * MonitoringTimeInMinutes
  * RollbackTriggers
    * items [RollbackTrigger](#rollbacktrigger)

### RollbackTrigger
* RollbackTrigger `object`: This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>
  * Arn **required**
  * Type **required**

### Status
* Status `string` (values: PREPARING, ACTIVE, EXPIRED)

### Tag
* Tag `object`: This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>
  * Key **required**
  * Value **required**

### TooManyRequestsException


### UnshareApplicationRequest
* UnshareApplicationRequest `object`
  * OrganizationId **required**

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * Author
  * Description
  * HomePageUrl
  * Labels
    * items [__string](#__string)
  * ReadmeBody
  * ReadmeUrl

### UpdateApplicationResponse
* UpdateApplicationResponse `object`
  * ApplicationId
  * Author
  * CreationTime
  * Description
  * HomePageUrl
  * IsVerifiedAuthor
  * Labels
    * items [__string](#__string)
  * LicenseUrl
  * Name
  * ReadmeUrl
  * SpdxLicenseId
  * VerifiedAuthorUrl
  * Version
    * ApplicationId **required**
    * CreationTime **required**
    * ParameterDefinitions **required**
      * items [ParameterDefinition](#parameterdefinition)
    * RequiredCapabilities **required**
      * items [Capability](#capability)
    * ResourcesSupported **required**
    * SemanticVersion **required**
    * SourceCodeArchiveUrl
    * SourceCodeUrl
    * TemplateUrl **required**

### Version
* Version `object`: Application version details.
  * ApplicationId **required**
  * CreationTime **required**
  * ParameterDefinitions **required**
    * items [ParameterDefinition](#parameterdefinition)
  * RequiredCapabilities **required**
    * items [Capability](#capability)
  * ResourcesSupported **required**
  * SemanticVersion **required**
  * SourceCodeArchiveUrl
  * SourceCodeUrl
  * TemplateUrl **required**

### VersionSummary
* VersionSummary `object`: An application version summary.
  * ApplicationId **required**
  * CreationTime **required**
  * SemanticVersion **required**
  * SourceCodeUrl

### __boolean
* __boolean `boolean`

### __integer
* __integer `integer`

### __listOfApplicationDependencySummary
* __listOfApplicationDependencySummary `array`
  * items [ApplicationDependencySummary](#applicationdependencysummary)

### __listOfApplicationPolicyStatement
* __listOfApplicationPolicyStatement `array`
  * items [ApplicationPolicyStatement](#applicationpolicystatement)

### __listOfApplicationSummary
* __listOfApplicationSummary `array`
  * items [ApplicationSummary](#applicationsummary)

### __listOfCapability
* __listOfCapability `array`
  * items [Capability](#capability)

### __listOfParameterDefinition
* __listOfParameterDefinition `array`
  * items [ParameterDefinition](#parameterdefinition)

### __listOfParameterValue
* __listOfParameterValue `array`
  * items [ParameterValue](#parametervalue)

### __listOfRollbackTrigger
* __listOfRollbackTrigger `array`
  * items [RollbackTrigger](#rollbacktrigger)

### __listOfTag
* __listOfTag `array`
  * items [Tag](#tag)

### __listOfVersionSummary
* __listOfVersionSummary `array`
  * items [VersionSummary](#versionsummary)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __string
* __string `string`


