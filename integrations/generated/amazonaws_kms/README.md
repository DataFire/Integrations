# @datafire/amazonaws_kms

Client library for AWS Key Management Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_kms
```

```js
let datafire = require('datafire');
let amazonaws_kms = require('@datafire/amazonaws_kms').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_kms.CancelKeyDeletion({}).then(data => {
  console.log(data);
})
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

#### Parameters
* KeyId (string) **required**

### CreateAlias



```js
amazonaws_kms.CreateAlias({
  "AliasName": "",
  "TargetKeyId": ""
}, context)
```

#### Parameters
* AliasName (string) **required**
* TargetKeyId (string) **required**

### CreateGrant



```js
amazonaws_kms.CreateGrant({
  "KeyId": "",
  "GranteePrincipal": "",
  "Operations": []
}, context)
```

#### Parameters
* Constraints (object) - <p>A structure that you can use to allow certain operations in the grant only when the desired encryption context is present. For more information about encryption context, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html">Encryption Context</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>Grant constraints apply only to operations that accept encryption context as input. For example, the <code> <a>DescribeKey</a> </code> operation does not accept encryption context as input. A grant that allows the <code>DescribeKey</code> operation does so regardless of the grant constraints. In constrast, the <code> <a>Encrypt</a> </code> operation accepts encryption context as input. A grant that allows the <code>Encrypt</code> operation does so only when the encryption context of the <code>Encrypt</code> operation satisfies the grant constraints.</p>
* GrantTokens (array)
* GranteePrincipal (string) **required**
* KeyId (string) **required**
* Name (string)
* Operations (array) **required**
* RetiringPrincipal (string)

### CreateKey



```js
amazonaws_kms.CreateKey({}, context)
```

#### Parameters
* BypassPolicyLockoutSafetyCheck (boolean)
* Description (string)
* KeyUsage (string)
* Origin (string)
* Policy (string)
* Tags (array)

### Decrypt



```js
amazonaws_kms.Decrypt({
  "CiphertextBlob": ""
}, context)
```

#### Parameters
* CiphertextBlob (string) **required**
* EncryptionContext (array)
* GrantTokens (array)

### DeleteAlias



```js
amazonaws_kms.DeleteAlias({
  "AliasName": ""
}, context)
```

#### Parameters
* AliasName (string) **required**

### DeleteImportedKeyMaterial



```js
amazonaws_kms.DeleteImportedKeyMaterial({
  "KeyId": ""
}, context)
```

#### Parameters
* KeyId (string) **required**

### DescribeKey



```js
amazonaws_kms.DescribeKey({
  "KeyId": ""
}, context)
```

#### Parameters
* GrantTokens (array)
* KeyId (string) **required**

### DisableKey



```js
amazonaws_kms.DisableKey({
  "KeyId": ""
}, context)
```

#### Parameters
* KeyId (string) **required**

### DisableKeyRotation



```js
amazonaws_kms.DisableKeyRotation({
  "KeyId": ""
}, context)
```

#### Parameters
* KeyId (string) **required**

### EnableKey



```js
amazonaws_kms.EnableKey({
  "KeyId": ""
}, context)
```

#### Parameters
* KeyId (string) **required**

### EnableKeyRotation



```js
amazonaws_kms.EnableKeyRotation({
  "KeyId": ""
}, context)
```

#### Parameters
* KeyId (string) **required**

### Encrypt



```js
amazonaws_kms.Encrypt({
  "KeyId": "",
  "Plaintext": ""
}, context)
```

#### Parameters
* EncryptionContext (array)
* GrantTokens (array)
* KeyId (string) **required**
* Plaintext (string) **required**

### GenerateDataKey



```js
amazonaws_kms.GenerateDataKey({
  "KeyId": ""
}, context)
```

#### Parameters
* EncryptionContext (array)
* GrantTokens (array)
* KeyId (string) **required**
* KeySpec (string)
* NumberOfBytes (integer)

### GenerateDataKeyWithoutPlaintext



```js
amazonaws_kms.GenerateDataKeyWithoutPlaintext({
  "KeyId": ""
}, context)
```

#### Parameters
* EncryptionContext (array)
* GrantTokens (array)
* KeyId (string) **required**
* KeySpec (string)
* NumberOfBytes (integer)

### GenerateRandom



```js
amazonaws_kms.GenerateRandom({}, context)
```

#### Parameters
* NumberOfBytes (integer)

### GetKeyPolicy



```js
amazonaws_kms.GetKeyPolicy({
  "KeyId": "",
  "PolicyName": ""
}, context)
```

#### Parameters
* KeyId (string) **required**
* PolicyName (string) **required**

### GetKeyRotationStatus



```js
amazonaws_kms.GetKeyRotationStatus({
  "KeyId": ""
}, context)
```

#### Parameters
* KeyId (string) **required**

### GetParametersForImport



```js
amazonaws_kms.GetParametersForImport({
  "KeyId": "",
  "WrappingAlgorithm": "",
  "WrappingKeySpec": ""
}, context)
```

#### Parameters
* KeyId (string) **required**
* WrappingAlgorithm (string) **required**
* WrappingKeySpec (string) **required**

### ImportKeyMaterial



```js
amazonaws_kms.ImportKeyMaterial({
  "KeyId": "",
  "ImportToken": "",
  "EncryptedKeyMaterial": ""
}, context)
```

#### Parameters
* EncryptedKeyMaterial (string) **required**
* ExpirationModel (string)
* ImportToken (string) **required**
* KeyId (string) **required**
* ValidTo (string)

### ListAliases



```js
amazonaws_kms.ListAliases({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* Limit (integer)
* Marker (string)

### ListGrants



```js
amazonaws_kms.ListGrants({
  "KeyId": ""
}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* KeyId (string) **required**
* Limit (integer)
* Marker (string)

### ListKeyPolicies



```js
amazonaws_kms.ListKeyPolicies({
  "KeyId": ""
}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* KeyId (string) **required**
* Limit (integer)
* Marker (string)

### ListKeys



```js
amazonaws_kms.ListKeys({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* Limit (integer)
* Marker (string)

### ListResourceTags



```js
amazonaws_kms.ListResourceTags({
  "KeyId": ""
}, context)
```

#### Parameters
* KeyId (string) **required**
* Limit (integer)
* Marker (string)

### ListRetirableGrants



```js
amazonaws_kms.ListRetirableGrants({
  "RetiringPrincipal": ""
}, context)
```

#### Parameters
* Limit (integer)
* Marker (string)
* RetiringPrincipal (string) **required**

### PutKeyPolicy



```js
amazonaws_kms.PutKeyPolicy({
  "KeyId": "",
  "PolicyName": "",
  "Policy": ""
}, context)
```

#### Parameters
* BypassPolicyLockoutSafetyCheck (boolean)
* KeyId (string) **required**
* Policy (string) **required**
* PolicyName (string) **required**

### ReEncrypt



```js
amazonaws_kms.ReEncrypt({
  "CiphertextBlob": "",
  "DestinationKeyId": ""
}, context)
```

#### Parameters
* CiphertextBlob (string) **required**
* DestinationEncryptionContext (array)
* DestinationKeyId (string) **required**
* GrantTokens (array)
* SourceEncryptionContext (array)

### RetireGrant



```js
amazonaws_kms.RetireGrant({}, context)
```

#### Parameters
* GrantId (string)
* GrantToken (string)
* KeyId (string)

### RevokeGrant



```js
amazonaws_kms.RevokeGrant({
  "KeyId": "",
  "GrantId": ""
}, context)
```

#### Parameters
* GrantId (string) **required**
* KeyId (string) **required**

### ScheduleKeyDeletion



```js
amazonaws_kms.ScheduleKeyDeletion({
  "KeyId": ""
}, context)
```

#### Parameters
* KeyId (string) **required**
* PendingWindowInDays (integer)

### TagResource



```js
amazonaws_kms.TagResource({
  "KeyId": "",
  "Tags": []
}, context)
```

#### Parameters
* KeyId (string) **required**
* Tags (array) **required**

### UntagResource



```js
amazonaws_kms.UntagResource({
  "KeyId": "",
  "TagKeys": []
}, context)
```

#### Parameters
* KeyId (string) **required**
* TagKeys (array) **required**

### UpdateAlias



```js
amazonaws_kms.UpdateAlias({
  "AliasName": "",
  "TargetKeyId": ""
}, context)
```

#### Parameters
* AliasName (string) **required**
* TargetKeyId (string) **required**

### UpdateKeyDescription



```js
amazonaws_kms.UpdateKeyDescription({
  "KeyId": "",
  "Description": ""
}, context)
```

#### Parameters
* Description (string) **required**
* KeyId (string) **required**

