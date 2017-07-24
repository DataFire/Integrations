# @datafire/amazonaws_mturk_requester

Client library for Amazon Mechanical Turk

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_mturk_requester
```

```js
let datafire = require('datafire');
let amazonaws_mturk_requester = require('@datafire/amazonaws_mturk_requester').actions;
let context = new datafire.Context();

amazonaws_mturk_requester.AcceptQualificationRequest({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Mechanical Turk API Reference</fullname>

## Actions
### AcceptQualificationRequest



```js
amazonaws_mturk_requester.AcceptQualificationRequest({}, context)
```

#### Parameters

### ApproveAssignment



```js
amazonaws_mturk_requester.ApproveAssignment({}, context)
```

#### Parameters

### AssociateQualificationWithWorker



```js
amazonaws_mturk_requester.AssociateQualificationWithWorker({}, context)
```

#### Parameters

### CreateAdditionalAssignmentsForHIT



```js
amazonaws_mturk_requester.CreateAdditionalAssignmentsForHIT({}, context)
```

#### Parameters

### CreateHIT



```js
amazonaws_mturk_requester.CreateHIT({}, context)
```

#### Parameters

### CreateHITType



```js
amazonaws_mturk_requester.CreateHITType({}, context)
```

#### Parameters

### CreateHITWithHITType



```js
amazonaws_mturk_requester.CreateHITWithHITType({}, context)
```

#### Parameters

### CreateQualificationType



```js
amazonaws_mturk_requester.CreateQualificationType({}, context)
```

#### Parameters

### CreateWorkerBlock



```js
amazonaws_mturk_requester.CreateWorkerBlock({}, context)
```

#### Parameters

### DeleteHIT



```js
amazonaws_mturk_requester.DeleteHIT({}, context)
```

#### Parameters

### DeleteQualificationType



```js
amazonaws_mturk_requester.DeleteQualificationType({}, context)
```

#### Parameters

### DeleteWorkerBlock



```js
amazonaws_mturk_requester.DeleteWorkerBlock({}, context)
```

#### Parameters

### DisassociateQualificationFromWorker



```js
amazonaws_mturk_requester.DisassociateQualificationFromWorker({}, context)
```

#### Parameters

### GetAccountBalance



```js
amazonaws_mturk_requester.GetAccountBalance({}, context)
```

#### Parameters

### GetAssignment



```js
amazonaws_mturk_requester.GetAssignment({}, context)
```

#### Parameters

### GetFileUploadURL



```js
amazonaws_mturk_requester.GetFileUploadURL({}, context)
```

#### Parameters

### GetHIT



```js
amazonaws_mturk_requester.GetHIT({}, context)
```

#### Parameters

### GetQualificationScore



```js
amazonaws_mturk_requester.GetQualificationScore({}, context)
```

#### Parameters

### GetQualificationType



```js
amazonaws_mturk_requester.GetQualificationType({}, context)
```

#### Parameters

### ListAssignmentsForHIT



```js
amazonaws_mturk_requester.ListAssignmentsForHIT({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListBonusPayments



```js
amazonaws_mturk_requester.ListBonusPayments({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListHITs



```js
amazonaws_mturk_requester.ListHITs({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListHITsForQualificationType



```js
amazonaws_mturk_requester.ListHITsForQualificationType({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListQualificationRequests



```js
amazonaws_mturk_requester.ListQualificationRequests({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListQualificationTypes



```js
amazonaws_mturk_requester.ListQualificationTypes({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListReviewPolicyResultsForHIT



```js
amazonaws_mturk_requester.ListReviewPolicyResultsForHIT({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListReviewableHITs



```js
amazonaws_mturk_requester.ListReviewableHITs({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListWorkerBlocks



```js
amazonaws_mturk_requester.ListWorkerBlocks({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListWorkersWithQualificationType



```js
amazonaws_mturk_requester.ListWorkersWithQualificationType({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### NotifyWorkers



```js
amazonaws_mturk_requester.NotifyWorkers({}, context)
```

#### Parameters

### RejectAssignment



```js
amazonaws_mturk_requester.RejectAssignment({}, context)
```

#### Parameters

### RejectQualificationRequest



```js
amazonaws_mturk_requester.RejectQualificationRequest({}, context)
```

#### Parameters

### SendBonus



```js
amazonaws_mturk_requester.SendBonus({}, context)
```

#### Parameters

### SendTestEventNotification



```js
amazonaws_mturk_requester.SendTestEventNotification({}, context)
```

#### Parameters

### UpdateExpirationForHIT



```js
amazonaws_mturk_requester.UpdateExpirationForHIT({}, context)
```

#### Parameters

### UpdateHITReviewStatus



```js
amazonaws_mturk_requester.UpdateHITReviewStatus({}, context)
```

#### Parameters

### UpdateHITTypeOfHIT



```js
amazonaws_mturk_requester.UpdateHITTypeOfHIT({}, context)
```

#### Parameters

### UpdateNotificationSettings



```js
amazonaws_mturk_requester.UpdateNotificationSettings({}, context)
```

#### Parameters

### UpdateQualificationType



```js
amazonaws_mturk_requester.UpdateQualificationType({}, context)
```

#### Parameters

