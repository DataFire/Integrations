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

amazonaws_sts.AssumeRole({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS Security Token Service</fullname> <p>The AWS Security Token Service (STS) is a web service that enables you to request temporary, limited-privilege credentials for AWS Identity and Access Management (IAM) users or for users that you authenticate (federated users). This guide provides descriptions of the STS API. For more detailed information about using this service, go to <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a>. </p> <note> <p> As an alternative to using the API, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to STS. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For information about the AWS SDKs, including how to download and install them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services page</a>. </p> </note> <p>For information about setting up signatures and authorization through the API, go to <a href="http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API Requests</a> in the <i>AWS General Reference</i>. For general information about the Query API, go to <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in <i>Using IAM</i>. For information about using security tokens with other AWS products, go to <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html">AWS Services That Work with IAM</a> in the <i>IAM User Guide</i>. </p> <p>If you're new to AWS and need additional technical information about a specific AWS product, you can find the product's technical documentation at <a href="http://aws.amazon.com/documentation/">http://aws.amazon.com/documentation/</a>. </p> <p> <b>Endpoints</b> </p> <p>The AWS Security Token Service (STS) has a default endpoint of https://sts.amazonaws.com that maps to the US East (N. Virginia) region. Additional regions are available and are activated by default. For more information, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>IAM User Guide</i>.</p> <p>For information about STS endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#sts_region">Regions and Endpoints</a> in the <i>AWS General Reference</i>.</p> <p> <b>Recording API requests</b> </p> <p>STS supports AWS CloudTrail, which is a service that records AWS calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine what requests were successfully made to STS, who made the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>

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
  * DurationSeconds [roleDurationSecondsType](#roledurationsecondstype)
  * ExternalId [externalIdType](#externalidtype)
  * Policy [sessionPolicyDocumentType](#sessionpolicydocumenttype)
  * RoleArn **required** [arnType](#arntype)
  * RoleSessionName **required** [roleSessionNameType](#rolesessionnametype)
  * SerialNumber [serialNumberType](#serialnumbertype)
  * TokenCode [tokenCodeType](#tokencodetype)

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
  * DurationSeconds [roleDurationSecondsType](#roledurationsecondstype)
  * Policy [sessionPolicyDocumentType](#sessionpolicydocumenttype)
  * PrincipalArn **required** [arnType](#arntype)
  * RoleArn **required** [arnType](#arntype)
  * SAMLAssertion **required** [SAMLAssertionType](#samlassertiontype)

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
  * DurationSeconds [roleDurationSecondsType](#roledurationsecondstype)
  * Policy [sessionPolicyDocumentType](#sessionpolicydocumenttype)
  * ProviderId [urlType](#urltype)
  * RoleArn **required** [arnType](#arntype)
  * RoleSessionName **required** [roleSessionNameType](#rolesessionnametype)
  * WebIdentityToken **required** [clientTokenType](#clienttokentype)

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
  * EncodedMessage **required** [encodedMessageType](#encodedmessagetype)

#### Output
* output [DecodeAuthorizationMessageResponse](#decodeauthorizationmessageresponse)

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
  * DurationSeconds [durationSecondsType](#durationsecondstype)
  * Name **required** [userNameType](#usernametype)
  * Policy [sessionPolicyDocumentType](#sessionpolicydocumenttype)

#### Output
* output [GetFederationTokenResponse](#getfederationtokenresponse)

### GetSessionToken



```js
amazonaws_sts.GetSessionToken({}, context)
```

#### Input
* input `object`
  * DurationSeconds [durationSecondsType](#durationsecondstype)
  * SerialNumber [serialNumberType](#serialnumbertype)
  * TokenCode [tokenCodeType](#tokencodetype)

#### Output
* output [GetSessionTokenResponse](#getsessiontokenresponse)



## Definitions

### AssumeRoleRequest
* AssumeRoleRequest `object`
  * DurationSeconds [roleDurationSecondsType](#roledurationsecondstype)
  * ExternalId [externalIdType](#externalidtype)
  * Policy [sessionPolicyDocumentType](#sessionpolicydocumenttype)
  * RoleArn **required** [arnType](#arntype)
  * RoleSessionName **required** [roleSessionNameType](#rolesessionnametype)
  * SerialNumber [serialNumberType](#serialnumbertype)
  * TokenCode [tokenCodeType](#tokencodetype)

### AssumeRoleResponse
* AssumeRoleResponse `object`: Contains the response to a successful <a>AssumeRole</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * AssumedRoleUser [AssumedRoleUser](#assumedroleuser)
  * Credentials [Credentials](#credentials)
  * PackedPolicySize [nonNegativeIntegerType](#nonnegativeintegertype)

### AssumeRoleWithSAMLRequest
* AssumeRoleWithSAMLRequest `object`
  * DurationSeconds [roleDurationSecondsType](#roledurationsecondstype)
  * Policy [sessionPolicyDocumentType](#sessionpolicydocumenttype)
  * PrincipalArn **required** [arnType](#arntype)
  * RoleArn **required** [arnType](#arntype)
  * SAMLAssertion **required** [SAMLAssertionType](#samlassertiontype)

### AssumeRoleWithSAMLResponse
* AssumeRoleWithSAMLResponse `object`: Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * AssumedRoleUser [AssumedRoleUser](#assumedroleuser)
  * Audience [Audience](#audience)
  * Credentials [Credentials](#credentials)
  * Issuer [Issuer](#issuer)
  * NameQualifier [NameQualifier](#namequalifier)
  * PackedPolicySize [nonNegativeIntegerType](#nonnegativeintegertype)
  * Subject [Subject](#subject)
  * SubjectType [SubjectType](#subjecttype)

### AssumeRoleWithWebIdentityRequest
* AssumeRoleWithWebIdentityRequest `object`
  * DurationSeconds [roleDurationSecondsType](#roledurationsecondstype)
  * Policy [sessionPolicyDocumentType](#sessionpolicydocumenttype)
  * ProviderId [urlType](#urltype)
  * RoleArn **required** [arnType](#arntype)
  * RoleSessionName **required** [roleSessionNameType](#rolesessionnametype)
  * WebIdentityToken **required** [clientTokenType](#clienttokentype)

### AssumeRoleWithWebIdentityResponse
* AssumeRoleWithWebIdentityResponse `object`: Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * AssumedRoleUser [AssumedRoleUser](#assumedroleuser)
  * Audience [Audience](#audience)
  * Credentials [Credentials](#credentials)
  * PackedPolicySize [nonNegativeIntegerType](#nonnegativeintegertype)
  * Provider [Issuer](#issuer)
  * SubjectFromWebIdentityToken [webIdentitySubjectType](#webidentitysubjecttype)

### AssumedRoleUser
* AssumedRoleUser `object`: The identifiers for the temporary security credentials that the operation returns.
  * Arn **required** [arnType](#arntype)
  * AssumedRoleId **required** [assumedRoleIdType](#assumedroleidtype)

### Audience
* Audience `string`

### Credentials
* Credentials `object`: AWS credentials for API authentication.
  * AccessKeyId **required** [accessKeyIdType](#accesskeyidtype)
  * Expiration **required** [dateType](#datetype)
  * SecretAccessKey **required** [accessKeySecretType](#accesskeysecrettype)
  * SessionToken **required** [tokenType](#tokentype)

### DecodeAuthorizationMessageRequest
* DecodeAuthorizationMessageRequest `object`
  * EncodedMessage **required** [encodedMessageType](#encodedmessagetype)

### DecodeAuthorizationMessageResponse
* DecodeAuthorizationMessageResponse `object`: A document that contains additional information about the authorization status of a request from an encoded message that is returned in response to an AWS request.
  * DecodedMessage [decodedMessageType](#decodedmessagetype)

### ExpiredTokenException
* ExpiredTokenException `object`: The web identity token that was passed is expired or is not valid. Get a new identity token from the identity provider and then retry the request.
  * message [expiredIdentityTokenMessage](#expiredidentitytokenmessage)

### FederatedUser
* FederatedUser `object`: Identifiers for the federated user that is associated with the credentials.
  * Arn **required** [arnType](#arntype)
  * FederatedUserId **required** [federatedIdType](#federatedidtype)

### GetCallerIdentityRequest
* GetCallerIdentityRequest `object`

### GetCallerIdentityResponse
* GetCallerIdentityResponse `object`: Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.
  * Account [accountType](#accounttype)
  * Arn [arnType](#arntype)
  * UserId [userIdType](#useridtype)

### GetFederationTokenRequest
* GetFederationTokenRequest `object`
  * DurationSeconds [durationSecondsType](#durationsecondstype)
  * Name **required** [userNameType](#usernametype)
  * Policy [sessionPolicyDocumentType](#sessionpolicydocumenttype)

### GetFederationTokenResponse
* GetFederationTokenResponse `object`: Contains the response to a successful <a>GetFederationToken</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * Credentials [Credentials](#credentials)
  * FederatedUser [FederatedUser](#federateduser)
  * PackedPolicySize [nonNegativeIntegerType](#nonnegativeintegertype)

### GetSessionTokenRequest
* GetSessionTokenRequest `object`
  * DurationSeconds [durationSecondsType](#durationsecondstype)
  * SerialNumber [serialNumberType](#serialnumbertype)
  * TokenCode [tokenCodeType](#tokencodetype)

### GetSessionTokenResponse
* GetSessionTokenResponse `object`: Contains the response to a successful <a>GetSessionToken</a> request, including temporary AWS credentials that can be used to make AWS requests. 
  * Credentials [Credentials](#credentials)

### IDPCommunicationErrorException
* IDPCommunicationErrorException `object`: The request could not be fulfilled because the non-AWS identity provider (IDP) that was asked to verify the incoming identity token could not be reached. This is often a transient error caused by network conditions. Retry the request a limited number of times so that you don't exceed the request rate. If the error persists, the non-AWS identity provider might be down or not responding.
  * message [idpCommunicationErrorMessage](#idpcommunicationerrormessage)

### IDPRejectedClaimException
* IDPRejectedClaimException `object`: <p>The identity provider (IdP) reported that authentication failed. This might be because the claim is invalid.</p> <p>If this error is returned for the <code>AssumeRoleWithWebIdentity</code> operation, it can also mean that the claim has expired or has been explicitly revoked. </p>
  * message [idpRejectedClaimMessage](#idprejectedclaimmessage)

### InvalidAuthorizationMessageException
* InvalidAuthorizationMessageException `object`: The error returned if the message passed to <code>DecodeAuthorizationMessage</code> was invalid. This can happen if the token contains invalid characters, such as linebreaks. 
  * message [invalidAuthorizationMessage](#invalidauthorizationmessage)

### InvalidIdentityTokenException
* InvalidIdentityTokenException `object`: The web identity token that was passed could not be validated by AWS. Get a new identity token from the identity provider and then retry the request.
  * message [invalidIdentityTokenMessage](#invalididentitytokenmessage)

### Issuer
* Issuer `string`

### MalformedPolicyDocumentException
* MalformedPolicyDocumentException `object`: The request was rejected because the policy document was malformed. The error message describes the specific error.
  * message [malformedPolicyDocumentMessage](#malformedpolicydocumentmessage)

### NameQualifier
* NameQualifier `string`

### PackedPolicyTooLargeException
* PackedPolicyTooLargeException `object`: The request was rejected because the policy document was too large. The error message describes how big the policy document is, in packed form, as a percentage of what the API allows.
  * message [packedPolicyTooLargeMessage](#packedpolicytoolargemessage)

### RegionDisabledException
* RegionDisabledException `object`: STS is not activated in the requested region for the account that is being asked to generate credentials. The account administrator must use the IAM console to activate STS in that region. For more information, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>IAM User Guide</i>.
  * message [regionDisabledMessage](#regiondisabledmessage)

### SAMLAssertionType
* SAMLAssertionType `string`

### Subject
* Subject `string`

### SubjectType
* SubjectType `string`

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

### expiredIdentityTokenMessage
* expiredIdentityTokenMessage `string`

### externalIdType
* externalIdType `string`

### federatedIdType
* federatedIdType `string`

### idpCommunicationErrorMessage
* idpCommunicationErrorMessage `string`

### idpRejectedClaimMessage
* idpRejectedClaimMessage `string`

### invalidAuthorizationMessage
* invalidAuthorizationMessage `string`

### invalidIdentityTokenMessage
* invalidIdentityTokenMessage `string`

### malformedPolicyDocumentMessage
* malformedPolicyDocumentMessage `string`

### nonNegativeIntegerType
* nonNegativeIntegerType `integer`

### packedPolicyTooLargeMessage
* packedPolicyTooLargeMessage `string`

### regionDisabledMessage
* regionDisabledMessage `string`

### roleDurationSecondsType
* roleDurationSecondsType `integer`

### roleSessionNameType
* roleSessionNameType `string`

### serialNumberType
* serialNumberType `string`

### sessionPolicyDocumentType
* sessionPolicyDocumentType `string`

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


