# @datafire/amazonaws_cloudhsm

Client library for Amazon CloudHSM

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudhsm
```

```js
let datafire = require('datafire');
let amazonaws_cloudhsm = require('@datafire/amazonaws_cloudhsm').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_cloudhsm.AddTagsToResource({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CloudHSM Service</fullname> <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p>

## Actions
### AddTagsToResource



```js
amazonaws_cloudhsm.AddTagsToResource({
  "ResourceArn": "",
  "TagList": []
}, context)
```

#### Parameters
* ResourceArn (string) **required**
* TagList (array) **required**

### CreateHapg



```js
amazonaws_cloudhsm.CreateHapg({
  "Label": ""
}, context)
```

#### Parameters
* Label (string) **required**

### CreateHsm



```js
amazonaws_cloudhsm.CreateHsm({
  "SubnetId": "",
  "SshKey": "",
  "IamRoleArn": "",
  "SubscriptionType": ""
}, context)
```

#### Parameters
* ClientToken (string)
* EniIp (string)
* ExternalId (string)
* IamRoleArn (string) **required**
* SshKey (string) **required**
* SubnetId (string) **required**
* SubscriptionType (string) **required** - <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>
* SyslogIp (string)

### CreateLunaClient



```js
amazonaws_cloudhsm.CreateLunaClient({
  "Certificate": ""
}, context)
```

#### Parameters
* Certificate (string) **required**
* Label (string)

### DeleteHapg



```js
amazonaws_cloudhsm.DeleteHapg({
  "HapgArn": ""
}, context)
```

#### Parameters
* HapgArn (string) **required**

### DeleteHsm



```js
amazonaws_cloudhsm.DeleteHsm({
  "HsmArn": ""
}, context)
```

#### Parameters
* HsmArn (string) **required** - An ARN that identifies an HSM.

### DeleteLunaClient



```js
amazonaws_cloudhsm.DeleteLunaClient({
  "ClientArn": ""
}, context)
```

#### Parameters
* ClientArn (string) **required**

### DescribeHapg



```js
amazonaws_cloudhsm.DescribeHapg({
  "HapgArn": ""
}, context)
```

#### Parameters
* HapgArn (string) **required**

### DescribeHsm



```js
amazonaws_cloudhsm.DescribeHsm({}, context)
```

#### Parameters
* HsmArn (string) - An ARN that identifies an HSM.
* HsmSerialNumber (string)

### DescribeLunaClient



```js
amazonaws_cloudhsm.DescribeLunaClient({}, context)
```

#### Parameters
* CertificateFingerprint (string)
* ClientArn (string)

### GetConfig



```js
amazonaws_cloudhsm.GetConfig({
  "ClientArn": "",
  "ClientVersion": "",
  "HapgList": []
}, context)
```

#### Parameters
* ClientArn (string) **required**
* ClientVersion (string) **required**
* HapgList (array) **required**

### ListAvailableZones



```js
amazonaws_cloudhsm.ListAvailableZones({}, context)
```

#### Parameters
*This action has no parameters*

### ListHapgs



```js
amazonaws_cloudhsm.ListHapgs({}, context)
```

#### Parameters
* NextToken (string)

### ListHsms



```js
amazonaws_cloudhsm.ListHsms({}, context)
```

#### Parameters
* NextToken (string)

### ListLunaClients



```js
amazonaws_cloudhsm.ListLunaClients({}, context)
```

#### Parameters
* NextToken (string)

### ListTagsForResource



```js
amazonaws_cloudhsm.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Parameters
* ResourceArn (string) **required**

### ModifyHapg



```js
amazonaws_cloudhsm.ModifyHapg({
  "HapgArn": ""
}, context)
```

#### Parameters
* HapgArn (string) **required**
* Label (string)
* PartitionSerialList (array)

### ModifyHsm



```js
amazonaws_cloudhsm.ModifyHsm({
  "HsmArn": ""
}, context)
```

#### Parameters
* EniIp (string)
* ExternalId (string)
* HsmArn (string) **required** - An ARN that identifies an HSM.
* IamRoleArn (string)
* SubnetId (string)
* SyslogIp (string)

### ModifyLunaClient



```js
amazonaws_cloudhsm.ModifyLunaClient({
  "ClientArn": "",
  "Certificate": ""
}, context)
```

#### Parameters
* Certificate (string) **required**
* ClientArn (string) **required**

### RemoveTagsFromResource



```js
amazonaws_cloudhsm.RemoveTagsFromResource({
  "ResourceArn": "",
  "TagKeyList": []
}, context)
```

#### Parameters
* ResourceArn (string) **required**
* TagKeyList (array) **required**

