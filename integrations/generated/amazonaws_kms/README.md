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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Key Management Service</fullname> <p>AWS Key Management Service (AWS KMS) is an encryption and key management web service. This guide describes the AWS KMS operations that you can call programmatically. For general information about AWS KMS, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/"> <i>AWS Key Management Service Developer Guide</i> </a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS KMS and other AWS services. For example, the SDKs take care of tasks such as signing requests (see below), managing errors, and retrying requests automatically. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note> <p>We recommend that you use the AWS SDKs to make programmatic API calls to AWS KMS.</p> <p>Clients must support TLS (Transport Layer Security) 1.0. We recommend TLS 1.2. Clients must also support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7 and later support these modes.</p> <p> <b>Signing Requests</b> </p> <p>Requests must be signed by using an access key ID and a secret access key. We strongly recommend that you <i>do not</i> use your AWS account (root) access key ID and secret key for everyday work with AWS KMS. Instead, use the access key ID and secret access key for an IAM user. You can also use the AWS Security Token Service to generate temporary security credentials that you can use to sign requests.</p> <p>All AWS KMS operations require <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> <p> <b>Logging API Requests</b> </p> <p>AWS KMS supports AWS CloudTrail, a service that logs AWS API calls and related events for your AWS account and delivers them to an Amazon S3 bucket that you specify. By using the information collected by CloudTrail, you can determine what requests were made to AWS KMS, who made the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">AWS CloudTrail User Guide</a>.</p> <p> <b>Additional Resources</b> </p> <p>For more information about credentials and request signing, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS Security Credentials</a> - This topic provides general information about the types of credentials used for accessing AWS.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a> - This section of the <i>IAM User Guide</i> describes how to create and use temporary security credentials.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a> - This set of topics walks you through the process of signing a request using an access key ID and a secret access key.</p> </li> </ul> <p> <b>Commonly Used API Operations</b> </p> <p>Of the API operations discussed in this guide, the following will prove the most useful for most applications. You will likely perform operations other than these, such as creating keys and assigning policies, by using the console.</p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>

## Actions

### CancelKeyDeletion



```js
amazonaws_kms.CancelKeyDeletion({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**

#### Output
* output [CancelKeyDeletionResponse](#cancelkeydeletionresponse)

### ConnectCustomKeyStore



```js
amazonaws_kms.ConnectCustomKeyStore({
  "CustomKeyStoreId": null
}, context)
```

#### Input
* input `object`
  * CustomKeyStoreId **required**

#### Output
* output [ConnectCustomKeyStoreResponse](#connectcustomkeystoreresponse)

### CreateAlias



```js
amazonaws_kms.CreateAlias({
  "AliasName": null,
  "TargetKeyId": null
}, context)
```

#### Input
* input `object`
  * AliasName **required**
  * TargetKeyId **required**

#### Output
*Output schema unknown*

### CreateCustomKeyStore



```js
amazonaws_kms.CreateCustomKeyStore({
  "CustomKeyStoreName": null,
  "CloudHsmClusterId": null,
  "TrustAnchorCertificate": null,
  "KeyStorePassword": null
}, context)
```

#### Input
* input `object`
  * CloudHsmClusterId **required**
  * CustomKeyStoreName **required**
  * KeyStorePassword **required**
  * TrustAnchorCertificate **required**

#### Output
* output [CreateCustomKeyStoreResponse](#createcustomkeystoreresponse)

### CreateGrant



```js
amazonaws_kms.CreateGrant({
  "KeyId": null,
  "GranteePrincipal": null,
  "Operations": null
}, context)
```

#### Input
* input `object`
  * Constraints
    * EncryptionContextEquals
    * EncryptionContextSubset
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * GranteePrincipal **required**
  * KeyId **required**
  * Name
  * Operations **required**
    * items [GrantOperation](#grantoperation)
  * RetiringPrincipal

#### Output
* output [CreateGrantResponse](#creategrantresponse)

### CreateKey



```js
amazonaws_kms.CreateKey({}, context)
```

#### Input
* input `object`
  * BypassPolicyLockoutSafetyCheck
  * CustomKeyStoreId
  * CustomerMasterKeySpec
  * Description
  * KeyUsage
  * Origin
  * Policy
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateKeyResponse](#createkeyresponse)

### Decrypt



```js
amazonaws_kms.Decrypt({
  "CiphertextBlob": null
}, context)
```

#### Input
* input `object`
  * CiphertextBlob **required**
  * EncryptionAlgorithm
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId

#### Output
* output [DecryptResponse](#decryptresponse)

### DeleteAlias



```js
amazonaws_kms.DeleteAlias({
  "AliasName": null
}, context)
```

#### Input
* input `object`
  * AliasName **required**

#### Output
*Output schema unknown*

### DeleteCustomKeyStore



```js
amazonaws_kms.DeleteCustomKeyStore({
  "CustomKeyStoreId": null
}, context)
```

#### Input
* input `object`
  * CustomKeyStoreId **required**

#### Output
* output [DeleteCustomKeyStoreResponse](#deletecustomkeystoreresponse)

### DeleteImportedKeyMaterial



```js
amazonaws_kms.DeleteImportedKeyMaterial({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**

#### Output
*Output schema unknown*

### DescribeCustomKeyStores



```js
amazonaws_kms.DescribeCustomKeyStores({}, context)
```

#### Input
* input `object`
  * CustomKeyStoreId
  * CustomKeyStoreName
  * Limit
  * Marker

#### Output
* output [DescribeCustomKeyStoresResponse](#describecustomkeystoresresponse)

### DescribeKey



```js
amazonaws_kms.DescribeKey({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**

#### Output
* output [DescribeKeyResponse](#describekeyresponse)

### DisableKey



```js
amazonaws_kms.DisableKey({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**

#### Output
*Output schema unknown*

### DisableKeyRotation



```js
amazonaws_kms.DisableKeyRotation({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**

#### Output
*Output schema unknown*

### DisconnectCustomKeyStore



```js
amazonaws_kms.DisconnectCustomKeyStore({
  "CustomKeyStoreId": null
}, context)
```

#### Input
* input `object`
  * CustomKeyStoreId **required**

#### Output
* output [DisconnectCustomKeyStoreResponse](#disconnectcustomkeystoreresponse)

### EnableKey



```js
amazonaws_kms.EnableKey({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**

#### Output
*Output schema unknown*

### EnableKeyRotation



```js
amazonaws_kms.EnableKeyRotation({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**

#### Output
*Output schema unknown*

### Encrypt



```js
amazonaws_kms.Encrypt({
  "KeyId": null,
  "Plaintext": null
}, context)
```

#### Input
* input `object`
  * EncryptionAlgorithm
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * Plaintext **required**

#### Output
* output [EncryptResponse](#encryptresponse)

### GenerateDataKey



```js
amazonaws_kms.GenerateDataKey({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * KeySpec
  * NumberOfBytes

#### Output
* output [GenerateDataKeyResponse](#generatedatakeyresponse)

### GenerateDataKeyPair



```js
amazonaws_kms.GenerateDataKeyPair({
  "KeyId": null,
  "KeyPairSpec": null
}, context)
```

#### Input
* input `object`
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * KeyPairSpec **required**

#### Output
* output [GenerateDataKeyPairResponse](#generatedatakeypairresponse)

### GenerateDataKeyPairWithoutPlaintext



```js
amazonaws_kms.GenerateDataKeyPairWithoutPlaintext({
  "KeyId": null,
  "KeyPairSpec": null
}, context)
```

#### Input
* input `object`
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * KeyPairSpec **required**

#### Output
* output [GenerateDataKeyPairWithoutPlaintextResponse](#generatedatakeypairwithoutplaintextresponse)

### GenerateDataKeyWithoutPlaintext



```js
amazonaws_kms.GenerateDataKeyWithoutPlaintext({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * KeySpec
  * NumberOfBytes

#### Output
* output [GenerateDataKeyWithoutPlaintextResponse](#generatedatakeywithoutplaintextresponse)

### GenerateRandom



```js
amazonaws_kms.GenerateRandom({}, context)
```

#### Input
* input `object`
  * CustomKeyStoreId
  * NumberOfBytes

#### Output
* output [GenerateRandomResponse](#generaterandomresponse)

### GetKeyPolicy



```js
amazonaws_kms.GetKeyPolicy({
  "KeyId": null,
  "PolicyName": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**
  * PolicyName **required**

#### Output
* output [GetKeyPolicyResponse](#getkeypolicyresponse)

### GetKeyRotationStatus



```js
amazonaws_kms.GetKeyRotationStatus({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**

#### Output
* output [GetKeyRotationStatusResponse](#getkeyrotationstatusresponse)

### GetParametersForImport



```js
amazonaws_kms.GetParametersForImport({
  "KeyId": null,
  "WrappingAlgorithm": null,
  "WrappingKeySpec": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**
  * WrappingAlgorithm **required**
  * WrappingKeySpec **required**

#### Output
* output [GetParametersForImportResponse](#getparametersforimportresponse)

### GetPublicKey



```js
amazonaws_kms.GetPublicKey({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**

#### Output
* output [GetPublicKeyResponse](#getpublickeyresponse)

### ImportKeyMaterial



```js
amazonaws_kms.ImportKeyMaterial({
  "KeyId": null,
  "ImportToken": null,
  "EncryptedKeyMaterial": null
}, context)
```

#### Input
* input `object`
  * EncryptedKeyMaterial **required**
  * ExpirationModel
  * ImportToken **required**
  * KeyId **required**
  * ValidTo

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
  * KeyId
  * Limit
  * Marker

#### Output
* output [ListAliasesResponse](#listaliasesresponse)

### ListGrants



```js
amazonaws_kms.ListGrants({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * KeyId **required**
  * Limit
  * Marker

#### Output
* output [ListGrantsResponse](#listgrantsresponse)

### ListKeyPolicies



```js
amazonaws_kms.ListKeyPolicies({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * KeyId **required**
  * Limit
  * Marker

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
  * Limit
  * Marker

#### Output
* output [ListKeysResponse](#listkeysresponse)

### ListResourceTags



```js
amazonaws_kms.ListResourceTags({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**
  * Limit
  * Marker

#### Output
* output [ListResourceTagsResponse](#listresourcetagsresponse)

### ListRetirableGrants



```js
amazonaws_kms.ListRetirableGrants({
  "RetiringPrincipal": null
}, context)
```

#### Input
* input `object`
  * Limit
  * Marker
  * RetiringPrincipal **required**

#### Output
* output [ListGrantsResponse](#listgrantsresponse)

### PutKeyPolicy



```js
amazonaws_kms.PutKeyPolicy({
  "KeyId": null,
  "PolicyName": null,
  "Policy": null
}, context)
```

#### Input
* input `object`
  * BypassPolicyLockoutSafetyCheck
  * KeyId **required**
  * Policy **required**
  * PolicyName **required**

#### Output
*Output schema unknown*

### ReEncrypt



```js
amazonaws_kms.ReEncrypt({
  "CiphertextBlob": null,
  "DestinationKeyId": null
}, context)
```

#### Input
* input `object`
  * CiphertextBlob **required**
  * DestinationEncryptionAlgorithm
  * DestinationEncryptionContext
  * DestinationKeyId **required**
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * SourceEncryptionAlgorithm
  * SourceEncryptionContext
  * SourceKeyId

#### Output
* output [ReEncryptResponse](#reencryptresponse)

### RetireGrant



```js
amazonaws_kms.RetireGrant({}, context)
```

#### Input
* input `object`
  * GrantId
  * GrantToken
  * KeyId

#### Output
*Output schema unknown*

### RevokeGrant



```js
amazonaws_kms.RevokeGrant({
  "KeyId": null,
  "GrantId": null
}, context)
```

#### Input
* input `object`
  * GrantId **required**
  * KeyId **required**

#### Output
*Output schema unknown*

### ScheduleKeyDeletion



```js
amazonaws_kms.ScheduleKeyDeletion({
  "KeyId": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**
  * PendingWindowInDays

#### Output
* output [ScheduleKeyDeletionResponse](#schedulekeydeletionresponse)

### Sign



```js
amazonaws_kms.Sign({
  "KeyId": null,
  "Message": null,
  "SigningAlgorithm": null
}, context)
```

#### Input
* input `object`
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * Message **required**
  * MessageType
  * SigningAlgorithm **required**

#### Output
* output [SignResponse](#signresponse)

### TagResource



```js
amazonaws_kms.TagResource({
  "KeyId": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_kms.UntagResource({
  "KeyId": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * KeyId **required**
  * TagKeys **required**
    * items [TagKeyType](#tagkeytype)

#### Output
*Output schema unknown*

### UpdateAlias



```js
amazonaws_kms.UpdateAlias({
  "AliasName": null,
  "TargetKeyId": null
}, context)
```

#### Input
* input `object`
  * AliasName **required**
  * TargetKeyId **required**

#### Output
*Output schema unknown*

### UpdateCustomKeyStore



```js
amazonaws_kms.UpdateCustomKeyStore({
  "CustomKeyStoreId": null
}, context)
```

#### Input
* input `object`
  * CloudHsmClusterId
  * CustomKeyStoreId **required**
  * KeyStorePassword
  * NewCustomKeyStoreName

#### Output
* output [UpdateCustomKeyStoreResponse](#updatecustomkeystoreresponse)

### UpdateKeyDescription



```js
amazonaws_kms.UpdateKeyDescription({
  "KeyId": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * Description **required**
  * KeyId **required**

#### Output
*Output schema unknown*

### Verify



```js
amazonaws_kms.Verify({
  "KeyId": null,
  "Message": null,
  "Signature": null,
  "SigningAlgorithm": null
}, context)
```

#### Input
* input `object`
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * Message **required**
  * MessageType
  * Signature **required**
  * SigningAlgorithm **required**

#### Output
* output [VerifyResponse](#verifyresponse)



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
  * AliasArn
  * AliasName
  * CreationDate
  * LastUpdatedDate
  * TargetKeyId

### AliasNameType
* AliasNameType `string`

### AlreadyExistsException


### ArnType
* ArnType `string`

### BooleanType
* BooleanType `boolean`

### CancelKeyDeletionRequest
* CancelKeyDeletionRequest `object`
  * KeyId **required**

### CancelKeyDeletionResponse
* CancelKeyDeletionResponse `object`
  * KeyId

### CiphertextType
* CiphertextType `string`

### CloudHsmClusterIdType
* CloudHsmClusterIdType `string`

### CloudHsmClusterInUseException


### CloudHsmClusterInvalidConfigurationException


### CloudHsmClusterNotActiveException


### CloudHsmClusterNotFoundException


### CloudHsmClusterNotRelatedException


### ConnectCustomKeyStoreRequest
* ConnectCustomKeyStoreRequest `object`
  * CustomKeyStoreId **required**

### ConnectCustomKeyStoreResponse
* ConnectCustomKeyStoreResponse `object`

### ConnectionErrorCodeType
* ConnectionErrorCodeType `string` (values: INVALID_CREDENTIALS, CLUSTER_NOT_FOUND, NETWORK_ERRORS, INTERNAL_ERROR, INSUFFICIENT_CLOUDHSM_HSMS, USER_LOCKED_OUT, USER_NOT_FOUND, USER_LOGGED_IN, SUBNET_NOT_FOUND)

### ConnectionStateType
* ConnectionStateType `string` (values: CONNECTED, CONNECTING, FAILED, DISCONNECTED, DISCONNECTING)

### CreateAliasRequest
* CreateAliasRequest `object`
  * AliasName **required**
  * TargetKeyId **required**

### CreateCustomKeyStoreRequest
* CreateCustomKeyStoreRequest `object`
  * CloudHsmClusterId **required**
  * CustomKeyStoreName **required**
  * KeyStorePassword **required**
  * TrustAnchorCertificate **required**

### CreateCustomKeyStoreResponse
* CreateCustomKeyStoreResponse `object`
  * CustomKeyStoreId

### CreateGrantRequest
* CreateGrantRequest `object`
  * Constraints
    * EncryptionContextEquals
    * EncryptionContextSubset
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * GranteePrincipal **required**
  * KeyId **required**
  * Name
  * Operations **required**
    * items [GrantOperation](#grantoperation)
  * RetiringPrincipal

### CreateGrantResponse
* CreateGrantResponse `object`
  * GrantId
  * GrantToken

### CreateKeyRequest
* CreateKeyRequest `object`
  * BypassPolicyLockoutSafetyCheck
  * CustomKeyStoreId
  * CustomerMasterKeySpec
  * Description
  * KeyUsage
  * Origin
  * Policy
  * Tags
    * items [Tag](#tag)

### CreateKeyResponse
* CreateKeyResponse `object`
  * KeyMetadata
    * AWSAccountId
    * Arn
    * CloudHsmClusterId
    * CreationDate
    * CustomKeyStoreId
    * CustomerMasterKeySpec
    * DeletionDate
    * Description
    * Enabled
    * EncryptionAlgorithms
      * items [EncryptionAlgorithmSpec](#encryptionalgorithmspec)
    * ExpirationModel
    * KeyId **required**
    * KeyManager
    * KeyState
    * KeyUsage
    * Origin
    * SigningAlgorithms
      * items [SigningAlgorithmSpec](#signingalgorithmspec)
    * ValidTo

### CustomKeyStoreHasCMKsException


### CustomKeyStoreIdType
* CustomKeyStoreIdType `string`

### CustomKeyStoreInvalidStateException


### CustomKeyStoreNameInUseException


### CustomKeyStoreNameType
* CustomKeyStoreNameType `string`

### CustomKeyStoreNotFoundException


### CustomKeyStoresList
* CustomKeyStoresList `array`
  * items [CustomKeyStoresListEntry](#customkeystoreslistentry)

### CustomKeyStoresListEntry
* CustomKeyStoresListEntry `object`: Contains information about each custom key store in the custom key store list.
  * CloudHsmClusterId
  * ConnectionErrorCode
  * ConnectionState
  * CreationDate
  * CustomKeyStoreId
  * CustomKeyStoreName
  * TrustAnchorCertificate

### CustomerMasterKeySpec
* CustomerMasterKeySpec `string` (values: RSA_2048, RSA_3072, RSA_4096, ECC_NIST_P256, ECC_NIST_P384, ECC_NIST_P521, ECC_SECG_P256K1, SYMMETRIC_DEFAULT)

### DataKeyPairSpec
* DataKeyPairSpec `string` (values: RSA_2048, RSA_3072, RSA_4096, ECC_NIST_P256, ECC_NIST_P384, ECC_NIST_P521, ECC_SECG_P256K1)

### DataKeySpec
* DataKeySpec `string` (values: AES_256, AES_128)

### DateType
* DateType `string`

### DecryptRequest
* DecryptRequest `object`
  * CiphertextBlob **required**
  * EncryptionAlgorithm
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId

### DecryptResponse
* DecryptResponse `object`
  * EncryptionAlgorithm
  * KeyId
  * Plaintext

### DeleteAliasRequest
* DeleteAliasRequest `object`
  * AliasName **required**

### DeleteCustomKeyStoreRequest
* DeleteCustomKeyStoreRequest `object`
  * CustomKeyStoreId **required**

### DeleteCustomKeyStoreResponse
* DeleteCustomKeyStoreResponse `object`

### DeleteImportedKeyMaterialRequest
* DeleteImportedKeyMaterialRequest `object`
  * KeyId **required**

### DependencyTimeoutException


### DescribeCustomKeyStoresRequest
* DescribeCustomKeyStoresRequest `object`
  * CustomKeyStoreId
  * CustomKeyStoreName
  * Limit
  * Marker

### DescribeCustomKeyStoresResponse
* DescribeCustomKeyStoresResponse `object`
  * CustomKeyStores
    * items [CustomKeyStoresListEntry](#customkeystoreslistentry)
  * NextMarker
  * Truncated

### DescribeKeyRequest
* DescribeKeyRequest `object`
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**

### DescribeKeyResponse
* DescribeKeyResponse `object`
  * KeyMetadata
    * AWSAccountId
    * Arn
    * CloudHsmClusterId
    * CreationDate
    * CustomKeyStoreId
    * CustomerMasterKeySpec
    * DeletionDate
    * Description
    * Enabled
    * EncryptionAlgorithms
      * items [EncryptionAlgorithmSpec](#encryptionalgorithmspec)
    * ExpirationModel
    * KeyId **required**
    * KeyManager
    * KeyState
    * KeyUsage
    * Origin
    * SigningAlgorithms
      * items [SigningAlgorithmSpec](#signingalgorithmspec)
    * ValidTo

### DescriptionType
* DescriptionType `string`

### DisableKeyRequest
* DisableKeyRequest `object`
  * KeyId **required**

### DisableKeyRotationRequest
* DisableKeyRotationRequest `object`
  * KeyId **required**

### DisabledException


### DisconnectCustomKeyStoreRequest
* DisconnectCustomKeyStoreRequest `object`
  * CustomKeyStoreId **required**

### DisconnectCustomKeyStoreResponse
* DisconnectCustomKeyStoreResponse `object`

### EnableKeyRequest
* EnableKeyRequest `object`
  * KeyId **required**

### EnableKeyRotationRequest
* EnableKeyRotationRequest `object`
  * KeyId **required**

### EncryptRequest
* EncryptRequest `object`
  * EncryptionAlgorithm
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * Plaintext **required**

### EncryptResponse
* EncryptResponse `object`
  * CiphertextBlob
  * EncryptionAlgorithm
  * KeyId

### EncryptionAlgorithmSpec
* EncryptionAlgorithmSpec `string` (values: SYMMETRIC_DEFAULT, RSAES_OAEP_SHA_1, RSAES_OAEP_SHA_256)

### EncryptionAlgorithmSpecList
* EncryptionAlgorithmSpecList `array`
  * items [EncryptionAlgorithmSpec](#encryptionalgorithmspec)

### EncryptionContextKey
* EncryptionContextKey `string`

### EncryptionContextType
* EncryptionContextType `object`

### EncryptionContextValue
* EncryptionContextValue `string`

### ExpirationModelType
* ExpirationModelType `string` (values: KEY_MATERIAL_EXPIRES, KEY_MATERIAL_DOES_NOT_EXPIRE)

### ExpiredImportTokenException


### GenerateDataKeyPairRequest
* GenerateDataKeyPairRequest `object`
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * KeyPairSpec **required**

### GenerateDataKeyPairResponse
* GenerateDataKeyPairResponse `object`
  * KeyId
  * KeyPairSpec
  * PrivateKeyCiphertextBlob
  * PrivateKeyPlaintext
  * PublicKey

### GenerateDataKeyPairWithoutPlaintextRequest
* GenerateDataKeyPairWithoutPlaintextRequest `object`
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * KeyPairSpec **required**

### GenerateDataKeyPairWithoutPlaintextResponse
* GenerateDataKeyPairWithoutPlaintextResponse `object`
  * KeyId
  * KeyPairSpec
  * PrivateKeyCiphertextBlob
  * PublicKey

### GenerateDataKeyRequest
* GenerateDataKeyRequest `object`
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * KeySpec
  * NumberOfBytes

### GenerateDataKeyResponse
* GenerateDataKeyResponse `object`
  * CiphertextBlob
  * KeyId
  * Plaintext

### GenerateDataKeyWithoutPlaintextRequest
* GenerateDataKeyWithoutPlaintextRequest `object`
  * EncryptionContext
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * KeySpec
  * NumberOfBytes

### GenerateDataKeyWithoutPlaintextResponse
* GenerateDataKeyWithoutPlaintextResponse `object`
  * CiphertextBlob
  * KeyId

### GenerateRandomRequest
* GenerateRandomRequest `object`
  * CustomKeyStoreId
  * NumberOfBytes

### GenerateRandomResponse
* GenerateRandomResponse `object`
  * Plaintext

### GetKeyPolicyRequest
* GetKeyPolicyRequest `object`
  * KeyId **required**
  * PolicyName **required**

### GetKeyPolicyResponse
* GetKeyPolicyResponse `object`
  * Policy

### GetKeyRotationStatusRequest
* GetKeyRotationStatusRequest `object`
  * KeyId **required**

### GetKeyRotationStatusResponse
* GetKeyRotationStatusResponse `object`
  * KeyRotationEnabled

### GetParametersForImportRequest
* GetParametersForImportRequest `object`
  * KeyId **required**
  * WrappingAlgorithm **required**
  * WrappingKeySpec **required**

### GetParametersForImportResponse
* GetParametersForImportResponse `object`
  * ImportToken
  * KeyId
  * ParametersValidTo
  * PublicKey

### GetPublicKeyRequest
* GetPublicKeyRequest `object`
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**

### GetPublicKeyResponse
* GetPublicKeyResponse `object`
  * CustomerMasterKeySpec
  * EncryptionAlgorithms
    * items [EncryptionAlgorithmSpec](#encryptionalgorithmspec)
  * KeyId
  * KeyUsage
  * PublicKey
  * SigningAlgorithms
    * items [SigningAlgorithmSpec](#signingalgorithmspec)

### GrantConstraints
* GrantConstraints `object`: <p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p> <p>AWS KMS applies the grant constraints only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric CMK</a>. Grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric CMKs and management operations, such as <a>DescribeKey</a> or <a>RetireGrant</a>.</p> <important> <p>In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.</p> <p>However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.</p> <p>To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> </important>
  * EncryptionContextEquals
  * EncryptionContextSubset

### GrantIdType
* GrantIdType `string`

### GrantList
* GrantList `array`
  * items [GrantListEntry](#grantlistentry)

### GrantListEntry
* GrantListEntry `object`: Contains information about a grant.
  * Constraints
    * EncryptionContextEquals
    * EncryptionContextSubset
  * CreationDate
  * GrantId
  * GranteePrincipal
  * IssuingAccount
  * KeyId
  * Name
  * Operations
    * items [GrantOperation](#grantoperation)
  * RetiringPrincipal

### GrantNameType
* GrantNameType `string`

### GrantOperation
* GrantOperation `string` (values: Decrypt, Encrypt, GenerateDataKey, GenerateDataKeyWithoutPlaintext, ReEncryptFrom, ReEncryptTo, Sign, Verify, GetPublicKey, CreateGrant, RetireGrant, DescribeKey, GenerateDataKeyPair, GenerateDataKeyPairWithoutPlaintext)

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
  * EncryptedKeyMaterial **required**
  * ExpirationModel
  * ImportToken **required**
  * KeyId **required**
  * ValidTo

### ImportKeyMaterialResponse
* ImportKeyMaterialResponse `object`

### IncorrectKeyException


### IncorrectKeyMaterialException


### IncorrectTrustAnchorException


### InvalidAliasNameException


### InvalidArnException


### InvalidCiphertextException


### InvalidGrantIdException


### InvalidGrantTokenException


### InvalidImportTokenException


### InvalidKeyUsageException


### InvalidMarkerException


### KMSInternalException


### KMSInvalidSignatureException


### KMSInvalidStateException


### KeyIdType
* KeyIdType `string`

### KeyList
* KeyList `array`
  * items [KeyListEntry](#keylistentry)

### KeyListEntry
* KeyListEntry `object`: Contains information about each entry in the key list.
  * KeyArn
  * KeyId

### KeyManagerType
* KeyManagerType `string` (values: AWS, CUSTOMER)

### KeyMetadata
* KeyMetadata `object`: <p>Contains metadata about a customer master key (CMK).</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
  * AWSAccountId
  * Arn
  * CloudHsmClusterId
  * CreationDate
  * CustomKeyStoreId
  * CustomerMasterKeySpec
  * DeletionDate
  * Description
  * Enabled
  * EncryptionAlgorithms
    * items [EncryptionAlgorithmSpec](#encryptionalgorithmspec)
  * ExpirationModel
  * KeyId **required**
  * KeyManager
  * KeyState
  * KeyUsage
  * Origin
  * SigningAlgorithms
    * items [SigningAlgorithmSpec](#signingalgorithmspec)
  * ValidTo

### KeyState
* KeyState `string` (values: Enabled, Disabled, PendingDeletion, PendingImport, Unavailable)

### KeyStorePasswordType
* KeyStorePasswordType `string`

### KeyUnavailableException


### KeyUsageType
* KeyUsageType `string` (values: SIGN_VERIFY, ENCRYPT_DECRYPT)

### LimitExceededException


### LimitType
* LimitType `integer`

### ListAliasesRequest
* ListAliasesRequest `object`
  * KeyId
  * Limit
  * Marker

### ListAliasesResponse
* ListAliasesResponse `object`
  * Aliases
    * items [AliasListEntry](#aliaslistentry)
  * NextMarker
  * Truncated

### ListGrantsRequest
* ListGrantsRequest `object`
  * KeyId **required**
  * Limit
  * Marker

### ListGrantsResponse
* ListGrantsResponse `object`
  * Grants
    * items [GrantListEntry](#grantlistentry)
  * NextMarker
  * Truncated

### ListKeyPoliciesRequest
* ListKeyPoliciesRequest `object`
  * KeyId **required**
  * Limit
  * Marker

### ListKeyPoliciesResponse
* ListKeyPoliciesResponse `object`
  * NextMarker
  * PolicyNames
    * items [PolicyNameType](#policynametype)
  * Truncated

### ListKeysRequest
* ListKeysRequest `object`
  * Limit
  * Marker

### ListKeysResponse
* ListKeysResponse `object`
  * Keys
    * items [KeyListEntry](#keylistentry)
  * NextMarker
  * Truncated

### ListResourceTagsRequest
* ListResourceTagsRequest `object`
  * KeyId **required**
  * Limit
  * Marker

### ListResourceTagsResponse
* ListResourceTagsResponse `object`
  * NextMarker
  * Tags
    * items [Tag](#tag)
  * Truncated

### ListRetirableGrantsRequest
* ListRetirableGrantsRequest `object`
  * Limit
  * Marker
  * RetiringPrincipal **required**

### MalformedPolicyDocumentException


### MarkerType
* MarkerType `string`

### MessageType
* MessageType `string` (values: RAW, DIGEST)

### NotFoundException


### NumberOfBytesType
* NumberOfBytesType `integer`

### OriginType
* OriginType `string` (values: AWS_KMS, EXTERNAL, AWS_CLOUDHSM)

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

### PublicKeyType
* PublicKeyType `string`

### PutKeyPolicyRequest
* PutKeyPolicyRequest `object`
  * BypassPolicyLockoutSafetyCheck
  * KeyId **required**
  * Policy **required**
  * PolicyName **required**

### ReEncryptRequest
* ReEncryptRequest `object`
  * CiphertextBlob **required**
  * DestinationEncryptionAlgorithm
  * DestinationEncryptionContext
  * DestinationKeyId **required**
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * SourceEncryptionAlgorithm
  * SourceEncryptionContext
  * SourceKeyId

### ReEncryptResponse
* ReEncryptResponse `object`
  * CiphertextBlob
  * DestinationEncryptionAlgorithm
  * KeyId
  * SourceEncryptionAlgorithm
  * SourceKeyId

### RetireGrantRequest
* RetireGrantRequest `object`
  * GrantId
  * GrantToken
  * KeyId

### RevokeGrantRequest
* RevokeGrantRequest `object`
  * GrantId **required**
  * KeyId **required**

### ScheduleKeyDeletionRequest
* ScheduleKeyDeletionRequest `object`
  * KeyId **required**
  * PendingWindowInDays

### ScheduleKeyDeletionResponse
* ScheduleKeyDeletionResponse `object`
  * DeletionDate
  * KeyId

### SignRequest
* SignRequest `object`
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * Message **required**
  * MessageType
  * SigningAlgorithm **required**

### SignResponse
* SignResponse `object`
  * KeyId
  * Signature
  * SigningAlgorithm

### SigningAlgorithmSpec
* SigningAlgorithmSpec `string` (values: RSASSA_PSS_SHA_256, RSASSA_PSS_SHA_384, RSASSA_PSS_SHA_512, RSASSA_PKCS1_V1_5_SHA_256, RSASSA_PKCS1_V1_5_SHA_384, RSASSA_PKCS1_V1_5_SHA_512, ECDSA_SHA_256, ECDSA_SHA_384, ECDSA_SHA_512)

### SigningAlgorithmSpecList
* SigningAlgorithmSpecList `array`
  * items [SigningAlgorithmSpec](#signingalgorithmspec)

### Tag
* Tag `object`: <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
  * TagKey **required**
  * TagValue **required**

### TagException


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
  * KeyId **required**
  * Tags **required**
    * items [Tag](#tag)

### TagValueType
* TagValueType `string`

### TrustAnchorCertificateType
* TrustAnchorCertificateType `string`

### UnsupportedOperationException


### UntagResourceRequest
* UntagResourceRequest `object`
  * KeyId **required**
  * TagKeys **required**
    * items [TagKeyType](#tagkeytype)

### UpdateAliasRequest
* UpdateAliasRequest `object`
  * AliasName **required**
  * TargetKeyId **required**

### UpdateCustomKeyStoreRequest
* UpdateCustomKeyStoreRequest `object`
  * CloudHsmClusterId
  * CustomKeyStoreId **required**
  * KeyStorePassword
  * NewCustomKeyStoreName

### UpdateCustomKeyStoreResponse
* UpdateCustomKeyStoreResponse `object`

### UpdateKeyDescriptionRequest
* UpdateKeyDescriptionRequest `object`
  * Description **required**
  * KeyId **required**

### VerifyRequest
* VerifyRequest `object`
  * GrantTokens
    * items [GrantTokenType](#granttokentype)
  * KeyId **required**
  * Message **required**
  * MessageType
  * Signature **required**
  * SigningAlgorithm **required**

### VerifyResponse
* VerifyResponse `object`
  * KeyId
  * SignatureValid
  * SigningAlgorithm

### WrappingKeySpec
* WrappingKeySpec `string` (values: RSA_2048)


