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

amazonaws_support.AddAttachmentsToSet({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS Support</fullname> <p>The AWS Support API reference is intended for programmers who need detailed information about the AWS Support operations and data types. This service enables you to manage your AWS Support cases programmatically. It uses HTTP methods that return results in JSON format.</p> <p>The AWS Support service also exposes a set of <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">Trusted Advisor</a> features. You can retrieve a list of checks and their descriptions, get check results, specify checks to refresh, and get the refresh status of checks. </p> <p>The following list describes the AWS Support case management operations:</p> <ul> <li> <p> <b>Service names, issue categories, and available severity levels. </b>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return AWS service names, service codes, service categories, and problem severity levels. You use these values when you call the <a>CreateCase</a> operation. </p> </li> <li> <p> <b>Case creation, case details, and case resolution.</b> The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations create AWS Support cases, retrieve information about cases, and resolve cases.</p> </li> <li> <p> <b>Case communication.</b> The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add communications and attachments to AWS Support cases. </p> </li> </ul> <p>The following list describes the operations available from the AWS Support service for Trusted Advisor:</p> <ul> <li> <p> <a>DescribeTrustedAdvisorChecks</a> returns the list of checks that run against your AWS resources.</p> </li> <li> <p>Using the <code>checkId</code> for a specific check returned by <a>DescribeTrustedAdvisorChecks</a>, you can call <a>DescribeTrustedAdvisorCheckResult</a> to obtain the results for the check you specified.</p> </li> <li> <p> <a>DescribeTrustedAdvisorCheckSummaries</a> returns summarized results for one or more Trusted Advisor checks.</p> </li> <li> <p> <a>RefreshTrustedAdvisorCheck</a> requests that Trusted Advisor rerun a specified check. </p> </li> <li> <p> <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> reports the refresh status of one or more checks. </p> </li> </ul> <p>For authentication of requests, AWS Support uses <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p> <p>See <a href="http://docs.aws.amazon.com/awssupport/latest/user/Welcome.html">About the AWS Support API</a> in the <i>AWS Support User Guide</i> for information about how to use this service to create and manage your support cases, and how to call Trusted Advisor for results of checks on your resources. </p>

## Actions

### AddAttachmentsToSet



```js
amazonaws_support.AddAttachmentsToSet({
  "attachments": []
}, context)
```

#### Input
* input `object`
  * attachmentSetId [AttachmentSetId](#attachmentsetid)
  * attachments **required** [Attachments](#attachments)

#### Output
* output [AddAttachmentsToSetResponse](#addattachmentstosetresponse)

### AddCommunicationToCase



```js
amazonaws_support.AddCommunicationToCase({
  "communicationBody": ""
}, context)
```

#### Input
* input `object`
  * attachmentSetId [AttachmentSetId](#attachmentsetid)
  * caseId [CaseId](#caseid)
  * ccEmailAddresses [CcEmailAddressList](#ccemailaddresslist)
  * communicationBody **required** [CommunicationBody](#communicationbody)

#### Output
* output [AddCommunicationToCaseResponse](#addcommunicationtocaseresponse)

### CreateCase



```js
amazonaws_support.CreateCase({
  "subject": "",
  "communicationBody": ""
}, context)
```

#### Input
* input `object`
  * attachmentSetId [AttachmentSetId](#attachmentsetid)
  * categoryCode [CategoryCode](#categorycode)
  * ccEmailAddresses [CcEmailAddressList](#ccemailaddresslist)
  * communicationBody **required** [CommunicationBody](#communicationbody)
  * issueType [IssueType](#issuetype)
  * language [Language](#language)
  * serviceCode [ServiceCode](#servicecode)
  * severityCode [SeverityCode](#severitycode)
  * subject **required** [Subject](#subject)

#### Output
* output [CreateCaseResponse](#createcaseresponse)

### DescribeAttachment



```js
amazonaws_support.DescribeAttachment({
  "attachmentId": ""
}, context)
```

#### Input
* input `object`
  * attachmentId **required** [AttachmentId](#attachmentid)

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
  * afterTime [AfterTime](#aftertime)
  * beforeTime [BeforeTime](#beforetime)
  * caseIdList [CaseIdList](#caseidlist)
  * displayId [DisplayId](#displayid)
  * includeCommunications [IncludeCommunications](#includecommunications)
  * includeResolvedCases [IncludeResolvedCases](#includeresolvedcases)
  * language [Language](#language)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeCasesResponse](#describecasesresponse)

### DescribeCommunications



```js
amazonaws_support.DescribeCommunications({
  "caseId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * afterTime [AfterTime](#aftertime)
  * beforeTime [BeforeTime](#beforetime)
  * caseId **required** [CaseId](#caseid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeCommunicationsResponse](#describecommunicationsresponse)

### DescribeServices



```js
amazonaws_support.DescribeServices({}, context)
```

#### Input
* input `object`
  * language [Language](#language)
  * serviceCodeList [ServiceCodeList](#servicecodelist)

#### Output
* output [DescribeServicesResponse](#describeservicesresponse)

### DescribeSeverityLevels



```js
amazonaws_support.DescribeSeverityLevels({}, context)
```

#### Input
* input `object`
  * language [Language](#language)

#### Output
* output [DescribeSeverityLevelsResponse](#describeseveritylevelsresponse)

### DescribeTrustedAdvisorCheckRefreshStatuses



```js
amazonaws_support.DescribeTrustedAdvisorCheckRefreshStatuses({
  "checkIds": []
}, context)
```

#### Input
* input `object`
  * checkIds **required** [StringList](#stringlist)

#### Output
* output [DescribeTrustedAdvisorCheckRefreshStatusesResponse](#describetrustedadvisorcheckrefreshstatusesresponse)

### DescribeTrustedAdvisorCheckResult



```js
amazonaws_support.DescribeTrustedAdvisorCheckResult({
  "checkId": ""
}, context)
```

#### Input
* input `object`
  * checkId **required** [String](#string)
  * language [String](#string)

#### Output
* output [DescribeTrustedAdvisorCheckResultResponse](#describetrustedadvisorcheckresultresponse)

### DescribeTrustedAdvisorCheckSummaries



```js
amazonaws_support.DescribeTrustedAdvisorCheckSummaries({
  "checkIds": []
}, context)
```

#### Input
* input `object`
  * checkIds **required** [StringList](#stringlist)

#### Output
* output [DescribeTrustedAdvisorCheckSummariesResponse](#describetrustedadvisorchecksummariesresponse)

### DescribeTrustedAdvisorChecks



```js
amazonaws_support.DescribeTrustedAdvisorChecks({
  "language": ""
}, context)
```

#### Input
* input `object`
  * language **required** [String](#string)

#### Output
* output [DescribeTrustedAdvisorChecksResponse](#describetrustedadvisorchecksresponse)

### RefreshTrustedAdvisorCheck



```js
amazonaws_support.RefreshTrustedAdvisorCheck({
  "checkId": ""
}, context)
```

#### Input
* input `object`
  * checkId **required** [String](#string)

#### Output
* output [RefreshTrustedAdvisorCheckResponse](#refreshtrustedadvisorcheckresponse)

### ResolveCase



```js
amazonaws_support.ResolveCase({}, context)
```

#### Input
* input `object`
  * caseId [CaseId](#caseid)

#### Output
* output [ResolveCaseResponse](#resolvecaseresponse)



## Definitions

### AddAttachmentsToSetRequest
* AddAttachmentsToSetRequest `object`: <p/>
  * attachmentSetId [AttachmentSetId](#attachmentsetid)
  * attachments **required** [Attachments](#attachments)

### AddAttachmentsToSetResponse
* AddAttachmentsToSetResponse `object`: The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.
  * attachmentSetId [AttachmentSetId](#attachmentsetid)
  * expiryTime [ExpiryTime](#expirytime)

### AddCommunicationToCaseRequest
* AddCommunicationToCaseRequest `object`: To be written.
  * attachmentSetId [AttachmentSetId](#attachmentsetid)
  * caseId [CaseId](#caseid)
  * ccEmailAddresses [CcEmailAddressList](#ccemailaddresslist)
  * communicationBody **required** [CommunicationBody](#communicationbody)

### AddCommunicationToCaseResponse
* AddCommunicationToCaseResponse `object`: The result of the <a>AddCommunicationToCase</a> operation.
  * result [Result](#result)

### AfterTime
* AfterTime `string`

### Attachment
* Attachment `object`: An attachment to a case communication. The attachment consists of the file name and the content of the file.
  * data [Data](#data)
  * fileName [FileName](#filename)

### AttachmentDetails
* AttachmentDetails `object`: The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.
  * attachmentId [AttachmentId](#attachmentid)
  * fileName [FileName](#filename)

### AttachmentId
* AttachmentId `string`

### AttachmentIdNotFound
* AttachmentIdNotFound `object`: An attachment with the specified ID could not be found.
  * message [ErrorMessage](#errormessage)

### AttachmentLimitExceeded
* AttachmentLimitExceeded `object`: The limit for the number of attachment sets created in a short period of time has been exceeded.
  * message [ErrorMessage](#errormessage)

### AttachmentSet
* AttachmentSet `array`
  * items [AttachmentDetails](#attachmentdetails)

### AttachmentSetExpired
* AttachmentSetExpired `object`: The expiration time of the attachment set has passed. The set expires 1 hour after it is created.
  * message [ErrorMessage](#errormessage)

### AttachmentSetId
* AttachmentSetId `string`

### AttachmentSetIdNotFound
* AttachmentSetIdNotFound `object`: An attachment set with the specified ID could not be found.
  * message [ErrorMessage](#errormessage)

### AttachmentSetSizeLimitExceeded
* AttachmentSetSizeLimitExceeded `object`: A limit for the size of an attachment set has been exceeded. The limits are 3 attachments and 5 MB per attachment.
  * message [ErrorMessage](#errormessage)

### Attachments
* Attachments `array`
  * items [Attachment](#attachment)

### BeforeTime
* BeforeTime `string`

### Boolean
* Boolean `boolean`

### CaseCreationLimitExceeded
* CaseCreationLimitExceeded `object`: The case creation limit for the account has been exceeded.
  * message [ErrorMessage](#errormessage)

### CaseDetails
* CaseDetails `object`: <p>A JSON-formatted object that contains the metadata for a support case. It is contained the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId.</b> The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode.</b> The category of problem for the AWS Support case. Corresponds to the CategoryCode values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId.</b> The identifier for the case on pages in the AWS Support Center.</p> </li> <li> <p> <b>language.</b> The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p> </li> <li> <p> <b>recentCommunications.</b> One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>nextToken.</b> A resumption point for pagination.</p> </li> <li> <p> <b>serviceCode.</b> The identifier for the AWS service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode. </b>The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>.</p> </li> <li> <p> <b>status.</b> The status of the case in the AWS Support Center.</p> </li> <li> <p> <b>subject.</b> The subject line of the case.</p> </li> <li> <p> <b>submittedBy.</b> The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated.</b> The time the case was created, in ISO-8601 format.</p> </li> </ul>
  * caseId [CaseId](#caseid)
  * categoryCode [CategoryCode](#categorycode)
  * ccEmailAddresses [CcEmailAddressList](#ccemailaddresslist)
  * displayId [DisplayId](#displayid)
  * language [Language](#language)
  * recentCommunications [RecentCaseCommunications](#recentcasecommunications)
  * serviceCode [ServiceCode](#servicecode)
  * severityCode [SeverityCode](#severitycode)
  * status [Status](#status)
  * subject [Subject](#subject)
  * submittedBy [SubmittedBy](#submittedby)
  * timeCreated [TimeCreated](#timecreated)

### CaseId
* CaseId `string`

### CaseIdList
* CaseIdList `array`
  * items [CaseId](#caseid)

### CaseIdNotFound
* CaseIdNotFound `object`: The requested <code>caseId</code> could not be located.
  * message [ErrorMessage](#errormessage)

### CaseList
* CaseList `array`
  * items [CaseDetails](#casedetails)

### CaseStatus
* CaseStatus `string`

### Category
* Category `object`: A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each AWS service.
  * code [CategoryCode](#categorycode)
  * name [CategoryName](#categoryname)

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
* Communication `object`: A communication associated with an AWS Support case. The communication consists of the case ID, the message body, attachment information, the account email address, and the date and time of the communication.
  * attachmentSet [AttachmentSet](#attachmentset)
  * body [CommunicationBody](#communicationbody)
  * caseId [CaseId](#caseid)
  * submittedBy [SubmittedBy](#submittedby)
  * timeCreated [TimeCreated](#timecreated)

### CommunicationBody
* CommunicationBody `string`

### CommunicationList
* CommunicationList `array`
  * items [Communication](#communication)

### CreateCaseRequest
* CreateCaseRequest `object`: <p/>
  * attachmentSetId [AttachmentSetId](#attachmentsetid)
  * categoryCode [CategoryCode](#categorycode)
  * ccEmailAddresses [CcEmailAddressList](#ccemailaddresslist)
  * communicationBody **required** [CommunicationBody](#communicationbody)
  * issueType [IssueType](#issuetype)
  * language [Language](#language)
  * serviceCode [ServiceCode](#servicecode)
  * severityCode [SeverityCode](#severitycode)
  * subject **required** [Subject](#subject)

### CreateCaseResponse
* CreateCaseResponse `object`: The AWS Support case ID returned by a successful completion of the <a>CreateCase</a> operation. 
  * caseId [CaseId](#caseid)

### Data
* Data `string`

### DescribeAttachmentLimitExceeded
* DescribeAttachmentLimitExceeded `object`: The limit for the number of <a>DescribeAttachment</a> requests in a short period of time has been exceeded.
  * message [ErrorMessage](#errormessage)

### DescribeAttachmentRequest
* DescribeAttachmentRequest `object`
  * attachmentId **required** [AttachmentId](#attachmentid)

### DescribeAttachmentResponse
* DescribeAttachmentResponse `object`: The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.
  * attachment [Attachment](#attachment)

### DescribeCasesRequest
* DescribeCasesRequest `object`: <p/>
  * afterTime [AfterTime](#aftertime)
  * beforeTime [BeforeTime](#beforetime)
  * caseIdList [CaseIdList](#caseidlist)
  * displayId [DisplayId](#displayid)
  * includeCommunications [IncludeCommunications](#includecommunications)
  * includeResolvedCases [IncludeResolvedCases](#includeresolvedcases)
  * language [Language](#language)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

### DescribeCasesResponse
* DescribeCasesResponse `object`: Returns an array of <a>CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.
  * cases [CaseList](#caselist)
  * nextToken [NextToken](#nexttoken)

### DescribeCommunicationsRequest
* DescribeCommunicationsRequest `object`: <p/>
  * afterTime [AfterTime](#aftertime)
  * beforeTime [BeforeTime](#beforetime)
  * caseId **required** [CaseId](#caseid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)

### DescribeCommunicationsResponse
* DescribeCommunicationsResponse `object`: The communications returned by the <a>DescribeCommunications</a> operation.
  * communications [CommunicationList](#communicationlist)
  * nextToken [NextToken](#nexttoken)

### DescribeServicesRequest
* DescribeServicesRequest `object`: <p/>
  * language [Language](#language)
  * serviceCodeList [ServiceCodeList](#servicecodelist)

### DescribeServicesResponse
* DescribeServicesResponse `object`: The list of AWS services returned by the <a>DescribeServices</a> operation.
  * services [ServiceList](#servicelist)

### DescribeSeverityLevelsRequest
* DescribeSeverityLevelsRequest `object`: <p/>
  * language [Language](#language)

### DescribeSeverityLevelsResponse
* DescribeSeverityLevelsResponse `object`: The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.
  * severityLevels [SeverityLevelsList](#severitylevelslist)

### DescribeTrustedAdvisorCheckRefreshStatusesRequest
* DescribeTrustedAdvisorCheckRefreshStatusesRequest `object`: <p/>
  * checkIds **required** [StringList](#stringlist)

### DescribeTrustedAdvisorCheckRefreshStatusesResponse
* DescribeTrustedAdvisorCheckRefreshStatusesResponse `object`: The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.
  * statuses **required** [TrustedAdvisorCheckRefreshStatusList](#trustedadvisorcheckrefreshstatuslist)

### DescribeTrustedAdvisorCheckResultRequest
* DescribeTrustedAdvisorCheckResultRequest `object`: <p/>
  * checkId **required** [String](#string)
  * language [String](#string)

### DescribeTrustedAdvisorCheckResultResponse
* DescribeTrustedAdvisorCheckResultResponse `object`: The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.
  * result [TrustedAdvisorCheckResult](#trustedadvisorcheckresult)

### DescribeTrustedAdvisorCheckSummariesRequest
* DescribeTrustedAdvisorCheckSummariesRequest `object`: <p/>
  * checkIds **required** [StringList](#stringlist)

### DescribeTrustedAdvisorCheckSummariesResponse
* DescribeTrustedAdvisorCheckSummariesResponse `object`: The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.
  * summaries **required** [TrustedAdvisorCheckSummaryList](#trustedadvisorchecksummarylist)

### DescribeTrustedAdvisorChecksRequest
* DescribeTrustedAdvisorChecksRequest `object`: <p/>
  * language **required** [String](#string)

### DescribeTrustedAdvisorChecksResponse
* DescribeTrustedAdvisorChecksResponse `object`: Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.
  * checks **required** [TrustedAdvisorCheckList](#trustedadvisorchecklist)

### DisplayId
* DisplayId `string`

### Double
* Double `number`

### ErrorMessage
* ErrorMessage `string`

### ExpiryTime
* ExpiryTime `string`

### FileName
* FileName `string`

### IncludeCommunications
* IncludeCommunications `boolean`

### IncludeResolvedCases
* IncludeResolvedCases `boolean`

### InternalServerError
* InternalServerError `object`: An internal server error occurred.
  * message [ErrorMessage](#errormessage)

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
  * communications [CommunicationList](#communicationlist)
  * nextToken [NextToken](#nexttoken)

### RefreshTrustedAdvisorCheckRequest
* RefreshTrustedAdvisorCheckRequest `object`: <p/>
  * checkId **required** [String](#string)

### RefreshTrustedAdvisorCheckResponse
* RefreshTrustedAdvisorCheckResponse `object`: The current refresh status of a Trusted Advisor check.
  * status **required** [TrustedAdvisorCheckRefreshStatus](#trustedadvisorcheckrefreshstatus)

### ResolveCaseRequest
* ResolveCaseRequest `object`: <p/>
  * caseId [CaseId](#caseid)

### ResolveCaseResponse
* ResolveCaseResponse `object`: The status of the case returned by the <a>ResolveCase</a> operation.
  * finalCaseStatus [CaseStatus](#casestatus)
  * initialCaseStatus [CaseStatus](#casestatus)

### Result
* Result `boolean`

### Service
* Service `object`: Information about an AWS service returned by the <a>DescribeServices</a> operation. 
  * categories [CategoryList](#categorylist)
  * code [ServiceCode](#servicecode)
  * name [ServiceName](#servicename)

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
* SeverityLevel `object`: A code and name pair that represent a severity level that can be applied to a support case.
  * code [SeverityLevelCode](#severitylevelcode)
  * name [SeverityLevelName](#severitylevelname)

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
  * costOptimizing [TrustedAdvisorCostOptimizingSummary](#trustedadvisorcostoptimizingsummary)

### TrustedAdvisorCheckDescription
* TrustedAdvisorCheckDescription `object`: The description and metadata for a Trusted Advisor check.
  * category **required** [String](#string)
  * description **required** [String](#string)
  * id **required** [String](#string)
  * metadata **required** [StringList](#stringlist)
  * name **required** [String](#string)

### TrustedAdvisorCheckList
* TrustedAdvisorCheckList `array`
  * items [TrustedAdvisorCheckDescription](#trustedadvisorcheckdescription)

### TrustedAdvisorCheckRefreshStatus
* TrustedAdvisorCheckRefreshStatus `object`: The refresh status of a Trusted Advisor check.
  * checkId **required** [String](#string)
  * millisUntilNextRefreshable **required** [Long](#long)
  * status **required** [String](#string)

### TrustedAdvisorCheckRefreshStatusList
* TrustedAdvisorCheckRefreshStatusList `array`
  * items [TrustedAdvisorCheckRefreshStatus](#trustedadvisorcheckrefreshstatus)

### TrustedAdvisorCheckResult
* TrustedAdvisorCheckResult `object`: The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.
  * categorySpecificSummary **required** [TrustedAdvisorCategorySpecificSummary](#trustedadvisorcategoryspecificsummary)
  * checkId **required** [String](#string)
  * flaggedResources **required** [TrustedAdvisorResourceDetailList](#trustedadvisorresourcedetaillist)
  * resourcesSummary **required** [TrustedAdvisorResourcesSummary](#trustedadvisorresourcessummary)
  * status **required** [String](#string)
  * timestamp **required** [String](#string)

### TrustedAdvisorCheckSummary
* TrustedAdvisorCheckSummary `object`: A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
  * categorySpecificSummary **required** [TrustedAdvisorCategorySpecificSummary](#trustedadvisorcategoryspecificsummary)
  * checkId **required** [String](#string)
  * hasFlaggedResources [Boolean](#boolean)
  * resourcesSummary **required** [TrustedAdvisorResourcesSummary](#trustedadvisorresourcessummary)
  * status **required** [String](#string)
  * timestamp **required** [String](#string)

### TrustedAdvisorCheckSummaryList
* TrustedAdvisorCheckSummaryList `array`
  * items [TrustedAdvisorCheckSummary](#trustedadvisorchecksummary)

### TrustedAdvisorCostOptimizingSummary
* TrustedAdvisorCostOptimizingSummary `object`: The estimated cost savings that might be realized if the recommended actions are taken.
  * estimatedMonthlySavings **required** [Double](#double)
  * estimatedPercentMonthlySavings **required** [Double](#double)

### TrustedAdvisorResourceDetail
* TrustedAdvisorResourceDetail `object`: Contains information about a resource identified by a Trusted Advisor check.
  * isSuppressed [Boolean](#boolean)
  * metadata **required** [StringList](#stringlist)
  * region [String](#string)
  * resourceId **required** [String](#string)
  * status **required** [String](#string)

### TrustedAdvisorResourceDetailList
* TrustedAdvisorResourceDetailList `array`
  * items [TrustedAdvisorResourceDetail](#trustedadvisorresourcedetail)

### TrustedAdvisorResourcesSummary
* TrustedAdvisorResourcesSummary `object`: Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. 
  * resourcesFlagged **required** [Long](#long)
  * resourcesIgnored **required** [Long](#long)
  * resourcesProcessed **required** [Long](#long)
  * resourcesSuppressed **required** [Long](#long)


