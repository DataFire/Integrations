# @datafire/google_file

Client library for Cloud Filestore API

## Installation and Usage
```bash
npm install --save @datafire/google_file
```
```js
let google_file = require('@datafire/google_file').create({
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

The Cloud Filestore API is used for creating and managing cloud file servers.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_file.oauthCallback({
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
google_file.oauthRefresh(null, context)
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

### file.projects.locations.operations.delete
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.


```js
google_file.file.projects.locations.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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
* output [Empty](#empty)

### file.projects.locations.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_file.file.projects.locations.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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
* output [Operation](#operation)

### file.projects.locations.instances.patch
Updates the settings of a specific instance.


```js
google_file.file.projects.locations.instances.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The resource name of the instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}.
  * updateMask `string`: Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields: * "description" * "file_shares" * "labels"
  * body [Instance](#instance)
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
* output [Operation](#operation)

### file.projects.locations.list
Lists information about the supported locations for this service.


```js
google_file.file.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource that owns the locations collection, if applicable.
  * filter `string`: The standard list filter.
  * includeUnrevealedLocations `boolean`: If true, the returned list will include locations which are not yet revealed.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [ListLocationsResponse](#listlocationsresponse)

### file.projects.locations.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_file.file.projects.locations.operations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation's parent resource.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [ListOperationsResponse](#listoperationsresponse)

### file.projects.locations.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_file.file.projects.locations.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * body [CancelOperationRequest](#canceloperationrequest)
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
* output [Empty](#empty)

### file.projects.locations.instances.restore
Restores an existing instance's file share from a backup. The instance's file share capacity will be set to the backup's capacity or the minimum capacity of the tier, whichever is larger.


```js
google_file.file.projects.locations.instances.restore({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}.
  * body [RestoreInstanceRequest](#restoreinstancerequest)
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
* output [Operation](#operation)

### file.projects.locations.backups.list
Lists all backups in a project for either a specified location or for all locations.


```js
google_file.file.projects.locations.backups.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project and location for which to retrieve backup information, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, backup locations map to GCP regions, for example **us-west1**. To retrieve backup information for all locations, use "-" for the {location} value.
  * filter `string`: List filter.
  * orderBy `string`: Sort results. Supported values are "name", "name desc" or "" (unsorted).
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value to use if there are additional results to retrieve for this list request.
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
* output [ListBackupsResponse](#listbackupsresponse)

### file.projects.locations.backups.create
Creates a backup.


```js
google_file.file.projects.locations.backups.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The backup's project and location, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, backup locations map to GCP regions, for example **us-west1**.
  * backupId `string`: Required. The ID to use for the backup. The ID must be unique within the specified project and location. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
  * body [Backup](#backup)
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
* output [Operation](#operation)

### file.projects.locations.instances.list
Lists all instances in a project for either a specified location or for all locations.


```js
google_file.file.projects.locations.instances.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project and location for which to retrieve instance information, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the {location} value.
  * filter `string`: List filter.
  * orderBy `string`: Sort results. Supported values are "name", "name desc" or "" (unsorted).
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value to use if there are additional results to retrieve for this list request.
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
* output [ListInstancesResponse](#listinstancesresponse)

### file.projects.locations.instances.create
Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).


```js
google_file.file.projects.locations.instances.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The instance's project and location, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**.
  * instanceId `string`: Required. The ID of the instance to create. The ID must be unique within the specified project and location. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
  * body [Instance](#instance)
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
* output [Operation](#operation)



## Definitions

### Backup
* Backup `object`: A Cloud Filestore backup.
  * capacityGb `string`: Output only. Capacity of the source file share when the backup was created.
  * createTime `string`: Output only. The time when the backup was created.
  * description `string`: A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
  * downloadBytes `string`: Output only. Amount of bytes that will be downloaded if the backup is restored
  * labels `object`: Resource labels to represent user provided metadata.
  * name `string`: Output only. The resource name of the backup, in the format projects/{project_id}/locations/{location_id}/backups/{backup_id}.
  * sourceFileShare `string`: Name of the file share in the source Cloud Filestore instance that the backup is created from.
  * sourceInstance `string`: The resource name of the source Cloud Filestore instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}, used to create this backup.
  * sourceInstanceTier `string` (values: TIER_UNSPECIFIED, STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD): Output only. The service tier of the source Cloud Filestore instance that this backup is created from.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, FINALIZING, READY, DELETING): Output only. The backup state.
  * storageBytes `string`: Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion.

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### DailyCycle
* DailyCycle `object`: Time window specified for daily operations.
  * duration `string`: Output only. Duration of the time window, set by service producer.
  * startTime [TimeOfDay](#timeofday)

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### DenyMaintenancePeriod
* DenyMaintenancePeriod `object`: DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.
  * endDate [Date](#date)
  * startDate [Date](#date)
  * time [TimeOfDay](#timeofday)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### FileShareConfig
* FileShareConfig `object`: File share configuration for the instance.
  * capacityGb `string`: File share capacity in gigabytes (GB). Cloud Filestore defines 1 GB as 1024^3 bytes.
  * name `string`: The name of the file share (must be 16 characters or less).
  * nfsExportOptions `array`: Nfs Export Options. There is a limit of 10 export options per file share.
    * items [NfsExportOptions](#nfsexportoptions)
  * sourceBackup `string`: The resource name of the backup, in the format projects/{project_id}/locations/{location_id}/backups/{backup_id}, that this file share has been restored from.

### GoogleCloudSaasacceleratorManagementProvidersV1Instance
* GoogleCloudSaasacceleratorManagementProvidersV1Instance `object`
  * consumerDefinedName `string`: consumer_defined_name is the name that is set by the consumer. On the other hand Name field represents system-assigned id of an instance so consumers are not necessarily aware of it. consumer_defined_name is used for notification/UI purposes for consumer to recognize their instances.
  * createTime `string`: Output only. Timestamp when the resource was created.
  * labels `object`: Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
  * maintenancePolicyNames `object`: Deprecated. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For complete details of MaintenancePolicy, please refer to go/cloud-saas-mw-ug.
  * maintenanceSchedules `object`: The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions.
  * maintenanceSettings [GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings](#googlecloudsaasacceleratormanagementprovidersv1maintenancesettings)
  * name `string`: Unique name of the resource. It uses the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
  * producerMetadata `object`: Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.
  * provisionedResources `array`: Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.
    * items [GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource](#googlecloudsaasacceleratormanagementprovidersv1provisionedresource)
  * slmInstanceTemplate `string`: Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions.
  * sloMetadata [GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata](#googlecloudsaasacceleratormanagementprovidersv1slometadata)
  * softwareVersions `object`: Software versions that are used to deploy this instance. This can be mutated by rollout services.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY, UPDATING, REPAIRING, DELETING, ERROR): Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).
  * tenantProjectId `string`: Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.
  * updateTime `string`: Output only. Timestamp when the resource was last modified.

### GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule
* GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule `object`: Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule
  * canReschedule `boolean`: Can this scheduled update be rescheduled? By default, it's true and API needs to do explicitly check whether it's set, if it's set as false explicitly, it's false
  * endTime `string`: The scheduled end time for the maintenance.
  * rolloutManagementPolicy `string`: The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.
  * startTime `string`: The scheduled start time for the maintenance.

### GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings
* GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings `object`: Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.
  * exclude `boolean`: Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted.
  * maintenancePolicies `object`: Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For complete details of MaintenancePolicy, please refer to go/cloud-saas-mw-ug. If only the name is needed (like in the deprecated Instance.maintenance_policy_names field) then only populate MaintenancePolicy.name.

### GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata
* GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata `object`: Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.
  * exclusions `array`: By default node is eligible if instance is eligible. But individual node might be excluded from SLO by adding entry here. For semantic see SloMetadata.exclusions. If both instance and node level exclusions are present for time period, the node level's reason will be reported by Eligibility Exporter.
    * items [GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion](#googlecloudsaasacceleratormanagementprovidersv1sloexclusion)
  * location `string`: The location of the node, if different from instance location.
  * nodeId `string`: The id of the node. This should be equal to SaasInstanceNode.node_id.

### GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource
* GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource `object`: Describes provisioned dataplane resources.
  * resourceType `string`: Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'.
  * resourceUrl `string`: URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)".

### GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility
* GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility `object`: SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.
  * eligible `boolean`: Whether an instance is eligible or ineligible.
  * reason `string`: User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.

### GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion
* GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion `object`: SloExclusion represents an exclusion in SLI calculation applies to all SLOs.
  * duration `string`: Exclusion duration. No restrictions on the possible values. When an ongoing operation is taking longer than initially expected, an existing entry in the exclusion list can be updated by extending the duration. This is supported by the subsystem exporting eligibility data as long as such extension is committed at least 10 minutes before the original exclusion expiration - otherwise it is possible that there will be "gaps" in the exclusion application in the exported timeseries.
  * reason `string`: Human-readable reason for the exclusion. This should be a static string (e.g. "Disruptive update in progress") and should not contain dynamically generated data (e.g. instance name). Can be left empty.
  * sliName `string`: Name of an SLI that this exclusion applies to. Can be left empty, signaling that the instance should be excluded from all SLIs defined in the service SLO configuration.
  * startTime `string`: Start time of the exclusion. No alignment (e.g. to a full minute) needed.

### GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata
* GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata `object`: SloMetadata contains resources required for proper SLO classification of the instance.
  * eligibility [GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility](#googlecloudsaasacceleratormanagementprovidersv1sloeligibility)
  * exclusions `array`: List of SLO exclusion windows. When multiple entries in the list match (matching the exclusion time-window against current time point) the exclusion reason used in the first matching entry will be published. It is not needed to include expired exclusion in this list, as only the currently applicable exclusions are taken into account by the eligibility exporting subsystem (the historical state of exclusions will be reflected in the historically produced timeseries regardless of the current state). This field can be used to mark the instance as temporary ineligible for the purpose of SLO calculation. For permanent instance SLO exclusion, use of custom instance eligibility is recommended. See 'eligibility' field below.
    * items [GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion](#googlecloudsaasacceleratormanagementprovidersv1sloexclusion)
  * nodes `array`: Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.
    * items [GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata](#googlecloudsaasacceleratormanagementprovidersv1nodeslometadata)
  * tier `string`: Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty.

### Instance
* Instance `object`: A Cloud Filestore instance.
  * createTime `string`: Output only. The time when the instance was created.
  * description `string`: The description of the instance (2048 characters or less).
  * etag `string`: Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
  * fileShares `array`: File system shares on the instance. For this version, only a single file share is supported.
    * items [FileShareConfig](#fileshareconfig)
  * labels `object`: Resource labels to represent user provided metadata.
  * name `string`: Output only. The resource name of the instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}.
  * networks `array`: VPC networks to which the instance is connected. For this version, only a single network is supported.
    * items [NetworkConfig](#networkconfig)
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY, REPAIRING, DELETING, ERROR, RESTORING): Output only. The instance state.
  * statusMessage `string`: Output only. Additional information about the instance state, if available.
  * tier `string` (values: TIER_UNSPECIFIED, STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD): The service tier of the instance.

### ListBackupsResponse
* ListBackupsResponse `object`: ListBackupsResponse is the result of ListBackupsRequest.
  * backups `array`: A list of backups in the project for the specified location. If the {location} value in the request is "-", the response contains a list of backups from all locations. If any location is unreachable, the response will only return backups in reachable locations and the "unreachable" field will be populated with a list of unreachable locations.
    * items [Backup](#backup)
  * nextPageToken `string`: The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListInstancesResponse
* ListInstancesResponse `object`: ListInstancesResponse is the result of ListInstancesRequest.
  * instances `array`: A list of instances in the project for the specified location. If the {location} value in the request is "-", the response contains a list of instances from all locations. If any location is unreachable, the response will only return instances in reachable locations and the "unreachable" field will be populated with a list of unreachable locations.
    * items [Instance](#instance)
  * nextPageToken `string`: The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### MaintenancePolicy
* MaintenancePolicy `object`: Defines policies to service maintenance events.
  * createTime `string`: Output only. The time when the resource was created.
  * description `string`: Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
  * labels `object`: Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
  * name `string`: Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`.
  * state `string` (values: STATE_UNSPECIFIED, READY, DELETING): Optional. The state of the policy.
  * updatePolicy [UpdatePolicy](#updatepolicy)
  * updateTime `string`: Output only. The time when the resource was updated.

### MaintenanceWindow
* MaintenanceWindow `object`: MaintenanceWindow definition.
  * dailyCycle [DailyCycle](#dailycycle)
  * weeklyCycle [WeeklyCycle](#weeklycycle)

### NetworkConfig
* NetworkConfig `object`: Network configuration for the instance.
  * ipAddresses `array`: Output only. IPv4 addresses in the format {octet 1}.{octet 2}.{octet 3}.{octet 4} or IPv6 addresses in the format {block 1}:{block 2}:{block 3}:{block 4}:{block 5}:{block 6}:{block 7}:{block 8}.
    * items `string`
  * modes `array`: Internet protocol versions for which the instance has IP addresses assigned. For this version, only MODE_IPV4 is supported.
    * items `string` (values: ADDRESS_MODE_UNSPECIFIED, MODE_IPV4)
  * network `string`: The name of the Google Compute Engine [VPC network](/compute/docs/networks-and-firewalls#networks) to which the instance is connected.
  * reservedIpRange `string`: A /29 CIDR block for Basic or a /23 CIDR block for High Scale in one of the [internal IP address ranges](https://www.arin.net/knowledge/address_filters.html) that identifies the range of IP addresses reserved for this instance. For example, 10.0.0.0/29 or 192.168.0.0/23. The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Cloud Filestore instances in the selected VPC network.

### NfsExportOptions
* NfsExportOptions `object`: NFS export options specifications.
  * accessMode `string` (values: ACCESS_MODE_UNSPECIFIED, READ_ONLY, READ_WRITE): Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE.
  * anonGid `string`: An integer representing the anonymous group id with a default value of 65534. Anon_gid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.
  * anonUid `string`: An integer representing the anonymous user id with a default value of 65534. Anon_uid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.
  * ipRanges `array`: List of either an IPv4 addresses in the format {octet 1}.{octet 2}.{octet 3}.{octet 4} or CIDR ranges in the format {octet 1}.{octet 2}.{octet 3}.{octet 4}/{mask size} which may mount the file share. Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned. The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.
    * items `string`
  * squashMode `string` (values: SQUASH_MODE_UNSPECIFIED, NO_ROOT_SQUASH, ROOT_SQUASH): Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OperationMetadata
* OperationMetadata `object`: Represents the metadata of the long-running operation.
  * apiVersion `string`: [Output only] API version used to start the operation.
  * cancelRequested `boolean`: [Output only] Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
  * createTime `string`: [Output only] The time the operation was created.
  * endTime `string`: [Output only] The time the operation finished running.
  * statusDetail `string`: [Output only] Human-readable status of the operation, if any.
  * target `string`: [Output only] Server-defined resource path for the target of the operation.
  * verb `string`: [Output only] Name of the verb executed by the operation.

### RestoreInstanceRequest
* RestoreInstanceRequest `object`: RestoreInstanceRequest restores an existing instances's file share from a snapshot or backup.
  * fileShare `string`: Required. Name of the file share in the Cloud Filestore instance that the snapshot is being restored to.
  * sourceBackup `string`: The resource name of the backup, in the format projects/{project_id}/locations/{location_id}/backups/{backup_id}.
  * sourceSnapshot `string`: The resource name of the snapshot, in the format projects/{project_id}/locations/{location_id}/snapshots/{snapshot_id}.

### Schedule
* Schedule `object`: Configure the schedule.
  * day `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY): Allows to define schedule that runs specified day of the week.
  * duration `string`: Output only. Duration of the time window, set by service producer.
  * startTime [TimeOfDay](#timeofday)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TimeOfDay
* TimeOfDay `object`: Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

### UpdatePolicy
* UpdatePolicy `object`: Maintenance policy applicable to instance updates.
  * channel `string` (values: UPDATE_CHANNEL_UNSPECIFIED, EARLIER, LATER): Optional. Relative scheduling channel applied to resource.
  * denyMaintenancePeriods `array`: Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. User can specify zero or more non-overlapping deny periods. For V1, Maximum number of deny_maintenance_periods is expected to be one.
    * items [DenyMaintenancePeriod](#denymaintenanceperiod)
  * window [MaintenanceWindow](#maintenancewindow)

### WeeklyCycle
* WeeklyCycle `object`: Time window specified for weekly operations.
  * schedule `array`: User can specify multiple windows in a week. Minimum of 1 window.
    * items [Schedule](#schedule)


