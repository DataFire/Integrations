# @datafire/amazonaws_support

Client library for AWS Support

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_support
```
```js
let amazonaws_support = require('@datafire/amazonaws_support').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Support</fullname> <p>The AWS Support API reference is intended for programmers who need detailed information about the AWS Support operations and data types. This service enables you to manage your AWS Support cases programmatically. It uses HTTP methods that return results in JSON format.</p> <note> <ul> <li> <p>You must have a Business or Enterprise support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p> </li> </ul> </note> <p>The AWS Support service also exposes a set of <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">AWS Trusted Advisor</a> features. You can retrieve a list of checks and their descriptions, get check results, specify checks to refresh, and get the refresh status of checks.</p> <p>The following list describes the AWS Support case management operations:</p> <ul> <li> <p> <b>Service names, issue categories, and available severity levels. </b>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return AWS service names, service codes, service categories, and problem severity levels. You use these values when you call the <a>CreateCase</a> operation.</p> </li> <li> <p> <b>Case creation, case details, and case resolution.</b> The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations create AWS Support cases, retrieve information about cases, and resolve cases.</p> </li> <li> <p> <b>Case communication.</b> The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add communications and attachments to AWS Support cases.</p> </li> </ul> <p>The following list describes the operations available from the AWS Support service for Trusted Advisor:</p> <ul> <li> <p> <a>DescribeTrustedAdvisorChecks</a> returns the list of checks that run against your AWS resources.</p> </li> <li> <p>Using the <code>checkId</code> for a specific check returned by <a>DescribeTrustedAdvisorChecks</a>, you can call <a>DescribeTrustedAdvisorCheckResult</a> to obtain the results for the check that you specified.</p> </li> <li> <p> <a>DescribeTrustedAdvisorCheckSummaries</a> returns summarized results for one or more Trusted Advisor checks.</p> </li> <li> <p> <a>RefreshTrustedAdvisorCheck</a> requests that Trusted Advisor rerun a specified check.</p> </li> <li> <p> <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> reports the refresh status of one or more checks.</p> </li> </ul> <p>For authentication of requests, AWS Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p> <p>See <a href="https://docs.aws.amazon.com/awssupport/latest/user/Welcome.html">About the AWS Support API</a> in the <i>AWS Support User Guide</i> for information about how to use this service to create and manage your support cases, and how to call Trusted Advisor for results of checks on your resources.</p>

## Actions

### AddAttachmentsToSet



```js
amazonaws_support.AddAttachmentsToSet({
  "attachments": null
}, context)
```

#### Input
* input `object`
  * attachmentSetId
  * attachments **required**
    * items [Attachment](#attachment)

#### Output
* output [AddAttachmentsToSetResponse](#addattachmentstosetresponse)

### AddCommunicationToCase



```js
amazonaws_support.AddCommunicationToCase({
  "communicationBody": null
}, context)
```

#### Input
* input `object`
  * attachmentSetId
  * caseId
  * ccEmailAddresses
    * items [CcEmailAddress](#ccemailaddress)
  * communicationBody **required**

#### Output
* output [AddCommunicationToCaseResponse](#addcommunicationtocaseresponse)

### CreateCase



```js
amazonaws_support.CreateCase({
  "subject": null,
  "communicationBody": null
}, context)
```

#### Input
* input `object`
  * attachmentSetId
  * categoryCode
  * ccEmailAddresses
    * items [CcEmailAddress](#ccemailaddress)
  * communicationBody **required**
  * issueType
  * language
  * serviceCode
  * severityCode
  * subject **required**

#### Output
* output [CreateCaseResponse](#createcaseresponse)

### DescribeAttachment



```js
amazonaws_support.DescribeAttachment({
  "attachmentId": null
}, context)
```

#### Input
* input `object`
  * attachmentId **required**

#### Output
* output [DescribeAttachmentResponse](#describeattachmentresponse)

### DescribeCases



```js
amazonaws_support.DescribeCases({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * afterTime
  * beforeTime
  * caseIdList
    * items [CaseId](#caseid)
  * displayId
  * includeCommunications
  * includeResolvedCases
  * language
  * maxResults
  * nextToken

#### Output
* output [DescribeCasesResponse](#describecasesresponse)

### DescribeCommunications



```js
amazonaws_support.DescribeCommunications({
  "caseId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * afterTime
  * beforeTime
  * caseId **required**
  * maxResults
  * nextToken

#### Output
* output [DescribeCommunicationsResponse](#describecommunicationsresponse)

### DescribeServices



```js
amazonaws_support.DescribeServices({}, context)
```

#### Input
* input `object`
  * language
  * serviceCodeList
    * items [ServiceCode](#servicecode)

#### Output
* output [DescribeServicesResponse](#describeservicesresponse)

### DescribeSeverityLevels



```js
amazonaws_support.DescribeSeverityLevels({}, context)
```

#### Input
* input `object`
  * language

#### Output
* output [DescribeSeverityLevelsResponse](#describeseveritylevelsresponse)

### DescribeTrustedAdvisorCheckRefreshStatuses



```js
amazonaws_support.DescribeTrustedAdvisorCheckRefreshStatuses({
  "checkIds": null
}, context)
```

#### Input
* input `object`
  * checkIds **required**
    * items [String](#string)

#### Output
* output [DescribeTrustedAdvisorCheckRefreshStatusesResponse](#describetrustedadvisorcheckrefreshstatusesresponse)

### DescribeTrustedAdvisorCheckResult



```js
amazonaws_support.DescribeTrustedAdvisorCheckResult({
  "checkId": null
}, context)
```

#### Input
* input `object`
  * checkId **required**
  * language

#### Output
* output [DescribeTrustedAdvisorCheckResultResponse](#describetrustedadvisorcheckresultresponse)

### DescribeTrustedAdvisorCheckSummaries



```js
amazonaws_support.DescribeTrustedAdvisorCheckSummaries({
  "checkIds": null
}, context)
```

#### Input
* input `object`
  * checkIds **required**
    * items [String](#string)

#### Output
* output [DescribeTrustedAdvisorCheckSummariesResponse](#describetrustedadvisorchecksummariesresponse)

### DescribeTrustedAdvisorChecks



```js
amazonaws_support.DescribeTrustedAdvisorChecks({
  "language": null
}, context)
```

#### Input
* input `object`
  * language **required**

#### Output
* output [DescribeTrustedAdvisorChecksResponse](#describetrustedadvisorchecksresponse)

### RefreshTrustedAdvisorCheck



```js
amazonaws_support.RefreshTrustedAdvisorCheck({
  "checkId": null
}, context)
```

#### Input
* input `object`
  * checkId **required**

#### Output
* output [RefreshTrustedAdvisorCheckResponse](#refreshtrustedadvisorcheckresponse)

### ResolveCase



```js
amazonaws_support.ResolveCase({}, context)
```

#### Input
* input `object`
  * caseId

#### Output
* output [ResolveCaseResponse](#resolvecaseresponse)



## Definitions

### AddAttachmentsToSetRequest
* AddAttachmentsToSetRequest `object`
  * attachmentSetId
  * attachments **required**
    * items [Attachment](#attachment)

### AddAttachmentsToSetResponse
* AddAttachmentsToSetResponse `object`: The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.
  * attachmentSetId
  * expiryTime

### AddCommunicationToCaseRequest
* AddCommunicationToCaseRequest `object`
  * attachmentSetId
  * caseId
  * ccEmailAddresses
    * items [CcEmailAddress](#ccemailaddress)
  * communicationBody **required**

### AddCommunicationToCaseResponse
* AddCommunicationToCaseResponse `object`: The result of the <a>AddCommunicationToCase</a> operation.
  * result

### AfterTime
* AfterTime `string`

### Attachment
* Attachment `object`: An attachment to a case communication. The attachment consists of the file name and the content of the file.
  * data
  * fileName

### AttachmentDetails
* AttachmentDetails `object`: The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.
  * attachmentId
  * fileName

### AttachmentId
* AttachmentId `string`

### AttachmentIdNotFound


### AttachmentLimitExceeded


### AttachmentSet
* AttachmentSet `array`
  * items [AttachmentDetails](#attachmentdetails)

### AttachmentSetExpired


### AttachmentSetId
* AttachmentSetId `string`

### AttachmentSetIdNotFound


### AttachmentSetSizeLimitExceeded


### Attachments
* Attachments `array`
  * items [Attachment](#attachment)

### BeforeTime
* BeforeTime `string`

### Boolean
* Boolean `boolean`

### CaseCreationLimitExceeded


### CaseDetails
* CaseDetails `object`: <p>A JSON-formatted object that contains the metadata for a support case. It is contained in the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId.</b> The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode.</b> The category of problem for the AWS Support case. Corresponds to the CategoryCode values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId.</b> The identifier for the case on pages in the AWS Support Center.</p> </li> <li> <p> <b>language.</b> The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p> </li> <li> <p> <b>nextToken.</b> A resumption point for pagination.</p> </li> <li> <p> <b>recentCommunications.</b> One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>serviceCode.</b> The identifier for the AWS service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode.</b> The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status.</b> The status of the case in the AWS Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject.</b> The subject line of the case.</p> </li> <li> <p> <b>submittedBy.</b> The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated.</b> The time the case was created, in ISO-8601 format.</p> </li> </ul>
  * caseId
  * categoryCode
  * ccEmailAddresses
    * items [CcEmailAddress](#ccemailaddress)
  * displayId
  * language
  * recentCommunications
    * communications
      * items [Communication](#communication)
    * nextToken
  * serviceCode
  * severityCode
  * status
  * subject
  * submittedBy
  * timeCreated

### CaseId
* CaseId `string`

### CaseIdList
* CaseIdList `array`
  * items [CaseId](#caseid)

### CaseIdNotFound


### CaseList
* CaseList `array`
  * items [CaseDetails](#casedetails)

### CaseStatus
* CaseStatus `string`

### Category
* Category `object`: A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each AWS service.
  * code
  * name

### CategoryCode
* CategoryCode `string`

### CategoryList
* CategoryList `array`
  * items [Category](#category)

### CategoryName
* CategoryName `string`

### CcEmailAddress
* CcEmailAddress `string`

### CcEmailAddressList
* CcEmailAddressList `array`
  * items [CcEmailAddress](#ccemailaddress)

### Communication
* Communication `object`: A communication associated with an AWS Support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.
  * attachmentSet
    * items [AttachmentDetails](#attachmentdetails)
  * body
  * caseId
  * submittedBy
  * timeCreated

### CommunicationBody
* CommunicationBody `string`

### CommunicationList
* CommunicationList `array`
  * items [Communication](#communication)

### CreateCaseRequest
* CreateCaseRequest `object`
  * attachmentSetId
  * categoryCode
  * ccEmailAddresses
    * items [CcEmailAddress](#ccemailaddress)
  * communicationBody **required**
  * issueType
  * language
  * serviceCode
  * severityCode
  * subject **required**

### CreateCaseResponse
* CreateCaseResponse `object`: The AWS Support case ID returned by a successful completion of the <a>CreateCase</a> operation.
  * caseId

### Data
* Data `string`

### DescribeAttachmentLimitExceeded


### DescribeAttachmentRequest
* DescribeAttachmentRequest `object`
  * attachmentId **required**

### DescribeAttachmentResponse
* DescribeAttachmentResponse `object`: The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.
  * attachment
    * data
    * fileName

### DescribeCasesRequest
* DescribeCasesRequest `object`
  * afterTime
  * beforeTime
  * caseIdList
    * items [CaseId](#caseid)
  * displayId
  * includeCommunications
  * includeResolvedCases
  * language
  * maxResults
  * nextToken

### DescribeCasesResponse
* DescribeCasesResponse `object`: Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.
  * cases
    * items [CaseDetails](#casedetails)
  * nextToken

### DescribeCommunicationsRequest
* DescribeCommunicationsRequest `object`
  * afterTime
  * beforeTime
  * caseId **required**
  * maxResults
  * nextToken

### DescribeCommunicationsResponse
* DescribeCommunicationsResponse `object`: The communications returned by the <a>DescribeCommunications</a> operation.
  * communications
    * items [Communication](#communication)
  * nextToken

### DescribeServicesRequest
* DescribeServicesRequest `object`
  * language
  * serviceCodeList
    * items [ServiceCode](#servicecode)

### DescribeServicesResponse
* DescribeServicesResponse `object`: The list of AWS services returned by the <a>DescribeServices</a> operation.
  * services
    * items [Service](#service)

### DescribeSeverityLevelsRequest
* DescribeSeverityLevelsRequest `object`
  * language

### DescribeSeverityLevelsResponse
* DescribeSeverityLevelsResponse `object`: The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.
  * severityLevels
    * items [SeverityLevel](#severitylevel)

### DescribeTrustedAdvisorCheckRefreshStatusesRequest
* DescribeTrustedAdvisorCheckRefreshStatusesRequest `object`
  * checkIds **required**
    * items [String](#string)

### DescribeTrustedAdvisorCheckRefreshStatusesResponse
* DescribeTrustedAdvisorCheckRefreshStatusesResponse `object`: The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.
  * statuses **required**
    * items [TrustedAdvisorCheckRefreshStatus](#trustedadvisorcheckrefreshstatus)

### DescribeTrustedAdvisorCheckResultRequest
* DescribeTrustedAdvisorCheckResultRequest `object`: <p/>
  * checkId **required**
  * language

### DescribeTrustedAdvisorCheckResultResponse
* DescribeTrustedAdvisorCheckResultResponse `object`: The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.
  * result
    * categorySpecificSummary **required**
      * costOptimizing
        * estimatedMonthlySavings **required**
        * estimatedPercentMonthlySavings **required**
    * checkId **required**
    * flaggedResources **required**
      * items [TrustedAdvisorResourceDetail](#trustedadvisorresourcedetail)
    * resourcesSummary **required** [TrustedAdvisorResourcesSummary](#trustedadvisorresourcessummary)
    * status **required**
    * timestamp **required**

### DescribeTrustedAdvisorCheckSummariesRequest
* DescribeTrustedAdvisorCheckSummariesRequest `object`
  * checkIds **required**
    * items [String](#string)

### DescribeTrustedAdvisorCheckSummariesResponse
* DescribeTrustedAdvisorCheckSummariesResponse `object`: The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.
  * summaries **required**
    * items [TrustedAdvisorCheckSummary](#trustedadvisorchecksummary)

### DescribeTrustedAdvisorChecksRequest
* DescribeTrustedAdvisorChecksRequest `object`
  * language **required**

### DescribeTrustedAdvisorChecksResponse
* DescribeTrustedAdvisorChecksResponse `object`: Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.
  * checks **required**
    * items [TrustedAdvisorCheckDescription](#trustedadvisorcheckdescription)

### DisplayId
* DisplayId `string`

### Double
* Double `number`

### ExpiryTime
* ExpiryTime `string`

### FileName
* FileName `string`

### IncludeCommunications
* IncludeCommunications `boolean`

### IncludeResolvedCases
* IncludeResolvedCases `boolean`

### InternalServerError


### IssueType
* IssueType `string`

### Language
* Language `string`

### Long
* Long `integer`

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### RecentCaseCommunications
* RecentCaseCommunications `object`: The five most recent communications associated with the case.
  * communications
    * items [Communication](#communication)
  * nextToken

### RefreshTrustedAdvisorCheckRequest
* RefreshTrustedAdvisorCheckRequest `object`: <p/>
  * checkId **required**

### RefreshTrustedAdvisorCheckResponse
* RefreshTrustedAdvisorCheckResponse `object`: The current refresh status of a Trusted Advisor check.
  * status **required**
    * checkId **required**
    * millisUntilNextRefreshable **required**
    * status **required**

### ResolveCaseRequest
* ResolveCaseRequest `object`
  * caseId

### ResolveCaseResponse
* ResolveCaseResponse `object`: The status of the case returned by the <a>ResolveCase</a> operation.
  * finalCaseStatus
  * initialCaseStatus

### Result
* Result `boolean`

### Service
* Service `object`: Information about an AWS service returned by the <a>DescribeServices</a> operation.
  * categories
    * items [Category](#category)
  * code
  * name

### ServiceCode
* ServiceCode `string`

### ServiceCodeList
* ServiceCodeList `array`
  * items [ServiceCode](#servicecode)

### ServiceList
* ServiceList `array`
  * items [Service](#service)

### ServiceName
* ServiceName `string`

### SeverityCode
* SeverityCode `string`

### SeverityLevel
* SeverityLevel `object`: A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a severity</a> in the <i>AWS Support User Guide</i>.
  * code
  * name

### SeverityLevelCode
* SeverityLevelCode `string`

### SeverityLevelName
* SeverityLevelName `string`

### SeverityLevelsList
* SeverityLevelsList `array`
  * items [SeverityLevel](#severitylevel)

### Status
* Status `string`

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### Subject
* Subject `string`

### SubmittedBy
* SubmittedBy `string`

### TimeCreated
* TimeCreated `string`

### TrustedAdvisorCategorySpecificSummary
* TrustedAdvisorCategorySpecificSummary `object`: The container for summary information that relates to the category of the Trusted Advisor check.
  * costOptimizing
    * estimatedMonthlySavings **required**
    * estimatedPercentMonthlySavings **required**

### TrustedAdvisorCheckDescription
* TrustedAdvisorCheckDescription `object`: The description and metadata for a Trusted Advisor check.
  * category **required**
  * description **required**
  * id **required**
  * metadata **required**
    * items [String](#string)
  * name **required**

### TrustedAdvisorCheckList
* TrustedAdvisorCheckList `array`
  * items [TrustedAdvisorCheckDescription](#trustedadvisorcheckdescription)

### TrustedAdvisorCheckRefreshStatus
* TrustedAdvisorCheckRefreshStatus `object`: The refresh status of a Trusted Advisor check.
  * checkId **required**
  * millisUntilNextRefreshable **required**
  * status **required**

### TrustedAdvisorCheckRefreshStatusList
* TrustedAdvisorCheckRefreshStatusList `array`
  * items [TrustedAdvisorCheckRefreshStatus](#trustedadvisorcheckrefreshstatus)

### TrustedAdvisorCheckResult
* TrustedAdvisorCheckResult `object`: The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.
  * categorySpecificSummary **required**
    * costOptimizing
      * estimatedMonthlySavings **required**
      * estimatedPercentMonthlySavings **required**
  * checkId **required**
  * flaggedResources **required**
    * items [TrustedAdvisorResourceDetail](#trustedadvisorresourcedetail)
  * resourcesSummary **required** [TrustedAdvisorResourcesSummary](#trustedadvisorresourcessummary)
  * status **required**
  * timestamp **required**

### TrustedAdvisorCheckSummary
* TrustedAdvisorCheckSummary `object`: A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
  * categorySpecificSummary **required**
    * costOptimizing
      * estimatedMonthlySavings **required**
      * estimatedPercentMonthlySavings **required**
  * checkId **required**
  * hasFlaggedResources
  * resourcesSummary **required** [TrustedAdvisorResourcesSummary](#trustedadvisorresourcessummary)
  * status **required**
  * timestamp **required**

### TrustedAdvisorCheckSummaryList
* TrustedAdvisorCheckSummaryList `array`
  * items [TrustedAdvisorCheckSummary](#trustedadvisorchecksummary)

### TrustedAdvisorCostOptimizingSummary
* TrustedAdvisorCostOptimizingSummary `object`: The estimated cost savings that might be realized if the recommended operations are taken.
  * estimatedMonthlySavings **required**
  * estimatedPercentMonthlySavings **required**

### TrustedAdvisorResourceDetail
* TrustedAdvisorResourceDetail `object`: Contains information about a resource identified by a Trusted Advisor check.
  * isSuppressed
  * metadata **required**
    * items [String](#string)
  * region
  * resourceId **required**
  * status **required**

### TrustedAdvisorResourceDetailList
* TrustedAdvisorResourceDetailList `array`
  * items [TrustedAdvisorResourceDetail](#trustedadvisorresourcedetail)

### TrustedAdvisorResourcesSummary
* TrustedAdvisorResourcesSummary `object`: Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
  * resourcesFlagged **required**
  * resourcesIgnored **required**
  * resourcesProcessed **required**
  * resourcesSuppressed **required**


