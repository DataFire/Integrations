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

amazonaws_shield.AssociateDRTLogBucket({
  "LogBucket": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Shield Advanced</fullname> <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions, data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the <a href="http://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>

## Actions

### AssociateDRTLogBucket



```js
amazonaws_shield.AssociateDRTLogBucket({
  "LogBucket": ""
}, context)
```

#### Input
* input `object`
  * LogBucket **required** [LogBucket](#logbucket)

#### Output
* output [AssociateDRTLogBucketResponse](#associatedrtlogbucketresponse)

### AssociateDRTRole



```js
amazonaws_shield.AssociateDRTRole({
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * RoleArn **required** [RoleArn](#rolearn)

#### Output
* output [AssociateDRTRoleResponse](#associatedrtroleresponse)

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

### DescribeDRTAccess



```js
amazonaws_shield.DescribeDRTAccess({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeDRTAccessResponse](#describedrtaccessresponse)

### DescribeEmergencyContactSettings



```js
amazonaws_shield.DescribeEmergencyContactSettings({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeEmergencyContactSettingsResponse](#describeemergencycontactsettingsresponse)

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

### DisassociateDRTLogBucket



```js
amazonaws_shield.DisassociateDRTLogBucket({
  "LogBucket": ""
}, context)
```

#### Input
* input `object`
  * LogBucket **required** [LogBucket](#logbucket)

#### Output
* output [DisassociateDRTLogBucketResponse](#disassociatedrtlogbucketresponse)

### DisassociateDRTRole



```js
amazonaws_shield.DisassociateDRTRole({}, context)
```

#### Input
* input `object`

#### Output
* output [DisassociateDRTRoleResponse](#disassociatedrtroleresponse)

### GetSubscriptionState



```js
amazonaws_shield.GetSubscriptionState({}, context)
```

#### Input
* input `object`

#### Output
* output [GetSubscriptionStateResponse](#getsubscriptionstateresponse)

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

### UpdateEmergencyContactSettings



```js
amazonaws_shield.UpdateEmergencyContactSettings({}, context)
```

#### Input
* input `object`
  * EmergencyContactList [EmergencyContactList](#emergencycontactlist)

#### Output
* output [UpdateEmergencyContactSettingsResponse](#updateemergencycontactsettingsresponse)

### UpdateSubscription



```js
amazonaws_shield.UpdateSubscription({}, context)
```

#### Input
* input `object`
  * AutoRenew [AutoRenew](#autorenew)

#### Output
* output [UpdateSubscriptionResponse](#updatesubscriptionresponse)



## Definitions

### AccessDeniedForDependencyException
* AccessDeniedForDependencyException `object`: In order to grant the necessary access to the DDoS Response Team, the user submitting <code>AssociateDRTRole</code> must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. 
  * message [errorMessage](#errormessage)

### AssociateDRTLogBucketRequest
* AssociateDRTLogBucketRequest `object`
  * LogBucket **required** [LogBucket](#logbucket)

### AssociateDRTLogBucketResponse
* AssociateDRTLogBucketResponse `object`

### AssociateDRTRoleRequest
* AssociateDRTRoleRequest `object`
  * RoleArn **required** [RoleArn](#rolearn)

### AssociateDRTRoleResponse
* AssociateDRTRoleResponse `object`

### AttackDetail
* AttackDetail `object`: The details of a DDoS attack.
  * AttackCounters [SummarizedCounterList](#summarizedcounterlist)
  * AttackId [AttackId](#attackid)
  * AttackProperties [AttackProperties](#attackproperties)
  * EndTime [AttackTimestamp](#attacktimestamp)
  * Mitigations [MitigationList](#mitigationlist)
  * ResourceArn [ResourceArn](#resourcearn)
  * StartTime [AttackTimestamp](#attacktimestamp)
  * SubResources [SubResourceSummaryList](#subresourcesummarylist)

### AttackId
* AttackId `string`

### AttackLayer
* AttackLayer `string` (values: NETWORK, APPLICATION)

### AttackProperties
* AttackProperties `array`
  * items [AttackProperty](#attackproperty)

### AttackProperty
* AttackProperty `object`: Details of the described attack.
  * AttackLayer [AttackLayer](#attacklayer)
  * AttackPropertyIdentifier [AttackPropertyIdentifier](#attackpropertyidentifier)
  * TopContributors [TopContributors](#topcontributors)
  * Total [Long](#long)
  * Unit [Unit](#unit)

### AttackPropertyIdentifier
* AttackPropertyIdentifier `string` (values: DESTINATION_URL, REFERRER, SOURCE_ASN, SOURCE_COUNTRY, SOURCE_IP_ADDRESS, SOURCE_USER_AGENT)

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

### AutoRenew
* AutoRenew `string` (values: ENABLED, DISABLED)

### Contributor
* Contributor `object`: A contributor to the attack and their contribution.
  * Name [String](#string)
  * Value [Long](#long)

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

### DescribeDRTAccessRequest
* DescribeDRTAccessRequest `object`

### DescribeDRTAccessResponse
* DescribeDRTAccessResponse `object`
  * LogBucketList [LogBucketList](#logbucketlist)
  * RoleArn [RoleArn](#rolearn)

### DescribeEmergencyContactSettingsRequest
* DescribeEmergencyContactSettingsRequest `object`

### DescribeEmergencyContactSettingsResponse
* DescribeEmergencyContactSettingsResponse `object`
  * EmergencyContactList [EmergencyContactList](#emergencycontactlist)

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

### DisassociateDRTLogBucketRequest
* DisassociateDRTLogBucketRequest `object`
  * LogBucket **required** [LogBucket](#logbucket)

### DisassociateDRTLogBucketResponse
* DisassociateDRTLogBucketResponse `object`

### DisassociateDRTRoleRequest
* DisassociateDRTRoleRequest `object`

### DisassociateDRTRoleResponse
* DisassociateDRTRoleResponse `object`

### Double
* Double `number`

### DurationInSeconds
* DurationInSeconds `integer`

### EmailAddress
* EmailAddress `string`

### EmergencyContact
* EmergencyContact `object`: Contact information that the DRT can use to contact you during a suspected attack.
  * EmailAddress **required** [EmailAddress](#emailaddress)

### EmergencyContactList
* EmergencyContactList `array`
  * items [EmergencyContact](#emergencycontact)

### GetSubscriptionStateRequest
* GetSubscriptionStateRequest `object`

### GetSubscriptionStateResponse
* GetSubscriptionStateResponse `object`
  * SubscriptionState **required** [SubscriptionState](#subscriptionstate)

### Integer
* Integer `integer`

### InternalErrorException
* InternalErrorException `object`: Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.
  * message [errorMessage](#errormessage)

### InvalidOperationException
* InvalidOperationException `object`: Exception that indicates that the operation would not cause any change to occur.
  * message [errorMessage](#errormessage)

### InvalidPaginationTokenException
* InvalidPaginationTokenException `object`: Exception that indicates that the NextToken specified in the request is invalid. Submit the request using the NextToken value that was returned in the response.
  * message [errorMessage](#errormessage)

### InvalidParameterException
* InvalidParameterException `object`: Exception that indicates that the parameters passed to the API are invalid. 
  * message [errorMessage](#errormessage)

### InvalidResourceException
* InvalidResourceException `object`: Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.
  * message [errorMessage](#errormessage)

### Limit
* Limit `object`: Specifies how many protections of a given type you can create.
  * Max [Long](#long)
  * Type [String](#string)

### LimitNumber
* LimitNumber `integer`

### LimitType
* LimitType `string`

### Limits
* Limits `array`
  * items [Limit](#limit)

### LimitsExceededException
* LimitsExceededException `object`: <p>Exception that indicates that the operation would exceed a limit.</p> <p> <code>Type</code> is the type of limit that would be exceeded.</p> <p> <code>Limit</code> is the threshold that would be exceeded.</p>
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
* LockedSubscriptionException `object`: You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.
  * message [errorMessage](#errormessage)

### LogBucket
* LogBucket `string`

### LogBucketList
* LogBucketList `array`
  * items [LogBucket](#logbucket)

### Long
* Long `integer`

### MaxResults
* MaxResults `integer`

### Mitigation
* Mitigation `object`: The mitigation applied to a DDoS attack.
  * MitigationName [String](#string)

### MitigationList
* MitigationList `array`
  * items [Mitigation](#mitigation)

### NoAssociatedRoleException
* NoAssociatedRoleException `object`: The ARN of the role that you specifed does not exist.
  * message [errorMessage](#errormessage)

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

### RoleArn
* RoleArn `string`

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
  * AutoRenew [AutoRenew](#autorenew)
  * EndTime [Timestamp](#timestamp)
  * Limits [Limits](#limits)
  * StartTime [Timestamp](#timestamp)
  * TimeCommitmentInSeconds [DurationInSeconds](#durationinseconds)

### SubscriptionState
* SubscriptionState `string` (values: ACTIVE, INACTIVE)

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

### TopContributors
* TopContributors `array`
  * items [Contributor](#contributor)

### Unit
* Unit `string` (values: BITS, BYTES, PACKETS, REQUESTS)

### UpdateEmergencyContactSettingsRequest
* UpdateEmergencyContactSettingsRequest `object`
  * EmergencyContactList [EmergencyContactList](#emergencycontactlist)

### UpdateEmergencyContactSettingsResponse
* UpdateEmergencyContactSettingsResponse `object`

### UpdateSubscriptionRequest
* UpdateSubscriptionRequest `object`
  * AutoRenew [AutoRenew](#autorenew)

### UpdateSubscriptionResponse
* UpdateSubscriptionResponse `object`

### errorMessage
* errorMessage `string`


