# @datafire/amazonaws_config

Client library for AWS Config

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_config
```

```js
let datafire = require('datafire');
let amazonaws_config = require('@datafire/amazonaws_config').create();

amazonaws_config.DeleteConfigRule({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Config</fullname> <p>AWS Config provides a way to keep track of the configurations of all the AWS resources associated with your AWS account. You can use AWS Config to get the current and historical configurations of each AWS resource and also to get information about the relationship between the resources. An AWS resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an Elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by AWS Config, see <a href="http://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resources</a>.</p> <p>You can access and manage AWS Config through the AWS Management Console, the AWS Command Line Interface (AWS CLI), the AWS Config API, or the AWS SDKs for AWS Config</p> <p>This reference guide contains documentation for the AWS Config API and the AWS CLI commands that you can use to manage AWS Config.</p> <p>The AWS Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p> <p>For detailed information about AWS Config features and their associated actions or commands, as well as how to work with AWS Management Console, see <a href="http://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is AWS Config?</a> in the <i>AWS Config Developer Guide</i>.</p>

## Actions
### DeleteConfigRule



```js
amazonaws_config.DeleteConfigRule({
  "ConfigRuleName": ""
}, context)
```

#### Parameters
* ConfigRuleName (string) **required**

### DeleteConfigurationRecorder



```js
amazonaws_config.DeleteConfigurationRecorder({
  "ConfigurationRecorderName": ""
}, context)
```

#### Parameters
* ConfigurationRecorderName (string) **required**

### DeleteDeliveryChannel



```js
amazonaws_config.DeleteDeliveryChannel({
  "DeliveryChannelName": ""
}, context)
```

#### Parameters
* DeliveryChannelName (string) **required**

### DeleteEvaluationResults



```js
amazonaws_config.DeleteEvaluationResults({
  "ConfigRuleName": ""
}, context)
```

#### Parameters
* ConfigRuleName (string) **required**

### DeliverConfigSnapshot



```js
amazonaws_config.DeliverConfigSnapshot({
  "deliveryChannelName": ""
}, context)
```

#### Parameters
* deliveryChannelName (string) **required**

### DescribeComplianceByConfigRule



```js
amazonaws_config.DescribeComplianceByConfigRule({}, context)
```

#### Parameters
* ComplianceTypes (array)
* ConfigRuleNames (array)
* NextToken (string)

### DescribeComplianceByResource



```js
amazonaws_config.DescribeComplianceByResource({}, context)
```

#### Parameters
* ComplianceTypes (array)
* Limit (integer)
* NextToken (string)
* ResourceId (string)
* ResourceType (string)

### DescribeConfigRuleEvaluationStatus



```js
amazonaws_config.DescribeConfigRuleEvaluationStatus({}, context)
```

#### Parameters
* ConfigRuleNames (array)
* Limit (integer)
* NextToken (string)

### DescribeConfigRules



```js
amazonaws_config.DescribeConfigRules({}, context)
```

#### Parameters
* ConfigRuleNames (array)
* NextToken (string)

### DescribeConfigurationRecorderStatus



```js
amazonaws_config.DescribeConfigurationRecorderStatus({}, context)
```

#### Parameters
* ConfigurationRecorderNames (array)

### DescribeConfigurationRecorders



```js
amazonaws_config.DescribeConfigurationRecorders({}, context)
```

#### Parameters
* ConfigurationRecorderNames (array)

### DescribeDeliveryChannelStatus



```js
amazonaws_config.DescribeDeliveryChannelStatus({}, context)
```

#### Parameters
* DeliveryChannelNames (array)

### DescribeDeliveryChannels



```js
amazonaws_config.DescribeDeliveryChannels({}, context)
```

#### Parameters
* DeliveryChannelNames (array)

### GetComplianceDetailsByConfigRule



```js
amazonaws_config.GetComplianceDetailsByConfigRule({
  "ConfigRuleName": ""
}, context)
```

#### Parameters
* ComplianceTypes (array)
* ConfigRuleName (string) **required**
* Limit (integer)
* NextToken (string)

### GetComplianceDetailsByResource



```js
amazonaws_config.GetComplianceDetailsByResource({
  "ResourceType": "",
  "ResourceId": ""
}, context)
```

#### Parameters
* ComplianceTypes (array)
* NextToken (string)
* ResourceId (string) **required**
* ResourceType (string) **required**

### GetComplianceSummaryByConfigRule



```js
amazonaws_config.GetComplianceSummaryByConfigRule({}, context)
```

#### Parameters
*This action has no parameters*

### GetComplianceSummaryByResourceType



```js
amazonaws_config.GetComplianceSummaryByResourceType({}, context)
```

#### Parameters
* ResourceTypes (array)

### GetResourceConfigHistory



```js
amazonaws_config.GetResourceConfigHistory({
  "resourceType": "",
  "resourceId": ""
}, context)
```

#### Parameters
* limit (string)
* nextToken (string)
* chronologicalOrder (string)
* earlierTime (string)
* laterTime (string)
* limit (integer)
* nextToken (string)
* resourceId (string) **required**
* resourceType (string) **required**

### ListDiscoveredResources



```js
amazonaws_config.ListDiscoveredResources({
  "resourceType": ""
}, context)
```

#### Parameters
* includeDeletedResources (boolean)
* limit (integer)
* nextToken (string)
* resourceIds (array)
* resourceName (string)
* resourceType (string) **required**

### PutConfigRule



```js
amazonaws_config.PutConfigRule({
  "ConfigRule": {
    "Source": {
      "Owner": "",
      "SourceIdentifier": ""
    }
  }
}, context)
```

#### Parameters
* ConfigRule (object) **required** - <p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href="http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>

### PutConfigurationRecorder



```js
amazonaws_config.PutConfigurationRecorder({
  "ConfigurationRecorder": {}
}, context)
```

#### Parameters
* ConfigurationRecorder (object) **required** - An object that represents the recording of configuration changes of an AWS resource.

### PutDeliveryChannel



```js
amazonaws_config.PutDeliveryChannel({
  "DeliveryChannel": {}
}, context)
```

#### Parameters
* DeliveryChannel (object) **required** - The channel through which AWS Config delivers notifications and updated configuration states.

### PutEvaluations



```js
amazonaws_config.PutEvaluations({
  "ResultToken": ""
}, context)
```

#### Parameters
* Evaluations (array)
* ResultToken (string) **required**
* TestMode (boolean)

### StartConfigRulesEvaluation



```js
amazonaws_config.StartConfigRulesEvaluation({}, context)
```

#### Parameters
* ConfigRuleNames (array)

### StartConfigurationRecorder



```js
amazonaws_config.StartConfigurationRecorder({
  "ConfigurationRecorderName": ""
}, context)
```

#### Parameters
* ConfigurationRecorderName (string) **required**

### StopConfigurationRecorder



```js
amazonaws_config.StopConfigurationRecorder({
  "ConfigurationRecorderName": ""
}, context)
```

#### Parameters
* ConfigurationRecorderName (string) **required**

