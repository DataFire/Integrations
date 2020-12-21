# @datafire/amazonaws_wellarchitected

Client library for AWS Well-Architected Tool

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_wellarchitected
```
```js
let amazonaws_wellarchitected = require('@datafire/amazonaws_wellarchitected').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Well-Architected Tool</fullname> <p>This is the <i>AWS Well-Architected Tool API Reference</i>.</p> <p>The AWS Well-Architected Tool API provides programmatic access to the <a href="http://aws.amazon.com/well-architected-tool">AWS Well-Architected Tool</a> in the <a href="https://console.aws.amazon.com/wellarchitected">AWS Management Console</a>.</p> <p> <b>Managing workloads:</b> </p> <ul> <li> <p> <a>CreateWorkload</a>: Define a new workload.</p> </li> <li> <p> <a>ListWorkloads</a>: List workloads.</p> </li> <li> <p> <a>GetWorkload</a>: Get the properties of a workload.</p> </li> <li> <p> <a>UpdateWorkload</a>: Update the properties of a workload.</p> </li> <li> <p> <a>DeleteWorkload</a>: Delete a workload.</p> </li> </ul> <p> <b>Managing milestones:</b> </p> <ul> <li> <p> <a>CreateMilestone</a>: Create a milestone.</p> </li> <li> <p> <a>ListMilestones</a>: List milestones.</p> </li> <li> <p> <a>GetMilestone</a>: Get the properties of a milestone.</p> </li> </ul> <p> <b>Managing lenses:</b> </p> <ul> <li> <p> <a>ListLenses</a>: List the available lenses.</p> </li> <li> <p> <a>AssociateLenses</a>: Add one or more lenses to a workload.</p> </li> <li> <p> <a>DisassociateLenses</a>: Remove one or more lenses from a workload.</p> </li> <li> <p> <a>ListNotifications</a>: List lens notifications for a workload.</p> </li> <li> <p> <a>GetLensVersionDifference</a>: Get the differences between the version of a lens used in a workload and the latest version.</p> </li> <li> <p> <a>UpgradeLensReview</a>: Upgrade a workload to use the latest version of a lens.</p> </li> </ul> <p> <b>Managing reviews:</b> </p> <ul> <li> <p> <a>ListLensReviews</a>: List reviews associated with a workload.</p> </li> <li> <p> <a>GetLensReview</a>: Get pillar and risk data associated with a workload review.</p> </li> <li> <p> <a>GetLensReviewReport</a>: Get the report associated with a workload review.</p> </li> <li> <p> <a>UpdateLensReview</a>: Update the notes associated with a workload review.</p> </li> <li> <p> <a>ListAnswers</a>: List the questions and answers in a workload review.</p> </li> <li> <p> <a>UpdateAnswer</a>: Update the answer to a specific question in a workload review.</p> </li> <li> <p> <a>ListLensReviewImprovements</a>: List the improvement plan associated with a workload review.</p> </li> </ul> <p> <b>Managing workload shares:</b> </p> <ul> <li> <p> <a>ListWorkloadShares</a>: List the workload shares associated with a workload.</p> </li> <li> <p> <a>CreateWorkloadShare</a>: Create a workload share.</p> </li> <li> <p> <a>UpdateWorkloadShare</a>: Update a workload share.</p> </li> <li> <p> <a>DeleteWorkloadShare</a>: Delete a workload share.</p> </li> </ul> <p> <b>Managing workload share invitations:</b> </p> <ul> <li> <p> <a>ListShareInvitations</a>: List workload share invitations.</p> </li> <li> <p> <a>UpdateShareInvitation</a>: Update a workload share invitation.</p> </li> </ul> <p>For information about the AWS Well-Architected Tool, see the <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">AWS Well-Architected Tool User Guide</a>.</p>

## Actions

### ListLenses



```js
amazonaws_wellarchitected.ListLenses({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListLensesOutput](#listlensesoutput)

### GetLensVersionDifference



```js
amazonaws_wellarchitected.GetLensVersionDifference({
  "LensAlias": "",
  "BaseLensVersion": ""
}, context)
```

#### Input
* input `object`
  * LensAlias **required** `string`
  * BaseLensVersion **required** `string`

#### Output
* output [GetLensVersionDifferenceOutput](#getlensversiondifferenceoutput)

### ListNotifications



```js
amazonaws_wellarchitected.ListNotifications({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to return for this request.
  * NextToken `string`: The token to use to retrieve the next set of results.
  * WorkloadId `string`: The ID assigned to the workload. This ID is unique within an AWS Region.

#### Output
* output [ListNotificationsOutput](#listnotificationsoutput)

### ListShareInvitations



```js
amazonaws_wellarchitected.ListShareInvitations({}, context)
```

#### Input
* input `object`
  * WorkloadNamePrefix `string`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListShareInvitationsOutput](#listshareinvitationsoutput)

### UpdateShareInvitation



```js
amazonaws_wellarchitected.UpdateShareInvitation({
  "ShareInvitationId": "",
  "ShareInvitationAction": ""
}, context)
```

#### Input
* input `object`
  * ShareInvitationId **required** `string`
  * ShareInvitationAction **required** `string` (values: ACCEPT, REJECT): Share invitation action taken by contributor.

#### Output
* output [UpdateShareInvitationOutput](#updateshareinvitationoutput)

### CreateWorkload



```js
amazonaws_wellarchitected.CreateWorkload({
  "WorkloadName": "",
  "Description": "",
  "Environment": "",
  "ReviewOwner": "",
  "Lenses": [],
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * AccountIds `array`: The list of AWS account IDs associated with the workload.
    * items [AwsAccountId](#awsaccountid)
  * ArchitecturalDesign `string`: The URL of the architectural design for the workload.
  * AwsRegions `array`: The list of AWS Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.
    * items [AwsRegion](#awsregion)
  * ClientRequestToken **required** `string`: <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned. </p> <important> <p>This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.</p> </important>
  * Description **required** `string`: The description for the workload.
  * Environment **required** `string` (values: PRODUCTION, PREPRODUCTION): The environment for the workload.
  * Industry `string`: The industry for the workload.
  * IndustryType `string`: <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
  * Lenses **required** `array`: The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.
    * items [LensAlias](#lensalias)
  * NonAwsRegions `array`:  The list of non-AWS Regions associated with the workload.
    * items [WorkloadNonAwsRegion](#workloadnonawsregion)
  * Notes `string`: The notes associated with the workload.
  * PillarPriorities `array`: The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.
    * items [PillarId](#pillarid)
  * ReviewOwner **required** `string`: The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
  * WorkloadName **required** `string`: <p>The name of the workload.</p> <p>The name must be unique within an account within a Region. Spaces and capitalization are ignored when checking for uniqueness.</p>

#### Output
* output [CreateWorkloadOutput](#createworkloadoutput)

### GetWorkload



```js
amazonaws_wellarchitected.GetWorkload({
  "WorkloadId": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`

#### Output
* output [GetWorkloadOutput](#getworkloadoutput)

### UpdateWorkload



```js
amazonaws_wellarchitected.UpdateWorkload({
  "WorkloadId": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * AccountIds `array`: The list of AWS account IDs associated with the workload.
    * items [AwsAccountId](#awsaccountid)
  * ArchitecturalDesign `string`: The URL of the architectural design for the workload.
  * AwsRegions `array`: The list of AWS Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.
    * items [AwsRegion](#awsregion)
  * Description `string`: The description for the workload.
  * Environment `string` (values: PRODUCTION, PREPRODUCTION): The environment for the workload.
  * ImprovementStatus `string` (values: NOT_APPLICABLE, NOT_STARTED, IN_PROGRESS, COMPLETE, RISK_ACKNOWLEDGED): The improvement status for a workload.
  * Industry `string`: The industry for the workload.
  * IndustryType `string`: <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
  * IsReviewOwnerUpdateAcknowledged `boolean`: <p>Flag indicating whether the workload owner has acknowledged that the <i>Review owner</i> field is required.</p> <p>If a <b>Review owner</b> is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</p>
  * NonAwsRegions `array`:  The list of non-AWS Regions associated with the workload.
    * items [WorkloadNonAwsRegion](#workloadnonawsregion)
  * Notes `string`: The notes associated with the workload.
  * PillarPriorities `array`: The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.
    * items [PillarId](#pillarid)
  * ReviewOwner `string`: The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
  * WorkloadName `string`: <p>The name of the workload.</p> <p>The name must be unique within an account within a Region. Spaces and capitalization are ignored when checking for uniqueness.</p>

#### Output
* output [UpdateWorkloadOutput](#updateworkloadoutput)

### DeleteWorkload



```js
amazonaws_wellarchitected.DeleteWorkload({
  "WorkloadId": "",
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * ClientRequestToken **required** `string`

#### Output
*Output schema unknown*

### AssociateLenses



```js
amazonaws_wellarchitected.AssociateLenses({
  "WorkloadId": "",
  "LensAliases": []
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAliases **required** `array`: <p>List of lens aliases to associate or disassociate with a workload.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
    * items [LensAlias](#lensalias)

#### Output
*Output schema unknown*

### DisassociateLenses



```js
amazonaws_wellarchitected.DisassociateLenses({
  "WorkloadId": "",
  "LensAliases": []
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAliases **required** `array`: <p>List of lens aliases to associate or disassociate with a workload.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
    * items [LensAlias](#lensalias)

#### Output
*Output schema unknown*

### ListLensReviews



```js
amazonaws_wellarchitected.ListLensReviews({
  "WorkloadId": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * MilestoneNumber `integer`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListLensReviewsOutput](#listlensreviewsoutput)

### GetLensReview



```js
amazonaws_wellarchitected.GetLensReview({
  "WorkloadId": "",
  "LensAlias": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAlias **required** `string`
  * MilestoneNumber `integer`

#### Output
* output [GetLensReviewOutput](#getlensreviewoutput)

### UpdateLensReview



```js
amazonaws_wellarchitected.UpdateLensReview({
  "WorkloadId": "",
  "LensAlias": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAlias **required** `string`
  * LensNotes `string`: The notes associated with the workload.
  * PillarNotes `object`: List of pillar notes of a lens review in a workload.

#### Output
* output [UpdateLensReviewOutput](#updatelensreviewoutput)

### ListAnswers



```js
amazonaws_wellarchitected.ListAnswers({
  "WorkloadId": "",
  "LensAlias": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAlias **required** `string`
  * PillarId `string`
  * MilestoneNumber `integer`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListAnswersOutput](#listanswersoutput)

### GetAnswer



```js
amazonaws_wellarchitected.GetAnswer({
  "WorkloadId": "",
  "LensAlias": "",
  "QuestionId": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAlias **required** `string`
  * QuestionId **required** `string`
  * MilestoneNumber `integer`

#### Output
* output [GetAnswerOutput](#getansweroutput)

### UpdateAnswer



```js
amazonaws_wellarchitected.UpdateAnswer({
  "WorkloadId": "",
  "LensAlias": "",
  "QuestionId": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAlias **required** `string`
  * QuestionId **required** `string`
  * IsApplicable `boolean`: Defines whether this question is applicable to a lens review.
  * Notes `string`: The notes associated with the workload.
  * SelectedChoices `array`: List of selected choice IDs in a question answer.
    * items [ChoiceId](#choiceid)

#### Output
* output [UpdateAnswerOutput](#updateansweroutput)

### ListLensReviewImprovements



```js
amazonaws_wellarchitected.ListLensReviewImprovements({
  "WorkloadId": "",
  "LensAlias": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAlias **required** `string`
  * PillarId `string`
  * MilestoneNumber `integer`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListLensReviewImprovementsOutput](#listlensreviewimprovementsoutput)

### GetLensReviewReport



```js
amazonaws_wellarchitected.GetLensReviewReport({
  "WorkloadId": "",
  "LensAlias": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAlias **required** `string`
  * MilestoneNumber `integer`

#### Output
* output [GetLensReviewReportOutput](#getlensreviewreportoutput)

### UpgradeLensReview



```js
amazonaws_wellarchitected.UpgradeLensReview({
  "WorkloadId": "",
  "LensAlias": "",
  "MilestoneName": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * LensAlias **required** `string`
  * ClientRequestToken `string`: <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned. </p> <important> <p>This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.</p> </important>
  * MilestoneName **required** `string`: <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>

#### Output
*Output schema unknown*

### CreateMilestone



```js
amazonaws_wellarchitected.CreateMilestone({
  "WorkloadId": "",
  "MilestoneName": "",
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * ClientRequestToken **required** `string`: <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned. </p> <important> <p>This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.</p> </important>
  * MilestoneName **required** `string`: <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>

#### Output
* output [CreateMilestoneOutput](#createmilestoneoutput)

### GetMilestone



```js
amazonaws_wellarchitected.GetMilestone({
  "WorkloadId": "",
  "MilestoneNumber": 0
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * MilestoneNumber **required** `integer`

#### Output
* output [GetMilestoneOutput](#getmilestoneoutput)

### ListMilestones



```js
amazonaws_wellarchitected.ListMilestones({
  "WorkloadId": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to return for this request.
  * NextToken `string`: The token to use to retrieve the next set of results.

#### Output
* output [ListMilestonesOutput](#listmilestonesoutput)

### ListWorkloadShares



```js
amazonaws_wellarchitected.ListWorkloadShares({
  "WorkloadId": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * SharedWithPrefix `string`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListWorkloadSharesOutput](#listworkloadsharesoutput)

### CreateWorkloadShare



```js
amazonaws_wellarchitected.CreateWorkloadShare({
  "WorkloadId": "",
  "SharedWith": "",
  "PermissionType": "",
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * WorkloadId **required** `string`
  * ClientRequestToken **required** `string`: <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned. </p> <important> <p>This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.</p> </important>
  * PermissionType **required** `string` (values: READONLY, CONTRIBUTOR): Permission granted on a workload share.
  * SharedWith **required** `string`: The AWS account ID or IAM role with which the workload is shared.

#### Output
* output [CreateWorkloadShareOutput](#createworkloadshareoutput)

### UpdateWorkloadShare



```js
amazonaws_wellarchitected.UpdateWorkloadShare({
  "ShareId": "",
  "WorkloadId": "",
  "PermissionType": ""
}, context)
```

#### Input
* input `object`
  * ShareId **required** `string`
  * WorkloadId **required** `string`
  * PermissionType **required** `string` (values: READONLY, CONTRIBUTOR): Permission granted on a workload share.

#### Output
* output [UpdateWorkloadShareOutput](#updateworkloadshareoutput)

### DeleteWorkloadShare



```js
amazonaws_wellarchitected.DeleteWorkloadShare({
  "ShareId": "",
  "WorkloadId": "",
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * ShareId **required** `string`
  * WorkloadId **required** `string`
  * ClientRequestToken **required** `string`

#### Output
*Output schema unknown*

### ListWorkloads



```js
amazonaws_wellarchitected.ListWorkloads({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to return for this request.
  * NextToken `string`: The token to use to retrieve the next set of results.
  * WorkloadNamePrefix `string`: An optional string added to the beginning of each workload name returned in the results.

#### Output
* output [ListWorkloadsOutput](#listworkloadsoutput)



## Definitions

### AccessDeniedException


### Answer
* Answer `object`: An answer of the question.
  * Choices [Choices](#choices)
  * HelpfulResourceUrl [HelpfulResourceUrl](#helpfulresourceurl)
  * ImprovementPlanUrl [ImprovementPlanUrl](#improvementplanurl)
  * IsApplicable [IsApplicable](#isapplicable)
  * Notes [Notes](#notes)
  * PillarId [PillarId](#pillarid)
  * QuestionDescription [QuestionDescription](#questiondescription)
  * QuestionId [QuestionId](#questionid)
  * QuestionTitle [QuestionTitle](#questiontitle)
  * Risk [Risk](#risk)
  * SelectedChoices [SelectedChoices](#selectedchoices)

### AnswerSummaries
* AnswerSummaries `array`: List of answer summaries of lens review in a workload.
  * items [AnswerSummary](#answersummary)

### AnswerSummary
* AnswerSummary `object`: An answer summary of a lens review in a workload.
  * Choices [Choices](#choices)
  * IsApplicable [IsApplicable](#isapplicable)
  * PillarId [PillarId](#pillarid)
  * QuestionId [QuestionId](#questionid)
  * QuestionTitle [QuestionTitle](#questiontitle)
  * Risk [Risk](#risk)
  * SelectedChoices [SelectedChoices](#selectedchoices)

### AssociateLensesInput
* AssociateLensesInput `object`: Input to associate lens reviews.
  * LensAliases **required** [LensAliases](#lensaliases)

### AwsAccountId
* AwsAccountId `string`: An AWS account ID.

### AwsRegion
* AwsRegion `string`: An AWS Region, for example, <code>us-west-2</code> or <code>ap-northeast-1</code>.

### Base64String
* Base64String `string`: <p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p>

### Choice
* Choice `object`: A choice available to answer question.
  * ChoiceId [ChoiceId](#choiceid)
  * Description [ChoiceDescription](#choicedescription)
  * Title [ChoiceTitle](#choicetitle)

### ChoiceDescription
* ChoiceDescription `string`: The description of a choice.

### ChoiceId
* ChoiceId `string`: The ID of a choice.

### ChoiceTitle
* ChoiceTitle `string`: The title of a choice.

### Choices
* Choices `array`: List of choices available for a question.
  * items [Choice](#choice)

### ClientRequestToken
* ClientRequestToken `string`: <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned. </p> <important> <p>This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.</p> </important>

### ConflictException


### Count
* Count `integer`: A non-negative integer that denotes how many.

### CreateMilestoneInput
* CreateMilestoneInput `object`: Input for milestone creation.
  * ClientRequestToken **required** [ClientRequestToken](#clientrequesttoken)
  * MilestoneName **required** [MilestoneName](#milestonename)

### CreateMilestoneOutput
* CreateMilestoneOutput `object`: Output of a create milestone call.
  * MilestoneNumber [MilestoneNumber](#milestonenumber)
  * WorkloadId [WorkloadId](#workloadid)

### CreateWorkloadInput
* CreateWorkloadInput `object`: Input for workload creation.
  * AccountIds [WorkloadAccountIds](#workloadaccountids)
  * ArchitecturalDesign [WorkloadArchitecturalDesign](#workloadarchitecturaldesign)
  * AwsRegions [WorkloadAwsRegions](#workloadawsregions)
  * ClientRequestToken **required** [ClientRequestToken](#clientrequesttoken)
  * Description **required** [WorkloadDescription](#workloaddescription)
  * Environment **required** [WorkloadEnvironment](#workloadenvironment)
  * Industry [WorkloadIndustry](#workloadindustry)
  * IndustryType [WorkloadIndustryType](#workloadindustrytype)
  * Lenses **required** [WorkloadLenses](#workloadlenses)
  * NonAwsRegions [WorkloadNonAwsRegions](#workloadnonawsregions)
  * Notes [Notes](#notes)
  * PillarPriorities [WorkloadPillarPriorities](#workloadpillarpriorities)
  * ReviewOwner **required** [WorkloadReviewOwner](#workloadreviewowner)
  * WorkloadName **required** [WorkloadName](#workloadname)

### CreateWorkloadOutput
* CreateWorkloadOutput `object`: Output of a create workload call.
  * WorkloadArn [WorkloadArn](#workloadarn)
  * WorkloadId [WorkloadId](#workloadid)

### CreateWorkloadShareInput
* CreateWorkloadShareInput `object`: Input for Create Workload Share
  * ClientRequestToken **required** [ClientRequestToken](#clientrequesttoken)
  * PermissionType **required** [PermissionType](#permissiontype)
  * SharedWith **required** [SharedWith](#sharedwith)

### CreateWorkloadShareOutput
* CreateWorkloadShareOutput `object`: Input for Create Workload Share
  * ShareId [ShareId](#shareid)
  * WorkloadId [WorkloadId](#workloadid)

### DeleteWorkloadInput
* DeleteWorkloadInput `object`: Input for workload deletion.

### DeleteWorkloadShareInput
* DeleteWorkloadShareInput `object`: Input for Delete Workload Share

### DifferenceStatus
* DifferenceStatus `string` (values: UPDATED, NEW, DELETED)

### DisassociateLensesInput
* DisassociateLensesInput `object`: Input to disassociate lens reviews.
  * LensAliases **required** [LensAliases](#lensaliases)

### GetAnswerInput
* GetAnswerInput `object`: Input to get answer.

### GetAnswerOutput
* GetAnswerOutput `object`: Output of a get answer call.
  * Answer [Answer](#answer)
  * LensAlias [LensAlias](#lensalias)
  * MilestoneNumber [MilestoneNumber](#milestonenumber)
  * WorkloadId [WorkloadId](#workloadid)

### GetLensReviewInput
* GetLensReviewInput `object`: Input to get lens review.

### GetLensReviewOutput
* GetLensReviewOutput `object`: Output of a get lens review call.
  * LensReview [LensReview](#lensreview)
  * MilestoneNumber [MilestoneNumber](#milestonenumber)
  * WorkloadId [WorkloadId](#workloadid)

### GetLensReviewReportInput
* GetLensReviewReportInput `object`: Input to get lens review report.

### GetLensReviewReportOutput
* GetLensReviewReportOutput `object`: Output of a get lens review report call.
  * LensReviewReport [LensReviewReport](#lensreviewreport)
  * MilestoneNumber [MilestoneNumber](#milestonenumber)
  * WorkloadId [WorkloadId](#workloadid)

### GetLensVersionDifferenceInput
* GetLensVersionDifferenceInput `object`

### GetLensVersionDifferenceOutput
* GetLensVersionDifferenceOutput `object`
  * BaseLensVersion
  * LatestLensVersion
  * LensAlias [LensAlias](#lensalias)
  * VersionDifferences [VersionDifferences](#versiondifferences)

### GetMilestoneInput
* GetMilestoneInput `object`: Input to get a milestone.

### GetMilestoneOutput
* GetMilestoneOutput `object`: Output of a get milestone call.
  * Milestone [Milestone](#milestone)
  * WorkloadId [WorkloadId](#workloadid)

### GetWorkloadInput
* GetWorkloadInput `object`: Input to get a workload.

### GetWorkloadOutput
* GetWorkloadOutput `object`: Output of a get workload call.
  * Workload [Workload](#workload)

### HelpfulResourceUrl
* HelpfulResourceUrl `string`: The helpful resource URL for a question.

### ImprovementPlanUrl
* ImprovementPlanUrl `string`: The improvement plan URL for a question.

### ImprovementSummaries
* ImprovementSummaries `array`: List of improvement summaries of lens review in a workload.
  * items [ImprovementSummary](#improvementsummary)

### ImprovementSummary
* ImprovementSummary `object`: An improvement summary of a lens review in a workload.
  * ImprovementPlanUrl [ImprovementPlanUrl](#improvementplanurl)
  * PillarId [PillarId](#pillarid)
  * QuestionId [QuestionId](#questionid)
  * QuestionTitle [QuestionTitle](#questiontitle)
  * Risk [Risk](#risk)

### InternalServerException


### IsApplicable
* IsApplicable `boolean`: Defines whether this question is applicable to a lens review.

### IsReviewOwnerUpdateAcknowledged
* IsReviewOwnerUpdateAcknowledged `boolean`

### LensAlias
* LensAlias `string`: <p>The alias of the lens, for example, <code>serverless</code>.</p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>

### LensAliases
* LensAliases `array`: <p>List of lens aliases to associate or disassociate with a workload.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
  * items [LensAlias](#lensalias)

### LensDescription
* LensDescription `string`: The description of the lens.

### LensName
* LensName `string`: The full name of the lens.

### LensReview
* LensReview `object`: A lens review of a question.
  * LensAlias [LensAlias](#lensalias)
  * LensName [LensName](#lensname)
  * LensStatus
  * LensVersion
  * NextToken [NextToken](#nexttoken)
  * Notes [Notes](#notes)
  * PillarReviewSummaries [PillarReviewSummaries](#pillarreviewsummaries)
  * RiskCounts [RiskCounts](#riskcounts)
  * UpdatedAt [Timestamp](#timestamp)

### LensReviewReport
* LensReviewReport `object`: A report of a lens review.
  * Base64String [Base64String](#base64string)
  * LensAlias [LensAlias](#lensalias)

### LensReviewSummaries
* LensReviewSummaries `array`: List of lens summaries of lens reviews of a workload.
  * items [LensReviewSummary](#lensreviewsummary)

### LensReviewSummary
* LensReviewSummary `object`: A lens review summary of a workload.
  * LensAlias [LensAlias](#lensalias)
  * LensName [LensName](#lensname)
  * LensStatus
  * LensVersion
  * RiskCounts [RiskCounts](#riskcounts)
  * UpdatedAt [Timestamp](#timestamp)

### LensStatus
* LensStatus `string` (values: CURRENT, NOT_CURRENT, DEPRECATED)

### LensSummaries
* LensSummaries `array`: List of lens summaries of available lenses.
  * items [LensSummary](#lenssummary)

### LensSummary
* LensSummary `object`: A lens summary of a lens.
  * Description [LensDescription](#lensdescription)
  * LensAlias [LensAlias](#lensalias)
  * LensName [LensName](#lensname)
  * LensVersion

### LensUpgradeSummary
* LensUpgradeSummary `object`: Lens upgrade summary return object.
  * CurrentLensVersion
  * LatestLensVersion
  * LensAlias [LensAlias](#lensalias)
  * WorkloadId [WorkloadId](#workloadid)
  * WorkloadName [WorkloadName](#workloadname)

### LensVersion
* LensVersion `string`

### ListAnswersInput
* ListAnswersInput `object`: Input to list answers.

### ListAnswersMaxResults
* ListAnswersMaxResults `integer`

### ListAnswersOutput
* ListAnswersOutput `object`: Output of a list answers call.
  * AnswerSummaries [AnswerSummaries](#answersummaries)
  * LensAlias [LensAlias](#lensalias)
  * MilestoneNumber [MilestoneNumber](#milestonenumber)
  * NextToken [NextToken](#nexttoken)
  * WorkloadId [WorkloadId](#workloadid)

### ListLensReviewImprovementsInput
* ListLensReviewImprovementsInput `object`: Input to list lens review improvements.

### ListLensReviewImprovementsMaxResults
* ListLensReviewImprovementsMaxResults `integer`

### ListLensReviewImprovementsOutput
* ListLensReviewImprovementsOutput `object`: Output of a list lens review improvements call.
  * ImprovementSummaries [ImprovementSummaries](#improvementsummaries)
  * LensAlias [LensAlias](#lensalias)
  * MilestoneNumber [MilestoneNumber](#milestonenumber)
  * NextToken [NextToken](#nexttoken)
  * WorkloadId [WorkloadId](#workloadid)

### ListLensReviewsInput
* ListLensReviewsInput `object`: Input to list lens reviews.

### ListLensReviewsOutput
* ListLensReviewsOutput `object`: Output of a list lens reviews call.
  * LensReviewSummaries [LensReviewSummaries](#lensreviewsummaries)
  * MilestoneNumber [MilestoneNumber](#milestonenumber)
  * NextToken [NextToken](#nexttoken)
  * WorkloadId [WorkloadId](#workloadid)

### ListLensesInput
* ListLensesInput `object`: Input to list lenses.

### ListLensesOutput
* ListLensesOutput `object`: Output of a list lenses call.
  * LensSummaries [LensSummaries](#lenssummaries)
  * NextToken [NextToken](#nexttoken)

### ListMilestonesInput
* ListMilestonesInput `object`: Input to list all milestones for a workload.
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListMilestonesOutput
* ListMilestonesOutput `object`: Output of a list milestones call.
  * MilestoneSummaries [MilestoneSummaries](#milestonesummaries)
  * NextToken [NextToken](#nexttoken)
  * WorkloadId [WorkloadId](#workloadid)

### ListNotificationsInput
* ListNotificationsInput `object`
  * MaxResults
  * NextToken [NextToken](#nexttoken)
  * WorkloadId [WorkloadId](#workloadid)

### ListNotificationsMaxResults
* ListNotificationsMaxResults `integer`

### ListNotificationsOutput
* ListNotificationsOutput `object`
  * NextToken [NextToken](#nexttoken)
  * NotificationSummaries
    * items [NotificationSummary](#notificationsummary)

### ListShareInvitationsInput
* ListShareInvitationsInput `object`: Input for List Share Invitations

### ListShareInvitationsMaxResults
* ListShareInvitationsMaxResults `integer`

### ListShareInvitationsOutput
* ListShareInvitationsOutput `object`: Input for List Share Invitations
  * NextToken [NextToken](#nexttoken)
  * ShareInvitationSummaries
    * items [ShareInvitationSummary](#shareinvitationsummary)

### ListWorkloadSharesInput
* ListWorkloadSharesInput `object`: Input for List Workload Share

### ListWorkloadSharesMaxResults
* ListWorkloadSharesMaxResults `integer`

### ListWorkloadSharesOutput
* ListWorkloadSharesOutput `object`: Input for List Workload Share
  * NextToken [NextToken](#nexttoken)
  * WorkloadId [WorkloadId](#workloadid)
  * WorkloadShareSummaries [WorkloadShareSummaries](#workloadsharesummaries)

### ListWorkloadsInput
* ListWorkloadsInput `object`: Input to list all workloads.
  * MaxResults
  * NextToken [NextToken](#nexttoken)
  * WorkloadNamePrefix [WorkloadNamePrefix](#workloadnameprefix)

### ListWorkloadsMaxResults
* ListWorkloadsMaxResults `integer`

### ListWorkloadsOutput
* ListWorkloadsOutput `object`: Output of a list workloads call.
  * NextToken [NextToken](#nexttoken)
  * WorkloadSummaries [WorkloadSummaries](#workloadsummaries)

### MaxResults
* MaxResults `integer`: The maximum number of results to return for this request.

### Milestone
* Milestone `object`: A milestone return object.
  * MilestoneName [MilestoneName](#milestonename)
  * MilestoneNumber [MilestoneNumber](#milestonenumber)
  * RecordedAt [Timestamp](#timestamp)
  * Workload [Workload](#workload)

### MilestoneName
* MilestoneName `string`: <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>

### MilestoneNumber
* MilestoneNumber `integer`: <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>

### MilestoneSummaries
* MilestoneSummaries `array`: A list of milestone summaries.
  * items [MilestoneSummary](#milestonesummary)

### MilestoneSummary
* MilestoneSummary `object`: A milestone summary return object.
  * MilestoneName [MilestoneName](#milestonename)
  * MilestoneNumber [MilestoneNumber](#milestonenumber)
  * RecordedAt [Timestamp](#timestamp)
  * WorkloadSummary [WorkloadSummary](#workloadsummary)

### NextToken
* NextToken `string`: The token to use to retrieve the next set of results.

### Notes
* Notes `string`: The notes associated with the workload.

### NotificationSummaries
* NotificationSummaries `array`
  * items [NotificationSummary](#notificationsummary)

### NotificationSummary
* NotificationSummary `object`: A notification summary return object.
  * LensUpgradeSummary
    * CurrentLensVersion
    * LatestLensVersion
    * LensAlias [LensAlias](#lensalias)
    * WorkloadId [WorkloadId](#workloadid)
    * WorkloadName [WorkloadName](#workloadname)
  * Type

### NotificationType
* NotificationType `string` (values: LENS_VERSION_UPGRADED, LENS_VERSION_DEPRECATED)

### PermissionType
* PermissionType `string` (values: READONLY, CONTRIBUTOR): Permission granted on a workload share.

### PillarDifference
* PillarDifference `object`: A pillar difference return object.
  * DifferenceStatus
  * PillarId [PillarId](#pillarid)
  * QuestionDifferences
    * items [QuestionDifference](#questiondifference)

### PillarDifferences
* PillarDifferences `array`
  * items [PillarDifference](#pillardifference)

### PillarId
* PillarId `string`: <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>

### PillarName
* PillarName `string`: The name of the pillar.

### PillarNotes
* PillarNotes `object`: List of pillar notes of a lens review in a workload.

### PillarReviewSummaries
* PillarReviewSummaries `array`: List of pillar review summaries of lens review in a workload.
  * items [PillarReviewSummary](#pillarreviewsummary)

### PillarReviewSummary
* PillarReviewSummary `object`: A pillar review summary of a lens review.
  * Notes [Notes](#notes)
  * PillarId [PillarId](#pillarid)
  * PillarName [PillarName](#pillarname)
  * RiskCounts [RiskCounts](#riskcounts)

### QuestionDescription
* QuestionDescription `string`: The description of the question.

### QuestionDifference
* QuestionDifference `object`: A question difference return object.
  * DifferenceStatus
  * QuestionId [QuestionId](#questionid)
  * QuestionTitle [QuestionTitle](#questiontitle)

### QuestionDifferences
* QuestionDifferences `array`
  * items [QuestionDifference](#questiondifference)

### QuestionId
* QuestionId `string`: The ID of the question.

### QuestionTitle
* QuestionTitle `string`: The title of the question.

### ResourceNotFoundException


### Risk
* Risk `string` (values: UNANSWERED, HIGH, MEDIUM, NONE, NOT_APPLICABLE): The risk for a given workload, lens review, pillar, or question.

### RiskCounts
* RiskCounts `object`: A map from risk names to the count of how questions have that rating.

### SelectedChoices
* SelectedChoices `array`: List of selected choice IDs in a question answer.
  * items [ChoiceId](#choiceid)

### ServiceQuotaExceededException


### ShareId
* ShareId `string`: The ID associated with the workload share.

### ShareInvitation
* ShareInvitation `object`: The share invitation.
  * ShareInvitationId
  * WorkloadId [WorkloadId](#workloadid)

### ShareInvitationAction
* ShareInvitationAction `string` (values: ACCEPT, REJECT): Share invitation action taken by contributor.

### ShareInvitationId
* ShareInvitationId `string`

### ShareInvitationSummaries
* ShareInvitationSummaries `array`
  * items [ShareInvitationSummary](#shareinvitationsummary)

### ShareInvitationSummary
* ShareInvitationSummary `object`: A share invitation summary return object.
  * PermissionType [PermissionType](#permissiontype)
  * ShareInvitationId
  * SharedBy [AwsAccountId](#awsaccountid)
  * SharedWith [SharedWith](#sharedwith)
  * WorkloadId [WorkloadId](#workloadid)
  * WorkloadName [WorkloadName](#workloadname)

### ShareStatus
* ShareStatus `string` (values: ACCEPTED, REJECTED, PENDING, REVOKED, EXPIRED): The status of a workload share.

### SharedWith
* SharedWith `string`: The AWS account ID or IAM role with which the workload is shared.

### SharedWithPrefix
* SharedWithPrefix `string`

### ThrottlingException


### Timestamp
* Timestamp `string`: The date and time recorded.

### UpdateAnswerInput
* UpdateAnswerInput `object`: Input to update answer.
  * IsApplicable [IsApplicable](#isapplicable)
  * Notes [Notes](#notes)
  * SelectedChoices [SelectedChoices](#selectedchoices)

### UpdateAnswerOutput
* UpdateAnswerOutput `object`: Output of a update answer call.
  * Answer [Answer](#answer)
  * LensAlias [LensAlias](#lensalias)
  * WorkloadId [WorkloadId](#workloadid)

### UpdateLensReviewInput
* UpdateLensReviewInput `object`: Input for update lens review.
  * LensNotes [Notes](#notes)
  * PillarNotes [PillarNotes](#pillarnotes)

### UpdateLensReviewOutput
* UpdateLensReviewOutput `object`: Output of a update lens review call.
  * LensReview [LensReview](#lensreview)
  * WorkloadId [WorkloadId](#workloadid)

### UpdateShareInvitationInput
* UpdateShareInvitationInput `object`: Input for Update Share Invitation
  * ShareInvitationAction **required** [ShareInvitationAction](#shareinvitationaction)

### UpdateShareInvitationOutput
* UpdateShareInvitationOutput `object`
  * ShareInvitation
    * ShareInvitationId
    * WorkloadId [WorkloadId](#workloadid)

### UpdateWorkloadInput
* UpdateWorkloadInput `object`: Input to update a workload.
  * AccountIds [WorkloadAccountIds](#workloadaccountids)
  * ArchitecturalDesign [WorkloadArchitecturalDesign](#workloadarchitecturaldesign)
  * AwsRegions [WorkloadAwsRegions](#workloadawsregions)
  * Description [WorkloadDescription](#workloaddescription)
  * Environment [WorkloadEnvironment](#workloadenvironment)
  * ImprovementStatus [WorkloadImprovementStatus](#workloadimprovementstatus)
  * Industry [WorkloadIndustry](#workloadindustry)
  * IndustryType [WorkloadIndustryType](#workloadindustrytype)
  * IsReviewOwnerUpdateAcknowledged
  * NonAwsRegions [WorkloadNonAwsRegions](#workloadnonawsregions)
  * Notes [Notes](#notes)
  * PillarPriorities [WorkloadPillarPriorities](#workloadpillarpriorities)
  * ReviewOwner [WorkloadReviewOwner](#workloadreviewowner)
  * WorkloadName [WorkloadName](#workloadname)

### UpdateWorkloadOutput
* UpdateWorkloadOutput `object`: Output of an update workload call.
  * Workload [Workload](#workload)

### UpdateWorkloadShareInput
* UpdateWorkloadShareInput `object`: Input for Update Workload Share
  * PermissionType **required** [PermissionType](#permissiontype)

### UpdateWorkloadShareOutput
* UpdateWorkloadShareOutput `object`: Input for Update Workload Share
  * WorkloadId [WorkloadId](#workloadid)
  * WorkloadShare [WorkloadShare](#workloadshare)

### UpgradeLensReviewInput
* UpgradeLensReviewInput `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * MilestoneName **required** [MilestoneName](#milestonename)

### ValidationException


### VersionDifferences
* VersionDifferences `object`: The differences between the base and latest versions of the lens.
  * PillarDifferences
    * items [PillarDifference](#pillardifference)

### Workload
* Workload `object`: A workload return object.
  * AccountIds [WorkloadAccountIds](#workloadaccountids)
  * ArchitecturalDesign [WorkloadArchitecturalDesign](#workloadarchitecturaldesign)
  * AwsRegions [WorkloadAwsRegions](#workloadawsregions)
  * Description [WorkloadDescription](#workloaddescription)
  * Environment [WorkloadEnvironment](#workloadenvironment)
  * ImprovementStatus [WorkloadImprovementStatus](#workloadimprovementstatus)
  * Industry [WorkloadIndustry](#workloadindustry)
  * IndustryType [WorkloadIndustryType](#workloadindustrytype)
  * IsReviewOwnerUpdateAcknowledged
  * Lenses [WorkloadLenses](#workloadlenses)
  * NonAwsRegions [WorkloadNonAwsRegions](#workloadnonawsregions)
  * Notes [Notes](#notes)
  * Owner [AwsAccountId](#awsaccountid)
  * PillarPriorities [WorkloadPillarPriorities](#workloadpillarpriorities)
  * ReviewOwner [WorkloadReviewOwner](#workloadreviewowner)
  * ReviewRestrictionDate [Timestamp](#timestamp)
  * RiskCounts [RiskCounts](#riskcounts)
  * ShareInvitationId
  * UpdatedAt [Timestamp](#timestamp)
  * WorkloadArn [WorkloadArn](#workloadarn)
  * WorkloadId [WorkloadId](#workloadid)
  * WorkloadName [WorkloadName](#workloadname)

### WorkloadAccountIds
* WorkloadAccountIds `array`: The list of AWS account IDs associated with the workload.
  * items [AwsAccountId](#awsaccountid)

### WorkloadArchitecturalDesign
* WorkloadArchitecturalDesign `string`: The URL of the architectural design for the workload.

### WorkloadArn
* WorkloadArn `string`: The ARN for the workload.

### WorkloadAwsRegions
* WorkloadAwsRegions `array`: The list of AWS Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.
  * items [AwsRegion](#awsregion)

### WorkloadDescription
* WorkloadDescription `string`: The description for the workload.

### WorkloadEnvironment
* WorkloadEnvironment `string` (values: PRODUCTION, PREPRODUCTION): The environment for the workload.

### WorkloadId
* WorkloadId `string`: The ID assigned to the workload. This ID is unique within an AWS Region.

### WorkloadImprovementStatus
* WorkloadImprovementStatus `string` (values: NOT_APPLICABLE, NOT_STARTED, IN_PROGRESS, COMPLETE, RISK_ACKNOWLEDGED): The improvement status for a workload.

### WorkloadIndustry
* WorkloadIndustry `string`: The industry for the workload.

### WorkloadIndustryType
* WorkloadIndustryType `string`: <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>

### WorkloadLenses
* WorkloadLenses `array`: The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.
  * items [LensAlias](#lensalias)

### WorkloadName
* WorkloadName `string`: <p>The name of the workload.</p> <p>The name must be unique within an account within a Region. Spaces and capitalization are ignored when checking for uniqueness.</p>

### WorkloadNamePrefix
* WorkloadNamePrefix `string`: An optional string added to the beginning of each workload name returned in the results.

### WorkloadNonAwsRegion
* WorkloadNonAwsRegion `string`

### WorkloadNonAwsRegions
* WorkloadNonAwsRegions `array`:  The list of non-AWS Regions associated with the workload.
  * items [WorkloadNonAwsRegion](#workloadnonawsregion)

### WorkloadPillarPriorities
* WorkloadPillarPriorities `array`: The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.
  * items [PillarId](#pillarid)

### WorkloadReviewOwner
* WorkloadReviewOwner `string`: The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.

### WorkloadShare
* WorkloadShare `object`: A workload share return object.
  * PermissionType [PermissionType](#permissiontype)
  * ShareId [ShareId](#shareid)
  * SharedBy [AwsAccountId](#awsaccountid)
  * SharedWith [SharedWith](#sharedwith)
  * Status [ShareStatus](#sharestatus)
  * WorkloadId [WorkloadId](#workloadid)
  * WorkloadName [WorkloadName](#workloadname)

### WorkloadShareSummaries
* WorkloadShareSummaries `array`: A list of workload share summaries.
  * items [WorkloadShareSummary](#workloadsharesummary)

### WorkloadShareSummary
* WorkloadShareSummary `object`: A workload share summary return object.
  * PermissionType [PermissionType](#permissiontype)
  * ShareId [ShareId](#shareid)
  * SharedWith [SharedWith](#sharedwith)
  * Status [ShareStatus](#sharestatus)

### WorkloadSummaries
* WorkloadSummaries `array`: A list of workload summaries.
  * items [WorkloadSummary](#workloadsummary)

### WorkloadSummary
* WorkloadSummary `object`: A workload summary return object.
  * ImprovementStatus [WorkloadImprovementStatus](#workloadimprovementstatus)
  * Lenses [WorkloadLenses](#workloadlenses)
  * Owner [AwsAccountId](#awsaccountid)
  * RiskCounts [RiskCounts](#riskcounts)
  * UpdatedAt [Timestamp](#timestamp)
  * WorkloadArn [WorkloadArn](#workloadarn)
  * WorkloadId [WorkloadId](#workloadid)
  * WorkloadName [WorkloadName](#workloadname)


