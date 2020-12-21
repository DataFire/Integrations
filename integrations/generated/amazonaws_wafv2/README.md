# @datafire/amazonaws_wafv2

Client library for AWS WAFV2

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_wafv2
```
```js
let amazonaws_wafv2 = require('@datafire/amazonaws_wafv2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<note> <p>This is the latest version of the <b>AWS WAF</b> API, released in November, 2019. The names of the entities that you use to access this API, like endpoints and namespaces, all have the versioning information added, like "V2" or "v2", to distinguish from the prior version. We recommend migrating your resources to this version, because it has a number of significant improvements.</p> <p>If you used AWS WAF prior to this release, you can't use this AWS WAFV2 API to access any AWS WAF resources that you created before. You can access your old rules, web ACLs, and other AWS WAF resources only through the AWS WAF Classic APIs. The AWS WAF Classic APIs have retained the prior names, endpoints, and namespaces. </p> <p>For information, including how to migrate your AWS WAF resources to this version, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, or an AWS AppSync GraphQL API. AWS WAF also lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, the API Gateway REST API, CloudFront distribution, the Application Load Balancer, or the AWS AppSync GraphQL API responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You also can configure CloudFront to return a custom error page when a request is blocked.</p> <p>This API guide is for developers who need detailed information about AWS WAF API actions, data types, and errors. For detailed information about AWS WAF features and an overview of how to use AWS WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p> <p>You can make calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Service Endpoints for AWS WAF</a>. </p> <ul> <li> <p>For regional applications, you can use any of the endpoints in the list. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API. </p> </li> <li> <p>For AWS CloudFront applications, you must use the API endpoint listed for US East (N. Virginia): us-east-1.</p> </li> </ul> <p>Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p> <p>We currently provide two versions of the AWS WAF API: this API and the prior versions, the classic AWS WAF APIs. This new API provides the same functionality as the older versions, with the following major improvements:</p> <ul> <li> <p>You use one API for both global and regional applications. Where you need to distinguish the scope, you specify a <code>Scope</code> parameter and set it to <code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p> </li> <li> <p>You can define a Web ACL or rule group with a single call, and update it with a single call. You define all rule specifications in JSON format, and pass them to your rule group or Web ACL calls.</p> </li> <li> <p>The limits AWS WAF places on the use of rules more closely reflects the cost of running each type of rule. Rule groups include capacity settings, so you know the maximum cost of a rule group when you use it.</p> </li> </ul>

## Actions

### AssociateWebACL



```js
amazonaws_wafv2.AssociateWebACL({
  "WebACLArn": null,
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * WebACLArn **required**

#### Output
* output [AssociateWebACLResponse](#associatewebaclresponse)

### CheckCapacity



```js
amazonaws_wafv2.CheckCapacity({
  "Scope": null,
  "Rules": null
}, context)
```

#### Input
* input `object`
  * Rules **required**
    * items [Rule](#rule)
  * Scope **required**

#### Output
* output [CheckCapacityResponse](#checkcapacityresponse)

### CreateIPSet



```js
amazonaws_wafv2.CreateIPSet({
  "Name": null,
  "Scope": null,
  "IPAddressVersion": null,
  "Addresses": null
}, context)
```

#### Input
* input `object`
  * Addresses **required**
    * items [IPAddress](#ipaddress)
  * Description
  * IPAddressVersion **required**
  * Name **required**
  * Scope **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateIPSetResponse](#createipsetresponse)

### CreateRegexPatternSet



```js
amazonaws_wafv2.CreateRegexPatternSet({
  "Name": null,
  "Scope": null,
  "RegularExpressionList": null
}, context)
```

#### Input
* input `object`
  * Description
  * Name **required**
  * RegularExpressionList **required**
    * items [Regex](#regex)
  * Scope **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateRegexPatternSetResponse](#createregexpatternsetresponse)

### CreateRuleGroup



```js
amazonaws_wafv2.CreateRuleGroup({
  "Name": null,
  "Scope": null,
  "Capacity": null,
  "VisibilityConfig": null
}, context)
```

#### Input
* input `object`
  * Capacity **required**
  * Description
  * Name **required**
  * Rules
    * items [Rule](#rule)
  * Scope **required**
  * Tags
    * items [Tag](#tag)
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

#### Output
* output [CreateRuleGroupResponse](#createrulegroupresponse)

### CreateWebACL



```js
amazonaws_wafv2.CreateWebACL({
  "Name": null,
  "Scope": null,
  "DefaultAction": null,
  "VisibilityConfig": null
}, context)
```

#### Input
* input `object`
  * DefaultAction **required**
    * Allow
    * Block
  * Description
  * Name **required**
  * Rules
    * items [Rule](#rule)
  * Scope **required**
  * Tags
    * items [Tag](#tag)
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

#### Output
* output [CreateWebACLResponse](#createwebaclresponse)

### DeleteFirewallManagerRuleGroups



```js
amazonaws_wafv2.DeleteFirewallManagerRuleGroups({
  "WebACLArn": null,
  "WebACLLockToken": null
}, context)
```

#### Input
* input `object`
  * WebACLArn **required**
  * WebACLLockToken **required**

#### Output
* output [DeleteFirewallManagerRuleGroupsResponse](#deletefirewallmanagerrulegroupsresponse)

### DeleteIPSet



```js
amazonaws_wafv2.DeleteIPSet({
  "Name": null,
  "Scope": null,
  "Id": null,
  "LockToken": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

#### Output
* output [DeleteIPSetResponse](#deleteipsetresponse)

### DeleteLoggingConfiguration



```js
amazonaws_wafv2.DeleteLoggingConfiguration({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [DeleteLoggingConfigurationResponse](#deleteloggingconfigurationresponse)

### DeletePermissionPolicy



```js
amazonaws_wafv2.DeletePermissionPolicy({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [DeletePermissionPolicyResponse](#deletepermissionpolicyresponse)

### DeleteRegexPatternSet



```js
amazonaws_wafv2.DeleteRegexPatternSet({
  "Name": null,
  "Scope": null,
  "Id": null,
  "LockToken": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

#### Output
* output [DeleteRegexPatternSetResponse](#deleteregexpatternsetresponse)

### DeleteRuleGroup



```js
amazonaws_wafv2.DeleteRuleGroup({
  "Name": null,
  "Scope": null,
  "Id": null,
  "LockToken": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

#### Output
* output [DeleteRuleGroupResponse](#deleterulegroupresponse)

### DeleteWebACL



```js
amazonaws_wafv2.DeleteWebACL({
  "Name": null,
  "Scope": null,
  "Id": null,
  "LockToken": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

#### Output
* output [DeleteWebACLResponse](#deletewebaclresponse)

### DescribeManagedRuleGroup



```js
amazonaws_wafv2.DescribeManagedRuleGroup({
  "VendorName": null,
  "Name": null,
  "Scope": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * Scope **required**
  * VendorName **required**

#### Output
* output [DescribeManagedRuleGroupResponse](#describemanagedrulegroupresponse)

### DisassociateWebACL



```js
amazonaws_wafv2.DisassociateWebACL({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [DisassociateWebACLResponse](#disassociatewebaclresponse)

### GetIPSet



```js
amazonaws_wafv2.GetIPSet({
  "Name": null,
  "Scope": null,
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * Name **required**
  * Scope **required**

#### Output
* output [GetIPSetResponse](#getipsetresponse)

### GetLoggingConfiguration



```js
amazonaws_wafv2.GetLoggingConfiguration({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [GetLoggingConfigurationResponse](#getloggingconfigurationresponse)

### GetPermissionPolicy



```js
amazonaws_wafv2.GetPermissionPolicy({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [GetPermissionPolicyResponse](#getpermissionpolicyresponse)

### GetRateBasedStatementManagedKeys



```js
amazonaws_wafv2.GetRateBasedStatementManagedKeys({
  "Scope": null,
  "WebACLName": null,
  "WebACLId": null,
  "RuleName": null
}, context)
```

#### Input
* input `object`
  * RuleName **required**
  * Scope **required**
  * WebACLId **required**
  * WebACLName **required**

#### Output
* output [GetRateBasedStatementManagedKeysResponse](#getratebasedstatementmanagedkeysresponse)

### GetRegexPatternSet



```js
amazonaws_wafv2.GetRegexPatternSet({
  "Name": null,
  "Scope": null,
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * Name **required**
  * Scope **required**

#### Output
* output [GetRegexPatternSetResponse](#getregexpatternsetresponse)

### GetRuleGroup



```js
amazonaws_wafv2.GetRuleGroup({
  "Name": null,
  "Scope": null,
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * Name **required**
  * Scope **required**

#### Output
* output [GetRuleGroupResponse](#getrulegroupresponse)

### GetSampledRequests



```js
amazonaws_wafv2.GetSampledRequests({
  "WebAclArn": null,
  "RuleMetricName": null,
  "Scope": null,
  "TimeWindow": null,
  "MaxItems": null
}, context)
```

#### Input
* input `object`
  * MaxItems **required**
  * RuleMetricName **required**
  * Scope **required**
  * TimeWindow **required**
    * EndTime **required**
    * StartTime **required**
  * WebAclArn **required**

#### Output
* output [GetSampledRequestsResponse](#getsampledrequestsresponse)

### GetWebACL



```js
amazonaws_wafv2.GetWebACL({
  "Name": null,
  "Scope": null,
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * Name **required**
  * Scope **required**

#### Output
* output [GetWebACLResponse](#getwebaclresponse)

### GetWebACLForResource



```js
amazonaws_wafv2.GetWebACLForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [GetWebACLForResourceResponse](#getwebaclforresourceresponse)

### ListAvailableManagedRuleGroups



```js
amazonaws_wafv2.ListAvailableManagedRuleGroups({
  "Scope": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker
  * Scope **required**

#### Output
* output [ListAvailableManagedRuleGroupsResponse](#listavailablemanagedrulegroupsresponse)

### ListIPSets



```js
amazonaws_wafv2.ListIPSets({
  "Scope": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker
  * Scope **required**

#### Output
* output [ListIPSetsResponse](#listipsetsresponse)

### ListLoggingConfigurations



```js
amazonaws_wafv2.ListLoggingConfigurations({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker
  * Scope

#### Output
* output [ListLoggingConfigurationsResponse](#listloggingconfigurationsresponse)

### ListRegexPatternSets



```js
amazonaws_wafv2.ListRegexPatternSets({
  "Scope": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker
  * Scope **required**

#### Output
* output [ListRegexPatternSetsResponse](#listregexpatternsetsresponse)

### ListResourcesForWebACL



```js
amazonaws_wafv2.ListResourcesForWebACL({
  "WebACLArn": null
}, context)
```

#### Input
* input `object`
  * ResourceType
  * WebACLArn **required**

#### Output
* output [ListResourcesForWebACLResponse](#listresourcesforwebaclresponse)

### ListRuleGroups



```js
amazonaws_wafv2.ListRuleGroups({
  "Scope": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker
  * Scope **required**

#### Output
* output [ListRuleGroupsResponse](#listrulegroupsresponse)

### ListTagsForResource



```js
amazonaws_wafv2.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListWebACLs



```js
amazonaws_wafv2.ListWebACLs({
  "Scope": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker
  * Scope **required**

#### Output
* output [ListWebACLsResponse](#listwebaclsresponse)

### PutLoggingConfiguration



```js
amazonaws_wafv2.PutLoggingConfiguration({
  "LoggingConfiguration": null
}, context)
```

#### Input
* input `object`
  * LoggingConfiguration **required**
    * LogDestinationConfigs **required**
      * items [ResourceArn](#resourcearn)
    * ManagedByFirewallManager
    * RedactedFields
      * items [FieldToMatch](#fieldtomatch)
    * ResourceArn **required**

#### Output
* output [PutLoggingConfigurationResponse](#putloggingconfigurationresponse)

### PutPermissionPolicy



```js
amazonaws_wafv2.PutPermissionPolicy({
  "ResourceArn": null,
  "Policy": null
}, context)
```

#### Input
* input `object`
  * Policy **required**
  * ResourceArn **required**

#### Output
* output [PutPermissionPolicyResponse](#putpermissionpolicyresponse)

### TagResource



```js
amazonaws_wafv2.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_wafv2.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateIPSet



```js
amazonaws_wafv2.UpdateIPSet({
  "Name": null,
  "Scope": null,
  "Id": null,
  "Addresses": null,
  "LockToken": null
}, context)
```

#### Input
* input `object`
  * Addresses **required**
    * items [IPAddress](#ipaddress)
  * Description
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

#### Output
* output [UpdateIPSetResponse](#updateipsetresponse)

### UpdateRegexPatternSet



```js
amazonaws_wafv2.UpdateRegexPatternSet({
  "Name": null,
  "Scope": null,
  "Id": null,
  "RegularExpressionList": null,
  "LockToken": null
}, context)
```

#### Input
* input `object`
  * Description
  * Id **required**
  * LockToken **required**
  * Name **required**
  * RegularExpressionList **required**
    * items [Regex](#regex)
  * Scope **required**

#### Output
* output [UpdateRegexPatternSetResponse](#updateregexpatternsetresponse)

### UpdateRuleGroup



```js
amazonaws_wafv2.UpdateRuleGroup({
  "Name": null,
  "Scope": null,
  "Id": null,
  "VisibilityConfig": null,
  "LockToken": null
}, context)
```

#### Input
* input `object`
  * Description
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Rules
    * items [Rule](#rule)
  * Scope **required**
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

#### Output
* output [UpdateRuleGroupResponse](#updaterulegroupresponse)

### UpdateWebACL



```js
amazonaws_wafv2.UpdateWebACL({
  "Name": null,
  "Scope": null,
  "Id": null,
  "DefaultAction": null,
  "VisibilityConfig": null,
  "LockToken": null
}, context)
```

#### Input
* input `object`
  * DefaultAction **required**
    * Allow
    * Block
  * Description
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Rules
    * items [Rule](#rule)
  * Scope **required**
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

#### Output
* output [UpdateWebACLResponse](#updatewebaclresponse)



## Definitions

### Action
* Action `string`

### AllQueryArguments
* AllQueryArguments `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>All query arguments of a web request. </p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>

### AllowAction
* AllowAction `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should allow requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>

### AndStatement
* AndStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p>
  * Statements **required**
    * items [Statement](#statement)

### AssociateWebACLRequest
* AssociateWebACLRequest `object`
  * ResourceArn **required**
  * WebACLArn **required**

### AssociateWebACLResponse
* AssociateWebACLResponse `object`

### BlockAction
* BlockAction `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should block requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>

### Body
* Body `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The body of a web request. This immediately follows the request headers.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>

### Boolean
* Boolean `boolean`

### ByteMatchStatement
* ByteMatchStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is refered to as a string match statement.</p>
  * FieldToMatch **required**
    * AllQueryArguments
    * Body
    * Method
    * QueryString
    * SingleHeader
      * Name **required**
    * SingleQueryArgument
      * Name **required**
    * UriPath
  * PositionalConstraint **required**
  * SearchString **required**
  * TextTransformations **required**
    * items [TextTransformation](#texttransformation)

### CapacityUnit
* CapacityUnit `integer`

### CheckCapacityRequest
* CheckCapacityRequest `object`
  * Rules **required**
    * items [Rule](#rule)
  * Scope **required**

### CheckCapacityResponse
* CheckCapacityResponse `object`
  * Capacity

### ComparisonOperator
* ComparisonOperator `string` (values: EQ, NE, LE, LT, GE, GT)

### ConsumedCapacity
* ConsumedCapacity `integer`

### CountAction
* CountAction `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should count requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>

### Country
* Country `string`

### CountryCode
* CountryCode `string` (values: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BQ, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CW, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, GS, SS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW)

### CountryCodes
* CountryCodes `array`
  * items [CountryCode](#countrycode)

### CreateIPSetRequest
* CreateIPSetRequest `object`
  * Addresses **required**
    * items [IPAddress](#ipaddress)
  * Description
  * IPAddressVersion **required**
  * Name **required**
  * Scope **required**
  * Tags
    * items [Tag](#tag)

### CreateIPSetResponse
* CreateIPSetResponse `object`
  * Summary
    * ARN
    * Description
    * Id
    * LockToken
    * Name

### CreateRegexPatternSetRequest
* CreateRegexPatternSetRequest `object`
  * Description
  * Name **required**
  * RegularExpressionList **required**
    * items [Regex](#regex)
  * Scope **required**
  * Tags
    * items [Tag](#tag)

### CreateRegexPatternSetResponse
* CreateRegexPatternSetResponse `object`
  * Summary
    * ARN
    * Description
    * Id
    * LockToken
    * Name

### CreateRuleGroupRequest
* CreateRuleGroupRequest `object`
  * Capacity **required**
  * Description
  * Name **required**
  * Rules
    * items [Rule](#rule)
  * Scope **required**
  * Tags
    * items [Tag](#tag)
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

### CreateRuleGroupResponse
* CreateRuleGroupResponse `object`
  * Summary
    * ARN
    * Description
    * Id
    * LockToken
    * Name

### CreateWebACLRequest
* CreateWebACLRequest `object`
  * DefaultAction **required**
    * Allow
    * Block
  * Description
  * Name **required**
  * Rules
    * items [Rule](#rule)
  * Scope **required**
  * Tags
    * items [Tag](#tag)
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

### CreateWebACLResponse
* CreateWebACLResponse `object`
  * Summary
    * ARN
    * Description
    * Id
    * LockToken
    * Name

### DefaultAction
* DefaultAction `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>In a <a>WebACL</a>, this is the action that you want AWS WAF to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action, so count is not allowed.</p>
  * Allow
  * Block

### DeleteFirewallManagerRuleGroupsRequest
* DeleteFirewallManagerRuleGroupsRequest `object`
  * WebACLArn **required**
  * WebACLLockToken **required**

### DeleteFirewallManagerRuleGroupsResponse
* DeleteFirewallManagerRuleGroupsResponse `object`
  * NextWebACLLockToken

### DeleteIPSetRequest
* DeleteIPSetRequest `object`
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

### DeleteIPSetResponse
* DeleteIPSetResponse `object`

### DeleteLoggingConfigurationRequest
* DeleteLoggingConfigurationRequest `object`
  * ResourceArn **required**

### DeleteLoggingConfigurationResponse
* DeleteLoggingConfigurationResponse `object`

### DeletePermissionPolicyRequest
* DeletePermissionPolicyRequest `object`
  * ResourceArn **required**

### DeletePermissionPolicyResponse
* DeletePermissionPolicyResponse `object`

### DeleteRegexPatternSetRequest
* DeleteRegexPatternSetRequest `object`
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

### DeleteRegexPatternSetResponse
* DeleteRegexPatternSetResponse `object`

### DeleteRuleGroupRequest
* DeleteRuleGroupRequest `object`
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

### DeleteRuleGroupResponse
* DeleteRuleGroupResponse `object`

### DeleteWebACLRequest
* DeleteWebACLRequest `object`
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

### DeleteWebACLResponse
* DeleteWebACLResponse `object`

### DescribeManagedRuleGroupRequest
* DescribeManagedRuleGroupRequest `object`
  * Name **required**
  * Scope **required**
  * VendorName **required**

### DescribeManagedRuleGroupResponse
* DescribeManagedRuleGroupResponse `object`
  * Capacity
  * Rules
    * items [RuleSummary](#rulesummary)

### DisassociateWebACLRequest
* DisassociateWebACLRequest `object`
  * ResourceArn **required**

### DisassociateWebACLResponse
* DisassociateWebACLResponse `object`

### EntityDescription
* EntityDescription `string`

### EntityId
* EntityId `string`

### EntityName
* EntityName `string`

### ExcludedRule
* ExcludedRule `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies a single rule to exclude from the rule group. Excluding a rule overrides its action setting for the rule group in the web ACL, setting it to <code>COUNT</code>. This effectively excludes the rule from acting on web requests. </p>
  * Name **required**

### ExcludedRules
* ExcludedRules `array`
  * items [ExcludedRule](#excludedrule)

### FallbackBehavior
* FallbackBehavior `string` (values: MATCH, NO_MATCH)

### FieldToMatch
* FieldToMatch `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The part of a web request that you want AWS WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of a web request, create a separate rule statement for each component.</p>
  * AllQueryArguments
  * Body
  * Method
  * QueryString
  * SingleHeader
    * Name **required**
  * SingleQueryArgument
    * Name **required**
  * UriPath

### FieldToMatchData
* FieldToMatchData `string`

### FirewallManagerRuleGroup
* FirewallManagerRuleGroup `object`: A rule group that's defined for an AWS Firewall Manager WAF policy.
  * FirewallManagerStatement **required**
    * ManagedRuleGroupStatement [ManagedRuleGroupStatement](#managedrulegroupstatement)
    * RuleGroupReferenceStatement [RuleGroupReferenceStatement](#rulegroupreferencestatement)
  * Name **required**
  * OverrideAction **required** [OverrideAction](#overrideaction)
  * Priority **required**
  * VisibilityConfig **required** [VisibilityConfig](#visibilityconfig)

### FirewallManagerRuleGroups
* FirewallManagerRuleGroups `array`
  * items [FirewallManagerRuleGroup](#firewallmanagerrulegroup)

### FirewallManagerStatement
* FirewallManagerStatement `object`: The processing guidance for an AWS Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a rule group reference.
  * ManagedRuleGroupStatement [ManagedRuleGroupStatement](#managedrulegroupstatement)
  * RuleGroupReferenceStatement [RuleGroupReferenceStatement](#rulegroupreferencestatement)

### ForwardedIPConfig
* ForwardedIPConfig `object`: <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used for <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>. For <a>IPSetReferenceStatement</a>, use <a>IPSetForwardedIPConfig</a> instead. </p> <p>AWS WAF only evaluates the first IP address found in the specified HTTP header. </p>
  * FallbackBehavior **required**
  * HeaderName **required**

### ForwardedIPHeaderName
* ForwardedIPHeaderName `string`

### ForwardedIPPosition
* ForwardedIPPosition `string` (values: FIRST, LAST, ANY)

### GeoMatchStatement
* GeoMatchStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to identify web requests based on country of origin. </p>
  * CountryCodes
    * items [CountryCode](#countrycode)
  * ForwardedIPConfig
    * FallbackBehavior **required**
    * HeaderName **required**

### GetIPSetRequest
* GetIPSetRequest `object`
  * Id **required**
  * Name **required**
  * Scope **required**

### GetIPSetResponse
* GetIPSetResponse `object`
  * IPSet
    * ARN **required**
    * Addresses **required**
      * items [IPAddress](#ipaddress)
    * Description
    * IPAddressVersion **required**
    * Id **required**
    * Name **required**
  * LockToken

### GetLoggingConfigurationRequest
* GetLoggingConfigurationRequest `object`
  * ResourceArn **required**

### GetLoggingConfigurationResponse
* GetLoggingConfigurationResponse `object`
  * LoggingConfiguration
    * LogDestinationConfigs **required**
      * items [ResourceArn](#resourcearn)
    * ManagedByFirewallManager
    * RedactedFields
      * items [FieldToMatch](#fieldtomatch)
    * ResourceArn **required**

### GetPermissionPolicyRequest
* GetPermissionPolicyRequest `object`
  * ResourceArn **required**

### GetPermissionPolicyResponse
* GetPermissionPolicyResponse `object`
  * Policy

### GetRateBasedStatementManagedKeysRequest
* GetRateBasedStatementManagedKeysRequest `object`
  * RuleName **required**
  * Scope **required**
  * WebACLId **required**
  * WebACLName **required**

### GetRateBasedStatementManagedKeysResponse
* GetRateBasedStatementManagedKeysResponse `object`
  * ManagedKeysIPV4
    * Addresses
      * items [IPAddress](#ipaddress)
    * IPAddressVersion [IPAddressVersion](#ipaddressversion)
  * ManagedKeysIPV6
    * Addresses
      * items [IPAddress](#ipaddress)
    * IPAddressVersion [IPAddressVersion](#ipaddressversion)

### GetRegexPatternSetRequest
* GetRegexPatternSetRequest `object`
  * Id **required**
  * Name **required**
  * Scope **required**

### GetRegexPatternSetResponse
* GetRegexPatternSetResponse `object`
  * LockToken
  * RegexPatternSet
    * ARN
    * Description
    * Id
    * Name
    * RegularExpressionList
      * items [Regex](#regex)

### GetRuleGroupRequest
* GetRuleGroupRequest `object`
  * Id **required**
  * Name **required**
  * Scope **required**

### GetRuleGroupResponse
* GetRuleGroupResponse `object`
  * LockToken
  * RuleGroup
    * ARN **required**
    * Capacity **required**
    * Description
    * Id **required**
    * Name **required**
    * Rules
      * items [Rule](#rule)
    * VisibilityConfig **required**
      * CloudWatchMetricsEnabled **required**
      * MetricName **required**
      * SampledRequestsEnabled **required**

### GetSampledRequestsRequest
* GetSampledRequestsRequest `object`
  * MaxItems **required**
  * RuleMetricName **required**
  * Scope **required**
  * TimeWindow **required**
    * EndTime **required**
    * StartTime **required**
  * WebAclArn **required**

### GetSampledRequestsResponse
* GetSampledRequestsResponse `object`
  * PopulationSize
  * SampledRequests
    * items [SampledHTTPRequest](#sampledhttprequest)
  * TimeWindow
    * EndTime **required**
    * StartTime **required**

### GetWebACLForResourceRequest
* GetWebACLForResourceRequest `object`
  * ResourceArn **required**

### GetWebACLForResourceResponse
* GetWebACLForResourceResponse `object`
  * WebACL
    * ARN **required**
    * Capacity
    * DefaultAction **required**
      * Allow
      * Block
    * Description
    * Id **required**
    * ManagedByFirewallManager
    * Name **required**
    * PostProcessFirewallManagerRuleGroups
      * items [FirewallManagerRuleGroup](#firewallmanagerrulegroup)
    * PreProcessFirewallManagerRuleGroups
      * items [FirewallManagerRuleGroup](#firewallmanagerrulegroup)
    * Rules
      * items [Rule](#rule)
    * VisibilityConfig **required**
      * CloudWatchMetricsEnabled **required**
      * MetricName **required**
      * SampledRequestsEnabled **required**

### GetWebACLRequest
* GetWebACLRequest `object`
  * Id **required**
  * Name **required**
  * Scope **required**

### GetWebACLResponse
* GetWebACLResponse `object`
  * LockToken
  * WebACL
    * ARN **required**
    * Capacity
    * DefaultAction **required**
      * Allow
      * Block
    * Description
    * Id **required**
    * ManagedByFirewallManager
    * Name **required**
    * PostProcessFirewallManagerRuleGroups
      * items [FirewallManagerRuleGroup](#firewallmanagerrulegroup)
    * PreProcessFirewallManagerRuleGroups
      * items [FirewallManagerRuleGroup](#firewallmanagerrulegroup)
    * Rules
      * items [Rule](#rule)
    * VisibilityConfig **required**
      * CloudWatchMetricsEnabled **required**
      * MetricName **required**
      * SampledRequestsEnabled **required**

### HTTPHeader
* HTTPHeader `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests. </p>
  * Name
  * Value

### HTTPHeaders
* HTTPHeaders `array`
  * items [HTTPHeader](#httpheader)

### HTTPMethod
* HTTPMethod `string`

### HTTPRequest
* HTTPRequest `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests. </p>
  * ClientIP
  * Country
  * HTTPVersion
  * Headers
    * items [HTTPHeader](#httpheader)
  * Method
  * URI

### HTTPVersion
* HTTPVersion `string`

### HeaderName
* HeaderName `string`

### HeaderValue
* HeaderValue `string`

### IPAddress
* IPAddress `string`

### IPAddressVersion
* IPAddressVersion `string` (values: IPV4, IPV6)

### IPAddresses
* IPAddresses `array`
  * items [IPAddress](#ipaddress)

### IPSet
* IPSet `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports any CIDR range. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>AWS WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p>
  * ARN **required**
  * Addresses **required**
    * items [IPAddress](#ipaddress)
  * Description
  * IPAddressVersion **required**
  * Id **required**
  * Name **required**

### IPSetForwardedIPConfig
* IPSetForwardedIPConfig `object`: <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used only for <a>IPSetReferenceStatement</a>. For <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>, use <a>ForwardedIPConfig</a> instead. </p>
  * FallbackBehavior **required**
  * HeaderName **required**
  * Position **required**

### IPSetReferenceStatement
* IPSetReferenceStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p> <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
  * ARN **required**
  * IPSetForwardedIPConfig
    * FallbackBehavior **required**
    * HeaderName **required**
    * Position **required**

### IPSetSummaries
* IPSetSummaries `array`
  * items [IPSetSummary](#ipsetsummary)

### IPSetSummary
* IPSetSummary `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p>
  * ARN
  * Description
  * Id
  * LockToken
  * Name

### IPString
* IPString `string`

### ListAvailableManagedRuleGroupsRequest
* ListAvailableManagedRuleGroupsRequest `object`
  * Limit
  * NextMarker
  * Scope **required**

### ListAvailableManagedRuleGroupsResponse
* ListAvailableManagedRuleGroupsResponse `object`
  * ManagedRuleGroups
    * items [ManagedRuleGroupSummary](#managedrulegroupsummary)
  * NextMarker

### ListIPSetsRequest
* ListIPSetsRequest `object`
  * Limit
  * NextMarker
  * Scope **required**

### ListIPSetsResponse
* ListIPSetsResponse `object`
  * IPSets
    * items [IPSetSummary](#ipsetsummary)
  * NextMarker

### ListLoggingConfigurationsRequest
* ListLoggingConfigurationsRequest `object`
  * Limit
  * NextMarker
  * Scope

### ListLoggingConfigurationsResponse
* ListLoggingConfigurationsResponse `object`
  * LoggingConfigurations
    * items [LoggingConfiguration](#loggingconfiguration)
  * NextMarker

### ListMaxItems
* ListMaxItems `integer`

### ListRegexPatternSetsRequest
* ListRegexPatternSetsRequest `object`
  * Limit
  * NextMarker
  * Scope **required**

### ListRegexPatternSetsResponse
* ListRegexPatternSetsResponse `object`
  * NextMarker
  * RegexPatternSets
    * items [RegexPatternSetSummary](#regexpatternsetsummary)

### ListResourcesForWebACLRequest
* ListResourcesForWebACLRequest `object`
  * ResourceType
  * WebACLArn **required**

### ListResourcesForWebACLResponse
* ListResourcesForWebACLResponse `object`
  * ResourceArns
    * items [ResourceArn](#resourcearn)

### ListRuleGroupsRequest
* ListRuleGroupsRequest `object`
  * Limit
  * NextMarker
  * Scope **required**

### ListRuleGroupsResponse
* ListRuleGroupsResponse `object`
  * NextMarker
  * RuleGroups
    * items [RuleGroupSummary](#rulegroupsummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * Limit
  * NextMarker
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextMarker
  * TagInfoForResource
    * ResourceARN
    * TagList
      * items [Tag](#tag)

### ListWebACLsRequest
* ListWebACLsRequest `object`
  * Limit
  * NextMarker
  * Scope **required**

### ListWebACLsResponse
* ListWebACLsResponse `object`
  * NextMarker
  * WebACLs
    * items [WebACLSummary](#webaclsummary)

### LockToken
* LockToken `string`

### LogDestinationConfigs
* LogDestinationConfigs `array`
  * items [ResourceArn](#resourcearn)

### LoggingConfiguration
* LoggingConfiguration `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines an association between Amazon Kinesis Data Firehose destinations and a web ACL resource, for logging from AWS WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs. </p>
  * LogDestinationConfigs **required**
    * items [ResourceArn](#resourcearn)
  * ManagedByFirewallManager
  * RedactedFields
    * items [FieldToMatch](#fieldtomatch)
  * ResourceArn **required**

### LoggingConfigurations
* LoggingConfigurations `array`
  * items [LoggingConfiguration](#loggingconfiguration)

### ManagedRuleGroupStatement
* ManagedRuleGroupStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p> <p>You can't nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
  * ExcludedRules
    * items [ExcludedRule](#excludedrule)
  * Name **required**
  * VendorName **required**

### ManagedRuleGroupSummaries
* ManagedRuleGroupSummaries `array`
  * items [ManagedRuleGroupSummary](#managedrulegroupsummary)

### ManagedRuleGroupSummary
* ManagedRuleGroupSummary `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include AWS Managed Rules rule groups, which are free of charge to AWS WAF customers, and AWS Marketplace managed rule groups, which you can subscribe to through AWS Marketplace. </p>
  * Description
  * Name
  * VendorName

### Method
* Method `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform. </p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>

### MetricName
* MetricName `string`

### NextMarker
* NextMarker `string`

### NoneAction
* NoneAction `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should do nothing. This is generally used to try out a rule without performing any actions. You set the <code>OverrideAction</code> on the <a>Rule</a>. </p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>

### NotStatement
* NotStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p>
  * Statement **required**
    * AndStatement
      * Statements **required**
        * items [Statement](#statement)
    * ByteMatchStatement
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * PositionalConstraint **required**
      * SearchString **required**
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * GeoMatchStatement
      * CountryCodes
        * items [CountryCode](#countrycode)
      * ForwardedIPConfig
        * FallbackBehavior **required**
        * HeaderName **required**
    * IPSetReferenceStatement
      * ARN **required**
      * IPSetForwardedIPConfig
        * FallbackBehavior **required**
        * HeaderName **required**
        * Position **required**
    * ManagedRuleGroupStatement
      * ExcludedRules
        * items [ExcludedRule](#excludedrule)
      * Name **required**
      * VendorName **required**
    * NotStatement
      * Statement **required**
        * AndStatement
          * Statements **required**
        * ByteMatchStatement
          * FieldToMatch **required**
          * PositionalConstraint **required**
          * SearchString **required**
          * TextTransformations **required**
        * GeoMatchStatement
          * CountryCodes
          * ForwardedIPConfig
        * IPSetReferenceStatement
          * ARN **required**
          * IPSetForwardedIPConfig
        * ManagedRuleGroupStatement
          * ExcludedRules
          * Name **required**
          * VendorName **required**
        * NotStatement
          * Statement **required**
        * OrStatement
          * Statements **required**
        * RateBasedStatement
          * AggregateKeyType **required**
          * ForwardedIPConfig
          * Limit **required**
          * ScopeDownStatement
        * RegexPatternSetReferenceStatement
          * ARN **required**
          * FieldToMatch **required**
          * TextTransformations **required**
        * RuleGroupReferenceStatement
          * ARN **required**
          * ExcludedRules
        * SizeConstraintStatement
          * ComparisonOperator **required**
          * FieldToMatch **required**
          * Size **required**
          * TextTransformations **required**
        * SqliMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
        * XssMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
    * OrStatement
      * Statements **required**
        * items [Statement](#statement)
    * RateBasedStatement
      * AggregateKeyType **required**
      * ForwardedIPConfig
        * FallbackBehavior **required**
        * HeaderName **required**
      * Limit **required**
      * ScopeDownStatement
        * AndStatement
          * Statements **required**
        * ByteMatchStatement
          * FieldToMatch **required**
          * PositionalConstraint **required**
          * SearchString **required**
          * TextTransformations **required**
        * GeoMatchStatement
          * CountryCodes
          * ForwardedIPConfig
        * IPSetReferenceStatement
          * ARN **required**
          * IPSetForwardedIPConfig
        * ManagedRuleGroupStatement
          * ExcludedRules
          * Name **required**
          * VendorName **required**
        * NotStatement
          * Statement **required**
        * OrStatement
          * Statements **required**
        * RateBasedStatement
          * AggregateKeyType **required**
          * ForwardedIPConfig
          * Limit **required**
          * ScopeDownStatement
        * RegexPatternSetReferenceStatement
          * ARN **required**
          * FieldToMatch **required**
          * TextTransformations **required**
        * RuleGroupReferenceStatement
          * ARN **required**
          * ExcludedRules
        * SizeConstraintStatement
          * ComparisonOperator **required**
          * FieldToMatch **required**
          * Size **required**
          * TextTransformations **required**
        * SqliMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
        * XssMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
    * RegexPatternSetReferenceStatement
      * ARN **required**
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * RuleGroupReferenceStatement
      * ARN **required**
      * ExcludedRules
        * items [ExcludedRule](#excludedrule)
    * SizeConstraintStatement
      * ComparisonOperator **required**
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * Size **required**
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * SqliMatchStatement
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * XssMatchStatement
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)

### OrStatement
* OrStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p>
  * Statements **required**
    * items [Statement](#statement)

### OverrideAction
* OverrideAction `object`: <p>The override action to apply to the rules in a rule group. Used only for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <p>Set the override action to none to leave the rule actions in effect. Set it to count to only count matches, regardless of the rule action settings. </p> <p>In a <a>Rule</a>, you must specify either this <code>OverrideAction</code> setting or the rule <code>Action</code> setting, but not both:</p> <ul> <li> <p>If the rule statement references a rule group, use this override action setting and not the action setting. </p> </li> <li> <p>If the rule statement does not reference a rule group, use the rule action setting and not this rule override action setting. </p> </li> </ul>
  * Count
  * None

### PaginationLimit
* PaginationLimit `integer`

### PolicyString
* PolicyString `string`

### PopulationSize
* PopulationSize `integer`

### PositionalConstraint
* PositionalConstraint `string` (values: EXACTLY, STARTS_WITH, ENDS_WITH, CONTAINS, CONTAINS_WORD)

### PutLoggingConfigurationRequest
* PutLoggingConfigurationRequest `object`
  * LoggingConfiguration **required**
    * LogDestinationConfigs **required**
      * items [ResourceArn](#resourcearn)
    * ManagedByFirewallManager
    * RedactedFields
      * items [FieldToMatch](#fieldtomatch)
    * ResourceArn **required**

### PutLoggingConfigurationResponse
* PutLoggingConfigurationResponse `object`
  * LoggingConfiguration
    * LogDestinationConfigs **required**
      * items [ResourceArn](#resourcearn)
    * ManagedByFirewallManager
    * RedactedFields
      * items [FieldToMatch](#fieldtomatch)
    * ResourceArn **required**

### PutPermissionPolicyRequest
* PutPermissionPolicyRequest `object`
  * Policy **required**
  * ResourceArn **required**

### PutPermissionPolicyResponse
* PutPermissionPolicyResponse `object`

### QueryString
* QueryString `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The query string of a web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>

### RateBasedStatement
* RateBasedStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests.</p> <p>When the rule action triggers, AWS WAF blocks additional requests from the IP address until the request rate falls below the limit.</p> <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:</p> <ul> <li> <p>An IP match statement with an IP set that specified the address 192.0.2.44.</p> </li> <li> <p>A string match statement that searches in the User-Agent header for the string BadBot.</p> </li> </ul> <p>In this rate-based rule, you also define a rate limit. For this example, the rate limit is 1,000. Requests that meet both of the conditions in the statements are counted. If the count exceeds 1,000 requests per five minutes, the rule action triggers. Requests that do not meet both conditions are not counted towards the rate limit and are not affected by this rule.</p> <p>You cannot nest a <code>RateBasedStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
  * AggregateKeyType **required**
  * ForwardedIPConfig
    * FallbackBehavior **required**
    * HeaderName **required**
  * Limit **required**
  * ScopeDownStatement
    * AndStatement
      * Statements **required**
        * items [Statement](#statement)
    * ByteMatchStatement
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * PositionalConstraint **required**
      * SearchString **required**
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * GeoMatchStatement
      * CountryCodes
        * items [CountryCode](#countrycode)
      * ForwardedIPConfig
        * FallbackBehavior **required**
        * HeaderName **required**
    * IPSetReferenceStatement
      * ARN **required**
      * IPSetForwardedIPConfig
        * FallbackBehavior **required**
        * HeaderName **required**
        * Position **required**
    * ManagedRuleGroupStatement
      * ExcludedRules
        * items [ExcludedRule](#excludedrule)
      * Name **required**
      * VendorName **required**
    * NotStatement
      * Statement **required**
        * AndStatement
          * Statements **required**
        * ByteMatchStatement
          * FieldToMatch **required**
          * PositionalConstraint **required**
          * SearchString **required**
          * TextTransformations **required**
        * GeoMatchStatement
          * CountryCodes
          * ForwardedIPConfig
        * IPSetReferenceStatement
          * ARN **required**
          * IPSetForwardedIPConfig
        * ManagedRuleGroupStatement
          * ExcludedRules
          * Name **required**
          * VendorName **required**
        * NotStatement
          * Statement **required**
        * OrStatement
          * Statements **required**
        * RateBasedStatement
          * AggregateKeyType **required**
          * ForwardedIPConfig
          * Limit **required**
          * ScopeDownStatement
        * RegexPatternSetReferenceStatement
          * ARN **required**
          * FieldToMatch **required**
          * TextTransformations **required**
        * RuleGroupReferenceStatement
          * ARN **required**
          * ExcludedRules
        * SizeConstraintStatement
          * ComparisonOperator **required**
          * FieldToMatch **required**
          * Size **required**
          * TextTransformations **required**
        * SqliMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
        * XssMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
    * OrStatement
      * Statements **required**
        * items [Statement](#statement)
    * RateBasedStatement
      * AggregateKeyType **required**
      * ForwardedIPConfig
        * FallbackBehavior **required**
        * HeaderName **required**
      * Limit **required**
      * ScopeDownStatement
        * AndStatement
          * Statements **required**
        * ByteMatchStatement
          * FieldToMatch **required**
          * PositionalConstraint **required**
          * SearchString **required**
          * TextTransformations **required**
        * GeoMatchStatement
          * CountryCodes
          * ForwardedIPConfig
        * IPSetReferenceStatement
          * ARN **required**
          * IPSetForwardedIPConfig
        * ManagedRuleGroupStatement
          * ExcludedRules
          * Name **required**
          * VendorName **required**
        * NotStatement
          * Statement **required**
        * OrStatement
          * Statements **required**
        * RateBasedStatement
          * AggregateKeyType **required**
          * ForwardedIPConfig
          * Limit **required**
          * ScopeDownStatement
        * RegexPatternSetReferenceStatement
          * ARN **required**
          * FieldToMatch **required**
          * TextTransformations **required**
        * RuleGroupReferenceStatement
          * ARN **required**
          * ExcludedRules
        * SizeConstraintStatement
          * ComparisonOperator **required**
          * FieldToMatch **required**
          * Size **required**
          * TextTransformations **required**
        * SqliMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
        * XssMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
    * RegexPatternSetReferenceStatement
      * ARN **required**
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * RuleGroupReferenceStatement
      * ARN **required**
      * ExcludedRules
        * items [ExcludedRule](#excludedrule)
    * SizeConstraintStatement
      * ComparisonOperator **required**
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * Size **required**
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * SqliMatchStatement
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * XssMatchStatement
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)

### RateBasedStatementAggregateKeyType
* RateBasedStatementAggregateKeyType `string` (values: IP, FORWARDED_IP)

### RateBasedStatementManagedKeysIPSet
* RateBasedStatementManagedKeysIPSet `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The set of IP addresses that are currently blocked for a rate-based statement.</p>
  * Addresses
    * items [IPAddress](#ipaddress)
  * IPAddressVersion [IPAddressVersion](#ipaddressversion)

### RateLimit
* RateLimit `integer`

### RedactedFields
* RedactedFields `array`
  * items [FieldToMatch](#fieldtomatch)

### Regex
* Regex `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A single regular expression. This is used in a <a>RegexPatternSet</a>.</p>
  * RegexString

### RegexPatternSet
* RegexPatternSet `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Contains one or more regular expressions. </p> <p>AWS WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p>
  * ARN
  * Description
  * Id
  * Name
  * RegularExpressionList
    * items [Regex](#regex)

### RegexPatternSetReferenceStatement
* RegexPatternSetReferenceStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p> <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
  * ARN **required**
  * FieldToMatch **required**
    * AllQueryArguments
    * Body
    * Method
    * QueryString
    * SingleHeader
      * Name **required**
    * SingleQueryArgument
      * Name **required**
    * UriPath
  * TextTransformations **required**
    * items [TextTransformation](#texttransformation)

### RegexPatternSetSummaries
* RegexPatternSetSummaries `array`
  * items [RegexPatternSetSummary](#regexpatternsetsummary)

### RegexPatternSetSummary
* RegexPatternSetSummary `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p>
  * ARN
  * Description
  * Id
  * LockToken
  * Name

### RegexPatternString
* RegexPatternString `string`

### RegularExpressionList
* RegularExpressionList `array`
  * items [Regex](#regex)

### ResourceArn
* ResourceArn `string`

### ResourceArns
* ResourceArns `array`
  * items [ResourceArn](#resourcearn)

### ResourceType
* ResourceType `string` (values: APPLICATION_LOAD_BALANCER, API_GATEWAY, APPSYNC)

### Rule
* Rule `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A single rule, which you can use in a <a>WebACL</a> or <a>RuleGroup</a> to identify web requests that you want to allow, block, or count. Each rule includes one top-level <a>Statement</a> that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them. </p>
  * Action
    * Allow
    * Block
    * Count
  * Name **required**
  * OverrideAction
    * Count
    * None
  * Priority **required**
  * Statement **required**
    * AndStatement
      * Statements **required**
        * items [Statement](#statement)
    * ByteMatchStatement
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * PositionalConstraint **required**
      * SearchString **required**
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * GeoMatchStatement
      * CountryCodes
        * items [CountryCode](#countrycode)
      * ForwardedIPConfig
        * FallbackBehavior **required**
        * HeaderName **required**
    * IPSetReferenceStatement
      * ARN **required**
      * IPSetForwardedIPConfig
        * FallbackBehavior **required**
        * HeaderName **required**
        * Position **required**
    * ManagedRuleGroupStatement
      * ExcludedRules
        * items [ExcludedRule](#excludedrule)
      * Name **required**
      * VendorName **required**
    * NotStatement
      * Statement **required**
        * AndStatement
          * Statements **required**
        * ByteMatchStatement
          * FieldToMatch **required**
          * PositionalConstraint **required**
          * SearchString **required**
          * TextTransformations **required**
        * GeoMatchStatement
          * CountryCodes
          * ForwardedIPConfig
        * IPSetReferenceStatement
          * ARN **required**
          * IPSetForwardedIPConfig
        * ManagedRuleGroupStatement
          * ExcludedRules
          * Name **required**
          * VendorName **required**
        * NotStatement
          * Statement **required**
        * OrStatement
          * Statements **required**
        * RateBasedStatement
          * AggregateKeyType **required**
          * ForwardedIPConfig
          * Limit **required**
          * ScopeDownStatement
        * RegexPatternSetReferenceStatement
          * ARN **required**
          * FieldToMatch **required**
          * TextTransformations **required**
        * RuleGroupReferenceStatement
          * ARN **required**
          * ExcludedRules
        * SizeConstraintStatement
          * ComparisonOperator **required**
          * FieldToMatch **required**
          * Size **required**
          * TextTransformations **required**
        * SqliMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
        * XssMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
    * OrStatement
      * Statements **required**
        * items [Statement](#statement)
    * RateBasedStatement
      * AggregateKeyType **required**
      * ForwardedIPConfig
        * FallbackBehavior **required**
        * HeaderName **required**
      * Limit **required**
      * ScopeDownStatement
        * AndStatement
          * Statements **required**
        * ByteMatchStatement
          * FieldToMatch **required**
          * PositionalConstraint **required**
          * SearchString **required**
          * TextTransformations **required**
        * GeoMatchStatement
          * CountryCodes
          * ForwardedIPConfig
        * IPSetReferenceStatement
          * ARN **required**
          * IPSetForwardedIPConfig
        * ManagedRuleGroupStatement
          * ExcludedRules
          * Name **required**
          * VendorName **required**
        * NotStatement
          * Statement **required**
        * OrStatement
          * Statements **required**
        * RateBasedStatement
          * AggregateKeyType **required**
          * ForwardedIPConfig
          * Limit **required**
          * ScopeDownStatement
        * RegexPatternSetReferenceStatement
          * ARN **required**
          * FieldToMatch **required**
          * TextTransformations **required**
        * RuleGroupReferenceStatement
          * ARN **required**
          * ExcludedRules
        * SizeConstraintStatement
          * ComparisonOperator **required**
          * FieldToMatch **required**
          * Size **required**
          * TextTransformations **required**
        * SqliMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
        * XssMatchStatement
          * FieldToMatch **required**
          * TextTransformations **required**
    * RegexPatternSetReferenceStatement
      * ARN **required**
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * RuleGroupReferenceStatement
      * ARN **required**
      * ExcludedRules
        * items [ExcludedRule](#excludedrule)
    * SizeConstraintStatement
      * ComparisonOperator **required**
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * Size **required**
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * SqliMatchStatement
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
    * XssMatchStatement
      * FieldToMatch **required**
        * AllQueryArguments
        * Body
        * Method
        * QueryString
        * SingleHeader
          * Name **required**
        * SingleQueryArgument
          * Name **required**
        * UriPath
      * TextTransformations **required**
        * items [TextTransformation](#texttransformation)
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

### RuleAction
* RuleAction `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. </p>
  * Allow
  * Block
  * Count

### RuleGroup
* RuleGroup `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
  * ARN **required**
  * Capacity **required**
  * Description
  * Id **required**
  * Name **required**
  * Rules
    * items [Rule](#rule)
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

### RuleGroupReferenceStatement
* RuleGroupReferenceStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p> <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
  * ARN **required**
  * ExcludedRules
    * items [ExcludedRule](#excludedrule)

### RuleGroupSummaries
* RuleGroupSummaries `array`
  * items [RuleGroupSummary](#rulegroupsummary)

### RuleGroupSummary
* RuleGroupSummary `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
  * ARN
  * Description
  * Id
  * LockToken
  * Name

### RulePriority
* RulePriority `integer`

### RuleSummaries
* RuleSummaries `array`
  * items [RuleSummary](#rulesummary)

### RuleSummary
* RuleSummary `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
  * Action [RuleAction](#ruleaction)
  * Name

### Rules
* Rules `array`
  * items [Rule](#rule)

### SampleWeight
* SampleWeight `integer`

### SampledHTTPRequest
* SampledHTTPRequest `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code> objects.</p>
  * Action
  * Request **required**
    * ClientIP
    * Country
    * HTTPVersion
    * Headers
      * items [HTTPHeader](#httpheader)
    * Method
    * URI
  * RuleNameWithinRuleGroup
  * Timestamp
  * Weight **required**

### SampledHTTPRequests
* SampledHTTPRequests `array`
  * items [SampledHTTPRequest](#sampledhttprequest)

### Scope
* Scope `string` (values: CLOUDFRONT, REGIONAL)

### SearchString
* SearchString `string`

### SingleHeader
* SingleHeader `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>One of the headers in a web request, identified by name, for example, <code>User-Agent</code> or <code>Referer</code>. This setting isn't case sensitive.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
  * Name **required**

### SingleQueryArgument
* SingleQueryArgument `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>One query argument in a web request, identified by name, for example <i>UserName</i> or <i>SalesRegion</i>. The name can be up to 30 characters long and isn't case sensitive. </p>
  * Name **required**

### Size
* Size `integer`

### SizeConstraintStatement
* SizeConstraintStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (&gt;) or less than (&lt;). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p> <p>If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you can create a size constraint condition and block requests that have a request body greater than 8192 bytes.</p> <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>
  * ComparisonOperator **required**
  * FieldToMatch **required**
    * AllQueryArguments
    * Body
    * Method
    * QueryString
    * SingleHeader
      * Name **required**
    * SingleQueryArgument
      * Name **required**
    * UriPath
  * Size **required**
  * TextTransformations **required**
    * items [TextTransformation](#texttransformation)

### SqliMatchStatement
* SqliMatchStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Attackers sometimes insert malicious SQL code into web requests in an effort to extract data from your database. To allow or block web requests that appear to contain malicious SQL code, create one or more SQL injection match conditions. An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. Later in the process, when you create a web ACL, you specify whether to allow or block requests that appear to contain malicious SQL code.</p>
  * FieldToMatch **required**
    * AllQueryArguments
    * Body
    * Method
    * QueryString
    * SingleHeader
      * Name **required**
    * SingleQueryArgument
      * Name **required**
    * UriPath
  * TextTransformations **required**
    * items [TextTransformation](#texttransformation)

### Statement
* Statement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The processing guidance for a <a>Rule</a>, used by AWS WAF to determine whether a web request matches the rule. </p>
  * AndStatement
    * Statements **required**
      * items [Statement](#statement)
  * ByteMatchStatement
    * FieldToMatch **required**
      * AllQueryArguments
      * Body
      * Method
      * QueryString
      * SingleHeader
        * Name **required**
      * SingleQueryArgument
        * Name **required**
      * UriPath
    * PositionalConstraint **required**
    * SearchString **required**
    * TextTransformations **required**
      * items [TextTransformation](#texttransformation)
  * GeoMatchStatement
    * CountryCodes
      * items [CountryCode](#countrycode)
    * ForwardedIPConfig
      * FallbackBehavior **required**
      * HeaderName **required**
  * IPSetReferenceStatement
    * ARN **required**
    * IPSetForwardedIPConfig
      * FallbackBehavior **required**
      * HeaderName **required**
      * Position **required**
  * ManagedRuleGroupStatement
    * ExcludedRules
      * items [ExcludedRule](#excludedrule)
    * Name **required**
    * VendorName **required**
  * NotStatement
    * Statement **required**
      * AndStatement
        * Statements **required**
          * items [Statement](#statement)
      * ByteMatchStatement
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * PositionalConstraint **required**
        * SearchString **required**
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
      * GeoMatchStatement
        * CountryCodes
          * items [CountryCode](#countrycode)
        * ForwardedIPConfig
          * FallbackBehavior **required**
          * HeaderName **required**
      * IPSetReferenceStatement
        * ARN **required**
        * IPSetForwardedIPConfig
          * FallbackBehavior **required**
          * HeaderName **required**
          * Position **required**
      * ManagedRuleGroupStatement
        * ExcludedRules
          * items [ExcludedRule](#excludedrule)
        * Name **required**
        * VendorName **required**
      * NotStatement
        * Statement **required**
          * AndStatement
          * ByteMatchStatement
          * GeoMatchStatement
          * IPSetReferenceStatement
          * ManagedRuleGroupStatement
          * NotStatement
          * OrStatement
          * RateBasedStatement
          * RegexPatternSetReferenceStatement
          * RuleGroupReferenceStatement
          * SizeConstraintStatement
          * SqliMatchStatement
          * XssMatchStatement
      * OrStatement
        * Statements **required**
          * items [Statement](#statement)
      * RateBasedStatement
        * AggregateKeyType **required**
        * ForwardedIPConfig
          * FallbackBehavior **required**
          * HeaderName **required**
        * Limit **required**
        * ScopeDownStatement
          * AndStatement
          * ByteMatchStatement
          * GeoMatchStatement
          * IPSetReferenceStatement
          * ManagedRuleGroupStatement
          * NotStatement
          * OrStatement
          * RateBasedStatement
          * RegexPatternSetReferenceStatement
          * RuleGroupReferenceStatement
          * SizeConstraintStatement
          * SqliMatchStatement
          * XssMatchStatement
      * RegexPatternSetReferenceStatement
        * ARN **required**
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
      * RuleGroupReferenceStatement
        * ARN **required**
        * ExcludedRules
          * items [ExcludedRule](#excludedrule)
      * SizeConstraintStatement
        * ComparisonOperator **required**
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * Size **required**
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
      * SqliMatchStatement
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
      * XssMatchStatement
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
  * OrStatement
    * Statements **required**
      * items [Statement](#statement)
  * RateBasedStatement
    * AggregateKeyType **required**
    * ForwardedIPConfig
      * FallbackBehavior **required**
      * HeaderName **required**
    * Limit **required**
    * ScopeDownStatement
      * AndStatement
        * Statements **required**
          * items [Statement](#statement)
      * ByteMatchStatement
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * PositionalConstraint **required**
        * SearchString **required**
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
      * GeoMatchStatement
        * CountryCodes
          * items [CountryCode](#countrycode)
        * ForwardedIPConfig
          * FallbackBehavior **required**
          * HeaderName **required**
      * IPSetReferenceStatement
        * ARN **required**
        * IPSetForwardedIPConfig
          * FallbackBehavior **required**
          * HeaderName **required**
          * Position **required**
      * ManagedRuleGroupStatement
        * ExcludedRules
          * items [ExcludedRule](#excludedrule)
        * Name **required**
        * VendorName **required**
      * NotStatement
        * Statement **required**
          * AndStatement
          * ByteMatchStatement
          * GeoMatchStatement
          * IPSetReferenceStatement
          * ManagedRuleGroupStatement
          * NotStatement
          * OrStatement
          * RateBasedStatement
          * RegexPatternSetReferenceStatement
          * RuleGroupReferenceStatement
          * SizeConstraintStatement
          * SqliMatchStatement
          * XssMatchStatement
      * OrStatement
        * Statements **required**
          * items [Statement](#statement)
      * RateBasedStatement
        * AggregateKeyType **required**
        * ForwardedIPConfig
          * FallbackBehavior **required**
          * HeaderName **required**
        * Limit **required**
        * ScopeDownStatement
          * AndStatement
          * ByteMatchStatement
          * GeoMatchStatement
          * IPSetReferenceStatement
          * ManagedRuleGroupStatement
          * NotStatement
          * OrStatement
          * RateBasedStatement
          * RegexPatternSetReferenceStatement
          * RuleGroupReferenceStatement
          * SizeConstraintStatement
          * SqliMatchStatement
          * XssMatchStatement
      * RegexPatternSetReferenceStatement
        * ARN **required**
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
      * RuleGroupReferenceStatement
        * ARN **required**
        * ExcludedRules
          * items [ExcludedRule](#excludedrule)
      * SizeConstraintStatement
        * ComparisonOperator **required**
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * Size **required**
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
      * SqliMatchStatement
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
      * XssMatchStatement
        * FieldToMatch **required**
          * AllQueryArguments
          * Body
          * Method
          * QueryString
          * SingleHeader
          * SingleQueryArgument
          * UriPath
        * TextTransformations **required**
          * items [TextTransformation](#texttransformation)
  * RegexPatternSetReferenceStatement
    * ARN **required**
    * FieldToMatch **required**
      * AllQueryArguments
      * Body
      * Method
      * QueryString
      * SingleHeader
        * Name **required**
      * SingleQueryArgument
        * Name **required**
      * UriPath
    * TextTransformations **required**
      * items [TextTransformation](#texttransformation)
  * RuleGroupReferenceStatement
    * ARN **required**
    * ExcludedRules
      * items [ExcludedRule](#excludedrule)
  * SizeConstraintStatement
    * ComparisonOperator **required**
    * FieldToMatch **required**
      * AllQueryArguments
      * Body
      * Method
      * QueryString
      * SingleHeader
        * Name **required**
      * SingleQueryArgument
        * Name **required**
      * UriPath
    * Size **required**
    * TextTransformations **required**
      * items [TextTransformation](#texttransformation)
  * SqliMatchStatement
    * FieldToMatch **required**
      * AllQueryArguments
      * Body
      * Method
      * QueryString
      * SingleHeader
        * Name **required**
      * SingleQueryArgument
        * Name **required**
      * UriPath
    * TextTransformations **required**
      * items [TextTransformation](#texttransformation)
  * XssMatchStatement
    * FieldToMatch **required**
      * AllQueryArguments
      * Body
      * Method
      * QueryString
      * SingleHeader
        * Name **required**
      * SingleQueryArgument
        * Name **required**
      * UriPath
    * TextTransformations **required**
      * items [TextTransformation](#texttransformation)

### Statements
* Statements `array`
  * items [Statement](#statement)

### Tag
* Tag `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>You can tag the AWS resources that you manage through AWS WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the AWS WAF console. </p>
  * Key **required**
  * Value **required**

### TagInfoForResource
* TagInfoForResource `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The collection of tagging definitions for an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>You can tag the AWS resources that you manage through AWS WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the AWS WAF console. </p>
  * ResourceARN
  * TagList
    * items [Tag](#tag)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TextTransformation
* TextTransformation `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. </p>
  * Priority **required**
  * Type **required**

### TextTransformationPriority
* TextTransformationPriority `integer`

### TextTransformationType
* TextTransformationType `string` (values: NONE, COMPRESS_WHITE_SPACE, HTML_ENTITY_DECODE, LOWERCASE, CMD_LINE, URL_DECODE)

### TextTransformations
* TextTransformations `array`
  * items [TextTransformation](#texttransformation)

### TimeWindow
* TimeWindow `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request.</p>
  * EndTime **required**
  * StartTime **required**

### Timestamp
* Timestamp `string`

### URIString
* URIString `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateIPSetRequest
* UpdateIPSetRequest `object`
  * Addresses **required**
    * items [IPAddress](#ipaddress)
  * Description
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Scope **required**

### UpdateIPSetResponse
* UpdateIPSetResponse `object`
  * NextLockToken

### UpdateRegexPatternSetRequest
* UpdateRegexPatternSetRequest `object`
  * Description
  * Id **required**
  * LockToken **required**
  * Name **required**
  * RegularExpressionList **required**
    * items [Regex](#regex)
  * Scope **required**

### UpdateRegexPatternSetResponse
* UpdateRegexPatternSetResponse `object`
  * NextLockToken

### UpdateRuleGroupRequest
* UpdateRuleGroupRequest `object`
  * Description
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Rules
    * items [Rule](#rule)
  * Scope **required**
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

### UpdateRuleGroupResponse
* UpdateRuleGroupResponse `object`
  * NextLockToken

### UpdateWebACLRequest
* UpdateWebACLRequest `object`
  * DefaultAction **required**
    * Allow
    * Block
  * Description
  * Id **required**
  * LockToken **required**
  * Name **required**
  * Rules
    * items [Rule](#rule)
  * Scope **required**
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

### UpdateWebACLResponse
* UpdateWebACLResponse `object`
  * NextLockToken

### UriPath
* UriPath `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>

### VendorName
* VendorName `string`

### VisibilityConfig
* VisibilityConfig `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p>
  * CloudWatchMetricsEnabled **required**
  * MetricName **required**
  * SampledRequestsEnabled **required**

### WAFAssociatedItemException


### WAFDuplicateItemException


### WAFInternalErrorException


### WAFInvalidOperationException


### WAFInvalidParameterException


### WAFInvalidPermissionPolicyException


### WAFInvalidResourceException


### WAFLimitsExceededException


### WAFNonexistentItemException


### WAFOptimisticLockException


### WAFServiceLinkedRoleErrorException


### WAFSubscriptionNotFoundException


### WAFTagOperationException


### WAFTagOperationInternalErrorException


### WAFUnavailableEntityException


### WebACL
* WebACL `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, or an AWS AppSync GraphQL API. </p>
  * ARN **required**
  * Capacity
  * DefaultAction **required**
    * Allow
    * Block
  * Description
  * Id **required**
  * ManagedByFirewallManager
  * Name **required**
  * PostProcessFirewallManagerRuleGroups
    * items [FirewallManagerRuleGroup](#firewallmanagerrulegroup)
  * PreProcessFirewallManagerRuleGroups
    * items [FirewallManagerRuleGroup](#firewallmanagerrulegroup)
  * Rules
    * items [Rule](#rule)
  * VisibilityConfig **required**
    * CloudWatchMetricsEnabled **required**
    * MetricName **required**
    * SampledRequestsEnabled **required**

### WebACLSummaries
* WebACLSummaries `array`
  * items [WebACLSummary](#webaclsummary)

### WebACLSummary
* WebACLSummary `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p>
  * ARN
  * Description
  * Id
  * LockToken
  * Name

### XssMatchStatement
* XssMatchStatement `object`: <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. XSS attacks are those where the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers. The XSS match statement provides the location in requests that you want AWS WAF to search and text transformations to use on the search area before AWS WAF searches for character sequences that are likely to be malicious strings. </p>
  * FieldToMatch **required**
    * AllQueryArguments
    * Body
    * Method
    * QueryString
    * SingleHeader
      * Name **required**
    * SingleQueryArgument
      * Name **required**
    * UriPath
  * TextTransformations **required**
    * items [TextTransformation](#texttransformation)


