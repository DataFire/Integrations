# @datafire/amazonaws_iam

Client library for AWS Identity and Access Management

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_iam
```

```js
let datafire = require('datafire');
let amazonaws_iam = require('@datafire/amazonaws_iam').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_iam.AddClientIDToOpenIDConnectProvider({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Identity and Access Management</fullname> <p>AWS Identity and Access Management (IAM) is a web service that you can use to manage users and user permissions under your AWS account. This guide provides descriptions of IAM actions that you can call programmatically. For general information about IAM, see <a href="http://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a>. For the user guide for IAM, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/">Using IAM</a>. </p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to IAM and AWS. For example, the SDKs take care of tasks such as cryptographically signing requests (see below), managing errors, and retrying requests automatically. For information about the AWS SDKs, including how to download and install them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a> page. </p> </note> <p>We recommend that you use the AWS SDKs to make programmatic API calls to IAM. However, you can also use the IAM Query API to make direct calls to the IAM web service. To learn more about the IAM Query API, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>Using IAM</i> guide. IAM supports GET and POST requests for all actions. That is, the API does not require you to use GET for some actions and POST for others. However, GET requests are subject to the limitation size of a URL. Therefore, for operations that require larger sizes, use a POST request. </p> <p> <b>Signing Requests</b> </p> <p>Requests must be signed using an access key ID and a secret access key. We strongly recommend that you do not use your AWS account access key ID and secret access key for everyday work with IAM. You can use the access key ID and secret access key for an IAM user or you can use the AWS Security Token Service to generate temporary security credentials and use those to sign requests.</p> <p>To sign requests, we recommend that you use <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you have an existing application that uses Signature Version 2, you do not have to update it to use Signature Version 4. However, some operations now require Signature Version 4. The documentation for operations that require version 4 indicate this requirement. </p> <p> <b>Additional Resources</b> </p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS Security Credentials</a>. This topic provides general information about the types of credentials used for accessing AWS. </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/IAMBestPractices.html">IAM Best Practices</a>. This topic presents a list of suggestions for using the IAM service to help secure your AWS resources. </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API Requests</a>. This set of topics walk you through the process of signing a request using an access key ID and secret access key. </p> </li> </ul>

## Actions
### AddClientIDToOpenIDConnectProvider



```js
amazonaws_iam.AddClientIDToOpenIDConnectProvider({
  "OpenIDConnectProviderArn": "",
  "ClientID": ""
}, context)
```

#### Parameters
* ClientID (string) **required**
* OpenIDConnectProviderArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### AddRoleToInstanceProfile



```js
amazonaws_iam.AddRoleToInstanceProfile({
  "InstanceProfileName": "",
  "RoleName": ""
}, context)
```

#### Parameters
* InstanceProfileName (string) **required**
* RoleName (string) **required**

### AddUserToGroup



```js
amazonaws_iam.AddUserToGroup({
  "GroupName": "",
  "UserName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* UserName (string) **required**

### AttachGroupPolicy



```js
amazonaws_iam.AttachGroupPolicy({
  "GroupName": "",
  "PolicyArn": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### AttachRolePolicy



```js
amazonaws_iam.AttachRolePolicy({
  "RoleName": "",
  "PolicyArn": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* RoleName (string) **required**

### AttachUserPolicy



```js
amazonaws_iam.AttachUserPolicy({
  "UserName": "",
  "PolicyArn": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* UserName (string) **required**

### ChangePassword



```js
amazonaws_iam.ChangePassword({
  "OldPassword": "",
  "NewPassword": ""
}, context)
```

#### Parameters
* NewPassword (string) **required**
* OldPassword (string) **required**

### CreateAccessKey



```js
amazonaws_iam.CreateAccessKey({}, context)
```

#### Parameters
* UserName (string)

### CreateAccountAlias



```js
amazonaws_iam.CreateAccountAlias({
  "AccountAlias": ""
}, context)
```

#### Parameters
* AccountAlias (string) **required**

### CreateGroup



```js
amazonaws_iam.CreateGroup({
  "GroupName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* Path (string)

### CreateInstanceProfile



```js
amazonaws_iam.CreateInstanceProfile({
  "InstanceProfileName": ""
}, context)
```

#### Parameters
* InstanceProfileName (string) **required**
* Path (string)

### CreateLoginProfile



```js
amazonaws_iam.CreateLoginProfile({
  "UserName": "",
  "Password": ""
}, context)
```

#### Parameters
* Password (string) **required**
* PasswordResetRequired (boolean)
* UserName (string) **required**

### CreateOpenIDConnectProvider



```js
amazonaws_iam.CreateOpenIDConnectProvider({
  "Url": "",
  "ThumbprintList": []
}, context)
```

#### Parameters
* ClientIDList (array)
* ThumbprintList (array) **required** - Contains a list of thumbprints of identity provider server certificates.
* Url (string) **required** - Contains a URL that specifies the endpoint for an OpenID Connect provider.

### CreatePolicy



```js
amazonaws_iam.CreatePolicy({
  "PolicyName": "",
  "PolicyDocument": ""
}, context)
```

#### Parameters
* Description (string)
* Path (string)
* PolicyDocument (string) **required**
* PolicyName (string) **required**

### CreatePolicyVersion



```js
amazonaws_iam.CreatePolicyVersion({
  "PolicyArn": "",
  "PolicyDocument": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* PolicyDocument (string) **required**
* SetAsDefault (boolean)

### CreateRole



```js
amazonaws_iam.CreateRole({
  "RoleName": "",
  "AssumeRolePolicyDocument": ""
}, context)
```

#### Parameters
* AssumeRolePolicyDocument (string) **required**
* Description (string)
* Path (string)
* RoleName (string) **required**

### CreateSAMLProvider



```js
amazonaws_iam.CreateSAMLProvider({
  "SAMLMetadataDocument": "",
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**
* SAMLMetadataDocument (string) **required**

### CreateServiceLinkedRole



```js
amazonaws_iam.CreateServiceLinkedRole({
  "AWSServiceName": ""
}, context)
```

#### Parameters
* AWSServiceName (string) **required**
* CustomSuffix (string)
* Description (string)

### CreateServiceSpecificCredential



```js
amazonaws_iam.CreateServiceSpecificCredential({
  "UserName": "",
  "ServiceName": ""
}, context)
```

#### Parameters
* ServiceName (string) **required**
* UserName (string) **required**

### CreateUser



```js
amazonaws_iam.CreateUser({
  "UserName": ""
}, context)
```

#### Parameters
* Path (string)
* UserName (string) **required**

### CreateVirtualMFADevice



```js
amazonaws_iam.CreateVirtualMFADevice({
  "VirtualMFADeviceName": ""
}, context)
```

#### Parameters
* Path (string)
* VirtualMFADeviceName (string) **required**

### DeactivateMFADevice



```js
amazonaws_iam.DeactivateMFADevice({
  "UserName": "",
  "SerialNumber": ""
}, context)
```

#### Parameters
* SerialNumber (string) **required**
* UserName (string) **required**

### DeleteAccessKey



```js
amazonaws_iam.DeleteAccessKey({
  "AccessKeyId": ""
}, context)
```

#### Parameters
* AccessKeyId (string) **required**
* UserName (string)

### DeleteAccountAlias



```js
amazonaws_iam.DeleteAccountAlias({
  "AccountAlias": ""
}, context)
```

#### Parameters
* AccountAlias (string) **required**

### DeleteAccountPasswordPolicy



```js
amazonaws_iam.DeleteAccountPasswordPolicy({}, context)
```

#### Parameters
*This action has no parameters*

### DeleteGroup



```js
amazonaws_iam.DeleteGroup({
  "GroupName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**

### DeleteGroupPolicy



```js
amazonaws_iam.DeleteGroupPolicy({
  "GroupName": "",
  "PolicyName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* PolicyName (string) **required**

### DeleteInstanceProfile



```js
amazonaws_iam.DeleteInstanceProfile({
  "InstanceProfileName": ""
}, context)
```

#### Parameters
* InstanceProfileName (string) **required**

### DeleteLoginProfile



```js
amazonaws_iam.DeleteLoginProfile({
  "UserName": ""
}, context)
```

#### Parameters
* UserName (string) **required**

### DeleteOpenIDConnectProvider



```js
amazonaws_iam.DeleteOpenIDConnectProvider({
  "OpenIDConnectProviderArn": ""
}, context)
```

#### Parameters
* OpenIDConnectProviderArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### DeletePolicy



```js
amazonaws_iam.DeletePolicy({
  "PolicyArn": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### DeletePolicyVersion



```js
amazonaws_iam.DeletePolicyVersion({
  "PolicyArn": "",
  "VersionId": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* VersionId (string) **required**

### DeleteRole



```js
amazonaws_iam.DeleteRole({
  "RoleName": ""
}, context)
```

#### Parameters
* RoleName (string) **required**

### DeleteRolePolicy



```js
amazonaws_iam.DeleteRolePolicy({
  "RoleName": "",
  "PolicyName": ""
}, context)
```

#### Parameters
* PolicyName (string) **required**
* RoleName (string) **required**

### DeleteSAMLProvider



```js
amazonaws_iam.DeleteSAMLProvider({
  "SAMLProviderArn": ""
}, context)
```

#### Parameters
* SAMLProviderArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### DeleteSSHPublicKey



```js
amazonaws_iam.DeleteSSHPublicKey({
  "UserName": "",
  "SSHPublicKeyId": ""
}, context)
```

#### Parameters
* SSHPublicKeyId (string) **required**
* UserName (string) **required**

### DeleteServerCertificate



```js
amazonaws_iam.DeleteServerCertificate({
  "ServerCertificateName": ""
}, context)
```

#### Parameters
* ServerCertificateName (string) **required**

### DeleteServiceLinkedRole



```js
amazonaws_iam.DeleteServiceLinkedRole({
  "RoleName": ""
}, context)
```

#### Parameters
* RoleName (string) **required**

### DeleteServiceSpecificCredential



```js
amazonaws_iam.DeleteServiceSpecificCredential({
  "ServiceSpecificCredentialId": ""
}, context)
```

#### Parameters
* ServiceSpecificCredentialId (string) **required**
* UserName (string)

### DeleteSigningCertificate



```js
amazonaws_iam.DeleteSigningCertificate({
  "CertificateId": ""
}, context)
```

#### Parameters
* CertificateId (string) **required**
* UserName (string)

### DeleteUser



```js
amazonaws_iam.DeleteUser({
  "UserName": ""
}, context)
```

#### Parameters
* UserName (string) **required**

### DeleteUserPolicy



```js
amazonaws_iam.DeleteUserPolicy({
  "UserName": "",
  "PolicyName": ""
}, context)
```

#### Parameters
* PolicyName (string) **required**
* UserName (string) **required**

### DeleteVirtualMFADevice



```js
amazonaws_iam.DeleteVirtualMFADevice({
  "SerialNumber": ""
}, context)
```

#### Parameters
* SerialNumber (string) **required**

### DetachGroupPolicy



```js
amazonaws_iam.DetachGroupPolicy({
  "GroupName": "",
  "PolicyArn": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### DetachRolePolicy



```js
amazonaws_iam.DetachRolePolicy({
  "RoleName": "",
  "PolicyArn": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* RoleName (string) **required**

### DetachUserPolicy



```js
amazonaws_iam.DetachUserPolicy({
  "UserName": "",
  "PolicyArn": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* UserName (string) **required**

### EnableMFADevice



```js
amazonaws_iam.EnableMFADevice({
  "UserName": "",
  "SerialNumber": "",
  "AuthenticationCode1": "",
  "AuthenticationCode2": ""
}, context)
```

#### Parameters
* AuthenticationCode1 (string) **required**
* AuthenticationCode2 (string) **required**
* SerialNumber (string) **required**
* UserName (string) **required**

### GenerateCredentialReport



```js
amazonaws_iam.GenerateCredentialReport({}, context)
```

#### Parameters
*This action has no parameters*

### GetAccessKeyLastUsed



```js
amazonaws_iam.GetAccessKeyLastUsed({
  "AccessKeyId": ""
}, context)
```

#### Parameters
* AccessKeyId (string) **required**

### GetAccountAuthorizationDetails



```js
amazonaws_iam.GetAccountAuthorizationDetails({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Filter (array)
* Marker (string)
* MaxItems (integer)

### GetAccountPasswordPolicy



```js
amazonaws_iam.GetAccountPasswordPolicy({}, context)
```

#### Parameters
*This action has no parameters*

### GetAccountSummary



```js
amazonaws_iam.GetAccountSummary({}, context)
```

#### Parameters
*This action has no parameters*

### GetContextKeysForCustomPolicy



```js
amazonaws_iam.GetContextKeysForCustomPolicy({
  "PolicyInputList": []
}, context)
```

#### Parameters
* PolicyInputList (array) **required**

### GetContextKeysForPrincipalPolicy



```js
amazonaws_iam.GetContextKeysForPrincipalPolicy({
  "PolicySourceArn": ""
}, context)
```

#### Parameters
* PolicyInputList (array)
* PolicySourceArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### GetCredentialReport



```js
amazonaws_iam.GetCredentialReport({}, context)
```

#### Parameters
*This action has no parameters*

### GetGroup



```js
amazonaws_iam.GetGroup({
  "GroupName": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* GroupName (string) **required**
* Marker (string)
* MaxItems (integer)

### GetGroupPolicy



```js
amazonaws_iam.GetGroupPolicy({
  "GroupName": "",
  "PolicyName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* PolicyName (string) **required**

### GetInstanceProfile



```js
amazonaws_iam.GetInstanceProfile({
  "InstanceProfileName": ""
}, context)
```

#### Parameters
* InstanceProfileName (string) **required**

### GetLoginProfile



```js
amazonaws_iam.GetLoginProfile({
  "UserName": ""
}, context)
```

#### Parameters
* UserName (string) **required**

### GetOpenIDConnectProvider



```js
amazonaws_iam.GetOpenIDConnectProvider({
  "OpenIDConnectProviderArn": ""
}, context)
```

#### Parameters
* OpenIDConnectProviderArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### GetPolicy



```js
amazonaws_iam.GetPolicy({
  "PolicyArn": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### GetPolicyVersion



```js
amazonaws_iam.GetPolicyVersion({
  "PolicyArn": "",
  "VersionId": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* VersionId (string) **required**

### GetRole



```js
amazonaws_iam.GetRole({
  "RoleName": ""
}, context)
```

#### Parameters
* RoleName (string) **required**

### GetRolePolicy



```js
amazonaws_iam.GetRolePolicy({
  "RoleName": "",
  "PolicyName": ""
}, context)
```

#### Parameters
* PolicyName (string) **required**
* RoleName (string) **required**

### GetSAMLProvider



```js
amazonaws_iam.GetSAMLProvider({
  "SAMLProviderArn": ""
}, context)
```

#### Parameters
* SAMLProviderArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### GetSSHPublicKey



```js
amazonaws_iam.GetSSHPublicKey({
  "UserName": "",
  "SSHPublicKeyId": "",
  "Encoding": ""
}, context)
```

#### Parameters
* Encoding (string) **required**
* SSHPublicKeyId (string) **required**
* UserName (string) **required**

### GetServerCertificate



```js
amazonaws_iam.GetServerCertificate({
  "ServerCertificateName": ""
}, context)
```

#### Parameters
* ServerCertificateName (string) **required**

### GetServiceLinkedRoleDeletionStatus



```js
amazonaws_iam.GetServiceLinkedRoleDeletionStatus({
  "DeletionTaskId": ""
}, context)
```

#### Parameters
* DeletionTaskId (string) **required**

### GetUser



```js
amazonaws_iam.GetUser({}, context)
```

#### Parameters
* UserName (string)

### GetUserPolicy



```js
amazonaws_iam.GetUserPolicy({
  "UserName": "",
  "PolicyName": ""
}, context)
```

#### Parameters
* PolicyName (string) **required**
* UserName (string) **required**

### ListAccessKeys



```js
amazonaws_iam.ListAccessKeys({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* UserName (string)

### ListAccountAliases



```js
amazonaws_iam.ListAccountAliases({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)

### ListAttachedGroupPolicies



```js
amazonaws_iam.ListAttachedGroupPolicies({
  "GroupName": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* GroupName (string) **required**
* Marker (string)
* MaxItems (integer)
* PathPrefix (string)

### ListAttachedRolePolicies



```js
amazonaws_iam.ListAttachedRolePolicies({
  "RoleName": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* PathPrefix (string)
* RoleName (string) **required**

### ListAttachedUserPolicies



```js
amazonaws_iam.ListAttachedUserPolicies({
  "UserName": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* PathPrefix (string)
* UserName (string) **required**

### ListEntitiesForPolicy



```js
amazonaws_iam.ListEntitiesForPolicy({
  "PolicyArn": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* EntityFilter (string)
* Marker (string)
* MaxItems (integer)
* PathPrefix (string)
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### ListGroupPolicies



```js
amazonaws_iam.ListGroupPolicies({
  "GroupName": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* GroupName (string) **required**
* Marker (string)
* MaxItems (integer)

### ListGroups



```js
amazonaws_iam.ListGroups({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* PathPrefix (string)

### ListGroupsForUser



```js
amazonaws_iam.ListGroupsForUser({
  "UserName": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* UserName (string) **required**

### ListInstanceProfiles



```js
amazonaws_iam.ListInstanceProfiles({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* PathPrefix (string)

### ListInstanceProfilesForRole



```js
amazonaws_iam.ListInstanceProfilesForRole({
  "RoleName": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* RoleName (string) **required**

### ListMFADevices



```js
amazonaws_iam.ListMFADevices({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* UserName (string)

### ListOpenIDConnectProviders



```js
amazonaws_iam.ListOpenIDConnectProviders({}, context)
```

#### Parameters
*This action has no parameters*

### ListPolicies



```js
amazonaws_iam.ListPolicies({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* OnlyAttached (boolean)
* PathPrefix (string)
* Scope (string)

### ListPolicyVersions



```js
amazonaws_iam.ListPolicyVersions({
  "PolicyArn": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### ListRolePolicies



```js
amazonaws_iam.ListRolePolicies({
  "RoleName": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* RoleName (string) **required**

### ListRoles



```js
amazonaws_iam.ListRoles({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* PathPrefix (string)

### ListSAMLProviders



```js
amazonaws_iam.ListSAMLProviders({}, context)
```

#### Parameters
*This action has no parameters*

### ListSSHPublicKeys



```js
amazonaws_iam.ListSSHPublicKeys({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* UserName (string)

### ListServerCertificates



```js
amazonaws_iam.ListServerCertificates({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* PathPrefix (string)

### ListServiceSpecificCredentials



```js
amazonaws_iam.ListServiceSpecificCredentials({}, context)
```

#### Parameters
* ServiceName (string)
* UserName (string)

### ListSigningCertificates



```js
amazonaws_iam.ListSigningCertificates({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* UserName (string)

### ListUserPolicies



```js
amazonaws_iam.ListUserPolicies({
  "UserName": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* UserName (string) **required**

### ListUsers



```js
amazonaws_iam.ListUsers({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* Marker (string)
* MaxItems (integer)
* PathPrefix (string)

### ListVirtualMFADevices



```js
amazonaws_iam.ListVirtualMFADevices({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* AssignmentStatus (string)
* Marker (string)
* MaxItems (integer)

### PutGroupPolicy



```js
amazonaws_iam.PutGroupPolicy({
  "GroupName": "",
  "PolicyName": "",
  "PolicyDocument": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* PolicyDocument (string) **required**
* PolicyName (string) **required**

### PutRolePolicy



```js
amazonaws_iam.PutRolePolicy({
  "RoleName": "",
  "PolicyName": "",
  "PolicyDocument": ""
}, context)
```

#### Parameters
* PolicyDocument (string) **required**
* PolicyName (string) **required**
* RoleName (string) **required**

### PutUserPolicy



```js
amazonaws_iam.PutUserPolicy({
  "UserName": "",
  "PolicyName": "",
  "PolicyDocument": ""
}, context)
```

#### Parameters
* PolicyDocument (string) **required**
* PolicyName (string) **required**
* UserName (string) **required**

### RemoveClientIDFromOpenIDConnectProvider



```js
amazonaws_iam.RemoveClientIDFromOpenIDConnectProvider({
  "OpenIDConnectProviderArn": "",
  "ClientID": ""
}, context)
```

#### Parameters
* ClientID (string) **required**
* OpenIDConnectProviderArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### RemoveRoleFromInstanceProfile



```js
amazonaws_iam.RemoveRoleFromInstanceProfile({
  "InstanceProfileName": "",
  "RoleName": ""
}, context)
```

#### Parameters
* InstanceProfileName (string) **required**
* RoleName (string) **required**

### RemoveUserFromGroup



```js
amazonaws_iam.RemoveUserFromGroup({
  "GroupName": "",
  "UserName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* UserName (string) **required**

### ResetServiceSpecificCredential



```js
amazonaws_iam.ResetServiceSpecificCredential({
  "ServiceSpecificCredentialId": ""
}, context)
```

#### Parameters
* ServiceSpecificCredentialId (string) **required**
* UserName (string)

### ResyncMFADevice



```js
amazonaws_iam.ResyncMFADevice({
  "UserName": "",
  "SerialNumber": "",
  "AuthenticationCode1": "",
  "AuthenticationCode2": ""
}, context)
```

#### Parameters
* AuthenticationCode1 (string) **required**
* AuthenticationCode2 (string) **required**
* SerialNumber (string) **required**
* UserName (string) **required**

### SetDefaultPolicyVersion



```js
amazonaws_iam.SetDefaultPolicyVersion({
  "PolicyArn": "",
  "VersionId": ""
}, context)
```

#### Parameters
* PolicyArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* VersionId (string) **required**

### SimulateCustomPolicy



```js
amazonaws_iam.SimulateCustomPolicy({
  "PolicyInputList": [],
  "ActionNames": []
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* ActionNames (array) **required**
* CallerArn (string)
* ContextEntries (array)
* Marker (string)
* MaxItems (integer)
* PolicyInputList (array) **required**
* ResourceArns (array)
* ResourceHandlingOption (string)
* ResourceOwner (string)
* ResourcePolicy (string)

### SimulatePrincipalPolicy



```js
amazonaws_iam.SimulatePrincipalPolicy({
  "PolicySourceArn": "",
  "ActionNames": []
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* ActionNames (array) **required**
* CallerArn (string)
* ContextEntries (array)
* Marker (string)
* MaxItems (integer)
* PolicyInputList (array)
* PolicySourceArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* ResourceArns (array)
* ResourceHandlingOption (string)
* ResourceOwner (string)
* ResourcePolicy (string)

### UpdateAccessKey



```js
amazonaws_iam.UpdateAccessKey({
  "AccessKeyId": "",
  "Status": ""
}, context)
```

#### Parameters
* AccessKeyId (string) **required**
* Status (string) **required**
* UserName (string)

### UpdateAccountPasswordPolicy



```js
amazonaws_iam.UpdateAccountPasswordPolicy({}, context)
```

#### Parameters
* AllowUsersToChangePassword (boolean)
* HardExpiry (boolean)
* MaxPasswordAge (integer)
* MinimumPasswordLength (integer)
* PasswordReusePrevention (integer)
* RequireLowercaseCharacters (boolean)
* RequireNumbers (boolean)
* RequireSymbols (boolean)
* RequireUppercaseCharacters (boolean)

### UpdateAssumeRolePolicy



```js
amazonaws_iam.UpdateAssumeRolePolicy({
  "RoleName": "",
  "PolicyDocument": ""
}, context)
```

#### Parameters
* PolicyDocument (string) **required**
* RoleName (string) **required**

### UpdateGroup



```js
amazonaws_iam.UpdateGroup({
  "GroupName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* NewGroupName (string)
* NewPath (string)

### UpdateLoginProfile



```js
amazonaws_iam.UpdateLoginProfile({
  "UserName": ""
}, context)
```

#### Parameters
* Password (string)
* PasswordResetRequired (boolean)
* UserName (string) **required**

### UpdateOpenIDConnectProviderThumbprint



```js
amazonaws_iam.UpdateOpenIDConnectProviderThumbprint({
  "OpenIDConnectProviderArn": "",
  "ThumbprintList": []
}, context)
```

#### Parameters
* OpenIDConnectProviderArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
* ThumbprintList (array) **required** - Contains a list of thumbprints of identity provider server certificates.

### UpdateRoleDescription



```js
amazonaws_iam.UpdateRoleDescription({
  "RoleName": "",
  "Description": ""
}, context)
```

#### Parameters
* Description (string) **required**
* RoleName (string) **required**

### UpdateSAMLProvider



```js
amazonaws_iam.UpdateSAMLProvider({
  "SAMLMetadataDocument": "",
  "SAMLProviderArn": ""
}, context)
```

#### Parameters
* SAMLMetadataDocument (string) **required**
* SAMLProviderArn (string) **required** - <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### UpdateSSHPublicKey



```js
amazonaws_iam.UpdateSSHPublicKey({
  "UserName": "",
  "SSHPublicKeyId": "",
  "Status": ""
}, context)
```

#### Parameters
* SSHPublicKeyId (string) **required**
* Status (string) **required**
* UserName (string) **required**

### UpdateServerCertificate



```js
amazonaws_iam.UpdateServerCertificate({
  "ServerCertificateName": ""
}, context)
```

#### Parameters
* NewPath (string)
* NewServerCertificateName (string)
* ServerCertificateName (string) **required**

### UpdateServiceSpecificCredential



```js
amazonaws_iam.UpdateServiceSpecificCredential({
  "ServiceSpecificCredentialId": "",
  "Status": ""
}, context)
```

#### Parameters
* ServiceSpecificCredentialId (string) **required**
* Status (string) **required**
* UserName (string)

### UpdateSigningCertificate



```js
amazonaws_iam.UpdateSigningCertificate({
  "CertificateId": "",
  "Status": ""
}, context)
```

#### Parameters
* CertificateId (string) **required**
* Status (string) **required**
* UserName (string)

### UpdateUser



```js
amazonaws_iam.UpdateUser({
  "UserName": ""
}, context)
```

#### Parameters
* NewPath (string)
* NewUserName (string)
* UserName (string) **required**

### UploadSSHPublicKey



```js
amazonaws_iam.UploadSSHPublicKey({
  "UserName": "",
  "SSHPublicKeyBody": ""
}, context)
```

#### Parameters
* SSHPublicKeyBody (string) **required**
* UserName (string) **required**

### UploadServerCertificate



```js
amazonaws_iam.UploadServerCertificate({
  "ServerCertificateName": "",
  "CertificateBody": "",
  "PrivateKey": ""
}, context)
```

#### Parameters
* CertificateBody (string) **required**
* CertificateChain (string)
* Path (string)
* PrivateKey (string) **required**
* ServerCertificateName (string) **required**

### UploadSigningCertificate



```js
amazonaws_iam.UploadSigningCertificate({
  "CertificateBody": ""
}, context)
```

#### Parameters
* CertificateBody (string) **required**
* UserName (string)

