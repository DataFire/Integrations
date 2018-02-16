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

amazonaws_waf.CreateByteMatchSet({
  "Name": "",
  "ChangeToken": ""
}).then(data => {
  console.log(data);
});
```

## Description

This is the <i>AWS WAF API Reference</i> for using AWS WAF with Amazon CloudFront. The AWS WAF actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint <i>waf.amazonaws.com</i>. This guide is for developers who need detailed information about the AWS WAF API actions, data types, and errors. For detailed information about AWS WAF features and an overview of how to use the AWS WAF API, see the <a href="http://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.

## Actions

### CreateByteMatchSet



```js
amazonaws_waf.CreateByteMatchSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateByteMatchSetResponse](#createbytematchsetresponse)

### CreateGeoMatchSet



```js
amazonaws_waf.CreateGeoMatchSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateGeoMatchSetResponse](#creategeomatchsetresponse)

### CreateIPSet



```js
amazonaws_waf.CreateIPSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateIPSetResponse](#createipsetresponse)

### CreateRateBasedRule



```js
amazonaws_waf.CreateRateBasedRule({
  "Name": "",
  "MetricName": "",
  "RateKey": "",
  "RateLimit": 0,
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [ResourceName](#resourcename)
  * RateKey **required** [RateKey](#ratekey)
  * RateLimit **required** [RateLimit](#ratelimit)

#### Output
* output [CreateRateBasedRuleResponse](#createratebasedruleresponse)

### CreateRegexMatchSet



```js
amazonaws_waf.CreateRegexMatchSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateRegexMatchSetResponse](#createregexmatchsetresponse)

### CreateRegexPatternSet



```js
amazonaws_waf.CreateRegexPatternSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateRegexPatternSetResponse](#createregexpatternsetresponse)

### CreateRule



```js
amazonaws_waf.CreateRule({
  "Name": "",
  "MetricName": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateRuleResponse](#createruleresponse)

### CreateRuleGroup



```js
amazonaws_waf.CreateRuleGroup({
  "Name": "",
  "MetricName": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateRuleGroupResponse](#createrulegroupresponse)

### CreateSizeConstraintSet



```js
amazonaws_waf.CreateSizeConstraintSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateSizeConstraintSetResponse](#createsizeconstraintsetresponse)

### CreateSqlInjectionMatchSet



```js
amazonaws_waf.CreateSqlInjectionMatchSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateSqlInjectionMatchSetResponse](#createsqlinjectionmatchsetresponse)

### CreateWebACL



```js
amazonaws_waf.CreateWebACL({
  "Name": "",
  "MetricName": "",
  "DefaultAction": {
    "Type": ""
  },
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * DefaultAction **required** [WafAction](#wafaction)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateWebACLResponse](#createwebaclresponse)

### CreateXssMatchSet



```js
amazonaws_waf.CreateXssMatchSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

#### Output
* output [CreateXssMatchSetResponse](#createxssmatchsetresponse)

### DeleteByteMatchSet



```js
amazonaws_waf.DeleteByteMatchSet({
  "ByteMatchSetId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ByteMatchSetId **required** [ResourceId](#resourceid)
  * ChangeToken **required** [ChangeToken](#changetoken)

#### Output
* output [DeleteByteMatchSetResponse](#deletebytematchsetresponse)

### DeleteGeoMatchSet



```js
amazonaws_waf.DeleteGeoMatchSet({
  "GeoMatchSetId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * GeoMatchSetId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteGeoMatchSetResponse](#deletegeomatchsetresponse)

### DeleteIPSet



```js
amazonaws_waf.DeleteIPSet({
  "IPSetId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * IPSetId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteIPSetResponse](#deleteipsetresponse)

### DeleteRateBasedRule



```js
amazonaws_waf.DeleteRateBasedRule({
  "RuleId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteRateBasedRuleResponse](#deleteratebasedruleresponse)

### DeleteRegexMatchSet



```js
amazonaws_waf.DeleteRegexMatchSet({
  "RegexMatchSetId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RegexMatchSetId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteRegexMatchSetResponse](#deleteregexmatchsetresponse)

### DeleteRegexPatternSet



```js
amazonaws_waf.DeleteRegexPatternSet({
  "RegexPatternSetId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RegexPatternSetId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteRegexPatternSetResponse](#deleteregexpatternsetresponse)

### DeleteRule



```js
amazonaws_waf.DeleteRule({
  "RuleId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteRuleResponse](#deleteruleresponse)

### DeleteRuleGroup



```js
amazonaws_waf.DeleteRuleGroup({
  "RuleGroupId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleGroupId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteRuleGroupResponse](#deleterulegroupresponse)

### DeleteSizeConstraintSet



```js
amazonaws_waf.DeleteSizeConstraintSet({
  "SizeConstraintSetId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * SizeConstraintSetId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteSizeConstraintSetResponse](#deletesizeconstraintsetresponse)

### DeleteSqlInjectionMatchSet



```js
amazonaws_waf.DeleteSqlInjectionMatchSet({
  "SqlInjectionMatchSetId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * SqlInjectionMatchSetId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteSqlInjectionMatchSetResponse](#deletesqlinjectionmatchsetresponse)

### DeleteWebACL



```js
amazonaws_waf.DeleteWebACL({
  "WebACLId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * WebACLId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteWebACLResponse](#deletewebaclresponse)

### DeleteXssMatchSet



```js
amazonaws_waf.DeleteXssMatchSet({
  "XssMatchSetId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * XssMatchSetId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteXssMatchSetResponse](#deletexssmatchsetresponse)

### GetByteMatchSet



```js
amazonaws_waf.GetByteMatchSet({
  "ByteMatchSetId": ""
}, context)
```

#### Input
* input `object`
  * ByteMatchSetId **required** [ResourceId](#resourceid)

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
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)

#### Output
* output [GetChangeTokenStatusResponse](#getchangetokenstatusresponse)

### GetGeoMatchSet



```js
amazonaws_waf.GetGeoMatchSet({
  "GeoMatchSetId": ""
}, context)
```

#### Input
* input `object`
  * GeoMatchSetId **required** [ResourceId](#resourceid)

#### Output
* output [GetGeoMatchSetResponse](#getgeomatchsetresponse)

### GetIPSet



```js
amazonaws_waf.GetIPSet({
  "IPSetId": ""
}, context)
```

#### Input
* input `object`
  * IPSetId **required** [ResourceId](#resourceid)

#### Output
* output [GetIPSetResponse](#getipsetresponse)

### GetRateBasedRule



```js
amazonaws_waf.GetRateBasedRule({
  "RuleId": ""
}, context)
```

#### Input
* input `object`
  * RuleId **required** [ResourceId](#resourceid)

#### Output
* output [GetRateBasedRuleResponse](#getratebasedruleresponse)

### GetRateBasedRuleManagedKeys



```js
amazonaws_waf.GetRateBasedRuleManagedKeys({
  "RuleId": ""
}, context)
```

#### Input
* input `object`
  * NextMarker [NextMarker](#nextmarker)
  * RuleId **required** [ResourceId](#resourceid)

#### Output
* output [GetRateBasedRuleManagedKeysResponse](#getratebasedrulemanagedkeysresponse)

### GetRegexMatchSet



```js
amazonaws_waf.GetRegexMatchSet({
  "RegexMatchSetId": ""
}, context)
```

#### Input
* input `object`
  * RegexMatchSetId **required** [ResourceId](#resourceid)

#### Output
* output [GetRegexMatchSetResponse](#getregexmatchsetresponse)

### GetRegexPatternSet



```js
amazonaws_waf.GetRegexPatternSet({
  "RegexPatternSetId": ""
}, context)
```

#### Input
* input `object`
  * RegexPatternSetId **required** [ResourceId](#resourceid)

#### Output
* output [GetRegexPatternSetResponse](#getregexpatternsetresponse)

### GetRule



```js
amazonaws_waf.GetRule({
  "RuleId": ""
}, context)
```

#### Input
* input `object`
  * RuleId **required** [ResourceId](#resourceid)

#### Output
* output [GetRuleResponse](#getruleresponse)

### GetRuleGroup



```js
amazonaws_waf.GetRuleGroup({
  "RuleGroupId": ""
}, context)
```

#### Input
* input `object`
  * RuleGroupId **required** [ResourceId](#resourceid)

#### Output
* output [GetRuleGroupResponse](#getrulegroupresponse)

### GetSampledRequests



```js
amazonaws_waf.GetSampledRequests({
  "WebAclId": "",
  "RuleId": "",
  "TimeWindow": {
    "StartTime": "",
    "EndTime": ""
  },
  "MaxItems": 0
}, context)
```

#### Input
* input `object`
  * MaxItems **required** [GetSampledRequestsMaxItems](#getsampledrequestsmaxitems)
  * RuleId **required** [ResourceId](#resourceid)
  * TimeWindow **required** [TimeWindow](#timewindow)
  * WebAclId **required** [ResourceId](#resourceid)

#### Output
* output [GetSampledRequestsResponse](#getsampledrequestsresponse)

### GetSizeConstraintSet



```js
amazonaws_waf.GetSizeConstraintSet({
  "SizeConstraintSetId": ""
}, context)
```

#### Input
* input `object`
  * SizeConstraintSetId **required** [ResourceId](#resourceid)

#### Output
* output [GetSizeConstraintSetResponse](#getsizeconstraintsetresponse)

### GetSqlInjectionMatchSet



```js
amazonaws_waf.GetSqlInjectionMatchSet({
  "SqlInjectionMatchSetId": ""
}, context)
```

#### Input
* input `object`
  * SqlInjectionMatchSetId **required** [ResourceId](#resourceid)

#### Output
* output [GetSqlInjectionMatchSetResponse](#getsqlinjectionmatchsetresponse)

### GetWebACL



```js
amazonaws_waf.GetWebACL({
  "WebACLId": ""
}, context)
```

#### Input
* input `object`
  * WebACLId **required** [ResourceId](#resourceid)

#### Output
* output [GetWebACLResponse](#getwebaclresponse)

### GetXssMatchSet



```js
amazonaws_waf.GetXssMatchSet({
  "XssMatchSetId": ""
}, context)
```

#### Input
* input `object`
  * XssMatchSetId **required** [ResourceId](#resourceid)

#### Output
* output [GetXssMatchSetResponse](#getxssmatchsetresponse)

### ListActivatedRulesInRuleGroup



```js
amazonaws_waf.ListActivatedRulesInRuleGroup({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)
  * RuleGroupId [ResourceId](#resourceid)

#### Output
* output [ListActivatedRulesInRuleGroupResponse](#listactivatedrulesinrulegroupresponse)

### ListByteMatchSets



```js
amazonaws_waf.ListByteMatchSets({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListByteMatchSetsResponse](#listbytematchsetsresponse)

### ListGeoMatchSets



```js
amazonaws_waf.ListGeoMatchSets({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListGeoMatchSetsResponse](#listgeomatchsetsresponse)

### ListIPSets



```js
amazonaws_waf.ListIPSets({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListIPSetsResponse](#listipsetsresponse)

### ListRateBasedRules



```js
amazonaws_waf.ListRateBasedRules({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListRateBasedRulesResponse](#listratebasedrulesresponse)

### ListRegexMatchSets



```js
amazonaws_waf.ListRegexMatchSets({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListRegexMatchSetsResponse](#listregexmatchsetsresponse)

### ListRegexPatternSets



```js
amazonaws_waf.ListRegexPatternSets({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListRegexPatternSetsResponse](#listregexpatternsetsresponse)

### ListRuleGroups



```js
amazonaws_waf.ListRuleGroups({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListRuleGroupsResponse](#listrulegroupsresponse)

### ListRules



```js
amazonaws_waf.ListRules({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListRulesResponse](#listrulesresponse)

### ListSizeConstraintSets



```js
amazonaws_waf.ListSizeConstraintSets({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListSizeConstraintSetsResponse](#listsizeconstraintsetsresponse)

### ListSqlInjectionMatchSets



```js
amazonaws_waf.ListSqlInjectionMatchSets({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListSqlInjectionMatchSetsResponse](#listsqlinjectionmatchsetsresponse)

### ListSubscribedRuleGroups



```js
amazonaws_waf.ListSubscribedRuleGroups({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListSubscribedRuleGroupsResponse](#listsubscribedrulegroupsresponse)

### ListWebACLs



```js
amazonaws_waf.ListWebACLs({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListWebACLsResponse](#listwebaclsresponse)

### ListXssMatchSets



```js
amazonaws_waf.ListXssMatchSets({}, context)
```

#### Input
* input `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

#### Output
* output [ListXssMatchSetsResponse](#listxssmatchsetsresponse)

### UpdateByteMatchSet



```js
amazonaws_waf.UpdateByteMatchSet({
  "ByteMatchSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Input
* input `object`
  * ByteMatchSetId **required** [ResourceId](#resourceid)
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Updates **required** [ByteMatchSetUpdates](#bytematchsetupdates)

#### Output
* output [UpdateByteMatchSetResponse](#updatebytematchsetresponse)

### UpdateGeoMatchSet



```js
amazonaws_waf.UpdateGeoMatchSet({
  "GeoMatchSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * GeoMatchSetId **required** [ResourceId](#resourceid)
  * Updates **required** [GeoMatchSetUpdates](#geomatchsetupdates)

#### Output
* output [UpdateGeoMatchSetResponse](#updategeomatchsetresponse)

### UpdateIPSet



```js
amazonaws_waf.UpdateIPSet({
  "IPSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * IPSetId **required** [ResourceId](#resourceid)
  * Updates **required** [IPSetUpdates](#ipsetupdates)

#### Output
* output [UpdateIPSetResponse](#updateipsetresponse)

### UpdateRateBasedRule



```js
amazonaws_waf.UpdateRateBasedRule({
  "RuleId": "",
  "ChangeToken": "",
  "Updates": [],
  "RateLimit": 0
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RateLimit **required** [RateLimit](#ratelimit)
  * RuleId **required** [ResourceId](#resourceid)
  * Updates **required** [RuleUpdates](#ruleupdates)

#### Output
* output [UpdateRateBasedRuleResponse](#updateratebasedruleresponse)

### UpdateRegexMatchSet



```js
amazonaws_waf.UpdateRegexMatchSet({
  "RegexMatchSetId": "",
  "Updates": [],
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RegexMatchSetId **required** [ResourceId](#resourceid)
  * Updates **required** [RegexMatchSetUpdates](#regexmatchsetupdates)

#### Output
* output [UpdateRegexMatchSetResponse](#updateregexmatchsetresponse)

### UpdateRegexPatternSet



```js
amazonaws_waf.UpdateRegexPatternSet({
  "RegexPatternSetId": "",
  "Updates": [],
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RegexPatternSetId **required** [ResourceId](#resourceid)
  * Updates **required** [RegexPatternSetUpdates](#regexpatternsetupdates)

#### Output
* output [UpdateRegexPatternSetResponse](#updateregexpatternsetresponse)

### UpdateRule



```js
amazonaws_waf.UpdateRule({
  "RuleId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleId **required** [ResourceId](#resourceid)
  * Updates **required** [RuleUpdates](#ruleupdates)

#### Output
* output [UpdateRuleResponse](#updateruleresponse)

### UpdateRuleGroup



```js
amazonaws_waf.UpdateRuleGroup({
  "RuleGroupId": "",
  "Updates": [],
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleGroupId **required** [ResourceId](#resourceid)
  * Updates **required** [RuleGroupUpdates](#rulegroupupdates)

#### Output
* output [UpdateRuleGroupResponse](#updaterulegroupresponse)

### UpdateSizeConstraintSet



```js
amazonaws_waf.UpdateSizeConstraintSet({
  "SizeConstraintSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * SizeConstraintSetId **required** [ResourceId](#resourceid)
  * Updates **required** [SizeConstraintSetUpdates](#sizeconstraintsetupdates)

#### Output
* output [UpdateSizeConstraintSetResponse](#updatesizeconstraintsetresponse)

### UpdateSqlInjectionMatchSet



```js
amazonaws_waf.UpdateSqlInjectionMatchSet({
  "SqlInjectionMatchSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * SqlInjectionMatchSetId **required** [ResourceId](#resourceid)
  * Updates **required** [SqlInjectionMatchSetUpdates](#sqlinjectionmatchsetupdates)

#### Output
* output [UpdateSqlInjectionMatchSetResponse](#updatesqlinjectionmatchsetresponse)

### UpdateWebACL



```js
amazonaws_waf.UpdateWebACL({
  "WebACLId": "",
  "ChangeToken": ""
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * DefaultAction [WafAction](#wafaction)
  * Updates [WebACLUpdates](#webaclupdates)
  * WebACLId **required** [ResourceId](#resourceid)

#### Output
* output [UpdateWebACLResponse](#updatewebaclresponse)

### UpdateXssMatchSet



```js
amazonaws_waf.UpdateXssMatchSet({
  "XssMatchSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Input
* input `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Updates **required** [XssMatchSetUpdates](#xssmatchsetupdates)
  * XssMatchSetId **required** [ResourceId](#resourceid)

#### Output
* output [UpdateXssMatchSetResponse](#updatexssmatchsetresponse)



## Definitions

### Action
* Action `string`

### ActivatedRule
* ActivatedRule `object`: <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>
  * Action [WafAction](#wafaction)
  * OverrideAction [WafOverrideAction](#wafoverrideaction)
  * Priority **required** [RulePriority](#rulepriority)
  * RuleId **required** [ResourceId](#resourceid)
  * Type [WafRuleType](#wafruletype)

### ActivatedRules
* ActivatedRules `array`
  * items [ActivatedRule](#activatedrule)

### ByteMatchSet
* ByteMatchSet `object`: <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p>
  * ByteMatchSetId **required** [ResourceId](#resourceid)
  * ByteMatchTuples **required** [ByteMatchTuples](#bytematchtuples)
  * Name [ResourceName](#resourcename)

### ByteMatchSetSummaries
* ByteMatchSetSummaries `array`
  * items [ByteMatchSetSummary](#bytematchsetsummary)

### ByteMatchSetSummary
* ByteMatchSetSummary `object`: Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and <code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.
  * ByteMatchSetId **required** [ResourceId](#resourceid)
  * Name **required** [ResourceName](#resourcename)

### ByteMatchSetUpdate
* ByteMatchSetUpdate `object`: In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.
  * Action **required** [ChangeAction](#changeaction)
  * ByteMatchTuple **required** [ByteMatchTuple](#bytematchtuple)

### ByteMatchSetUpdates
* ByteMatchSetUpdates `array`
  * items [ByteMatchSetUpdate](#bytematchsetupdate)

### ByteMatchTargetString
* ByteMatchTargetString `string`

### ByteMatchTuple
* ByteMatchTuple `object`: The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.
  * FieldToMatch **required** [FieldToMatch](#fieldtomatch)
  * PositionalConstraint **required** [PositionalConstraint](#positionalconstraint)
  * TargetString **required** [ByteMatchTargetString](#bytematchtargetstring)
  * TextTransformation **required** [TextTransformation](#texttransformation)

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
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

### CreateByteMatchSetResponse
* CreateByteMatchSetResponse `object`
  * ByteMatchSet [ByteMatchSet](#bytematchset)
  * ChangeToken [ChangeToken](#changetoken)

### CreateGeoMatchSetRequest
* CreateGeoMatchSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

### CreateGeoMatchSetResponse
* CreateGeoMatchSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)
  * GeoMatchSet [GeoMatchSet](#geomatchset)

### CreateIPSetRequest
* CreateIPSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

### CreateIPSetResponse
* CreateIPSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)
  * IPSet [IPSet](#ipset)

### CreateRateBasedRuleRequest
* CreateRateBasedRuleRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [ResourceName](#resourcename)
  * RateKey **required** [RateKey](#ratekey)
  * RateLimit **required** [RateLimit](#ratelimit)

### CreateRateBasedRuleResponse
* CreateRateBasedRuleResponse `object`
  * ChangeToken [ChangeToken](#changetoken)
  * Rule [RateBasedRule](#ratebasedrule)

### CreateRegexMatchSetRequest
* CreateRegexMatchSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

### CreateRegexMatchSetResponse
* CreateRegexMatchSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)
  * RegexMatchSet [RegexMatchSet](#regexmatchset)

### CreateRegexPatternSetRequest
* CreateRegexPatternSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

### CreateRegexPatternSetResponse
* CreateRegexPatternSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)
  * RegexPatternSet [RegexPatternSet](#regexpatternset)

### CreateRuleGroupRequest
* CreateRuleGroupRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [ResourceName](#resourcename)

### CreateRuleGroupResponse
* CreateRuleGroupResponse `object`
  * ChangeToken [ChangeToken](#changetoken)
  * RuleGroup [RuleGroup](#rulegroup)

### CreateRuleRequest
* CreateRuleRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [ResourceName](#resourcename)

### CreateRuleResponse
* CreateRuleResponse `object`
  * ChangeToken [ChangeToken](#changetoken)
  * Rule [Rule](#rule)

### CreateSizeConstraintSetRequest
* CreateSizeConstraintSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

### CreateSizeConstraintSetResponse
* CreateSizeConstraintSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)
  * SizeConstraintSet [SizeConstraintSet](#sizeconstraintset)

### CreateSqlInjectionMatchSetRequest
* CreateSqlInjectionMatchSetRequest `object`: A request to create a <a>SqlInjectionMatchSet</a>.
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

### CreateSqlInjectionMatchSetResponse
* CreateSqlInjectionMatchSetResponse `object`: The response to a <code>CreateSqlInjectionMatchSet</code> request.
  * ChangeToken [ChangeToken](#changetoken)
  * SqlInjectionMatchSet [SqlInjectionMatchSet](#sqlinjectionmatchset)

### CreateWebACLRequest
* CreateWebACLRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * DefaultAction **required** [WafAction](#wafaction)
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [ResourceName](#resourcename)

### CreateWebACLResponse
* CreateWebACLResponse `object`
  * ChangeToken [ChangeToken](#changetoken)
  * WebACL [WebACL](#webacl)

### CreateXssMatchSetRequest
* CreateXssMatchSetRequest `object`: A request to create an <a>XssMatchSet</a>.
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Name **required** [ResourceName](#resourcename)

### CreateXssMatchSetResponse
* CreateXssMatchSetResponse `object`: The response to a <code>CreateXssMatchSet</code> request.
  * ChangeToken [ChangeToken](#changetoken)
  * XssMatchSet [XssMatchSet](#xssmatchset)

### DeleteByteMatchSetRequest
* DeleteByteMatchSetRequest `object`
  * ByteMatchSetId **required** [ResourceId](#resourceid)
  * ChangeToken **required** [ChangeToken](#changetoken)

### DeleteByteMatchSetResponse
* DeleteByteMatchSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteGeoMatchSetRequest
* DeleteGeoMatchSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * GeoMatchSetId **required** [ResourceId](#resourceid)

### DeleteGeoMatchSetResponse
* DeleteGeoMatchSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteIPSetRequest
* DeleteIPSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * IPSetId **required** [ResourceId](#resourceid)

### DeleteIPSetResponse
* DeleteIPSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteRateBasedRuleRequest
* DeleteRateBasedRuleRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleId **required** [ResourceId](#resourceid)

### DeleteRateBasedRuleResponse
* DeleteRateBasedRuleResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteRegexMatchSetRequest
* DeleteRegexMatchSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RegexMatchSetId **required** [ResourceId](#resourceid)

### DeleteRegexMatchSetResponse
* DeleteRegexMatchSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteRegexPatternSetRequest
* DeleteRegexPatternSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RegexPatternSetId **required** [ResourceId](#resourceid)

### DeleteRegexPatternSetResponse
* DeleteRegexPatternSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteRuleGroupRequest
* DeleteRuleGroupRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleGroupId **required** [ResourceId](#resourceid)

### DeleteRuleGroupResponse
* DeleteRuleGroupResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteRuleRequest
* DeleteRuleRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleId **required** [ResourceId](#resourceid)

### DeleteRuleResponse
* DeleteRuleResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteSizeConstraintSetRequest
* DeleteSizeConstraintSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * SizeConstraintSetId **required** [ResourceId](#resourceid)

### DeleteSizeConstraintSetResponse
* DeleteSizeConstraintSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteSqlInjectionMatchSetRequest
* DeleteSqlInjectionMatchSetRequest `object`: A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
  * ChangeToken **required** [ChangeToken](#changetoken)
  * SqlInjectionMatchSetId **required** [ResourceId](#resourceid)

### DeleteSqlInjectionMatchSetResponse
* DeleteSqlInjectionMatchSetResponse `object`: The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
  * ChangeToken [ChangeToken](#changetoken)

### DeleteWebACLRequest
* DeleteWebACLRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * WebACLId **required** [ResourceId](#resourceid)

### DeleteWebACLResponse
* DeleteWebACLResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### DeleteXssMatchSetRequest
* DeleteXssMatchSetRequest `object`: A request to delete an <a>XssMatchSet</a> from AWS WAF.
  * ChangeToken **required** [ChangeToken](#changetoken)
  * XssMatchSetId **required** [ResourceId](#resourceid)

### DeleteXssMatchSetResponse
* DeleteXssMatchSetResponse `object`: The response to a request to delete an <a>XssMatchSet</a> from AWS WAF.
  * ChangeToken [ChangeToken](#changetoken)

### FieldToMatch
* FieldToMatch `object`: Specifies where in a web request to look for <code>TargetString</code>.
  * Data [MatchFieldData](#matchfielddata)
  * Type **required** [MatchFieldType](#matchfieldtype)

### GeoMatchConstraint
* GeoMatchConstraint `object`: The country from which web requests originate that you want AWS WAF to search for.
  * Type **required** [GeoMatchConstraintType](#geomatchconstrainttype)
  * Value **required** [GeoMatchConstraintValue](#geomatchconstraintvalue)

### GeoMatchConstraintType
* GeoMatchConstraintType `string` (values: Country)

### GeoMatchConstraintValue
* GeoMatchConstraintValue `string` (values: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BQ, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CW, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SX, SK, SI, SB, SO, ZA, GS, SS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW)

### GeoMatchConstraints
* GeoMatchConstraints `array`
  * items [GeoMatchConstraint](#geomatchconstraint)

### GeoMatchSet
* GeoMatchSet `object`: Contains one or more countries that AWS WAF will search for.
  * GeoMatchConstraints **required** [GeoMatchConstraints](#geomatchconstraints)
  * GeoMatchSetId **required** [ResourceId](#resourceid)
  * Name [ResourceName](#resourcename)

### GeoMatchSetSummaries
* GeoMatchSetSummaries `array`
  * items [GeoMatchSetSummary](#geomatchsetsummary)

### GeoMatchSetSummary
* GeoMatchSetSummary `object`: Contains the identifier and the name of the <code>GeoMatchSet</code>.
  * GeoMatchSetId **required** [ResourceId](#resourceid)
  * Name **required** [ResourceName](#resourcename)

### GeoMatchSetUpdate
* GeoMatchSetUpdate `object`: Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.
  * Action **required** [ChangeAction](#changeaction)
  * GeoMatchConstraint **required** [GeoMatchConstraint](#geomatchconstraint)

### GeoMatchSetUpdates
* GeoMatchSetUpdates `array`
  * items [GeoMatchSetUpdate](#geomatchsetupdate)

### GetByteMatchSetRequest
* GetByteMatchSetRequest `object`
  * ByteMatchSetId **required** [ResourceId](#resourceid)

### GetByteMatchSetResponse
* GetByteMatchSetResponse `object`
  * ByteMatchSet [ByteMatchSet](#bytematchset)

### GetChangeTokenRequest
* GetChangeTokenRequest `object`

### GetChangeTokenResponse
* GetChangeTokenResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### GetChangeTokenStatusRequest
* GetChangeTokenStatusRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)

### GetChangeTokenStatusResponse
* GetChangeTokenStatusResponse `object`
  * ChangeTokenStatus [ChangeTokenStatus](#changetokenstatus)

### GetGeoMatchSetRequest
* GetGeoMatchSetRequest `object`
  * GeoMatchSetId **required** [ResourceId](#resourceid)

### GetGeoMatchSetResponse
* GetGeoMatchSetResponse `object`
  * GeoMatchSet [GeoMatchSet](#geomatchset)

### GetIPSetRequest
* GetIPSetRequest `object`
  * IPSetId **required** [ResourceId](#resourceid)

### GetIPSetResponse
* GetIPSetResponse `object`
  * IPSet [IPSet](#ipset)

### GetRateBasedRuleManagedKeysRequest
* GetRateBasedRuleManagedKeysRequest `object`
  * NextMarker [NextMarker](#nextmarker)
  * RuleId **required** [ResourceId](#resourceid)

### GetRateBasedRuleManagedKeysResponse
* GetRateBasedRuleManagedKeysResponse `object`
  * ManagedKeys [ManagedKeys](#managedkeys)
  * NextMarker [NextMarker](#nextmarker)

### GetRateBasedRuleRequest
* GetRateBasedRuleRequest `object`
  * RuleId **required** [ResourceId](#resourceid)

### GetRateBasedRuleResponse
* GetRateBasedRuleResponse `object`
  * Rule [RateBasedRule](#ratebasedrule)

### GetRegexMatchSetRequest
* GetRegexMatchSetRequest `object`
  * RegexMatchSetId **required** [ResourceId](#resourceid)

### GetRegexMatchSetResponse
* GetRegexMatchSetResponse `object`
  * RegexMatchSet [RegexMatchSet](#regexmatchset)

### GetRegexPatternSetRequest
* GetRegexPatternSetRequest `object`
  * RegexPatternSetId **required** [ResourceId](#resourceid)

### GetRegexPatternSetResponse
* GetRegexPatternSetResponse `object`
  * RegexPatternSet [RegexPatternSet](#regexpatternset)

### GetRuleGroupRequest
* GetRuleGroupRequest `object`
  * RuleGroupId **required** [ResourceId](#resourceid)

### GetRuleGroupResponse
* GetRuleGroupResponse `object`
  * RuleGroup [RuleGroup](#rulegroup)

### GetRuleRequest
* GetRuleRequest `object`
  * RuleId **required** [ResourceId](#resourceid)

### GetRuleResponse
* GetRuleResponse `object`
  * Rule [Rule](#rule)

### GetSampledRequestsMaxItems
* GetSampledRequestsMaxItems `integer`

### GetSampledRequestsRequest
* GetSampledRequestsRequest `object`
  * MaxItems **required** [GetSampledRequestsMaxItems](#getsampledrequestsmaxitems)
  * RuleId **required** [ResourceId](#resourceid)
  * TimeWindow **required** [TimeWindow](#timewindow)
  * WebAclId **required** [ResourceId](#resourceid)

### GetSampledRequestsResponse
* GetSampledRequestsResponse `object`
  * PopulationSize [PopulationSize](#populationsize)
  * SampledRequests [SampledHTTPRequests](#sampledhttprequests)
  * TimeWindow [TimeWindow](#timewindow)

### GetSizeConstraintSetRequest
* GetSizeConstraintSetRequest `object`
  * SizeConstraintSetId **required** [ResourceId](#resourceid)

### GetSizeConstraintSetResponse
* GetSizeConstraintSetResponse `object`
  * SizeConstraintSet [SizeConstraintSet](#sizeconstraintset)

### GetSqlInjectionMatchSetRequest
* GetSqlInjectionMatchSetRequest `object`: A request to get a <a>SqlInjectionMatchSet</a>.
  * SqlInjectionMatchSetId **required** [ResourceId](#resourceid)

### GetSqlInjectionMatchSetResponse
* GetSqlInjectionMatchSetResponse `object`: The response to a <a>GetSqlInjectionMatchSet</a> request.
  * SqlInjectionMatchSet [SqlInjectionMatchSet](#sqlinjectionmatchset)

### GetWebACLRequest
* GetWebACLRequest `object`
  * WebACLId **required** [ResourceId](#resourceid)

### GetWebACLResponse
* GetWebACLResponse `object`
  * WebACL [WebACL](#webacl)

### GetXssMatchSetRequest
* GetXssMatchSetRequest `object`: A request to get an <a>XssMatchSet</a>.
  * XssMatchSetId **required** [ResourceId](#resourceid)

### GetXssMatchSetResponse
* GetXssMatchSetResponse `object`: The response to a <a>GetXssMatchSet</a> request.
  * XssMatchSet [XssMatchSet](#xssmatchset)

### HTTPHeader
* HTTPHeader `object`: The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. 
  * Name [HeaderName](#headername)
  * Value [HeaderValue](#headervalue)

### HTTPHeaders
* HTTPHeaders `array`
  * items [HTTPHeader](#httpheader)

### HTTPMethod
* HTTPMethod `string`

### HTTPRequest
* HTTPRequest `object`: The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. 
  * ClientIP [IPString](#ipstring)
  * Country [Country](#country)
  * HTTPVersion [HTTPVersion](#httpversion)
  * Headers [HTTPHeaders](#httpheaders)
  * Method [HTTPMethod](#httpmethod)
  * URI [URIString](#uristring)

### HTTPVersion
* HTTPVersion `string`

### HeaderName
* HeaderName `string`

### HeaderValue
* HeaderValue `string`

### IPSet
* IPSet `object`: <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports /8, /16, /24, and /32 IP address ranges for IPv4, and /24, /32, /48, /56, /64 and /128 for IPv6.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/31. To block a range of IP addresses, you can specify a <code>/128</code>, <code>/64</code>, <code>/56</code>, <code>/48</code>, <code>/32</code>, <code>/24</code>, <code>/16</code>, or <code>/8</code> CIDR. For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>
  * IPSetDescriptors **required** [IPSetDescriptors](#ipsetdescriptors)
  * IPSetId **required** [ResourceId](#resourceid)
  * Name [ResourceName](#resourcename)

### IPSetDescriptor
* IPSetDescriptor `object`: Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.
  * Type **required** [IPSetDescriptorType](#ipsetdescriptortype)
  * Value **required** [IPSetDescriptorValue](#ipsetdescriptorvalue)

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
* IPSetSummary `object`: Contains the identifier and the name of the <code>IPSet</code>.
  * IPSetId **required** [ResourceId](#resourceid)
  * Name **required** [ResourceName](#resourcename)

### IPSetUpdate
* IPSetUpdate `object`: Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.
  * Action **required** [ChangeAction](#changeaction)
  * IPSetDescriptor **required** [IPSetDescriptor](#ipsetdescriptor)

### IPSetUpdates
* IPSetUpdates `array`
  * items [IPSetUpdate](#ipsetupdate)

### IPString
* IPString `string`

### ListActivatedRulesInRuleGroupRequest
* ListActivatedRulesInRuleGroupRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)
  * RuleGroupId [ResourceId](#resourceid)

### ListActivatedRulesInRuleGroupResponse
* ListActivatedRulesInRuleGroupResponse `object`
  * ActivatedRules [ActivatedRules](#activatedrules)
  * NextMarker [NextMarker](#nextmarker)

### ListByteMatchSetsRequest
* ListByteMatchSetsRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListByteMatchSetsResponse
* ListByteMatchSetsResponse `object`
  * ByteMatchSets [ByteMatchSetSummaries](#bytematchsetsummaries)
  * NextMarker [NextMarker](#nextmarker)

### ListGeoMatchSetsRequest
* ListGeoMatchSetsRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListGeoMatchSetsResponse
* ListGeoMatchSetsResponse `object`
  * GeoMatchSets [GeoMatchSetSummaries](#geomatchsetsummaries)
  * NextMarker [NextMarker](#nextmarker)

### ListIPSetsRequest
* ListIPSetsRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListIPSetsResponse
* ListIPSetsResponse `object`
  * IPSets [IPSetSummaries](#ipsetsummaries)
  * NextMarker [NextMarker](#nextmarker)

### ListRateBasedRulesRequest
* ListRateBasedRulesRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListRateBasedRulesResponse
* ListRateBasedRulesResponse `object`
  * NextMarker [NextMarker](#nextmarker)
  * Rules [RuleSummaries](#rulesummaries)

### ListRegexMatchSetsRequest
* ListRegexMatchSetsRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListRegexMatchSetsResponse
* ListRegexMatchSetsResponse `object`
  * NextMarker [NextMarker](#nextmarker)
  * RegexMatchSets [RegexMatchSetSummaries](#regexmatchsetsummaries)

### ListRegexPatternSetsRequest
* ListRegexPatternSetsRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListRegexPatternSetsResponse
* ListRegexPatternSetsResponse `object`
  * NextMarker [NextMarker](#nextmarker)
  * RegexPatternSets [RegexPatternSetSummaries](#regexpatternsetsummaries)

### ListRuleGroupsRequest
* ListRuleGroupsRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListRuleGroupsResponse
* ListRuleGroupsResponse `object`
  * NextMarker [NextMarker](#nextmarker)
  * RuleGroups [RuleGroupSummaries](#rulegroupsummaries)

### ListRulesRequest
* ListRulesRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListRulesResponse
* ListRulesResponse `object`
  * NextMarker [NextMarker](#nextmarker)
  * Rules [RuleSummaries](#rulesummaries)

### ListSizeConstraintSetsRequest
* ListSizeConstraintSetsRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListSizeConstraintSetsResponse
* ListSizeConstraintSetsResponse `object`
  * NextMarker [NextMarker](#nextmarker)
  * SizeConstraintSets [SizeConstraintSetSummaries](#sizeconstraintsetsummaries)

### ListSqlInjectionMatchSetsRequest
* ListSqlInjectionMatchSetsRequest `object`: A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListSqlInjectionMatchSetsResponse
* ListSqlInjectionMatchSetsResponse `object`: The response to a <a>ListSqlInjectionMatchSets</a> request.
  * NextMarker [NextMarker](#nextmarker)
  * SqlInjectionMatchSets [SqlInjectionMatchSetSummaries](#sqlinjectionmatchsetsummaries)

### ListSubscribedRuleGroupsRequest
* ListSubscribedRuleGroupsRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListSubscribedRuleGroupsResponse
* ListSubscribedRuleGroupsResponse `object`
  * NextMarker [NextMarker](#nextmarker)
  * RuleGroups [SubscribedRuleGroupSummaries](#subscribedrulegroupsummaries)

### ListWebACLsRequest
* ListWebACLsRequest `object`
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListWebACLsResponse
* ListWebACLsResponse `object`
  * NextMarker [NextMarker](#nextmarker)
  * WebACLs [WebACLSummaries](#webaclsummaries)

### ListXssMatchSetsRequest
* ListXssMatchSetsRequest `object`: A request to list the <a>XssMatchSet</a> objects created by the current AWS account.
  * Limit [PaginationLimit](#paginationlimit)
  * NextMarker [NextMarker](#nextmarker)

### ListXssMatchSetsResponse
* ListXssMatchSetsResponse `object`: The response to a <a>ListXssMatchSets</a> request.
  * NextMarker [NextMarker](#nextmarker)
  * XssMatchSets [XssMatchSetSummaries](#xssmatchsetsummaries)

### ManagedKey
* ManagedKey `string`

### ManagedKeys
* ManagedKeys `array`
  * items [ManagedKey](#managedkey)

### MatchFieldData
* MatchFieldData `string`

### MatchFieldType
* MatchFieldType `string` (values: URI, QUERY_STRING, HEADER, METHOD, BODY)

### MetricName
* MetricName `string`

### Negated
* Negated `boolean`

### NextMarker
* NextMarker `string`

### PaginationLimit
* PaginationLimit `integer`

### ParameterExceptionField
* ParameterExceptionField `string` (values: CHANGE_ACTION, WAF_ACTION, WAF_OVERRIDE_ACTION, PREDICATE_TYPE, IPSET_TYPE, BYTE_MATCH_FIELD_TYPE, SQL_INJECTION_MATCH_FIELD_TYPE, BYTE_MATCH_TEXT_TRANSFORMATION, BYTE_MATCH_POSITIONAL_CONSTRAINT, SIZE_CONSTRAINT_COMPARISON_OPERATOR, GEO_MATCH_LOCATION_TYPE, GEO_MATCH_LOCATION_VALUE, RATE_KEY, RULE_TYPE, NEXT_MARKER)

### ParameterExceptionParameter
* ParameterExceptionParameter `string`

### ParameterExceptionReason
* ParameterExceptionReason `string` (values: INVALID_OPTION, ILLEGAL_COMBINATION)

### PopulationSize
* PopulationSize `integer`

### PositionalConstraint
* PositionalConstraint `string` (values: EXACTLY, STARTS_WITH, ENDS_WITH, CONTAINS, CONTAINS_WORD)

### Predicate
* Predicate `object`: Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. 
  * DataId **required** [ResourceId](#resourceid)
  * Negated **required** [Negated](#negated)
  * Type **required** [PredicateType](#predicatetype)

### PredicateType
* PredicateType `string` (values: IPMatch, ByteMatch, SqlInjectionMatch, GeoMatch, SizeConstraint, XssMatch, RegexMatch)

### Predicates
* Predicates `array`
  * items [Predicate](#predicate)

### RateBasedRule
* RateBasedRule `object`: <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 15,000.</p> <p>Requests that meet both of these conditions and exceed 15,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p>
  * MatchPredicates **required** [Predicates](#predicates)
  * MetricName [MetricName](#metricname)
  * Name [ResourceName](#resourcename)
  * RateKey **required** [RateKey](#ratekey)
  * RateLimit **required** [RateLimit](#ratelimit)
  * RuleId **required** [ResourceId](#resourceid)

### RateKey
* RateKey `string` (values: IP)

### RateLimit
* RateLimit `integer`

### RegexMatchSet
* RegexMatchSet `object`: <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p>
  * Name [ResourceName](#resourcename)
  * RegexMatchSetId [ResourceId](#resourceid)
  * RegexMatchTuples [RegexMatchTuples](#regexmatchtuples)

### RegexMatchSetSummaries
* RegexMatchSetSummaries `array`
  * items [RegexMatchSetSummary](#regexmatchsetsummary)

### RegexMatchSetSummary
* RegexMatchSetSummary `object`: Returned by <a>ListRegexMatchSets</a>. Each <code>RegexMatchSetSummary</code> object includes the <code>Name</code> and <code>RegexMatchSetId</code> for one <a>RegexMatchSet</a>.
  * Name **required** [ResourceName](#resourcename)
  * RegexMatchSetId **required** [ResourceId](#resourceid)

### RegexMatchSetUpdate
* RegexMatchSetUpdate `object`: In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.
  * Action **required** [ChangeAction](#changeaction)
  * RegexMatchTuple **required** [RegexMatchTuple](#regexmatchtuple)

### RegexMatchSetUpdates
* RegexMatchSetUpdates `array`
  * items [RegexMatchSetUpdate](#regexmatchsetupdate)

### RegexMatchTuple
* RegexMatchTuple `object`: <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul>
  * FieldToMatch **required** [FieldToMatch](#fieldtomatch)
  * RegexPatternSetId **required** [ResourceId](#resourceid)
  * TextTransformation **required** [TextTransformation](#texttransformation)

### RegexMatchTuples
* RegexMatchTuples `array`
  * items [RegexMatchTuple](#regexmatchtuple)

### RegexPatternSet
* RegexPatternSet `object`: The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.
  * Name [ResourceName](#resourcename)
  * RegexPatternSetId **required** [ResourceId](#resourceid)
  * RegexPatternStrings **required** [RegexPatternStrings](#regexpatternstrings)

### RegexPatternSetSummaries
* RegexPatternSetSummaries `array`
  * items [RegexPatternSetSummary](#regexpatternsetsummary)

### RegexPatternSetSummary
* RegexPatternSetSummary `object`: Returned by <a>ListRegexPatternSets</a>. Each <code>RegexPatternSetSummary</code> object includes the <code>Name</code> and <code>RegexPatternSetId</code> for one <a>RegexPatternSet</a>.
  * Name **required** [ResourceName](#resourcename)
  * RegexPatternSetId **required** [ResourceId](#resourceid)

### RegexPatternSetUpdate
* RegexPatternSetUpdate `object`: In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.
  * Action **required** [ChangeAction](#changeaction)
  * RegexPatternString **required** [RegexPatternString](#regexpatternstring)

### RegexPatternSetUpdates
* RegexPatternSetUpdates `array`
  * items [RegexPatternSetUpdate](#regexpatternsetupdate)

### RegexPatternString
* RegexPatternString `string`

### RegexPatternStrings
* RegexPatternStrings `array`
  * items [RegexPatternString](#regexpatternstring)

### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### Rule
* Rule `object`: <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p>
  * MetricName [MetricName](#metricname)
  * Name [ResourceName](#resourcename)
  * Predicates **required** [Predicates](#predicates)
  * RuleId **required** [ResourceId](#resourceid)

### RuleGroup
* RuleGroup `object`: <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul>
  * MetricName [MetricName](#metricname)
  * Name [ResourceName](#resourcename)
  * RuleGroupId **required** [ResourceId](#resourceid)

### RuleGroupSummaries
* RuleGroupSummaries `array`
  * items [RuleGroupSummary](#rulegroupsummary)

### RuleGroupSummary
* RuleGroupSummary `object`: Contains the identifier and the friendly name or description of the <code>RuleGroup</code>.
  * Name **required** [ResourceName](#resourcename)
  * RuleGroupId **required** [ResourceId](#resourceid)

### RuleGroupUpdate
* RuleGroupUpdate `object`: Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.
  * Action **required** [ChangeAction](#changeaction)
  * ActivatedRule **required** [ActivatedRule](#activatedrule)

### RuleGroupUpdates
* RuleGroupUpdates `array`
  * items [RuleGroupUpdate](#rulegroupupdate)

### RulePriority
* RulePriority `integer`

### RuleSummaries
* RuleSummaries `array`
  * items [RuleSummary](#rulesummary)

### RuleSummary
* RuleSummary `object`: Contains the identifier and the friendly name or description of the <code>Rule</code>.
  * Name **required** [ResourceName](#resourcename)
  * RuleId **required** [ResourceId](#resourceid)

### RuleUpdate
* RuleUpdate `object`: Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.
  * Action **required** [ChangeAction](#changeaction)
  * Predicate **required** [Predicate](#predicate)

### RuleUpdates
* RuleUpdates `array`
  * items [RuleUpdate](#ruleupdate)

### SampleWeight
* SampleWeight `integer`

### SampledHTTPRequest
* SampledHTTPRequest `object`: The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.
  * Action [Action](#action)
  * Request **required** [HTTPRequest](#httprequest)
  * RuleWithinRuleGroup [ResourceId](#resourceid)
  * Timestamp [Timestamp](#timestamp)
  * Weight **required** [SampleWeight](#sampleweight)

### SampledHTTPRequests
* SampledHTTPRequests `array`
  * items [SampledHTTPRequest](#sampledhttprequest)

### Size
* Size `integer`

### SizeConstraint
* SizeConstraint `object`: Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.
  * ComparisonOperator **required** [ComparisonOperator](#comparisonoperator)
  * FieldToMatch **required** [FieldToMatch](#fieldtomatch)
  * Size **required** [Size](#size)
  * TextTransformation **required** [TextTransformation](#texttransformation)

### SizeConstraintSet
* SizeConstraintSet `object`: A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.
  * Name [ResourceName](#resourcename)
  * SizeConstraintSetId **required** [ResourceId](#resourceid)
  * SizeConstraints **required** [SizeConstraints](#sizeconstraints)

### SizeConstraintSetSummaries
* SizeConstraintSetSummaries `array`
  * items [SizeConstraintSetSummary](#sizeconstraintsetsummary)

### SizeConstraintSetSummary
* SizeConstraintSetSummary `object`: The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.
  * Name **required** [ResourceName](#resourcename)
  * SizeConstraintSetId **required** [ResourceId](#resourceid)

### SizeConstraintSetUpdate
* SizeConstraintSetUpdate `object`: Specifies the part of a web request that you want to inspect the size of and indicates whether you want to add the specification to a <a>SizeConstraintSet</a> or delete it from a <code>SizeConstraintSet</code>.
  * Action **required** [ChangeAction](#changeaction)
  * SizeConstraint **required** [SizeConstraint](#sizeconstraint)

### SizeConstraintSetUpdates
* SizeConstraintSetUpdates `array`
  * items [SizeConstraintSetUpdate](#sizeconstraintsetupdate)

### SizeConstraints
* SizeConstraints `array`
  * items [SizeConstraint](#sizeconstraint)

### SqlInjectionMatchSet
* SqlInjectionMatchSet `object`: A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.
  * Name [ResourceName](#resourcename)
  * SqlInjectionMatchSetId **required** [ResourceId](#resourceid)
  * SqlInjectionMatchTuples **required** [SqlInjectionMatchTuples](#sqlinjectionmatchtuples)

### SqlInjectionMatchSetSummaries
* SqlInjectionMatchSetSummaries `array`
  * items [SqlInjectionMatchSetSummary](#sqlinjectionmatchsetsummary)

### SqlInjectionMatchSetSummary
* SqlInjectionMatchSetSummary `object`: The <code>Id</code> and <code>Name</code> of a <code>SqlInjectionMatchSet</code>.
  * Name **required** [ResourceName](#resourcename)
  * SqlInjectionMatchSetId **required** [ResourceId](#resourceid)

### SqlInjectionMatchSetUpdate
* SqlInjectionMatchSetUpdate `object`: Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.
  * Action **required** [ChangeAction](#changeaction)
  * SqlInjectionMatchTuple **required** [SqlInjectionMatchTuple](#sqlinjectionmatchtuple)

### SqlInjectionMatchSetUpdates
* SqlInjectionMatchSetUpdates `array`
  * items [SqlInjectionMatchSetUpdate](#sqlinjectionmatchsetupdate)

### SqlInjectionMatchTuple
* SqlInjectionMatchTuple `object`: Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
  * FieldToMatch **required** [FieldToMatch](#fieldtomatch)
  * TextTransformation **required** [TextTransformation](#texttransformation)

### SqlInjectionMatchTuples
* SqlInjectionMatchTuples `array`
  * items [SqlInjectionMatchTuple](#sqlinjectionmatchtuple)

### SubscribedRuleGroupSummaries
* SubscribedRuleGroupSummaries `array`
  * items [SubscribedRuleGroupSummary](#subscribedrulegroupsummary)

### SubscribedRuleGroupSummary
* SubscribedRuleGroupSummary `object`: A summary of the rule groups you are subscribed to.
  * MetricName **required** [MetricName](#metricname)
  * Name **required** [ResourceName](#resourcename)
  * RuleGroupId **required** [ResourceId](#resourceid)

### TextTransformation
* TextTransformation `string` (values: NONE, COMPRESS_WHITE_SPACE, HTML_ENTITY_DECODE, LOWERCASE, CMD_LINE, URL_DECODE)

### TimeWindow
* TimeWindow `object`: <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p>
  * EndTime **required** [Timestamp](#timestamp)
  * StartTime **required** [Timestamp](#timestamp)

### Timestamp
* Timestamp `string`

### URIString
* URIString `string`

### UpdateByteMatchSetRequest
* UpdateByteMatchSetRequest `object`
  * ByteMatchSetId **required** [ResourceId](#resourceid)
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Updates **required** [ByteMatchSetUpdates](#bytematchsetupdates)

### UpdateByteMatchSetResponse
* UpdateByteMatchSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateGeoMatchSetRequest
* UpdateGeoMatchSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * GeoMatchSetId **required** [ResourceId](#resourceid)
  * Updates **required** [GeoMatchSetUpdates](#geomatchsetupdates)

### UpdateGeoMatchSetResponse
* UpdateGeoMatchSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateIPSetRequest
* UpdateIPSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * IPSetId **required** [ResourceId](#resourceid)
  * Updates **required** [IPSetUpdates](#ipsetupdates)

### UpdateIPSetResponse
* UpdateIPSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateRateBasedRuleRequest
* UpdateRateBasedRuleRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RateLimit **required** [RateLimit](#ratelimit)
  * RuleId **required** [ResourceId](#resourceid)
  * Updates **required** [RuleUpdates](#ruleupdates)

### UpdateRateBasedRuleResponse
* UpdateRateBasedRuleResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateRegexMatchSetRequest
* UpdateRegexMatchSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RegexMatchSetId **required** [ResourceId](#resourceid)
  * Updates **required** [RegexMatchSetUpdates](#regexmatchsetupdates)

### UpdateRegexMatchSetResponse
* UpdateRegexMatchSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateRegexPatternSetRequest
* UpdateRegexPatternSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RegexPatternSetId **required** [ResourceId](#resourceid)
  * Updates **required** [RegexPatternSetUpdates](#regexpatternsetupdates)

### UpdateRegexPatternSetResponse
* UpdateRegexPatternSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateRuleGroupRequest
* UpdateRuleGroupRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleGroupId **required** [ResourceId](#resourceid)
  * Updates **required** [RuleGroupUpdates](#rulegroupupdates)

### UpdateRuleGroupResponse
* UpdateRuleGroupResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateRuleRequest
* UpdateRuleRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * RuleId **required** [ResourceId](#resourceid)
  * Updates **required** [RuleUpdates](#ruleupdates)

### UpdateRuleResponse
* UpdateRuleResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateSizeConstraintSetRequest
* UpdateSizeConstraintSetRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * SizeConstraintSetId **required** [ResourceId](#resourceid)
  * Updates **required** [SizeConstraintSetUpdates](#sizeconstraintsetupdates)

### UpdateSizeConstraintSetResponse
* UpdateSizeConstraintSetResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateSqlInjectionMatchSetRequest
* UpdateSqlInjectionMatchSetRequest `object`: A request to update a <a>SqlInjectionMatchSet</a>.
  * ChangeToken **required** [ChangeToken](#changetoken)
  * SqlInjectionMatchSetId **required** [ResourceId](#resourceid)
  * Updates **required** [SqlInjectionMatchSetUpdates](#sqlinjectionmatchsetupdates)

### UpdateSqlInjectionMatchSetResponse
* UpdateSqlInjectionMatchSetResponse `object`: The response to an <a>UpdateSqlInjectionMatchSets</a> request.
  * ChangeToken [ChangeToken](#changetoken)

### UpdateWebACLRequest
* UpdateWebACLRequest `object`
  * ChangeToken **required** [ChangeToken](#changetoken)
  * DefaultAction [WafAction](#wafaction)
  * Updates [WebACLUpdates](#webaclupdates)
  * WebACLId **required** [ResourceId](#resourceid)

### UpdateWebACLResponse
* UpdateWebACLResponse `object`
  * ChangeToken [ChangeToken](#changetoken)

### UpdateXssMatchSetRequest
* UpdateXssMatchSetRequest `object`: A request to update an <a>XssMatchSet</a>.
  * ChangeToken **required** [ChangeToken](#changetoken)
  * Updates **required** [XssMatchSetUpdates](#xssmatchsetupdates)
  * XssMatchSetId **required** [ResourceId](#resourceid)

### UpdateXssMatchSetResponse
* UpdateXssMatchSetResponse `object`: The response to an <a>UpdateXssMatchSets</a> request.
  * ChangeToken [ChangeToken](#changetoken)

### WAFDisallowedNameException
* WAFDisallowedNameException `object`: The name specified is invalid.
  * message [errorMessage](#errormessage)

### WAFInternalErrorException
* WAFInternalErrorException `object`: The operation failed because of a system problem, even though the request was valid. Retry your request.
  * message [errorMessage](#errormessage)

### WAFInvalidAccountException
* WAFInvalidAccountException `object`: The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.

### WAFInvalidOperationException
* WAFInvalidOperationException `object`: <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add an IP address to an <code>IPSet</code>, but the IP address already exists in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
  * message [errorMessage](#errormessage)

### WAFInvalidParameterException
* WAFInvalidParameterException `object`: <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
  * field [ParameterExceptionField](#parameterexceptionfield)
  * parameter [ParameterExceptionParameter](#parameterexceptionparameter)
  * reason [ParameterExceptionReason](#parameterexceptionreason)

### WAFInvalidRegexPatternException
* WAFInvalidRegexPatternException `object`: The regular expression (regex) you specified in <code>RegexPatternString</code> is invalid.
  * message [errorMessage](#errormessage)

### WAFLimitsExceededException
* WAFLimitsExceededException `object`: The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="http://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.
  * message [errorMessage](#errormessage)

### WAFNonEmptyEntityException
* WAFNonEmptyEntityException `object`: <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
  * message [errorMessage](#errormessage)

### WAFNonexistentContainerException
* WAFNonexistentContainerException `object`: <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
  * message [errorMessage](#errormessage)

### WAFNonexistentItemException
* WAFNonexistentItemException `object`: The operation failed because the referenced object doesn't exist.
  * message [errorMessage](#errormessage)

### WAFReferencedItemException
* WAFReferencedItemException `object`: <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
  * message [errorMessage](#errormessage)

### WAFStaleDataException
* WAFStaleDataException `object`: The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
  * message [errorMessage](#errormessage)

### WAFSubscriptionNotFoundException
* WAFSubscriptionNotFoundException `object`: The specified subscription does not exist.
  * message [errorMessage](#errormessage)

### WafAction
* WafAction `object`: For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. 
  * Type **required** [WafActionType](#wafactiontype)

### WafActionType
* WafActionType `string` (values: BLOCK, ALLOW, COUNT)

### WafOverrideAction
* WafOverrideAction `object`: The action to take if any rule within the <code>RuleGroup</code> matches a request. 
  * Type **required** [WafOverrideActionType](#wafoverrideactiontype)

### WafOverrideActionType
* WafOverrideActionType `string` (values: NONE, COUNT)

### WafRuleType
* WafRuleType `string` (values: REGULAR, RATE_BASED, GROUP)

### WebACL
* WebACL `object`: Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.
  * DefaultAction **required** [WafAction](#wafaction)
  * MetricName [MetricName](#metricname)
  * Name [ResourceName](#resourcename)
  * Rules **required** [ActivatedRules](#activatedrules)
  * WebACLId **required** [ResourceId](#resourceid)

### WebACLSummaries
* WebACLSummaries `array`
  * items [WebACLSummary](#webaclsummary)

### WebACLSummary
* WebACLSummary `object`: Contains the identifier and the name or description of the <a>WebACL</a>.
  * Name **required** [ResourceName](#resourcename)
  * WebACLId **required** [ResourceId](#resourceid)

### WebACLUpdate
* WebACLUpdate `object`: Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.
  * Action **required** [ChangeAction](#changeaction)
  * ActivatedRule **required** [ActivatedRule](#activatedrule)

### WebACLUpdates
* WebACLUpdates `array`
  * items [WebACLUpdate](#webaclupdate)

### XssMatchSet
* XssMatchSet `object`: A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.
  * Name [ResourceName](#resourcename)
  * XssMatchSetId **required** [ResourceId](#resourceid)
  * XssMatchTuples **required** [XssMatchTuples](#xssmatchtuples)

### XssMatchSetSummaries
* XssMatchSetSummaries `array`
  * items [XssMatchSetSummary](#xssmatchsetsummary)

### XssMatchSetSummary
* XssMatchSetSummary `object`: The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.
  * Name **required** [ResourceName](#resourcename)
  * XssMatchSetId **required** [ResourceId](#resourceid)

### XssMatchSetUpdate
* XssMatchSetUpdate `object`: Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.
  * Action **required** [ChangeAction](#changeaction)
  * XssMatchTuple **required** [XssMatchTuple](#xssmatchtuple)

### XssMatchSetUpdates
* XssMatchSetUpdates `array`
  * items [XssMatchSetUpdate](#xssmatchsetupdate)

### XssMatchTuple
* XssMatchTuple `object`: Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.
  * FieldToMatch **required** [FieldToMatch](#fieldtomatch)
  * TextTransformation **required** [TextTransformation](#texttransformation)

### XssMatchTuples
* XssMatchTuples `array`
  * items [XssMatchTuple](#xssmatchtuple)

### errorMessage
* errorMessage `string`


