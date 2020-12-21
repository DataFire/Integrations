# @datafire/amazonaws_iam

Client library for AWS Identity and Access Management

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iam
```
```js
let amazonaws_iam = require('@datafire/amazonaws_iam').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Identity and Access Management</fullname> <p>AWS Identity and Access Management (IAM) is a web service for securely controlling access to AWS services. With IAM, you can centrally manage users, security credentials such as access keys, and permissions that control which AWS resources users and applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">AWS Identity and Access Management User Guide</a>.</p>

## Actions

### AddClientIDToOpenIDConnectProvider



```js
amazonaws_iam.AddClientIDToOpenIDConnectProvider({
  "OpenIDConnectProviderArn": "",
  "ClientID": ""
}, context)
```

#### Input
* input `object`
  * OpenIDConnectProviderArn **required** `string`
  * ClientID **required** `string`

#### Output
*Output schema unknown*

### AddClientIDToOpenIDConnectProvider



```js
amazonaws_iam.AddClientIDToOpenIDConnectProvider({
  "OpenIDConnectProviderArn": null,
  "ClientID": null
}, context)
```

#### Input
* input `object`
  * ClientID **required**
  * OpenIDConnectProviderArn **required**

#### Output
*Output schema unknown*

### AddRoleToInstanceProfile



```js
amazonaws_iam.AddRoleToInstanceProfile({
  "InstanceProfileName": "",
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required** `string`
  * RoleName **required** `string`

#### Output
*Output schema unknown*

### AddRoleToInstanceProfile



```js
amazonaws_iam.AddRoleToInstanceProfile({
  "InstanceProfileName": null,
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required**
  * RoleName **required**

#### Output
*Output schema unknown*

### AddUserToGroup



```js
amazonaws_iam.AddUserToGroup({
  "GroupName": "",
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * UserName **required** `string`

#### Output
*Output schema unknown*

### AddUserToGroup



```js
amazonaws_iam.AddUserToGroup({
  "GroupName": null,
  "UserName": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * UserName **required**

#### Output
*Output schema unknown*

### AttachGroupPolicy



```js
amazonaws_iam.AttachGroupPolicy({
  "GroupName": "",
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * PolicyArn **required** `string`

#### Output
*Output schema unknown*

### AttachGroupPolicy



```js
amazonaws_iam.AttachGroupPolicy({
  "GroupName": null,
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * PolicyArn **required**

#### Output
*Output schema unknown*

### AttachRolePolicy



```js
amazonaws_iam.AttachRolePolicy({
  "RoleName": "",
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * PolicyArn **required** `string`

#### Output
*Output schema unknown*

### AttachRolePolicy



```js
amazonaws_iam.AttachRolePolicy({
  "RoleName": null,
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**
  * RoleName **required**

#### Output
*Output schema unknown*

### AttachUserPolicy



```js
amazonaws_iam.AttachUserPolicy({
  "UserName": "",
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * PolicyArn **required** `string`

#### Output
*Output schema unknown*

### AttachUserPolicy



```js
amazonaws_iam.AttachUserPolicy({
  "UserName": null,
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**
  * UserName **required**

#### Output
*Output schema unknown*

### ChangePassword



```js
amazonaws_iam.ChangePassword({
  "OldPassword": "",
  "NewPassword": ""
}, context)
```

#### Input
* input `object`
  * OldPassword **required** `string`
  * NewPassword **required** `string`

#### Output
*Output schema unknown*

### ChangePassword



```js
amazonaws_iam.ChangePassword({
  "OldPassword": null,
  "NewPassword": null
}, context)
```

#### Input
* input `object`
  * NewPassword **required**
  * OldPassword **required**

#### Output
*Output schema unknown*

### CreateAccessKey



```js
amazonaws_iam.CreateAccessKey({}, context)
```

#### Input
* input `object`
  * UserName `string`

#### Output
* output [CreateAccessKeyResponse](#createaccesskeyresponse)

### CreateAccessKey



```js
amazonaws_iam.CreateAccessKey({}, context)
```

#### Input
* input `object`
  * UserName

#### Output
* output [CreateAccessKeyResponse](#createaccesskeyresponse)

### CreateAccountAlias



```js
amazonaws_iam.CreateAccountAlias({
  "AccountAlias": ""
}, context)
```

#### Input
* input `object`
  * AccountAlias **required** `string`

#### Output
*Output schema unknown*

### CreateAccountAlias



```js
amazonaws_iam.CreateAccountAlias({
  "AccountAlias": null
}, context)
```

#### Input
* input `object`
  * AccountAlias **required**

#### Output
*Output schema unknown*

### CreateGroup



```js
amazonaws_iam.CreateGroup({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * Path `string`
  * GroupName **required** `string`

#### Output
* output [CreateGroupResponse](#creategroupresponse)

### CreateGroup



```js
amazonaws_iam.CreateGroup({
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * Path

#### Output
* output [CreateGroupResponse](#creategroupresponse)

### CreateInstanceProfile



```js
amazonaws_iam.CreateInstanceProfile({
  "InstanceProfileName": ""
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required** `string`
  * Path `string`

#### Output
* output [CreateInstanceProfileResponse](#createinstanceprofileresponse)

### CreateInstanceProfile



```js
amazonaws_iam.CreateInstanceProfile({
  "InstanceProfileName": null
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required**
  * Path

#### Output
* output [CreateInstanceProfileResponse](#createinstanceprofileresponse)

### CreateLoginProfile



```js
amazonaws_iam.CreateLoginProfile({
  "UserName": "",
  "Password": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * Password **required** `string`
  * PasswordResetRequired `boolean`

#### Output
* output [CreateLoginProfileResponse](#createloginprofileresponse)

### CreateLoginProfile



```js
amazonaws_iam.CreateLoginProfile({
  "UserName": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * Password **required**
  * PasswordResetRequired
  * UserName **required**

#### Output
* output [CreateLoginProfileResponse](#createloginprofileresponse)

### CreateOpenIDConnectProvider



```js
amazonaws_iam.CreateOpenIDConnectProvider({
  "Url": "",
  "ThumbprintList": []
}, context)
```

#### Input
* input `object`
  * Url **required** `string`
  * ClientIDList `array`
  * ThumbprintList **required** `array`

#### Output
* output [CreateOpenIDConnectProviderResponse](#createopenidconnectproviderresponse)

### CreateOpenIDConnectProvider



```js
amazonaws_iam.CreateOpenIDConnectProvider({
  "Url": null,
  "ThumbprintList": null
}, context)
```

#### Input
* input `object`
  * ClientIDList
    * items [clientIDType](#clientidtype)
  * ThumbprintList **required**
    * items [thumbprintType](#thumbprinttype)
  * Url **required**

#### Output
* output [CreateOpenIDConnectProviderResponse](#createopenidconnectproviderresponse)

### CreatePolicy



```js
amazonaws_iam.CreatePolicy({
  "PolicyName": "",
  "PolicyDocument": ""
}, context)
```

#### Input
* input `object`
  * PolicyName **required** `string`
  * Path `string`
  * PolicyDocument **required** `string`
  * Description `string`

#### Output
* output [CreatePolicyResponse](#createpolicyresponse)

### CreatePolicy



```js
amazonaws_iam.CreatePolicy({
  "PolicyName": null,
  "PolicyDocument": null
}, context)
```

#### Input
* input `object`
  * Description
  * Path
  * PolicyDocument **required**
  * PolicyName **required**

#### Output
* output [CreatePolicyResponse](#createpolicyresponse)

### CreatePolicyVersion



```js
amazonaws_iam.CreatePolicyVersion({
  "PolicyArn": "",
  "PolicyDocument": ""
}, context)
```

#### Input
* input `object`
  * PolicyArn **required** `string`
  * PolicyDocument **required** `string`
  * SetAsDefault `boolean`

#### Output
* output [CreatePolicyVersionResponse](#createpolicyversionresponse)

### CreatePolicyVersion



```js
amazonaws_iam.CreatePolicyVersion({
  "PolicyArn": null,
  "PolicyDocument": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**
  * PolicyDocument **required**
  * SetAsDefault

#### Output
* output [CreatePolicyVersionResponse](#createpolicyversionresponse)

### CreateRole



```js
amazonaws_iam.CreateRole({
  "RoleName": "",
  "AssumeRolePolicyDocument": ""
}, context)
```

#### Input
* input `object`
  * Path `string`
  * RoleName **required** `string`
  * AssumeRolePolicyDocument **required** `string`
  * Description `string`
  * MaxSessionDuration `integer`
  * PermissionsBoundary `string`
  * Tags `array`

#### Output
* output [CreateRoleResponse](#createroleresponse)

### CreateRole



```js
amazonaws_iam.CreateRole({
  "RoleName": null,
  "AssumeRolePolicyDocument": null
}, context)
```

#### Input
* input `object`
  * AssumeRolePolicyDocument **required**
  * Description
  * MaxSessionDuration
  * Path
  * PermissionsBoundary
  * RoleName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateRoleResponse](#createroleresponse)

### CreateSAMLProvider



```js
amazonaws_iam.CreateSAMLProvider({
  "SAMLMetadataDocument": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * SAMLMetadataDocument **required** `string`
  * Name **required** `string`

#### Output
* output [CreateSAMLProviderResponse](#createsamlproviderresponse)

### CreateSAMLProvider



```js
amazonaws_iam.CreateSAMLProvider({
  "SAMLMetadataDocument": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * SAMLMetadataDocument **required**

#### Output
* output [CreateSAMLProviderResponse](#createsamlproviderresponse)

### CreateServiceLinkedRole



```js
amazonaws_iam.CreateServiceLinkedRole({
  "AWSServiceName": ""
}, context)
```

#### Input
* input `object`
  * AWSServiceName **required** `string`
  * Description `string`
  * CustomSuffix `string`

#### Output
* output [CreateServiceLinkedRoleResponse](#createservicelinkedroleresponse)

### CreateServiceLinkedRole



```js
amazonaws_iam.CreateServiceLinkedRole({
  "AWSServiceName": null
}, context)
```

#### Input
* input `object`
  * AWSServiceName **required**
  * CustomSuffix
  * Description

#### Output
* output [CreateServiceLinkedRoleResponse](#createservicelinkedroleresponse)

### CreateServiceSpecificCredential



```js
amazonaws_iam.CreateServiceSpecificCredential({
  "UserName": "",
  "ServiceName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * ServiceName **required** `string`

#### Output
* output [CreateServiceSpecificCredentialResponse](#createservicespecificcredentialresponse)

### CreateServiceSpecificCredential



```js
amazonaws_iam.CreateServiceSpecificCredential({
  "UserName": null,
  "ServiceName": null
}, context)
```

#### Input
* input `object`
  * ServiceName **required**
  * UserName **required**

#### Output
* output [CreateServiceSpecificCredentialResponse](#createservicespecificcredentialresponse)

### CreateUser



```js
amazonaws_iam.CreateUser({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * Path `string`
  * UserName **required** `string`
  * PermissionsBoundary `string`
  * Tags `array`

#### Output
* output [CreateUserResponse](#createuserresponse)

### CreateUser



```js
amazonaws_iam.CreateUser({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * Path
  * PermissionsBoundary
  * Tags
    * items [Tag](#tag)
  * UserName **required**

#### Output
* output [CreateUserResponse](#createuserresponse)

### CreateVirtualMFADevice



```js
amazonaws_iam.CreateVirtualMFADevice({
  "VirtualMFADeviceName": ""
}, context)
```

#### Input
* input `object`
  * Path `string`
  * VirtualMFADeviceName **required** `string`

#### Output
* output [CreateVirtualMFADeviceResponse](#createvirtualmfadeviceresponse)

### CreateVirtualMFADevice



```js
amazonaws_iam.CreateVirtualMFADevice({
  "VirtualMFADeviceName": null
}, context)
```

#### Input
* input `object`
  * Path
  * VirtualMFADeviceName **required**

#### Output
* output [CreateVirtualMFADeviceResponse](#createvirtualmfadeviceresponse)

### DeactivateMFADevice



```js
amazonaws_iam.DeactivateMFADevice({
  "UserName": "",
  "SerialNumber": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * SerialNumber **required** `string`

#### Output
*Output schema unknown*

### DeactivateMFADevice



```js
amazonaws_iam.DeactivateMFADevice({
  "UserName": null,
  "SerialNumber": null
}, context)
```

#### Input
* input `object`
  * SerialNumber **required**
  * UserName **required**

#### Output
*Output schema unknown*

### DeleteAccessKey



```js
amazonaws_iam.DeleteAccessKey({
  "AccessKeyId": ""
}, context)
```

#### Input
* input `object`
  * UserName `string`
  * AccessKeyId **required** `string`

#### Output
*Output schema unknown*

### DeleteAccessKey



```js
amazonaws_iam.DeleteAccessKey({
  "AccessKeyId": null
}, context)
```

#### Input
* input `object`
  * AccessKeyId **required**
  * UserName

#### Output
*Output schema unknown*

### DeleteAccountAlias



```js
amazonaws_iam.DeleteAccountAlias({
  "AccountAlias": ""
}, context)
```

#### Input
* input `object`
  * AccountAlias **required** `string`

#### Output
*Output schema unknown*

### DeleteAccountAlias



```js
amazonaws_iam.DeleteAccountAlias({
  "AccountAlias": null
}, context)
```

#### Input
* input `object`
  * AccountAlias **required**

#### Output
*Output schema unknown*

### DeleteAccountPasswordPolicy



```js
amazonaws_iam.DeleteAccountPasswordPolicy({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### DeleteAccountPasswordPolicy



```js
amazonaws_iam.DeleteAccountPasswordPolicy({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### DeleteGroup



```js
amazonaws_iam.DeleteGroup({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteGroup



```js
amazonaws_iam.DeleteGroup({
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**

#### Output
*Output schema unknown*

### DeleteGroupPolicy



```js
amazonaws_iam.DeleteGroupPolicy({
  "GroupName": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * PolicyName **required** `string`

#### Output
*Output schema unknown*

### DeleteGroupPolicy



```js
amazonaws_iam.DeleteGroupPolicy({
  "GroupName": null,
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * PolicyName **required**

#### Output
*Output schema unknown*

### DeleteInstanceProfile



```js
amazonaws_iam.DeleteInstanceProfile({
  "InstanceProfileName": ""
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required** `string`

#### Output
*Output schema unknown*

### DeleteInstanceProfile



```js
amazonaws_iam.DeleteInstanceProfile({
  "InstanceProfileName": null
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required**

#### Output
*Output schema unknown*

### DeleteLoginProfile



```js
amazonaws_iam.DeleteLoginProfile({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`

#### Output
*Output schema unknown*

### DeleteLoginProfile



```js
amazonaws_iam.DeleteLoginProfile({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * UserName **required**

#### Output
*Output schema unknown*

### DeleteOpenIDConnectProvider



```js
amazonaws_iam.DeleteOpenIDConnectProvider({
  "OpenIDConnectProviderArn": ""
}, context)
```

#### Input
* input `object`
  * OpenIDConnectProviderArn **required** `string`

#### Output
*Output schema unknown*

### DeleteOpenIDConnectProvider



```js
amazonaws_iam.DeleteOpenIDConnectProvider({
  "OpenIDConnectProviderArn": null
}, context)
```

#### Input
* input `object`
  * OpenIDConnectProviderArn **required**

#### Output
*Output schema unknown*

### DeletePolicy



```js
amazonaws_iam.DeletePolicy({
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * PolicyArn **required** `string`

#### Output
*Output schema unknown*

### DeletePolicy



```js
amazonaws_iam.DeletePolicy({
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**

#### Output
*Output schema unknown*

### DeletePolicyVersion



```js
amazonaws_iam.DeletePolicyVersion({
  "PolicyArn": "",
  "VersionId": ""
}, context)
```

#### Input
* input `object`
  * PolicyArn **required** `string`
  * VersionId **required** `string`

#### Output
*Output schema unknown*

### DeletePolicyVersion



```js
amazonaws_iam.DeletePolicyVersion({
  "PolicyArn": null,
  "VersionId": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**
  * VersionId **required**

#### Output
*Output schema unknown*

### DeleteRole



```js
amazonaws_iam.DeleteRole({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`

#### Output
*Output schema unknown*

### DeleteRole



```js
amazonaws_iam.DeleteRole({
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * RoleName **required**

#### Output
*Output schema unknown*

### DeleteRolePermissionsBoundary



```js
amazonaws_iam.DeleteRolePermissionsBoundary({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`

#### Output
*Output schema unknown*

### DeleteRolePermissionsBoundary



```js
amazonaws_iam.DeleteRolePermissionsBoundary({
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * RoleName **required**

#### Output
*Output schema unknown*

### DeleteRolePolicy



```js
amazonaws_iam.DeleteRolePolicy({
  "RoleName": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * PolicyName **required** `string`

#### Output
*Output schema unknown*

### DeleteRolePolicy



```js
amazonaws_iam.DeleteRolePolicy({
  "RoleName": null,
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * PolicyName **required**
  * RoleName **required**

#### Output
*Output schema unknown*

### DeleteSAMLProvider



```js
amazonaws_iam.DeleteSAMLProvider({
  "SAMLProviderArn": ""
}, context)
```

#### Input
* input `object`
  * SAMLProviderArn **required** `string`

#### Output
*Output schema unknown*

### DeleteSAMLProvider



```js
amazonaws_iam.DeleteSAMLProvider({
  "SAMLProviderArn": null
}, context)
```

#### Input
* input `object`
  * SAMLProviderArn **required**

#### Output
*Output schema unknown*

### DeleteSSHPublicKey



```js
amazonaws_iam.DeleteSSHPublicKey({
  "UserName": "",
  "SSHPublicKeyId": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * SSHPublicKeyId **required** `string`

#### Output
*Output schema unknown*

### DeleteSSHPublicKey



```js
amazonaws_iam.DeleteSSHPublicKey({
  "UserName": null,
  "SSHPublicKeyId": null
}, context)
```

#### Input
* input `object`
  * SSHPublicKeyId **required**
  * UserName **required**

#### Output
*Output schema unknown*

### DeleteServerCertificate



```js
amazonaws_iam.DeleteServerCertificate({
  "ServerCertificateName": ""
}, context)
```

#### Input
* input `object`
  * ServerCertificateName **required** `string`

#### Output
*Output schema unknown*

### DeleteServerCertificate



```js
amazonaws_iam.DeleteServerCertificate({
  "ServerCertificateName": null
}, context)
```

#### Input
* input `object`
  * ServerCertificateName **required**

#### Output
*Output schema unknown*

### DeleteServiceLinkedRole



```js
amazonaws_iam.DeleteServiceLinkedRole({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`

#### Output
* output [DeleteServiceLinkedRoleResponse](#deleteservicelinkedroleresponse)

### DeleteServiceLinkedRole



```js
amazonaws_iam.DeleteServiceLinkedRole({
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * RoleName **required**

#### Output
* output [DeleteServiceLinkedRoleResponse](#deleteservicelinkedroleresponse)

### DeleteServiceSpecificCredential



```js
amazonaws_iam.DeleteServiceSpecificCredential({
  "ServiceSpecificCredentialId": ""
}, context)
```

#### Input
* input `object`
  * UserName `string`
  * ServiceSpecificCredentialId **required** `string`

#### Output
*Output schema unknown*

### DeleteServiceSpecificCredential



```js
amazonaws_iam.DeleteServiceSpecificCredential({
  "ServiceSpecificCredentialId": null
}, context)
```

#### Input
* input `object`
  * ServiceSpecificCredentialId **required**
  * UserName

#### Output
*Output schema unknown*

### DeleteSigningCertificate



```js
amazonaws_iam.DeleteSigningCertificate({
  "CertificateId": ""
}, context)
```

#### Input
* input `object`
  * UserName `string`
  * CertificateId **required** `string`

#### Output
*Output schema unknown*

### DeleteSigningCertificate



```js
amazonaws_iam.DeleteSigningCertificate({
  "CertificateId": null
}, context)
```

#### Input
* input `object`
  * CertificateId **required**
  * UserName

#### Output
*Output schema unknown*

### DeleteUser



```js
amazonaws_iam.DeleteUser({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`

#### Output
*Output schema unknown*

### DeleteUser



```js
amazonaws_iam.DeleteUser({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * UserName **required**

#### Output
*Output schema unknown*

### DeleteUserPermissionsBoundary



```js
amazonaws_iam.DeleteUserPermissionsBoundary({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`

#### Output
*Output schema unknown*

### DeleteUserPermissionsBoundary



```js
amazonaws_iam.DeleteUserPermissionsBoundary({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * UserName **required**

#### Output
*Output schema unknown*

### DeleteUserPolicy



```js
amazonaws_iam.DeleteUserPolicy({
  "UserName": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * PolicyName **required** `string`

#### Output
*Output schema unknown*

### DeleteUserPolicy



```js
amazonaws_iam.DeleteUserPolicy({
  "UserName": null,
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * PolicyName **required**
  * UserName **required**

#### Output
*Output schema unknown*

### DeleteVirtualMFADevice



```js
amazonaws_iam.DeleteVirtualMFADevice({
  "SerialNumber": ""
}, context)
```

#### Input
* input `object`
  * SerialNumber **required** `string`

#### Output
*Output schema unknown*

### DeleteVirtualMFADevice



```js
amazonaws_iam.DeleteVirtualMFADevice({
  "SerialNumber": null
}, context)
```

#### Input
* input `object`
  * SerialNumber **required**

#### Output
*Output schema unknown*

### DetachGroupPolicy



```js
amazonaws_iam.DetachGroupPolicy({
  "GroupName": "",
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * PolicyArn **required** `string`

#### Output
*Output schema unknown*

### DetachGroupPolicy



```js
amazonaws_iam.DetachGroupPolicy({
  "GroupName": null,
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * PolicyArn **required**

#### Output
*Output schema unknown*

### DetachRolePolicy



```js
amazonaws_iam.DetachRolePolicy({
  "RoleName": "",
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * PolicyArn **required** `string`

#### Output
*Output schema unknown*

### DetachRolePolicy



```js
amazonaws_iam.DetachRolePolicy({
  "RoleName": null,
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**
  * RoleName **required**

#### Output
*Output schema unknown*

### DetachUserPolicy



```js
amazonaws_iam.DetachUserPolicy({
  "UserName": "",
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * PolicyArn **required** `string`

#### Output
*Output schema unknown*

### DetachUserPolicy



```js
amazonaws_iam.DetachUserPolicy({
  "UserName": null,
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**
  * UserName **required**

#### Output
*Output schema unknown*

### EnableMFADevice



```js
amazonaws_iam.EnableMFADevice({
  "UserName": "",
  "SerialNumber": "",
  "AuthenticationCode1": "",
  "AuthenticationCode2": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * SerialNumber **required** `string`
  * AuthenticationCode1 **required** `string`
  * AuthenticationCode2 **required** `string`

#### Output
*Output schema unknown*

### EnableMFADevice



```js
amazonaws_iam.EnableMFADevice({
  "UserName": null,
  "SerialNumber": null,
  "AuthenticationCode1": null,
  "AuthenticationCode2": null
}, context)
```

#### Input
* input `object`
  * AuthenticationCode1 **required**
  * AuthenticationCode2 **required**
  * SerialNumber **required**
  * UserName **required**

#### Output
*Output schema unknown*

### GenerateCredentialReport



```js
amazonaws_iam.GenerateCredentialReport({}, context)
```

#### Input
* input `object`

#### Output
* output [GenerateCredentialReportResponse](#generatecredentialreportresponse)

### GenerateCredentialReport



```js
amazonaws_iam.GenerateCredentialReport({}, context)
```

#### Input
* input `object`

#### Output
* output [GenerateCredentialReportResponse](#generatecredentialreportresponse)

### GenerateOrganizationsAccessReport



```js
amazonaws_iam.GenerateOrganizationsAccessReport({
  "EntityPath": ""
}, context)
```

#### Input
* input `object`
  * EntityPath **required** `string`
  * OrganizationsPolicyId `string`

#### Output
* output [GenerateOrganizationsAccessReportResponse](#generateorganizationsaccessreportresponse)

### GenerateOrganizationsAccessReport



```js
amazonaws_iam.GenerateOrganizationsAccessReport({
  "EntityPath": null
}, context)
```

#### Input
* input `object`
  * EntityPath **required**
  * OrganizationsPolicyId

#### Output
* output [GenerateOrganizationsAccessReportResponse](#generateorganizationsaccessreportresponse)

### GenerateServiceLastAccessedDetails



```js
amazonaws_iam.GenerateServiceLastAccessedDetails({
  "Arn": ""
}, context)
```

#### Input
* input `object`
  * Arn **required** `string`
  * Granularity `string`

#### Output
* output [GenerateServiceLastAccessedDetailsResponse](#generateservicelastaccesseddetailsresponse)

### GenerateServiceLastAccessedDetails



```js
amazonaws_iam.GenerateServiceLastAccessedDetails({
  "Arn": null
}, context)
```

#### Input
* input `object`
  * Arn **required**
  * Granularity

#### Output
* output [GenerateServiceLastAccessedDetailsResponse](#generateservicelastaccesseddetailsresponse)

### GetAccessKeyLastUsed



```js
amazonaws_iam.GetAccessKeyLastUsed({
  "AccessKeyId": ""
}, context)
```

#### Input
* input `object`
  * AccessKeyId **required** `string`

#### Output
* output [GetAccessKeyLastUsedResponse](#getaccesskeylastusedresponse)

### GetAccessKeyLastUsed



```js
amazonaws_iam.GetAccessKeyLastUsed({
  "AccessKeyId": null
}, context)
```

#### Input
* input `object`
  * AccessKeyId **required**

#### Output
* output [GetAccessKeyLastUsedResponse](#getaccesskeylastusedresponse)

### GetAccountAuthorizationDetails



```js
amazonaws_iam.GetAccountAuthorizationDetails({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * MaxItems `integer`
  * Marker `string`

#### Output
* output [GetAccountAuthorizationDetailsResponse](#getaccountauthorizationdetailsresponse)

### GetAccountAuthorizationDetails



```js
amazonaws_iam.GetAccountAuthorizationDetails({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Filter
    * items [EntityType](#entitytype)
  * Marker
  * MaxItems

#### Output
* output [GetAccountAuthorizationDetailsResponse](#getaccountauthorizationdetailsresponse)

### GetAccountPasswordPolicy



```js
amazonaws_iam.GetAccountPasswordPolicy({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountPasswordPolicyResponse](#getaccountpasswordpolicyresponse)

### GetAccountPasswordPolicy



```js
amazonaws_iam.GetAccountPasswordPolicy({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountPasswordPolicyResponse](#getaccountpasswordpolicyresponse)

### GetAccountSummary



```js
amazonaws_iam.GetAccountSummary({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountSummaryResponse](#getaccountsummaryresponse)

### GetAccountSummary



```js
amazonaws_iam.GetAccountSummary({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAccountSummaryResponse](#getaccountsummaryresponse)

### GetContextKeysForCustomPolicy



```js
amazonaws_iam.GetContextKeysForCustomPolicy({
  "PolicyInputList": []
}, context)
```

#### Input
* input `object`
  * PolicyInputList **required** `array`

#### Output
* output [GetContextKeysForPolicyResponse](#getcontextkeysforpolicyresponse)

### GetContextKeysForCustomPolicy



```js
amazonaws_iam.GetContextKeysForCustomPolicy({
  "PolicyInputList": null
}, context)
```

#### Input
* input `object`
  * PolicyInputList **required**
    * items [policyDocumentType](#policydocumenttype)

#### Output
* output [GetContextKeysForPolicyResponse](#getcontextkeysforpolicyresponse)

### GetContextKeysForPrincipalPolicy



```js
amazonaws_iam.GetContextKeysForPrincipalPolicy({
  "PolicySourceArn": ""
}, context)
```

#### Input
* input `object`
  * PolicySourceArn **required** `string`
  * PolicyInputList `array`

#### Output
* output [GetContextKeysForPolicyResponse](#getcontextkeysforpolicyresponse)

### GetContextKeysForPrincipalPolicy



```js
amazonaws_iam.GetContextKeysForPrincipalPolicy({
  "PolicySourceArn": null
}, context)
```

#### Input
* input `object`
  * PolicyInputList
    * items [policyDocumentType](#policydocumenttype)
  * PolicySourceArn **required**

#### Output
* output [GetContextKeysForPolicyResponse](#getcontextkeysforpolicyresponse)

### GetCredentialReport



```js
amazonaws_iam.GetCredentialReport({}, context)
```

#### Input
* input `object`

#### Output
* output [GetCredentialReportResponse](#getcredentialreportresponse)

### GetCredentialReport



```js
amazonaws_iam.GetCredentialReport({}, context)
```

#### Input
* input `object`

#### Output
* output [GetCredentialReportResponse](#getcredentialreportresponse)

### GetGroup



```js
amazonaws_iam.GetGroup({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [GetGroupResponse](#getgroupresponse)

### GetGroup



```js
amazonaws_iam.GetGroup({
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * GroupName **required**
  * Marker
  * MaxItems

#### Output
* output [GetGroupResponse](#getgroupresponse)

### GetGroupPolicy



```js
amazonaws_iam.GetGroupPolicy({
  "GroupName": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * PolicyName **required** `string`

#### Output
* output [GetGroupPolicyResponse](#getgrouppolicyresponse)

### GetGroupPolicy



```js
amazonaws_iam.GetGroupPolicy({
  "GroupName": null,
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * PolicyName **required**

#### Output
* output [GetGroupPolicyResponse](#getgrouppolicyresponse)

### GetInstanceProfile



```js
amazonaws_iam.GetInstanceProfile({
  "InstanceProfileName": ""
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required** `string`

#### Output
* output [GetInstanceProfileResponse](#getinstanceprofileresponse)

### GetInstanceProfile



```js
amazonaws_iam.GetInstanceProfile({
  "InstanceProfileName": null
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required**

#### Output
* output [GetInstanceProfileResponse](#getinstanceprofileresponse)

### GetLoginProfile



```js
amazonaws_iam.GetLoginProfile({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`

#### Output
* output [GetLoginProfileResponse](#getloginprofileresponse)

### GetLoginProfile



```js
amazonaws_iam.GetLoginProfile({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * UserName **required**

#### Output
* output [GetLoginProfileResponse](#getloginprofileresponse)

### GetOpenIDConnectProvider



```js
amazonaws_iam.GetOpenIDConnectProvider({
  "OpenIDConnectProviderArn": ""
}, context)
```

#### Input
* input `object`
  * OpenIDConnectProviderArn **required** `string`

#### Output
* output [GetOpenIDConnectProviderResponse](#getopenidconnectproviderresponse)

### GetOpenIDConnectProvider



```js
amazonaws_iam.GetOpenIDConnectProvider({
  "OpenIDConnectProviderArn": null
}, context)
```

#### Input
* input `object`
  * OpenIDConnectProviderArn **required**

#### Output
* output [GetOpenIDConnectProviderResponse](#getopenidconnectproviderresponse)

### GetOrganizationsAccessReport



```js
amazonaws_iam.GetOrganizationsAccessReport({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`
  * MaxItems `integer`
  * Marker `string`
  * SortKey `string`

#### Output
* output [GetOrganizationsAccessReportResponse](#getorganizationsaccessreportresponse)

### GetOrganizationsAccessReport



```js
amazonaws_iam.GetOrganizationsAccessReport({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * Marker
  * MaxItems
  * SortKey

#### Output
* output [GetOrganizationsAccessReportResponse](#getorganizationsaccessreportresponse)

### GetPolicy



```js
amazonaws_iam.GetPolicy({
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * PolicyArn **required** `string`

#### Output
* output [GetPolicyResponse](#getpolicyresponse)

### GetPolicy



```js
amazonaws_iam.GetPolicy({
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**

#### Output
* output [GetPolicyResponse](#getpolicyresponse)

### GetPolicyVersion



```js
amazonaws_iam.GetPolicyVersion({
  "PolicyArn": "",
  "VersionId": ""
}, context)
```

#### Input
* input `object`
  * PolicyArn **required** `string`
  * VersionId **required** `string`

#### Output
* output [GetPolicyVersionResponse](#getpolicyversionresponse)

### GetPolicyVersion



```js
amazonaws_iam.GetPolicyVersion({
  "PolicyArn": null,
  "VersionId": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**
  * VersionId **required**

#### Output
* output [GetPolicyVersionResponse](#getpolicyversionresponse)

### GetRole



```js
amazonaws_iam.GetRole({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`

#### Output
* output [GetRoleResponse](#getroleresponse)

### GetRole



```js
amazonaws_iam.GetRole({
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * RoleName **required**

#### Output
* output [GetRoleResponse](#getroleresponse)

### GetRolePolicy



```js
amazonaws_iam.GetRolePolicy({
  "RoleName": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * PolicyName **required** `string`

#### Output
* output [GetRolePolicyResponse](#getrolepolicyresponse)

### GetRolePolicy



```js
amazonaws_iam.GetRolePolicy({
  "RoleName": null,
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * PolicyName **required**
  * RoleName **required**

#### Output
* output [GetRolePolicyResponse](#getrolepolicyresponse)

### GetSAMLProvider



```js
amazonaws_iam.GetSAMLProvider({
  "SAMLProviderArn": ""
}, context)
```

#### Input
* input `object`
  * SAMLProviderArn **required** `string`

#### Output
* output [GetSAMLProviderResponse](#getsamlproviderresponse)

### GetSAMLProvider



```js
amazonaws_iam.GetSAMLProvider({
  "SAMLProviderArn": null
}, context)
```

#### Input
* input `object`
  * SAMLProviderArn **required**

#### Output
* output [GetSAMLProviderResponse](#getsamlproviderresponse)

### GetSSHPublicKey



```js
amazonaws_iam.GetSSHPublicKey({
  "UserName": "",
  "SSHPublicKeyId": "",
  "Encoding": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * SSHPublicKeyId **required** `string`
  * Encoding **required** `string`

#### Output
* output [GetSSHPublicKeyResponse](#getsshpublickeyresponse)

### GetSSHPublicKey



```js
amazonaws_iam.GetSSHPublicKey({
  "UserName": null,
  "SSHPublicKeyId": null,
  "Encoding": null
}, context)
```

#### Input
* input `object`
  * Encoding **required**
  * SSHPublicKeyId **required**
  * UserName **required**

#### Output
* output [GetSSHPublicKeyResponse](#getsshpublickeyresponse)

### GetServerCertificate



```js
amazonaws_iam.GetServerCertificate({
  "ServerCertificateName": ""
}, context)
```

#### Input
* input `object`
  * ServerCertificateName **required** `string`

#### Output
* output [GetServerCertificateResponse](#getservercertificateresponse)

### GetServerCertificate



```js
amazonaws_iam.GetServerCertificate({
  "ServerCertificateName": null
}, context)
```

#### Input
* input `object`
  * ServerCertificateName **required**

#### Output
* output [GetServerCertificateResponse](#getservercertificateresponse)

### GetServiceLastAccessedDetails



```js
amazonaws_iam.GetServiceLastAccessedDetails({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`
  * MaxItems `integer`
  * Marker `string`

#### Output
* output [GetServiceLastAccessedDetailsResponse](#getservicelastaccesseddetailsresponse)

### GetServiceLastAccessedDetails



```js
amazonaws_iam.GetServiceLastAccessedDetails({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * Marker
  * MaxItems

#### Output
* output [GetServiceLastAccessedDetailsResponse](#getservicelastaccesseddetailsresponse)

### GetServiceLastAccessedDetailsWithEntities



```js
amazonaws_iam.GetServiceLastAccessedDetailsWithEntities({
  "JobId": "",
  "ServiceNamespace": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** `string`
  * ServiceNamespace **required** `string`
  * MaxItems `integer`
  * Marker `string`

#### Output
* output [GetServiceLastAccessedDetailsWithEntitiesResponse](#getservicelastaccesseddetailswithentitiesresponse)

### GetServiceLastAccessedDetailsWithEntities



```js
amazonaws_iam.GetServiceLastAccessedDetailsWithEntities({
  "JobId": null,
  "ServiceNamespace": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * Marker
  * MaxItems
  * ServiceNamespace **required**

#### Output
* output [GetServiceLastAccessedDetailsWithEntitiesResponse](#getservicelastaccesseddetailswithentitiesresponse)

### GetServiceLinkedRoleDeletionStatus



```js
amazonaws_iam.GetServiceLinkedRoleDeletionStatus({
  "DeletionTaskId": ""
}, context)
```

#### Input
* input `object`
  * DeletionTaskId **required** `string`

#### Output
* output [GetServiceLinkedRoleDeletionStatusResponse](#getservicelinkedroledeletionstatusresponse)

### GetServiceLinkedRoleDeletionStatus



```js
amazonaws_iam.GetServiceLinkedRoleDeletionStatus({
  "DeletionTaskId": null
}, context)
```

#### Input
* input `object`
  * DeletionTaskId **required**

#### Output
* output [GetServiceLinkedRoleDeletionStatusResponse](#getservicelinkedroledeletionstatusresponse)

### GetUser



```js
amazonaws_iam.GetUser({}, context)
```

#### Input
* input `object`
  * UserName `string`

#### Output
* output [GetUserResponse](#getuserresponse)

### GetUser



```js
amazonaws_iam.GetUser({}, context)
```

#### Input
* input `object`
  * UserName

#### Output
* output [GetUserResponse](#getuserresponse)

### GetUserPolicy



```js
amazonaws_iam.GetUserPolicy({
  "UserName": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * PolicyName **required** `string`

#### Output
* output [GetUserPolicyResponse](#getuserpolicyresponse)

### GetUserPolicy



```js
amazonaws_iam.GetUserPolicy({
  "UserName": null,
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * PolicyName **required**
  * UserName **required**

#### Output
* output [GetUserPolicyResponse](#getuserpolicyresponse)

### ListAccessKeys



```js
amazonaws_iam.ListAccessKeys({}, context)
```

#### Input
* input `object`
  * UserName `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListAccessKeysResponse](#listaccesskeysresponse)

### ListAccessKeys



```js
amazonaws_iam.ListAccessKeys({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * UserName

#### Output
* output [ListAccessKeysResponse](#listaccesskeysresponse)

### ListAccountAliases



```js
amazonaws_iam.ListAccountAliases({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListAccountAliasesResponse](#listaccountaliasesresponse)

### ListAccountAliases



```js
amazonaws_iam.ListAccountAliases({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems

#### Output
* output [ListAccountAliasesResponse](#listaccountaliasesresponse)

### ListAttachedGroupPolicies



```js
amazonaws_iam.ListAttachedGroupPolicies({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * PathPrefix `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListAttachedGroupPoliciesResponse](#listattachedgrouppoliciesresponse)

### ListAttachedGroupPolicies



```js
amazonaws_iam.ListAttachedGroupPolicies({
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * GroupName **required**
  * Marker
  * MaxItems
  * PathPrefix

#### Output
* output [ListAttachedGroupPoliciesResponse](#listattachedgrouppoliciesresponse)

### ListAttachedRolePolicies



```js
amazonaws_iam.ListAttachedRolePolicies({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * PathPrefix `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListAttachedRolePoliciesResponse](#listattachedrolepoliciesresponse)

### ListAttachedRolePolicies



```js
amazonaws_iam.ListAttachedRolePolicies({
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * PathPrefix
  * RoleName **required**

#### Output
* output [ListAttachedRolePoliciesResponse](#listattachedrolepoliciesresponse)

### ListAttachedUserPolicies



```js
amazonaws_iam.ListAttachedUserPolicies({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * PathPrefix `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListAttachedUserPoliciesResponse](#listattacheduserpoliciesresponse)

### ListAttachedUserPolicies



```js
amazonaws_iam.ListAttachedUserPolicies({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * PathPrefix
  * UserName **required**

#### Output
* output [ListAttachedUserPoliciesResponse](#listattacheduserpoliciesresponse)

### ListEntitiesForPolicy



```js
amazonaws_iam.ListEntitiesForPolicy({
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * PolicyArn **required** `string`
  * EntityFilter `string`
  * PathPrefix `string`
  * PolicyUsageFilter `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListEntitiesForPolicyResponse](#listentitiesforpolicyresponse)

### ListEntitiesForPolicy



```js
amazonaws_iam.ListEntitiesForPolicy({
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * EntityFilter
  * Marker
  * MaxItems
  * PathPrefix
  * PolicyArn **required**
  * PolicyUsageFilter

#### Output
* output [ListEntitiesForPolicyResponse](#listentitiesforpolicyresponse)

### ListGroupPolicies



```js
amazonaws_iam.ListGroupPolicies({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListGroupPoliciesResponse](#listgrouppoliciesresponse)

### ListGroupPolicies



```js
amazonaws_iam.ListGroupPolicies({
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * GroupName **required**
  * Marker
  * MaxItems

#### Output
* output [ListGroupPoliciesResponse](#listgrouppoliciesresponse)

### ListGroups



```js
amazonaws_iam.ListGroups({}, context)
```

#### Input
* input `object`
  * PathPrefix `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### ListGroups



```js
amazonaws_iam.ListGroups({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * PathPrefix

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### ListGroupsForUser



```js
amazonaws_iam.ListGroupsForUser({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListGroupsForUserResponse](#listgroupsforuserresponse)

### ListGroupsForUser



```js
amazonaws_iam.ListGroupsForUser({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * UserName **required**

#### Output
* output [ListGroupsForUserResponse](#listgroupsforuserresponse)

### ListInstanceProfiles



```js
amazonaws_iam.ListInstanceProfiles({}, context)
```

#### Input
* input `object`
  * PathPrefix `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListInstanceProfilesResponse](#listinstanceprofilesresponse)

### ListInstanceProfiles



```js
amazonaws_iam.ListInstanceProfiles({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * PathPrefix

#### Output
* output [ListInstanceProfilesResponse](#listinstanceprofilesresponse)

### ListInstanceProfilesForRole



```js
amazonaws_iam.ListInstanceProfilesForRole({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListInstanceProfilesForRoleResponse](#listinstanceprofilesforroleresponse)

### ListInstanceProfilesForRole



```js
amazonaws_iam.ListInstanceProfilesForRole({
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * RoleName **required**

#### Output
* output [ListInstanceProfilesForRoleResponse](#listinstanceprofilesforroleresponse)

### ListMFADevices



```js
amazonaws_iam.ListMFADevices({}, context)
```

#### Input
* input `object`
  * UserName `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListMFADevicesResponse](#listmfadevicesresponse)

### ListMFADevices



```js
amazonaws_iam.ListMFADevices({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * UserName

#### Output
* output [ListMFADevicesResponse](#listmfadevicesresponse)

### ListOpenIDConnectProviders



```js
amazonaws_iam.ListOpenIDConnectProviders({}, context)
```

#### Input
* input `object`

#### Output
* output [ListOpenIDConnectProvidersResponse](#listopenidconnectprovidersresponse)

### ListOpenIDConnectProviders



```js
amazonaws_iam.ListOpenIDConnectProviders({}, context)
```

#### Input
* input `object`

#### Output
* output [ListOpenIDConnectProvidersResponse](#listopenidconnectprovidersresponse)

### ListPolicies



```js
amazonaws_iam.ListPolicies({}, context)
```

#### Input
* input `object`
  * Scope `string`
  * OnlyAttached `boolean`
  * PathPrefix `string`
  * PolicyUsageFilter `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

### ListPolicies



```js
amazonaws_iam.ListPolicies({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * OnlyAttached
  * PathPrefix
  * PolicyUsageFilter
  * Scope

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

### ListPoliciesGrantingServiceAccess



```js
amazonaws_iam.ListPoliciesGrantingServiceAccess({
  "Arn": "",
  "ServiceNamespaces": []
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * Arn **required** `string`
  * ServiceNamespaces **required** `array`

#### Output
* output [ListPoliciesGrantingServiceAccessResponse](#listpoliciesgrantingserviceaccessresponse)

### ListPoliciesGrantingServiceAccess



```js
amazonaws_iam.ListPoliciesGrantingServiceAccess({
  "Arn": null,
  "ServiceNamespaces": null
}, context)
```

#### Input
* input `object`
  * Arn **required**
  * Marker
  * ServiceNamespaces **required**
    * items [serviceNamespaceType](#servicenamespacetype)

#### Output
* output [ListPoliciesGrantingServiceAccessResponse](#listpoliciesgrantingserviceaccessresponse)

### ListPolicyVersions



```js
amazonaws_iam.ListPolicyVersions({
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * PolicyArn **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListPolicyVersionsResponse](#listpolicyversionsresponse)

### ListPolicyVersions



```js
amazonaws_iam.ListPolicyVersions({
  "PolicyArn": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * PolicyArn **required**

#### Output
* output [ListPolicyVersionsResponse](#listpolicyversionsresponse)

### ListRolePolicies



```js
amazonaws_iam.ListRolePolicies({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListRolePoliciesResponse](#listrolepoliciesresponse)

### ListRolePolicies



```js
amazonaws_iam.ListRolePolicies({
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * RoleName **required**

#### Output
* output [ListRolePoliciesResponse](#listrolepoliciesresponse)

### ListRoleTags



```js
amazonaws_iam.ListRoleTags({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListRoleTagsResponse](#listroletagsresponse)

### ListRoleTags



```js
amazonaws_iam.ListRoleTags({
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * Marker
  * MaxItems
  * RoleName **required**

#### Output
* output [ListRoleTagsResponse](#listroletagsresponse)

### ListRoles



```js
amazonaws_iam.ListRoles({}, context)
```

#### Input
* input `object`
  * PathPrefix `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListRolesResponse](#listrolesresponse)

### ListRoles



```js
amazonaws_iam.ListRoles({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * PathPrefix

#### Output
* output [ListRolesResponse](#listrolesresponse)

### ListSAMLProviders



```js
amazonaws_iam.ListSAMLProviders({}, context)
```

#### Input
* input `object`

#### Output
* output [ListSAMLProvidersResponse](#listsamlprovidersresponse)

### ListSAMLProviders



```js
amazonaws_iam.ListSAMLProviders({}, context)
```

#### Input
* input `object`

#### Output
* output [ListSAMLProvidersResponse](#listsamlprovidersresponse)

### ListSSHPublicKeys



```js
amazonaws_iam.ListSSHPublicKeys({}, context)
```

#### Input
* input `object`
  * UserName `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListSSHPublicKeysResponse](#listsshpublickeysresponse)

### ListSSHPublicKeys



```js
amazonaws_iam.ListSSHPublicKeys({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * UserName

#### Output
* output [ListSSHPublicKeysResponse](#listsshpublickeysresponse)

### ListServerCertificates



```js
amazonaws_iam.ListServerCertificates({}, context)
```

#### Input
* input `object`
  * PathPrefix `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListServerCertificatesResponse](#listservercertificatesresponse)

### ListServerCertificates



```js
amazonaws_iam.ListServerCertificates({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * PathPrefix

#### Output
* output [ListServerCertificatesResponse](#listservercertificatesresponse)

### ListServiceSpecificCredentials



```js
amazonaws_iam.ListServiceSpecificCredentials({}, context)
```

#### Input
* input `object`
  * UserName `string`
  * ServiceName `string`

#### Output
* output [ListServiceSpecificCredentialsResponse](#listservicespecificcredentialsresponse)

### ListServiceSpecificCredentials



```js
amazonaws_iam.ListServiceSpecificCredentials({}, context)
```

#### Input
* input `object`
  * ServiceName
  * UserName

#### Output
* output [ListServiceSpecificCredentialsResponse](#listservicespecificcredentialsresponse)

### ListSigningCertificates



```js
amazonaws_iam.ListSigningCertificates({}, context)
```

#### Input
* input `object`
  * UserName `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListSigningCertificatesResponse](#listsigningcertificatesresponse)

### ListSigningCertificates



```js
amazonaws_iam.ListSigningCertificates({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * UserName

#### Output
* output [ListSigningCertificatesResponse](#listsigningcertificatesresponse)

### ListUserPolicies



```js
amazonaws_iam.ListUserPolicies({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListUserPoliciesResponse](#listuserpoliciesresponse)

### ListUserPolicies



```js
amazonaws_iam.ListUserPolicies({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * UserName **required**

#### Output
* output [ListUserPoliciesResponse](#listuserpoliciesresponse)

### ListUserTags



```js
amazonaws_iam.ListUserTags({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListUserTagsResponse](#listusertagsresponse)

### ListUserTags



```js
amazonaws_iam.ListUserTags({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * Marker
  * MaxItems
  * UserName **required**

#### Output
* output [ListUserTagsResponse](#listusertagsresponse)

### ListUsers



```js
amazonaws_iam.ListUsers({}, context)
```

#### Input
* input `object`
  * PathPrefix `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListUsersResponse](#listusersresponse)

### ListUsers



```js
amazonaws_iam.ListUsers({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker
  * MaxItems
  * PathPrefix

#### Output
* output [ListUsersResponse](#listusersresponse)

### ListVirtualMFADevices



```js
amazonaws_iam.ListVirtualMFADevices({}, context)
```

#### Input
* input `object`
  * AssignmentStatus `string`
  * Marker `string`
  * MaxItems `integer`

#### Output
* output [ListVirtualMFADevicesResponse](#listvirtualmfadevicesresponse)

### ListVirtualMFADevices



```js
amazonaws_iam.ListVirtualMFADevices({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * AssignmentStatus
  * Marker
  * MaxItems

#### Output
* output [ListVirtualMFADevicesResponse](#listvirtualmfadevicesresponse)

### PutGroupPolicy



```js
amazonaws_iam.PutGroupPolicy({
  "GroupName": "",
  "PolicyName": "",
  "PolicyDocument": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * PolicyName **required** `string`
  * PolicyDocument **required** `string`

#### Output
*Output schema unknown*

### PutGroupPolicy



```js
amazonaws_iam.PutGroupPolicy({
  "GroupName": null,
  "PolicyName": null,
  "PolicyDocument": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * PolicyDocument **required**
  * PolicyName **required**

#### Output
*Output schema unknown*

### PutRolePermissionsBoundary



```js
amazonaws_iam.PutRolePermissionsBoundary({
  "RoleName": "",
  "PermissionsBoundary": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * PermissionsBoundary **required** `string`

#### Output
*Output schema unknown*

### PutRolePermissionsBoundary



```js
amazonaws_iam.PutRolePermissionsBoundary({
  "RoleName": null,
  "PermissionsBoundary": null
}, context)
```

#### Input
* input `object`
  * PermissionsBoundary **required**
  * RoleName **required**

#### Output
*Output schema unknown*

### PutRolePolicy



```js
amazonaws_iam.PutRolePolicy({
  "RoleName": "",
  "PolicyName": "",
  "PolicyDocument": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * PolicyName **required** `string`
  * PolicyDocument **required** `string`

#### Output
*Output schema unknown*

### PutRolePolicy



```js
amazonaws_iam.PutRolePolicy({
  "RoleName": null,
  "PolicyName": null,
  "PolicyDocument": null
}, context)
```

#### Input
* input `object`
  * PolicyDocument **required**
  * PolicyName **required**
  * RoleName **required**

#### Output
*Output schema unknown*

### PutUserPermissionsBoundary



```js
amazonaws_iam.PutUserPermissionsBoundary({
  "UserName": "",
  "PermissionsBoundary": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * PermissionsBoundary **required** `string`

#### Output
*Output schema unknown*

### PutUserPermissionsBoundary



```js
amazonaws_iam.PutUserPermissionsBoundary({
  "UserName": null,
  "PermissionsBoundary": null
}, context)
```

#### Input
* input `object`
  * PermissionsBoundary **required**
  * UserName **required**

#### Output
*Output schema unknown*

### PutUserPolicy



```js
amazonaws_iam.PutUserPolicy({
  "UserName": "",
  "PolicyName": "",
  "PolicyDocument": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * PolicyName **required** `string`
  * PolicyDocument **required** `string`

#### Output
*Output schema unknown*

### PutUserPolicy



```js
amazonaws_iam.PutUserPolicy({
  "UserName": null,
  "PolicyName": null,
  "PolicyDocument": null
}, context)
```

#### Input
* input `object`
  * PolicyDocument **required**
  * PolicyName **required**
  * UserName **required**

#### Output
*Output schema unknown*

### RemoveClientIDFromOpenIDConnectProvider



```js
amazonaws_iam.RemoveClientIDFromOpenIDConnectProvider({
  "OpenIDConnectProviderArn": "",
  "ClientID": ""
}, context)
```

#### Input
* input `object`
  * OpenIDConnectProviderArn **required** `string`
  * ClientID **required** `string`

#### Output
*Output schema unknown*

### RemoveClientIDFromOpenIDConnectProvider



```js
amazonaws_iam.RemoveClientIDFromOpenIDConnectProvider({
  "OpenIDConnectProviderArn": null,
  "ClientID": null
}, context)
```

#### Input
* input `object`
  * ClientID **required**
  * OpenIDConnectProviderArn **required**

#### Output
*Output schema unknown*

### RemoveRoleFromInstanceProfile



```js
amazonaws_iam.RemoveRoleFromInstanceProfile({
  "InstanceProfileName": "",
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required** `string`
  * RoleName **required** `string`

#### Output
*Output schema unknown*

### RemoveRoleFromInstanceProfile



```js
amazonaws_iam.RemoveRoleFromInstanceProfile({
  "InstanceProfileName": null,
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * InstanceProfileName **required**
  * RoleName **required**

#### Output
*Output schema unknown*

### RemoveUserFromGroup



```js
amazonaws_iam.RemoveUserFromGroup({
  "GroupName": "",
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * UserName **required** `string`

#### Output
*Output schema unknown*

### RemoveUserFromGroup



```js
amazonaws_iam.RemoveUserFromGroup({
  "GroupName": null,
  "UserName": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * UserName **required**

#### Output
*Output schema unknown*

### ResetServiceSpecificCredential



```js
amazonaws_iam.ResetServiceSpecificCredential({
  "ServiceSpecificCredentialId": ""
}, context)
```

#### Input
* input `object`
  * UserName `string`
  * ServiceSpecificCredentialId **required** `string`

#### Output
* output [ResetServiceSpecificCredentialResponse](#resetservicespecificcredentialresponse)

### ResetServiceSpecificCredential



```js
amazonaws_iam.ResetServiceSpecificCredential({
  "ServiceSpecificCredentialId": null
}, context)
```

#### Input
* input `object`
  * ServiceSpecificCredentialId **required**
  * UserName

#### Output
* output [ResetServiceSpecificCredentialResponse](#resetservicespecificcredentialresponse)

### ResyncMFADevice



```js
amazonaws_iam.ResyncMFADevice({
  "UserName": "",
  "SerialNumber": "",
  "AuthenticationCode1": "",
  "AuthenticationCode2": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * SerialNumber **required** `string`
  * AuthenticationCode1 **required** `string`
  * AuthenticationCode2 **required** `string`

#### Output
*Output schema unknown*

### ResyncMFADevice



```js
amazonaws_iam.ResyncMFADevice({
  "UserName": null,
  "SerialNumber": null,
  "AuthenticationCode1": null,
  "AuthenticationCode2": null
}, context)
```

#### Input
* input `object`
  * AuthenticationCode1 **required**
  * AuthenticationCode2 **required**
  * SerialNumber **required**
  * UserName **required**

#### Output
*Output schema unknown*

### SetDefaultPolicyVersion



```js
amazonaws_iam.SetDefaultPolicyVersion({
  "PolicyArn": "",
  "VersionId": ""
}, context)
```

#### Input
* input `object`
  * PolicyArn **required** `string`
  * VersionId **required** `string`

#### Output
*Output schema unknown*

### SetDefaultPolicyVersion



```js
amazonaws_iam.SetDefaultPolicyVersion({
  "PolicyArn": null,
  "VersionId": null
}, context)
```

#### Input
* input `object`
  * PolicyArn **required**
  * VersionId **required**

#### Output
*Output schema unknown*

### SetSecurityTokenServicePreferences



```js
amazonaws_iam.SetSecurityTokenServicePreferences({
  "GlobalEndpointTokenVersion": ""
}, context)
```

#### Input
* input `object`
  * GlobalEndpointTokenVersion **required** `string`

#### Output
*Output schema unknown*

### SetSecurityTokenServicePreferences



```js
amazonaws_iam.SetSecurityTokenServicePreferences({
  "GlobalEndpointTokenVersion": null
}, context)
```

#### Input
* input `object`
  * GlobalEndpointTokenVersion **required**

#### Output
*Output schema unknown*

### SimulateCustomPolicy



```js
amazonaws_iam.SimulateCustomPolicy({
  "PolicyInputList": [],
  "ActionNames": []
}, context)
```

#### Input
* input `object`
  * PolicyInputList **required** `array`
  * PermissionsBoundaryPolicyInputList `array`
  * ActionNames **required** `array`
  * ResourceArns `array`
  * ResourcePolicy `string`
  * ResourceOwner `string`
  * CallerArn `string`
  * ContextEntries `array`
  * ResourceHandlingOption `string`
  * MaxItems `integer`
  * Marker `string`

#### Output
* output [SimulatePolicyResponse](#simulatepolicyresponse)

### SimulateCustomPolicy



```js
amazonaws_iam.SimulateCustomPolicy({
  "PolicyInputList": null,
  "ActionNames": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * ActionNames **required**
    * items [ActionNameType](#actionnametype)
  * CallerArn
  * ContextEntries
    * items [ContextEntry](#contextentry)
  * Marker
  * MaxItems
  * PermissionsBoundaryPolicyInputList
    * items [policyDocumentType](#policydocumenttype)
  * PolicyInputList **required**
    * items [policyDocumentType](#policydocumenttype)
  * ResourceArns
    * items [ResourceNameType](#resourcenametype)
  * ResourceHandlingOption
  * ResourceOwner
  * ResourcePolicy

#### Output
* output [SimulatePolicyResponse](#simulatepolicyresponse)

### SimulatePrincipalPolicy



```js
amazonaws_iam.SimulatePrincipalPolicy({
  "PolicySourceArn": "",
  "ActionNames": []
}, context)
```

#### Input
* input `object`
  * PolicySourceArn **required** `string`
  * PolicyInputList `array`
  * PermissionsBoundaryPolicyInputList `array`
  * ActionNames **required** `array`
  * ResourceArns `array`
  * ResourcePolicy `string`
  * ResourceOwner `string`
  * CallerArn `string`
  * ContextEntries `array`
  * ResourceHandlingOption `string`
  * MaxItems `integer`
  * Marker `string`

#### Output
* output [SimulatePolicyResponse](#simulatepolicyresponse)

### SimulatePrincipalPolicy



```js
amazonaws_iam.SimulatePrincipalPolicy({
  "PolicySourceArn": null,
  "ActionNames": null
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * ActionNames **required**
    * items [ActionNameType](#actionnametype)
  * CallerArn
  * ContextEntries
    * items [ContextEntry](#contextentry)
  * Marker
  * MaxItems
  * PermissionsBoundaryPolicyInputList
    * items [policyDocumentType](#policydocumenttype)
  * PolicyInputList
    * items [policyDocumentType](#policydocumenttype)
  * PolicySourceArn **required**
  * ResourceArns
    * items [ResourceNameType](#resourcenametype)
  * ResourceHandlingOption
  * ResourceOwner
  * ResourcePolicy

#### Output
* output [SimulatePolicyResponse](#simulatepolicyresponse)

### TagRole



```js
amazonaws_iam.TagRole({
  "RoleName": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * Tags **required** `array`

#### Output
*Output schema unknown*

### TagRole



```js
amazonaws_iam.TagRole({
  "RoleName": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * RoleName **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### TagUser



```js
amazonaws_iam.TagUser({
  "UserName": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * Tags **required** `array`

#### Output
*Output schema unknown*

### TagUser



```js
amazonaws_iam.TagUser({
  "UserName": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * Tags **required**
    * items [Tag](#tag)
  * UserName **required**

#### Output
*Output schema unknown*

### UntagRole



```js
amazonaws_iam.UntagRole({
  "RoleName": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * TagKeys **required** `array`

#### Output
*Output schema unknown*

### UntagRole



```js
amazonaws_iam.UntagRole({
  "RoleName": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * RoleName **required**
  * TagKeys **required**
    * items [tagKeyType](#tagkeytype)

#### Output
*Output schema unknown*

### UntagUser



```js
amazonaws_iam.UntagUser({
  "UserName": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * TagKeys **required** `array`

#### Output
*Output schema unknown*

### UntagUser



```js
amazonaws_iam.UntagUser({
  "UserName": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * TagKeys **required**
    * items [tagKeyType](#tagkeytype)
  * UserName **required**

#### Output
*Output schema unknown*

### UpdateAccessKey



```js
amazonaws_iam.UpdateAccessKey({
  "AccessKeyId": "",
  "Status": ""
}, context)
```

#### Input
* input `object`
  * UserName `string`
  * AccessKeyId **required** `string`
  * Status **required** `string`

#### Output
*Output schema unknown*

### UpdateAccessKey



```js
amazonaws_iam.UpdateAccessKey({
  "AccessKeyId": null,
  "Status": null
}, context)
```

#### Input
* input `object`
  * AccessKeyId **required**
  * Status **required**
  * UserName

#### Output
*Output schema unknown*

### UpdateAccountPasswordPolicy



```js
amazonaws_iam.UpdateAccountPasswordPolicy({}, context)
```

#### Input
* input `object`
  * MinimumPasswordLength `integer`
  * RequireSymbols `boolean`
  * RequireNumbers `boolean`
  * RequireUppercaseCharacters `boolean`
  * RequireLowercaseCharacters `boolean`
  * AllowUsersToChangePassword `boolean`
  * MaxPasswordAge `integer`
  * PasswordReusePrevention `integer`
  * HardExpiry `boolean`

#### Output
*Output schema unknown*

### UpdateAccountPasswordPolicy



```js
amazonaws_iam.UpdateAccountPasswordPolicy({}, context)
```

#### Input
* input `object`
  * AllowUsersToChangePassword
  * HardExpiry
  * MaxPasswordAge
  * MinimumPasswordLength
  * PasswordReusePrevention
  * RequireLowercaseCharacters
  * RequireNumbers
  * RequireSymbols
  * RequireUppercaseCharacters

#### Output
*Output schema unknown*

### UpdateAssumeRolePolicy



```js
amazonaws_iam.UpdateAssumeRolePolicy({
  "RoleName": "",
  "PolicyDocument": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * PolicyDocument **required** `string`

#### Output
*Output schema unknown*

### UpdateAssumeRolePolicy



```js
amazonaws_iam.UpdateAssumeRolePolicy({
  "RoleName": null,
  "PolicyDocument": null
}, context)
```

#### Input
* input `object`
  * PolicyDocument **required**
  * RoleName **required**

#### Output
*Output schema unknown*

### UpdateGroup



```js
amazonaws_iam.UpdateGroup({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * NewPath `string`
  * NewGroupName `string`

#### Output
*Output schema unknown*

### UpdateGroup



```js
amazonaws_iam.UpdateGroup({
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * NewGroupName
  * NewPath

#### Output
*Output schema unknown*

### UpdateLoginProfile



```js
amazonaws_iam.UpdateLoginProfile({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * Password `string`
  * PasswordResetRequired `boolean`

#### Output
*Output schema unknown*

### UpdateLoginProfile



```js
amazonaws_iam.UpdateLoginProfile({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * Password
  * PasswordResetRequired
  * UserName **required**

#### Output
*Output schema unknown*

### UpdateOpenIDConnectProviderThumbprint



```js
amazonaws_iam.UpdateOpenIDConnectProviderThumbprint({
  "OpenIDConnectProviderArn": "",
  "ThumbprintList": []
}, context)
```

#### Input
* input `object`
  * OpenIDConnectProviderArn **required** `string`
  * ThumbprintList **required** `array`

#### Output
*Output schema unknown*

### UpdateOpenIDConnectProviderThumbprint



```js
amazonaws_iam.UpdateOpenIDConnectProviderThumbprint({
  "OpenIDConnectProviderArn": null,
  "ThumbprintList": null
}, context)
```

#### Input
* input `object`
  * OpenIDConnectProviderArn **required**
  * ThumbprintList **required**
    * items [thumbprintType](#thumbprinttype)

#### Output
*Output schema unknown*

### UpdateRole



```js
amazonaws_iam.UpdateRole({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * Description `string`
  * MaxSessionDuration `integer`

#### Output
* output [UpdateRoleResponse](#updateroleresponse)

### UpdateRole



```js
amazonaws_iam.UpdateRole({
  "RoleName": null
}, context)
```

#### Input
* input `object`
  * Description
  * MaxSessionDuration
  * RoleName **required**

#### Output
* output [UpdateRoleResponse](#updateroleresponse)

### UpdateRoleDescription



```js
amazonaws_iam.UpdateRoleDescription({
  "RoleName": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`
  * Description **required** `string`

#### Output
* output [UpdateRoleDescriptionResponse](#updateroledescriptionresponse)

### UpdateRoleDescription



```js
amazonaws_iam.UpdateRoleDescription({
  "RoleName": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * Description **required**
  * RoleName **required**

#### Output
* output [UpdateRoleDescriptionResponse](#updateroledescriptionresponse)

### UpdateSAMLProvider



```js
amazonaws_iam.UpdateSAMLProvider({
  "SAMLMetadataDocument": "",
  "SAMLProviderArn": ""
}, context)
```

#### Input
* input `object`
  * SAMLMetadataDocument **required** `string`
  * SAMLProviderArn **required** `string`

#### Output
* output [UpdateSAMLProviderResponse](#updatesamlproviderresponse)

### UpdateSAMLProvider



```js
amazonaws_iam.UpdateSAMLProvider({
  "SAMLMetadataDocument": null,
  "SAMLProviderArn": null
}, context)
```

#### Input
* input `object`
  * SAMLMetadataDocument **required**
  * SAMLProviderArn **required**

#### Output
* output [UpdateSAMLProviderResponse](#updatesamlproviderresponse)

### UpdateSSHPublicKey



```js
amazonaws_iam.UpdateSSHPublicKey({
  "UserName": "",
  "SSHPublicKeyId": "",
  "Status": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * SSHPublicKeyId **required** `string`
  * Status **required** `string`

#### Output
*Output schema unknown*

### UpdateSSHPublicKey



```js
amazonaws_iam.UpdateSSHPublicKey({
  "UserName": null,
  "SSHPublicKeyId": null,
  "Status": null
}, context)
```

#### Input
* input `object`
  * SSHPublicKeyId **required**
  * Status **required**
  * UserName **required**

#### Output
*Output schema unknown*

### UpdateServerCertificate



```js
amazonaws_iam.UpdateServerCertificate({
  "ServerCertificateName": ""
}, context)
```

#### Input
* input `object`
  * ServerCertificateName **required** `string`
  * NewPath `string`
  * NewServerCertificateName `string`

#### Output
*Output schema unknown*

### UpdateServerCertificate



```js
amazonaws_iam.UpdateServerCertificate({
  "ServerCertificateName": null
}, context)
```

#### Input
* input `object`
  * NewPath
  * NewServerCertificateName
  * ServerCertificateName **required**

#### Output
*Output schema unknown*

### UpdateServiceSpecificCredential



```js
amazonaws_iam.UpdateServiceSpecificCredential({
  "ServiceSpecificCredentialId": "",
  "Status": ""
}, context)
```

#### Input
* input `object`
  * UserName `string`
  * ServiceSpecificCredentialId **required** `string`
  * Status **required** `string`

#### Output
*Output schema unknown*

### UpdateServiceSpecificCredential



```js
amazonaws_iam.UpdateServiceSpecificCredential({
  "ServiceSpecificCredentialId": null,
  "Status": null
}, context)
```

#### Input
* input `object`
  * ServiceSpecificCredentialId **required**
  * Status **required**
  * UserName

#### Output
*Output schema unknown*

### UpdateSigningCertificate



```js
amazonaws_iam.UpdateSigningCertificate({
  "CertificateId": "",
  "Status": ""
}, context)
```

#### Input
* input `object`
  * UserName `string`
  * CertificateId **required** `string`
  * Status **required** `string`

#### Output
*Output schema unknown*

### UpdateSigningCertificate



```js
amazonaws_iam.UpdateSigningCertificate({
  "CertificateId": null,
  "Status": null
}, context)
```

#### Input
* input `object`
  * CertificateId **required**
  * Status **required**
  * UserName

#### Output
*Output schema unknown*

### UpdateUser



```js
amazonaws_iam.UpdateUser({
  "UserName": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * NewPath `string`
  * NewUserName `string`

#### Output
*Output schema unknown*

### UpdateUser



```js
amazonaws_iam.UpdateUser({
  "UserName": null
}, context)
```

#### Input
* input `object`
  * NewPath
  * NewUserName
  * UserName **required**

#### Output
*Output schema unknown*

### UploadSSHPublicKey



```js
amazonaws_iam.UploadSSHPublicKey({
  "UserName": "",
  "SSHPublicKeyBody": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * SSHPublicKeyBody **required** `string`

#### Output
* output [UploadSSHPublicKeyResponse](#uploadsshpublickeyresponse)

### UploadSSHPublicKey



```js
amazonaws_iam.UploadSSHPublicKey({
  "UserName": null,
  "SSHPublicKeyBody": null
}, context)
```

#### Input
* input `object`
  * SSHPublicKeyBody **required**
  * UserName **required**

#### Output
* output [UploadSSHPublicKeyResponse](#uploadsshpublickeyresponse)

### UploadServerCertificate



```js
amazonaws_iam.UploadServerCertificate({
  "ServerCertificateName": "",
  "CertificateBody": "",
  "PrivateKey": ""
}, context)
```

#### Input
* input `object`
  * Path `string`
  * ServerCertificateName **required** `string`
  * CertificateBody **required** `string`
  * PrivateKey **required** `string`
  * CertificateChain `string`

#### Output
* output [UploadServerCertificateResponse](#uploadservercertificateresponse)

### UploadServerCertificate



```js
amazonaws_iam.UploadServerCertificate({
  "ServerCertificateName": null,
  "CertificateBody": null,
  "PrivateKey": null
}, context)
```

#### Input
* input `object`
  * CertificateBody **required**
  * CertificateChain
  * Path
  * PrivateKey **required**
  * ServerCertificateName **required**

#### Output
* output [UploadServerCertificateResponse](#uploadservercertificateresponse)

### UploadSigningCertificate



```js
amazonaws_iam.UploadSigningCertificate({
  "CertificateBody": ""
}, context)
```

#### Input
* input `object`
  * UserName `string`
  * CertificateBody **required** `string`

#### Output
* output [UploadSigningCertificateResponse](#uploadsigningcertificateresponse)

### UploadSigningCertificate



```js
amazonaws_iam.UploadSigningCertificate({
  "CertificateBody": null
}, context)
```

#### Input
* input `object`
  * CertificateBody **required**
  * UserName

#### Output
* output [UploadSigningCertificateResponse](#uploadsigningcertificateresponse)



## Definitions

### AccessAdvisorUsageGranularityType
* AccessAdvisorUsageGranularityType `string` (values: SERVICE_LEVEL, ACTION_LEVEL)

### AccessDetail
* AccessDetail `object`: <p>An object that contains details about when a principal in the reported AWS Organizations entity last attempted to access an AWS service. A principal can be an IAM user, an IAM role, or the AWS account root user within the reported Organizations entity.</p> <p>This data type is a response element in the <a>GetOrganizationsAccessReport</a> operation.</p>
  * EntityPath
  * LastAuthenticatedTime
  * Region
  * ServiceName **required**
  * ServiceNamespace **required**
  * TotalAuthenticatedEntities

### AccessDetails
* AccessDetails `array`
  * items [AccessDetail](#accessdetail)

### AccessKey
* AccessKey `object`: <p>Contains information about an AWS access key.</p> <p> This data type is used as a response element in the <a>CreateAccessKey</a> and <a>ListAccessKeys</a> operations. </p> <note> <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.</p> </note>
  * AccessKeyId **required**
  * CreateDate
  * SecretAccessKey **required**
  * Status **required**
  * UserName **required**

### AccessKeyLastUsed
* AccessKeyLastUsed `object`: <p>Contains information about the last time an AWS access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p>
  * LastUsedDate **required**
  * Region **required**
  * ServiceName **required**

### AccessKeyMetadata
* AccessKeyMetadata `object`: <p>Contains information about an AWS access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
  * AccessKeyId
  * CreateDate
  * Status
  * UserName

### ActionNameListType
* ActionNameListType `array`
  * items [ActionNameType](#actionnametype)

### ActionNameType
* ActionNameType `string`

### AddClientIDToOpenIDConnectProviderRequest
* AddClientIDToOpenIDConnectProviderRequest `object`
  * ClientID **required**
  * OpenIDConnectProviderArn **required**

### AddRoleToInstanceProfileRequest
* AddRoleToInstanceProfileRequest `object`
  * InstanceProfileName **required**
  * RoleName **required**

### AddUserToGroupRequest
* AddUserToGroupRequest `object`
  * GroupName **required**
  * UserName **required**

### ArnListType
* ArnListType `array`
  * items [arnType](#arntype)

### AttachGroupPolicyRequest
* AttachGroupPolicyRequest `object`
  * GroupName **required**
  * PolicyArn **required**

### AttachRolePolicyRequest
* AttachRolePolicyRequest `object`
  * PolicyArn **required**
  * RoleName **required**

### AttachUserPolicyRequest
* AttachUserPolicyRequest `object`
  * PolicyArn **required**
  * UserName **required**

### AttachedPermissionsBoundary
* AttachedPermissionsBoundary `object`: <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>
  * PermissionsBoundaryArn
  * PermissionsBoundaryType

### AttachedPolicy
* AttachedPolicy `object`: <p>Contains information about an attached policy.</p> <p>An attached policy is a managed policy that has been attached to a user, group, or role. This data type is used as a response element in the <a>ListAttachedGroupPolicies</a>, <a>ListAttachedRolePolicies</a>, <a>ListAttachedUserPolicies</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p>
  * PolicyArn [arnType](#arntype)
  * PolicyName

### BootstrapDatum
* BootstrapDatum `string`

### ChangePasswordRequest
* ChangePasswordRequest `object`
  * NewPassword **required**
  * OldPassword **required**

### ColumnNumber
* ColumnNumber `integer`

### ConcurrentModificationException


### ContextEntry
* ContextEntry `object`: <p>Contains information about a condition context key. It includes the name of the key and specifies the value (or values, if the context key supports multiple values) to use in the simulation. This information is used when evaluating the <code>Condition</code> elements of the input policies.</p> <p>This data type is used as an input parameter to <a>SimulateCustomPolicy</a> and <a>SimulatePrincipalPolicy</a>.</p>
  * ContextKeyName
  * ContextKeyType
  * ContextKeyValues
    * items [ContextKeyValueType](#contextkeyvaluetype)

### ContextEntryListType
* ContextEntryListType `array`
  * items [ContextEntry](#contextentry)

### ContextKeyNameType
* ContextKeyNameType `string`

### ContextKeyNamesResultListType
* ContextKeyNamesResultListType `array`
  * items [ContextKeyNameType](#contextkeynametype)

### ContextKeyTypeEnum
* ContextKeyTypeEnum `string` (values: string, stringList, numeric, numericList, boolean, booleanList, ip, ipList, binary, binaryList, date, dateList)

### ContextKeyValueListType
* ContextKeyValueListType `array`
  * items [ContextKeyValueType](#contextkeyvaluetype)

### ContextKeyValueType
* ContextKeyValueType `string`

### CreateAccessKeyRequest
* CreateAccessKeyRequest `object`
  * UserName

### CreateAccessKeyResponse
* CreateAccessKeyResponse `object`: Contains the response to a successful <a>CreateAccessKey</a> request. 
  * AccessKey **required**
    * AccessKeyId **required**
    * CreateDate
    * SecretAccessKey **required**
    * Status **required**
    * UserName **required**

### CreateAccountAliasRequest
* CreateAccountAliasRequest `object`
  * AccountAlias **required**

### CreateGroupRequest
* CreateGroupRequest `object`
  * GroupName **required**
  * Path

### CreateGroupResponse
* CreateGroupResponse `object`: Contains the response to a successful <a>CreateGroup</a> request. 
  * Group **required**
    * Arn **required**
    * CreateDate **required**
    * GroupId **required**
    * GroupName **required**
    * Path **required**

### CreateInstanceProfileRequest
* CreateInstanceProfileRequest `object`
  * InstanceProfileName **required**
  * Path

### CreateInstanceProfileResponse
* CreateInstanceProfileResponse `object`: Contains the response to a successful <a>CreateInstanceProfile</a> request. 
  * InstanceProfile **required**
    * Arn **required**
    * CreateDate **required**
    * InstanceProfileId **required**
    * InstanceProfileName **required**
    * Path **required**
    * Roles **required**
      * items [Role](#role)

### CreateLoginProfileRequest
* CreateLoginProfileRequest `object`
  * Password **required**
  * PasswordResetRequired
  * UserName **required**

### CreateLoginProfileResponse
* CreateLoginProfileResponse `object`: Contains the response to a successful <a>CreateLoginProfile</a> request. 
  * LoginProfile **required**
    * CreateDate **required**
    * PasswordResetRequired
    * UserName **required**

### CreateOpenIDConnectProviderRequest
* CreateOpenIDConnectProviderRequest `object`
  * ClientIDList
    * items [clientIDType](#clientidtype)
  * ThumbprintList **required**
    * items [thumbprintType](#thumbprinttype)
  * Url **required**

### CreateOpenIDConnectProviderResponse
* CreateOpenIDConnectProviderResponse `object`: Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request. 
  * OpenIDConnectProviderArn

### CreatePolicyRequest
* CreatePolicyRequest `object`
  * Description
  * Path
  * PolicyDocument **required**
  * PolicyName **required**

### CreatePolicyResponse
* CreatePolicyResponse `object`: Contains the response to a successful <a>CreatePolicy</a> request. 
  * Policy
    * Arn [arnType](#arntype)
    * AttachmentCount
    * CreateDate
    * DefaultVersionId
    * Description
    * IsAttachable
    * Path
    * PermissionsBoundaryUsageCount
    * PolicyId
    * PolicyName
    * UpdateDate

### CreatePolicyVersionRequest
* CreatePolicyVersionRequest `object`
  * PolicyArn **required**
  * PolicyDocument **required**
  * SetAsDefault

### CreatePolicyVersionResponse
* CreatePolicyVersionResponse `object`: Contains the response to a successful <a>CreatePolicyVersion</a> request. 
  * PolicyVersion
    * CreateDate
    * Document
    * IsDefaultVersion
    * VersionId

### CreateRoleRequest
* CreateRoleRequest `object`
  * AssumeRolePolicyDocument **required**
  * Description
  * MaxSessionDuration
  * Path
  * PermissionsBoundary
  * RoleName **required**
  * Tags
    * items [Tag](#tag)

### CreateRoleResponse
* CreateRoleResponse `object`: Contains the response to a successful <a>CreateRole</a> request. 
  * Role **required**
    * Arn **required**
    * AssumeRolePolicyDocument
    * CreateDate **required**
    * Description
    * MaxSessionDuration
    * Path **required**
    * PermissionsBoundary
      * PermissionsBoundaryArn
      * PermissionsBoundaryType
    * RoleId **required**
    * RoleLastUsed
      * LastUsedDate
      * Region
    * RoleName **required**
    * Tags
      * items [Tag](#tag)

### CreateSAMLProviderRequest
* CreateSAMLProviderRequest `object`
  * Name **required**
  * SAMLMetadataDocument **required**

### CreateSAMLProviderResponse
* CreateSAMLProviderResponse `object`: Contains the response to a successful <a>CreateSAMLProvider</a> request. 
  * SAMLProviderArn

### CreateServiceLinkedRoleRequest
* CreateServiceLinkedRoleRequest `object`
  * AWSServiceName **required**
  * CustomSuffix
  * Description

### CreateServiceLinkedRoleResponse
* CreateServiceLinkedRoleResponse `object`
  * Role
    * Arn **required**
    * AssumeRolePolicyDocument
    * CreateDate **required**
    * Description
    * MaxSessionDuration
    * Path **required**
    * PermissionsBoundary
      * PermissionsBoundaryArn
      * PermissionsBoundaryType
    * RoleId **required**
    * RoleLastUsed
      * LastUsedDate
      * Region
    * RoleName **required**
    * Tags
      * items [Tag](#tag)

### CreateServiceSpecificCredentialRequest
* CreateServiceSpecificCredentialRequest `object`
  * ServiceName **required**
  * UserName **required**

### CreateServiceSpecificCredentialResponse
* CreateServiceSpecificCredentialResponse `object`
  * ServiceSpecificCredential
    * CreateDate **required**
    * ServiceName **required**
    * ServicePassword **required**
    * ServiceSpecificCredentialId **required**
    * ServiceUserName **required**
    * Status **required**
    * UserName **required**

### CreateUserRequest
* CreateUserRequest `object`
  * Path
  * PermissionsBoundary
  * Tags
    * items [Tag](#tag)
  * UserName **required**

### CreateUserResponse
* CreateUserResponse `object`: Contains the response to a successful <a>CreateUser</a> request. 
  * User
    * Arn **required**
    * CreateDate **required**
    * PasswordLastUsed
    * Path **required**
    * PermissionsBoundary
      * PermissionsBoundaryArn
      * PermissionsBoundaryType
    * Tags
      * items [Tag](#tag)
    * UserId **required**
    * UserName **required**

### CreateVirtualMFADeviceRequest
* CreateVirtualMFADeviceRequest `object`
  * Path
  * VirtualMFADeviceName **required**

### CreateVirtualMFADeviceResponse
* CreateVirtualMFADeviceResponse `object`: Contains the response to a successful <a>CreateVirtualMFADevice</a> request. 
  * VirtualMFADevice **required**
    * Base32StringSeed
    * EnableDate
    * QRCodePNG
    * SerialNumber **required**
    * User
      * Arn **required**
      * CreateDate **required**
      * PasswordLastUsed
      * Path **required**
      * PermissionsBoundary
        * PermissionsBoundaryArn
        * PermissionsBoundaryType
      * Tags
        * items [Tag](#tag)
      * UserId **required**
      * UserName **required**

### CredentialReportExpiredException


### CredentialReportNotPresentException


### CredentialReportNotReadyException


### DeactivateMFADeviceRequest
* DeactivateMFADeviceRequest `object`
  * SerialNumber **required**
  * UserName **required**

### DeleteAccessKeyRequest
* DeleteAccessKeyRequest `object`
  * AccessKeyId **required**
  * UserName

### DeleteAccountAliasRequest
* DeleteAccountAliasRequest `object`
  * AccountAlias **required**

### DeleteConflictException


### DeleteGroupPolicyRequest
* DeleteGroupPolicyRequest `object`
  * GroupName **required**
  * PolicyName **required**

### DeleteGroupRequest
* DeleteGroupRequest `object`
  * GroupName **required**

### DeleteInstanceProfileRequest
* DeleteInstanceProfileRequest `object`
  * InstanceProfileName **required**

### DeleteLoginProfileRequest
* DeleteLoginProfileRequest `object`
  * UserName **required**

### DeleteOpenIDConnectProviderRequest
* DeleteOpenIDConnectProviderRequest `object`
  * OpenIDConnectProviderArn **required**

### DeletePolicyRequest
* DeletePolicyRequest `object`
  * PolicyArn **required**

### DeletePolicyVersionRequest
* DeletePolicyVersionRequest `object`
  * PolicyArn **required**
  * VersionId **required**

### DeleteRolePermissionsBoundaryRequest
* DeleteRolePermissionsBoundaryRequest `object`
  * RoleName **required**

### DeleteRolePolicyRequest
* DeleteRolePolicyRequest `object`
  * PolicyName **required**
  * RoleName **required**

### DeleteRoleRequest
* DeleteRoleRequest `object`
  * RoleName **required**

### DeleteSAMLProviderRequest
* DeleteSAMLProviderRequest `object`
  * SAMLProviderArn **required**

### DeleteSSHPublicKeyRequest
* DeleteSSHPublicKeyRequest `object`
  * SSHPublicKeyId **required**
  * UserName **required**

### DeleteServerCertificateRequest
* DeleteServerCertificateRequest `object`
  * ServerCertificateName **required**

### DeleteServiceLinkedRoleRequest
* DeleteServiceLinkedRoleRequest `object`
  * RoleName **required**

### DeleteServiceLinkedRoleResponse
* DeleteServiceLinkedRoleResponse `object`
  * DeletionTaskId **required**

### DeleteServiceSpecificCredentialRequest
* DeleteServiceSpecificCredentialRequest `object`
  * ServiceSpecificCredentialId **required**
  * UserName

### DeleteSigningCertificateRequest
* DeleteSigningCertificateRequest `object`
  * CertificateId **required**
  * UserName

### DeleteUserPermissionsBoundaryRequest
* DeleteUserPermissionsBoundaryRequest `object`
  * UserName **required**

### DeleteUserPolicyRequest
* DeleteUserPolicyRequest `object`
  * PolicyName **required**
  * UserName **required**

### DeleteUserRequest
* DeleteUserRequest `object`
  * UserName **required**

### DeleteVirtualMFADeviceRequest
* DeleteVirtualMFADeviceRequest `object`
  * SerialNumber **required**

### DeletionTaskFailureReasonType
* DeletionTaskFailureReasonType `object`: <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
  * Reason
  * RoleUsageList
    * items [RoleUsageType](#roleusagetype)

### DeletionTaskIdType
* DeletionTaskIdType `string`

### DeletionTaskStatusType
* DeletionTaskStatusType `string` (values: SUCCEEDED, IN_PROGRESS, FAILED, NOT_STARTED)

### DetachGroupPolicyRequest
* DetachGroupPolicyRequest `object`
  * GroupName **required**
  * PolicyArn **required**

### DetachRolePolicyRequest
* DetachRolePolicyRequest `object`
  * PolicyArn **required**
  * RoleName **required**

### DetachUserPolicyRequest
* DetachUserPolicyRequest `object`
  * PolicyArn **required**
  * UserName **required**

### DuplicateCertificateException


### DuplicateSSHPublicKeyException


### EnableMFADeviceRequest
* EnableMFADeviceRequest `object`
  * AuthenticationCode1 **required**
  * AuthenticationCode2 **required**
  * SerialNumber **required**
  * UserName **required**

### EntityAlreadyExistsException


### EntityDetails
* EntityDetails `object`: <p>An object that contains details about when the IAM entities (users or roles) were last used in an attempt to access the specified AWS service.</p> <p>This data type is a response element in the <a>GetServiceLastAccessedDetailsWithEntities</a> operation.</p>
  * EntityInfo **required**
    * Arn **required** [arnType](#arntype)
    * Id **required**
    * Name **required**
    * Path
    * Type **required**
  * LastAuthenticated

### EntityInfo
* EntityInfo `object`: <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
  * Arn **required** [arnType](#arntype)
  * Id **required**
  * Name **required**
  * Path
  * Type **required**

### EntityTemporarilyUnmodifiableException


### EntityType
* EntityType `string` (values: User, Role, Group, LocalManagedPolicy, AWSManagedPolicy)

### ErrorDetails
* ErrorDetails `object`: <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
  * Code **required**
  * Message **required**

### EvalDecisionDetailsType
* EvalDecisionDetailsType `object`

### EvalDecisionSourceType
* EvalDecisionSourceType `string`

### EvaluationResult
* EvaluationResult `object`: <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
  * EvalActionName **required**
  * EvalDecision **required**
  * EvalDecisionDetails
  * EvalResourceName
  * MatchedStatements
    * items [Statement](#statement)
  * MissingContextValues
    * items [ContextKeyNameType](#contextkeynametype)
  * OrganizationsDecisionDetail
    * AllowedByOrganizations
  * PermissionsBoundaryDecisionDetail
    * AllowedByPermissionsBoundary
  * ResourceSpecificResults
    * items [ResourceSpecificResult](#resourcespecificresult)

### EvaluationResultsListType
* EvaluationResultsListType `array`
  * items [EvaluationResult](#evaluationresult)

### GenerateCredentialReportResponse
* GenerateCredentialReportResponse `object`: Contains the response to a successful <a>GenerateCredentialReport</a> request. 
  * Description
  * State

### GenerateOrganizationsAccessReportRequest
* GenerateOrganizationsAccessReportRequest `object`
  * EntityPath **required**
  * OrganizationsPolicyId

### GenerateOrganizationsAccessReportResponse
* GenerateOrganizationsAccessReportResponse `object`
  * JobId

### GenerateServiceLastAccessedDetailsRequest
* GenerateServiceLastAccessedDetailsRequest `object`
  * Arn **required**
  * Granularity

### GenerateServiceLastAccessedDetailsResponse
* GenerateServiceLastAccessedDetailsResponse `object`
  * JobId

### GetAccessKeyLastUsedRequest
* GetAccessKeyLastUsedRequest `object`
  * AccessKeyId **required**

### GetAccessKeyLastUsedResponse
* GetAccessKeyLastUsedResponse `object`: Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.
  * AccessKeyLastUsed
    * LastUsedDate **required**
    * Region **required**
    * ServiceName **required**
  * UserName

### GetAccountAuthorizationDetailsRequest
* GetAccountAuthorizationDetailsRequest `object`
  * Filter
    * items [EntityType](#entitytype)
  * Marker
  * MaxItems

### GetAccountAuthorizationDetailsResponse
* GetAccountAuthorizationDetailsResponse `object`: Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request. 
  * GroupDetailList
    * items [GroupDetail](#groupdetail)
  * IsTruncated
  * Marker
  * Policies
    * items [ManagedPolicyDetail](#managedpolicydetail)
  * RoleDetailList
    * items [RoleDetail](#roledetail)
  * UserDetailList
    * items [UserDetail](#userdetail)

### GetAccountPasswordPolicyResponse
* GetAccountPasswordPolicyResponse `object`: Contains the response to a successful <a>GetAccountPasswordPolicy</a> request. 
  * PasswordPolicy **required**
    * AllowUsersToChangePassword
    * ExpirePasswords
    * HardExpiry
    * MaxPasswordAge
    * MinimumPasswordLength
    * PasswordReusePrevention
    * RequireLowercaseCharacters
    * RequireNumbers
    * RequireSymbols
    * RequireUppercaseCharacters

### GetAccountSummaryResponse
* GetAccountSummaryResponse `object`: Contains the response to a successful <a>GetAccountSummary</a> request. 
  * SummaryMap

### GetContextKeysForCustomPolicyRequest
* GetContextKeysForCustomPolicyRequest `object`
  * PolicyInputList **required**
    * items [policyDocumentType](#policydocumenttype)

### GetContextKeysForPolicyResponse
* GetContextKeysForPolicyResponse `object`: Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. 
  * ContextKeyNames
    * items [ContextKeyNameType](#contextkeynametype)

### GetContextKeysForPrincipalPolicyRequest
* GetContextKeysForPrincipalPolicyRequest `object`
  * PolicyInputList
    * items [policyDocumentType](#policydocumenttype)
  * PolicySourceArn **required**

### GetCredentialReportResponse
* GetCredentialReportResponse `object`: Contains the response to a successful <a>GetCredentialReport</a> request. 
  * Content
  * GeneratedTime
  * ReportFormat

### GetGroupPolicyRequest
* GetGroupPolicyRequest `object`
  * GroupName **required**
  * PolicyName **required**

### GetGroupPolicyResponse
* GetGroupPolicyResponse `object`: Contains the response to a successful <a>GetGroupPolicy</a> request. 
  * GroupName **required**
  * PolicyDocument **required**
  * PolicyName **required**

### GetGroupRequest
* GetGroupRequest `object`
  * GroupName **required**
  * Marker
  * MaxItems

### GetGroupResponse
* GetGroupResponse `object`: Contains the response to a successful <a>GetGroup</a> request. 
  * Group **required**
    * Arn **required**
    * CreateDate **required**
    * GroupId **required**
    * GroupName **required**
    * Path **required**
  * IsTruncated
  * Marker
  * Users **required**
    * items [User](#user)

### GetInstanceProfileRequest
* GetInstanceProfileRequest `object`
  * InstanceProfileName **required**

### GetInstanceProfileResponse
* GetInstanceProfileResponse `object`: Contains the response to a successful <a>GetInstanceProfile</a> request. 
  * InstanceProfile **required**
    * Arn **required**
    * CreateDate **required**
    * InstanceProfileId **required**
    * InstanceProfileName **required**
    * Path **required**
    * Roles **required**
      * items [Role](#role)

### GetLoginProfileRequest
* GetLoginProfileRequest `object`
  * UserName **required**

### GetLoginProfileResponse
* GetLoginProfileResponse `object`: Contains the response to a successful <a>GetLoginProfile</a> request. 
  * LoginProfile **required**
    * CreateDate **required**
    * PasswordResetRequired
    * UserName **required**

### GetOpenIDConnectProviderRequest
* GetOpenIDConnectProviderRequest `object`
  * OpenIDConnectProviderArn **required**

### GetOpenIDConnectProviderResponse
* GetOpenIDConnectProviderResponse `object`: Contains the response to a successful <a>GetOpenIDConnectProvider</a> request. 
  * ClientIDList
    * items [clientIDType](#clientidtype)
  * CreateDate
  * ThumbprintList
    * items [thumbprintType](#thumbprinttype)
  * Url

### GetOrganizationsAccessReportRequest
* GetOrganizationsAccessReportRequest `object`
  * JobId **required**
  * Marker
  * MaxItems
  * SortKey

### GetOrganizationsAccessReportResponse
* GetOrganizationsAccessReportResponse `object`
  * AccessDetails
    * items [AccessDetail](#accessdetail)
  * ErrorDetails [ErrorDetails](#errordetails)
  * IsTruncated
  * JobCompletionDate
  * JobCreationDate **required**
  * JobStatus **required**
  * Marker
  * NumberOfServicesAccessible
  * NumberOfServicesNotAccessed

### GetPolicyRequest
* GetPolicyRequest `object`
  * PolicyArn **required**

### GetPolicyResponse
* GetPolicyResponse `object`: Contains the response to a successful <a>GetPolicy</a> request. 
  * Policy
    * Arn [arnType](#arntype)
    * AttachmentCount
    * CreateDate
    * DefaultVersionId
    * Description
    * IsAttachable
    * Path
    * PermissionsBoundaryUsageCount
    * PolicyId
    * PolicyName
    * UpdateDate

### GetPolicyVersionRequest
* GetPolicyVersionRequest `object`
  * PolicyArn **required**
  * VersionId **required**

### GetPolicyVersionResponse
* GetPolicyVersionResponse `object`: Contains the response to a successful <a>GetPolicyVersion</a> request. 
  * PolicyVersion
    * CreateDate
    * Document
    * IsDefaultVersion
    * VersionId

### GetRolePolicyRequest
* GetRolePolicyRequest `object`
  * PolicyName **required**
  * RoleName **required**

### GetRolePolicyResponse
* GetRolePolicyResponse `object`: Contains the response to a successful <a>GetRolePolicy</a> request. 
  * PolicyDocument **required**
  * PolicyName **required**
  * RoleName **required**

### GetRoleRequest
* GetRoleRequest `object`
  * RoleName **required**

### GetRoleResponse
* GetRoleResponse `object`: Contains the response to a successful <a>GetRole</a> request. 
  * Role **required**
    * Arn **required**
    * AssumeRolePolicyDocument
    * CreateDate **required**
    * Description
    * MaxSessionDuration
    * Path **required**
    * PermissionsBoundary
      * PermissionsBoundaryArn
      * PermissionsBoundaryType
    * RoleId **required**
    * RoleLastUsed
      * LastUsedDate
      * Region
    * RoleName **required**
    * Tags
      * items [Tag](#tag)

### GetSAMLProviderRequest
* GetSAMLProviderRequest `object`
  * SAMLProviderArn **required**

### GetSAMLProviderResponse
* GetSAMLProviderResponse `object`: Contains the response to a successful <a>GetSAMLProvider</a> request. 
  * CreateDate
  * SAMLMetadataDocument
  * ValidUntil

### GetSSHPublicKeyRequest
* GetSSHPublicKeyRequest `object`
  * Encoding **required**
  * SSHPublicKeyId **required**
  * UserName **required**

### GetSSHPublicKeyResponse
* GetSSHPublicKeyResponse `object`: Contains the response to a successful <a>GetSSHPublicKey</a> request.
  * SSHPublicKey
    * Fingerprint **required**
    * SSHPublicKeyBody **required**
    * SSHPublicKeyId **required**
    * Status **required**
    * UploadDate
    * UserName **required**

### GetServerCertificateRequest
* GetServerCertificateRequest `object`
  * ServerCertificateName **required**

### GetServerCertificateResponse
* GetServerCertificateResponse `object`: Contains the response to a successful <a>GetServerCertificate</a> request. 
  * ServerCertificate **required**
    * CertificateBody **required**
    * CertificateChain
    * ServerCertificateMetadata **required**
      * Arn **required**
      * Expiration
      * Path **required**
      * ServerCertificateId **required**
      * ServerCertificateName **required**
      * UploadDate

### GetServiceLastAccessedDetailsRequest
* GetServiceLastAccessedDetailsRequest `object`
  * JobId **required**
  * Marker
  * MaxItems

### GetServiceLastAccessedDetailsResponse
* GetServiceLastAccessedDetailsResponse `object`
  * Error
    * Code **required**
    * Message **required**
  * IsTruncated
  * JobCompletionDate **required**
  * JobCreationDate **required**
  * JobStatus **required**
  * JobType
  * Marker
  * ServicesLastAccessed **required**
    * items [ServiceLastAccessed](#servicelastaccessed)

### GetServiceLastAccessedDetailsWithEntitiesRequest
* GetServiceLastAccessedDetailsWithEntitiesRequest `object`
  * JobId **required**
  * Marker
  * MaxItems
  * ServiceNamespace **required**

### GetServiceLastAccessedDetailsWithEntitiesResponse
* GetServiceLastAccessedDetailsWithEntitiesResponse `object`
  * EntityDetailsList **required**
    * items [EntityDetails](#entitydetails)
  * Error
    * Code **required**
    * Message **required**
  * IsTruncated
  * JobCompletionDate **required**
  * JobCreationDate **required**
  * JobStatus **required**
  * Marker

### GetServiceLinkedRoleDeletionStatusRequest
* GetServiceLinkedRoleDeletionStatusRequest `object`
  * DeletionTaskId **required**

### GetServiceLinkedRoleDeletionStatusResponse
* GetServiceLinkedRoleDeletionStatusResponse `object`
  * Reason
    * Reason
    * RoleUsageList
      * items [RoleUsageType](#roleusagetype)
  * Status **required**

### GetUserPolicyRequest
* GetUserPolicyRequest `object`
  * PolicyName **required**
  * UserName **required**

### GetUserPolicyResponse
* GetUserPolicyResponse `object`: Contains the response to a successful <a>GetUserPolicy</a> request. 
  * PolicyDocument **required**
  * PolicyName **required**
  * UserName **required**

### GetUserRequest
* GetUserRequest `object`
  * UserName

### GetUserResponse
* GetUserResponse `object`: Contains the response to a successful <a>GetUser</a> request. 
  * User **required**
    * Arn **required**
    * CreateDate **required**
    * PasswordLastUsed
    * Path **required**
    * PermissionsBoundary
      * PermissionsBoundaryArn
      * PermissionsBoundaryType
    * Tags
      * items [Tag](#tag)
    * UserId **required**
    * UserName **required**

### Group
* Group `object`: <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul>
  * Arn **required**
  * CreateDate **required**
  * GroupId **required**
  * GroupName **required**
  * Path **required**

### GroupDetail
* GroupDetail `object`: <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
  * Arn [arnType](#arntype)
  * AttachedManagedPolicies
    * items [AttachedPolicy](#attachedpolicy)
  * CreateDate
  * GroupId
  * GroupName
  * GroupPolicyList
    * items [PolicyDetail](#policydetail)
  * Path

### InstanceProfile
* InstanceProfile `object`: <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
  * Arn **required**
  * CreateDate **required**
  * InstanceProfileId **required**
  * InstanceProfileName **required**
  * Path **required**
  * Roles **required**
    * items [Role](#role)

### InvalidAuthenticationCodeException


### InvalidCertificateException


### InvalidInputException


### InvalidPublicKeyException


### InvalidUserTypeException


### KeyPairMismatchException


### LimitExceededException


### LineNumber
* LineNumber `integer`

### ListAccessKeysRequest
* ListAccessKeysRequest `object`
  * Marker
  * MaxItems
  * UserName

### ListAccessKeysResponse
* ListAccessKeysResponse `object`: Contains the response to a successful <a>ListAccessKeys</a> request. 
  * AccessKeyMetadata **required**
    * items [AccessKeyMetadata](#accesskeymetadata)
  * IsTruncated
  * Marker

### ListAccountAliasesRequest
* ListAccountAliasesRequest `object`
  * Marker
  * MaxItems

### ListAccountAliasesResponse
* ListAccountAliasesResponse `object`: Contains the response to a successful <a>ListAccountAliases</a> request. 
  * AccountAliases **required**
    * items [accountAliasType](#accountaliastype)
  * IsTruncated
  * Marker

### ListAttachedGroupPoliciesRequest
* ListAttachedGroupPoliciesRequest `object`
  * GroupName **required**
  * Marker
  * MaxItems
  * PathPrefix

### ListAttachedGroupPoliciesResponse
* ListAttachedGroupPoliciesResponse `object`: Contains the response to a successful <a>ListAttachedGroupPolicies</a> request. 
  * AttachedPolicies
    * items [AttachedPolicy](#attachedpolicy)
  * IsTruncated
  * Marker

### ListAttachedRolePoliciesRequest
* ListAttachedRolePoliciesRequest `object`
  * Marker
  * MaxItems
  * PathPrefix
  * RoleName **required**

### ListAttachedRolePoliciesResponse
* ListAttachedRolePoliciesResponse `object`: Contains the response to a successful <a>ListAttachedRolePolicies</a> request. 
  * AttachedPolicies
    * items [AttachedPolicy](#attachedpolicy)
  * IsTruncated
  * Marker

### ListAttachedUserPoliciesRequest
* ListAttachedUserPoliciesRequest `object`
  * Marker
  * MaxItems
  * PathPrefix
  * UserName **required**

### ListAttachedUserPoliciesResponse
* ListAttachedUserPoliciesResponse `object`: Contains the response to a successful <a>ListAttachedUserPolicies</a> request. 
  * AttachedPolicies
    * items [AttachedPolicy](#attachedpolicy)
  * IsTruncated
  * Marker

### ListEntitiesForPolicyRequest
* ListEntitiesForPolicyRequest `object`
  * EntityFilter
  * Marker
  * MaxItems
  * PathPrefix
  * PolicyArn **required**
  * PolicyUsageFilter

### ListEntitiesForPolicyResponse
* ListEntitiesForPolicyResponse `object`: Contains the response to a successful <a>ListEntitiesForPolicy</a> request. 
  * IsTruncated
  * Marker
  * PolicyGroups
    * items [PolicyGroup](#policygroup)
  * PolicyRoles
    * items [PolicyRole](#policyrole)
  * PolicyUsers
    * items [PolicyUser](#policyuser)

### ListGroupPoliciesRequest
* ListGroupPoliciesRequest `object`
  * GroupName **required**
  * Marker
  * MaxItems

### ListGroupPoliciesResponse
* ListGroupPoliciesResponse `object`: Contains the response to a successful <a>ListGroupPolicies</a> request. 
  * IsTruncated
  * Marker
  * PolicyNames **required**
    * items [policyNameType](#policynametype)

### ListGroupsForUserRequest
* ListGroupsForUserRequest `object`
  * Marker
  * MaxItems
  * UserName **required**

### ListGroupsForUserResponse
* ListGroupsForUserResponse `object`: Contains the response to a successful <a>ListGroupsForUser</a> request. 
  * Groups **required**
    * items [Group](#group)
  * IsTruncated
  * Marker

### ListGroupsRequest
* ListGroupsRequest `object`
  * Marker
  * MaxItems
  * PathPrefix

### ListGroupsResponse
* ListGroupsResponse `object`: Contains the response to a successful <a>ListGroups</a> request. 
  * Groups **required**
    * items [Group](#group)
  * IsTruncated
  * Marker

### ListInstanceProfilesForRoleRequest
* ListInstanceProfilesForRoleRequest `object`
  * Marker
  * MaxItems
  * RoleName **required**

### ListInstanceProfilesForRoleResponse
* ListInstanceProfilesForRoleResponse `object`: Contains the response to a successful <a>ListInstanceProfilesForRole</a> request. 
  * InstanceProfiles **required**
    * items [InstanceProfile](#instanceprofile)
  * IsTruncated
  * Marker

### ListInstanceProfilesRequest
* ListInstanceProfilesRequest `object`
  * Marker
  * MaxItems
  * PathPrefix

### ListInstanceProfilesResponse
* ListInstanceProfilesResponse `object`: Contains the response to a successful <a>ListInstanceProfiles</a> request. 
  * InstanceProfiles **required**
    * items [InstanceProfile](#instanceprofile)
  * IsTruncated
  * Marker

### ListMFADevicesRequest
* ListMFADevicesRequest `object`
  * Marker
  * MaxItems
  * UserName

### ListMFADevicesResponse
* ListMFADevicesResponse `object`: Contains the response to a successful <a>ListMFADevices</a> request. 
  * IsTruncated
  * MFADevices **required**
    * items [MFADevice](#mfadevice)
  * Marker

### ListOpenIDConnectProvidersRequest
* ListOpenIDConnectProvidersRequest `object`

### ListOpenIDConnectProvidersResponse
* ListOpenIDConnectProvidersResponse `object`: Contains the response to a successful <a>ListOpenIDConnectProviders</a> request. 
  * OpenIDConnectProviderList
    * items [OpenIDConnectProviderListEntry](#openidconnectproviderlistentry)

### ListPoliciesGrantingServiceAccessEntry
* ListPoliciesGrantingServiceAccessEntry `object`: <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
  * Policies
    * items [PolicyGrantingServiceAccess](#policygrantingserviceaccess)
  * ServiceNamespace

### ListPoliciesGrantingServiceAccessRequest
* ListPoliciesGrantingServiceAccessRequest `object`
  * Arn **required**
  * Marker
  * ServiceNamespaces **required**
    * items [serviceNamespaceType](#servicenamespacetype)

### ListPoliciesGrantingServiceAccessResponse
* ListPoliciesGrantingServiceAccessResponse `object`
  * IsTruncated
  * Marker
  * PoliciesGrantingServiceAccess **required**
    * items [ListPoliciesGrantingServiceAccessEntry](#listpoliciesgrantingserviceaccessentry)

### ListPoliciesRequest
* ListPoliciesRequest `object`
  * Marker
  * MaxItems
  * OnlyAttached
  * PathPrefix
  * PolicyUsageFilter
  * Scope

### ListPoliciesResponse
* ListPoliciesResponse `object`: Contains the response to a successful <a>ListPolicies</a> request. 
  * IsTruncated
  * Marker
  * Policies
    * items [Policy](#policy)

### ListPolicyVersionsRequest
* ListPolicyVersionsRequest `object`
  * Marker
  * MaxItems
  * PolicyArn **required**

### ListPolicyVersionsResponse
* ListPolicyVersionsResponse `object`: Contains the response to a successful <a>ListPolicyVersions</a> request. 
  * IsTruncated
  * Marker
  * Versions
    * items [PolicyVersion](#policyversion)

### ListRolePoliciesRequest
* ListRolePoliciesRequest `object`
  * Marker
  * MaxItems
  * RoleName **required**

### ListRolePoliciesResponse
* ListRolePoliciesResponse `object`: Contains the response to a successful <a>ListRolePolicies</a> request. 
  * IsTruncated
  * Marker
  * PolicyNames **required**
    * items [policyNameType](#policynametype)

### ListRoleTagsRequest
* ListRoleTagsRequest `object`
  * Marker
  * MaxItems
  * RoleName **required**

### ListRoleTagsResponse
* ListRoleTagsResponse `object`
  * IsTruncated
  * Marker
  * Tags **required**
    * items [Tag](#tag)

### ListRolesRequest
* ListRolesRequest `object`
  * Marker
  * MaxItems
  * PathPrefix

### ListRolesResponse
* ListRolesResponse `object`: Contains the response to a successful <a>ListRoles</a> request. 
  * IsTruncated
  * Marker
  * Roles **required**
    * items [Role](#role)

### ListSAMLProvidersRequest
* ListSAMLProvidersRequest `object`

### ListSAMLProvidersResponse
* ListSAMLProvidersResponse `object`: Contains the response to a successful <a>ListSAMLProviders</a> request. 
  * SAMLProviderList
    * items [SAMLProviderListEntry](#samlproviderlistentry)

### ListSSHPublicKeysRequest
* ListSSHPublicKeysRequest `object`
  * Marker
  * MaxItems
  * UserName

### ListSSHPublicKeysResponse
* ListSSHPublicKeysResponse `object`: Contains the response to a successful <a>ListSSHPublicKeys</a> request.
  * IsTruncated
  * Marker
  * SSHPublicKeys
    * items [SSHPublicKeyMetadata](#sshpublickeymetadata)

### ListServerCertificatesRequest
* ListServerCertificatesRequest `object`
  * Marker
  * MaxItems
  * PathPrefix

### ListServerCertificatesResponse
* ListServerCertificatesResponse `object`: Contains the response to a successful <a>ListServerCertificates</a> request. 
  * IsTruncated
  * Marker
  * ServerCertificateMetadataList **required**
    * items [ServerCertificateMetadata](#servercertificatemetadata)

### ListServiceSpecificCredentialsRequest
* ListServiceSpecificCredentialsRequest `object`
  * ServiceName
  * UserName

### ListServiceSpecificCredentialsResponse
* ListServiceSpecificCredentialsResponse `object`
  * ServiceSpecificCredentials
    * items [ServiceSpecificCredentialMetadata](#servicespecificcredentialmetadata)

### ListSigningCertificatesRequest
* ListSigningCertificatesRequest `object`
  * Marker
  * MaxItems
  * UserName

### ListSigningCertificatesResponse
* ListSigningCertificatesResponse `object`: Contains the response to a successful <a>ListSigningCertificates</a> request. 
  * Certificates **required**
    * items [SigningCertificate](#signingcertificate)
  * IsTruncated
  * Marker

### ListUserPoliciesRequest
* ListUserPoliciesRequest `object`
  * Marker
  * MaxItems
  * UserName **required**

### ListUserPoliciesResponse
* ListUserPoliciesResponse `object`: Contains the response to a successful <a>ListUserPolicies</a> request. 
  * IsTruncated
  * Marker
  * PolicyNames **required**
    * items [policyNameType](#policynametype)

### ListUserTagsRequest
* ListUserTagsRequest `object`
  * Marker
  * MaxItems
  * UserName **required**

### ListUserTagsResponse
* ListUserTagsResponse `object`
  * IsTruncated
  * Marker
  * Tags **required**
    * items [Tag](#tag)

### ListUsersRequest
* ListUsersRequest `object`
  * Marker
  * MaxItems
  * PathPrefix

### ListUsersResponse
* ListUsersResponse `object`: Contains the response to a successful <a>ListUsers</a> request. 
  * IsTruncated
  * Marker
  * Users **required**
    * items [User](#user)

### ListVirtualMFADevicesRequest
* ListVirtualMFADevicesRequest `object`
  * AssignmentStatus
  * Marker
  * MaxItems

### ListVirtualMFADevicesResponse
* ListVirtualMFADevicesResponse `object`: Contains the response to a successful <a>ListVirtualMFADevices</a> request. 
  * IsTruncated
  * Marker
  * VirtualMFADevices **required**
    * items [VirtualMFADevice](#virtualmfadevice)

### LoginProfile
* LoginProfile `object`: <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
  * CreateDate **required**
  * PasswordResetRequired
  * UserName **required**

### MFADevice
* MFADevice `object`: <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p>
  * EnableDate **required**
  * SerialNumber **required**
  * UserName **required**

### MalformedCertificateException


### MalformedPolicyDocumentException


### ManagedPolicyDetail
* ManagedPolicyDetail `object`: <p>Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p>
  * Arn [arnType](#arntype)
  * AttachmentCount
  * CreateDate
  * DefaultVersionId
  * Description
  * IsAttachable
  * Path
  * PermissionsBoundaryUsageCount
  * PolicyId
  * PolicyName
  * PolicyVersionList
    * items [PolicyVersion](#policyversion)
  * UpdateDate

### ManagedPolicyDetailListType
* ManagedPolicyDetailListType `array`
  * items [ManagedPolicyDetail](#managedpolicydetail)

### NoSuchEntityException


### OpenIDConnectProviderListEntry
* OpenIDConnectProviderListEntry `object`: Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.
  * Arn [arnType](#arntype)

### OpenIDConnectProviderListType
* OpenIDConnectProviderListType `array`: Contains a list of IAM OpenID Connect providers.
  * items [OpenIDConnectProviderListEntry](#openidconnectproviderlistentry)

### OpenIDConnectProviderUrlType
* OpenIDConnectProviderUrlType `string`: Contains a URL that specifies the endpoint for an OpenID Connect provider.

### OrganizationsDecisionDetail
* OrganizationsDecisionDetail `object`: Contains information about the effect that Organizations has on a policy simulation.
  * AllowedByOrganizations

### PasswordPolicy
* PasswordPolicy `object`: <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p>
  * AllowUsersToChangePassword
  * ExpirePasswords
  * HardExpiry
  * MaxPasswordAge
  * MinimumPasswordLength
  * PasswordReusePrevention
  * RequireLowercaseCharacters
  * RequireNumbers
  * RequireSymbols
  * RequireUppercaseCharacters

### PasswordPolicyViolationException


### PermissionsBoundaryAttachmentType
* PermissionsBoundaryAttachmentType `string` (values: PermissionsBoundaryPolicy)

### PermissionsBoundaryDecisionDetail
* PermissionsBoundaryDecisionDetail `object`: Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity.
  * AllowedByPermissionsBoundary

### Policy
* Policy `object`: <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p>
  * Arn [arnType](#arntype)
  * AttachmentCount
  * CreateDate
  * DefaultVersionId
  * Description
  * IsAttachable
  * Path
  * PermissionsBoundaryUsageCount
  * PolicyId
  * PolicyName
  * UpdateDate

### PolicyDetail
* PolicyDetail `object`: <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
  * PolicyDocument
  * PolicyName

### PolicyEvaluationDecisionType
* PolicyEvaluationDecisionType `string` (values: allowed, explicitDeny, implicitDeny)

### PolicyEvaluationException


### PolicyGrantingServiceAccess
* PolicyGrantingServiceAccess `object`: <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
  * EntityName
  * EntityType
  * PolicyArn [arnType](#arntype)
  * PolicyName **required**
  * PolicyType **required**

### PolicyGroup
* PolicyGroup `object`: <p>Contains information about a group that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p>
  * GroupId
  * GroupName

### PolicyGroupListType
* PolicyGroupListType `array`
  * items [PolicyGroup](#policygroup)

### PolicyIdentifierType
* PolicyIdentifierType `string`

### PolicyNotAttachableException


### PolicyRole
* PolicyRole `object`: <p>Contains information about a role that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p>
  * RoleId
  * RoleName

### PolicyRoleListType
* PolicyRoleListType `array`
  * items [PolicyRole](#policyrole)

### PolicySourceType
* PolicySourceType `string` (values: user, group, role, aws-managed, user-managed, resource, none)

### PolicyUsageType
* PolicyUsageType `string` (values: PermissionsPolicy, PermissionsBoundary): <p>The policy usage type that indicates whether the policy is used as a permissions policy or as the permissions boundary for an entity.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>

### PolicyUser
* PolicyUser `object`: <p>Contains information about a user that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p>
  * UserId
  * UserName

### PolicyUserListType
* PolicyUserListType `array`
  * items [PolicyUser](#policyuser)

### PolicyVersion
* PolicyVersion `object`: <p>Contains information about a version of a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p>
  * CreateDate
  * Document
  * IsDefaultVersion
  * VersionId

### Position
* Position `object`: <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p>
  * Column
  * Line

### PutGroupPolicyRequest
* PutGroupPolicyRequest `object`
  * GroupName **required**
  * PolicyDocument **required**
  * PolicyName **required**

### PutRolePermissionsBoundaryRequest
* PutRolePermissionsBoundaryRequest `object`
  * PermissionsBoundary **required**
  * RoleName **required**

### PutRolePolicyRequest
* PutRolePolicyRequest `object`
  * PolicyDocument **required**
  * PolicyName **required**
  * RoleName **required**

### PutUserPermissionsBoundaryRequest
* PutUserPermissionsBoundaryRequest `object`
  * PermissionsBoundary **required**
  * UserName **required**

### PutUserPolicyRequest
* PutUserPolicyRequest `object`
  * PolicyDocument **required**
  * PolicyName **required**
  * UserName **required**

### ReasonType
* ReasonType `string`

### RegionNameType
* RegionNameType `string`

### RemoveClientIDFromOpenIDConnectProviderRequest
* RemoveClientIDFromOpenIDConnectProviderRequest `object`
  * ClientID **required**
  * OpenIDConnectProviderArn **required**

### RemoveRoleFromInstanceProfileRequest
* RemoveRoleFromInstanceProfileRequest `object`
  * InstanceProfileName **required**
  * RoleName **required**

### RemoveUserFromGroupRequest
* RemoveUserFromGroupRequest `object`
  * GroupName **required**
  * UserName **required**

### ReportContentType
* ReportContentType `string`

### ReportFormatType
* ReportFormatType `string` (values: text/csv)

### ReportGenerationLimitExceededException


### ReportStateDescriptionType
* ReportStateDescriptionType `string`

### ReportStateType
* ReportStateType `string` (values: STARTED, INPROGRESS, COMPLETE)

### ResetServiceSpecificCredentialRequest
* ResetServiceSpecificCredentialRequest `object`
  * ServiceSpecificCredentialId **required**
  * UserName

### ResetServiceSpecificCredentialResponse
* ResetServiceSpecificCredentialResponse `object`
  * ServiceSpecificCredential
    * CreateDate **required**
    * ServiceName **required**
    * ServicePassword **required**
    * ServiceSpecificCredentialId **required**
    * ServiceUserName **required**
    * Status **required**
    * UserName **required**

### ResourceHandlingOptionType
* ResourceHandlingOptionType `string`

### ResourceNameListType
* ResourceNameListType `array`
  * items [ResourceNameType](#resourcenametype)

### ResourceNameType
* ResourceNameType `string`

### ResourceSpecificResult
* ResourceSpecificResult `object`: <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
  * EvalDecisionDetails
  * EvalResourceDecision **required**
  * EvalResourceName **required**
  * MatchedStatements
    * items [Statement](#statement)
  * MissingContextValues
    * items [ContextKeyNameType](#contextkeynametype)
  * PermissionsBoundaryDecisionDetail
    * AllowedByPermissionsBoundary

### ResourceSpecificResultListType
* ResourceSpecificResultListType `array`
  * items [ResourceSpecificResult](#resourcespecificresult)

### ResyncMFADeviceRequest
* ResyncMFADeviceRequest `object`
  * AuthenticationCode1 **required**
  * AuthenticationCode2 **required**
  * SerialNumber **required**
  * UserName **required**

### Role
* Role `object`: Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
  * Arn **required**
  * AssumeRolePolicyDocument
  * CreateDate **required**
  * Description
  * MaxSessionDuration
  * Path **required**
  * PermissionsBoundary
    * PermissionsBoundaryArn
    * PermissionsBoundaryType
  * RoleId **required**
  * RoleLastUsed
    * LastUsedDate
    * Region
  * RoleName **required**
  * Tags
    * items [Tag](#tag)

### RoleDetail
* RoleDetail `object`: <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
  * Arn [arnType](#arntype)
  * AssumeRolePolicyDocument
  * AttachedManagedPolicies
    * items [AttachedPolicy](#attachedpolicy)
  * CreateDate
  * InstanceProfileList
    * items [InstanceProfile](#instanceprofile)
  * Path
  * PermissionsBoundary
    * PermissionsBoundaryArn
    * PermissionsBoundaryType
  * RoleId
  * RoleLastUsed
    * LastUsedDate
    * Region
  * RoleName
  * RolePolicyList
    * items [PolicyDetail](#policydetail)
  * Tags
    * items [Tag](#tag)

### RoleLastUsed
* RoleLastUsed `object`: <p>Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User Guide</i>.</p> <p>This data type is returned as a response element in the <a>GetRole</a> and <a>GetAccountAuthorizationDetails</a> operations.</p>
  * LastUsedDate
  * Region

### RoleUsageListType
* RoleUsageListType `array`
  * items [RoleUsageType](#roleusagetype)

### RoleUsageType
* RoleUsageType `object`: <p>An object that contains details about how a service-linked role is used, if that information is returned by the service.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
  * Region
  * Resources
    * items [arnType](#arntype)

### SAMLMetadataDocumentType
* SAMLMetadataDocumentType `string`

### SAMLProviderListEntry
* SAMLProviderListEntry `object`: Contains the list of SAML providers for this account.
  * Arn
  * CreateDate
  * ValidUntil

### SAMLProviderListType
* SAMLProviderListType `array`
  * items [SAMLProviderListEntry](#samlproviderlistentry)

### SAMLProviderNameType
* SAMLProviderNameType `string`

### SSHPublicKey
* SSHPublicKey `object`: <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p>
  * Fingerprint **required**
  * SSHPublicKeyBody **required**
  * SSHPublicKeyId **required**
  * Status **required**
  * UploadDate
  * UserName **required**

### SSHPublicKeyListType
* SSHPublicKeyListType `array`
  * items [SSHPublicKeyMetadata](#sshpublickeymetadata)

### SSHPublicKeyMetadata
* SSHPublicKeyMetadata `object`: <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p>
  * SSHPublicKeyId **required**
  * Status **required**
  * UploadDate **required**
  * UserName **required**

### ServerCertificate
* ServerCertificate `object`: <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
  * CertificateBody **required**
  * CertificateChain
  * ServerCertificateMetadata **required**
    * Arn **required**
    * Expiration
    * Path **required**
    * ServerCertificateId **required**
    * ServerCertificateName **required**
    * UploadDate

### ServerCertificateMetadata
* ServerCertificateMetadata `object`: <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p>
  * Arn **required**
  * Expiration
  * Path **required**
  * ServerCertificateId **required**
  * ServerCertificateName **required**
  * UploadDate

### ServiceFailureException


### ServiceLastAccessed
* ServiceLastAccessed `object`: <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
  * LastAuthenticated
  * LastAuthenticatedEntity
  * LastAuthenticatedRegion
  * ServiceName **required**
  * ServiceNamespace **required**
  * TotalAuthenticatedEntities
  * TrackedActionsLastAccessed
    * items [TrackedActionLastAccessed](#trackedactionlastaccessed)

### ServiceNotSupportedException


### ServiceSpecificCredential
* ServiceSpecificCredential `object`: Contains the details of a service-specific credential.
  * CreateDate **required**
  * ServiceName **required**
  * ServicePassword **required**
  * ServiceSpecificCredentialId **required**
  * ServiceUserName **required**
  * Status **required**
  * UserName **required**

### ServiceSpecificCredentialMetadata
* ServiceSpecificCredentialMetadata `object`: Contains additional details about a service-specific credential.
  * CreateDate **required**
  * ServiceName **required**
  * ServiceSpecificCredentialId **required**
  * ServiceUserName **required**
  * Status **required**
  * UserName **required**

### ServiceSpecificCredentialsListType
* ServiceSpecificCredentialsListType `array`
  * items [ServiceSpecificCredentialMetadata](#servicespecificcredentialmetadata)

### ServicesLastAccessed
* ServicesLastAccessed `array`
  * items [ServiceLastAccessed](#servicelastaccessed)

### SetDefaultPolicyVersionRequest
* SetDefaultPolicyVersionRequest `object`
  * PolicyArn **required**
  * VersionId **required**

### SetSecurityTokenServicePreferencesRequest
* SetSecurityTokenServicePreferencesRequest `object`
  * GlobalEndpointTokenVersion **required**

### SigningCertificate
* SigningCertificate `object`: <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p>
  * CertificateBody **required**
  * CertificateId **required**
  * Status **required**
  * UploadDate
  * UserName **required**

### SimulateCustomPolicyRequest
* SimulateCustomPolicyRequest `object`
  * ActionNames **required**
    * items [ActionNameType](#actionnametype)
  * CallerArn
  * ContextEntries
    * items [ContextEntry](#contextentry)
  * Marker
  * MaxItems
  * PermissionsBoundaryPolicyInputList
    * items [policyDocumentType](#policydocumenttype)
  * PolicyInputList **required**
    * items [policyDocumentType](#policydocumenttype)
  * ResourceArns
    * items [ResourceNameType](#resourcenametype)
  * ResourceHandlingOption
  * ResourceOwner
  * ResourcePolicy

### SimulatePolicyResponse
* SimulatePolicyResponse `object`: Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request.
  * EvaluationResults
    * items [EvaluationResult](#evaluationresult)
  * IsTruncated
  * Marker

### SimulatePrincipalPolicyRequest
* SimulatePrincipalPolicyRequest `object`
  * ActionNames **required**
    * items [ActionNameType](#actionnametype)
  * CallerArn
  * ContextEntries
    * items [ContextEntry](#contextentry)
  * Marker
  * MaxItems
  * PermissionsBoundaryPolicyInputList
    * items [policyDocumentType](#policydocumenttype)
  * PolicyInputList
    * items [policyDocumentType](#policydocumenttype)
  * PolicySourceArn **required**
  * ResourceArns
    * items [ResourceNameType](#resourcenametype)
  * ResourceHandlingOption
  * ResourceOwner
  * ResourcePolicy

### SimulationPolicyListType
* SimulationPolicyListType `array`
  * items [policyDocumentType](#policydocumenttype)

### Statement
* Statement `object`: <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
  * EndPosition
    * Column
    * Line
  * SourcePolicyId
  * SourcePolicyType
  * StartPosition
    * Column
    * Line

### StatementListType
* StatementListType `array`
  * items [Statement](#statement)

### Tag
* Tag `object`: A structure that represents user-provided metadata that can be associated with a resource such as an IAM user or role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.
  * Key **required**
  * Value **required**

### TagRoleRequest
* TagRoleRequest `object`
  * RoleName **required**
  * Tags **required**
    * items [Tag](#tag)

### TagUserRequest
* TagUserRequest `object`
  * Tags **required**
    * items [Tag](#tag)
  * UserName **required**

### TrackedActionLastAccessed
* TrackedActionLastAccessed `object`: <p>Contains details about the most recent attempt to access an action within the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
  * ActionName
  * LastAccessedEntity [arnType](#arntype)
  * LastAccessedRegion
  * LastAccessedTime

### TrackedActionsLastAccessed
* TrackedActionsLastAccessed `array`
  * items [TrackedActionLastAccessed](#trackedactionlastaccessed)

### UnmodifiableEntityException


### UnrecognizedPublicKeyEncodingException


### UntagRoleRequest
* UntagRoleRequest `object`
  * RoleName **required**
  * TagKeys **required**
    * items [tagKeyType](#tagkeytype)

### UntagUserRequest
* UntagUserRequest `object`
  * TagKeys **required**
    * items [tagKeyType](#tagkeytype)
  * UserName **required**

### UpdateAccessKeyRequest
* UpdateAccessKeyRequest `object`
  * AccessKeyId **required**
  * Status **required**
  * UserName

### UpdateAccountPasswordPolicyRequest
* UpdateAccountPasswordPolicyRequest `object`
  * AllowUsersToChangePassword
  * HardExpiry
  * MaxPasswordAge
  * MinimumPasswordLength
  * PasswordReusePrevention
  * RequireLowercaseCharacters
  * RequireNumbers
  * RequireSymbols
  * RequireUppercaseCharacters

### UpdateAssumeRolePolicyRequest
* UpdateAssumeRolePolicyRequest `object`
  * PolicyDocument **required**
  * RoleName **required**

### UpdateGroupRequest
* UpdateGroupRequest `object`
  * GroupName **required**
  * NewGroupName
  * NewPath

### UpdateLoginProfileRequest
* UpdateLoginProfileRequest `object`
  * Password
  * PasswordResetRequired
  * UserName **required**

### UpdateOpenIDConnectProviderThumbprintRequest
* UpdateOpenIDConnectProviderThumbprintRequest `object`
  * OpenIDConnectProviderArn **required**
  * ThumbprintList **required**
    * items [thumbprintType](#thumbprinttype)

### UpdateRoleDescriptionRequest
* UpdateRoleDescriptionRequest `object`
  * Description **required**
  * RoleName **required**

### UpdateRoleDescriptionResponse
* UpdateRoleDescriptionResponse `object`
  * Role
    * Arn **required**
    * AssumeRolePolicyDocument
    * CreateDate **required**
    * Description
    * MaxSessionDuration
    * Path **required**
    * PermissionsBoundary
      * PermissionsBoundaryArn
      * PermissionsBoundaryType
    * RoleId **required**
    * RoleLastUsed
      * LastUsedDate
      * Region
    * RoleName **required**
    * Tags
      * items [Tag](#tag)

### UpdateRoleRequest
* UpdateRoleRequest `object`
  * Description
  * MaxSessionDuration
  * RoleName **required**

### UpdateRoleResponse
* UpdateRoleResponse `object`

### UpdateSAMLProviderRequest
* UpdateSAMLProviderRequest `object`
  * SAMLMetadataDocument **required**
  * SAMLProviderArn **required**

### UpdateSAMLProviderResponse
* UpdateSAMLProviderResponse `object`: Contains the response to a successful <a>UpdateSAMLProvider</a> request. 
  * SAMLProviderArn

### UpdateSSHPublicKeyRequest
* UpdateSSHPublicKeyRequest `object`
  * SSHPublicKeyId **required**
  * Status **required**
  * UserName **required**

### UpdateServerCertificateRequest
* UpdateServerCertificateRequest `object`
  * NewPath
  * NewServerCertificateName
  * ServerCertificateName **required**

### UpdateServiceSpecificCredentialRequest
* UpdateServiceSpecificCredentialRequest `object`
  * ServiceSpecificCredentialId **required**
  * Status **required**
  * UserName

### UpdateSigningCertificateRequest
* UpdateSigningCertificateRequest `object`
  * CertificateId **required**
  * Status **required**
  * UserName

### UpdateUserRequest
* UpdateUserRequest `object`
  * NewPath
  * NewUserName
  * UserName **required**

### UploadSSHPublicKeyRequest
* UploadSSHPublicKeyRequest `object`
  * SSHPublicKeyBody **required**
  * UserName **required**

### UploadSSHPublicKeyResponse
* UploadSSHPublicKeyResponse `object`: Contains the response to a successful <a>UploadSSHPublicKey</a> request.
  * SSHPublicKey
    * Fingerprint **required**
    * SSHPublicKeyBody **required**
    * SSHPublicKeyId **required**
    * Status **required**
    * UploadDate
    * UserName **required**

### UploadServerCertificateRequest
* UploadServerCertificateRequest `object`
  * CertificateBody **required**
  * CertificateChain
  * Path
  * PrivateKey **required**
  * ServerCertificateName **required**

### UploadServerCertificateResponse
* UploadServerCertificateResponse `object`: Contains the response to a successful <a>UploadServerCertificate</a> request. 
  * ServerCertificateMetadata
    * Arn **required**
    * Expiration
    * Path **required**
    * ServerCertificateId **required**
    * ServerCertificateName **required**
    * UploadDate

### UploadSigningCertificateRequest
* UploadSigningCertificateRequest `object`
  * CertificateBody **required**
  * UserName

### UploadSigningCertificateResponse
* UploadSigningCertificateResponse `object`: Contains the response to a successful <a>UploadSigningCertificate</a> request. 
  * Certificate **required**
    * CertificateBody **required**
    * CertificateId **required**
    * Status **required**
    * UploadDate
    * UserName **required**

### User
* User `object`: <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
  * Arn **required**
  * CreateDate **required**
  * PasswordLastUsed
  * Path **required**
  * PermissionsBoundary
    * PermissionsBoundaryArn
    * PermissionsBoundaryType
  * Tags
    * items [Tag](#tag)
  * UserId **required**
  * UserName **required**

### UserDetail
* UserDetail `object`: <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
  * Arn [arnType](#arntype)
  * AttachedManagedPolicies
    * items [AttachedPolicy](#attachedpolicy)
  * CreateDate
  * GroupList
    * items [groupNameType](#groupnametype)
  * Path
  * PermissionsBoundary
    * PermissionsBoundaryArn
    * PermissionsBoundaryType
  * Tags
    * items [Tag](#tag)
  * UserId
  * UserName
  * UserPolicyList
    * items [PolicyDetail](#policydetail)

### VirtualMFADevice
* VirtualMFADevice `object`: Contains information about a virtual MFA device.
  * Base32StringSeed
  * EnableDate
  * QRCodePNG
  * SerialNumber **required**
  * User
    * Arn **required**
    * CreateDate **required**
    * PasswordLastUsed
    * Path **required**
    * PermissionsBoundary
      * PermissionsBoundaryArn
      * PermissionsBoundaryType
    * Tags
      * items [Tag](#tag)
    * UserId **required**
    * UserName **required**

### accessKeyIdType
* accessKeyIdType `string`

### accessKeyMetadataListType
* accessKeyMetadataListType `array`: <p>Contains a list of access key metadata.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
  * items [AccessKeyMetadata](#accesskeymetadata)

### accessKeySecretType
* accessKeySecretType `string`

### accountAliasListType
* accountAliasListType `array`
  * items [accountAliasType](#accountaliastype)

### accountAliasType
* accountAliasType `string`

### arnType
* arnType `string`: <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

### assignmentStatusType
* assignmentStatusType `string` (values: Assigned, Unassigned, Any)

### attachedPoliciesListType
* attachedPoliciesListType `array`
  * items [AttachedPolicy](#attachedpolicy)

### attachmentCountType
* attachmentCountType `integer`

### authenticationCodeType
* authenticationCodeType `string`

### booleanObjectType
* booleanObjectType `boolean`

### booleanType
* booleanType `boolean`

### certificateBodyType
* certificateBodyType `string`

### certificateChainType
* certificateChainType `string`

### certificateIdType
* certificateIdType `string`

### certificateListType
* certificateListType `array`: <p>Contains a list of signing certificates.</p> <p>This data type is used as a response element in the <a>ListSigningCertificates</a> operation.</p>
  * items [SigningCertificate](#signingcertificate)

### clientIDListType
* clientIDListType `array`
  * items [clientIDType](#clientidtype)

### clientIDType
* clientIDType `string`

### customSuffixType
* customSuffixType `string`

### dateType
* dateType `string`

### encodingType
* encodingType `string` (values: SSH, PEM)

### entityDetailsListType
* entityDetailsListType `array`
  * items [EntityDetails](#entitydetails)

### entityListType
* entityListType `array`
  * items [EntityType](#entitytype)

### entityNameType
* entityNameType `string`

### existingUserNameType
* existingUserNameType `string`

### globalEndpointTokenVersion
* globalEndpointTokenVersion `string` (values: v1Token, v2Token)

### groupDetailListType
* groupDetailListType `array`
  * items [GroupDetail](#groupdetail)

### groupListType
* groupListType `array`: <p>Contains a list of IAM groups.</p> <p>This data type is used as a response element in the <a>ListGroups</a> operation.</p>
  * items [Group](#group)

### groupNameListType
* groupNameListType `array`
  * items [groupNameType](#groupnametype)

### groupNameType
* groupNameType `string`

### idType
* idType `string`

### instanceProfileListType
* instanceProfileListType `array`: Contains a list of instance profiles.
  * items [InstanceProfile](#instanceprofile)

### instanceProfileNameType
* instanceProfileNameType `string`

### integerType
* integerType `integer`

### jobIDType
* jobIDType `string`

### jobStatusType
* jobStatusType `string` (values: IN_PROGRESS, COMPLETED, FAILED)

### listPolicyGrantingServiceAccessResponseListType
* listPolicyGrantingServiceAccessResponseListType `array`
  * items [ListPoliciesGrantingServiceAccessEntry](#listpoliciesgrantingserviceaccessentry)

### markerType
* markerType `string`

### maxItemsType
* maxItemsType `integer`

### maxPasswordAgeType
* maxPasswordAgeType `integer`

### mfaDeviceListType
* mfaDeviceListType `array`: <p>Contains a list of MFA devices.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> and <a>ListVirtualMFADevices</a> operations. </p>
  * items [MFADevice](#mfadevice)

### minimumPasswordLengthType
* minimumPasswordLengthType `integer`

### organizationsEntityPathType
* organizationsEntityPathType `string`

### organizationsPolicyIdType
* organizationsPolicyIdType `string`

### passwordReusePreventionType
* passwordReusePreventionType `integer`

### passwordType
* passwordType `string`

### pathPrefixType
* pathPrefixType `string`

### pathType
* pathType `string`

### policyDescriptionType
* policyDescriptionType `string`

### policyDetailListType
* policyDetailListType `array`
  * items [PolicyDetail](#policydetail)

### policyDocumentType
* policyDocumentType `string`

### policyDocumentVersionListType
* policyDocumentVersionListType `array`
  * items [PolicyVersion](#policyversion)

### policyGrantingServiceAccessListType
* policyGrantingServiceAccessListType `array`
  * items [PolicyGrantingServiceAccess](#policygrantingserviceaccess)

### policyListType
* policyListType `array`
  * items [Policy](#policy)

### policyNameListType
* policyNameListType `array`: <p>Contains a list of policy names.</p> <p>This data type is used as a response element in the <a>ListPolicies</a> operation.</p>
  * items [policyNameType](#policynametype)

### policyNameType
* policyNameType `string`

### policyOwnerEntityType
* policyOwnerEntityType `string` (values: USER, ROLE, GROUP)

### policyPathType
* policyPathType `string`

### policyScopeType
* policyScopeType `string` (values: All, AWS, Local)

### policyType
* policyType `string` (values: INLINE, MANAGED)

### policyVersionIdType
* policyVersionIdType `string`

### privateKeyType
* privateKeyType `string`

### publicKeyFingerprintType
* publicKeyFingerprintType `string`

### publicKeyIdType
* publicKeyIdType `string`

### publicKeyMaterialType
* publicKeyMaterialType `string`

### responseMarkerType
* responseMarkerType `string`

### roleDescriptionType
* roleDescriptionType `string`

### roleDetailListType
* roleDetailListType `array`
  * items [RoleDetail](#roledetail)

### roleListType
* roleListType `array`: <p>Contains a list of IAM roles.</p> <p>This data type is used as a response element in the <a>ListRoles</a> operation.</p>
  * items [Role](#role)

### roleMaxSessionDurationType
* roleMaxSessionDurationType `integer`

### roleNameType
* roleNameType `string`

### serialNumberType
* serialNumberType `string`

### serverCertificateMetadataListType
* serverCertificateMetadataListType `array`
  * items [ServerCertificateMetadata](#servercertificatemetadata)

### serverCertificateNameType
* serverCertificateNameType `string`

### serviceName
* serviceName `string`

### serviceNameType
* serviceNameType `string`

### serviceNamespaceListType
* serviceNamespaceListType `array`
  * items [serviceNamespaceType](#servicenamespacetype)

### serviceNamespaceType
* serviceNamespaceType `string`

### servicePassword
* servicePassword `string`

### serviceSpecificCredentialId
* serviceSpecificCredentialId `string`

### serviceUserName
* serviceUserName `string`

### sortKeyType
* sortKeyType `string` (values: SERVICE_NAMESPACE_ASCENDING, SERVICE_NAMESPACE_DESCENDING, LAST_AUTHENTICATED_TIME_ASCENDING, LAST_AUTHENTICATED_TIME_DESCENDING)

### statusType
* statusType `string` (values: Active, Inactive)

### stringType
* stringType `string`

### summaryKeyType
* summaryKeyType `string` (values: Users, UsersQuota, Groups, GroupsQuota, ServerCertificates, ServerCertificatesQuota, UserPolicySizeQuota, GroupPolicySizeQuota, GroupsPerUserQuota, SigningCertificatesPerUserQuota, AccessKeysPerUserQuota, MFADevices, MFADevicesInUse, AccountMFAEnabled, AccountAccessKeysPresent, AccountSigningCertificatesPresent, AttachedPoliciesPerGroupQuota, AttachedPoliciesPerRoleQuota, AttachedPoliciesPerUserQuota, Policies, PoliciesQuota, PolicySizeQuota, PolicyVersionsInUse, PolicyVersionsInUseQuota, VersionsPerPolicyQuota, GlobalEndpointTokenVersion)

### summaryMapType
* summaryMapType `object`

### summaryValueType
* summaryValueType `integer`

### tagKeyListType
* tagKeyListType `array`
  * items [tagKeyType](#tagkeytype)

### tagKeyType
* tagKeyType `string`

### tagListType
* tagListType `array`
  * items [Tag](#tag)

### tagValueType
* tagValueType `string`

### thumbprintListType
* thumbprintListType `array`: Contains a list of thumbprints of identity provider server certificates.
  * items [thumbprintType](#thumbprinttype)

### thumbprintType
* thumbprintType `string`: <p>Contains a thumbprint for an identity provider's server certificate.</p> <p>The identity provider's server certificate thumbprint is the hex-encoded SHA-1 hash value of the self-signed X.509 certificate. This thumbprint is used by the domain where the OpenID Connect provider makes its keys available. The thumbprint is always a 40-character string.</p>

### userDetailListType
* userDetailListType `array`
  * items [UserDetail](#userdetail)

### userListType
* userListType `array`: <p>Contains a list of users.</p> <p>This data type is used as a response element in the <a>GetGroup</a> and <a>ListUsers</a> operations. </p>
  * items [User](#user)

### userNameType
* userNameType `string`

### virtualMFADeviceListType
* virtualMFADeviceListType `array`
  * items [VirtualMFADevice](#virtualmfadevice)

### virtualMFADeviceName
* virtualMFADeviceName `string`


