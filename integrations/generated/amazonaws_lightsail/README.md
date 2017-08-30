# @datafire/amazonaws_lightsail

Client library for Amazon Lightsail

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_lightsail
```

```js
let datafire = require('datafire');
let amazonaws_lightsail = require('@datafire/amazonaws_lightsail').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_lightsail.AllocateStaticIp({}).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon Lightsail is the easiest way to get started with AWS for developers who just need virtual private servers. Lightsail includes everything you need to launch your project quickly - a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP - for a low, predictable price. You manage those Lightsail servers through the Lightsail console or by using the API or command-line interface (CLI).</p> <p>For more information about Lightsail concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/all">Lightsail Dev Guide</a>.</p> <p>To use the Lightsail API or the CLI, you will need to use AWS Identity and Access Management (IAM) to generate access keys. For details about how to set this up, see the <a href="http://lightsail.aws.amazon.com/ls/docs/how-to/article/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Lightsail Dev Guide</a>.</p>

## Actions
### AllocateStaticIp



```js
amazonaws_lightsail.AllocateStaticIp({
  "staticIpName": ""
}, context)
```

#### Parameters
* staticIpName (string) **required**

### AttachStaticIp



```js
amazonaws_lightsail.AttachStaticIp({
  "staticIpName": "",
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**
* staticIpName (string) **required**

### CloseInstancePublicPorts



```js
amazonaws_lightsail.CloseInstancePublicPorts({
  "portInfo": {},
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**
* portInfo (object) **required** - Describes information about the ports on your virtual private server (or <i>instance</i>).

### CreateDomain



```js
amazonaws_lightsail.CreateDomain({
  "domainName": ""
}, context)
```

#### Parameters
* domainName (string) **required**

### CreateDomainEntry



```js
amazonaws_lightsail.CreateDomainEntry({
  "domainName": "",
  "domainEntry": {}
}, context)
```

#### Parameters
* domainEntry (object) **required** - Describes a domain recordset entry.
* domainName (string) **required**

### CreateInstanceSnapshot



```js
amazonaws_lightsail.CreateInstanceSnapshot({
  "instanceSnapshotName": "",
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**
* instanceSnapshotName (string) **required**

### CreateInstances



```js
amazonaws_lightsail.CreateInstances({
  "instanceNames": [],
  "availabilityZone": "",
  "blueprintId": "",
  "bundleId": ""
}, context)
```

#### Parameters
* availabilityZone (string) **required**
* blueprintId (string) **required**
* bundleId (string) **required**
* customImageName (string)
* instanceNames (array) **required**
* keyPairName (string)
* userData (string)

### CreateInstancesFromSnapshot



```js
amazonaws_lightsail.CreateInstancesFromSnapshot({
  "instanceNames": [],
  "availabilityZone": "",
  "instanceSnapshotName": "",
  "bundleId": ""
}, context)
```

#### Parameters
* availabilityZone (string) **required**
* bundleId (string) **required**
* instanceNames (array) **required**
* instanceSnapshotName (string) **required**
* keyPairName (string)
* userData (string)

### CreateKeyPair



```js
amazonaws_lightsail.CreateKeyPair({
  "keyPairName": ""
}, context)
```

#### Parameters
* keyPairName (string) **required**

### DeleteDomain



```js
amazonaws_lightsail.DeleteDomain({
  "domainName": ""
}, context)
```

#### Parameters
* domainName (string) **required**

### DeleteDomainEntry



```js
amazonaws_lightsail.DeleteDomainEntry({
  "domainName": "",
  "domainEntry": {}
}, context)
```

#### Parameters
* domainEntry (object) **required** - Describes a domain recordset entry.
* domainName (string) **required**

### DeleteInstance



```js
amazonaws_lightsail.DeleteInstance({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**

### DeleteInstanceSnapshot



```js
amazonaws_lightsail.DeleteInstanceSnapshot({
  "instanceSnapshotName": ""
}, context)
```

#### Parameters
* instanceSnapshotName (string) **required**

### DeleteKeyPair



```js
amazonaws_lightsail.DeleteKeyPair({
  "keyPairName": ""
}, context)
```

#### Parameters
* keyPairName (string) **required**

### DetachStaticIp



```js
amazonaws_lightsail.DetachStaticIp({
  "staticIpName": ""
}, context)
```

#### Parameters
* staticIpName (string) **required**

### DownloadDefaultKeyPair



```js
amazonaws_lightsail.DownloadDefaultKeyPair({}, context)
```

#### Parameters
*This action has no parameters*

### GetActiveNames



```js
amazonaws_lightsail.GetActiveNames({}, context)
```

#### Parameters
* pageToken (string)

### GetBlueprints



```js
amazonaws_lightsail.GetBlueprints({}, context)
```

#### Parameters
* includeInactive (boolean)
* pageToken (string)

### GetBundles



```js
amazonaws_lightsail.GetBundles({}, context)
```

#### Parameters
* includeInactive (boolean)
* pageToken (string)

### GetDomain



```js
amazonaws_lightsail.GetDomain({
  "domainName": ""
}, context)
```

#### Parameters
* domainName (string) **required**

### GetDomains



```js
amazonaws_lightsail.GetDomains({}, context)
```

#### Parameters
* pageToken (string)

### GetInstance



```js
amazonaws_lightsail.GetInstance({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**

### GetInstanceAccessDetails



```js
amazonaws_lightsail.GetInstanceAccessDetails({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**
* protocol (string)

### GetInstanceMetricData



```js
amazonaws_lightsail.GetInstanceMetricData({
  "instanceName": "",
  "metricName": "",
  "period": 0,
  "startTime": "",
  "endTime": "",
  "unit": "",
  "statistics": []
}, context)
```

#### Parameters
* endTime (string) **required**
* instanceName (string) **required**
* metricName (string) **required**
* period (integer) **required**
* startTime (string) **required**
* statistics (array) **required**
* unit (string) **required**

### GetInstancePortStates



```js
amazonaws_lightsail.GetInstancePortStates({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**

### GetInstanceSnapshot



```js
amazonaws_lightsail.GetInstanceSnapshot({
  "instanceSnapshotName": ""
}, context)
```

#### Parameters
* instanceSnapshotName (string) **required**

### GetInstanceSnapshots



```js
amazonaws_lightsail.GetInstanceSnapshots({}, context)
```

#### Parameters
* pageToken (string)

### GetInstanceState



```js
amazonaws_lightsail.GetInstanceState({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**

### GetInstances



```js
amazonaws_lightsail.GetInstances({}, context)
```

#### Parameters
* pageToken (string)

### GetKeyPair



```js
amazonaws_lightsail.GetKeyPair({
  "keyPairName": ""
}, context)
```

#### Parameters
* keyPairName (string) **required**

### GetKeyPairs



```js
amazonaws_lightsail.GetKeyPairs({}, context)
```

#### Parameters
* pageToken (string)

### GetOperation



```js
amazonaws_lightsail.GetOperation({
  "operationId": ""
}, context)
```

#### Parameters
* operationId (string) **required**

### GetOperations



```js
amazonaws_lightsail.GetOperations({}, context)
```

#### Parameters
* pageToken (string)

### GetOperationsForResource



```js
amazonaws_lightsail.GetOperationsForResource({
  "resourceName": ""
}, context)
```

#### Parameters
* pageToken (string)
* resourceName (string) **required**

### GetRegions



```js
amazonaws_lightsail.GetRegions({}, context)
```

#### Parameters
* includeAvailabilityZones (boolean)

### GetStaticIp



```js
amazonaws_lightsail.GetStaticIp({
  "staticIpName": ""
}, context)
```

#### Parameters
* staticIpName (string) **required**

### GetStaticIps



```js
amazonaws_lightsail.GetStaticIps({}, context)
```

#### Parameters
* pageToken (string)

### ImportKeyPair



```js
amazonaws_lightsail.ImportKeyPair({
  "keyPairName": "",
  "publicKeyBase64": ""
}, context)
```

#### Parameters
* keyPairName (string) **required**
* publicKeyBase64 (string) **required**

### IsVpcPeered



```js
amazonaws_lightsail.IsVpcPeered({}, context)
```

#### Parameters
*This action has no parameters*

### OpenInstancePublicPorts



```js
amazonaws_lightsail.OpenInstancePublicPorts({
  "portInfo": {},
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**
* portInfo (object) **required** - Describes information about the ports on your virtual private server (or <i>instance</i>).

### PeerVpc



```js
amazonaws_lightsail.PeerVpc({}, context)
```

#### Parameters
*This action has no parameters*

### RebootInstance



```js
amazonaws_lightsail.RebootInstance({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**

### ReleaseStaticIp



```js
amazonaws_lightsail.ReleaseStaticIp({
  "staticIpName": ""
}, context)
```

#### Parameters
* staticIpName (string) **required**

### StartInstance



```js
amazonaws_lightsail.StartInstance({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**

### StopInstance



```js
amazonaws_lightsail.StopInstance({
  "instanceName": ""
}, context)
```

#### Parameters
* instanceName (string) **required**

### UnpeerVpc



```js
amazonaws_lightsail.UnpeerVpc({}, context)
```

#### Parameters
*This action has no parameters*

### UpdateDomainEntry



```js
amazonaws_lightsail.UpdateDomainEntry({
  "domainName": "",
  "domainEntry": {}
}, context)
```

#### Parameters
* domainEntry (object) **required** - Describes a domain recordset entry.
* domainName (string) **required**

