# @datafire/amazonaws_macie

Client library for Amazon Macie

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_macie
```
```js
let amazonaws_macie = require('@datafire/amazonaws_macie').create({
  hmac: ""
});

amazonaws_macie.AssociateMemberAccount({
  "body": {
    "memberAccountId": ""
  },
  "Action": "",
  "Version": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Macie</fullname> <p>Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. Macie recognizes sensitive data such as personally identifiable information (PII) or intellectual property, and provides you with dashboards and alerts that give visibility into how this data is being accessed or moved. For more information, see the <a href="https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html">Macie User Guide</a>. </p>

## Actions

### AssociateMemberAccount
Associates a specified AWS account with Amazon Macie as a member account.


```js
amazonaws_macie.AssociateMemberAccount({
  "body": {
    "memberAccountId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [AssociateMemberAccountRequest](#associatememberaccountrequest)
  * Action **required** `string`
  * Version **required** `string`
  * X-Amz-Content-Sha256 `string`
  * X-Amz-Date `string`
  * X-Amz-Algorithm `string`
  * X-Amz-Credential `string`
  * X-Amz-Security-Token `string`
  * X-Amz-Signature `string`
  * X-Amz-SignedHeaders `string`

#### Output
*Output schema unknown*

### AssociateS3Resources
Associates specified S3 resources with Amazon Macie for monitoring and data classification. If memberAccountId isn't specified, the action associates specified S3 resources with Macie for the current master account. If memberAccountId is specified, the action associates specified S3 resources with Macie for the specified member account. 


```js
amazonaws_macie.AssociateS3Resources({
  "body": {
    "s3Resources": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [AssociateS3ResourcesRequest](#associates3resourcesrequest)
  * Action **required** `string`
  * Version **required** `string`
  * X-Amz-Content-Sha256 `string`
  * X-Amz-Date `string`
  * X-Amz-Algorithm `string`
  * X-Amz-Credential `string`
  * X-Amz-Security-Token `string`
  * X-Amz-Signature `string`
  * X-Amz-SignedHeaders `string`

#### Output
* output [AssociateS3ResourcesResult](#associates3resourcesresult)

### DisassociateMemberAccount
Removes the specified member account from Amazon Macie.


```js
amazonaws_macie.DisassociateMemberAccount({
  "body": {
    "memberAccountId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [DisassociateMemberAccountRequest](#disassociatememberaccountrequest)
  * Action **required** `string`
  * Version **required** `string`
  * X-Amz-Content-Sha256 `string`
  * X-Amz-Date `string`
  * X-Amz-Algorithm `string`
  * X-Amz-Credential `string`
  * X-Amz-Security-Token `string`
  * X-Amz-Signature `string`
  * X-Amz-SignedHeaders `string`

#### Output
*Output schema unknown*

### DisassociateS3Resources
Removes specified S3 resources from being monitored by Amazon Macie. If memberAccountId isn't specified, the action removes specified S3 resources from Macie for the current master account. If memberAccountId is specified, the action removes specified S3 resources from Macie for the specified member account.


```js
amazonaws_macie.DisassociateS3Resources({
  "body": {
    "associatedS3Resources": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [DisassociateS3ResourcesRequest](#disassociates3resourcesrequest)
  * Action **required** `string`
  * Version **required** `string`
  * X-Amz-Content-Sha256 `string`
  * X-Amz-Date `string`
  * X-Amz-Algorithm `string`
  * X-Amz-Credential `string`
  * X-Amz-Security-Token `string`
  * X-Amz-Signature `string`
  * X-Amz-SignedHeaders `string`

#### Output
* output [DisassociateS3ResourcesResult](#disassociates3resourcesresult)

### ListMemberAccounts
Lists all Amazon Macie member accounts for the current Amazon Macie master account.


```js
amazonaws_macie.ListMemberAccounts({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ListMemberAccountsRequest](#listmemberaccountsrequest)
  * maxResults `string`: Pagination limit
  * nextToken `string`: Pagination token
  * Action **required** `string`
  * Version **required** `string`
  * X-Amz-Content-Sha256 `string`
  * X-Amz-Date `string`
  * X-Amz-Algorithm `string`
  * X-Amz-Credential `string`
  * X-Amz-Security-Token `string`
  * X-Amz-Signature `string`
  * X-Amz-SignedHeaders `string`

#### Output
* output [ListMemberAccountsResult](#listmemberaccountsresult)

### ListS3Resources
Lists all the S3 resources associated with Amazon Macie. If memberAccountId isn't specified, the action lists the S3 resources associated with Amazon Macie for the current master account. If memberAccountId is specified, the action lists the S3 resources associated with Amazon Macie for the specified member account. 


```js
amazonaws_macie.ListS3Resources({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ListS3ResourcesRequest](#lists3resourcesrequest)
  * maxResults `string`: Pagination limit
  * nextToken `string`: Pagination token
  * Action **required** `string`
  * Version **required** `string`
  * X-Amz-Content-Sha256 `string`
  * X-Amz-Date `string`
  * X-Amz-Algorithm `string`
  * X-Amz-Credential `string`
  * X-Amz-Security-Token `string`
  * X-Amz-Signature `string`
  * X-Amz-SignedHeaders `string`

#### Output
* output [ListS3ResourcesResult](#lists3resourcesresult)

### UpdateS3Resources
Updates the classification types for the specified S3 resources. If memberAccountId isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie for the current master account. If memberAccountId is specified, the action updates the classification types of the S3 resources associated with Amazon Macie for the specified member account. 


```js
amazonaws_macie.UpdateS3Resources({
  "body": {
    "s3ResourcesUpdate": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [UpdateS3ResourcesRequest](#updates3resourcesrequest)
  * Action **required** `string`
  * Version **required** `string`
  * X-Amz-Content-Sha256 `string`
  * X-Amz-Date `string`
  * X-Amz-Algorithm `string`
  * X-Amz-Credential `string`
  * X-Amz-Security-Token `string`
  * X-Amz-Signature `string`
  * X-Amz-SignedHeaders `string`

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


