# @datafire/amazonaws_lightsail

Client library for Amazon Lightsail

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_lightsail
```

```js
let datafire = require('datafire');
let amazonaws_lightsail = require('@datafire/amazonaws_lightsail').create();

amazonaws_lightsail.AllocateStaticIp({}).then(data => {
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


### AttachStaticIp



```js
amazonaws_lightsail.AttachStaticIp({}, context)
```


### CloseInstancePublicPorts



```js
amazonaws_lightsail.CloseInstancePublicPorts({}, context)
```


### CreateDomain



```js
amazonaws_lightsail.CreateDomain({}, context)
```


### CreateDomainEntry



```js
amazonaws_lightsail.CreateDomainEntry({}, context)
```


### CreateInstanceSnapshot



```js
amazonaws_lightsail.CreateInstanceSnapshot({}, context)
```


### CreateInstances



```js
amazonaws_lightsail.CreateInstances({}, context)
```


### CreateInstancesFromSnapshot



```js
amazonaws_lightsail.CreateInstancesFromSnapshot({}, context)
```


### CreateKeyPair



```js
amazonaws_lightsail.CreateKeyPair({}, context)
```


### DeleteDomain



```js
amazonaws_lightsail.DeleteDomain({}, context)
```


### DeleteDomainEntry



```js
amazonaws_lightsail.DeleteDomainEntry({}, context)
```


### DeleteInstance



```js
amazonaws_lightsail.DeleteInstance({}, context)
```


### DeleteInstanceSnapshot



```js
amazonaws_lightsail.DeleteInstanceSnapshot({}, context)
```


### DeleteKeyPair



```js
amazonaws_lightsail.DeleteKeyPair({}, context)
```


### DetachStaticIp



```js
amazonaws_lightsail.DetachStaticIp({}, context)
```


### DownloadDefaultKeyPair



```js
amazonaws_lightsail.DownloadDefaultKeyPair({}, context)
```


### GetActiveNames



```js
amazonaws_lightsail.GetActiveNames({}, context)
```


### GetBlueprints



```js
amazonaws_lightsail.GetBlueprints({}, context)
```


### GetBundles



```js
amazonaws_lightsail.GetBundles({}, context)
```


### GetDomain



```js
amazonaws_lightsail.GetDomain({}, context)
```


### GetDomains



```js
amazonaws_lightsail.GetDomains({}, context)
```


### GetInstance



```js
amazonaws_lightsail.GetInstance({}, context)
```


### GetInstanceAccessDetails



```js
amazonaws_lightsail.GetInstanceAccessDetails({}, context)
```


### GetInstanceMetricData



```js
amazonaws_lightsail.GetInstanceMetricData({}, context)
```


### GetInstancePortStates



```js
amazonaws_lightsail.GetInstancePortStates({}, context)
```


### GetInstanceSnapshot



```js
amazonaws_lightsail.GetInstanceSnapshot({}, context)
```


### GetInstanceSnapshots



```js
amazonaws_lightsail.GetInstanceSnapshots({}, context)
```


### GetInstanceState



```js
amazonaws_lightsail.GetInstanceState({}, context)
```


### GetInstances



```js
amazonaws_lightsail.GetInstances({}, context)
```


### GetKeyPair



```js
amazonaws_lightsail.GetKeyPair({}, context)
```


### GetKeyPairs



```js
amazonaws_lightsail.GetKeyPairs({}, context)
```


### GetOperation



```js
amazonaws_lightsail.GetOperation({}, context)
```


### GetOperations



```js
amazonaws_lightsail.GetOperations({}, context)
```


### GetOperationsForResource



```js
amazonaws_lightsail.GetOperationsForResource({}, context)
```


### GetRegions



```js
amazonaws_lightsail.GetRegions({}, context)
```


### GetStaticIp



```js
amazonaws_lightsail.GetStaticIp({}, context)
```


### GetStaticIps



```js
amazonaws_lightsail.GetStaticIps({}, context)
```


### ImportKeyPair



```js
amazonaws_lightsail.ImportKeyPair({}, context)
```


### IsVpcPeered



```js
amazonaws_lightsail.IsVpcPeered({}, context)
```


### OpenInstancePublicPorts



```js
amazonaws_lightsail.OpenInstancePublicPorts({}, context)
```


### PeerVpc



```js
amazonaws_lightsail.PeerVpc({}, context)
```


### RebootInstance



```js
amazonaws_lightsail.RebootInstance({}, context)
```


### ReleaseStaticIp



```js
amazonaws_lightsail.ReleaseStaticIp({}, context)
```


### StartInstance



```js
amazonaws_lightsail.StartInstance({}, context)
```


### StopInstance



```js
amazonaws_lightsail.StopInstance({}, context)
```


### UnpeerVpc



```js
amazonaws_lightsail.UnpeerVpc({}, context)
```


### UpdateDomainEntry



```js
amazonaws_lightsail.UpdateDomainEntry({}, context)
```


