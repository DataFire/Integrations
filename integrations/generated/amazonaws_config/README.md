# @datafire/amazonaws_config

Client library for AWS Config

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_config
```
```js
let amazonaws_config = require('@datafire/amazonaws_config').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_config.DeleteConfigRule({
  "ConfigRuleName": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * ConfigRuleName **required** [StringWithCharLimit64](#stringwithcharlimit64)

#### Output
*Output schema unknown*

### DeleteConfigurationRecorder



```js
amazonaws_config.DeleteConfigurationRecorder({
  "ConfigurationRecorderName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderName **required** [RecorderName](#recordername)

#### Output
*Output schema unknown*

### DeleteDeliveryChannel



```js
amazonaws_config.DeleteDeliveryChannel({
  "DeliveryChannelName": ""
}, context)
```

#### Input
* input `object`
  * DeliveryChannelName **required** [ChannelName](#channelname)

#### Output
*Output schema unknown*

### DeleteEvaluationResults



```js
amazonaws_config.DeleteEvaluationResults({
  "ConfigRuleName": ""
}, context)
```

#### Input
* input `object`
  * ConfigRuleName **required** [StringWithCharLimit64](#stringwithcharlimit64)

#### Output
* output [DeleteEvaluationResultsResponse](#deleteevaluationresultsresponse)

### DeliverConfigSnapshot



```js
amazonaws_config.DeliverConfigSnapshot({
  "deliveryChannelName": ""
}, context)
```

#### Input
* input `object`
  * deliveryChannelName **required** [ChannelName](#channelname)

#### Output
* output [DeliverConfigSnapshotResponse](#deliverconfigsnapshotresponse)

### DescribeComplianceByConfigRule



```js
amazonaws_config.DescribeComplianceByConfigRule({}, context)
```

#### Input
* input `object`
  * ComplianceTypes [ComplianceTypes](#compliancetypes)
  * ConfigRuleNames [ConfigRuleNames](#configrulenames)
  * NextToken [String](#string)

#### Output
* output [DescribeComplianceByConfigRuleResponse](#describecompliancebyconfigruleresponse)

### DescribeComplianceByResource



```js
amazonaws_config.DescribeComplianceByResource({}, context)
```

#### Input
* input `object`
  * ComplianceTypes [ComplianceTypes](#compliancetypes)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * ResourceId [BaseResourceId](#baseresourceid)
  * ResourceType [StringWithCharLimit256](#stringwithcharlimit256)

#### Output
* output [DescribeComplianceByResourceResponse](#describecompliancebyresourceresponse)

### DescribeConfigRuleEvaluationStatus



```js
amazonaws_config.DescribeConfigRuleEvaluationStatus({}, context)
```

#### Input
* input `object`
  * ConfigRuleNames [ConfigRuleNames](#configrulenames)
  * Limit [RuleLimit](#rulelimit)
  * NextToken [String](#string)

#### Output
* output [DescribeConfigRuleEvaluationStatusResponse](#describeconfigruleevaluationstatusresponse)

### DescribeConfigRules



```js
amazonaws_config.DescribeConfigRules({}, context)
```

#### Input
* input `object`
  * ConfigRuleNames [ConfigRuleNames](#configrulenames)
  * NextToken [String](#string)

#### Output
* output [DescribeConfigRulesResponse](#describeconfigrulesresponse)

### DescribeConfigurationRecorderStatus



```js
amazonaws_config.DescribeConfigurationRecorderStatus({}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderNames [ConfigurationRecorderNameList](#configurationrecordernamelist)

#### Output
* output [DescribeConfigurationRecorderStatusResponse](#describeconfigurationrecorderstatusresponse)

### DescribeConfigurationRecorders



```js
amazonaws_config.DescribeConfigurationRecorders({}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderNames [ConfigurationRecorderNameList](#configurationrecordernamelist)

#### Output
* output [DescribeConfigurationRecordersResponse](#describeconfigurationrecordersresponse)

### DescribeDeliveryChannelStatus



```js
amazonaws_config.DescribeDeliveryChannelStatus({}, context)
```

#### Input
* input `object`
  * DeliveryChannelNames [DeliveryChannelNameList](#deliverychannelnamelist)

#### Output
* output [DescribeDeliveryChannelStatusResponse](#describedeliverychannelstatusresponse)

### DescribeDeliveryChannels



```js
amazonaws_config.DescribeDeliveryChannels({}, context)
```

#### Input
* input `object`
  * DeliveryChannelNames [DeliveryChannelNameList](#deliverychannelnamelist)

#### Output
* output [DescribeDeliveryChannelsResponse](#describedeliverychannelsresponse)

### GetComplianceDetailsByConfigRule



```js
amazonaws_config.GetComplianceDetailsByConfigRule({
  "ConfigRuleName": ""
}, context)
```

#### Input
* input `object`
  * ComplianceTypes [ComplianceTypes](#compliancetypes)
  * ConfigRuleName **required** [StringWithCharLimit64](#stringwithcharlimit64)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [GetComplianceDetailsByConfigRuleResponse](#getcompliancedetailsbyconfigruleresponse)

### GetComplianceDetailsByResource



```js
amazonaws_config.GetComplianceDetailsByResource({
  "ResourceType": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ComplianceTypes [ComplianceTypes](#compliancetypes)
  * NextToken [String](#string)
  * ResourceId **required** [BaseResourceId](#baseresourceid)
  * ResourceType **required** [StringWithCharLimit256](#stringwithcharlimit256)

#### Output
* output [GetComplianceDetailsByResourceResponse](#getcompliancedetailsbyresourceresponse)

### GetComplianceSummaryByConfigRule



```js
amazonaws_config.GetComplianceSummaryByConfigRule({}, context)
```

#### Input
* input `object`

#### Output
* output [GetComplianceSummaryByConfigRuleResponse](#getcompliancesummarybyconfigruleresponse)

### GetComplianceSummaryByResourceType



```js
amazonaws_config.GetComplianceSummaryByResourceType({}, context)
```

#### Input
* input `object`
  * ResourceTypes [ResourceTypes](#resourcetypes)

#### Output
* output [GetComplianceSummaryByResourceTypeResponse](#getcompliancesummarybyresourcetyperesponse)

### GetDiscoveredResourceCounts



```js
amazonaws_config.GetDiscoveredResourceCounts({}, context)
```

#### Input
* input `object`
  * limit [Limit](#limit)
  * nextToken [NextToken](#nexttoken)
  * resourceTypes [ResourceTypes](#resourcetypes)

#### Output
* output [GetDiscoveredResourceCountsResponse](#getdiscoveredresourcecountsresponse)

### GetResourceConfigHistory



```js
amazonaws_config.GetResourceConfigHistory({
  "resourceType": "",
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * chronologicalOrder [ChronologicalOrder](#chronologicalorder)
  * earlierTime [EarlierTime](#earliertime)
  * laterTime [LaterTime](#latertime)
  * limit [Limit](#limit)
  * nextToken [NextToken](#nexttoken)
  * resourceId **required** [ResourceId](#resourceid)
  * resourceType **required** [ResourceType](#resourcetype)

#### Output
* output [GetResourceConfigHistoryResponse](#getresourceconfighistoryresponse)

### ListDiscoveredResources



```js
amazonaws_config.ListDiscoveredResources({
  "resourceType": ""
}, context)
```

#### Input
* input `object`
  * includeDeletedResources [Boolean](#boolean)
  * limit [Limit](#limit)
  * nextToken [NextToken](#nexttoken)
  * resourceIds [ResourceIdList](#resourceidlist)
  * resourceName [ResourceName](#resourcename)
  * resourceType **required** [ResourceType](#resourcetype)

#### Output
* output [ListDiscoveredResourcesResponse](#listdiscoveredresourcesresponse)

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

#### Input
* input `object`
  * ConfigRule **required** [ConfigRule](#configrule)

#### Output
*Output schema unknown*

### PutConfigurationRecorder



```js
amazonaws_config.PutConfigurationRecorder({
  "ConfigurationRecorder": {}
}, context)
```

#### Input
* input `object`
  * ConfigurationRecorder **required** [ConfigurationRecorder](#configurationrecorder)

#### Output
*Output schema unknown*

### PutDeliveryChannel



```js
amazonaws_config.PutDeliveryChannel({
  "DeliveryChannel": {}
}, context)
```

#### Input
* input `object`
  * DeliveryChannel **required** [DeliveryChannel](#deliverychannel)

#### Output
*Output schema unknown*

### PutEvaluations



```js
amazonaws_config.PutEvaluations({
  "ResultToken": ""
}, context)
```

#### Input
* input `object`
  * Evaluations [Evaluations](#evaluations)
  * ResultToken **required** [String](#string)
  * TestMode [Boolean](#boolean)

#### Output
* output [PutEvaluationsResponse](#putevaluationsresponse)

### StartConfigRulesEvaluation



```js
amazonaws_config.StartConfigRulesEvaluation({}, context)
```

#### Input
* input `object`
  * ConfigRuleNames [ReevaluateConfigRuleNames](#reevaluateconfigrulenames)

#### Output
* output [StartConfigRulesEvaluationResponse](#startconfigrulesevaluationresponse)

### StartConfigurationRecorder



```js
amazonaws_config.StartConfigurationRecorder({
  "ConfigurationRecorderName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderName **required** [RecorderName](#recordername)

#### Output
*Output schema unknown*

### StopConfigurationRecorder



```js
amazonaws_config.StopConfigurationRecorder({
  "ConfigurationRecorderName": ""
}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderName **required** [RecorderName](#recordername)

#### Output
*Output schema unknown*



## Definitions

### ARN
* ARN `string`

### AccountId
* AccountId `string`

### AllSupported
* AllSupported `boolean`

### AvailabilityZone
* AvailabilityZone `string`

### AwsRegion
* AwsRegion `string`

### BaseResourceId
* BaseResourceId `string`

### Boolean
* Boolean `boolean`

### ChannelName
* ChannelName `string`

### ChronologicalOrder
* ChronologicalOrder `string` (values: Reverse, Forward)

### Compliance
* Compliance `object`: Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.
  * ComplianceContributorCount [ComplianceContributorCount](#compliancecontributorcount)
  * ComplianceType [ComplianceType](#compliancetype)

### ComplianceByConfigRule
* ComplianceByConfigRule `object`: Indicates whether an AWS Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it, and it is noncompliant if any of these resources do not comply.
  * Compliance [Compliance](#compliance)
  * ConfigRuleName [StringWithCharLimit64](#stringwithcharlimit64)

### ComplianceByConfigRules
* ComplianceByConfigRules `array`
  * items [ComplianceByConfigRule](#compliancebyconfigrule)

### ComplianceByResource
* ComplianceByResource `object`: Indicates whether an AWS resource that is evaluated according to one or more AWS Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it, and it is noncompliant if it does not comply with one or more of these rules.
  * Compliance [Compliance](#compliance)
  * ResourceId [BaseResourceId](#baseresourceid)
  * ResourceType [StringWithCharLimit256](#stringwithcharlimit256)

### ComplianceByResources
* ComplianceByResources `array`
  * items [ComplianceByResource](#compliancebyresource)

### ComplianceContributorCount
* ComplianceContributorCount `object`: The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number.
  * CapExceeded [Boolean](#boolean)
  * CappedCount [Integer](#integer)

### ComplianceResourceTypes
* ComplianceResourceTypes `array`
  * items [StringWithCharLimit256](#stringwithcharlimit256)

### ComplianceSummariesByResourceType
* ComplianceSummariesByResourceType `array`
  * items [ComplianceSummaryByResourceType](#compliancesummarybyresourcetype)

### ComplianceSummary
* ComplianceSummary `object`: The number of AWS Config rules or AWS resources that are compliant and noncompliant.
  * ComplianceSummaryTimestamp [Date](#date)
  * CompliantResourceCount [ComplianceContributorCount](#compliancecontributorcount)
  * NonCompliantResourceCount [ComplianceContributorCount](#compliancecontributorcount)

### ComplianceSummaryByResourceType
* ComplianceSummaryByResourceType `object`: The number of AWS resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each compliance.
  * ComplianceSummary [ComplianceSummary](#compliancesummary)
  * ResourceType [StringWithCharLimit256](#stringwithcharlimit256)

### ComplianceType
* ComplianceType `string` (values: COMPLIANT, NON_COMPLIANT, NOT_APPLICABLE, INSUFFICIENT_DATA)

### ComplianceTypes
* ComplianceTypes `array`
  * items [ComplianceType](#compliancetype)

### ConfigExportDeliveryInfo
* ConfigExportDeliveryInfo `object`: Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.
  * lastAttemptTime [Date](#date)
  * lastErrorCode [String](#string)
  * lastErrorMessage [String](#string)
  * lastStatus [DeliveryStatus](#deliverystatus)
  * lastSuccessfulTime [Date](#date)
  * nextDeliveryTime [Date](#date)

### ConfigRule
* ConfigRule `object`: <p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href="http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>
  * ConfigRuleArn [String](#string)
  * ConfigRuleId [String](#string)
  * ConfigRuleName [StringWithCharLimit64](#stringwithcharlimit64)
  * ConfigRuleState [ConfigRuleState](#configrulestate)
  * Description [EmptiableStringWithCharLimit256](#emptiablestringwithcharlimit256)
  * InputParameters [StringWithCharLimit1024](#stringwithcharlimit1024)
  * MaximumExecutionFrequency [MaximumExecutionFrequency](#maximumexecutionfrequency)
  * Scope [Scope](#scope)
  * Source **required** [Source](#source)

### ConfigRuleEvaluationStatus
* ConfigRuleEvaluationStatus `object`: <p>Status information for your AWS managed Config rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom Config rules.</p>
  * ConfigRuleArn [String](#string)
  * ConfigRuleId [String](#string)
  * ConfigRuleName [StringWithCharLimit64](#stringwithcharlimit64)
  * FirstActivatedTime [Date](#date)
  * FirstEvaluationStarted [Boolean](#boolean)
  * LastErrorCode [String](#string)
  * LastErrorMessage [String](#string)
  * LastFailedEvaluationTime [Date](#date)
  * LastFailedInvocationTime [Date](#date)
  * LastSuccessfulEvaluationTime [Date](#date)
  * LastSuccessfulInvocationTime [Date](#date)

### ConfigRuleEvaluationStatusList
* ConfigRuleEvaluationStatusList `array`
  * items [ConfigRuleEvaluationStatus](#configruleevaluationstatus)

### ConfigRuleNames
* ConfigRuleNames `array`
  * items [StringWithCharLimit64](#stringwithcharlimit64)

### ConfigRuleState
* ConfigRuleState `string` (values: ACTIVE, DELETING, DELETING_RESULTS, EVALUATING)

### ConfigRules
* ConfigRules `array`
  * items [ConfigRule](#configrule)

### ConfigSnapshotDeliveryProperties
* ConfigSnapshotDeliveryProperties `object`: <p>Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <note> <p>If you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot, see the following:</p> </note> <p>The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, AWS Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, AWS Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which AWS Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p>
  * deliveryFrequency [MaximumExecutionFrequency](#maximumexecutionfrequency)

### ConfigStreamDeliveryInfo
* ConfigStreamDeliveryInfo `object`: A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.
  * lastErrorCode [String](#string)
  * lastErrorMessage [String](#string)
  * lastStatus [DeliveryStatus](#deliverystatus)
  * lastStatusChangeTime [Date](#date)

### Configuration
* Configuration `string`

### ConfigurationItem
* ConfigurationItem `object`: A list that contains detailed configurations of a specified resource.
  * accountId [AccountId](#accountid)
  * arn [ARN](#arn)
  * availabilityZone [AvailabilityZone](#availabilityzone)
  * awsRegion [AwsRegion](#awsregion)
  * configuration [Configuration](#configuration)
  * configurationItemCaptureTime [ConfigurationItemCaptureTime](#configurationitemcapturetime)
  * configurationItemMD5Hash [ConfigurationItemMD5Hash](#configurationitemmd5hash)
  * configurationItemStatus [ConfigurationItemStatus](#configurationitemstatus)
  * configurationStateId [ConfigurationStateId](#configurationstateid)
  * relatedEvents [RelatedEventList](#relatedeventlist)
  * relationships [RelationshipList](#relationshiplist)
  * resourceCreationTime [ResourceCreationTime](#resourcecreationtime)
  * resourceId [ResourceId](#resourceid)
  * resourceName [ResourceName](#resourcename)
  * resourceType [ResourceType](#resourcetype)
  * supplementaryConfiguration [SupplementaryConfiguration](#supplementaryconfiguration)
  * tags [Tags](#tags)
  * version [Version](#version)

### ConfigurationItemCaptureTime
* ConfigurationItemCaptureTime `string`

### ConfigurationItemList
* ConfigurationItemList `array`
  * items [ConfigurationItem](#configurationitem)

### ConfigurationItemMD5Hash
* ConfigurationItemMD5Hash `string`

### ConfigurationItemStatus
* ConfigurationItemStatus `string` (values: Ok, Failed, Discovered, Deleted)

### ConfigurationRecorder
* ConfigurationRecorder `object`: An object that represents the recording of configuration changes of an AWS resource.
  * name [RecorderName](#recordername)
  * recordingGroup [RecordingGroup](#recordinggroup)
  * roleARN [String](#string)

### ConfigurationRecorderList
* ConfigurationRecorderList `array`
  * items [ConfigurationRecorder](#configurationrecorder)

### ConfigurationRecorderNameList
* ConfigurationRecorderNameList `array`
  * items [RecorderName](#recordername)

### ConfigurationRecorderStatus
* ConfigurationRecorderStatus `object`: The current status of the configuration recorder.
  * lastErrorCode [String](#string)
  * lastErrorMessage [String](#string)
  * lastStartTime [Date](#date)
  * lastStatus [RecorderStatus](#recorderstatus)
  * lastStatusChangeTime [Date](#date)
  * lastStopTime [Date](#date)
  * name [String](#string)
  * recording [Boolean](#boolean)

### ConfigurationRecorderStatusList
* ConfigurationRecorderStatusList `array`
  * items [ConfigurationRecorderStatus](#configurationrecorderstatus)

### ConfigurationStateId
* ConfigurationStateId `string`

### Date
* Date `string`

### DeleteConfigRuleRequest
* DeleteConfigRuleRequest `object`: <p/>
  * ConfigRuleName **required** [StringWithCharLimit64](#stringwithcharlimit64)

### DeleteConfigurationRecorderRequest
* DeleteConfigurationRecorderRequest `object`: The request object for the <code>DeleteConfigurationRecorder</code> action.
  * ConfigurationRecorderName **required** [RecorderName](#recordername)

### DeleteDeliveryChannelRequest
* DeleteDeliveryChannelRequest `object`: The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data in JSON format. 
  * DeliveryChannelName **required** [ChannelName](#channelname)

### DeleteEvaluationResultsRequest
* DeleteEvaluationResultsRequest `object`: <p/>
  * ConfigRuleName **required** [StringWithCharLimit64](#stringwithcharlimit64)

### DeleteEvaluationResultsResponse
* DeleteEvaluationResultsResponse `object`: The output when you delete the evaluation results for the specified Config rule.

### DeliverConfigSnapshotRequest
* DeliverConfigSnapshotRequest `object`: The input for the <a>DeliverConfigSnapshot</a> action.
  * deliveryChannelName **required** [ChannelName](#channelname)

### DeliverConfigSnapshotResponse
* DeliverConfigSnapshotResponse `object`: The output for the <a>DeliverConfigSnapshot</a> action in JSON format.
  * configSnapshotId [String](#string)

### DeliveryChannel
* DeliveryChannel `object`: The channel through which AWS Config delivers notifications and updated configuration states.
  * configSnapshotDeliveryProperties [ConfigSnapshotDeliveryProperties](#configsnapshotdeliveryproperties)
  * name [ChannelName](#channelname)
  * s3BucketName [String](#string)
  * s3KeyPrefix [String](#string)
  * snsTopicARN [String](#string)

### DeliveryChannelList
* DeliveryChannelList `array`
  * items [DeliveryChannel](#deliverychannel)

### DeliveryChannelNameList
* DeliveryChannelNameList `array`
  * items [ChannelName](#channelname)

### DeliveryChannelStatus
* DeliveryChannelStatus `object`: <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
  * configHistoryDeliveryInfo [ConfigExportDeliveryInfo](#configexportdeliveryinfo)
  * configSnapshotDeliveryInfo [ConfigExportDeliveryInfo](#configexportdeliveryinfo)
  * configStreamDeliveryInfo [ConfigStreamDeliveryInfo](#configstreamdeliveryinfo)
  * name [String](#string)

### DeliveryChannelStatusList
* DeliveryChannelStatusList `array`
  * items [DeliveryChannelStatus](#deliverychannelstatus)

### DeliveryStatus
* DeliveryStatus `string` (values: Success, Failure, Not_Applicable)

### DescribeComplianceByConfigRuleRequest
* DescribeComplianceByConfigRuleRequest `object`: <p/>
  * ComplianceTypes [ComplianceTypes](#compliancetypes)
  * ConfigRuleNames [ConfigRuleNames](#configrulenames)
  * NextToken [String](#string)

### DescribeComplianceByConfigRuleResponse
* DescribeComplianceByConfigRuleResponse `object`: <p/>
  * ComplianceByConfigRules [ComplianceByConfigRules](#compliancebyconfigrules)
  * NextToken [String](#string)

### DescribeComplianceByResourceRequest
* DescribeComplianceByResourceRequest `object`: <p/>
  * ComplianceTypes [ComplianceTypes](#compliancetypes)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * ResourceId [BaseResourceId](#baseresourceid)
  * ResourceType [StringWithCharLimit256](#stringwithcharlimit256)

### DescribeComplianceByResourceResponse
* DescribeComplianceByResourceResponse `object`: <p/>
  * ComplianceByResources [ComplianceByResources](#compliancebyresources)
  * NextToken [NextToken](#nexttoken)

### DescribeConfigRuleEvaluationStatusRequest
* DescribeConfigRuleEvaluationStatusRequest `object`: <p/>
  * ConfigRuleNames [ConfigRuleNames](#configrulenames)
  * Limit [RuleLimit](#rulelimit)
  * NextToken [String](#string)

### DescribeConfigRuleEvaluationStatusResponse
* DescribeConfigRuleEvaluationStatusResponse `object`: <p/>
  * ConfigRulesEvaluationStatus [ConfigRuleEvaluationStatusList](#configruleevaluationstatuslist)
  * NextToken [String](#string)

### DescribeConfigRulesRequest
* DescribeConfigRulesRequest `object`: <p/>
  * ConfigRuleNames [ConfigRuleNames](#configrulenames)
  * NextToken [String](#string)

### DescribeConfigRulesResponse
* DescribeConfigRulesResponse `object`: <p/>
  * ConfigRules [ConfigRules](#configrules)
  * NextToken [String](#string)

### DescribeConfigurationRecorderStatusRequest
* DescribeConfigurationRecorderStatusRequest `object`: The input for the <a>DescribeConfigurationRecorderStatus</a> action.
  * ConfigurationRecorderNames [ConfigurationRecorderNameList](#configurationrecordernamelist)

### DescribeConfigurationRecorderStatusResponse
* DescribeConfigurationRecorderStatusResponse `object`: The output for the <a>DescribeConfigurationRecorderStatus</a> action in JSON format.
  * ConfigurationRecordersStatus [ConfigurationRecorderStatusList](#configurationrecorderstatuslist)

### DescribeConfigurationRecordersRequest
* DescribeConfigurationRecordersRequest `object`: The input for the <a>DescribeConfigurationRecorders</a> action.
  * ConfigurationRecorderNames [ConfigurationRecorderNameList](#configurationrecordernamelist)

### DescribeConfigurationRecordersResponse
* DescribeConfigurationRecordersResponse `object`: The output for the <a>DescribeConfigurationRecorders</a> action.
  * ConfigurationRecorders [ConfigurationRecorderList](#configurationrecorderlist)

### DescribeDeliveryChannelStatusRequest
* DescribeDeliveryChannelStatusRequest `object`: The input for the <a>DeliveryChannelStatus</a> action.
  * DeliveryChannelNames [DeliveryChannelNameList](#deliverychannelnamelist)

### DescribeDeliveryChannelStatusResponse
* DescribeDeliveryChannelStatusResponse `object`: The output for the <a>DescribeDeliveryChannelStatus</a> action.
  * DeliveryChannelsStatus [DeliveryChannelStatusList](#deliverychannelstatuslist)

### DescribeDeliveryChannelsRequest
* DescribeDeliveryChannelsRequest `object`: The input for the <a>DescribeDeliveryChannels</a> action.
  * DeliveryChannelNames [DeliveryChannelNameList](#deliverychannelnamelist)

### DescribeDeliveryChannelsResponse
* DescribeDeliveryChannelsResponse `object`: The output for the <a>DescribeDeliveryChannels</a> action.
  * DeliveryChannels [DeliveryChannelList](#deliverychannellist)

### EarlierTime
* EarlierTime `string`

### EmptiableStringWithCharLimit256
* EmptiableStringWithCharLimit256 `string`

### Evaluation
* Evaluation `object`: Identifies an AWS resource and indicates whether it complies with the AWS Config rule that it was evaluated against.
  * Annotation [StringWithCharLimit256](#stringwithcharlimit256)
  * ComplianceResourceId **required** [BaseResourceId](#baseresourceid)
  * ComplianceResourceType **required** [StringWithCharLimit256](#stringwithcharlimit256)
  * ComplianceType **required** [ComplianceType](#compliancetype)
  * OrderingTimestamp **required** [OrderingTimestamp](#orderingtimestamp)

### EvaluationResult
* EvaluationResult `object`: The details of an AWS Config evaluation. Provides the AWS resource that was evaluated, the compliance of the resource, related timestamps, and supplementary information.
  * Annotation [StringWithCharLimit256](#stringwithcharlimit256)
  * ComplianceType [ComplianceType](#compliancetype)
  * ConfigRuleInvokedTime [Date](#date)
  * EvaluationResultIdentifier [EvaluationResultIdentifier](#evaluationresultidentifier)
  * ResultRecordedTime [Date](#date)
  * ResultToken [String](#string)

### EvaluationResultIdentifier
* EvaluationResultIdentifier `object`: Uniquely identifies an evaluation result.
  * EvaluationResultQualifier [EvaluationResultQualifier](#evaluationresultqualifier)
  * OrderingTimestamp [Date](#date)

### EvaluationResultQualifier
* EvaluationResultQualifier `object`: Identifies an AWS Config rule that evaluated an AWS resource, and provides the type and ID of the resource that the rule evaluated.
  * ConfigRuleName [StringWithCharLimit64](#stringwithcharlimit64)
  * ResourceId [BaseResourceId](#baseresourceid)
  * ResourceType [StringWithCharLimit256](#stringwithcharlimit256)

### EvaluationResults
* EvaluationResults `array`
  * items [EvaluationResult](#evaluationresult)

### Evaluations
* Evaluations `array`
  * items [Evaluation](#evaluation)

### EventSource
* EventSource `string` (values: aws.config)

### GetComplianceDetailsByConfigRuleRequest
* GetComplianceDetailsByConfigRuleRequest `object`: <p/>
  * ComplianceTypes [ComplianceTypes](#compliancetypes)
  * ConfigRuleName **required** [StringWithCharLimit64](#stringwithcharlimit64)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

### GetComplianceDetailsByConfigRuleResponse
* GetComplianceDetailsByConfigRuleResponse `object`: <p/>
  * EvaluationResults [EvaluationResults](#evaluationresults)
  * NextToken [NextToken](#nexttoken)

### GetComplianceDetailsByResourceRequest
* GetComplianceDetailsByResourceRequest `object`: <p/>
  * ComplianceTypes [ComplianceTypes](#compliancetypes)
  * NextToken [String](#string)
  * ResourceId **required** [BaseResourceId](#baseresourceid)
  * ResourceType **required** [StringWithCharLimit256](#stringwithcharlimit256)

### GetComplianceDetailsByResourceResponse
* GetComplianceDetailsByResourceResponse `object`: <p/>
  * EvaluationResults [EvaluationResults](#evaluationresults)
  * NextToken [String](#string)

### GetComplianceSummaryByConfigRuleResponse
* GetComplianceSummaryByConfigRuleResponse `object`: <p/>
  * ComplianceSummary [ComplianceSummary](#compliancesummary)

### GetComplianceSummaryByResourceTypeRequest
* GetComplianceSummaryByResourceTypeRequest `object`: <p/>
  * ResourceTypes [ResourceTypes](#resourcetypes)

### GetComplianceSummaryByResourceTypeResponse
* GetComplianceSummaryByResourceTypeResponse `object`: <p/>
  * ComplianceSummariesByResourceType [ComplianceSummariesByResourceType](#compliancesummariesbyresourcetype)

### GetDiscoveredResourceCountsRequest
* GetDiscoveredResourceCountsRequest `object`
  * limit [Limit](#limit)
  * nextToken [NextToken](#nexttoken)
  * resourceTypes [ResourceTypes](#resourcetypes)

### GetDiscoveredResourceCountsResponse
* GetDiscoveredResourceCountsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * resourceCounts [ResourceCounts](#resourcecounts)
  * totalDiscoveredResources [Long](#long)

### GetResourceConfigHistoryRequest
* GetResourceConfigHistoryRequest `object`: The input for the <a>GetResourceConfigHistory</a> action.
  * chronologicalOrder [ChronologicalOrder](#chronologicalorder)
  * earlierTime [EarlierTime](#earliertime)
  * laterTime [LaterTime](#latertime)
  * limit [Limit](#limit)
  * nextToken [NextToken](#nexttoken)
  * resourceId **required** [ResourceId](#resourceid)
  * resourceType **required** [ResourceType](#resourcetype)

### GetResourceConfigHistoryResponse
* GetResourceConfigHistoryResponse `object`: The output for the <a>GetResourceConfigHistory</a> action.
  * configurationItems [ConfigurationItemList](#configurationitemlist)
  * nextToken [NextToken](#nexttoken)

### IncludeGlobalResourceTypes
* IncludeGlobalResourceTypes `boolean`

### InsufficientDeliveryPolicyException
* InsufficientDeliveryPolicyException `object`: Your Amazon S3 bucket policy does not permit AWS Config to write to it.

### InsufficientPermissionsException
* InsufficientPermissionsException `object`: <p>Indicates one of the following errors:</p> <ul> <li> <p>The rule cannot be created because the IAM role assigned to AWS Config lacks permissions to perform the config:Put* action.</p> </li> <li> <p>The AWS Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p> </li> </ul>

### Integer
* Integer `integer`

### InvalidConfigurationRecorderNameException
* InvalidConfigurationRecorderNameException `object`: You have provided a configuration recorder name that is not valid.

### InvalidDeliveryChannelNameException
* InvalidDeliveryChannelNameException `object`: The specified delivery channel name is not valid.

### InvalidLimitException
* InvalidLimitException `object`: The specified limit is outside the allowable range.

### InvalidNextTokenException
* InvalidNextTokenException `object`: The specified next token is invalid. Specify the <code>NextToken</code> string that was returned in the previous response to get the next page of results.

### InvalidParameterValueException
* InvalidParameterValueException `object`: One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.

### InvalidRecordingGroupException
* InvalidRecordingGroupException `object`: AWS Config throws an exception if the recording group does not contain a valid list of resource types. Invalid values could also be incorrectly formatted.

### InvalidResultTokenException
* InvalidResultTokenException `object`: The specified <code>ResultToken</code> is invalid.

### InvalidRoleException
* InvalidRoleException `object`: You have provided a null or empty role ARN.

### InvalidS3KeyPrefixException
* InvalidS3KeyPrefixException `object`: The specified Amazon S3 key prefix is not valid.

### InvalidSNSTopicARNException
* InvalidSNSTopicARNException `object`: The specified Amazon SNS topic does not exist.

### InvalidTimeRangeException
* InvalidTimeRangeException `object`: The specified time range is not valid. The earlier time is not chronologically before the later time.

### LastDeliveryChannelDeleteFailedException
* LastDeliveryChannelDeleteFailedException `object`: You cannot delete the delivery channel you specified because the configuration recorder is running.

### LaterTime
* LaterTime `string`

### Limit
* Limit `integer`

### LimitExceededException
* LimitExceededException `object`: This exception is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per minute.

### ListDiscoveredResourcesRequest
* ListDiscoveredResourcesRequest `object`: <p/>
  * includeDeletedResources [Boolean](#boolean)
  * limit [Limit](#limit)
  * nextToken [NextToken](#nexttoken)
  * resourceIds [ResourceIdList](#resourceidlist)
  * resourceName [ResourceName](#resourcename)
  * resourceType **required** [ResourceType](#resourcetype)

### ListDiscoveredResourcesResponse
* ListDiscoveredResourcesResponse `object`: <p/>
  * nextToken [NextToken](#nexttoken)
  * resourceIdentifiers [ResourceIdentifierList](#resourceidentifierlist)

### Long
* Long `integer`

### MaxNumberOfConfigRulesExceededException
* MaxNumberOfConfigRulesExceededException `object`: Failed to add the AWS Config rule because the account already contains the maximum number of 50 rules. Consider deleting any deactivated rules before adding new rules.

### MaxNumberOfConfigurationRecordersExceededException
* MaxNumberOfConfigurationRecordersExceededException `object`: You have reached the limit on the number of recorders you can create.

### MaxNumberOfDeliveryChannelsExceededException
* MaxNumberOfDeliveryChannelsExceededException `object`: You have reached the limit on the number of delivery channels you can create.

### MaximumExecutionFrequency
* MaximumExecutionFrequency `string` (values: One_Hour, Three_Hours, Six_Hours, Twelve_Hours, TwentyFour_Hours)

### MessageType
* MessageType `string` (values: ConfigurationItemChangeNotification, ConfigurationSnapshotDeliveryCompleted, ScheduledNotification, OversizedConfigurationItemChangeNotification)

### Name
* Name `string`

### NextToken
* NextToken `string`

### NoAvailableConfigurationRecorderException
* NoAvailableConfigurationRecorderException `object`: There are no configuration recorders available to provide the role needed to describe your resources. Create a configuration recorder.

### NoAvailableDeliveryChannelException
* NoAvailableDeliveryChannelException `object`: There is no delivery channel available to record configurations.

### NoRunningConfigurationRecorderException
* NoRunningConfigurationRecorderException `object`: There is no configuration recorder running.

### NoSuchBucketException
* NoSuchBucketException `object`: The specified Amazon S3 bucket does not exist.

### NoSuchConfigRuleException
* NoSuchConfigRuleException `object`: One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.

### NoSuchConfigurationRecorderException
* NoSuchConfigurationRecorderException `object`: You have specified a configuration recorder that does not exist.

### NoSuchDeliveryChannelException
* NoSuchDeliveryChannelException `object`: You have specified a delivery channel that does not exist.

### OrderingTimestamp
* OrderingTimestamp `string`

### Owner
* Owner `string` (values: CUSTOM_LAMBDA, AWS)

### PutConfigRuleRequest
* PutConfigRuleRequest `object`
  * ConfigRule **required** [ConfigRule](#configrule)

### PutConfigurationRecorderRequest
* PutConfigurationRecorderRequest `object`: The input for the <a>PutConfigurationRecorder</a> action.
  * ConfigurationRecorder **required** [ConfigurationRecorder](#configurationrecorder)

### PutDeliveryChannelRequest
* PutDeliveryChannelRequest `object`: The input for the <a>PutDeliveryChannel</a> action.
  * DeliveryChannel **required** [DeliveryChannel](#deliverychannel)

### PutEvaluationsRequest
* PutEvaluationsRequest `object`: <p/>
  * Evaluations [Evaluations](#evaluations)
  * ResultToken **required** [String](#string)
  * TestMode [Boolean](#boolean)

### PutEvaluationsResponse
* PutEvaluationsResponse `object`: <p/>
  * FailedEvaluations [Evaluations](#evaluations)

### RecorderName
* RecorderName `string`

### RecorderStatus
* RecorderStatus `string` (values: Pending, Success, Failure)

### RecordingGroup
* RecordingGroup `object`: <p>Specifies the types of AWS resource for which AWS Config records configuration changes.</p> <p>In the recording group, you specify whether all supported types or specific types of resources are recorded.</p> <p>By default, AWS Config records configuration changes for all supported types of regional resources that AWS Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have AWS Config record configuration changes for supported types of global resources (for example, IAM resources). Global resources are not tied to an individual region and can be used in all regions.</p> <important> <p>The configuration details for any global resource are the same in all regions. If you customize AWS Config in multiple regions to record global resources, it will create multiple configuration items each time a global resource changes: one configuration item for each region. These configuration items will contain identical data. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources, unless you want the configuration items to be available in multiple regions.</p> </important> <p>If you don't want AWS Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="http://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported resource types</a>.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources AWS Config Records</a>.</p>
  * allSupported [AllSupported](#allsupported)
  * includeGlobalResourceTypes [IncludeGlobalResourceTypes](#includeglobalresourcetypes)
  * resourceTypes [ResourceTypeList](#resourcetypelist)

### ReevaluateConfigRuleNames
* ReevaluateConfigRuleNames `array`
  * items [StringWithCharLimit64](#stringwithcharlimit64)

### RelatedEvent
* RelatedEvent `string`

### RelatedEventList
* RelatedEventList `array`
  * items [RelatedEvent](#relatedevent)

### Relationship
* Relationship `object`: The relationship of the related resource to the main resource.
  * relationshipName [RelationshipName](#relationshipname)
  * resourceId [ResourceId](#resourceid)
  * resourceName [ResourceName](#resourcename)
  * resourceType [ResourceType](#resourcetype)

### RelationshipList
* RelationshipList `array`
  * items [Relationship](#relationship)

### RelationshipName
* RelationshipName `string`

### ResourceCount
* ResourceCount `object`: An object that contains the resource type and the number of resources.
  * count [Long](#long)
  * resourceType [ResourceType](#resourcetype)

### ResourceCounts
* ResourceCounts `array`
  * items [ResourceCount](#resourcecount)

### ResourceCreationTime
* ResourceCreationTime `string`

### ResourceDeletionTime
* ResourceDeletionTime `string`

### ResourceId
* ResourceId `string`

### ResourceIdList
* ResourceIdList `array`
  * items [ResourceId](#resourceid)

### ResourceIdentifier
* ResourceIdentifier `object`: The details that identify a resource that is discovered by AWS Config, including the resource type, ID, and (if available) the custom resource name.
  * resourceDeletionTime [ResourceDeletionTime](#resourcedeletiontime)
  * resourceId [ResourceId](#resourceid)
  * resourceName [ResourceName](#resourcename)
  * resourceType [ResourceType](#resourcetype)

### ResourceIdentifierList
* ResourceIdentifierList `array`
  * items [ResourceIdentifier](#resourceidentifier)

### ResourceInUseException
* ResourceInUseException `object`: The rule is currently being deleted or the rule is deleting your evaluation results. Try your request again later.

### ResourceName
* ResourceName `string`

### ResourceNotDiscoveredException
* ResourceNotDiscoveredException `object`: You have specified a resource that is either unknown or has not been discovered.

### ResourceType
* ResourceType `string` (values: AWS::EC2::CustomerGateway, AWS::EC2::EIP, AWS::EC2::Host, AWS::EC2::Instance, AWS::EC2::InternetGateway, AWS::EC2::NetworkAcl, AWS::EC2::NetworkInterface, AWS::EC2::RouteTable, AWS::EC2::SecurityGroup, AWS::EC2::Subnet, AWS::CloudTrail::Trail, AWS::EC2::Volume, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::IAM::Group, AWS::IAM::Policy, AWS::IAM::Role, AWS::IAM::User, AWS::ACM::Certificate, AWS::RDS::DBInstance, AWS::RDS::DBSubnetGroup, AWS::RDS::DBSecurityGroup, AWS::RDS::DBSnapshot, AWS::RDS::EventSubscription, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::S3::Bucket, AWS::SSM::ManagedInstanceInventory, AWS::Redshift::Cluster, AWS::Redshift::ClusterSnapshot, AWS::Redshift::ClusterParameterGroup, AWS::Redshift::ClusterSecurityGroup, AWS::Redshift::ClusterSubnetGroup, AWS::Redshift::EventSubscription, AWS::CloudWatch::Alarm, AWS::CloudFormation::Stack, AWS::DynamoDB::Table, AWS::AutoScaling::AutoScalingGroup, AWS::AutoScaling::LaunchConfiguration, AWS::AutoScaling::ScalingPolicy, AWS::AutoScaling::ScheduledAction, AWS::CodeBuild::Project, AWS::WAF::RateBasedRule, AWS::WAF::Rule, AWS::WAF::WebACL, AWS::WAFRegional::RateBasedRule, AWS::WAFRegional::Rule, AWS::WAFRegional::WebACL, AWS::CloudFront::Distribution, AWS::CloudFront::StreamingDistribution)

### ResourceTypeList
* ResourceTypeList `array`
  * items [ResourceType](#resourcetype)

### ResourceTypes
* ResourceTypes `array`
  * items [StringWithCharLimit256](#stringwithcharlimit256)

### RuleLimit
* RuleLimit `integer`

### Scope
* Scope `object`: Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
  * ComplianceResourceId [BaseResourceId](#baseresourceid)
  * ComplianceResourceTypes [ComplianceResourceTypes](#complianceresourcetypes)
  * TagKey [StringWithCharLimit128](#stringwithcharlimit128)
  * TagValue [StringWithCharLimit256](#stringwithcharlimit256)

### Source
* Source `object`: Provides the AWS Config rule owner (AWS or customer), the rule identifier, and the events that trigger the evaluation of your AWS resources.
  * Owner **required** [Owner](#owner)
  * SourceDetails [SourceDetails](#sourcedetails)
  * SourceIdentifier **required** [StringWithCharLimit256](#stringwithcharlimit256)

### SourceDetail
* SourceDetail `object`: Provides the source and the message types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules. 
  * EventSource [EventSource](#eventsource)
  * MaximumExecutionFrequency [MaximumExecutionFrequency](#maximumexecutionfrequency)
  * MessageType [MessageType](#messagetype)

### SourceDetails
* SourceDetails `array`
  * items [SourceDetail](#sourcedetail)

### StartConfigRulesEvaluationRequest
* StartConfigRulesEvaluationRequest `object`: <p/>
  * ConfigRuleNames [ReevaluateConfigRuleNames](#reevaluateconfigrulenames)

### StartConfigRulesEvaluationResponse
* StartConfigRulesEvaluationResponse `object`: The output when you start the evaluation for the specified Config rule.

### StartConfigurationRecorderRequest
* StartConfigurationRecorderRequest `object`: The input for the <a>StartConfigurationRecorder</a> action.
  * ConfigurationRecorderName **required** [RecorderName](#recordername)

### StopConfigurationRecorderRequest
* StopConfigurationRecorderRequest `object`: The input for the <a>StopConfigurationRecorder</a> action.
  * ConfigurationRecorderName **required** [RecorderName](#recordername)

### String
* String `string`

### StringWithCharLimit1024
* StringWithCharLimit1024 `string`

### StringWithCharLimit128
* StringWithCharLimit128 `string`

### StringWithCharLimit256
* StringWithCharLimit256 `string`

### StringWithCharLimit64
* StringWithCharLimit64 `string`

### SupplementaryConfiguration
* SupplementaryConfiguration `array`
  * items `object`
    * key [SupplementaryConfigurationName](#supplementaryconfigurationname)
    * value [SupplementaryConfigurationValue](#supplementaryconfigurationvalue)

### SupplementaryConfigurationName
* SupplementaryConfigurationName `string`

### SupplementaryConfigurationValue
* SupplementaryConfigurationValue `string`

### Tags
* Tags `array`
  * items `object`
    * key [Name](#name)
    * value [Value](#value)

### ValidationException
* ValidationException `object`: The requested action is not valid.

### Value
* Value `string`

### Version
* Version `string`


