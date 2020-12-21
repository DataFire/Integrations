# @datafire/google_securitycenter

Client library for Security Command Center API

## Installation and Usage
```bash
npm install --save @datafire/google_securitycenter
```
```js
let google_securitycenter = require('@datafire/google_securitycenter').create({
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

Security Command Center API provides access to temporal views of assets and findings within an organization.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_securitycenter.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_securitycenter.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### securitycenter.projects.locations.clusters.getContainerThreatDetectionSettings
Get the ContainerThreatDetectionSettings resource.


```js
google_securitycenter.securitycenter.projects.locations.clusters.getContainerThreatDetectionSettings({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ContainerThreatDetectionSettings](#containerthreatdetectionsettings)

### securitycenter.projects.locations.clusters.updateContainerThreatDetectionSettings
Update the ContainerThreatDetectionSettings resource.


```js
google_securitycenter.securitycenter.projects.locations.clusters.updateContainerThreatDetectionSettings({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
  * updateMask `string`: The list of fields to be updated.
  * body [ContainerThreatDetectionSettings](#containerthreatdetectionsettings)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ContainerThreatDetectionSettings](#containerthreatdetectionsettings)

### securitycenter.projects.webSecurityScannerSettings.calculate
Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings.


```js
google_securitycenter.securitycenter.projects.webSecurityScannerSettings.calculate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [WebSecurityScannerSettings](#websecurityscannersettings)



## Definitions

### Config
* Config `object`: Configuration of a module.
  * moduleEnablementState `string` (values: ENABLEMENT_STATE_UNSPECIFIED, INHERITED, ENABLED, DISABLED): The state of enablement for the module at its level of the resource hierarchy.
  * value `object`: The configuration value for the module. The absence of this field implies its inheritance from the parent.

### ContainerThreatDetectionSettings
* ContainerThreatDetectionSettings `object`: Resource capturing the settings for the Container Threat Detection service.
  * modules `object`: The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
  * name `string`: The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
  * serviceAccount `string`: Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project.
  * serviceEnablementState `string` (values: ENABLEMENT_STATE_UNSPECIFIED, INHERITED, ENABLED, DISABLED): The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
  * updateTime `string`: Output only. The time the settings were last updated.

### Details
* Details `object`: Details of a subscription.
  * endTime `string`: The time the subscription has or will end.
  * startTime `string`: The time the subscription has or will start.
  * type `string` (values: TYPE_UNSPECIFIED, STANDARD, TRIAL, ALPHA): The type of subscription

### EventThreatDetectionSettings
* EventThreatDetectionSettings `object`: Resource capturing the settings for the Event Threat Detection service.
  * modules `object`: The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
  * name `string`: The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
  * serviceEnablementState `string` (values: ENABLEMENT_STATE_UNSPECIFIED, INHERITED, ENABLED, DISABLED): The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
  * updateTime `string`: Output only. The time the settings were last updated.

### Finding
* Finding `object`: Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
  * category `string`: The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
  * createTime `string`: The time at which the finding was created in Security Command Center.
  * eventTime `string`: The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved.
  * externalUri `string`: The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
  * name `string`: The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}"
  * parent `string`: The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}"
  * resourceName `string`: For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
  * securityMarks [SecurityMarks](#securitymarks)
  * sourceProperties `object`: Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, INACTIVE): The state of the finding.

### Folder
* Folder `object`: Message that contains the resource name and display name of a folder resource.
  * resourceFolder `string`: Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
  * resourceFolderDisplayName `string`: The user defined display name for this folder.

### GoogleCloudSecuritycenterV1NotificationMessage
* GoogleCloudSecuritycenterV1NotificationMessage `object`: Cloud SCC's Notification
  * finding [Finding](#finding)
  * notificationConfigName `string`: Name of the notification config that generated current notification.
  * resource [GoogleCloudSecuritycenterV1Resource](#googlecloudsecuritycenterv1resource)

### GoogleCloudSecuritycenterV1Resource
* GoogleCloudSecuritycenterV1Resource `object`: Information related to the Google Cloud resource.
  * folders `array`: Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
    * items [Folder](#folder)
  * name `string`: The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
  * parent `string`: The full resource name of resource's parent.
  * parentDisplayName `string`: The human readable name of resource's parent.
  * project `string`: The full resource name of project that the resource belongs to.
  * projectDisplayName `string`: The human readable name of project that the resource belongs to.

### GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse
* GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse `object`: Response of asset discovery run
  * duration `string`: The duration between asset discovery run start and end
  * state `string` (values: STATE_UNSPECIFIED, COMPLETED, SUPERSEDED, TERMINATED): The state of an asset discovery run.

### GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse
* GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse `object`: Response of asset discovery run
  * duration `string`: The duration between asset discovery run start and end
  * state `string` (values: STATE_UNSPECIFIED, COMPLETED, SUPERSEDED, TERMINATED): The state of an asset discovery run.

### GoogleCloudSecuritycenterV1p1beta1Finding
* GoogleCloudSecuritycenterV1p1beta1Finding `object`: Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
  * category `string`: The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
  * createTime `string`: The time at which the finding was created in Security Command Center.
  * eventTime `string`: The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved.
  * externalUri `string`: The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
  * name `string`: The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}"
  * parent `string`: The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}"
  * resourceName `string`: For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
  * securityMarks [GoogleCloudSecuritycenterV1p1beta1SecurityMarks](#googlecloudsecuritycenterv1p1beta1securitymarks)
  * severity `string` (values: SEVERITY_UNSPECIFIED, CRITICAL, HIGH, MEDIUM, LOW): The severity of the finding. This field is managed by the source that writes the finding.
  * sourceProperties `object`: Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, INACTIVE): The state of the finding.

### GoogleCloudSecuritycenterV1p1beta1Folder
* GoogleCloudSecuritycenterV1p1beta1Folder `object`: Message that contains the resource name and display name of a folder resource.
  * resourceFolder `string`: Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
  * resourceFolderDisplayName `string`: The user defined display name for this folder.

### GoogleCloudSecuritycenterV1p1beta1NotificationMessage
* GoogleCloudSecuritycenterV1p1beta1NotificationMessage `object`: Security Command Center's Notification
  * finding [GoogleCloudSecuritycenterV1p1beta1Finding](#googlecloudsecuritycenterv1p1beta1finding)
  * notificationConfigName `string`: Name of the notification config that generated current notification.
  * resource [GoogleCloudSecuritycenterV1p1beta1Resource](#googlecloudsecuritycenterv1p1beta1resource)

### GoogleCloudSecuritycenterV1p1beta1Resource
* GoogleCloudSecuritycenterV1p1beta1Resource `object`: Information related to the Google Cloud resource.
  * folders `array`: Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
    * items [GoogleCloudSecuritycenterV1p1beta1Folder](#googlecloudsecuritycenterv1p1beta1folder)
  * name `string`: The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
  * parent `string`: The full resource name of resource's parent.
  * parentDisplayName `string`: The human readable name of resource's parent.
  * project `string`: The full resource name of project that the resource belongs to.
  * projectDisplayName `string`: The human readable name of project that the resource belongs to.

### GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse
* GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse `object`: Response of asset discovery run
  * duration `string`: The duration between asset discovery run start and end
  * state `string` (values: STATE_UNSPECIFIED, COMPLETED, SUPERSEDED, TERMINATED): The state of an asset discovery run.

### GoogleCloudSecuritycenterV1p1beta1SecurityMarks
* GoogleCloudSecuritycenterV1p1beta1SecurityMarks `object`: User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
  * marks `object`: Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)
  * name `string`: The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".

### SecurityCenterSettings
* SecurityCenterSettings `object`: Resource capturing the settings for Security Center.
  * logSinkProject `string`: The resource name of the project to send logs to. This project must be part of the organization this resource resides in. The format is `projects/{project_id}`. An empty value disables logging. This value is only referenced by services that support log sink. Please refer to the documentation for an updated list of compatible services.
  * name `string`: The resource name of the SecurityCenterSettings. Format: organizations/{organization}/securityCenterSettings
  * orgServiceAccount `string`: The organization level service account to be used for security center components.

### SecurityHealthAnalyticsSettings
* SecurityHealthAnalyticsSettings `object`: Resource capturing the settings for the Security Health Analytics service.
  * modules `object`: The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
  * name `string`: The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
  * serviceAccount `string`: Output only. The service account used by Security Health Analytics detectors.
  * serviceEnablementState `string` (values: ENABLEMENT_STATE_UNSPECIFIED, INHERITED, ENABLED, DISABLED): The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
  * updateTime `string`: Output only. The time the settings were last updated.

### SecurityMarks
* SecurityMarks `object`: User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
  * marks `object`: Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)
  * name `string`: The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".

### Subscription
* Subscription `object`: Resource capturing the state of an organization's subscription.
  * details [Details](#details)
  * name `string`: The resource name of the subscription. Format: organizations/{organization}/subscription
  * tier `string` (values: TIER_UNSPECIFIED, STANDARD, PREMIUM): The tier of SCC features this organization currently has access to.

### WebSecurityScannerSettings
* WebSecurityScannerSettings `object`: Resource capturing the settings for the Web Security Scanner service.
  * modules `object`: The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
  * name `string`: The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
  * serviceEnablementState `string` (values: ENABLEMENT_STATE_UNSPECIFIED, INHERITED, ENABLED, DISABLED): The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
  * updateTime `string`: Output only. The time the settings were last updated.


