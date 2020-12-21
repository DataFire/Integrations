# @datafire/amazonaws_mturk_requester

Client library for Amazon Mechanical Turk

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mturk_requester
```
```js
let amazonaws_mturk_requester = require('@datafire/amazonaws_mturk_requester').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Mechanical Turk API Reference</fullname>

## Actions

### AcceptQualificationRequest



```js
amazonaws_mturk_requester.AcceptQualificationRequest({
  "QualificationRequestId": null
}, context)
```

#### Input
* input `object`
  * IntegerValue
  * QualificationRequestId **required**

#### Output
* output [AcceptQualificationRequestResponse](#acceptqualificationrequestresponse)

### ApproveAssignment



```js
amazonaws_mturk_requester.ApproveAssignment({
  "AssignmentId": null
}, context)
```

#### Input
* input `object`
  * AssignmentId **required**
  * OverrideRejection
  * RequesterFeedback

#### Output
* output [ApproveAssignmentResponse](#approveassignmentresponse)

### AssociateQualificationWithWorker



```js
amazonaws_mturk_requester.AssociateQualificationWithWorker({
  "QualificationTypeId": null,
  "WorkerId": null
}, context)
```

#### Input
* input `object`
  * IntegerValue
  * QualificationTypeId **required**
  * SendNotification
  * WorkerId **required**

#### Output
* output [AssociateQualificationWithWorkerResponse](#associatequalificationwithworkerresponse)

### CreateAdditionalAssignmentsForHIT



```js
amazonaws_mturk_requester.CreateAdditionalAssignmentsForHIT({
  "HITId": null,
  "NumberOfAdditionalAssignments": null
}, context)
```

#### Input
* input `object`
  * HITId **required**
  * NumberOfAdditionalAssignments **required**
  * UniqueRequestToken

#### Output
* output [CreateAdditionalAssignmentsForHITResponse](#createadditionalassignmentsforhitresponse)

### CreateHIT



```js
amazonaws_mturk_requester.CreateHIT({
  "LifetimeInSeconds": null,
  "AssignmentDurationInSeconds": null,
  "Reward": null,
  "Title": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * AssignmentDurationInSeconds **required**
  * AssignmentReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * AutoApprovalDelayInSeconds
  * Description **required**
  * HITLayoutId
  * HITLayoutParameters
    * items [HITLayoutParameter](#hitlayoutparameter)
  * HITReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * Keywords
  * LifetimeInSeconds **required**
  * MaxAssignments
  * QualificationRequirements
    * items [QualificationRequirement](#qualificationrequirement)
  * Question
  * RequesterAnnotation
  * Reward **required**
  * Title **required**
  * UniqueRequestToken

#### Output
* output [CreateHITResponse](#createhitresponse)

### CreateHITType



```js
amazonaws_mturk_requester.CreateHITType({
  "AssignmentDurationInSeconds": null,
  "Reward": null,
  "Title": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * AssignmentDurationInSeconds **required**
  * AutoApprovalDelayInSeconds
  * Description **required**
  * Keywords
  * QualificationRequirements
    * items [QualificationRequirement](#qualificationrequirement)
  * Reward **required**
  * Title **required**

#### Output
* output [CreateHITTypeResponse](#createhittyperesponse)

### CreateHITWithHITType



```js
amazonaws_mturk_requester.CreateHITWithHITType({
  "HITTypeId": null,
  "LifetimeInSeconds": null
}, context)
```

#### Input
* input `object`
  * AssignmentReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * HITLayoutId
  * HITLayoutParameters
    * items [HITLayoutParameter](#hitlayoutparameter)
  * HITReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * HITTypeId **required**
  * LifetimeInSeconds **required**
  * MaxAssignments
  * Question
  * RequesterAnnotation
  * UniqueRequestToken

#### Output
* output [CreateHITWithHITTypeResponse](#createhitwithhittyperesponse)

### CreateQualificationType



```js
amazonaws_mturk_requester.CreateQualificationType({
  "Name": null,
  "Description": null,
  "QualificationTypeStatus": null
}, context)
```

#### Input
* input `object`
  * AnswerKey
  * AutoGranted
  * AutoGrantedValue
  * Description **required**
  * Keywords
  * Name **required**
  * QualificationTypeStatus **required**
  * RetryDelayInSeconds
  * Test
  * TestDurationInSeconds

#### Output
* output [CreateQualificationTypeResponse](#createqualificationtyperesponse)

### CreateWorkerBlock



```js
amazonaws_mturk_requester.CreateWorkerBlock({
  "WorkerId": null,
  "Reason": null
}, context)
```

#### Input
* input `object`
  * Reason **required**
  * WorkerId **required**

#### Output
* output [CreateWorkerBlockResponse](#createworkerblockresponse)

### DeleteHIT



```js
amazonaws_mturk_requester.DeleteHIT({
  "HITId": null
}, context)
```

#### Input
* input `object`
  * HITId **required**

#### Output
* output [DeleteHITResponse](#deletehitresponse)

### DeleteQualificationType



```js
amazonaws_mturk_requester.DeleteQualificationType({
  "QualificationTypeId": null
}, context)
```

#### Input
* input `object`
  * QualificationTypeId **required**

#### Output
* output [DeleteQualificationTypeResponse](#deletequalificationtyperesponse)

### DeleteWorkerBlock



```js
amazonaws_mturk_requester.DeleteWorkerBlock({
  "WorkerId": null
}, context)
```

#### Input
* input `object`
  * Reason
  * WorkerId **required**

#### Output
* output [DeleteWorkerBlockResponse](#deleteworkerblockresponse)

### DisassociateQualificationFromWorker



```js
amazonaws_mturk_requester.DisassociateQualificationFromWorker({
  "WorkerId": null,
  "QualificationTypeId": null
}, context)
```

#### Input
* input `object`
  * QualificationTypeId **required**
  * Reason
  * WorkerId **required**

#### Output
* output [DisassociateQualificationFromWorkerResponse](#disassociatequalificationfromworkerresponse)

### GetAccountBalance



```js
amazonaws_mturk_requester.GetAccountBalance({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountBalanceResponse](#getaccountbalanceresponse)

### GetAssignment



```js
amazonaws_mturk_requester.GetAssignment({
  "AssignmentId": null
}, context)
```

#### Input
* input `object`
  * AssignmentId **required**

#### Output
* output [GetAssignmentResponse](#getassignmentresponse)

### GetFileUploadURL



```js
amazonaws_mturk_requester.GetFileUploadURL({
  "AssignmentId": null,
  "QuestionIdentifier": null
}, context)
```

#### Input
* input `object`
  * AssignmentId **required**
  * QuestionIdentifier **required**

#### Output
* output [GetFileUploadURLResponse](#getfileuploadurlresponse)

### GetHIT



```js
amazonaws_mturk_requester.GetHIT({
  "HITId": null
}, context)
```

#### Input
* input `object`
  * HITId **required**

#### Output
* output [GetHITResponse](#gethitresponse)

### GetQualificationScore



```js
amazonaws_mturk_requester.GetQualificationScore({
  "QualificationTypeId": null,
  "WorkerId": null
}, context)
```

#### Input
* input `object`
  * QualificationTypeId **required**
  * WorkerId **required**

#### Output
* output [GetQualificationScoreResponse](#getqualificationscoreresponse)

### GetQualificationType



```js
amazonaws_mturk_requester.GetQualificationType({
  "QualificationTypeId": null
}, context)
```

#### Input
* input `object`
  * QualificationTypeId **required**

#### Output
* output [GetQualificationTypeResponse](#getqualificationtyperesponse)

### ListAssignmentsForHIT



```js
amazonaws_mturk_requester.ListAssignmentsForHIT({
  "HITId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssignmentStatuses
    * items [AssignmentStatus](#assignmentstatus)
  * HITId **required**
  * MaxResults [ResultSize](#resultsize)
  * NextToken

#### Output
* output [ListAssignmentsForHITResponse](#listassignmentsforhitresponse)

### ListBonusPayments



```js
amazonaws_mturk_requester.ListBonusPayments({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssignmentId
  * HITId
  * MaxResults [ResultSize](#resultsize)
  * NextToken

#### Output
* output [ListBonusPaymentsResponse](#listbonuspaymentsresponse)

### ListHITs



```js
amazonaws_mturk_requester.ListHITs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [ResultSize](#resultsize)
  * NextToken

#### Output
* output [ListHITsResponse](#listhitsresponse)

### ListHITsForQualificationType



```js
amazonaws_mturk_requester.ListHITsForQualificationType({
  "QualificationTypeId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * QualificationTypeId **required**

#### Output
* output [ListHITsForQualificationTypeResponse](#listhitsforqualificationtyperesponse)

### ListQualificationRequests



```js
amazonaws_mturk_requester.ListQualificationRequests({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken [PaginationToken](#paginationtoken)
  * QualificationTypeId

#### Output
* output [ListQualificationRequestsResponse](#listqualificationrequestsresponse)

### ListQualificationTypes



```js
amazonaws_mturk_requester.ListQualificationTypes({
  "MustBeRequestable": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * MustBeOwnedByCaller
  * MustBeRequestable **required**
  * NextToken [PaginationToken](#paginationtoken)
  * Query

#### Output
* output [ListQualificationTypesResponse](#listqualificationtypesresponse)

### ListReviewPolicyResultsForHIT



```js
amazonaws_mturk_requester.ListReviewPolicyResultsForHIT({
  "HITId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * HITId **required**
  * MaxResults
  * NextToken
  * PolicyLevels
    * items [ReviewPolicyLevel](#reviewpolicylevel)
  * RetrieveActions
  * RetrieveResults

#### Output
* output [ListReviewPolicyResultsForHITResponse](#listreviewpolicyresultsforhitresponse)

### ListReviewableHITs



```js
amazonaws_mturk_requester.ListReviewableHITs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * HITTypeId
  * MaxResults
  * NextToken
  * Status

#### Output
* output [ListReviewableHITsResponse](#listreviewablehitsresponse)

### ListWorkerBlocks



```js
amazonaws_mturk_requester.ListWorkerBlocks({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [ResultSize](#resultsize)
  * NextToken

#### Output
* output [ListWorkerBlocksResponse](#listworkerblocksresponse)

### ListWorkersWithQualificationType



```js
amazonaws_mturk_requester.ListWorkersWithQualificationType({
  "QualificationTypeId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * QualificationTypeId **required**
  * Status

#### Output
* output [ListWorkersWithQualificationTypeResponse](#listworkerswithqualificationtyperesponse)

### NotifyWorkers



```js
amazonaws_mturk_requester.NotifyWorkers({
  "Subject": null,
  "MessageText": null,
  "WorkerIds": null
}, context)
```

#### Input
* input `object`
  * MessageText **required**
  * Subject **required**
  * WorkerIds **required**
    * items [CustomerId](#customerid)

#### Output
* output [NotifyWorkersResponse](#notifyworkersresponse)

### RejectAssignment



```js
amazonaws_mturk_requester.RejectAssignment({
  "AssignmentId": null,
  "RequesterFeedback": null
}, context)
```

#### Input
* input `object`
  * AssignmentId **required**
  * RequesterFeedback **required**

#### Output
* output [RejectAssignmentResponse](#rejectassignmentresponse)

### RejectQualificationRequest



```js
amazonaws_mturk_requester.RejectQualificationRequest({
  "QualificationRequestId": null
}, context)
```

#### Input
* input `object`
  * QualificationRequestId **required**
  * Reason

#### Output
* output [RejectQualificationRequestResponse](#rejectqualificationrequestresponse)

### SendBonus



```js
amazonaws_mturk_requester.SendBonus({
  "WorkerId": null,
  "BonusAmount": null,
  "AssignmentId": null,
  "Reason": null
}, context)
```

#### Input
* input `object`
  * AssignmentId **required**
  * BonusAmount **required**
  * Reason **required**
  * UniqueRequestToken
  * WorkerId **required**

#### Output
* output [SendBonusResponse](#sendbonusresponse)

### SendTestEventNotification



```js
amazonaws_mturk_requester.SendTestEventNotification({
  "Notification": null,
  "TestEventType": null
}, context)
```

#### Input
* input `object`
  * Notification **required**
    * Destination **required**
    * EventTypes **required**
      * items [EventType](#eventtype)
    * Transport **required**
    * Version **required**
  * TestEventType **required**

#### Output
* output [SendTestEventNotificationResponse](#sendtesteventnotificationresponse)

### UpdateExpirationForHIT



```js
amazonaws_mturk_requester.UpdateExpirationForHIT({
  "HITId": null,
  "ExpireAt": null
}, context)
```

#### Input
* input `object`
  * ExpireAt **required**
  * HITId **required**

#### Output
* output [UpdateExpirationForHITResponse](#updateexpirationforhitresponse)

### UpdateHITReviewStatus



```js
amazonaws_mturk_requester.UpdateHITReviewStatus({
  "HITId": null
}, context)
```

#### Input
* input `object`
  * HITId **required**
  * Revert

#### Output
* output [UpdateHITReviewStatusResponse](#updatehitreviewstatusresponse)

### UpdateHITTypeOfHIT



```js
amazonaws_mturk_requester.UpdateHITTypeOfHIT({
  "HITId": null,
  "HITTypeId": null
}, context)
```

#### Input
* input `object`
  * HITId **required**
  * HITTypeId **required**

#### Output
* output [UpdateHITTypeOfHITResponse](#updatehittypeofhitresponse)

### UpdateNotificationSettings



```js
amazonaws_mturk_requester.UpdateNotificationSettings({
  "HITTypeId": null
}, context)
```

#### Input
* input `object`
  * Active
  * HITTypeId **required**
  * Notification
    * Destination **required**
    * EventTypes **required**
      * items [EventType](#eventtype)
    * Transport **required**
    * Version **required**

#### Output
* output [UpdateNotificationSettingsResponse](#updatenotificationsettingsresponse)

### UpdateQualificationType



```js
amazonaws_mturk_requester.UpdateQualificationType({
  "QualificationTypeId": null
}, context)
```

#### Input
* input `object`
  * AnswerKey
  * AutoGranted
  * AutoGrantedValue
  * Description
  * QualificationTypeId **required**
  * QualificationTypeStatus
  * RetryDelayInSeconds
  * Test
  * TestDurationInSeconds

#### Output
* output [UpdateQualificationTypeResponse](#updatequalificationtyperesponse)



## Definitions

### AcceptQualificationRequestRequest
* AcceptQualificationRequestRequest `object`
  * IntegerValue
  * QualificationRequestId **required**

### AcceptQualificationRequestResponse
* AcceptQualificationRequestResponse `object`

### ApproveAssignmentRequest
* ApproveAssignmentRequest `object`
  * AssignmentId **required**
  * OverrideRejection
  * RequesterFeedback

### ApproveAssignmentResponse
* ApproveAssignmentResponse `object`

### Assignment
* Assignment `object`:  The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval. 
  * AcceptTime
  * Answer
  * ApprovalTime
  * AssignmentId
  * AssignmentStatus
  * AutoApprovalTime
  * Deadline
  * HITId
  * RejectionTime
  * RequesterFeedback
  * SubmitTime
  * WorkerId

### AssignmentList
* AssignmentList `array`
  * items [Assignment](#assignment)

### AssignmentStatus
* AssignmentStatus `string` (values: Submitted, Approved, Rejected)

### AssignmentStatusList
* AssignmentStatusList `array`
  * items [AssignmentStatus](#assignmentstatus)

### AssociateQualificationWithWorkerRequest
* AssociateQualificationWithWorkerRequest `object`
  * IntegerValue
  * QualificationTypeId **required**
  * SendNotification
  * WorkerId **required**

### AssociateQualificationWithWorkerResponse
* AssociateQualificationWithWorkerResponse `object`

### BonusPayment
* BonusPayment `object`: An object representing a Bonus payment paid to a Worker.
  * AssignmentId
  * BonusAmount [CurrencyAmount](#currencyamount)
  * GrantTime
  * Reason
  * WorkerId

### BonusPaymentList
* BonusPaymentList `array`
  * items [BonusPayment](#bonuspayment)

### Boolean
* Boolean `boolean`

### Comparator
* Comparator `string` (values: LessThan, LessThanOrEqualTo, GreaterThan, GreaterThanOrEqualTo, EqualTo, NotEqualTo, Exists, DoesNotExist, In, NotIn)

### CountryParameters
* CountryParameters `string`

### CreateAdditionalAssignmentsForHITRequest
* CreateAdditionalAssignmentsForHITRequest `object`
  * HITId **required**
  * NumberOfAdditionalAssignments **required**
  * UniqueRequestToken

### CreateAdditionalAssignmentsForHITResponse
* CreateAdditionalAssignmentsForHITResponse `object`

### CreateHITRequest
* CreateHITRequest `object`
  * AssignmentDurationInSeconds **required**
  * AssignmentReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * AutoApprovalDelayInSeconds
  * Description **required**
  * HITLayoutId
  * HITLayoutParameters
    * items [HITLayoutParameter](#hitlayoutparameter)
  * HITReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * Keywords
  * LifetimeInSeconds **required**
  * MaxAssignments
  * QualificationRequirements
    * items [QualificationRequirement](#qualificationrequirement)
  * Question
  * RequesterAnnotation
  * Reward **required**
  * Title **required**
  * UniqueRequestToken

### CreateHITResponse
* CreateHITResponse `object`
  * HIT
    * AssignmentDurationInSeconds
    * AutoApprovalDelayInSeconds
    * CreationTime
    * Description
    * Expiration
    * HITGroupId
    * HITId
    * HITLayoutId
    * HITReviewStatus
    * HITStatus
    * HITTypeId
    * Keywords
    * MaxAssignments
    * NumberOfAssignmentsAvailable
    * NumberOfAssignmentsCompleted
    * NumberOfAssignmentsPending
    * QualificationRequirements
      * items [QualificationRequirement](#qualificationrequirement)
    * Question
    * RequesterAnnotation
    * Reward [CurrencyAmount](#currencyamount)
    * Title

### CreateHITTypeRequest
* CreateHITTypeRequest `object`
  * AssignmentDurationInSeconds **required**
  * AutoApprovalDelayInSeconds
  * Description **required**
  * Keywords
  * QualificationRequirements
    * items [QualificationRequirement](#qualificationrequirement)
  * Reward **required**
  * Title **required**

### CreateHITTypeResponse
* CreateHITTypeResponse `object`
  * HITTypeId

### CreateHITWithHITTypeRequest
* CreateHITWithHITTypeRequest `object`
  * AssignmentReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * HITLayoutId
  * HITLayoutParameters
    * items [HITLayoutParameter](#hitlayoutparameter)
  * HITReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * HITTypeId **required**
  * LifetimeInSeconds **required**
  * MaxAssignments
  * Question
  * RequesterAnnotation
  * UniqueRequestToken

### CreateHITWithHITTypeResponse
* CreateHITWithHITTypeResponse `object`
  * HIT
    * AssignmentDurationInSeconds
    * AutoApprovalDelayInSeconds
    * CreationTime
    * Description
    * Expiration
    * HITGroupId
    * HITId
    * HITLayoutId
    * HITReviewStatus
    * HITStatus
    * HITTypeId
    * Keywords
    * MaxAssignments
    * NumberOfAssignmentsAvailable
    * NumberOfAssignmentsCompleted
    * NumberOfAssignmentsPending
    * QualificationRequirements
      * items [QualificationRequirement](#qualificationrequirement)
    * Question
    * RequesterAnnotation
    * Reward [CurrencyAmount](#currencyamount)
    * Title

### CreateQualificationTypeRequest
* CreateQualificationTypeRequest `object`
  * AnswerKey
  * AutoGranted
  * AutoGrantedValue
  * Description **required**
  * Keywords
  * Name **required**
  * QualificationTypeStatus **required**
  * RetryDelayInSeconds
  * Test
  * TestDurationInSeconds

### CreateQualificationTypeResponse
* CreateQualificationTypeResponse `object`
  * QualificationType
    * AnswerKey
    * AutoGranted
    * AutoGrantedValue
    * CreationTime
    * Description
    * IsRequestable
    * Keywords
    * Name
    * QualificationTypeId
    * QualificationTypeStatus
    * RetryDelayInSeconds
    * Test
    * TestDurationInSeconds

### CreateWorkerBlockRequest
* CreateWorkerBlockRequest `object`
  * Reason **required**
  * WorkerId **required**

### CreateWorkerBlockResponse
* CreateWorkerBlockResponse `object`

### CurrencyAmount
* CurrencyAmount `string`: A string representing a currency amount.

### CustomerId
* CustomerId `string`

### CustomerIdList
* CustomerIdList `array`
  * items [CustomerId](#customerid)

### DeleteHITRequest
* DeleteHITRequest `object`
  * HITId **required**

### DeleteHITResponse
* DeleteHITResponse `object`

### DeleteQualificationTypeRequest
* DeleteQualificationTypeRequest `object`
  * QualificationTypeId **required**

### DeleteQualificationTypeResponse
* DeleteQualificationTypeResponse `object`

### DeleteWorkerBlockRequest
* DeleteWorkerBlockRequest `object`
  * Reason
  * WorkerId **required**

### DeleteWorkerBlockResponse
* DeleteWorkerBlockResponse `object`

### DisassociateQualificationFromWorkerRequest
* DisassociateQualificationFromWorkerRequest `object`
  * QualificationTypeId **required**
  * Reason
  * WorkerId **required**

### DisassociateQualificationFromWorkerResponse
* DisassociateQualificationFromWorkerResponse `object`

### EntityId
* EntityId `string`

### EventType
* EventType `string` (values: AssignmentAccepted, AssignmentAbandoned, AssignmentReturned, AssignmentSubmitted, AssignmentRejected, AssignmentApproved, HITCreated, HITExpired, HITReviewable, HITExtended, HITDisposed, Ping)

### EventTypeList
* EventTypeList `array`
  * items [EventType](#eventtype)

### ExceptionMessage
* ExceptionMessage `string`

### GetAccountBalanceRequest
* GetAccountBalanceRequest `object`

### GetAccountBalanceResponse
* GetAccountBalanceResponse `object`
  * AvailableBalance [CurrencyAmount](#currencyamount)
  * OnHoldBalance [CurrencyAmount](#currencyamount)

### GetAssignmentRequest
* GetAssignmentRequest `object`
  * AssignmentId **required**

### GetAssignmentResponse
* GetAssignmentResponse `object`
  * Assignment
    * AcceptTime
    * Answer
    * ApprovalTime
    * AssignmentId
    * AssignmentStatus
    * AutoApprovalTime
    * Deadline
    * HITId
    * RejectionTime
    * RequesterFeedback
    * SubmitTime
    * WorkerId
  * HIT
    * AssignmentDurationInSeconds
    * AutoApprovalDelayInSeconds
    * CreationTime
    * Description
    * Expiration
    * HITGroupId
    * HITId
    * HITLayoutId
    * HITReviewStatus
    * HITStatus
    * HITTypeId
    * Keywords
    * MaxAssignments
    * NumberOfAssignmentsAvailable
    * NumberOfAssignmentsCompleted
    * NumberOfAssignmentsPending
    * QualificationRequirements
      * items [QualificationRequirement](#qualificationrequirement)
    * Question
    * RequesterAnnotation
    * Reward [CurrencyAmount](#currencyamount)
    * Title

### GetFileUploadURLRequest
* GetFileUploadURLRequest `object`
  * AssignmentId **required**
  * QuestionIdentifier **required**

### GetFileUploadURLResponse
* GetFileUploadURLResponse `object`
  * FileUploadURL

### GetHITRequest
* GetHITRequest `object`
  * HITId **required**

### GetHITResponse
* GetHITResponse `object`
  * HIT
    * AssignmentDurationInSeconds
    * AutoApprovalDelayInSeconds
    * CreationTime
    * Description
    * Expiration
    * HITGroupId
    * HITId
    * HITLayoutId
    * HITReviewStatus
    * HITStatus
    * HITTypeId
    * Keywords
    * MaxAssignments
    * NumberOfAssignmentsAvailable
    * NumberOfAssignmentsCompleted
    * NumberOfAssignmentsPending
    * QualificationRequirements
      * items [QualificationRequirement](#qualificationrequirement)
    * Question
    * RequesterAnnotation
    * Reward [CurrencyAmount](#currencyamount)
    * Title

### GetQualificationScoreRequest
* GetQualificationScoreRequest `object`
  * QualificationTypeId **required**
  * WorkerId **required**

### GetQualificationScoreResponse
* GetQualificationScoreResponse `object`
  * Qualification
    * GrantTime
    * IntegerValue
    * LocaleValue [Locale](#locale)
    * QualificationTypeId
    * Status
    * WorkerId

### GetQualificationTypeRequest
* GetQualificationTypeRequest `object`
  * QualificationTypeId **required**

### GetQualificationTypeResponse
* GetQualificationTypeResponse `object`
  * QualificationType
    * AnswerKey
    * AutoGranted
    * AutoGrantedValue
    * CreationTime
    * Description
    * IsRequestable
    * Keywords
    * Name
    * QualificationTypeId
    * QualificationTypeStatus
    * RetryDelayInSeconds
    * Test
    * TestDurationInSeconds

### HIT
* HIT `object`:  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
  * AssignmentDurationInSeconds
  * AutoApprovalDelayInSeconds
  * CreationTime
  * Description
  * Expiration
  * HITGroupId
  * HITId
  * HITLayoutId
  * HITReviewStatus
  * HITStatus
  * HITTypeId
  * Keywords
  * MaxAssignments
  * NumberOfAssignmentsAvailable
  * NumberOfAssignmentsCompleted
  * NumberOfAssignmentsPending
  * QualificationRequirements
    * items [QualificationRequirement](#qualificationrequirement)
  * Question
  * RequesterAnnotation
  * Reward [CurrencyAmount](#currencyamount)
  * Title

### HITAccessActions
* HITAccessActions `string` (values: Accept, PreviewAndAccept, DiscoverPreviewAndAccept)

### HITLayoutParameter
* HITLayoutParameter `object`:  The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT. 
  * Name **required**
  * Value **required**

### HITLayoutParameterList
* HITLayoutParameterList `array`
  * items [HITLayoutParameter](#hitlayoutparameter)

### HITList
* HITList `array`
  * items [HIT](#hit)

### HITReviewStatus
* HITReviewStatus `string` (values: NotReviewed, MarkedForReview, ReviewedAppropriate, ReviewedInappropriate)

### HITStatus
* HITStatus `string` (values: Assignable, Unassignable, Reviewable, Reviewing, Disposed)

### IdempotencyToken
* IdempotencyToken `string`

### Integer
* Integer `integer`

### IntegerList
* IntegerList `array`
  * items [Integer](#integer)

### ListAssignmentsForHITRequest
* ListAssignmentsForHITRequest `object`
  * AssignmentStatuses
    * items [AssignmentStatus](#assignmentstatus)
  * HITId **required**
  * MaxResults [ResultSize](#resultsize)
  * NextToken

### ListAssignmentsForHITResponse
* ListAssignmentsForHITResponse `object`
  * Assignments
    * items [Assignment](#assignment)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults

### ListBonusPaymentsRequest
* ListBonusPaymentsRequest `object`
  * AssignmentId
  * HITId
  * MaxResults [ResultSize](#resultsize)
  * NextToken

### ListBonusPaymentsResponse
* ListBonusPaymentsResponse `object`
  * BonusPayments
    * items [BonusPayment](#bonuspayment)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults

### ListHITsForQualificationTypeRequest
* ListHITsForQualificationTypeRequest `object`
  * MaxResults
  * NextToken
  * QualificationTypeId **required**

### ListHITsForQualificationTypeResponse
* ListHITsForQualificationTypeResponse `object`
  * HITs
    * items [HIT](#hit)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults

### ListHITsRequest
* ListHITsRequest `object`
  * MaxResults [ResultSize](#resultsize)
  * NextToken

### ListHITsResponse
* ListHITsResponse `object`
  * HITs
    * items [HIT](#hit)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults

### ListQualificationRequestsRequest
* ListQualificationRequestsRequest `object`
  * MaxResults
  * NextToken [PaginationToken](#paginationtoken)
  * QualificationTypeId

### ListQualificationRequestsResponse
* ListQualificationRequestsResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults
  * QualificationRequests
    * items [QualificationRequest](#qualificationrequest)

### ListQualificationTypesRequest
* ListQualificationTypesRequest `object`
  * MaxResults
  * MustBeOwnedByCaller
  * MustBeRequestable **required**
  * NextToken [PaginationToken](#paginationtoken)
  * Query

### ListQualificationTypesResponse
* ListQualificationTypesResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults
  * QualificationTypes
    * items [QualificationType](#qualificationtype)

### ListReviewPolicyResultsForHITRequest
* ListReviewPolicyResultsForHITRequest `object`
  * HITId **required**
  * MaxResults
  * NextToken
  * PolicyLevels
    * items [ReviewPolicyLevel](#reviewpolicylevel)
  * RetrieveActions
  * RetrieveResults

### ListReviewPolicyResultsForHITResponse
* ListReviewPolicyResultsForHITResponse `object`
  * AssignmentReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * AssignmentReviewReport
    * ReviewActions
      * items [ReviewActionDetail](#reviewactiondetail)
    * ReviewResults
      * items [ReviewResultDetail](#reviewresultdetail)
  * HITId
  * HITReviewPolicy
    * Parameters
      * items [PolicyParameter](#policyparameter)
    * PolicyName **required**
  * HITReviewReport
    * ReviewActions
      * items [ReviewActionDetail](#reviewactiondetail)
    * ReviewResults
      * items [ReviewResultDetail](#reviewresultdetail)
  * NextToken [PaginationToken](#paginationtoken)

### ListReviewableHITsRequest
* ListReviewableHITsRequest `object`
  * HITTypeId
  * MaxResults
  * NextToken
  * Status

### ListReviewableHITsResponse
* ListReviewableHITsResponse `object`
  * HITs
    * items [HIT](#hit)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults

### ListWorkerBlocksRequest
* ListWorkerBlocksRequest `object`
  * MaxResults [ResultSize](#resultsize)
  * NextToken

### ListWorkerBlocksResponse
* ListWorkerBlocksResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults
  * WorkerBlocks
    * items [WorkerBlock](#workerblock)

### ListWorkersWithQualificationTypeRequest
* ListWorkersWithQualificationTypeRequest `object`
  * MaxResults
  * NextToken
  * QualificationTypeId **required**
  * Status

### ListWorkersWithQualificationTypeResponse
* ListWorkersWithQualificationTypeResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults
  * Qualifications
    * items [Qualification](#qualification)

### Locale
* Locale `object`: The Locale data structure represents a geographical region or location.
  * Country **required**
  * Subdivision

### LocaleList
* LocaleList `array`
  * items [Locale](#locale)

### Long
* Long `integer`

### NotificationSpecification
* NotificationSpecification `object`: The NotificationSpecification data structure describes a HIT event notification for a HIT type.
  * Destination **required**
  * EventTypes **required**
    * items [EventType](#eventtype)
  * Transport **required**
  * Version **required**

### NotificationTransport
* NotificationTransport `string` (values: Email, SQS, SNS)

### NotifyWorkersFailureCode
* NotifyWorkersFailureCode `string` (values: SoftFailure, HardFailure)

### NotifyWorkersFailureStatus
* NotifyWorkersFailureStatus `object`:  When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. 
  * NotifyWorkersFailureCode
  * NotifyWorkersFailureMessage
  * WorkerId

### NotifyWorkersFailureStatusList
* NotifyWorkersFailureStatusList `array`
  * items [NotifyWorkersFailureStatus](#notifyworkersfailurestatus)

### NotifyWorkersRequest
* NotifyWorkersRequest `object`
  * MessageText **required**
  * Subject **required**
  * WorkerIds **required**
    * items [CustomerId](#customerid)

### NotifyWorkersResponse
* NotifyWorkersResponse `object`
  * NotifyWorkersFailureStatuses
    * items [NotifyWorkersFailureStatus](#notifyworkersfailurestatus)

### PaginationToken
* PaginationToken `string`: If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 

### ParameterMapEntry
* ParameterMapEntry `object`:  This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy. 
  * Key
  * Values
    * items [String](#string)

### ParameterMapEntryList
* ParameterMapEntryList `array`
  * items [ParameterMapEntry](#parametermapentry)

### PolicyParameter
* PolicyParameter `object`:  Name of the parameter from the Review policy. 
  * Key
  * MapEntries
    * items [ParameterMapEntry](#parametermapentry)
  * Values
    * items [String](#string)

### PolicyParameterList
* PolicyParameterList `array`
  * items [PolicyParameter](#policyparameter)

### Qualification
* Qualification `object`: The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).
  * GrantTime
  * IntegerValue
  * LocaleValue [Locale](#locale)
  * QualificationTypeId
  * Status
  * WorkerId

### QualificationList
* QualificationList `array`
  * items [Qualification](#qualification)

### QualificationRequest
* QualificationRequest `object`:  The QualificationRequest data structure represents a request a Worker has made for a Qualification. 
  * Answer
  * QualificationRequestId
  * QualificationTypeId
  * SubmitTime
  * Test
  * WorkerId

### QualificationRequestList
* QualificationRequestList `array`
  * items [QualificationRequest](#qualificationrequest)

### QualificationRequirement
* QualificationRequirement `object`:  The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results. 
  * ActionsGuarded
  * Comparator **required**
  * IntegerValues
    * items [Integer](#integer)
  * LocaleValues
    * items [Locale](#locale)
  * QualificationTypeId **required**
  * RequiredToPreview

### QualificationRequirementList
* QualificationRequirementList `array`
  * items [QualificationRequirement](#qualificationrequirement)

### QualificationStatus
* QualificationStatus `string` (values: Granted, Revoked)

### QualificationType
* QualificationType `object`:  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. 
  * AnswerKey
  * AutoGranted
  * AutoGrantedValue
  * CreationTime
  * Description
  * IsRequestable
  * Keywords
  * Name
  * QualificationTypeId
  * QualificationTypeStatus
  * RetryDelayInSeconds
  * Test
  * TestDurationInSeconds

### QualificationTypeList
* QualificationTypeList `array`
  * items [QualificationType](#qualificationtype)

### QualificationTypeStatus
* QualificationTypeStatus `string` (values: Active, Inactive)

### RejectAssignmentRequest
* RejectAssignmentRequest `object`
  * AssignmentId **required**
  * RequesterFeedback **required**

### RejectAssignmentResponse
* RejectAssignmentResponse `object`

### RejectQualificationRequestRequest
* RejectQualificationRequestRequest `object`
  * QualificationRequestId **required**
  * Reason

### RejectQualificationRequestResponse
* RejectQualificationRequestResponse `object`

### RequestError
* RequestError `object`: Your request is invalid.
  * Message [ExceptionMessage](#exceptionmessage)
  * TurkErrorCode [TurkErrorCode](#turkerrorcode)

### ResultSize
* ResultSize `integer`

### ReviewActionDetail
* ReviewActionDetail `object`:  Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy. 
  * ActionId
  * ActionName
  * CompleteTime
  * ErrorCode
  * Result
  * Status
  * TargetId
  * TargetType

### ReviewActionDetailList
* ReviewActionDetailList `array`
  * items [ReviewActionDetail](#reviewactiondetail)

### ReviewActionStatus
* ReviewActionStatus `string` (values: Intended, Succeeded, Failed, Cancelled)

### ReviewPolicy
* ReviewPolicy `object`:  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
  * Parameters
    * items [PolicyParameter](#policyparameter)
  * PolicyName **required**

### ReviewPolicyLevel
* ReviewPolicyLevel `string` (values: Assignment, HIT)

### ReviewPolicyLevelList
* ReviewPolicyLevelList `array`
  * items [ReviewPolicyLevel](#reviewpolicylevel)

### ReviewReport
* ReviewReport `object`:  Contains both ReviewResult and ReviewAction elements for a particular HIT. 
  * ReviewActions
    * items [ReviewActionDetail](#reviewactiondetail)
  * ReviewResults
    * items [ReviewResultDetail](#reviewresultdetail)

### ReviewResultDetail
* ReviewResultDetail `object`:  This data structure is returned multiple times for each result specified in the Review Policy. 
  * ActionId
  * Key
  * QuestionId
  * SubjectId
  * SubjectType
  * Value

### ReviewResultDetailList
* ReviewResultDetailList `array`
  * items [ReviewResultDetail](#reviewresultdetail)

### ReviewableHITStatus
* ReviewableHITStatus `string` (values: Reviewable, Reviewing)

### SendBonusRequest
* SendBonusRequest `object`
  * AssignmentId **required**
  * BonusAmount **required**
  * Reason **required**
  * UniqueRequestToken
  * WorkerId **required**

### SendBonusResponse
* SendBonusResponse `object`

### SendTestEventNotificationRequest
* SendTestEventNotificationRequest `object`
  * Notification **required**
    * Destination **required**
    * EventTypes **required**
      * items [EventType](#eventtype)
    * Transport **required**
    * Version **required**
  * TestEventType **required**

### SendTestEventNotificationResponse
* SendTestEventNotificationResponse `object`

### ServiceFault
* ServiceFault `object`: Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.
  * Message [ExceptionMessage](#exceptionmessage)
  * TurkErrorCode [TurkErrorCode](#turkerrorcode)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### Timestamp
* Timestamp `string`

### TurkErrorCode
* TurkErrorCode `string`

### UpdateExpirationForHITRequest
* UpdateExpirationForHITRequest `object`
  * ExpireAt **required**
  * HITId **required**

### UpdateExpirationForHITResponse
* UpdateExpirationForHITResponse `object`

### UpdateHITReviewStatusRequest
* UpdateHITReviewStatusRequest `object`
  * HITId **required**
  * Revert

### UpdateHITReviewStatusResponse
* UpdateHITReviewStatusResponse `object`

### UpdateHITTypeOfHITRequest
* UpdateHITTypeOfHITRequest `object`
  * HITId **required**
  * HITTypeId **required**

### UpdateHITTypeOfHITResponse
* UpdateHITTypeOfHITResponse `object`

### UpdateNotificationSettingsRequest
* UpdateNotificationSettingsRequest `object`
  * Active
  * HITTypeId **required**
  * Notification
    * Destination **required**
    * EventTypes **required**
      * items [EventType](#eventtype)
    * Transport **required**
    * Version **required**

### UpdateNotificationSettingsResponse
* UpdateNotificationSettingsResponse `object`

### UpdateQualificationTypeRequest
* UpdateQualificationTypeRequest `object`
  * AnswerKey
  * AutoGranted
  * AutoGrantedValue
  * Description
  * QualificationTypeId **required**
  * QualificationTypeStatus
  * RetryDelayInSeconds
  * Test
  * TestDurationInSeconds

### UpdateQualificationTypeResponse
* UpdateQualificationTypeResponse `object`
  * QualificationType
    * AnswerKey
    * AutoGranted
    * AutoGrantedValue
    * CreationTime
    * Description
    * IsRequestable
    * Keywords
    * Name
    * QualificationTypeId
    * QualificationTypeStatus
    * RetryDelayInSeconds
    * Test
    * TestDurationInSeconds

### WorkerBlock
* WorkerBlock `object`:  The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block. 
  * Reason
  * WorkerId

### WorkerBlockList
* WorkerBlockList `array`
  * items [WorkerBlock](#workerblock)


