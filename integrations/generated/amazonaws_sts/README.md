# @datafire/amazonaws_sts

Client library for AWS Security Token Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sts
```
```js
let amazonaws_sts = require('@datafire/amazonaws_sts').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Security Token Service</fullname> <p>AWS Security Token Service (STS) enables you to request temporary, limited-privilege credentials for AWS Identity and Access Management (IAM) users or for users that you authenticate (federated users). This guide provides descriptions of the STS API. For more information about using this service, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a>.</p>

## Actions

### AssumeRole



```js
amazonaws_sts.AssumeRole({
  "RoleArn": "",
  "RoleSessionName": ""
}, context)
```

#### Input
* input `object`
  * RoleArn **required** `string`
  * RoleSessionName **required** `string`
  * PolicyArns `array`
  * Policy `string`
  * DurationSeconds `integer`
  * Tags `array`
  * TransitiveTagKeys `array`
  * ExternalId `string`
  * SerialNumber `string`
  * TokenCode `string`

#### Output
* output [AssumeRoleResponse](#assumeroleresponse)

### AssumeRole



```js
amazonaws_sts.AssumeRole({
  "RoleArn": null,
  "RoleSessionName": null
}, context)
```

#### Input
* input `object`
  * DurationSeconds
  * ExternalId
  * Policy
  * PolicyArns
    * items [PolicyDescriptorType](#policydescriptortype)
  * RoleArn **required**
  * RoleSessionName **required**
  * SerialNumber
  * Tags
    * items [Tag](#tag)
  * TokenCode
  * TransitiveTagKeys
    * items [tagKeyType](#tagkeytype)

#### Output
* output [AssumeRoleResponse](#assumeroleresponse)

### AssumeRoleWithSAML



```js
amazonaws_sts.AssumeRoleWithSAML({
  "RoleArn": "",
  "PrincipalArn": "",
  "SAMLAssertion": ""
}, context)
```

#### Input
* input `object`
  * RoleArn **required** `string`
  * PrincipalArn **required** `string`
  * SAMLAssertion **required** `string`
  * PolicyArns `array`
  * Policy `string`
  * DurationSeconds `integer`

#### Output
* output [AssumeRoleWithSAMLResponse](#assumerolewithsamlresponse)

### AssumeRoleWithSAML



```js
amazonaws_sts.AssumeRoleWithSAML({
  "RoleArn": null,
  "PrincipalArn": null,
  "SAMLAssertion": null
}, context)
```

#### Input
* input `object`
  * DurationSeconds
  * Policy
  * PolicyArns
    * items [PolicyDescriptorType](#policydescriptortype)
  * PrincipalArn **required**
  * RoleArn **required**
  * SAMLAssertion **required**

#### Output
* output [AssumeRoleWithSAMLResponse](#assumerolewithsamlresponse)

### AssumeRoleWithWebIdentity



```js
amazonaws_sts.AssumeRoleWithWebIdentity({
  "RoleArn": "",
  "RoleSessionName": "",
  "WebIdentityToken": ""
}, context)
```

#### Input
* input `object`
  * RoleArn **required** `string`
  * RoleSessionName **required** `string`
  * WebIdentityToken **required** `string`
  * ProviderId `string`
  * PolicyArns `array`
  * Policy `string`
  * DurationSeconds `integer`

#### Output
* output [AssumeRoleWithWebIdentityResponse](#assumerolewithwebidentityresponse)

### AssumeRoleWithWebIdentity



```js
amazonaws_sts.AssumeRoleWithWebIdentity({
  "RoleArn": null,
  "RoleSessionName": null,
  "WebIdentityToken": null
}, context)
```

#### Input
* input `object`
  * DurationSeconds
  * Policy
  * PolicyArns
    * items [PolicyDescriptorType](#policydescriptortype)
  * ProviderId
  * RoleArn **required**
  * RoleSessionName **required**
  * WebIdentityToken **required**

#### Output
* output [AssumeRoleWithWebIdentityResponse](#assumerolewithwebidentityresponse)

### DecodeAuthorizationMessage



```js
amazonaws_sts.DecodeAuthorizationMessage({
  "EncodedMessage": ""
}, context)
```

#### Input
* input `object`
  * EncodedMessage **required** `string`

#### Output
* output [DecodeAuthorizationMessageResponse](#decodeauthorizationmessageresponse)

### DecodeAuthorizationMessage



```js
amazonaws_sts.DecodeAuthorizationMessage({
  "EncodedMessage": null
}, context)
```

#### Input
* input `object`
  * EncodedMessage **required**

#### Output
* output [DecodeAuthorizationMessageResponse](#decodeauthorizationmessageresponse)

### GetAccessKeyInfo



```js
amazonaws_sts.GetAccessKeyInfo({
  "AccessKeyId": ""
}, context)
```

#### Input
* input `object`
  * AccessKeyId **required** `string`

#### Output
* output [GetAccessKeyInfoResponse](#getaccesskeyinforesponse)

### GetAccessKeyInfo



```js
amazonaws_sts.GetAccessKeyInfo({
  "AccessKeyId": null
}, context)
```

#### Input
* input `object`
  * AccessKeyId **required**

#### Output
* output [GetAccessKeyInfoResponse](#getaccesskeyinforesponse)

### GetCallerIdentity



```js
amazonaws_sts.GetCallerIdentity({}, context)
```

#### Input
* input `object`

#### Output
* output [GetCallerIdentityResponse](#getcalleridentityresponse)

### GetCallerIdentity



```js
amazonaws_sts.GetCallerIdentity({}, context)
```

#### Input
* input `object`

#### Output
* output [GetCallerIdentityResponse](#getcalleridentityresponse)

### GetFederationToken



```js
amazonaws_sts.GetFederationToken({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`
  * Policy `string`
  * PolicyArns `array`
  * DurationSeconds `integer`
  * Tags `array`

#### Output
* output [GetFederationTokenResponse](#getfederationtokenresponse)

### GetFederationToken



```js
amazonaws_sts.GetFederationToken({
  "Name": null
}, context)
```

#### Input
* input `object`
  * DurationSeconds
  * Name **required**
  * Policy
  * PolicyArns
    * items [PolicyDescriptorType](#policydescriptortype)
  * Tags
    * items [Tag](#tag)

#### Output
* output [GetFederationTokenResponse](#getfederationtokenresponse)

### GetSessionToken



```js
amazonaws_sts.GetSessionToken({}, context)
```

#### Input
* input `object`
  * DurationSeconds `integer`
  * SerialNumber `string`
  * TokenCode `string`

#### Output
* output [GetSessionTokenResponse](#getsessiontokenresponse)

### GetSessionToken



```js
amazonaws_sts.GetSessionToken({}, context)
```

#### Input
* input `object`
  * DurationSeconds
  * SerialNumber
  * TokenCode

#### Output
* output [GetSessionTokenResponse](#getsessiontokenresponse)



## Definitions

### AssumeRoleRequest
* AssumeRoleRequest `object`
  * DurationSeconds
  * ExternalId
  * Policy
  * PolicyArns
    * items [PolicyDescriptorType](#policydescriptortype)
  * RoleArn **required**
  * RoleSessionName **required**
  * SerialNumber
  * Tags
    * items [Tag](#tag)
  * TokenCode
  * TransitiveTagKeys
    * items [tagKeyType](#tagkeytype)

### AssumeRoleResponse
* AssumeRoleResponse `object`: Contains the response to a successful <a>AssumeRole</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * AssumedRoleUser
    * Arn **required**
    * AssumedRoleId **required**
  * Credentials
    * AccessKeyId **required**
    * Expiration **required**
    * SecretAccessKey **required**
    * SessionToken **required**
  * PackedPolicySize

### AssumeRoleWithSAMLRequest
* AssumeRoleWithSAMLRequest `object`
  * DurationSeconds
  * Policy
  * PolicyArns
    * items [PolicyDescriptorType](#policydescriptortype)
  * PrincipalArn **required**
  * RoleArn **required**
  * SAMLAssertion **required**

### AssumeRoleWithSAMLResponse
* AssumeRoleWithSAMLResponse `object`: Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * AssumedRoleUser
    * Arn **required**
    * AssumedRoleId **required**
  * Audience
  * Credentials
    * AccessKeyId **required**
    * Expiration **required**
    * SecretAccessKey **required**
    * SessionToken **required**
  * Issuer
  * NameQualifier
  * PackedPolicySize
  * Subject
  * SubjectType

### AssumeRoleWithWebIdentityRequest
* AssumeRoleWithWebIdentityRequest `object`
  * DurationSeconds
  * Policy
  * PolicyArns
    * items [PolicyDescriptorType](#policydescriptortype)
  * ProviderId
  * RoleArn **required**
  * RoleSessionName **required**
  * WebIdentityToken **required**

### AssumeRoleWithWebIdentityResponse
* AssumeRoleWithWebIdentityResponse `object`: Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * AssumedRoleUser
    * Arn **required**
    * AssumedRoleId **required**
  * Audience
  * Credentials
    * AccessKeyId **required**
    * Expiration **required**
    * SecretAccessKey **required**
    * SessionToken **required**
  * PackedPolicySize
  * Provider
  * SubjectFromWebIdentityToken

### AssumedRoleUser
* AssumedRoleUser `object`: The identifiers for the temporary security credentials that the operation returns.
  * Arn **required**
  * AssumedRoleId **required**

### Audience
* Audience `string`

### Credentials
* Credentials `object`: AWS credentials for API authentication.
  * AccessKeyId **required**
  * Expiration **required**
  * SecretAccessKey **required**
  * SessionToken **required**

### DecodeAuthorizationMessageRequest
* DecodeAuthorizationMessageRequest `object`
  * EncodedMessage **required**

### DecodeAuthorizationMessageResponse
* DecodeAuthorizationMessageResponse `object`: A document that contains additional information about the authorization status of a request from an encoded message that is returned in response to an AWS request.
  * DecodedMessage

### ExpiredTokenException


### FederatedUser
* FederatedUser `object`: Identifiers for the federated user that is associated with the credentials.
  * Arn **required**
  * FederatedUserId **required**

### GetAccessKeyInfoRequest
* GetAccessKeyInfoRequest `object`
  * AccessKeyId **required**

### GetAccessKeyInfoResponse
* GetAccessKeyInfoResponse `object`
  * Account

### GetCallerIdentityRequest
* GetCallerIdentityRequest `object`

### GetCallerIdentityResponse
* GetCallerIdentityResponse `object`: Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.
  * Account
  * Arn
  * UserId

### GetFederationTokenRequest
* GetFederationTokenRequest `object`
  * DurationSeconds
  * Name **required**
  * Policy
  * PolicyArns
    * items [PolicyDescriptorType](#policydescriptortype)
  * Tags
    * items [Tag](#tag)

### GetFederationTokenResponse
* GetFederationTokenResponse `object`: Contains the response to a successful <a>GetFederationToken</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * Credentials
    * AccessKeyId **required**
    * Expiration **required**
    * SecretAccessKey **required**
    * SessionToken **required**
  * FederatedUser
    * Arn **required**
    * FederatedUserId **required**
  * PackedPolicySize

### GetSessionTokenRequest
* GetSessionTokenRequest `object`
  * DurationSeconds
  * SerialNumber
  * TokenCode

### GetSessionTokenResponse
* GetSessionTokenResponse `object`: Contains the response to a successful <a>GetSessionToken</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * Credentials
    * AccessKeyId **required**
    * Expiration **required**
    * SecretAccessKey **required**
    * SessionToken **required**

### IDPCommunicationErrorException


### IDPRejectedClaimException


### InvalidAuthorizationMessageException


### InvalidIdentityTokenException


### Issuer
* Issuer `string`

### MalformedPolicyDocumentException


### NameQualifier
* NameQualifier `string`

### PackedPolicyTooLargeException


### PolicyDescriptorType
* PolicyDescriptorType `object`: A reference to the IAM managed policy that is passed as a session policy for a role session or a federated user session.
  * arn

### RegionDisabledException


### SAMLAssertionType
* SAMLAssertionType `string`

### Subject
* Subject `string`

### SubjectType
* SubjectType `string`

### Tag
* Tag `object`: You can pass custom key-value pair attributes when you assume a role or federate a user. These are called session tags. You can then use the session tags to control access to resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Tagging AWS STS Sessions</a> in the <i>IAM User Guide</i>.
  * Key **required**
  * Value **required**

### accessKeyIdType
* accessKeyIdType `string`

### accessKeySecretType
* accessKeySecretType `string`

### accountType
* accountType `string`

### arnType
* arnType `string`

### assumedRoleIdType
* assumedRoleIdType `string`

### clientTokenType
* clientTokenType `string`

### dateType
* dateType `string`

### decodedMessageType
* decodedMessageType `string`

### durationSecondsType
* durationSecondsType `integer`

### encodedMessageType
* encodedMessageType `string`

### externalIdType
* externalIdType `string`

### federatedIdType
* federatedIdType `string`

### nonNegativeIntegerType
* nonNegativeIntegerType `integer`

### policyDescriptorListType
* policyDescriptorListType `array`
  * items [PolicyDescriptorType](#policydescriptortype)

### roleDurationSecondsType
* roleDurationSecondsType `integer`

### roleSessionNameType
* roleSessionNameType `string`

### serialNumberType
* serialNumberType `string`

### sessionPolicyDocumentType
* sessionPolicyDocumentType `string`

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

### tokenCodeType
* tokenCodeType `string`

### tokenType
* tokenType `string`

### urlType
* urlType `string`

### userIdType
* userIdType `string`

### userNameType
* userNameType `string`

### webIdentitySubjectType
* webIdentitySubjectType `string`


