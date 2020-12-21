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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Macie Classic</fullname> <p>Amazon Macie Classic is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. Macie Classic recognizes sensitive data such as personally identifiable information (PII) or intellectual property, and provides you with dashboards and alerts that give visibility into how this data is being accessed or moved. For more information, see the <a href="https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html">Amazon Macie Classic User Guide</a>. </p> <p>A new Amazon Macie is now available with significant design improvements and additional features, at a lower price and in most AWS Regions. We encourage you to explore and use the new and improved features, and benefit from the reduced cost. To learn about features and pricing for the new Amazon Macie, see <a href="https://aws.amazon.com/macie/">Amazon Macie</a>.</p>

## Actions

### AssociateMemberAccount



```js
amazonaws_macie.AssociateMemberAccount({
  "memberAccountId": null
}, context)
```

#### Input
* input `object`
  * memberAccountId **required**

#### Output
*Output schema unknown*

### AssociateS3Resources



```js
amazonaws_macie.AssociateS3Resources({
  "s3Resources": null
}, context)
```

#### Input
* input `object`
  * memberAccountId
  * s3Resources **required**
    * items [S3ResourceClassification](#s3resourceclassification)

#### Output
* output [AssociateS3ResourcesResult](#associates3resourcesresult)

### DisassociateMemberAccount



```js
amazonaws_macie.DisassociateMemberAccount({
  "memberAccountId": null
}, context)
```

#### Input
* input `object`
  * memberAccountId **required**

#### Output
*Output schema unknown*

### DisassociateS3Resources



```js
amazonaws_macie.DisassociateS3Resources({
  "associatedS3Resources": null
}, context)
```

#### Input
* input `object`
  * associatedS3Resources **required**
    * items [S3Resource](#s3resource)
  * memberAccountId

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
  * maxResults
  * nextToken

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
  * maxResults
  * memberAccountId
  * nextToken

#### Output
* output [ListS3ResourcesResult](#lists3resourcesresult)

### UpdateS3Resources



```js
amazonaws_macie.UpdateS3Resources({
  "s3ResourcesUpdate": null
}, context)
```

#### Input
* input `object`
  * memberAccountId
  * s3ResourcesUpdate **required**
    * items [S3ResourceClassificationUpdate](#s3resourceclassificationupdate)

#### Output
* output [UpdateS3ResourcesResult](#updates3resourcesresult)



## Definitions

### AWSAccountId
* AWSAccountId `string`

### AccessDeniedException


### AssociateMemberAccountRequest
* AssociateMemberAccountRequest `object`
  * memberAccountId **required**

### AssociateS3ResourcesRequest
* AssociateS3ResourcesRequest `object`
  * memberAccountId
  * s3Resources **required**
    * items [S3ResourceClassification](#s3resourceclassification)

### AssociateS3ResourcesResult
* AssociateS3ResourcesResult `object`
  * failedS3Resources
    * items [FailedS3Resource](#faileds3resource)

### BucketName
* BucketName `string`

### ClassificationType
* ClassificationType `object`: The classification type that Amazon Macie Classic applies to the associated S3 resources. 
  * continuous **required**
  * oneTime **required**

### ClassificationTypeUpdate
* ClassificationTypeUpdate `object`: The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (oneTime or continuous) must be specified. 
  * continuous
  * oneTime

### DisassociateMemberAccountRequest
* DisassociateMemberAccountRequest `object`
  * memberAccountId **required**

### DisassociateS3ResourcesRequest
* DisassociateS3ResourcesRequest `object`
  * associatedS3Resources **required**
    * items [S3Resource](#s3resource)
  * memberAccountId

### DisassociateS3ResourcesResult
* DisassociateS3ResourcesResult `object`
  * failedS3Resources
    * items [FailedS3Resource](#faileds3resource)

### ErrorCode
* ErrorCode `string`: Error code for the exception

### ExceptionMessage
* ExceptionMessage `string`

### FailedS3Resource
* FailedS3Resource `object`: Includes details about the failed S3 resources.
  * errorCode
  * errorMessage
  * failedItem
    * bucketName **required**
    * prefix

### FailedS3Resources
* FailedS3Resources `array`
  * items [FailedS3Resource](#faileds3resource)

### InternalException


### InvalidInputException


### LimitExceededException


### ListMemberAccountsRequest
* ListMemberAccountsRequest `object`
  * maxResults
  * nextToken

### ListMemberAccountsResult
* ListMemberAccountsResult `object`
  * memberAccounts
    * items [MemberAccount](#memberaccount)
  * nextToken

### ListS3ResourcesRequest
* ListS3ResourcesRequest `object`
  * maxResults
  * memberAccountId
  * nextToken

### ListS3ResourcesResult
* ListS3ResourcesResult `object`
  * nextToken
  * s3Resources
    * items [S3ResourceClassification](#s3resourceclassification)

### MaxResults
* MaxResults `integer`

### MemberAccount
* MemberAccount `object`: Contains information about the Amazon Macie Classic member account.
  * accountId

### MemberAccounts
* MemberAccounts `array`
  * items [MemberAccount](#memberaccount)

### NextToken
* NextToken `string`

### Prefix
* Prefix `string`

### S3ContinuousClassificationType
* S3ContinuousClassificationType `string` (values: FULL)

### S3OneTimeClassificationType
* S3OneTimeClassificationType `string` (values: FULL, NONE)

### S3Resource
* S3Resource `object`: Contains information about the S3 resource. This data type is used as a request parameter in the DisassociateS3Resources action and can be used as a response parameter in the AssociateS3Resources and UpdateS3Resources actions. 
  * bucketName **required**
  * prefix

### S3ResourceClassification
* S3ResourceClassification `object`: The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the AssociateS3Resources action and a response parameter in the ListS3Resources action. 
  * bucketName **required**
  * classificationType **required**
    * continuous **required**
    * oneTime **required**
  * prefix

### S3ResourceClassificationUpdate
* S3ResourceClassificationUpdate `object`: The S3 resources whose classification types you want to update. This data type is used as a request parameter in the UpdateS3Resources action. 
  * bucketName **required**
  * classificationTypeUpdate **required**
    * continuous
    * oneTime
  * prefix

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
  * memberAccountId
  * s3ResourcesUpdate **required**
    * items [S3ResourceClassificationUpdate](#s3resourceclassificationupdate)

### UpdateS3ResourcesResult
* UpdateS3ResourcesResult `object`
  * failedS3Resources
    * items [FailedS3Resource](#faileds3resource)


