# @datafire/amazonaws_waf

Client library for AWS WAF

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_waf
```
```js
let amazonaws_waf = require('@datafire/amazonaws_waf').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>This is the <i>AWS WAF Classic API Reference</i> for using AWS WAF Classic with Amazon CloudFront. The AWS WAF Classic actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint <i>waf.amazonaws.com</i>. This guide is for developers who need detailed information about the AWS WAF Classic API actions, data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p>

## Actions

### CreateByteMatchSet



```js
amazonaws_waf.CreateByteMatchSet({
  "Name": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * Name **required**

#### Output
* output [CreateByteMatchSetResponse](#createbytematchsetresponse)

### CreateGeoMatchSet



```js
amazonaws_waf.CreateGeoMatchSet({
  "Name": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * Name **required**

#### Output
* output [CreateGeoMatchSetResponse](#creategeomatchsetresponse)

### CreateIPSet



```js
amazonaws_waf.CreateIPSet({
  "Name": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * Name **required**

#### Output
* output [CreateIPSetResponse](#createipsetresponse)

### CreateRateBasedRule



```js
amazonaws_waf.CreateRateBasedRule({
  "Name": null,
  "MetricName": null,
  "RateKey": null,
  "RateLimit": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * MetricName **required**
  * Name **required**
  * RateKey **required**
  * RateLimit **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateRateBasedRuleResponse](#createratebasedruleresponse)

### CreateRegexMatchSet



```js
amazonaws_waf.CreateRegexMatchSet({
  "Name": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * Name **required**

#### Output
* output [CreateRegexMatchSetResponse](#createregexmatchsetresponse)

### CreateRegexPatternSet



```js
amazonaws_waf.CreateRegexPatternSet({
  "Name": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * Name **required**

#### Output
* output [CreateRegexPatternSetResponse](#createregexpatternsetresponse)

### CreateRule



```js
amazonaws_waf.CreateRule({
  "Name": null,
  "MetricName": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * MetricName **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateRuleResponse](#createruleresponse)

### CreateRuleGroup



```js
amazonaws_waf.CreateRuleGroup({
  "Name": null,
  "MetricName": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * MetricName **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateRuleGroupResponse](#createrulegroupresponse)

### CreateSizeConstraintSet



```js
amazonaws_waf.CreateSizeConstraintSet({
  "Name": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * Name **required**

#### Output
* output [CreateSizeConstraintSetResponse](#createsizeconstraintsetresponse)

### CreateSqlInjectionMatchSet



```js
amazonaws_waf.CreateSqlInjectionMatchSet({
  "Name": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * Name **required**

#### Output
* output [CreateSqlInjectionMatchSetResponse](#createsqlinjectionmatchsetresponse)

### CreateWebACL



```js
amazonaws_waf.CreateWebACL({
  "Name": null,
  "MetricName": null,
  "DefaultAction": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * DefaultAction **required**
    * Type **required**
  * MetricName **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateWebACLResponse](#createwebaclresponse)

### CreateWebACLMigrationStack



```js
amazonaws_waf.CreateWebACLMigrationStack({
  "WebACLId": null,
  "S3BucketName": null,
  "IgnoreUnsupportedType": null
}, context)
```

#### Input
* input `object`
  * IgnoreUnsupportedType **required**
  * S3BucketName **required**
  * WebACLId **required**

#### Output
* output [CreateWebACLMigrationStackResponse](#createwebaclmigrationstackresponse)

### CreateXssMatchSet



```js
amazonaws_waf.CreateXssMatchSet({
  "Name": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * Name **required**

#### Output
* output [CreateXssMatchSetResponse](#createxssmatchsetresponse)

### DeleteByteMatchSet



```js
amazonaws_waf.DeleteByteMatchSet({
  "ByteMatchSetId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ByteMatchSetId **required**
  * ChangeToken **required**

#### Output
* output [DeleteByteMatchSetResponse](#deletebytematchsetresponse)

### DeleteGeoMatchSet



```js
amazonaws_waf.DeleteGeoMatchSet({
  "GeoMatchSetId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * GeoMatchSetId **required**

#### Output
* output [DeleteGeoMatchSetResponse](#deletegeomatchsetresponse)

### DeleteIPSet



```js
amazonaws_waf.DeleteIPSet({
  "IPSetId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * IPSetId **required**

#### Output
* output [DeleteIPSetResponse](#deleteipsetresponse)

### DeleteLoggingConfiguration



```js
amazonaws_waf.DeleteLoggingConfiguration({
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
amazonaws_waf.DeletePermissionPolicy({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [DeletePermissionPolicyResponse](#deletepermissionpolicyresponse)

### DeleteRateBasedRule



```js
amazonaws_waf.DeleteRateBasedRule({
  "RuleId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RuleId **required**

#### Output
* output [DeleteRateBasedRuleResponse](#deleteratebasedruleresponse)

### DeleteRegexMatchSet



```js
amazonaws_waf.DeleteRegexMatchSet({
  "RegexMatchSetId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RegexMatchSetId **required**

#### Output
* output [DeleteRegexMatchSetResponse](#deleteregexmatchsetresponse)

### DeleteRegexPatternSet



```js
amazonaws_waf.DeleteRegexPatternSet({
  "RegexPatternSetId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RegexPatternSetId **required**

#### Output
* output [DeleteRegexPatternSetResponse](#deleteregexpatternsetresponse)

### DeleteRule



```js
amazonaws_waf.DeleteRule({
  "RuleId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RuleId **required**

#### Output
* output [DeleteRuleResponse](#deleteruleresponse)

### DeleteRuleGroup



```js
amazonaws_waf.DeleteRuleGroup({
  "RuleGroupId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RuleGroupId **required**

#### Output
* output [DeleteRuleGroupResponse](#deleterulegroupresponse)

### DeleteSizeConstraintSet



```js
amazonaws_waf.DeleteSizeConstraintSet({
  "SizeConstraintSetId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * SizeConstraintSetId **required**

#### Output
* output [DeleteSizeConstraintSetResponse](#deletesizeconstraintsetresponse)

### DeleteSqlInjectionMatchSet



```js
amazonaws_waf.DeleteSqlInjectionMatchSet({
  "SqlInjectionMatchSetId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * SqlInjectionMatchSetId **required**

#### Output
* output [DeleteSqlInjectionMatchSetResponse](#deletesqlinjectionmatchsetresponse)

### DeleteWebACL



```js
amazonaws_waf.DeleteWebACL({
  "WebACLId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * WebACLId **required**

#### Output
* output [DeleteWebACLResponse](#deletewebaclresponse)

### DeleteXssMatchSet



```js
amazonaws_waf.DeleteXssMatchSet({
  "XssMatchSetId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * XssMatchSetId **required**

#### Output
* output [DeleteXssMatchSetResponse](#deletexssmatchsetresponse)

### GetByteMatchSet



```js
amazonaws_waf.GetByteMatchSet({
  "ByteMatchSetId": null
}, context)
```

#### Input
* input `object`
  * ByteMatchSetId **required**

#### Output
* output [GetByteMatchSetResponse](#getbytematchsetresponse)

### GetChangeToken



```js
amazonaws_waf.GetChangeToken({}, context)
```

#### Input
* input `object`

#### Output
* output [GetChangeTokenResponse](#getchangetokenresponse)

### GetChangeTokenStatus



```js
amazonaws_waf.GetChangeTokenStatus({
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**

#### Output
* output [GetChangeTokenStatusResponse](#getchangetokenstatusresponse)

### GetGeoMatchSet



```js
amazonaws_waf.GetGeoMatchSet({
  "GeoMatchSetId": null
}, context)
```

#### Input
* input `object`
  * GeoMatchSetId **required**

#### Output
* output [GetGeoMatchSetResponse](#getgeomatchsetresponse)

### GetIPSet



```js
amazonaws_waf.GetIPSet({
  "IPSetId": null
}, context)
```

#### Input
* input `object`
  * IPSetId **required**

#### Output
* output [GetIPSetResponse](#getipsetresponse)

### GetLoggingConfiguration



```js
amazonaws_waf.GetLoggingConfiguration({
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
amazonaws_waf.GetPermissionPolicy({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [GetPermissionPolicyResponse](#getpermissionpolicyresponse)

### GetRateBasedRule



```js
amazonaws_waf.GetRateBasedRule({
  "RuleId": null
}, context)
```

#### Input
* input `object`
  * RuleId **required**

#### Output
* output [GetRateBasedRuleResponse](#getratebasedruleresponse)

### GetRateBasedRuleManagedKeys



```js
amazonaws_waf.GetRateBasedRuleManagedKeys({
  "RuleId": null
}, context)
```

#### Input
* input `object`
  * NextMarker
  * RuleId **required**

#### Output
* output [GetRateBasedRuleManagedKeysResponse](#getratebasedrulemanagedkeysresponse)

### GetRegexMatchSet



```js
amazonaws_waf.GetRegexMatchSet({
  "RegexMatchSetId": null
}, context)
```

#### Input
* input `object`
  * RegexMatchSetId **required**

#### Output
* output [GetRegexMatchSetResponse](#getregexmatchsetresponse)

### GetRegexPatternSet



```js
amazonaws_waf.GetRegexPatternSet({
  "RegexPatternSetId": null
}, context)
```

#### Input
* input `object`
  * RegexPatternSetId **required**

#### Output
* output [GetRegexPatternSetResponse](#getregexpatternsetresponse)

### GetRule



```js
amazonaws_waf.GetRule({
  "RuleId": null
}, context)
```

#### Input
* input `object`
  * RuleId **required**

#### Output
* output [GetRuleResponse](#getruleresponse)

### GetRuleGroup



```js
amazonaws_waf.GetRuleGroup({
  "RuleGroupId": null
}, context)
```

#### Input
* input `object`
  * RuleGroupId **required**

#### Output
* output [GetRuleGroupResponse](#getrulegroupresponse)

### GetSampledRequests



```js
amazonaws_waf.GetSampledRequests({
  "WebAclId": null,
  "RuleId": null,
  "TimeWindow": null,
  "MaxItems": null
}, context)
```

#### Input
* input `object`
  * MaxItems **required**
  * RuleId **required**
  * TimeWindow **required**
    * EndTime **required**
    * StartTime **required**
  * WebAclId **required**

#### Output
* output [GetSampledRequestsResponse](#getsampledrequestsresponse)

### GetSizeConstraintSet



```js
amazonaws_waf.GetSizeConstraintSet({
  "SizeConstraintSetId": null
}, context)
```

#### Input
* input `object`
  * SizeConstraintSetId **required**

#### Output
* output [GetSizeConstraintSetResponse](#getsizeconstraintsetresponse)

### GetSqlInjectionMatchSet



```js
amazonaws_waf.GetSqlInjectionMatchSet({
  "SqlInjectionMatchSetId": null
}, context)
```

#### Input
* input `object`
  * SqlInjectionMatchSetId **required**

#### Output
* output [GetSqlInjectionMatchSetResponse](#getsqlinjectionmatchsetresponse)

### GetWebACL



```js
amazonaws_waf.GetWebACL({
  "WebACLId": null
}, context)
```

#### Input
* input `object`
  * WebACLId **required**

#### Output
* output [GetWebACLResponse](#getwebaclresponse)

### GetXssMatchSet



```js
amazonaws_waf.GetXssMatchSet({
  "XssMatchSetId": null
}, context)
```

#### Input
* input `object`
  * XssMatchSetId **required**

#### Output
* output [GetXssMatchSetResponse](#getxssmatchsetresponse)

### ListActivatedRulesInRuleGroup



```js
amazonaws_waf.ListActivatedRulesInRuleGroup({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker
  * RuleGroupId

#### Output
* output [ListActivatedRulesInRuleGroupResponse](#listactivatedrulesinrulegroupresponse)

### ListByteMatchSets



```js
amazonaws_waf.ListByteMatchSets({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListByteMatchSetsResponse](#listbytematchsetsresponse)

### ListGeoMatchSets



```js
amazonaws_waf.ListGeoMatchSets({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListGeoMatchSetsResponse](#listgeomatchsetsresponse)

### ListIPSets



```js
amazonaws_waf.ListIPSets({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListIPSetsResponse](#listipsetsresponse)

### ListLoggingConfigurations



```js
amazonaws_waf.ListLoggingConfigurations({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListLoggingConfigurationsResponse](#listloggingconfigurationsresponse)

### ListRateBasedRules



```js
amazonaws_waf.ListRateBasedRules({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListRateBasedRulesResponse](#listratebasedrulesresponse)

### ListRegexMatchSets



```js
amazonaws_waf.ListRegexMatchSets({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListRegexMatchSetsResponse](#listregexmatchsetsresponse)

### ListRegexPatternSets



```js
amazonaws_waf.ListRegexPatternSets({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListRegexPatternSetsResponse](#listregexpatternsetsresponse)

### ListRuleGroups



```js
amazonaws_waf.ListRuleGroups({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListRuleGroupsResponse](#listrulegroupsresponse)

### ListRules



```js
amazonaws_waf.ListRules({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListRulesResponse](#listrulesresponse)

### ListSizeConstraintSets



```js
amazonaws_waf.ListSizeConstraintSets({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListSizeConstraintSetsResponse](#listsizeconstraintsetsresponse)

### ListSqlInjectionMatchSets



```js
amazonaws_waf.ListSqlInjectionMatchSets({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListSqlInjectionMatchSetsResponse](#listsqlinjectionmatchsetsresponse)

### ListSubscribedRuleGroups



```js
amazonaws_waf.ListSubscribedRuleGroups({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListSubscribedRuleGroupsResponse](#listsubscribedrulegroupsresponse)

### ListTagsForResource



```js
amazonaws_waf.ListTagsForResource({
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
amazonaws_waf.ListWebACLs({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListWebACLsResponse](#listwebaclsresponse)

### ListXssMatchSets



```js
amazonaws_waf.ListXssMatchSets({}, context)
```

#### Input
* input `object`
  * Limit
  * NextMarker

#### Output
* output [ListXssMatchSetsResponse](#listxssmatchsetsresponse)

### PutLoggingConfiguration



```js
amazonaws_waf.PutLoggingConfiguration({
  "LoggingConfiguration": null
}, context)
```

#### Input
* input `object`
  * LoggingConfiguration **required**
    * LogDestinationConfigs **required**
      * items [ResourceArn](#resourcearn)
    * RedactedFields
      * items [FieldToMatch](#fieldtomatch)
    * ResourceArn **required**

#### Output
* output [PutLoggingConfigurationResponse](#putloggingconfigurationresponse)

### PutPermissionPolicy



```js
amazonaws_waf.PutPermissionPolicy({
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
amazonaws_waf.TagResource({
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
amazonaws_waf.UntagResource({
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

### UpdateByteMatchSet



```js
amazonaws_waf.UpdateByteMatchSet({
  "ByteMatchSetId": null,
  "ChangeToken": null,
  "Updates": null
}, context)
```

#### Input
* input `object`
  * ByteMatchSetId **required**
  * ChangeToken **required**
  * Updates **required**
    * items [ByteMatchSetUpdate](#bytematchsetupdate)

#### Output
* output [UpdateByteMatchSetResponse](#updatebytematchsetresponse)

### UpdateGeoMatchSet



```js
amazonaws_waf.UpdateGeoMatchSet({
  "GeoMatchSetId": null,
  "ChangeToken": null,
  "Updates": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * GeoMatchSetId **required**
  * Updates **required**
    * items [GeoMatchSetUpdate](#geomatchsetupdate)

#### Output
* output [UpdateGeoMatchSetResponse](#updategeomatchsetresponse)

### UpdateIPSet



```js
amazonaws_waf.UpdateIPSet({
  "IPSetId": null,
  "ChangeToken": null,
  "Updates": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * IPSetId **required**
  * Updates **required**
    * items [IPSetUpdate](#ipsetupdate)

#### Output
* output [UpdateIPSetResponse](#updateipsetresponse)

### UpdateRateBasedRule



```js
amazonaws_waf.UpdateRateBasedRule({
  "RuleId": null,
  "ChangeToken": null,
  "Updates": null,
  "RateLimit": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RateLimit **required**
  * RuleId **required**
  * Updates **required**
    * items [RuleUpdate](#ruleupdate)

#### Output
* output [UpdateRateBasedRuleResponse](#updateratebasedruleresponse)

### UpdateRegexMatchSet



```js
amazonaws_waf.UpdateRegexMatchSet({
  "RegexMatchSetId": null,
  "Updates": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RegexMatchSetId **required**
  * Updates **required**
    * items [RegexMatchSetUpdate](#regexmatchsetupdate)

#### Output
* output [UpdateRegexMatchSetResponse](#updateregexmatchsetresponse)

### UpdateRegexPatternSet



```js
amazonaws_waf.UpdateRegexPatternSet({
  "RegexPatternSetId": null,
  "Updates": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RegexPatternSetId **required**
  * Updates **required**
    * items [RegexPatternSetUpdate](#regexpatternsetupdate)

#### Output
* output [UpdateRegexPatternSetResponse](#updateregexpatternsetresponse)

### UpdateRule



```js
amazonaws_waf.UpdateRule({
  "RuleId": null,
  "ChangeToken": null,
  "Updates": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RuleId **required**
  * Updates **required**
    * items [RuleUpdate](#ruleupdate)

#### Output
* output [UpdateRuleResponse](#updateruleresponse)

### UpdateRuleGroup



```js
amazonaws_waf.UpdateRuleGroup({
  "RuleGroupId": null,
  "Updates": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * RuleGroupId **required**
  * Updates **required**
    * items [RuleGroupUpdate](#rulegroupupdate)

#### Output
* output [UpdateRuleGroupResponse](#updaterulegroupresponse)

### UpdateSizeConstraintSet



```js
amazonaws_waf.UpdateSizeConstraintSet({
  "SizeConstraintSetId": null,
  "ChangeToken": null,
  "Updates": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * SizeConstraintSetId **required**
  * Updates **required**
    * items [SizeConstraintSetUpdate](#sizeconstraintsetupdate)

#### Output
* output [UpdateSizeConstraintSetResponse](#updatesizeconstraintsetresponse)

### UpdateSqlInjectionMatchSet



```js
amazonaws_waf.UpdateSqlInjectionMatchSet({
  "SqlInjectionMatchSetId": null,
  "ChangeToken": null,
  "Updates": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * SqlInjectionMatchSetId **required**
  * Updates **required**
    * items [SqlInjectionMatchSetUpdate](#sqlinjectionmatchsetupdate)

#### Output
* output [UpdateSqlInjectionMatchSetResponse](#updatesqlinjectionmatchsetresponse)

### UpdateWebACL



```js
amazonaws_waf.UpdateWebACL({
  "WebACLId": null,
  "ChangeToken": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * DefaultAction
    * Type **required**
  * Updates
    * items [WebACLUpdate](#webaclupdate)
  * WebACLId **required**

#### Output
* output [UpdateWebACLResponse](#updatewebaclresponse)

### UpdateXssMatchSet



```js
amazonaws_waf.UpdateXssMatchSet({
  "XssMatchSetId": null,
  "ChangeToken": null,
  "Updates": null
}, context)
```

#### Input
* input `object`
  * ChangeToken **required**
  * Updates **required**
    * items [XssMatchSetUpdate](#xssmatchsetupdate)
  * XssMatchSetId **required**

#### Output
* output [UpdateXssMatchSetResponse](#updatexssmatchsetresponse)



## Definitions

### Action
* Action `string`

### ActivatedRule
* ActivatedRule `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>
  * Action
    * Type **required**
  * ExcludedRules
    * items [ExcludedRule](#excludedrule)
  * OverrideAction
    * Type **required**
  * Priority **required**
  * RuleId **required**
  * Type

### ActivatedRules
* ActivatedRules `array`
  * items [ActivatedRule](#activatedrule)

### ByteMatchSet
* ByteMatchSet `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p>
  * ByteMatchSetId **required**
  * ByteMatchTuples **required**
    * items [ByteMatchTuple](#bytematchtuple)
  * Name

### ByteMatchSetSummaries
* ByteMatchSetSummaries `array`
  * items [ByteMatchSetSummary](#bytematchsetsummary)

### ByteMatchSetSummary
* ByteMatchSetSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and <code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.</p>
  * ByteMatchSetId **required**
  * Name **required**

### ByteMatchSetUpdate
* ByteMatchSetUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p>
  * Action **required**
  * ByteMatchTuple **required**
    * FieldToMatch **required**
      * Data
      * Type **required**
    * PositionalConstraint **required**
    * TargetString **required**
    * TextTransformation **required**

### ByteMatchSetUpdates
* ByteMatchSetUpdates `array`
  * items [ByteMatchSetUpdate](#bytematchsetupdate)

### ByteMatchTargetString
* ByteMatchTargetString `string`

### ByteMatchTuple
* ByteMatchTuple `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>
  * FieldToMatch **required**
    * Data
    * Type **required**
  * PositionalConstraint **required**
  * TargetString **required**
  * TextTransformation **required**

### ByteMatchTuples
* ByteMatchTuples `array`
  * items [ByteMatchTuple](#bytematchtuple)

### ChangeAction
* ChangeAction `string` (values: INSERT, DELETE)

### ChangeToken
* ChangeToken `string`

### ChangeTokenStatus
* ChangeTokenStatus `string` (values: PROVISIONED, PENDING, INSYNC)

### ComparisonOperator
* ComparisonOperator `string` (values: EQ, NE, LE, LT, GE, GT)

### Country
* Country `string`

### CreateByteMatchSetRequest
* CreateByteMatchSetRequest `object`
  * ChangeToken **required**
  * Name **required**

### CreateByteMatchSetResponse
* CreateByteMatchSetResponse `object`
  * ByteMatchSet
    * ByteMatchSetId **required**
    * ByteMatchTuples **required**
      * items [ByteMatchTuple](#bytematchtuple)
    * Name
  * ChangeToken

### CreateGeoMatchSetRequest
* CreateGeoMatchSetRequest `object`
  * ChangeToken **required**
  * Name **required**

### CreateGeoMatchSetResponse
* CreateGeoMatchSetResponse `object`
  * ChangeToken
  * GeoMatchSet
    * GeoMatchConstraints **required**
      * items [GeoMatchConstraint](#geomatchconstraint)
    * GeoMatchSetId **required**
    * Name

### CreateIPSetRequest
* CreateIPSetRequest `object`
  * ChangeToken **required**
  * Name **required**

### CreateIPSetResponse
* CreateIPSetResponse `object`
  * ChangeToken
  * IPSet
    * IPSetDescriptors **required**
      * items [IPSetDescriptor](#ipsetdescriptor)
    * IPSetId **required**
    * Name

### CreateRateBasedRuleRequest
* CreateRateBasedRuleRequest `object`
  * ChangeToken **required**
  * MetricName **required**
  * Name **required**
  * RateKey **required**
  * RateLimit **required**
  * Tags
    * items [Tag](#tag)

### CreateRateBasedRuleResponse
* CreateRateBasedRuleResponse `object`
  * ChangeToken
  * Rule
    * MatchPredicates **required**
      * items [Predicate](#predicate)
    * MetricName
    * Name
    * RateKey **required**
    * RateLimit **required**
    * RuleId **required**

### CreateRegexMatchSetRequest
* CreateRegexMatchSetRequest `object`
  * ChangeToken **required**
  * Name **required**

### CreateRegexMatchSetResponse
* CreateRegexMatchSetResponse `object`
  * ChangeToken
  * RegexMatchSet
    * Name
    * RegexMatchSetId
    * RegexMatchTuples
      * items [RegexMatchTuple](#regexmatchtuple)

### CreateRegexPatternSetRequest
* CreateRegexPatternSetRequest `object`
  * ChangeToken **required**
  * Name **required**

### CreateRegexPatternSetResponse
* CreateRegexPatternSetResponse `object`
  * ChangeToken
  * RegexPatternSet
    * Name
    * RegexPatternSetId **required**
    * RegexPatternStrings **required**
      * items [RegexPatternString](#regexpatternstring)

### CreateRuleGroupRequest
* CreateRuleGroupRequest `object`
  * ChangeToken **required**
  * MetricName **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateRuleGroupResponse
* CreateRuleGroupResponse `object`
  * ChangeToken
  * RuleGroup
    * MetricName
    * Name
    * RuleGroupId **required**

### CreateRuleRequest
* CreateRuleRequest `object`
  * ChangeToken **required**
  * MetricName **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateRuleResponse
* CreateRuleResponse `object`
  * ChangeToken
  * Rule
    * MetricName
    * Name
    * Predicates **required**
      * items [Predicate](#predicate)
    * RuleId **required**

### CreateSizeConstraintSetRequest
* CreateSizeConstraintSetRequest `object`
  * ChangeToken **required**
  * Name **required**

### CreateSizeConstraintSetResponse
* CreateSizeConstraintSetResponse `object`
  * ChangeToken
  * SizeConstraintSet
    * Name
    * SizeConstraintSetId **required**
    * SizeConstraints **required**
      * items [SizeConstraint](#sizeconstraint)

### CreateSqlInjectionMatchSetRequest
* CreateSqlInjectionMatchSetRequest `object`: A request to create a <a>SqlInjectionMatchSet</a>.
  * ChangeToken **required**
  * Name **required**

### CreateSqlInjectionMatchSetResponse
* CreateSqlInjectionMatchSetResponse `object`: The response to a <code>CreateSqlInjectionMatchSet</code> request.
  * ChangeToken
  * SqlInjectionMatchSet
    * Name
    * SqlInjectionMatchSetId **required**
    * SqlInjectionMatchTuples **required**
      * items [SqlInjectionMatchTuple](#sqlinjectionmatchtuple)

### CreateWebACLMigrationStackRequest
* CreateWebACLMigrationStackRequest `object`
  * IgnoreUnsupportedType **required**
  * S3BucketName **required**
  * WebACLId **required**

### CreateWebACLMigrationStackResponse
* CreateWebACLMigrationStackResponse `object`
  * S3ObjectUrl **required**

### CreateWebACLRequest
* CreateWebACLRequest `object`
  * ChangeToken **required**
  * DefaultAction **required**
    * Type **required**
  * MetricName **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateWebACLResponse
* CreateWebACLResponse `object`
  * ChangeToken
  * WebACL
    * DefaultAction **required**
      * Type **required**
    * MetricName
    * Name
    * Rules **required**
      * items [ActivatedRule](#activatedrule)
    * WebACLArn
    * WebACLId **required**

### CreateXssMatchSetRequest
* CreateXssMatchSetRequest `object`: A request to create an <a>XssMatchSet</a>.
  * ChangeToken **required**
  * Name **required**

### CreateXssMatchSetResponse
* CreateXssMatchSetResponse `object`: The response to a <code>CreateXssMatchSet</code> request.
  * ChangeToken
  * XssMatchSet
    * Name
    * XssMatchSetId **required**
    * XssMatchTuples **required**
      * items [XssMatchTuple](#xssmatchtuple)

### DeleteByteMatchSetRequest
* DeleteByteMatchSetRequest `object`
  * ByteMatchSetId **required**
  * ChangeToken **required**

### DeleteByteMatchSetResponse
* DeleteByteMatchSetResponse `object`
  * ChangeToken

### DeleteGeoMatchSetRequest
* DeleteGeoMatchSetRequest `object`
  * ChangeToken **required**
  * GeoMatchSetId **required**

### DeleteGeoMatchSetResponse
* DeleteGeoMatchSetResponse `object`
  * ChangeToken

### DeleteIPSetRequest
* DeleteIPSetRequest `object`
  * ChangeToken **required**
  * IPSetId **required**

### DeleteIPSetResponse
* DeleteIPSetResponse `object`
  * ChangeToken

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

### DeleteRateBasedRuleRequest
* DeleteRateBasedRuleRequest `object`
  * ChangeToken **required**
  * RuleId **required**

### DeleteRateBasedRuleResponse
* DeleteRateBasedRuleResponse `object`
  * ChangeToken

### DeleteRegexMatchSetRequest
* DeleteRegexMatchSetRequest `object`
  * ChangeToken **required**
  * RegexMatchSetId **required**

### DeleteRegexMatchSetResponse
* DeleteRegexMatchSetResponse `object`
  * ChangeToken

### DeleteRegexPatternSetRequest
* DeleteRegexPatternSetRequest `object`
  * ChangeToken **required**
  * RegexPatternSetId **required**

### DeleteRegexPatternSetResponse
* DeleteRegexPatternSetResponse `object`
  * ChangeToken

### DeleteRuleGroupRequest
* DeleteRuleGroupRequest `object`
  * ChangeToken **required**
  * RuleGroupId **required**

### DeleteRuleGroupResponse
* DeleteRuleGroupResponse `object`
  * ChangeToken

### DeleteRuleRequest
* DeleteRuleRequest `object`
  * ChangeToken **required**
  * RuleId **required**

### DeleteRuleResponse
* DeleteRuleResponse `object`
  * ChangeToken

### DeleteSizeConstraintSetRequest
* DeleteSizeConstraintSetRequest `object`
  * ChangeToken **required**
  * SizeConstraintSetId **required**

### DeleteSizeConstraintSetResponse
* DeleteSizeConstraintSetResponse `object`
  * ChangeToken

### DeleteSqlInjectionMatchSetRequest
* DeleteSqlInjectionMatchSetRequest `object`: A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
  * ChangeToken **required**
  * SqlInjectionMatchSetId **required**

### DeleteSqlInjectionMatchSetResponse
* DeleteSqlInjectionMatchSetResponse `object`: The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
  * ChangeToken

### DeleteWebACLRequest
* DeleteWebACLRequest `object`
  * ChangeToken **required**
  * WebACLId **required**

### DeleteWebACLResponse
* DeleteWebACLResponse `object`
  * ChangeToken

### DeleteXssMatchSetRequest
* DeleteXssMatchSetRequest `object`: A request to delete an <a>XssMatchSet</a> from AWS WAF.
  * ChangeToken **required**
  * XssMatchSetId **required**

### DeleteXssMatchSetResponse
* DeleteXssMatchSetResponse `object`: The response to a request to delete an <a>XssMatchSet</a> from AWS WAF.
  * ChangeToken

### ExcludedRule
* ExcludedRule `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The rule to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>. The rule must belong to the <code>RuleGroup</code> that is specified by the <code>ActivatedRule</code>. </p>
  * RuleId **required**

### ExcludedRules
* ExcludedRules `array`
  * items [ExcludedRule](#excludedrule)

### FieldToMatch
* FieldToMatch `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p>
  * Data
  * Type **required**

### GeoMatchConstraint
* GeoMatchConstraint `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The country from which web requests originate that you want AWS WAF to search for.</p>
  * Type **required**
  * Value **required**

### GeoMatchConstraintType
* GeoMatchConstraintType `string` (values: Country)

### GeoMatchConstraintValue
* GeoMatchConstraintValue `string` (values: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BQ, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CW, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, GS, SS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW)

### GeoMatchConstraints
* GeoMatchConstraints `array`
  * items [GeoMatchConstraint](#geomatchconstraint)

### GeoMatchSet
* GeoMatchSet `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p>
  * GeoMatchConstraints **required**
    * items [GeoMatchConstraint](#geomatchconstraint)
  * GeoMatchSetId **required**
  * Name

### GeoMatchSetSummaries
* GeoMatchSetSummaries `array`
  * items [GeoMatchSetSummary](#geomatchsetsummary)

### GeoMatchSetSummary
* GeoMatchSetSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>GeoMatchSet</code>.</p>
  * GeoMatchSetId **required**
  * Name **required**

### GeoMatchSetUpdate
* GeoMatchSetUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.</p>
  * Action **required**
  * GeoMatchConstraint **required**
    * Type **required**
    * Value **required**

### GeoMatchSetUpdates
* GeoMatchSetUpdates `array`
  * items [GeoMatchSetUpdate](#geomatchsetupdate)

### GetByteMatchSetRequest
* GetByteMatchSetRequest `object`
  * ByteMatchSetId **required**

### GetByteMatchSetResponse
* GetByteMatchSetResponse `object`
  * ByteMatchSet
    * ByteMatchSetId **required**
    * ByteMatchTuples **required**
      * items [ByteMatchTuple](#bytematchtuple)
    * Name

### GetChangeTokenRequest
* GetChangeTokenRequest `object`

### GetChangeTokenResponse
* GetChangeTokenResponse `object`
  * ChangeToken

### GetChangeTokenStatusRequest
* GetChangeTokenStatusRequest `object`
  * ChangeToken **required**

### GetChangeTokenStatusResponse
* GetChangeTokenStatusResponse `object`
  * ChangeTokenStatus

### GetGeoMatchSetRequest
* GetGeoMatchSetRequest `object`
  * GeoMatchSetId **required**

### GetGeoMatchSetResponse
* GetGeoMatchSetResponse `object`
  * GeoMatchSet
    * GeoMatchConstraints **required**
      * items [GeoMatchConstraint](#geomatchconstraint)
    * GeoMatchSetId **required**
    * Name

### GetIPSetRequest
* GetIPSetRequest `object`
  * IPSetId **required**

### GetIPSetResponse
* GetIPSetResponse `object`
  * IPSet
    * IPSetDescriptors **required**
      * items [IPSetDescriptor](#ipsetdescriptor)
    * IPSetId **required**
    * Name

### GetLoggingConfigurationRequest
* GetLoggingConfigurationRequest `object`
  * ResourceArn **required**

### GetLoggingConfigurationResponse
* GetLoggingConfigurationResponse `object`
  * LoggingConfiguration
    * LogDestinationConfigs **required**
      * items [ResourceArn](#resourcearn)
    * RedactedFields
      * items [FieldToMatch](#fieldtomatch)
    * ResourceArn **required**

### GetPermissionPolicyRequest
* GetPermissionPolicyRequest `object`
  * ResourceArn **required**

### GetPermissionPolicyResponse
* GetPermissionPolicyResponse `object`
  * Policy

### GetRateBasedRuleManagedKeysRequest
* GetRateBasedRuleManagedKeysRequest `object`
  * NextMarker
  * RuleId **required**

### GetRateBasedRuleManagedKeysResponse
* GetRateBasedRuleManagedKeysResponse `object`
  * ManagedKeys
    * items [ManagedKey](#managedkey)
  * NextMarker

### GetRateBasedRuleRequest
* GetRateBasedRuleRequest `object`
  * RuleId **required**

### GetRateBasedRuleResponse
* GetRateBasedRuleResponse `object`
  * Rule
    * MatchPredicates **required**
      * items [Predicate](#predicate)
    * MetricName
    * Name
    * RateKey **required**
    * RateLimit **required**
    * RuleId **required**

### GetRegexMatchSetRequest
* GetRegexMatchSetRequest `object`
  * RegexMatchSetId **required**

### GetRegexMatchSetResponse
* GetRegexMatchSetResponse `object`
  * RegexMatchSet
    * Name
    * RegexMatchSetId
    * RegexMatchTuples
      * items [RegexMatchTuple](#regexmatchtuple)

### GetRegexPatternSetRequest
* GetRegexPatternSetRequest `object`
  * RegexPatternSetId **required**

### GetRegexPatternSetResponse
* GetRegexPatternSetResponse `object`
  * RegexPatternSet
    * Name
    * RegexPatternSetId **required**
    * RegexPatternStrings **required**
      * items [RegexPatternString](#regexpatternstring)

### GetRuleGroupRequest
* GetRuleGroupRequest `object`
  * RuleGroupId **required**

### GetRuleGroupResponse
* GetRuleGroupResponse `object`
  * RuleGroup
    * MetricName
    * Name
    * RuleGroupId **required**

### GetRuleRequest
* GetRuleRequest `object`
  * RuleId **required**

### GetRuleResponse
* GetRuleResponse `object`
  * Rule
    * MetricName
    * Name
    * Predicates **required**
      * items [Predicate](#predicate)
    * RuleId **required**

### GetSampledRequestsMaxItems
* GetSampledRequestsMaxItems `integer`

### GetSampledRequestsRequest
* GetSampledRequestsRequest `object`
  * MaxItems **required**
  * RuleId **required**
  * TimeWindow **required**
    * EndTime **required**
    * StartTime **required**
  * WebAclId **required**

### GetSampledRequestsResponse
* GetSampledRequestsResponse `object`
  * PopulationSize
  * SampledRequests
    * items [SampledHTTPRequest](#sampledhttprequest)
  * TimeWindow
    * EndTime **required**
    * StartTime **required**

### GetSizeConstraintSetRequest
* GetSizeConstraintSetRequest `object`
  * SizeConstraintSetId **required**

### GetSizeConstraintSetResponse
* GetSizeConstraintSetResponse `object`
  * SizeConstraintSet
    * Name
    * SizeConstraintSetId **required**
    * SizeConstraints **required**
      * items [SizeConstraint](#sizeconstraint)

### GetSqlInjectionMatchSetRequest
* GetSqlInjectionMatchSetRequest `object`: A request to get a <a>SqlInjectionMatchSet</a>.
  * SqlInjectionMatchSetId **required**

### GetSqlInjectionMatchSetResponse
* GetSqlInjectionMatchSetResponse `object`: The response to a <a>GetSqlInjectionMatchSet</a> request.
  * SqlInjectionMatchSet
    * Name
    * SqlInjectionMatchSetId **required**
    * SqlInjectionMatchTuples **required**
      * items [SqlInjectionMatchTuple](#sqlinjectionmatchtuple)

### GetWebACLRequest
* GetWebACLRequest `object`
  * WebACLId **required**

### GetWebACLResponse
* GetWebACLResponse `object`
  * WebACL
    * DefaultAction **required**
      * Type **required**
    * MetricName
    * Name
    * Rules **required**
      * items [ActivatedRule](#activatedrule)
    * WebACLArn
    * WebACLId **required**

### GetXssMatchSetRequest
* GetXssMatchSetRequest `object`: A request to get an <a>XssMatchSet</a>.
  * XssMatchSetId **required**

### GetXssMatchSetResponse
* GetXssMatchSetResponse `object`: The response to a <a>GetXssMatchSet</a> request.
  * XssMatchSet
    * Name
    * XssMatchSetId **required**
    * XssMatchTuples **required**
      * items [XssMatchTuple](#xssmatchtuple)

### HTTPHeader
* HTTPHeader `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. </p>
  * Name
  * Value

### HTTPHeaders
* HTTPHeaders `array`
  * items [HTTPHeader](#httpheader)

### HTTPMethod
* HTTPMethod `string`

### HTTPRequest
* HTTPRequest `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p>
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

### IPSet
* IPSet `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>
  * IPSetDescriptors **required**
    * items [IPSetDescriptor](#ipsetdescriptor)
  * IPSetId **required**
  * Name

### IPSetDescriptor
* IPSetDescriptor `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p>
  * Type **required**
  * Value **required**

### IPSetDescriptorType
* IPSetDescriptorType `string` (values: IPV4, IPV6)

### IPSetDescriptorValue
* IPSetDescriptorValue `string`

### IPSetDescriptors
* IPSetDescriptors `array`
  * items [IPSetDescriptor](#ipsetdescriptor)

### IPSetSummaries
* IPSetSummaries `array`
  * items [IPSetSummary](#ipsetsummary)

### IPSetSummary
* IPSetSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>IPSet</code>.</p>
  * IPSetId **required**
  * Name **required**

### IPSetUpdate
* IPSetUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.</p>
  * Action **required**
  * IPSetDescriptor **required**
    * Type **required**
    * Value **required**

### IPSetUpdates
* IPSetUpdates `array`
  * items [IPSetUpdate](#ipsetupdate)

### IPString
* IPString `string`

### IgnoreUnsupportedType
* IgnoreUnsupportedType `boolean`

### ListActivatedRulesInRuleGroupRequest
* ListActivatedRulesInRuleGroupRequest `object`
  * Limit
  * NextMarker
  * RuleGroupId

### ListActivatedRulesInRuleGroupResponse
* ListActivatedRulesInRuleGroupResponse `object`
  * ActivatedRules
    * items [ActivatedRule](#activatedrule)
  * NextMarker

### ListByteMatchSetsRequest
* ListByteMatchSetsRequest `object`
  * Limit
  * NextMarker

### ListByteMatchSetsResponse
* ListByteMatchSetsResponse `object`
  * ByteMatchSets
    * items [ByteMatchSetSummary](#bytematchsetsummary)
  * NextMarker

### ListGeoMatchSetsRequest
* ListGeoMatchSetsRequest `object`
  * Limit
  * NextMarker

### ListGeoMatchSetsResponse
* ListGeoMatchSetsResponse `object`
  * GeoMatchSets
    * items [GeoMatchSetSummary](#geomatchsetsummary)
  * NextMarker

### ListIPSetsRequest
* ListIPSetsRequest `object`
  * Limit
  * NextMarker

### ListIPSetsResponse
* ListIPSetsResponse `object`
  * IPSets
    * items [IPSetSummary](#ipsetsummary)
  * NextMarker

### ListLoggingConfigurationsRequest
* ListLoggingConfigurationsRequest `object`
  * Limit
  * NextMarker

### ListLoggingConfigurationsResponse
* ListLoggingConfigurationsResponse `object`
  * LoggingConfigurations
    * items [LoggingConfiguration](#loggingconfiguration)
  * NextMarker

### ListRateBasedRulesRequest
* ListRateBasedRulesRequest `object`
  * Limit
  * NextMarker

### ListRateBasedRulesResponse
* ListRateBasedRulesResponse `object`
  * NextMarker
  * Rules
    * items [RuleSummary](#rulesummary)

### ListRegexMatchSetsRequest
* ListRegexMatchSetsRequest `object`
  * Limit
  * NextMarker

### ListRegexMatchSetsResponse
* ListRegexMatchSetsResponse `object`
  * NextMarker
  * RegexMatchSets
    * items [RegexMatchSetSummary](#regexmatchsetsummary)

### ListRegexPatternSetsRequest
* ListRegexPatternSetsRequest `object`
  * Limit
  * NextMarker

### ListRegexPatternSetsResponse
* ListRegexPatternSetsResponse `object`
  * NextMarker
  * RegexPatternSets
    * items [RegexPatternSetSummary](#regexpatternsetsummary)

### ListRuleGroupsRequest
* ListRuleGroupsRequest `object`
  * Limit
  * NextMarker

### ListRuleGroupsResponse
* ListRuleGroupsResponse `object`
  * NextMarker
  * RuleGroups
    * items [RuleGroupSummary](#rulegroupsummary)

### ListRulesRequest
* ListRulesRequest `object`
  * Limit
  * NextMarker

### ListRulesResponse
* ListRulesResponse `object`
  * NextMarker
  * Rules
    * items [RuleSummary](#rulesummary)

### ListSizeConstraintSetsRequest
* ListSizeConstraintSetsRequest `object`
  * Limit
  * NextMarker

### ListSizeConstraintSetsResponse
* ListSizeConstraintSetsResponse `object`
  * NextMarker
  * SizeConstraintSets
    * items [SizeConstraintSetSummary](#sizeconstraintsetsummary)

### ListSqlInjectionMatchSetsRequest
* ListSqlInjectionMatchSetsRequest `object`: A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.
  * Limit
  * NextMarker

### ListSqlInjectionMatchSetsResponse
* ListSqlInjectionMatchSetsResponse `object`: The response to a <a>ListSqlInjectionMatchSets</a> request.
  * NextMarker
  * SqlInjectionMatchSets
    * items [SqlInjectionMatchSetSummary](#sqlinjectionmatchsetsummary)

### ListSubscribedRuleGroupsRequest
* ListSubscribedRuleGroupsRequest `object`
  * Limit
  * NextMarker

### ListSubscribedRuleGroupsResponse
* ListSubscribedRuleGroupsResponse `object`
  * NextMarker
  * RuleGroups
    * items [SubscribedRuleGroupSummary](#subscribedrulegroupsummary)

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

### ListWebACLsResponse
* ListWebACLsResponse `object`
  * NextMarker
  * WebACLs
    * items [WebACLSummary](#webaclsummary)

### ListXssMatchSetsRequest
* ListXssMatchSetsRequest `object`: A request to list the <a>XssMatchSet</a> objects created by the current AWS account.
  * Limit
  * NextMarker

### ListXssMatchSetsResponse
* ListXssMatchSetsResponse `object`: The response to a <a>ListXssMatchSets</a> request.
  * NextMarker
  * XssMatchSets
    * items [XssMatchSetSummary](#xssmatchsetsummary)

### LogDestinationConfigs
* LogDestinationConfigs `array`
  * items [ResourceArn](#resourcearn)

### LoggingConfiguration
* LoggingConfiguration `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p>
  * LogDestinationConfigs **required**
    * items [ResourceArn](#resourcearn)
  * RedactedFields
    * items [FieldToMatch](#fieldtomatch)
  * ResourceArn **required**

### LoggingConfigurations
* LoggingConfigurations `array`
  * items [LoggingConfiguration](#loggingconfiguration)

### ManagedKey
* ManagedKey `string`

### ManagedKeys
* ManagedKeys `array`
  * items [ManagedKey](#managedkey)

### MatchFieldData
* MatchFieldData `string`

### MatchFieldType
* MatchFieldType `string` (values: URI, QUERY_STRING, HEADER, METHOD, BODY, SINGLE_QUERY_ARG, ALL_QUERY_ARGS)

### MetricName
* MetricName `string`

### Negated
* Negated `boolean`

### NextMarker
* NextMarker `string`

### PaginationLimit
* PaginationLimit `integer`

### PolicyString
* PolicyString `string`

### PopulationSize
* PopulationSize `integer`

### PositionalConstraint
* PositionalConstraint `string` (values: EXACTLY, STARTS_WITH, ENDS_WITH, CONTAINS, CONTAINS_WORD)

### Predicate
* Predicate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. </p>
  * DataId **required**
  * Negated **required**
  * Type **required**

### PredicateType
* PredicateType `string` (values: IPMatch, ByteMatch, SqlInjectionMatch, GeoMatch, SizeConstraint, XssMatch, RegexMatch)

### Predicates
* Predicates `array`
  * items [Predicate](#predicate)

### PutLoggingConfigurationRequest
* PutLoggingConfigurationRequest `object`
  * LoggingConfiguration **required**
    * LogDestinationConfigs **required**
      * items [ResourceArn](#resourcearn)
    * RedactedFields
      * items [FieldToMatch](#fieldtomatch)
    * ResourceArn **required**

### PutLoggingConfigurationResponse
* PutLoggingConfigurationResponse `object`
  * LoggingConfiguration
    * LogDestinationConfigs **required**
      * items [ResourceArn](#resourcearn)
    * RedactedFields
      * items [FieldToMatch](#fieldtomatch)
    * ResourceArn **required**

### PutPermissionPolicyRequest
* PutPermissionPolicyRequest `object`
  * Policy **required**
  * ResourceArn **required**

### PutPermissionPolicyResponse
* PutPermissionPolicyResponse `object`

### RateBasedRule
* RateBasedRule `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p>
  * MatchPredicates **required**
    * items [Predicate](#predicate)
  * MetricName
  * Name
  * RateKey **required**
  * RateLimit **required**
  * RuleId **required**

### RateKey
* RateKey `string` (values: IP)

### RateLimit
* RateLimit `integer`

### RedactedFields
* RedactedFields `array`
  * items [FieldToMatch](#fieldtomatch)

### RegexMatchSet
* RegexMatchSet `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p>
  * Name
  * RegexMatchSetId
  * RegexMatchTuples
    * items [RegexMatchTuple](#regexmatchtuple)

### RegexMatchSetSummaries
* RegexMatchSetSummaries `array`
  * items [RegexMatchSetSummary](#regexmatchsetsummary)

### RegexMatchSetSummary
* RegexMatchSetSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexMatchSets</a>. Each <code>RegexMatchSetSummary</code> object includes the <code>Name</code> and <code>RegexMatchSetId</code> for one <a>RegexMatchSet</a>.</p>
  * Name **required**
  * RegexMatchSetId **required**

### RegexMatchSetUpdate
* RegexMatchSetUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.</p>
  * Action **required**
  * RegexMatchTuple **required**
    * FieldToMatch **required**
      * Data
      * Type **required**
    * RegexPatternSetId **required**
    * TextTransformation **required**

### RegexMatchSetUpdates
* RegexMatchSetUpdates `array`
  * items [RegexMatchSetUpdate](#regexmatchsetupdate)

### RegexMatchTuple
* RegexMatchTuple `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul>
  * FieldToMatch **required**
    * Data
    * Type **required**
  * RegexPatternSetId **required**
  * TextTransformation **required**

### RegexMatchTuples
* RegexMatchTuples `array`
  * items [RegexMatchTuple](#regexmatchtuple)

### RegexPatternSet
* RegexPatternSet `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
  * Name
  * RegexPatternSetId **required**
  * RegexPatternStrings **required**
    * items [RegexPatternString](#regexpatternstring)

### RegexPatternSetSummaries
* RegexPatternSetSummaries `array`
  * items [RegexPatternSetSummary](#regexpatternsetsummary)

### RegexPatternSetSummary
* RegexPatternSetSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexPatternSets</a>. Each <code>RegexPatternSetSummary</code> object includes the <code>Name</code> and <code>RegexPatternSetId</code> for one <a>RegexPatternSet</a>.</p>
  * Name **required**
  * RegexPatternSetId **required**

### RegexPatternSetUpdate
* RegexPatternSetUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.</p>
  * Action **required**
  * RegexPatternString **required**

### RegexPatternSetUpdates
* RegexPatternSetUpdates `array`
  * items [RegexPatternSetUpdate](#regexpatternsetupdate)

### RegexPatternString
* RegexPatternString `string`

### RegexPatternStrings
* RegexPatternStrings `array`
  * items [RegexPatternString](#regexpatternstring)

### ResourceArn
* ResourceArn `string`

### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### Rule
* Rule `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p>
  * MetricName
  * Name
  * Predicates **required**
    * items [Predicate](#predicate)
  * RuleId **required**

### RuleGroup
* RuleGroup `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul>
  * MetricName
  * Name
  * RuleGroupId **required**

### RuleGroupSummaries
* RuleGroupSummaries `array`
  * items [RuleGroupSummary](#rulegroupsummary)

### RuleGroupSummary
* RuleGroupSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>RuleGroup</code>.</p>
  * Name **required**
  * RuleGroupId **required**

### RuleGroupUpdate
* RuleGroupUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.</p>
  * Action **required**
  * ActivatedRule **required**
    * Action
      * Type **required**
    * ExcludedRules
      * items [ExcludedRule](#excludedrule)
    * OverrideAction
      * Type **required**
    * Priority **required**
    * RuleId **required**
    * Type

### RuleGroupUpdates
* RuleGroupUpdates `array`
  * items [RuleGroupUpdate](#rulegroupupdate)

### RulePriority
* RulePriority `integer`

### RuleSummaries
* RuleSummaries `array`
  * items [RuleSummary](#rulesummary)

### RuleSummary
* RuleSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>Rule</code>.</p>
  * Name **required**
  * RuleId **required**

### RuleUpdate
* RuleUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p>
  * Action **required**
  * Predicate **required**
    * DataId **required**
    * Negated **required**
    * Type **required**

### RuleUpdates
* RuleUpdates `array`
  * items [RuleUpdate](#ruleupdate)

### S3BucketName
* S3BucketName `string`

### S3ObjectUrl
* S3ObjectUrl `string`

### SampleWeight
* SampleWeight `integer`

### SampledHTTPRequest
* SampledHTTPRequest `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p>
  * Action
  * Request **required**
    * ClientIP
    * Country
    * HTTPVersion
    * Headers
      * items [HTTPHeader](#httpheader)
    * Method
    * URI
  * RuleWithinRuleGroup
  * Timestamp
  * Weight **required**

### SampledHTTPRequests
* SampledHTTPRequests `array`
  * items [SampledHTTPRequest](#sampledhttprequest)

### Size
* Size `integer`

### SizeConstraint
* SizeConstraint `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p>
  * ComparisonOperator **required**
  * FieldToMatch **required**
    * Data
    * Type **required**
  * Size **required**
  * TextTransformation **required**

### SizeConstraintSet
* SizeConstraintSet `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p>
  * Name
  * SizeConstraintSetId **required**
  * SizeConstraints **required**
    * items [SizeConstraint](#sizeconstraint)

### SizeConstraintSetSummaries
* SizeConstraintSetSummaries `array`
  * items [SizeConstraintSetSummary](#sizeconstraintsetsummary)

### SizeConstraintSetSummary
* SizeConstraintSetSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.</p>
  * Name **required**
  * SizeConstraintSetId **required**

### SizeConstraintSetUpdate
* SizeConstraintSetUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect the size of and indicates whether you want to add the specification to a <a>SizeConstraintSet</a> or delete it from a <code>SizeConstraintSet</code>.</p>
  * Action **required**
  * SizeConstraint **required**
    * ComparisonOperator **required**
    * FieldToMatch **required**
      * Data
      * Type **required**
    * Size **required**
    * TextTransformation **required**

### SizeConstraintSetUpdates
* SizeConstraintSetUpdates `array`
  * items [SizeConstraintSetUpdate](#sizeconstraintsetupdate)

### SizeConstraints
* SizeConstraints `array`
  * items [SizeConstraint](#sizeconstraint)

### SqlInjectionMatchSet
* SqlInjectionMatchSet `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p>
  * Name
  * SqlInjectionMatchSetId **required**
  * SqlInjectionMatchTuples **required**
    * items [SqlInjectionMatchTuple](#sqlinjectionmatchtuple)

### SqlInjectionMatchSetSummaries
* SqlInjectionMatchSetSummaries `array`
  * items [SqlInjectionMatchSetSummary](#sqlinjectionmatchsetsummary)

### SqlInjectionMatchSetSummary
* SqlInjectionMatchSetSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SqlInjectionMatchSet</code>.</p>
  * Name **required**
  * SqlInjectionMatchSetId **required**

### SqlInjectionMatchSetUpdate
* SqlInjectionMatchSetUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.</p>
  * Action **required**
  * SqlInjectionMatchTuple **required**
    * FieldToMatch **required**
      * Data
      * Type **required**
    * TextTransformation **required**

### SqlInjectionMatchSetUpdates
* SqlInjectionMatchSetUpdates `array`
  * items [SqlInjectionMatchSetUpdate](#sqlinjectionmatchsetupdate)

### SqlInjectionMatchTuple
* SqlInjectionMatchTuple `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p>
  * FieldToMatch **required**
    * Data
    * Type **required**
  * TextTransformation **required**

### SqlInjectionMatchTuples
* SqlInjectionMatchTuples `array`
  * items [SqlInjectionMatchTuple](#sqlinjectionmatchtuple)

### SubscribedRuleGroupSummaries
* SubscribedRuleGroupSummaries `array`
  * items [SubscribedRuleGroupSummary](#subscribedrulegroupsummary)

### SubscribedRuleGroupSummary
* SubscribedRuleGroupSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A summary of the rule groups you are subscribed to.</p>
  * MetricName **required**
  * Name **required**
  * RuleGroupId **required**

### Tag
* Tag `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>
  * Key **required**
  * Value **required**

### TagInfoForResource
* TagInfoForResource `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Information for a tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>
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
* TextTransformation `string` (values: NONE, COMPRESS_WHITE_SPACE, HTML_ENTITY_DECODE, LOWERCASE, CMD_LINE, URL_DECODE)

### TimeWindow
* TimeWindow `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. </p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p>
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

### UpdateByteMatchSetRequest
* UpdateByteMatchSetRequest `object`
  * ByteMatchSetId **required**
  * ChangeToken **required**
  * Updates **required**
    * items [ByteMatchSetUpdate](#bytematchsetupdate)

### UpdateByteMatchSetResponse
* UpdateByteMatchSetResponse `object`
  * ChangeToken

### UpdateGeoMatchSetRequest
* UpdateGeoMatchSetRequest `object`
  * ChangeToken **required**
  * GeoMatchSetId **required**
  * Updates **required**
    * items [GeoMatchSetUpdate](#geomatchsetupdate)

### UpdateGeoMatchSetResponse
* UpdateGeoMatchSetResponse `object`
  * ChangeToken

### UpdateIPSetRequest
* UpdateIPSetRequest `object`
  * ChangeToken **required**
  * IPSetId **required**
  * Updates **required**
    * items [IPSetUpdate](#ipsetupdate)

### UpdateIPSetResponse
* UpdateIPSetResponse `object`
  * ChangeToken

### UpdateRateBasedRuleRequest
* UpdateRateBasedRuleRequest `object`
  * ChangeToken **required**
  * RateLimit **required**
  * RuleId **required**
  * Updates **required**
    * items [RuleUpdate](#ruleupdate)

### UpdateRateBasedRuleResponse
* UpdateRateBasedRuleResponse `object`
  * ChangeToken

### UpdateRegexMatchSetRequest
* UpdateRegexMatchSetRequest `object`
  * ChangeToken **required**
  * RegexMatchSetId **required**
  * Updates **required**
    * items [RegexMatchSetUpdate](#regexmatchsetupdate)

### UpdateRegexMatchSetResponse
* UpdateRegexMatchSetResponse `object`
  * ChangeToken

### UpdateRegexPatternSetRequest
* UpdateRegexPatternSetRequest `object`
  * ChangeToken **required**
  * RegexPatternSetId **required**
  * Updates **required**
    * items [RegexPatternSetUpdate](#regexpatternsetupdate)

### UpdateRegexPatternSetResponse
* UpdateRegexPatternSetResponse `object`
  * ChangeToken

### UpdateRuleGroupRequest
* UpdateRuleGroupRequest `object`
  * ChangeToken **required**
  * RuleGroupId **required**
  * Updates **required**
    * items [RuleGroupUpdate](#rulegroupupdate)

### UpdateRuleGroupResponse
* UpdateRuleGroupResponse `object`
  * ChangeToken

### UpdateRuleRequest
* UpdateRuleRequest `object`
  * ChangeToken **required**
  * RuleId **required**
  * Updates **required**
    * items [RuleUpdate](#ruleupdate)

### UpdateRuleResponse
* UpdateRuleResponse `object`
  * ChangeToken

### UpdateSizeConstraintSetRequest
* UpdateSizeConstraintSetRequest `object`
  * ChangeToken **required**
  * SizeConstraintSetId **required**
  * Updates **required**
    * items [SizeConstraintSetUpdate](#sizeconstraintsetupdate)

### UpdateSizeConstraintSetResponse
* UpdateSizeConstraintSetResponse `object`
  * ChangeToken

### UpdateSqlInjectionMatchSetRequest
* UpdateSqlInjectionMatchSetRequest `object`: A request to update a <a>SqlInjectionMatchSet</a>.
  * ChangeToken **required**
  * SqlInjectionMatchSetId **required**
  * Updates **required**
    * items [SqlInjectionMatchSetUpdate](#sqlinjectionmatchsetupdate)

### UpdateSqlInjectionMatchSetResponse
* UpdateSqlInjectionMatchSetResponse `object`: The response to an <a>UpdateSqlInjectionMatchSets</a> request.
  * ChangeToken

### UpdateWebACLRequest
* UpdateWebACLRequest `object`
  * ChangeToken **required**
  * DefaultAction
    * Type **required**
  * Updates
    * items [WebACLUpdate](#webaclupdate)
  * WebACLId **required**

### UpdateWebACLResponse
* UpdateWebACLResponse `object`
  * ChangeToken

### UpdateXssMatchSetRequest
* UpdateXssMatchSetRequest `object`: A request to update an <a>XssMatchSet</a>.
  * ChangeToken **required**
  * Updates **required**
    * items [XssMatchSetUpdate](#xssmatchsetupdate)
  * XssMatchSetId **required**

### UpdateXssMatchSetResponse
* UpdateXssMatchSetResponse `object`: The response to an <a>UpdateXssMatchSets</a> request.
  * ChangeToken

### WAFBadRequestException


### WAFDisallowedNameException


### WAFEntityMigrationException


### WAFInternalErrorException


### WAFInvalidAccountException


### WAFInvalidOperationException


### WAFInvalidParameterException


### WAFInvalidPermissionPolicyException


### WAFInvalidRegexPatternException


### WAFLimitsExceededException


### WAFNonEmptyEntityException


### WAFNonexistentContainerException


### WAFNonexistentItemException


### WAFReferencedItemException


### WAFServiceLinkedRoleErrorException


### WAFStaleDataException


### WAFSubscriptionNotFoundException


### WAFTagOperationException


### WAFTagOperationInternalErrorException


### WafAction
* WafAction `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p>
  * Type **required**

### WafActionType
* WafActionType `string` (values: BLOCK, ALLOW, COUNT)

### WafOverrideAction
* WafOverrideAction `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p>
  * Type **required**

### WafOverrideActionType
* WafOverrideActionType `string` (values: NONE, COUNT)

### WafRuleType
* WafRuleType `string` (values: REGULAR, RATE_BASED, GROUP)

### WebACL
* WebACL `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p>
  * DefaultAction **required**
    * Type **required**
  * MetricName
  * Name
  * Rules **required**
    * items [ActivatedRule](#activatedrule)
  * WebACLArn
  * WebACLId **required**

### WebACLSummaries
* WebACLSummaries `array`
  * items [WebACLSummary](#webaclsummary)

### WebACLSummary
* WebACLSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p>
  * Name **required**
  * WebACLId **required**

### WebACLUpdate
* WebACLUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p>
  * Action **required**
  * ActivatedRule **required**
    * Action
      * Type **required**
    * ExcludedRules
      * items [ExcludedRule](#excludedrule)
    * OverrideAction
      * Type **required**
    * Priority **required**
    * RuleId **required**
    * Type

### WebACLUpdates
* WebACLUpdates `array`
  * items [WebACLUpdate](#webaclupdate)

### XssMatchSet
* XssMatchSet `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p>
  * Name
  * XssMatchSetId **required**
  * XssMatchTuples **required**
    * items [XssMatchTuple](#xssmatchtuple)

### XssMatchSetSummaries
* XssMatchSetSummaries `array`
  * items [XssMatchSetSummary](#xssmatchsetsummary)

### XssMatchSetSummary
* XssMatchSetSummary `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p>
  * Name **required**
  * XssMatchSetId **required**

### XssMatchSetUpdate
* XssMatchSetUpdate `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p>
  * Action **required**
  * XssMatchTuple **required**
    * FieldToMatch **required**
      * Data
      * Type **required**
    * TextTransformation **required**

### XssMatchSetUpdates
* XssMatchSetUpdates `array`
  * items [XssMatchSetUpdate](#xssmatchsetupdate)

### XssMatchTuple
* XssMatchTuple `object`: <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p>
  * FieldToMatch **required**
    * Data
    * Type **required**
  * TextTransformation **required**

### XssMatchTuples
* XssMatchTuples `array`
  * items [XssMatchTuple](#xssmatchtuple)


