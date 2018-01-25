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

amazonaws_mturk_requester.AcceptQualificationRequest({
  "QualificationRequestId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Mechanical Turk API Reference</fullname>

## Actions

### AcceptQualificationRequest



```js
amazonaws_mturk_requester.AcceptQualificationRequest({
  "QualificationRequestId": ""
}, context)
```

#### Input
* input `object`
  * IntegerValue [Integer](#integer)
  * QualificationRequestId **required** [String](#string)

#### Output
* output [AcceptQualificationRequestResponse](#acceptqualificationrequestresponse)

### ApproveAssignment



```js
amazonaws_mturk_requester.ApproveAssignment({
  "AssignmentId": ""
}, context)
```

#### Input
* input `object`
  * AssignmentId **required** [EntityId](#entityid)
  * OverrideRejection [Boolean](#boolean)
  * RequesterFeedback [String](#string)

#### Output
* output [ApproveAssignmentResponse](#approveassignmentresponse)

### AssociateQualificationWithWorker



```js
amazonaws_mturk_requester.AssociateQualificationWithWorker({
  "QualificationTypeId": "",
  "WorkerId": ""
}, context)
```

#### Input
* input `object`
  * IntegerValue [Integer](#integer)
  * QualificationTypeId **required** [EntityId](#entityid)
  * SendNotification [Boolean](#boolean)
  * WorkerId **required** [CustomerId](#customerid)

#### Output
* output [AssociateQualificationWithWorkerResponse](#associatequalificationwithworkerresponse)

### CreateAdditionalAssignmentsForHIT



```js
amazonaws_mturk_requester.CreateAdditionalAssignmentsForHIT({
  "HITId": "",
  "NumberOfAdditionalAssignments": 0
}, context)
```

#### Input
* input `object`
  * HITId **required** [EntityId](#entityid)
  * NumberOfAdditionalAssignments **required** [Integer](#integer)
  * UniqueRequestToken [IdempotencyToken](#idempotencytoken)

#### Output
* output [CreateAdditionalAssignmentsForHITResponse](#createadditionalassignmentsforhitresponse)

### CreateHIT



```js
amazonaws_mturk_requester.CreateHIT({
  "LifetimeInSeconds": 0,
  "AssignmentDurationInSeconds": 0,
  "Reward": "",
  "Title": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * AssignmentDurationInSeconds **required** [Long](#long)
  * AssignmentReviewPolicy [ReviewPolicy](#reviewpolicy)
  * AutoApprovalDelayInSeconds [Long](#long)
  * Description **required** [String](#string)
  * HITLayoutId [EntityId](#entityid)
  * HITLayoutParameters [HITLayoutParameterList](#hitlayoutparameterlist)
  * HITReviewPolicy [ReviewPolicy](#reviewpolicy)
  * Keywords [String](#string)
  * LifetimeInSeconds **required** [Long](#long)
  * MaxAssignments [Integer](#integer)
  * QualificationRequirements [QualificationRequirementList](#qualificationrequirementlist)
  * Question [String](#string)
  * RequesterAnnotation [String](#string)
  * Reward **required** [CurrencyAmount](#currencyamount)
  * Title **required** [String](#string)
  * UniqueRequestToken [IdempotencyToken](#idempotencytoken)

#### Output
* output [CreateHITResponse](#createhitresponse)

### CreateHITType



```js
amazonaws_mturk_requester.CreateHITType({
  "AssignmentDurationInSeconds": 0,
  "Reward": "",
  "Title": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * AssignmentDurationInSeconds **required** [Long](#long)
  * AutoApprovalDelayInSeconds [Long](#long)
  * Description **required** [String](#string)
  * Keywords [String](#string)
  * QualificationRequirements [QualificationRequirementList](#qualificationrequirementlist)
  * Reward **required** [CurrencyAmount](#currencyamount)
  * Title **required** [String](#string)

#### Output
* output [CreateHITTypeResponse](#createhittyperesponse)

### CreateHITWithHITType



```js
amazonaws_mturk_requester.CreateHITWithHITType({
  "HITTypeId": "",
  "LifetimeInSeconds": 0
}, context)
```

#### Input
* input `object`
  * AssignmentReviewPolicy [ReviewPolicy](#reviewpolicy)
  * HITLayoutId [EntityId](#entityid)
  * HITLayoutParameters [HITLayoutParameterList](#hitlayoutparameterlist)
  * HITReviewPolicy [ReviewPolicy](#reviewpolicy)
  * HITTypeId **required** [EntityId](#entityid)
  * LifetimeInSeconds **required** [Long](#long)
  * MaxAssignments [Integer](#integer)
  * Question [String](#string)
  * RequesterAnnotation [String](#string)
  * UniqueRequestToken [IdempotencyToken](#idempotencytoken)

#### Output
* output [CreateHITWithHITTypeResponse](#createhitwithhittyperesponse)

### CreateQualificationType



```js
amazonaws_mturk_requester.CreateQualificationType({
  "Name": "",
  "Description": "",
  "QualificationTypeStatus": ""
}, context)
```

#### Input
* input `object`
  * AnswerKey [String](#string)
  * AutoGranted [Boolean](#boolean)
  * AutoGrantedValue [Integer](#integer)
  * Description **required** [String](#string)
  * Keywords [String](#string)
  * Name **required** [String](#string)
  * QualificationTypeStatus **required** [QualificationTypeStatus](#qualificationtypestatus)
  * RetryDelayInSeconds [Long](#long)
  * Test [String](#string)
  * TestDurationInSeconds [Long](#long)

#### Output
* output [CreateQualificationTypeResponse](#createqualificationtyperesponse)

### CreateWorkerBlock



```js
amazonaws_mturk_requester.CreateWorkerBlock({
  "WorkerId": "",
  "Reason": ""
}, context)
```

#### Input
* input `object`
  * Reason **required** [String](#string)
  * WorkerId **required** [CustomerId](#customerid)

#### Output
* output [CreateWorkerBlockResponse](#createworkerblockresponse)

### DeleteHIT



```js
amazonaws_mturk_requester.DeleteHIT({
  "HITId": ""
}, context)
```

#### Input
* input `object`
  * HITId **required** [EntityId](#entityid)

#### Output
* output [DeleteHITResponse](#deletehitresponse)

### DeleteQualificationType



```js
amazonaws_mturk_requester.DeleteQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Input
* input `object`
  * QualificationTypeId **required** [EntityId](#entityid)

#### Output
* output [DeleteQualificationTypeResponse](#deletequalificationtyperesponse)

### DeleteWorkerBlock



```js
amazonaws_mturk_requester.DeleteWorkerBlock({
  "WorkerId": ""
}, context)
```

#### Input
* input `object`
  * Reason [String](#string)
  * WorkerId **required** [CustomerId](#customerid)

#### Output
* output [DeleteWorkerBlockResponse](#deleteworkerblockresponse)

### DisassociateQualificationFromWorker



```js
amazonaws_mturk_requester.DisassociateQualificationFromWorker({
  "WorkerId": "",
  "QualificationTypeId": ""
}, context)
```

#### Input
* input `object`
  * QualificationTypeId **required** [EntityId](#entityid)
  * Reason [String](#string)
  * WorkerId **required** [CustomerId](#customerid)

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
  "AssignmentId": ""
}, context)
```

#### Input
* input `object`
  * AssignmentId **required** [EntityId](#entityid)

#### Output
* output [GetAssignmentResponse](#getassignmentresponse)

### GetFileUploadURL



```js
amazonaws_mturk_requester.GetFileUploadURL({
  "AssignmentId": "",
  "QuestionIdentifier": ""
}, context)
```

#### Input
* input `object`
  * AssignmentId **required** [EntityId](#entityid)
  * QuestionIdentifier **required** [String](#string)

#### Output
* output [GetFileUploadURLResponse](#getfileuploadurlresponse)

### GetHIT



```js
amazonaws_mturk_requester.GetHIT({
  "HITId": ""
}, context)
```

#### Input
* input `object`
  * HITId **required** [EntityId](#entityid)

#### Output
* output [GetHITResponse](#gethitresponse)

### GetQualificationScore



```js
amazonaws_mturk_requester.GetQualificationScore({
  "QualificationTypeId": "",
  "WorkerId": ""
}, context)
```

#### Input
* input `object`
  * QualificationTypeId **required** [EntityId](#entityid)
  * WorkerId **required** [CustomerId](#customerid)

#### Output
* output [GetQualificationScoreResponse](#getqualificationscoreresponse)

### GetQualificationType



```js
amazonaws_mturk_requester.GetQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Input
* input `object`
  * QualificationTypeId **required** [EntityId](#entityid)

#### Output
* output [GetQualificationTypeResponse](#getqualificationtyperesponse)

### ListAssignmentsForHIT



```js
amazonaws_mturk_requester.ListAssignmentsForHIT({
  "HITId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssignmentStatuses [AssignmentStatusList](#assignmentstatuslist)
  * HITId **required** [EntityId](#entityid)
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)

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
  * AssignmentId [EntityId](#entityid)
  * HITId [EntityId](#entityid)
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)

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
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListHITsResponse](#listhitsresponse)

### ListHITsForQualificationType



```js
amazonaws_mturk_requester.ListHITsForQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * QualificationTypeId **required** [EntityId](#entityid)

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
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * QualificationTypeId [EntityId](#entityid)

#### Output
* output [ListQualificationRequestsResponse](#listqualificationrequestsresponse)

### ListQualificationTypes



```js
amazonaws_mturk_requester.ListQualificationTypes({
  "MustBeRequestable": true
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [ResultSize](#resultsize)
  * MustBeOwnedByCaller [Boolean](#boolean)
  * MustBeRequestable **required** [Boolean](#boolean)
  * NextToken [PaginationToken](#paginationtoken)
  * Query [String](#string)

#### Output
* output [ListQualificationTypesResponse](#listqualificationtypesresponse)

### ListReviewPolicyResultsForHIT



```js
amazonaws_mturk_requester.ListReviewPolicyResultsForHIT({
  "HITId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * HITId **required** [EntityId](#entityid)
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * PolicyLevels [ReviewPolicyLevelList](#reviewpolicylevellist)
  * RetrieveActions [Boolean](#boolean)
  * RetrieveResults [Boolean](#boolean)

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
  * HITTypeId [EntityId](#entityid)
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * Status [ReviewableHITStatus](#reviewablehitstatus)

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
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListWorkerBlocksResponse](#listworkerblocksresponse)

### ListWorkersWithQualificationType



```js
amazonaws_mturk_requester.ListWorkersWithQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * QualificationTypeId **required** [EntityId](#entityid)
  * Status [QualificationStatus](#qualificationstatus)

#### Output
* output [ListWorkersWithQualificationTypeResponse](#listworkerswithqualificationtyperesponse)

### NotifyWorkers



```js
amazonaws_mturk_requester.NotifyWorkers({
  "Subject": "",
  "MessageText": "",
  "WorkerIds": []
}, context)
```

#### Input
* input `object`
  * MessageText **required** [String](#string)
  * Subject **required** [String](#string)
  * WorkerIds **required** [CustomerIdList](#customeridlist)

#### Output
* output [NotifyWorkersResponse](#notifyworkersresponse)

### RejectAssignment



```js
amazonaws_mturk_requester.RejectAssignment({
  "AssignmentId": "",
  "RequesterFeedback": ""
}, context)
```

#### Input
* input `object`
  * AssignmentId **required** [EntityId](#entityid)
  * RequesterFeedback **required** [String](#string)

#### Output
* output [RejectAssignmentResponse](#rejectassignmentresponse)

### RejectQualificationRequest



```js
amazonaws_mturk_requester.RejectQualificationRequest({
  "QualificationRequestId": ""
}, context)
```

#### Input
* input `object`
  * QualificationRequestId **required** [String](#string)
  * Reason [String](#string)

#### Output
* output [RejectQualificationRequestResponse](#rejectqualificationrequestresponse)

### SendBonus



```js
amazonaws_mturk_requester.SendBonus({
  "WorkerId": "",
  "BonusAmount": "",
  "AssignmentId": "",
  "Reason": ""
}, context)
```

#### Input
* input `object`
  * AssignmentId **required** [EntityId](#entityid)
  * BonusAmount **required** [CurrencyAmount](#currencyamount)
  * Reason **required** [String](#string)
  * UniqueRequestToken [IdempotencyToken](#idempotencytoken)
  * WorkerId **required** [CustomerId](#customerid)

#### Output
* output [SendBonusResponse](#sendbonusresponse)

### SendTestEventNotification



```js
amazonaws_mturk_requester.SendTestEventNotification({
  "Notification": {
    "Destination": "",
    "Transport": "",
    "Version": "",
    "EventTypes": []
  },
  "TestEventType": ""
}, context)
```

#### Input
* input `object`
  * Notification **required** [NotificationSpecification](#notificationspecification)
  * TestEventType **required** [EventType](#eventtype)

#### Output
* output [SendTestEventNotificationResponse](#sendtesteventnotificationresponse)

### UpdateExpirationForHIT



```js
amazonaws_mturk_requester.UpdateExpirationForHIT({
  "HITId": "",
  "ExpireAt": ""
}, context)
```

#### Input
* input `object`
  * ExpireAt **required** [Timestamp](#timestamp)
  * HITId **required** [EntityId](#entityid)

#### Output
* output [UpdateExpirationForHITResponse](#updateexpirationforhitresponse)

### UpdateHITReviewStatus



```js
amazonaws_mturk_requester.UpdateHITReviewStatus({
  "HITId": ""
}, context)
```

#### Input
* input `object`
  * HITId **required** [EntityId](#entityid)
  * Revert [Boolean](#boolean)

#### Output
* output [UpdateHITReviewStatusResponse](#updatehitreviewstatusresponse)

### UpdateHITTypeOfHIT



```js
amazonaws_mturk_requester.UpdateHITTypeOfHIT({
  "HITId": "",
  "HITTypeId": ""
}, context)
```

#### Input
* input `object`
  * HITId **required** [EntityId](#entityid)
  * HITTypeId **required** [EntityId](#entityid)

#### Output
* output [UpdateHITTypeOfHITResponse](#updatehittypeofhitresponse)

### UpdateNotificationSettings



```js
amazonaws_mturk_requester.UpdateNotificationSettings({
  "HITTypeId": ""
}, context)
```

#### Input
* input `object`
  * Active [Boolean](#boolean)
  * HITTypeId **required** [EntityId](#entityid)
  * Notification [NotificationSpecification](#notificationspecification)

#### Output
* output [UpdateNotificationSettingsResponse](#updatenotificationsettingsresponse)

### UpdateQualificationType



```js
amazonaws_mturk_requester.UpdateQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Input
* input `object`
  * AnswerKey [String](#string)
  * AutoGranted [Boolean](#boolean)
  * AutoGrantedValue [Integer](#integer)
  * Description [String](#string)
  * QualificationTypeId **required** [EntityId](#entityid)
  * QualificationTypeStatus [QualificationTypeStatus](#qualificationtypestatus)
  * RetryDelayInSeconds [Long](#long)
  * Test [String](#string)
  * TestDurationInSeconds [Long](#long)

#### Output
* output [UpdateQualificationTypeResponse](#updatequalificationtyperesponse)



## Definitions

### AcceptQualificationRequestRequest
* AcceptQualificationRequestRequest `object`
  * IntegerValue [Integer](#integer)
  * QualificationRequestId **required** [String](#string)

### AcceptQualificationRequestResponse
* AcceptQualificationRequestResponse `object`

### ApproveAssignmentRequest
* ApproveAssignmentRequest `object`
  * AssignmentId **required** [EntityId](#entityid)
  * OverrideRejection [Boolean](#boolean)
  * RequesterFeedback [String](#string)

### ApproveAssignmentResponse
* ApproveAssignmentResponse `object`

### Assignment
* Assignment `object`:  The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval. 
  * AcceptTime [Timestamp](#timestamp)
  * Answer [String](#string)
  * ApprovalTime [Timestamp](#timestamp)
  * AssignmentId [EntityId](#entityid)
  * AssignmentStatus [AssignmentStatus](#assignmentstatus)
  * AutoApprovalTime [Timestamp](#timestamp)
  * Deadline [Timestamp](#timestamp)
  * HITId [EntityId](#entityid)
  * RejectionTime [Timestamp](#timestamp)
  * RequesterFeedback [String](#string)
  * SubmitTime [Timestamp](#timestamp)
  * WorkerId [CustomerId](#customerid)

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
  * IntegerValue [Integer](#integer)
  * QualificationTypeId **required** [EntityId](#entityid)
  * SendNotification [Boolean](#boolean)
  * WorkerId **required** [CustomerId](#customerid)

### AssociateQualificationWithWorkerResponse
* AssociateQualificationWithWorkerResponse `object`

### BonusPayment
* BonusPayment `object`: An object representing a Bonus payment paid to a Worker.
  * AssignmentId [EntityId](#entityid)
  * BonusAmount [CurrencyAmount](#currencyamount)
  * GrantTime [Timestamp](#timestamp)
  * Reason [String](#string)
  * WorkerId [CustomerId](#customerid)

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
  * HITId **required** [EntityId](#entityid)
  * NumberOfAdditionalAssignments **required** [Integer](#integer)
  * UniqueRequestToken [IdempotencyToken](#idempotencytoken)

### CreateAdditionalAssignmentsForHITResponse
* CreateAdditionalAssignmentsForHITResponse `object`

### CreateHITRequest
* CreateHITRequest `object`
  * AssignmentDurationInSeconds **required** [Long](#long)
  * AssignmentReviewPolicy [ReviewPolicy](#reviewpolicy)
  * AutoApprovalDelayInSeconds [Long](#long)
  * Description **required** [String](#string)
  * HITLayoutId [EntityId](#entityid)
  * HITLayoutParameters [HITLayoutParameterList](#hitlayoutparameterlist)
  * HITReviewPolicy [ReviewPolicy](#reviewpolicy)
  * Keywords [String](#string)
  * LifetimeInSeconds **required** [Long](#long)
  * MaxAssignments [Integer](#integer)
  * QualificationRequirements [QualificationRequirementList](#qualificationrequirementlist)
  * Question [String](#string)
  * RequesterAnnotation [String](#string)
  * Reward **required** [CurrencyAmount](#currencyamount)
  * Title **required** [String](#string)
  * UniqueRequestToken [IdempotencyToken](#idempotencytoken)

### CreateHITResponse
* CreateHITResponse `object`
  * HIT [HIT](#hit)

### CreateHITTypeRequest
* CreateHITTypeRequest `object`
  * AssignmentDurationInSeconds **required** [Long](#long)
  * AutoApprovalDelayInSeconds [Long](#long)
  * Description **required** [String](#string)
  * Keywords [String](#string)
  * QualificationRequirements [QualificationRequirementList](#qualificationrequirementlist)
  * Reward **required** [CurrencyAmount](#currencyamount)
  * Title **required** [String](#string)

### CreateHITTypeResponse
* CreateHITTypeResponse `object`
  * HITTypeId [EntityId](#entityid)

### CreateHITWithHITTypeRequest
* CreateHITWithHITTypeRequest `object`
  * AssignmentReviewPolicy [ReviewPolicy](#reviewpolicy)
  * HITLayoutId [EntityId](#entityid)
  * HITLayoutParameters [HITLayoutParameterList](#hitlayoutparameterlist)
  * HITReviewPolicy [ReviewPolicy](#reviewpolicy)
  * HITTypeId **required** [EntityId](#entityid)
  * LifetimeInSeconds **required** [Long](#long)
  * MaxAssignments [Integer](#integer)
  * Question [String](#string)
  * RequesterAnnotation [String](#string)
  * UniqueRequestToken [IdempotencyToken](#idempotencytoken)

### CreateHITWithHITTypeResponse
* CreateHITWithHITTypeResponse `object`
  * HIT [HIT](#hit)

### CreateQualificationTypeRequest
* CreateQualificationTypeRequest `object`
  * AnswerKey [String](#string)
  * AutoGranted [Boolean](#boolean)
  * AutoGrantedValue [Integer](#integer)
  * Description **required** [String](#string)
  * Keywords [String](#string)
  * Name **required** [String](#string)
  * QualificationTypeStatus **required** [QualificationTypeStatus](#qualificationtypestatus)
  * RetryDelayInSeconds [Long](#long)
  * Test [String](#string)
  * TestDurationInSeconds [Long](#long)

### CreateQualificationTypeResponse
* CreateQualificationTypeResponse `object`
  * QualificationType [QualificationType](#qualificationtype)

### CreateWorkerBlockRequest
* CreateWorkerBlockRequest `object`
  * Reason **required** [String](#string)
  * WorkerId **required** [CustomerId](#customerid)

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
  * HITId **required** [EntityId](#entityid)

### DeleteHITResponse
* DeleteHITResponse `object`

### DeleteQualificationTypeRequest
* DeleteQualificationTypeRequest `object`
  * QualificationTypeId **required** [EntityId](#entityid)

### DeleteQualificationTypeResponse
* DeleteQualificationTypeResponse `object`

### DeleteWorkerBlockRequest
* DeleteWorkerBlockRequest `object`
  * Reason [String](#string)
  * WorkerId **required** [CustomerId](#customerid)

### DeleteWorkerBlockResponse
* DeleteWorkerBlockResponse `object`

### DisassociateQualificationFromWorkerRequest
* DisassociateQualificationFromWorkerRequest `object`
  * QualificationTypeId **required** [EntityId](#entityid)
  * Reason [String](#string)
  * WorkerId **required** [CustomerId](#customerid)

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
  * AssignmentId **required** [EntityId](#entityid)

### GetAssignmentResponse
* GetAssignmentResponse `object`
  * Assignment [Assignment](#assignment)
  * HIT [HIT](#hit)

### GetFileUploadURLRequest
* GetFileUploadURLRequest `object`
  * AssignmentId **required** [EntityId](#entityid)
  * QuestionIdentifier **required** [String](#string)

### GetFileUploadURLResponse
* GetFileUploadURLResponse `object`
  * FileUploadURL [String](#string)

### GetHITRequest
* GetHITRequest `object`
  * HITId **required** [EntityId](#entityid)

### GetHITResponse
* GetHITResponse `object`
  * HIT [HIT](#hit)

### GetQualificationScoreRequest
* GetQualificationScoreRequest `object`
  * QualificationTypeId **required** [EntityId](#entityid)
  * WorkerId **required** [CustomerId](#customerid)

### GetQualificationScoreResponse
* GetQualificationScoreResponse `object`
  * Qualification [Qualification](#qualification)

### GetQualificationTypeRequest
* GetQualificationTypeRequest `object`
  * QualificationTypeId **required** [EntityId](#entityid)

### GetQualificationTypeResponse
* GetQualificationTypeResponse `object`
  * QualificationType [QualificationType](#qualificationtype)

### HIT
* HIT `object`:  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
  * AssignmentDurationInSeconds [Long](#long)
  * AutoApprovalDelayInSeconds [Long](#long)
  * CreationTime [Timestamp](#timestamp)
  * Description [String](#string)
  * Expiration [Timestamp](#timestamp)
  * HITGroupId [EntityId](#entityid)
  * HITId [EntityId](#entityid)
  * HITLayoutId [EntityId](#entityid)
  * HITReviewStatus [HITReviewStatus](#hitreviewstatus)
  * HITStatus [HITStatus](#hitstatus)
  * HITTypeId [EntityId](#entityid)
  * Keywords [String](#string)
  * MaxAssignments [Integer](#integer)
  * NumberOfAssignmentsAvailable [Integer](#integer)
  * NumberOfAssignmentsCompleted [Integer](#integer)
  * NumberOfAssignmentsPending [Integer](#integer)
  * QualificationRequirements [QualificationRequirementList](#qualificationrequirementlist)
  * Question [String](#string)
  * RequesterAnnotation [String](#string)
  * Reward [CurrencyAmount](#currencyamount)
  * Title [String](#string)

### HITLayoutParameter
* HITLayoutParameter `object`:  The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT. 
  * Name **required** [String](#string)
  * Value **required** [String](#string)

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
  * AssignmentStatuses [AssignmentStatusList](#assignmentstatuslist)
  * HITId **required** [EntityId](#entityid)
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)

### ListAssignmentsForHITResponse
* ListAssignmentsForHITResponse `object`
  * Assignments [AssignmentList](#assignmentlist)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults [Integer](#integer)

### ListBonusPaymentsRequest
* ListBonusPaymentsRequest `object`
  * AssignmentId [EntityId](#entityid)
  * HITId [EntityId](#entityid)
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)

### ListBonusPaymentsResponse
* ListBonusPaymentsResponse `object`
  * BonusPayments [BonusPaymentList](#bonuspaymentlist)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults [Integer](#integer)

### ListHITsForQualificationTypeRequest
* ListHITsForQualificationTypeRequest `object`
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * QualificationTypeId **required** [EntityId](#entityid)

### ListHITsForQualificationTypeResponse
* ListHITsForQualificationTypeResponse `object`
  * HITs [HITList](#hitlist)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults [Integer](#integer)

### ListHITsRequest
* ListHITsRequest `object`
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)

### ListHITsResponse
* ListHITsResponse `object`
  * HITs [HITList](#hitlist)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults [Integer](#integer)

### ListQualificationRequestsRequest
* ListQualificationRequestsRequest `object`
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * QualificationTypeId [EntityId](#entityid)

### ListQualificationRequestsResponse
* ListQualificationRequestsResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults [Integer](#integer)
  * QualificationRequests [QualificationRequestList](#qualificationrequestlist)

### ListQualificationTypesRequest
* ListQualificationTypesRequest `object`
  * MaxResults [ResultSize](#resultsize)
  * MustBeOwnedByCaller [Boolean](#boolean)
  * MustBeRequestable **required** [Boolean](#boolean)
  * NextToken [PaginationToken](#paginationtoken)
  * Query [String](#string)

### ListQualificationTypesResponse
* ListQualificationTypesResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults [Integer](#integer)
  * QualificationTypes [QualificationTypeList](#qualificationtypelist)

### ListReviewPolicyResultsForHITRequest
* ListReviewPolicyResultsForHITRequest `object`
  * HITId **required** [EntityId](#entityid)
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * PolicyLevels [ReviewPolicyLevelList](#reviewpolicylevellist)
  * RetrieveActions [Boolean](#boolean)
  * RetrieveResults [Boolean](#boolean)

### ListReviewPolicyResultsForHITResponse
* ListReviewPolicyResultsForHITResponse `object`
  * AssignmentReviewPolicy [ReviewPolicy](#reviewpolicy)
  * AssignmentReviewReport [ReviewReport](#reviewreport)
  * HITId [EntityId](#entityid)
  * HITReviewPolicy [ReviewPolicy](#reviewpolicy)
  * HITReviewReport [ReviewReport](#reviewreport)
  * NextToken [PaginationToken](#paginationtoken)

### ListReviewableHITsRequest
* ListReviewableHITsRequest `object`
  * HITTypeId [EntityId](#entityid)
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * Status [ReviewableHITStatus](#reviewablehitstatus)

### ListReviewableHITsResponse
* ListReviewableHITsResponse `object`
  * HITs [HITList](#hitlist)
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults [Integer](#integer)

### ListWorkerBlocksRequest
* ListWorkerBlocksRequest `object`
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)

### ListWorkerBlocksResponse
* ListWorkerBlocksResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults [Integer](#integer)
  * WorkerBlocks [WorkerBlockList](#workerblocklist)

### ListWorkersWithQualificationTypeRequest
* ListWorkersWithQualificationTypeRequest `object`
  * MaxResults [ResultSize](#resultsize)
  * NextToken [PaginationToken](#paginationtoken)
  * QualificationTypeId **required** [EntityId](#entityid)
  * Status [QualificationStatus](#qualificationstatus)

### ListWorkersWithQualificationTypeResponse
* ListWorkersWithQualificationTypeResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * NumResults [Integer](#integer)
  * Qualifications [QualificationList](#qualificationlist)

### Locale
* Locale `object`: The Locale data structure represents a geographical region or location.
  * Country **required** [CountryParameters](#countryparameters)
  * Subdivision [CountryParameters](#countryparameters)

### LocaleList
* LocaleList `array`
  * items [Locale](#locale)

### Long
* Long `integer`

### NotificationSpecification
* NotificationSpecification `object`: The NotificationSpecification data structure describes a HIT event notification for a HIT type.
  * Destination **required** [String](#string)
  * EventTypes **required** [EventTypeList](#eventtypelist)
  * Transport **required** [NotificationTransport](#notificationtransport)
  * Version **required** [String](#string)

### NotificationTransport
* NotificationTransport `string` (values: Email, SQS, SNS)

### NotifyWorkersFailureCode
* NotifyWorkersFailureCode `string` (values: SoftFailure, HardFailure)

### NotifyWorkersFailureStatus
* NotifyWorkersFailureStatus `object`:  When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. 
  * NotifyWorkersFailureCode [NotifyWorkersFailureCode](#notifyworkersfailurecode)
  * NotifyWorkersFailureMessage [String](#string)
  * WorkerId [CustomerId](#customerid)

### NotifyWorkersFailureStatusList
* NotifyWorkersFailureStatusList `array`
  * items [NotifyWorkersFailureStatus](#notifyworkersfailurestatus)

### NotifyWorkersRequest
* NotifyWorkersRequest `object`
  * MessageText **required** [String](#string)
  * Subject **required** [String](#string)
  * WorkerIds **required** [CustomerIdList](#customeridlist)

### NotifyWorkersResponse
* NotifyWorkersResponse `object`
  * NotifyWorkersFailureStatuses [NotifyWorkersFailureStatusList](#notifyworkersfailurestatuslist)

### PaginationToken
* PaginationToken `string`: If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 

### ParameterMapEntry
* ParameterMapEntry `object`:  This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy. 
  * Key [String](#string)
  * Values [StringList](#stringlist)

### ParameterMapEntryList
* ParameterMapEntryList `array`
  * items [ParameterMapEntry](#parametermapentry)

### PolicyParameter
* PolicyParameter `object`:  Name of the parameter from the Review policy. 
  * Key [String](#string)
  * MapEntries [ParameterMapEntryList](#parametermapentrylist)
  * Values [StringList](#stringlist)

### PolicyParameterList
* PolicyParameterList `array`
  * items [PolicyParameter](#policyparameter)

### Qualification
* Qualification `object`: The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).
  * GrantTime [Timestamp](#timestamp)
  * IntegerValue [Integer](#integer)
  * LocaleValue [Locale](#locale)
  * QualificationTypeId [EntityId](#entityid)
  * Status [QualificationStatus](#qualificationstatus)
  * WorkerId [CustomerId](#customerid)

### QualificationList
* QualificationList `array`
  * items [Qualification](#qualification)

### QualificationRequest
* QualificationRequest `object`:  The QualificationRequest data structure represents a request a Worker has made for a Qualification. 
  * Answer [String](#string)
  * QualificationRequestId [String](#string)
  * QualificationTypeId [EntityId](#entityid)
  * SubmitTime [Timestamp](#timestamp)
  * Test [String](#string)
  * WorkerId [CustomerId](#customerid)

### QualificationRequestList
* QualificationRequestList `array`
  * items [QualificationRequest](#qualificationrequest)

### QualificationRequirement
* QualificationRequirement `object`:  The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT. 
  * Comparator **required** [Comparator](#comparator)
  * IntegerValues [IntegerList](#integerlist)
  * LocaleValues [LocaleList](#localelist)
  * QualificationTypeId **required** [String](#string)
  * RequiredToPreview [Boolean](#boolean)

### QualificationRequirementList
* QualificationRequirementList `array`
  * items [QualificationRequirement](#qualificationrequirement)

### QualificationStatus
* QualificationStatus `string` (values: Granted, Revoked)

### QualificationType
* QualificationType `object`:  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. 
  * AnswerKey [String](#string)
  * AutoGranted [Boolean](#boolean)
  * AutoGrantedValue [Integer](#integer)
  * CreationTime [Timestamp](#timestamp)
  * Description [String](#string)
  * IsRequestable [Boolean](#boolean)
  * Keywords [String](#string)
  * Name [String](#string)
  * QualificationTypeId [EntityId](#entityid)
  * QualificationTypeStatus [QualificationTypeStatus](#qualificationtypestatus)
  * RetryDelayInSeconds [Long](#long)
  * Test [String](#string)
  * TestDurationInSeconds [Long](#long)

### QualificationTypeList
* QualificationTypeList `array`
  * items [QualificationType](#qualificationtype)

### QualificationTypeStatus
* QualificationTypeStatus `string` (values: Active, Inactive)

### RejectAssignmentRequest
* RejectAssignmentRequest `object`
  * AssignmentId **required** [EntityId](#entityid)
  * RequesterFeedback **required** [String](#string)

### RejectAssignmentResponse
* RejectAssignmentResponse `object`

### RejectQualificationRequestRequest
* RejectQualificationRequestRequest `object`
  * QualificationRequestId **required** [String](#string)
  * Reason [String](#string)

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
  * ActionId [EntityId](#entityid)
  * ActionName [String](#string)
  * CompleteTime [Timestamp](#timestamp)
  * ErrorCode [String](#string)
  * Result [String](#string)
  * Status [ReviewActionStatus](#reviewactionstatus)
  * TargetId [EntityId](#entityid)
  * TargetType [String](#string)

### ReviewActionDetailList
* ReviewActionDetailList `array`
  * items [ReviewActionDetail](#reviewactiondetail)

### ReviewActionStatus
* ReviewActionStatus `string` (values: Intended, Succeeded, Failed, Cancelled)

### ReviewPolicy
* ReviewPolicy `object`:  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
  * Parameters [PolicyParameterList](#policyparameterlist)
  * PolicyName **required** [String](#string)

### ReviewPolicyLevel
* ReviewPolicyLevel `string` (values: Assignment, HIT)

### ReviewPolicyLevelList
* ReviewPolicyLevelList `array`
  * items [ReviewPolicyLevel](#reviewpolicylevel)

### ReviewReport
* ReviewReport `object`:  Contains both ReviewResult and ReviewAction elements for a particular HIT. 
  * ReviewActions [ReviewActionDetailList](#reviewactiondetaillist)
  * ReviewResults [ReviewResultDetailList](#reviewresultdetaillist)

### ReviewResultDetail
* ReviewResultDetail `object`:  This data structure is returned multiple times for each result specified in the Review Policy. 
  * ActionId [EntityId](#entityid)
  * Key [String](#string)
  * QuestionId [EntityId](#entityid)
  * SubjectId [EntityId](#entityid)
  * SubjectType [String](#string)
  * Value [String](#string)

### ReviewResultDetailList
* ReviewResultDetailList `array`
  * items [ReviewResultDetail](#reviewresultdetail)

### ReviewableHITStatus
* ReviewableHITStatus `string` (values: Reviewable, Reviewing)

### SendBonusRequest
* SendBonusRequest `object`
  * AssignmentId **required** [EntityId](#entityid)
  * BonusAmount **required** [CurrencyAmount](#currencyamount)
  * Reason **required** [String](#string)
  * UniqueRequestToken [IdempotencyToken](#idempotencytoken)
  * WorkerId **required** [CustomerId](#customerid)

### SendBonusResponse
* SendBonusResponse `object`

### SendTestEventNotificationRequest
* SendTestEventNotificationRequest `object`
  * Notification **required** [NotificationSpecification](#notificationspecification)
  * TestEventType **required** [EventType](#eventtype)

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
  * ExpireAt **required** [Timestamp](#timestamp)
  * HITId **required** [EntityId](#entityid)

### UpdateExpirationForHITResponse
* UpdateExpirationForHITResponse `object`

### UpdateHITReviewStatusRequest
* UpdateHITReviewStatusRequest `object`
  * HITId **required** [EntityId](#entityid)
  * Revert [Boolean](#boolean)

### UpdateHITReviewStatusResponse
* UpdateHITReviewStatusResponse `object`

### UpdateHITTypeOfHITRequest
* UpdateHITTypeOfHITRequest `object`
  * HITId **required** [EntityId](#entityid)
  * HITTypeId **required** [EntityId](#entityid)

### UpdateHITTypeOfHITResponse
* UpdateHITTypeOfHITResponse `object`

### UpdateNotificationSettingsRequest
* UpdateNotificationSettingsRequest `object`
  * Active [Boolean](#boolean)
  * HITTypeId **required** [EntityId](#entityid)
  * Notification [NotificationSpecification](#notificationspecification)

### UpdateNotificationSettingsResponse
* UpdateNotificationSettingsResponse `object`

### UpdateQualificationTypeRequest
* UpdateQualificationTypeRequest `object`
  * AnswerKey [String](#string)
  * AutoGranted [Boolean](#boolean)
  * AutoGrantedValue [Integer](#integer)
  * Description [String](#string)
  * QualificationTypeId **required** [EntityId](#entityid)
  * QualificationTypeStatus [QualificationTypeStatus](#qualificationtypestatus)
  * RetryDelayInSeconds [Long](#long)
  * Test [String](#string)
  * TestDurationInSeconds [Long](#long)

### UpdateQualificationTypeResponse
* UpdateQualificationTypeResponse `object`
  * QualificationType [QualificationType](#qualificationtype)

### WorkerBlock
* WorkerBlock `object`:  The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block. 
  * Reason [String](#string)
  * WorkerId [CustomerId](#customerid)

### WorkerBlockList
* WorkerBlockList `array`
  * items [WorkerBlock](#workerblock)


