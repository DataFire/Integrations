# @datafire/amazonaws_cloudhsmv2

Client library for AWS CloudHSM V2

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudhsmv2
```

```js
let datafire = require('datafire');
let amazonaws_cloudhsmv2 = require('@datafire/amazonaws_cloudhsmv2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_cloudhsmv2.CreateCluster({}).then(data => {
  console.log(data);
})
```

## Description
For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>.

## Actions
### CreateCluster



```js
amazonaws_cloudhsmv2.CreateCluster({
  "SubnetIds": [],
  "HsmType": ""
}, context)
```

#### Parameters
* HsmType (string) **required**
* SourceBackupId (string)
* SubnetIds (array) **required**

### CreateHsm



```js
amazonaws_cloudhsmv2.CreateHsm({
  "ClusterId": "",
  "AvailabilityZone": ""
}, context)
```

#### Parameters
* AvailabilityZone (string) **required**
* ClusterId (string) **required**
* IpAddress (string)

### DeleteCluster



```js
amazonaws_cloudhsmv2.DeleteCluster({
  "ClusterId": ""
}, context)
```

#### Parameters
* ClusterId (string) **required**

### DeleteHsm



```js
amazonaws_cloudhsmv2.DeleteHsm({
  "ClusterId": ""
}, context)
```

#### Parameters
* ClusterId (string) **required**
* EniId (string)
* EniIp (string)
* HsmId (string)

### DescribeBackups



```js
amazonaws_cloudhsmv2.DescribeBackups({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribeClusters



```js
amazonaws_cloudhsmv2.DescribeClusters({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### InitializeCluster



```js
amazonaws_cloudhsmv2.InitializeCluster({
  "ClusterId": "",
  "SignedCert": "",
  "TrustAnchor": ""
}, context)
```

#### Parameters
* ClusterId (string) **required**
* SignedCert (string) **required**
* TrustAnchor (string) **required**

### ListTags



```js
amazonaws_cloudhsmv2.ListTags({
  "ResourceId": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* ResourceId (string) **required**

### TagResource



```js
amazonaws_cloudhsmv2.TagResource({
  "ResourceId": "",
  "TagList": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* TagList (array) **required**

### UntagResource



```js
amazonaws_cloudhsmv2.UntagResource({
  "ResourceId": "",
  "TagKeyList": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* TagKeyList (array) **required**

