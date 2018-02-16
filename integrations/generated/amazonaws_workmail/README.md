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

amazonaws_workmail.AssociateDelegateToResource({
  "OrganizationId": "",
  "ResourceId": "",
  "EntityId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<p>Amazon WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or their native iOS and Android email applications. You can integrate Amazon WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.</p> <p>The Amazon WorkMail API is designed for the following scenarios:</p> <ul> <li> <p>Listing and describing organizations</p> </li> </ul> <ul> <li> <p>Managing users</p> </li> </ul> <ul> <li> <p>Managing groups</p> </li> </ul> <ul> <li> <p>Managing resources</p> </li> </ul> <p>All Amazon WorkMail API actions are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkMail site, the IAM user gains full administrative visibility into the entire Amazon WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

## Actions

### AssociateDelegateToResource



```js
amazonaws_workmail.AssociateDelegateToResource({
  "OrganizationId": "",
  "ResourceId": "",
  "EntityId": ""
}, context)
```

#### Input
* input `object`
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

#### Output
* output [AssociateDelegateToResourceResponse](#associatedelegatetoresourceresponse)

### AssociateMemberToGroup



```js
amazonaws_workmail.AssociateMemberToGroup({
  "OrganizationId": "",
  "GroupId": "",
  "MemberId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * MemberId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [AssociateMemberToGroupResponse](#associatemembertogroupresponse)

### CreateAlias



```js
amazonaws_workmail.CreateAlias({
  "OrganizationId": "",
  "EntityId": "",
  "Alias": ""
}, context)
```

#### Input
* input `object`
  * Alias **required** [EmailAddress](#emailaddress)
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [CreateAliasResponse](#createaliasresponse)

### CreateGroup



```js
amazonaws_workmail.CreateGroup({
  "OrganizationId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [GroupName](#groupname)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [CreateGroupResponse](#creategroupresponse)

### CreateResource



```js
amazonaws_workmail.CreateResource({
  "OrganizationId": "",
  "Name": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [ResourceName](#resourcename)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * Type **required** [ResourceType](#resourcetype)

#### Output
* output [CreateResourceResponse](#createresourceresponse)

### CreateUser



```js
amazonaws_workmail.CreateUser({
  "OrganizationId": "",
  "Name": "",
  "DisplayName": "",
  "Password": ""
}, context)
```

#### Input
* input `object`
  * DisplayName **required** [String](#string)
  * Name **required** [UserName](#username)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * Password **required** [Password](#password)

#### Output
* output [CreateUserResponse](#createuserresponse)

### DeleteAlias



```js
amazonaws_workmail.DeleteAlias({
  "OrganizationId": "",
  "EntityId": "",
  "Alias": ""
}, context)
```

#### Input
* input `object`
  * Alias **required** [EmailAddress](#emailaddress)
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [DeleteAliasResponse](#deletealiasresponse)

### DeleteGroup



```js
amazonaws_workmail.DeleteGroup({
  "OrganizationId": "",
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [DeleteGroupResponse](#deletegroupresponse)

### DeleteResource



```js
amazonaws_workmail.DeleteResource({
  "OrganizationId": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

#### Output
* output [DeleteResourceResponse](#deleteresourceresponse)

### DeleteUser



```js
amazonaws_workmail.DeleteUser({
  "OrganizationId": "",
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * UserId **required** [WorkMailIdentifier](#workmailidentifier)

#### Output
* output [DeleteUserResponse](#deleteuserresponse)

### DeregisterFromWorkMail



```js
amazonaws_workmail.DeregisterFromWorkMail({
  "OrganizationId": "",
  "EntityId": ""
}, context)
```

#### Input
* input `object`
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [DeregisterFromWorkMailResponse](#deregisterfromworkmailresponse)

### DescribeGroup



```js
amazonaws_workmail.DescribeGroup({
  "OrganizationId": "",
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [DescribeGroupResponse](#describegroupresponse)

### DescribeOrganization



```js
amazonaws_workmail.DescribeOrganization({
  "OrganizationId": ""
}, context)
```

#### Input
* input `object`
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [DescribeOrganizationResponse](#describeorganizationresponse)

### DescribeResource



```js
amazonaws_workmail.DescribeResource({
  "OrganizationId": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

#### Output
* output [DescribeResourceResponse](#describeresourceresponse)

### DescribeUser



```js
amazonaws_workmail.DescribeUser({
  "OrganizationId": "",
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * UserId **required** [WorkMailIdentifier](#workmailidentifier)

#### Output
* output [DescribeUserResponse](#describeuserresponse)

### DisassociateDelegateFromResource



```js
amazonaws_workmail.DisassociateDelegateFromResource({
  "OrganizationId": "",
  "ResourceId": "",
  "EntityId": ""
}, context)
```

#### Input
* input `object`
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

#### Output
* output [DisassociateDelegateFromResourceResponse](#disassociatedelegatefromresourceresponse)

### DisassociateMemberFromGroup



```js
amazonaws_workmail.DisassociateMemberFromGroup({
  "OrganizationId": "",
  "GroupId": "",
  "MemberId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * MemberId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [DisassociateMemberFromGroupResponse](#disassociatememberfromgroupresponse)

### ListAliases



```js
amazonaws_workmail.ListAliases({
  "OrganizationId": "",
  "EntityId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [ListAliasesResponse](#listaliasesresponse)

### ListGroupMembers



```js
amazonaws_workmail.ListGroupMembers({
  "OrganizationId": "",
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [ListGroupMembersResponse](#listgroupmembersresponse)

### ListGroups



```js
amazonaws_workmail.ListGroups({
  "OrganizationId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### ListOrganizations



```js
amazonaws_workmail.ListOrganizations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListOrganizationsResponse](#listorganizationsresponse)

### ListResourceDelegates



```js
amazonaws_workmail.ListResourceDelegates({
  "OrganizationId": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [WorkMailIdentifier](#workmailidentifier)

#### Output
* output [ListResourceDelegatesResponse](#listresourcedelegatesresponse)

### ListResources



```js
amazonaws_workmail.ListResources({
  "OrganizationId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [ListResourcesResponse](#listresourcesresponse)

### ListUsers



```js
amazonaws_workmail.ListUsers({
  "OrganizationId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [ListUsersResponse](#listusersresponse)

### RegisterToWorkMail



```js
amazonaws_workmail.RegisterToWorkMail({
  "OrganizationId": "",
  "EntityId": "",
  "Email": ""
}, context)
```

#### Input
* input `object`
  * Email **required** [EmailAddress](#emailaddress)
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [RegisterToWorkMailResponse](#registertoworkmailresponse)

### ResetPassword



```js
amazonaws_workmail.ResetPassword({
  "OrganizationId": "",
  "UserId": "",
  "Password": ""
}, context)
```

#### Input
* input `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * Password **required** [Password](#password)
  * UserId **required** [WorkMailIdentifier](#workmailidentifier)

#### Output
* output [ResetPasswordResponse](#resetpasswordresponse)

### UpdatePrimaryEmailAddress



```js
amazonaws_workmail.UpdatePrimaryEmailAddress({
  "OrganizationId": "",
  "EntityId": "",
  "Email": ""
}, context)
```

#### Input
* input `object`
  * Email **required** [EmailAddress](#emailaddress)
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

#### Output
* output [UpdatePrimaryEmailAddressResponse](#updateprimaryemailaddressresponse)

### UpdateResource



```js
amazonaws_workmail.UpdateResource({
  "OrganizationId": "",
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * BookingOptions [BookingOptions](#bookingoptions)
  * Name [ResourceName](#resourcename)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

#### Output
* output [UpdateResourceResponse](#updateresourceresponse)



## Definitions

### Aliases
* Aliases `array`
  * items [EmailAddress](#emailaddress)

### AssociateDelegateToResourceRequest
* AssociateDelegateToResourceRequest `object`
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

### AssociateDelegateToResourceResponse
* AssociateDelegateToResourceResponse `object`

### AssociateMemberToGroupRequest
* AssociateMemberToGroupRequest `object`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * MemberId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

### AssociateMemberToGroupResponse
* AssociateMemberToGroupResponse `object`

### BookingOptions
* BookingOptions `object`: At least one delegate must be associated to the resource to disable automatic replies from the resource.
  * AutoAcceptRequests [Boolean](#boolean)
  * AutoDeclineConflictingRequests [Boolean](#boolean)
  * AutoDeclineRecurringRequests [Boolean](#boolean)

### Boolean
* Boolean `boolean`

### CreateAliasRequest
* CreateAliasRequest `object`
  * Alias **required** [EmailAddress](#emailaddress)
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

### CreateAliasResponse
* CreateAliasResponse `object`

### CreateGroupRequest
* CreateGroupRequest `object`
  * Name **required** [GroupName](#groupname)
  * OrganizationId **required** [OrganizationId](#organizationid)

### CreateGroupResponse
* CreateGroupResponse `object`
  * GroupId [WorkMailIdentifier](#workmailidentifier)

### CreateResourceRequest
* CreateResourceRequest `object`
  * Name **required** [ResourceName](#resourcename)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * Type **required** [ResourceType](#resourcetype)

### CreateResourceResponse
* CreateResourceResponse `object`
  * ResourceId [ResourceId](#resourceid)

### CreateUserRequest
* CreateUserRequest `object`
  * DisplayName **required** [String](#string)
  * Name **required** [UserName](#username)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * Password **required** [Password](#password)

### CreateUserResponse
* CreateUserResponse `object`
  * UserId [WorkMailIdentifier](#workmailidentifier)

### Delegate
* Delegate `object`: The name of the attribute, which is one of the values defined in the UserAttribute enumeration.
  * Id **required** [String](#string)
  * Type **required** [MemberType](#membertype)

### DeleteAliasRequest
* DeleteAliasRequest `object`
  * Alias **required** [EmailAddress](#emailaddress)
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

### DeleteAliasResponse
* DeleteAliasResponse `object`

### DeleteGroupRequest
* DeleteGroupRequest `object`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

### DeleteGroupResponse
* DeleteGroupResponse `object`

### DeleteResourceRequest
* DeleteResourceRequest `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

### DeleteResourceResponse
* DeleteResourceResponse `object`

### DeleteUserRequest
* DeleteUserRequest `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * UserId **required** [WorkMailIdentifier](#workmailidentifier)

### DeleteUserResponse
* DeleteUserResponse `object`

### DeregisterFromWorkMailRequest
* DeregisterFromWorkMailRequest `object`
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

### DeregisterFromWorkMailResponse
* DeregisterFromWorkMailResponse `object`

### DescribeGroupRequest
* DescribeGroupRequest `object`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

### DescribeGroupResponse
* DescribeGroupResponse `object`
  * DisabledDate [Timestamp](#timestamp)
  * Email [EmailAddress](#emailaddress)
  * EnabledDate [Timestamp](#timestamp)
  * GroupId [WorkMailIdentifier](#workmailidentifier)
  * Name [GroupName](#groupname)
  * State [EntityState](#entitystate)

### DescribeOrganizationRequest
* DescribeOrganizationRequest `object`
  * OrganizationId **required** [OrganizationId](#organizationid)

### DescribeOrganizationResponse
* DescribeOrganizationResponse `object`
  * Alias [OrganizationName](#organizationname)
  * CompletedDate [Timestamp](#timestamp)
  * DefaultMailDomain [String](#string)
  * DirectoryId [String](#string)
  * DirectoryType [String](#string)
  * ErrorMessage [String](#string)
  * OrganizationId [OrganizationId](#organizationid)
  * State [String](#string)

### DescribeResourceRequest
* DescribeResourceRequest `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

### DescribeResourceResponse
* DescribeResourceResponse `object`
  * BookingOptions [BookingOptions](#bookingoptions)
  * DisabledDate [Timestamp](#timestamp)
  * Email [EmailAddress](#emailaddress)
  * EnabledDate [Timestamp](#timestamp)
  * Name [ResourceName](#resourcename)
  * ResourceId [ResourceId](#resourceid)
  * State [EntityState](#entitystate)
  * Type [ResourceType](#resourcetype)

### DescribeUserRequest
* DescribeUserRequest `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * UserId **required** [WorkMailIdentifier](#workmailidentifier)

### DescribeUserResponse
* DescribeUserResponse `object`
  * DisabledDate [Timestamp](#timestamp)
  * DisplayName [String](#string)
  * Email [EmailAddress](#emailaddress)
  * EnabledDate [Timestamp](#timestamp)
  * Name [UserName](#username)
  * State [EntityState](#entitystate)
  * UserId [WorkMailIdentifier](#workmailidentifier)
  * UserRole [UserRole](#userrole)

### DirectoryServiceAuthenticationFailedException
* DirectoryServiceAuthenticationFailedException `object`: The Directory Service doesn't recognize the credentials supplied by the Amazon WorkMail service.
  * Message [String](#string)

### DirectoryUnavailableException
* DirectoryUnavailableException `object`: The directory that you are trying to perform operations on isn't available.
  * Message [String](#string)

### DisassociateDelegateFromResourceRequest
* DisassociateDelegateFromResourceRequest `object`
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

### DisassociateDelegateFromResourceResponse
* DisassociateDelegateFromResourceResponse `object`

### DisassociateMemberFromGroupRequest
* DisassociateMemberFromGroupRequest `object`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * MemberId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

### DisassociateMemberFromGroupResponse
* DisassociateMemberFromGroupResponse `object`

### EmailAddress
* EmailAddress `string`

### EmailAddressInUseException
* EmailAddressInUseException `object`: The email address that you're trying to assign is already created for a different user, group, or resource.
  * Message [String](#string)

### EntityAlreadyRegisteredException
* EntityAlreadyRegisteredException `object`: The user, group, or resource that you're trying to register is already registered.
  * Message [String](#string)

### EntityNotFoundException
* EntityNotFoundException `object`: The identifier supplied for the entity is valid, but it does not exist in your organization.
  * Message [String](#string)

### EntityState
* EntityState `string` (values: ENABLED, DISABLED, DELETED)

### EntityStateException
* EntityStateException `object`: You are performing an operation on an entity that isn't in the expected state, such as trying to update a deleted user.
  * Message [String](#string)

### Group
* Group `object`: The representation of an Amazon WorkMail group.
  * DisabledDate [Timestamp](#timestamp)
  * Email [EmailAddress](#emailaddress)
  * EnabledDate [Timestamp](#timestamp)
  * Id [WorkMailIdentifier](#workmailidentifier)
  * Name [GroupName](#groupname)
  * State [EntityState](#entitystate)

### GroupName
* GroupName `string`

### Groups
* Groups `array`
  * items [Group](#group)

### InvalidConfigurationException
* InvalidConfigurationException `object`: The configuration for a resource isn't valid. A resource must either be able to auto-respond to requests or have at least one delegate associated that can do it on its behalf.
  * Message [String](#string)

### InvalidParameterException
* InvalidParameterException `object`: One or more of the input parameters don't match the service's restrictions.
  * Message [String](#string)

### InvalidPasswordException
* InvalidPasswordException `object`: The supplied password doesn't match the minimum security constraints, such as length or use of special characters.
  * Message [String](#string)

### ListAliasesRequest
* ListAliasesRequest `object`
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

### ListAliasesResponse
* ListAliasesResponse `object`
  * Aliases [Aliases](#aliases)
  * NextToken [NextToken](#nexttoken)

### ListGroupMembersRequest
* ListGroupMembersRequest `object`
  * GroupId **required** [WorkMailIdentifier](#workmailidentifier)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

### ListGroupMembersResponse
* ListGroupMembersResponse `object`
  * Members [Members](#members)
  * NextToken [NextToken](#nexttoken)

### ListGroupsRequest
* ListGroupsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

### ListGroupsResponse
* ListGroupsResponse `object`
  * Groups [Groups](#groups)
  * NextToken [NextToken](#nexttoken)

### ListOrganizationsRequest
* ListOrganizationsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListOrganizationsResponse
* ListOrganizationsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * OrganizationSummaries [OrganizationSummaries](#organizationsummaries)

### ListResourceDelegatesRequest
* ListResourceDelegatesRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [WorkMailIdentifier](#workmailidentifier)

### ListResourceDelegatesResponse
* ListResourceDelegatesResponse `object`
  * Delegates [ResourceDelegates](#resourcedelegates)
  * NextToken [NextToken](#nexttoken)

### ListResourcesRequest
* ListResourcesRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

### ListResourcesResponse
* ListResourcesResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Resources [Resources](#resources)

### ListUsersRequest
* ListUsersRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * OrganizationId **required** [OrganizationId](#organizationid)

### ListUsersResponse
* ListUsersResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Users [Users](#users)

### MailDomainNotFoundException
* MailDomainNotFoundException `object`: For an email or alias to be created in Amazon WorkMail, the included domain must be defined in the organization.
  * Message [String](#string)

### MailDomainStateException
* MailDomainStateException `object`: After a domain has been added to the organization, it must be verified. The domain is not yet verified.
  * Message [String](#string)

### MaxResults
* MaxResults `integer`

### Member
* Member `object`: The representation of a group member (user or group).
  * DisabledDate [Timestamp](#timestamp)
  * EnabledDate [Timestamp](#timestamp)
  * Id [String](#string)
  * Name [String](#string)
  * State [EntityState](#entitystate)
  * Type [MemberType](#membertype)

### MemberType
* MemberType `string` (values: GROUP, USER)

### Members
* Members `array`
  * items [Member](#member)

### NameAvailabilityException
* NameAvailabilityException `object`: The entity (user, group, or user) name isn't unique in Amazon WorkMail.
  * Message [String](#string)

### NextToken
* NextToken `string`

### OrganizationId
* OrganizationId `string`

### OrganizationName
* OrganizationName `string`

### OrganizationNotFoundException
* OrganizationNotFoundException `object`: An operation received a valid organization identifier that either doesn't belong or exist in the system.
  * Message [String](#string)

### OrganizationStateException
* OrganizationStateException `object`: The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its entities.
  * Message [String](#string)

### OrganizationSummaries
* OrganizationSummaries `array`
  * items [OrganizationSummary](#organizationsummary)

### OrganizationSummary
* OrganizationSummary `object`: The brief overview associated with an organization.
  * Alias [OrganizationName](#organizationname)
  * ErrorMessage [String](#string)
  * OrganizationId [OrganizationId](#organizationid)
  * State [String](#string)

### Password
* Password `string`

### RegisterToWorkMailRequest
* RegisterToWorkMailRequest `object`
  * Email **required** [EmailAddress](#emailaddress)
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

### RegisterToWorkMailResponse
* RegisterToWorkMailResponse `object`

### ReservedNameException
* ReservedNameException `object`: This entity name is not allowed in Amazon WorkMail.
  * Message [String](#string)

### ResetPasswordRequest
* ResetPasswordRequest `object`
  * OrganizationId **required** [OrganizationId](#organizationid)
  * Password **required** [Password](#password)
  * UserId **required** [WorkMailIdentifier](#workmailidentifier)

### ResetPasswordResponse
* ResetPasswordResponse `object`

### Resource
* Resource `object`: The overview for a resource containing relevant data regarding it.
  * DisabledDate [Timestamp](#timestamp)
  * Email [EmailAddress](#emailaddress)
  * EnabledDate [Timestamp](#timestamp)
  * Id [WorkMailIdentifier](#workmailidentifier)
  * Name [ResourceName](#resourcename)
  * State [EntityState](#entitystate)
  * Type [ResourceType](#resourcetype)

### ResourceDelegates
* ResourceDelegates `array`
  * items [Delegate](#delegate)

### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### ResourceType
* ResourceType `string` (values: ROOM, EQUIPMENT)

### Resources
* Resources `array`
  * items [Resource](#resource)

### String
* String `string`

### Timestamp
* Timestamp `string`

### UnsupportedOperationException
* UnsupportedOperationException `object`: You can't perform a write operation against a read-only directory.
  * Message [String](#string)

### UpdatePrimaryEmailAddressRequest
* UpdatePrimaryEmailAddressRequest `object`
  * Email **required** [EmailAddress](#emailaddress)
  * EntityId **required** [WorkMailIdentifier](#workmailidentifier)
  * OrganizationId **required** [OrganizationId](#organizationid)

### UpdatePrimaryEmailAddressResponse
* UpdatePrimaryEmailAddressResponse `object`

### UpdateResourceRequest
* UpdateResourceRequest `object`
  * BookingOptions [BookingOptions](#bookingoptions)
  * Name [ResourceName](#resourcename)
  * OrganizationId **required** [OrganizationId](#organizationid)
  * ResourceId **required** [ResourceId](#resourceid)

### UpdateResourceResponse
* UpdateResourceResponse `object`

### User
* User `object`: The representation of an Amazon WorkMail user.
  * DisabledDate [Timestamp](#timestamp)
  * DisplayName [String](#string)
  * Email [EmailAddress](#emailaddress)
  * EnabledDate [Timestamp](#timestamp)
  * Id [WorkMailIdentifier](#workmailidentifier)
  * Name [UserName](#username)
  * State [EntityState](#entitystate)
  * UserRole [UserRole](#userrole)

### UserName
* UserName `string`

### UserRole
* UserRole `string` (values: USER, RESOURCE, SYSTEM_USER)

### Users
* Users `array`
  * items [User](#user)

### WorkMailIdentifier
* WorkMailIdentifier `string`


