# @datafire/amazonaws_accessanalyzer

Client library for Access Analyzer

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_accessanalyzer
```
```js
let amazonaws_accessanalyzer = require('@datafire/amazonaws_accessanalyzer').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS IAM Access Analyzer helps identify potential resource-access risks by enabling you to identify any policies that grant access to an external principal. It does this by using logic-based reasoning to analyze resource-based policies in your AWS environment. An external principal can be another AWS account, a root user, an IAM user or role, a federated user, an AWS service, or an anonymous user. This guide describes the AWS IAM Access Analyzer operations that you can call programmatically. For general information about Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">AWS IAM Access Analyzer</a> in the <b>IAM User Guide</b>.</p> <p>To start using Access Analyzer, you first need to create an analyzer.</p>

## Actions

### ListAnalyzedResources



```js
amazonaws_accessanalyzer.ListAnalyzedResources({
  "analyzerArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * analyzerArn **required** `string`: The ARN of the analyzer to retrieve a list of analyzed resources from.
  * maxResults `integer`: The maximum number of results to return in the response.
  * nextToken `string`: A token used for pagination of results returned.
  * resourceType `string` (values: AWS::S3::Bucket, AWS::IAM::Role, AWS::SQS::Queue, AWS::Lambda::Function, AWS::Lambda::LayerVersion, AWS::KMS::Key): The type of resource.

#### Output
* output [ListAnalyzedResourcesResponse](#listanalyzedresourcesresponse)

### GetAnalyzedResource



```js
amazonaws_accessanalyzer.GetAnalyzedResource({
  "analyzerArn": "",
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * analyzerArn **required** `string`
  * resourceArn **required** `string`

#### Output
* output [GetAnalyzedResourceResponse](#getanalyzedresourceresponse)

### ListAnalyzers



```js
amazonaws_accessanalyzer.ListAnalyzers({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * type `string`

#### Output
* output [ListAnalyzersResponse](#listanalyzersresponse)

### CreateAnalyzer



```js
amazonaws_accessanalyzer.CreateAnalyzer({
  "analyzerName": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: The tags to apply to the analyzer.
  * analyzerName **required** `string`: The name of the analyzer to create.
  * archiveRules `array`: Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.
    * items [InlineArchiveRule](#inlinearchiverule)
  * clientToken `string`: A client token.
  * type **required** `string` (values: ACCOUNT, ORGANIZATION): The type of analyzer to create. Only ACCOUNT analyzers are supported. You can create only one analyzer per account per Region.

#### Output
* output [CreateAnalyzerResponse](#createanalyzerresponse)

### DeleteAnalyzer



```js
amazonaws_accessanalyzer.DeleteAnalyzer({
  "analyzerName": ""
}, context)
```

#### Input
* input `object`
  * analyzerName **required** `string`
  * clientToken `string`

#### Output
*Output schema unknown*

### GetAnalyzer



```js
amazonaws_accessanalyzer.GetAnalyzer({
  "analyzerName": ""
}, context)
```

#### Input
* input `object`
  * analyzerName **required** `string`

#### Output
* output [GetAnalyzerResponse](#getanalyzerresponse)

### ListArchiveRules



```js
amazonaws_accessanalyzer.ListArchiveRules({
  "analyzerName": ""
}, context)
```

#### Input
* input `object`
  * analyzerName **required** `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListArchiveRulesResponse](#listarchiverulesresponse)

### CreateArchiveRule



```js
amazonaws_accessanalyzer.CreateArchiveRule({
  "analyzerName": "",
  "filter": {},
  "ruleName": ""
}, context)
```

#### Input
* input `object`
  * analyzerName **required** `string`
  * clientToken `string`: A client token.
  * filter **required** `object`: The criteria for the rule.
  * ruleName **required** `string`: The name of the rule to create.

#### Output
*Output schema unknown*

### DeleteArchiveRule



```js
amazonaws_accessanalyzer.DeleteArchiveRule({
  "analyzerName": "",
  "ruleName": ""
}, context)
```

#### Input
* input `object`
  * analyzerName **required** `string`
  * clientToken `string`
  * ruleName **required** `string`

#### Output
*Output schema unknown*

### GetArchiveRule



```js
amazonaws_accessanalyzer.GetArchiveRule({
  "analyzerName": "",
  "ruleName": ""
}, context)
```

#### Input
* input `object`
  * analyzerName **required** `string`
  * ruleName **required** `string`

#### Output
* output [GetArchiveRuleResponse](#getarchiveruleresponse)

### UpdateArchiveRule



```js
amazonaws_accessanalyzer.UpdateArchiveRule({
  "analyzerName": "",
  "ruleName": "",
  "filter": {}
}, context)
```

#### Input
* input `object`
  * analyzerName **required** `string`
  * ruleName **required** `string`
  * clientToken `string`: A client token.
  * filter **required** `object`: A filter to match for the rules to update. Only rules that match the filter are updated.

#### Output
*Output schema unknown*

### ApplyArchiveRule



```js
amazonaws_accessanalyzer.ApplyArchiveRule({
  "analyzerArn": "",
  "ruleName": ""
}, context)
```

#### Input
* input `object`
  * analyzerArn **required** `string`: The Amazon resource name (ARN) of the analyzer.
  * clientToken `string`: A client token.
  * ruleName **required** `string`: The name of the rule to apply.

#### Output
*Output schema unknown*

### ListFindings



```js
amazonaws_accessanalyzer.ListFindings({
  "analyzerArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * analyzerArn **required** `string`: The ARN of the analyzer to retrieve findings from.
  * filter `object`: A filter to match for the findings to return.
  * maxResults `integer`: The maximum number of results to return in the response.
  * nextToken `string`: A token used for pagination of results returned.
  * sort `object`: The criteria used to sort.
    * attributeName
    * orderBy

#### Output
* output [ListFindingsResponse](#listfindingsresponse)

### UpdateFindings



```js
amazonaws_accessanalyzer.UpdateFindings({
  "analyzerArn": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * analyzerArn **required** `string`: The ARN of the analyzer that generated the findings to update.
  * clientToken `string`: A client token.
  * ids `array`: The IDs of the findings to update.
    * items [FindingId](#findingid)
  * resourceArn `string`: The ARN of the resource identified in the finding.
  * status **required** `string` (values: ACTIVE, ARCHIVED): The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.

#### Output
*Output schema unknown*

### GetFinding



```js
amazonaws_accessanalyzer.GetFinding({
  "analyzerArn": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * analyzerArn **required** `string`
  * id **required** `string`

#### Output
* output [GetFindingResponse](#getfindingresponse)

### StartResourceScan



```js
amazonaws_accessanalyzer.StartResourceScan({
  "analyzerArn": "",
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * analyzerArn **required** `string`: The ARN of the analyzer to use to scan the policies applied to the specified resource.
  * resourceArn **required** `string`: The ARN of the resource to scan.

#### Output
*Output schema unknown*

### ListTagsForResource



```js
amazonaws_accessanalyzer.ListTagsForResource({
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
amazonaws_accessanalyzer.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The tags to add to the resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_accessanalyzer.UntagResource({
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


### ActionList
* ActionList `array`
  * items [String](#string)

### AnalyzedResource
* AnalyzedResource `object`: Contains details about the analyzed resource.
  * actions
    * items [String](#string)
  * analyzedAt **required**
  * createdAt **required**
  * error
  * isPublic **required**
  * resourceArn **required**
  * resourceOwnerAccount **required**
  * resourceType **required**
  * sharedVia
    * items [String](#string)
  * status
  * updatedAt **required**

### AnalyzedResourceSummary
* AnalyzedResourceSummary `object`: Contains the ARN of the analyzed resource.
  * resourceArn **required**
  * resourceOwnerAccount **required**
  * resourceType **required**

### AnalyzedResourcesList
* AnalyzedResourcesList `array`
  * items [AnalyzedResourceSummary](#analyzedresourcesummary)

### AnalyzerArn
* AnalyzerArn `string`

### AnalyzerStatus
* AnalyzerStatus `string` (values: ACTIVE, CREATING, DISABLED, FAILED)

### AnalyzerSummary
* AnalyzerSummary `object`: Contains information about the analyzer.
  * tags
  * arn **required**
  * createdAt **required**
  * lastResourceAnalyzed
  * lastResourceAnalyzedAt
  * name **required**
  * status **required**
  * statusReason
    * code **required**
  * type **required**

### AnalyzersList
* AnalyzersList `array`
  * items [AnalyzerSummary](#analyzersummary)

### ApplyArchiveRuleRequest
* ApplyArchiveRuleRequest `object`: Retroactively applies an archive rule.
  * analyzerArn **required**
  * clientToken
  * ruleName **required**

### ArchiveRuleSummary
* ArchiveRuleSummary `object`: Contains information about an archive rule.
  * createdAt **required**
  * filter **required**
  * ruleName **required**
  * updatedAt **required**

### ArchiveRulesList
* ArchiveRulesList `array`
  * items [ArchiveRuleSummary](#archiverulesummary)

### Boolean
* Boolean `boolean`

### ConditionKeyMap
* ConditionKeyMap `object`

### ConflictException


### CreateAnalyzerRequest
* CreateAnalyzerRequest `object`: Creates an analyzer.
  * tags
  * analyzerName **required**
  * archiveRules
    * items [InlineArchiveRule](#inlinearchiverule)
  * clientToken
  * type **required**

### CreateAnalyzerResponse
* CreateAnalyzerResponse `object`: The response to the request to create an analyzer.
  * arn

### CreateArchiveRuleRequest
* CreateArchiveRuleRequest `object`: Creates an archive rule.
  * clientToken
  * filter **required**
  * ruleName **required**

### Criterion
* Criterion `object`: The criteria to use in the filter that defines the archive rule.
  * contains
    * items [String](#string)
  * eq
    * items [String](#string)
  * exists
  * neq
    * items [String](#string)

### DeleteAnalyzerRequest
* DeleteAnalyzerRequest `object`: Deletes an analyzer.

### DeleteArchiveRuleRequest
* DeleteArchiveRuleRequest `object`: Deletes an archive rule.

### FilterCriteriaMap
* FilterCriteriaMap `object`

### Finding
* Finding `object`: Contains information about a finding.
  * action
    * items [String](#string)
  * analyzedAt **required**
  * condition **required**
  * createdAt **required**
  * error
  * id **required**
  * isPublic
  * principal
  * resource
  * resourceOwnerAccount **required**
  * resourceType **required**
  * sources
    * items [FindingSource](#findingsource)
  * status **required**
  * updatedAt **required**

### FindingId
* FindingId `string`

### FindingIdList
* FindingIdList `array`
  * items [FindingId](#findingid)

### FindingSource
* FindingSource `object`: The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
  * detail
    * accessPointArn
  * type **required**

### FindingSourceDetail
* FindingSourceDetail `object`: Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
  * accessPointArn

### FindingSourceList
* FindingSourceList `array`
  * items [FindingSource](#findingsource)

### FindingSourceType
* FindingSourceType `string` (values: POLICY, BUCKET_ACL, S3_ACCESS_POINT)

### FindingStatus
* FindingStatus `string` (values: ACTIVE, ARCHIVED, RESOLVED)

### FindingStatusUpdate
* FindingStatusUpdate `string` (values: ACTIVE, ARCHIVED)

### FindingSummary
* FindingSummary `object`: Contains information about a finding.
  * action
    * items [String](#string)
  * analyzedAt **required**
  * condition **required**
  * createdAt **required**
  * error
  * id **required**
  * isPublic
  * principal
  * resource
  * resourceOwnerAccount **required**
  * resourceType **required**
  * sources
    * items [FindingSource](#findingsource)
  * status **required**
  * updatedAt **required**

### FindingsList
* FindingsList `array`
  * items [FindingSummary](#findingsummary)

### GetAnalyzedResourceRequest
* GetAnalyzedResourceRequest `object`: Retrieves an analyzed resource.

### GetAnalyzedResourceResponse
* GetAnalyzedResourceResponse `object`: The response to the request.
  * resource
    * actions
      * items [String](#string)
    * analyzedAt **required**
    * createdAt **required**
    * error
    * isPublic **required**
    * resourceArn **required**
    * resourceOwnerAccount **required**
    * resourceType **required**
    * sharedVia
      * items [String](#string)
    * status
    * updatedAt **required**

### GetAnalyzerRequest
* GetAnalyzerRequest `object`: Retrieves an analyzer.

### GetAnalyzerResponse
* GetAnalyzerResponse `object`: The response to the request.
  * analyzer **required**
    * tags
    * arn **required**
    * createdAt **required**
    * lastResourceAnalyzed
    * lastResourceAnalyzedAt
    * name **required**
    * status **required**
    * statusReason
      * code **required**
    * type **required**

### GetArchiveRuleRequest
* GetArchiveRuleRequest `object`: Retrieves an archive rule.

### GetArchiveRuleResponse
* GetArchiveRuleResponse `object`: The response to the request.
  * archiveRule **required** [ArchiveRuleSummary](#archiverulesummary)

### GetFindingRequest
* GetFindingRequest `object`: Retrieves a finding.

### GetFindingResponse
* GetFindingResponse `object`: The response to the request.
  * finding
    * action
      * items [String](#string)
    * analyzedAt **required**
    * condition **required**
    * createdAt **required**
    * error
    * id **required**
    * isPublic
    * principal
    * resource
    * resourceOwnerAccount **required**
    * resourceType **required**
    * sources
      * items [FindingSource](#findingsource)
    * status **required**
    * updatedAt **required**

### InlineArchiveRule
* InlineArchiveRule `object`: An criterion statement in an archive rule. Each archive rule may have multiple criteria.
  * filter **required**
  * ruleName **required**

### InlineArchiveRulesList
* InlineArchiveRulesList `array`
  * items [InlineArchiveRule](#inlinearchiverule)

### Integer
* Integer `integer`

### InternalServerException


### ListAnalyzedResourcesRequest
* ListAnalyzedResourcesRequest `object`: Retrieves a list of resources that have been analyzed.
  * analyzerArn **required**
  * maxResults
  * nextToken
  * resourceType

### ListAnalyzedResourcesResponse
* ListAnalyzedResourcesResponse `object`: The response to the request.
  * analyzedResources **required**
    * items [AnalyzedResourceSummary](#analyzedresourcesummary)
  * nextToken

### ListAnalyzersRequest
* ListAnalyzersRequest `object`: Retrieves a list of analyzers.

### ListAnalyzersResponse
* ListAnalyzersResponse `object`: The response to the request.
  * analyzers **required**
    * items [AnalyzerSummary](#analyzersummary)
  * nextToken

### ListArchiveRulesRequest
* ListArchiveRulesRequest `object`: Retrieves a list of archive rules created for the specified analyzer.

### ListArchiveRulesResponse
* ListArchiveRulesResponse `object`: The response to the request.
  * archiveRules **required**
    * items [ArchiveRuleSummary](#archiverulesummary)
  * nextToken

### ListFindingsRequest
* ListFindingsRequest `object`: Retrieves a list of findings generated by the specified analyzer.
  * analyzerArn **required**
  * filter
  * maxResults
  * nextToken
  * sort
    * attributeName
    * orderBy

### ListFindingsResponse
* ListFindingsResponse `object`: The response to the request.
  * findings **required**
    * items [FindingSummary](#findingsummary)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`: Retrieves a list of tags applied to the specified resource.

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`: The response to the request.
  * tags

### Name
* Name `string`

### OrderBy
* OrderBy `string` (values: ASC, DESC)

### PrincipalMap
* PrincipalMap `object`

### ReasonCode
* ReasonCode `string` (values: AWS_SERVICE_ACCESS_DISABLED, DELEGATED_ADMINISTRATOR_DEREGISTERED, ORGANIZATION_DELETED, SERVICE_LINKED_ROLE_CREATION_FAILED)

### ResourceArn
* ResourceArn `string`

### ResourceNotFoundException


### ResourceType
* ResourceType `string` (values: AWS::S3::Bucket, AWS::IAM::Role, AWS::SQS::Queue, AWS::Lambda::Function, AWS::Lambda::LayerVersion, AWS::KMS::Key)

### ServiceQuotaExceededException


### SharedViaList
* SharedViaList `array`
  * items [String](#string)

### SortCriteria
* SortCriteria `object`: The criteria used to sort.
  * attributeName
  * orderBy

### StartResourceScanRequest
* StartResourceScanRequest `object`: Starts a scan of the policies applied to the specified resource.
  * analyzerArn **required**
  * resourceArn **required**

### StatusReason
* StatusReason `object`: Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the AWS organization.
  * code **required**

### String
* String `string`

### TagKeys
* TagKeys `array`
  * items [String](#string)

### TagResourceRequest
* TagResourceRequest `object`: Adds a tag to the specified resource.
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`: The response to the request.

### TagsMap
* TagsMap `object`

### ThrottlingException


### Timestamp
* Timestamp `string`

### Token
* Token `string`

### Type
* Type `string` (values: ACCOUNT, ORGANIZATION)

### UntagResourceRequest
* UntagResourceRequest `object`: Removes a tag from the specified resource.

### UntagResourceResponse
* UntagResourceResponse `object`: The response to the request.

### UpdateArchiveRuleRequest
* UpdateArchiveRuleRequest `object`: Updates the specified archive rule.
  * clientToken
  * filter **required**

### UpdateFindingsRequest
* UpdateFindingsRequest `object`: Updates findings with the new values provided in the request.
  * analyzerArn **required**
  * clientToken
  * ids
    * items [FindingId](#findingid)
  * resourceArn
  * status **required**

### ValidationException


### ValueList
* ValueList `array`
  * items [String](#string)


