# @datafire/amazonaws_lightsail

Client library for Amazon Lightsail

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_lightsail
```
```js
let amazonaws_lightsail = require('@datafire/amazonaws_lightsail').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_lightsail.AllocateStaticIp({
  "staticIpName": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * staticIpName **required** [ResourceName](#resourcename)

#### Output
* output [AllocateStaticIpResult](#allocatestaticipresult)

### AttachStaticIp



```js
amazonaws_lightsail.AttachStaticIp({
  "staticIpName": "",
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)
  * staticIpName **required** [ResourceName](#resourcename)

#### Output
* output [AttachStaticIpResult](#attachstaticipresult)

### CloseInstancePublicPorts



```js
amazonaws_lightsail.CloseInstancePublicPorts({
  "portInfo": {},
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)
  * portInfo **required** [PortInfo](#portinfo)

#### Output
* output [CloseInstancePublicPortsResult](#closeinstancepublicportsresult)

### CreateDomain



```js
amazonaws_lightsail.CreateDomain({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** [DomainName](#domainname)

#### Output
* output [CreateDomainResult](#createdomainresult)

### CreateDomainEntry



```js
amazonaws_lightsail.CreateDomainEntry({
  "domainName": "",
  "domainEntry": {}
}, context)
```

#### Input
* input `object`
  * domainEntry **required** [DomainEntry](#domainentry)
  * domainName **required** [DomainName](#domainname)

#### Output
* output [CreateDomainEntryResult](#createdomainentryresult)

### CreateInstanceSnapshot



```js
amazonaws_lightsail.CreateInstanceSnapshot({
  "instanceSnapshotName": "",
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)
  * instanceSnapshotName **required** [ResourceName](#resourcename)

#### Output
* output [CreateInstanceSnapshotResult](#createinstancesnapshotresult)

### CreateInstances



```js
amazonaws_lightsail.CreateInstances({
  "instanceNames": [],
  "availabilityZone": "",
  "blueprintId": "",
  "bundleId": ""
}, context)
```

#### Input
* input `object`
  * availabilityZone **required** [string](#string)
  * blueprintId **required** [NonEmptyString](#nonemptystring)
  * bundleId **required** [NonEmptyString](#nonemptystring)
  * customImageName [ResourceName](#resourcename)
  * instanceNames **required** [StringList](#stringlist)
  * keyPairName [ResourceName](#resourcename)
  * userData [string](#string)

#### Output
* output [CreateInstancesResult](#createinstancesresult)

### CreateInstancesFromSnapshot



```js
amazonaws_lightsail.CreateInstancesFromSnapshot({
  "instanceNames": [],
  "availabilityZone": "",
  "instanceSnapshotName": "",
  "bundleId": ""
}, context)
```

#### Input
* input `object`
  * availabilityZone **required** [string](#string)
  * bundleId **required** [NonEmptyString](#nonemptystring)
  * instanceNames **required** [StringList](#stringlist)
  * instanceSnapshotName **required** [ResourceName](#resourcename)
  * keyPairName [ResourceName](#resourcename)
  * userData [string](#string)

#### Output
* output [CreateInstancesFromSnapshotResult](#createinstancesfromsnapshotresult)

### CreateKeyPair



```js
amazonaws_lightsail.CreateKeyPair({
  "keyPairName": ""
}, context)
```

#### Input
* input `object`
  * keyPairName **required** [ResourceName](#resourcename)

#### Output
* output [CreateKeyPairResult](#createkeypairresult)

### DeleteDomain



```js
amazonaws_lightsail.DeleteDomain({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** [DomainName](#domainname)

#### Output
* output [DeleteDomainResult](#deletedomainresult)

### DeleteDomainEntry



```js
amazonaws_lightsail.DeleteDomainEntry({
  "domainName": "",
  "domainEntry": {}
}, context)
```

#### Input
* input `object`
  * domainEntry **required** [DomainEntry](#domainentry)
  * domainName **required** [DomainName](#domainname)

#### Output
* output [DeleteDomainEntryResult](#deletedomainentryresult)

### DeleteInstance



```js
amazonaws_lightsail.DeleteInstance({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)

#### Output
* output [DeleteInstanceResult](#deleteinstanceresult)

### DeleteInstanceSnapshot



```js
amazonaws_lightsail.DeleteInstanceSnapshot({
  "instanceSnapshotName": ""
}, context)
```

#### Input
* input `object`
  * instanceSnapshotName **required** [ResourceName](#resourcename)

#### Output
* output [DeleteInstanceSnapshotResult](#deleteinstancesnapshotresult)

### DeleteKeyPair



```js
amazonaws_lightsail.DeleteKeyPair({
  "keyPairName": ""
}, context)
```

#### Input
* input `object`
  * keyPairName **required** [ResourceName](#resourcename)

#### Output
* output [DeleteKeyPairResult](#deletekeypairresult)

### DetachStaticIp



```js
amazonaws_lightsail.DetachStaticIp({
  "staticIpName": ""
}, context)
```

#### Input
* input `object`
  * staticIpName **required** [ResourceName](#resourcename)

#### Output
* output [DetachStaticIpResult](#detachstaticipresult)

### DownloadDefaultKeyPair



```js
amazonaws_lightsail.DownloadDefaultKeyPair({}, context)
```

#### Input
* input `object`

#### Output
* output [DownloadDefaultKeyPairResult](#downloaddefaultkeypairresult)

### GetActiveNames



```js
amazonaws_lightsail.GetActiveNames({}, context)
```

#### Input
* input `object`
  * pageToken [string](#string)

#### Output
* output [GetActiveNamesResult](#getactivenamesresult)

### GetBlueprints



```js
amazonaws_lightsail.GetBlueprints({}, context)
```

#### Input
* input `object`
  * includeInactive [boolean](#boolean)
  * pageToken [string](#string)

#### Output
* output [GetBlueprintsResult](#getblueprintsresult)

### GetBundles



```js
amazonaws_lightsail.GetBundles({}, context)
```

#### Input
* input `object`
  * includeInactive [boolean](#boolean)
  * pageToken [string](#string)

#### Output
* output [GetBundlesResult](#getbundlesresult)

### GetDomain



```js
amazonaws_lightsail.GetDomain({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** [DomainName](#domainname)

#### Output
* output [GetDomainResult](#getdomainresult)

### GetDomains



```js
amazonaws_lightsail.GetDomains({}, context)
```

#### Input
* input `object`
  * pageToken [string](#string)

#### Output
* output [GetDomainsResult](#getdomainsresult)

### GetInstance



```js
amazonaws_lightsail.GetInstance({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)

#### Output
* output [GetInstanceResult](#getinstanceresult)

### GetInstanceAccessDetails



```js
amazonaws_lightsail.GetInstanceAccessDetails({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)
  * protocol [InstanceAccessProtocol](#instanceaccessprotocol)

#### Output
* output [GetInstanceAccessDetailsResult](#getinstanceaccessdetailsresult)

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

#### Input
* input `object`
  * endTime **required** [timestamp](#timestamp)
  * instanceName **required** [ResourceName](#resourcename)
  * metricName **required** [InstanceMetricName](#instancemetricname)
  * period **required** [MetricPeriod](#metricperiod)
  * startTime **required** [timestamp](#timestamp)
  * statistics **required** [MetricStatisticList](#metricstatisticlist)
  * unit **required** [MetricUnit](#metricunit)

#### Output
* output [GetInstanceMetricDataResult](#getinstancemetricdataresult)

### GetInstancePortStates



```js
amazonaws_lightsail.GetInstancePortStates({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)

#### Output
* output [GetInstancePortStatesResult](#getinstanceportstatesresult)

### GetInstanceSnapshot



```js
amazonaws_lightsail.GetInstanceSnapshot({
  "instanceSnapshotName": ""
}, context)
```

#### Input
* input `object`
  * instanceSnapshotName **required** [ResourceName](#resourcename)

#### Output
* output [GetInstanceSnapshotResult](#getinstancesnapshotresult)

### GetInstanceSnapshots



```js
amazonaws_lightsail.GetInstanceSnapshots({}, context)
```

#### Input
* input `object`
  * pageToken [string](#string)

#### Output
* output [GetInstanceSnapshotsResult](#getinstancesnapshotsresult)

### GetInstanceState



```js
amazonaws_lightsail.GetInstanceState({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)

#### Output
* output [GetInstanceStateResult](#getinstancestateresult)

### GetInstances



```js
amazonaws_lightsail.GetInstances({}, context)
```

#### Input
* input `object`
  * pageToken [string](#string)

#### Output
* output [GetInstancesResult](#getinstancesresult)

### GetKeyPair



```js
amazonaws_lightsail.GetKeyPair({
  "keyPairName": ""
}, context)
```

#### Input
* input `object`
  * keyPairName **required** [ResourceName](#resourcename)

#### Output
* output [GetKeyPairResult](#getkeypairresult)

### GetKeyPairs



```js
amazonaws_lightsail.GetKeyPairs({}, context)
```

#### Input
* input `object`
  * pageToken [string](#string)

#### Output
* output [GetKeyPairsResult](#getkeypairsresult)

### GetOperation



```js
amazonaws_lightsail.GetOperation({
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * operationId **required** [NonEmptyString](#nonemptystring)

#### Output
* output [GetOperationResult](#getoperationresult)

### GetOperations



```js
amazonaws_lightsail.GetOperations({}, context)
```

#### Input
* input `object`
  * pageToken [string](#string)

#### Output
* output [GetOperationsResult](#getoperationsresult)

### GetOperationsForResource



```js
amazonaws_lightsail.GetOperationsForResource({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * pageToken [string](#string)
  * resourceName **required** [ResourceName](#resourcename)

#### Output
* output [GetOperationsForResourceResult](#getoperationsforresourceresult)

### GetRegions



```js
amazonaws_lightsail.GetRegions({}, context)
```

#### Input
* input `object`
  * includeAvailabilityZones [boolean](#boolean)

#### Output
* output [GetRegionsResult](#getregionsresult)

### GetStaticIp



```js
amazonaws_lightsail.GetStaticIp({
  "staticIpName": ""
}, context)
```

#### Input
* input `object`
  * staticIpName **required** [ResourceName](#resourcename)

#### Output
* output [GetStaticIpResult](#getstaticipresult)

### GetStaticIps



```js
amazonaws_lightsail.GetStaticIps({}, context)
```

#### Input
* input `object`
  * pageToken [string](#string)

#### Output
* output [GetStaticIpsResult](#getstaticipsresult)

### ImportKeyPair



```js
amazonaws_lightsail.ImportKeyPair({
  "keyPairName": "",
  "publicKeyBase64": ""
}, context)
```

#### Input
* input `object`
  * keyPairName **required** [ResourceName](#resourcename)
  * publicKeyBase64 **required** [Base64](#base64)

#### Output
* output [ImportKeyPairResult](#importkeypairresult)

### IsVpcPeered



```js
amazonaws_lightsail.IsVpcPeered({}, context)
```

#### Input
* input `object`

#### Output
* output [IsVpcPeeredResult](#isvpcpeeredresult)

### OpenInstancePublicPorts



```js
amazonaws_lightsail.OpenInstancePublicPorts({
  "portInfo": {},
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)
  * portInfo **required** [PortInfo](#portinfo)

#### Output
* output [OpenInstancePublicPortsResult](#openinstancepublicportsresult)

### PeerVpc



```js
amazonaws_lightsail.PeerVpc({}, context)
```

#### Input
* input `object`

#### Output
* output [PeerVpcResult](#peervpcresult)

### PutInstancePublicPorts



```js
amazonaws_lightsail.PutInstancePublicPorts({
  "portInfos": [],
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)
  * portInfos **required** [PortInfoList](#portinfolist)

#### Output
* output [PutInstancePublicPortsResult](#putinstancepublicportsresult)

### RebootInstance



```js
amazonaws_lightsail.RebootInstance({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)

#### Output
* output [RebootInstanceResult](#rebootinstanceresult)

### ReleaseStaticIp



```js
amazonaws_lightsail.ReleaseStaticIp({
  "staticIpName": ""
}, context)
```

#### Input
* input `object`
  * staticIpName **required** [ResourceName](#resourcename)

#### Output
* output [ReleaseStaticIpResult](#releasestaticipresult)

### StartInstance



```js
amazonaws_lightsail.StartInstance({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)

#### Output
* output [StartInstanceResult](#startinstanceresult)

### StopInstance



```js
amazonaws_lightsail.StopInstance({
  "instanceName": ""
}, context)
```

#### Input
* input `object`
  * instanceName **required** [ResourceName](#resourcename)

#### Output
* output [StopInstanceResult](#stopinstanceresult)

### UnpeerVpc



```js
amazonaws_lightsail.UnpeerVpc({}, context)
```

#### Input
* input `object`

#### Output
* output [UnpeerVpcResult](#unpeervpcresult)

### UpdateDomainEntry



```js
amazonaws_lightsail.UpdateDomainEntry({
  "domainName": "",
  "domainEntry": {}
}, context)
```

#### Input
* input `object`
  * domainEntry **required** [DomainEntry](#domainentry)
  * domainName **required** [DomainName](#domainname)

#### Output
* output [UpdateDomainEntryResult](#updatedomainentryresult)



## Definitions

### AccessDeniedException
* AccessDeniedException `object`: Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
  * code [string](#string)
  * docs [string](#string)
  * message [string](#string)
  * tip [string](#string)

### AccessDirection
* AccessDirection `string` (values: inbound, outbound)

### AccountSetupInProgressException
* AccountSetupInProgressException `object`: Lightsail throws this exception when an account is still in the setup in progress state.
  * code [string](#string)
  * docs [string](#string)
  * message [string](#string)
  * tip [string](#string)

### AllocateStaticIpRequest
* AllocateStaticIpRequest `object`
  * staticIpName **required** [ResourceName](#resourcename)

### AllocateStaticIpResult
* AllocateStaticIpResult `object`
  * operations [OperationList](#operationlist)

### AttachStaticIpRequest
* AttachStaticIpRequest `object`
  * instanceName **required** [ResourceName](#resourcename)
  * staticIpName **required** [ResourceName](#resourcename)

### AttachStaticIpResult
* AttachStaticIpResult `object`
  * operations [OperationList](#operationlist)

### AvailabilityZone
* AvailabilityZone `object`: Describes an Availability Zone.
  * state [NonEmptyString](#nonemptystring)
  * zoneName [NonEmptyString](#nonemptystring)

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items [AvailabilityZone](#availabilityzone)

### Base64
* Base64 `string`

### Blueprint
* Blueprint `object`: Describes a blueprint (a virtual private server image).
  * blueprintId [NonEmptyString](#nonemptystring)
  * description [string](#string)
  * group [NonEmptyString](#nonemptystring)
  * isActive [boolean](#boolean)
  * licenseUrl [string](#string)
  * minPower [integer](#integer)
  * name [ResourceName](#resourcename)
  * platform [InstancePlatform](#instanceplatform)
  * productUrl [string](#string)
  * type [BlueprintType](#blueprinttype)
  * version [string](#string)
  * versionCode [string](#string)

### BlueprintList
* BlueprintList `array`
  * items [Blueprint](#blueprint)

### BlueprintType
* BlueprintType `string` (values: os, app)

### Bundle
* Bundle `object`: Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>).
  * bundleId [NonEmptyString](#nonemptystring)
  * cpuCount [integer](#integer)
  * diskSizeInGb [integer](#integer)
  * instanceType [string](#string)
  * isActive [boolean](#boolean)
  * name [string](#string)
  * power [integer](#integer)
  * price [float](#float)
  * ramSizeInGb [float](#float)
  * supportedPlatforms [InstancePlatformList](#instanceplatformlist)
  * transferPerMonthInGb [integer](#integer)

### BundleList
* BundleList `array`
  * items [Bundle](#bundle)

### CloseInstancePublicPortsRequest
* CloseInstancePublicPortsRequest `object`
  * instanceName **required** [ResourceName](#resourcename)
  * portInfo **required** [PortInfo](#portinfo)

### CloseInstancePublicPortsResult
* CloseInstancePublicPortsResult `object`
  * operation [Operation](#operation)

### CreateDomainEntryRequest
* CreateDomainEntryRequest `object`
  * domainEntry **required** [DomainEntry](#domainentry)
  * domainName **required** [DomainName](#domainname)

### CreateDomainEntryResult
* CreateDomainEntryResult `object`
  * operation [Operation](#operation)

### CreateDomainRequest
* CreateDomainRequest `object`
  * domainName **required** [DomainName](#domainname)

### CreateDomainResult
* CreateDomainResult `object`
  * operation [Operation](#operation)

### CreateInstanceSnapshotRequest
* CreateInstanceSnapshotRequest `object`
  * instanceName **required** [ResourceName](#resourcename)
  * instanceSnapshotName **required** [ResourceName](#resourcename)

### CreateInstanceSnapshotResult
* CreateInstanceSnapshotResult `object`
  * operations [OperationList](#operationlist)

### CreateInstancesFromSnapshotRequest
* CreateInstancesFromSnapshotRequest `object`
  * availabilityZone **required** [string](#string)
  * bundleId **required** [NonEmptyString](#nonemptystring)
  * instanceNames **required** [StringList](#stringlist)
  * instanceSnapshotName **required** [ResourceName](#resourcename)
  * keyPairName [ResourceName](#resourcename)
  * userData [string](#string)

### CreateInstancesFromSnapshotResult
* CreateInstancesFromSnapshotResult `object`
  * operations [OperationList](#operationlist)

### CreateInstancesRequest
* CreateInstancesRequest `object`
  * availabilityZone **required** [string](#string)
  * blueprintId **required** [NonEmptyString](#nonemptystring)
  * bundleId **required** [NonEmptyString](#nonemptystring)
  * customImageName [ResourceName](#resourcename)
  * instanceNames **required** [StringList](#stringlist)
  * keyPairName [ResourceName](#resourcename)
  * userData [string](#string)

### CreateInstancesResult
* CreateInstancesResult `object`
  * operations [OperationList](#operationlist)

### CreateKeyPairRequest
* CreateKeyPairRequest `object`
  * keyPairName **required** [ResourceName](#resourcename)

### CreateKeyPairResult
* CreateKeyPairResult `object`
  * keyPair [KeyPair](#keypair)
  * operation [Operation](#operation)
  * privateKeyBase64 [Base64](#base64)
  * publicKeyBase64 [Base64](#base64)

### DeleteDomainEntryRequest
* DeleteDomainEntryRequest `object`
  * domainEntry **required** [DomainEntry](#domainentry)
  * domainName **required** [DomainName](#domainname)

### DeleteDomainEntryResult
* DeleteDomainEntryResult `object`
  * operation [Operation](#operation)

### DeleteDomainRequest
* DeleteDomainRequest `object`
  * domainName **required** [DomainName](#domainname)

### DeleteDomainResult
* DeleteDomainResult `object`
  * operation [Operation](#operation)

### DeleteInstanceRequest
* DeleteInstanceRequest `object`
  * instanceName **required** [ResourceName](#resourcename)

### DeleteInstanceResult
* DeleteInstanceResult `object`
  * operations [OperationList](#operationlist)

### DeleteInstanceSnapshotRequest
* DeleteInstanceSnapshotRequest `object`
  * instanceSnapshotName **required** [ResourceName](#resourcename)

### DeleteInstanceSnapshotResult
* DeleteInstanceSnapshotResult `object`
  * operations [OperationList](#operationlist)

### DeleteKeyPairRequest
* DeleteKeyPairRequest `object`
  * keyPairName **required** [ResourceName](#resourcename)

### DeleteKeyPairResult
* DeleteKeyPairResult `object`
  * operation [Operation](#operation)

### DetachStaticIpRequest
* DetachStaticIpRequest `object`
  * staticIpName **required** [ResourceName](#resourcename)

### DetachStaticIpResult
* DetachStaticIpResult `object`
  * operations [OperationList](#operationlist)

### Disk
* Disk `object`: Describes the hard disk (an SSD).
  * arn [NonEmptyString](#nonemptystring)
  * attachedTo [string](#string)
  * attachmentState [string](#string)
  * createdAt [IsoDate](#isodate)
  * gbInUse [integer](#integer)
  * iops [integer](#integer)
  * isAttached [boolean](#boolean)
  * isSystemDisk [boolean](#boolean)
  * location [ResourceLocation](#resourcelocation)
  * name [ResourceName](#resourcename)
  * path [string](#string)
  * resourceType [ResourceType](#resourcetype)
  * sizeInGb [integer](#integer)
  * supportCode [string](#string)

### DiskList
* DiskList `array`
  * items [Disk](#disk)

### Domain
* Domain `object`: Describes a domain where you are storing recordsets in Lightsail.
  * arn [NonEmptyString](#nonemptystring)
  * createdAt [IsoDate](#isodate)
  * domainEntries [DomainEntryList](#domainentrylist)
  * location [ResourceLocation](#resourcelocation)
  * name [ResourceName](#resourcename)
  * resourceType [ResourceType](#resourcetype)
  * supportCode [string](#string)

### DomainEntry
* DomainEntry `object`: Describes a domain recordset entry.
  * id [NonEmptyString](#nonemptystring)
  * name [DomainName](#domainname)
  * options [DomainEntryOptions](#domainentryoptions)
  * target [string](#string)
  * type [DomainEntryType](#domainentrytype)

### DomainEntryList
* DomainEntryList `array`
  * items [DomainEntry](#domainentry)

### DomainEntryOptions
* DomainEntryOptions `array`
  * items `object`
    * key [DomainEntryOptionsKeys](#domainentryoptionskeys)
    * value [string](#string)

### DomainEntryOptionsKeys
* DomainEntryOptionsKeys `string`

### DomainEntryType
* DomainEntryType `string`

### DomainList
* DomainList `array`
  * items [Domain](#domain)

### DomainName
* DomainName `string`

### DownloadDefaultKeyPairRequest
* DownloadDefaultKeyPairRequest `object`

### DownloadDefaultKeyPairResult
* DownloadDefaultKeyPairResult `object`
  * privateKeyBase64 [Base64](#base64)
  * publicKeyBase64 [Base64](#base64)

### GetActiveNamesRequest
* GetActiveNamesRequest `object`
  * pageToken [string](#string)

### GetActiveNamesResult
* GetActiveNamesResult `object`
  * activeNames [StringList](#stringlist)
  * nextPageToken [string](#string)

### GetBlueprintsRequest
* GetBlueprintsRequest `object`
  * includeInactive [boolean](#boolean)
  * pageToken [string](#string)

### GetBlueprintsResult
* GetBlueprintsResult `object`
  * blueprints [BlueprintList](#blueprintlist)
  * nextPageToken [string](#string)

### GetBundlesRequest
* GetBundlesRequest `object`
  * includeInactive [boolean](#boolean)
  * pageToken [string](#string)

### GetBundlesResult
* GetBundlesResult `object`
  * bundles [BundleList](#bundlelist)
  * nextPageToken [string](#string)

### GetDomainRequest
* GetDomainRequest `object`
  * domainName **required** [DomainName](#domainname)

### GetDomainResult
* GetDomainResult `object`
  * domain [Domain](#domain)

### GetDomainsRequest
* GetDomainsRequest `object`
  * pageToken [string](#string)

### GetDomainsResult
* GetDomainsResult `object`
  * domains [DomainList](#domainlist)
  * nextPageToken [string](#string)

### GetInstanceAccessDetailsRequest
* GetInstanceAccessDetailsRequest `object`
  * instanceName **required** [ResourceName](#resourcename)
  * protocol [InstanceAccessProtocol](#instanceaccessprotocol)

### GetInstanceAccessDetailsResult
* GetInstanceAccessDetailsResult `object`
  * accessDetails [InstanceAccessDetails](#instanceaccessdetails)

### GetInstanceMetricDataRequest
* GetInstanceMetricDataRequest `object`
  * endTime **required** [timestamp](#timestamp)
  * instanceName **required** [ResourceName](#resourcename)
  * metricName **required** [InstanceMetricName](#instancemetricname)
  * period **required** [MetricPeriod](#metricperiod)
  * startTime **required** [timestamp](#timestamp)
  * statistics **required** [MetricStatisticList](#metricstatisticlist)
  * unit **required** [MetricUnit](#metricunit)

### GetInstanceMetricDataResult
* GetInstanceMetricDataResult `object`
  * metricData [MetricDatapointList](#metricdatapointlist)
  * metricName [InstanceMetricName](#instancemetricname)

### GetInstancePortStatesRequest
* GetInstancePortStatesRequest `object`
  * instanceName **required** [ResourceName](#resourcename)

### GetInstancePortStatesResult
* GetInstancePortStatesResult `object`
  * portStates [InstancePortStateList](#instanceportstatelist)

### GetInstanceRequest
* GetInstanceRequest `object`
  * instanceName **required** [ResourceName](#resourcename)

### GetInstanceResult
* GetInstanceResult `object`
  * instance [Instance](#instance)

### GetInstanceSnapshotRequest
* GetInstanceSnapshotRequest `object`
  * instanceSnapshotName **required** [ResourceName](#resourcename)

### GetInstanceSnapshotResult
* GetInstanceSnapshotResult `object`
  * instanceSnapshot [InstanceSnapshot](#instancesnapshot)

### GetInstanceSnapshotsRequest
* GetInstanceSnapshotsRequest `object`
  * pageToken [string](#string)

### GetInstanceSnapshotsResult
* GetInstanceSnapshotsResult `object`
  * instanceSnapshots [InstanceSnapshotList](#instancesnapshotlist)
  * nextPageToken [string](#string)

### GetInstanceStateRequest
* GetInstanceStateRequest `object`
  * instanceName **required** [ResourceName](#resourcename)

### GetInstanceStateResult
* GetInstanceStateResult `object`
  * state [InstanceState](#instancestate)

### GetInstancesRequest
* GetInstancesRequest `object`
  * pageToken [string](#string)

### GetInstancesResult
* GetInstancesResult `object`
  * instances [InstanceList](#instancelist)
  * nextPageToken [string](#string)

### GetKeyPairRequest
* GetKeyPairRequest `object`
  * keyPairName **required** [ResourceName](#resourcename)

### GetKeyPairResult
* GetKeyPairResult `object`
  * keyPair [KeyPair](#keypair)

### GetKeyPairsRequest
* GetKeyPairsRequest `object`
  * pageToken [string](#string)

### GetKeyPairsResult
* GetKeyPairsResult `object`
  * keyPairs [KeyPairList](#keypairlist)
  * nextPageToken [string](#string)

### GetOperationRequest
* GetOperationRequest `object`
  * operationId **required** [NonEmptyString](#nonemptystring)

### GetOperationResult
* GetOperationResult `object`
  * operation [Operation](#operation)

### GetOperationsForResourceRequest
* GetOperationsForResourceRequest `object`
  * pageToken [string](#string)
  * resourceName **required** [ResourceName](#resourcename)

### GetOperationsForResourceResult
* GetOperationsForResourceResult `object`
  * nextPageCount [string](#string)
  * nextPageToken [string](#string)
  * operations [OperationList](#operationlist)

### GetOperationsRequest
* GetOperationsRequest `object`
  * pageToken [string](#string)

### GetOperationsResult
* GetOperationsResult `object`
  * nextPageToken [string](#string)
  * operations [OperationList](#operationlist)

### GetRegionsRequest
* GetRegionsRequest `object`
  * includeAvailabilityZones [boolean](#boolean)

### GetRegionsResult
* GetRegionsResult `object`
  * regions [RegionList](#regionlist)

### GetStaticIpRequest
* GetStaticIpRequest `object`
  * staticIpName **required** [ResourceName](#resourcename)

### GetStaticIpResult
* GetStaticIpResult `object`
  * staticIp [StaticIp](#staticip)

### GetStaticIpsRequest
* GetStaticIpsRequest `object`
  * pageToken [string](#string)

### GetStaticIpsResult
* GetStaticIpsResult `object`
  * nextPageToken [string](#string)
  * staticIps [StaticIpList](#staticiplist)

### ImportKeyPairRequest
* ImportKeyPairRequest `object`
  * keyPairName **required** [ResourceName](#resourcename)
  * publicKeyBase64 **required** [Base64](#base64)

### ImportKeyPairResult
* ImportKeyPairResult `object`
  * operation [Operation](#operation)

### Instance
* Instance `object`: Describes an instance (a virtual private server).
  * arn [NonEmptyString](#nonemptystring)
  * blueprintId [NonEmptyString](#nonemptystring)
  * blueprintName [NonEmptyString](#nonemptystring)
  * bundleId [NonEmptyString](#nonemptystring)
  * createdAt [IsoDate](#isodate)
  * hardware [InstanceHardware](#instancehardware)
  * ipv6Address [IpV6Address](#ipv6address)
  * isStaticIp [boolean](#boolean)
  * location [ResourceLocation](#resourcelocation)
  * name [ResourceName](#resourcename)
  * networking [InstanceNetworking](#instancenetworking)
  * privateIpAddress [IpAddress](#ipaddress)
  * publicIpAddress [IpAddress](#ipaddress)
  * resourceType [ResourceType](#resourcetype)
  * sshKeyName [ResourceName](#resourcename)
  * state [InstanceState](#instancestate)
  * supportCode [string](#string)
  * username [NonEmptyString](#nonemptystring)

### InstanceAccessDetails
* InstanceAccessDetails `object`: The parameters for gaining temporary access to one of your Amazon Lightsail instances.
  * certKey [string](#string)
  * expiresAt [IsoDate](#isodate)
  * instanceName [ResourceName](#resourcename)
  * ipAddress [IpAddress](#ipaddress)
  * password [string](#string)
  * passwordData [PasswordData](#passworddata)
  * privateKey [string](#string)
  * protocol [InstanceAccessProtocol](#instanceaccessprotocol)
  * username [string](#string)

### InstanceAccessProtocol
* InstanceAccessProtocol `string` (values: ssh, rdp)

### InstanceHardware
* InstanceHardware `object`: Describes the hardware for the instance.
  * cpuCount [integer](#integer)
  * disks [DiskList](#disklist)
  * ramSizeInGb [float](#float)

### InstanceList
* InstanceList `array`
  * items [Instance](#instance)

### InstanceMetricName
* InstanceMetricName `string` (values: CPUUtilization, NetworkIn, NetworkOut, StatusCheckFailed, StatusCheckFailed_Instance, StatusCheckFailed_System)

### InstanceNetworking
* InstanceNetworking `object`: Describes monthly data transfer rates and port information for an instance.
  * monthlyTransfer [MonthlyTransfer](#monthlytransfer)
  * ports [InstancePortInfoList](#instanceportinfolist)

### InstancePlatform
* InstancePlatform `string` (values: LINUX_UNIX, WINDOWS)

### InstancePlatformList
* InstancePlatformList `array`
  * items [InstancePlatform](#instanceplatform)

### InstancePortInfo
* InstancePortInfo `object`: Describes information about the instance ports.
  * accessDirection [AccessDirection](#accessdirection)
  * accessFrom [string](#string)
  * accessType [PortAccessType](#portaccesstype)
  * commonName [string](#string)
  * fromPort [Port](#port)
  * protocol [NetworkProtocol](#networkprotocol)
  * toPort [Port](#port)

### InstancePortInfoList
* InstancePortInfoList `array`
  * items [InstancePortInfo](#instanceportinfo)

### InstancePortState
* InstancePortState `object`: Describes the port state.
  * fromPort [Port](#port)
  * protocol [NetworkProtocol](#networkprotocol)
  * state [PortState](#portstate)
  * toPort [Port](#port)

### InstancePortStateList
* InstancePortStateList `array`
  * items [InstancePortState](#instanceportstate)

### InstanceSnapshot
* InstanceSnapshot `object`: Describes the snapshot of the virtual private server, or <i>instance</i>.
  * arn [NonEmptyString](#nonemptystring)
  * createdAt [IsoDate](#isodate)
  * fromBlueprintId [string](#string)
  * fromBundleId [string](#string)
  * fromInstanceArn [NonEmptyString](#nonemptystring)
  * fromInstanceName [ResourceName](#resourcename)
  * location [ResourceLocation](#resourcelocation)
  * name [ResourceName](#resourcename)
  * progress [string](#string)
  * resourceType [ResourceType](#resourcetype)
  * sizeInGb [integer](#integer)
  * state [InstanceSnapshotState](#instancesnapshotstate)
  * supportCode [string](#string)

### InstanceSnapshotList
* InstanceSnapshotList `array`
  * items [InstanceSnapshot](#instancesnapshot)

### InstanceSnapshotState
* InstanceSnapshotState `string` (values: pending, error, available)

### InstanceState
* InstanceState `object`: Describes the virtual private server (or <i>instance</i>) status.
  * code [integer](#integer)
  * name [string](#string)

### InvalidInputException
* InvalidInputException `object`: <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
  * code [string](#string)
  * docs [string](#string)
  * message [string](#string)
  * tip [string](#string)

### IpAddress
* IpAddress `string`

### IpV6Address
* IpV6Address `string`

### IsVpcPeeredRequest
* IsVpcPeeredRequest `object`

### IsVpcPeeredResult
* IsVpcPeeredResult `object`
  * isPeered [boolean](#boolean)

### IsoDate
* IsoDate `string`

### KeyPair
* KeyPair `object`: Describes the SSH key pair.
  * arn [NonEmptyString](#nonemptystring)
  * createdAt [IsoDate](#isodate)
  * fingerprint [Base64](#base64)
  * location [ResourceLocation](#resourcelocation)
  * name [ResourceName](#resourcename)
  * resourceType [ResourceType](#resourcetype)
  * supportCode [string](#string)

### KeyPairList
* KeyPairList `array`
  * items [KeyPair](#keypair)

### MetricDatapoint
* MetricDatapoint `object`: Describes the metric data point.
  * average [double](#double)
  * maximum [double](#double)
  * minimum [double](#double)
  * sampleCount [double](#double)
  * sum [double](#double)
  * timestamp [timestamp](#timestamp)
  * unit [MetricUnit](#metricunit)

### MetricDatapointList
* MetricDatapointList `array`
  * items [MetricDatapoint](#metricdatapoint)

### MetricPeriod
* MetricPeriod `integer`

### MetricStatistic
* MetricStatistic `string` (values: Minimum, Maximum, Sum, Average, SampleCount)

### MetricStatisticList
* MetricStatisticList `array`
  * items [MetricStatistic](#metricstatistic)

### MetricUnit
* MetricUnit `string` (values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, None)

### MonthlyTransfer
* MonthlyTransfer `object`: Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>).
  * gbPerMonthAllocated [integer](#integer)

### NetworkProtocol
* NetworkProtocol `string` (values: tcp, all, udp)

### NonEmptyString
* NonEmptyString `string`

### NotFoundException
* NotFoundException `object`: Lightsail throws this exception when it cannot find a resource.
  * code [string](#string)
  * docs [string](#string)
  * message [string](#string)
  * tip [string](#string)

### OpenInstancePublicPortsRequest
* OpenInstancePublicPortsRequest `object`
  * instanceName **required** [ResourceName](#resourcename)
  * portInfo **required** [PortInfo](#portinfo)

### OpenInstancePublicPortsResult
* OpenInstancePublicPortsResult `object`
  * operation [Operation](#operation)

### Operation
* Operation `object`: Describes the API operation.
  * createdAt [IsoDate](#isodate)
  * errorCode [string](#string)
  * errorDetails [string](#string)
  * id [NonEmptyString](#nonemptystring)
  * isTerminal [boolean](#boolean)
  * location [ResourceLocation](#resourcelocation)
  * operationDetails [string](#string)
  * operationType [OperationType](#operationtype)
  * resourceName [ResourceName](#resourcename)
  * resourceType [ResourceType](#resourcetype)
  * status [OperationStatus](#operationstatus)
  * statusChangedAt [IsoDate](#isodate)

### OperationFailureException
* OperationFailureException `object`: Lightsail throws this exception when an operation fails to execute.
  * code [string](#string)
  * docs [string](#string)
  * message [string](#string)
  * tip [string](#string)

### OperationList
* OperationList `array`
  * items [Operation](#operation)

### OperationStatus
* OperationStatus `string` (values: NotStarted, Started, Failed, Completed)

### OperationType
* OperationType `string` (values: DeleteInstance, CreateInstance, StopInstance, StartInstance, RebootInstance, OpenInstancePublicPorts, PutInstancePublicPorts, CloseInstancePublicPorts, AllocateStaticIp, ReleaseStaticIp, AttachStaticIp, DetachStaticIp, UpdateDomainEntry, DeleteDomainEntry, CreateDomain, DeleteDomain, CreateInstanceSnapshot, DeleteInstanceSnapshot, CreateInstancesFromSnapshot)

### PasswordData
* PasswordData `object`: The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
  * ciphertext [string](#string)
  * keyPairName [ResourceName](#resourcename)

### PeerVpcRequest
* PeerVpcRequest `object`

### PeerVpcResult
* PeerVpcResult `object`
  * operation [Operation](#operation)

### Port
* Port `integer`

### PortAccessType
* PortAccessType `string` (values: Public, Private)

### PortInfo
* PortInfo `object`: Describes information about the ports on your virtual private server (or <i>instance</i>).
  * fromPort [Port](#port)
  * protocol [NetworkProtocol](#networkprotocol)
  * toPort [Port](#port)

### PortInfoList
* PortInfoList `array`
  * items [PortInfo](#portinfo)

### PortState
* PortState `string` (values: open, closed)

### PutInstancePublicPortsRequest
* PutInstancePublicPortsRequest `object`
  * instanceName **required** [ResourceName](#resourcename)
  * portInfos **required** [PortInfoList](#portinfolist)

### PutInstancePublicPortsResult
* PutInstancePublicPortsResult `object`
  * operation [Operation](#operation)

### RebootInstanceRequest
* RebootInstanceRequest `object`
  * instanceName **required** [ResourceName](#resourcename)

### RebootInstanceResult
* RebootInstanceResult `object`
  * operations [OperationList](#operationlist)

### Region
* Region `object`: Describes the AWS Region.
  * availabilityZones [AvailabilityZoneList](#availabilityzonelist)
  * continentCode [string](#string)
  * description [string](#string)
  * displayName [string](#string)
  * name [RegionName](#regionname)

### RegionList
* RegionList `array`
  * items [Region](#region)

### RegionName
* RegionName `string` (values: us-east-1, us-east-2, us-west-1, us-west-2, eu-west-1, eu-central-1, ap-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2)

### ReleaseStaticIpRequest
* ReleaseStaticIpRequest `object`
  * staticIpName **required** [ResourceName](#resourcename)

### ReleaseStaticIpResult
* ReleaseStaticIpResult `object`
  * operations [OperationList](#operationlist)

### ResourceLocation
* ResourceLocation `object`: Describes the resource location.
  * availabilityZone [string](#string)
  * regionName [RegionName](#regionname)

### ResourceName
* ResourceName `string`

### ResourceType
* ResourceType `string` (values: Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc)

### ServiceException
* ServiceException `object`: A general service exception.
  * code [string](#string)
  * docs [string](#string)
  * message [string](#string)
  * tip [string](#string)

### StartInstanceRequest
* StartInstanceRequest `object`
  * instanceName **required** [ResourceName](#resourcename)

### StartInstanceResult
* StartInstanceResult `object`
  * operations [OperationList](#operationlist)

### StaticIp
* StaticIp `object`: Describes the static IP.
  * arn [NonEmptyString](#nonemptystring)
  * attachedTo [ResourceName](#resourcename)
  * createdAt [IsoDate](#isodate)
  * ipAddress [IpAddress](#ipaddress)
  * isAttached [boolean](#boolean)
  * location [ResourceLocation](#resourcelocation)
  * name [ResourceName](#resourcename)
  * resourceType [ResourceType](#resourcetype)
  * supportCode [string](#string)

### StaticIpList
* StaticIpList `array`
  * items [StaticIp](#staticip)

### StopInstanceRequest
* StopInstanceRequest `object`
  * instanceName **required** [ResourceName](#resourcename)

### StopInstanceResult
* StopInstanceResult `object`
  * operations [OperationList](#operationlist)

### StringList
* StringList `array`
  * items [string](#string)

### UnauthenticatedException
* UnauthenticatedException `object`: Lightsail throws this exception when the user has not been authenticated.
  * code [string](#string)
  * docs [string](#string)
  * message [string](#string)
  * tip [string](#string)

### UnpeerVpcRequest
* UnpeerVpcRequest `object`

### UnpeerVpcResult
* UnpeerVpcResult `object`
  * operation [Operation](#operation)

### UpdateDomainEntryRequest
* UpdateDomainEntryRequest `object`
  * domainEntry **required** [DomainEntry](#domainentry)
  * domainName **required** [DomainName](#domainname)

### UpdateDomainEntryResult
* UpdateDomainEntryResult `object`
  * operations [OperationList](#operationlist)

### boolean
* boolean `boolean`

### double
* double `number`

### float
* float `number`

### integer
* integer `integer`

### string
* string `string`

### timestamp
* timestamp `string`


