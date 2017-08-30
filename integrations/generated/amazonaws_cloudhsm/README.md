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
<fullname>AWS CloudHSM Service</fullname>

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
* SubscriptionType (string) **required** - <p>Specifies the type of subscription for the HSM.</p> <ul> <li><b>PRODUCTION</b> - The HSM is being used in a production environment.</li> <li><b>TRIAL</b> - The HSM is being used in a product trial.</li> </ul>
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

