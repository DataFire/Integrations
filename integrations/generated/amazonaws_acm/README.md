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
amazonaws_acm.AddTagsToCertificate({}, context)
```


### DeleteCertificate



```js
amazonaws_acm.DeleteCertificate({}, context)
```


### DescribeCertificate



```js
amazonaws_acm.DescribeCertificate({}, context)
```


### GetCertificate



```js
amazonaws_acm.GetCertificate({}, context)
```


### ImportCertificate



```js
amazonaws_acm.ImportCertificate({}, context)
```


### ListCertificates



```js
amazonaws_acm.ListCertificates({}, context)
```

#### Parameters
* MaxItems (string)
* NextToken (string)

### ListTagsForCertificate



```js
amazonaws_acm.ListTagsForCertificate({}, context)
```


### RemoveTagsFromCertificate



```js
amazonaws_acm.RemoveTagsFromCertificate({}, context)
```


### RequestCertificate



```js
amazonaws_acm.RequestCertificate({}, context)
```


### ResendValidationEmail



```js
amazonaws_acm.ResendValidationEmail({}, context)
```


