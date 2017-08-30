# @datafire/amazonaws_waf

Client library for AWS WAF

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_waf
```

```js
let datafire = require('datafire');
let amazonaws_waf = require('@datafire/amazonaws_waf').create();

amazonaws_waf.CreateByteMatchSet({}).then(data => {
  console.log(data);
})
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

#### Parameters
* ChangeToken (string) **required**
* Name (string) **required**

### CreateIPSet



```js
amazonaws_waf.CreateIPSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* Name (string) **required**

### CreateRule



```js
amazonaws_waf.CreateRule({
  "Name": "",
  "MetricName": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* MetricName (string) **required**
* Name (string) **required**

### CreateSizeConstraintSet



```js
amazonaws_waf.CreateSizeConstraintSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* Name (string) **required**

### CreateSqlInjectionMatchSet



```js
amazonaws_waf.CreateSqlInjectionMatchSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* Name (string) **required**

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

#### Parameters
* ChangeToken (string) **required**
* DefaultAction (object) **required** - For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. 
* MetricName (string) **required**
* Name (string) **required**

### CreateXssMatchSet



```js
amazonaws_waf.CreateXssMatchSet({
  "Name": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* Name (string) **required**

### DeleteByteMatchSet



```js
amazonaws_waf.DeleteByteMatchSet({
  "ByteMatchSetId": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ByteMatchSetId (string) **required**
* ChangeToken (string) **required**

### DeleteIPSet



```js
amazonaws_waf.DeleteIPSet({
  "IPSetId": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* IPSetId (string) **required**

### DeleteRule



```js
amazonaws_waf.DeleteRule({
  "RuleId": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* RuleId (string) **required**

### DeleteSizeConstraintSet



```js
amazonaws_waf.DeleteSizeConstraintSet({
  "SizeConstraintSetId": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* SizeConstraintSetId (string) **required**

### DeleteSqlInjectionMatchSet



```js
amazonaws_waf.DeleteSqlInjectionMatchSet({
  "SqlInjectionMatchSetId": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* SqlInjectionMatchSetId (string) **required**

### DeleteWebACL



```js
amazonaws_waf.DeleteWebACL({
  "WebACLId": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* WebACLId (string) **required**

### DeleteXssMatchSet



```js
amazonaws_waf.DeleteXssMatchSet({
  "XssMatchSetId": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* XssMatchSetId (string) **required**

### GetByteMatchSet



```js
amazonaws_waf.GetByteMatchSet({
  "ByteMatchSetId": ""
}, context)
```

#### Parameters
* ByteMatchSetId (string) **required**

### GetChangeToken



```js
amazonaws_waf.GetChangeToken({}, context)
```

#### Parameters
*This action has no parameters*

### GetChangeTokenStatus



```js
amazonaws_waf.GetChangeTokenStatus({
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**

### GetIPSet



```js
amazonaws_waf.GetIPSet({
  "IPSetId": ""
}, context)
```

#### Parameters
* IPSetId (string) **required**

### GetRule



```js
amazonaws_waf.GetRule({
  "RuleId": ""
}, context)
```

#### Parameters
* RuleId (string) **required**

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

#### Parameters
* MaxItems (integer) **required**
* RuleId (string) **required**
* TimeWindow (object) **required** - <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p>
* WebAclId (string) **required**

### GetSizeConstraintSet



```js
amazonaws_waf.GetSizeConstraintSet({
  "SizeConstraintSetId": ""
}, context)
```

#### Parameters
* SizeConstraintSetId (string) **required**

### GetSqlInjectionMatchSet



```js
amazonaws_waf.GetSqlInjectionMatchSet({
  "SqlInjectionMatchSetId": ""
}, context)
```

#### Parameters
* SqlInjectionMatchSetId (string) **required**

### GetWebACL



```js
amazonaws_waf.GetWebACL({
  "WebACLId": ""
}, context)
```

#### Parameters
* WebACLId (string) **required**

### GetXssMatchSet



```js
amazonaws_waf.GetXssMatchSet({
  "XssMatchSetId": ""
}, context)
```

#### Parameters
* XssMatchSetId (string) **required**

### ListByteMatchSets



```js
amazonaws_waf.ListByteMatchSets({}, context)
```

#### Parameters
* Limit (integer)
* NextMarker (string)

### ListIPSets



```js
amazonaws_waf.ListIPSets({}, context)
```

#### Parameters
* Limit (integer)
* NextMarker (string)

### ListRules



```js
amazonaws_waf.ListRules({}, context)
```

#### Parameters
* Limit (integer)
* NextMarker (string)

### ListSizeConstraintSets



```js
amazonaws_waf.ListSizeConstraintSets({}, context)
```

#### Parameters
* Limit (integer)
* NextMarker (string)

### ListSqlInjectionMatchSets



```js
amazonaws_waf.ListSqlInjectionMatchSets({}, context)
```

#### Parameters
* Limit (integer)
* NextMarker (string)

### ListWebACLs



```js
amazonaws_waf.ListWebACLs({}, context)
```

#### Parameters
* Limit (integer)
* NextMarker (string)

### ListXssMatchSets



```js
amazonaws_waf.ListXssMatchSets({}, context)
```

#### Parameters
* Limit (integer)
* NextMarker (string)

### UpdateByteMatchSet



```js
amazonaws_waf.UpdateByteMatchSet({
  "ByteMatchSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Parameters
* ByteMatchSetId (string) **required**
* ChangeToken (string) **required**
* Updates (array) **required**

### UpdateIPSet



```js
amazonaws_waf.UpdateIPSet({
  "IPSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* IPSetId (string) **required**
* Updates (array) **required**

### UpdateRule



```js
amazonaws_waf.UpdateRule({
  "RuleId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* RuleId (string) **required**
* Updates (array) **required**

### UpdateSizeConstraintSet



```js
amazonaws_waf.UpdateSizeConstraintSet({
  "SizeConstraintSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* SizeConstraintSetId (string) **required**
* Updates (array) **required**

### UpdateSqlInjectionMatchSet



```js
amazonaws_waf.UpdateSqlInjectionMatchSet({
  "SqlInjectionMatchSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* SqlInjectionMatchSetId (string) **required**
* Updates (array) **required**

### UpdateWebACL



```js
amazonaws_waf.UpdateWebACL({
  "WebACLId": "",
  "ChangeToken": ""
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* DefaultAction (object) - For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. 
* Updates (array)
* WebACLId (string) **required**

### UpdateXssMatchSet



```js
amazonaws_waf.UpdateXssMatchSet({
  "XssMatchSetId": "",
  "ChangeToken": "",
  "Updates": []
}, context)
```

#### Parameters
* ChangeToken (string) **required**
* Updates (array) **required**
* XssMatchSetId (string) **required**

