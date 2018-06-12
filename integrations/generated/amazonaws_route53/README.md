# @datafire/amazonaws_route53

Client library for Amazon Route 53

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_route53
```
```js
let amazonaws_route53 = require('@datafire/amazonaws_route53').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_route53.GetAccountLimit({
  "Type": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### GetAccountLimit



```js
amazonaws_route53.GetAccountLimit({
  "Type": ""
}, context)
```

#### Input
* input `object`
  * Type **required** `string`

#### Output
* output [GetAccountLimitResponse](#getaccountlimitresponse)

### GetChange



```js
amazonaws_route53.GetChange({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetChangeResponse](#getchangeresponse)

### GetCheckerIpRanges



```js
amazonaws_route53.GetCheckerIpRanges({}, context)
```

#### Input
* input `object`

#### Output
* output [GetCheckerIpRangesResponse](#getcheckeriprangesresponse)

### ListReusableDelegationSets



```js
amazonaws_route53.ListReusableDelegationSets({}, context)
```

#### Input
* input `object`

#### Output
* output [ListReusableDelegationSetsResponse](#listreusabledelegationsetsresponse)

### CreateReusableDelegationSet



```js
amazonaws_route53.CreateReusableDelegationSet({
  "CallerReference": ""
}, context)
```

#### Input
* input `object`
  * CallerReference **required** [Nonce](#nonce)
  * HostedZoneId [ResourceId](#resourceid)

#### Output
*Output schema unknown*

### DeleteReusableDelegationSet



```js
amazonaws_route53.DeleteReusableDelegationSet({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [DeleteReusableDelegationSetResponse](#deletereusabledelegationsetresponse)

### GetReusableDelegationSet



```js
amazonaws_route53.GetReusableDelegationSet({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetReusableDelegationSetResponse](#getreusabledelegationsetresponse)

### GetGeoLocation



```js
amazonaws_route53.GetGeoLocation({}, context)
```

#### Input
* input `object`

#### Output
* output [GetGeoLocationResponse](#getgeolocationresponse)

### ListGeoLocations



```js
amazonaws_route53.ListGeoLocations({}, context)
```

#### Input
* input `object`

#### Output
* output [ListGeoLocationsResponse](#listgeolocationsresponse)

### ListHealthChecks



```js
amazonaws_route53.ListHealthChecks({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`

#### Output
* output [ListHealthChecksResponse](#listhealthchecksresponse)

### CreateHealthCheck



```js
amazonaws_route53.CreateHealthCheck({
  "CallerReference": "",
  "HealthCheckConfig": {
    "Type": ""
  }
}, context)
```

#### Input
* input `object`
  * CallerReference **required** [HealthCheckNonce](#healthchecknonce)
  * HealthCheckConfig **required** [HealthCheckConfig](#healthcheckconfig)

#### Output
*Output schema unknown*

### DeleteHealthCheck



```js
amazonaws_route53.DeleteHealthCheck({
  "HealthCheckId": ""
}, context)
```

#### Input
* input `object`
  * HealthCheckId **required** `string`

#### Output
* output [DeleteHealthCheckResponse](#deletehealthcheckresponse)

### GetHealthCheck



```js
amazonaws_route53.GetHealthCheck({
  "HealthCheckId": ""
}, context)
```

#### Input
* input `object`
  * HealthCheckId **required** `string`

#### Output
* output [GetHealthCheckResponse](#gethealthcheckresponse)

### UpdateHealthCheck



```js
amazonaws_route53.UpdateHealthCheck({
  "HealthCheckId": ""
}, context)
```

#### Input
* input `object`
  * HealthCheckId **required** `string`
  * AlarmIdentifier [AlarmIdentifier](#alarmidentifier)
  * ChildHealthChecks [ChildHealthCheckList](#childhealthchecklist)
  * EnableSNI [EnableSNI](#enablesni)
  * FailureThreshold [FailureThreshold](#failurethreshold)
  * FullyQualifiedDomainName [FullyQualifiedDomainName](#fullyqualifieddomainname)
  * HealthCheckVersion [HealthCheckVersion](#healthcheckversion)
  * HealthThreshold [HealthThreshold](#healththreshold)
  * IPAddress [IPAddress](#ipaddress)
  * InsufficientDataHealthStatus [InsufficientDataHealthStatus](#insufficientdatahealthstatus)
  * Inverted [Inverted](#inverted)
  * Port [Port](#port)
  * Regions [HealthCheckRegionList](#healthcheckregionlist)
  * ResetElements [ResettableElementNameList](#resettableelementnamelist)
  * ResourcePath [ResourcePath](#resourcepath)
  * SearchString [SearchString](#searchstring)

#### Output
* output [UpdateHealthCheckResponse](#updatehealthcheckresponse)

### GetHealthCheckLastFailureReason



```js
amazonaws_route53.GetHealthCheckLastFailureReason({
  "HealthCheckId": ""
}, context)
```

#### Input
* input `object`
  * HealthCheckId **required** `string`

#### Output
* output [GetHealthCheckLastFailureReasonResponse](#gethealthchecklastfailurereasonresponse)

### GetHealthCheckStatus



```js
amazonaws_route53.GetHealthCheckStatus({
  "HealthCheckId": ""
}, context)
```

#### Input
* input `object`
  * HealthCheckId **required** `string`

#### Output
* output [GetHealthCheckStatusResponse](#gethealthcheckstatusresponse)

### GetHealthCheckCount



```js
amazonaws_route53.GetHealthCheckCount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetHealthCheckCountResponse](#gethealthcheckcountresponse)

### ListHostedZones



```js
amazonaws_route53.ListHostedZones({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`

#### Output
* output [ListHostedZonesResponse](#listhostedzonesresponse)

### CreateHostedZone



```js
amazonaws_route53.CreateHostedZone({
  "Name": "",
  "CallerReference": ""
}, context)
```

#### Input
* input `object`
  * CallerReference **required** [Nonce](#nonce)
  * DelegationSetId [ResourceId](#resourceid)
  * HostedZoneConfig [HostedZoneConfig](#hostedzoneconfig)
  * Name **required** [DNSName](#dnsname)
  * VPC [VPC](#vpc)

#### Output
*Output schema unknown*

### DeleteHostedZone



```js
amazonaws_route53.DeleteHostedZone({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [DeleteHostedZoneResponse](#deletehostedzoneresponse)

### GetHostedZone



```js
amazonaws_route53.GetHostedZone({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetHostedZoneResponse](#gethostedzoneresponse)

### UpdateHostedZoneComment



```js
amazonaws_route53.UpdateHostedZoneComment({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Comment [ResourceDescription](#resourcedescription)

#### Output
* output [UpdateHostedZoneCommentResponse](#updatehostedzonecommentresponse)

### AssociateVPCWithHostedZone



```js
amazonaws_route53.AssociateVPCWithHostedZone({
  "Id": "",
  "VPC": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Comment [AssociateVPCComment](#associatevpccomment)
  * VPC **required** [VPC](#vpc)

#### Output
* output [AssociateVPCWithHostedZoneResponse](#associatevpcwithhostedzoneresponse)

### ListVPCAssociationAuthorizations



```js
amazonaws_route53.ListVPCAssociationAuthorizations({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [ListVPCAssociationAuthorizationsResponse](#listvpcassociationauthorizationsresponse)

### CreateVPCAssociationAuthorization



```js
amazonaws_route53.CreateVPCAssociationAuthorization({
  "Id": "",
  "VPC": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * VPC **required** [VPC](#vpc)

#### Output
* output [CreateVPCAssociationAuthorizationResponse](#createvpcassociationauthorizationresponse)

### DeleteVPCAssociationAuthorization



```js
amazonaws_route53.DeleteVPCAssociationAuthorization({
  "Id": "",
  "VPC": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * VPC **required** [VPC](#vpc)

#### Output
* output [DeleteVPCAssociationAuthorizationResponse](#deletevpcassociationauthorizationresponse)

### DisassociateVPCFromHostedZone



```js
amazonaws_route53.DisassociateVPCFromHostedZone({
  "Id": "",
  "VPC": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Comment [DisassociateVPCComment](#disassociatevpccomment)
  * VPC **required** [VPC](#vpc)

#### Output
* output [DisassociateVPCFromHostedZoneResponse](#disassociatevpcfromhostedzoneresponse)

### ListResourceRecordSets



```js
amazonaws_route53.ListResourceRecordSets({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * StartRecordName `string`
  * StartRecordType `string`
  * StartRecordIdentifier `string`
  * Id **required** `string`

#### Output
* output [ListResourceRecordSetsResponse](#listresourcerecordsetsresponse)

### ChangeResourceRecordSets



```js
amazonaws_route53.ChangeResourceRecordSets({
  "Id": "",
  "ChangeBatch": {
    "Changes": []
  }
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * ChangeBatch **required** [ChangeBatch](#changebatch)

#### Output
* output [ChangeResourceRecordSetsResponse](#changeresourcerecordsetsresponse)

### GetHostedZoneCount



```js
amazonaws_route53.GetHostedZoneCount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetHostedZoneCountResponse](#gethostedzonecountresponse)

### GetHostedZoneLimit



```js
amazonaws_route53.GetHostedZoneLimit({
  "Id": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Type **required** `string`

#### Output
* output [GetHostedZoneLimitResponse](#gethostedzonelimitresponse)

### ListHostedZonesByName



```js
amazonaws_route53.ListHostedZonesByName({}, context)
```

#### Input
* input `object`

#### Output
* output [ListHostedZonesByNameResponse](#listhostedzonesbynameresponse)

### ListQueryLoggingConfigs



```js
amazonaws_route53.ListQueryLoggingConfigs({}, context)
```

#### Input
* input `object`

#### Output
* output [ListQueryLoggingConfigsResponse](#listqueryloggingconfigsresponse)

### CreateQueryLoggingConfig



```js
amazonaws_route53.CreateQueryLoggingConfig({
  "HostedZoneId": "",
  "CloudWatchLogsLogGroupArn": ""
}, context)
```

#### Input
* input `object`
  * CloudWatchLogsLogGroupArn **required** [CloudWatchLogsLogGroupArn](#cloudwatchlogsloggrouparn)
  * HostedZoneId **required** [ResourceId](#resourceid)

#### Output
*Output schema unknown*

### DeleteQueryLoggingConfig



```js
amazonaws_route53.DeleteQueryLoggingConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [DeleteQueryLoggingConfigResponse](#deletequeryloggingconfigresponse)

### GetQueryLoggingConfig



```js
amazonaws_route53.GetQueryLoggingConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetQueryLoggingConfigResponse](#getqueryloggingconfigresponse)

### GetReusableDelegationSetLimit



```js
amazonaws_route53.GetReusableDelegationSetLimit({
  "Id": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Type **required** `string`

#### Output
* output [GetReusableDelegationSetLimitResponse](#getreusabledelegationsetlimitresponse)

### ListTagsForResources



```js
amazonaws_route53.ListTagsForResources({
  "ResourceType": "",
  "ResourceIds": []
}, context)
```

#### Input
* input `object`
  * ResourceType **required** `string`
  * ResourceIds **required** [TagResourceIdList](#tagresourceidlist)

#### Output
* output [ListTagsForResourcesResponse](#listtagsforresourcesresponse)

### ListTagsForResource



```js
amazonaws_route53.ListTagsForResource({
  "ResourceType": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceType **required** `string`
  * ResourceId **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ChangeTagsForResource



```js
amazonaws_route53.ChangeTagsForResource({
  "ResourceType": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceType **required** `string`
  * ResourceId **required** `string`
  * AddTags [TagList](#taglist)
  * RemoveTagKeys [TagKeyList](#tagkeylist)

#### Output
* output [ChangeTagsForResourceResponse](#changetagsforresourceresponse)

### TestDNSAnswer



```js
amazonaws_route53.TestDNSAnswer({}, context)
```

#### Input
* input `object`

#### Output
* output [TestDNSAnswerResponse](#testdnsanswerresponse)

### ListTrafficPolicies



```js
amazonaws_route53.ListTrafficPolicies({}, context)
```

#### Input
* input `object`

#### Output
* output [ListTrafficPoliciesResponse](#listtrafficpoliciesresponse)

### ListTrafficPolicyVersions



```js
amazonaws_route53.ListTrafficPolicyVersions({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [ListTrafficPolicyVersionsResponse](#listtrafficpolicyversionsresponse)

### CreateTrafficPolicy



```js
amazonaws_route53.CreateTrafficPolicy({
  "Name": "",
  "Document": ""
}, context)
```

#### Input
* input `object`
  * Comment [TrafficPolicyComment](#trafficpolicycomment)
  * Document **required** [TrafficPolicyDocument](#trafficpolicydocument)
  * Name **required** [TrafficPolicyName](#trafficpolicyname)

#### Output
*Output schema unknown*

### CreateTrafficPolicyVersion



```js
amazonaws_route53.CreateTrafficPolicyVersion({
  "Id": "",
  "Document": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Comment [TrafficPolicyComment](#trafficpolicycomment)
  * Document **required** [TrafficPolicyDocument](#trafficpolicydocument)

#### Output
*Output schema unknown*

### DeleteTrafficPolicy



```js
amazonaws_route53.DeleteTrafficPolicy({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [DeleteTrafficPolicyResponse](#deletetrafficpolicyresponse)

### GetTrafficPolicy



```js
amazonaws_route53.GetTrafficPolicy({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetTrafficPolicyResponse](#gettrafficpolicyresponse)

### UpdateTrafficPolicyComment



```js
amazonaws_route53.UpdateTrafficPolicyComment({
  "Id": "",
  "Comment": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * Comment **required** [TrafficPolicyComment](#trafficpolicycomment)

#### Output
* output [UpdateTrafficPolicyCommentResponse](#updatetrafficpolicycommentresponse)

### CreateTrafficPolicyInstance



```js
amazonaws_route53.CreateTrafficPolicyInstance({
  "HostedZoneId": "",
  "Name": "",
  "TTL": 0,
  "TrafficPolicyId": "",
  "TrafficPolicyVersion": 0
}, context)
```

#### Input
* input `object`
  * HostedZoneId **required** [ResourceId](#resourceid)
  * Name **required** [DNSName](#dnsname)
  * TTL **required** [TTL](#ttl)
  * TrafficPolicyId **required** [TrafficPolicyId](#trafficpolicyid)
  * TrafficPolicyVersion **required** [TrafficPolicyVersion](#trafficpolicyversion)

#### Output
*Output schema unknown*

### DeleteTrafficPolicyInstance



```js
amazonaws_route53.DeleteTrafficPolicyInstance({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [DeleteTrafficPolicyInstanceResponse](#deletetrafficpolicyinstanceresponse)

### GetTrafficPolicyInstance



```js
amazonaws_route53.GetTrafficPolicyInstance({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetTrafficPolicyInstanceResponse](#gettrafficpolicyinstanceresponse)

### UpdateTrafficPolicyInstance



```js
amazonaws_route53.UpdateTrafficPolicyInstance({
  "Id": "",
  "TTL": 0,
  "TrafficPolicyId": "",
  "TrafficPolicyVersion": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * TTL **required** [TTL](#ttl)
  * TrafficPolicyId **required** [TrafficPolicyId](#trafficpolicyid)
  * TrafficPolicyVersion **required** [TrafficPolicyVersion](#trafficpolicyversion)

#### Output
* output [UpdateTrafficPolicyInstanceResponse](#updatetrafficpolicyinstanceresponse)

### GetTrafficPolicyInstanceCount



```js
amazonaws_route53.GetTrafficPolicyInstanceCount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetTrafficPolicyInstanceCountResponse](#gettrafficpolicyinstancecountresponse)

### ListTrafficPolicyInstances



```js
amazonaws_route53.ListTrafficPolicyInstances({}, context)
```

#### Input
* input `object`

#### Output
* output [ListTrafficPolicyInstancesResponse](#listtrafficpolicyinstancesresponse)

### ListTrafficPolicyInstancesByHostedZone



```js
amazonaws_route53.ListTrafficPolicyInstancesByHostedZone({}, context)
```

#### Input
* input `object`

#### Output
* output [ListTrafficPolicyInstancesByHostedZoneResponse](#listtrafficpolicyinstancesbyhostedzoneresponse)

### ListTrafficPolicyInstancesByPolicy



```js
amazonaws_route53.ListTrafficPolicyInstancesByPolicy({}, context)
```

#### Input
* input `object`

#### Output
* output [ListTrafficPolicyInstancesByPolicyResponse](#listtrafficpolicyinstancesbypolicyresponse)



## Definitions

### AccountLimit
* AccountLimit `object`: A complex type that contains the type of limit that you specified in the request and the current value for that limit.
  * Type **required** [AccountLimitType](#accountlimittype)
  * Value **required** [LimitValue](#limitvalue)

### AccountLimitType
* AccountLimitType `string` (values: MAX_HEALTH_CHECKS_BY_OWNER, MAX_HOSTED_ZONES_BY_OWNER, MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER, MAX_REUSABLE_DELEGATION_SETS_BY_OWNER, MAX_TRAFFIC_POLICIES_BY_OWNER)

### AlarmIdentifier
* AlarmIdentifier `object`: A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
  * Name **required** [AlarmName](#alarmname)
  * Region **required** [CloudWatchRegion](#cloudwatchregion)

### AlarmName
* AlarmName `string`

### AliasHealthEnabled
* AliasHealthEnabled `boolean`

### AliasTarget
* AliasTarget `object`: <p> <i>Alias resource record sets only:</i> Information about the CloudFront distribution, Elastic Beanstalk environment, ELB load balancer, Amazon S3 bucket, or Amazon Route 53 resource record set that you're redirecting queries to. An Elastic Beanstalk environment must have a regionalized subdomain.</p> <p>When creating resource record sets for a private hosted zone, note the following:</p> <ul> <li> <p>Resource record sets can't be created for CloudFront distributions in a private hosted zone.</p> </li> <li> <p>Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone is unsupported.</p> </li> <li> <p>For information about creating failover resource record sets in a private hosted zone, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>.</p> </li> </ul>
  * DNSName **required** [DNSName](#dnsname)
  * EvaluateTargetHealth **required** [AliasHealthEnabled](#aliashealthenabled)
  * HostedZoneId **required** [ResourceId](#resourceid)

### AssociateVPCComment
* AssociateVPCComment `string`

### AssociateVPCWithHostedZoneRequest
* AssociateVPCWithHostedZoneRequest `object`: A complex type that contains information about the request to associate a VPC with a private hosted zone.
  * Comment [AssociateVPCComment](#associatevpccomment)
  * VPC **required** [VPC](#vpc)

### AssociateVPCWithHostedZoneResponse
* AssociateVPCWithHostedZoneResponse `object`: A complex type that contains the response information for the <code>AssociateVPCWithHostedZone</code> request.
  * ChangeInfo **required** [ChangeInfo](#changeinfo)

### Change
* Change `object`: The information for each resource record set that you want to change.
  * Action **required** [ChangeAction](#changeaction)
  * ResourceRecordSet **required** [ResourceRecordSet](#resourcerecordset)

### ChangeAction
* ChangeAction `string` (values: CREATE, DELETE, UPSERT)

### ChangeBatch
* ChangeBatch `object`: The information for a change request.
  * Changes **required** [Changes](#changes)
  * Comment [ResourceDescription](#resourcedescription)

### ChangeInfo
* ChangeInfo `object`: A complex type that describes change information about changes made to your hosted zone.
  * Comment [ResourceDescription](#resourcedescription)
  * Id **required** [ResourceId](#resourceid)
  * Status **required** [ChangeStatus](#changestatus)
  * SubmittedAt **required** [TimeStamp](#timestamp)

### ChangeResourceRecordSetsRequest
* ChangeResourceRecordSetsRequest `object`: A complex type that contains change information for the resource record set.
  * ChangeBatch **required** [ChangeBatch](#changebatch)

### ChangeResourceRecordSetsResponse
* ChangeResourceRecordSetsResponse `object`: A complex type containing the response for the request.
  * ChangeInfo **required** [ChangeInfo](#changeinfo)

### ChangeStatus
* ChangeStatus `string` (values: PENDING, INSYNC)

### ChangeTagsForResourceRequest
* ChangeTagsForResourceRequest `object`: A complex type that contains information about the tags that you want to add, edit, or delete.
  * AddTags [TagList](#taglist)
  * RemoveTagKeys [TagKeyList](#tagkeylist)

### ChangeTagsForResourceResponse
* ChangeTagsForResourceResponse `object`: Empty response for the request.

### Changes
* Changes `array`
  * items [Change](#change)

### CheckerIpRanges
* CheckerIpRanges `array`
  * items [IPAddressCidr](#ipaddresscidr)

### ChildHealthCheckList
* ChildHealthCheckList `array`
  * items [HealthCheckId](#healthcheckid)

### CloudWatchAlarmConfiguration
* CloudWatchAlarmConfiguration `object`: A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.
  * ComparisonOperator **required** [ComparisonOperator](#comparisonoperator)
  * Dimensions [DimensionList](#dimensionlist)
  * EvaluationPeriods **required** [EvaluationPeriods](#evaluationperiods)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [Namespace](#namespace)
  * Period **required** [Period](#period)
  * Statistic **required** [Statistic](#statistic)
  * Threshold **required** [Threshold](#threshold)

### CloudWatchLogsLogGroupArn
* CloudWatchLogsLogGroupArn `string`

### CloudWatchRegion
* CloudWatchRegion `string` (values: us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, eu-central-1, eu-west-1, eu-west-2, eu-west-3, ap-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-northeast-3, sa-east-1)

### ComparisonOperator
* ComparisonOperator `string` (values: GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold)

### ConcurrentModification
* ConcurrentModification `object`: Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. 
  * message [ErrorMessage](#errormessage)

### ConflictingDomainExists
* ConflictingDomainExists `object`: <p>The cause of this error depends on whether you're trying to create a public or a private hosted zone:</p> <ul> <li> <p> <b>Public hosted zone:</b> Two hosted zones that have the same name or that have a parent/child relationship (example.com and test.example.com) can't have any common name servers. You tried to create a hosted zone that has the same name as an existing hosted zone or that's the parent or child of an existing hosted zone, and you specified a delegation set that shares one or more name servers with the existing hosted zone. For more information, see <a>CreateReusableDelegationSet</a>.</p> </li> <li> <p> <b>Private hosted zone:</b> You specified an Amazon VPC that you're already using for another hosted zone, and the domain that you specified for one of the hosted zones is a subdomain of the domain that you specified for the other hosted zone. For example, you can't use the same Amazon VPC for the hosted zones for example.com and test.example.com.</p> </li> </ul>
  * message [ErrorMessage](#errormessage)

### ConflictingTypes
* ConflictingTypes `object`: You tried to update a traffic policy instance by using a traffic policy version that has a different DNS type than the current type for the instance. You specified the type in the JSON document in the <code>CreateTrafficPolicy</code> or <code>CreateTrafficPolicyVersion</code>request. 
  * message [ErrorMessage](#errormessage)

### CreateHealthCheckRequest
* CreateHealthCheckRequest `object`: A complex type that contains the health check request information.
  * CallerReference **required** [HealthCheckNonce](#healthchecknonce)
  * HealthCheckConfig **required** [HealthCheckConfig](#healthcheckconfig)

### CreateHealthCheckResponse
* CreateHealthCheckResponse `object`: A complex type containing the response information for the new health check.
  * HealthCheck **required** [HealthCheck](#healthcheck)

### CreateHostedZoneRequest
* CreateHostedZoneRequest `object`: A complex type that contains information about the request to create a hosted zone.
  * CallerReference **required** [Nonce](#nonce)
  * DelegationSetId [ResourceId](#resourceid)
  * HostedZoneConfig [HostedZoneConfig](#hostedzoneconfig)
  * Name **required** [DNSName](#dnsname)
  * VPC [VPC](#vpc)

### CreateHostedZoneResponse
* CreateHostedZoneResponse `object`: A complex type containing the response information for the hosted zone.
  * ChangeInfo **required** [ChangeInfo](#changeinfo)
  * DelegationSet **required** [DelegationSet](#delegationset)
  * HostedZone **required** [HostedZone](#hostedzone)
  * VPC [VPC](#vpc)

### CreateQueryLoggingConfigRequest
* CreateQueryLoggingConfigRequest `object`
  * CloudWatchLogsLogGroupArn **required** [CloudWatchLogsLogGroupArn](#cloudwatchlogsloggrouparn)
  * HostedZoneId **required** [ResourceId](#resourceid)

### CreateQueryLoggingConfigResponse
* CreateQueryLoggingConfigResponse `object`
  * QueryLoggingConfig **required** [QueryLoggingConfig](#queryloggingconfig)

### CreateReusableDelegationSetRequest
* CreateReusableDelegationSetRequest `object`
  * CallerReference **required** [Nonce](#nonce)
  * HostedZoneId [ResourceId](#resourceid)

### CreateReusableDelegationSetResponse
* CreateReusableDelegationSetResponse `object`
  * DelegationSet **required** [DelegationSet](#delegationset)

### CreateTrafficPolicyInstanceRequest
* CreateTrafficPolicyInstanceRequest `object`: A complex type that contains information about the resource record sets that you want to create based on a specified traffic policy.
  * HostedZoneId **required** [ResourceId](#resourceid)
  * Name **required** [DNSName](#dnsname)
  * TTL **required** [TTL](#ttl)
  * TrafficPolicyId **required** [TrafficPolicyId](#trafficpolicyid)
  * TrafficPolicyVersion **required** [TrafficPolicyVersion](#trafficpolicyversion)

### CreateTrafficPolicyInstanceResponse
* CreateTrafficPolicyInstanceResponse `object`: A complex type that contains the response information for the <code>CreateTrafficPolicyInstance</code> request.
  * TrafficPolicyInstance **required** [TrafficPolicyInstance](#trafficpolicyinstance)

### CreateTrafficPolicyRequest
* CreateTrafficPolicyRequest `object`: A complex type that contains information about the traffic policy that you want to create.
  * Comment [TrafficPolicyComment](#trafficpolicycomment)
  * Document **required** [TrafficPolicyDocument](#trafficpolicydocument)
  * Name **required** [TrafficPolicyName](#trafficpolicyname)

### CreateTrafficPolicyResponse
* CreateTrafficPolicyResponse `object`: A complex type that contains the response information for the <code>CreateTrafficPolicy</code> request.
  * TrafficPolicy **required** [TrafficPolicy](#trafficpolicy)

### CreateTrafficPolicyVersionRequest
* CreateTrafficPolicyVersionRequest `object`: A complex type that contains information about the traffic policy that you want to create a new version for.
  * Comment [TrafficPolicyComment](#trafficpolicycomment)
  * Document **required** [TrafficPolicyDocument](#trafficpolicydocument)

### CreateTrafficPolicyVersionResponse
* CreateTrafficPolicyVersionResponse `object`: A complex type that contains the response information for the <code>CreateTrafficPolicyVersion</code> request.
  * TrafficPolicy **required** [TrafficPolicy](#trafficpolicy)

### CreateVPCAssociationAuthorizationRequest
* CreateVPCAssociationAuthorizationRequest `object`: A complex type that contains information about the request to authorize associating a VPC with your private hosted zone. Authorization is only required when a private hosted zone and a VPC were created by using different accounts.
  * VPC **required** [VPC](#vpc)

### CreateVPCAssociationAuthorizationResponse
* CreateVPCAssociationAuthorizationResponse `object`: A complex type that contains the response information from a <code>CreateVPCAssociationAuthorization</code> request.
  * HostedZoneId **required** [ResourceId](#resourceid)
  * VPC **required** [VPC](#vpc)

### DNSName
* DNSName `string`

### DNSRCode
* DNSRCode `string`

### DelegationSet
* DelegationSet `object`: A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set.
  * CallerReference [Nonce](#nonce)
  * Id [ResourceId](#resourceid)
  * NameServers **required** [DelegationSetNameServers](#delegationsetnameservers)

### DelegationSetAlreadyCreated
* DelegationSetAlreadyCreated `object`: A delegation set with the same owner and caller reference combination has already been created.
  * message [ErrorMessage](#errormessage)

### DelegationSetAlreadyReusable
* DelegationSetAlreadyReusable `object`: The specified delegation set has already been marked as reusable.
  * message [ErrorMessage](#errormessage)

### DelegationSetInUse
* DelegationSetInUse `object`: The specified delegation contains associated hosted zones which must be deleted before the reusable delegation set can be deleted.
  * message [ErrorMessage](#errormessage)

### DelegationSetNameServers
* DelegationSetNameServers `array`
  * items [DNSName](#dnsname)

### DelegationSetNotAvailable
* DelegationSetNotAvailable `object`: You can create a hosted zone that has the same name as an existing hosted zone (example.com is common), but there is a limit to the number of hosted zones that have the same name. If you get this error, Amazon Route 53 has reached that limit. If you own the domain name and Amazon Route 53 generates this error, contact Customer Support.
  * message [ErrorMessage](#errormessage)

### DelegationSetNotReusable
* DelegationSetNotReusable `object`: A reusable delegation set with the specified ID does not exist.
  * message [ErrorMessage](#errormessage)

### DelegationSets
* DelegationSets `array`
  * items [DelegationSet](#delegationset)

### DeleteHealthCheckRequest
* DeleteHealthCheckRequest `object`: This action deletes a health check.

### DeleteHealthCheckResponse
* DeleteHealthCheckResponse `object`: An empty element.

### DeleteHostedZoneRequest
* DeleteHostedZoneRequest `object`: A request to delete a hosted zone.

### DeleteHostedZoneResponse
* DeleteHostedZoneResponse `object`: A complex type that contains the response to a <code>DeleteHostedZone</code> request.
  * ChangeInfo **required** [ChangeInfo](#changeinfo)

### DeleteQueryLoggingConfigRequest
* DeleteQueryLoggingConfigRequest `object`

### DeleteQueryLoggingConfigResponse
* DeleteQueryLoggingConfigResponse `object`

### DeleteReusableDelegationSetRequest
* DeleteReusableDelegationSetRequest `object`: A request to delete a reusable delegation set.

### DeleteReusableDelegationSetResponse
* DeleteReusableDelegationSetResponse `object`: An empty element.

### DeleteTrafficPolicyInstanceRequest
* DeleteTrafficPolicyInstanceRequest `object`: A request to delete a specified traffic policy instance.

### DeleteTrafficPolicyInstanceResponse
* DeleteTrafficPolicyInstanceResponse `object`: An empty element.

### DeleteTrafficPolicyRequest
* DeleteTrafficPolicyRequest `object`: A request to delete a specified traffic policy version.

### DeleteTrafficPolicyResponse
* DeleteTrafficPolicyResponse `object`: An empty element.

### DeleteVPCAssociationAuthorizationRequest
* DeleteVPCAssociationAuthorizationRequest `object`: A complex type that contains information about the request to remove authorization to associate a VPC that was created by one AWS account with a hosted zone that was created with a different AWS account. 
  * VPC **required** [VPC](#vpc)

### DeleteVPCAssociationAuthorizationResponse
* DeleteVPCAssociationAuthorizationResponse `object`: Empty response for the request.

### Dimension
* Dimension `object`: For the metric that the CloudWatch alarm is associated with, a complex type that contains information about one dimension.
  * Name **required** [DimensionField](#dimensionfield)
  * Value **required** [DimensionField](#dimensionfield)

### DimensionField
* DimensionField `string`

### DimensionList
* DimensionList `array`
  * items [Dimension](#dimension)

### DisassociateVPCComment
* DisassociateVPCComment `string`

### DisassociateVPCFromHostedZoneRequest
* DisassociateVPCFromHostedZoneRequest `object`: A complex type that contains information about the VPC that you want to disassociate from a specified private hosted zone.
  * Comment [DisassociateVPCComment](#disassociatevpccomment)
  * VPC **required** [VPC](#vpc)

### DisassociateVPCFromHostedZoneResponse
* DisassociateVPCFromHostedZoneResponse `object`: A complex type that contains the response information for the disassociate request.
  * ChangeInfo **required** [ChangeInfo](#changeinfo)

### EnableSNI
* EnableSNI `boolean`

### ErrorMessage
* ErrorMessage `string`

### ErrorMessages
* ErrorMessages `array`
  * items [ErrorMessage](#errormessage)

### EvaluationPeriods
* EvaluationPeriods `integer`

### FailureThreshold
* FailureThreshold `integer`

### FullyQualifiedDomainName
* FullyQualifiedDomainName `string`

### GeoLocation
* GeoLocation `object`: A complex type that contains information about a geo location.
  * ContinentCode [GeoLocationContinentCode](#geolocationcontinentcode)
  * CountryCode [GeoLocationCountryCode](#geolocationcountrycode)
  * SubdivisionCode [GeoLocationSubdivisionCode](#geolocationsubdivisioncode)

### GeoLocationContinentCode
* GeoLocationContinentCode `string`

### GeoLocationContinentName
* GeoLocationContinentName `string`

### GeoLocationCountryCode
* GeoLocationCountryCode `string`

### GeoLocationCountryName
* GeoLocationCountryName `string`

### GeoLocationDetails
* GeoLocationDetails `object`: A complex type that contains the codes and full continent, country, and subdivision names for the specified <code>geolocation</code> code.
  * ContinentCode [GeoLocationContinentCode](#geolocationcontinentcode)
  * ContinentName [GeoLocationContinentName](#geolocationcontinentname)
  * CountryCode [GeoLocationCountryCode](#geolocationcountrycode)
  * CountryName [GeoLocationCountryName](#geolocationcountryname)
  * SubdivisionCode [GeoLocationSubdivisionCode](#geolocationsubdivisioncode)
  * SubdivisionName [GeoLocationSubdivisionName](#geolocationsubdivisionname)

### GeoLocationDetailsList
* GeoLocationDetailsList `array`
  * items [GeoLocationDetails](#geolocationdetails)

### GeoLocationSubdivisionCode
* GeoLocationSubdivisionCode `string`

### GeoLocationSubdivisionName
* GeoLocationSubdivisionName `string`

### GetAccountLimitRequest
* GetAccountLimitRequest `object`: A complex type that contains information about the request to create a hosted zone.

### GetAccountLimitResponse
* GetAccountLimitResponse `object`: A complex type that contains the requested limit. 
  * Count **required** [UsageCount](#usagecount)
  * Limit **required** [AccountLimit](#accountlimit)

### GetChangeRequest
* GetChangeRequest `object`: The input for a GetChange request.

### GetChangeResponse
* GetChangeResponse `object`: A complex type that contains the <code>ChangeInfo</code> element.
  * ChangeInfo **required** [ChangeInfo](#changeinfo)

### GetCheckerIpRangesRequest
* GetCheckerIpRangesRequest `object`

### GetCheckerIpRangesResponse
* GetCheckerIpRangesResponse `object`
  * CheckerIpRanges **required** [CheckerIpRanges](#checkeripranges)

### GetGeoLocationRequest
* GetGeoLocationRequest `object`: A request for information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.

### GetGeoLocationResponse
* GetGeoLocationResponse `object`: A complex type that contains the response information for the specified geolocation code.
  * GeoLocationDetails **required** [GeoLocationDetails](#geolocationdetails)

### GetHealthCheckCountRequest
* GetHealthCheckCountRequest `object`: A request for the number of health checks that are associated with the current AWS account.

### GetHealthCheckCountResponse
* GetHealthCheckCountResponse `object`: A complex type that contains the response to a <code>GetHealthCheckCount</code> request.
  * HealthCheckCount **required** [HealthCheckCount](#healthcheckcount)

### GetHealthCheckLastFailureReasonRequest
* GetHealthCheckLastFailureReasonRequest `object`: A request for the reason that a health check failed most recently.

### GetHealthCheckLastFailureReasonResponse
* GetHealthCheckLastFailureReasonResponse `object`: A complex type that contains the response to a <code>GetHealthCheckLastFailureReason</code> request.
  * HealthCheckObservations **required** [HealthCheckObservations](#healthcheckobservations)

### GetHealthCheckRequest
* GetHealthCheckRequest `object`: A request to get information about a specified health check. 

### GetHealthCheckResponse
* GetHealthCheckResponse `object`: A complex type that contains the response to a <code>GetHealthCheck</code> request.
  * HealthCheck **required** [HealthCheck](#healthcheck)

### GetHealthCheckStatusRequest
* GetHealthCheckStatusRequest `object`: A request to get the status for a health check.

### GetHealthCheckStatusResponse
* GetHealthCheckStatusResponse `object`: A complex type that contains the response to a <code>GetHealthCheck</code> request.
  * HealthCheckObservations **required** [HealthCheckObservations](#healthcheckobservations)

### GetHostedZoneCountRequest
* GetHostedZoneCountRequest `object`: A request to retrieve a count of all the hosted zones that are associated with the current AWS account.

### GetHostedZoneCountResponse
* GetHostedZoneCountResponse `object`: A complex type that contains the response to a <code>GetHostedZoneCount</code> request.
  * HostedZoneCount **required** [HostedZoneCount](#hostedzonecount)

### GetHostedZoneLimitRequest
* GetHostedZoneLimitRequest `object`: A complex type that contains information about the request to create a hosted zone.

### GetHostedZoneLimitResponse
* GetHostedZoneLimitResponse `object`: A complex type that contains the requested limit. 
  * Count **required** [UsageCount](#usagecount)
  * Limit **required** [HostedZoneLimit](#hostedzonelimit)

### GetHostedZoneRequest
* GetHostedZoneRequest `object`: A request to get information about a specified hosted zone. 

### GetHostedZoneResponse
* GetHostedZoneResponse `object`: A complex type that contain the response to a <code>GetHostedZone</code> request.
  * DelegationSet [DelegationSet](#delegationset)
  * HostedZone **required** [HostedZone](#hostedzone)
  * VPCs [VPCs](#vpcs)

### GetQueryLoggingConfigRequest
* GetQueryLoggingConfigRequest `object`

### GetQueryLoggingConfigResponse
* GetQueryLoggingConfigResponse `object`
  * QueryLoggingConfig **required** [QueryLoggingConfig](#queryloggingconfig)

### GetReusableDelegationSetLimitRequest
* GetReusableDelegationSetLimitRequest `object`: A complex type that contains information about the request to create a hosted zone.

### GetReusableDelegationSetLimitResponse
* GetReusableDelegationSetLimitResponse `object`: A complex type that contains the requested limit. 
  * Count **required** [UsageCount](#usagecount)
  * Limit **required** [ReusableDelegationSetLimit](#reusabledelegationsetlimit)

### GetReusableDelegationSetRequest
* GetReusableDelegationSetRequest `object`: A request to get information about a specified reusable delegation set.

### GetReusableDelegationSetResponse
* GetReusableDelegationSetResponse `object`: A complex type that contains the response to the <code>GetReusableDelegationSet</code> request.
  * DelegationSet **required** [DelegationSet](#delegationset)

### GetTrafficPolicyInstanceCountRequest
* GetTrafficPolicyInstanceCountRequest `object`: Request to get the number of traffic policy instances that are associated with the current AWS account.

### GetTrafficPolicyInstanceCountResponse
* GetTrafficPolicyInstanceCountResponse `object`: A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.
  * TrafficPolicyInstanceCount **required** [TrafficPolicyInstanceCount](#trafficpolicyinstancecount)

### GetTrafficPolicyInstanceRequest
* GetTrafficPolicyInstanceRequest `object`: Gets information about a specified traffic policy instance.

### GetTrafficPolicyInstanceResponse
* GetTrafficPolicyInstanceResponse `object`: A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.
  * TrafficPolicyInstance **required** [TrafficPolicyInstance](#trafficpolicyinstance)

### GetTrafficPolicyRequest
* GetTrafficPolicyRequest `object`: Gets information about a specific traffic policy version.

### GetTrafficPolicyResponse
* GetTrafficPolicyResponse `object`: A complex type that contains the response information for the request.
  * TrafficPolicy **required** [TrafficPolicy](#trafficpolicy)

### HealthCheck
* HealthCheck `object`: A complex type that contains information about one health check that is associated with the current AWS account.
  * CallerReference **required** [HealthCheckNonce](#healthchecknonce)
  * CloudWatchAlarmConfiguration [CloudWatchAlarmConfiguration](#cloudwatchalarmconfiguration)
  * HealthCheckConfig **required** [HealthCheckConfig](#healthcheckconfig)
  * HealthCheckVersion **required** [HealthCheckVersion](#healthcheckversion)
  * Id **required** [HealthCheckId](#healthcheckid)
  * LinkedService [LinkedService](#linkedservice)

### HealthCheckAlreadyExists
* HealthCheckAlreadyExists `object`: <p> The health check you're attempting to create already exists. Amazon Route 53 returns this error when you submit a request that has the following values:</p> <ul> <li> <p>The same value for <code>CallerReference</code> as an existing health check, and one or more values that differ from the existing health check that has the same caller reference.</p> </li> <li> <p>The same value for <code>CallerReference</code> as a health check that you created and later deleted, regardless of the other settings in the request.</p> </li> </ul>
  * message [ErrorMessage](#errormessage)

### HealthCheckConfig
* HealthCheckConfig `object`: A complex type that contains information about the health check.
  * AlarmIdentifier [AlarmIdentifier](#alarmidentifier)
  * ChildHealthChecks [ChildHealthCheckList](#childhealthchecklist)
  * EnableSNI [EnableSNI](#enablesni)
  * FailureThreshold [FailureThreshold](#failurethreshold)
  * FullyQualifiedDomainName [FullyQualifiedDomainName](#fullyqualifieddomainname)
  * HealthThreshold [HealthThreshold](#healththreshold)
  * IPAddress [IPAddress](#ipaddress)
  * InsufficientDataHealthStatus [InsufficientDataHealthStatus](#insufficientdatahealthstatus)
  * Inverted [Inverted](#inverted)
  * MeasureLatency [MeasureLatency](#measurelatency)
  * Port [Port](#port)
  * Regions [HealthCheckRegionList](#healthcheckregionlist)
  * RequestInterval [RequestInterval](#requestinterval)
  * ResourcePath [ResourcePath](#resourcepath)
  * SearchString [SearchString](#searchstring)
  * Type **required** [HealthCheckType](#healthchecktype)

### HealthCheckCount
* HealthCheckCount `integer`

### HealthCheckId
* HealthCheckId `string`

### HealthCheckInUse
* HealthCheckInUse `object`: This error code is not in use.
  * message [ErrorMessage](#errormessage)

### HealthCheckNonce
* HealthCheckNonce `string`

### HealthCheckObservation
* HealthCheckObservation `object`: A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker.
  * IPAddress [IPAddress](#ipaddress)
  * Region [HealthCheckRegion](#healthcheckregion)
  * StatusReport [StatusReport](#statusreport)

### HealthCheckObservations
* HealthCheckObservations `array`
  * items [HealthCheckObservation](#healthcheckobservation)

### HealthCheckRegion
* HealthCheckRegion `string` (values: us-east-1, us-west-1, us-west-2, eu-west-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, sa-east-1)

### HealthCheckRegionList
* HealthCheckRegionList `array`
  * items [HealthCheckRegion](#healthcheckregion)

### HealthCheckType
* HealthCheckType `string` (values: HTTP, HTTPS, HTTP_STR_MATCH, HTTPS_STR_MATCH, TCP, CALCULATED, CLOUDWATCH_METRIC)

### HealthCheckVersion
* HealthCheckVersion `integer`

### HealthCheckVersionMismatch
* HealthCheckVersionMismatch `object`: The value of <code>HealthCheckVersion</code> in the request doesn't match the value of <code>HealthCheckVersion</code> in the health check.
  * message [ErrorMessage](#errormessage)

### HealthChecks
* HealthChecks `array`
  * items [HealthCheck](#healthcheck)

### HealthThreshold
* HealthThreshold `integer`

### HostedZone
* HostedZone `object`: A complex type that contains general information about the hosted zone.
  * CallerReference **required** [Nonce](#nonce)
  * Config [HostedZoneConfig](#hostedzoneconfig)
  * Id **required** [ResourceId](#resourceid)
  * LinkedService [LinkedService](#linkedservice)
  * Name **required** [DNSName](#dnsname)
  * ResourceRecordSetCount [HostedZoneRRSetCount](#hostedzonerrsetcount)

### HostedZoneAlreadyExists
* HostedZoneAlreadyExists `object`: The hosted zone you're trying to create already exists. Amazon Route 53 returns this error when a hosted zone has already been created with the specified <code>CallerReference</code>.
  * message [ErrorMessage](#errormessage)

### HostedZoneConfig
* HostedZoneConfig `object`: A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements.
  * Comment [ResourceDescription](#resourcedescription)
  * PrivateZone [IsPrivateZone](#isprivatezone)

### HostedZoneCount
* HostedZoneCount `integer`

### HostedZoneLimit
* HostedZoneLimit `object`: A complex type that contains the type of limit that you specified in the request and the current value for that limit.
  * Type **required** [HostedZoneLimitType](#hostedzonelimittype)
  * Value **required** [LimitValue](#limitvalue)

### HostedZoneLimitType
* HostedZoneLimitType `string` (values: MAX_RRSETS_BY_ZONE, MAX_VPCS_ASSOCIATED_BY_ZONE)

### HostedZoneNotEmpty
* HostedZoneNotEmpty `object`: The hosted zone contains resource records that are not SOA or NS records.
  * message [ErrorMessage](#errormessage)

### HostedZoneNotFound
* HostedZoneNotFound `object`: The specified HostedZone can't be found.
  * message [ErrorMessage](#errormessage)

### HostedZoneNotPrivate
* HostedZoneNotPrivate `object`: The specified hosted zone is a public hosted zone, not a private hosted zone.
  * message [ErrorMessage](#errormessage)

### HostedZoneRRSetCount
* HostedZoneRRSetCount `integer`

### HostedZones
* HostedZones `array`
  * items [HostedZone](#hostedzone)

### IPAddress
* IPAddress `string`

### IPAddressCidr
* IPAddressCidr `string`

### IncompatibleVersion
* IncompatibleVersion `object`: The resource you're trying to access is unsupported on this Amazon Route 53 endpoint.
  * message [ErrorMessage](#errormessage)

### InsufficientCloudWatchLogsResourcePolicy
* InsufficientCloudWatchLogsResourcePolicy `object`: <p>Amazon Route 53 doesn't have the permissions required to create log streams and send query logs to log streams. Possible causes include the following:</p> <ul> <li> <p>There is no resource policy that specifies the log group ARN in the value for <code>Resource</code>.</p> </li> <li> <p>The resource policy that includes the log group ARN in the value for <code>Resource</code> doesn't have the necessary permissions.</p> </li> <li> <p>The resource policy hasn't finished propagating yet.</p> </li> </ul>
  * message [ErrorMessage](#errormessage)

### InsufficientDataHealthStatus
* InsufficientDataHealthStatus `string` (values: Healthy, Unhealthy, LastKnownStatus)

### InvalidArgument
* InvalidArgument `object`: Parameter name is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidChangeBatch
* InvalidChangeBatch `object`: This exception contains a list of messages that might contain one or more error messages. Each error message indicates one error in the change batch.
  * message [ErrorMessage](#errormessage)
  * messages [ErrorMessages](#errormessages)

### InvalidDomainName
* InvalidDomainName `object`: The specified domain name is not valid.
  * message [ErrorMessage](#errormessage)

### InvalidInput
* InvalidInput `object`: The input is not valid.
  * message [ErrorMessage](#errormessage)

### InvalidPaginationToken
* InvalidPaginationToken `object`: The value that you specified to get the second or subsequent page of results is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidTrafficPolicyDocument
* InvalidTrafficPolicyDocument `object`: The format of the traffic policy document that you specified in the <code>Document</code> element is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidVPCId
* InvalidVPCId `object`: The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.
  * message [ErrorMessage](#errormessage)

### Inverted
* Inverted `boolean`

### IsPrivateZone
* IsPrivateZone `boolean`

### LastVPCAssociation
* LastVPCAssociation `object`: The VPC that you're trying to disassociate from the private hosted zone is the last VPC that is associated with the hosted zone. Amazon Route 53 doesn't support disassociating the last VPC from a hosted zone.
  * message [ErrorMessage](#errormessage)

### LimitValue
* LimitValue `integer`

### LimitsExceeded
* LimitsExceeded `object`: This operation can't be completed either because the current account has reached the limit on reusable delegation sets that it can create or because you've reached the limit on the number of Amazon VPCs that you can associate with a private hosted zone. To get the current limit on the number of reusable delegation sets, see <a>GetAccountLimit</a>. To get the current limit on the number of Amazon VPCs that you can associate with a private hosted zone, see <a>GetHostedZoneLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.
  * message [ErrorMessage](#errormessage)

### LinkedService
* LinkedService `object`: If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. 
  * Description [ResourceDescription](#resourcedescription)
  * ServicePrincipal [ServicePrincipal](#serviceprincipal)

### ListGeoLocationsRequest
* ListGeoLocationsRequest `object`: A request to get a list of geographic locations that Amazon Route 53 supports for geolocation resource record sets. 

### ListGeoLocationsResponse
* ListGeoLocationsResponse `object`: A complex type containing the response information for the request.
  * GeoLocationDetailsList **required** [GeoLocationDetailsList](#geolocationdetailslist)
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * NextContinentCode [GeoLocationContinentCode](#geolocationcontinentcode)
  * NextCountryCode [GeoLocationCountryCode](#geolocationcountrycode)
  * NextSubdivisionCode [GeoLocationSubdivisionCode](#geolocationsubdivisioncode)

### ListHealthChecksRequest
* ListHealthChecksRequest `object`: A request to retrieve a list of the health checks that are associated with the current AWS account.

### ListHealthChecksResponse
* ListHealthChecksResponse `object`: A complex type that contains the response to a <code>ListHealthChecks</code> request.
  * HealthChecks **required** [HealthChecks](#healthchecks)
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * Marker **required** [PageMarker](#pagemarker)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * NextMarker [PageMarker](#pagemarker)

### ListHostedZonesByNameRequest
* ListHostedZonesByNameRequest `object`: Retrieves a list of the public and private hosted zones that are associated with the current AWS account in ASCII order by domain name. 

### ListHostedZonesByNameResponse
* ListHostedZonesByNameResponse `object`: A complex type that contains the response information for the request.
  * DNSName [DNSName](#dnsname)
  * HostedZoneId [ResourceId](#resourceid)
  * HostedZones **required** [HostedZones](#hostedzones)
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * NextDNSName [DNSName](#dnsname)
  * NextHostedZoneId [ResourceId](#resourceid)

### ListHostedZonesRequest
* ListHostedZonesRequest `object`: A request to retrieve a list of the public and private hosted zones that are associated with the current AWS account.

### ListHostedZonesResponse
* ListHostedZonesResponse `object`
  * HostedZones **required** [HostedZones](#hostedzones)
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * Marker **required** [PageMarker](#pagemarker)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * NextMarker [PageMarker](#pagemarker)

### ListQueryLoggingConfigsRequest
* ListQueryLoggingConfigsRequest `object`

### ListQueryLoggingConfigsResponse
* ListQueryLoggingConfigsResponse `object`
  * NextToken [PaginationToken](#paginationtoken)
  * QueryLoggingConfigs **required** [QueryLoggingConfigs](#queryloggingconfigs)

### ListResourceRecordSetsRequest
* ListResourceRecordSetsRequest `object`: A request for the resource record sets that are associated with a specified hosted zone.

### ListResourceRecordSetsResponse
* ListResourceRecordSetsResponse `object`: A complex type that contains list information for the resource record set.
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * NextRecordIdentifier [ResourceRecordSetIdentifier](#resourcerecordsetidentifier)
  * NextRecordName [DNSName](#dnsname)
  * NextRecordType [RRType](#rrtype)
  * ResourceRecordSets **required** [ResourceRecordSets](#resourcerecordsets)

### ListReusableDelegationSetsRequest
* ListReusableDelegationSetsRequest `object`: A request to get a list of the reusable delegation sets that are associated with the current AWS account.

### ListReusableDelegationSetsResponse
* ListReusableDelegationSetsResponse `object`: A complex type that contains information about the reusable delegation sets that are associated with the current AWS account.
  * DelegationSets **required** [DelegationSets](#delegationsets)
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * Marker **required** [PageMarker](#pagemarker)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * NextMarker [PageMarker](#pagemarker)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`: A complex type containing information about a request for a list of the tags that are associated with an individual resource.

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`: A complex type that contains information about the health checks or hosted zones for which you want to list tags.
  * ResourceTagSet **required** [ResourceTagSet](#resourcetagset)

### ListTagsForResourcesRequest
* ListTagsForResourcesRequest `object`: A complex type that contains information about the health checks or hosted zones for which you want to list tags.
  * ResourceIds **required** [TagResourceIdList](#tagresourceidlist)

### ListTagsForResourcesResponse
* ListTagsForResourcesResponse `object`: A complex type containing tags for the specified resources.
  * ResourceTagSets **required** [ResourceTagSetList](#resourcetagsetlist)

### ListTrafficPoliciesRequest
* ListTrafficPoliciesRequest `object`: A complex type that contains the information about the request to list the traffic policies that are associated with the current AWS account.

### ListTrafficPoliciesResponse
* ListTrafficPoliciesResponse `object`: A complex type that contains the response information for the request.
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * TrafficPolicyIdMarker **required** [TrafficPolicyId](#trafficpolicyid)
  * TrafficPolicySummaries **required** [TrafficPolicySummaries](#trafficpolicysummaries)

### ListTrafficPolicyInstancesByHostedZoneRequest
* ListTrafficPolicyInstancesByHostedZoneRequest `object`: A request for the traffic policy instances that you created in a specified hosted zone.

### ListTrafficPolicyInstancesByHostedZoneResponse
* ListTrafficPolicyInstancesByHostedZoneResponse `object`: A complex type that contains the response information for the request.
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * TrafficPolicyInstanceNameMarker [DNSName](#dnsname)
  * TrafficPolicyInstanceTypeMarker [RRType](#rrtype)
  * TrafficPolicyInstances **required** [TrafficPolicyInstances](#trafficpolicyinstances)

### ListTrafficPolicyInstancesByPolicyRequest
* ListTrafficPolicyInstancesByPolicyRequest `object`: A complex type that contains the information about the request to list your traffic policy instances.

### ListTrafficPolicyInstancesByPolicyResponse
* ListTrafficPolicyInstancesByPolicyResponse `object`: A complex type that contains the response information for the request.
  * HostedZoneIdMarker [ResourceId](#resourceid)
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * TrafficPolicyInstanceNameMarker [DNSName](#dnsname)
  * TrafficPolicyInstanceTypeMarker [RRType](#rrtype)
  * TrafficPolicyInstances **required** [TrafficPolicyInstances](#trafficpolicyinstances)

### ListTrafficPolicyInstancesRequest
* ListTrafficPolicyInstancesRequest `object`: A request to get information about the traffic policy instances that you created by using the current AWS account.

### ListTrafficPolicyInstancesResponse
* ListTrafficPolicyInstancesResponse `object`: A complex type that contains the response information for the request.
  * HostedZoneIdMarker [ResourceId](#resourceid)
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * TrafficPolicyInstanceNameMarker [DNSName](#dnsname)
  * TrafficPolicyInstanceTypeMarker [RRType](#rrtype)
  * TrafficPolicyInstances **required** [TrafficPolicyInstances](#trafficpolicyinstances)

### ListTrafficPolicyVersionsRequest
* ListTrafficPolicyVersionsRequest `object`: A complex type that contains the information about the request to list your traffic policies.

### ListTrafficPolicyVersionsResponse
* ListTrafficPolicyVersionsResponse `object`: A complex type that contains the response information for the request.
  * IsTruncated **required** [PageTruncated](#pagetruncated)
  * MaxItems **required** [PageMaxItems](#pagemaxitems)
  * TrafficPolicies **required** [TrafficPolicies](#trafficpolicies)
  * TrafficPolicyVersionMarker **required** [TrafficPolicyVersionMarker](#trafficpolicyversionmarker)

### ListVPCAssociationAuthorizationsRequest
* ListVPCAssociationAuthorizationsRequest `object`: A complex type that contains information about that can be associated with your hosted zone.

### ListVPCAssociationAuthorizationsResponse
* ListVPCAssociationAuthorizationsResponse `object`: A complex type that contains the response information for the request.
  * HostedZoneId **required** [ResourceId](#resourceid)
  * NextToken [PaginationToken](#paginationtoken)
  * VPCs **required** [VPCs](#vpcs)

### MaxResults
* MaxResults `string`

### MeasureLatency
* MeasureLatency `boolean`

### Message
* Message `string`

### MetricName
* MetricName `string`

### Nameserver
* Nameserver `string`

### Namespace
* Namespace `string`

### NoSuchChange
* NoSuchChange `object`: A change with the specified change ID does not exist.
  * message [ErrorMessage](#errormessage)

### NoSuchCloudWatchLogsLogGroup
* NoSuchCloudWatchLogsLogGroup `object`: There is no CloudWatch Logs log group with the specified ARN.
  * message [ErrorMessage](#errormessage)

### NoSuchDelegationSet
* NoSuchDelegationSet `object`: A reusable delegation set with the specified ID does not exist.
  * message [ErrorMessage](#errormessage)

### NoSuchGeoLocation
* NoSuchGeoLocation `object`: Amazon Route 53 doesn't support the specified geolocation.
  * message [ErrorMessage](#errormessage)

### NoSuchHealthCheck
* NoSuchHealthCheck `object`: No health check exists with the ID that you specified in the <code>DeleteHealthCheck</code> request.
  * message [ErrorMessage](#errormessage)

### NoSuchHostedZone
* NoSuchHostedZone `object`: No hosted zone exists with the ID that you specified.
  * message [ErrorMessage](#errormessage)

### NoSuchQueryLoggingConfig
* NoSuchQueryLoggingConfig `object`: There is no DNS query logging configuration with the specified ID.
  * message [ErrorMessage](#errormessage)

### NoSuchTrafficPolicy
* NoSuchTrafficPolicy `object`: No traffic policy exists with the specified ID.
  * message [ErrorMessage](#errormessage)

### NoSuchTrafficPolicyInstance
* NoSuchTrafficPolicyInstance `object`: No traffic policy instance exists with the specified ID.
  * message [ErrorMessage](#errormessage)

### Nonce
* Nonce `string`

### NotAuthorizedException
* NotAuthorizedException `object`: Associating the specified VPC with the specified hosted zone has not been authorized.
  * message [ErrorMessage](#errormessage)

### PageMarker
* PageMarker `string`

### PageMaxItems
* PageMaxItems `string`

### PageTruncated
* PageTruncated `boolean`

### PaginationToken
* PaginationToken `string`

### Period
* Period `integer`

### Port
* Port `integer`

### PriorRequestNotComplete
* PriorRequestNotComplete `object`: If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code> (<code>Bad request</code>). If Amazon Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.
  * message [ErrorMessage](#errormessage)

### PublicZoneVPCAssociation
* PublicZoneVPCAssociation `object`: You're trying to associate a VPC with a public hosted zone. Amazon Route 53 doesn't support associating a VPC with a public hosted zone.
  * message [ErrorMessage](#errormessage)

### QueryLoggingConfig
* QueryLoggingConfig `object`: A complex type that contains information about a configuration for DNS query logging.
  * CloudWatchLogsLogGroupArn **required** [CloudWatchLogsLogGroupArn](#cloudwatchlogsloggrouparn)
  * HostedZoneId **required** [ResourceId](#resourceid)
  * Id **required** [QueryLoggingConfigId](#queryloggingconfigid)

### QueryLoggingConfigAlreadyExists
* QueryLoggingConfigAlreadyExists `object`: You can create only one query logging configuration for a hosted zone, and a query logging configuration already exists for this hosted zone.
  * message [ErrorMessage](#errormessage)

### QueryLoggingConfigId
* QueryLoggingConfigId `string`

### QueryLoggingConfigs
* QueryLoggingConfigs `array`
  * items [QueryLoggingConfig](#queryloggingconfig)

### RData
* RData `string`

### RRType
* RRType `string` (values: SOA, A, TXT, NS, CNAME, MX, NAPTR, PTR, SRV, SPF, AAAA, CAA)

### RecordData
* RecordData `array`
  * items [RecordDataEntry](#recorddataentry)

### RecordDataEntry
* RecordDataEntry `string`: <p>A value that Amazon Route 53 returned for this resource record set. A <code>RecordDataEntry</code> element is one of the following:</p> <ul> <li> <p>For non-alias resource record sets, a <code>RecordDataEntry</code> element contains one value in the resource record set. If the resource record set contains multiple values, the response includes one <code>RecordDataEntry</code> element for each value.</p> </li> <li> <p>For multiple resource record sets that have the same name and type, which includes weighted, latency, geolocation, and failover, a <code>RecordDataEntry</code> element contains the value from the appropriate resource record set based on the request.</p> </li> <li> <p>For alias resource record sets that refer to AWS resources other than another resource record set, the <code>RecordDataEntry</code> element contains an IP address or a domain name for the AWS resource, depending on the type of resource.</p> </li> <li> <p>For alias resource record sets that refer to other resource record sets, a <code>RecordDataEntry</code> element contains one value from the referenced resource record set. If the referenced resource record set contains multiple values, the response includes one <code>RecordDataEntry</code> element for each value.</p> </li> </ul>

### RequestInterval
* RequestInterval `integer`

### ResettableElementName
* ResettableElementName `string` (values: FullyQualifiedDomainName, Regions, ResourcePath, ChildHealthChecks)

### ResettableElementNameList
* ResettableElementNameList `array`
  * items [ResettableElementName](#resettableelementname)

### ResourceDescription
* ResourceDescription `string`

### ResourceId
* ResourceId `string`

### ResourcePath
* ResourcePath `string`

### ResourceRecord
* ResourceRecord `object`: <p>Information specific to the resource record.</p> <note> <p>If you're creating an alias resource record set, omit <code>ResourceRecord</code>.</p> </note>
  * Value **required** [RData](#rdata)

### ResourceRecordSet
* ResourceRecordSet `object`: Information about the resource record set to create or delete.
  * AliasTarget [AliasTarget](#aliastarget)
  * Failover [ResourceRecordSetFailover](#resourcerecordsetfailover)
  * GeoLocation [GeoLocation](#geolocation)
  * HealthCheckId [HealthCheckId](#healthcheckid)
  * MultiValueAnswer [ResourceRecordSetMultiValueAnswer](#resourcerecordsetmultivalueanswer)
  * Name **required** [DNSName](#dnsname)
  * Region [ResourceRecordSetRegion](#resourcerecordsetregion)
  * ResourceRecords [ResourceRecords](#resourcerecords)
  * SetIdentifier [ResourceRecordSetIdentifier](#resourcerecordsetidentifier)
  * TTL [TTL](#ttl)
  * TrafficPolicyInstanceId [TrafficPolicyInstanceId](#trafficpolicyinstanceid)
  * Type **required** [RRType](#rrtype)
  * Weight [ResourceRecordSetWeight](#resourcerecordsetweight)

### ResourceRecordSetFailover
* ResourceRecordSetFailover `string` (values: PRIMARY, SECONDARY)

### ResourceRecordSetIdentifier
* ResourceRecordSetIdentifier `string`

### ResourceRecordSetMultiValueAnswer
* ResourceRecordSetMultiValueAnswer `boolean`

### ResourceRecordSetRegion
* ResourceRecordSetRegion `string` (values: us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, eu-west-1, eu-west-2, eu-west-3, eu-central-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-northeast-3, sa-east-1, cn-north-1, cn-northwest-1, ap-south-1)

### ResourceRecordSetWeight
* ResourceRecordSetWeight `integer`

### ResourceRecordSets
* ResourceRecordSets `array`
  * items [ResourceRecordSet](#resourcerecordset)

### ResourceRecords
* ResourceRecords `array`
  * items [ResourceRecord](#resourcerecord)

### ResourceTagSet
* ResourceTagSet `object`: A complex type containing a resource and its associated tags.
  * ResourceId [TagResourceId](#tagresourceid)
  * ResourceType [TagResourceType](#tagresourcetype)
  * Tags [TagList](#taglist)

### ResourceTagSetList
* ResourceTagSetList `array`
  * items [ResourceTagSet](#resourcetagset)

### ResourceURI
* ResourceURI `string`

### ReusableDelegationSetLimit
* ReusableDelegationSetLimit `object`: A complex type that contains the type of limit that you specified in the request and the current value for that limit.
  * Type **required** [ReusableDelegationSetLimitType](#reusabledelegationsetlimittype)
  * Value **required** [LimitValue](#limitvalue)

### ReusableDelegationSetLimitType
* ReusableDelegationSetLimitType `string` (values: MAX_ZONES_BY_REUSABLE_DELEGATION_SET)

### SearchString
* SearchString `string`

### ServicePrincipal
* ServicePrincipal `string`

### Statistic
* Statistic `string` (values: Average, Sum, SampleCount, Maximum, Minimum)

### Status
* Status `string`

### StatusReport
* StatusReport `object`: A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check.
  * CheckedTime [TimeStamp](#timestamp)
  * Status [Status](#status)

### SubnetMask
* SubnetMask `string`

### TTL
* TTL `integer`

### Tag
* Tag `object`: A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.
  * Key [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceId
* TagResourceId `string`

### TagResourceIdList
* TagResourceIdList `array`
  * items [TagResourceId](#tagresourceid)

### TagResourceType
* TagResourceType `string` (values: healthcheck, hostedzone)

### TagValue
* TagValue `string`

### TestDNSAnswerRequest
* TestDNSAnswerRequest `object`: Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. 

### TestDNSAnswerResponse
* TestDNSAnswerResponse `object`: A complex type that contains the response to a <code>TestDNSAnswer</code> request. 
  * Nameserver **required** [Nameserver](#nameserver)
  * Protocol **required** [TransportProtocol](#transportprotocol)
  * RecordData **required** [RecordData](#recorddata)
  * RecordName **required** [DNSName](#dnsname)
  * RecordType **required** [RRType](#rrtype)
  * ResponseCode **required** [DNSRCode](#dnsrcode)

### Threshold
* Threshold `number`

### ThrottlingException
* ThrottlingException `object`: The limit on the number of requests per second was exceeded.
  * message [ErrorMessage](#errormessage)

### TimeStamp
* TimeStamp `string`

### TooManyHealthChecks
* TooManyHealthChecks `object`: <p>This health check can't be created because the current account has reached the limit on the number of active health checks.</p> <p>For information about default limits, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>For information about how to get the current limit for an account, see <a>GetAccountLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p> <p>You have reached the maximum number of active health checks for an AWS account. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
  * message [ErrorMessage](#errormessage)

### TooManyHostedZones
* TooManyHostedZones `object`: <p>This operation can't be completed either because the current account has reached the limit on the number of hosted zones or because you've reached the limit on the number of hosted zones that can be associated with a reusable delegation set.</p> <p>For information about default limits, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>To get the current limit on hosted zones that can be created by an account, see <a>GetAccountLimit</a>.</p> <p>To get the current limit on hosted zones that can be associated with a reusable delegation set, see <a>GetReusableDelegationSetLimit</a>.</p> <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
  * message [ErrorMessage](#errormessage)

### TooManyTrafficPolicies
* TooManyTrafficPolicies `object`: <p>This traffic policy can't be created because the current account has reached the limit on the number of traffic policies.</p> <p>For information about default limits, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>To get the current limit for an account, see <a>GetAccountLimit</a>. </p> <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
  * message [ErrorMessage](#errormessage)

### TooManyTrafficPolicyInstances
* TooManyTrafficPolicyInstances `object`: <p>This traffic policy instance can't be created because the current account has reached the limit on the number of traffic policy instances.</p> <p>For information about default limits, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>For information about how to get the current limit for an account, see <a>GetAccountLimit</a>.</p> <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
  * message [ErrorMessage](#errormessage)

### TooManyTrafficPolicyVersionsForCurrentPolicy
* TooManyTrafficPolicyVersionsForCurrentPolicy `object`: <p>This traffic policy version can't be created because you've reached the limit of 1000 on the number of versions that you can create for the current traffic policy.</p> <p>To create more traffic policy versions, you can use <a>GetTrafficPolicy</a> to get the traffic policy document for a specified traffic policy version, and then use <a>CreateTrafficPolicy</a> to create a new traffic policy using the traffic policy document.</p>
  * message [ErrorMessage](#errormessage)

### TooManyVPCAssociationAuthorizations
* TooManyVPCAssociationAuthorizations `object`: You've created the maximum number of authorizations that can be created for the specified hosted zone. To authorize another VPC to be associated with the hosted zone, submit a <code>DeleteVPCAssociationAuthorization</code> request to remove an existing authorization. To get a list of existing authorizations, submit a <code>ListVPCAssociationAuthorizations</code> request.
  * message [ErrorMessage](#errormessage)

### TrafficPolicies
* TrafficPolicies `array`
  * items [TrafficPolicy](#trafficpolicy)

### TrafficPolicy
* TrafficPolicy `object`: A complex type that contains settings for a traffic policy.
  * Comment [TrafficPolicyComment](#trafficpolicycomment)
  * Document **required** [TrafficPolicyDocument](#trafficpolicydocument)
  * Id **required** [TrafficPolicyId](#trafficpolicyid)
  * Name **required** [TrafficPolicyName](#trafficpolicyname)
  * Type **required** [RRType](#rrtype)
  * Version **required** [TrafficPolicyVersion](#trafficpolicyversion)

### TrafficPolicyAlreadyExists
* TrafficPolicyAlreadyExists `object`: A traffic policy that has the same value for <code>Name</code> already exists.
  * message [ErrorMessage](#errormessage)

### TrafficPolicyComment
* TrafficPolicyComment `string`

### TrafficPolicyDocument
* TrafficPolicyDocument `string`

### TrafficPolicyId
* TrafficPolicyId `string`

### TrafficPolicyInUse
* TrafficPolicyInUse `object`: One or more traffic policy instances were created by using the specified traffic policy.
  * message [ErrorMessage](#errormessage)

### TrafficPolicyInstance
* TrafficPolicyInstance `object`: A complex type that contains settings for the new traffic policy instance.
  * HostedZoneId **required** [ResourceId](#resourceid)
  * Id **required** [TrafficPolicyInstanceId](#trafficpolicyinstanceid)
  * Message **required** [Message](#message)
  * Name **required** [DNSName](#dnsname)
  * State **required** [TrafficPolicyInstanceState](#trafficpolicyinstancestate)
  * TTL **required** [TTL](#ttl)
  * TrafficPolicyId **required** [TrafficPolicyId](#trafficpolicyid)
  * TrafficPolicyType **required** [RRType](#rrtype)
  * TrafficPolicyVersion **required** [TrafficPolicyVersion](#trafficpolicyversion)

### TrafficPolicyInstanceAlreadyExists
* TrafficPolicyInstanceAlreadyExists `object`: There is already a traffic policy instance with the specified ID.
  * message [ErrorMessage](#errormessage)

### TrafficPolicyInstanceCount
* TrafficPolicyInstanceCount `integer`

### TrafficPolicyInstanceId
* TrafficPolicyInstanceId `string`

### TrafficPolicyInstanceState
* TrafficPolicyInstanceState `string`

### TrafficPolicyInstances
* TrafficPolicyInstances `array`
  * items [TrafficPolicyInstance](#trafficpolicyinstance)

### TrafficPolicyName
* TrafficPolicyName `string`

### TrafficPolicySummaries
* TrafficPolicySummaries `array`
  * items [TrafficPolicySummary](#trafficpolicysummary)

### TrafficPolicySummary
* TrafficPolicySummary `object`: A complex type that contains information about the latest version of one traffic policy that is associated with the current AWS account.
  * Id **required** [TrafficPolicyId](#trafficpolicyid)
  * LatestVersion **required** [TrafficPolicyVersion](#trafficpolicyversion)
  * Name **required** [TrafficPolicyName](#trafficpolicyname)
  * TrafficPolicyCount **required** [TrafficPolicyVersion](#trafficpolicyversion)
  * Type **required** [RRType](#rrtype)

### TrafficPolicyVersion
* TrafficPolicyVersion `integer`

### TrafficPolicyVersionMarker
* TrafficPolicyVersionMarker `string`

### TransportProtocol
* TransportProtocol `string`

### UpdateHealthCheckRequest
* UpdateHealthCheckRequest `object`: A complex type that contains information about a request to update a health check.
  * AlarmIdentifier [AlarmIdentifier](#alarmidentifier)
  * ChildHealthChecks [ChildHealthCheckList](#childhealthchecklist)
  * EnableSNI [EnableSNI](#enablesni)
  * FailureThreshold [FailureThreshold](#failurethreshold)
  * FullyQualifiedDomainName [FullyQualifiedDomainName](#fullyqualifieddomainname)
  * HealthCheckVersion [HealthCheckVersion](#healthcheckversion)
  * HealthThreshold [HealthThreshold](#healththreshold)
  * IPAddress [IPAddress](#ipaddress)
  * InsufficientDataHealthStatus [InsufficientDataHealthStatus](#insufficientdatahealthstatus)
  * Inverted [Inverted](#inverted)
  * Port [Port](#port)
  * Regions [HealthCheckRegionList](#healthcheckregionlist)
  * ResetElements [ResettableElementNameList](#resettableelementnamelist)
  * ResourcePath [ResourcePath](#resourcepath)
  * SearchString [SearchString](#searchstring)

### UpdateHealthCheckResponse
* UpdateHealthCheckResponse `object`
  * HealthCheck **required** [HealthCheck](#healthcheck)

### UpdateHostedZoneCommentRequest
* UpdateHostedZoneCommentRequest `object`: A request to update the comment for a hosted zone.
  * Comment [ResourceDescription](#resourcedescription)

### UpdateHostedZoneCommentResponse
* UpdateHostedZoneCommentResponse `object`: A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.
  * HostedZone **required** [HostedZone](#hostedzone)

### UpdateTrafficPolicyCommentRequest
* UpdateTrafficPolicyCommentRequest `object`: A complex type that contains information about the traffic policy that you want to update the comment for.
  * Comment **required** [TrafficPolicyComment](#trafficpolicycomment)

### UpdateTrafficPolicyCommentResponse
* UpdateTrafficPolicyCommentResponse `object`: A complex type that contains the response information for the traffic policy.
  * TrafficPolicy **required** [TrafficPolicy](#trafficpolicy)

### UpdateTrafficPolicyInstanceRequest
* UpdateTrafficPolicyInstanceRequest `object`: A complex type that contains information about the resource record sets that you want to update based on a specified traffic policy instance.
  * TTL **required** [TTL](#ttl)
  * TrafficPolicyId **required** [TrafficPolicyId](#trafficpolicyid)
  * TrafficPolicyVersion **required** [TrafficPolicyVersion](#trafficpolicyversion)

### UpdateTrafficPolicyInstanceResponse
* UpdateTrafficPolicyInstanceResponse `object`: A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.
  * TrafficPolicyInstance **required** [TrafficPolicyInstance](#trafficpolicyinstance)

### UsageCount
* UsageCount `integer`

### VPC
* VPC `object`: (Private hosted zones only) A complex type that contains information about an Amazon VPC.
  * VPCId [VPCId](#vpcid)
  * VPCRegion [VPCRegion](#vpcregion)

### VPCAssociationAuthorizationNotFound
* VPCAssociationAuthorizationNotFound `object`: The VPC that you specified is not authorized to be associated with the hosted zone.
  * message [ErrorMessage](#errormessage)

### VPCAssociationNotFound
* VPCAssociationNotFound `object`: The specified VPC and hosted zone are not currently associated.
  * message [ErrorMessage](#errormessage)

### VPCId
* VPCId `string`: (Private hosted zones only) The ID of an Amazon VPC. 

### VPCRegion
* VPCRegion `string` (values: us-east-1, us-east-2, us-west-1, us-west-2, eu-west-1, eu-west-2, eu-west-3, eu-central-1, ap-southeast-1, ap-southeast-2, ap-south-1, ap-northeast-1, ap-northeast-2, ap-northeast-3, sa-east-1, ca-central-1, cn-north-1)

### VPCs
* VPCs `array`: (Private hosted zones only) A list of <code>VPC</code> elements.
  * items [VPC](#vpc)


