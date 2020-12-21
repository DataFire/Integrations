# @datafire/azure_web_appserviceenvironments

Client library for AppServiceEnvironments API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_appserviceenvironments
```
```js
let azure_web_appserviceenvironments = require('@datafire/azure_web_appserviceenvironments').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### AppServiceEnvironments_List
Get all App Service Environments for a subscription.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceEnvironmentCollection](#appserviceenvironmentcollection)

### AppServiceEnvironments_ListByResourceGroup
Get all App Service Environments in a resource group.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceEnvironmentCollection](#appserviceenvironmentcollection)

### AppServiceEnvironments_Delete
Delete an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_Delete({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * forceDelete `boolean`: Specify <code>true</code> to force the deletion even if the App Service Environment contains resources. The default is <code>false</code>.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceEnvironments_Get
Get the properties of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_Get({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceEnvironmentResource](#appserviceenvironmentresource)

### AppServiceEnvironments_Update
Create or update an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_Update({
  "resourceGroupName": "",
  "name": "",
  "hostingEnvironmentEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * hostingEnvironmentEnvelope **required** [AppServiceEnvironmentPatchResource](#appserviceenvironmentpatchresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceEnvironmentResource](#appserviceenvironmentresource)

### AppServiceEnvironments_CreateOrUpdate
Create or update an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_CreateOrUpdate({
  "resourceGroupName": "",
  "name": "",
  "hostingEnvironmentEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * hostingEnvironmentEnvelope **required** [AppServiceEnvironmentResource](#appserviceenvironmentresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AppServiceEnvironmentResource](#appserviceenvironmentresource)

### AppServiceEnvironments_ListCapacities
Get the used, available, and total worker capacity an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListCapacities({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StampCapacityCollection](#stampcapacitycollection)

### AppServiceEnvironments_ListVips
Get IP addresses assigned to an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListVips({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AddressResponse](#addressresponse)

### AppServiceEnvironments_ChangeVnet
Move an App Service Environment to a different VNET.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ChangeVnet({
  "resourceGroupName": "",
  "name": "",
  "vnetInfo": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * vnetInfo **required** `object`: Specification for using a Virtual Network.
    * id `string`: Resource id of the Virtual Network.
    * name `string`: Name of the Virtual Network (read-only).
    * subnet `string`: Subnet within the Virtual Network.
    * type `string`: Resource type of the Virtual Network (read-only).
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of App Service apps.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A web app, a mobile app backend, or an API app.
      * identity `object`: Managed service identity.
        * principalId `string`: Principal Id of managed service identity.
        * tenantId `string`: Tenant of managed service identity.
        * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): Type of managed service identity.
        * userAssignedIdentities `object`: The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
      * properties `object`: Site resource specific properties
        * availabilityState `string` (values: Normal, Limited, DisasterRecoveryMode): Management information availability state for the app.
        * clientAffinityEnabled `boolean`: <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
        * clientCertEnabled `boolean`: <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
        * clientCertExclusionPaths `string`: client certificate authentication comma-separated exclusion paths
        * cloningInfo `object`: Information needed for cloning operation.
          * appSettingsOverrides `object`: Application setting overrides for cloned app. If specified, these settings override the settings cloned 
          * cloneCustomHostNames `boolean`: <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
          * cloneSourceControl `boolean`: <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
          * configureLoadBalancing `boolean`: <code>true</code> to configure load balancing for source and destination app.
          * correlationId `string`: Correlation ID of cloning operation. This ID ties multiple cloning operations
          * hostingEnvironment `string`: App Service Environment.
          * overwrite `boolean`: <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
          * sourceWebAppId **required** `string`: ARM resource ID of the source app. App resource ID is of the form 
          * sourceWebAppLocation `string`: Location of source app ex: West US or North Europe
          * trafficManagerProfileId `string`: ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form 
          * trafficManagerProfileName `string`: Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.
        * containerSize `integer`: Size of the function container.
        * dailyMemoryTimeQuota `integer`: Maximum allowed daily memory-time quota (applicable on dynamic apps only).
        * defaultHostName `string`: Default hostname of the app. Read-only.
        * enabled `boolean`: <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
        * enabledHostNames `array`: Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
          * items `string`
        * geoDistributions `array`: GeoDistributions for this site
          * items `object`: A global distribution definition.
        * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
          * items `object`: SSL-enabled hostname.
        * hostNames `array`: Hostnames associated with the app.
          * items `string`
        * hostNamesDisabled `boolean`: <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
        * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
          * id `string`: Resource ID of the App Service Environment.
          * name `string`: Name of the App Service Environment.
          * type `string`: Resource type of the App Service Environment.
        * httpsOnly `boolean`: HttpsOnly: configures a web site to accept only https requests. Issues redirect for
        * hyperV `boolean`: Hyper-V sandbox.
        * inProgressOperationId `string`: Specifies an operation id if this site has a pending operation.
        * isDefaultContainer `boolean`: <code>true</code> if the app is a default container; otherwise, <code>false</code>.
        * isXenon `boolean`: Obsolete: Hyper-V sandbox.
        * lastModifiedTimeUtc `string`: Last time the app was modified, in UTC. Read-only.
        * maxNumberOfWorkers `integer`: Maximum number of workers.
        * outboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
        * possibleOutboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
        * redundancyMode `string` (values: None, Manual, Failover, ActiveActive, GeoRedundant): Site redundancy mode
        * repositorySiteName `string`: Name of the repository site.
        * reserved `boolean`: <code>true</code> if reserved; otherwise, <code>false</code>.
        * resourceGroup `string`: Name of the resource group the app belongs to. Read-only.
        * scmSiteAlsoStopped `boolean`: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
        * serverFarmId `string`: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
        * siteConfig `object`: Configuration of an App Service app.
          * alwaysOn `boolean`: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
          * apiDefinition `object`: Information about the formal API definition for the app.
          * appCommandLine `string`: App command line to launch.
          * appSettings `array`: Application settings.
          * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
          * autoHealRules `object`: Rules that can be defined for auto-heal.
          * autoSwapSlotName `string`: Auto-swap slot name.
          * azureStorageAccounts `object`: User-provided Azure storage accounts.
          * connectionStrings `array`: Connection strings.
          * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
          * defaultDocuments `array`: Default documents.
          * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
          * documentRoot `string`: Document root.
          * experiments `object`: Routing rules in production experiments.
          * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
          * handlerMappings `array`: Handler mappings.
          * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
          * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
          * ipSecurityRestrictions `array`: IP security restrictions for main.
          * javaContainer `string`: Java container.
          * javaContainerVersion `string`: Java container version.
          * javaVersion `string`: Java version.
          * limits `object`: Metric limits set on an app.
          * linuxFxVersion `string`: Linux App Framework and version
          * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
          * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
          * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
          * machineKey `object`: MachineKey of an app.
          * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
          * managedServiceIdentityId `integer`: Managed Service Identity Id
          * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
          * netFrameworkVersion `string`: .NET Framework version.
          * nodeVersion `string`: Version of Node.js.
          * numberOfWorkers `integer`: Number of workers.
          * phpVersion `string`: Version of PHP.
          * publishingUsername `string`: Publishing user name.
          * push `object`: Push settings for the App.
          * pythonVersion `string`: Version of Python.
          * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
          * remoteDebuggingVersion `string`: Remote debugging version.
          * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
          * requestTracingExpirationTime `string`: Request tracing expiration time.
          * reservedInstanceCount `integer`: Number of reserved instances.
          * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
          * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
          * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
          * tracingOptions `string`: Tracing options.
          * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
          * virtualApplications `array`: Virtual applications.
          * vnetName `string`: Virtual Network name.
          * webSocketsEnabled `boolean`: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
          * windowsFxVersion `string`: Xenon App Framework and version
          * xManagedServiceIdentityId `integer`: Explicit Managed Service Identity Id
        * slotSwapStatus `object`: The status of the last successful slot swap operation.
          * destinationSlotName `string`: The destination slot of the last swap operation.
          * sourceSlotName `string`: The source slot of the last swap operation.
          * timestampUtc `string`: The time the last successful slot swap completed.
        * state `string`: Current state of the app.
        * suspendedTill `string`: App suspended till in case memory-time quota is exceeded.
        * targetSwapSlot `string`: Specifies which deployment slot this app will swap into. Read-only.
        * trafficManagerHostNames `array`: Azure Traffic Manager hostnames associated with the app. Read-only.
          * items `string`
        * usageState `string` (values: Normal, Exceeded): State indicating whether the app has exceeded its quota usage. Read-only.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * location **required** `string`: Resource Location.
      * name `string`: Resource Name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### AppServiceEnvironments_ListDiagnostics
Get diagnostic information for an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListDiagnostics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [HostingEnvironmentDiagnostics](#hostingenvironmentdiagnostics)

### AppServiceEnvironments_GetDiagnosticsItem
Get a diagnostics item for an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_GetDiagnosticsItem({
  "resourceGroupName": "",
  "name": "",
  "diagnosticsName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * diagnosticsName **required** `string`: Name of the diagnostics item.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [HostingEnvironmentDiagnostics](#hostingenvironmentdiagnostics)

### AppServiceEnvironments_GetInboundNetworkDependenciesEndpoints
Get the network endpoints of all inbound dependencies of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_GetInboundNetworkDependenciesEndpoints({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [InboundEnvironmentEndpointCollection](#inboundenvironmentendpointcollection)

### AppServiceEnvironments_ListMetricDefinitions
Get global metric definitions of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MetricDefinition](#metricdefinition)

### AppServiceEnvironments_ListMetrics
Get global metrics of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * details `boolean`: Specify <code>true</code> to include instance details. The default is <code>false</code>.
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric responses.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Object representing a metric for any resource .
      * endTime `string`: Metric end time.
      * id `string`: Resource Id.
      * metricValues `array`: Metric values.
        * items `object`: Value of resource metric.
          * average `number`: Value average.
          * count `number`: Value count.
          * maximum `number`: Value maximum.
          * minimum `number`: Value minimum.
          * properties `array`: Resource metric properties collection.
          * timestamp `string`: Value timestamp.
          * total `number`: Value total.
      * name `object`: Name of a metric for any resource .
        * localizedValue `string`: Localized metric name value.
        * value `string`: metric name value.
      * properties `array`: Resource metric properties collection.
        * items `object`: Resource metric property.
          * key `string`: Key for resource metric property.
          * value `string`: Value of pair.
      * resourceId `string`: Metric resource Id.
      * startTime `string`: Metric start time.
      * timeGrain `string`: Metric granularity. E.g PT1H, PT5M, P1D
      * unit `string`: Metric unit.

### AppServiceEnvironments_ListMultiRolePools
Get all multi-role pools.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListMultiRolePools({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolCollection](#workerpoolcollection)

### AppServiceEnvironments_GetMultiRolePool
Get properties of a multi-role pool.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_GetMultiRolePool({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolResource](#workerpoolresource)

### AppServiceEnvironments_UpdateMultiRolePool
Create or update a multi-role pool.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_UpdateMultiRolePool({
  "resourceGroupName": "",
  "name": "",
  "multiRolePoolEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * multiRolePoolEnvelope **required** [WorkerPoolResource](#workerpoolresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolResource](#workerpoolresource)

### AppServiceEnvironments_CreateOrUpdateMultiRolePool
Create or update a multi-role pool.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_CreateOrUpdateMultiRolePool({
  "resourceGroupName": "",
  "name": "",
  "multiRolePoolEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * multiRolePoolEnvelope **required** [WorkerPoolResource](#workerpoolresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolResource](#workerpoolresource)

### AppServiceEnvironments_ListMultiRolePoolInstanceMetricDefinitions
Get metric definitions for a specific instance of a multi-role pool of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListMultiRolePoolInstanceMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * instance **required** `string`: Name of the instance in the multi-role pool.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric definitions.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Metadata for the metrics.
      * properties `object`: ResourceMetricDefinition resource specific properties
        * metricAvailabilities `array`: List of time grains supported for the metric together with retention period.
          * items `object`: Metrics availability and retention.
        * primaryAggregationType `string`: Primary aggregation type.
        * properties `object`: Resource metric definition properties.
        * resourceUri `string`: Resource URI.
        * unit `string`: Unit of the metric.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### AppServiceEnvironments_ListMultiRolePoolInstanceMetrics
Get metrics for a specific instance of a multi-role pool of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListMultiRolePoolInstanceMetrics({
  "resourceGroupName": "",
  "name": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * instance **required** `string`: Name of the instance in the multi-role pool.
  * details `boolean`: Specify <code>true</code> to include instance details. The default is <code>false</code>.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric responses.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Object representing a metric for any resource .
      * endTime `string`: Metric end time.
      * id `string`: Resource Id.
      * metricValues `array`: Metric values.
        * items `object`: Value of resource metric.
          * average `number`: Value average.
          * count `number`: Value count.
          * maximum `number`: Value maximum.
          * minimum `number`: Value minimum.
          * properties `array`: Resource metric properties collection.
          * timestamp `string`: Value timestamp.
          * total `number`: Value total.
      * name `object`: Name of a metric for any resource .
        * localizedValue `string`: Localized metric name value.
        * value `string`: metric name value.
      * properties `array`: Resource metric properties collection.
        * items `object`: Resource metric property.
          * key `string`: Key for resource metric property.
          * value `string`: Value of pair.
      * resourceId `string`: Metric resource Id.
      * startTime `string`: Metric start time.
      * timeGrain `string`: Metric granularity. E.g PT1H, PT5M, P1D
      * unit `string`: Metric unit.

### AppServiceEnvironments_ListMultiRoleMetricDefinitions
Get metric definitions for a multi-role pool of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListMultiRoleMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric definitions.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Metadata for the metrics.
      * properties `object`: ResourceMetricDefinition resource specific properties
        * metricAvailabilities `array`: List of time grains supported for the metric together with retention period.
          * items `object`: Metrics availability and retention.
        * primaryAggregationType `string`: Primary aggregation type.
        * properties `object`: Resource metric definition properties.
        * resourceUri `string`: Resource URI.
        * unit `string`: Unit of the metric.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### AppServiceEnvironments_ListMultiRoleMetrics
Get metrics for a multi-role pool of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListMultiRoleMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * startTime `string`: Beginning time of the metrics query.
  * endTime `string`: End time of the metrics query.
  * timeGrain `string`: Time granularity of the metrics query.
  * details `boolean`: Specify <code>true</code> to include instance details. The default is <code>false</code>.
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric responses.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Object representing a metric for any resource .
      * endTime `string`: Metric end time.
      * id `string`: Resource Id.
      * metricValues `array`: Metric values.
        * items `object`: Value of resource metric.
          * average `number`: Value average.
          * count `number`: Value count.
          * maximum `number`: Value maximum.
          * minimum `number`: Value minimum.
          * properties `array`: Resource metric properties collection.
          * timestamp `string`: Value timestamp.
          * total `number`: Value total.
      * name `object`: Name of a metric for any resource .
        * localizedValue `string`: Localized metric name value.
        * value `string`: metric name value.
      * properties `array`: Resource metric properties collection.
        * items `object`: Resource metric property.
          * key `string`: Key for resource metric property.
          * value `string`: Value of pair.
      * resourceId `string`: Metric resource Id.
      * startTime `string`: Metric start time.
      * timeGrain `string`: Metric granularity. E.g PT1H, PT5M, P1D
      * unit `string`: Metric unit.

### AppServiceEnvironments_ListMultiRolePoolSkus
Get available SKUs for scaling a multi-role pool.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListMultiRolePoolSkus({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SkuInfoCollection](#skuinfocollection)

### AppServiceEnvironments_ListMultiRoleUsages
Get usage metrics for a multi-role pool of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListMultiRoleUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [UsageCollection](#usagecollection)

### AppServiceEnvironments_ListOperations
List all currently running operations on the App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListOperations({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items `object`: An operation on a resource.
    * createdTime `string`: Time when operation has started.
    * errors `array`: Any errors associate with the operation.
      * items `object`: Body of the error response returned from the API.
        * code `string`: Basic error code.
        * extendedCode `string`: Type of error.
        * innerErrors `array`: Inner errors.
          * items [ErrorEntity](#errorentity)
        * message `string`: Any details of the error.
        * messageTemplate `string`: Message template.
        * parameters `array`: Parameters for the template.
          * items `string`
    * expirationTime `string`: Time when operation will expire.
    * geoMasterOperationId `string`: Applicable only for stamp operation ids.
    * id `string`: Operation ID.
    * modifiedTime `string`: Time when operation has been updated.
    * name `string`: Operation name.
    * status `string` (values: InProgress, Failed, Succeeded, TimedOut, Created): The current status of the operation.

### AppServiceEnvironments_GetOutboundNetworkDependenciesEndpoints
Get the network endpoints of all outbound dependencies of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_GetOutboundNetworkDependenciesEndpoints({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [OutboundEnvironmentEndpointCollection](#outboundenvironmentendpointcollection)

### AppServiceEnvironments_Reboot
Reboot all machines in an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_Reboot({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### AppServiceEnvironments_Resume
Resume an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_Resume({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of App Service apps.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A web app, a mobile app backend, or an API app.
      * identity `object`: Managed service identity.
        * principalId `string`: Principal Id of managed service identity.
        * tenantId `string`: Tenant of managed service identity.
        * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): Type of managed service identity.
        * userAssignedIdentities `object`: The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
      * properties `object`: Site resource specific properties
        * availabilityState `string` (values: Normal, Limited, DisasterRecoveryMode): Management information availability state for the app.
        * clientAffinityEnabled `boolean`: <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
        * clientCertEnabled `boolean`: <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
        * clientCertExclusionPaths `string`: client certificate authentication comma-separated exclusion paths
        * cloningInfo `object`: Information needed for cloning operation.
          * appSettingsOverrides `object`: Application setting overrides for cloned app. If specified, these settings override the settings cloned 
          * cloneCustomHostNames `boolean`: <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
          * cloneSourceControl `boolean`: <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
          * configureLoadBalancing `boolean`: <code>true</code> to configure load balancing for source and destination app.
          * correlationId `string`: Correlation ID of cloning operation. This ID ties multiple cloning operations
          * hostingEnvironment `string`: App Service Environment.
          * overwrite `boolean`: <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
          * sourceWebAppId **required** `string`: ARM resource ID of the source app. App resource ID is of the form 
          * sourceWebAppLocation `string`: Location of source app ex: West US or North Europe
          * trafficManagerProfileId `string`: ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form 
          * trafficManagerProfileName `string`: Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.
        * containerSize `integer`: Size of the function container.
        * dailyMemoryTimeQuota `integer`: Maximum allowed daily memory-time quota (applicable on dynamic apps only).
        * defaultHostName `string`: Default hostname of the app. Read-only.
        * enabled `boolean`: <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
        * enabledHostNames `array`: Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
          * items `string`
        * geoDistributions `array`: GeoDistributions for this site
          * items `object`: A global distribution definition.
        * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
          * items `object`: SSL-enabled hostname.
        * hostNames `array`: Hostnames associated with the app.
          * items `string`
        * hostNamesDisabled `boolean`: <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
        * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
          * id `string`: Resource ID of the App Service Environment.
          * name `string`: Name of the App Service Environment.
          * type `string`: Resource type of the App Service Environment.
        * httpsOnly `boolean`: HttpsOnly: configures a web site to accept only https requests. Issues redirect for
        * hyperV `boolean`: Hyper-V sandbox.
        * inProgressOperationId `string`: Specifies an operation id if this site has a pending operation.
        * isDefaultContainer `boolean`: <code>true</code> if the app is a default container; otherwise, <code>false</code>.
        * isXenon `boolean`: Obsolete: Hyper-V sandbox.
        * lastModifiedTimeUtc `string`: Last time the app was modified, in UTC. Read-only.
        * maxNumberOfWorkers `integer`: Maximum number of workers.
        * outboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
        * possibleOutboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
        * redundancyMode `string` (values: None, Manual, Failover, ActiveActive, GeoRedundant): Site redundancy mode
        * repositorySiteName `string`: Name of the repository site.
        * reserved `boolean`: <code>true</code> if reserved; otherwise, <code>false</code>.
        * resourceGroup `string`: Name of the resource group the app belongs to. Read-only.
        * scmSiteAlsoStopped `boolean`: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
        * serverFarmId `string`: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
        * siteConfig `object`: Configuration of an App Service app.
          * alwaysOn `boolean`: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
          * apiDefinition `object`: Information about the formal API definition for the app.
          * appCommandLine `string`: App command line to launch.
          * appSettings `array`: Application settings.
          * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
          * autoHealRules `object`: Rules that can be defined for auto-heal.
          * autoSwapSlotName `string`: Auto-swap slot name.
          * azureStorageAccounts `object`: User-provided Azure storage accounts.
          * connectionStrings `array`: Connection strings.
          * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
          * defaultDocuments `array`: Default documents.
          * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
          * documentRoot `string`: Document root.
          * experiments `object`: Routing rules in production experiments.
          * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
          * handlerMappings `array`: Handler mappings.
          * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
          * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
          * ipSecurityRestrictions `array`: IP security restrictions for main.
          * javaContainer `string`: Java container.
          * javaContainerVersion `string`: Java container version.
          * javaVersion `string`: Java version.
          * limits `object`: Metric limits set on an app.
          * linuxFxVersion `string`: Linux App Framework and version
          * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
          * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
          * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
          * machineKey `object`: MachineKey of an app.
          * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
          * managedServiceIdentityId `integer`: Managed Service Identity Id
          * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
          * netFrameworkVersion `string`: .NET Framework version.
          * nodeVersion `string`: Version of Node.js.
          * numberOfWorkers `integer`: Number of workers.
          * phpVersion `string`: Version of PHP.
          * publishingUsername `string`: Publishing user name.
          * push `object`: Push settings for the App.
          * pythonVersion `string`: Version of Python.
          * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
          * remoteDebuggingVersion `string`: Remote debugging version.
          * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
          * requestTracingExpirationTime `string`: Request tracing expiration time.
          * reservedInstanceCount `integer`: Number of reserved instances.
          * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
          * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
          * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
          * tracingOptions `string`: Tracing options.
          * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
          * virtualApplications `array`: Virtual applications.
          * vnetName `string`: Virtual Network name.
          * webSocketsEnabled `boolean`: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
          * windowsFxVersion `string`: Xenon App Framework and version
          * xManagedServiceIdentityId `integer`: Explicit Managed Service Identity Id
        * slotSwapStatus `object`: The status of the last successful slot swap operation.
          * destinationSlotName `string`: The destination slot of the last swap operation.
          * sourceSlotName `string`: The source slot of the last swap operation.
          * timestampUtc `string`: The time the last successful slot swap completed.
        * state `string`: Current state of the app.
        * suspendedTill `string`: App suspended till in case memory-time quota is exceeded.
        * targetSwapSlot `string`: Specifies which deployment slot this app will swap into. Read-only.
        * trafficManagerHostNames `array`: Azure Traffic Manager hostnames associated with the app. Read-only.
          * items `string`
        * usageState `string` (values: Normal, Exceeded): State indicating whether the app has exceeded its quota usage. Read-only.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * location **required** `string`: Resource Location.
      * name `string`: Resource Name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### AppServiceEnvironments_ListAppServicePlans
Get all App Service plans in an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListAppServicePlans({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of App Service plans.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: App Service plan.
      * properties `object`: AppServicePlan resource specific properties
        * freeOfferExpirationTime `string`: The time when the server farm free offer expires.
        * geoRegion `string`: Geographical location for the App Service plan.
        * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
          * id `string`: Resource ID of the App Service Environment.
          * name `string`: Name of the App Service Environment.
          * type `string`: Resource type of the App Service Environment.
        * hyperV `boolean`: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
        * isSpot `boolean`: If <code>true</code>, this App Service Plan owns spot instances.
        * isXenon `boolean`: Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
        * maximumElasticWorkerCount `integer`: Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
        * maximumNumberOfWorkers `integer`: Maximum number of instances that can be assigned to this App Service plan.
        * numberOfSites `integer`: Number of apps assigned to this App Service plan.
        * perSiteScaling `boolean`: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
        * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
        * reserved `boolean`: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
        * resourceGroup `string`: Resource group of the App Service plan.
        * spotExpirationTime `string`: The time when the server farm expires. Valid only if it is a spot server farm.
        * status `string` (values: Ready, Pending, Creating): App Service plan status.
        * subscription `string`: App Service plan subscription.
        * targetWorkerCount `integer`: Scaling worker count.
        * targetWorkerSizeId `integer`: Scaling worker size ID.
        * workerTierName `string`: Target worker tier assigned to the App Service plan.
      * sku `object`: Description of a SKU for a scalable resource.
        * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
          * items `object`: Describes the capabilities/features allowed for a specific SKU.
        * capacity `integer`: Current number of instances assigned to the resource.
        * family `string`: Family code of the resource SKU.
        * locations `array`: Locations of the SKU.
          * items `string`
        * name `string`: Name of the resource SKU.
        * size `string`: Size specifier of the resource SKU.
        * skuCapacity `object`: Description of the App Service plan scale options.
          * default `integer`: Default number of workers for this App Service plan SKU.
          * maximum `integer`: Maximum number of workers for this App Service plan SKU.
          * minimum `integer`: Minimum number of workers for this App Service plan SKU.
          * scaleType `string`: Available scale configurations for an App Service plan.
        * tier `string`: Service tier of the resource SKU.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * location **required** `string`: Resource Location.
      * name `string`: Resource Name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### AppServiceEnvironments_ListWebApps
Get all apps in an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListWebApps({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * propertiesToInclude `string`: Comma separated list of app properties to include.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of App Service apps.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A web app, a mobile app backend, or an API app.
      * identity `object`: Managed service identity.
        * principalId `string`: Principal Id of managed service identity.
        * tenantId `string`: Tenant of managed service identity.
        * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): Type of managed service identity.
        * userAssignedIdentities `object`: The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
      * properties `object`: Site resource specific properties
        * availabilityState `string` (values: Normal, Limited, DisasterRecoveryMode): Management information availability state for the app.
        * clientAffinityEnabled `boolean`: <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
        * clientCertEnabled `boolean`: <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
        * clientCertExclusionPaths `string`: client certificate authentication comma-separated exclusion paths
        * cloningInfo `object`: Information needed for cloning operation.
          * appSettingsOverrides `object`: Application setting overrides for cloned app. If specified, these settings override the settings cloned 
          * cloneCustomHostNames `boolean`: <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
          * cloneSourceControl `boolean`: <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
          * configureLoadBalancing `boolean`: <code>true</code> to configure load balancing for source and destination app.
          * correlationId `string`: Correlation ID of cloning operation. This ID ties multiple cloning operations
          * hostingEnvironment `string`: App Service Environment.
          * overwrite `boolean`: <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
          * sourceWebAppId **required** `string`: ARM resource ID of the source app. App resource ID is of the form 
          * sourceWebAppLocation `string`: Location of source app ex: West US or North Europe
          * trafficManagerProfileId `string`: ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form 
          * trafficManagerProfileName `string`: Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.
        * containerSize `integer`: Size of the function container.
        * dailyMemoryTimeQuota `integer`: Maximum allowed daily memory-time quota (applicable on dynamic apps only).
        * defaultHostName `string`: Default hostname of the app. Read-only.
        * enabled `boolean`: <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
        * enabledHostNames `array`: Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
          * items `string`
        * geoDistributions `array`: GeoDistributions for this site
          * items `object`: A global distribution definition.
        * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
          * items `object`: SSL-enabled hostname.
        * hostNames `array`: Hostnames associated with the app.
          * items `string`
        * hostNamesDisabled `boolean`: <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
        * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
          * id `string`: Resource ID of the App Service Environment.
          * name `string`: Name of the App Service Environment.
          * type `string`: Resource type of the App Service Environment.
        * httpsOnly `boolean`: HttpsOnly: configures a web site to accept only https requests. Issues redirect for
        * hyperV `boolean`: Hyper-V sandbox.
        * inProgressOperationId `string`: Specifies an operation id if this site has a pending operation.
        * isDefaultContainer `boolean`: <code>true</code> if the app is a default container; otherwise, <code>false</code>.
        * isXenon `boolean`: Obsolete: Hyper-V sandbox.
        * lastModifiedTimeUtc `string`: Last time the app was modified, in UTC. Read-only.
        * maxNumberOfWorkers `integer`: Maximum number of workers.
        * outboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
        * possibleOutboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
        * redundancyMode `string` (values: None, Manual, Failover, ActiveActive, GeoRedundant): Site redundancy mode
        * repositorySiteName `string`: Name of the repository site.
        * reserved `boolean`: <code>true</code> if reserved; otherwise, <code>false</code>.
        * resourceGroup `string`: Name of the resource group the app belongs to. Read-only.
        * scmSiteAlsoStopped `boolean`: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
        * serverFarmId `string`: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
        * siteConfig `object`: Configuration of an App Service app.
          * alwaysOn `boolean`: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
          * apiDefinition `object`: Information about the formal API definition for the app.
          * appCommandLine `string`: App command line to launch.
          * appSettings `array`: Application settings.
          * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
          * autoHealRules `object`: Rules that can be defined for auto-heal.
          * autoSwapSlotName `string`: Auto-swap slot name.
          * azureStorageAccounts `object`: User-provided Azure storage accounts.
          * connectionStrings `array`: Connection strings.
          * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
          * defaultDocuments `array`: Default documents.
          * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
          * documentRoot `string`: Document root.
          * experiments `object`: Routing rules in production experiments.
          * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
          * handlerMappings `array`: Handler mappings.
          * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
          * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
          * ipSecurityRestrictions `array`: IP security restrictions for main.
          * javaContainer `string`: Java container.
          * javaContainerVersion `string`: Java container version.
          * javaVersion `string`: Java version.
          * limits `object`: Metric limits set on an app.
          * linuxFxVersion `string`: Linux App Framework and version
          * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
          * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
          * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
          * machineKey `object`: MachineKey of an app.
          * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
          * managedServiceIdentityId `integer`: Managed Service Identity Id
          * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
          * netFrameworkVersion `string`: .NET Framework version.
          * nodeVersion `string`: Version of Node.js.
          * numberOfWorkers `integer`: Number of workers.
          * phpVersion `string`: Version of PHP.
          * publishingUsername `string`: Publishing user name.
          * push `object`: Push settings for the App.
          * pythonVersion `string`: Version of Python.
          * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
          * remoteDebuggingVersion `string`: Remote debugging version.
          * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
          * requestTracingExpirationTime `string`: Request tracing expiration time.
          * reservedInstanceCount `integer`: Number of reserved instances.
          * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
          * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
          * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
          * tracingOptions `string`: Tracing options.
          * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
          * virtualApplications `array`: Virtual applications.
          * vnetName `string`: Virtual Network name.
          * webSocketsEnabled `boolean`: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
          * windowsFxVersion `string`: Xenon App Framework and version
          * xManagedServiceIdentityId `integer`: Explicit Managed Service Identity Id
        * slotSwapStatus `object`: The status of the last successful slot swap operation.
          * destinationSlotName `string`: The destination slot of the last swap operation.
          * sourceSlotName `string`: The source slot of the last swap operation.
          * timestampUtc `string`: The time the last successful slot swap completed.
        * state `string`: Current state of the app.
        * suspendedTill `string`: App suspended till in case memory-time quota is exceeded.
        * targetSwapSlot `string`: Specifies which deployment slot this app will swap into. Read-only.
        * trafficManagerHostNames `array`: Azure Traffic Manager hostnames associated with the app. Read-only.
          * items `string`
        * usageState `string` (values: Normal, Exceeded): State indicating whether the app has exceeded its quota usage. Read-only.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * location **required** `string`: Resource Location.
      * name `string`: Resource Name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### AppServiceEnvironments_Suspend
Suspend an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_Suspend({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of App Service apps.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A web app, a mobile app backend, or an API app.
      * identity `object`: Managed service identity.
        * principalId `string`: Principal Id of managed service identity.
        * tenantId `string`: Tenant of managed service identity.
        * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): Type of managed service identity.
        * userAssignedIdentities `object`: The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
      * properties `object`: Site resource specific properties
        * availabilityState `string` (values: Normal, Limited, DisasterRecoveryMode): Management information availability state for the app.
        * clientAffinityEnabled `boolean`: <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
        * clientCertEnabled `boolean`: <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
        * clientCertExclusionPaths `string`: client certificate authentication comma-separated exclusion paths
        * cloningInfo `object`: Information needed for cloning operation.
          * appSettingsOverrides `object`: Application setting overrides for cloned app. If specified, these settings override the settings cloned 
          * cloneCustomHostNames `boolean`: <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
          * cloneSourceControl `boolean`: <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
          * configureLoadBalancing `boolean`: <code>true</code> to configure load balancing for source and destination app.
          * correlationId `string`: Correlation ID of cloning operation. This ID ties multiple cloning operations
          * hostingEnvironment `string`: App Service Environment.
          * overwrite `boolean`: <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
          * sourceWebAppId **required** `string`: ARM resource ID of the source app. App resource ID is of the form 
          * sourceWebAppLocation `string`: Location of source app ex: West US or North Europe
          * trafficManagerProfileId `string`: ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form 
          * trafficManagerProfileName `string`: Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.
        * containerSize `integer`: Size of the function container.
        * dailyMemoryTimeQuota `integer`: Maximum allowed daily memory-time quota (applicable on dynamic apps only).
        * defaultHostName `string`: Default hostname of the app. Read-only.
        * enabled `boolean`: <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
        * enabledHostNames `array`: Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
          * items `string`
        * geoDistributions `array`: GeoDistributions for this site
          * items `object`: A global distribution definition.
        * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
          * items `object`: SSL-enabled hostname.
        * hostNames `array`: Hostnames associated with the app.
          * items `string`
        * hostNamesDisabled `boolean`: <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
        * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
          * id `string`: Resource ID of the App Service Environment.
          * name `string`: Name of the App Service Environment.
          * type `string`: Resource type of the App Service Environment.
        * httpsOnly `boolean`: HttpsOnly: configures a web site to accept only https requests. Issues redirect for
        * hyperV `boolean`: Hyper-V sandbox.
        * inProgressOperationId `string`: Specifies an operation id if this site has a pending operation.
        * isDefaultContainer `boolean`: <code>true</code> if the app is a default container; otherwise, <code>false</code>.
        * isXenon `boolean`: Obsolete: Hyper-V sandbox.
        * lastModifiedTimeUtc `string`: Last time the app was modified, in UTC. Read-only.
        * maxNumberOfWorkers `integer`: Maximum number of workers.
        * outboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
        * possibleOutboundIpAddresses `string`: List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
        * redundancyMode `string` (values: None, Manual, Failover, ActiveActive, GeoRedundant): Site redundancy mode
        * repositorySiteName `string`: Name of the repository site.
        * reserved `boolean`: <code>true</code> if reserved; otherwise, <code>false</code>.
        * resourceGroup `string`: Name of the resource group the app belongs to. Read-only.
        * scmSiteAlsoStopped `boolean`: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
        * serverFarmId `string`: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
        * siteConfig `object`: Configuration of an App Service app.
          * alwaysOn `boolean`: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
          * apiDefinition `object`: Information about the formal API definition for the app.
          * appCommandLine `string`: App command line to launch.
          * appSettings `array`: Application settings.
          * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
          * autoHealRules `object`: Rules that can be defined for auto-heal.
          * autoSwapSlotName `string`: Auto-swap slot name.
          * azureStorageAccounts `object`: User-provided Azure storage accounts.
          * connectionStrings `array`: Connection strings.
          * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
          * defaultDocuments `array`: Default documents.
          * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
          * documentRoot `string`: Document root.
          * experiments `object`: Routing rules in production experiments.
          * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
          * handlerMappings `array`: Handler mappings.
          * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
          * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
          * ipSecurityRestrictions `array`: IP security restrictions for main.
          * javaContainer `string`: Java container.
          * javaContainerVersion `string`: Java container version.
          * javaVersion `string`: Java version.
          * limits `object`: Metric limits set on an app.
          * linuxFxVersion `string`: Linux App Framework and version
          * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
          * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
          * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
          * machineKey `object`: MachineKey of an app.
          * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
          * managedServiceIdentityId `integer`: Managed Service Identity Id
          * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
          * netFrameworkVersion `string`: .NET Framework version.
          * nodeVersion `string`: Version of Node.js.
          * numberOfWorkers `integer`: Number of workers.
          * phpVersion `string`: Version of PHP.
          * publishingUsername `string`: Publishing user name.
          * push `object`: Push settings for the App.
          * pythonVersion `string`: Version of Python.
          * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
          * remoteDebuggingVersion `string`: Remote debugging version.
          * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
          * requestTracingExpirationTime `string`: Request tracing expiration time.
          * reservedInstanceCount `integer`: Number of reserved instances.
          * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
          * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
          * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
          * tracingOptions `string`: Tracing options.
          * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
          * virtualApplications `array`: Virtual applications.
          * vnetName `string`: Virtual Network name.
          * webSocketsEnabled `boolean`: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
          * windowsFxVersion `string`: Xenon App Framework and version
          * xManagedServiceIdentityId `integer`: Explicit Managed Service Identity Id
        * slotSwapStatus `object`: The status of the last successful slot swap operation.
          * destinationSlotName `string`: The destination slot of the last swap operation.
          * sourceSlotName `string`: The source slot of the last swap operation.
          * timestampUtc `string`: The time the last successful slot swap completed.
        * state `string`: Current state of the app.
        * suspendedTill `string`: App suspended till in case memory-time quota is exceeded.
        * targetSwapSlot `string`: Specifies which deployment slot this app will swap into. Read-only.
        * trafficManagerHostNames `array`: Azure Traffic Manager hostnames associated with the app. Read-only.
          * items `string`
        * usageState `string` (values: Normal, Exceeded): State indicating whether the app has exceeded its quota usage. Read-only.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * location **required** `string`: Resource Location.
      * name `string`: Resource Name.
      * tags `object`: Resource tags.
      * type `string`: Resource type.

### AppServiceEnvironments_ListUsages
Get global usage metrics of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of CSM usage quotas.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Usage of the quota resource.
      * currentValue `integer`: The current value of the resource counter.
      * limit `integer`: The resource limit.
      * name `object`: Localizable string object containing the name and a localized value.
        * localizedValue `string`: Localized name.
        * value `string`: Non-localized name.
      * nextResetTime `string`: Next reset time for the resource counter.
      * unit `string`: Units of measurement for the quota resource.

### AppServiceEnvironments_ListWorkerPools
Get all worker pools of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListWorkerPools({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolCollection](#workerpoolcollection)

### AppServiceEnvironments_GetWorkerPool
Get properties of a worker pool.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_GetWorkerPool({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * workerPoolName **required** `string`: Name of the worker pool.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolResource](#workerpoolresource)

### AppServiceEnvironments_UpdateWorkerPool
Create or update a worker pool.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_UpdateWorkerPool({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "workerPoolEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * workerPoolName **required** `string`: Name of the worker pool.
  * workerPoolEnvelope **required** [WorkerPoolResource](#workerpoolresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolResource](#workerpoolresource)

### AppServiceEnvironments_CreateOrUpdateWorkerPool
Create or update a worker pool.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_CreateOrUpdateWorkerPool({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "workerPoolEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * workerPoolName **required** `string`: Name of the worker pool.
  * workerPoolEnvelope **required** [WorkerPoolResource](#workerpoolresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WorkerPoolResource](#workerpoolresource)

### AppServiceEnvironments_ListWorkerPoolInstanceMetricDefinitions
Get metric definitions for a specific instance of a worker pool of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListWorkerPoolInstanceMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * workerPoolName **required** `string`: Name of the worker pool.
  * instance **required** `string`: Name of the instance in the worker pool.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric definitions.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Metadata for the metrics.
      * properties `object`: ResourceMetricDefinition resource specific properties
        * metricAvailabilities `array`: List of time grains supported for the metric together with retention period.
          * items `object`: Metrics availability and retention.
        * primaryAggregationType `string`: Primary aggregation type.
        * properties `object`: Resource metric definition properties.
        * resourceUri `string`: Resource URI.
        * unit `string`: Unit of the metric.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### AppServiceEnvironments_ListWorkerPoolInstanceMetrics
Get metrics for a specific instance of a worker pool of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListWorkerPoolInstanceMetrics({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "instance": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * workerPoolName **required** `string`: Name of the worker pool.
  * instance **required** `string`: Name of the instance in the worker pool.
  * details `boolean`: Specify <code>true</code> to include instance details. The default is <code>false</code>.
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric responses.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Object representing a metric for any resource .
      * endTime `string`: Metric end time.
      * id `string`: Resource Id.
      * metricValues `array`: Metric values.
        * items `object`: Value of resource metric.
          * average `number`: Value average.
          * count `number`: Value count.
          * maximum `number`: Value maximum.
          * minimum `number`: Value minimum.
          * properties `array`: Resource metric properties collection.
          * timestamp `string`: Value timestamp.
          * total `number`: Value total.
      * name `object`: Name of a metric for any resource .
        * localizedValue `string`: Localized metric name value.
        * value `string`: metric name value.
      * properties `array`: Resource metric properties collection.
        * items `object`: Resource metric property.
          * key `string`: Key for resource metric property.
          * value `string`: Value of pair.
      * resourceId `string`: Metric resource Id.
      * startTime `string`: Metric start time.
      * timeGrain `string`: Metric granularity. E.g PT1H, PT5M, P1D
      * unit `string`: Metric unit.

### AppServiceEnvironments_ListWebWorkerMetricDefinitions
Get metric definitions for a worker pool of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListWebWorkerMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * workerPoolName **required** `string`: Name of the worker pool.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric definitions.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Metadata for the metrics.
      * properties `object`: ResourceMetricDefinition resource specific properties
        * metricAvailabilities `array`: List of time grains supported for the metric together with retention period.
          * items `object`: Metrics availability and retention.
        * primaryAggregationType `string`: Primary aggregation type.
        * properties `object`: Resource metric definition properties.
        * resourceUri `string`: Resource URI.
        * unit `string`: Unit of the metric.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### AppServiceEnvironments_ListWebWorkerMetrics
Get metrics for a worker pool of a AppServiceEnvironment (App Service Environment).


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListWebWorkerMetrics({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * workerPoolName **required** `string`: Name of worker pool
  * details `boolean`: Specify <code>true</code> to include instance details. The default is <code>false</code>.
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of metric responses.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Object representing a metric for any resource .
      * endTime `string`: Metric end time.
      * id `string`: Resource Id.
      * metricValues `array`: Metric values.
        * items `object`: Value of resource metric.
          * average `number`: Value average.
          * count `number`: Value count.
          * maximum `number`: Value maximum.
          * minimum `number`: Value minimum.
          * properties `array`: Resource metric properties collection.
          * timestamp `string`: Value timestamp.
          * total `number`: Value total.
      * name `object`: Name of a metric for any resource .
        * localizedValue `string`: Localized metric name value.
        * value `string`: metric name value.
      * properties `array`: Resource metric properties collection.
        * items `object`: Resource metric property.
          * key `string`: Key for resource metric property.
          * value `string`: Value of pair.
      * resourceId `string`: Metric resource Id.
      * startTime `string`: Metric start time.
      * timeGrain `string`: Metric granularity. E.g PT1H, PT5M, P1D
      * unit `string`: Metric unit.

### AppServiceEnvironments_ListWorkerPoolSkus
Get available SKUs for scaling a worker pool.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListWorkerPoolSkus({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * workerPoolName **required** `string`: Name of the worker pool.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SkuInfoCollection](#skuinfocollection)

### AppServiceEnvironments_ListWebWorkerUsages
Get usage metrics for a worker pool of an App Service Environment.


```js
azure_web_appserviceenvironments.AppServiceEnvironments_ListWebWorkerUsages({
  "resourceGroupName": "",
  "name": "",
  "workerPoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the App Service Environment.
  * workerPoolName **required** `string`: Name of the worker pool.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [UsageCollection](#usagecollection)



## Definitions

### AddressResponse
* AddressResponse `object`: Describes main public IP address and any extra virtual IPs.
  * internalIpAddress `string`: Virtual Network internal IP address of the App Service Environment if it is in internal load-balancing mode.
  * outboundIpAddresses `array`: IP addresses appearing on outbound connections.
    * items `string`
  * serviceIpAddress `string`: Main public virtual IP.
  * vipMappings `array`: Additional virtual IPs.
    * items `object`: Virtual IP mapping.
      * inUse `boolean`: Is virtual IP mapping in use.
      * internalHttpPort `integer`: Internal HTTP port.
      * internalHttpsPort `integer`: Internal HTTPS port.
      * virtualIP `string`: Virtual IP address.

### AppServiceEnvironmentCollection
* AppServiceEnvironmentCollection `object`: Collection of App Service Environments.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [AppServiceEnvironmentResource](#appserviceenvironmentresource)

### AppServiceEnvironmentPatchResource
* AppServiceEnvironmentPatchResource `object`: ARM resource for a app service environment.
  * properties `object`: Description of an App Service Environment.
    * allowedMultiSizes `string`: List of comma separated strings describing which VM sizes are allowed for front-ends.
    * allowedWorkerSizes `string`: List of comma separated strings describing which VM sizes are allowed for workers.
    * apiManagementAccountId `string`: API Management Account associated with the App Service Environment.
    * clusterSettings `array`: Custom settings for changing the behavior of the App Service Environment.
      * items `object`: Name value pair.
        * name `string`: Pair name.
        * value `string`: Pair value.
    * databaseEdition `string`: Edition of the metadata database for the App Service Environment, e.g. "Standard".
    * databaseServiceObjective `string`: Service objective of the metadata database for the App Service Environment, e.g. "S0".
    * defaultFrontEndScaleFactor `integer`: Default Scale Factor for FrontEnds.
    * dnsSuffix `string`: DNS suffix of the App Service Environment.
    * dynamicCacheEnabled `boolean`: True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
    * environmentCapacities `array`: Current total, used, and available worker capacities.
      * items `object`: Stamp capacity information.
        * availableCapacity `integer`: Available capacity (# of machines, bytes of storage etc...).
        * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared/dedicated workers.
        * excludeFromCapacityAllocation `boolean`: If <code>true</code>, it includes basic apps.
        * isApplicableForAllComputeModes `boolean`: <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>.
        * isLinux `boolean`: Is this a linux stamp capacity
        * name `string`: Name of the stamp.
        * siteMode `string`: Shared or Dedicated.
        * totalCapacity `integer`: Total capacity (# of machines, bytes of storage etc...).
        * unit `string`: Name of the unit.
        * workerSize `string` (values: Small, Medium, Large, D1, D2, D3, Default): Size of the machines.
        * workerSizeId `integer`: Size ID of machines: 
    * environmentIsHealthy `boolean`: True/false indicating whether the App Service Environment is healthy.
    * environmentStatus `string`: Detailed message about with results of the last check of the App Service Environment.
    * frontEndScaleFactor `integer`: Scale factor for front-ends.
    * hasLinuxWorkers `boolean`: Flag that displays whether an ASE has linux workers or not
    * internalLoadBalancingMode `string` (values: None, Web, Publishing): Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
    * ipsslAddressCount `integer`: Number of IP SSL addresses reserved for the App Service Environment.
    * lastAction `string`: Last deployment action on the App Service Environment.
    * lastActionResult `string`: Result of the last deployment action on the App Service Environment.
    * location **required** `string`: Location of the App Service Environment, e.g. "West US".
    * maximumNumberOfMachines `integer`: Maximum number of VMs in the App Service Environment.
    * multiRoleCount `integer`: Number of front-end instances.
    * multiSize `string`: Front-end VM size, e.g. "Medium", "Large".
    * name **required** `string`: Name of the App Service Environment.
    * networkAccessControlList `array`: Access control list for controlling traffic to the App Service Environment.
      * items `object`: Network access control entry.
        * action `string` (values: Permit, Deny): Action object.
        * description `string`: Description of network access control entry.
        * order `integer`: Order of precedence.
        * remoteSubnet `string`: Remote subnet.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
    * resourceGroup `string`: Resource group of the App Service Environment.
    * sslCertKeyVaultId `string`: Key Vault ID for ILB App Service Environment default SSL certificate
    * sslCertKeyVaultSecretName `string`: Key Vault Secret Name for ILB App Service Environment default SSL certificate
    * status `string` (values: Preparing, Ready, Scaling, Deleting): Current status of the App Service Environment.
    * subscriptionId `string`: Subscription of the App Service Environment.
    * suspended `boolean`: <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
    * upgradeDomains `integer`: Number of upgrade domains of the App Service Environment.
    * userWhitelistedIpRanges `array`: User added ip ranges to whitelist on ASE db
      * items `string`
    * vipMappings `array`: Description of IP SSL mapping for the App Service Environment.
      * items `object`: Virtual IP mapping.
        * inUse `boolean`: Is virtual IP mapping in use.
        * internalHttpPort `integer`: Internal HTTP port.
        * internalHttpsPort `integer`: Internal HTTPS port.
        * virtualIP `string`: Virtual IP address.
    * virtualNetwork **required** `object`: Specification for using a Virtual Network.
      * id `string`: Resource id of the Virtual Network.
      * name `string`: Name of the Virtual Network (read-only).
      * subnet `string`: Subnet within the Virtual Network.
      * type `string`: Resource type of the Virtual Network (read-only).
    * vnetName `string`: Name of the Virtual Network for the App Service Environment.
    * vnetResourceGroupName `string`: Resource group of the Virtual Network.
    * vnetSubnetName `string`: Subnet of the Virtual Network.
    * workerPools **required** `array`: Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
      * items `object`: Worker pool of an App Service Environment.
        * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared or dedicated app hosting.
        * instanceNames `array`: Names of all instances in the worker pool (read only).
          * items `string`
        * workerCount `integer`: Number of instances in the worker pool.
        * workerSize `string`: VM size of the worker pool instances.
        * workerSizeId `integer`: Worker size ID for referencing this worker pool.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AppServiceEnvironmentResource
* AppServiceEnvironmentResource `object`: App Service Environment ARM resource.
  * properties `object`: Description of an App Service Environment.
    * allowedMultiSizes `string`: List of comma separated strings describing which VM sizes are allowed for front-ends.
    * allowedWorkerSizes `string`: List of comma separated strings describing which VM sizes are allowed for workers.
    * apiManagementAccountId `string`: API Management Account associated with the App Service Environment.
    * clusterSettings `array`: Custom settings for changing the behavior of the App Service Environment.
      * items `object`: Name value pair.
        * name `string`: Pair name.
        * value `string`: Pair value.
    * databaseEdition `string`: Edition of the metadata database for the App Service Environment, e.g. "Standard".
    * databaseServiceObjective `string`: Service objective of the metadata database for the App Service Environment, e.g. "S0".
    * defaultFrontEndScaleFactor `integer`: Default Scale Factor for FrontEnds.
    * dnsSuffix `string`: DNS suffix of the App Service Environment.
    * dynamicCacheEnabled `boolean`: True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
    * environmentCapacities `array`: Current total, used, and available worker capacities.
      * items `object`: Stamp capacity information.
        * availableCapacity `integer`: Available capacity (# of machines, bytes of storage etc...).
        * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared/dedicated workers.
        * excludeFromCapacityAllocation `boolean`: If <code>true</code>, it includes basic apps.
        * isApplicableForAllComputeModes `boolean`: <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>.
        * isLinux `boolean`: Is this a linux stamp capacity
        * name `string`: Name of the stamp.
        * siteMode `string`: Shared or Dedicated.
        * totalCapacity `integer`: Total capacity (# of machines, bytes of storage etc...).
        * unit `string`: Name of the unit.
        * workerSize `string` (values: Small, Medium, Large, D1, D2, D3, Default): Size of the machines.
        * workerSizeId `integer`: Size ID of machines: 
    * environmentIsHealthy `boolean`: True/false indicating whether the App Service Environment is healthy.
    * environmentStatus `string`: Detailed message about with results of the last check of the App Service Environment.
    * frontEndScaleFactor `integer`: Scale factor for front-ends.
    * hasLinuxWorkers `boolean`: Flag that displays whether an ASE has linux workers or not
    * internalLoadBalancingMode `string` (values: None, Web, Publishing): Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
    * ipsslAddressCount `integer`: Number of IP SSL addresses reserved for the App Service Environment.
    * lastAction `string`: Last deployment action on the App Service Environment.
    * lastActionResult `string`: Result of the last deployment action on the App Service Environment.
    * location **required** `string`: Location of the App Service Environment, e.g. "West US".
    * maximumNumberOfMachines `integer`: Maximum number of VMs in the App Service Environment.
    * multiRoleCount `integer`: Number of front-end instances.
    * multiSize `string`: Front-end VM size, e.g. "Medium", "Large".
    * name **required** `string`: Name of the App Service Environment.
    * networkAccessControlList `array`: Access control list for controlling traffic to the App Service Environment.
      * items `object`: Network access control entry.
        * action `string` (values: Permit, Deny): Action object.
        * description `string`: Description of network access control entry.
        * order `integer`: Order of precedence.
        * remoteSubnet `string`: Remote subnet.
    * provisioningState `string` (values: Succeeded, Failed, Canceled, InProgress, Deleting): Provisioning state of the App Service Environment.
    * resourceGroup `string`: Resource group of the App Service Environment.
    * sslCertKeyVaultId `string`: Key Vault ID for ILB App Service Environment default SSL certificate
    * sslCertKeyVaultSecretName `string`: Key Vault Secret Name for ILB App Service Environment default SSL certificate
    * status `string` (values: Preparing, Ready, Scaling, Deleting): Current status of the App Service Environment.
    * subscriptionId `string`: Subscription of the App Service Environment.
    * suspended `boolean`: <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
    * upgradeDomains `integer`: Number of upgrade domains of the App Service Environment.
    * userWhitelistedIpRanges `array`: User added ip ranges to whitelist on ASE db
      * items `string`
    * vipMappings `array`: Description of IP SSL mapping for the App Service Environment.
      * items `object`: Virtual IP mapping.
        * inUse `boolean`: Is virtual IP mapping in use.
        * internalHttpPort `integer`: Internal HTTP port.
        * internalHttpsPort `integer`: Internal HTTPS port.
        * virtualIP `string`: Virtual IP address.
    * virtualNetwork **required** `object`: Specification for using a Virtual Network.
      * id `string`: Resource id of the Virtual Network.
      * name `string`: Name of the Virtual Network (read-only).
      * subnet `string`: Subnet within the Virtual Network.
      * type `string`: Resource type of the Virtual Network (read-only).
    * vnetName `string`: Name of the Virtual Network for the App Service Environment.
    * vnetResourceGroupName `string`: Resource group of the Virtual Network.
    * vnetSubnetName `string`: Subnet of the Virtual Network.
    * workerPools **required** `array`: Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
      * items `object`: Worker pool of an App Service Environment.
        * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared or dedicated app hosting.
        * instanceNames `array`: Names of all instances in the worker pool (read only).
          * items `string`
        * workerCount `integer`: Number of instances in the worker pool.
        * workerSize `string`: VM size of the worker pool instances.
        * workerSizeId `integer`: Worker size ID for referencing this worker pool.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * location **required** `string`: Resource Location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### EndpointDependency
* EndpointDependency `object`: A domain name that a service is reached at, including details of the current connection status.
  * domainName `string`: The domain name of the dependency.
  * endpointDetails `array`: The IP Addresses and Ports used when connecting to DomainName.
    * items [EndpointDetail](#endpointdetail)

### EndpointDetail
* EndpointDetail `object`: Current TCP connectivity information from the App Service Environment to a single endpoint.
  * ipAddress `string`: An IP Address that Domain Name currently resolves to.
  * isAccessable `boolean`: Whether it is possible to create a TCP connection from the App Service Environment to this IpAddress at this Port.
  * latency `number`: The time in milliseconds it takes for a TCP connection to be created from the App Service Environment to this IpAddress at this Port.
  * port `integer`: The port an endpoint is connected to.

### ErrorEntity


### HostingEnvironmentDiagnostics
* HostingEnvironmentDiagnostics `object`: Diagnostics for an App Service Environment.
  * diagnosicsOutput `string`: Diagnostics output.
  * name `string`: Name/identifier of the diagnostics.

### InboundEnvironmentEndpoint
* InboundEnvironmentEndpoint `object`: The IP Addresses and Ports that require inbound network access to and within the subnet of the App Service Environment.
  * description `string`: Short text describing the purpose of the network traffic.
  * endpoints `array`: The IP addresses that network traffic will originate from in cidr notation.
    * items `string`
  * ports `array`: The ports that network traffic will arrive to the App Service Environment at.
    * items `string`

### InboundEnvironmentEndpointCollection
* InboundEnvironmentEndpointCollection `object`: Collection of Inbound Environment Endpoints
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [InboundEnvironmentEndpoint](#inboundenvironmentendpoint)

### MetricAvailabilily
* MetricAvailabilily `object`: Metric availability and retention.
  * retention `string`: Retention period for the current time grain.
  * timeGrain `string`: Time grain.

### MetricDefinition
* MetricDefinition `object`: Metadata for a metric.
  * properties `object`: MetricDefinition resource specific properties
    * displayName `string`: Friendly name shown in the UI.
    * metricAvailabilities `array`: List of time grains supported for the metric together with retention period.
      * items [MetricAvailabilily](#metricavailabilily)
    * primaryAggregationType `string`: Primary aggregation type.
    * unit `string`: Unit of the metric.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### OutboundEnvironmentEndpoint
* OutboundEnvironmentEndpoint `object`: Endpoints accessed for a common purpose that the App Service Environment requires outbound network access to.
  * category `string`: The type of service accessed by the App Service Environment, e.g., Azure Storage, Azure SQL Database, and Azure Active Directory.
  * endpoints `array`: The endpoints that the App Service Environment reaches the service at.
    * items [EndpointDependency](#endpointdependency)

### OutboundEnvironmentEndpointCollection
* OutboundEnvironmentEndpointCollection `object`: Collection of Outbound Environment Endpoints
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [OutboundEnvironmentEndpoint](#outboundenvironmentendpoint)

### SkuInfo
* SkuInfo `object`: SKU discovery information.
  * capacity `object`: Description of the App Service plan scale options.
    * default `integer`: Default number of workers for this App Service plan SKU.
    * maximum `integer`: Maximum number of workers for this App Service plan SKU.
    * minimum `integer`: Minimum number of workers for this App Service plan SKU.
    * scaleType `string`: Available scale configurations for an App Service plan.
  * resourceType `string`: Resource type that this SKU applies to.
  * sku `object`: Description of a SKU for a scalable resource.
    * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
      * items `object`: Describes the capabilities/features allowed for a specific SKU.
        * name `string`: Name of the SKU capability.
        * reason `string`: Reason of the SKU capability.
        * value `string`: Value of the SKU capability.
    * capacity `integer`: Current number of instances assigned to the resource.
    * family `string`: Family code of the resource SKU.
    * locations `array`: Locations of the SKU.
      * items `string`
    * name `string`: Name of the resource SKU.
    * size `string`: Size specifier of the resource SKU.
    * skuCapacity `object`: Description of the App Service plan scale options.
      * default `integer`: Default number of workers for this App Service plan SKU.
      * maximum `integer`: Maximum number of workers for this App Service plan SKU.
      * minimum `integer`: Minimum number of workers for this App Service plan SKU.
      * scaleType `string`: Available scale configurations for an App Service plan.
    * tier `string`: Service tier of the resource SKU.

### SkuInfoCollection
* SkuInfoCollection `object`: Collection of SKU information.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [SkuInfo](#skuinfo)

### StampCapacityCollection
* StampCapacityCollection `object`: Collection of stamp capacities.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: Stamp capacity information.
      * availableCapacity `integer`: Available capacity (# of machines, bytes of storage etc...).
      * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared/dedicated workers.
      * excludeFromCapacityAllocation `boolean`: If <code>true</code>, it includes basic apps.
      * isApplicableForAllComputeModes `boolean`: <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>.
      * isLinux `boolean`: Is this a linux stamp capacity
      * name `string`: Name of the stamp.
      * siteMode `string`: Shared or Dedicated.
      * totalCapacity `integer`: Total capacity (# of machines, bytes of storage etc...).
      * unit `string`: Name of the unit.
      * workerSize `string` (values: Small, Medium, Large, D1, D2, D3, Default): Size of the machines.
      * workerSizeId `integer`: Size ID of machines: 

### Usage
* Usage `object`: Usage of the quota resource.
  * properties `object`: Usage resource specific properties
    * computeMode `string` (values: Shared, Dedicated, Dynamic): Compute mode used for this usage.
    * currentValue `integer`: The current value of the resource counter.
    * displayName `string`: Friendly name shown in the UI.
    * limit `integer`: The resource limit.
    * nextResetTime `string`: Next reset time for the resource counter.
    * resourceName `string`: Name of the quota resource.
    * siteMode `string`: Site mode used for this usage.
    * unit `string`: Units of measurement for the quota resource.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### UsageCollection
* UsageCollection `object`: Collection of usages.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [Usage](#usage)

### WorkerPoolCollection
* WorkerPoolCollection `object`: Collection of worker pools.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [WorkerPoolResource](#workerpoolresource)

### WorkerPoolResource
* WorkerPoolResource `object`: Worker pool of an App Service Environment ARM resource.
  * properties `object`: Worker pool of an App Service Environment.
    * computeMode `string` (values: Shared, Dedicated, Dynamic): Shared or dedicated app hosting.
    * instanceNames `array`: Names of all instances in the worker pool (read only).
      * items `string`
    * workerCount `integer`: Number of instances in the worker pool.
    * workerSize `string`: VM size of the worker pool instances.
    * workerSizeId `integer`: Worker size ID for referencing this worker pool.
  * sku `object`: Description of a SKU for a scalable resource.
    * capabilities `array`: Capabilities of the SKU, e.g., is traffic manager enabled?
      * items `object`: Describes the capabilities/features allowed for a specific SKU.
        * name `string`: Name of the SKU capability.
        * reason `string`: Reason of the SKU capability.
        * value `string`: Value of the SKU capability.
    * capacity `integer`: Current number of instances assigned to the resource.
    * family `string`: Family code of the resource SKU.
    * locations `array`: Locations of the SKU.
      * items `string`
    * name `string`: Name of the resource SKU.
    * size `string`: Size specifier of the resource SKU.
    * skuCapacity `object`: Description of the App Service plan scale options.
      * default `integer`: Default number of workers for this App Service plan SKU.
      * maximum `integer`: Maximum number of workers for this App Service plan SKU.
      * minimum `integer`: Minimum number of workers for this App Service plan SKU.
      * scaleType `string`: Available scale configurations for an App Service plan.
    * tier `string`: Service tier of the resource SKU.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.


