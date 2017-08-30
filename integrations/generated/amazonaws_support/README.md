# @datafire/amazonaws_support

Client library for AWS Support

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_support
```

```js
let datafire = require('datafire');
let amazonaws_support = require('@datafire/amazonaws_support').create();

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

#### Parameters
* attachmentSetId (string)
* attachments (array) **required**

### AddCommunicationToCase



```js
amazonaws_support.AddCommunicationToCase({
  "communicationBody": ""
}, context)
```

#### Parameters
* attachmentSetId (string)
* caseId (string)
* ccEmailAddresses (array)
* communicationBody (string) **required**

### CreateCase



```js
amazonaws_support.CreateCase({
  "subject": "",
  "communicationBody": ""
}, context)
```

#### Parameters
* attachmentSetId (string)
* categoryCode (string)
* ccEmailAddresses (array)
* communicationBody (string) **required**
* issueType (string)
* language (string)
* serviceCode (string)
* severityCode (string)
* subject (string) **required**

### DescribeAttachment



```js
amazonaws_support.DescribeAttachment({
  "attachmentId": ""
}, context)
```

#### Parameters
* attachmentId (string) **required**

### DescribeCases



```js
amazonaws_support.DescribeCases({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* afterTime (string)
* beforeTime (string)
* caseIdList (array)
* displayId (string)
* includeCommunications (boolean)
* includeResolvedCases (boolean)
* language (string)
* maxResults (integer)
* nextToken (string)

### DescribeCommunications



```js
amazonaws_support.DescribeCommunications({
  "caseId": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* afterTime (string)
* beforeTime (string)
* caseId (string) **required**
* maxResults (integer)
* nextToken (string)

### DescribeServices



```js
amazonaws_support.DescribeServices({}, context)
```

#### Parameters
* language (string)
* serviceCodeList (array)

### DescribeSeverityLevels



```js
amazonaws_support.DescribeSeverityLevels({}, context)
```

#### Parameters
* language (string)

### DescribeTrustedAdvisorCheckRefreshStatuses



```js
amazonaws_support.DescribeTrustedAdvisorCheckRefreshStatuses({
  "checkIds": []
}, context)
```

#### Parameters
* checkIds (array) **required**

### DescribeTrustedAdvisorCheckResult



```js
amazonaws_support.DescribeTrustedAdvisorCheckResult({
  "checkId": ""
}, context)
```

#### Parameters
* checkId (string) **required**
* language (string)

### DescribeTrustedAdvisorCheckSummaries



```js
amazonaws_support.DescribeTrustedAdvisorCheckSummaries({
  "checkIds": []
}, context)
```

#### Parameters
* checkIds (array) **required**

### DescribeTrustedAdvisorChecks



```js
amazonaws_support.DescribeTrustedAdvisorChecks({
  "language": ""
}, context)
```

#### Parameters
* language (string) **required**

### RefreshTrustedAdvisorCheck



```js
amazonaws_support.RefreshTrustedAdvisorCheck({
  "checkId": ""
}, context)
```

#### Parameters
* checkId (string) **required**

### ResolveCase



```js
amazonaws_support.ResolveCase({}, context)
```

#### Parameters
* caseId (string)

