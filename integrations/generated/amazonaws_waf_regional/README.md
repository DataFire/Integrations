# @datafire/amazonaws_waf_regional

Client library for AWS WAF Regional

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_waf_regional
```

```js
let datafire = require('datafire');
let amazonaws_waf_regional = require('@datafire/amazonaws_waf_regional').create();

amazonaws_waf_regional.AssociateWebACL({}).then(data => {
  console.log(data);
})
```

## Description
This is the <i>AWS WAF Regional API Reference</i> for using AWS WAF with Elastic Load Balancing (ELB) Application Load Balancers. The AWS WAF actions and data types listed in the reference are available for protecting Application Load Balancers. You can use these actions and data types by means of the endpoints listed in <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Regions and Endpoints</a>. This guide is for developers who need detailed information about the AWS WAF API actions, data types, and errors. For detailed information about AWS WAF features and an overview of how to use the AWS WAF API, see the <a href="http://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.

## Actions
### AssociateWebACL



```js
amazonaws_waf_regional.AssociateWebACL({}, context)
```


### CreateByteMatchSet



```js
amazonaws_waf_regional.CreateByteMatchSet({}, context)
```


### CreateIPSet



```js
amazonaws_waf_regional.CreateIPSet({}, context)
```


### CreateRule



```js
amazonaws_waf_regional.CreateRule({}, context)
```


### CreateSizeConstraintSet



```js
amazonaws_waf_regional.CreateSizeConstraintSet({}, context)
```


### CreateSqlInjectionMatchSet



```js
amazonaws_waf_regional.CreateSqlInjectionMatchSet({}, context)
```


### CreateWebACL



```js
amazonaws_waf_regional.CreateWebACL({}, context)
```


### CreateXssMatchSet



```js
amazonaws_waf_regional.CreateXssMatchSet({}, context)
```


### DeleteByteMatchSet



```js
amazonaws_waf_regional.DeleteByteMatchSet({}, context)
```


### DeleteIPSet



```js
amazonaws_waf_regional.DeleteIPSet({}, context)
```


### DeleteRule



```js
amazonaws_waf_regional.DeleteRule({}, context)
```


### DeleteSizeConstraintSet



```js
amazonaws_waf_regional.DeleteSizeConstraintSet({}, context)
```


### DeleteSqlInjectionMatchSet



```js
amazonaws_waf_regional.DeleteSqlInjectionMatchSet({}, context)
```


### DeleteWebACL



```js
amazonaws_waf_regional.DeleteWebACL({}, context)
```


### DeleteXssMatchSet



```js
amazonaws_waf_regional.DeleteXssMatchSet({}, context)
```


### DisassociateWebACL



```js
amazonaws_waf_regional.DisassociateWebACL({}, context)
```


### GetByteMatchSet



```js
amazonaws_waf_regional.GetByteMatchSet({}, context)
```


### GetChangeToken



```js
amazonaws_waf_regional.GetChangeToken({}, context)
```


### GetChangeTokenStatus



```js
amazonaws_waf_regional.GetChangeTokenStatus({}, context)
```


### GetIPSet



```js
amazonaws_waf_regional.GetIPSet({}, context)
```


### GetRule



```js
amazonaws_waf_regional.GetRule({}, context)
```


### GetSampledRequests



```js
amazonaws_waf_regional.GetSampledRequests({}, context)
```


### GetSizeConstraintSet



```js
amazonaws_waf_regional.GetSizeConstraintSet({}, context)
```


### GetSqlInjectionMatchSet



```js
amazonaws_waf_regional.GetSqlInjectionMatchSet({}, context)
```


### GetWebACL



```js
amazonaws_waf_regional.GetWebACL({}, context)
```


### GetWebACLForResource



```js
amazonaws_waf_regional.GetWebACLForResource({}, context)
```


### GetXssMatchSet



```js
amazonaws_waf_regional.GetXssMatchSet({}, context)
```


### ListByteMatchSets



```js
amazonaws_waf_regional.ListByteMatchSets({}, context)
```


### ListIPSets



```js
amazonaws_waf_regional.ListIPSets({}, context)
```


### ListResourcesForWebACL



```js
amazonaws_waf_regional.ListResourcesForWebACL({}, context)
```


### ListRules



```js
amazonaws_waf_regional.ListRules({}, context)
```


### ListSizeConstraintSets



```js
amazonaws_waf_regional.ListSizeConstraintSets({}, context)
```


### ListSqlInjectionMatchSets



```js
amazonaws_waf_regional.ListSqlInjectionMatchSets({}, context)
```


### ListWebACLs



```js
amazonaws_waf_regional.ListWebACLs({}, context)
```


### ListXssMatchSets



```js
amazonaws_waf_regional.ListXssMatchSets({}, context)
```


### UpdateByteMatchSet



```js
amazonaws_waf_regional.UpdateByteMatchSet({}, context)
```


### UpdateIPSet



```js
amazonaws_waf_regional.UpdateIPSet({}, context)
```


### UpdateRule



```js
amazonaws_waf_regional.UpdateRule({}, context)
```


### UpdateSizeConstraintSet



```js
amazonaws_waf_regional.UpdateSizeConstraintSet({}, context)
```


### UpdateSqlInjectionMatchSet



```js
amazonaws_waf_regional.UpdateSqlInjectionMatchSet({}, context)
```


### UpdateWebACL



```js
amazonaws_waf_regional.UpdateWebACL({}, context)
```


### UpdateXssMatchSet



```js
amazonaws_waf_regional.UpdateXssMatchSet({}, context)
```


