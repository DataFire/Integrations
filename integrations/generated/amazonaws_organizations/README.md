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

amazonaws_organizations.AcceptHandshake({
  "HandshakeId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Organizations API Reference</fullname> <p>AWS Organizations is a web service that enables you to consolidate your multiple AWS accounts into an <i>organization</i> and centrally manage your accounts and their resources.</p> <p>This guide provides descriptions of the Organizations API. For more information about using this service, see the <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">AWS Organizations User Guide</a>.</p> <p> <b>API Version</b> </p> <p>This version of the Organizations API Reference documents the Organizations API version 2016-11-28.</p> <note> <p>As an alternative to using the API directly, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to AWS Organizations. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note> <p>We recommend that you use the AWS SDKs to make programmatic API calls to Organizations. However, you also can use the Organizations Query API to make direct calls to the Organizations web service. To learn more about the Organizations Query API, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_query-requests.html">Making Query Requests</a> in the <i>AWS Organizations User Guide</i>. Organizations supports GET and POST requests for all actions. That is, the API does not require you to use GET for some actions and POST for others. However, GET requests are subject to the limitation size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p> <p> <b>Signing Requests</b> </p> <p>When you send HTTP requests to AWS, you must sign the requests so that AWS can identify who sent them. You sign requests with your AWS access key, which consists of an access key ID and a secret access key. We strongly recommend that you do not create an access key for your root account. Anyone who has the access key for your root account has unrestricted access to all the resources in your account. Instead, create an access key for an IAM user account that has administrative privileges. As another option, use AWS Security Token Service to generate temporary security credentials, and use those credentials to sign requests. </p> <p>To sign requests, we recommend that you use <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you have an existing application that uses Signature Version 2, you do not have to update it to use Signature Version 4. However, some operations now require Signature Version 4. The documentation for operations that require version 4 indicate this requirement. </p> <p>When you use the AWS Command Line Interface (AWS CLI) or one of the AWS SDKs to make requests to AWS, these tools automatically sign the requests for you with the access key that you specify when you configure the tools.</p> <p>In this release, each organization can have only one root. In a future release, a single organization will support multiple roots.</p> <p> <b>Support and Feedback for AWS Organizations</b> </p> <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">AWS Organizations support forum</a>. For more information about the AWS support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p> <p> <b>Endpoint to Call When Using the CLI or the AWS API</b> </p> <p>For the current release of Organizations, you must specify the <code>us-east-1</code> region for all AWS API and CLI calls. You can do this in the CLI by using these parameters and commands:</p> <ul> <li> <p>Use the following parameter with each command to specify both the endpoint and its region:</p> <p> <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code> </p> </li> <li> <p>Use the default endpoint, but configure your default region with this command:</p> <p> <code>aws configure set default.region us-east-1</code> </p> </li> <li> <p>Use the following parameter with each command to specify the endpoint:</p> <p> <code>--region us-east-1</code> </p> </li> </ul> <p>For the various SDKs used to call the APIs, see the documentation for the SDK of interest to learn how to direct the requests to a specific endpoint. For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#sts_region">Regions and Endpoints</a> in the <i>AWS General Reference</i>. </p> <p> <b>How examples are presented</b> </p> <p>The JSON returned by the AWS Organizations service as response to your requests is returned as a single long string without line breaks or formatting whitespace. Both line breaks and whitespace are included in the examples in this guide to improve readability. When example input parameters also would result in long strings that would extend beyond the screen, we insert line breaks to enhance readability. You should always submit the input as a single JSON text string.</p> <p> <b>Recording API Requests</b> </p> <p>AWS Organizations supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information collected by AWS CloudTrail, you can determine which requests were successfully made to Organizations, who made the request, when it was made, and so on. For more about AWS Organizations and its support for AWS CloudTrail, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html#orgs_cloudtrail-integration">Logging AWS Organizations Events with AWS CloudTrail</a> in the <i>AWS Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>

## Actions

### AcceptHandshake



```js
amazonaws_organizations.AcceptHandshake({
  "HandshakeId": ""
}, context)
```

#### Input
* input `object`
  * HandshakeId **required** [HandshakeId](#handshakeid)

#### Output
* output [AcceptHandshakeResponse](#accepthandshakeresponse)

### AttachPolicy



```js
amazonaws_organizations.AttachPolicy({
  "PolicyId": "",
  "TargetId": ""
}, context)
```

#### Input
* input `object`
  * PolicyId **required** [PolicyId](#policyid)
  * TargetId **required** [PolicyTargetId](#policytargetid)

#### Output
*Output schema unknown*

### CancelHandshake



```js
amazonaws_organizations.CancelHandshake({
  "HandshakeId": ""
}, context)
```

#### Input
* input `object`
  * HandshakeId **required** [HandshakeId](#handshakeid)

#### Output
* output [CancelHandshakeResponse](#cancelhandshakeresponse)

### CreateAccount



```js
amazonaws_organizations.CreateAccount({
  "Email": "",
  "AccountName": ""
}, context)
```

#### Input
* input `object`
  * AccountName **required** [AccountName](#accountname)
  * Email **required** [Email](#email)
  * IamUserAccessToBilling [IAMUserAccessToBilling](#iamuseraccesstobilling)
  * RoleName [RoleName](#rolename)

#### Output
* output [CreateAccountResponse](#createaccountresponse)

### CreateOrganization



```js
amazonaws_organizations.CreateOrganization({}, context)
```

#### Input
* input `object`
  * FeatureSet [OrganizationFeatureSet](#organizationfeatureset)

#### Output
* output [CreateOrganizationResponse](#createorganizationresponse)

### CreateOrganizationalUnit



```js
amazonaws_organizations.CreateOrganizationalUnit({
  "ParentId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [OrganizationalUnitName](#organizationalunitname)
  * ParentId **required** [ParentId](#parentid)

#### Output
* output [CreateOrganizationalUnitResponse](#createorganizationalunitresponse)

### CreatePolicy



```js
amazonaws_organizations.CreatePolicy({
  "Content": "",
  "Description": "",
  "Name": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * Content **required** [PolicyContent](#policycontent)
  * Description **required** [PolicyDescription](#policydescription)
  * Name **required** [PolicyName](#policyname)
  * Type **required** [PolicyType](#policytype)

#### Output
* output [CreatePolicyResponse](#createpolicyresponse)

### DeclineHandshake



```js
amazonaws_organizations.DeclineHandshake({
  "HandshakeId": ""
}, context)
```

#### Input
* input `object`
  * HandshakeId **required** [HandshakeId](#handshakeid)

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
  "OrganizationalUnitId": ""
}, context)
```

#### Input
* input `object`
  * OrganizationalUnitId **required** [OrganizationalUnitId](#organizationalunitid)

#### Output
*Output schema unknown*

### DeletePolicy



```js
amazonaws_organizations.DeletePolicy({
  "PolicyId": ""
}, context)
```

#### Input
* input `object`
  * PolicyId **required** [PolicyId](#policyid)

#### Output
*Output schema unknown*

### DescribeAccount



```js
amazonaws_organizations.DescribeAccount({
  "AccountId": ""
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)

#### Output
* output [DescribeAccountResponse](#describeaccountresponse)

### DescribeCreateAccountStatus



```js
amazonaws_organizations.DescribeCreateAccountStatus({
  "CreateAccountRequestId": ""
}, context)
```

#### Input
* input `object`
  * CreateAccountRequestId **required** [CreateAccountRequestId](#createaccountrequestid)

#### Output
* output [DescribeCreateAccountStatusResponse](#describecreateaccountstatusresponse)

### DescribeHandshake



```js
amazonaws_organizations.DescribeHandshake({
  "HandshakeId": ""
}, context)
```

#### Input
* input `object`
  * HandshakeId **required** [HandshakeId](#handshakeid)

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
  "OrganizationalUnitId": ""
}, context)
```

#### Input
* input `object`
  * OrganizationalUnitId **required** [OrganizationalUnitId](#organizationalunitid)

#### Output
* output [DescribeOrganizationalUnitResponse](#describeorganizationalunitresponse)

### DescribePolicy



```js
amazonaws_organizations.DescribePolicy({
  "PolicyId": ""
}, context)
```

#### Input
* input `object`
  * PolicyId **required** [PolicyId](#policyid)

#### Output
* output [DescribePolicyResponse](#describepolicyresponse)

### DetachPolicy



```js
amazonaws_organizations.DetachPolicy({
  "PolicyId": "",
  "TargetId": ""
}, context)
```

#### Input
* input `object`
  * PolicyId **required** [PolicyId](#policyid)
  * TargetId **required** [PolicyTargetId](#policytargetid)

#### Output
*Output schema unknown*

### DisableAWSServiceAccess



```js
amazonaws_organizations.DisableAWSServiceAccess({
  "ServicePrincipal": ""
}, context)
```

#### Input
* input `object`
  * ServicePrincipal **required** [ServicePrincipal](#serviceprincipal)

#### Output
*Output schema unknown*

### DisablePolicyType



```js
amazonaws_organizations.DisablePolicyType({
  "RootId": "",
  "PolicyType": ""
}, context)
```

#### Input
* input `object`
  * PolicyType **required** [PolicyType](#policytype)
  * RootId **required** [RootId](#rootid)

#### Output
* output [DisablePolicyTypeResponse](#disablepolicytyperesponse)

### EnableAWSServiceAccess



```js
amazonaws_organizations.EnableAWSServiceAccess({
  "ServicePrincipal": ""
}, context)
```

#### Input
* input `object`
  * ServicePrincipal **required** [ServicePrincipal](#serviceprincipal)

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
  "RootId": "",
  "PolicyType": ""
}, context)
```

#### Input
* input `object`
  * PolicyType **required** [PolicyType](#policytype)
  * RootId **required** [RootId](#rootid)

#### Output
* output [EnablePolicyTypeResponse](#enablepolicytyperesponse)

### InviteAccountToOrganization



```js
amazonaws_organizations.InviteAccountToOrganization({
  "Target": {
    "Id": "",
    "Type": ""
  }
}, context)
```

#### Input
* input `object`
  * Notes [HandshakeNotes](#handshakenotes)
  * Target **required** [HandshakeParty](#handshakeparty)

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
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

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
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListAccountsResponse](#listaccountsresponse)

### ListAccountsForParent



```js
amazonaws_organizations.ListAccountsForParent({
  "ParentId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ParentId **required** [ParentId](#parentid)

#### Output
* output [ListAccountsForParentResponse](#listaccountsforparentresponse)

### ListChildren



```js
amazonaws_organizations.ListChildren({
  "ParentId": "",
  "ChildType": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ChildType **required** [ChildType](#childtype)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ParentId **required** [ParentId](#parentid)

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
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * States [CreateAccountStates](#createaccountstates)

#### Output
* output [ListCreateAccountStatusResponse](#listcreateaccountstatusresponse)

### ListHandshakesForAccount



```js
amazonaws_organizations.ListHandshakesForAccount({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter [HandshakeFilter](#handshakefilter)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

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
  * Filter [HandshakeFilter](#handshakefilter)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListHandshakesForOrganizationResponse](#listhandshakesfororganizationresponse)

### ListOrganizationalUnitsForParent



```js
amazonaws_organizations.ListOrganizationalUnitsForParent({
  "ParentId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ParentId **required** [ParentId](#parentid)

#### Output
* output [ListOrganizationalUnitsForParentResponse](#listorganizationalunitsforparentresponse)

### ListParents



```js
amazonaws_organizations.ListParents({
  "ChildId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ChildId **required** [ChildId](#childid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListParentsResponse](#listparentsresponse)

### ListPolicies



```js
amazonaws_organizations.ListPolicies({
  "Filter": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter **required** [PolicyType](#policytype)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

### ListPoliciesForTarget



```js
amazonaws_organizations.ListPoliciesForTarget({
  "TargetId": "",
  "Filter": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter **required** [PolicyType](#policytype)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * TargetId **required** [PolicyTargetId](#policytargetid)

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
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListRootsResponse](#listrootsresponse)

### ListTargetsForPolicy



```js
amazonaws_organizations.ListTargetsForPolicy({
  "PolicyId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * PolicyId **required** [PolicyId](#policyid)

#### Output
* output [ListTargetsForPolicyResponse](#listtargetsforpolicyresponse)

### MoveAccount



```js
amazonaws_organizations.MoveAccount({
  "AccountId": "",
  "SourceParentId": "",
  "DestinationParentId": ""
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)
  * DestinationParentId **required** [ParentId](#parentid)
  * SourceParentId **required** [ParentId](#parentid)

#### Output
*Output schema unknown*

### RemoveAccountFromOrganization



```js
amazonaws_organizations.RemoveAccountFromOrganization({
  "AccountId": ""
}, context)
```

#### Input
* input `object`
  * AccountId **required** [AccountId](#accountid)

#### Output
*Output schema unknown*

### UpdateOrganizationalUnit



```js
amazonaws_organizations.UpdateOrganizationalUnit({
  "OrganizationalUnitId": ""
}, context)
```

#### Input
* input `object`
  * Name [OrganizationalUnitName](#organizationalunitname)
  * OrganizationalUnitId **required** [OrganizationalUnitId](#organizationalunitid)

#### Output
* output [UpdateOrganizationalUnitResponse](#updateorganizationalunitresponse)

### UpdatePolicy



```js
amazonaws_organizations.UpdatePolicy({
  "PolicyId": ""
}, context)
```

#### Input
* input `object`
  * Content [PolicyContent](#policycontent)
  * Description [PolicyDescription](#policydescription)
  * Name [PolicyName](#policyname)
  * PolicyId **required** [PolicyId](#policyid)

#### Output
* output [UpdatePolicyResponse](#updatepolicyresponse)



## Definitions

### AWSOrganizationsNotInUseException
* AWSOrganizationsNotInUseException `object`: Your account is not a member of an organization. To make this request, you must use the credentials of an account that belongs to an organization.
  * Message [ExceptionMessage](#exceptionmessage)

### AcceptHandshakeRequest
* AcceptHandshakeRequest `object`
  * HandshakeId **required** [HandshakeId](#handshakeid)

### AcceptHandshakeResponse
* AcceptHandshakeResponse `object`
  * Handshake [Handshake](#handshake)

### AccessDeniedException
* AccessDeniedException `object`: You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the <i>IAM User Guide</i>.
  * Message [ExceptionMessage](#exceptionmessage)

### AccessDeniedForDependencyException
* AccessDeniedForDependencyException `object`: The operation you attempted requires you to have the <code>iam:CreateServiceLinkedRole</code> so that Organizations can create the required service-linked role. You do not have that permission.
  * Message [ExceptionMessage](#exceptionmessage)
  * Reason [AccessDeniedForDependencyExceptionReason](#accessdeniedfordependencyexceptionreason)

### AccessDeniedForDependencyExceptionReason
* AccessDeniedForDependencyExceptionReason `string` (values: ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE)

### Account
* Account `object`: Contains information about an AWS account that is a member of an organization.
  * Arn [AccountArn](#accountarn)
  * Email [Email](#email)
  * Id [AccountId](#accountid)
  * JoinedMethod [AccountJoinedMethod](#accountjoinedmethod)
  * JoinedTimestamp [Timestamp](#timestamp)
  * Name [AccountName](#accountname)
  * Status [AccountStatus](#accountstatus)

### AccountArn
* AccountArn `string`

### AccountId
* AccountId `string`

### AccountJoinedMethod
* AccountJoinedMethod `string` (values: INVITED, CREATED)

### AccountName
* AccountName `string`

### AccountNotFoundException
* AccountNotFoundException `object`:  We can't find an AWS account with the AccountId that you specified, or the account whose credentials you used to make this request is not a member of an organization.
  * Message [ExceptionMessage](#exceptionmessage)

### AccountStatus
* AccountStatus `string` (values: ACTIVE, SUSPENDED)

### Accounts
* Accounts `array`
  * items [Account](#account)

### ActionType
* ActionType `string` (values: INVITE, ENABLE_ALL_FEATURES, APPROVE_ALL_FEATURES, ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE)

### AlreadyInOrganizationException
* AlreadyInOrganizationException `object`: This account is already a member of an organization. An account can belong to only one organization at a time.
  * Message [ExceptionMessage](#exceptionmessage)

### AttachPolicyRequest
* AttachPolicyRequest `object`
  * PolicyId **required** [PolicyId](#policyid)
  * TargetId **required** [PolicyTargetId](#policytargetid)

### AwsManagedPolicy
* AwsManagedPolicy `boolean`

### CancelHandshakeRequest
* CancelHandshakeRequest `object`
  * HandshakeId **required** [HandshakeId](#handshakeid)

### CancelHandshakeResponse
* CancelHandshakeResponse `object`
  * Handshake [Handshake](#handshake)

### Child
* Child `object`: Contains a list of child entities, either OUs or accounts.
  * Id [ChildId](#childid)
  * Type [ChildType](#childtype)

### ChildId
* ChildId `string`

### ChildNotFoundException
* ChildNotFoundException `object`: We can't find an organizational unit (OU) or AWS account with the ChildId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

### ChildType
* ChildType `string` (values: ACCOUNT, ORGANIZATIONAL_UNIT)

### Children
* Children `array`
  * items [Child](#child)

### ConcurrentModificationException
* ConcurrentModificationException `object`: The target of the operation is currently being modified by a different request. Try again later.
  * Message [ExceptionMessage](#exceptionmessage)

### ConstraintViolationException
* ConstraintViolationException `object`: <p>Performing this operation violates a minimum or maximum value limit. For example, attempting to removing the last SCP from an OU or root, inviting or creating too many accounts to the organization, or attaching too many policies to an account, OU, or root. This exception includes a reason that contains additional information about the violated limit:</p> <p/> <p>Some of the reasons in the following list might not be applicable to this specific API or operation:</p> <ul> <li> <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number of accounts in an organization. If you need more accounts, contact AWS Support to request an increase in your limit. </p> <p>Or, The number of invitations that you tried to send would cause you to exceed the limit of accounts in your organization. Send fewer invitations, or contact AWS Support to request an increase in the number of accounts.</p> <p> <b>Note</b>: deleted and closed accounts still count toward your limit.</p> <important> <p>If you get receive this exception when running a command immediately after creating the organization, wait one hour and try again. If after an hour it continues to fail with this error, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Customer Support</a>.</p> </important> </li> <li> <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of handshakes you can send in one day.</p> </li> <li> <p>OU_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of organizational units you can have in an organization.</p> </li> <li> <p>OU_DEPTH_LIMIT_EXCEEDED: You attempted to create an organizational unit tree that is too many levels deep.</p> </li> <li> <p>ORGANIZATION_NOT_IN_ALL_FEATURES_MODE: You attempted to perform an operation that requires the organization to be configured to support all features. An organization that supports consolidated billing features only cannot perform this operation.</p> </li> <li> <p>POLICY_NUMBER_LIMIT_EXCEEDED. You attempted to exceed the number of policies that you can have in an organization.</p> </li> <li> <p>MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to exceed the number of policies of a certain type that can be attached to an entity at one time.</p> </li> <li> <p>MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to detach a policy from an entity that would cause the entity to have fewer than the minimum number of policies of a certain type required.</p> </li> <li> <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA: You attempted to remove an account from the organization that does not yet have enough information to exist as a stand-alone account. This account requires you to first agree to the AWS Customer Agreement. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION: You attempted to remove an account from the organization that does not yet have enough information to exist as a stand-alone account. This account requires you to first complete phone verification. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To create an organization with this account, you first must associate a payment instrument, such as a credit card, with the account. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To complete this operation with this member account, you first must associate a payment instrument, such as a credit card, with the account. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of accounts that you can create in one day.</p> </li> <li> <p>MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE: To create an account in this organization, you first must migrate the organization's master account to the marketplace that corresponds to the master account's address. For example, accounts with India addresses must be associated with the AISPL marketplace. All accounts in an organization must be associated with the same marketplace.</p> </li> <li> <p>MASTER_ACCOUNT_MISSING_CONTACT_INFO: To complete this operation, you must first provide contact a valid address and phone number for the master account. Then try the operation again.</p> </li> </ul>
  * Message [ExceptionMessage](#exceptionmessage)
  * Reason [ConstraintViolationExceptionReason](#constraintviolationexceptionreason)

### ConstraintViolationExceptionReason
* ConstraintViolationExceptionReason `string` (values: ACCOUNT_NUMBER_LIMIT_EXCEEDED, HANDSHAKE_RATE_LIMIT_EXCEEDED, OU_NUMBER_LIMIT_EXCEEDED, OU_DEPTH_LIMIT_EXCEEDED, POLICY_NUMBER_LIMIT_EXCEEDED, MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED, MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED, ACCOUNT_CANNOT_LEAVE_ORGANIZATION, ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA, ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION, MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED, MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED, ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED, MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE, MASTER_ACCOUNT_MISSING_CONTACT_INFO, ORGANIZATION_NOT_IN_ALL_FEATURES_MODE)

### CreateAccountFailureReason
* CreateAccountFailureReason `string` (values: ACCOUNT_LIMIT_EXCEEDED, EMAIL_ALREADY_EXISTS, INVALID_ADDRESS, INVALID_EMAIL, CONCURRENT_ACCOUNT_MODIFICATION, INTERNAL_FAILURE)

### CreateAccountRequest
* CreateAccountRequest `object`
  * AccountName **required** [AccountName](#accountname)
  * Email **required** [Email](#email)
  * IamUserAccessToBilling [IAMUserAccessToBilling](#iamuseraccesstobilling)
  * RoleName [RoleName](#rolename)

### CreateAccountRequestId
* CreateAccountRequestId `string`

### CreateAccountResponse
* CreateAccountResponse `object`
  * CreateAccountStatus [CreateAccountStatus](#createaccountstatus)

### CreateAccountState
* CreateAccountState `string` (values: IN_PROGRESS, SUCCEEDED, FAILED)

### CreateAccountStates
* CreateAccountStates `array`
  * items [CreateAccountState](#createaccountstate)

### CreateAccountStatus
* CreateAccountStatus `object`: Contains the status about a <a>CreateAccount</a> request to create an AWS account in an organization.
  * AccountId [AccountId](#accountid)
  * AccountName [AccountName](#accountname)
  * CompletedTimestamp [Timestamp](#timestamp)
  * FailureReason [CreateAccountFailureReason](#createaccountfailurereason)
  * Id [CreateAccountRequestId](#createaccountrequestid)
  * RequestedTimestamp [Timestamp](#timestamp)
  * State [CreateAccountState](#createaccountstate)

### CreateAccountStatusNotFoundException
* CreateAccountStatusNotFoundException `object`: We can't find an create account request with the CreateAccountRequestId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

### CreateAccountStatuses
* CreateAccountStatuses `array`
  * items [CreateAccountStatus](#createaccountstatus)

### CreateOrganizationRequest
* CreateOrganizationRequest `object`
  * FeatureSet [OrganizationFeatureSet](#organizationfeatureset)

### CreateOrganizationResponse
* CreateOrganizationResponse `object`
  * Organization [Organization](#organization)

### CreateOrganizationalUnitRequest
* CreateOrganizationalUnitRequest `object`
  * Name **required** [OrganizationalUnitName](#organizationalunitname)
  * ParentId **required** [ParentId](#parentid)

### CreateOrganizationalUnitResponse
* CreateOrganizationalUnitResponse `object`
  * OrganizationalUnit [OrganizationalUnit](#organizationalunit)

### CreatePolicyRequest
* CreatePolicyRequest `object`
  * Content **required** [PolicyContent](#policycontent)
  * Description **required** [PolicyDescription](#policydescription)
  * Name **required** [PolicyName](#policyname)
  * Type **required** [PolicyType](#policytype)

### CreatePolicyResponse
* CreatePolicyResponse `object`
  * Policy [Policy](#policy)

### DeclineHandshakeRequest
* DeclineHandshakeRequest `object`
  * HandshakeId **required** [HandshakeId](#handshakeid)

### DeclineHandshakeResponse
* DeclineHandshakeResponse `object`
  * Handshake [Handshake](#handshake)

### DeleteOrganizationalUnitRequest
* DeleteOrganizationalUnitRequest `object`
  * OrganizationalUnitId **required** [OrganizationalUnitId](#organizationalunitid)

### DeletePolicyRequest
* DeletePolicyRequest `object`
  * PolicyId **required** [PolicyId](#policyid)

### DescribeAccountRequest
* DescribeAccountRequest `object`
  * AccountId **required** [AccountId](#accountid)

### DescribeAccountResponse
* DescribeAccountResponse `object`
  * Account [Account](#account)

### DescribeCreateAccountStatusRequest
* DescribeCreateAccountStatusRequest `object`
  * CreateAccountRequestId **required** [CreateAccountRequestId](#createaccountrequestid)

### DescribeCreateAccountStatusResponse
* DescribeCreateAccountStatusResponse `object`
  * CreateAccountStatus [CreateAccountStatus](#createaccountstatus)

### DescribeHandshakeRequest
* DescribeHandshakeRequest `object`
  * HandshakeId **required** [HandshakeId](#handshakeid)

### DescribeHandshakeResponse
* DescribeHandshakeResponse `object`
  * Handshake [Handshake](#handshake)

### DescribeOrganizationResponse
* DescribeOrganizationResponse `object`
  * Organization [Organization](#organization)

### DescribeOrganizationalUnitRequest
* DescribeOrganizationalUnitRequest `object`
  * OrganizationalUnitId **required** [OrganizationalUnitId](#organizationalunitid)

### DescribeOrganizationalUnitResponse
* DescribeOrganizationalUnitResponse `object`
  * OrganizationalUnit [OrganizationalUnit](#organizationalunit)

### DescribePolicyRequest
* DescribePolicyRequest `object`
  * PolicyId **required** [PolicyId](#policyid)

### DescribePolicyResponse
* DescribePolicyResponse `object`
  * Policy [Policy](#policy)

### DestinationParentNotFoundException
* DestinationParentNotFoundException `object`: We can't find the destination container (a root or OU) with the ParentId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

### DetachPolicyRequest
* DetachPolicyRequest `object`
  * PolicyId **required** [PolicyId](#policyid)
  * TargetId **required** [PolicyTargetId](#policytargetid)

### DisableAWSServiceAccessRequest
* DisableAWSServiceAccessRequest `object`
  * ServicePrincipal **required** [ServicePrincipal](#serviceprincipal)

### DisablePolicyTypeRequest
* DisablePolicyTypeRequest `object`
  * PolicyType **required** [PolicyType](#policytype)
  * RootId **required** [RootId](#rootid)

### DisablePolicyTypeResponse
* DisablePolicyTypeResponse `object`
  * Root [Root](#root)

### DuplicateAccountException
* DuplicateAccountException `object`: That account is already present in the specified destination.
  * Message [ExceptionMessage](#exceptionmessage)

### DuplicateHandshakeException
* DuplicateHandshakeException `object`: A handshake with the same action and target already exists. For example, if you invited an account to join your organization, the invited account might already have a pending invitation from this organization. If you intend to resend an invitation to an account, ensure that existing handshakes that might be considered duplicates are canceled or declined.
  * Message [ExceptionMessage](#exceptionmessage)

### DuplicateOrganizationalUnitException
* DuplicateOrganizationalUnitException `object`: An organizational unit (OU) with the same name already exists.
  * Message [ExceptionMessage](#exceptionmessage)

### DuplicatePolicyAttachmentException
* DuplicatePolicyAttachmentException `object`: The selected policy is already attached to the specified target.
  * Message [ExceptionMessage](#exceptionmessage)

### DuplicatePolicyException
* DuplicatePolicyException `object`: A policy with the same name already exists.
  * Message [ExceptionMessage](#exceptionmessage)

### Email
* Email `string`

### EnableAWSServiceAccessRequest
* EnableAWSServiceAccessRequest `object`
  * ServicePrincipal **required** [ServicePrincipal](#serviceprincipal)

### EnableAllFeaturesRequest
* EnableAllFeaturesRequest `object`

### EnableAllFeaturesResponse
* EnableAllFeaturesResponse `object`
  * Handshake [Handshake](#handshake)

### EnablePolicyTypeRequest
* EnablePolicyTypeRequest `object`
  * PolicyType **required** [PolicyType](#policytype)
  * RootId **required** [RootId](#rootid)

### EnablePolicyTypeResponse
* EnablePolicyTypeResponse `object`
  * Root [Root](#root)

### EnabledServicePrincipal
* EnabledServicePrincipal `object`: A structure that contains details of a service principal that is enabled to integrate with AWS Organizations.
  * DateEnabled [Timestamp](#timestamp)
  * ServicePrincipal [ServicePrincipal](#serviceprincipal)

### EnabledServicePrincipals
* EnabledServicePrincipals `array`
  * items [EnabledServicePrincipal](#enabledserviceprincipal)

### ExceptionMessage
* ExceptionMessage `string`

### ExceptionType
* ExceptionType `string`

### FinalizingOrganizationException
* FinalizingOrganizationException `object`: AWS Organizations could not perform the operation because your organization has not finished initializing. This can take up to an hour. Try again later. If after one hour you continue to receive this error, contact <a href="https://console.aws.amazon.com/support/home#/"> AWS Customer Support</a>.
  * Message [ExceptionMessage](#exceptionmessage)

### GenericArn
* GenericArn `string`

### Handshake
* Handshake `object`: <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p>
  * Action [ActionType](#actiontype)
  * Arn [HandshakeArn](#handshakearn)
  * ExpirationTimestamp [Timestamp](#timestamp)
  * Id [HandshakeId](#handshakeid)
  * Parties [HandshakeParties](#handshakeparties)
  * RequestedTimestamp [Timestamp](#timestamp)
  * Resources [HandshakeResources](#handshakeresources)
  * State [HandshakeState](#handshakestate)

### HandshakeAlreadyInStateException
* HandshakeAlreadyInStateException `object`: The specified handshake is already in the requested state. For example, you can't accept a handshake that was already accepted.
  * Message [ExceptionMessage](#exceptionmessage)

### HandshakeArn
* HandshakeArn `string`

### HandshakeConstraintViolationException
* HandshakeConstraintViolationException `object`: <p>The requested operation would violate the constraint identified in the reason code.</p> <note> <p>Some of the reasons in the following list might not be applicable to this specific API or operation:</p> </note> <ul> <li> <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number of accounts in an organization. <b>Note</b>: deleted and closed accounts still count toward your limit.</p> <important> <p>If you get this exception immediately after creating the organization, wait one hour and try again. If after an hour it continues to fail with this error, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Customer Support</a>.</p> </important> </li> <li> <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of handshakes you can send in one day.</p> </li> <li> <p>ALREADY_IN_AN_ORGANIZATION: The handshake request is invalid because the invited account is already a member of an organization.</p> </li> <li> <p>ORGANIZATION_ALREADY_HAS_ALL_FEATURES: The handshake request is invalid because the organization has already enabled all features.</p> </li> <li> <p>INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES: You cannot issue new invitations to join an organization while it is in the process of enabling all features. You can resume inviting accounts after you finalize the process when all accounts have agreed to the change.</p> </li> <li> <p>PAYMENT_INSTRUMENT_REQUIRED: You cannot complete the operation with an account that does not have a payment instrument, such as a credit card, associated with it.</p> </li> <li> <p>ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD: The request failed because the account is from a different marketplace than the accounts in the organization. For example, accounts with India addresses must be associated with the AISPL marketplace. All accounts in an organization must be from the same marketplace.</p> </li> <li> <p>ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED: You attempted to change the membership of an account too quickly after its previous change.</p> </li> </ul>
  * Message [ExceptionMessage](#exceptionmessage)
  * Reason [HandshakeConstraintViolationExceptionReason](#handshakeconstraintviolationexceptionreason)

### HandshakeConstraintViolationExceptionReason
* HandshakeConstraintViolationExceptionReason `string` (values: ACCOUNT_NUMBER_LIMIT_EXCEEDED, HANDSHAKE_RATE_LIMIT_EXCEEDED, ALREADY_IN_AN_ORGANIZATION, ORGANIZATION_ALREADY_HAS_ALL_FEATURES, INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES, PAYMENT_INSTRUMENT_REQUIRED, ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD, ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED)

### HandshakeFilter
* HandshakeFilter `object`: Specifies the criteria that are used to select the handshakes for the operation.
  * ActionType [ActionType](#actiontype)
  * ParentHandshakeId [HandshakeId](#handshakeid)

### HandshakeId
* HandshakeId `string`

### HandshakeNotFoundException
* HandshakeNotFoundException `object`: We can't find a handshake with the HandshakeId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

### HandshakeNotes
* HandshakeNotes `string`

### HandshakeParties
* HandshakeParties `array`
  * items [HandshakeParty](#handshakeparty)

### HandshakeParty
* HandshakeParty `object`: Identifies a participant in a handshake.
  * Id **required** [HandshakePartyId](#handshakepartyid)
  * Type **required** [HandshakePartyType](#handshakepartytype)

### HandshakePartyId
* HandshakePartyId `string`

### HandshakePartyType
* HandshakePartyType `string` (values: ACCOUNT, ORGANIZATION, EMAIL)

### HandshakeResource
* HandshakeResource `object`: Contains additional data that is needed to process a handshake.
  * Resources [HandshakeResources](#handshakeresources)
  * Type [HandshakeResourceType](#handshakeresourcetype)
  * Value [HandshakeResourceValue](#handshakeresourcevalue)

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
* InvalidHandshakeTransitionException `object`: You can't perform the operation on the handshake in its current state. For example, you can't cancel a handshake that was already accepted, or accept a handshake that was already declined.
  * Message [ExceptionMessage](#exceptionmessage)

### InvalidInputException
* InvalidInputException `object`: <p>The requested operation failed because you provided invalid values for one or more of the request parameters. This exception includes a reason that contains additional information about the violated limit:</p> <note> <p>Some of the reasons in the following list might not be applicable to this specific API or operation:</p> </note> <ul> <li> <p>IMMUTABLE_POLICY: You specified a policy that is managed by AWS and cannot be modified.</p> </li> <li> <p>INPUT_REQUIRED: You must include a value for all required parameters.</p> </li> <li> <p>INVALID_ENUM: You specified a value that is not valid for that parameter.</p> </li> <li> <p>INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid characters.</p> </li> <li> <p>INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least one invalid value.</p> </li> <li> <p>INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account, organization, or email) as a party.</p> </li> <li> <p>INVALID_PAGINATION_TOKEN: Get the value for the NextToken parameter from the response to a previous call of the operation.</p> </li> <li> <p>INVALID_PATTERN: You provided a value that doesn't match the required pattern.</p> </li> <li> <p>INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match the required pattern.</p> </li> <li> <p>INVALID_ROLE_NAME: You provided a role name that is not valid. A role name can’t begin with the reserved prefix 'AWSServiceRoleFor'.</p> </li> <li> <p>INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid ARN for the organization.</p> </li> <li> <p>INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID. </p> </li> <li> <p>MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the operation.</p> </li> <li> <p>MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than allowed.</p> </li> <li> <p>MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value than allowed.</p> </li> <li> <p>MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than allowed.</p> </li> <li> <p>MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value than allowed.</p> </li> <li> <p>MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between entities in the same root.</p> </li> </ul>
  * Message [ExceptionMessage](#exceptionmessage)
  * Reason [InvalidInputExceptionReason](#invalidinputexceptionreason)

### InvalidInputExceptionReason
* InvalidInputExceptionReason `string` (values: INVALID_PARTY_TYPE_TARGET, INVALID_SYNTAX_ORGANIZATION_ARN, INVALID_SYNTAX_POLICY_ID, INVALID_ENUM, INVALID_LIST_MEMBER, MAX_LENGTH_EXCEEDED, MAX_VALUE_EXCEEDED, MIN_LENGTH_EXCEEDED, MIN_VALUE_EXCEEDED, IMMUTABLE_POLICY, INVALID_PATTERN, INVALID_PATTERN_TARGET_ID, INPUT_REQUIRED, INVALID_NEXT_TOKEN, MAX_LIMIT_EXCEEDED_FILTER, MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS, INVALID_FULL_NAME_TARGET, UNRECOGNIZED_SERVICE_PRINCIPAL, INVALID_ROLE_NAME)

### InviteAccountToOrganizationRequest
* InviteAccountToOrganizationRequest `object`
  * Notes [HandshakeNotes](#handshakenotes)
  * Target **required** [HandshakeParty](#handshakeparty)

### InviteAccountToOrganizationResponse
* InviteAccountToOrganizationResponse `object`
  * Handshake [Handshake](#handshake)

### ListAWSServiceAccessForOrganizationRequest
* ListAWSServiceAccessForOrganizationRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListAWSServiceAccessForOrganizationResponse
* ListAWSServiceAccessForOrganizationResponse `object`
  * EnabledServicePrincipals [EnabledServicePrincipals](#enabledserviceprincipals)
  * NextToken [NextToken](#nexttoken)

### ListAccountsForParentRequest
* ListAccountsForParentRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ParentId **required** [ParentId](#parentid)

### ListAccountsForParentResponse
* ListAccountsForParentResponse `object`
  * Accounts [Accounts](#accounts)
  * NextToken [NextToken](#nexttoken)

### ListAccountsRequest
* ListAccountsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListAccountsResponse
* ListAccountsResponse `object`
  * Accounts [Accounts](#accounts)
  * NextToken [NextToken](#nexttoken)

### ListChildrenRequest
* ListChildrenRequest `object`
  * ChildType **required** [ChildType](#childtype)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ParentId **required** [ParentId](#parentid)

### ListChildrenResponse
* ListChildrenResponse `object`
  * Children [Children](#children)
  * NextToken [NextToken](#nexttoken)

### ListCreateAccountStatusRequest
* ListCreateAccountStatusRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * States [CreateAccountStates](#createaccountstates)

### ListCreateAccountStatusResponse
* ListCreateAccountStatusResponse `object`
  * CreateAccountStatuses [CreateAccountStatuses](#createaccountstatuses)
  * NextToken [NextToken](#nexttoken)

### ListHandshakesForAccountRequest
* ListHandshakesForAccountRequest `object`
  * Filter [HandshakeFilter](#handshakefilter)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListHandshakesForAccountResponse
* ListHandshakesForAccountResponse `object`
  * Handshakes [Handshakes](#handshakes)
  * NextToken [NextToken](#nexttoken)

### ListHandshakesForOrganizationRequest
* ListHandshakesForOrganizationRequest `object`
  * Filter [HandshakeFilter](#handshakefilter)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListHandshakesForOrganizationResponse
* ListHandshakesForOrganizationResponse `object`
  * Handshakes [Handshakes](#handshakes)
  * NextToken [NextToken](#nexttoken)

### ListOrganizationalUnitsForParentRequest
* ListOrganizationalUnitsForParentRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ParentId **required** [ParentId](#parentid)

### ListOrganizationalUnitsForParentResponse
* ListOrganizationalUnitsForParentResponse `object`
  * NextToken [NextToken](#nexttoken)
  * OrganizationalUnits [OrganizationalUnits](#organizationalunits)

### ListParentsRequest
* ListParentsRequest `object`
  * ChildId **required** [ChildId](#childid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListParentsResponse
* ListParentsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Parents [Parents](#parents)

### ListPoliciesForTargetRequest
* ListPoliciesForTargetRequest `object`
  * Filter **required** [PolicyType](#policytype)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * TargetId **required** [PolicyTargetId](#policytargetid)

### ListPoliciesForTargetResponse
* ListPoliciesForTargetResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Policies [Policies](#policies)

### ListPoliciesRequest
* ListPoliciesRequest `object`
  * Filter **required** [PolicyType](#policytype)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListPoliciesResponse
* ListPoliciesResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Policies [Policies](#policies)

### ListRootsRequest
* ListRootsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListRootsResponse
* ListRootsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Roots [Roots](#roots)

### ListTargetsForPolicyRequest
* ListTargetsForPolicyRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * PolicyId **required** [PolicyId](#policyid)

### ListTargetsForPolicyResponse
* ListTargetsForPolicyResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Targets [PolicyTargets](#policytargets)

### MalformedPolicyDocumentException
* MalformedPolicyDocumentException `object`: The provided policy document does not meet the requirements of the specified policy type. For example, the syntax might be incorrect. For details about service control policy syntax, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html">Service Control Policy Syntax</a> in the <i>AWS Organizations User Guide</i>.
  * Message [ExceptionMessage](#exceptionmessage)

### MasterCannotLeaveOrganizationException
* MasterCannotLeaveOrganizationException `object`: You can't remove a master account from an organization. If you want the master account to become a member account in another organization, you must first delete the current organization of the master account.
  * Message [ExceptionMessage](#exceptionmessage)

### MaxResults
* MaxResults `integer`

### MoveAccountRequest
* MoveAccountRequest `object`
  * AccountId **required** [AccountId](#accountid)
  * DestinationParentId **required** [ParentId](#parentid)
  * SourceParentId **required** [ParentId](#parentid)

### NextToken
* NextToken `string`

### Organization
* Organization `object`: Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .
  * Arn [OrganizationArn](#organizationarn)
  * AvailablePolicyTypes [PolicyTypes](#policytypes)
  * FeatureSet [OrganizationFeatureSet](#organizationfeatureset)
  * Id [OrganizationId](#organizationid)
  * MasterAccountArn [AccountArn](#accountarn)
  * MasterAccountEmail [Email](#email)
  * MasterAccountId [AccountId](#accountid)

### OrganizationArn
* OrganizationArn `string`

### OrganizationFeatureSet
* OrganizationFeatureSet `string` (values: ALL, CONSOLIDATED_BILLING)

### OrganizationId
* OrganizationId `string`

### OrganizationNotEmptyException
* OrganizationNotEmptyException `object`: The organization isn't empty. To delete an organization, you must first remove all accounts except the master account, delete all organizational units (OUs), and delete all policies.
  * Message [ExceptionMessage](#exceptionmessage)

### OrganizationalUnit
* OrganizationalUnit `object`: Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.
  * Arn [OrganizationalUnitArn](#organizationalunitarn)
  * Id [OrganizationalUnitId](#organizationalunitid)
  * Name [OrganizationalUnitName](#organizationalunitname)

### OrganizationalUnitArn
* OrganizationalUnitArn `string`

### OrganizationalUnitId
* OrganizationalUnitId `string`

### OrganizationalUnitName
* OrganizationalUnitName `string`

### OrganizationalUnitNotEmptyException
* OrganizationalUnitNotEmptyException `object`: The specified organizational unit (OU) is not empty. Move all accounts to another root or to other OUs, remove all child OUs, and then try the operation again.
  * Message [ExceptionMessage](#exceptionmessage)

### OrganizationalUnitNotFoundException
* OrganizationalUnitNotFoundException `object`: We can't find an organizational unit (OU) with the OrganizationalUnitId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

### OrganizationalUnits
* OrganizationalUnits `array`
  * items [OrganizationalUnit](#organizationalunit)

### Parent
* Parent `object`: Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.
  * Id [ParentId](#parentid)
  * Type [ParentType](#parenttype)

### ParentId
* ParentId `string`

### ParentNotFoundException
* ParentNotFoundException `object`: We can't find a root or organizational unit (OU) with the ParentId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

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
  * Content [PolicyContent](#policycontent)
  * PolicySummary [PolicySummary](#policysummary)

### PolicyArn
* PolicyArn `string`

### PolicyContent
* PolicyContent `string`

### PolicyDescription
* PolicyDescription `string`

### PolicyId
* PolicyId `string`

### PolicyInUseException
* PolicyInUseException `object`: The policy is attached to one or more entities. You must detach it from all roots, organizational units (OUs), and accounts before performing this operation.
  * Message [ExceptionMessage](#exceptionmessage)

### PolicyName
* PolicyName `string`

### PolicyNotAttachedException
* PolicyNotAttachedException `object`: The policy isn't attached to the specified target in the specified root.
  * Message [ExceptionMessage](#exceptionmessage)

### PolicyNotFoundException
* PolicyNotFoundException `object`: We can't find a policy with the PolicyId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

### PolicySummary
* PolicySummary `object`: Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.
  * Arn [PolicyArn](#policyarn)
  * AwsManaged [AwsManagedPolicy](#awsmanagedpolicy)
  * Description [PolicyDescription](#policydescription)
  * Id [PolicyId](#policyid)
  * Name [PolicyName](#policyname)
  * Type [PolicyType](#policytype)

### PolicyTargetId
* PolicyTargetId `string`

### PolicyTargetSummary
* PolicyTargetSummary `object`: Contains information about a root, OU, or account that a policy is attached to.
  * Arn [GenericArn](#genericarn)
  * Name [TargetName](#targetname)
  * TargetId [PolicyTargetId](#policytargetid)
  * Type [TargetType](#targettype)

### PolicyTargets
* PolicyTargets `array`
  * items [PolicyTargetSummary](#policytargetsummary)

### PolicyType
* PolicyType `string` (values: SERVICE_CONTROL_POLICY)

### PolicyTypeAlreadyEnabledException
* PolicyTypeAlreadyEnabledException `object`: The specified policy type is already enabled in the specified root.
  * Message [ExceptionMessage](#exceptionmessage)

### PolicyTypeNotAvailableForOrganizationException
* PolicyTypeNotAvailableForOrganizationException `object`: You can't use the specified policy type with the feature set currently enabled for this organization. For example, you can enable service control policies (SCPs) only after you enable all features in the organization. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html#enable_policies_on_root">Enabling and Disabling a Policy Type on a Root</a> in the <i>AWS Organizations User Guide</i>.
  * Message [ExceptionMessage](#exceptionmessage)

### PolicyTypeNotEnabledException
* PolicyTypeNotEnabledException `object`: The specified policy type is not currently enabled in this root. You cannot attach policies of the specified type to entities in a root until you enable that type in the root. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide</i>.
  * Message [ExceptionMessage](#exceptionmessage)

### PolicyTypeStatus
* PolicyTypeStatus `string` (values: ENABLED, PENDING_ENABLE, PENDING_DISABLE)

### PolicyTypeSummary
* PolicyTypeSummary `object`: Contains information about a policy type and its status in the associated root.
  * Status [PolicyTypeStatus](#policytypestatus)
  * Type [PolicyType](#policytype)

### PolicyTypes
* PolicyTypes `array`
  * items [PolicyTypeSummary](#policytypesummary)

### RemoveAccountFromOrganizationRequest
* RemoveAccountFromOrganizationRequest `object`
  * AccountId **required** [AccountId](#accountid)

### RoleName
* RoleName `string`

### Root
* Root `object`: Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. Every root contains every AWS account in the organization. Each root enables the accounts to be organized in a different way and to have different policy types enabled for use in that root.
  * Arn [RootArn](#rootarn)
  * Id [RootId](#rootid)
  * Name [RootName](#rootname)
  * PolicyTypes [PolicyTypes](#policytypes)

### RootArn
* RootArn `string`

### RootId
* RootId `string`

### RootName
* RootName `string`

### RootNotFoundException
* RootNotFoundException `object`: We can't find a root with the RootId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

### Roots
* Roots `array`
  * items [Root](#root)

### ServiceException
* ServiceException `object`: AWS Organizations can't complete your request because of an internal service error. Try again later.
  * Message [ExceptionMessage](#exceptionmessage)

### ServicePrincipal
* ServicePrincipal `string`

### SourceParentNotFoundException
* SourceParentNotFoundException `object`: We can't find a source root or OU with the ParentId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

### TargetName
* TargetName `string`

### TargetNotFoundException
* TargetNotFoundException `object`: We can't find a root, OU, or account with the TargetId that you specified.
  * Message [ExceptionMessage](#exceptionmessage)

### TargetType
* TargetType `string` (values: ACCOUNT, ORGANIZATIONAL_UNIT, ROOT)

### Timestamp
* Timestamp `string`

### TooManyRequestsException
* TooManyRequestsException `object`: You've sent too many requests in too short a period of time. The limit helps protect against denial-of-service attacks. Try again later.
  * Message [ExceptionMessage](#exceptionmessage)
  * Type [ExceptionType](#exceptiontype)

### UpdateOrganizationalUnitRequest
* UpdateOrganizationalUnitRequest `object`
  * Name [OrganizationalUnitName](#organizationalunitname)
  * OrganizationalUnitId **required** [OrganizationalUnitId](#organizationalunitid)

### UpdateOrganizationalUnitResponse
* UpdateOrganizationalUnitResponse `object`
  * OrganizationalUnit [OrganizationalUnit](#organizationalunit)

### UpdatePolicyRequest
* UpdatePolicyRequest `object`
  * Content [PolicyContent](#policycontent)
  * Description [PolicyDescription](#policydescription)
  * Name [PolicyName](#policyname)
  * PolicyId **required** [PolicyId](#policyid)

### UpdatePolicyResponse
* UpdatePolicyResponse `object`
  * Policy [Policy](#policy)


