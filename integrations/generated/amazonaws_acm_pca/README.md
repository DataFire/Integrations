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

.then(data => {
  console.log(data);
});
```

## Description

<note> <p/> </note> <p>This is the <i>ACM Private CA API Reference</i>. It provides descriptions, syntax, and usage examples for each of the actions and data types involved in creating and managing private certificate authorities (CA) for your organization.</p> <p>The documentation for each action shows the Query API request parameters and the XML response. Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see <a href="https://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p> <note> <p>Each ACM Private CA API action has a quota that determines the number of times the action can be called per second. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaLimits.html#PcaLimits-api">API Rate Quotas in ACM Private CA</a> in the ACM Private CA user guide.</p> </note>

## Actions

### CreateCertificateAuthority



```js
amazonaws_acm_pca.CreateCertificateAuthority({
  "CertificateAuthorityConfiguration": null,
  "CertificateAuthorityType": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityConfiguration **required**
    * KeyAlgorithm **required**
    * SigningAlgorithm **required**
    * Subject **required**
      * CommonName
      * Country
      * DistinguishedNameQualifier
      * GenerationQualifier
      * GivenName
      * Initials
      * Locality
      * Organization
      * OrganizationalUnit
      * Pseudonym
      * SerialNumber
      * State
      * Surname
      * Title
  * CertificateAuthorityType **required**
  * IdempotencyToken
  * RevocationConfiguration
    * CrlConfiguration
      * CustomCname
      * Enabled **required**
      * ExpirationInDays
      * S3BucketName
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateCertificateAuthorityResponse](#createcertificateauthorityresponse)

### CreateCertificateAuthorityAuditReport



```js
amazonaws_acm_pca.CreateCertificateAuthorityAuditReport({
  "CertificateAuthorityArn": null,
  "S3BucketName": null,
  "AuditReportResponseFormat": null
}, context)
```

#### Input
* input `object`
  * AuditReportResponseFormat **required**
  * CertificateAuthorityArn **required**
  * S3BucketName **required**

#### Output
* output [CreateCertificateAuthorityAuditReportResponse](#createcertificateauthorityauditreportresponse)

### CreatePermission



```js
amazonaws_acm_pca.CreatePermission({
  "CertificateAuthorityArn": null,
  "Principal": null,
  "Actions": null
}, context)
```

#### Input
* input `object`
  * Actions **required**
    * items [ActionType](#actiontype)
  * CertificateAuthorityArn **required**
  * Principal **required**
  * SourceAccount

#### Output
*Output schema unknown*

### DeleteCertificateAuthority



```js
amazonaws_acm_pca.DeleteCertificateAuthority({
  "CertificateAuthorityArn": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**
  * PermanentDeletionTimeInDays

#### Output
*Output schema unknown*

### DeletePermission



```js
amazonaws_acm_pca.DeletePermission({
  "CertificateAuthorityArn": null,
  "Principal": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**
  * Principal **required**
  * SourceAccount

#### Output
*Output schema unknown*

### DeletePolicy



```js
amazonaws_acm_pca.DeletePolicy({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
*Output schema unknown*

### DescribeCertificateAuthority



```js
amazonaws_acm_pca.DescribeCertificateAuthority({
  "CertificateAuthorityArn": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**

#### Output
* output [DescribeCertificateAuthorityResponse](#describecertificateauthorityresponse)

### DescribeCertificateAuthorityAuditReport



```js
amazonaws_acm_pca.DescribeCertificateAuthorityAuditReport({
  "CertificateAuthorityArn": null,
  "AuditReportId": null
}, context)
```

#### Input
* input `object`
  * AuditReportId **required**
  * CertificateAuthorityArn **required**

#### Output
* output [DescribeCertificateAuthorityAuditReportResponse](#describecertificateauthorityauditreportresponse)

### GetCertificate



```js
amazonaws_acm_pca.GetCertificate({
  "CertificateAuthorityArn": null,
  "CertificateArn": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**
  * CertificateAuthorityArn **required**

#### Output
* output [GetCertificateResponse](#getcertificateresponse)

### GetCertificateAuthorityCertificate



```js
amazonaws_acm_pca.GetCertificateAuthorityCertificate({
  "CertificateAuthorityArn": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**

#### Output
* output [GetCertificateAuthorityCertificateResponse](#getcertificateauthoritycertificateresponse)

### GetCertificateAuthorityCsr



```js
amazonaws_acm_pca.GetCertificateAuthorityCsr({
  "CertificateAuthorityArn": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**

#### Output
* output [GetCertificateAuthorityCsrResponse](#getcertificateauthoritycsrresponse)

### GetPolicy



```js
amazonaws_acm_pca.GetPolicy({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [GetPolicyResponse](#getpolicyresponse)

### ImportCertificateAuthorityCertificate



```js
amazonaws_acm_pca.ImportCertificateAuthorityCertificate({
  "CertificateAuthorityArn": null,
  "Certificate": null
}, context)
```

#### Input
* input `object`
  * Certificate **required**
  * CertificateAuthorityArn **required**
  * CertificateChain

#### Output
*Output schema unknown*

### IssueCertificate



```js
amazonaws_acm_pca.IssueCertificate({
  "CertificateAuthorityArn": null,
  "Csr": null,
  "SigningAlgorithm": null,
  "Validity": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**
  * Csr **required**
  * IdempotencyToken
  * SigningAlgorithm **required**
  * TemplateArn
  * Validity **required**
    * Type **required**
    * Value **required**

#### Output
* output [IssueCertificateResponse](#issuecertificateresponse)

### ListCertificateAuthorities



```js
amazonaws_acm_pca.ListCertificateAuthorities({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceOwner

#### Output
* output [ListCertificateAuthoritiesResponse](#listcertificateauthoritiesresponse)

### ListPermissions



```js
amazonaws_acm_pca.ListPermissions({
  "CertificateAuthorityArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CertificateAuthorityArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListPermissionsResponse](#listpermissionsresponse)

### ListTags



```js
amazonaws_acm_pca.ListTags({
  "CertificateAuthorityArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CertificateAuthorityArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListTagsResponse](#listtagsresponse)

### PutPolicy



```js
amazonaws_acm_pca.PutPolicy({
  "ResourceArn": null,
  "Policy": null
}, context)
```

#### Input
* input `object`
  * Policy **required**
  * ResourceArn **required**

#### Output
*Output schema unknown*

### RestoreCertificateAuthority



```js
amazonaws_acm_pca.RestoreCertificateAuthority({
  "CertificateAuthorityArn": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**

#### Output
*Output schema unknown*

### RevokeCertificate



```js
amazonaws_acm_pca.RevokeCertificate({
  "CertificateAuthorityArn": null,
  "CertificateSerial": null,
  "RevocationReason": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**
  * CertificateSerial **required**
  * RevocationReason **required**

#### Output
*Output schema unknown*

### TagCertificateAuthority



```js
amazonaws_acm_pca.TagCertificateAuthority({
  "CertificateAuthorityArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagCertificateAuthority



```js
amazonaws_acm_pca.UntagCertificateAuthority({
  "CertificateAuthorityArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UpdateCertificateAuthority



```js
amazonaws_acm_pca.UpdateCertificateAuthority({
  "CertificateAuthorityArn": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn **required**
  * RevocationConfiguration
    * CrlConfiguration
      * CustomCname
      * Enabled **required**
      * ExpirationInDays
      * S3BucketName
  * Status

#### Output
*Output schema unknown*



## Definitions

### ASN1PrintableString64
* ASN1PrintableString64 `string`

### ASN1Subject
* ASN1Subject `object`: Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The <b>Subject</b> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <b>Subject</b> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity. 
  * CommonName
  * Country
  * DistinguishedNameQualifier
  * GenerationQualifier
  * GivenName
  * Initials
  * Locality
  * Organization
  * OrganizationalUnit
  * Pseudonym
  * SerialNumber
  * State
  * Surname
  * Title

### AWSPolicy
* AWSPolicy `string`

### AccountId
* AccountId `string`

### ActionList
* ActionList `array`
  * items [ActionType](#actiontype)

### ActionType
* ActionType `string` (values: IssueCertificate, GetCertificate, ListPermissions)

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
* CertificateAuthority `object`: Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM). 
  * Arn
  * CertificateAuthorityConfiguration
    * KeyAlgorithm **required**
    * SigningAlgorithm **required**
    * Subject **required**
      * CommonName
      * Country
      * DistinguishedNameQualifier
      * GenerationQualifier
      * GivenName
      * Initials
      * Locality
      * Organization
      * OrganizationalUnit
      * Pseudonym
      * SerialNumber
      * State
      * Surname
      * Title
  * CreatedAt
  * FailureReason
  * LastStateChangeAt
  * NotAfter
  * NotBefore
  * OwnerAccount
  * RestorableUntil
  * RevocationConfiguration
    * CrlConfiguration
      * CustomCname
      * Enabled **required**
      * ExpirationInDays
      * S3BucketName
  * Serial
  * Status
  * Type

### CertificateAuthorityConfiguration
* CertificateAuthorityConfiguration `object`: Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. 
  * KeyAlgorithm **required**
  * SigningAlgorithm **required**
  * Subject **required**
    * CommonName
    * Country
    * DistinguishedNameQualifier
    * GenerationQualifier
    * GivenName
    * Initials
    * Locality
    * Organization
    * OrganizationalUnit
    * Pseudonym
    * SerialNumber
    * State
    * Surname
    * Title

### CertificateAuthorityStatus
* CertificateAuthorityStatus `string` (values: CREATING, PENDING_CERTIFICATE, ACTIVE, DELETED, DISABLED, EXPIRED, FAILED)

### CertificateAuthorityType
* CertificateAuthorityType `string` (values: ROOT, SUBORDINATE)

### CertificateBody
* CertificateBody `string`

### CertificateBodyBlob
* CertificateBodyBlob `string`

### CertificateChain
* CertificateChain `string`

### CertificateChainBlob
* CertificateChainBlob `string`

### CertificateMismatchException


### ConcurrentModificationException


### CountryCodeString
* CountryCodeString `string`

### CreateCertificateAuthorityAuditReportRequest
* CreateCertificateAuthorityAuditReportRequest `object`
  * AuditReportResponseFormat **required**
  * CertificateAuthorityArn **required**
  * S3BucketName **required**

### CreateCertificateAuthorityAuditReportResponse
* CreateCertificateAuthorityAuditReportResponse `object`
  * AuditReportId
  * S3Key

### CreateCertificateAuthorityRequest
* CreateCertificateAuthorityRequest `object`
  * CertificateAuthorityConfiguration **required**
    * KeyAlgorithm **required**
    * SigningAlgorithm **required**
    * Subject **required**
      * CommonName
      * Country
      * DistinguishedNameQualifier
      * GenerationQualifier
      * GivenName
      * Initials
      * Locality
      * Organization
      * OrganizationalUnit
      * Pseudonym
      * SerialNumber
      * State
      * Surname
      * Title
  * CertificateAuthorityType **required**
  * IdempotencyToken
  * RevocationConfiguration
    * CrlConfiguration
      * CustomCname
      * Enabled **required**
      * ExpirationInDays
      * S3BucketName
  * Tags
    * items [Tag](#tag)

### CreateCertificateAuthorityResponse
* CreateCertificateAuthorityResponse `object`
  * CertificateAuthorityArn

### CreatePermissionRequest
* CreatePermissionRequest `object`
  * Actions **required**
    * items [ActionType](#actiontype)
  * CertificateAuthorityArn **required**
  * Principal **required**
  * SourceAccount

### CrlConfiguration
* CrlConfiguration `object`: <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to ACM Private CA. </p> <p>ACM Private CAA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked. When a certificate is revoked, it is recorded in the next CRL that is generated and in the next audit report. Only time valid certificates are listed in the CRL. Expired certificates are not included. </p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by ACM Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p>
  * CustomCname
  * Enabled **required**
  * ExpirationInDays
  * S3BucketName

### CsrBlob
* CsrBlob `string`

### CsrBody
* CsrBody `string`

### DeleteCertificateAuthorityRequest
* DeleteCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required**
  * PermanentDeletionTimeInDays

### DeletePermissionRequest
* DeletePermissionRequest `object`
  * CertificateAuthorityArn **required**
  * Principal **required**
  * SourceAccount

### DeletePolicyRequest
* DeletePolicyRequest `object`
  * ResourceArn **required**

### DescribeCertificateAuthorityAuditReportRequest
* DescribeCertificateAuthorityAuditReportRequest `object`
  * AuditReportId **required**
  * CertificateAuthorityArn **required**

### DescribeCertificateAuthorityAuditReportResponse
* DescribeCertificateAuthorityAuditReportResponse `object`
  * AuditReportStatus
  * CreatedAt
  * S3BucketName
  * S3Key

### DescribeCertificateAuthorityRequest
* DescribeCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required**

### DescribeCertificateAuthorityResponse
* DescribeCertificateAuthorityResponse `object`
  * CertificateAuthority
    * Arn
    * CertificateAuthorityConfiguration
      * KeyAlgorithm **required**
      * SigningAlgorithm **required**
      * Subject **required**
        * CommonName
        * Country
        * DistinguishedNameQualifier
        * GenerationQualifier
        * GivenName
        * Initials
        * Locality
        * Organization
        * OrganizationalUnit
        * Pseudonym
        * SerialNumber
        * State
        * Surname
        * Title
    * CreatedAt
    * FailureReason
    * LastStateChangeAt
    * NotAfter
    * NotBefore
    * OwnerAccount
    * RestorableUntil
    * RevocationConfiguration
      * CrlConfiguration
        * CustomCname
        * Enabled **required**
        * ExpirationInDays
        * S3BucketName
    * Serial
    * Status
    * Type

### FailureReason
* FailureReason `string` (values: REQUEST_TIMED_OUT, UNSUPPORTED_ALGORITHM, OTHER)

### GetCertificateAuthorityCertificateRequest
* GetCertificateAuthorityCertificateRequest `object`
  * CertificateAuthorityArn **required**

### GetCertificateAuthorityCertificateResponse
* GetCertificateAuthorityCertificateResponse `object`
  * Certificate
  * CertificateChain

### GetCertificateAuthorityCsrRequest
* GetCertificateAuthorityCsrRequest `object`
  * CertificateAuthorityArn **required**

### GetCertificateAuthorityCsrResponse
* GetCertificateAuthorityCsrResponse `object`
  * Csr

### GetCertificateRequest
* GetCertificateRequest `object`
  * CertificateArn **required**
  * CertificateAuthorityArn **required**

### GetCertificateResponse
* GetCertificateResponse `object`
  * Certificate
  * CertificateChain

### GetPolicyRequest
* GetPolicyRequest `object`
  * ResourceArn **required**

### GetPolicyResponse
* GetPolicyResponse `object`
  * Policy

### IdempotencyToken
* IdempotencyToken `string`

### ImportCertificateAuthorityCertificateRequest
* ImportCertificateAuthorityCertificateRequest `object`
  * Certificate **required**
  * CertificateAuthorityArn **required**
  * CertificateChain

### Integer1To5000
* Integer1To5000 `integer`

### InvalidArgsException


### InvalidArnException


### InvalidNextTokenException


### InvalidPolicyException


### InvalidRequestException


### InvalidStateException


### InvalidTagException


### IssueCertificateRequest
* IssueCertificateRequest `object`
  * CertificateAuthorityArn **required**
  * Csr **required**
  * IdempotencyToken
  * SigningAlgorithm **required**
  * TemplateArn
  * Validity **required**
    * Type **required**
    * Value **required**

### IssueCertificateResponse
* IssueCertificateResponse `object`
  * CertificateArn

### KeyAlgorithm
* KeyAlgorithm `string` (values: RSA_2048, RSA_4096, EC_prime256v1, EC_secp384r1)

### LimitExceededException


### ListCertificateAuthoritiesRequest
* ListCertificateAuthoritiesRequest `object`
  * MaxResults
  * NextToken
  * ResourceOwner

### ListCertificateAuthoritiesResponse
* ListCertificateAuthoritiesResponse `object`
  * CertificateAuthorities
    * items [CertificateAuthority](#certificateauthority)
  * NextToken

### ListPermissionsRequest
* ListPermissionsRequest `object`
  * CertificateAuthorityArn **required**
  * MaxResults
  * NextToken

### ListPermissionsResponse
* ListPermissionsResponse `object`
  * NextToken
  * Permissions
    * items [Permission](#permission)

### ListTagsRequest
* ListTagsRequest `object`
  * CertificateAuthorityArn **required**
  * MaxResults
  * NextToken

### ListTagsResponse
* ListTagsResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### LockoutPreventedException


### MalformedCSRException


### MalformedCertificateException


### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### PermanentDeletionTimeInDays
* PermanentDeletionTimeInDays `integer`

### Permission
* Permission `object`: Permissions designate which private CA actions can be performed by an AWS service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action, removed with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action, and listed with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action.
  * Actions
    * items [ActionType](#actiontype)
  * CertificateAuthorityArn
  * CreatedAt
  * Policy
  * Principal
  * SourceAccount

### PermissionAlreadyExistsException


### PermissionList
* PermissionList `array`
  * items [Permission](#permission)

### PositiveLong
* PositiveLong `integer`

### Principal
* Principal `string`

### PutPolicyRequest
* PutPolicyRequest `object`
  * Policy **required**
  * ResourceArn **required**

### RequestAlreadyProcessedException


### RequestFailedException


### RequestInProgressException


### ResourceNotFoundException


### ResourceOwner
* ResourceOwner `string` (values: SELF, OTHER_ACCOUNTS)

### RestoreCertificateAuthorityRequest
* RestoreCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required**

### RevocationConfiguration
* RevocationConfiguration `object`: Certificate revocation information used by the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a>.
  * CrlConfiguration
    * CustomCname
    * Enabled **required**
    * ExpirationInDays
    * S3BucketName

### RevocationReason
* RevocationReason `string` (values: UNSPECIFIED, KEY_COMPROMISE, CERTIFICATE_AUTHORITY_COMPROMISE, AFFILIATION_CHANGED, SUPERSEDED, CESSATION_OF_OPERATION, PRIVILEGE_WITHDRAWN, A_A_COMPROMISE)

### RevokeCertificateRequest
* RevokeCertificateRequest `object`
  * CertificateAuthorityArn **required**
  * CertificateSerial **required**
  * RevocationReason **required**

### S3BucketName
* S3BucketName `string`

### S3Key
* S3Key `string`

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
* Tag `object`: Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action. To remove a tag, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. 
  * Key **required**
  * Value

### TagCertificateAuthorityRequest
* TagCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TooManyTagsException


### UntagCertificateAuthorityRequest
* UntagCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required**
  * Tags **required**
    * items [Tag](#tag)

### UpdateCertificateAuthorityRequest
* UpdateCertificateAuthorityRequest `object`
  * CertificateAuthorityArn **required**
  * RevocationConfiguration
    * CrlConfiguration
      * CustomCname
      * Enabled **required**
      * ExpirationInDays
      * S3BucketName
  * Status

### Validity
* Validity `object`: <p>Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p> <p>You can issue a certificate by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action.</p>
  * Type **required**
  * Value **required**

### ValidityPeriodType
* ValidityPeriodType `string` (values: END_DATE, ABSOLUTE, DAYS, MONTHS, YEARS)


