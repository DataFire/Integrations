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

amazonaws_iam.AddClientIDToOpenIDConnectProvider({
  "OpenIDConnectProviderArn": "",
  "ClientID": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * ClientID **required** [clientIDType](#clientidtype)
  * OpenIDConnectProviderArn **required** [arnType](#arntype)

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
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * GroupName **required** [groupNameType](#groupnametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

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
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyArn **required** [arnType](#arntype)

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
  * PolicyArn **required** [arnType](#arntype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * PolicyArn **required** [arnType](#arntype)
  * UserName **required** [userNameType](#usernametype)

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
  * NewPassword **required** [passwordType](#passwordtype)
  * OldPassword **required** [passwordType](#passwordtype)

#### Output
*Output schema unknown*

### CreateAccessKey



```js
amazonaws_iam.CreateAccessKey({}, context)
```

#### Input
* input `object`
  * UserName [existingUserNameType](#existingusernametype)

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
  * AccountAlias **required** [accountAliasType](#accountaliastype)

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
  * GroupName **required** [groupNameType](#groupnametype)
  * Path [pathType](#pathtype)

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
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)
  * Path [pathType](#pathtype)

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
  * Password **required** [passwordType](#passwordtype)
  * PasswordResetRequired [booleanType](#booleantype)
  * UserName **required** [userNameType](#usernametype)

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
  * ClientIDList [clientIDListType](#clientidlisttype)
  * ThumbprintList **required** [thumbprintListType](#thumbprintlisttype)
  * Url **required** [OpenIDConnectProviderUrlType](#openidconnectproviderurltype)

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
  * Description [policyDescriptionType](#policydescriptiontype)
  * Path [policyPathType](#policypathtype)
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)

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
  * PolicyArn **required** [arnType](#arntype)
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * SetAsDefault [booleanType](#booleantype)

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
  * AssumeRolePolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * Description [roleDescriptionType](#roledescriptiontype)
  * Path [pathType](#pathtype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * Name **required** [SAMLProviderNameType](#samlprovidernametype)
  * SAMLMetadataDocument **required** [SAMLMetadataDocumentType](#samlmetadatadocumenttype)

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
  * AWSServiceName **required** [groupNameType](#groupnametype)
  * CustomSuffix [customSuffixType](#customsuffixtype)
  * Description [roleDescriptionType](#roledescriptiontype)

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
  * ServiceName **required** [serviceName](#servicename)
  * UserName **required** [userNameType](#usernametype)

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
  * Path [pathType](#pathtype)
  * UserName **required** [userNameType](#usernametype)

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
  * Path [pathType](#pathtype)
  * VirtualMFADeviceName **required** [virtualMFADeviceName](#virtualmfadevicename)

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
  * SerialNumber **required** [serialNumberType](#serialnumbertype)
  * UserName **required** [existingUserNameType](#existingusernametype)

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
  * AccessKeyId **required** [accessKeyIdType](#accesskeyidtype)
  * UserName [existingUserNameType](#existingusernametype)

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
  * AccountAlias **required** [accountAliasType](#accountaliastype)

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
  * GroupName **required** [groupNameType](#groupnametype)

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
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyName **required** [policyNameType](#policynametype)

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
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)

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
  * UserName **required** [userNameType](#usernametype)

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
  * OpenIDConnectProviderArn **required** [arnType](#arntype)

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
  * PolicyArn **required** [arnType](#arntype)

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
  * PolicyArn **required** [arnType](#arntype)
  * VersionId **required** [policyVersionIdType](#policyversionidtype)

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
  * RoleName **required** [roleNameType](#rolenametype)

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
  * PolicyName **required** [policyNameType](#policynametype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * SAMLProviderArn **required** [arnType](#arntype)

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
  * SSHPublicKeyId **required** [publicKeyIdType](#publickeyidtype)
  * UserName **required** [userNameType](#usernametype)

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
  * ServerCertificateName **required** [serverCertificateNameType](#servercertificatenametype)

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
  * RoleName **required** [roleNameType](#rolenametype)

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
  * ServiceSpecificCredentialId **required** [serviceSpecificCredentialId](#servicespecificcredentialid)
  * UserName [userNameType](#usernametype)

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
  * CertificateId **required** [certificateIdType](#certificateidtype)
  * UserName [existingUserNameType](#existingusernametype)

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
  * UserName **required** [existingUserNameType](#existingusernametype)

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
  * PolicyName **required** [policyNameType](#policynametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

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
  * SerialNumber **required** [serialNumberType](#serialnumbertype)

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
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyArn **required** [arnType](#arntype)

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
  * PolicyArn **required** [arnType](#arntype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * PolicyArn **required** [arnType](#arntype)
  * UserName **required** [userNameType](#usernametype)

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
  * AuthenticationCode1 **required** [authenticationCodeType](#authenticationcodetype)
  * AuthenticationCode2 **required** [authenticationCodeType](#authenticationcodetype)
  * SerialNumber **required** [serialNumberType](#serialnumbertype)
  * UserName **required** [existingUserNameType](#existingusernametype)

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

### GetAccessKeyLastUsed



```js
amazonaws_iam.GetAccessKeyLastUsed({
  "AccessKeyId": ""
}, context)
```

#### Input
* input `object`
  * AccessKeyId **required** [accessKeyIdType](#accesskeyidtype)

#### Output
* output [GetAccessKeyLastUsedResponse](#getaccesskeylastusedresponse)

### GetAccountAuthorizationDetails



```js
amazonaws_iam.GetAccountAuthorizationDetails({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Filter [entityListType](#entitylisttype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

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
  * PolicyInputList **required** [SimulationPolicyListType](#simulationpolicylisttype)

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
  * PolicyInputList [SimulationPolicyListType](#simulationpolicylisttype)
  * PolicySourceArn **required** [arnType](#arntype)

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

### GetGroup



```js
amazonaws_iam.GetGroup({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * GroupName **required** [groupNameType](#groupnametype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

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
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyName **required** [policyNameType](#policynametype)

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
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)

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
  * UserName **required** [userNameType](#usernametype)

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
  * OpenIDConnectProviderArn **required** [arnType](#arntype)

#### Output
* output [GetOpenIDConnectProviderResponse](#getopenidconnectproviderresponse)

### GetPolicy



```js
amazonaws_iam.GetPolicy({
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * PolicyArn **required** [arnType](#arntype)

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
  * PolicyArn **required** [arnType](#arntype)
  * VersionId **required** [policyVersionIdType](#policyversionidtype)

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
  * RoleName **required** [roleNameType](#rolenametype)

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
  * PolicyName **required** [policyNameType](#policynametype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * SAMLProviderArn **required** [arnType](#arntype)

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
  * Encoding **required** [encodingType](#encodingtype)
  * SSHPublicKeyId **required** [publicKeyIdType](#publickeyidtype)
  * UserName **required** [userNameType](#usernametype)

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
  * ServerCertificateName **required** [serverCertificateNameType](#servercertificatenametype)

#### Output
* output [GetServerCertificateResponse](#getservercertificateresponse)

### GetServiceLinkedRoleDeletionStatus



```js
amazonaws_iam.GetServiceLinkedRoleDeletionStatus({
  "DeletionTaskId": ""
}, context)
```

#### Input
* input `object`
  * DeletionTaskId **required** [DeletionTaskIdType](#deletiontaskidtype)

#### Output
* output [GetServiceLinkedRoleDeletionStatusResponse](#getservicelinkedroledeletionstatusresponse)

### GetUser



```js
amazonaws_iam.GetUser({}, context)
```

#### Input
* input `object`
  * UserName [existingUserNameType](#existingusernametype)

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
  * PolicyName **required** [policyNameType](#policynametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

#### Output
* output [GetUserPolicyResponse](#getuserpolicyresponse)

### ListAccessKeys



```js
amazonaws_iam.ListAccessKeys({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName [existingUserNameType](#existingusernametype)

#### Output
* output [ListAccessKeysResponse](#listaccesskeysresponse)

### ListAccountAliases



```js
amazonaws_iam.ListAccountAliases({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

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
  * MaxItems `string`
  * Marker `string`
  * GroupName **required** [groupNameType](#groupnametype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [policyPathType](#policypathtype)

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
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [policyPathType](#policypathtype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [policyPathType](#policypathtype)
  * UserName **required** [userNameType](#usernametype)

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
  * MaxItems `string`
  * Marker `string`
  * EntityFilter [EntityType](#entitytype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathType](#pathtype)
  * PolicyArn **required** [arnType](#arntype)

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
  * MaxItems `string`
  * Marker `string`
  * GroupName **required** [groupNameType](#groupnametype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

#### Output
* output [ListGroupPoliciesResponse](#listgrouppoliciesresponse)

### ListGroups



```js
amazonaws_iam.ListGroups({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

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
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName **required** [existingUserNameType](#existingusernametype)

#### Output
* output [ListGroupsForUserResponse](#listgroupsforuserresponse)

### ListInstanceProfiles



```js
amazonaws_iam.ListInstanceProfiles({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

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
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * RoleName **required** [roleNameType](#rolenametype)

#### Output
* output [ListInstanceProfilesForRoleResponse](#listinstanceprofilesforroleresponse)

### ListMFADevices



```js
amazonaws_iam.ListMFADevices({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName [existingUserNameType](#existingusernametype)

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

### ListPolicies



```js
amazonaws_iam.ListPolicies({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * OnlyAttached [booleanType](#booleantype)
  * PathPrefix [policyPathType](#policypathtype)
  * Scope [policyScopeType](#policyscopetype)

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

### ListPolicyVersions



```js
amazonaws_iam.ListPolicyVersions({
  "PolicyArn": ""
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PolicyArn **required** [arnType](#arntype)

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
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * RoleName **required** [roleNameType](#rolenametype)

#### Output
* output [ListRolePoliciesResponse](#listrolepoliciesresponse)

### ListRoles



```js
amazonaws_iam.ListRoles({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

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

### ListSSHPublicKeys



```js
amazonaws_iam.ListSSHPublicKeys({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName [userNameType](#usernametype)

#### Output
* output [ListSSHPublicKeysResponse](#listsshpublickeysresponse)

### ListServerCertificates



```js
amazonaws_iam.ListServerCertificates({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

#### Output
* output [ListServerCertificatesResponse](#listservercertificatesresponse)

### ListServiceSpecificCredentials



```js
amazonaws_iam.ListServiceSpecificCredentials({}, context)
```

#### Input
* input `object`
  * ServiceName [serviceName](#servicename)
  * UserName [userNameType](#usernametype)

#### Output
* output [ListServiceSpecificCredentialsResponse](#listservicespecificcredentialsresponse)

### ListSigningCertificates



```js
amazonaws_iam.ListSigningCertificates({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName [existingUserNameType](#existingusernametype)

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
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName **required** [existingUserNameType](#existingusernametype)

#### Output
* output [ListUserPoliciesResponse](#listuserpoliciesresponse)

### ListUsers



```js
amazonaws_iam.ListUsers({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

#### Output
* output [ListUsersResponse](#listusersresponse)

### ListVirtualMFADevices



```js
amazonaws_iam.ListVirtualMFADevices({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * AssignmentStatus [assignmentStatusType](#assignmentstatustype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

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
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)

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
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

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
  * ClientID **required** [clientIDType](#clientidtype)
  * OpenIDConnectProviderArn **required** [arnType](#arntype)

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
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * GroupName **required** [groupNameType](#groupnametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

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
  * ServiceSpecificCredentialId **required** [serviceSpecificCredentialId](#servicespecificcredentialid)
  * UserName [userNameType](#usernametype)

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
  * AuthenticationCode1 **required** [authenticationCodeType](#authenticationcodetype)
  * AuthenticationCode2 **required** [authenticationCodeType](#authenticationcodetype)
  * SerialNumber **required** [serialNumberType](#serialnumbertype)
  * UserName **required** [existingUserNameType](#existingusernametype)

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
  * PolicyArn **required** [arnType](#arntype)
  * VersionId **required** [policyVersionIdType](#policyversionidtype)

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
  * MaxItems `string`
  * Marker `string`
  * ActionNames **required** [ActionNameListType](#actionnamelisttype)
  * CallerArn [ResourceNameType](#resourcenametype)
  * ContextEntries [ContextEntryListType](#contextentrylisttype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PolicyInputList **required** [SimulationPolicyListType](#simulationpolicylisttype)
  * ResourceArns [ResourceNameListType](#resourcenamelisttype)
  * ResourceHandlingOption [ResourceHandlingOptionType](#resourcehandlingoptiontype)
  * ResourceOwner [ResourceNameType](#resourcenametype)
  * ResourcePolicy [policyDocumentType](#policydocumenttype)

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
  * MaxItems `string`
  * Marker `string`
  * ActionNames **required** [ActionNameListType](#actionnamelisttype)
  * CallerArn [ResourceNameType](#resourcenametype)
  * ContextEntries [ContextEntryListType](#contextentrylisttype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PolicyInputList [SimulationPolicyListType](#simulationpolicylisttype)
  * PolicySourceArn **required** [arnType](#arntype)
  * ResourceArns [ResourceNameListType](#resourcenamelisttype)
  * ResourceHandlingOption [ResourceHandlingOptionType](#resourcehandlingoptiontype)
  * ResourceOwner [ResourceNameType](#resourcenametype)
  * ResourcePolicy [policyDocumentType](#policydocumenttype)

#### Output
* output [SimulatePolicyResponse](#simulatepolicyresponse)

### UpdateAccessKey



```js
amazonaws_iam.UpdateAccessKey({
  "AccessKeyId": "",
  "Status": ""
}, context)
```

#### Input
* input `object`
  * AccessKeyId **required** [accessKeyIdType](#accesskeyidtype)
  * Status **required** [statusType](#statustype)
  * UserName [existingUserNameType](#existingusernametype)

#### Output
*Output schema unknown*

### UpdateAccountPasswordPolicy



```js
amazonaws_iam.UpdateAccountPasswordPolicy({}, context)
```

#### Input
* input `object`
  * AllowUsersToChangePassword [booleanType](#booleantype)
  * HardExpiry [booleanObjectType](#booleanobjecttype)
  * MaxPasswordAge [maxPasswordAgeType](#maxpasswordagetype)
  * MinimumPasswordLength [minimumPasswordLengthType](#minimumpasswordlengthtype)
  * PasswordReusePrevention [passwordReusePreventionType](#passwordreusepreventiontype)
  * RequireLowercaseCharacters [booleanType](#booleantype)
  * RequireNumbers [booleanType](#booleantype)
  * RequireSymbols [booleanType](#booleantype)
  * RequireUppercaseCharacters [booleanType](#booleantype)

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
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * GroupName **required** [groupNameType](#groupnametype)
  * NewGroupName [groupNameType](#groupnametype)
  * NewPath [pathType](#pathtype)

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
  * Password [passwordType](#passwordtype)
  * PasswordResetRequired [booleanObjectType](#booleanobjecttype)
  * UserName **required** [userNameType](#usernametype)

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
  * OpenIDConnectProviderArn **required** [arnType](#arntype)
  * ThumbprintList **required** [thumbprintListType](#thumbprintlisttype)

#### Output
*Output schema unknown*

### UpdateRoleDescription



```js
amazonaws_iam.UpdateRoleDescription({
  "RoleName": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * Description **required** [roleDescriptionType](#roledescriptiontype)
  * RoleName **required** [roleNameType](#rolenametype)

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
  * SAMLMetadataDocument **required** [SAMLMetadataDocumentType](#samlmetadatadocumenttype)
  * SAMLProviderArn **required** [arnType](#arntype)

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
  * SSHPublicKeyId **required** [publicKeyIdType](#publickeyidtype)
  * Status **required** [statusType](#statustype)
  * UserName **required** [userNameType](#usernametype)

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
  * NewPath [pathType](#pathtype)
  * NewServerCertificateName [serverCertificateNameType](#servercertificatenametype)
  * ServerCertificateName **required** [serverCertificateNameType](#servercertificatenametype)

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
  * ServiceSpecificCredentialId **required** [serviceSpecificCredentialId](#servicespecificcredentialid)
  * Status **required** [statusType](#statustype)
  * UserName [userNameType](#usernametype)

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
  * CertificateId **required** [certificateIdType](#certificateidtype)
  * Status **required** [statusType](#statustype)
  * UserName [existingUserNameType](#existingusernametype)

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
  * NewPath [pathType](#pathtype)
  * NewUserName [userNameType](#usernametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

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
  * SSHPublicKeyBody **required** [publicKeyMaterialType](#publickeymaterialtype)
  * UserName **required** [userNameType](#usernametype)

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
  * CertificateBody **required** [certificateBodyType](#certificatebodytype)
  * CertificateChain [certificateChainType](#certificatechaintype)
  * Path [pathType](#pathtype)
  * PrivateKey **required** [privateKeyType](#privatekeytype)
  * ServerCertificateName **required** [serverCertificateNameType](#servercertificatenametype)

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
  * CertificateBody **required** [certificateBodyType](#certificatebodytype)
  * UserName [existingUserNameType](#existingusernametype)

#### Output
* output [UploadSigningCertificateResponse](#uploadsigningcertificateresponse)



## Definitions

### AccessKey
* AccessKey `object`: <p>Contains information about an AWS access key.</p> <p> This data type is used as a response element in the <a>CreateAccessKey</a> and <a>ListAccessKeys</a> actions. </p> <note> <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.</p> </note>
  * AccessKeyId **required** [accessKeyIdType](#accesskeyidtype)
  * CreateDate [dateType](#datetype)
  * SecretAccessKey **required** [accessKeySecretType](#accesskeysecrettype)
  * Status **required** [statusType](#statustype)
  * UserName **required** [userNameType](#usernametype)

### AccessKeyLastUsed
* AccessKeyLastUsed `object`: <p>Contains information about the last time an AWS access key was used.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> action.</p>
  * LastUsedDate **required** [dateType](#datetype)
  * Region **required** [stringType](#stringtype)
  * ServiceName **required** [stringType](#stringtype)

### AccessKeyMetadata
* AccessKeyMetadata `object`: <p>Contains information about an AWS access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> action.</p>
  * AccessKeyId [accessKeyIdType](#accesskeyidtype)
  * CreateDate [dateType](#datetype)
  * Status [statusType](#statustype)
  * UserName [userNameType](#usernametype)

### ActionNameListType
* ActionNameListType `array`
  * items [ActionNameType](#actionnametype)

### ActionNameType
* ActionNameType `string`

### AddClientIDToOpenIDConnectProviderRequest
* AddClientIDToOpenIDConnectProviderRequest `object`
  * ClientID **required** [clientIDType](#clientidtype)
  * OpenIDConnectProviderArn **required** [arnType](#arntype)

### AddRoleToInstanceProfileRequest
* AddRoleToInstanceProfileRequest `object`
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)
  * RoleName **required** [roleNameType](#rolenametype)

### AddUserToGroupRequest
* AddUserToGroupRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### ArnListType
* ArnListType `array`
  * items [arnType](#arntype)

### AttachGroupPolicyRequest
* AttachGroupPolicyRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyArn **required** [arnType](#arntype)

### AttachRolePolicyRequest
* AttachRolePolicyRequest `object`
  * PolicyArn **required** [arnType](#arntype)
  * RoleName **required** [roleNameType](#rolenametype)

### AttachUserPolicyRequest
* AttachUserPolicyRequest `object`
  * PolicyArn **required** [arnType](#arntype)
  * UserName **required** [userNameType](#usernametype)

### AttachedPolicy
* AttachedPolicy `object`: <p>Contains information about an attached policy.</p> <p>An attached policy is a managed policy that has been attached to a user, group, or role. This data type is used as a response element in the <a>ListAttachedGroupPolicies</a>, <a>ListAttachedRolePolicies</a>, <a>ListAttachedUserPolicies</a>, and <a>GetAccountAuthorizationDetails</a> actions. </p> <p>For more information about managed policies, refer to <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
  * PolicyArn [arnType](#arntype)
  * PolicyName [policyNameType](#policynametype)

### BootstrapDatum
* BootstrapDatum `string`

### ChangePasswordRequest
* ChangePasswordRequest `object`
  * NewPassword **required** [passwordType](#passwordtype)
  * OldPassword **required** [passwordType](#passwordtype)

### ColumnNumber
* ColumnNumber `integer`

### ContextEntry
* ContextEntry `object`: <p>Contains information about a condition context key. It includes the name of the key and specifies the value (or values, if the context key supports multiple values) to use in the simulation. This information is used when evaluating the <code>Condition</code> elements of the input policies.</p> <p>This data type is used as an input parameter to <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulateCustomPolicy</a> </code>.</p>
  * ContextKeyName [ContextKeyNameType](#contextkeynametype)
  * ContextKeyType [ContextKeyTypeEnum](#contextkeytypeenum)
  * ContextKeyValues [ContextKeyValueListType](#contextkeyvaluelisttype)

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
  * UserName [existingUserNameType](#existingusernametype)

### CreateAccessKeyResponse
* CreateAccessKeyResponse `object`: Contains the response to a successful <a>CreateAccessKey</a> request. 
  * AccessKey **required** [AccessKey](#accesskey)

### CreateAccountAliasRequest
* CreateAccountAliasRequest `object`
  * AccountAlias **required** [accountAliasType](#accountaliastype)

### CreateGroupRequest
* CreateGroupRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * Path [pathType](#pathtype)

### CreateGroupResponse
* CreateGroupResponse `object`: Contains the response to a successful <a>CreateGroup</a> request. 
  * Group **required** [Group](#group)

### CreateInstanceProfileRequest
* CreateInstanceProfileRequest `object`
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)
  * Path [pathType](#pathtype)

### CreateInstanceProfileResponse
* CreateInstanceProfileResponse `object`: Contains the response to a successful <a>CreateInstanceProfile</a> request. 
  * InstanceProfile **required** [InstanceProfile](#instanceprofile)

### CreateLoginProfileRequest
* CreateLoginProfileRequest `object`
  * Password **required** [passwordType](#passwordtype)
  * PasswordResetRequired [booleanType](#booleantype)
  * UserName **required** [userNameType](#usernametype)

### CreateLoginProfileResponse
* CreateLoginProfileResponse `object`: Contains the response to a successful <a>CreateLoginProfile</a> request. 
  * LoginProfile **required** [LoginProfile](#loginprofile)

### CreateOpenIDConnectProviderRequest
* CreateOpenIDConnectProviderRequest `object`
  * ClientIDList [clientIDListType](#clientidlisttype)
  * ThumbprintList **required** [thumbprintListType](#thumbprintlisttype)
  * Url **required** [OpenIDConnectProviderUrlType](#openidconnectproviderurltype)

### CreateOpenIDConnectProviderResponse
* CreateOpenIDConnectProviderResponse `object`: Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request. 
  * OpenIDConnectProviderArn [arnType](#arntype)

### CreatePolicyRequest
* CreatePolicyRequest `object`
  * Description [policyDescriptionType](#policydescriptiontype)
  * Path [policyPathType](#policypathtype)
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)

### CreatePolicyResponse
* CreatePolicyResponse `object`: Contains the response to a successful <a>CreatePolicy</a> request. 
  * Policy [Policy](#policy)

### CreatePolicyVersionRequest
* CreatePolicyVersionRequest `object`
  * PolicyArn **required** [arnType](#arntype)
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * SetAsDefault [booleanType](#booleantype)

### CreatePolicyVersionResponse
* CreatePolicyVersionResponse `object`: Contains the response to a successful <a>CreatePolicyVersion</a> request. 
  * PolicyVersion [PolicyVersion](#policyversion)

### CreateRoleRequest
* CreateRoleRequest `object`
  * AssumeRolePolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * Description [roleDescriptionType](#roledescriptiontype)
  * Path [pathType](#pathtype)
  * RoleName **required** [roleNameType](#rolenametype)

### CreateRoleResponse
* CreateRoleResponse `object`: Contains the response to a successful <a>CreateRole</a> request. 
  * Role **required** [Role](#role)

### CreateSAMLProviderRequest
* CreateSAMLProviderRequest `object`
  * Name **required** [SAMLProviderNameType](#samlprovidernametype)
  * SAMLMetadataDocument **required** [SAMLMetadataDocumentType](#samlmetadatadocumenttype)

### CreateSAMLProviderResponse
* CreateSAMLProviderResponse `object`: Contains the response to a successful <a>CreateSAMLProvider</a> request. 
  * SAMLProviderArn [arnType](#arntype)

### CreateServiceLinkedRoleRequest
* CreateServiceLinkedRoleRequest `object`
  * AWSServiceName **required** [groupNameType](#groupnametype)
  * CustomSuffix [customSuffixType](#customsuffixtype)
  * Description [roleDescriptionType](#roledescriptiontype)

### CreateServiceLinkedRoleResponse
* CreateServiceLinkedRoleResponse `object`
  * Role [Role](#role)

### CreateServiceSpecificCredentialRequest
* CreateServiceSpecificCredentialRequest `object`
  * ServiceName **required** [serviceName](#servicename)
  * UserName **required** [userNameType](#usernametype)

### CreateServiceSpecificCredentialResponse
* CreateServiceSpecificCredentialResponse `object`
  * ServiceSpecificCredential [ServiceSpecificCredential](#servicespecificcredential)

### CreateUserRequest
* CreateUserRequest `object`
  * Path [pathType](#pathtype)
  * UserName **required** [userNameType](#usernametype)

### CreateUserResponse
* CreateUserResponse `object`: Contains the response to a successful <a>CreateUser</a> request. 
  * User [User](#user)

### CreateVirtualMFADeviceRequest
* CreateVirtualMFADeviceRequest `object`
  * Path [pathType](#pathtype)
  * VirtualMFADeviceName **required** [virtualMFADeviceName](#virtualmfadevicename)

### CreateVirtualMFADeviceResponse
* CreateVirtualMFADeviceResponse `object`: Contains the response to a successful <a>CreateVirtualMFADevice</a> request. 
  * VirtualMFADevice **required** [VirtualMFADevice](#virtualmfadevice)

### CredentialReportExpiredException
* CredentialReportExpiredException `object`: The request was rejected because the most recent credential report has expired. To generate a new credential report, use <a>GenerateCredentialReport</a>. For more information about credential report expiration, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the <i>IAM User Guide</i>.
  * message [credentialReportExpiredExceptionMessage](#credentialreportexpiredexceptionmessage)

### CredentialReportNotPresentException
* CredentialReportNotPresentException `object`: The request was rejected because the credential report does not exist. To generate a credential report, use <a>GenerateCredentialReport</a>.
  * message [credentialReportNotPresentExceptionMessage](#credentialreportnotpresentexceptionmessage)

### CredentialReportNotReadyException
* CredentialReportNotReadyException `object`: The request was rejected because the credential report is still being generated.
  * message [credentialReportNotReadyExceptionMessage](#credentialreportnotreadyexceptionmessage)

### DeactivateMFADeviceRequest
* DeactivateMFADeviceRequest `object`
  * SerialNumber **required** [serialNumberType](#serialnumbertype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### DeleteAccessKeyRequest
* DeleteAccessKeyRequest `object`
  * AccessKeyId **required** [accessKeyIdType](#accesskeyidtype)
  * UserName [existingUserNameType](#existingusernametype)

### DeleteAccountAliasRequest
* DeleteAccountAliasRequest `object`
  * AccountAlias **required** [accountAliasType](#accountaliastype)

### DeleteConflictException
* DeleteConflictException `object`: The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.
  * message [deleteConflictMessage](#deleteconflictmessage)

### DeleteGroupPolicyRequest
* DeleteGroupPolicyRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyName **required** [policyNameType](#policynametype)

### DeleteGroupRequest
* DeleteGroupRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)

### DeleteInstanceProfileRequest
* DeleteInstanceProfileRequest `object`
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)

### DeleteLoginProfileRequest
* DeleteLoginProfileRequest `object`
  * UserName **required** [userNameType](#usernametype)

### DeleteOpenIDConnectProviderRequest
* DeleteOpenIDConnectProviderRequest `object`
  * OpenIDConnectProviderArn **required** [arnType](#arntype)

### DeletePolicyRequest
* DeletePolicyRequest `object`
  * PolicyArn **required** [arnType](#arntype)

### DeletePolicyVersionRequest
* DeletePolicyVersionRequest `object`
  * PolicyArn **required** [arnType](#arntype)
  * VersionId **required** [policyVersionIdType](#policyversionidtype)

### DeleteRolePolicyRequest
* DeleteRolePolicyRequest `object`
  * PolicyName **required** [policyNameType](#policynametype)
  * RoleName **required** [roleNameType](#rolenametype)

### DeleteRoleRequest
* DeleteRoleRequest `object`
  * RoleName **required** [roleNameType](#rolenametype)

### DeleteSAMLProviderRequest
* DeleteSAMLProviderRequest `object`
  * SAMLProviderArn **required** [arnType](#arntype)

### DeleteSSHPublicKeyRequest
* DeleteSSHPublicKeyRequest `object`
  * SSHPublicKeyId **required** [publicKeyIdType](#publickeyidtype)
  * UserName **required** [userNameType](#usernametype)

### DeleteServerCertificateRequest
* DeleteServerCertificateRequest `object`
  * ServerCertificateName **required** [serverCertificateNameType](#servercertificatenametype)

### DeleteServiceLinkedRoleRequest
* DeleteServiceLinkedRoleRequest `object`
  * RoleName **required** [roleNameType](#rolenametype)

### DeleteServiceLinkedRoleResponse
* DeleteServiceLinkedRoleResponse `object`
  * DeletionTaskId **required** [DeletionTaskIdType](#deletiontaskidtype)

### DeleteServiceSpecificCredentialRequest
* DeleteServiceSpecificCredentialRequest `object`
  * ServiceSpecificCredentialId **required** [serviceSpecificCredentialId](#servicespecificcredentialid)
  * UserName [userNameType](#usernametype)

### DeleteSigningCertificateRequest
* DeleteSigningCertificateRequest `object`
  * CertificateId **required** [certificateIdType](#certificateidtype)
  * UserName [existingUserNameType](#existingusernametype)

### DeleteUserPolicyRequest
* DeleteUserPolicyRequest `object`
  * PolicyName **required** [policyNameType](#policynametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### DeleteUserRequest
* DeleteUserRequest `object`
  * UserName **required** [existingUserNameType](#existingusernametype)

### DeleteVirtualMFADeviceRequest
* DeleteVirtualMFADeviceRequest `object`
  * SerialNumber **required** [serialNumberType](#serialnumbertype)

### DeletionTaskFailureReasonType
* DeletionTaskFailureReasonType `object`: <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
  * Reason [ReasonType](#reasontype)
  * RoleUsageList [RoleUsageListType](#roleusagelisttype)

### DeletionTaskIdType
* DeletionTaskIdType `string`

### DeletionTaskStatusType
* DeletionTaskStatusType `string` (values: SUCCEEDED, IN_PROGRESS, FAILED, NOT_STARTED)

### DetachGroupPolicyRequest
* DetachGroupPolicyRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyArn **required** [arnType](#arntype)

### DetachRolePolicyRequest
* DetachRolePolicyRequest `object`
  * PolicyArn **required** [arnType](#arntype)
  * RoleName **required** [roleNameType](#rolenametype)

### DetachUserPolicyRequest
* DetachUserPolicyRequest `object`
  * PolicyArn **required** [arnType](#arntype)
  * UserName **required** [userNameType](#usernametype)

### DuplicateCertificateException
* DuplicateCertificateException `object`: The request was rejected because the same certificate is associated with an IAM user in the account.
  * message [duplicateCertificateMessage](#duplicatecertificatemessage)

### DuplicateSSHPublicKeyException
* DuplicateSSHPublicKeyException `object`: The request was rejected because the SSH public key is already associated with the specified IAM user.
  * message [duplicateSSHPublicKeyMessage](#duplicatesshpublickeymessage)

### EnableMFADeviceRequest
* EnableMFADeviceRequest `object`
  * AuthenticationCode1 **required** [authenticationCodeType](#authenticationcodetype)
  * AuthenticationCode2 **required** [authenticationCodeType](#authenticationcodetype)
  * SerialNumber **required** [serialNumberType](#serialnumbertype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### EntityAlreadyExistsException
* EntityAlreadyExistsException `object`: The request was rejected because it attempted to create a resource that already exists.
  * message [entityAlreadyExistsMessage](#entityalreadyexistsmessage)

### EntityTemporarilyUnmodifiableException
* EntityTemporarilyUnmodifiableException `object`: The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.
  * message [entityTemporarilyUnmodifiableMessage](#entitytemporarilyunmodifiablemessage)

### EntityType
* EntityType `string` (values: User, Role, Group, LocalManagedPolicy, AWSManagedPolicy)

### EvalDecisionDetailsType
* EvalDecisionDetailsType `array`
  * items `object`
    * key [EvalDecisionSourceType](#evaldecisionsourcetype)
    * value [PolicyEvaluationDecisionType](#policyevaluationdecisiontype)

### EvalDecisionSourceType
* EvalDecisionSourceType `string`

### EvaluationResult
* EvaluationResult `object`: <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
  * EvalActionName **required** [ActionNameType](#actionnametype)
  * EvalDecision **required** [PolicyEvaluationDecisionType](#policyevaluationdecisiontype)
  * EvalDecisionDetails [EvalDecisionDetailsType](#evaldecisiondetailstype)
  * EvalResourceName [ResourceNameType](#resourcenametype)
  * MatchedStatements [StatementListType](#statementlisttype)
  * MissingContextValues [ContextKeyNamesResultListType](#contextkeynamesresultlisttype)
  * OrganizationsDecisionDetail [OrganizationsDecisionDetail](#organizationsdecisiondetail)
  * ResourceSpecificResults [ResourceSpecificResultListType](#resourcespecificresultlisttype)

### EvaluationResultsListType
* EvaluationResultsListType `array`
  * items [EvaluationResult](#evaluationresult)

### GenerateCredentialReportResponse
* GenerateCredentialReportResponse `object`: Contains the response to a successful <a>GenerateCredentialReport</a> request. 
  * Description [ReportStateDescriptionType](#reportstatedescriptiontype)
  * State [ReportStateType](#reportstatetype)

### GetAccessKeyLastUsedRequest
* GetAccessKeyLastUsedRequest `object`
  * AccessKeyId **required** [accessKeyIdType](#accesskeyidtype)

### GetAccessKeyLastUsedResponse
* GetAccessKeyLastUsedResponse `object`: Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.
  * AccessKeyLastUsed [AccessKeyLastUsed](#accesskeylastused)
  * UserName [existingUserNameType](#existingusernametype)

### GetAccountAuthorizationDetailsRequest
* GetAccountAuthorizationDetailsRequest `object`
  * Filter [entityListType](#entitylisttype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

### GetAccountAuthorizationDetailsResponse
* GetAccountAuthorizationDetailsResponse `object`: Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request. 
  * GroupDetailList [groupDetailListType](#groupdetaillisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * Policies [ManagedPolicyDetailListType](#managedpolicydetaillisttype)
  * RoleDetailList [roleDetailListType](#roledetaillisttype)
  * UserDetailList [userDetailListType](#userdetaillisttype)

### GetAccountPasswordPolicyResponse
* GetAccountPasswordPolicyResponse `object`: Contains the response to a successful <a>GetAccountPasswordPolicy</a> request. 
  * PasswordPolicy **required** [PasswordPolicy](#passwordpolicy)

### GetAccountSummaryResponse
* GetAccountSummaryResponse `object`: Contains the response to a successful <a>GetAccountSummary</a> request. 
  * SummaryMap [summaryMapType](#summarymaptype)

### GetContextKeysForCustomPolicyRequest
* GetContextKeysForCustomPolicyRequest `object`
  * PolicyInputList **required** [SimulationPolicyListType](#simulationpolicylisttype)

### GetContextKeysForPolicyResponse
* GetContextKeysForPolicyResponse `object`: Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. 
  * ContextKeyNames [ContextKeyNamesResultListType](#contextkeynamesresultlisttype)

### GetContextKeysForPrincipalPolicyRequest
* GetContextKeysForPrincipalPolicyRequest `object`
  * PolicyInputList [SimulationPolicyListType](#simulationpolicylisttype)
  * PolicySourceArn **required** [arnType](#arntype)

### GetCredentialReportResponse
* GetCredentialReportResponse `object`: Contains the response to a successful <a>GetCredentialReport</a> request. 
  * Content [ReportContentType](#reportcontenttype)
  * GeneratedTime [dateType](#datetype)
  * ReportFormat [ReportFormatType](#reportformattype)

### GetGroupPolicyRequest
* GetGroupPolicyRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyName **required** [policyNameType](#policynametype)

### GetGroupPolicyResponse
* GetGroupPolicyResponse `object`: Contains the response to a successful <a>GetGroupPolicy</a> request. 
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)

### GetGroupRequest
* GetGroupRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

### GetGroupResponse
* GetGroupResponse `object`: Contains the response to a successful <a>GetGroup</a> request. 
  * Group **required** [Group](#group)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * Users **required** [userListType](#userlisttype)

### GetInstanceProfileRequest
* GetInstanceProfileRequest `object`
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)

### GetInstanceProfileResponse
* GetInstanceProfileResponse `object`: Contains the response to a successful <a>GetInstanceProfile</a> request. 
  * InstanceProfile **required** [InstanceProfile](#instanceprofile)

### GetLoginProfileRequest
* GetLoginProfileRequest `object`
  * UserName **required** [userNameType](#usernametype)

### GetLoginProfileResponse
* GetLoginProfileResponse `object`: Contains the response to a successful <a>GetLoginProfile</a> request. 
  * LoginProfile **required** [LoginProfile](#loginprofile)

### GetOpenIDConnectProviderRequest
* GetOpenIDConnectProviderRequest `object`
  * OpenIDConnectProviderArn **required** [arnType](#arntype)

### GetOpenIDConnectProviderResponse
* GetOpenIDConnectProviderResponse `object`: Contains the response to a successful <a>GetOpenIDConnectProvider</a> request. 
  * ClientIDList [clientIDListType](#clientidlisttype)
  * CreateDate [dateType](#datetype)
  * ThumbprintList [thumbprintListType](#thumbprintlisttype)
  * Url [OpenIDConnectProviderUrlType](#openidconnectproviderurltype)

### GetPolicyRequest
* GetPolicyRequest `object`
  * PolicyArn **required** [arnType](#arntype)

### GetPolicyResponse
* GetPolicyResponse `object`: Contains the response to a successful <a>GetPolicy</a> request. 
  * Policy [Policy](#policy)

### GetPolicyVersionRequest
* GetPolicyVersionRequest `object`
  * PolicyArn **required** [arnType](#arntype)
  * VersionId **required** [policyVersionIdType](#policyversionidtype)

### GetPolicyVersionResponse
* GetPolicyVersionResponse `object`: Contains the response to a successful <a>GetPolicyVersion</a> request. 
  * PolicyVersion [PolicyVersion](#policyversion)

### GetRolePolicyRequest
* GetRolePolicyRequest `object`
  * PolicyName **required** [policyNameType](#policynametype)
  * RoleName **required** [roleNameType](#rolenametype)

### GetRolePolicyResponse
* GetRolePolicyResponse `object`: Contains the response to a successful <a>GetRolePolicy</a> request. 
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)
  * RoleName **required** [roleNameType](#rolenametype)

### GetRoleRequest
* GetRoleRequest `object`
  * RoleName **required** [roleNameType](#rolenametype)

### GetRoleResponse
* GetRoleResponse `object`: Contains the response to a successful <a>GetRole</a> request. 
  * Role **required** [Role](#role)

### GetSAMLProviderRequest
* GetSAMLProviderRequest `object`
  * SAMLProviderArn **required** [arnType](#arntype)

### GetSAMLProviderResponse
* GetSAMLProviderResponse `object`: Contains the response to a successful <a>GetSAMLProvider</a> request. 
  * CreateDate [dateType](#datetype)
  * SAMLMetadataDocument [SAMLMetadataDocumentType](#samlmetadatadocumenttype)
  * ValidUntil [dateType](#datetype)

### GetSSHPublicKeyRequest
* GetSSHPublicKeyRequest `object`
  * Encoding **required** [encodingType](#encodingtype)
  * SSHPublicKeyId **required** [publicKeyIdType](#publickeyidtype)
  * UserName **required** [userNameType](#usernametype)

### GetSSHPublicKeyResponse
* GetSSHPublicKeyResponse `object`: Contains the response to a successful <a>GetSSHPublicKey</a> request.
  * SSHPublicKey [SSHPublicKey](#sshpublickey)

### GetServerCertificateRequest
* GetServerCertificateRequest `object`
  * ServerCertificateName **required** [serverCertificateNameType](#servercertificatenametype)

### GetServerCertificateResponse
* GetServerCertificateResponse `object`: Contains the response to a successful <a>GetServerCertificate</a> request. 
  * ServerCertificate **required** [ServerCertificate](#servercertificate)

### GetServiceLinkedRoleDeletionStatusRequest
* GetServiceLinkedRoleDeletionStatusRequest `object`
  * DeletionTaskId **required** [DeletionTaskIdType](#deletiontaskidtype)

### GetServiceLinkedRoleDeletionStatusResponse
* GetServiceLinkedRoleDeletionStatusResponse `object`
  * Reason [DeletionTaskFailureReasonType](#deletiontaskfailurereasontype)
  * Status **required** [DeletionTaskStatusType](#deletiontaskstatustype)

### GetUserPolicyRequest
* GetUserPolicyRequest `object`
  * PolicyName **required** [policyNameType](#policynametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### GetUserPolicyResponse
* GetUserPolicyResponse `object`: Contains the response to a successful <a>GetUserPolicy</a> request. 
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### GetUserRequest
* GetUserRequest `object`
  * UserName [existingUserNameType](#existingusernametype)

### GetUserResponse
* GetUserResponse `object`: Contains the response to a successful <a>GetUser</a> request. 
  * User **required** [User](#user)

### Group
* Group `object`: <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul>
  * Arn **required** [arnType](#arntype)
  * CreateDate **required** [dateType](#datetype)
  * GroupId **required** [idType](#idtype)
  * GroupName **required** [groupNameType](#groupnametype)
  * Path **required** [pathType](#pathtype)

### GroupDetail
* GroupDetail `object`: <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> action.</p>
  * Arn [arnType](#arntype)
  * AttachedManagedPolicies [attachedPoliciesListType](#attachedpolicieslisttype)
  * CreateDate [dateType](#datetype)
  * GroupId [idType](#idtype)
  * GroupName [groupNameType](#groupnametype)
  * GroupPolicyList [policyDetailListType](#policydetaillisttype)
  * Path [pathType](#pathtype)

### InstanceProfile
* InstanceProfile `object`: <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
  * Arn **required** [arnType](#arntype)
  * CreateDate **required** [dateType](#datetype)
  * InstanceProfileId **required** [idType](#idtype)
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)
  * Path **required** [pathType](#pathtype)
  * Roles **required** [roleListType](#rolelisttype)

### InvalidAuthenticationCodeException
* InvalidAuthenticationCodeException `object`: The request was rejected because the authentication code was not recognized. The error message describes the specific error.
  * message [invalidAuthenticationCodeMessage](#invalidauthenticationcodemessage)

### InvalidCertificateException
* InvalidCertificateException `object`: The request was rejected because the certificate is invalid.
  * message [invalidCertificateMessage](#invalidcertificatemessage)

### InvalidInputException
* InvalidInputException `object`: The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
  * message [invalidInputMessage](#invalidinputmessage)

### InvalidPublicKeyException
* InvalidPublicKeyException `object`: The request was rejected because the public key is malformed or otherwise invalid.
  * message [invalidPublicKeyMessage](#invalidpublickeymessage)

### InvalidUserTypeException
* InvalidUserTypeException `object`: The request was rejected because the type of user for the transaction was incorrect.
  * message [invalidUserTypeMessage](#invalidusertypemessage)

### KeyPairMismatchException
* KeyPairMismatchException `object`: The request was rejected because the public key certificate and the private key do not match.
  * message [keyPairMismatchMessage](#keypairmismatchmessage)

### LimitExceededException
* LimitExceededException `object`: The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.
  * message [limitExceededMessage](#limitexceededmessage)

### LineNumber
* LineNumber `integer`

### ListAccessKeysRequest
* ListAccessKeysRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName [existingUserNameType](#existingusernametype)

### ListAccessKeysResponse
* ListAccessKeysResponse `object`: Contains the response to a successful <a>ListAccessKeys</a> request. 
  * AccessKeyMetadata **required** [accessKeyMetadataListType](#accesskeymetadatalisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListAccountAliasesRequest
* ListAccountAliasesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

### ListAccountAliasesResponse
* ListAccountAliasesResponse `object`: Contains the response to a successful <a>ListAccountAliases</a> request. 
  * AccountAliases **required** [accountAliasListType](#accountaliaslisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListAttachedGroupPoliciesRequest
* ListAttachedGroupPoliciesRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [policyPathType](#policypathtype)

### ListAttachedGroupPoliciesResponse
* ListAttachedGroupPoliciesResponse `object`: Contains the response to a successful <a>ListAttachedGroupPolicies</a> request. 
  * AttachedPolicies [attachedPoliciesListType](#attachedpolicieslisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListAttachedRolePoliciesRequest
* ListAttachedRolePoliciesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [policyPathType](#policypathtype)
  * RoleName **required** [roleNameType](#rolenametype)

### ListAttachedRolePoliciesResponse
* ListAttachedRolePoliciesResponse `object`: Contains the response to a successful <a>ListAttachedRolePolicies</a> request. 
  * AttachedPolicies [attachedPoliciesListType](#attachedpolicieslisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListAttachedUserPoliciesRequest
* ListAttachedUserPoliciesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [policyPathType](#policypathtype)
  * UserName **required** [userNameType](#usernametype)

### ListAttachedUserPoliciesResponse
* ListAttachedUserPoliciesResponse `object`: Contains the response to a successful <a>ListAttachedUserPolicies</a> request. 
  * AttachedPolicies [attachedPoliciesListType](#attachedpolicieslisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListEntitiesForPolicyRequest
* ListEntitiesForPolicyRequest `object`
  * EntityFilter [EntityType](#entitytype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathType](#pathtype)
  * PolicyArn **required** [arnType](#arntype)

### ListEntitiesForPolicyResponse
* ListEntitiesForPolicyResponse `object`: Contains the response to a successful <a>ListEntitiesForPolicy</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * PolicyGroups [PolicyGroupListType](#policygrouplisttype)
  * PolicyRoles [PolicyRoleListType](#policyrolelisttype)
  * PolicyUsers [PolicyUserListType](#policyuserlisttype)

### ListGroupPoliciesRequest
* ListGroupPoliciesRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

### ListGroupPoliciesResponse
* ListGroupPoliciesResponse `object`: Contains the response to a successful <a>ListGroupPolicies</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * PolicyNames **required** [policyNameListType](#policynamelisttype)

### ListGroupsForUserRequest
* ListGroupsForUserRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### ListGroupsForUserResponse
* ListGroupsForUserResponse `object`: Contains the response to a successful <a>ListGroupsForUser</a> request. 
  * Groups **required** [groupListType](#grouplisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListGroupsRequest
* ListGroupsRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

### ListGroupsResponse
* ListGroupsResponse `object`: Contains the response to a successful <a>ListGroups</a> request. 
  * Groups **required** [groupListType](#grouplisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListInstanceProfilesForRoleRequest
* ListInstanceProfilesForRoleRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * RoleName **required** [roleNameType](#rolenametype)

### ListInstanceProfilesForRoleResponse
* ListInstanceProfilesForRoleResponse `object`: Contains the response to a successful <a>ListInstanceProfilesForRole</a> request. 
  * InstanceProfiles **required** [instanceProfileListType](#instanceprofilelisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListInstanceProfilesRequest
* ListInstanceProfilesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

### ListInstanceProfilesResponse
* ListInstanceProfilesResponse `object`: Contains the response to a successful <a>ListInstanceProfiles</a> request. 
  * InstanceProfiles **required** [instanceProfileListType](#instanceprofilelisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListMFADevicesRequest
* ListMFADevicesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName [existingUserNameType](#existingusernametype)

### ListMFADevicesResponse
* ListMFADevicesResponse `object`: Contains the response to a successful <a>ListMFADevices</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * MFADevices **required** [mfaDeviceListType](#mfadevicelisttype)
  * Marker [markerType](#markertype)

### ListOpenIDConnectProvidersRequest
* ListOpenIDConnectProvidersRequest `object`

### ListOpenIDConnectProvidersResponse
* ListOpenIDConnectProvidersResponse `object`: Contains the response to a successful <a>ListOpenIDConnectProviders</a> request. 
  * OpenIDConnectProviderList [OpenIDConnectProviderListType](#openidconnectproviderlisttype)

### ListPoliciesRequest
* ListPoliciesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * OnlyAttached [booleanType](#booleantype)
  * PathPrefix [policyPathType](#policypathtype)
  * Scope [policyScopeType](#policyscopetype)

### ListPoliciesResponse
* ListPoliciesResponse `object`: Contains the response to a successful <a>ListPolicies</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * Policies [policyListType](#policylisttype)

### ListPolicyVersionsRequest
* ListPolicyVersionsRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PolicyArn **required** [arnType](#arntype)

### ListPolicyVersionsResponse
* ListPolicyVersionsResponse `object`: Contains the response to a successful <a>ListPolicyVersions</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * Versions [policyDocumentVersionListType](#policydocumentversionlisttype)

### ListRolePoliciesRequest
* ListRolePoliciesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * RoleName **required** [roleNameType](#rolenametype)

### ListRolePoliciesResponse
* ListRolePoliciesResponse `object`: Contains the response to a successful <a>ListRolePolicies</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * PolicyNames **required** [policyNameListType](#policynamelisttype)

### ListRolesRequest
* ListRolesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

### ListRolesResponse
* ListRolesResponse `object`: Contains the response to a successful <a>ListRoles</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * Roles **required** [roleListType](#rolelisttype)

### ListSAMLProvidersRequest
* ListSAMLProvidersRequest `object`

### ListSAMLProvidersResponse
* ListSAMLProvidersResponse `object`: Contains the response to a successful <a>ListSAMLProviders</a> request. 
  * SAMLProviderList [SAMLProviderListType](#samlproviderlisttype)

### ListSSHPublicKeysRequest
* ListSSHPublicKeysRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName [userNameType](#usernametype)

### ListSSHPublicKeysResponse
* ListSSHPublicKeysResponse `object`: Contains the response to a successful <a>ListSSHPublicKeys</a> request.
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * SSHPublicKeys [SSHPublicKeyListType](#sshpublickeylisttype)

### ListServerCertificatesRequest
* ListServerCertificatesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

### ListServerCertificatesResponse
* ListServerCertificatesResponse `object`: Contains the response to a successful <a>ListServerCertificates</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * ServerCertificateMetadataList **required** [serverCertificateMetadataListType](#servercertificatemetadatalisttype)

### ListServiceSpecificCredentialsRequest
* ListServiceSpecificCredentialsRequest `object`
  * ServiceName [serviceName](#servicename)
  * UserName [userNameType](#usernametype)

### ListServiceSpecificCredentialsResponse
* ListServiceSpecificCredentialsResponse `object`
  * ServiceSpecificCredentials [ServiceSpecificCredentialsListType](#servicespecificcredentialslisttype)

### ListSigningCertificatesRequest
* ListSigningCertificatesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName [existingUserNameType](#existingusernametype)

### ListSigningCertificatesResponse
* ListSigningCertificatesResponse `object`: Contains the response to a successful <a>ListSigningCertificates</a> request. 
  * Certificates **required** [certificateListType](#certificatelisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### ListUserPoliciesRequest
* ListUserPoliciesRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### ListUserPoliciesResponse
* ListUserPoliciesResponse `object`: Contains the response to a successful <a>ListUserPolicies</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * PolicyNames **required** [policyNameListType](#policynamelisttype)

### ListUsersRequest
* ListUsersRequest `object`
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PathPrefix [pathPrefixType](#pathprefixtype)

### ListUsersResponse
* ListUsersResponse `object`: Contains the response to a successful <a>ListUsers</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * Users **required** [userListType](#userlisttype)

### ListVirtualMFADevicesRequest
* ListVirtualMFADevicesRequest `object`
  * AssignmentStatus [assignmentStatusType](#assignmentstatustype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)

### ListVirtualMFADevicesResponse
* ListVirtualMFADevicesResponse `object`: Contains the response to a successful <a>ListVirtualMFADevices</a> request. 
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)
  * VirtualMFADevices **required** [virtualMFADeviceListType](#virtualmfadevicelisttype)

### LoginProfile
* LoginProfile `object`: <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> actions. </p>
  * CreateDate **required** [dateType](#datetype)
  * PasswordResetRequired [booleanType](#booleantype)
  * UserName **required** [userNameType](#usernametype)

### MFADevice
* MFADevice `object`: <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> action.</p>
  * EnableDate **required** [dateType](#datetype)
  * SerialNumber **required** [serialNumberType](#serialnumbertype)
  * UserName **required** [userNameType](#usernametype)

### MalformedCertificateException
* MalformedCertificateException `object`: The request was rejected because the certificate was malformed or expired. The error message describes the specific error.
  * message [malformedCertificateMessage](#malformedcertificatemessage)

### MalformedPolicyDocumentException
* MalformedPolicyDocumentException `object`: The request was rejected because the policy document was malformed. The error message describes the specific error.
  * message [malformedPolicyDocumentMessage](#malformedpolicydocumentmessage)

### ManagedPolicyDetail
* ManagedPolicyDetail `object`: <p>Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> action.</p> <p>For more information about managed policies, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
  * Arn [arnType](#arntype)
  * AttachmentCount [attachmentCountType](#attachmentcounttype)
  * CreateDate [dateType](#datetype)
  * DefaultVersionId [policyVersionIdType](#policyversionidtype)
  * Description [policyDescriptionType](#policydescriptiontype)
  * IsAttachable [booleanType](#booleantype)
  * Path [policyPathType](#policypathtype)
  * PolicyId [idType](#idtype)
  * PolicyName [policyNameType](#policynametype)
  * PolicyVersionList [policyDocumentVersionListType](#policydocumentversionlisttype)
  * UpdateDate [dateType](#datetype)

### ManagedPolicyDetailListType
* ManagedPolicyDetailListType `array`
  * items [ManagedPolicyDetail](#managedpolicydetail)

### NoSuchEntityException
* NoSuchEntityException `object`: The request was rejected because it referenced an entity that does not exist. The error message describes the entity.
  * message [noSuchEntityMessage](#nosuchentitymessage)

### OpenIDConnectProviderListEntry
* OpenIDConnectProviderListEntry `object`: Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.
  * Arn [arnType](#arntype)

### OpenIDConnectProviderListType
* OpenIDConnectProviderListType `array`: Contains a list of IAM OpenID Connect providers.
  * items [OpenIDConnectProviderListEntry](#openidconnectproviderlistentry)

### OpenIDConnectProviderUrlType
* OpenIDConnectProviderUrlType `string`: Contains a URL that specifies the endpoint for an OpenID Connect provider.

### OrganizationsDecisionDetail
* OrganizationsDecisionDetail `object`: Contains information about AWS Organizations's affect on a policy simulation.
  * AllowedByOrganizations [booleanType](#booleantype)

### PasswordPolicy
* PasswordPolicy `object`: <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> action. </p>
  * AllowUsersToChangePassword [booleanType](#booleantype)
  * ExpirePasswords [booleanType](#booleantype)
  * HardExpiry [booleanObjectType](#booleanobjecttype)
  * MaxPasswordAge [maxPasswordAgeType](#maxpasswordagetype)
  * MinimumPasswordLength [minimumPasswordLengthType](#minimumpasswordlengthtype)
  * PasswordReusePrevention [passwordReusePreventionType](#passwordreusepreventiontype)
  * RequireLowercaseCharacters [booleanType](#booleantype)
  * RequireNumbers [booleanType](#booleantype)
  * RequireSymbols [booleanType](#booleantype)
  * RequireUppercaseCharacters [booleanType](#booleantype)

### PasswordPolicyViolationException
* PasswordPolicyViolationException `object`: The request was rejected because the provided password did not meet the requirements imposed by the account password policy.
  * message [passwordPolicyViolationMessage](#passwordpolicyviolationmessage)

### Policy
* Policy `object`: <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> actions. </p> <p>For more information about managed policies, refer to <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
  * Arn [arnType](#arntype)
  * AttachmentCount [attachmentCountType](#attachmentcounttype)
  * CreateDate [dateType](#datetype)
  * DefaultVersionId [policyVersionIdType](#policyversionidtype)
  * Description [policyDescriptionType](#policydescriptiontype)
  * IsAttachable [booleanType](#booleantype)
  * Path [policyPathType](#policypathtype)
  * PolicyId [idType](#idtype)
  * PolicyName [policyNameType](#policynametype)
  * UpdateDate [dateType](#datetype)

### PolicyDetail
* PolicyDetail `object`: <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> action.</p>
  * PolicyDocument [policyDocumentType](#policydocumenttype)
  * PolicyName [policyNameType](#policynametype)

### PolicyEvaluationDecisionType
* PolicyEvaluationDecisionType `string` (values: allowed, explicitDeny, implicitDeny)

### PolicyEvaluationException
* PolicyEvaluationException `object`: The request failed because a provided policy could not be successfully evaluated. An additional detailed message indicates the source of the failure.
  * message [policyEvaluationErrorMessage](#policyevaluationerrormessage)

### PolicyGroup
* PolicyGroup `object`: <p>Contains information about a group that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> action. </p> <p>For more information about managed policies, refer to <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
  * GroupId [idType](#idtype)
  * GroupName [groupNameType](#groupnametype)

### PolicyGroupListType
* PolicyGroupListType `array`
  * items [PolicyGroup](#policygroup)

### PolicyIdentifierType
* PolicyIdentifierType `string`

### PolicyNotAttachableException
* PolicyNotAttachableException `object`: The request failed because AWS service role policies can only be attached to the service-linked role for that service.
  * message [policyNotAttachableMessage](#policynotattachablemessage)

### PolicyRole
* PolicyRole `object`: <p>Contains information about a role that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> action. </p> <p>For more information about managed policies, refer to <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
  * RoleId [idType](#idtype)
  * RoleName [roleNameType](#rolenametype)

### PolicyRoleListType
* PolicyRoleListType `array`
  * items [PolicyRole](#policyrole)

### PolicySourceType
* PolicySourceType `string` (values: user, group, role, aws-managed, user-managed, resource, none)

### PolicyUser
* PolicyUser `object`: <p>Contains information about a user that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> action. </p> <p>For more information about managed policies, refer to <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
  * UserId [idType](#idtype)
  * UserName [userNameType](#usernametype)

### PolicyUserListType
* PolicyUserListType `array`
  * items [PolicyUser](#policyuser)

### PolicyVersion
* PolicyVersion `object`: <p>Contains information about a version of a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> actions. </p> <p>For more information about managed policies, refer to <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
  * CreateDate [dateType](#datetype)
  * Document [policyDocumentType](#policydocumenttype)
  * IsDefaultVersion [booleanType](#booleantype)
  * VersionId [policyVersionIdType](#policyversionidtype)

### Position
* Position `object`: <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p>
  * Column [ColumnNumber](#columnnumber)
  * Line [LineNumber](#linenumber)

### PutGroupPolicyRequest
* PutGroupPolicyRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)

### PutRolePolicyRequest
* PutRolePolicyRequest `object`
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)
  * RoleName **required** [roleNameType](#rolenametype)

### PutUserPolicyRequest
* PutUserPolicyRequest `object`
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * PolicyName **required** [policyNameType](#policynametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### ReasonType
* ReasonType `string`

### RegionNameType
* RegionNameType `string`

### RemoveClientIDFromOpenIDConnectProviderRequest
* RemoveClientIDFromOpenIDConnectProviderRequest `object`
  * ClientID **required** [clientIDType](#clientidtype)
  * OpenIDConnectProviderArn **required** [arnType](#arntype)

### RemoveRoleFromInstanceProfileRequest
* RemoveRoleFromInstanceProfileRequest `object`
  * InstanceProfileName **required** [instanceProfileNameType](#instanceprofilenametype)
  * RoleName **required** [roleNameType](#rolenametype)

### RemoveUserFromGroupRequest
* RemoveUserFromGroupRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### ReportContentType
* ReportContentType `string`

### ReportFormatType
* ReportFormatType `string` (values: text/csv)

### ReportStateDescriptionType
* ReportStateDescriptionType `string`

### ReportStateType
* ReportStateType `string` (values: STARTED, INPROGRESS, COMPLETE)

### ResetServiceSpecificCredentialRequest
* ResetServiceSpecificCredentialRequest `object`
  * ServiceSpecificCredentialId **required** [serviceSpecificCredentialId](#servicespecificcredentialid)
  * UserName [userNameType](#usernametype)

### ResetServiceSpecificCredentialResponse
* ResetServiceSpecificCredentialResponse `object`
  * ServiceSpecificCredential [ServiceSpecificCredential](#servicespecificcredential)

### ResourceHandlingOptionType
* ResourceHandlingOptionType `string`

### ResourceNameListType
* ResourceNameListType `array`
  * items [ResourceNameType](#resourcenametype)

### ResourceNameType
* ResourceNameType `string`

### ResourceSpecificResult
* ResourceSpecificResult `object`: <p>Contains the result of the simulation of a single API action call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
  * EvalDecisionDetails [EvalDecisionDetailsType](#evaldecisiondetailstype)
  * EvalResourceDecision **required** [PolicyEvaluationDecisionType](#policyevaluationdecisiontype)
  * EvalResourceName **required** [ResourceNameType](#resourcenametype)
  * MatchedStatements [StatementListType](#statementlisttype)
  * MissingContextValues [ContextKeyNamesResultListType](#contextkeynamesresultlisttype)

### ResourceSpecificResultListType
* ResourceSpecificResultListType `array`
  * items [ResourceSpecificResult](#resourcespecificresult)

### ResyncMFADeviceRequest
* ResyncMFADeviceRequest `object`
  * AuthenticationCode1 **required** [authenticationCodeType](#authenticationcodetype)
  * AuthenticationCode2 **required** [authenticationCodeType](#authenticationcodetype)
  * SerialNumber **required** [serialNumberType](#serialnumbertype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### Role
* Role `object`: Contains information about an IAM role. This structure is returned as a response element in several APIs that interact with roles.
  * Arn **required** [arnType](#arntype)
  * AssumeRolePolicyDocument [policyDocumentType](#policydocumenttype)
  * CreateDate **required** [dateType](#datetype)
  * Description [roleDescriptionType](#roledescriptiontype)
  * Path **required** [pathType](#pathtype)
  * RoleId **required** [idType](#idtype)
  * RoleName **required** [roleNameType](#rolenametype)

### RoleDetail
* RoleDetail `object`: <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> action.</p>
  * Arn [arnType](#arntype)
  * AssumeRolePolicyDocument [policyDocumentType](#policydocumenttype)
  * AttachedManagedPolicies [attachedPoliciesListType](#attachedpolicieslisttype)
  * CreateDate [dateType](#datetype)
  * InstanceProfileList [instanceProfileListType](#instanceprofilelisttype)
  * Path [pathType](#pathtype)
  * RoleId [idType](#idtype)
  * RoleName [roleNameType](#rolenametype)
  * RolePolicyList [policyDetailListType](#policydetaillisttype)

### RoleUsageListType
* RoleUsageListType `array`
  * items [RoleUsageType](#roleusagetype)

### RoleUsageType
* RoleUsageType `object`: <p>An object that contains details about how a service-linked role is used.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
  * Region [RegionNameType](#regionnametype)
  * Resources [ArnListType](#arnlisttype)

### SAMLMetadataDocumentType
* SAMLMetadataDocumentType `string`

### SAMLProviderListEntry
* SAMLProviderListEntry `object`: Contains the list of SAML providers for this account.
  * Arn [arnType](#arntype)
  * CreateDate [dateType](#datetype)
  * ValidUntil [dateType](#datetype)

### SAMLProviderListType
* SAMLProviderListType `array`
  * items [SAMLProviderListEntry](#samlproviderlistentry)

### SAMLProviderNameType
* SAMLProviderNameType `string`

### SSHPublicKey
* SSHPublicKey `object`: <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> actions. </p>
  * Fingerprint **required** [publicKeyFingerprintType](#publickeyfingerprinttype)
  * SSHPublicKeyBody **required** [publicKeyMaterialType](#publickeymaterialtype)
  * SSHPublicKeyId **required** [publicKeyIdType](#publickeyidtype)
  * Status **required** [statusType](#statustype)
  * UploadDate [dateType](#datetype)
  * UserName **required** [userNameType](#usernametype)

### SSHPublicKeyListType
* SSHPublicKeyListType `array`
  * items [SSHPublicKeyMetadata](#sshpublickeymetadata)

### SSHPublicKeyMetadata
* SSHPublicKeyMetadata `object`: <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> action.</p>
  * SSHPublicKeyId **required** [publicKeyIdType](#publickeyidtype)
  * Status **required** [statusType](#statustype)
  * UploadDate **required** [dateType](#datetype)
  * UserName **required** [userNameType](#usernametype)

### ServerCertificate
* ServerCertificate `object`: <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> action. </p>
  * CertificateBody **required** [certificateBodyType](#certificatebodytype)
  * CertificateChain [certificateChainType](#certificatechaintype)
  * ServerCertificateMetadata **required** [ServerCertificateMetadata](#servercertificatemetadata)

### ServerCertificateMetadata
* ServerCertificateMetadata `object`: <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> actions. </p>
  * Arn **required** [arnType](#arntype)
  * Expiration [dateType](#datetype)
  * Path **required** [pathType](#pathtype)
  * ServerCertificateId **required** [idType](#idtype)
  * ServerCertificateName **required** [serverCertificateNameType](#servercertificatenametype)
  * UploadDate [dateType](#datetype)

### ServiceFailureException
* ServiceFailureException `object`: The request processing has failed because of an unknown error, exception or failure.
  * message [serviceFailureExceptionMessage](#servicefailureexceptionmessage)

### ServiceNotSupportedException
* ServiceNotSupportedException `object`: The specified service does not support service-specific credentials.
  * message [serviceNotSupportedMessage](#servicenotsupportedmessage)

### ServiceSpecificCredential
* ServiceSpecificCredential `object`: Contains the details of a service specific credential.
  * CreateDate **required** [dateType](#datetype)
  * ServiceName **required** [serviceName](#servicename)
  * ServicePassword **required** [servicePassword](#servicepassword)
  * ServiceSpecificCredentialId **required** [serviceSpecificCredentialId](#servicespecificcredentialid)
  * ServiceUserName **required** [serviceUserName](#serviceusername)
  * Status **required** [statusType](#statustype)
  * UserName **required** [userNameType](#usernametype)

### ServiceSpecificCredentialMetadata
* ServiceSpecificCredentialMetadata `object`: Contains additional details about a service-specific credential.
  * CreateDate **required** [dateType](#datetype)
  * ServiceName **required** [serviceName](#servicename)
  * ServiceSpecificCredentialId **required** [serviceSpecificCredentialId](#servicespecificcredentialid)
  * ServiceUserName **required** [serviceUserName](#serviceusername)
  * Status **required** [statusType](#statustype)
  * UserName **required** [userNameType](#usernametype)

### ServiceSpecificCredentialsListType
* ServiceSpecificCredentialsListType `array`
  * items [ServiceSpecificCredentialMetadata](#servicespecificcredentialmetadata)

### SetDefaultPolicyVersionRequest
* SetDefaultPolicyVersionRequest `object`
  * PolicyArn **required** [arnType](#arntype)
  * VersionId **required** [policyVersionIdType](#policyversionidtype)

### SigningCertificate
* SigningCertificate `object`: <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> actions. </p>
  * CertificateBody **required** [certificateBodyType](#certificatebodytype)
  * CertificateId **required** [certificateIdType](#certificateidtype)
  * Status **required** [statusType](#statustype)
  * UploadDate [dateType](#datetype)
  * UserName **required** [userNameType](#usernametype)

### SimulateCustomPolicyRequest
* SimulateCustomPolicyRequest `object`
  * ActionNames **required** [ActionNameListType](#actionnamelisttype)
  * CallerArn [ResourceNameType](#resourcenametype)
  * ContextEntries [ContextEntryListType](#contextentrylisttype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PolicyInputList **required** [SimulationPolicyListType](#simulationpolicylisttype)
  * ResourceArns [ResourceNameListType](#resourcenamelisttype)
  * ResourceHandlingOption [ResourceHandlingOptionType](#resourcehandlingoptiontype)
  * ResourceOwner [ResourceNameType](#resourcenametype)
  * ResourcePolicy [policyDocumentType](#policydocumenttype)

### SimulatePolicyResponse
* SimulatePolicyResponse `object`: Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request.
  * EvaluationResults [EvaluationResultsListType](#evaluationresultslisttype)
  * IsTruncated [booleanType](#booleantype)
  * Marker [markerType](#markertype)

### SimulatePrincipalPolicyRequest
* SimulatePrincipalPolicyRequest `object`
  * ActionNames **required** [ActionNameListType](#actionnamelisttype)
  * CallerArn [ResourceNameType](#resourcenametype)
  * ContextEntries [ContextEntryListType](#contextentrylisttype)
  * Marker [markerType](#markertype)
  * MaxItems [maxItemsType](#maxitemstype)
  * PolicyInputList [SimulationPolicyListType](#simulationpolicylisttype)
  * PolicySourceArn **required** [arnType](#arntype)
  * ResourceArns [ResourceNameListType](#resourcenamelisttype)
  * ResourceHandlingOption [ResourceHandlingOptionType](#resourcehandlingoptiontype)
  * ResourceOwner [ResourceNameType](#resourcenametype)
  * ResourcePolicy [policyDocumentType](#policydocumenttype)

### SimulationPolicyListType
* SimulationPolicyListType `array`
  * items [policyDocumentType](#policydocumenttype)

### Statement
* Statement `object`: <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
  * EndPosition [Position](#position)
  * SourcePolicyId [PolicyIdentifierType](#policyidentifiertype)
  * SourcePolicyType [PolicySourceType](#policysourcetype)
  * StartPosition [Position](#position)

### StatementListType
* StatementListType `array`
  * items [Statement](#statement)

### UnmodifiableEntityException
* UnmodifiableEntityException `object`: The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.
  * message [unmodifiableEntityMessage](#unmodifiableentitymessage)

### UnrecognizedPublicKeyEncodingException
* UnrecognizedPublicKeyEncodingException `object`: The request was rejected because the public key encoding format is unsupported or unrecognized.
  * message [unrecognizedPublicKeyEncodingMessage](#unrecognizedpublickeyencodingmessage)

### UpdateAccessKeyRequest
* UpdateAccessKeyRequest `object`
  * AccessKeyId **required** [accessKeyIdType](#accesskeyidtype)
  * Status **required** [statusType](#statustype)
  * UserName [existingUserNameType](#existingusernametype)

### UpdateAccountPasswordPolicyRequest
* UpdateAccountPasswordPolicyRequest `object`
  * AllowUsersToChangePassword [booleanType](#booleantype)
  * HardExpiry [booleanObjectType](#booleanobjecttype)
  * MaxPasswordAge [maxPasswordAgeType](#maxpasswordagetype)
  * MinimumPasswordLength [minimumPasswordLengthType](#minimumpasswordlengthtype)
  * PasswordReusePrevention [passwordReusePreventionType](#passwordreusepreventiontype)
  * RequireLowercaseCharacters [booleanType](#booleantype)
  * RequireNumbers [booleanType](#booleantype)
  * RequireSymbols [booleanType](#booleantype)
  * RequireUppercaseCharacters [booleanType](#booleantype)

### UpdateAssumeRolePolicyRequest
* UpdateAssumeRolePolicyRequest `object`
  * PolicyDocument **required** [policyDocumentType](#policydocumenttype)
  * RoleName **required** [roleNameType](#rolenametype)

### UpdateGroupRequest
* UpdateGroupRequest `object`
  * GroupName **required** [groupNameType](#groupnametype)
  * NewGroupName [groupNameType](#groupnametype)
  * NewPath [pathType](#pathtype)

### UpdateLoginProfileRequest
* UpdateLoginProfileRequest `object`
  * Password [passwordType](#passwordtype)
  * PasswordResetRequired [booleanObjectType](#booleanobjecttype)
  * UserName **required** [userNameType](#usernametype)

### UpdateOpenIDConnectProviderThumbprintRequest
* UpdateOpenIDConnectProviderThumbprintRequest `object`
  * OpenIDConnectProviderArn **required** [arnType](#arntype)
  * ThumbprintList **required** [thumbprintListType](#thumbprintlisttype)

### UpdateRoleDescriptionRequest
* UpdateRoleDescriptionRequest `object`
  * Description **required** [roleDescriptionType](#roledescriptiontype)
  * RoleName **required** [roleNameType](#rolenametype)

### UpdateRoleDescriptionResponse
* UpdateRoleDescriptionResponse `object`
  * Role [Role](#role)

### UpdateSAMLProviderRequest
* UpdateSAMLProviderRequest `object`
  * SAMLMetadataDocument **required** [SAMLMetadataDocumentType](#samlmetadatadocumenttype)
  * SAMLProviderArn **required** [arnType](#arntype)

### UpdateSAMLProviderResponse
* UpdateSAMLProviderResponse `object`: Contains the response to a successful <a>UpdateSAMLProvider</a> request. 
  * SAMLProviderArn [arnType](#arntype)

### UpdateSSHPublicKeyRequest
* UpdateSSHPublicKeyRequest `object`
  * SSHPublicKeyId **required** [publicKeyIdType](#publickeyidtype)
  * Status **required** [statusType](#statustype)
  * UserName **required** [userNameType](#usernametype)

### UpdateServerCertificateRequest
* UpdateServerCertificateRequest `object`
  * NewPath [pathType](#pathtype)
  * NewServerCertificateName [serverCertificateNameType](#servercertificatenametype)
  * ServerCertificateName **required** [serverCertificateNameType](#servercertificatenametype)

### UpdateServiceSpecificCredentialRequest
* UpdateServiceSpecificCredentialRequest `object`
  * ServiceSpecificCredentialId **required** [serviceSpecificCredentialId](#servicespecificcredentialid)
  * Status **required** [statusType](#statustype)
  * UserName [userNameType](#usernametype)

### UpdateSigningCertificateRequest
* UpdateSigningCertificateRequest `object`
  * CertificateId **required** [certificateIdType](#certificateidtype)
  * Status **required** [statusType](#statustype)
  * UserName [existingUserNameType](#existingusernametype)

### UpdateUserRequest
* UpdateUserRequest `object`
  * NewPath [pathType](#pathtype)
  * NewUserName [userNameType](#usernametype)
  * UserName **required** [existingUserNameType](#existingusernametype)

### UploadSSHPublicKeyRequest
* UploadSSHPublicKeyRequest `object`
  * SSHPublicKeyBody **required** [publicKeyMaterialType](#publickeymaterialtype)
  * UserName **required** [userNameType](#usernametype)

### UploadSSHPublicKeyResponse
* UploadSSHPublicKeyResponse `object`: Contains the response to a successful <a>UploadSSHPublicKey</a> request.
  * SSHPublicKey [SSHPublicKey](#sshpublickey)

### UploadServerCertificateRequest
* UploadServerCertificateRequest `object`
  * CertificateBody **required** [certificateBodyType](#certificatebodytype)
  * CertificateChain [certificateChainType](#certificatechaintype)
  * Path [pathType](#pathtype)
  * PrivateKey **required** [privateKeyType](#privatekeytype)
  * ServerCertificateName **required** [serverCertificateNameType](#servercertificatenametype)

### UploadServerCertificateResponse
* UploadServerCertificateResponse `object`: Contains the response to a successful <a>UploadServerCertificate</a> request. 
  * ServerCertificateMetadata [ServerCertificateMetadata](#servercertificatemetadata)

### UploadSigningCertificateRequest
* UploadSigningCertificateRequest `object`
  * CertificateBody **required** [certificateBodyType](#certificatebodytype)
  * UserName [existingUserNameType](#existingusernametype)

### UploadSigningCertificateResponse
* UploadSigningCertificateResponse `object`: Contains the response to a successful <a>UploadSigningCertificate</a> request. 
  * Certificate **required** [SigningCertificate](#signingcertificate)

### User
* User `object`: <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
  * Arn **required** [arnType](#arntype)
  * CreateDate **required** [dateType](#datetype)
  * PasswordLastUsed [dateType](#datetype)
  * Path **required** [pathType](#pathtype)
  * UserId **required** [idType](#idtype)
  * UserName **required** [userNameType](#usernametype)

### UserDetail
* UserDetail `object`: <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> action.</p>
  * Arn [arnType](#arntype)
  * AttachedManagedPolicies [attachedPoliciesListType](#attachedpolicieslisttype)
  * CreateDate [dateType](#datetype)
  * GroupList [groupNameListType](#groupnamelisttype)
  * Path [pathType](#pathtype)
  * UserId [idType](#idtype)
  * UserName [userNameType](#usernametype)
  * UserPolicyList [policyDetailListType](#policydetaillisttype)

### VirtualMFADevice
* VirtualMFADevice `object`: Contains information about a virtual MFA device.
  * Base32StringSeed [BootstrapDatum](#bootstrapdatum)
  * EnableDate [dateType](#datetype)
  * QRCodePNG [BootstrapDatum](#bootstrapdatum)
  * SerialNumber **required** [serialNumberType](#serialnumbertype)
  * User [User](#user)

### accessKeyIdType
* accessKeyIdType `string`

### accessKeyMetadataListType
* accessKeyMetadataListType `array`: <p>Contains a list of access key metadata.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> action.</p>
  * items [AccessKeyMetadata](#accesskeymetadata)

### accessKeySecretType
* accessKeySecretType `string`

### accountAliasListType
* accountAliasListType `array`
  * items [accountAliasType](#accountaliastype)

### accountAliasType
* accountAliasType `string`

### arnType
* arnType `string`: <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>

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
* certificateListType `array`: <p>Contains a list of signing certificates.</p> <p>This data type is used as a response element in the <a>ListSigningCertificates</a> action.</p>
  * items [SigningCertificate](#signingcertificate)

### clientIDListType
* clientIDListType `array`
  * items [clientIDType](#clientidtype)

### clientIDType
* clientIDType `string`

### credentialReportExpiredExceptionMessage
* credentialReportExpiredExceptionMessage `string`

### credentialReportNotPresentExceptionMessage
* credentialReportNotPresentExceptionMessage `string`

### credentialReportNotReadyExceptionMessage
* credentialReportNotReadyExceptionMessage `string`

### customSuffixType
* customSuffixType `string`

### dateType
* dateType `string`

### deleteConflictMessage
* deleteConflictMessage `string`

### duplicateCertificateMessage
* duplicateCertificateMessage `string`

### duplicateSSHPublicKeyMessage
* duplicateSSHPublicKeyMessage `string`

### encodingType
* encodingType `string` (values: SSH, PEM)

### entityAlreadyExistsMessage
* entityAlreadyExistsMessage `string`

### entityListType
* entityListType `array`
  * items [EntityType](#entitytype)

### entityTemporarilyUnmodifiableMessage
* entityTemporarilyUnmodifiableMessage `string`

### existingUserNameType
* existingUserNameType `string`

### groupDetailListType
* groupDetailListType `array`
  * items [GroupDetail](#groupdetail)

### groupListType
* groupListType `array`: <p>Contains a list of IAM groups.</p> <p>This data type is used as a response element in the <a>ListGroups</a> action.</p>
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

### invalidAuthenticationCodeMessage
* invalidAuthenticationCodeMessage `string`

### invalidCertificateMessage
* invalidCertificateMessage `string`

### invalidInputMessage
* invalidInputMessage `string`

### invalidPublicKeyMessage
* invalidPublicKeyMessage `string`

### invalidUserTypeMessage
* invalidUserTypeMessage `string`

### keyPairMismatchMessage
* keyPairMismatchMessage `string`

### limitExceededMessage
* limitExceededMessage `string`

### malformedCertificateMessage
* malformedCertificateMessage `string`

### malformedPolicyDocumentMessage
* malformedPolicyDocumentMessage `string`

### markerType
* markerType `string`

### maxItemsType
* maxItemsType `integer`

### maxPasswordAgeType
* maxPasswordAgeType `integer`

### mfaDeviceListType
* mfaDeviceListType `array`: <p>Contains a list of MFA devices.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> and <a>ListVirtualMFADevices</a> actions. </p>
  * items [MFADevice](#mfadevice)

### minimumPasswordLengthType
* minimumPasswordLengthType `integer`

### noSuchEntityMessage
* noSuchEntityMessage `string`

### passwordPolicyViolationMessage
* passwordPolicyViolationMessage `string`

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

### policyEvaluationErrorMessage
* policyEvaluationErrorMessage `string`

### policyListType
* policyListType `array`
  * items [Policy](#policy)

### policyNameListType
* policyNameListType `array`: <p>Contains a list of policy names.</p> <p>This data type is used as a response element in the <a>ListPolicies</a> action.</p>
  * items [policyNameType](#policynametype)

### policyNameType
* policyNameType `string`

### policyNotAttachableMessage
* policyNotAttachableMessage `string`

### policyPathType
* policyPathType `string`

### policyScopeType
* policyScopeType `string` (values: All, AWS, Local)

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

### roleDescriptionType
* roleDescriptionType `string`

### roleDetailListType
* roleDetailListType `array`
  * items [RoleDetail](#roledetail)

### roleListType
* roleListType `array`: <p>Contains a list of IAM roles.</p> <p>This data type is used as a response element in the <a>ListRoles</a> action.</p>
  * items [Role](#role)

### roleNameType
* roleNameType `string`

### serialNumberType
* serialNumberType `string`

### serverCertificateMetadataListType
* serverCertificateMetadataListType `array`
  * items [ServerCertificateMetadata](#servercertificatemetadata)

### serverCertificateNameType
* serverCertificateNameType `string`

### serviceFailureExceptionMessage
* serviceFailureExceptionMessage `string`

### serviceName
* serviceName `string`

### serviceNotSupportedMessage
* serviceNotSupportedMessage `string`

### servicePassword
* servicePassword `string`

### serviceSpecificCredentialId
* serviceSpecificCredentialId `string`

### serviceUserName
* serviceUserName `string`

### statusType
* statusType `string` (values: Active, Inactive)

### stringType
* stringType `string`

### summaryKeyType
* summaryKeyType `string` (values: Users, UsersQuota, Groups, GroupsQuota, ServerCertificates, ServerCertificatesQuota, UserPolicySizeQuota, GroupPolicySizeQuota, GroupsPerUserQuota, SigningCertificatesPerUserQuota, AccessKeysPerUserQuota, MFADevices, MFADevicesInUse, AccountMFAEnabled, AccountAccessKeysPresent, AccountSigningCertificatesPresent, AttachedPoliciesPerGroupQuota, AttachedPoliciesPerRoleQuota, AttachedPoliciesPerUserQuota, Policies, PoliciesQuota, PolicySizeQuota, PolicyVersionsInUse, PolicyVersionsInUseQuota, VersionsPerPolicyQuota)

### summaryMapType
* summaryMapType `array`
  * items `object`
    * key [summaryKeyType](#summarykeytype)
    * value [summaryValueType](#summaryvaluetype)

### summaryValueType
* summaryValueType `integer`

### thumbprintListType
* thumbprintListType `array`: Contains a list of thumbprints of identity provider server certificates.
  * items [thumbprintType](#thumbprinttype)

### thumbprintType
* thumbprintType `string`: <p>Contains a thumbprint for an identity provider's server certificate.</p> <p>The identity provider's server certificate thumbprint is the hex-encoded SHA-1 hash value of the self-signed X.509 certificate used by the domain where the OpenID Connect provider makes its keys available. It is always a 40-character string.</p>

### unmodifiableEntityMessage
* unmodifiableEntityMessage `string`

### unrecognizedPublicKeyEncodingMessage
* unrecognizedPublicKeyEncodingMessage `string`

### userDetailListType
* userDetailListType `array`
  * items [UserDetail](#userdetail)

### userListType
* userListType `array`: <p>Contains a list of users.</p> <p>This data type is used as a response element in the <a>GetGroup</a> and <a>ListUsers</a> actions. </p>
  * items [User](#user)

### userNameType
* userNameType `string`

### virtualMFADeviceListType
* virtualMFADeviceListType `array`
  * items [VirtualMFADevice](#virtualmfadevice)

### virtualMFADeviceName
* virtualMFADeviceName `string`


