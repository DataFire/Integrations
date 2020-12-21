# @datafire/amazonaws_workmail

Client library for Amazon WorkMail

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_workmail
```
```js
let amazonaws_workmail = require('@datafire/amazonaws_workmail').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.</p> <p>The WorkMail API is designed for the following scenarios:</p> <ul> <li> <p>Listing and describing organizations</p> </li> </ul> <ul> <li> <p>Managing users</p> </li> </ul> <ul> <li> <p>Managing groups</p> </li> </ul> <ul> <li> <p>Managing resources</p> </li> </ul> <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

## Actions

### AssociateDelegateToResource



```js
amazonaws_workmail.AssociateDelegateToResource({
  "OrganizationId": null,
  "ResourceId": null,
  "EntityId": null
}, context)
```

#### Input
* input `object`
  * EntityId **required**
  * OrganizationId **required**
  * ResourceId **required**

#### Output
* output [AssociateDelegateToResourceResponse](#associatedelegatetoresourceresponse)

### AssociateMemberToGroup



```js
amazonaws_workmail.AssociateMemberToGroup({
  "OrganizationId": null,
  "GroupId": null,
  "MemberId": null
}, context)
```

#### Input
* input `object`
  * GroupId **required**
  * MemberId **required**
  * OrganizationId **required**

#### Output
* output [AssociateMemberToGroupResponse](#associatemembertogroupresponse)

### CancelMailboxExportJob



```js
amazonaws_workmail.CancelMailboxExportJob({
  "ClientToken": null,
  "JobId": null,
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * JobId **required**
  * OrganizationId **required**

#### Output
* output [CancelMailboxExportJobResponse](#cancelmailboxexportjobresponse)

### CreateAlias



```js
amazonaws_workmail.CreateAlias({
  "OrganizationId": null,
  "EntityId": null,
  "Alias": null
}, context)
```

#### Input
* input `object`
  * Alias **required**
  * EntityId **required**
  * OrganizationId **required**

#### Output
* output [CreateAliasResponse](#createaliasresponse)

### CreateGroup



```js
amazonaws_workmail.CreateGroup({
  "OrganizationId": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * OrganizationId **required**

#### Output
* output [CreateGroupResponse](#creategroupresponse)

### CreateOrganization



```js
amazonaws_workmail.CreateOrganization({
  "Alias": null
}, context)
```

#### Input
* input `object`
  * Alias **required**
  * ClientToken
  * DirectoryId
  * Domains
    * items [Domain](#domain)
  * EnableInteroperability
  * KmsKeyArn

#### Output
* output [CreateOrganizationResponse](#createorganizationresponse)

### CreateResource



```js
amazonaws_workmail.CreateResource({
  "OrganizationId": null,
  "Name": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * OrganizationId **required**
  * Type **required**

#### Output
* output [CreateResourceResponse](#createresourceresponse)

### CreateUser



```js
amazonaws_workmail.CreateUser({
  "OrganizationId": null,
  "Name": null,
  "DisplayName": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * DisplayName **required**
  * Name **required**
  * OrganizationId **required**
  * Password **required**

#### Output
* output [CreateUserResponse](#createuserresponse)

### DeleteAccessControlRule



```js
amazonaws_workmail.DeleteAccessControlRule({
  "OrganizationId": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * OrganizationId **required**

#### Output
* output [DeleteAccessControlRuleResponse](#deleteaccesscontrolruleresponse)

### DeleteAlias



```js
amazonaws_workmail.DeleteAlias({
  "OrganizationId": null,
  "EntityId": null,
  "Alias": null
}, context)
```

#### Input
* input `object`
  * Alias **required**
  * EntityId **required**
  * OrganizationId **required**

#### Output
* output [DeleteAliasResponse](#deletealiasresponse)

### DeleteGroup



```js
amazonaws_workmail.DeleteGroup({
  "OrganizationId": null,
  "GroupId": null
}, context)
```

#### Input
* input `object`
  * GroupId **required**
  * OrganizationId **required**

#### Output
* output [DeleteGroupResponse](#deletegroupresponse)

### DeleteMailboxPermissions



```js
amazonaws_workmail.DeleteMailboxPermissions({
  "OrganizationId": null,
  "EntityId": null,
  "GranteeId": null
}, context)
```

#### Input
* input `object`
  * EntityId **required**
  * GranteeId **required**
  * OrganizationId **required**

#### Output
* output [DeleteMailboxPermissionsResponse](#deletemailboxpermissionsresponse)

### DeleteOrganization



```js
amazonaws_workmail.DeleteOrganization({
  "OrganizationId": null,
  "DeleteDirectory": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DeleteDirectory **required**
  * OrganizationId **required**

#### Output
* output [DeleteOrganizationResponse](#deleteorganizationresponse)

### DeleteResource



```js
amazonaws_workmail.DeleteResource({
  "OrganizationId": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * OrganizationId **required**
  * ResourceId **required**

#### Output
* output [DeleteResourceResponse](#deleteresourceresponse)

### DeleteRetentionPolicy



```js
amazonaws_workmail.DeleteRetentionPolicy({
  "OrganizationId": null,
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * OrganizationId **required**

#### Output
* output [DeleteRetentionPolicyResponse](#deleteretentionpolicyresponse)

### DeleteUser



```js
amazonaws_workmail.DeleteUser({
  "OrganizationId": null,
  "UserId": null
}, context)
```

#### Input
* input `object`
  * OrganizationId **required**
  * UserId **required**

#### Output
* output [DeleteUserResponse](#deleteuserresponse)

### DeregisterFromWorkMail



```js
amazonaws_workmail.DeregisterFromWorkMail({
  "OrganizationId": null,
  "EntityId": null
}, context)
```

#### Input
* input `object`
  * EntityId **required**
  * OrganizationId **required**

#### Output
* output [DeregisterFromWorkMailResponse](#deregisterfromworkmailresponse)

### DescribeGroup



```js
amazonaws_workmail.DescribeGroup({
  "OrganizationId": null,
  "GroupId": null
}, context)
```

#### Input
* input `object`
  * GroupId **required**
  * OrganizationId **required**

#### Output
* output [DescribeGroupResponse](#describegroupresponse)

### DescribeMailboxExportJob



```js
amazonaws_workmail.DescribeMailboxExportJob({
  "JobId": null,
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * OrganizationId **required**

#### Output
* output [DescribeMailboxExportJobResponse](#describemailboxexportjobresponse)

### DescribeOrganization



```js
amazonaws_workmail.DescribeOrganization({
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * OrganizationId **required**

#### Output
* output [DescribeOrganizationResponse](#describeorganizationresponse)

### DescribeResource



```js
amazonaws_workmail.DescribeResource({
  "OrganizationId": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * OrganizationId **required**
  * ResourceId **required**

#### Output
* output [DescribeResourceResponse](#describeresourceresponse)

### DescribeUser



```js
amazonaws_workmail.DescribeUser({
  "OrganizationId": null,
  "UserId": null
}, context)
```

#### Input
* input `object`
  * OrganizationId **required**
  * UserId **required**

#### Output
* output [DescribeUserResponse](#describeuserresponse)

### DisassociateDelegateFromResource



```js
amazonaws_workmail.DisassociateDelegateFromResource({
  "OrganizationId": null,
  "ResourceId": null,
  "EntityId": null
}, context)
```

#### Input
* input `object`
  * EntityId **required**
  * OrganizationId **required**
  * ResourceId **required**

#### Output
* output [DisassociateDelegateFromResourceResponse](#disassociatedelegatefromresourceresponse)

### DisassociateMemberFromGroup



```js
amazonaws_workmail.DisassociateMemberFromGroup({
  "OrganizationId": null,
  "GroupId": null,
  "MemberId": null
}, context)
```

#### Input
* input `object`
  * GroupId **required**
  * MemberId **required**
  * OrganizationId **required**

#### Output
* output [DisassociateMemberFromGroupResponse](#disassociatememberfromgroupresponse)

### GetAccessControlEffect



```js
amazonaws_workmail.GetAccessControlEffect({
  "OrganizationId": null,
  "IpAddress": null,
  "Action": null,
  "UserId": null
}, context)
```

#### Input
* input `object`
  * Action **required**
  * IpAddress **required**
  * OrganizationId **required**
  * UserId **required**

#### Output
* output [GetAccessControlEffectResponse](#getaccesscontroleffectresponse)

### GetDefaultRetentionPolicy



```js
amazonaws_workmail.GetDefaultRetentionPolicy({
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * OrganizationId **required**

#### Output
* output [GetDefaultRetentionPolicyResponse](#getdefaultretentionpolicyresponse)

### GetMailboxDetails



```js
amazonaws_workmail.GetMailboxDetails({
  "OrganizationId": null,
  "UserId": null
}, context)
```

#### Input
* input `object`
  * OrganizationId **required**
  * UserId **required**

#### Output
* output [GetMailboxDetailsResponse](#getmailboxdetailsresponse)

### ListAccessControlRules



```js
amazonaws_workmail.ListAccessControlRules({
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * OrganizationId **required**

#### Output
* output [ListAccessControlRulesResponse](#listaccesscontrolrulesresponse)

### ListAliases



```js
amazonaws_workmail.ListAliases({
  "OrganizationId": null,
  "EntityId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EntityId **required**
  * MaxResults
  * NextToken
  * OrganizationId **required**

#### Output
* output [ListAliasesResponse](#listaliasesresponse)

### ListGroupMembers



```js
amazonaws_workmail.ListGroupMembers({
  "OrganizationId": null,
  "GroupId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * GroupId **required**
  * MaxResults
  * NextToken
  * OrganizationId **required**

#### Output
* output [ListGroupMembersResponse](#listgroupmembersresponse)

### ListGroups



```js
amazonaws_workmail.ListGroups({
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * OrganizationId **required**

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### ListMailboxExportJobs



```js
amazonaws_workmail.ListMailboxExportJobs({
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * OrganizationId **required**

#### Output
* output [ListMailboxExportJobsResponse](#listmailboxexportjobsresponse)

### ListMailboxPermissions



```js
amazonaws_workmail.ListMailboxPermissions({
  "OrganizationId": null,
  "EntityId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EntityId **required**
  * MaxResults
  * NextToken
  * OrganizationId **required**

#### Output
* output [ListMailboxPermissionsResponse](#listmailboxpermissionsresponse)

### ListOrganizations



```js
amazonaws_workmail.ListOrganizations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListOrganizationsResponse](#listorganizationsresponse)

### ListResourceDelegates



```js
amazonaws_workmail.ListResourceDelegates({
  "OrganizationId": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * OrganizationId **required**
  * ResourceId **required**

#### Output
* output [ListResourceDelegatesResponse](#listresourcedelegatesresponse)

### ListResources



```js
amazonaws_workmail.ListResources({
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * OrganizationId **required**

#### Output
* output [ListResourcesResponse](#listresourcesresponse)

### ListTagsForResource



```js
amazonaws_workmail.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListUsers



```js
amazonaws_workmail.ListUsers({
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * OrganizationId **required**

#### Output
* output [ListUsersResponse](#listusersresponse)

### PutAccessControlRule



```js
amazonaws_workmail.PutAccessControlRule({
  "Name": null,
  "Effect": null,
  "Description": null,
  "OrganizationId": null
}, context)
```

#### Input
* input `object`
  * Actions
    * items [AccessControlRuleAction](#accesscontrolruleaction)
  * Description **required**
  * Effect **required**
  * IpRanges
    * items [IpRange](#iprange)
  * Name **required**
  * NotActions
    * items [AccessControlRuleAction](#accesscontrolruleaction)
  * NotIpRanges
    * items [IpRange](#iprange)
  * NotUserIds
    * items [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required**
  * UserIds
    * items [WorkMailIdentifier](#workmailidentifier)

#### Output
* output [PutAccessControlRuleResponse](#putaccesscontrolruleresponse)

### PutMailboxPermissions



```js
amazonaws_workmail.PutMailboxPermissions({
  "OrganizationId": null,
  "EntityId": null,
  "GranteeId": null,
  "PermissionValues": null
}, context)
```

#### Input
* input `object`
  * EntityId **required**
  * GranteeId **required**
  * OrganizationId **required**
  * PermissionValues **required**
    * items [PermissionType](#permissiontype)

#### Output
* output [PutMailboxPermissionsResponse](#putmailboxpermissionsresponse)

### PutRetentionPolicy



```js
amazonaws_workmail.PutRetentionPolicy({
  "OrganizationId": null,
  "Name": null,
  "FolderConfigurations": null
}, context)
```

#### Input
* input `object`
  * Description
  * FolderConfigurations **required**
    * items [FolderConfiguration](#folderconfiguration)
  * Id
  * Name **required**
  * OrganizationId **required**

#### Output
* output [PutRetentionPolicyResponse](#putretentionpolicyresponse)

### RegisterToWorkMail



```js
amazonaws_workmail.RegisterToWorkMail({
  "OrganizationId": null,
  "EntityId": null,
  "Email": null
}, context)
```

#### Input
* input `object`
  * Email **required**
  * EntityId **required**
  * OrganizationId **required**

#### Output
* output [RegisterToWorkMailResponse](#registertoworkmailresponse)

### ResetPassword



```js
amazonaws_workmail.ResetPassword({
  "OrganizationId": null,
  "UserId": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * OrganizationId **required**
  * Password **required**
  * UserId **required**

#### Output
* output [ResetPasswordResponse](#resetpasswordresponse)

### StartMailboxExportJob



```js
amazonaws_workmail.StartMailboxExportJob({
  "ClientToken": null,
  "OrganizationId": null,
  "EntityId": null,
  "RoleArn": null,
  "KmsKeyArn": null,
  "S3BucketName": null,
  "S3Prefix": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * Description
  * EntityId **required**
  * KmsKeyArn **required**
  * OrganizationId **required**
  * RoleArn **required**
  * S3BucketName **required**
  * S3Prefix **required**

#### Output
* output [StartMailboxExportJobResponse](#startmailboxexportjobresponse)

### TagResource



```js
amazonaws_workmail.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_workmail.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateMailboxQuota



```js
amazonaws_workmail.UpdateMailboxQuota({
  "OrganizationId": null,
  "UserId": null,
  "MailboxQuota": null
}, context)
```

#### Input
* input `object`
  * MailboxQuota **required**
  * OrganizationId **required**
  * UserId **required**

#### Output
* output [UpdateMailboxQuotaResponse](#updatemailboxquotaresponse)

### UpdatePrimaryEmailAddress



```js
amazonaws_workmail.UpdatePrimaryEmailAddress({
  "OrganizationId": null,
  "EntityId": null,
  "Email": null
}, context)
```

#### Input
* input `object`
  * Email **required**
  * EntityId **required**
  * OrganizationId **required**

#### Output
* output [UpdatePrimaryEmailAddressResponse](#updateprimaryemailaddressresponse)

### UpdateResource



```js
amazonaws_workmail.UpdateResource({
  "OrganizationId": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * BookingOptions
    * AutoAcceptRequests
    * AutoDeclineConflictingRequests
    * AutoDeclineRecurringRequests
  * Name
  * OrganizationId **required**
  * ResourceId **required**

#### Output
* output [UpdateResourceResponse](#updateresourceresponse)



## Definitions

### AccessControlRule
* AccessControlRule `object`: A rule that controls access to an Amazon WorkMail organization.
  * Actions
    * items [AccessControlRuleAction](#accesscontrolruleaction)
  * DateCreated
  * DateModified
  * Description
  * Effect
  * IpRanges
    * items [IpRange](#iprange)
  * Name
  * NotActions
    * items [AccessControlRuleAction](#accesscontrolruleaction)
  * NotIpRanges
    * items [IpRange](#iprange)
  * NotUserIds
    * items [WorkMailIdentifier](#workmailidentifier)
  * UserIds
    * items [WorkMailIdentifier](#workmailidentifier)

### AccessControlRuleAction
* AccessControlRuleAction `string`

### AccessControlRuleDescription
* AccessControlRuleDescription `string`

### AccessControlRuleEffect
* AccessControlRuleEffect `string` (values: ALLOW, DENY)

### AccessControlRuleName
* AccessControlRuleName `string`

### AccessControlRuleNameList
* AccessControlRuleNameList `array`
  * items [AccessControlRuleName](#accesscontrolrulename)

### AccessControlRulesList
* AccessControlRulesList `array`
  * items [AccessControlRule](#accesscontrolrule)

### ActionsList
* ActionsList `array`
  * items [AccessControlRuleAction](#accesscontrolruleaction)

### Aliases
* Aliases `array`
  * items [EmailAddress](#emailaddress)

### AmazonResourceName
* AmazonResourceName `string`

### AssociateDelegateToResourceRequest
* AssociateDelegateToResourceRequest `object`
  * EntityId **required**
  * OrganizationId **required**
  * ResourceId **required**

### AssociateDelegateToResourceResponse
* AssociateDelegateToResourceResponse `object`

### AssociateMemberToGroupRequest
* AssociateMemberToGroupRequest `object`
  * GroupId **required**
  * MemberId **required**
  * OrganizationId **required**

### AssociateMemberToGroupResponse
* AssociateMemberToGroupResponse `object`

### BookingOptions
* BookingOptions `object`: At least one delegate must be associated to the resource to disable automatic replies from the resource.
  * AutoAcceptRequests
  * AutoDeclineConflictingRequests
  * AutoDeclineRecurringRequests

### Boolean
* Boolean `boolean`

### CancelMailboxExportJobRequest
* CancelMailboxExportJobRequest `object`
  * ClientToken **required**
  * JobId **required**
  * OrganizationId **required**

### CancelMailboxExportJobResponse
* CancelMailboxExportJobResponse `object`

### CreateAliasRequest
* CreateAliasRequest `object`
  * Alias **required**
  * EntityId **required**
  * OrganizationId **required**

### CreateAliasResponse
* CreateAliasResponse `object`

### CreateGroupRequest
* CreateGroupRequest `object`
  * Name **required**
  * OrganizationId **required**

### CreateGroupResponse
* CreateGroupResponse `object`
  * GroupId

### CreateOrganizationRequest
* CreateOrganizationRequest `object`
  * Alias **required**
  * ClientToken
  * DirectoryId
  * Domains
    * items [Domain](#domain)
  * EnableInteroperability
  * KmsKeyArn

### CreateOrganizationResponse
* CreateOrganizationResponse `object`
  * OrganizationId

### CreateResourceRequest
* CreateResourceRequest `object`
  * Name **required**
  * OrganizationId **required**
  * Type **required**

### CreateResourceResponse
* CreateResourceResponse `object`
  * ResourceId

### CreateUserRequest
* CreateUserRequest `object`
  * DisplayName **required**
  * Name **required**
  * OrganizationId **required**
  * Password **required**

### CreateUserResponse
* CreateUserResponse `object`
  * UserId

### Delegate
* Delegate `object`: The name of the attribute, which is one of the values defined in the UserAttribute enumeration.
  * Id **required**
  * Type **required**

### DeleteAccessControlRuleRequest
* DeleteAccessControlRuleRequest `object`
  * Name **required**
  * OrganizationId **required**

### DeleteAccessControlRuleResponse
* DeleteAccessControlRuleResponse `object`

### DeleteAliasRequest
* DeleteAliasRequest `object`
  * Alias **required**
  * EntityId **required**
  * OrganizationId **required**

### DeleteAliasResponse
* DeleteAliasResponse `object`

### DeleteGroupRequest
* DeleteGroupRequest `object`
  * GroupId **required**
  * OrganizationId **required**

### DeleteGroupResponse
* DeleteGroupResponse `object`

### DeleteMailboxPermissionsRequest
* DeleteMailboxPermissionsRequest `object`
  * EntityId **required**
  * GranteeId **required**
  * OrganizationId **required**

### DeleteMailboxPermissionsResponse
* DeleteMailboxPermissionsResponse `object`

### DeleteOrganizationRequest
* DeleteOrganizationRequest `object`
  * ClientToken
  * DeleteDirectory **required**
  * OrganizationId **required**

### DeleteOrganizationResponse
* DeleteOrganizationResponse `object`
  * OrganizationId
  * State

### DeleteResourceRequest
* DeleteResourceRequest `object`
  * OrganizationId **required**
  * ResourceId **required**

### DeleteResourceResponse
* DeleteResourceResponse `object`

### DeleteRetentionPolicyRequest
* DeleteRetentionPolicyRequest `object`
  * Id **required**
  * OrganizationId **required**

### DeleteRetentionPolicyResponse
* DeleteRetentionPolicyResponse `object`

### DeleteUserRequest
* DeleteUserRequest `object`
  * OrganizationId **required**
  * UserId **required**

### DeleteUserResponse
* DeleteUserResponse `object`

### DeregisterFromWorkMailRequest
* DeregisterFromWorkMailRequest `object`
  * EntityId **required**
  * OrganizationId **required**

### DeregisterFromWorkMailResponse
* DeregisterFromWorkMailResponse `object`

### DescribeGroupRequest
* DescribeGroupRequest `object`
  * GroupId **required**
  * OrganizationId **required**

### DescribeGroupResponse
* DescribeGroupResponse `object`
  * DisabledDate
  * Email
  * EnabledDate
  * GroupId
  * Name
  * State

### DescribeMailboxExportJobRequest
* DescribeMailboxExportJobRequest `object`
  * JobId **required**
  * OrganizationId **required**

### DescribeMailboxExportJobResponse
* DescribeMailboxExportJobResponse `object`
  * Description
  * EndTime
  * EntityId
  * ErrorInfo
  * EstimatedProgress
  * KmsKeyArn
  * RoleArn
  * S3BucketName
  * S3Path
  * S3Prefix
  * StartTime
  * State

### DescribeOrganizationRequest
* DescribeOrganizationRequest `object`
  * OrganizationId **required**

### DescribeOrganizationResponse
* DescribeOrganizationResponse `object`
  * ARN
  * Alias
  * CompletedDate
  * DefaultMailDomain
  * DirectoryId
  * DirectoryType
  * ErrorMessage
  * OrganizationId
  * State

### DescribeResourceRequest
* DescribeResourceRequest `object`
  * OrganizationId **required**
  * ResourceId **required**

### DescribeResourceResponse
* DescribeResourceResponse `object`
  * BookingOptions
    * AutoAcceptRequests
    * AutoDeclineConflictingRequests
    * AutoDeclineRecurringRequests
  * DisabledDate
  * Email
  * EnabledDate
  * Name
  * ResourceId
  * State
  * Type

### DescribeUserRequest
* DescribeUserRequest `object`
  * OrganizationId **required**
  * UserId **required**

### DescribeUserResponse
* DescribeUserResponse `object`
  * DisabledDate
  * DisplayName
  * Email
  * EnabledDate
  * Name
  * State
  * UserId
  * UserRole

### Description
* Description `string`

### DirectoryId
* DirectoryId `string`

### DirectoryInUseException


### DirectoryServiceAuthenticationFailedException


### DirectoryUnavailableException


### DisassociateDelegateFromResourceRequest
* DisassociateDelegateFromResourceRequest `object`
  * EntityId **required**
  * OrganizationId **required**
  * ResourceId **required**

### DisassociateDelegateFromResourceResponse
* DisassociateDelegateFromResourceResponse `object`

### DisassociateMemberFromGroupRequest
* DisassociateMemberFromGroupRequest `object`
  * GroupId **required**
  * MemberId **required**
  * OrganizationId **required**

### DisassociateMemberFromGroupResponse
* DisassociateMemberFromGroupResponse `object`

### Domain
* Domain `object`: <p>The domain to associate with an Amazon WorkMail organization.</p> <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
  * DomainName
  * HostedZoneId

### DomainName
* DomainName `string`

### Domains
* Domains `array`
  * items [Domain](#domain)

### EmailAddress
* EmailAddress `string`

### EmailAddressInUseException


### EntityAlreadyRegisteredException


### EntityNotFoundException


### EntityState
* EntityState `string` (values: ENABLED, DISABLED, DELETED)

### EntityStateException


### FolderConfiguration
* FolderConfiguration `object`: The configuration applied to an organization's folders by its retention policy.
  * Action **required**
  * Name **required**
  * Period

### FolderConfigurations
* FolderConfigurations `array`
  * items [FolderConfiguration](#folderconfiguration)

### FolderName
* FolderName `string` (values: INBOX, DELETED_ITEMS, SENT_ITEMS, DRAFTS, JUNK_EMAIL)

### GetAccessControlEffectRequest
* GetAccessControlEffectRequest `object`
  * Action **required**
  * IpAddress **required**
  * OrganizationId **required**
  * UserId **required**

### GetAccessControlEffectResponse
* GetAccessControlEffectResponse `object`
  * Effect
  * MatchedRules
    * items [AccessControlRuleName](#accesscontrolrulename)

### GetDefaultRetentionPolicyRequest
* GetDefaultRetentionPolicyRequest `object`
  * OrganizationId **required**

### GetDefaultRetentionPolicyResponse
* GetDefaultRetentionPolicyResponse `object`
  * Description
  * FolderConfigurations
    * items [FolderConfiguration](#folderconfiguration)
  * Id
  * Name

### GetMailboxDetailsRequest
* GetMailboxDetailsRequest `object`
  * OrganizationId **required**
  * UserId **required**

### GetMailboxDetailsResponse
* GetMailboxDetailsResponse `object`
  * MailboxQuota
  * MailboxSize

### Group
* Group `object`: The representation of an Amazon WorkMail group.
  * DisabledDate
  * Email
  * EnabledDate
  * Id
  * Name
  * State

### GroupName
* GroupName `string`

### Groups
* Groups `array`
  * items [Group](#group)

### HostedZoneId
* HostedZoneId `string`

### IdempotencyClientToken
* IdempotencyClientToken `string`

### InvalidConfigurationException


### InvalidParameterException


### InvalidPasswordException


### IpAddress
* IpAddress `string`

### IpRange
* IpRange `string`

### IpRangeList
* IpRangeList `array`
  * items [IpRange](#iprange)

### Jobs
* Jobs `array`
  * items [MailboxExportJob](#mailboxexportjob)

### KmsKeyArn
* KmsKeyArn `string`

### LimitExceededException


### ListAccessControlRulesRequest
* ListAccessControlRulesRequest `object`
  * OrganizationId **required**

### ListAccessControlRulesResponse
* ListAccessControlRulesResponse `object`
  * Rules
    * items [AccessControlRule](#accesscontrolrule)

### ListAliasesRequest
* ListAliasesRequest `object`
  * EntityId **required**
  * MaxResults
  * NextToken
  * OrganizationId **required**

### ListAliasesResponse
* ListAliasesResponse `object`
  * Aliases
    * items [EmailAddress](#emailaddress)
  * NextToken

### ListGroupMembersRequest
* ListGroupMembersRequest `object`
  * GroupId **required**
  * MaxResults
  * NextToken
  * OrganizationId **required**

### ListGroupMembersResponse
* ListGroupMembersResponse `object`
  * Members
    * items [Member](#member)
  * NextToken

### ListGroupsRequest
* ListGroupsRequest `object`
  * MaxResults
  * NextToken
  * OrganizationId **required**

### ListGroupsResponse
* ListGroupsResponse `object`
  * Groups
    * items [Group](#group)
  * NextToken

### ListMailboxExportJobsRequest
* ListMailboxExportJobsRequest `object`
  * MaxResults
  * NextToken
  * OrganizationId **required**

### ListMailboxExportJobsResponse
* ListMailboxExportJobsResponse `object`
  * Jobs
    * items [MailboxExportJob](#mailboxexportjob)
  * NextToken

### ListMailboxPermissionsRequest
* ListMailboxPermissionsRequest `object`
  * EntityId **required**
  * MaxResults
  * NextToken
  * OrganizationId **required**

### ListMailboxPermissionsResponse
* ListMailboxPermissionsResponse `object`
  * NextToken
  * Permissions
    * items [Permission](#permission)

### ListOrganizationsRequest
* ListOrganizationsRequest `object`
  * MaxResults
  * NextToken

### ListOrganizationsResponse
* ListOrganizationsResponse `object`
  * NextToken
  * OrganizationSummaries
    * items [OrganizationSummary](#organizationsummary)

### ListResourceDelegatesRequest
* ListResourceDelegatesRequest `object`
  * MaxResults
  * NextToken
  * OrganizationId **required**
  * ResourceId **required**

### ListResourceDelegatesResponse
* ListResourceDelegatesResponse `object`
  * Delegates
    * items [Delegate](#delegate)
  * NextToken

### ListResourcesRequest
* ListResourcesRequest `object`
  * MaxResults
  * NextToken
  * OrganizationId **required**

### ListResourcesResponse
* ListResourcesResponse `object`
  * NextToken
  * Resources
    * items [Resource](#resource)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### ListUsersRequest
* ListUsersRequest `object`
  * MaxResults
  * NextToken
  * OrganizationId **required**

### ListUsersResponse
* ListUsersResponse `object`
  * NextToken
  * Users
    * items [User](#user)

### MailDomainNotFoundException


### MailDomainStateException


### MailboxExportErrorInfo
* MailboxExportErrorInfo `string`

### MailboxExportJob
* MailboxExportJob `object`: The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to.
  * Description
  * EndTime
  * EntityId
  * EstimatedProgress
  * JobId
  * S3BucketName
  * S3Path
  * StartTime
  * State

### MailboxExportJobId
* MailboxExportJobId `string`

### MailboxExportJobState
* MailboxExportJobState `string` (values: RUNNING, COMPLETED, FAILED, CANCELLED)

### MailboxQuota
* MailboxQuota `integer`

### MailboxSize
* MailboxSize `number`

### MaxResults
* MaxResults `integer`

### Member
* Member `object`: The representation of a user or group.
  * DisabledDate
  * EnabledDate
  * Id
  * Name
  * State
  * Type

### MemberType
* MemberType `string` (values: GROUP, USER)

### Members
* Members `array`
  * items [Member](#member)

### NameAvailabilityException


### NextToken
* NextToken `string`

### OrganizationId
* OrganizationId `string`

### OrganizationName
* OrganizationName `string`

### OrganizationNotFoundException


### OrganizationStateException


### OrganizationSummaries
* OrganizationSummaries `array`
  * items [OrganizationSummary](#organizationsummary)

### OrganizationSummary
* OrganizationSummary `object`: The representation of an organization.
  * Alias
  * DefaultMailDomain
  * ErrorMessage
  * OrganizationId
  * State

### Password
* Password `string`

### Percentage
* Percentage `integer`

### Permission
* Permission `object`: Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.
  * GranteeId **required**
  * GranteeType **required**
  * PermissionValues **required**
    * items [PermissionType](#permissiontype)

### PermissionType
* PermissionType `string` (values: FULL_ACCESS, SEND_AS, SEND_ON_BEHALF)

### PermissionValues
* PermissionValues `array`
  * items [PermissionType](#permissiontype)

### Permissions
* Permissions `array`
  * items [Permission](#permission)

### PolicyDescription
* PolicyDescription `string`

### PutAccessControlRuleRequest
* PutAccessControlRuleRequest `object`
  * Actions
    * items [AccessControlRuleAction](#accesscontrolruleaction)
  * Description **required**
  * Effect **required**
  * IpRanges
    * items [IpRange](#iprange)
  * Name **required**
  * NotActions
    * items [AccessControlRuleAction](#accesscontrolruleaction)
  * NotIpRanges
    * items [IpRange](#iprange)
  * NotUserIds
    * items [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required**
  * UserIds
    * items [WorkMailIdentifier](#workmailidentifier)

### PutAccessControlRuleResponse
* PutAccessControlRuleResponse `object`

### PutMailboxPermissionsRequest
* PutMailboxPermissionsRequest `object`
  * EntityId **required**
  * GranteeId **required**
  * OrganizationId **required**
  * PermissionValues **required**
    * items [PermissionType](#permissiontype)

### PutMailboxPermissionsResponse
* PutMailboxPermissionsResponse `object`

### PutRetentionPolicyRequest
* PutRetentionPolicyRequest `object`
  * Description
  * FolderConfigurations **required**
    * items [FolderConfiguration](#folderconfiguration)
  * Id
  * Name **required**
  * OrganizationId **required**

### PutRetentionPolicyResponse
* PutRetentionPolicyResponse `object`

### RegisterToWorkMailRequest
* RegisterToWorkMailRequest `object`
  * Email **required**
  * EntityId **required**
  * OrganizationId **required**

### RegisterToWorkMailResponse
* RegisterToWorkMailResponse `object`

### ReservedNameException


### ResetPasswordRequest
* ResetPasswordRequest `object`
  * OrganizationId **required**
  * Password **required**
  * UserId **required**

### ResetPasswordResponse
* ResetPasswordResponse `object`

### Resource
* Resource `object`: The representation of a resource.
  * DisabledDate
  * Email
  * EnabledDate
  * Id
  * Name
  * State
  * Type

### ResourceDelegates
* ResourceDelegates `array`
  * items [Delegate](#delegate)

### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### ResourceNotFoundException


### ResourceType
* ResourceType `string` (values: ROOM, EQUIPMENT)

### Resources
* Resources `array`
  * items [Resource](#resource)

### RetentionAction
* RetentionAction `string` (values: NONE, DELETE, PERMANENTLY_DELETE)

### RetentionPeriod
* RetentionPeriod `integer`

### RoleArn
* RoleArn `string`

### S3BucketName
* S3BucketName `string`

### S3ObjectKey
* S3ObjectKey `string`

### ShortString
* ShortString `string`

### StartMailboxExportJobRequest
* StartMailboxExportJobRequest `object`
  * ClientToken **required**
  * Description
  * EntityId **required**
  * KmsKeyArn **required**
  * OrganizationId **required**
  * RoleArn **required**
  * S3BucketName **required**
  * S3Prefix **required**

### StartMailboxExportJobResponse
* StartMailboxExportJobResponse `object`
  * JobId

### String
* String `string`

### Tag
* Tag `object`: Describes a tag applied to a resource.
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
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### TooManyTagsException


### UnsupportedOperationException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateMailboxQuotaRequest
* UpdateMailboxQuotaRequest `object`
  * MailboxQuota **required**
  * OrganizationId **required**
  * UserId **required**

### UpdateMailboxQuotaResponse
* UpdateMailboxQuotaResponse `object`

### UpdatePrimaryEmailAddressRequest
* UpdatePrimaryEmailAddressRequest `object`
  * Email **required**
  * EntityId **required**
  * OrganizationId **required**

### UpdatePrimaryEmailAddressResponse
* UpdatePrimaryEmailAddressResponse `object`

### UpdateResourceRequest
* UpdateResourceRequest `object`
  * BookingOptions
    * AutoAcceptRequests
    * AutoDeclineConflictingRequests
    * AutoDeclineRecurringRequests
  * Name
  * OrganizationId **required**
  * ResourceId **required**

### UpdateResourceResponse
* UpdateResourceResponse `object`

### User
* User `object`: The representation of an Amazon WorkMail user.
  * DisabledDate
  * DisplayName
  * Email
  * EnabledDate
  * Id
  * Name
  * State
  * UserRole

### UserIdList
* UserIdList `array`
  * items [WorkMailIdentifier](#workmailidentifier)

### UserName
* UserName `string`

### UserRole
* UserRole `string` (values: USER, RESOURCE, SYSTEM_USER)

### Users
* Users `array`
  * items [User](#user)

### WorkMailIdentifier
* WorkMailIdentifier `string`


