# @datafire/amazonaws_acm

Client library for AWS Certificate Manager

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_acm
```

```js
let datafire = require('datafire');
let amazonaws_acm = require('@datafire/amazonaws_acm').create();

amazonaws_acm.AddTagsToCertificate({}).then(data => {
  console.log(data);
})
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

#### Parameters
* CertificateArn (string) **required**
* Tags (array) **required**

### DeleteCertificate



```js
amazonaws_acm.DeleteCertificate({
  "CertificateArn": ""
}, context)
```

#### Parameters
* CertificateArn (string) **required**

### DescribeCertificate



```js
amazonaws_acm.DescribeCertificate({
  "CertificateArn": ""
}, context)
```

#### Parameters
* CertificateArn (string) **required**

### GetCertificate



```js
amazonaws_acm.GetCertificate({
  "CertificateArn": ""
}, context)
```

#### Parameters
* CertificateArn (string) **required**

### ImportCertificate



```js
amazonaws_acm.ImportCertificate({
  "Certificate": "",
  "PrivateKey": ""
}, context)
```

#### Parameters
* Certificate (string) **required**
* CertificateArn (string)
* CertificateChain (string)
* PrivateKey (string) **required**

### ListCertificates



```js
amazonaws_acm.ListCertificates({}, context)
```

#### Parameters
* MaxItems (string)
* NextToken (string)
* CertificateStatuses (array)
* MaxItems (integer)
* NextToken (string)

### ListTagsForCertificate



```js
amazonaws_acm.ListTagsForCertificate({
  "CertificateArn": ""
}, context)
```

#### Parameters
* CertificateArn (string) **required**

### RemoveTagsFromCertificate



```js
amazonaws_acm.RemoveTagsFromCertificate({
  "CertificateArn": "",
  "Tags": []
}, context)
```

#### Parameters
* CertificateArn (string) **required**
* Tags (array) **required**

### RequestCertificate



```js
amazonaws_acm.RequestCertificate({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**
* DomainValidationOptions (array)
* IdempotencyToken (string)
* SubjectAlternativeNames (array)

### ResendValidationEmail



```js
amazonaws_acm.ResendValidationEmail({
  "CertificateArn": "",
  "Domain": "",
  "ValidationDomain": ""
}, context)
```

#### Parameters
* CertificateArn (string) **required**
* Domain (string) **required**
* ValidationDomain (string) **required**

