# @datafire/amazonaws_waf

Client library for AWS WAF

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_waf
```

```js
let datafire = require('datafire');
let amazonaws_waf = require('@datafire/amazonaws_waf').actions;
let context = new datafire.Context();

amazonaws_waf.CreateByteMatchSet({}, context).then(data => {
  console.log(data);
})
```

## Description
This is the <i>AWS WAF API Reference</i> for using AWS WAF with Amazon CloudFront. The AWS WAF actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint <i>waf.amazonaws.com</i>. This guide is for developers who need detailed information about the AWS WAF API actions, data types, and errors. For detailed information about AWS WAF features and an overview of how to use the AWS WAF API, see the <a href="http://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.

## Actions
### CreateByteMatchSet



```js
amazonaws_waf.CreateByteMatchSet({}, context)
```

#### Parameters

### CreateIPSet



```js
amazonaws_waf.CreateIPSet({}, context)
```

#### Parameters

### CreateRule



```js
amazonaws_waf.CreateRule({}, context)
```

#### Parameters

### CreateSizeConstraintSet



```js
amazonaws_waf.CreateSizeConstraintSet({}, context)
```

#### Parameters

### CreateSqlInjectionMatchSet



```js
amazonaws_waf.CreateSqlInjectionMatchSet({}, context)
```

#### Parameters

### CreateWebACL



```js
amazonaws_waf.CreateWebACL({}, context)
```

#### Parameters

### CreateXssMatchSet



```js
amazonaws_waf.CreateXssMatchSet({}, context)
```

#### Parameters

### DeleteByteMatchSet



```js
amazonaws_waf.DeleteByteMatchSet({}, context)
```

#### Parameters

### DeleteIPSet



```js
amazonaws_waf.DeleteIPSet({}, context)
```

#### Parameters

### DeleteRule



```js
amazonaws_waf.DeleteRule({}, context)
```

#### Parameters

### DeleteSizeConstraintSet



```js
amazonaws_waf.DeleteSizeConstraintSet({}, context)
```

#### Parameters

### DeleteSqlInjectionMatchSet



```js
amazonaws_waf.DeleteSqlInjectionMatchSet({}, context)
```

#### Parameters

### DeleteWebACL



```js
amazonaws_waf.DeleteWebACL({}, context)
```

#### Parameters

### DeleteXssMatchSet



```js
amazonaws_waf.DeleteXssMatchSet({}, context)
```

#### Parameters

### GetByteMatchSet



```js
amazonaws_waf.GetByteMatchSet({}, context)
```

#### Parameters

### GetChangeToken



```js
amazonaws_waf.GetChangeToken({}, context)
```

#### Parameters

### GetChangeTokenStatus



```js
amazonaws_waf.GetChangeTokenStatus({}, context)
```

#### Parameters

### GetIPSet



```js
amazonaws_waf.GetIPSet({}, context)
```

#### Parameters

### GetRule



```js
amazonaws_waf.GetRule({}, context)
```

#### Parameters

### GetSampledRequests



```js
amazonaws_waf.GetSampledRequests({}, context)
```

#### Parameters

### GetSizeConstraintSet



```js
amazonaws_waf.GetSizeConstraintSet({}, context)
```

#### Parameters

### GetSqlInjectionMatchSet



```js
amazonaws_waf.GetSqlInjectionMatchSet({}, context)
```

#### Parameters

### GetWebACL



```js
amazonaws_waf.GetWebACL({}, context)
```

#### Parameters

### GetXssMatchSet



```js
amazonaws_waf.GetXssMatchSet({}, context)
```

#### Parameters

### ListByteMatchSets



```js
amazonaws_waf.ListByteMatchSets({}, context)
```

#### Parameters

### ListIPSets



```js
amazonaws_waf.ListIPSets({}, context)
```

#### Parameters

### ListRules



```js
amazonaws_waf.ListRules({}, context)
```

#### Parameters

### ListSizeConstraintSets



```js
amazonaws_waf.ListSizeConstraintSets({}, context)
```

#### Parameters

### ListSqlInjectionMatchSets



```js
amazonaws_waf.ListSqlInjectionMatchSets({}, context)
```

#### Parameters

### ListWebACLs



```js
amazonaws_waf.ListWebACLs({}, context)
```

#### Parameters

### ListXssMatchSets



```js
amazonaws_waf.ListXssMatchSets({}, context)
```

#### Parameters

### UpdateByteMatchSet



```js
amazonaws_waf.UpdateByteMatchSet({}, context)
```

#### Parameters

### UpdateIPSet



```js
amazonaws_waf.UpdateIPSet({}, context)
```

#### Parameters

### UpdateRule



```js
amazonaws_waf.UpdateRule({}, context)
```

#### Parameters

### UpdateSizeConstraintSet



```js
amazonaws_waf.UpdateSizeConstraintSet({}, context)
```

#### Parameters

### UpdateSqlInjectionMatchSet



```js
amazonaws_waf.UpdateSqlInjectionMatchSet({}, context)
```

#### Parameters

### UpdateWebACL



```js
amazonaws_waf.UpdateWebACL({}, context)
```

#### Parameters

### UpdateXssMatchSet



```js
amazonaws_waf.UpdateXssMatchSet({}, context)
```

#### Parameters

