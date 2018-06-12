# @datafire/google_androidmanagement

Client library for Android Management

## Installation and Usage
```bash
npm install --save @datafire/google_androidmanagement
```
```js
let google_androidmanagement = require('@datafire/google_androidmanagement').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_androidmanagement.signupUrls.create({}).then(data => {
  console.log(data);
});
```

## Description

The Android Management API provides remote enterprise management of Android devices and apps.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_androidmanagement.oauthCallback({
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
google_androidmanagement.oauthRefresh(null, context)
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

### enterprises.create
Creates an enterprise. This is the last step in the enterprise signup flow.


```js
google_androidmanagement.enterprises.create({}, context)
```

#### Input
* input `object`
  * body [Enterprise](#enterprise)
  * enterpriseToken `string`: The enterprise token appended to the callback URL.
  * projectId `string`: The ID of the Google Cloud Platform project which will own the enterprise.
  * signupUrlName `string`: The name of the SignupUrl used to sign up for the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Enterprise](#enterprise)

### signupUrls.create
Creates an enterprise signup URL.


```js
google_androidmanagement.signupUrls.create({}, context)
```

#### Input
* input `object`
  * callbackUrl `string`: The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
  * projectId `string`: The ID of the Google Cloud Platform project which will own the enterprise.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [SignupUrl](#signupurl)

### enterprises.enrollmentTokens.delete
Deletes an enrollment token. This operation invalidates the token, preventing its future use.


```js
google_androidmanagement.enterprises.enrollmentTokens.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### enterprises.applications.get
Gets info about an application.


```js
google_androidmanagement.enterprises.applications.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * languageCode `string`: The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
  * name **required** `string`: The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Application](#application)

### enterprises.policies.patch
Updates or creates a policy.


```js
google_androidmanagement.enterprises.policies.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [Policy](#policy)
  * name **required** `string`: The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.
  * updateMask `string`: The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Policy](#policy)

### enterprises.devices.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.


```js
google_androidmanagement.enterprises.devices.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### enterprises.devices.issueCommand
Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.


```js
google_androidmanagement.enterprises.devices.issueCommand({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [Command](#command)
  * name **required** `string`: The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### enterprises.devices.list
Lists devices for a given enterprise.


```js
google_androidmanagement.enterprises.devices.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The requested page size. The actual page size may be fixed to a min or max value.
  * pageToken `string`: A token identifying a page of results returned by the server.
  * parent **required** `string`: The name of the enterprise in the form enterprises/{enterpriseId}.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListDevicesResponse](#listdevicesresponse)

### enterprises.enrollmentTokens.create
Creates an enrollment token for a given enterprise.


```js
google_androidmanagement.enterprises.enrollmentTokens.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [EnrollmentToken](#enrollmenttoken)
  * parent **required** `string`: The name of the enterprise in the form enterprises/{enterpriseId}.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [EnrollmentToken](#enrollmenttoken)

### enterprises.policies.list
Lists policies for a given enterprise.


```js
google_androidmanagement.enterprises.policies.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The requested page size. The actual page size may be fixed to a min or max value.
  * pageToken `string`: A token identifying a page of results returned by the server.
  * parent **required** `string`: The name of the enterprise in the form enterprises/{enterpriseId}.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListPoliciesResponse](#listpoliciesresponse)

### enterprises.webTokens.create
Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.


```js
google_androidmanagement.enterprises.webTokens.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [WebToken](#webtoken)
  * parent **required** `string`: The name of the enterprise in the form enterprises/{enterpriseId}.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [WebToken](#webtoken)



## Definitions

### AlwaysOnVpnPackage
* AlwaysOnVpnPackage `object`: Configuration for an always-on VPN connection.
  * lockdownEnabled `boolean`: Disallows networking when the VPN is not connected.
  * packageName `string`: The package name of the VPN app.

### ApiLevelCondition
* ApiLevelCondition `object`: A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.
  * minApiLevel `integer`: The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero.

### Application
* Application `object`: Information about an app.
  * managedProperties `array`: The set of managed properties available to be pre-configured for the app.
    * items [ManagedProperty](#managedproperty)
  * name `string`: The name of the app in the form enterprises/{enterpriseId}/applications/{package_name}.
  * permissions `array`: The permissions required by the app.
    * items [ApplicationPermission](#applicationpermission)
  * title `string`: The title of the app. Localized.

### ApplicationEvent
* ApplicationEvent `object`: An app-related event.
  * createTime `string`: The creation time of the event.
  * eventType `string` (values: APPLICATION_EVENT_TYPE_UNSPECIFIED, INSTALLED, CHANGED, DATA_CLEARED, REMOVED, REPLACED, RESTARTED, PINNED, UNPINNED): App event type.

### ApplicationPermission
* ApplicationPermission `object`: A permission required by the app.
  * description `string`: A longer description of the permission, providing more detail on what it affects. Localized.
  * name `string`: The name of the permission. Localized.
  * permissionId `string`: An opaque string uniquely identifying the permission. Not localized.

### ApplicationPolicy
* ApplicationPolicy `object`: Policy for an individual app.
  * defaultPermissionPolicy `string` (values: PERMISSION_POLICY_UNSPECIFIED, PROMPT, GRANT, DENY): The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps.
  * delegatedScopes `array`: The scopes delegated to the app from Android Device Policy.
    * items `string` (values: DELEGATED_SCOPE_UNSPECIFIED, CERT_INSTALL, MANAGED_CONFIGURATIONS, BLOCK_UNINSTALL, PERMISSION_GRANT, PACKAGE_ACCESS, ENABLE_SYSTEM_APP)
  * disabled `boolean`: Whether the app should be disabled, but app data is preserved.
  * installType `string` (values: INSTALL_TYPE_UNSPECIFIED, PREINSTALLED, FORCE_INSTALLED): The type of installation to perform.
  * lockTaskAllowed `boolean`: Whether the app is allowed to lock itself in full-screen mode.
  * managedConfiguration `object`: Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: <table> <tr><td><i>type</i></td><td><i>JSON value</i></td></tr> <tr><td>BOOL</td><td>true or false</td></tr> <tr><td>STRING</td><td>string</td></tr> <tr><td>INTEGER</td><td>number</td></tr> <tr><td>CHOICE</td><td>string</td></tr> <tr><td>MULTISELECT</td><td>array of strings</td></tr> <tr><td>HIDDEN</td><td>string</td></tr> <tr><td>BUNDLE_ARRAY</td><td>array of objects</td></tr> </table>
  * minimumVersionCode `integer`: The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy.
  * packageName `string`: The package name of the app. For example, com.google.android.youtube for the YouTube app.
  * permissionGrants `array`: Explicit permission grants or denials for the app. These values override the default_permission_policy and permission_grants which apply to all apps.
    * items [PermissionGrant](#permissiongrant)

### ApplicationReport
* ApplicationReport `object`: Information reported about an installed app.
  * applicationSource `string` (values: APPLICATION_SOURCE_UNSPECIFIED, SYSTEM_APP_FACTORY_VERSION, SYSTEM_APP_UPDATED_VERSION, INSTALLED_FROM_PLAY_STORE): The source of the package.
  * displayName `string`: The display name of the app.
  * events `array`: List of app events. The most recent 20 events are stored in the list.
    * items [ApplicationEvent](#applicationevent)
  * installerPackageName `string`: The package name of the app that installed this app.
  * packageName `string`: Package name of the app.
  * packageSha256Hash `string`: The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number.
  * signingKeyCertFingerprints `array`: The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number.
    * items `string`
  * state `string` (values: INSTALLED, REMOVED): Application state.
  * versionCode `integer`: The app version code, which can be used to determine whether one version is more recent than another.
  * versionName `string`: The app version as displayed to the user.

### ChoosePrivateKeyRule
* ChoosePrivateKeyRule `object`: A rule for automatically choosing a private key and certificate to authenticate the device to a server.
  * packageNames `array`: The package names for which outgoing requests are subject to this rule. If no package names are specified, then the rule applies to all packages. For each package name listed, the rule applies to that package and all other packages that shared the same Android UID. The SHA256 hash of the signing key signatures of each package_name will be verified against those provided by Play
    * items `string`
  * privateKeyAlias `string`: The alias of the private key to be used.
  * urlPattern `string`: The URL pattern to match against the URL of the outgoing request. The pattern may contain asterisk (*) wildcards. Any URL is matched if unspecified.

### Command
* Command `object`: A command.
  * createTime `string`: The timestamp at which the command was created. The timestamp is automatically generated by the server.
  * duration `string`: The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration.
  * errorCode `string` (values: COMMAND_ERROR_CODE_UNSPECIFIED, UNKNOWN, API_LEVEL, MANAGEMENT_MODE, INVALID_VALUE, UNSUPPORTED): If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller.
  * newPassword `string`: For commands of type RESET_PASSWORD, optionally specifies the new password.
  * resetPasswordFlags `array`: For commands of type RESET_PASSWORD, optionally specifies flags.
    * items `string` (values: RESET_PASSWORD_FLAG_UNSPECIFIED, REQUIRE_ENTRY, DO_NOT_ASK_CREDENTIALS_ON_BOOT, LOCK_NOW)
  * type `string` (values: COMMAND_TYPE_UNSPECIFIED, LOCK, RESET_PASSWORD, REBOOT): The type of the command.
  * userName `string`: The resource name of the user that owns the device in the form enterprises/{enterpriseId}/users/{userId}. This is automatically generated by the server based on the device the command is sent to.

### ComplianceRule
* ComplianceRule `object`: A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.
  * apiLevelCondition [ApiLevelCondition](#apilevelcondition)
  * disableApps `boolean`: If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed.
  * nonComplianceDetailCondition [NonComplianceDetailCondition](#noncompliancedetailcondition)

### Device
* Device `object`: A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.
  * apiLevel `integer`: The API level of the Android platform version running on the device.
  * applicationReports `array`: Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device's policy.
    * items [ApplicationReport](#applicationreport)
  * appliedPolicyName `string`: The name of the policy currently applied to the device.
  * appliedPolicyVersion `string`: The version of the policy currently applied to the device.
  * appliedState `string` (values: DEVICE_STATE_UNSPECIFIED, ACTIVE, DISABLED, DELETED, PROVISIONING): The state currently applied to the device.
  * deviceSettings [DeviceSettings](#devicesettings)
  * disabledReason [UserFacingMessage](#userfacingmessage)
  * displays `array`: Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device's policy.
    * items [Display](#display)
  * enrollmentTime `string`: The time of device enrollment.
  * enrollmentTokenData `string`: If the device was enrolled with an enrollment token with additional data provided, this field contains that data.
  * enrollmentTokenName `string`: If the device was enrolled with an enrollment token, this field contains the name of the token.
  * hardwareInfo [HardwareInfo](#hardwareinfo)
  * hardwareStatusSamples `array`: Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device's policy.
    * items [HardwareStatus](#hardwarestatus)
  * lastPolicyComplianceReportTime `string`: The last time the device sent a policy compliance report.
  * lastPolicySyncTime `string`: The last time the device fetched its policy.
  * lastStatusReportTime `string`: The last time the device sent a status report.
  * memoryEvents `array`: Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device's policy.
    * items [MemoryEvent](#memoryevent)
  * memoryInfo [MemoryInfo](#memoryinfo)
  * name `string`: The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
  * networkInfo [NetworkInfo](#networkinfo)
  * nonComplianceDetails `array`: Details about policy settings that the device is not compliant with.
    * items [NonComplianceDetail](#noncompliancedetail)
  * policyCompliant `boolean`: Whether the device is compliant with its policy.
  * policyName `string`: The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred.
  * powerManagementEvents `array`: Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device's policy.
    * items [PowerManagementEvent](#powermanagementevent)
  * previousDeviceNames `array`: If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order.
    * items `string`
  * softwareInfo [SoftwareInfo](#softwareinfo)
  * state `string` (values: DEVICE_STATE_UNSPECIFIED, ACTIVE, DISABLED, DELETED, PROVISIONING): The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete.
  * userName `string`: The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}.

### DeviceSettings
* DeviceSettings `object`: Information about security related device settings on device.
  * adbEnabled `boolean`: Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device.
  * developmentSettingsEnabled `boolean`: Whether developer mode is enabled on the device.
  * encryptionStatus `string` (values: ENCRYPTION_STATUS_UNSPECIFIED, UNSUPPORTED, INACTIVE, ACTIVATING, ACTIVE, ACTIVE_DEFAULT_KEY, ACTIVE_PER_USER): Encryption status from DevicePolicyManager.
  * isDeviceSecure `boolean`: Whether the device is secured with PIN/password.
  * isEncrypted `boolean`: Whether the storage encryption is enabled.
  * unknownSourcesEnabled `boolean`: Whether installing apps from unknown sources is enabled.
  * verifyAppsEnabled `boolean`: Whether Verify Apps (Google Play Protect (https://support.google.com/googleplay/answer/2812853)) is enabled on the device.

### Display
* Display `object`: Device display information.
  * density `integer`: Display density expressed as dots-per-inch.
  * displayId `integer`: Unique display id.
  * height `integer`: Display height in pixels.
  * name `string`: Name of the display.
  * refreshRate `integer`: Refresh rate of the display in frames per second.
  * state `string` (values: DISPLAY_STATE_UNSPECIFIED, OFF, ON, DOZE, SUSPENDED): State of the display.
  * width `integer`: Display width in pixels.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:

### EnrollmentToken
* EnrollmentToken `object`: An enrollment token.
  * additionalData `string`: Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail.
  * duration `string`: The length of time the enrollment token is valid, ranging from 1 minute to 30 days. If not specified, the default duration is 1 hour.
  * expirationTimestamp `string`: The expiration time of the token. This is a read-only field generated by the server.
  * name `string`: The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.
  * policyName `string`: The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred.
  * qrCode `string`: A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON.
  * value `string`: The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server.

### Enterprise
* Enterprise `object`: The configuration applied to an enterprise.
  * appAutoApprovalEnabled `boolean`: Deprecated and unused.
  * enabledNotificationTypes `array`: The types of Google Pub/Sub notifications enabled for the enterprise.
    * items `string` (values: NOTIFICATION_TYPE_UNSPECIFIED, ENROLLMENT, COMPLIANCE_REPORT, STATUS_REPORT, COMMAND)
  * enterpriseDisplayName `string`: The name of the enterprise displayed to users.
  * logo [ExternalData](#externaldata)
  * name `string`: The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}.
  * primaryColor `integer`: A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where the value of each component is between 0 and 255, inclusive.
  * pubsubTopic `string`: The topic that Cloud Pub/Sub notifications are published to, in the form projects/{project}/topics/{topic}. This field is only required if Pub/Sub notifications are enabled.
  * termsAndConditions `array`: Terms and conditions that must be accepted when provisioning a device for this enterprise. A page of terms is generated for each value in this list.
    * items [TermsAndConditions](#termsandconditions)

### ExternalData
* ExternalData `object`: Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.
  * sha256Hash `string`: The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data.
  * url `string`: The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL.

### HardwareInfo
* HardwareInfo `object`: Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
  * batteryShutdownTemperatures `array`: Battery shutdown temperature thresholds in Celsius for each battery on the device.
    * items `number`
  * batteryThrottlingTemperatures `array`: Battery throttling temperature thresholds in Celsius for each battery on the device.
    * items `number`
  * brand `string`: Brand of the device. For example, Google.
  * cpuShutdownTemperatures `array`: CPU shutdown temperature thresholds in Celsius for each CPU on the device.
    * items `number`
  * cpuThrottlingTemperatures `array`: CPU throttling temperature thresholds in Celsius for each CPU on the device.
    * items `number`
  * deviceBasebandVersion `string`: Baseband version. For example, MDM9625_104662.22.05.34p.
  * gpuShutdownTemperatures `array`: GPU shutdown temperature thresholds in Celsius for each GPU on the device.
    * items `number`
  * gpuThrottlingTemperatures `array`: GPU throttling temperature thresholds in Celsius for each GPU on the device.
    * items `number`
  * hardware `string`: Name of the hardware. For example, Angler.
  * manufacturer `string`: Manufacturer. For example, Motorola.
  * model `string`: The model of the device. For example, Asus Nexus 7.
  * serialNumber `string`: The device serial number.
  * skinShutdownTemperatures `array`: Device skin shutdown temperature thresholds in Celsius.
    * items `number`
  * skinThrottlingTemperatures `array`: Device skin throttling temperature thresholds in Celsius.
    * items `number`

### HardwareStatus
* HardwareStatus `object`: Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.
  * batteryTemperatures `array`: Current battery temperatures in Celsius for each battery on the device.
    * items `number`
  * cpuTemperatures `array`: Current CPU temperatures in Celsius for each CPU on the device.
    * items `number`
  * cpuUsages `array`: CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system.
    * items `number`
  * createTime `string`: The time the measurements were taken.
  * fanSpeeds `array`: Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system.
    * items `number`
  * gpuTemperatures `array`: Current GPU temperatures in Celsius for each GPU on the device.
    * items `number`
  * skinTemperatures `array`: Current device skin temperatures in Celsius.
    * items `number`

### ListDevicesResponse
* ListDevicesResponse `object`: Response to a request to list devices for a given enterprise.
  * devices `array`: The list of devices.
    * items [Device](#device)
  * nextPageToken `string`: If there are more results, a token to retrieve next page of results.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListPoliciesResponse
* ListPoliciesResponse `object`: Response to a request to list policies for a given enterprise.
  * nextPageToken `string`: If there are more results, a token to retrieve next page of results.
  * policies `array`: The list of policies.
    * items [Policy](#policy)

### ManagedProperty
* ManagedProperty `object`: Managed property.
  * description `string`: A longer description of the property, providing more detail of what it affects. Localized.
  * entries `array`: For CHOICE or MULTISELECT properties, the list of possible entries.
    * items [ManagedPropertyEntry](#managedpropertyentry)
  * key `string`: The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname".
  * nestedProperties `array`: For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep.
    * items [ManagedProperty](#managedproperty)
  * title `string`: The name of the property. Localized.
  * type `string` (values: MANAGED_PROPERTY_TYPE_UNSPECIFIED, BOOL, STRING, INTEGER, CHOICE, MULTISELECT, HIDDEN, BUNDLE_ARRAY): The type of the property.

### ManagedPropertyEntry
* ManagedPropertyEntry `object`: An entry of a managed property.
  * name `string`: The human-readable name of the value. Localized.
  * value `string`: The machine-readable value of the entry, which should be used in the configuration. Not localized.

### MemoryEvent
* MemoryEvent `object`: An event related to memory and storage measurements.
  * byteCount `string`: The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium.
  * createTime `string`: The creation time of the event.
  * eventType `string` (values: MEMORY_EVENT_TYPE_UNSPECIFIED, RAM_MEASURED, INTERNAL_STORAGE_MEASURED, EXTERNAL_STORAGE_DETECTED, EXTERNAL_STORAGE_REMOVED, EXTERNAL_STORAGE_MEASURED): Event type.

### MemoryInfo
* MemoryInfo `object`: Information about device memory and storage.
  * totalInternalStorage `string`: Total internal storage on device in bytes.
  * totalRam `string`: Total RAM on device in bytes.

### NetworkInfo
* NetworkInfo `object`: Device network info.
  * imei `string`: IMEI number of the GSM device. For example, A1000031212.
  * meid `string`: MEID number of the CDMA device. For example, A00000292788E1.
  * networkOperatorName `string`: Alphabetic name of current registered operator. For example, Vodafone.
  * wifiMacAddress `string`: Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11.

### NonComplianceDetail
* NonComplianceDetail `object`: Provides detail about non-compliance with a policy setting.
  * fieldPath `string`: For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a  subfield name. 2) For array-typed fields, the field name is followed by the array index  enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url
  * installationFailureReason `string` (values: INSTALLATION_FAILURE_REASON_UNSPECIFIED, INSTALLATION_FAILURE_REASON_UNKNOWN, IN_PROGRESS, NOT_FOUND, NOT_COMPATIBLE_WITH_DEVICE, NOT_APPROVED, PERMISSIONS_NOT_ACCEPTED, NOT_AVAILABLE_IN_COUNTRY, NO_LICENSES_REMAINING, NOT_ENROLLED, USER_INVALID): If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated.
  * nonComplianceReason `string` (values: NON_COMPLIANCE_REASON_UNSPECIFIED, API_LEVEL, MANAGEMENT_MODE, USER_ACTION, INVALID_VALUE, APP_NOT_INSTALLED, UNSUPPORTED, APP_INSTALLED, PENDING, APP_INCOMPATIBLE, APP_NOT_UPDATED): The reason the device is not in compliance with the setting.
  * packageName `string`: The package name indicating which app is out of compliance, if applicable.
  * settingName `string`: The name of the policy setting. This is the JSON field name of a top-level Policy  field.

### NonComplianceDetailCondition
* NonComplianceDetailCondition `object`: A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.
  * nonComplianceReason `string` (values: NON_COMPLIANCE_REASON_UNSPECIFIED, API_LEVEL, MANAGEMENT_MODE, USER_ACTION, INVALID_VALUE, APP_NOT_INSTALLED, UNSUPPORTED, APP_INSTALLED, PENDING, APP_INCOMPATIBLE, APP_NOT_UPDATED): The reason the device is not in compliance with the setting. If not set, then this condition matches any reason.
  * packageName `string`: The package name of the app that's out of compliance. If not set, then this condition matches any package name.
  * settingName `string`: The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.

### PackageNameList
* PackageNameList `object`: A list of package names.
  * packageNames `array`: A list of package names.
    * items `string`

### PasswordRequirements
* PasswordRequirements `object`: Requirements for the password used to unlock a device.
  * maximumFailedPasswordsForWipe `integer`: Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction.
  * passwordExpirationTimeout `string`: Password expiration timeout.
  * passwordHistoryLength `integer`: The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.
  * passwordMinimumLength `integer`: The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.
  * passwordMinimumLetters `integer`: Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.
  * passwordMinimumLowerCase `integer`: Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.
  * passwordMinimumNonLetter `integer`: Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.
  * passwordMinimumNumeric `integer`: Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.
  * passwordMinimumSymbols `integer`: Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.
  * passwordMinimumUpperCase `integer`: Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.
  * passwordQuality `string` (values: PASSWORD_QUALITY_UNSPECIFIED, BIOMETRIC_WEAK, SOMETHING, NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, COMPLEX): The required password quality.

### PermissionGrant
* PermissionGrant `object`: Configuration for an Android permission and its grant state.
  * permission `string`: The android permission, e.g. android.permission.READ_CALENDAR.
  * policy `string` (values: PERMISSION_POLICY_UNSPECIFIED, PROMPT, GRANT, DENY): The policy for granting the permission.

### PersistentPreferredActivity
* PersistentPreferredActivity `object`: A default activity for handling intents that match a particular intent filter.
  * actions `array`: The intent actions to match in the filter. If any actions are included in the filter, then an intent's action must be one of those values for it to match. If no actions are included, the intent action is ignored.
    * items `string`
  * categories `array`: The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent.
    * items `string`
  * receiverActivity `string`: The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent.

### Policy
* Policy `object`: A policy resources represents a group settings that govern the behavior of a managed device and the apps installed on it.
  * accountTypesWithManagementDisabled `array`: Account types that can't be managed by the user.
    * items `string`
  * addUserDisabled `boolean`: Whether adding new users and profiles is disabled.
  * adjustVolumeDisabled `boolean`: Whether adjusting the master volume is disabled.
  * alwaysOnVpnPackage [AlwaysOnVpnPackage](#alwaysonvpnpackage)
  * androidDevicePolicyTracks `array`: The app tracks for Android Device Policy the device can access. The device receives the latest version among all accessible tracks. If no tracks are specified, then the device only uses the production track.
    * items `string` (values: APP_TRACK_UNSPECIFIED, PRODUCTION, BETA)
  * appAutoUpdatePolicy `string` (values: APP_AUTO_UPDATE_POLICY_UNSPECIFIED, CHOICE_TO_THE_USER, NEVER, WIFI_ONLY, ALWAYS): The app auto update policy, which controls when automatic app updates can be applied.
  * applications `array`: Policy applied to apps.
    * items [ApplicationPolicy](#applicationpolicy)
  * autoTimeRequired `boolean`: Whether auto time is required, which prevents the user from manually setting the date and time.
  * blockApplicationsEnabled `boolean`: Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled.
  * bluetoothConfigDisabled `boolean`: Whether configuring bluetooth is disabled.
  * bluetoothContactSharingDisabled `boolean`: Whether bluetooth contact sharing is disabled.
  * bluetoothDisabled `boolean`: Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user.
  * cameraDisabled `boolean`: Whether all cameras on the device are disabled.
  * cellBroadcastsConfigDisabled `boolean`: Whether configuring cell broadcast is disabled.
  * choosePrivateKeyRules `array`: Rules for automatically choosing a private key and certificate to authenticate the device to a server. The rules are ordered by increasing precedence, so if an outgoing request matches more than one rule, the last rule defines which private key to use.
    * items [ChoosePrivateKeyRule](#chooseprivatekeyrule)
  * complianceRules `array`: Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules.
    * items [ComplianceRule](#compliancerule)
  * createWindowsDisabled `boolean`: Whether creating windows besides app windows is disabled.
  * credentialsConfigDisabled `boolean`: Whether configuring user credentials is disabled.
  * dataRoamingDisabled `boolean`: Whether roaming data services are disabled.
  * debuggingFeaturesAllowed `boolean`: Whether the user is allowed to enable debugging features.
  * defaultPermissionPolicy `string` (values: PERMISSION_POLICY_UNSPECIFIED, PROMPT, GRANT, DENY): The default permission policy for runtime permission requests.
  * deviceOwnerLockScreenInfo [UserFacingMessage](#userfacingmessage)
  * encryptionPolicy `string` (values: ENCRYPTION_POLICY_UNSPECIFIED, ENABLED_WITHOUT_PASSWORD, ENABLED_WITH_PASSWORD): Whether encryption is enabled
  * ensureVerifyAppsEnabled `boolean`: Whether app verification is force-enabled.
  * factoryResetDisabled `boolean`: Whether factory resetting from settings is disabled.
  * frpAdminEmails `array`: Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won't provide factory reset protection.
    * items `string`
  * funDisabled `boolean`: Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled.
  * installAppsDisabled `boolean`: Whether user installation of apps is disabled.
  * installUnknownSourcesAllowed `boolean`: Whether the user is allowed to enable the "Unknown Sources" setting, which allows installation of apps from unknown sources.
  * keyguardDisabled `boolean`: Whether the keyguard is disabled.
  * keyguardDisabledFeatures `array`: Disabled keyguard customizations, such as widgets.
    * items `string` (values: KEYGUARD_DISABLED_FEATURE_UNSPECIFIED, CAMERA, NOTIFICATIONS, UNREDACTED_NOTIFICATIONS, TRUST_AGENTS, DISABLE_FINGERPRINT, DISABLE_REMOTE_INPUT, ALL_FEATURES)
  * kioskCustomLauncherEnabled `boolean`: Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. The apps appear on a single page in alphabetical order. It is recommended to also use status_bar_disabled to block access to device settings.
  * locationMode `string` (values: LOCATION_MODE_UNSPECIFIED, HIGH_ACCURACY, SENSORS_ONLY, BATTERY_SAVING, OFF): The degree of location detection enabled. The user may change the value unless the user is otherwise blocked from accessing device settings.
  * longSupportMessage [UserFacingMessage](#userfacingmessage)
  * maximumTimeToLock `string`: Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction.
  * mobileNetworksConfigDisabled `boolean`: Whether configuring mobile networks is disabled.
  * modifyAccountsDisabled `boolean`: Whether adding or removing accounts is disabled.
  * mountPhysicalMediaDisabled `boolean`: Whether the user mounting physical external media is disabled.
  * name `string`: The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.
  * networkEscapeHatchEnabled `boolean`: Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.
  * networkResetDisabled `boolean`: Whether resetting network settings is disabled.
  * openNetworkConfiguration `object`: Network configuration for the device. See configure networks for more information.
  * outgoingBeamDisabled `boolean`: Whether using NFC to beam data from apps is disabled.
  * outgoingCallsDisabled `boolean`: Whether outgoing calls are disabled.
  * passwordRequirements [PasswordRequirements](#passwordrequirements)
  * permittedInputMethods [PackageNameList](#packagenamelist)
  * persistentPreferredActivities `array`: Default intent handler activities.
    * items [PersistentPreferredActivity](#persistentpreferredactivity)
  * privateKeySelectionEnabled `boolean`: Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable.
  * recommendedGlobalProxy [ProxyInfo](#proxyinfo)
  * removeUserDisabled `boolean`: Whether removing other users is disabled.
  * safeBootDisabled `boolean`: Whether rebooting the device into safe boot is disabled.
  * screenCaptureDisabled `boolean`: Whether screen capture is disabled.
  * setUserIconDisabled `boolean`: Whether changing the user icon is disabled.
  * setWallpaperDisabled `boolean`: Whether changing the wallpaper is disabled.
  * shareLocationDisabled `boolean`: Whether location sharing is disabled.
  * shortSupportMessage [UserFacingMessage](#userfacingmessage)
  * skipFirstUseHintsEnabled `boolean`: Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up.
  * smsDisabled `boolean`: Whether sending and receiving SMS messages is disabled.
  * statusBarDisabled `boolean`: Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode.
  * statusReportingSettings [StatusReportingSettings](#statusreportingsettings)
  * stayOnPluggedModes `array`: The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on.
    * items `string` (values: BATTERY_PLUGGED_MODE_UNSPECIFIED, AC, USB, WIRELESS)
  * systemUpdate [SystemUpdate](#systemupdate)
  * tetheringConfigDisabled `boolean`: Whether configuring tethering and portable hotspots is disabled.
  * uninstallAppsDisabled `boolean`: Whether user uninstallation of applications is disabled.
  * unmuteMicrophoneDisabled `boolean`: Whether the microphone is muted and adjusting microphone volume is disabled.
  * usbFileTransferDisabled `boolean`: Whether transferring files over USB is disabled.
  * usbMassStorageEnabled `boolean`: Allows admins to toggle whether USB storge is enabled or disabled on user's devices.
  * version `string`: The version of the policy. This is a read-only field. The version is incremented each time the policy is updated.
  * vpnConfigDisabled `boolean`: Whether configuring VPN is disabled.
  * wifiConfigDisabled `boolean`: Whether configuring Wi-Fi access points is disabled.
  * wifiConfigsLockdownEnabled `boolean`: Whether Wi-Fi networks defined in Open Network Configuration are locked so they can't be edited by the user.

### PowerManagementEvent
* PowerManagementEvent `object`: A power management event.
  * batteryLevel `number`: For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.
  * createTime `string`: The creation time of the event.
  * eventType `string` (values: POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED, BATTERY_LEVEL_COLLECTED, POWER_CONNECTED, POWER_DISCONNECTED, BATTERY_LOW, BATTERY_OKAY, BOOT_COMPLETED, SHUTDOWN): Event type.

### ProxyInfo
* ProxyInfo `object`: Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
  * excludedHosts `array`: For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com.
    * items `string`
  * host `string`: The host of the direct proxy.
  * pacUri `string`: The URI of the PAC script used to configure the proxy.
  * port `integer`: The port of the direct proxy.

### SignupUrl
* SignupUrl `object`: An enterprise signup URL.
  * name `string`: The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow.
  * url `string`: A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe.

### SoftwareInfo
* SoftwareInfo `object`: Information about device software.
  * androidBuildNumber `string`: Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.
  * androidBuildTime `string`: Build time.
  * androidDevicePolicyVersionCode `integer`: The Android Device Policy app version code.
  * androidDevicePolicyVersionName `string`: The Android Device Policy app version as displayed to the user.
  * androidVersion `string`: The user-visible Android version string. For example, 6.0.1.
  * bootloaderVersion `string`: The system bootloader version number, e.g. 0.6.7.
  * deviceBuildSignature `string`: SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified.
  * deviceKernelVersion `string`: Kernel version, for example, 2.6.32.9-g103d848.
  * securityPatchLevel `string`: Security patch level, e.g. 2016-05-01.

### Status
* Status `object`: The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). The error model is designed to be:
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### StatusReportingSettings
* StatusReportingSettings `object`: Settings controlling the behavior of status reports.
  * applicationReportsEnabled `boolean`: Whether app reports are enabled.
  * deviceSettingsEnabled `boolean`: Whether device settings reporting is enabled.
  * displayInfoEnabled `boolean`: Whether displays reporting is enabled.
  * hardwareStatusEnabled `boolean`: Whether hardware status reporting is enabled.
  * memoryInfoEnabled `boolean`: Whether memory info reporting is enabled.
  * networkInfoEnabled `boolean`: Whether network info reporting is enabled.
  * powerManagementEventsEnabled `boolean`: Whether power management event reporting is enabled.
  * softwareInfoEnabled `boolean`: Whether software info reporting is enabled.

### SystemUpdate
* SystemUpdate `object`: Configuration for managing system updates
  * endMinutes `integer`: If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.
  * startMinutes `integer`: If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive.
  * type `string` (values: SYSTEM_UPDATE_TYPE_UNSPECIFIED, AUTOMATIC, WINDOWED, POSTPONE): The type of system update to configure.

### TermsAndConditions
* TermsAndConditions `object`: A terms and conditions page to be accepted during provisioning.
  * content [UserFacingMessage](#userfacingmessage)
  * header [UserFacingMessage](#userfacingmessage)

### UserFacingMessage
* UserFacingMessage `object`: Provides a user-facing message with locale info. The maximum message length is 4096 characters.
  * defaultMessage `string`: The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided.
  * localizedMessages `object`: A map containing <locale, message> pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr.

### WebToken
* WebToken `object`: A web token used to access the managed Google Play iframe.
  * name `string`: The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}.
  * parentFrameUrl `string`: The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme.
  * permissions `array`: Permissions available to an admin in the embedded UI. An admin must have all of these permissions in order to view the UI.
    * items `string` (values: WEB_TOKEN_PERMISSION_UNSPECIFIED, APPROVE_APPS)
  * value `string`: The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server.


