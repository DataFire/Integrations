# @datafire/amazonaws_route53

Client library for Amazon Route 53

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_route53
```

```js
let datafire = require('datafire');
let amazonaws_route53 = require('@datafire/amazonaws_route53').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_route53.GetChange({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### GetChange



```js
amazonaws_route53.GetChange({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### GetCheckerIpRanges



```js
amazonaws_route53.GetCheckerIpRanges({}, context)
```

#### Parameters
*This action has no parameters*

### ListReusableDelegationSets



```js
amazonaws_route53.ListReusableDelegationSets({}, context)
```

#### Parameters
*This action has no parameters*

### GetReusableDelegationSet



```js
amazonaws_route53.GetReusableDelegationSet({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### GetGeoLocation



```js
amazonaws_route53.GetGeoLocation({}, context)
```

#### Parameters
*This action has no parameters*

### ListGeoLocations



```js
amazonaws_route53.ListGeoLocations({}, context)
```

#### Parameters
*This action has no parameters*

### ListHealthChecks



```js
amazonaws_route53.ListHealthChecks({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### UpdateHealthCheck



```js
amazonaws_route53.UpdateHealthCheck({
  "HealthCheckId": ""
}, context)
```

#### Parameters
* HealthCheckId (string) **required**
* AlarmIdentifier (object) - A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
* ChildHealthChecks (array)
* EnableSNI (boolean)
* FailureThreshold (integer)
* FullyQualifiedDomainName (string)
* HealthCheckVersion (integer)
* HealthThreshold (integer)
* IPAddress (string)
* InsufficientDataHealthStatus (string)
* Inverted (boolean)
* Port (integer)
* Regions (array)
* ResourcePath (string)
* SearchString (string)

### GetHealthCheckLastFailureReason



```js
amazonaws_route53.GetHealthCheckLastFailureReason({
  "HealthCheckId": ""
}, context)
```

#### Parameters
* HealthCheckId (string) **required**

### GetHealthCheckStatus



```js
amazonaws_route53.GetHealthCheckStatus({
  "HealthCheckId": ""
}, context)
```

#### Parameters
* HealthCheckId (string) **required**

### GetHealthCheckCount



```js
amazonaws_route53.GetHealthCheckCount({}, context)
```

#### Parameters
*This action has no parameters*

### ListHostedZones



```js
amazonaws_route53.ListHostedZones({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### UpdateHostedZoneComment



```js
amazonaws_route53.UpdateHostedZoneComment({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**
* Comment (string)

### AssociateVPCWithHostedZone



```js
amazonaws_route53.AssociateVPCWithHostedZone({
  "Id": "",
  "VPC": {}
}, context)
```

#### Parameters
* Id (string) **required**
* Comment (string)
* VPC (object) **required** - (Private hosted zones only) A complex type that contains information about an Amazon VPC.

### ListVPCAssociationAuthorizations



```js
amazonaws_route53.ListVPCAssociationAuthorizations({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### DeleteVPCAssociationAuthorization



```js
amazonaws_route53.DeleteVPCAssociationAuthorization({
  "Id": "",
  "VPC": {}
}, context)
```

#### Parameters
* Id (string) **required**
* VPC (object) **required** - (Private hosted zones only) A complex type that contains information about an Amazon VPC.

### DisassociateVPCFromHostedZone



```js
amazonaws_route53.DisassociateVPCFromHostedZone({
  "Id": "",
  "VPC": {}
}, context)
```

#### Parameters
* Id (string) **required**
* Comment (string)
* VPC (object) **required** - (Private hosted zones only) A complex type that contains information about an Amazon VPC.

### ListResourceRecordSets



```js
amazonaws_route53.ListResourceRecordSets({
  "Id": ""
}, context)
```

#### Parameters
* MaxItems (string)
* StartRecordName (string)
* StartRecordType (string)
* StartRecordIdentifier (string)
* Id (string) **required**

### ChangeResourceRecordSets



```js
amazonaws_route53.ChangeResourceRecordSets({
  "Id": "",
  "ChangeBatch": {
    "Changes": []
  }
}, context)
```

#### Parameters
* Id (string) **required**
* ChangeBatch (object) **required** - The information for a change request.

### GetHostedZoneCount



```js
amazonaws_route53.GetHostedZoneCount({}, context)
```

#### Parameters
*This action has no parameters*

### ListHostedZonesByName



```js
amazonaws_route53.ListHostedZonesByName({}, context)
```

#### Parameters
*This action has no parameters*

### ListTagsForResources



```js
amazonaws_route53.ListTagsForResources({
  "ResourceType": "",
  "ResourceIds": []
}, context)
```

#### Parameters
* ResourceType (string) **required**
* ResourceIds (array) **required**

### ListTagsForResource



```js
amazonaws_route53.ListTagsForResource({
  "ResourceType": "",
  "ResourceId": ""
}, context)
```

#### Parameters
* ResourceType (string) **required**
* ResourceId (string) **required**

### TestDNSAnswer



```js
amazonaws_route53.TestDNSAnswer({}, context)
```

#### Parameters
*This action has no parameters*

### ListTrafficPolicies



```js
amazonaws_route53.ListTrafficPolicies({}, context)
```

#### Parameters
*This action has no parameters*

### ListTrafficPolicyVersions



```js
amazonaws_route53.ListTrafficPolicyVersions({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### CreateTrafficPolicy



```js
amazonaws_route53.CreateTrafficPolicy({
  "Name": "",
  "Document": ""
}, context)
```

#### Parameters
* Comment (string)
* Document (string) **required**
* Name (string) **required**

### CreateTrafficPolicyVersion



```js
amazonaws_route53.CreateTrafficPolicyVersion({
  "Id": "",
  "Document": ""
}, context)
```

#### Parameters
* Id (string) **required**
* Comment (string)
* Document (string) **required**

### UpdateTrafficPolicyComment



```js
amazonaws_route53.UpdateTrafficPolicyComment({
  "Id": "",
  "Comment": ""
}, context)
```

#### Parameters
* Id (string) **required**
* Comment (string) **required**

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

#### Parameters
* HostedZoneId (string) **required**
* Name (string) **required**
* TTL (integer) **required**
* TrafficPolicyId (string) **required**
* TrafficPolicyVersion (integer) **required**

### UpdateTrafficPolicyInstance



```js
amazonaws_route53.UpdateTrafficPolicyInstance({
  "Id": "",
  "TTL": 0,
  "TrafficPolicyId": "",
  "TrafficPolicyVersion": 0
}, context)
```

#### Parameters
* Id (string) **required**
* TTL (integer) **required**
* TrafficPolicyId (string) **required**
* TrafficPolicyVersion (integer) **required**

### GetTrafficPolicyInstanceCount



```js
amazonaws_route53.GetTrafficPolicyInstanceCount({}, context)
```

#### Parameters
*This action has no parameters*

### ListTrafficPolicyInstances



```js
amazonaws_route53.ListTrafficPolicyInstances({}, context)
```

#### Parameters
*This action has no parameters*

### ListTrafficPolicyInstancesByHostedZone



```js
amazonaws_route53.ListTrafficPolicyInstancesByHostedZone({}, context)
```

#### Parameters
*This action has no parameters*

### ListTrafficPolicyInstancesByPolicy



```js
amazonaws_route53.ListTrafficPolicyInstancesByPolicy({}, context)
```

#### Parameters
*This action has no parameters*

