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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Certificate Manager</fullname> <p>Welcome to the AWS Certificate Manager (ACM) API documentation.</p> <p>You can use ACM to manage SSL/TLS certificates for your AWS-based websites and applications. For general information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/"> <i>AWS Certificate Manager User Guide</i> </a>.</p>

## Actions

### AddTagsToCertificate



```js
amazonaws_acm.AddTagsToCertificate({
  "CertificateArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### DeleteCertificate



```js
amazonaws_acm.DeleteCertificate({
  "CertificateArn": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**

#### Output
*Output schema unknown*

### DescribeCertificate



```js
amazonaws_acm.DescribeCertificate({
  "CertificateArn": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**

#### Output
* output [DescribeCertificateResponse](#describecertificateresponse)

### ExportCertificate



```js
amazonaws_acm.ExportCertificate({
  "CertificateArn": null,
  "Passphrase": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**
  * Passphrase **required**

#### Output
* output [ExportCertificateResponse](#exportcertificateresponse)

### GetCertificate



```js
amazonaws_acm.GetCertificate({
  "CertificateArn": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**

#### Output
* output [GetCertificateResponse](#getcertificateresponse)

### ImportCertificate



```js
amazonaws_acm.ImportCertificate({
  "Certificate": null,
  "PrivateKey": null
}, context)
```

#### Input
* input `object`
  * Certificate **required**
  * CertificateArn
  * CertificateChain
  * PrivateKey **required**
  * Tags
    * items [Tag](#tag)

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
  * CertificateStatuses
    * items [CertificateStatus](#certificatestatus)
  * Includes
    * extendedKeyUsage
      * items [ExtendedKeyUsageName](#extendedkeyusagename)
    * keyTypes
      * items [KeyAlgorithm](#keyalgorithm)
    * keyUsage
      * items [KeyUsageName](#keyusagename)
  * MaxItems
  * NextToken

#### Output
* output [ListCertificatesResponse](#listcertificatesresponse)

### ListTagsForCertificate



```js
amazonaws_acm.ListTagsForCertificate({
  "CertificateArn": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**

#### Output
* output [ListTagsForCertificateResponse](#listtagsforcertificateresponse)

### RemoveTagsFromCertificate



```js
amazonaws_acm.RemoveTagsFromCertificate({
  "CertificateArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### RenewCertificate



```js
amazonaws_acm.RenewCertificate({
  "CertificateArn": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**

#### Output
*Output schema unknown*

### RequestCertificate



```js
amazonaws_acm.RequestCertificate({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn
  * DomainName **required**
  * DomainValidationOptions
    * items [DomainValidationOption](#domainvalidationoption)
  * IdempotencyToken
  * Options
    * CertificateTransparencyLoggingPreference
  * SubjectAlternativeNames
    * items [DomainNameString](#domainnamestring)
  * Tags
    * items [Tag](#tag)
  * ValidationMethod

#### Output
* output [RequestCertificateResponse](#requestcertificateresponse)

### ResendValidationEmail



```js
amazonaws_acm.ResendValidationEmail({
  "CertificateArn": null,
  "Domain": null,
  "ValidationDomain": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**
  * Domain **required**
  * ValidationDomain **required**

#### Output
*Output schema unknown*

### UpdateCertificateOptions



```js
amazonaws_acm.UpdateCertificateOptions({
  "CertificateArn": null,
  "Options": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**
  * Options **required**
    * CertificateTransparencyLoggingPreference

#### Output
*Output schema unknown*



## Definitions

### AddTagsToCertificateRequest
* AddTagsToCertificateRequest `object`
  * CertificateArn **required**
  * Tags **required**
    * items [Tag](#tag)

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
  * CertificateArn
  * CertificateAuthorityArn
  * CreatedAt
  * DomainName
  * DomainValidationOptions
    * items [DomainValidation](#domainvalidation)
  * ExtendedKeyUsages
    * items [ExtendedKeyUsage](#extendedkeyusage)
  * FailureReason
  * ImportedAt
  * InUseBy
    * items [String](#string)
  * IssuedAt
  * Issuer
  * KeyAlgorithm
  * KeyUsages
    * items [KeyUsage](#keyusage)
  * NotAfter
  * NotBefore
  * Options
    * CertificateTransparencyLoggingPreference
  * RenewalEligibility
  * RenewalSummary
    * DomainValidationOptions **required**
      * items [DomainValidation](#domainvalidation)
    * RenewalStatus **required**
    * RenewalStatusReason
    * UpdatedAt **required**
  * RevocationReason
  * RevokedAt
  * Serial
  * SignatureAlgorithm
  * Status
  * Subject
  * SubjectAlternativeNames
    * items [DomainNameString](#domainnamestring)
  * Type

### CertificateOptions
* CertificateOptions `object`: Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>. 
  * CertificateTransparencyLoggingPreference

### CertificateStatus
* CertificateStatus `string` (values: PENDING_VALIDATION, ISSUED, INACTIVE, EXPIRED, VALIDATION_TIMED_OUT, REVOKED, FAILED)

### CertificateStatuses
* CertificateStatuses `array`
  * items [CertificateStatus](#certificatestatus)

### CertificateSummary
* CertificateSummary `object`: This structure is returned in the response object of <a>ListCertificates</a> action. 
  * CertificateArn
  * DomainName

### CertificateSummaryList
* CertificateSummaryList `array`
  * items [CertificateSummary](#certificatesummary)

### CertificateTransparencyLoggingPreference
* CertificateTransparencyLoggingPreference `string` (values: ENABLED, DISABLED)

### CertificateType
* CertificateType `string` (values: IMPORTED, AMAZON_ISSUED, PRIVATE)

### DeleteCertificateRequest
* DeleteCertificateRequest `object`
  * CertificateArn **required**

### DescribeCertificateRequest
* DescribeCertificateRequest `object`
  * CertificateArn **required**

### DescribeCertificateResponse
* DescribeCertificateResponse `object`
  * Certificate
    * CertificateArn
    * CertificateAuthorityArn
    * CreatedAt
    * DomainName
    * DomainValidationOptions
      * items [DomainValidation](#domainvalidation)
    * ExtendedKeyUsages
      * items [ExtendedKeyUsage](#extendedkeyusage)
    * FailureReason
    * ImportedAt
    * InUseBy
      * items [String](#string)
    * IssuedAt
    * Issuer
    * KeyAlgorithm
    * KeyUsages
      * items [KeyUsage](#keyusage)
    * NotAfter
    * NotBefore
    * Options
      * CertificateTransparencyLoggingPreference
    * RenewalEligibility
    * RenewalSummary
      * DomainValidationOptions **required**
        * items [DomainValidation](#domainvalidation)
      * RenewalStatus **required**
      * RenewalStatusReason
      * UpdatedAt **required**
    * RevocationReason
    * RevokedAt
    * Serial
    * SignatureAlgorithm
    * Status
    * Subject
    * SubjectAlternativeNames
      * items [DomainNameString](#domainnamestring)
    * Type

### DomainList
* DomainList `array`
  * items [DomainNameString](#domainnamestring)

### DomainNameString
* DomainNameString `string`

### DomainStatus
* DomainStatus `string` (values: PENDING_VALIDATION, SUCCESS, FAILED)

### DomainValidation
* DomainValidation `object`: Contains information about the validation of each domain name in the certificate.
  * DomainName **required**
  * ResourceRecord
    * Name **required**
    * Type **required**
    * Value **required**
  * ValidationDomain
  * ValidationEmails
    * items [String](#string)
  * ValidationMethod
  * ValidationStatus

### DomainValidationList
* DomainValidationList `array`
  * items [DomainValidation](#domainvalidation)

### DomainValidationOption
* DomainValidationOption `object`: Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.
  * DomainName **required**
  * ValidationDomain **required**

### DomainValidationOptionList
* DomainValidationOptionList `array`
  * items [DomainValidationOption](#domainvalidationoption)

### ExportCertificateRequest
* ExportCertificateRequest `object`
  * CertificateArn **required**
  * Passphrase **required**

### ExportCertificateResponse
* ExportCertificateResponse `object`
  * Certificate
  * CertificateChain
  * PrivateKey

### ExtendedKeyUsage
* ExtendedKeyUsage `object`: The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension. 
  * Name
  * OID

### ExtendedKeyUsageFilterList
* ExtendedKeyUsageFilterList `array`
  * items [ExtendedKeyUsageName](#extendedkeyusagename)

### ExtendedKeyUsageList
* ExtendedKeyUsageList `array`
  * items [ExtendedKeyUsage](#extendedkeyusage)

### ExtendedKeyUsageName
* ExtendedKeyUsageName `string` (values: TLS_WEB_SERVER_AUTHENTICATION, TLS_WEB_CLIENT_AUTHENTICATION, CODE_SIGNING, EMAIL_PROTECTION, TIME_STAMPING, OCSP_SIGNING, IPSEC_END_SYSTEM, IPSEC_TUNNEL, IPSEC_USER, ANY, NONE, CUSTOM)

### FailureReason
* FailureReason `string` (values: NO_AVAILABLE_CONTACTS, ADDITIONAL_VERIFICATION_REQUIRED, DOMAIN_NOT_ALLOWED, INVALID_PUBLIC_DOMAIN, DOMAIN_VALIDATION_DENIED, CAA_ERROR, PCA_LIMIT_EXCEEDED, PCA_INVALID_ARN, PCA_INVALID_STATE, PCA_REQUEST_FAILED, PCA_NAME_CONSTRAINTS_VALIDATION, PCA_RESOURCE_NOT_FOUND, PCA_INVALID_ARGS, PCA_INVALID_DURATION, PCA_ACCESS_DENIED, SLR_NOT_FOUND, OTHER)

### Filters
* Filters `object`: This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. 
  * extendedKeyUsage
    * items [ExtendedKeyUsageName](#extendedkeyusagename)
  * keyTypes
    * items [KeyAlgorithm](#keyalgorithm)
  * keyUsage
    * items [KeyUsageName](#keyusagename)

### GetCertificateRequest
* GetCertificateRequest `object`
  * CertificateArn **required**

### GetCertificateResponse
* GetCertificateResponse `object`
  * Certificate
  * CertificateChain

### IdempotencyToken
* IdempotencyToken `string`

### ImportCertificateRequest
* ImportCertificateRequest `object`
  * Certificate **required**
  * CertificateArn
  * CertificateChain
  * PrivateKey **required**
  * Tags
    * items [Tag](#tag)

### ImportCertificateResponse
* ImportCertificateResponse `object`
  * CertificateArn

### InUseList
* InUseList `array`
  * items [String](#string)

### InvalidArgsException


### InvalidArnException


### InvalidDomainValidationOptionsException


### InvalidParameterException


### InvalidStateException


### InvalidTagException


### KeyAlgorithm
* KeyAlgorithm `string` (values: RSA_2048, RSA_1024, RSA_4096, EC_prime256v1, EC_secp384r1, EC_secp521r1)

### KeyAlgorithmList
* KeyAlgorithmList `array`
  * items [KeyAlgorithm](#keyalgorithm)

### KeyUsage
* KeyUsage `object`: The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.
  * Name

### KeyUsageFilterList
* KeyUsageFilterList `array`
  * items [KeyUsageName](#keyusagename)

### KeyUsageList
* KeyUsageList `array`
  * items [KeyUsage](#keyusage)

### KeyUsageName
* KeyUsageName `string` (values: DIGITAL_SIGNATURE, NON_REPUDIATION, KEY_ENCIPHERMENT, DATA_ENCIPHERMENT, KEY_AGREEMENT, CERTIFICATE_SIGNING, CRL_SIGNING, ENCIPHER_ONLY, DECIPHER_ONLY, ANY, CUSTOM)

### LimitExceededException


### ListCertificatesRequest
* ListCertificatesRequest `object`
  * CertificateStatuses
    * items [CertificateStatus](#certificatestatus)
  * Includes
    * extendedKeyUsage
      * items [ExtendedKeyUsageName](#extendedkeyusagename)
    * keyTypes
      * items [KeyAlgorithm](#keyalgorithm)
    * keyUsage
      * items [KeyUsageName](#keyusagename)
  * MaxItems
  * NextToken

### ListCertificatesResponse
* ListCertificatesResponse `object`
  * CertificateSummaryList
    * items [CertificateSummary](#certificatesummary)
  * NextToken

### ListTagsForCertificateRequest
* ListTagsForCertificateRequest `object`
  * CertificateArn **required**

### ListTagsForCertificateResponse
* ListTagsForCertificateResponse `object`
  * Tags
    * items [Tag](#tag)

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
  * CertificateArn **required**
  * Tags **required**
    * items [Tag](#tag)

### RenewCertificateRequest
* RenewCertificateRequest `object`
  * CertificateArn **required**

### RenewalEligibility
* RenewalEligibility `string` (values: ELIGIBLE, INELIGIBLE)

### RenewalStatus
* RenewalStatus `string` (values: PENDING_AUTO_RENEWAL, PENDING_VALIDATION, SUCCESS, FAILED)

### RenewalSummary
* RenewalSummary `object`: Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.
  * DomainValidationOptions **required**
    * items [DomainValidation](#domainvalidation)
  * RenewalStatus **required**
  * RenewalStatusReason
  * UpdatedAt **required**

### RequestCertificateRequest
* RequestCertificateRequest `object`
  * CertificateAuthorityArn
  * DomainName **required**
  * DomainValidationOptions
    * items [DomainValidationOption](#domainvalidationoption)
  * IdempotencyToken
  * Options
    * CertificateTransparencyLoggingPreference
  * SubjectAlternativeNames
    * items [DomainNameString](#domainnamestring)
  * Tags
    * items [Tag](#tag)
  * ValidationMethod

### RequestCertificateResponse
* RequestCertificateResponse `object`
  * CertificateArn

### RequestInProgressException


### ResendValidationEmailRequest
* ResendValidationEmailRequest `object`
  * CertificateArn **required**
  * Domain **required**
  * ValidationDomain **required**

### ResourceInUseException


### ResourceNotFoundException


### ResourceRecord
* ResourceRecord `object`: Contains a DNS record value that you can use to can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. 
  * Name **required**
  * Type **required**
  * Value **required**

### RevocationReason
* RevocationReason `string` (values: UNSPECIFIED, KEY_COMPROMISE, CA_COMPROMISE, AFFILIATION_CHANGED, SUPERCEDED, CESSATION_OF_OPERATION, CERTIFICATE_HOLD, REMOVE_FROM_CRL, PRIVILEGE_WITHDRAWN, A_A_COMPROMISE)

### String
* String `string`

### TStamp
* TStamp `string`

### Tag
* Tag `object`: A key-value pair that identifies or specifies metadata about an ACM resource.
  * Key **required**
  * Value

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagPolicyException


### TagValue
* TagValue `string`

### TooManyTagsException


### UpdateCertificateOptionsRequest
* UpdateCertificateOptionsRequest `object`
  * CertificateArn **required**
  * Options **required**
    * CertificateTransparencyLoggingPreference

### ValidationEmailList
* ValidationEmailList `array`
  * items [String](#string)

### ValidationMethod
* ValidationMethod `string` (values: EMAIL, DNS)


