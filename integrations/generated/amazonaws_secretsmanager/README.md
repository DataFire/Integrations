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

amazonaws_secretsmanager.CancelRotateSecret({
  "SecretId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Secrets Manager API Reference</fullname> <p>AWS Secrets Manager is a web service that enables you to store, manage, and retrieve, secrets.</p> <p>This guide provides descriptions of the Secrets Manager API. For more information about using this service, see the <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">AWS Secrets Manager User Guide</a>.</p> <p> <b>API Version</b> </p> <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p> <note> <p>As an alternative to using the API directly, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (such as Java, Ruby, .NET, iOS, and Android). The SDKs provide a convenient way to create programmatic access to AWS Secrets Manager. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note> <p>We recommend that you use the AWS SDKs to make programmatic API calls to Secrets Manager. However, you also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To learn more about the Secrets Manager HTTP Query API, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/query-requests.html">Making Query Requests</a> in the <i>AWS Secrets Manager User Guide</i>. </p> <p>Secrets Manager supports GET and POST requests for all actions. That is, the API doesn't require you to use GET for some actions and POST for others. However, GET requests are subject to the limitation size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p> <p> <b>Support and Feedback for AWS Secrets Manager</b> </p> <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">AWS Secrets Manager Discussion Forum</a>. For more information about the AWS Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p> <p> <b>How examples are presented</b> </p> <p>The JSON that AWS Secrets Manager expects as your request parameters and that the service returns as a response to HTTP query requests are single, long strings without line breaks or white space formatting. The JSON shown in the examples is formatted with both line breaks and white space to improve readability. When example input parameters would also result in long strings that extend beyond the screen, we insert line breaks to enhance readability. You should always submit the input as a single JSON text string.</p> <p> <b>Logging API Requests</b> </p> <p>AWS Secrets Manager supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information that's collected by AWS CloudTrail, you can determine which requests were successfully made to Secrets Manager, who made the request, when it was made, and so on. For more about AWS Secrets Manager and its support for AWS CloudTrail, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging AWS Secrets Manager Events with AWS CloudTrail</a> in the <i>AWS Secrets Manager User Guide</i>. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>

## Actions

### CancelRotateSecret



```js
amazonaws_secretsmanager.CancelRotateSecret({
  "SecretId": ""
}, context)
```

#### Input
* input `object`
  * SecretId **required** [SecretIdType](#secretidtype)

#### Output
* output [CancelRotateSecretResponse](#cancelrotatesecretresponse)

### CreateSecret



```js
amazonaws_secretsmanager.CreateSecret({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestTokenType](#clientrequesttokentype)
  * Description [DescriptionType](#descriptiontype)
  * KmsKeyId [KmsKeyIdType](#kmskeyidtype)
  * Name **required** [NameType](#nametype)
  * SecretBinary [SecretBinaryType](#secretbinarytype)
  * SecretString [SecretStringType](#secretstringtype)
  * Tags [TagListType](#taglisttype)

#### Output
* output [CreateSecretResponse](#createsecretresponse)

### DeleteSecret



```js
amazonaws_secretsmanager.DeleteSecret({
  "SecretId": ""
}, context)
```

#### Input
* input `object`
  * RecoveryWindowInDays [RecoveryWindowInDaysType](#recoverywindowindaystype)
  * SecretId **required** [SecretIdType](#secretidtype)

#### Output
* output [DeleteSecretResponse](#deletesecretresponse)

### DescribeSecret



```js
amazonaws_secretsmanager.DescribeSecret({
  "SecretId": ""
}, context)
```

#### Input
* input `object`
  * SecretId **required** [SecretIdType](#secretidtype)

#### Output
* output [DescribeSecretResponse](#describesecretresponse)

### GetRandomPassword



```js
amazonaws_secretsmanager.GetRandomPassword({}, context)
```

#### Input
* input `object`
  * ExcludeCharacters [ExcludeCharactersType](#excludecharacterstype)
  * ExcludeLowercase [ExcludeLowercaseType](#excludelowercasetype)
  * ExcludeNumbers [ExcludeNumbersType](#excludenumberstype)
  * ExcludePunctuation [ExcludePunctuationType](#excludepunctuationtype)
  * ExcludeUppercase [ExcludeUppercaseType](#excludeuppercasetype)
  * IncludeSpace [IncludeSpaceType](#includespacetype)
  * PasswordLength [PasswordLengthType](#passwordlengthtype)
  * RequireEachIncludedType [RequireEachIncludedTypeType](#requireeachincludedtypetype)

#### Output
* output [GetRandomPasswordResponse](#getrandompasswordresponse)

### GetSecretValue



```js
amazonaws_secretsmanager.GetSecretValue({
  "SecretId": ""
}, context)
```

#### Input
* input `object`
  * SecretId **required** [SecretIdType](#secretidtype)
  * VersionId [SecretVersionIdType](#secretversionidtype)
  * VersionStage [SecretVersionStageType](#secretversionstagetype)

#### Output
* output [GetSecretValueResponse](#getsecretvalueresponse)

### ListSecretVersionIds



```js
amazonaws_secretsmanager.ListSecretVersionIds({
  "SecretId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * IncludeDeprecated [BooleanType](#booleantype)
  * MaxResults [MaxResultsType](#maxresultstype)
  * NextToken [NextTokenType](#nexttokentype)
  * SecretId **required** [SecretIdType](#secretidtype)

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
  * MaxResults [MaxResultsType](#maxresultstype)
  * NextToken [NextTokenType](#nexttokentype)

#### Output
* output [ListSecretsResponse](#listsecretsresponse)

### PutSecretValue



```js
amazonaws_secretsmanager.PutSecretValue({
  "SecretId": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestTokenType](#clientrequesttokentype)
  * SecretBinary [SecretBinaryType](#secretbinarytype)
  * SecretId **required** [SecretIdType](#secretidtype)
  * SecretString [SecretStringType](#secretstringtype)
  * VersionStages [SecretVersionStagesType](#secretversionstagestype)

#### Output
* output [PutSecretValueResponse](#putsecretvalueresponse)

### RestoreSecret



```js
amazonaws_secretsmanager.RestoreSecret({
  "SecretId": ""
}, context)
```

#### Input
* input `object`
  * SecretId **required** [SecretIdType](#secretidtype)

#### Output
* output [RestoreSecretResponse](#restoresecretresponse)

### RotateSecret



```js
amazonaws_secretsmanager.RotateSecret({
  "SecretId": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestTokenType](#clientrequesttokentype)
  * RotationLambdaARN [RotationLambdaARNType](#rotationlambdaarntype)
  * RotationRules [RotationRulesType](#rotationrulestype)
  * SecretId **required** [SecretIdType](#secretidtype)

#### Output
* output [RotateSecretResponse](#rotatesecretresponse)

### TagResource



```js
amazonaws_secretsmanager.TagResource({
  "SecretId": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * SecretId **required** [SecretIdType](#secretidtype)
  * Tags **required** [TagListType](#taglisttype)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_secretsmanager.UntagResource({
  "SecretId": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * SecretId **required** [SecretIdType](#secretidtype)
  * TagKeys **required** [TagKeyListType](#tagkeylisttype)

#### Output
*Output schema unknown*

### UpdateSecret



```js
amazonaws_secretsmanager.UpdateSecret({
  "SecretId": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestTokenType](#clientrequesttokentype)
  * Description [DescriptionType](#descriptiontype)
  * KmsKeyId [KmsKeyIdType](#kmskeyidtype)
  * SecretBinary [SecretBinaryType](#secretbinarytype)
  * SecretId **required** [SecretIdType](#secretidtype)
  * SecretString [SecretStringType](#secretstringtype)

#### Output
* output [UpdateSecretResponse](#updatesecretresponse)

### UpdateSecretVersionStage



```js
amazonaws_secretsmanager.UpdateSecretVersionStage({
  "SecretId": "",
  "VersionStage": ""
}, context)
```

#### Input
* input `object`
  * MoveToVersionId [SecretVersionIdType](#secretversionidtype)
  * RemoveFromVersionId [SecretVersionIdType](#secretversionidtype)
  * SecretId **required** [SecretIdType](#secretidtype)
  * VersionStage **required** [SecretVersionStageType](#secretversionstagetype)

#### Output
* output [UpdateSecretVersionStageResponse](#updatesecretversionstageresponse)



## Definitions

### AutomaticallyRotateAfterDaysType
* AutomaticallyRotateAfterDaysType `integer`

### BooleanType
* BooleanType `boolean`

### CancelRotateSecretRequest
* CancelRotateSecretRequest `object`
  * SecretId **required** [SecretIdType](#secretidtype)

### CancelRotateSecretResponse
* CancelRotateSecretResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * Name [SecretNameType](#secretnametype)
  * VersionId [SecretVersionIdType](#secretversionidtype)

### ClientRequestTokenType
* ClientRequestTokenType `string`

### CreateSecretRequest
* CreateSecretRequest `object`
  * ClientRequestToken [ClientRequestTokenType](#clientrequesttokentype)
  * Description [DescriptionType](#descriptiontype)
  * KmsKeyId [KmsKeyIdType](#kmskeyidtype)
  * Name **required** [NameType](#nametype)
  * SecretBinary [SecretBinaryType](#secretbinarytype)
  * SecretString [SecretStringType](#secretstringtype)
  * Tags [TagListType](#taglisttype)

### CreateSecretResponse
* CreateSecretResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * Name [SecretNameType](#secretnametype)
  * VersionId [SecretVersionIdType](#secretversionidtype)

### CreatedDateType
* CreatedDateType `string`

### DecryptionFailure
* DecryptionFailure `object`: Secrets Manager can't decrypt the protected secret text using the provided KMS key. 
  * Message [ErrorMessage](#errormessage)

### DeleteSecretRequest
* DeleteSecretRequest `object`
  * RecoveryWindowInDays [RecoveryWindowInDaysType](#recoverywindowindaystype)
  * SecretId **required** [SecretIdType](#secretidtype)

### DeleteSecretResponse
* DeleteSecretResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * DeletionDate [DeletionDateType](#deletiondatetype)
  * Name [SecretNameType](#secretnametype)

### DeletedDateType
* DeletedDateType `string`

### DeletionDateType
* DeletionDateType `string`

### DescribeSecretRequest
* DescribeSecretRequest `object`
  * SecretId **required** [SecretIdType](#secretidtype)

### DescribeSecretResponse
* DescribeSecretResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * DeletedDate [DeletedDateType](#deleteddatetype)
  * Description [DescriptionType](#descriptiontype)
  * KmsKeyId [KmsKeyIdType](#kmskeyidtype)
  * LastAccessedDate [LastAccessedDateType](#lastaccesseddatetype)
  * LastChangedDate [LastChangedDateType](#lastchangeddatetype)
  * LastRotatedDate [LastRotatedDateType](#lastrotateddatetype)
  * Name [SecretNameType](#secretnametype)
  * RotationEnabled [RotationEnabledType](#rotationenabledtype)
  * RotationLambdaARN [RotationLambdaARNType](#rotationlambdaarntype)
  * RotationRules [RotationRulesType](#rotationrulestype)
  * Tags [TagListType](#taglisttype)
  * VersionIdsToStages [SecretVersionsToStagesMapType](#secretversionstostagesmaptype)

### DescriptionType
* DescriptionType `string`

### EncryptionFailure
* EncryptionFailure `object`: Secrets Manager can't encrypt the protected secret text using the provided KMS key. Check that the customer master key (CMK) is available, enabled, and not in an invalid state. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a>.
  * Message [ErrorMessage](#errormessage)

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

### GetRandomPasswordRequest
* GetRandomPasswordRequest `object`
  * ExcludeCharacters [ExcludeCharactersType](#excludecharacterstype)
  * ExcludeLowercase [ExcludeLowercaseType](#excludelowercasetype)
  * ExcludeNumbers [ExcludeNumbersType](#excludenumberstype)
  * ExcludePunctuation [ExcludePunctuationType](#excludepunctuationtype)
  * ExcludeUppercase [ExcludeUppercaseType](#excludeuppercasetype)
  * IncludeSpace [IncludeSpaceType](#includespacetype)
  * PasswordLength [PasswordLengthType](#passwordlengthtype)
  * RequireEachIncludedType [RequireEachIncludedTypeType](#requireeachincludedtypetype)

### GetRandomPasswordResponse
* GetRandomPasswordResponse `object`
  * RandomPassword [RandomPasswordType](#randompasswordtype)

### GetSecretValueRequest
* GetSecretValueRequest `object`
  * SecretId **required** [SecretIdType](#secretidtype)
  * VersionId [SecretVersionIdType](#secretversionidtype)
  * VersionStage [SecretVersionStageType](#secretversionstagetype)

### GetSecretValueResponse
* GetSecretValueResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * CreatedDate [CreatedDateType](#createddatetype)
  * Name [SecretNameType](#secretnametype)
  * SecretBinary [SecretBinaryType](#secretbinarytype)
  * SecretString [SecretStringType](#secretstringtype)
  * VersionId [SecretVersionIdType](#secretversionidtype)
  * VersionStages [SecretVersionStagesType](#secretversionstagestype)

### IncludeSpaceType
* IncludeSpaceType `boolean`

### InternalServiceError
* InternalServiceError `object`: An error occurred on the server side.
  * Message [ErrorMessage](#errormessage)

### InvalidNextTokenException
* InvalidNextTokenException `object`: You provided an invalid <code>NextToken</code> value.
  * Message [ErrorMessage](#errormessage)

### InvalidParameterException
* InvalidParameterException `object`: You provided an invalid value for a parameter.
  * Message [ErrorMessage](#errormessage)

### InvalidRequestException
* InvalidRequestException `object`: You provided a parameter value that is not valid for the current state of the resource. For example, if you try to enable rotation on a secret, you must already have a Lambda function ARN configured or included as a parameter in this call.
  * Message [ErrorMessage](#errormessage)

### KmsKeyIdType
* KmsKeyIdType `string`

### LastAccessedDateType
* LastAccessedDateType `string`

### LastChangedDateType
* LastChangedDateType `string`

### LastRotatedDateType
* LastRotatedDateType `string`

### LimitExceededException
* LimitExceededException `object`: The request failed because it would exceed one of the Secrets Manager internal limits.
  * Message [ErrorMessage](#errormessage)

### ListSecretVersionIdsRequest
* ListSecretVersionIdsRequest `object`
  * IncludeDeprecated [BooleanType](#booleantype)
  * MaxResults [MaxResultsType](#maxresultstype)
  * NextToken [NextTokenType](#nexttokentype)
  * SecretId **required** [SecretIdType](#secretidtype)

### ListSecretVersionIdsResponse
* ListSecretVersionIdsResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * Name [SecretNameType](#secretnametype)
  * NextToken [NextTokenType](#nexttokentype)
  * Versions [SecretVersionsListType](#secretversionslisttype)

### ListSecretsRequest
* ListSecretsRequest `object`
  * MaxResults [MaxResultsType](#maxresultstype)
  * NextToken [NextTokenType](#nexttokentype)

### ListSecretsResponse
* ListSecretsResponse `object`
  * NextToken [NextTokenType](#nexttokentype)
  * SecretList [SecretListType](#secretlisttype)

### MalformedPolicyDocumentException
* MalformedPolicyDocumentException `object`: The policy document that you provided isn't valid.
  * Message [ErrorMessage](#errormessage)

### MaxResultsType
* MaxResultsType `integer`

### NameType
* NameType `string`

### NextTokenType
* NextTokenType `string`

### PasswordLengthType
* PasswordLengthType `integer`

### PutSecretValueRequest
* PutSecretValueRequest `object`
  * ClientRequestToken [ClientRequestTokenType](#clientrequesttokentype)
  * SecretBinary [SecretBinaryType](#secretbinarytype)
  * SecretId **required** [SecretIdType](#secretidtype)
  * SecretString [SecretStringType](#secretstringtype)
  * VersionStages [SecretVersionStagesType](#secretversionstagestype)

### PutSecretValueResponse
* PutSecretValueResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * Name [SecretNameType](#secretnametype)
  * VersionId [SecretVersionIdType](#secretversionidtype)
  * VersionStages [SecretVersionStagesType](#secretversionstagestype)

### RandomPasswordType
* RandomPasswordType `string`

### RecoveryWindowInDaysType
* RecoveryWindowInDaysType `integer`

### RequireEachIncludedTypeType
* RequireEachIncludedTypeType `boolean`

### ResourceExistsException
* ResourceExistsException `object`: A resource with the ID you requested already exists.
  * Message [ErrorMessage](#errormessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: We can't find the resource that you asked for.
  * Message [ErrorMessage](#errormessage)

### RestoreSecretRequest
* RestoreSecretRequest `object`
  * SecretId **required** [SecretIdType](#secretidtype)

### RestoreSecretResponse
* RestoreSecretResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * Name [SecretNameType](#secretnametype)

### RotateSecretRequest
* RotateSecretRequest `object`
  * ClientRequestToken [ClientRequestTokenType](#clientrequesttokentype)
  * RotationLambdaARN [RotationLambdaARNType](#rotationlambdaarntype)
  * RotationRules [RotationRulesType](#rotationrulestype)
  * SecretId **required** [SecretIdType](#secretidtype)

### RotateSecretResponse
* RotateSecretResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * Name [SecretNameType](#secretnametype)
  * VersionId [SecretVersionIdType](#secretversionidtype)

### RotationEnabledType
* RotationEnabledType `boolean`

### RotationLambdaARNType
* RotationLambdaARNType `string`

### RotationRulesType
* RotationRulesType `object`: A structure that defines the rotation configuration for the secret.
  * AutomaticallyAfterDays [AutomaticallyRotateAfterDaysType](#automaticallyrotateafterdaystype)

### SecretARNType
* SecretARNType `string`

### SecretBinaryType
* SecretBinaryType `string`

### SecretIdType
* SecretIdType `string`

### SecretListEntry
* SecretListEntry `object`: A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the <a>GetSecretValue</a> operation.
  * ARN [SecretARNType](#secretarntype)
  * DeletedDate [DeletedDateType](#deleteddatetype)
  * Description [DescriptionType](#descriptiontype)
  * KmsKeyId [KmsKeyIdType](#kmskeyidtype)
  * LastAccessedDate [LastAccessedDateType](#lastaccesseddatetype)
  * LastChangedDate [LastChangedDateType](#lastchangeddatetype)
  * LastRotatedDate [LastRotatedDateType](#lastrotateddatetype)
  * Name [SecretNameType](#secretnametype)
  * RotationEnabled [RotationEnabledType](#rotationenabledtype)
  * RotationLambdaARN [RotationLambdaARNType](#rotationlambdaarntype)
  * RotationRules [RotationRulesType](#rotationrulestype)
  * SecretVersionsToStages [SecretVersionsToStagesMapType](#secretversionstostagesmaptype)
  * Tags [TagListType](#taglisttype)

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
  * CreatedDate [CreatedDateType](#createddatetype)
  * LastAccessedDate [LastAccessedDateType](#lastaccesseddatetype)
  * VersionId [SecretVersionIdType](#secretversionidtype)
  * VersionStages [SecretVersionStagesType](#secretversionstagestype)

### SecretVersionsListType
* SecretVersionsListType `array`
  * items [SecretVersionsListEntry](#secretversionslistentry)

### SecretVersionsToStagesMapType
* SecretVersionsToStagesMapType `array`
  * items `object`
    * key [SecretVersionIdType](#secretversionidtype)
    * value [SecretVersionStagesType](#secretversionstagestype)

### Tag
* Tag `object`: A structure that contains information about a tag.
  * Key [TagKeyType](#tagkeytype)
  * Value [TagValueType](#tagvaluetype)

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
  * SecretId **required** [SecretIdType](#secretidtype)
  * Tags **required** [TagListType](#taglisttype)

### TagValueType
* TagValueType `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * SecretId **required** [SecretIdType](#secretidtype)
  * TagKeys **required** [TagKeyListType](#tagkeylisttype)

### UpdateSecretRequest
* UpdateSecretRequest `object`
  * ClientRequestToken [ClientRequestTokenType](#clientrequesttokentype)
  * Description [DescriptionType](#descriptiontype)
  * KmsKeyId [KmsKeyIdType](#kmskeyidtype)
  * SecretBinary [SecretBinaryType](#secretbinarytype)
  * SecretId **required** [SecretIdType](#secretidtype)
  * SecretString [SecretStringType](#secretstringtype)

### UpdateSecretResponse
* UpdateSecretResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * Name [SecretNameType](#secretnametype)
  * VersionId [SecretVersionIdType](#secretversionidtype)

### UpdateSecretVersionStageRequest
* UpdateSecretVersionStageRequest `object`
  * MoveToVersionId [SecretVersionIdType](#secretversionidtype)
  * RemoveFromVersionId [SecretVersionIdType](#secretversionidtype)
  * SecretId **required** [SecretIdType](#secretidtype)
  * VersionStage **required** [SecretVersionStageType](#secretversionstagetype)

### UpdateSecretVersionStageResponse
* UpdateSecretVersionStageResponse `object`
  * ARN [SecretARNType](#secretarntype)
  * Name [SecretNameType](#secretnametype)


