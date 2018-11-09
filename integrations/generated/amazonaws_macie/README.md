# @datafire/amazonaws_macie

Client library for Amazon Macie

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_macie
```
```js
let amazonaws_macie = require('@datafire/amazonaws_macie').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_macie.AssociateMemberAccount({
  "memberAccountId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Macie</fullname> <p>Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. Macie recognizes sensitive data such as personally identifiable information (PII) or intellectual property, and provides you with dashboards and alerts that give visibility into how this data is being accessed or moved. For more information, see the <a href="https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html">Macie User Guide</a>. </p>

## Actions

### AssociateMemberAccount



```js
amazonaws_macie.AssociateMemberAccount({
  "memberAccountId": ""
}, context)
```

#### Input
* input `object`
  * memberAccountId **required** [AWSAccountId](#awsaccountid)

#### Output
*Output schema unknown*

### AssociateS3Resources



```js
amazonaws_macie.AssociateS3Resources({
  "s3Resources": []
}, context)
```

#### Input
* input `object`
  * memberAccountId [AWSAccountId](#awsaccountid)
  * s3Resources **required** [S3ResourcesClassification](#s3resourcesclassification)

#### Output
* output [AssociateS3ResourcesResult](#associates3resourcesresult)

### DisassociateMemberAccount



```js
amazonaws_macie.DisassociateMemberAccount({
  "memberAccountId": ""
}, context)
```

#### Input
* input `object`
  * memberAccountId **required** [AWSAccountId](#awsaccountid)

#### Output
*Output schema unknown*

### DisassociateS3Resources



```js
amazonaws_macie.DisassociateS3Resources({
  "associatedS3Resources": []
}, context)
```

#### Input
* input `object`
  * associatedS3Resources **required** [S3Resources](#s3resources)
  * memberAccountId [AWSAccountId](#awsaccountid)

#### Output
* output [DisassociateS3ResourcesResult](#disassociates3resourcesresult)

### ListMemberAccounts



```js
amazonaws_macie.ListMemberAccounts({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListMemberAccountsResult](#listmemberaccountsresult)

### ListS3Resources



```js
amazonaws_macie.ListS3Resources({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [MaxResults](#maxresults)
  * memberAccountId [AWSAccountId](#awsaccountid)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListS3ResourcesResult](#lists3resourcesresult)

### UpdateS3Resources



```js
amazonaws_macie.UpdateS3Resources({
  "s3ResourcesUpdate": []
}, context)
```

#### Input
* input `object`
  * memberAccountId [AWSAccountId](#awsaccountid)
  * s3ResourcesUpdate **required** [S3ResourcesClassificationUpdate](#s3resourcesclassificationupdate)

#### Output
* output [UpdateS3ResourcesResult](#updates3resourcesresult)



## Definitions

### AWSAccountId
* AWSAccountId `string`

### AccessDeniedException
* AccessDeniedException `object`: You do not have required permissions to access the requested resource.
  * message [ExceptionMessage](#exceptionmessage)
  * resourceType [ResourceType](#resourcetype)

### AssociateMemberAccountRequest
* AssociateMemberAccountRequest `object`
  * memberAccountId **required** [AWSAccountId](#awsaccountid)

### AssociateS3ResourcesRequest
* AssociateS3ResourcesRequest `object`
  * memberAccountId [AWSAccountId](#awsaccountid)
  * s3Resources **required** [S3ResourcesClassification](#s3resourcesclassification)

### AssociateS3ResourcesResult
* AssociateS3ResourcesResult `object`
  * failedS3Resources [FailedS3Resources](#faileds3resources)

### BucketName
* BucketName `string`

### ClassificationType
* ClassificationType `object`: The classification type that Amazon Macie applies to the associated S3 resources. 
  * continuous **required** [S3ContinuousClassificationType](#s3continuousclassificationtype)
  * oneTime **required** [S3OneTimeClassificationType](#s3onetimeclassificationtype)

### ClassificationTypeUpdate
* ClassificationTypeUpdate `object`: The classification type that Amazon Macie applies to the associated S3 resources. At least one of the classification types (oneTime or continuous) must be specified. 
  * continuous [S3ContinuousClassificationType](#s3continuousclassificationtype)
  * oneTime [S3OneTimeClassificationType](#s3onetimeclassificationtype)

### DisassociateMemberAccountRequest
* DisassociateMemberAccountRequest `object`
  * memberAccountId **required** [AWSAccountId](#awsaccountid)

### DisassociateS3ResourcesRequest
* DisassociateS3ResourcesRequest `object`
  * associatedS3Resources **required** [S3Resources](#s3resources)
  * memberAccountId [AWSAccountId](#awsaccountid)

### DisassociateS3ResourcesResult
* DisassociateS3ResourcesResult `object`
  * failedS3Resources [FailedS3Resources](#faileds3resources)

### ErrorCode
* ErrorCode `string`: Error code for the exception

### ExceptionMessage
* ExceptionMessage `string`

### FailedS3Resource
* FailedS3Resource `object`: Includes details about the failed S3 resources.
  * errorCode [ErrorCode](#errorcode)
  * errorMessage [ExceptionMessage](#exceptionmessage)
  * failedItem [S3Resource](#s3resource)

### FailedS3Resources
* FailedS3Resources `array`
  * items [FailedS3Resource](#faileds3resource)

### FieldName
* FieldName `string`: Field that has invalid input

### InternalException
* InternalException `object`: Internal server error.
  * errorCode [ErrorCode](#errorcode)
  * message [ExceptionMessage](#exceptionmessage)

### InvalidInputException
* InvalidInputException `object`: The request was rejected because an invalid or out-of-range value was supplied for an input parameter. 
  * errorCode [ErrorCode](#errorcode)
  * fieldName [FieldName](#fieldname)
  * message [ExceptionMessage](#exceptionmessage)

### LimitExceededException
* LimitExceededException `object`: The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded. 
  * errorCode [ErrorCode](#errorcode)
  * message [ExceptionMessage](#exceptionmessage)
  * resourceType [ResourceType](#resourcetype)

### ListMemberAccountsRequest
* ListMemberAccountsRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

### ListMemberAccountsResult
* ListMemberAccountsResult `object`
  * memberAccounts [MemberAccounts](#memberaccounts)
  * nextToken [NextToken](#nexttoken)

### ListS3ResourcesRequest
* ListS3ResourcesRequest `object`
  * maxResults [MaxResults](#maxresults)
  * memberAccountId [AWSAccountId](#awsaccountid)
  * nextToken [NextToken](#nexttoken)

### ListS3ResourcesResult
* ListS3ResourcesResult `object`
  * nextToken [NextToken](#nexttoken)
  * s3Resources [S3ResourcesClassification](#s3resourcesclassification)

### MaxResults
* MaxResults `integer`

### MemberAccount
* MemberAccount `object`: Contains information about the Amazon Macie member account.
  * accountId [AWSAccountId](#awsaccountid)

### MemberAccounts
* MemberAccounts `array`
  * items [MemberAccount](#memberaccount)

### NextToken
* NextToken `string`

### Prefix
* Prefix `string`

### ResourceType
* ResourceType `string`: Resource type that caused the exception

### S3ContinuousClassificationType
* S3ContinuousClassificationType `string` (values: FULL)

### S3OneTimeClassificationType
* S3OneTimeClassificationType `string` (values: FULL, NONE)

### S3Resource
* S3Resource `object`: Contains information about the S3 resource. This data type is used as a request parameter in the DisassociateS3Resources action and can be used as a response parameter in the AssociateS3Resources and UpdateS3Resources actions. 
  * bucketName **required** [BucketName](#bucketname)
  * prefix [Prefix](#prefix)

### S3ResourceClassification
* S3ResourceClassification `object`: The S3 resources that you want to associate with Amazon Macie for monitoring and data classification. This data type is used as a request parameter in the AssociateS3Resources action and a response parameter in the ListS3Resources action. 
  * bucketName **required** [BucketName](#bucketname)
  * classificationType **required** [ClassificationType](#classificationtype)
  * prefix [Prefix](#prefix)

### S3ResourceClassificationUpdate
* S3ResourceClassificationUpdate `object`: The S3 resources whose classification types you want to update. This data type is used as a request parameter in the UpdateS3Resources action. 
  * bucketName **required** [BucketName](#bucketname)
  * classificationTypeUpdate **required** [ClassificationTypeUpdate](#classificationtypeupdate)
  * prefix [Prefix](#prefix)

### S3Resources
* S3Resources `array`
  * items [S3Resource](#s3resource)

### S3ResourcesClassification
* S3ResourcesClassification `array`
  * items [S3ResourceClassification](#s3resourceclassification)

### S3ResourcesClassificationUpdate
* S3ResourcesClassificationUpdate `array`
  * items [S3ResourceClassificationUpdate](#s3resourceclassificationupdate)

### UpdateS3ResourcesRequest
* UpdateS3ResourcesRequest `object`
  * memberAccountId [AWSAccountId](#awsaccountid)
  * s3ResourcesUpdate **required** [S3ResourcesClassificationUpdate](#s3resourcesclassificationupdate)

### UpdateS3ResourcesResult
* UpdateS3ResourcesResult `object`
  * failedS3Resources [FailedS3Resources](#faileds3resources)


