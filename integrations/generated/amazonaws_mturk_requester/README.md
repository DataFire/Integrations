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


### ApproveAssignment



```js
amazonaws_mturk_requester.ApproveAssignment({}, context)
```


### AssociateQualificationWithWorker



```js
amazonaws_mturk_requester.AssociateQualificationWithWorker({}, context)
```


### CreateAdditionalAssignmentsForHIT



```js
amazonaws_mturk_requester.CreateAdditionalAssignmentsForHIT({}, context)
```


### CreateHIT



```js
amazonaws_mturk_requester.CreateHIT({}, context)
```


### CreateHITType



```js
amazonaws_mturk_requester.CreateHITType({}, context)
```


### CreateHITWithHITType



```js
amazonaws_mturk_requester.CreateHITWithHITType({}, context)
```


### CreateQualificationType



```js
amazonaws_mturk_requester.CreateQualificationType({}, context)
```


### CreateWorkerBlock



```js
amazonaws_mturk_requester.CreateWorkerBlock({}, context)
```


### DeleteHIT



```js
amazonaws_mturk_requester.DeleteHIT({}, context)
```


### DeleteQualificationType



```js
amazonaws_mturk_requester.DeleteQualificationType({}, context)
```


### DeleteWorkerBlock



```js
amazonaws_mturk_requester.DeleteWorkerBlock({}, context)
```


### DisassociateQualificationFromWorker



```js
amazonaws_mturk_requester.DisassociateQualificationFromWorker({}, context)
```


### GetAccountBalance



```js
amazonaws_mturk_requester.GetAccountBalance({}, context)
```


### GetAssignment



```js
amazonaws_mturk_requester.GetAssignment({}, context)
```


### GetFileUploadURL



```js
amazonaws_mturk_requester.GetFileUploadURL({}, context)
```


### GetHIT



```js
amazonaws_mturk_requester.GetHIT({}, context)
```


### GetQualificationScore



```js
amazonaws_mturk_requester.GetQualificationScore({}, context)
```


### GetQualificationType



```js
amazonaws_mturk_requester.GetQualificationType({}, context)
```


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


### RejectAssignment



```js
amazonaws_mturk_requester.RejectAssignment({}, context)
```


### RejectQualificationRequest



```js
amazonaws_mturk_requester.RejectQualificationRequest({}, context)
```


### SendBonus



```js
amazonaws_mturk_requester.SendBonus({}, context)
```


### SendTestEventNotification



```js
amazonaws_mturk_requester.SendTestEventNotification({}, context)
```


### UpdateExpirationForHIT



```js
amazonaws_mturk_requester.UpdateExpirationForHIT({}, context)
```


### UpdateHITReviewStatus



```js
amazonaws_mturk_requester.UpdateHITReviewStatus({}, context)
```


### UpdateHITTypeOfHIT



```js
amazonaws_mturk_requester.UpdateHITTypeOfHIT({}, context)
```


### UpdateNotificationSettings



```js
amazonaws_mturk_requester.UpdateNotificationSettings({}, context)
```


### UpdateQualificationType



```js
amazonaws_mturk_requester.UpdateQualificationType({}, context)
```


