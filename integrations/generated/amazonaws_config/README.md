# @datafire/amazonaws_config

Client library for AWS Config

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_config
```

```js
let datafire = require('datafire');
let amazonaws_config = require('@datafire/amazonaws_config').actions;
let context = new datafire.Context();

amazonaws_config.DeleteConfigRule({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Config</fullname> <p>AWS Config provides a way to keep track of the configurations of all the AWS resources associated with your AWS account. You can use AWS Config to get the current and historical configurations of each AWS resource and also to get information about the relationship between the resources. An AWS resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an Elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by AWS Config, see <a href="http://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resources</a>.</p> <p>You can access and manage AWS Config through the AWS Management Console, the AWS Command Line Interface (AWS CLI), the AWS Config API, or the AWS SDKs for AWS Config</p> <p>This reference guide contains documentation for the AWS Config API and the AWS CLI commands that you can use to manage AWS Config.</p> <p>The AWS Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p> <p>For detailed information about AWS Config features and their associated actions or commands, as well as how to work with AWS Management Console, see <a href="http://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is AWS Config?</a> in the <i>AWS Config Developer Guide</i>.</p>

## Actions
### DeleteConfigRule



```js
amazonaws_config.DeleteConfigRule({}, context)
```


### DeleteConfigurationRecorder



```js
amazonaws_config.DeleteConfigurationRecorder({}, context)
```


### DeleteDeliveryChannel



```js
amazonaws_config.DeleteDeliveryChannel({}, context)
```


### DeleteEvaluationResults



```js
amazonaws_config.DeleteEvaluationResults({}, context)
```


### DeliverConfigSnapshot



```js
amazonaws_config.DeliverConfigSnapshot({}, context)
```


### DescribeComplianceByConfigRule



```js
amazonaws_config.DescribeComplianceByConfigRule({}, context)
```


### DescribeComplianceByResource



```js
amazonaws_config.DescribeComplianceByResource({}, context)
```


### DescribeConfigRuleEvaluationStatus



```js
amazonaws_config.DescribeConfigRuleEvaluationStatus({}, context)
```


### DescribeConfigRules



```js
amazonaws_config.DescribeConfigRules({}, context)
```


### DescribeConfigurationRecorderStatus



```js
amazonaws_config.DescribeConfigurationRecorderStatus({}, context)
```


### DescribeConfigurationRecorders



```js
amazonaws_config.DescribeConfigurationRecorders({}, context)
```


### DescribeDeliveryChannelStatus



```js
amazonaws_config.DescribeDeliveryChannelStatus({}, context)
```


### DescribeDeliveryChannels



```js
amazonaws_config.DescribeDeliveryChannels({}, context)
```


### GetComplianceDetailsByConfigRule



```js
amazonaws_config.GetComplianceDetailsByConfigRule({}, context)
```


### GetComplianceDetailsByResource



```js
amazonaws_config.GetComplianceDetailsByResource({}, context)
```


### GetComplianceSummaryByConfigRule



```js
amazonaws_config.GetComplianceSummaryByConfigRule({}, context)
```


### GetComplianceSummaryByResourceType



```js
amazonaws_config.GetComplianceSummaryByResourceType({}, context)
```


### GetResourceConfigHistory



```js
amazonaws_config.GetResourceConfigHistory({}, context)
```

#### Parameters
* limit (string)
* nextToken (string)

### ListDiscoveredResources



```js
amazonaws_config.ListDiscoveredResources({}, context)
```


### PutConfigRule



```js
amazonaws_config.PutConfigRule({}, context)
```


### PutConfigurationRecorder



```js
amazonaws_config.PutConfigurationRecorder({}, context)
```


### PutDeliveryChannel



```js
amazonaws_config.PutDeliveryChannel({}, context)
```


### PutEvaluations



```js
amazonaws_config.PutEvaluations({}, context)
```


### StartConfigRulesEvaluation



```js
amazonaws_config.StartConfigRulesEvaluation({}, context)
```


### StartConfigurationRecorder



```js
amazonaws_config.StartConfigurationRecorder({}, context)
```


### StopConfigurationRecorder



```js
amazonaws_config.StopConfigurationRecorder({}, context)
```


