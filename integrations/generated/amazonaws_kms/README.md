# @datafire/amazonaws_kms

Client library for AWS Key Management Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kms
```
```js
let amazonaws_kms = require('@datafire/amazonaws_kms').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_kms.CancelKeyDeletion({
  "KeyId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Key Management Service</fullname> <p>AWS Key Management Service (AWS KMS) is an encryption and key management web service. This guide describes the AWS KMS operations that you can call programmatically. For general information about AWS KMS, see the <a href="http://docs.aws.amazon.com/kms/latest/developerguide/">AWS Key Management Service Developer Guide</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS KMS and other AWS services. For example, the SDKs take care of tasks such as signing requests (see below), managing errors, and retrying requests automatically. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note> <p>We recommend that you use the AWS SDKs to make programmatic API calls to AWS KMS.</p> <p>Clients must support TLS (Transport Layer Security) 1.0. We recommend TLS 1.2. Clients must also support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7 and later support these modes.</p> <p> <b>Signing Requests</b> </p> <p>Requests must be signed by using an access key ID and a secret access key. We strongly recommend that you <i>do not</i> use your AWS account (root) access key ID and secret key for everyday work with AWS KMS. Instead, use the access key ID and secret access key for an IAM user, or you can use the AWS Security Token Service to generate temporary security credentials that you can use to sign requests.</p> <p>All AWS KMS operations require <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> <p> <b>Logging API Requests</b> </p> <p>AWS KMS supports AWS CloudTrail, a service that logs AWS API calls and related events for your AWS account and delivers them to an Amazon S3 bucket that you specify. By using the information collected by CloudTrail, you can determine what requests were made to AWS KMS, who made the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/">AWS CloudTrail User Guide</a>.</p> <p> <b>Additional Resources</b> </p> <p>For more information about credentials and request signing, see the following:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS Security Credentials</a> - This topic provides general information about the types of credentials used for accessing AWS.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a> - This section of the <i>IAM User Guide</i> describes how to create and use temporary security credentials.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a> - This set of topics walks you through the process of signing a request using an access key ID and a secret access key.</p> </li> </ul> <p> <b>Commonly Used APIs</b> </p> <p>Of the APIs discussed in this guide, the following will prove the most useful for most applications. You will likely perform actions other than these, such as creating keys and assigning policies, by using the console.</p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>

## Actions

### CancelKeyDeletion



```js
amazonaws_kms.CancelKeyDeletion({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
* output [CancelKeyDeletionResponse](#cancelkeydeletionresponse)

### CreateAlias



```js
amazonaws_kms.CreateAlias({
  "AliasName": "",
  "TargetKeyId": ""
}, context)
```

#### Input
* input `object`
  * AliasName **required** [AliasNameType](#aliasnametype)
  * TargetKeyId **required** [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*

### CreateGrant



```js
amazonaws_kms.CreateGrant({
  "KeyId": "",
  "GranteePrincipal": "",
  "Operations": []
}, context)
```

#### Input
* input `object`
  * Constraints [GrantConstraints](#grantconstraints)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * GranteePrincipal **required** [PrincipalIdType](#principalidtype)
  * KeyId **required** [KeyIdType](#keyidtype)
  * Name [GrantNameType](#grantnametype)
  * Operations **required** [GrantOperationList](#grantoperationlist)
  * RetiringPrincipal [PrincipalIdType](#principalidtype)

#### Output
* output [CreateGrantResponse](#creategrantresponse)

### CreateKey



```js
amazonaws_kms.CreateKey({}, context)
```

#### Input
* input `object`
  * BypassPolicyLockoutSafetyCheck [BooleanType](#booleantype)
  * Description [DescriptionType](#descriptiontype)
  * KeyUsage [KeyUsageType](#keyusagetype)
  * Origin [OriginType](#origintype)
  * Policy [PolicyType](#policytype)
  * Tags [TagList](#taglist)

#### Output
* output [CreateKeyResponse](#createkeyresponse)

### Decrypt



```js
amazonaws_kms.Decrypt({
  "CiphertextBlob": ""
}, context)
```

#### Input
* input `object`
  * CiphertextBlob **required** [CiphertextType](#ciphertexttype)
  * EncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * GrantTokens [GrantTokenList](#granttokenlist)

#### Output
* output [DecryptResponse](#decryptresponse)

### DeleteAlias



```js
amazonaws_kms.DeleteAlias({
  "AliasName": ""
}, context)
```

#### Input
* input `object`
  * AliasName **required** [AliasNameType](#aliasnametype)

#### Output
*Output schema unknown*

### DeleteImportedKeyMaterial



```js
amazonaws_kms.DeleteImportedKeyMaterial({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*

### DescribeKey



```js
amazonaws_kms.DescribeKey({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * GrantTokens [GrantTokenList](#granttokenlist)
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
* output [DescribeKeyResponse](#describekeyresponse)

### DisableKey



```js
amazonaws_kms.DisableKey({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*

### DisableKeyRotation



```js
amazonaws_kms.DisableKeyRotation({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*

### EnableKey



```js
amazonaws_kms.EnableKey({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*

### EnableKeyRotation



```js
amazonaws_kms.EnableKeyRotation({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*

### Encrypt



```js
amazonaws_kms.Encrypt({
  "KeyId": "",
  "Plaintext": ""
}, context)
```

#### Input
* input `object`
  * EncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * KeyId **required** [KeyIdType](#keyidtype)
  * Plaintext **required** [PlaintextType](#plaintexttype)

#### Output
* output [EncryptResponse](#encryptresponse)

### GenerateDataKey



```js
amazonaws_kms.GenerateDataKey({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * EncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * KeyId **required** [KeyIdType](#keyidtype)
  * KeySpec [DataKeySpec](#datakeyspec)
  * NumberOfBytes [NumberOfBytesType](#numberofbytestype)

#### Output
* output [GenerateDataKeyResponse](#generatedatakeyresponse)

### GenerateDataKeyWithoutPlaintext



```js
amazonaws_kms.GenerateDataKeyWithoutPlaintext({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * EncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * KeyId **required** [KeyIdType](#keyidtype)
  * KeySpec [DataKeySpec](#datakeyspec)
  * NumberOfBytes [NumberOfBytesType](#numberofbytestype)

#### Output
* output [GenerateDataKeyWithoutPlaintextResponse](#generatedatakeywithoutplaintextresponse)

### GenerateRandom



```js
amazonaws_kms.GenerateRandom({}, context)
```

#### Input
* input `object`
  * NumberOfBytes [NumberOfBytesType](#numberofbytestype)

#### Output
* output [GenerateRandomResponse](#generaterandomresponse)

### GetKeyPolicy



```js
amazonaws_kms.GetKeyPolicy({
  "KeyId": "",
  "PolicyName": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * PolicyName **required** [PolicyNameType](#policynametype)

#### Output
* output [GetKeyPolicyResponse](#getkeypolicyresponse)

### GetKeyRotationStatus



```js
amazonaws_kms.GetKeyRotationStatus({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
* output [GetKeyRotationStatusResponse](#getkeyrotationstatusresponse)

### GetParametersForImport



```js
amazonaws_kms.GetParametersForImport({
  "KeyId": "",
  "WrappingAlgorithm": "",
  "WrappingKeySpec": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * WrappingAlgorithm **required** [AlgorithmSpec](#algorithmspec)
  * WrappingKeySpec **required** [WrappingKeySpec](#wrappingkeyspec)

#### Output
* output [GetParametersForImportResponse](#getparametersforimportresponse)

### ImportKeyMaterial



```js
amazonaws_kms.ImportKeyMaterial({
  "KeyId": "",
  "ImportToken": "",
  "EncryptedKeyMaterial": ""
}, context)
```

#### Input
* input `object`
  * EncryptedKeyMaterial **required** [CiphertextType](#ciphertexttype)
  * ExpirationModel [ExpirationModelType](#expirationmodeltype)
  * ImportToken **required** [CiphertextType](#ciphertexttype)
  * KeyId **required** [KeyIdType](#keyidtype)
  * ValidTo [DateType](#datetype)

#### Output
* output [ImportKeyMaterialResponse](#importkeymaterialresponse)

### ListAliases



```js
amazonaws_kms.ListAliases({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

#### Output
* output [ListAliasesResponse](#listaliasesresponse)

### ListGrants



```js
amazonaws_kms.ListGrants({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * KeyId **required** [KeyIdType](#keyidtype)
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

#### Output
* output [ListGrantsResponse](#listgrantsresponse)

### ListKeyPolicies



```js
amazonaws_kms.ListKeyPolicies({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * KeyId **required** [KeyIdType](#keyidtype)
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

#### Output
* output [ListKeyPoliciesResponse](#listkeypoliciesresponse)

### ListKeys



```js
amazonaws_kms.ListKeys({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

#### Output
* output [ListKeysResponse](#listkeysresponse)

### ListResourceTags



```js
amazonaws_kms.ListResourceTags({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

#### Output
* output [ListResourceTagsResponse](#listresourcetagsresponse)

### ListRetirableGrants



```js
amazonaws_kms.ListRetirableGrants({
  "RetiringPrincipal": ""
}, context)
```

#### Input
* input `object`
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)
  * RetiringPrincipal **required** [PrincipalIdType](#principalidtype)

#### Output
* output [ListGrantsResponse](#listgrantsresponse)

### PutKeyPolicy



```js
amazonaws_kms.PutKeyPolicy({
  "KeyId": "",
  "PolicyName": "",
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * BypassPolicyLockoutSafetyCheck [BooleanType](#booleantype)
  * KeyId **required** [KeyIdType](#keyidtype)
  * Policy **required** [PolicyType](#policytype)
  * PolicyName **required** [PolicyNameType](#policynametype)

#### Output
*Output schema unknown*

### ReEncrypt



```js
amazonaws_kms.ReEncrypt({
  "CiphertextBlob": "",
  "DestinationKeyId": ""
}, context)
```

#### Input
* input `object`
  * CiphertextBlob **required** [CiphertextType](#ciphertexttype)
  * DestinationEncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * DestinationKeyId **required** [KeyIdType](#keyidtype)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * SourceEncryptionContext [EncryptionContextType](#encryptioncontexttype)

#### Output
* output [ReEncryptResponse](#reencryptresponse)

### RetireGrant



```js
amazonaws_kms.RetireGrant({}, context)
```

#### Input
* input `object`
  * GrantId [GrantIdType](#grantidtype)
  * GrantToken [GrantTokenType](#granttokentype)
  * KeyId [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*

### RevokeGrant



```js
amazonaws_kms.RevokeGrant({
  "KeyId": "",
  "GrantId": ""
}, context)
```

#### Input
* input `object`
  * GrantId **required** [GrantIdType](#grantidtype)
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*

### ScheduleKeyDeletion



```js
amazonaws_kms.ScheduleKeyDeletion({
  "KeyId": ""
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * PendingWindowInDays [PendingWindowInDaysType](#pendingwindowindaystype)

#### Output
* output [ScheduleKeyDeletionResponse](#schedulekeydeletionresponse)

### TagResource



```js
amazonaws_kms.TagResource({
  "KeyId": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * Tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_kms.UntagResource({
  "KeyId": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
*Output schema unknown*

### UpdateAlias



```js
amazonaws_kms.UpdateAlias({
  "AliasName": "",
  "TargetKeyId": ""
}, context)
```

#### Input
* input `object`
  * AliasName **required** [AliasNameType](#aliasnametype)
  * TargetKeyId **required** [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*

### UpdateKeyDescription



```js
amazonaws_kms.UpdateKeyDescription({
  "KeyId": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * Description **required** [DescriptionType](#descriptiontype)
  * KeyId **required** [KeyIdType](#keyidtype)

#### Output
*Output schema unknown*



## Definitions

### AWSAccountIdType
* AWSAccountIdType `string`

### AlgorithmSpec
* AlgorithmSpec `string` (values: RSAES_PKCS1_V1_5, RSAES_OAEP_SHA_1, RSAES_OAEP_SHA_256)

### AliasList
* AliasList `array`
  * items [AliasListEntry](#aliaslistentry)

### AliasListEntry
* AliasListEntry `object`: Contains information about an alias.
  * AliasArn [ArnType](#arntype)
  * AliasName [AliasNameType](#aliasnametype)
  * TargetKeyId [KeyIdType](#keyidtype)

### AliasNameType
* AliasNameType `string`

### AlreadyExistsException
* AlreadyExistsException `object`: The request was rejected because it attempted to create a resource that already exists.
  * message [ErrorMessageType](#errormessagetype)

### ArnType
* ArnType `string`

### BooleanType
* BooleanType `boolean`

### CancelKeyDeletionRequest
* CancelKeyDeletionRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)

### CancelKeyDeletionResponse
* CancelKeyDeletionResponse `object`
  * KeyId [KeyIdType](#keyidtype)

### CiphertextType
* CiphertextType `string`

### CreateAliasRequest
* CreateAliasRequest `object`
  * AliasName **required** [AliasNameType](#aliasnametype)
  * TargetKeyId **required** [KeyIdType](#keyidtype)

### CreateGrantRequest
* CreateGrantRequest `object`
  * Constraints [GrantConstraints](#grantconstraints)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * GranteePrincipal **required** [PrincipalIdType](#principalidtype)
  * KeyId **required** [KeyIdType](#keyidtype)
  * Name [GrantNameType](#grantnametype)
  * Operations **required** [GrantOperationList](#grantoperationlist)
  * RetiringPrincipal [PrincipalIdType](#principalidtype)

### CreateGrantResponse
* CreateGrantResponse `object`
  * GrantId [GrantIdType](#grantidtype)
  * GrantToken [GrantTokenType](#granttokentype)

### CreateKeyRequest
* CreateKeyRequest `object`
  * BypassPolicyLockoutSafetyCheck [BooleanType](#booleantype)
  * Description [DescriptionType](#descriptiontype)
  * KeyUsage [KeyUsageType](#keyusagetype)
  * Origin [OriginType](#origintype)
  * Policy [PolicyType](#policytype)
  * Tags [TagList](#taglist)

### CreateKeyResponse
* CreateKeyResponse `object`
  * KeyMetadata [KeyMetadata](#keymetadata)

### DataKeySpec
* DataKeySpec `string` (values: AES_256, AES_128)

### DateType
* DateType `string`

### DecryptRequest
* DecryptRequest `object`
  * CiphertextBlob **required** [CiphertextType](#ciphertexttype)
  * EncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * GrantTokens [GrantTokenList](#granttokenlist)

### DecryptResponse
* DecryptResponse `object`
  * KeyId [KeyIdType](#keyidtype)
  * Plaintext [PlaintextType](#plaintexttype)

### DeleteAliasRequest
* DeleteAliasRequest `object`
  * AliasName **required** [AliasNameType](#aliasnametype)

### DeleteImportedKeyMaterialRequest
* DeleteImportedKeyMaterialRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)

### DependencyTimeoutException
* DependencyTimeoutException `object`: The system timed out while trying to fulfill the request. The request can be retried.
  * message [ErrorMessageType](#errormessagetype)

### DescribeKeyRequest
* DescribeKeyRequest `object`
  * GrantTokens [GrantTokenList](#granttokenlist)
  * KeyId **required** [KeyIdType](#keyidtype)

### DescribeKeyResponse
* DescribeKeyResponse `object`
  * KeyMetadata [KeyMetadata](#keymetadata)

### DescriptionType
* DescriptionType `string`

### DisableKeyRequest
* DisableKeyRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)

### DisableKeyRotationRequest
* DisableKeyRotationRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)

### DisabledException
* DisabledException `object`: The request was rejected because the specified CMK is not enabled.
  * message [ErrorMessageType](#errormessagetype)

### EnableKeyRequest
* EnableKeyRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)

### EnableKeyRotationRequest
* EnableKeyRotationRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)

### EncryptRequest
* EncryptRequest `object`
  * EncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * KeyId **required** [KeyIdType](#keyidtype)
  * Plaintext **required** [PlaintextType](#plaintexttype)

### EncryptResponse
* EncryptResponse `object`
  * CiphertextBlob [CiphertextType](#ciphertexttype)
  * KeyId [KeyIdType](#keyidtype)

### EncryptionContextKey
* EncryptionContextKey `string`

### EncryptionContextType
* EncryptionContextType `array`
  * items `object`
    * key [EncryptionContextKey](#encryptioncontextkey)
    * value [EncryptionContextValue](#encryptioncontextvalue)

### EncryptionContextValue
* EncryptionContextValue `string`

### ErrorMessageType
* ErrorMessageType `string`

### ExpirationModelType
* ExpirationModelType `string` (values: KEY_MATERIAL_EXPIRES, KEY_MATERIAL_DOES_NOT_EXPIRE)

### ExpiredImportTokenException
* ExpiredImportTokenException `object`: The request was rejected because the provided import token is expired. Use <a>GetParametersForImport</a> to get a new import token and public key, use the new public key to encrypt the key material, and then try the request again.
  * message [ErrorMessageType](#errormessagetype)

### GenerateDataKeyRequest
* GenerateDataKeyRequest `object`
  * EncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * KeyId **required** [KeyIdType](#keyidtype)
  * KeySpec [DataKeySpec](#datakeyspec)
  * NumberOfBytes [NumberOfBytesType](#numberofbytestype)

### GenerateDataKeyResponse
* GenerateDataKeyResponse `object`
  * CiphertextBlob [CiphertextType](#ciphertexttype)
  * KeyId [KeyIdType](#keyidtype)
  * Plaintext [PlaintextType](#plaintexttype)

### GenerateDataKeyWithoutPlaintextRequest
* GenerateDataKeyWithoutPlaintextRequest `object`
  * EncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * KeyId **required** [KeyIdType](#keyidtype)
  * KeySpec [DataKeySpec](#datakeyspec)
  * NumberOfBytes [NumberOfBytesType](#numberofbytestype)

### GenerateDataKeyWithoutPlaintextResponse
* GenerateDataKeyWithoutPlaintextResponse `object`
  * CiphertextBlob [CiphertextType](#ciphertexttype)
  * KeyId [KeyIdType](#keyidtype)

### GenerateRandomRequest
* GenerateRandomRequest `object`
  * NumberOfBytes [NumberOfBytesType](#numberofbytestype)

### GenerateRandomResponse
* GenerateRandomResponse `object`
  * Plaintext [PlaintextType](#plaintexttype)

### GetKeyPolicyRequest
* GetKeyPolicyRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * PolicyName **required** [PolicyNameType](#policynametype)

### GetKeyPolicyResponse
* GetKeyPolicyResponse `object`
  * Policy [PolicyType](#policytype)

### GetKeyRotationStatusRequest
* GetKeyRotationStatusRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)

### GetKeyRotationStatusResponse
* GetKeyRotationStatusResponse `object`
  * KeyRotationEnabled [BooleanType](#booleantype)

### GetParametersForImportRequest
* GetParametersForImportRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * WrappingAlgorithm **required** [AlgorithmSpec](#algorithmspec)
  * WrappingKeySpec **required** [WrappingKeySpec](#wrappingkeyspec)

### GetParametersForImportResponse
* GetParametersForImportResponse `object`
  * ImportToken [CiphertextType](#ciphertexttype)
  * KeyId [KeyIdType](#keyidtype)
  * ParametersValidTo [DateType](#datetype)
  * PublicKey [PlaintextType](#plaintexttype)

### GrantConstraints
* GrantConstraints `object`: <p>A structure that you can use to allow certain operations in the grant only when the desired encryption context is present. For more information about encryption context, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html">Encryption Context</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>Grant constraints apply only to operations that accept encryption context as input. For example, the <code> <a>DescribeKey</a> </code> operation does not accept encryption context as input. A grant that allows the <code>DescribeKey</code> operation does so regardless of the grant constraints. In constrast, the <code> <a>Encrypt</a> </code> operation accepts encryption context as input. A grant that allows the <code>Encrypt</code> operation does so only when the encryption context of the <code>Encrypt</code> operation satisfies the grant constraints.</p>
  * EncryptionContextEquals [EncryptionContextType](#encryptioncontexttype)
  * EncryptionContextSubset [EncryptionContextType](#encryptioncontexttype)

### GrantIdType
* GrantIdType `string`

### GrantList
* GrantList `array`
  * items [GrantListEntry](#grantlistentry)

### GrantListEntry
* GrantListEntry `object`: Contains information about an entry in a list of grants.
  * Constraints [GrantConstraints](#grantconstraints)
  * CreationDate [DateType](#datetype)
  * GrantId [GrantIdType](#grantidtype)
  * GranteePrincipal [PrincipalIdType](#principalidtype)
  * IssuingAccount [PrincipalIdType](#principalidtype)
  * KeyId [KeyIdType](#keyidtype)
  * Name [GrantNameType](#grantnametype)
  * Operations [GrantOperationList](#grantoperationlist)
  * RetiringPrincipal [PrincipalIdType](#principalidtype)

### GrantNameType
* GrantNameType `string`

### GrantOperation
* GrantOperation `string` (values: Decrypt, Encrypt, GenerateDataKey, GenerateDataKeyWithoutPlaintext, ReEncryptFrom, ReEncryptTo, CreateGrant, RetireGrant, DescribeKey)

### GrantOperationList
* GrantOperationList `array`
  * items [GrantOperation](#grantoperation)

### GrantTokenList
* GrantTokenList `array`
  * items [GrantTokenType](#granttokentype)

### GrantTokenType
* GrantTokenType `string`

### ImportKeyMaterialRequest
* ImportKeyMaterialRequest `object`
  * EncryptedKeyMaterial **required** [CiphertextType](#ciphertexttype)
  * ExpirationModel [ExpirationModelType](#expirationmodeltype)
  * ImportToken **required** [CiphertextType](#ciphertexttype)
  * KeyId **required** [KeyIdType](#keyidtype)
  * ValidTo [DateType](#datetype)

### ImportKeyMaterialResponse
* ImportKeyMaterialResponse `object`

### IncorrectKeyMaterialException
* IncorrectKeyMaterialException `object`: The request was rejected because the provided key material is invalid or is not the same key material that was previously imported into this customer master key (CMK).
  * message [ErrorMessageType](#errormessagetype)

### InvalidAliasNameException
* InvalidAliasNameException `object`: The request was rejected because the specified alias name is not valid.
  * message [ErrorMessageType](#errormessagetype)

### InvalidArnException
* InvalidArnException `object`: The request was rejected because a specified ARN was not valid.
  * message [ErrorMessageType](#errormessagetype)

### InvalidCiphertextException
* InvalidCiphertextException `object`: The request was rejected because the specified ciphertext, or additional authenticated data incorporated into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise invalid.
  * message [ErrorMessageType](#errormessagetype)

### InvalidGrantIdException
* InvalidGrantIdException `object`: The request was rejected because the specified <code>GrantId</code> is not valid.
  * message [ErrorMessageType](#errormessagetype)

### InvalidGrantTokenException
* InvalidGrantTokenException `object`: The request was rejected because the specified grant token is not valid.
  * message [ErrorMessageType](#errormessagetype)

### InvalidImportTokenException
* InvalidImportTokenException `object`: The request was rejected because the provided import token is invalid or is associated with a different customer master key (CMK).
  * message [ErrorMessageType](#errormessagetype)

### InvalidKeyUsageException
* InvalidKeyUsageException `object`: The request was rejected because the specified <code>KeySpec</code> value is not valid.
  * message [ErrorMessageType](#errormessagetype)

### InvalidMarkerException
* InvalidMarkerException `object`: The request was rejected because the marker that specifies where pagination should next begin is not valid.
  * message [ErrorMessageType](#errormessagetype)

### KMSInternalException
* KMSInternalException `object`: The request was rejected because an internal exception occurred. The request can be retried.
  * message [ErrorMessageType](#errormessagetype)

### KMSInvalidStateException
* KMSInvalidStateException `object`: <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
  * message [ErrorMessageType](#errormessagetype)

### KeyIdType
* KeyIdType `string`

### KeyList
* KeyList `array`
  * items [KeyListEntry](#keylistentry)

### KeyListEntry
* KeyListEntry `object`: Contains information about each entry in the key list.
  * KeyArn [ArnType](#arntype)
  * KeyId [KeyIdType](#keyidtype)

### KeyManagerType
* KeyManagerType `string` (values: AWS, CUSTOMER)

### KeyMetadata
* KeyMetadata `object`: <p>Contains metadata about a customer master key (CMK).</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
  * AWSAccountId [AWSAccountIdType](#awsaccountidtype)
  * Arn [ArnType](#arntype)
  * CreationDate [DateType](#datetype)
  * DeletionDate [DateType](#datetype)
  * Description [DescriptionType](#descriptiontype)
  * Enabled [BooleanType](#booleantype)
  * ExpirationModel [ExpirationModelType](#expirationmodeltype)
  * KeyId **required** [KeyIdType](#keyidtype)
  * KeyManager [KeyManagerType](#keymanagertype)
  * KeyState [KeyState](#keystate)
  * KeyUsage [KeyUsageType](#keyusagetype)
  * Origin [OriginType](#origintype)
  * ValidTo [DateType](#datetype)

### KeyState
* KeyState `string` (values: Enabled, Disabled, PendingDeletion, PendingImport)

### KeyUnavailableException
* KeyUnavailableException `object`: The request was rejected because the specified CMK was not available. The request can be retried.
  * message [ErrorMessageType](#errormessagetype)

### KeyUsageType
* KeyUsageType `string` (values: ENCRYPT_DECRYPT)

### LimitExceededException
* LimitExceededException `object`: The request was rejected because a limit was exceeded. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.
  * message [ErrorMessageType](#errormessagetype)

### LimitType
* LimitType `integer`

### ListAliasesRequest
* ListAliasesRequest `object`
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

### ListAliasesResponse
* ListAliasesResponse `object`
  * Aliases [AliasList](#aliaslist)
  * NextMarker [MarkerType](#markertype)
  * Truncated [BooleanType](#booleantype)

### ListGrantsRequest
* ListGrantsRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

### ListGrantsResponse
* ListGrantsResponse `object`
  * Grants [GrantList](#grantlist)
  * NextMarker [MarkerType](#markertype)
  * Truncated [BooleanType](#booleantype)

### ListKeyPoliciesRequest
* ListKeyPoliciesRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

### ListKeyPoliciesResponse
* ListKeyPoliciesResponse `object`
  * NextMarker [MarkerType](#markertype)
  * PolicyNames [PolicyNameList](#policynamelist)
  * Truncated [BooleanType](#booleantype)

### ListKeysRequest
* ListKeysRequest `object`
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

### ListKeysResponse
* ListKeysResponse `object`
  * Keys [KeyList](#keylist)
  * NextMarker [MarkerType](#markertype)
  * Truncated [BooleanType](#booleantype)

### ListResourceTagsRequest
* ListResourceTagsRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)

### ListResourceTagsResponse
* ListResourceTagsResponse `object`
  * NextMarker [MarkerType](#markertype)
  * Tags [TagList](#taglist)
  * Truncated [BooleanType](#booleantype)

### ListRetirableGrantsRequest
* ListRetirableGrantsRequest `object`
  * Limit [LimitType](#limittype)
  * Marker [MarkerType](#markertype)
  * RetiringPrincipal **required** [PrincipalIdType](#principalidtype)

### MalformedPolicyDocumentException
* MalformedPolicyDocumentException `object`: The request was rejected because the specified policy is not syntactically or semantically correct.
  * message [ErrorMessageType](#errormessagetype)

### MarkerType
* MarkerType `string`

### NotFoundException
* NotFoundException `object`: The request was rejected because the specified entity or resource could not be found.
  * message [ErrorMessageType](#errormessagetype)

### NumberOfBytesType
* NumberOfBytesType `integer`

### OriginType
* OriginType `string` (values: AWS_KMS, EXTERNAL)

### PendingWindowInDaysType
* PendingWindowInDaysType `integer`

### PlaintextType
* PlaintextType `string`

### PolicyNameList
* PolicyNameList `array`
  * items [PolicyNameType](#policynametype)

### PolicyNameType
* PolicyNameType `string`

### PolicyType
* PolicyType `string`

### PrincipalIdType
* PrincipalIdType `string`

### PutKeyPolicyRequest
* PutKeyPolicyRequest `object`
  * BypassPolicyLockoutSafetyCheck [BooleanType](#booleantype)
  * KeyId **required** [KeyIdType](#keyidtype)
  * Policy **required** [PolicyType](#policytype)
  * PolicyName **required** [PolicyNameType](#policynametype)

### ReEncryptRequest
* ReEncryptRequest `object`
  * CiphertextBlob **required** [CiphertextType](#ciphertexttype)
  * DestinationEncryptionContext [EncryptionContextType](#encryptioncontexttype)
  * DestinationKeyId **required** [KeyIdType](#keyidtype)
  * GrantTokens [GrantTokenList](#granttokenlist)
  * SourceEncryptionContext [EncryptionContextType](#encryptioncontexttype)

### ReEncryptResponse
* ReEncryptResponse `object`
  * CiphertextBlob [CiphertextType](#ciphertexttype)
  * KeyId [KeyIdType](#keyidtype)
  * SourceKeyId [KeyIdType](#keyidtype)

### RetireGrantRequest
* RetireGrantRequest `object`
  * GrantId [GrantIdType](#grantidtype)
  * GrantToken [GrantTokenType](#granttokentype)
  * KeyId [KeyIdType](#keyidtype)

### RevokeGrantRequest
* RevokeGrantRequest `object`
  * GrantId **required** [GrantIdType](#grantidtype)
  * KeyId **required** [KeyIdType](#keyidtype)

### ScheduleKeyDeletionRequest
* ScheduleKeyDeletionRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * PendingWindowInDays [PendingWindowInDaysType](#pendingwindowindaystype)

### ScheduleKeyDeletionResponse
* ScheduleKeyDeletionResponse `object`
  * DeletionDate [DateType](#datetype)
  * KeyId [KeyIdType](#keyidtype)

### Tag
* Tag `object`: <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
  * TagKey **required** [TagKeyType](#tagkeytype)
  * TagValue **required** [TagValueType](#tagvaluetype)

### TagException
* TagException `object`: The request was rejected because one or more tags are not valid.
  * message [ErrorMessageType](#errormessagetype)

### TagKeyList
* TagKeyList `array`
  * items [TagKeyType](#tagkeytype)

### TagKeyType
* TagKeyType `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * Tags **required** [TagList](#taglist)

### TagValueType
* TagValueType `string`

### UnsupportedOperationException
* UnsupportedOperationException `object`: The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
  * message [ErrorMessageType](#errormessagetype)

### UntagResourceRequest
* UntagResourceRequest `object`
  * KeyId **required** [KeyIdType](#keyidtype)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### UpdateAliasRequest
* UpdateAliasRequest `object`
  * AliasName **required** [AliasNameType](#aliasnametype)
  * TargetKeyId **required** [KeyIdType](#keyidtype)

### UpdateKeyDescriptionRequest
* UpdateKeyDescriptionRequest `object`
  * Description **required** [DescriptionType](#descriptiontype)
  * KeyId **required** [KeyIdType](#keyidtype)

### WrappingKeySpec
* WrappingKeySpec `string` (values: RSA_2048)


