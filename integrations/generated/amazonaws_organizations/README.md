# @datafire/amazonaws_organizations

Client library for AWS Organizations

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_organizations
```
```js
let amazonaws_organizations = require('@datafire/amazonaws_organizations').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Organizations</fullname>

## Actions

### AcceptHandshake



```js
amazonaws_organizations.AcceptHandshake({
  "HandshakeId": null
}, context)
```

#### Input
* input `object`
  * HandshakeId **required**

#### Output
* output [AcceptHandshakeResponse](#accepthandshakeresponse)

### AttachPolicy



```js
amazonaws_organizations.AttachPolicy({
  "PolicyId": null,
  "TargetId": null
}, context)
```

#### Input
* input `object`
  * PolicyId **required**
  * TargetId **required**

#### Output
*Output schema unknown*

### CancelHandshake



```js
amazonaws_organizations.CancelHandshake({
  "HandshakeId": null
}, context)
```

#### Input
* input `object`
  * HandshakeId **required**

#### Output
* output [CancelHandshakeResponse](#cancelhandshakeresponse)

### CreateAccount



```js
amazonaws_organizations.CreateAccount({
  "Email": null,
  "AccountName": null
}, context)
```

#### Input
* input `object`
  * AccountName **required**
  * Email **required**
  * IamUserAccessToBilling
  * RoleName
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateAccountResponse](#createaccountresponse)

### CreateGovCloudAccount



```js
amazonaws_organizations.CreateGovCloudAccount({
  "Email": null,
  "AccountName": null
}, context)
```

#### Input
* input `object`
  * AccountName **required**
  * Email **required**
  * IamUserAccessToBilling
  * RoleName
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateGovCloudAccountResponse](#creategovcloudaccountresponse)

### CreateOrganization



```js
amazonaws_organizations.CreateOrganization({}, context)
```

#### Input
* input `object`
  * FeatureSet

#### Output
* output [CreateOrganizationResponse](#createorganizationresponse)

### CreateOrganizationalUnit



```js
amazonaws_organizations.CreateOrganizationalUnit({
  "ParentId": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * ParentId **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateOrganizationalUnitResponse](#createorganizationalunitresponse)

### CreatePolicy



```js
amazonaws_organizations.CreatePolicy({
  "Content": null,
  "Description": null,
  "Name": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * Content **required**
  * Description **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)
  * Type **required**

#### Output
* output [CreatePolicyResponse](#createpolicyresponse)

### DeclineHandshake



```js
amazonaws_organizations.DeclineHandshake({
  "HandshakeId": null
}, context)
```

#### Input
* input `object`
  * HandshakeId **required**

#### Output
* output [DeclineHandshakeResponse](#declinehandshakeresponse)

### DeleteOrganization



```js
amazonaws_organizations.DeleteOrganization({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### DeleteOrganizationalUnit



```js
amazonaws_organizations.DeleteOrganizationalUnit({
  "OrganizationalUnitId": null
}, context)
```

#### Input
* input `object`
  * OrganizationalUnitId **required**

#### Output
*Output schema unknown*

### DeletePolicy



```js
amazonaws_organizations.DeletePolicy({
  "PolicyId": null
}, context)
```

#### Input
* input `object`
  * PolicyId **required**

#### Output
*Output schema unknown*

### DeregisterDelegatedAdministrator



```js
amazonaws_organizations.DeregisterDelegatedAdministrator({
  "AccountId": null,
  "ServicePrincipal": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * ServicePrincipal **required**

#### Output
*Output schema unknown*

### DescribeAccount



```js
amazonaws_organizations.DescribeAccount({
  "AccountId": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**

#### Output
* output [DescribeAccountResponse](#describeaccountresponse)

### DescribeCreateAccountStatus



```js
amazonaws_organizations.DescribeCreateAccountStatus({
  "CreateAccountRequestId": null
}, context)
```

#### Input
* input `object`
  * CreateAccountRequestId **required**

#### Output
* output [DescribeCreateAccountStatusResponse](#describecreateaccountstatusresponse)

### DescribeEffectivePolicy



```js
amazonaws_organizations.DescribeEffectivePolicy({
  "PolicyType": null
}, context)
```

#### Input
* input `object`
  * PolicyType **required**
  * TargetId

#### Output
* output [DescribeEffectivePolicyResponse](#describeeffectivepolicyresponse)

### DescribeHandshake



```js
amazonaws_organizations.DescribeHandshake({
  "HandshakeId": null
}, context)
```

#### Input
* input `object`
  * HandshakeId **required**

#### Output
* output [DescribeHandshakeResponse](#describehandshakeresponse)

### DescribeOrganization



```js
amazonaws_organizations.DescribeOrganization({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeOrganizationResponse](#describeorganizationresponse)

### DescribeOrganizationalUnit



```js
amazonaws_organizations.DescribeOrganizationalUnit({
  "OrganizationalUnitId": null
}, context)
```

#### Input
* input `object`
  * OrganizationalUnitId **required**

#### Output
* output [DescribeOrganizationalUnitResponse](#describeorganizationalunitresponse)

### DescribePolicy



```js
amazonaws_organizations.DescribePolicy({
  "PolicyId": null
}, context)
```

#### Input
* input `object`
  * PolicyId **required**

#### Output
* output [DescribePolicyResponse](#describepolicyresponse)

### DetachPolicy



```js
amazonaws_organizations.DetachPolicy({
  "PolicyId": null,
  "TargetId": null
}, context)
```

#### Input
* input `object`
  * PolicyId **required**
  * TargetId **required**

#### Output
*Output schema unknown*

### DisableAWSServiceAccess



```js
amazonaws_organizations.DisableAWSServiceAccess({
  "ServicePrincipal": null
}, context)
```

#### Input
* input `object`
  * ServicePrincipal **required**

#### Output
*Output schema unknown*

### DisablePolicyType



```js
amazonaws_organizations.DisablePolicyType({
  "RootId": null,
  "PolicyType": null
}, context)
```

#### Input
* input `object`
  * PolicyType **required**
  * RootId **required**

#### Output
* output [DisablePolicyTypeResponse](#disablepolicytyperesponse)

### EnableAWSServiceAccess



```js
amazonaws_organizations.EnableAWSServiceAccess({
  "ServicePrincipal": null
}, context)
```

#### Input
* input `object`
  * ServicePrincipal **required**

#### Output
*Output schema unknown*

### EnableAllFeatures



```js
amazonaws_organizations.EnableAllFeatures({}, context)
```

#### Input
* input `object`

#### Output
* output [EnableAllFeaturesResponse](#enableallfeaturesresponse)

### EnablePolicyType



```js
amazonaws_organizations.EnablePolicyType({
  "RootId": null,
  "PolicyType": null
}, context)
```

#### Input
* input `object`
  * PolicyType **required**
  * RootId **required**

#### Output
* output [EnablePolicyTypeResponse](#enablepolicytyperesponse)

### InviteAccountToOrganization



```js
amazonaws_organizations.InviteAccountToOrganization({
  "Target": null
}, context)
```

#### Input
* input `object`
  * Notes
  * Tags
    * items [Tag](#tag)
  * Target **required**
    * Id **required**
    * Type **required**

#### Output
* output [InviteAccountToOrganizationResponse](#inviteaccounttoorganizationresponse)

### LeaveOrganization



```js
amazonaws_organizations.LeaveOrganization({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### ListAWSServiceAccessForOrganization



```js
amazonaws_organizations.ListAWSServiceAccessForOrganization({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListAWSServiceAccessForOrganizationResponse](#listawsserviceaccessfororganizationresponse)

### ListAccounts



```js
amazonaws_organizations.ListAccounts({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListAccountsResponse](#listaccountsresponse)

### ListAccountsForParent



```js
amazonaws_organizations.ListAccountsForParent({
  "ParentId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ParentId **required**

#### Output
* output [ListAccountsForParentResponse](#listaccountsforparentresponse)

### ListChildren



```js
amazonaws_organizations.ListChildren({
  "ParentId": null,
  "ChildType": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ChildType **required**
  * MaxResults
  * NextToken
  * ParentId **required**

#### Output
* output [ListChildrenResponse](#listchildrenresponse)

### ListCreateAccountStatus



```js
amazonaws_organizations.ListCreateAccountStatus({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * States
    * items [CreateAccountState](#createaccountstate)

#### Output
* output [ListCreateAccountStatusResponse](#listcreateaccountstatusresponse)

### ListDelegatedAdministrators



```js
amazonaws_organizations.ListDelegatedAdministrators({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ServicePrincipal

#### Output
* output [ListDelegatedAdministratorsResponse](#listdelegatedadministratorsresponse)

### ListDelegatedServicesForAccount



```js
amazonaws_organizations.ListDelegatedServicesForAccount({
  "AccountId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListDelegatedServicesForAccountResponse](#listdelegatedservicesforaccountresponse)

### ListHandshakesForAccount



```js
amazonaws_organizations.ListHandshakesForAccount({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * ActionType
    * ParentHandshakeId
  * MaxResults
  * NextToken

#### Output
* output [ListHandshakesForAccountResponse](#listhandshakesforaccountresponse)

### ListHandshakesForOrganization



```js
amazonaws_organizations.ListHandshakesForOrganization({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * ActionType
    * ParentHandshakeId
  * MaxResults
  * NextToken

#### Output
* output [ListHandshakesForOrganizationResponse](#listhandshakesfororganizationresponse)

### ListOrganizationalUnitsForParent



```js
amazonaws_organizations.ListOrganizationalUnitsForParent({
  "ParentId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ParentId **required**

#### Output
* output [ListOrganizationalUnitsForParentResponse](#listorganizationalunitsforparentresponse)

### ListParents



```js
amazonaws_organizations.ListParents({
  "ChildId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ChildId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListParentsResponse](#listparentsresponse)

### ListPolicies



```js
amazonaws_organizations.ListPolicies({
  "Filter": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter **required**
  * MaxResults
  * NextToken

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

### ListPoliciesForTarget



```js
amazonaws_organizations.ListPoliciesForTarget({
  "TargetId": null,
  "Filter": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter **required**
  * MaxResults
  * NextToken
  * TargetId **required**

#### Output
* output [ListPoliciesForTargetResponse](#listpoliciesfortargetresponse)

### ListRoots



```js
amazonaws_organizations.ListRoots({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListRootsResponse](#listrootsresponse)

### ListTagsForResource



```js
amazonaws_organizations.ListTagsForResource({
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken
  * ResourceId **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTargetsForPolicy



```js
amazonaws_organizations.ListTargetsForPolicy({
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
* output [ListTargetsForPolicyResponse](#listtargetsforpolicyresponse)

### MoveAccount



```js
amazonaws_organizations.MoveAccount({
  "AccountId": null,
  "SourceParentId": null,
  "DestinationParentId": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * DestinationParentId **required**
  * SourceParentId **required**

#### Output
*Output schema unknown*

### RegisterDelegatedAdministrator



```js
amazonaws_organizations.RegisterDelegatedAdministrator({
  "AccountId": null,
  "ServicePrincipal": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**
  * ServicePrincipal **required**

#### Output
*Output schema unknown*

### RemoveAccountFromOrganization



```js
amazonaws_organizations.RemoveAccountFromOrganization({
  "AccountId": null
}, context)
```

#### Input
* input `object`
  * AccountId **required**

#### Output
*Output schema unknown*

### TagResource



```js
amazonaws_organizations.TagResource({
  "ResourceId": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_organizations.UntagResource({
  "ResourceId": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*

### UpdateOrganizationalUnit



```js
amazonaws_organizations.UpdateOrganizationalUnit({
  "OrganizationalUnitId": null
}, context)
```

#### Input
* input `object`
  * Name
  * OrganizationalUnitId **required**

#### Output
* output [UpdateOrganizationalUnitResponse](#updateorganizationalunitresponse)

### UpdatePolicy



```js
amazonaws_organizations.UpdatePolicy({
  "PolicyId": null
}, context)
```

#### Input
* input `object`
  * Content
  * Description
  * Name
  * PolicyId **required**

#### Output
* output [UpdatePolicyResponse](#updatepolicyresponse)



## Definitions

### AWSOrganizationsNotInUseException


### AcceptHandshakeRequest
* AcceptHandshakeRequest `object`
  * HandshakeId **required**

### AcceptHandshakeResponse
* AcceptHandshakeResponse `object`
  * Handshake
    * Action
    * Arn
    * ExpirationTimestamp
    * Id
    * Parties
      * items [HandshakeParty](#handshakeparty)
    * RequestedTimestamp
    * Resources
      * items [HandshakeResource](#handshakeresource)
    * State

### AccessDeniedException


### AccessDeniedForDependencyException


### Account
* Account `object`: Contains information about an AWS account that is a member of an organization.
  * Arn
  * Email
  * Id
  * JoinedMethod
  * JoinedTimestamp
  * Name
  * Status

### AccountAlreadyRegisteredException


### AccountArn
* AccountArn `string`

### AccountId
* AccountId `string`

### AccountJoinedMethod
* AccountJoinedMethod `string` (values: INVITED, CREATED)

### AccountName
* AccountName `string`

### AccountNotFoundException


### AccountNotRegisteredException


### AccountOwnerNotVerifiedException


### AccountStatus
* AccountStatus `string` (values: ACTIVE, SUSPENDED)

### Accounts
* Accounts `array`
  * items [Account](#account)

### ActionType
* ActionType `string` (values: INVITE, ENABLE_ALL_FEATURES, APPROVE_ALL_FEATURES, ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE)

### AlreadyInOrganizationException


### AttachPolicyRequest
* AttachPolicyRequest `object`
  * PolicyId **required**
  * TargetId **required**

### AwsManagedPolicy
* AwsManagedPolicy `boolean`

### CancelHandshakeRequest
* CancelHandshakeRequest `object`
  * HandshakeId **required**

### CancelHandshakeResponse
* CancelHandshakeResponse `object`
  * Handshake
    * Action
    * Arn
    * ExpirationTimestamp
    * Id
    * Parties
      * items [HandshakeParty](#handshakeparty)
    * RequestedTimestamp
    * Resources
      * items [HandshakeResource](#handshakeresource)
    * State

### Child
* Child `object`: Contains a list of child entities, either OUs or accounts.
  * Id
  * Type

### ChildId
* ChildId `string`

### ChildNotFoundException


### ChildType
* ChildType `string` (values: ACCOUNT, ORGANIZATIONAL_UNIT)

### Children
* Children `array`
  * items [Child](#child)

### ConcurrentModificationException


### ConstraintViolationException


### CreateAccountFailureReason
* CreateAccountFailureReason `string` (values: ACCOUNT_LIMIT_EXCEEDED, EMAIL_ALREADY_EXISTS, INVALID_ADDRESS, INVALID_EMAIL, CONCURRENT_ACCOUNT_MODIFICATION, INTERNAL_FAILURE, GOVCLOUD_ACCOUNT_ALREADY_EXISTS, MISSING_BUSINESS_VALIDATION, MISSING_PAYMENT_INSTRUMENT)

### CreateAccountRequest
* CreateAccountRequest `object`
  * AccountName **required**
  * Email **required**
  * IamUserAccessToBilling
  * RoleName
  * Tags
    * items [Tag](#tag)

### CreateAccountRequestId
* CreateAccountRequestId `string`

### CreateAccountResponse
* CreateAccountResponse `object`
  * CreateAccountStatus
    * AccountId
    * AccountName
    * CompletedTimestamp
    * FailureReason
    * GovCloudAccountId
    * Id
    * RequestedTimestamp
    * State

### CreateAccountState
* CreateAccountState `string` (values: IN_PROGRESS, SUCCEEDED, FAILED)

### CreateAccountStates
* CreateAccountStates `array`
  * items [CreateAccountState](#createaccountstate)

### CreateAccountStatus
* CreateAccountStatus `object`: Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization.
  * AccountId
  * AccountName
  * CompletedTimestamp
  * FailureReason
  * GovCloudAccountId
  * Id
  * RequestedTimestamp
  * State

### CreateAccountStatusNotFoundException


### CreateAccountStatuses
* CreateAccountStatuses `array`
  * items [CreateAccountStatus](#createaccountstatus)

### CreateGovCloudAccountRequest
* CreateGovCloudAccountRequest `object`
  * AccountName **required**
  * Email **required**
  * IamUserAccessToBilling
  * RoleName
  * Tags
    * items [Tag](#tag)

### CreateGovCloudAccountResponse
* CreateGovCloudAccountResponse `object`
  * CreateAccountStatus [CreateAccountStatus](#createaccountstatus)

### CreateOrganizationRequest
* CreateOrganizationRequest `object`
  * FeatureSet

### CreateOrganizationResponse
* CreateOrganizationResponse `object`
  * Organization
    * Arn
    * AvailablePolicyTypes
      * items [PolicyTypeSummary](#policytypesummary)
    * FeatureSet
    * Id
    * MasterAccountArn
    * MasterAccountEmail
    * MasterAccountId

### CreateOrganizationalUnitRequest
* CreateOrganizationalUnitRequest `object`
  * Name **required**
  * ParentId **required**
  * Tags
    * items [Tag](#tag)

### CreateOrganizationalUnitResponse
* CreateOrganizationalUnitResponse `object`
  * OrganizationalUnit
    * Arn
    * Id
    * Name

### CreatePolicyRequest
* CreatePolicyRequest `object`
  * Content **required**
  * Description **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)
  * Type **required**

### CreatePolicyResponse
* CreatePolicyResponse `object`
  * Policy
    * Content
    * PolicySummary
      * Arn
      * AwsManaged
      * Description
      * Id
      * Name
      * Type

### DeclineHandshakeRequest
* DeclineHandshakeRequest `object`
  * HandshakeId **required**

### DeclineHandshakeResponse
* DeclineHandshakeResponse `object`
  * Handshake
    * Action
    * Arn
    * ExpirationTimestamp
    * Id
    * Parties
      * items [HandshakeParty](#handshakeparty)
    * RequestedTimestamp
    * Resources
      * items [HandshakeResource](#handshakeresource)
    * State

### DelegatedAdministrator
* DelegatedAdministrator `object`: Contains information about the delegated administrator.
  * Arn
  * DelegationEnabledDate
  * Email
  * Id
  * JoinedMethod
  * JoinedTimestamp
  * Name
  * Status

### DelegatedAdministrators
* DelegatedAdministrators `array`
  * items [DelegatedAdministrator](#delegatedadministrator)

### DelegatedService
* DelegatedService `object`: Contains information about the AWS service for which the account is a delegated administrator.
  * DelegationEnabledDate
  * ServicePrincipal

### DelegatedServices
* DelegatedServices `array`
  * items [DelegatedService](#delegatedservice)

### DeleteOrganizationalUnitRequest
* DeleteOrganizationalUnitRequest `object`
  * OrganizationalUnitId **required**

### DeletePolicyRequest
* DeletePolicyRequest `object`
  * PolicyId **required**

### DeregisterDelegatedAdministratorRequest
* DeregisterDelegatedAdministratorRequest `object`
  * AccountId **required**
  * ServicePrincipal **required**

### DescribeAccountRequest
* DescribeAccountRequest `object`
  * AccountId **required**

### DescribeAccountResponse
* DescribeAccountResponse `object`
  * Account
    * Arn
    * Email
    * Id
    * JoinedMethod
    * JoinedTimestamp
    * Name
    * Status

### DescribeCreateAccountStatusRequest
* DescribeCreateAccountStatusRequest `object`
  * CreateAccountRequestId **required**

### DescribeCreateAccountStatusResponse
* DescribeCreateAccountStatusResponse `object`
  * CreateAccountStatus
    * AccountId
    * AccountName
    * CompletedTimestamp
    * FailureReason
    * GovCloudAccountId
    * Id
    * RequestedTimestamp
    * State

### DescribeEffectivePolicyRequest
* DescribeEffectivePolicyRequest `object`
  * PolicyType **required**
  * TargetId

### DescribeEffectivePolicyResponse
* DescribeEffectivePolicyResponse `object`
  * EffectivePolicy
    * LastUpdatedTimestamp
    * PolicyContent
    * PolicyType
    * TargetId

### DescribeHandshakeRequest
* DescribeHandshakeRequest `object`
  * HandshakeId **required**

### DescribeHandshakeResponse
* DescribeHandshakeResponse `object`
  * Handshake
    * Action
    * Arn
    * ExpirationTimestamp
    * Id
    * Parties
      * items [HandshakeParty](#handshakeparty)
    * RequestedTimestamp
    * Resources
      * items [HandshakeResource](#handshakeresource)
    * State

### DescribeOrganizationResponse
* DescribeOrganizationResponse `object`
  * Organization
    * Arn
    * AvailablePolicyTypes
      * items [PolicyTypeSummary](#policytypesummary)
    * FeatureSet
    * Id
    * MasterAccountArn
    * MasterAccountEmail
    * MasterAccountId

### DescribeOrganizationalUnitRequest
* DescribeOrganizationalUnitRequest `object`
  * OrganizationalUnitId **required**

### DescribeOrganizationalUnitResponse
* DescribeOrganizationalUnitResponse `object`
  * OrganizationalUnit
    * Arn
    * Id
    * Name

### DescribePolicyRequest
* DescribePolicyRequest `object`
  * PolicyId **required**

### DescribePolicyResponse
* DescribePolicyResponse `object`
  * Policy
    * Content
    * PolicySummary
      * Arn
      * AwsManaged
      * Description
      * Id
      * Name
      * Type

### DestinationParentNotFoundException


### DetachPolicyRequest
* DetachPolicyRequest `object`
  * PolicyId **required**
  * TargetId **required**

### DisableAWSServiceAccessRequest
* DisableAWSServiceAccessRequest `object`
  * ServicePrincipal **required**

### DisablePolicyTypeRequest
* DisablePolicyTypeRequest `object`
  * PolicyType **required**
  * RootId **required**

### DisablePolicyTypeResponse
* DisablePolicyTypeResponse `object`
  * Root
    * Arn
    * Id
    * Name
    * PolicyTypes
      * items [PolicyTypeSummary](#policytypesummary)

### DuplicateAccountException


### DuplicateHandshakeException


### DuplicateOrganizationalUnitException


### DuplicatePolicyAttachmentException


### DuplicatePolicyException


### EffectivePolicy
* EffectivePolicy `object`: Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account.
  * LastUpdatedTimestamp
  * PolicyContent
  * PolicyType
  * TargetId

### EffectivePolicyNotFoundException


### EffectivePolicyType
* EffectivePolicyType `string` (values: TAG_POLICY, BACKUP_POLICY, AISERVICES_OPT_OUT_POLICY)

### Email
* Email `string`

### EnableAWSServiceAccessRequest
* EnableAWSServiceAccessRequest `object`
  * ServicePrincipal **required**

### EnableAllFeaturesRequest
* EnableAllFeaturesRequest `object`

### EnableAllFeaturesResponse
* EnableAllFeaturesResponse `object`
  * Handshake
    * Action
    * Arn
    * ExpirationTimestamp
    * Id
    * Parties
      * items [HandshakeParty](#handshakeparty)
    * RequestedTimestamp
    * Resources
      * items [HandshakeResource](#handshakeresource)
    * State

### EnablePolicyTypeRequest
* EnablePolicyTypeRequest `object`
  * PolicyType **required**
  * RootId **required**

### EnablePolicyTypeResponse
* EnablePolicyTypeResponse `object`
  * Root
    * Arn
    * Id
    * Name
    * PolicyTypes
      * items [PolicyTypeSummary](#policytypesummary)

### EnabledServicePrincipal
* EnabledServicePrincipal `object`: A structure that contains details of a service principal that represents an AWS service that is enabled to integrate with AWS Organizations.
  * DateEnabled
  * ServicePrincipal

### EnabledServicePrincipals
* EnabledServicePrincipals `array`
  * items [EnabledServicePrincipal](#enabledserviceprincipal)

### FinalizingOrganizationException


### GenericArn
* GenericArn `string`

### Handshake
* Handshake `object`: <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a management account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p>
  * Action
  * Arn
  * ExpirationTimestamp
  * Id
  * Parties
    * items [HandshakeParty](#handshakeparty)
  * RequestedTimestamp
  * Resources
    * items [HandshakeResource](#handshakeresource)
  * State

### HandshakeAlreadyInStateException


### HandshakeArn
* HandshakeArn `string`

### HandshakeConstraintViolationException


### HandshakeFilter
* HandshakeFilter `object`: Specifies the criteria that are used to select the handshakes for the operation.
  * ActionType
  * ParentHandshakeId

### HandshakeId
* HandshakeId `string`

### HandshakeNotFoundException


### HandshakeNotes
* HandshakeNotes `string`

### HandshakeParties
* HandshakeParties `array`
  * items [HandshakeParty](#handshakeparty)

### HandshakeParty
* HandshakeParty `object`: Identifies a participant in a handshake.
  * Id **required**
  * Type **required**

### HandshakePartyId
* HandshakePartyId `string`

### HandshakePartyType
* HandshakePartyType `string` (values: ACCOUNT, ORGANIZATION, EMAIL)

### HandshakeResource
* HandshakeResource `object`: Contains additional data that is needed to process a handshake.
  * Resources
    * items [HandshakeResource](#handshakeresource)
  * Type
  * Value

### HandshakeResourceType
* HandshakeResourceType `string` (values: ACCOUNT, ORGANIZATION, ORGANIZATION_FEATURE_SET, EMAIL, MASTER_EMAIL, MASTER_NAME, NOTES, PARENT_HANDSHAKE)

### HandshakeResourceValue
* HandshakeResourceValue `string`

### HandshakeResources
* HandshakeResources `array`
  * items [HandshakeResource](#handshakeresource)

### HandshakeState
* HandshakeState `string` (values: REQUESTED, OPEN, CANCELED, ACCEPTED, DECLINED, EXPIRED)

### Handshakes
* Handshakes `array`
  * items [Handshake](#handshake)

### IAMUserAccessToBilling
* IAMUserAccessToBilling `string` (values: ALLOW, DENY)

### InvalidHandshakeTransitionException


### InvalidInputException


### InviteAccountToOrganizationRequest
* InviteAccountToOrganizationRequest `object`
  * Notes
  * Tags
    * items [Tag](#tag)
  * Target **required**
    * Id **required**
    * Type **required**

### InviteAccountToOrganizationResponse
* InviteAccountToOrganizationResponse `object`
  * Handshake
    * Action
    * Arn
    * ExpirationTimestamp
    * Id
    * Parties
      * items [HandshakeParty](#handshakeparty)
    * RequestedTimestamp
    * Resources
      * items [HandshakeResource](#handshakeresource)
    * State

### ListAWSServiceAccessForOrganizationRequest
* ListAWSServiceAccessForOrganizationRequest `object`
  * MaxResults
  * NextToken

### ListAWSServiceAccessForOrganizationResponse
* ListAWSServiceAccessForOrganizationResponse `object`
  * EnabledServicePrincipals
    * items [EnabledServicePrincipal](#enabledserviceprincipal)
  * NextToken

### ListAccountsForParentRequest
* ListAccountsForParentRequest `object`
  * MaxResults
  * NextToken
  * ParentId **required**

### ListAccountsForParentResponse
* ListAccountsForParentResponse `object`
  * Accounts
    * items [Account](#account)
  * NextToken

### ListAccountsRequest
* ListAccountsRequest `object`
  * MaxResults
  * NextToken

### ListAccountsResponse
* ListAccountsResponse `object`
  * Accounts
    * items [Account](#account)
  * NextToken

### ListChildrenRequest
* ListChildrenRequest `object`
  * ChildType **required**
  * MaxResults
  * NextToken
  * ParentId **required**

### ListChildrenResponse
* ListChildrenResponse `object`
  * Children
    * items [Child](#child)
  * NextToken

### ListCreateAccountStatusRequest
* ListCreateAccountStatusRequest `object`
  * MaxResults
  * NextToken
  * States
    * items [CreateAccountState](#createaccountstate)

### ListCreateAccountStatusResponse
* ListCreateAccountStatusResponse `object`
  * CreateAccountStatuses
    * items [CreateAccountStatus](#createaccountstatus)
  * NextToken

### ListDelegatedAdministratorsRequest
* ListDelegatedAdministratorsRequest `object`
  * MaxResults
  * NextToken
  * ServicePrincipal

### ListDelegatedAdministratorsResponse
* ListDelegatedAdministratorsResponse `object`
  * DelegatedAdministrators
    * items [DelegatedAdministrator](#delegatedadministrator)
  * NextToken

### ListDelegatedServicesForAccountRequest
* ListDelegatedServicesForAccountRequest `object`
  * AccountId **required**
  * MaxResults
  * NextToken

### ListDelegatedServicesForAccountResponse
* ListDelegatedServicesForAccountResponse `object`
  * DelegatedServices
    * items [DelegatedService](#delegatedservice)
  * NextToken

### ListHandshakesForAccountRequest
* ListHandshakesForAccountRequest `object`
  * Filter
    * ActionType
    * ParentHandshakeId
  * MaxResults
  * NextToken

### ListHandshakesForAccountResponse
* ListHandshakesForAccountResponse `object`
  * Handshakes
    * items [Handshake](#handshake)
  * NextToken

### ListHandshakesForOrganizationRequest
* ListHandshakesForOrganizationRequest `object`
  * Filter
    * ActionType
    * ParentHandshakeId
  * MaxResults
  * NextToken

### ListHandshakesForOrganizationResponse
* ListHandshakesForOrganizationResponse `object`
  * Handshakes
    * items [Handshake](#handshake)
  * NextToken

### ListOrganizationalUnitsForParentRequest
* ListOrganizationalUnitsForParentRequest `object`
  * MaxResults
  * NextToken
  * ParentId **required**

### ListOrganizationalUnitsForParentResponse
* ListOrganizationalUnitsForParentResponse `object`
  * NextToken
  * OrganizationalUnits
    * items [OrganizationalUnit](#organizationalunit)

### ListParentsRequest
* ListParentsRequest `object`
  * ChildId **required**
  * MaxResults
  * NextToken

### ListParentsResponse
* ListParentsResponse `object`
  * NextToken
  * Parents
    * items [Parent](#parent)

### ListPoliciesForTargetRequest
* ListPoliciesForTargetRequest `object`
  * Filter **required**
  * MaxResults
  * NextToken
  * TargetId **required**

### ListPoliciesForTargetResponse
* ListPoliciesForTargetResponse `object`
  * NextToken
  * Policies
    * items [PolicySummary](#policysummary)

### ListPoliciesRequest
* ListPoliciesRequest `object`
  * Filter **required**
  * MaxResults
  * NextToken

### ListPoliciesResponse
* ListPoliciesResponse `object`
  * NextToken
  * Policies
    * items [PolicySummary](#policysummary)

### ListRootsRequest
* ListRootsRequest `object`
  * MaxResults
  * NextToken

### ListRootsResponse
* ListRootsResponse `object`
  * NextToken
  * Roots
    * items [Root](#root)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * NextToken
  * ResourceId **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### ListTargetsForPolicyRequest
* ListTargetsForPolicyRequest `object`
  * MaxResults
  * NextToken
  * PolicyId **required**

### ListTargetsForPolicyResponse
* ListTargetsForPolicyResponse `object`
  * NextToken
  * Targets
    * items [PolicyTargetSummary](#policytargetsummary)

### MalformedPolicyDocumentException


### MasterCannotLeaveOrganizationException


### MaxResults
* MaxResults `integer`

### MoveAccountRequest
* MoveAccountRequest `object`
  * AccountId **required**
  * DestinationParentId **required**
  * SourceParentId **required**

### NextToken
* NextToken `string`

### Organization
* Organization `object`: Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .
  * Arn
  * AvailablePolicyTypes
    * items [PolicyTypeSummary](#policytypesummary)
  * FeatureSet
  * Id
  * MasterAccountArn
  * MasterAccountEmail
  * MasterAccountId

### OrganizationArn
* OrganizationArn `string`

### OrganizationFeatureSet
* OrganizationFeatureSet `string` (values: ALL, CONSOLIDATED_BILLING)

### OrganizationId
* OrganizationId `string`

### OrganizationNotEmptyException


### OrganizationalUnit
* OrganizationalUnit `object`: Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.
  * Arn
  * Id
  * Name

### OrganizationalUnitArn
* OrganizationalUnitArn `string`

### OrganizationalUnitId
* OrganizationalUnitId `string`

### OrganizationalUnitName
* OrganizationalUnitName `string`

### OrganizationalUnitNotEmptyException


### OrganizationalUnitNotFoundException


### OrganizationalUnits
* OrganizationalUnits `array`
  * items [OrganizationalUnit](#organizationalunit)

### Parent
* Parent `object`: Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.
  * Id
  * Type

### ParentId
* ParentId `string`

### ParentNotFoundException


### ParentType
* ParentType `string` (values: ROOT, ORGANIZATIONAL_UNIT)

### Parents
* Parents `array`
  * items [Parent](#parent)

### Policies
* Policies `array`
  * items [PolicySummary](#policysummary)

### Policy
* Policy `object`: Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.
  * Content
  * PolicySummary
    * Arn
    * AwsManaged
    * Description
    * Id
    * Name
    * Type

### PolicyArn
* PolicyArn `string`

### PolicyChangesInProgressException


### PolicyContent
* PolicyContent `string`

### PolicyDescription
* PolicyDescription `string`

### PolicyId
* PolicyId `string`

### PolicyInUseException


### PolicyName
* PolicyName `string`

### PolicyNotAttachedException


### PolicyNotFoundException


### PolicySummary
* PolicySummary `object`: Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.
  * Arn
  * AwsManaged
  * Description
  * Id
  * Name
  * Type

### PolicyTargetId
* PolicyTargetId `string`

### PolicyTargetSummary
* PolicyTargetSummary `object`: Contains information about a root, OU, or account that a policy is attached to.
  * Arn
  * Name
  * TargetId
  * Type

### PolicyTargets
* PolicyTargets `array`
  * items [PolicyTargetSummary](#policytargetsummary)

### PolicyType
* PolicyType `string` (values: SERVICE_CONTROL_POLICY, TAG_POLICY, BACKUP_POLICY, AISERVICES_OPT_OUT_POLICY)

### PolicyTypeAlreadyEnabledException


### PolicyTypeNotAvailableForOrganizationException


### PolicyTypeNotEnabledException


### PolicyTypeStatus
* PolicyTypeStatus `string` (values: ENABLED, PENDING_ENABLE, PENDING_DISABLE)

### PolicyTypeSummary
* PolicyTypeSummary `object`: Contains information about a policy type and its status in the associated root.
  * Status
  * Type

### PolicyTypes
* PolicyTypes `array`
  * items [PolicyTypeSummary](#policytypesummary)

### RegisterDelegatedAdministratorRequest
* RegisterDelegatedAdministratorRequest `object`
  * AccountId **required**
  * ServicePrincipal **required**

### RemoveAccountFromOrganizationRequest
* RemoveAccountFromOrganizationRequest `object`
  * AccountId **required**

### RoleName
* RoleName `string`

### Root
* Root `object`: Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. The root contains every AWS account in the organization.
  * Arn
  * Id
  * Name
  * PolicyTypes
    * items [PolicyTypeSummary](#policytypesummary)

### RootArn
* RootArn `string`

### RootId
* RootId `string`

### RootName
* RootName `string`

### RootNotFoundException


### Roots
* Roots `array`
  * items [Root](#root)

### ServiceException


### ServicePrincipal
* ServicePrincipal `string`

### SourceParentNotFoundException


### Tag
* Tag `object`: <p>A custom key-value pair associated with a resource within your organization.</p> <p>You can attach tags to any of the following organization resources.</p> <ul> <li> <p>AWS account</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Organization root</p> </li> <li> <p>Policy</p> </li> </ul>
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceId **required**
  * Tags **required**
    * items [Tag](#tag)

### TagValue
* TagValue `string`

### TaggableResourceId
* TaggableResourceId `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TargetName
* TargetName `string`

### TargetNotFoundException


### TargetType
* TargetType `string` (values: ACCOUNT, ORGANIZATIONAL_UNIT, ROOT)

### Timestamp
* Timestamp `string`

### TooManyRequestsException


### UnsupportedAPIEndpointException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceId **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UpdateOrganizationalUnitRequest
* UpdateOrganizationalUnitRequest `object`
  * Name
  * OrganizationalUnitId **required**

### UpdateOrganizationalUnitResponse
* UpdateOrganizationalUnitResponse `object`
  * OrganizationalUnit
    * Arn
    * Id
    * Name

### UpdatePolicyRequest
* UpdatePolicyRequest `object`
  * Content
  * Description
  * Name
  * PolicyId **required**

### UpdatePolicyResponse
* UpdatePolicyResponse `object`
  * Policy
    * Content
    * PolicySummary
      * Arn
      * AwsManaged
      * Description
      * Id
      * Name
      * Type


