# @datafire/amazonaws_iam

Client library for AWS Identity and Access Management

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_iam
```

```js
let datafire = require('datafire');
let amazonaws_iam = require('@datafire/amazonaws_iam').actions;
let context = new datafire.Context();

amazonaws_iam.AddClientIDToOpenIDConnectProvider({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Identity and Access Management</fullname> <p>AWS Identity and Access Management (IAM) is a web service that you can use to manage users and user permissions under your AWS account. This guide provides descriptions of IAM actions that you can call programmatically. For general information about IAM, see <a href="http://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a>. For the user guide for IAM, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/">Using IAM</a>. </p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to IAM and AWS. For example, the SDKs take care of tasks such as cryptographically signing requests (see below), managing errors, and retrying requests automatically. For information about the AWS SDKs, including how to download and install them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a> page. </p> </note> <p>We recommend that you use the AWS SDKs to make programmatic API calls to IAM. However, you can also use the IAM Query API to make direct calls to the IAM web service. To learn more about the IAM Query API, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>Using IAM</i> guide. IAM supports GET and POST requests for all actions. That is, the API does not require you to use GET for some actions and POST for others. However, GET requests are subject to the limitation size of a URL. Therefore, for operations that require larger sizes, use a POST request. </p> <p> <b>Signing Requests</b> </p> <p>Requests must be signed using an access key ID and a secret access key. We strongly recommend that you do not use your AWS account access key ID and secret access key for everyday work with IAM. You can use the access key ID and secret access key for an IAM user or you can use the AWS Security Token Service to generate temporary security credentials and use those to sign requests.</p> <p>To sign requests, we recommend that you use <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you have an existing application that uses Signature Version 2, you do not have to update it to use Signature Version 4. However, some operations now require Signature Version 4. The documentation for operations that require version 4 indicate this requirement. </p> <p> <b>Additional Resources</b> </p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS Security Credentials</a>. This topic provides general information about the types of credentials used for accessing AWS. </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/IAMBestPractices.html">IAM Best Practices</a>. This topic presents a list of suggestions for using the IAM service to help secure your AWS resources. </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API Requests</a>. This set of topics walk you through the process of signing a request using an access key ID and secret access key. </p> </li> </ul>

## Actions
### AddClientIDToOpenIDConnectProvider



```js
amazonaws_iam.AddClientIDToOpenIDConnectProvider({}, context)
```

#### Parameters

### AddRoleToInstanceProfile



```js
amazonaws_iam.AddRoleToInstanceProfile({}, context)
```

#### Parameters

### AddUserToGroup



```js
amazonaws_iam.AddUserToGroup({}, context)
```

#### Parameters

### AttachGroupPolicy



```js
amazonaws_iam.AttachGroupPolicy({}, context)
```

#### Parameters

### AttachRolePolicy



```js
amazonaws_iam.AttachRolePolicy({}, context)
```

#### Parameters

### AttachUserPolicy



```js
amazonaws_iam.AttachUserPolicy({}, context)
```

#### Parameters

### ChangePassword



```js
amazonaws_iam.ChangePassword({}, context)
```

#### Parameters

### CreateAccessKey



```js
amazonaws_iam.CreateAccessKey({}, context)
```

#### Parameters

### CreateAccountAlias



```js
amazonaws_iam.CreateAccountAlias({}, context)
```

#### Parameters

### CreateGroup



```js
amazonaws_iam.CreateGroup({}, context)
```

#### Parameters

### CreateInstanceProfile



```js
amazonaws_iam.CreateInstanceProfile({}, context)
```

#### Parameters

### CreateLoginProfile



```js
amazonaws_iam.CreateLoginProfile({}, context)
```

#### Parameters

### CreateOpenIDConnectProvider



```js
amazonaws_iam.CreateOpenIDConnectProvider({}, context)
```

#### Parameters

### CreatePolicy



```js
amazonaws_iam.CreatePolicy({}, context)
```

#### Parameters

### CreatePolicyVersion



```js
amazonaws_iam.CreatePolicyVersion({}, context)
```

#### Parameters

### CreateRole



```js
amazonaws_iam.CreateRole({}, context)
```

#### Parameters

### CreateSAMLProvider



```js
amazonaws_iam.CreateSAMLProvider({}, context)
```

#### Parameters

### CreateServiceLinkedRole



```js
amazonaws_iam.CreateServiceLinkedRole({}, context)
```

#### Parameters

### CreateServiceSpecificCredential



```js
amazonaws_iam.CreateServiceSpecificCredential({}, context)
```

#### Parameters

### CreateUser



```js
amazonaws_iam.CreateUser({}, context)
```

#### Parameters

### CreateVirtualMFADevice



```js
amazonaws_iam.CreateVirtualMFADevice({}, context)
```

#### Parameters

### DeactivateMFADevice



```js
amazonaws_iam.DeactivateMFADevice({}, context)
```

#### Parameters

### DeleteAccessKey



```js
amazonaws_iam.DeleteAccessKey({}, context)
```

#### Parameters

### DeleteAccountAlias



```js
amazonaws_iam.DeleteAccountAlias({}, context)
```

#### Parameters

### DeleteAccountPasswordPolicy



```js
amazonaws_iam.DeleteAccountPasswordPolicy({}, context)
```

#### Parameters

### DeleteGroup



```js
amazonaws_iam.DeleteGroup({}, context)
```

#### Parameters

### DeleteGroupPolicy



```js
amazonaws_iam.DeleteGroupPolicy({}, context)
```

#### Parameters

### DeleteInstanceProfile



```js
amazonaws_iam.DeleteInstanceProfile({}, context)
```

#### Parameters

### DeleteLoginProfile



```js
amazonaws_iam.DeleteLoginProfile({}, context)
```

#### Parameters

### DeleteOpenIDConnectProvider



```js
amazonaws_iam.DeleteOpenIDConnectProvider({}, context)
```

#### Parameters

### DeletePolicy



```js
amazonaws_iam.DeletePolicy({}, context)
```

#### Parameters

### DeletePolicyVersion



```js
amazonaws_iam.DeletePolicyVersion({}, context)
```

#### Parameters

### DeleteRole



```js
amazonaws_iam.DeleteRole({}, context)
```

#### Parameters

### DeleteRolePolicy



```js
amazonaws_iam.DeleteRolePolicy({}, context)
```

#### Parameters

### DeleteSAMLProvider



```js
amazonaws_iam.DeleteSAMLProvider({}, context)
```

#### Parameters

### DeleteSSHPublicKey



```js
amazonaws_iam.DeleteSSHPublicKey({}, context)
```

#### Parameters

### DeleteServerCertificate



```js
amazonaws_iam.DeleteServerCertificate({}, context)
```

#### Parameters

### DeleteServiceSpecificCredential



```js
amazonaws_iam.DeleteServiceSpecificCredential({}, context)
```

#### Parameters

### DeleteSigningCertificate



```js
amazonaws_iam.DeleteSigningCertificate({}, context)
```

#### Parameters

### DeleteUser



```js
amazonaws_iam.DeleteUser({}, context)
```

#### Parameters

### DeleteUserPolicy



```js
amazonaws_iam.DeleteUserPolicy({}, context)
```

#### Parameters

### DeleteVirtualMFADevice



```js
amazonaws_iam.DeleteVirtualMFADevice({}, context)
```

#### Parameters

### DetachGroupPolicy



```js
amazonaws_iam.DetachGroupPolicy({}, context)
```

#### Parameters

### DetachRolePolicy



```js
amazonaws_iam.DetachRolePolicy({}, context)
```

#### Parameters

### DetachUserPolicy



```js
amazonaws_iam.DetachUserPolicy({}, context)
```

#### Parameters

### EnableMFADevice



```js
amazonaws_iam.EnableMFADevice({}, context)
```

#### Parameters

### GenerateCredentialReport



```js
amazonaws_iam.GenerateCredentialReport({}, context)
```

#### Parameters

### GetAccessKeyLastUsed



```js
amazonaws_iam.GetAccessKeyLastUsed({}, context)
```

#### Parameters

### GetAccountAuthorizationDetails



```js
amazonaws_iam.GetAccountAuthorizationDetails({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### GetAccountPasswordPolicy



```js
amazonaws_iam.GetAccountPasswordPolicy({}, context)
```

#### Parameters

### GetAccountSummary



```js
amazonaws_iam.GetAccountSummary({}, context)
```

#### Parameters

### GetContextKeysForCustomPolicy



```js
amazonaws_iam.GetContextKeysForCustomPolicy({}, context)
```

#### Parameters

### GetContextKeysForPrincipalPolicy



```js
amazonaws_iam.GetContextKeysForPrincipalPolicy({}, context)
```

#### Parameters

### GetCredentialReport



```js
amazonaws_iam.GetCredentialReport({}, context)
```

#### Parameters

### GetGroup



```js
amazonaws_iam.GetGroup({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### GetGroupPolicy



```js
amazonaws_iam.GetGroupPolicy({}, context)
```

#### Parameters

### GetInstanceProfile



```js
amazonaws_iam.GetInstanceProfile({}, context)
```

#### Parameters

### GetLoginProfile



```js
amazonaws_iam.GetLoginProfile({}, context)
```

#### Parameters

### GetOpenIDConnectProvider



```js
amazonaws_iam.GetOpenIDConnectProvider({}, context)
```

#### Parameters

### GetPolicy



```js
amazonaws_iam.GetPolicy({}, context)
```

#### Parameters

### GetPolicyVersion



```js
amazonaws_iam.GetPolicyVersion({}, context)
```

#### Parameters

### GetRole



```js
amazonaws_iam.GetRole({}, context)
```

#### Parameters

### GetRolePolicy



```js
amazonaws_iam.GetRolePolicy({}, context)
```

#### Parameters

### GetSAMLProvider



```js
amazonaws_iam.GetSAMLProvider({}, context)
```

#### Parameters

### GetSSHPublicKey



```js
amazonaws_iam.GetSSHPublicKey({}, context)
```

#### Parameters

### GetServerCertificate



```js
amazonaws_iam.GetServerCertificate({}, context)
```

#### Parameters

### GetUser



```js
amazonaws_iam.GetUser({}, context)
```

#### Parameters

### GetUserPolicy



```js
amazonaws_iam.GetUserPolicy({}, context)
```

#### Parameters

### ListAccessKeys



```js
amazonaws_iam.ListAccessKeys({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListAccountAliases



```js
amazonaws_iam.ListAccountAliases({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListAttachedGroupPolicies



```js
amazonaws_iam.ListAttachedGroupPolicies({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListAttachedRolePolicies



```js
amazonaws_iam.ListAttachedRolePolicies({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListAttachedUserPolicies



```js
amazonaws_iam.ListAttachedUserPolicies({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListEntitiesForPolicy



```js
amazonaws_iam.ListEntitiesForPolicy({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListGroupPolicies



```js
amazonaws_iam.ListGroupPolicies({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListGroups



```js
amazonaws_iam.ListGroups({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListGroupsForUser



```js
amazonaws_iam.ListGroupsForUser({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListInstanceProfiles



```js
amazonaws_iam.ListInstanceProfiles({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListInstanceProfilesForRole



```js
amazonaws_iam.ListInstanceProfilesForRole({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListMFADevices



```js
amazonaws_iam.ListMFADevices({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListOpenIDConnectProviders



```js
amazonaws_iam.ListOpenIDConnectProviders({}, context)
```

#### Parameters

### ListPolicies



```js
amazonaws_iam.ListPolicies({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListPolicyVersions



```js
amazonaws_iam.ListPolicyVersions({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListRolePolicies



```js
amazonaws_iam.ListRolePolicies({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListRoles



```js
amazonaws_iam.ListRoles({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListSAMLProviders



```js
amazonaws_iam.ListSAMLProviders({}, context)
```

#### Parameters

### ListSSHPublicKeys



```js
amazonaws_iam.ListSSHPublicKeys({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListServerCertificates



```js
amazonaws_iam.ListServerCertificates({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListServiceSpecificCredentials



```js
amazonaws_iam.ListServiceSpecificCredentials({}, context)
```

#### Parameters

### ListSigningCertificates



```js
amazonaws_iam.ListSigningCertificates({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListUserPolicies



```js
amazonaws_iam.ListUserPolicies({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListUsers



```js
amazonaws_iam.ListUsers({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListVirtualMFADevices



```js
amazonaws_iam.ListVirtualMFADevices({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### PutGroupPolicy



```js
amazonaws_iam.PutGroupPolicy({}, context)
```

#### Parameters

### PutRolePolicy



```js
amazonaws_iam.PutRolePolicy({}, context)
```

#### Parameters

### PutUserPolicy



```js
amazonaws_iam.PutUserPolicy({}, context)
```

#### Parameters

### RemoveClientIDFromOpenIDConnectProvider



```js
amazonaws_iam.RemoveClientIDFromOpenIDConnectProvider({}, context)
```

#### Parameters

### RemoveRoleFromInstanceProfile



```js
amazonaws_iam.RemoveRoleFromInstanceProfile({}, context)
```

#### Parameters

### RemoveUserFromGroup



```js
amazonaws_iam.RemoveUserFromGroup({}, context)
```

#### Parameters

### ResetServiceSpecificCredential



```js
amazonaws_iam.ResetServiceSpecificCredential({}, context)
```

#### Parameters

### ResyncMFADevice



```js
amazonaws_iam.ResyncMFADevice({}, context)
```

#### Parameters

### SetDefaultPolicyVersion



```js
amazonaws_iam.SetDefaultPolicyVersion({}, context)
```

#### Parameters

### SimulateCustomPolicy



```js
amazonaws_iam.SimulateCustomPolicy({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### SimulatePrincipalPolicy



```js
amazonaws_iam.SimulatePrincipalPolicy({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### UpdateAccessKey



```js
amazonaws_iam.UpdateAccessKey({}, context)
```

#### Parameters

### UpdateAccountPasswordPolicy



```js
amazonaws_iam.UpdateAccountPasswordPolicy({}, context)
```

#### Parameters

### UpdateAssumeRolePolicy



```js
amazonaws_iam.UpdateAssumeRolePolicy({}, context)
```

#### Parameters

### UpdateGroup



```js
amazonaws_iam.UpdateGroup({}, context)
```

#### Parameters

### UpdateLoginProfile



```js
amazonaws_iam.UpdateLoginProfile({}, context)
```

#### Parameters

### UpdateOpenIDConnectProviderThumbprint



```js
amazonaws_iam.UpdateOpenIDConnectProviderThumbprint({}, context)
```

#### Parameters

### UpdateRoleDescription



```js
amazonaws_iam.UpdateRoleDescription({}, context)
```

#### Parameters

### UpdateSAMLProvider



```js
amazonaws_iam.UpdateSAMLProvider({}, context)
```

#### Parameters

### UpdateSSHPublicKey



```js
amazonaws_iam.UpdateSSHPublicKey({}, context)
```

#### Parameters

### UpdateServerCertificate



```js
amazonaws_iam.UpdateServerCertificate({}, context)
```

#### Parameters

### UpdateServiceSpecificCredential



```js
amazonaws_iam.UpdateServiceSpecificCredential({}, context)
```

#### Parameters

### UpdateSigningCertificate



```js
amazonaws_iam.UpdateSigningCertificate({}, context)
```

#### Parameters

### UpdateUser



```js
amazonaws_iam.UpdateUser({}, context)
```

#### Parameters

### UploadSSHPublicKey



```js
amazonaws_iam.UploadSSHPublicKey({}, context)
```

#### Parameters

### UploadServerCertificate



```js
amazonaws_iam.UploadServerCertificate({}, context)
```

#### Parameters

### UploadSigningCertificate



```js
amazonaws_iam.UploadSigningCertificate({}, context)
```

#### Parameters

