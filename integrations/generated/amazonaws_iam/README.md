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


### AddRoleToInstanceProfile



```js
amazonaws_iam.AddRoleToInstanceProfile({}, context)
```


### AddUserToGroup



```js
amazonaws_iam.AddUserToGroup({}, context)
```


### AttachGroupPolicy



```js
amazonaws_iam.AttachGroupPolicy({}, context)
```


### AttachRolePolicy



```js
amazonaws_iam.AttachRolePolicy({}, context)
```


### AttachUserPolicy



```js
amazonaws_iam.AttachUserPolicy({}, context)
```


### ChangePassword



```js
amazonaws_iam.ChangePassword({}, context)
```


### CreateAccessKey



```js
amazonaws_iam.CreateAccessKey({}, context)
```


### CreateAccountAlias



```js
amazonaws_iam.CreateAccountAlias({}, context)
```


### CreateGroup



```js
amazonaws_iam.CreateGroup({}, context)
```


### CreateInstanceProfile



```js
amazonaws_iam.CreateInstanceProfile({}, context)
```


### CreateLoginProfile



```js
amazonaws_iam.CreateLoginProfile({}, context)
```


### CreateOpenIDConnectProvider



```js
amazonaws_iam.CreateOpenIDConnectProvider({}, context)
```


### CreatePolicy



```js
amazonaws_iam.CreatePolicy({}, context)
```


### CreatePolicyVersion



```js
amazonaws_iam.CreatePolicyVersion({}, context)
```


### CreateRole



```js
amazonaws_iam.CreateRole({}, context)
```


### CreateSAMLProvider



```js
amazonaws_iam.CreateSAMLProvider({}, context)
```


### CreateServiceLinkedRole



```js
amazonaws_iam.CreateServiceLinkedRole({}, context)
```


### CreateServiceSpecificCredential



```js
amazonaws_iam.CreateServiceSpecificCredential({}, context)
```


### CreateUser



```js
amazonaws_iam.CreateUser({}, context)
```


### CreateVirtualMFADevice



```js
amazonaws_iam.CreateVirtualMFADevice({}, context)
```


### DeactivateMFADevice



```js
amazonaws_iam.DeactivateMFADevice({}, context)
```


### DeleteAccessKey



```js
amazonaws_iam.DeleteAccessKey({}, context)
```


### DeleteAccountAlias



```js
amazonaws_iam.DeleteAccountAlias({}, context)
```


### DeleteAccountPasswordPolicy



```js
amazonaws_iam.DeleteAccountPasswordPolicy({}, context)
```


### DeleteGroup



```js
amazonaws_iam.DeleteGroup({}, context)
```


### DeleteGroupPolicy



```js
amazonaws_iam.DeleteGroupPolicy({}, context)
```


### DeleteInstanceProfile



```js
amazonaws_iam.DeleteInstanceProfile({}, context)
```


### DeleteLoginProfile



```js
amazonaws_iam.DeleteLoginProfile({}, context)
```


### DeleteOpenIDConnectProvider



```js
amazonaws_iam.DeleteOpenIDConnectProvider({}, context)
```


### DeletePolicy



```js
amazonaws_iam.DeletePolicy({}, context)
```


### DeletePolicyVersion



```js
amazonaws_iam.DeletePolicyVersion({}, context)
```


### DeleteRole



```js
amazonaws_iam.DeleteRole({}, context)
```


### DeleteRolePolicy



```js
amazonaws_iam.DeleteRolePolicy({}, context)
```


### DeleteSAMLProvider



```js
amazonaws_iam.DeleteSAMLProvider({}, context)
```


### DeleteSSHPublicKey



```js
amazonaws_iam.DeleteSSHPublicKey({}, context)
```


### DeleteServerCertificate



```js
amazonaws_iam.DeleteServerCertificate({}, context)
```


### DeleteServiceSpecificCredential



```js
amazonaws_iam.DeleteServiceSpecificCredential({}, context)
```


### DeleteSigningCertificate



```js
amazonaws_iam.DeleteSigningCertificate({}, context)
```


### DeleteUser



```js
amazonaws_iam.DeleteUser({}, context)
```


### DeleteUserPolicy



```js
amazonaws_iam.DeleteUserPolicy({}, context)
```


### DeleteVirtualMFADevice



```js
amazonaws_iam.DeleteVirtualMFADevice({}, context)
```


### DetachGroupPolicy



```js
amazonaws_iam.DetachGroupPolicy({}, context)
```


### DetachRolePolicy



```js
amazonaws_iam.DetachRolePolicy({}, context)
```


### DetachUserPolicy



```js
amazonaws_iam.DetachUserPolicy({}, context)
```


### EnableMFADevice



```js
amazonaws_iam.EnableMFADevice({}, context)
```


### GenerateCredentialReport



```js
amazonaws_iam.GenerateCredentialReport({}, context)
```


### GetAccessKeyLastUsed



```js
amazonaws_iam.GetAccessKeyLastUsed({}, context)
```


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


### GetAccountSummary



```js
amazonaws_iam.GetAccountSummary({}, context)
```


### GetContextKeysForCustomPolicy



```js
amazonaws_iam.GetContextKeysForCustomPolicy({}, context)
```


### GetContextKeysForPrincipalPolicy



```js
amazonaws_iam.GetContextKeysForPrincipalPolicy({}, context)
```


### GetCredentialReport



```js
amazonaws_iam.GetCredentialReport({}, context)
```


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


### GetInstanceProfile



```js
amazonaws_iam.GetInstanceProfile({}, context)
```


### GetLoginProfile



```js
amazonaws_iam.GetLoginProfile({}, context)
```


### GetOpenIDConnectProvider



```js
amazonaws_iam.GetOpenIDConnectProvider({}, context)
```


### GetPolicy



```js
amazonaws_iam.GetPolicy({}, context)
```


### GetPolicyVersion



```js
amazonaws_iam.GetPolicyVersion({}, context)
```


### GetRole



```js
amazonaws_iam.GetRole({}, context)
```


### GetRolePolicy



```js
amazonaws_iam.GetRolePolicy({}, context)
```


### GetSAMLProvider



```js
amazonaws_iam.GetSAMLProvider({}, context)
```


### GetSSHPublicKey



```js
amazonaws_iam.GetSSHPublicKey({}, context)
```


### GetServerCertificate



```js
amazonaws_iam.GetServerCertificate({}, context)
```


### GetUser



```js
amazonaws_iam.GetUser({}, context)
```


### GetUserPolicy



```js
amazonaws_iam.GetUserPolicy({}, context)
```


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


### PutRolePolicy



```js
amazonaws_iam.PutRolePolicy({}, context)
```


### PutUserPolicy



```js
amazonaws_iam.PutUserPolicy({}, context)
```


### RemoveClientIDFromOpenIDConnectProvider



```js
amazonaws_iam.RemoveClientIDFromOpenIDConnectProvider({}, context)
```


### RemoveRoleFromInstanceProfile



```js
amazonaws_iam.RemoveRoleFromInstanceProfile({}, context)
```


### RemoveUserFromGroup



```js
amazonaws_iam.RemoveUserFromGroup({}, context)
```


### ResetServiceSpecificCredential



```js
amazonaws_iam.ResetServiceSpecificCredential({}, context)
```


### ResyncMFADevice



```js
amazonaws_iam.ResyncMFADevice({}, context)
```


### SetDefaultPolicyVersion



```js
amazonaws_iam.SetDefaultPolicyVersion({}, context)
```


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


### UpdateAccountPasswordPolicy



```js
amazonaws_iam.UpdateAccountPasswordPolicy({}, context)
```


### UpdateAssumeRolePolicy



```js
amazonaws_iam.UpdateAssumeRolePolicy({}, context)
```


### UpdateGroup



```js
amazonaws_iam.UpdateGroup({}, context)
```


### UpdateLoginProfile



```js
amazonaws_iam.UpdateLoginProfile({}, context)
```


### UpdateOpenIDConnectProviderThumbprint



```js
amazonaws_iam.UpdateOpenIDConnectProviderThumbprint({}, context)
```


### UpdateRoleDescription



```js
amazonaws_iam.UpdateRoleDescription({}, context)
```


### UpdateSAMLProvider



```js
amazonaws_iam.UpdateSAMLProvider({}, context)
```


### UpdateSSHPublicKey



```js
amazonaws_iam.UpdateSSHPublicKey({}, context)
```


### UpdateServerCertificate



```js
amazonaws_iam.UpdateServerCertificate({}, context)
```


### UpdateServiceSpecificCredential



```js
amazonaws_iam.UpdateServiceSpecificCredential({}, context)
```


### UpdateSigningCertificate



```js
amazonaws_iam.UpdateSigningCertificate({}, context)
```


### UpdateUser



```js
amazonaws_iam.UpdateUser({}, context)
```


### UploadSSHPublicKey



```js
amazonaws_iam.UploadSSHPublicKey({}, context)
```


### UploadServerCertificate



```js
amazonaws_iam.UploadServerCertificate({}, context)
```


### UploadSigningCertificate



```js
amazonaws_iam.UploadSigningCertificate({}, context)
```


