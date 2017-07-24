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


### CreateIPSet



```js
amazonaws_waf.CreateIPSet({}, context)
```


### CreateRule



```js
amazonaws_waf.CreateRule({}, context)
```


### CreateSizeConstraintSet



```js
amazonaws_waf.CreateSizeConstraintSet({}, context)
```


### CreateSqlInjectionMatchSet



```js
amazonaws_waf.CreateSqlInjectionMatchSet({}, context)
```


### CreateWebACL



```js
amazonaws_waf.CreateWebACL({}, context)
```


### CreateXssMatchSet



```js
amazonaws_waf.CreateXssMatchSet({}, context)
```


### DeleteByteMatchSet



```js
amazonaws_waf.DeleteByteMatchSet({}, context)
```


### DeleteIPSet



```js
amazonaws_waf.DeleteIPSet({}, context)
```


### DeleteRule



```js
amazonaws_waf.DeleteRule({}, context)
```


### DeleteSizeConstraintSet



```js
amazonaws_waf.DeleteSizeConstraintSet({}, context)
```


### DeleteSqlInjectionMatchSet



```js
amazonaws_waf.DeleteSqlInjectionMatchSet({}, context)
```


### DeleteWebACL



```js
amazonaws_waf.DeleteWebACL({}, context)
```


### DeleteXssMatchSet



```js
amazonaws_waf.DeleteXssMatchSet({}, context)
```


### GetByteMatchSet



```js
amazonaws_waf.GetByteMatchSet({}, context)
```


### GetChangeToken



```js
amazonaws_waf.GetChangeToken({}, context)
```


### GetChangeTokenStatus



```js
amazonaws_waf.GetChangeTokenStatus({}, context)
```


### GetIPSet



```js
amazonaws_waf.GetIPSet({}, context)
```


### GetRule



```js
amazonaws_waf.GetRule({}, context)
```


### GetSampledRequests



```js
amazonaws_waf.GetSampledRequests({}, context)
```


### GetSizeConstraintSet



```js
amazonaws_waf.GetSizeConstraintSet({}, context)
```


### GetSqlInjectionMatchSet



```js
amazonaws_waf.GetSqlInjectionMatchSet({}, context)
```


### GetWebACL



```js
amazonaws_waf.GetWebACL({}, context)
```


### GetXssMatchSet



```js
amazonaws_waf.GetXssMatchSet({}, context)
```


### ListByteMatchSets



```js
amazonaws_waf.ListByteMatchSets({}, context)
```


### ListIPSets



```js
amazonaws_waf.ListIPSets({}, context)
```


### ListRules



```js
amazonaws_waf.ListRules({}, context)
```


### ListSizeConstraintSets



```js
amazonaws_waf.ListSizeConstraintSets({}, context)
```


### ListSqlInjectionMatchSets



```js
amazonaws_waf.ListSqlInjectionMatchSets({}, context)
```


### ListWebACLs



```js
amazonaws_waf.ListWebACLs({}, context)
```


### ListXssMatchSets



```js
amazonaws_waf.ListXssMatchSets({}, context)
```


### UpdateByteMatchSet



```js
amazonaws_waf.UpdateByteMatchSet({}, context)
```


### UpdateIPSet



```js
amazonaws_waf.UpdateIPSet({}, context)
```


### UpdateRule



```js
amazonaws_waf.UpdateRule({}, context)
```


### UpdateSizeConstraintSet



```js
amazonaws_waf.UpdateSizeConstraintSet({}, context)
```


### UpdateSqlInjectionMatchSet



```js
amazonaws_waf.UpdateSqlInjectionMatchSet({}, context)
```


### UpdateWebACL



```js
amazonaws_waf.UpdateWebACL({}, context)
```


### UpdateXssMatchSet



```js
amazonaws_waf.UpdateXssMatchSet({}, context)
```


