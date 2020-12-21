# @datafire/amazonaws_securityhub

Client library for AWS SecurityHub

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_securityhub
```
```js
let amazonaws_securityhub = require('@datafire/amazonaws_securityhub').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Security Hub provides you with a comprehensive view of the security state of your AWS environment and resources. It also provides you with the readiness status of your environment based on controls from supported security standards. Security Hub collects security data from AWS accounts, services, and integrated third-party products and helps you analyze security trends in your environment to identify the highest priority security issues. For more information about Security Hub, see the <i> <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">AWS Security Hub User Guide</a> </i>.</p> <p>When you use operations in the Security Hub API, the requests are executed only in the AWS Region that is currently active or in the specific AWS Region that you specify in your request. Any configuration or settings change that results from the operation is applied only to that Region. To make the same change in other Regions, execute the same command for each Region to apply the change to.</p> <p>For example, if your Region is set to <code>us-west-2</code>, when you use <code> <a>CreateMembers</a> </code> to add a member account to Security Hub, the association of the member account with the master account is created only in the <code>us-west-2</code> Region. Security Hub must be enabled for the member account in the same Region that the invitation was sent from.</p> <p>The following throttling limits apply to using Security Hub API operations.</p> <ul> <li> <p> <code> <a>BatchEnableStandards</a> </code> - <code>RateLimit</code> of 1 request per second, <code>BurstLimit</code> of 1 request per second.</p> </li> <li> <p> <code> <a>GetFindings</a> </code> - <code>RateLimit</code> of 3 requests per second. <code>BurstLimit</code> of 6 requests per second.</p> </li> <li> <p> <code> <a>UpdateFindings</a> </code> - <code>RateLimit</code> of 1 request per second. <code>BurstLimit</code> of 5 requests per second.</p> </li> <li> <p> <code> <a>UpdateStandardsControl</a> </code> - <code>RateLimit</code> of 1 request per second, <code>BurstLimit</code> of 5 requests per second.</p> </li> <li> <p>All other operations - <code>RateLimit</code> of 10 requests per second. <code>BurstLimit</code> of 30 requests per second.</p> </li> </ul>

## Actions

### DisableSecurityHub



```js
amazonaws_securityhub.DisableSecurityHub({}, context)
```

#### Input
* input `object`

#### Output
* output [DisableSecurityHubResponse](#disablesecurityhubresponse)

### DescribeHub



```js
amazonaws_securityhub.DescribeHub({}, context)
```

#### Input
* input `object`
  * HubArn `string`

#### Output
* output [DescribeHubResponse](#describehubresponse)

### UpdateSecurityHubConfiguration



```js
amazonaws_securityhub.UpdateSecurityHubConfiguration({}, context)
```

#### Input
* input `object`
  * AutoEnableControls `boolean`: <p>Whether to automatically enable new controls when they are added to standards that are enabled.</p> <p>By default, this is set to <code>true</code>, and new controls are enabled automatically. To not automatically enable new controls, set this to <code>false</code>. </p>

#### Output
* output [UpdateSecurityHubConfigurationResponse](#updatesecurityhubconfigurationresponse)

### EnableSecurityHub



```js
amazonaws_securityhub.EnableSecurityHub({}, context)
```

#### Input
* input `object`
  * EnableDefaultStandards `boolean`: Whether to enable the security standards that Security Hub has designated as automatically enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set to <code>true</code>. To not enable the automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>.
  * Tags `object`: The tags to add to the hub resource when you enable Security Hub.

#### Output
* output [EnableSecurityHubResponse](#enablesecurityhubresponse)

### CreateActionTarget



```js
amazonaws_securityhub.CreateActionTarget({
  "Name": "",
  "Description": "",
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Description **required** `string`: The description for the custom action target.
  * Id **required** `string`: The ID for the custom action target.
  * Name **required** `string`: The name of the custom action target.

#### Output
* output [CreateActionTargetResponse](#createactiontargetresponse)

### DescribeActionTargets



```js
amazonaws_securityhub.DescribeActionTargets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ActionTargetArns `array`: A list of custom action target ARNs for the custom action targets to retrieve.
    * items [NonEmptyString](#nonemptystring)
  * MaxResults `integer`: The maximum number of results to return.
  * NextToken `string`: <p>The token that is required for pagination. On your first call to the <code>DescribeActionTargets</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>

#### Output
* output [DescribeActionTargetsResponse](#describeactiontargetsresponse)

### DeleteActionTarget



```js
amazonaws_securityhub.DeleteActionTarget({
  "ActionTargetArn": ""
}, context)
```

#### Input
* input `object`
  * ActionTargetArn **required** `string`

#### Output
* output [DeleteActionTargetResponse](#deleteactiontargetresponse)

### UpdateActionTarget



```js
amazonaws_securityhub.UpdateActionTarget({
  "ActionTargetArn": ""
}, context)
```

#### Input
* input `object`
  * ActionTargetArn **required** `string`
  * Description `string`: The updated description for the custom action target.
  * Name `string`: The updated name of the custom action target.

#### Output
* output [UpdateActionTargetResponse](#updateactiontargetresponse)

### UpdateFindings



```js
amazonaws_securityhub.UpdateFindings({
  "Filters": {}
}, context)
```

#### Input
* input `object`
  * Filters **required** `object`: <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
    * AwsAccountId
      * items [StringFilter](#stringfilter)
    * CompanyName
      * items [StringFilter](#stringfilter)
    * ComplianceStatus
      * items [StringFilter](#stringfilter)
    * Confidence
      * items [NumberFilter](#numberfilter)
    * CreatedAt
      * items [DateFilter](#datefilter)
    * Criticality
      * items [NumberFilter](#numberfilter)
    * Description
      * items [StringFilter](#stringfilter)
    * FirstObservedAt
      * items [DateFilter](#datefilter)
    * GeneratorId
      * items [StringFilter](#stringfilter)
    * Id
      * items [StringFilter](#stringfilter)
    * Keyword
      * items [KeywordFilter](#keywordfilter)
    * LastObservedAt
      * items [DateFilter](#datefilter)
    * MalwareName
      * items [StringFilter](#stringfilter)
    * MalwarePath
      * items [StringFilter](#stringfilter)
    * MalwareState
      * items [StringFilter](#stringfilter)
    * MalwareType
      * items [StringFilter](#stringfilter)
    * NetworkDestinationDomain
      * items [StringFilter](#stringfilter)
    * NetworkDestinationIpV4
      * items [IpFilter](#ipfilter)
    * NetworkDestinationIpV6
      * items [IpFilter](#ipfilter)
    * NetworkDestinationPort
      * items [NumberFilter](#numberfilter)
    * NetworkDirection
      * items [StringFilter](#stringfilter)
    * NetworkProtocol
      * items [StringFilter](#stringfilter)
    * NetworkSourceDomain
      * items [StringFilter](#stringfilter)
    * NetworkSourceIpV4
      * items [IpFilter](#ipfilter)
    * NetworkSourceIpV6
      * items [IpFilter](#ipfilter)
    * NetworkSourceMac
      * items [StringFilter](#stringfilter)
    * NetworkSourcePort
      * items [NumberFilter](#numberfilter)
    * NoteText
      * items [StringFilter](#stringfilter)
    * NoteUpdatedAt
      * items [DateFilter](#datefilter)
    * NoteUpdatedBy
      * items [StringFilter](#stringfilter)
    * ProcessLaunchedAt
      * items [DateFilter](#datefilter)
    * ProcessName
      * items [StringFilter](#stringfilter)
    * ProcessParentPid
      * items [NumberFilter](#numberfilter)
    * ProcessPath
      * items [StringFilter](#stringfilter)
    * ProcessPid
      * items [NumberFilter](#numberfilter)
    * ProcessTerminatedAt
      * items [DateFilter](#datefilter)
    * ProductArn
      * items [StringFilter](#stringfilter)
    * ProductFields
      * items [MapFilter](#mapfilter)
    * ProductName
      * items [StringFilter](#stringfilter)
    * RecommendationText
      * items [StringFilter](#stringfilter)
    * RecordState
      * items [StringFilter](#stringfilter)
    * RelatedFindingsId
      * items [StringFilter](#stringfilter)
    * RelatedFindingsProductArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIamInstanceProfileArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceImageId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIpV4Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceIpV6Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceKeyName
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsEc2InstanceSubnetId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceType
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceVpcId
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyCreatedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsIamAccessKeyStatus
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyUserName
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerId
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerName
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageId
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageName
      * items [StringFilter](#stringfilter)
    * ResourceContainerLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceContainerName
      * items [StringFilter](#stringfilter)
    * ResourceDetailsOther
      * items [MapFilter](#mapfilter)
    * ResourceId
      * items [StringFilter](#stringfilter)
    * ResourcePartition
      * items [StringFilter](#stringfilter)
    * ResourceRegion
      * items [StringFilter](#stringfilter)
    * ResourceTags
      * items [MapFilter](#mapfilter)
    * ResourceType
      * items [StringFilter](#stringfilter)
    * SeverityLabel
      * items [StringFilter](#stringfilter)
    * SeverityNormalized
      * items [NumberFilter](#numberfilter)
    * SeverityProduct
      * items [NumberFilter](#numberfilter)
    * SourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorCategory
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorLastObservedAt
      * items [DateFilter](#datefilter)
    * ThreatIntelIndicatorSource
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorSourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorType
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorValue
      * items [StringFilter](#stringfilter)
    * Title
      * items [StringFilter](#stringfilter)
    * Type
      * items [StringFilter](#stringfilter)
    * UpdatedAt
      * items [DateFilter](#datefilter)
    * UserDefinedFields
      * items [MapFilter](#mapfilter)
    * VerificationState
      * items [StringFilter](#stringfilter)
    * WorkflowState
      * items [StringFilter](#stringfilter)
    * WorkflowStatus
      * items [StringFilter](#stringfilter)
  * Note `object`: The updated note.
    * Text
    * UpdatedBy
  * RecordState `string` (values: ACTIVE, ARCHIVED): The updated record state for the finding.

#### Output
* output [UpdateFindingsResponse](#updatefindingsresponse)

### GetFindings



```js
amazonaws_securityhub.GetFindings({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters `object`: <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
    * AwsAccountId
      * items [StringFilter](#stringfilter)
    * CompanyName
      * items [StringFilter](#stringfilter)
    * ComplianceStatus
      * items [StringFilter](#stringfilter)
    * Confidence
      * items [NumberFilter](#numberfilter)
    * CreatedAt
      * items [DateFilter](#datefilter)
    * Criticality
      * items [NumberFilter](#numberfilter)
    * Description
      * items [StringFilter](#stringfilter)
    * FirstObservedAt
      * items [DateFilter](#datefilter)
    * GeneratorId
      * items [StringFilter](#stringfilter)
    * Id
      * items [StringFilter](#stringfilter)
    * Keyword
      * items [KeywordFilter](#keywordfilter)
    * LastObservedAt
      * items [DateFilter](#datefilter)
    * MalwareName
      * items [StringFilter](#stringfilter)
    * MalwarePath
      * items [StringFilter](#stringfilter)
    * MalwareState
      * items [StringFilter](#stringfilter)
    * MalwareType
      * items [StringFilter](#stringfilter)
    * NetworkDestinationDomain
      * items [StringFilter](#stringfilter)
    * NetworkDestinationIpV4
      * items [IpFilter](#ipfilter)
    * NetworkDestinationIpV6
      * items [IpFilter](#ipfilter)
    * NetworkDestinationPort
      * items [NumberFilter](#numberfilter)
    * NetworkDirection
      * items [StringFilter](#stringfilter)
    * NetworkProtocol
      * items [StringFilter](#stringfilter)
    * NetworkSourceDomain
      * items [StringFilter](#stringfilter)
    * NetworkSourceIpV4
      * items [IpFilter](#ipfilter)
    * NetworkSourceIpV6
      * items [IpFilter](#ipfilter)
    * NetworkSourceMac
      * items [StringFilter](#stringfilter)
    * NetworkSourcePort
      * items [NumberFilter](#numberfilter)
    * NoteText
      * items [StringFilter](#stringfilter)
    * NoteUpdatedAt
      * items [DateFilter](#datefilter)
    * NoteUpdatedBy
      * items [StringFilter](#stringfilter)
    * ProcessLaunchedAt
      * items [DateFilter](#datefilter)
    * ProcessName
      * items [StringFilter](#stringfilter)
    * ProcessParentPid
      * items [NumberFilter](#numberfilter)
    * ProcessPath
      * items [StringFilter](#stringfilter)
    * ProcessPid
      * items [NumberFilter](#numberfilter)
    * ProcessTerminatedAt
      * items [DateFilter](#datefilter)
    * ProductArn
      * items [StringFilter](#stringfilter)
    * ProductFields
      * items [MapFilter](#mapfilter)
    * ProductName
      * items [StringFilter](#stringfilter)
    * RecommendationText
      * items [StringFilter](#stringfilter)
    * RecordState
      * items [StringFilter](#stringfilter)
    * RelatedFindingsId
      * items [StringFilter](#stringfilter)
    * RelatedFindingsProductArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIamInstanceProfileArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceImageId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIpV4Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceIpV6Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceKeyName
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsEc2InstanceSubnetId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceType
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceVpcId
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyCreatedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsIamAccessKeyStatus
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyUserName
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerId
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerName
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageId
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageName
      * items [StringFilter](#stringfilter)
    * ResourceContainerLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceContainerName
      * items [StringFilter](#stringfilter)
    * ResourceDetailsOther
      * items [MapFilter](#mapfilter)
    * ResourceId
      * items [StringFilter](#stringfilter)
    * ResourcePartition
      * items [StringFilter](#stringfilter)
    * ResourceRegion
      * items [StringFilter](#stringfilter)
    * ResourceTags
      * items [MapFilter](#mapfilter)
    * ResourceType
      * items [StringFilter](#stringfilter)
    * SeverityLabel
      * items [StringFilter](#stringfilter)
    * SeverityNormalized
      * items [NumberFilter](#numberfilter)
    * SeverityProduct
      * items [NumberFilter](#numberfilter)
    * SourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorCategory
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorLastObservedAt
      * items [DateFilter](#datefilter)
    * ThreatIntelIndicatorSource
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorSourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorType
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorValue
      * items [StringFilter](#stringfilter)
    * Title
      * items [StringFilter](#stringfilter)
    * Type
      * items [StringFilter](#stringfilter)
    * UpdatedAt
      * items [DateFilter](#datefilter)
    * UserDefinedFields
      * items [MapFilter](#mapfilter)
    * VerificationState
      * items [StringFilter](#stringfilter)
    * WorkflowState
      * items [StringFilter](#stringfilter)
    * WorkflowStatus
      * items [StringFilter](#stringfilter)
  * MaxResults `integer`: The maximum number of findings to return.
  * NextToken `string`: <p>The token that is required for pagination. On your first call to the <code>GetFindings</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
  * SortCriteria `array`: The finding attributes used to sort the list of returned findings.
    * items [SortCriterion](#sortcriterion)

#### Output
* output [GetFindingsResponse](#getfindingsresponse)

### BatchUpdateFindings



```js
amazonaws_securityhub.BatchUpdateFindings({
  "FindingIdentifiers": []
}, context)
```

#### Input
* input `object`
  * Confidence `integer`: <p>The updated value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.</p> <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.</p>
  * Criticality `integer`: <p>The updated value for the level of importance assigned to the resources associated with the findings.</p> <p>A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources. </p>
  * FindingIdentifiers **required** `array`: <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update up to 100 findings at a time.</p> <p>For each finding, the list provides the finding identifier and the ARN of the finding provider.</p>
    * items [AwsSecurityFindingIdentifier](#awssecurityfindingidentifier)
  * Note `object`: The updated note.
    * Text
    * UpdatedBy
  * RelatedFindings `array`: A list of findings that are related to the updated findings.
    * items [RelatedFinding](#relatedfinding)
  * Severity `object`: Updates to the severity information for a finding.
    * Label
    * Normalized
    * Product
  * Types `array`: <p>One or more finding types in the format of namespace/category/classifier that classify a finding.</p> <p>Valid namespace values are as follows.</p> <ul> <li> <p>Software and Configuration Checks</p> </li> <li> <p>TTPs</p> </li> <li> <p>Effects</p> </li> <li> <p>Unusual Behaviors</p> </li> <li> <p>Sensitive Data Identifications </p> </li> </ul>
    * items [NonEmptyString](#nonemptystring)
  * UserDefinedFields `object`: A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding.
  * VerificationState `string` (values: UNKNOWN, TRUE_POSITIVE, FALSE_POSITIVE, BENIGN_POSITIVE): <p>Indicates the veracity of a finding.</p> <p>The available values for <code>VerificationState</code> are as follows.</p> <ul> <li> <p> <code>UNKNOWN</code> – The default disposition of a security finding</p> </li> <li> <p> <code>TRUE_POSITIVE</code> – The security finding is confirmed</p> </li> <li> <p> <code>FALSE_POSITIVE</code> – The security finding was determined to be a false alarm</p> </li> <li> <p> <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where the finding doesn't pose any threat, is expected, or both</p> </li> </ul>
  * Workflow `object`: Used to update information about the investigation into the finding.
    * Status

#### Output
* output [BatchUpdateFindingsResponse](#batchupdatefindingsresponse)

### BatchImportFindings



```js
amazonaws_securityhub.BatchImportFindings({
  "Findings": []
}, context)
```

#### Input
* input `object`
  * Findings **required** `array`: A list of findings to import. To successfully import a finding, it must follow the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">AWS Security Finding Format</a>. Maximum of 100 findings per request.
    * items [AwsSecurityFinding](#awssecurityfinding)

#### Output
* output [BatchImportFindingsResponse](#batchimportfindingsresponse)

### CreateInsight



```js
amazonaws_securityhub.CreateInsight({
  "Name": "",
  "Filters": {},
  "GroupByAttribute": ""
}, context)
```

#### Input
* input `object`
  * Filters **required** `object`: <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
    * AwsAccountId
      * items [StringFilter](#stringfilter)
    * CompanyName
      * items [StringFilter](#stringfilter)
    * ComplianceStatus
      * items [StringFilter](#stringfilter)
    * Confidence
      * items [NumberFilter](#numberfilter)
    * CreatedAt
      * items [DateFilter](#datefilter)
    * Criticality
      * items [NumberFilter](#numberfilter)
    * Description
      * items [StringFilter](#stringfilter)
    * FirstObservedAt
      * items [DateFilter](#datefilter)
    * GeneratorId
      * items [StringFilter](#stringfilter)
    * Id
      * items [StringFilter](#stringfilter)
    * Keyword
      * items [KeywordFilter](#keywordfilter)
    * LastObservedAt
      * items [DateFilter](#datefilter)
    * MalwareName
      * items [StringFilter](#stringfilter)
    * MalwarePath
      * items [StringFilter](#stringfilter)
    * MalwareState
      * items [StringFilter](#stringfilter)
    * MalwareType
      * items [StringFilter](#stringfilter)
    * NetworkDestinationDomain
      * items [StringFilter](#stringfilter)
    * NetworkDestinationIpV4
      * items [IpFilter](#ipfilter)
    * NetworkDestinationIpV6
      * items [IpFilter](#ipfilter)
    * NetworkDestinationPort
      * items [NumberFilter](#numberfilter)
    * NetworkDirection
      * items [StringFilter](#stringfilter)
    * NetworkProtocol
      * items [StringFilter](#stringfilter)
    * NetworkSourceDomain
      * items [StringFilter](#stringfilter)
    * NetworkSourceIpV4
      * items [IpFilter](#ipfilter)
    * NetworkSourceIpV6
      * items [IpFilter](#ipfilter)
    * NetworkSourceMac
      * items [StringFilter](#stringfilter)
    * NetworkSourcePort
      * items [NumberFilter](#numberfilter)
    * NoteText
      * items [StringFilter](#stringfilter)
    * NoteUpdatedAt
      * items [DateFilter](#datefilter)
    * NoteUpdatedBy
      * items [StringFilter](#stringfilter)
    * ProcessLaunchedAt
      * items [DateFilter](#datefilter)
    * ProcessName
      * items [StringFilter](#stringfilter)
    * ProcessParentPid
      * items [NumberFilter](#numberfilter)
    * ProcessPath
      * items [StringFilter](#stringfilter)
    * ProcessPid
      * items [NumberFilter](#numberfilter)
    * ProcessTerminatedAt
      * items [DateFilter](#datefilter)
    * ProductArn
      * items [StringFilter](#stringfilter)
    * ProductFields
      * items [MapFilter](#mapfilter)
    * ProductName
      * items [StringFilter](#stringfilter)
    * RecommendationText
      * items [StringFilter](#stringfilter)
    * RecordState
      * items [StringFilter](#stringfilter)
    * RelatedFindingsId
      * items [StringFilter](#stringfilter)
    * RelatedFindingsProductArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIamInstanceProfileArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceImageId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIpV4Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceIpV6Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceKeyName
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsEc2InstanceSubnetId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceType
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceVpcId
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyCreatedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsIamAccessKeyStatus
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyUserName
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerId
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerName
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageId
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageName
      * items [StringFilter](#stringfilter)
    * ResourceContainerLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceContainerName
      * items [StringFilter](#stringfilter)
    * ResourceDetailsOther
      * items [MapFilter](#mapfilter)
    * ResourceId
      * items [StringFilter](#stringfilter)
    * ResourcePartition
      * items [StringFilter](#stringfilter)
    * ResourceRegion
      * items [StringFilter](#stringfilter)
    * ResourceTags
      * items [MapFilter](#mapfilter)
    * ResourceType
      * items [StringFilter](#stringfilter)
    * SeverityLabel
      * items [StringFilter](#stringfilter)
    * SeverityNormalized
      * items [NumberFilter](#numberfilter)
    * SeverityProduct
      * items [NumberFilter](#numberfilter)
    * SourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorCategory
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorLastObservedAt
      * items [DateFilter](#datefilter)
    * ThreatIntelIndicatorSource
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorSourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorType
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorValue
      * items [StringFilter](#stringfilter)
    * Title
      * items [StringFilter](#stringfilter)
    * Type
      * items [StringFilter](#stringfilter)
    * UpdatedAt
      * items [DateFilter](#datefilter)
    * UserDefinedFields
      * items [MapFilter](#mapfilter)
    * VerificationState
      * items [StringFilter](#stringfilter)
    * WorkflowState
      * items [StringFilter](#stringfilter)
    * WorkflowStatus
      * items [StringFilter](#stringfilter)
  * GroupByAttribute **required** `string`: The attribute used to group the findings for the insight. The grouping attribute identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
  * Name **required** `string`: The name of the custom insight to create.

#### Output
* output [CreateInsightResponse](#createinsightresponse)

### GetInsights



```js
amazonaws_securityhub.GetInsights({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * InsightArns `array`: The ARNs of the insights to describe. If you do not provide any insight ARNs, then <code>GetInsights</code> returns all of your custom insights. It does not return any managed insights.
    * items [NonEmptyString](#nonemptystring)
  * MaxResults `integer`: The maximum number of items to return in the response.
  * NextToken `string`: <p>The token that is required for pagination. On your first call to the <code>GetInsights</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>

#### Output
* output [GetInsightsResponse](#getinsightsresponse)

### GetInsightResults



```js
amazonaws_securityhub.GetInsightResults({
  "InsightArn": ""
}, context)
```

#### Input
* input `object`
  * InsightArn **required** `string`

#### Output
* output [GetInsightResultsResponse](#getinsightresultsresponse)

### DeleteInsight



```js
amazonaws_securityhub.DeleteInsight({
  "InsightArn": ""
}, context)
```

#### Input
* input `object`
  * InsightArn **required** `string`

#### Output
* output [DeleteInsightResponse](#deleteinsightresponse)

### UpdateInsight



```js
amazonaws_securityhub.UpdateInsight({
  "InsightArn": ""
}, context)
```

#### Input
* input `object`
  * InsightArn **required** `string`
  * Filters `object`: <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
    * AwsAccountId
      * items [StringFilter](#stringfilter)
    * CompanyName
      * items [StringFilter](#stringfilter)
    * ComplianceStatus
      * items [StringFilter](#stringfilter)
    * Confidence
      * items [NumberFilter](#numberfilter)
    * CreatedAt
      * items [DateFilter](#datefilter)
    * Criticality
      * items [NumberFilter](#numberfilter)
    * Description
      * items [StringFilter](#stringfilter)
    * FirstObservedAt
      * items [DateFilter](#datefilter)
    * GeneratorId
      * items [StringFilter](#stringfilter)
    * Id
      * items [StringFilter](#stringfilter)
    * Keyword
      * items [KeywordFilter](#keywordfilter)
    * LastObservedAt
      * items [DateFilter](#datefilter)
    * MalwareName
      * items [StringFilter](#stringfilter)
    * MalwarePath
      * items [StringFilter](#stringfilter)
    * MalwareState
      * items [StringFilter](#stringfilter)
    * MalwareType
      * items [StringFilter](#stringfilter)
    * NetworkDestinationDomain
      * items [StringFilter](#stringfilter)
    * NetworkDestinationIpV4
      * items [IpFilter](#ipfilter)
    * NetworkDestinationIpV6
      * items [IpFilter](#ipfilter)
    * NetworkDestinationPort
      * items [NumberFilter](#numberfilter)
    * NetworkDirection
      * items [StringFilter](#stringfilter)
    * NetworkProtocol
      * items [StringFilter](#stringfilter)
    * NetworkSourceDomain
      * items [StringFilter](#stringfilter)
    * NetworkSourceIpV4
      * items [IpFilter](#ipfilter)
    * NetworkSourceIpV6
      * items [IpFilter](#ipfilter)
    * NetworkSourceMac
      * items [StringFilter](#stringfilter)
    * NetworkSourcePort
      * items [NumberFilter](#numberfilter)
    * NoteText
      * items [StringFilter](#stringfilter)
    * NoteUpdatedAt
      * items [DateFilter](#datefilter)
    * NoteUpdatedBy
      * items [StringFilter](#stringfilter)
    * ProcessLaunchedAt
      * items [DateFilter](#datefilter)
    * ProcessName
      * items [StringFilter](#stringfilter)
    * ProcessParentPid
      * items [NumberFilter](#numberfilter)
    * ProcessPath
      * items [StringFilter](#stringfilter)
    * ProcessPid
      * items [NumberFilter](#numberfilter)
    * ProcessTerminatedAt
      * items [DateFilter](#datefilter)
    * ProductArn
      * items [StringFilter](#stringfilter)
    * ProductFields
      * items [MapFilter](#mapfilter)
    * ProductName
      * items [StringFilter](#stringfilter)
    * RecommendationText
      * items [StringFilter](#stringfilter)
    * RecordState
      * items [StringFilter](#stringfilter)
    * RelatedFindingsId
      * items [StringFilter](#stringfilter)
    * RelatedFindingsProductArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIamInstanceProfileArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceImageId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIpV4Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceIpV6Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceKeyName
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsEc2InstanceSubnetId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceType
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceVpcId
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyCreatedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsIamAccessKeyStatus
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyUserName
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerId
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerName
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageId
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageName
      * items [StringFilter](#stringfilter)
    * ResourceContainerLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceContainerName
      * items [StringFilter](#stringfilter)
    * ResourceDetailsOther
      * items [MapFilter](#mapfilter)
    * ResourceId
      * items [StringFilter](#stringfilter)
    * ResourcePartition
      * items [StringFilter](#stringfilter)
    * ResourceRegion
      * items [StringFilter](#stringfilter)
    * ResourceTags
      * items [MapFilter](#mapfilter)
    * ResourceType
      * items [StringFilter](#stringfilter)
    * SeverityLabel
      * items [StringFilter](#stringfilter)
    * SeverityNormalized
      * items [NumberFilter](#numberfilter)
    * SeverityProduct
      * items [NumberFilter](#numberfilter)
    * SourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorCategory
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorLastObservedAt
      * items [DateFilter](#datefilter)
    * ThreatIntelIndicatorSource
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorSourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorType
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorValue
      * items [StringFilter](#stringfilter)
    * Title
      * items [StringFilter](#stringfilter)
    * Type
      * items [StringFilter](#stringfilter)
    * UpdatedAt
      * items [DateFilter](#datefilter)
    * UserDefinedFields
      * items [MapFilter](#mapfilter)
    * VerificationState
      * items [StringFilter](#stringfilter)
    * WorkflowState
      * items [StringFilter](#stringfilter)
    * WorkflowStatus
      * items [StringFilter](#stringfilter)
  * GroupByAttribute `string`: The updated <code>GroupBy</code> attribute that defines this insight.
  * Name `string`: The updated name for the insight.

#### Output
* output [UpdateInsightResponse](#updateinsightresponse)

### ListInvitations



```js
amazonaws_securityhub.ListInvitations({}, context)
```

#### Input
* input `object`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListInvitationsResponse](#listinvitationsresponse)

### GetInvitationsCount



```js
amazonaws_securityhub.GetInvitationsCount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetInvitationsCountResponse](#getinvitationscountresponse)

### DeclineInvitations



```js
amazonaws_securityhub.DeclineInvitations({
  "AccountIds": []
}, context)
```

#### Input
* input `object`
  * AccountIds **required** `array`: The list of account IDs for the accounts from which to decline the invitations to Security Hub.
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [DeclineInvitationsResponse](#declineinvitationsresponse)

### DeleteInvitations



```js
amazonaws_securityhub.DeleteInvitations({
  "AccountIds": []
}, context)
```

#### Input
* input `object`
  * AccountIds **required** `array`: The list of the account IDs that sent the invitations to delete.
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [DeleteInvitationsResponse](#deleteinvitationsresponse)

### GetMasterAccount



```js
amazonaws_securityhub.GetMasterAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetMasterAccountResponse](#getmasteraccountresponse)

### AcceptInvitation



```js
amazonaws_securityhub.AcceptInvitation({
  "MasterId": "",
  "InvitationId": ""
}, context)
```

#### Input
* input `object`
  * InvitationId **required** `string`: The ID of the invitation sent from the Security Hub master account.
  * MasterId **required** `string`: The account ID of the Security Hub master account that sent the invitation.

#### Output
* output [AcceptInvitationResponse](#acceptinvitationresponse)

### DisassociateFromMasterAccount



```js
amazonaws_securityhub.DisassociateFromMasterAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [DisassociateFromMasterAccountResponse](#disassociatefrommasteraccountresponse)

### ListMembers



```js
amazonaws_securityhub.ListMembers({}, context)
```

#### Input
* input `object`
  * OnlyAssociated `boolean`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListMembersResponse](#listmembersresponse)

### CreateMembers



```js
amazonaws_securityhub.CreateMembers({
  "AccountDetails": []
}, context)
```

#### Input
* input `object`
  * AccountDetails **required** `array`: The list of accounts to associate with the Security Hub master account. For each account, the list includes the account ID and optionally the email address.
    * items [AccountDetails](#accountdetails)

#### Output
* output [CreateMembersResponse](#createmembersresponse)

### DeleteMembers



```js
amazonaws_securityhub.DeleteMembers({
  "AccountIds": []
}, context)
```

#### Input
* input `object`
  * AccountIds **required** `array`: The list of account IDs for the member accounts to delete.
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [DeleteMembersResponse](#deletemembersresponse)

### DisassociateMembers



```js
amazonaws_securityhub.DisassociateMembers({
  "AccountIds": []
}, context)
```

#### Input
* input `object`
  * AccountIds **required** `array`: The account IDs of the member accounts to disassociate from the master account.
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [DisassociateMembersResponse](#disassociatemembersresponse)

### GetMembers



```js
amazonaws_securityhub.GetMembers({
  "AccountIds": []
}, context)
```

#### Input
* input `object`
  * AccountIds **required** `array`: The list of account IDs for the Security Hub member accounts to return the details for. 
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [GetMembersResponse](#getmembersresponse)

### InviteMembers



```js
amazonaws_securityhub.InviteMembers({
  "AccountIds": []
}, context)
```

#### Input
* input `object`
  * AccountIds **required** `array`: The list of account IDs of the AWS accounts to invite to Security Hub as members. 
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [InviteMembersResponse](#invitemembersresponse)

### ListOrganizationAdminAccounts



```js
amazonaws_securityhub.ListOrganizationAdminAccounts({}, context)
```

#### Input
* input `object`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListOrganizationAdminAccountsResponse](#listorganizationadminaccountsresponse)

### DisableOrganizationAdminAccount



```js
amazonaws_securityhub.DisableOrganizationAdminAccount({
  "AdminAccountId": ""
}, context)
```

#### Input
* input `object`
  * AdminAccountId **required** `string`: The AWS account identifier of the Security Hub administrator account.

#### Output
* output [DisableOrganizationAdminAccountResponse](#disableorganizationadminaccountresponse)

### EnableOrganizationAdminAccount



```js
amazonaws_securityhub.EnableOrganizationAdminAccount({
  "AdminAccountId": ""
}, context)
```

#### Input
* input `object`
  * AdminAccountId **required** `string`: The AWS account identifier of the account to designate as the Security Hub administrator account.

#### Output
* output [EnableOrganizationAdminAccountResponse](#enableorganizationadminaccountresponse)

### DescribeOrganizationConfiguration



```js
amazonaws_securityhub.DescribeOrganizationConfiguration({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeOrganizationConfigurationResponse](#describeorganizationconfigurationresponse)

### UpdateOrganizationConfiguration



```js
amazonaws_securityhub.UpdateOrganizationConfiguration({
  "AutoEnable": true
}, context)
```

#### Input
* input `object`
  * AutoEnable **required** `boolean`: <p>Whether to automatically enable Security Hub for new accounts in the organization.</p> <p>By default, this is <code>false</code>, and new accounts are not added automatically.</p> <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>

#### Output
* output [UpdateOrganizationConfigurationResponse](#updateorganizationconfigurationresponse)

### ListEnabledProductsForImport



```js
amazonaws_securityhub.ListEnabledProductsForImport({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListEnabledProductsForImportResponse](#listenabledproductsforimportresponse)

### EnableImportFindingsForProduct



```js
amazonaws_securityhub.EnableImportFindingsForProduct({
  "ProductArn": ""
}, context)
```

#### Input
* input `object`
  * ProductArn **required** `string`: The ARN of the product to enable the integration for.

#### Output
* output [EnableImportFindingsForProductResponse](#enableimportfindingsforproductresponse)

### DisableImportFindingsForProduct



```js
amazonaws_securityhub.DisableImportFindingsForProduct({
  "ProductSubscriptionArn": ""
}, context)
```

#### Input
* input `object`
  * ProductSubscriptionArn **required** `string`

#### Output
* output [DisableImportFindingsForProductResponse](#disableimportfindingsforproductresponse)

### DescribeProducts



```js
amazonaws_securityhub.DescribeProducts({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeProductsResponse](#describeproductsresponse)

### DescribeStandards



```js
amazonaws_securityhub.DescribeStandards({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeStandardsResponse](#describestandardsresponse)

### UpdateStandardsControl



```js
amazonaws_securityhub.UpdateStandardsControl({
  "StandardsControlArn": ""
}, context)
```

#### Input
* input `object`
  * StandardsControlArn **required** `string`
  * ControlStatus `string` (values: ENABLED, DISABLED): The updated status of the security standard control.
  * DisabledReason `string`: A description of the reason why you are disabling a security standard control. If you are disabling a control, then this is required.

#### Output
* output [UpdateStandardsControlResponse](#updatestandardscontrolresponse)

### DescribeStandardsControls



```js
amazonaws_securityhub.DescribeStandardsControls({
  "StandardsSubscriptionArn": ""
}, context)
```

#### Input
* input `object`
  * StandardsSubscriptionArn **required** `string`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeStandardsControlsResponse](#describestandardscontrolsresponse)

### BatchDisableStandards



```js
amazonaws_securityhub.BatchDisableStandards({
  "StandardsSubscriptionArns": []
}, context)
```

#### Input
* input `object`
  * StandardsSubscriptionArns **required** `array`: The ARNs of the standards subscriptions to disable.
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [BatchDisableStandardsResponse](#batchdisablestandardsresponse)

### GetEnabledStandards



```js
amazonaws_securityhub.GetEnabledStandards({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to return in the response.
  * NextToken `string`: <p>The token that is required for pagination. On your first call to the <code>GetEnabledStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
  * StandardsSubscriptionArns `array`: The list of the standards subscription ARNs for the standards to retrieve.
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [GetEnabledStandardsResponse](#getenabledstandardsresponse)

### BatchEnableStandards



```js
amazonaws_securityhub.BatchEnableStandards({
  "StandardsSubscriptionRequests": []
}, context)
```

#### Input
* input `object`
  * StandardsSubscriptionRequests **required** `array`: The list of standards checks to enable.
    * items [StandardsSubscriptionRequest](#standardssubscriptionrequest)

#### Output
* output [BatchEnableStandardsResponse](#batchenablestandardsresponse)

### ListTagsForResource



```js
amazonaws_securityhub.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_securityhub.TagResource({
  "ResourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * Tags **required** `object`: The tags to add to the resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_securityhub.UntagResource({
  "ResourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AcceptInvitationRequest
* AcceptInvitationRequest `object`
  * InvitationId **required**
  * MasterId **required**

### AcceptInvitationResponse
* AcceptInvitationResponse `object`

### AccessDeniedException


### AccountDetails
* AccountDetails `object`: The details of an AWS account.
  * AccountId **required**
  * Email

### AccountDetailsList
* AccountDetailsList `array`
  * items [AccountDetails](#accountdetails)

### AccountId
* AccountId `string`

### AccountIdList
* AccountIdList `array`
  * items [NonEmptyString](#nonemptystring)

### ActionTarget
* ActionTarget `object`: An <code>ActionTarget</code> object.
  * ActionTargetArn **required**
  * Description **required**
  * Name **required**

### ActionTargetList
* ActionTargetList `array`
  * items [ActionTarget](#actiontarget)

### AdminAccount
* AdminAccount `object`: Represents a Security Hub administrator account designated by an organization management account.
  * AccountId
  * Status

### AdminAccounts
* AdminAccounts `array`
  * items [AdminAccount](#adminaccount)

### AdminStatus
* AdminStatus `string` (values: ENABLED, DISABLE_IN_PROGRESS)

### AdminsMaxResults
* AdminsMaxResults `integer`

### ArnList
* ArnList `array`
  * items [NonEmptyString](#nonemptystring)

### AvailabilityZone
* AvailabilityZone `object`: Information about an Availability Zone.
  * SubnetId
  * ZoneName

### AvailabilityZones
* AvailabilityZones `array`
  * items [AvailabilityZone](#availabilityzone)

### AwsApiGatewayAccessLogSettings
* AwsApiGatewayAccessLogSettings `object`: Contains information about settings for logging access for the stage.
  * DestinationArn
  * Format

### AwsApiGatewayCanarySettings
* AwsApiGatewayCanarySettings `object`: Contains information about settings for canary deployment in the stage.
  * DeploymentId
  * PercentTraffic
  * StageVariableOverrides
  * UseStageCache

### AwsApiGatewayEndpointConfiguration
* AwsApiGatewayEndpointConfiguration `object`: Contains information about the endpoints for the API.
  * Types
    * items [NonEmptyString](#nonemptystring)

### AwsApiGatewayMethodSettings
* AwsApiGatewayMethodSettings `object`: Defines settings for a method for the stage.
  * CacheDataEncrypted
  * CacheTtlInSeconds
  * CachingEnabled
  * DataTraceEnabled
  * HttpMethod
  * LoggingLevel
  * MetricsEnabled
  * RequireAuthorizationForCacheControl
  * ResourcePath
  * ThrottlingBurstLimit
  * ThrottlingRateLimit
  * UnauthorizedCacheControlHeaderStrategy

### AwsApiGatewayMethodSettingsList
* AwsApiGatewayMethodSettingsList `array`
  * items [AwsApiGatewayMethodSettings](#awsapigatewaymethodsettings)

### AwsApiGatewayRestApiDetails
* AwsApiGatewayRestApiDetails `object`: contains information about a REST API in version 1 of Amazon API Gateway.
  * ApiKeySource
  * BinaryMediaTypes
    * items [NonEmptyString](#nonemptystring)
  * CreatedDate
  * Description
  * EndpointConfiguration
    * Types
      * items [NonEmptyString](#nonemptystring)
  * Id
  * MinimumCompressionSize
  * Name
  * Version

### AwsApiGatewayStageDetails
* AwsApiGatewayStageDetails `object`: Provides information about a version 1 Amazon API Gateway stage.
  * AccessLogSettings
    * DestinationArn
    * Format
  * CacheClusterEnabled
  * CacheClusterSize
  * CacheClusterStatus
  * CanarySettings
    * DeploymentId
    * PercentTraffic
    * StageVariableOverrides
    * UseStageCache
  * ClientCertificateId
  * CreatedDate
  * DeploymentId
  * Description
  * DocumentationVersion
  * LastUpdatedDate
  * MethodSettings
    * items [AwsApiGatewayMethodSettings](#awsapigatewaymethodsettings)
  * StageName
  * TracingEnabled
  * Variables
  * WebAclArn

### AwsApiGatewayV2ApiDetails
* AwsApiGatewayV2ApiDetails `object`: Contains information about a version 2 API in Amazon API Gateway.
  * ApiEndpoint
  * ApiId
  * ApiKeySelectionExpression
  * CorsConfiguration
    * AllowCredentials
    * AllowHeaders
      * items [NonEmptyString](#nonemptystring)
    * AllowMethods
      * items [NonEmptyString](#nonemptystring)
    * AllowOrigins
      * items [NonEmptyString](#nonemptystring)
    * ExposeHeaders
      * items [NonEmptyString](#nonemptystring)
    * MaxAge
  * CreatedDate
  * Description
  * Name
  * ProtocolType
  * RouteSelectionExpression
  * Version

### AwsApiGatewayV2RouteSettings
* AwsApiGatewayV2RouteSettings `object`: Contains route settings for a stage.
  * DataTraceEnabled
  * DetailedMetricsEnabled
  * LoggingLevel
  * ThrottlingBurstLimit
  * ThrottlingRateLimit

### AwsApiGatewayV2StageDetails
* AwsApiGatewayV2StageDetails `object`: Contains information about a version 2 stage for Amazon API Gateway.
  * AccessLogSettings
    * DestinationArn
    * Format
  * ApiGatewayManaged
  * AutoDeploy
  * CreatedDate
  * DefaultRouteSettings
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * DeploymentId
  * Description
  * LastDeploymentStatusMessage
  * LastUpdatedDate
  * RouteSettings
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * StageName
  * StageVariables

### AwsAutoScalingAutoScalingGroupDetails
* AwsAutoScalingAutoScalingGroupDetails `object`: Provides details about an auto scaling group.
  * CreatedTime
  * HealthCheckGracePeriod
  * HealthCheckType
  * LaunchConfigurationName
  * LoadBalancerNames
    * items [NonEmptyString](#nonemptystring)

### AwsCertificateManagerCertificateDetails
* AwsCertificateManagerCertificateDetails `object`: Provides details about an AWS Certificate Manager certificate.
  * CertificateAuthorityArn
  * CreatedAt
  * DomainName
  * DomainValidationOptions
    * items [AwsCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)
  * ExtendedKeyUsages
    * items [AwsCertificateManagerCertificateExtendedKeyUsage](#awscertificatemanagercertificateextendedkeyusage)
  * FailureReason
  * ImportedAt
  * InUseBy
    * items [NonEmptyString](#nonemptystring)
  * IssuedAt
  * Issuer
  * KeyAlgorithm
  * KeyUsages
    * items [AwsCertificateManagerCertificateKeyUsage](#awscertificatemanagercertificatekeyusage)
  * NotAfter
  * NotBefore
  * Options
    * CertificateTransparencyLoggingPreference
  * RenewalEligibility
  * RenewalSummary
    * DomainValidationOptions
      * items [AwsCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)
    * RenewalStatus
    * RenewalStatusReason
    * UpdatedAt
  * Serial
  * SignatureAlgorithm
  * Status
  * Subject
  * SubjectAlternativeNames
    * items [NonEmptyString](#nonemptystring)
  * Type

### AwsCertificateManagerCertificateDomainValidationOption
* AwsCertificateManagerCertificateDomainValidationOption `object`: <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to AWS Certificate Manager managed renewal</p> </li> </ul>
  * DomainName
  * ResourceRecord
    * Name
    * Type
    * Value
  * ValidationDomain
  * ValidationEmails
    * items [NonEmptyString](#nonemptystring)
  * ValidationMethod
  * ValidationStatus

### AwsCertificateManagerCertificateDomainValidationOptions
* AwsCertificateManagerCertificateDomainValidationOptions `array`
  * items [AwsCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)

### AwsCertificateManagerCertificateExtendedKeyUsage
* AwsCertificateManagerCertificateExtendedKeyUsage `object`: Contains information about an extended key usage X.509 v3 extension object.
  * Name
  * OId

### AwsCertificateManagerCertificateExtendedKeyUsages
* AwsCertificateManagerCertificateExtendedKeyUsages `array`
  * items [AwsCertificateManagerCertificateExtendedKeyUsage](#awscertificatemanagercertificateextendedkeyusage)

### AwsCertificateManagerCertificateKeyUsage
* AwsCertificateManagerCertificateKeyUsage `object`: Contains information about a key usage X.509 v3 extension object.
  * Name

### AwsCertificateManagerCertificateKeyUsages
* AwsCertificateManagerCertificateKeyUsages `array`
  * items [AwsCertificateManagerCertificateKeyUsage](#awscertificatemanagercertificatekeyusage)

### AwsCertificateManagerCertificateOptions
* AwsCertificateManagerCertificateOptions `object`: Contains other options for the certificate.
  * CertificateTransparencyLoggingPreference

### AwsCertificateManagerCertificateRenewalSummary
* AwsCertificateManagerCertificateRenewalSummary `object`: Contains information about the AWS Certificate Manager managed renewal for an <code>AMAZON_ISSUED</code> certificate.
  * DomainValidationOptions
    * items [AwsCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)
  * RenewalStatus
  * RenewalStatusReason
  * UpdatedAt

### AwsCertificateManagerCertificateResourceRecord
* AwsCertificateManagerCertificateResourceRecord `object`: Provides details about the CNAME record that is added to the DNS database for domain validation.
  * Name
  * Type
  * Value

### AwsCloudFrontDistributionCacheBehavior
* AwsCloudFrontDistributionCacheBehavior `object`: Information about a cache behavior for the distribution.
  * ViewerProtocolPolicy

### AwsCloudFrontDistributionCacheBehaviors
* AwsCloudFrontDistributionCacheBehaviors `object`: Provides information about caching for the distribution.
  * Items
    * items [AwsCloudFrontDistributionCacheBehavior](#awscloudfrontdistributioncachebehavior)

### AwsCloudFrontDistributionCacheBehaviorsItemList
* AwsCloudFrontDistributionCacheBehaviorsItemList `array`
  * items [AwsCloudFrontDistributionCacheBehavior](#awscloudfrontdistributioncachebehavior)

### AwsCloudFrontDistributionDefaultCacheBehavior
* AwsCloudFrontDistributionDefaultCacheBehavior `object`: Contains information about the default cache configuration for the distribution.
  * ViewerProtocolPolicy

### AwsCloudFrontDistributionDetails
* AwsCloudFrontDistributionDetails `object`: A distribution configuration.
  * CacheBehaviors
    * Items
      * items [AwsCloudFrontDistributionCacheBehavior](#awscloudfrontdistributioncachebehavior)
  * DefaultCacheBehavior
    * ViewerProtocolPolicy
  * DefaultRootObject
  * DomainName
  * ETag
  * LastModifiedTime
  * Logging
    * Bucket
    * Enabled
    * IncludeCookies
    * Prefix
  * OriginGroups
    * Items
      * items [AwsCloudFrontDistributionOriginGroup](#awscloudfrontdistributionorigingroup)
  * Origins
    * Items
      * items [AwsCloudFrontDistributionOriginItem](#awscloudfrontdistributionoriginitem)
  * Status
  * WebAclId

### AwsCloudFrontDistributionLogging
* AwsCloudFrontDistributionLogging `object`: A complex type that controls whether access logs are written for the distribution.
  * Bucket
  * Enabled
  * IncludeCookies
  * Prefix

### AwsCloudFrontDistributionOriginGroup
* AwsCloudFrontDistributionOriginGroup `object`: Information about an origin group for the distribution.
  * FailoverCriteria
    * StatusCodes
      * Items
        * items [Integer](#integer)
      * Quantity

### AwsCloudFrontDistributionOriginGroupFailover
* AwsCloudFrontDistributionOriginGroupFailover `object`: Provides information about when an origin group fails over.
  * StatusCodes
    * Items
      * items [Integer](#integer)
    * Quantity

### AwsCloudFrontDistributionOriginGroupFailoverStatusCodes
* AwsCloudFrontDistributionOriginGroupFailoverStatusCodes `object`: The status codes that cause an origin group to fail over.
  * Items
    * items [Integer](#integer)
  * Quantity

### AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList
* AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList `array`
  * items [Integer](#integer)

### AwsCloudFrontDistributionOriginGroups
* AwsCloudFrontDistributionOriginGroups `object`: Provides information about origin groups that are associated with the distribution.
  * Items
    * items [AwsCloudFrontDistributionOriginGroup](#awscloudfrontdistributionorigingroup)

### AwsCloudFrontDistributionOriginGroupsItemList
* AwsCloudFrontDistributionOriginGroupsItemList `array`
  * items [AwsCloudFrontDistributionOriginGroup](#awscloudfrontdistributionorigingroup)

### AwsCloudFrontDistributionOriginItem
* AwsCloudFrontDistributionOriginItem `object`: A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), Amazon Elemental MediaStore, or other server from which CloudFront gets your files.
  * DomainName
  * Id
  * OriginPath
  * S3OriginConfig
    * OriginAccessIdentity

### AwsCloudFrontDistributionOriginItemList
* AwsCloudFrontDistributionOriginItemList `array`
  * items [AwsCloudFrontDistributionOriginItem](#awscloudfrontdistributionoriginitem)

### AwsCloudFrontDistributionOriginS3OriginConfig
* AwsCloudFrontDistributionOriginS3OriginConfig `object`: Information about an origin that is an S3 bucket that is not configured with static website hosting.
  * OriginAccessIdentity

### AwsCloudFrontDistributionOrigins
* AwsCloudFrontDistributionOrigins `object`: A complex type that contains information about origins and origin groups for this distribution.
  * Items
    * items [AwsCloudFrontDistributionOriginItem](#awscloudfrontdistributionoriginitem)

### AwsCloudTrailTrailDetails
* AwsCloudTrailTrailDetails `object`: Provides details about a CloudTrail trail.
  * CloudWatchLogsLogGroupArn
  * CloudWatchLogsRoleArn
  * HasCustomEventSelectors
  * HomeRegion
  * IncludeGlobalServiceEvents
  * IsMultiRegionTrail
  * IsOrganizationTrail
  * KmsKeyId
  * LogFileValidationEnabled
  * Name
  * S3BucketName
  * S3KeyPrefix
  * SnsTopicArn
  * SnsTopicName
  * TrailArn

### AwsCodeBuildProjectDetails
* AwsCodeBuildProjectDetails `object`: Information about an AWS CodeBuild project.
  * EncryptionKey
  * Environment
    * Certificate
    * ImagePullCredentialsType
    * RegistryCredential
      * Credential
      * CredentialProvider
    * Type
  * Name
  * ServiceRole
  * Source
    * GitCloneDepth
    * InsecureSsl
    * Location
    * Type
  * VpcConfig
    * SecurityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * Subnets
      * items [NonEmptyString](#nonemptystring)
    * VpcId

### AwsCodeBuildProjectEnvironment
* AwsCodeBuildProjectEnvironment `object`: Information about the build environment for this build project.
  * Certificate
  * ImagePullCredentialsType
  * RegistryCredential
    * Credential
    * CredentialProvider
  * Type

### AwsCodeBuildProjectEnvironmentRegistryCredential
* AwsCodeBuildProjectEnvironmentRegistryCredential `object`: The credentials for access to a private registry.
  * Credential
  * CredentialProvider

### AwsCodeBuildProjectSource
* AwsCodeBuildProjectSource `object`: Information about the build input source code for this build project.
  * GitCloneDepth
  * InsecureSsl
  * Location
  * Type

### AwsCodeBuildProjectVpcConfig
* AwsCodeBuildProjectVpcConfig `object`: Information about the VPC configuration that AWS CodeBuild accesses.
  * SecurityGroupIds
    * items [NonEmptyString](#nonemptystring)
  * Subnets
    * items [NonEmptyString](#nonemptystring)
  * VpcId

### AwsCorsConfiguration
* AwsCorsConfiguration `object`: Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is only supported for HTTP APIs.
  * AllowCredentials
  * AllowHeaders
    * items [NonEmptyString](#nonemptystring)
  * AllowMethods
    * items [NonEmptyString](#nonemptystring)
  * AllowOrigins
    * items [NonEmptyString](#nonemptystring)
  * ExposeHeaders
    * items [NonEmptyString](#nonemptystring)
  * MaxAge

### AwsDynamoDbTableAttributeDefinition
* AwsDynamoDbTableAttributeDefinition `object`: Contains a definition of an attribute for the table.
  * AttributeName
  * AttributeType

### AwsDynamoDbTableAttributeDefinitionList
* AwsDynamoDbTableAttributeDefinitionList `array`
  * items [AwsDynamoDbTableAttributeDefinition](#awsdynamodbtableattributedefinition)

### AwsDynamoDbTableBillingModeSummary
* AwsDynamoDbTableBillingModeSummary `object`: Provides information about the billing for read/write capacity on the table.
  * BillingMode
  * LastUpdateToPayPerRequestDateTime

### AwsDynamoDbTableDetails
* AwsDynamoDbTableDetails `object`: Provides details about a DynamoDB table.
  * AttributeDefinitions
    * items [AwsDynamoDbTableAttributeDefinition](#awsdynamodbtableattributedefinition)
  * BillingModeSummary
    * BillingMode
    * LastUpdateToPayPerRequestDateTime
  * CreationDateTime
  * GlobalSecondaryIndexes
    * items [AwsDynamoDbTableGlobalSecondaryIndex](#awsdynamodbtableglobalsecondaryindex)
  * GlobalTableVersion
  * ItemCount
  * KeySchema
    * items [AwsDynamoDbTableKeySchema](#awsdynamodbtablekeyschema)
  * LatestStreamArn
  * LatestStreamLabel
  * LocalSecondaryIndexes
    * items [AwsDynamoDbTableLocalSecondaryIndex](#awsdynamodbtablelocalsecondaryindex)
  * ProvisionedThroughput
    * LastDecreaseDateTime
    * LastIncreaseDateTime
    * NumberOfDecreasesToday
    * ReadCapacityUnits
    * WriteCapacityUnits
  * Replicas
    * items [AwsDynamoDbTableReplica](#awsdynamodbtablereplica)
  * RestoreSummary
    * RestoreDateTime
    * RestoreInProgress
    * SourceBackupArn
    * SourceTableArn
  * SseDescription
    * InaccessibleEncryptionDateTime
    * KmsMasterKeyArn
    * SseType
    * Status
  * StreamSpecification
    * StreamEnabled
    * StreamViewType
  * TableId
  * TableName
  * TableSizeBytes
  * TableStatus

### AwsDynamoDbTableGlobalSecondaryIndex
* AwsDynamoDbTableGlobalSecondaryIndex `object`: Information abut a global secondary index for the table.
  * Backfilling
  * IndexArn
  * IndexName
  * IndexSizeBytes
  * IndexStatus
  * ItemCount
  * KeySchema
    * items [AwsDynamoDbTableKeySchema](#awsdynamodbtablekeyschema)
  * Projection
    * NonKeyAttributes
      * items [NonEmptyString](#nonemptystring)
    * ProjectionType
  * ProvisionedThroughput
    * LastDecreaseDateTime
    * LastIncreaseDateTime
    * NumberOfDecreasesToday
    * ReadCapacityUnits
    * WriteCapacityUnits

### AwsDynamoDbTableGlobalSecondaryIndexList
* AwsDynamoDbTableGlobalSecondaryIndexList `array`
  * items [AwsDynamoDbTableGlobalSecondaryIndex](#awsdynamodbtableglobalsecondaryindex)

### AwsDynamoDbTableKeySchema
* AwsDynamoDbTableKeySchema `object`: A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index.
  * AttributeName
  * KeyType

### AwsDynamoDbTableKeySchemaList
* AwsDynamoDbTableKeySchemaList `array`
  * items [AwsDynamoDbTableKeySchema](#awsdynamodbtablekeyschema)

### AwsDynamoDbTableLocalSecondaryIndex
* AwsDynamoDbTableLocalSecondaryIndex `object`: Information about a local secondary index for a DynamoDB table.
  * IndexArn
  * IndexName
  * KeySchema
    * items [AwsDynamoDbTableKeySchema](#awsdynamodbtablekeyschema)
  * Projection
    * NonKeyAttributes
      * items [NonEmptyString](#nonemptystring)
    * ProjectionType

### AwsDynamoDbTableLocalSecondaryIndexList
* AwsDynamoDbTableLocalSecondaryIndexList `array`
  * items [AwsDynamoDbTableLocalSecondaryIndex](#awsdynamodbtablelocalsecondaryindex)

### AwsDynamoDbTableProjection
* AwsDynamoDbTableProjection `object`: For global and local secondary indexes, identifies the attributes that are copied from the table into the index.
  * NonKeyAttributes
    * items [NonEmptyString](#nonemptystring)
  * ProjectionType

### AwsDynamoDbTableProvisionedThroughput
* AwsDynamoDbTableProvisionedThroughput `object`: Information about the provisioned throughput for the table or for a global secondary index.
  * LastDecreaseDateTime
  * LastIncreaseDateTime
  * NumberOfDecreasesToday
  * ReadCapacityUnits
  * WriteCapacityUnits

### AwsDynamoDbTableProvisionedThroughputOverride
* AwsDynamoDbTableProvisionedThroughputOverride `object`: Replica-specific configuration for the provisioned throughput.
  * ReadCapacityUnits

### AwsDynamoDbTableReplica
* AwsDynamoDbTableReplica `object`: Information about a replica of a DynamoDB table.
  * GlobalSecondaryIndexes
    * items [AwsDynamoDbTableReplicaGlobalSecondaryIndex](#awsdynamodbtablereplicaglobalsecondaryindex)
  * KmsMasterKeyId
  * ProvisionedThroughputOverride
    * ReadCapacityUnits
  * RegionName
  * ReplicaStatus
  * ReplicaStatusDescription

### AwsDynamoDbTableReplicaGlobalSecondaryIndex
* AwsDynamoDbTableReplicaGlobalSecondaryIndex `object`: Information about a global secondary index for a DynamoDB table replica.
  * IndexName
  * ProvisionedThroughputOverride
    * ReadCapacityUnits

### AwsDynamoDbTableReplicaGlobalSecondaryIndexList
* AwsDynamoDbTableReplicaGlobalSecondaryIndexList `array`
  * items [AwsDynamoDbTableReplicaGlobalSecondaryIndex](#awsdynamodbtablereplicaglobalsecondaryindex)

### AwsDynamoDbTableReplicaList
* AwsDynamoDbTableReplicaList `array`
  * items [AwsDynamoDbTableReplica](#awsdynamodbtablereplica)

### AwsDynamoDbTableRestoreSummary
* AwsDynamoDbTableRestoreSummary `object`: Information about the restore for the table.
  * RestoreDateTime
  * RestoreInProgress
  * SourceBackupArn
  * SourceTableArn

### AwsDynamoDbTableSseDescription
* AwsDynamoDbTableSseDescription `object`: Information about the server-side encryption for the table.
  * InaccessibleEncryptionDateTime
  * KmsMasterKeyArn
  * SseType
  * Status

### AwsDynamoDbTableStreamSpecification
* AwsDynamoDbTableStreamSpecification `object`: The current DynamoDB Streams configuration for the table.
  * StreamEnabled
  * StreamViewType

### AwsEc2EipDetails
* AwsEc2EipDetails `object`: Information about an Elastic IP address.
  * AllocationId
  * AssociationId
  * Domain
  * InstanceId
  * NetworkBorderGroup
  * NetworkInterfaceId
  * NetworkInterfaceOwnerId
  * PrivateIpAddress
  * PublicIp
  * PublicIpv4Pool

### AwsEc2InstanceDetails
* AwsEc2InstanceDetails `object`: The details of an Amazon EC2 instance.
  * IamInstanceProfileArn
  * ImageId
  * IpV4Addresses
    * items [NonEmptyString](#nonemptystring)
  * IpV6Addresses
    * items [NonEmptyString](#nonemptystring)
  * KeyName
  * LaunchedAt
  * SubnetId
  * Type
  * VpcId

### AwsEc2NetworkInterfaceAttachment
* AwsEc2NetworkInterfaceAttachment `object`: Information about the network interface attachment.
  * AttachTime
  * AttachmentId
  * DeleteOnTermination
  * DeviceIndex
  * InstanceId
  * InstanceOwnerId
  * Status

### AwsEc2NetworkInterfaceDetails
* AwsEc2NetworkInterfaceDetails `object`: Details about the network interface
  * Attachment
    * AttachTime
    * AttachmentId
    * DeleteOnTermination
    * DeviceIndex
    * InstanceId
    * InstanceOwnerId
    * Status
  * NetworkInterfaceId
  * SecurityGroups
    * items [AwsEc2NetworkInterfaceSecurityGroup](#awsec2networkinterfacesecuritygroup)
  * SourceDestCheck

### AwsEc2NetworkInterfaceSecurityGroup
* AwsEc2NetworkInterfaceSecurityGroup `object`: A security group associated with the network interface.
  * GroupId
  * GroupName

### AwsEc2NetworkInterfaceSecurityGroupList
* AwsEc2NetworkInterfaceSecurityGroupList `array`
  * items [AwsEc2NetworkInterfaceSecurityGroup](#awsec2networkinterfacesecuritygroup)

### AwsEc2SecurityGroupDetails
* AwsEc2SecurityGroupDetails `object`: Details about an EC2 security group.
  * GroupId
  * GroupName
  * IpPermissions
    * items [AwsEc2SecurityGroupIpPermission](#awsec2securitygroupippermission)
  * IpPermissionsEgress
    * items [AwsEc2SecurityGroupIpPermission](#awsec2securitygroupippermission)
  * OwnerId
  * VpcId

### AwsEc2SecurityGroupIpPermission
* AwsEc2SecurityGroupIpPermission `object`: An IP permission for an EC2 security group.
  * FromPort
  * IpProtocol
  * IpRanges
    * items [AwsEc2SecurityGroupIpRange](#awsec2securitygroupiprange)
  * Ipv6Ranges
    * items [AwsEc2SecurityGroupIpv6Range](#awsec2securitygroupipv6range)
  * PrefixListIds
    * items [AwsEc2SecurityGroupPrefixListId](#awsec2securitygroupprefixlistid)
  * ToPort
  * UserIdGroupPairs
    * items [AwsEc2SecurityGroupUserIdGroupPair](#awsec2securitygroupuseridgrouppair)

### AwsEc2SecurityGroupIpPermissionList
* AwsEc2SecurityGroupIpPermissionList `array`
  * items [AwsEc2SecurityGroupIpPermission](#awsec2securitygroupippermission)

### AwsEc2SecurityGroupIpRange
* AwsEc2SecurityGroupIpRange `object`: A range of IPv4 addresses.
  * CidrIp

### AwsEc2SecurityGroupIpRangeList
* AwsEc2SecurityGroupIpRangeList `array`
  * items [AwsEc2SecurityGroupIpRange](#awsec2securitygroupiprange)

### AwsEc2SecurityGroupIpv6Range
* AwsEc2SecurityGroupIpv6Range `object`: A range of IPv6 addresses.
  * CidrIpv6

### AwsEc2SecurityGroupIpv6RangeList
* AwsEc2SecurityGroupIpv6RangeList `array`
  * items [AwsEc2SecurityGroupIpv6Range](#awsec2securitygroupipv6range)

### AwsEc2SecurityGroupPrefixListId
* AwsEc2SecurityGroupPrefixListId `object`: A prefix list ID.
  * PrefixListId

### AwsEc2SecurityGroupPrefixListIdList
* AwsEc2SecurityGroupPrefixListIdList `array`
  * items [AwsEc2SecurityGroupPrefixListId](#awsec2securitygroupprefixlistid)

### AwsEc2SecurityGroupUserIdGroupPair
* AwsEc2SecurityGroupUserIdGroupPair `object`: A relationship between a security group and a user.
  * GroupId
  * GroupName
  * PeeringStatus
  * UserId
  * VpcId
  * VpcPeeringConnectionId

### AwsEc2SecurityGroupUserIdGroupPairList
* AwsEc2SecurityGroupUserIdGroupPairList `array`
  * items [AwsEc2SecurityGroupUserIdGroupPair](#awsec2securitygroupuseridgrouppair)

### AwsEc2VolumeAttachment
* AwsEc2VolumeAttachment `object`: An attachment to an AWS EC2 volume.
  * AttachTime
  * DeleteOnTermination
  * InstanceId
  * Status

### AwsEc2VolumeAttachmentList
* AwsEc2VolumeAttachmentList `array`
  * items [AwsEc2VolumeAttachment](#awsec2volumeattachment)

### AwsEc2VolumeDetails
* AwsEc2VolumeDetails `object`: Details about an EC2 volume.
  * Attachments
    * items [AwsEc2VolumeAttachment](#awsec2volumeattachment)
  * CreateTime
  * Encrypted
  * KmsKeyId
  * Size
  * SnapshotId
  * Status

### AwsEc2VpcDetails
* AwsEc2VpcDetails `object`: Details about an EC2 VPC.
  * CidrBlockAssociationSet
    * items [CidrBlockAssociation](#cidrblockassociation)
  * DhcpOptionsId
  * Ipv6CidrBlockAssociationSet
    * items [Ipv6CidrBlockAssociation](#ipv6cidrblockassociation)
  * State

### AwsElasticsearchDomainDetails
* AwsElasticsearchDomainDetails `object`: Information about an Elasticsearch domain.
  * AccessPolicies
  * DomainEndpointOptions
    * EnforceHTTPS
    * TLSSecurityPolicy
  * DomainId
  * DomainName
  * ElasticsearchVersion
  * EncryptionAtRestOptions
    * Enabled
    * KmsKeyId
  * Endpoint
  * Endpoints
  * NodeToNodeEncryptionOptions
    * Enabled
  * VPCOptions
    * AvailabilityZones
      * items [NonEmptyString](#nonemptystring)
    * SecurityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * SubnetIds
      * items [NonEmptyString](#nonemptystring)
    * VPCId

### AwsElasticsearchDomainDomainEndpointOptions
* AwsElasticsearchDomainDomainEndpointOptions `object`: Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
  * EnforceHTTPS
  * TLSSecurityPolicy

### AwsElasticsearchDomainEncryptionAtRestOptions
* AwsElasticsearchDomainEncryptionAtRestOptions `object`: Details about the configuration for encryption at rest.
  * Enabled
  * KmsKeyId

### AwsElasticsearchDomainNodeToNodeEncryptionOptions
* AwsElasticsearchDomainNodeToNodeEncryptionOptions `object`: Details about the configuration for node-to-node encryption.
  * Enabled

### AwsElasticsearchDomainVPCOptions
* AwsElasticsearchDomainVPCOptions `object`: Information that Amazon ES derives based on <code>VPCOptions</code> for the domain.
  * AvailabilityZones
    * items [NonEmptyString](#nonemptystring)
  * SecurityGroupIds
    * items [NonEmptyString](#nonemptystring)
  * SubnetIds
    * items [NonEmptyString](#nonemptystring)
  * VPCId

### AwsElbAppCookieStickinessPolicies
* AwsElbAppCookieStickinessPolicies `array`
  * items [AwsElbAppCookieStickinessPolicy](#awselbappcookiestickinesspolicy)

### AwsElbAppCookieStickinessPolicy
* AwsElbAppCookieStickinessPolicy `object`: Contains information about a stickiness policy that was created using <code>CreateAppCookieStickinessPolicy</code>.
  * CookieName
  * PolicyName

### AwsElbLbCookieStickinessPolicies
* AwsElbLbCookieStickinessPolicies `array`
  * items [AwsElbLbCookieStickinessPolicy](#awselblbcookiestickinesspolicy)

### AwsElbLbCookieStickinessPolicy
* AwsElbLbCookieStickinessPolicy `object`: Contains information about a stickiness policy that was created using <code>CreateLBCookieStickinessPolicy</code>.
  * CookieExpirationPeriod
  * PolicyName

### AwsElbLoadBalancerAccessLog
* AwsElbLoadBalancerAccessLog `object`: Contains information about the access log configuration for the load balancer.
  * EmitInterval
  * Enabled
  * S3BucketName
  * S3BucketPrefix

### AwsElbLoadBalancerAttributes
* AwsElbLoadBalancerAttributes `object`: Contains attributes for the load balancer.
  * AccessLog
    * EmitInterval
    * Enabled
    * S3BucketName
    * S3BucketPrefix
  * ConnectionDraining
    * Enabled
    * Timeout
  * ConnectionSettings
    * IdleTimeout
  * CrossZoneLoadBalancing
    * Enabled

### AwsElbLoadBalancerBackendServerDescription
* AwsElbLoadBalancerBackendServerDescription `object`: Provides information about the configuration of an EC2 instance for the load balancer.
  * InstancePort
  * PolicyNames
    * items [NonEmptyString](#nonemptystring)

### AwsElbLoadBalancerBackendServerDescriptions
* AwsElbLoadBalancerBackendServerDescriptions `array`
  * items [AwsElbLoadBalancerBackendServerDescription](#awselbloadbalancerbackendserverdescription)

### AwsElbLoadBalancerConnectionDraining
* AwsElbLoadBalancerConnectionDraining `object`: Contains information about the connection draining configuration for the load balancer.
  * Enabled
  * Timeout

### AwsElbLoadBalancerConnectionSettings
* AwsElbLoadBalancerConnectionSettings `object`: Contains connection settings for the load balancer.
  * IdleTimeout

### AwsElbLoadBalancerCrossZoneLoadBalancing
* AwsElbLoadBalancerCrossZoneLoadBalancing `object`: Contains cross-zone load balancing settings for the load balancer.
  * Enabled

### AwsElbLoadBalancerDetails
* AwsElbLoadBalancerDetails `object`: Contains details about a Classic Load Balancer.
  * AvailabilityZones
    * items [NonEmptyString](#nonemptystring)
  * BackendServerDescriptions
    * items [AwsElbLoadBalancerBackendServerDescription](#awselbloadbalancerbackendserverdescription)
  * CanonicalHostedZoneName
  * CanonicalHostedZoneNameID
  * CreatedTime
  * DnsName
  * HealthCheck
    * HealthyThreshold
    * Interval
    * Target
    * Timeout
    * UnhealthyThreshold
  * Instances
    * items [AwsElbLoadBalancerInstance](#awselbloadbalancerinstance)
  * ListenerDescriptions
    * items [AwsElbLoadBalancerListenerDescription](#awselbloadbalancerlistenerdescription)
  * LoadBalancerAttributes
    * AccessLog
      * EmitInterval
      * Enabled
      * S3BucketName
      * S3BucketPrefix
    * ConnectionDraining
      * Enabled
      * Timeout
    * ConnectionSettings
      * IdleTimeout
    * CrossZoneLoadBalancing
      * Enabled
  * LoadBalancerName
  * Policies
    * AppCookieStickinessPolicies
      * items [AwsElbAppCookieStickinessPolicy](#awselbappcookiestickinesspolicy)
    * LbCookieStickinessPolicies
      * items [AwsElbLbCookieStickinessPolicy](#awselblbcookiestickinesspolicy)
    * OtherPolicies
      * items [NonEmptyString](#nonemptystring)
  * Scheme
  * SecurityGroups
    * items [NonEmptyString](#nonemptystring)
  * SourceSecurityGroup
    * GroupName
    * OwnerAlias
  * Subnets
    * items [NonEmptyString](#nonemptystring)
  * VpcId

### AwsElbLoadBalancerHealthCheck
* AwsElbLoadBalancerHealthCheck `object`: Contains information about the health checks that are conducted on the load balancer.
  * HealthyThreshold
  * Interval
  * Target
  * Timeout
  * UnhealthyThreshold

### AwsElbLoadBalancerInstance
* AwsElbLoadBalancerInstance `object`: Provides information about an EC2 instance for a load balancer.
  * InstanceId

### AwsElbLoadBalancerInstances
* AwsElbLoadBalancerInstances `array`
  * items [AwsElbLoadBalancerInstance](#awselbloadbalancerinstance)

### AwsElbLoadBalancerListener
* AwsElbLoadBalancerListener `object`: Information about a load balancer listener.
  * InstancePort
  * InstanceProtocol
  * LoadBalancerPort
  * Protocol
  * SslCertificateId

### AwsElbLoadBalancerListenerDescription
* AwsElbLoadBalancerListenerDescription `object`: Lists the policies that are enabled for a load balancer listener.
  * Listener
    * InstancePort
    * InstanceProtocol
    * LoadBalancerPort
    * Protocol
    * SslCertificateId
  * PolicyNames
    * items [NonEmptyString](#nonemptystring)

### AwsElbLoadBalancerListenerDescriptions
* AwsElbLoadBalancerListenerDescriptions `array`
  * items [AwsElbLoadBalancerListenerDescription](#awselbloadbalancerlistenerdescription)

### AwsElbLoadBalancerPolicies
* AwsElbLoadBalancerPolicies `object`: Contains information about the policies for a load balancer.
  * AppCookieStickinessPolicies
    * items [AwsElbAppCookieStickinessPolicy](#awselbappcookiestickinesspolicy)
  * LbCookieStickinessPolicies
    * items [AwsElbLbCookieStickinessPolicy](#awselblbcookiestickinesspolicy)
  * OtherPolicies
    * items [NonEmptyString](#nonemptystring)

### AwsElbLoadBalancerSourceSecurityGroup
* AwsElbLoadBalancerSourceSecurityGroup `object`: Contains information about the security group for the load balancer.
  * GroupName
  * OwnerAlias

### AwsElbv2LoadBalancerDetails
* AwsElbv2LoadBalancerDetails `object`: Information about a load balancer.
  * AvailabilityZones
    * items [AvailabilityZone](#availabilityzone)
  * CanonicalHostedZoneId
  * CreatedTime
  * DNSName
  * IpAddressType
  * Scheme
  * SecurityGroups
    * items [NonEmptyString](#nonemptystring)
  * State
    * Code
    * Reason
  * Type
  * VpcId

### AwsIamAccessKeyDetails
* AwsIamAccessKeyDetails `object`: IAM access key details related to a finding.
  * AccessKeyId
  * AccountId
  * CreatedAt
  * PrincipalId
  * PrincipalName
  * PrincipalType
  * SessionContext
    * Attributes
      * CreationDate
      * MfaAuthenticated
    * SessionIssuer
      * AccountId
      * Arn
      * PrincipalId
      * Type
      * UserName
  * Status
  * UserName

### AwsIamAccessKeySessionContext
* AwsIamAccessKeySessionContext `object`: Provides information about the session that the key was used for.
  * Attributes
    * CreationDate
    * MfaAuthenticated
  * SessionIssuer
    * AccountId
    * Arn
    * PrincipalId
    * Type
    * UserName

### AwsIamAccessKeySessionContextAttributes
* AwsIamAccessKeySessionContextAttributes `object`: Attributes of the session that the key was used for.
  * CreationDate
  * MfaAuthenticated

### AwsIamAccessKeySessionContextSessionIssuer
* AwsIamAccessKeySessionContextSessionIssuer `object`: Information about the entity that created the session.
  * AccountId
  * Arn
  * PrincipalId
  * Type
  * UserName

### AwsIamAccessKeyStatus
* AwsIamAccessKeyStatus `string` (values: Active, Inactive)

### AwsIamAttachedManagedPolicy
* AwsIamAttachedManagedPolicy `object`: A managed policy that is attached to an IAM principal.
  * PolicyArn
  * PolicyName

### AwsIamAttachedManagedPolicyList
* AwsIamAttachedManagedPolicyList `array`
  * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)

### AwsIamGroupDetails
* AwsIamGroupDetails `object`: Contains details about an IAM group.
  * AttachedManagedPolicies
    * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)
  * CreateDate
  * GroupId
  * GroupName
  * GroupPolicyList
    * items [AwsIamGroupPolicy](#awsiamgrouppolicy)
  * Path

### AwsIamGroupPolicy
* AwsIamGroupPolicy `object`: A managed policy that is attached to the IAM group.
  * PolicyName

### AwsIamGroupPolicyList
* AwsIamGroupPolicyList `array`
  * items [AwsIamGroupPolicy](#awsiamgrouppolicy)

### AwsIamInstanceProfile
* AwsIamInstanceProfile `object`: Information about an instance profile.
  * Arn
  * CreateDate
  * InstanceProfileId
  * InstanceProfileName
  * Path
  * Roles
    * items [AwsIamInstanceProfileRole](#awsiaminstanceprofilerole)

### AwsIamInstanceProfileList
* AwsIamInstanceProfileList `array`
  * items [AwsIamInstanceProfile](#awsiaminstanceprofile)

### AwsIamInstanceProfileRole
* AwsIamInstanceProfileRole `object`: Information about a role associated with an instance profile.
  * Arn
  * AssumeRolePolicyDocument
  * CreateDate
  * Path
  * RoleId
  * RoleName

### AwsIamInstanceProfileRoles
* AwsIamInstanceProfileRoles `array`
  * items [AwsIamInstanceProfileRole](#awsiaminstanceprofilerole)

### AwsIamPermissionsBoundary
* AwsIamPermissionsBoundary `object`: Information about the policy used to set the permissions boundary for an IAM principal.
  * PermissionsBoundaryArn
  * PermissionsBoundaryType

### AwsIamPolicyDetails
* AwsIamPolicyDetails `object`: Represents an IAM permissions policy.
  * AttachmentCount
  * CreateDate
  * DefaultVersionId
  * Description
  * IsAttachable
  * Path
  * PermissionsBoundaryUsageCount
  * PolicyId
  * PolicyName
  * PolicyVersionList
    * items [AwsIamPolicyVersion](#awsiampolicyversion)
  * UpdateDate

### AwsIamPolicyVersion
* AwsIamPolicyVersion `object`: A version of an IAM policy.
  * CreateDate
  * IsDefaultVersion
  * VersionId

### AwsIamPolicyVersionList
* AwsIamPolicyVersionList `array`
  * items [AwsIamPolicyVersion](#awsiampolicyversion)

### AwsIamRoleAssumeRolePolicyDocument
* AwsIamRoleAssumeRolePolicyDocument `string`

### AwsIamRoleDetails
* AwsIamRoleDetails `object`: Contains information about an IAM role, including all of the role's policies.
  * AssumeRolePolicyDocument
  * AttachedManagedPolicies
    * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)
  * CreateDate
  * InstanceProfileList
    * items [AwsIamInstanceProfile](#awsiaminstanceprofile)
  * MaxSessionDuration
  * Path
  * PermissionsBoundary [AwsIamPermissionsBoundary](#awsiampermissionsboundary)
  * RoleId
  * RoleName
  * RolePolicyList
    * items [AwsIamRolePolicy](#awsiamrolepolicy)

### AwsIamRolePolicy
* AwsIamRolePolicy `object`: An inline policy that is embedded in the role.
  * PolicyName

### AwsIamRolePolicyList
* AwsIamRolePolicyList `array`
  * items [AwsIamRolePolicy](#awsiamrolepolicy)

### AwsIamUserDetails
* AwsIamUserDetails `object`: Information about an IAM user.
  * AttachedManagedPolicies
    * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)
  * CreateDate
  * GroupList
    * items [NonEmptyString](#nonemptystring)
  * Path
  * PermissionsBoundary
    * PermissionsBoundaryArn
    * PermissionsBoundaryType
  * UserId
  * UserName
  * UserPolicyList
    * items [AwsIamUserPolicy](#awsiamuserpolicy)

### AwsIamUserPolicy
* AwsIamUserPolicy `object`: Information about an inline policy that is embedded in the user.
  * PolicyName

### AwsIamUserPolicyList
* AwsIamUserPolicyList `array`
  * items [AwsIamUserPolicy](#awsiamuserpolicy)

### AwsKmsKeyDetails
* AwsKmsKeyDetails `object`: Contains metadata about a customer master key (CMK).
  * AWSAccountId
  * CreationDate
  * Description
  * KeyId
  * KeyManager
  * KeyState
  * Origin

### AwsLambdaFunctionCode
* AwsLambdaFunctionCode `object`: The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.
  * S3Bucket
  * S3Key
  * S3ObjectVersion
  * ZipFile

### AwsLambdaFunctionDeadLetterConfig
* AwsLambdaFunctionDeadLetterConfig `object`: The dead-letter queue for failed asynchronous invocations.
  * TargetArn

### AwsLambdaFunctionDetails
* AwsLambdaFunctionDetails `object`: Details about a function's configuration.
  * Code
    * S3Bucket
    * S3Key
    * S3ObjectVersion
    * ZipFile
  * CodeSha256
  * DeadLetterConfig
    * TargetArn
  * Environment
    * Error
      * ErrorCode
      * Message
    * Variables
  * FunctionName
  * Handler
  * KmsKeyArn
  * LastModified
  * Layers
    * items [AwsLambdaFunctionLayer](#awslambdafunctionlayer)
  * MasterArn
  * MemorySize
  * RevisionId
  * Role
  * Runtime
  * Timeout
  * TracingConfig
    * Mode
  * Version
  * VpcConfig
    * SecurityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * SubnetIds
      * items [NonEmptyString](#nonemptystring)
    * VpcId

### AwsLambdaFunctionEnvironment
* AwsLambdaFunctionEnvironment `object`: A function's environment variable settings.
  * Error
    * ErrorCode
    * Message
  * Variables

### AwsLambdaFunctionEnvironmentError
* AwsLambdaFunctionEnvironmentError `object`: Error messages for environment variables that couldn't be applied.
  * ErrorCode
  * Message

### AwsLambdaFunctionLayer
* AwsLambdaFunctionLayer `object`: An AWS Lambda layer.
  * Arn
  * CodeSize

### AwsLambdaFunctionLayerList
* AwsLambdaFunctionLayerList `array`
  * items [AwsLambdaFunctionLayer](#awslambdafunctionlayer)

### AwsLambdaFunctionTracingConfig
* AwsLambdaFunctionTracingConfig `object`: The function's AWS X-Ray tracing configuration.
  * Mode

### AwsLambdaFunctionVpcConfig
* AwsLambdaFunctionVpcConfig `object`: The VPC security groups and subnets that are attached to a Lambda function. For more information, see VPC Settings.
  * SecurityGroupIds
    * items [NonEmptyString](#nonemptystring)
  * SubnetIds
    * items [NonEmptyString](#nonemptystring)
  * VpcId

### AwsLambdaLayerVersionDetails
* AwsLambdaLayerVersionDetails `object`: Details about a Lambda layer version.
  * CompatibleRuntimes
    * items [NonEmptyString](#nonemptystring)
  * CreatedDate
  * Version

### AwsLambdaLayerVersionNumber
* AwsLambdaLayerVersionNumber `integer`

### AwsRdsDbClusterAssociatedRole
* AwsRdsDbClusterAssociatedRole `object`: An IAM role that is associated with the Amazon RDS DB cluster.
  * RoleArn
  * Status

### AwsRdsDbClusterAssociatedRoles
* AwsRdsDbClusterAssociatedRoles `array`
  * items [AwsRdsDbClusterAssociatedRole](#awsrdsdbclusterassociatedrole)

### AwsRdsDbClusterDetails
* AwsRdsDbClusterDetails `object`: Information about an Amazon RDS DB cluster.
  * ActivityStreamStatus
  * AllocatedStorage
  * AssociatedRoles
    * items [AwsRdsDbClusterAssociatedRole](#awsrdsdbclusterassociatedrole)
  * AvailabilityZones
    * items [NonEmptyString](#nonemptystring)
  * BackupRetentionPeriod
  * ClusterCreateTime
  * CopyTagsToSnapshot
  * CrossAccountClone
  * CustomEndpoints
    * items [NonEmptyString](#nonemptystring)
  * DatabaseName
  * DbClusterIdentifier
  * DbClusterMembers
    * items [AwsRdsDbClusterMember](#awsrdsdbclustermember)
  * DbClusterOptionGroupMemberships
    * items [AwsRdsDbClusterOptionGroupMembership](#awsrdsdbclusteroptiongroupmembership)
  * DbClusterParameterGroup
  * DbClusterResourceId
  * DbSubnetGroup
  * DeletionProtection
  * DomainMemberships
    * items [AwsRdsDbDomainMembership](#awsrdsdbdomainmembership)
  * EnabledCloudWatchLogsExports
    * items [NonEmptyString](#nonemptystring)
  * Endpoint
  * Engine
  * EngineMode
  * EngineVersion
  * HostedZoneId
  * HttpEndpointEnabled
  * IamDatabaseAuthenticationEnabled
  * KmsKeyId
  * MasterUsername
  * MultiAz
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ReadReplicaIdentifiers
    * items [NonEmptyString](#nonemptystring)
  * ReaderEndpoint
  * Status
  * StorageEncrypted
  * VpcSecurityGroups
    * items [AwsRdsDbInstanceVpcSecurityGroup](#awsrdsdbinstancevpcsecuritygroup)

### AwsRdsDbClusterMember
* AwsRdsDbClusterMember `object`: Information about an instance in the DB cluster.
  * DbClusterParameterGroupStatus
  * DbInstanceIdentifier
  * IsClusterWriter
  * PromotionTier

### AwsRdsDbClusterMembers
* AwsRdsDbClusterMembers `array`
  * items [AwsRdsDbClusterMember](#awsrdsdbclustermember)

### AwsRdsDbClusterOptionGroupMembership
* AwsRdsDbClusterOptionGroupMembership `object`: Information about an option group membership for a DB cluster.
  * DbClusterOptionGroupName
  * Status

### AwsRdsDbClusterOptionGroupMemberships
* AwsRdsDbClusterOptionGroupMemberships `array`
  * items [AwsRdsDbClusterOptionGroupMembership](#awsrdsdbclusteroptiongroupmembership)

### AwsRdsDbClusterSnapshotDetails
* AwsRdsDbClusterSnapshotDetails `object`: Information about an Amazon RDS DB cluster snapshot.
  * AllocatedStorage
  * AvailabilityZones
    * items [NonEmptyString](#nonemptystring)
  * ClusterCreateTime
  * DbClusterIdentifier
  * DbClusterSnapshotIdentifier
  * Engine
  * EngineVersion
  * IamDatabaseAuthenticationEnabled
  * KmsKeyId
  * LicenseModel
  * MasterUsername
  * PercentProgress
  * Port
  * SnapshotCreateTime
  * SnapshotType
  * Status
  * StorageEncrypted
  * VpcId

### AwsRdsDbDomainMembership
* AwsRdsDbDomainMembership `object`: Information about an Active Directory domain membership record associated with the DB instance.
  * Domain
  * Fqdn
  * IamRoleName
  * Status

### AwsRdsDbDomainMemberships
* AwsRdsDbDomainMemberships `array`
  * items [AwsRdsDbDomainMembership](#awsrdsdbdomainmembership)

### AwsRdsDbInstanceAssociatedRole
* AwsRdsDbInstanceAssociatedRole `object`: An AWS Identity and Access Management (IAM) role associated with the DB instance.
  * FeatureName
  * RoleArn
  * Status

### AwsRdsDbInstanceAssociatedRoles
* AwsRdsDbInstanceAssociatedRoles `array`
  * items [AwsRdsDbInstanceAssociatedRole](#awsrdsdbinstanceassociatedrole)

### AwsRdsDbInstanceDetails
* AwsRdsDbInstanceDetails `object`: Contains the details of an Amazon RDS DB instance.
  * AllocatedStorage
  * AssociatedRoles
    * items [AwsRdsDbInstanceAssociatedRole](#awsrdsdbinstanceassociatedrole)
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * CharacterSetName
  * CopyTagsToSnapshot
  * DBClusterIdentifier
  * DBInstanceClass
  * DBInstanceIdentifier
  * DBName
  * DbInstancePort
  * DbInstanceStatus
  * DbParameterGroups
    * items [AwsRdsDbParameterGroup](#awsrdsdbparametergroup)
  * DbSecurityGroups
    * items [NonEmptyString](#nonemptystring)
  * DbSubnetGroup
    * DbSubnetGroupArn
    * DbSubnetGroupDescription
    * DbSubnetGroupName
    * SubnetGroupStatus
    * Subnets
      * items [AwsRdsDbSubnetGroupSubnet](#awsrdsdbsubnetgroupsubnet)
    * VpcId
  * DbiResourceId
  * DeletionProtection
  * DomainMemberships
    * items [AwsRdsDbDomainMembership](#awsrdsdbdomainmembership)
  * EnabledCloudWatchLogsExports
    * items [NonEmptyString](#nonemptystring)
  * Endpoint
    * Address
    * HostedZoneId
    * Port
  * Engine
  * EngineVersion
  * EnhancedMonitoringResourceArn
  * IAMDatabaseAuthenticationEnabled
  * InstanceCreateTime
  * Iops
  * KmsKeyId
  * LatestRestorableTime
  * LicenseModel
  * ListenerEndpoint [AwsRdsDbInstanceEndpoint](#awsrdsdbinstanceendpoint)
  * MasterUsername
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAz
  * OptionGroupMemberships
    * items [AwsRdsDbOptionGroupMembership](#awsrdsdboptiongroupmembership)
  * PendingModifiedValues
    * AllocatedStorage
    * BackupRetentionPeriod
    * CaCertificateIdentifier
    * DbInstanceClass
    * DbInstanceIdentifier
    * DbSubnetGroupName
    * EngineVersion
    * Iops
    * LicenseModel
    * MasterUserPassword
    * MultiAZ
    * PendingCloudWatchLogsExports
      * LogTypesToDisable
        * items [NonEmptyString](#nonemptystring)
      * LogTypesToEnable
        * items [NonEmptyString](#nonemptystring)
    * Port
    * ProcessorFeatures
      * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
    * StorageType
  * PerformanceInsightsEnabled
  * PerformanceInsightsKmsKeyId
  * PerformanceInsightsRetentionPeriod
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ProcessorFeatures
    * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
  * PromotionTier
  * PubliclyAccessible
  * ReadReplicaDBClusterIdentifiers
    * items [NonEmptyString](#nonemptystring)
  * ReadReplicaDBInstanceIdentifiers
    * items [NonEmptyString](#nonemptystring)
  * ReadReplicaSourceDBInstanceIdentifier
  * SecondaryAvailabilityZone
  * StatusInfos
    * items [AwsRdsDbStatusInfo](#awsrdsdbstatusinfo)
  * StorageEncrypted
  * StorageType
  * TdeCredentialArn
  * Timezone
  * VpcSecurityGroups
    * items [AwsRdsDbInstanceVpcSecurityGroup](#awsrdsdbinstancevpcsecuritygroup)

### AwsRdsDbInstanceEndpoint
* AwsRdsDbInstanceEndpoint `object`: Specifies the connection endpoint.
  * Address
  * HostedZoneId
  * Port

### AwsRdsDbInstanceVpcSecurityGroup
* AwsRdsDbInstanceVpcSecurityGroup `object`: A VPC security groups that the DB instance belongs to.
  * Status
  * VpcSecurityGroupId

### AwsRdsDbInstanceVpcSecurityGroups
* AwsRdsDbInstanceVpcSecurityGroups `array`
  * items [AwsRdsDbInstanceVpcSecurityGroup](#awsrdsdbinstancevpcsecuritygroup)

### AwsRdsDbOptionGroupMembership
* AwsRdsDbOptionGroupMembership `object`: <p/>
  * OptionGroupName
  * Status

### AwsRdsDbOptionGroupMemberships
* AwsRdsDbOptionGroupMemberships `array`
  * items [AwsRdsDbOptionGroupMembership](#awsrdsdboptiongroupmembership)

### AwsRdsDbParameterGroup
* AwsRdsDbParameterGroup `object`: <p/>
  * DbParameterGroupName
  * ParameterApplyStatus

### AwsRdsDbParameterGroups
* AwsRdsDbParameterGroups `array`
  * items [AwsRdsDbParameterGroup](#awsrdsdbparametergroup)

### AwsRdsDbPendingModifiedValues
* AwsRdsDbPendingModifiedValues `object`: <p/>
  * AllocatedStorage
  * BackupRetentionPeriod
  * CaCertificateIdentifier
  * DbInstanceClass
  * DbInstanceIdentifier
  * DbSubnetGroupName
  * EngineVersion
  * Iops
  * LicenseModel
  * MasterUserPassword
  * MultiAZ
  * PendingCloudWatchLogsExports
    * LogTypesToDisable
      * items [NonEmptyString](#nonemptystring)
    * LogTypesToEnable
      * items [NonEmptyString](#nonemptystring)
  * Port
  * ProcessorFeatures
    * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
  * StorageType

### AwsRdsDbProcessorFeature
* AwsRdsDbProcessorFeature `object`: <p/>
  * Name
  * Value

### AwsRdsDbProcessorFeatures
* AwsRdsDbProcessorFeatures `array`
  * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)

### AwsRdsDbSnapshotDetails
* AwsRdsDbSnapshotDetails `object`: <p/>
  * AllocatedStorage
  * AvailabilityZone
  * DbInstanceIdentifier
  * DbSnapshotIdentifier
  * DbiResourceId
  * Encrypted
  * Engine
  * EngineVersion
  * IamDatabaseAuthenticationEnabled
  * InstanceCreateTime
  * Iops
  * KmsKeyId
  * LicenseModel
  * MasterUsername
  * OptionGroupName
  * PercentProgress
  * Port
  * ProcessorFeatures
    * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
  * SnapshotCreateTime
  * SnapshotType
  * SourceDbSnapshotIdentifier
  * SourceRegion
  * Status
  * StorageType
  * TdeCredentialArn
  * Timezone
  * VpcId

### AwsRdsDbStatusInfo
* AwsRdsDbStatusInfo `object`: Information about the status of a read replica.
  * Message
  * Normal
  * Status
  * StatusType

### AwsRdsDbStatusInfos
* AwsRdsDbStatusInfos `array`
  * items [AwsRdsDbStatusInfo](#awsrdsdbstatusinfo)

### AwsRdsDbSubnetGroup
* AwsRdsDbSubnetGroup `object`: Information about the subnet group for the database instance.
  * DbSubnetGroupArn
  * DbSubnetGroupDescription
  * DbSubnetGroupName
  * SubnetGroupStatus
  * Subnets
    * items [AwsRdsDbSubnetGroupSubnet](#awsrdsdbsubnetgroupsubnet)
  * VpcId

### AwsRdsDbSubnetGroupSubnet
* AwsRdsDbSubnetGroupSubnet `object`: Information about a subnet in a subnet group.
  * SubnetAvailabilityZone
    * Name
  * SubnetIdentifier
  * SubnetStatus

### AwsRdsDbSubnetGroupSubnetAvailabilityZone
* AwsRdsDbSubnetGroupSubnetAvailabilityZone `object`: An Availability Zone for a subnet in a subnet group.
  * Name

### AwsRdsDbSubnetGroupSubnets
* AwsRdsDbSubnetGroupSubnets `array`
  * items [AwsRdsDbSubnetGroupSubnet](#awsrdsdbsubnetgroupsubnet)

### AwsRdsPendingCloudWatchLogsExports
* AwsRdsPendingCloudWatchLogsExports `object`: Identifies the log types to enable and disable.
  * LogTypesToDisable
    * items [NonEmptyString](#nonemptystring)
  * LogTypesToEnable
    * items [NonEmptyString](#nonemptystring)

### AwsRedshiftClusterClusterNode
* AwsRedshiftClusterClusterNode `object`: A node in an Amazon Redshift cluster.
  * NodeRole
  * PrivateIpAddress
  * PublicIpAddress

### AwsRedshiftClusterClusterNodes
* AwsRedshiftClusterClusterNodes `array`
  * items [AwsRedshiftClusterClusterNode](#awsredshiftclusterclusternode)

### AwsRedshiftClusterClusterParameterGroup
* AwsRedshiftClusterClusterParameterGroup `object`: A cluster parameter group that is associated with an Amazon Redshift cluster.
  * ClusterParameterStatusList
    * items [AwsRedshiftClusterClusterParameterStatus](#awsredshiftclusterclusterparameterstatus)
  * ParameterApplyStatus
  * ParameterGroupName

### AwsRedshiftClusterClusterParameterGroups
* AwsRedshiftClusterClusterParameterGroups `array`
  * items [AwsRedshiftClusterClusterParameterGroup](#awsredshiftclusterclusterparametergroup)

### AwsRedshiftClusterClusterParameterStatus
* AwsRedshiftClusterClusterParameterStatus `object`: The status of a parameter in a cluster parameter group for an Amazon Redshift cluster.
  * ParameterApplyErrorDescription
  * ParameterApplyStatus
  * ParameterName

### AwsRedshiftClusterClusterParameterStatusList
* AwsRedshiftClusterClusterParameterStatusList `array`
  * items [AwsRedshiftClusterClusterParameterStatus](#awsredshiftclusterclusterparameterstatus)

### AwsRedshiftClusterClusterSecurityGroup
* AwsRedshiftClusterClusterSecurityGroup `object`: A security group that is associated with the cluster.
  * ClusterSecurityGroupName
  * Status

### AwsRedshiftClusterClusterSecurityGroups
* AwsRedshiftClusterClusterSecurityGroups `array`
  * items [AwsRedshiftClusterClusterSecurityGroup](#awsredshiftclusterclustersecuritygroup)

### AwsRedshiftClusterClusterSnapshotCopyStatus
* AwsRedshiftClusterClusterSnapshotCopyStatus `object`: Information about a cross-Region snapshot copy.
  * DestinationRegion
  * ManualSnapshotRetentionPeriod
  * RetentionPeriod
  * SnapshotCopyGrantName

### AwsRedshiftClusterDeferredMaintenanceWindow
* AwsRedshiftClusterDeferredMaintenanceWindow `object`: A time windows during which maintenance was deferred for an Amazon Redshift cluster.
  * DeferMaintenanceEndTime
  * DeferMaintenanceIdentifier
  * DeferMaintenanceStartTime

### AwsRedshiftClusterDeferredMaintenanceWindows
* AwsRedshiftClusterDeferredMaintenanceWindows `array`
  * items [AwsRedshiftClusterDeferredMaintenanceWindow](#awsredshiftclusterdeferredmaintenancewindow)

### AwsRedshiftClusterDetails
* AwsRedshiftClusterDetails `object`: Details about an Amazon Redshift cluster.
  * AllowVersionUpgrade
  * AutomatedSnapshotRetentionPeriod
  * AvailabilityZone
  * ClusterAvailabilityStatus
  * ClusterCreateTime
  * ClusterIdentifier
  * ClusterNodes
    * items [AwsRedshiftClusterClusterNode](#awsredshiftclusterclusternode)
  * ClusterParameterGroups
    * items [AwsRedshiftClusterClusterParameterGroup](#awsredshiftclusterclusterparametergroup)
  * ClusterPublicKey
  * ClusterRevisionNumber
  * ClusterSecurityGroups
    * items [AwsRedshiftClusterClusterSecurityGroup](#awsredshiftclusterclustersecuritygroup)
  * ClusterSnapshotCopyStatus
    * DestinationRegion
    * ManualSnapshotRetentionPeriod
    * RetentionPeriod
    * SnapshotCopyGrantName
  * ClusterStatus
  * ClusterSubnetGroupName
  * ClusterVersion
  * DBName
  * DeferredMaintenanceWindows
    * items [AwsRedshiftClusterDeferredMaintenanceWindow](#awsredshiftclusterdeferredmaintenancewindow)
  * ElasticIpStatus
    * ElasticIp
    * Status
  * ElasticResizeNumberOfNodeOptions
  * Encrypted
  * Endpoint
    * Address
    * Port
  * EnhancedVpcRouting
  * ExpectedNextSnapshotScheduleTime
  * ExpectedNextSnapshotScheduleTimeStatus
  * HsmStatus
    * HsmClientCertificateIdentifier
    * HsmConfigurationIdentifier
    * Status
  * IamRoles
    * items [AwsRedshiftClusterIamRole](#awsredshiftclusteriamrole)
  * KmsKeyId
  * MaintenanceTrackName
  * ManualSnapshotRetentionPeriod
  * MasterUsername
  * NextMaintenanceWindowStartTime
  * NodeType
  * NumberOfNodes
  * PendingActions
    * items [NonEmptyString](#nonemptystring)
  * PendingModifiedValues
    * AutomatedSnapshotRetentionPeriod
    * ClusterIdentifier
    * ClusterType
    * ClusterVersion
    * EncryptionType
    * EnhancedVpcRouting
    * MaintenanceTrackName
    * MasterUserPassword
    * NodeType
    * NumberOfNodes
    * PubliclyAccessible
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * ResizeInfo
    * AllowCancelResize
    * ResizeType
  * RestoreStatus
    * CurrentRestoreRateInMegaBytesPerSecond
    * ElapsedTimeInSeconds
    * EstimatedTimeToCompletionInSeconds
    * ProgressInMegaBytes
    * SnapshotSizeInMegaBytes
    * Status
  * SnapshotScheduleIdentifier
  * SnapshotScheduleState
  * VpcId
  * VpcSecurityGroups
    * items [AwsRedshiftClusterVpcSecurityGroup](#awsredshiftclustervpcsecuritygroup)

### AwsRedshiftClusterElasticIpStatus
* AwsRedshiftClusterElasticIpStatus `object`: The status of the elastic IP (EIP) address for an Amazon Redshift cluster.
  * ElasticIp
  * Status

### AwsRedshiftClusterEndpoint
* AwsRedshiftClusterEndpoint `object`: The connection endpoint for an Amazon Redshift cluster.
  * Address
  * Port

### AwsRedshiftClusterHsmStatus
* AwsRedshiftClusterHsmStatus `object`: Information about whether an Amazon Redshift cluster finished applying any hardware changes to security module (HSM) settings that were specified in a modify cluster command.
  * HsmClientCertificateIdentifier
  * HsmConfigurationIdentifier
  * Status

### AwsRedshiftClusterIamRole
* AwsRedshiftClusterIamRole `object`: An IAM role that the cluster can use to access other AWS services.
  * ApplyStatus
  * IamRoleArn

### AwsRedshiftClusterIamRoles
* AwsRedshiftClusterIamRoles `array`
  * items [AwsRedshiftClusterIamRole](#awsredshiftclusteriamrole)

### AwsRedshiftClusterPendingModifiedValues
* AwsRedshiftClusterPendingModifiedValues `object`: Changes to the Amazon Redshift cluster that are currently pending.
  * AutomatedSnapshotRetentionPeriod
  * ClusterIdentifier
  * ClusterType
  * ClusterVersion
  * EncryptionType
  * EnhancedVpcRouting
  * MaintenanceTrackName
  * MasterUserPassword
  * NodeType
  * NumberOfNodes
  * PubliclyAccessible

### AwsRedshiftClusterResizeInfo
* AwsRedshiftClusterResizeInfo `object`: Information about the resize operation for the cluster.
  * AllowCancelResize
  * ResizeType

### AwsRedshiftClusterRestoreStatus
* AwsRedshiftClusterRestoreStatus `object`: Information about the status of a cluster restore action. It only applies if the cluster was created by restoring a snapshot.
  * CurrentRestoreRateInMegaBytesPerSecond
  * ElapsedTimeInSeconds
  * EstimatedTimeToCompletionInSeconds
  * ProgressInMegaBytes
  * SnapshotSizeInMegaBytes
  * Status

### AwsRedshiftClusterVpcSecurityGroup
* AwsRedshiftClusterVpcSecurityGroup `object`: A VPC security group that the cluster belongs to, if the cluster is in a VPC.
  * Status
  * VpcSecurityGroupId

### AwsRedshiftClusterVpcSecurityGroups
* AwsRedshiftClusterVpcSecurityGroups `array`
  * items [AwsRedshiftClusterVpcSecurityGroup](#awsredshiftclustervpcsecuritygroup)

### AwsS3BucketDetails
* AwsS3BucketDetails `object`: The details of an Amazon S3 bucket.
  * CreatedAt
  * OwnerId
  * OwnerName
  * ServerSideEncryptionConfiguration
    * Rules
      * items [AwsS3BucketServerSideEncryptionRule](#awss3bucketserversideencryptionrule)

### AwsS3BucketServerSideEncryptionByDefault
* AwsS3BucketServerSideEncryptionByDefault `object`: Specifies the default server-side encryption to apply to new objects in the bucket.
  * KMSMasterKeyID
  * SSEAlgorithm

### AwsS3BucketServerSideEncryptionConfiguration
* AwsS3BucketServerSideEncryptionConfiguration `object`: The encryption configuration for the S3 bucket.
  * Rules
    * items [AwsS3BucketServerSideEncryptionRule](#awss3bucketserversideencryptionrule)

### AwsS3BucketServerSideEncryptionRule
* AwsS3BucketServerSideEncryptionRule `object`: An encryption rule to apply to the S3 bucket.
  * ApplyServerSideEncryptionByDefault
    * KMSMasterKeyID
    * SSEAlgorithm

### AwsS3BucketServerSideEncryptionRules
* AwsS3BucketServerSideEncryptionRules `array`
  * items [AwsS3BucketServerSideEncryptionRule](#awss3bucketserversideencryptionrule)

### AwsS3ObjectDetails
* AwsS3ObjectDetails `object`: Details about an Amazon S3 object.
  * ContentType
  * ETag
  * LastModified
  * SSEKMSKeyId
  * ServerSideEncryption
  * VersionId

### AwsSecretsManagerSecretDetails
* AwsSecretsManagerSecretDetails `object`: Details about an AWS Secrets Manager secret.
  * Deleted
  * Description
  * KmsKeyId
  * Name
  * RotationEnabled
  * RotationLambdaArn
  * RotationOccurredWithinFrequency
  * RotationRules
    * AutomaticallyAfterDays

### AwsSecretsManagerSecretRotationRules
* AwsSecretsManagerSecretRotationRules `object`: Defines the rotation schedule for the secret.
  * AutomaticallyAfterDays

### AwsSecurityFinding
* AwsSecurityFinding `object`: <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between AWS security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by AWS services (Amazon GuardDuty, Amazon Inspector, and Amazon Macie) or by the integrated third-party solutions and standards checks.</p> </note>
  * AwsAccountId **required**
  * Compliance
    * RelatedRequirements
      * items [NonEmptyString](#nonemptystring)
    * Status
    * StatusReasons
      * items [StatusReason](#statusreason)
  * Confidence
  * CreatedAt **required**
  * Criticality
  * Description **required**
  * FirstObservedAt
  * GeneratorId **required**
  * Id **required**
  * LastObservedAt
  * Malware
    * items [Malware](#malware)
  * Network
    * DestinationDomain
    * DestinationIpV4
    * DestinationIpV6
    * DestinationPort
    * Direction
    * OpenPortRange
      * Begin
      * End
    * Protocol
    * SourceDomain
    * SourceIpV4
    * SourceIpV6
    * SourceMac
    * SourcePort
  * NetworkPath
    * items [NetworkPathComponent](#networkpathcomponent)
  * Note
    * Text **required**
    * UpdatedAt **required**
    * UpdatedBy **required**
  * PatchSummary
    * FailedCount
    * Id **required**
    * InstalledCount
    * InstalledOtherCount
    * InstalledPendingReboot
    * InstalledRejectedCount
    * MissingCount
    * Operation
    * OperationEndTime
    * OperationStartTime
    * RebootOption
  * Process
    * LaunchedAt
    * Name
    * ParentPid
    * Path
    * Pid
    * TerminatedAt
  * ProductArn **required**
  * ProductFields
  * RecordState
  * RelatedFindings
    * items [RelatedFinding](#relatedfinding)
  * Remediation
    * Recommendation
      * Text
      * Url
  * Resources **required**
    * items [Resource](#resource)
  * SchemaVersion **required**
  * Severity **required**
    * Label
    * Normalized
    * Original
    * Product
  * SourceUrl
  * ThreatIntelIndicators
    * items [ThreatIntelIndicator](#threatintelindicator)
  * Title **required**
  * Types **required**
    * items [NonEmptyString](#nonemptystring)
  * UpdatedAt **required**
  * UserDefinedFields
  * VerificationState
  * Vulnerabilities
    * items [Vulnerability](#vulnerability)
  * Workflow
    * Status
  * WorkflowState

### AwsSecurityFindingFilters
* AwsSecurityFindingFilters `object`: <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
  * AwsAccountId
    * items [StringFilter](#stringfilter)
  * CompanyName
    * items [StringFilter](#stringfilter)
  * ComplianceStatus
    * items [StringFilter](#stringfilter)
  * Confidence
    * items [NumberFilter](#numberfilter)
  * CreatedAt
    * items [DateFilter](#datefilter)
  * Criticality
    * items [NumberFilter](#numberfilter)
  * Description
    * items [StringFilter](#stringfilter)
  * FirstObservedAt
    * items [DateFilter](#datefilter)
  * GeneratorId
    * items [StringFilter](#stringfilter)
  * Id
    * items [StringFilter](#stringfilter)
  * Keyword
    * items [KeywordFilter](#keywordfilter)
  * LastObservedAt
    * items [DateFilter](#datefilter)
  * MalwareName
    * items [StringFilter](#stringfilter)
  * MalwarePath
    * items [StringFilter](#stringfilter)
  * MalwareState
    * items [StringFilter](#stringfilter)
  * MalwareType
    * items [StringFilter](#stringfilter)
  * NetworkDestinationDomain
    * items [StringFilter](#stringfilter)
  * NetworkDestinationIpV4
    * items [IpFilter](#ipfilter)
  * NetworkDestinationIpV6
    * items [IpFilter](#ipfilter)
  * NetworkDestinationPort
    * items [NumberFilter](#numberfilter)
  * NetworkDirection
    * items [StringFilter](#stringfilter)
  * NetworkProtocol
    * items [StringFilter](#stringfilter)
  * NetworkSourceDomain
    * items [StringFilter](#stringfilter)
  * NetworkSourceIpV4
    * items [IpFilter](#ipfilter)
  * NetworkSourceIpV6
    * items [IpFilter](#ipfilter)
  * NetworkSourceMac
    * items [StringFilter](#stringfilter)
  * NetworkSourcePort
    * items [NumberFilter](#numberfilter)
  * NoteText
    * items [StringFilter](#stringfilter)
  * NoteUpdatedAt
    * items [DateFilter](#datefilter)
  * NoteUpdatedBy
    * items [StringFilter](#stringfilter)
  * ProcessLaunchedAt
    * items [DateFilter](#datefilter)
  * ProcessName
    * items [StringFilter](#stringfilter)
  * ProcessParentPid
    * items [NumberFilter](#numberfilter)
  * ProcessPath
    * items [StringFilter](#stringfilter)
  * ProcessPid
    * items [NumberFilter](#numberfilter)
  * ProcessTerminatedAt
    * items [DateFilter](#datefilter)
  * ProductArn
    * items [StringFilter](#stringfilter)
  * ProductFields
    * items [MapFilter](#mapfilter)
  * ProductName
    * items [StringFilter](#stringfilter)
  * RecommendationText
    * items [StringFilter](#stringfilter)
  * RecordState
    * items [StringFilter](#stringfilter)
  * RelatedFindingsId
    * items [StringFilter](#stringfilter)
  * RelatedFindingsProductArn
    * items [StringFilter](#stringfilter)
  * ResourceAwsEc2InstanceIamInstanceProfileArn
    * items [StringFilter](#stringfilter)
  * ResourceAwsEc2InstanceImageId
    * items [StringFilter](#stringfilter)
  * ResourceAwsEc2InstanceIpV4Addresses
    * items [IpFilter](#ipfilter)
  * ResourceAwsEc2InstanceIpV6Addresses
    * items [IpFilter](#ipfilter)
  * ResourceAwsEc2InstanceKeyName
    * items [StringFilter](#stringfilter)
  * ResourceAwsEc2InstanceLaunchedAt
    * items [DateFilter](#datefilter)
  * ResourceAwsEc2InstanceSubnetId
    * items [StringFilter](#stringfilter)
  * ResourceAwsEc2InstanceType
    * items [StringFilter](#stringfilter)
  * ResourceAwsEc2InstanceVpcId
    * items [StringFilter](#stringfilter)
  * ResourceAwsIamAccessKeyCreatedAt
    * items [DateFilter](#datefilter)
  * ResourceAwsIamAccessKeyStatus
    * items [StringFilter](#stringfilter)
  * ResourceAwsIamAccessKeyUserName
    * items [StringFilter](#stringfilter)
  * ResourceAwsS3BucketOwnerId
    * items [StringFilter](#stringfilter)
  * ResourceAwsS3BucketOwnerName
    * items [StringFilter](#stringfilter)
  * ResourceContainerImageId
    * items [StringFilter](#stringfilter)
  * ResourceContainerImageName
    * items [StringFilter](#stringfilter)
  * ResourceContainerLaunchedAt
    * items [DateFilter](#datefilter)
  * ResourceContainerName
    * items [StringFilter](#stringfilter)
  * ResourceDetailsOther
    * items [MapFilter](#mapfilter)
  * ResourceId
    * items [StringFilter](#stringfilter)
  * ResourcePartition
    * items [StringFilter](#stringfilter)
  * ResourceRegion
    * items [StringFilter](#stringfilter)
  * ResourceTags
    * items [MapFilter](#mapfilter)
  * ResourceType
    * items [StringFilter](#stringfilter)
  * SeverityLabel
    * items [StringFilter](#stringfilter)
  * SeverityNormalized
    * items [NumberFilter](#numberfilter)
  * SeverityProduct
    * items [NumberFilter](#numberfilter)
  * SourceUrl
    * items [StringFilter](#stringfilter)
  * ThreatIntelIndicatorCategory
    * items [StringFilter](#stringfilter)
  * ThreatIntelIndicatorLastObservedAt
    * items [DateFilter](#datefilter)
  * ThreatIntelIndicatorSource
    * items [StringFilter](#stringfilter)
  * ThreatIntelIndicatorSourceUrl
    * items [StringFilter](#stringfilter)
  * ThreatIntelIndicatorType
    * items [StringFilter](#stringfilter)
  * ThreatIntelIndicatorValue
    * items [StringFilter](#stringfilter)
  * Title
    * items [StringFilter](#stringfilter)
  * Type
    * items [StringFilter](#stringfilter)
  * UpdatedAt
    * items [DateFilter](#datefilter)
  * UserDefinedFields
    * items [MapFilter](#mapfilter)
  * VerificationState
    * items [StringFilter](#stringfilter)
  * WorkflowState
    * items [StringFilter](#stringfilter)
  * WorkflowStatus
    * items [StringFilter](#stringfilter)

### AwsSecurityFindingIdentifier
* AwsSecurityFindingIdentifier `object`: Identifies a finding to update using <code>BatchUpdateFindings</code>.
  * Id **required**
  * ProductArn **required**

### AwsSecurityFindingIdentifierList
* AwsSecurityFindingIdentifierList `array`
  * items [AwsSecurityFindingIdentifier](#awssecurityfindingidentifier)

### AwsSecurityFindingList
* AwsSecurityFindingList `array`
  * items [AwsSecurityFinding](#awssecurityfinding)

### AwsSnsTopicDetails
* AwsSnsTopicDetails `object`: A wrapper type for the topic's Amazon Resource Name (ARN).
  * KmsMasterKeyId
  * Owner
  * Subscription
    * items [AwsSnsTopicSubscription](#awssnstopicsubscription)
  * TopicName

### AwsSnsTopicSubscription
* AwsSnsTopicSubscription `object`: A wrapper type for the attributes of an Amazon SNS subscription.
  * Endpoint
  * Protocol

### AwsSnsTopicSubscriptionList
* AwsSnsTopicSubscriptionList `array`
  * items [AwsSnsTopicSubscription](#awssnstopicsubscription)

### AwsSqsQueueDetails
* AwsSqsQueueDetails `object`: Data about a queue.
  * DeadLetterTargetArn
  * KmsDataKeyReusePeriodSeconds
  * KmsMasterKeyId
  * QueueName

### AwsWafWebAclDetails
* AwsWafWebAclDetails `object`: Details about a WAF WebACL.
  * DefaultAction
  * Name
  * Rules
    * items [AwsWafWebAclRule](#awswafwebaclrule)
  * WebAclId

### AwsWafWebAclRule
* AwsWafWebAclRule `object`: Details for a rule in a WAF WebACL.
  * Action
    * Type
  * ExcludedRules
    * items [WafExcludedRule](#wafexcludedrule)
  * OverrideAction
    * Type
  * Priority
  * RuleId
  * Type

### AwsWafWebAclRuleList
* AwsWafWebAclRuleList `array`
  * items [AwsWafWebAclRule](#awswafwebaclrule)

### BatchDisableStandardsRequest
* BatchDisableStandardsRequest `object`
  * StandardsSubscriptionArns **required**
    * items [NonEmptyString](#nonemptystring)

### BatchDisableStandardsResponse
* BatchDisableStandardsResponse `object`
  * StandardsSubscriptions
    * items [StandardsSubscription](#standardssubscription)

### BatchEnableStandardsRequest
* BatchEnableStandardsRequest `object`
  * StandardsSubscriptionRequests **required**
    * items [StandardsSubscriptionRequest](#standardssubscriptionrequest)

### BatchEnableStandardsResponse
* BatchEnableStandardsResponse `object`
  * StandardsSubscriptions
    * items [StandardsSubscription](#standardssubscription)

### BatchImportFindingsRequest
* BatchImportFindingsRequest `object`
  * Findings **required**
    * items [AwsSecurityFinding](#awssecurityfinding)

### BatchImportFindingsResponse
* BatchImportFindingsResponse `object`
  * FailedCount **required**
  * FailedFindings
    * items [ImportFindingsError](#importfindingserror)
  * SuccessCount **required**

### BatchUpdateFindingsRequest
* BatchUpdateFindingsRequest `object`
  * Confidence
  * Criticality
  * FindingIdentifiers **required**
    * items [AwsSecurityFindingIdentifier](#awssecurityfindingidentifier)
  * Note [NoteUpdate](#noteupdate)
  * RelatedFindings
    * items [RelatedFinding](#relatedfinding)
  * Severity
    * Label
    * Normalized
    * Product
  * Types
    * items [NonEmptyString](#nonemptystring)
  * UserDefinedFields
  * VerificationState
  * Workflow
    * Status

### BatchUpdateFindingsResponse
* BatchUpdateFindingsResponse `object`
  * ProcessedFindings **required**
    * items [AwsSecurityFindingIdentifier](#awssecurityfindingidentifier)
  * UnprocessedFindings **required**
    * items [BatchUpdateFindingsUnprocessedFinding](#batchupdatefindingsunprocessedfinding)

### BatchUpdateFindingsUnprocessedFinding
* BatchUpdateFindingsUnprocessedFinding `object`: A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update.
  * ErrorCode **required**
  * ErrorMessage **required**
  * FindingIdentifier **required**
    * Id **required**
    * ProductArn **required**

### BatchUpdateFindingsUnprocessedFindingsList
* BatchUpdateFindingsUnprocessedFindingsList `array`
  * items [BatchUpdateFindingsUnprocessedFinding](#batchupdatefindingsunprocessedfinding)

### Boolean
* Boolean `boolean`

### CategoryList
* CategoryList `array`
  * items [NonEmptyString](#nonemptystring)

### CidrBlockAssociation
* CidrBlockAssociation `object`: An IPv4 CIDR block association.
  * AssociationId
  * CidrBlock
  * CidrBlockState

### CidrBlockAssociationList
* CidrBlockAssociationList `array`
  * items [CidrBlockAssociation](#cidrblockassociation)

### Compliance
* Compliance `object`: Contains finding details that are specific to control-based findings. Only returned for findings generated from controls.
  * RelatedRequirements
    * items [NonEmptyString](#nonemptystring)
  * Status
  * StatusReasons
    * items [StatusReason](#statusreason)

### ComplianceStatus
* ComplianceStatus `string` (values: PASSED, WARNING, FAILED, NOT_AVAILABLE)

### ContainerDetails
* ContainerDetails `object`: Container details related to a finding.
  * ImageId
  * ImageName
  * LaunchedAt
  * Name

### ControlStatus
* ControlStatus `string` (values: ENABLED, DISABLED)

### CreateActionTargetRequest
* CreateActionTargetRequest `object`
  * Description **required**
  * Id **required**
  * Name **required**

### CreateActionTargetResponse
* CreateActionTargetResponse `object`
  * ActionTargetArn **required**

### CreateInsightRequest
* CreateInsightRequest `object`
  * Filters **required**
    * AwsAccountId
      * items [StringFilter](#stringfilter)
    * CompanyName
      * items [StringFilter](#stringfilter)
    * ComplianceStatus
      * items [StringFilter](#stringfilter)
    * Confidence
      * items [NumberFilter](#numberfilter)
    * CreatedAt
      * items [DateFilter](#datefilter)
    * Criticality
      * items [NumberFilter](#numberfilter)
    * Description
      * items [StringFilter](#stringfilter)
    * FirstObservedAt
      * items [DateFilter](#datefilter)
    * GeneratorId
      * items [StringFilter](#stringfilter)
    * Id
      * items [StringFilter](#stringfilter)
    * Keyword
      * items [KeywordFilter](#keywordfilter)
    * LastObservedAt
      * items [DateFilter](#datefilter)
    * MalwareName
      * items [StringFilter](#stringfilter)
    * MalwarePath
      * items [StringFilter](#stringfilter)
    * MalwareState
      * items [StringFilter](#stringfilter)
    * MalwareType
      * items [StringFilter](#stringfilter)
    * NetworkDestinationDomain
      * items [StringFilter](#stringfilter)
    * NetworkDestinationIpV4
      * items [IpFilter](#ipfilter)
    * NetworkDestinationIpV6
      * items [IpFilter](#ipfilter)
    * NetworkDestinationPort
      * items [NumberFilter](#numberfilter)
    * NetworkDirection
      * items [StringFilter](#stringfilter)
    * NetworkProtocol
      * items [StringFilter](#stringfilter)
    * NetworkSourceDomain
      * items [StringFilter](#stringfilter)
    * NetworkSourceIpV4
      * items [IpFilter](#ipfilter)
    * NetworkSourceIpV6
      * items [IpFilter](#ipfilter)
    * NetworkSourceMac
      * items [StringFilter](#stringfilter)
    * NetworkSourcePort
      * items [NumberFilter](#numberfilter)
    * NoteText
      * items [StringFilter](#stringfilter)
    * NoteUpdatedAt
      * items [DateFilter](#datefilter)
    * NoteUpdatedBy
      * items [StringFilter](#stringfilter)
    * ProcessLaunchedAt
      * items [DateFilter](#datefilter)
    * ProcessName
      * items [StringFilter](#stringfilter)
    * ProcessParentPid
      * items [NumberFilter](#numberfilter)
    * ProcessPath
      * items [StringFilter](#stringfilter)
    * ProcessPid
      * items [NumberFilter](#numberfilter)
    * ProcessTerminatedAt
      * items [DateFilter](#datefilter)
    * ProductArn
      * items [StringFilter](#stringfilter)
    * ProductFields
      * items [MapFilter](#mapfilter)
    * ProductName
      * items [StringFilter](#stringfilter)
    * RecommendationText
      * items [StringFilter](#stringfilter)
    * RecordState
      * items [StringFilter](#stringfilter)
    * RelatedFindingsId
      * items [StringFilter](#stringfilter)
    * RelatedFindingsProductArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIamInstanceProfileArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceImageId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIpV4Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceIpV6Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceKeyName
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsEc2InstanceSubnetId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceType
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceVpcId
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyCreatedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsIamAccessKeyStatus
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyUserName
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerId
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerName
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageId
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageName
      * items [StringFilter](#stringfilter)
    * ResourceContainerLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceContainerName
      * items [StringFilter](#stringfilter)
    * ResourceDetailsOther
      * items [MapFilter](#mapfilter)
    * ResourceId
      * items [StringFilter](#stringfilter)
    * ResourcePartition
      * items [StringFilter](#stringfilter)
    * ResourceRegion
      * items [StringFilter](#stringfilter)
    * ResourceTags
      * items [MapFilter](#mapfilter)
    * ResourceType
      * items [StringFilter](#stringfilter)
    * SeverityLabel
      * items [StringFilter](#stringfilter)
    * SeverityNormalized
      * items [NumberFilter](#numberfilter)
    * SeverityProduct
      * items [NumberFilter](#numberfilter)
    * SourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorCategory
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorLastObservedAt
      * items [DateFilter](#datefilter)
    * ThreatIntelIndicatorSource
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorSourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorType
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorValue
      * items [StringFilter](#stringfilter)
    * Title
      * items [StringFilter](#stringfilter)
    * Type
      * items [StringFilter](#stringfilter)
    * UpdatedAt
      * items [DateFilter](#datefilter)
    * UserDefinedFields
      * items [MapFilter](#mapfilter)
    * VerificationState
      * items [StringFilter](#stringfilter)
    * WorkflowState
      * items [StringFilter](#stringfilter)
    * WorkflowStatus
      * items [StringFilter](#stringfilter)
  * GroupByAttribute **required**
  * Name **required**

### CreateInsightResponse
* CreateInsightResponse `object`
  * InsightArn **required**

### CreateMembersRequest
* CreateMembersRequest `object`
  * AccountDetails **required**
    * items [AccountDetails](#accountdetails)

### CreateMembersResponse
* CreateMembersResponse `object`
  * UnprocessedAccounts
    * items [Result](#result)

### CrossAccountMaxResults
* CrossAccountMaxResults `integer`

### Cvss
* Cvss `object`: CVSS scores from the advisory related to the vulnerability.
  * BaseScore
  * BaseVector
  * Version

### CvssList
* CvssList `array`
  * items [Cvss](#cvss)

### DateFilter
* DateFilter `object`: A date filter for querying findings.
  * DateRange
    * Unit
    * Value
  * End
  * Start

### DateFilterList
* DateFilterList `array`
  * items [DateFilter](#datefilter)

### DateRange
* DateRange `object`: A date range for the date filter.
  * Unit
  * Value

### DateRangeUnit
* DateRangeUnit `string` (values: DAYS)

### DeclineInvitationsRequest
* DeclineInvitationsRequest `object`
  * AccountIds **required**
    * items [NonEmptyString](#nonemptystring)

### DeclineInvitationsResponse
* DeclineInvitationsResponse `object`
  * UnprocessedAccounts
    * items [Result](#result)

### DeleteActionTargetRequest
* DeleteActionTargetRequest `object`

### DeleteActionTargetResponse
* DeleteActionTargetResponse `object`
  * ActionTargetArn **required**

### DeleteInsightRequest
* DeleteInsightRequest `object`

### DeleteInsightResponse
* DeleteInsightResponse `object`
  * InsightArn **required**

### DeleteInvitationsRequest
* DeleteInvitationsRequest `object`
  * AccountIds **required**
    * items [NonEmptyString](#nonemptystring)

### DeleteInvitationsResponse
* DeleteInvitationsResponse `object`
  * UnprocessedAccounts
    * items [Result](#result)

### DeleteMembersRequest
* DeleteMembersRequest `object`
  * AccountIds **required**
    * items [NonEmptyString](#nonemptystring)

### DeleteMembersResponse
* DeleteMembersResponse `object`
  * UnprocessedAccounts
    * items [Result](#result)

### DescribeActionTargetsRequest
* DescribeActionTargetsRequest `object`
  * ActionTargetArns
    * items [NonEmptyString](#nonemptystring)
  * MaxResults
  * NextToken

### DescribeActionTargetsResponse
* DescribeActionTargetsResponse `object`
  * ActionTargets **required**
    * items [ActionTarget](#actiontarget)
  * NextToken

### DescribeHubRequest
* DescribeHubRequest `object`

### DescribeHubResponse
* DescribeHubResponse `object`
  * AutoEnableControls
  * HubArn
  * SubscribedAt

### DescribeOrganizationConfigurationRequest
* DescribeOrganizationConfigurationRequest `object`

### DescribeOrganizationConfigurationResponse
* DescribeOrganizationConfigurationResponse `object`
  * AutoEnable
  * MemberAccountLimitReached

### DescribeProductsRequest
* DescribeProductsRequest `object`

### DescribeProductsResponse
* DescribeProductsResponse `object`
  * NextToken
  * Products **required**
    * items [Product](#product)

### DescribeStandardsControlsRequest
* DescribeStandardsControlsRequest `object`

### DescribeStandardsControlsResponse
* DescribeStandardsControlsResponse `object`
  * Controls
    * items [StandardsControl](#standardscontrol)
  * NextToken

### DescribeStandardsRequest
* DescribeStandardsRequest `object`

### DescribeStandardsResponse
* DescribeStandardsResponse `object`
  * NextToken
  * Standards
    * items [Standard](#standard)

### DisableImportFindingsForProductRequest
* DisableImportFindingsForProductRequest `object`

### DisableImportFindingsForProductResponse
* DisableImportFindingsForProductResponse `object`

### DisableOrganizationAdminAccountRequest
* DisableOrganizationAdminAccountRequest `object`
  * AdminAccountId **required**

### DisableOrganizationAdminAccountResponse
* DisableOrganizationAdminAccountResponse `object`

### DisableSecurityHubRequest
* DisableSecurityHubRequest `object`

### DisableSecurityHubResponse
* DisableSecurityHubResponse `object`

### DisassociateFromMasterAccountRequest
* DisassociateFromMasterAccountRequest `object`

### DisassociateFromMasterAccountResponse
* DisassociateFromMasterAccountResponse `object`

### DisassociateMembersRequest
* DisassociateMembersRequest `object`
  * AccountIds **required**
    * items [NonEmptyString](#nonemptystring)

### DisassociateMembersResponse
* DisassociateMembersResponse `object`

### Double
* Double `number`

### EnableImportFindingsForProductRequest
* EnableImportFindingsForProductRequest `object`
  * ProductArn **required**

### EnableImportFindingsForProductResponse
* EnableImportFindingsForProductResponse `object`
  * ProductSubscriptionArn

### EnableOrganizationAdminAccountRequest
* EnableOrganizationAdminAccountRequest `object`
  * AdminAccountId **required**

### EnableOrganizationAdminAccountResponse
* EnableOrganizationAdminAccountResponse `object`

### EnableSecurityHubRequest
* EnableSecurityHubRequest `object`
  * EnableDefaultStandards
  * Tags

### EnableSecurityHubResponse
* EnableSecurityHubResponse `object`

### FieldMap
* FieldMap `object`

### GetEnabledStandardsRequest
* GetEnabledStandardsRequest `object`
  * MaxResults
  * NextToken
  * StandardsSubscriptionArns
    * items [NonEmptyString](#nonemptystring)

### GetEnabledStandardsResponse
* GetEnabledStandardsResponse `object`
  * NextToken
  * StandardsSubscriptions
    * items [StandardsSubscription](#standardssubscription)

### GetFindingsRequest
* GetFindingsRequest `object`
  * Filters
    * AwsAccountId
      * items [StringFilter](#stringfilter)
    * CompanyName
      * items [StringFilter](#stringfilter)
    * ComplianceStatus
      * items [StringFilter](#stringfilter)
    * Confidence
      * items [NumberFilter](#numberfilter)
    * CreatedAt
      * items [DateFilter](#datefilter)
    * Criticality
      * items [NumberFilter](#numberfilter)
    * Description
      * items [StringFilter](#stringfilter)
    * FirstObservedAt
      * items [DateFilter](#datefilter)
    * GeneratorId
      * items [StringFilter](#stringfilter)
    * Id
      * items [StringFilter](#stringfilter)
    * Keyword
      * items [KeywordFilter](#keywordfilter)
    * LastObservedAt
      * items [DateFilter](#datefilter)
    * MalwareName
      * items [StringFilter](#stringfilter)
    * MalwarePath
      * items [StringFilter](#stringfilter)
    * MalwareState
      * items [StringFilter](#stringfilter)
    * MalwareType
      * items [StringFilter](#stringfilter)
    * NetworkDestinationDomain
      * items [StringFilter](#stringfilter)
    * NetworkDestinationIpV4
      * items [IpFilter](#ipfilter)
    * NetworkDestinationIpV6
      * items [IpFilter](#ipfilter)
    * NetworkDestinationPort
      * items [NumberFilter](#numberfilter)
    * NetworkDirection
      * items [StringFilter](#stringfilter)
    * NetworkProtocol
      * items [StringFilter](#stringfilter)
    * NetworkSourceDomain
      * items [StringFilter](#stringfilter)
    * NetworkSourceIpV4
      * items [IpFilter](#ipfilter)
    * NetworkSourceIpV6
      * items [IpFilter](#ipfilter)
    * NetworkSourceMac
      * items [StringFilter](#stringfilter)
    * NetworkSourcePort
      * items [NumberFilter](#numberfilter)
    * NoteText
      * items [StringFilter](#stringfilter)
    * NoteUpdatedAt
      * items [DateFilter](#datefilter)
    * NoteUpdatedBy
      * items [StringFilter](#stringfilter)
    * ProcessLaunchedAt
      * items [DateFilter](#datefilter)
    * ProcessName
      * items [StringFilter](#stringfilter)
    * ProcessParentPid
      * items [NumberFilter](#numberfilter)
    * ProcessPath
      * items [StringFilter](#stringfilter)
    * ProcessPid
      * items [NumberFilter](#numberfilter)
    * ProcessTerminatedAt
      * items [DateFilter](#datefilter)
    * ProductArn
      * items [StringFilter](#stringfilter)
    * ProductFields
      * items [MapFilter](#mapfilter)
    * ProductName
      * items [StringFilter](#stringfilter)
    * RecommendationText
      * items [StringFilter](#stringfilter)
    * RecordState
      * items [StringFilter](#stringfilter)
    * RelatedFindingsId
      * items [StringFilter](#stringfilter)
    * RelatedFindingsProductArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIamInstanceProfileArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceImageId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIpV4Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceIpV6Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceKeyName
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsEc2InstanceSubnetId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceType
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceVpcId
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyCreatedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsIamAccessKeyStatus
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyUserName
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerId
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerName
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageId
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageName
      * items [StringFilter](#stringfilter)
    * ResourceContainerLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceContainerName
      * items [StringFilter](#stringfilter)
    * ResourceDetailsOther
      * items [MapFilter](#mapfilter)
    * ResourceId
      * items [StringFilter](#stringfilter)
    * ResourcePartition
      * items [StringFilter](#stringfilter)
    * ResourceRegion
      * items [StringFilter](#stringfilter)
    * ResourceTags
      * items [MapFilter](#mapfilter)
    * ResourceType
      * items [StringFilter](#stringfilter)
    * SeverityLabel
      * items [StringFilter](#stringfilter)
    * SeverityNormalized
      * items [NumberFilter](#numberfilter)
    * SeverityProduct
      * items [NumberFilter](#numberfilter)
    * SourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorCategory
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorLastObservedAt
      * items [DateFilter](#datefilter)
    * ThreatIntelIndicatorSource
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorSourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorType
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorValue
      * items [StringFilter](#stringfilter)
    * Title
      * items [StringFilter](#stringfilter)
    * Type
      * items [StringFilter](#stringfilter)
    * UpdatedAt
      * items [DateFilter](#datefilter)
    * UserDefinedFields
      * items [MapFilter](#mapfilter)
    * VerificationState
      * items [StringFilter](#stringfilter)
    * WorkflowState
      * items [StringFilter](#stringfilter)
    * WorkflowStatus
      * items [StringFilter](#stringfilter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [SortCriterion](#sortcriterion)

### GetFindingsResponse
* GetFindingsResponse `object`
  * Findings **required**
    * items [AwsSecurityFinding](#awssecurityfinding)
  * NextToken

### GetInsightResultsRequest
* GetInsightResultsRequest `object`

### GetInsightResultsResponse
* GetInsightResultsResponse `object`
  * InsightResults **required**
    * GroupByAttribute **required**
    * InsightArn **required**
    * ResultValues **required**
      * items [InsightResultValue](#insightresultvalue)

### GetInsightsRequest
* GetInsightsRequest `object`
  * InsightArns
    * items [NonEmptyString](#nonemptystring)
  * MaxResults
  * NextToken

### GetInsightsResponse
* GetInsightsResponse `object`
  * Insights **required**
    * items [Insight](#insight)
  * NextToken

### GetInvitationsCountRequest
* GetInvitationsCountRequest `object`

### GetInvitationsCountResponse
* GetInvitationsCountResponse `object`
  * InvitationsCount

### GetMasterAccountRequest
* GetMasterAccountRequest `object`

### GetMasterAccountResponse
* GetMasterAccountResponse `object`
  * Master
    * AccountId
    * InvitationId
    * InvitedAt
    * MemberStatus

### GetMembersRequest
* GetMembersRequest `object`
  * AccountIds **required**
    * items [NonEmptyString](#nonemptystring)

### GetMembersResponse
* GetMembersResponse `object`
  * Members
    * items [Member](#member)
  * UnprocessedAccounts
    * items [Result](#result)

### ImportFindingsError
* ImportFindingsError `object`: The list of the findings that cannot be imported. For each finding, the list provides the error.
  * ErrorCode **required**
  * ErrorMessage **required**
  * Id **required**

### ImportFindingsErrorList
* ImportFindingsErrorList `array`
  * items [ImportFindingsError](#importfindingserror)

### Insight
* Insight `object`: Contains information about a Security Hub insight.
  * Filters **required**
    * AwsAccountId
      * items [StringFilter](#stringfilter)
    * CompanyName
      * items [StringFilter](#stringfilter)
    * ComplianceStatus
      * items [StringFilter](#stringfilter)
    * Confidence
      * items [NumberFilter](#numberfilter)
    * CreatedAt
      * items [DateFilter](#datefilter)
    * Criticality
      * items [NumberFilter](#numberfilter)
    * Description
      * items [StringFilter](#stringfilter)
    * FirstObservedAt
      * items [DateFilter](#datefilter)
    * GeneratorId
      * items [StringFilter](#stringfilter)
    * Id
      * items [StringFilter](#stringfilter)
    * Keyword
      * items [KeywordFilter](#keywordfilter)
    * LastObservedAt
      * items [DateFilter](#datefilter)
    * MalwareName
      * items [StringFilter](#stringfilter)
    * MalwarePath
      * items [StringFilter](#stringfilter)
    * MalwareState
      * items [StringFilter](#stringfilter)
    * MalwareType
      * items [StringFilter](#stringfilter)
    * NetworkDestinationDomain
      * items [StringFilter](#stringfilter)
    * NetworkDestinationIpV4
      * items [IpFilter](#ipfilter)
    * NetworkDestinationIpV6
      * items [IpFilter](#ipfilter)
    * NetworkDestinationPort
      * items [NumberFilter](#numberfilter)
    * NetworkDirection
      * items [StringFilter](#stringfilter)
    * NetworkProtocol
      * items [StringFilter](#stringfilter)
    * NetworkSourceDomain
      * items [StringFilter](#stringfilter)
    * NetworkSourceIpV4
      * items [IpFilter](#ipfilter)
    * NetworkSourceIpV6
      * items [IpFilter](#ipfilter)
    * NetworkSourceMac
      * items [StringFilter](#stringfilter)
    * NetworkSourcePort
      * items [NumberFilter](#numberfilter)
    * NoteText
      * items [StringFilter](#stringfilter)
    * NoteUpdatedAt
      * items [DateFilter](#datefilter)
    * NoteUpdatedBy
      * items [StringFilter](#stringfilter)
    * ProcessLaunchedAt
      * items [DateFilter](#datefilter)
    * ProcessName
      * items [StringFilter](#stringfilter)
    * ProcessParentPid
      * items [NumberFilter](#numberfilter)
    * ProcessPath
      * items [StringFilter](#stringfilter)
    * ProcessPid
      * items [NumberFilter](#numberfilter)
    * ProcessTerminatedAt
      * items [DateFilter](#datefilter)
    * ProductArn
      * items [StringFilter](#stringfilter)
    * ProductFields
      * items [MapFilter](#mapfilter)
    * ProductName
      * items [StringFilter](#stringfilter)
    * RecommendationText
      * items [StringFilter](#stringfilter)
    * RecordState
      * items [StringFilter](#stringfilter)
    * RelatedFindingsId
      * items [StringFilter](#stringfilter)
    * RelatedFindingsProductArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIamInstanceProfileArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceImageId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIpV4Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceIpV6Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceKeyName
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsEc2InstanceSubnetId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceType
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceVpcId
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyCreatedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsIamAccessKeyStatus
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyUserName
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerId
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerName
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageId
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageName
      * items [StringFilter](#stringfilter)
    * ResourceContainerLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceContainerName
      * items [StringFilter](#stringfilter)
    * ResourceDetailsOther
      * items [MapFilter](#mapfilter)
    * ResourceId
      * items [StringFilter](#stringfilter)
    * ResourcePartition
      * items [StringFilter](#stringfilter)
    * ResourceRegion
      * items [StringFilter](#stringfilter)
    * ResourceTags
      * items [MapFilter](#mapfilter)
    * ResourceType
      * items [StringFilter](#stringfilter)
    * SeverityLabel
      * items [StringFilter](#stringfilter)
    * SeverityNormalized
      * items [NumberFilter](#numberfilter)
    * SeverityProduct
      * items [NumberFilter](#numberfilter)
    * SourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorCategory
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorLastObservedAt
      * items [DateFilter](#datefilter)
    * ThreatIntelIndicatorSource
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorSourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorType
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorValue
      * items [StringFilter](#stringfilter)
    * Title
      * items [StringFilter](#stringfilter)
    * Type
      * items [StringFilter](#stringfilter)
    * UpdatedAt
      * items [DateFilter](#datefilter)
    * UserDefinedFields
      * items [MapFilter](#mapfilter)
    * VerificationState
      * items [StringFilter](#stringfilter)
    * WorkflowState
      * items [StringFilter](#stringfilter)
    * WorkflowStatus
      * items [StringFilter](#stringfilter)
  * GroupByAttribute **required**
  * InsightArn **required**
  * Name **required**

### InsightList
* InsightList `array`
  * items [Insight](#insight)

### InsightResultValue
* InsightResultValue `object`: The insight result values returned by the <code>GetInsightResults</code> operation.
  * Count **required**
  * GroupByAttributeValue **required**

### InsightResultValueList
* InsightResultValueList `array`
  * items [InsightResultValue](#insightresultvalue)

### InsightResults
* InsightResults `object`: The insight results returned by the <code>GetInsightResults</code> operation.
  * GroupByAttribute **required**
  * InsightArn **required**
  * ResultValues **required**
    * items [InsightResultValue](#insightresultvalue)

### Integer
* Integer `integer`

### IntegrationType
* IntegrationType `string` (values: SEND_FINDINGS_TO_SECURITY_HUB, RECEIVE_FINDINGS_FROM_SECURITY_HUB)

### IntegrationTypeList
* IntegrationTypeList `array`
  * items [IntegrationType](#integrationtype)

### InternalException


### InvalidAccessException


### InvalidInputException


### Invitation
* Invitation `object`: Details about an invitation.
  * AccountId
  * InvitationId
  * InvitedAt
  * MemberStatus

### InvitationList
* InvitationList `array`
  * items [Invitation](#invitation)

### InviteMembersRequest
* InviteMembersRequest `object`
  * AccountIds **required**
    * items [NonEmptyString](#nonemptystring)

### InviteMembersResponse
* InviteMembersResponse `object`
  * UnprocessedAccounts
    * items [Result](#result)

### IpFilter
* IpFilter `object`: The IP filter for querying findings.
  * Cidr

### IpFilterList
* IpFilterList `array`
  * items [IpFilter](#ipfilter)

### Ipv6CidrBlockAssociation
* Ipv6CidrBlockAssociation `object`: An IPV6 CIDR block association.
  * AssociationId
  * CidrBlockState
  * Ipv6CidrBlock

### Ipv6CidrBlockAssociationList
* Ipv6CidrBlockAssociationList `array`
  * items [Ipv6CidrBlockAssociation](#ipv6cidrblockassociation)

### KeywordFilter
* KeywordFilter `object`: A keyword filter for querying findings.
  * Value

### KeywordFilterList
* KeywordFilterList `array`
  * items [KeywordFilter](#keywordfilter)

### LimitExceededException


### ListEnabledProductsForImportRequest
* ListEnabledProductsForImportRequest `object`

### ListEnabledProductsForImportResponse
* ListEnabledProductsForImportResponse `object`
  * NextToken
  * ProductSubscriptions
    * items [NonEmptyString](#nonemptystring)

### ListInvitationsRequest
* ListInvitationsRequest `object`

### ListInvitationsResponse
* ListInvitationsResponse `object`
  * Invitations
    * items [Invitation](#invitation)
  * NextToken

### ListMembersRequest
* ListMembersRequest `object`

### ListMembersResponse
* ListMembersResponse `object`
  * Members
    * items [Member](#member)
  * NextToken

### ListOrganizationAdminAccountsRequest
* ListOrganizationAdminAccountsRequest `object`

### ListOrganizationAdminAccountsResponse
* ListOrganizationAdminAccountsResponse `object`
  * AdminAccounts
    * items [AdminAccount](#adminaccount)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### LoadBalancerState
* LoadBalancerState `object`: Information about the state of the load balancer.
  * Code
  * Reason

### Long
* Long `integer`

### Malware
* Malware `object`: A list of malware related to a finding.
  * Name **required**
  * Path
  * State
  * Type

### MalwareList
* MalwareList `array`
  * items [Malware](#malware)

### MalwareState
* MalwareState `string` (values: OBSERVED, REMOVAL_FAILED, REMOVED)

### MalwareType
* MalwareType `string` (values: ADWARE, BLENDED_THREAT, BOTNET_AGENT, COIN_MINER, EXPLOIT_KIT, KEYLOGGER, MACRO, POTENTIALLY_UNWANTED, SPYWARE, RANSOMWARE, REMOTE_ACCESS, ROOTKIT, TROJAN, VIRUS, WORM)

### MapFilter
* MapFilter `object`: A map filter for querying findings. Each map filter provides the field to check, the value to look for, and the comparison operator.
  * Comparison
  * Key
  * Value

### MapFilterComparison
* MapFilterComparison `string` (values: EQUALS, NOT_EQUALS)

### MapFilterList
* MapFilterList `array`
  * items [MapFilter](#mapfilter)

### MaxResults
* MaxResults `integer`

### Member
* Member `object`: The details about a member account.
  * AccountId
  * Email
  * InvitedAt
  * MasterId
  * MemberStatus
  * UpdatedAt

### MemberList
* MemberList `array`
  * items [Member](#member)

### Network
* Network `object`: The details of network-related information about a finding.
  * DestinationDomain
  * DestinationIpV4
  * DestinationIpV6
  * DestinationPort
  * Direction
  * OpenPortRange
    * Begin
    * End
  * Protocol
  * SourceDomain
  * SourceIpV4
  * SourceIpV6
  * SourceMac
  * SourcePort

### NetworkDirection
* NetworkDirection `string` (values: IN, OUT)

### NetworkHeader
* NetworkHeader `object`: Details about a network path component that occurs before or after the current component.
  * Destination
    * Address
      * items [NonEmptyString](#nonemptystring)
    * PortRanges
      * items [PortRange](#portrange)
  * Protocol
  * Source
    * Address
      * items [NonEmptyString](#nonemptystring)
    * PortRanges
      * items [PortRange](#portrange)

### NetworkPathComponent
* NetworkPathComponent `object`: Information about a network path component.
  * ComponentId
  * ComponentType
  * Egress
    * Destination
      * Address
        * items [NonEmptyString](#nonemptystring)
      * PortRanges
        * items [PortRange](#portrange)
    * Protocol
    * Source
      * Address
        * items [NonEmptyString](#nonemptystring)
      * PortRanges
        * items [PortRange](#portrange)
  * Ingress
    * Destination
      * Address
        * items [NonEmptyString](#nonemptystring)
      * PortRanges
        * items [PortRange](#portrange)
    * Protocol
    * Source
      * Address
        * items [NonEmptyString](#nonemptystring)
      * PortRanges
        * items [PortRange](#portrange)

### NetworkPathComponentDetails
* NetworkPathComponentDetails `object`: Information about the destination of the next component in the network path.
  * Address
    * items [NonEmptyString](#nonemptystring)
  * PortRanges
    * items [PortRange](#portrange)

### NetworkPathList
* NetworkPathList `array`
  * items [NetworkPathComponent](#networkpathcomponent)

### NextToken
* NextToken `string`

### NonEmptyString
* NonEmptyString `string`

### NonEmptyStringList
* NonEmptyStringList `array`
  * items [NonEmptyString](#nonemptystring)

### Note
* Note `object`: A user-defined note added to a finding.
  * Text **required**
  * UpdatedAt **required**
  * UpdatedBy **required**

### NoteUpdate
* NoteUpdate `object`: The updated note.
  * Text **required**
  * UpdatedBy **required**

### NumberFilter
* NumberFilter `object`: A number filter for querying findings.
  * Eq
  * Gte
  * Lte

### NumberFilterList
* NumberFilterList `array`
  * items [NumberFilter](#numberfilter)

### Partition
* Partition `string` (values: aws, aws-cn, aws-us-gov)

### PatchSummary
* PatchSummary `object`: Provides an overview of the patch compliance status for an instance against a selected compliance standard.
  * FailedCount
  * Id **required**
  * InstalledCount
  * InstalledOtherCount
  * InstalledPendingReboot
  * InstalledRejectedCount
  * MissingCount
  * Operation
  * OperationEndTime
  * OperationStartTime
  * RebootOption

### PortRange
* PortRange `object`: A range of ports.
  * Begin
  * End

### PortRangeList
* PortRangeList `array`
  * items [PortRange](#portrange)

### ProcessDetails
* ProcessDetails `object`: The details of process-related information about a finding.
  * LaunchedAt
  * Name
  * ParentPid
  * Path
  * Pid
  * TerminatedAt

### Product
* Product `object`: Contains details about a product.
  * ActivationUrl
  * Categories
    * items [NonEmptyString](#nonemptystring)
  * CompanyName
  * Description
  * IntegrationTypes
    * items [IntegrationType](#integrationtype)
  * MarketplaceUrl
  * ProductArn **required**
  * ProductName
  * ProductSubscriptionResourcePolicy

### ProductSubscriptionArnList
* ProductSubscriptionArnList `array`
  * items [NonEmptyString](#nonemptystring)

### ProductsList
* ProductsList `array`
  * items [Product](#product)

### RatioScale
* RatioScale `integer`

### Recommendation
* Recommendation `object`: A recommendation on how to remediate the issue identified in a finding.
  * Text
  * Url

### RecordState
* RecordState `string` (values: ACTIVE, ARCHIVED)

### RelatedFinding
* RelatedFinding `object`: Details about a related finding.
  * Id **required**
  * ProductArn **required**

### RelatedFindingList
* RelatedFindingList `array`
  * items [RelatedFinding](#relatedfinding)

### RelatedRequirementsList
* RelatedRequirementsList `array`
  * items [NonEmptyString](#nonemptystring)

### Remediation
* Remediation `object`: Details about the remediation steps for a finding.
  * Recommendation
    * Text
    * Url

### Resource
* Resource `object`: A resource related to a finding.
  * Details
    * AwsApiGatewayRestApi
      * ApiKeySource
      * BinaryMediaTypes
        * items [NonEmptyString](#nonemptystring)
      * CreatedDate
      * Description
      * EndpointConfiguration
        * Types
          * items [NonEmptyString](#nonemptystring)
      * Id
      * MinimumCompressionSize
      * Name
      * Version
    * AwsApiGatewayStage
      * AccessLogSettings
        * DestinationArn
        * Format
      * CacheClusterEnabled
      * CacheClusterSize
      * CacheClusterStatus
      * CanarySettings
        * DeploymentId
        * PercentTraffic
        * StageVariableOverrides
        * UseStageCache
      * ClientCertificateId
      * CreatedDate
      * DeploymentId
      * Description
      * DocumentationVersion
      * LastUpdatedDate
      * MethodSettings
        * items [AwsApiGatewayMethodSettings](#awsapigatewaymethodsettings)
      * StageName
      * TracingEnabled
      * Variables
      * WebAclArn
    * AwsApiGatewayV2Api
      * ApiEndpoint
      * ApiId
      * ApiKeySelectionExpression
      * CorsConfiguration
        * AllowCredentials
        * AllowHeaders
          * items [NonEmptyString](#nonemptystring)
        * AllowMethods
          * items [NonEmptyString](#nonemptystring)
        * AllowOrigins
          * items [NonEmptyString](#nonemptystring)
        * ExposeHeaders
          * items [NonEmptyString](#nonemptystring)
        * MaxAge
      * CreatedDate
      * Description
      * Name
      * ProtocolType
      * RouteSelectionExpression
      * Version
    * AwsApiGatewayV2Stage
      * AccessLogSettings
        * DestinationArn
        * Format
      * ApiGatewayManaged
      * AutoDeploy
      * CreatedDate
      * DefaultRouteSettings
        * DataTraceEnabled
        * DetailedMetricsEnabled
        * LoggingLevel
        * ThrottlingBurstLimit
        * ThrottlingRateLimit
      * DeploymentId
      * Description
      * LastDeploymentStatusMessage
      * LastUpdatedDate
      * RouteSettings
        * DataTraceEnabled
        * DetailedMetricsEnabled
        * LoggingLevel
        * ThrottlingBurstLimit
        * ThrottlingRateLimit
      * StageName
      * StageVariables
    * AwsAutoScalingAutoScalingGroup
      * CreatedTime
      * HealthCheckGracePeriod
      * HealthCheckType
      * LaunchConfigurationName
      * LoadBalancerNames
        * items [NonEmptyString](#nonemptystring)
    * AwsCertificateManagerCertificate
      * CertificateAuthorityArn
      * CreatedAt
      * DomainName
      * DomainValidationOptions
        * items [AwsCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)
      * ExtendedKeyUsages
        * items [AwsCertificateManagerCertificateExtendedKeyUsage](#awscertificatemanagercertificateextendedkeyusage)
      * FailureReason
      * ImportedAt
      * InUseBy
        * items [NonEmptyString](#nonemptystring)
      * IssuedAt
      * Issuer
      * KeyAlgorithm
      * KeyUsages
        * items [AwsCertificateManagerCertificateKeyUsage](#awscertificatemanagercertificatekeyusage)
      * NotAfter
      * NotBefore
      * Options
        * CertificateTransparencyLoggingPreference
      * RenewalEligibility
      * RenewalSummary
        * DomainValidationOptions
          * items [AwsCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)
        * RenewalStatus
        * RenewalStatusReason
        * UpdatedAt
      * Serial
      * SignatureAlgorithm
      * Status
      * Subject
      * SubjectAlternativeNames
        * items [NonEmptyString](#nonemptystring)
      * Type
    * AwsCloudFrontDistribution
      * CacheBehaviors
        * Items
          * items [AwsCloudFrontDistributionCacheBehavior](#awscloudfrontdistributioncachebehavior)
      * DefaultCacheBehavior
        * ViewerProtocolPolicy
      * DefaultRootObject
      * DomainName
      * ETag
      * LastModifiedTime
      * Logging
        * Bucket
        * Enabled
        * IncludeCookies
        * Prefix
      * OriginGroups
        * Items
          * items [AwsCloudFrontDistributionOriginGroup](#awscloudfrontdistributionorigingroup)
      * Origins
        * Items
          * items [AwsCloudFrontDistributionOriginItem](#awscloudfrontdistributionoriginitem)
      * Status
      * WebAclId
    * AwsCloudTrailTrail
      * CloudWatchLogsLogGroupArn
      * CloudWatchLogsRoleArn
      * HasCustomEventSelectors
      * HomeRegion
      * IncludeGlobalServiceEvents
      * IsMultiRegionTrail
      * IsOrganizationTrail
      * KmsKeyId
      * LogFileValidationEnabled
      * Name
      * S3BucketName
      * S3KeyPrefix
      * SnsTopicArn
      * SnsTopicName
      * TrailArn
    * AwsCodeBuildProject
      * EncryptionKey
      * Environment
        * Certificate
        * ImagePullCredentialsType
        * RegistryCredential
          * Credential
          * CredentialProvider
        * Type
      * Name
      * ServiceRole
      * Source
        * GitCloneDepth
        * InsecureSsl
        * Location
        * Type
      * VpcConfig
        * SecurityGroupIds
          * items [NonEmptyString](#nonemptystring)
        * Subnets
          * items [NonEmptyString](#nonemptystring)
        * VpcId
    * AwsDynamoDbTable
      * AttributeDefinitions
        * items [AwsDynamoDbTableAttributeDefinition](#awsdynamodbtableattributedefinition)
      * BillingModeSummary
        * BillingMode
        * LastUpdateToPayPerRequestDateTime
      * CreationDateTime
      * GlobalSecondaryIndexes
        * items [AwsDynamoDbTableGlobalSecondaryIndex](#awsdynamodbtableglobalsecondaryindex)
      * GlobalTableVersion
      * ItemCount
      * KeySchema
        * items [AwsDynamoDbTableKeySchema](#awsdynamodbtablekeyschema)
      * LatestStreamArn
      * LatestStreamLabel
      * LocalSecondaryIndexes
        * items [AwsDynamoDbTableLocalSecondaryIndex](#awsdynamodbtablelocalsecondaryindex)
      * ProvisionedThroughput
        * LastDecreaseDateTime
        * LastIncreaseDateTime
        * NumberOfDecreasesToday
        * ReadCapacityUnits
        * WriteCapacityUnits
      * Replicas
        * items [AwsDynamoDbTableReplica](#awsdynamodbtablereplica)
      * RestoreSummary
        * RestoreDateTime
        * RestoreInProgress
        * SourceBackupArn
        * SourceTableArn
      * SseDescription
        * InaccessibleEncryptionDateTime
        * KmsMasterKeyArn
        * SseType
        * Status
      * StreamSpecification
        * StreamEnabled
        * StreamViewType
      * TableId
      * TableName
      * TableSizeBytes
      * TableStatus
    * AwsEc2Eip
      * AllocationId
      * AssociationId
      * Domain
      * InstanceId
      * NetworkBorderGroup
      * NetworkInterfaceId
      * NetworkInterfaceOwnerId
      * PrivateIpAddress
      * PublicIp
      * PublicIpv4Pool
    * AwsEc2Instance
      * IamInstanceProfileArn
      * ImageId
      * IpV4Addresses
        * items [NonEmptyString](#nonemptystring)
      * IpV6Addresses
        * items [NonEmptyString](#nonemptystring)
      * KeyName
      * LaunchedAt
      * SubnetId
      * Type
      * VpcId
    * AwsEc2NetworkInterface
      * Attachment
        * AttachTime
        * AttachmentId
        * DeleteOnTermination
        * DeviceIndex
        * InstanceId
        * InstanceOwnerId
        * Status
      * NetworkInterfaceId
      * SecurityGroups
        * items [AwsEc2NetworkInterfaceSecurityGroup](#awsec2networkinterfacesecuritygroup)
      * SourceDestCheck
    * AwsEc2SecurityGroup
      * GroupId
      * GroupName
      * IpPermissions
        * items [AwsEc2SecurityGroupIpPermission](#awsec2securitygroupippermission)
      * IpPermissionsEgress
        * items [AwsEc2SecurityGroupIpPermission](#awsec2securitygroupippermission)
      * OwnerId
      * VpcId
    * AwsEc2Volume
      * Attachments
        * items [AwsEc2VolumeAttachment](#awsec2volumeattachment)
      * CreateTime
      * Encrypted
      * KmsKeyId
      * Size
      * SnapshotId
      * Status
    * AwsEc2Vpc
      * CidrBlockAssociationSet
        * items [CidrBlockAssociation](#cidrblockassociation)
      * DhcpOptionsId
      * Ipv6CidrBlockAssociationSet
        * items [Ipv6CidrBlockAssociation](#ipv6cidrblockassociation)
      * State
    * AwsElasticsearchDomain
      * AccessPolicies
      * DomainEndpointOptions
        * EnforceHTTPS
        * TLSSecurityPolicy
      * DomainId
      * DomainName
      * ElasticsearchVersion
      * EncryptionAtRestOptions
        * Enabled
        * KmsKeyId
      * Endpoint
      * Endpoints
      * NodeToNodeEncryptionOptions
        * Enabled
      * VPCOptions
        * AvailabilityZones
          * items [NonEmptyString](#nonemptystring)
        * SecurityGroupIds
          * items [NonEmptyString](#nonemptystring)
        * SubnetIds
          * items [NonEmptyString](#nonemptystring)
        * VPCId
    * AwsElbLoadBalancer
      * AvailabilityZones
        * items [NonEmptyString](#nonemptystring)
      * BackendServerDescriptions
        * items [AwsElbLoadBalancerBackendServerDescription](#awselbloadbalancerbackendserverdescription)
      * CanonicalHostedZoneName
      * CanonicalHostedZoneNameID
      * CreatedTime
      * DnsName
      * HealthCheck
        * HealthyThreshold
        * Interval
        * Target
        * Timeout
        * UnhealthyThreshold
      * Instances
        * items [AwsElbLoadBalancerInstance](#awselbloadbalancerinstance)
      * ListenerDescriptions
        * items [AwsElbLoadBalancerListenerDescription](#awselbloadbalancerlistenerdescription)
      * LoadBalancerAttributes
        * AccessLog
          * EmitInterval
          * Enabled
          * S3BucketName
          * S3BucketPrefix
        * ConnectionDraining
          * Enabled
          * Timeout
        * ConnectionSettings
          * IdleTimeout
        * CrossZoneLoadBalancing
          * Enabled
      * LoadBalancerName
      * Policies
        * AppCookieStickinessPolicies
          * items [AwsElbAppCookieStickinessPolicy](#awselbappcookiestickinesspolicy)
        * LbCookieStickinessPolicies
          * items [AwsElbLbCookieStickinessPolicy](#awselblbcookiestickinesspolicy)
        * OtherPolicies
          * items [NonEmptyString](#nonemptystring)
      * Scheme
      * SecurityGroups
        * items [NonEmptyString](#nonemptystring)
      * SourceSecurityGroup
        * GroupName
        * OwnerAlias
      * Subnets
        * items [NonEmptyString](#nonemptystring)
      * VpcId
    * AwsElbv2LoadBalancer
      * AvailabilityZones
        * items [AvailabilityZone](#availabilityzone)
      * CanonicalHostedZoneId
      * CreatedTime
      * DNSName
      * IpAddressType
      * Scheme
      * SecurityGroups
        * items [NonEmptyString](#nonemptystring)
      * State
        * Code
        * Reason
      * Type
      * VpcId
    * AwsIamAccessKey
      * AccessKeyId
      * AccountId
      * CreatedAt
      * PrincipalId
      * PrincipalName
      * PrincipalType
      * SessionContext
        * Attributes
          * CreationDate
          * MfaAuthenticated
        * SessionIssuer
          * AccountId
          * Arn
          * PrincipalId
          * Type
          * UserName
      * Status
      * UserName
    * AwsIamGroup
      * AttachedManagedPolicies
        * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)
      * CreateDate
      * GroupId
      * GroupName
      * GroupPolicyList
        * items [AwsIamGroupPolicy](#awsiamgrouppolicy)
      * Path
    * AwsIamPolicy
      * AttachmentCount
      * CreateDate
      * DefaultVersionId
      * Description
      * IsAttachable
      * Path
      * PermissionsBoundaryUsageCount
      * PolicyId
      * PolicyName
      * PolicyVersionList
        * items [AwsIamPolicyVersion](#awsiampolicyversion)
      * UpdateDate
    * AwsIamRole
      * AssumeRolePolicyDocument
      * AttachedManagedPolicies
        * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)
      * CreateDate
      * InstanceProfileList
        * items [AwsIamInstanceProfile](#awsiaminstanceprofile)
      * MaxSessionDuration
      * Path
      * PermissionsBoundary [AwsIamPermissionsBoundary](#awsiampermissionsboundary)
      * RoleId
      * RoleName
      * RolePolicyList
        * items [AwsIamRolePolicy](#awsiamrolepolicy)
    * AwsIamUser
      * AttachedManagedPolicies
        * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)
      * CreateDate
      * GroupList
        * items [NonEmptyString](#nonemptystring)
      * Path
      * PermissionsBoundary
        * PermissionsBoundaryArn
        * PermissionsBoundaryType
      * UserId
      * UserName
      * UserPolicyList
        * items [AwsIamUserPolicy](#awsiamuserpolicy)
    * AwsKmsKey
      * AWSAccountId
      * CreationDate
      * Description
      * KeyId
      * KeyManager
      * KeyState
      * Origin
    * AwsLambdaFunction
      * Code
        * S3Bucket
        * S3Key
        * S3ObjectVersion
        * ZipFile
      * CodeSha256
      * DeadLetterConfig
        * TargetArn
      * Environment
        * Error
          * ErrorCode
          * Message
        * Variables
      * FunctionName
      * Handler
      * KmsKeyArn
      * LastModified
      * Layers
        * items [AwsLambdaFunctionLayer](#awslambdafunctionlayer)
      * MasterArn
      * MemorySize
      * RevisionId
      * Role
      * Runtime
      * Timeout
      * TracingConfig
        * Mode
      * Version
      * VpcConfig
        * SecurityGroupIds
          * items [NonEmptyString](#nonemptystring)
        * SubnetIds
          * items [NonEmptyString](#nonemptystring)
        * VpcId
    * AwsLambdaLayerVersion
      * CompatibleRuntimes
        * items [NonEmptyString](#nonemptystring)
      * CreatedDate
      * Version
    * AwsRdsDbCluster
      * ActivityStreamStatus
      * AllocatedStorage
      * AssociatedRoles
        * items [AwsRdsDbClusterAssociatedRole](#awsrdsdbclusterassociatedrole)
      * AvailabilityZones
        * items [NonEmptyString](#nonemptystring)
      * BackupRetentionPeriod
      * ClusterCreateTime
      * CopyTagsToSnapshot
      * CrossAccountClone
      * CustomEndpoints
        * items [NonEmptyString](#nonemptystring)
      * DatabaseName
      * DbClusterIdentifier
      * DbClusterMembers
        * items [AwsRdsDbClusterMember](#awsrdsdbclustermember)
      * DbClusterOptionGroupMemberships
        * items [AwsRdsDbClusterOptionGroupMembership](#awsrdsdbclusteroptiongroupmembership)
      * DbClusterParameterGroup
      * DbClusterResourceId
      * DbSubnetGroup
      * DeletionProtection
      * DomainMemberships
        * items [AwsRdsDbDomainMembership](#awsrdsdbdomainmembership)
      * EnabledCloudWatchLogsExports
        * items [NonEmptyString](#nonemptystring)
      * Endpoint
      * Engine
      * EngineMode
      * EngineVersion
      * HostedZoneId
      * HttpEndpointEnabled
      * IamDatabaseAuthenticationEnabled
      * KmsKeyId
      * MasterUsername
      * MultiAz
      * Port
      * PreferredBackupWindow
      * PreferredMaintenanceWindow
      * ReadReplicaIdentifiers
        * items [NonEmptyString](#nonemptystring)
      * ReaderEndpoint
      * Status
      * StorageEncrypted
      * VpcSecurityGroups
        * items [AwsRdsDbInstanceVpcSecurityGroup](#awsrdsdbinstancevpcsecuritygroup)
    * AwsRdsDbClusterSnapshot
      * AllocatedStorage
      * AvailabilityZones
        * items [NonEmptyString](#nonemptystring)
      * ClusterCreateTime
      * DbClusterIdentifier
      * DbClusterSnapshotIdentifier
      * Engine
      * EngineVersion
      * IamDatabaseAuthenticationEnabled
      * KmsKeyId
      * LicenseModel
      * MasterUsername
      * PercentProgress
      * Port
      * SnapshotCreateTime
      * SnapshotType
      * Status
      * StorageEncrypted
      * VpcId
    * AwsRdsDbInstance
      * AllocatedStorage
      * AssociatedRoles
        * items [AwsRdsDbInstanceAssociatedRole](#awsrdsdbinstanceassociatedrole)
      * AutoMinorVersionUpgrade
      * AvailabilityZone
      * BackupRetentionPeriod
      * CACertificateIdentifier
      * CharacterSetName
      * CopyTagsToSnapshot
      * DBClusterIdentifier
      * DBInstanceClass
      * DBInstanceIdentifier
      * DBName
      * DbInstancePort
      * DbInstanceStatus
      * DbParameterGroups
        * items [AwsRdsDbParameterGroup](#awsrdsdbparametergroup)
      * DbSecurityGroups
        * items [NonEmptyString](#nonemptystring)
      * DbSubnetGroup
        * DbSubnetGroupArn
        * DbSubnetGroupDescription
        * DbSubnetGroupName
        * SubnetGroupStatus
        * Subnets
          * items [AwsRdsDbSubnetGroupSubnet](#awsrdsdbsubnetgroupsubnet)
        * VpcId
      * DbiResourceId
      * DeletionProtection
      * DomainMemberships
        * items [AwsRdsDbDomainMembership](#awsrdsdbdomainmembership)
      * EnabledCloudWatchLogsExports
        * items [NonEmptyString](#nonemptystring)
      * Endpoint
        * Address
        * HostedZoneId
        * Port
      * Engine
      * EngineVersion
      * EnhancedMonitoringResourceArn
      * IAMDatabaseAuthenticationEnabled
      * InstanceCreateTime
      * Iops
      * KmsKeyId
      * LatestRestorableTime
      * LicenseModel
      * ListenerEndpoint [AwsRdsDbInstanceEndpoint](#awsrdsdbinstanceendpoint)
      * MasterUsername
      * MaxAllocatedStorage
      * MonitoringInterval
      * MonitoringRoleArn
      * MultiAz
      * OptionGroupMemberships
        * items [AwsRdsDbOptionGroupMembership](#awsrdsdboptiongroupmembership)
      * PendingModifiedValues
        * AllocatedStorage
        * BackupRetentionPeriod
        * CaCertificateIdentifier
        * DbInstanceClass
        * DbInstanceIdentifier
        * DbSubnetGroupName
        * EngineVersion
        * Iops
        * LicenseModel
        * MasterUserPassword
        * MultiAZ
        * PendingCloudWatchLogsExports
          * LogTypesToDisable
          * LogTypesToEnable
        * Port
        * ProcessorFeatures
          * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
        * StorageType
      * PerformanceInsightsEnabled
      * PerformanceInsightsKmsKeyId
      * PerformanceInsightsRetentionPeriod
      * PreferredBackupWindow
      * PreferredMaintenanceWindow
      * ProcessorFeatures
        * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
      * PromotionTier
      * PubliclyAccessible
      * ReadReplicaDBClusterIdentifiers
        * items [NonEmptyString](#nonemptystring)
      * ReadReplicaDBInstanceIdentifiers
        * items [NonEmptyString](#nonemptystring)
      * ReadReplicaSourceDBInstanceIdentifier
      * SecondaryAvailabilityZone
      * StatusInfos
        * items [AwsRdsDbStatusInfo](#awsrdsdbstatusinfo)
      * StorageEncrypted
      * StorageType
      * TdeCredentialArn
      * Timezone
      * VpcSecurityGroups
        * items [AwsRdsDbInstanceVpcSecurityGroup](#awsrdsdbinstancevpcsecuritygroup)
    * AwsRdsDbSnapshot
      * AllocatedStorage
      * AvailabilityZone
      * DbInstanceIdentifier
      * DbSnapshotIdentifier
      * DbiResourceId
      * Encrypted
      * Engine
      * EngineVersion
      * IamDatabaseAuthenticationEnabled
      * InstanceCreateTime
      * Iops
      * KmsKeyId
      * LicenseModel
      * MasterUsername
      * OptionGroupName
      * PercentProgress
      * Port
      * ProcessorFeatures
        * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
      * SnapshotCreateTime
      * SnapshotType
      * SourceDbSnapshotIdentifier
      * SourceRegion
      * Status
      * StorageType
      * TdeCredentialArn
      * Timezone
      * VpcId
    * AwsRedshiftCluster
      * AllowVersionUpgrade
      * AutomatedSnapshotRetentionPeriod
      * AvailabilityZone
      * ClusterAvailabilityStatus
      * ClusterCreateTime
      * ClusterIdentifier
      * ClusterNodes
        * items [AwsRedshiftClusterClusterNode](#awsredshiftclusterclusternode)
      * ClusterParameterGroups
        * items [AwsRedshiftClusterClusterParameterGroup](#awsredshiftclusterclusterparametergroup)
      * ClusterPublicKey
      * ClusterRevisionNumber
      * ClusterSecurityGroups
        * items [AwsRedshiftClusterClusterSecurityGroup](#awsredshiftclusterclustersecuritygroup)
      * ClusterSnapshotCopyStatus
        * DestinationRegion
        * ManualSnapshotRetentionPeriod
        * RetentionPeriod
        * SnapshotCopyGrantName
      * ClusterStatus
      * ClusterSubnetGroupName
      * ClusterVersion
      * DBName
      * DeferredMaintenanceWindows
        * items [AwsRedshiftClusterDeferredMaintenanceWindow](#awsredshiftclusterdeferredmaintenancewindow)
      * ElasticIpStatus
        * ElasticIp
        * Status
      * ElasticResizeNumberOfNodeOptions
      * Encrypted
      * Endpoint
        * Address
        * Port
      * EnhancedVpcRouting
      * ExpectedNextSnapshotScheduleTime
      * ExpectedNextSnapshotScheduleTimeStatus
      * HsmStatus
        * HsmClientCertificateIdentifier
        * HsmConfigurationIdentifier
        * Status
      * IamRoles
        * items [AwsRedshiftClusterIamRole](#awsredshiftclusteriamrole)
      * KmsKeyId
      * MaintenanceTrackName
      * ManualSnapshotRetentionPeriod
      * MasterUsername
      * NextMaintenanceWindowStartTime
      * NodeType
      * NumberOfNodes
      * PendingActions
        * items [NonEmptyString](#nonemptystring)
      * PendingModifiedValues
        * AutomatedSnapshotRetentionPeriod
        * ClusterIdentifier
        * ClusterType
        * ClusterVersion
        * EncryptionType
        * EnhancedVpcRouting
        * MaintenanceTrackName
        * MasterUserPassword
        * NodeType
        * NumberOfNodes
        * PubliclyAccessible
      * PreferredMaintenanceWindow
      * PubliclyAccessible
      * ResizeInfo
        * AllowCancelResize
        * ResizeType
      * RestoreStatus
        * CurrentRestoreRateInMegaBytesPerSecond
        * ElapsedTimeInSeconds
        * EstimatedTimeToCompletionInSeconds
        * ProgressInMegaBytes
        * SnapshotSizeInMegaBytes
        * Status
      * SnapshotScheduleIdentifier
      * SnapshotScheduleState
      * VpcId
      * VpcSecurityGroups
        * items [AwsRedshiftClusterVpcSecurityGroup](#awsredshiftclustervpcsecuritygroup)
    * AwsS3Bucket
      * CreatedAt
      * OwnerId
      * OwnerName
      * ServerSideEncryptionConfiguration
        * Rules
          * items [AwsS3BucketServerSideEncryptionRule](#awss3bucketserversideencryptionrule)
    * AwsS3Object
      * ContentType
      * ETag
      * LastModified
      * SSEKMSKeyId
      * ServerSideEncryption
      * VersionId
    * AwsSecretsManagerSecret
      * Deleted
      * Description
      * KmsKeyId
      * Name
      * RotationEnabled
      * RotationLambdaArn
      * RotationOccurredWithinFrequency
      * RotationRules
        * AutomaticallyAfterDays
    * AwsSnsTopic
      * KmsMasterKeyId
      * Owner
      * Subscription
        * items [AwsSnsTopicSubscription](#awssnstopicsubscription)
      * TopicName
    * AwsSqsQueue
      * DeadLetterTargetArn
      * KmsDataKeyReusePeriodSeconds
      * KmsMasterKeyId
      * QueueName
    * AwsWafWebAcl
      * DefaultAction
      * Name
      * Rules
        * items [AwsWafWebAclRule](#awswafwebaclrule)
      * WebAclId
    * Container
      * ImageId
      * ImageName
      * LaunchedAt
      * Name
    * Other
  * Id **required**
  * Partition
  * Region
  * ResourceRole
  * Tags
  * Type **required**

### ResourceArn
* ResourceArn `string`

### ResourceConflictException


### ResourceDetails
* ResourceDetails `object`: <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p>
  * AwsApiGatewayRestApi
    * ApiKeySource
    * BinaryMediaTypes
      * items [NonEmptyString](#nonemptystring)
    * CreatedDate
    * Description
    * EndpointConfiguration
      * Types
        * items [NonEmptyString](#nonemptystring)
    * Id
    * MinimumCompressionSize
    * Name
    * Version
  * AwsApiGatewayStage
    * AccessLogSettings
      * DestinationArn
      * Format
    * CacheClusterEnabled
    * CacheClusterSize
    * CacheClusterStatus
    * CanarySettings
      * DeploymentId
      * PercentTraffic
      * StageVariableOverrides
      * UseStageCache
    * ClientCertificateId
    * CreatedDate
    * DeploymentId
    * Description
    * DocumentationVersion
    * LastUpdatedDate
    * MethodSettings
      * items [AwsApiGatewayMethodSettings](#awsapigatewaymethodsettings)
    * StageName
    * TracingEnabled
    * Variables
    * WebAclArn
  * AwsApiGatewayV2Api
    * ApiEndpoint
    * ApiId
    * ApiKeySelectionExpression
    * CorsConfiguration
      * AllowCredentials
      * AllowHeaders
        * items [NonEmptyString](#nonemptystring)
      * AllowMethods
        * items [NonEmptyString](#nonemptystring)
      * AllowOrigins
        * items [NonEmptyString](#nonemptystring)
      * ExposeHeaders
        * items [NonEmptyString](#nonemptystring)
      * MaxAge
    * CreatedDate
    * Description
    * Name
    * ProtocolType
    * RouteSelectionExpression
    * Version
  * AwsApiGatewayV2Stage
    * AccessLogSettings
      * DestinationArn
      * Format
    * ApiGatewayManaged
    * AutoDeploy
    * CreatedDate
    * DefaultRouteSettings
      * DataTraceEnabled
      * DetailedMetricsEnabled
      * LoggingLevel
      * ThrottlingBurstLimit
      * ThrottlingRateLimit
    * DeploymentId
    * Description
    * LastDeploymentStatusMessage
    * LastUpdatedDate
    * RouteSettings
      * DataTraceEnabled
      * DetailedMetricsEnabled
      * LoggingLevel
      * ThrottlingBurstLimit
      * ThrottlingRateLimit
    * StageName
    * StageVariables
  * AwsAutoScalingAutoScalingGroup
    * CreatedTime
    * HealthCheckGracePeriod
    * HealthCheckType
    * LaunchConfigurationName
    * LoadBalancerNames
      * items [NonEmptyString](#nonemptystring)
  * AwsCertificateManagerCertificate
    * CertificateAuthorityArn
    * CreatedAt
    * DomainName
    * DomainValidationOptions
      * items [AwsCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)
    * ExtendedKeyUsages
      * items [AwsCertificateManagerCertificateExtendedKeyUsage](#awscertificatemanagercertificateextendedkeyusage)
    * FailureReason
    * ImportedAt
    * InUseBy
      * items [NonEmptyString](#nonemptystring)
    * IssuedAt
    * Issuer
    * KeyAlgorithm
    * KeyUsages
      * items [AwsCertificateManagerCertificateKeyUsage](#awscertificatemanagercertificatekeyusage)
    * NotAfter
    * NotBefore
    * Options
      * CertificateTransparencyLoggingPreference
    * RenewalEligibility
    * RenewalSummary
      * DomainValidationOptions
        * items [AwsCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)
      * RenewalStatus
      * RenewalStatusReason
      * UpdatedAt
    * Serial
    * SignatureAlgorithm
    * Status
    * Subject
    * SubjectAlternativeNames
      * items [NonEmptyString](#nonemptystring)
    * Type
  * AwsCloudFrontDistribution
    * CacheBehaviors
      * Items
        * items [AwsCloudFrontDistributionCacheBehavior](#awscloudfrontdistributioncachebehavior)
    * DefaultCacheBehavior
      * ViewerProtocolPolicy
    * DefaultRootObject
    * DomainName
    * ETag
    * LastModifiedTime
    * Logging
      * Bucket
      * Enabled
      * IncludeCookies
      * Prefix
    * OriginGroups
      * Items
        * items [AwsCloudFrontDistributionOriginGroup](#awscloudfrontdistributionorigingroup)
    * Origins
      * Items
        * items [AwsCloudFrontDistributionOriginItem](#awscloudfrontdistributionoriginitem)
    * Status
    * WebAclId
  * AwsCloudTrailTrail
    * CloudWatchLogsLogGroupArn
    * CloudWatchLogsRoleArn
    * HasCustomEventSelectors
    * HomeRegion
    * IncludeGlobalServiceEvents
    * IsMultiRegionTrail
    * IsOrganizationTrail
    * KmsKeyId
    * LogFileValidationEnabled
    * Name
    * S3BucketName
    * S3KeyPrefix
    * SnsTopicArn
    * SnsTopicName
    * TrailArn
  * AwsCodeBuildProject
    * EncryptionKey
    * Environment
      * Certificate
      * ImagePullCredentialsType
      * RegistryCredential
        * Credential
        * CredentialProvider
      * Type
    * Name
    * ServiceRole
    * Source
      * GitCloneDepth
      * InsecureSsl
      * Location
      * Type
    * VpcConfig
      * SecurityGroupIds
        * items [NonEmptyString](#nonemptystring)
      * Subnets
        * items [NonEmptyString](#nonemptystring)
      * VpcId
  * AwsDynamoDbTable
    * AttributeDefinitions
      * items [AwsDynamoDbTableAttributeDefinition](#awsdynamodbtableattributedefinition)
    * BillingModeSummary
      * BillingMode
      * LastUpdateToPayPerRequestDateTime
    * CreationDateTime
    * GlobalSecondaryIndexes
      * items [AwsDynamoDbTableGlobalSecondaryIndex](#awsdynamodbtableglobalsecondaryindex)
    * GlobalTableVersion
    * ItemCount
    * KeySchema
      * items [AwsDynamoDbTableKeySchema](#awsdynamodbtablekeyschema)
    * LatestStreamArn
    * LatestStreamLabel
    * LocalSecondaryIndexes
      * items [AwsDynamoDbTableLocalSecondaryIndex](#awsdynamodbtablelocalsecondaryindex)
    * ProvisionedThroughput
      * LastDecreaseDateTime
      * LastIncreaseDateTime
      * NumberOfDecreasesToday
      * ReadCapacityUnits
      * WriteCapacityUnits
    * Replicas
      * items [AwsDynamoDbTableReplica](#awsdynamodbtablereplica)
    * RestoreSummary
      * RestoreDateTime
      * RestoreInProgress
      * SourceBackupArn
      * SourceTableArn
    * SseDescription
      * InaccessibleEncryptionDateTime
      * KmsMasterKeyArn
      * SseType
      * Status
    * StreamSpecification
      * StreamEnabled
      * StreamViewType
    * TableId
    * TableName
    * TableSizeBytes
    * TableStatus
  * AwsEc2Eip
    * AllocationId
    * AssociationId
    * Domain
    * InstanceId
    * NetworkBorderGroup
    * NetworkInterfaceId
    * NetworkInterfaceOwnerId
    * PrivateIpAddress
    * PublicIp
    * PublicIpv4Pool
  * AwsEc2Instance
    * IamInstanceProfileArn
    * ImageId
    * IpV4Addresses
      * items [NonEmptyString](#nonemptystring)
    * IpV6Addresses
      * items [NonEmptyString](#nonemptystring)
    * KeyName
    * LaunchedAt
    * SubnetId
    * Type
    * VpcId
  * AwsEc2NetworkInterface
    * Attachment
      * AttachTime
      * AttachmentId
      * DeleteOnTermination
      * DeviceIndex
      * InstanceId
      * InstanceOwnerId
      * Status
    * NetworkInterfaceId
    * SecurityGroups
      * items [AwsEc2NetworkInterfaceSecurityGroup](#awsec2networkinterfacesecuritygroup)
    * SourceDestCheck
  * AwsEc2SecurityGroup
    * GroupId
    * GroupName
    * IpPermissions
      * items [AwsEc2SecurityGroupIpPermission](#awsec2securitygroupippermission)
    * IpPermissionsEgress
      * items [AwsEc2SecurityGroupIpPermission](#awsec2securitygroupippermission)
    * OwnerId
    * VpcId
  * AwsEc2Volume
    * Attachments
      * items [AwsEc2VolumeAttachment](#awsec2volumeattachment)
    * CreateTime
    * Encrypted
    * KmsKeyId
    * Size
    * SnapshotId
    * Status
  * AwsEc2Vpc
    * CidrBlockAssociationSet
      * items [CidrBlockAssociation](#cidrblockassociation)
    * DhcpOptionsId
    * Ipv6CidrBlockAssociationSet
      * items [Ipv6CidrBlockAssociation](#ipv6cidrblockassociation)
    * State
  * AwsElasticsearchDomain
    * AccessPolicies
    * DomainEndpointOptions
      * EnforceHTTPS
      * TLSSecurityPolicy
    * DomainId
    * DomainName
    * ElasticsearchVersion
    * EncryptionAtRestOptions
      * Enabled
      * KmsKeyId
    * Endpoint
    * Endpoints
    * NodeToNodeEncryptionOptions
      * Enabled
    * VPCOptions
      * AvailabilityZones
        * items [NonEmptyString](#nonemptystring)
      * SecurityGroupIds
        * items [NonEmptyString](#nonemptystring)
      * SubnetIds
        * items [NonEmptyString](#nonemptystring)
      * VPCId
  * AwsElbLoadBalancer
    * AvailabilityZones
      * items [NonEmptyString](#nonemptystring)
    * BackendServerDescriptions
      * items [AwsElbLoadBalancerBackendServerDescription](#awselbloadbalancerbackendserverdescription)
    * CanonicalHostedZoneName
    * CanonicalHostedZoneNameID
    * CreatedTime
    * DnsName
    * HealthCheck
      * HealthyThreshold
      * Interval
      * Target
      * Timeout
      * UnhealthyThreshold
    * Instances
      * items [AwsElbLoadBalancerInstance](#awselbloadbalancerinstance)
    * ListenerDescriptions
      * items [AwsElbLoadBalancerListenerDescription](#awselbloadbalancerlistenerdescription)
    * LoadBalancerAttributes
      * AccessLog
        * EmitInterval
        * Enabled
        * S3BucketName
        * S3BucketPrefix
      * ConnectionDraining
        * Enabled
        * Timeout
      * ConnectionSettings
        * IdleTimeout
      * CrossZoneLoadBalancing
        * Enabled
    * LoadBalancerName
    * Policies
      * AppCookieStickinessPolicies
        * items [AwsElbAppCookieStickinessPolicy](#awselbappcookiestickinesspolicy)
      * LbCookieStickinessPolicies
        * items [AwsElbLbCookieStickinessPolicy](#awselblbcookiestickinesspolicy)
      * OtherPolicies
        * items [NonEmptyString](#nonemptystring)
    * Scheme
    * SecurityGroups
      * items [NonEmptyString](#nonemptystring)
    * SourceSecurityGroup
      * GroupName
      * OwnerAlias
    * Subnets
      * items [NonEmptyString](#nonemptystring)
    * VpcId
  * AwsElbv2LoadBalancer
    * AvailabilityZones
      * items [AvailabilityZone](#availabilityzone)
    * CanonicalHostedZoneId
    * CreatedTime
    * DNSName
    * IpAddressType
    * Scheme
    * SecurityGroups
      * items [NonEmptyString](#nonemptystring)
    * State
      * Code
      * Reason
    * Type
    * VpcId
  * AwsIamAccessKey
    * AccessKeyId
    * AccountId
    * CreatedAt
    * PrincipalId
    * PrincipalName
    * PrincipalType
    * SessionContext
      * Attributes
        * CreationDate
        * MfaAuthenticated
      * SessionIssuer
        * AccountId
        * Arn
        * PrincipalId
        * Type
        * UserName
    * Status
    * UserName
  * AwsIamGroup
    * AttachedManagedPolicies
      * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)
    * CreateDate
    * GroupId
    * GroupName
    * GroupPolicyList
      * items [AwsIamGroupPolicy](#awsiamgrouppolicy)
    * Path
  * AwsIamPolicy
    * AttachmentCount
    * CreateDate
    * DefaultVersionId
    * Description
    * IsAttachable
    * Path
    * PermissionsBoundaryUsageCount
    * PolicyId
    * PolicyName
    * PolicyVersionList
      * items [AwsIamPolicyVersion](#awsiampolicyversion)
    * UpdateDate
  * AwsIamRole
    * AssumeRolePolicyDocument
    * AttachedManagedPolicies
      * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)
    * CreateDate
    * InstanceProfileList
      * items [AwsIamInstanceProfile](#awsiaminstanceprofile)
    * MaxSessionDuration
    * Path
    * PermissionsBoundary [AwsIamPermissionsBoundary](#awsiampermissionsboundary)
    * RoleId
    * RoleName
    * RolePolicyList
      * items [AwsIamRolePolicy](#awsiamrolepolicy)
  * AwsIamUser
    * AttachedManagedPolicies
      * items [AwsIamAttachedManagedPolicy](#awsiamattachedmanagedpolicy)
    * CreateDate
    * GroupList
      * items [NonEmptyString](#nonemptystring)
    * Path
    * PermissionsBoundary
      * PermissionsBoundaryArn
      * PermissionsBoundaryType
    * UserId
    * UserName
    * UserPolicyList
      * items [AwsIamUserPolicy](#awsiamuserpolicy)
  * AwsKmsKey
    * AWSAccountId
    * CreationDate
    * Description
    * KeyId
    * KeyManager
    * KeyState
    * Origin
  * AwsLambdaFunction
    * Code
      * S3Bucket
      * S3Key
      * S3ObjectVersion
      * ZipFile
    * CodeSha256
    * DeadLetterConfig
      * TargetArn
    * Environment
      * Error
        * ErrorCode
        * Message
      * Variables
    * FunctionName
    * Handler
    * KmsKeyArn
    * LastModified
    * Layers
      * items [AwsLambdaFunctionLayer](#awslambdafunctionlayer)
    * MasterArn
    * MemorySize
    * RevisionId
    * Role
    * Runtime
    * Timeout
    * TracingConfig
      * Mode
    * Version
    * VpcConfig
      * SecurityGroupIds
        * items [NonEmptyString](#nonemptystring)
      * SubnetIds
        * items [NonEmptyString](#nonemptystring)
      * VpcId
  * AwsLambdaLayerVersion
    * CompatibleRuntimes
      * items [NonEmptyString](#nonemptystring)
    * CreatedDate
    * Version
  * AwsRdsDbCluster
    * ActivityStreamStatus
    * AllocatedStorage
    * AssociatedRoles
      * items [AwsRdsDbClusterAssociatedRole](#awsrdsdbclusterassociatedrole)
    * AvailabilityZones
      * items [NonEmptyString](#nonemptystring)
    * BackupRetentionPeriod
    * ClusterCreateTime
    * CopyTagsToSnapshot
    * CrossAccountClone
    * CustomEndpoints
      * items [NonEmptyString](#nonemptystring)
    * DatabaseName
    * DbClusterIdentifier
    * DbClusterMembers
      * items [AwsRdsDbClusterMember](#awsrdsdbclustermember)
    * DbClusterOptionGroupMemberships
      * items [AwsRdsDbClusterOptionGroupMembership](#awsrdsdbclusteroptiongroupmembership)
    * DbClusterParameterGroup
    * DbClusterResourceId
    * DbSubnetGroup
    * DeletionProtection
    * DomainMemberships
      * items [AwsRdsDbDomainMembership](#awsrdsdbdomainmembership)
    * EnabledCloudWatchLogsExports
      * items [NonEmptyString](#nonemptystring)
    * Endpoint
    * Engine
    * EngineMode
    * EngineVersion
    * HostedZoneId
    * HttpEndpointEnabled
    * IamDatabaseAuthenticationEnabled
    * KmsKeyId
    * MasterUsername
    * MultiAz
    * Port
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * ReadReplicaIdentifiers
      * items [NonEmptyString](#nonemptystring)
    * ReaderEndpoint
    * Status
    * StorageEncrypted
    * VpcSecurityGroups
      * items [AwsRdsDbInstanceVpcSecurityGroup](#awsrdsdbinstancevpcsecuritygroup)
  * AwsRdsDbClusterSnapshot
    * AllocatedStorage
    * AvailabilityZones
      * items [NonEmptyString](#nonemptystring)
    * ClusterCreateTime
    * DbClusterIdentifier
    * DbClusterSnapshotIdentifier
    * Engine
    * EngineVersion
    * IamDatabaseAuthenticationEnabled
    * KmsKeyId
    * LicenseModel
    * MasterUsername
    * PercentProgress
    * Port
    * SnapshotCreateTime
    * SnapshotType
    * Status
    * StorageEncrypted
    * VpcId
  * AwsRdsDbInstance
    * AllocatedStorage
    * AssociatedRoles
      * items [AwsRdsDbInstanceAssociatedRole](#awsrdsdbinstanceassociatedrole)
    * AutoMinorVersionUpgrade
    * AvailabilityZone
    * BackupRetentionPeriod
    * CACertificateIdentifier
    * CharacterSetName
    * CopyTagsToSnapshot
    * DBClusterIdentifier
    * DBInstanceClass
    * DBInstanceIdentifier
    * DBName
    * DbInstancePort
    * DbInstanceStatus
    * DbParameterGroups
      * items [AwsRdsDbParameterGroup](#awsrdsdbparametergroup)
    * DbSecurityGroups
      * items [NonEmptyString](#nonemptystring)
    * DbSubnetGroup
      * DbSubnetGroupArn
      * DbSubnetGroupDescription
      * DbSubnetGroupName
      * SubnetGroupStatus
      * Subnets
        * items [AwsRdsDbSubnetGroupSubnet](#awsrdsdbsubnetgroupsubnet)
      * VpcId
    * DbiResourceId
    * DeletionProtection
    * DomainMemberships
      * items [AwsRdsDbDomainMembership](#awsrdsdbdomainmembership)
    * EnabledCloudWatchLogsExports
      * items [NonEmptyString](#nonemptystring)
    * Endpoint
      * Address
      * HostedZoneId
      * Port
    * Engine
    * EngineVersion
    * EnhancedMonitoringResourceArn
    * IAMDatabaseAuthenticationEnabled
    * InstanceCreateTime
    * Iops
    * KmsKeyId
    * LatestRestorableTime
    * LicenseModel
    * ListenerEndpoint [AwsRdsDbInstanceEndpoint](#awsrdsdbinstanceendpoint)
    * MasterUsername
    * MaxAllocatedStorage
    * MonitoringInterval
    * MonitoringRoleArn
    * MultiAz
    * OptionGroupMemberships
      * items [AwsRdsDbOptionGroupMembership](#awsrdsdboptiongroupmembership)
    * PendingModifiedValues
      * AllocatedStorage
      * BackupRetentionPeriod
      * CaCertificateIdentifier
      * DbInstanceClass
      * DbInstanceIdentifier
      * DbSubnetGroupName
      * EngineVersion
      * Iops
      * LicenseModel
      * MasterUserPassword
      * MultiAZ
      * PendingCloudWatchLogsExports
        * LogTypesToDisable
          * items [NonEmptyString](#nonemptystring)
        * LogTypesToEnable
          * items [NonEmptyString](#nonemptystring)
      * Port
      * ProcessorFeatures
        * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
      * StorageType
    * PerformanceInsightsEnabled
    * PerformanceInsightsKmsKeyId
    * PerformanceInsightsRetentionPeriod
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * ProcessorFeatures
      * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
    * PromotionTier
    * PubliclyAccessible
    * ReadReplicaDBClusterIdentifiers
      * items [NonEmptyString](#nonemptystring)
    * ReadReplicaDBInstanceIdentifiers
      * items [NonEmptyString](#nonemptystring)
    * ReadReplicaSourceDBInstanceIdentifier
    * SecondaryAvailabilityZone
    * StatusInfos
      * items [AwsRdsDbStatusInfo](#awsrdsdbstatusinfo)
    * StorageEncrypted
    * StorageType
    * TdeCredentialArn
    * Timezone
    * VpcSecurityGroups
      * items [AwsRdsDbInstanceVpcSecurityGroup](#awsrdsdbinstancevpcsecuritygroup)
  * AwsRdsDbSnapshot
    * AllocatedStorage
    * AvailabilityZone
    * DbInstanceIdentifier
    * DbSnapshotIdentifier
    * DbiResourceId
    * Encrypted
    * Engine
    * EngineVersion
    * IamDatabaseAuthenticationEnabled
    * InstanceCreateTime
    * Iops
    * KmsKeyId
    * LicenseModel
    * MasterUsername
    * OptionGroupName
    * PercentProgress
    * Port
    * ProcessorFeatures
      * items [AwsRdsDbProcessorFeature](#awsrdsdbprocessorfeature)
    * SnapshotCreateTime
    * SnapshotType
    * SourceDbSnapshotIdentifier
    * SourceRegion
    * Status
    * StorageType
    * TdeCredentialArn
    * Timezone
    * VpcId
  * AwsRedshiftCluster
    * AllowVersionUpgrade
    * AutomatedSnapshotRetentionPeriod
    * AvailabilityZone
    * ClusterAvailabilityStatus
    * ClusterCreateTime
    * ClusterIdentifier
    * ClusterNodes
      * items [AwsRedshiftClusterClusterNode](#awsredshiftclusterclusternode)
    * ClusterParameterGroups
      * items [AwsRedshiftClusterClusterParameterGroup](#awsredshiftclusterclusterparametergroup)
    * ClusterPublicKey
    * ClusterRevisionNumber
    * ClusterSecurityGroups
      * items [AwsRedshiftClusterClusterSecurityGroup](#awsredshiftclusterclustersecuritygroup)
    * ClusterSnapshotCopyStatus
      * DestinationRegion
      * ManualSnapshotRetentionPeriod
      * RetentionPeriod
      * SnapshotCopyGrantName
    * ClusterStatus
    * ClusterSubnetGroupName
    * ClusterVersion
    * DBName
    * DeferredMaintenanceWindows
      * items [AwsRedshiftClusterDeferredMaintenanceWindow](#awsredshiftclusterdeferredmaintenancewindow)
    * ElasticIpStatus
      * ElasticIp
      * Status
    * ElasticResizeNumberOfNodeOptions
    * Encrypted
    * Endpoint
      * Address
      * Port
    * EnhancedVpcRouting
    * ExpectedNextSnapshotScheduleTime
    * ExpectedNextSnapshotScheduleTimeStatus
    * HsmStatus
      * HsmClientCertificateIdentifier
      * HsmConfigurationIdentifier
      * Status
    * IamRoles
      * items [AwsRedshiftClusterIamRole](#awsredshiftclusteriamrole)
    * KmsKeyId
    * MaintenanceTrackName
    * ManualSnapshotRetentionPeriod
    * MasterUsername
    * NextMaintenanceWindowStartTime
    * NodeType
    * NumberOfNodes
    * PendingActions
      * items [NonEmptyString](#nonemptystring)
    * PendingModifiedValues
      * AutomatedSnapshotRetentionPeriod
      * ClusterIdentifier
      * ClusterType
      * ClusterVersion
      * EncryptionType
      * EnhancedVpcRouting
      * MaintenanceTrackName
      * MasterUserPassword
      * NodeType
      * NumberOfNodes
      * PubliclyAccessible
    * PreferredMaintenanceWindow
    * PubliclyAccessible
    * ResizeInfo
      * AllowCancelResize
      * ResizeType
    * RestoreStatus
      * CurrentRestoreRateInMegaBytesPerSecond
      * ElapsedTimeInSeconds
      * EstimatedTimeToCompletionInSeconds
      * ProgressInMegaBytes
      * SnapshotSizeInMegaBytes
      * Status
    * SnapshotScheduleIdentifier
    * SnapshotScheduleState
    * VpcId
    * VpcSecurityGroups
      * items [AwsRedshiftClusterVpcSecurityGroup](#awsredshiftclustervpcsecuritygroup)
  * AwsS3Bucket
    * CreatedAt
    * OwnerId
    * OwnerName
    * ServerSideEncryptionConfiguration
      * Rules
        * items [AwsS3BucketServerSideEncryptionRule](#awss3bucketserversideencryptionrule)
  * AwsS3Object
    * ContentType
    * ETag
    * LastModified
    * SSEKMSKeyId
    * ServerSideEncryption
    * VersionId
  * AwsSecretsManagerSecret
    * Deleted
    * Description
    * KmsKeyId
    * Name
    * RotationEnabled
    * RotationLambdaArn
    * RotationOccurredWithinFrequency
    * RotationRules
      * AutomaticallyAfterDays
  * AwsSnsTopic
    * KmsMasterKeyId
    * Owner
    * Subscription
      * items [AwsSnsTopicSubscription](#awssnstopicsubscription)
    * TopicName
  * AwsSqsQueue
    * DeadLetterTargetArn
    * KmsDataKeyReusePeriodSeconds
    * KmsMasterKeyId
    * QueueName
  * AwsWafWebAcl
    * DefaultAction
    * Name
    * Rules
      * items [AwsWafWebAclRule](#awswafwebaclrule)
    * WebAclId
  * Container
    * ImageId
    * ImageName
    * LaunchedAt
    * Name
  * Other

### ResourceList
* ResourceList `array`
  * items [Resource](#resource)

### ResourceNotFoundException


### Result
* Result `object`: Details about the account that was not processed.
  * AccountId
  * ProcessingResult

### ResultList
* ResultList `array`
  * items [Result](#result)

### SecurityGroups
* SecurityGroups `array`
  * items [NonEmptyString](#nonemptystring)

### Severity
* Severity `object`: <p>The severity of the finding.</p> <p>The finding provider can provide the initial severity, but cannot update it after that. The severity can only be updated by a master account. It cannot be updated by a member account.</p> <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If only one of these attributes is populated, then Security Hub automatically populates the other one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is the preferred attribute.</p>
  * Label
  * Normalized
  * Original
  * Product

### SeverityLabel
* SeverityLabel `string` (values: INFORMATIONAL, LOW, MEDIUM, HIGH, CRITICAL)

### SeverityRating
* SeverityRating `string` (values: LOW, MEDIUM, HIGH, CRITICAL)

### SeverityUpdate
* SeverityUpdate `object`: Updates to the severity information for a finding.
  * Label
  * Normalized
  * Product

### SizeBytes
* SizeBytes `integer`

### SoftwarePackage
* SoftwarePackage `object`: Information about a software package.
  * Architecture
  * Epoch
  * Name
  * Release
  * Version

### SoftwarePackageList
* SoftwarePackageList `array`
  * items [SoftwarePackage](#softwarepackage)

### SortCriteria
* SortCriteria `array`
  * items [SortCriterion](#sortcriterion)

### SortCriterion
* SortCriterion `object`: A collection of finding attributes used to sort findings.
  * Field
  * SortOrder

### SortOrder
* SortOrder `string` (values: asc, desc)

### Standard
* Standard `object`: Provides information about a specific standard.
  * Description
  * EnabledByDefault
  * Name
  * StandardsArn

### Standards
* Standards `array`
  * items [Standard](#standard)

### StandardsControl
* StandardsControl `object`: Details for an individual security standard control.
  * ControlId
  * ControlStatus
  * ControlStatusUpdatedAt
  * Description
  * DisabledReason
  * RelatedRequirements
    * items [NonEmptyString](#nonemptystring)
  * RemediationUrl
  * SeverityRating
  * StandardsControlArn
  * Title

### StandardsControls
* StandardsControls `array`
  * items [StandardsControl](#standardscontrol)

### StandardsInputParameterMap
* StandardsInputParameterMap `object`

### StandardsStatus
* StandardsStatus `string` (values: PENDING, READY, FAILED, DELETING, INCOMPLETE)

### StandardsSubscription
* StandardsSubscription `object`: A resource that represents your subscription to a supported standard.
  * StandardsArn **required**
  * StandardsInput **required**
  * StandardsStatus **required**
  * StandardsSubscriptionArn **required**

### StandardsSubscriptionArns
* StandardsSubscriptionArns `array`
  * items [NonEmptyString](#nonemptystring)

### StandardsSubscriptionRequest
* StandardsSubscriptionRequest `object`: The standard that you want to enable.
  * StandardsArn **required**
  * StandardsInput

### StandardsSubscriptionRequests
* StandardsSubscriptionRequests `array`
  * items [StandardsSubscriptionRequest](#standardssubscriptionrequest)

### StandardsSubscriptions
* StandardsSubscriptions `array`
  * items [StandardsSubscription](#standardssubscription)

### StatusReason
* StatusReason `object`: Provides additional context for the value of <code>Compliance.Status</code>.
  * Description
  * ReasonCode **required**

### StatusReasonsList
* StatusReasonsList `array`
  * items [StatusReason](#statusreason)

### StringFilter
* StringFilter `object`: A string filter for querying findings.
  * Comparison
  * Value

### StringFilterComparison
* StringFilterComparison `string` (values: EQUALS, PREFIX, NOT_EQUALS, PREFIX_NOT_EQUALS)

### StringFilterList
* StringFilterList `array`
  * items [StringFilter](#stringfilter)

### StringList
* StringList `array`
  * items [NonEmptyString](#nonemptystring)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### ThreatIntelIndicator
* ThreatIntelIndicator `object`: Details about the threat intelligence related to a finding.
  * Category
  * LastObservedAt
  * Source
  * SourceUrl
  * Type
  * Value

### ThreatIntelIndicatorCategory
* ThreatIntelIndicatorCategory `string` (values: BACKDOOR, CARD_STEALER, COMMAND_AND_CONTROL, DROP_SITE, EXPLOIT_SITE, KEYLOGGER)

### ThreatIntelIndicatorList
* ThreatIntelIndicatorList `array`
  * items [ThreatIntelIndicator](#threatintelindicator)

### ThreatIntelIndicatorType
* ThreatIntelIndicatorType `string` (values: DOMAIN, EMAIL_ADDRESS, HASH_MD5, HASH_SHA1, HASH_SHA256, HASH_SHA512, IPV4_ADDRESS, IPV6_ADDRESS, MUTEX, PROCESS, URL)

### Timestamp
* Timestamp `string`

### TypeList
* TypeList `array`
  * items [NonEmptyString](#nonemptystring)

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateActionTargetRequest
* UpdateActionTargetRequest `object`
  * Description
  * Name

### UpdateActionTargetResponse
* UpdateActionTargetResponse `object`

### UpdateFindingsRequest
* UpdateFindingsRequest `object`
  * Filters **required**
    * AwsAccountId
      * items [StringFilter](#stringfilter)
    * CompanyName
      * items [StringFilter](#stringfilter)
    * ComplianceStatus
      * items [StringFilter](#stringfilter)
    * Confidence
      * items [NumberFilter](#numberfilter)
    * CreatedAt
      * items [DateFilter](#datefilter)
    * Criticality
      * items [NumberFilter](#numberfilter)
    * Description
      * items [StringFilter](#stringfilter)
    * FirstObservedAt
      * items [DateFilter](#datefilter)
    * GeneratorId
      * items [StringFilter](#stringfilter)
    * Id
      * items [StringFilter](#stringfilter)
    * Keyword
      * items [KeywordFilter](#keywordfilter)
    * LastObservedAt
      * items [DateFilter](#datefilter)
    * MalwareName
      * items [StringFilter](#stringfilter)
    * MalwarePath
      * items [StringFilter](#stringfilter)
    * MalwareState
      * items [StringFilter](#stringfilter)
    * MalwareType
      * items [StringFilter](#stringfilter)
    * NetworkDestinationDomain
      * items [StringFilter](#stringfilter)
    * NetworkDestinationIpV4
      * items [IpFilter](#ipfilter)
    * NetworkDestinationIpV6
      * items [IpFilter](#ipfilter)
    * NetworkDestinationPort
      * items [NumberFilter](#numberfilter)
    * NetworkDirection
      * items [StringFilter](#stringfilter)
    * NetworkProtocol
      * items [StringFilter](#stringfilter)
    * NetworkSourceDomain
      * items [StringFilter](#stringfilter)
    * NetworkSourceIpV4
      * items [IpFilter](#ipfilter)
    * NetworkSourceIpV6
      * items [IpFilter](#ipfilter)
    * NetworkSourceMac
      * items [StringFilter](#stringfilter)
    * NetworkSourcePort
      * items [NumberFilter](#numberfilter)
    * NoteText
      * items [StringFilter](#stringfilter)
    * NoteUpdatedAt
      * items [DateFilter](#datefilter)
    * NoteUpdatedBy
      * items [StringFilter](#stringfilter)
    * ProcessLaunchedAt
      * items [DateFilter](#datefilter)
    * ProcessName
      * items [StringFilter](#stringfilter)
    * ProcessParentPid
      * items [NumberFilter](#numberfilter)
    * ProcessPath
      * items [StringFilter](#stringfilter)
    * ProcessPid
      * items [NumberFilter](#numberfilter)
    * ProcessTerminatedAt
      * items [DateFilter](#datefilter)
    * ProductArn
      * items [StringFilter](#stringfilter)
    * ProductFields
      * items [MapFilter](#mapfilter)
    * ProductName
      * items [StringFilter](#stringfilter)
    * RecommendationText
      * items [StringFilter](#stringfilter)
    * RecordState
      * items [StringFilter](#stringfilter)
    * RelatedFindingsId
      * items [StringFilter](#stringfilter)
    * RelatedFindingsProductArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIamInstanceProfileArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceImageId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIpV4Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceIpV6Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceKeyName
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsEc2InstanceSubnetId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceType
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceVpcId
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyCreatedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsIamAccessKeyStatus
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyUserName
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerId
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerName
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageId
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageName
      * items [StringFilter](#stringfilter)
    * ResourceContainerLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceContainerName
      * items [StringFilter](#stringfilter)
    * ResourceDetailsOther
      * items [MapFilter](#mapfilter)
    * ResourceId
      * items [StringFilter](#stringfilter)
    * ResourcePartition
      * items [StringFilter](#stringfilter)
    * ResourceRegion
      * items [StringFilter](#stringfilter)
    * ResourceTags
      * items [MapFilter](#mapfilter)
    * ResourceType
      * items [StringFilter](#stringfilter)
    * SeverityLabel
      * items [StringFilter](#stringfilter)
    * SeverityNormalized
      * items [NumberFilter](#numberfilter)
    * SeverityProduct
      * items [NumberFilter](#numberfilter)
    * SourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorCategory
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorLastObservedAt
      * items [DateFilter](#datefilter)
    * ThreatIntelIndicatorSource
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorSourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorType
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorValue
      * items [StringFilter](#stringfilter)
    * Title
      * items [StringFilter](#stringfilter)
    * Type
      * items [StringFilter](#stringfilter)
    * UpdatedAt
      * items [DateFilter](#datefilter)
    * UserDefinedFields
      * items [MapFilter](#mapfilter)
    * VerificationState
      * items [StringFilter](#stringfilter)
    * WorkflowState
      * items [StringFilter](#stringfilter)
    * WorkflowStatus
      * items [StringFilter](#stringfilter)
  * Note
    * Text **required**
    * UpdatedBy **required**
  * RecordState

### UpdateFindingsResponse
* UpdateFindingsResponse `object`

### UpdateInsightRequest
* UpdateInsightRequest `object`
  * Filters
    * AwsAccountId
      * items [StringFilter](#stringfilter)
    * CompanyName
      * items [StringFilter](#stringfilter)
    * ComplianceStatus
      * items [StringFilter](#stringfilter)
    * Confidence
      * items [NumberFilter](#numberfilter)
    * CreatedAt
      * items [DateFilter](#datefilter)
    * Criticality
      * items [NumberFilter](#numberfilter)
    * Description
      * items [StringFilter](#stringfilter)
    * FirstObservedAt
      * items [DateFilter](#datefilter)
    * GeneratorId
      * items [StringFilter](#stringfilter)
    * Id
      * items [StringFilter](#stringfilter)
    * Keyword
      * items [KeywordFilter](#keywordfilter)
    * LastObservedAt
      * items [DateFilter](#datefilter)
    * MalwareName
      * items [StringFilter](#stringfilter)
    * MalwarePath
      * items [StringFilter](#stringfilter)
    * MalwareState
      * items [StringFilter](#stringfilter)
    * MalwareType
      * items [StringFilter](#stringfilter)
    * NetworkDestinationDomain
      * items [StringFilter](#stringfilter)
    * NetworkDestinationIpV4
      * items [IpFilter](#ipfilter)
    * NetworkDestinationIpV6
      * items [IpFilter](#ipfilter)
    * NetworkDestinationPort
      * items [NumberFilter](#numberfilter)
    * NetworkDirection
      * items [StringFilter](#stringfilter)
    * NetworkProtocol
      * items [StringFilter](#stringfilter)
    * NetworkSourceDomain
      * items [StringFilter](#stringfilter)
    * NetworkSourceIpV4
      * items [IpFilter](#ipfilter)
    * NetworkSourceIpV6
      * items [IpFilter](#ipfilter)
    * NetworkSourceMac
      * items [StringFilter](#stringfilter)
    * NetworkSourcePort
      * items [NumberFilter](#numberfilter)
    * NoteText
      * items [StringFilter](#stringfilter)
    * NoteUpdatedAt
      * items [DateFilter](#datefilter)
    * NoteUpdatedBy
      * items [StringFilter](#stringfilter)
    * ProcessLaunchedAt
      * items [DateFilter](#datefilter)
    * ProcessName
      * items [StringFilter](#stringfilter)
    * ProcessParentPid
      * items [NumberFilter](#numberfilter)
    * ProcessPath
      * items [StringFilter](#stringfilter)
    * ProcessPid
      * items [NumberFilter](#numberfilter)
    * ProcessTerminatedAt
      * items [DateFilter](#datefilter)
    * ProductArn
      * items [StringFilter](#stringfilter)
    * ProductFields
      * items [MapFilter](#mapfilter)
    * ProductName
      * items [StringFilter](#stringfilter)
    * RecommendationText
      * items [StringFilter](#stringfilter)
    * RecordState
      * items [StringFilter](#stringfilter)
    * RelatedFindingsId
      * items [StringFilter](#stringfilter)
    * RelatedFindingsProductArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIamInstanceProfileArn
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceImageId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceIpV4Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceIpV6Addresses
      * items [IpFilter](#ipfilter)
    * ResourceAwsEc2InstanceKeyName
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsEc2InstanceSubnetId
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceType
      * items [StringFilter](#stringfilter)
    * ResourceAwsEc2InstanceVpcId
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyCreatedAt
      * items [DateFilter](#datefilter)
    * ResourceAwsIamAccessKeyStatus
      * items [StringFilter](#stringfilter)
    * ResourceAwsIamAccessKeyUserName
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerId
      * items [StringFilter](#stringfilter)
    * ResourceAwsS3BucketOwnerName
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageId
      * items [StringFilter](#stringfilter)
    * ResourceContainerImageName
      * items [StringFilter](#stringfilter)
    * ResourceContainerLaunchedAt
      * items [DateFilter](#datefilter)
    * ResourceContainerName
      * items [StringFilter](#stringfilter)
    * ResourceDetailsOther
      * items [MapFilter](#mapfilter)
    * ResourceId
      * items [StringFilter](#stringfilter)
    * ResourcePartition
      * items [StringFilter](#stringfilter)
    * ResourceRegion
      * items [StringFilter](#stringfilter)
    * ResourceTags
      * items [MapFilter](#mapfilter)
    * ResourceType
      * items [StringFilter](#stringfilter)
    * SeverityLabel
      * items [StringFilter](#stringfilter)
    * SeverityNormalized
      * items [NumberFilter](#numberfilter)
    * SeverityProduct
      * items [NumberFilter](#numberfilter)
    * SourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorCategory
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorLastObservedAt
      * items [DateFilter](#datefilter)
    * ThreatIntelIndicatorSource
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorSourceUrl
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorType
      * items [StringFilter](#stringfilter)
    * ThreatIntelIndicatorValue
      * items [StringFilter](#stringfilter)
    * Title
      * items [StringFilter](#stringfilter)
    * Type
      * items [StringFilter](#stringfilter)
    * UpdatedAt
      * items [DateFilter](#datefilter)
    * UserDefinedFields
      * items [MapFilter](#mapfilter)
    * VerificationState
      * items [StringFilter](#stringfilter)
    * WorkflowState
      * items [StringFilter](#stringfilter)
    * WorkflowStatus
      * items [StringFilter](#stringfilter)
  * GroupByAttribute
  * Name

### UpdateInsightResponse
* UpdateInsightResponse `object`

### UpdateOrganizationConfigurationRequest
* UpdateOrganizationConfigurationRequest `object`
  * AutoEnable **required**

### UpdateOrganizationConfigurationResponse
* UpdateOrganizationConfigurationResponse `object`

### UpdateSecurityHubConfigurationRequest
* UpdateSecurityHubConfigurationRequest `object`
  * AutoEnableControls

### UpdateSecurityHubConfigurationResponse
* UpdateSecurityHubConfigurationResponse `object`

### UpdateStandardsControlRequest
* UpdateStandardsControlRequest `object`
  * ControlStatus
  * DisabledReason

### UpdateStandardsControlResponse
* UpdateStandardsControlResponse `object`

### VerificationState
* VerificationState `string` (values: UNKNOWN, TRUE_POSITIVE, FALSE_POSITIVE, BENIGN_POSITIVE)

### Vulnerability
* Vulnerability `object`: A vulnerability associated with a finding.
  * Cvss
    * items [Cvss](#cvss)
  * Id **required**
  * ReferenceUrls
    * items [NonEmptyString](#nonemptystring)
  * RelatedVulnerabilities
    * items [NonEmptyString](#nonemptystring)
  * Vendor
    * Name **required**
    * Url
    * VendorCreatedAt
    * VendorSeverity
    * VendorUpdatedAt
  * VulnerablePackages
    * items [SoftwarePackage](#softwarepackage)

### VulnerabilityList
* VulnerabilityList `array`
  * items [Vulnerability](#vulnerability)

### VulnerabilityVendor
* VulnerabilityVendor `object`: A vendor that generates a vulnerability report.
  * Name **required**
  * Url
  * VendorCreatedAt
  * VendorSeverity
  * VendorUpdatedAt

### WafAction
* WafAction `object`: Details about the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule. 
  * Type

### WafExcludedRule
* WafExcludedRule `object`: Details about a rule to exclude from a rule group.
  * RuleId

### WafExcludedRuleList
* WafExcludedRuleList `array`
  * items [WafExcludedRule](#wafexcludedrule)

### WafOverrideAction
* WafOverrideAction `object`: Details about an override action for a rule.
  * Type

### Workflow
* Workflow `object`: Provides information about the status of the investigation into a finding.
  * Status

### WorkflowState
* WorkflowState `string` (values: NEW, ASSIGNED, IN_PROGRESS, DEFERRED, RESOLVED): This field is deprecated, use Workflow.Status instead.

### WorkflowStatus
* WorkflowStatus `string` (values: NEW, NOTIFIED, RESOLVED, SUPPRESSED)

### WorkflowUpdate
* WorkflowUpdate `object`: Used to update information about the investigation into the finding.
  * Status


