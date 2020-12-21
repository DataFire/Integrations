# @datafire/amazonaws_codeguru_reviewer

Client library for Amazon CodeGuru Reviewer

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codeguru_reviewer
```
```js
let amazonaws_codeguru_reviewer = require('@datafire/amazonaws_codeguru_reviewer').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommends fixes in your Java code.</p> <p>By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the <i> <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i> </p> <p> To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by creating an <i>interface VPC endpoint</i>. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface VPC endpoints (AWS PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>. </p>

## Actions

### ListRepositoryAssociations



```js
amazonaws_codeguru_reviewer.ListRepositoryAssociations({}, context)
```

#### Input
* input `object`
  * ProviderType `array`
  * State `array`
  * Name `array`
  * Owner `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListRepositoryAssociationsResponse](#listrepositoryassociationsresponse)

### AssociateRepository



```js
amazonaws_codeguru_reviewer.AssociateRepository({
  "Repository": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken `string`: Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries. 
  * Repository **required** `object`:  Information about an associated AWS CodeCommit repository or an associated repository that is managed by AWS CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository. 
    * Bitbucket
      * ConnectionArn **required**
      * Name **required**
      * Owner **required**
    * CodeCommit
      * Name **required**
    * GitHubEnterpriseServer
      * ConnectionArn **required**
      * Name **required**
      * Owner **required**
  * Tags `object`: <p> An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts: </p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>

#### Output
* output [AssociateRepositoryResponse](#associaterepositoryresponse)

### DisassociateRepository



```js
amazonaws_codeguru_reviewer.DisassociateRepository({
  "AssociationArn": ""
}, context)
```

#### Input
* input `object`
  * AssociationArn **required** `string`

#### Output
* output [DisassociateRepositoryResponse](#disassociaterepositoryresponse)

### DescribeRepositoryAssociation



```js
amazonaws_codeguru_reviewer.DescribeRepositoryAssociation({
  "AssociationArn": ""
}, context)
```

#### Input
* input `object`
  * AssociationArn **required** `string`

#### Output
* output [DescribeRepositoryAssociationResponse](#describerepositoryassociationresponse)

### CreateCodeReview



```js
amazonaws_codeguru_reviewer.CreateCodeReview({
  "Name": "",
  "RepositoryAssociationArn": "",
  "Type": {}
}, context)
```

#### Input
* input `object`
  * ClientRequestToken `string`:  Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews if there are failures and retries. 
  * Name **required** `string`:  The name of the code review. The name of each code review in your AWS account must be unique. 
  * RepositoryAssociationArn **required** `string`: <p> The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html"> <code>RepositoryAssociation</code> </a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html"> <code>ListRepositoryAssociations</code> </a>. </p> <p> A code review can only be created on an associated repository. This is the ARN of the associated repository. </p>
  * Type **required** `object`: <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an assocaited repository. Because this type of code review is automatically generated, you cannot specify this code review type using <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated respository. The assocated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
    * RepositoryAnalysis
      * RepositoryHead **required**
        * BranchName **required**

#### Output
* output [CreateCodeReviewResponse](#createcodereviewresponse)

### ListCodeReviews



```js
amazonaws_codeguru_reviewer.ListCodeReviews({
  "Type": ""
}, context)
```

#### Input
* input `object`
  * ProviderTypes `array`
  * States `array`
  * RepositoryNames `array`
  * Type **required** `string`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListCodeReviewsResponse](#listcodereviewsresponse)

### DescribeCodeReview



```js
amazonaws_codeguru_reviewer.DescribeCodeReview({
  "CodeReviewArn": ""
}, context)
```

#### Input
* input `object`
  * CodeReviewArn **required** `string`

#### Output
* output [DescribeCodeReviewResponse](#describecodereviewresponse)

### ListRecommendations



```js
amazonaws_codeguru_reviewer.ListRecommendations({
  "CodeReviewArn": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`
  * CodeReviewArn **required** `string`

#### Output
* output [ListRecommendationsResponse](#listrecommendationsresponse)

### PutRecommendationFeedback



```js
amazonaws_codeguru_reviewer.PutRecommendationFeedback({
  "CodeReviewArn": "",
  "RecommendationId": "",
  "Reactions": []
}, context)
```

#### Input
* input `object`
  * CodeReviewArn **required** `string`: The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html"> <code>CodeReview</code> </a> object. 
  * Reactions **required** `array`:  List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback. 
    * items [Reaction](#reaction)
  * RecommendationId **required** `string`:  The recommendation ID that can be used to track the provided recommendations and then to collect the feedback. 

#### Output
* output [PutRecommendationFeedbackResponse](#putrecommendationfeedbackresponse)

### DescribeRecommendationFeedback



```js
amazonaws_codeguru_reviewer.DescribeRecommendationFeedback({
  "CodeReviewArn": "",
  "RecommendationId": ""
}, context)
```

#### Input
* input `object`
  * CodeReviewArn **required** `string`
  * RecommendationId **required** `string`
  * UserId `string`

#### Output
* output [DescribeRecommendationFeedbackResponse](#describerecommendationfeedbackresponse)

### ListRecommendationFeedback



```js
amazonaws_codeguru_reviewer.ListRecommendationFeedback({
  "CodeReviewArn": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`
  * CodeReviewArn **required** `string`
  * UserIds `array`
  * RecommendationIds `array`

#### Output
* output [ListRecommendationFeedbackResponse](#listrecommendationfeedbackresponse)

### ListTagsForResource



```js
amazonaws_codeguru_reviewer.ListTagsForResource({
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
amazonaws_codeguru_reviewer.TagResource({
  "resourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * Tags **required** `object`: <p> An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts: </p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_codeguru_reviewer.UntagResource({
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

### AccessDeniedException


### Arn
* Arn `string`

### AssociateRepositoryRequest
* AssociateRepositoryRequest `object`
  * ClientRequestToken
  * Repository **required**
    * Bitbucket
      * ConnectionArn **required**
      * Name **required**
      * Owner **required**
    * CodeCommit
      * Name **required**
    * GitHubEnterpriseServer
      * ConnectionArn **required**
      * Name **required**
      * Owner **required**
  * Tags

### AssociateRepositoryResponse
* AssociateRepositoryResponse `object`
  * RepositoryAssociation
    * AssociationArn
    * AssociationId
    * ConnectionArn
    * CreatedTimeStamp
    * LastUpdatedTimeStamp
    * Name
    * Owner
    * ProviderType
    * State
    * StateReason
  * Tags

### AssociationArn
* AssociationArn `string`

### AssociationId
* AssociationId `string`

### BranchName
* BranchName `string`

### ClientRequestToken
* ClientRequestToken `string`

### CodeCommitRepository
* CodeCommitRepository `object`: Information about an AWS CodeCommit repository. The CodeCommit repository must be in the same AWS Region and AWS account where its CodeGuru Reviewer code reviews are configured. 
  * Name **required**

### CodeReview
* CodeReview `object`:  Information about a code review. A code review belongs to the associated repository that contains the reviewed code. 
  * AssociationArn
  * CodeReviewArn
  * CreatedTimeStamp
  * LastUpdatedTimeStamp
  * Metrics
    * FindingsCount
    * MeteredLinesOfCodeCount
  * Name
  * Owner
  * ProviderType
  * PullRequestId
  * RepositoryName
  * SourceCodeType
    * CommitDiff
      * DestinationCommit
      * SourceCommit
    * RepositoryHead [RepositoryHeadSourceCodeType](#repositoryheadsourcecodetype)
  * State
  * StateReason
  * Type

### CodeReviewName
* CodeReviewName `string`

### CodeReviewSummaries
* CodeReviewSummaries `array`
  * items [CodeReviewSummary](#codereviewsummary)

### CodeReviewSummary
* CodeReviewSummary `object`:  Information about the summary of the code review. 
  * CodeReviewArn
  * CreatedTimeStamp
  * LastUpdatedTimeStamp
  * MetricsSummary
    * FindingsCount
    * MeteredLinesOfCodeCount
  * Name
  * Owner
  * ProviderType
  * PullRequestId
  * RepositoryName
  * State
  * Type

### CodeReviewType
* CodeReviewType `object`: <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an assocaited repository. Because this type of code review is automatically generated, you cannot specify this code review type using <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated respository. The assocated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
  * RepositoryAnalysis **required**
    * RepositoryHead **required**
      * BranchName **required**

### CommitDiffSourceCodeType
* CommitDiffSourceCodeType `object`:  A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies the commit diff for a pull request on an associated repository. 
  * DestinationCommit
  * SourceCommit

### CommitId
* CommitId `string`

### ConflictException


### ConnectionArn
* ConnectionArn `string`

### CreateCodeReviewRequest
* CreateCodeReviewRequest `object`
  * ClientRequestToken
  * Name **required**
  * RepositoryAssociationArn **required**
  * Type **required**
    * RepositoryAnalysis **required**
      * RepositoryHead **required**
        * BranchName **required**

### CreateCodeReviewResponse
* CreateCodeReviewResponse `object`
  * CodeReview [CodeReview](#codereview)

### DescribeCodeReviewRequest
* DescribeCodeReviewRequest `object`

### DescribeCodeReviewResponse
* DescribeCodeReviewResponse `object`
  * CodeReview
    * AssociationArn
    * CodeReviewArn
    * CreatedTimeStamp
    * LastUpdatedTimeStamp
    * Metrics
      * FindingsCount
      * MeteredLinesOfCodeCount
    * Name
    * Owner
    * ProviderType
    * PullRequestId
    * RepositoryName
    * SourceCodeType
      * CommitDiff
        * DestinationCommit
        * SourceCommit
      * RepositoryHead [RepositoryHeadSourceCodeType](#repositoryheadsourcecodetype)
    * State
    * StateReason
    * Type

### DescribeRecommendationFeedbackRequest
* DescribeRecommendationFeedbackRequest `object`

### DescribeRecommendationFeedbackResponse
* DescribeRecommendationFeedbackResponse `object`
  * RecommendationFeedback
    * CodeReviewArn
    * CreatedTimeStamp
    * LastUpdatedTimeStamp
    * Reactions
      * items [Reaction](#reaction)
    * RecommendationId
    * UserId

### DescribeRepositoryAssociationRequest
* DescribeRepositoryAssociationRequest `object`

### DescribeRepositoryAssociationResponse
* DescribeRepositoryAssociationResponse `object`
  * RepositoryAssociation
    * AssociationArn
    * AssociationId
    * ConnectionArn
    * CreatedTimeStamp
    * LastUpdatedTimeStamp
    * Name
    * Owner
    * ProviderType
    * State
    * StateReason
  * Tags

### DisassociateRepositoryRequest
* DisassociateRepositoryRequest `object`

### DisassociateRepositoryResponse
* DisassociateRepositoryResponse `object`
  * RepositoryAssociation
    * AssociationArn
    * AssociationId
    * ConnectionArn
    * CreatedTimeStamp
    * LastUpdatedTimeStamp
    * Name
    * Owner
    * ProviderType
    * State
    * StateReason
  * Tags

### FilePath
* FilePath `string`

### FindingsCount
* FindingsCount `integer`

### InternalServerException


### JobState
* JobState `string` (values: Completed, Pending, Failed, Deleting)

### JobStates
* JobStates `array`
  * items [JobState](#jobstate)

### LineNumber
* LineNumber `integer`

### ListCodeReviewsMaxResults
* ListCodeReviewsMaxResults `integer`

### ListCodeReviewsRequest
* ListCodeReviewsRequest `object`

### ListCodeReviewsResponse
* ListCodeReviewsResponse `object`
  * CodeReviewSummaries
    * items [CodeReviewSummary](#codereviewsummary)
  * NextToken

### ListRecommendationFeedbackRequest
* ListRecommendationFeedbackRequest `object`

### ListRecommendationFeedbackResponse
* ListRecommendationFeedbackResponse `object`
  * NextToken
  * RecommendationFeedbackSummaries
    * items [RecommendationFeedbackSummary](#recommendationfeedbacksummary)

### ListRecommendationsRequest
* ListRecommendationsRequest `object`

### ListRecommendationsResponse
* ListRecommendationsResponse `object`
  * NextToken
  * RecommendationSummaries
    * items [RecommendationSummary](#recommendationsummary)

### ListRepositoryAssociationsRequest
* ListRepositoryAssociationsRequest `object`

### ListRepositoryAssociationsResponse
* ListRepositoryAssociationsResponse `object`
  * NextToken
  * RepositoryAssociationSummaries
    * items [RepositoryAssociationSummary](#repositoryassociationsummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### MaxResults
* MaxResults `integer`

### MeteredLinesOfCodeCount
* MeteredLinesOfCodeCount `integer`

### Metrics
* Metrics `object`:  Information about the statistics from the code review. 
  * FindingsCount
  * MeteredLinesOfCodeCount

### MetricsSummary
* MetricsSummary `object`:  Information about metrics summaries. 
  * FindingsCount
  * MeteredLinesOfCodeCount

### Name
* Name `string`

### Names
* Names `array`
  * items [Name](#name)

### NextToken
* NextToken `string`

### NotFoundException


### Owner
* Owner `string`

### Owners
* Owners `array`
  * items [Owner](#owner)

### ProviderType
* ProviderType `string` (values: CodeCommit, GitHub, Bitbucket, GitHubEnterpriseServer)

### ProviderTypes
* ProviderTypes `array`
  * items [ProviderType](#providertype)

### PullRequestId
* PullRequestId `string`

### PutRecommendationFeedbackRequest
* PutRecommendationFeedbackRequest `object`
  * CodeReviewArn **required**
  * Reactions **required**
    * items [Reaction](#reaction)
  * RecommendationId **required**

### PutRecommendationFeedbackResponse
* PutRecommendationFeedbackResponse `object`

### Reaction
* Reaction `string` (values: ThumbsUp, ThumbsDown)

### Reactions
* Reactions `array`
  * items [Reaction](#reaction)

### RecommendationFeedback
* RecommendationFeedback `object`:  Information about the recommendation feedback. 
  * CodeReviewArn
  * CreatedTimeStamp
  * LastUpdatedTimeStamp
  * Reactions
    * items [Reaction](#reaction)
  * RecommendationId
  * UserId

### RecommendationFeedbackSummaries
* RecommendationFeedbackSummaries `array`
  * items [RecommendationFeedbackSummary](#recommendationfeedbacksummary)

### RecommendationFeedbackSummary
* RecommendationFeedbackSummary `object`:  Information about recommendation feedback summaries. 
  * Reactions
    * items [Reaction](#reaction)
  * RecommendationId
  * UserId

### RecommendationId
* RecommendationId `string`

### RecommendationIds
* RecommendationIds `array`
  * items [RecommendationId](#recommendationid)

### RecommendationSummaries
* RecommendationSummaries `array`
  * items [RecommendationSummary](#recommendationsummary)

### RecommendationSummary
* RecommendationSummary `object`:  Information about recommendations. 
  * Description
  * EndLine
  * FilePath
  * RecommendationId
  * StartLine

### Repository
* Repository `object`:  Information about an associated AWS CodeCommit repository or an associated repository that is managed by AWS CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository. 
  * Bitbucket
    * ConnectionArn **required**
    * Name **required**
    * Owner **required**
  * CodeCommit
    * Name **required**
  * GitHubEnterpriseServer
    * ConnectionArn **required**
    * Name **required**
    * Owner **required**

### RepositoryAnalysis
* RepositoryAnalysis `object`:  A code review type that analyzes all code under a specified branch in an associated respository. The assocated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. 
  * RepositoryHead **required**
    * BranchName **required**

### RepositoryAssociation
* RepositoryAssociation `object`: Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html"> <code>DescribeRepositoryAssociation</code> </a> operation returns a <code>RepositoryAssociation</code> object.
  * AssociationArn
  * AssociationId
  * ConnectionArn
  * CreatedTimeStamp
  * LastUpdatedTimeStamp
  * Name
  * Owner
  * ProviderType
  * State
  * StateReason

### RepositoryAssociationState
* RepositoryAssociationState `string` (values: Associated, Associating, Failed, Disassociating, Disassociated)

### RepositoryAssociationStates
* RepositoryAssociationStates `array`
  * items [RepositoryAssociationState](#repositoryassociationstate)

### RepositoryAssociationSummaries
* RepositoryAssociationSummaries `array`
  * items [RepositoryAssociationSummary](#repositoryassociationsummary)

### RepositoryAssociationSummary
* RepositoryAssociationSummary `object`: Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html"> <code>ListRepositoryAssociations</code> </a> operation returns a list of <code>RepositoryAssociationSummary</code> objects.
  * AssociationArn
  * AssociationId
  * ConnectionArn
  * LastUpdatedTimeStamp
  * Name
  * Owner
  * ProviderType
  * State

### RepositoryHeadSourceCodeType
* RepositoryHeadSourceCodeType `object`:  A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies the tip of a branch in an associated repository. 
  * BranchName **required**

### RepositoryNames
* RepositoryNames `array`
  * items [Name](#name)

### ResourceNotFoundException


### SourceCodeType
* SourceCodeType `object`:  Specifies the source code that is analyzed in a code review. A code review can analyze the source code that is specified using a pull request diff or a branch in an associated repository. 
  * CommitDiff
    * DestinationCommit
    * SourceCommit
  * RepositoryHead [RepositoryHeadSourceCodeType](#repositoryheadsourcecodetype)

### StateReason
* StateReason `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Text
* Text `string`

### ThirdPartySourceRepository
* ThirdPartySourceRepository `object`:  Information about a third-party source repository connected to CodeGuru Reviewer. 
  * ConnectionArn **required**
  * Name **required**
  * Owner **required**

### ThrottlingException


### TimeStamp
* TimeStamp `string`

### Type
* Type `string` (values: PullRequest, RepositoryAnalysis)

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UserId
* UserId `string`

### UserIds
* UserIds `array`
  * items [UserId](#userid)

### ValidationException



