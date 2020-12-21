# @datafire/amazonaws_fms

Client library for Firewall Management Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_fms
```
```js
let amazonaws_fms = require('@datafire/amazonaws_fms').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Firewall Manager</fullname> <p>This is the <i>AWS Firewall Manager API Reference</i>. This guide is for developers who need detailed information about the AWS Firewall Manager API actions, data types, and errors. For detailed information about AWS Firewall Manager features, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">AWS Firewall Manager Developer Guide</a>.</p> <p>Some API actions require explicit resource permissions. For information, see the developer guide topic <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a>. </p>

## Actions

### AssociateAdminAccount



```js
amazonaws_fms.AssociateAdminAccount({
  "AdminAccount": null
}, context)
```

#### Input
* input `object`
  * AdminAccount **required**

#### Output
*Output schema unknown*

### DeleteAppsList



```js
amazonaws_fms.DeleteAppsList({
  "ListId": null
}, context)
```

#### Input
* input `object`
  * ListId **required**

#### Output
*Output schema unknown*

### DeleteNotificationChannel



```js
amazonaws_fms.DeleteNotificationChannel({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### DeletePolicy



```js
amazonaws_fms.DeletePolicy({
  "PolicyId": null
}, context)
```

#### Input
* input `object`
  * DeleteAllPolicyResources
  * PolicyId **required**

#### Output
*Output schema unknown*

### DeleteProtocolsList



```js
amazonaws_fms.DeleteProtocolsList({
  "ListId": null
}, context)
```

#### Input
* input `object`
  * ListId **required**

#### Output
*Output schema unknown*

### DisassociateAdminAccount



```js
amazonaws_fms.DisassociateAdminAccount({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### GetAdminAccount



```js
amazonaws_fms.GetAdminAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAdminAccountResponse](#getadminaccountresponse)

### GetAppsList



```js
amazonaws_fms.GetAppsList({
  "ListId": null
}, context)
```

#### Input
* input `object`
  * DefaultList
  * ListId **required**

#### Output
* output [GetAppsListResponse](#getappslistresponse)

### GetComplianceDetail



```js
amazonaws_fms.GetComplianceDetail({
  "PolicyId": null,
  "MemberAccount": null
}, context)
```

#### Input
* input `object`
  * MemberAccount **required**
  * PolicyId **required**

#### Output
* output [GetComplianceDetailResponse](#getcompliancedetailresponse)

### GetNotificationChannel



```js
amazonaws_fms.GetNotificationChannel({}, context)
```

#### Input
* input `object`

#### Output
* output [GetNotificationChannelResponse](#getnotificationchannelresponse)

### GetPolicy



```js
amazonaws_fms.GetPolicy({
  "PolicyId": null
}, context)
```

#### Input
* input `object`
  * PolicyId **required**

#### Output
* output [GetPolicyResponse](#getpolicyresponse)

### GetProtectionStatus



```js
amazonaws_fms.GetProtectionStatus({
  "PolicyId": null
}, context)
```

#### Input
* input `object`
  * EndTime
  * MaxResults
  * MemberAccountId
  * NextToken
  * PolicyId **required**
  * StartTime

#### Output
* output [GetProtectionStatusResponse](#getprotectionstatusresponse)

### GetProtocolsList



```js
amazonaws_fms.GetProtocolsList({
  "ListId": null
}, context)
```

#### Input
* input `object`
  * DefaultList
  * ListId **required**

#### Output
* output [GetProtocolsListResponse](#getprotocolslistresponse)

### GetViolationDetails



```js
amazonaws_fms.GetViolationDetails({
  "PolicyId": null,
  "MemberAccount": null,
  "ResourceId": null,
  "ResourceType": null
}, context)
```

#### Input
* input `object`
  * MemberAccount **required**
  * PolicyId **required**
  * ResourceId **required**
  * ResourceType **required**

#### Output
* output [GetViolationDetailsResponse](#getviolationdetailsresponse)

### ListAppsLists



```js
amazonaws_fms.ListAppsLists({
  "MaxResults": null
}, context)
```

#### Input
* input `object`
  * DefaultLists
  * MaxResults **required**
  * NextToken

#### Output
* output [ListAppsListsResponse](#listappslistsresponse)

### ListComplianceStatus



```js
amazonaws_fms.ListComplianceStatus({
  "PolicyId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * PolicyId **required**

#### Output
* output [ListComplianceStatusResponse](#listcompliancestatusresponse)

### ListMemberAccounts



```js
amazonaws_fms.ListMemberAccounts({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListMemberAccountsResponse](#listmemberaccountsresponse)

### ListPolicies



```js
amazonaws_fms.ListPolicies({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

### ListProtocolsLists



```js
amazonaws_fms.ListProtocolsLists({
  "MaxResults": null
}, context)
```

#### Input
* input `object`
  * DefaultLists
  * MaxResults **required**
  * NextToken

#### Output
* output [ListProtocolsListsResponse](#listprotocolslistsresponse)

### ListTagsForResource



```js
amazonaws_fms.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### PutAppsList



```js
amazonaws_fms.PutAppsList({
  "AppsList": null
}, context)
```

#### Input
* input `object`
  * AppsList **required**
    * AppsList **required**
      * items [App](#app)
    * CreateTime
    * LastUpdateTime
    * ListId
    * ListName **required**
    * ListUpdateToken
    * PreviousAppsList
  * TagList
    * items [Tag](#tag)

#### Output
* output [PutAppsListResponse](#putappslistresponse)

### PutNotificationChannel



```js
amazonaws_fms.PutNotificationChannel({
  "SnsTopicArn": null,
  "SnsRoleName": null
}, context)
```

#### Input
* input `object`
  * SnsRoleName **required**
  * SnsTopicArn **required**

#### Output
*Output schema unknown*

### PutPolicy



```js
amazonaws_fms.PutPolicy({
  "Policy": null
}, context)
```

#### Input
* input `object`
  * Policy **required**
    * ExcludeMap
    * ExcludeResourceTags **required**
    * IncludeMap
    * PolicyId
    * PolicyName **required**
    * PolicyUpdateToken
    * RemediationEnabled **required**
    * ResourceTags
      * items [ResourceTag](#resourcetag)
    * ResourceType **required**
    * ResourceTypeList
      * items [ResourceType](#resourcetype)
    * SecurityServicePolicyData **required**
      * ManagedServiceData
      * Type **required**
  * TagList
    * items [Tag](#tag)

#### Output
* output [PutPolicyResponse](#putpolicyresponse)

### PutProtocolsList



```js
amazonaws_fms.PutProtocolsList({
  "ProtocolsList": null
}, context)
```

#### Input
* input `object`
  * ProtocolsList **required**
    * CreateTime
    * LastUpdateTime
    * ListId
    * ListName **required**
    * ListUpdateToken
    * PreviousProtocolsList
    * ProtocolsList **required**
      * items [Protocol](#protocol)
  * TagList
    * items [Tag](#tag)

#### Output
* output [PutProtocolsListResponse](#putprotocolslistresponse)

### TagResource



```js
amazonaws_fms.TagResource({
  "ResourceArn": null,
  "TagList": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagList **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_fms.UntagResource({
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
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AWSAccountId
* AWSAccountId `string`

### AccountRoleStatus
* AccountRoleStatus `string` (values: READY, CREATING, PENDING_DELETION, DELETING, DELETED)

### App
* App `object`: An individual AWS Firewall Manager application.
  * AppName **required**
  * Port **required**
  * Protocol **required**

### AppsList
* AppsList `array`
  * items [App](#app)

### AppsListData
* AppsListData `object`: An AWS Firewall Manager applications list.
  * AppsList **required**
    * items [App](#app)
  * CreateTime
  * LastUpdateTime
  * ListId
  * ListName **required**
  * ListUpdateToken
  * PreviousAppsList

### AppsListDataSummary
* AppsListDataSummary `object`: Details of the AWS Firewall Manager applications list.
  * AppsList
    * items [App](#app)
  * ListArn
  * ListId
  * ListName

### AppsListsData
* AppsListsData `array`
  * items [AppsListDataSummary](#appslistdatasummary)

### AssociateAdminAccountRequest
* AssociateAdminAccountRequest `object`
  * AdminAccount **required**

### AwsEc2InstanceViolation
* AwsEc2InstanceViolation `object`: Violations for an EC2 instance resource.
  * AwsEc2NetworkInterfaceViolations
    * items [AwsEc2NetworkInterfaceViolation](#awsec2networkinterfaceviolation)
  * ViolationTarget

### AwsEc2NetworkInterfaceViolation
* AwsEc2NetworkInterfaceViolation `object`: Violations for network interfaces associated with an EC2 instance.
  * ViolatingSecurityGroups
    * items [ResourceId](#resourceid)
  * ViolationTarget

### AwsEc2NetworkInterfaceViolations
* AwsEc2NetworkInterfaceViolations `array`
  * items [AwsEc2NetworkInterfaceViolation](#awsec2networkinterfaceviolation)

### AwsVPCSecurityGroupViolation
* AwsVPCSecurityGroupViolation `object`: Details of the rule violation in a security group when compared to the master security group of the AWS Firewall Manager policy.
  * PartialMatches
    * items [PartialMatch](#partialmatch)
  * PossibleSecurityGroupRemediationActions
    * items [SecurityGroupRemediationAction](#securitygroupremediationaction)
  * ViolationTarget
  * ViolationTargetDescription

### Boolean
* Boolean `boolean`

### CIDR
* CIDR `string`

### ComplianceViolator
* ComplianceViolator `object`: Details of the resource that is not protected by the policy.
  * ResourceId
  * ResourceType
  * ViolationReason

### ComplianceViolators
* ComplianceViolators `array`
  * items [ComplianceViolator](#complianceviolator)

### CustomerPolicyScopeId
* CustomerPolicyScopeId `string`

### CustomerPolicyScopeIdList
* CustomerPolicyScopeIdList `array`
  * items [CustomerPolicyScopeId](#customerpolicyscopeid)

### CustomerPolicyScopeIdType
* CustomerPolicyScopeIdType `string` (values: ACCOUNT, ORG_UNIT)

### CustomerPolicyScopeMap
* CustomerPolicyScopeMap `object`

### DeleteAppsListRequest
* DeleteAppsListRequest `object`
  * ListId **required**

### DeleteNotificationChannelRequest
* DeleteNotificationChannelRequest `object`

### DeletePolicyRequest
* DeletePolicyRequest `object`
  * DeleteAllPolicyResources
  * PolicyId **required**

### DeleteProtocolsListRequest
* DeleteProtocolsListRequest `object`
  * ListId **required**

### DependentServiceName
* DependentServiceName `string` (values: AWSCONFIG, AWSWAF, AWSSHIELD_ADVANCED, AWSVPC)

### DetailedInfo
* DetailedInfo `string`

### DisassociateAdminAccountRequest
* DisassociateAdminAccountRequest `object`

### EvaluationResult
* EvaluationResult `object`: Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy.
  * ComplianceStatus
  * EvaluationLimitExceeded
  * ViolatorCount

### EvaluationResults
* EvaluationResults `array`
  * items [EvaluationResult](#evaluationresult)

### GetAdminAccountRequest
* GetAdminAccountRequest `object`

### GetAdminAccountResponse
* GetAdminAccountResponse `object`
  * AdminAccount
  * RoleStatus

### GetAppsListRequest
* GetAppsListRequest `object`
  * DefaultList
  * ListId **required**

### GetAppsListResponse
* GetAppsListResponse `object`
  * AppsList
    * AppsList **required**
      * items [App](#app)
    * CreateTime
    * LastUpdateTime
    * ListId
    * ListName **required**
    * ListUpdateToken
    * PreviousAppsList
  * AppsListArn

### GetComplianceDetailRequest
* GetComplianceDetailRequest `object`
  * MemberAccount **required**
  * PolicyId **required**

### GetComplianceDetailResponse
* GetComplianceDetailResponse `object`
  * PolicyComplianceDetail
    * EvaluationLimitExceeded
    * ExpiredAt
    * IssueInfoMap
    * MemberAccount
    * PolicyId
    * PolicyOwner
    * Violators
      * items [ComplianceViolator](#complianceviolator)

### GetNotificationChannelRequest
* GetNotificationChannelRequest `object`

### GetNotificationChannelResponse
* GetNotificationChannelResponse `object`
  * SnsRoleName
  * SnsTopicArn

### GetPolicyRequest
* GetPolicyRequest `object`
  * PolicyId **required**

### GetPolicyResponse
* GetPolicyResponse `object`
  * Policy
    * ExcludeMap
    * ExcludeResourceTags **required**
    * IncludeMap
    * PolicyId
    * PolicyName **required**
    * PolicyUpdateToken
    * RemediationEnabled **required**
    * ResourceTags
      * items [ResourceTag](#resourcetag)
    * ResourceType **required**
    * ResourceTypeList
      * items [ResourceType](#resourcetype)
    * SecurityServicePolicyData **required**
      * ManagedServiceData
      * Type **required**
  * PolicyArn

### GetProtectionStatusRequest
* GetProtectionStatusRequest `object`
  * EndTime
  * MaxResults
  * MemberAccountId
  * NextToken
  * PolicyId **required**
  * StartTime

### GetProtectionStatusResponse
* GetProtectionStatusResponse `object`
  * AdminAccountId
  * Data
  * NextToken
  * ServiceType

### GetProtocolsListRequest
* GetProtocolsListRequest `object`
  * DefaultList
  * ListId **required**

### GetProtocolsListResponse
* GetProtocolsListResponse `object`
  * ProtocolsList
    * CreateTime
    * LastUpdateTime
    * ListId
    * ListName **required**
    * ListUpdateToken
    * PreviousProtocolsList
    * ProtocolsList **required**
      * items [Protocol](#protocol)
  * ProtocolsListArn

### GetViolationDetailsRequest
* GetViolationDetailsRequest `object`
  * MemberAccount **required**
  * PolicyId **required**
  * ResourceId **required**
  * ResourceType **required**

### GetViolationDetailsResponse
* GetViolationDetailsResponse `object`
  * ViolationDetail
    * MemberAccount **required**
    * PolicyId **required**
    * ResourceDescription
    * ResourceId **required**
    * ResourceTags
      * items [Tag](#tag)
    * ResourceType **required**
    * ResourceViolations **required**
      * items [ResourceViolation](#resourceviolation)

### IPPortNumber
* IPPortNumber `integer`

### InternalErrorException


### InvalidInputException


### InvalidOperationException


### InvalidTypeException


### IssueInfoMap
* IssueInfoMap `object`

### LengthBoundedString
* LengthBoundedString `string`

### LimitExceededException


### ListAppsListsRequest
* ListAppsListsRequest `object`
  * DefaultLists
  * MaxResults **required**
  * NextToken

### ListAppsListsResponse
* ListAppsListsResponse `object`
  * AppsLists
    * items [AppsListDataSummary](#appslistdatasummary)
  * NextToken

### ListComplianceStatusRequest
* ListComplianceStatusRequest `object`
  * MaxResults
  * NextToken
  * PolicyId **required**

### ListComplianceStatusResponse
* ListComplianceStatusResponse `object`
  * NextToken
  * PolicyComplianceStatusList
    * items [PolicyComplianceStatus](#policycompliancestatus)

### ListId
* ListId `string`

### ListMemberAccountsRequest
* ListMemberAccountsRequest `object`
  * MaxResults
  * NextToken

### ListMemberAccountsResponse
* ListMemberAccountsResponse `object`
  * MemberAccounts
    * items [AWSAccountId](#awsaccountid)
  * NextToken

### ListPoliciesRequest
* ListPoliciesRequest `object`
  * MaxResults
  * NextToken

### ListPoliciesResponse
* ListPoliciesResponse `object`
  * NextToken
  * PolicyList
    * items [PolicySummary](#policysummary)

### ListProtocolsListsRequest
* ListProtocolsListsRequest `object`
  * DefaultLists
  * MaxResults **required**
  * NextToken

### ListProtocolsListsResponse
* ListProtocolsListsResponse `object`
  * NextToken
  * ProtocolsLists
    * items [ProtocolsListDataSummary](#protocolslistdatasummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * TagList
    * items [Tag](#tag)

### ManagedServiceData
* ManagedServiceData `string`

### MemberAccounts
* MemberAccounts `array`
  * items [AWSAccountId](#awsaccountid)

### NetworkFirewallAction
* NetworkFirewallAction `string`

### NetworkFirewallActionList
* NetworkFirewallActionList `array`
  * items [NetworkFirewallAction](#networkfirewallaction)

### NetworkFirewallMissingExpectedRTViolation
* NetworkFirewallMissingExpectedRTViolation `object`: Violation details for AWS Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.
  * AvailabilityZone
  * CurrentRouteTable
  * ExpectedRouteTable
  * VPC
  * ViolationTarget

### NetworkFirewallMissingFirewallViolation
* NetworkFirewallMissingFirewallViolation `object`: Violation details for AWS Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC. 
  * AvailabilityZone
  * TargetViolationReason
  * VPC
  * ViolationTarget

### NetworkFirewallMissingSubnetViolation
* NetworkFirewallMissingSubnetViolation `object`: Violation details for AWS Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet.
  * AvailabilityZone
  * TargetViolationReason
  * VPC
  * ViolationTarget

### NetworkFirewallPolicyDescription
* NetworkFirewallPolicyDescription `object`: The definition of the AWS Network Firewall firewall policy.
  * StatefulRuleGroups
    * items [StatefulRuleGroup](#statefulrulegroup)
  * StatelessCustomActions
    * items [NetworkFirewallAction](#networkfirewallaction)
  * StatelessDefaultActions
    * items [NetworkFirewallAction](#networkfirewallaction)
  * StatelessFragmentDefaultActions
    * items [NetworkFirewallAction](#networkfirewallaction)
  * StatelessRuleGroups
    * items [StatelessRuleGroup](#statelessrulegroup)

### NetworkFirewallPolicyModifiedViolation
* NetworkFirewallPolicyModifiedViolation `object`: Violation details for AWS Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. 
  * CurrentPolicyDescription
    * StatefulRuleGroups
      * items [StatefulRuleGroup](#statefulrulegroup)
    * StatelessCustomActions
      * items [NetworkFirewallAction](#networkfirewallaction)
    * StatelessDefaultActions
      * items [NetworkFirewallAction](#networkfirewallaction)
    * StatelessFragmentDefaultActions
      * items [NetworkFirewallAction](#networkfirewallaction)
    * StatelessRuleGroups
      * items [StatelessRuleGroup](#statelessrulegroup)
  * ExpectedPolicyDescription
    * StatefulRuleGroups
      * items [StatefulRuleGroup](#statefulrulegroup)
    * StatelessCustomActions
      * items [NetworkFirewallAction](#networkfirewallaction)
    * StatelessDefaultActions
      * items [NetworkFirewallAction](#networkfirewallaction)
    * StatelessFragmentDefaultActions
      * items [NetworkFirewallAction](#networkfirewallaction)
    * StatelessRuleGroups
      * items [StatelessRuleGroup](#statelessrulegroup)
  * ViolationTarget

### NetworkFirewallResourceName
* NetworkFirewallResourceName `string`

### PaginationMaxResults
* PaginationMaxResults `integer`

### PaginationToken
* PaginationToken `string`

### PartialMatch
* PartialMatch `object`: The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.
  * Reference
  * TargetViolationReasons
    * items [TargetViolationReason](#targetviolationreason)

### PartialMatches
* PartialMatches `array`
  * items [PartialMatch](#partialmatch)

### Policy
* Policy `object`: An AWS Firewall Manager policy.
  * ExcludeMap
  * ExcludeResourceTags **required**
  * IncludeMap
  * PolicyId
  * PolicyName **required**
  * PolicyUpdateToken
  * RemediationEnabled **required**
  * ResourceTags
    * items [ResourceTag](#resourcetag)
  * ResourceType **required**
  * ResourceTypeList
    * items [ResourceType](#resourcetype)
  * SecurityServicePolicyData **required**
    * ManagedServiceData
    * Type **required**

### PolicyComplianceDetail
* PolicyComplianceDetail `object`: Describes the noncompliant resources in a member account for a specific AWS Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.
  * EvaluationLimitExceeded
  * ExpiredAt
  * IssueInfoMap
  * MemberAccount
  * PolicyId
  * PolicyOwner
  * Violators
    * items [ComplianceViolator](#complianceviolator)

### PolicyComplianceStatus
* PolicyComplianceStatus `object`: Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for AWS WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.
  * EvaluationResults
    * items [EvaluationResult](#evaluationresult)
  * IssueInfoMap
  * LastUpdated
  * MemberAccount
  * PolicyId
  * PolicyName
  * PolicyOwner

### PolicyComplianceStatusList
* PolicyComplianceStatusList `array`
  * items [PolicyComplianceStatus](#policycompliancestatus)

### PolicyComplianceStatusType
* PolicyComplianceStatusType `string` (values: COMPLIANT, NON_COMPLIANT)

### PolicyId
* PolicyId `string`

### PolicySummary
* PolicySummary `object`: Details of the AWS Firewall Manager policy. 
  * PolicyArn
  * PolicyId
  * PolicyName
  * RemediationEnabled
  * ResourceType
  * SecurityServiceType

### PolicySummaryList
* PolicySummaryList `array`
  * items [PolicySummary](#policysummary)

### PolicyUpdateToken
* PolicyUpdateToken `string`

### PreviousAppsList
* PreviousAppsList `object`

### PreviousListVersion
* PreviousListVersion `string`

### PreviousProtocolsList
* PreviousProtocolsList `object`

### ProtectionData
* ProtectionData `string`

### Protocol
* Protocol `string`

### ProtocolsList
* ProtocolsList `array`
  * items [Protocol](#protocol)

### ProtocolsListData
* ProtocolsListData `object`: An AWS Firewall Manager protocols list.
  * CreateTime
  * LastUpdateTime
  * ListId
  * ListName **required**
  * ListUpdateToken
  * PreviousProtocolsList
  * ProtocolsList **required**
    * items [Protocol](#protocol)

### ProtocolsListDataSummary
* ProtocolsListDataSummary `object`: Details of the AWS Firewall Manager protocols list.
  * ListArn
  * ListId
  * ListName
  * ProtocolsList
    * items [Protocol](#protocol)

### ProtocolsListsData
* ProtocolsListsData `array`
  * items [ProtocolsListDataSummary](#protocolslistdatasummary)

### PutAppsListRequest
* PutAppsListRequest `object`
  * AppsList **required**
    * AppsList **required**
      * items [App](#app)
    * CreateTime
    * LastUpdateTime
    * ListId
    * ListName **required**
    * ListUpdateToken
    * PreviousAppsList
  * TagList
    * items [Tag](#tag)

### PutAppsListResponse
* PutAppsListResponse `object`
  * AppsList
    * AppsList **required**
      * items [App](#app)
    * CreateTime
    * LastUpdateTime
    * ListId
    * ListName **required**
    * ListUpdateToken
    * PreviousAppsList
  * AppsListArn

### PutNotificationChannelRequest
* PutNotificationChannelRequest `object`
  * SnsRoleName **required**
  * SnsTopicArn **required**

### PutPolicyRequest
* PutPolicyRequest `object`
  * Policy **required**
    * ExcludeMap
    * ExcludeResourceTags **required**
    * IncludeMap
    * PolicyId
    * PolicyName **required**
    * PolicyUpdateToken
    * RemediationEnabled **required**
    * ResourceTags
      * items [ResourceTag](#resourcetag)
    * ResourceType **required**
    * ResourceTypeList
      * items [ResourceType](#resourcetype)
    * SecurityServicePolicyData **required**
      * ManagedServiceData
      * Type **required**
  * TagList
    * items [Tag](#tag)

### PutPolicyResponse
* PutPolicyResponse `object`
  * Policy
    * ExcludeMap
    * ExcludeResourceTags **required**
    * IncludeMap
    * PolicyId
    * PolicyName **required**
    * PolicyUpdateToken
    * RemediationEnabled **required**
    * ResourceTags
      * items [ResourceTag](#resourcetag)
    * ResourceType **required**
    * ResourceTypeList
      * items [ResourceType](#resourcetype)
    * SecurityServicePolicyData **required**
      * ManagedServiceData
      * Type **required**
  * PolicyArn

### PutProtocolsListRequest
* PutProtocolsListRequest `object`
  * ProtocolsList **required**
    * CreateTime
    * LastUpdateTime
    * ListId
    * ListName **required**
    * ListUpdateToken
    * PreviousProtocolsList
    * ProtocolsList **required**
      * items [Protocol](#protocol)
  * TagList
    * items [Tag](#tag)

### PutProtocolsListResponse
* PutProtocolsListResponse `object`
  * ProtocolsList
    * CreateTime
    * LastUpdateTime
    * ListId
    * ListName **required**
    * ListUpdateToken
    * PreviousProtocolsList
    * ProtocolsList **required**
      * items [Protocol](#protocol)
  * ProtocolsListArn

### ReferenceRule
* ReferenceRule `string`

### RemediationActionDescription
* RemediationActionDescription `string`

### RemediationActionType
* RemediationActionType `string` (values: REMOVE, MODIFY)

### ResourceArn
* ResourceArn `string`

### ResourceCount
* ResourceCount `integer`

### ResourceId
* ResourceId `string`

### ResourceIdList
* ResourceIdList `array`
  * items [ResourceId](#resourceid)

### ResourceName
* ResourceName `string`

### ResourceNotFoundException


### ResourceTag
* ResourceTag `object`: The resource tags that AWS Firewall Manager uses to determine if a particular resource should be included or excluded from the AWS Firewall Manager policy. Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>.
  * Key **required**
  * Value

### ResourceTagKey
* ResourceTagKey `string`

### ResourceTagValue
* ResourceTagValue `string`

### ResourceTags
* ResourceTags `array`
  * items [ResourceTag](#resourcetag)

### ResourceType
* ResourceType `string`

### ResourceTypeList
* ResourceTypeList `array`
  * items [ResourceType](#resourcetype)

### ResourceViolation
* ResourceViolation `object`: Violation detail based on resource type.
  * AwsEc2InstanceViolation
    * AwsEc2NetworkInterfaceViolations
      * items [AwsEc2NetworkInterfaceViolation](#awsec2networkinterfaceviolation)
    * ViolationTarget
  * AwsEc2NetworkInterfaceViolation
    * ViolatingSecurityGroups
      * items [ResourceId](#resourceid)
    * ViolationTarget
  * AwsVPCSecurityGroupViolation
    * PartialMatches
      * items [PartialMatch](#partialmatch)
    * PossibleSecurityGroupRemediationActions
      * items [SecurityGroupRemediationAction](#securitygroupremediationaction)
    * ViolationTarget
    * ViolationTargetDescription
  * NetworkFirewallMissingExpectedRTViolation
    * AvailabilityZone
    * CurrentRouteTable
    * ExpectedRouteTable
    * VPC
    * ViolationTarget
  * NetworkFirewallMissingFirewallViolation
    * AvailabilityZone
    * TargetViolationReason
    * VPC
    * ViolationTarget
  * NetworkFirewallMissingSubnetViolation
    * AvailabilityZone
    * TargetViolationReason
    * VPC
    * ViolationTarget
  * NetworkFirewallPolicyModifiedViolation
    * CurrentPolicyDescription
      * StatefulRuleGroups
        * items [StatefulRuleGroup](#statefulrulegroup)
      * StatelessCustomActions
        * items [NetworkFirewallAction](#networkfirewallaction)
      * StatelessDefaultActions
        * items [NetworkFirewallAction](#networkfirewallaction)
      * StatelessFragmentDefaultActions
        * items [NetworkFirewallAction](#networkfirewallaction)
      * StatelessRuleGroups
        * items [StatelessRuleGroup](#statelessrulegroup)
    * ExpectedPolicyDescription
      * StatefulRuleGroups
        * items [StatefulRuleGroup](#statefulrulegroup)
      * StatelessCustomActions
        * items [NetworkFirewallAction](#networkfirewallaction)
      * StatelessDefaultActions
        * items [NetworkFirewallAction](#networkfirewallaction)
      * StatelessFragmentDefaultActions
        * items [NetworkFirewallAction](#networkfirewallaction)
      * StatelessRuleGroups
        * items [StatelessRuleGroup](#statelessrulegroup)
    * ViolationTarget

### ResourceViolations
* ResourceViolations `array`
  * items [ResourceViolation](#resourceviolation)

### SecurityGroupRemediationAction
* SecurityGroupRemediationAction `object`: Remediation option for the rule specified in the <code>ViolationTarget</code>.
  * Description
  * IsDefaultAction
  * RemediationActionType
  * RemediationResult
    * FromPort
    * IPV4Range
    * IPV6Range
    * PrefixListId
    * Protocol
    * ToPort

### SecurityGroupRemediationActions
* SecurityGroupRemediationActions `array`
  * items [SecurityGroupRemediationAction](#securitygroupremediationaction)

### SecurityGroupRuleDescription
* SecurityGroupRuleDescription `object`: Describes a set of permissions for a security group rule.
  * FromPort
  * IPV4Range
  * IPV6Range
  * PrefixListId
  * Protocol
  * ToPort

### SecurityServicePolicyData
* SecurityServicePolicyData `object`: Details about the security service that is being used to protect the resources.
  * ManagedServiceData
  * Type **required**

### SecurityServiceType
* SecurityServiceType `string` (values: WAF, WAFV2, SHIELD_ADVANCED, SECURITY_GROUPS_COMMON, SECURITY_GROUPS_CONTENT_AUDIT, SECURITY_GROUPS_USAGE_AUDIT, NETWORK_FIREWALL)

### StatefulRuleGroup
* StatefulRuleGroup `object`: AWS Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>. 
  * ResourceId
  * RuleGroupName

### StatefulRuleGroupList
* StatefulRuleGroupList `array`
  * items [StatefulRuleGroup](#statefulrulegroup)

### StatelessRuleGroup
* StatelessRuleGroup `object`: AWS Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>. 
  * Priority
  * ResourceId
  * RuleGroupName

### StatelessRuleGroupList
* StatelessRuleGroupList `array`
  * items [StatelessRuleGroup](#statelessrulegroup)

### StatelessRuleGroupPriority
* StatelessRuleGroupPriority `integer`

### Tag
* Tag `object`: A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource. 
  * Key **required**
  * Value **required**

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
  * TagList **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TargetViolationReason
* TargetViolationReason `string`

### TargetViolationReasons
* TargetViolationReasons `array`
  * items [TargetViolationReason](#targetviolationreason)

### TimeStamp
* TimeStamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateToken
* UpdateToken `string`

### ViolationDetail
* ViolationDetail `object`: Violations for a resource based on the specified AWS Firewall Manager policy and AWS account.
  * MemberAccount **required**
  * PolicyId **required**
  * ResourceDescription
  * ResourceId **required**
  * ResourceTags
    * items [Tag](#tag)
  * ResourceType **required**
  * ResourceViolations **required**
    * items [ResourceViolation](#resourceviolation)

### ViolationReason
* ViolationReason `string` (values: WEB_ACL_MISSING_RULE_GROUP, RESOURCE_MISSING_WEB_ACL, RESOURCE_INCORRECT_WEB_ACL, RESOURCE_MISSING_SHIELD_PROTECTION, RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION, RESOURCE_MISSING_SECURITY_GROUP, RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP, SECURITY_GROUP_UNUSED, SECURITY_GROUP_REDUNDANT, MISSING_FIREWALL, MISSING_FIREWALL_SUBNET_IN_AZ, MISSING_EXPECTED_ROUTE_TABLE, NETWORK_FIREWALL_POLICY_MODIFIED)

### ViolationTarget
* ViolationTarget `string`


