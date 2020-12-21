# @datafire/azure_web_webapps

Client library for WebApps API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_webapps
```
```js
let azure_web_webapps = require('@datafire/azure_web_webapps').create({
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

### WebApps_List
Get all apps for a subscription.


```js
azure_web_webapps.WebApps_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
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

### WebApps_ListByResourceGroup
Gets all web, mobile, and API apps in the specified resource group.


```js
azure_web_webapps.WebApps_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * includeSlots `boolean`: Specify <strong>true</strong> to include deployment slots in results. The default is false, which only gives you the production slot of all apps.
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

### WebApps_Delete
Deletes a web, mobile, or API app, or one of the deployment slots.


```js
azure_web_webapps.WebApps_Delete({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app to delete.
  * deleteMetrics `boolean`: If true, web app metrics are also deleted.
  * deleteEmptyServerFarm `boolean`: Specify false if you want to keep empty App Service plan. By default, empty App Service plan is deleted.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_Get
Gets the details of a web, mobile, or API app.


```js
azure_web_webapps.WebApps_Get({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A web app, a mobile app backend, or an API app.
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
        * location `string`: Location.
        * numberOfWorkers `integer`: NumberOfWorkers.
    * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
      * items `object`: SSL-enabled hostname.
        * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
        * name `string`: Hostname.
        * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
        * thumbprint `string`: SSL certificate thumbprint.
        * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
        * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
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
        * url `string`: The URL of the API definition.
      * appCommandLine `string`: App command line to launch.
      * appSettings `array`: Application settings.
        * items `object`: Name value pair.
          * name `string`: Pair name.
          * value `string`: Pair value.
      * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
      * autoHealRules `object`: Rules that can be defined for auto-heal.
        * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
          * actionType `string` (values: Recycle, LogEvent, CustomAction): Predefined action to be taken.
          * customAction `object`: Custom action to be executed
          * minProcessExecutionTime `string`: Minimum time the process must execute
        * triggers `object`: Triggers for auto-heal.
          * privateBytesInKB `integer`: A rule based on private bytes.
          * requests `object`: Trigger based on total requests.
          * slowRequests `object`: Trigger based on request execution time.
          * statusCodes `array`: A rule based on status codes.
      * autoSwapSlotName `string`: Auto-swap slot name.
      * azureStorageAccounts `object`: User-provided Azure storage accounts.
      * connectionStrings `array`: Connection strings.
        * items `object`: Database connection string information.
          * connectionString `string`: Connection string value.
          * name `string`: Name of connection string.
          * type `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
      * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
        * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
          * items `string`
        * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
      * defaultDocuments `array`: Default documents.
        * items `string`
      * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
      * documentRoot `string`: Document root.
      * experiments `object`: Routing rules in production experiments.
        * rampUpRules `array`: List of ramp-up rules.
          * items `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
      * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
      * handlerMappings `array`: Handler mappings.
        * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
          * arguments `string`: Command-line arguments to be passed to the script processor.
          * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
          * scriptProcessor `string`: The absolute path to the FastCGI application.
      * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
      * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
      * ipSecurityRestrictions `array`: IP security restrictions for main.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * javaContainer `string`: Java container.
      * javaContainerVersion `string`: Java container version.
      * javaVersion `string`: Java version.
      * limits `object`: Metric limits set on an app.
        * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
        * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
        * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
      * linuxFxVersion `string`: Linux App Framework and version
      * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
      * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
      * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
      * machineKey `object`: MachineKey of an app.
        * decryption `string`: Algorithm used for decryption.
        * decryptionKey `string`: Decryption key.
        * validation `string`: MachineKey validation.
        * validationKey `string`: Validation key.
      * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
      * managedServiceIdentityId `integer`: Managed Service Identity Id
      * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
      * netFrameworkVersion `string`: .NET Framework version.
      * nodeVersion `string`: Version of Node.js.
      * numberOfWorkers `integer`: Number of workers.
      * phpVersion `string`: Version of PHP.
      * publishingUsername `string`: Publishing user name.
      * push `object`: Push settings for the App.
        * properties `object`: PushSettings resource specific properties
          * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
          * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
          * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
          * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
      * pythonVersion `string`: Version of Python.
      * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
      * remoteDebuggingVersion `string`: Remote debugging version.
      * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
      * requestTracingExpirationTime `string`: Request tracing expiration time.
      * reservedInstanceCount `integer`: Number of reserved instances.
      * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
      * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
      * tracingOptions `string`: Tracing options.
      * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
      * virtualApplications `array`: Virtual applications.
        * items `object`: Virtual application in an app.
          * physicalPath `string`: Physical path.
          * preloadEnabled `boolean`: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
          * virtualDirectories `array`: Virtual directories for virtual application.
          * virtualPath `string`: Virtual path.
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

### WebApps_Update
Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.


```js
azure_web_webapps.WebApps_Update({
  "resourceGroupName": "",
  "name": "",
  "siteEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
  * siteEnvelope **required** [SitePatchResource](#sitepatchresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A web app, a mobile app backend, or an API app.
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
        * location `string`: Location.
        * numberOfWorkers `integer`: NumberOfWorkers.
    * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
      * items `object`: SSL-enabled hostname.
        * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
        * name `string`: Hostname.
        * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
        * thumbprint `string`: SSL certificate thumbprint.
        * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
        * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
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
        * url `string`: The URL of the API definition.
      * appCommandLine `string`: App command line to launch.
      * appSettings `array`: Application settings.
        * items `object`: Name value pair.
          * name `string`: Pair name.
          * value `string`: Pair value.
      * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
      * autoHealRules `object`: Rules that can be defined for auto-heal.
        * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
          * actionType `string` (values: Recycle, LogEvent, CustomAction): Predefined action to be taken.
          * customAction `object`: Custom action to be executed
          * minProcessExecutionTime `string`: Minimum time the process must execute
        * triggers `object`: Triggers for auto-heal.
          * privateBytesInKB `integer`: A rule based on private bytes.
          * requests `object`: Trigger based on total requests.
          * slowRequests `object`: Trigger based on request execution time.
          * statusCodes `array`: A rule based on status codes.
      * autoSwapSlotName `string`: Auto-swap slot name.
      * azureStorageAccounts `object`: User-provided Azure storage accounts.
      * connectionStrings `array`: Connection strings.
        * items `object`: Database connection string information.
          * connectionString `string`: Connection string value.
          * name `string`: Name of connection string.
          * type `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
      * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
        * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
          * items `string`
        * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
      * defaultDocuments `array`: Default documents.
        * items `string`
      * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
      * documentRoot `string`: Document root.
      * experiments `object`: Routing rules in production experiments.
        * rampUpRules `array`: List of ramp-up rules.
          * items `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
      * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
      * handlerMappings `array`: Handler mappings.
        * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
          * arguments `string`: Command-line arguments to be passed to the script processor.
          * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
          * scriptProcessor `string`: The absolute path to the FastCGI application.
      * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
      * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
      * ipSecurityRestrictions `array`: IP security restrictions for main.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * javaContainer `string`: Java container.
      * javaContainerVersion `string`: Java container version.
      * javaVersion `string`: Java version.
      * limits `object`: Metric limits set on an app.
        * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
        * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
        * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
      * linuxFxVersion `string`: Linux App Framework and version
      * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
      * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
      * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
      * machineKey `object`: MachineKey of an app.
        * decryption `string`: Algorithm used for decryption.
        * decryptionKey `string`: Decryption key.
        * validation `string`: MachineKey validation.
        * validationKey `string`: Validation key.
      * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
      * managedServiceIdentityId `integer`: Managed Service Identity Id
      * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
      * netFrameworkVersion `string`: .NET Framework version.
      * nodeVersion `string`: Version of Node.js.
      * numberOfWorkers `integer`: Number of workers.
      * phpVersion `string`: Version of PHP.
      * publishingUsername `string`: Publishing user name.
      * push `object`: Push settings for the App.
        * properties `object`: PushSettings resource specific properties
          * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
          * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
          * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
          * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
      * pythonVersion `string`: Version of Python.
      * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
      * remoteDebuggingVersion `string`: Remote debugging version.
      * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
      * requestTracingExpirationTime `string`: Request tracing expiration time.
      * reservedInstanceCount `integer`: Number of reserved instances.
      * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
      * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
      * tracingOptions `string`: Tracing options.
      * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
      * virtualApplications `array`: Virtual applications.
        * items `object`: Virtual application in an app.
          * physicalPath `string`: Physical path.
          * preloadEnabled `boolean`: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
          * virtualDirectories `array`: Virtual directories for virtual application.
          * virtualPath `string`: Virtual path.
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

### WebApps_CreateOrUpdate
Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.


```js
azure_web_webapps.WebApps_CreateOrUpdate({
  "resourceGroupName": "",
  "name": "",
  "siteEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
  * siteEnvelope **required** `object`: A web app, a mobile app backend, or an API app.
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
          * location `string`: Location.
          * numberOfWorkers `integer`: NumberOfWorkers.
      * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
        * items `object`: SSL-enabled hostname.
          * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
          * name `string`: Hostname.
          * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
          * thumbprint `string`: SSL certificate thumbprint.
          * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
          * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
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
          * url `string`: The URL of the API definition.
        * appCommandLine `string`: App command line to launch.
        * appSettings `array`: Application settings.
          * items `object`: Name value pair.
        * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
        * autoHealRules `object`: Rules that can be defined for auto-heal.
          * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
          * triggers `object`: Triggers for auto-heal.
        * autoSwapSlotName `string`: Auto-swap slot name.
        * azureStorageAccounts `object`: User-provided Azure storage accounts.
        * connectionStrings `array`: Connection strings.
          * items `object`: Database connection string information.
        * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
          * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
          * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
        * defaultDocuments `array`: Default documents.
          * items `string`
        * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
        * documentRoot `string`: Document root.
        * experiments `object`: Routing rules in production experiments.
          * rampUpRules `array`: List of ramp-up rules.
        * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
        * handlerMappings `array`: Handler mappings.
          * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
        * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
        * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
        * ipSecurityRestrictions `array`: IP security restrictions for main.
          * items `object`: IP security restriction on an app.
        * javaContainer `string`: Java container.
        * javaContainerVersion `string`: Java container version.
        * javaVersion `string`: Java version.
        * limits `object`: Metric limits set on an app.
          * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
          * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
          * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
        * linuxFxVersion `string`: Linux App Framework and version
        * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
        * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
        * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
        * machineKey `object`: MachineKey of an app.
          * decryption `string`: Algorithm used for decryption.
          * decryptionKey `string`: Decryption key.
          * validation `string`: MachineKey validation.
          * validationKey `string`: Validation key.
        * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
        * managedServiceIdentityId `integer`: Managed Service Identity Id
        * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
        * netFrameworkVersion `string`: .NET Framework version.
        * nodeVersion `string`: Version of Node.js.
        * numberOfWorkers `integer`: Number of workers.
        * phpVersion `string`: Version of PHP.
        * publishingUsername `string`: Publishing user name.
        * push `object`: Push settings for the App.
          * properties `object`: PushSettings resource specific properties
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
        * pythonVersion `string`: Version of Python.
        * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
        * remoteDebuggingVersion `string`: Remote debugging version.
        * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
        * requestTracingExpirationTime `string`: Request tracing expiration time.
        * reservedInstanceCount `integer`: Number of reserved instances.
        * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
          * items `object`: IP security restriction on an app.
        * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
        * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
        * tracingOptions `string`: Tracing options.
        * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
        * virtualApplications `array`: Virtual applications.
          * items `object`: Virtual application in an app.
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
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A web app, a mobile app backend, or an API app.
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
        * location `string`: Location.
        * numberOfWorkers `integer`: NumberOfWorkers.
    * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
      * items `object`: SSL-enabled hostname.
        * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
        * name `string`: Hostname.
        * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
        * thumbprint `string`: SSL certificate thumbprint.
        * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
        * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
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
        * url `string`: The URL of the API definition.
      * appCommandLine `string`: App command line to launch.
      * appSettings `array`: Application settings.
        * items `object`: Name value pair.
          * name `string`: Pair name.
          * value `string`: Pair value.
      * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
      * autoHealRules `object`: Rules that can be defined for auto-heal.
        * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
          * actionType `string` (values: Recycle, LogEvent, CustomAction): Predefined action to be taken.
          * customAction `object`: Custom action to be executed
          * minProcessExecutionTime `string`: Minimum time the process must execute
        * triggers `object`: Triggers for auto-heal.
          * privateBytesInKB `integer`: A rule based on private bytes.
          * requests `object`: Trigger based on total requests.
          * slowRequests `object`: Trigger based on request execution time.
          * statusCodes `array`: A rule based on status codes.
      * autoSwapSlotName `string`: Auto-swap slot name.
      * azureStorageAccounts `object`: User-provided Azure storage accounts.
      * connectionStrings `array`: Connection strings.
        * items `object`: Database connection string information.
          * connectionString `string`: Connection string value.
          * name `string`: Name of connection string.
          * type `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
      * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
        * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
          * items `string`
        * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
      * defaultDocuments `array`: Default documents.
        * items `string`
      * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
      * documentRoot `string`: Document root.
      * experiments `object`: Routing rules in production experiments.
        * rampUpRules `array`: List of ramp-up rules.
          * items `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
      * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
      * handlerMappings `array`: Handler mappings.
        * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
          * arguments `string`: Command-line arguments to be passed to the script processor.
          * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
          * scriptProcessor `string`: The absolute path to the FastCGI application.
      * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
      * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
      * ipSecurityRestrictions `array`: IP security restrictions for main.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * javaContainer `string`: Java container.
      * javaContainerVersion `string`: Java container version.
      * javaVersion `string`: Java version.
      * limits `object`: Metric limits set on an app.
        * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
        * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
        * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
      * linuxFxVersion `string`: Linux App Framework and version
      * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
      * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
      * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
      * machineKey `object`: MachineKey of an app.
        * decryption `string`: Algorithm used for decryption.
        * decryptionKey `string`: Decryption key.
        * validation `string`: MachineKey validation.
        * validationKey `string`: Validation key.
      * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
      * managedServiceIdentityId `integer`: Managed Service Identity Id
      * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
      * netFrameworkVersion `string`: .NET Framework version.
      * nodeVersion `string`: Version of Node.js.
      * numberOfWorkers `integer`: Number of workers.
      * phpVersion `string`: Version of PHP.
      * publishingUsername `string`: Publishing user name.
      * push `object`: Push settings for the App.
        * properties `object`: PushSettings resource specific properties
          * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
          * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
          * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
          * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
      * pythonVersion `string`: Version of Python.
      * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
      * remoteDebuggingVersion `string`: Remote debugging version.
      * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
      * requestTracingExpirationTime `string`: Request tracing expiration time.
      * reservedInstanceCount `integer`: Number of reserved instances.
      * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
      * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
      * tracingOptions `string`: Tracing options.
      * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
      * virtualApplications `array`: Virtual applications.
        * items `object`: Virtual application in an app.
          * physicalPath `string`: Physical path.
          * preloadEnabled `boolean`: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
          * virtualDirectories `array`: Virtual directories for virtual application.
          * virtualPath `string`: Virtual path.
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

### WebApps_AnalyzeCustomHostname
Analyze a custom hostname.


```js
azure_web_webapps.WebApps_AnalyzeCustomHostname({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * hostName `string`: Custom hostname.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [CustomHostnameAnalysisResult](#customhostnameanalysisresult)

### WebApps_ApplySlotConfigToProduction
Applies the configuration settings from the target slot onto the current slot.


```js
azure_web_webapps.WebApps_ApplySlotConfigToProduction({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {
    "targetSlot": "",
    "preserveVnet": true
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_Backup
Creates a backup of an app.


```js
azure_web_webapps.WebApps_Backup({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * request **required** [BackupRequest](#backuprequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### WebApps_ListBackups
Gets existing backups of an app.


```js
azure_web_webapps.WebApps_ListBackups({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupItemCollection](#backupitemcollection)

### WebApps_DeleteBackup
Deletes a backup of an app by its ID.


```js
azure_web_webapps.WebApps_DeleteBackup({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * backupId **required** `string`: ID of the backup.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetBackupStatus
Gets a backup of an app by its ID.


```js
azure_web_webapps.WebApps_GetBackupStatus({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * backupId **required** `string`: ID of the backup.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### WebApps_ListBackupStatusSecrets
Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.


```js
azure_web_webapps.WebApps_ListBackupStatusSecrets({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * backupId **required** `string`: ID of backup.
  * request **required** [BackupRequest](#backuprequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### WebApps_Restore
Restores a specific backup to another app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_Restore({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * backupId **required** `string`: ID of the backup.
  * request **required** [RestoreRequest](#restorerequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListConfigurations
List the configurations of an app


```js
azure_web_webapps.WebApps_ListConfigurations({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResourceCollection](#siteconfigresourcecollection)

### WebApps_UpdateApplicationSettings
Replaces the application settings of an app.


```js
azure_web_webapps.WebApps_UpdateApplicationSettings({
  "resourceGroupName": "",
  "name": "",
  "appSettings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * appSettings **required** [StringDictionary](#stringdictionary)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### WebApps_ListApplicationSettings
Gets the application settings of an app.


```js
azure_web_webapps.WebApps_ListApplicationSettings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### WebApps_UpdateAuthSettings
Updates the Authentication / Authorization settings associated with web app.


```js
azure_web_webapps.WebApps_UpdateAuthSettings({
  "resourceGroupName": "",
  "name": "",
  "siteAuthSettings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * siteAuthSettings **required** [SiteAuthSettings](#siteauthsettings)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteAuthSettings](#siteauthsettings)

### WebApps_GetAuthSettings
Gets the Authentication/Authorization settings of an app.


```js
azure_web_webapps.WebApps_GetAuthSettings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteAuthSettings](#siteauthsettings)

### WebApps_UpdateAzureStorageAccounts
Updates the Azure storage account configurations of an app.


```js
azure_web_webapps.WebApps_UpdateAzureStorageAccounts({
  "resourceGroupName": "",
  "name": "",
  "azureStorageAccounts": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * azureStorageAccounts **required** [AzureStoragePropertyDictionaryResource](#azurestoragepropertydictionaryresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AzureStoragePropertyDictionaryResource](#azurestoragepropertydictionaryresource)

### WebApps_ListAzureStorageAccounts
Gets the Azure storage account configurations of an app.


```js
azure_web_webapps.WebApps_ListAzureStorageAccounts({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AzureStoragePropertyDictionaryResource](#azurestoragepropertydictionaryresource)

### WebApps_DeleteBackupConfiguration
Deletes the backup configuration of an app.


```js
azure_web_webapps.WebApps_DeleteBackupConfiguration({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_UpdateBackupConfiguration
Updates the backup configuration of an app.


```js
azure_web_webapps.WebApps_UpdateBackupConfiguration({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * request **required** [BackupRequest](#backuprequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupRequest](#backuprequest)

### WebApps_GetBackupConfiguration
Gets the backup configuration of an app.


```js
azure_web_webapps.WebApps_GetBackupConfiguration({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupRequest](#backuprequest)

### WebApps_UpdateConnectionStrings
Replaces the connection strings of an app.


```js
azure_web_webapps.WebApps_UpdateConnectionStrings({
  "resourceGroupName": "",
  "name": "",
  "connectionStrings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * connectionStrings **required** [ConnectionStringDictionary](#connectionstringdictionary)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionStringDictionary](#connectionstringdictionary)

### WebApps_ListConnectionStrings
Gets the connection strings of an app.


```js
azure_web_webapps.WebApps_ListConnectionStrings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionStringDictionary](#connectionstringdictionary)

### WebApps_GetDiagnosticLogsConfiguration
Gets the logging configuration of an app.


```js
azure_web_webapps.WebApps_GetDiagnosticLogsConfiguration({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteLogsConfig](#sitelogsconfig)

### WebApps_UpdateDiagnosticLogsConfig
Updates the logging configuration of an app.


```js
azure_web_webapps.WebApps_UpdateDiagnosticLogsConfig({
  "resourceGroupName": "",
  "name": "",
  "siteLogsConfig": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteLogsConfig **required** [SiteLogsConfig](#sitelogsconfig)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteLogsConfig](#sitelogsconfig)

### WebApps_UpdateMetadata
Replaces the metadata of an app.


```js
azure_web_webapps.WebApps_UpdateMetadata({
  "resourceGroupName": "",
  "name": "",
  "metadata": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * metadata **required** [StringDictionary](#stringdictionary)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### WebApps_ListMetadata
Gets the metadata of an app.


```js
azure_web_webapps.WebApps_ListMetadata({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### WebApps_ListPublishingCredentials
Gets the Git/FTP publishing credentials of an app.


```js
azure_web_webapps.WebApps_ListPublishingCredentials({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: User credentials used for publishing activity.
  * properties `object`: User resource specific properties
    * publishingPassword `string`: Password used for publishing.
    * publishingPasswordHash `string`: Password hash used for publishing.
    * publishingPasswordHashSalt `string`: Password hash salt used for publishing.
    * publishingUserName **required** `string`: Username used for publishing.
    * scmUri `string`: Url of SCM site.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateSitePushSettings
Updates the Push settings associated with web app.


```js
azure_web_webapps.WebApps_UpdateSitePushSettings({
  "resourceGroupName": "",
  "name": "",
  "pushSettings": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * pushSettings **required** `object`: Push settings for the App.
    * properties `object`: PushSettings resource specific properties
      * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
      * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
      * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
      * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Push settings for the App.
  * properties `object`: PushSettings resource specific properties
    * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
    * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
    * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
    * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListSitePushSettings
Gets the Push settings associated with web app.


```js
azure_web_webapps.WebApps_ListSitePushSettings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Push settings for the App.
  * properties `object`: PushSettings resource specific properties
    * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
    * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
    * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
    * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListSlotConfigurationNames
Gets the names of app settings and connection strings that stick to the slot (not swapped).


```js
azure_web_webapps.WebApps_ListSlotConfigurationNames({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SlotConfigNamesResource](#slotconfignamesresource)

### WebApps_UpdateSlotConfigurationNames
Updates the names of application settings and connection string that remain with the slot during swap operation.


```js
azure_web_webapps.WebApps_UpdateSlotConfigurationNames({
  "resourceGroupName": "",
  "name": "",
  "slotConfigNames": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slotConfigNames **required** [SlotConfigNamesResource](#slotconfignamesresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SlotConfigNamesResource](#slotconfignamesresource)

### WebApps_GetConfiguration
Gets the configuration of an app, such as platform version and bitness, default documents, virtual applications, Always On, etc.


```js
azure_web_webapps.WebApps_GetConfiguration({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResource](#siteconfigresource)

### WebApps_UpdateConfiguration
Updates the configuration of an app.


```js
azure_web_webapps.WebApps_UpdateConfiguration({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteConfig **required** [SiteConfigResource](#siteconfigresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResource](#siteconfigresource)

### WebApps_CreateOrUpdateConfiguration
Updates the configuration of an app.


```js
azure_web_webapps.WebApps_CreateOrUpdateConfiguration({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteConfig **required** [SiteConfigResource](#siteconfigresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResource](#siteconfigresource)

### WebApps_ListConfigurationSnapshotInfo
Gets a list of web app configuration snapshots identifiers. Each element of the list contains a timestamp and the ID of the snapshot.


```js
azure_web_webapps.WebApps_ListConfigurationSnapshotInfo({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigurationSnapshotInfoCollection](#siteconfigurationsnapshotinfocollection)

### WebApps_GetConfigurationSnapshot
Gets a snapshot of the configuration of an app at a previous point in time.


```js
azure_web_webapps.WebApps_GetConfigurationSnapshot({
  "resourceGroupName": "",
  "name": "",
  "snapshotId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * snapshotId **required** `string`: The ID of the snapshot to read.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResource](#siteconfigresource)

### WebApps_RecoverSiteConfigurationSnapshot
Reverts the configuration of an app to a previous snapshot.


```js
azure_web_webapps.WebApps_RecoverSiteConfigurationSnapshot({
  "resourceGroupName": "",
  "name": "",
  "snapshotId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * snapshotId **required** `string`: The ID of the snapshot to read.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetWebSiteContainerLogs
Gets the last lines of docker logs for the given site


```js
azure_web_webapps.WebApps_GetWebSiteContainerLogs({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_GetContainerLogsZip
Gets the ZIP archived docker log files for the given site


```js
azure_web_webapps.WebApps_GetContainerLogsZip({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_ListContinuousWebJobs
List continuous web jobs for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListContinuousWebJobs({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ContinuousWebJobCollection](#continuouswebjobcollection)

### WebApps_DeleteContinuousWebJob
Delete a continuous web job by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteContinuousWebJob({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetContinuousWebJob
Gets a continuous web job by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_GetContinuousWebJob({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ContinuousWebJob](#continuouswebjob)

### WebApps_StartContinuousWebJob
Start a continuous web job for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_StartContinuousWebJob({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_StopContinuousWebJob
Stop a continuous web job for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_StopContinuousWebJob({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListDeployments
List deployments for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListDeployments({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DeploymentCollection](#deploymentcollection)

### WebApps_DeleteDeployment
Delete a deployment by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * id **required** `string`: Deployment ID.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetDeployment
Get a deployment by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_GetDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * id **required** `string`: Deployment ID.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### WebApps_CreateDeployment
Create a deployment for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_CreateDeployment({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "deployment": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * id **required** `string`: ID of an existing deployment.
  * deployment **required** [Deployment](#deployment)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### WebApps_ListDeploymentLog
List deployment log for specific deployment for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListDeploymentLog({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * id **required** `string`: The ID of a specific deployment. This is the value of the name property in the JSON response from "GET /api/sites/{siteName}/deployments".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### WebApps_DiscoverBackup
Discovers an existing app backup that can be restored from a blob in Azure storage. Use this to get information about the databases stored in a backup.


```js
azure_web_webapps.WebApps_DiscoverBackup({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * request **required** [RestoreRequest](#restorerequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RestoreRequest](#restorerequest)

### WebApps_ListDomainOwnershipIdentifiers
Lists ownership identifiers for domain associated with web app.


```js
azure_web_webapps.WebApps_ListDomainOwnershipIdentifiers({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of identifiers.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A domain specific resource identifier.
      * properties `object`: Identifier resource specific properties
        * id `string`: String representation of the identity.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### WebApps_DeleteDomainOwnershipIdentifier
Deletes a domain ownership identifier for a web app.


```js
azure_web_webapps.WebApps_DeleteDomainOwnershipIdentifier({
  "resourceGroupName": "",
  "name": "",
  "domainOwnershipIdentifierName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * domainOwnershipIdentifierName **required** `string`: Name of domain ownership identifier.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetDomainOwnershipIdentifier
Get domain ownership identifier for web app.


```js
azure_web_webapps.WebApps_GetDomainOwnershipIdentifier({
  "resourceGroupName": "",
  "name": "",
  "domainOwnershipIdentifierName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * domainOwnershipIdentifierName **required** `string`: Name of domain ownership identifier.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A domain specific resource identifier.
  * properties `object`: Identifier resource specific properties
    * id `string`: String representation of the identity.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateDomainOwnershipIdentifier
Creates a domain ownership identifier for web app, or updates an existing ownership identifier.


```js
azure_web_webapps.WebApps_UpdateDomainOwnershipIdentifier({
  "resourceGroupName": "",
  "name": "",
  "domainOwnershipIdentifierName": "",
  "domainOwnershipIdentifier": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * domainOwnershipIdentifierName **required** `string`: Name of domain ownership identifier.
  * domainOwnershipIdentifier **required** `object`: A domain specific resource identifier.
    * properties `object`: Identifier resource specific properties
      * id `string`: String representation of the identity.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A domain specific resource identifier.
  * properties `object`: Identifier resource specific properties
    * id `string`: String representation of the identity.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_CreateOrUpdateDomainOwnershipIdentifier
Creates a domain ownership identifier for web app, or updates an existing ownership identifier.


```js
azure_web_webapps.WebApps_CreateOrUpdateDomainOwnershipIdentifier({
  "resourceGroupName": "",
  "name": "",
  "domainOwnershipIdentifierName": "",
  "domainOwnershipIdentifier": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * domainOwnershipIdentifierName **required** `string`: Name of domain ownership identifier.
  * domainOwnershipIdentifier **required** `object`: A domain specific resource identifier.
    * properties `object`: Identifier resource specific properties
      * id `string`: String representation of the identity.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A domain specific resource identifier.
  * properties `object`: Identifier resource specific properties
    * id `string`: String representation of the identity.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_GetMSDeployStatus
Get the status of the last MSDeploy operation.


```js
azure_web_webapps.WebApps_GetMSDeployStatus({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployStatus](#msdeploystatus)

### WebApps_CreateMSDeployOperation
Invoke the MSDeploy web app extension.


```js
azure_web_webapps.WebApps_CreateMSDeployOperation({
  "resourceGroupName": "",
  "name": "",
  "MSDeploy": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * MSDeploy **required** [MSDeploy](#msdeploy)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployStatus](#msdeploystatus)

### WebApps_GetMSDeployLog
Get the MSDeploy Log for the last MSDeploy operation.


```js
azure_web_webapps.WebApps_GetMSDeployLog({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployLog](#msdeploylog)

### WebApps_ListFunctions
List the functions for a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_ListFunctions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionEnvelopeCollection](#functionenvelopecollection)

### WebApps_GetFunctionsAdminToken
Fetch a short lived token that can be exchanged for a master key.


```js
azure_web_webapps.WebApps_GetFunctionsAdminToken({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `string`

### WebApps_DeleteFunction
Delete a function for web site, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteFunction({
  "resourceGroupName": "",
  "name": "",
  "functionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * functionName **required** `string`: Function name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetFunction
Get function information by its ID for web site, or a deployment slot.


```js
azure_web_webapps.WebApps_GetFunction({
  "resourceGroupName": "",
  "name": "",
  "functionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * functionName **required** `string`: Function name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionEnvelope](#functionenvelope)

### WebApps_CreateFunction
Create function for web site, or a deployment slot.


```js
azure_web_webapps.WebApps_CreateFunction({
  "resourceGroupName": "",
  "name": "",
  "functionName": "",
  "function_envelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * functionName **required** `string`: Function name.
  * function_envelope **required** [FunctionEnvelope](#functionenvelope)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionEnvelope](#functionenvelope)

### WebApps_ListFunctionSecrets
Get function secrets for a function in a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_ListFunctionSecrets({
  "resourceGroupName": "",
  "name": "",
  "functionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * functionName **required** `string`: Function name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionSecrets](#functionsecrets)

### WebApps_ListHostNameBindings
Get hostname bindings for an app or a deployment slot.


```js
azure_web_webapps.WebApps_ListHostNameBindings({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBindingCollection](#hostnamebindingcollection)

### WebApps_DeleteHostNameBinding
Deletes a hostname binding for an app.


```js
azure_web_webapps.WebApps_DeleteHostNameBinding({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * hostName **required** `string`: Hostname in the hostname binding.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetHostNameBinding
Get the named hostname binding for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetHostNameBinding({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * hostName **required** `string`: Hostname in the hostname binding.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBinding](#hostnamebinding)

### WebApps_CreateOrUpdateHostNameBinding
Creates a hostname binding for an app.


```js
azure_web_webapps.WebApps_CreateOrUpdateHostNameBinding({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "hostNameBinding": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * hostName **required** `string`: Hostname in the hostname binding.
  * hostNameBinding **required** [HostNameBinding](#hostnamebinding)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBinding](#hostnamebinding)

### WebApps_DeleteHybridConnection
Removes a Hybrid Connection from this site.


```js
azure_web_webapps.WebApps_DeleteHybridConnection({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetHybridConnection
Retrieves a specific Service Bus Hybrid Connection used by this Web App.


```js
azure_web_webapps.WebApps_GetHybridConnection({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
  * properties `object`: HybridConnection resource specific properties
    * hostname `string`: The hostname of the endpoint.
    * port `integer`: The port of the endpoint.
    * relayArmUri `string`: The ARM URI to the Service Bus relay.
    * relayName `string`: The name of the Service Bus relay.
    * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
    * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
    * serviceBusNamespace `string`: The name of the Service Bus namespace.
    * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateHybridConnection
Creates a new Hybrid Connection using a Service Bus relay.


```js
azure_web_webapps.WebApps_UpdateHybridConnection({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * connectionEnvelope **required** `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
    * properties `object`: HybridConnection resource specific properties
      * hostname `string`: The hostname of the endpoint.
      * port `integer`: The port of the endpoint.
      * relayArmUri `string`: The ARM URI to the Service Bus relay.
      * relayName `string`: The name of the Service Bus relay.
      * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
      * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
      * serviceBusNamespace `string`: The name of the Service Bus namespace.
      * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
  * properties `object`: HybridConnection resource specific properties
    * hostname `string`: The hostname of the endpoint.
    * port `integer`: The port of the endpoint.
    * relayArmUri `string`: The ARM URI to the Service Bus relay.
    * relayName `string`: The name of the Service Bus relay.
    * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
    * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
    * serviceBusNamespace `string`: The name of the Service Bus namespace.
    * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_CreateOrUpdateHybridConnection
Creates a new Hybrid Connection using a Service Bus relay.


```js
azure_web_webapps.WebApps_CreateOrUpdateHybridConnection({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * connectionEnvelope **required** `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
    * properties `object`: HybridConnection resource specific properties
      * hostname `string`: The hostname of the endpoint.
      * port `integer`: The port of the endpoint.
      * relayArmUri `string`: The ARM URI to the Service Bus relay.
      * relayName `string`: The name of the Service Bus relay.
      * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
      * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
      * serviceBusNamespace `string`: The name of the Service Bus namespace.
      * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
  * properties `object`: HybridConnection resource specific properties
    * hostname `string`: The hostname of the endpoint.
    * port `integer`: The port of the endpoint.
    * relayArmUri `string`: The ARM URI to the Service Bus relay.
    * relayName `string`: The name of the Service Bus relay.
    * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
    * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
    * serviceBusNamespace `string`: The name of the Service Bus namespace.
    * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListHybridConnectionKeys
Gets the send key name and value for a Hybrid Connection.


```js
azure_web_webapps.WebApps_ListHybridConnectionKeys({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.
  * properties `object`: HybridConnectionKey resource specific properties
    * sendKeyName `string`: The name of the send key.
    * sendKeyValue `string`: The value of the send key.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListHybridConnections
Retrieves all Service Bus Hybrid Connections used by this Web App.


```js
azure_web_webapps.WebApps_ListHybridConnections({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
  * properties `object`: HybridConnection resource specific properties
    * hostname `string`: The hostname of the endpoint.
    * port `integer`: The port of the endpoint.
    * relayArmUri `string`: The ARM URI to the Service Bus relay.
    * relayName `string`: The name of the Service Bus relay.
    * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
    * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
    * serviceBusNamespace `string`: The name of the Service Bus namespace.
    * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListRelayServiceConnections
Gets hybrid connections configured for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListRelayServiceConnections({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### WebApps_DeleteRelayServiceConnection
Deletes a relay service connection by its name.


```js
azure_web_webapps.WebApps_DeleteRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * entityName **required** `string`: Name of the hybrid connection configuration.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetRelayServiceConnection
Gets a hybrid connection configuration by its name.


```js
azure_web_webapps.WebApps_GetRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * entityName **required** `string`: Name of the hybrid connection.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### WebApps_UpdateRelayServiceConnection
Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).


```js
azure_web_webapps.WebApps_UpdateRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * entityName **required** `string`: Name of the hybrid connection configuration.
  * connectionEnvelope **required** [RelayServiceConnectionEntity](#relayserviceconnectionentity)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### WebApps_CreateOrUpdateRelayServiceConnection
Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).


```js
azure_web_webapps.WebApps_CreateOrUpdateRelayServiceConnection({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * entityName **required** `string`: Name of the hybrid connection configuration.
  * connectionEnvelope **required** [RelayServiceConnectionEntity](#relayserviceconnectionentity)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### WebApps_ListInstanceIdentifiers
Gets all scale-out instances of an app.


```js
azure_web_webapps.WebApps_ListInstanceIdentifiers({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WebAppInstanceCollection](#webappinstancecollection)

### WebApps_GetInstanceMsDeployStatus
Get the status of the last MSDeploy operation.


```js
azure_web_webapps.WebApps_GetInstanceMsDeployStatus({
  "resourceGroupName": "",
  "name": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * instanceId **required** `string`: ID of web app instance.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployStatus](#msdeploystatus)

### WebApps_CreateInstanceMSDeployOperation
Invoke the MSDeploy web app extension.


```js
azure_web_webapps.WebApps_CreateInstanceMSDeployOperation({
  "resourceGroupName": "",
  "name": "",
  "instanceId": "",
  "MSDeploy": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * instanceId **required** `string`: ID of web app instance.
  * MSDeploy **required** [MSDeploy](#msdeploy)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployStatus](#msdeploystatus)

### WebApps_GetInstanceMSDeployLog
Get the MSDeploy Log for the last MSDeploy operation.


```js
azure_web_webapps.WebApps_GetInstanceMSDeployLog({
  "resourceGroupName": "",
  "name": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * instanceId **required** `string`: ID of web app instance.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployLog](#msdeploylog)

### WebApps_ListInstanceProcesses
Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListInstanceProcesses({
  "resourceGroupName": "",
  "name": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessInfoCollection](#processinfocollection)

### WebApps_DeleteInstanceProcess
Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_DeleteInstanceProcess({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetInstanceProcess
Get process information by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetInstanceProcess({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessInfo](#processinfo)

### WebApps_GetInstanceProcessDump
Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetInstanceProcessDump({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_ListInstanceProcessModules
List module information for a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListInstanceProcessModules({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessModuleInfoCollection](#processmoduleinfocollection)

### WebApps_GetInstanceProcessModule
Get process information by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetInstanceProcessModule({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "baseAddress": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * baseAddress **required** `string`: Module base address.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessModuleInfo](#processmoduleinfo)

### WebApps_ListInstanceProcessThreads
List the threads in a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListInstanceProcessThreads({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessThreadInfoCollection](#processthreadinfocollection)

### WebApps_GetInstanceProcessThread
Get thread information by Thread ID for a specific process, in a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetInstanceProcessThread({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "threadId": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * threadId **required** `string`: TID.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessThreadInfo](#processthreadinfo)

### WebApps_IsCloneable
Shows whether an app can be cloned to another resource group or subscription.


```js
azure_web_webapps.WebApps_IsCloneable({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteCloneability](#sitecloneability)

### WebApps_ListSyncFunctionTriggers
This is to allow calling via powershell and ARM template.


```js
azure_web_webapps.WebApps_ListSyncFunctionTriggers({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionSecrets](#functionsecrets)

### WebApps_ListMetricDefinitions
Gets all metric definitions of an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListMetricDefinitions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
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

### WebApps_ListMetrics
Gets performance metrics of an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListMetrics({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * details `boolean`: Specify "true" to include metric details in the response. It is "false" by default.
  * $filter `string`: Return only metrics specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
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

### WebApps_MigrateStorage
Restores a web app.


```js
azure_web_webapps.WebApps_MigrateStorage({
  "subscriptionName": "",
  "resourceGroupName": "",
  "name": "",
  "migrationOptions": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionName **required** `string`: Azure subscription.
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * migrationOptions **required** [StorageMigrationOptions](#storagemigrationoptions)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StorageMigrationResponse](#storagemigrationresponse)

### WebApps_MigrateMySql
Migrates a local (in-app) MySql database to a remote MySql database.


```js
azure_web_webapps.WebApps_MigrateMySql({
  "resourceGroupName": "",
  "name": "",
  "migrationRequestEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * migrationRequestEnvelope **required** [MigrateMySqlRequest](#migratemysqlrequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: An operation on a resource.
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

### WebApps_GetMigrateMySqlStatus
Returns the status of MySql in app migration, if one is active, and whether or not MySql in app is enabled


```js
azure_web_webapps.WebApps_GetMigrateMySqlStatus({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MigrateMySqlStatus](#migratemysqlstatus)

### WebApps_DeleteSwiftVirtualNetwork
Deletes a Swift Virtual Network connection from an app (or deployment slot).


```js
azure_web_webapps.WebApps_DeleteSwiftVirtualNetwork({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetSwiftVirtualNetworkConnection
Gets a Swift Virtual Network connection.


```js
azure_web_webapps.WebApps_GetSwiftVirtualNetworkConnection({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SwiftVirtualNetwork](#swiftvirtualnetwork)

### WebApps_UpdateSwiftVirtualNetworkConnection
Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
in use by another App Service Plan other than the one this App is in.


```js
azure_web_webapps.WebApps_UpdateSwiftVirtualNetworkConnection({
  "resourceGroupName": "",
  "name": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * connectionEnvelope **required** [SwiftVirtualNetwork](#swiftvirtualnetwork)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SwiftVirtualNetwork](#swiftvirtualnetwork)

### WebApps_CreateOrUpdateSwiftVirtualNetworkConnection
Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
in use by another App Service Plan other than the one this App is in.


```js
azure_web_webapps.WebApps_CreateOrUpdateSwiftVirtualNetworkConnection({
  "resourceGroupName": "",
  "name": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * connectionEnvelope **required** [SwiftVirtualNetwork](#swiftvirtualnetwork)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SwiftVirtualNetwork](#swiftvirtualnetwork)

### WebApps_ListNetworkFeatures
Gets all network features used by the app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListNetworkFeatures({
  "resourceGroupName": "",
  "name": "",
  "view": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * view **required** `string`: The type of view. This can either be "summary" or "detailed".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [NetworkFeatures](#networkfeatures)

### WebApps_GetNetworkTraceOperation
Gets a named operation for a network trace capturing (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetNetworkTraceOperation({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * operationId **required** `string`: GUID of the operation.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_StartWebSiteNetworkTrace
Start capturing network packets for the site (To be deprecated).


```js
azure_web_webapps.WebApps_StartWebSiteNetworkTrace({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * durationInSeconds `integer`: The duration to keep capturing in seconds.
  * maxFrameLength `integer`: The maximum frame length in bytes (Optional).
  * sasUrl `string`: The Blob URL to store capture file.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `string`

### WebApps_StartWebSiteNetworkTraceOperation
Start capturing network packets for the site.


```js
azure_web_webapps.WebApps_StartWebSiteNetworkTraceOperation({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * durationInSeconds `integer`: The duration to keep capturing in seconds.
  * maxFrameLength `integer`: The maximum frame length in bytes (Optional).
  * sasUrl `string`: The Blob URL to store capture file.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_StopWebSiteNetworkTrace
Stop ongoing capturing network packets for the site.


```js
azure_web_webapps.WebApps_StopWebSiteNetworkTrace({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetNetworkTraces
Gets a named operation for a network trace capturing (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetNetworkTraces({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * operationId **required** `string`: GUID of the operation.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_GetNetworkTraceOperationV2
Gets a named operation for a network trace capturing (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetNetworkTraceOperationV2({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * operationId **required** `string`: GUID of the operation.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_GetNetworkTracesV2
Gets a named operation for a network trace capturing (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetNetworkTracesV2({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * operationId **required** `string`: GUID of the operation.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_GenerateNewSitePublishingPassword
Generates a new publishing password for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GenerateNewSitePublishingPassword({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListPerfMonCounters
Gets perfmon counters for web app.


```js
azure_web_webapps.WebApps_ListPerfMonCounters({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PerfMonCounterCollection](#perfmoncountercollection)

### WebApps_GetSitePhpErrorLogFlag
Gets web app's event logs.


```js
azure_web_webapps.WebApps_GetSitePhpErrorLogFlag({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SitePhpErrorLogFlag](#sitephperrorlogflag)

### WebApps_ListPremierAddOns
Gets the premier add-ons of an app.


```js
azure_web_webapps.WebApps_ListPremierAddOns({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PremierAddOn](#premieraddon)

### WebApps_DeletePremierAddOn
Delete a premier add-on from an app.


```js
azure_web_webapps.WebApps_DeletePremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * premierAddOnName **required** `string`: Add-on name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetPremierAddOn
Gets a named add-on of an app.


```js
azure_web_webapps.WebApps_GetPremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * premierAddOnName **required** `string`: Add-on name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PremierAddOn](#premieraddon)

### WebApps_UpdatePremierAddOn
Updates a named add-on of an app.


```js
azure_web_webapps.WebApps_UpdatePremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "premierAddOn": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * premierAddOnName **required** `string`: Add-on name.
  * premierAddOn **required** [PremierAddOnPatchResource](#premieraddonpatchresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PremierAddOn](#premieraddon)

### WebApps_AddPremierAddOn
Updates a named add-on of an app.


```js
azure_web_webapps.WebApps_AddPremierAddOn({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "premierAddOn": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * premierAddOnName **required** `string`: Add-on name.
  * premierAddOn **required** [PremierAddOn](#premieraddon)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PremierAddOn](#premieraddon)

### WebApps_GetPrivateAccess
Gets data around private site access enablement and authorized Virtual Networks that can access the site.


```js
azure_web_webapps.WebApps_GetPrivateAccess({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PrivateAccess](#privateaccess)

### WebApps_PutPrivateAccessVnet
Sets data around private site access enablement and authorized Virtual Networks that can access the site.


```js
azure_web_webapps.WebApps_PutPrivateAccessVnet({
  "resourceGroupName": "",
  "name": "",
  "access": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * access **required** [PrivateAccess](#privateaccess)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PrivateAccess](#privateaccess)

### WebApps_ListProcesses
Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListProcesses({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessInfoCollection](#processinfocollection)

### WebApps_DeleteProcess
Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_DeleteProcess({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetProcess
Get process information by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetProcess({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessInfo](#processinfo)

### WebApps_GetProcessDump
Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetProcessDump({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_ListProcessModules
List module information for a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListProcessModules({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessModuleInfoCollection](#processmoduleinfocollection)

### WebApps_GetProcessModule
Get process information by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetProcessModule({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "baseAddress": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * baseAddress **required** `string`: Module base address.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessModuleInfo](#processmoduleinfo)

### WebApps_ListProcessThreads
List the threads in a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListProcessThreads({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessThreadInfoCollection](#processthreadinfocollection)

### WebApps_GetProcessThread
Get thread information by Thread ID for a specific process, in a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetProcessThread({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "threadId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * threadId **required** `string`: TID.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessThreadInfo](#processthreadinfo)

### WebApps_ListPublicCertificates
Get public certificates for an app or a deployment slot.


```js
azure_web_webapps.WebApps_ListPublicCertificates({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PublicCertificateCollection](#publiccertificatecollection)

### WebApps_DeletePublicCertificate
Deletes a hostname binding for an app.


```js
azure_web_webapps.WebApps_DeletePublicCertificate({
  "resourceGroupName": "",
  "name": "",
  "publicCertificateName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * publicCertificateName **required** `string`: Public certificate name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetPublicCertificate
Get the named public certificate for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetPublicCertificate({
  "resourceGroupName": "",
  "name": "",
  "publicCertificateName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * publicCertificateName **required** `string`: Public certificate name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PublicCertificate](#publiccertificate)

### WebApps_CreateOrUpdatePublicCertificate
Creates a hostname binding for an app.


```js
azure_web_webapps.WebApps_CreateOrUpdatePublicCertificate({
  "resourceGroupName": "",
  "name": "",
  "publicCertificateName": "",
  "publicCertificate": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * publicCertificateName **required** `string`: Public certificate name.
  * publicCertificate **required** [PublicCertificate](#publiccertificate)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PublicCertificate](#publiccertificate)

### WebApps_ListPublishingProfileXmlWithSecrets
Gets the publishing profile for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListPublishingProfileXmlWithSecrets({
  "resourceGroupName": "",
  "name": "",
  "publishingProfileOptions": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * publishingProfileOptions **required** [CsmPublishingProfileOptions](#csmpublishingprofileoptions)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_ResetProductionSlotConfig
Resets the configuration settings of the current slot if they were previously modified by calling the API with POST.


```js
azure_web_webapps.WebApps_ResetProductionSlotConfig({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_Restart
Restarts an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_Restart({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * softRestart `boolean`: Specify true to apply the configuration settings and restarts the app only if necessary. By default, the API always restarts and reprovisions the app.
  * synchronous `boolean`: Specify true to block until the app is restarted. By default, it is set to false, and the API responds immediately (asynchronous).
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_RestoreFromBackupBlob
Restores an app from a backup blob in Azure Storage.


```js
azure_web_webapps.WebApps_RestoreFromBackupBlob({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * request **required** [RestoreRequest](#restorerequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_RestoreFromDeletedApp
Restores a deleted web app to this web app.


```js
azure_web_webapps.WebApps_RestoreFromDeletedApp({
  "resourceGroupName": "",
  "name": "",
  "restoreRequest": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * restoreRequest **required** [DeletedAppRestoreRequest](#deletedapprestorerequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_RestoreSnapshot
Restores a web app from a snapshot.


```js
azure_web_webapps.WebApps_RestoreSnapshot({
  "resourceGroupName": "",
  "name": "",
  "restoreRequest": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * restoreRequest **required** [SnapshotRestoreRequest](#snapshotrestorerequest)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListSiteExtensions
Get list of siteextensions for a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_ListSiteExtensions({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteExtensionInfoCollection](#siteextensioninfocollection)

### WebApps_DeleteSiteExtension
Remove a site extension from a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteSiteExtension({
  "resourceGroupName": "",
  "name": "",
  "siteExtensionId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * siteExtensionId **required** `string`: Site extension name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetSiteExtension
Get site extension information by its ID for a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_GetSiteExtension({
  "resourceGroupName": "",
  "name": "",
  "siteExtensionId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * siteExtensionId **required** `string`: Site extension name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteExtensionInfo](#siteextensioninfo)

### WebApps_InstallSiteExtension
Install site extension on a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_InstallSiteExtension({
  "resourceGroupName": "",
  "name": "",
  "siteExtensionId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * siteExtensionId **required** `string`: Site extension name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteExtensionInfo](#siteextensioninfo)

### WebApps_ListSlots
Gets an app's deployment slots.


```js
azure_web_webapps.WebApps_ListSlots({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
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

### WebApps_DeleteSlot
Deletes a web, mobile, or API app, or one of the deployment slots.


```js
azure_web_webapps.WebApps_DeleteSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app to delete.
  * slot **required** `string`: Name of the deployment slot to delete. By default, the API deletes the production slot.
  * deleteMetrics `boolean`: If true, web app metrics are also deleted.
  * deleteEmptyServerFarm `boolean`: Specify true if the App Service plan will be empty after app deletion and you want to delete the empty App Service plan. By default, the empty App Service plan is not deleted.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetSlot
Gets the details of a web, mobile, or API app.


```js
azure_web_webapps.WebApps_GetSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. By default, this API returns the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A web app, a mobile app backend, or an API app.
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
        * location `string`: Location.
        * numberOfWorkers `integer`: NumberOfWorkers.
    * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
      * items `object`: SSL-enabled hostname.
        * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
        * name `string`: Hostname.
        * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
        * thumbprint `string`: SSL certificate thumbprint.
        * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
        * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
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
        * url `string`: The URL of the API definition.
      * appCommandLine `string`: App command line to launch.
      * appSettings `array`: Application settings.
        * items `object`: Name value pair.
          * name `string`: Pair name.
          * value `string`: Pair value.
      * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
      * autoHealRules `object`: Rules that can be defined for auto-heal.
        * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
          * actionType `string` (values: Recycle, LogEvent, CustomAction): Predefined action to be taken.
          * customAction `object`: Custom action to be executed
          * minProcessExecutionTime `string`: Minimum time the process must execute
        * triggers `object`: Triggers for auto-heal.
          * privateBytesInKB `integer`: A rule based on private bytes.
          * requests `object`: Trigger based on total requests.
          * slowRequests `object`: Trigger based on request execution time.
          * statusCodes `array`: A rule based on status codes.
      * autoSwapSlotName `string`: Auto-swap slot name.
      * azureStorageAccounts `object`: User-provided Azure storage accounts.
      * connectionStrings `array`: Connection strings.
        * items `object`: Database connection string information.
          * connectionString `string`: Connection string value.
          * name `string`: Name of connection string.
          * type `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
      * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
        * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
          * items `string`
        * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
      * defaultDocuments `array`: Default documents.
        * items `string`
      * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
      * documentRoot `string`: Document root.
      * experiments `object`: Routing rules in production experiments.
        * rampUpRules `array`: List of ramp-up rules.
          * items `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
      * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
      * handlerMappings `array`: Handler mappings.
        * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
          * arguments `string`: Command-line arguments to be passed to the script processor.
          * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
          * scriptProcessor `string`: The absolute path to the FastCGI application.
      * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
      * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
      * ipSecurityRestrictions `array`: IP security restrictions for main.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * javaContainer `string`: Java container.
      * javaContainerVersion `string`: Java container version.
      * javaVersion `string`: Java version.
      * limits `object`: Metric limits set on an app.
        * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
        * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
        * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
      * linuxFxVersion `string`: Linux App Framework and version
      * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
      * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
      * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
      * machineKey `object`: MachineKey of an app.
        * decryption `string`: Algorithm used for decryption.
        * decryptionKey `string`: Decryption key.
        * validation `string`: MachineKey validation.
        * validationKey `string`: Validation key.
      * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
      * managedServiceIdentityId `integer`: Managed Service Identity Id
      * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
      * netFrameworkVersion `string`: .NET Framework version.
      * nodeVersion `string`: Version of Node.js.
      * numberOfWorkers `integer`: Number of workers.
      * phpVersion `string`: Version of PHP.
      * publishingUsername `string`: Publishing user name.
      * push `object`: Push settings for the App.
        * properties `object`: PushSettings resource specific properties
          * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
          * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
          * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
          * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
      * pythonVersion `string`: Version of Python.
      * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
      * remoteDebuggingVersion `string`: Remote debugging version.
      * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
      * requestTracingExpirationTime `string`: Request tracing expiration time.
      * reservedInstanceCount `integer`: Number of reserved instances.
      * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
      * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
      * tracingOptions `string`: Tracing options.
      * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
      * virtualApplications `array`: Virtual applications.
        * items `object`: Virtual application in an app.
          * physicalPath `string`: Physical path.
          * preloadEnabled `boolean`: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
          * virtualDirectories `array`: Virtual directories for virtual application.
          * virtualPath `string`: Virtual path.
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

### WebApps_UpdateSlot
Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.


```js
azure_web_webapps.WebApps_UpdateSlot({
  "resourceGroupName": "",
  "name": "",
  "siteEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
  * siteEnvelope **required** [SitePatchResource](#sitepatchresource)
  * slot **required** `string`: Name of the deployment slot to create or update. By default, this API attempts to create or modify the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A web app, a mobile app backend, or an API app.
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
        * location `string`: Location.
        * numberOfWorkers `integer`: NumberOfWorkers.
    * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
      * items `object`: SSL-enabled hostname.
        * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
        * name `string`: Hostname.
        * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
        * thumbprint `string`: SSL certificate thumbprint.
        * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
        * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
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
        * url `string`: The URL of the API definition.
      * appCommandLine `string`: App command line to launch.
      * appSettings `array`: Application settings.
        * items `object`: Name value pair.
          * name `string`: Pair name.
          * value `string`: Pair value.
      * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
      * autoHealRules `object`: Rules that can be defined for auto-heal.
        * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
          * actionType `string` (values: Recycle, LogEvent, CustomAction): Predefined action to be taken.
          * customAction `object`: Custom action to be executed
          * minProcessExecutionTime `string`: Minimum time the process must execute
        * triggers `object`: Triggers for auto-heal.
          * privateBytesInKB `integer`: A rule based on private bytes.
          * requests `object`: Trigger based on total requests.
          * slowRequests `object`: Trigger based on request execution time.
          * statusCodes `array`: A rule based on status codes.
      * autoSwapSlotName `string`: Auto-swap slot name.
      * azureStorageAccounts `object`: User-provided Azure storage accounts.
      * connectionStrings `array`: Connection strings.
        * items `object`: Database connection string information.
          * connectionString `string`: Connection string value.
          * name `string`: Name of connection string.
          * type `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
      * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
        * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
          * items `string`
        * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
      * defaultDocuments `array`: Default documents.
        * items `string`
      * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
      * documentRoot `string`: Document root.
      * experiments `object`: Routing rules in production experiments.
        * rampUpRules `array`: List of ramp-up rules.
          * items `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
      * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
      * handlerMappings `array`: Handler mappings.
        * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
          * arguments `string`: Command-line arguments to be passed to the script processor.
          * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
          * scriptProcessor `string`: The absolute path to the FastCGI application.
      * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
      * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
      * ipSecurityRestrictions `array`: IP security restrictions for main.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * javaContainer `string`: Java container.
      * javaContainerVersion `string`: Java container version.
      * javaVersion `string`: Java version.
      * limits `object`: Metric limits set on an app.
        * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
        * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
        * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
      * linuxFxVersion `string`: Linux App Framework and version
      * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
      * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
      * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
      * machineKey `object`: MachineKey of an app.
        * decryption `string`: Algorithm used for decryption.
        * decryptionKey `string`: Decryption key.
        * validation `string`: MachineKey validation.
        * validationKey `string`: Validation key.
      * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
      * managedServiceIdentityId `integer`: Managed Service Identity Id
      * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
      * netFrameworkVersion `string`: .NET Framework version.
      * nodeVersion `string`: Version of Node.js.
      * numberOfWorkers `integer`: Number of workers.
      * phpVersion `string`: Version of PHP.
      * publishingUsername `string`: Publishing user name.
      * push `object`: Push settings for the App.
        * properties `object`: PushSettings resource specific properties
          * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
          * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
          * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
          * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
      * pythonVersion `string`: Version of Python.
      * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
      * remoteDebuggingVersion `string`: Remote debugging version.
      * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
      * requestTracingExpirationTime `string`: Request tracing expiration time.
      * reservedInstanceCount `integer`: Number of reserved instances.
      * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
      * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
      * tracingOptions `string`: Tracing options.
      * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
      * virtualApplications `array`: Virtual applications.
        * items `object`: Virtual application in an app.
          * physicalPath `string`: Physical path.
          * preloadEnabled `boolean`: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
          * virtualDirectories `array`: Virtual directories for virtual application.
          * virtualPath `string`: Virtual path.
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

### WebApps_CreateOrUpdateSlot
Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.


```js
azure_web_webapps.WebApps_CreateOrUpdateSlot({
  "resourceGroupName": "",
  "name": "",
  "siteEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
  * siteEnvelope **required** `object`: A web app, a mobile app backend, or an API app.
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
          * location `string`: Location.
          * numberOfWorkers `integer`: NumberOfWorkers.
      * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
        * items `object`: SSL-enabled hostname.
          * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
          * name `string`: Hostname.
          * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
          * thumbprint `string`: SSL certificate thumbprint.
          * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
          * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
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
          * url `string`: The URL of the API definition.
        * appCommandLine `string`: App command line to launch.
        * appSettings `array`: Application settings.
          * items `object`: Name value pair.
        * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
        * autoHealRules `object`: Rules that can be defined for auto-heal.
          * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
          * triggers `object`: Triggers for auto-heal.
        * autoSwapSlotName `string`: Auto-swap slot name.
        * azureStorageAccounts `object`: User-provided Azure storage accounts.
        * connectionStrings `array`: Connection strings.
          * items `object`: Database connection string information.
        * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
          * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
          * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
        * defaultDocuments `array`: Default documents.
          * items `string`
        * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
        * documentRoot `string`: Document root.
        * experiments `object`: Routing rules in production experiments.
          * rampUpRules `array`: List of ramp-up rules.
        * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
        * handlerMappings `array`: Handler mappings.
          * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
        * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
        * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
        * ipSecurityRestrictions `array`: IP security restrictions for main.
          * items `object`: IP security restriction on an app.
        * javaContainer `string`: Java container.
        * javaContainerVersion `string`: Java container version.
        * javaVersion `string`: Java version.
        * limits `object`: Metric limits set on an app.
          * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
          * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
          * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
        * linuxFxVersion `string`: Linux App Framework and version
        * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
        * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
        * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
        * machineKey `object`: MachineKey of an app.
          * decryption `string`: Algorithm used for decryption.
          * decryptionKey `string`: Decryption key.
          * validation `string`: MachineKey validation.
          * validationKey `string`: Validation key.
        * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
        * managedServiceIdentityId `integer`: Managed Service Identity Id
        * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
        * netFrameworkVersion `string`: .NET Framework version.
        * nodeVersion `string`: Version of Node.js.
        * numberOfWorkers `integer`: Number of workers.
        * phpVersion `string`: Version of PHP.
        * publishingUsername `string`: Publishing user name.
        * push `object`: Push settings for the App.
          * properties `object`: PushSettings resource specific properties
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
        * pythonVersion `string`: Version of Python.
        * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
        * remoteDebuggingVersion `string`: Remote debugging version.
        * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
        * requestTracingExpirationTime `string`: Request tracing expiration time.
        * reservedInstanceCount `integer`: Number of reserved instances.
        * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
          * items `object`: IP security restriction on an app.
        * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
        * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
        * tracingOptions `string`: Tracing options.
        * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
        * virtualApplications `array`: Virtual applications.
          * items `object`: Virtual application in an app.
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
  * slot **required** `string`: Name of the deployment slot to create or update. By default, this API attempts to create or modify the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A web app, a mobile app backend, or an API app.
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
        * location `string`: Location.
        * numberOfWorkers `integer`: NumberOfWorkers.
    * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
      * items `object`: SSL-enabled hostname.
        * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
        * name `string`: Hostname.
        * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
        * thumbprint `string`: SSL certificate thumbprint.
        * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
        * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
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
        * url `string`: The URL of the API definition.
      * appCommandLine `string`: App command line to launch.
      * appSettings `array`: Application settings.
        * items `object`: Name value pair.
          * name `string`: Pair name.
          * value `string`: Pair value.
      * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
      * autoHealRules `object`: Rules that can be defined for auto-heal.
        * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
          * actionType `string` (values: Recycle, LogEvent, CustomAction): Predefined action to be taken.
          * customAction `object`: Custom action to be executed
          * minProcessExecutionTime `string`: Minimum time the process must execute
        * triggers `object`: Triggers for auto-heal.
          * privateBytesInKB `integer`: A rule based on private bytes.
          * requests `object`: Trigger based on total requests.
          * slowRequests `object`: Trigger based on request execution time.
          * statusCodes `array`: A rule based on status codes.
      * autoSwapSlotName `string`: Auto-swap slot name.
      * azureStorageAccounts `object`: User-provided Azure storage accounts.
      * connectionStrings `array`: Connection strings.
        * items `object`: Database connection string information.
          * connectionString `string`: Connection string value.
          * name `string`: Name of connection string.
          * type `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
      * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
        * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
          * items `string`
        * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
      * defaultDocuments `array`: Default documents.
        * items `string`
      * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
      * documentRoot `string`: Document root.
      * experiments `object`: Routing rules in production experiments.
        * rampUpRules `array`: List of ramp-up rules.
          * items `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
      * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
      * handlerMappings `array`: Handler mappings.
        * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
          * arguments `string`: Command-line arguments to be passed to the script processor.
          * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
          * scriptProcessor `string`: The absolute path to the FastCGI application.
      * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
      * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
      * ipSecurityRestrictions `array`: IP security restrictions for main.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * javaContainer `string`: Java container.
      * javaContainerVersion `string`: Java container version.
      * javaVersion `string`: Java version.
      * limits `object`: Metric limits set on an app.
        * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
        * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
        * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
      * linuxFxVersion `string`: Linux App Framework and version
      * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
      * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
      * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
      * machineKey `object`: MachineKey of an app.
        * decryption `string`: Algorithm used for decryption.
        * decryptionKey `string`: Decryption key.
        * validation `string`: MachineKey validation.
        * validationKey `string`: Validation key.
      * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
      * managedServiceIdentityId `integer`: Managed Service Identity Id
      * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
      * netFrameworkVersion `string`: .NET Framework version.
      * nodeVersion `string`: Version of Node.js.
      * numberOfWorkers `integer`: Number of workers.
      * phpVersion `string`: Version of PHP.
      * publishingUsername `string`: Publishing user name.
      * push `object`: Push settings for the App.
        * properties `object`: PushSettings resource specific properties
          * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
          * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
          * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
          * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
      * pythonVersion `string`: Version of Python.
      * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
      * remoteDebuggingVersion `string`: Remote debugging version.
      * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
      * requestTracingExpirationTime `string`: Request tracing expiration time.
      * reservedInstanceCount `integer`: Number of reserved instances.
      * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
      * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
      * tracingOptions `string`: Tracing options.
      * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
      * virtualApplications `array`: Virtual applications.
        * items `object`: Virtual application in an app.
          * physicalPath `string`: Physical path.
          * preloadEnabled `boolean`: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
          * virtualDirectories `array`: Virtual directories for virtual application.
          * virtualPath `string`: Virtual path.
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

### WebApps_AnalyzeCustomHostnameSlot
Analyze a custom hostname.


```js
azure_web_webapps.WebApps_AnalyzeCustomHostnameSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * hostName `string`: Custom hostname.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [CustomHostnameAnalysisResult](#customhostnameanalysisresult)

### WebApps_ApplySlotConfigurationSlot
Applies the configuration settings from the target slot onto the current slot.


```js
azure_web_webapps.WebApps_ApplySlotConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {
    "targetSlot": "",
    "preserveVnet": true
  },
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * slot **required** `string`: Name of the source slot. If a slot is not specified, the production slot is used as the source slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_BackupSlot
Creates a backup of an app.


```js
azure_web_webapps.WebApps_BackupSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * request **required** [BackupRequest](#backuprequest)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will create a backup for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### WebApps_ListBackupsSlot
Gets existing backups of an app.


```js
azure_web_webapps.WebApps_ListBackupsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get backups of the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupItemCollection](#backupitemcollection)

### WebApps_DeleteBackupSlot
Deletes a backup of an app by its ID.


```js
azure_web_webapps.WebApps_DeleteBackupSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * backupId **required** `string`: ID of the backup.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete a backup of the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetBackupStatusSlot
Gets a backup of an app by its ID.


```js
azure_web_webapps.WebApps_GetBackupStatusSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * backupId **required** `string`: ID of the backup.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get a backup of the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### WebApps_ListBackupStatusSecretsSlot
Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.


```js
azure_web_webapps.WebApps_ListBackupStatusSecretsSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * backupId **required** `string`: ID of backup.
  * request **required** [BackupRequest](#backuprequest)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupItem](#backupitem)

### WebApps_RestoreSlot
Restores a specific backup to another app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_RestoreSlot({
  "resourceGroupName": "",
  "name": "",
  "backupId": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * backupId **required** `string`: ID of the backup.
  * request **required** [RestoreRequest](#restorerequest)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will restore a backup of the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListConfigurationsSlot
List the configurations of an app


```js
azure_web_webapps.WebApps_ListConfigurationsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResourceCollection](#siteconfigresourcecollection)

### WebApps_UpdateApplicationSettingsSlot
Replaces the application settings of an app.


```js
azure_web_webapps.WebApps_UpdateApplicationSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "appSettings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * appSettings **required** [StringDictionary](#stringdictionary)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the application settings for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### WebApps_ListApplicationSettingsSlot
Gets the application settings of an app.


```js
azure_web_webapps.WebApps_ListApplicationSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the application settings for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### WebApps_UpdateAuthSettingsSlot
Updates the Authentication / Authorization settings associated with web app.


```js
azure_web_webapps.WebApps_UpdateAuthSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "siteAuthSettings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * siteAuthSettings **required** [SiteAuthSettings](#siteauthsettings)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteAuthSettings](#siteauthsettings)

### WebApps_GetAuthSettingsSlot
Gets the Authentication/Authorization settings of an app.


```js
azure_web_webapps.WebApps_GetAuthSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the settings for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteAuthSettings](#siteauthsettings)

### WebApps_UpdateAzureStorageAccountsSlot
Updates the Azure storage account configurations of an app.


```js
azure_web_webapps.WebApps_UpdateAzureStorageAccountsSlot({
  "resourceGroupName": "",
  "name": "",
  "azureStorageAccounts": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * azureStorageAccounts **required** [AzureStoragePropertyDictionaryResource](#azurestoragepropertydictionaryresource)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the Azure storage account configurations for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AzureStoragePropertyDictionaryResource](#azurestoragepropertydictionaryresource)

### WebApps_ListAzureStorageAccountsSlot
Gets the Azure storage account configurations of an app.


```js
azure_web_webapps.WebApps_ListAzureStorageAccountsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the Azure storage account configurations for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [AzureStoragePropertyDictionaryResource](#azurestoragepropertydictionaryresource)

### WebApps_DeleteBackupConfigurationSlot
Deletes the backup configuration of an app.


```js
azure_web_webapps.WebApps_DeleteBackupConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the backup configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_UpdateBackupConfigurationSlot
Updates the backup configuration of an app.


```js
azure_web_webapps.WebApps_UpdateBackupConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * request **required** [BackupRequest](#backuprequest)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the backup configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupRequest](#backuprequest)

### WebApps_GetBackupConfigurationSlot
Gets the backup configuration of an app.


```js
azure_web_webapps.WebApps_GetBackupConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the backup configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [BackupRequest](#backuprequest)

### WebApps_UpdateConnectionStringsSlot
Replaces the connection strings of an app.


```js
azure_web_webapps.WebApps_UpdateConnectionStringsSlot({
  "resourceGroupName": "",
  "name": "",
  "connectionStrings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * connectionStrings **required** [ConnectionStringDictionary](#connectionstringdictionary)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the connection settings for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionStringDictionary](#connectionstringdictionary)

### WebApps_ListConnectionStringsSlot
Gets the connection strings of an app.


```js
azure_web_webapps.WebApps_ListConnectionStringsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the connection settings for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ConnectionStringDictionary](#connectionstringdictionary)

### WebApps_GetDiagnosticLogsConfigurationSlot
Gets the logging configuration of an app.


```js
azure_web_webapps.WebApps_GetDiagnosticLogsConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the logging configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteLogsConfig](#sitelogsconfig)

### WebApps_UpdateDiagnosticLogsConfigSlot
Updates the logging configuration of an app.


```js
azure_web_webapps.WebApps_UpdateDiagnosticLogsConfigSlot({
  "resourceGroupName": "",
  "name": "",
  "siteLogsConfig": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteLogsConfig **required** [SiteLogsConfig](#sitelogsconfig)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the logging configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteLogsConfig](#sitelogsconfig)

### WebApps_UpdateMetadataSlot
Replaces the metadata of an app.


```js
azure_web_webapps.WebApps_UpdateMetadataSlot({
  "resourceGroupName": "",
  "name": "",
  "metadata": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * metadata **required** [StringDictionary](#stringdictionary)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the metadata for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### WebApps_ListMetadataSlot
Gets the metadata of an app.


```js
azure_web_webapps.WebApps_ListMetadataSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the metadata for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [StringDictionary](#stringdictionary)

### WebApps_ListPublishingCredentialsSlot
Gets the Git/FTP publishing credentials of an app.


```js
azure_web_webapps.WebApps_ListPublishingCredentialsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the publishing credentials for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: User credentials used for publishing activity.
  * properties `object`: User resource specific properties
    * publishingPassword `string`: Password used for publishing.
    * publishingPasswordHash `string`: Password hash used for publishing.
    * publishingPasswordHashSalt `string`: Password hash salt used for publishing.
    * publishingUserName **required** `string`: Username used for publishing.
    * scmUri `string`: Url of SCM site.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateSitePushSettingsSlot
Updates the Push settings associated with web app.


```js
azure_web_webapps.WebApps_UpdateSitePushSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "pushSettings": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * pushSettings **required** `object`: Push settings for the App.
    * properties `object`: PushSettings resource specific properties
      * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
      * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
      * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
      * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Push settings for the App.
  * properties `object`: PushSettings resource specific properties
    * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
    * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
    * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
    * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListSitePushSettingsSlot
Gets the Push settings associated with web app.


```js
azure_web_webapps.WebApps_ListSitePushSettingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Push settings for the App.
  * properties `object`: PushSettings resource specific properties
    * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
    * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
    * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
    * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_GetConfigurationSlot
Gets the configuration of an app, such as platform version and bitness, default documents, virtual applications, Always On, etc.


```js
azure_web_webapps.WebApps_GetConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResource](#siteconfigresource)

### WebApps_UpdateConfigurationSlot
Updates the configuration of an app.


```js
azure_web_webapps.WebApps_UpdateConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteConfig **required** [SiteConfigResource](#siteconfigresource)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResource](#siteconfigresource)

### WebApps_CreateOrUpdateConfigurationSlot
Updates the configuration of an app.


```js
azure_web_webapps.WebApps_CreateOrUpdateConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "siteConfig": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteConfig **required** [SiteConfigResource](#siteconfigresource)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResource](#siteconfigresource)

### WebApps_ListConfigurationSnapshotInfoSlot
Gets a list of web app configuration snapshots identifiers. Each element of the list contains a timestamp and the ID of the snapshot.


```js
azure_web_webapps.WebApps_ListConfigurationSnapshotInfoSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigurationSnapshotInfoCollection](#siteconfigurationsnapshotinfocollection)

### WebApps_GetConfigurationSnapshotSlot
Gets a snapshot of the configuration of an app at a previous point in time.


```js
azure_web_webapps.WebApps_GetConfigurationSnapshotSlot({
  "resourceGroupName": "",
  "name": "",
  "snapshotId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * snapshotId **required** `string`: The ID of the snapshot to read.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteConfigResource](#siteconfigresource)

### WebApps_RecoverSiteConfigurationSnapshotSlot
Reverts the configuration of an app to a previous snapshot.


```js
azure_web_webapps.WebApps_RecoverSiteConfigurationSnapshotSlot({
  "resourceGroupName": "",
  "name": "",
  "snapshotId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * snapshotId **required** `string`: The ID of the snapshot to read.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetWebSiteContainerLogsSlot
Gets the last lines of docker logs for the given site


```js
azure_web_webapps.WebApps_GetWebSiteContainerLogsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_GetContainerLogsZipSlot
Gets the ZIP archived docker log files for the given site


```js
azure_web_webapps.WebApps_GetContainerLogsZipSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_ListContinuousWebJobsSlot
List continuous web jobs for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListContinuousWebJobsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ContinuousWebJobCollection](#continuouswebjobcollection)

### WebApps_DeleteContinuousWebJobSlot
Delete a continuous web job by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteContinuousWebJobSlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetContinuousWebJobSlot
Gets a continuous web job by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_GetContinuousWebJobSlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ContinuousWebJob](#continuouswebjob)

### WebApps_StartContinuousWebJobSlot
Start a continuous web job for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_StartContinuousWebJobSlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_StopContinuousWebJobSlot
Stop a continuous web job for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_StopContinuousWebJobSlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListDeploymentsSlot
List deployments for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListDeploymentsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DeploymentCollection](#deploymentcollection)

### WebApps_DeleteDeploymentSlot
Delete a deployment by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * id **required** `string`: Deployment ID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetDeploymentSlot
Get a deployment by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_GetDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * id **required** `string`: Deployment ID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API gets a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### WebApps_CreateDeploymentSlot
Create a deployment for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_CreateDeploymentSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "deployment": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * id **required** `string`: ID of an existing deployment.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API creates a deployment for the production slot.
  * deployment **required** [Deployment](#deployment)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### WebApps_ListDeploymentLogSlot
List deployment log for specific deployment for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListDeploymentLogSlot({
  "resourceGroupName": "",
  "name": "",
  "id": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * id **required** `string`: The ID of a specific deployment. This is the value of the name property in the JSON response from "GET /api/sites/{siteName}/deployments".
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Deployment](#deployment)

### WebApps_DiscoverBackupSlot
Discovers an existing app backup that can be restored from a blob in Azure storage. Use this to get information about the databases stored in a backup.


```js
azure_web_webapps.WebApps_DiscoverBackupSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * request **required** [RestoreRequest](#restorerequest)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will perform discovery for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RestoreRequest](#restorerequest)

### WebApps_ListDomainOwnershipIdentifiersSlot
Lists ownership identifiers for domain associated with web app.


```js
azure_web_webapps.WebApps_ListDomainOwnershipIdentifiersSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Collection of identifiers.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A domain specific resource identifier.
      * properties `object`: Identifier resource specific properties
        * id `string`: String representation of the identity.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### WebApps_DeleteDomainOwnershipIdentifierSlot
Deletes a domain ownership identifier for a web app.


```js
azure_web_webapps.WebApps_DeleteDomainOwnershipIdentifierSlot({
  "resourceGroupName": "",
  "name": "",
  "domainOwnershipIdentifierName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * domainOwnershipIdentifierName **required** `string`: Name of domain ownership identifier.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetDomainOwnershipIdentifierSlot
Get domain ownership identifier for web app.


```js
azure_web_webapps.WebApps_GetDomainOwnershipIdentifierSlot({
  "resourceGroupName": "",
  "name": "",
  "domainOwnershipIdentifierName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * domainOwnershipIdentifierName **required** `string`: Name of domain ownership identifier.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A domain specific resource identifier.
  * properties `object`: Identifier resource specific properties
    * id `string`: String representation of the identity.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateDomainOwnershipIdentifierSlot
Creates a domain ownership identifier for web app, or updates an existing ownership identifier.


```js
azure_web_webapps.WebApps_UpdateDomainOwnershipIdentifierSlot({
  "resourceGroupName": "",
  "name": "",
  "domainOwnershipIdentifierName": "",
  "domainOwnershipIdentifier": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * domainOwnershipIdentifierName **required** `string`: Name of domain ownership identifier.
  * domainOwnershipIdentifier **required** `object`: A domain specific resource identifier.
    * properties `object`: Identifier resource specific properties
      * id `string`: String representation of the identity.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A domain specific resource identifier.
  * properties `object`: Identifier resource specific properties
    * id `string`: String representation of the identity.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_CreateOrUpdateDomainOwnershipIdentifierSlot
Creates a domain ownership identifier for web app, or updates an existing ownership identifier.


```js
azure_web_webapps.WebApps_CreateOrUpdateDomainOwnershipIdentifierSlot({
  "resourceGroupName": "",
  "name": "",
  "domainOwnershipIdentifierName": "",
  "domainOwnershipIdentifier": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * domainOwnershipIdentifierName **required** `string`: Name of domain ownership identifier.
  * domainOwnershipIdentifier **required** `object`: A domain specific resource identifier.
    * properties `object`: Identifier resource specific properties
      * id `string`: String representation of the identity.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: A domain specific resource identifier.
  * properties `object`: Identifier resource specific properties
    * id `string`: String representation of the identity.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_GetMSDeployStatusSlot
Get the status of the last MSDeploy operation.


```js
azure_web_webapps.WebApps_GetMSDeployStatusSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployStatus](#msdeploystatus)

### WebApps_CreateMSDeployOperationSlot
Invoke the MSDeploy web app extension.


```js
azure_web_webapps.WebApps_CreateMSDeployOperationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "MSDeploy": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * MSDeploy **required** [MSDeploy](#msdeploy)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployStatus](#msdeploystatus)

### WebApps_GetMSDeployLogSlot
Get the MSDeploy Log for the last MSDeploy operation.


```js
azure_web_webapps.WebApps_GetMSDeployLogSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployLog](#msdeploylog)

### WebApps_ListInstanceFunctionsSlot
List the functions for a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_ListInstanceFunctionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionEnvelopeCollection](#functionenvelopecollection)

### WebApps_GetFunctionsAdminTokenSlot
Fetch a short lived token that can be exchanged for a master key.


```js
azure_web_webapps.WebApps_GetFunctionsAdminTokenSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `string`

### WebApps_DeleteInstanceFunctionSlot
Delete a function for web site, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteInstanceFunctionSlot({
  "resourceGroupName": "",
  "name": "",
  "functionName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * functionName **required** `string`: Function name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetInstanceFunctionSlot
Get function information by its ID for web site, or a deployment slot.


```js
azure_web_webapps.WebApps_GetInstanceFunctionSlot({
  "resourceGroupName": "",
  "name": "",
  "functionName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * functionName **required** `string`: Function name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionEnvelope](#functionenvelope)

### WebApps_CreateInstanceFunctionSlot
Create function for web site, or a deployment slot.


```js
azure_web_webapps.WebApps_CreateInstanceFunctionSlot({
  "resourceGroupName": "",
  "name": "",
  "functionName": "",
  "slot": "",
  "function_envelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * functionName **required** `string`: Function name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * function_envelope **required** [FunctionEnvelope](#functionenvelope)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionEnvelope](#functionenvelope)

### WebApps_ListFunctionSecretsSlot
Get function secrets for a function in a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_ListFunctionSecretsSlot({
  "resourceGroupName": "",
  "name": "",
  "functionName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * functionName **required** `string`: Function name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionSecrets](#functionsecrets)

### WebApps_ListHostNameBindingsSlot
Get hostname bindings for an app or a deployment slot.


```js
azure_web_webapps.WebApps_ListHostNameBindingsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API gets hostname bindings for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBindingCollection](#hostnamebindingcollection)

### WebApps_DeleteHostNameBindingSlot
Deletes a hostname binding for an app.


```js
azure_web_webapps.WebApps_DeleteHostNameBindingSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
  * hostName **required** `string`: Hostname in the hostname binding.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetHostNameBindingSlot
Get the named hostname binding for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetHostNameBindingSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "hostName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
  * hostName **required** `string`: Hostname in the hostname binding.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBinding](#hostnamebinding)

### WebApps_CreateOrUpdateHostNameBindingSlot
Creates a hostname binding for an app.


```js
azure_web_webapps.WebApps_CreateOrUpdateHostNameBindingSlot({
  "resourceGroupName": "",
  "name": "",
  "hostName": "",
  "hostNameBinding": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * hostName **required** `string`: Hostname in the hostname binding.
  * hostNameBinding **required** [HostNameBinding](#hostnamebinding)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will create a binding for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [HostNameBinding](#hostnamebinding)

### WebApps_DeleteHybridConnectionSlot
Removes a Hybrid Connection from this site.


```js
azure_web_webapps.WebApps_DeleteHybridConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetHybridConnectionSlot
Retrieves a specific Service Bus Hybrid Connection used by this Web App.


```js
azure_web_webapps.WebApps_GetHybridConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
  * properties `object`: HybridConnection resource specific properties
    * hostname `string`: The hostname of the endpoint.
    * port `integer`: The port of the endpoint.
    * relayArmUri `string`: The ARM URI to the Service Bus relay.
    * relayName `string`: The name of the Service Bus relay.
    * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
    * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
    * serviceBusNamespace `string`: The name of the Service Bus namespace.
    * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateHybridConnectionSlot
Creates a new Hybrid Connection using a Service Bus relay.


```js
azure_web_webapps.WebApps_UpdateHybridConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * connectionEnvelope **required** `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
    * properties `object`: HybridConnection resource specific properties
      * hostname `string`: The hostname of the endpoint.
      * port `integer`: The port of the endpoint.
      * relayArmUri `string`: The ARM URI to the Service Bus relay.
      * relayName `string`: The name of the Service Bus relay.
      * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
      * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
      * serviceBusNamespace `string`: The name of the Service Bus namespace.
      * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
  * properties `object`: HybridConnection resource specific properties
    * hostname `string`: The hostname of the endpoint.
    * port `integer`: The port of the endpoint.
    * relayArmUri `string`: The ARM URI to the Service Bus relay.
    * relayName `string`: The name of the Service Bus relay.
    * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
    * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
    * serviceBusNamespace `string`: The name of the Service Bus namespace.
    * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_CreateOrUpdateHybridConnectionSlot
Creates a new Hybrid Connection using a Service Bus relay.


```js
azure_web_webapps.WebApps_CreateOrUpdateHybridConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * connectionEnvelope **required** `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
    * properties `object`: HybridConnection resource specific properties
      * hostname `string`: The hostname of the endpoint.
      * port `integer`: The port of the endpoint.
      * relayArmUri `string`: The ARM URI to the Service Bus relay.
      * relayName `string`: The name of the Service Bus relay.
      * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
      * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
      * serviceBusNamespace `string`: The name of the Service Bus namespace.
      * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
  * properties `object`: HybridConnection resource specific properties
    * hostname `string`: The hostname of the endpoint.
    * port `integer`: The port of the endpoint.
    * relayArmUri `string`: The ARM URI to the Service Bus relay.
    * relayName `string`: The name of the Service Bus relay.
    * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
    * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
    * serviceBusNamespace `string`: The name of the Service Bus namespace.
    * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListHybridConnectionKeysSlot
Gets the send key name and value for a Hybrid Connection.


```js
azure_web_webapps.WebApps_ListHybridConnectionKeysSlot({
  "resourceGroupName": "",
  "name": "",
  "namespaceName": "",
  "relayName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * namespaceName **required** `string`: The namespace for this hybrid connection.
  * relayName **required** `string`: The relay name for this hybrid connection.
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.
  * properties `object`: HybridConnectionKey resource specific properties
    * sendKeyName `string`: The name of the send key.
    * sendKeyValue `string`: The value of the send key.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListHybridConnectionsSlot
Retrieves all Service Bus Hybrid Connections used by this Web App.


```js
azure_web_webapps.WebApps_ListHybridConnectionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
  * properties `object`: HybridConnection resource specific properties
    * hostname `string`: The hostname of the endpoint.
    * port `integer`: The port of the endpoint.
    * relayArmUri `string`: The ARM URI to the Service Bus relay.
    * relayName `string`: The name of the Service Bus relay.
    * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
    * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
    * serviceBusNamespace `string`: The name of the Service Bus namespace.
    * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListRelayServiceConnectionsSlot
Gets hybrid connections configured for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListRelayServiceConnectionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get hybrid connections for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### WebApps_DeleteRelayServiceConnectionSlot
Deletes a relay service connection by its name.


```js
azure_web_webapps.WebApps_DeleteRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * entityName **required** `string`: Name of the hybrid connection configuration.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete a hybrid connection for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetRelayServiceConnectionSlot
Gets a hybrid connection configuration by its name.


```js
azure_web_webapps.WebApps_GetRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * entityName **required** `string`: Name of the hybrid connection.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get a hybrid connection for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### WebApps_UpdateRelayServiceConnectionSlot
Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).


```js
azure_web_webapps.WebApps_UpdateRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * entityName **required** `string`: Name of the hybrid connection configuration.
  * connectionEnvelope **required** [RelayServiceConnectionEntity](#relayserviceconnectionentity)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will create or update a hybrid connection for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### WebApps_CreateOrUpdateRelayServiceConnectionSlot
Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).


```js
azure_web_webapps.WebApps_CreateOrUpdateRelayServiceConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "entityName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * entityName **required** `string`: Name of the hybrid connection configuration.
  * connectionEnvelope **required** [RelayServiceConnectionEntity](#relayserviceconnectionentity)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will create or update a hybrid connection for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [RelayServiceConnectionEntity](#relayserviceconnectionentity)

### WebApps_ListInstanceIdentifiersSlot
Gets all scale-out instances of an app.


```js
azure_web_webapps.WebApps_ListInstanceIdentifiersSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API gets the production slot instances.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WebAppInstanceCollection](#webappinstancecollection)

### WebApps_GetInstanceMsDeployStatusSlot
Get the status of the last MSDeploy operation.


```js
azure_web_webapps.WebApps_GetInstanceMsDeployStatusSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * instanceId **required** `string`: ID of web app instance.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployStatus](#msdeploystatus)

### WebApps_CreateInstanceMSDeployOperationSlot
Invoke the MSDeploy web app extension.


```js
azure_web_webapps.WebApps_CreateInstanceMSDeployOperationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "instanceId": "",
  "MSDeploy": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * instanceId **required** `string`: ID of web app instance.
  * MSDeploy **required** [MSDeploy](#msdeploy)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployStatus](#msdeploystatus)

### WebApps_GetInstanceMSDeployLogSlot
Get the MSDeploy Log for the last MSDeploy operation.


```js
azure_web_webapps.WebApps_GetInstanceMSDeployLogSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * instanceId **required** `string`: ID of web app instance.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MSDeployLog](#msdeploylog)

### WebApps_ListInstanceProcessesSlot
Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListInstanceProcessesSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessInfoCollection](#processinfocollection)

### WebApps_DeleteInstanceProcessSlot
Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_DeleteInstanceProcessSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetInstanceProcessSlot
Get process information by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetInstanceProcessSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessInfo](#processinfo)

### WebApps_GetInstanceProcessDumpSlot
Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetInstanceProcessDumpSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_ListInstanceProcessModulesSlot
List module information for a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListInstanceProcessModulesSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessModuleInfoCollection](#processmoduleinfocollection)

### WebApps_GetInstanceProcessModuleSlot
Get process information by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetInstanceProcessModuleSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "baseAddress": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * baseAddress **required** `string`: Module base address.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessModuleInfo](#processmoduleinfo)

### WebApps_ListInstanceProcessThreadsSlot
List the threads in a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListInstanceProcessThreadsSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessThreadInfoCollection](#processthreadinfocollection)

### WebApps_GetInstanceProcessThreadSlot
Get thread information by Thread ID for a specific process, in a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetInstanceProcessThreadSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "threadId": "",
  "slot": "",
  "instanceId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * threadId **required** `string`: TID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * instanceId **required** `string`: ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessThreadInfo](#processthreadinfo)

### WebApps_IsCloneableSlot
Shows whether an app can be cloned to another resource group or subscription.


```js
azure_web_webapps.WebApps_IsCloneableSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. By default, this API returns information on the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteCloneability](#sitecloneability)

### WebApps_ListSyncFunctionTriggersSlot
This is to allow calling via powershell and ARM template.


```js
azure_web_webapps.WebApps_ListSyncFunctionTriggersSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will restore a backup of the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [FunctionSecrets](#functionsecrets)

### WebApps_ListMetricDefinitionsSlot
Gets all metric definitions of an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListMetricDefinitionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get metric definitions of the production slot.
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

### WebApps_ListMetricsSlot
Gets performance metrics of an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListMetricsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get metrics of the production slot.
  * details `boolean`: Specify "true" to include metric details in the response. It is "false" by default.
  * $filter `string`: Return only metrics specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
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

### WebApps_GetMigrateMySqlStatusSlot
Returns the status of MySql in app migration, if one is active, and whether or not MySql in app is enabled


```js
azure_web_webapps.WebApps_GetMigrateMySqlStatusSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of the deployment slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [MigrateMySqlStatus](#migratemysqlstatus)

### WebApps_DeleteSwiftVirtualNetworkSlot
Deletes a Swift Virtual Network connection from an app (or deployment slot).


```js
azure_web_webapps.WebApps_DeleteSwiftVirtualNetworkSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the connection for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetSwiftVirtualNetworkConnectionSlot
Gets a Swift Virtual Network connection.


```js
azure_web_webapps.WebApps_GetSwiftVirtualNetworkConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get a gateway for the production slot's Virtual Network.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SwiftVirtualNetwork](#swiftvirtualnetwork)

### WebApps_UpdateSwiftVirtualNetworkConnectionSlot
Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
in use by another App Service Plan other than the one this App is in.


```js
azure_web_webapps.WebApps_UpdateSwiftVirtualNetworkConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * connectionEnvelope **required** [SwiftVirtualNetwork](#swiftvirtualnetwork)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SwiftVirtualNetwork](#swiftvirtualnetwork)

### WebApps_CreateOrUpdateSwiftVirtualNetworkConnectionSlot
Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
in use by another App Service Plan other than the one this App is in.


```js
azure_web_webapps.WebApps_CreateOrUpdateSwiftVirtualNetworkConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * connectionEnvelope **required** [SwiftVirtualNetwork](#swiftvirtualnetwork)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SwiftVirtualNetwork](#swiftvirtualnetwork)

### WebApps_ListNetworkFeaturesSlot
Gets all network features used by the app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListNetworkFeaturesSlot({
  "resourceGroupName": "",
  "name": "",
  "view": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * view **required** `string`: The type of view. This can either be "summary" or "detailed".
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get network features for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [NetworkFeatures](#networkfeatures)

### WebApps_GetNetworkTraceOperationSlot
Gets a named operation for a network trace capturing (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetNetworkTraceOperationSlot({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * operationId **required** `string`: GUID of the operation.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get an operation for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_StartWebSiteNetworkTraceSlot
Start capturing network packets for the site (To be deprecated).


```js
azure_web_webapps.WebApps_StartWebSiteNetworkTraceSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * durationInSeconds `integer`: The duration to keep capturing in seconds.
  * slot **required** `string`: The name of the slot for this web app.
  * maxFrameLength `integer`: The maximum frame length in bytes (Optional).
  * sasUrl `string`: The Blob URL to store capture file.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `string`

### WebApps_StartWebSiteNetworkTraceOperationSlot
Start capturing network packets for the site.


```js
azure_web_webapps.WebApps_StartWebSiteNetworkTraceOperationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * durationInSeconds `integer`: The duration to keep capturing in seconds.
  * slot **required** `string`: The name of the slot for this web app.
  * maxFrameLength `integer`: The maximum frame length in bytes (Optional).
  * sasUrl `string`: The Blob URL to store capture file.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_StopWebSiteNetworkTraceSlot
Stop ongoing capturing network packets for the site.


```js
azure_web_webapps.WebApps_StopWebSiteNetworkTraceSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetNetworkTracesSlot
Gets a named operation for a network trace capturing (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetNetworkTracesSlot({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * operationId **required** `string`: GUID of the operation.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get an operation for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_GetNetworkTraceOperationSlotV2
Gets a named operation for a network trace capturing (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetNetworkTraceOperationSlotV2({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * operationId **required** `string`: GUID of the operation.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get an operation for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_GetNetworkTracesSlotV2
Gets a named operation for a network trace capturing (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetNetworkTracesSlotV2({
  "resourceGroupName": "",
  "name": "",
  "operationId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * operationId **required** `string`: GUID of the operation.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get an operation for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_GenerateNewSitePublishingPasswordSlot
Generates a new publishing password for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GenerateNewSitePublishingPasswordSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API generate a new publishing password for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListPerfMonCountersSlot
Gets perfmon counters for web app.


```js
azure_web_webapps.WebApps_ListPerfMonCountersSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * $filter `string`: Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PerfMonCounterCollection](#perfmoncountercollection)

### WebApps_GetSitePhpErrorLogFlagSlot
Gets web app's event logs.


```js
azure_web_webapps.WebApps_GetSitePhpErrorLogFlagSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SitePhpErrorLogFlag](#sitephperrorlogflag)

### WebApps_ListPremierAddOnsSlot
Gets the premier add-ons of an app.


```js
azure_web_webapps.WebApps_ListPremierAddOnsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the premier add-ons for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PremierAddOn](#premieraddon)

### WebApps_DeletePremierAddOnSlot
Delete a premier add-on from an app.


```js
azure_web_webapps.WebApps_DeletePremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * premierAddOnName **required** `string`: Add-on name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the named add-on for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetPremierAddOnSlot
Gets a named add-on of an app.


```js
azure_web_webapps.WebApps_GetPremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * premierAddOnName **required** `string`: Add-on name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the named add-on for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PremierAddOn](#premieraddon)

### WebApps_UpdatePremierAddOnSlot
Updates a named add-on of an app.


```js
azure_web_webapps.WebApps_UpdatePremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "premierAddOn": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * premierAddOnName **required** `string`: Add-on name.
  * premierAddOn **required** [PremierAddOnPatchResource](#premieraddonpatchresource)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the named add-on for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PremierAddOn](#premieraddon)

### WebApps_AddPremierAddOnSlot
Updates a named add-on of an app.


```js
azure_web_webapps.WebApps_AddPremierAddOnSlot({
  "resourceGroupName": "",
  "name": "",
  "premierAddOnName": "",
  "premierAddOn": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * premierAddOnName **required** `string`: Add-on name.
  * premierAddOn **required** [PremierAddOn](#premieraddon)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the named add-on for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PremierAddOn](#premieraddon)

### WebApps_GetPrivateAccessSlot
Gets data around private site access enablement and authorized Virtual Networks that can access the site.


```js
azure_web_webapps.WebApps_GetPrivateAccessSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PrivateAccess](#privateaccess)

### WebApps_PutPrivateAccessVnetSlot
Sets data around private site access enablement and authorized Virtual Networks that can access the site.


```js
azure_web_webapps.WebApps_PutPrivateAccessVnetSlot({
  "resourceGroupName": "",
  "name": "",
  "access": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * access **required** [PrivateAccess](#privateaccess)
  * slot **required** `string`: The name of the slot for the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PrivateAccess](#privateaccess)

### WebApps_ListProcessesSlot
Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListProcessesSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessInfoCollection](#processinfocollection)

### WebApps_DeleteProcessSlot
Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_DeleteProcessSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetProcessSlot
Get process information by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetProcessSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessInfo](#processinfo)

### WebApps_GetProcessDumpSlot
Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetProcessDumpSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_ListProcessModulesSlot
List module information for a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListProcessModulesSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessModuleInfoCollection](#processmoduleinfocollection)

### WebApps_GetProcessModuleSlot
Get process information by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetProcessModuleSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "baseAddress": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * baseAddress **required** `string`: Module base address.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessModuleInfo](#processmoduleinfo)

### WebApps_ListProcessThreadsSlot
List the threads in a process by its ID for a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_ListProcessThreadsSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessThreadInfoCollection](#processthreadinfocollection)

### WebApps_GetProcessThreadSlot
Get thread information by Thread ID for a specific process, in a specific scaled-out instance in a web site.


```js
azure_web_webapps.WebApps_GetProcessThreadSlot({
  "resourceGroupName": "",
  "name": "",
  "processId": "",
  "threadId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * processId **required** `string`: PID.
  * threadId **required** `string`: TID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [ProcessThreadInfo](#processthreadinfo)

### WebApps_ListPublicCertificatesSlot
Get public certificates for an app or a deployment slot.


```js
azure_web_webapps.WebApps_ListPublicCertificatesSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API gets hostname bindings for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PublicCertificateCollection](#publiccertificatecollection)

### WebApps_DeletePublicCertificateSlot
Deletes a hostname binding for an app.


```js
azure_web_webapps.WebApps_DeletePublicCertificateSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "publicCertificateName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
  * publicCertificateName **required** `string`: Public certificate name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetPublicCertificateSlot
Get the named public certificate for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_GetPublicCertificateSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "publicCertificateName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
  * publicCertificateName **required** `string`: Public certificate name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PublicCertificate](#publiccertificate)

### WebApps_CreateOrUpdatePublicCertificateSlot
Creates a hostname binding for an app.


```js
azure_web_webapps.WebApps_CreateOrUpdatePublicCertificateSlot({
  "resourceGroupName": "",
  "name": "",
  "publicCertificateName": "",
  "publicCertificate": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * publicCertificateName **required** `string`: Public certificate name.
  * publicCertificate **required** [PublicCertificate](#publiccertificate)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will create a binding for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [PublicCertificate](#publiccertificate)

### WebApps_ListPublishingProfileXmlWithSecretsSlot
Gets the publishing profile for an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListPublishingProfileXmlWithSecretsSlot({
  "resourceGroupName": "",
  "name": "",
  "publishingProfileOptions": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * publishingProfileOptions **required** [CsmPublishingProfileOptions](#csmpublishingprofileoptions)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the publishing profile for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `file`

### WebApps_ResetSlotConfigurationSlot
Resets the configuration settings of the current slot if they were previously modified by calling the API with POST.


```js
azure_web_webapps.WebApps_ResetSlotConfigurationSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API resets configuration settings for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_RestartSlot
Restarts an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_RestartSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will restart the production slot.
  * softRestart `boolean`: Specify true to apply the configuration settings and restarts the app only if necessary. By default, the API always restarts and reprovisions the app.
  * synchronous `boolean`: Specify true to block until the app is restarted. By default, it is set to false, and the API responds immediately (asynchronous).
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_RestoreFromBackupBlobSlot
Restores an app from a backup blob in Azure Storage.


```js
azure_web_webapps.WebApps_RestoreFromBackupBlobSlot({
  "resourceGroupName": "",
  "name": "",
  "request": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * request **required** [RestoreRequest](#restorerequest)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will restore a backup of the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_RestoreFromDeletedAppSlot
Restores a deleted web app to this web app.


```js
azure_web_webapps.WebApps_RestoreFromDeletedAppSlot({
  "resourceGroupName": "",
  "name": "",
  "restoreRequest": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * restoreRequest **required** [DeletedAppRestoreRequest](#deletedapprestorerequest)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_RestoreSnapshotSlot
Restores a web app from a snapshot.


```js
azure_web_webapps.WebApps_RestoreSnapshotSlot({
  "resourceGroupName": "",
  "name": "",
  "restoreRequest": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * restoreRequest **required** [SnapshotRestoreRequest](#snapshotrestorerequest)
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListSiteExtensionsSlot
Get list of siteextensions for a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_ListSiteExtensionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteExtensionInfoCollection](#siteextensioninfocollection)

### WebApps_DeleteSiteExtensionSlot
Remove a site extension from a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteSiteExtensionSlot({
  "resourceGroupName": "",
  "name": "",
  "siteExtensionId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * siteExtensionId **required** `string`: Site extension name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetSiteExtensionSlot
Get site extension information by its ID for a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_GetSiteExtensionSlot({
  "resourceGroupName": "",
  "name": "",
  "siteExtensionId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * siteExtensionId **required** `string`: Site extension name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteExtensionInfo](#siteextensioninfo)

### WebApps_InstallSiteExtensionSlot
Install site extension on a web site, or a deployment slot.


```js
azure_web_webapps.WebApps_InstallSiteExtensionSlot({
  "resourceGroupName": "",
  "name": "",
  "siteExtensionId": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * siteExtensionId **required** `string`: Site extension name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteExtensionInfo](#siteextensioninfo)

### WebApps_ListSlotDifferencesSlot
Get the difference in configuration settings between two web app slots.


```js
azure_web_webapps.WebApps_ListSlotDifferencesSlot({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {
    "targetSlot": "",
    "preserveVnet": true
  },
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * slot **required** `string`: Name of the source slot. If a slot is not specified, the production slot is used as the source slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SlotDifferenceCollection](#slotdifferencecollection)

### WebApps_SwapSlotSlot
Swaps two deployment slots of an app.


```js
azure_web_webapps.WebApps_SwapSlotSlot({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {
    "targetSlot": "",
    "preserveVnet": true
  },
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * slot **required** `string`: Name of the source slot. If a slot is not specified, the production slot is used as the source slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListSnapshotsSlot
Returns all Snapshots to the user.


```js
azure_web_webapps.WebApps_ListSnapshotsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Website Name.
  * slot **required** `string`: Website Slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SnapshotCollection](#snapshotcollection)

### WebApps_ListSnapshotsFromDRSecondarySlot
Returns all Snapshots to the user from DRSecondary endpoint.


```js
azure_web_webapps.WebApps_ListSnapshotsFromDRSecondarySlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Website Name.
  * slot **required** `string`: Website Slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SnapshotCollection](#snapshotcollection)

### WebApps_DeleteSourceControlSlot
Deletes the source control configuration of an app.


```js
azure_web_webapps.WebApps_DeleteSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the source control configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetSourceControlSlot
Gets the source control configuration of an app.


```js
azure_web_webapps.WebApps_GetSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the source control configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### WebApps_UpdateSourceControlSlot
Updates the source control configuration of an app.


```js
azure_web_webapps.WebApps_UpdateSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteSourceControl **required** [SiteSourceControl](#sitesourcecontrol)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the source control configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### WebApps_CreateOrUpdateSourceControlSlot
Updates the source control configuration of an app.


```js
azure_web_webapps.WebApps_CreateOrUpdateSourceControlSlot({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteSourceControl **required** [SiteSourceControl](#sitesourcecontrol)
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will update the source control configuration for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### WebApps_StartSlot
Starts an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_StartSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will start the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_StartNetworkTraceSlot
Start capturing network packets for the site.


```js
azure_web_webapps.WebApps_StartNetworkTraceSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * durationInSeconds `integer`: The duration to keep capturing in seconds.
  * slot **required** `string`: The name of the slot for this web app.
  * maxFrameLength `integer`: The maximum frame length in bytes (Optional).
  * sasUrl `string`: The Blob URL to store capture file.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_StopSlot
Stops an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_StopSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will stop the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_StopNetworkTraceSlot
Stop ongoing capturing network packets for the site.


```js
azure_web_webapps.WebApps_StopNetworkTraceSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * slot **required** `string`: The name of the slot for this web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_SyncRepositorySlot
Sync web app repository.


```js
azure_web_webapps.WebApps_SyncRepositorySlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * slot **required** `string`: Name of web app slot. If not specified then will default to production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_SyncFunctionTriggersSlot
Syncs function trigger metadata to the scale controller


```js
azure_web_webapps.WebApps_SyncFunctionTriggersSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will restore a backup of the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListTriggeredWebJobsSlot
List triggered web jobs for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListTriggeredWebJobsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TriggeredWebJobCollection](#triggeredwebjobcollection)

### WebApps_DeleteTriggeredWebJobSlot
Delete a triggered web job by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteTriggeredWebJobSlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetTriggeredWebJobSlot
Gets a triggered web job by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_GetTriggeredWebJobSlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TriggeredWebJob](#triggeredwebjob)

### WebApps_ListTriggeredWebJobHistorySlot
List a triggered web job's history for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListTriggeredWebJobHistorySlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TriggeredJobHistoryCollection](#triggeredjobhistorycollection)

### WebApps_GetTriggeredWebJobHistorySlot
Gets a triggered web job's history by its ID for an app, , or a deployment slot.


```js
azure_web_webapps.WebApps_GetTriggeredWebJobHistorySlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "id": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * id **required** `string`: History ID.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TriggeredJobHistory](#triggeredjobhistory)

### WebApps_RunTriggeredWebJobSlot
Run a triggered web job for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_RunTriggeredWebJobSlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListUsagesSlot
Gets the quota usage information of an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListUsagesSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get quota information of the production slot.
  * $filter `string`: Return only information specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
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

### WebApps_ListVnetConnectionsSlot
Gets the virtual networks the app (or deployment slot) is connected to.


```js
azure_web_webapps.WebApps_ListVnetConnectionsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get virtual network connections for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items `object`: Virtual Network information contract.
    * properties `object`: VnetInfo resource specific properties
      * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
      * certThumbprint `string`: The client certificate thumbprint.
      * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
      * isSwift `boolean`: Flag that is used to denote if this is VNET injection
      * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
      * routes `array`: The routes that this Virtual Network connection uses.
        * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
          * properties `object`: VnetRoute resource specific properties
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
      * vnetResourceId `string`: The Virtual Network's resource ID.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.

### WebApps_DeleteVnetConnectionSlot
Deletes a connection from an app (or deployment slot to a named virtual network.


```js
azure_web_webapps.WebApps_DeleteVnetConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the virtual network.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will delete the connection for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetVnetConnectionSlot
Gets a virtual network the app (or deployment slot) is connected to by name.


```js
azure_web_webapps.WebApps_GetVnetConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the virtual network.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get the named virtual network for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Virtual Network information contract.
  * properties `object`: VnetInfo resource specific properties
    * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
    * certThumbprint `string`: The client certificate thumbprint.
    * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
    * isSwift `boolean`: Flag that is used to denote if this is VNET injection
    * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
    * routes `array`: The routes that this Virtual Network connection uses.
      * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
        * properties `object`: VnetRoute resource specific properties
          * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
          * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
          * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
    * vnetResourceId `string`: The Virtual Network's resource ID.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateVnetConnectionSlot
Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).


```js
azure_web_webapps.WebApps_UpdateVnetConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of an existing Virtual Network.
  * connectionEnvelope **required** `object`: Virtual Network information contract.
    * properties `object`: VnetInfo resource specific properties
      * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
      * certThumbprint `string`: The client certificate thumbprint.
      * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
      * isSwift `boolean`: Flag that is used to denote if this is VNET injection
      * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
      * routes `array`: The routes that this Virtual Network connection uses.
        * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
          * properties `object`: VnetRoute resource specific properties
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
      * vnetResourceId `string`: The Virtual Network's resource ID.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Virtual Network information contract.
  * properties `object`: VnetInfo resource specific properties
    * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
    * certThumbprint `string`: The client certificate thumbprint.
    * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
    * isSwift `boolean`: Flag that is used to denote if this is VNET injection
    * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
    * routes `array`: The routes that this Virtual Network connection uses.
      * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
        * properties `object`: VnetRoute resource specific properties
          * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
          * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
          * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
    * vnetResourceId `string`: The Virtual Network's resource ID.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_CreateOrUpdateVnetConnectionSlot
Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).


```js
azure_web_webapps.WebApps_CreateOrUpdateVnetConnectionSlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of an existing Virtual Network.
  * connectionEnvelope **required** `object`: Virtual Network information contract.
    * properties `object`: VnetInfo resource specific properties
      * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
      * certThumbprint `string`: The client certificate thumbprint.
      * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
      * isSwift `boolean`: Flag that is used to denote if this is VNET injection
      * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
      * routes `array`: The routes that this Virtual Network connection uses.
        * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
          * properties `object`: VnetRoute resource specific properties
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
      * vnetResourceId `string`: The Virtual Network's resource ID.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Virtual Network information contract.
  * properties `object`: VnetInfo resource specific properties
    * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
    * certThumbprint `string`: The client certificate thumbprint.
    * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
    * isSwift `boolean`: Flag that is used to denote if this is VNET injection
    * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
    * routes `array`: The routes that this Virtual Network connection uses.
      * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
        * properties `object`: VnetRoute resource specific properties
          * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
          * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
          * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
    * vnetResourceId `string`: The Virtual Network's resource ID.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_GetVnetConnectionGatewaySlot
Gets an app's Virtual Network gateway.


```js
azure_web_webapps.WebApps_GetVnetConnectionGatewaySlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the Virtual Network.
  * gatewayName **required** `string`: Name of the gateway. Currently, the only supported string is "primary".
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will get a gateway for the production slot's Virtual Network.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
  * properties `object`: VnetGateway resource specific properties
    * vnetName `string`: The Virtual Network name.
    * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateVnetConnectionGatewaySlot
Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).


```js
azure_web_webapps.WebApps_UpdateVnetConnectionGatewaySlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the Virtual Network.
  * gatewayName **required** `string`: Name of the gateway. Currently, the only supported string is "primary".
  * connectionEnvelope **required** `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
    * properties `object`: VnetGateway resource specific properties
      * vnetName `string`: The Virtual Network name.
      * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will add or update a gateway for the production slot's Virtual Network.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
  * properties `object`: VnetGateway resource specific properties
    * vnetName `string`: The Virtual Network name.
    * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_CreateOrUpdateVnetConnectionGatewaySlot
Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).


```js
azure_web_webapps.WebApps_CreateOrUpdateVnetConnectionGatewaySlot({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the Virtual Network.
  * gatewayName **required** `string`: Name of the gateway. Currently, the only supported string is "primary".
  * connectionEnvelope **required** `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
    * properties `object`: VnetGateway resource specific properties
      * vnetName `string`: The Virtual Network name.
      * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API will add or update a gateway for the production slot's Virtual Network.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
  * properties `object`: VnetGateway resource specific properties
    * vnetName `string`: The Virtual Network name.
    * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListWebJobsSlot
List webjobs for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListWebJobsSlot({
  "resourceGroupName": "",
  "name": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WebJobCollection](#webjobcollection)

### WebApps_GetWebJobSlot
Get webjob information for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_GetWebJobSlot({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of the web job.
  * slot **required** `string`: Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WebJob](#webjob)

### WebApps_ListSlotDifferencesFromProduction
Get the difference in configuration settings between two web app slots.


```js
azure_web_webapps.WebApps_ListSlotDifferencesFromProduction({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {
    "targetSlot": "",
    "preserveVnet": true
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SlotDifferenceCollection](#slotdifferencecollection)

### WebApps_SwapSlotWithProduction
Swaps two deployment slots of an app.


```js
azure_web_webapps.WebApps_SwapSlotWithProduction({
  "resourceGroupName": "",
  "name": "",
  "slotSwapEntity": {
    "targetSlot": "",
    "preserveVnet": true
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * slotSwapEntity **required** [CsmSlotEntity](#csmslotentity)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListSnapshots
Returns all Snapshots to the user.


```js
azure_web_webapps.WebApps_ListSnapshots({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Website Name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SnapshotCollection](#snapshotcollection)

### WebApps_ListSnapshotsFromDRSecondary
Returns all Snapshots to the user from DRSecondary endpoint.


```js
azure_web_webapps.WebApps_ListSnapshotsFromDRSecondary({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Website Name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SnapshotCollection](#snapshotcollection)

### WebApps_DeleteSourceControl
Deletes the source control configuration of an app.


```js
azure_web_webapps.WebApps_DeleteSourceControl({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetSourceControl
Gets the source control configuration of an app.


```js
azure_web_webapps.WebApps_GetSourceControl({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### WebApps_UpdateSourceControl
Updates the source control configuration of an app.


```js
azure_web_webapps.WebApps_UpdateSourceControl({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteSourceControl **required** [SiteSourceControl](#sitesourcecontrol)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### WebApps_CreateOrUpdateSourceControl
Updates the source control configuration of an app.


```js
azure_web_webapps.WebApps_CreateOrUpdateSourceControl({
  "resourceGroupName": "",
  "name": "",
  "siteSourceControl": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * siteSourceControl **required** [SiteSourceControl](#sitesourcecontrol)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [SiteSourceControl](#sitesourcecontrol)

### WebApps_Start
Starts an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_Start({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_StartNetworkTrace
Start capturing network packets for the site.


```js
azure_web_webapps.WebApps_StartNetworkTrace({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * durationInSeconds `integer`: The duration to keep capturing in seconds.
  * maxFrameLength `integer`: The maximum frame length in bytes (Optional).
  * sasUrl `string`: The Blob URL to store capture file.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items [NetworkTrace](#networktrace)

### WebApps_Stop
Stops an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_Stop({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_StopNetworkTrace
Stop ongoing capturing network packets for the site.


```js
azure_web_webapps.WebApps_StopNetworkTrace({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: The name of the web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_SyncRepository
Sync web app repository.


```js
azure_web_webapps.WebApps_SyncRepository({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of web app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_SyncFunctionTriggers
Syncs function trigger metadata to the scale controller


```js
azure_web_webapps.WebApps_SyncFunctionTriggers({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListTriggeredWebJobs
List triggered web jobs for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListTriggeredWebJobs({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TriggeredWebJobCollection](#triggeredwebjobcollection)

### WebApps_DeleteTriggeredWebJob
Delete a triggered web job by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_DeleteTriggeredWebJob({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetTriggeredWebJob
Gets a triggered web job by its ID for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_GetTriggeredWebJob({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TriggeredWebJob](#triggeredwebjob)

### WebApps_ListTriggeredWebJobHistory
List a triggered web job's history for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListTriggeredWebJobHistory({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TriggeredJobHistoryCollection](#triggeredjobhistorycollection)

### WebApps_GetTriggeredWebJobHistory
Gets a triggered web job's history by its ID for an app, , or a deployment slot.


```js
azure_web_webapps.WebApps_GetTriggeredWebJobHistory({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "id": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * id **required** `string`: History ID.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [TriggeredJobHistory](#triggeredjobhistory)

### WebApps_RunTriggeredWebJob
Run a triggered web job for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_RunTriggeredWebJob({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of Web Job.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_ListUsages
Gets the quota usage information of an app (or deployment slot, if specified).


```js
azure_web_webapps.WebApps_ListUsages({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * $filter `string`: Return only information specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
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

### WebApps_ListVnetConnections
Gets the virtual networks the app (or deployment slot) is connected to.


```js
azure_web_webapps.WebApps_ListVnetConnections({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `array`
  * items `object`: Virtual Network information contract.
    * properties `object`: VnetInfo resource specific properties
      * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
      * certThumbprint `string`: The client certificate thumbprint.
      * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
      * isSwift `boolean`: Flag that is used to denote if this is VNET injection
      * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
      * routes `array`: The routes that this Virtual Network connection uses.
        * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
          * properties `object`: VnetRoute resource specific properties
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
      * vnetResourceId `string`: The Virtual Network's resource ID.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.

### WebApps_DeleteVnetConnection
Deletes a connection from an app (or deployment slot to a named virtual network.


```js
azure_web_webapps.WebApps_DeleteVnetConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the virtual network.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### WebApps_GetVnetConnection
Gets a virtual network the app (or deployment slot) is connected to by name.


```js
azure_web_webapps.WebApps_GetVnetConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the virtual network.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Virtual Network information contract.
  * properties `object`: VnetInfo resource specific properties
    * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
    * certThumbprint `string`: The client certificate thumbprint.
    * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
    * isSwift `boolean`: Flag that is used to denote if this is VNET injection
    * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
    * routes `array`: The routes that this Virtual Network connection uses.
      * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
        * properties `object`: VnetRoute resource specific properties
          * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
          * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
          * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
    * vnetResourceId `string`: The Virtual Network's resource ID.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateVnetConnection
Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).


```js
azure_web_webapps.WebApps_UpdateVnetConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of an existing Virtual Network.
  * connectionEnvelope **required** `object`: Virtual Network information contract.
    * properties `object`: VnetInfo resource specific properties
      * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
      * certThumbprint `string`: The client certificate thumbprint.
      * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
      * isSwift `boolean`: Flag that is used to denote if this is VNET injection
      * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
      * routes `array`: The routes that this Virtual Network connection uses.
        * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
          * properties `object`: VnetRoute resource specific properties
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
      * vnetResourceId `string`: The Virtual Network's resource ID.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Virtual Network information contract.
  * properties `object`: VnetInfo resource specific properties
    * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
    * certThumbprint `string`: The client certificate thumbprint.
    * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
    * isSwift `boolean`: Flag that is used to denote if this is VNET injection
    * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
    * routes `array`: The routes that this Virtual Network connection uses.
      * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
        * properties `object`: VnetRoute resource specific properties
          * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
          * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
          * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
    * vnetResourceId `string`: The Virtual Network's resource ID.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_CreateOrUpdateVnetConnection
Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).


```js
azure_web_webapps.WebApps_CreateOrUpdateVnetConnection({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of an existing Virtual Network.
  * connectionEnvelope **required** `object`: Virtual Network information contract.
    * properties `object`: VnetInfo resource specific properties
      * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
      * certThumbprint `string`: The client certificate thumbprint.
      * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
      * isSwift `boolean`: Flag that is used to denote if this is VNET injection
      * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
      * routes `array`: The routes that this Virtual Network connection uses.
        * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
          * properties `object`: VnetRoute resource specific properties
          * id `string`: Resource Id.
          * kind `string`: Kind of resource.
          * name `string`: Resource Name.
          * type `string`: Resource type.
      * vnetResourceId `string`: The Virtual Network's resource ID.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: Virtual Network information contract.
  * properties `object`: VnetInfo resource specific properties
    * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
    * certThumbprint `string`: The client certificate thumbprint.
    * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
    * isSwift `boolean`: Flag that is used to denote if this is VNET injection
    * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
    * routes `array`: The routes that this Virtual Network connection uses.
      * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
        * properties `object`: VnetRoute resource specific properties
          * endAddress `string`: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
          * routeType `string` (values: DEFAULT, INHERITED, STATIC): The type of route this is:
          * startAddress `string`: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
    * vnetResourceId `string`: The Virtual Network's resource ID.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_GetVnetConnectionGateway
Gets an app's Virtual Network gateway.


```js
azure_web_webapps.WebApps_GetVnetConnectionGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the Virtual Network.
  * gatewayName **required** `string`: Name of the gateway. Currently, the only supported string is "primary".
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
  * properties `object`: VnetGateway resource specific properties
    * vnetName `string`: The Virtual Network name.
    * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_UpdateVnetConnectionGateway
Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).


```js
azure_web_webapps.WebApps_UpdateVnetConnectionGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the Virtual Network.
  * gatewayName **required** `string`: Name of the gateway. Currently, the only supported string is "primary".
  * connectionEnvelope **required** `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
    * properties `object`: VnetGateway resource specific properties
      * vnetName `string`: The Virtual Network name.
      * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
  * properties `object`: VnetGateway resource specific properties
    * vnetName `string`: The Virtual Network name.
    * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_CreateOrUpdateVnetConnectionGateway
Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).


```js
azure_web_webapps.WebApps_CreateOrUpdateVnetConnectionGateway({
  "resourceGroupName": "",
  "name": "",
  "vnetName": "",
  "gatewayName": "",
  "connectionEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the app.
  * vnetName **required** `string`: Name of the Virtual Network.
  * gatewayName **required** `string`: Name of the gateway. Currently, the only supported string is "primary".
  * connectionEnvelope **required** `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
    * properties `object`: VnetGateway resource specific properties
      * vnetName `string`: The Virtual Network name.
      * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
    * id `string`: Resource Id.
    * kind `string`: Kind of resource.
    * name `string`: Resource Name.
    * type `string`: Resource type.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output `object`: The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.
  * properties `object`: VnetGateway resource specific properties
    * vnetName `string`: The Virtual Network name.
    * vpnPackageUri **required** `string`: The URI where the VPN package can be downloaded.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebApps_ListWebJobs
List webjobs for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_ListWebJobs({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WebJobCollection](#webjobcollection)

### WebApps_GetWebJob
Get webjob information for an app, or a deployment slot.


```js
azure_web_webapps.WebApps_GetWebJob({
  "resourceGroupName": "",
  "name": "",
  "webJobName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site name.
  * webJobName **required** `string`: Name of the web job.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [WebJob](#webjob)



## Definitions

### ApplicationLogsConfig
* ApplicationLogsConfig `object`: Application logs configuration.
  * azureBlobStorage [AzureBlobStorageApplicationLogsConfig](#azureblobstorageapplicationlogsconfig)
  * azureTableStorage [AzureTableStorageApplicationLogsConfig](#azuretablestorageapplicationlogsconfig)
  * fileSystem [FileSystemApplicationLogsConfig](#filesystemapplicationlogsconfig)

### AzureBlobStorageApplicationLogsConfig
* AzureBlobStorageApplicationLogsConfig `object`: Application logs azure blob storage configuration.
  * level `string` (values: Off, Verbose, Information, Warning, Error): Log level.
  * retentionInDays `integer`: Retention in days.
  * sasUrl `string`: SAS url to a azure blob container with read/write/list/delete permissions.

### AzureBlobStorageHttpLogsConfig
* AzureBlobStorageHttpLogsConfig `object`: Http logs to azure blob storage configuration.
  * enabled `boolean`: True if configuration is enabled, false if it is disabled and null if configuration is not set.
  * retentionInDays `integer`: Retention in days.
  * sasUrl `string`: SAS url to a azure blob container with read/write/list/delete permissions.

### AzureStoragePropertyDictionaryResource
* AzureStoragePropertyDictionaryResource `object`: AzureStorageInfo dictionary resource.
  * properties `object`: Azure storage accounts.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### AzureTableStorageApplicationLogsConfig
* AzureTableStorageApplicationLogsConfig `object`: Application logs to Azure table storage configuration.
  * level `string` (values: Off, Verbose, Information, Warning, Error): Log level.
  * sasUrl **required** `string`: SAS URL to an Azure table with add/query/delete permissions.

### BackupItem
* BackupItem `object`: Backup description.
  * properties `object`: BackupItem resource specific properties
    * blobName `string`: Name of the blob which contains data for this backup.
    * correlationId `string`: Unique correlation identifier. Please use this along with the timestamp while communicating with Azure support.
    * created `string`: Timestamp of the backup creation.
    * databases `array`: List of databases included in the backup.
      * items [DatabaseBackupSetting](#databasebackupsetting)
    * finishedTimeStamp `string`: Timestamp when this backup finished.
    * id `integer`: Id of the backup.
    * lastRestoreTimeStamp `string`: Timestamp of a last restore operation which used this backup.
    * log `string`: Details regarding this backup. Might contain an error message.
    * name `string`: Name of this backup.
    * scheduled `boolean`: True if this backup has been created due to a schedule being triggered.
    * sizeInBytes `integer`: Size of the backup in bytes.
    * status `string` (values: InProgress, Failed, Succeeded, TimedOut, Created, Skipped, PartiallySucceeded, DeleteInProgress, DeleteFailed, Deleted): Backup status.
    * storageAccountUrl `string`: SAS URL for the storage account container which contains this backup.
    * websiteSizeInBytes `integer`: Size of the original web app which has been backed up.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### BackupItemCollection
* BackupItemCollection `object`: Collection of backup items.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [BackupItem](#backupitem)

### BackupRequest
* BackupRequest `object`: Description of a backup which will be performed.
  * properties `object`: BackupRequest resource specific properties
    * backupName `string`: Name of the backup.
    * backupSchedule [BackupSchedule](#backupschedule)
    * databases `array`: Databases included in the backup.
      * items [DatabaseBackupSetting](#databasebackupsetting)
    * enabled `boolean`: True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
    * storageAccountUrl **required** `string`: SAS URL to the container.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### BackupSchedule
* BackupSchedule `object`: Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.
  * frequencyInterval **required** `integer`: How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
  * frequencyUnit **required** `string` (values: Day, Hour): The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
  * keepAtLeastOneBackup **required** `boolean`: True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
  * lastExecutionTime `string`: Last time when this schedule was triggered.
  * retentionPeriodInDays **required** `integer`: After how many days backups should be deleted.
  * startTime `string`: When the schedule should start working.

### ConnStringValueTypePair
* ConnStringValueTypePair `object`: Database connection string value to type pair.
  * type **required** `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
  * value **required** `string`: Value of pair.

### ConnectionStringDictionary
* ConnectionStringDictionary `object`: String dictionary resource.
  * properties `object`: Connection strings.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### ContinuousWebJob
* ContinuousWebJob `object`: Continuous Web Job Information.
  * properties `object`: ContinuousWebJob resource specific properties
    * detailed_status `string`: Detailed status.
    * error `string`: Error information.
    * extra_info_url `string`: Extra Info URL.
    * log_url `string`: Log URL.
    * run_command `string`: Run command.
    * settings `object`: Job settings.
    * status `string` (values: Initializing, Starting, Running, PendingRestart, Stopped): Job status.
    * url `string`: Job URL.
    * using_sdk `boolean`: Using SDK?
    * web_job_type `string` (values: Continuous, Triggered): Job type.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### ContinuousWebJobCollection
* ContinuousWebJobCollection `object`: Collection of Kudu continuous web job information elements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [ContinuousWebJob](#continuouswebjob)

### CsmPublishingProfileOptions
* CsmPublishingProfileOptions `object`: Publishing options for requested profile.
  * format `string` (values: FileZilla3, WebDeploy, Ftp): Name of the format. Valid values are: 
  * includeDisasterRecoveryEndpoints `boolean`: Include the DisasterRecover endpoint if true

### CsmSlotEntity
* CsmSlotEntity `object`: Deployment slot parameters.
  * preserveVnet **required** `boolean`: <code>true</code> to preserve Virtual Network to the slot during swap; otherwise, <code>false</code>.
  * targetSlot **required** `string`: Destination deployment slot during swap operation.

### CustomHostnameAnalysisResult
* CustomHostnameAnalysisResult `object`: Custom domain analysis.
  * properties `object`: CustomHostnameAnalysisResult resource specific properties
    * aRecords `array`: A records controller can see for this hostname.
      * items `string`
    * alternateCNameRecords `array`: Alternate CName records controller can see for this hostname.
      * items `string`
    * alternateTxtRecords `array`: Alternate TXT records controller can see for this hostname.
      * items `string`
    * cNameRecords `array`: CName records controller can see for this hostname.
      * items `string`
    * conflictingAppResourceId `string`: Name of the conflicting app on scale unit if it's within the same subscription.
    * customDomainVerificationFailureInfo `object`: Body of the error response returned from the API.
      * code `string`: Basic error code.
      * extendedCode `string`: Type of error.
      * innerErrors `array`: Inner errors.
        * items [ErrorEntity](#errorentity)
      * message `string`: Any details of the error.
      * messageTemplate `string`: Message template.
      * parameters `array`: Parameters for the template.
        * items `string`
    * customDomainVerificationTest `string` (values: Passed, Failed, Skipped): DNS verification test result.
    * hasConflictAcrossSubscription `boolean`: <code>true</code> if there is a conflict across subscriptions; otherwise, <code>false</code>.
    * hasConflictOnScaleUnit `boolean`: <code>true</code> if there is a conflict on a scale unit; otherwise, <code>false</code>.
    * isHostnameAlreadyVerified `boolean`: <code>true</code> if hostname is already verified; otherwise, <code>false</code>.
    * txtRecords `array`: TXT records controller can see for this hostname.
      * items `string`
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DatabaseBackupSetting
* DatabaseBackupSetting `object`: Database backup settings.
  * connectionString `string`: Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
  * connectionStringName `string`: Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
  * databaseType **required** `string` (values: SqlAzure, MySql, LocalMySql, PostgreSql): Database type (e.g. SqlAzure / MySql).
  * name `string`

### DeletedAppRestoreRequest
* DeletedAppRestoreRequest `object`: Details about restoring a deleted app.
  * properties `object`: DeletedAppRestoreRequest resource specific properties
    * deletedSiteId `string`: ARM resource ID of the deleted app. Example:
    * recoverConfiguration `boolean`: If true, deleted site configuration, in addition to content, will be restored.
    * snapshotTime `string`: Point in time to restore the deleted app from, formatted as a DateTime string. 
    * useDRSecondary `boolean`: If true, the snapshot is retrieved from DRSecondary endpoint.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### Deployment
* Deployment `object`: User credentials used for publishing activity.
  * properties `object`: Deployment resource specific properties
    * active `boolean`: True if deployment is currently active, false if completed and null if not started.
    * author `string`: Who authored the deployment.
    * author_email `string`: Author email.
    * deployer `string`: Who performed the deployment.
    * details `string`: Details on deployment.
    * end_time `string`: End time.
    * message `string`: Details about deployment status.
    * start_time `string`: Start time.
    * status `integer`: Deployment status.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DeploymentCollection
* DeploymentCollection `object`: Collection of app deployments.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [Deployment](#deployment)

### EnabledConfig
* EnabledConfig `object`: Enabled configuration.
  * enabled `boolean`: True if configuration is enabled, false if it is disabled and null if configuration is not set.

### ErrorEntity


### FileSystemApplicationLogsConfig
* FileSystemApplicationLogsConfig `object`: Application logs to file system configuration.
  * level `string` (values: Off, Verbose, Information, Warning, Error): Log level.

### FileSystemHttpLogsConfig
* FileSystemHttpLogsConfig `object`: Http logs to file system configuration.
  * enabled `boolean`: True if configuration is enabled, false if it is disabled and null if configuration is not set.
  * retentionInDays `integer`: Retention in days.
  * retentionInMb `integer`: Maximum size in megabytes that http log files can use.

### FunctionEnvelope
* FunctionEnvelope `object`: Web Job Information.
  * properties `object`: FunctionEnvelope resource specific properties
    * config `object`: Config information.
    * config_href `string`: Config URI.
    * files `object`: File list.
    * function_app_id `string`: Function App ID.
    * href `string`: Function URI.
    * script_href `string`: Script URI.
    * script_root_path_href `string`: Script root path URI.
    * secrets_file_href `string`: Secrets file URI.
    * test_data `string`: Test data used when testing via the Azure Portal.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### FunctionEnvelopeCollection
* FunctionEnvelopeCollection `object`: Collection of Kudu function information elements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [FunctionEnvelope](#functionenvelope)

### FunctionSecrets
* FunctionSecrets `object`: Function secrets.
  * properties `object`: FunctionSecrets resource specific properties
    * key `string`: Secret key.
    * trigger_url `string`: Trigger URL.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### HostNameBinding
* HostNameBinding `object`: A hostname binding object.
  * properties `object`: HostNameBinding resource specific properties
    * azureResourceName `string`: Azure resource name.
    * azureResourceType `string` (values: Website, TrafficManager): Azure resource type.
    * customHostNameDnsRecordType `string` (values: CName, A): Custom DNS record type.
    * domainId `string`: Fully qualified ARM domain resource URI.
    * hostNameType `string` (values: Verified, Managed): Hostname type.
    * siteName `string`: App Service app name.
    * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type
    * thumbprint `string`: SSL certificate thumbprint
    * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### HostNameBindingCollection
* HostNameBindingCollection `object`: Collection of hostname bindings.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [HostNameBinding](#hostnamebinding)

### HttpLogsConfig
* HttpLogsConfig `object`: Http logs configuration.
  * azureBlobStorage [AzureBlobStorageHttpLogsConfig](#azureblobstoragehttplogsconfig)
  * fileSystem [FileSystemHttpLogsConfig](#filesystemhttplogsconfig)

### MSDeploy
* MSDeploy `object`: MSDeploy ARM PUT information
  * properties [MSDeployCore](#msdeploycore)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### MSDeployCore
* MSDeployCore `object`: MSDeploy ARM PUT core information
  * appOffline `boolean`: Sets the AppOffline rule while the MSDeploy operation executes.
  * connectionString `string`: SQL Connection String
  * dbType `string`: Database Type
  * packageUri `string`: Package URI
  * setParameters `object`: MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used.
  * setParametersXmlFileUri `string`: URI of MSDeploy Parameters file. Must not be set if SetParameters is used.
  * skipAppData `boolean`: Controls whether the MSDeploy operation skips the App_Data directory.

### MSDeployLog
* MSDeployLog `object`: MSDeploy log
  * properties `object`: MSDeployLog resource specific properties
    * entries `array`: List of log entry messages
      * items [MSDeployLogEntry](#msdeploylogentry)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### MSDeployLogEntry
* MSDeployLogEntry `object`: MSDeploy log entry
  * message `string`: Log entry message
  * time `string`: Timestamp of log entry
  * type `string` (values: Message, Warning, Error): Log entry type

### MSDeployStatus
* MSDeployStatus `object`: MSDeploy ARM response
  * properties `object`: MSDeployStatus resource specific properties
    * complete `boolean`: Whether the deployment operation has completed
    * deployer `string`: Username of deployer
    * endTime `string`: End time of deploy operation
    * provisioningState `string` (values: accepted, running, succeeded, failed, canceled): Provisioning state
    * startTime `string`: Start time of deploy operation
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### MigrateMySqlRequest
* MigrateMySqlRequest `object`: MySQL migration request.
  * properties `object`: MigrateMySqlRequest resource specific properties
    * connectionString **required** `string`: Connection string to the remote MySQL database.
    * migrationType **required** `string` (values: LocalToRemote, RemoteToLocal): The type of migration operation to be done
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### MigrateMySqlStatus
* MigrateMySqlStatus `object`: MySQL migration status.
  * properties `object`: MigrateMySqlStatus resource specific properties
    * localMySqlEnabled `boolean`: True if the web app has in app MySql enabled
    * migrationOperationStatus `string` (values: InProgress, Failed, Succeeded, TimedOut, Created): Status of the migration task.
    * operationId `string`: Operation ID for the migration task.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### NetworkFeatures
* NetworkFeatures `object`: Full view of network features for an app (presently VNET integration and Hybrid Connections).
  * properties `object`: NetworkFeatures resource specific properties
    * hybridConnections `array`: The Hybrid Connections summary view.
      * items [RelayServiceConnectionEntity](#relayserviceconnectionentity)
    * hybridConnectionsV2 `array`: The Hybrid Connection V2 (Service Bus) view.
      * items `object`: Hybrid Connection contract. This is used to configure a Hybrid Connection.
        * properties `object`: HybridConnection resource specific properties
          * hostname `string`: The hostname of the endpoint.
          * port `integer`: The port of the endpoint.
          * relayArmUri `string`: The ARM URI to the Service Bus relay.
          * relayName `string`: The name of the Service Bus relay.
          * sendKeyName `string`: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
          * sendKeyValue `string`: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
          * serviceBusNamespace `string`: The name of the Service Bus namespace.
          * serviceBusSuffix `string`: The suffix for the service bus endpoint. By default this is .servicebus.windows.net
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
    * virtualNetworkConnection `object`: Virtual Network information contract.
      * properties `object`: VnetInfo resource specific properties
        * certBlob `string`: A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
        * certThumbprint `string`: The client certificate thumbprint.
        * dnsServers `string`: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
        * isSwift `boolean`: Flag that is used to denote if this is VNET injection
        * resyncRequired `boolean`: <code>true</code> if a resync is required; otherwise, <code>false</code>.
        * routes `array`: The routes that this Virtual Network connection uses.
          * items `object`: Virtual Network route contract used to pass routing information for a Virtual Network.
        * vnetResourceId `string`: The Virtual Network's resource ID.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.
    * virtualNetworkName `string`: The Virtual Network name.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### NetworkTrace
* NetworkTrace `object`: Network trace
  * message `string`: Detailed message of a network trace operation, e.g. error message in case of failure.
  * path `string`: Local file path for the captured network trace file.
  * status `string`: Current status of the network trace operation, same as Operation.Status (InProgress/Succeeded/Failed).

### PerfMonCounterCollection
* PerfMonCounterCollection `object`: Collection of performance monitor counters.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [PerfMonResponse](#perfmonresponse)

### PerfMonResponse
* PerfMonResponse `object`: Performance monitor API response.
  * code `string`: The response code.
  * data [PerfMonSet](#perfmonset)
  * message `string`: The message.

### PerfMonSample
* PerfMonSample `object`: Performance monitor sample in a set.
  * instanceName `string`: Name of the server on which the measurement is made.
  * time `string`: Point in time for which counter was measured.
  * value `number`: Value of counter at a certain time.

### PerfMonSet
* PerfMonSet `object`: Metric information.
  * endTime `string`: End time of the period.
  * name `string`: Unique key name of the counter.
  * startTime `string`: Start time of the period.
  * timeGrain `string`: Presented time grain.
  * values `array`: Collection of workers that are active during this time.
    * items [PerfMonSample](#perfmonsample)

### PremierAddOn
* PremierAddOn `object`: Premier add-on.
  * properties `object`: PremierAddOn resource specific properties
    * marketplaceOffer `string`: Premier add on Marketplace offer.
    * marketplacePublisher `string`: Premier add on Marketplace publisher.
    * product `string`: Premier add on Product.
    * sku `string`: Premier add on SKU.
    * vendor `string`: Premier add on Vendor.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * location **required** `string`: Resource Location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### PremierAddOnPatchResource
* PremierAddOnPatchResource `object`: ARM resource for a PremierAddOn.
  * properties `object`: PremierAddOnPatchResource resource specific properties
    * marketplaceOffer `string`: Premier add on Marketplace offer.
    * marketplacePublisher `string`: Premier add on Marketplace publisher.
    * product `string`: Premier add on Product.
    * sku `string`: Premier add on SKU.
    * vendor `string`: Premier add on Vendor.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### PrivateAccess
* PrivateAccess `object`: Description of the parameters of Private Access for a Web Site.
  * properties `object`: PrivateAccess resource specific properties
    * enabled `boolean`: Whether private access is enabled or not.
    * virtualNetworks `array`: The Virtual Networks (and subnets) allowed to access the site privately.
      * items [PrivateAccessVirtualNetwork](#privateaccessvirtualnetwork)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### PrivateAccessSubnet
* PrivateAccessSubnet `object`: Description of a Virtual Network subnet that is useable for private site access.
  * key `integer`: The key (ID) of the subnet.
  * name `string`: The name of the subnet.

### PrivateAccessVirtualNetwork
* PrivateAccessVirtualNetwork `object`: Description of a Virtual Network that is useable for private site access.
  * key `integer`: The key (ID) of the Virtual Network.
  * name `string`: The name of the Virtual Network.
  * resourceId `string`: The ARM uri of the Virtual Network
  * subnets `array`: A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network.
    * items [PrivateAccessSubnet](#privateaccesssubnet)

### ProcessInfo
* ProcessInfo `object`: Process Information.
  * properties `object`: ProcessInfo resource specific properties
    * children `array`: Child process list.
      * items `string`
    * command_line `string`: Command line.
    * deployment_name `string`: Deployment name.
    * description `string`: Description of process.
    * environment_variables `object`: List of environment variables.
    * file_name `string`: File name of this process.
    * handle_count `integer`: Handle count.
    * href `string`: HRef URI.
    * identifier `integer`: ARM Identifier for deployment.
    * iis_profile_timeout_in_seconds `number`: IIS Profile timeout (seconds).
    * is_iis_profile_running `boolean`: Is the IIS Profile running?
    * is_profile_running `boolean`: Is profile running?
    * is_scm_site `boolean`: Is this the SCM site?
    * is_webjob `boolean`: Is this a Web Job?
    * minidump `string`: Minidump URI.
    * module_count `integer`: Module count.
    * modules `array`: List of modules.
      * items [ProcessModuleInfo](#processmoduleinfo)
    * non_paged_system_memory `integer`: Non-paged system memory.
    * open_file_handles `array`: List of open files.
      * items `string`
    * paged_memory `integer`: Paged memory.
    * paged_system_memory `integer`: Paged system memory.
    * parent `string`: Parent process.
    * peak_paged_memory `integer`: Peak paged memory.
    * peak_virtual_memory `integer`: Peak virtual memory usage.
    * peak_working_set `integer`: Peak working set.
    * private_memory `integer`: Private memory size.
    * privileged_cpu_time `string`: Privileged CPU time.
    * start_time `string`: Start time.
    * thread_count `integer`: Thread count.
    * threads `array`: Thread list.
      * items [ProcessThreadInfo](#processthreadinfo)
    * time_stamp `string`: Time stamp.
    * total_cpu_time `string`: Total CPU time.
    * user_cpu_time `string`: User CPU time.
    * user_name `string`: User name.
    * virtual_memory `integer`: Virtual memory size.
    * working_set `integer`: Working set.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### ProcessInfoCollection
* ProcessInfoCollection `object`: Collection of Kudu process information elements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [ProcessInfo](#processinfo)

### ProcessModuleInfo
* ProcessModuleInfo `object`: Process Module Information.
  * properties `object`: ProcessModuleInfo resource specific properties
    * base_address `string`: Base address. Used as module identifier in ARM resource URI.
    * file_description `string`: File description.
    * file_name `string`: File name.
    * file_path `string`: File path.
    * file_version `string`: File version.
    * href `string`: HRef URI.
    * is_debug `boolean`: Is debug?
    * language `string`: Module language (locale).
    * module_memory_size `integer`: Module memory size.
    * product `string`: Product name.
    * product_version `string`: Product version.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### ProcessModuleInfoCollection
* ProcessModuleInfoCollection `object`: Collection of Kudu thread information elements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [ProcessModuleInfo](#processmoduleinfo)

### ProcessThreadInfo
* ProcessThreadInfo `object`: Process Thread Information.
  * properties `object`: ProcessThreadInfo resource specific properties
    * base_priority `integer`: Base priority.
    * current_priority `integer`: Current thread priority.
    * href `string`: HRef URI.
    * identifier `integer`: Site extension ID.
    * priority_level `string`: Thread priority level.
    * priviledged_processor_time `string`: Privileged processor time.
    * process `string`: Process URI.
    * start_address `string`: Start address.
    * start_time `string`: Start time.
    * state `string`: Thread state.
    * total_processor_time `string`: Total processor time.
    * user_processor_time `string`: User processor time.
    * wait_reason `string`: Wait reason.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### ProcessThreadInfoCollection
* ProcessThreadInfoCollection `object`: Collection of Kudu thread information elements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [ProcessThreadInfo](#processthreadinfo)

### PublicCertificate
* PublicCertificate `object`: Public certificate object
  * properties `object`: PublicCertificate resource specific properties
    * blob `string`: Public Certificate byte array
    * publicCertificateLocation `string` (values: CurrentUserMy, LocalMachineMy, Unknown): Public Certificate Location
    * thumbprint `string`: Certificate Thumbprint
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### PublicCertificateCollection
* PublicCertificateCollection `object`: Collection of public certificates
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [PublicCertificate](#publiccertificate)

### RelayServiceConnectionEntity
* RelayServiceConnectionEntity `object`: Hybrid Connection for an App Service app.
  * properties `object`: RelayServiceConnectionEntity resource specific properties
    * biztalkUri `string`
    * entityConnectionString `string`
    * entityName `string`
    * hostname `string`
    * port `integer`
    * resourceConnectionString `string`
    * resourceType `string`
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### RestoreRequest
* RestoreRequest `object`: Description of a restore request.
  * properties `object`: RestoreRequest resource specific properties
    * adjustConnectionStrings `boolean`: <code>true</code> if SiteConfig.ConnectionStrings should be set in new app; otherwise, <code>false</code>.
    * appServicePlan `string`: Specify app service plan that will own restored site.
    * blobName `string`: Name of a blob which contains the backup.
    * databases `array`: Collection of databases which should be restored. This list has to match the list of databases included in the backup.
      * items [DatabaseBackupSetting](#databasebackupsetting)
    * hostingEnvironment `string`: App Service Environment name, if needed (only when restoring an app to an App Service Environment).
    * ignoreConflictingHostNames `boolean`: Changes a logic when restoring an app with custom domains. <code>true</code> to remove custom domains automatically. If <code>false</code>, custom domains are added to 
    * ignoreDatabases `boolean`: Ignore the databases and only restore the site content
    * operationType `string` (values: Default, Clone, Relocation, Snapshot, CloudFS): Operation type.
    * overwrite **required** `boolean`: <code>true</code> if the restore operation can overwrite target app; otherwise, <code>false</code>. <code>true</code> is needed if trying to restore over an existing app.
    * siteName `string`: Name of an app.
    * storageAccountUrl **required** `string`: SAS URL to the container.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SiteAuthSettings
* SiteAuthSettings `object`: Configuration settings for the Azure App Service Authentication / Authorization feature.
  * properties `object`: SiteAuthSettings resource specific properties
    * additionalLoginParams `array`: Login parameters to send to the OpenID Connect authorization endpoint when
      * items `string`
    * allowedAudiences `array`: Allowed audience values to consider when validating JWTs issued by 
      * items `string`
    * allowedExternalRedirectUrls `array`: External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
      * items `string`
    * clientId `string`: The Client ID of this relying party application, known as the client_id.
    * clientSecret `string`: The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
    * clientSecretCertificateThumbprint `string`: An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
    * defaultProvider `string` (values: AzureActiveDirectory, Facebook, Google, MicrosoftAccount, Twitter): The default authentication provider to use when multiple providers are configured.
    * enabled `boolean`: <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
    * facebookAppId `string`: The App ID of the Facebook app used for login.
    * facebookAppSecret `string`: The App Secret of the Facebook app used for Facebook Login.
    * facebookOAuthScopes `array`: The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
      * items `string`
    * googleClientId `string`: The OpenID Connect Client ID for the Google web application.
    * googleClientSecret `string`: The client secret associated with the Google web application.
    * googleOAuthScopes `array`: The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
      * items `string`
    * issuer `string`: The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
    * microsoftAccountClientId `string`: The OAuth 2.0 client ID that was created for the app used for authentication.
    * microsoftAccountClientSecret `string`: The OAuth 2.0 client secret that was created for the app used for authentication.
    * microsoftAccountOAuthScopes `array`: The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
      * items `string`
    * runtimeVersion `string`: The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
    * tokenRefreshExtensionHours `number`: The number of hours after session token expiration that a session token can be used to
    * tokenStoreEnabled `boolean`: <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
    * twitterConsumerKey `string`: The OAuth 1.0a consumer key of the Twitter application used for sign-in.
    * twitterConsumerSecret `string`: The OAuth 1.0a consumer secret of the Twitter application used for sign-in.
    * unauthenticatedClientAction `string` (values: RedirectToLoginPage, AllowAnonymous): The action to take when an unauthenticated client attempts to access the app.
    * validateIssuer `boolean`: Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SiteCloneability
* SiteCloneability `object`: Represents whether or not an app is cloneable.
  * blockingCharacteristics `array`: List of blocking application characteristics.
    * items [SiteCloneabilityCriterion](#sitecloneabilitycriterion)
  * blockingFeatures `array`: List of features enabled on app that prevent cloning.
    * items [SiteCloneabilityCriterion](#sitecloneabilitycriterion)
  * result `string` (values: Cloneable, PartiallyCloneable, NotCloneable): Name of app.
  * unsupportedFeatures `array`: List of features enabled on app that are non-blocking but cannot be cloned. The app can still be cloned
    * items [SiteCloneabilityCriterion](#sitecloneabilitycriterion)

### SiteCloneabilityCriterion
* SiteCloneabilityCriterion `object`: An app cloneability criterion.
  * description `string`: Description of criterion.
  * name `string`: Name of criterion.

### SiteConfigResource
* SiteConfigResource `object`: Web app configuration ARM resource.
  * properties `object`: Configuration of an App Service app.
    * alwaysOn `boolean`: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
    * apiDefinition `object`: Information about the formal API definition for the app.
      * url `string`: The URL of the API definition.
    * appCommandLine `string`: App command line to launch.
    * appSettings `array`: Application settings.
      * items `object`: Name value pair.
        * name `string`: Pair name.
        * value `string`: Pair value.
    * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
    * autoHealRules `object`: Rules that can be defined for auto-heal.
      * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
        * actionType `string` (values: Recycle, LogEvent, CustomAction): Predefined action to be taken.
        * customAction `object`: Custom action to be executed
          * exe `string`: Executable to be run.
          * parameters `string`: Parameters for the executable.
        * minProcessExecutionTime `string`: Minimum time the process must execute
      * triggers `object`: Triggers for auto-heal.
        * privateBytesInKB `integer`: A rule based on private bytes.
        * requests `object`: Trigger based on total requests.
          * count `integer`: Request Count.
          * timeInterval `string`: Time interval.
        * slowRequests `object`: Trigger based on request execution time.
          * count `integer`: Request Count.
          * timeInterval `string`: Time interval.
          * timeTaken `string`: Time taken.
        * statusCodes `array`: A rule based on status codes.
          * items `object`: Trigger based on status code.
    * autoSwapSlotName `string`: Auto-swap slot name.
    * azureStorageAccounts `object`: User-provided Azure storage accounts.
    * connectionStrings `array`: Connection strings.
      * items `object`: Database connection string information.
        * connectionString `string`: Connection string value.
        * name `string`: Name of connection string.
        * type `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
    * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
      * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
        * items `string`
      * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
    * defaultDocuments `array`: Default documents.
      * items `string`
    * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
    * documentRoot `string`: Document root.
    * experiments `object`: Routing rules in production experiments.
      * rampUpRules `array`: List of ramp-up rules.
        * items `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
          * actionHostName `string`: Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
          * changeDecisionCallbackUrl `string`: Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
          * changeIntervalInMinutes `integer`: Specifies interval in minutes to reevaluate ReroutePercentage.
          * changeStep `number`: In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches 
          * maxReroutePercentage `number`: Specifies upper boundary below which ReroutePercentage will stay.
          * minReroutePercentage `number`: Specifies lower boundary above which ReroutePercentage will stay.
          * name `string`: Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
          * reroutePercentage `number`: Percentage of the traffic which will be redirected to <code>ActionHostName</code>.
    * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
    * handlerMappings `array`: Handler mappings.
      * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
        * arguments `string`: Command-line arguments to be passed to the script processor.
        * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
        * scriptProcessor `string`: The absolute path to the FastCGI application.
    * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
    * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
    * ipSecurityRestrictions `array`: IP security restrictions for main.
      * items `object`: IP security restriction on an app.
        * action `string`: Allow or Deny access for this IP range.
        * description `string`: IP restriction rule description.
        * ipAddress `string`: IP address the security restriction is valid for.
        * name `string`: IP restriction rule name.
        * priority `integer`: Priority of IP restriction rule.
        * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
        * subnetTrafficTag `integer`: (internal) Subnet traffic tag
        * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
        * vnetSubnetResourceId `string`: Virtual network resource id
        * vnetTrafficTag `integer`: (internal) Vnet traffic tag
    * javaContainer `string`: Java container.
    * javaContainerVersion `string`: Java container version.
    * javaVersion `string`: Java version.
    * limits `object`: Metric limits set on an app.
      * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
      * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
      * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
    * linuxFxVersion `string`: Linux App Framework and version
    * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
    * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
    * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
    * machineKey `object`: MachineKey of an app.
      * decryption `string`: Algorithm used for decryption.
      * decryptionKey `string`: Decryption key.
      * validation `string`: MachineKey validation.
      * validationKey `string`: Validation key.
    * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
    * managedServiceIdentityId `integer`: Managed Service Identity Id
    * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
    * netFrameworkVersion `string`: .NET Framework version.
    * nodeVersion `string`: Version of Node.js.
    * numberOfWorkers `integer`: Number of workers.
    * phpVersion `string`: Version of PHP.
    * publishingUsername `string`: Publishing user name.
    * push `object`: Push settings for the App.
      * properties `object`: PushSettings resource specific properties
        * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
        * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
        * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
        * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.
    * pythonVersion `string`: Version of Python.
    * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
    * remoteDebuggingVersion `string`: Remote debugging version.
    * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
    * requestTracingExpirationTime `string`: Request tracing expiration time.
    * reservedInstanceCount `integer`: Number of reserved instances.
    * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
      * items `object`: IP security restriction on an app.
        * action `string`: Allow or Deny access for this IP range.
        * description `string`: IP restriction rule description.
        * ipAddress `string`: IP address the security restriction is valid for.
        * name `string`: IP restriction rule name.
        * priority `integer`: Priority of IP restriction rule.
        * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
        * subnetTrafficTag `integer`: (internal) Subnet traffic tag
        * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
        * vnetSubnetResourceId `string`: Virtual network resource id
        * vnetTrafficTag `integer`: (internal) Vnet traffic tag
    * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
    * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
    * tracingOptions `string`: Tracing options.
    * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
    * virtualApplications `array`: Virtual applications.
      * items `object`: Virtual application in an app.
        * physicalPath `string`: Physical path.
        * preloadEnabled `boolean`: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
        * virtualDirectories `array`: Virtual directories for virtual application.
          * items `object`: Directory for virtual application.
        * virtualPath `string`: Virtual path.
    * vnetName `string`: Virtual Network name.
    * webSocketsEnabled `boolean`: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
    * windowsFxVersion `string`: Xenon App Framework and version
    * xManagedServiceIdentityId `integer`: Explicit Managed Service Identity Id
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SiteConfigResourceCollection
* SiteConfigResourceCollection `object`: Collection of site configurations.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [SiteConfigResource](#siteconfigresource)

### SiteConfigurationSnapshotInfo
* SiteConfigurationSnapshotInfo `object`: A snapshot of a web app configuration.
  * properties `object`: SiteConfigurationSnapshotInfo resource specific properties
    * snapshotId `integer`: The id of the snapshot
    * time `string`: The time the snapshot was taken.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SiteConfigurationSnapshotInfoCollection
* SiteConfigurationSnapshotInfoCollection `object`: Collection of metadata for the app configuration snapshots that can be restored.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [SiteConfigurationSnapshotInfo](#siteconfigurationsnapshotinfo)

### SiteExtensionInfo
* SiteExtensionInfo `object`: Site Extension Information.
  * properties `object`: SiteExtensionInfo resource specific properties
    * authors `array`: List of authors.
      * items `string`
    * comment `string`: Site Extension comment.
    * description `string`: Detailed description.
    * download_count `integer`: Count of downloads.
    * extension_id `string`: Site extension ID.
    * extension_type `string` (values: Gallery, WebRoot): Site extension type.
    * extension_url `string`: Extension URL.
    * feed_url `string`: Feed URL.
    * icon_url `string`: Icon URL.
    * installed_date_time `string`: Installed timestamp.
    * installer_command_line_params `string`: Installer command line parameters.
    * license_url `string`: License URL.
    * local_is_latest_version `boolean`: <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
    * local_path `string`: Local path.
    * project_url `string`: Project URL.
    * provisioningState `string`: Provisioning state.
    * published_date_time `string`: Published timestamp.
    * summary `string`: Summary description.
    * title `string`
    * version `string`: Version information.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SiteExtensionInfoCollection
* SiteExtensionInfoCollection `object`: Collection of Kudu site extension information elements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [SiteExtensionInfo](#siteextensioninfo)

### SiteInstance
* SiteInstance `object`: Instance of an app.
  * properties `object`: SiteInstance resource specific properties
    * siteInstanceName `string`: Name of instance.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SiteLogsConfig
* SiteLogsConfig `object`: Configuration of App Service site logs.
  * properties `object`: SiteLogsConfig resource specific properties
    * applicationLogs [ApplicationLogsConfig](#applicationlogsconfig)
    * detailedErrorMessages [EnabledConfig](#enabledconfig)
    * failedRequestsTracing [EnabledConfig](#enabledconfig)
    * httpLogs [HttpLogsConfig](#httplogsconfig)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SitePatchResource
* SitePatchResource `object`: ARM resource for a site.
  * identity `object`: Managed service identity.
    * principalId `string`: Principal Id of managed service identity.
    * tenantId `string`: Tenant of managed service identity.
    * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): Type of managed service identity.
    * userAssignedIdentities `object`: The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
  * properties `object`: SitePatchResource resource specific properties
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
        * location `string`: Location.
        * numberOfWorkers `integer`: NumberOfWorkers.
    * hostNameSslStates `array`: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
      * items `object`: SSL-enabled hostname.
        * hostType `string` (values: Standard, Repository): Indicates whether the hostname is a standard or repository hostname.
        * name `string`: Hostname.
        * sslState `string` (values: Disabled, SniEnabled, IpBasedEnabled): SSL type.
        * thumbprint `string`: SSL certificate thumbprint.
        * toUpdate `boolean`: Set to <code>true</code> to update existing hostname.
        * virtualIP `string`: Virtual IP address assigned to the hostname if IP based SSL is enabled.
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
        * url `string`: The URL of the API definition.
      * appCommandLine `string`: App command line to launch.
      * appSettings `array`: Application settings.
        * items `object`: Name value pair.
          * name `string`: Pair name.
          * value `string`: Pair value.
      * autoHealEnabled `boolean`: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
      * autoHealRules `object`: Rules that can be defined for auto-heal.
        * actions `object`: Actions which to take by the auto-heal module when a rule is triggered.
          * actionType `string` (values: Recycle, LogEvent, CustomAction): Predefined action to be taken.
          * customAction `object`: Custom action to be executed
          * minProcessExecutionTime `string`: Minimum time the process must execute
        * triggers `object`: Triggers for auto-heal.
          * privateBytesInKB `integer`: A rule based on private bytes.
          * requests `object`: Trigger based on total requests.
          * slowRequests `object`: Trigger based on request execution time.
          * statusCodes `array`: A rule based on status codes.
      * autoSwapSlotName `string`: Auto-swap slot name.
      * azureStorageAccounts `object`: User-provided Azure storage accounts.
      * connectionStrings `array`: Connection strings.
        * items `object`: Database connection string information.
          * connectionString `string`: Connection string value.
          * name `string`: Name of connection string.
          * type `string` (values: MySql, SQLServer, SQLAzure, Custom, NotificationHub, ServiceBus, EventHub, ApiHub, DocDb, RedisCache, PostgreSQL): Type of database.
      * cors `object`: Cross-Origin Resource Sharing (CORS) settings for the app.
        * allowedOrigins `array`: Gets or sets the list of origins that should be allowed to make cross-origin
          * items `string`
        * supportCredentials `boolean`: Gets or sets whether CORS requests with credentials are allowed. See 
      * defaultDocuments `array`: Default documents.
        * items `string`
      * detailedErrorLoggingEnabled `boolean`: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
      * documentRoot `string`: Document root.
      * experiments `object`: Routing rules in production experiments.
        * rampUpRules `array`: List of ramp-up rules.
          * items `object`: Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.
      * ftpsState `string` (values: AllAllowed, FtpsOnly, Disabled): State of FTP / FTPS service
      * handlerMappings `array`: Handler mappings.
        * items `object`: The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
          * arguments `string`: Command-line arguments to be passed to the script processor.
          * extension `string`: Requests with this extension will be handled using the specified FastCGI application.
          * scriptProcessor `string`: The absolute path to the FastCGI application.
      * http20Enabled `boolean`: Http20Enabled: configures a web site to allow clients to connect over http2.0
      * httpLoggingEnabled `boolean`: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
      * ipSecurityRestrictions `array`: IP security restrictions for main.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * javaContainer `string`: Java container.
      * javaContainerVersion `string`: Java container version.
      * javaVersion `string`: Java version.
      * limits `object`: Metric limits set on an app.
        * maxDiskSizeInMb `integer`: Maximum allowed disk size usage in MB.
        * maxMemoryInMb `integer`: Maximum allowed memory usage in MB.
        * maxPercentageCpu `number`: Maximum allowed CPU usage percentage.
      * linuxFxVersion `string`: Linux App Framework and version
      * loadBalancing `string` (values: WeightedRoundRobin, LeastRequests, LeastResponseTime, WeightedTotalTraffic, RequestHash): Site load balancing.
      * localMySqlEnabled `boolean`: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
      * logsDirectorySizeLimit `integer`: HTTP logs directory size limit.
      * machineKey `object`: MachineKey of an app.
        * decryption `string`: Algorithm used for decryption.
        * decryptionKey `string`: Decryption key.
        * validation `string`: MachineKey validation.
        * validationKey `string`: Validation key.
      * managedPipelineMode `string` (values: Integrated, Classic): Managed pipeline mode.
      * managedServiceIdentityId `integer`: Managed Service Identity Id
      * minTlsVersion `string` (values: 1.0, 1.1, 1.2): MinTlsVersion: configures the minimum version of TLS required for SSL requests
      * netFrameworkVersion `string`: .NET Framework version.
      * nodeVersion `string`: Version of Node.js.
      * numberOfWorkers `integer`: Number of workers.
      * phpVersion `string`: Version of PHP.
      * publishingUsername `string`: Publishing user name.
      * push `object`: Push settings for the App.
        * properties `object`: PushSettings resource specific properties
          * dynamicTagsJson `string`: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
          * isPushEnabled **required** `boolean`: Gets or sets a flag indicating whether the Push endpoint is enabled.
          * tagWhitelistJson `string`: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
          * tagsRequiringAuth `string`: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
        * id `string`: Resource Id.
        * kind `string`: Kind of resource.
        * name `string`: Resource Name.
        * type `string`: Resource type.
      * pythonVersion `string`: Version of Python.
      * remoteDebuggingEnabled `boolean`: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
      * remoteDebuggingVersion `string`: Remote debugging version.
      * requestTracingEnabled `boolean`: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
      * requestTracingExpirationTime `string`: Request tracing expiration time.
      * reservedInstanceCount `integer`: Number of reserved instances.
      * scmIpSecurityRestrictions `array`: IP security restrictions for scm.
        * items `object`: IP security restriction on an app.
          * action `string`: Allow or Deny access for this IP range.
          * description `string`: IP restriction rule description.
          * ipAddress `string`: IP address the security restriction is valid for.
          * name `string`: IP restriction rule name.
          * priority `integer`: Priority of IP restriction rule.
          * subnetMask `string`: Subnet mask for the range of IP addresses the restriction is valid for.
          * subnetTrafficTag `integer`: (internal) Subnet traffic tag
          * tag `string` (values: Default, XffProxy): Defines what this IP filter will be used for. This is to support IP filtering on proxies.
          * vnetSubnetResourceId `string`: Virtual network resource id
          * vnetTrafficTag `integer`: (internal) Vnet traffic tag
      * scmIpSecurityRestrictionsUseMain `boolean`: IP security restrictions for scm to use main.
      * scmType `string` (values: None, Dropbox, Tfs, LocalGit, GitHub, CodePlexGit, CodePlexHg, BitbucketGit, BitbucketHg, ExternalGit, ExternalHg, OneDrive, VSO): SCM type.
      * tracingOptions `string`: Tracing options.
      * use32BitWorkerProcess `boolean`: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
      * virtualApplications `array`: Virtual applications.
        * items `object`: Virtual application in an app.
          * physicalPath `string`: Physical path.
          * preloadEnabled `boolean`: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
          * virtualDirectories `array`: Virtual directories for virtual application.
          * virtualPath `string`: Virtual path.
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
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SitePhpErrorLogFlag
* SitePhpErrorLogFlag `object`: Used for getting PHP error logging flag.
  * properties `object`: SitePhpErrorLogFlag resource specific properties
    * localLogErrors `string`: Local log_errors setting.
    * localLogErrorsMaxLength `string`: Local log_errors_max_len setting.
    * masterLogErrors `string`: Master log_errors setting.
    * masterLogErrorsMaxLength `string`: Master log_errors_max_len setting.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SiteSourceControl
* SiteSourceControl `object`: Source control configuration for an app.
  * properties `object`: SiteSourceControl resource specific properties
    * branch `string`: Name of branch to use for deployment.
    * deploymentRollbackEnabled `boolean`: <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
    * isManualIntegration `boolean`: <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
    * isMercurial `boolean`: <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
    * repoUrl `string`: Repository or source control URL.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SlotConfigNames
* SlotConfigNames `object`: Names for connection strings, application settings, and external Azure storage account configuration
  * appSettingNames `array`: List of application settings names.
    * items `string`
  * azureStorageConfigNames `array`: List of external Azure storage account identifiers.
    * items `string`
  * connectionStringNames `array`: List of connection string names.
    * items `string`

### SlotConfigNamesResource
* SlotConfigNamesResource `object`: Slot Config names azure resource.
  * properties [SlotConfigNames](#slotconfignames)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SlotDifference
* SlotDifference `object`: A setting difference between two deployment slots of an app.
  * properties `object`: SlotDifference resource specific properties
    * description `string`: Description of the setting difference.
    * diffRule `string`: Rule that describes how to process the setting difference during a slot swap.
    * level `string`: Level of the difference: Information, Warning or Error.
    * settingName `string`: Name of the setting.
    * settingType `string`: The type of the setting: General, AppSetting or ConnectionString.
    * valueInCurrentSlot `string`: Value of the setting in the current slot.
    * valueInTargetSlot `string`: Value of the setting in the target slot.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SlotDifferenceCollection
* SlotDifferenceCollection `object`: Collection of slot differences.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [SlotDifference](#slotdifference)

### SnapshotCollection
* SnapshotCollection `object`: Collection of snapshots which can be used to revert an app to a previous time.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items `object`: A snapshot of an app.
      * properties `object`: Snapshot resource specific properties
        * time `string`: The time the snapshot was taken.
      * id `string`: Resource Id.
      * kind `string`: Kind of resource.
      * name `string`: Resource Name.
      * type `string`: Resource type.

### SnapshotRecoverySource
* SnapshotRecoverySource `object`: Specifies the web app that snapshot contents will be retrieved from.
  * id `string`: ARM resource ID of the source app. 
  * location `string`: Geographical location of the source web app, e.g. SouthEastAsia, SouthCentralUS

### SnapshotRestoreRequest
* SnapshotRestoreRequest `object`: Details about app recovery operation.
  * properties `object`: SnapshotRestoreRequest resource specific properties
    * ignoreConflictingHostNames `boolean`: If true, custom hostname conflicts will be ignored when recovering to a target web app.
    * overwrite **required** `boolean`: If <code>true</code> the restore operation can overwrite source app; otherwise, <code>false</code>.
    * recoverConfiguration `boolean`: If true, site configuration, in addition to content, will be reverted.
    * recoverySource [SnapshotRecoverySource](#snapshotrecoverysource)
    * snapshotTime `string`: Point in time in which the app restore should be done, formatted as a DateTime string.
    * useDRSecondary `boolean`: If true, the snapshot is retrieved from DRSecondary endpoint.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### StorageMigrationOptions
* StorageMigrationOptions `object`: Options for app content migration.
  * properties `object`: StorageMigrationOptions resource specific properties
    * azurefilesConnectionString **required** `string`: AzureFiles connection string.
    * azurefilesShare **required** `string`: AzureFiles share.
    * blockWriteAccessToSite `boolean`: <code>true</code> if the app should be read only during copy operation; otherwise, <code>false</code>.
    * switchSiteAfterMigration `boolean`: <code>true</code>if the app should be switched over; otherwise, <code>false</code>.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### StorageMigrationResponse
* StorageMigrationResponse `object`: Response for a migration of app content request.
  * properties `object`: StorageMigrationResponse resource specific properties
    * operationId `string`: When server starts the migration process, it will return an operation ID identifying that particular migration operation.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### StringDictionary
* StringDictionary `object`: String dictionary resource.
  * properties `object`: Settings.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### SwiftVirtualNetwork
* SwiftVirtualNetwork `object`: Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration.
  * properties `object`: SwiftVirtualNetwork resource specific properties
    * subnetResourceId `string`: The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
    * swiftSupported `boolean`: A flag that specifies if the scale unit this Web App is on supports Swift integration.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### TriggeredJobHistory
* TriggeredJobHistory `object`: Triggered Web Job History. List of Triggered Web Job Run Information elements.
  * properties `object`: TriggeredJobHistory resource specific properties
    * runs `array`: List of triggered web job runs.
      * items [TriggeredJobRun](#triggeredjobrun)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### TriggeredJobHistoryCollection
* TriggeredJobHistoryCollection `object`: Collection of Kudu continuous web job information elements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [TriggeredJobHistory](#triggeredjobhistory)

### TriggeredJobRun
* TriggeredJobRun `object`: Triggered Web Job Run Information.
  * properties `object`: TriggeredJobRun resource specific properties
    * duration `string`: Job duration.
    * end_time `string`: End time.
    * error_url `string`: Error URL.
    * job_name `string`: Job name.
    * output_url `string`: Output URL.
    * start_time `string`: Start time.
    * status `string` (values: Success, Failed, Error): Job status.
    * trigger `string`: Job trigger.
    * url `string`: Job URL.
    * web_job_id `string`: Job ID.
    * web_job_name `string`: Job name.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### TriggeredWebJob
* TriggeredWebJob `object`: Triggered Web Job Information.
  * properties `object`: TriggeredWebJob resource specific properties
    * error `string`: Error information.
    * extra_info_url `string`: Extra Info URL.
    * history_url `string`: History URL.
    * latest_run [TriggeredJobRun](#triggeredjobrun)
    * run_command `string`: Run command.
    * scheduler_logs_url `string`: Scheduler Logs URL.
    * settings `object`: Job settings.
    * url `string`: Job URL.
    * using_sdk `boolean`: Using SDK?
    * web_job_type `string` (values: Continuous, Triggered): Job type.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### TriggeredWebJobCollection
* TriggeredWebJobCollection `object`: Collection of Kudu continuous web job information elements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [TriggeredWebJob](#triggeredwebjob)

### WebAppInstanceCollection
* WebAppInstanceCollection `object`: Collection of app instances.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [SiteInstance](#siteinstance)

### WebJob
* WebJob `object`: Web Job Information.
  * properties `object`: WebJob resource specific properties
    * error `string`: Error information.
    * extra_info_url `string`: Extra Info URL.
    * run_command `string`: Run command.
    * settings `object`: Job settings.
    * url `string`: Job URL.
    * using_sdk `boolean`: Using SDK?
    * web_job_type `string` (values: Continuous, Triggered): Job type.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### WebJobCollection
* WebJobCollection `object`: Collection of Kudu web job information elements.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [WebJob](#webjob)


