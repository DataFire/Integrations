# @datafire/amazonaws_inspector

Client library for Amazon Inspector

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_inspector
```
```js
let amazonaws_inspector = require('@datafire/amazonaws_inspector').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_inspector.AddAttributesToFindings({
  "findingArns": [],
  "attributes": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Inspector</fullname> <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to identify potential security issues. For more information, see <a href="http://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User Guide</a>.</p>

## Actions

### AddAttributesToFindings



```js
amazonaws_inspector.AddAttributesToFindings({
  "findingArns": [],
  "attributes": []
}, context)
```

#### Input
* input `object`
  * attributes **required** [UserAttributeList](#userattributelist)
  * findingArns **required** [AddRemoveAttributesFindingArnList](#addremoveattributesfindingarnlist)

#### Output
* output [AddAttributesToFindingsResponse](#addattributestofindingsresponse)

### CreateAssessmentTarget



```js
amazonaws_inspector.CreateAssessmentTarget({
  "assessmentTargetName": ""
}, context)
```

#### Input
* input `object`
  * assessmentTargetName **required** [AssessmentTargetName](#assessmenttargetname)
  * resourceGroupArn [Arn](#arn)

#### Output
* output [CreateAssessmentTargetResponse](#createassessmenttargetresponse)

### CreateAssessmentTemplate



```js
amazonaws_inspector.CreateAssessmentTemplate({
  "assessmentTargetArn": "",
  "assessmentTemplateName": "",
  "durationInSeconds": 0,
  "rulesPackageArns": []
}, context)
```

#### Input
* input `object`
  * assessmentTargetArn **required** [Arn](#arn)
  * assessmentTemplateName **required** [AssessmentTemplateName](#assessmenttemplatename)
  * durationInSeconds **required** [AssessmentRunDuration](#assessmentrunduration)
  * rulesPackageArns **required** [AssessmentTemplateRulesPackageArnList](#assessmenttemplaterulespackagearnlist)
  * userAttributesForFindings [UserAttributeList](#userattributelist)

#### Output
* output [CreateAssessmentTemplateResponse](#createassessmenttemplateresponse)

### CreateResourceGroup



```js
amazonaws_inspector.CreateResourceGroup({
  "resourceGroupTags": []
}, context)
```

#### Input
* input `object`
  * resourceGroupTags **required** [ResourceGroupTags](#resourcegrouptags)

#### Output
* output [CreateResourceGroupResponse](#createresourcegroupresponse)

### DeleteAssessmentRun



```js
amazonaws_inspector.DeleteAssessmentRun({
  "assessmentRunArn": ""
}, context)
```

#### Input
* input `object`
  * assessmentRunArn **required** [Arn](#arn)

#### Output
*Output schema unknown*

### DeleteAssessmentTarget



```js
amazonaws_inspector.DeleteAssessmentTarget({
  "assessmentTargetArn": ""
}, context)
```

#### Input
* input `object`
  * assessmentTargetArn **required** [Arn](#arn)

#### Output
*Output schema unknown*

### DeleteAssessmentTemplate



```js
amazonaws_inspector.DeleteAssessmentTemplate({
  "assessmentTemplateArn": ""
}, context)
```

#### Input
* input `object`
  * assessmentTemplateArn **required** [Arn](#arn)

#### Output
*Output schema unknown*

### DescribeAssessmentRuns



```js
amazonaws_inspector.DescribeAssessmentRuns({
  "assessmentRunArns": []
}, context)
```

#### Input
* input `object`
  * assessmentRunArns **required** [BatchDescribeArnList](#batchdescribearnlist)

#### Output
* output [DescribeAssessmentRunsResponse](#describeassessmentrunsresponse)

### DescribeAssessmentTargets



```js
amazonaws_inspector.DescribeAssessmentTargets({
  "assessmentTargetArns": []
}, context)
```

#### Input
* input `object`
  * assessmentTargetArns **required** [BatchDescribeArnList](#batchdescribearnlist)

#### Output
* output [DescribeAssessmentTargetsResponse](#describeassessmenttargetsresponse)

### DescribeAssessmentTemplates



```js
amazonaws_inspector.DescribeAssessmentTemplates({
  "assessmentTemplateArns": []
}, context)
```

#### Input
* input `object`
  * assessmentTemplateArns **required** [BatchDescribeArnList](#batchdescribearnlist)

#### Output
* output [DescribeAssessmentTemplatesResponse](#describeassessmenttemplatesresponse)

### DescribeCrossAccountAccessRole



```js
amazonaws_inspector.DescribeCrossAccountAccessRole({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeCrossAccountAccessRoleResponse](#describecrossaccountaccessroleresponse)

### DescribeFindings



```js
amazonaws_inspector.DescribeFindings({
  "findingArns": []
}, context)
```

#### Input
* input `object`
  * findingArns **required** [BatchDescribeArnList](#batchdescribearnlist)
  * locale [Locale](#locale)

#### Output
* output [DescribeFindingsResponse](#describefindingsresponse)

### DescribeResourceGroups



```js
amazonaws_inspector.DescribeResourceGroups({
  "resourceGroupArns": []
}, context)
```

#### Input
* input `object`
  * resourceGroupArns **required** [BatchDescribeArnList](#batchdescribearnlist)

#### Output
* output [DescribeResourceGroupsResponse](#describeresourcegroupsresponse)

### DescribeRulesPackages



```js
amazonaws_inspector.DescribeRulesPackages({
  "rulesPackageArns": []
}, context)
```

#### Input
* input `object`
  * locale [Locale](#locale)
  * rulesPackageArns **required** [BatchDescribeArnList](#batchdescribearnlist)

#### Output
* output [DescribeRulesPackagesResponse](#describerulespackagesresponse)

### GetAssessmentReport



```js
amazonaws_inspector.GetAssessmentReport({
  "assessmentRunArn": "",
  "reportFileFormat": "",
  "reportType": ""
}, context)
```

#### Input
* input `object`
  * assessmentRunArn **required** [Arn](#arn)
  * reportFileFormat **required** [ReportFileFormat](#reportfileformat)
  * reportType **required** [ReportType](#reporttype)

#### Output
* output [GetAssessmentReportResponse](#getassessmentreportresponse)

### GetTelemetryMetadata



```js
amazonaws_inspector.GetTelemetryMetadata({
  "assessmentRunArn": ""
}, context)
```

#### Input
* input `object`
  * assessmentRunArn **required** [Arn](#arn)

#### Output
* output [GetTelemetryMetadataResponse](#gettelemetrymetadataresponse)

### ListAssessmentRunAgents



```js
amazonaws_inspector.ListAssessmentRunAgents({
  "assessmentRunArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentRunArn **required** [Arn](#arn)
  * filter [AgentFilter](#agentfilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListAssessmentRunAgentsResponse](#listassessmentrunagentsresponse)

### ListAssessmentRuns



```js
amazonaws_inspector.ListAssessmentRuns({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentTemplateArns [ListParentArnList](#listparentarnlist)
  * filter [AssessmentRunFilter](#assessmentrunfilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListAssessmentRunsResponse](#listassessmentrunsresponse)

### ListAssessmentTargets



```js
amazonaws_inspector.ListAssessmentTargets({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter [AssessmentTargetFilter](#assessmenttargetfilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListAssessmentTargetsResponse](#listassessmenttargetsresponse)

### ListAssessmentTemplates



```js
amazonaws_inspector.ListAssessmentTemplates({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentTargetArns [ListParentArnList](#listparentarnlist)
  * filter [AssessmentTemplateFilter](#assessmenttemplatefilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListAssessmentTemplatesResponse](#listassessmenttemplatesresponse)

### ListEventSubscriptions



```js
amazonaws_inspector.ListEventSubscriptions({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [ListEventSubscriptionsMaxResults](#listeventsubscriptionsmaxresults)
  * nextToken [PaginationToken](#paginationtoken)
  * resourceArn [Arn](#arn)

#### Output
* output [ListEventSubscriptionsResponse](#listeventsubscriptionsresponse)

### ListFindings



```js
amazonaws_inspector.ListFindings({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * assessmentRunArns [ListParentArnList](#listparentarnlist)
  * filter [FindingFilter](#findingfilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListFindingsResponse](#listfindingsresponse)

### ListRulesPackages



```js
amazonaws_inspector.ListRulesPackages({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListRulesPackagesResponse](#listrulespackagesresponse)

### ListTagsForResource



```js
amazonaws_inspector.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** [Arn](#arn)

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### PreviewAgents



```js
amazonaws_inspector.PreviewAgents({
  "previewAgentsArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [PreviewAgentsMaxResults](#previewagentsmaxresults)
  * nextToken [PaginationToken](#paginationtoken)
  * previewAgentsArn **required** [Arn](#arn)

#### Output
* output [PreviewAgentsResponse](#previewagentsresponse)

### RegisterCrossAccountAccessRole



```js
amazonaws_inspector.RegisterCrossAccountAccessRole({
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * roleArn **required** [Arn](#arn)

#### Output
*Output schema unknown*

### RemoveAttributesFromFindings



```js
amazonaws_inspector.RemoveAttributesFromFindings({
  "findingArns": [],
  "attributeKeys": []
}, context)
```

#### Input
* input `object`
  * attributeKeys **required** [UserAttributeKeyList](#userattributekeylist)
  * findingArns **required** [AddRemoveAttributesFindingArnList](#addremoveattributesfindingarnlist)

#### Output
* output [RemoveAttributesFromFindingsResponse](#removeattributesfromfindingsresponse)

### SetTagsForResource



```js
amazonaws_inspector.SetTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** [Arn](#arn)
  * tags [TagList](#taglist)

#### Output
*Output schema unknown*

### StartAssessmentRun



```js
amazonaws_inspector.StartAssessmentRun({
  "assessmentTemplateArn": ""
}, context)
```

#### Input
* input `object`
  * assessmentRunName [AssessmentRunName](#assessmentrunname)
  * assessmentTemplateArn **required** [Arn](#arn)

#### Output
* output [StartAssessmentRunResponse](#startassessmentrunresponse)

### StopAssessmentRun



```js
amazonaws_inspector.StopAssessmentRun({
  "assessmentRunArn": ""
}, context)
```

#### Input
* input `object`
  * assessmentRunArn **required** [Arn](#arn)
  * stopAction [StopAction](#stopaction)

#### Output
*Output schema unknown*

### SubscribeToEvent



```js
amazonaws_inspector.SubscribeToEvent({
  "resourceArn": "",
  "event": "",
  "topicArn": ""
}, context)
```

#### Input
* input `object`
  * event **required** [InspectorEvent](#inspectorevent)
  * resourceArn **required** [Arn](#arn)
  * topicArn **required** [Arn](#arn)

#### Output
*Output schema unknown*

### UnsubscribeFromEvent



```js
amazonaws_inspector.UnsubscribeFromEvent({
  "resourceArn": "",
  "event": "",
  "topicArn": ""
}, context)
```

#### Input
* input `object`
  * event **required** [InspectorEvent](#inspectorevent)
  * resourceArn **required** [Arn](#arn)
  * topicArn **required** [Arn](#arn)

#### Output
*Output schema unknown*

### UpdateAssessmentTarget



```js
amazonaws_inspector.UpdateAssessmentTarget({
  "assessmentTargetArn": "",
  "assessmentTargetName": ""
}, context)
```

#### Input
* input `object`
  * assessmentTargetArn **required** [Arn](#arn)
  * assessmentTargetName **required** [AssessmentTargetName](#assessmenttargetname)
  * resourceGroupArn [Arn](#arn)

#### Output
*Output schema unknown*



## Definitions

### AccessDeniedErrorCode
* AccessDeniedErrorCode `string` (values: ACCESS_DENIED_TO_ASSESSMENT_TARGET, ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE, ACCESS_DENIED_TO_ASSESSMENT_RUN, ACCESS_DENIED_TO_FINDING, ACCESS_DENIED_TO_RESOURCE_GROUP, ACCESS_DENIED_TO_RULES_PACKAGE, ACCESS_DENIED_TO_SNS_TOPIC, ACCESS_DENIED_TO_IAM_ROLE)

### AccessDeniedException
* AccessDeniedException `object`: You do not have required permissions to access the requested resource.
  * canRetry **required** [Bool](#bool)
  * errorCode **required** [AccessDeniedErrorCode](#accessdeniederrorcode)
  * message **required** [ErrorMessage](#errormessage)

### AddAttributesToFindingsRequest
* AddAttributesToFindingsRequest `object`
  * attributes **required** [UserAttributeList](#userattributelist)
  * findingArns **required** [AddRemoveAttributesFindingArnList](#addremoveattributesfindingarnlist)

### AddAttributesToFindingsResponse
* AddAttributesToFindingsResponse `object`
  * failedItems **required** [FailedItems](#faileditems)

### AddRemoveAttributesFindingArnList
* AddRemoveAttributesFindingArnList `array`
  * items [Arn](#arn)

### AgentAlreadyRunningAssessment
* AgentAlreadyRunningAssessment `object`: Used in the exception error that is thrown if you start an assessment run for an assessment target that includes an EC2 instance that is already participating in another started assessment run.
  * agentId **required** [AgentId](#agentid)
  * assessmentRunArn **required** [Arn](#arn)

### AgentAlreadyRunningAssessmentList
* AgentAlreadyRunningAssessmentList `array`
  * items [AgentAlreadyRunningAssessment](#agentalreadyrunningassessment)

### AgentFilter
* AgentFilter `object`: Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
  * agentHealthCodes **required** [AgentHealthCodeList](#agenthealthcodelist)
  * agentHealths **required** [AgentHealthList](#agenthealthlist)

### AgentHealth
* AgentHealth `string` (values: HEALTHY, UNHEALTHY, UNKNOWN)

### AgentHealthCode
* AgentHealthCode `string` (values: IDLE, RUNNING, SHUTDOWN, UNHEALTHY, THROTTLED, UNKNOWN)

### AgentHealthCodeList
* AgentHealthCodeList `array`
  * items [AgentHealthCode](#agenthealthcode)

### AgentHealthList
* AgentHealthList `array`
  * items [AgentHealth](#agenthealth)

### AgentId
* AgentId `string`

### AgentIdList
* AgentIdList `array`
  * items [AgentId](#agentid)

### AgentPreview
* AgentPreview `object`: Used as a response element in the <a>PreviewAgents</a> action.
  * agentHealth [AgentHealth](#agenthealth)
  * agentId **required** [AgentId](#agentid)
  * agentVersion [AgentVersion](#agentversion)
  * autoScalingGroup [AutoScalingGroup](#autoscalinggroup)
  * hostname [Hostname](#hostname)
  * ipv4Address [Ipv4Address](#ipv4address)
  * kernelVersion [KernelVersion](#kernelversion)
  * operatingSystem [OperatingSystem](#operatingsystem)

### AgentPreviewList
* AgentPreviewList `array`
  * items [AgentPreview](#agentpreview)

### AgentVersion
* AgentVersion `string`

### AgentsAlreadyRunningAssessmentException
* AgentsAlreadyRunningAssessmentException `object`: You started an assessment run, but one of the instances is already participating in another assessment run.
  * agents **required** [AgentAlreadyRunningAssessmentList](#agentalreadyrunningassessmentlist)
  * agentsTruncated **required** [Bool](#bool)
  * canRetry **required** [Bool](#bool)
  * message **required** [ErrorMessage](#errormessage)

### AmiId
* AmiId `string`

### Arn
* Arn `string`

### ArnCount
* ArnCount `integer`

### AssessmentRulesPackageArnList
* AssessmentRulesPackageArnList `array`
  * items [Arn](#arn)

### AssessmentRun
* AssessmentRun `object`: <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
  * arn **required** [Arn](#arn)
  * assessmentTemplateArn **required** [Arn](#arn)
  * completedAt [Timestamp](#timestamp)
  * createdAt **required** [Timestamp](#timestamp)
  * dataCollected **required** [Bool](#bool)
  * durationInSeconds **required** [AssessmentRunDuration](#assessmentrunduration)
  * findingCounts **required** [AssessmentRunFindingCounts](#assessmentrunfindingcounts)
  * name **required** [AssessmentRunName](#assessmentrunname)
  * notifications **required** [AssessmentRunNotificationList](#assessmentrunnotificationlist)
  * rulesPackageArns **required** [AssessmentRulesPackageArnList](#assessmentrulespackagearnlist)
  * startedAt [Timestamp](#timestamp)
  * state **required** [AssessmentRunState](#assessmentrunstate)
  * stateChangedAt **required** [Timestamp](#timestamp)
  * stateChanges **required** [AssessmentRunStateChangeList](#assessmentrunstatechangelist)
  * userAttributesForFindings **required** [UserAttributeList](#userattributelist)

### AssessmentRunAgent
* AssessmentRunAgent `object`: Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.
  * agentHealth **required** [AgentHealth](#agenthealth)
  * agentHealthCode **required** [AgentHealthCode](#agenthealthcode)
  * agentHealthDetails [Message](#message)
  * agentId **required** [AgentId](#agentid)
  * assessmentRunArn **required** [Arn](#arn)
  * autoScalingGroup [AutoScalingGroup](#autoscalinggroup)
  * telemetryMetadata **required** [TelemetryMetadataList](#telemetrymetadatalist)

### AssessmentRunAgentList
* AssessmentRunAgentList `array`
  * items [AssessmentRunAgent](#assessmentrunagent)

### AssessmentRunDuration
* AssessmentRunDuration `integer`

### AssessmentRunFilter
* AssessmentRunFilter `object`: Used as the request parameter in the <a>ListAssessmentRuns</a> action.
  * completionTimeRange [TimestampRange](#timestamprange)
  * durationRange [DurationRange](#durationrange)
  * namePattern [NamePattern](#namepattern)
  * rulesPackageArns [FilterRulesPackageArnList](#filterrulespackagearnlist)
  * startTimeRange [TimestampRange](#timestamprange)
  * stateChangeTimeRange [TimestampRange](#timestamprange)
  * states [AssessmentRunStateList](#assessmentrunstatelist)

### AssessmentRunFindingCounts
* AssessmentRunFindingCounts `array`
  * items `object`
    * key [Severity](#severity)
    * value [FindingCount](#findingcount)

### AssessmentRunInProgressArnList
* AssessmentRunInProgressArnList `array`
  * items [Arn](#arn)

### AssessmentRunInProgressException
* AssessmentRunInProgressException `object`: You cannot perform a specified action if an assessment run is currently in progress.
  * assessmentRunArns **required** [AssessmentRunInProgressArnList](#assessmentruninprogressarnlist)
  * assessmentRunArnsTruncated **required** [Bool](#bool)
  * canRetry **required** [Bool](#bool)
  * message **required** [ErrorMessage](#errormessage)

### AssessmentRunList
* AssessmentRunList `array`
  * items [AssessmentRun](#assessmentrun)

### AssessmentRunName
* AssessmentRunName `string`

### AssessmentRunNotification
* AssessmentRunNotification `object`: Used as one of the elements of the <a>AssessmentRun</a> data type.
  * date **required** [Timestamp](#timestamp)
  * error **required** [Bool](#bool)
  * event **required** [InspectorEvent](#inspectorevent)
  * message [Message](#message)
  * snsPublishStatusCode [AssessmentRunNotificationSnsStatusCode](#assessmentrunnotificationsnsstatuscode)
  * snsTopicArn [Arn](#arn)

### AssessmentRunNotificationList
* AssessmentRunNotificationList `array`
  * items [AssessmentRunNotification](#assessmentrunnotification)

### AssessmentRunNotificationSnsStatusCode
* AssessmentRunNotificationSnsStatusCode `string` (values: SUCCESS, TOPIC_DOES_NOT_EXIST, ACCESS_DENIED, INTERNAL_ERROR)

### AssessmentRunState
* AssessmentRunState `string` (values: CREATED, START_DATA_COLLECTION_PENDING, START_DATA_COLLECTION_IN_PROGRESS, COLLECTING_DATA, STOP_DATA_COLLECTION_PENDING, DATA_COLLECTED, START_EVALUATING_RULES_PENDING, EVALUATING_RULES, FAILED, ERROR, COMPLETED, COMPLETED_WITH_ERRORS, CANCELED)

### AssessmentRunStateChange
* AssessmentRunStateChange `object`: Used as one of the elements of the <a>AssessmentRun</a> data type.
  * state **required** [AssessmentRunState](#assessmentrunstate)
  * stateChangedAt **required** [Timestamp](#timestamp)

### AssessmentRunStateChangeList
* AssessmentRunStateChangeList `array`
  * items [AssessmentRunStateChange](#assessmentrunstatechange)

### AssessmentRunStateList
* AssessmentRunStateList `array`
  * items [AssessmentRunState](#assessmentrunstate)

### AssessmentTarget
* AssessmentTarget `object`: Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action.
  * arn **required** [Arn](#arn)
  * createdAt **required** [Timestamp](#timestamp)
  * name **required** [AssessmentTargetName](#assessmenttargetname)
  * resourceGroupArn [Arn](#arn)
  * updatedAt **required** [Timestamp](#timestamp)

### AssessmentTargetFilter
* AssessmentTargetFilter `object`: Used as the request parameter in the <a>ListAssessmentTargets</a> action.
  * assessmentTargetNamePattern [NamePattern](#namepattern)

### AssessmentTargetList
* AssessmentTargetList `array`
  * items [AssessmentTarget](#assessmenttarget)

### AssessmentTargetName
* AssessmentTargetName `string`

### AssessmentTemplate
* AssessmentTemplate `object`: Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.
  * arn **required** [Arn](#arn)
  * assessmentRunCount **required** [ArnCount](#arncount)
  * assessmentTargetArn **required** [Arn](#arn)
  * createdAt **required** [Timestamp](#timestamp)
  * durationInSeconds **required** [AssessmentRunDuration](#assessmentrunduration)
  * lastAssessmentRunArn [Arn](#arn)
  * name **required** [AssessmentTemplateName](#assessmenttemplatename)
  * rulesPackageArns **required** [AssessmentTemplateRulesPackageArnList](#assessmenttemplaterulespackagearnlist)
  * userAttributesForFindings **required** [UserAttributeList](#userattributelist)

### AssessmentTemplateFilter
* AssessmentTemplateFilter `object`: Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
  * durationRange [DurationRange](#durationrange)
  * namePattern [NamePattern](#namepattern)
  * rulesPackageArns [FilterRulesPackageArnList](#filterrulespackagearnlist)

### AssessmentTemplateList
* AssessmentTemplateList `array`
  * items [AssessmentTemplate](#assessmenttemplate)

### AssessmentTemplateName
* AssessmentTemplateName `string`

### AssessmentTemplateRulesPackageArnList
* AssessmentTemplateRulesPackageArnList `array`
  * items [Arn](#arn)

### AssetAttributes
* AssetAttributes `object`: A collection of attributes of the host from which the finding is generated.
  * agentId [AgentId](#agentid)
  * amiId [AmiId](#amiid)
  * autoScalingGroup [AutoScalingGroup](#autoscalinggroup)
  * hostname [Hostname](#hostname)
  * ipv4Addresses [Ipv4AddressList](#ipv4addresslist)
  * schemaVersion **required** [NumericVersion](#numericversion)

### AssetType
* AssetType `string` (values: ec2-instance)

### Attribute
* Attribute `object`: This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions.
  * key **required** [AttributeKey](#attributekey)
  * value [AttributeValue](#attributevalue)

### AttributeKey
* AttributeKey `string`

### AttributeList
* AttributeList `array`
  * items [Attribute](#attribute)

### AttributeValue
* AttributeValue `string`

### AutoScalingGroup
* AutoScalingGroup `string`

### AutoScalingGroupList
* AutoScalingGroupList `array`
  * items [AutoScalingGroup](#autoscalinggroup)

### BatchDescribeArnList
* BatchDescribeArnList `array`
  * items [Arn](#arn)

### Bool
* Bool `boolean`

### CreateAssessmentTargetRequest
* CreateAssessmentTargetRequest `object`
  * assessmentTargetName **required** [AssessmentTargetName](#assessmenttargetname)
  * resourceGroupArn [Arn](#arn)

### CreateAssessmentTargetResponse
* CreateAssessmentTargetResponse `object`
  * assessmentTargetArn **required** [Arn](#arn)

### CreateAssessmentTemplateRequest
* CreateAssessmentTemplateRequest `object`
  * assessmentTargetArn **required** [Arn](#arn)
  * assessmentTemplateName **required** [AssessmentTemplateName](#assessmenttemplatename)
  * durationInSeconds **required** [AssessmentRunDuration](#assessmentrunduration)
  * rulesPackageArns **required** [AssessmentTemplateRulesPackageArnList](#assessmenttemplaterulespackagearnlist)
  * userAttributesForFindings [UserAttributeList](#userattributelist)

### CreateAssessmentTemplateResponse
* CreateAssessmentTemplateResponse `object`
  * assessmentTemplateArn **required** [Arn](#arn)

### CreateResourceGroupRequest
* CreateResourceGroupRequest `object`
  * resourceGroupTags **required** [ResourceGroupTags](#resourcegrouptags)

### CreateResourceGroupResponse
* CreateResourceGroupResponse `object`
  * resourceGroupArn **required** [Arn](#arn)

### DeleteAssessmentRunRequest
* DeleteAssessmentRunRequest `object`
  * assessmentRunArn **required** [Arn](#arn)

### DeleteAssessmentTargetRequest
* DeleteAssessmentTargetRequest `object`
  * assessmentTargetArn **required** [Arn](#arn)

### DeleteAssessmentTemplateRequest
* DeleteAssessmentTemplateRequest `object`
  * assessmentTemplateArn **required** [Arn](#arn)

### DescribeAssessmentRunsRequest
* DescribeAssessmentRunsRequest `object`
  * assessmentRunArns **required** [BatchDescribeArnList](#batchdescribearnlist)

### DescribeAssessmentRunsResponse
* DescribeAssessmentRunsResponse `object`
  * assessmentRuns **required** [AssessmentRunList](#assessmentrunlist)
  * failedItems **required** [FailedItems](#faileditems)

### DescribeAssessmentTargetsRequest
* DescribeAssessmentTargetsRequest `object`
  * assessmentTargetArns **required** [BatchDescribeArnList](#batchdescribearnlist)

### DescribeAssessmentTargetsResponse
* DescribeAssessmentTargetsResponse `object`
  * assessmentTargets **required** [AssessmentTargetList](#assessmenttargetlist)
  * failedItems **required** [FailedItems](#faileditems)

### DescribeAssessmentTemplatesRequest
* DescribeAssessmentTemplatesRequest `object`
  * assessmentTemplateArns **required** [BatchDescribeArnList](#batchdescribearnlist)

### DescribeAssessmentTemplatesResponse
* DescribeAssessmentTemplatesResponse `object`
  * assessmentTemplates **required** [AssessmentTemplateList](#assessmenttemplatelist)
  * failedItems **required** [FailedItems](#faileditems)

### DescribeCrossAccountAccessRoleResponse
* DescribeCrossAccountAccessRoleResponse `object`
  * registeredAt **required** [Timestamp](#timestamp)
  * roleArn **required** [Arn](#arn)
  * valid **required** [Bool](#bool)

### DescribeFindingsRequest
* DescribeFindingsRequest `object`
  * findingArns **required** [BatchDescribeArnList](#batchdescribearnlist)
  * locale [Locale](#locale)

### DescribeFindingsResponse
* DescribeFindingsResponse `object`
  * failedItems **required** [FailedItems](#faileditems)
  * findings **required** [FindingList](#findinglist)

### DescribeResourceGroupsRequest
* DescribeResourceGroupsRequest `object`
  * resourceGroupArns **required** [BatchDescribeArnList](#batchdescribearnlist)

### DescribeResourceGroupsResponse
* DescribeResourceGroupsResponse `object`
  * failedItems **required** [FailedItems](#faileditems)
  * resourceGroups **required** [ResourceGroupList](#resourcegrouplist)

### DescribeRulesPackagesRequest
* DescribeRulesPackagesRequest `object`
  * locale [Locale](#locale)
  * rulesPackageArns **required** [BatchDescribeArnList](#batchdescribearnlist)

### DescribeRulesPackagesResponse
* DescribeRulesPackagesResponse `object`
  * failedItems **required** [FailedItems](#faileditems)
  * rulesPackages **required** [RulesPackageList](#rulespackagelist)

### DurationRange
* DurationRange `object`: This data type is used in the <a>AssessmentTemplateFilter</a> data type.
  * maxSeconds [AssessmentRunDuration](#assessmentrunduration)
  * minSeconds [AssessmentRunDuration](#assessmentrunduration)

### ErrorMessage
* ErrorMessage `string`

### EventSubscription
* EventSubscription `object`: This data type is used in the <a>Subscription</a> data type.
  * event **required** [InspectorEvent](#inspectorevent)
  * subscribedAt **required** [Timestamp](#timestamp)

### EventSubscriptionList
* EventSubscriptionList `array`
  * items [EventSubscription](#eventsubscription)

### FailedItemDetails
* FailedItemDetails `object`: Includes details about the failed items.
  * failureCode **required** [FailedItemErrorCode](#faileditemerrorcode)
  * retryable **required** [Bool](#bool)

### FailedItemErrorCode
* FailedItemErrorCode `string` (values: INVALID_ARN, DUPLICATE_ARN, ITEM_DOES_NOT_EXIST, ACCESS_DENIED, LIMIT_EXCEEDED, INTERNAL_ERROR)

### FailedItems
* FailedItems `array`
  * items `object`
    * key [Arn](#arn)
    * value [FailedItemDetails](#faileditemdetails)

### FilterRulesPackageArnList
* FilterRulesPackageArnList `array`
  * items [Arn](#arn)

### Finding
* Finding `object`: Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.
  * arn **required** [Arn](#arn)
  * assetAttributes [AssetAttributes](#assetattributes)
  * assetType [AssetType](#assettype)
  * attributes **required** [AttributeList](#attributelist)
  * confidence [IocConfidence](#iocconfidence)
  * createdAt **required** [Timestamp](#timestamp)
  * description [Text](#text)
  * id [FindingId](#findingid)
  * indicatorOfCompromise [Bool](#bool)
  * numericSeverity [NumericSeverity](#numericseverity)
  * recommendation [Text](#text)
  * schemaVersion [NumericVersion](#numericversion)
  * service [ServiceName](#servicename)
  * serviceAttributes [InspectorServiceAttributes](#inspectorserviceattributes)
  * severity [Severity](#severity)
  * title [Text](#text)
  * updatedAt **required** [Timestamp](#timestamp)
  * userAttributes **required** [UserAttributeList](#userattributelist)

### FindingCount
* FindingCount `integer`

### FindingFilter
* FindingFilter `object`: This data type is used as a request parameter in the <a>ListFindings</a> action.
  * agentIds [AgentIdList](#agentidlist)
  * attributes [AttributeList](#attributelist)
  * autoScalingGroups [AutoScalingGroupList](#autoscalinggrouplist)
  * creationTimeRange [TimestampRange](#timestamprange)
  * ruleNames [RuleNameList](#rulenamelist)
  * rulesPackageArns [FilterRulesPackageArnList](#filterrulespackagearnlist)
  * severities [SeverityList](#severitylist)
  * userAttributes [AttributeList](#attributelist)

### FindingId
* FindingId `string`

### FindingList
* FindingList `array`
  * items [Finding](#finding)

### GetAssessmentReportRequest
* GetAssessmentReportRequest `object`
  * assessmentRunArn **required** [Arn](#arn)
  * reportFileFormat **required** [ReportFileFormat](#reportfileformat)
  * reportType **required** [ReportType](#reporttype)

### GetAssessmentReportResponse
* GetAssessmentReportResponse `object`
  * status **required** [ReportStatus](#reportstatus)
  * url [Url](#url)

### GetTelemetryMetadataRequest
* GetTelemetryMetadataRequest `object`
  * assessmentRunArn **required** [Arn](#arn)

### GetTelemetryMetadataResponse
* GetTelemetryMetadataResponse `object`
  * telemetryMetadata **required** [TelemetryMetadataList](#telemetrymetadatalist)

### Hostname
* Hostname `string`

### InspectorEvent
* InspectorEvent `string` (values: ASSESSMENT_RUN_STARTED, ASSESSMENT_RUN_COMPLETED, ASSESSMENT_RUN_STATE_CHANGED, FINDING_REPORTED, OTHER)

### InspectorServiceAttributes
* InspectorServiceAttributes `object`: This data type is used in the <a>Finding</a> data type.
  * assessmentRunArn [Arn](#arn)
  * rulesPackageArn [Arn](#arn)
  * schemaVersion **required** [NumericVersion](#numericversion)

### InternalException
* InternalException `object`: Internal server error.
  * canRetry **required** [Bool](#bool)
  * message **required** [ErrorMessage](#errormessage)

### InvalidCrossAccountRoleErrorCode
* InvalidCrossAccountRoleErrorCode `string` (values: ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP, ROLE_DOES_NOT_HAVE_CORRECT_POLICY)

### InvalidCrossAccountRoleException
* InvalidCrossAccountRoleException `object`: Amazon Inspector cannot assume the cross-account role that it needs to list your EC2 instances during the assessment run.
  * canRetry **required** [Bool](#bool)
  * errorCode **required** [InvalidCrossAccountRoleErrorCode](#invalidcrossaccountroleerrorcode)
  * message **required** [ErrorMessage](#errormessage)

### InvalidInputErrorCode
* InvalidInputErrorCode `string` (values: INVALID_ASSESSMENT_TARGET_ARN, INVALID_ASSESSMENT_TEMPLATE_ARN, INVALID_ASSESSMENT_RUN_ARN, INVALID_FINDING_ARN, INVALID_RESOURCE_GROUP_ARN, INVALID_RULES_PACKAGE_ARN, INVALID_RESOURCE_ARN, INVALID_SNS_TOPIC_ARN, INVALID_IAM_ROLE_ARN, INVALID_ASSESSMENT_TARGET_NAME, INVALID_ASSESSMENT_TARGET_NAME_PATTERN, INVALID_ASSESSMENT_TEMPLATE_NAME, INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN, INVALID_ASSESSMENT_TEMPLATE_DURATION, INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE, INVALID_ASSESSMENT_RUN_DURATION_RANGE, INVALID_ASSESSMENT_RUN_START_TIME_RANGE, INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE, INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE, INVALID_ASSESSMENT_RUN_STATE, INVALID_TAG, INVALID_TAG_KEY, INVALID_TAG_VALUE, INVALID_RESOURCE_GROUP_TAG_KEY, INVALID_RESOURCE_GROUP_TAG_VALUE, INVALID_ATTRIBUTE, INVALID_USER_ATTRIBUTE, INVALID_USER_ATTRIBUTE_KEY, INVALID_USER_ATTRIBUTE_VALUE, INVALID_PAGINATION_TOKEN, INVALID_MAX_RESULTS, INVALID_AGENT_ID, INVALID_AUTO_SCALING_GROUP, INVALID_RULE_NAME, INVALID_SEVERITY, INVALID_LOCALE, INVALID_EVENT, ASSESSMENT_TARGET_NAME_ALREADY_TAKEN, ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN, INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS, INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS, INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS, INVALID_NUMBER_OF_FINDING_ARNS, INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS, INVALID_NUMBER_OF_RULES_PACKAGE_ARNS, INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES, INVALID_NUMBER_OF_TAGS, INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS, INVALID_NUMBER_OF_ATTRIBUTES, INVALID_NUMBER_OF_USER_ATTRIBUTES, INVALID_NUMBER_OF_AGENT_IDS, INVALID_NUMBER_OF_AUTO_SCALING_GROUPS, INVALID_NUMBER_OF_RULE_NAMES, INVALID_NUMBER_OF_SEVERITIES)

### InvalidInputException
* InvalidInputException `object`: The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
  * canRetry **required** [Bool](#bool)
  * errorCode **required** [InvalidInputErrorCode](#invalidinputerrorcode)
  * message **required** [ErrorMessage](#errormessage)

### IocConfidence
* IocConfidence `integer`

### Ipv4Address
* Ipv4Address `string`

### Ipv4AddressList
* Ipv4AddressList `array`
  * items [Ipv4Address](#ipv4address)

### KernelVersion
* KernelVersion `string`

### LimitExceededErrorCode
* LimitExceededErrorCode `string` (values: ASSESSMENT_TARGET_LIMIT_EXCEEDED, ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED, ASSESSMENT_RUN_LIMIT_EXCEEDED, RESOURCE_GROUP_LIMIT_EXCEEDED, EVENT_SUBSCRIPTION_LIMIT_EXCEEDED)

### LimitExceededException
* LimitExceededException `object`: The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.
  * canRetry **required** [Bool](#bool)
  * errorCode **required** [LimitExceededErrorCode](#limitexceedederrorcode)
  * message **required** [ErrorMessage](#errormessage)

### ListAssessmentRunAgentsRequest
* ListAssessmentRunAgentsRequest `object`
  * assessmentRunArn **required** [Arn](#arn)
  * filter [AgentFilter](#agentfilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

### ListAssessmentRunAgentsResponse
* ListAssessmentRunAgentsResponse `object`
  * assessmentRunAgents **required** [AssessmentRunAgentList](#assessmentrunagentlist)
  * nextToken [PaginationToken](#paginationtoken)

### ListAssessmentRunsRequest
* ListAssessmentRunsRequest `object`
  * assessmentTemplateArns [ListParentArnList](#listparentarnlist)
  * filter [AssessmentRunFilter](#assessmentrunfilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

### ListAssessmentRunsResponse
* ListAssessmentRunsResponse `object`
  * assessmentRunArns **required** [ListReturnedArnList](#listreturnedarnlist)
  * nextToken [PaginationToken](#paginationtoken)

### ListAssessmentTargetsRequest
* ListAssessmentTargetsRequest `object`
  * filter [AssessmentTargetFilter](#assessmenttargetfilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

### ListAssessmentTargetsResponse
* ListAssessmentTargetsResponse `object`
  * assessmentTargetArns **required** [ListReturnedArnList](#listreturnedarnlist)
  * nextToken [PaginationToken](#paginationtoken)

### ListAssessmentTemplatesRequest
* ListAssessmentTemplatesRequest `object`
  * assessmentTargetArns [ListParentArnList](#listparentarnlist)
  * filter [AssessmentTemplateFilter](#assessmenttemplatefilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

### ListAssessmentTemplatesResponse
* ListAssessmentTemplatesResponse `object`
  * assessmentTemplateArns **required** [ListReturnedArnList](#listreturnedarnlist)
  * nextToken [PaginationToken](#paginationtoken)

### ListEventSubscriptionsMaxResults
* ListEventSubscriptionsMaxResults `integer`

### ListEventSubscriptionsRequest
* ListEventSubscriptionsRequest `object`
  * maxResults [ListEventSubscriptionsMaxResults](#listeventsubscriptionsmaxresults)
  * nextToken [PaginationToken](#paginationtoken)
  * resourceArn [Arn](#arn)

### ListEventSubscriptionsResponse
* ListEventSubscriptionsResponse `object`
  * nextToken [PaginationToken](#paginationtoken)
  * subscriptions **required** [SubscriptionList](#subscriptionlist)

### ListFindingsRequest
* ListFindingsRequest `object`
  * assessmentRunArns [ListParentArnList](#listparentarnlist)
  * filter [FindingFilter](#findingfilter)
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

### ListFindingsResponse
* ListFindingsResponse `object`
  * findingArns **required** [ListReturnedArnList](#listreturnedarnlist)
  * nextToken [PaginationToken](#paginationtoken)

### ListMaxResults
* ListMaxResults `integer`

### ListParentArnList
* ListParentArnList `array`
  * items [Arn](#arn)

### ListReturnedArnList
* ListReturnedArnList `array`
  * items [Arn](#arn)

### ListRulesPackagesRequest
* ListRulesPackagesRequest `object`
  * maxResults [ListMaxResults](#listmaxresults)
  * nextToken [PaginationToken](#paginationtoken)

### ListRulesPackagesResponse
* ListRulesPackagesResponse `object`
  * nextToken [PaginationToken](#paginationtoken)
  * rulesPackageArns **required** [ListReturnedArnList](#listreturnedarnlist)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * resourceArn **required** [Arn](#arn)

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags **required** [TagList](#taglist)

### Locale
* Locale `string` (values: EN_US)

### Long
* Long `integer`

### Message
* Message `string`

### MessageType
* MessageType `string`

### NamePattern
* NamePattern `string`

### NoSuchEntityErrorCode
* NoSuchEntityErrorCode `string` (values: ASSESSMENT_TARGET_DOES_NOT_EXIST, ASSESSMENT_TEMPLATE_DOES_NOT_EXIST, ASSESSMENT_RUN_DOES_NOT_EXIST, FINDING_DOES_NOT_EXIST, RESOURCE_GROUP_DOES_NOT_EXIST, RULES_PACKAGE_DOES_NOT_EXIST, SNS_TOPIC_DOES_NOT_EXIST, IAM_ROLE_DOES_NOT_EXIST)

### NoSuchEntityException
* NoSuchEntityException `object`: The request was rejected because it referenced an entity that does not exist. The error code describes the entity.
  * canRetry **required** [Bool](#bool)
  * errorCode **required** [NoSuchEntityErrorCode](#nosuchentityerrorcode)
  * message **required** [ErrorMessage](#errormessage)

### NumericSeverity
* NumericSeverity `number`

### NumericVersion
* NumericVersion `integer`

### OperatingSystem
* OperatingSystem `string`

### PaginationToken
* PaginationToken `string`

### PreviewAgentsMaxResults
* PreviewAgentsMaxResults `integer`

### PreviewAgentsRequest
* PreviewAgentsRequest `object`
  * maxResults [PreviewAgentsMaxResults](#previewagentsmaxresults)
  * nextToken [PaginationToken](#paginationtoken)
  * previewAgentsArn **required** [Arn](#arn)

### PreviewAgentsResponse
* PreviewAgentsResponse `object`
  * agentPreviews **required** [AgentPreviewList](#agentpreviewlist)
  * nextToken [PaginationToken](#paginationtoken)

### ProviderName
* ProviderName `string`

### RegisterCrossAccountAccessRoleRequest
* RegisterCrossAccountAccessRoleRequest `object`
  * roleArn **required** [Arn](#arn)

### RemoveAttributesFromFindingsRequest
* RemoveAttributesFromFindingsRequest `object`
  * attributeKeys **required** [UserAttributeKeyList](#userattributekeylist)
  * findingArns **required** [AddRemoveAttributesFindingArnList](#addremoveattributesfindingarnlist)

### RemoveAttributesFromFindingsResponse
* RemoveAttributesFromFindingsResponse `object`
  * failedItems **required** [FailedItems](#faileditems)

### ReportFileFormat
* ReportFileFormat `string` (values: HTML, PDF)

### ReportStatus
* ReportStatus `string` (values: WORK_IN_PROGRESS, FAILED, COMPLETED)

### ReportType
* ReportType `string` (values: FINDING, FULL)

### ResourceGroup
* ResourceGroup `object`: Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action.
  * arn **required** [Arn](#arn)
  * createdAt **required** [Timestamp](#timestamp)
  * tags **required** [ResourceGroupTags](#resourcegrouptags)

### ResourceGroupList
* ResourceGroupList `array`
  * items [ResourceGroup](#resourcegroup)

### ResourceGroupTag
* ResourceGroupTag `object`: This data type is used as one of the elements of the <a>ResourceGroup</a> data type.
  * key **required** [TagKey](#tagkey)
  * value [TagValue](#tagvalue)

### ResourceGroupTags
* ResourceGroupTags `array`
  * items [ResourceGroupTag](#resourcegrouptag)

### RuleName
* RuleName `string`

### RuleNameList
* RuleNameList `array`
  * items [RuleName](#rulename)

### RulesPackage
* RulesPackage `object`: Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.
  * arn **required** [Arn](#arn)
  * description [Text](#text)
  * name **required** [RulesPackageName](#rulespackagename)
  * provider **required** [ProviderName](#providername)
  * version **required** [Version](#version)

### RulesPackageList
* RulesPackageList `array`
  * items [RulesPackage](#rulespackage)

### RulesPackageName
* RulesPackageName `string`

### ServiceName
* ServiceName `string`

### SetTagsForResourceRequest
* SetTagsForResourceRequest `object`
  * resourceArn **required** [Arn](#arn)
  * tags [TagList](#taglist)

### Severity
* Severity `string` (values: Low, Medium, High, Informational, Undefined)

### SeverityList
* SeverityList `array`
  * items [Severity](#severity)

### StartAssessmentRunRequest
* StartAssessmentRunRequest `object`
  * assessmentRunName [AssessmentRunName](#assessmentrunname)
  * assessmentTemplateArn **required** [Arn](#arn)

### StartAssessmentRunResponse
* StartAssessmentRunResponse `object`
  * assessmentRunArn **required** [Arn](#arn)

### StopAction
* StopAction `string` (values: START_EVALUATION, SKIP_EVALUATION)

### StopAssessmentRunRequest
* StopAssessmentRunRequest `object`
  * assessmentRunArn **required** [Arn](#arn)
  * stopAction [StopAction](#stopaction)

### SubscribeToEventRequest
* SubscribeToEventRequest `object`
  * event **required** [InspectorEvent](#inspectorevent)
  * resourceArn **required** [Arn](#arn)
  * topicArn **required** [Arn](#arn)

### Subscription
* Subscription `object`: This data type is used as a response element in the <a>ListEventSubscriptions</a> action.
  * eventSubscriptions **required** [EventSubscriptionList](#eventsubscriptionlist)
  * resourceArn **required** [Arn](#arn)
  * topicArn **required** [Arn](#arn)

### SubscriptionList
* SubscriptionList `array`
  * items [Subscription](#subscription)

### Tag
* Tag `object`: A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.
  * key **required** [TagKey](#tagkey)
  * value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TelemetryMetadata
* TelemetryMetadata `object`: The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.
  * count **required** [Long](#long)
  * dataSize [Long](#long)
  * messageType **required** [MessageType](#messagetype)

### TelemetryMetadataList
* TelemetryMetadataList `array`
  * items [TelemetryMetadata](#telemetrymetadata)

### Text
* Text `string`

### Timestamp
* Timestamp `string`

### TimestampRange
* TimestampRange `object`: This data type is used in the <a>AssessmentRunFilter</a> data type.
  * beginDate [Timestamp](#timestamp)
  * endDate [Timestamp](#timestamp)

### UnsubscribeFromEventRequest
* UnsubscribeFromEventRequest `object`
  * event **required** [InspectorEvent](#inspectorevent)
  * resourceArn **required** [Arn](#arn)
  * topicArn **required** [Arn](#arn)

### UnsupportedFeatureException
* UnsupportedFeatureException `object`: Used by the <a>GetAssessmentReport</a> API. The request was rejected because you tried to generate a report for an assessment run that existed before reporting was supported in Amazon Inspector. You can only generate reports for assessment runs that took place or will take place after generating reports in Amazon Inspector became available.
  * canRetry **required** [Bool](#bool)
  * message **required** [ErrorMessage](#errormessage)

### UpdateAssessmentTargetRequest
* UpdateAssessmentTargetRequest `object`
  * assessmentTargetArn **required** [Arn](#arn)
  * assessmentTargetName **required** [AssessmentTargetName](#assessmenttargetname)
  * resourceGroupArn [Arn](#arn)

### Url
* Url `string`

### UserAttributeKeyList
* UserAttributeKeyList `array`
  * items [AttributeKey](#attributekey)

### UserAttributeList
* UserAttributeList `array`
  * items [Attribute](#attribute)

### Version
* Version `string`


