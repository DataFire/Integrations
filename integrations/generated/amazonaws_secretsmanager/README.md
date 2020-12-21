# @datafire/amazonaws_secretsmanager

Client library for AWS Secrets Manager

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_secretsmanager
```
```js
let amazonaws_secretsmanager = require('@datafire/amazonaws_secretsmanager').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Secrets Manager API Reference</fullname> <p>AWS Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p> <p>This guide provides descriptions of the Secrets Manager API. For more information about using this service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">AWS Secrets Manager User Guide</a>.</p> <p> <b>API Version</b> </p> <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p> <note> <p>As an alternative to using the API, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms such as Java, Ruby, .NET, iOS, and Android. The SDKs provide a convenient way to create programmatic access to AWS Secrets Manager. For example, the SDKs provide cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the AWS SDKs, including downloading and installing them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note> <p>We recommend you use the AWS SDKs to make programmatic API calls to Secrets Manager. However, you also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To learn more about the Secrets Manager HTTP Query API, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/query-requests.html">Making Query Requests</a> in the <i>AWS Secrets Manager User Guide</i>. </p> <p>Secrets Manager API supports GET and POST requests for all actions, and doesn't require you to use GET for some actions and POST for others. However, GET requests are subject to the limitation size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p> <p> <b>Support and Feedback for AWS Secrets Manager</b> </p> <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">AWS Secrets Manager Discussion Forum</a>. For more information about the AWS Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p> <p> <b>How examples are presented</b> </p> <p>The JSON that AWS Secrets Manager expects as your request parameters and the service returns as a response to HTTP query requests contain single, long strings without line breaks or white space formatting. The JSON shown in the examples displays the code formatted with both line breaks and white space to improve readability. When example input parameters can also cause long strings extending beyond the screen, you can insert line breaks to enhance readability. You should always submit the input as a single JSON text string.</p> <p> <b>Logging API Requests</b> </p> <p>AWS Secrets Manager supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information that's collected by AWS CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the request, when it was made, and so on. For more about AWS Secrets Manager and support for AWS CloudTrail, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging AWS Secrets Manager Events with AWS CloudTrail</a> in the <i>AWS Secrets Manager User Guide</i>. To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>

## Actions

### CancelRotateSecret



```js
amazonaws_secretsmanager.CancelRotateSecret({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * SecretId **required**

#### Output
* output [CancelRotateSecretResponse](#cancelrotatesecretresponse)

### CreateSecret



```js
amazonaws_secretsmanager.CreateSecret({
  "Name": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * Description
  * KmsKeyId
  * Name **required**
  * SecretBinary
  * SecretString
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateSecretResponse](#createsecretresponse)

### DeleteResourcePolicy



```js
amazonaws_secretsmanager.DeleteResourcePolicy({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * SecretId **required**

#### Output
* output [DeleteResourcePolicyResponse](#deleteresourcepolicyresponse)

### DeleteSecret



```js
amazonaws_secretsmanager.DeleteSecret({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * ForceDeleteWithoutRecovery
  * RecoveryWindowInDays
  * SecretId **required**

#### Output
* output [DeleteSecretResponse](#deletesecretresponse)

### DescribeSecret



```js
amazonaws_secretsmanager.DescribeSecret({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * SecretId **required**

#### Output
* output [DescribeSecretResponse](#describesecretresponse)

### GetRandomPassword



```js
amazonaws_secretsmanager.GetRandomPassword({}, context)
```

#### Input
* input `object`
  * ExcludeCharacters
  * ExcludeLowercase
  * ExcludeNumbers
  * ExcludePunctuation
  * ExcludeUppercase
  * IncludeSpace
  * PasswordLength
  * RequireEachIncludedType

#### Output
* output [GetRandomPasswordResponse](#getrandompasswordresponse)

### GetResourcePolicy



```js
amazonaws_secretsmanager.GetResourcePolicy({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * SecretId **required**

#### Output
* output [GetResourcePolicyResponse](#getresourcepolicyresponse)

### GetSecretValue



```js
amazonaws_secretsmanager.GetSecretValue({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * SecretId **required**
  * VersionId
  * VersionStage

#### Output
* output [GetSecretValueResponse](#getsecretvalueresponse)

### ListSecretVersionIds



```js
amazonaws_secretsmanager.ListSecretVersionIds({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * IncludeDeprecated
  * MaxResults
  * NextToken
  * SecretId **required**

#### Output
* output [ListSecretVersionIdsResponse](#listsecretversionidsresponse)

### ListSecrets



```js
amazonaws_secretsmanager.ListSecrets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortOrder

#### Output
* output [ListSecretsResponse](#listsecretsresponse)

### PutResourcePolicy



```js
amazonaws_secretsmanager.PutResourcePolicy({
  "SecretId": null,
  "ResourcePolicy": null
}, context)
```

#### Input
* input `object`
  * BlockPublicPolicy
  * ResourcePolicy **required**
  * SecretId **required**

#### Output
* output [PutResourcePolicyResponse](#putresourcepolicyresponse)

### PutSecretValue



```js
amazonaws_secretsmanager.PutSecretValue({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * SecretBinary
  * SecretId **required**
  * SecretString
  * VersionStages
    * items [SecretVersionStageType](#secretversionstagetype)

#### Output
* output [PutSecretValueResponse](#putsecretvalueresponse)

### RestoreSecret



```js
amazonaws_secretsmanager.RestoreSecret({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * SecretId **required**

#### Output
* output [RestoreSecretResponse](#restoresecretresponse)

### RotateSecret



```js
amazonaws_secretsmanager.RotateSecret({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * RotationLambdaARN
  * RotationRules
    * AutomaticallyAfterDays
  * SecretId **required**

#### Output
* output [RotateSecretResponse](#rotatesecretresponse)

### TagResource



```js
amazonaws_secretsmanager.TagResource({
  "SecretId": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * SecretId **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_secretsmanager.UntagResource({
  "SecretId": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * SecretId **required**
  * TagKeys **required**
    * items [TagKeyType](#tagkeytype)

#### Output
*Output schema unknown*

### UpdateSecret



```js
amazonaws_secretsmanager.UpdateSecret({
  "SecretId": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * Description
  * KmsKeyId
  * SecretBinary
  * SecretId **required**
  * SecretString

#### Output
* output [UpdateSecretResponse](#updatesecretresponse)

### UpdateSecretVersionStage



```js
amazonaws_secretsmanager.UpdateSecretVersionStage({
  "SecretId": null,
  "VersionStage": null
}, context)
```

#### Input
* input `object`
  * MoveToVersionId
  * RemoveFromVersionId
  * SecretId **required**
  * VersionStage **required**

#### Output
* output [UpdateSecretVersionStageResponse](#updatesecretversionstageresponse)

### ValidateResourcePolicy



```js
amazonaws_secretsmanager.ValidateResourcePolicy({
  "ResourcePolicy": null
}, context)
```

#### Input
* input `object`
  * ResourcePolicy **required**
  * SecretId

#### Output
* output [ValidateResourcePolicyResponse](#validateresourcepolicyresponse)



## Definitions

### AutomaticallyRotateAfterDaysType
* AutomaticallyRotateAfterDaysType `integer`

### BooleanType
* BooleanType `boolean`

### CancelRotateSecretRequest
* CancelRotateSecretRequest `object`
  * SecretId **required**

### CancelRotateSecretResponse
* CancelRotateSecretResponse `object`
  * ARN
  * Name
  * VersionId

### ClientRequestTokenType
* ClientRequestTokenType `string`

### CreateSecretRequest
* CreateSecretRequest `object`
  * ClientRequestToken
  * Description
  * KmsKeyId
  * Name **required**
  * SecretBinary
  * SecretString
  * Tags
    * items [Tag](#tag)

### CreateSecretResponse
* CreateSecretResponse `object`
  * ARN
  * Name
  * VersionId

### CreatedDateType
* CreatedDateType `string`

### DecryptionFailure


### DeleteResourcePolicyRequest
* DeleteResourcePolicyRequest `object`
  * SecretId **required**

### DeleteResourcePolicyResponse
* DeleteResourcePolicyResponse `object`
  * ARN
  * Name

### DeleteSecretRequest
* DeleteSecretRequest `object`
  * ForceDeleteWithoutRecovery
  * RecoveryWindowInDays
  * SecretId **required**

### DeleteSecretResponse
* DeleteSecretResponse `object`
  * ARN
  * DeletionDate
  * Name

### DeletedDateType
* DeletedDateType `string`

### DeletionDateType
* DeletionDateType `string`

### DescribeSecretRequest
* DescribeSecretRequest `object`
  * SecretId **required**

### DescribeSecretResponse
* DescribeSecretResponse `object`
  * ARN
  * CreatedDate
  * DeletedDate
  * Description
  * KmsKeyId
  * LastAccessedDate
  * LastChangedDate
  * LastRotatedDate
  * Name
  * OwningService
  * RotationEnabled
  * RotationLambdaARN
  * RotationRules
    * AutomaticallyAfterDays
  * Tags
    * items [Tag](#tag)
  * VersionIdsToStages

### DescriptionType
* DescriptionType `string`

### EncryptionFailure


### ErrorMessage
* ErrorMessage `string`

### ExcludeCharactersType
* ExcludeCharactersType `string`

### ExcludeLowercaseType
* ExcludeLowercaseType `boolean`

### ExcludeNumbersType
* ExcludeNumbersType `boolean`

### ExcludePunctuationType
* ExcludePunctuationType `boolean`

### ExcludeUppercaseType
* ExcludeUppercaseType `boolean`

### Filter
* Filter `object`: Allows you to filter your list of secrets.
  * Key
  * Values
    * items [FilterValueStringType](#filtervaluestringtype)

### FilterNameStringType
* FilterNameStringType `string` (values: description, name, tag-key, tag-value, all)

### FilterValueStringType
* FilterValueStringType `string`

### FilterValuesStringList
* FilterValuesStringList `array`
  * items [FilterValueStringType](#filtervaluestringtype)

### FiltersListType
* FiltersListType `array`
  * items [Filter](#filter)

### GetRandomPasswordRequest
* GetRandomPasswordRequest `object`
  * ExcludeCharacters
  * ExcludeLowercase
  * ExcludeNumbers
  * ExcludePunctuation
  * ExcludeUppercase
  * IncludeSpace
  * PasswordLength
  * RequireEachIncludedType

### GetRandomPasswordResponse
* GetRandomPasswordResponse `object`
  * RandomPassword

### GetResourcePolicyRequest
* GetResourcePolicyRequest `object`
  * SecretId **required**

### GetResourcePolicyResponse
* GetResourcePolicyResponse `object`
  * ARN
  * Name
  * ResourcePolicy

### GetSecretValueRequest
* GetSecretValueRequest `object`
  * SecretId **required**
  * VersionId
  * VersionStage

### GetSecretValueResponse
* GetSecretValueResponse `object`
  * ARN
  * CreatedDate
  * Name
  * SecretBinary
  * SecretString
  * VersionId
  * VersionStages
    * items [SecretVersionStageType](#secretversionstagetype)

### IncludeSpaceType
* IncludeSpaceType `boolean`

### InternalServiceError


### InvalidNextTokenException


### InvalidParameterException


### InvalidRequestException


### KmsKeyIdType
* KmsKeyIdType `string`

### LastAccessedDateType
* LastAccessedDateType `string`

### LastChangedDateType
* LastChangedDateType `string`

### LastRotatedDateType
* LastRotatedDateType `string`

### LimitExceededException


### ListSecretVersionIdsRequest
* ListSecretVersionIdsRequest `object`
  * IncludeDeprecated
  * MaxResults
  * NextToken
  * SecretId **required**

### ListSecretVersionIdsResponse
* ListSecretVersionIdsResponse `object`
  * ARN
  * Name
  * NextToken
  * Versions
    * items [SecretVersionsListEntry](#secretversionslistentry)

### ListSecretsRequest
* ListSecretsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortOrder

### ListSecretsResponse
* ListSecretsResponse `object`
  * NextToken
  * SecretList
    * items [SecretListEntry](#secretlistentry)

### MalformedPolicyDocumentException


### MaxResultsType
* MaxResultsType `integer`

### NameType
* NameType `string`

### NextTokenType
* NextTokenType `string`

### NonEmptyResourcePolicyType
* NonEmptyResourcePolicyType `string`

### OwningServiceType
* OwningServiceType `string`

### PasswordLengthType
* PasswordLengthType `integer`

### PreconditionNotMetException


### PublicPolicyException


### PutResourcePolicyRequest
* PutResourcePolicyRequest `object`
  * BlockPublicPolicy
  * ResourcePolicy **required**
  * SecretId **required**

### PutResourcePolicyResponse
* PutResourcePolicyResponse `object`
  * ARN
  * Name

### PutSecretValueRequest
* PutSecretValueRequest `object`
  * ClientRequestToken
  * SecretBinary
  * SecretId **required**
  * SecretString
  * VersionStages
    * items [SecretVersionStageType](#secretversionstagetype)

### PutSecretValueResponse
* PutSecretValueResponse `object`
  * ARN
  * Name
  * VersionId
  * VersionStages
    * items [SecretVersionStageType](#secretversionstagetype)

### RandomPasswordType
* RandomPasswordType `string`

### RecoveryWindowInDaysType
* RecoveryWindowInDaysType `integer`

### RequireEachIncludedTypeType
* RequireEachIncludedTypeType `boolean`

### ResourceExistsException


### ResourceNotFoundException


### RestoreSecretRequest
* RestoreSecretRequest `object`
  * SecretId **required**

### RestoreSecretResponse
* RestoreSecretResponse `object`
  * ARN
  * Name

### RotateSecretRequest
* RotateSecretRequest `object`
  * ClientRequestToken
  * RotationLambdaARN
  * RotationRules
    * AutomaticallyAfterDays
  * SecretId **required**

### RotateSecretResponse
* RotateSecretResponse `object`
  * ARN
  * Name
  * VersionId

### RotationEnabledType
* RotationEnabledType `boolean`

### RotationLambdaARNType
* RotationLambdaARNType `string`

### RotationRulesType
* RotationRulesType `object`: A structure that defines the rotation configuration for the secret.
  * AutomaticallyAfterDays

### SecretARNType
* SecretARNType `string`

### SecretBinaryType
* SecretBinaryType `string`

### SecretIdType
* SecretIdType `string`

### SecretListEntry
* SecretListEntry `object`: A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the <a>GetSecretValue</a> operation.
  * ARN
  * CreatedDate
  * DeletedDate
  * Description
  * KmsKeyId
  * LastAccessedDate
  * LastChangedDate
  * LastRotatedDate
  * Name
  * OwningService
  * RotationEnabled
  * RotationLambdaARN
  * RotationRules
    * AutomaticallyAfterDays
  * SecretVersionsToStages
  * Tags
    * items [Tag](#tag)

### SecretListType
* SecretListType `array`
  * items [SecretListEntry](#secretlistentry)

### SecretNameType
* SecretNameType `string`

### SecretStringType
* SecretStringType `string`

### SecretVersionIdType
* SecretVersionIdType `string`

### SecretVersionStageType
* SecretVersionStageType `string`

### SecretVersionStagesType
* SecretVersionStagesType `array`
  * items [SecretVersionStageType](#secretversionstagetype)

### SecretVersionsListEntry
* SecretVersionsListEntry `object`: A structure that contains information about one version of a secret.
  * CreatedDate
  * LastAccessedDate
  * VersionId
  * VersionStages
    * items [SecretVersionStageType](#secretversionstagetype)

### SecretVersionsListType
* SecretVersionsListType `array`
  * items [SecretVersionsListEntry](#secretversionslistentry)

### SecretVersionsToStagesMapType
* SecretVersionsToStagesMapType `object`

### SortOrderType
* SortOrderType `string` (values: asc, desc)

### Tag
* Tag `object`: A structure that contains information about a tag.
  * Key
  * Value

### TagKeyListType
* TagKeyListType `array`
  * items [TagKeyType](#tagkeytype)

### TagKeyType
* TagKeyType `string`

### TagListType
* TagListType `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * SecretId **required**
  * Tags **required**
    * items [Tag](#tag)

### TagValueType
* TagValueType `string`

### TimestampType
* TimestampType `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * SecretId **required**
  * TagKeys **required**
    * items [TagKeyType](#tagkeytype)

### UpdateSecretRequest
* UpdateSecretRequest `object`
  * ClientRequestToken
  * Description
  * KmsKeyId
  * SecretBinary
  * SecretId **required**
  * SecretString

### UpdateSecretResponse
* UpdateSecretResponse `object`
  * ARN
  * Name
  * VersionId

### UpdateSecretVersionStageRequest
* UpdateSecretVersionStageRequest `object`
  * MoveToVersionId
  * RemoveFromVersionId
  * SecretId **required**
  * VersionStage **required**

### UpdateSecretVersionStageResponse
* UpdateSecretVersionStageResponse `object`
  * ARN
  * Name

### ValidateResourcePolicyRequest
* ValidateResourcePolicyRequest `object`
  * ResourcePolicy **required**
  * SecretId

### ValidateResourcePolicyResponse
* ValidateResourcePolicyResponse `object`
  * PolicyValidationPassed
  * ValidationErrors
    * items [ValidationErrorsEntry](#validationerrorsentry)

### ValidationErrorsEntry
* ValidationErrorsEntry `object`: Displays errors that occurred during validation of the resource policy.
  * CheckName
  * ErrorMessage

### ValidationErrorsType
* ValidationErrorsType `array`
  * items [ValidationErrorsEntry](#validationerrorsentry)


