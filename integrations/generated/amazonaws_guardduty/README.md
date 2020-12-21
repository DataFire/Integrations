# @datafire/amazonaws_guardduty

Client library for Amazon GuardDuty

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_guardduty
```
```js
let amazonaws_guardduty = require('@datafire/amazonaws_guardduty').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes the following data sources: VPC Flow Logs, AWS CloudTrail event logs, and DNS logs. It uses threat intelligence feeds (such as lists of malicious IPs and domains) and machine learning to identify unexpected, potentially unauthorized, and malicious activity within your AWS environment. This can include issues like escalations of privileges, uses of exposed credentials, or communication with malicious IPs, URLs, or domains. For example, GuardDuty can detect compromised EC2 instances that serve malware or mine bitcoin. </p> <p>GuardDuty also monitors AWS account access behavior for signs of compromise. Some examples of this are unauthorized infrastructure deployments such as EC2 instances deployed in a Region that has never been used, or unusual API calls like a password policy change to reduce password strength. </p> <p>GuardDuty informs you of the status of your AWS environment by producing security findings that you can view in the GuardDuty console or through Amazon CloudWatch events. For more information, see the <i> <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon GuardDuty User Guide</a> </i>. </p>

## Actions

### ListOrganizationAdminAccounts



```js
amazonaws_guardduty.ListOrganizationAdminAccounts({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListOrganizationAdminAccountsResponse](#listorganizationadminaccountsresponse)

### DisableOrganizationAdminAccount



```js
amazonaws_guardduty.DisableOrganizationAdminAccount({
  "adminAccountId": ""
}, context)
```

#### Input
* input `object`
  * adminAccountId **required** `string`: The AWS Account ID for the organizations account to be disabled as a GuardDuty delegated administrator.

#### Output
* output [DisableOrganizationAdminAccountResponse](#disableorganizationadminaccountresponse)

### EnableOrganizationAdminAccount



```js
amazonaws_guardduty.EnableOrganizationAdminAccount({
  "adminAccountId": ""
}, context)
```

#### Input
* input `object`
  * adminAccountId **required** `string`: The AWS Account ID for the organization account to be enabled as a GuardDuty delegated administrator.

#### Output
* output [EnableOrganizationAdminAccountResponse](#enableorganizationadminaccountresponse)

### ListDetectors



```js
amazonaws_guardduty.ListDetectors({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDetectorsResponse](#listdetectorsresponse)

### CreateDetector



```js
amazonaws_guardduty.CreateDetector({
  "enable": true
}, context)
```

#### Input
* input `object`
  * tags `object`: The tags to be added to a new detector resource.
  * clientToken `string`: The idempotency token for the create request.
  * dataSources `object`: Contains information about which data sources are enabled.
    * S3Logs
      * Enable **required**
  * enable **required** `boolean`: A Boolean value that specifies whether the detector is to be enabled.
  * findingPublishingFrequency `string` (values: FIFTEEN_MINUTES, ONE_HOUR, SIX_HOURS): A value that specifies how frequently updated findings are exported.

#### Output
* output [CreateDetectorResponse](#createdetectorresponse)

### DeleteDetector



```js
amazonaws_guardduty.DeleteDetector({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`

#### Output
* output [DeleteDetectorResponse](#deletedetectorresponse)

### GetDetector



```js
amazonaws_guardduty.GetDetector({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`

#### Output
* output [GetDetectorResponse](#getdetectorresponse)

### UpdateDetector



```js
amazonaws_guardduty.UpdateDetector({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * dataSources `object`: Contains information about which data sources are enabled.
    * S3Logs
      * Enable **required**
  * enable `boolean`: Specifies whether the detector is enabled or not enabled.
  * findingPublishingFrequency `string` (values: FIFTEEN_MINUTES, ONE_HOUR, SIX_HOURS): An enum value that specifies how frequently findings are exported, such as to CloudWatch Events.

#### Output
* output [UpdateDetectorResponse](#updatedetectorresponse)

### DescribeOrganizationConfiguration



```js
amazonaws_guardduty.DescribeOrganizationConfiguration({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`

#### Output
* output [DescribeOrganizationConfigurationResponse](#describeorganizationconfigurationresponse)

### UpdateOrganizationConfiguration



```js
amazonaws_guardduty.UpdateOrganizationConfiguration({
  "detectorId": "",
  "autoEnable": true
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * autoEnable **required** `boolean`: Indicates whether to automatically enable member accounts in the organization.
  * dataSources `object`: An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization.
    * S3Logs
      * AutoEnable **required**

#### Output
* output [UpdateOrganizationConfigurationResponse](#updateorganizationconfigurationresponse)

### ListFilters



```js
amazonaws_guardduty.ListFilters({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListFiltersResponse](#listfiltersresponse)

### CreateFilter



```js
amazonaws_guardduty.CreateFilter({
  "detectorId": "",
  "name": "",
  "findingCriteria": {}
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * tags `object`: The tags to be added to a new filter resource.
  * action `string` (values: NOOP, ARCHIVE): Specifies the action that is to be applied to the findings that match the filter.
  * clientToken `string`: The idempotency token for the create request.
  * description `string`: The description of the filter.
  * findingCriteria **required** `object`: Contains information about the criteria used for querying findings.
    * Criterion
  * name **required** `string`: The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not allowed.
  * rank `integer`: Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.

#### Output
* output [CreateFilterResponse](#createfilterresponse)

### DeleteFilter



```js
amazonaws_guardduty.DeleteFilter({
  "detectorId": "",
  "filterName": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * filterName **required** `string`

#### Output
* output [DeleteFilterResponse](#deletefilterresponse)

### GetFilter



```js
amazonaws_guardduty.GetFilter({
  "detectorId": "",
  "filterName": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * filterName **required** `string`

#### Output
* output [GetFilterResponse](#getfilterresponse)

### UpdateFilter



```js
amazonaws_guardduty.UpdateFilter({
  "detectorId": "",
  "filterName": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * filterName **required** `string`
  * action `string` (values: NOOP, ARCHIVE): Specifies the action that is to be applied to the findings that match the filter.
  * description `string`: The description of the filter.
  * findingCriteria `object`: Contains information about the criteria used for querying findings.
    * Criterion
  * rank `integer`: Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.

#### Output
* output [UpdateFilterResponse](#updatefilterresponse)

### ListFindings



```js
amazonaws_guardduty.ListFindings({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * findingCriteria `object`: Contains information about the criteria used for querying findings.
    * Criterion
  * maxResults `integer`: You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
  * nextToken `string`: You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
  * sortCriteria `object`: Contains information about the criteria used for sorting findings.
    * AttributeName
    * OrderBy

#### Output
* output [ListFindingsResponse](#listfindingsresponse)

### ArchiveFindings



```js
amazonaws_guardduty.ArchiveFindings({
  "detectorId": "",
  "findingIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * findingIds **required** `array`: The IDs of the findings that you want to archive.
    * items [FindingId](#findingid)

#### Output
* output [ArchiveFindingsResponse](#archivefindingsresponse)

### CreateSampleFindings



```js
amazonaws_guardduty.CreateSampleFindings({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * findingTypes `array`: The types of sample findings to generate.
    * items [FindingType](#findingtype)

#### Output
* output [CreateSampleFindingsResponse](#createsamplefindingsresponse)

### UpdateFindingsFeedback



```js
amazonaws_guardduty.UpdateFindingsFeedback({
  "detectorId": "",
  "findingIds": [],
  "feedback": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * comments `string`: Additional feedback about the GuardDuty findings.
  * feedback **required** `string` (values: USEFUL, NOT_USEFUL): The feedback for the finding.
  * findingIds **required** `array`: The IDs of the findings that you want to mark as useful or not useful.
    * items [FindingId](#findingid)

#### Output
* output [UpdateFindingsFeedbackResponse](#updatefindingsfeedbackresponse)

### GetFindings



```js
amazonaws_guardduty.GetFindings({
  "detectorId": "",
  "findingIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * findingIds **required** `array`: The IDs of the findings that you want to retrieve.
    * items [FindingId](#findingid)
  * sortCriteria `object`: Contains information about the criteria used for sorting findings.
    * AttributeName
    * OrderBy

#### Output
* output [GetFindingsResponse](#getfindingsresponse)

### GetFindingsStatistics



```js
amazonaws_guardduty.GetFindingsStatistics({
  "detectorId": "",
  "findingStatisticTypes": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * findingCriteria `object`: Contains information about the criteria used for querying findings.
    * Criterion
  * findingStatisticTypes **required** `array`: The types of finding statistics to retrieve.
    * items [FindingStatisticType](#findingstatistictype)

#### Output
* output [GetFindingsStatisticsResponse](#getfindingsstatisticsresponse)

### UnarchiveFindings



```js
amazonaws_guardduty.UnarchiveFindings({
  "detectorId": "",
  "findingIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * findingIds **required** `array`: The IDs of the findings to unarchive.
    * items [FindingId](#findingid)

#### Output
* output [UnarchiveFindingsResponse](#unarchivefindingsresponse)

### ListIPSets



```js
amazonaws_guardduty.ListIPSets({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListIPSetsResponse](#listipsetsresponse)

### CreateIPSet



```js
amazonaws_guardduty.CreateIPSet({
  "detectorId": "",
  "name": "",
  "format": "",
  "location": "",
  "activate": true
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * tags `object`: The tags to be added to a new IP set resource.
  * activate **required** `boolean`: A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.
  * clientToken `string`: The idempotency token for the create request.
  * format **required** `string` (values: TXT, STIX, OTX_CSV, ALIEN_VAULT, PROOF_POINT, FIRE_EYE): The format of the file that contains the IPSet.
  * location **required** `string`: The URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
  * name **required** `string`: <p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumerics, spaces, hyphens (-), and underscores (_).</p>

#### Output
* output [CreateIPSetResponse](#createipsetresponse)

### DeleteIPSet



```js
amazonaws_guardduty.DeleteIPSet({
  "detectorId": "",
  "ipSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * ipSetId **required** `string`

#### Output
* output [DeleteIPSetResponse](#deleteipsetresponse)

### GetIPSet



```js
amazonaws_guardduty.GetIPSet({
  "detectorId": "",
  "ipSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * ipSetId **required** `string`

#### Output
* output [GetIPSetResponse](#getipsetresponse)

### UpdateIPSet



```js
amazonaws_guardduty.UpdateIPSet({
  "detectorId": "",
  "ipSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * ipSetId **required** `string`
  * activate `boolean`: The updated Boolean value that specifies whether the IPSet is active or not.
  * location `string`: The updated URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
  * name `string`: The unique ID that specifies the IPSet that you want to update.

#### Output
* output [UpdateIPSetResponse](#updateipsetresponse)

### GetMasterAccount



```js
amazonaws_guardduty.GetMasterAccount({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`

#### Output
* output [GetMasterAccountResponse](#getmasteraccountresponse)

### AcceptInvitation



```js
amazonaws_guardduty.AcceptInvitation({
  "detectorId": "",
  "masterId": "",
  "invitationId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * invitationId **required** `string`: The value that is used to validate the administrator account to the member account.
  * masterId **required** `string`: The account ID of the GuardDuty administrator account whose invitation you're accepting.

#### Output
* output [AcceptInvitationResponse](#acceptinvitationresponse)

### DisassociateFromMasterAccount



```js
amazonaws_guardduty.DisassociateFromMasterAccount({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`

#### Output
* output [DisassociateFromMasterAccountResponse](#disassociatefrommasteraccountresponse)

### ListMembers



```js
amazonaws_guardduty.ListMembers({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * onlyAssociated `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListMembersResponse](#listmembersresponse)

### CreateMembers



```js
amazonaws_guardduty.CreateMembers({
  "detectorId": "",
  "accountDetails": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * accountDetails **required** `array`: A list of account ID and email address pairs of the accounts that you want to associate with the GuardDuty administrator account.
    * items [AccountDetail](#accountdetail)

#### Output
* output [CreateMembersResponse](#createmembersresponse)

### DeleteMembers



```js
amazonaws_guardduty.DeleteMembers({
  "detectorId": "",
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * accountIds **required** `array`: A list of account IDs of the GuardDuty member accounts that you want to delete.
    * items [AccountId](#accountid)

#### Output
* output [DeleteMembersResponse](#deletemembersresponse)

### GetMemberDetectors



```js
amazonaws_guardduty.GetMemberDetectors({
  "detectorId": "",
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * accountIds **required** `array`: The account ID of the member account.
    * items [AccountId](#accountid)

#### Output
* output [GetMemberDetectorsResponse](#getmemberdetectorsresponse)

### UpdateMemberDetectors



```js
amazonaws_guardduty.UpdateMemberDetectors({
  "detectorId": "",
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * accountIds **required** `array`: A list of member account IDs to be updated.
    * items [AccountId](#accountid)
  * dataSources `object`: Contains information about which data sources are enabled.
    * S3Logs
      * Enable **required**

#### Output
* output [UpdateMemberDetectorsResponse](#updatememberdetectorsresponse)

### DisassociateMembers



```js
amazonaws_guardduty.DisassociateMembers({
  "detectorId": "",
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * accountIds **required** `array`: A list of account IDs of the GuardDuty member accounts that you want to disassociate from the administrator account.
    * items [AccountId](#accountid)

#### Output
* output [DisassociateMembersResponse](#disassociatemembersresponse)

### GetMembers



```js
amazonaws_guardduty.GetMembers({
  "detectorId": "",
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * accountIds **required** `array`: A list of account IDs of the GuardDuty member accounts that you want to describe.
    * items [AccountId](#accountid)

#### Output
* output [GetMembersResponse](#getmembersresponse)

### InviteMembers



```js
amazonaws_guardduty.InviteMembers({
  "detectorId": "",
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * accountIds **required** `array`: A list of account IDs of the accounts that you want to invite to GuardDuty as members.
    * items [AccountId](#accountid)
  * disableEmailNotification `boolean`: A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members.
  * message `string`: The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members.

#### Output
* output [InviteMembersResponse](#invitemembersresponse)

### StartMonitoringMembers



```js
amazonaws_guardduty.StartMonitoringMembers({
  "detectorId": "",
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * accountIds **required** `array`: A list of account IDs of the GuardDuty member accounts to start monitoring.
    * items [AccountId](#accountid)

#### Output
* output [StartMonitoringMembersResponse](#startmonitoringmembersresponse)

### StopMonitoringMembers



```js
amazonaws_guardduty.StopMonitoringMembers({
  "detectorId": "",
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * accountIds **required** `array`: A list of account IDs for the member accounts to stop monitoring.
    * items [AccountId](#accountid)

#### Output
* output [StopMonitoringMembersResponse](#stopmonitoringmembersresponse)

### ListPublishingDestinations



```js
amazonaws_guardduty.ListPublishingDestinations({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListPublishingDestinationsResponse](#listpublishingdestinationsresponse)

### CreatePublishingDestination



```js
amazonaws_guardduty.CreatePublishingDestination({
  "detectorId": "",
  "destinationType": "",
  "destinationProperties": {}
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * clientToken `string`: The idempotency token for the request.
  * destinationProperties **required** `object`: Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
    * DestinationArn
    * KmsKeyArn
  * destinationType **required** `string` (values: S3): The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.

#### Output
* output [CreatePublishingDestinationResponse](#createpublishingdestinationresponse)

### DeletePublishingDestination



```js
amazonaws_guardduty.DeletePublishingDestination({
  "detectorId": "",
  "destinationId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * destinationId **required** `string`

#### Output
* output [DeletePublishingDestinationResponse](#deletepublishingdestinationresponse)

### DescribePublishingDestination



```js
amazonaws_guardduty.DescribePublishingDestination({
  "detectorId": "",
  "destinationId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * destinationId **required** `string`

#### Output
* output [DescribePublishingDestinationResponse](#describepublishingdestinationresponse)

### UpdatePublishingDestination



```js
amazonaws_guardduty.UpdatePublishingDestination({
  "detectorId": "",
  "destinationId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * destinationId **required** `string`
  * destinationProperties `object`: Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
    * DestinationArn
    * KmsKeyArn

#### Output
* output [UpdatePublishingDestinationResponse](#updatepublishingdestinationresponse)

### ListThreatIntelSets



```js
amazonaws_guardduty.ListThreatIntelSets({
  "detectorId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListThreatIntelSetsResponse](#listthreatintelsetsresponse)

### CreateThreatIntelSet



```js
amazonaws_guardduty.CreateThreatIntelSet({
  "detectorId": "",
  "name": "",
  "format": "",
  "location": "",
  "activate": true
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * tags `object`: The tags to be added to a new threat list resource.
  * activate **required** `boolean`: A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
  * clientToken `string`: The idempotency token for the create request.
  * format **required** `string` (values: TXT, STIX, OTX_CSV, ALIEN_VAULT, PROOF_POINT, FIRE_EYE): The format of the file that contains the ThreatIntelSet.
  * location **required** `string`: The URI of the file that contains the ThreatIntelSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
  * name **required** `string`: A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.

#### Output
* output [CreateThreatIntelSetResponse](#createthreatintelsetresponse)

### DeleteThreatIntelSet



```js
amazonaws_guardduty.DeleteThreatIntelSet({
  "detectorId": "",
  "threatIntelSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * threatIntelSetId **required** `string`

#### Output
* output [DeleteThreatIntelSetResponse](#deletethreatintelsetresponse)

### GetThreatIntelSet



```js
amazonaws_guardduty.GetThreatIntelSet({
  "detectorId": "",
  "threatIntelSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * threatIntelSetId **required** `string`

#### Output
* output [GetThreatIntelSetResponse](#getthreatintelsetresponse)

### UpdateThreatIntelSet



```js
amazonaws_guardduty.UpdateThreatIntelSet({
  "detectorId": "",
  "threatIntelSetId": ""
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * threatIntelSetId **required** `string`
  * activate `boolean`: The updated Boolean value that specifies whether the ThreateIntelSet is active or not.
  * location `string`: The updated URI of the file that contains the ThreateIntelSet.
  * name `string`: The unique ID that specifies the ThreatIntelSet that you want to update.

#### Output
* output [UpdateThreatIntelSetResponse](#updatethreatintelsetresponse)

### GetUsageStatistics



```js
amazonaws_guardduty.GetUsageStatistics({
  "detectorId": "",
  "usageStatisticsType": "",
  "usageCriteria": {}
}, context)
```

#### Input
* input `object`
  * detectorId **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * maxResults `integer`: The maximum number of results to return in the response.
  * nextToken `string`: A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
  * unit `string`: The currency unit you would like to view your usage statistics in. Current valid values are USD.
  * usageCriteria **required** `object`: Contains information about the criteria used to query usage statistics.
    * AccountIds
      * items [AccountId](#accountid)
    * DataSources
      * items [DataSource](#datasource)
    * Resources
      * items [String](#string)
  * usageStatisticsType **required** `string` (values: SUM_BY_ACCOUNT, SUM_BY_DATA_SOURCE, SUM_BY_RESOURCE, TOP_RESOURCES): The type of usage statistics to retrieve.

#### Output
* output [GetUsageStatisticsResponse](#getusagestatisticsresponse)

### ListInvitations



```js
amazonaws_guardduty.ListInvitations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListInvitationsResponse](#listinvitationsresponse)

### GetInvitationsCount



```js
amazonaws_guardduty.GetInvitationsCount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetInvitationsCountResponse](#getinvitationscountresponse)

### DeclineInvitations



```js
amazonaws_guardduty.DeclineInvitations({
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * accountIds **required** `array`: A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to decline invitations from.
    * items [AccountId](#accountid)

#### Output
* output [DeclineInvitationsResponse](#declineinvitationsresponse)

### DeleteInvitations



```js
amazonaws_guardduty.DeleteInvitations({
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * accountIds **required** `array`: A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to delete invitations from.
    * items [AccountId](#accountid)

#### Output
* output [DeleteInvitationsResponse](#deleteinvitationsresponse)

### ListTagsForResource



```js
amazonaws_guardduty.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_guardduty.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The tags to be added to a resource.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_guardduty.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### AcceptInvitationRequest
* AcceptInvitationRequest `object`
  * InvitationId **required**
  * MasterId **required**

### AcceptInvitationResponse
* AcceptInvitationResponse `object`

### AccessControlList
* AccessControlList `object`: Contains information on the current access control policies for the bucket.
  * AllowsPublicReadAccess
  * AllowsPublicWriteAccess

### AccessKeyDetails
* AccessKeyDetails `object`: Contains information about the access keys.
  * AccessKeyId
  * PrincipalId
  * UserName
  * UserType

### AccountDetail
* AccountDetail `object`: Contains information about the account.
  * AccountId **required**
  * Email **required**

### AccountDetails
* AccountDetails `array`
  * items [AccountDetail](#accountdetail)

### AccountId
* AccountId `string`

### AccountIds
* AccountIds `array`
  * items [AccountId](#accountid)

### AccountLevelPermissions
* AccountLevelPermissions `object`: Contains information about the account level permissions on the S3 bucket.
  * BlockPublicAccess
    * BlockPublicAcls
    * BlockPublicPolicy
    * IgnorePublicAcls
    * RestrictPublicBuckets

### Action
* Action `object`: Contains information about actions.
  * ActionType
  * AwsApiCallAction
    * Api
    * CallerType
    * DomainDetails
      * Domain
    * ErrorCode
    * RemoteIpDetails
      * City
        * CityName
      * Country
        * CountryCode
        * CountryName
      * GeoLocation
        * Lat
        * Lon
      * IpAddressV4
      * Organization
        * Asn
        * AsnOrg
        * Isp
        * Org
    * ServiceName
  * DnsRequestAction
    * Domain
  * NetworkConnectionAction
    * Blocked
    * ConnectionDirection
    * LocalIpDetails
      * IpAddressV4
    * LocalPortDetails
      * Port
      * PortName
    * Protocol
    * RemoteIpDetails
      * City
        * CityName
      * Country
        * CountryCode
        * CountryName
      * GeoLocation
        * Lat
        * Lon
      * IpAddressV4
      * Organization
        * Asn
        * AsnOrg
        * Isp
        * Org
    * RemotePortDetails
      * Port
      * PortName
  * PortProbeAction
    * Blocked
    * PortProbeDetails
      * items [PortProbeDetail](#portprobedetail)

### AdminAccount
* AdminAccount `object`: The account within the organization specified as the GuardDuty delegated administrator.
  * AdminAccountId
  * AdminStatus

### AdminAccounts
* AdminAccounts `array`
  * items [AdminAccount](#adminaccount)

### AdminStatus
* AdminStatus `string` (values: ENABLED, DISABLE_IN_PROGRESS)

### ArchiveFindingsRequest
* ArchiveFindingsRequest `object`
  * FindingIds **required**
    * items [FindingId](#findingid)

### ArchiveFindingsResponse
* ArchiveFindingsResponse `object`

### AwsApiCallAction
* AwsApiCallAction `object`: Contains information about the API action.
  * Api
  * CallerType
  * DomainDetails
    * Domain
  * ErrorCode
  * RemoteIpDetails
    * City
      * CityName
    * Country
      * CountryCode
      * CountryName
    * GeoLocation
      * Lat
      * Lon
    * IpAddressV4
    * Organization
      * Asn
      * AsnOrg
      * Isp
      * Org
  * ServiceName

### BadRequestException


### BlockPublicAccess
* BlockPublicAccess `object`: Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information. 
  * BlockPublicAcls
  * BlockPublicPolicy
  * IgnorePublicAcls
  * RestrictPublicBuckets

### Boolean
* Boolean `boolean`

### BucketLevelPermissions
* BucketLevelPermissions `object`: Contains information about the bucket level permissions for the S3 bucket.
  * AccessControlList
    * AllowsPublicReadAccess
    * AllowsPublicWriteAccess
  * BlockPublicAccess
    * BlockPublicAcls
    * BlockPublicPolicy
    * IgnorePublicAcls
    * RestrictPublicBuckets
  * BucketPolicy
    * AllowsPublicReadAccess
    * AllowsPublicWriteAccess

### BucketPolicy
* BucketPolicy `object`: Contains information on the current bucket policies for the S3 bucket.
  * AllowsPublicReadAccess
  * AllowsPublicWriteAccess

### City
* City `object`: Contains information about the city associated with the IP address.
  * CityName

### ClientToken
* ClientToken `string`

### CloudTrailConfigurationResult
* CloudTrailConfigurationResult `object`: Contains information on the status of CloudTrail as a data source for the detector.
  * Status **required**

### Condition
* Condition `object`: Contains information about the condition.
  * Eq
    * items [String](#string)
  * Equals
    * items [String](#string)
  * GreaterThan
  * GreaterThanOrEqual
  * Gt
  * Gte
  * LessThan
  * LessThanOrEqual
  * Lt
  * Lte
  * Neq
    * items [String](#string)
  * NotEquals
    * items [String](#string)

### CountBySeverity
* CountBySeverity `object`

### Country
* Country `object`: Contains information about the country where the remote IP address is located.
  * CountryCode
  * CountryName

### CreateDetectorRequest
* CreateDetectorRequest `object`
  * ClientToken
  * DataSources
    * S3Logs
      * Enable **required**
  * Enable **required**
  * FindingPublishingFrequency
  * Tags

### CreateDetectorResponse
* CreateDetectorResponse `object`
  * DetectorId

### CreateFilterRequest
* CreateFilterRequest `object`
  * Action
  * ClientToken
  * Description
  * FindingCriteria **required**
    * Criterion
  * Name **required**
  * Rank
  * Tags

### CreateFilterResponse
* CreateFilterResponse `object`
  * Name **required**

### CreateIPSetRequest
* CreateIPSetRequest `object`
  * Activate **required**
  * ClientToken
  * Format **required**
  * Location **required**
  * Name **required**
  * Tags

### CreateIPSetResponse
* CreateIPSetResponse `object`
  * IpSetId **required**

### CreateMembersRequest
* CreateMembersRequest `object`
  * AccountDetails **required**
    * items [AccountDetail](#accountdetail)

### CreateMembersResponse
* CreateMembersResponse `object`
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### CreatePublishingDestinationRequest
* CreatePublishingDestinationRequest `object`
  * ClientToken
  * DestinationProperties **required**
    * DestinationArn
    * KmsKeyArn
  * DestinationType **required**

### CreatePublishingDestinationResponse
* CreatePublishingDestinationResponse `object`
  * DestinationId **required**

### CreateSampleFindingsRequest
* CreateSampleFindingsRequest `object`
  * FindingTypes
    * items [FindingType](#findingtype)

### CreateSampleFindingsResponse
* CreateSampleFindingsResponse `object`

### CreateThreatIntelSetRequest
* CreateThreatIntelSetRequest `object`
  * Activate **required**
  * ClientToken
  * Format **required**
  * Location **required**
  * Name **required**
  * Tags

### CreateThreatIntelSetResponse
* CreateThreatIntelSetResponse `object`
  * ThreatIntelSetId **required**

### Criterion
* Criterion `object`

### DNSLogsConfigurationResult
* DNSLogsConfigurationResult `object`: Contains information on the status of DNS logs as a data source.
  * Status **required**

### DataSource
* DataSource `string` (values: FLOW_LOGS, CLOUD_TRAIL, DNS_LOGS, S3_LOGS)

### DataSourceConfigurations
* DataSourceConfigurations `object`: Contains information about which data sources are enabled.
  * S3Logs
    * Enable **required**

### DataSourceConfigurationsResult
* DataSourceConfigurationsResult `object`: Contains information on the status of data sources for the detector.
  * CloudTrail **required**
    * Status **required**
  * DNSLogs **required**
    * Status **required**
  * FlowLogs **required**
    * Status **required**
  * S3Logs **required**
    * Status **required**

### DataSourceList
* DataSourceList `array`
  * items [DataSource](#datasource)

### DataSourceStatus
* DataSourceStatus `string` (values: ENABLED, DISABLED)

### DeclineInvitationsRequest
* DeclineInvitationsRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)

### DeclineInvitationsResponse
* DeclineInvitationsResponse `object`
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### DefaultServerSideEncryption
* DefaultServerSideEncryption `object`: Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information.
  * EncryptionType
  * KmsMasterKeyArn

### DeleteDetectorRequest
* DeleteDetectorRequest `object`

### DeleteDetectorResponse
* DeleteDetectorResponse `object`

### DeleteFilterRequest
* DeleteFilterRequest `object`

### DeleteFilterResponse
* DeleteFilterResponse `object`

### DeleteIPSetRequest
* DeleteIPSetRequest `object`

### DeleteIPSetResponse
* DeleteIPSetResponse `object`

### DeleteInvitationsRequest
* DeleteInvitationsRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)

### DeleteInvitationsResponse
* DeleteInvitationsResponse `object`
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### DeleteMembersRequest
* DeleteMembersRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)

### DeleteMembersResponse
* DeleteMembersResponse `object`
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### DeletePublishingDestinationRequest
* DeletePublishingDestinationRequest `object`

### DeletePublishingDestinationResponse
* DeletePublishingDestinationResponse `object`

### DeleteThreatIntelSetRequest
* DeleteThreatIntelSetRequest `object`

### DeleteThreatIntelSetResponse
* DeleteThreatIntelSetResponse `object`

### DescribeOrganizationConfigurationRequest
* DescribeOrganizationConfigurationRequest `object`

### DescribeOrganizationConfigurationResponse
* DescribeOrganizationConfigurationResponse `object`
  * AutoEnable **required**
  * DataSources
    * S3Logs **required**
      * AutoEnable **required**
  * MemberAccountLimitReached **required**

### DescribePublishingDestinationRequest
* DescribePublishingDestinationRequest `object`

### DescribePublishingDestinationResponse
* DescribePublishingDestinationResponse `object`
  * DestinationId **required**
  * DestinationProperties **required**
    * DestinationArn
    * KmsKeyArn
  * DestinationType **required**
  * PublishingFailureStartTimestamp **required**
  * Status **required**

### Destination
* Destination `object`: Contains information about the publishing destination, including the ID, type, and status.
  * DestinationId **required**
  * DestinationType **required**
  * Status **required**

### DestinationProperties
* DestinationProperties `object`: Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
  * DestinationArn
  * KmsKeyArn

### DestinationType
* DestinationType `string` (values: S3)

### Destinations
* Destinations `array`
  * items [Destination](#destination)

### DetectorId
* DetectorId `string`

### DetectorIds
* DetectorIds `array`
  * items [DetectorId](#detectorid)

### DetectorStatus
* DetectorStatus `string` (values: ENABLED, DISABLED)

### DisableOrganizationAdminAccountRequest
* DisableOrganizationAdminAccountRequest `object`
  * AdminAccountId **required**

### DisableOrganizationAdminAccountResponse
* DisableOrganizationAdminAccountResponse `object`

### DisassociateFromMasterAccountRequest
* DisassociateFromMasterAccountRequest `object`

### DisassociateFromMasterAccountResponse
* DisassociateFromMasterAccountResponse `object`

### DisassociateMembersRequest
* DisassociateMembersRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)

### DisassociateMembersResponse
* DisassociateMembersResponse `object`
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### DnsRequestAction
* DnsRequestAction `object`: Contains information about the DNS_REQUEST action described in this finding.
  * Domain

### DomainDetails
* DomainDetails `object`: Contains information about the domain.
  * Domain

### Double
* Double `number`

### Email
* Email `string`

### EnableOrganizationAdminAccountRequest
* EnableOrganizationAdminAccountRequest `object`
  * AdminAccountId **required**

### EnableOrganizationAdminAccountResponse
* EnableOrganizationAdminAccountResponse `object`

### Eq
* Eq `array`
  * items [String](#string)

### Equals
* Equals `array`
  * items [String](#string)

### Evidence
* Evidence `object`: Contains information about the reason that the finding was generated.
  * ThreatIntelligenceDetails
    * items [ThreatIntelligenceDetail](#threatintelligencedetail)

### Feedback
* Feedback `string` (values: USEFUL, NOT_USEFUL)

### FilterAction
* FilterAction `string` (values: NOOP, ARCHIVE)

### FilterDescription
* FilterDescription `string`

### FilterName
* FilterName `string`

### FilterNames
* FilterNames `array`
  * items [FilterName](#filtername)

### FilterRank
* FilterRank `integer`

### Finding
* Finding `object`: Contains information about the finding, which is generated when abnormal or suspicious activity is detected.
  * AccountId **required**
  * Arn **required**
  * Confidence
  * CreatedAt **required**
  * Description
  * Id **required**
  * Partition
  * Region **required**
  * Resource **required**
    * AccessKeyDetails
      * AccessKeyId
      * PrincipalId
      * UserName
      * UserType
    * InstanceDetails
      * AvailabilityZone
      * IamInstanceProfile
        * Arn
        * Id
      * ImageDescription
      * ImageId
      * InstanceId
      * InstanceState
      * InstanceType
      * LaunchTime
      * NetworkInterfaces
        * items [NetworkInterface](#networkinterface)
      * OutpostArn
      * Platform
      * ProductCodes
        * items [ProductCode](#productcode)
      * Tags
        * items [Tag](#tag)
    * ResourceType
    * S3BucketDetails
      * items [S3BucketDetail](#s3bucketdetail)
  * SchemaVersion **required**
  * Service
    * Action
      * ActionType
      * AwsApiCallAction
        * Api
        * CallerType
        * DomainDetails
          * Domain
        * ErrorCode
        * RemoteIpDetails
          * City
          * Country
          * GeoLocation
          * IpAddressV4
          * Organization
        * ServiceName
      * DnsRequestAction
        * Domain
      * NetworkConnectionAction
        * Blocked
        * ConnectionDirection
        * LocalIpDetails
          * IpAddressV4
        * LocalPortDetails
          * Port
          * PortName
        * Protocol
        * RemoteIpDetails
          * City
          * Country
          * GeoLocation
          * IpAddressV4
          * Organization
        * RemotePortDetails
          * Port
          * PortName
      * PortProbeAction
        * Blocked
        * PortProbeDetails
          * items [PortProbeDetail](#portprobedetail)
    * Archived
    * Count
    * DetectorId
    * EventFirstSeen
    * EventLastSeen
    * Evidence
      * ThreatIntelligenceDetails
        * items [ThreatIntelligenceDetail](#threatintelligencedetail)
    * ResourceRole
    * ServiceName
    * UserFeedback
  * Severity **required**
  * Title
  * Type **required**
  * UpdatedAt **required**

### FindingCriteria
* FindingCriteria `object`: Contains information about the criteria used for querying findings.
  * Criterion

### FindingId
* FindingId `string`

### FindingIds
* FindingIds `array`
  * items [FindingId](#findingid)

### FindingPublishingFrequency
* FindingPublishingFrequency `string` (values: FIFTEEN_MINUTES, ONE_HOUR, SIX_HOURS)

### FindingStatisticType
* FindingStatisticType `string` (values: COUNT_BY_SEVERITY)

### FindingStatisticTypes
* FindingStatisticTypes `array`
  * items [FindingStatisticType](#findingstatistictype)

### FindingStatistics
* FindingStatistics `object`: Contains information about finding statistics.
  * CountBySeverity

### FindingType
* FindingType `string`

### FindingTypes
* FindingTypes `array`
  * items [FindingType](#findingtype)

### Findings
* Findings `array`
  * items [Finding](#finding)

### FlowLogsConfigurationResult
* FlowLogsConfigurationResult `object`: Contains information on the status of VPC flow logs as a data source.
  * Status **required**

### GeoLocation
* GeoLocation `object`: Contains information about the location of the remote IP address.
  * Lat
  * Lon

### GetDetectorRequest
* GetDetectorRequest `object`

### GetDetectorResponse
* GetDetectorResponse `object`
  * CreatedAt
  * DataSources
    * CloudTrail **required**
      * Status **required**
    * DNSLogs **required**
      * Status **required**
    * FlowLogs **required**
      * Status **required**
    * S3Logs **required**
      * Status **required**
  * FindingPublishingFrequency
  * ServiceRole **required**
  * Status **required**
  * Tags
  * UpdatedAt

### GetFilterRequest
* GetFilterRequest `object`

### GetFilterResponse
* GetFilterResponse `object`
  * Action **required**
  * Description
  * FindingCriteria **required**
    * Criterion
  * Name **required**
  * Rank
  * Tags

### GetFindingsRequest
* GetFindingsRequest `object`
  * FindingIds **required**
    * items [FindingId](#findingid)
  * SortCriteria
    * AttributeName
    * OrderBy

### GetFindingsResponse
* GetFindingsResponse `object`
  * Findings **required**
    * items [Finding](#finding)

### GetFindingsStatisticsRequest
* GetFindingsStatisticsRequest `object`
  * FindingCriteria
    * Criterion
  * FindingStatisticTypes **required**
    * items [FindingStatisticType](#findingstatistictype)

### GetFindingsStatisticsResponse
* GetFindingsStatisticsResponse `object`
  * FindingStatistics **required**
    * CountBySeverity

### GetIPSetRequest
* GetIPSetRequest `object`

### GetIPSetResponse
* GetIPSetResponse `object`
  * Format **required**
  * Location **required**
  * Name **required**
  * Status **required**
  * Tags

### GetInvitationsCountRequest
* GetInvitationsCountRequest `object`

### GetInvitationsCountResponse
* GetInvitationsCountResponse `object`
  * InvitationsCount

### GetMasterAccountRequest
* GetMasterAccountRequest `object`

### GetMasterAccountResponse
* GetMasterAccountResponse `object`
  * Master **required**
    * AccountId
    * InvitationId
    * InvitedAt
    * RelationshipStatus

### GetMemberDetectorsRequest
* GetMemberDetectorsRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)

### GetMemberDetectorsResponse
* GetMemberDetectorsResponse `object`
  * MemberDataSourceConfigurations **required**
    * items [MemberDataSourceConfiguration](#memberdatasourceconfiguration)
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### GetMembersRequest
* GetMembersRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)

### GetMembersResponse
* GetMembersResponse `object`
  * Members **required**
    * items [Member](#member)
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### GetThreatIntelSetRequest
* GetThreatIntelSetRequest `object`

### GetThreatIntelSetResponse
* GetThreatIntelSetResponse `object`
  * Format **required**
  * Location **required**
  * Name **required**
  * Status **required**
  * Tags

### GetUsageStatisticsRequest
* GetUsageStatisticsRequest `object`
  * MaxResults
  * NextToken
  * Unit
  * UsageCriteria **required**
    * AccountIds
      * items [AccountId](#accountid)
    * DataSources **required**
      * items [DataSource](#datasource)
    * Resources
      * items [String](#string)
  * UsageStatisticType **required**

### GetUsageStatisticsResponse
* GetUsageStatisticsResponse `object`
  * NextToken
  * UsageStatistics
    * SumByAccount
      * items [UsageAccountResult](#usageaccountresult)
    * SumByDataSource
      * items [UsageDataSourceResult](#usagedatasourceresult)
    * SumByResource
      * items [UsageResourceResult](#usageresourceresult)
    * TopResources
      * items [UsageResourceResult](#usageresourceresult)

### GuardDutyArn
* GuardDutyArn `string`

### IamInstanceProfile
* IamInstanceProfile `object`: Contains information about the EC2 instance profile.
  * Arn
  * Id

### InstanceDetails
* InstanceDetails `object`: Contains information about the details of an instance.
  * AvailabilityZone
  * IamInstanceProfile
    * Arn
    * Id
  * ImageDescription
  * ImageId
  * InstanceId
  * InstanceState
  * InstanceType
  * LaunchTime
  * NetworkInterfaces
    * items [NetworkInterface](#networkinterface)
  * OutpostArn
  * Platform
  * ProductCodes
    * items [ProductCode](#productcode)
  * Tags
    * items [Tag](#tag)

### Integer
* Integer `integer`

### InternalServerErrorException


### Invitation
* Invitation `object`: Contains information about the invitation to become a member account.
  * AccountId
  * InvitationId
  * InvitedAt
  * RelationshipStatus

### Invitations
* Invitations `array`
  * items [Invitation](#invitation)

### InviteMembersRequest
* InviteMembersRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)
  * DisableEmailNotification
  * Message

### InviteMembersResponse
* InviteMembersResponse `object`
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### IpSetFormat
* IpSetFormat `string` (values: TXT, STIX, OTX_CSV, ALIEN_VAULT, PROOF_POINT, FIRE_EYE)

### IpSetIds
* IpSetIds `array`
  * items [String](#string)

### IpSetStatus
* IpSetStatus `string` (values: INACTIVE, ACTIVATING, ACTIVE, DEACTIVATING, ERROR, DELETE_PENDING, DELETED)

### Ipv6Addresses
* Ipv6Addresses `array`
  * items [String](#string)

### ListDetectorsRequest
* ListDetectorsRequest `object`

### ListDetectorsResponse
* ListDetectorsResponse `object`
  * DetectorIds **required**
    * items [DetectorId](#detectorid)
  * NextToken

### ListFiltersRequest
* ListFiltersRequest `object`

### ListFiltersResponse
* ListFiltersResponse `object`
  * FilterNames **required**
    * items [FilterName](#filtername)
  * NextToken

### ListFindingsRequest
* ListFindingsRequest `object`
  * FindingCriteria
    * Criterion
  * MaxResults
  * NextToken
  * SortCriteria
    * AttributeName
    * OrderBy

### ListFindingsResponse
* ListFindingsResponse `object`
  * FindingIds **required**
    * items [FindingId](#findingid)
  * NextToken

### ListIPSetsRequest
* ListIPSetsRequest `object`

### ListIPSetsResponse
* ListIPSetsResponse `object`
  * IpSetIds **required**
    * items [String](#string)
  * NextToken

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

### ListPublishingDestinationsRequest
* ListPublishingDestinationsRequest `object`

### ListPublishingDestinationsResponse
* ListPublishingDestinationsResponse `object`
  * Destinations **required**
    * items [Destination](#destination)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### ListThreatIntelSetsRequest
* ListThreatIntelSetsRequest `object`

### ListThreatIntelSetsResponse
* ListThreatIntelSetsResponse `object`
  * NextToken
  * ThreatIntelSetIds **required**
    * items [String](#string)

### LocalIpDetails
* LocalIpDetails `object`: Contains information about the local IP address of the connection.
  * IpAddressV4

### LocalPortDetails
* LocalPortDetails `object`: Contains information about the port for the local connection.
  * Port
  * PortName

### Location
* Location `string`

### Long
* Long `integer`

### Master
* Master `object`: Contains information about the administrator account and invitation.
  * AccountId
  * InvitationId
  * InvitedAt
  * RelationshipStatus

### MaxResults
* MaxResults `integer`

### Member
* Member `object`: Contains information about the member account. 
  * AccountId **required**
  * DetectorId
  * Email **required**
  * InvitedAt
  * MasterId **required**
  * RelationshipStatus **required**
  * UpdatedAt **required**

### MemberDataSourceConfiguration
* MemberDataSourceConfiguration `object`: Contains information on which data sources are enabled for a member account.
  * AccountId **required**
  * DataSources **required**
    * CloudTrail **required**
      * Status **required**
    * DNSLogs **required**
      * Status **required**
    * FlowLogs **required**
      * Status **required**
    * S3Logs **required**
      * Status **required**

### MemberDataSourceConfigurations
* MemberDataSourceConfigurations `array`
  * items [MemberDataSourceConfiguration](#memberdatasourceconfiguration)

### Members
* Members `array`
  * items [Member](#member)

### Name
* Name `string`

### Neq
* Neq `array`
  * items [String](#string)

### NetworkConnectionAction
* NetworkConnectionAction `object`: Contains information about the NETWORK_CONNECTION action described in the finding.
  * Blocked
  * ConnectionDirection
  * LocalIpDetails
    * IpAddressV4
  * LocalPortDetails
    * Port
    * PortName
  * Protocol
  * RemoteIpDetails
    * City
      * CityName
    * Country
      * CountryCode
      * CountryName
    * GeoLocation
      * Lat
      * Lon
    * IpAddressV4
    * Organization
      * Asn
      * AsnOrg
      * Isp
      * Org
  * RemotePortDetails
    * Port
    * PortName

### NetworkInterface
* NetworkInterface `object`: Contains information about the elastic network interface of the EC2 instance.
  * Ipv6Addresses
    * items [String](#string)
  * NetworkInterfaceId
  * PrivateDnsName
  * PrivateIpAddress
  * PrivateIpAddresses
    * items [PrivateIpAddressDetails](#privateipaddressdetails)
  * PublicDnsName
  * PublicIp
  * SecurityGroups
    * items [SecurityGroup](#securitygroup)
  * SubnetId
  * VpcId

### NetworkInterfaces
* NetworkInterfaces `array`
  * items [NetworkInterface](#networkinterface)

### NotEquals
* NotEquals `array`
  * items [String](#string)

### OrderBy
* OrderBy `string` (values: ASC, DESC)

### Organization
* Organization `object`: Contains information about the ISP organization of the remote IP address.
  * Asn
  * AsnOrg
  * Isp
  * Org

### OrganizationDataSourceConfigurations
* OrganizationDataSourceConfigurations `object`: An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization.
  * S3Logs
    * AutoEnable **required**

### OrganizationDataSourceConfigurationsResult
* OrganizationDataSourceConfigurationsResult `object`: An object that contains information on which data sources are automatically enabled for new members within the organization.
  * S3Logs **required**
    * AutoEnable **required**

### OrganizationS3LogsConfiguration
* OrganizationS3LogsConfiguration `object`: Describes whether S3 data event logs will be automatically enabled for new members of the organization.
  * AutoEnable **required**

### OrganizationS3LogsConfigurationResult
* OrganizationS3LogsConfigurationResult `object`: The current configuration of S3 data event logs as a data source for the organization.
  * AutoEnable **required**

### Owner
* Owner `object`: Contains information on the owner of the bucket.
  * Id

### PermissionConfiguration
* PermissionConfiguration `object`: Contains information about how permissions are configured for the S3 bucket.
  * AccountLevelPermissions
    * BlockPublicAccess
      * BlockPublicAcls
      * BlockPublicPolicy
      * IgnorePublicAcls
      * RestrictPublicBuckets
  * BucketLevelPermissions
    * AccessControlList
      * AllowsPublicReadAccess
      * AllowsPublicWriteAccess
    * BlockPublicAccess
      * BlockPublicAcls
      * BlockPublicPolicy
      * IgnorePublicAcls
      * RestrictPublicBuckets
    * BucketPolicy
      * AllowsPublicReadAccess
      * AllowsPublicWriteAccess

### PortProbeAction
* PortProbeAction `object`: Contains information about the PORT_PROBE action described in the finding.
  * Blocked
  * PortProbeDetails
    * items [PortProbeDetail](#portprobedetail)

### PortProbeDetail
* PortProbeDetail `object`: Contains information about the port probe details.
  * LocalIpDetails
    * IpAddressV4
  * LocalPortDetails
    * Port
    * PortName
  * RemoteIpDetails
    * City
      * CityName
    * Country
      * CountryCode
      * CountryName
    * GeoLocation
      * Lat
      * Lon
    * IpAddressV4
    * Organization
      * Asn
      * AsnOrg
      * Isp
      * Org

### PortProbeDetails
* PortProbeDetails `array`
  * items [PortProbeDetail](#portprobedetail)

### PrivateIpAddressDetails
* PrivateIpAddressDetails `object`: Contains other private IP address information of the EC2 instance.
  * PrivateDnsName
  * PrivateIpAddress

### PrivateIpAddresses
* PrivateIpAddresses `array`
  * items [PrivateIpAddressDetails](#privateipaddressdetails)

### ProductCode
* ProductCode `object`: Contains information about the product code for the EC2 instance.
  * Code
  * ProductType

### ProductCodes
* ProductCodes `array`
  * items [ProductCode](#productcode)

### PublicAccess
* PublicAccess `object`: Describes the public access policies that apply to the S3 bucket.
  * EffectivePermission
  * PermissionConfiguration
    * AccountLevelPermissions
      * BlockPublicAccess
        * BlockPublicAcls
        * BlockPublicPolicy
        * IgnorePublicAcls
        * RestrictPublicBuckets
    * BucketLevelPermissions
      * AccessControlList
        * AllowsPublicReadAccess
        * AllowsPublicWriteAccess
      * BlockPublicAccess
        * BlockPublicAcls
        * BlockPublicPolicy
        * IgnorePublicAcls
        * RestrictPublicBuckets
      * BucketPolicy
        * AllowsPublicReadAccess
        * AllowsPublicWriteAccess

### PublishingStatus
* PublishingStatus `string` (values: PENDING_VERIFICATION, PUBLISHING, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY, STOPPED)

### RemoteIpDetails
* RemoteIpDetails `object`: Contains information about the remote IP address of the connection.
  * City
    * CityName
  * Country
    * CountryCode
    * CountryName
  * GeoLocation
    * Lat
    * Lon
  * IpAddressV4
  * Organization
    * Asn
    * AsnOrg
    * Isp
    * Org

### RemotePortDetails
* RemotePortDetails `object`: Contains information about the remote port.
  * Port
  * PortName

### Resource
* Resource `object`: Contains information about the AWS resource associated with the activity that prompted GuardDuty to generate a finding.
  * AccessKeyDetails
    * AccessKeyId
    * PrincipalId
    * UserName
    * UserType
  * InstanceDetails
    * AvailabilityZone
    * IamInstanceProfile
      * Arn
      * Id
    * ImageDescription
    * ImageId
    * InstanceId
    * InstanceState
    * InstanceType
    * LaunchTime
    * NetworkInterfaces
      * items [NetworkInterface](#networkinterface)
    * OutpostArn
    * Platform
    * ProductCodes
      * items [ProductCode](#productcode)
    * Tags
      * items [Tag](#tag)
  * ResourceType
  * S3BucketDetails
    * items [S3BucketDetail](#s3bucketdetail)

### ResourceList
* ResourceList `array`
  * items [String](#string)

### S3BucketDetail
* S3BucketDetail `object`: Contains information on the S3 bucket.
  * Arn
  * CreatedAt
  * DefaultServerSideEncryption
    * EncryptionType
    * KmsMasterKeyArn
  * Name
  * Owner
    * Id
  * PublicAccess
    * EffectivePermission
    * PermissionConfiguration
      * AccountLevelPermissions
        * BlockPublicAccess
          * BlockPublicAcls
          * BlockPublicPolicy
          * IgnorePublicAcls
          * RestrictPublicBuckets
      * BucketLevelPermissions
        * AccessControlList
          * AllowsPublicReadAccess
          * AllowsPublicWriteAccess
        * BlockPublicAccess
          * BlockPublicAcls
          * BlockPublicPolicy
          * IgnorePublicAcls
          * RestrictPublicBuckets
        * BucketPolicy
          * AllowsPublicReadAccess
          * AllowsPublicWriteAccess
  * Tags
    * items [Tag](#tag)
  * Type

### S3BucketDetails
* S3BucketDetails `array`
  * items [S3BucketDetail](#s3bucketdetail)

### S3LogsConfiguration
* S3LogsConfiguration `object`: Describes whether S3 data event logs will be enabled as a data source.
  * Enable **required**

### S3LogsConfigurationResult
* S3LogsConfigurationResult `object`: Describes whether S3 data event logs will be enabled as a data source.
  * Status **required**

### SecurityGroup
* SecurityGroup `object`: Contains information about the security groups associated with the EC2 instance.
  * GroupId
  * GroupName

### SecurityGroups
* SecurityGroups `array`
  * items [SecurityGroup](#securitygroup)

### Service
* Service `object`: Contains additional information about the generated finding.
  * Action
    * ActionType
    * AwsApiCallAction
      * Api
      * CallerType
      * DomainDetails
        * Domain
      * ErrorCode
      * RemoteIpDetails
        * City
          * CityName
        * Country
          * CountryCode
          * CountryName
        * GeoLocation
          * Lat
          * Lon
        * IpAddressV4
        * Organization
          * Asn
          * AsnOrg
          * Isp
          * Org
      * ServiceName
    * DnsRequestAction
      * Domain
    * NetworkConnectionAction
      * Blocked
      * ConnectionDirection
      * LocalIpDetails
        * IpAddressV4
      * LocalPortDetails
        * Port
        * PortName
      * Protocol
      * RemoteIpDetails
        * City
          * CityName
        * Country
          * CountryCode
          * CountryName
        * GeoLocation
          * Lat
          * Lon
        * IpAddressV4
        * Organization
          * Asn
          * AsnOrg
          * Isp
          * Org
      * RemotePortDetails
        * Port
        * PortName
    * PortProbeAction
      * Blocked
      * PortProbeDetails
        * items [PortProbeDetail](#portprobedetail)
  * Archived
  * Count
  * DetectorId
  * EventFirstSeen
  * EventLastSeen
  * Evidence
    * ThreatIntelligenceDetails
      * items [ThreatIntelligenceDetail](#threatintelligencedetail)
  * ResourceRole
  * ServiceName
  * UserFeedback

### SortCriteria
* SortCriteria `object`: Contains information about the criteria used for sorting findings.
  * AttributeName
  * OrderBy

### StartMonitoringMembersRequest
* StartMonitoringMembersRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)

### StartMonitoringMembersResponse
* StartMonitoringMembersResponse `object`
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### StopMonitoringMembersRequest
* StopMonitoringMembersRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)

### StopMonitoringMembersResponse
* StopMonitoringMembersResponse `object`
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### String
* String `string`

### Tag
* Tag `object`: Contains information about a tag associated with the EC2 instance.
  * Key
  * Value

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

### Tags
* Tags `array`
  * items [Tag](#tag)

### ThreatIntelSetFormat
* ThreatIntelSetFormat `string` (values: TXT, STIX, OTX_CSV, ALIEN_VAULT, PROOF_POINT, FIRE_EYE)

### ThreatIntelSetIds
* ThreatIntelSetIds `array`
  * items [String](#string)

### ThreatIntelSetStatus
* ThreatIntelSetStatus `string` (values: INACTIVE, ACTIVATING, ACTIVE, DEACTIVATING, ERROR, DELETE_PENDING, DELETED)

### ThreatIntelligenceDetail
* ThreatIntelligenceDetail `object`: An instance of a threat intelligence detail that constitutes evidence for the finding.
  * ThreatListName
  * ThreatNames
    * items [String](#string)

### ThreatIntelligenceDetails
* ThreatIntelligenceDetails `array`
  * items [ThreatIntelligenceDetail](#threatintelligencedetail)

### ThreatNames
* ThreatNames `array`
  * items [String](#string)

### Timestamp
* Timestamp `string`

### Total
* Total `object`: Contains the total usage with the corresponding currency unit for that value.
  * Amount
  * Unit

### UnarchiveFindingsRequest
* UnarchiveFindingsRequest `object`
  * FindingIds **required**
    * items [FindingId](#findingid)

### UnarchiveFindingsResponse
* UnarchiveFindingsResponse `object`

### UnprocessedAccount
* UnprocessedAccount `object`: Contains information about the accounts that weren't processed.
  * AccountId **required**
  * Result **required**

### UnprocessedAccounts
* UnprocessedAccounts `array`
  * items [UnprocessedAccount](#unprocessedaccount)

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDetectorRequest
* UpdateDetectorRequest `object`
  * DataSources
    * S3Logs
      * Enable **required**
  * Enable
  * FindingPublishingFrequency

### UpdateDetectorResponse
* UpdateDetectorResponse `object`

### UpdateFilterRequest
* UpdateFilterRequest `object`
  * Action
  * Description
  * FindingCriteria
    * Criterion
  * Rank

### UpdateFilterResponse
* UpdateFilterResponse `object`
  * Name **required**

### UpdateFindingsFeedbackRequest
* UpdateFindingsFeedbackRequest `object`
  * Comments
  * Feedback **required**
  * FindingIds **required**
    * items [FindingId](#findingid)

### UpdateFindingsFeedbackResponse
* UpdateFindingsFeedbackResponse `object`

### UpdateIPSetRequest
* UpdateIPSetRequest `object`
  * Activate
  * Location
  * Name

### UpdateIPSetResponse
* UpdateIPSetResponse `object`

### UpdateMemberDetectorsRequest
* UpdateMemberDetectorsRequest `object`
  * AccountIds **required**
    * items [AccountId](#accountid)
  * DataSources
    * S3Logs
      * Enable **required**

### UpdateMemberDetectorsResponse
* UpdateMemberDetectorsResponse `object`
  * UnprocessedAccounts **required**
    * items [UnprocessedAccount](#unprocessedaccount)

### UpdateOrganizationConfigurationRequest
* UpdateOrganizationConfigurationRequest `object`
  * AutoEnable **required**
  * DataSources
    * S3Logs
      * AutoEnable **required**

### UpdateOrganizationConfigurationResponse
* UpdateOrganizationConfigurationResponse `object`

### UpdatePublishingDestinationRequest
* UpdatePublishingDestinationRequest `object`
  * DestinationProperties
    * DestinationArn
    * KmsKeyArn

### UpdatePublishingDestinationResponse
* UpdatePublishingDestinationResponse `object`

### UpdateThreatIntelSetRequest
* UpdateThreatIntelSetRequest `object`
  * Activate
  * Location
  * Name

### UpdateThreatIntelSetResponse
* UpdateThreatIntelSetResponse `object`

### UsageAccountResult
* UsageAccountResult `object`: Contains information on the total of usage based on account IDs.
  * AccountId
  * Total
    * Amount
    * Unit

### UsageAccountResultList
* UsageAccountResultList `array`
  * items [UsageAccountResult](#usageaccountresult)

### UsageCriteria
* UsageCriteria `object`: Contains information about the criteria used to query usage statistics.
  * AccountIds
    * items [AccountId](#accountid)
  * DataSources **required**
    * items [DataSource](#datasource)
  * Resources
    * items [String](#string)

### UsageDataSourceResult
* UsageDataSourceResult `object`: Contains information on the result of usage based on data source type.
  * DataSource
  * Total
    * Amount
    * Unit

### UsageDataSourceResultList
* UsageDataSourceResultList `array`
  * items [UsageDataSourceResult](#usagedatasourceresult)

### UsageResourceResult
* UsageResourceResult `object`: Contains information on the sum of usage based on an AWS resource.
  * Resource
  * Total
    * Amount
    * Unit

### UsageResourceResultList
* UsageResourceResultList `array`
  * items [UsageResourceResult](#usageresourceresult)

### UsageStatisticType
* UsageStatisticType `string` (values: SUM_BY_ACCOUNT, SUM_BY_DATA_SOURCE, SUM_BY_RESOURCE, TOP_RESOURCES)

### UsageStatistics
* UsageStatistics `object`: Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for other types will be null. 
  * SumByAccount
    * items [UsageAccountResult](#usageaccountresult)
  * SumByDataSource
    * items [UsageDataSourceResult](#usagedatasourceresult)
  * SumByResource
    * items [UsageResourceResult](#usageresourceresult)
  * TopResources
    * items [UsageResourceResult](#usageresourceresult)


