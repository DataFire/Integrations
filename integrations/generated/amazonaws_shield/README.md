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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Shield Advanced</fullname> <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions, data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>

## Actions

### AssociateDRTLogBucket



```js
amazonaws_shield.AssociateDRTLogBucket({
  "LogBucket": null
}, context)
```

#### Input
* input `object`
  * LogBucket **required**

#### Output
* output [AssociateDRTLogBucketResponse](#associatedrtlogbucketresponse)

### AssociateDRTRole



```js
amazonaws_shield.AssociateDRTRole({
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * RoleArn **required**

#### Output
* output [AssociateDRTRoleResponse](#associatedrtroleresponse)

### AssociateHealthCheck



```js
amazonaws_shield.AssociateHealthCheck({
  "ProtectionId": null,
  "HealthCheckArn": null
}, context)
```

#### Input
* input `object`
  * HealthCheckArn **required**
  * ProtectionId **required**

#### Output
* output [AssociateHealthCheckResponse](#associatehealthcheckresponse)

### AssociateProactiveEngagementDetails



```js
amazonaws_shield.AssociateProactiveEngagementDetails({
  "EmergencyContactList": null
}, context)
```

#### Input
* input `object`
  * EmergencyContactList **required**
    * items [EmergencyContact](#emergencycontact)

#### Output
* output [AssociateProactiveEngagementDetailsResponse](#associateproactiveengagementdetailsresponse)

### CreateProtection



```js
amazonaws_shield.CreateProtection({
  "Name": null,
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * ResourceArn **required**

#### Output
* output [CreateProtectionResponse](#createprotectionresponse)

### CreateProtectionGroup



```js
amazonaws_shield.CreateProtectionGroup({
  "ProtectionGroupId": null,
  "Aggregation": null,
  "Pattern": null
}, context)
```

#### Input
* input `object`
  * Aggregation **required**
  * Members
    * items [ResourceArn](#resourcearn)
  * Pattern **required**
  * ProtectionGroupId **required**
  * ResourceType

#### Output
* output [CreateProtectionGroupResponse](#createprotectiongroupresponse)

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
  "ProtectionId": null
}, context)
```

#### Input
* input `object`
  * ProtectionId **required**

#### Output
* output [DeleteProtectionResponse](#deleteprotectionresponse)

### DeleteProtectionGroup



```js
amazonaws_shield.DeleteProtectionGroup({
  "ProtectionGroupId": null
}, context)
```

#### Input
* input `object`
  * ProtectionGroupId **required**

#### Output
* output [DeleteProtectionGroupResponse](#deleteprotectiongroupresponse)

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
  "AttackId": null
}, context)
```

#### Input
* input `object`
  * AttackId **required**

#### Output
* output [DescribeAttackResponse](#describeattackresponse)

### DescribeAttackStatistics



```js
amazonaws_shield.DescribeAttackStatistics({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAttackStatisticsResponse](#describeattackstatisticsresponse)

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
amazonaws_shield.DescribeProtection({}, context)
```

#### Input
* input `object`
  * ProtectionId
  * ResourceArn

#### Output
* output [DescribeProtectionResponse](#describeprotectionresponse)

### DescribeProtectionGroup



```js
amazonaws_shield.DescribeProtectionGroup({
  "ProtectionGroupId": null
}, context)
```

#### Input
* input `object`
  * ProtectionGroupId **required**

#### Output
* output [DescribeProtectionGroupResponse](#describeprotectiongroupresponse)

### DescribeSubscription



```js
amazonaws_shield.DescribeSubscription({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeSubscriptionResponse](#describesubscriptionresponse)

### DisableProactiveEngagement



```js
amazonaws_shield.DisableProactiveEngagement({}, context)
```

#### Input
* input `object`

#### Output
* output [DisableProactiveEngagementResponse](#disableproactiveengagementresponse)

### DisassociateDRTLogBucket



```js
amazonaws_shield.DisassociateDRTLogBucket({
  "LogBucket": null
}, context)
```

#### Input
* input `object`
  * LogBucket **required**

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

### DisassociateHealthCheck



```js
amazonaws_shield.DisassociateHealthCheck({
  "ProtectionId": null,
  "HealthCheckArn": null
}, context)
```

#### Input
* input `object`
  * HealthCheckArn **required**
  * ProtectionId **required**

#### Output
* output [DisassociateHealthCheckResponse](#disassociatehealthcheckresponse)

### EnableProactiveEngagement



```js
amazonaws_shield.EnableProactiveEngagement({}, context)
```

#### Input
* input `object`

#### Output
* output [EnableProactiveEngagementResponse](#enableproactiveengagementresponse)

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
  * MaxResults `string`
  * NextToken `string`
  * EndTime
    * FromInclusive
    * ToExclusive
  * MaxResults
  * NextToken
  * ResourceArns
    * items [ResourceArn](#resourcearn)
  * StartTime
    * FromInclusive
    * ToExclusive

#### Output
* output [ListAttacksResponse](#listattacksresponse)

### ListProtectionGroups



```js
amazonaws_shield.ListProtectionGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListProtectionGroupsResponse](#listprotectiongroupsresponse)

### ListProtections



```js
amazonaws_shield.ListProtections({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListProtectionsResponse](#listprotectionsresponse)

### ListResourcesInProtectionGroup



```js
amazonaws_shield.ListResourcesInProtectionGroup({
  "ProtectionGroupId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ProtectionGroupId **required**

#### Output
* output [ListResourcesInProtectionGroupResponse](#listresourcesinprotectiongroupresponse)

### UpdateEmergencyContactSettings



```js
amazonaws_shield.UpdateEmergencyContactSettings({}, context)
```

#### Input
* input `object`
  * EmergencyContactList
    * items [EmergencyContact](#emergencycontact)

#### Output
* output [UpdateEmergencyContactSettingsResponse](#updateemergencycontactsettingsresponse)

### UpdateProtectionGroup



```js
amazonaws_shield.UpdateProtectionGroup({
  "ProtectionGroupId": null,
  "Aggregation": null,
  "Pattern": null
}, context)
```

#### Input
* input `object`
  * Aggregation **required**
  * Members
    * items [ResourceArn](#resourcearn)
  * Pattern **required**
  * ProtectionGroupId **required**
  * ResourceType

#### Output
* output [UpdateProtectionGroupResponse](#updateprotectiongroupresponse)

### UpdateSubscription



```js
amazonaws_shield.UpdateSubscription({}, context)
```

#### Input
* input `object`
  * AutoRenew

#### Output
* output [UpdateSubscriptionResponse](#updatesubscriptionresponse)



## Definitions

### AccessDeniedException


### AccessDeniedForDependencyException


### AssociateDRTLogBucketRequest
* AssociateDRTLogBucketRequest `object`
  * LogBucket **required**

### AssociateDRTLogBucketResponse
* AssociateDRTLogBucketResponse `object`

### AssociateDRTRoleRequest
* AssociateDRTRoleRequest `object`
  * RoleArn **required**

### AssociateDRTRoleResponse
* AssociateDRTRoleResponse `object`

### AssociateHealthCheckRequest
* AssociateHealthCheckRequest `object`
  * HealthCheckArn **required**
  * ProtectionId **required**

### AssociateHealthCheckResponse
* AssociateHealthCheckResponse `object`

### AssociateProactiveEngagementDetailsRequest
* AssociateProactiveEngagementDetailsRequest `object`
  * EmergencyContactList **required**
    * items [EmergencyContact](#emergencycontact)

### AssociateProactiveEngagementDetailsResponse
* AssociateProactiveEngagementDetailsResponse `object`

### AttackDetail
* AttackDetail `object`: The details of a DDoS attack.
  * AttackCounters
    * items [SummarizedCounter](#summarizedcounter)
  * AttackId
  * AttackProperties
    * items [AttackProperty](#attackproperty)
  * EndTime
  * Mitigations
    * items [Mitigation](#mitigation)
  * ResourceArn
  * StartTime
  * SubResources
    * items [SubResourceSummary](#subresourcesummary)

### AttackId
* AttackId `string`

### AttackLayer
* AttackLayer `string` (values: NETWORK, APPLICATION)

### AttackProperties
* AttackProperties `array`
  * items [AttackProperty](#attackproperty)

### AttackProperty
* AttackProperty `object`: Details of the described attack.
  * AttackLayer
  * AttackPropertyIdentifier
  * TopContributors
    * items [Contributor](#contributor)
  * Total
  * Unit

### AttackPropertyIdentifier
* AttackPropertyIdentifier `string` (values: DESTINATION_URL, REFERRER, SOURCE_ASN, SOURCE_COUNTRY, SOURCE_IP_ADDRESS, SOURCE_USER_AGENT, WORDPRESS_PINGBACK_REFLECTOR, WORDPRESS_PINGBACK_SOURCE)

### AttackStatisticsDataItem
* AttackStatisticsDataItem `object`: A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to. 
  * AttackCount **required**
  * AttackVolume
    * BitsPerSecond
      * Max **required**
    * PacketsPerSecond
      * Max **required**
    * RequestsPerSecond
      * Max **required**

### AttackStatisticsDataList
* AttackStatisticsDataList `array`
  * items [AttackStatisticsDataItem](#attackstatisticsdataitem)

### AttackSummaries
* AttackSummaries `array`
  * items [AttackSummary](#attacksummary)

### AttackSummary
* AttackSummary `object`: Summarizes all DDoS attacks for a specified time period.
  * AttackId
  * AttackVectors
    * items [AttackVectorDescription](#attackvectordescription)
  * EndTime
  * ResourceArn
  * StartTime

### AttackTimestamp
* AttackTimestamp `string`

### AttackVectorDescription
* AttackVectorDescription `object`: Describes the attack.
  * VectorType **required**

### AttackVectorDescriptionList
* AttackVectorDescriptionList `array`
  * items [AttackVectorDescription](#attackvectordescription)

### AttackVolume
* AttackVolume `object`: Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.
  * BitsPerSecond
    * Max **required**
  * PacketsPerSecond
    * Max **required**
  * RequestsPerSecond
    * Max **required**

### AttackVolumeStatistics
* AttackVolumeStatistics `object`: Statistics objects for the various data types in <a>AttackVolume</a>. 
  * Max **required**

### AutoRenew
* AutoRenew `string` (values: ENABLED, DISABLED)

### ContactNotes
* ContactNotes `string`

### Contributor
* Contributor `object`: A contributor to the attack and their contribution.
  * Name
  * Value

### CreateProtectionGroupRequest
* CreateProtectionGroupRequest `object`
  * Aggregation **required**
  * Members
    * items [ResourceArn](#resourcearn)
  * Pattern **required**
  * ProtectionGroupId **required**
  * ResourceType

### CreateProtectionGroupResponse
* CreateProtectionGroupResponse `object`

### CreateProtectionRequest
* CreateProtectionRequest `object`
  * Name **required**
  * ResourceArn **required**

### CreateProtectionResponse
* CreateProtectionResponse `object`
  * ProtectionId

### CreateSubscriptionRequest
* CreateSubscriptionRequest `object`

### CreateSubscriptionResponse
* CreateSubscriptionResponse `object`

### DeleteProtectionGroupRequest
* DeleteProtectionGroupRequest `object`
  * ProtectionGroupId **required**

### DeleteProtectionGroupResponse
* DeleteProtectionGroupResponse `object`

### DeleteProtectionRequest
* DeleteProtectionRequest `object`
  * ProtectionId **required**

### DeleteProtectionResponse
* DeleteProtectionResponse `object`

### DeleteSubscriptionRequest
* DeleteSubscriptionRequest `object`

### DeleteSubscriptionResponse
* DeleteSubscriptionResponse `object`

### DescribeAttackRequest
* DescribeAttackRequest `object`
  * AttackId **required**

### DescribeAttackResponse
* DescribeAttackResponse `object`
  * Attack
    * AttackCounters
      * items [SummarizedCounter](#summarizedcounter)
    * AttackId
    * AttackProperties
      * items [AttackProperty](#attackproperty)
    * EndTime
    * Mitigations
      * items [Mitigation](#mitigation)
    * ResourceArn
    * StartTime
    * SubResources
      * items [SubResourceSummary](#subresourcesummary)

### DescribeAttackStatisticsRequest
* DescribeAttackStatisticsRequest `object`

### DescribeAttackStatisticsResponse
* DescribeAttackStatisticsResponse `object`
  * DataItems **required**
    * items [AttackStatisticsDataItem](#attackstatisticsdataitem)
  * TimeRange **required** [TimeRange](#timerange)

### DescribeDRTAccessRequest
* DescribeDRTAccessRequest `object`

### DescribeDRTAccessResponse
* DescribeDRTAccessResponse `object`
  * LogBucketList
    * items [LogBucket](#logbucket)
  * RoleArn

### DescribeEmergencyContactSettingsRequest
* DescribeEmergencyContactSettingsRequest `object`

### DescribeEmergencyContactSettingsResponse
* DescribeEmergencyContactSettingsResponse `object`
  * EmergencyContactList
    * items [EmergencyContact](#emergencycontact)

### DescribeProtectionGroupRequest
* DescribeProtectionGroupRequest `object`
  * ProtectionGroupId **required**

### DescribeProtectionGroupResponse
* DescribeProtectionGroupResponse `object`
  * ProtectionGroup **required**
    * Aggregation **required**
    * Members **required**
      * items [ResourceArn](#resourcearn)
    * Pattern **required**
    * ProtectionGroupId **required**
    * ResourceType

### DescribeProtectionRequest
* DescribeProtectionRequest `object`
  * ProtectionId
  * ResourceArn

### DescribeProtectionResponse
* DescribeProtectionResponse `object`
  * Protection
    * HealthCheckIds
      * items [HealthCheckId](#healthcheckid)
    * Id
    * Name
    * ResourceArn

### DescribeSubscriptionRequest
* DescribeSubscriptionRequest `object`

### DescribeSubscriptionResponse
* DescribeSubscriptionResponse `object`
  * Subscription
    * AutoRenew
    * EndTime
    * Limits
      * items [Limit](#limit)
    * ProactiveEngagementStatus
    * StartTime
    * SubscriptionLimits **required**
      * ProtectionGroupLimits **required**
        * MaxProtectionGroups **required**
        * PatternTypeLimits **required**
          * ArbitraryPatternLimits **required**
      * ProtectionLimits **required**
        * ProtectedResourceTypeLimits **required**
          * items [Limit](#limit)
    * TimeCommitmentInSeconds

### DisableProactiveEngagementRequest
* DisableProactiveEngagementRequest `object`

### DisableProactiveEngagementResponse
* DisableProactiveEngagementResponse `object`

### DisassociateDRTLogBucketRequest
* DisassociateDRTLogBucketRequest `object`
  * LogBucket **required**

### DisassociateDRTLogBucketResponse
* DisassociateDRTLogBucketResponse `object`

### DisassociateDRTRoleRequest
* DisassociateDRTRoleRequest `object`

### DisassociateDRTRoleResponse
* DisassociateDRTRoleResponse `object`

### DisassociateHealthCheckRequest
* DisassociateHealthCheckRequest `object`
  * HealthCheckArn **required**
  * ProtectionId **required**

### DisassociateHealthCheckResponse
* DisassociateHealthCheckResponse `object`

### Double
* Double `number`

### DurationInSeconds
* DurationInSeconds `integer`

### EmailAddress
* EmailAddress `string`

### EmergencyContact
* EmergencyContact `object`: Contact information that the DRT can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.
  * ContactNotes
  * EmailAddress **required**
  * PhoneNumber

### EmergencyContactList
* EmergencyContactList `array`
  * items [EmergencyContact](#emergencycontact)

### EnableProactiveEngagementRequest
* EnableProactiveEngagementRequest `object`

### EnableProactiveEngagementResponse
* EnableProactiveEngagementResponse `object`

### GetSubscriptionStateRequest
* GetSubscriptionStateRequest `object`

### GetSubscriptionStateResponse
* GetSubscriptionStateResponse `object`
  * SubscriptionState **required**

### HealthCheckArn
* HealthCheckArn `string`

### HealthCheckId
* HealthCheckId `string`

### HealthCheckIds
* HealthCheckIds `array`
  * items [HealthCheckId](#healthcheckid)

### Integer
* Integer `integer`

### InternalErrorException


### InvalidOperationException


### InvalidPaginationTokenException


### InvalidParameterException


### InvalidResourceException


### Limit
* Limit `object`: Specifies how many protections of a given type you can create.
  * Max
  * Type

### Limits
* Limits `array`
  * items [Limit](#limit)

### LimitsExceededException


### ListAttacksRequest
* ListAttacksRequest `object`
  * EndTime
    * FromInclusive
    * ToExclusive
  * MaxResults
  * NextToken
  * ResourceArns
    * items [ResourceArn](#resourcearn)
  * StartTime
    * FromInclusive
    * ToExclusive

### ListAttacksResponse
* ListAttacksResponse `object`
  * AttackSummaries
    * items [AttackSummary](#attacksummary)
  * NextToken

### ListProtectionGroupsRequest
* ListProtectionGroupsRequest `object`
  * MaxResults
  * NextToken

### ListProtectionGroupsResponse
* ListProtectionGroupsResponse `object`
  * NextToken
  * ProtectionGroups **required**
    * items [ProtectionGroup](#protectiongroup)

### ListProtectionsRequest
* ListProtectionsRequest `object`
  * MaxResults
  * NextToken

### ListProtectionsResponse
* ListProtectionsResponse `object`
  * NextToken
  * Protections
    * items [Protection](#protection)

### ListResourcesInProtectionGroupRequest
* ListResourcesInProtectionGroupRequest `object`
  * MaxResults
  * NextToken
  * ProtectionGroupId **required**

### ListResourcesInProtectionGroupResponse
* ListResourcesInProtectionGroupResponse `object`
  * NextToken
  * ResourceArns **required**
    * items [ResourceArn](#resourcearn)

### LockedSubscriptionException


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
  * MitigationName

### MitigationList
* MitigationList `array`
  * items [Mitigation](#mitigation)

### NoAssociatedRoleException


### OptimisticLockException


### PhoneNumber
* PhoneNumber `string`

### ProactiveEngagementStatus
* ProactiveEngagementStatus `string` (values: ENABLED, DISABLED, PENDING)

### ProtectedResourceType
* ProtectedResourceType `string` (values: CLOUDFRONT_DISTRIBUTION, ROUTE_53_HOSTED_ZONE, ELASTIC_IP_ALLOCATION, CLASSIC_LOAD_BALANCER, APPLICATION_LOAD_BALANCER, GLOBAL_ACCELERATOR)

### Protection
* Protection `object`: An object that represents a resource that is under DDoS protection.
  * HealthCheckIds
    * items [HealthCheckId](#healthcheckid)
  * Id
  * Name
  * ResourceArn

### ProtectionGroup
* ProtectionGroup `object`: A grouping of protected resources that you and AWS Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
  * Aggregation **required**
  * Members **required**
    * items [ResourceArn](#resourcearn)
  * Pattern **required**
  * ProtectionGroupId **required**
  * ResourceType

### ProtectionGroupAggregation
* ProtectionGroupAggregation `string` (values: SUM, MEAN, MAX)

### ProtectionGroupArbitraryPatternLimits
* ProtectionGroupArbitraryPatternLimits `object`: Limits settings on protection groups with arbitrary pattern type. 
  * MaxMembers **required**

### ProtectionGroupId
* ProtectionGroupId `string`

### ProtectionGroupLimits
* ProtectionGroupLimits `object`: Limits settings on protection groups for your subscription. 
  * MaxProtectionGroups **required**
  * PatternTypeLimits **required**
    * ArbitraryPatternLimits **required**
      * MaxMembers **required**

### ProtectionGroupMembers
* ProtectionGroupMembers `array`
  * items [ResourceArn](#resourcearn)

### ProtectionGroupPattern
* ProtectionGroupPattern `string` (values: ALL, ARBITRARY, BY_RESOURCE_TYPE)

### ProtectionGroupPatternTypeLimits
* ProtectionGroupPatternTypeLimits `object`: Limits settings by pattern type in the protection groups for your subscription. 
  * ArbitraryPatternLimits **required**
    * MaxMembers **required**

### ProtectionGroups
* ProtectionGroups `array`
  * items [ProtectionGroup](#protectiongroup)

### ProtectionId
* ProtectionId `string`

### ProtectionLimits
* ProtectionLimits `object`: Limits settings on protections for your subscription. 
  * ProtectedResourceTypeLimits **required**
    * items [Limit](#limit)

### ProtectionName
* ProtectionName `string`

### Protections
* Protections `array`
  * items [Protection](#protection)

### ResourceAlreadyExistsException


### ResourceArn
* ResourceArn `string`

### ResourceArnFilterList
* ResourceArnFilterList `array`
  * items [ResourceArn](#resourcearn)

### ResourceArnList
* ResourceArnList `array`
  * items [ResourceArn](#resourcearn)

### ResourceNotFoundException


### RoleArn
* RoleArn `string`

### String
* String `string`

### SubResourceSummary
* SubResourceSummary `object`: The attack information for the specified SubResource.
  * AttackVectors
    * items [SummarizedAttackVector](#summarizedattackvector)
  * Counters
    * items [SummarizedCounter](#summarizedcounter)
  * Id
  * Type

### SubResourceSummaryList
* SubResourceSummaryList `array`
  * items [SubResourceSummary](#subresourcesummary)

### SubResourceType
* SubResourceType `string` (values: IP, URL)

### Subscription
* Subscription `object`: Information about the AWS Shield Advanced subscription for an account.
  * AutoRenew
  * EndTime
  * Limits
    * items [Limit](#limit)
  * ProactiveEngagementStatus
  * StartTime
  * SubscriptionLimits **required**
    * ProtectionGroupLimits **required**
      * MaxProtectionGroups **required**
      * PatternTypeLimits **required**
        * ArbitraryPatternLimits **required**
          * MaxMembers **required**
    * ProtectionLimits **required**
      * ProtectedResourceTypeLimits **required**
        * items [Limit](#limit)
  * TimeCommitmentInSeconds

### SubscriptionLimits
* SubscriptionLimits `object`: Limits settings for your subscription. 
  * ProtectionGroupLimits **required**
    * MaxProtectionGroups **required**
    * PatternTypeLimits **required**
      * ArbitraryPatternLimits **required**
        * MaxMembers **required**
  * ProtectionLimits **required**
    * ProtectedResourceTypeLimits **required**
      * items [Limit](#limit)

### SubscriptionState
* SubscriptionState `string` (values: ACTIVE, INACTIVE)

### SummarizedAttackVector
* SummarizedAttackVector `object`: A summary of information about the attack.
  * VectorCounters
    * items [SummarizedCounter](#summarizedcounter)
  * VectorType **required**

### SummarizedAttackVectorList
* SummarizedAttackVectorList `array`
  * items [SummarizedAttackVector](#summarizedattackvector)

### SummarizedCounter
* SummarizedCounter `object`: The counter that describes a DDoS attack.
  * Average
  * Max
  * N
  * Name
  * Sum
  * Unit

### SummarizedCounterList
* SummarizedCounterList `array`
  * items [SummarizedCounter](#summarizedcounter)

### TimeRange
* TimeRange `object`: The time range. 
  * FromInclusive
  * ToExclusive

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
  * EmergencyContactList
    * items [EmergencyContact](#emergencycontact)

### UpdateEmergencyContactSettingsResponse
* UpdateEmergencyContactSettingsResponse `object`

### UpdateProtectionGroupRequest
* UpdateProtectionGroupRequest `object`
  * Aggregation **required**
  * Members
    * items [ResourceArn](#resourcearn)
  * Pattern **required**
  * ProtectionGroupId **required**
  * ResourceType

### UpdateProtectionGroupResponse
* UpdateProtectionGroupResponse `object`

### UpdateSubscriptionRequest
* UpdateSubscriptionRequest `object`
  * AutoRenew

### UpdateSubscriptionResponse
* UpdateSubscriptionResponse `object`


