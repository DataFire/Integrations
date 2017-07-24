# @datafire/amazonaws_lightsail

Client library for Amazon Lightsail

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_lightsail
```

```js
let datafire = require('datafire');
let amazonaws_lightsail = require('@datafire/amazonaws_lightsail').actions;
let context = new datafire.Context();

amazonaws_lightsail.AllocateStaticIp({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon Lightsail is the easiest way to get started with AWS for developers who just need virtual private servers. Lightsail includes everything you need to launch your project quickly - a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP - for a low, predictable price. You manage those Lightsail servers through the Lightsail console or by using the API or command-line interface (CLI).</p> <p>For more information about Lightsail concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/all">Lightsail Dev Guide</a>.</p> <p>To use the Lightsail API or the CLI, you will need to use AWS Identity and Access Management (IAM) to generate access keys. For details about how to set this up, see the <a href="http://lightsail.aws.amazon.com/ls/docs/how-to/article/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Lightsail Dev Guide</a>.</p>

## Actions
### AllocateStaticIp



```js
amazonaws_lightsail.AllocateStaticIp({}, context)
```

#### Parameters

### AttachStaticIp



```js
amazonaws_lightsail.AttachStaticIp({}, context)
```

#### Parameters

### CloseInstancePublicPorts



```js
amazonaws_lightsail.CloseInstancePublicPorts({}, context)
```

#### Parameters

### CreateDomain



```js
amazonaws_lightsail.CreateDomain({}, context)
```

#### Parameters

### CreateDomainEntry



```js
amazonaws_lightsail.CreateDomainEntry({}, context)
```

#### Parameters

### CreateInstanceSnapshot



```js
amazonaws_lightsail.CreateInstanceSnapshot({}, context)
```

#### Parameters

### CreateInstances



```js
amazonaws_lightsail.CreateInstances({}, context)
```

#### Parameters

### CreateInstancesFromSnapshot



```js
amazonaws_lightsail.CreateInstancesFromSnapshot({}, context)
```

#### Parameters

### CreateKeyPair



```js
amazonaws_lightsail.CreateKeyPair({}, context)
```

#### Parameters

### DeleteDomain



```js
amazonaws_lightsail.DeleteDomain({}, context)
```

#### Parameters

### DeleteDomainEntry



```js
amazonaws_lightsail.DeleteDomainEntry({}, context)
```

#### Parameters

### DeleteInstance



```js
amazonaws_lightsail.DeleteInstance({}, context)
```

#### Parameters

### DeleteInstanceSnapshot



```js
amazonaws_lightsail.DeleteInstanceSnapshot({}, context)
```

#### Parameters

### DeleteKeyPair



```js
amazonaws_lightsail.DeleteKeyPair({}, context)
```

#### Parameters

### DetachStaticIp



```js
amazonaws_lightsail.DetachStaticIp({}, context)
```

#### Parameters

### DownloadDefaultKeyPair



```js
amazonaws_lightsail.DownloadDefaultKeyPair({}, context)
```

#### Parameters

### GetActiveNames



```js
amazonaws_lightsail.GetActiveNames({}, context)
```

#### Parameters

### GetBlueprints



```js
amazonaws_lightsail.GetBlueprints({}, context)
```

#### Parameters

### GetBundles



```js
amazonaws_lightsail.GetBundles({}, context)
```

#### Parameters

### GetDomain



```js
amazonaws_lightsail.GetDomain({}, context)
```

#### Parameters

### GetDomains



```js
amazonaws_lightsail.GetDomains({}, context)
```

#### Parameters

### GetInstance



```js
amazonaws_lightsail.GetInstance({}, context)
```

#### Parameters

### GetInstanceAccessDetails



```js
amazonaws_lightsail.GetInstanceAccessDetails({}, context)
```

#### Parameters

### GetInstanceMetricData



```js
amazonaws_lightsail.GetInstanceMetricData({}, context)
```

#### Parameters

### GetInstancePortStates



```js
amazonaws_lightsail.GetInstancePortStates({}, context)
```

#### Parameters

### GetInstanceSnapshot



```js
amazonaws_lightsail.GetInstanceSnapshot({}, context)
```

#### Parameters

### GetInstanceSnapshots



```js
amazonaws_lightsail.GetInstanceSnapshots({}, context)
```

#### Parameters

### GetInstanceState



```js
amazonaws_lightsail.GetInstanceState({}, context)
```

#### Parameters

### GetInstances



```js
amazonaws_lightsail.GetInstances({}, context)
```

#### Parameters

### GetKeyPair



```js
amazonaws_lightsail.GetKeyPair({}, context)
```

#### Parameters

### GetKeyPairs



```js
amazonaws_lightsail.GetKeyPairs({}, context)
```

#### Parameters

### GetOperation



```js
amazonaws_lightsail.GetOperation({}, context)
```

#### Parameters

### GetOperations



```js
amazonaws_lightsail.GetOperations({}, context)
```

#### Parameters

### GetOperationsForResource



```js
amazonaws_lightsail.GetOperationsForResource({}, context)
```

#### Parameters

### GetRegions



```js
amazonaws_lightsail.GetRegions({}, context)
```

#### Parameters

### GetStaticIp



```js
amazonaws_lightsail.GetStaticIp({}, context)
```

#### Parameters

### GetStaticIps



```js
amazonaws_lightsail.GetStaticIps({}, context)
```

#### Parameters

### ImportKeyPair



```js
amazonaws_lightsail.ImportKeyPair({}, context)
```

#### Parameters

### IsVpcPeered



```js
amazonaws_lightsail.IsVpcPeered({}, context)
```

#### Parameters

### OpenInstancePublicPorts



```js
amazonaws_lightsail.OpenInstancePublicPorts({}, context)
```

#### Parameters

### PeerVpc



```js
amazonaws_lightsail.PeerVpc({}, context)
```

#### Parameters

### RebootInstance



```js
amazonaws_lightsail.RebootInstance({}, context)
```

#### Parameters

### ReleaseStaticIp



```js
amazonaws_lightsail.ReleaseStaticIp({}, context)
```

#### Parameters

### StartInstance



```js
amazonaws_lightsail.StartInstance({}, context)
```

#### Parameters

### StopInstance



```js
amazonaws_lightsail.StopInstance({}, context)
```

#### Parameters

### UnpeerVpc



```js
amazonaws_lightsail.UnpeerVpc({}, context)
```

#### Parameters

### UpdateDomainEntry



```js
amazonaws_lightsail.UpdateDomainEntry({}, context)
```

#### Parameters

