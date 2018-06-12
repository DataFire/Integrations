# @datafire/amazonaws_acm

Client library for AWS Certificate Manager

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_acm
```
```js
let amazonaws_acm = require('@datafire/amazonaws_acm').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_acm.AddTagsToCertificate({
  "CertificateArn": "",
  "Tags": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Certificate Manager</fullname> <p>Welcome to the AWS Certificate Manager (ACM) API documentation.</p> <p>You can use ACM to manage SSL/TLS certificates for your AWS-based websites and applications. For general information about using ACM, see the <a href="http://docs.aws.amazon.com/acm/latest/userguide/"> <i>AWS Certificate Manager User Guide</i> </a>.</p>

## Actions

### AddTagsToCertificate



```js
amazonaws_acm.AddTagsToCertificate({
  "CertificateArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*

### DeleteCertificate



```js
amazonaws_acm.DeleteCertificate({
  "CertificateArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)

#### Output
*Output schema unknown*

### DescribeCertificate



```js
amazonaws_acm.DescribeCertificate({
  "CertificateArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)

#### Output
* output [DescribeCertificateResponse](#describecertificateresponse)

### ExportCertificate



```js
amazonaws_acm.ExportCertificate({
  "CertificateArn": "",
  "Passphrase": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)
  * Passphrase **required** [PassphraseBlob](#passphraseblob)

#### Output
* output [ExportCertificateResponse](#exportcertificateresponse)

### GetCertificate



```js
amazonaws_acm.GetCertificate({
  "CertificateArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)

#### Output
* output [GetCertificateResponse](#getcertificateresponse)

### ImportCertificate



```js
amazonaws_acm.ImportCertificate({
  "Certificate": "",
  "PrivateKey": ""
}, context)
```

#### Input
* input `object`
  * Certificate **required** [CertificateBodyBlob](#certificatebodyblob)
  * CertificateArn [Arn](#arn)
  * CertificateChain [CertificateChainBlob](#certificatechainblob)
  * PrivateKey **required** [PrivateKeyBlob](#privatekeyblob)

#### Output
* output [ImportCertificateResponse](#importcertificateresponse)

### ListCertificates



```js
amazonaws_acm.ListCertificates({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * NextToken `string`
  * CertificateStatuses [CertificateStatuses](#certificatestatuses)
  * Includes [Filters](#filters)
  * MaxItems [MaxItems](#maxitems)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListCertificatesResponse](#listcertificatesresponse)

### ListTagsForCertificate



```js
amazonaws_acm.ListTagsForCertificate({
  "CertificateArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)

#### Output
* output [ListTagsForCertificateResponse](#listtagsforcertificateresponse)

### RemoveTagsFromCertificate



```js
amazonaws_acm.RemoveTagsFromCertificate({
  "CertificateArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*

### RequestCertificate



```js
amazonaws_acm.RequestCertificate({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn [Arn](#arn)
  * DomainName **required** [DomainNameString](#domainnamestring)
  * DomainValidationOptions [DomainValidationOptionList](#domainvalidationoptionlist)
  * IdempotencyToken [IdempotencyToken](#idempotencytoken)
  * Options [CertificateOptions](#certificateoptions)
  * SubjectAlternativeNames [DomainList](#domainlist)
  * ValidationMethod [ValidationMethod](#validationmethod)

#### Output
* output [RequestCertificateResponse](#requestcertificateresponse)

### ResendValidationEmail



```js
amazonaws_acm.ResendValidationEmail({
  "CertificateArn": "",
  "Domain": "",
  "ValidationDomain": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)
  * Domain **required** [DomainNameString](#domainnamestring)
  * ValidationDomain **required** [DomainNameString](#domainnamestring)

#### Output
*Output schema unknown*

### UpdateCertificateOptions



```js
amazonaws_acm.UpdateCertificateOptions({
  "CertificateArn": "",
  "Options": {}
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)
  * Options **required** [CertificateOptions](#certificateoptions)

#### Output
*Output schema unknown*



## Definitions

### AddTagsToCertificateRequest
* AddTagsToCertificateRequest `object`
  * CertificateArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

### Arn
* Arn `string`

### CertificateBody
* CertificateBody `string`

### CertificateBodyBlob
* CertificateBodyBlob `string`

### CertificateChain
* CertificateChain `string`

### CertificateChainBlob
* CertificateChainBlob `string`

### CertificateDetail
* CertificateDetail `object`: Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request. 
  * CertificateArn [Arn](#arn)
  * CertificateAuthorityArn [Arn](#arn)
  * CreatedAt [TStamp](#tstamp)
  * DomainName [DomainNameString](#domainnamestring)
  * DomainValidationOptions [DomainValidationList](#domainvalidationlist)
  * ExtendedKeyUsages [ExtendedKeyUsageList](#extendedkeyusagelist)
  * FailureReason [FailureReason](#failurereason)
  * ImportedAt [TStamp](#tstamp)
  * InUseBy [InUseList](#inuselist)
  * IssuedAt [TStamp](#tstamp)
  * Issuer [String](#string)
  * KeyAlgorithm [KeyAlgorithm](#keyalgorithm)
  * KeyUsages [KeyUsageList](#keyusagelist)
  * NotAfter [TStamp](#tstamp)
  * NotBefore [TStamp](#tstamp)
  * Options [CertificateOptions](#certificateoptions)
  * RenewalEligibility [RenewalEligibility](#renewaleligibility)
  * RenewalSummary [RenewalSummary](#renewalsummary)
  * RevocationReason [RevocationReason](#revocationreason)
  * RevokedAt [TStamp](#tstamp)
  * Serial [String](#string)
  * SignatureAlgorithm [String](#string)
  * Status [CertificateStatus](#certificatestatus)
  * Subject [String](#string)
  * SubjectAlternativeNames [DomainList](#domainlist)
  * Type [CertificateType](#certificatetype)

### CertificateOptions
* CertificateOptions `object`: Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>. 
  * CertificateTransparencyLoggingPreference [CertificateTransparencyLoggingPreference](#certificatetransparencyloggingpreference)

### CertificateStatus
* CertificateStatus `string` (values: PENDING_VALIDATION, ISSUED, INACTIVE, EXPIRED, VALIDATION_TIMED_OUT, REVOKED, FAILED)

### CertificateStatuses
* CertificateStatuses `array`
  * items [CertificateStatus](#certificatestatus)

### CertificateSummary
* CertificateSummary `object`: This structure is returned in the response object of <a>ListCertificates</a> action. 
  * CertificateArn [Arn](#arn)
  * DomainName [DomainNameString](#domainnamestring)

### CertificateSummaryList
* CertificateSummaryList `array`
  * items [CertificateSummary](#certificatesummary)

### CertificateTransparencyLoggingPreference
* CertificateTransparencyLoggingPreference `string` (values: ENABLED, DISABLED)

### CertificateType
* CertificateType `string` (values: IMPORTED, AMAZON_ISSUED, PRIVATE)

### DeleteCertificateRequest
* DeleteCertificateRequest `object`
  * CertificateArn **required** [Arn](#arn)

### DescribeCertificateRequest
* DescribeCertificateRequest `object`
  * CertificateArn **required** [Arn](#arn)

### DescribeCertificateResponse
* DescribeCertificateResponse `object`
  * Certificate [CertificateDetail](#certificatedetail)

### DomainList
* DomainList `array`
  * items [DomainNameString](#domainnamestring)

### DomainNameString
* DomainNameString `string`

### DomainStatus
* DomainStatus `string` (values: PENDING_VALIDATION, SUCCESS, FAILED)

### DomainValidation
* DomainValidation `object`: Contains information about the validation of each domain name in the certificate.
  * DomainName **required** [DomainNameString](#domainnamestring)
  * ResourceRecord [ResourceRecord](#resourcerecord)
  * ValidationDomain [DomainNameString](#domainnamestring)
  * ValidationEmails [ValidationEmailList](#validationemaillist)
  * ValidationMethod [ValidationMethod](#validationmethod)
  * ValidationStatus [DomainStatus](#domainstatus)

### DomainValidationList
* DomainValidationList `array`
  * items [DomainValidation](#domainvalidation)

### DomainValidationOption
* DomainValidationOption `object`: Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.
  * DomainName **required** [DomainNameString](#domainnamestring)
  * ValidationDomain **required** [DomainNameString](#domainnamestring)

### DomainValidationOptionList
* DomainValidationOptionList `array`
  * items [DomainValidationOption](#domainvalidationoption)

### ExportCertificateRequest
* ExportCertificateRequest `object`
  * CertificateArn **required** [Arn](#arn)
  * Passphrase **required** [PassphraseBlob](#passphraseblob)

### ExportCertificateResponse
* ExportCertificateResponse `object`
  * Certificate [CertificateBody](#certificatebody)
  * CertificateChain [CertificateChain](#certificatechain)
  * PrivateKey [PrivateKey](#privatekey)

### ExtendedKeyUsage
* ExtendedKeyUsage `object`: The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension. 
  * Name [ExtendedKeyUsageName](#extendedkeyusagename)
  * OID [String](#string)

### ExtendedKeyUsageFilterList
* ExtendedKeyUsageFilterList `array`
  * items [ExtendedKeyUsageName](#extendedkeyusagename)

### ExtendedKeyUsageList
* ExtendedKeyUsageList `array`
  * items [ExtendedKeyUsage](#extendedkeyusage)

### ExtendedKeyUsageName
* ExtendedKeyUsageName `string` (values: TLS_WEB_SERVER_AUTHENTICATION, TLS_WEB_CLIENT_AUTHENTICATION, CODE_SIGNING, EMAIL_PROTECTION, TIME_STAMPING, OCSP_SIGNING, IPSEC_END_SYSTEM, IPSEC_TUNNEL, IPSEC_USER, ANY, NONE, CUSTOM)

### FailureReason
* FailureReason `string` (values: NO_AVAILABLE_CONTACTS, ADDITIONAL_VERIFICATION_REQUIRED, DOMAIN_NOT_ALLOWED, INVALID_PUBLIC_DOMAIN, CAA_ERROR, PCA_LIMIT_EXCEEDED, PCA_INVALID_ARN, PCA_INVALID_STATE, PCA_REQUEST_FAILED, PCA_RESOURCE_NOT_FOUND, PCA_INVALID_ARGS, OTHER)

### Filters
* Filters `object`: This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. 
  * extendedKeyUsage [ExtendedKeyUsageFilterList](#extendedkeyusagefilterlist)
  * keyTypes [KeyAlgorithmList](#keyalgorithmlist)
  * keyUsage [KeyUsageFilterList](#keyusagefilterlist)

### GetCertificateRequest
* GetCertificateRequest `object`
  * CertificateArn **required** [Arn](#arn)

### GetCertificateResponse
* GetCertificateResponse `object`
  * Certificate [CertificateBody](#certificatebody)
  * CertificateChain [CertificateChain](#certificatechain)

### IdempotencyToken
* IdempotencyToken `string`

### ImportCertificateRequest
* ImportCertificateRequest `object`
  * Certificate **required** [CertificateBodyBlob](#certificatebodyblob)
  * CertificateArn [Arn](#arn)
  * CertificateChain [CertificateChainBlob](#certificatechainblob)
  * PrivateKey **required** [PrivateKeyBlob](#privatekeyblob)

### ImportCertificateResponse
* ImportCertificateResponse `object`
  * CertificateArn [Arn](#arn)

### InUseList
* InUseList `array`
  * items [String](#string)

### InvalidArnException
* InvalidArnException `object`: The requested Amazon Resource Name (ARN) does not refer to an existing resource.
  * message [String](#string)

### InvalidDomainValidationOptionsException
* InvalidDomainValidationOptionsException `object`: One or more values in the <a>DomainValidationOption</a> structure is incorrect.
  * message [String](#string)

### InvalidStateException
* InvalidStateException `object`: Processing has reached an invalid state.
  * message [String](#string)

### InvalidTagException
* InvalidTagException `object`: One or both of the values that make up the key-value pair is not valid. For example, you cannot specify a tag value that begins with <code>aws:</code>.
  * message [String](#string)

### KeyAlgorithm
* KeyAlgorithm `string` (values: RSA_2048, RSA_1024, RSA_4096, EC_prime256v1, EC_secp384r1, EC_secp521r1)

### KeyAlgorithmList
* KeyAlgorithmList `array`
  * items [KeyAlgorithm](#keyalgorithm)

### KeyUsage
* KeyUsage `object`: The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.
  * Name [KeyUsageName](#keyusagename)

### KeyUsageFilterList
* KeyUsageFilterList `array`
  * items [KeyUsageName](#keyusagename)

### KeyUsageList
* KeyUsageList `array`
  * items [KeyUsage](#keyusage)

### KeyUsageName
* KeyUsageName `string` (values: DIGITAL_SIGNATURE, NON_REPUDIATION, KEY_ENCIPHERMENT, DATA_ENCIPHERMENT, KEY_AGREEMENT, CERTIFICATE_SIGNING, CRL_SIGNING, ENCIPHER_ONLY, DECIPHER_ONLY, ANY, CUSTOM)

### LimitExceededException
* LimitExceededException `object`: An ACM limit has been exceeded.
  * message [String](#string)

### ListCertificatesRequest
* ListCertificatesRequest `object`
  * CertificateStatuses [CertificateStatuses](#certificatestatuses)
  * Includes [Filters](#filters)
  * MaxItems [MaxItems](#maxitems)
  * NextToken [NextToken](#nexttoken)

### ListCertificatesResponse
* ListCertificatesResponse `object`
  * CertificateSummaryList [CertificateSummaryList](#certificatesummarylist)
  * NextToken [NextToken](#nexttoken)

### ListTagsForCertificateRequest
* ListTagsForCertificateRequest `object`
  * CertificateArn **required** [Arn](#arn)

### ListTagsForCertificateResponse
* ListTagsForCertificateResponse `object`
  * Tags [TagList](#taglist)

### MaxItems
* MaxItems `integer`

### NextToken
* NextToken `string`

### PassphraseBlob
* PassphraseBlob `string`

### PrivateKey
* PrivateKey `string`

### PrivateKeyBlob
* PrivateKeyBlob `string`

### RecordType
* RecordType `string` (values: CNAME)

### RemoveTagsFromCertificateRequest
* RemoveTagsFromCertificateRequest `object`
  * CertificateArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

### RenewalEligibility
* RenewalEligibility `string` (values: ELIGIBLE, INELIGIBLE)

### RenewalStatus
* RenewalStatus `string` (values: PENDING_AUTO_RENEWAL, PENDING_VALIDATION, SUCCESS, FAILED)

### RenewalSummary
* RenewalSummary `object`: Contains information about the status of ACM's <a href="http://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.
  * DomainValidationOptions **required** [DomainValidationList](#domainvalidationlist)
  * RenewalStatus **required** [RenewalStatus](#renewalstatus)

### RequestCertificateRequest
* RequestCertificateRequest `object`
  * CertificateAuthorityArn [Arn](#arn)
  * DomainName **required** [DomainNameString](#domainnamestring)
  * DomainValidationOptions [DomainValidationOptionList](#domainvalidationoptionlist)
  * IdempotencyToken [IdempotencyToken](#idempotencytoken)
  * Options [CertificateOptions](#certificateoptions)
  * SubjectAlternativeNames [DomainList](#domainlist)
  * ValidationMethod [ValidationMethod](#validationmethod)

### RequestCertificateResponse
* RequestCertificateResponse `object`
  * CertificateArn [Arn](#arn)

### RequestInProgressException
* RequestInProgressException `object`: The certificate request is in process and the certificate in your account has not yet been issued.
  * message [String](#string)

### ResendValidationEmailRequest
* ResendValidationEmailRequest `object`
  * CertificateArn **required** [Arn](#arn)
  * Domain **required** [DomainNameString](#domainnamestring)
  * ValidationDomain **required** [DomainNameString](#domainnamestring)

### ResourceInUseException
* ResourceInUseException `object`: The certificate is in use by another AWS service in the caller's account. Remove the association and try again.
  * message [String](#string)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
  * message [String](#string)

### ResourceRecord
* ResourceRecord `object`: Contains a DNS record value that you can use to can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. 
  * Name **required** [String](#string)
  * Type **required** [RecordType](#recordtype)
  * Value **required** [String](#string)

### RevocationReason
* RevocationReason `string` (values: UNSPECIFIED, KEY_COMPROMISE, CA_COMPROMISE, AFFILIATION_CHANGED, SUPERCEDED, CESSATION_OF_OPERATION, CERTIFICATE_HOLD, REMOVE_FROM_CRL, PRIVILEGE_WITHDRAWN, A_A_COMPROMISE)

### String
* String `string`

### TStamp
* TStamp `string`

### Tag
* Tag `object`: A key-value pair that identifies or specifies metadata about an ACM resource.
  * Key **required** [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TooManyTagsException
* TooManyTagsException `object`: The request contains too many tags. Try the request again with fewer tags.
  * message [String](#string)

### UpdateCertificateOptionsRequest
* UpdateCertificateOptionsRequest `object`
  * CertificateArn **required** [Arn](#arn)
  * Options **required** [CertificateOptions](#certificateoptions)

### ValidationEmailList
* ValidationEmailList `array`
  * items [String](#string)

### ValidationMethod
* ValidationMethod `string` (values: EMAIL, DNS)


