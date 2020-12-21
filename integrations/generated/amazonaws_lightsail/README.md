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

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Lightsail is the easiest way to get started with Amazon Web Services (AWS) for developers who need to build websites or web applications. It includes everything you need to launch your project quickly - instances (virtual private servers), container services, managed databases, SSD-based block storage, static IP addresses, load balancers, content delivery network (CDN) distributions, DNS management of registered domains, and resource snapshots (backups) - for a low, predictable monthly price.</p> <p>You can manage your Lightsail resources using the Lightsail console, Lightsail API, AWS Command Line Interface (AWS CLI), or SDKs. For more information about Lightsail concepts and tasks, see the <a href="http://lightsail.aws.amazon.com/ls/docs/how-to/article/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Lightsail Dev Guide</a>.</p> <p>This API Reference provides detailed information about the actions, data types, parameters, and errors of the Lightsail service. For more information about the supported AWS Regions, endpoints, and service quotas of the Lightsail service, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail Endpoints and Quotas</a> in the <i>AWS General Reference</i>.</p>

## Actions

### AllocateStaticIp



```js
amazonaws_lightsail.AllocateStaticIp({
  "staticIpName": null
}, context)
```

#### Input
* input `object`
  * staticIpName **required**

#### Output
* output [AllocateStaticIpResult](#allocatestaticipresult)

### AttachCertificateToDistribution



```js
amazonaws_lightsail.AttachCertificateToDistribution({
  "distributionName": null,
  "certificateName": null
}, context)
```

#### Input
* input `object`
  * certificateName **required**
  * distributionName **required**

#### Output
* output [AttachCertificateToDistributionResult](#attachcertificatetodistributionresult)

### AttachDisk



```js
amazonaws_lightsail.AttachDisk({
  "diskName": null,
  "instanceName": null,
  "diskPath": null
}, context)
```

#### Input
* input `object`
  * diskName **required**
  * diskPath **required**
  * instanceName **required**

#### Output
* output [AttachDiskResult](#attachdiskresult)

### AttachInstancesToLoadBalancer



```js
amazonaws_lightsail.AttachInstancesToLoadBalancer({
  "loadBalancerName": null,
  "instanceNames": null
}, context)
```

#### Input
* input `object`
  * instanceNames **required**
    * items [ResourceName](#resourcename)
  * loadBalancerName **required**

#### Output
* output [AttachInstancesToLoadBalancerResult](#attachinstancestoloadbalancerresult)

### AttachLoadBalancerTlsCertificate



```js
amazonaws_lightsail.AttachLoadBalancerTlsCertificate({
  "loadBalancerName": null,
  "certificateName": null
}, context)
```

#### Input
* input `object`
  * certificateName **required**
  * loadBalancerName **required**

#### Output
* output [AttachLoadBalancerTlsCertificateResult](#attachloadbalancertlscertificateresult)

### AttachStaticIp



```js
amazonaws_lightsail.AttachStaticIp({
  "staticIpName": null,
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**
  * staticIpName **required**

#### Output
* output [AttachStaticIpResult](#attachstaticipresult)

### CloseInstancePublicPorts



```js
amazonaws_lightsail.CloseInstancePublicPorts({
  "portInfo": null,
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**
  * portInfo **required**
    * cidrListAliases
      * items [string](#string)
    * cidrs
      * items [string](#string)
    * fromPort
    * protocol
    * toPort

#### Output
* output [CloseInstancePublicPortsResult](#closeinstancepublicportsresult)

### CopySnapshot



```js
amazonaws_lightsail.CopySnapshot({
  "targetSnapshotName": null,
  "sourceRegion": null
}, context)
```

#### Input
* input `object`
  * restoreDate
  * sourceRegion **required**
  * sourceResourceName
  * sourceSnapshotName
  * targetSnapshotName **required**
  * useLatestRestorableAutoSnapshot

#### Output
* output [CopySnapshotResult](#copysnapshotresult)

### CreateCertificate



```js
amazonaws_lightsail.CreateCertificate({
  "certificateName": null,
  "domainName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * certificateName **required**
  * domainName **required**
  * subjectAlternativeNames
    * items [DomainName](#domainname)

#### Output
* output [CreateCertificateResult](#createcertificateresult)

### CreateCloudFormationStack



```js
amazonaws_lightsail.CreateCloudFormationStack({
  "instances": null
}, context)
```

#### Input
* input `object`
  * instances **required**
    * items [InstanceEntry](#instanceentry)

#### Output
* output [CreateCloudFormationStackResult](#createcloudformationstackresult)

### CreateContactMethod



```js
amazonaws_lightsail.CreateContactMethod({
  "protocol": null,
  "contactEndpoint": null
}, context)
```

#### Input
* input `object`
  * contactEndpoint **required**
  * protocol **required**

#### Output
* output [CreateContactMethodResult](#createcontactmethodresult)

### CreateContainerService



```js
amazonaws_lightsail.CreateContainerService({
  "serviceName": null,
  "power": null,
  "scale": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * deployment
    * containers
    * publicEndpoint
      * containerName **required**
      * containerPort **required**
      * healthCheck
        * healthyThreshold
        * intervalSeconds
        * path
        * successCodes
        * timeoutSeconds
        * unhealthyThreshold
  * power **required**
  * publicDomainNames
  * scale **required**
  * serviceName **required**

#### Output
* output [CreateContainerServiceResult](#createcontainerserviceresult)

### CreateContainerServiceDeployment



```js
amazonaws_lightsail.CreateContainerServiceDeployment({
  "serviceName": null
}, context)
```

#### Input
* input `object`
  * containers
  * publicEndpoint
    * containerName **required**
    * containerPort **required**
    * healthCheck
      * healthyThreshold
      * intervalSeconds
      * path
      * successCodes
      * timeoutSeconds
      * unhealthyThreshold
  * serviceName **required**

#### Output
* output [CreateContainerServiceDeploymentResult](#createcontainerservicedeploymentresult)

### CreateContainerServiceRegistryLogin



```js
amazonaws_lightsail.CreateContainerServiceRegistryLogin({}, context)
```

#### Input
* input `object`

#### Output
* output [CreateContainerServiceRegistryLoginResult](#createcontainerserviceregistryloginresult)

### CreateDisk



```js
amazonaws_lightsail.CreateDisk({
  "diskName": null,
  "availabilityZone": null,
  "sizeInGb": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOnRequest](#addonrequest)
  * availabilityZone **required**
  * diskName **required**
  * sizeInGb **required**

#### Output
* output [CreateDiskResult](#creatediskresult)

### CreateDiskFromSnapshot



```js
amazonaws_lightsail.CreateDiskFromSnapshot({
  "diskName": null,
  "availabilityZone": null,
  "sizeInGb": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOnRequest](#addonrequest)
  * availabilityZone **required**
  * diskName **required**
  * diskSnapshotName
  * restoreDate
  * sizeInGb **required**
  * sourceDiskName
  * useLatestRestorableAutoSnapshot

#### Output
* output [CreateDiskFromSnapshotResult](#creatediskfromsnapshotresult)

### CreateDiskSnapshot



```js
amazonaws_lightsail.CreateDiskSnapshot({
  "diskSnapshotName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * diskName
  * diskSnapshotName **required**
  * instanceName

#### Output
* output [CreateDiskSnapshotResult](#createdisksnapshotresult)

### CreateDistribution



```js
amazonaws_lightsail.CreateDistribution({
  "distributionName": null,
  "origin": null,
  "defaultCacheBehavior": null,
  "bundleId": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * bundleId **required**
  * cacheBehaviorSettings
    * allowedHTTPMethods
    * cachedHTTPMethods
    * defaultTTL
    * forwardedCookies
      * cookiesAllowList
        * items [string](#string)
      * option
    * forwardedHeaders
      * headersAllowList
        * items [HeaderEnum](#headerenum)
      * option
    * forwardedQueryStrings
      * option
      * queryStringsAllowList
        * items [string](#string)
    * maximumTTL
    * minimumTTL
  * cacheBehaviors
    * items [CacheBehaviorPerPath](#cachebehaviorperpath)
  * defaultCacheBehavior **required**
    * behavior
  * distributionName **required**
  * origin **required**
    * name
    * protocolPolicy
    * regionName

#### Output
* output [CreateDistributionResult](#createdistributionresult)

### CreateDomain



```js
amazonaws_lightsail.CreateDomain({
  "domainName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * domainName **required**

#### Output
* output [CreateDomainResult](#createdomainresult)

### CreateDomainEntry



```js
amazonaws_lightsail.CreateDomainEntry({
  "domainName": null,
  "domainEntry": null
}, context)
```

#### Input
* input `object`
  * domainEntry **required**
    * id
    * isAlias
    * name
    * options
    * target
    * type
  * domainName **required**

#### Output
* output [CreateDomainEntryResult](#createdomainentryresult)

### CreateInstanceSnapshot



```js
amazonaws_lightsail.CreateInstanceSnapshot({
  "instanceSnapshotName": null,
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * instanceName **required**
  * instanceSnapshotName **required**

#### Output
* output [CreateInstanceSnapshotResult](#createinstancesnapshotresult)

### CreateInstances



```js
amazonaws_lightsail.CreateInstances({
  "instanceNames": null,
  "availabilityZone": null,
  "blueprintId": null,
  "bundleId": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOnRequest](#addonrequest)
  * availabilityZone **required**
  * blueprintId **required**
  * bundleId **required**
  * customImageName
  * instanceNames **required**
    * items [string](#string)
  * keyPairName
  * userData

#### Output
* output [CreateInstancesResult](#createinstancesresult)

### CreateInstancesFromSnapshot



```js
amazonaws_lightsail.CreateInstancesFromSnapshot({
  "instanceNames": null,
  "availabilityZone": null,
  "bundleId": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOnRequest](#addonrequest)
  * attachedDiskMapping
  * availabilityZone **required**
  * bundleId **required**
  * instanceNames **required**
    * items [string](#string)
  * instanceSnapshotName
  * keyPairName
  * restoreDate
  * sourceInstanceName
  * useLatestRestorableAutoSnapshot
  * userData

#### Output
* output [CreateInstancesFromSnapshotResult](#createinstancesfromsnapshotresult)

### CreateKeyPair



```js
amazonaws_lightsail.CreateKeyPair({
  "keyPairName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * keyPairName **required**

#### Output
* output [CreateKeyPairResult](#createkeypairresult)

### CreateLoadBalancer



```js
amazonaws_lightsail.CreateLoadBalancer({
  "loadBalancerName": null,
  "instancePort": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * certificateAlternativeNames
    * items [DomainName](#domainname)
  * certificateDomainName
  * certificateName
  * healthCheckPath
  * instancePort **required**
  * loadBalancerName **required**

#### Output
* output [CreateLoadBalancerResult](#createloadbalancerresult)

### CreateLoadBalancerTlsCertificate



```js
amazonaws_lightsail.CreateLoadBalancerTlsCertificate({
  "loadBalancerName": null,
  "certificateName": null,
  "certificateDomainName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * certificateAlternativeNames
    * items [DomainName](#domainname)
  * certificateDomainName **required**
  * certificateName **required**
  * loadBalancerName **required**

#### Output
* output [CreateLoadBalancerTlsCertificateResult](#createloadbalancertlscertificateresult)

### CreateRelationalDatabase



```js
amazonaws_lightsail.CreateRelationalDatabase({
  "relationalDatabaseName": null,
  "relationalDatabaseBlueprintId": null,
  "relationalDatabaseBundleId": null,
  "masterDatabaseName": null,
  "masterUsername": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * availabilityZone
  * masterDatabaseName **required**
  * masterUserPassword
  * masterUsername **required**
  * preferredBackupWindow
  * preferredMaintenanceWindow
  * publiclyAccessible
  * relationalDatabaseBlueprintId **required**
  * relationalDatabaseBundleId **required**
  * relationalDatabaseName **required**

#### Output
* output [CreateRelationalDatabaseResult](#createrelationaldatabaseresult)

### CreateRelationalDatabaseFromSnapshot



```js
amazonaws_lightsail.CreateRelationalDatabaseFromSnapshot({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * availabilityZone
  * publiclyAccessible
  * relationalDatabaseBundleId
  * relationalDatabaseName **required**
  * relationalDatabaseSnapshotName
  * restoreTime
  * sourceRelationalDatabaseName
  * useLatestRestorableTime

#### Output
* output [CreateRelationalDatabaseFromSnapshotResult](#createrelationaldatabasefromsnapshotresult)

### CreateRelationalDatabaseSnapshot



```js
amazonaws_lightsail.CreateRelationalDatabaseSnapshot({
  "relationalDatabaseName": null,
  "relationalDatabaseSnapshotName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * relationalDatabaseName **required**
  * relationalDatabaseSnapshotName **required**

#### Output
* output [CreateRelationalDatabaseSnapshotResult](#createrelationaldatabasesnapshotresult)

### DeleteAlarm



```js
amazonaws_lightsail.DeleteAlarm({
  "alarmName": null
}, context)
```

#### Input
* input `object`
  * alarmName **required**

#### Output
* output [DeleteAlarmResult](#deletealarmresult)

### DeleteAutoSnapshot



```js
amazonaws_lightsail.DeleteAutoSnapshot({
  "resourceName": null,
  "date": null
}, context)
```

#### Input
* input `object`
  * date **required**
  * resourceName **required**

#### Output
* output [DeleteAutoSnapshotResult](#deleteautosnapshotresult)

### DeleteCertificate



```js
amazonaws_lightsail.DeleteCertificate({
  "certificateName": null
}, context)
```

#### Input
* input `object`
  * certificateName **required**

#### Output
* output [DeleteCertificateResult](#deletecertificateresult)

### DeleteContactMethod



```js
amazonaws_lightsail.DeleteContactMethod({
  "protocol": null
}, context)
```

#### Input
* input `object`
  * protocol **required**

#### Output
* output [DeleteContactMethodResult](#deletecontactmethodresult)

### DeleteContainerImage



```js
amazonaws_lightsail.DeleteContainerImage({
  "serviceName": null,
  "image": null
}, context)
```

#### Input
* input `object`
  * image **required**
  * serviceName **required**

#### Output
* output [DeleteContainerImageResult](#deletecontainerimageresult)

### DeleteContainerService



```js
amazonaws_lightsail.DeleteContainerService({
  "serviceName": null
}, context)
```

#### Input
* input `object`
  * serviceName **required**

#### Output
* output [DeleteContainerServiceResult](#deletecontainerserviceresult)

### DeleteDisk



```js
amazonaws_lightsail.DeleteDisk({
  "diskName": null
}, context)
```

#### Input
* input `object`
  * diskName **required**
  * forceDeleteAddOns

#### Output
* output [DeleteDiskResult](#deletediskresult)

### DeleteDiskSnapshot



```js
amazonaws_lightsail.DeleteDiskSnapshot({
  "diskSnapshotName": null
}, context)
```

#### Input
* input `object`
  * diskSnapshotName **required**

#### Output
* output [DeleteDiskSnapshotResult](#deletedisksnapshotresult)

### DeleteDistribution



```js
amazonaws_lightsail.DeleteDistribution({}, context)
```

#### Input
* input `object`
  * distributionName

#### Output
* output [DeleteDistributionResult](#deletedistributionresult)

### DeleteDomain



```js
amazonaws_lightsail.DeleteDomain({
  "domainName": null
}, context)
```

#### Input
* input `object`
  * domainName **required**

#### Output
* output [DeleteDomainResult](#deletedomainresult)

### DeleteDomainEntry



```js
amazonaws_lightsail.DeleteDomainEntry({
  "domainName": null,
  "domainEntry": null
}, context)
```

#### Input
* input `object`
  * domainEntry **required**
    * id
    * isAlias
    * name
    * options
    * target
    * type
  * domainName **required**

#### Output
* output [DeleteDomainEntryResult](#deletedomainentryresult)

### DeleteInstance



```js
amazonaws_lightsail.DeleteInstance({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * forceDeleteAddOns
  * instanceName **required**

#### Output
* output [DeleteInstanceResult](#deleteinstanceresult)

### DeleteInstanceSnapshot



```js
amazonaws_lightsail.DeleteInstanceSnapshot({
  "instanceSnapshotName": null
}, context)
```

#### Input
* input `object`
  * instanceSnapshotName **required**

#### Output
* output [DeleteInstanceSnapshotResult](#deleteinstancesnapshotresult)

### DeleteKeyPair



```js
amazonaws_lightsail.DeleteKeyPair({
  "keyPairName": null
}, context)
```

#### Input
* input `object`
  * keyPairName **required**

#### Output
* output [DeleteKeyPairResult](#deletekeypairresult)

### DeleteKnownHostKeys



```js
amazonaws_lightsail.DeleteKnownHostKeys({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**

#### Output
* output [DeleteKnownHostKeysResult](#deleteknownhostkeysresult)

### DeleteLoadBalancer



```js
amazonaws_lightsail.DeleteLoadBalancer({
  "loadBalancerName": null
}, context)
```

#### Input
* input `object`
  * loadBalancerName **required**

#### Output
* output [DeleteLoadBalancerResult](#deleteloadbalancerresult)

### DeleteLoadBalancerTlsCertificate



```js
amazonaws_lightsail.DeleteLoadBalancerTlsCertificate({
  "loadBalancerName": null,
  "certificateName": null
}, context)
```

#### Input
* input `object`
  * certificateName **required**
  * force
  * loadBalancerName **required**

#### Output
* output [DeleteLoadBalancerTlsCertificateResult](#deleteloadbalancertlscertificateresult)

### DeleteRelationalDatabase



```js
amazonaws_lightsail.DeleteRelationalDatabase({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * finalRelationalDatabaseSnapshotName
  * relationalDatabaseName **required**
  * skipFinalSnapshot

#### Output
* output [DeleteRelationalDatabaseResult](#deleterelationaldatabaseresult)

### DeleteRelationalDatabaseSnapshot



```js
amazonaws_lightsail.DeleteRelationalDatabaseSnapshot({
  "relationalDatabaseSnapshotName": null
}, context)
```

#### Input
* input `object`
  * relationalDatabaseSnapshotName **required**

#### Output
* output [DeleteRelationalDatabaseSnapshotResult](#deleterelationaldatabasesnapshotresult)

### DetachCertificateFromDistribution



```js
amazonaws_lightsail.DetachCertificateFromDistribution({
  "distributionName": null
}, context)
```

#### Input
* input `object`
  * distributionName **required**

#### Output
* output [DetachCertificateFromDistributionResult](#detachcertificatefromdistributionresult)

### DetachDisk



```js
amazonaws_lightsail.DetachDisk({
  "diskName": null
}, context)
```

#### Input
* input `object`
  * diskName **required**

#### Output
* output [DetachDiskResult](#detachdiskresult)

### DetachInstancesFromLoadBalancer



```js
amazonaws_lightsail.DetachInstancesFromLoadBalancer({
  "loadBalancerName": null,
  "instanceNames": null
}, context)
```

#### Input
* input `object`
  * instanceNames **required**
    * items [ResourceName](#resourcename)
  * loadBalancerName **required**

#### Output
* output [DetachInstancesFromLoadBalancerResult](#detachinstancesfromloadbalancerresult)

### DetachStaticIp



```js
amazonaws_lightsail.DetachStaticIp({
  "staticIpName": null
}, context)
```

#### Input
* input `object`
  * staticIpName **required**

#### Output
* output [DetachStaticIpResult](#detachstaticipresult)

### DisableAddOn



```js
amazonaws_lightsail.DisableAddOn({
  "addOnType": null,
  "resourceName": null
}, context)
```

#### Input
* input `object`
  * addOnType **required**
  * resourceName **required**

#### Output
* output [DisableAddOnResult](#disableaddonresult)

### DownloadDefaultKeyPair



```js
amazonaws_lightsail.DownloadDefaultKeyPair({}, context)
```

#### Input
* input `object`

#### Output
* output [DownloadDefaultKeyPairResult](#downloaddefaultkeypairresult)

### EnableAddOn



```js
amazonaws_lightsail.EnableAddOn({
  "resourceName": null,
  "addOnRequest": null
}, context)
```

#### Input
* input `object`
  * addOnRequest **required**
    * addOnType **required**
    * autoSnapshotAddOnRequest
      * snapshotTimeOfDay
  * resourceName **required**

#### Output
* output [EnableAddOnResult](#enableaddonresult)

### ExportSnapshot



```js
amazonaws_lightsail.ExportSnapshot({
  "sourceSnapshotName": null
}, context)
```

#### Input
* input `object`
  * sourceSnapshotName **required**

#### Output
* output [ExportSnapshotResult](#exportsnapshotresult)

### GetActiveNames



```js
amazonaws_lightsail.GetActiveNames({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetActiveNamesResult](#getactivenamesresult)

### GetAlarms



```js
amazonaws_lightsail.GetAlarms({}, context)
```

#### Input
* input `object`
  * alarmName
  * monitoredResourceName
  * pageToken

#### Output
* output [GetAlarmsResult](#getalarmsresult)

### GetAutoSnapshots



```js
amazonaws_lightsail.GetAutoSnapshots({
  "resourceName": null
}, context)
```

#### Input
* input `object`
  * resourceName **required**

#### Output
* output [GetAutoSnapshotsResult](#getautosnapshotsresult)

### GetBlueprints



```js
amazonaws_lightsail.GetBlueprints({}, context)
```

#### Input
* input `object`
  * includeInactive
  * pageToken

#### Output
* output [GetBlueprintsResult](#getblueprintsresult)

### GetBundles



```js
amazonaws_lightsail.GetBundles({}, context)
```

#### Input
* input `object`
  * includeInactive
  * pageToken

#### Output
* output [GetBundlesResult](#getbundlesresult)

### GetCertificates



```js
amazonaws_lightsail.GetCertificates({}, context)
```

#### Input
* input `object`
  * certificateName
  * certificateStatuses
    * items [CertificateStatus](#certificatestatus)
  * includeCertificateDetails

#### Output
* output [GetCertificatesResult](#getcertificatesresult)

### GetCloudFormationStackRecords



```js
amazonaws_lightsail.GetCloudFormationStackRecords({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetCloudFormationStackRecordsResult](#getcloudformationstackrecordsresult)

### GetContactMethods



```js
amazonaws_lightsail.GetContactMethods({}, context)
```

#### Input
* input `object`
  * protocols
    * items [ContactProtocol](#contactprotocol)

#### Output
* output [GetContactMethodsResult](#getcontactmethodsresult)

### GetContainerAPIMetadata



```js
amazonaws_lightsail.GetContainerAPIMetadata({}, context)
```

#### Input
* input `object`

#### Output
* output [GetContainerAPIMetadataResult](#getcontainerapimetadataresult)

### GetContainerImages



```js
amazonaws_lightsail.GetContainerImages({
  "serviceName": null
}, context)
```

#### Input
* input `object`
  * serviceName **required**

#### Output
* output [GetContainerImagesResult](#getcontainerimagesresult)

### GetContainerLog



```js
amazonaws_lightsail.GetContainerLog({
  "serviceName": null,
  "containerName": null
}, context)
```

#### Input
* input `object`
  * containerName **required**
  * endTime
  * filterPattern
  * pageToken
  * serviceName **required**
  * startTime

#### Output
* output [GetContainerLogResult](#getcontainerlogresult)

### GetContainerServiceDeployments



```js
amazonaws_lightsail.GetContainerServiceDeployments({
  "serviceName": null
}, context)
```

#### Input
* input `object`
  * serviceName **required**

#### Output
* output [GetContainerServiceDeploymentsResult](#getcontainerservicedeploymentsresult)

### GetContainerServiceMetricData



```js
amazonaws_lightsail.GetContainerServiceMetricData({
  "serviceName": null,
  "metricName": null,
  "startTime": null,
  "endTime": null,
  "period": null,
  "statistics": null
}, context)
```

#### Input
* input `object`
  * endTime **required**
  * metricName **required**
  * period **required**
  * serviceName **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)

#### Output
* output [GetContainerServiceMetricDataResult](#getcontainerservicemetricdataresult)

### GetContainerServicePowers



```js
amazonaws_lightsail.GetContainerServicePowers({}, context)
```

#### Input
* input `object`

#### Output
* output [GetContainerServicePowersResult](#getcontainerservicepowersresult)

### GetContainerServices



```js
amazonaws_lightsail.GetContainerServices({}, context)
```

#### Input
* input `object`
  * serviceName

#### Output
* output [ContainerServicesListResult](#containerserviceslistresult)

### GetDisk



```js
amazonaws_lightsail.GetDisk({
  "diskName": null
}, context)
```

#### Input
* input `object`
  * diskName **required**

#### Output
* output [GetDiskResult](#getdiskresult)

### GetDiskSnapshot



```js
amazonaws_lightsail.GetDiskSnapshot({
  "diskSnapshotName": null
}, context)
```

#### Input
* input `object`
  * diskSnapshotName **required**

#### Output
* output [GetDiskSnapshotResult](#getdisksnapshotresult)

### GetDiskSnapshots



```js
amazonaws_lightsail.GetDiskSnapshots({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetDiskSnapshotsResult](#getdisksnapshotsresult)

### GetDisks



```js
amazonaws_lightsail.GetDisks({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetDisksResult](#getdisksresult)

### GetDistributionBundles



```js
amazonaws_lightsail.GetDistributionBundles({}, context)
```

#### Input
* input `object`

#### Output
* output [GetDistributionBundlesResult](#getdistributionbundlesresult)

### GetDistributionLatestCacheReset



```js
amazonaws_lightsail.GetDistributionLatestCacheReset({}, context)
```

#### Input
* input `object`
  * distributionName

#### Output
* output [GetDistributionLatestCacheResetResult](#getdistributionlatestcacheresetresult)

### GetDistributionMetricData



```js
amazonaws_lightsail.GetDistributionMetricData({
  "distributionName": null,
  "metricName": null,
  "startTime": null,
  "endTime": null,
  "period": null,
  "unit": null,
  "statistics": null
}, context)
```

#### Input
* input `object`
  * distributionName **required**
  * endTime **required**
  * metricName **required**
  * period **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)
  * unit **required**

#### Output
* output [GetDistributionMetricDataResult](#getdistributionmetricdataresult)

### GetDistributions



```js
amazonaws_lightsail.GetDistributions({}, context)
```

#### Input
* input `object`
  * distributionName
  * pageToken

#### Output
* output [GetDistributionsResult](#getdistributionsresult)

### GetDomain



```js
amazonaws_lightsail.GetDomain({
  "domainName": null
}, context)
```

#### Input
* input `object`
  * domainName **required**

#### Output
* output [GetDomainResult](#getdomainresult)

### GetDomains



```js
amazonaws_lightsail.GetDomains({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetDomainsResult](#getdomainsresult)

### GetExportSnapshotRecords



```js
amazonaws_lightsail.GetExportSnapshotRecords({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetExportSnapshotRecordsResult](#getexportsnapshotrecordsresult)

### GetInstance



```js
amazonaws_lightsail.GetInstance({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**

#### Output
* output [GetInstanceResult](#getinstanceresult)

### GetInstanceAccessDetails



```js
amazonaws_lightsail.GetInstanceAccessDetails({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**
  * protocol

#### Output
* output [GetInstanceAccessDetailsResult](#getinstanceaccessdetailsresult)

### GetInstanceMetricData



```js
amazonaws_lightsail.GetInstanceMetricData({
  "instanceName": null,
  "metricName": null,
  "period": null,
  "startTime": null,
  "endTime": null,
  "unit": null,
  "statistics": null
}, context)
```

#### Input
* input `object`
  * endTime **required**
  * instanceName **required**
  * metricName **required**
  * period **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)
  * unit **required**

#### Output
* output [GetInstanceMetricDataResult](#getinstancemetricdataresult)

### GetInstancePortStates



```js
amazonaws_lightsail.GetInstancePortStates({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**

#### Output
* output [GetInstancePortStatesResult](#getinstanceportstatesresult)

### GetInstanceSnapshot



```js
amazonaws_lightsail.GetInstanceSnapshot({
  "instanceSnapshotName": null
}, context)
```

#### Input
* input `object`
  * instanceSnapshotName **required**

#### Output
* output [GetInstanceSnapshotResult](#getinstancesnapshotresult)

### GetInstanceSnapshots



```js
amazonaws_lightsail.GetInstanceSnapshots({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetInstanceSnapshotsResult](#getinstancesnapshotsresult)

### GetInstanceState



```js
amazonaws_lightsail.GetInstanceState({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**

#### Output
* output [GetInstanceStateResult](#getinstancestateresult)

### GetInstances



```js
amazonaws_lightsail.GetInstances({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetInstancesResult](#getinstancesresult)

### GetKeyPair



```js
amazonaws_lightsail.GetKeyPair({
  "keyPairName": null
}, context)
```

#### Input
* input `object`
  * keyPairName **required**

#### Output
* output [GetKeyPairResult](#getkeypairresult)

### GetKeyPairs



```js
amazonaws_lightsail.GetKeyPairs({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetKeyPairsResult](#getkeypairsresult)

### GetLoadBalancer



```js
amazonaws_lightsail.GetLoadBalancer({
  "loadBalancerName": null
}, context)
```

#### Input
* input `object`
  * loadBalancerName **required**

#### Output
* output [GetLoadBalancerResult](#getloadbalancerresult)

### GetLoadBalancerMetricData



```js
amazonaws_lightsail.GetLoadBalancerMetricData({
  "loadBalancerName": null,
  "metricName": null,
  "period": null,
  "startTime": null,
  "endTime": null,
  "unit": null,
  "statistics": null
}, context)
```

#### Input
* input `object`
  * endTime **required**
  * loadBalancerName **required**
  * metricName **required**
  * period **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)
  * unit **required**

#### Output
* output [GetLoadBalancerMetricDataResult](#getloadbalancermetricdataresult)

### GetLoadBalancerTlsCertificates



```js
amazonaws_lightsail.GetLoadBalancerTlsCertificates({
  "loadBalancerName": null
}, context)
```

#### Input
* input `object`
  * loadBalancerName **required**

#### Output
* output [GetLoadBalancerTlsCertificatesResult](#getloadbalancertlscertificatesresult)

### GetLoadBalancers



```js
amazonaws_lightsail.GetLoadBalancers({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetLoadBalancersResult](#getloadbalancersresult)

### GetOperation



```js
amazonaws_lightsail.GetOperation({
  "operationId": null
}, context)
```

#### Input
* input `object`
  * operationId **required**

#### Output
* output [GetOperationResult](#getoperationresult)

### GetOperations



```js
amazonaws_lightsail.GetOperations({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetOperationsResult](#getoperationsresult)

### GetOperationsForResource



```js
amazonaws_lightsail.GetOperationsForResource({
  "resourceName": null
}, context)
```

#### Input
* input `object`
  * pageToken
  * resourceName **required**

#### Output
* output [GetOperationsForResourceResult](#getoperationsforresourceresult)

### GetRegions



```js
amazonaws_lightsail.GetRegions({}, context)
```

#### Input
* input `object`
  * includeAvailabilityZones
  * includeRelationalDatabaseAvailabilityZones

#### Output
* output [GetRegionsResult](#getregionsresult)

### GetRelationalDatabase



```js
amazonaws_lightsail.GetRelationalDatabase({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * relationalDatabaseName **required**

#### Output
* output [GetRelationalDatabaseResult](#getrelationaldatabaseresult)

### GetRelationalDatabaseBlueprints



```js
amazonaws_lightsail.GetRelationalDatabaseBlueprints({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetRelationalDatabaseBlueprintsResult](#getrelationaldatabaseblueprintsresult)

### GetRelationalDatabaseBundles



```js
amazonaws_lightsail.GetRelationalDatabaseBundles({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetRelationalDatabaseBundlesResult](#getrelationaldatabasebundlesresult)

### GetRelationalDatabaseEvents



```js
amazonaws_lightsail.GetRelationalDatabaseEvents({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * durationInMinutes
  * pageToken
  * relationalDatabaseName **required**

#### Output
* output [GetRelationalDatabaseEventsResult](#getrelationaldatabaseeventsresult)

### GetRelationalDatabaseLogEvents



```js
amazonaws_lightsail.GetRelationalDatabaseLogEvents({
  "relationalDatabaseName": null,
  "logStreamName": null
}, context)
```

#### Input
* input `object`
  * endTime
  * logStreamName **required**
  * pageToken
  * relationalDatabaseName **required**
  * startFromHead
  * startTime

#### Output
* output [GetRelationalDatabaseLogEventsResult](#getrelationaldatabaselogeventsresult)

### GetRelationalDatabaseLogStreams



```js
amazonaws_lightsail.GetRelationalDatabaseLogStreams({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * relationalDatabaseName **required**

#### Output
* output [GetRelationalDatabaseLogStreamsResult](#getrelationaldatabaselogstreamsresult)

### GetRelationalDatabaseMasterUserPassword



```js
amazonaws_lightsail.GetRelationalDatabaseMasterUserPassword({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * passwordVersion
  * relationalDatabaseName **required**

#### Output
* output [GetRelationalDatabaseMasterUserPasswordResult](#getrelationaldatabasemasteruserpasswordresult)

### GetRelationalDatabaseMetricData



```js
amazonaws_lightsail.GetRelationalDatabaseMetricData({
  "relationalDatabaseName": null,
  "metricName": null,
  "period": null,
  "startTime": null,
  "endTime": null,
  "unit": null,
  "statistics": null
}, context)
```

#### Input
* input `object`
  * endTime **required**
  * metricName **required**
  * period **required**
  * relationalDatabaseName **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)
  * unit **required**

#### Output
* output [GetRelationalDatabaseMetricDataResult](#getrelationaldatabasemetricdataresult)

### GetRelationalDatabaseParameters



```js
amazonaws_lightsail.GetRelationalDatabaseParameters({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * pageToken
  * relationalDatabaseName **required**

#### Output
* output [GetRelationalDatabaseParametersResult](#getrelationaldatabaseparametersresult)

### GetRelationalDatabaseSnapshot



```js
amazonaws_lightsail.GetRelationalDatabaseSnapshot({
  "relationalDatabaseSnapshotName": null
}, context)
```

#### Input
* input `object`
  * relationalDatabaseSnapshotName **required**

#### Output
* output [GetRelationalDatabaseSnapshotResult](#getrelationaldatabasesnapshotresult)

### GetRelationalDatabaseSnapshots



```js
amazonaws_lightsail.GetRelationalDatabaseSnapshots({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetRelationalDatabaseSnapshotsResult](#getrelationaldatabasesnapshotsresult)

### GetRelationalDatabases



```js
amazonaws_lightsail.GetRelationalDatabases({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetRelationalDatabasesResult](#getrelationaldatabasesresult)

### GetStaticIp



```js
amazonaws_lightsail.GetStaticIp({
  "staticIpName": null
}, context)
```

#### Input
* input `object`
  * staticIpName **required**

#### Output
* output [GetStaticIpResult](#getstaticipresult)

### GetStaticIps



```js
amazonaws_lightsail.GetStaticIps({}, context)
```

#### Input
* input `object`
  * pageToken

#### Output
* output [GetStaticIpsResult](#getstaticipsresult)

### ImportKeyPair



```js
amazonaws_lightsail.ImportKeyPair({
  "keyPairName": null,
  "publicKeyBase64": null
}, context)
```

#### Input
* input `object`
  * keyPairName **required**
  * publicKeyBase64 **required**

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
  "portInfo": null,
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**
  * portInfo **required**
    * cidrListAliases
      * items [string](#string)
    * cidrs
      * items [string](#string)
    * fromPort
    * protocol
    * toPort

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

### PutAlarm



```js
amazonaws_lightsail.PutAlarm({
  "alarmName": null,
  "metricName": null,
  "monitoredResourceName": null,
  "comparisonOperator": null,
  "threshold": null,
  "evaluationPeriods": null
}, context)
```

#### Input
* input `object`
  * alarmName **required**
  * comparisonOperator **required**
  * contactProtocols
    * items [ContactProtocol](#contactprotocol)
  * datapointsToAlarm
  * evaluationPeriods **required**
  * metricName **required**
  * monitoredResourceName **required**
  * notificationEnabled
  * notificationTriggers
    * items [AlarmState](#alarmstate)
  * threshold **required**
  * treatMissingData

#### Output
* output [PutAlarmResult](#putalarmresult)

### PutInstancePublicPorts



```js
amazonaws_lightsail.PutInstancePublicPorts({
  "portInfos": null,
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**
  * portInfos **required**
    * items [PortInfo](#portinfo)

#### Output
* output [PutInstancePublicPortsResult](#putinstancepublicportsresult)

### RebootInstance



```js
amazonaws_lightsail.RebootInstance({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**

#### Output
* output [RebootInstanceResult](#rebootinstanceresult)

### RebootRelationalDatabase



```js
amazonaws_lightsail.RebootRelationalDatabase({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * relationalDatabaseName **required**

#### Output
* output [RebootRelationalDatabaseResult](#rebootrelationaldatabaseresult)

### RegisterContainerImage



```js
amazonaws_lightsail.RegisterContainerImage({
  "serviceName": null,
  "label": null,
  "digest": null
}, context)
```

#### Input
* input `object`
  * digest **required**
  * label **required**
  * serviceName **required**

#### Output
* output [RegisterContainerImageResult](#registercontainerimageresult)

### ReleaseStaticIp



```js
amazonaws_lightsail.ReleaseStaticIp({
  "staticIpName": null
}, context)
```

#### Input
* input `object`
  * staticIpName **required**

#### Output
* output [ReleaseStaticIpResult](#releasestaticipresult)

### ResetDistributionCache



```js
amazonaws_lightsail.ResetDistributionCache({}, context)
```

#### Input
* input `object`
  * distributionName

#### Output
* output [ResetDistributionCacheResult](#resetdistributioncacheresult)

### SendContactMethodVerification



```js
amazonaws_lightsail.SendContactMethodVerification({
  "protocol": null
}, context)
```

#### Input
* input `object`
  * protocol **required**

#### Output
* output [SendContactMethodVerificationResult](#sendcontactmethodverificationresult)

### StartInstance



```js
amazonaws_lightsail.StartInstance({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * instanceName **required**

#### Output
* output [StartInstanceResult](#startinstanceresult)

### StartRelationalDatabase



```js
amazonaws_lightsail.StartRelationalDatabase({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * relationalDatabaseName **required**

#### Output
* output [StartRelationalDatabaseResult](#startrelationaldatabaseresult)

### StopInstance



```js
amazonaws_lightsail.StopInstance({
  "instanceName": null
}, context)
```

#### Input
* input `object`
  * force
  * instanceName **required**

#### Output
* output [StopInstanceResult](#stopinstanceresult)

### StopRelationalDatabase



```js
amazonaws_lightsail.StopRelationalDatabase({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * relationalDatabaseName **required**
  * relationalDatabaseSnapshotName

#### Output
* output [StopRelationalDatabaseResult](#stoprelationaldatabaseresult)

### TagResource



```js
amazonaws_lightsail.TagResource({
  "resourceName": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn
  * resourceName **required**

#### Output
* output [TagResourceResult](#tagresourceresult)

### TestAlarm



```js
amazonaws_lightsail.TestAlarm({
  "alarmName": null,
  "state": null
}, context)
```

#### Input
* input `object`
  * alarmName **required**
  * state **required**

#### Output
* output [TestAlarmResult](#testalarmresult)

### UnpeerVpc



```js
amazonaws_lightsail.UnpeerVpc({}, context)
```

#### Input
* input `object`

#### Output
* output [UnpeerVpcResult](#unpeervpcresult)

### UntagResource



```js
amazonaws_lightsail.UntagResource({
  "resourceName": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn
  * resourceName **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResult](#untagresourceresult)

### UpdateContainerService



```js
amazonaws_lightsail.UpdateContainerService({
  "serviceName": null
}, context)
```

#### Input
* input `object`
  * isDisabled
  * power
  * publicDomainNames
  * scale
  * serviceName **required**

#### Output
* output [UpdateContainerServiceResult](#updatecontainerserviceresult)

### UpdateDistribution



```js
amazonaws_lightsail.UpdateDistribution({
  "distributionName": null
}, context)
```

#### Input
* input `object`
  * cacheBehaviorSettings
    * allowedHTTPMethods
    * cachedHTTPMethods
    * defaultTTL
    * forwardedCookies
      * cookiesAllowList
        * items [string](#string)
      * option
    * forwardedHeaders
      * headersAllowList
        * items [HeaderEnum](#headerenum)
      * option
    * forwardedQueryStrings
      * option
      * queryStringsAllowList
        * items [string](#string)
    * maximumTTL
    * minimumTTL
  * cacheBehaviors
    * items [CacheBehaviorPerPath](#cachebehaviorperpath)
  * defaultCacheBehavior
    * behavior
  * distributionName **required**
  * isEnabled
  * origin
    * name
    * protocolPolicy
    * regionName

#### Output
* output [UpdateDistributionResult](#updatedistributionresult)

### UpdateDistributionBundle



```js
amazonaws_lightsail.UpdateDistributionBundle({}, context)
```

#### Input
* input `object`
  * bundleId
  * distributionName

#### Output
* output [UpdateDistributionBundleResult](#updatedistributionbundleresult)

### UpdateDomainEntry



```js
amazonaws_lightsail.UpdateDomainEntry({
  "domainName": null,
  "domainEntry": null
}, context)
```

#### Input
* input `object`
  * domainEntry **required**
    * id
    * isAlias
    * name
    * options
    * target
    * type
  * domainName **required**

#### Output
* output [UpdateDomainEntryResult](#updatedomainentryresult)

### UpdateLoadBalancerAttribute



```js
amazonaws_lightsail.UpdateLoadBalancerAttribute({
  "loadBalancerName": null,
  "attributeName": null,
  "attributeValue": null
}, context)
```

#### Input
* input `object`
  * attributeName **required**
  * attributeValue **required**
  * loadBalancerName **required**

#### Output
* output [UpdateLoadBalancerAttributeResult](#updateloadbalancerattributeresult)

### UpdateRelationalDatabase



```js
amazonaws_lightsail.UpdateRelationalDatabase({
  "relationalDatabaseName": null
}, context)
```

#### Input
* input `object`
  * applyImmediately
  * caCertificateIdentifier
  * disableBackupRetention
  * enableBackupRetention
  * masterUserPassword
  * preferredBackupWindow
  * preferredMaintenanceWindow
  * publiclyAccessible
  * relationalDatabaseName **required**
  * rotateMasterUserPassword

#### Output
* output [UpdateRelationalDatabaseResult](#updaterelationaldatabaseresult)

### UpdateRelationalDatabaseParameters



```js
amazonaws_lightsail.UpdateRelationalDatabaseParameters({
  "relationalDatabaseName": null,
  "parameters": null
}, context)
```

#### Input
* input `object`
  * parameters **required**
    * items [RelationalDatabaseParameter](#relationaldatabaseparameter)
  * relationalDatabaseName **required**

#### Output
* output [UpdateRelationalDatabaseParametersResult](#updaterelationaldatabaseparametersresult)



## Definitions

### AccessDeniedException


### AccessDirection
* AccessDirection `string` (values: inbound, outbound)

### AccountSetupInProgressException


### AddOn
* AddOn `object`: Describes an add-on that is enabled for an Amazon Lightsail resource.
  * name
  * nextSnapshotTimeOfDay
  * snapshotTimeOfDay
  * status

### AddOnList
* AddOnList `array`
  * items [AddOn](#addon)

### AddOnRequest
* AddOnRequest `object`: <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note>
  * addOnType **required**
  * autoSnapshotAddOnRequest
    * snapshotTimeOfDay

### AddOnRequestList
* AddOnRequestList `array`
  * items [AddOnRequest](#addonrequest)

### AddOnType
* AddOnType `string` (values: AutoSnapshot)

### Alarm
* Alarm `object`: <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
  * arn
  * comparisonOperator
  * contactProtocols
    * items [ContactProtocol](#contactprotocol)
  * createdAt
  * datapointsToAlarm
  * evaluationPeriods
  * location
    * availabilityZone
    * regionName
  * metricName
  * monitoredResourceInfo
    * arn
    * name
    * resourceType
  * name
  * notificationEnabled
  * notificationTriggers
    * items [AlarmState](#alarmstate)
  * period
  * resourceType
  * state
  * statistic
  * supportCode
  * threshold
  * treatMissingData
  * unit

### AlarmState
* AlarmState `string` (values: OK, ALARM, INSUFFICIENT_DATA)

### AlarmsList
* AlarmsList `array`
  * items [Alarm](#alarm)

### AllocateStaticIpRequest
* AllocateStaticIpRequest `object`
  * staticIpName **required**

### AllocateStaticIpResult
* AllocateStaticIpResult `object`
  * operations
    * items [Operation](#operation)

### AttachCertificateToDistributionRequest
* AttachCertificateToDistributionRequest `object`
  * certificateName **required**
  * distributionName **required**

### AttachCertificateToDistributionResult
* AttachCertificateToDistributionResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### AttachDiskRequest
* AttachDiskRequest `object`
  * diskName **required**
  * diskPath **required**
  * instanceName **required**

### AttachDiskResult
* AttachDiskResult `object`
  * operations
    * items [Operation](#operation)

### AttachInstancesToLoadBalancerRequest
* AttachInstancesToLoadBalancerRequest `object`
  * instanceNames **required**
    * items [ResourceName](#resourcename)
  * loadBalancerName **required**

### AttachInstancesToLoadBalancerResult
* AttachInstancesToLoadBalancerResult `object`
  * operations
    * items [Operation](#operation)

### AttachLoadBalancerTlsCertificateRequest
* AttachLoadBalancerTlsCertificateRequest `object`
  * certificateName **required**
  * loadBalancerName **required**

### AttachLoadBalancerTlsCertificateResult
* AttachLoadBalancerTlsCertificateResult `object`
  * operations
    * items [Operation](#operation)

### AttachStaticIpRequest
* AttachStaticIpRequest `object`
  * instanceName **required**
  * staticIpName **required**

### AttachStaticIpResult
* AttachStaticIpResult `object`
  * operations
    * items [Operation](#operation)

### AttachedDisk
* AttachedDisk `object`: Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot.
  * path
  * sizeInGb

### AttachedDiskList
* AttachedDiskList `array`
  * items [AttachedDisk](#attacheddisk)

### AttachedDiskMap
* AttachedDiskMap `object`

### AutoSnapshotAddOnRequest
* AutoSnapshotAddOnRequest `object`: <p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul>
  * snapshotTimeOfDay

### AutoSnapshotDate
* AutoSnapshotDate `string`

### AutoSnapshotDetails
* AutoSnapshotDetails `object`: Describes an automatic snapshot.
  * createdAt
  * date
  * fromAttachedDisks
    * items [AttachedDisk](#attacheddisk)
  * status

### AutoSnapshotDetailsList
* AutoSnapshotDetailsList `array`
  * items [AutoSnapshotDetails](#autosnapshotdetails)

### AutoSnapshotStatus
* AutoSnapshotStatus `string` (values: Success, Failed, InProgress, NotFound)

### AvailabilityZone
* AvailabilityZone `object`: Describes an Availability Zone.
  * state
  * zoneName

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items [AvailabilityZone](#availabilityzone)

### Base64
* Base64 `string`

### BehaviorEnum
* BehaviorEnum `string` (values: dont-cache, cache)

### Blueprint
* Blueprint `object`: Describes a blueprint (a virtual private server image).
  * blueprintId
  * description
  * group
  * isActive
  * licenseUrl
  * minPower
  * name
  * platform
  * productUrl
  * type
  * version
  * versionCode

### BlueprintList
* BlueprintList `array`
  * items [Blueprint](#blueprint)

### BlueprintType
* BlueprintType `string` (values: os, app)

### Bundle
* Bundle `object`: Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>).
  * bundleId
  * cpuCount
  * diskSizeInGb
  * instanceType
  * isActive
  * name
  * power
  * price
  * ramSizeInGb
  * supportedPlatforms
    * items [InstancePlatform](#instanceplatform)
  * transferPerMonthInGb

### BundleList
* BundleList `array`
  * items [Bundle](#bundle)

### CacheBehavior
* CacheBehavior `object`: Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
  * behavior

### CacheBehaviorList
* CacheBehaviorList `array`
  * items [CacheBehaviorPerPath](#cachebehaviorperpath)

### CacheBehaviorPerPath
* CacheBehaviorPerPath `object`: <p>Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A per-path cache behavior is used to override, or add an exception to, the default cache behavior of a distribution. For example, if the <code>cacheBehavior</code> is set to <code>cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will cache. Alternately, if the distribution's <code>cacheBehavior</code> is <code>dont-cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will not cache.</p> <p>if the cacheBehavior's behavior is set to 'cache', then</p>
  * behavior
  * path

### CacheSettings
* CacheSettings `object`: <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>
  * allowedHTTPMethods
  * cachedHTTPMethods
  * defaultTTL
  * forwardedCookies
    * cookiesAllowList
      * items [string](#string)
    * option
  * forwardedHeaders
    * headersAllowList
      * items [HeaderEnum](#headerenum)
    * option
  * forwardedQueryStrings
    * option
    * queryStringsAllowList
      * items [string](#string)
  * maximumTTL
  * minimumTTL

### Certificate
* Certificate `object`: <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
  * tags
    * items [Tag](#tag)
  * arn
  * createdAt
  * domainName
  * domainValidationRecords
    * items [DomainValidationRecord](#domainvalidationrecord)
  * eligibleToRenew
  * inUseResourceCount
  * issuedAt
  * issuerCA
  * keyAlgorithm
  * name
  * notAfter
  * notBefore
  * renewalSummary
    * domainValidationRecords
      * items [DomainValidationRecord](#domainvalidationrecord)
    * renewalStatus
    * renewalStatusReason
    * updatedAt
  * requestFailureReason
  * revocationReason
  * revokedAt
  * serialNumber
  * status
  * subjectAlternativeNames
    * items [DomainName](#domainname)
  * supportCode

### CertificateName
* CertificateName `string`

### CertificateStatus
* CertificateStatus `string` (values: PENDING_VALIDATION, ISSUED, INACTIVE, EXPIRED, VALIDATION_TIMED_OUT, REVOKED, FAILED)

### CertificateStatusList
* CertificateStatusList `array`
  * items [CertificateStatus](#certificatestatus)

### CertificateSummary
* CertificateSummary `object`: Describes an Amazon Lightsail SSL/TLS certificate.
  * tags
    * items [Tag](#tag)
  * certificateArn
  * certificateDetail
    * tags
      * items [Tag](#tag)
    * arn
    * createdAt
    * domainName
    * domainValidationRecords
      * items [DomainValidationRecord](#domainvalidationrecord)
    * eligibleToRenew
    * inUseResourceCount
    * issuedAt
    * issuerCA
    * keyAlgorithm
    * name
    * notAfter
    * notBefore
    * renewalSummary
      * domainValidationRecords
        * items [DomainValidationRecord](#domainvalidationrecord)
      * renewalStatus
      * renewalStatusReason
      * updatedAt
    * requestFailureReason
    * revocationReason
    * revokedAt
    * serialNumber
    * status
    * subjectAlternativeNames
      * items [DomainName](#domainname)
    * supportCode
  * certificateName
  * domainName

### CertificateSummaryList
* CertificateSummaryList `array`
  * items [CertificateSummary](#certificatesummary)

### CloseInstancePublicPortsRequest
* CloseInstancePublicPortsRequest `object`
  * instanceName **required**
  * portInfo **required**
    * cidrListAliases
      * items [string](#string)
    * cidrs
      * items [string](#string)
    * fromPort
    * protocol
    * toPort

### CloseInstancePublicPortsResult
* CloseInstancePublicPortsResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### CloudFormationStackRecord
* CloudFormationStackRecord `object`: <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
  * arn
  * createdAt
  * destinationInfo
    * id
    * service
  * location
    * availabilityZone
    * regionName
  * name
  * resourceType
  * sourceInfo
    * items [CloudFormationStackRecordSourceInfo](#cloudformationstackrecordsourceinfo)
  * state

### CloudFormationStackRecordList
* CloudFormationStackRecordList `array`
  * items [CloudFormationStackRecord](#cloudformationstackrecord)

### CloudFormationStackRecordSourceInfo
* CloudFormationStackRecordSourceInfo `object`: Describes the source of a CloudFormation stack record (i.e., the export snapshot record).
  * arn
  * name
  * resourceType

### CloudFormationStackRecordSourceInfoList
* CloudFormationStackRecordSourceInfoList `array`
  * items [CloudFormationStackRecordSourceInfo](#cloudformationstackrecordsourceinfo)

### CloudFormationStackRecordSourceType
* CloudFormationStackRecordSourceType `string` (values: ExportSnapshotRecord)

### ComparisonOperator
* ComparisonOperator `string` (values: GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold)

### ContactMethod
* ContactMethod `object`: <p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
  * arn
  * contactEndpoint
  * createdAt
  * location [ResourceLocation](#resourcelocation)
  * name
  * protocol
  * resourceType
  * status
  * supportCode

### ContactMethodStatus
* ContactMethodStatus `string` (values: PendingVerification, Valid, Invalid)

### ContactMethodVerificationProtocol
* ContactMethodVerificationProtocol `string` (values: Email)

### ContactMethodsList
* ContactMethodsList `array`
  * items [ContactMethod](#contactmethod)

### ContactProtocol
* ContactProtocol `string` (values: Email, SMS)

### ContactProtocolsList
* ContactProtocolsList `array`
  * items [ContactProtocol](#contactprotocol)

### Container
* Container `object`: Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
  * command
    * items [string](#string)
  * environment
  * image
  * ports

### ContainerImage
* ContainerImage `object`: Describes a container image that is registered to an Amazon Lightsail container service.
  * createdAt
  * digest
  * image

### ContainerImageList
* ContainerImageList `array`
  * items [ContainerImage](#containerimage)

### ContainerLabel
* ContainerLabel `string`

### ContainerMap
* ContainerMap `object`

### ContainerName
* ContainerName `string`

### ContainerService
* ContainerService `object`: Describes an Amazon Lightsail container service.
  * tags
    * items [Tag](#tag)
  * arn
  * containerServiceName
  * createdAt
  * currentDeployment
    * containers
    * createdAt
    * publicEndpoint
      * containerName
      * containerPort
      * healthCheck
        * healthyThreshold
        * intervalSeconds
        * path
        * successCodes
        * timeoutSeconds
        * unhealthyThreshold
    * state
    * version
  * isDisabled
  * location
    * availabilityZone
    * regionName
  * nextDeployment
    * containers
    * createdAt
    * publicEndpoint
      * containerName
      * containerPort
      * healthCheck
        * healthyThreshold
        * intervalSeconds
        * path
        * successCodes
        * timeoutSeconds
        * unhealthyThreshold
    * state
    * version
  * power
  * powerId
  * principalArn
  * privateDomainName
  * publicDomainNames
  * resourceType
  * scale
  * state
  * url

### ContainerServiceDeployment
* ContainerServiceDeployment `object`: <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
  * containers
  * createdAt
  * publicEndpoint
    * containerName
    * containerPort
    * healthCheck
      * healthyThreshold
      * intervalSeconds
      * path
      * successCodes
      * timeoutSeconds
      * unhealthyThreshold
  * state
  * version

### ContainerServiceDeploymentList
* ContainerServiceDeploymentList `array`
  * items [ContainerServiceDeployment](#containerservicedeployment)

### ContainerServiceDeploymentRequest
* ContainerServiceDeploymentRequest `object`: <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
  * containers
  * publicEndpoint
    * containerName **required**
    * containerPort **required**
    * healthCheck
      * healthyThreshold
      * intervalSeconds
      * path
      * successCodes
      * timeoutSeconds
      * unhealthyThreshold

### ContainerServiceDeploymentState
* ContainerServiceDeploymentState `string` (values: ACTIVATING, ACTIVE, INACTIVE, FAILED)

### ContainerServiceEndpoint
* ContainerServiceEndpoint `object`: Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.
  * containerName
  * containerPort
  * healthCheck
    * healthyThreshold
    * intervalSeconds
    * path
    * successCodes
    * timeoutSeconds
    * unhealthyThreshold

### ContainerServiceHealthCheckConfig
* ContainerServiceHealthCheckConfig `object`: Describes the health check configuration of an Amazon Lightsail container service.
  * healthyThreshold
  * intervalSeconds
  * path
  * successCodes
  * timeoutSeconds
  * unhealthyThreshold

### ContainerServiceList
* ContainerServiceList `array`
  * items [ContainerService](#containerservice)

### ContainerServiceLogEvent
* ContainerServiceLogEvent `object`: Describes the log events of a container of an Amazon Lightsail container service.
  * createdAt
  * message

### ContainerServiceLogEventList
* ContainerServiceLogEventList `array`
  * items [ContainerServiceLogEvent](#containerservicelogevent)

### ContainerServiceMetadataEntry
* ContainerServiceMetadataEntry `object`

### ContainerServiceMetadataEntryList
* ContainerServiceMetadataEntryList `array`
  * items [ContainerServiceMetadataEntry](#containerservicemetadataentry)

### ContainerServiceMetricName
* ContainerServiceMetricName `string` (values: CPUUtilization, MemoryUtilization)

### ContainerServiceName
* ContainerServiceName `string`

### ContainerServicePower
* ContainerServicePower `object`: <p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>
  * cpuCount
  * isActive
  * name
  * powerId
  * price
  * ramSizeInGb

### ContainerServicePowerList
* ContainerServicePowerList `array`
  * items [ContainerServicePower](#containerservicepower)

### ContainerServicePowerName
* ContainerServicePowerName `string` (values: nano, micro, small, medium, large, xlarge)

### ContainerServiceProtocol
* ContainerServiceProtocol `string` (values: HTTP, HTTPS, TCP, UDP)

### ContainerServicePublicDomains
* ContainerServicePublicDomains `object`

### ContainerServicePublicDomainsList
* ContainerServicePublicDomainsList `array`
  * items [string](#string)

### ContainerServiceRegistryLogin
* ContainerServiceRegistryLogin `object`: Describes the login information for the container image registry of an Amazon Lightsail account.
  * expiresAt
  * password
  * registry
  * username

### ContainerServiceScale
* ContainerServiceScale `integer`

### ContainerServiceState
* ContainerServiceState `string` (values: PENDING, READY, RUNNING, UPDATING, DELETING, DISABLED)

### ContainerServicesListResult
* ContainerServicesListResult `object`
  * containerServices
    * items [ContainerService](#containerservice)

### CookieObject
* CookieObject `object`: <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.</p> <p>For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.</p>
  * cookiesAllowList
    * items [string](#string)
  * option

### CopySnapshotRequest
* CopySnapshotRequest `object`
  * restoreDate
  * sourceRegion **required**
  * sourceResourceName
  * sourceSnapshotName
  * targetSnapshotName **required**
  * useLatestRestorableAutoSnapshot

### CopySnapshotResult
* CopySnapshotResult `object`
  * operations
    * items [Operation](#operation)

### CreateCertificateRequest
* CreateCertificateRequest `object`
  * tags
    * items [Tag](#tag)
  * certificateName **required**
  * domainName **required**
  * subjectAlternativeNames
    * items [DomainName](#domainname)

### CreateCertificateResult
* CreateCertificateResult `object`
  * certificate
    * tags
      * items [Tag](#tag)
    * certificateArn
    * certificateDetail
      * tags
        * items [Tag](#tag)
      * arn
      * createdAt
      * domainName
      * domainValidationRecords
        * items [DomainValidationRecord](#domainvalidationrecord)
      * eligibleToRenew
      * inUseResourceCount
      * issuedAt
      * issuerCA
      * keyAlgorithm
      * name
      * notAfter
      * notBefore
      * renewalSummary
        * domainValidationRecords
          * items [DomainValidationRecord](#domainvalidationrecord)
        * renewalStatus
        * renewalStatusReason
        * updatedAt
      * requestFailureReason
      * revocationReason
      * revokedAt
      * serialNumber
      * status
      * subjectAlternativeNames
        * items [DomainName](#domainname)
      * supportCode
    * certificateName
    * domainName
  * operations
    * items [Operation](#operation)

### CreateCloudFormationStackRequest
* CreateCloudFormationStackRequest `object`
  * instances **required**
    * items [InstanceEntry](#instanceentry)

### CreateCloudFormationStackResult
* CreateCloudFormationStackResult `object`
  * operations
    * items [Operation](#operation)

### CreateContactMethodRequest
* CreateContactMethodRequest `object`
  * contactEndpoint **required**
  * protocol **required**

### CreateContactMethodResult
* CreateContactMethodResult `object`
  * operations
    * items [Operation](#operation)

### CreateContainerServiceDeploymentRequest
* CreateContainerServiceDeploymentRequest `object`
  * containers
  * publicEndpoint
    * containerName **required**
    * containerPort **required**
    * healthCheck
      * healthyThreshold
      * intervalSeconds
      * path
      * successCodes
      * timeoutSeconds
      * unhealthyThreshold
  * serviceName **required**

### CreateContainerServiceDeploymentResult
* CreateContainerServiceDeploymentResult `object`
  * containerService
    * tags
      * items [Tag](#tag)
    * arn
    * containerServiceName
    * createdAt
    * currentDeployment
      * containers
      * createdAt
      * publicEndpoint
        * containerName
        * containerPort
        * healthCheck
          * healthyThreshold
          * intervalSeconds
          * path
          * successCodes
          * timeoutSeconds
          * unhealthyThreshold
      * state
      * version
    * isDisabled
    * location
      * availabilityZone
      * regionName
    * nextDeployment
      * containers
      * createdAt
      * publicEndpoint
        * containerName
        * containerPort
        * healthCheck
          * healthyThreshold
          * intervalSeconds
          * path
          * successCodes
          * timeoutSeconds
          * unhealthyThreshold
      * state
      * version
    * power
    * powerId
    * principalArn
    * privateDomainName
    * publicDomainNames
    * resourceType
    * scale
    * state
    * url

### CreateContainerServiceRegistryLoginRequest
* CreateContainerServiceRegistryLoginRequest `object`

### CreateContainerServiceRegistryLoginResult
* CreateContainerServiceRegistryLoginResult `object`
  * registryLogin
    * expiresAt
    * password
    * registry
    * username

### CreateContainerServiceRequest
* CreateContainerServiceRequest `object`
  * tags
    * items [Tag](#tag)
  * deployment
    * containers
    * publicEndpoint
      * containerName **required**
      * containerPort **required**
      * healthCheck
        * healthyThreshold
        * intervalSeconds
        * path
        * successCodes
        * timeoutSeconds
        * unhealthyThreshold
  * power **required**
  * publicDomainNames
  * scale **required**
  * serviceName **required**

### CreateContainerServiceResult
* CreateContainerServiceResult `object`
  * containerService
    * tags
      * items [Tag](#tag)
    * arn
    * containerServiceName
    * createdAt
    * currentDeployment
      * containers
      * createdAt
      * publicEndpoint
        * containerName
        * containerPort
        * healthCheck
          * healthyThreshold
          * intervalSeconds
          * path
          * successCodes
          * timeoutSeconds
          * unhealthyThreshold
      * state
      * version
    * isDisabled
    * location
      * availabilityZone
      * regionName
    * nextDeployment
      * containers
      * createdAt
      * publicEndpoint
        * containerName
        * containerPort
        * healthCheck
          * healthyThreshold
          * intervalSeconds
          * path
          * successCodes
          * timeoutSeconds
          * unhealthyThreshold
      * state
      * version
    * power
    * powerId
    * principalArn
    * privateDomainName
    * publicDomainNames
    * resourceType
    * scale
    * state
    * url

### CreateDiskFromSnapshotRequest
* CreateDiskFromSnapshotRequest `object`
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOnRequest](#addonrequest)
  * availabilityZone **required**
  * diskName **required**
  * diskSnapshotName
  * restoreDate
  * sizeInGb **required**
  * sourceDiskName
  * useLatestRestorableAutoSnapshot

### CreateDiskFromSnapshotResult
* CreateDiskFromSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### CreateDiskRequest
* CreateDiskRequest `object`
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOnRequest](#addonrequest)
  * availabilityZone **required**
  * diskName **required**
  * sizeInGb **required**

### CreateDiskResult
* CreateDiskResult `object`
  * operations
    * items [Operation](#operation)

### CreateDiskSnapshotRequest
* CreateDiskSnapshotRequest `object`
  * tags
    * items [Tag](#tag)
  * diskName
  * diskSnapshotName **required**
  * instanceName

### CreateDiskSnapshotResult
* CreateDiskSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### CreateDistributionRequest
* CreateDistributionRequest `object`
  * tags
    * items [Tag](#tag)
  * bundleId **required**
  * cacheBehaviorSettings
    * allowedHTTPMethods
    * cachedHTTPMethods
    * defaultTTL
    * forwardedCookies
      * cookiesAllowList
        * items [string](#string)
      * option
    * forwardedHeaders
      * headersAllowList
        * items [HeaderEnum](#headerenum)
      * option
    * forwardedQueryStrings
      * option
      * queryStringsAllowList
        * items [string](#string)
    * maximumTTL
    * minimumTTL
  * cacheBehaviors
    * items [CacheBehaviorPerPath](#cachebehaviorperpath)
  * defaultCacheBehavior **required**
    * behavior
  * distributionName **required**
  * origin **required**
    * name
    * protocolPolicy
    * regionName

### CreateDistributionResult
* CreateDistributionResult `object`
  * distribution
    * tags
      * items [Tag](#tag)
    * ableToUpdateBundle
    * alternativeDomainNames
      * items [string](#string)
    * arn
    * bundleId
    * cacheBehaviorSettings
      * allowedHTTPMethods
      * cachedHTTPMethods
      * defaultTTL
      * forwardedCookies
        * cookiesAllowList
          * items [string](#string)
        * option
      * forwardedHeaders
        * headersAllowList
          * items [HeaderEnum](#headerenum)
        * option
      * forwardedQueryStrings
        * option
        * queryStringsAllowList
          * items [string](#string)
      * maximumTTL
      * minimumTTL
    * cacheBehaviors
      * items [CacheBehaviorPerPath](#cachebehaviorperpath)
    * certificateName
    * createdAt
    * defaultCacheBehavior
      * behavior
    * domainName
    * isEnabled
    * location
      * availabilityZone
      * regionName
    * name
    * origin
      * name
      * protocolPolicy
      * regionName
      * resourceType
    * originPublicDNS
    * resourceType
    * status
    * supportCode
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### CreateDomainEntryRequest
* CreateDomainEntryRequest `object`
  * domainEntry **required**
    * id
    * isAlias
    * name
    * options
    * target
    * type
  * domainName **required**

### CreateDomainEntryResult
* CreateDomainEntryResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### CreateDomainRequest
* CreateDomainRequest `object`
  * tags
    * items [Tag](#tag)
  * domainName **required**

### CreateDomainResult
* CreateDomainResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### CreateInstanceSnapshotRequest
* CreateInstanceSnapshotRequest `object`
  * tags
    * items [Tag](#tag)
  * instanceName **required**
  * instanceSnapshotName **required**

### CreateInstanceSnapshotResult
* CreateInstanceSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### CreateInstancesFromSnapshotRequest
* CreateInstancesFromSnapshotRequest `object`
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOnRequest](#addonrequest)
  * attachedDiskMapping
  * availabilityZone **required**
  * bundleId **required**
  * instanceNames **required**
    * items [string](#string)
  * instanceSnapshotName
  * keyPairName
  * restoreDate
  * sourceInstanceName
  * useLatestRestorableAutoSnapshot
  * userData

### CreateInstancesFromSnapshotResult
* CreateInstancesFromSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### CreateInstancesRequest
* CreateInstancesRequest `object`
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOnRequest](#addonrequest)
  * availabilityZone **required**
  * blueprintId **required**
  * bundleId **required**
  * customImageName
  * instanceNames **required**
    * items [string](#string)
  * keyPairName
  * userData

### CreateInstancesResult
* CreateInstancesResult `object`
  * operations
    * items [Operation](#operation)

### CreateKeyPairRequest
* CreateKeyPairRequest `object`
  * tags
    * items [Tag](#tag)
  * keyPairName **required**

### CreateKeyPairResult
* CreateKeyPairResult `object`
  * keyPair
    * tags
      * items [Tag](#tag)
    * arn
    * createdAt
    * fingerprint
    * location
      * availabilityZone
      * regionName
    * name
    * resourceType
    * supportCode
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt
  * privateKeyBase64
  * publicKeyBase64

### CreateLoadBalancerRequest
* CreateLoadBalancerRequest `object`
  * tags
    * items [Tag](#tag)
  * certificateAlternativeNames
    * items [DomainName](#domainname)
  * certificateDomainName
  * certificateName
  * healthCheckPath
  * instancePort **required**
  * loadBalancerName **required**

### CreateLoadBalancerResult
* CreateLoadBalancerResult `object`
  * operations
    * items [Operation](#operation)

### CreateLoadBalancerTlsCertificateRequest
* CreateLoadBalancerTlsCertificateRequest `object`
  * tags
    * items [Tag](#tag)
  * certificateAlternativeNames
    * items [DomainName](#domainname)
  * certificateDomainName **required**
  * certificateName **required**
  * loadBalancerName **required**

### CreateLoadBalancerTlsCertificateResult
* CreateLoadBalancerTlsCertificateResult `object`
  * operations
    * items [Operation](#operation)

### CreateRelationalDatabaseFromSnapshotRequest
* CreateRelationalDatabaseFromSnapshotRequest `object`
  * tags
    * items [Tag](#tag)
  * availabilityZone
  * publiclyAccessible
  * relationalDatabaseBundleId
  * relationalDatabaseName **required**
  * relationalDatabaseSnapshotName
  * restoreTime
  * sourceRelationalDatabaseName
  * useLatestRestorableTime

### CreateRelationalDatabaseFromSnapshotResult
* CreateRelationalDatabaseFromSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### CreateRelationalDatabaseRequest
* CreateRelationalDatabaseRequest `object`
  * tags
    * items [Tag](#tag)
  * availabilityZone
  * masterDatabaseName **required**
  * masterUserPassword
  * masterUsername **required**
  * preferredBackupWindow
  * preferredMaintenanceWindow
  * publiclyAccessible
  * relationalDatabaseBlueprintId **required**
  * relationalDatabaseBundleId **required**
  * relationalDatabaseName **required**

### CreateRelationalDatabaseResult
* CreateRelationalDatabaseResult `object`
  * operations
    * items [Operation](#operation)

### CreateRelationalDatabaseSnapshotRequest
* CreateRelationalDatabaseSnapshotRequest `object`
  * tags
    * items [Tag](#tag)
  * relationalDatabaseName **required**
  * relationalDatabaseSnapshotName **required**

### CreateRelationalDatabaseSnapshotResult
* CreateRelationalDatabaseSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### DeleteAlarmRequest
* DeleteAlarmRequest `object`
  * alarmName **required**

### DeleteAlarmResult
* DeleteAlarmResult `object`
  * operations
    * items [Operation](#operation)

### DeleteAutoSnapshotRequest
* DeleteAutoSnapshotRequest `object`
  * date **required**
  * resourceName **required**

### DeleteAutoSnapshotResult
* DeleteAutoSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### DeleteCertificateRequest
* DeleteCertificateRequest `object`
  * certificateName **required**

### DeleteCertificateResult
* DeleteCertificateResult `object`
  * operations
    * items [Operation](#operation)

### DeleteContactMethodRequest
* DeleteContactMethodRequest `object`
  * protocol **required**

### DeleteContactMethodResult
* DeleteContactMethodResult `object`
  * operations
    * items [Operation](#operation)

### DeleteContainerImageRequest
* DeleteContainerImageRequest `object`
  * image **required**
  * serviceName **required**

### DeleteContainerImageResult
* DeleteContainerImageResult `object`

### DeleteContainerServiceRequest
* DeleteContainerServiceRequest `object`
  * serviceName **required**

### DeleteContainerServiceResult
* DeleteContainerServiceResult `object`

### DeleteDiskRequest
* DeleteDiskRequest `object`
  * diskName **required**
  * forceDeleteAddOns

### DeleteDiskResult
* DeleteDiskResult `object`
  * operations
    * items [Operation](#operation)

### DeleteDiskSnapshotRequest
* DeleteDiskSnapshotRequest `object`
  * diskSnapshotName **required**

### DeleteDiskSnapshotResult
* DeleteDiskSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### DeleteDistributionRequest
* DeleteDistributionRequest `object`
  * distributionName

### DeleteDistributionResult
* DeleteDistributionResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### DeleteDomainEntryRequest
* DeleteDomainEntryRequest `object`
  * domainEntry **required**
    * id
    * isAlias
    * name
    * options
    * target
    * type
  * domainName **required**

### DeleteDomainEntryResult
* DeleteDomainEntryResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### DeleteDomainRequest
* DeleteDomainRequest `object`
  * domainName **required**

### DeleteDomainResult
* DeleteDomainResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### DeleteInstanceRequest
* DeleteInstanceRequest `object`
  * forceDeleteAddOns
  * instanceName **required**

### DeleteInstanceResult
* DeleteInstanceResult `object`
  * operations
    * items [Operation](#operation)

### DeleteInstanceSnapshotRequest
* DeleteInstanceSnapshotRequest `object`
  * instanceSnapshotName **required**

### DeleteInstanceSnapshotResult
* DeleteInstanceSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### DeleteKeyPairRequest
* DeleteKeyPairRequest `object`
  * keyPairName **required**

### DeleteKeyPairResult
* DeleteKeyPairResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### DeleteKnownHostKeysRequest
* DeleteKnownHostKeysRequest `object`
  * instanceName **required**

### DeleteKnownHostKeysResult
* DeleteKnownHostKeysResult `object`
  * operations
    * items [Operation](#operation)

### DeleteLoadBalancerRequest
* DeleteLoadBalancerRequest `object`
  * loadBalancerName **required**

### DeleteLoadBalancerResult
* DeleteLoadBalancerResult `object`
  * operations
    * items [Operation](#operation)

### DeleteLoadBalancerTlsCertificateRequest
* DeleteLoadBalancerTlsCertificateRequest `object`
  * certificateName **required**
  * force
  * loadBalancerName **required**

### DeleteLoadBalancerTlsCertificateResult
* DeleteLoadBalancerTlsCertificateResult `object`
  * operations
    * items [Operation](#operation)

### DeleteRelationalDatabaseRequest
* DeleteRelationalDatabaseRequest `object`
  * finalRelationalDatabaseSnapshotName
  * relationalDatabaseName **required**
  * skipFinalSnapshot

### DeleteRelationalDatabaseResult
* DeleteRelationalDatabaseResult `object`
  * operations
    * items [Operation](#operation)

### DeleteRelationalDatabaseSnapshotRequest
* DeleteRelationalDatabaseSnapshotRequest `object`
  * relationalDatabaseSnapshotName **required**

### DeleteRelationalDatabaseSnapshotResult
* DeleteRelationalDatabaseSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### DestinationInfo
* DestinationInfo `object`: Describes the destination of a record.
  * id
  * service

### DetachCertificateFromDistributionRequest
* DetachCertificateFromDistributionRequest `object`
  * distributionName **required**

### DetachCertificateFromDistributionResult
* DetachCertificateFromDistributionResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### DetachDiskRequest
* DetachDiskRequest `object`
  * diskName **required**

### DetachDiskResult
* DetachDiskResult `object`
  * operations
    * items [Operation](#operation)

### DetachInstancesFromLoadBalancerRequest
* DetachInstancesFromLoadBalancerRequest `object`
  * instanceNames **required**
    * items [ResourceName](#resourcename)
  * loadBalancerName **required**

### DetachInstancesFromLoadBalancerResult
* DetachInstancesFromLoadBalancerResult `object`
  * operations
    * items [Operation](#operation)

### DetachStaticIpRequest
* DetachStaticIpRequest `object`
  * staticIpName **required**

### DetachStaticIpResult
* DetachStaticIpResult `object`
  * operations
    * items [Operation](#operation)

### DisableAddOnRequest
* DisableAddOnRequest `object`
  * addOnType **required**
  * resourceName **required**

### DisableAddOnResult
* DisableAddOnResult `object`
  * operations
    * items [Operation](#operation)

### Disk
* Disk `object`: Describes a system disk or a block storage disk.
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOn](#addon)
  * arn
  * attachedTo
  * attachmentState
  * createdAt
  * gbInUse
  * iops
  * isAttached
  * isSystemDisk
  * location
    * availabilityZone
    * regionName
  * name
  * path
  * resourceType
  * sizeInGb
  * state
  * supportCode

### DiskInfo
* DiskInfo `object`: Describes a disk.
  * isSystemDisk
  * name
  * path
  * sizeInGb

### DiskInfoList
* DiskInfoList `array`
  * items [DiskInfo](#diskinfo)

### DiskList
* DiskList `array`
  * items [Disk](#disk)

### DiskMap
* DiskMap `object`: Describes a block storage disk mapping.
  * newDiskName
  * originalDiskPath

### DiskMapList
* DiskMapList `array`
  * items [DiskMap](#diskmap)

### DiskSnapshot
* DiskSnapshot `object`: Describes a block storage disk snapshot.
  * tags
    * items [Tag](#tag)
  * arn
  * createdAt
  * fromDiskArn
  * fromDiskName
  * fromInstanceArn
  * fromInstanceName
  * isFromAutoSnapshot
  * location
    * availabilityZone
    * regionName
  * name
  * progress
  * resourceType
  * sizeInGb
  * state
  * supportCode

### DiskSnapshotInfo
* DiskSnapshotInfo `object`: Describes a disk snapshot.
  * sizeInGb

### DiskSnapshotList
* DiskSnapshotList `array`
  * items [DiskSnapshot](#disksnapshot)

### DiskSnapshotState
* DiskSnapshotState `string` (values: pending, completed, error, unknown)

### DiskState
* DiskState `string` (values: pending, error, available, in-use, unknown)

### DistributionBundle
* DistributionBundle `object`: Describes the specifications of a distribution bundle.
  * bundleId
  * isActive
  * name
  * price
  * transferPerMonthInGb

### DistributionBundleList
* DistributionBundleList `array`
  * items [DistributionBundle](#distributionbundle)

### DistributionList
* DistributionList `array`
  * items [LightsailDistribution](#lightsaildistribution)

### DistributionMetricName
* DistributionMetricName `string` (values: Requests, BytesDownloaded, BytesUploaded, TotalErrorRate, Http4xxErrorRate, Http5xxErrorRate)

### Domain
* Domain `object`: Describes a domain where you are storing recordsets in Lightsail.
  * tags
    * items [Tag](#tag)
  * arn
  * createdAt
  * domainEntries
    * items [DomainEntry](#domainentry)
  * location
    * availabilityZone
    * regionName
  * name
  * resourceType
  * supportCode

### DomainEntry
* DomainEntry `object`: Describes a domain recordset entry.
  * id
  * isAlias
  * name
  * options
  * target
  * type

### DomainEntryList
* DomainEntryList `array`
  * items [DomainEntry](#domainentry)

### DomainEntryOptions
* DomainEntryOptions `object`

### DomainEntryOptionsKeys
* DomainEntryOptionsKeys `string`

### DomainEntryType
* DomainEntryType `string`

### DomainList
* DomainList `array`
  * items [Domain](#domain)

### DomainName
* DomainName `string`

### DomainNameList
* DomainNameList `array`
  * items [DomainName](#domainname)

### DomainValidationRecord
* DomainValidationRecord `object`: Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.
  * domainName
  * resourceRecord
    * name
    * type
    * value

### DomainValidationRecordList
* DomainValidationRecordList `array`
  * items [DomainValidationRecord](#domainvalidationrecord)

### DownloadDefaultKeyPairRequest
* DownloadDefaultKeyPairRequest `object`

### DownloadDefaultKeyPairResult
* DownloadDefaultKeyPairResult `object`
  * privateKeyBase64
  * publicKeyBase64

### EligibleToRenew
* EligibleToRenew `string`

### EnableAddOnRequest
* EnableAddOnRequest `object`
  * addOnRequest **required**
    * addOnType **required**
    * autoSnapshotAddOnRequest
      * snapshotTimeOfDay
  * resourceName **required**

### EnableAddOnResult
* EnableAddOnResult `object`
  * operations
    * items [Operation](#operation)

### EndpointRequest
* EndpointRequest `object`: Describes the settings of a public endpoint for an Amazon Lightsail container service.
  * containerName **required**
  * containerPort **required**
  * healthCheck
    * healthyThreshold
    * intervalSeconds
    * path
    * successCodes
    * timeoutSeconds
    * unhealthyThreshold

### Environment
* Environment `object`

### ExportSnapshotRecord
* ExportSnapshotRecord `object`: Describes an export snapshot record.
  * arn
  * createdAt
  * destinationInfo
    * id
    * service
  * location
    * availabilityZone
    * regionName
  * name
  * resourceType
  * sourceInfo
    * arn
    * createdAt
    * diskSnapshotInfo
      * sizeInGb
    * fromResourceArn
    * fromResourceName
    * instanceSnapshotInfo
      * fromBlueprintId
      * fromBundleId
      * fromDiskInfo
        * items [DiskInfo](#diskinfo)
    * name
    * resourceType
  * state

### ExportSnapshotRecordList
* ExportSnapshotRecordList `array`
  * items [ExportSnapshotRecord](#exportsnapshotrecord)

### ExportSnapshotRecordSourceInfo
* ExportSnapshotRecordSourceInfo `object`: Describes the source of an export snapshot record.
  * arn
  * createdAt
  * diskSnapshotInfo
    * sizeInGb
  * fromResourceArn
  * fromResourceName
  * instanceSnapshotInfo
    * fromBlueprintId
    * fromBundleId
    * fromDiskInfo
      * items [DiskInfo](#diskinfo)
  * name
  * resourceType

### ExportSnapshotRecordSourceType
* ExportSnapshotRecordSourceType `string` (values: InstanceSnapshot, DiskSnapshot)

### ExportSnapshotRequest
* ExportSnapshotRequest `object`
  * sourceSnapshotName **required**

### ExportSnapshotResult
* ExportSnapshotResult `object`
  * operations
    * items [Operation](#operation)

### ForwardValues
* ForwardValues `string` (values: none, allow-list, all)

### GetActiveNamesRequest
* GetActiveNamesRequest `object`
  * pageToken

### GetActiveNamesResult
* GetActiveNamesResult `object`
  * activeNames
    * items [string](#string)
  * nextPageToken

### GetAlarmsRequest
* GetAlarmsRequest `object`
  * alarmName
  * monitoredResourceName
  * pageToken

### GetAlarmsResult
* GetAlarmsResult `object`
  * alarms
    * items [Alarm](#alarm)
  * nextPageToken

### GetAutoSnapshotsRequest
* GetAutoSnapshotsRequest `object`
  * resourceName **required**

### GetAutoSnapshotsResult
* GetAutoSnapshotsResult `object`
  * autoSnapshots
    * items [AutoSnapshotDetails](#autosnapshotdetails)
  * resourceName
  * resourceType

### GetBlueprintsRequest
* GetBlueprintsRequest `object`
  * includeInactive
  * pageToken

### GetBlueprintsResult
* GetBlueprintsResult `object`
  * blueprints
    * items [Blueprint](#blueprint)
  * nextPageToken

### GetBundlesRequest
* GetBundlesRequest `object`
  * includeInactive
  * pageToken

### GetBundlesResult
* GetBundlesResult `object`
  * bundles
    * items [Bundle](#bundle)
  * nextPageToken

### GetCertificatesRequest
* GetCertificatesRequest `object`
  * certificateName
  * certificateStatuses
    * items [CertificateStatus](#certificatestatus)
  * includeCertificateDetails

### GetCertificatesResult
* GetCertificatesResult `object`
  * certificates
    * items [CertificateSummary](#certificatesummary)

### GetCloudFormationStackRecordsRequest
* GetCloudFormationStackRecordsRequest `object`
  * pageToken

### GetCloudFormationStackRecordsResult
* GetCloudFormationStackRecordsResult `object`
  * cloudFormationStackRecords
    * items [CloudFormationStackRecord](#cloudformationstackrecord)
  * nextPageToken

### GetContactMethodsRequest
* GetContactMethodsRequest `object`
  * protocols
    * items [ContactProtocol](#contactprotocol)

### GetContactMethodsResult
* GetContactMethodsResult `object`
  * contactMethods
    * items [ContactMethod](#contactmethod)

### GetContainerAPIMetadataRequest
* GetContainerAPIMetadataRequest `object`

### GetContainerAPIMetadataResult
* GetContainerAPIMetadataResult `object`
  * metadata
    * items [ContainerServiceMetadataEntry](#containerservicemetadataentry)

### GetContainerImagesRequest
* GetContainerImagesRequest `object`
  * serviceName **required**

### GetContainerImagesResult
* GetContainerImagesResult `object`
  * containerImages
    * items [ContainerImage](#containerimage)

### GetContainerLogRequest
* GetContainerLogRequest `object`
  * containerName **required**
  * endTime
  * filterPattern
  * pageToken
  * serviceName **required**
  * startTime

### GetContainerLogResult
* GetContainerLogResult `object`
  * logEvents
    * items [ContainerServiceLogEvent](#containerservicelogevent)
  * nextPageToken

### GetContainerServiceDeploymentsRequest
* GetContainerServiceDeploymentsRequest `object`
  * serviceName **required**

### GetContainerServiceDeploymentsResult
* GetContainerServiceDeploymentsResult `object`
  * deployments
    * items [ContainerServiceDeployment](#containerservicedeployment)

### GetContainerServiceMetricDataRequest
* GetContainerServiceMetricDataRequest `object`
  * endTime **required**
  * metricName **required**
  * period **required**
  * serviceName **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)

### GetContainerServiceMetricDataResult
* GetContainerServiceMetricDataResult `object`
  * metricData
    * items [MetricDatapoint](#metricdatapoint)
  * metricName

### GetContainerServicePowersRequest
* GetContainerServicePowersRequest `object`

### GetContainerServicePowersResult
* GetContainerServicePowersResult `object`
  * powers
    * items [ContainerServicePower](#containerservicepower)

### GetContainerServicesRequest
* GetContainerServicesRequest `object`
  * serviceName

### GetDiskRequest
* GetDiskRequest `object`
  * diskName **required**

### GetDiskResult
* GetDiskResult `object`
  * disk
    * tags
      * items [Tag](#tag)
    * addOns
      * items [AddOn](#addon)
    * arn
    * attachedTo
    * attachmentState
    * createdAt
    * gbInUse
    * iops
    * isAttached
    * isSystemDisk
    * location
      * availabilityZone
      * regionName
    * name
    * path
    * resourceType
    * sizeInGb
    * state
    * supportCode

### GetDiskSnapshotRequest
* GetDiskSnapshotRequest `object`
  * diskSnapshotName **required**

### GetDiskSnapshotResult
* GetDiskSnapshotResult `object`
  * diskSnapshot
    * tags
      * items [Tag](#tag)
    * arn
    * createdAt
    * fromDiskArn
    * fromDiskName
    * fromInstanceArn
    * fromInstanceName
    * isFromAutoSnapshot
    * location
      * availabilityZone
      * regionName
    * name
    * progress
    * resourceType
    * sizeInGb
    * state
    * supportCode

### GetDiskSnapshotsRequest
* GetDiskSnapshotsRequest `object`
  * pageToken

### GetDiskSnapshotsResult
* GetDiskSnapshotsResult `object`
  * diskSnapshots
    * items [DiskSnapshot](#disksnapshot)
  * nextPageToken

### GetDisksRequest
* GetDisksRequest `object`
  * pageToken

### GetDisksResult
* GetDisksResult `object`
  * disks
    * items [Disk](#disk)
  * nextPageToken

### GetDistributionBundlesRequest
* GetDistributionBundlesRequest `object`

### GetDistributionBundlesResult
* GetDistributionBundlesResult `object`
  * bundles
    * items [DistributionBundle](#distributionbundle)

### GetDistributionLatestCacheResetRequest
* GetDistributionLatestCacheResetRequest `object`
  * distributionName

### GetDistributionLatestCacheResetResult
* GetDistributionLatestCacheResetResult `object`
  * createTime
  * status

### GetDistributionMetricDataRequest
* GetDistributionMetricDataRequest `object`
  * distributionName **required**
  * endTime **required**
  * metricName **required**
  * period **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)
  * unit **required**

### GetDistributionMetricDataResult
* GetDistributionMetricDataResult `object`
  * metricData
    * items [MetricDatapoint](#metricdatapoint)
  * metricName

### GetDistributionsRequest
* GetDistributionsRequest `object`
  * distributionName
  * pageToken

### GetDistributionsResult
* GetDistributionsResult `object`
  * distributions
    * items [LightsailDistribution](#lightsaildistribution)
  * nextPageToken

### GetDomainRequest
* GetDomainRequest `object`
  * domainName **required**

### GetDomainResult
* GetDomainResult `object`
  * domain
    * tags
      * items [Tag](#tag)
    * arn
    * createdAt
    * domainEntries
      * items [DomainEntry](#domainentry)
    * location
      * availabilityZone
      * regionName
    * name
    * resourceType
    * supportCode

### GetDomainsRequest
* GetDomainsRequest `object`
  * pageToken

### GetDomainsResult
* GetDomainsResult `object`
  * domains
    * items [Domain](#domain)
  * nextPageToken

### GetExportSnapshotRecordsRequest
* GetExportSnapshotRecordsRequest `object`
  * pageToken

### GetExportSnapshotRecordsResult
* GetExportSnapshotRecordsResult `object`
  * exportSnapshotRecords
    * items [ExportSnapshotRecord](#exportsnapshotrecord)
  * nextPageToken

### GetInstanceAccessDetailsRequest
* GetInstanceAccessDetailsRequest `object`
  * instanceName **required**
  * protocol

### GetInstanceAccessDetailsResult
* GetInstanceAccessDetailsResult `object`
  * accessDetails
    * certKey
    * expiresAt
    * hostKeys
      * items [HostKeyAttributes](#hostkeyattributes)
    * instanceName
    * ipAddress
    * password
    * passwordData
      * ciphertext
      * keyPairName
    * privateKey
    * protocol
    * username

### GetInstanceMetricDataRequest
* GetInstanceMetricDataRequest `object`
  * endTime **required**
  * instanceName **required**
  * metricName **required**
  * period **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)
  * unit **required**

### GetInstanceMetricDataResult
* GetInstanceMetricDataResult `object`
  * metricData
    * items [MetricDatapoint](#metricdatapoint)
  * metricName

### GetInstancePortStatesRequest
* GetInstancePortStatesRequest `object`
  * instanceName **required**

### GetInstancePortStatesResult
* GetInstancePortStatesResult `object`
  * portStates
    * items [InstancePortState](#instanceportstate)

### GetInstanceRequest
* GetInstanceRequest `object`
  * instanceName **required**

### GetInstanceResult
* GetInstanceResult `object`
  * instance
    * tags
      * items [Tag](#tag)
    * addOns
      * items [AddOn](#addon)
    * arn
    * blueprintId
    * blueprintName
    * bundleId
    * createdAt
    * hardware
      * cpuCount
      * disks
        * items [Disk](#disk)
      * ramSizeInGb
    * ipv6Address
    * isStaticIp
    * location
      * availabilityZone
      * regionName
    * name
    * networking
      * monthlyTransfer
        * gbPerMonthAllocated
      * ports
        * items [InstancePortInfo](#instanceportinfo)
    * privateIpAddress
    * publicIpAddress
    * resourceType
    * sshKeyName
    * state
      * code
      * name
    * supportCode
    * username

### GetInstanceSnapshotRequest
* GetInstanceSnapshotRequest `object`
  * instanceSnapshotName **required**

### GetInstanceSnapshotResult
* GetInstanceSnapshotResult `object`
  * instanceSnapshot
    * tags
      * items [Tag](#tag)
    * arn
    * createdAt
    * fromAttachedDisks
      * items [Disk](#disk)
    * fromBlueprintId
    * fromBundleId
    * fromInstanceArn
    * fromInstanceName
    * isFromAutoSnapshot
    * location
      * availabilityZone
      * regionName
    * name
    * progress
    * resourceType
    * sizeInGb
    * state
    * supportCode

### GetInstanceSnapshotsRequest
* GetInstanceSnapshotsRequest `object`
  * pageToken

### GetInstanceSnapshotsResult
* GetInstanceSnapshotsResult `object`
  * instanceSnapshots
    * items [InstanceSnapshot](#instancesnapshot)
  * nextPageToken

### GetInstanceStateRequest
* GetInstanceStateRequest `object`
  * instanceName **required**

### GetInstanceStateResult
* GetInstanceStateResult `object`
  * state
    * code
    * name

### GetInstancesRequest
* GetInstancesRequest `object`
  * pageToken

### GetInstancesResult
* GetInstancesResult `object`
  * instances
    * items [Instance](#instance)
  * nextPageToken

### GetKeyPairRequest
* GetKeyPairRequest `object`
  * keyPairName **required**

### GetKeyPairResult
* GetKeyPairResult `object`
  * keyPair
    * tags
      * items [Tag](#tag)
    * arn
    * createdAt
    * fingerprint
    * location
      * availabilityZone
      * regionName
    * name
    * resourceType
    * supportCode

### GetKeyPairsRequest
* GetKeyPairsRequest `object`
  * pageToken

### GetKeyPairsResult
* GetKeyPairsResult `object`
  * keyPairs
    * items [KeyPair](#keypair)
  * nextPageToken

### GetLoadBalancerMetricDataRequest
* GetLoadBalancerMetricDataRequest `object`
  * endTime **required**
  * loadBalancerName **required**
  * metricName **required**
  * period **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)
  * unit **required**

### GetLoadBalancerMetricDataResult
* GetLoadBalancerMetricDataResult `object`
  * metricData
    * items [MetricDatapoint](#metricdatapoint)
  * metricName

### GetLoadBalancerRequest
* GetLoadBalancerRequest `object`
  * loadBalancerName **required**

### GetLoadBalancerResult
* GetLoadBalancerResult `object`
  * loadBalancer
    * tags
      * items [Tag](#tag)
    * arn
    * configurationOptions
    * createdAt
    * dnsName
    * healthCheckPath
    * instanceHealthSummary
      * items [InstanceHealthSummary](#instancehealthsummary)
    * instancePort
    * location
      * availabilityZone
      * regionName
    * name
    * protocol
    * publicPorts
      * items [Port](#port)
    * resourceType
    * state
    * supportCode
    * tlsCertificateSummaries
      * items [LoadBalancerTlsCertificateSummary](#loadbalancertlscertificatesummary)

### GetLoadBalancerTlsCertificatesRequest
* GetLoadBalancerTlsCertificatesRequest `object`
  * loadBalancerName **required**

### GetLoadBalancerTlsCertificatesResult
* GetLoadBalancerTlsCertificatesResult `object`
  * tlsCertificates
    * items [LoadBalancerTlsCertificate](#loadbalancertlscertificate)

### GetLoadBalancersRequest
* GetLoadBalancersRequest `object`
  * pageToken

### GetLoadBalancersResult
* GetLoadBalancersResult `object`
  * loadBalancers
    * items [LoadBalancer](#loadbalancer)
  * nextPageToken

### GetOperationRequest
* GetOperationRequest `object`
  * operationId **required**

### GetOperationResult
* GetOperationResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### GetOperationsForResourceRequest
* GetOperationsForResourceRequest `object`
  * pageToken
  * resourceName **required**

### GetOperationsForResourceResult
* GetOperationsForResourceResult `object`
  * nextPageCount
  * nextPageToken
  * operations
    * items [Operation](#operation)

### GetOperationsRequest
* GetOperationsRequest `object`
  * pageToken

### GetOperationsResult
* GetOperationsResult `object`
  * nextPageToken
  * operations
    * items [Operation](#operation)

### GetRegionsRequest
* GetRegionsRequest `object`
  * includeAvailabilityZones
  * includeRelationalDatabaseAvailabilityZones

### GetRegionsResult
* GetRegionsResult `object`
  * regions
    * items [Region](#region)

### GetRelationalDatabaseBlueprintsRequest
* GetRelationalDatabaseBlueprintsRequest `object`
  * pageToken

### GetRelationalDatabaseBlueprintsResult
* GetRelationalDatabaseBlueprintsResult `object`
  * blueprints
    * items [RelationalDatabaseBlueprint](#relationaldatabaseblueprint)
  * nextPageToken

### GetRelationalDatabaseBundlesRequest
* GetRelationalDatabaseBundlesRequest `object`
  * pageToken

### GetRelationalDatabaseBundlesResult
* GetRelationalDatabaseBundlesResult `object`
  * bundles
    * items [RelationalDatabaseBundle](#relationaldatabasebundle)
  * nextPageToken

### GetRelationalDatabaseEventsRequest
* GetRelationalDatabaseEventsRequest `object`
  * durationInMinutes
  * pageToken
  * relationalDatabaseName **required**

### GetRelationalDatabaseEventsResult
* GetRelationalDatabaseEventsResult `object`
  * nextPageToken
  * relationalDatabaseEvents
    * items [RelationalDatabaseEvent](#relationaldatabaseevent)

### GetRelationalDatabaseLogEventsRequest
* GetRelationalDatabaseLogEventsRequest `object`
  * endTime
  * logStreamName **required**
  * pageToken
  * relationalDatabaseName **required**
  * startFromHead
  * startTime

### GetRelationalDatabaseLogEventsResult
* GetRelationalDatabaseLogEventsResult `object`
  * nextBackwardToken
  * nextForwardToken
  * resourceLogEvents
    * items [LogEvent](#logevent)

### GetRelationalDatabaseLogStreamsRequest
* GetRelationalDatabaseLogStreamsRequest `object`
  * relationalDatabaseName **required**

### GetRelationalDatabaseLogStreamsResult
* GetRelationalDatabaseLogStreamsResult `object`
  * logStreams
    * items [string](#string)

### GetRelationalDatabaseMasterUserPasswordRequest
* GetRelationalDatabaseMasterUserPasswordRequest `object`
  * passwordVersion
  * relationalDatabaseName **required**

### GetRelationalDatabaseMasterUserPasswordResult
* GetRelationalDatabaseMasterUserPasswordResult `object`
  * createdAt
  * masterUserPassword

### GetRelationalDatabaseMetricDataRequest
* GetRelationalDatabaseMetricDataRequest `object`
  * endTime **required**
  * metricName **required**
  * period **required**
  * relationalDatabaseName **required**
  * startTime **required**
  * statistics **required**
    * items [MetricStatistic](#metricstatistic)
  * unit **required**

### GetRelationalDatabaseMetricDataResult
* GetRelationalDatabaseMetricDataResult `object`
  * metricData
    * items [MetricDatapoint](#metricdatapoint)
  * metricName

### GetRelationalDatabaseParametersRequest
* GetRelationalDatabaseParametersRequest `object`
  * pageToken
  * relationalDatabaseName **required**

### GetRelationalDatabaseParametersResult
* GetRelationalDatabaseParametersResult `object`
  * parameters
    * items [RelationalDatabaseParameter](#relationaldatabaseparameter)
  * nextPageToken

### GetRelationalDatabaseRequest
* GetRelationalDatabaseRequest `object`
  * relationalDatabaseName **required**

### GetRelationalDatabaseResult
* GetRelationalDatabaseResult `object`
  * relationalDatabase
    * tags
      * items [Tag](#tag)
    * arn
    * backupRetentionEnabled
    * caCertificateIdentifier
    * createdAt
    * engine
    * engineVersion
    * hardware
      * cpuCount
      * diskSizeInGb
      * ramSizeInGb
    * latestRestorableTime
    * location
      * availabilityZone
      * regionName
    * masterDatabaseName
    * masterEndpoint
      * address
      * port
    * masterUsername
    * name
    * parameterApplyStatus
    * pendingMaintenanceActions
      * items [PendingMaintenanceAction](#pendingmaintenanceaction)
    * pendingModifiedValues
      * backupRetentionEnabled
      * engineVersion
      * masterUserPassword
    * preferredBackupWindow
    * preferredMaintenanceWindow
    * publiclyAccessible
    * relationalDatabaseBlueprintId
    * relationalDatabaseBundleId
    * resourceType
    * secondaryAvailabilityZone
    * state
    * supportCode

### GetRelationalDatabaseSnapshotRequest
* GetRelationalDatabaseSnapshotRequest `object`
  * relationalDatabaseSnapshotName **required**

### GetRelationalDatabaseSnapshotResult
* GetRelationalDatabaseSnapshotResult `object`
  * relationalDatabaseSnapshot
    * tags
      * items [Tag](#tag)
    * arn
    * createdAt
    * engine
    * engineVersion
    * fromRelationalDatabaseArn
    * fromRelationalDatabaseBlueprintId
    * fromRelationalDatabaseBundleId
    * fromRelationalDatabaseName
    * location
      * availabilityZone
      * regionName
    * name
    * resourceType
    * sizeInGb
    * state
    * supportCode

### GetRelationalDatabaseSnapshotsRequest
* GetRelationalDatabaseSnapshotsRequest `object`
  * pageToken

### GetRelationalDatabaseSnapshotsResult
* GetRelationalDatabaseSnapshotsResult `object`
  * nextPageToken
  * relationalDatabaseSnapshots
    * items [RelationalDatabaseSnapshot](#relationaldatabasesnapshot)

### GetRelationalDatabasesRequest
* GetRelationalDatabasesRequest `object`
  * pageToken

### GetRelationalDatabasesResult
* GetRelationalDatabasesResult `object`
  * nextPageToken
  * relationalDatabases
    * items [RelationalDatabase](#relationaldatabase)

### GetStaticIpRequest
* GetStaticIpRequest `object`
  * staticIpName **required**

### GetStaticIpResult
* GetStaticIpResult `object`
  * staticIp
    * arn
    * attachedTo
    * createdAt
    * ipAddress
    * isAttached
    * location
      * availabilityZone
      * regionName
    * name
    * resourceType
    * supportCode

### GetStaticIpsRequest
* GetStaticIpsRequest `object`
  * pageToken

### GetStaticIpsResult
* GetStaticIpsResult `object`
  * nextPageToken
  * staticIps
    * items [StaticIp](#staticip)

### HeaderEnum
* HeaderEnum `string` (values: Accept, Accept-Charset, Accept-Datetime, Accept-Encoding, Accept-Language, Authorization, CloudFront-Forwarded-Proto, CloudFront-Is-Desktop-Viewer, CloudFront-Is-Mobile-Viewer, CloudFront-Is-SmartTV-Viewer, CloudFront-Is-Tablet-Viewer, CloudFront-Viewer-Country, Host, Origin, Referer)

### HeaderForwardList
* HeaderForwardList `array`
  * items [HeaderEnum](#headerenum)

### HeaderObject
* HeaderObject `object`: <p>Describes the request headers that a Lightsail distribution bases caching on.</p> <p>For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure your distribution to cache your content based on values in the <code>product</code> header. Your distribution forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. </p>
  * headersAllowList
    * items [HeaderEnum](#headerenum)
  * option

### HostKeyAttributes
* HostKeyAttributes `object`: Describes the public SSH host keys or the RDP certificate.
  * algorithm
  * fingerprintSHA1
  * fingerprintSHA256
  * notValidAfter
  * notValidBefore
  * publicKey
  * witnessedAt

### HostKeysList
* HostKeysList `array`
  * items [HostKeyAttributes](#hostkeyattributes)

### ImportKeyPairRequest
* ImportKeyPairRequest `object`
  * keyPairName **required**
  * publicKeyBase64 **required**

### ImportKeyPairResult
* ImportKeyPairResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### InUseResourceCount
* InUseResourceCount `integer`

### IncludeCertificateDetails
* IncludeCertificateDetails `boolean`

### InputOrigin
* InputOrigin `object`: <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>
  * name
  * protocolPolicy
  * regionName

### Instance
* Instance `object`: Describes an instance (a virtual private server).
  * tags
    * items [Tag](#tag)
  * addOns
    * items [AddOn](#addon)
  * arn
  * blueprintId
  * blueprintName
  * bundleId
  * createdAt
  * hardware
    * cpuCount
    * disks
      * items [Disk](#disk)
    * ramSizeInGb
  * ipv6Address
  * isStaticIp
  * location
    * availabilityZone
    * regionName
  * name
  * networking
    * monthlyTransfer
      * gbPerMonthAllocated
    * ports
      * items [InstancePortInfo](#instanceportinfo)
  * privateIpAddress
  * publicIpAddress
  * resourceType
  * sshKeyName
  * state
    * code
    * name
  * supportCode
  * username

### InstanceAccessDetails
* InstanceAccessDetails `object`: The parameters for gaining temporary access to one of your Amazon Lightsail instances.
  * certKey
  * expiresAt
  * hostKeys
    * items [HostKeyAttributes](#hostkeyattributes)
  * instanceName
  * ipAddress
  * password
  * passwordData
    * ciphertext
    * keyPairName
  * privateKey
  * protocol
  * username

### InstanceAccessProtocol
* InstanceAccessProtocol `string` (values: ssh, rdp)

### InstanceEntry
* InstanceEntry `object`: Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.
  * availabilityZone **required**
  * instanceType **required**
  * portInfoSource **required**
  * sourceName **required**
  * userData

### InstanceEntryList
* InstanceEntryList `array`
  * items [InstanceEntry](#instanceentry)

### InstanceHardware
* InstanceHardware `object`: Describes the hardware for the instance.
  * cpuCount
  * disks
    * items [Disk](#disk)
  * ramSizeInGb

### InstanceHealthReason
* InstanceHealthReason `string` (values: Lb.RegistrationInProgress, Lb.InitialHealthChecking, Lb.InternalError, Instance.ResponseCodeMismatch, Instance.Timeout, Instance.FailedHealthChecks, Instance.NotRegistered, Instance.NotInUse, Instance.DeregistrationInProgress, Instance.InvalidState, Instance.IpUnusable)

### InstanceHealthState
* InstanceHealthState `string` (values: initial, healthy, unhealthy, unused, draining, unavailable)

### InstanceHealthSummary
* InstanceHealthSummary `object`: Describes information about the health of the instance.
  * instanceHealth
  * instanceHealthReason
  * instanceName

### InstanceHealthSummaryList
* InstanceHealthSummaryList `array`
  * items [InstanceHealthSummary](#instancehealthsummary)

### InstanceList
* InstanceList `array`
  * items [Instance](#instance)

### InstanceMetricName
* InstanceMetricName `string` (values: CPUUtilization, NetworkIn, NetworkOut, StatusCheckFailed, StatusCheckFailed_Instance, StatusCheckFailed_System, BurstCapacityTime, BurstCapacityPercentage)

### InstanceNetworking
* InstanceNetworking `object`: Describes monthly data transfer rates and port information for an instance.
  * monthlyTransfer
    * gbPerMonthAllocated
  * ports
    * items [InstancePortInfo](#instanceportinfo)

### InstancePlatform
* InstancePlatform `string` (values: LINUX_UNIX, WINDOWS)

### InstancePlatformList
* InstancePlatformList `array`
  * items [InstancePlatform](#instanceplatform)

### InstancePortInfo
* InstancePortInfo `object`: Describes information about ports for an Amazon Lightsail instance.
  * accessDirection
  * accessFrom
  * accessType
  * cidrListAliases
    * items [string](#string)
  * cidrs
    * items [string](#string)
  * commonName
  * fromPort
  * protocol
  * toPort

### InstancePortInfoList
* InstancePortInfoList `array`
  * items [InstancePortInfo](#instanceportinfo)

### InstancePortState
* InstancePortState `object`: Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
  * cidrListAliases
    * items [string](#string)
  * cidrs
    * items [string](#string)
  * fromPort
  * protocol
  * state
  * toPort

### InstancePortStateList
* InstancePortStateList `array`
  * items [InstancePortState](#instanceportstate)

### InstanceSnapshot
* InstanceSnapshot `object`: Describes an instance snapshot.
  * tags
    * items [Tag](#tag)
  * arn
  * createdAt
  * fromAttachedDisks
    * items [Disk](#disk)
  * fromBlueprintId
  * fromBundleId
  * fromInstanceArn
  * fromInstanceName
  * isFromAutoSnapshot
  * location
    * availabilityZone
    * regionName
  * name
  * progress
  * resourceType
  * sizeInGb
  * state
  * supportCode

### InstanceSnapshotInfo
* InstanceSnapshotInfo `object`: Describes an instance snapshot.
  * fromBlueprintId
  * fromBundleId
  * fromDiskInfo
    * items [DiskInfo](#diskinfo)

### InstanceSnapshotList
* InstanceSnapshotList `array`
  * items [InstanceSnapshot](#instancesnapshot)

### InstanceSnapshotState
* InstanceSnapshotState `string` (values: pending, error, available)

### InstanceState
* InstanceState `object`: Describes the virtual private server (or <i>instance</i>) status.
  * code
  * name

### InvalidInputException


### IpAddress
* IpAddress `string`

### IpV6Address
* IpV6Address `string`

### IsVpcPeeredRequest
* IsVpcPeeredRequest `object`

### IsVpcPeeredResult
* IsVpcPeeredResult `object`
  * isPeered

### IsoDate
* IsoDate `string`

### IssuerCA
* IssuerCA `string`

### KeyAlgorithm
* KeyAlgorithm `string`

### KeyPair
* KeyPair `object`: Describes the SSH key pair.
  * tags
    * items [Tag](#tag)
  * arn
  * createdAt
  * fingerprint
  * location
    * availabilityZone
    * regionName
  * name
  * resourceType
  * supportCode

### KeyPairList
* KeyPairList `array`
  * items [KeyPair](#keypair)

### LightsailDistribution
* LightsailDistribution `object`: Describes an Amazon Lightsail content delivery network (CDN) distribution.
  * tags
    * items [Tag](#tag)
  * ableToUpdateBundle
  * alternativeDomainNames
    * items [string](#string)
  * arn
  * bundleId
  * cacheBehaviorSettings
    * allowedHTTPMethods
    * cachedHTTPMethods
    * defaultTTL
    * forwardedCookies
      * cookiesAllowList
        * items [string](#string)
      * option
    * forwardedHeaders
      * headersAllowList
        * items [HeaderEnum](#headerenum)
      * option
    * forwardedQueryStrings
      * option
      * queryStringsAllowList
        * items [string](#string)
    * maximumTTL
    * minimumTTL
  * cacheBehaviors
    * items [CacheBehaviorPerPath](#cachebehaviorperpath)
  * certificateName
  * createdAt
  * defaultCacheBehavior
    * behavior
  * domainName
  * isEnabled
  * location
    * availabilityZone
    * regionName
  * name
  * origin
    * name
    * protocolPolicy
    * regionName
    * resourceType
  * originPublicDNS
  * resourceType
  * status
  * supportCode

### LoadBalancer
* LoadBalancer `object`: Describes the Lightsail load balancer.
  * tags
    * items [Tag](#tag)
  * arn
  * configurationOptions
  * createdAt
  * dnsName
  * healthCheckPath
  * instanceHealthSummary
    * items [InstanceHealthSummary](#instancehealthsummary)
  * instancePort
  * location
    * availabilityZone
    * regionName
  * name
  * protocol
  * publicPorts
    * items [Port](#port)
  * resourceType
  * state
  * supportCode
  * tlsCertificateSummaries
    * items [LoadBalancerTlsCertificateSummary](#loadbalancertlscertificatesummary)

### LoadBalancerAttributeName
* LoadBalancerAttributeName `string` (values: HealthCheckPath, SessionStickinessEnabled, SessionStickiness_LB_CookieDurationSeconds)

### LoadBalancerConfigurationOptions
* LoadBalancerConfigurationOptions `object`

### LoadBalancerList
* LoadBalancerList `array`
  * items [LoadBalancer](#loadbalancer)

### LoadBalancerMetricName
* LoadBalancerMetricName `string` (values: ClientTLSNegotiationErrorCount, HealthyHostCount, UnhealthyHostCount, HTTPCode_LB_4XX_Count, HTTPCode_LB_5XX_Count, HTTPCode_Instance_2XX_Count, HTTPCode_Instance_3XX_Count, HTTPCode_Instance_4XX_Count, HTTPCode_Instance_5XX_Count, InstanceResponseTime, RejectedConnectionCount, RequestCount)

### LoadBalancerProtocol
* LoadBalancerProtocol `string` (values: HTTP_HTTPS, HTTP)

### LoadBalancerState
* LoadBalancerState `string` (values: active, provisioning, active_impaired, failed, unknown)

### LoadBalancerTlsCertificate
* LoadBalancerTlsCertificate `object`: <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
  * tags
    * items [Tag](#tag)
  * arn
  * createdAt
  * domainName
  * domainValidationRecords
    * items [LoadBalancerTlsCertificateDomainValidationRecord](#loadbalancertlscertificatedomainvalidationrecord)
  * failureReason
  * isAttached
  * issuedAt
  * issuer
  * keyAlgorithm
  * loadBalancerName
  * location
    * availabilityZone
    * regionName
  * name
  * notAfter
  * notBefore
  * renewalSummary
    * domainValidationOptions
      * items [LoadBalancerTlsCertificateDomainValidationOption](#loadbalancertlscertificatedomainvalidationoption)
    * renewalStatus
  * resourceType
  * revocationReason
  * revokedAt
  * serial
  * signatureAlgorithm
  * status
  * subject
  * subjectAlternativeNames
    * items [string](#string)
  * supportCode

### LoadBalancerTlsCertificateDomainStatus
* LoadBalancerTlsCertificateDomainStatus `string` (values: PENDING_VALIDATION, FAILED, SUCCESS)

### LoadBalancerTlsCertificateDomainValidationOption
* LoadBalancerTlsCertificateDomainValidationOption `object`: Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.
  * domainName
  * validationStatus

### LoadBalancerTlsCertificateDomainValidationOptionList
* LoadBalancerTlsCertificateDomainValidationOptionList `array`
  * items [LoadBalancerTlsCertificateDomainValidationOption](#loadbalancertlscertificatedomainvalidationoption)

### LoadBalancerTlsCertificateDomainValidationRecord
* LoadBalancerTlsCertificateDomainValidationRecord `object`: Describes the validation record of each domain name in the SSL/TLS certificate.
  * domainName
  * name
  * type
  * validationStatus
  * value

### LoadBalancerTlsCertificateDomainValidationRecordList
* LoadBalancerTlsCertificateDomainValidationRecordList `array`
  * items [LoadBalancerTlsCertificateDomainValidationRecord](#loadbalancertlscertificatedomainvalidationrecord)

### LoadBalancerTlsCertificateFailureReason
* LoadBalancerTlsCertificateFailureReason `string` (values: NO_AVAILABLE_CONTACTS, ADDITIONAL_VERIFICATION_REQUIRED, DOMAIN_NOT_ALLOWED, INVALID_PUBLIC_DOMAIN, OTHER)

### LoadBalancerTlsCertificateList
* LoadBalancerTlsCertificateList `array`
  * items [LoadBalancerTlsCertificate](#loadbalancertlscertificate)

### LoadBalancerTlsCertificateRenewalStatus
* LoadBalancerTlsCertificateRenewalStatus `string` (values: PENDING_AUTO_RENEWAL, PENDING_VALIDATION, SUCCESS, FAILED)

### LoadBalancerTlsCertificateRenewalSummary
* LoadBalancerTlsCertificateRenewalSummary `object`: <p>Contains information about the status of Lightsail's managed renewal for the certificate.</p> <p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names in the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names in the certificate. You must take action to validate these domain names or the certificate won't be renewed. If you used DNS validation, check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul>
  * domainValidationOptions
    * items [LoadBalancerTlsCertificateDomainValidationOption](#loadbalancertlscertificatedomainvalidationoption)
  * renewalStatus

### LoadBalancerTlsCertificateRevocationReason
* LoadBalancerTlsCertificateRevocationReason `string` (values: UNSPECIFIED, KEY_COMPROMISE, CA_COMPROMISE, AFFILIATION_CHANGED, SUPERCEDED, CESSATION_OF_OPERATION, CERTIFICATE_HOLD, REMOVE_FROM_CRL, PRIVILEGE_WITHDRAWN, A_A_COMPROMISE)

### LoadBalancerTlsCertificateStatus
* LoadBalancerTlsCertificateStatus `string` (values: PENDING_VALIDATION, ISSUED, INACTIVE, EXPIRED, VALIDATION_TIMED_OUT, REVOKED, FAILED, UNKNOWN)

### LoadBalancerTlsCertificateSummary
* LoadBalancerTlsCertificateSummary `object`: Provides a summary of SSL/TLS certificate metadata.
  * isAttached
  * name

### LoadBalancerTlsCertificateSummaryList
* LoadBalancerTlsCertificateSummaryList `array`
  * items [LoadBalancerTlsCertificateSummary](#loadbalancertlscertificatesummary)

### LogEvent
* LogEvent `object`: Describes a database log event.
  * createdAt
  * message

### LogEventList
* LogEventList `array`
  * items [LogEvent](#logevent)

### MetricDatapoint
* MetricDatapoint `object`: Describes the metric data point.
  * average
  * maximum
  * minimum
  * sampleCount
  * sum
  * timestamp
  * unit

### MetricDatapointList
* MetricDatapointList `array`
  * items [MetricDatapoint](#metricdatapoint)

### MetricName
* MetricName `string` (values: CPUUtilization, NetworkIn, NetworkOut, StatusCheckFailed, StatusCheckFailed_Instance, StatusCheckFailed_System, ClientTLSNegotiationErrorCount, HealthyHostCount, UnhealthyHostCount, HTTPCode_LB_4XX_Count, HTTPCode_LB_5XX_Count, HTTPCode_Instance_2XX_Count, HTTPCode_Instance_3XX_Count, HTTPCode_Instance_4XX_Count, HTTPCode_Instance_5XX_Count, InstanceResponseTime, RejectedConnectionCount, RequestCount, DatabaseConnections, DiskQueueDepth, FreeStorageSpace, NetworkReceiveThroughput, NetworkTransmitThroughput, BurstCapacityTime, BurstCapacityPercentage)

### MetricPeriod
* MetricPeriod `integer`

### MetricStatistic
* MetricStatistic `string` (values: Minimum, Maximum, Sum, Average, SampleCount)

### MetricStatisticList
* MetricStatisticList `array`
  * items [MetricStatistic](#metricstatistic)

### MetricUnit
* MetricUnit `string` (values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, None)

### MonitoredResourceInfo
* MonitoredResourceInfo `object`: <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
  * arn
  * name
  * resourceType

### MonthlyTransfer
* MonthlyTransfer `object`: Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>).
  * gbPerMonthAllocated

### NetworkProtocol
* NetworkProtocol `string` (values: tcp, all, udp, icmp)

### NonEmptyString
* NonEmptyString `string`

### NotFoundException


### NotificationTriggerList
* NotificationTriggerList `array`
  * items [AlarmState](#alarmstate)

### OpenInstancePublicPortsRequest
* OpenInstancePublicPortsRequest `object`
  * instanceName **required**
  * portInfo **required**
    * cidrListAliases
      * items [string](#string)
    * cidrs
      * items [string](#string)
    * fromPort
    * protocol
    * toPort

### OpenInstancePublicPortsResult
* OpenInstancePublicPortsResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### Operation
* Operation `object`: Describes the API operation.
  * createdAt
  * errorCode
  * errorDetails
  * id
  * isTerminal
  * location
    * availabilityZone
    * regionName
  * operationDetails
  * operationType
  * resourceName
  * resourceType
  * status
  * statusChangedAt

### OperationFailureException


### OperationList
* OperationList `array`
  * items [Operation](#operation)

### OperationStatus
* OperationStatus `string` (values: NotStarted, Started, Failed, Completed, Succeeded)

### OperationType
* OperationType `string` (values: DeleteKnownHostKeys, DeleteInstance, CreateInstance, StopInstance, StartInstance, RebootInstance, OpenInstancePublicPorts, PutInstancePublicPorts, CloseInstancePublicPorts, AllocateStaticIp, ReleaseStaticIp, AttachStaticIp, DetachStaticIp, UpdateDomainEntry, DeleteDomainEntry, CreateDomain, DeleteDomain, CreateInstanceSnapshot, DeleteInstanceSnapshot, CreateInstancesFromSnapshot, CreateLoadBalancer, DeleteLoadBalancer, AttachInstancesToLoadBalancer, DetachInstancesFromLoadBalancer, UpdateLoadBalancerAttribute, CreateLoadBalancerTlsCertificate, DeleteLoadBalancerTlsCertificate, AttachLoadBalancerTlsCertificate, CreateDisk, DeleteDisk, AttachDisk, DetachDisk, CreateDiskSnapshot, DeleteDiskSnapshot, CreateDiskFromSnapshot, CreateRelationalDatabase, UpdateRelationalDatabase, DeleteRelationalDatabase, CreateRelationalDatabaseFromSnapshot, CreateRelationalDatabaseSnapshot, DeleteRelationalDatabaseSnapshot, UpdateRelationalDatabaseParameters, StartRelationalDatabase, RebootRelationalDatabase, StopRelationalDatabase, EnableAddOn, DisableAddOn, PutAlarm, GetAlarms, DeleteAlarm, TestAlarm, CreateContactMethod, GetContactMethods, SendContactMethodVerification, DeleteContactMethod, CreateDistribution, UpdateDistribution, DeleteDistribution, ResetDistributionCache, AttachCertificateToDistribution, DetachCertificateFromDistribution, UpdateDistributionBundle, CreateCertificate, DeleteCertificate, CreateContainerService, UpdateContainerService, DeleteContainerService, CreateContainerServiceDeployment, CreateContainerServiceRegistryLogin, RegisterContainerImage, DeleteContainerImage)

### Origin
* Origin `object`: <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>
  * name
  * protocolPolicy
  * regionName
  * resourceType

### OriginProtocolPolicyEnum
* OriginProtocolPolicyEnum `string` (values: http-only, https-only)

### PasswordData
* PasswordData `object`: The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
  * ciphertext
  * keyPairName

### PeerVpcRequest
* PeerVpcRequest `object`

### PeerVpcResult
* PeerVpcResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### PendingMaintenanceAction
* PendingMaintenanceAction `object`: Describes a pending database maintenance action.
  * action
  * currentApplyDate
  * description

### PendingMaintenanceActionList
* PendingMaintenanceActionList `array`
  * items [PendingMaintenanceAction](#pendingmaintenanceaction)

### PendingModifiedRelationalDatabaseValues
* PendingModifiedRelationalDatabaseValues `object`: Describes a pending database value modification.
  * backupRetentionEnabled
  * engineVersion
  * masterUserPassword

### Port
* Port `integer`

### PortAccessType
* PortAccessType `string` (values: Public, Private)

### PortInfo
* PortInfo `object`: Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
  * cidrListAliases
    * items [string](#string)
  * cidrs
    * items [string](#string)
  * fromPort
  * protocol
  * toPort

### PortInfoList
* PortInfoList `array`
  * items [PortInfo](#portinfo)

### PortInfoSourceType
* PortInfoSourceType `string` (values: DEFAULT, INSTANCE, NONE, CLOSED)

### PortList
* PortList `array`
  * items [Port](#port)

### PortMap
* PortMap `object`

### PortState
* PortState `string` (values: open, closed)

### PutAlarmRequest
* PutAlarmRequest `object`
  * alarmName **required**
  * comparisonOperator **required**
  * contactProtocols
    * items [ContactProtocol](#contactprotocol)
  * datapointsToAlarm
  * evaluationPeriods **required**
  * metricName **required**
  * monitoredResourceName **required**
  * notificationEnabled
  * notificationTriggers
    * items [AlarmState](#alarmstate)
  * threshold **required**
  * treatMissingData

### PutAlarmResult
* PutAlarmResult `object`
  * operations
    * items [Operation](#operation)

### PutInstancePublicPortsRequest
* PutInstancePublicPortsRequest `object`
  * instanceName **required**
  * portInfos **required**
    * items [PortInfo](#portinfo)

### PutInstancePublicPortsResult
* PutInstancePublicPortsResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### QueryStringObject
* QueryStringObject `object`: <p>Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.</p> <p>For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.</p>
  * option
  * queryStringsAllowList
    * items [string](#string)

### RebootInstanceRequest
* RebootInstanceRequest `object`
  * instanceName **required**

### RebootInstanceResult
* RebootInstanceResult `object`
  * operations
    * items [Operation](#operation)

### RebootRelationalDatabaseRequest
* RebootRelationalDatabaseRequest `object`
  * relationalDatabaseName **required**

### RebootRelationalDatabaseResult
* RebootRelationalDatabaseResult `object`
  * operations
    * items [Operation](#operation)

### RecordState
* RecordState `string` (values: Started, Succeeded, Failed)

### Region
* Region `object`: Describes the AWS Region.
  * availabilityZones
    * items [AvailabilityZone](#availabilityzone)
  * continentCode
  * description
  * displayName
  * name
  * relationalDatabaseAvailabilityZones
    * items [AvailabilityZone](#availabilityzone)

### RegionList
* RegionList `array`
  * items [Region](#region)

### RegionName
* RegionName `string` (values: us-east-1, us-east-2, us-west-1, us-west-2, eu-west-1, eu-west-2, eu-west-3, eu-central-1, ca-central-1, ap-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2)

### RegisterContainerImageRequest
* RegisterContainerImageRequest `object`
  * digest **required**
  * label **required**
  * serviceName **required**

### RegisterContainerImageResult
* RegisterContainerImageResult `object`
  * containerImage [ContainerImage](#containerimage)

### RelationalDatabase
* RelationalDatabase `object`: Describes a database.
  * tags
    * items [Tag](#tag)
  * arn
  * backupRetentionEnabled
  * caCertificateIdentifier
  * createdAt
  * engine
  * engineVersion
  * hardware
    * cpuCount
    * diskSizeInGb
    * ramSizeInGb
  * latestRestorableTime
  * location
    * availabilityZone
    * regionName
  * masterDatabaseName
  * masterEndpoint
    * address
    * port
  * masterUsername
  * name
  * parameterApplyStatus
  * pendingMaintenanceActions
    * items [PendingMaintenanceAction](#pendingmaintenanceaction)
  * pendingModifiedValues
    * backupRetentionEnabled
    * engineVersion
    * masterUserPassword
  * preferredBackupWindow
  * preferredMaintenanceWindow
  * publiclyAccessible
  * relationalDatabaseBlueprintId
  * relationalDatabaseBundleId
  * resourceType
  * secondaryAvailabilityZone
  * state
  * supportCode

### RelationalDatabaseBlueprint
* RelationalDatabaseBlueprint `object`: Describes a database image, or blueprint. A blueprint describes the major engine version of a database.
  * blueprintId
  * engine
  * engineDescription
  * engineVersion
  * engineVersionDescription
  * isEngineDefault

### RelationalDatabaseBlueprintList
* RelationalDatabaseBlueprintList `array`
  * items [RelationalDatabaseBlueprint](#relationaldatabaseblueprint)

### RelationalDatabaseBundle
* RelationalDatabaseBundle `object`: Describes a database bundle. A bundle describes the performance specifications of the database.
  * bundleId
  * cpuCount
  * diskSizeInGb
  * isActive
  * isEncrypted
  * name
  * price
  * ramSizeInGb
  * transferPerMonthInGb

### RelationalDatabaseBundleList
* RelationalDatabaseBundleList `array`
  * items [RelationalDatabaseBundle](#relationaldatabasebundle)

### RelationalDatabaseEndpoint
* RelationalDatabaseEndpoint `object`: Describes an endpoint for a database.
  * address
  * port

### RelationalDatabaseEngine
* RelationalDatabaseEngine `string` (values: mysql)

### RelationalDatabaseEvent
* RelationalDatabaseEvent `object`: Describes an event for a database.
  * createdAt
  * eventCategories
    * items [string](#string)
  * message
  * resource

### RelationalDatabaseEventList
* RelationalDatabaseEventList `array`
  * items [RelationalDatabaseEvent](#relationaldatabaseevent)

### RelationalDatabaseHardware
* RelationalDatabaseHardware `object`: Describes the hardware of a database.
  * cpuCount
  * diskSizeInGb
  * ramSizeInGb

### RelationalDatabaseList
* RelationalDatabaseList `array`
  * items [RelationalDatabase](#relationaldatabase)

### RelationalDatabaseMetricName
* RelationalDatabaseMetricName `string` (values: CPUUtilization, DatabaseConnections, DiskQueueDepth, FreeStorageSpace, NetworkReceiveThroughput, NetworkTransmitThroughput)

### RelationalDatabaseParameter
* RelationalDatabaseParameter `object`: Describes the parameters of a database.
  * allowedValues
  * applyMethod
  * applyType
  * dataType
  * description
  * isModifiable
  * parameterName
  * parameterValue

### RelationalDatabaseParameterList
* RelationalDatabaseParameterList `array`
  * items [RelationalDatabaseParameter](#relationaldatabaseparameter)

### RelationalDatabasePasswordVersion
* RelationalDatabasePasswordVersion `string` (values: CURRENT, PREVIOUS, PENDING)

### RelationalDatabaseSnapshot
* RelationalDatabaseSnapshot `object`: Describes a database snapshot.
  * tags
    * items [Tag](#tag)
  * arn
  * createdAt
  * engine
  * engineVersion
  * fromRelationalDatabaseArn
  * fromRelationalDatabaseBlueprintId
  * fromRelationalDatabaseBundleId
  * fromRelationalDatabaseName
  * location
    * availabilityZone
    * regionName
  * name
  * resourceType
  * sizeInGb
  * state
  * supportCode

### RelationalDatabaseSnapshotList
* RelationalDatabaseSnapshotList `array`
  * items [RelationalDatabaseSnapshot](#relationaldatabasesnapshot)

### ReleaseStaticIpRequest
* ReleaseStaticIpRequest `object`
  * staticIpName **required**

### ReleaseStaticIpResult
* ReleaseStaticIpResult `object`
  * operations
    * items [Operation](#operation)

### RenewalStatus
* RenewalStatus `string` (values: PendingAutoRenewal, PendingValidation, Success, Failed)

### RenewalStatusReason
* RenewalStatusReason `string`

### RenewalSummary
* RenewalSummary `object`: Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.
  * domainValidationRecords
    * items [DomainValidationRecord](#domainvalidationrecord)
  * renewalStatus
  * renewalStatusReason
  * updatedAt

### RequestFailureReason
* RequestFailureReason `string`

### ResetDistributionCacheRequest
* ResetDistributionCacheRequest `object`
  * distributionName

### ResetDistributionCacheResult
* ResetDistributionCacheResult `object`
  * createTime
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt
  * status

### ResourceArn
* ResourceArn `string`

### ResourceLocation
* ResourceLocation `object`: Describes the resource location.
  * availabilityZone
  * regionName

### ResourceName
* ResourceName `string`

### ResourceNameList
* ResourceNameList `array`
  * items [ResourceName](#resourcename)

### ResourceRecord
* ResourceRecord `object`: Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate.
  * name
  * type
  * value

### ResourceType
* ResourceType `string` (values: ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate)

### RevocationReason
* RevocationReason `string`

### SendContactMethodVerificationRequest
* SendContactMethodVerificationRequest `object`
  * protocol **required**

### SendContactMethodVerificationResult
* SendContactMethodVerificationResult `object`
  * operations
    * items [Operation](#operation)

### SensitiveString
* SensitiveString `string`

### SerialNumber
* SerialNumber `string`

### ServiceException


### StartInstanceRequest
* StartInstanceRequest `object`
  * instanceName **required**

### StartInstanceResult
* StartInstanceResult `object`
  * operations
    * items [Operation](#operation)

### StartRelationalDatabaseRequest
* StartRelationalDatabaseRequest `object`
  * relationalDatabaseName **required**

### StartRelationalDatabaseResult
* StartRelationalDatabaseResult `object`
  * operations
    * items [Operation](#operation)

### StaticIp
* StaticIp `object`: Describes the static IP.
  * arn
  * attachedTo
  * createdAt
  * ipAddress
  * isAttached
  * location
    * availabilityZone
    * regionName
  * name
  * resourceType
  * supportCode

### StaticIpList
* StaticIpList `array`
  * items [StaticIp](#staticip)

### StopInstanceRequest
* StopInstanceRequest `object`
  * force
  * instanceName **required**

### StopInstanceResult
* StopInstanceResult `object`
  * operations
    * items [Operation](#operation)

### StopRelationalDatabaseRequest
* StopRelationalDatabaseRequest `object`
  * relationalDatabaseName **required**
  * relationalDatabaseSnapshotName

### StopRelationalDatabaseResult
* StopRelationalDatabaseResult `object`
  * operations
    * items [Operation](#operation)

### StringList
* StringList `array`
  * items [string](#string)

### StringMax256
* StringMax256 `string`

### SubjectAlternativeNameList
* SubjectAlternativeNameList `array`
  * items [DomainName](#domainname)

### Tag
* Tag `object`: <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
  * key
  * value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn
  * resourceName **required**

### TagResourceResult
* TagResourceResult `object`
  * operations
    * items [Operation](#operation)

### TagValue
* TagValue `string`

### TestAlarmRequest
* TestAlarmRequest `object`
  * alarmName **required**
  * state **required**

### TestAlarmResult
* TestAlarmResult `object`
  * operations
    * items [Operation](#operation)

### TimeOfDay
* TimeOfDay `string`

### TreatMissingData
* TreatMissingData `string` (values: breaching, notBreaching, ignore, missing)

### UnauthenticatedException


### UnpeerVpcRequest
* UnpeerVpcRequest `object`

### UnpeerVpcResult
* UnpeerVpcResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceArn
  * resourceName **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResult
* UntagResourceResult `object`
  * operations
    * items [Operation](#operation)

### UpdateContainerServiceRequest
* UpdateContainerServiceRequest `object`
  * isDisabled
  * power
  * publicDomainNames
  * scale
  * serviceName **required**

### UpdateContainerServiceResult
* UpdateContainerServiceResult `object`
  * containerService
    * tags
      * items [Tag](#tag)
    * arn
    * containerServiceName
    * createdAt
    * currentDeployment
      * containers
      * createdAt
      * publicEndpoint
        * containerName
        * containerPort
        * healthCheck
          * healthyThreshold
          * intervalSeconds
          * path
          * successCodes
          * timeoutSeconds
          * unhealthyThreshold
      * state
      * version
    * isDisabled
    * location
      * availabilityZone
      * regionName
    * nextDeployment
      * containers
      * createdAt
      * publicEndpoint
        * containerName
        * containerPort
        * healthCheck
          * healthyThreshold
          * intervalSeconds
          * path
          * successCodes
          * timeoutSeconds
          * unhealthyThreshold
      * state
      * version
    * power
    * powerId
    * principalArn
    * privateDomainName
    * publicDomainNames
    * resourceType
    * scale
    * state
    * url

### UpdateDistributionBundleRequest
* UpdateDistributionBundleRequest `object`
  * bundleId
  * distributionName

### UpdateDistributionBundleResult
* UpdateDistributionBundleResult `object`
  * operation [Operation](#operation)

### UpdateDistributionRequest
* UpdateDistributionRequest `object`
  * cacheBehaviorSettings
    * allowedHTTPMethods
    * cachedHTTPMethods
    * defaultTTL
    * forwardedCookies
      * cookiesAllowList
        * items [string](#string)
      * option
    * forwardedHeaders
      * headersAllowList
        * items [HeaderEnum](#headerenum)
      * option
    * forwardedQueryStrings
      * option
      * queryStringsAllowList
        * items [string](#string)
    * maximumTTL
    * minimumTTL
  * cacheBehaviors
    * items [CacheBehaviorPerPath](#cachebehaviorperpath)
  * defaultCacheBehavior
    * behavior
  * distributionName **required**
  * isEnabled
  * origin
    * name
    * protocolPolicy
    * regionName

### UpdateDistributionResult
* UpdateDistributionResult `object`
  * operation
    * createdAt
    * errorCode
    * errorDetails
    * id
    * isTerminal
    * location
      * availabilityZone
      * regionName
    * operationDetails
    * operationType
    * resourceName
    * resourceType
    * status
    * statusChangedAt

### UpdateDomainEntryRequest
* UpdateDomainEntryRequest `object`
  * domainEntry **required**
    * id
    * isAlias
    * name
    * options
    * target
    * type
  * domainName **required**

### UpdateDomainEntryResult
* UpdateDomainEntryResult `object`
  * operations
    * items [Operation](#operation)

### UpdateLoadBalancerAttributeRequest
* UpdateLoadBalancerAttributeRequest `object`
  * attributeName **required**
  * attributeValue **required**
  * loadBalancerName **required**

### UpdateLoadBalancerAttributeResult
* UpdateLoadBalancerAttributeResult `object`
  * operations
    * items [Operation](#operation)

### UpdateRelationalDatabaseParametersRequest
* UpdateRelationalDatabaseParametersRequest `object`
  * parameters **required**
    * items [RelationalDatabaseParameter](#relationaldatabaseparameter)
  * relationalDatabaseName **required**

### UpdateRelationalDatabaseParametersResult
* UpdateRelationalDatabaseParametersResult `object`
  * operations
    * items [Operation](#operation)

### UpdateRelationalDatabaseRequest
* UpdateRelationalDatabaseRequest `object`
  * applyImmediately
  * caCertificateIdentifier
  * disableBackupRetention
  * enableBackupRetention
  * masterUserPassword
  * preferredBackupWindow
  * preferredMaintenanceWindow
  * publiclyAccessible
  * relationalDatabaseName **required**
  * rotateMasterUserPassword

### UpdateRelationalDatabaseResult
* UpdateRelationalDatabaseResult `object`
  * operations
    * items [Operation](#operation)

### boolean
* boolean `boolean`

### double
* double `number`

### float
* float `number`

### integer
* integer `integer`

### long
* long `integer`

### string
* string `string`

### timestamp
* timestamp `string`


