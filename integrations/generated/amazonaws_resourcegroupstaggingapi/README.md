# @datafire/amazonaws_resourcegroupstaggingapi

Client library for AWS Resource Groups Tagging API

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_resourcegroupstaggingapi
```
```js
let amazonaws_resourcegroupstaggingapi = require('@datafire/amazonaws_resourcegroupstaggingapi').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Resource Groups Tagging API</fullname> <p>This guide describes the API operations for the resource groups tagging.</p> <p>A tag is a label that you assign to an AWS resource. A tag consists of a key and a value, both of which you define. For example, if you have two Amazon EC2 instances, you might assign both a tag key of "Stack." But the value of "Stack" might be "Testing" for one and "Production" for the other.</p> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p>Tagging can help you organize your resources and enables you to simplify resource management, access management and cost allocation. </p> <p>You can use the resource groups tagging API operations to complete the following tasks:</p> <ul> <li> <p>Tag and untag supported resources located in the specified Region for the AWS account.</p> </li> <li> <p>Use tag-based filters to search for resources located in the specified Region for the AWS account.</p> </li> <li> <p>List all existing tag keys in the specified Region for the AWS account.</p> </li> <li> <p>List all existing values for the specified key in the specified Region for the AWS account.</p> </li> </ul> <p>To use resource groups tagging API operations, you must add the following permissions to your IAM policy:</p> <ul> <li> <p> <code>tag:GetResources</code> </p> </li> <li> <p> <code>tag:TagResources</code> </p> </li> <li> <p> <code>tag:UntagResources</code> </p> </li> <li> <p> <code>tag:GetTagKeys</code> </p> </li> <li> <p> <code>tag:GetTagValues</code> </p> </li> </ul> <p>You'll also need permissions to access the resources of individual services so that you can tag and untag those resources.</p> <p>For more information on IAM policies, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html">Managing IAM Policies</a> in the <i>IAM User Guide</i>.</p> <p> <i> <b>Services that support the Resource Groups Tagging API</b> </i> </p> <p>You can use the Resource Groups Tagging API to tag resources for the following AWS services.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/a4b">Alexa for Business (a4b)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/apigateway">API Gateway</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appstream2">Amazon AppStream</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appsync">AWS AppSync</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/app-mesh">AWS App Mesh</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/athena">Amazon Athena</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide">Amazon Aurora</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-backup">AWS Backup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/acm">AWS Certificate Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/acm">AWS Certificate Manager Private CA</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/clouddirectory">Amazon Cloud Directory</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloud-map">AWS Cloud Map</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation">AWS CloudFormation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront">Amazon CloudFront</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudhsm">AWS CloudHSM</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudtrail">AWS CloudTrail</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudwatch">Amazon CloudWatch (alarms only)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudwatch/?id=docs_gateway#amazon-cloudwatch-events">Amazon CloudWatch Events</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudwatch/?id=docs_gateway#amazon-cloudwatch-logs">Amazon CloudWatch Logs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudwatch">Amazon Cloudwatch Synthetics</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codebuild">AWS CodeBuild</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codecommit">AWS CodeCommit</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/">AWS CodeGuru Profiler</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codepipeline">AWS CodePipeline</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codestar">AWS CodeStar</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/">AWS CodeStar Connections</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito">Amazon Cognito Identity</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito">Amazon Cognito User Pools</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/comprehend">Amazon Comprehend</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/config">AWS Config</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/connect/resources/?whats-new-cards#Documentation">Amazon Connect</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/data-exchange">AWS Data Exchange</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/data-pipeline">AWS Data Pipeline</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/dms">AWS Database Migration Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync">AWS DataSync</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/devicefarm">AWS Device Farm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/directconnect">AWS Direct Connect</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/directory-service">AWS Directory Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/dynamodb">Amazon DynamoDB</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ebs">Amazon EBS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ec2">Amazon EC2</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/imagebuilder">EC2 Image Builder</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ecr">Amazon ECR</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ecs">Amazon ECS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eks">Amazon EKS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elastic-beanstalk">AWS Elastic Beanstalk</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/efs">Amazon Elastic File System</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing">Elastic Load Balancing</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elastic-inference">Amazon Elastic Inference</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticache">Amazon ElastiCache</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticsearch-service">Amazon Elasticsearch Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/medialive">AWS Elemental MediaLive</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediapackage">AWS Elemental MediaPackage</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediapackage">AWS Elemental MediaPackage VoD</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediatailor">AWS Elemental MediaTailor</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/emr">Amazon EMR</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge">Amazon EventBridge Schema</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/firewall-manager">AWS Firewall Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/forecast">Amazon Forecast</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/frauddetector">Amazon Fraud Detector</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/fsx">Amazon FSx</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/s3/?id=docs_gateway#amazon-s3-glacier">Amazon S3 Glacier</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/global-accelerator">AWS Global Accelerator</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ground-station">AWS Ground Station</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue">AWS Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/guardduty">Amazon GuardDuty</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/inspector">Amazon Inspector</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ivs">Amazon Interactive Video Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotanalytics">AWS IoT Analytics</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iot">AWS IoT Core</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iot-device-defender">AWS IoT Device Defender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iot-device-management">AWS IoT Device Management</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents">AWS IoT Events</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/greengrass">AWS IoT Greengrass</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iot-1-click">AWS IoT 1-Click</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iot-sitewise">AWS IoT Sitewise</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/thingsgraph">AWS IoT Things Graph</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kendra">Amazon Kendra</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms">AWS Key Management Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kinesis">Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kinesis/?id=docs_gateway#amazon-kinesis-data-analytics">Amazon Kinesis Data Analytics</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kinesis/?id=docs_gateway#amazon-kinesis-data-firehose">Amazon Kinesis Data Firehose</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda">AWS Lambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lex">Amazon Lex</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/license-manager">AWS License Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lightsail">Amazon Lightsail</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/macie">Amazon Macie</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/machine-learning">Amazon Machine Learning</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/amazon-mq">Amazon MQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/msk">Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/msk">Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/neptune">Amazon Neptune</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html">AWS Network Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/opsworks">AWS OpsWorks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/opsworks">AWS OpsWorks CM</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations">AWS Organizations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/pinpoint">Amazon Pinpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/qldb">Amazon Quantum Ledger Database (QLDB)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/rds">Amazon RDS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/redshift">Amazon Redshift</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram">AWS Resource Access Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ARG">AWS Resource Groups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/robomaker">AWS RoboMaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/route53">Amazon Route 53</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/route53">Amazon Route 53 Resolver</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/s3">Amazon S3 (buckets only)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker">Amazon SageMaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/savingsplans">Savings Plans</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/secretsmanager">AWS Secrets Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/securityhub">AWS Security Hub</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/servicecatalog">AWS Service Catalog</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ses">Amazon Simple Email Service (SES)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sns">Amazon Simple Notification Service (SNS)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sqs">Amazon Simple Queue Service (SQS)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/swf">Amazon Simple Workflow Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/step-functions">AWS Step Functions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/storagegateway">AWS Storage Gateway</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/systems-manager">AWS Systems Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/transfer">AWS Transfer for SFTP</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/vpc">Amazon VPC</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/waf">AWS WAF</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/waf">AWS WAF Regional</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/worklink">Amazon WorkLink</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/workspaces">Amazon WorkSpaces</a> </p> </li> </ul>

## Actions

### DescribeReportCreation



```js
amazonaws_resourcegroupstaggingapi.DescribeReportCreation({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeReportCreationOutput](#describereportcreationoutput)

### GetComplianceSummary



```js
amazonaws_resourcegroupstaggingapi.GetComplianceSummary({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * PaginationToken `string`
  * GroupBy
    * items [GroupByAttribute](#groupbyattribute)
  * MaxResults
  * PaginationToken
  * RegionFilters
    * items [Region](#region)
  * ResourceTypeFilters
    * items [AmazonResourceType](#amazonresourcetype)
  * TagKeyFilters
    * items [TagKey](#tagkey)
  * TargetIdFilters
    * items [TargetId](#targetid)

#### Output
* output [GetComplianceSummaryOutput](#getcompliancesummaryoutput)

### GetResources



```js
amazonaws_resourcegroupstaggingapi.GetResources({}, context)
```

#### Input
* input `object`
  * ResourcesPerPage `string`
  * PaginationToken `string`
  * ExcludeCompliantResources
  * IncludeComplianceDetails
  * PaginationToken
  * ResourceTypeFilters
    * items [AmazonResourceType](#amazonresourcetype)
  * ResourcesPerPage
  * TagFilters
    * items [TagFilter](#tagfilter)
  * TagsPerPage

#### Output
* output [GetResourcesOutput](#getresourcesoutput)

### GetTagKeys



```js
amazonaws_resourcegroupstaggingapi.GetTagKeys({}, context)
```

#### Input
* input `object`
  * PaginationToken `string`
  * PaginationToken

#### Output
* output [GetTagKeysOutput](#gettagkeysoutput)

### GetTagValues



```js
amazonaws_resourcegroupstaggingapi.GetTagValues({
  "Key": null
}, context)
```

#### Input
* input `object`
  * PaginationToken `string`
  * Key **required**
  * PaginationToken

#### Output
* output [GetTagValuesOutput](#gettagvaluesoutput)

### StartReportCreation



```js
amazonaws_resourcegroupstaggingapi.StartReportCreation({
  "S3Bucket": null
}, context)
```

#### Input
* input `object`
  * S3Bucket **required**

#### Output
* output [StartReportCreationOutput](#startreportcreationoutput)

### TagResources



```js
amazonaws_resourcegroupstaggingapi.TagResources({
  "ResourceARNList": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARNList **required**
    * items [ResourceARN](#resourcearn)
  * Tags **required**

#### Output
* output [TagResourcesOutput](#tagresourcesoutput)

### UntagResources



```js
amazonaws_resourcegroupstaggingapi.UntagResources({
  "ResourceARNList": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARNList **required**
    * items [ResourceARN](#resourcearn)
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourcesOutput](#untagresourcesoutput)



## Definitions

### AmazonResourceType
* AmazonResourceType `string`

### ComplianceDetails
* ComplianceDetails `object`: Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
  * ComplianceStatus
  * KeysWithNoncompliantValues
    * items [TagKey](#tagkey)
  * NoncompliantKeys
    * items [TagKey](#tagkey)

### ComplianceStatus
* ComplianceStatus `boolean`

### ConcurrentModificationException


### ConstraintViolationException


### DescribeReportCreationInput
* DescribeReportCreationInput `object`

### DescribeReportCreationOutput
* DescribeReportCreationOutput `object`
  * ErrorMessage
  * S3Location
  * Status

### ErrorCode
* ErrorCode `string` (values: InternalServiceException, InvalidParameterException)

### ErrorMessage
* ErrorMessage `string`

### ExcludeCompliantResources
* ExcludeCompliantResources `boolean`

### FailedResourcesMap
* FailedResourcesMap `object`

### FailureInfo
* FailureInfo `object`: <p>Information about the errors that are returned for each failed resource. This information can include <code>InternalServiceException</code> and <code>InvalidParameterException</code> errors. It can also include any valid error code returned by the AWS service that hosts the resource that the ARN key represents.</p> <p>The following are common error codes that you might receive from other AWS services:</p> <ul> <li> <p> <b>InternalServiceException</b> – This can mean that the Resource Groups Tagging API didn't receive a response from another AWS service. It can also mean the the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p> </li> <li> <p> <b>AccessDeniedException</b> – This can mean that you need permission to calling tagging operations in the AWS service that contains the resource. For example, to use the Resource Groups Tagging API to tag a CloudWatch alarm resource, you need permission to call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html"> <code>TagResources</code> </a> <i>and</i> <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html"> <code>TagResource</code> </a> in the CloudWatch API. </p> </li> </ul> <p>For more information on errors that are generated from other AWS services, see the documentation for that service. </p>
  * ErrorCode
  * ErrorMessage
  * StatusCode

### GetComplianceSummaryInput
* GetComplianceSummaryInput `object`
  * GroupBy
    * items [GroupByAttribute](#groupbyattribute)
  * MaxResults
  * PaginationToken
  * RegionFilters
    * items [Region](#region)
  * ResourceTypeFilters
    * items [AmazonResourceType](#amazonresourcetype)
  * TagKeyFilters
    * items [TagKey](#tagkey)
  * TargetIdFilters
    * items [TargetId](#targetid)

### GetComplianceSummaryOutput
* GetComplianceSummaryOutput `object`
  * PaginationToken
  * SummaryList
    * items [Summary](#summary)

### GetResourcesInput
* GetResourcesInput `object`
  * ExcludeCompliantResources
  * IncludeComplianceDetails
  * PaginationToken
  * ResourceTypeFilters
    * items [AmazonResourceType](#amazonresourcetype)
  * ResourcesPerPage
  * TagFilters
    * items [TagFilter](#tagfilter)
  * TagsPerPage

### GetResourcesOutput
* GetResourcesOutput `object`
  * PaginationToken
  * ResourceTagMappingList
    * items [ResourceTagMapping](#resourcetagmapping)

### GetTagKeysInput
* GetTagKeysInput `object`
  * PaginationToken

### GetTagKeysOutput
* GetTagKeysOutput `object`
  * PaginationToken
  * TagKeys
    * items [TagKey](#tagkey)

### GetTagValuesInput
* GetTagValuesInput `object`
  * Key **required**
  * PaginationToken

### GetTagValuesOutput
* GetTagValuesOutput `object`
  * PaginationToken
  * TagValues
    * items [TagValue](#tagvalue)

### GroupBy
* GroupBy `array`
  * items [GroupByAttribute](#groupbyattribute)

### GroupByAttribute
* GroupByAttribute `string` (values: TARGET_ID, REGION, RESOURCE_TYPE)

### IncludeComplianceDetails
* IncludeComplianceDetails `boolean`

### InternalServiceException


### InvalidParameterException


### LastUpdated
* LastUpdated `string`

### MaxResultsGetComplianceSummary
* MaxResultsGetComplianceSummary `integer`

### NonCompliantResources
* NonCompliantResources `integer`

### PaginationToken
* PaginationToken `string`

### PaginationTokenExpiredException


### Region
* Region `string`

### RegionFilterList
* RegionFilterList `array`
  * items [Region](#region)

### ResourceARN
* ResourceARN `string`

### ResourceARNList
* ResourceARNList `array`
  * items [ResourceARN](#resourcearn)

### ResourceTagMapping
* ResourceTagMapping `object`: A list of resource ARNs and the tags (keys and values) that are associated with each.
  * ComplianceDetails
    * ComplianceStatus
    * KeysWithNoncompliantValues
      * items [TagKey](#tagkey)
    * NoncompliantKeys
      * items [TagKey](#tagkey)
  * ResourceARN
  * Tags
    * items [Tag](#tag)

### ResourceTagMappingList
* ResourceTagMappingList `array`
  * items [ResourceTagMapping](#resourcetagmapping)

### ResourceTypeFilterList
* ResourceTypeFilterList `array`
  * items [AmazonResourceType](#amazonresourcetype)

### ResourcesPerPage
* ResourcesPerPage `integer`

### S3Bucket
* S3Bucket `string`

### S3Location
* S3Location `string`

### StartReportCreationInput
* StartReportCreationInput `object`
  * S3Bucket **required**

### StartReportCreationOutput
* StartReportCreationOutput `object`

### Status
* Status `string`

### StatusCode
* StatusCode `integer`

### Summary
* Summary `object`: A count of noncompliant resources.
  * LastUpdated
  * NonCompliantResources
  * Region
  * ResourceType
  * TargetId
  * TargetIdType

### SummaryList
* SummaryList `array`
  * items [Summary](#summary)

### Tag
* Tag `object`: The metadata that you apply to AWS resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the <i>AWS General Reference</i>.
  * Key **required**
  * Value **required**

### TagFilter
* TagFilter `object`: A list of tags (keys and values) that are used to specify the associated resources.
  * Key
  * Values
    * items [TagValue](#tagvalue)

### TagFilterList
* TagFilterList `array`
  * items [TagFilter](#tagfilter)

### TagKey
* TagKey `string`

### TagKeyFilterList
* TagKeyFilterList `array`
  * items [TagKey](#tagkey)

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagKeyListForUntag
* TagKeyListForUntag `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagMap
* TagMap `object`

### TagResourcesInput
* TagResourcesInput `object`
  * ResourceARNList **required**
    * items [ResourceARN](#resourcearn)
  * Tags **required**

### TagResourcesOutput
* TagResourcesOutput `object`
  * FailedResourcesMap

### TagValue
* TagValue `string`

### TagValueList
* TagValueList `array`
  * items [TagValue](#tagvalue)

### TagValuesOutputList
* TagValuesOutputList `array`
  * items [TagValue](#tagvalue)

### TagsPerPage
* TagsPerPage `integer`

### TargetId
* TargetId `string`

### TargetIdFilterList
* TargetIdFilterList `array`
  * items [TargetId](#targetid)

### TargetIdType
* TargetIdType `string` (values: ACCOUNT, OU, ROOT)

### ThrottledException


### UntagResourcesInput
* UntagResourcesInput `object`
  * ResourceARNList **required**
    * items [ResourceARN](#resourcearn)
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourcesOutput
* UntagResourcesOutput `object`
  * FailedResourcesMap


