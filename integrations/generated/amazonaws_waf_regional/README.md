# @datafire/amazonaws_waf_regional

Client library for AWS WAF Regional

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_waf_regional
```

```js
let datafire = require('datafire');
let amazonaws_waf_regional = require('@datafire/amazonaws_waf_regional').actions;
let context = new datafire.Context();

amazonaws_waf_regional.AssociateWebACL({}, context).then(data => {
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

#### Parameters

### CreateByteMatchSet



```js
amazonaws_waf_regional.CreateByteMatchSet({}, context)
```

#### Parameters

### CreateIPSet



```js
amazonaws_waf_regional.CreateIPSet({}, context)
```

#### Parameters

### CreateRule



```js
amazonaws_waf_regional.CreateRule({}, context)
```

#### Parameters

### CreateSizeConstraintSet



```js
amazonaws_waf_regional.CreateSizeConstraintSet({}, context)
```

#### Parameters

### CreateSqlInjectionMatchSet



```js
amazonaws_waf_regional.CreateSqlInjectionMatchSet({}, context)
```

#### Parameters

### CreateWebACL



```js
amazonaws_waf_regional.CreateWebACL({}, context)
```

#### Parameters

### CreateXssMatchSet



```js
amazonaws_waf_regional.CreateXssMatchSet({}, context)
```

#### Parameters

### DeleteByteMatchSet



```js
amazonaws_waf_regional.DeleteByteMatchSet({}, context)
```

#### Parameters

### DeleteIPSet



```js
amazonaws_waf_regional.DeleteIPSet({}, context)
```

#### Parameters

### DeleteRule



```js
amazonaws_waf_regional.DeleteRule({}, context)
```

#### Parameters

### DeleteSizeConstraintSet



```js
amazonaws_waf_regional.DeleteSizeConstraintSet({}, context)
```

#### Parameters

### DeleteSqlInjectionMatchSet



```js
amazonaws_waf_regional.DeleteSqlInjectionMatchSet({}, context)
```

#### Parameters

### DeleteWebACL



```js
amazonaws_waf_regional.DeleteWebACL({}, context)
```

#### Parameters

### DeleteXssMatchSet



```js
amazonaws_waf_regional.DeleteXssMatchSet({}, context)
```

#### Parameters

### DisassociateWebACL



```js
amazonaws_waf_regional.DisassociateWebACL({}, context)
```

#### Parameters

### GetByteMatchSet



```js
amazonaws_waf_regional.GetByteMatchSet({}, context)
```

#### Parameters

### GetChangeToken



```js
amazonaws_waf_regional.GetChangeToken({}, context)
```

#### Parameters

### GetChangeTokenStatus



```js
amazonaws_waf_regional.GetChangeTokenStatus({}, context)
```

#### Parameters

### GetIPSet



```js
amazonaws_waf_regional.GetIPSet({}, context)
```

#### Parameters

### GetRule



```js
amazonaws_waf_regional.GetRule({}, context)
```

#### Parameters

### GetSampledRequests



```js
amazonaws_waf_regional.GetSampledRequests({}, context)
```

#### Parameters

### GetSizeConstraintSet



```js
amazonaws_waf_regional.GetSizeConstraintSet({}, context)
```

#### Parameters

### GetSqlInjectionMatchSet



```js
amazonaws_waf_regional.GetSqlInjectionMatchSet({}, context)
```

#### Parameters

### GetWebACL



```js
amazonaws_waf_regional.GetWebACL({}, context)
```

#### Parameters

### GetWebACLForResource



```js
amazonaws_waf_regional.GetWebACLForResource({}, context)
```

#### Parameters

### GetXssMatchSet



```js
amazonaws_waf_regional.GetXssMatchSet({}, context)
```

#### Parameters

### ListByteMatchSets



```js
amazonaws_waf_regional.ListByteMatchSets({}, context)
```

#### Parameters

### ListIPSets



```js
amazonaws_waf_regional.ListIPSets({}, context)
```

#### Parameters

### ListResourcesForWebACL



```js
amazonaws_waf_regional.ListResourcesForWebACL({}, context)
```

#### Parameters

### ListRules



```js
amazonaws_waf_regional.ListRules({}, context)
```

#### Parameters

### ListSizeConstraintSets



```js
amazonaws_waf_regional.ListSizeConstraintSets({}, context)
```

#### Parameters

### ListSqlInjectionMatchSets



```js
amazonaws_waf_regional.ListSqlInjectionMatchSets({}, context)
```

#### Parameters

### ListWebACLs



```js
amazonaws_waf_regional.ListWebACLs({}, context)
```

#### Parameters

### ListXssMatchSets



```js
amazonaws_waf_regional.ListXssMatchSets({}, context)
```

#### Parameters

### UpdateByteMatchSet



```js
amazonaws_waf_regional.UpdateByteMatchSet({}, context)
```

#### Parameters

### UpdateIPSet



```js
amazonaws_waf_regional.UpdateIPSet({}, context)
```

#### Parameters

### UpdateRule



```js
amazonaws_waf_regional.UpdateRule({}, context)
```

#### Parameters

### UpdateSizeConstraintSet



```js
amazonaws_waf_regional.UpdateSizeConstraintSet({}, context)
```

#### Parameters

### UpdateSqlInjectionMatchSet



```js
amazonaws_waf_regional.UpdateSqlInjectionMatchSet({}, context)
```

#### Parameters

### UpdateWebACL



```js
amazonaws_waf_regional.UpdateWebACL({}, context)
```

#### Parameters

### UpdateXssMatchSet



```js
amazonaws_waf_regional.UpdateXssMatchSet({}, context)
```

#### Parameters

