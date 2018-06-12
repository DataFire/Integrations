# @datafire/amazonaws_acm_pca

Client library for AWS Certificate Manager Private Certificate Authority

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_acm_pca
```
```js
let amazonaws_acm_pca = require('@datafire/amazonaws_acm_pca').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_acm_pca.CreateCertificateAuthority({
  "CertificateAuthorityConfiguration": {
    "KeyAlgorithm": "",
    "SigningAlgorithm": "",
    "Subject": {}
  },
  "CertificateAuthorityType": ""
}).then(data => {
  console.log(data);
});
```

## Description

<p>You can use the ACM PCA API to create a private certificate authority (CA). You must first call the <a>CreateCertificateAuthority</a> function. If successful, the function returns an Amazon Resource Name (ARN) for your private CA. Use this ARN as input to the <a>GetCertificateAuthorityCsr</a> function to retrieve the certificate signing request (CSR) for your private CA certificate. Sign the CSR using the root or an intermediate CA in your on-premises PKI hierarchy, and call the <a>ImportCertificateAuthorityCertificate</a> to import your signed private CA certificate into ACM PCA. </p> <p>Use your private CA to issue and revoke certificates. These are private certificates that identify and secure client computers, servers, applications, services, devices, and users over SSLS/TLS connections within your organization. Call the <a>IssueCertificate</a> function to issue a certificate. Call the <a>RevokeCertificate</a> function to revoke a certificate. </p> <note> <p>Certificates issued by your private CA can be trusted only within your organization, not publicly.</p> </note> <p>Your private CA can optionally create a certificate revocation list (CRL) to track the certificates you revoke. To create a CRL, you must specify a <a>RevocationConfiguration</a> object when you call the <a>CreateCertificateAuthority</a> function. ACM PCA writes the CRL to an S3 bucket that you specify. You must specify a bucket policy that grants ACM PCA write permission. </p> <p>You can also call the <a>CreateCertificateAuthorityAuditReport</a> to create an optional audit report that lists every time the CA private key is used. The private key is used for signing when the <b>IssueCertificate</b> or <b>RevokeCertificate</b> function is called. </p>

## Actions

### CreateCertificateAuthority



```js
amazonaws_acm_pca.CreateCertificateAuthority({
  "CertificateAuthorityConfiguration": {
    "KeyAlgorithm": "",
    "SigningAlgorithm": "",
    "Subject": {}
  },
  "CertificateAuthorityType": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityConfiguration **required** [CertificateAuthorityConfiguration](#certificateauthorityconfiguration)
  * CertificateAuthorityType **required** [CertificateAuthorityType](#certificateauthoritytype)
  * IdempotencyToken [IdempotencyToken](#idempotencytoken)
  * RevocationConfiguration [RevocationConfiguration](#revocationconfiguration)

#### Output
* output [CreateCertificateAuthorityResponse](#createcertificateauthorityresponse)

### CreateCertificateAuthorityAuditReport



```js
amazonaws_acm_pca.CreateCertificateAuthorityAuditReport({
  "CertificateAuthorityArn": "",
  "S3BucketName": "",
  "AuditReportResponseFormat": ""
}, context)
```

#### Input
* input `object`
  * AuditReportResponseFormat **required** [AuditReportResponseFormat](#auditreportresponseformat)
  * CertificateAuthorityArn **required** [Arn](#arn)
  * S3BucketName **required** [String](#string)

#### Output
* output [CreateCertificateAuthorityAuditReportResponse](#createcertificateauthorityauditreportresponse)

### DeleteCertificateAuthority



```js
amazonaws_acm_pca.DeleteCertificateAuthority({
  "CertificateAuthorityArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)

#### Output
*Output schema unknown*

### DescribeCertificateAuthority



```js
amazonaws_acm_pca.DescribeCertificateAuthority({
  "CertificateAuthorityArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)

#### Output
* output [DescribeCertificateAuthorityResponse](#describecertificateauthorityresponse)

### DescribeCertificateAuthorityAuditReport



```js
amazonaws_acm_pca.DescribeCertificateAuthorityAuditReport({
  "CertificateAuthorityArn": "",
  "AuditReportId": ""
}, context)
```

#### Input
* input `object`
  * AuditReportId **required** [AuditReportId](#auditreportid)
  * CertificateAuthorityArn **required** [Arn](#arn)

#### Output
* output [DescribeCertificateAuthorityAuditReportResponse](#describecertificateauthorityauditreportresponse)

### GetCertificate



```js
amazonaws_acm_pca.GetCertificate({
  "CertificateAuthorityArn": "",
  "CertificateArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [Arn](#arn)
  * CertificateAuthorityArn **required** [Arn](#arn)

#### Output
* output [GetCertificateResponse](#getcertificateresponse)

### GetCertificateAuthorityCertificate



```js
amazonaws_acm_pca.GetCertificateAuthorityCertificate({
  "CertificateAuthorityArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)

#### Output
* output [GetCertificateAuthorityCertificateResponse](#getcertificateauthoritycertificateresponse)

### GetCertificateAuthorityCsr



```js
amazonaws_acm_pca.GetCertificateAuthorityCsr({
  "CertificateAuthorityArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)

#### Output
* output [GetCertificateAuthorityCsrResponse](#getcertificateauthoritycsrresponse)

### ImportCertificateAuthorityCertificate



```js
amazonaws_acm_pca.ImportCertificateAuthorityCertificate({
  "CertificateAuthorityArn": "",
  "Certificate": "",
  "CertificateChain": ""
}, context)
```

#### Input
* input `object`
  * Certificate **required** [CertificateBodyBlob](#certificatebodyblob)
  * CertificateAuthorityArn **required** [Arn](#arn)
  * CertificateChain **required** [CertificateChainBlob](#certificatechainblob)

#### Output
*Output schema unknown*

### IssueCertificate



```js
amazonaws_acm_pca.IssueCertificate({
  "CertificateAuthorityArn": "",
  "Csr": "",
  "SigningAlgorithm": "",
  "Validity": {
    "Value": 0,
    "Type": ""
  }
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * Csr **required** [CsrBlob](#csrblob)
  * IdempotencyToken [IdempotencyToken](#idempotencytoken)
  * SigningAlgorithm **required** [SigningAlgorithm](#signingalgorithm)
  * Validity **required** [Validity](#validity)

#### Output
* output [IssueCertificateResponse](#issuecertificateresponse)

### ListCertificateAuthorities



```js
amazonaws_acm_pca.ListCertificateAuthorities({}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListCertificateAuthoritiesResponse](#listcertificateauthoritiesresponse)

### ListTags



```js
amazonaws_acm_pca.ListTags({
  "CertificateAuthorityArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListTagsResponse](#listtagsresponse)

### RevokeCertificate



```js
amazonaws_acm_pca.RevokeCertificate({
  "CertificateAuthorityArn": "",
  "CertificateSerial": "",
  "RevocationReason": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * CertificateSerial **required** [String128](#string128)
  * RevocationReason **required** [RevocationReason](#revocationreason)

#### Output
*Output schema unknown*

### TagCertificateAuthority



```js
amazonaws_acm_pca.TagCertificateAuthority({
  "CertificateAuthorityArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*

### UntagCertificateAuthority



```js
amazonaws_acm_pca.UntagCertificateAuthority({
  "CertificateAuthorityArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*

### UpdateCertificateAuthority



```js
amazonaws_acm_pca.UpdateCertificateAuthority({
  "CertificateAuthorityArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * RevocationConfiguration [RevocationConfiguration](#revocationconfiguration)
  * Status [CertificateAuthorityStatus](#certificateauthoritystatus)

#### Output
*Output schema unknown*



## Definitions

### ASN1Subject
* ASN1Subject `object`: Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The <b>Subject</b> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <b>Subject</b> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each for each entity, but your private CA can issue more than one certificate with the same DN to the same entity. 
  * CommonName [String64](#string64)
  * Country [CountryCodeString](#countrycodestring)
  * DistinguishedNameQualifier [DistinguishedNameQualifierString](#distinguishednamequalifierstring)
  * GenerationQualifier [String3](#string3)
  * GivenName [String16](#string16)
  * Initials [String5](#string5)
  * Locality [String128](#string128)
  * Organization [String64](#string64)
  * OrganizationalUnit [String64](#string64)
  * Pseudonym [String128](#string128)
  * SerialNumber [String64](#string64)
  * State [String128](#string128)
  * Surname [String40](#string40)
  * Title [String64](#string64)

### Arn
* Arn `string`

### AuditReportId
* AuditReportId `string`

### AuditReportResponseFormat
* AuditReportResponseFormat `string` (values: JSON, CSV)

### AuditReportStatus
* AuditReportStatus `string` (values: CREATING, SUCCESS, FAILED)

### Boolean
* Boolean `boolean`

### CertificateAuthorities
* CertificateAuthorities `array`
  * items [CertificateAuthority](#certificateauthority)

### CertificateAuthority
* CertificateAuthority `object`: Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a>CreateCertificateAuthority</a> function to create your private CA. You must then call the <a>GetCertificateAuthorityCertificate</a> function to retrieve a private CA certificate signing request (CSR). Take the CSR to your on-premises CA and sign it with the root CA certificate or a subordinate certificate. Call the <a>ImportCertificateAuthorityCertificate</a> function to import the signed certificate into AWS Certificate Manager (ACM). 
  * Arn [Arn](#arn)
  * CertificateAuthorityConfiguration [CertificateAuthorityConfiguration](#certificateauthorityconfiguration)
  * CreatedAt [TStamp](#tstamp)
  * FailureReason [FailureReason](#failurereason)
  * LastStateChangeAt [TStamp](#tstamp)
  * NotAfter [TStamp](#tstamp)
  * NotBefore [TStamp](#tstamp)
  * RevocationConfiguration [RevocationConfiguration](#revocationconfiguration)
  * Serial [String](#string)
  * Status [CertificateAuthorityStatus](#certificateauthoritystatus)
  * Type [CertificateAuthorityType](#certificateauthoritytype)

### CertificateAuthorityConfiguration
* CertificateAuthorityConfiguration `object`: Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate, the signature algorithm it uses used when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a>CreateCertificateAuthority</a> function. 
  * KeyAlgorithm **required** [KeyAlgorithm](#keyalgorithm)
  * SigningAlgorithm **required** [SigningAlgorithm](#signingalgorithm)
  * Subject **required** [ASN1Subject](#asn1subject)

### CertificateAuthorityStatus
* CertificateAuthorityStatus `string` (values: CREATING, PENDING_CERTIFICATE, ACTIVE, DISABLED, EXPIRED, FAILED)

### CertificateAuthorityType
* CertificateAuthorityType `string` (values: SUBORDINATE)

### CertificateBody
* CertificateBody `string`

### CertificateBodyBlob
* CertificateBodyBlob `string`

### CertificateChain
* CertificateChain `string`

### CertificateChainBlob
* CertificateChainBlob `string`

### CertificateMismatchException
* CertificateMismatchException `object`: The certificate authority certificate you are importing does not comply with conditions specified in the certificate that signed it.
  * message [String](#string)

### ConcurrentModificationException
* ConcurrentModificationException `object`: A previous update to your private CA is still ongoing.
  * message [String](#string)

### CountryCodeString
* CountryCodeString `string`

### CreateCertificateAuthorityAuditReportRequest
* CreateCertificateAuthorityAuditReportRequest `object`
  * AuditReportResponseFormat **required** [AuditReportResponseFormat](#auditreportresponseformat)
  * CertificateAuthorityArn **required** [Arn](#arn)
  * S3BucketName **required** [String](#string)

### CreateCertificateAuthorityAuditReportResponse
* CreateCertificateAuthorityAuditReportResponse `object`
  * AuditReportId [AuditReportId](#auditreportid)
  * S3Key [String](#string)

### CreateCertificateAuthorityRequest
* CreateCertificateAuthorityRequest `object`
  * CertificateAuthorityConfiguration **required** [CertificateAuthorityConfiguration](#certificateauthorityconfiguration)
  * CertificateAuthorityType **required** [CertificateAuthorityType](#certificateauthoritytype)
  * IdempotencyToken [IdempotencyToken](#idempotencytoken)
  * RevocationConfiguration [RevocationConfiguration](#revocationconfiguration)

### CreateCertificateAuthorityResponse
* CreateCertificateAuthorityResponse `object`
  * CertificateAuthorityArn [Arn](#arn)

### CrlConfiguration
* CrlConfiguration `object`: <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to ACM PCA. </p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked. When a certificate is revoked, it is recorded in the next CRL that is generated and in the next audit report. Only time valid certificates are listed in the CRL. Expired certificates are not included. </p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by ACM PCA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p>
  * CustomCname [String253](#string253)
  * Enabled **required** [Boolean](#boolean)
  * ExpirationInDays [Integer1To5000](#integer1to5000)
  * S3BucketName [String3To255](#string3to255)

### CsrBlob
* CsrBlob `string`

### CsrBody
* CsrBody `string`

### DeleteCertificateAuthorityRequest
* DeleteCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)

### DescribeCertificateAuthorityAuditReportRequest
* DescribeCertificateAuthorityAuditReportRequest `object`
  * AuditReportId **required** [AuditReportId](#auditreportid)
  * CertificateAuthorityArn **required** [Arn](#arn)

### DescribeCertificateAuthorityAuditReportResponse
* DescribeCertificateAuthorityAuditReportResponse `object`
  * AuditReportStatus [AuditReportStatus](#auditreportstatus)
  * CreatedAt [TStamp](#tstamp)
  * S3BucketName [String](#string)
  * S3Key [String](#string)

### DescribeCertificateAuthorityRequest
* DescribeCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)

### DescribeCertificateAuthorityResponse
* DescribeCertificateAuthorityResponse `object`
  * CertificateAuthority [CertificateAuthority](#certificateauthority)

### DistinguishedNameQualifierString
* DistinguishedNameQualifierString `string`

### FailureReason
* FailureReason `string` (values: REQUEST_TIMED_OUT, UNSUPPORTED_ALGORITHM, OTHER)

### GetCertificateAuthorityCertificateRequest
* GetCertificateAuthorityCertificateRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)

### GetCertificateAuthorityCertificateResponse
* GetCertificateAuthorityCertificateResponse `object`
  * Certificate [CertificateBody](#certificatebody)
  * CertificateChain [CertificateChain](#certificatechain)

### GetCertificateAuthorityCsrRequest
* GetCertificateAuthorityCsrRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)

### GetCertificateAuthorityCsrResponse
* GetCertificateAuthorityCsrResponse `object`
  * Csr [CsrBody](#csrbody)

### GetCertificateRequest
* GetCertificateRequest `object`
  * CertificateArn **required** [Arn](#arn)
  * CertificateAuthorityArn **required** [Arn](#arn)

### GetCertificateResponse
* GetCertificateResponse `object`
  * Certificate [CertificateBody](#certificatebody)
  * CertificateChain [CertificateChain](#certificatechain)

### IdempotencyToken
* IdempotencyToken `string`

### ImportCertificateAuthorityCertificateRequest
* ImportCertificateAuthorityCertificateRequest `object`
  * Certificate **required** [CertificateBodyBlob](#certificatebodyblob)
  * CertificateAuthorityArn **required** [Arn](#arn)
  * CertificateChain **required** [CertificateChainBlob](#certificatechainblob)

### Integer1To5000
* Integer1To5000 `integer`

### InvalidArgsException
* InvalidArgsException `object`: One or more of the specified arguments was not valid.
  * message [String](#string)

### InvalidArnException
* InvalidArnException `object`: The requested Amazon Resource Name (ARN) does not refer to an existing resource.
  * message [String](#string)

### InvalidNextTokenException
* InvalidNextTokenException `object`: The token specified in the <code>NextToken</code> argument is not valid. Use the token returned from your previous call to <a>ListCertificateAuthorities</a>.
  * message [String](#string)

### InvalidPolicyException
* InvalidPolicyException `object`: The S3 bucket policy is not valid. The policy must give ACM PCA rights to read from and write to the bucket and find the bucket location.
  * message [String](#string)

### InvalidStateException
* InvalidStateException `object`: The private CA is in a state during which a report cannot be generated.
  * message [String](#string)

### InvalidTagException
* InvalidTagException `object`: The tag associated with the CA is not valid. The invalid argument is contained in the message field.
  * message [String](#string)

### IssueCertificateRequest
* IssueCertificateRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * Csr **required** [CsrBlob](#csrblob)
  * IdempotencyToken [IdempotencyToken](#idempotencytoken)
  * SigningAlgorithm **required** [SigningAlgorithm](#signingalgorithm)
  * Validity **required** [Validity](#validity)

### IssueCertificateResponse
* IssueCertificateResponse `object`
  * CertificateArn [Arn](#arn)

### KeyAlgorithm
* KeyAlgorithm `string` (values: RSA_2048, RSA_4096, EC_prime256v1, EC_secp384r1)

### LimitExceededException
* LimitExceededException `object`: An ACM PCA limit has been exceeded. See the exception message returned to determine the limit that was exceeded.
  * message [String](#string)

### ListCertificateAuthoritiesRequest
* ListCertificateAuthoritiesRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListCertificateAuthoritiesResponse
* ListCertificateAuthoritiesResponse `object`
  * CertificateAuthorities [CertificateAuthorities](#certificateauthorities)
  * NextToken [NextToken](#nexttoken)

### ListTagsRequest
* ListTagsRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListTagsResponse
* ListTagsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Tags [TagList](#taglist)

### MalformedCSRException
* MalformedCSRException `object`: The certificate signing request is invalid.
  * message [String](#string)

### MalformedCertificateException
* MalformedCertificateException `object`: One or more fields in the certificate are invalid.
  * message [String](#string)

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### PositiveLong
* PositiveLong `integer`

### RequestAlreadyProcessedException
* RequestAlreadyProcessedException `object`: Your request has already been completed.
  * message [String](#string)

### RequestFailedException
* RequestFailedException `object`: The request has failed for an unspecified reason.
  * message [String](#string)

### RequestInProgressException
* RequestInProgressException `object`: Your request is already in progress.
  * message [String](#string)

### ResourceNotFoundException
* ResourceNotFoundException `object`: A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.
  * message [String](#string)

### RevocationConfiguration
* RevocationConfiguration `object`: Certificate revocation information used by the <a>CreateCertificateAuthority</a> and <a>UpdateCertificateAuthority</a> functions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a>RevokeCertificate</a>.
  * CrlConfiguration [CrlConfiguration](#crlconfiguration)

### RevocationReason
* RevocationReason `string` (values: UNSPECIFIED, KEY_COMPROMISE, CERTIFICATE_AUTHORITY_COMPROMISE, AFFILIATION_CHANGED, SUPERSEDED, CESSATION_OF_OPERATION, PRIVILEGE_WITHDRAWN, A_A_COMPROMISE)

### RevokeCertificateRequest
* RevokeCertificateRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * CertificateSerial **required** [String128](#string128)
  * RevocationReason **required** [RevocationReason](#revocationreason)

### SigningAlgorithm
* SigningAlgorithm `string` (values: SHA256WITHECDSA, SHA384WITHECDSA, SHA512WITHECDSA, SHA256WITHRSA, SHA384WITHRSA, SHA512WITHRSA)

### String
* String `string`

### String128
* String128 `string`

### String16
* String16 `string`

### String253
* String253 `string`

### String3
* String3 `string`

### String3To255
* String3To255 `string`

### String40
* String40 `string`

### String5
* String5 `string`

### String64
* String64 `string`

### TStamp
* TStamp `string`

### Tag
* Tag `object`: Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a>TagCertificateAuthority</a> function. To remove a tag, call the <a>UntagCertificateAuthority</a> function. 
  * Key **required** [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagCertificateAuthorityRequest
* TagCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TooManyTagsException
* TooManyTagsException `object`: You can associate up to 50 tags with a private CA. Exception information is contained in the exception message field.
  * message [String](#string)

### UntagCertificateAuthorityRequest
* UntagCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

### UpdateCertificateAuthorityRequest
* UpdateCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required** [Arn](#arn)
  * RevocationConfiguration [RevocationConfiguration](#revocationconfiguration)
  * Status [CertificateAuthorityStatus](#certificateauthoritystatus)

### Validity
* Validity `object`: Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the <a>IssueCertificate</a> function.
  * Type **required** [ValidityPeriodType](#validityperiodtype)
  * Value **required** [PositiveLong](#positivelong)

### ValidityPeriodType
* ValidityPeriodType `string` (values: END_DATE, ABSOLUTE, DAYS, MONTHS, YEARS)


