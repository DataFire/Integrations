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

.then(data => {
  console.log(data);
});
```

## Description

Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.

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
  * marker `string`
  * maxitems `string`

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
  * CallerReference **required** `string`: A unique string that identifies the request, and that allows you to retry failed <code>CreateReusableDelegationSet</code> requests without the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a <code>CreateReusableDelegationSet</code> request. <code>CallerReference</code> can be any unique string, for example a date/time stamp.
  * HostedZoneId `string`: If you want to mark the delegation set for an existing hosted zone as reusable, the ID for that hosted zone.

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
  * continentcode `string`
  * countrycode `string`
  * subdivisioncode `string`

#### Output
* output [GetGeoLocationResponse](#getgeolocationresponse)

### ListGeoLocations



```js
amazonaws_route53.ListGeoLocations({}, context)
```

#### Input
* input `object`
  * startcontinentcode `string`
  * startcountrycode `string`
  * startsubdivisioncode `string`
  * maxitems `string`

#### Output
* output [ListGeoLocationsResponse](#listgeolocationsresponse)

### ListHealthChecks



```js
amazonaws_route53.ListHealthChecks({}, context)
```

#### Input
* input `object`
  * marker `string`
  * maxitems `string`
  * MaxItems `string`
  * Marker `string`

#### Output
* output [ListHealthChecksResponse](#listhealthchecksresponse)

### CreateHealthCheck



```js
amazonaws_route53.CreateHealthCheck({
  "CallerReference": "",
  "HealthCheckConfig": {}
}, context)
```

#### Input
* input `object`
  * CallerReference **required** `string`: <p>A unique string that identifies the request and that allows you to retry a failed <code>CreateHealthCheck</code> request without the risk of creating two identical health checks:</p> <ul> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> and settings as a previous request, and if the health check doesn't exist, Amazon Route 53 creates the health check. If the health check does exist, Route 53 returns the settings for the existing health check.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as a deleted health check, regardless of the settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as an existing health check but with different settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with a unique <code>CallerReference</code> but settings identical to an existing health check, Route 53 creates the health check.</p> </li> </ul>
  * HealthCheckConfig **required** `object`: A complex type that contains information about the health check.
    * AlarmIdentifier
      * Name **required**
      * Region **required**
    * ChildHealthChecks
      * items
    * Disabled
    * EnableSNI
    * FailureThreshold
    * FullyQualifiedDomainName
    * HealthThreshold
    * IPAddress
    * InsufficientDataHealthStatus
    * Inverted
    * MeasureLatency
    * Port
    * Regions
      * items
    * RequestInterval
    * ResourcePath
    * SearchString
    * Type

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
  * AlarmIdentifier `object`: A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
    * Name
    * Region
  * ChildHealthChecks `array`: A complex type that contains one <code>ChildHealthCheck</code> element for each health check that you want to associate with a <code>CALCULATED</code> health check.
    * items
  * Disabled `boolean`: <p>Stops Route 53 from performing health checks. When you disable a health check, here's what happens:</p> <ul> <li> <p> <b>Health checks that check the health of endpoints:</b> Route 53 stops submitting requests to your application, server, or other resource.</p> </li> <li> <p> <b>Calculated health checks:</b> Route 53 stops aggregating the status of the referenced health checks.</p> </li> <li> <p> <b>Health checks that monitor CloudWatch alarms:</b> Route 53 stops monitoring the corresponding CloudWatch metrics.</p> </li> </ul> <p>After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-Inverted">Inverted</a>. </p> <p>Charges for a health check still apply when the health check is disabled. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
  * EnableSNI `boolean`: <p>Specify whether you want Amazon Route 53 to send the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>client_hello</code> message during <code>TLS</code> negotiation. This allows the endpoint to respond to <code>HTTPS</code> health check requests with the applicable SSL/TLS certificate.</p> <p>Some endpoints require that HTTPS requests include the host name in the <code>client_hello</code> message. If you don't enable SNI, the status of the health check will be SSL alert <code>handshake_failure</code>. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid.</p> <p>The SSL/TLS certificate on your endpoint includes a domain name in the <code>Common Name</code> field and possibly several more in the <code>Subject Alternative Names</code> field. One of the domain names in the certificate should match the value that you specify for <code>FullyQualifiedDomainName</code>. If the endpoint responds to the <code>client_hello</code> message with a certificate that does not include the domain name that you specified in <code>FullyQualifiedDomainName</code>, a health checker will retry the handshake. In the second attempt, the health checker will omit <code>FullyQualifiedDomainName</code> from the <code>client_hello</code> message.</p>
  * FailureThreshold `integer`: <p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you don't specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>
  * FullyQualifiedDomainName `string`: <p>Amazon Route 53 behavior depends on whether you specify a value for <code>IPAddress</code>.</p> <note> <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can't update an existing health check to add or remove the value of <code>IPAddress</code>. </p> </note> <p> <b>If you specify a value for</b> <code>IPAddress</code>:</p> <p>Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Route 53 to perform health checks.</p> <p>When Route 53 checks the health of an endpoint, here is how it constructs the <code>Host</code> header:</p> <ul> <li> <p>If you specify a value of <code>80</code> for <code>Port</code> and <code>HTTP</code> or <code>HTTP_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify a value of <code>443</code> for <code>Port</code> and <code>HTTPS</code> or <code>HTTPS_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify another value for <code>Port</code> and any value except <code>TCP</code> for <code>Type</code>, Route 53 passes <i> <code>FullyQualifiedDomainName</code>:<code>Port</code> </i> to the endpoint in the <code>Host</code> header.</p> </li> </ul> <p>If you don't specify a value for <code>FullyQualifiedDomainName</code>, Route 53 substitutes the value of <code>IPAddress</code> in the <code>Host</code> header in each of the above cases.</p> <p> <b>If you don't specify a value for</b> <code>IPAddress</code>:</p> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to the domain that you specify in <code>FullyQualifiedDomainName</code> at the interval you specify in <code>RequestInterval</code>. Using an IPv4 address that is returned by DNS, Route 53 then checks the health of the endpoint.</p> <note> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 uses only IPv4 to send health checks to the endpoint. If there's no resource record set with a type of A for the name that you specify for <code>FullyQualifiedDomainName</code>, the health check fails with a "DNS resolution failed" error.</p> </note> <p>If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by <code>FullyQualifiedDomainName</code>, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of <code>FullyQualifiedDomainName</code>, specify the domain name of the server (such as <code>us-east-2-www.example.com</code>), not the name of the resource record sets (www.example.com).</p> <important> <p>In this configuration, if the value of <code>FullyQualifiedDomainName</code> matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.</p> </important> <p>In addition, if the value of <code>Type</code> is <code>HTTP</code>, <code>HTTPS</code>, <code>HTTP_STR_MATCH</code>, or <code>HTTPS_STR_MATCH</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header, as it does when you specify a value for <code>IPAddress</code>. If the value of <code>Type</code> is <code>TCP</code>, Route 53 doesn't pass a <code>Host</code> header.</p>
  * HealthCheckVersion `integer`: <p>A sequential counter that Amazon Route 53 sets to <code>1</code> when you create a health check and increments by 1 each time you update settings for the health check.</p> <p>We recommend that you use <code>GetHealthCheck</code> or <code>ListHealthChecks</code> to get the current value of <code>HealthCheckVersion</code> for the health check that you want to update, and that you include that value in your <code>UpdateHealthCheck</code> request. This prevents Route 53 from overwriting an intervening update:</p> <ul> <li> <p>If the value in the <code>UpdateHealthCheck</code> request matches the value of <code>HealthCheckVersion</code> in the health check, Route 53 updates the health check with the new settings.</p> </li> <li> <p>If the value of <code>HealthCheckVersion</code> in the health check is greater, the health check was changed after you got the version number. Route 53 does not update the health check, and it returns a <code>HealthCheckVersionMismatch</code> error.</p> </li> </ul>
  * HealthThreshold `integer`: <p>The number of child health checks that are associated with a <code>CALCULATED</code> health that Amazon Route 53 must consider healthy for the <code>CALCULATED</code> health check to be considered healthy. To specify the child health checks that you want to associate with a <code>CALCULATED</code> health check, use the <code>ChildHealthChecks</code> and <code>ChildHealthCheck</code> elements.</p> <p>Note the following:</p> <ul> <li> <p>If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.</p> </li> <li> <p>If you specify <code>0</code>, Route 53 always considers this health check to be healthy.</p> </li> </ul>
  * IPAddress `string`: <p>The IPv4 or IPv6 IP address for the endpoint that you want Amazon Route 53 to perform health checks on. If you don't specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to resolve the domain name that you specify in <code>FullyQualifiedDomainName</code> at the interval that you specify in <code>RequestInterval</code>. Using an IP address that is returned by DNS, Route 53 then checks the health of the endpoint.</p> <p>Use one of the following formats for the value of <code>IPAddress</code>: </p> <ul> <li> <p> <b>IPv4 address</b>: four values between 0 and 255, separated by periods (.), for example, <code>192.0.2.44</code>.</p> </li> <li> <p> <b>IPv6 address</b>: eight groups of four hexadecimal values, separated by colons (:), for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>. You can also shorten IPv6 addresses as described in RFC 5952, for example, <code>2001:db8:85a3::abcd:1:2345</code>.</p> </li> </ul> <p>If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for <code>IPAddress</code>. This ensures that the IP address of your instance never changes. For more information, see the applicable documentation:</p> <ul> <li> <p>Linux: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> </p> </li> <li> <p>Windows: <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the <i>Amazon EC2 User Guide for Windows Instances</i> </p> </li> </ul> <note> <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can't update an existing health check to add or remove the value of <code>IPAddress</code>. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. </p> <p>Constraints: Route 53 can't check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can't create health checks, see the following documents:</p> <ul> <li> <p> <a href="https://tools.ietf.org/html/rfc5735">RFC 5735, Special Use IPv4 Addresses</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc6598">RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc5156">RFC 5156, Special-Use IPv6 Addresses</a> </p> </li> </ul>
  * InsufficientDataHealthStatus `string` (values: Healthy, Unhealthy, LastKnownStatus): <p>When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:</p> <ul> <li> <p> <code>Healthy</code>: Route 53 considers the health check to be healthy.</p> </li> <li> <p> <code>Unhealthy</code>: Route 53 considers the health check to be unhealthy.</p> </li> <li> <p> <code>LastKnownStatus</code>: Route 53 uses the status of the health check from the last time CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the default status for the health check is healthy.</p> </li> </ul>
  * Inverted `boolean`: Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.
  * Port `integer`: <p>The port on the endpoint that you want Amazon Route 53 to perform health checks on.</p> <note> <p>Don't specify a value for <code>Port</code> when you specify a value for <code>Type</code> of <code>CLOUDWATCH_METRIC</code> or <code>CALCULATED</code>.</p> </note>
  * Regions `array`: A complex type that contains one <code>Region</code> element for each region that you want Amazon Route 53 health checkers to check the specified endpoint from.
    * items
  * ResetElements `array`: <p>A complex type that contains one <code>ResettableElementName</code> element for each element that you want to reset to the default value. Valid values for <code>ResettableElementName</code> include the following:</p> <ul> <li> <p> <code>ChildHealthChecks</code>: Amazon Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ChildHealthChecks">ChildHealthChecks</a> to null.</p> </li> <li> <p> <code>FullyQualifiedDomainName</code>: Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. to null.</p> </li> <li> <p> <code>Regions</code>: Route 53 resets the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a> list to the default set of regions. </p> </li> <li> <p> <code>ResourcePath</code>: Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ResourcePath">ResourcePath</a> to null.</p> </li> </ul>
    * items
  * ResourcePath `string`: <p>The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example the file /docs/route53-health-check.html. You can also include query string parameters, for example, <code>/welcome.html?language=jp&amp;login=y</code>. </p> <p>Specify this value only if you want to change it.</p>
  * SearchString `string`: If the value of <code>Type</code> is <code>HTTP_STR_MATCH</code> or <code>HTTPS_STR_MATCH</code>, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy. (You can't change the value of <code>Type</code> when you update a health check.)

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
  * marker `string`
  * maxitems `string`
  * delegationsetid `string`
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
  * CallerReference **required** `string`: A unique string that identifies the request and that allows failed <code>CreateHostedZone</code> requests to be retried without the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a <code>CreateHostedZone</code> request. <code>CallerReference</code> can be any unique string, for example, a date/time stamp.
  * DelegationSetId `string`: If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route 53 assigned to the reusable delegation set when you created it. For more information about reusable delegation sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.
  * HostedZoneConfig `object`: A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements.
    * Comment
    * PrivateZone
  * Name **required** `string`: <p>The name of the domain. Specify a fully qualified domain name, for example, <i>www.example.com</i>. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats <i>www.example.com</i> (without a trailing dot) and <i>www.example.com.</i> (with a trailing dot) as identical.</p> <p>If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of <code>NameServers</code> that <code>CreateHostedZone</code> returns in <code>DelegationSet</code>.</p>
  * VPC `object`: (Private hosted zones only) A complex type that contains information about an Amazon VPC.
    * VPCId [VPCId](#vpcid)
    * VPCRegion

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
  * Comment `string`: The new comment for the hosted zone. If you don't specify a value for <code>Comment</code>, Amazon Route 53 deletes the existing value of the <code>Comment</code> element, if any.

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
  * Comment `string`:  <i>Optional:</i> A comment about the association request.
  * VPC **required** `object`: (Private hosted zones only) A complex type that contains information about an Amazon VPC.
    * VPCId [VPCId](#vpcid)
    * VPCRegion

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
  * nexttoken `string`
  * maxresults `string`

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
  * VPC **required** `object`: (Private hosted zones only) A complex type that contains information about an Amazon VPC.
    * VPCId [VPCId](#vpcid)
    * VPCRegion

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
  * VPC **required** `object`: (Private hosted zones only) A complex type that contains information about an Amazon VPC.
    * VPCId [VPCId](#vpcid)
    * VPCRegion

#### Output
* output [DeleteVPCAssociationAuthorizationResponse](#deletevpcassociationauthorizationresponse)

### DisableHostedZoneDNSSEC



```js
amazonaws_route53.DisableHostedZoneDNSSEC({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [DisableHostedZoneDNSSECResponse](#disablehostedzonednssecresponse)

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
  * Comment `string`:  <i>Optional:</i> A comment about the disassociation request.
  * VPC **required** `object`: (Private hosted zones only) A complex type that contains information about an Amazon VPC.
    * VPCId [VPCId](#vpcid)
    * VPCRegion

#### Output
* output [DisassociateVPCFromHostedZoneResponse](#disassociatevpcfromhostedzoneresponse)

### GetDNSSEC



```js
amazonaws_route53.GetDNSSEC({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetDNSSECResponse](#getdnssecresponse)

### EnableHostedZoneDNSSEC



```js
amazonaws_route53.EnableHostedZoneDNSSEC({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [EnableHostedZoneDNSSECResponse](#enablehostedzonednssecresponse)

### ListResourceRecordSets



```js
amazonaws_route53.ListResourceRecordSets({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * name `string`
  * type `string`
  * identifier `string`
  * maxitems `string`
  * MaxItems `string`
  * StartRecordName `string`
  * StartRecordType `string`
  * StartRecordIdentifier `string`

#### Output
* output [ListResourceRecordSetsResponse](#listresourcerecordsetsresponse)

### ChangeResourceRecordSets



```js
amazonaws_route53.ChangeResourceRecordSets({
  "Id": "",
  "ChangeBatch": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * ChangeBatch **required** `object`: The information for a change request.
    * Changes
      * items
        * Action **required**
        * ResourceRecordSet **required**
          * AliasTarget
          * Failover
          * GeoLocation
          * HealthCheckId
          * MultiValueAnswer
          * Name **required**
          * Region
          * ResourceRecords
          * SetIdentifier
          * TTL
          * TrafficPolicyInstanceId
          * Type **required**
          * Weight
    * Comment

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
  "Type": "",
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Type **required** `string`
  * Id **required** `string`

#### Output
* output [GetHostedZoneLimitResponse](#gethostedzonelimitresponse)

### ListHostedZonesByName



```js
amazonaws_route53.ListHostedZonesByName({}, context)
```

#### Input
* input `object`
  * dnsname `string`
  * hostedzoneid `string`
  * maxitems `string`

#### Output
* output [ListHostedZonesByNameResponse](#listhostedzonesbynameresponse)

### ListHostedZonesByVPC



```js
amazonaws_route53.ListHostedZonesByVPC({
  "vpcid": "",
  "vpcregion": ""
}, context)
```

#### Input
* input `object`
  * vpcid **required** `string`
  * vpcregion **required** `string`
  * maxitems `string`
  * nexttoken `string`

#### Output
* output [ListHostedZonesByVPCResponse](#listhostedzonesbyvpcresponse)

### CreateKeySigningKey



```js
amazonaws_route53.CreateKeySigningKey({
  "CallerReference": "",
  "HostedZoneId": "",
  "KeyManagementServiceArn": "",
  "Name": "",
  "Status": ""
}, context)
```

#### Input
* input `object`
  * CallerReference **required** `string`: A unique string that identifies the request.
  * HostedZoneId **required** `string`: The unique string (ID) used to identify a hosted zone.
  * KeyManagementServiceArn **required** `string`: <p>The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The <code>KeyManagementServiceArn</code> must be unique for each key signing key (KSK) in a single hosted zone. To see an example of <code>KeyManagementServiceArn</code> that grants the correct permissions for DNSSEC, scroll down to <b>Example</b>. </p> <p>You must configure the CMK as follows:</p> <dl> <dt>Status</dt> <dd> <p>Enabled</p> </dd> <dt>Key spec</dt> <dd> <p>ECC_NIST_P256</p> </dd> <dt>Key usage</dt> <dd> <p>Sign and verify</p> </dd> <dt>Key policy</dt> <dd> <p>The key policy must give permission for the following actions:</p> <ul> <li> <p>DescribeKey</p> </li> <li> <p>GetPublicKey</p> </li> <li> <p>Sign</p> </li> </ul> <p>The key policy must also include the Amazon Route 53 service in the principal for your account. Specify the following:</p> <ul> <li> <p> <code>"Service": "api-service.dnssec.route53.aws.internal"</code> </p> </li> </ul> </dd> </dl> <p>For more information about working with CMK in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">AWS Key Management Service concepts</a>.</p>
  * Name **required** `string`: An alphanumeric string used to identify a key signing key (KSK). <code>Name</code> must be unique for each key signing key in the same hosted zone.
  * Status **required** `string`: A string specifying the initial status of the key signing key (KSK). You can set the value to <code>ACTIVE</code> or <code>INACTIVE</code>.

#### Output
*Output schema unknown*

### DeleteKeySigningKey



```js
amazonaws_route53.DeleteKeySigningKey({
  "HostedZoneId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * HostedZoneId **required** `string`
  * Name **required** `string`

#### Output
* output [DeleteKeySigningKeyResponse](#deletekeysigningkeyresponse)

### ActivateKeySigningKey



```js
amazonaws_route53.ActivateKeySigningKey({
  "HostedZoneId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * HostedZoneId **required** `string`
  * Name **required** `string`

#### Output
* output [ActivateKeySigningKeyResponse](#activatekeysigningkeyresponse)

### DeactivateKeySigningKey



```js
amazonaws_route53.DeactivateKeySigningKey({
  "HostedZoneId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * HostedZoneId **required** `string`
  * Name **required** `string`

#### Output
* output [DeactivateKeySigningKeyResponse](#deactivatekeysigningkeyresponse)

### ListQueryLoggingConfigs



```js
amazonaws_route53.ListQueryLoggingConfigs({}, context)
```

#### Input
* input `object`
  * hostedzoneid `string`
  * nexttoken `string`
  * maxresults `string`
  * MaxResults `string`
  * NextToken `string`

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
  * CloudWatchLogsLogGroupArn **required** `string`: <p>The Amazon Resource Name (ARN) for the log group that you want to Amazon Route 53 to send query logs to. This is the format of the ARN:</p> <p>arn:aws:logs:<i>region</i>:<i>account-id</i>:log-group:<i>log_group_name</i> </p> <p>To get the ARN for a log group, you can use the CloudWatch console, the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html">DescribeLogGroups</a> API action, the <a href="https://docs.aws.amazon.com/cli/latest/reference/logs/describe-log-groups.html">describe-log-groups</a> command, or the applicable command in one of the AWS SDKs.</p>
  * HostedZoneId **required** `string`: The ID of the hosted zone that you want to log queries for. You can log queries only for public hosted zones.

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
  "Type": "",
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Type **required** `string`
  * Id **required** `string`

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
  * ResourceIds **required** `array`: A complex type that contains the ResourceId element for each resource for which you want to get a list of tags.
    * items

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
  * AddTags `array`: <p>A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags that you want to edit <code>Value</code> for.</p> <p>You can add a maximum of 10 tags to a health check or a hosted zone.</p>
    * items
      * Key
      * Value
  * RemoveTagKeys `array`: A complex type that contains a list of the tags that you want to delete from the specified health check or hosted zone. You can specify up to 10 keys.
    * items

#### Output
* output [ChangeTagsForResourceResponse](#changetagsforresourceresponse)

### TestDNSAnswer



```js
amazonaws_route53.TestDNSAnswer({
  "hostedzoneid": "",
  "recordname": "",
  "recordtype": ""
}, context)
```

#### Input
* input `object`
  * hostedzoneid **required** `string`
  * recordname **required** `string`
  * recordtype **required** `string`
  * resolverip `string`
  * edns0clientsubnetip `string`
  * edns0clientsubnetmask `string`

#### Output
* output [TestDNSAnswerResponse](#testdnsanswerresponse)

### ListTrafficPolicies



```js
amazonaws_route53.ListTrafficPolicies({}, context)
```

#### Input
* input `object`
  * trafficpolicyid `string`
  * maxitems `string`

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
  * trafficpolicyversion `string`
  * maxitems `string`

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
  * Comment `string`: (Optional) Any comments that you want to include about the traffic policy.
  * Document **required** `string`: The definition of this traffic policy in JSON format. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.
  * Name **required** `string`: The name of the traffic policy.

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
  * Comment `string`: The comment that you specified in the <code>CreateTrafficPolicyVersion</code> request, if any.
  * Document **required** `string`: The definition of this version of the traffic policy, in JSON format. You specified the JSON in the <code>CreateTrafficPolicyVersion</code> request. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a>.

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
  * Comment **required** `string`: The new comment for the specified traffic policy and version.

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
  * HostedZoneId **required** `string`: The ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy.
  * Name **required** `string`: The domain name (such as example.com) or subdomain name (such as www.example.com) for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance.
  * TTL **required** `integer`: (Optional) The TTL that you want Amazon Route 53 to assign to all of the resource record sets that it creates in the specified hosted zone.
  * TrafficPolicyId **required** `string`: The ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.
  * TrafficPolicyVersion **required** `integer`: The version of the traffic policy that you want to use to create resource record sets in the specified hosted zone.

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
  * TTL **required** `integer`: The TTL that you want Amazon Route 53 to assign to all of the updated resource record sets.
  * TrafficPolicyId **required** `string`: The ID of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.
  * TrafficPolicyVersion **required** `integer`: The version of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.

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
  * hostedzoneid `string`
  * trafficpolicyinstancename `string`
  * trafficpolicyinstancetype `string`
  * maxitems `string`

#### Output
* output [ListTrafficPolicyInstancesResponse](#listtrafficpolicyinstancesresponse)

### ListTrafficPolicyInstancesByHostedZone



```js
amazonaws_route53.ListTrafficPolicyInstancesByHostedZone({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * trafficpolicyinstancename `string`
  * trafficpolicyinstancetype `string`
  * maxitems `string`

#### Output
* output [ListTrafficPolicyInstancesByHostedZoneResponse](#listtrafficpolicyinstancesbyhostedzoneresponse)

### ListTrafficPolicyInstancesByPolicy



```js
amazonaws_route53.ListTrafficPolicyInstancesByPolicy({
  "id": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * version **required** `integer`
  * hostedzoneid `string`
  * trafficpolicyinstancename `string`
  * trafficpolicyinstancetype `string`
  * maxitems `string`

#### Output
* output [ListTrafficPolicyInstancesByPolicyResponse](#listtrafficpolicyinstancesbypolicyresponse)



## Definitions

### AWSAccountID
* AWSAccountID `string`

### AccountLimit
* AccountLimit `object`: A complex type that contains the type of limit that you specified in the request and the current value for that limit.
  * Type **required**
  * Value **required**

### AccountLimitType
* AccountLimitType `string` (values: MAX_HEALTH_CHECKS_BY_OWNER, MAX_HOSTED_ZONES_BY_OWNER, MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER, MAX_REUSABLE_DELEGATION_SETS_BY_OWNER, MAX_TRAFFIC_POLICIES_BY_OWNER)

### ActivateKeySigningKeyRequest
* ActivateKeySigningKeyRequest `object`

### ActivateKeySigningKeyResponse
* ActivateKeySigningKeyResponse `object`
  * ChangeInfo **required** [ChangeInfo](#changeinfo)

### AlarmIdentifier
* AlarmIdentifier `object`: A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
  * Name **required**
  * Region **required**

### AlarmName
* AlarmName `string`

### AliasHealthEnabled
* AliasHealthEnabled `boolean`

### AliasTarget
* AliasTarget `object`: <p> <i>Alias resource record sets only:</i> Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.</p> <p>When creating resource record sets for a private hosted zone, note the following:</p> <ul> <li> <p>Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone is unsupported.</p> </li> <li> <p>For information about creating failover resource record sets in a private hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>.</p> </li> </ul>
  * DNSName **required**
  * EvaluateTargetHealth **required**
  * HostedZoneId **required**

### AssociateVPCComment
* AssociateVPCComment `string`

### AssociateVPCWithHostedZoneRequest
* AssociateVPCWithHostedZoneRequest `object`: A complex type that contains information about the request to associate a VPC with a private hosted zone.
  * Comment
  * VPC **required**
    * VPCId [VPCId](#vpcid)
    * VPCRegion

### AssociateVPCWithHostedZoneResponse
* AssociateVPCWithHostedZoneResponse `object`: A complex type that contains the response information for the <code>AssociateVPCWithHostedZone</code> request.
  * ChangeInfo **required**
    * Comment
    * Id **required**
    * Status **required**
    * SubmittedAt **required**

### Change
* Change `object`: The information for each resource record set that you want to change.
  * Action **required**
  * ResourceRecordSet **required**
    * AliasTarget
      * DNSName **required**
      * EvaluateTargetHealth **required**
      * HostedZoneId **required**
    * Failover
    * GeoLocation
      * ContinentCode
      * CountryCode
      * SubdivisionCode
    * HealthCheckId
    * MultiValueAnswer
    * Name **required**
    * Region
    * ResourceRecords
      * items
        * Value **required**
    * SetIdentifier
    * TTL
    * TrafficPolicyInstanceId
    * Type **required**
    * Weight

### ChangeAction
* ChangeAction `string` (values: CREATE, DELETE, UPSERT)

### ChangeBatch
* ChangeBatch `object`: The information for a change request.
  * Changes **required**
    * items
      * Action **required**
      * ResourceRecordSet **required**
        * AliasTarget
          * DNSName **required**
          * EvaluateTargetHealth **required**
          * HostedZoneId **required**
        * Failover
        * GeoLocation
          * ContinentCode
          * CountryCode
          * SubdivisionCode
        * HealthCheckId
        * MultiValueAnswer
        * Name **required**
        * Region
        * ResourceRecords
          * items
        * SetIdentifier
        * TTL
        * TrafficPolicyInstanceId
        * Type **required**
        * Weight
  * Comment

### ChangeInfo
* ChangeInfo `object`: A complex type that describes change information about changes made to your hosted zone.
  * Comment
  * Id **required**
  * Status **required**
  * SubmittedAt **required**

### ChangeResourceRecordSetsRequest
* ChangeResourceRecordSetsRequest `object`: A complex type that contains change information for the resource record set.
  * ChangeBatch **required**
    * Changes **required**
      * items
        * Action **required**
        * ResourceRecordSet **required**
          * AliasTarget
          * Failover
          * GeoLocation
          * HealthCheckId
          * MultiValueAnswer
          * Name **required**
          * Region
          * ResourceRecords
          * SetIdentifier
          * TTL
          * TrafficPolicyInstanceId
          * Type **required**
          * Weight
    * Comment

### ChangeResourceRecordSetsResponse
* ChangeResourceRecordSetsResponse `object`: A complex type containing the response for the request.
  * ChangeInfo **required**
    * Comment
    * Id **required**
    * Status **required**
    * SubmittedAt **required**

### ChangeStatus
* ChangeStatus `string` (values: PENDING, INSYNC)

### ChangeTagsForResourceRequest
* ChangeTagsForResourceRequest `object`: A complex type that contains information about the tags that you want to add, edit, or delete.
  * AddTags
    * items
      * Key
      * Value
  * RemoveTagKeys
    * items

### ChangeTagsForResourceResponse
* ChangeTagsForResourceResponse `object`: Empty response for the request.

### Changes
* Changes `array`
  * items
    * Action **required**
    * ResourceRecordSet **required**
      * AliasTarget
        * DNSName **required**
        * EvaluateTargetHealth **required**
        * HostedZoneId **required**
      * Failover
      * GeoLocation
        * ContinentCode
        * CountryCode
        * SubdivisionCode
      * HealthCheckId
      * MultiValueAnswer
      * Name **required**
      * Region
      * ResourceRecords
        * items
          * Value **required**
      * SetIdentifier
      * TTL
      * TrafficPolicyInstanceId
      * Type **required**
      * Weight

### CheckerIpRanges
* CheckerIpRanges `array`
  * items [IPAddressCidr](#ipaddresscidr)

### ChildHealthCheckList
* ChildHealthCheckList `array`
  * items

### CloudWatchAlarmConfiguration
* CloudWatchAlarmConfiguration `object`: A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.
  * ComparisonOperator **required**
  * Dimensions
    * items
      * Name **required**
      * Value **required**
  * EvaluationPeriods **required**
  * MetricName **required**
  * Namespace **required**
  * Period **required**
  * Statistic **required**
  * Threshold **required**

### CloudWatchLogsLogGroupArn
* CloudWatchLogsLogGroupArn `string`

### CloudWatchRegion
* CloudWatchRegion `string` (values: us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, eu-central-1, eu-west-1, eu-west-2, eu-west-3, ap-east-1, me-south-1, ap-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-northeast-3, eu-north-1, sa-east-1, cn-northwest-1, cn-north-1, af-south-1, eu-south-1, us-gov-west-1, us-gov-east-1, us-iso-east-1, us-isob-east-1)

### ComparisonOperator
* ComparisonOperator `string` (values: GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold)

### ConcurrentModification


### ConflictingDomainExists


### ConflictingTypes


### CreateHealthCheckRequest
* CreateHealthCheckRequest `object`: A complex type that contains the health check request information.
  * CallerReference **required**
  * HealthCheckConfig **required**
    * AlarmIdentifier
      * Name **required**
      * Region **required**
    * ChildHealthChecks
      * items
    * Disabled
    * EnableSNI
    * FailureThreshold
    * FullyQualifiedDomainName
    * HealthThreshold
    * IPAddress
    * InsufficientDataHealthStatus
    * Inverted
    * MeasureLatency
    * Port
    * Regions
      * items
    * RequestInterval
    * ResourcePath
    * SearchString
    * Type **required**

### CreateHealthCheckResponse
* CreateHealthCheckResponse `object`: A complex type containing the response information for the new health check.
  * HealthCheck **required**
    * CallerReference **required**
    * CloudWatchAlarmConfiguration
      * ComparisonOperator **required**
      * Dimensions
        * items
          * Name **required**
          * Value **required**
      * EvaluationPeriods **required**
      * MetricName **required**
      * Namespace **required**
      * Period **required**
      * Statistic **required**
      * Threshold **required**
    * HealthCheckConfig **required**
      * AlarmIdentifier
        * Name **required**
        * Region **required**
      * ChildHealthChecks
        * items
      * Disabled
      * EnableSNI
      * FailureThreshold
      * FullyQualifiedDomainName
      * HealthThreshold
      * IPAddress
      * InsufficientDataHealthStatus
      * Inverted
      * MeasureLatency
      * Port
      * Regions
        * items
      * RequestInterval
      * ResourcePath
      * SearchString
      * Type **required**
    * HealthCheckVersion **required**
    * Id **required**
    * LinkedService
      * Description
      * ServicePrincipal

### CreateHostedZoneRequest
* CreateHostedZoneRequest `object`: A complex type that contains information about the request to create a public or private hosted zone.
  * CallerReference **required**
  * DelegationSetId
  * HostedZoneConfig
    * Comment
    * PrivateZone
  * Name **required**
  * VPC
    * VPCId [VPCId](#vpcid)
    * VPCRegion

### CreateHostedZoneResponse
* CreateHostedZoneResponse `object`: A complex type containing the response information for the hosted zone.
  * ChangeInfo **required**
    * Comment
    * Id **required**
    * Status **required**
    * SubmittedAt **required**
  * DelegationSet **required**
    * CallerReference
    * Id
    * NameServers **required**
      * items
  * HostedZone **required**
    * CallerReference **required**
    * Config
      * Comment
      * PrivateZone
    * Id **required**
    * LinkedService
      * Description
      * ServicePrincipal
    * Name **required**
    * ResourceRecordSetCount
  * VPC
    * VPCId [VPCId](#vpcid)
    * VPCRegion

### CreateKeySigningKeyRequest
* CreateKeySigningKeyRequest `object`
  * CallerReference **required**
  * HostedZoneId **required**
  * KeyManagementServiceArn **required**
  * Name **required**
  * Status **required**

### CreateKeySigningKeyResponse
* CreateKeySigningKeyResponse `object`
  * ChangeInfo **required** [ChangeInfo](#changeinfo)
  * KeySigningKey **required**
    * CreatedDate
    * DNSKEYRecord
    * DSRecord
    * DigestAlgorithmMnemonic
    * DigestAlgorithmType
    * DigestValue
    * Flag
    * KeyTag
    * KmsArn
    * LastModifiedDate
    * Name
    * PublicKey
    * SigningAlgorithmMnemonic
    * SigningAlgorithmType
    * Status
    * StatusMessage

### CreateQueryLoggingConfigRequest
* CreateQueryLoggingConfigRequest `object`
  * CloudWatchLogsLogGroupArn **required**
  * HostedZoneId **required**

### CreateQueryLoggingConfigResponse
* CreateQueryLoggingConfigResponse `object`
  * QueryLoggingConfig **required**
    * CloudWatchLogsLogGroupArn **required**
    * HostedZoneId **required**
    * Id **required**

### CreateReusableDelegationSetRequest
* CreateReusableDelegationSetRequest `object`
  * CallerReference **required**
  * HostedZoneId

### CreateReusableDelegationSetResponse
* CreateReusableDelegationSetResponse `object`
  * DelegationSet **required**
    * CallerReference
    * Id
    * NameServers **required**
      * items

### CreateTrafficPolicyInstanceRequest
* CreateTrafficPolicyInstanceRequest `object`: A complex type that contains information about the resource record sets that you want to create based on a specified traffic policy.
  * HostedZoneId **required**
  * Name **required**
  * TTL **required**
  * TrafficPolicyId **required**
  * TrafficPolicyVersion **required**

### CreateTrafficPolicyInstanceResponse
* CreateTrafficPolicyInstanceResponse `object`: A complex type that contains the response information for the <code>CreateTrafficPolicyInstance</code> request.
  * TrafficPolicyInstance **required**
    * HostedZoneId **required**
    * Id **required**
    * Message **required**
    * Name **required**
    * State **required**
    * TTL **required**
    * TrafficPolicyId **required**
    * TrafficPolicyType **required**
    * TrafficPolicyVersion **required**

### CreateTrafficPolicyRequest
* CreateTrafficPolicyRequest `object`: A complex type that contains information about the traffic policy that you want to create.
  * Comment
  * Document **required**
  * Name **required**

### CreateTrafficPolicyResponse
* CreateTrafficPolicyResponse `object`: A complex type that contains the response information for the <code>CreateTrafficPolicy</code> request.
  * TrafficPolicy **required**
    * Comment
    * Document **required**
    * Id **required**
    * Name **required**
    * Type **required**
    * Version **required**

### CreateTrafficPolicyVersionRequest
* CreateTrafficPolicyVersionRequest `object`: A complex type that contains information about the traffic policy that you want to create a new version for.
  * Comment
  * Document **required**

### CreateTrafficPolicyVersionResponse
* CreateTrafficPolicyVersionResponse `object`: A complex type that contains the response information for the <code>CreateTrafficPolicyVersion</code> request.
  * TrafficPolicy **required**
    * Comment
    * Document **required**
    * Id **required**
    * Name **required**
    * Type **required**
    * Version **required**

### CreateVPCAssociationAuthorizationRequest
* CreateVPCAssociationAuthorizationRequest `object`: A complex type that contains information about the request to authorize associating a VPC with your private hosted zone. Authorization is only required when a private hosted zone and a VPC were created by using different accounts.
  * VPC **required**
    * VPCId [VPCId](#vpcid)
    * VPCRegion

### CreateVPCAssociationAuthorizationResponse
* CreateVPCAssociationAuthorizationResponse `object`: A complex type that contains the response information from a <code>CreateVPCAssociationAuthorization</code> request.
  * HostedZoneId **required**
  * VPC **required**
    * VPCId [VPCId](#vpcid)
    * VPCRegion

### DNSName
* DNSName `string`

### DNSRCode
* DNSRCode `string`

### DNSSECNotFound


### DNSSECStatus
* DNSSECStatus `object`: A string repesenting the status of DNSSEC signing.
  * ServeSignature
  * StatusMessage

### DeactivateKeySigningKeyRequest
* DeactivateKeySigningKeyRequest `object`

### DeactivateKeySigningKeyResponse
* DeactivateKeySigningKeyResponse `object`
  * ChangeInfo **required** [ChangeInfo](#changeinfo)

### DelegationSet
* DelegationSet `object`: A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set.
  * CallerReference
  * Id
  * NameServers **required**
    * items

### DelegationSetAlreadyCreated


### DelegationSetAlreadyReusable


### DelegationSetInUse


### DelegationSetNameServers
* DelegationSetNameServers `array`
  * items

### DelegationSetNotAvailable


### DelegationSetNotReusable


### DelegationSets
* DelegationSets `array`
  * items
    * CallerReference
    * Id
    * NameServers **required**
      * items

### DeleteHealthCheckRequest
* DeleteHealthCheckRequest `object`: This action deletes a health check.

### DeleteHealthCheckResponse
* DeleteHealthCheckResponse `object`: An empty element.

### DeleteHostedZoneRequest
* DeleteHostedZoneRequest `object`: A request to delete a hosted zone.

### DeleteHostedZoneResponse
* DeleteHostedZoneResponse `object`: A complex type that contains the response to a <code>DeleteHostedZone</code> request.
  * ChangeInfo **required**
    * Comment
    * Id **required**
    * Status **required**
    * SubmittedAt **required**

### DeleteKeySigningKeyRequest
* DeleteKeySigningKeyRequest `object`

### DeleteKeySigningKeyResponse
* DeleteKeySigningKeyResponse `object`
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
  * VPC **required**
    * VPCId [VPCId](#vpcid)
    * VPCRegion

### DeleteVPCAssociationAuthorizationResponse
* DeleteVPCAssociationAuthorizationResponse `object`: Empty response for the request.

### Dimension
* Dimension `object`: For the metric that the CloudWatch alarm is associated with, a complex type that contains information about one dimension.
  * Name **required**
  * Value **required**

### DimensionField
* DimensionField `string`

### DimensionList
* DimensionList `array`
  * items
    * Name **required**
    * Value **required**

### DisableHostedZoneDNSSECRequest
* DisableHostedZoneDNSSECRequest `object`

### DisableHostedZoneDNSSECResponse
* DisableHostedZoneDNSSECResponse `object`
  * ChangeInfo **required** [ChangeInfo](#changeinfo)

### Disabled
* Disabled `boolean`

### DisassociateVPCComment
* DisassociateVPCComment `string`

### DisassociateVPCFromHostedZoneRequest
* DisassociateVPCFromHostedZoneRequest `object`: A complex type that contains information about the VPC that you want to disassociate from a specified private hosted zone.
  * Comment
  * VPC **required**
    * VPCId [VPCId](#vpcid)
    * VPCRegion

### DisassociateVPCFromHostedZoneResponse
* DisassociateVPCFromHostedZoneResponse `object`: A complex type that contains the response information for the disassociate request.
  * ChangeInfo **required**
    * Comment
    * Id **required**
    * Status **required**
    * SubmittedAt **required**

### EnableHostedZoneDNSSECRequest
* EnableHostedZoneDNSSECRequest `object`

### EnableHostedZoneDNSSECResponse
* EnableHostedZoneDNSSECResponse `object`
  * ChangeInfo **required** [ChangeInfo](#changeinfo)

### EnableSNI
* EnableSNI `boolean`

### EvaluationPeriods
* EvaluationPeriods `integer`

### FailureThreshold
* FailureThreshold `integer`

### FullyQualifiedDomainName
* FullyQualifiedDomainName `string`

### GeoLocation
* GeoLocation `object`: A complex type that contains information about a geographic location.
  * ContinentCode
  * CountryCode
  * SubdivisionCode

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
  * ContinentCode
  * ContinentName
  * CountryCode
  * CountryName
  * SubdivisionCode
  * SubdivisionName

### GeoLocationDetailsList
* GeoLocationDetailsList `array`
  * items
    * ContinentCode
    * ContinentName
    * CountryCode
    * CountryName
    * SubdivisionCode
    * SubdivisionName

### GeoLocationSubdivisionCode
* GeoLocationSubdivisionCode `string`

### GeoLocationSubdivisionName
* GeoLocationSubdivisionName `string`

### GetAccountLimitRequest
* GetAccountLimitRequest `object`: A complex type that contains information about the request to create a hosted zone.

### GetAccountLimitResponse
* GetAccountLimitResponse `object`: A complex type that contains the requested limit. 
  * Count **required**
  * Limit **required**
    * Type **required**
    * Value **required**

### GetChangeRequest
* GetChangeRequest `object`: The input for a GetChange request.

### GetChangeResponse
* GetChangeResponse `object`: A complex type that contains the <code>ChangeInfo</code> element.
  * ChangeInfo **required**
    * Comment
    * Id **required**
    * Status **required**
    * SubmittedAt **required**

### GetCheckerIpRangesRequest
* GetCheckerIpRangesRequest `object`: Empty request.

### GetCheckerIpRangesResponse
* GetCheckerIpRangesResponse `object`: A complex type that contains the <code>CheckerIpRanges</code> element.
  * CheckerIpRanges **required**
    * items [IPAddressCidr](#ipaddresscidr)

### GetDNSSECRequest
* GetDNSSECRequest `object`

### GetDNSSECResponse
* GetDNSSECResponse `object`
  * KeySigningKeys **required**
    * items [KeySigningKey](#keysigningkey)
  * Status **required**
    * ServeSignature
    * StatusMessage

### GetGeoLocationRequest
* GetGeoLocationRequest `object`: A request for information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.

### GetGeoLocationResponse
* GetGeoLocationResponse `object`: A complex type that contains the response information for the specified geolocation code.
  * GeoLocationDetails **required**
    * ContinentCode
    * ContinentName
    * CountryCode
    * CountryName
    * SubdivisionCode
    * SubdivisionName

### GetHealthCheckCountRequest
* GetHealthCheckCountRequest `object`: A request for the number of health checks that are associated with the current AWS account.

### GetHealthCheckCountResponse
* GetHealthCheckCountResponse `object`: A complex type that contains the response to a <code>GetHealthCheckCount</code> request.
  * HealthCheckCount **required**

### GetHealthCheckLastFailureReasonRequest
* GetHealthCheckLastFailureReasonRequest `object`: A request for the reason that a health check failed most recently.

### GetHealthCheckLastFailureReasonResponse
* GetHealthCheckLastFailureReasonResponse `object`: A complex type that contains the response to a <code>GetHealthCheckLastFailureReason</code> request.
  * HealthCheckObservations **required**
    * items
      * IPAddress
      * Region
      * StatusReport
        * CheckedTime
        * Status

### GetHealthCheckRequest
* GetHealthCheckRequest `object`: A request to get information about a specified health check. 

### GetHealthCheckResponse
* GetHealthCheckResponse `object`: A complex type that contains the response to a <code>GetHealthCheck</code> request.
  * HealthCheck **required**
    * CallerReference **required**
    * CloudWatchAlarmConfiguration
      * ComparisonOperator **required**
      * Dimensions
        * items
          * Name **required**
          * Value **required**
      * EvaluationPeriods **required**
      * MetricName **required**
      * Namespace **required**
      * Period **required**
      * Statistic **required**
      * Threshold **required**
    * HealthCheckConfig **required**
      * AlarmIdentifier
        * Name **required**
        * Region **required**
      * ChildHealthChecks
        * items
      * Disabled
      * EnableSNI
      * FailureThreshold
      * FullyQualifiedDomainName
      * HealthThreshold
      * IPAddress
      * InsufficientDataHealthStatus
      * Inverted
      * MeasureLatency
      * Port
      * Regions
        * items
      * RequestInterval
      * ResourcePath
      * SearchString
      * Type **required**
    * HealthCheckVersion **required**
    * Id **required**
    * LinkedService
      * Description
      * ServicePrincipal

### GetHealthCheckStatusRequest
* GetHealthCheckStatusRequest `object`: A request to get the status for a health check.

### GetHealthCheckStatusResponse
* GetHealthCheckStatusResponse `object`: A complex type that contains the response to a <code>GetHealthCheck</code> request.
  * HealthCheckObservations **required**
    * items
      * IPAddress
      * Region
      * StatusReport
        * CheckedTime
        * Status

### GetHostedZoneCountRequest
* GetHostedZoneCountRequest `object`: A request to retrieve a count of all the hosted zones that are associated with the current AWS account.

### GetHostedZoneCountResponse
* GetHostedZoneCountResponse `object`: A complex type that contains the response to a <code>GetHostedZoneCount</code> request.
  * HostedZoneCount **required**

### GetHostedZoneLimitRequest
* GetHostedZoneLimitRequest `object`: A complex type that contains information about the request to create a hosted zone.

### GetHostedZoneLimitResponse
* GetHostedZoneLimitResponse `object`: A complex type that contains the requested limit. 
  * Count **required**
  * Limit **required**
    * Type **required**
    * Value **required**

### GetHostedZoneRequest
* GetHostedZoneRequest `object`: A request to get information about a specified hosted zone. 

### GetHostedZoneResponse
* GetHostedZoneResponse `object`: A complex type that contain the response to a <code>GetHostedZone</code> request.
  * DelegationSet
    * CallerReference
    * Id
    * NameServers **required**
      * items
  * HostedZone **required**
    * CallerReference **required**
    * Config
      * Comment
      * PrivateZone
    * Id **required**
    * LinkedService
      * Description
      * ServicePrincipal
    * Name **required**
    * ResourceRecordSetCount
  * VPCs
    * items
      * VPCId [VPCId](#vpcid)
      * VPCRegion

### GetQueryLoggingConfigRequest
* GetQueryLoggingConfigRequest `object`

### GetQueryLoggingConfigResponse
* GetQueryLoggingConfigResponse `object`
  * QueryLoggingConfig **required**
    * CloudWatchLogsLogGroupArn **required**
    * HostedZoneId **required**
    * Id **required**

### GetReusableDelegationSetLimitRequest
* GetReusableDelegationSetLimitRequest `object`: A complex type that contains information about the request to create a hosted zone.

### GetReusableDelegationSetLimitResponse
* GetReusableDelegationSetLimitResponse `object`: A complex type that contains the requested limit. 
  * Count **required**
  * Limit **required**
    * Type **required**
    * Value **required**

### GetReusableDelegationSetRequest
* GetReusableDelegationSetRequest `object`: A request to get information about a specified reusable delegation set.

### GetReusableDelegationSetResponse
* GetReusableDelegationSetResponse `object`: A complex type that contains the response to the <code>GetReusableDelegationSet</code> request.
  * DelegationSet **required**
    * CallerReference
    * Id
    * NameServers **required**
      * items

### GetTrafficPolicyInstanceCountRequest
* GetTrafficPolicyInstanceCountRequest `object`: Request to get the number of traffic policy instances that are associated with the current AWS account.

### GetTrafficPolicyInstanceCountResponse
* GetTrafficPolicyInstanceCountResponse `object`: A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.
  * TrafficPolicyInstanceCount **required**

### GetTrafficPolicyInstanceRequest
* GetTrafficPolicyInstanceRequest `object`: Gets information about a specified traffic policy instance.

### GetTrafficPolicyInstanceResponse
* GetTrafficPolicyInstanceResponse `object`: A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.
  * TrafficPolicyInstance **required**
    * HostedZoneId **required**
    * Id **required**
    * Message **required**
    * Name **required**
    * State **required**
    * TTL **required**
    * TrafficPolicyId **required**
    * TrafficPolicyType **required**
    * TrafficPolicyVersion **required**

### GetTrafficPolicyRequest
* GetTrafficPolicyRequest `object`: Gets information about a specific traffic policy version.

### GetTrafficPolicyResponse
* GetTrafficPolicyResponse `object`: A complex type that contains the response information for the request.
  * TrafficPolicy **required**
    * Comment
    * Document **required**
    * Id **required**
    * Name **required**
    * Type **required**
    * Version **required**

### HealthCheck
* HealthCheck `object`: A complex type that contains information about one health check that is associated with the current AWS account.
  * CallerReference **required**
  * CloudWatchAlarmConfiguration
    * ComparisonOperator **required**
    * Dimensions
      * items
        * Name **required**
        * Value **required**
    * EvaluationPeriods **required**
    * MetricName **required**
    * Namespace **required**
    * Period **required**
    * Statistic **required**
    * Threshold **required**
  * HealthCheckConfig **required**
    * AlarmIdentifier
      * Name **required**
      * Region **required**
    * ChildHealthChecks
      * items
    * Disabled
    * EnableSNI
    * FailureThreshold
    * FullyQualifiedDomainName
    * HealthThreshold
    * IPAddress
    * InsufficientDataHealthStatus
    * Inverted
    * MeasureLatency
    * Port
    * Regions
      * items
    * RequestInterval
    * ResourcePath
    * SearchString
    * Type **required**
  * HealthCheckVersion **required**
  * Id **required**
  * LinkedService
    * Description
    * ServicePrincipal

### HealthCheckAlreadyExists


### HealthCheckConfig
* HealthCheckConfig `object`: A complex type that contains information about the health check.
  * AlarmIdentifier
    * Name **required**
    * Region **required**
  * ChildHealthChecks
    * items
  * Disabled
  * EnableSNI
  * FailureThreshold
  * FullyQualifiedDomainName
  * HealthThreshold
  * IPAddress
  * InsufficientDataHealthStatus
  * Inverted
  * MeasureLatency
  * Port
  * Regions
    * items
  * RequestInterval
  * ResourcePath
  * SearchString
  * Type **required**

### HealthCheckCount
* HealthCheckCount `integer`

### HealthCheckId
* HealthCheckId `string`

### HealthCheckInUse


### HealthCheckNonce
* HealthCheckNonce `string`

### HealthCheckObservation
* HealthCheckObservation `object`: A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker.
  * IPAddress
  * Region
  * StatusReport
    * CheckedTime
    * Status

### HealthCheckObservations
* HealthCheckObservations `array`
  * items
    * IPAddress
    * Region
    * StatusReport
      * CheckedTime
      * Status

### HealthCheckRegion
* HealthCheckRegion `string` (values: us-east-1, us-west-1, us-west-2, eu-west-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, sa-east-1)

### HealthCheckRegionList
* HealthCheckRegionList `array`
  * items

### HealthCheckType
* HealthCheckType `string` (values: HTTP, HTTPS, HTTP_STR_MATCH, HTTPS_STR_MATCH, TCP, CALCULATED, CLOUDWATCH_METRIC)

### HealthCheckVersion
* HealthCheckVersion `integer`

### HealthCheckVersionMismatch


### HealthChecks
* HealthChecks `array`
  * items
    * CallerReference **required**
    * CloudWatchAlarmConfiguration
      * ComparisonOperator **required**
      * Dimensions
        * items
          * Name **required**
          * Value **required**
      * EvaluationPeriods **required**
      * MetricName **required**
      * Namespace **required**
      * Period **required**
      * Statistic **required**
      * Threshold **required**
    * HealthCheckConfig **required**
      * AlarmIdentifier
        * Name **required**
        * Region **required**
      * ChildHealthChecks
        * items
      * Disabled
      * EnableSNI
      * FailureThreshold
      * FullyQualifiedDomainName
      * HealthThreshold
      * IPAddress
      * InsufficientDataHealthStatus
      * Inverted
      * MeasureLatency
      * Port
      * Regions
        * items
      * RequestInterval
      * ResourcePath
      * SearchString
      * Type **required**
    * HealthCheckVersion **required**
    * Id **required**
    * LinkedService
      * Description
      * ServicePrincipal

### HealthThreshold
* HealthThreshold `integer`

### HostedZone
* HostedZone `object`: A complex type that contains general information about the hosted zone.
  * CallerReference **required**
  * Config
    * Comment
    * PrivateZone
  * Id **required**
  * LinkedService
    * Description
    * ServicePrincipal
  * Name **required**
  * ResourceRecordSetCount

### HostedZoneAlreadyExists


### HostedZoneConfig
* HostedZoneConfig `object`: A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements.
  * Comment
  * PrivateZone

### HostedZoneCount
* HostedZoneCount `integer`

### HostedZoneLimit
* HostedZoneLimit `object`: A complex type that contains the type of limit that you specified in the request and the current value for that limit.
  * Type **required**
  * Value **required**

### HostedZoneLimitType
* HostedZoneLimitType `string` (values: MAX_RRSETS_BY_ZONE, MAX_VPCS_ASSOCIATED_BY_ZONE)

### HostedZoneNotEmpty


### HostedZoneNotFound


### HostedZoneNotPrivate


### HostedZoneOwner
* HostedZoneOwner `object`: A complex type that identifies a hosted zone that a specified Amazon VPC is associated with and the owner of the hosted zone. If there is a value for <code>OwningAccount</code>, there is no value for <code>OwningService</code>, and vice versa. 
  * OwningAccount
  * OwningService

### HostedZoneOwningService
* HostedZoneOwningService `string`

### HostedZonePartiallyDelegated


### HostedZoneRRSetCount
* HostedZoneRRSetCount `integer`

### HostedZoneSummaries
* HostedZoneSummaries `array`
  * items
    * HostedZoneId **required**
    * Name **required**
    * Owner **required**
      * OwningAccount
      * OwningService

### HostedZoneSummary
* HostedZoneSummary `object`: In the response to a <code>ListHostedZonesByVPC</code> request, the <code>HostedZoneSummaries</code> element contains one <code>HostedZoneSummary</code> element for each hosted zone that the specified Amazon VPC is associated with. Each <code>HostedZoneSummary</code> element contains the hosted zone name and ID, and information about who owns the hosted zone.
  * HostedZoneId **required**
  * Name **required**
  * Owner **required**
    * OwningAccount
    * OwningService

### HostedZones
* HostedZones `array`
  * items
    * CallerReference **required**
    * Config
      * Comment
      * PrivateZone
    * Id **required**
    * LinkedService
      * Description
      * ServicePrincipal
    * Name **required**
    * ResourceRecordSetCount

### IPAddress
* IPAddress `string`

### IPAddressCidr
* IPAddressCidr `string`

### IncompatibleVersion


### InsufficientCloudWatchLogsResourcePolicy


### InsufficientDataHealthStatus
* InsufficientDataHealthStatus `string` (values: Healthy, Unhealthy, LastKnownStatus)

### InvalidArgument


### InvalidChangeBatch


### InvalidDomainName


### InvalidInput


### InvalidKMSArn


### InvalidKeySigningKeyName


### InvalidKeySigningKeyStatus


### InvalidPaginationToken


### InvalidSigningStatus


### InvalidTrafficPolicyDocument


### InvalidVPCId


### Inverted
* Inverted `boolean`

### IsPrivateZone
* IsPrivateZone `boolean`

### KeySigningKey
* KeySigningKey `object`: A key signing key (KSK) is a complex type that represents a public/private key pair. The private key is used to generate a digital signature for the zone signing key (ZSK). The public key is stored in the DNS and is used to authenticate the ZSK. A KSK is always associated with a hosted zone; it cannot exist by itself.
  * CreatedDate
  * DNSKEYRecord
  * DSRecord
  * DigestAlgorithmMnemonic
  * DigestAlgorithmType
  * DigestValue
  * Flag
  * KeyTag
  * KmsArn
  * LastModifiedDate
  * Name
  * PublicKey
  * SigningAlgorithmMnemonic
  * SigningAlgorithmType
  * Status
  * StatusMessage

### KeySigningKeyAlreadyExists


### KeySigningKeyInParentDSRecord


### KeySigningKeyInUse


### KeySigningKeyWithActiveStatusNotFound


### KeySigningKeys
* KeySigningKeys `array`
  * items [KeySigningKey](#keysigningkey)

### LastVPCAssociation


### LimitValue
* LimitValue `integer`

### LimitsExceeded


### LinkedService
* LinkedService `object`: If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. 
  * Description
  * ServicePrincipal

### ListGeoLocationsRequest
* ListGeoLocationsRequest `object`: A request to get a list of geographic locations that Amazon Route 53 supports for geolocation resource record sets. 

### ListGeoLocationsResponse
* ListGeoLocationsResponse `object`: A complex type containing the response information for the request.
  * GeoLocationDetailsList **required**
    * items
      * ContinentCode
      * ContinentName
      * CountryCode
      * CountryName
      * SubdivisionCode
      * SubdivisionName
  * IsTruncated **required**
  * MaxItems **required**
  * NextContinentCode
  * NextCountryCode
  * NextSubdivisionCode

### ListHealthChecksRequest
* ListHealthChecksRequest `object`: A request to retrieve a list of the health checks that are associated with the current AWS account.

### ListHealthChecksResponse
* ListHealthChecksResponse `object`: A complex type that contains the response to a <code>ListHealthChecks</code> request.
  * HealthChecks **required**
    * items
      * CallerReference **required**
      * CloudWatchAlarmConfiguration
        * ComparisonOperator **required**
        * Dimensions
          * items
        * EvaluationPeriods **required**
        * MetricName **required**
        * Namespace **required**
        * Period **required**
        * Statistic **required**
        * Threshold **required**
      * HealthCheckConfig **required**
        * AlarmIdentifier
          * Name **required**
          * Region **required**
        * ChildHealthChecks
          * items
        * Disabled
        * EnableSNI
        * FailureThreshold
        * FullyQualifiedDomainName
        * HealthThreshold
        * IPAddress
        * InsufficientDataHealthStatus
        * Inverted
        * MeasureLatency
        * Port
        * Regions
          * items
        * RequestInterval
        * ResourcePath
        * SearchString
        * Type **required**
      * HealthCheckVersion **required**
      * Id **required**
      * LinkedService
        * Description
        * ServicePrincipal
  * IsTruncated **required**
  * Marker **required**
  * MaxItems **required**
  * NextMarker

### ListHostedZonesByNameRequest
* ListHostedZonesByNameRequest `object`: Retrieves a list of the public and private hosted zones that are associated with the current AWS account in ASCII order by domain name. 

### ListHostedZonesByNameResponse
* ListHostedZonesByNameResponse `object`: A complex type that contains the response information for the request.
  * DNSName
  * HostedZoneId
  * HostedZones **required**
    * items
      * CallerReference **required**
      * Config
        * Comment
        * PrivateZone
      * Id **required**
      * LinkedService
        * Description
        * ServicePrincipal
      * Name **required**
      * ResourceRecordSetCount
  * IsTruncated **required**
  * MaxItems **required**
  * NextDNSName
  * NextHostedZoneId

### ListHostedZonesByVPCRequest
* ListHostedZonesByVPCRequest `object`: Lists all the private hosted zones that a specified VPC is associated with, regardless of which AWS account created the hosted zones.

### ListHostedZonesByVPCResponse
* ListHostedZonesByVPCResponse `object`
  * HostedZoneSummaries **required**
    * items
      * HostedZoneId **required**
      * Name **required**
      * Owner **required**
        * OwningAccount
        * OwningService
  * MaxItems **required**
  * NextToken

### ListHostedZonesRequest
* ListHostedZonesRequest `object`: A request to retrieve a list of the public and private hosted zones that are associated with the current AWS account.

### ListHostedZonesResponse
* ListHostedZonesResponse `object`
  * HostedZones **required**
    * items
      * CallerReference **required**
      * Config
        * Comment
        * PrivateZone
      * Id **required**
      * LinkedService
        * Description
        * ServicePrincipal
      * Name **required**
      * ResourceRecordSetCount
  * IsTruncated **required**
  * Marker **required**
  * MaxItems **required**
  * NextMarker

### ListQueryLoggingConfigsRequest
* ListQueryLoggingConfigsRequest `object`

### ListQueryLoggingConfigsResponse
* ListQueryLoggingConfigsResponse `object`
  * NextToken
  * QueryLoggingConfigs **required**
    * items
      * CloudWatchLogsLogGroupArn **required**
      * HostedZoneId **required**
      * Id **required**

### ListResourceRecordSetsRequest
* ListResourceRecordSetsRequest `object`: A request for the resource record sets that are associated with a specified hosted zone.

### ListResourceRecordSetsResponse
* ListResourceRecordSetsResponse `object`: A complex type that contains list information for the resource record set.
  * IsTruncated **required**
  * MaxItems **required**
  * NextRecordIdentifier
  * NextRecordName
  * NextRecordType
  * ResourceRecordSets **required**
    * items
      * AliasTarget
        * DNSName **required**
        * EvaluateTargetHealth **required**
        * HostedZoneId **required**
      * Failover
      * GeoLocation
        * ContinentCode
        * CountryCode
        * SubdivisionCode
      * HealthCheckId
      * MultiValueAnswer
      * Name **required**
      * Region
      * ResourceRecords
        * items
          * Value **required**
      * SetIdentifier
      * TTL
      * TrafficPolicyInstanceId
      * Type **required**
      * Weight

### ListReusableDelegationSetsRequest
* ListReusableDelegationSetsRequest `object`: A request to get a list of the reusable delegation sets that are associated with the current AWS account.

### ListReusableDelegationSetsResponse
* ListReusableDelegationSetsResponse `object`: A complex type that contains information about the reusable delegation sets that are associated with the current AWS account.
  * DelegationSets **required**
    * items
      * CallerReference
      * Id
      * NameServers **required**
        * items
  * IsTruncated **required**
  * Marker **required**
  * MaxItems **required**
  * NextMarker

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`: A complex type containing information about a request for a list of the tags that are associated with an individual resource.

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`: A complex type that contains information about the health checks or hosted zones for which you want to list tags.
  * ResourceTagSet **required**
    * ResourceId
    * ResourceType
    * Tags
      * items
        * Key
        * Value

### ListTagsForResourcesRequest
* ListTagsForResourcesRequest `object`: A complex type that contains information about the health checks or hosted zones for which you want to list tags.
  * ResourceIds **required**
    * items

### ListTagsForResourcesResponse
* ListTagsForResourcesResponse `object`: A complex type containing tags for the specified resources.
  * ResourceTagSets **required**
    * items
      * ResourceId
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### ListTrafficPoliciesRequest
* ListTrafficPoliciesRequest `object`: A complex type that contains the information about the request to list the traffic policies that are associated with the current AWS account.

### ListTrafficPoliciesResponse
* ListTrafficPoliciesResponse `object`: A complex type that contains the response information for the request.
  * IsTruncated **required**
  * MaxItems **required**
  * TrafficPolicyIdMarker **required**
  * TrafficPolicySummaries **required**
    * items
      * Id **required**
      * LatestVersion **required**
      * Name **required**
      * TrafficPolicyCount **required**
      * Type **required**

### ListTrafficPolicyInstancesByHostedZoneRequest
* ListTrafficPolicyInstancesByHostedZoneRequest `object`: A request for the traffic policy instances that you created in a specified hosted zone.

### ListTrafficPolicyInstancesByHostedZoneResponse
* ListTrafficPolicyInstancesByHostedZoneResponse `object`: A complex type that contains the response information for the request.
  * IsTruncated **required**
  * MaxItems **required**
  * TrafficPolicyInstanceNameMarker
  * TrafficPolicyInstanceTypeMarker
  * TrafficPolicyInstances **required**
    * items
      * HostedZoneId **required**
      * Id **required**
      * Message **required**
      * Name **required**
      * State **required**
      * TTL **required**
      * TrafficPolicyId **required**
      * TrafficPolicyType **required**
      * TrafficPolicyVersion **required**

### ListTrafficPolicyInstancesByPolicyRequest
* ListTrafficPolicyInstancesByPolicyRequest `object`: A complex type that contains the information about the request to list your traffic policy instances.

### ListTrafficPolicyInstancesByPolicyResponse
* ListTrafficPolicyInstancesByPolicyResponse `object`: A complex type that contains the response information for the request.
  * HostedZoneIdMarker
  * IsTruncated **required**
  * MaxItems **required**
  * TrafficPolicyInstanceNameMarker
  * TrafficPolicyInstanceTypeMarker
  * TrafficPolicyInstances **required**
    * items
      * HostedZoneId **required**
      * Id **required**
      * Message **required**
      * Name **required**
      * State **required**
      * TTL **required**
      * TrafficPolicyId **required**
      * TrafficPolicyType **required**
      * TrafficPolicyVersion **required**

### ListTrafficPolicyInstancesRequest
* ListTrafficPolicyInstancesRequest `object`: A request to get information about the traffic policy instances that you created by using the current AWS account.

### ListTrafficPolicyInstancesResponse
* ListTrafficPolicyInstancesResponse `object`: A complex type that contains the response information for the request.
  * HostedZoneIdMarker
  * IsTruncated **required**
  * MaxItems **required**
  * TrafficPolicyInstanceNameMarker
  * TrafficPolicyInstanceTypeMarker
  * TrafficPolicyInstances **required**
    * items
      * HostedZoneId **required**
      * Id **required**
      * Message **required**
      * Name **required**
      * State **required**
      * TTL **required**
      * TrafficPolicyId **required**
      * TrafficPolicyType **required**
      * TrafficPolicyVersion **required**

### ListTrafficPolicyVersionsRequest
* ListTrafficPolicyVersionsRequest `object`: A complex type that contains the information about the request to list your traffic policies.

### ListTrafficPolicyVersionsResponse
* ListTrafficPolicyVersionsResponse `object`: A complex type that contains the response information for the request.
  * IsTruncated **required**
  * MaxItems **required**
  * TrafficPolicies **required**
    * items
      * Comment
      * Document **required**
      * Id **required**
      * Name **required**
      * Type **required**
      * Version **required**
  * TrafficPolicyVersionMarker **required**

### ListVPCAssociationAuthorizationsRequest
* ListVPCAssociationAuthorizationsRequest `object`: A complex type that contains information about that can be associated with your hosted zone.

### ListVPCAssociationAuthorizationsResponse
* ListVPCAssociationAuthorizationsResponse `object`: A complex type that contains the response information for the request.
  * HostedZoneId **required**
  * NextToken
  * VPCs **required**
    * items
      * VPCId [VPCId](#vpcid)
      * VPCRegion

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


### NoSuchCloudWatchLogsLogGroup


### NoSuchDelegationSet


### NoSuchGeoLocation


### NoSuchHealthCheck


### NoSuchHostedZone


### NoSuchKeySigningKey


### NoSuchQueryLoggingConfig


### NoSuchTrafficPolicy


### NoSuchTrafficPolicyInstance


### Nonce
* Nonce `string`

### NotAuthorizedException


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


### PublicZoneVPCAssociation


### QueryLoggingConfig
* QueryLoggingConfig `object`: A complex type that contains information about a configuration for DNS query logging.
  * CloudWatchLogsLogGroupArn **required**
  * HostedZoneId **required**
  * Id **required**

### QueryLoggingConfigAlreadyExists


### QueryLoggingConfigId
* QueryLoggingConfigId `string`

### QueryLoggingConfigs
* QueryLoggingConfigs `array`
  * items
    * CloudWatchLogsLogGroupArn **required**
    * HostedZoneId **required**
    * Id **required**

### RData
* RData `string`

### RRType
* RRType `string` (values: SOA, A, TXT, NS, CNAME, MX, NAPTR, PTR, SRV, SPF, AAAA, CAA, DS)

### RecordData
* RecordData `array`
  * items

### RecordDataEntry
* RecordDataEntry `string`: <p>A value that Amazon Route 53 returned for this resource record set. A <code>RecordDataEntry</code> element is one of the following:</p> <ul> <li> <p>For non-alias resource record sets, a <code>RecordDataEntry</code> element contains one value in the resource record set. If the resource record set contains multiple values, the response includes one <code>RecordDataEntry</code> element for each value.</p> </li> <li> <p>For multiple resource record sets that have the same name and type, which includes weighted, latency, geolocation, and failover, a <code>RecordDataEntry</code> element contains the value from the appropriate resource record set based on the request.</p> </li> <li> <p>For alias resource record sets that refer to AWS resources other than another resource record set, the <code>RecordDataEntry</code> element contains an IP address or a domain name for the AWS resource, depending on the type of resource.</p> </li> <li> <p>For alias resource record sets that refer to other resource record sets, a <code>RecordDataEntry</code> element contains one value from the referenced resource record set. If the referenced resource record set contains multiple values, the response includes one <code>RecordDataEntry</code> element for each value.</p> </li> </ul>

### RequestInterval
* RequestInterval `integer`

### ResettableElementName
* ResettableElementName `string` (values: FullyQualifiedDomainName, Regions, ResourcePath, ChildHealthChecks)

### ResettableElementNameList
* ResettableElementNameList `array`
  * items

### ResourceDescription
* ResourceDescription `string`

### ResourceId
* ResourceId `string`

### ResourcePath
* ResourcePath `string`

### ResourceRecord
* ResourceRecord `object`: <p>Information specific to the resource record.</p> <note> <p>If you're creating an alias resource record set, omit <code>ResourceRecord</code>.</p> </note>
  * Value **required**

### ResourceRecordSet
* ResourceRecordSet `object`: Information about the resource record set to create or delete.
  * AliasTarget
    * DNSName **required**
    * EvaluateTargetHealth **required**
    * HostedZoneId **required**
  * Failover
  * GeoLocation
    * ContinentCode
    * CountryCode
    * SubdivisionCode
  * HealthCheckId
  * MultiValueAnswer
  * Name **required**
  * Region
  * ResourceRecords
    * items
      * Value **required**
  * SetIdentifier
  * TTL
  * TrafficPolicyInstanceId
  * Type **required**
  * Weight

### ResourceRecordSetFailover
* ResourceRecordSetFailover `string` (values: PRIMARY, SECONDARY)

### ResourceRecordSetIdentifier
* ResourceRecordSetIdentifier `string`

### ResourceRecordSetMultiValueAnswer
* ResourceRecordSetMultiValueAnswer `boolean`

### ResourceRecordSetRegion
* ResourceRecordSetRegion `string` (values: us-east-1, us-east-2, us-west-1, us-west-2, ca-central-1, eu-west-1, eu-west-2, eu-west-3, eu-central-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-northeast-3, eu-north-1, sa-east-1, cn-north-1, cn-northwest-1, ap-east-1, me-south-1, ap-south-1, af-south-1, eu-south-1)

### ResourceRecordSetWeight
* ResourceRecordSetWeight `integer`

### ResourceRecordSets
* ResourceRecordSets `array`
  * items
    * AliasTarget
      * DNSName **required**
      * EvaluateTargetHealth **required**
      * HostedZoneId **required**
    * Failover
    * GeoLocation
      * ContinentCode
      * CountryCode
      * SubdivisionCode
    * HealthCheckId
    * MultiValueAnswer
    * Name **required**
    * Region
    * ResourceRecords
      * items
        * Value **required**
    * SetIdentifier
    * TTL
    * TrafficPolicyInstanceId
    * Type **required**
    * Weight

### ResourceRecords
* ResourceRecords `array`
  * items
    * Value **required**

### ResourceTagSet
* ResourceTagSet `object`: A complex type containing a resource and its associated tags.
  * ResourceId
  * ResourceType
  * Tags
    * items
      * Key
      * Value

### ResourceTagSetList
* ResourceTagSetList `array`
  * items
    * ResourceId
    * ResourceType
    * Tags
      * items
        * Key
        * Value

### ResourceURI
* ResourceURI `string`

### ReusableDelegationSetLimit
* ReusableDelegationSetLimit `object`: A complex type that contains the type of limit that you specified in the request and the current value for that limit.
  * Type **required**
  * Value **required**

### ReusableDelegationSetLimitType
* ReusableDelegationSetLimitType `string` (values: MAX_ZONES_BY_REUSABLE_DELEGATION_SET)

### SearchString
* SearchString `string`

### ServeSignature
* ServeSignature `string`

### ServicePrincipal
* ServicePrincipal `string`

### SigningKeyInteger
* SigningKeyInteger `integer`

### SigningKeyName
* SigningKeyName `string`

### SigningKeyStatus
* SigningKeyStatus `string`

### SigningKeyStatusMessage
* SigningKeyStatusMessage `string`

### SigningKeyString
* SigningKeyString `string`

### SigningKeyTag
* SigningKeyTag `integer`

### Statistic
* Statistic `string` (values: Average, Sum, SampleCount, Maximum, Minimum)

### Status
* Status `string`

### StatusReport
* StatusReport `object`: A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check.
  * CheckedTime
  * Status

### SubnetMask
* SubnetMask `string`

### TTL
* TTL `integer`

### Tag
* Tag `object`: A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.
  * Key
  * Value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items

### TagList
* TagList `array`
  * items
    * Key
    * Value

### TagResourceId
* TagResourceId `string`

### TagResourceIdList
* TagResourceIdList `array`
  * items

### TagResourceType
* TagResourceType `string` (values: healthcheck, hostedzone)

### TagValue
* TagValue `string`

### TestDNSAnswerRequest
* TestDNSAnswerRequest `object`: Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. 

### TestDNSAnswerResponse
* TestDNSAnswerResponse `object`: A complex type that contains the response to a <code>TestDNSAnswer</code> request. 
  * Nameserver **required**
  * Protocol **required**
  * RecordData **required**
    * items
  * RecordName **required**
  * RecordType **required**
  * ResponseCode **required**

### Threshold
* Threshold `number`

### ThrottlingException


### TimeStamp
* TimeStamp `string`

### TooManyHealthChecks


### TooManyHostedZones


### TooManyKeySigningKeys


### TooManyTrafficPolicies


### TooManyTrafficPolicyInstances


### TooManyTrafficPolicyVersionsForCurrentPolicy


### TooManyVPCAssociationAuthorizations


### TrafficPolicies
* TrafficPolicies `array`
  * items
    * Comment
    * Document **required**
    * Id **required**
    * Name **required**
    * Type **required**
    * Version **required**

### TrafficPolicy
* TrafficPolicy `object`: A complex type that contains settings for a traffic policy.
  * Comment
  * Document **required**
  * Id **required**
  * Name **required**
  * Type **required**
  * Version **required**

### TrafficPolicyAlreadyExists


### TrafficPolicyComment
* TrafficPolicyComment `string`

### TrafficPolicyDocument
* TrafficPolicyDocument `string`

### TrafficPolicyId
* TrafficPolicyId `string`

### TrafficPolicyInUse


### TrafficPolicyInstance
* TrafficPolicyInstance `object`: A complex type that contains settings for the new traffic policy instance.
  * HostedZoneId **required**
  * Id **required**
  * Message **required**
  * Name **required**
  * State **required**
  * TTL **required**
  * TrafficPolicyId **required**
  * TrafficPolicyType **required**
  * TrafficPolicyVersion **required**

### TrafficPolicyInstanceAlreadyExists


### TrafficPolicyInstanceCount
* TrafficPolicyInstanceCount `integer`

### TrafficPolicyInstanceId
* TrafficPolicyInstanceId `string`

### TrafficPolicyInstanceState
* TrafficPolicyInstanceState `string`

### TrafficPolicyInstances
* TrafficPolicyInstances `array`
  * items
    * HostedZoneId **required**
    * Id **required**
    * Message **required**
    * Name **required**
    * State **required**
    * TTL **required**
    * TrafficPolicyId **required**
    * TrafficPolicyType **required**
    * TrafficPolicyVersion **required**

### TrafficPolicyName
* TrafficPolicyName `string`

### TrafficPolicySummaries
* TrafficPolicySummaries `array`
  * items
    * Id **required**
    * LatestVersion **required**
    * Name **required**
    * TrafficPolicyCount **required**
    * Type **required**

### TrafficPolicySummary
* TrafficPolicySummary `object`: A complex type that contains information about the latest version of one traffic policy that is associated with the current AWS account.
  * Id **required**
  * LatestVersion **required**
  * Name **required**
  * TrafficPolicyCount **required**
  * Type **required**

### TrafficPolicyVersion
* TrafficPolicyVersion `integer`

### TrafficPolicyVersionMarker
* TrafficPolicyVersionMarker `string`

### TransportProtocol
* TransportProtocol `string`

### UpdateHealthCheckRequest
* UpdateHealthCheckRequest `object`: A complex type that contains information about a request to update a health check.
  * AlarmIdentifier
    * Name **required**
    * Region **required**
  * ChildHealthChecks
    * items
  * Disabled
  * EnableSNI
  * FailureThreshold
  * FullyQualifiedDomainName
  * HealthCheckVersion
  * HealthThreshold
  * IPAddress
  * InsufficientDataHealthStatus
  * Inverted
  * Port
  * Regions
    * items
  * ResetElements
    * items
  * ResourcePath
  * SearchString

### UpdateHealthCheckResponse
* UpdateHealthCheckResponse `object`: A complex type that contains the response to the <code>UpdateHealthCheck</code> request.
  * HealthCheck **required**
    * CallerReference **required**
    * CloudWatchAlarmConfiguration
      * ComparisonOperator **required**
      * Dimensions
        * items
          * Name **required**
          * Value **required**
      * EvaluationPeriods **required**
      * MetricName **required**
      * Namespace **required**
      * Period **required**
      * Statistic **required**
      * Threshold **required**
    * HealthCheckConfig **required**
      * AlarmIdentifier
        * Name **required**
        * Region **required**
      * ChildHealthChecks
        * items
      * Disabled
      * EnableSNI
      * FailureThreshold
      * FullyQualifiedDomainName
      * HealthThreshold
      * IPAddress
      * InsufficientDataHealthStatus
      * Inverted
      * MeasureLatency
      * Port
      * Regions
        * items
      * RequestInterval
      * ResourcePath
      * SearchString
      * Type **required**
    * HealthCheckVersion **required**
    * Id **required**
    * LinkedService
      * Description
      * ServicePrincipal

### UpdateHostedZoneCommentRequest
* UpdateHostedZoneCommentRequest `object`: A request to update the comment for a hosted zone.
  * Comment

### UpdateHostedZoneCommentResponse
* UpdateHostedZoneCommentResponse `object`: A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.
  * HostedZone **required**
    * CallerReference **required**
    * Config
      * Comment
      * PrivateZone
    * Id **required**
    * LinkedService
      * Description
      * ServicePrincipal
    * Name **required**
    * ResourceRecordSetCount

### UpdateTrafficPolicyCommentRequest
* UpdateTrafficPolicyCommentRequest `object`: A complex type that contains information about the traffic policy that you want to update the comment for.
  * Comment **required**

### UpdateTrafficPolicyCommentResponse
* UpdateTrafficPolicyCommentResponse `object`: A complex type that contains the response information for the traffic policy.
  * TrafficPolicy **required**
    * Comment
    * Document **required**
    * Id **required**
    * Name **required**
    * Type **required**
    * Version **required**

### UpdateTrafficPolicyInstanceRequest
* UpdateTrafficPolicyInstanceRequest `object`: A complex type that contains information about the resource record sets that you want to update based on a specified traffic policy instance.
  * TTL **required**
  * TrafficPolicyId **required**
  * TrafficPolicyVersion **required**

### UpdateTrafficPolicyInstanceResponse
* UpdateTrafficPolicyInstanceResponse `object`: A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.
  * TrafficPolicyInstance **required**
    * HostedZoneId **required**
    * Id **required**
    * Message **required**
    * Name **required**
    * State **required**
    * TTL **required**
    * TrafficPolicyId **required**
    * TrafficPolicyType **required**
    * TrafficPolicyVersion **required**

### UsageCount
* UsageCount `integer`

### VPC
* VPC `object`: (Private hosted zones only) A complex type that contains information about an Amazon VPC.
  * VPCId [VPCId](#vpcid)
  * VPCRegion

### VPCAssociationAuthorizationNotFound


### VPCAssociationNotFound


### VPCId
* VPCId `string`: (Private hosted zones only) The ID of an Amazon VPC. 

### VPCRegion
* VPCRegion `string` (values: us-east-1, us-east-2, us-west-1, us-west-2, eu-west-1, eu-west-2, eu-west-3, eu-central-1, ap-east-1, me-south-1, us-gov-west-1, us-gov-east-1, us-iso-east-1, us-isob-east-1, ap-southeast-1, ap-southeast-2, ap-south-1, ap-northeast-1, ap-northeast-2, ap-northeast-3, eu-north-1, sa-east-1, ca-central-1, cn-north-1, af-south-1, eu-south-1)

### VPCs
* VPCs `array`: (Private hosted zones only) A list of <code>VPC</code> elements.
  * items
    * VPCId [VPCId](#vpcid)
    * VPCRegion


