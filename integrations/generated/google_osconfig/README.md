# @datafire/google_osconfig

Client library for OS Config API

## Installation and Usage
```bash
npm install --save @datafire/google_osconfig
```
```js
let google_osconfig = require('@datafire/google_osconfig').create({
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

OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_osconfig.oauthCallback({
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
google_osconfig.oauthRefresh(null, context)
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

### osconfig.projects.zones.instances.lookupEffectiveGuestPolicy
Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.


```js
google_osconfig.osconfig.projects.zones.instances.lookupEffectiveGuestPolicy({
  "instance": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Required. The VM instance whose policies are being looked up.
  * body [LookupEffectiveGuestPolicyRequest](#lookupeffectiveguestpolicyrequest)
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
* output [EffectiveGuestPolicy](#effectiveguestpolicy)

### osconfig.projects.patchDeployments.delete
Delete an OS Config patch deployment.


```js
google_osconfig.osconfig.projects.patchDeployments.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.
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

### osconfig.projects.patchJobs.get
Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.


```js
google_osconfig.osconfig.projects.patchJobs.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the patch in the form `projects/*/patchJobs/*`
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
* output [PatchJob](#patchjob)

### osconfig.projects.guestPolicies.patch
Update an OS Config guest policy.


```js
google_osconfig.osconfig.projects.guestPolicies.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.
  * updateMask `string`: Field mask that controls which fields of the guest policy should be updated.
  * body [GuestPolicy](#guestpolicy)
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
* output [GuestPolicy](#guestpolicy)

### osconfig.projects.patchJobs.cancel
Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.


```js
google_osconfig.osconfig.projects.patchJobs.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the patch in the form `projects/*/patchJobs/*`
  * body [CancelPatchJobRequest](#cancelpatchjobrequest)
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
* output [PatchJob](#patchjob)

### osconfig.projects.guestPolicies.list
Get a page of OS Config guest policies.


```js
google_osconfig.osconfig.projects.guestPolicies.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.
  * pageSize `integer`: The maximum number of guest policies to return.
  * pageToken `string`: A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from.
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
* output [ListGuestPoliciesResponse](#listguestpoliciesresponse)

### osconfig.projects.guestPolicies.create
Create an OS Config guest policy.


```js
google_osconfig.osconfig.projects.guestPolicies.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.
  * guestPolicyId `string`: Required. The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
  * body [GuestPolicy](#guestpolicy)
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
* output [GuestPolicy](#guestpolicy)

### osconfig.projects.patchJobs.instanceDetails.list
Get a list of instance details for a given patch job.


```js
google_osconfig.osconfig.projects.patchJobs.instanceDetails.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent for the instances are in the form of `projects/*/patchJobs/*`.
  * filter `string`: A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
  * pageSize `integer`: The maximum number of instance details records to return. Default is 100.
  * pageToken `string`: A pagination token returned from a previous call that indicates where this listing should continue from.
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
* output [ListPatchJobInstanceDetailsResponse](#listpatchjobinstancedetailsresponse)

### osconfig.projects.patchDeployments.list
Get a page of OS Config patch deployments.


```js
google_osconfig.osconfig.projects.patchDeployments.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the parent in the form `projects/*`.
  * pageSize `integer`: Optional. The maximum number of patch deployments to return. Default is 100.
  * pageToken `string`: Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
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
* output [ListPatchDeploymentsResponse](#listpatchdeploymentsresponse)

### osconfig.projects.patchDeployments.create
Create an OS Config patch deployment.


```js
google_osconfig.osconfig.projects.patchDeployments.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project to apply this patch deployment to in the form `projects/*`.
  * patchDeploymentId `string`: Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
  * body [PatchDeployment](#patchdeployment)
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
* output [PatchDeployment](#patchdeployment)

### osconfig.projects.patchJobs.list
Get a list of patch jobs.


```js
google_osconfig.osconfig.projects.patchJobs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. In the form of `projects/*`
  * filter `string`: If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
  * pageSize `integer`: The maximum number of instance status to return.
  * pageToken `string`: A pagination token returned from a previous call that indicates where this listing should continue from.
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
* output [ListPatchJobsResponse](#listpatchjobsresponse)

### osconfig.projects.patchJobs.execute
Patch VM instances by creating and running a patch job.


```js
google_osconfig.osconfig.projects.patchJobs.execute({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project in which to run this patch in the form `projects/*`
  * body [ExecutePatchJobRequest](#executepatchjobrequest)
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
* output [PatchJob](#patchjob)



## Definitions

### AptRepository
* AptRepository `object`: Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
  * components `array`: Required. List of components for this repository. Must contain at least one item.
    * items `string`
  * archiveType `string` (values: ARCHIVE_TYPE_UNSPECIFIED, DEB, DEB_SRC): Type of archive files in this repository. The default behavior is DEB.
  * distribution `string`: Required. Distribution of this repository.
  * gpgKey `string`: URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy.
  * uri `string`: Required. URI for this repository.

### AptSettings
* AptSettings `object`: Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
  * excludes `array`: List of packages to exclude from update. These packages will be excluded
    * items `string`
  * exclusivePackages `array`: An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields.
    * items `string`
  * type `string` (values: TYPE_UNSPECIFIED, DIST, UPGRADE): By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead.

### Assignment
* Assignment `object`: An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
  * groupLabels `array`: Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example "env=prod or env=staging".
    * items [AssignmentGroupLabel](#assignmentgrouplabel)
  * instanceNamePrefixes `array`: Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix="prod-". Only supported for project-level policies.
    * items `string`
  * instances `array`: Targets any of the instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`. Instance targeting is uncommon and is supported to facilitate the management of changes by the instance or to target specific VM instances for development and testing. Only supported for project-level policies and must reference instances within this project.
    * items `string`
  * osTypes `array`: Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included.
    * items [AssignmentOsType](#assignmentostype)
  * zones `array`: Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.
    * items `string`

### AssignmentGroupLabel
* AssignmentGroupLabel `object`: Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".
  * labels `object`: Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.

### AssignmentOsType
* AssignmentOsType `object`: Defines the criteria for selecting VM Instances by OS type.
  * osArchitecture `string`: Targets VM instances with OS Inventory enabled and having the following OS architecture.
  * osShortName `string`: Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".
  * osVersion `string`: Targets VM instances with OS Inventory enabled and having the following following OS version.

### CancelPatchJobRequest
* CancelPatchJobRequest `object`: Message for canceling a patch job.

### EffectiveGuestPolicy
* EffectiveGuestPolicy `object`: The effective guest policy that applies to a VM instance.
  * packageRepositories `array`: List of package repository configurations assigned to the VM instance.
    * items [EffectiveGuestPolicySourcedPackageRepository](#effectiveguestpolicysourcedpackagerepository)
  * packages `array`: List of package configurations assigned to the VM instance.
    * items [EffectiveGuestPolicySourcedPackage](#effectiveguestpolicysourcedpackage)
  * softwareRecipes `array`: List of recipes assigned to the VM instance.
    * items [EffectiveGuestPolicySourcedSoftwareRecipe](#effectiveguestpolicysourcedsoftwarerecipe)

### EffectiveGuestPolicySourcedPackage
* EffectiveGuestPolicySourcedPackage `object`: A guest policy package including its source.
  * package [Package](#package)
  * source `string`: Name of the guest policy providing this config.

### EffectiveGuestPolicySourcedPackageRepository
* EffectiveGuestPolicySourcedPackageRepository `object`: A guest policy package repository including its source.
  * packageRepository [PackageRepository](#packagerepository)
  * source `string`: Name of the guest policy providing this config.

### EffectiveGuestPolicySourcedSoftwareRecipe
* EffectiveGuestPolicySourcedSoftwareRecipe `object`: A guest policy recipe including its source.
  * softwareRecipe [SoftwareRecipe](#softwarerecipe)
  * source `string`: Name of the guest policy providing this config.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ExecStep
* ExecStep `object`: A step that runs an executable for a PatchJob.
  * linuxExecStepConfig [ExecStepConfig](#execstepconfig)
  * windowsExecStepConfig [ExecStepConfig](#execstepconfig)

### ExecStepConfig
* ExecStepConfig `object`: Common configurations for an ExecStep.
  * allowedSuccessCodes `array`: Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
    * items `integer`
  * gcsObject [GcsObject](#gcsobject)
  * interpreter `string` (values: INTERPRETER_UNSPECIFIED, SHELL, POWERSHELL): The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
  * localPath `string`: An absolute path to the executable on the VM.

### ExecutePatchJobRequest
* ExecutePatchJobRequest `object`: A request message to initiate patching across Compute Engine instances.
  * description `string`: Description of the patch job. Length of the description is limited to 1024 characters.
  * displayName `string`: Display name for this patch job. This does not have to be unique.
  * dryRun `boolean`: If this patch is a dry-run only, instances are contacted but will do nothing.
  * duration `string`: Duration of the patch job. After the duration ends, the patch job times out.
  * instanceFilter [PatchInstanceFilter](#patchinstancefilter)
  * patchConfig [PatchConfig](#patchconfig)
  * rollout [PatchRollout](#patchrollout)

### FixedOrPercent
* FixedOrPercent `object`: Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
  * fixed `integer`: Specifies a fixed value.
  * percent `integer`: Specifies the relative value defined as a percentage, which will be multiplied by a reference value.

### GcsObject
* GcsObject `object`: Google Cloud Storage object representation.
  * bucket `string`: Required. Bucket of the Google Cloud Storage object.
  * generationNumber `string`: Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  * object `string`: Required. Name of the Google Cloud Storage object.

### GooRepository
* GooRepository `object`: Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.
  * name `string`: Required. The name of the repository.
  * url `string`: Required. The url of the repository.

### GooSettings
* GooSettings `object`: Googet patching is performed by running `googet update`.

### GuestPolicy
* GuestPolicy `object`: An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
  * assignment [Assignment](#assignment)
  * createTime `string`: Output only. Time this guest policy was created.
  * description `string`: Description of the guest policy. Length of the description is limited to 1024 characters.
  * etag `string`: The etag for this guest policy. If this is provided on update, it must match the server's etag.
  * name `string`: Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.
  * packageRepositories `array`: A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available.
    * items [PackageRepository](#packagerepository)
  * packages `array`: The software packages to be managed by this policy.
    * items [Package](#package)
  * recipes `array`: A list of Recipes to install on the VM instance.
    * items [SoftwareRecipe](#softwarerecipe)
  * updateTime `string`: Output only. Last time this guest policy was updated.

### Inventory
* Inventory `object`: The inventory details of a VM.
  * items `object`: Inventory items related to the VM keyed by an opaque unique identifier for each inventory item. The identifier is unique to each distinct and addressable inventory item and will change, when there is a new package version.
  * osInfo [InventoryOsInfo](#inventoryosinfo)

### InventoryItem
* InventoryItem `object`: A single piece of inventory on a VM.
  * availablePackage [InventorySoftwarePackage](#inventorysoftwarepackage)
  * createTime `string`: When this inventory item was first detected.
  * id `string`: Identifier for this item, unique across items for this VM.
  * installedPackage [InventorySoftwarePackage](#inventorysoftwarepackage)
  * originType `string` (values: ORIGIN_TYPE_UNSPECIFIED, INVENTORY_REPORT): The origin of this inventory item.
  * type `string` (values: TYPE_UNSPECIFIED, INSTALLED_PACKAGE, AVAILABLE_PACKAGE): The specific type of inventory, correlating to its specific details.
  * updateTime `string`: When this inventory item was last modified.

### InventoryOsInfo
* InventoryOsInfo `object`: Operating system information for the VM.
  * architecture `string`: The system architecture of the operating system.
  * hostname `string`: The VM hostname.
  * kernelRelease `string`: The kernel release of the operating system.
  * kernelVersion `string`: The kernel version of the operating system.
  * longName `string`: The operating system long name. For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019 Datacenter'.
  * osconfigAgentVersion `string`: The current version of the OS Config agent running on the VM.
  * shortName `string`: The operating system short name. For example, 'windows' or 'debian'.
  * version `string`: The version of the operating system.

### InventorySoftwarePackage
* InventorySoftwarePackage `object`: Software package information of the operating system.
  * aptPackage [InventoryVersionedPackage](#inventoryversionedpackage)
  * cosPackage [InventoryVersionedPackage](#inventoryversionedpackage)
  * googetPackage [InventoryVersionedPackage](#inventoryversionedpackage)
  * qfePackage [InventoryWindowsQuickFixEngineeringPackage](#inventorywindowsquickfixengineeringpackage)
  * wuaPackage [InventoryWindowsUpdatePackage](#inventorywindowsupdatepackage)
  * yumPackage [InventoryVersionedPackage](#inventoryversionedpackage)
  * zypperPackage [InventoryVersionedPackage](#inventoryversionedpackage)
  * zypperPatch [InventoryZypperPatch](#inventoryzypperpatch)

### InventoryVersionedPackage
* InventoryVersionedPackage `object`: Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
  * architecture `string`: The system architecture this package is intended for.
  * packageName `string`: The name of the package.
  * version `string`: The version of the package.

### InventoryWindowsQuickFixEngineeringPackage
* InventoryWindowsQuickFixEngineeringPackage `object`: Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
  * caption `string`: A short textual description of the QFE update.
  * description `string`: A textual description of the QFE update.
  * hotFixId `string`: Unique identifier associated with a particular QFE update.
  * installTime `string`: Date that the QFE update was installed. Mapped from installed_on field.

### InventoryWindowsUpdatePackage
* InventoryWindowsUpdatePackage `object`: Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
  * categories `array`: The categories that are associated with this update package.
    * items [InventoryWindowsUpdatePackageWindowsUpdateCategory](#inventorywindowsupdatepackagewindowsupdatecategory)
  * description `string`: The localized description of the update package.
  * kbArticleIds `array`: A collection of Microsoft Knowledge Base article IDs that are associated with the update package.
    * items `string`
  * lastDeploymentChangeTime `string`: The last published date of the update, in (UTC) date and time.
  * moreInfoUrls `array`: A collection of URLs that provide more information about the update package.
    * items `string`
  * revisionNumber `integer`: The revision number of this update package.
  * supportUrl `string`: A hyperlink to the language-specific support information for the update.
  * title `string`: The localized title of the update package.
  * updateId `string`: Gets the identifier of an update package. Stays the same across revisions.

### InventoryWindowsUpdatePackageWindowsUpdateCategory
* InventoryWindowsUpdatePackageWindowsUpdateCategory `object`: Categories specified by the Windows Update.
  * id `string`: The identifier of the windows update category.
  * name `string`: The name of the windows update category.

### InventoryZypperPatch
* InventoryZypperPatch `object`: Details related to a Zypper Patch.
  * category `string`: The category of the patch.
  * patchName `string`: The name of the patch.
  * severity `string`: The severity specified for this patch
  * summary `string`: Any summary information provided about this patch.

### ListGuestPoliciesResponse
* ListGuestPoliciesResponse `object`: A response message for listing guest policies.
  * guestPolicies `array`: The list of GuestPolicies.
    * items [GuestPolicy](#guestpolicy)
  * nextPageToken `string`: A pagination token that can be used to get the next page of guest policies.

### ListPatchDeploymentsResponse
* ListPatchDeploymentsResponse `object`: A response message for listing patch deployments.
  * nextPageToken `string`: A pagination token that can be used to get the next page of patch deployments.
  * patchDeployments `array`: The list of patch deployments.
    * items [PatchDeployment](#patchdeployment)

### ListPatchJobInstanceDetailsResponse
* ListPatchJobInstanceDetailsResponse `object`: A response message for listing the instances details for a patch job.
  * nextPageToken `string`: A pagination token that can be used to get the next page of results.
  * patchJobInstanceDetails `array`: A list of instance status.
    * items [PatchJobInstanceDetails](#patchjobinstancedetails)

### ListPatchJobsResponse
* ListPatchJobsResponse `object`: A response message for listing patch jobs.
  * nextPageToken `string`: A pagination token that can be used to get the next page of results.
  * patchJobs `array`: The list of patch jobs.
    * items [PatchJob](#patchjob)

### LookupEffectiveGuestPolicyRequest
* LookupEffectiveGuestPolicyRequest `object`: A request message for getting the effective guest policy assigned to the instance.
  * osArchitecture `string`: Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.
  * osShortName `string`: Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.
  * osVersion `string`: Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance.

### MonthlySchedule
* MonthlySchedule `object`: Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
  * monthDay `integer`: Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc.
  * weekDayOfMonth [WeekDayOfMonth](#weekdayofmonth)

### OneTimeSchedule
* OneTimeSchedule `object`: Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
  * executeTime `string`: Required. The desired patch job execution time.

### Package
* Package `object`: Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3`
  * desiredState `string` (values: DESIRED_STATE_UNSPECIFIED, INSTALLED, UPDATED, REMOVED): The desired_state the agent should maintain for this package. The default is to ensure the package is installed.
  * manager `string` (values: MANAGER_UNSPECIFIED, ANY, APT, YUM, ZYPPER, GOO): Type of package manager that can be used to install this package. If a system does not have the package manager, the package is not installed or removed no error message is returned. By default, or if you specify `ANY`, the agent attempts to install and remove this package using the default package manager. This is useful when creating a policy that applies to different types of systems. The default behavior is ANY.
  * name `string`: Required. The name of the package. A package is uniquely identified for conflict validation by checking the package name and the manager(s) that the package targets.

### PackageRepository
* PackageRepository `object`: A package repository.
  * apt [AptRepository](#aptrepository)
  * goo [GooRepository](#goorepository)
  * yum [YumRepository](#yumrepository)
  * zypper [ZypperRepository](#zypperrepository)

### PatchConfig
* PatchConfig `object`: Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
  * apt [AptSettings](#aptsettings)
  * goo [GooSettings](#goosettings)
  * postStep [ExecStep](#execstep)
  * preStep [ExecStep](#execstep)
  * rebootConfig `string` (values: REBOOT_CONFIG_UNSPECIFIED, DEFAULT, ALWAYS, NEVER): Post-patch reboot settings.
  * windowsUpdate [WindowsUpdateSettings](#windowsupdatesettings)
  * yum [YumSettings](#yumsettings)
  * zypper [ZypperSettings](#zyppersettings)

### PatchDeployment
* PatchDeployment `object`: Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
  * createTime `string`: Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
  * description `string`: Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.
  * duration `string`: Optional. Duration of the patch. After the duration ends, the patch times out.
  * instanceFilter [PatchInstanceFilter](#patchinstancefilter)
  * lastExecuteTime `string`: Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
  * name `string`: Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.
  * oneTimeSchedule [OneTimeSchedule](#onetimeschedule)
  * patchConfig [PatchConfig](#patchconfig)
  * recurringSchedule [RecurringSchedule](#recurringschedule)
  * rollout [PatchRollout](#patchrollout)
  * updateTime `string`: Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

### PatchInstanceFilter
* PatchInstanceFilter `object`: A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
  * all `boolean`: Target all VM instances in the project. If true, no other criteria is permitted.
  * groupLabels `array`: Targets VM instances matching at least one of these label sets. This allows targeting of disparate groups, for example "env=prod or env=staging".
    * items [PatchInstanceFilterGroupLabel](#patchinstancefiltergrouplabel)
  * instanceNamePrefixes `array`: Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix="prod-".
    * items `string`
  * instances `array`: Targets any of the VM instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`, `projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`, or `https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`
    * items `string`
  * zones `array`: Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
    * items `string`

### PatchInstanceFilterGroupLabel
* PatchInstanceFilterGroupLabel `object`: Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web".
  * labels `object`: Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.

### PatchJob
* PatchJob `object`: A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
  * createTime `string`: Time this patch job was created.
  * description `string`: Description of the patch job. Length of the description is limited to 1024 characters.
  * displayName `string`: Display name for this patch job. This is not a unique identifier.
  * dryRun `boolean`: If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance.
  * duration `string`: Duration of the patch job. After the duration ends, the patch job times out.
  * errorMessage `string`: If this patch job failed, this message provides information about the failure.
  * instanceDetailsSummary [PatchJobInstanceDetailsSummary](#patchjobinstancedetailssummary)
  * instanceFilter [PatchInstanceFilter](#patchinstancefilter)
  * name `string`: Unique identifier for this patch job in the form `projects/*/patchJobs/*`
  * patchConfig [PatchConfig](#patchconfig)
  * patchDeployment `string`: Output only. Name of the patch deployment that created this patch job.
  * percentComplete `number`: Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete.
  * rollout [PatchRollout](#patchrollout)
  * state `string` (values: STATE_UNSPECIFIED, STARTED, INSTANCE_LOOKUP, PATCHING, SUCCEEDED, COMPLETED_WITH_ERRORS, CANCELED, TIMED_OUT): The current state of the PatchJob.
  * updateTime `string`: Last time this patch job was updated.

### PatchJobInstanceDetails
* PatchJobInstanceDetails `object`: Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).
  * attemptCount `string`: The number of times the agent that the agent attempts to apply the patch.
  * failureReason `string`: If the patch fails, this field provides the reason.
  * instanceSystemId `string`: The unique identifier for the instance. This identifier is defined by the server.
  * name `string`: The instance name in the form `projects/*/zones/*/instances/*`
  * state `string` (values: PATCH_STATE_UNSPECIFIED, PENDING, INACTIVE, NOTIFIED, STARTED, DOWNLOADING_PATCHES, APPLYING_PATCHES, REBOOTING, SUCCEEDED, SUCCEEDED_REBOOT_REQUIRED, FAILED, ACKED, TIMED_OUT, RUNNING_PRE_PATCH_STEP, RUNNING_POST_PATCH_STEP, NO_AGENT_DETECTED): Current state of instance patch.

### PatchJobInstanceDetailsSummary
* PatchJobInstanceDetailsSummary `object`: A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
  * ackedInstanceCount `string`: Number of instances that have acked and will start shortly.
  * applyingPatchesInstanceCount `string`: Number of instances that are applying patches.
  * downloadingPatchesInstanceCount `string`: Number of instances that are downloading patches.
  * failedInstanceCount `string`: Number of instances that failed.
  * inactiveInstanceCount `string`: Number of instances that are inactive.
  * noAgentDetectedInstanceCount `string`: Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service.
  * notifiedInstanceCount `string`: Number of instances notified about patch job.
  * pendingInstanceCount `string`: Number of instances pending patch job.
  * postPatchStepInstanceCount `string`: Number of instances that are running the post-patch step.
  * prePatchStepInstanceCount `string`: Number of instances that are running the pre-patch step.
  * rebootingInstanceCount `string`: Number of instances rebooting.
  * startedInstanceCount `string`: Number of instances that have started.
  * succeededInstanceCount `string`: Number of instances that have completed successfully.
  * succeededRebootRequiredInstanceCount `string`: Number of instances that require reboot.
  * timedOutInstanceCount `string`: Number of instances that exceeded the time out while applying the patch.

### PatchRollout
* PatchRollout `object`: Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
  * disruptionBudget [FixedOrPercent](#fixedorpercent)
  * mode `string` (values: MODE_UNSPECIFIED, ZONE_BY_ZONE, CONCURRENT_ZONES): Mode of the patch rollout.

### RecurringSchedule
* RecurringSchedule `object`: Sets the time for recurring patch deployments.
  * endTime `string`: Optional. The end time at which a recurring patch deployment schedule is no longer active.
  * frequency `string` (values: FREQUENCY_UNSPECIFIED, WEEKLY, MONTHLY): Required. The frequency unit of this recurring schedule.
  * lastExecuteTime `string`: Output only. The time the last patch job ran successfully.
  * monthly [MonthlySchedule](#monthlyschedule)
  * nextExecuteTime `string`: Output only. The time the next patch job is scheduled to run.
  * startTime `string`: Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.
  * timeOfDay [TimeOfDay](#timeofday)
  * timeZone [TimeZone](#timezone)
  * weekly [WeeklySchedule](#weeklyschedule)

### SoftwareRecipe
* SoftwareRecipe `object`: A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.
  * artifacts `array`: Resources available to be used in the steps in the recipe.
    * items [SoftwareRecipeArtifact](#softwarerecipeartifact)
  * desiredState `string` (values: DESIRED_STATE_UNSPECIFIED, INSTALLED, UPDATED, REMOVED): Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.
  * installSteps `array`: Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.
    * items [SoftwareRecipeStep](#softwarerecipestep)
  * name `string`: Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments.
  * updateSteps `array`: Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.
    * items [SoftwareRecipeStep](#softwarerecipestep)
  * version `string`: The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).

### SoftwareRecipeArtifact
* SoftwareRecipeArtifact `object`: Specifies a resource to be used in the recipe.
  * allowInsecure `boolean`: Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified.
  * gcs [SoftwareRecipeArtifactGcs](#softwarerecipeartifactgcs)
  * id `string`: Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id.
  * remote [SoftwareRecipeArtifactRemote](#softwarerecipeartifactremote)

### SoftwareRecipeArtifactGcs
* SoftwareRecipeArtifactGcs `object`: Specifies an artifact available as a Google Cloud Storage object.
  * bucket `string`: Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`.
  * generation `string`: Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`.
  * object `string`: Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`.

### SoftwareRecipeArtifactRemote
* SoftwareRecipeArtifactRemote `object`: Specifies an artifact available via some URI.
  * checksum `string`: Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps.
  * uri `string`: URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.

### SoftwareRecipeStep
* SoftwareRecipeStep `object`: An action that can be taken as part of installing or updating a recipe.
  * archiveExtraction [SoftwareRecipeStepExtractArchive](#softwarerecipestepextractarchive)
  * dpkgInstallation [SoftwareRecipeStepInstallDpkg](#softwarerecipestepinstalldpkg)
  * fileCopy [SoftwareRecipeStepCopyFile](#softwarerecipestepcopyfile)
  * fileExec [SoftwareRecipeStepExecFile](#softwarerecipestepexecfile)
  * msiInstallation [SoftwareRecipeStepInstallMsi](#softwarerecipestepinstallmsi)
  * rpmInstallation [SoftwareRecipeStepInstallRpm](#softwarerecipestepinstallrpm)
  * scriptRun [SoftwareRecipeStepRunScript](#softwarerecipesteprunscript)

### SoftwareRecipeStepCopyFile
* SoftwareRecipeStepCopyFile `object`: Copies the artifact to the specified path on the instance.
  * artifactId `string`: Required. The id of the relevant artifact in the recipe.
  * destination `string`: Required. The absolute path on the instance to put the file.
  * overwrite `boolean`: Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false.
  * permissions `string`: Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4

### SoftwareRecipeStepExecFile
* SoftwareRecipeStepExecFile `object`: Executes an artifact or local file.
  * allowedExitCodes `array`: Defaults to [0]. A list of possible return values that the program can return to indicate a success.
    * items `integer`
  * args `array`: Arguments to be passed to the provided executable.
    * items `string`
  * artifactId `string`: The id of the relevant artifact in the recipe.
  * localPath `string`: The absolute path of the file on the local filesystem.

### SoftwareRecipeStepExtractArchive
* SoftwareRecipeStepExtractArchive `object`: Extracts an archive of the type specified in the specified directory.
  * artifactId `string`: Required. The id of the relevant artifact in the recipe.
  * destination `string`: Directory to extract archive to. Defaults to `/` on Linux or `C:\` on Windows.
  * type `string` (values: ARCHIVE_TYPE_UNSPECIFIED, TAR, TAR_GZIP, TAR_BZIP, TAR_LZMA, TAR_XZ, ZIP): Required. The type of the archive to extract.

### SoftwareRecipeStepInstallDpkg
* SoftwareRecipeStepInstallDpkg `object`: Installs a deb via dpkg.
  * artifactId `string`: Required. The id of the relevant artifact in the recipe.

### SoftwareRecipeStepInstallMsi
* SoftwareRecipeStepInstallMsi `object`: Installs an MSI file.
  * allowedExitCodes `array`: Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
    * items `integer`
  * artifactId `string`: Required. The id of the relevant artifact in the recipe.
  * flags `array`: The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag).
    * items `string`

### SoftwareRecipeStepInstallRpm
* SoftwareRecipeStepInstallRpm `object`: Installs an rpm file via the rpm utility.
  * artifactId `string`: Required. The id of the relevant artifact in the recipe.

### SoftwareRecipeStepRunScript
* SoftwareRecipeStepRunScript `object`: Runs a script through an interpreter.
  * allowedExitCodes `array`: Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
    * items `integer`
  * interpreter `string` (values: INTERPRETER_UNSPECIFIED, SHELL, POWERSHELL): The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
  * script `string`: Required. The shell script to be executed.

### TimeOfDay
* TimeOfDay `object`: Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

### TimeZone
* TimeZone `object`: Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
  * id `string`: IANA Time Zone Database time zone, e.g. "America/New_York".
  * version `string`: Optional. IANA Time Zone Database version number, e.g. "2019a".

### WeekDayOfMonth
* WeekDayOfMonth `object`: Represents one week day in a month. An example is "the 4th Sunday".
  * dayOfWeek `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY): Required. A day of the week.
  * weekOrdinal `integer`: Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.

### WeeklySchedule
* WeeklySchedule `object`: Represents a weekly schedule.
  * dayOfWeek `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY): Required. Day of the week.

### WindowsUpdateSettings
* WindowsUpdateSettings `object`: Windows patching is performed using the Windows Update Agent.
  * classifications `array`: Only apply updates of these windows update classifications. If empty, all updates are applied.
    * items `string` (values: CLASSIFICATION_UNSPECIFIED, CRITICAL, SECURITY, DEFINITION, DRIVER, FEATURE_PACK, SERVICE_PACK, TOOL, UPDATE_ROLLUP, UPDATE)
  * excludes `array`: List of KBs to exclude from update.
    * items `string`
  * exclusivePatches `array`: An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations.
    * items `string`

### YumRepository
* YumRepository `object`: Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.
  * baseUrl `string`: Required. The location of the repository directory.
  * displayName `string`: The display name of the repository.
  * gpgKeys `array`: URIs of GPG keys.
    * items `string`
  * id `string`: Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.

### YumSettings
* YumSettings `object`: Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
  * security `boolean`: Adds the `--security` flag to `yum update`. Not supported on all platforms.
  * excludes `array`: List of packages to exclude from update. These packages are excluded by using the yum `--exclude` flag.
    * items `string`
  * exclusivePackages `array`: An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields.
    * items `string`
  * minimal `boolean`: Will cause patch to run `yum update-minimal` instead.

### ZypperRepository
* ZypperRepository `object`: Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.
  * baseUrl `string`: Required. The location of the repository directory.
  * displayName `string`: The display name of the repository.
  * gpgKeys `array`: URIs of GPG keys.
    * items `string`
  * id `string`: Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.

### ZypperSettings
* ZypperSettings `object`: Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
  * categories `array`: Install only patches with these categories. Common categories include security, recommended, and feature.
    * items `string`
  * excludes `array`: List of patches to exclude from update.
    * items `string`
  * exclusivePatches `array`: An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command. This field must not be used with any other patch configuration fields.
    * items `string`
  * severities `array`: Install only patches with these severities. Common severities include critical, important, moderate, and low.
    * items `string`
  * withOptional `boolean`: Adds the `--with-optional` flag to `zypper patch`.
  * withUpdate `boolean`: Adds the `--with-update` flag, to `zypper patch`.


