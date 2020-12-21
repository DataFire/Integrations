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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Config</fullname> <p>AWS Config provides a way to keep track of the configurations of all the AWS resources associated with your AWS account. You can use AWS Config to get the current and historical configurations of each AWS resource and also to get information about the relationship between the resources. An AWS resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by AWS Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resources</a>.</p> <p>You can access and manage AWS Config through the AWS Management Console, the AWS Command Line Interface (AWS CLI), the AWS Config API, or the AWS SDKs for AWS Config. This reference guide contains documentation for the AWS Config API and the AWS CLI commands that you can use to manage AWS Config. The AWS Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>. For detailed information about AWS Config features and their associated actions or commands, as well as how to work with AWS Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>

## Actions

### BatchGetAggregateResourceConfig



```js
amazonaws_config.BatchGetAggregateResourceConfig({
  "ConfigurationAggregatorName": null,
  "ResourceIdentifiers": null
}, context)
```

#### Input
* input `object`
  * ConfigurationAggregatorName **required**
  * ResourceIdentifiers **required**
    * items [AggregateResourceIdentifier](#aggregateresourceidentifier)

#### Output
* output [BatchGetAggregateResourceConfigResponse](#batchgetaggregateresourceconfigresponse)

### BatchGetResourceConfig



```js
amazonaws_config.BatchGetResourceConfig({
  "resourceKeys": null
}, context)
```

#### Input
* input `object`
  * resourceKeys **required**
    * items [ResourceKey](#resourcekey)

#### Output
* output [BatchGetResourceConfigResponse](#batchgetresourceconfigresponse)

### DeleteAggregationAuthorization



```js
amazonaws_config.DeleteAggregationAuthorization({
  "AuthorizedAccountId": null,
  "AuthorizedAwsRegion": null
}, context)
```

#### Input
* input `object`
  * AuthorizedAccountId **required**
  * AuthorizedAwsRegion **required**

#### Output
*Output schema unknown*

### DeleteConfigRule



```js
amazonaws_config.DeleteConfigRule({
  "ConfigRuleName": null
}, context)
```

#### Input
* input `object`
  * ConfigRuleName **required**

#### Output
*Output schema unknown*

### DeleteConfigurationAggregator



```js
amazonaws_config.DeleteConfigurationAggregator({
  "ConfigurationAggregatorName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationAggregatorName **required**

#### Output
*Output schema unknown*

### DeleteConfigurationRecorder



```js
amazonaws_config.DeleteConfigurationRecorder({
  "ConfigurationRecorderName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderName **required**

#### Output
*Output schema unknown*

### DeleteConformancePack



```js
amazonaws_config.DeleteConformancePack({
  "ConformancePackName": null
}, context)
```

#### Input
* input `object`
  * ConformancePackName **required**

#### Output
*Output schema unknown*

### DeleteDeliveryChannel



```js
amazonaws_config.DeleteDeliveryChannel({
  "DeliveryChannelName": null
}, context)
```

#### Input
* input `object`
  * DeliveryChannelName **required**

#### Output
*Output schema unknown*

### DeleteEvaluationResults



```js
amazonaws_config.DeleteEvaluationResults({
  "ConfigRuleName": null
}, context)
```

#### Input
* input `object`
  * ConfigRuleName **required**

#### Output
* output [DeleteEvaluationResultsResponse](#deleteevaluationresultsresponse)

### DeleteOrganizationConfigRule



```js
amazonaws_config.DeleteOrganizationConfigRule({
  "OrganizationConfigRuleName": null
}, context)
```

#### Input
* input `object`
  * OrganizationConfigRuleName **required**

#### Output
*Output schema unknown*

### DeleteOrganizationConformancePack



```js
amazonaws_config.DeleteOrganizationConformancePack({
  "OrganizationConformancePackName": null
}, context)
```

#### Input
* input `object`
  * OrganizationConformancePackName **required**

#### Output
*Output schema unknown*

### DeletePendingAggregationRequest



```js
amazonaws_config.DeletePendingAggregationRequest({
  "RequesterAccountId": null,
  "RequesterAwsRegion": null
}, context)
```

#### Input
* input `object`
  * RequesterAccountId **required**
  * RequesterAwsRegion **required**

#### Output
*Output schema unknown*

### DeleteRemediationConfiguration



```js
amazonaws_config.DeleteRemediationConfiguration({
  "ConfigRuleName": null
}, context)
```

#### Input
* input `object`
  * ConfigRuleName **required**
  * ResourceType

#### Output
* output [DeleteRemediationConfigurationResponse](#deleteremediationconfigurationresponse)

### DeleteRemediationExceptions



```js
amazonaws_config.DeleteRemediationExceptions({
  "ConfigRuleName": null,
  "ResourceKeys": null
}, context)
```

#### Input
* input `object`
  * ConfigRuleName **required**
  * ResourceKeys **required**
    * items [RemediationExceptionResourceKey](#remediationexceptionresourcekey)

#### Output
* output [DeleteRemediationExceptionsResponse](#deleteremediationexceptionsresponse)

### DeleteResourceConfig



```js
amazonaws_config.DeleteResourceConfig({
  "ResourceType": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * ResourceType **required**

#### Output
*Output schema unknown*

### DeleteRetentionConfiguration



```js
amazonaws_config.DeleteRetentionConfiguration({
  "RetentionConfigurationName": null
}, context)
```

#### Input
* input `object`
  * RetentionConfigurationName **required**

#### Output
*Output schema unknown*

### DeliverConfigSnapshot



```js
amazonaws_config.DeliverConfigSnapshot({
  "deliveryChannelName": null
}, context)
```

#### Input
* input `object`
  * deliveryChannelName **required**

#### Output
* output [DeliverConfigSnapshotResponse](#deliverconfigsnapshotresponse)

### DescribeAggregateComplianceByConfigRules



```js
amazonaws_config.DescribeAggregateComplianceByConfigRules({
  "ConfigurationAggregatorName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationAggregatorName **required**
  * Filters
    * AccountId
    * AwsRegion
    * ComplianceType
    * ConfigRuleName
  * Limit
  * NextToken

#### Output
* output [DescribeAggregateComplianceByConfigRulesResponse](#describeaggregatecompliancebyconfigrulesresponse)

### DescribeAggregationAuthorizations



```js
amazonaws_config.DescribeAggregationAuthorizations({}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken

#### Output
* output [DescribeAggregationAuthorizationsResponse](#describeaggregationauthorizationsresponse)

### DescribeComplianceByConfigRule



```js
amazonaws_config.DescribeComplianceByConfigRule({}, context)
```

#### Input
* input `object`
  * ComplianceTypes
    * items [ComplianceType](#compliancetype)
  * ConfigRuleNames
    * items [ConfigRuleName](#configrulename)
  * NextToken

#### Output
* output [DescribeComplianceByConfigRuleResponse](#describecompliancebyconfigruleresponse)

### DescribeComplianceByResource



```js
amazonaws_config.DescribeComplianceByResource({}, context)
```

#### Input
* input `object`
  * ComplianceTypes
    * items [ComplianceType](#compliancetype)
  * Limit
  * NextToken
  * ResourceId
  * ResourceType

#### Output
* output [DescribeComplianceByResourceResponse](#describecompliancebyresourceresponse)

### DescribeConfigRuleEvaluationStatus



```js
amazonaws_config.DescribeConfigRuleEvaluationStatus({}, context)
```

#### Input
* input `object`
  * ConfigRuleNames
    * items [ConfigRuleName](#configrulename)
  * Limit
  * NextToken

#### Output
* output [DescribeConfigRuleEvaluationStatusResponse](#describeconfigruleevaluationstatusresponse)

### DescribeConfigRules



```js
amazonaws_config.DescribeConfigRules({}, context)
```

#### Input
* input `object`
  * ConfigRuleNames
    * items [ConfigRuleName](#configrulename)
  * NextToken

#### Output
* output [DescribeConfigRulesResponse](#describeconfigrulesresponse)

### DescribeConfigurationAggregatorSourcesStatus



```js
amazonaws_config.DescribeConfigurationAggregatorSourcesStatus({
  "ConfigurationAggregatorName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationAggregatorName **required**
  * Limit
  * NextToken
  * UpdateStatus
    * items [AggregatedSourceStatusType](#aggregatedsourcestatustype)

#### Output
* output [DescribeConfigurationAggregatorSourcesStatusResponse](#describeconfigurationaggregatorsourcesstatusresponse)

### DescribeConfigurationAggregators



```js
amazonaws_config.DescribeConfigurationAggregators({}, context)
```

#### Input
* input `object`
  * ConfigurationAggregatorNames
    * items [ConfigurationAggregatorName](#configurationaggregatorname)
  * Limit
  * NextToken

#### Output
* output [DescribeConfigurationAggregatorsResponse](#describeconfigurationaggregatorsresponse)

### DescribeConfigurationRecorderStatus



```js
amazonaws_config.DescribeConfigurationRecorderStatus({}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderNames
    * items [RecorderName](#recordername)

#### Output
* output [DescribeConfigurationRecorderStatusResponse](#describeconfigurationrecorderstatusresponse)

### DescribeConfigurationRecorders



```js
amazonaws_config.DescribeConfigurationRecorders({}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderNames
    * items [RecorderName](#recordername)

#### Output
* output [DescribeConfigurationRecordersResponse](#describeconfigurationrecordersresponse)

### DescribeConformancePackCompliance



```js
amazonaws_config.DescribeConformancePackCompliance({
  "ConformancePackName": null
}, context)
```

#### Input
* input `object`
  * ConformancePackName **required**
  * Filters
    * ComplianceType
    * ConfigRuleNames
      * items [StringWithCharLimit64](#stringwithcharlimit64)
  * Limit
  * NextToken

#### Output
* output [DescribeConformancePackComplianceResponse](#describeconformancepackcomplianceresponse)

### DescribeConformancePackStatus



```js
amazonaws_config.DescribeConformancePackStatus({}, context)
```

#### Input
* input `object`
  * ConformancePackNames
    * items [ConformancePackName](#conformancepackname)
  * Limit
  * NextToken

#### Output
* output [DescribeConformancePackStatusResponse](#describeconformancepackstatusresponse)

### DescribeConformancePacks



```js
amazonaws_config.DescribeConformancePacks({}, context)
```

#### Input
* input `object`
  * ConformancePackNames
    * items [ConformancePackName](#conformancepackname)
  * Limit
  * NextToken

#### Output
* output [DescribeConformancePacksResponse](#describeconformancepacksresponse)

### DescribeDeliveryChannelStatus



```js
amazonaws_config.DescribeDeliveryChannelStatus({}, context)
```

#### Input
* input `object`
  * DeliveryChannelNames
    * items [ChannelName](#channelname)

#### Output
* output [DescribeDeliveryChannelStatusResponse](#describedeliverychannelstatusresponse)

### DescribeDeliveryChannels



```js
amazonaws_config.DescribeDeliveryChannels({}, context)
```

#### Input
* input `object`
  * DeliveryChannelNames
    * items [ChannelName](#channelname)

#### Output
* output [DescribeDeliveryChannelsResponse](#describedeliverychannelsresponse)

### DescribeOrganizationConfigRuleStatuses



```js
amazonaws_config.DescribeOrganizationConfigRuleStatuses({}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken
  * OrganizationConfigRuleNames
    * items [StringWithCharLimit64](#stringwithcharlimit64)

#### Output
* output [DescribeOrganizationConfigRuleStatusesResponse](#describeorganizationconfigrulestatusesresponse)

### DescribeOrganizationConfigRules



```js
amazonaws_config.DescribeOrganizationConfigRules({}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken
  * OrganizationConfigRuleNames
    * items [StringWithCharLimit64](#stringwithcharlimit64)

#### Output
* output [DescribeOrganizationConfigRulesResponse](#describeorganizationconfigrulesresponse)

### DescribeOrganizationConformancePackStatuses



```js
amazonaws_config.DescribeOrganizationConformancePackStatuses({}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken
  * OrganizationConformancePackNames
    * items [OrganizationConformancePackName](#organizationconformancepackname)

#### Output
* output [DescribeOrganizationConformancePackStatusesResponse](#describeorganizationconformancepackstatusesresponse)

### DescribeOrganizationConformancePacks



```js
amazonaws_config.DescribeOrganizationConformancePacks({}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken
  * OrganizationConformancePackNames
    * items [OrganizationConformancePackName](#organizationconformancepackname)

#### Output
* output [DescribeOrganizationConformancePacksResponse](#describeorganizationconformancepacksresponse)

### DescribePendingAggregationRequests



```js
amazonaws_config.DescribePendingAggregationRequests({}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken

#### Output
* output [DescribePendingAggregationRequestsResponse](#describependingaggregationrequestsresponse)

### DescribeRemediationConfigurations



```js
amazonaws_config.DescribeRemediationConfigurations({
  "ConfigRuleNames": null
}, context)
```

#### Input
* input `object`
  * ConfigRuleNames **required**
    * items [ConfigRuleName](#configrulename)

#### Output
* output [DescribeRemediationConfigurationsResponse](#describeremediationconfigurationsresponse)

### DescribeRemediationExceptions



```js
amazonaws_config.DescribeRemediationExceptions({
  "ConfigRuleName": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * ConfigRuleName **required**
  * Limit
  * NextToken
  * ResourceKeys
    * items [RemediationExceptionResourceKey](#remediationexceptionresourcekey)

#### Output
* output [DescribeRemediationExceptionsResponse](#describeremediationexceptionsresponse)

### DescribeRemediationExecutionStatus



```js
amazonaws_config.DescribeRemediationExecutionStatus({
  "ConfigRuleName": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * ConfigRuleName **required**
  * Limit
  * NextToken
  * ResourceKeys
    * items [ResourceKey](#resourcekey)

#### Output
* output [DescribeRemediationExecutionStatusResponse](#describeremediationexecutionstatusresponse)

### DescribeRetentionConfigurations



```js
amazonaws_config.DescribeRetentionConfigurations({}, context)
```

#### Input
* input `object`
  * NextToken
  * RetentionConfigurationNames
    * items [RetentionConfigurationName](#retentionconfigurationname)

#### Output
* output [DescribeRetentionConfigurationsResponse](#describeretentionconfigurationsresponse)

### GetAggregateComplianceDetailsByConfigRule



```js
amazonaws_config.GetAggregateComplianceDetailsByConfigRule({
  "ConfigurationAggregatorName": null,
  "ConfigRuleName": null,
  "AccountId": null,
  "AwsRegion": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * AwsRegion **required**
  * ComplianceType
  * ConfigRuleName **required**
  * ConfigurationAggregatorName **required**
  * Limit
  * NextToken

#### Output
* output [GetAggregateComplianceDetailsByConfigRuleResponse](#getaggregatecompliancedetailsbyconfigruleresponse)

### GetAggregateConfigRuleComplianceSummary



```js
amazonaws_config.GetAggregateConfigRuleComplianceSummary({
  "ConfigurationAggregatorName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationAggregatorName **required**
  * Filters
    * AccountId
    * AwsRegion
  * GroupByKey
  * Limit
  * NextToken

#### Output
* output [GetAggregateConfigRuleComplianceSummaryResponse](#getaggregateconfigrulecompliancesummaryresponse)

### GetAggregateDiscoveredResourceCounts



```js
amazonaws_config.GetAggregateDiscoveredResourceCounts({
  "ConfigurationAggregatorName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationAggregatorName **required**
  * Filters
    * AccountId
    * Region
    * ResourceType
  * GroupByKey
  * Limit
  * NextToken

#### Output
* output [GetAggregateDiscoveredResourceCountsResponse](#getaggregatediscoveredresourcecountsresponse)

### GetAggregateResourceConfig



```js
amazonaws_config.GetAggregateResourceConfig({
  "ConfigurationAggregatorName": null,
  "ResourceIdentifier": null
}, context)
```

#### Input
* input `object`
  * ConfigurationAggregatorName **required**
  * ResourceIdentifier **required**
    * ResourceId **required**
    * ResourceName
    * ResourceType **required**
    * SourceAccountId **required**
    * SourceRegion **required**

#### Output
* output [GetAggregateResourceConfigResponse](#getaggregateresourceconfigresponse)

### GetComplianceDetailsByConfigRule



```js
amazonaws_config.GetComplianceDetailsByConfigRule({
  "ConfigRuleName": null
}, context)
```

#### Input
* input `object`
  * ComplianceTypes
    * items [ComplianceType](#compliancetype)
  * ConfigRuleName **required**
  * Limit
  * NextToken

#### Output
* output [GetComplianceDetailsByConfigRuleResponse](#getcompliancedetailsbyconfigruleresponse)

### GetComplianceDetailsByResource



```js
amazonaws_config.GetComplianceDetailsByResource({
  "ResourceType": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * ComplianceTypes
    * items [ComplianceType](#compliancetype)
  * NextToken
  * ResourceId **required**
  * ResourceType **required**

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
  * ResourceTypes
    * items [StringWithCharLimit256](#stringwithcharlimit256)

#### Output
* output [GetComplianceSummaryByResourceTypeResponse](#getcompliancesummarybyresourcetyperesponse)

### GetConformancePackComplianceDetails



```js
amazonaws_config.GetConformancePackComplianceDetails({
  "ConformancePackName": null
}, context)
```

#### Input
* input `object`
  * ConformancePackName **required**
  * Filters
    * ComplianceType
    * ConfigRuleNames
      * items [StringWithCharLimit64](#stringwithcharlimit64)
    * ResourceIds
      * items [StringWithCharLimit256](#stringwithcharlimit256)
    * ResourceType
  * Limit
  * NextToken

#### Output
* output [GetConformancePackComplianceDetailsResponse](#getconformancepackcompliancedetailsresponse)

### GetConformancePackComplianceSummary



```js
amazonaws_config.GetConformancePackComplianceSummary({
  "ConformancePackNames": null
}, context)
```

#### Input
* input `object`
  * ConformancePackNames **required**
    * items [ConformancePackName](#conformancepackname)
  * Limit
  * NextToken

#### Output
* output [GetConformancePackComplianceSummaryResponse](#getconformancepackcompliancesummaryresponse)

### GetDiscoveredResourceCounts



```js
amazonaws_config.GetDiscoveredResourceCounts({}, context)
```

#### Input
* input `object`
  * limit
  * nextToken
  * resourceTypes
    * items [StringWithCharLimit256](#stringwithcharlimit256)

#### Output
* output [GetDiscoveredResourceCountsResponse](#getdiscoveredresourcecountsresponse)

### GetOrganizationConfigRuleDetailedStatus



```js
amazonaws_config.GetOrganizationConfigRuleDetailedStatus({
  "OrganizationConfigRuleName": null
}, context)
```

#### Input
* input `object`
  * Filters
    * AccountId
    * MemberAccountRuleStatus
  * Limit
  * NextToken
  * OrganizationConfigRuleName **required**

#### Output
* output [GetOrganizationConfigRuleDetailedStatusResponse](#getorganizationconfigruledetailedstatusresponse)

### GetOrganizationConformancePackDetailedStatus



```js
amazonaws_config.GetOrganizationConformancePackDetailedStatus({
  "OrganizationConformancePackName": null
}, context)
```

#### Input
* input `object`
  * Filters
    * AccountId
    * Status
  * Limit
  * NextToken
  * OrganizationConformancePackName **required**

#### Output
* output [GetOrganizationConformancePackDetailedStatusResponse](#getorganizationconformancepackdetailedstatusresponse)

### GetResourceConfigHistory



```js
amazonaws_config.GetResourceConfigHistory({
  "resourceType": null,
  "resourceId": null
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * chronologicalOrder
  * earlierTime
  * laterTime
  * limit
  * nextToken
  * resourceId **required**
  * resourceType **required**

#### Output
* output [GetResourceConfigHistoryResponse](#getresourceconfighistoryresponse)

### ListAggregateDiscoveredResources



```js
amazonaws_config.ListAggregateDiscoveredResources({
  "ConfigurationAggregatorName": null,
  "ResourceType": null
}, context)
```

#### Input
* input `object`
  * ConfigurationAggregatorName **required**
  * Filters
    * AccountId
    * Region
    * ResourceId
    * ResourceName
  * Limit
  * NextToken
  * ResourceType **required**

#### Output
* output [ListAggregateDiscoveredResourcesResponse](#listaggregatediscoveredresourcesresponse)

### ListDiscoveredResources



```js
amazonaws_config.ListDiscoveredResources({
  "resourceType": null
}, context)
```

#### Input
* input `object`
  * includeDeletedResources
  * limit
  * nextToken
  * resourceIds
    * items [ResourceId](#resourceid)
  * resourceName
  * resourceType **required**

#### Output
* output [ListDiscoveredResourcesResponse](#listdiscoveredresourcesresponse)

### ListTagsForResource



```js
amazonaws_config.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### PutAggregationAuthorization



```js
amazonaws_config.PutAggregationAuthorization({
  "AuthorizedAccountId": null,
  "AuthorizedAwsRegion": null
}, context)
```

#### Input
* input `object`
  * AuthorizedAccountId **required**
  * AuthorizedAwsRegion **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [PutAggregationAuthorizationResponse](#putaggregationauthorizationresponse)

### PutConfigRule



```js
amazonaws_config.PutConfigRule({
  "ConfigRule": null
}, context)
```

#### Input
* input `object`
  * ConfigRule **required**
    * ConfigRuleArn
    * ConfigRuleId
    * ConfigRuleName
    * ConfigRuleState
    * CreatedBy
    * Description
    * InputParameters
    * MaximumExecutionFrequency
    * Scope
      * ComplianceResourceId
      * ComplianceResourceTypes
        * items [StringWithCharLimit256](#stringwithcharlimit256)
      * TagKey
      * TagValue
    * Source **required**
      * Owner **required**
      * SourceDetails
        * items [SourceDetail](#sourcedetail)
      * SourceIdentifier **required**
  * Tags
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### PutConfigurationAggregator



```js
amazonaws_config.PutConfigurationAggregator({
  "ConfigurationAggregatorName": null
}, context)
```

#### Input
* input `object`
  * AccountAggregationSources
    * items [AccountAggregationSource](#accountaggregationsource)
  * ConfigurationAggregatorName **required**
  * OrganizationAggregationSource
    * AllAwsRegions
    * AwsRegions
      * items [String](#string)
    * RoleArn **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [PutConfigurationAggregatorResponse](#putconfigurationaggregatorresponse)

### PutConfigurationRecorder



```js
amazonaws_config.PutConfigurationRecorder({
  "ConfigurationRecorder": null
}, context)
```

#### Input
* input `object`
  * ConfigurationRecorder **required**
    * name
    * recordingGroup
      * allSupported
      * includeGlobalResourceTypes
      * resourceTypes
        * items [ResourceType](#resourcetype)
    * roleARN

#### Output
*Output schema unknown*

### PutConformancePack



```js
amazonaws_config.PutConformancePack({
  "ConformancePackName": null
}, context)
```

#### Input
* input `object`
  * ConformancePackInputParameters
    * items [ConformancePackInputParameter](#conformancepackinputparameter)
  * ConformancePackName **required**
  * DeliveryS3Bucket
  * DeliveryS3KeyPrefix
  * TemplateBody
  * TemplateS3Uri

#### Output
* output [PutConformancePackResponse](#putconformancepackresponse)

### PutDeliveryChannel



```js
amazonaws_config.PutDeliveryChannel({
  "DeliveryChannel": null
}, context)
```

#### Input
* input `object`
  * DeliveryChannel **required**
    * configSnapshotDeliveryProperties
      * deliveryFrequency
    * name
    * s3BucketName
    * s3KeyPrefix
    * snsTopicARN

#### Output
*Output schema unknown*

### PutEvaluations



```js
amazonaws_config.PutEvaluations({
  "ResultToken": null
}, context)
```

#### Input
* input `object`
  * Evaluations
    * items [Evaluation](#evaluation)
  * ResultToken **required**
  * TestMode

#### Output
* output [PutEvaluationsResponse](#putevaluationsresponse)

### PutExternalEvaluation



```js
amazonaws_config.PutExternalEvaluation({
  "ConfigRuleName": "",
  "ExternalEvaluation": {
    "ComplianceResourceType": "",
    "ComplianceResourceId": "",
    "ComplianceType": "",
    "OrderingTimestamp": ""
  }
}, context)
```

#### Input
* input `object`
  * ConfigRuleName **required** [ConfigRuleName](#configrulename)
  * ExternalEvaluation **required** [ExternalEvaluation](#externalevaluation)

#### Output
* output [PutExternalEvaluationResponse](#putexternalevaluationresponse)

### PutOrganizationConfigRule



```js
amazonaws_config.PutOrganizationConfigRule({
  "OrganizationConfigRuleName": null
}, context)
```

#### Input
* input `object`
  * ExcludedAccounts
    * items [AccountId](#accountid)
  * OrganizationConfigRuleName **required**
  * OrganizationCustomRuleMetadata
    * Description
    * InputParameters
    * LambdaFunctionArn **required**
    * MaximumExecutionFrequency
    * OrganizationConfigRuleTriggerTypes **required**
      * items [OrganizationConfigRuleTriggerType](#organizationconfigruletriggertype)
    * ResourceIdScope
    * ResourceTypesScope
      * items [StringWithCharLimit256](#stringwithcharlimit256)
    * TagKeyScope
    * TagValueScope
  * OrganizationManagedRuleMetadata
    * Description
    * InputParameters
    * MaximumExecutionFrequency
    * ResourceIdScope
    * ResourceTypesScope
      * items [StringWithCharLimit256](#stringwithcharlimit256)
    * RuleIdentifier **required**
    * TagKeyScope
    * TagValueScope

#### Output
* output [PutOrganizationConfigRuleResponse](#putorganizationconfigruleresponse)

### PutOrganizationConformancePack



```js
amazonaws_config.PutOrganizationConformancePack({
  "OrganizationConformancePackName": null
}, context)
```

#### Input
* input `object`
  * ConformancePackInputParameters
    * items [ConformancePackInputParameter](#conformancepackinputparameter)
  * DeliveryS3Bucket
  * DeliveryS3KeyPrefix
  * ExcludedAccounts
    * items [AccountId](#accountid)
  * OrganizationConformancePackName **required**
  * TemplateBody
  * TemplateS3Uri

#### Output
* output [PutOrganizationConformancePackResponse](#putorganizationconformancepackresponse)

### PutRemediationConfigurations



```js
amazonaws_config.PutRemediationConfigurations({
  "RemediationConfigurations": null
}, context)
```

#### Input
* input `object`
  * RemediationConfigurations **required**
    * items [RemediationConfiguration](#remediationconfiguration)

#### Output
* output [PutRemediationConfigurationsResponse](#putremediationconfigurationsresponse)

### PutRemediationExceptions



```js
amazonaws_config.PutRemediationExceptions({
  "ConfigRuleName": null,
  "ResourceKeys": null
}, context)
```

#### Input
* input `object`
  * ConfigRuleName **required**
  * ExpirationTime
  * Message
  * ResourceKeys **required**
    * items [RemediationExceptionResourceKey](#remediationexceptionresourcekey)

#### Output
* output [PutRemediationExceptionsResponse](#putremediationexceptionsresponse)

### PutResourceConfig



```js
amazonaws_config.PutResourceConfig({
  "ResourceType": null,
  "SchemaVersionId": null,
  "ResourceId": null,
  "Configuration": null
}, context)
```

#### Input
* input `object`
  * Configuration **required**
  * ResourceId **required**
  * ResourceName
  * ResourceType **required**
  * SchemaVersionId **required**
  * Tags

#### Output
*Output schema unknown*

### PutRetentionConfiguration



```js
amazonaws_config.PutRetentionConfiguration({
  "RetentionPeriodInDays": null
}, context)
```

#### Input
* input `object`
  * RetentionPeriodInDays **required**

#### Output
* output [PutRetentionConfigurationResponse](#putretentionconfigurationresponse)

### SelectAggregateResourceConfig



```js
amazonaws_config.SelectAggregateResourceConfig({
  "Expression": null,
  "ConfigurationAggregatorName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ConfigurationAggregatorName **required**
  * Expression **required**
  * Limit
  * MaxResults
  * NextToken

#### Output
* output [SelectAggregateResourceConfigResponse](#selectaggregateresourceconfigresponse)

### SelectResourceConfig



```js
amazonaws_config.SelectResourceConfig({
  "Expression": null
}, context)
```

#### Input
* input `object`
  * Expression **required**
  * Limit
  * NextToken

#### Output
* output [SelectResourceConfigResponse](#selectresourceconfigresponse)

### StartConfigRulesEvaluation



```js
amazonaws_config.StartConfigRulesEvaluation({}, context)
```

#### Input
* input `object`
  * ConfigRuleNames
    * items [ConfigRuleName](#configrulename)

#### Output
* output [StartConfigRulesEvaluationResponse](#startconfigrulesevaluationresponse)

### StartConfigurationRecorder



```js
amazonaws_config.StartConfigurationRecorder({
  "ConfigurationRecorderName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderName **required**

#### Output
*Output schema unknown*

### StartRemediationExecution



```js
amazonaws_config.StartRemediationExecution({
  "ConfigRuleName": null,
  "ResourceKeys": null
}, context)
```

#### Input
* input `object`
  * ConfigRuleName **required**
  * ResourceKeys **required**
    * items [ResourceKey](#resourcekey)

#### Output
* output [StartRemediationExecutionResponse](#startremediationexecutionresponse)

### StopConfigurationRecorder



```js
amazonaws_config.StopConfigurationRecorder({
  "ConfigurationRecorderName": null
}, context)
```

#### Input
* input `object`
  * ConfigurationRecorderName **required**

#### Output
*Output schema unknown*

### TagResource



```js
amazonaws_config.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_config.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*



## Definitions

### ARN
* ARN `string`

### AccountAggregationSource
* AccountAggregationSource `object`: A collection of accounts and regions.
  * AccountIds **required**
    * items [AccountId](#accountid)
  * AllAwsRegions
  * AwsRegions
    * items [String](#string)

### AccountAggregationSourceAccountList
* AccountAggregationSourceAccountList `array`
  * items [AccountId](#accountid)

### AccountAggregationSourceList
* AccountAggregationSourceList `array`
  * items [AccountAggregationSource](#accountaggregationsource)

### AccountId
* AccountId `string`

### AggregateComplianceByConfigRule
* AggregateComplianceByConfigRule `object`: <p>Indicates whether an AWS Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p>
  * AccountId
  * AwsRegion
  * Compliance
    * ComplianceContributorCount
      * CapExceeded
      * CappedCount
    * ComplianceType
  * ConfigRuleName

### AggregateComplianceByConfigRuleList
* AggregateComplianceByConfigRuleList `array`
  * items [AggregateComplianceByConfigRule](#aggregatecompliancebyconfigrule)

### AggregateComplianceCount
* AggregateComplianceCount `object`: Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
  * ComplianceSummary
    * ComplianceSummaryTimestamp
    * CompliantResourceCount
      * CapExceeded
      * CappedCount
    * NonCompliantResourceCount
      * CapExceeded
      * CappedCount
  * GroupName

### AggregateComplianceCountList
* AggregateComplianceCountList `array`
  * items [AggregateComplianceCount](#aggregatecompliancecount)

### AggregateEvaluationResult
* AggregateEvaluationResult `object`: The details of an AWS Config evaluation for an account ID and region in an aggregator. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. 
  * AccountId
  * Annotation
  * AwsRegion
  * ComplianceType
  * ConfigRuleInvokedTime
  * EvaluationResultIdentifier
    * EvaluationResultQualifier
      * ConfigRuleName
      * ResourceId
      * ResourceType
    * OrderingTimestamp
  * ResultRecordedTime

### AggregateEvaluationResultList
* AggregateEvaluationResultList `array`
  * items [AggregateEvaluationResult](#aggregateevaluationresult)

### AggregateResourceIdentifier
* AggregateResourceIdentifier `object`: The details that identify a resource that is collected by AWS Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.
  * ResourceId **required**
  * ResourceName
  * ResourceType **required**
  * SourceAccountId **required**
  * SourceRegion **required**

### AggregatedSourceStatus
* AggregatedSourceStatus `object`: The current sync status between the source and the aggregator account.
  * AwsRegion
  * LastErrorCode
  * LastErrorMessage
  * LastUpdateStatus
  * LastUpdateTime
  * SourceId
  * SourceType

### AggregatedSourceStatusList
* AggregatedSourceStatusList `array`
  * items [AggregatedSourceStatus](#aggregatedsourcestatus)

### AggregatedSourceStatusType
* AggregatedSourceStatusType `string` (values: FAILED, SUCCEEDED, OUTDATED)

### AggregatedSourceStatusTypeList
* AggregatedSourceStatusTypeList `array`
  * items [AggregatedSourceStatusType](#aggregatedsourcestatustype)

### AggregatedSourceType
* AggregatedSourceType `string` (values: ACCOUNT, ORGANIZATION)

### AggregationAuthorization
* AggregationAuthorization `object`: An object that represents the authorizations granted to aggregator accounts and regions.
  * AggregationAuthorizationArn
  * AuthorizedAccountId
  * AuthorizedAwsRegion
  * CreationTime

### AggregationAuthorizationList
* AggregationAuthorizationList `array`
  * items [AggregationAuthorization](#aggregationauthorization)

### AggregatorRegionList
* AggregatorRegionList `array`
  * items [String](#string)

### AllSupported
* AllSupported `boolean`

### AmazonResourceName
* AmazonResourceName `string`

### Annotation
* Annotation `string`

### AutoRemediationAttemptSeconds
* AutoRemediationAttemptSeconds `integer`

### AutoRemediationAttempts
* AutoRemediationAttempts `integer`

### AvailabilityZone
* AvailabilityZone `string`

### AwsRegion
* AwsRegion `string`

### BaseConfigurationItem
* BaseConfigurationItem `object`: The detailed configuration of a specified resource.
  * accountId
  * arn
  * availabilityZone
  * awsRegion
  * configuration
  * configurationItemCaptureTime
  * configurationItemStatus
  * configurationStateId
  * resourceCreationTime
  * resourceId
  * resourceName
  * resourceType
  * supplementaryConfiguration
  * version

### BaseConfigurationItems
* BaseConfigurationItems `array`
  * items [BaseConfigurationItem](#baseconfigurationitem)

### BaseResourceId
* BaseResourceId `string`

### BatchGetAggregateResourceConfigRequest
* BatchGetAggregateResourceConfigRequest `object`
  * ConfigurationAggregatorName **required**
  * ResourceIdentifiers **required**
    * items [AggregateResourceIdentifier](#aggregateresourceidentifier)

### BatchGetAggregateResourceConfigResponse
* BatchGetAggregateResourceConfigResponse `object`
  * BaseConfigurationItems
    * items [BaseConfigurationItem](#baseconfigurationitem)
  * UnprocessedResourceIdentifiers
    * items [AggregateResourceIdentifier](#aggregateresourceidentifier)

### BatchGetResourceConfigRequest
* BatchGetResourceConfigRequest `object`
  * resourceKeys **required**
    * items [ResourceKey](#resourcekey)

### BatchGetResourceConfigResponse
* BatchGetResourceConfigResponse `object`
  * baseConfigurationItems
    * items [BaseConfigurationItem](#baseconfigurationitem)
  * unprocessedResourceKeys
    * items [ResourceKey](#resourcekey)

### Boolean
* Boolean `boolean`

### ChannelName
* ChannelName `string`

### ChronologicalOrder
* ChronologicalOrder `string` (values: Reverse, Forward)

### Compliance
* Compliance `object`: Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.
  * ComplianceContributorCount
    * CapExceeded
    * CappedCount
  * ComplianceType

### ComplianceByConfigRule
* ComplianceByConfigRule `object`: Indicates whether an AWS Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.
  * Compliance
    * ComplianceContributorCount
      * CapExceeded
      * CappedCount
    * ComplianceType
  * ConfigRuleName

### ComplianceByConfigRules
* ComplianceByConfigRules `array`
  * items [ComplianceByConfigRule](#compliancebyconfigrule)

### ComplianceByResource
* ComplianceByResource `object`: Indicates whether an AWS resource that is evaluated according to one or more AWS Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.
  * Compliance
    * ComplianceContributorCount
      * CapExceeded
      * CappedCount
    * ComplianceType
  * ResourceId
  * ResourceType

### ComplianceByResources
* ComplianceByResources `array`
  * items [ComplianceByResource](#compliancebyresource)

### ComplianceContributorCount
* ComplianceContributorCount `object`: The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number.
  * CapExceeded
  * CappedCount

### ComplianceResourceTypes
* ComplianceResourceTypes `array`
  * items [StringWithCharLimit256](#stringwithcharlimit256)

### ComplianceSummariesByResourceType
* ComplianceSummariesByResourceType `array`
  * items [ComplianceSummaryByResourceType](#compliancesummarybyresourcetype)

### ComplianceSummary
* ComplianceSummary `object`: The number of AWS Config rules or AWS resources that are compliant and noncompliant.
  * ComplianceSummaryTimestamp
  * CompliantResourceCount
    * CapExceeded
    * CappedCount
  * NonCompliantResourceCount
    * CapExceeded
    * CappedCount

### ComplianceSummaryByResourceType
* ComplianceSummaryByResourceType `object`: The number of AWS resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.
  * ComplianceSummary
    * ComplianceSummaryTimestamp
    * CompliantResourceCount
      * CapExceeded
      * CappedCount
    * NonCompliantResourceCount
      * CapExceeded
      * CappedCount
  * ResourceType

### ComplianceType
* ComplianceType `string` (values: COMPLIANT, NON_COMPLIANT, NOT_APPLICABLE, INSUFFICIENT_DATA)

### ComplianceTypes
* ComplianceTypes `array`
  * items [ComplianceType](#compliancetype)

### ConfigExportDeliveryInfo
* ConfigExportDeliveryInfo `object`: Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.
  * lastAttemptTime
  * lastErrorCode
  * lastErrorMessage
  * lastStatus
  * lastSuccessfulTime
  * nextDeliveryTime

### ConfigRule
* ConfigRule `object`: <p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>
  * ConfigRuleArn
  * ConfigRuleId
  * ConfigRuleName
  * ConfigRuleState
  * CreatedBy
  * Description
  * InputParameters
  * MaximumExecutionFrequency
  * Scope
    * ComplianceResourceId
    * ComplianceResourceTypes
      * items [StringWithCharLimit256](#stringwithcharlimit256)
    * TagKey
    * TagValue
  * Source **required**
    * Owner **required**
    * SourceDetails
      * items [SourceDetail](#sourcedetail)
    * SourceIdentifier **required**

### ConfigRuleComplianceFilters
* ConfigRuleComplianceFilters `object`: Filters the compliance results based on account ID, region, compliance type, and rule name.
  * AccountId
  * AwsRegion
  * ComplianceType
  * ConfigRuleName

### ConfigRuleComplianceSummaryFilters
* ConfigRuleComplianceSummaryFilters `object`: Filters the results based on the account IDs and regions.
  * AccountId
  * AwsRegion

### ConfigRuleComplianceSummaryGroupKey
* ConfigRuleComplianceSummaryGroupKey `string` (values: ACCOUNT_ID, AWS_REGION)

### ConfigRuleEvaluationStatus
* ConfigRuleEvaluationStatus `object`: <p>Status information for your AWS managed Config rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom AWS Config rules.</p>
  * ConfigRuleArn
  * ConfigRuleId
  * ConfigRuleName
  * FirstActivatedTime
  * FirstEvaluationStarted
  * LastDeactivatedTime
  * LastErrorCode
  * LastErrorMessage
  * LastFailedEvaluationTime
  * LastFailedInvocationTime
  * LastSuccessfulEvaluationTime
  * LastSuccessfulInvocationTime

### ConfigRuleEvaluationStatusList
* ConfigRuleEvaluationStatusList `array`
  * items [ConfigRuleEvaluationStatus](#configruleevaluationstatus)

### ConfigRuleName
* ConfigRuleName `string`

### ConfigRuleNames
* ConfigRuleNames `array`
  * items [ConfigRuleName](#configrulename)

### ConfigRuleState
* ConfigRuleState `string` (values: ACTIVE, DELETING, DELETING_RESULTS, EVALUATING)

### ConfigRules
* ConfigRules `array`
  * items [ConfigRule](#configrule)

### ConfigSnapshotDeliveryProperties
* ConfigSnapshotDeliveryProperties `object`: <p>Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for AWS Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, AWS Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, AWS Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which AWS Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p>
  * deliveryFrequency

### ConfigStreamDeliveryInfo
* ConfigStreamDeliveryInfo `object`: A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.
  * lastErrorCode
  * lastErrorMessage
  * lastStatus
  * lastStatusChangeTime

### Configuration
* Configuration `string`

### ConfigurationAggregator
* ConfigurationAggregator `object`: The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. 
  * AccountAggregationSources
    * items [AccountAggregationSource](#accountaggregationsource)
  * ConfigurationAggregatorArn
  * ConfigurationAggregatorName
  * CreatedBy
  * CreationTime
  * LastUpdatedTime
  * OrganizationAggregationSource
    * AllAwsRegions
    * AwsRegions
      * items [String](#string)
    * RoleArn **required**

### ConfigurationAggregatorArn
* ConfigurationAggregatorArn `string`

### ConfigurationAggregatorList
* ConfigurationAggregatorList `array`
  * items [ConfigurationAggregator](#configurationaggregator)

### ConfigurationAggregatorName
* ConfigurationAggregatorName `string`

### ConfigurationAggregatorNameList
* ConfigurationAggregatorNameList `array`
  * items [ConfigurationAggregatorName](#configurationaggregatorname)

### ConfigurationItem
* ConfigurationItem `object`: A list that contains detailed configurations of a specified resource.
  * tags
  * accountId
  * arn
  * availabilityZone
  * awsRegion
  * configuration
  * configurationItemCaptureTime
  * configurationItemMD5Hash
  * configurationItemStatus
  * configurationStateId
  * relatedEvents
    * items [RelatedEvent](#relatedevent)
  * relationships
    * items [Relationship](#relationship)
  * resourceCreationTime
  * resourceId
  * resourceName
  * resourceType
  * supplementaryConfiguration
  * version

### ConfigurationItemCaptureTime
* ConfigurationItemCaptureTime `string`

### ConfigurationItemList
* ConfigurationItemList `array`
  * items [ConfigurationItem](#configurationitem)

### ConfigurationItemMD5Hash
* ConfigurationItemMD5Hash `string`

### ConfigurationItemStatus
* ConfigurationItemStatus `string` (values: OK, ResourceDiscovered, ResourceNotRecorded, ResourceDeleted, ResourceDeletedNotRecorded)

### ConfigurationRecorder
* ConfigurationRecorder `object`: An object that represents the recording of configuration changes of an AWS resource.
  * name
  * recordingGroup
    * allSupported
    * includeGlobalResourceTypes
    * resourceTypes
      * items [ResourceType](#resourcetype)
  * roleARN

### ConfigurationRecorderList
* ConfigurationRecorderList `array`
  * items [ConfigurationRecorder](#configurationrecorder)

### ConfigurationRecorderNameList
* ConfigurationRecorderNameList `array`
  * items [RecorderName](#recordername)

### ConfigurationRecorderStatus
* ConfigurationRecorderStatus `object`: The current status of the configuration recorder.
  * lastErrorCode
  * lastErrorMessage
  * lastStartTime
  * lastStatus
  * lastStatusChangeTime
  * lastStopTime
  * name
  * recording

### ConfigurationRecorderStatusList
* ConfigurationRecorderStatusList `array`
  * items [ConfigurationRecorderStatus](#configurationrecorderstatus)

### ConfigurationStateId
* ConfigurationStateId `string`

### ConformancePackArn
* ConformancePackArn `string`

### ConformancePackComplianceFilters
* ConformancePackComplianceFilters `object`: Filters the conformance pack by compliance types and AWS Config rule names.
  * ComplianceType
  * ConfigRuleNames
    * items [StringWithCharLimit64](#stringwithcharlimit64)

### ConformancePackComplianceResourceIds
* ConformancePackComplianceResourceIds `array`
  * items [StringWithCharLimit256](#stringwithcharlimit256)

### ConformancePackComplianceSummary
* ConformancePackComplianceSummary `object`: Summary includes the name and status of the conformance pack.
  * ConformancePackComplianceStatus **required**
  * ConformancePackName **required**

### ConformancePackComplianceSummaryList
* ConformancePackComplianceSummaryList `array`
  * items [ConformancePackComplianceSummary](#conformancepackcompliancesummary)

### ConformancePackComplianceType
* ConformancePackComplianceType `string` (values: COMPLIANT, NON_COMPLIANT)

### ConformancePackConfigRuleNames
* ConformancePackConfigRuleNames `array`
  * items [StringWithCharLimit64](#stringwithcharlimit64)

### ConformancePackDetail
* ConformancePackDetail `object`: Returns details of a conformance pack. A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed in an account and a region.
  * ConformancePackArn **required**
  * ConformancePackId **required**
  * ConformancePackInputParameters
    * items [ConformancePackInputParameter](#conformancepackinputparameter)
  * ConformancePackName **required**
  * CreatedBy
  * DeliveryS3Bucket
  * DeliveryS3KeyPrefix
  * LastUpdateRequestedTime

### ConformancePackDetailList
* ConformancePackDetailList `array`
  * items [ConformancePackDetail](#conformancepackdetail)

### ConformancePackEvaluationFilters
* ConformancePackEvaluationFilters `object`: Filters a conformance pack by AWS Config rule names, compliance types, AWS resource types, and resource IDs.
  * ComplianceType
  * ConfigRuleNames
    * items [StringWithCharLimit64](#stringwithcharlimit64)
  * ResourceIds
    * items [StringWithCharLimit256](#stringwithcharlimit256)
  * ResourceType

### ConformancePackEvaluationResult
* ConformancePackEvaluationResult `object`: The details of a conformance pack evaluation. Provides AWS Config rule and AWS resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. 
  * Annotation
  * ComplianceType **required**
  * ConfigRuleInvokedTime **required**
  * EvaluationResultIdentifier **required** [EvaluationResultIdentifier](#evaluationresultidentifier)
  * ResultRecordedTime **required**

### ConformancePackId
* ConformancePackId `string`

### ConformancePackInputParameter
* ConformancePackInputParameter `object`: Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.
  * ParameterName **required**
  * ParameterValue **required**

### ConformancePackInputParameters
* ConformancePackInputParameters `array`
  * items [ConformancePackInputParameter](#conformancepackinputparameter)

### ConformancePackName
* ConformancePackName `string`

### ConformancePackNamesList
* ConformancePackNamesList `array`
  * items [ConformancePackName](#conformancepackname)

### ConformancePackNamesToSummarizeList
* ConformancePackNamesToSummarizeList `array`
  * items [ConformancePackName](#conformancepackname)

### ConformancePackRuleCompliance
* ConformancePackRuleCompliance `object`: Compliance information of one or more AWS Config rules within a conformance pack. You can filter using AWS Config rule names and compliance types.
  * ComplianceType
  * ConfigRuleName

### ConformancePackRuleComplianceList
* ConformancePackRuleComplianceList `array`
  * items [ConformancePackRuleCompliance](#conformancepackrulecompliance)

### ConformancePackRuleEvaluationResultsList
* ConformancePackRuleEvaluationResultsList `array`
  * items [ConformancePackEvaluationResult](#conformancepackevaluationresult)

### ConformancePackState
* ConformancePackState `string` (values: CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, DELETE_IN_PROGRESS, DELETE_FAILED)

### ConformancePackStatusDetail
* ConformancePackStatusDetail `object`: Status details of a conformance pack.
  * ConformancePackArn **required**
  * ConformancePackId **required**
  * ConformancePackName **required**
  * ConformancePackState **required**
  * ConformancePackStatusReason
  * LastUpdateCompletedTime
  * LastUpdateRequestedTime **required**
  * StackArn **required**

### ConformancePackStatusDetailsList
* ConformancePackStatusDetailsList `array`
  * items [ConformancePackStatusDetail](#conformancepackstatusdetail)

### ConformancePackStatusReason
* ConformancePackStatusReason `string`

### ConformancePackTemplateValidationException


### CosmosPageLimit
* CosmosPageLimit `integer`

### Date
* Date `string`

### DeleteAggregationAuthorizationRequest
* DeleteAggregationAuthorizationRequest `object`
  * AuthorizedAccountId **required**
  * AuthorizedAwsRegion **required**

### DeleteConfigRuleRequest
* DeleteConfigRuleRequest `object`: <p/>
  * ConfigRuleName **required**

### DeleteConfigurationAggregatorRequest
* DeleteConfigurationAggregatorRequest `object`
  * ConfigurationAggregatorName **required**

### DeleteConfigurationRecorderRequest
* DeleteConfigurationRecorderRequest `object`: The request object for the <code>DeleteConfigurationRecorder</code> action.
  * ConfigurationRecorderName **required**

### DeleteConformancePackRequest
* DeleteConformancePackRequest `object`
  * ConformancePackName **required**

### DeleteDeliveryChannelRequest
* DeleteDeliveryChannelRequest `object`: The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format. 
  * DeliveryChannelName **required**

### DeleteEvaluationResultsRequest
* DeleteEvaluationResultsRequest `object`: <p/>
  * ConfigRuleName **required**

### DeleteEvaluationResultsResponse
* DeleteEvaluationResultsResponse `object`: The output when you delete the evaluation results for the specified AWS Config rule.

### DeleteOrganizationConfigRuleRequest
* DeleteOrganizationConfigRuleRequest `object`
  * OrganizationConfigRuleName **required**

### DeleteOrganizationConformancePackRequest
* DeleteOrganizationConformancePackRequest `object`
  * OrganizationConformancePackName **required**

### DeletePendingAggregationRequestRequest
* DeletePendingAggregationRequestRequest `object`
  * RequesterAccountId **required**
  * RequesterAwsRegion **required**

### DeleteRemediationConfigurationRequest
* DeleteRemediationConfigurationRequest `object`
  * ConfigRuleName **required**
  * ResourceType

### DeleteRemediationConfigurationResponse
* DeleteRemediationConfigurationResponse `object`

### DeleteRemediationExceptionsRequest
* DeleteRemediationExceptionsRequest `object`
  * ConfigRuleName **required**
  * ResourceKeys **required**
    * items [RemediationExceptionResourceKey](#remediationexceptionresourcekey)

### DeleteRemediationExceptionsResponse
* DeleteRemediationExceptionsResponse `object`
  * FailedBatches
    * items [FailedDeleteRemediationExceptionsBatch](#faileddeleteremediationexceptionsbatch)

### DeleteResourceConfigRequest
* DeleteResourceConfigRequest `object`
  * ResourceId **required**
  * ResourceType **required**

### DeleteRetentionConfigurationRequest
* DeleteRetentionConfigurationRequest `object`
  * RetentionConfigurationName **required**

### DeliverConfigSnapshotRequest
* DeliverConfigSnapshotRequest `object`: The input for the <a>DeliverConfigSnapshot</a> action.
  * deliveryChannelName **required**

### DeliverConfigSnapshotResponse
* DeliverConfigSnapshotResponse `object`: The output for the <a>DeliverConfigSnapshot</a> action, in JSON format.
  * configSnapshotId

### DeliveryChannel
* DeliveryChannel `object`: The channel through which AWS Config delivers notifications and updated configuration states.
  * configSnapshotDeliveryProperties
    * deliveryFrequency
  * name
  * s3BucketName
  * s3KeyPrefix
  * snsTopicARN

### DeliveryChannelList
* DeliveryChannelList `array`
  * items [DeliveryChannel](#deliverychannel)

### DeliveryChannelNameList
* DeliveryChannelNameList `array`
  * items [ChannelName](#channelname)

### DeliveryChannelStatus
* DeliveryChannelStatus `object`: <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
  * configHistoryDeliveryInfo
    * lastAttemptTime
    * lastErrorCode
    * lastErrorMessage
    * lastStatus
    * lastSuccessfulTime
    * nextDeliveryTime
  * configSnapshotDeliveryInfo
    * lastAttemptTime
    * lastErrorCode
    * lastErrorMessage
    * lastStatus
    * lastSuccessfulTime
    * nextDeliveryTime
  * configStreamDeliveryInfo
    * lastErrorCode
    * lastErrorMessage
    * lastStatus
    * lastStatusChangeTime
  * name

### DeliveryChannelStatusList
* DeliveryChannelStatusList `array`
  * items [DeliveryChannelStatus](#deliverychannelstatus)

### DeliveryS3Bucket
* DeliveryS3Bucket `string`

### DeliveryS3KeyPrefix
* DeliveryS3KeyPrefix `string`

### DeliveryStatus
* DeliveryStatus `string` (values: Success, Failure, Not_Applicable)

### DescribeAggregateComplianceByConfigRulesRequest
* DescribeAggregateComplianceByConfigRulesRequest `object`
  * ConfigurationAggregatorName **required**
  * Filters
    * AccountId
    * AwsRegion
    * ComplianceType
    * ConfigRuleName
  * Limit
  * NextToken

### DescribeAggregateComplianceByConfigRulesResponse
* DescribeAggregateComplianceByConfigRulesResponse `object`
  * AggregateComplianceByConfigRules
    * items [AggregateComplianceByConfigRule](#aggregatecompliancebyconfigrule)
  * NextToken

### DescribeAggregationAuthorizationsRequest
* DescribeAggregationAuthorizationsRequest `object`
  * Limit
  * NextToken

### DescribeAggregationAuthorizationsResponse
* DescribeAggregationAuthorizationsResponse `object`
  * AggregationAuthorizations
    * items [AggregationAuthorization](#aggregationauthorization)
  * NextToken

### DescribeComplianceByConfigRuleRequest
* DescribeComplianceByConfigRuleRequest `object`: <p/>
  * ComplianceTypes
    * items [ComplianceType](#compliancetype)
  * ConfigRuleNames
    * items [ConfigRuleName](#configrulename)
  * NextToken

### DescribeComplianceByConfigRuleResponse
* DescribeComplianceByConfigRuleResponse `object`: <p/>
  * ComplianceByConfigRules
    * items [ComplianceByConfigRule](#compliancebyconfigrule)
  * NextToken

### DescribeComplianceByResourceRequest
* DescribeComplianceByResourceRequest `object`: <p/>
  * ComplianceTypes
    * items [ComplianceType](#compliancetype)
  * Limit
  * NextToken
  * ResourceId
  * ResourceType

### DescribeComplianceByResourceResponse
* DescribeComplianceByResourceResponse `object`: <p/>
  * ComplianceByResources
    * items [ComplianceByResource](#compliancebyresource)
  * NextToken

### DescribeConfigRuleEvaluationStatusRequest
* DescribeConfigRuleEvaluationStatusRequest `object`: <p/>
  * ConfigRuleNames
    * items [ConfigRuleName](#configrulename)
  * Limit
  * NextToken

### DescribeConfigRuleEvaluationStatusResponse
* DescribeConfigRuleEvaluationStatusResponse `object`: <p/>
  * ConfigRulesEvaluationStatus
    * items [ConfigRuleEvaluationStatus](#configruleevaluationstatus)
  * NextToken

### DescribeConfigRulesRequest
* DescribeConfigRulesRequest `object`: <p/>
  * ConfigRuleNames
    * items [ConfigRuleName](#configrulename)
  * NextToken

### DescribeConfigRulesResponse
* DescribeConfigRulesResponse `object`: <p/>
  * ConfigRules
    * items [ConfigRule](#configrule)
  * NextToken

### DescribeConfigurationAggregatorSourcesStatusRequest
* DescribeConfigurationAggregatorSourcesStatusRequest `object`
  * ConfigurationAggregatorName **required**
  * Limit
  * NextToken
  * UpdateStatus
    * items [AggregatedSourceStatusType](#aggregatedsourcestatustype)

### DescribeConfigurationAggregatorSourcesStatusResponse
* DescribeConfigurationAggregatorSourcesStatusResponse `object`
  * AggregatedSourceStatusList
    * items [AggregatedSourceStatus](#aggregatedsourcestatus)
  * NextToken

### DescribeConfigurationAggregatorsRequest
* DescribeConfigurationAggregatorsRequest `object`
  * ConfigurationAggregatorNames
    * items [ConfigurationAggregatorName](#configurationaggregatorname)
  * Limit
  * NextToken

### DescribeConfigurationAggregatorsResponse
* DescribeConfigurationAggregatorsResponse `object`
  * ConfigurationAggregators
    * items [ConfigurationAggregator](#configurationaggregator)
  * NextToken

### DescribeConfigurationRecorderStatusRequest
* DescribeConfigurationRecorderStatusRequest `object`: The input for the <a>DescribeConfigurationRecorderStatus</a> action.
  * ConfigurationRecorderNames
    * items [RecorderName](#recordername)

### DescribeConfigurationRecorderStatusResponse
* DescribeConfigurationRecorderStatusResponse `object`: The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.
  * ConfigurationRecordersStatus
    * items [ConfigurationRecorderStatus](#configurationrecorderstatus)

### DescribeConfigurationRecordersRequest
* DescribeConfigurationRecordersRequest `object`: The input for the <a>DescribeConfigurationRecorders</a> action.
  * ConfigurationRecorderNames
    * items [RecorderName](#recordername)

### DescribeConfigurationRecordersResponse
* DescribeConfigurationRecordersResponse `object`: The output for the <a>DescribeConfigurationRecorders</a> action.
  * ConfigurationRecorders
    * items [ConfigurationRecorder](#configurationrecorder)

### DescribeConformancePackComplianceLimit
* DescribeConformancePackComplianceLimit `integer`

### DescribeConformancePackComplianceRequest
* DescribeConformancePackComplianceRequest `object`
  * ConformancePackName **required**
  * Filters
    * ComplianceType
    * ConfigRuleNames
      * items [StringWithCharLimit64](#stringwithcharlimit64)
  * Limit
  * NextToken

### DescribeConformancePackComplianceResponse
* DescribeConformancePackComplianceResponse `object`
  * ConformancePackName **required**
  * ConformancePackRuleComplianceList **required**
    * items [ConformancePackRuleCompliance](#conformancepackrulecompliance)
  * NextToken

### DescribeConformancePackStatusRequest
* DescribeConformancePackStatusRequest `object`
  * ConformancePackNames
    * items [ConformancePackName](#conformancepackname)
  * Limit
  * NextToken

### DescribeConformancePackStatusResponse
* DescribeConformancePackStatusResponse `object`
  * ConformancePackStatusDetails
    * items [ConformancePackStatusDetail](#conformancepackstatusdetail)
  * NextToken

### DescribeConformancePacksRequest
* DescribeConformancePacksRequest `object`
  * ConformancePackNames
    * items [ConformancePackName](#conformancepackname)
  * Limit
  * NextToken

### DescribeConformancePacksResponse
* DescribeConformancePacksResponse `object`
  * ConformancePackDetails
    * items [ConformancePackDetail](#conformancepackdetail)
  * NextToken

### DescribeDeliveryChannelStatusRequest
* DescribeDeliveryChannelStatusRequest `object`: The input for the <a>DeliveryChannelStatus</a> action.
  * DeliveryChannelNames
    * items [ChannelName](#channelname)

### DescribeDeliveryChannelStatusResponse
* DescribeDeliveryChannelStatusResponse `object`: The output for the <a>DescribeDeliveryChannelStatus</a> action.
  * DeliveryChannelsStatus
    * items [DeliveryChannelStatus](#deliverychannelstatus)

### DescribeDeliveryChannelsRequest
* DescribeDeliveryChannelsRequest `object`: The input for the <a>DescribeDeliveryChannels</a> action.
  * DeliveryChannelNames
    * items [ChannelName](#channelname)

### DescribeDeliveryChannelsResponse
* DescribeDeliveryChannelsResponse `object`: The output for the <a>DescribeDeliveryChannels</a> action.
  * DeliveryChannels
    * items [DeliveryChannel](#deliverychannel)

### DescribeOrganizationConfigRuleStatusesRequest
* DescribeOrganizationConfigRuleStatusesRequest `object`
  * Limit
  * NextToken
  * OrganizationConfigRuleNames
    * items [StringWithCharLimit64](#stringwithcharlimit64)

### DescribeOrganizationConfigRuleStatusesResponse
* DescribeOrganizationConfigRuleStatusesResponse `object`
  * NextToken
  * OrganizationConfigRuleStatuses
    * items [OrganizationConfigRuleStatus](#organizationconfigrulestatus)

### DescribeOrganizationConfigRulesRequest
* DescribeOrganizationConfigRulesRequest `object`
  * Limit
  * NextToken
  * OrganizationConfigRuleNames
    * items [StringWithCharLimit64](#stringwithcharlimit64)

### DescribeOrganizationConfigRulesResponse
* DescribeOrganizationConfigRulesResponse `object`
  * NextToken
  * OrganizationConfigRules
    * items [OrganizationConfigRule](#organizationconfigrule)

### DescribeOrganizationConformancePackStatusesRequest
* DescribeOrganizationConformancePackStatusesRequest `object`
  * Limit
  * NextToken
  * OrganizationConformancePackNames
    * items [OrganizationConformancePackName](#organizationconformancepackname)

### DescribeOrganizationConformancePackStatusesResponse
* DescribeOrganizationConformancePackStatusesResponse `object`
  * NextToken
  * OrganizationConformancePackStatuses
    * items [OrganizationConformancePackStatus](#organizationconformancepackstatus)

### DescribeOrganizationConformancePacksRequest
* DescribeOrganizationConformancePacksRequest `object`
  * Limit
  * NextToken
  * OrganizationConformancePackNames
    * items [OrganizationConformancePackName](#organizationconformancepackname)

### DescribeOrganizationConformancePacksResponse
* DescribeOrganizationConformancePacksResponse `object`
  * NextToken
  * OrganizationConformancePacks
    * items [OrganizationConformancePack](#organizationconformancepack)

### DescribePendingAggregationRequestsLimit
* DescribePendingAggregationRequestsLimit `integer`

### DescribePendingAggregationRequestsRequest
* DescribePendingAggregationRequestsRequest `object`
  * Limit
  * NextToken

### DescribePendingAggregationRequestsResponse
* DescribePendingAggregationRequestsResponse `object`
  * NextToken
  * PendingAggregationRequests
    * items [PendingAggregationRequest](#pendingaggregationrequest)

### DescribeRemediationConfigurationsRequest
* DescribeRemediationConfigurationsRequest `object`
  * ConfigRuleNames **required**
    * items [ConfigRuleName](#configrulename)

### DescribeRemediationConfigurationsResponse
* DescribeRemediationConfigurationsResponse `object`
  * RemediationConfigurations
    * items [RemediationConfiguration](#remediationconfiguration)

### DescribeRemediationExceptionsRequest
* DescribeRemediationExceptionsRequest `object`
  * ConfigRuleName **required**
  * Limit
  * NextToken
  * ResourceKeys
    * items [RemediationExceptionResourceKey](#remediationexceptionresourcekey)

### DescribeRemediationExceptionsResponse
* DescribeRemediationExceptionsResponse `object`
  * NextToken
  * RemediationExceptions
    * items [RemediationException](#remediationexception)

### DescribeRemediationExecutionStatusRequest
* DescribeRemediationExecutionStatusRequest `object`
  * ConfigRuleName **required**
  * Limit
  * NextToken
  * ResourceKeys
    * items [ResourceKey](#resourcekey)

### DescribeRemediationExecutionStatusResponse
* DescribeRemediationExecutionStatusResponse `object`
  * NextToken
  * RemediationExecutionStatuses
    * items [RemediationExecutionStatus](#remediationexecutionstatus)

### DescribeRetentionConfigurationsRequest
* DescribeRetentionConfigurationsRequest `object`
  * NextToken
  * RetentionConfigurationNames
    * items [RetentionConfigurationName](#retentionconfigurationname)

### DescribeRetentionConfigurationsResponse
* DescribeRetentionConfigurationsResponse `object`
  * NextToken
  * RetentionConfigurations
    * items [RetentionConfiguration](#retentionconfiguration)

### DiscoveredResourceIdentifierList
* DiscoveredResourceIdentifierList `array`
  * items [AggregateResourceIdentifier](#aggregateresourceidentifier)

### EarlierTime
* EarlierTime `string`

### EmptiableStringWithCharLimit256
* EmptiableStringWithCharLimit256 `string`

### Evaluation
* Evaluation `object`: Identifies an AWS resource and indicates whether it complies with the AWS Config rule that it was evaluated against.
  * Annotation
  * ComplianceResourceId **required**
  * ComplianceResourceType **required**
  * ComplianceType **required**
  * OrderingTimestamp **required**

### EvaluationResult
* EvaluationResult `object`: The details of an AWS Config evaluation. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
  * Annotation
  * ComplianceType
  * ConfigRuleInvokedTime
  * EvaluationResultIdentifier
    * EvaluationResultQualifier
      * ConfigRuleName
      * ResourceId
      * ResourceType
    * OrderingTimestamp
  * ResultRecordedTime
  * ResultToken

### EvaluationResultIdentifier
* EvaluationResultIdentifier `object`: Uniquely identifies an evaluation result.
  * EvaluationResultQualifier
    * ConfigRuleName
    * ResourceId
    * ResourceType
  * OrderingTimestamp

### EvaluationResultQualifier
* EvaluationResultQualifier `object`: Identifies an AWS Config rule that evaluated an AWS resource, and provides the type and ID of the resource that the rule evaluated.
  * ConfigRuleName
  * ResourceId
  * ResourceType

### EvaluationResults
* EvaluationResults `array`
  * items [EvaluationResult](#evaluationresult)

### Evaluations
* Evaluations `array`
  * items [Evaluation](#evaluation)

### EventSource
* EventSource `string` (values: aws.config)

### ExcludedAccounts
* ExcludedAccounts `array`
  * items [AccountId](#accountid)

### ExecutionControls
* ExecutionControls `object`: The controls that AWS Config uses for executing remediations.
  * SsmControls
    * ConcurrentExecutionRatePercentage
    * ErrorPercentage

### Expression
* Expression `string`

### ExternalEvaluation
* ExternalEvaluation `object`
  * Annotation [StringWithCharLimit256](#stringwithcharlimit256)
  * ComplianceResourceId **required** [BaseResourceId](#baseresourceid)
  * ComplianceResourceType **required** [StringWithCharLimit256](#stringwithcharlimit256)
  * ComplianceType **required** [ComplianceType](#compliancetype)
  * OrderingTimestamp **required** [OrderingTimestamp](#orderingtimestamp)

### FailedDeleteRemediationExceptionsBatch
* FailedDeleteRemediationExceptionsBatch `object`: List of each of the failed delete remediation exceptions with specific reasons.
  * FailedItems
    * items [RemediationExceptionResourceKey](#remediationexceptionresourcekey)
  * FailureMessage

### FailedDeleteRemediationExceptionsBatches
* FailedDeleteRemediationExceptionsBatches `array`
  * items [FailedDeleteRemediationExceptionsBatch](#faileddeleteremediationexceptionsbatch)

### FailedRemediationBatch
* FailedRemediationBatch `object`: List of each of the failed remediations with specific reasons.
  * FailedItems
    * items [RemediationConfiguration](#remediationconfiguration)
  * FailureMessage

### FailedRemediationBatches
* FailedRemediationBatches `array`
  * items [FailedRemediationBatch](#failedremediationbatch)

### FailedRemediationExceptionBatch
* FailedRemediationExceptionBatch `object`: List of each of the failed remediation exceptions with specific reasons.
  * FailedItems
    * items [RemediationException](#remediationexception)
  * FailureMessage

### FailedRemediationExceptionBatches
* FailedRemediationExceptionBatches `array`
  * items [FailedRemediationExceptionBatch](#failedremediationexceptionbatch)

### FieldInfo
* FieldInfo `object`: Details about the fields such as name of the field.
  * Name

### FieldInfoList
* FieldInfoList `array`
  * items [FieldInfo](#fieldinfo)

### FieldName
* FieldName `string`

### GetAggregateComplianceDetailsByConfigRuleRequest
* GetAggregateComplianceDetailsByConfigRuleRequest `object`
  * AccountId **required**
  * AwsRegion **required**
  * ComplianceType
  * ConfigRuleName **required**
  * ConfigurationAggregatorName **required**
  * Limit
  * NextToken

### GetAggregateComplianceDetailsByConfigRuleResponse
* GetAggregateComplianceDetailsByConfigRuleResponse `object`
  * AggregateEvaluationResults
    * items [AggregateEvaluationResult](#aggregateevaluationresult)
  * NextToken

### GetAggregateConfigRuleComplianceSummaryRequest
* GetAggregateConfigRuleComplianceSummaryRequest `object`
  * ConfigurationAggregatorName **required**
  * Filters
    * AccountId
    * AwsRegion
  * GroupByKey
  * Limit
  * NextToken

### GetAggregateConfigRuleComplianceSummaryResponse
* GetAggregateConfigRuleComplianceSummaryResponse `object`
  * AggregateComplianceCounts
    * items [AggregateComplianceCount](#aggregatecompliancecount)
  * GroupByKey
  * NextToken

### GetAggregateDiscoveredResourceCountsRequest
* GetAggregateDiscoveredResourceCountsRequest `object`
  * ConfigurationAggregatorName **required**
  * Filters
    * AccountId
    * Region
    * ResourceType
  * GroupByKey
  * Limit
  * NextToken

### GetAggregateDiscoveredResourceCountsResponse
* GetAggregateDiscoveredResourceCountsResponse `object`
  * GroupByKey
  * GroupedResourceCounts
    * items [GroupedResourceCount](#groupedresourcecount)
  * NextToken
  * TotalDiscoveredResources **required**

### GetAggregateResourceConfigRequest
* GetAggregateResourceConfigRequest `object`
  * ConfigurationAggregatorName **required**
  * ResourceIdentifier **required**
    * ResourceId **required**
    * ResourceName
    * ResourceType **required**
    * SourceAccountId **required**
    * SourceRegion **required**

### GetAggregateResourceConfigResponse
* GetAggregateResourceConfigResponse `object`
  * ConfigurationItem
    * tags
    * accountId
    * arn
    * availabilityZone
    * awsRegion
    * configuration
    * configurationItemCaptureTime
    * configurationItemMD5Hash
    * configurationItemStatus
    * configurationStateId
    * relatedEvents
      * items [RelatedEvent](#relatedevent)
    * relationships
      * items [Relationship](#relationship)
    * resourceCreationTime
    * resourceId
    * resourceName
    * resourceType
    * supplementaryConfiguration
    * version

### GetComplianceDetailsByConfigRuleRequest
* GetComplianceDetailsByConfigRuleRequest `object`: <p/>
  * ComplianceTypes
    * items [ComplianceType](#compliancetype)
  * ConfigRuleName **required**
  * Limit
  * NextToken

### GetComplianceDetailsByConfigRuleResponse
* GetComplianceDetailsByConfigRuleResponse `object`: <p/>
  * EvaluationResults
    * items [EvaluationResult](#evaluationresult)
  * NextToken

### GetComplianceDetailsByResourceRequest
* GetComplianceDetailsByResourceRequest `object`: <p/>
  * ComplianceTypes
    * items [ComplianceType](#compliancetype)
  * NextToken
  * ResourceId **required**
  * ResourceType **required**

### GetComplianceDetailsByResourceResponse
* GetComplianceDetailsByResourceResponse `object`: <p/>
  * EvaluationResults
    * items [EvaluationResult](#evaluationresult)
  * NextToken

### GetComplianceSummaryByConfigRuleResponse
* GetComplianceSummaryByConfigRuleResponse `object`: <p/>
  * ComplianceSummary
    * ComplianceSummaryTimestamp
    * CompliantResourceCount
      * CapExceeded
      * CappedCount
    * NonCompliantResourceCount
      * CapExceeded
      * CappedCount

### GetComplianceSummaryByResourceTypeRequest
* GetComplianceSummaryByResourceTypeRequest `object`: <p/>
  * ResourceTypes
    * items [StringWithCharLimit256](#stringwithcharlimit256)

### GetComplianceSummaryByResourceTypeResponse
* GetComplianceSummaryByResourceTypeResponse `object`: <p/>
  * ComplianceSummariesByResourceType
    * items [ComplianceSummaryByResourceType](#compliancesummarybyresourcetype)

### GetConformancePackComplianceDetailsLimit
* GetConformancePackComplianceDetailsLimit `integer`

### GetConformancePackComplianceDetailsRequest
* GetConformancePackComplianceDetailsRequest `object`
  * ConformancePackName **required**
  * Filters
    * ComplianceType
    * ConfigRuleNames
      * items [StringWithCharLimit64](#stringwithcharlimit64)
    * ResourceIds
      * items [StringWithCharLimit256](#stringwithcharlimit256)
    * ResourceType
  * Limit
  * NextToken

### GetConformancePackComplianceDetailsResponse
* GetConformancePackComplianceDetailsResponse `object`
  * ConformancePackName **required**
  * ConformancePackRuleEvaluationResults
    * items [ConformancePackEvaluationResult](#conformancepackevaluationresult)
  * NextToken

### GetConformancePackComplianceSummaryRequest
* GetConformancePackComplianceSummaryRequest `object`
  * ConformancePackNames **required**
    * items [ConformancePackName](#conformancepackname)
  * Limit
  * NextToken

### GetConformancePackComplianceSummaryResponse
* GetConformancePackComplianceSummaryResponse `object`
  * ConformancePackComplianceSummaryList
    * items [ConformancePackComplianceSummary](#conformancepackcompliancesummary)
  * NextToken

### GetDiscoveredResourceCountsRequest
* GetDiscoveredResourceCountsRequest `object`
  * limit
  * nextToken
  * resourceTypes
    * items [StringWithCharLimit256](#stringwithcharlimit256)

### GetDiscoveredResourceCountsResponse
* GetDiscoveredResourceCountsResponse `object`
  * nextToken
  * resourceCounts
    * items [ResourceCount](#resourcecount)
  * totalDiscoveredResources

### GetOrganizationConfigRuleDetailedStatusRequest
* GetOrganizationConfigRuleDetailedStatusRequest `object`
  * Filters
    * AccountId
    * MemberAccountRuleStatus
  * Limit
  * NextToken
  * OrganizationConfigRuleName **required**

### GetOrganizationConfigRuleDetailedStatusResponse
* GetOrganizationConfigRuleDetailedStatusResponse `object`
  * NextToken
  * OrganizationConfigRuleDetailedStatus
    * items [MemberAccountStatus](#memberaccountstatus)

### GetOrganizationConformancePackDetailedStatusRequest
* GetOrganizationConformancePackDetailedStatusRequest `object`
  * Filters
    * AccountId
    * Status
  * Limit
  * NextToken
  * OrganizationConformancePackName **required**

### GetOrganizationConformancePackDetailedStatusResponse
* GetOrganizationConformancePackDetailedStatusResponse `object`
  * NextToken
  * OrganizationConformancePackDetailedStatuses
    * items [OrganizationConformancePackDetailedStatus](#organizationconformancepackdetailedstatus)

### GetResourceConfigHistoryRequest
* GetResourceConfigHistoryRequest `object`: The input for the <a>GetResourceConfigHistory</a> action.
  * chronologicalOrder
  * earlierTime
  * laterTime
  * limit
  * nextToken
  * resourceId **required**
  * resourceType **required**

### GetResourceConfigHistoryResponse
* GetResourceConfigHistoryResponse `object`: The output for the <a>GetResourceConfigHistory</a> action.
  * configurationItems
    * items [ConfigurationItem](#configurationitem)
  * nextToken

### GroupByAPILimit
* GroupByAPILimit `integer`

### GroupedResourceCount
* GroupedResourceCount `object`: The count of resources that are grouped by the group name.
  * GroupName **required**
  * ResourceCount **required**

### GroupedResourceCountList
* GroupedResourceCountList `array`
  * items [GroupedResourceCount](#groupedresourcecount)

### IncludeGlobalResourceTypes
* IncludeGlobalResourceTypes `boolean`

### InsufficientDeliveryPolicyException


### InsufficientPermissionsException


### Integer
* Integer `integer`

### InvalidConfigurationRecorderNameException


### InvalidDeliveryChannelNameException


### InvalidExpressionException


### InvalidLimitException


### InvalidNextTokenException


### InvalidParameterValueException


### InvalidRecordingGroupException


### InvalidResultTokenException


### InvalidRoleException


### InvalidS3KeyPrefixException


### InvalidSNSTopicARNException


### InvalidTimeRangeException


### LastDeliveryChannelDeleteFailedException


### LaterTime
* LaterTime `string`

### Limit
* Limit `integer`

### LimitExceededException


### ListAggregateDiscoveredResourcesRequest
* ListAggregateDiscoveredResourcesRequest `object`
  * ConfigurationAggregatorName **required**
  * Filters
    * AccountId
    * Region
    * ResourceId
    * ResourceName
  * Limit
  * NextToken
  * ResourceType **required**

### ListAggregateDiscoveredResourcesResponse
* ListAggregateDiscoveredResourcesResponse `object`
  * NextToken
  * ResourceIdentifiers
    * items [AggregateResourceIdentifier](#aggregateresourceidentifier)

### ListDiscoveredResourcesRequest
* ListDiscoveredResourcesRequest `object`: <p/>
  * includeDeletedResources
  * limit
  * nextToken
  * resourceIds
    * items [ResourceId](#resourceid)
  * resourceName
  * resourceType **required**

### ListDiscoveredResourcesResponse
* ListDiscoveredResourcesResponse `object`: <p/>
  * nextToken
  * resourceIdentifiers
    * items [ResourceIdentifier](#resourceidentifier)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * Limit
  * NextToken
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### Long
* Long `integer`

### MaxActiveResourcesExceededException


### MaxNumberOfConfigRulesExceededException


### MaxNumberOfConfigurationRecordersExceededException


### MaxNumberOfConformancePacksExceededException


### MaxNumberOfDeliveryChannelsExceededException


### MaxNumberOfOrganizationConfigRulesExceededException


### MaxNumberOfOrganizationConformancePacksExceededException


### MaxNumberOfRetentionConfigurationsExceededException


### MaximumExecutionFrequency
* MaximumExecutionFrequency `string` (values: One_Hour, Three_Hours, Six_Hours, Twelve_Hours, TwentyFour_Hours)

### MemberAccountRuleStatus
* MemberAccountRuleStatus `string` (values: CREATE_SUCCESSFUL, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_SUCCESSFUL, DELETE_FAILED, DELETE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_IN_PROGRESS, UPDATE_FAILED)

### MemberAccountStatus
* MemberAccountStatus `object`: Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.
  * AccountId **required**
  * ConfigRuleName **required**
  * ErrorCode
  * ErrorMessage
  * LastUpdateTime
  * MemberAccountRuleStatus **required**

### MessageType
* MessageType `string` (values: ConfigurationItemChangeNotification, ConfigurationSnapshotDeliveryCompleted, ScheduledNotification, OversizedConfigurationItemChangeNotification)

### Name
* Name `string`

### NextToken
* NextToken `string`

### NoAvailableConfigurationRecorderException


### NoAvailableDeliveryChannelException


### NoAvailableOrganizationException


### NoRunningConfigurationRecorderException


### NoSuchBucketException


### NoSuchConfigRuleException


### NoSuchConfigRuleInConformancePackException


### NoSuchConfigurationAggregatorException


### NoSuchConfigurationRecorderException


### NoSuchConformancePackException


### NoSuchDeliveryChannelException


### NoSuchOrganizationConfigRuleException


### NoSuchOrganizationConformancePackException


### NoSuchRemediationConfigurationException


### NoSuchRemediationExceptionException


### NoSuchRetentionConfigurationException


### OrderingTimestamp
* OrderingTimestamp `string`

### OrganizationAccessDeniedException


### OrganizationAggregationSource
* OrganizationAggregationSource `object`: This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
  * AllAwsRegions
  * AwsRegions
    * items [String](#string)
  * RoleArn **required**

### OrganizationAllFeaturesNotEnabledException


### OrganizationConfigRule
* OrganizationConfigRule `object`: An organization config rule that has information about config rules that AWS Config creates in member accounts.
  * ExcludedAccounts
    * items [AccountId](#accountid)
  * LastUpdateTime
  * OrganizationConfigRuleArn **required**
  * OrganizationConfigRuleName **required**
  * OrganizationCustomRuleMetadata
    * Description
    * InputParameters
    * LambdaFunctionArn **required**
    * MaximumExecutionFrequency
    * OrganizationConfigRuleTriggerTypes **required**
      * items [OrganizationConfigRuleTriggerType](#organizationconfigruletriggertype)
    * ResourceIdScope
    * ResourceTypesScope
      * items [StringWithCharLimit256](#stringwithcharlimit256)
    * TagKeyScope
    * TagValueScope
  * OrganizationManagedRuleMetadata
    * Description
    * InputParameters
    * MaximumExecutionFrequency
    * ResourceIdScope
    * ResourceTypesScope
      * items [StringWithCharLimit256](#stringwithcharlimit256)
    * RuleIdentifier **required**
    * TagKeyScope
    * TagValueScope

### OrganizationConfigRuleDetailedStatus
* OrganizationConfigRuleDetailedStatus `array`
  * items [MemberAccountStatus](#memberaccountstatus)

### OrganizationConfigRuleName
* OrganizationConfigRuleName `string`

### OrganizationConfigRuleNames
* OrganizationConfigRuleNames `array`
  * items [StringWithCharLimit64](#stringwithcharlimit64)

### OrganizationConfigRuleStatus
* OrganizationConfigRuleStatus `object`: Returns the status for an organization config rule in an organization.
  * ErrorCode
  * ErrorMessage
  * LastUpdateTime
  * OrganizationConfigRuleName **required**
  * OrganizationRuleStatus **required**

### OrganizationConfigRuleStatuses
* OrganizationConfigRuleStatuses `array`
  * items [OrganizationConfigRuleStatus](#organizationconfigrulestatus)

### OrganizationConfigRuleTriggerType
* OrganizationConfigRuleTriggerType `string` (values: ConfigurationItemChangeNotification, OversizedConfigurationItemChangeNotification, ScheduledNotification)

### OrganizationConfigRuleTriggerTypes
* OrganizationConfigRuleTriggerTypes `array`
  * items [OrganizationConfigRuleTriggerType](#organizationconfigruletriggertype)

### OrganizationConfigRules
* OrganizationConfigRules `array`
  * items [OrganizationConfigRule](#organizationconfigrule)

### OrganizationConformancePack
* OrganizationConformancePack `object`: An organization conformance pack that has information about conformance packs that AWS Config creates in member accounts. 
  * ConformancePackInputParameters
    * items [ConformancePackInputParameter](#conformancepackinputparameter)
  * DeliveryS3Bucket
  * DeliveryS3KeyPrefix
  * ExcludedAccounts
    * items [AccountId](#accountid)
  * LastUpdateTime **required**
  * OrganizationConformancePackArn **required**
  * OrganizationConformancePackName **required**

### OrganizationConformancePackDetailedStatus
* OrganizationConformancePackDetailedStatus `object`: Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed. 
  * AccountId **required**
  * ConformancePackName **required**
  * ErrorCode
  * ErrorMessage
  * LastUpdateTime
  * Status **required**

### OrganizationConformancePackDetailedStatuses
* OrganizationConformancePackDetailedStatuses `array`
  * items [OrganizationConformancePackDetailedStatus](#organizationconformancepackdetailedstatus)

### OrganizationConformancePackName
* OrganizationConformancePackName `string`

### OrganizationConformancePackNames
* OrganizationConformancePackNames `array`
  * items [OrganizationConformancePackName](#organizationconformancepackname)

### OrganizationConformancePackStatus
* OrganizationConformancePackStatus `object`: Returns the status for an organization conformance pack in an organization.
  * ErrorCode
  * ErrorMessage
  * LastUpdateTime
  * OrganizationConformancePackName **required**
  * Status **required**

### OrganizationConformancePackStatuses
* OrganizationConformancePackStatuses `array`
  * items [OrganizationConformancePackStatus](#organizationconformancepackstatus)

### OrganizationConformancePackTemplateValidationException


### OrganizationConformancePacks
* OrganizationConformancePacks `array`
  * items [OrganizationConformancePack](#organizationconformancepack)

### OrganizationCustomRuleMetadata
* OrganizationCustomRuleMetadata `object`: An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.
  * Description
  * InputParameters
  * LambdaFunctionArn **required**
  * MaximumExecutionFrequency
  * OrganizationConfigRuleTriggerTypes **required**
    * items [OrganizationConfigRuleTriggerType](#organizationconfigruletriggertype)
  * ResourceIdScope
  * ResourceTypesScope
    * items [StringWithCharLimit256](#stringwithcharlimit256)
  * TagKeyScope
  * TagValueScope

### OrganizationManagedRuleMetadata
* OrganizationManagedRuleMetadata `object`: An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.
  * Description
  * InputParameters
  * MaximumExecutionFrequency
  * ResourceIdScope
  * ResourceTypesScope
    * items [StringWithCharLimit256](#stringwithcharlimit256)
  * RuleIdentifier **required**
  * TagKeyScope
  * TagValueScope

### OrganizationResourceDetailedStatus
* OrganizationResourceDetailedStatus `string` (values: CREATE_SUCCESSFUL, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_SUCCESSFUL, DELETE_FAILED, DELETE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_IN_PROGRESS, UPDATE_FAILED)

### OrganizationResourceDetailedStatusFilters
* OrganizationResourceDetailedStatusFilters `object`: Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.
  * AccountId
  * Status

### OrganizationResourceStatus
* OrganizationResourceStatus `string` (values: CREATE_SUCCESSFUL, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_SUCCESSFUL, DELETE_FAILED, DELETE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_IN_PROGRESS, UPDATE_FAILED)

### OrganizationRuleStatus
* OrganizationRuleStatus `string` (values: CREATE_SUCCESSFUL, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_SUCCESSFUL, DELETE_FAILED, DELETE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_IN_PROGRESS, UPDATE_FAILED)

### OversizedConfigurationItemException


### Owner
* Owner `string` (values: CUSTOM_LAMBDA, AWS)

### PageSizeLimit
* PageSizeLimit `integer`

### ParameterName
* ParameterName `string`

### ParameterValue
* ParameterValue `string`

### PendingAggregationRequest
* PendingAggregationRequest `object`: An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.
  * RequesterAccountId
  * RequesterAwsRegion

### PendingAggregationRequestList
* PendingAggregationRequestList `array`
  * items [PendingAggregationRequest](#pendingaggregationrequest)

### Percentage
* Percentage `integer`

### PutAggregationAuthorizationRequest
* PutAggregationAuthorizationRequest `object`
  * AuthorizedAccountId **required**
  * AuthorizedAwsRegion **required**
  * Tags
    * items [Tag](#tag)

### PutAggregationAuthorizationResponse
* PutAggregationAuthorizationResponse `object`
  * AggregationAuthorization
    * AggregationAuthorizationArn
    * AuthorizedAccountId
    * AuthorizedAwsRegion
    * CreationTime

### PutConfigRuleRequest
* PutConfigRuleRequest `object`
  * ConfigRule **required**
    * ConfigRuleArn
    * ConfigRuleId
    * ConfigRuleName
    * ConfigRuleState
    * CreatedBy
    * Description
    * InputParameters
    * MaximumExecutionFrequency
    * Scope
      * ComplianceResourceId
      * ComplianceResourceTypes
        * items [StringWithCharLimit256](#stringwithcharlimit256)
      * TagKey
      * TagValue
    * Source **required**
      * Owner **required**
      * SourceDetails
        * items [SourceDetail](#sourcedetail)
      * SourceIdentifier **required**
  * Tags
    * items [Tag](#tag)

### PutConfigurationAggregatorRequest
* PutConfigurationAggregatorRequest `object`
  * AccountAggregationSources
    * items [AccountAggregationSource](#accountaggregationsource)
  * ConfigurationAggregatorName **required**
  * OrganizationAggregationSource
    * AllAwsRegions
    * AwsRegions
      * items [String](#string)
    * RoleArn **required**
  * Tags
    * items [Tag](#tag)

### PutConfigurationAggregatorResponse
* PutConfigurationAggregatorResponse `object`
  * ConfigurationAggregator
    * AccountAggregationSources
      * items [AccountAggregationSource](#accountaggregationsource)
    * ConfigurationAggregatorArn
    * ConfigurationAggregatorName
    * CreatedBy
    * CreationTime
    * LastUpdatedTime
    * OrganizationAggregationSource
      * AllAwsRegions
      * AwsRegions
        * items [String](#string)
      * RoleArn **required**

### PutConfigurationRecorderRequest
* PutConfigurationRecorderRequest `object`: The input for the <a>PutConfigurationRecorder</a> action.
  * ConfigurationRecorder **required**
    * name
    * recordingGroup
      * allSupported
      * includeGlobalResourceTypes
      * resourceTypes
        * items [ResourceType](#resourcetype)
    * roleARN

### PutConformancePackRequest
* PutConformancePackRequest `object`
  * ConformancePackInputParameters
    * items [ConformancePackInputParameter](#conformancepackinputparameter)
  * ConformancePackName **required**
  * DeliveryS3Bucket
  * DeliveryS3KeyPrefix
  * TemplateBody
  * TemplateS3Uri

### PutConformancePackResponse
* PutConformancePackResponse `object`
  * ConformancePackArn

### PutDeliveryChannelRequest
* PutDeliveryChannelRequest `object`: The input for the <a>PutDeliveryChannel</a> action.
  * DeliveryChannel **required**
    * configSnapshotDeliveryProperties
      * deliveryFrequency
    * name
    * s3BucketName
    * s3KeyPrefix
    * snsTopicARN

### PutEvaluationsRequest
* PutEvaluationsRequest `object`: <p/>
  * Evaluations
    * items [Evaluation](#evaluation)
  * ResultToken **required**
  * TestMode

### PutEvaluationsResponse
* PutEvaluationsResponse `object`: <p/>
  * FailedEvaluations
    * items [Evaluation](#evaluation)

### PutExternalEvaluationRequest
* PutExternalEvaluationRequest `object`
  * ConfigRuleName **required** [ConfigRuleName](#configrulename)
  * ExternalEvaluation **required** [ExternalEvaluation](#externalevaluation)

### PutExternalEvaluationResponse
* PutExternalEvaluationResponse `object`

### PutOrganizationConfigRuleRequest
* PutOrganizationConfigRuleRequest `object`
  * ExcludedAccounts
    * items [AccountId](#accountid)
  * OrganizationConfigRuleName **required**
  * OrganizationCustomRuleMetadata
    * Description
    * InputParameters
    * LambdaFunctionArn **required**
    * MaximumExecutionFrequency
    * OrganizationConfigRuleTriggerTypes **required**
      * items [OrganizationConfigRuleTriggerType](#organizationconfigruletriggertype)
    * ResourceIdScope
    * ResourceTypesScope
      * items [StringWithCharLimit256](#stringwithcharlimit256)
    * TagKeyScope
    * TagValueScope
  * OrganizationManagedRuleMetadata
    * Description
    * InputParameters
    * MaximumExecutionFrequency
    * ResourceIdScope
    * ResourceTypesScope
      * items [StringWithCharLimit256](#stringwithcharlimit256)
    * RuleIdentifier **required**
    * TagKeyScope
    * TagValueScope

### PutOrganizationConfigRuleResponse
* PutOrganizationConfigRuleResponse `object`
  * OrganizationConfigRuleArn

### PutOrganizationConformancePackRequest
* PutOrganizationConformancePackRequest `object`
  * ConformancePackInputParameters
    * items [ConformancePackInputParameter](#conformancepackinputparameter)
  * DeliveryS3Bucket
  * DeliveryS3KeyPrefix
  * ExcludedAccounts
    * items [AccountId](#accountid)
  * OrganizationConformancePackName **required**
  * TemplateBody
  * TemplateS3Uri

### PutOrganizationConformancePackResponse
* PutOrganizationConformancePackResponse `object`
  * OrganizationConformancePackArn

### PutRemediationConfigurationsRequest
* PutRemediationConfigurationsRequest `object`
  * RemediationConfigurations **required**
    * items [RemediationConfiguration](#remediationconfiguration)

### PutRemediationConfigurationsResponse
* PutRemediationConfigurationsResponse `object`
  * FailedBatches
    * items [FailedRemediationBatch](#failedremediationbatch)

### PutRemediationExceptionsRequest
* PutRemediationExceptionsRequest `object`
  * ConfigRuleName **required**
  * ExpirationTime
  * Message
  * ResourceKeys **required**
    * items [RemediationExceptionResourceKey](#remediationexceptionresourcekey)

### PutRemediationExceptionsResponse
* PutRemediationExceptionsResponse `object`
  * FailedBatches
    * items [FailedRemediationExceptionBatch](#failedremediationexceptionbatch)

### PutResourceConfigRequest
* PutResourceConfigRequest `object`
  * Configuration **required**
  * ResourceId **required**
  * ResourceName
  * ResourceType **required**
  * SchemaVersionId **required**
  * Tags

### PutRetentionConfigurationRequest
* PutRetentionConfigurationRequest `object`
  * RetentionPeriodInDays **required**

### PutRetentionConfigurationResponse
* PutRetentionConfigurationResponse `object`
  * RetentionConfiguration
    * Name **required**
    * RetentionPeriodInDays **required**

### QueryInfo
* QueryInfo `object`: Details about the query.
  * SelectFields
    * items [FieldInfo](#fieldinfo)

### RecorderName
* RecorderName `string`

### RecorderStatus
* RecorderStatus `string` (values: Pending, Success, Failure)

### RecordingGroup
* RecordingGroup `object`: <p>Specifies the types of AWS resource for which AWS Config records configuration changes.</p> <p>In the recording group, you specify whether all supported types or specific types of resources are recorded.</p> <p>By default, AWS Config records configuration changes for all supported types of regional resources that AWS Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have AWS Config record configuration changes for supported types of global resources (for example, IAM resources). Global resources are not tied to an individual region and can be used in all regions.</p> <important> <p>The configuration details for any global resource are the same in all regions. If you customize AWS Config in multiple regions to record global resources, it will create multiple configuration items each time a global resource changes: one configuration item for each region. These configuration items will contain identical data. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources, unless you want the configuration items to be available in multiple regions.</p> </important> <p>If you don't want AWS Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources AWS Config Records</a>.</p>
  * allSupported
  * includeGlobalResourceTypes
  * resourceTypes
    * items [ResourceType](#resourcetype)

### ReevaluateConfigRuleNames
* ReevaluateConfigRuleNames `array`
  * items [ConfigRuleName](#configrulename)

### RelatedEvent
* RelatedEvent `string`

### RelatedEventList
* RelatedEventList `array`
  * items [RelatedEvent](#relatedevent)

### Relationship
* Relationship `object`: The relationship of the related resource to the main resource.
  * relationshipName
  * resourceId
  * resourceName
  * resourceType

### RelationshipList
* RelationshipList `array`
  * items [Relationship](#relationship)

### RelationshipName
* RelationshipName `string`

### RemediationConfiguration
* RemediationConfiguration `object`: An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
  * Arn
  * Automatic
  * ConfigRuleName **required**
  * CreatedByService
  * ExecutionControls
    * SsmControls
      * ConcurrentExecutionRatePercentage
      * ErrorPercentage
  * MaximumAutomaticAttempts
  * Parameters
  * ResourceType
  * RetryAttemptSeconds
  * TargetId **required**
  * TargetType **required**
  * TargetVersion

### RemediationConfigurations
* RemediationConfigurations `array`
  * items [RemediationConfiguration](#remediationconfiguration)

### RemediationException
* RemediationException `object`: An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type. 
  * ConfigRuleName **required**
  * ExpirationTime
  * Message
  * ResourceId **required**
  * ResourceType **required**

### RemediationExceptionResourceKey
* RemediationExceptionResourceKey `object`: The details that identify a resource within AWS Config, including the resource type and resource ID. 
  * ResourceId
  * ResourceType

### RemediationExceptionResourceKeys
* RemediationExceptionResourceKeys `array`
  * items [RemediationExceptionResourceKey](#remediationexceptionresourcekey)

### RemediationExceptions
* RemediationExceptions `array`
  * items [RemediationException](#remediationexception)

### RemediationExecutionState
* RemediationExecutionState `string` (values: QUEUED, IN_PROGRESS, SUCCEEDED, FAILED)

### RemediationExecutionStatus
* RemediationExecutionStatus `object`: Provides details of the current status of the invoked remediation action for that resource.
  * InvocationTime
  * LastUpdatedTime
  * ResourceKey [ResourceKey](#resourcekey)
  * State
  * StepDetails
    * items [RemediationExecutionStep](#remediationexecutionstep)

### RemediationExecutionStatuses
* RemediationExecutionStatuses `array`
  * items [RemediationExecutionStatus](#remediationexecutionstatus)

### RemediationExecutionStep
* RemediationExecutionStep `object`: Name of the step from the SSM document.
  * ErrorMessage
  * Name
  * StartTime
  * State
  * StopTime

### RemediationExecutionStepState
* RemediationExecutionStepState `string` (values: SUCCEEDED, PENDING, FAILED)

### RemediationExecutionSteps
* RemediationExecutionSteps `array`
  * items [RemediationExecutionStep](#remediationexecutionstep)

### RemediationInProgressException


### RemediationParameterValue
* RemediationParameterValue `object`: The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.
  * ResourceValue
    * Value **required**
  * StaticValue
    * Values **required**
      * items [StringWithCharLimit256](#stringwithcharlimit256)

### RemediationParameters
* RemediationParameters `object`

### RemediationTargetType
* RemediationTargetType `string` (values: SSM_DOCUMENT)

### ResourceCount
* ResourceCount `object`: An object that contains the resource type and the number of resources.
  * count
  * resourceType

### ResourceCountFilters
* ResourceCountFilters `object`: Filters the resource count based on account ID, region, and resource type.
  * AccountId
  * Region
  * ResourceType

### ResourceCountGroupKey
* ResourceCountGroupKey `string` (values: RESOURCE_TYPE, ACCOUNT_ID, AWS_REGION)

### ResourceCounts
* ResourceCounts `array`
  * items [ResourceCount](#resourcecount)

### ResourceCreationTime
* ResourceCreationTime `string`

### ResourceDeletionTime
* ResourceDeletionTime `string`

### ResourceFilters
* ResourceFilters `object`: Filters the results by resource account ID, region, resource ID, and resource name.
  * AccountId
  * Region
  * ResourceId
  * ResourceName

### ResourceId
* ResourceId `string`

### ResourceIdList
* ResourceIdList `array`
  * items [ResourceId](#resourceid)

### ResourceIdentifier
* ResourceIdentifier `object`: The details that identify a resource that is discovered by AWS Config, including the resource type, ID, and (if available) the custom resource name.
  * resourceDeletionTime
  * resourceId
  * resourceName
  * resourceType

### ResourceIdentifierList
* ResourceIdentifierList `array`
  * items [ResourceIdentifier](#resourceidentifier)

### ResourceIdentifiersList
* ResourceIdentifiersList `array`
  * items [AggregateResourceIdentifier](#aggregateresourceidentifier)

### ResourceInUseException


### ResourceKey
* ResourceKey `object`: The details that identify a resource within AWS Config, including the resource type and resource ID.
  * resourceId **required**
  * resourceType **required**

### ResourceKeys
* ResourceKeys `array`
  * items [ResourceKey](#resourcekey)

### ResourceName
* ResourceName `string`

### ResourceNotDiscoveredException


### ResourceNotFoundException


### ResourceType
* ResourceType `string` (values: AWS::EC2::CustomerGateway, AWS::EC2::EIP, AWS::EC2::Host, AWS::EC2::Instance, AWS::EC2::InternetGateway, AWS::EC2::NetworkAcl, AWS::EC2::NetworkInterface, AWS::EC2::RouteTable, AWS::EC2::SecurityGroup, AWS::EC2::Subnet, AWS::CloudTrail::Trail, AWS::EC2::Volume, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::EC2::RegisteredHAInstance, AWS::EC2::NatGateway, AWS::EC2::EgressOnlyInternetGateway, AWS::EC2::VPCEndpoint, AWS::EC2::VPCEndpointService, AWS::EC2::FlowLog, AWS::EC2::VPCPeeringConnection, AWS::Elasticsearch::Domain, AWS::IAM::Group, AWS::IAM::Policy, AWS::IAM::Role, AWS::IAM::User, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::ACM::Certificate, AWS::RDS::DBInstance, AWS::RDS::DBSubnetGroup, AWS::RDS::DBSecurityGroup, AWS::RDS::DBSnapshot, AWS::RDS::DBCluster, AWS::RDS::DBClusterSnapshot, AWS::RDS::EventSubscription, AWS::S3::Bucket, AWS::S3::AccountPublicAccessBlock, AWS::Redshift::Cluster, AWS::Redshift::ClusterSnapshot, AWS::Redshift::ClusterParameterGroup, AWS::Redshift::ClusterSecurityGroup, AWS::Redshift::ClusterSubnetGroup, AWS::Redshift::EventSubscription, AWS::SSM::ManagedInstanceInventory, AWS::CloudWatch::Alarm, AWS::CloudFormation::Stack, AWS::ElasticLoadBalancing::LoadBalancer, AWS::AutoScaling::AutoScalingGroup, AWS::AutoScaling::LaunchConfiguration, AWS::AutoScaling::ScalingPolicy, AWS::AutoScaling::ScheduledAction, AWS::DynamoDB::Table, AWS::CodeBuild::Project, AWS::WAF::RateBasedRule, AWS::WAF::Rule, AWS::WAF::RuleGroup, AWS::WAF::WebACL, AWS::WAFRegional::RateBasedRule, AWS::WAFRegional::Rule, AWS::WAFRegional::RuleGroup, AWS::WAFRegional::WebACL, AWS::CloudFront::Distribution, AWS::CloudFront::StreamingDistribution, AWS::Lambda::Function, AWS::ElasticBeanstalk::Application, AWS::ElasticBeanstalk::ApplicationVersion, AWS::ElasticBeanstalk::Environment, AWS::WAFv2::WebACL, AWS::WAFv2::RuleGroup, AWS::WAFv2::IPSet, AWS::WAFv2::RegexPatternSet, AWS::WAFv2::ManagedRuleSet, AWS::XRay::EncryptionConfig, AWS::SSM::AssociationCompliance, AWS::SSM::PatchCompliance, AWS::Shield::Protection, AWS::ShieldRegional::Protection, AWS::Config::ResourceCompliance, AWS::ApiGateway::Stage, AWS::ApiGateway::RestApi, AWS::ApiGatewayV2::Stage, AWS::ApiGatewayV2::Api, AWS::CodePipeline::Pipeline, AWS::ServiceCatalog::CloudFormationProvisionedProduct, AWS::ServiceCatalog::CloudFormationProduct, AWS::ServiceCatalog::Portfolio, AWS::SQS::Queue, AWS::KMS::Key, AWS::QLDB::Ledger, AWS::SecretsManager::Secret, AWS::SNS::Topic, AWS::SSM::FileData)

### ResourceTypeList
* ResourceTypeList `array`
  * items [ResourceType](#resourcetype)

### ResourceTypeString
* ResourceTypeString `string`

### ResourceTypes
* ResourceTypes `array`
  * items [StringWithCharLimit256](#stringwithcharlimit256)

### ResourceTypesScope
* ResourceTypesScope `array`
  * items [StringWithCharLimit256](#stringwithcharlimit256)

### ResourceValue
* ResourceValue `object`: The dynamic value of the resource.
  * Value **required**

### ResourceValueType
* ResourceValueType `string` (values: RESOURCE_ID)

### Results
* Results `array`
  * items [String](#string)

### RetentionConfiguration
* RetentionConfiguration `object`: An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config.
  * Name **required**
  * RetentionPeriodInDays **required**

### RetentionConfigurationList
* RetentionConfigurationList `array`
  * items [RetentionConfiguration](#retentionconfiguration)

### RetentionConfigurationName
* RetentionConfigurationName `string`

### RetentionConfigurationNameList
* RetentionConfigurationNameList `array`
  * items [RetentionConfigurationName](#retentionconfigurationname)

### RetentionPeriodInDays
* RetentionPeriodInDays `integer`

### RuleLimit
* RuleLimit `integer`

### SchemaVersionId
* SchemaVersionId `string`

### Scope
* Scope `object`: Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
  * ComplianceResourceId
  * ComplianceResourceTypes
    * items [StringWithCharLimit256](#stringwithcharlimit256)
  * TagKey
  * TagValue

### SelectAggregateResourceConfigRequest
* SelectAggregateResourceConfigRequest `object`
  * ConfigurationAggregatorName **required**
  * Expression **required**
  * Limit
  * MaxResults
  * NextToken

### SelectAggregateResourceConfigResponse
* SelectAggregateResourceConfigResponse `object`
  * NextToken
  * QueryInfo [QueryInfo](#queryinfo)
  * Results
    * items [String](#string)

### SelectResourceConfigRequest
* SelectResourceConfigRequest `object`
  * Expression **required**
  * Limit
  * NextToken

### SelectResourceConfigResponse
* SelectResourceConfigResponse `object`
  * NextToken
  * QueryInfo
    * SelectFields
      * items [FieldInfo](#fieldinfo)
  * Results
    * items [String](#string)

### Source
* Source `object`: Provides the AWS Config rule owner (AWS or customer), the rule identifier, and the events that trigger the evaluation of your AWS resources.
  * Owner **required**
  * SourceDetails
    * items [SourceDetail](#sourcedetail)
  * SourceIdentifier **required**

### SourceDetail
* SourceDetail `object`: Provides the source and the message types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules. 
  * EventSource
  * MaximumExecutionFrequency
  * MessageType

### SourceDetails
* SourceDetails `array`
  * items [SourceDetail](#sourcedetail)

### SsmControls
* SsmControls `object`: AWS Systems Manager (SSM) specific remediation controls.
  * ConcurrentExecutionRatePercentage
  * ErrorPercentage

### StackArn
* StackArn `string`

### StartConfigRulesEvaluationRequest
* StartConfigRulesEvaluationRequest `object`: <p/>
  * ConfigRuleNames
    * items [ConfigRuleName](#configrulename)

### StartConfigRulesEvaluationResponse
* StartConfigRulesEvaluationResponse `object`: The output when you start the evaluation for the specified AWS Config rule.

### StartConfigurationRecorderRequest
* StartConfigurationRecorderRequest `object`: The input for the <a>StartConfigurationRecorder</a> action.
  * ConfigurationRecorderName **required**

### StartRemediationExecutionRequest
* StartRemediationExecutionRequest `object`
  * ConfigRuleName **required**
  * ResourceKeys **required**
    * items [ResourceKey](#resourcekey)

### StartRemediationExecutionResponse
* StartRemediationExecutionResponse `object`
  * FailedItems
    * items [ResourceKey](#resourcekey)
  * FailureMessage

### StaticParameterValues
* StaticParameterValues `array`
  * items [StringWithCharLimit256](#stringwithcharlimit256)

### StaticValue
* StaticValue `object`: The static value of the resource.
  * Values **required**
    * items [StringWithCharLimit256](#stringwithcharlimit256)

### StatusDetailFilters
* StatusDetailFilters `object`: Status filter object to filter results based on specific member account ID or status type for an organization config rule. 
  * AccountId
  * MemberAccountRuleStatus

### StopConfigurationRecorderRequest
* StopConfigurationRecorderRequest `object`: The input for the <a>StopConfigurationRecorder</a> action.
  * ConfigurationRecorderName **required**

### String
* String `string`

### StringWithCharLimit1024
* StringWithCharLimit1024 `string`

### StringWithCharLimit128
* StringWithCharLimit128 `string`

### StringWithCharLimit2048
* StringWithCharLimit2048 `string`

### StringWithCharLimit256
* StringWithCharLimit256 `string`

### StringWithCharLimit256Min0
* StringWithCharLimit256Min0 `string`

### StringWithCharLimit64
* StringWithCharLimit64 `string`

### StringWithCharLimit768
* StringWithCharLimit768 `string`

### SupplementaryConfiguration
* SupplementaryConfiguration `object`

### SupplementaryConfigurationName
* SupplementaryConfigurationName `string`

### SupplementaryConfigurationValue
* SupplementaryConfigurationValue `string`

### Tag
* Tag `object`: The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
  * Key
  * Value

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
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### TagsList
* TagsList `array`
  * items [Tag](#tag)

### TemplateBody
* TemplateBody `string`

### TemplateS3Uri
* TemplateS3Uri `string`

### TooManyTagsException


### UnprocessedResourceIdentifierList
* UnprocessedResourceIdentifierList `array`
  * items [AggregateResourceIdentifier](#aggregateresourceidentifier)

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### ValidationException


### Value
* Value `string`

### Version
* Version `string`


