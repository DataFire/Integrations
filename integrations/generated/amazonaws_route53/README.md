# @datafire/amazonaws_route53

Client library for Amazon Route 53

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_route53
```

```js
let datafire = require('datafire');
let amazonaws_route53 = require('@datafire/amazonaws_route53').actions;
let context = new datafire.Context();

amazonaws_route53.GetChange({}, context).then(data => {
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

### ListReusableDelegationSets



```js
amazonaws_route53.ListReusableDelegationSets({}, context)
```

#### Parameters

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

### ListGeoLocations



```js
amazonaws_route53.ListGeoLocations({}, context)
```

#### Parameters

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

### AssociateVPCWithHostedZone



```js
amazonaws_route53.AssociateVPCWithHostedZone({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

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
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### DisassociateVPCFromHostedZone



```js
amazonaws_route53.DisassociateVPCFromHostedZone({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

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
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### GetHostedZoneCount



```js
amazonaws_route53.GetHostedZoneCount({}, context)
```

#### Parameters

### ListHostedZonesByName



```js
amazonaws_route53.ListHostedZonesByName({}, context)
```

#### Parameters

### ListTagsForResources



```js
amazonaws_route53.ListTagsForResources({
  "ResourceType": ""
}, context)
```

#### Parameters
* ResourceType (string) **required**

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

### ListTrafficPolicies



```js
amazonaws_route53.ListTrafficPolicies({}, context)
```

#### Parameters

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
amazonaws_route53.CreateTrafficPolicy({}, context)
```

#### Parameters

### CreateTrafficPolicyVersion



```js
amazonaws_route53.CreateTrafficPolicyVersion({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### UpdateTrafficPolicyComment



```js
amazonaws_route53.UpdateTrafficPolicyComment({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### CreateTrafficPolicyInstance



```js
amazonaws_route53.CreateTrafficPolicyInstance({}, context)
```

#### Parameters

### UpdateTrafficPolicyInstance



```js
amazonaws_route53.UpdateTrafficPolicyInstance({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### GetTrafficPolicyInstanceCount



```js
amazonaws_route53.GetTrafficPolicyInstanceCount({}, context)
```

#### Parameters

### ListTrafficPolicyInstances



```js
amazonaws_route53.ListTrafficPolicyInstances({}, context)
```

#### Parameters

### ListTrafficPolicyInstancesByHostedZone



```js
amazonaws_route53.ListTrafficPolicyInstancesByHostedZone({}, context)
```

#### Parameters

### ListTrafficPolicyInstancesByPolicy



```js
amazonaws_route53.ListTrafficPolicyInstancesByPolicy({}, context)
```

#### Parameters

