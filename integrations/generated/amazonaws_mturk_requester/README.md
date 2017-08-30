# @datafire/amazonaws_mturk_requester

Client library for Amazon Mechanical Turk

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_mturk_requester
```

```js
let datafire = require('datafire');
let amazonaws_mturk_requester = require('@datafire/amazonaws_mturk_requester').create();

amazonaws_mturk_requester.AcceptQualificationRequest({}).then(data => {
  console.log(data);
})
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

#### Parameters
* IntegerValue (integer)
* QualificationRequestId (string) **required**

### ApproveAssignment



```js
amazonaws_mturk_requester.ApproveAssignment({
  "AssignmentId": ""
}, context)
```

#### Parameters
* AssignmentId (string) **required**
* OverrideRejection (boolean)
* RequesterFeedback (string)

### AssociateQualificationWithWorker



```js
amazonaws_mturk_requester.AssociateQualificationWithWorker({
  "QualificationTypeId": "",
  "WorkerId": ""
}, context)
```

#### Parameters
* IntegerValue (integer)
* QualificationTypeId (string) **required**
* SendNotification (boolean)
* WorkerId (string) **required**

### CreateAdditionalAssignmentsForHIT



```js
amazonaws_mturk_requester.CreateAdditionalAssignmentsForHIT({
  "HITId": ""
}, context)
```

#### Parameters
* HITId (string) **required**
* NumberOfAdditionalAssignments (integer)
* UniqueRequestToken (string)

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

#### Parameters
* AssignmentDurationInSeconds (integer) **required**
* AssignmentReviewPolicy (object) -  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
* AutoApprovalDelayInSeconds (integer)
* Description (string) **required**
* HITLayoutId (string)
* HITLayoutParameters (array)
* HITReviewPolicy (object) -  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
* Keywords (string)
* LifetimeInSeconds (integer) **required**
* MaxAssignments (integer)
* QualificationRequirements (array)
* Question (string)
* RequesterAnnotation (string)
* Reward (string) **required** - A string representing a numeric value.
* Title (string) **required**
* UniqueRequestToken (string)

### CreateHITType



```js
amazonaws_mturk_requester.CreateHITType({
  "AssignmentDurationInSeconds": 0,
  "Reward": "",
  "Title": "",
  "Description": ""
}, context)
```

#### Parameters
* AssignmentDurationInSeconds (integer) **required**
* AutoApprovalDelayInSeconds (integer)
* Description (string) **required**
* Keywords (string)
* QualificationRequirements (array)
* Reward (string) **required** - A string representing a numeric value.
* Title (string) **required**

### CreateHITWithHITType



```js
amazonaws_mturk_requester.CreateHITWithHITType({
  "HITTypeId": "",
  "LifetimeInSeconds": 0
}, context)
```

#### Parameters
* AssignmentReviewPolicy (object) -  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
* HITLayoutId (string)
* HITLayoutParameters (array)
* HITReviewPolicy (object) -  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
* HITTypeId (string) **required**
* LifetimeInSeconds (integer) **required**
* MaxAssignments (integer)
* Question (string)
* RequesterAnnotation (string)
* UniqueRequestToken (string)

### CreateQualificationType



```js
amazonaws_mturk_requester.CreateQualificationType({
  "Name": "",
  "Description": "",
  "QualificationTypeStatus": ""
}, context)
```

#### Parameters
* AnswerKey (string)
* AutoGranted (boolean)
* AutoGrantedValue (integer)
* Description (string) **required**
* Keywords (string)
* Name (string) **required**
* QualificationTypeStatus (string) **required**
* RetryDelayInSeconds (integer)
* Test (string)
* TestDurationInSeconds (integer)

### CreateWorkerBlock



```js
amazonaws_mturk_requester.CreateWorkerBlock({
  "WorkerId": "",
  "Reason": ""
}, context)
```

#### Parameters
* Reason (string) **required**
* WorkerId (string) **required**

### DeleteHIT



```js
amazonaws_mturk_requester.DeleteHIT({
  "HITId": ""
}, context)
```

#### Parameters
* HITId (string) **required**

### DeleteQualificationType



```js
amazonaws_mturk_requester.DeleteQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Parameters
* QualificationTypeId (string) **required**

### DeleteWorkerBlock



```js
amazonaws_mturk_requester.DeleteWorkerBlock({
  "WorkerId": ""
}, context)
```

#### Parameters
* Reason (string)
* WorkerId (string) **required**

### DisassociateQualificationFromWorker



```js
amazonaws_mturk_requester.DisassociateQualificationFromWorker({
  "WorkerId": "",
  "QualificationTypeId": ""
}, context)
```

#### Parameters
* QualificationTypeId (string) **required**
* Reason (string)
* WorkerId (string) **required**

### GetAccountBalance



```js
amazonaws_mturk_requester.GetAccountBalance({}, context)
```

#### Parameters
*This action has no parameters*

### GetAssignment



```js
amazonaws_mturk_requester.GetAssignment({
  "AssignmentId": ""
}, context)
```

#### Parameters
* AssignmentId (string) **required**

### GetFileUploadURL



```js
amazonaws_mturk_requester.GetFileUploadURL({
  "AssignmentId": "",
  "QuestionIdentifier": ""
}, context)
```

#### Parameters
* AssignmentId (string) **required**
* QuestionIdentifier (string) **required**

### GetHIT



```js
amazonaws_mturk_requester.GetHIT({
  "HITId": ""
}, context)
```

#### Parameters
* HITId (string) **required**

### GetQualificationScore



```js
amazonaws_mturk_requester.GetQualificationScore({
  "QualificationTypeId": "",
  "WorkerId": ""
}, context)
```

#### Parameters
* QualificationTypeId (string) **required**
* WorkerId (string) **required**

### GetQualificationType



```js
amazonaws_mturk_requester.GetQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Parameters
* QualificationTypeId (string) **required**

### ListAssignmentsForHIT



```js
amazonaws_mturk_requester.ListAssignmentsForHIT({
  "HITId": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* AssignmentStatuses (array)
* HITId (string) **required**
* MaxResults (integer)
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 

### ListBonusPayments



```js
amazonaws_mturk_requester.ListBonusPayments({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* AssignmentId (string)
* HITId (string)
* MaxResults (integer)
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 

### ListHITs



```js
amazonaws_mturk_requester.ListHITs({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 

### ListHITsForQualificationType



```js
amazonaws_mturk_requester.ListHITsForQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 
* QualificationTypeId (string) **required**

### ListQualificationRequests



```js
amazonaws_mturk_requester.ListQualificationRequests({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 
* QualificationTypeId (string)

### ListQualificationTypes



```js
amazonaws_mturk_requester.ListQualificationTypes({
  "MustBeRequestable": true
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* MustBeOwnedByCaller (boolean)
* MustBeRequestable (boolean) **required**
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 
* Query (string)

### ListReviewPolicyResultsForHIT



```js
amazonaws_mturk_requester.ListReviewPolicyResultsForHIT({
  "HITId": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* HITId (string) **required**
* MaxResults (integer)
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 
* PolicyLevels (array)
* RetrieveActions (boolean)
* RetrieveResults (boolean)

### ListReviewableHITs



```js
amazonaws_mturk_requester.ListReviewableHITs({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* HITTypeId (string)
* MaxResults (integer)
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 
* Status (string)

### ListWorkerBlocks



```js
amazonaws_mturk_requester.ListWorkerBlocks({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 

### ListWorkersWithQualificationType



```js
amazonaws_mturk_requester.ListWorkersWithQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string) - If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 
* QualificationTypeId (string) **required**
* Status (string)

### NotifyWorkers



```js
amazonaws_mturk_requester.NotifyWorkers({
  "Subject": "",
  "MessageText": "",
  "WorkerIds": []
}, context)
```

#### Parameters
* MessageText (string) **required**
* Subject (string) **required**
* WorkerIds (array) **required**

### RejectAssignment



```js
amazonaws_mturk_requester.RejectAssignment({
  "AssignmentId": ""
}, context)
```

#### Parameters
* AssignmentId (string) **required**
* RequesterFeedback (string)

### RejectQualificationRequest



```js
amazonaws_mturk_requester.RejectQualificationRequest({
  "QualificationRequestId": ""
}, context)
```

#### Parameters
* QualificationRequestId (string) **required**
* Reason (string)

### SendBonus



```js
amazonaws_mturk_requester.SendBonus({
  "WorkerId": "",
  "BonusAmount": "",
  "AssignmentId": ""
}, context)
```

#### Parameters
* AssignmentId (string) **required**
* BonusAmount (string) **required** - A string representing a numeric value.
* Reason (string)
* UniqueRequestToken (string)
* WorkerId (string) **required**

### SendTestEventNotification



```js
amazonaws_mturk_requester.SendTestEventNotification({
  "Notification": {
    "Destination": "",
    "Transport": ""
  },
  "TestEventType": ""
}, context)
```

#### Parameters
* Notification (object) **required** - The NotificationSpecification data structure describes a HIT event notification for a HIT type.
* TestEventType (string) **required**

### UpdateExpirationForHIT



```js
amazonaws_mturk_requester.UpdateExpirationForHIT({
  "HITId": ""
}, context)
```

#### Parameters
* ExpireAt (string)
* HITId (string) **required**

### UpdateHITReviewStatus



```js
amazonaws_mturk_requester.UpdateHITReviewStatus({
  "HITId": ""
}, context)
```

#### Parameters
* HITId (string) **required**
* Revert (boolean)

### UpdateHITTypeOfHIT



```js
amazonaws_mturk_requester.UpdateHITTypeOfHIT({
  "HITId": "",
  "HITTypeId": ""
}, context)
```

#### Parameters
* HITId (string) **required**
* HITTypeId (string) **required**

### UpdateNotificationSettings



```js
amazonaws_mturk_requester.UpdateNotificationSettings({
  "HITTypeId": ""
}, context)
```

#### Parameters
* Active (boolean)
* HITTypeId (string) **required**
* Notification (object) - The NotificationSpecification data structure describes a HIT event notification for a HIT type.

### UpdateQualificationType



```js
amazonaws_mturk_requester.UpdateQualificationType({
  "QualificationTypeId": ""
}, context)
```

#### Parameters
* AnswerKey (string)
* AutoGranted (boolean)
* AutoGrantedValue (integer)
* Description (string)
* QualificationTypeId (string) **required**
* QualificationTypeStatus (string)
* RetryDelayInSeconds (integer)
* Test (string)
* TestDurationInSeconds (integer)

