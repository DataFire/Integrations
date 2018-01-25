# @datafire/amazonaws_shield

Client library for AWS Shield

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_shield
```
```js
let amazonaws_shield = require('@datafire/amazonaws_shield').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_shield.CreateProtection({
  "Name": "",
  "ResourceArn": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Shield Advanced</fullname> <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions, data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the <a href="http://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>

## Actions

### CreateProtection



```js
amazonaws_shield.CreateProtection({
  "Name": "",
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [ProtectionName](#protectionname)
  * ResourceArn **required** [ResourceArn](#resourcearn)

#### Output
* output [CreateProtectionResponse](#createprotectionresponse)

### CreateSubscription



```js
amazonaws_shield.CreateSubscription({}, context)
```

#### Input
* input `object`

#### Output
* output [CreateSubscriptionResponse](#createsubscriptionresponse)

### DeleteProtection



```js
amazonaws_shield.DeleteProtection({
  "ProtectionId": ""
}, context)
```

#### Input
* input `object`
  * ProtectionId **required** [ProtectionId](#protectionid)

#### Output
* output [DeleteProtectionResponse](#deleteprotectionresponse)

### DeleteSubscription



```js
amazonaws_shield.DeleteSubscription({}, context)
```

#### Input
* input `object`

#### Output
* output [DeleteSubscriptionResponse](#deletesubscriptionresponse)

### DescribeAttack



```js
amazonaws_shield.DescribeAttack({
  "AttackId": ""
}, context)
```

#### Input
* input `object`
  * AttackId **required** [AttackId](#attackid)

#### Output
* output [DescribeAttackResponse](#describeattackresponse)

### DescribeProtection



```js
amazonaws_shield.DescribeProtection({
  "ProtectionId": ""
}, context)
```

#### Input
* input `object`
  * ProtectionId **required** [ProtectionId](#protectionid)

#### Output
* output [DescribeProtectionResponse](#describeprotectionresponse)

### DescribeSubscription



```js
amazonaws_shield.DescribeSubscription({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeSubscriptionResponse](#describesubscriptionresponse)

### ListAttacks



```js
amazonaws_shield.ListAttacks({}, context)
```

#### Input
* input `object`
  * EndTime [TimeRange](#timerange)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [Token](#token)
  * ResourceArns [ResourceArnFilterList](#resourcearnfilterlist)
  * StartTime [TimeRange](#timerange)

#### Output
* output [ListAttacksResponse](#listattacksresponse)

### ListProtections



```js
amazonaws_shield.ListProtections({}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [Token](#token)

#### Output
* output [ListProtectionsResponse](#listprotectionsresponse)



## Definitions

### AttackDetail
* AttackDetail `object`: The details of a DDoS attack.
  * AttackCounters [SummarizedCounterList](#summarizedcounterlist)
  * AttackId [AttackId](#attackid)
  * EndTime [AttackTimestamp](#attacktimestamp)
  * Mitigations [MitigationList](#mitigationlist)
  * ResourceArn [ResourceArn](#resourcearn)
  * StartTime [AttackTimestamp](#attacktimestamp)
  * SubResources [SubResourceSummaryList](#subresourcesummarylist)

### AttackId
* AttackId `string`

### AttackSummaries
* AttackSummaries `array`
  * items [AttackSummary](#attacksummary)

### AttackSummary
* AttackSummary `object`: Summarizes all DDoS attacks for a specified time period.
  * AttackId [String](#string)
  * AttackVectors [AttackVectorDescriptionList](#attackvectordescriptionlist)
  * EndTime [AttackTimestamp](#attacktimestamp)
  * ResourceArn [String](#string)
  * StartTime [AttackTimestamp](#attacktimestamp)

### AttackTimestamp
* AttackTimestamp `string`

### AttackVectorDescription
* AttackVectorDescription `object`: Describes the attack.
  * VectorType **required** [String](#string)

### AttackVectorDescriptionList
* AttackVectorDescriptionList `array`
  * items [AttackVectorDescription](#attackvectordescription)

### CreateProtectionRequest
* CreateProtectionRequest `object`
  * Name **required** [ProtectionName](#protectionname)
  * ResourceArn **required** [ResourceArn](#resourcearn)

### CreateProtectionResponse
* CreateProtectionResponse `object`
  * ProtectionId [ProtectionId](#protectionid)

### CreateSubscriptionRequest
* CreateSubscriptionRequest `object`

### CreateSubscriptionResponse
* CreateSubscriptionResponse `object`

### DeleteProtectionRequest
* DeleteProtectionRequest `object`
  * ProtectionId **required** [ProtectionId](#protectionid)

### DeleteProtectionResponse
* DeleteProtectionResponse `object`

### DeleteSubscriptionRequest
* DeleteSubscriptionRequest `object`

### DeleteSubscriptionResponse
* DeleteSubscriptionResponse `object`

### DescribeAttackRequest
* DescribeAttackRequest `object`
  * AttackId **required** [AttackId](#attackid)

### DescribeAttackResponse
* DescribeAttackResponse `object`
  * Attack [AttackDetail](#attackdetail)

### DescribeProtectionRequest
* DescribeProtectionRequest `object`
  * ProtectionId **required** [ProtectionId](#protectionid)

### DescribeProtectionResponse
* DescribeProtectionResponse `object`
  * Protection [Protection](#protection)

### DescribeSubscriptionRequest
* DescribeSubscriptionRequest `object`

### DescribeSubscriptionResponse
* DescribeSubscriptionResponse `object`
  * Subscription [Subscription](#subscription)

### Double
* Double `number`

### DurationInSeconds
* DurationInSeconds `integer`

### Integer
* Integer `integer`

### InternalErrorException
* InternalErrorException `object`: Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.
  * message [errorMessage](#errormessage)

### InvalidOperationException
* InvalidOperationException `object`: Exception that indicates that the operation would not cause any change to occur.
  * message [errorMessage](#errormessage)

### InvalidParameterException
* InvalidParameterException `object`: Exception that indicates that the parameters passed to the API are invalid. 
  * message [errorMessage](#errormessage)

### InvalidResourceException
* InvalidResourceException `object`: Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.
  * message [errorMessage](#errormessage)

### LimitNumber
* LimitNumber `integer`

### LimitType
* LimitType `string`

### LimitsExceededException
* LimitsExceededException `object`: Exception that indicates that the operation would exceed a limit.
  * Limit [LimitNumber](#limitnumber)
  * Type [LimitType](#limittype)
  * message [errorMessage](#errormessage)

### ListAttacksRequest
* ListAttacksRequest `object`
  * EndTime [TimeRange](#timerange)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [Token](#token)
  * ResourceArns [ResourceArnFilterList](#resourcearnfilterlist)
  * StartTime [TimeRange](#timerange)

### ListAttacksResponse
* ListAttacksResponse `object`
  * AttackSummaries [AttackSummaries](#attacksummaries)
  * NextToken [Token](#token)

### ListProtectionsRequest
* ListProtectionsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [Token](#token)

### ListProtectionsResponse
* ListProtectionsResponse `object`
  * NextToken [Token](#token)
  * Protections [Protections](#protections)

### LockedSubscriptionException
* LockedSubscriptionException `object`: Exception that indicates that the subscription has been modified by another client. You can retry the request.
  * message [errorMessage](#errormessage)

### MaxResults
* MaxResults `integer`

### Mitigation
* Mitigation `object`: The mitigation applied to a DDoS attack.
  * MitigationName [String](#string)

### MitigationList
* MitigationList `array`
  * items [Mitigation](#mitigation)

### OptimisticLockException
* OptimisticLockException `object`: Exception that indicates that the protection state has been modified by another client. You can retry the request.
  * message [errorMessage](#errormessage)

### Protection
* Protection `object`: An object that represents a resource that is under DDoS protection.
  * Id [ProtectionId](#protectionid)
  * Name [ProtectionName](#protectionname)
  * ResourceArn [ResourceArn](#resourcearn)

### ProtectionId
* ProtectionId `string`

### ProtectionName
* ProtectionName `string`

### Protections
* Protections `array`
  * items [Protection](#protection)

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: Exception indicating the specified resource already exists.
  * message [errorMessage](#errormessage)

### ResourceArn
* ResourceArn `string`

### ResourceArnFilterList
* ResourceArnFilterList `array`
  * items [ResourceArn](#resourcearn)

### ResourceNotFoundException
* ResourceNotFoundException `object`: Exception indicating the specified resource does not exist.
  * message [errorMessage](#errormessage)

### String
* String `string`

### SubResourceSummary
* SubResourceSummary `object`: The attack information for the specified SubResource.
  * AttackVectors [SummarizedAttackVectorList](#summarizedattackvectorlist)
  * Counters [SummarizedCounterList](#summarizedcounterlist)
  * Id [String](#string)
  * Type [SubResourceType](#subresourcetype)

### SubResourceSummaryList
* SubResourceSummaryList `array`
  * items [SubResourceSummary](#subresourcesummary)

### SubResourceType
* SubResourceType `string` (values: IP, URL)

### Subscription
* Subscription `object`: Information about the AWS Shield Advanced subscription for an account.
  * StartTime [Timestamp](#timestamp)
  * TimeCommitmentInSeconds [DurationInSeconds](#durationinseconds)

### SummarizedAttackVector
* SummarizedAttackVector `object`: A summary of information about the attack.
  * VectorCounters [SummarizedCounterList](#summarizedcounterlist)
  * VectorType **required** [String](#string)

### SummarizedAttackVectorList
* SummarizedAttackVectorList `array`
  * items [SummarizedAttackVector](#summarizedattackvector)

### SummarizedCounter
* SummarizedCounter `object`: The counter that describes a DDoS attack.
  * Average [Double](#double)
  * Max [Double](#double)
  * N [Integer](#integer)
  * Name [String](#string)
  * Sum [Double](#double)
  * Unit [String](#string)

### SummarizedCounterList
* SummarizedCounterList `array`
  * items [SummarizedCounter](#summarizedcounter)

### TimeRange
* TimeRange `object`: The time range.
  * FromInclusive [AttackTimestamp](#attacktimestamp)
  * ToExclusive [AttackTimestamp](#attacktimestamp)

### Timestamp
* Timestamp `string`

### Token
* Token `string`

### errorMessage
* errorMessage `string`


