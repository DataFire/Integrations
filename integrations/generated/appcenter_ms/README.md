# @datafire/appcenter_ms

Client library for App Center Client

## Installation and Usage
```bash
npm install --save @datafire/appcenter_ms
```
```js
let appcenter_ms = require('@datafire/appcenter_ms').create({
  APIToken: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Microsoft Visual Studio App Center API

## Actions

### test_gdprExportAccounts
Lists all the endpoints available for Test accounts data


```js
appcenter_ms.test_gdprExportAccounts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * resources `array`
    * items `object`
      * path `string`
      * rel `string`

### test_gdprExportAccount
Lists account data


```js
appcenter_ms.test_gdprExportAccount(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * id `string`

### test_gdprExportFeatureFlag
Lists feature flag data


```js
appcenter_ms.test_gdprExportFeatureFlag(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * name `string`
  * target_id `string`

### organizations_listAdministered
Returns a list organizations in which the requesting user is an admin


```js
appcenter_ms.organizations_listAdministered(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * organizations **required** `object`
    * avatar_url `string`: The URL to a user-uploaded Avatar image
    * created_at **required** `string`: The creation date of this organization
    * display_name **required** `string`: The display name of the organization
    * id **required** `string`: The internal unique id (UUID) of the organization.
    * name **required** `string`: The slug name of the organization
    * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
    * updated_at **required** `string`: The date the organization was last updated at

### userApiTokens_list
Returns api tokens for the authenticated user


```js
appcenter_ms.userApiTokens_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * created_at **required** `string`: The creation time
    * description `string`: The description of the token
    * id **required** `string`: The unique id (UUID) of the api token
    * scope `array`: The scope for this token.
      * items `string` (values: all, viewer)

### userApiTokens_new
Creates a new User API token


```js
appcenter_ms.userApiTokens_new({}, context)
```

#### Input
* input `object`
  * description `object`
    * description `string`: The description of the token
    * scope `array`: The scope for this token.
      * items `string` (values: all, viewer)

#### Output
* output `object`
  * api_token **required** `string`: The api token generated will not be accessible again
  * created_at **required** `string`: The creation time
  * description `string`: The description of the token
  * id **required** `string`: The unique id (UUID) of the api token
  * scope `array`: The scope for this token.
    * items `string` (values: all, viewer)

### userApiTokens_delete
Delete the user api_token object with the specific id


```js
appcenter_ms.userApiTokens_delete({
  "api_token_id": ""
}, context)
```

#### Input
* input `object`
  * api_token_id **required** `string`: The unique ID (UUID) of the api token

#### Output
*Output schema unknown*

### apps_list
Returns a list of apps


```js
appcenter_ms.apps_list({}, context)
```

#### Input
* input `object`
  * $orderBy `string` (values: display_name, name): The name of the attribute by which to order the response by. By default, apps are in order of creation. All results are ordered in ascending order.

#### Output
* output `array`
  * items
    * description `string`: The description of the app
    * display_name **required** `string`: The display name of the app
    * icon_source `string`: The string representation of the source of the app's icon
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * id **required** `string`: The unique ID (UUID) of the app
    * name **required** `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * owner **required** `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
    * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
    * azure_subscription `object`
      * is_billable `boolean`: If the subscription can be used for billing
      * is_billing `boolean`: If the subscription is used for billing
      * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
      * subscription_id **required** `string`: The azure subscription id
      * subscription_name **required** `string`: The name of the azure subscription
      * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
    * created_at `string`: The created date of this app
    * member_permissions `array`: The permissions of the calling user
      * items `string` (values: manager, developer, viewer, tester)
    * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
    * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
    * updated_at `string`: The last updated date of this app

### apps_create
Creates a new app and returns it to the caller


```js
appcenter_ms.apps_create({
  "app": null
}, context)
```

#### Input
* input `object`
  * app **required** `object`
    * description `string`: A short text describing the app
    * display_name **required** `string`: The descriptive name of the app. This can contain any characters
    * name `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * platform **required** `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Xamarin, Unity, Electron, WPF, WinForms, Custom): The platform of the app
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase

#### Output
* output
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app

### apps_delete
Delete an app


```js
appcenter_ms.apps_delete({
  "app_name": "",
  "owner_name": ""
}, context)
```

#### Input
* input `object`
  * app_name **required** `string`: The name of the application
  * owner_name **required** `string`: The name of the owner

#### Output
*Output schema unknown*

### apps_get
Return a specific app with the given app name which belongs to the given owner.


```js
appcenter_ms.apps_get({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app

### apps_update
Partially updates a single app


```js
appcenter_ms.apps_update({
  "app_name": "",
  "owner_name": ""
}, context)
```

#### Input
* input `object`
  * app_name **required** `string`: The name of the application
  * owner_name **required** `string`: The name of the owner
  * app `object`
    * description `string`: A short text describing the app
    * display_name `string`: The display name of the app
    * icon_asset_id `string`: The uuid for the icon's asset id from ACFUS
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * name `string`: The name of the app used in URLs
    * release_type `string`: A one-word descriptive release type value that starts with a capital letter but is otherwise lowercase

#### Output
* output
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app

### Analytics_DeviceCounts
Count of active devices by interval in the time range.


```js
appcenter_ms.Analytics_DeviceCounts({
  "start": "",
  "app_build": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * versions `array`
  * app_build **required** `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * daily `array`: The active device count for each interval.
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * monthly `array`: The active device count for each interval with a month's retention.
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * weekly `array`: The active device count for each interval with a week's retention.
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.

### Analytics_ListAudiences
Get list of audiences.


```js
appcenter_ms.Analytics_ListAudiences({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * include_disabled `boolean`: Include disabled audience definitions
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: List of audiences.
  * nextLink `string`
  * values **required** `array`: List of audiences.
    * items `object`: Audience definition.
      * definition `string`: Audience definition in OData format.
      * description `string`: Audience description.
      * estimated_count `integer`: Estimated audience size.
      * name `string`: Audience name.
      * state `string` (values: Calculating, Ready, Disabled): Audience state.

### Analytics_TestAudience
Tests audience definition.


```js
appcenter_ms.Analytics_TestAudience({
  "audience": {
    "definition": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * audience **required** `object`: Audience definition.
    * custom_properties `object`: Custom properties used in the definition.
    * definition **required** `string`: Audience definition in OData format.
    * description `string`: Audience description.
    * enabled `boolean`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Audience test result.
  * custom_properties `object`: Custom properties used in the definition.
  * definition `string`: Audience definition in OData format.
  * estimated_count `integer`: Estimated audience size.
  * estimated_total_count `integer`: Estimated total audience size.

### Analytics_ListCustomProperties
Get list of custom properties.


```js
appcenter_ms.Analytics_ListCustomProperties({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: List of device properties.
  * values **required** `object`: List of device properties.

### Analytics_ListDeviceProperties
Get list of device properties.


```js
appcenter_ms.Analytics_ListDeviceProperties({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: List of device properties.
  * values **required** `object`: List of device properties.

### Analytics_ListDevicePropertyValues
Get list of device property values.


```js
appcenter_ms.Analytics_ListDevicePropertyValues({
  "property_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * property_name **required** `string`: Device property
  * contains `string`: Contains string
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: List of device property values.
  * values **required** `array`: List of device property values.
    * items `string`

### Analytics_DeleteAudience
Deletes audience definition.


```js
appcenter_ms.Analytics_DeleteAudience({
  "audience_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * audience_name **required** `string`: The name of the audience
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### Analytics_GetAudience
Gets audience definition.


```js
appcenter_ms.Analytics_GetAudience({
  "audience_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * audience_name **required** `string`: The name of the audience
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Audience with details.
  * custom_properties `object`: Custom properties used in the definition.
  * enabled `boolean`
  * estimated_total_count `integer`: Estimated total audience size.
  * timestamp `string`: Date the audience was last refreshed.
  * definition `string`: Audience definition in OData format.
  * description `string`: Audience description.
  * estimated_count `integer`: Estimated audience size.
  * name `string`: Audience name.
  * state `string` (values: Calculating, Ready, Disabled): Audience state.

### Analytics_AudienceNameExists
Returns whether audience definition exists.


```js
appcenter_ms.Analytics_AudienceNameExists({
  "audience_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * audience_name **required** `string`: The name of the audience
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### Analytics_CreateOrUpdateAudience
Creates or updates audience definition.


```js
appcenter_ms.Analytics_CreateOrUpdateAudience({
  "audience_name": "",
  "audience": {
    "definition": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * audience_name **required** `string`: The name of the audience
  * audience **required** `object`: Audience definition.
    * custom_properties `object`: Custom properties used in the definition.
    * definition **required** `string`: Audience definition in OData format.
    * description `string`: Audience description.
    * enabled `boolean`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Audience with details.
  * custom_properties `object`: Custom properties used in the definition.
  * enabled `boolean`
  * estimated_total_count `integer`: Estimated total audience size.
  * timestamp `string`: Date the audience was last refreshed.
  * definition `string`: Audience definition in OData format.
  * description `string`: Audience description.
  * estimated_count `integer`: Estimated audience size.
  * name `string`: Audience name.
  * state `string` (values: Calculating, Ready, Disabled): Audience state.

### Analytics_CrashCounts
Count of crashes by day in the time range based the selected versions. Available for UWP apps only.


```js
appcenter_ms.Analytics_CrashCounts({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * count `integer`: Total crash count.
  * crashes `array`: The total crash count for day.
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.

### Analytics_CrashGroupsTotals
Overall crashes and affected users count of the selected crash groups with selected versions.


```js
appcenter_ms.Analytics_CrashGroupsTotals({
  "crash_groups": {
    "crash_groups": []
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_groups **required** `object`
    * crash_groups **required** `array`
      * items `object`
        * app_version `string`
        * crash_group_id `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: List of crash groups with overall crashes count and affected users.
  * items `object`
    * app_version `string`
    * crash_group_id `string`
    * overall `object`
      * crash_count `integer`
      * device_count `integer`

### Analytics_CrashGroupCounts
Count of crashes by day in the time range of the selected crash group with selected version. Available for UWP apps only.


```js
appcenter_ms.Analytics_CrashGroupCounts({
  "crash_group_id": "",
  "version": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: The id of the crash group.
  * version **required** `string`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * count `integer`: Total crash count.
  * crashes `array`: The total crash count for day.
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.

### Analytics_CrashGroupModelCounts
Top models of the selected crash group with selected version. Available for UWP apps only.


```js
appcenter_ms.Analytics_CrashGroupModelCounts({
  "crash_group_id": "",
  "version": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: The id of the crash group.
  * version **required** `string`
  * $top `integer`: The maximum number of results to return. (0 will fetch all results)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * crash_count `integer`
  * models `array`
    * items `object`
      * crash_count `integer`: Count of model.
      * model_name `string`: Model's name.

### Analytics_CrashGroupOperatingSystemCounts
Top OSes of the selected crash group with selected version. Available for UWP apps only.


```js
appcenter_ms.Analytics_CrashGroupOperatingSystemCounts({
  "crash_group_id": "",
  "version": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: The id of the crash group.
  * version **required** `string`
  * $top `integer`: The maximum number of results to return. (0 will fetch all results)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * crash_count `integer`
  * operating_systems `array`
    * items `object`
      * crash_count `integer`: Count of OS.
      * operating_system_name `string`: OS name.

### Analytics_CrashGroupTotals
Overall crashes and affected users count of the selected crash group with selected version. Available for UWP apps only.


```js
appcenter_ms.Analytics_CrashGroupTotals({
  "crash_group_id": "",
  "version": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: The id of the crash group.
  * version **required** `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * crash_count `integer`
  * device_count `integer`

### Analytics_CrashFreeDevicePercentages
Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices.


```js
appcenter_ms.Analytics_CrashFreeDevicePercentages({
  "start": "",
  "version": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * version **required** `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * average_percentage `number`: Average percentage.
  * daily_percentages `array`: The crash-free percentage per day.
    * items `object`
      * datetime `string`: The ISO 8601 datetime.
      * percentage `number`: Percentage of the object.

### Analytics_DistributionReleaseCounts
Count of total downloads for the provided distribution releases.


```js
appcenter_ms.Analytics_DistributionReleaseCounts({
  "releases": {
    "releases": []
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * releases **required** `object`
    * releases **required** `array`
      * items `object`
        * distribution_group `string`: Distribution group Id.
        * release **required** `string`: Release Id.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * counts **required** `array`
    * items `object`
      * distribution_group `string`: Distribution group queried.
      * release_id **required** `string`
      * total_count **required** `integer`: Total count of downloads.
      * unique_count **required** `integer`: Count of unique downloads against user id.
  * total `integer`

### Analytics_EventsDeleteLogs
Delete the set of Events with the specified event names.


```js
appcenter_ms.Analytics_EventsDeleteLogs({
  "event_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * event_name **required** `string`: The id of the event.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### Analytics_Events
Count of active events in the time range ordered by event.


```js
appcenter_ms.Analytics_Events({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * versions `array`
  * event_name `array`: To select the specific events.
  * $top `integer`: The maximum number of results to return. (0 will fetch all results)
  * $skip `integer`: The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination.
  * $inlinecount `string` (values: allpages, none): Controls whether or not to include a count of all the items across all pages.
  * $orderby `string`: controls the sorting order and sorting based on which column
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * events `array`
    * items `object`
      * count `integer`
      * count_per_device `number`
      * count_per_session `number`
      * device_count `integer`
      * id `string`
      * name `string`
      * previous_count `integer`: The event count of previous time range of the event.
      * previous_device_count `integer`: The device count of previous time range of the event.
  * total `integer`: The total count of events.
  * total_devices `integer`: The active device over this period.

### Analytics_EventsDelete
Delete the set of Events with the specified event names.


```js
appcenter_ms.Analytics_EventsDelete({
  "event_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * event_name **required** `string`: The id of the event.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### Analytics_EventPerDeviceCount
Count of events per device by interval in the time range.


```js
appcenter_ms.Analytics_EventPerDeviceCount({
  "event_name": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * event_name **required** `string`: The id of the event.
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * avg_count_per_device `number`
  * count_per_device `array`
    * items `object`
      * count `number`: Decimal count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * previous_avg_count_per_device `number`

### Analytics_EventPerSessionCount
Count of events per session by interval in the time range.


```js
appcenter_ms.Analytics_EventPerSessionCount({
  "event_name": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * event_name **required** `string`: The id of the event.
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * avg_count_per_session `number`
  * count_per_session `array`
    * items `object`
      * count `number`: Decimal count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * previous_avg_count_per_session `number`

### Analytics_EventDeviceCount
Count of devices for an event by interval in the time range.


```js
appcenter_ms.Analytics_EventDeviceCount({
  "event_name": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * event_name **required** `string`: The id of the event.
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * devices_count `array`
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * previous_total_devices_with_event `integer`
  * total_devices `integer`
  * total_devices_with_event `integer`

### Analytics_EventCount
Count of events by interval in the time range.


```js
appcenter_ms.Analytics_EventCount({
  "event_name": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * event_name **required** `string`: The id of the event.
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * count `array`
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * previous_total_count `integer`
  * total_count `integer`

### Analytics_EventProperties
Event properties.


```js
appcenter_ms.Analytics_EventProperties({
  "event_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * event_name **required** `string`: The id of the event.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Event properties during the time range.
  * event_properties `array`
    * items `string`: The event property.

### Analytics_EventPropertyCounts
Event properties value counts during the time range in descending order.


```js
appcenter_ms.Analytics_EventPropertyCounts({
  "event_name": "",
  "event_property_name": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * event_name **required** `string`: The id of the event.
  * event_property_name **required** `string`: The id of the event property.
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * versions `array`
  * $top `integer`: The number of property values to return. Set to 0 in order to fetch all results available.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Event property value counts during the time range in descending order.
  * total `integer`: The total property value counts.
  * values `array`: The event property values.
    * items `object`: An event property value with counts.
      * count `integer`: The count of the the event property value.
      * name `string`: The event property value name.
      * previous_count `integer`: The count of previous time range of the event property value.

### Analytics_GenericLogFlow
Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.


```js
appcenter_ms.Analytics_GenericLogFlow({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start `string`: Start date time in data in ISO 8601 date time format. It must be within the current day in the UTC timezone. The default value is the start time of the current day in UTC timezone.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * exceeded_max_limit `boolean`: indicates if the number of available logs are more than the max allowed return limit(100).
  * last_received_log_timestamp `string`: the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
  * logs **required** `array`: the list of logs
    * items `object`: Generic log.
      * account_id `string`: Account ID of the authenticated user.
      * auth_provider `string`: Auth service provider.
      * device **required** `object`: Device characteristics.
        * app_build **required** `string`: The app's build number, e.g. 42.
        * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
        * app_version **required** `string`: Application version name, e.g. 1.1.0
        * carrier_code `string`: Carrier country code (for mobile devices).
        * carrier_country `string`: Carrier country.
        * carrier_name `string`: Carrier name (for mobile devices).
        * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
        * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
        * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
        * locale **required** `string`: Language code (example: en_US).
        * model `string`: Device model (example: iPad2,3).
        * oem_name `string`: Device manufacturer (example: HTC).
        * os_api_level `integer`: API level when applicable like in Android (example: 15).
        * os_build `string`: OS build code (example: LMY47X).
        * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
        * os_version **required** `string`: OS version (example: 9.3.0).
        * screen_size `string`: Screen size of the device in pixels (example: 640x480).
        * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
        * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
        * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
        * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
        * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
        * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
      * event_id `string`: Event ID.
      * event_name `string`: Event name.
      * install_id **required** `string`: Install ID.
      * message_id `string`: Message ID.
      * properties `object`: event specific properties.
      * session_id `string`: Session ID.
      * timestamp **required** `string`: Log creation timestamp.
      * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### Analytics_LanguageCounts
Languages in the time range.


```js
appcenter_ms.Analytics_LanguageCounts({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * $top `integer`: The maximum number of results to return. (0 will fetch all results)
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * languages `array`
    * items `object`
      * count `integer`: Count current of language.
      * language_name `string`: Language's name.
      * previous_count `integer`: Count of previous lanugage.
  * total `integer`

### Analytics_LogFlow
Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.


```js
appcenter_ms.Analytics_LogFlow({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start `string`: Start date time in data in ISO 8601 date time format. It must be within the current day in the UTC timezone. The default value is the start time of the current day in UTC timezone.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * exceeded_max_limit `boolean`: indicates if the number of available logs are more than the max allowed return limit(100).
  * last_received_log_timestamp `string`: the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
  * logs **required** `array`: the list of logs
    * items `object`
      * device **required** `object`: Device characteristics.
        * app_build **required** `string`: The app's build number, e.g. 42.
        * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
        * app_version **required** `string`: Application version name, e.g. 1.1.0
        * carrier_code `string`: Carrier country code (for mobile devices).
        * carrier_country `string`: Carrier country.
        * carrier_name `string`: Carrier name (for mobile devices).
        * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
        * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
        * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
        * locale **required** `string`: Language code (example: en_US).
        * model `string`: Device model (example: iPad2,3).
        * oem_name `string`: Device manufacturer (example: HTC).
        * os_api_level `integer`: API level when applicable like in Android (example: 15).
        * os_build `string`: OS build code (example: LMY47X).
        * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
        * os_version **required** `string`: OS version (example: 9.3.0).
        * screen_size `string`: Screen size of the device in pixels (example: 640x480).
        * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
        * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
        * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
        * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
        * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
        * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
      * install_id **required** `string`: Install ID.
      * timestamp **required** `string`: Log creation timestamp.
      * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### Analytics_ModelCounts
Models in the time range.


```js
appcenter_ms.Analytics_ModelCounts({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * $top `integer`: The maximum number of results to return. (0 will fetch all results)
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * models `array`
    * items `object`
      * count `integer`: Count current of model.
      * model_name `string`: Model's name.
      * previous_count `integer`: Count of previous model.
  * total `integer`

### Analytics_OperatingSystemCounts
OSes in the time range.


```js
appcenter_ms.Analytics_OperatingSystemCounts({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * $top `integer`: The maximum number of results to return. (0 will fetch all results)
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * oses `array`
    * items `object`
      * count `integer`: Count current of OS.
      * os_name `string`: OS name.
      * previous_count `integer`: Count of previous OS.
  * total `integer`

### Analytics_PlaceCounts
Places in the time range.


```js
appcenter_ms.Analytics_PlaceCounts({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * $top `integer`: The maximum number of results to return. (0 will fetch all results)
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Places and count during the time range in descending order.
  * places `array`
    * items `object`: The place code and the count.
      * code `string`: The place code.
      * count `integer`: The count of the this place.
      * previous_count `integer`: The count of previous time range of the place.
  * total `integer`

### Analytics_SessionCounts
Count of sessions in the time range.


```js
appcenter_ms.Analytics_SessionCounts({
  "start": "",
  "interval": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * interval **required** `string`: Size of interval in ISO 8601 duration format. (PnYnMnDTnHnMnS|PnW|P<date>T<time>). The valid durations are 1 day (P1D), 1 week (P1W), and 30 days (P30D).
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * count `integer`: Count of the object.
    * datetime `string`: The ISO 8601 datetime.

### Analytics_SessionDurationsDistribution
Gets session duration.


```js
appcenter_ms.Analytics_SessionDurationsDistribution({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * average_duration `string`: The average session duration for current time range.
  * distribution `array`: The count of sessions in these buckets.
    * items `object`
      * bucket `string`: The bucket name.
      * count `integer`: The count of sessions in current bucket.
  * previous_average_duration `string`: The previous average session duration for previous time range.

### Analytics_PerDeviceCounts
Count of sessions per device in the time range.


```js
appcenter_ms.Analytics_PerDeviceCounts({
  "start": "",
  "interval": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * interval **required** `string`: Size of interval in ISO 8601 duration format. (PnYnMnDTnHnMnS|PnW|P<date>T<time>). The valid durations are 1 day (P1D), 1 week (P1W), and 30 days (P30D).
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * average_sessions_per_user `number`: Average seesion per user.
  * previous_average_sessions_per_user `number`: Previous average session per user.
  * previous_total_count `integer`: Previous total count.
  * sessions_per_user `array`: The session count for each interval per device.
    * items `object`
      * count `number`: Count.
      * datetime `string`: The ISO 8601 datetime.
  * total_count `integer`: Total session per device count.

### Analytics_Versions
Count of active versions in the time range ordered by version.


```js
appcenter_ms.Analytics_Versions({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format.
  * end `string`: Last date time in data in ISO 8601 date time format.
  * $top `integer`: The maximum number of results to return. (0 will fetch all results)
  * versions `array`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * total `integer`: The total count of versions.
  * versions `array`: List of version count.
    * items `object`
      * count `integer`: Version count.
      * previous_count `integer`: The count of previous time range of the version.
      * version `string`: Version.

### appApiTokens_list
Returns App API tokens for the app


```js
appcenter_ms.appApiTokens_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * created_at **required** `string`: The creation time
    * description `string`: The description of the token
    * id **required** `string`: The unique id (UUID) of the api token
    * scope `array`: The scope for this token.
      * items `string` (values: all, viewer)

### appApiTokens_new
Creates a new App API token


```js
appcenter_ms.appApiTokens_new({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * description `object`
    * description `string`: The description of the token
    * scope `array`: The scope for this token.
      * items `string` (values: all, viewer)

#### Output
* output `object`
  * api_token **required** `string`: The api token generated will not be accessible again
  * created_at **required** `string`: The creation time
  * description `string`: The description of the token
  * id **required** `string`: The unique id (UUID) of the api token
  * scope `array`: The scope for this token.
    * items `string` (values: all, viewer)

### appApiTokens_delete
Delete the App Api Token object with the specific ID


```js
appcenter_ms.appApiTokens_delete({
  "owner_name": "",
  "app_name": "",
  "api_token_id": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * api_token_id **required** `string`: The unique ID (UUID) of the api token

#### Output
*Output schema unknown*

### appleMapping_delete
Delete mapping of apple app to an existing app in apple store.


```js
appcenter_ms.appleMapping_delete({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * body `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### appleMapping_get
Get mapping of apple app to an existing app in apple store.


```js
appcenter_ms.appleMapping_get({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Apple Mapping Request Type
  * app_id `string`: ID of the apple application in Mobile Center
  * apple_id `string`: ID of the apple application in apple store
  * service_connection_id `string`: Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
  * team_identifier `string`: ID of the Team associated with the app in apple store

### appleMapping_create
Create a mapping for an existing app in apple store for the specified application.


```js
appcenter_ms.appleMapping_create({
  "body": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`: Apple Mapping Request Type
    * apple_id `string`: ID of the apple application in apple store, takes precedence over bundle_identifier when both are provided
    * bundle_identifier `string`: Bundle Identifier of the apple package
    * service_connection_id **required** `string`: Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
    * team_identifier **required** `string`: ID of the Team associated with the app in apple store
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Apple Mapping Request Type
  * app_id `string`: ID of the apple application in Mobile Center
  * apple_id `string`: ID of the apple application in apple store
  * service_connection_id `string`: Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
  * team_identifier `string`: ID of the Team associated with the app in apple store

### appleMapping_TestFlightGroups
Fetch all apple test flight groups


```js
appcenter_ms.appleMapping_TestFlightGroups({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Apple Test Flight Groups Response Type
    * appleId `number`: apple id of the group.
    * id `string`: id of the group.
    * name `string`: name of the group.
    * providerId `number`: provider id of the group.

### apps_deleteAvatar
Deletes the uploaded app avatar


```js
appcenter_ms.apps_deleteAvatar({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app

### apps_updateAvatar
Sets the app avatar


```js
appcenter_ms.apps_updateAvatar({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * avatar `string`, `object`: The image for an app avatar to upload.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app

### azureSubscription_listForApp
Returns a list of azure subscriptions for the app


```js
appcenter_ms.azureSubscription_listForApp({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to

### azureSubscription_linkForApp
Link azure subscription to an app


```js
appcenter_ms.azureSubscription_linkForApp({
  "owner_name": "",
  "app_name": "",
  "azure_subscription_to_app_data": null
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * azure_subscription_to_app_data **required** `object`
    * subscription_id **required** `string`: The azure subscription id

#### Output
*Output schema unknown*

### azureSubscription_deleteForApp
Delete the azure subscriptions for the app


```js
appcenter_ms.azureSubscription_deleteForApp({
  "azure_subscription_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * azure_subscription_id **required** `string`: The unique ID (UUID) of the azure subscription
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### billingAggregatedInformation_getByApp
Aggregated Billing Information for owner of a given app.


```js
appcenter_ms.billingAggregatedInformation_getByApp({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * service `string` (values: Test, Build): Type of service that should be included in the Billing Information
  * period `string` (values: Previous, Current, Next): Type of period that should be included in the Billing Information
  * showOriginalPlans `boolean`: Controls whether the API should show the original plan when Azure Subscription is not enabled
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Aggregated Billing Information for a user or an organization
  * azureSubscriptionId `string`: Unique identifier for the Azure subscription used for billing
  * azureSubscriptionState `string` (values: Enabled, Disabled, NotSet): State of the Azure subscription used for billing
  * billingPlans `object`: Billing Plans section in the Billing Information
    * buildService `object`: Billing Plans for a single service
      * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
      * currentBillingPeriod `object`: Billing plans for a given period
        * byAccount `object`: Selection of a billing plan
          * count `integer`: Number of instances of the billing plan.
          * plan `object`: Billing Plan
        * endTime `string`: Exclusive end of the period.
        * startTime `string`: Inclusive start of the period
      * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
    * testService `object`: Billing Plans for a single service
      * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
      * currentBillingPeriod `object`: Billing plans for a given period
        * byAccount `object`: Selection of a billing plan
          * count `integer`: Number of instances of the billing plan.
          * plan `object`: Billing Plan
        * endTime `string`: Exclusive end of the period.
        * startTime `string`: Inclusive start of the period
      * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
  * id `string`: ID of the user or organization
  * timestamp `string`: The ISO 8601 datetime of last modification
  * usage `object`: Usage section in the Billing Information
    * buildService `object`: Resource usage for a single Mobile Center service
      * currentUsagePeriod `object`: Usage for a single period
        * byAccount `object`: A collection of named numeric values
        * byApp `object`: A collection of  named numeric values grouped by app
        * endTime `string`: Exclusive end time of the usage period.
        * startTime `string`: Inclusive start time of the usage period
    * testService `object`: Resource usage for a single Mobile Center service
      * currentUsagePeriod `object`: Usage for a single period
        * byAccount `object`: A collection of named numeric values
        * byApp `object`: A collection of  named numeric values grouped by app
        * endTime `string`: Exclusive end time of the usage period.
        * startTime `string`: Inclusive start time of the usage period
  * version `string`: Version of the Billing Information schema

### builds_listBranches
Returns the list of Git branches for this application


```js
appcenter_ms.builds_listBranches({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: A collection of branch status
  * items `object`: The branch build status
    * configured **required** `boolean`
    * lastBuild `object`
      * buildNumber **required** `string`: The build number
      * finishTime `string`: The time the build was finished
      * id **required** `integer`: The build ID
      * lastChangedDate `string`: The time the build status was last changed
      * queueTime **required** `string`: The time the build was queued
      * result **required** `string`: The build result
      * sourceBranch **required** `string`: The source branch name
      * sourceVersion **required** `string`: The source SHA
      * startTime `string`: The time the build was started
      * status **required** `string`: The build status

### builds_listByBranch
Returns the list of builds for the branch


```js
appcenter_ms.builds_listByBranch({
  "branch": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * branch **required** `string`: The branch name
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: A list of builds
  * items `object`
    * buildNumber **required** `string`: The build number
    * finishTime `string`: The time the build was finished
    * id **required** `integer`: The build ID
    * lastChangedDate `string`: The time the build status was last changed
    * queueTime **required** `string`: The time the build was queued
    * result **required** `string`: The build result
    * sourceBranch **required** `string`: The source branch name
    * sourceVersion **required** `string`: The source SHA
    * startTime `string`: The time the build was started
    * status **required** `string`: The build status

### builds_create
Create a build


```js
appcenter_ms.builds_create({
  "branch": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * branch **required** `string`: The branch name
  * params `object`
    * debug `boolean`: Run build in debug mode
    * sourceVersion `string`: Version to build which represents the full Git commit reference
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * buildNumber **required** `string`: The build number
  * finishTime `string`: The time the build was finished
  * id **required** `integer`: The build ID
  * lastChangedDate `string`: The time the build status was last changed
  * queueTime **required** `string`: The time the build was queued
  * result **required** `string`: The build result
  * sourceBranch **required** `string`: The source branch name
  * sourceVersion **required** `string`: The source SHA
  * startTime `string`: The time the build was started
  * status **required** `string`: The build status

### branchConfigurations_delete
Deletes the branch build configuration


```js
appcenter_ms.branchConfigurations_delete({
  "branch": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * branch **required** `string`: The branch name
  * payload `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * message **required** `string`

### branchConfigurations_get
Gets the branch configuration


```js
appcenter_ms.branchConfigurations_get({
  "branch": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * branch **required** `string`: The branch name
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output
  * artifactVersioning `object`: The versioning configuration for artifacts built for this branch
    * buildNumberFormat `string` (values: buildId, timestamp)
  * badgeIsEnabled `boolean`
  * cloneFromBranch `string`: A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests.
  * signed `boolean`
  * testsEnabled `boolean`
  * toolsets `object`: The branch build configuration for each toolset
    * android `object`: Build configuration for Android projects
      * automaticSigning `boolean`: Whether to apply automatic signing or not
      * buildVariant `string`: The Android build variant to build
      * gradleWrapperPath `string`: Path to the Gradle wrapper script
      * isRoot `boolean`: Whether it is the root module or not
      * keyAlias `string`: The key alias
      * keyPassword `string`: The key password
      * keystoreEncoded `string`: The keystore encoded value
      * keystoreFilename `string`: The name of the keystore file
      * keystorePassword `string`: The password of the keystore
      * module `string`: The Gradle module to build
      * runLint `boolean`: Whether to run lint checks during the build (default)
      * runTests `boolean`: Whether to run unit tests during the build (default)
    * javascript `object`: Build configuration when React Native, or other JavaScript tech, is part of the build steps
      * packageJsonPath `string`: Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
      * reactNativeVersion `string`: Version of React Native from package.json files
      * runTests `boolean`: Whether to run Jest unit tests, via npm test, during the build
    * xamarin `object`: Build configuration for Xamarin projects
      * args `string`
      * configuration `string`
      * isSimBuild `boolean`
      * monoVersion `string`
      * p12File `string`
      * p12Pwd `string`
      * provProfile `string`
      * sdkBundle `string`
      * slnPath `string`
      * symlink `string`: Symlink of the SDK Bundle and Mono installation.
    * xcode `object`: Build configuration when Xcode is part of the build steps
      * appExtensionProvisioningProfileFiles `array`
        * items `object`: Provisioning profile fetch and store information
          * fileId `string`: File id from secure file storage
          * fileName `string`: Name of uploaded provisioning profile
          * targetBundleIdentifier `string`: Target the provisioning profile is used to sign
          * uploadId `string`: Upload id to App Center File Upload Store
      * archiveConfiguration `string`: The build configuration of the target to archive
      * automaticSigning `boolean`
      * cartfilePath `string`: Path to Carthage file, if present
      * certificateEncoded `string`
      * certificateFileId `string`
      * certificateFilename `string`
      * certificatePassword `string`
      * certificateUploadId `string`
      * forceLegacyBuildSystem `boolean`: Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
      * podfilePath `string`: Path to CococaPods file, if present
      * projectOrWorkspacePath `string`: Xcode project/workspace path
      * provisioningProfileEncoded `string`
      * provisioningProfileFileId `string`
      * provisioningProfileFilename `string`
      * provisioningProfileUploadId `string`
      * scheme `string`
      * targetToArchive `string`: The target id of the selected scheme to archive
      * teamId `string`
      * xcodeProjectSha `string`: The selected pbxproject hash to the repositroy
      * xcodeVersion `string`: Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.
  * trigger `string` (values: continous, continuous, manual)
  * id **required** `integer`

### branchConfigurations_create
Configures the branch for build


```js
appcenter_ms.branchConfigurations_create({
  "branch": "",
  "params": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * branch **required** `string`: The branch name
  * params **required** `object`: The branch build configuration
    * artifactVersioning `object`: The versioning configuration for artifacts built for this branch
      * buildNumberFormat `string` (values: buildId, timestamp)
    * badgeIsEnabled `boolean`
    * cloneFromBranch `string`: A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests.
    * signed `boolean`
    * testsEnabled `boolean`
    * toolsets `object`: The branch build configuration for each toolset
      * android `object`: Build configuration for Android projects
        * automaticSigning `boolean`: Whether to apply automatic signing or not
        * buildVariant `string`: The Android build variant to build
        * gradleWrapperPath `string`: Path to the Gradle wrapper script
        * isRoot `boolean`: Whether it is the root module or not
        * keyAlias `string`: The key alias
        * keyPassword `string`: The key password
        * keystoreEncoded `string`: The keystore encoded value
        * keystoreFilename `string`: The name of the keystore file
        * keystorePassword `string`: The password of the keystore
        * module `string`: The Gradle module to build
        * runLint `boolean`: Whether to run lint checks during the build (default)
        * runTests `boolean`: Whether to run unit tests during the build (default)
      * javascript `object`: Build configuration when React Native, or other JavaScript tech, is part of the build steps
        * packageJsonPath `string`: Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
        * reactNativeVersion `string`: Version of React Native from package.json files
        * runTests `boolean`: Whether to run Jest unit tests, via npm test, during the build
      * xamarin `object`: Build configuration for Xamarin projects
        * args `string`
        * configuration `string`
        * isSimBuild `boolean`
        * monoVersion `string`
        * p12File `string`
        * p12Pwd `string`
        * provProfile `string`
        * sdkBundle `string`
        * slnPath `string`
        * symlink `string`: Symlink of the SDK Bundle and Mono installation.
      * xcode `object`: Build configuration when Xcode is part of the build steps
        * appExtensionProvisioningProfileFiles `array`
          * items `object`: Provisioning profile fetch and store information
        * archiveConfiguration `string`: The build configuration of the target to archive
        * automaticSigning `boolean`
        * cartfilePath `string`: Path to Carthage file, if present
        * certificateEncoded `string`
        * certificateFileId `string`
        * certificateFilename `string`
        * certificatePassword `string`
        * certificateUploadId `string`
        * forceLegacyBuildSystem `boolean`: Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
        * podfilePath `string`: Path to CococaPods file, if present
        * projectOrWorkspacePath `string`: Xcode project/workspace path
        * provisioningProfileEncoded `string`
        * provisioningProfileFileId `string`
        * provisioningProfileFilename `string`
        * provisioningProfileUploadId `string`
        * scheme `string`
        * targetToArchive `string`: The target id of the selected scheme to archive
        * teamId `string`
        * xcodeProjectSha `string`: The selected pbxproject hash to the repositroy
        * xcodeVersion `string`: Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.
    * trigger `string` (values: continous, continuous, manual)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output
  * artifactVersioning `object`: The versioning configuration for artifacts built for this branch
    * buildNumberFormat `string` (values: buildId, timestamp)
  * badgeIsEnabled `boolean`
  * cloneFromBranch `string`: A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests.
  * signed `boolean`
  * testsEnabled `boolean`
  * toolsets `object`: The branch build configuration for each toolset
    * android `object`: Build configuration for Android projects
      * automaticSigning `boolean`: Whether to apply automatic signing or not
      * buildVariant `string`: The Android build variant to build
      * gradleWrapperPath `string`: Path to the Gradle wrapper script
      * isRoot `boolean`: Whether it is the root module or not
      * keyAlias `string`: The key alias
      * keyPassword `string`: The key password
      * keystoreEncoded `string`: The keystore encoded value
      * keystoreFilename `string`: The name of the keystore file
      * keystorePassword `string`: The password of the keystore
      * module `string`: The Gradle module to build
      * runLint `boolean`: Whether to run lint checks during the build (default)
      * runTests `boolean`: Whether to run unit tests during the build (default)
    * javascript `object`: Build configuration when React Native, or other JavaScript tech, is part of the build steps
      * packageJsonPath `string`: Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
      * reactNativeVersion `string`: Version of React Native from package.json files
      * runTests `boolean`: Whether to run Jest unit tests, via npm test, during the build
    * xamarin `object`: Build configuration for Xamarin projects
      * args `string`
      * configuration `string`
      * isSimBuild `boolean`
      * monoVersion `string`
      * p12File `string`
      * p12Pwd `string`
      * provProfile `string`
      * sdkBundle `string`
      * slnPath `string`
      * symlink `string`: Symlink of the SDK Bundle and Mono installation.
    * xcode `object`: Build configuration when Xcode is part of the build steps
      * appExtensionProvisioningProfileFiles `array`
        * items `object`: Provisioning profile fetch and store information
          * fileId `string`: File id from secure file storage
          * fileName `string`: Name of uploaded provisioning profile
          * targetBundleIdentifier `string`: Target the provisioning profile is used to sign
          * uploadId `string`: Upload id to App Center File Upload Store
      * archiveConfiguration `string`: The build configuration of the target to archive
      * automaticSigning `boolean`
      * cartfilePath `string`: Path to Carthage file, if present
      * certificateEncoded `string`
      * certificateFileId `string`
      * certificateFilename `string`
      * certificatePassword `string`
      * certificateUploadId `string`
      * forceLegacyBuildSystem `boolean`: Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
      * podfilePath `string`: Path to CococaPods file, if present
      * projectOrWorkspacePath `string`: Xcode project/workspace path
      * provisioningProfileEncoded `string`
      * provisioningProfileFileId `string`
      * provisioningProfileFilename `string`
      * provisioningProfileUploadId `string`
      * scheme `string`
      * targetToArchive `string`: The target id of the selected scheme to archive
      * teamId `string`
      * xcodeProjectSha `string`: The selected pbxproject hash to the repositroy
      * xcodeVersion `string`: Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.
  * trigger `string` (values: continous, continuous, manual)
  * id **required** `integer`

### branchConfigurations_update
Reconfigures the branch for build


```js
appcenter_ms.branchConfigurations_update({
  "branch": "",
  "params": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * branch **required** `string`: The branch name
  * params **required** `object`: The branch build configuration
    * artifactVersioning `object`: The versioning configuration for artifacts built for this branch
      * buildNumberFormat `string` (values: buildId, timestamp)
    * badgeIsEnabled `boolean`
    * cloneFromBranch `string`: A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests.
    * signed `boolean`
    * testsEnabled `boolean`
    * toolsets `object`: The branch build configuration for each toolset
      * android `object`: Build configuration for Android projects
        * automaticSigning `boolean`: Whether to apply automatic signing or not
        * buildVariant `string`: The Android build variant to build
        * gradleWrapperPath `string`: Path to the Gradle wrapper script
        * isRoot `boolean`: Whether it is the root module or not
        * keyAlias `string`: The key alias
        * keyPassword `string`: The key password
        * keystoreEncoded `string`: The keystore encoded value
        * keystoreFilename `string`: The name of the keystore file
        * keystorePassword `string`: The password of the keystore
        * module `string`: The Gradle module to build
        * runLint `boolean`: Whether to run lint checks during the build (default)
        * runTests `boolean`: Whether to run unit tests during the build (default)
      * javascript `object`: Build configuration when React Native, or other JavaScript tech, is part of the build steps
        * packageJsonPath `string`: Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
        * reactNativeVersion `string`: Version of React Native from package.json files
        * runTests `boolean`: Whether to run Jest unit tests, via npm test, during the build
      * xamarin `object`: Build configuration for Xamarin projects
        * args `string`
        * configuration `string`
        * isSimBuild `boolean`
        * monoVersion `string`
        * p12File `string`
        * p12Pwd `string`
        * provProfile `string`
        * sdkBundle `string`
        * slnPath `string`
        * symlink `string`: Symlink of the SDK Bundle and Mono installation.
      * xcode `object`: Build configuration when Xcode is part of the build steps
        * appExtensionProvisioningProfileFiles `array`
          * items `object`: Provisioning profile fetch and store information
        * archiveConfiguration `string`: The build configuration of the target to archive
        * automaticSigning `boolean`
        * cartfilePath `string`: Path to Carthage file, if present
        * certificateEncoded `string`
        * certificateFileId `string`
        * certificateFilename `string`
        * certificatePassword `string`
        * certificateUploadId `string`
        * forceLegacyBuildSystem `boolean`: Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
        * podfilePath `string`: Path to CococaPods file, if present
        * projectOrWorkspacePath `string`: Xcode project/workspace path
        * provisioningProfileEncoded `string`
        * provisioningProfileFileId `string`
        * provisioningProfileFilename `string`
        * provisioningProfileUploadId `string`
        * scheme `string`
        * targetToArchive `string`: The target id of the selected scheme to archive
        * teamId `string`
        * xcodeProjectSha `string`: The selected pbxproject hash to the repositroy
        * xcodeVersion `string`: Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.
    * trigger `string` (values: continous, continuous, manual)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output
  * artifactVersioning `object`: The versioning configuration for artifacts built for this branch
    * buildNumberFormat `string` (values: buildId, timestamp)
  * badgeIsEnabled `boolean`
  * cloneFromBranch `string`: A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests.
  * signed `boolean`
  * testsEnabled `boolean`
  * toolsets `object`: The branch build configuration for each toolset
    * android `object`: Build configuration for Android projects
      * automaticSigning `boolean`: Whether to apply automatic signing or not
      * buildVariant `string`: The Android build variant to build
      * gradleWrapperPath `string`: Path to the Gradle wrapper script
      * isRoot `boolean`: Whether it is the root module or not
      * keyAlias `string`: The key alias
      * keyPassword `string`: The key password
      * keystoreEncoded `string`: The keystore encoded value
      * keystoreFilename `string`: The name of the keystore file
      * keystorePassword `string`: The password of the keystore
      * module `string`: The Gradle module to build
      * runLint `boolean`: Whether to run lint checks during the build (default)
      * runTests `boolean`: Whether to run unit tests during the build (default)
    * javascript `object`: Build configuration when React Native, or other JavaScript tech, is part of the build steps
      * packageJsonPath `string`: Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
      * reactNativeVersion `string`: Version of React Native from package.json files
      * runTests `boolean`: Whether to run Jest unit tests, via npm test, during the build
    * xamarin `object`: Build configuration for Xamarin projects
      * args `string`
      * configuration `string`
      * isSimBuild `boolean`
      * monoVersion `string`
      * p12File `string`
      * p12Pwd `string`
      * provProfile `string`
      * sdkBundle `string`
      * slnPath `string`
      * symlink `string`: Symlink of the SDK Bundle and Mono installation.
    * xcode `object`: Build configuration when Xcode is part of the build steps
      * appExtensionProvisioningProfileFiles `array`
        * items `object`: Provisioning profile fetch and store information
          * fileId `string`: File id from secure file storage
          * fileName `string`: Name of uploaded provisioning profile
          * targetBundleIdentifier `string`: Target the provisioning profile is used to sign
          * uploadId `string`: Upload id to App Center File Upload Store
      * archiveConfiguration `string`: The build configuration of the target to archive
      * automaticSigning `boolean`
      * cartfilePath `string`: Path to Carthage file, if present
      * certificateEncoded `string`
      * certificateFileId `string`
      * certificateFilename `string`
      * certificatePassword `string`
      * certificateUploadId `string`
      * forceLegacyBuildSystem `boolean`: Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
      * podfilePath `string`: Path to CococaPods file, if present
      * projectOrWorkspacePath `string`: Xcode project/workspace path
      * provisioningProfileEncoded `string`
      * provisioningProfileFileId `string`
      * provisioningProfileFilename `string`
      * provisioningProfileUploadId `string`
      * scheme `string`
      * targetToArchive `string`: The target id of the selected scheme to archive
      * teamId `string`
      * xcodeProjectSha `string`: The selected pbxproject hash to the repositroy
      * xcodeVersion `string`: Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.
  * trigger `string` (values: continous, continuous, manual)
  * id **required** `integer`

### builds_listToolsetProjects
Returns the projects in the repository for the branch, for all toolsets


```js
appcenter_ms.builds_listToolsetProjects({
  "branch": "",
  "os": "",
  "platform": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * branch **required** `string`: The branch name
  * os **required** `string` (values: iOS, Android, Windows, macOS): The desired OS for the project scan; normally the same as the app OS
  * platform **required** `string` (values: Objective-C-Swift, React-Native, Xamarin, Java, UWP): The desired platform for the project scan
  * maxSearchDepth `integer`: The depth of the repository to search for project files
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: A collection of projects for each type of toolset
  * android `object`
    * androidModules **required** `array`: Android Gradle modules
      * items `object`
        * buildConfigurations `array`: The detected build configurations of the Android module
          * items `object`
        * buildTypes `array`: The detected build types of the Android module
          * items `string`
        * buildVariants `array`: The detected build variants of the Android module (matrix of product flavor + build type (debug|release))
          * items `string`
        * hasBundle `boolean`: Module contains bundle settings
        * isRoot `boolean`: Whether the module is at the root level of the project
        * name **required** `string`: Name of the Android module
        * productFlavors `array`: The product flavors of the Android module
          * items `string`
    * gradleWrapperPath `string`: The path of the Gradle wrapper
  * commit `string`: The commit hash of the analyzed commit
  * javascript `object`
    * javascriptSolutions `array`: The React Native solutions detected
      * items `object`
        * packageJsonPath **required** `string`: The path to the detected package.json
        * reactNativeVersion `string`: Version of React Native from package.json files
    * packageJsonPaths **required** `array`: Paths for detected package.json files
      * items `string`
  * testcloud `object`
    * projects **required** `array`: The TestCloud projects detected
      * items `object`
        * frameworkProperties `object`
          * configurations `array`
        * frameworkType **required** `string` (values: Appium, Calabash, Espresso, UITest, Generated)
        * path **required** `string`: The path to the TestCloud project
  * uwp `object`
    * uwpSolutions **required** `array`: The UWP solutions detected
      * items `object`
        * configurations **required** `array`: The possible configurations detected for the UWP solution
          * items `string`
        * path **required** `string`: The path to the UWP solution
  * xamarin `object`
    * xamarinSolutions **required** `array`: Xamarin solutions for the toolset
      * items `object`
        * configurations **required** `array`: Solution configurations
          * items `string`
        * defaultConfiguration `string`: Solution default configuration
        * path **required** `string`: Path to solution
  * xcode `object`
    * xcodeSchemeContainers **required** `array`: The Xcode scheme containers
      * items `object`
        * appExtensionTargets `array`: Information regarding project app extensions, if present
          * items `object`: App extension information
        * cartfilePath `string`: Path to Carthage file, if present
        * path **required** `string`: Path to project
        * podfilePath `string`: Path to CocoaPods file, if present
        * sharedSchemes **required** `array`: Project schemes
          * items `object`
        * workspaceProjectPaths `string`: Related projects paths for xcworkspace
        * xcodeProjectSha `string`: repo object Id of the pbxproject

### bugtracker_getSettings
Get bug tracker settings for a particular app


```js
appcenter_ms.bugtracker_getSettings({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Alerting bugtracker resource
  * event_types `array`: Event types enabled for bugtracker
    * items `string` (values: newCrashGroupCreated, newAppReleased): Alerting EventTypes enum
  * settings `object`: Bugtracker specific settings
    * callback_url `string`
    * owner_name **required** `string`
    * type **required** `string` (values: github, vsts, jira): type of bugtracker
  * state `string` (values: enabled, disabled, unauthorized): bugtracker state
  * token_id `string`: ID of OAuth token
  * type `string` (values: github, vsts, jira): type of bugtracker

### bugTracker_getRepoIssueFromCrash
Get project issue related to a crash group


```js
appcenter_ms.bugTracker_getRepoIssueFromCrash({
  "crash_group_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: CrashGroup Id
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Object returned in response to getting a bug tracker issue related to a crash group id
  * bug_tracker_type `string` (values: github, vsts, jira)
  * event_type `string`
  * id `string`
  * mobile_center_id `string`
  * repo_name `string`
  * title `string`
  * url `string`

### builds_getStatusByAppId
Application specific build service status


```js
appcenter_ms.builds_getStatusByAppId({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * message `string`
  * os `string`
  * service `string`
  * status `string`
  * url `string`
  * valid_until `integer`

### builds_get
Returns the build detail for the given build ID


```js
appcenter_ms.builds_get({
  "build_id": 0,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * build_id **required** `integer`: The build ID
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * buildNumber **required** `string`: The build number
  * finishTime `string`: The time the build was finished
  * id **required** `integer`: The build ID
  * lastChangedDate `string`: The time the build status was last changed
  * queueTime **required** `string`: The time the build was queued
  * result **required** `string`: The build result
  * sourceBranch **required** `string`: The source branch name
  * sourceVersion **required** `string`: The source SHA
  * startTime `string`: The time the build was started
  * status **required** `string`: The build status

### builds_update
Cancels a build


```js
appcenter_ms.builds_update({
  "build_id": 0,
  "properties": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * build_id **required** `integer`: The build ID
  * properties **required** `object`
    * status `string` (values: cancelling): The build status; used to cancel builds
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * buildNumber **required** `string`: The build number
  * finishTime `string`: The time the build was finished
  * id **required** `integer`: The build ID
  * lastChangedDate `string`: The time the build status was last changed
  * queueTime **required** `string`: The time the build was queued
  * result **required** `string`: The build result
  * sourceBranch **required** `string`: The source branch name
  * sourceVersion **required** `string`: The source SHA
  * startTime `string`: The time the build was started
  * status **required** `string`: The build status

### builds_distribute
Distribute a build


```js
appcenter_ms.builds_distribute({
  "build_id": 0,
  "distribute_info": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * build_id **required** `integer`: The build ID
  * distribute_info **required** `object`
    * destinations `array`: Array of objects {id:string, type:string} with "id" being the distribution group ID, store ID, or tester email, and "type" being "group", "store", or "tester"
      * items `object`: Destination details for distributing build releases
        * id **required** `string`
        * type **required** `string` (values: store, group, tester)
    * mandatoryUpdate `boolean`
    * notifyTesters `boolean`
    * releaseNotes `string`: The release notes
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * status `string`: Status of the Request
  * upload_id `string`: A unique ID of the upload

### builds_getDownloadUri
Gets the download URI


```js
appcenter_ms.builds_getDownloadUri({
  "build_id": 0,
  "download_type": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * build_id **required** `integer`: The build ID
  * download_type **required** `string` (values: build, symbols, logs, mapping, bundle): The download type
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: A download reference
  * uri **required** `string`: Download URI

### builds_getLog
Get the build log


```js
appcenter_ms.builds_getLog({
  "build_id": 0,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * build_id **required** `integer`: The build ID
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * value `array`
    * items `string`

### commits_listByShaList
Returns commit information for a batch of shas


```js
appcenter_ms.commits_listByShaList({
  "hashes": [],
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * hashes **required** `array`: A collection of commit SHAs comma-delimited
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: A list of commits
  * items `object`
    * sha `string`: The commit SHA
    * url `string`: The URL to the commit
    * commit `object`
      * author `object`
        * date `string`: Date and time of the commit
        * email `string`: Author's email
        * name `string`: Author name
      * message `string`: Commit message

### crashGroups_list
Gets a list of crash groups and whether the list contains all available groups.


```js
appcenter_ms.crashGroups_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * last_occurrence_from `string`: Earliest date when the last time a crash occured in a crash group
  * last_occurrence_to `string`: Latest date when the last time a crash occured in a crash group
  * app_version `string`: version
  * group_type `string` (values: GroupType1, GroupType2)
  * group_status `string` (values: open, closed, ignored)
  * group_text_search `string`: A freetext search that matches in crash, crash types, crash stack_traces and crash user
  * $orderby `string` (values: last_occurrence asc, last_occurrence desc, count asc, count desc, display_id asc, display_id desc, impacted_users asc, impacted_users desc): the OData-like $orderby argument
  * continuation_token `string`: Cassandra request continuation token. The token is used for pagination.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * continuation_token `string`: Cassandra request continuation token. The token is used for pagination.
  * crash_groups **required** `array`
    * items `object`
      * annotation **required** `string`
      * app_version **required** `string`
      * build **required** `string`
      * count **required** `integer`
      * crash_group_id **required** `string`
      * crash_reason **required** `string`
      * display_id **required** `string`
      * exception `string`
      * fatal **required** `boolean`: Crash or handled exception
      * first_occurrence **required** `string`
      * impacted_users `integer`
      * last_occurrence **required** `string`
      * new_crash_group_id **required** `string`
      * reason_frame `object`: frame belonging to the reason of the crash
        * app_code `boolean`: this line isn't from any framework
        * class_method `boolean`: is a class method
        * class_name `string`: name of the class
        * code_formatted `string`: Formatted frame string
        * code_raw `string`: Unformatted Frame string
        * exception_type `string`: Exception type.
        * file `string`: name of the file
        * framework_name `string`: Name of the framework
        * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
        * line `integer`: line number
        * method `string`: name of the method
        * method_params `string`: parameters of the frames method
        * os_exception_type `string`: OS exception type. (aka. SIGNAL)
      * status **required** `string` (values: open, closed, ignored)
  * limited_result_set **required** `boolean`

### crashGroups_get
Gets a specific group.


```js
appcenter_ms.crashGroups_get({
  "crash_group_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * annotation **required** `string`
  * app_version **required** `string`
  * build **required** `string`
  * count **required** `integer`
  * crash_group_id **required** `string`
  * crash_reason **required** `string`
  * display_id **required** `string`
  * exception `string`
  * fatal **required** `boolean`: Crash or handled exception
  * first_occurrence **required** `string`
  * impacted_users `integer`
  * last_occurrence **required** `string`
  * new_crash_group_id **required** `string`
  * reason_frame `object`: frame belonging to the reason of the crash
    * app_code `boolean`: this line isn't from any framework
    * class_method `boolean`: is a class method
    * class_name `string`: name of the class
    * code_formatted `string`: Formatted frame string
    * code_raw `string`: Unformatted Frame string
    * exception_type `string`: Exception type.
    * file `string`: name of the file
    * framework_name `string`: Name of the framework
    * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
    * line `integer`: line number
    * method `string`: name of the method
    * method_params `string`: parameters of the frames method
    * os_exception_type `string`: OS exception type. (aka. SIGNAL)
  * status **required** `string` (values: open, closed, ignored)

### crashGroups_update
Updates a group.


```js
appcenter_ms.crashGroups_update({
  "crash_group_id": "",
  "group": {},
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * group **required** `object`
    * annotation `string`
    * status `string` (values: open, closed, ignored)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * annotation **required** `string`
  * app_version **required** `string`
  * build **required** `string`
  * count **required** `integer`
  * crash_group_id **required** `string`
  * crash_reason **required** `string`
  * display_id **required** `string`
  * exception `string`
  * fatal **required** `boolean`: Crash or handled exception
  * first_occurrence **required** `string`
  * impacted_users `integer`
  * last_occurrence **required** `string`
  * new_crash_group_id **required** `string`
  * reason_frame `object`: frame belonging to the reason of the crash
    * app_code `boolean`: this line isn't from any framework
    * class_method `boolean`: is a class method
    * class_name `string`: name of the class
    * code_formatted `string`: Formatted frame string
    * code_raw `string`: Unformatted Frame string
    * exception_type `string`: Exception type.
    * file `string`: name of the file
    * framework_name `string`: Name of the framework
    * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
    * line `integer`: line number
    * method `string`: name of the method
    * method_params `string`: parameters of the frames method
    * os_exception_type `string`: OS exception type. (aka. SIGNAL)
  * status **required** `string` (values: open, closed, ignored)

### crashes_list
Gets all crashes of a group.


```js
appcenter_ms.crashes_list({
  "crash_group_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * include_report `boolean`: true if the crash should include the raw crash report. Default is false
  * include_log `boolean`: true if the crash should include the custom log report. Default is false
  * date_from `string`
  * date_to `string`
  * app_version `string`: version
  * error_type `string` (values: CrashingErrors, HandledErrors)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items [Crash](#crash)

### crashes_delete
Delete a specific crash and related attachments and blobs for an app.


```js
appcenter_ms.crashes_delete({
  "crash_group_id": "",
  "crash_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * crash_id **required** `string`: id of a specific crash
  * retention_delete `boolean`: true in that case if the method should skip update counts
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * app_id `string`
  * attachments_deleted `integer`
  * blobs_failed `integer`
  * blobs_succeeded `integer`
  * crash_group_id `string`
  * crash_id `string`
  * crashes_deleted `integer`

### crashes_get
Gets a specific crash for an app.


```js
appcenter_ms.crashes_get({
  "crash_group_id": "",
  "crash_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * crash_id **required** `string`: id of a specific crash
  * include_report `boolean`: true if the crash should include the raw crash report. Default is false
  * include_log `boolean`: true if the crash should include the custom log report. Default is false
  * include_details `boolean`: true if the crash should include in depth crash details
  * include_stacktrace `boolean`: true if the crash should include the stacktrace information
  * grouping_only `boolean`: true if the stacktrace should be only the relevant thread / exception. Default is false
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output [Crash](#crash)

### crashes_getNativeCrash
Gets the native log of a specific crash.


```js
appcenter_ms.crashes_getNativeCrash({
  "crash_group_id": "",
  "crash_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * crash_id **required** `string`: id of a specific crash
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `string`

### crashes_getNativeCrashDownload
Gets the native log of a specific crash as a text attachment.


```js
appcenter_ms.crashes_getNativeCrashDownload({
  "crash_group_id": "",
  "crash_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * crash_id **required** `string`: id of a specific crash
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `string`

### crashes_getRawCrashLocation
Gets the URI location to download json of a specific crash.


```js
appcenter_ms.crashes_getRawCrashLocation({
  "crash_group_id": "",
  "crash_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * crash_id **required** `string`: id of a specific crash
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Location for downloading crash raw
  * uri **required** `string`

### crashes_getStacktrace
Gets a stacktrace for a specific crash.


```js
appcenter_ms.crashes_getStacktrace({
  "crash_group_id": "",
  "crash_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * crash_id **required** `string`: id of a specific crash
  * grouping_only `boolean`: true if the stacktrace should be only the relevant thread / exception. Default is false
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output [Stacktrace](#stacktrace)

### crashGroups_getStacktrace
Gets a stacktrace for a specific crash.


```js
appcenter_ms.crashGroups_getStacktrace({
  "crash_group_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_group_id **required** `string`: id of a specific group
  * grouping_only `boolean`: true if the stacktrace should be only the relevant thread / exception. Default is false
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output [Stacktrace](#stacktrace)

### crashes_listAttachments
Gets all attachments for a specific crash.


```js
appcenter_ms.crashes_listAttachments({
  "crash_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_id **required** `string`: id of a specific crash
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * app_id **required** `string`
    * attachment_id **required** `string`
    * blob_location **required** `string`
    * content_type **required** `string`
    * crash_id **required** `string`
    * created_time **required** `string`
    * file_name **required** `string`
    * size **required** `number`

### crashes_getCrashAttachmentLocation
Gets the URI location to download crash attachment.


```js
appcenter_ms.crashes_getCrashAttachmentLocation({
  "crash_id": "",
  "attachment_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_id **required** `string`: id of a specific crash
  * attachment_id **required** `string`: attachment id
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Location for downloading crash attachment
  * uri **required** `string`

### crashes_getCrashTextAttachmentContent
Gets content of the text attachment.


```js
appcenter_ms.crashes_getCrashTextAttachmentContent({
  "crash_id": "",
  "attachment_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_id **required** `string`: id of a specific crash
  * attachment_id **required** `string`: attachment id
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `string`

### Crashes_ListSessionLogs
Get session logs by crash ID


```js
appcenter_ms.Crashes_ListSessionLogs({
  "crash_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * crash_id **required** `string`: The id of the a crash
  * date `string`: Date of data requested
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * exceeded_max_limit `boolean`: indicates if the number of available logs are more than the max allowed return limit(100).
  * last_received_log_timestamp `string`: the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
  * logs **required** `array`: the list of logs
    * items `object`: Generic log.
      * account_id `string`: Account ID of the authenticated user.
      * auth_provider `string`: Auth service provider.
      * device **required** `object`: Device characteristics.
        * app_build **required** `string`: The app's build number, e.g. 42.
        * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
        * app_version **required** `string`: Application version name, e.g. 1.1.0
        * carrier_code `string`: Carrier country code (for mobile devices).
        * carrier_country `string`: Carrier country.
        * carrier_name `string`: Carrier name (for mobile devices).
        * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
        * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
        * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
        * locale **required** `string`: Language code (example: en_US).
        * model `string`: Device model (example: iPad2,3).
        * oem_name `string`: Device manufacturer (example: HTC).
        * os_api_level `integer`: API level when applicable like in Android (example: 15).
        * os_build `string`: OS build code (example: LMY47X).
        * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
        * os_version **required** `string`: OS version (example: 9.3.0).
        * screen_size `string`: Screen size of the device in pixels (example: 640x480).
        * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
        * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
        * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
        * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
        * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
        * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
      * event_id `string`: Event ID.
      * event_name `string`: Event name.
      * install_id **required** `string`: Install ID.
      * message_id `string`: Message ID.
      * properties `object`: event specific properties.
      * session_id `string`: Session ID.
      * timestamp **required** `string`: Log creation timestamp.
      * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### crashes_getAppCrashesInfo
Gets whether the application has any crashes.


```js
appcenter_ms.crashes_getAppCrashesInfo({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * features **required** `object`
    * crash_download_raw `boolean`: App supports download of raw crashes
    * crashgroup_analytics_crashfreeusers `boolean`: App supports the 'crash free user' metric
    * crashgroup_analytics_impactedusers `boolean`: App supports the 'impacted users' metric
    * crashgroup_modify_annotation `boolean`: App supports modification of crashgroup annotation
    * crashgroup_modify_status `boolean`: App supports modification of crashgroup status
    * search `boolean`: App supports search API
  * has_crashes **required** `boolean`

### codePushDeployments_list
Gets a list of CodePush deployments for the given app


```js
appcenter_ms.codePushDeployments_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * key `string`
    * latest_release
      * description `string`
      * is_disabled `boolean`
      * is_mandatory `boolean`
      * rollout `integer`
      * target_binary_range `string`
      * blob_url `string`
      * diff_package_map `object`
      * label `string`
      * original_deployment `string`: Set on 'Promote'
      * original_label `string`: Set on 'Promote' and 'Rollback'
      * package_hash `string`
      * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
      * released_by `string`
      * size `number`
      * upload_time `integer`
    * name **required** `string`

### codePushDeployments_create
Creates a CodePush Deployment for the given app


```js
appcenter_ms.codePushDeployments_create({
  "deployment": {
    "name": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment **required** `object`
    * key `string`
    * latest_release
      * description `string`
      * is_disabled `boolean`
      * is_mandatory `boolean`
      * rollout `integer`
      * target_binary_range `string`
      * blob_url `string`
      * diff_package_map `object`
      * label `string`
      * original_deployment `string`: Set on 'Promote'
      * original_label `string`: Set on 'Promote' and 'Rollback'
      * package_hash `string`
      * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
      * released_by `string`
      * size `number`
      * upload_time `integer`
    * name **required** `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * key `string`
  * latest_release
    * description `string`
    * is_disabled `boolean`
    * is_mandatory `boolean`
    * rollout `integer`
    * target_binary_range `string`
    * blob_url `string`
    * diff_package_map `object`
    * label `string`
    * original_deployment `string`: Set on 'Promote'
    * original_label `string`: Set on 'Promote' and 'Rollback'
    * package_hash `string`
    * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
    * released_by `string`
    * size `number`
    * upload_time `integer`
  * name **required** `string`

### codePushDeployments_delete
Deletes a CodePush Deployment for the given app


```js
appcenter_ms.codePushDeployments_delete({
  "deployment_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * body `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### codePushDeployments_get
Gets a CodePush Deployment for the given app


```js
appcenter_ms.codePushDeployments_get({
  "deployment_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * key `string`
  * latest_release
    * description `string`
    * is_disabled `boolean`
    * is_mandatory `boolean`
    * rollout `integer`
    * target_binary_range `string`
    * blob_url `string`
    * diff_package_map `object`
    * label `string`
    * original_deployment `string`: Set on 'Promote'
    * original_label `string`: Set on 'Promote' and 'Rollback'
    * package_hash `string`
    * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
    * released_by `string`
    * size `number`
    * upload_time `integer`
  * name **required** `string`

### codePushDeployments_update
Modifies a CodePush Deployment for the given app


```js
appcenter_ms.codePushDeployments_update({
  "deployment_name": "",
  "deployment": {
    "name": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * deployment **required** `object`
    * name **required** `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### codePushDeploymentMetrics_get
Gets all releases metrics for specified Deployment


```js
appcenter_ms.codePushDeploymentMetrics_get({
  "deployment_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * active **required** `integer`
    * downloaded `integer`
    * failed `integer`
    * installed `integer`
    * label **required** `string`

### codePushDeployments_promote
Promote one release (default latest one) from one deployment to another


```js
appcenter_ms.codePushDeployments_promote({
  "deployment_name": "",
  "promote_deployment_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * promote_deployment_name **required** `string`: deployment name
  * release
    * description `string`
    * is_disabled `boolean`
    * is_mandatory `boolean`
    * rollout `integer`
    * target_binary_range `string`
    * label `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output
  * description `string`
  * is_disabled `boolean`
  * is_mandatory `boolean`
  * rollout `integer`
  * target_binary_range `string`
  * blob_url `string`
  * diff_package_map `object`
  * label `string`
  * original_deployment `string`: Set on 'Promote'
  * original_label `string`: Set on 'Promote' and 'Rollback'
  * package_hash `string`
  * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
  * released_by `string`
  * size `number`
  * upload_time `integer`

### codePushDeploymentReleases_delete
Clears a Deployment of releases


```js
appcenter_ms.codePushDeploymentReleases_delete({
  "deployment_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### codePushDeploymentReleases_get
Gets the history of releases on a Deployment


```js
appcenter_ms.codePushDeploymentReleases_get({
  "deployment_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items
    * description `string`
    * is_disabled `boolean`
    * is_mandatory `boolean`
    * rollout `integer`
    * target_binary_range `string`
    * blob_url `string`
    * diff_package_map `object`
    * label `string`
    * original_deployment `string`: Set on 'Promote'
    * original_label `string`: Set on 'Promote' and 'Rollback'
    * package_hash `string`
    * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
    * released_by `string`
    * size `number`
    * upload_time `integer`

### codePushDeploymentReleases_create
Create a new CodePush release for the specified deployment


```js
appcenter_ms.codePushDeploymentReleases_create({
  "deployment_name": "",
  "uploaded_release": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * uploaded_release **required** `object`
    * deployment_name `string`: This specifies which deployment you want to release the update to. Default is Staging.
    * description `string`: This provides an optional "change log" for the deployment.
    * disabled `boolean`: This specifies whether an update should be downloadable by end users or not.
    * mandatory `boolean`: This specifies whether the update should be considered mandatory or not (e.g. it includes a critical security fix).
    * no_duplicate_release_error `boolean`: This specifies that if the update is identical to the latest release on the deployment, the CLI should generate a warning instead of an error.
    * release_upload **required** `object`: The upload metadata from the release initialization step.
      * id **required** `string`: The ID for the newly created upload. It is going to be required later in the process.
      * token **required** `string`: The URL encoded token used for upload permissions.
      * upload_domain **required** `string`: The URL domain used to upload the release.
    * rollout `integer`: This specifies the percentage of users (as an integer between 1 and 100) that should be eligible to receive this update.
    * target_binary_version **required** `string`: the binary version of the application
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output
  * description `string`
  * is_disabled `boolean`
  * is_mandatory `boolean`
  * rollout `integer`
  * target_binary_range `string`
  * blob_url `string`
  * diff_package_map `object`
  * label `string`
  * original_deployment `string`: Set on 'Promote'
  * original_label `string`: Set on 'Promote' and 'Rollback'
  * package_hash `string`
  * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
  * released_by `string`
  * size `number`
  * upload_time `integer`

### deploymentReleases_update
Modifies a CodePush release metadata under the given Deployment


```js
appcenter_ms.deploymentReleases_update({
  "deployment_name": "",
  "release_label": "",
  "release": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * release_label **required** `string`: release label
  * release **required**
    * description `string`
    * is_disabled `boolean`
    * is_mandatory `boolean`
    * rollout `integer`
    * target_binary_range `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output
  * description `string`
  * is_disabled `boolean`
  * is_mandatory `boolean`
  * rollout `integer`
  * target_binary_range `string`
  * blob_url `string`
  * diff_package_map `object`
  * label `string`
  * original_deployment `string`: Set on 'Promote'
  * original_label `string`: Set on 'Promote' and 'Rollback'
  * package_hash `string`
  * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
  * released_by `string`
  * size `number`
  * upload_time `integer`

### codePushDeploymentRelease_rollback
Rollback the latest or a specific release for an app deployment


```js
appcenter_ms.codePushDeploymentRelease_rollback({
  "deployment_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * releaseLabel `object`
    * label `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output
  * description `string`
  * is_disabled `boolean`
  * is_mandatory `boolean`
  * rollout `integer`
  * target_binary_range `string`
  * blob_url `string`
  * diff_package_map `object`
  * label `string`
  * original_deployment `string`: Set on 'Promote'
  * original_label `string`: Set on 'Promote' and 'Rollback'
  * package_hash `string`
  * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
  * released_by `string`
  * size `number`
  * upload_time `integer`

### codePushDeploymentUpload_create
Create a new CodePush release upload for the specified deployment


```js
appcenter_ms.codePushDeploymentUpload_create({
  "deployment_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deployment_name **required** `string`: deployment name
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * id **required** `string`: The ID for the newly created upload. It is going to be required later in the process.
  * token **required** `string`: The URL encoded token used for upload permissions.
  * upload_domain **required** `string`: The URL domain used to upload the release.

### test_getDeviceConfigurations
Returns a list of available devices


```js
appcenter_ms.test_getDeviceConfigurations({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * app_upload_id `string`: The ID of the test run
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * id `string`: The unique id of the device configuration
    * image `object`
      * full `string`
      * thumb `string`
    * marketShare `number`
    * model `object`
      * availabilityCount `number`
      * cpu `object`: CPU data for device
        * core `string`
        * frequency `string`
        * text `string`
      * deviceFrame `object`
        * full `object`
          * frameUrl `string`
          * height `number`
          * screen `array`
          * width `number`
        * grid `object`
          * frameUrl `string`
          * height `number`
          * screen `array`
          * width `number`
      * dimensions `object`: Physical device dimensions
        * depth `object`
        * height `object`
        * width `object`
      * formFactor `string`
      * manufacturer `string`
      * memory `object`: Memory data for device
        * formattedSize `string`
      * model `string`
      * name `string`
      * platform `string`
      * releaseDate `string`
      * resolution `object`: Device screen resolution
        * height `string`
        * ppi `string`
        * width `string`
      * screenRotation `number`
      * screenSize `object`: Physical device screen dimensions
        * cm `string`
        * in `string`
    * name `string`: The name of the device model and OS version
    * os `string`
    * osName `string`
    * tier `number`: The tier

### test_createDeviceSelection
Creates a short ID for a list of devices


```js
appcenter_ms.test_createDeviceSelection({
  "deviceList": {
    "devices": []
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deviceList **required** `object`: A list of device IDs
    * devices **required** `array`
      * items `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Short ID for a list of device IDs
  * shortId **required** `string`: Identifier of the device selection

### App_BlockLogs
**Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.



```js
appcenter_ms.App_BlockLogs({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `string`

### Devices_BlockLogs
**Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.



```js
appcenter_ms.Devices_BlockLogs({
  "install_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * install_id **required** `string`: The id of the device
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `string`

### missingSymbolGroups_list
Gets top N (ordered by crash count) of crash groups by missing symbol


```js
appcenter_ms.missingSymbolGroups_list({
  "top": 0,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * top **required** `integer`: top N elements
  * filter `string`: query filter
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: grouped by missing symbols crashes response object
  * groups **required** `array`: list of crash groups formed by missing symbols combination
    * items `object`: missing symbol crash group object
      * app_build **required** `string`: application build
      * app_id **required** `string`: application id
      * app_ver **required** `string`: application version
      * crash_count `integer`: number of crashes that belong to this group
      * error_count `integer`: number of errors that belong to this group
      * last_modified **required** `string`: last update date for the group
      * missing_symbols **required** `array`: list of missing symbols
        * items `object`: missing symbol
          * name **required** `string`: symbol name
          * platform `string`: symbol plarform
          * status **required** `string` (values: missing, ignored, available): symbol status
          * symbol_id **required** `string`: symbol id
      * status **required** `string` (values: active, pending, closed): group status
      * symbol_group_id **required** `string`: id of the symbol group
  * total_crash_count **required** `integer`: total number of crashes for all the groups

### missingSymbolGroups_get
Gets missing symbol crash group by its id


```js
appcenter_ms.missingSymbolGroups_get({
  "symbol_group_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * symbol_group_id **required** `string`: missing symbol crash group id
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: grouped by missing symbols crashes response object
  * groups **required** `array`: list of crash groups formed by missing symbols combination
    * items `object`: missing symbol crash group object
      * app_build **required** `string`: application build
      * app_id **required** `string`: application id
      * app_ver **required** `string`: application version
      * crash_count `integer`: number of crashes that belong to this group
      * error_count `integer`: number of errors that belong to this group
      * last_modified **required** `string`: last update date for the group
      * missing_symbols **required** `array`: list of missing symbols
        * items `object`: missing symbol
          * name **required** `string`: symbol name
          * platform `string`: symbol plarform
          * status **required** `string` (values: missing, ignored, available): symbol status
          * symbol_id **required** `string`: symbol id
      * status **required** `string` (values: active, pending, closed): group status
      * symbol_group_id **required** `string`: id of the symbol group
  * total_crash_count **required** `integer`: total number of crashes for all the groups

### missingSymbolGroups_info
Gets application level statistics for all missing symbol groups


```js
appcenter_ms.missingSymbolGroups_info({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: missing symbol groups
  * total_crash_count **required** `integer`: total number of crashes for all missing symbol groups

### distributionGroups_list
Returns a list of distribution groups in the app specified


```js
appcenter_ms.distributionGroups_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * display_name `string`: The name of the distribution group
    * id **required** `string`: The unique ID of the distribution group
    * is_public **required** `boolean`: Whether the distribution group is public
    * name **required** `string`: The name of the distribution group used in URLs
    * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group

### distributionGroups_create
Creates a new distribution group and returns it to the caller


```js
appcenter_ms.distributionGroups_create({
  "owner_name": "",
  "app_name": "",
  "distribution_group": null
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * distribution_group **required** `object`
    * display_name `string`: The display name of the distribution group. If not specified, the name will be used.
    * name **required** `string`: The name of the distribution group

#### Output
* output `object`
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group

### distributionGroups_delete
Deletes a distribution group


```js
appcenter_ms.distributionGroups_delete({
  "app_name": "",
  "owner_name": "",
  "distribution_group_name": ""
}, context)
```

#### Input
* input `object`
  * app_name **required** `string`: The name of the application
  * owner_name **required** `string`: The name of the owner
  * distribution_group_name **required** `string`: The name of the distribution group

#### Output
*Output schema unknown*

### distributionGroups_get
Returns a single distribution group for a given distribution group name


```js
appcenter_ms.distributionGroups_get({
  "owner_name": "",
  "app_name": "",
  "distribution_group_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * distribution_group_name **required** `string`: The name of the distribution group

#### Output
* output `object`
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group

### distributionGroups_update
Updates the attributes of distribution group


```js
appcenter_ms.distributionGroups_update({
  "owner_name": "",
  "app_name": "",
  "distribution_group_name": "",
  "distribution_group": null
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * distribution_group_name **required** `string`: The name of the distribution group
  * distribution_group **required** `object`
    * is_public `boolean`: Whether the distribution group is public
    * name `string`: The name of the distribution group

#### Output
* output `object`
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group

### devices_list
Returns all devices associated with the given distribution group


```js
appcenter_ms.devices_list({
  "distribution_group_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * distribution_group_name **required** `string`: The name of the distribution group.
  * release_id `number`: when provided, gets the provisioning state of the devices owned by users of this distribution group when compared to the provided release.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: The information for a single iOS device
    * device_name **required** `string`: The device description, in the format "iPhone 7 Plus (A1784)"
    * full_device_name `string`: A combination of the device model name and the owner name.
    * imei `string`: The device's International Mobile Equipment Identity number. Always empty or undefined at present.
    * model **required** `string`: The model identifier of the device, in the format iDeviceM,N
    * os_build **required** `string`: The last known OS version running on the device
    * os_version **required** `string`: The last known OS version running on the device
    * owner_id `string`: The user ID of the device owner.
    * registered_at `string`: Timestamp of when the device was registered in ISO format.
    * serial `string`: The device's serial number. Always empty or undefined at present.
    * status **required** `string`: The provisioning status of the device.
    * udid **required** `string`: The Unique Device IDentifier of the device

### devices_listCsvFormat
Returns all devices associated with the given distribution group.


```js
appcenter_ms.devices_listCsvFormat({
  "distribution_group_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * distribution_group_name **required** `string`: The name of the distribution group.
  * unprovisioned_only `boolean`: when true, filters out provisioned devices
  * udids `array`: multiple UDIDs which should be part of the resulting CSV.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### distributionGroups_listUsers
Returns a list of member details in the distribution group specified


```js
appcenter_ms.distributionGroups_listUsers({
  "owner_name": "",
  "app_name": "",
  "distribution_group_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * distribution_group_name **required** `string`: The name of the distribution group
  * exclude_pending_invitations `boolean`: Whether to exclude pending invitations in the response

#### Output
* output `array`
  * items `object`
    * avatar_url `string`: The avatar URL of the user
    * can_change_password `boolean`: User is required to send an old password in order to change the password.
    * display_name `string`: The full name of the user. Might for example be first and last name
    * email **required** `string`: The email address of the user
    * id `string`: The unique id (UUID) of the user
    * invite_pending `boolean`: Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
    * name `string`: The unique name that is used to identify the user.

### distributionGroups_addUser
Adds the members to the specified distribution group


```js
appcenter_ms.distributionGroups_addUser({
  "owner_name": "",
  "app_name": "",
  "distribution_group_name": "",
  "members": null
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * distribution_group_name **required** `string`: The name of the distribution group
  * members **required** `object`
    * user_emails `array`: The list of emails of the users
      * items `string`

#### Output
* output `array`
  * items `object`
    * code `string`: The code of the result
    * invite_pending `boolean`: Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
    * message `string`: The message of the result
    * status **required** `integer`: The status code of the result
    * user_email `string`: The email of the user

### distributionGroups_removeUser
Remove the users from the distribution group


```js
appcenter_ms.distributionGroups_removeUser({
  "owner_name": "",
  "app_name": "",
  "distribution_group_name": "",
  "members": null
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * distribution_group_name **required** `string`: The name of the distribution group
  * members **required** `object`
    * user_emails `array`: The list of emails of the users
      * items `string`

#### Output
* output `array`
  * items `object`
    * code `string`: The code of the result
    * message `integer`: The message of the result
    * status **required** `integer`: The status code of the result
    * user_email `string`: The email of the user

### releases_listByDistributionGroup
Return basic information about distributed releases in a given distribution group.


```js
appcenter_ms.releases_listByDistributionGroup({
  "distribution_group_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * distribution_group_name **required** `string`: The name of the distribution group.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: Response for getting a list of releases in a distribution group
  * items `object`: Response for getting a list of releases in a distribution group
    * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
    * id **required** `integer`: ID identifying this unique release.
    * is_external_build `boolean`: This value determines if a release is external or not.
    * mandatory_update **required** `boolean`: A boolean which determines whether the release is a mandatory update or not.
    * origin `string` (values: hockeyapp, appcenter): The release's origin
    * short_version **required** `string`: The release's short version.<br>
    * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
    * version **required** `string`: The release's version.<br>

### releases_deleteWithDistributionGroupId
Deletes a release with id 'release_id' in a given distribution group.


```js
appcenter_ms.releases_deleteWithDistributionGroupId({
  "owner_name": "",
  "app_name": "",
  "distribution_group_name": "",
  "release_id": 0
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the app owner
  * app_name **required** `string`: The name of the app
  * distribution_group_name **required** `string`: The name of the distribution group.
  * release_id **required** `integer`: The ID identifying the unique release.

#### Output
*Output schema unknown*

### releases_getLatestByDistributionGroup
Return detailed information about a distributed release in a given distribution group.


```js
appcenter_ms.releases_getLatestByDistributionGroup({
  "owner_name": "",
  "app_name": "",
  "distribution_group_name": "",
  "release_id": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the app owner
  * app_name **required** `string`: The name of the app
  * distribution_group_name **required** `string`: The name of the distribution group.
  * release_id **required** `string`: Also supports the constant `latest`, which will return the latest release in the distribution group.

#### Output
* output `object`: Details of an uploaded release
  * android_min_api_level `string`: The release's minimum required Android API level.
  * app_display_name **required** `string`: The app's display name.
  * app_icon_url **required** `string`: A URL to the app's icon.
  * app_name **required** `string`: The app's name (extracted from the uploaded release).
  * app_os `string`: The app's OS.
  * build `object`: Contains metadata about the build that produced the release being uploaded
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * bundle_identifier `string`: The identifier of the apps bundle.
  * can_resign `boolean`: In calls that allow passing `udid` in the query string, this value determines if a release can be re-signed. When true, after a re-sign, the tester will be able to install the release from his registered devices. Will not be returned for non-iOS platforms.
  * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
  * destinations `array`: A list of distribution groups or stores.
    * items
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
      * is_latest `boolean`: Is the containing release the latest one in this distribution group.
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
      * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * destination_type `string` (values: group, store, tester): Destination can be either store or group.
      * display_name `string`: Display name for the group or tester
  * device_family `string`: The release's device family.
  * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
  * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
  * download_url `string`: The URL that hosts the binary for this release.
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * fingerprint `string`: MD5 checksum of the release binary.
  * id **required** `integer`: ID identifying this unique release.
  * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * is_external_build `boolean`: This value determines if a release is external or not.
  * is_provisioning_profile_syncing `boolean`: A flag that determines whether the release's provisioning profile is still extracted or not.
  * is_udid_provisioned `boolean`: In calls that allow passing `udid` in the query string, this value will hold the provisioning status of that UDID in this release. Will be ignored for non-iOS platforms.
  * min_os `string`: The release's minimum required operating system.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * package_hashes `array`: Hashes for the packages.
    * items `string`
  * provisioning_profile_expiry_date `string`: expiration date of provisioning profile in UTC format.
  * provisioning_profile_name `string`: The release's provisioning profile name.
  * provisioning_profile_type `string` (values: adhoc, enterprise, other): The type of the provisioning profile for the requested app version.
  * release_notes `string`: The release's release notes.
  * short_version **required** `string`: The release's short version.<br>
  * size `integer`: The release's size in bytes.
  * status `string`: Status of the release.
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>

### distributionGroups_resendInvite
Resend distribution group app invite notification to previously invited testers


```js
appcenter_ms.distributionGroups_resendInvite({
  "owner_name": "",
  "app_name": "",
  "distribution_group_name": "",
  "members": null
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * distribution_group_name **required** `string`: The name of the distribution group
  * members **required** `object`
    * user_emails `array`: The list of emails of the users
      * items `string`

#### Output
*Output schema unknown*

### stores_list
Get all the store details from Storage store table for a particular application.


```js
appcenter_ms.stores_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: ExternalStoreResponse
    * created_by `string`: The ID of the principal that created the store.
    * created_by_principal_type `string`: The type of the principal that created the store.
    * id `string`: Store id
    * intune_details `object`: Store details for intune
      * app_category `object`
        * id `string`: ID for the category.
        * name `string`: display name for the app category
      * target_audience `object`
        * id `string`: ID for the target audience/group.
        * name `string`: display name for the target audience/group
    * name `string`: Store Name
    * service_connection_id `string`: Id for the shared service connection. In case of Apple / GooglePlay stores, this connection will be used to connect to the Apple / Google stores in App Center.
    * track `string` (values: production, alpha, beta, testflight-internal, testflight-external): Store track
    * type `string`: Store Type

### stores_create
Create a new external store for the specified application.


```js
appcenter_ms.stores_create({
  "body": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`: ExternalStoreRequest
    * intune_details `object`
      * app_category `object`
        * name `string`: display name for the app category
      * secret_json `object`
        * id_token `string`: the id token of user
        * refresh_token `string`: the refresh token for user
        * refresh_token_expiry `string`: the expiry of refresh token
      * target_audience `object`
        * name `string`: display name for the target audience/group
      * tenant_id `string`: tenant id of the intune store
    * name `string`: name of the store. In case of googleplay, and Apple store this is fixed to Production.
    * service_connection_id `string`: Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
    * track `string` (values: production, alpha, beta, testflight-internal, testflight-external): track of the store. Can be production, alpha & beta for googleplay. Can be production, testflight-internal & testflight-external for Apple Store.
    * type `string` (values: googleplay, apple): store Type
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: ExternalStoreResponse
  * created_by `string`: The ID of the principal that created the store.
  * created_by_principal_type `string`: The type of the principal that created the store.
  * id `string`: Store id
  * intune_details `object`: Store details for intune
    * app_category `object`
      * id `string`: ID for the category.
      * name `string`: display name for the app category
    * target_audience `object`
      * id `string`: ID for the target audience/group.
      * name `string`: display name for the target audience/group
  * name `string`: Store Name
  * service_connection_id `string`: Id for the shared service connection. In case of Apple / GooglePlay stores, this connection will be used to connect to the Apple / Google stores in App Center.
  * track `string` (values: production, alpha, beta, testflight-internal, testflight-external): Store track
  * type `string`: Store Type

### stores_delete
delete the store based on specific store name.


```js
appcenter_ms.stores_delete({
  "store_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * body `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### stores_get
Return the store details for specified store name.


```js
appcenter_ms.stores_get({
  "store_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: ExternalStoreResponse
  * created_by `string`: The ID of the principal that created the store.
  * created_by_principal_type `string`: The type of the principal that created the store.
  * id `string`: Store id
  * intune_details `object`: Store details for intune
    * app_category `object`
      * id `string`: ID for the category.
      * name `string`: display name for the app category
    * target_audience `object`
      * id `string`: ID for the target audience/group.
      * name `string`: display name for the target audience/group
  * name `string`: Store Name
  * service_connection_id `string`: Id for the shared service connection. In case of Apple / GooglePlay stores, this connection will be used to connect to the Apple / Google stores in App Center.
  * track `string` (values: production, alpha, beta, testflight-internal, testflight-external): Store track
  * type `string`: Store Type

### stores_patch
Update the store.


```js
appcenter_ms.stores_patch({
  "store_name": "",
  "body": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * body **required** `object`
    * service_connection_id **required** `string`: Service connection id to updated.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### storeReleases_getLatest
Returns the latest release published in a store.


```js
appcenter_ms.storeReleases_getLatest({
  "store_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Details of an uploaded release
    * android_min_api_level `string`: The release's minimum required Android API level.
    * app_display_name `string`: The app's display name.
    * app_name `string`: The app's name (extracted from the uploaded release).
    * bundle_identifier `string`: The identifier of the apps bundle.
    * distribution_stores `array`: a list of distribution stores that are associated with this release.
      * items `object`
        * id `string`: ID identifying a unique distribution store.
        * name `string`: A name identifying a unique distribution store.
        * publishing_status `string`: publishing status of the release in the store.
        * type `string` (values: intune, googleplay): type of the distribution store currently stores type can be intune or googleplay.
    * download_url `string`: The URL that hosts the binary for this release.
    * fingerprint `string`: MD5 checksum of the release binary.
    * id `number`: ID identifying this unique release.
    * install_url `string` (values: group, store): The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
    * min_os `string`: The release's minimum required operating system.
    * release_notes `string`: The release's release notes.
    * short_version `string`: The release's short version.<br>
    * size `number`: The release's size in bytes.
    * status `string` (values: available, unavailable): OBSOLETE. Will be removed in next version. The availability concept is now replaced with distributed. Any 'available' release will be associated with the default distribution group of an app.</br>
    * uploaded_at `string`: UTC time in ISO 8601 format of the uploaded time.
    * version `string`: The release's version.<br>

### storeReleases_list
Return all releases published  in a store


```js
appcenter_ms.storeReleases_list({
  "store_name": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Basic information on a release
    * destination_type `string` (values: group, store, tester): Destination for this release.
    * distribution_stores `array`: a list of distribution stores that are associated with this release.
      * items `object`
        * id `string`: ID identifying a unique distribution store.
        * is_latest `boolean`: Is the containing release the latest one in this distribution store.
        * name `string`: A name identifying a unique distribution store.
        * publishing_status `string`: A status identifying the status of release in the distribution store.
        * type `string` (values: googleplay, intune, apple): A type identifying the type of distribution store.
    * id `number`: ID identifying this unique release.
    * short_version `string`: The release's short version.
    * uploaded_at `string`: UTC time in ISO 8601 format of the uploaded time.
    * version `string`: The release's version.

### storeReleases_delete
delete the release with release Id


```js
appcenter_ms.storeReleases_delete({
  "store_name": "",
  "release_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * release_id **required** `string`: The id of the release
  * body `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### storeReleases_get
Return releases published in a store for releaseId and storeId


```js
appcenter_ms.storeReleases_get({
  "store_name": "",
  "release_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * release_id **required** `string`: The name of the store
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Details of an uploaded release
    * android_min_api_level `string`: The release's minimum required Android API level.
    * app_display_name `string`: The app's display name.
    * app_name `string`: The app's name (extracted from the uploaded release).
    * bundle_identifier `string`: The identifier of the apps bundle.
    * distribution_stores `array`: a list of distribution stores that are associated with this release.
      * items `object`
        * id `string`: ID identifying a unique distribution store.
        * name `string`: A name identifying a unique distribution store.
        * publishing_status `string`: publishing status of the release in the store.
        * type `string` (values: intune, googleplay): type of the distribution store currently stores type can be intune or googleplay.
    * download_url `string`: The URL that hosts the binary for this release.
    * fingerprint `string`: MD5 checksum of the release binary.
    * id `number`: ID identifying this unique release.
    * install_url `string` (values: group, store): The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
    * min_os `string`: The release's minimum required operating system.
    * release_notes `string`: The release's release notes.
    * short_version `string`: The release's short version.<br>
    * size `number`: The release's size in bytes.
    * status `string` (values: available, unavailable): OBSOLETE. Will be removed in next version. The availability concept is now replaced with distributed. Any 'available' release will be associated with the default distribution group of an app.</br>
    * uploaded_at `string`: UTC time in ISO 8601 format of the uploaded time.
    * version `string`: The release's version.<br>

### storeReleases_getPublishError
Return the Error Details of release which failed in publishing.


```js
appcenter_ms.storeReleases_getPublishError({
  "store_name": "",
  "release_id": 0,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * release_id **required** `number`: The id of the release
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: ReleasePublishErrorResponse
  * is_log_available `boolean`: boolean property to tell if logs are available for download
  * message `string`: error Details

### storeReleasePublishLogs_get
Returns publish logs for a particular release published to a particular store


```js
appcenter_ms.storeReleasePublishLogs_get({
  "store_name": "",
  "release_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * release_id **required** `string`: The ID of the realease
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### storeReleases_getRealTimeStatusByReleaseId
Return the Real time Status publishing of release from store.


```js
appcenter_ms.storeReleases_getRealTimeStatusByReleaseId({
  "store_name": "",
  "release_id": 0,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * store_name **required** `string`: The name of the store
  * release_id **required** `number`: The id of the release
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: status of the app from store
  * app_id `string`: app id
  * release_id `string`: release id
  * status `object`: Status Data from store
    * status `string`: status from store
    * storetype `string`: store type
    * track `string`: track information from store
    * version `string`: version of the app from store

### Errors_AppBuildsList
List of app builds


```js
appcenter_ms.Errors_AppBuildsList({
  "version": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string`
  * start **required** `string`: Start date time in data in ISO 8601 date time format
  * end `string`: Last date time in data in ISO 8601 date time format
  * $top `integer`: The maximum number of results to return. (0 will fetch all results till the max number.)
  * errorType `string` (values: all, unhandledError, handledError): Type of error (handled vs unhandled), including All
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * appBuilds `array`
    * items `string`

### Errors_AvailableVersions
Get all available versions in the time range.


```js
appcenter_ms.Errors_AvailableVersions({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format
  * end `string`: Last date time in data in ISO 8601 date time format
  * $top `integer`: The maximum number of results to return. (0 will fetch all results till the max number.)
  * $skip `integer`: The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination.
  * $filter `string`: A filter as specified in https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering.
  * $inlinecount `string` (values: allpages, none): Controls whether or not to include a count of all the items across all pages.
  * errorType `string` (values: all, unhandledError, handledError): Type of error (handled vs unhandled), including All
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * total_count `integer`: The full number of versions across all pages.
  * versions `array`: List of available versions.
    * items `string`: Version name.

### Errors_CountsPerDay
Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.


```js
appcenter_ms.Errors_CountsPerDay({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * version `string`
  * start **required** `string`: Start date time in data in ISO 8601 date time format
  * end `string`: Last date time in data in ISO 8601 date time format
  * app_build `string`: app build
  * errorType `string` (values: unhandledError, handledError): Type of error (handled vs unhandled), excluding All
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * count `integer`: total error count
  * errors `array`: the total error count for day
    * items `object`
      * count `integer`: count of the object
      * datetime `string`: the ISO 8601 datetime

### Errors_GroupList
List of error groups


```js
appcenter_ms.Errors_GroupList({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * version `string`
  * app_build `string`: app build
  * groupState `string`
  * start **required** `string`: Start date time in data in ISO 8601 date time format
  * end `string`: Last date time in data in ISO 8601 date time format
  * $orderby `string`: controls the sorting order and sorting based on which column
  * $top `integer`: The maximum number of results to return. (0 will fetch all results till the max number.)
  * errorType `string` (values: all, unhandledError, handledError): Type of error (handled vs unhandled), including All
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * errorGroups `array`
    * items `object`
      * appBuild `string`
      * appVersion **required** `string`
      * codeRaw `string`
      * count **required** `integer`
      * deviceCount **required** `integer`
      * errorGroupId **required** `string`
      * exceptionAppCode `boolean`
      * exceptionClassMethod `boolean`
      * exceptionClassName `string`
      * exceptionFile `string`
      * exceptionLine `string`
      * exceptionMessage `string`
      * exceptionMethod `string`
      * exceptionType `string`
      * firstOccurrence **required** `string`
      * hidden `boolean`
      * lastOccurrence **required** `string`
      * reasonFrames `array`
        * items `object`
          * appCode `boolean`: this line isn't from any framework
          * classMethod `boolean`: is a class method
          * className `string`: name of the class
          * codeFormatted `string`: Formatted frame string
          * codeRaw `string`: Unformatted Frame string
          * exceptionType `string`: Exception type.
          * file `string`: name of the file
          * frameworkName `string`: Name of the framework
          * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
          * line `integer`: line number
          * method `string`: name of the method
          * methodParams `string`: parameters of the frames method
          * osExceptionType `string`: OS exception type. (aka. SIGNAL)
      * annotation `string`
      * state **required** `string` (values: open, closed, ignored)
  * nextLink `string`

### Errors_ErrorGroupsSearch
Error groups list based on search parameters


```js
appcenter_ms.Errors_ErrorGroupsSearch({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: A filter as specified in OData notation
  * q `string`: A query string
  * order `string` (values: desc, asc): It controls the order of sorting
  * sort `string` (values: matchingReportsCount, exceptionClassName, exceptionMessage, exceptionMethod, lastOccurrence): It controls the sort based on specified field
  * $top `integer`: The maximum number of results to return
  * $skip `integer`: The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * errorGroups `array`
    * items `object`
      * appBuild `string`
      * appVersion **required** `string`
      * codeRaw `string`
      * count **required** `integer`
      * deviceCount **required** `integer`
      * errorGroupId **required** `string`
      * exceptionAppCode `boolean`
      * exceptionClassMethod `boolean`
      * exceptionClassName `string`
      * exceptionFile `string`
      * exceptionLine `string`
      * exceptionMessage `string`
      * exceptionMethod `string`
      * exceptionType `string`
      * firstOccurrence **required** `string`
      * hidden `boolean`
      * lastOccurrence **required** `string`
      * reasonFrames `array`
        * items `object`
          * appCode `boolean`: this line isn't from any framework
          * classMethod `boolean`: is a class method
          * className `string`: name of the class
          * codeFormatted `string`: Formatted frame string
          * codeRaw `string`: Unformatted Frame string
          * exceptionType `string`: Exception type.
          * file `string`: name of the file
          * frameworkName `string`: Name of the framework
          * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
          * line `integer`: line number
          * method `string`: name of the method
          * methodParams `string`: parameters of the frames method
          * osExceptionType `string`: OS exception type. (aka. SIGNAL)
      * annotation `string`
      * state **required** `string` (values: open, closed, ignored)
  * hasMoreResults `boolean`

### Errors_GroupDetails
Error group details


```js
appcenter_ms.Errors_GroupDetails({
  "errorGroupId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * appBuild `string`
  * appVersion **required** `string`
  * codeRaw `string`
  * count **required** `integer`
  * deviceCount **required** `integer`
  * errorGroupId **required** `string`
  * exceptionAppCode `boolean`
  * exceptionClassMethod `boolean`
  * exceptionClassName `string`
  * exceptionFile `string`
  * exceptionLine `string`
  * exceptionMessage `string`
  * exceptionMethod `string`
  * exceptionType `string`
  * firstOccurrence **required** `string`
  * hidden `boolean`
  * lastOccurrence **required** `string`
  * reasonFrames `array`
    * items `object`
      * appCode `boolean`: this line isn't from any framework
      * classMethod `boolean`: is a class method
      * className `string`: name of the class
      * codeFormatted `string`: Formatted frame string
      * codeRaw `string`: Unformatted Frame string
      * exceptionType `string`: Exception type.
      * file `string`: name of the file
      * frameworkName `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * methodParams `string`: parameters of the frames method
      * osExceptionType `string`: OS exception type. (aka. SIGNAL)
  * annotation `string`
  * state **required** `string` (values: open, closed, ignored)

### Errors_UpdateState
Update error group state


```js
appcenter_ms.Errors_UpdateState({
  "errorGroupId": "",
  "errorGroupState": {
    "state": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * errorGroupState **required** `object`
    * annotation `string`
    * state **required** `string` (values: open, closed, ignored)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * appBuild `string`
  * appVersion **required** `string`
  * codeRaw `string`
  * count **required** `integer`
  * deviceCount **required** `integer`
  * errorGroupId **required** `string`
  * exceptionAppCode `boolean`
  * exceptionClassMethod `boolean`
  * exceptionClassName `string`
  * exceptionFile `string`
  * exceptionLine `string`
  * exceptionMessage `string`
  * exceptionMethod `string`
  * exceptionType `string`
  * firstOccurrence **required** `string`
  * hidden `boolean`
  * lastOccurrence **required** `string`
  * reasonFrames `array`
    * items `object`
      * appCode `boolean`: this line isn't from any framework
      * classMethod `boolean`: is a class method
      * className `string`: name of the class
      * codeFormatted `string`: Formatted frame string
      * codeRaw `string`: Unformatted Frame string
      * exceptionType `string`: Exception type.
      * file `string`: name of the file
      * frameworkName `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * methodParams `string`: parameters of the frames method
      * osExceptionType `string`: OS exception type. (aka. SIGNAL)
  * annotation `string`
  * state **required** `string` (values: open, closed, ignored)

### Errors_GroupCountsPerDay
Count of errors by day in the time range of the selected error group with selected version


```js
appcenter_ms.Errors_GroupCountsPerDay({
  "errorGroupId": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * version `string`
  * start **required** `string`: Start date time in data in ISO 8601 date time format
  * end `string`: Last date time in data in ISO 8601 date time format
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * count `integer`: total error count
  * errors `array`: the total error count for day
    * items `object`
      * count `integer`: count of the object
      * datetime `string`: the ISO 8601 datetime

### Errors_GroupErrorFreeDevicePercentages
Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices


```js
appcenter_ms.Errors_GroupErrorFreeDevicePercentages({
  "errorGroupId": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * start **required** `string`: Start date time in data in ISO 8601 date time format
  * end `string`: Last date time in data in ISO 8601 date time format
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * averagePercentage `number`: Average percentage
  * dailyPercentages `array`: The error-free percentage per day.
    * items `object`
      * datetime `string`: the ISO 8601 datetime
      * percentage `number`: percentage of the object

### Errors_ListForGroup
Get all errors for group


```js
appcenter_ms.Errors_ListForGroup({
  "errorGroupId": "",
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * start **required** `string`: Start date time in data in ISO 8601 date time format
  * end `string`: Last date time in data in ISO 8601 date time format
  * $top `integer`: The maximum number of results to return. (0 will fetch all results till the max number.)
  * model `string`
  * os `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * errors `array`: Errors list.
    * items `object`
      * country `string`
      * deviceName `string`
      * errorId `string`
      * hasAttachments `boolean`
      * hasBreadcrumbs `boolean`
      * language `string`
      * osType `string`
      * osVersion `string`
      * timestamp `string`
      * userId `string`
  * nextLink `string`

### Errors_LatestErrorDetails
Latest error details.


```js
appcenter_ms.Errors_LatestErrorDetails({
  "errorGroupId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * appLaunchTimestamp `string`: Timestamp when the app was launched, example: '2017-03-13T18:05:42Z'.
  * carrierName `string`: Carrier name (for mobile devices).
  * jailbreak `boolean`: Flag indicating if device is jailbroken
  * name `string`
  * properties `object`
  * reasonFrames `array`
    * items `object`
      * appCode `boolean`: this line isn't from any framework
      * classMethod `boolean`: is a class method
      * className `string`: name of the class
      * codeFormatted `string`: Formatted frame string
      * codeRaw `string`: Unformatted Frame string
      * exceptionType `string`: Exception type.
      * file `string`: name of the file
      * frameworkName `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * methodParams `string`: parameters of the frames method
      * osExceptionType `string`: OS exception type. (aka. SIGNAL)
  * country `string`
  * deviceName `string`
  * errorId `string`
  * hasAttachments `boolean`
  * hasBreadcrumbs `boolean`
  * language `string`
  * osType `string`
  * osVersion `string`
  * timestamp `string`
  * userId `string`

### Errors_DeleteError
Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.


```js
appcenter_ms.Errors_DeleteError({
  "errorGroupId": "",
  "errorId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * errorId **required** `string`: The id of the error
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * appId `string`
  * attachmentsDeleted `integer`
  * blobsFailed `integer`
  * blobsSucceeded `integer`
  * errorGroupId `string`
  * errorId `string`
  * errorsDeleted `integer`

### Errors_GetErrorDetails
Error details.


```js
appcenter_ms.Errors_GetErrorDetails({
  "errorGroupId": "",
  "errorId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * errorId **required** `string`: The id of the error
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * appLaunchTimestamp `string`: Timestamp when the app was launched, example: '2017-03-13T18:05:42Z'.
  * carrierName `string`: Carrier name (for mobile devices).
  * jailbreak `boolean`: Flag indicating if device is jailbroken
  * name `string`
  * properties `object`
  * reasonFrames `array`
    * items `object`
      * appCode `boolean`: this line isn't from any framework
      * classMethod `boolean`: is a class method
      * className `string`: name of the class
      * codeFormatted `string`: Formatted frame string
      * codeRaw `string`: Unformatted Frame string
      * exceptionType `string`: Exception type.
      * file `string`: name of the file
      * frameworkName `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * methodParams `string`: parameters of the frames method
      * osExceptionType `string`: OS exception type. (aka. SIGNAL)
  * country `string`
  * deviceName `string`
  * errorId `string`
  * hasAttachments `boolean`
  * hasBreadcrumbs `boolean`
  * language `string`
  * osType `string`
  * osVersion `string`
  * timestamp `string`
  * userId `string`

### Errors_ErrorDownload
Download details for a specific error.


```js
appcenter_ms.Errors_ErrorDownload({
  "errorGroupId": "",
  "errorId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * errorId **required** `string`: The id of the error
  * format `string` (values: json, txt): the format of the crash log
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`

### Errors_ErrorLocation
Error location.


```js
appcenter_ms.Errors_ErrorLocation({
  "errorGroupId": "",
  "errorId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * errorId **required** `string`: The id of the error
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * uri `string`

### Errors_ErrorStackTrace
Error Stacktrace details.


```js
appcenter_ms.Errors_ErrorStackTrace({
  "errorGroupId": "",
  "errorId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * errorId **required** `string`: The id of the error
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output [DiagnosticsStackTrace](#diagnosticsstacktrace)

### Errors_GroupModelCounts
Top models of the selected error group.


```js
appcenter_ms.Errors_GroupModelCounts({
  "errorGroupId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * $top `integer`: The maximum number of results to return. (0 will fetch all results till the max number.)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * errorCount `integer`
  * models `array`
    * items `object`
      * errorCount `integer`: count of errors in a model
      * modelCode `string`: model code
      * modelName `string`: model name

### Errors_GroupOperatingSystemCounts
Top OSes of the selected error group.


```js
appcenter_ms.Errors_GroupOperatingSystemCounts({
  "errorGroupId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * $top `integer`: The maximum number of results to return. (0 will fetch all results till the max number.)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * errorCount `integer`
  * operatingSystems `array`
    * items `object`
      * errorCount `integer`: count of OS
      * operatingSystemName `string`: OS name

### Errors_GroupErrorStackTrace
Gets the stack trace for the error group.


```js
appcenter_ms.Errors_GroupErrorStackTrace({
  "errorGroupId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorGroupId **required** `string`: The id of the error group
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output [DiagnosticsStackTrace](#diagnosticsstacktrace)

### Errors_ErrorFreeDevicePercentages
Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices


```js
appcenter_ms.Errors_ErrorFreeDevicePercentages({
  "start": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * start **required** `string`: Start date time in data in ISO 8601 date time format
  * end `string`: Last date time in data in ISO 8601 date time format
  * versions `array`
  * app_build `string`: app build
  * errorType `string` (values: unhandledError, handledError): Type of error (handled vs unhandled), excluding All
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * averagePercentage `number`: Average percentage
  * dailyPercentages `array`: The error-free percentage per day.
    * items `object`
      * datetime `string`: the ISO 8601 datetime
      * percentage `number`: percentage of the object

### errors_getRetentionSettings
gets the retention settings in days


```js
appcenter_ms.errors_getRetentionSettings({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * retention_in_days **required** `integer` (values: 28, 90)

### errors_putRetentionSettings
Creates and updates the retention settings in days


```js
appcenter_ms.errors_putRetentionSettings({
  "errorRetentionInDays": {
    "retention_in_days": 0
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorRetentionInDays **required** `object`
    * retention_in_days **required** `integer` (values: 28, 90)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * retention_in_days **required** `integer` (values: 28, 90)

### Errors_ErrorSearch
Errors list based on search parameters


```js
appcenter_ms.Errors_ErrorSearch({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: A filter as specified in OData notation
  * q `string`: A query string
  * order `string` (values: desc, asc): It controls the order of sorting
  * sort `string` (values: timestamp, errorGroupId, exceptionClassName, exceptionFile, exceptionLine, exceptionMessage, exceptionMethod, deviceName, osVersion, userId): It controls the sort based on specified field
  * $top `integer`: The maximum number of results to return
  * $skip `integer`: The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * errors `array`
    * items `object`
      * country `string`
      * deviceName `string`
      * errorId `string`
      * hasAttachments `boolean`
      * hasBreadcrumbs `boolean`
      * language `string`
      * osType `string`
      * osVersion `string`
      * timestamp `string`
      * userId `string`
  * hasMoreResults `boolean`

### Errors_ErrorAttachments
List error attachments.


```js
appcenter_ms.Errors_ErrorAttachments({
  "errorId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorId **required** `string`: The id of the error
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * appId `string`
    * attachmentId `string`
    * blobLocation `string`
    * contentType `string`
    * crashId `string`
    * createdTime `string`
    * fileName `string`
    * size `integer`

### Errors_ErrorAttachmentLocation
Error attachment location.


```js
appcenter_ms.Errors_ErrorAttachmentLocation({
  "errorId": "",
  "attachmentId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorId **required** `string`: The id of the error
  * attachmentId **required** `string`: Error attachment id.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * uri `string`

### Errors_ErrorAttachmentText
Error attachment text.


```js
appcenter_ms.Errors_ErrorAttachmentText({
  "errorId": "",
  "attachmentId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorId **required** `string`: The id of the error
  * attachmentId **required** `string`: Error attachment id.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * content `string`

### Errors_ListSessionLogs
Get session logs by error ID


```js
appcenter_ms.Errors_ListSessionLogs({
  "errorId": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * errorId **required** `string`: The id of the error
  * date `string`: Date of data requested
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * exceeded_max_limit `boolean`: indicates if the number of available logs are more than the max allowed return limit(100).
  * last_received_log_timestamp `string`: the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
  * logs **required** `array`: the list of logs
    * items `object`: Generic log.
      * device **required** `object`: Device characteristics.
        * app_build **required** `string`: The app's build number, e.g. 42.
        * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
        * app_version **required** `string`: Application version name, e.g. 1.1.0
        * carrier_code `string`: Carrier country code (for mobile devices).
        * carrier_country `string`: Carrier country.
        * carrier_name `string`: Carrier name (for mobile devices).
        * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
        * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
        * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
        * locale **required** `string`: Language code (example: en_US).
        * model `string`: Device model (example: iPad2,3).
        * oem_name `string`: Device manufacturer (example: HTC).
        * os_api_level `integer`: API level when applicable like in Android (example: 15).
        * os_build `string`: OS build code (example: LMY47X).
        * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
        * os_version **required** `string`: OS version (example: 9.3.0).
        * screen_size `string`: Screen size of the device in pixels (example: 640x480).
        * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
        * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
        * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
        * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
        * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
        * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
      * event_id `string`: Event ID.
      * event_name `string`: Event name.
      * install_id **required** `string`: Install ID.
      * message_id `string`: Message ID.
      * properties `object`: event specific properties.
      * session_id `string`: Session ID.
      * timestamp **required** `string`: Log creation timestamp.
      * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### ExportConfigurations_List
List export configurations.


```js
appcenter_ms.ExportConfigurations_List({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: List of export configurations
  * nextLink `string`
  * total `integer`: the total count of exports
  * values **required** `array`
    * items `object`: Export configuration result
      * creation_time **required** `string`: Creation time in ISO 8601 format
      * export_configuration `object`: Export configuration
        * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
        * export_entities `array`
          * items `string` (values: crashes, errors, attachments, no_logs)
        * resource_group `string`: The resource group name on azure
        * resource_name `string`: The resource name on azure
        * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration
      * export_entities `array`
        * items `string` (values: crashes, errors, attachments, no_logs)
      * export_type **required** `string` (values: BlobStorage, AppInsights): Target resource type of export configuration
      * id **required** `string`: Export configuration id
      * last_run_time `string`: Latest time in ISO 8601 format when export completed successfully
      * resource_group `string`: resource group for the storage account/App Insights resource
      * resource_name `string`: Storage accout or Appinsights resource name
      * state **required** `string` (values: Enabled, Disabled, Pending, Deleted, Invalid): State of the export job
      * state_info `string`: Additional information about export configuration state

### ExportConfigurations_Create
Create new export configuration


```js
appcenter_ms.ExportConfigurations_Create({
  "properties": {
    "type": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * properties **required** `object`: Export configuration
    * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
    * export_entities `array`
      * items `string` (values: crashes, errors, attachments, no_logs)
    * resource_group `string`: The resource group name on azure
    * resource_name `string`: The resource name on azure
    * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Export configuration result
  * creation_time **required** `string`: Creation time in ISO 8601 format
  * export_configuration `object`: Export configuration
    * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
    * export_entities `array`
      * items `string` (values: crashes, errors, attachments, no_logs)
    * resource_group `string`: The resource group name on azure
    * resource_name `string`: The resource name on azure
    * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * export_type **required** `string` (values: BlobStorage, AppInsights): Target resource type of export configuration
  * id **required** `string`: Export configuration id
  * last_run_time `string`: Latest time in ISO 8601 format when export completed successfully
  * resource_group `string`: resource group for the storage account/App Insights resource
  * resource_name `string`: Storage accout or Appinsights resource name
  * state **required** `string` (values: Enabled, Disabled, Pending, Deleted, Invalid): State of the export job
  * state_info `string`: Additional information about export configuration state

### ExportConfigurations_Delete
Delete export configuration.


```js
appcenter_ms.ExportConfigurations_Delete({
  "export_configuration_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * export_configuration_id **required** `string`: The id of the export configuration.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### ExportConfigurations_Get
Get export configuration.


```js
appcenter_ms.ExportConfigurations_Get({
  "export_configuration_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * export_configuration_id **required** `string`: The id of the export configuration.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Export configuration result
  * creation_time **required** `string`: Creation time in ISO 8601 format
  * export_configuration `object`: Export configuration
    * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
    * export_entities `array`
      * items `string` (values: crashes, errors, attachments, no_logs)
    * resource_group `string`: The resource group name on azure
    * resource_name `string`: The resource name on azure
    * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * export_type **required** `string` (values: BlobStorage, AppInsights): Target resource type of export configuration
  * id **required** `string`: Export configuration id
  * last_run_time `string`: Latest time in ISO 8601 format when export completed successfully
  * resource_group `string`: resource group for the storage account/App Insights resource
  * resource_name `string`: Storage accout or Appinsights resource name
  * state **required** `string` (values: Enabled, Disabled, Pending, Deleted, Invalid): State of the export job
  * state_info `string`: Additional information about export configuration state

### ExportConfigurations_PartialUpdate
Partially update export configuration.


```js
appcenter_ms.ExportConfigurations_PartialUpdate({
  "export_configuration_id": "",
  "properties": {
    "type": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * export_configuration_id **required** `string`: The id of the export configuration.
  * properties **required** `object`: Export configuration
    * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
    * export_entities `array`
      * items `string` (values: crashes, errors, attachments, no_logs)
    * resource_group `string`: The resource group name on azure
    * resource_name `string`: The resource name on azure
    * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Export configuration result
  * creation_time **required** `string`: Creation time in ISO 8601 format
  * export_configuration `object`: Export configuration
    * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
    * export_entities `array`
      * items `string` (values: crashes, errors, attachments, no_logs)
    * resource_group `string`: The resource group name on azure
    * resource_name `string`: The resource name on azure
    * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * export_type **required** `string` (values: BlobStorage, AppInsights): Target resource type of export configuration
  * id **required** `string`: Export configuration id
  * last_run_time `string`: Latest time in ISO 8601 format when export completed successfully
  * resource_group `string`: resource group for the storage account/App Insights resource
  * resource_name `string`: Storage accout or Appinsights resource name
  * state **required** `string` (values: Enabled, Disabled, Pending, Deleted, Invalid): State of the export job
  * state_info `string`: Additional information about export configuration state

### ExportConfigurations_Disable
Disable export configuration.


```js
appcenter_ms.ExportConfigurations_Disable({
  "export_configuration_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * export_configuration_id **required** `string`: The id of the export configuration.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### ExportConfigurations_Enable
Enable export configuration.


```js
appcenter_ms.ExportConfigurations_Enable({
  "export_configuration_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * export_configuration_id **required** `string`: The id of the export configuration.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### fileAssets_create
Create a new asset to upload a file


```js
appcenter_ms.fileAssets_create({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * payload `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * id `string`
  * location `string`
  * token `string`
  * uploadDomain `string`
  * uploadWindowLocation `string`
  * urlEncodedToken `string`

### appInvitations_list
Gets the pending invitations for the app


```js
appcenter_ms.appInvitations_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * app **required**
    * description `string`: The description of the app
    * display_name **required** `string`: The display name of the app
    * icon_source `string`: The string representation of the source of the app's icon
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * id **required** `string`: The unique ID (UUID) of the app
    * name **required** `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * owner **required** `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
    * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
    * azure_subscription `object`
      * is_billable `boolean`: If the subscription can be used for billing
      * is_billing `boolean`: If the subscription is used for billing
      * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
      * subscription_id **required** `string`: The azure subscription id
      * subscription_name **required** `string`: The name of the azure subscription
      * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
    * created_at `string`: The created date of this app
    * member_permissions `array`: The permissions of the calling user
      * items `string` (values: manager, developer, viewer, tester)
    * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
    * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
    * updated_at `string`: The last updated date of this app
  * app_count `number`: The number of apps in the group
  * distribution_group `object`: The organization that owns the distribution group, if it exists
    * owner `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * email **required** `string`: The email address of the invited user
  * id **required** `string`: The unique ID (UUID) of the invitation
  * invite_type **required** `string` (values: developer, tester): The invitation type
  * invited_by **required** `object`
    * avatar_url `string`: The avatar URL of the user
    * can_change_password `boolean`: User is required to send an old password in order to change the password.
    * display_name **required** `string`: The full name of the user. Might for example be first and last name
    * email **required** `string`: The email address of the user
    * id **required** `string`: The unique id (UUID) of the user
    * name **required** `string`: The unique name that is used to identify the user.
    * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
    * permissions `array`: The permissions the user has for the app
      * items `string` (values: manager, developer, viewer, tester)
  * is_existing_user **required** `boolean`: Indicates whether the invited user already exists
  * permissions `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer, tester)

### appInvitations_create
Invites a new or existing user to an app


```js
appcenter_ms.appInvitations_create({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * user_email `object`
    * role `string` (values: admin, collaborator, member): The user's role
    * user_email **required** `string`: The user's email address

#### Output
*Output schema unknown*

### appInvitations_delete
Removes a user's invitation to an app


```js
appcenter_ms.appInvitations_delete({
  "owner_name": "",
  "app_name": "",
  "user_email": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * user_email **required** `string`: The email of the user to invite

#### Output
*Output schema unknown*

### appInvitations_updatePermissions
Update pending invitation permission


```js
appcenter_ms.appInvitations_updatePermissions({
  "owner_name": "",
  "app_name": "",
  "user_email": "",
  "user_invitation_permissions_data": null
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * user_email **required** `string`: The email of the user to invite
  * user_invitation_permissions_data **required** `object`
    * permissions **required** `array`: The permissions the user has for the app in the invitation
      * items `string` (values: manager, developer, viewer)

#### Output
*Output schema unknown*

### appInvitations_createByEmail
Invites a new or existing user to an app


```js
appcenter_ms.appInvitations_createByEmail({
  "owner_name": "",
  "app_name": "",
  "user_email": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * role `object`
    * role `string` (values: admin, collaborator, member): The role of the user to be added
  * user_email **required** `string`: The email of the user to invite

#### Output
*Output schema unknown*

### notifications_getAppEmailSettings
Get Email notification settings of user for a particular app


```js
appcenter_ms.notifications_getAppEmailSettings({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Alerting Email Settings of the user for a particular app
  * request_id **required** `string`: Unique request identifier for tracking
  * eTag `string`: The ETag of the entity
  * enabled **required** `boolean`: Allows to forcefully disable emails on app or user level
  * settings **required** `array`: The settings the user has for the app
    * items `object`: Event Setting
      * default_value `string` (values: Disabled, Individual, Daily, DailyAndIndividual): Default frequency of event
      * event_type **required** `string` (values: crash_newCrashGroupCreated): Event Name
      * value **required** `string` (values: Disabled, Individual, Daily, DailyAndIndividual, Default): Frequency of event
  * userId `string`: The unique id (UUID) of the user
  * appId `string`: Application ID
  * request_id `string`: Unique request
  * user_enabled `boolean`: A flag indicating if settings are enabled at user/global level

### test_listDeviceSetsOfOwner
Lists device sets belonging to the owner


```js
appcenter_ms.test_listDeviceSetsOfOwner({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: The name and devices of the device set
    * deviceConfigurations **required** `array`
      * items `object`
        * id `string`: The unique id of the device configuration
        * image `object`
          * thumb `string`
        * model `object`
          * formFactor `string`
          * manufacturer `string`
          * name `string`
          * releaseDate `string`
        * os `string`
        * osName `string`
    * id **required** `string`: Identifier of the device set
    * manufacturerCount `number`: The number of manufacturers in the device set's device selection
    * name **required** `string`: Name of the device set
    * osVersionCount `number`: The number of os versions in the device set's device selection
    * owner **required** `object`: The owner of a device set
      * displayName `string`: Display name of the account
      * id **required** `string`: Account ID
      * name **required** `string`: Name of the account
      * type **required** `string`: Type of account
    * slug `string`: Slug of the device set

### test_createDeviceSetOfOwner
Creates a device set belonging to the owner


```js
appcenter_ms.test_createDeviceSetOfOwner({
  "deviceSet": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deviceSet **required** `object`: The name of the device set and the list of device IDs
    * devices **required** `array`: List of device IDs
      * items `string`
    * name **required** `string`: The name of the device set
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: The name and devices of the device set
  * deviceConfigurations **required** `array`
    * items `object`
      * id `string`: The unique id of the device configuration
      * image `object`
        * thumb `string`
      * model `object`
        * formFactor `string`
        * manufacturer `string`
        * name `string`
        * releaseDate `string`
      * os `string`
      * osName `string`
  * id **required** `string`: Identifier of the device set
  * manufacturerCount `number`: The number of manufacturers in the device set's device selection
  * name **required** `string`: Name of the device set
  * osVersionCount `number`: The number of os versions in the device set's device selection
  * owner **required** `object`: The owner of a device set
    * displayName `string`: Display name of the account
    * id **required** `string`: Account ID
    * name **required** `string`: Name of the account
    * type **required** `string`: Type of account
  * slug `string`: Slug of the device set

### test_deleteDeviceSetOfOwner
Deletes a device set belonging to the owner


```js
appcenter_ms.test_deleteDeviceSetOfOwner({
  "id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the device set
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### test_getDeviceSetOfOwner
Gets a device set belonging to the owner


```js
appcenter_ms.test_getDeviceSetOfOwner({
  "id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the device set
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: The name and devices of the device set
  * deviceConfigurations **required** `array`
    * items `object`
      * id `string`: The unique id of the device configuration
      * image `object`
        * thumb `string`
      * model `object`
        * formFactor `string`
        * manufacturer `string`
        * name `string`
        * releaseDate `string`
      * os `string`
      * osName `string`
  * id **required** `string`: Identifier of the device set
  * manufacturerCount `number`: The number of manufacturers in the device set's device selection
  * name **required** `string`: Name of the device set
  * osVersionCount `number`: The number of os versions in the device set's device selection
  * owner **required** `object`: The owner of a device set
    * displayName `string`: Display name of the account
    * id **required** `string`: Account ID
    * name **required** `string`: Name of the account
    * type **required** `string`: Type of account
  * slug `string`: Slug of the device set

### test_updateDeviceSetOfOwner
Updates a device set belonging to the owner


```js
appcenter_ms.test_updateDeviceSetOfOwner({
  "id": "",
  "deviceSet": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the device set
  * deviceSet **required** `object`: The name of the device set and the list of device IDs
    * devices **required** `array`: List of device IDs
      * items `string`
    * name **required** `string`: The name of the device set
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: The name and devices of the device set
  * deviceConfigurations **required** `array`
    * items `object`
      * id `string`: The unique id of the device configuration
      * image `object`
        * thumb `string`
      * model `object`
        * formFactor `string`
        * manufacturer `string`
        * name `string`
        * releaseDate `string`
      * os `string`
      * osName `string`
  * id **required** `string`: Identifier of the device set
  * manufacturerCount `number`: The number of manufacturers in the device set's device selection
  * name **required** `string`: Name of the device set
  * osVersionCount `number`: The number of os versions in the device set's device selection
  * owner **required** `object`: The owner of a device set
    * displayName `string`: Display name of the account
    * id **required** `string`: Account ID
    * name **required** `string`: Name of the account
    * type **required** `string`: Type of account
  * slug `string`: Slug of the device set

### Push_ExportDevices
Exports information for all devices using Push to Azure Blob Storage


```js
appcenter_ms.Push_ExportDevices({
  "properties": {
    "blob_container_sas_uri": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * properties **required** `object`: Generic export configuration.
    * blob_container_sas_uri **required** `string`: A shared access signature (SAS) URI with Read, Write and Delete permissions on a container.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Export started.
  * export_id **required** `string`: The unique export identifier.

### Push_ExportDevicesStatus
Get the status of an export operation.


```js
appcenter_ms.Push_ExportDevicesStatus({
  "export_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * export_id **required** `string`: The id of the export.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Export status
  * export_id **required** `string`: The unique export identifier.
  * status **required** `string` (values: InProgress, Completed, Failed): Status of the export.

### Push_DeleteInstallId
Delete a device with the selected installId.


```js
appcenter_ms.Push_DeleteInstallId({
  "install_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * install_id **required** `string`: device install id
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### Push_Delete
Delete a notification.


```js
appcenter_ms.Push_Delete({
  "notification_ids": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * notification_ids **required** `object`: List of notification Ids
    * values **required** `array`: List of notification Ids.
      * items `string`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### Push_List
Get a list of notifications from the service.


```js
appcenter_ms.Push_List({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: The maximum number of results to return. (0 will fetch all results)
  * $skiptoken `string`: The value identifies a starting point in the collection of entities. This parameter along with limit is used to perform pagination.
  * $orderby `string`: controls the sorting order and sorting based on which column
  * $inlinecount `string` (values: allpages, none): Controls whether or not to include a count of all the items across all pages.
  * include_archived `boolean`: Include arhived push notifications
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: List of notifications
  * nextLink `string`
  * total `integer`: the total count of notifications
  * values **required** `array`
    * items `object`: Notification statistics
      * name `string`: Notification name
      * notification_id **required** `string`: Notification id.
      * notification_target `object`: Type of Notification target (audiences, devices, user ids, account ids or broadcast). The object must include the correct properties for the specified target type except for broadcast.
        * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)
      * pns_send_failure `integer`: Number of the notifications failed to send to the push provider.
      * pns_send_success `integer`: Number of the notifications successfully sent to push the provider.
      * send_time `string`: Notification send time
      * state **required** `string` (values: Queued, Sending, Completed, Failed, NoTargetFound): State of the notification.

### Push_Send
Send a notification to one or more devices.


```js
appcenter_ms.Push_Send({
  "properties": {
    "notification_content": {
      "name": ""
    }
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * properties **required** `object`: Notification definition object
    * notification_content **required** `object`: Notification definition object
      * body `string`: Notification body
      * custom_data `object`: Notification custom data (such as badge, color, sound, etc.)
      * name **required** `string`: Notification name
      * title `string`: Notification title
    * notification_target `object`: Type of Notification target (audiences, devices, user ids, account ids or broadcast). The object must include the correct properties for the specified target type except for broadcast.
      * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Notification send succeeded.
  * notification_id **required** `string`: The unique notification identifier.

### Push_Get
Get details about a specific notification.


```js
appcenter_ms.Push_Get({
  "notification_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * notification_id **required** `string`: The id of the notification.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Notification statistics
  * failure_outcomes `array`: Failture outcome counts
    * items `object`: Notification failure outcome count
      * count `integer`: count of this type of failure
      * failure_reason `string`: The reason of the notification failure
  * notification_content **required** `object`: Notification definition object
    * body `string`: Notification body
    * custom_data `object`: Notification custom data (such as badge, color, sound, etc.)
    * name **required** `string`: Notification name
    * title `string`: Notification title
  * name `string`: Notification name
  * notification_id **required** `string`: Notification id.
  * notification_target `object`: Type of Notification target (audiences, devices, user ids, account ids or broadcast). The object must include the correct properties for the specified target type except for broadcast.
    * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)
  * pns_send_failure `integer`: Number of the notifications failed to send to the push provider.
  * pns_send_success `integer`: Number of the notifications successfully sent to push the provider.
  * send_time `string`: Notification send time
  * state **required** `string` (values: Queued, Sending, Completed, Failed, NoTargetFound): State of the notification.

### Push_DeleteConfig
Delete the push configuration for the selected app.


```js
appcenter_ms.Push_DeleteConfig({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### Push_GetConfig
Get the push configuration for the selected app.


```js
appcenter_ms.Push_GetConfig({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Generic notification configuration result.
  * type **required** `string`

### Push_ConfigExists
Returns whether a push configuration exists for the selected app.


```js
appcenter_ms.Push_ConfigExists({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### Push_SetConfig
Set the push configuration for the selected app.


```js
appcenter_ms.Push_SetConfig({
  "properties": {
    "type": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * properties **required** `object`: Type of notification config (NotificationConfigAppleToken, NotificationConfigGoogle, NotificationConfigWindows). The 'type' property must be set to a valid value and the object must include the correct properties for the specified type.
    * type **required** `string` (values: apns_token_config, gcm_config, wns_config)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Generic notification configuration result.
  * type **required** `string`

### releases_listLatest
Get the latest release from every distribution group associated with an application.


```js
appcenter_ms.releases_listLatest({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Basic information on a release
    * build `object`: Build information for the release
      * branch_name `string`: The branch name of the build producing the release
      * commit_hash `string`: The commit hash of the build producing the release
      * commit_message `string`: The commit message of the build producing the release
    * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
    * destinations `array`: A list of distribution groups or stores.
      * items
        * id **required** `string`: ID identifying a unique distribution group.
        * name `string`: A name identifying a unique distribution group.
        * is_latest `boolean`: Is the containing release the latest one in this distribution group.
        * id **required** `string`: ID identifying a unique distribution store.
        * name `string`: A name identifying a unique distribution store.
        * publishing_status `string`: publishing status of the release in the store.
        * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
        * is_latest `boolean`: Is the containing release the latest one in this distribution store.
        * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
        * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
        * destination_type `string` (values: group, store, tester): Destination can be either store or group.
        * display_name `string`: Display name for the group or tester
    * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
      * items
        * id **required** `string`: ID identifying a unique distribution group.
        * name `string`: A name identifying a unique distribution group.
        * is_latest `boolean`: Is the containing release the latest one in this distribution group.
    * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
      * items
        * id **required** `string`: ID identifying a unique distribution store.
        * name `string`: A name identifying a unique distribution store.
        * publishing_status `string`: publishing status of the release in the store.
        * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
        * is_latest `boolean`: Is the containing release the latest one in this distribution store.
    * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
    * id **required** `integer`: ID identifying this unique release.
    * is_external_build `boolean`: This value determines if a release is external or not.
    * origin `string` (values: hockeyapp, appcenter): The release's origin
    * short_version **required** `string`: The release's short version.<br>
    * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
    * version **required** `string`: The release's version.<br>

### releaseUploads_create
Begins the upload process for a new release for the specified application.


```js
appcenter_ms.releaseUploads_create({
  "body": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`: A request containing information pertaining to begin a release upload process
    * build_number `string`: The build number of the uploaded binary, used with build_version for macOS app support.
    * build_version `string`: The build version of the uploaded binary, used for macOS, Windows and Custom app support.
    * release_id `number`: Optional value for explicitly specifying the ID of existing release.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: A response containing information pertaining to starting a release upload process
  * asset_domain `string`: The URL for the current upload, reserved for future use
  * asset_id `string`: The ID for the current upload, reserved for future use
  * asset_token `string`: The token for the current upload, reserved for future use
  * upload_id **required** `string`: The ID for the current upload
  * upload_url **required** `string`: The URL where the client needs to upload the release to

### releaseUploads_complete
Commits or aborts the upload process for a release for the specified application


```js
appcenter_ms.releaseUploads_complete({
  "upload_id": "",
  "body": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: The ID of the upload
  * body **required** `object`: A request containing information pertaining to complete a release upload process
    * status **required** `string` (values: committed, aborted): The desired operation for the upload
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: A response containing information about the uploaded release.
  * release_id `number`: The ID of the release.
  * release_url `string`: A URL to the new release. If upload was aborted will be null.

### releases_list
Return basic information about releases.


```js
appcenter_ms.releases_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * published_only `boolean`: When *true*, filters out releases that were uploaded but were never distributed. Releases that under deleted distribution groups will not be filtered out.
  * scope `string`: When the scope is 'tester', only includes releases that have been distributed to groups that the user belongs to.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Basic information on a release
    * build `object`: Build information for the release
      * branch_name `string`: The branch name of the build producing the release
      * commit_hash `string`: The commit hash of the build producing the release
      * commit_message `string`: The commit message of the build producing the release
    * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
    * destinations `array`: A list of distribution groups or stores.
      * items
        * id **required** `string`: ID identifying a unique distribution group.
        * name `string`: A name identifying a unique distribution group.
        * is_latest `boolean`: Is the containing release the latest one in this distribution group.
        * id **required** `string`: ID identifying a unique distribution store.
        * name `string`: A name identifying a unique distribution store.
        * publishing_status `string`: publishing status of the release in the store.
        * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
        * is_latest `boolean`: Is the containing release the latest one in this distribution store.
        * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
        * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
        * destination_type `string` (values: group, store, tester): Destination can be either store or group.
        * display_name `string`: Display name for the group or tester
    * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
      * items
        * id **required** `string`: ID identifying a unique distribution group.
        * name `string`: A name identifying a unique distribution group.
        * is_latest `boolean`: Is the containing release the latest one in this distribution group.
    * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
      * items
        * id **required** `string`: ID identifying a unique distribution store.
        * name `string`: A name identifying a unique distribution store.
        * publishing_status `string`: publishing status of the release in the store.
        * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
        * is_latest `boolean`: Is the containing release the latest one in this distribution store.
    * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
    * id **required** `integer`: ID identifying this unique release.
    * is_external_build `boolean`: This value determines if a release is external or not.
    * origin `string` (values: hockeyapp, appcenter): The release's origin
    * short_version **required** `string`: The release's short version.<br>
    * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
    * version **required** `string`: The release's version.<br>

### releases_availableToTester
Return detailed information about releases avaiable to a tester.


```js
appcenter_ms.releases_availableToTester({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * published_only `boolean`: when *true*, filters out releases that were uploaded but were never distributed. Releases that under deleted distribution groups will not be filtered out.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Basic information on a release
    * build `object`: Build information for the release
      * branch_name `string`: The branch name of the build producing the release
      * commit_hash `string`: The commit hash of the build producing the release
      * commit_message `string`: The commit message of the build producing the release
    * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
    * destinations `array`: A list of distribution groups or stores.
      * items
        * id **required** `string`: ID identifying a unique distribution group.
        * name `string`: A name identifying a unique distribution group.
        * is_latest `boolean`: Is the containing release the latest one in this distribution group.
        * id **required** `string`: ID identifying a unique distribution store.
        * name `string`: A name identifying a unique distribution store.
        * publishing_status `string`: publishing status of the release in the store.
        * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
        * is_latest `boolean`: Is the containing release the latest one in this distribution store.
        * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
        * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
        * destination_type `string` (values: group, store, tester): Destination can be either store or group.
        * display_name `string`: Display name for the group or tester
    * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
      * items
        * id **required** `string`: ID identifying a unique distribution group.
        * name `string`: A name identifying a unique distribution group.
        * is_latest `boolean`: Is the containing release the latest one in this distribution group.
    * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
      * items
        * id **required** `string`: ID identifying a unique distribution store.
        * name `string`: A name identifying a unique distribution store.
        * publishing_status `string`: publishing status of the release in the store.
        * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
        * is_latest `boolean`: Is the containing release the latest one in this distribution store.
    * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
    * id **required** `integer`: ID identifying this unique release.
    * is_external_build `boolean`: This value determines if a release is external or not.
    * origin `string` (values: hockeyapp, appcenter): The release's origin
    * short_version **required** `string`: The release's short version.<br>
    * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
    * version **required** `string`: The release's version.<br>

### releases_delete
Deletes a release.


```js
appcenter_ms.releases_delete({
  "release_id": 0,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### releases_getLatestByUser
Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).


```js
appcenter_ms.releases_getLatestByUser({
  "release_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `string`: The ID of the release, or `latest` to get the latest release from all the distribution groups assigned to the current user.
  * udid `string`: when supplied, this call will also check if the given UDID is provisioned. Will be ignored for non-iOS platforms. The value will be returned in the property is_udid_provisioned.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Details of an uploaded release
  * android_min_api_level `string`: The release's minimum required Android API level.
  * app_display_name **required** `string`: The app's display name.
  * app_icon_url **required** `string`: A URL to the app's icon.
  * app_name **required** `string`: The app's name (extracted from the uploaded release).
  * app_os `string`: The app's OS.
  * build `object`: Contains metadata about the build that produced the release being uploaded
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * bundle_identifier `string`: The identifier of the apps bundle.
  * can_resign `boolean`: In calls that allow passing `udid` in the query string, this value determines if a release can be re-signed. When true, after a re-sign, the tester will be able to install the release from his registered devices. Will not be returned for non-iOS platforms.
  * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
  * destinations `array`: A list of distribution groups or stores.
    * items
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
      * is_latest `boolean`: Is the containing release the latest one in this distribution group.
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
      * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * destination_type `string` (values: group, store, tester): Destination can be either store or group.
      * display_name `string`: Display name for the group or tester
  * device_family `string`: The release's device family.
  * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
  * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
  * download_url `string`: The URL that hosts the binary for this release.
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * fingerprint `string`: MD5 checksum of the release binary.
  * id **required** `integer`: ID identifying this unique release.
  * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * is_external_build `boolean`: This value determines if a release is external or not.
  * is_provisioning_profile_syncing `boolean`: A flag that determines whether the release's provisioning profile is still extracted or not.
  * is_udid_provisioned `boolean`: In calls that allow passing `udid` in the query string, this value will hold the provisioning status of that UDID in this release. Will be ignored for non-iOS platforms.
  * min_os `string`: The release's minimum required operating system.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * package_hashes `array`: Hashes for the packages.
    * items `string`
  * provisioning_profile_expiry_date `string`: expiration date of provisioning profile in UTC format.
  * provisioning_profile_name `string`: The release's provisioning profile name.
  * provisioning_profile_type `string` (values: adhoc, enterprise, other): The type of the provisioning profile for the requested app version.
  * release_notes `string`: The release's release notes.
  * short_version **required** `string`: The release's short version.<br>
  * size `integer`: The release's size in bytes.
  * status `string`: Status of the release.
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>

### releases_update
Updates a release.


```js
appcenter_ms.releases_update({
  "release_id": 0,
  "body": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * body **required** `object`: A request containing information for updating a release.
    * build `object`: Contains metadata about the build that produced the release being uploaded
      * branch_name `string`: The branch name of the build producing the release
      * commit_hash `string`: The commit hash of the build producing the release
      * commit_message `string`: The commit message of the build producing the release
    * destination_id `string`: OBSOLETE. Will be removed in future releases - use destinations instead. Id of a destination. The release will be associated with this destination. If the destination doesn't exist a 400 is returned. If both destination name and id are passed, the id is taking precedence.
    * destination_name `string`: OBSOLETE. Will be removed in future releases - use destinations instead. Name of a destination. The release will be associated with this destination. If the destination doesn't exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence.
    * destination_type `string`: Not used anymore.
    * destinations `array`: Distribute this release under the following list of destinations (store groups or distribution groups).
      * items `object`: A unique identifier for a destination. A destination can be identified by an ID (guid) or by a name. DestinationId encapsulates both options. A destination can be either a distribution group or a store.
        * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
        * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
    * distribution_group_id `string`: OBSOLETE. Will be removed in future releases - use destinations instead. Id of a distribution group. The release will be associated with this distribution group. If the distribution group doesn't exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence.
    * distribution_group_name `string`: OBSOLETE. Will be removed in future releases - use destinations instead. Name of a distribution group. The release will be associated with this distribution group. If the distribution group doesn't exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence.
    * mandatory_update `boolean`: A boolean which determines whether this version should be a mandatory update or not.
    * metadata `object`: An object containing all the release metadata.
      * dsa_signature `string`: dsa signature of the release for the sparkle feed.
      * ed_signature `string`: edDSA signature of the release for the sparkle feed.
    * notify_testers `boolean`: A boolean which determines whether to notify testers of a new release, default to true.
    * release_notes `string`: Release notes for this release.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Response for updating release details
  * release_notes `string`

### releases_updateDetails
Update details of a release.


```js
appcenter_ms.releases_updateDetails({
  "release_id": 0,
  "body": {},
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * body **required** `object`: A request containing information for updating details of a release
    * build `object`: Contains metadata about the build that produced the release being uploaded
      * branch_name `string`: The branch name of the build producing the release
      * commit_hash `string`: The commit hash of the build producing the release
      * commit_message `string`: The commit message of the build producing the release
    * enabled `boolean`: Toggle this release to be enable distribute/download or not.
    * release_notes `string`: Release notes for this release.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Response for updating a release
  * destinations `array`
    * items `object`
      * id `string`
      * name `string`
  * enabled `boolean`
  * mandatory_update `boolean`
  * provisioning_status_url `string`
  * release_notes `string`

### releases_addDistributionGroup
Distributes a release to a group


```js
appcenter_ms.releases_addDistributionGroup({
  "release_id": 0,
  "body": {
    "id": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * body **required** `object`
    * id **required** `string`: Unique id of the release destination
    * mandatory_update `boolean`: Flag to mark the release for the provided destinations as mandatory
    * notify_testers `boolean`: Flag to enable or disable notifications to testers
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * id **required** `string`: Unique id for the release destination
  * mandatory_update **required** `boolean`: Flag to mark the release for the provided destinations as mandatory
  * provisioning_status_url `string`: The url to check provisioning status.

### releases_deleteDistributionGroup
Delete the given distribution group from the release


```js
appcenter_ms.releases_deleteDistributionGroup({
  "release_id": 0,
  "group_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * group_id **required** `string`: The id of the distribution group
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### releases_putDistributionGroup
Update details about the specified distribution group associated with the release


```js
appcenter_ms.releases_putDistributionGroup({
  "release_id": 0,
  "group_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * group_id **required** `string`: The id of the releases destination
  * destination_group_update_details `object`
    * mandatory_update **required** `boolean`: Whether a release is mandatory for the given destination
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### provisioning_profile
Return information about the provisioning profile. Only available for iOS.


```js
appcenter_ms.provisioning_profile({
  "release_id": 0,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The release_id
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output [ProvisioningProfileResponse](#provisioningprofileresponse)

### releases_addStore
Distributes a release to a store


```js
appcenter_ms.releases_addStore({
  "release_id": 0,
  "body": {
    "id": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * body **required** `object`
    * id **required** `string`: Unique id of the release destination
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * id **required** `string`: Unique id for the release destination

### releases_deleteDistributionStore
Delete the given distribution store from the release


```js
appcenter_ms.releases_deleteDistributionStore({
  "release_id": 0,
  "store_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * store_id **required** `string`: The id of the distribution store
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### releases_addTesters
Distributes a release to a user


```js
appcenter_ms.releases_addTesters({
  "release_id": 0,
  "body": {
    "email": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * body **required** `object`
    * email **required** `string`: Tester's email address
    * mandatory_update `boolean`: Flag to mark the release for the provided destinations as mandatory
    * notify_testers `boolean`: Flag to enable or disable notifications to testers
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * id **required** `string`: Unique id for the release destination
  * mandatory_update **required** `boolean`: Flag to mark the release for the provided destinations as mandatory
  * provisioning_status_url `string`: The url to check provisioning status.

### releases_deleteDistributionTester
Delete the given tester from the release


```js
appcenter_ms.releases_deleteDistributionTester({
  "release_id": 0,
  "tester_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * tester_id **required** `string`: The id of the tester
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### releases_putDistributionTester
Update details about the specified tester associated with the release


```js
appcenter_ms.releases_putDistributionTester({
  "release_id": 0,
  "tester_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `integer`: The ID of the release
  * tester_id **required** `string`: The id of the tester
  * destination_tester_update_details `object`
    * mandatory_update **required** `boolean`: Whether a release is mandatory for the given destination
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### devices_getReleaseUpdateDevicesStatus
Returns the resign status to the caller


```js
appcenter_ms.devices_getReleaseUpdateDevicesStatus({
  "release_id": "",
  "resign_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * release_id **required** `string`: The ID of the release.
  * resign_id **required** `string`: The ID of the resign operation.
  * include_provisioning_profile `boolean`: A boolean value that indicates if the provisioning profile should be return in addition to the status. When set to true, the provisioning profile will be returned only when status is 'complete' or 'preparing_for_testers'.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: The status of the resign operation.
  * error_code `string`: Error code for any error that occured during the resigning operation.
  * error_message `string`: Error message for any error that occured during the resigning operation.
  * status **required** `string`: The status of the resign

### repositoryConfigurations_delete
Removes the configuration for the repository


```js
appcenter_ms.repositoryConfigurations_delete({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * message **required** `string`

### repositoryConfigurations_list
Returns the repository build configuration status of the app


```js
appcenter_ms.repositoryConfigurations_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * includeInactive `boolean`: Include inactive configurations if none are active
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: A list of repo configurations
  * items `object`
    * id **required** `string`: Repository configuration identifier
    * state **required** `string` (values: unauthorized, inactive, active): State of the configuration
    * type **required** `string`: Type of repository
    * user_email `string`: Email of the user who linked the repository
    * installation_id `string`: The GitHub App Installation id. Required for repositories connected from GitHub App
    * external_user_id `string`: The external user id from the repository provider. Required for GitLab.com repositories
    * repo_id `string`: The repository id from the repository provider. Required for repositories connected from GitHub App and GitLab.com
    * repo_url `string`: The repository's git url, must be a HTTPS URL
    * service_connection_id `string`: The id of the service connection (private). Required for GitLab self-hosted repositories

### repositoryConfigurations_createOrUpdate
Configures the repository for build


```js
appcenter_ms.repositoryConfigurations_createOrUpdate({
  "repo": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * repo **required** `object`
    * installation_id `string`: The GitHub App Installation id. Required for repositories connected from GitHub App
    * external_user_id `string`: The external user id from the repository provider. Required for GitLab.com repositories
    * repo_id `string`: The repository id from the repository provider. Required for repositories connected from GitHub App and GitLab.com
    * repo_url `string`: The repository's git url, must be a HTTPS URL
    * service_connection_id `string`: The id of the service connection (private). Required for GitLab self-hosted repositories
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * message **required** `string`

### repositories_list
Gets the repositories available from the source code host


```js
appcenter_ms.repositories_list({
  "source_host": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * source_host **required** `string` (values: github, bitbucket, vsts, gitlab): The source host
  * vstsAccountName `string`: Filter repositories only for specified account and project, "vstsProjectId" is required
  * vstsProjectId `string`: Filter repositories only for specified account and project, "vstsAccountName" is required
  * service_connection_id `string`: The id of the service connection (private). Required for GitLab self-hosted repositories
  * form `string` (values: lite, full): The selected form of the object
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: A list of source repositories
  * items `object`: The source repository
    * clone_url `string`: URL used to clone the repository
    * name `string`: The repository name

### storeNotifications_getNotificationByAppId
Application specific store service status


```js
appcenter_ms.storeNotifications_getNotificationByAppId({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * service `string`
  * status `string`
  * valid_until `integer`

### test_getSubscriptions
Get information about the currently active subscriptions, if any


```js
appcenter_ms.test_getSubscriptions({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Subscription information
  * active `boolean`: Is the subscription currently active?
  * daysLeft `number`: The number of days left in the subscription
  * endsAt `string`: The date the subscription will end or ended
  * id `string`: Id of the subscription
  * startsAt `string`: The date the subscription began
  * tier `object`
    * name `string`: The name of the tier

### test_createSubscription
Accept a free trial subscription


```js
appcenter_ms.test_createSubscription({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Subscription information
  * active `boolean`: Is the subscription currently active?
  * daysLeft `number`: The number of days left in the subscription
  * endsAt `string`: The date the subscription will end or ended
  * id `string`: Id of the subscription
  * startsAt `string`: The date the subscription began
  * tier `object`
    * name `string`: The name of the tier

### symbolUploads_list
Gets a list of all uploads for the specified application


```js
appcenter_ms.symbolUploads_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * top `integer`: The maximum number of results to return.
  * status `string` (values: all, uploaded, processed): Filter results by the current status of a symbol upload: * all: all states in the symbol upload process. Includes created, aborted, committed, processing, indexed and failed states * uploaded: all states after package is uploaded. Includes committed, processing, indexed and failed states * processed: symbol upload processing is completed. Includes indexed and failed states.
  * symbol_type `string` (values: AndroidProguard, Apple, Breakpad, JavaScript, UWP): The type of symbols
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: A set of symbol upload entities
  * items `object`: A single symbol upload entity
    * app_id **required** `string`: The application that this symbol upload belongs to
    * file_name `string`: The file name for the symbol upload
    * file_size `number`: The size of the file in Mebibytes. This may be 0 until the status is indexed
    * origin `string` (values: User, System): The origin of the symbol upload
    * status **required** `string` (values: created, committed, aborted, processing, indexed, failed): The current status for the symbol upload
    * symbol_type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
    * symbol_upload_id **required** `string`: The id for the current symbol upload
    * symbols_uploaded `array`: The symbols found in the upload. This may be empty until the status is indexed
      * items `object`
        * platform **required** `string`: The platform the symbol is associated with
        * symbol_id **required** `string`: The symbol id of the symbol binary
    * timestamp `string`: When the symbol upload was committed, or last transaction time if not committed
    * user `object`: User information of the one who intitiated the symbol upload
      * display_name `string`: The full name of the user. Might for example be first and last name
      * email `string`: The email of the user

### symbolUploads_create
Begins the symbol upload process for a new set of symbols for the specified application


```js
appcenter_ms.symbolUploads_create({
  "body": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`: A request containing information pertaining to starting a symbol upload process
    * build `string`: The build number. Optional for Apple. Required for Android.
    * client_callback `string`: The callback URL that the client can optionally provide to get status updates for the current symbol upload
    * file_name `string`: The file name for the symbol upload
    * symbol_type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
    * version `string`: The version number. Optional for Apple. Required for Android.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: A response containing information pertaining to starting a symbol upload process
  * expiration_date **required** `string`: Describes how long the upload_url is valid
  * symbol_upload_id **required** `string`: The id for the current upload
  * upload_url **required** `string`: The URL where the client needs to upload the symbol blob to

### symbolUploads_delete
Deletes a symbol upload by id for the specified application


```js
appcenter_ms.symbolUploads_delete({
  "symbol_upload_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * symbol_upload_id **required** `string`: The ID of the symbol upload
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: A single symbol upload entity
  * app_id **required** `string`: The application that this symbol upload belongs to
  * file_name `string`: The file name for the symbol upload
  * file_size `number`: The size of the file in Mebibytes. This may be 0 until the status is indexed
  * origin `string` (values: User, System): The origin of the symbol upload
  * status **required** `string` (values: created, committed, aborted, processing, indexed, failed): The current status for the symbol upload
  * symbol_type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
  * symbol_upload_id **required** `string`: The id for the current symbol upload
  * symbols_uploaded `array`: The symbols found in the upload. This may be empty until the status is indexed
    * items `object`
      * platform **required** `string`: The platform the symbol is associated with
      * symbol_id **required** `string`: The symbol id of the symbol binary
  * timestamp `string`: When the symbol upload was committed, or last transaction time if not committed
  * user `object`: User information of the one who intitiated the symbol upload
    * display_name `string`: The full name of the user. Might for example be first and last name
    * email `string`: The email of the user

### symbolUploads_get
Gets a symbol upload by id for the specified application


```js
appcenter_ms.symbolUploads_get({
  "symbol_upload_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * symbol_upload_id **required** `string`: The ID of the symbol upload
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: A single symbol upload entity
  * app_id **required** `string`: The application that this symbol upload belongs to
  * file_name `string`: The file name for the symbol upload
  * file_size `number`: The size of the file in Mebibytes. This may be 0 until the status is indexed
  * origin `string` (values: User, System): The origin of the symbol upload
  * status **required** `string` (values: created, committed, aborted, processing, indexed, failed): The current status for the symbol upload
  * symbol_type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
  * symbol_upload_id **required** `string`: The id for the current symbol upload
  * symbols_uploaded `array`: The symbols found in the upload. This may be empty until the status is indexed
    * items `object`
      * platform **required** `string`: The platform the symbol is associated with
      * symbol_id **required** `string`: The symbol id of the symbol binary
  * timestamp `string`: When the symbol upload was committed, or last transaction time if not committed
  * user `object`: User information of the one who intitiated the symbol upload
    * display_name `string`: The full name of the user. Might for example be first and last name
    * email `string`: The email of the user

### symbolUploads_complete
Commits or aborts the symbol upload process for a new set of symbols for the specified application


```js
appcenter_ms.symbolUploads_complete({
  "symbol_upload_id": "",
  "body": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * symbol_upload_id **required** `string`: The ID of the symbol upload
  * body **required** `object`: A request containing information pertaining to completing a symbol upload process
    * status **required** `string` (values: committed, aborted): The desired operation for the symbol upload
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: A single symbol upload entity
  * app_id **required** `string`: The application that this symbol upload belongs to
  * file_name `string`: The file name for the symbol upload
  * file_size `number`: The size of the file in Mebibytes. This may be 0 until the status is indexed
  * origin `string` (values: User, System): The origin of the symbol upload
  * status **required** `string` (values: created, committed, aborted, processing, indexed, failed): The current status for the symbol upload
  * symbol_type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
  * symbol_upload_id **required** `string`: The id for the current symbol upload
  * symbols_uploaded `array`: The symbols found in the upload. This may be empty until the status is indexed
    * items `object`
      * platform **required** `string`: The platform the symbol is associated with
      * symbol_id **required** `string`: The symbol id of the symbol binary
  * timestamp `string`: When the symbol upload was committed, or last transaction time if not committed
  * user `object`: User information of the one who intitiated the symbol upload
    * display_name `string`: The full name of the user. Might for example be first and last name
    * email `string`: The email of the user

### symbolUploads_getLocation
Gets the URL to download the symbol upload


```js
appcenter_ms.symbolUploads_getLocation({
  "symbol_upload_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * symbol_upload_id **required** `string`: The ID of the symbol upload
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Location for downloading symbol upload
  * uri **required** `string`

### symbols_list
Returns the list of all symbols for the provided application


```js
appcenter_ms.symbols_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: A response containing the list of symbols matching the specified filter (if any was provided)
  * items `object`
    * alternate_symbol_ids **required** `array`: The other symbols in the same file
      * items `string`
    * app_id **required** `string`: The application that this symbol belongs to
    * build `string`: The build number. Optional for Apple. Required for Android.
    * origin **required** `string` (values: System, User): The origin of the symbol file
    * platform **required** `string`: The platform that this symbol is associated with
    * status **required** `string` (values: available, ignored): Whether the symbol is ignored.
    * symbol_id **required** `string`: The unique id for this symbol (uuid)
    * symbol_upload_id **required** `string`: The id of the symbol upload this symbol belongs to.
    * type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
    * url **required** `string`: The path name of the symbol file in blob storage
    * version `string`: The version number. Optional for Apple. Required for Android.

### symbols_get
Returns a particular symbol by id (uuid) for the provided application


```js
appcenter_ms.symbols_get({
  "symbol_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * symbol_id **required** `string`: The ID of the symbol (uuid of the symbol)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * alternate_symbol_ids **required** `array`: The other symbols in the same file
    * items `string`
  * app_id **required** `string`: The application that this symbol belongs to
  * build `string`: The build number. Optional for Apple. Required for Android.
  * origin **required** `string` (values: System, User): The origin of the symbol file
  * platform **required** `string`: The platform that this symbol is associated with
  * status **required** `string` (values: available, ignored): Whether the symbol is ignored.
  * symbol_id **required** `string`: The unique id for this symbol (uuid)
  * symbol_upload_id **required** `string`: The id of the symbol upload this symbol belongs to.
  * type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
  * url **required** `string`: The path name of the symbol file in blob storage
  * version `string`: The version number. Optional for Apple. Required for Android.

### symbols_ignore
Marks a symbol by id (uuid) as ignored


```js
appcenter_ms.symbols_ignore({
  "symbol_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * symbol_id **required** `string`: The ID of the symbol (uuid of the symbol)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * alternate_symbol_ids **required** `array`: The other symbols in the same file
    * items `string`
  * app_id **required** `string`: The application that this symbol belongs to
  * build `string`: The build number. Optional for Apple. Required for Android.
  * origin **required** `string` (values: System, User): The origin of the symbol file
  * platform **required** `string`: The platform that this symbol is associated with
  * status **required** `string` (values: available, ignored): Whether the symbol is ignored.
  * symbol_id **required** `string`: The unique id for this symbol (uuid)
  * symbol_upload_id **required** `string`: The id of the symbol upload this symbol belongs to.
  * type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
  * url **required** `string`: The path name of the symbol file in blob storage
  * version `string`: The version number. Optional for Apple. Required for Android.

### symbols_getLocation
Gets the URL to download the symbol


```js
appcenter_ms.symbols_getLocation({
  "symbol_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * symbol_id **required** `string`: The ID of the symbol (uuid of the symbol)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Location for downloading symbol
  * uri **required** `string`

### symbols_getStatus
Returns a particular symbol by id (uuid) for the provided application


```js
appcenter_ms.symbols_getStatus({
  "symbol_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * symbol_id **required** `string`: The ID of the symbol (uuid of the symbol)
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: A response containing information pertaining to a symbol status
  * app_id **required** `string`: The application that this symbol belongs to
  * status **required** `string` (values: available, ignored, missing): Whether the symbol is ignored.
  * symbol_id **required** `string`: The unique id for this symbol (uuid)

### apps_getTeams
Returns the details of all teams that have access to the app.


```js
appcenter_ms.apps_getTeams({
  "app_name": "",
  "owner_name": ""
}, context)
```

#### Input
* input `object`
  * app_name **required** `string`: The name of the application
  * owner_name **required** `string`: The name of the owner

#### Output
* output `array`
  * items
    * description `string`: The description of the team
    * display_name **required** `string`: The display name of the team
    * id **required** `string`: The internal unique id (UUID) of the team.
    * name **required** `string`: The name of the team
    * permissions `array`: The permissions the team has for the app
      * items `string` (values: manager, developer, viewer, tester)

### test_gdprExportApps
Lists all the endpoints available for Test apps data


```js
appcenter_ms.test_gdprExportApps({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * resources `array`
    * items `object`
      * path `string`
      * rel `string`

### test_gdprExportApp
Lists app data


```js
appcenter_ms.test_gdprExportApp({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * hash_files_url `string`

### test_gdprExportFileSetFile
Lists file set file data


```js
appcenter_ms.test_gdprExportFileSetFile({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * app_upload_id `string`
  * hash_file_id `string`
  * hash_file_url `string`
  * path `string`

### test_gdprExportHashFile
Lists hash file data


```js
appcenter_ms.test_gdprExportHashFile({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * filename `string`
  * id `string`

### test_gdprExportPipelineTest
Lists pipeline test data


```js
appcenter_ms.test_gdprExportPipelineTest({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * app_upload_id `string`
  * test_parameters `object`

### test_gdprExportTestRun
Lists test run data


```js
appcenter_ms.test_gdprExportTestRun({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * app_hash_file_id `string`
  * app_hash_file_url `string`
  * app_icon_url `string`
  * dsym_hash_file_id `string`
  * dsym_hash_file_url `string`
  * id `string`
  * locale `string`

### test_getTestRuns
Returns a list of test runs


```js
appcenter_ms.test_getTestRuns({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Summary single test run on Xamarin Test Cloud
    * appVersion `string`: The compiled version of the app binary
    * date `string`: The date and time the test was uploaded
    * description `string`: Human readable explanation of the current test status
    * id `string`: The unique id of the test upload
    * platform `string`: The device platform targeted by the test. Possible values are 'ios' or 'android'
    * resultStatus `string`: The passed/failed state
    * runStatus `string`: The current status of the test run, in relation to the various phases
    * state `string`: Deprecated. Use runStatus instead.
    * stats `object`: Summary single test run on Xamarin Test Cloud
      * devices `number`: Number of devices running the test
      * devicesFailed `number`: Number of failed devices
      * devicesFinished `number`: Number of finished devices
      * failed `number`: Number of failed tests
      * passed `number`: Number of passed tests
      * peakMemory `number`: The max amount of MB used during the test run
      * skipped `number`: Number of skipped tests
      * total `number`: Number of tests in total
      * totalDeviceMinutes `number`: The number of minutes of device time the test has been runnign
    * status `string`: Deprecated. Use resultStatus instead.
    * testSeries `string`: The name of the test series with which this test upload is associated
    * testType `string`: The name of the test framework used to run this test

### test_createTestRun
Creates a new test run


```js
appcenter_ms.test_createTestRun({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### test_archiveTestRun
Logically deletes a test run


```js
appcenter_ms.test_archiveTestRun({
  "test_run_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_run_id **required** `string`: The ID of the test run
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Summary single test run on Xamarin Test Cloud
  * appVersion `string`: The compiled version of the app binary
  * date `string`: The date and time the test was uploaded
  * description `string`: Human readable explanation of the current test status
  * id `string`: The unique id of the test upload
  * platform `string`: The device platform targeted by the test. Possible values are 'ios' or 'android'
  * resultStatus `string`: The passed/failed state
  * runStatus `string`: The current status of the test run, in relation to the various phases
  * state `string`: Deprecated. Use runStatus instead.
  * stats `object`: Summary single test run on Xamarin Test Cloud
    * devices `number`: Number of devices running the test
    * devicesFailed `number`: Number of failed devices
    * devicesFinished `number`: Number of finished devices
    * failed `number`: Number of failed tests
    * passed `number`: Number of passed tests
    * peakMemory `number`: The max amount of MB used during the test run
    * skipped `number`: Number of skipped tests
    * total `number`: Number of tests in total
    * totalDeviceMinutes `number`: The number of minutes of device time the test has been runnign
  * status `string`: Deprecated. Use resultStatus instead.
  * testSeries `string`: The name of the test series with which this test upload is associated
  * testType `string`: The name of the test framework used to run this test

### test_getTestRun
Returns a single test runs


```js
appcenter_ms.test_getTestRun({
  "test_run_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_run_id **required** `string`: The ID of the test run
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Summary single test run on Xamarin Test Cloud
  * appVersion `string`: The compiled version of the app binary
  * date `string`: The date and time the test was uploaded
  * description `string`: Human readable explanation of the current test status
  * id `string`: The unique id of the test upload
  * platform `string`: The device platform targeted by the test. Possible values are 'ios' or 'android'
  * resultStatus `string`: The passed/failed state
  * runStatus `string`: The current status of the test run, in relation to the various phases
  * state `string`: Deprecated. Use runStatus instead.
  * stats `object`: Summary single test run on Xamarin Test Cloud
    * devices `number`: Number of devices running the test
    * devicesFailed `number`: Number of failed devices
    * devicesFinished `number`: Number of finished devices
    * failed `number`: Number of failed tests
    * passed `number`: Number of passed tests
    * peakMemory `number`: The max amount of MB used during the test run
    * skipped `number`: Number of skipped tests
    * total `number`: Number of tests in total
    * totalDeviceMinutes `number`: The number of minutes of device time the test has been runnign
  * status `string`: Deprecated. Use resultStatus instead.
  * testSeries `string`: The name of the test series with which this test upload is associated
  * testType `string`: The name of the test framework used to run this test

### test_startUploadingFile
Uploads file for a test run


```js
appcenter_ms.test_startUploadingFile({
  "test_run_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_run_id **required** `string`: The ID of the test run
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### test_uploadHash
Adds file with the given hash to a test run


```js
appcenter_ms.test_uploadHash({
  "test_run_id": "",
  "file_info": {
    "file_type": "",
    "checksum": "",
    "relative_path": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_run_id **required** `string`: The ID of the test run
  * file_info **required** `object`: Hash, type, path and byte range of a file that is required in test run
    * byte_range `string`: Range of bytes required to verify ownership of the file
    * checksum **required** `string`: SHA256 hash of the file
    * file_type **required** `string` (values: dsym-file, app-file, test-file): Type of the file
    * relative_path **required** `string`: Relative path of the file
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### test_uploadHashesBatch
Adds file with the given hash to a test run


```js
appcenter_ms.test_uploadHashesBatch({
  "test_run_id": "",
  "file_info": [],
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_run_id **required** `string`: The ID of the test run
  * file_info **required** `array`
    * items `object`: Hash, type, path and byte range of a file that is required in test run
      * checksum **required** `string`: SHA256 hash of the file
      * fileType **required** `string` (values: dsym-file, app-file, test-file): Type of the file
      * relativePath **required** `string`: Relative path of the file
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Response message for single uploaded file hash
    * checksum **required** `string`: SHA256 hash of the file
    * fileType **required** `string` (values: dsym-file, app-file, test-file): Type of the file
    * relativePath `string`: Relative path of the file
    * uploadStatus **required** `object`: Status of the upload
      * location `string`: URI that should be used to make POST request if file with given hash doesn't exist. This is set when status_code is equal to 412
      * statusCode **required** `number`: HTTP status code that represent result of upload

### test_getTestReport
Returns a single test report


```js
appcenter_ms.test_getTestReport({
  "test_run_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_run_id **required** `string`: The ID of the test run
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * app_upload_id **required** `string`
  * date **required** `string`
  * date_finished **required** `string`
  * device_logs **required** `array`
    * items `object`
      * appium_log `string`
      * device_log `string`
      * device_snapshot_id `string`
      * test_log `string`
  * errorMessage `string`
  * features **required** `array`
    * items `object`
      * failed `number`
      * name `string`
      * peakDuration `number`
      * peakMemory `number`
      * skipped `number`
      * tests `array`
        * items `object`
          * peakDuration `number`
          * peakMemory `number`
          * runs `array`
          * testName `string`
  * finished_device_snapshots **required** `array`
    * items `string`
  * id **required** `string`
  * platform **required** `string`
  * revision **required** `number`
  * schema_version **required** `number`
  * snapshot_fatal_errors `array`
    * items `object`
      * device_snapshot_id `string`
      * error_message `string`
      * error_title `string`
  * stats **required** `object`
    * artifacts `object`
    * devices **required** `number`
    * devices_failed **required** `number`
    * devices_finished **required** `number`
    * devices_not_runned **required** `number`
    * devices_skipped **required** `number`
    * failed **required** `number`
    * filesize **required** `number`
    * os **required** `number`
    * passed **required** `number`
    * skipped **required** `number`
    * step_count **required** `number`
    * total **required** `number`
    * totalDeviceMinutes **required** `number`
  * testType **required** `string`

### test_startTestRun
Starts test run


```js
appcenter_ms.test_startTestRun({
  "test_run_id": "",
  "startOptions": {
    "test_framework": "",
    "device_selection": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_run_id **required** `string`: The ID of the test run
  * startOptions **required** `object`: Options required to start the test run
    * device_selection **required** `string`: Device selection string.
    * language `string`: Language that should be used to run tests.
    * locale `string`: Locale that should be used to run tests.
    * test_framework **required** `string`: Test framework used by tests.
    * test_parameters `object`: A JSON dictionary with additional test parameters
    * test_series `string`: Name of the test series.
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Result of starting a test run
  * accepted_devices `array`: List with names of accepted devices
    * items `string`
  * rejected_devices `array`: List with names and descriptions of rejected devices
    * items `string`

### test_getTestRunState
Gets state of the test run


```js
appcenter_ms.test_getTestRunState({
  "test_run_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_run_id **required** `string`: The ID of the test run
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Current status of a test run
  * exit_code `integer`: The exit code that the client should use when exiting. Used for indicating status to the caller of the client.
  * message `array`: Multi-line message that describes the status
    * items `string`
  * wait_time `integer`: Time (in seconds) that the client should wait for before checking the status again

### test_stopTestRun
Stop a test run execution


```js
appcenter_ms.test_stopTestRun({
  "test_run_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_run_id **required** `string`: The ID of the test run to be stopped
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Summary single test run on Xamarin Test Cloud
  * appVersion `string`: The compiled version of the app binary
  * date `string`: The date and time the test was uploaded
  * description `string`: Human readable explanation of the current test status
  * id `string`: The unique id of the test upload
  * platform `string`: The device platform targeted by the test. Possible values are 'ios' or 'android'
  * resultStatus `string`: The passed/failed state
  * runStatus `string`: The current status of the test run, in relation to the various phases
  * state `string`: Deprecated. Use runStatus instead.
  * stats `object`: Summary single test run on Xamarin Test Cloud
    * devices `number`: Number of devices running the test
    * devicesFailed `number`: Number of failed devices
    * devicesFinished `number`: Number of finished devices
    * failed `number`: Number of failed tests
    * passed `number`: Number of passed tests
    * peakMemory `number`: The max amount of MB used during the test run
    * skipped `number`: Number of skipped tests
    * total `number`: Number of tests in total
    * totalDeviceMinutes `number`: The number of minutes of device time the test has been runnign
  * status `string`: Deprecated. Use resultStatus instead.
  * testSeries `string`: The name of the test series with which this test upload is associated
  * testType `string`: The name of the test framework used to run this test

### test_getAllTestSeries
Returns list of all test series for an application


```js
appcenter_ms.test_getAllTestSeries({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * query `string`: A query string to filter test series
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Summary of a single test series
    * mostRecentActivity `string`: Date of the latest test run that used this test series
    * name **required** `string`: Name of the test series
    * slug **required** `string`: Unique, human-readable identifier of the test series
    * testRuns `array`: Most recent test runs
      * items `object`: Most important information about a test run.
        * completed `boolean`: Tells whether the test run has completed
        * date `string`: Date of the test run.
        * failed `number`: Number of failed tests
        * passed `number`: Number of passed tests
        * statusDescription `string`: Human-readable status of the test run.

### test_createTestSeries
Creates new test series for an application


```js
appcenter_ms.test_createTestSeries({
  "testSeriesName": {
    "name": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * testSeriesName **required** `object`
    * name **required** `string`: Name of the new test series
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Summary of a single test series
  * mostRecentActivity `string`: Date of the latest test run that used this test series
  * name **required** `string`: Name of the test series
  * slug **required** `string`: Unique, human-readable identifier of the test series
  * testRuns `array`: Most recent test runs
    * items `object`: Most important information about a test run.
      * completed `boolean`: Tells whether the test run has completed
      * date `string`: Date of the test run.
      * failed `number`: Number of failed tests
      * passed `number`: Number of passed tests
      * statusDescription `string`: Human-readable status of the test run.

### test_deleteTestSeries
Deletes a single test series


```js
appcenter_ms.test_deleteTestSeries({
  "test_series_slug": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_series_slug **required** `string`: The slug of the test series
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### test_patchTestSeries
Updates name and slug of a test series


```js
appcenter_ms.test_patchTestSeries({
  "test_series_slug": "",
  "name": {
    "name": ""
  },
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_series_slug **required** `string`: The slug of the test series
  * name **required** `object`
    * name **required** `string`: Name of the new test series
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Summary of a single test series
  * mostRecentActivity `string`: Date of the latest test run that used this test series
  * name **required** `string`: Name of the test series
  * slug **required** `string`: Unique, human-readable identifier of the test series
  * testRuns `array`: Most recent test runs
    * items `object`: Most important information about a test run.
      * completed `boolean`: Tells whether the test run has completed
      * date `string`: Date of the test run.
      * failed `number`: Number of failed tests
      * passed `number`: Number of passed tests
      * statusDescription `string`: Human-readable status of the test run.

### test_getAllTestRunsForSeries
Returns list of all test runs for a given test series


```js
appcenter_ms.test_getAllTestRunsForSeries({
  "test_series_slug": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * test_series_slug **required** `string`: The slug of the test series
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: Summary single test run on Xamarin Test Cloud
    * appVersion `string`: The compiled version of the app binary
    * date `string`: The date and time the test was uploaded
    * description `string`: Human readable explanation of the current test status
    * id `string`: The unique id of the test upload
    * platform `string`: The device platform targeted by the test. Possible values are 'ios' or 'android'
    * resultStatus `string`: The passed/failed state
    * runStatus `string`: The current status of the test run, in relation to the various phases
    * state `string`: Deprecated. Use runStatus instead.
    * stats `object`: Summary single test run on Xamarin Test Cloud
      * devices `number`: Number of devices running the test
      * devicesFailed `number`: Number of failed devices
      * devicesFinished `number`: Number of finished devices
      * failed `number`: Number of failed tests
      * passed `number`: Number of passed tests
      * peakMemory `number`: The max amount of MB used during the test run
      * skipped `number`: Number of skipped tests
      * total `number`: Number of tests in total
      * totalDeviceMinutes `number`: The number of minutes of device time the test has been runnign
    * status `string`: Deprecated. Use resultStatus instead.
    * testSeries `string`: The name of the test series with which this test upload is associated
    * testType `string`: The name of the test framework used to run this test

### apps_listTesters
Returns the testers associated with the app specified with the given app name which belongs to the given owner.


```js
appcenter_ms.apps_listTesters({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * avatar_url `string`: The avatar URL of the user
    * can_change_password `boolean`: User is required to send an old password in order to change the password.
    * display_name **required** `string`: The full name of the user. Might for example be first and last name
    * email **required** `string`: The email address of the user
    * id **required** `string`: The unique id (UUID) of the user
    * name **required** `string`: The unique name that is used to identify the user.
    * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
    * permissions `array`: The permissions the user has for the app
      * items `string` (values: manager, developer, viewer, tester)

### releases_deleteTesterFromDestinations
Delete the given tester from the all releases


```js
appcenter_ms.releases_deleteTesterFromDestinations({
  "tester_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * tester_id **required** `string`: The id of the tester
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### builds_listToolsets
Returns available toolsets for application


```js
appcenter_ms.builds_listToolsets({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * tools `string` (values: xamarin, xcode, node): Toolset name
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: Set of toolsets available for app
  * node `array`: A list of Node versions
    * items `object`: The Node version
      * current `boolean`: If the Node version is default for AppCenter
      * name `string`: The version name
  * xamarin `array`: A list of Xamarin SDK bundles
    * items `object`: The Xamarin SDK bundle
      * current `boolean`: If the SDK is latest stable
      * monoVersion `string`: The Mono version
      * sdkBundle `string`: The Xamarin SDK version
      * stable `boolean`: If the SDK is stable
      * xcodeVersions `array`: Specific for iOS SDK. A list of Xcode versions supported by current SDK version
        * items `string`
  * xcode `array`: A list of Xcode versions
    * items `object`: The Xcode version
      * current `boolean`: If the Xcode is latest stable
      * name `string`: The version name

### apps_transferOwnership
Transfers ownership of an app to a different user or organization


```js
appcenter_ms.apps_transferOwnership({
  "owner_name": "",
  "app_name": "",
  "destination_owner_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * empty_body `object`
  * destination_owner_name **required** `string`: The name of the owner (user or organization) to which the app is being transferred

#### Output
* output
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app

### apps_transferToOrg
Transfers ownership of an app to a new organization


```js
appcenter_ms.apps_transferToOrg({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * empty_body `object`

#### Output
* output `object`
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at

### releases_createReleaseUpload
Initiate a new release upload. This API is part of multi-step upload process.


```js
appcenter_ms.releases_createReleaseUpload({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * build_number `string`: User defined build number
    * build_version `string`: User defined build version
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * id **required** `string`: The ID for the newly created upload. It is going to be required later in the process.
  * package_asset_id **required** `string`: The associated asset ID in the file management service associated with this uploaded.
  * token **required** `string`: The access token used for upload permissions.
  * upload_domain **required** `string`: The URL domain used to upload the release.
  * url_encoded_token **required** `string`: The access token used for upload permissions (URL encoded to use as a single query parameter).

### releases_getReleaseUploadStatus
Get the current status of the release upload.


```js
appcenter_ms.releases_getReleaseUploadStatus({
  "upload_id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: The ID of the release upload
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * error_details `string`: Details describing what went wrong processing the upload. Will only be set if status = 'error'.
  * id **required** `string`: The ID for the upload.
  * release_distinct_id `number`: The distinct ID of the release. Will only be set when the status = 'readyToBePublished'.
  * upload_status **required** `string` (values: uploadStarted, uploadFinished, readyToBePublished, malwareDetected, error): The current upload status.

### releases_updateReleaseUploadStatus
Update the current status of the release upload.


```js
appcenter_ms.releases_updateReleaseUploadStatus({
  "upload_id": "",
  "body": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: The ID of the release upload
  * body **required** `object`
    * upload_status **required** `string` (values: uploadFinished, uploadCanceled): The new status of the release upload
  * extract `boolean`: A flag that indicates to extract release or not, true by default
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`
  * id **required** `string`: The ID for the upload.
  * upload_status **required** `string` (values: uploadStarted, uploadFinished, uploadCanceled, readyToBePublished, malwareDetected, error): The current upload status.

### test_listDeviceSetsOfUser
Lists device sets belonging to the user


```js
appcenter_ms.test_listDeviceSetsOfUser({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`: The name and devices of the device set
    * deviceConfigurations **required** `array`
      * items `object`
        * id `string`: The unique id of the device configuration
        * image `object`
          * thumb `string`
        * model `object`
          * formFactor `string`
          * manufacturer `string`
          * name `string`
          * releaseDate `string`
        * os `string`
        * osName `string`
    * id **required** `string`: Identifier of the device set
    * manufacturerCount `number`: The number of manufacturers in the device set's device selection
    * name **required** `string`: Name of the device set
    * osVersionCount `number`: The number of os versions in the device set's device selection
    * owner **required** `object`: The owner of a device set
      * displayName `string`: Display name of the account
      * id **required** `string`: Account ID
      * name **required** `string`: Name of the account
      * type **required** `string`: Type of account
    * slug `string`: Slug of the device set

### test_createDeviceSetOfUser
Creates a device set belonging to the user


```js
appcenter_ms.test_createDeviceSetOfUser({
  "deviceSet": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * deviceSet **required** `object`: The name of the device set and the list of device IDs
    * devices **required** `array`: List of device IDs
      * items `string`
    * name **required** `string`: The name of the device set
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: The name and devices of the device set
  * deviceConfigurations **required** `array`
    * items `object`
      * id `string`: The unique id of the device configuration
      * image `object`
        * thumb `string`
      * model `object`
        * formFactor `string`
        * manufacturer `string`
        * name `string`
        * releaseDate `string`
      * os `string`
      * osName `string`
  * id **required** `string`: Identifier of the device set
  * manufacturerCount `number`: The number of manufacturers in the device set's device selection
  * name **required** `string`: Name of the device set
  * osVersionCount `number`: The number of os versions in the device set's device selection
  * owner **required** `object`: The owner of a device set
    * displayName `string`: Display name of the account
    * id **required** `string`: Account ID
    * name **required** `string`: Name of the account
    * type **required** `string`: Type of account
  * slug `string`: Slug of the device set

### test_deleteDeviceSetOfUser
Deletes a device set belonging to the user


```js
appcenter_ms.test_deleteDeviceSetOfUser({
  "id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the device set
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### test_getDeviceSetOfUser
Gets a device set belonging to the user


```js
appcenter_ms.test_getDeviceSetOfUser({
  "id": "",
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the device set
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: The name and devices of the device set
  * deviceConfigurations **required** `array`
    * items `object`
      * id `string`: The unique id of the device configuration
      * image `object`
        * thumb `string`
      * model `object`
        * formFactor `string`
        * manufacturer `string`
        * name `string`
        * releaseDate `string`
      * os `string`
      * osName `string`
  * id **required** `string`: Identifier of the device set
  * manufacturerCount `number`: The number of manufacturers in the device set's device selection
  * name **required** `string`: Name of the device set
  * osVersionCount `number`: The number of os versions in the device set's device selection
  * owner **required** `object`: The owner of a device set
    * displayName `string`: Display name of the account
    * id **required** `string`: Account ID
    * name **required** `string`: Name of the account
    * type **required** `string`: Type of account
  * slug `string`: Slug of the device set

### test_updateDeviceSetOfUser
Updates a device set belonging to the user


```js
appcenter_ms.test_updateDeviceSetOfUser({
  "id": "",
  "deviceSet": null,
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the device set
  * deviceSet **required** `object`: The name of the device set and the list of device IDs
    * devices **required** `array`: List of device IDs
      * items `string`
    * name **required** `string`: The name of the device set
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: The name and devices of the device set
  * deviceConfigurations **required** `array`
    * items `object`
      * id `string`: The unique id of the device configuration
      * image `object`
        * thumb `string`
      * model `object`
        * formFactor `string`
        * manufacturer `string`
        * name `string`
        * releaseDate `string`
      * os `string`
      * osName `string`
  * id **required** `string`: Identifier of the device set
  * manufacturerCount `number`: The number of manufacturers in the device set's device selection
  * name **required** `string`: Name of the device set
  * osVersionCount `number`: The number of os versions in the device set's device selection
  * owner **required** `object`: The owner of a device set
    * displayName `string`: Display name of the account
    * id **required** `string`: Account ID
    * name **required** `string`: Name of the account
    * type **required** `string`: Type of account
  * slug `string`: Slug of the device set

### users_list
Returns the users associated with the app specified with the given app name which belongs to the given owner.


```js
appcenter_ms.users_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * avatar_url `string`: The avatar URL of the user
    * can_change_password `boolean`: User is required to send an old password in order to change the password.
    * display_name **required** `string`: The full name of the user. Might for example be first and last name
    * email **required** `string`: The email address of the user
    * id **required** `string`: The unique id (UUID) of the user
    * name **required** `string`: The unique name that is used to identify the user.
    * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
    * permissions `array`: The permissions the user has for the app
      * items `string` (values: manager, developer, viewer, tester)

### apps_removeUser
Removes the user from the app


```js
appcenter_ms.apps_removeUser({
  "owner_name": "",
  "app_name": "",
  "user_email": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * user_email **required** `string`: The user email of the user to delete

#### Output
*Output schema unknown*

### apps_updateUserPermissions
Update user permission for the app


```js
appcenter_ms.apps_updateUserPermissions({
  "owner_name": "",
  "app_name": "",
  "user_email": "",
  "user_app_permissions_data": null
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application
  * user_email **required** `string`: The user email of the user to patch
  * user_app_permissions_data **required** `object`
    * permissions **required** `array`: The permissions the user has for the app
      * items `string` (values: manager, developer, viewer)

#### Output
*Output schema unknown*

### crashes_getAppVersions
Gets a list of application versions.


```js
appcenter_ms.crashes_getAppVersions({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`
  * items `object`
    * app_id **required** `string`
    * app_version **required** `string`
    * app_version_id **required** `string`
    * build_number `string`
    * display_name **required** `string`

### webhooks_list
Get web hooks configured for a particular app


```js
appcenter_ms.webhooks_list({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `object`: List of alerting webhooks wrapped as operation result
  * values **required** `array`
    * items `object`: Alerting webhook
      * enabled `boolean`: Allows eanble/disable webhook
      * event_types **required** `array`: Event types enabled for webhook
        * items `string` (values: newCrashGroupCreated, newAppReleased): Alerting EventTypes enum
      * id `string`: The unique id (UUID) of the webhook
      * name **required** `string`: display name of the webhook
      * url **required** `string`: target url of the webhook

### builds_listXamarinSDKBundles
Gets the Xamarin SDK bundles available to this app


```js
appcenter_ms.builds_listXamarinSDKBundles({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: A list of Xamarin SDK bundles
  * items `object`: The Xamarin SDK bundle
    * current `boolean`: If the SDK is latest stable
    * monoVersion `string`: The Mono version
    * sdkBundle `string`: The Xamarin SDK version
    * stable `boolean`: If the SDK is stable
    * xcodeVersions `array`: Specific for iOS SDK. A list of Xcode versions supported by current SDK version
      * items `string`

### builds_listXcodeVersions
Gets the Xcode versions available to this app


```js
appcenter_ms.builds_listXcodeVersions({
  "owner_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the owner
  * app_name **required** `string`: The name of the application

#### Output
* output `array`: A list of Xcode versions
  * items `object`: The Xcode version
    * current `boolean`: If the Xcode is latest stable
    * name `string`: The version name

### azureSubscription_listForUser
Returns a list of azure subscriptions for the user


```js
appcenter_ms.azureSubscription_listForUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to

### billingAggregatedInformation_getAll
Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.


```js
appcenter_ms.billingAggregatedInformation_getAll({}, context)
```

#### Input
* input `object`
  * service `string` (values: Test, Build): Type of service that should be included in the Billing Information
  * period `string` (values: Previous, Current, Next): Type of period that should be included in the Billing Information
  * showOriginalPlans `boolean`: Controls whether the API should show the original plan when Azure Subscription is not enabled

#### Output
* output `object`: Aggregated Billing Information for a user an the organizations in which the user is an admin.
  * aggregatedBillings `object`: Aggregated Billing Information for a user or an organization
    * azureSubscriptionId `string`: Unique identifier for the Azure subscription used for billing
    * azureSubscriptionState `string` (values: Enabled, Disabled, NotSet): State of the Azure subscription used for billing
    * billingPlans `object`: Billing Plans section in the Billing Information
      * buildService `object`: Billing Plans for a single service
        * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
        * currentBillingPeriod `object`: Billing plans for a given period
          * byAccount `object`: Selection of a billing plan
          * endTime `string`: Exclusive end of the period.
          * startTime `string`: Inclusive start of the period
        * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
      * testService `object`: Billing Plans for a single service
        * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
        * currentBillingPeriod `object`: Billing plans for a given period
          * byAccount `object`: Selection of a billing plan
          * endTime `string`: Exclusive end of the period.
          * startTime `string`: Inclusive start of the period
        * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
    * id `string`: ID of the user or organization
    * timestamp `string`: The ISO 8601 datetime of last modification
    * usage `object`: Usage section in the Billing Information
      * buildService `object`: Resource usage for a single Mobile Center service
        * currentUsagePeriod `object`: Usage for a single period
          * byAccount `object`: A collection of named numeric values
          * byApp `object`: A collection of  named numeric values grouped by app
          * endTime `string`: Exclusive end time of the usage period.
          * startTime `string`: Inclusive start time of the usage period
      * testService `object`: Resource usage for a single Mobile Center service
        * currentUsagePeriod `object`: Usage for a single period
          * byAccount `object`: A collection of named numeric values
          * byApp `object`: A collection of  named numeric values grouped by app
          * endTime `string`: Exclusive end time of the usage period.
          * startTime `string`: Inclusive start time of the usage period
    * version `string`: Version of the Billing Information schema

### invitations_sent
Returns all invitations sent by the caller


```js
appcenter_ms.invitations_sent(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * app
      * description `string`: The description of the app
      * display_name **required** `string`: The display name of the app
      * icon_source `string`: The string representation of the source of the app's icon
      * icon_url `string`: The string representation of the URL pointing to the app's icon
      * id **required** `string`: The unique ID (UUID) of the app
      * name **required** `string`: The name of the app used in URLs
      * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
      * owner **required** `object`: The information about the app's owner
        * avatar_url `string`: The avatar URL of the owner
        * display_name **required** `string`: The owner's display name
        * email `string`: The owner's email address
        * id **required** `string`: The unique id (UUID) of the owner
        * name **required** `string`: The unique name that used to identify the owner
        * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
      * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
      * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
      * azure_subscription `object`
        * is_billable `boolean`: If the subscription can be used for billing
        * is_billing `boolean`: If the subscription is used for billing
        * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
        * subscription_id **required** `string`: The azure subscription id
        * subscription_name **required** `string`: The name of the azure subscription
        * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
      * created_at `string`: The created date of this app
      * member_permissions `array`: The permissions of the calling user
        * items `string` (values: manager, developer, viewer, tester)
      * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
      * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
      * updated_at `string`: The last updated date of this app
    * invitation_id **required** `string`: The id of the invitation
    * organization `object`
      * avatar_url `string`: The URL to a user-uploaded Avatar image
      * created_at **required** `string`: The creation date of this organization
      * display_name **required** `string`: The display name of the organization
      * id **required** `string`: The internal unique id (UUID) of the organization.
      * name **required** `string`: The slug name of the organization
      * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
      * updated_at **required** `string`: The date the organization was last updated at

### legacyCodePushAcquisition_updateInstallsStatus
Report deploy of specified release


```js
appcenter_ms.legacyCodePushAcquisition_updateInstallsStatus({
  "releaseMetadata": null
}, context)
```

#### Input
* input `object`
  * releaseMetadata **required** `object`
    * appVersion `string`
    * clientUniqueId `string`
    * deploymentKey `string`
    * label `string`
    * previousDeploymentKey `string`
    * previousLabelOrAppVersion `string`
    * status `string`

#### Output
*Output schema unknown*

### legacyCodePushAcquisition_updateDownloadStatus
Report download of specified release


```js
appcenter_ms.legacyCodePushAcquisition_updateDownloadStatus({
  "releaseMetadata": null
}, context)
```

#### Input
* input `object`
  * releaseMetadata **required** `object`
    * appVersion `string`
    * clientUniqueId `string`
    * deploymentKey `string`
    * label `string`
    * previousDeploymentKey `string`
    * previousLabelOrAppVersion `string`
    * status `string`

#### Output
*Output schema unknown*

### legacyCodePushAcquisition_updateCheck
Check for updates


```js
appcenter_ms.legacyCodePushAcquisition_updateCheck({}, context)
```

#### Input
* input `object`
  * deploymentKey `string`
  * appVersion `string`
  * packageHash `string`
  * label `string`
  * clientUniqueId `string`
  * isCompanion `string`

#### Output
* output `object`
  * updateInfo **required**
    * appVersion `string`
    * description `string`
    * isDisabled `boolean`
    * isMandatory `boolean`
    * rollout `integer`
    * downloadURL `string`
    * isAvailable `boolean`
    * label `string`
    * packageHash `string`
    * packageSize `number`
    * shouldRunBinaryVersion `boolean`
    * updateAppVersion `boolean`

### organizations_list
Returns a list of organizations the requesting user has access to


```js
appcenter_ms.organizations_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * display_name **required** `string`: The display name of the organization
    * name **required** `string`: The slug name of the organization
    * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization

### organizations_createOrUpdate
Creates a new organization and returns it to the caller


```js
appcenter_ms.organizations_createOrUpdate({
  "organization": null
}, context)
```

#### Input
* input `object`
  * organization **required** `object`
    * display_name `string`: The display name of the organization
    * name `string`: The name of the organization used in URLs

#### Output
* output `object`
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at

### billingAggregatedInformation_getForOrg
Aggregated Billing Information for a given Organization.


```js
appcenter_ms.billingAggregatedInformation_getForOrg({
  "orgName": ""
}, context)
```

#### Input
* input `object`
  * orgName **required** `string`: The name of the Organization
  * service `string` (values: Test, Build): Type of service that should be included in the Billing Information
  * period `string` (values: Previous, Current, Next): Type of period that should be included in the Billing Information
  * showOriginalPlans `boolean`: Controls whether the API should show the original plan when Azure Subscription is not enabled

#### Output
* output `object`: Aggregated Billing Information for a user or an organization
  * azureSubscriptionId `string`: Unique identifier for the Azure subscription used for billing
  * azureSubscriptionState `string` (values: Enabled, Disabled, NotSet): State of the Azure subscription used for billing
  * billingPlans `object`: Billing Plans section in the Billing Information
    * buildService `object`: Billing Plans for a single service
      * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
      * currentBillingPeriod `object`: Billing plans for a given period
        * byAccount `object`: Selection of a billing plan
          * count `integer`: Number of instances of the billing plan.
          * plan `object`: Billing Plan
        * endTime `string`: Exclusive end of the period.
        * startTime `string`: Inclusive start of the period
      * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
    * testService `object`: Billing Plans for a single service
      * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
      * currentBillingPeriod `object`: Billing plans for a given period
        * byAccount `object`: Selection of a billing plan
          * count `integer`: Number of instances of the billing plan.
          * plan `object`: Billing Plan
        * endTime `string`: Exclusive end of the period.
        * startTime `string`: Inclusive start of the period
      * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
  * id `string`: ID of the user or organization
  * timestamp `string`: The ISO 8601 datetime of last modification
  * usage `object`: Usage section in the Billing Information
    * buildService `object`: Resource usage for a single Mobile Center service
      * currentUsagePeriod `object`: Usage for a single period
        * byAccount `object`: A collection of named numeric values
        * byApp `object`: A collection of  named numeric values grouped by app
        * endTime `string`: Exclusive end time of the usage period.
        * startTime `string`: Inclusive start time of the usage period
    * testService `object`: Resource usage for a single Mobile Center service
      * currentUsagePeriod `object`: Usage for a single period
        * byAccount `object`: A collection of named numeric values
        * byApp `object`: A collection of  named numeric values grouped by app
        * endTime `string`: Exclusive end time of the usage period.
        * startTime `string`: Inclusive start time of the usage period
  * version `string`: Version of the Billing Information schema

### organizations_delete
Deletes a single organization


```js
appcenter_ms.organizations_delete({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
*Output schema unknown*

### organizations_get
Returns the details of a single organization


```js
appcenter_ms.organizations_get({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
* output `object`
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at

### organizations_update
Returns a list of organizations the requesting user has access to


```js
appcenter_ms.organizations_update({
  "org_name": "",
  "org": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * org **required** `object`
    * display_name `string`: The full (friendly) name of the organization.
    * name `string`: The name of the organization used in URLs

#### Output
* output `object`
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at

### apps_listForOrg
Returns a list of apps for the organization


```js
appcenter_ms.apps_listForOrg({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
* output `array`
  * items
    * description `string`: The description of the app
    * display_name **required** `string`: The display name of the app
    * icon_source `string`: The string representation of the source of the app's icon
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * id **required** `string`: The unique ID (UUID) of the app
    * name **required** `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * owner **required** `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
    * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
    * azure_subscription `object`
      * is_billable `boolean`: If the subscription can be used for billing
      * is_billing `boolean`: If the subscription is used for billing
      * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
      * subscription_id **required** `string`: The azure subscription id
      * subscription_name **required** `string`: The name of the azure subscription
      * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
    * created_at `string`: The created date of this app
    * member_permissions `array`: The permissions of the calling user
      * items `string` (values: manager, developer, viewer, tester)
    * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
    * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
    * updated_at `string`: The last updated date of this app

### apps_createForOrg
Creates a new app for the organization and returns it to the caller


```js
appcenter_ms.apps_createForOrg({
  "org_name": "",
  "app": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * app **required** `object`
    * description `string`: A short text describing the app
    * display_name **required** `string`: The descriptive name of the app. This can contain any characters
    * name `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * platform **required** `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Xamarin, Unity, Electron, WPF, WinForms, Custom): The platform of the app
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase

#### Output
* output
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app

### organization_deleteAvatar
Deletes the uploaded organization avatar


```js
appcenter_ms.organization_deleteAvatar({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
* output `object`
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at

### organization_updateAvatar
Sets the organization avatar


```js
appcenter_ms.organization_updateAvatar({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * avatar `string`, `object`: The image for an Organization avatar to upload.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at

### azureSubscription_listForOrg
Returns a list of azure subscriptions for the organization


```js
appcenter_ms.azureSubscription_listForOrg({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
* output `array`
  * items `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to

### distributionGroups_listForOrg
Returns a list of distribution groups in the org specified


```js
appcenter_ms.distributionGroups_listForOrg({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
* output `array`
  * items `object`
    * display_name `string`: The name of the distribution group
    * id **required** `string`: The unique ID of the distribution group
    * is_public **required** `boolean`: Whether the distribution group is public
    * name **required** `string`: The name of the distribution group used in URLs
    * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group

### distributionGroups_createForOrg
Creates a disribution goup which can be shared across apps under an organization


```js
appcenter_ms.distributionGroups_createForOrg({
  "org_name": "",
  "distribution_group": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group **required** `object`
    * display_name `string`: The display name of the distribution group. If not specified, the name will be used.
    * name **required** `string`: The name of the distribution group

#### Output
* output `object`
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group

### distributionGroups_deleteForOrg
Deletes a single distribution group from an org with a given distribution group name


```js
appcenter_ms.distributionGroups_deleteForOrg({
  "org_name": "",
  "distribution_group_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group

#### Output
*Output schema unknown*

### distributionGroups_getForOrg
Returns a single distribution group in org for a given distribution group name


```js
appcenter_ms.distributionGroups_getForOrg({
  "org_name": "",
  "distribution_group_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group

#### Output
* output `object`
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group

### distributionGroups_patchForOrg
Update one given distribution group name in an org


```js
appcenter_ms.distributionGroups_patchForOrg({
  "org_name": "",
  "distribution_group_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group
  * distribution_group_for_org `object`
    * is_public `boolean`: Whether the distribution group is public
    * name `string`: The name of the distribution group

#### Output
* output `object`
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group

### distributionGroups_getApps
Get apps from a distribution group in an org


```js
appcenter_ms.distributionGroups_getApps({
  "org_name": "",
  "distribution_group_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group

#### Output
* output `array`
  * items
    * description `string`: The description of the app
    * display_name **required** `string`: The display name of the app
    * icon_source `string`: The string representation of the source of the app's icon
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * id **required** `string`: The unique ID (UUID) of the app
    * name **required** `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * owner **required** `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
    * origin `string`: The creation origin of this app
    * platform `string`: The platform of the app

### distributionGroups_addApps
Add apps to distribution group in an org


```js
appcenter_ms.distributionGroups_addApps({
  "org_name": "",
  "distribution_group_name": "",
  "apps": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group
  * apps **required** `object`
    * apps `array`: The list of apps to add to distribution group
      * items `object`
        * name **required** `string`: The name of the app to be added to the distribution group

#### Output
*Output schema unknown*

### distributionGroups_bulkDeleteApps
Delete apps from distribution group in an org


```js
appcenter_ms.distributionGroups_bulkDeleteApps({
  "org_name": "",
  "distribution_group_name": "",
  "apps": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group
  * apps **required** `object`
    * apps `array`: The list of apps to delete from the distribution group
      * items `object`
        * name **required** `string`: The name of the app to be deleted from the distribution group

#### Output
*Output schema unknown*

### distributionGroups_listUsersForOrg
Returns a list of member in the distribution group specified


```js
appcenter_ms.distributionGroups_listUsersForOrg({
  "org_name": "",
  "distribution_group_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group

#### Output
* output `array`
  * items `object`
    * avatar_url `string`: The avatar URL of the user
    * can_change_password `boolean`: User is required to send an old password in order to change the password.
    * display_name `string`: The full name of the user. Might for example be first and last name
    * email **required** `string`: The email address of the user
    * id `string`: The unique id (UUID) of the user
    * invite_pending `boolean`: Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
    * name `string`: The unique name that is used to identify the user.

### distributionGroups_addUsersForOrg
Accepts an array of user email addresses to get added to the specified group


```js
appcenter_ms.distributionGroups_addUsersForOrg({
  "org_name": "",
  "distribution_group_name": "",
  "member_emails": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group
  * member_emails **required** `object`
    * user_emails `array`: The list of emails of the users
      * items `string`

#### Output
* output `array`
  * items `object`
    * code `string`: The code of the result
    * invite_pending `boolean`: Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
    * message `string`: The message of the result
    * status **required** `integer`: The status code of the result
    * user_email `string`: The email of the user

### distributionGroups_bulkDeleteUsers
Delete testers from distribution group in an org


```js
appcenter_ms.distributionGroups_bulkDeleteUsers({
  "org_name": "",
  "distribution_group_name": "",
  "members": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group
  * members **required** `object`
    * user_emails `array`: The list of emails of the users
      * items `string`

#### Output
*Output schema unknown*

### distributionGroups_resendSharedInvite
Resend shared distribution group invite notification to previously invited testers


```js
appcenter_ms.distributionGroups_resendSharedInvite({
  "org_name": "",
  "distribution_group_name": "",
  "members": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * distribution_group_name **required** `string`: The name of the distribution group
  * members **required** `object`
    * user_emails `array`: The list of emails of the users
      * items `string`

#### Output
*Output schema unknown*

### distributionGroups_detailsForOrg
Returns a list of distribution groups with details for an organization


```js
appcenter_ms.distributionGroups_detailsForOrg({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * apps_limit `number`: The max number of apps to include in the response

#### Output
* output `array`
  * items
    * display_name `string`: The name of the distribution group
    * id **required** `string`: The unique ID of the distribution group
    * is_public **required** `boolean`: Whether the distribution group is public
    * name **required** `string`: The name of the distribution group used in URLs
    * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group
    * apps `array`: The apps associated with the distribution group
      * items
        * description `string`: The description of the app
        * display_name **required** `string`: The display name of the app
        * icon_source `string`: The string representation of the source of the app's icon
        * icon_url `string`: The string representation of the URL pointing to the app's icon
        * id **required** `string`: The unique ID (UUID) of the app
        * name **required** `string`: The name of the app used in URLs
        * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
        * owner **required** `object`: The information about the app's owner
          * avatar_url `string`: The avatar URL of the owner
          * display_name **required** `string`: The owner's display name
          * email `string`: The owner's email address
          * id **required** `string`: The unique id (UUID) of the owner
          * name **required** `string`: The unique name that used to identify the owner
          * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
        * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
        * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
        * azure_subscription `object`
          * is_billable `boolean`: If the subscription can be used for billing
          * is_billing `boolean`: If the subscription is used for billing
          * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
          * subscription_id **required** `string`: The azure subscription id
          * subscription_name **required** `string`: The name of the azure subscription
          * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
        * created_at `string`: The created date of this app
        * member_permissions `array`: The permissions of the calling user
          * items `string` (values: manager, developer, viewer, tester)
        * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
        * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
        * updated_at `string`: The last updated date of this app
    * total_apps_count `number`: The count of apps associated with this distribution group
    * total_users_count `number`: The count of users in the distribution group

### orgInvitations_delete
Removes a user's invitation to an organization


```js
appcenter_ms.orgInvitations_delete({
  "org_name": "",
  "user_email": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * user_email **required** `object`
    * user_email **required** `string`: The user's email address

#### Output
*Output schema unknown*

### orgInvitations_listPending
Gets the pending invitations for the organization


```js
appcenter_ms.orgInvitations_listPending({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
* output `array`
  * items `object`
    * email **required** `string`: The email address of the invited user
    * id **required** `string`: The unique ID (UUID) of the invitation
    * role **required** `string`: The role assigned to the invited user

### orgInvitations_create
Invites a new or existing user to an organization


```js
appcenter_ms.orgInvitations_create({
  "org_name": "",
  "user_email": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * user_email **required** `object`
    * role `string` (values: admin, collaborator, member): The user's role
    * user_email **required** `string`: The user's email address

#### Output
*Output schema unknown*

### orgInvitations_update
Allows the role of an invited user to be changed


```js
appcenter_ms.orgInvitations_update({
  "org_name": "",
  "email": "",
  "user_role": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * email **required** `string`: The email address of the user to send the password reset mail to.
  * user_role **required** `object`
    * role `string` (values: admin, collaborator, member): The user's role in the organizatiion

#### Output
*Output schema unknown*

### orgInvitations_sendNewInvitation
Cancels an existing organization invitation for the user and sends a new one


```js
appcenter_ms.orgInvitations_sendNewInvitation({
  "org_name": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * email **required** `string`: The email address of the user to send the password reset mail to.
  * role `object`
    * role `string` (values: admin, collaborator, member): The role of the user to be added

#### Output
*Output schema unknown*

### orgInvitations_
Removes a user's invitation to an organization


```js
appcenter_ms.orgInvitations_({
  "org_name": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * email **required** `string`: The email address of the user to send the password reset mail to.
  * empty_body `object`

#### Output
*Output schema unknown*

### teams_listAll
Returns the list of all teams in this org


```js
appcenter_ms.teams_listAll({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
* output `array`
  * items `object`
    * description `string`: The description of the team
    * display_name **required** `string`: The display name of the team
    * id **required** `string`: The internal unique id (UUID) of the team.
    * name **required** `string`: The name of the team

### teams_createTeam
Creates a team and returns it


```js
appcenter_ms.teams_createTeam({
  "org_name": "",
  "team": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team **required** `object`
    * description `string`: The description of the team
    * display_name **required** `string`: The display name of the team
    * name `string`: The name of the team

#### Output
* output `array`
  * items `object`
    * description `string`: The description of the team
    * display_name **required** `string`: The display name of the team
    * id **required** `string`: The internal unique id (UUID) of the team.
    * name **required** `string`: The name of the team

### teams_delete
Deletes a single team


```js
appcenter_ms.teams_delete({
  "org_name": "",
  "team_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name

#### Output
*Output schema unknown*

### teams_getTeam
Returns the details of a single team


```js
appcenter_ms.teams_getTeam({
  "org_name": "",
  "team_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name

#### Output
* output `object`
  * description `string`: The description of the team
  * display_name **required** `string`: The display name of the team
  * id **required** `string`: The internal unique id (UUID) of the team.
  * name **required** `string`: The name of the team

### teams_update
Updates a single team


```js
appcenter_ms.teams_update({
  "org_name": "",
  "team_name": "",
  "team": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name
  * team **required** `object`
    * display_name **required** `string`: The new display name of the team

#### Output
* output `object`
  * description `string`: The description of the team
  * display_name **required** `string`: The display name of the team
  * id **required** `string`: The internal unique id (UUID) of the team.
  * name **required** `string`: The name of the team

### teams_listApps
Returns the apps a team has access to


```js
appcenter_ms.teams_listApps({
  "org_name": "",
  "team_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name

#### Output
* output `array`
  * items
    * description `string`: The description of the app
    * display_name **required** `string`: The display name of the app
    * icon_source `string`: The string representation of the source of the app's icon
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * id **required** `string`: The unique ID (UUID) of the app
    * name **required** `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * owner **required** `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
    * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
    * azure_subscription `object`
      * is_billable `boolean`: If the subscription can be used for billing
      * is_billing `boolean`: If the subscription is used for billing
      * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
      * subscription_id **required** `string`: The azure subscription id
      * subscription_name **required** `string`: The name of the azure subscription
      * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
    * created_at `string`: The created date of this app
    * member_permissions `array`: The permissions of the calling user
      * items `string` (values: manager, developer, viewer, tester)
    * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
    * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
    * updated_at `string`: The last updated date of this app
    * team_permissions `array`: The permissions the team has for the app
      * items `string` (values: manager, developer, viewer)

### teams_addApp
Adds an app to a team


```js
appcenter_ms.teams_addApp({
  "org_name": "",
  "team_name": "",
  "app": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name
  * app **required** `object`
    * name **required** `string`: The name of the app to be added to the distribution group

#### Output
* output
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app
  * team_permissions `array`: The permissions the team has for the app
    * items `string` (values: manager, developer, viewer)

### teams_removeApp
Removes an app from a team


```js
appcenter_ms.teams_removeApp({
  "org_name": "",
  "team_name": "",
  "app_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name
  * app_name **required** `string`: The name of the application

#### Output
*Output schema unknown*

### teams_updatePermissions
Updates the permissions the team has to the app


```js
appcenter_ms.teams_updatePermissions({
  "org_name": "",
  "team_name": "",
  "app_name": "",
  "team": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name
  * app_name **required** `string`: The name of the application
  * team **required** `object`
    * permissions **required** `array`: The permissions all members of the team have on the app
      * items `string` (values: manager, developer, viewer)

#### Output
* output
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app
  * team_permissions `array`: The permissions the team has for the app
    * items `string` (values: manager, developer, viewer)

### teams_getUsers
Returns the users of a team which is owned by an organization


```js
appcenter_ms.teams_getUsers({
  "org_name": "",
  "team_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name

#### Output
* output `object`
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * role **required** `string` (values: maintainer, collaborator): The role of the user has within the team

### teams_addUser
Adds a new user to a team that is owned by an organization


```js
appcenter_ms.teams_addUser({
  "org_name": "",
  "team_name": "",
  "user_email": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name
  * user_email **required** `object`
    * user_email **required** `string`: The user's email address

#### Output
* output `object`
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * role **required** `string` (values: maintainer, collaborator): The role of the user has within the team

### teams_removeUser
Removes a user from a team that is owned by an organization


```js
appcenter_ms.teams_removeUser({
  "org_name": "",
  "team_name": "",
  "user_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * team_name **required** `string`: The team's name
  * user_name **required** `string`: The slug name of the user

#### Output
*Output schema unknown*

### distributionGroups_listAllTestersForOrg
Returns a unique list of users including the whole organization members plus testers in any shared group of that org


```js
appcenter_ms.distributionGroups_listAllTestersForOrg({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
* output `array`
  * items `object`
    * display_name `string`: The full name of the tester. Might for example be first and last name
    * email **required** `string`: The email address of the tester
    * name **required** `string`: The unique name that is used to identify the tester.

### users_listForOrg
Returns a list of users that belong to an organization


```js
appcenter_ms.users_listForOrg({
  "org_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name

#### Output
* output `array`
  * items `object`
    * display_name **required** `string`: The full name of the user. Might for example be first and last name
    * email **required** `string`: The email address of the user
    * joined_at **required** `string`: The date when the user joined the organization
    * name **required** `string`: The unique name that is used to identify the user.
    * role **required** `string`: The role the user has within the organization

### users_removeFromOrg
Removes a user from an organization.


```js
appcenter_ms.users_removeFromOrg({
  "org_name": "",
  "user_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * user_name **required** `string`: The slug name of the user

#### Output
*Output schema unknown*

### users_getForOrg
Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission


```js
appcenter_ms.users_getForOrg({
  "org_name": "",
  "user_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * user_name **required** `string`: The slug name of the user

#### Output
* output `object`
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * joined_at **required** `string`: The date when the user joined the organization
  * name **required** `string`: The unique name that is used to identify the user.
  * role **required** `string`: The role the user has within the organization

### users_updateOrgRole
Updates the given organization user


```js
appcenter_ms.users_updateOrgRole({
  "org_name": "",
  "user_name": "",
  "organization_user": null
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * user_name **required** `string`: The slug name of the user
  * organization_user **required** `object`
    * role `string` (values: admin, collaborator, member): The user's role in the organizatiion

#### Output
* output `object`
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * joined_at **required** `string`: The date when the user joined the organization
  * name **required** `string`: The unique name that is used to identify the user.
  * role **required** `string`: The role the user has within the organization

### apps_getForOrgUser
Get a user apps information from an organization by name


```js
appcenter_ms.apps_getForOrgUser({
  "org_name": "",
  "user_name": ""
}, context)
```

#### Input
* input `object`
  * org_name **required** `string`: The organization's name
  * user_name **required** `string`: The slug name of the user

#### Output
* output `array`
  * items
    * description `string`: The description of the app
    * display_name **required** `string`: The display name of the app
    * icon_source `string`: The string representation of the source of the app's icon
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * id **required** `string`: The unique ID (UUID) of the app
    * name **required** `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * owner **required** `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
    * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
    * azure_subscription `object`
      * is_billable `boolean`: If the subscription can be used for billing
      * is_billing `boolean`: If the subscription is used for billing
      * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
      * subscription_id **required** `string`: The azure subscription id
      * subscription_name **required** `string`: The name of the azure subscription
      * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
    * created_at `string`: The created date of this app
    * member_permissions `array`: The permissions of the calling user
      * items `string` (values: manager, developer, viewer, tester)
    * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
    * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
    * updated_at `string`: The last updated date of this app

### releases_getIosManifest
Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.


```js
appcenter_ms.releases_getIosManifest({
  "app_id": "",
  "release_id": 0,
  "token": ""
}, context)
```

#### Input
* input `object`
  * app_id **required** `string`: The ID of the application
  * release_id **required** `integer`: The release_id
  * token **required** `string`: A hash that authorizes the download if it matches the release info.

#### Output
*Output schema unknown*

### distibutionReleases_installAnalytics
Notify download(s) for the provided distribution release(s).


```js
appcenter_ms.distibutionReleases_installAnalytics({
  "owner_name": "",
  "app_name": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * owner_name **required** `string`: The name of the app owner
  * app_name **required** `string`: The name of the app
  * body **required** `object`
    * releases `array`
      * items `object`
        * distribution_group_id **required** `string`: distribution group id
        * release_id **required** `integer`: release id
        * user_id **required** `string`: user id

#### Output
*Output schema unknown*

### codePushAcquisition_updateDeployStatus
Report Deployment status metric


```js
appcenter_ms.codePushAcquisition_updateDeployStatus({
  "release_metadata": null
}, context)
```

#### Input
* input `object`
  * release_metadata **required** `object`
    * app_version `string`
    * client_unique_id `string`
    * deployment_key **required** `string`
    * label `string`
    * previous_deployment_key `string`
    * previous_label_or_app_version `string`
    * status `string`

#### Output
*Output schema unknown*

### codePushAcquisition_updateDownloadStatus
Report download of specified release


```js
appcenter_ms.codePushAcquisition_updateDownloadStatus({
  "release_metadata": null
}, context)
```

#### Input
* input `object`
  * release_metadata **required** `object`
    * app_version `string`
    * client_unique_id `string`
    * deployment_key **required** `string`
    * label `string`
    * previous_deployment_key `string`
    * previous_label_or_app_version `string`
    * status `string`

#### Output
*Output schema unknown*

### codePushAcquisition_getAcquisitionStatus
Returns the acquisition service status to the caller


```js
appcenter_ms.codePushAcquisition_getAcquisitionStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * code **required** `string`: The code indicating the status
  * message **required** `string`: The message indicating the status

### codePushAcquisition_updateCheck
Check for updates


```js
appcenter_ms.codePushAcquisition_updateCheck({
  "deployment_key": "",
  "app_version": ""
}, context)
```

#### Input
* input `object`
  * deployment_key **required** `string`
  * app_version **required** `string`
  * package_hash `string`
  * label `string`
  * client_unique_id `string`
  * is_companion `boolean`
  * previous_label_or_app_version `string`
  * previous_deployment_key `string`

#### Output
* output `object`
  * update_info **required**
    * description `string`
    * is_disabled `boolean`
    * is_mandatory `boolean`
    * rollout `integer`
    * target_binary_range `string`
    * download_url `string`
    * is_available `boolean`
    * label `string`
    * package_hash `string`
    * package_size `number`
    * should_run_binary_version `boolean`
    * update_app_version `boolean`

### builds_webhook
Public webhook sink


```js
appcenter_ms.builds_webhook({}, context)
```

#### Input
* input `object`
  * payload `object`

#### Output
*Output schema unknown*

### releases_getLatestByPublicDistributionGroup
Get a release with 'latest' for the given public group.


```js
appcenter_ms.releases_getLatestByPublicDistributionGroup({
  "app_secret": "",
  "distribution_group_id": ""
}, context)
```

#### Input
* input `object`
  * app_secret **required** `string`: The secret of the target application
  * distribution_group_id **required** `string`: the id for destination

#### Output
* output `object`: Details of an uploaded release
  * android_min_api_level `string`: The release's minimum required Android API level.
  * app_display_name **required** `string`: The app's display name.
  * app_icon_url **required** `string`: A URL to the app's icon.
  * app_name **required** `string`: The app's name (extracted from the uploaded release).
  * app_os `string`: The app's OS.
  * build `object`: Contains metadata about the build that produced the release being uploaded
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * bundle_identifier `string`: The identifier of the apps bundle.
  * can_resign `boolean`: In calls that allow passing `udid` in the query string, this value determines if a release can be re-signed. When true, after a re-sign, the tester will be able to install the release from his registered devices. Will not be returned for non-iOS platforms.
  * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
  * destinations `array`: A list of distribution groups or stores.
    * items
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
      * is_latest `boolean`: Is the containing release the latest one in this distribution group.
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
      * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * destination_type `string` (values: group, store, tester): Destination can be either store or group.
      * display_name `string`: Display name for the group or tester
  * device_family `string`: The release's device family.
  * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
  * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
  * download_url `string`: The URL that hosts the binary for this release.
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * fingerprint `string`: MD5 checksum of the release binary.
  * id **required** `integer`: ID identifying this unique release.
  * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * is_external_build `boolean`: This value determines if a release is external or not.
  * is_provisioning_profile_syncing `boolean`: A flag that determines whether the release's provisioning profile is still extracted or not.
  * is_udid_provisioned `boolean`: In calls that allow passing `udid` in the query string, this value will hold the provisioning status of that UDID in this release. Will be ignored for non-iOS platforms.
  * min_os `string`: The release's minimum required operating system.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * package_hashes `array`: Hashes for the packages.
    * items `string`
  * provisioning_profile_expiry_date `string`: expiration date of provisioning profile in UTC format.
  * provisioning_profile_name `string`: The release's provisioning profile name.
  * provisioning_profile_type `string` (values: adhoc, enterprise, other): The type of the provisioning profile for the requested app version.
  * release_notes `string`: The release's release notes.
  * short_version **required** `string`: The release's short version.<br>
  * size `integer`: The release's size in bytes.
  * status `string`: Status of the release.
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>

### releases_getLatestPublicRelease
Get the latest public release for the given app.


```js
appcenter_ms.releases_getLatestPublicRelease({
  "app_secret": ""
}, context)
```

#### Input
* input `object`
  * app_secret **required** `string`: The secret of the target application

#### Output
* output `object`: Details of an uploaded release
  * android_min_api_level `string`: The release's minimum required Android API level.
  * app_display_name **required** `string`: The app's display name.
  * app_icon_url **required** `string`: A URL to the app's icon.
  * app_name **required** `string`: The app's name (extracted from the uploaded release).
  * app_os `string`: The app's OS.
  * build `object`: Contains metadata about the build that produced the release being uploaded
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * bundle_identifier `string`: The identifier of the apps bundle.
  * can_resign `boolean`: In calls that allow passing `udid` in the query string, this value determines if a release can be re-signed. When true, after a re-sign, the tester will be able to install the release from his registered devices. Will not be returned for non-iOS platforms.
  * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
  * destinations `array`: A list of distribution groups or stores.
    * items
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
      * is_latest `boolean`: Is the containing release the latest one in this distribution group.
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
      * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * destination_type `string` (values: group, store, tester): Destination can be either store or group.
      * display_name `string`: Display name for the group or tester
  * device_family `string`: The release's device family.
  * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
  * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
  * download_url `string`: The URL that hosts the binary for this release.
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * fingerprint `string`: MD5 checksum of the release binary.
  * id **required** `integer`: ID identifying this unique release.
  * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * is_external_build `boolean`: This value determines if a release is external or not.
  * is_provisioning_profile_syncing `boolean`: A flag that determines whether the release's provisioning profile is still extracted or not.
  * is_udid_provisioned `boolean`: In calls that allow passing `udid` in the query string, this value will hold the provisioning status of that UDID in this release. Will be ignored for non-iOS platforms.
  * min_os `string`: The release's minimum required operating system.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * package_hashes `array`: Hashes for the packages.
    * items `string`
  * provisioning_profile_expiry_date `string`: expiration date of provisioning profile in UTC format.
  * provisioning_profile_name `string`: The release's provisioning profile name.
  * provisioning_profile_type `string` (values: adhoc, enterprise, other): The type of the provisioning profile for the requested app version.
  * release_notes `string`: The release's release notes.
  * short_version **required** `string`: The release's short version.<br>
  * size `integer`: The release's size in bytes.
  * status `string`: Status of the release.
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>

### releases_getPublicGroupsForReleaseByHash
Get all public distribution groups that a given release has been distributed to


```js
appcenter_ms.releases_getPublicGroupsForReleaseByHash({
  "app_secret": "",
  "release_hash": ""
}, context)
```

#### Input
* input `object`
  * app_secret **required** `string`: The secret of the target application
  * release_hash **required** `string`: The hash of the release

#### Output
* output `array`
  * items `object`
    * id **required** `string`: The id of the distribution group

### releases_getSparkleFeed
Gets the sparkle feed of the releases that are distributed to all the public distribution groups.


```js
appcenter_ms.releases_getSparkleFeed({
  "app_secret": ""
}, context)
```

#### Input
* input `object`
  * app_secret **required** `string`: The secret of the application.

#### Output
*Output schema unknown*

### releases_getLatestPrivateRelease
Get the latest release distributed to a private group the given user is a member of for the given app.


```js
appcenter_ms.releases_getLatestPrivateRelease({
  "app_secret": ""
}, context)
```

#### Input
* input `object`
  * app_secret **required** `string`: The secret of the target application
  * udid `string`: When passing `udid` in the query string, a provisioning check for the given device ID will be done. Will be ignored for non-iOS platforms.

#### Output
* output `object`: Details of an uploaded release
  * android_min_api_level `string`: The release's minimum required Android API level.
  * app_display_name **required** `string`: The app's display name.
  * app_icon_url **required** `string`: A URL to the app's icon.
  * app_name **required** `string`: The app's name (extracted from the uploaded release).
  * app_os `string`: The app's OS.
  * build `object`: Contains metadata about the build that produced the release being uploaded
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * bundle_identifier `string`: The identifier of the apps bundle.
  * can_resign `boolean`: In calls that allow passing `udid` in the query string, this value determines if a release can be re-signed. When true, after a re-sign, the tester will be able to install the release from his registered devices. Will not be returned for non-iOS platforms.
  * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
  * destinations `array`: A list of distribution groups or stores.
    * items
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
      * is_latest `boolean`: Is the containing release the latest one in this distribution group.
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
      * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * destination_type `string` (values: group, store, tester): Destination can be either store or group.
      * display_name `string`: Display name for the group or tester
  * device_family `string`: The release's device family.
  * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
  * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
  * download_url `string`: The URL that hosts the binary for this release.
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * fingerprint `string`: MD5 checksum of the release binary.
  * id **required** `integer`: ID identifying this unique release.
  * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * is_external_build `boolean`: This value determines if a release is external or not.
  * is_provisioning_profile_syncing `boolean`: A flag that determines whether the release's provisioning profile is still extracted or not.
  * is_udid_provisioned `boolean`: In calls that allow passing `udid` in the query string, this value will hold the provisioning status of that UDID in this release. Will be ignored for non-iOS platforms.
  * min_os `string`: The release's minimum required operating system.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * package_hashes `array`: Hashes for the packages.
    * items `string`
  * provisioning_profile_expiry_date `string`: expiration date of provisioning profile in UTC format.
  * provisioning_profile_name `string`: The release's provisioning profile name.
  * provisioning_profile_type `string` (values: adhoc, enterprise, other): The type of the provisioning profile for the requested app version.
  * release_notes `string`: The release's release notes.
  * short_version **required** `string`: The release's short version.<br>
  * size `integer`: The release's size in bytes.
  * status `string`: Status of the release.
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>

### releases_getLatestByHash
If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.


```js
appcenter_ms.releases_getLatestByHash({
  "app_secret": "",
  "release_hash": ""
}, context)
```

#### Input
* input `object`
  * app_secret **required** `string`: The secret of the target application
  * release_hash **required** `string`: The hash of the release or 'latest' to get the latest release from all the distribution groups assigned to the current user.
  * udid `string`: When passing `udid` in the query string, a provisioning check for the given device ID will be done. Will be ignored for non-iOS platforms.

#### Output
* output `object`: Details of an uploaded release
  * android_min_api_level `string`: The release's minimum required Android API level.
  * app_display_name **required** `string`: The app's display name.
  * app_icon_url **required** `string`: A URL to the app's icon.
  * app_name **required** `string`: The app's name (extracted from the uploaded release).
  * app_os `string`: The app's OS.
  * build `object`: Contains metadata about the build that produced the release being uploaded
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * bundle_identifier `string`: The identifier of the apps bundle.
  * can_resign `boolean`: In calls that allow passing `udid` in the query string, this value determines if a release can be re-signed. When true, after a re-sign, the tester will be able to install the release from his registered devices. Will not be returned for non-iOS platforms.
  * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
  * destinations `array`: A list of distribution groups or stores.
    * items
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
      * is_latest `boolean`: Is the containing release the latest one in this distribution group.
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
      * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * destination_type `string` (values: group, store, tester): Destination can be either store or group.
      * display_name `string`: Display name for the group or tester
  * device_family `string`: The release's device family.
  * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
  * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
  * download_url `string`: The URL that hosts the binary for this release.
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * fingerprint `string`: MD5 checksum of the release binary.
  * id **required** `integer`: ID identifying this unique release.
  * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * is_external_build `boolean`: This value determines if a release is external or not.
  * is_provisioning_profile_syncing `boolean`: A flag that determines whether the release's provisioning profile is still extracted or not.
  * is_udid_provisioned `boolean`: In calls that allow passing `udid` in the query string, this value will hold the provisioning status of that UDID in this release. Will be ignored for non-iOS platforms.
  * min_os `string`: The release's minimum required operating system.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * package_hashes `array`: Hashes for the packages.
    * items `string`
  * provisioning_profile_expiry_date `string`: expiration date of provisioning profile in UTC format.
  * provisioning_profile_name `string`: The release's provisioning profile name.
  * provisioning_profile_type `string` (values: adhoc, enterprise, other): The type of the provisioning profile for the requested app version.
  * release_notes `string`: The release's release notes.
  * short_version **required** `string`: The release's short version.<br>
  * size `integer`: The release's size in bytes.
  * status `string`: Status of the release.
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>

### releases_listTesterApps
Return a list of applications that the user has tester permission to with the latest release for each.


```js
appcenter_ms.releases_listTesterApps(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * description `string`: The description of the app
    * display_name `string`: The app's display name.
    * icon_url `string`: A URL to the app's icon.
    * id `string`: The unique ID (UUID) of the app
    * name `string`: The app's name.
    * os `string`: The app's os.
    * owner `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name `string`: The owner's display name
      * email `string`: The owner's email address
      * id `string`: The unique id (UUID) of the owner
      * name `string`: The unique name that used to identify the owner
      * type `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release
      * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
      * id **required** `integer`: ID identifying this unique release.
      * is_external_build `boolean`: This value determines if a release is external or not.
      * mandatory_update **required** `boolean`: A boolean which determines whether the release is a mandatory update or not.
      * origin `string` (values: hockeyapp, appcenter): The release's origin
      * short_version **required** `string`: The release's short version.<br>
      * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
      * version **required** `string`: The release's version.<br>
      * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
      * release_notes `string`: The release's release notes.
      * size **required** `integer`: The release's size in bytes.

### users_get
Returns the user profile data


```js
appcenter_ms.users_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * avatar_url `string`: The avatar URL of the user
  * can_change_password `boolean`: User is required to send an old password in order to change the password.
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * id **required** `string`: The unique id (UUID) of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
  * permissions `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer, tester)

### users_update
Updates the user profile and returns the updated user data


```js
appcenter_ms.users_update({
  "user": null
}, context)
```

#### Input
* input `object`
  * user **required** `object`
    * display_name `string`: The full name of the user. Might for example be first and last name

#### Output
* output `object`
  * avatar_url `string`: The avatar URL of the user
  * can_change_password `boolean`: User is required to send an old password in order to change the password.
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * id **required** `string`: The unique id (UUID) of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
  * permissions `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer, tester)

### devices_userDevicesList
Returns all devices associated with the given user.


```js
appcenter_ms.devices_userDevicesList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`: The information for a single iOS device
    * device_name **required** `string`: The device description, in the format "iPhone 7 Plus (A1784)"
    * full_device_name `string`: A combination of the device model name and the owner name.
    * imei `string`: The device's International Mobile Equipment Identity number. Always empty or undefined at present.
    * model **required** `string`: The model identifier of the device, in the format iDeviceM,N
    * os_build **required** `string`: The last known OS version running on the device
    * os_version **required** `string`: The last known OS version running on the device
    * owner_id `string`: The user ID of the device owner.
    * registered_at `string`: Timestamp of when the device was registered in ISO format.
    * serial `string`: The device's serial number. Always empty or undefined at present.
    * status **required** `string`: The provisioning status of the device.
    * udid **required** `string`: The Unique Device IDentifier of the device

### devices_removeUserDevice
Removes an existing device from a user


```js
appcenter_ms.devices_removeUserDevice({
  "device_udid": ""
}, context)
```

#### Input
* input `object`
  * device_udid **required** `string`: The UDID of the device

#### Output
*Output schema unknown*

### devices_deviceDetails
Returns the device details.


```js
appcenter_ms.devices_deviceDetails({
  "device_udid": ""
}, context)
```

#### Input
* input `object`
  * device_udid **required** `string`: The UDID of the device

#### Output
* output `object`: The information for a single iOS device
  * device_name **required** `string`: The device description, in the format "iPhone 7 Plus (A1784)"
  * full_device_name `string`: A combination of the device model name and the owner name.
  * imei `string`: The device's International Mobile Equipment Identity number. Always empty or undefined at present.
  * model **required** `string`: The model identifier of the device, in the format iDeviceM,N
  * os_build **required** `string`: The last known OS version running on the device
  * os_version **required** `string`: The last known OS version running on the device
  * owner_id `string`: The user ID of the device owner.
  * registered_at `string`: Timestamp of when the device was registered in ISO format.
  * serial `string`: The device's serial number. Always empty or undefined at present.
  * status **required** `string`: The provisioning status of the device.
  * udid **required** `string`: The Unique Device IDentifier of the device

### DataSubjectRight_DeleteRequest



```js
appcenter_ms.DataSubjectRight_DeleteRequest(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * createdAt **required** `string`: ISO 8601 format timestamp of when request was created.
  * token **required** `string`: Unique request identifier

### DataSubjectRight_DeleteStatusRequest



```js
appcenter_ms.DataSubjectRight_DeleteStatusRequest({
  "token": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Unique request ID (GUID)
  * email **required** `string`: Email used for delete with x-authz-bypass headers

#### Output
* output `object`
  * message **required** `string`: explanation message of the status
  * sasUrl `string`: Azure Storage shared access signature (SAS) URL for exported user data.
  * sasUrlExpired `boolean`: Whether Azure Storage shared access signature (SAS) URL has expired or not.
  * status **required** `string` (values: None, Created, Queued, InProgress, Completed, Failed): Status of data subject right request

### DataSubjectRight_CancelDeleteRequest



```js
appcenter_ms.DataSubjectRight_CancelDeleteRequest({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Unique request ID (GUID)
  * email `object`
    * email **required** `string`: Email used for cancel delete with x-authz-bypass headers

#### Output
* output `object`
  * createdAt **required** `string`: ISO 8601 format timestamp of when request was created.
  * token **required** `string`: Unique request identifier

### DataSubjectRight_ExportRequest



```js
appcenter_ms.DataSubjectRight_ExportRequest(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * createdAt **required** `string`: ISO 8601 format timestamp of when request was created.
  * token **required** `string`: Unique request identifier

### DataSubjectRight_ExportStatusRequest



```js
appcenter_ms.DataSubjectRight_ExportStatusRequest({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Unique request ID (GUID)

#### Output
* output `object`
  * message **required** `string`: explanation message of the status
  * sasUrl `string`: Azure Storage shared access signature (SAS) URL for exported user data.
  * sasUrlExpired `boolean`: Whether Azure Storage shared access signature (SAS) URL has expired or not.
  * status **required** `string` (values: None, Created, Queued, InProgress, Completed, Failed): Status of data subject right request

### DataSubjectRight_CancelExportRequest



```js
appcenter_ms.DataSubjectRight_CancelExportRequest({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Unique request ID (GUID)

#### Output
* output `object`
  * createdAt **required** `string`: ISO 8601 format timestamp of when request was created.
  * token **required** `string`: Unique request identifier

### sharedconnection_Connections
Gets all service connections of the service type for GDPR export.


```js
appcenter_ms.sharedconnection_Connections(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`: SharedConnectionResponse
    * credentialType **required** `string` (values: credentials, certificate): the type of the credential
    * displayName `string`: display name of shared connection
    * id **required** `string`: id of the shared connection
    * is2FA `boolean`: if the account is a 2FA account or not
    * isValid `boolean`: whether the credentials are valid or not
    * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### appInvitations_accept
Accepts a pending invitation for the specified user


```js
appcenter_ms.appInvitations_accept({
  "invitation_token": ""
}, context)
```

#### Input
* input `object`
  * invitation_token **required** `string`: The app invitation token that was sent to the user
  * empty_body `object`

#### Output
*Output schema unknown*

### appInvitations_reject
Rejects a pending invitation for the specified user


```js
appcenter_ms.appInvitations_reject({
  "invitation_token": ""
}, context)
```

#### Input
* input `object`
  * invitation_token **required** `string`: The app invitation token that was sent to the user
  * empty_body `object`

#### Output
*Output schema unknown*

### distributionGroupInvitations_acceptAll
Accepts all pending invitations to distribution groups for the specified user


```js
appcenter_ms.distributionGroupInvitations_acceptAll({}, context)
```

#### Input
* input `object`
  * empty_body `object`

#### Output
*Output schema unknown*

### orgInvitations_accept
Accepts a pending organization invitation for the specified user


```js
appcenter_ms.orgInvitations_accept({
  "invitation_token": ""
}, context)
```

#### Input
* input `object`
  * invitation_token **required** `string`: The app invitation token that was sent to the user
  * empty_body `object`

#### Output
*Output schema unknown*

### orgInvitations_reject
Rejects a pending organization invitation


```js
appcenter_ms.orgInvitations_reject({
  "invitation_token": ""
}, context)
```

#### Input
* input `object`
  * invitation_token **required** `string`: The app invitation token that was sent to the user
  * empty_body `object`

#### Output
*Output schema unknown*

### Users_getUserMetadata



```js
appcenter_ms.Users_getUserMetadata(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * metadata `object`
  * userId `string`

### notifications_getUserEmailSettings
Get Default email notification settings for the user


```js
appcenter_ms.notifications_getUserEmailSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`: Alerting Default Email Settings of the user
  * request_id **required** `string`: Unique request identifier for tracking
  * eTag `string`: The ETag of the entity
  * enabled **required** `boolean`: Allows to forcefully disable emails on app or user level
  * settings **required** `array`: The settings the user has for the app
    * items `object`: Event Setting
      * default_value `string` (values: Disabled, Individual, Daily, DailyAndIndividual): Default frequency of event
      * event_type **required** `string` (values: crash_newCrashGroupCreated): Event Name
      * value **required** `string` (values: Disabled, Individual, Daily, DailyAndIndividual, Default): Frequency of event
  * userId `string`: The unique id (UUID) of the user

### devices_registerUserForDevice
Registers a user for an existing device


```js
appcenter_ms.devices_registerUserForDevice({
  "user_id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user
  * body **required** `object`: The information for a single iOS device
    * imei `string`: The device's International Mobile Equipment Identity number. Always empty or undefined at present.
    * model **required** `string`: The model identifier of the device, in the format iDeviceM,N
    * os_build `string`: The build number of the last known OS version running on the device
    * os_version `string`: The last known OS version running on the device
    * owner_id `string`: The user ID of the device owner.
    * serial `string`: The device's serial number. Always empty or undefined at present.
    * udid **required** `string`: The Unique Device IDentifier of the device

#### Output
* output `object`: The information for a single iOS device
  * device_name **required** `string`: The device description, in the format "iPhone 7 Plus (A1784)"
  * full_device_name `string`: A combination of the device model name and the owner name.
  * imei `string`: The device's International Mobile Equipment Identity number. Always empty or undefined at present.
  * model **required** `string`: The model identifier of the device, in the format iDeviceM,N
  * os_build **required** `string`: The last known OS version running on the device
  * os_version **required** `string`: The last known OS version running on the device
  * owner_id `string`: The user ID of the device owner.
  * registered_at `string`: Timestamp of when the device was registered in ISO format.
  * serial `string`: The device's serial number. Always empty or undefined at present.
  * status **required** `string`: The provisioning status of the device.
  * udid **required** `string`: The Unique Device IDentifier of the device



## Definitions

### AADGroup
* AADGroup `object`
  * aad_group_id **required** `string`: The id of the aad group
  * display_name **required** `string`: The display name of the aad group
  * tenant_id **required** `string`: The id of the aad tenant

### AADTenantAddRequest
* AADTenantAddRequest `object`
  * aad_tenant_id **required** `string`: The AAD tenant id
  * display_name **required** `string`: The name of the AAD Tenant
  * user_id **required** `string`: The user wanting to add this tenant to the organization, must be an admin of the organization

### AADTenantResponse
* AADTenantResponse `object`
  * aad_tenant_id **required** `string`: The AAD tenant id
  * display_name **required** `string`: The name of the AAD Tenant

### AADUser
* AADUser `object`: an AAD user's id and tenant id
  * object_id **required** `string`: the aad user's id
  * tenant_id **required** `string`: the aad user's tenant id

### AccessKey
* AccessKey `object`
  * createdBy `string`: Account name of creator.
  * createdTime `number`: Created time of access key
  * description `string`: Description of access key
  * expires `number`: Time of expiry of access key
  * friendlyName `string`: Friendly name of access key
  * id `string`: Id of accessKey
  * isSession `boolean`: Legacy property which indicate if accessKey was created from session
  * name `string`: Key of access key

### AccessKeyListResponse
* AccessKeyListResponse `object`
  * accessKeys `array`: Array containing the list of existing AccessKeys
    * items `object`
      * createdBy `string`: Account name of creator.
      * createdTime `number`: Created time of access key
      * description `string`: Description of access key
      * expires `number`: Time of expiry of access key
      * friendlyName `string`: Friendly name of access key
      * id `string`: Id of accessKey
      * isSession `boolean`: Legacy property which indicate if accessKey was created from session
      * name `string`: Key of access key

### AccountResponse
* AccountResponse `object`
  * display_name **required** `string`: The display name of the account
  * email `string`: The account's email. For org that value might be empty.
  * id **required** `string`: The internal unique id (UUID) of the account.
  * name **required** `string`: The slug name of the account
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this account
  * type **required** `string` (values: user, org): The type of this account

### AcquisitionStatusSuccessResponse
* AcquisitionStatusSuccessResponse `object`
  * code **required** `string`: The code indicating the status
  * message **required** `string`: The message indicating the status

### ActiveCrashingAppDetails
* ActiveCrashingAppDetails `object`
  * appsWithCrashes `array`: details of the apps with crashes
    * items `object`
      * appId `string`: application identifier
      * appVersion `string`: application version
      * crashGroupId `string`: crash group identifier
  * nextLink `string`

### ActiveDeviceCounts
* ActiveDeviceCounts `object`
  * daily `array`: The active device count for each interval.
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * monthly `array`: The active device count for each interval with a month's retention.
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * weekly `array`: The active device count for each interval with a week's retention.
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.

### AddAADGroupResponse
* AddAADGroupResponse `object`
  * id `string`: The unique ID (UUID) of the aad group

### AddAppTesterRequest
* AddAppTesterRequest `object`
  * release_id **required** `integer`: The ID of the release the user was added to
  * user_id **required** `string`: The user ID of the tester that needs to be added

### AddAppTesterResponse
* AddAppTesterResponse `object`
  * release_id **required** `integer`: The ID of the release the user was added to
  * user_id **required** `string`: The user ID of the tester that needs to be added

### AddOrganizationAdminRequest
* AddOrganizationAdminRequest `object`
  * user_id **required** `string`: The internal unique id (UUID) of the account.

### AddUserAsRoleRequest
* AddUserAsRoleRequest `object`
  * role `string` (values: admin, collaborator, member): The role of the user to be added

### AdministeredOrgsResponse
* AdministeredOrgsResponse `object`
  * organizations **required** `object`
    * avatar_url `string`: The URL to a user-uploaded Avatar image
    * created_at **required** `string`: The creation date of this organization
    * display_name **required** `string`: The display name of the organization
    * id **required** `string`: The internal unique id (UUID) of the organization.
    * name **required** `string`: The slug name of the organization
    * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
    * updated_at **required** `string`: The date the organization was last updated at

### AgentQueueResponse
* AgentQueueResponse `object`: Agent queue
  * id `integer`
  * name `string`

### AgentQueuesResponse
* AgentQueuesResponse `array`: A list of agent queues
  * items `object`: Agent queue
    * id `integer`
    * name `string`

### AggregatedBillingInformation
* AggregatedBillingInformation `object`: Aggregated Billing Information for a user or an organization
  * azureSubscriptionId `string`: Unique identifier for the Azure subscription used for billing
  * azureSubscriptionState `string` (values: Enabled, Disabled, NotSet): State of the Azure subscription used for billing
  * billingPlans `object`: Billing Plans section in the Billing Information
    * buildService `object`: Billing Plans for a single service
      * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
      * currentBillingPeriod `object`: Billing plans for a given period
        * byAccount `object`: Selection of a billing plan
          * count `integer`: Number of instances of the billing plan.
          * plan `object`: Billing Plan
        * endTime `string`: Exclusive end of the period.
        * startTime `string`: Inclusive start of the period
      * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
    * testService `object`: Billing Plans for a single service
      * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
      * currentBillingPeriod `object`: Billing plans for a given period
        * byAccount `object`: Selection of a billing plan
          * count `integer`: Number of instances of the billing plan.
          * plan `object`: Billing Plan
        * endTime `string`: Exclusive end of the period.
        * startTime `string`: Inclusive start of the period
      * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
  * id `string`: ID of the user or organization
  * timestamp `string`: The ISO 8601 datetime of last modification
  * usage `object`: Usage section in the Billing Information
    * buildService `object`: Resource usage for a single Mobile Center service
      * currentUsagePeriod `object`: Usage for a single period
        * byAccount `object`: A collection of named numeric values
        * byApp `object`: A collection of  named numeric values grouped by app
        * endTime `string`: Exclusive end time of the usage period.
        * startTime `string`: Inclusive start time of the usage period
    * testService `object`: Resource usage for a single Mobile Center service
      * currentUsagePeriod `object`: Usage for a single period
        * byAccount `object`: A collection of named numeric values
        * byApp `object`: A collection of  named numeric values grouped by app
        * endTime `string`: Exclusive end time of the usage period.
        * startTime `string`: Inclusive start time of the usage period
  * version `string`: Version of the Billing Information schema

### AlertBugTrackerRepo
* AlertBugTrackerRepo `object`: Repostiory object
  * description `string`
  * id **required** `string`
  * name **required** `string`
  * owner `object`: Repository owner object
    * id `string`
    * login `string`
    * name `string`
  * private `boolean`
  * url **required** `string`

### AlertBugTrackerRepoOwner
* AlertBugTrackerRepoOwner `object`: Repository owner object
  * id `string`
  * login `string`
  * name `string`

### AlertBugTrackerReposResult
* AlertBugTrackerReposResult `object`: List of bug tracker repositories
  * repo_type `string` (values: github, vsts, jira)
  * repositories **required** `array`
    * items `object`: Repostiory object
      * description `string`
      * id **required** `string`
      * name **required** `string`
      * owner `object`: Repository owner object
        * id `string`
        * login `string`
        * name `string`
      * private `boolean`
      * url **required** `string`

### AlertCrashGroupStateChange
* AlertCrashGroupStateChange `object`: AlertCrashGroup patching parameter
  * state `string` (values: Open, Closed, Ignored)

### AlertEmailSettings
* AlertEmailSettings `object`: Alerting Email Settings
  * settings **required** `array`: The settings the user has for the app
    * items `object`: Event Setting
      * default_value `string` (values: Disabled, Individual, Daily, DailyAndIndividual): Default frequency of event
      * event_type **required** `string` (values: crash_newCrashGroupCreated): Event Name
      * value **required** `string` (values: Disabled, Individual, Daily, DailyAndIndividual, Default): Frequency of event

### AlertOperationResult
* AlertOperationResult `object`: Generic result for any alerting API operation
  * request_id **required** `string`: Unique request identifier for tracking

### AlertUserAppEmailSettingsResult
* AlertUserAppEmailSettingsResult `object`: Alerting Email Settings of the user for a particular app
  * request_id **required** `string`: Unique request identifier for tracking
  * eTag `string`: The ETag of the entity
  * enabled **required** `boolean`: Allows to forcefully disable emails on app or user level
  * settings **required** `array`: The settings the user has for the app
    * items `object`: Event Setting
      * default_value `string` (values: Disabled, Individual, Daily, DailyAndIndividual): Default frequency of event
      * event_type **required** `string` (values: crash_newCrashGroupCreated): Event Name
      * value **required** `string` (values: Disabled, Individual, Daily, DailyAndIndividual, Default): Frequency of event
  * userId `string`: The unique id (UUID) of the user
  * appId `string`: Application ID
  * request_id `string`: Unique request
  * user_enabled `boolean`: A flag indicating if settings are enabled at user/global level

### AlertUserEmailSettingsResult
* AlertUserEmailSettingsResult `object`: Alerting Default Email Settings of the user
  * request_id **required** `string`: Unique request identifier for tracking
  * eTag `string`: The ETag of the entity
  * enabled **required** `boolean`: Allows to forcefully disable emails on app or user level
  * settings **required** `array`: The settings the user has for the app
    * items `object`: Event Setting
      * default_value `string` (values: Disabled, Individual, Daily, DailyAndIndividual): Default frequency of event
      * event_type **required** `string` (values: crash_newCrashGroupCreated): Event Name
      * value **required** `string` (values: Disabled, Individual, Daily, DailyAndIndividual, Default): Frequency of event
  * userId `string`: The unique id (UUID) of the user

### AlertWebhook
* AlertWebhook `object`: Alerting webhook
  * enabled `boolean`: Allows eanble/disable webhook
  * event_types **required** `array`: Event types enabled for webhook
    * items `string` (values: newCrashGroupCreated, newAppReleased): Alerting EventTypes enum
  * id `string`: The unique id (UUID) of the webhook
  * name **required** `string`: display name of the webhook
  * url **required** `string`: target url of the webhook

### AlertWebhookListResult
* AlertWebhookListResult `object`: List of alerting webhooks wrapped as operation result
  * values **required** `array`
    * items `object`: Alerting webhook
      * enabled `boolean`: Allows eanble/disable webhook
      * event_types **required** `array`: Event types enabled for webhook
        * items `string` (values: newCrashGroupCreated, newAppReleased): Alerting EventTypes enum
      * id `string`: The unique id (UUID) of the webhook
      * name **required** `string`: display name of the webhook
      * url **required** `string`: target url of the webhook

### AlertWebhookPingResult
* AlertWebhookPingResult: Alerting webhook ping operation result
  * request_id **required** `string`: Unique request identifier for tracking
  * response_reason `string`: Reason returned in response from calling webhook
  * response_status_code **required** `integer`: HTTP status code returned in response from calling webhook

### AlertingAccessTokenResponse
* AlertingAccessTokenResponse `object`: Access token details
  * access_token_id **required** `string`: ID of the access token
  * external_account_name **required** `string`: The account name of external user that used to authenticate against the external oauth provider or basic auth
  * external_provider_name **required** `string` (values: github, vsts, jira): External provider name
  * external_user_email **required** `string`: The email of external user that used to authenticate aginst the external oauth provider

### AlertingBugtracker
* AlertingBugtracker `object`: Alerting bugtracker resource
  * event_types `array`: Event types enabled for bugtracker
    * items `string` (values: newCrashGroupCreated, newAppReleased): Alerting EventTypes enum
  * settings `object`: Bugtracker specific settings
    * callback_url `string`
    * owner_name **required** `string`
    * type **required** `string` (values: github, vsts, jira): type of bugtracker
  * state `string` (values: enabled, disabled, unauthorized): bugtracker state
  * token_id `string`: ID of OAuth token
  * type `string` (values: github, vsts, jira): type of bugtracker

### AlertingBugtrackerSettings
* AlertingBugtrackerSettings `object`: Bugtracker specific settings
  * callback_url `string`
  * owner_name **required** `string`
  * type **required** `string` (values: github, vsts, jira): type of bugtracker

### AlertingCrashGroup
* AlertingCrashGroup `object`
  * app_display_name `string`
  * app_platform `string` (values: ios, android, xamarin, react-native, ndk, unity, other): SDK/Platform this thread is beeing generated from
  * app_version `string`
  * id `string`
  * name `string`
  * reason `string`
  * stack_trace `array`
    * items `string`
  * url `string`

### AlertingError
* AlertingError: Alerting service error
  * request_id **required** `string`: Unique request identifier for tracking
  * code **required** `integer` (values: 400, 404, 409, 500): The status code return by the API. It can be 400 or 404 or 409 or 500.
  * message `string`: The reason for the request failed

### AlertingEvent
* AlertingEvent `object`: Alerting event
  * event_id **required** `string`: A unique identifier for this event instance. Useful for deduplication
  * event_timestamp **required** `string`: ISO 8601 date time when event was generated
  * properties `object`: Obsolete. Use emailProperties.

### AlertingEventTypes
* AlertingEventTypes `string` (values: newCrashGroupCreated, newAppReleased): Alerting EventTypes enum

### AlertingGithubBugtrackerSettings
* AlertingGithubBugtrackerSettings `object`: Github bugtracker specific settings
  * github_label `string`
  * github_repo_id **required** `integer`
  * github_repo_name **required** `string`
  * callback_url `string`
  * owner_name **required** `string`
  * type **required** `string` (values: github, vsts, jira): type of bugtracker

### AlertingJiraBugtrackerSettings
* AlertingJiraBugtrackerSettings `object`: Jira bugtracker specific settings
  * jira_project_id **required** `integer`
  * jira_project_name **required** `string`
  * callback_url `string`
  * owner_name **required** `string`
  * type **required** `string` (values: github, vsts, jira): type of bugtracker

### AlertingVstsBugtrackerSettings
* AlertingVstsBugtrackerSettings `object`: VSTS bugtracker specific settings
  * vsts_account_name `string`
  * vsts_area_path `string`
  * vsts_default_payload `object`
  * vsts_project_id **required** `string`
  * vsts_project_name `string`
  * vsts_project_uri **required** `string`
  * callback_url `string`
  * owner_name **required** `string`
  * type **required** `string` (values: github, vsts, jira): type of bugtracker

### AllAccountsAggregatedBillingInformation
* AllAccountsAggregatedBillingInformation `object`: Aggregated Billing Information for a user an the organizations in which the user is an admin.
  * aggregatedBillings `object`: Aggregated Billing Information for a user or an organization
    * azureSubscriptionId `string`: Unique identifier for the Azure subscription used for billing
    * azureSubscriptionState `string` (values: Enabled, Disabled, NotSet): State of the Azure subscription used for billing
    * billingPlans `object`: Billing Plans section in the Billing Information
      * buildService `object`: Billing Plans for a single service
        * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
        * currentBillingPeriod `object`: Billing plans for a given period
          * byAccount `object`: Selection of a billing plan
          * endTime `string`: Exclusive end of the period.
          * startTime `string`: Inclusive start of the period
        * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
      * testService `object`: Billing Plans for a single service
        * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
        * currentBillingPeriod `object`: Billing plans for a given period
          * byAccount `object`: Selection of a billing plan
          * endTime `string`: Exclusive end of the period.
          * startTime `string`: Inclusive start of the period
        * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
    * id `string`: ID of the user or organization
    * timestamp `string`: The ISO 8601 datetime of last modification
    * usage `object`: Usage section in the Billing Information
      * buildService `object`: Resource usage for a single Mobile Center service
        * currentUsagePeriod `object`: Usage for a single period
          * byAccount `object`: A collection of named numeric values
          * byApp `object`: A collection of  named numeric values grouped by app
          * endTime `string`: Exclusive end time of the usage period.
          * startTime `string`: Inclusive start time of the usage period
      * testService `object`: Resource usage for a single Mobile Center service
        * currentUsagePeriod `object`: Usage for a single period
          * byAccount `object`: A collection of named numeric values
          * byApp `object`: A collection of  named numeric values grouped by app
          * endTime `string`: Exclusive end time of the usage period.
          * startTime `string`: Inclusive start time of the usage period
    * version `string`: Version of the Billing Information schema

### AllItunesAppsResponse
* AllItunesAppsResponse `object`: Itunes teams details .
  * apple_id `string`: apple id for app team id.
  * bundle_id `string`: bundle identifier of app
  * iconUrl `string`: url for the app icon from app store
  * name `string`: App Name

### AnalyticsModels
* AnalyticsModels `object`
  * models `array`
    * items `object`
      * count `integer`: Count current of model.
      * model_name `string`: Model's name.
      * previous_count `integer`: Count of previous model.
  * total `integer`

### AnalyticsReleasesParameter
* AnalyticsReleasesParameter `object`
  * distribution_group_id **required** `string`: distribution group id
  * release_id **required** `integer`: release id
  * user_id **required** `string`: user id

### AnalyticsReleasesResponse
* AnalyticsReleasesResponse `object`
  * releases `array`
    * items `object`
      * distribution_group_id **required** `string`: distribution group id
      * release_id **required** `integer`: release id
      * user_id **required** `string`: user id

### AndroidBranchConfigurationProperties
* AndroidBranchConfigurationProperties `object`: Build configuration for Android projects
  * automaticSigning `boolean`: Whether to apply automatic signing or not
  * buildVariant `string`: The Android build variant to build
  * gradleWrapperPath `string`: Path to the Gradle wrapper script
  * isRoot `boolean`: Whether it is the root module or not
  * keyAlias `string`: The key alias
  * keyPassword `string`: The key password
  * keystoreEncoded `string`: The keystore encoded value
  * keystoreFilename `string`: The name of the keystore file
  * keystorePassword `string`: The password of the keystore
  * module `string`: The Gradle module to build
  * runLint `boolean`: Whether to run lint checks during the build (default)
  * runTests `boolean`: Whether to run unit tests during the build (default)

### AndroidModule
* AndroidModule `object`
  * buildConfigurations `array`: The detected build configurations of the Android module
    * items `object`
      * name **required** `string`: Name of build configuration (the same as a build type name)
      * signingConfig `object`: Android signing config. Null if not specified
        * hasStoreFile `boolean`: Indicates if storeFile is specified in the signing configuration
  * buildTypes `array`: The detected build types of the Android module
    * items `string`
  * buildVariants `array`: The detected build variants of the Android module (matrix of product flavor + build type (debug|release))
    * items `string`
  * hasBundle `boolean`: Module contains bundle settings
  * isRoot `boolean`: Whether the module is at the root level of the project
  * name **required** `string`: Name of the Android module
  * productFlavors `array`: The product flavors of the Android module
    * items `string`

### AndroidProject
* AndroidProject `object`
  * androidModules **required** `array`: Android Gradle modules
    * items `object`
      * buildConfigurations `array`: The detected build configurations of the Android module
        * items `object`
          * name **required** `string`: Name of build configuration (the same as a build type name)
          * signingConfig `object`: Android signing config. Null if not specified
      * buildTypes `array`: The detected build types of the Android module
        * items `string`
      * buildVariants `array`: The detected build variants of the Android module (matrix of product flavor + build type (debug|release))
        * items `string`
      * hasBundle `boolean`: Module contains bundle settings
      * isRoot `boolean`: Whether the module is at the root level of the project
      * name **required** `string`: Name of the Android module
      * productFlavors `array`: The product flavors of the Android module
        * items `string`
  * gradleWrapperPath `string`: The path of the Gradle wrapper

### ApiTokenClaim
* ApiTokenClaim `object`
  * claim_type `string` (values: user_email, user_origin, app_owner_name, app_name, app_origin, app_os, app_platform, app_secret)
  * claim_value `string`

### ApiTokenDeleteResponse
* ApiTokenDeleteResponse `object`
  * id **required** `string`: The unique id (UUID) of the api token
  * token_hash **required** `string`: The hashed value of api token

### ApiTokenGetUserResponse
* ApiTokenGetUserResponse `object`
  * token_id **required** `string`: The token's unique id (UUID)
  * token_scope **required** `array`: The token's scope. A list of allowed roles.
    * items `string` (values: all, in_app_update, viewer)
  * user_email **required** `string`: The user email
  * user_id **required** `string`: The unique id (UUID) of the user
  * user_origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of the user who created this api token

### ApiTokenResponse
* ApiTokenResponse `object`
  * created_at **required** `string`: The creation time
  * description `string`: The description of the token
  * encrypted_token `string`: The encrypted value of a token. This value will only be returned for token of type in_app_update.
  * id **required** `string`: The unique id (UUID) of the api token
  * scope `array`: The token's scope. A list of allowed roles.
    * items `string` (values: all, in_app_update, viewer)

### ApiTokenResponsev2
* ApiTokenResponsev2 `object`
  * created_at **required** `string`: The creation time
  * description `string`: The description of the token
  * encrypted_token `string`: The encrypted value of a token. This value will only be returned for token of type in_app_update.
  * id **required** `string`: The unique id (UUID) of the api token
  * scope `array`: The token's scope. A list of allowed roles.
    * items `string` (values: all, in_app_update, viewer)

### ApiTokensCreateRequest
* ApiTokensCreateRequest `object`
  * description `string`: The description of the token
  * scope `array`: The scope for this token.
    * items `string` (values: all, viewer)

### ApiTokensCreateResponse
* ApiTokensCreateResponse `object`
  * api_token **required** `string`: The api token generated will not be accessible again
  * created_at **required** `string`: The creation time
  * description `string`: The description of the token
  * id **required** `string`: The unique id (UUID) of the api token
  * scope `array`: The scope for this token.
    * items `string` (values: all, viewer)

### ApiTokensGetResponse
* ApiTokensGetResponse `object`
  * created_at **required** `string`: The creation time
  * description `string`: The description of the token
  * id **required** `string`: The unique id (UUID) of the api token
  * scope `array`: The scope for this token.
    * items `string` (values: all, viewer)

### ApiTokensPostRequest
* ApiTokensPostRequest `object`
  * description `string`: The description of the token
  * encrypted_token `string`: An encrypted value of the token.
  * scope `array`: The scope for this token. An array of supported roles.
    * items `string` (values: all, in_app_update, viewer)
  * token_hash `string`: The hashed value of api token
  * token_type `string` (values: public, in_app_update, build, session, tester_app): The token's type. public:managed by the user; in_app_update:special token for in-app update scenario; buid:dedicated for CI usage for now; session:for CLI session management; tester_app: used for tester mobile app; default is "public".'

### ApiTokensPrivateCreateRequest
* ApiTokensPrivateCreateRequest `object`
  * description `string`: The description of the token
  * principal_id **required** `string`: The principal ID assigned to the API token
  * principal_type **required** `string` (values: app, user): The principal type assigned to the API token
  * scope `array`: The scope for this token (default "all").
    * items `string` (values: all, in_app_update, viewer)
  * token_type `string` (values: public, in_app_update, build, session, tester_app): The token's type (default "public")

### ApiTokensPrivateCreateResponse
* ApiTokensPrivateCreateResponse `object`
  * api_token **required** `string`: The api token generated will not be accessible again
  * created_at **required** `string`: The creation time
  * description `string`: The description of the token
  * encrypted_token `string`: The encrypted value of a token. This value will only be returned for token of type in_app_update.
  * id **required** `string`: The unique id (UUID) of the api token
  * scope `array`: The scope for this token.
    * items `string` (values: all, in_app_update, viewer)

### AppAddRequest
* AppAddRequest `object`
  * name **required** `string`: The name of the app to be added to the distribution group

### AppBuildFeature
* AppBuildFeature `object`: supported feature
  * name `string`
  * value `boolean`

### AppBuildFeatures
* AppBuildFeatures `array`: A list of supported features
  * items `object`: supported feature
    * name `string`
    * value `boolean`

### AppCrashesInfo
* AppCrashesInfo `object`
  * features **required** `object`
    * crash_download_raw `boolean`: App supports download of raw crashes
    * crashgroup_analytics_crashfreeusers `boolean`: App supports the 'crash free user' metric
    * crashgroup_analytics_impactedusers `boolean`: App supports the 'impacted users' metric
    * crashgroup_modify_annotation `boolean`: App supports modification of crashgroup annotation
    * crashgroup_modify_status `boolean`: App supports modification of crashgroup status
    * search `boolean`: App supports search API
  * has_crashes **required** `boolean`

### AppDeleteRequest
* AppDeleteRequest `object`
  * name **required** `string`: The name of the app to be deleted from the distribution group

### AppDistributionGroupUsersRequest
* AppDistributionGroupUsersRequest `object`
  * member_ids `array`
    * items `string`

### AppFeatures
* AppFeatures `object`
  * crash_download_raw `boolean`: App supports download of raw crashes
  * crashgroup_analytics_crashfreeusers `boolean`: App supports the 'crash free user' metric
  * crashgroup_analytics_impactedusers `boolean`: App supports the 'impacted users' metric
  * crashgroup_modify_annotation `boolean`: App supports modification of crashgroup annotation
  * crashgroup_modify_status `boolean`: App supports modification of crashgroup status
  * search `boolean`: App supports search API

### AppGroupResponse
* AppGroupResponse `object`
  * display_name `string`: The display name of the app
  * group_id **required** `string`: The unique ID (UUID) of the group that the app belongs to
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * platform **required** `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase

### AppId
* AppId `object`
  * id `string`: the id of the app

### AppIntegration
* AppIntegration `object`
  * app_id **required** `string`: app id
  * provider **required** `string`: provider type
  * state **required** `string`: integration state

### AppIntegrationResponse
* AppIntegrationResponse `object`
  * app_id **required** `string`: app id

### AppInvitationDetailResponse
* AppInvitationDetailResponse `object`
  * app **required**
    * description `string`: The description of the app
    * display_name **required** `string`: The display name of the app
    * icon_source `string`: The string representation of the source of the app's icon
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * id **required** `string`: The unique ID (UUID) of the app
    * name **required** `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * owner **required** `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
    * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
    * azure_subscription `object`
      * is_billable `boolean`: If the subscription can be used for billing
      * is_billing `boolean`: If the subscription is used for billing
      * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
      * subscription_id **required** `string`: The azure subscription id
      * subscription_name **required** `string`: The name of the azure subscription
      * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
    * created_at `string`: The created date of this app
    * member_permissions `array`: The permissions of the calling user
      * items `string` (values: manager, developer, viewer, tester)
    * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
    * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
    * updated_at `string`: The last updated date of this app
  * app_count `number`: The number of apps in the group
  * distribution_group `object`: The organization that owns the distribution group, if it exists
    * owner `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * email **required** `string`: The email address of the invited user
  * id **required** `string`: The unique ID (UUID) of the invitation
  * invite_type **required** `string` (values: developer, tester): The invitation type
  * invited_by **required** `object`
    * avatar_url `string`: The avatar URL of the user
    * can_change_password `boolean`: User is required to send an old password in order to change the password.
    * display_name **required** `string`: The full name of the user. Might for example be first and last name
    * email **required** `string`: The email address of the user
    * id **required** `string`: The unique id (UUID) of the user
    * name **required** `string`: The unique name that is used to identify the user.
    * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
    * permissions `array`: The permissions the user has for the app
      * items `string` (values: manager, developer, viewer, tester)
  * is_existing_user **required** `boolean`: Indicates whether the invited user already exists
  * permissions `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer, tester)

### AppMembership
* AppMembership `object`
  * app_id `string`
  * origin `string` (values: appcenter, hockeyapp, codepush, testcloud, hockeyapp-dogfood)
  * permissions `array`
    * items `string`
  * source_id `string`
  * source_type `string` (values: user, org, distribution_group, team, release)
  * user_id `string`

### AppMembershipsResponse
* AppMembershipsResponse `object`
  * app_origin `string`: The app's origin
  * memberships `array`: An array of all ways a user has access to the app, based on the app_memberships table.
    * items `object`
      * app_id `string`
      * origin `string` (values: appcenter, hockeyapp, codepush, testcloud, hockeyapp-dogfood)
      * permissions `array`
        * items `string`
      * source_id `string`
      * source_type `string` (values: user, org, distribution_group, team, release)
      * user_id `string`

### AppMembershipsValidationResponse
* AppMembershipsValidationResponse `object`
  * app_users_with_missing_memberships `array`
    * items `object`
      * app_id `string`
      * origin `string`
      * permissions `array`
        * items `string`
      * user_id `string`
  * distribution_group_users_with_missing_memberships `array`
    * items `object`
      * distribution_group_id `string`
      * origin `string`
      * user_id `string`
  * excess_app_memberships `object`
    * app_users_memberships `array`
      * items `object`
        * app_id `string`
        * origin `string` (values: appcenter, hockeyapp, codepush, testcloud, hockeyapp-dogfood)
        * permissions `array`
          * items `string`
        * source_id `string`
        * source_type `string` (values: user, org, distribution_group, team, release)
        * user_id `string`
    * distribution_group_memberships `array`
      * items `object`
        * app_id `string`
        * origin `string` (values: appcenter, hockeyapp, codepush, testcloud, hockeyapp-dogfood)
        * permissions `array`
          * items `string`
        * source_id `string`
        * source_type `string` (values: user, org, distribution_group, team, release)
        * user_id `string`
    * organization_admin_memberships `array`
      * items `object`
        * app_id `string`
        * origin `string` (values: appcenter, hockeyapp, codepush, testcloud, hockeyapp-dogfood)
        * permissions `array`
          * items `string`
        * source_id `string`
        * source_type `string` (values: user, org, distribution_group, team, release)
        * user_id `string`
  * organization_admins_with_missing_memberships `array`
    * items `object`
      * organization_id `string`
      * origin `string`
      * role `string`
      * user_id `string`

### AppName
* AppName `object`
  * name **required** `string`

### AppPatchRequest
* AppPatchRequest `object`
  * description `string`: A short text describing the app
  * display_name `string`: The display name of the app
  * icon_asset_id `string`: The uuid for the icon's asset id from ACFUS
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * name `string`: The name of the app used in URLs
  * release_type `string`: A one-word descriptive release type value that starts with a capital letter but is otherwise lowercase

### AppRepoPatchRequest
* AppRepoPatchRequest `object`
  * external_user_id `string`: The external user id from the provider
  * repo_url `string`: The absolute URL of the repository
  * service_connection_id `string`: The id of the service connection stored in customer credential store
  * user_id `string`: The unique id (UUID) of the user

### AppRepoPostRequest
* AppRepoPostRequest `object`
  * external_user_id `string`: The external user id from the provider
  * installation_id `string`: Installation id from the provider
  * repo_id `string`: Repository id from the provider
  * repo_provider `string` (values: github, bitbucket, vsts, gitlab): The provider of the repository
  * repo_url **required** `string`: The absolute URL of the repository
  * service_connection_id `string`: The id of the service connection stored in customer credential store
  * user_id **required** `string`: The unique id (UUID) of the user who configured the repository

### AppRepoResponse
* AppRepoResponse `object`
  * app_id **required** `string`: The unique id (UUID) of the app that this repository integration belongs to
  * external_user_id `string`: User id from the provider
  * id **required** `string`: The unique id (UUID) of the repository integration
  * installation_id `string`: Installation id from the provider
  * repo_id `string`: Repository id from the provider
  * repo_provider `string` (values: github, bitbucket, vsts, gitlab): The provider of the repository
  * repo_url **required** `string`: The absolute URL of the repository
  * service_connection_id `string`: The id of the service connection stored in customer credential store
  * user_id **required** `string`: The unique id (UUID) of the user who configured the repository

### AppRequest
* AppRequest `object`
  * description `string`: A short text describing the app
  * display_name **required** `string`: The descriptive name of the app. This can contain any characters
  * name `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * platform **required** `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Xamarin, Unity, Electron, WPF, WinForms, Custom): The platform of the app
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase

### AppResponse
* AppResponse
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app

### AppResponseInternal
* AppResponseInternal
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app
  * cutover_from_hockeyapp_at `string`: The cutover date of this app
  * feature_flags `array`: The feature flags that are enabled for this app
    * items `string`
  * repositories `array`: The repositories associated with this app
    * items `object`
      * repo_provider `string`
      * repo_url `string`
  * user_permissions `object`: the permissions for the specified app user
    * permissions `array`
      * items `string` (values: manager, developer, viewer, tester)
    * user_id `string`

### AppUserPermissionResponse
* AppUserPermissionResponse `object`
  * app_id **required** `string`: The unique id (UUID) of the app
  * app_origin **required** `string` (values: appcenter, codepush): The creation origin of this app
  * app_secret **required** `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * permissions **required** `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer, tester)
  * user_email **required** `string`: The email of the user
  * user_id **required** `string`: The unique id (UUID) of the user

### AppVersion
* AppVersion `object`
  * app_id **required** `string`
  * app_version **required** `string`
  * app_version_id **required** `string`
  * build_number `string`
  * display_name **required** `string`

### AppWithTeamPermissionsResponse
* AppWithTeamPermissionsResponse
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
  * azure_subscription `object`
    * is_billable `boolean`: If the subscription can be used for billing
    * is_billing `boolean`: If the subscription is used for billing
    * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
    * subscription_id **required** `string`: The azure subscription id
    * subscription_name **required** `string`: The name of the azure subscription
    * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
  * created_at `string`: The created date of this app
  * member_permissions `array`: The permissions of the calling user
    * items `string` (values: manager, developer, viewer, tester)
  * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
  * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
  * updated_at `string`: The last updated date of this app
  * team_permissions `array`: The permissions the team has for the app
    * items `string` (values: manager, developer, viewer)

### AppleCertificateDetails
* AppleCertificateDetails `object`: Apple Certificate Details
  * base64Certificate **required** `string`: The certificate contents in base 64 encoded string
  * password **required** `string`: The password for the certificate

### AppleCertificateNonSecretDetails
* AppleCertificateNonSecretDetails `object`: Apple Certificate Secret Details
  * certificateValidityEndDate **required** `string`: The date-time till which the certificate is valid
  * certificateValidityStartDate **required** `string`: The date-time from which the certificate is valid
  * displayName **required** `string`: The display name (CN) of the certificate

### AppleCertificateNonSecretDetailsResponse
* AppleCertificateNonSecretDetailsResponse `object`: Apple certificate non-secret details
  * data **required** `object`: apple certificate non-secret details
    * certificateValidityEndDate **required** `string`: The date-time till which the certificate is valid
    * certificateValidityStartDate **required** `string`: The date-time from which the certificate is valid
    * displayName **required** `string`: The display name (CN) of the certificate
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### AppleCertificateSecretDetails
* AppleCertificateSecretDetails `object`: Apple Certificate Secret Details
  * base64Certificate **required** `string`: The certificate contents in base 64 encoded string
  * certificateValidityEndDate **required** `string`: The date-time till which the certificate is valid
  * certificateValidityStartDate **required** `string`: The date-time from which the certificate is valid
  * displayName **required** `string`: The display name (CN) of the certificate
  * password **required** `string`: The password for the certificate

### AppleCertificateSecretDetailsResponse
* AppleCertificateSecretDetailsResponse `object`: Apple connection secrets
  * data **required** `object`: apple certificate secret details.
    * base64Certificate **required** `string`: The certificate contents in base 64 encoded string
    * certificateValidityEndDate **required** `string`: The date-time till which the certificate is valid
    * certificateValidityStartDate **required** `string`: The date-time from which the certificate is valid
    * displayName **required** `string`: The display name (CN) of the certificate
    * password **required** `string`: The password for the certificate
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### AppleCertificateSecretRequest
* AppleCertificateSecretRequest `object`: Apple certificate secrets
  * data **required** `object`: apple secret details
    * base64Certificate **required** `string`: The certificate contents in base 64 encoded string
    * password **required** `string`: The password for the certificate
  * credentialType `string` (values: credentials, certificate): credential type of the shared connection. Values can be credentials|certificate
  * displayName `string`: display name of shared connection
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### AppleConnectionNonSecretResponse
* AppleConnectionNonSecretResponse: Apple connection secrets
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### AppleConnectionSecretRequest
* AppleConnectionSecretRequest: Apple connection secrets
  * credentialType `string` (values: credentials, certificate): credential type of the shared connection. Values can be credentials|certificate
  * displayName `string`: display name of shared connection
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### AppleConnectionSecretResponse
* AppleConnectionSecretResponse `object`: Apple connection secrets
  * data **required** `object`: apple secret details
    * username **required** `string`: username to connect to apple store
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### AppleCredentialNonSecretDetailsResponse
* AppleCredentialNonSecretDetailsResponse `object`: Apple credentials non-secret details
  * data **required** `object`: Apple credentials non-secret data
    * username **required** `string`: username to connect to apple store
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### AppleCredentialsMultifactorSecretRequest
* AppleCredentialsMultifactorSecretRequest `object`: Apple connection secrets
  * data **required** `object`: apple secret details
    * appSpecificPassword `string`: The app specific password required for app publishing for 2FA accounts
    * authCode **required** `string`: The 6 digit Apple OTP for Multifactor accounts
    * password **required** `string`: password to connect to apple store.
    * username **required** `string`: username to connect to apple store.
  * credentialType `string` (values: credentials, certificate): credential type of the shared connection. Values can be credentials|certificate
  * displayName `string`: display name of shared connection
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### AppleCredentialsSecretRequest
* AppleCredentialsSecretRequest `object`: Apple connection secrets
  * data **required** `object`: apple secret details
    * authCode `string`: 6 digit auth code
    * password `string`: password to connect to apple store.
    * username `string`: username to connect to apple store.
  * credentialType `string` (values: credentials, certificate): credential type of the shared connection. Values can be credentials|certificate
  * displayName `string`: display name of shared connection
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### AppleLoginRequest
* AppleLoginRequest `object`: Apple credentials needed to log into the Apple Developer Portal
  * cookie `string`: The 30-day session cookie for multi-factor authentication backed accounts.
  * password **required** `string`: The password for the Apple Developer account.
  * team_identifier `string`: Identifier of the team to use when logged in.
  * username **required** `string`: The username for the Apple Developer account.

### AppleLoginResponse
* AppleLoginResponse `object`: Indicates if login was successful.
  * successful `boolean`: True when login was successful.

### AppleMappingRequest
* AppleMappingRequest `object`: Apple Mapping Request Type
  * apple_id `string`: ID of the apple application in apple store, takes precedence over bundle_identifier when both are provided
  * bundle_identifier `string`: Bundle Identifier of the apple package
  * service_connection_id **required** `string`: Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
  * team_identifier **required** `string`: ID of the Team associated with the app in apple store

### AppleMappingResponse
* AppleMappingResponse `object`: Apple Mapping Request Type
  * app_id `string`: ID of the apple application in Mobile Center
  * apple_id `string`: ID of the apple application in apple store
  * service_connection_id `string`: Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
  * team_identifier `string`: ID of the Team associated with the app in apple store

### AppleMultifactorLoginResponse
* AppleMultifactorLoginResponse `object`: The response of Multifactor login. This is a 30 day session token generated by apple.
  * cookie `string`: The 30-day session Token generated by apple after successfully logging in with Multifactor authentication.
  * expires `string`: The expiry date of the cookie generated by apple
  * username `string`: the apple developer account.

### AppleMultifactorSecretDetails
* AppleMultifactorSecretDetails `object`: Apple secret details
  * appSpecificPassword `string`: The app specific password required for app publishing for 2FA accounts
  * authCode **required** `string`: The 6 digit Apple OTP for Multifactor accounts
  * password **required** `string`: password to connect to apple store.
  * username **required** `string`: username to connect to apple store.

### AppleMutifactorLoginRequest
* AppleMutifactorLoginRequest `object`: Apple credentials needed to log into the Apple Developer Portal
  * authcode **required** `string`: This is the six digit OTP used for completing the multi-factor authentication
  * username **required** `string`: The username for the Apple Developer account.

### AppleNotificationEndpointType
* AppleNotificationEndpointType `string` (values: production, sandbox): Type of endpoint the certificate or token are associated with

### AppleSecretDetails
* AppleSecretDetails `object`: Apple secret details
  * authCode `string`: 6 digit auth code
  * password `string`: password to connect to apple store.
  * username `string`: username to connect to apple store.

### AppleSecretDetailsResponse
* AppleSecretDetailsResponse `object`: Apple secret details
  * username **required** `string`: username to connect to apple store

### AppleTestFlightGroupRequest
* AppleTestFlightGroupRequest `object`: Apple details for fetching test flight groups from Apple Developer Portal. pass either apple_id or bundle_identifier to get the test flight groups. if both are passed than apple_id will take preference
  * apple_id `string`: apple_id of the app for which test flight groups need to be fetched.
  * bundle_identifier `string`: apple_id of the app for which test flight groups need to be fetched.
  * cookie `string`: The 30-day session cookie for multi-factor authentication backed accounts.
  * password `string`: The password for the Apple Developer account.
  * service_connection_id `string`: The service_connection_id of the stored Apple credentials instead of username, password.
  * team_identifier `string`: Identifier of the team to use when logged in.
  * username `string`: The username for the Apple Developer account.

### AppleTestFlightGroupResponse
* AppleTestFlightGroupResponse `object`: test flight group details for the app.
  * active `boolean`: true if group is in active state.
  * appAdamId `number`: apple id of the group.
  * id `string`: id of the group.
  * isInternalGroup `boolean`: true if the group is an internal group.
  * name `string`: name of the group.
  * providerId `number`: provider id of the group.

### AppleTestFlightGroupsResponse
* AppleTestFlightGroupsResponse `object`: Apple Test Flight Groups Response Type
  * appleId `number`: apple id of the group.
  * id `string`: id of the group.
  * name `string`: name of the group.
  * providerId `number`: provider id of the group.

### ApplicationStatusRequest
* ApplicationStatusRequest `object`: The information needed to fetch the status of an application
  * build_version `string`: The version of build for which real time status is to be fetched.
  * bundle_identifier **required** `string`: Bundle Identifier of application in Apple Itunes portal.
  * password **required** `string`: The password for the Apple Developer account.
  * team_identifier `string`: Identifier of the team to use when logged in.
  * track_identifier **required** `string`: Track Identifier for which the status is to be fetched.
  * train_version `string`: The Train version for which the status is to be fetched.
  * username **required** `string`: The username for the Apple Developer account.

### ApplicationStatusResponse
* ApplicationStatusResponse `object`: The status information from Itunes portal
  * version `string`: The version of the application
  * version_type **required** `string`: The type of version being returned (production/edit/test flight).

### ArchIdentifier
* ArchIdentifier `object`: An object containing a UUID for an architecture for an iOS app.
  * architecture **required** `string`: The architecture that the UUID belongs to, i.e. armv7 or arm64.
  * uuid **required** `string`: The unique identifier.

### AttributesValues
* AttributesValues `object`: Collection of attribute values.

### Audience
* Audience `object`: Audience with details.
  * custom_properties `object`: Custom properties used in the definition.
  * enabled `boolean`
  * estimated_total_count `integer`: Estimated total audience size.
  * timestamp `string`: Date the audience was last refreshed.
  * definition `string`: Audience definition in OData format.
  * description `string`: Audience description.
  * estimated_count `integer`: Estimated audience size.
  * name `string`: Audience name.
  * state `string` (values: Calculating, Ready, Disabled): Audience state.

### AudienceBlobResult
* AudienceBlobResult `object`: Audience definition.
  * url `string`: Location of the audience blob.

### AudienceDefinition
* AudienceDefinition `object`: Audience definition.
  * custom_properties `object`: Custom properties used in the definition.
  * definition **required** `string`: Audience definition in OData format.
  * description `string`: Audience description.
  * enabled `boolean`

### AudienceDevicePropertiesListResult
* AudienceDevicePropertiesListResult `object`: List of device properties.
  * values **required** `object`: List of device properties.

### AudienceDevicePropertyValuesListResult
* AudienceDevicePropertyValuesListResult `object`: List of device property values.
  * values **required** `array`: List of device property values.
    * items `string`

### AudienceListResult
* AudienceListResult `object`: List of audiences.
  * nextLink `string`
  * values **required** `array`: List of audiences.
    * items `object`: Audience definition.
      * definition `string`: Audience definition in OData format.
      * description `string`: Audience description.
      * estimated_count `integer`: Estimated audience size.
      * name `string`: Audience name.
      * state `string` (values: Calculating, Ready, Disabled): Audience state.

### AudienceQueryDefinition
* AudienceQueryDefinition `object`: Audience Query definition.
  * identifiers `array`: List of identifiers.
    * items `string`
  * queryType **required** `string` (values: broadcast, user_ids, account_ids, install_ids): Audience Query Type

### AudienceSummary
* AudienceSummary `object`: Audience definition.
  * definition `string`: Audience definition in OData format.
  * description `string`: Audience description.
  * estimated_count `integer`: Estimated audience size.
  * name `string`: Audience name.
  * state `string` (values: Calculating, Ready, Disabled): Audience state.

### AudienceTestResult
* AudienceTestResult `object`: Audience test result.
  * custom_properties `object`: Custom properties used in the definition.
  * definition `string`: Audience definition in OData format.
  * estimated_count `integer`: Estimated audience size.
  * estimated_total_count `integer`: Estimated total audience size.

### AutoProvisioningConfigRequest
* AutoProvisioningConfigRequest `object`: A request containing information for creating a Auto Provisioning Config.
  * allow_auto_provisioning `boolean`: When *true* enables auto provisioning
  * apple_developer_account_key `string`: A key to a secret in customer-credential-store. apple_developer_account refers to the user's developer account that is used to log into https://developer.apple.com. Normally the user's email.
  * apple_distribution_certificate_key `string`: A key to a secret in customer-credential-store. distribution_certificate refers to the customer's certificate (that holds the private key) that will be used to sign the app.

### AutoProvisioningConfigResponse
* AutoProvisioningConfigResponse `object`: A response from API containing information for a Auto Provisioning Config.
  * allow_auto_provisioning `boolean`: When *true* enables auto provisioning
  * app_id `string`: The identifier of the App.
  * apple_developer_account_key `string`: A key to a secret in customer-credential-store. apple_developer_account refers to the user's developer account that is used to log into https://developer.apple.com. Normally the user's email.
  * apple_distribution_certificate_key `string`: A key to a secret in customer-credential-store. distribution_certificate refers to the cusomer's certificate (that holds the private key) that will be used to sign the app.
  * destination_id `string`: The identifier of the destination.
  * id `number`: The identifier of the config.

### AvailabilityOfDevicesRequest
* AvailabilityOfDevicesRequest `object`: Apple credentials needed to log into the Apple Developer Portal and access provisioning profiles
  * password `string`: The password for the Apple Developer account.
  * service_connection_id `string`: The service_connection_id of the stored Apple credentials instad of username, password.
  * username `string`: The username for the Apple Developer account.

### AvailabilityOfDevicesResponse
* AvailabilityOfDevicesResponse `object`: The current device availability (registered, available and maxmimum) for iPhones, iPads, iPods and Watches from Apple Developer Portal
  * ipads **required** `object`: ...
    * available **required** `number`
    * maximum **required** `number`
    * registered **required** `number`
  * iphones **required** `object`: ...
    * available **required** `number`
    * maximum **required** `number`
    * registered **required** `number`
  * ipods **required** `object`: ...
    * available **required** `number`
    * maximum **required** `number`
    * registered **required** `number`
  * watches **required** `object`: ...
    * available **required** `number`
    * maximum **required** `number`
    * registered **required** `number`

### AvailableAppBuilds
* AvailableAppBuilds `object`
  * app_builds `array`: List of available app builds.
    * items `string`: App Build name.

### AvailableVersions
* AvailableVersions `object`
  * total_count `integer`: The full number of versions across all pages.
  * versions `array`: List of available versions.
    * items `string`: Version name.

### AvailableVersions_Diagnostics
* AvailableVersions_Diagnostics `object`
  * total_count `integer`: The full number of versions across all pages.
  * versions `array`: List of available versions.
    * items `string`: Version name.

### AzureSubscriptionAddRequest
* AzureSubscriptionAddRequest `object`
  * is_billing `boolean`: If the subscription is used for billing
  * subscription_id **required** `string`: The azure subscription id
  * subscription_name **required** `string`: The name of the azure subscription
  * tenant_id **required** `string`: The tenant id of the azure subscription belongs to

### AzureSubscriptionAddToAppRequest
* AzureSubscriptionAddToAppRequest `object`
  * subscription_id **required** `string`: The azure subscription id

### AzureSubscriptionPatchRequest
* AzureSubscriptionPatchRequest `object`
  * is_billing **required** `boolean`: If the subscription is used for billing

### AzureSubscriptionResponse
* AzureSubscriptionResponse `object`
  * is_billable `boolean`: If the subscription can be used for billing
  * is_billing `boolean`: If the subscription is used for billing
  * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
  * subscription_id **required** `string`: The azure subscription id
  * subscription_name **required** `string`: The name of the azure subscription
  * tenant_id **required** `string`: The tenant id of the azure subscription belongs to

### AzureSubscriptionUpdateBillableRequest
* AzureSubscriptionUpdateBillableRequest `object`
  * is_billable **required** `boolean`: Billable status of the subscription

### BasicAppResponse
* BasicAppResponse `object`
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase

### BasicReleaseDetailsResponse
* BasicReleaseDetailsResponse `object`: Basic information on a release
  * build `object`: Build information for the release
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
  * destinations `array`: A list of distribution groups or stores.
    * items
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
      * is_latest `boolean`: Is the containing release the latest one in this distribution group.
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
      * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * destination_type `string` (values: group, store, tester): Destination can be either store or group.
      * display_name `string`: Display name for the group or tester
  * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
    * items
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
      * is_latest `boolean`: Is the containing release the latest one in this distribution group.
  * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
    * items
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * id **required** `integer`: ID identifying this unique release.
  * is_external_build `boolean`: This value determines if a release is external or not.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * short_version **required** `string`: The release's short version.<br>
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>

### BillingError
* BillingError `object`: Error
  * error `object`
    * code `integer` (values: 400, 403, 500): The status code return by the API. It can be 400 or 403 or 500.
    * message `string`: The reason for the request failed

### BillingInformationPlans
* BillingInformationPlans `object`: Billing Plans section in the Billing Information
  * buildService `object`: Billing Plans for a single service
    * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
    * currentBillingPeriod `object`: Billing plans for a given period
      * byAccount `object`: Selection of a billing plan
        * count `integer`: Number of instances of the billing plan.
        * plan `object`: Billing Plan
          * attributes `object`: Collection of attribute values.
          * id `string`: The Billing Plan ID
          * limits `object`: A collection of named numeric values
          * parentId `string`
          * paymentSource `string` (values: None, AppCenter, GitHub, Xtc): Service that receives payments for this billing plan.
          * price `number`: Price of the Billing Plan
          * service `string` (values: Build, Test): Name of the service that the plan applies to.
          * version `string`: Version of the Billing Plan schema
      * endTime `string`: Exclusive end of the period.
      * startTime `string`: Inclusive start of the period
    * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.
  * testService `object`: Billing Plans for a single service
    * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
    * currentBillingPeriod `object`: Billing plans for a given period
      * byAccount `object`: Selection of a billing plan
        * count `integer`: Number of instances of the billing plan.
        * plan `object`: Billing Plan
          * attributes `object`: Collection of attribute values.
          * id `string`: The Billing Plan ID
          * limits `object`: A collection of named numeric values
          * parentId `string`
          * paymentSource `string` (values: None, AppCenter, GitHub, Xtc): Service that receives payments for this billing plan.
          * price `number`: Price of the Billing Plan
          * service `string` (values: Build, Test): Name of the service that the plan applies to.
          * version `string`: Version of the Billing Plan schema
      * endTime `string`: Exclusive end of the period.
      * startTime `string`: Inclusive start of the period
    * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.

### BillingInformationSearchResults
* BillingInformationSearchResults `array`: The results of a Billing Information search
  * items `object`
    * accountId `string`: The Account ID
    * accountName `string`: The Account Name
    * billingInternalAccountId `string`: The Billing Internal Account ID
    * buildPlan `string`: The ID of the Build Billing Plan
    * testPlan `string`: The ID of the Test Billing Plan

### BillingPeriod
* BillingPeriod `object`: Billing plans for a given period
  * byAccount `object`: Selection of a billing plan
    * count `integer`: Number of instances of the billing plan.
    * plan `object`: Billing Plan
      * attributes `object`: Collection of attribute values.
      * id `string`: The Billing Plan ID
      * limits `object`: A collection of named numeric values
      * parentId `string`
      * paymentSource `string` (values: None, AppCenter, GitHub, Xtc): Service that receives payments for this billing plan.
      * price `number`: Price of the Billing Plan
      * service `string` (values: Build, Test): Name of the service that the plan applies to.
      * version `string`: Version of the Billing Plan schema
  * endTime `string`: Exclusive end of the period.
  * startTime `string`: Inclusive start of the period

### BillingPlan
* BillingPlan `object`: Billing Plan
  * attributes `object`: Collection of attribute values.
  * id `string`: The Billing Plan ID
  * limits `object`: A collection of named numeric values
  * parentId `string`
  * paymentSource `string` (values: None, AppCenter, GitHub, Xtc): Service that receives payments for this billing plan.
  * price `number`: Price of the Billing Plan
  * service `string` (values: Build, Test): Name of the service that the plan applies to.
  * version `string`: Version of the Billing Plan schema

### BillingPlanSelection
* BillingPlanSelection `object`: Selection of a billing plan
  * count `integer`: Number of instances of the billing plan.
  * plan `object`: Billing Plan
    * attributes `object`: Collection of attribute values.
    * id `string`: The Billing Plan ID
    * limits `object`: A collection of named numeric values
    * parentId `string`
    * paymentSource `string` (values: None, AppCenter, GitHub, Xtc): Service that receives payments for this billing plan.
    * price `number`: Price of the Billing Plan
    * service `string` (values: Build, Test): Name of the service that the plan applies to.
    * version `string`: Version of the Billing Plan schema

### BillingPlansChangeTypeResponse
* BillingPlansChangeTypeResponse `object`: Responses for requests that detect billing plans change type
  * result `string` (values: NoChange, Downgrade, Upgrade)

### BillingPlansSelection
* BillingPlansSelection `object`: Selection of a billing plan for one or more services
  * buildService `object`: Selection of a billing plan
    * count `integer`: Number of instances of the billing plan.
    * plan `object`: Billing Plan
      * attributes `object`: Collection of attribute values.
      * id `string`: The Billing Plan ID
      * limits `object`: A collection of named numeric values
      * parentId `string`
      * paymentSource `string` (values: None, AppCenter, GitHub, Xtc): Service that receives payments for this billing plan.
      * price `number`: Price of the Billing Plan
      * service `string` (values: Build, Test): Name of the service that the plan applies to.
      * version `string`: Version of the Billing Plan schema
  * testService `object`: Selection of a billing plan
    * count `integer`: Number of instances of the billing plan.
    * plan `object`: Billing Plan
      * attributes `object`: Collection of attribute values.
      * id `string`: The Billing Plan ID
      * limits `object`: A collection of named numeric values
      * parentId `string`
      * paymentSource `string` (values: None, AppCenter, GitHub, Xtc): Service that receives payments for this billing plan.
      * price `number`: Price of the Billing Plan
      * service `string` (values: Build, Test): Name of the service that the plan applies to.
      * version `string`: Version of the Billing Plan schema

### BillingResourceUsage
* BillingResourceUsage `object`: Usage section in the Billing Information
  * buildService `object`: Resource usage for a single Mobile Center service
    * currentUsagePeriod `object`: Usage for a single period
      * byAccount `object`: A collection of named numeric values
      * byApp `object`: A collection of  named numeric values grouped by app
      * endTime `string`: Exclusive end time of the usage period.
      * startTime `string`: Inclusive start time of the usage period
  * testService `object`: Resource usage for a single Mobile Center service
    * currentUsagePeriod `object`: Usage for a single period
      * byAccount `object`: A collection of named numeric values
      * byApp `object`: A collection of  named numeric values grouped by app
      * endTime `string`: Exclusive end time of the usage period.
      * startTime `string`: Inclusive start time of the usage period

### BlobInfo
* BlobInfo `object`
  * size **required** `number`
  * url **required** `string`

### BooleanProperty
* BooleanProperty `object`: Boolean property.
  * value **required** `boolean`: Boolean property value.
  * name **required** `string`
  * type **required** `string`

### BooleanProperty_Diagnostics
* BooleanProperty_Diagnostics `object`: Boolean property.
  * value **required** `boolean`: Boolean property value.
  * name **required** `string`
  * type **required** `string`

### Branch
* Branch `object`
  * commit **required** `object`
    * sha `string`: The commit SHA
    * url `string`: The URL to the commit
  * name **required** `string`: The branch name

### BranchConfiguration
* BranchConfiguration `object`: The branch build configuration
  * artifactVersioning `object`: The versioning configuration for artifacts built for this branch
    * buildNumberFormat `string` (values: buildId, timestamp)
  * badgeIsEnabled `boolean`
  * cloneFromBranch `string`: A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests.
  * signed `boolean`
  * testsEnabled `boolean`
  * toolsets `object`: The branch build configuration for each toolset
    * android `object`: Build configuration for Android projects
      * automaticSigning `boolean`: Whether to apply automatic signing or not
      * buildVariant `string`: The Android build variant to build
      * gradleWrapperPath `string`: Path to the Gradle wrapper script
      * isRoot `boolean`: Whether it is the root module or not
      * keyAlias `string`: The key alias
      * keyPassword `string`: The key password
      * keystoreEncoded `string`: The keystore encoded value
      * keystoreFilename `string`: The name of the keystore file
      * keystorePassword `string`: The password of the keystore
      * module `string`: The Gradle module to build
      * runLint `boolean`: Whether to run lint checks during the build (default)
      * runTests `boolean`: Whether to run unit tests during the build (default)
    * javascript `object`: Build configuration when React Native, or other JavaScript tech, is part of the build steps
      * packageJsonPath `string`: Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
      * reactNativeVersion `string`: Version of React Native from package.json files
      * runTests `boolean`: Whether to run Jest unit tests, via npm test, during the build
    * xamarin `object`: Build configuration for Xamarin projects
      * args `string`
      * configuration `string`
      * isSimBuild `boolean`
      * monoVersion `string`
      * p12File `string`
      * p12Pwd `string`
      * provProfile `string`
      * sdkBundle `string`
      * slnPath `string`
      * symlink `string`: Symlink of the SDK Bundle and Mono installation.
    * xcode `object`: Build configuration when Xcode is part of the build steps
      * appExtensionProvisioningProfileFiles `array`
        * items `object`: Provisioning profile fetch and store information
          * fileId `string`: File id from secure file storage
          * fileName `string`: Name of uploaded provisioning profile
          * targetBundleIdentifier `string`: Target the provisioning profile is used to sign
          * uploadId `string`: Upload id to App Center File Upload Store
      * archiveConfiguration `string`: The build configuration of the target to archive
      * automaticSigning `boolean`
      * cartfilePath `string`: Path to Carthage file, if present
      * certificateEncoded `string`
      * certificateFileId `string`
      * certificateFilename `string`
      * certificatePassword `string`
      * certificateUploadId `string`
      * forceLegacyBuildSystem `boolean`: Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
      * podfilePath `string`: Path to CococaPods file, if present
      * projectOrWorkspacePath `string`: Xcode project/workspace path
      * provisioningProfileEncoded `string`
      * provisioningProfileFileId `string`
      * provisioningProfileFilename `string`
      * provisioningProfileUploadId `string`
      * scheme `string`
      * targetToArchive `string`: The target id of the selected scheme to archive
      * teamId `string`
      * xcodeProjectSha `string`: The selected pbxproject hash to the repositroy
      * xcodeVersion `string`: Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.
  * trigger `string` (values: continous, continuous, manual)

### BranchConfigurationArtifactVersioning
* BranchConfigurationArtifactVersioning `object`: The versioning configuration for artifacts built for this branch
  * buildNumberFormat `string` (values: buildId, timestamp)

### BranchConfigurationRevision
* BranchConfigurationRevision `object`: branch configuration revision
  * changeType `string`
  * changedBy `object`: user who made a change in branch configuration
    * displayName `string`
    * url `string`
  * changedDate `string`
  * definitionUrl `string`
  * id `string`
  * name `string`
  * revision `number`

### BranchConfigurationRevisionAuthor
* BranchConfigurationRevisionAuthor `object`: user who made a change in branch configuration
  * displayName `string`
  * url `string`

### BranchConfigurationRevisions
* BranchConfigurationRevisions `array`: list of branch configuration revisions
  * items `object`: branch configuration revision
    * changeType `string`
    * changedBy `object`: user who made a change in branch configuration
      * displayName `string`
      * url `string`
    * changedDate `string`
    * definitionUrl `string`
    * id `string`
    * name `string`
    * revision `number`

### BranchConfigurationToolsets
* BranchConfigurationToolsets `object`: The branch build configuration for each toolset
  * android `object`: Build configuration for Android projects
    * automaticSigning `boolean`: Whether to apply automatic signing or not
    * buildVariant `string`: The Android build variant to build
    * gradleWrapperPath `string`: Path to the Gradle wrapper script
    * isRoot `boolean`: Whether it is the root module or not
    * keyAlias `string`: The key alias
    * keyPassword `string`: The key password
    * keystoreEncoded `string`: The keystore encoded value
    * keystoreFilename `string`: The name of the keystore file
    * keystorePassword `string`: The password of the keystore
    * module `string`: The Gradle module to build
    * runLint `boolean`: Whether to run lint checks during the build (default)
    * runTests `boolean`: Whether to run unit tests during the build (default)
  * javascript `object`: Build configuration when React Native, or other JavaScript tech, is part of the build steps
    * packageJsonPath `string`: Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
    * reactNativeVersion `string`: Version of React Native from package.json files
    * runTests `boolean`: Whether to run Jest unit tests, via npm test, during the build
  * xamarin `object`: Build configuration for Xamarin projects
    * args `string`
    * configuration `string`
    * isSimBuild `boolean`
    * monoVersion `string`
    * p12File `string`
    * p12Pwd `string`
    * provProfile `string`
    * sdkBundle `string`
    * slnPath `string`
    * symlink `string`: Symlink of the SDK Bundle and Mono installation.
  * xcode `object`: Build configuration when Xcode is part of the build steps
    * appExtensionProvisioningProfileFiles `array`
      * items `object`: Provisioning profile fetch and store information
        * fileId `string`: File id from secure file storage
        * fileName `string`: Name of uploaded provisioning profile
        * targetBundleIdentifier `string`: Target the provisioning profile is used to sign
        * uploadId `string`: Upload id to App Center File Upload Store
    * archiveConfiguration `string`: The build configuration of the target to archive
    * automaticSigning `boolean`
    * cartfilePath `string`: Path to Carthage file, if present
    * certificateEncoded `string`
    * certificateFileId `string`
    * certificateFilename `string`
    * certificatePassword `string`
    * certificateUploadId `string`
    * forceLegacyBuildSystem `boolean`: Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
    * podfilePath `string`: Path to CococaPods file, if present
    * projectOrWorkspacePath `string`: Xcode project/workspace path
    * provisioningProfileEncoded `string`
    * provisioningProfileFileId `string`
    * provisioningProfileFilename `string`
    * provisioningProfileUploadId `string`
    * scheme `string`
    * targetToArchive `string`: The target id of the selected scheme to archive
    * teamId `string`
    * xcodeProjectSha `string`: The selected pbxproject hash to the repositroy
    * xcodeVersion `string`: Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.

### BranchConfigurationWithId
* BranchConfigurationWithId
  * artifactVersioning `object`: The versioning configuration for artifacts built for this branch
    * buildNumberFormat `string` (values: buildId, timestamp)
  * badgeIsEnabled `boolean`
  * cloneFromBranch `string`: A configured branch name to clone from. If provided, all other parameters will be ignored. Only supported in POST requests.
  * signed `boolean`
  * testsEnabled `boolean`
  * toolsets `object`: The branch build configuration for each toolset
    * android `object`: Build configuration for Android projects
      * automaticSigning `boolean`: Whether to apply automatic signing or not
      * buildVariant `string`: The Android build variant to build
      * gradleWrapperPath `string`: Path to the Gradle wrapper script
      * isRoot `boolean`: Whether it is the root module or not
      * keyAlias `string`: The key alias
      * keyPassword `string`: The key password
      * keystoreEncoded `string`: The keystore encoded value
      * keystoreFilename `string`: The name of the keystore file
      * keystorePassword `string`: The password of the keystore
      * module `string`: The Gradle module to build
      * runLint `boolean`: Whether to run lint checks during the build (default)
      * runTests `boolean`: Whether to run unit tests during the build (default)
    * javascript `object`: Build configuration when React Native, or other JavaScript tech, is part of the build steps
      * packageJsonPath `string`: Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
      * reactNativeVersion `string`: Version of React Native from package.json files
      * runTests `boolean`: Whether to run Jest unit tests, via npm test, during the build
    * xamarin `object`: Build configuration for Xamarin projects
      * args `string`
      * configuration `string`
      * isSimBuild `boolean`
      * monoVersion `string`
      * p12File `string`
      * p12Pwd `string`
      * provProfile `string`
      * sdkBundle `string`
      * slnPath `string`
      * symlink `string`: Symlink of the SDK Bundle and Mono installation.
    * xcode `object`: Build configuration when Xcode is part of the build steps
      * appExtensionProvisioningProfileFiles `array`
        * items `object`: Provisioning profile fetch and store information
          * fileId `string`: File id from secure file storage
          * fileName `string`: Name of uploaded provisioning profile
          * targetBundleIdentifier `string`: Target the provisioning profile is used to sign
          * uploadId `string`: Upload id to App Center File Upload Store
      * archiveConfiguration `string`: The build configuration of the target to archive
      * automaticSigning `boolean`
      * cartfilePath `string`: Path to Carthage file, if present
      * certificateEncoded `string`
      * certificateFileId `string`
      * certificateFilename `string`
      * certificatePassword `string`
      * certificateUploadId `string`
      * forceLegacyBuildSystem `boolean`: Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
      * podfilePath `string`: Path to CococaPods file, if present
      * projectOrWorkspacePath `string`: Xcode project/workspace path
      * provisioningProfileEncoded `string`
      * provisioningProfileFileId `string`
      * provisioningProfileFilename `string`
      * provisioningProfileUploadId `string`
      * scheme `string`
      * targetToArchive `string`: The target id of the selected scheme to archive
      * teamId `string`
      * xcodeProjectSha `string`: The selected pbxproject hash to the repositroy
      * xcodeVersion `string`: Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.
  * trigger `string` (values: continous, continuous, manual)
  * id **required** `integer`

### BranchProperties
* BranchProperties `object`: The branch build core properties
  * branch `object`
    * commit **required** `object`
      * sha `string`: The commit SHA
      * url `string`: The URL to the commit
    * name **required** `string`: The branch name
  * enabled `boolean`

### BranchStatus
* BranchStatus `object`: The branch build status
  * configured **required** `boolean`
  * lastBuild `object`
    * buildNumber **required** `string`: The build number
    * finishTime `string`: The time the build was finished
    * id **required** `integer`: The build ID
    * lastChangedDate `string`: The time the build status was last changed
    * queueTime **required** `string`: The time the build was queued
    * result **required** `string`: The build result
    * sourceBranch **required** `string`: The source branch name
    * sourceVersion **required** `string`: The source SHA
    * startTime `string`: The time the build was started
    * status **required** `string`: The build status

### BranchStatusCollection
* BranchStatusCollection `array`: A collection of branch status
  * items `object`: The branch build status
    * configured **required** `boolean`
    * lastBuild `object`
      * buildNumber **required** `string`: The build number
      * finishTime `string`: The time the build was finished
      * id **required** `integer`: The build ID
      * lastChangedDate `string`: The time the build status was last changed
      * queueTime **required** `string`: The time the build was queued
      * result **required** `string`: The build result
      * sourceBranch **required** `string`: The source branch name
      * sourceVersion **required** `string`: The source SHA
      * startTime `string`: The time the build was started
      * status **required** `string`: The build status

### BugTrackerIssueResult
* BugTrackerIssueResult `object`: Object returned in response to getting a bug tracker issue related to a crash group id
  * bug_tracker_type `string` (values: github, vsts, jira)
  * event_type `string`
  * id `string`
  * mobile_center_id `string`
  * repo_name `string`
  * title `string`
  * url `string`

### BugTrackerIssuesResult
* BugTrackerIssuesResult `object`: Returns a list of all issues associated with a repo
  * issues `array`
    * items `object`: Object returned in response to getting a bug tracker issue related to a crash group id
      * bug_tracker_type `string` (values: github, vsts, jira)
      * event_type `string`
      * id `string`
      * mobile_center_id `string`
      * repo_name `string`
      * title `string`
      * url `string`

### BugTrackerStateResult
* BugTrackerStateResult `object`: Object returned in response to getting or updating the state of a bugtracker
  * state `string` (values: enabled, disabled, unauthorized): bugtracker state

### BugTrackerTokenId
* BugTrackerTokenId `object`: Contains the token ID for a bug tracker
  * token_id `string`

### Build
* Build `object`
  * buildNumber **required** `string`: The build number
  * finishTime `string`: The time the build was finished
  * id **required** `integer`: The build ID
  * lastChangedDate `string`: The time the build status was last changed
  * queueTime **required** `string`: The time the build was queued
  * result **required** `string`: The build result
  * sourceBranch **required** `string`: The source branch name
  * sourceVersion **required** `string`: The source SHA
  * startTime `string`: The time the build was started
  * status **required** `string`: The build status

### BuildAgentQueue
* BuildAgentQueue `object`
  * queue **required** `string`

### BuildAgentQueueResponse
* BuildAgentQueueResponse `object`: Queue configured in build definition
  * buildDefinition `string`: Name of the build definition
  * name `string`: Name of the queue

### BuildAgentQueuesResponse
* BuildAgentQueuesResponse `array`: A list of queues configured in build definitions
  * items `object`: Queue configured in build definition
    * buildDefinition `string`: Name of the build definition
    * name `string`: Name of the queue

### BuildConcurrencyResponse
* BuildConcurrencyResponse `object`: Number of pipelines
  * committed_quantity `number`: The number of pipelines committed, which can be equal or greater than the number from the billing plan
  * quantity `number`: The number of pipelines set by the billing plan

### BuildConfiguration
* BuildConfiguration `object`
  * name **required** `string`: Name of build configuration (the same as a build type name)
  * signingConfig `object`: Android signing config. Null if not specified
    * hasStoreFile `boolean`: Indicates if storeFile is specified in the signing configuration

### BuildInfo
* BuildInfo `object`: Contains metadata about the build that produced the release being uploaded
  * branch_name `string`: The branch name of the build producing the release
  * commit_hash `string`: The commit hash of the build producing the release
  * commit_message `string`: The commit message of the build producing the release

### BuildIssue
* BuildIssue `object`
  * category `string`
  * message `string`
  * type `string`

### BuildLog
* BuildLog `object`
  * value `array`
    * items `string`

### BuildParams
* BuildParams `object`
  * debug `boolean`: Run build in debug mode
  * sourceVersion `string`: Version to build which represents the full Git commit reference

### BuildPatch
* BuildPatch `object`
  * status `string` (values: cancelling): The build status; used to cancel builds

### BuildScripts


### BuildServiceStatus
* BuildServiceStatus `object`
  * message `string`
  * os `string`
  * service `string`
  * status `string`
  * url `string`
  * valid_until `integer`

### BuildTimeline
* BuildTimeline `object`
  * id `string`
  * records `array`
    * items `object`
      * currentOperation `string`
      * errorCount `number`
      * finishTime `string`
      * id `string`
      * issues `array`
        * items `object`
          * category `string`
          * message `string`
          * type `string`
      * name `string`
      * order `number`
      * percentComplete `number`
      * result `string`
      * startTime `string`
      * state `string`
      * type `string`
      * warningCount `number`

### BuildTimelineRecord
* BuildTimelineRecord `object`
  * currentOperation `string`
  * errorCount `number`
  * finishTime `string`
  * id `string`
  * issues `array`
    * items `object`
      * category `string`
      * message `string`
      * type `string`
  * name `string`
  * order `number`
  * percentComplete `number`
  * result `string`
  * startTime `string`
  * state `string`
  * type `string`
  * warningCount `number`

### Builds
* Builds `array`: A list of builds
  * items `object`
    * buildNumber **required** `string`: The build number
    * finishTime `string`: The time the build was finished
    * id **required** `integer`: The build ID
    * lastChangedDate `string`: The time the build status was last changed
    * queueTime **required** `string`: The time the build was queued
    * result **required** `string`: The build result
    * sourceBranch **required** `string`: The source branch name
    * sourceVersion **required** `string`: The source SHA
    * startTime `string`: The time the build was started
    * status **required** `string`: The build status

### ClearProperty
* ClearProperty `object`: Clear an existing property.
  * name **required** `string`
  * type **required** `string`

### ClearProperty_Diagnostics
* ClearProperty_Diagnostics `object`: Clear an existing property.
  * name **required** `string`
  * type **required** `string`

### CloseAccountOrganizationResponse
* CloseAccountOrganizationResponse
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at
  * collaborators_count `number`: The number of collaborators from the organization

### CodePushRelease
* CodePushRelease
  * description `string`
  * is_disabled `boolean`
  * is_mandatory `boolean`
  * rollout `integer`
  * target_binary_range `string`
  * blob_url `string`
  * diff_package_map `object`
  * label `string`
  * original_deployment `string`: Set on 'Promote'
  * original_label `string`: Set on 'Promote' and 'Rollback'
  * package_hash `string`
  * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
  * released_by `string`
  * size `number`
  * upload_time `integer`

### CodePushReleaseInfo
* CodePushReleaseInfo `object`
  * description `string`
  * is_disabled `boolean`
  * is_mandatory `boolean`
  * rollout `integer`
  * target_binary_range `string`

### CodePushReleaseLabel
* CodePushReleaseLabel `object`
  * label `string`

### CodePushReleaseMetric
* CodePushReleaseMetric `object`
  * active **required** `integer`
  * downloaded `integer`
  * failed `integer`
  * installed `integer`
  * label **required** `string`

### CodePushReleaseModification
* CodePushReleaseModification
  * description `string`
  * is_disabled `boolean`
  * is_mandatory `boolean`
  * rollout `integer`
  * target_binary_range `string`

### CodePushReleasePromote
* CodePushReleasePromote
  * description `string`
  * is_disabled `boolean`
  * is_mandatory `boolean`
  * rollout `integer`
  * target_binary_range `string`
  * label `string`

### CodePushReleaseUpload
* CodePushReleaseUpload `object`
  * id **required** `string`: The ID for the newly created upload. It is going to be required later in the process.
  * token **required** `string`: The URL encoded token used for upload permissions.
  * upload_domain **required** `string`: The URL domain used to upload the release.

### CodePushStatusMetricMetadata
* CodePushStatusMetricMetadata `object`
  * app_version `string`
  * client_unique_id `string`
  * deployment_key **required** `string`
  * label `string`
  * previous_deployment_key `string`
  * previous_label_or_app_version `string`
  * status `string`

### CodePushUploadedRelease
* CodePushUploadedRelease `object`
  * deployment_name `string`: This specifies which deployment you want to release the update to. Default is Staging.
  * description `string`: This provides an optional "change log" for the deployment.
  * disabled `boolean`: This specifies whether an update should be downloadable by end users or not.
  * mandatory `boolean`: This specifies whether the update should be considered mandatory or not (e.g. it includes a critical security fix).
  * no_duplicate_release_error `boolean`: This specifies that if the update is identical to the latest release on the deployment, the CLI should generate a warning instead of an error.
  * release_upload **required** `object`: The upload metadata from the release initialization step.
    * id **required** `string`: The ID for the newly created upload. It is going to be required later in the process.
    * token **required** `string`: The URL encoded token used for upload permissions.
    * upload_domain **required** `string`: The URL domain used to upload the release.
  * rollout `integer`: This specifies the percentage of users (as an integer between 1 and 100) that should be eligible to receive this update.
  * target_binary_version **required** `string`: the binary version of the application

### Commit
* Commit `object`
  * sha `string`: The commit SHA
  * url `string`: The URL to the commit

### CommitDetails
* CommitDetails `object`
  * sha `string`: The commit SHA
  * url `string`: The URL to the commit
  * commit `object`
    * author `object`
      * date `string`: Date and time of the commit
      * email `string`: Author's email
      * name `string`: Author name
    * message `string`: Commit message

### CommitDetailsList
* CommitDetailsList `array`: A list of commits
  * items `object`
    * sha `string`: The commit SHA
    * url `string`: The URL to the commit
    * commit `object`
      * author `object`
        * date `string`: Date and time of the commit
        * email `string`: Author's email
        * name `string`: Author name
      * message `string`: Commit message

### Crash
* Crash `object`
  * build **required** `string`
  * crash_id **required** `string`
  * details `object`
    * app_start_timestamp `string`: Application launch timestamp (example: 1985-04-12T23:20:50.52Z).
    * carrier_country `string`: Carrier country code (for mobile devices).
    * carrier_name `string`: Carrier name (for mobile devices).
    * locale **required** `string`: Language code (example: en_US).
    * os_build `string`: OS build code (example: LMY47X).
    * rooted **required** `boolean`: Whether the device where the crash occurred is rooted or jailbroken
    * screen_size **required** `string`: Screen size of the device in pixels (example: 640x480).
  * device **required** `string`
  * device_name `string`
  * display_id `string`
  * new_crash_group_id **required** `string`
  * new_crash_id **required** `string`
  * os_type `string`
  * os_version **required** `string`
  * stacktrace [Stacktrace](#stacktrace)
  * timestamp **required** `string`
  * user_email `string`
  * user_name **required** `string`
  * version **required** `string`

### CrashAttachment
* CrashAttachment `object`
  * app_id **required** `string`
  * attachment_id **required** `string`
  * blob_location **required** `string`
  * content_type **required** `string`
  * crash_id **required** `string`
  * created_time **required** `string`
  * file_name **required** `string`
  * size **required** `number`

### CrashAttachmentLocation
* CrashAttachmentLocation `object`: Location for downloading crash attachment
  * uri **required** `string`

### CrashCounts
* CrashCounts `object`
  * count `integer`: Total crash count.
  * crashes `array`: The total crash count for day.
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.

### CrashDeleteCounter
* CrashDeleteCounter `object`
  * app_id `string`
  * attachments_deleted `integer`
  * blobs_failed `integer`
  * blobs_succeeded `integer`
  * crash_group_id `string`
  * crash_id `string`
  * crashes_deleted `integer`

### CrashDetails
* CrashDetails `object`
  * app_start_timestamp `string`: Application launch timestamp (example: 1985-04-12T23:20:50.52Z).
  * carrier_country `string`: Carrier country code (for mobile devices).
  * carrier_name `string`: Carrier name (for mobile devices).
  * locale **required** `string`: Language code (example: en_US).
  * os_build `string`: OS build code (example: LMY47X).
  * rooted **required** `boolean`: Whether the device where the crash occurred is rooted or jailbroken
  * screen_size **required** `string`: Screen size of the device in pixels (example: 640x480).

### CrashFreeDevicePercentages
* CrashFreeDevicePercentages `object`
  * average_percentage `number`: Average percentage.
  * daily_percentages `array`: The crash-free percentage per day.
    * items `object`
      * datetime `string`: The ISO 8601 datetime.
      * percentage `number`: Percentage of the object.

### CrashGroup
* CrashGroup `object`
  * annotation **required** `string`
  * app_version **required** `string`
  * build **required** `string`
  * count **required** `integer`
  * crash_group_id **required** `string`
  * crash_reason **required** `string`
  * display_id **required** `string`
  * exception `string`
  * fatal **required** `boolean`: Crash or handled exception
  * first_occurrence **required** `string`
  * impacted_users `integer`
  * last_occurrence **required** `string`
  * new_crash_group_id **required** `string`
  * reason_frame `object`: frame belonging to the reason of the crash
    * app_code `boolean`: this line isn't from any framework
    * class_method `boolean`: is a class method
    * class_name `string`: name of the class
    * code_formatted `string`: Formatted frame string
    * code_raw `string`: Unformatted Frame string
    * exception_type `string`: Exception type.
    * file `string`: name of the file
    * framework_name `string`: Name of the framework
    * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
    * line `integer`: line number
    * method `string`: name of the method
    * method_params `string`: parameters of the frames method
    * os_exception_type `string`: OS exception type. (aka. SIGNAL)
  * status **required** `string` (values: open, closed, ignored)

### CrashGroupAndVersion
* CrashGroupAndVersion `object`
  * app_version `string`
  * crash_group_id `string`

### CrashGroupCarrier
* CrashGroupCarrier `object`
  * carrier_name `string`: Carrier name.
  * crash_count `integer`: Crash count of carrier.

### CrashGroupCarriers
* CrashGroupCarriers `object`
  * carriers `array`
    * items `object`
      * carrier_name `string`: Carrier name.
      * crash_count `integer`: Crash count of carrier.
  * crash_count `integer`

### CrashGroupChange
* CrashGroupChange `object`
  * annotation `string`
  * status `string` (values: open, closed, ignored)

### CrashGroupContainer
* CrashGroupContainer `object`
  * crash_groups **required** `array`
    * items `object`
      * app_version `string`
      * crash_group_id `string`

### CrashGroupLanguage
* CrashGroupLanguage `object`
  * crash_count `integer`: Count of languages.
  * language_name `string`: Language name.

### CrashGroupLanguages
* CrashGroupLanguages `object`
  * crash_count `integer`
  * languages `array`
    * items `object`
      * crash_count `integer`: Count of languages.
      * language_name `string`: Language name.

### CrashGroupModel
* CrashGroupModel `object`
  * crash_count `integer`: Count of model.
  * model_name `string`: Model's name.

### CrashGroupModels
* CrashGroupModels `object`
  * crash_count `integer`
  * models `array`
    * items `object`
      * crash_count `integer`: Count of model.
      * model_name `string`: Model's name.

### CrashGroupOperatingSystem
* CrashGroupOperatingSystem `object`
  * crash_count `integer`: Count of OS.
  * operating_system_name `string`: OS name.

### CrashGroupOperatingSystems
* CrashGroupOperatingSystems `object`
  * crash_count `integer`
  * operating_systems `array`
    * items `object`
      * crash_count `integer`: Count of OS.
      * operating_system_name `string`: OS name.

### CrashGroupPlace
* CrashGroupPlace `object`
  * crash_count `integer`: Count of places.
  * place_name `string`: Place name.

### CrashGroupPlaces
* CrashGroupPlaces `object`
  * crash_count `integer`
  * places `array`
    * items `object`
      * crash_count `integer`: Count of places.
      * place_name `string`: Place name.

### CrashGroupStatusEnum
* CrashGroupStatusEnum `string` (values: open, closed, ignored)

### CrashGroupsContainer
* CrashGroupsContainer `object`
  * continuation_token `string`: Cassandra request continuation token. The token is used for pagination.
  * crash_groups **required** `array`
    * items `object`
      * annotation **required** `string`
      * app_version **required** `string`
      * build **required** `string`
      * count **required** `integer`
      * crash_group_id **required** `string`
      * crash_reason **required** `string`
      * display_id **required** `string`
      * exception `string`
      * fatal **required** `boolean`: Crash or handled exception
      * first_occurrence **required** `string`
      * impacted_users `integer`
      * last_occurrence **required** `string`
      * new_crash_group_id **required** `string`
      * reason_frame `object`: frame belonging to the reason of the crash
        * app_code `boolean`: this line isn't from any framework
        * class_method `boolean`: is a class method
        * class_name `string`: name of the class
        * code_formatted `string`: Formatted frame string
        * code_raw `string`: Unformatted Frame string
        * exception_type `string`: Exception type.
        * file `string`: name of the file
        * framework_name `string`: Name of the framework
        * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
        * line `integer`: line number
        * method `string`: name of the method
        * method_params `string`: parameters of the frames method
        * os_exception_type `string`: OS exception type. (aka. SIGNAL)
      * status **required** `string` (values: open, closed, ignored)
  * limited_result_set **required** `boolean`

### CrashOverall
* CrashOverall `object`
  * crash_count `integer`
  * device_count `integer`

### CrashRawLocation
* CrashRawLocation `object`: Location for downloading crash raw
  * uri **required** `string`

### CrashesOverall
* CrashesOverall `array`: List of crash groups with overall crashes count and affected users.
  * items `object`
    * app_version `string`
    * crash_group_id `string`
    * overall `object`
      * crash_count `integer`
      * device_count `integer`

### CrashingAppDetail
* CrashingAppDetail `object`
  * appId `string`: application identifier
  * appVersion `string`: application version
  * crashGroupId `string`: crash group identifier

### CreateAccessKeyRequest
* CreateAccessKeyRequest `object`
  * createdBy `string`: Name of creator current access key
  * friendlyName `string`: Friendly name of the access key
  * ttl `number`: Time to live of the access key

### CreateAccessKeyResponse
* CreateAccessKeyResponse `object`
  * accessKey `object`
    * createdBy `string`: Account name of creator.
    * createdTime `number`: Created time of access key
    * description `string`: Description of access key
    * expires `number`: Time of expiry of access key
    * friendlyName `string`: Friendly name of access key
    * id `string`: Id of accessKey
    * isSession `boolean`: Legacy property which indicate if accessKey was created from session
    * name `string`: Key of access key

### CreateGdprTestData
* CreateGdprTestData `object`
  * accountId `string`
  * appId `string`
  * appName `string`
  * userEmail `string`
  * userName `string`

### CreateReleaseUploadResponse
* CreateReleaseUploadResponse `object`
  * id **required** `string`: The ID for the newly created upload. It is going to be required later in the process.
  * package_asset_id **required** `string`: The associated asset ID in the file management service associated with this uploaded.
  * token **required** `string`: The access token used for upload permissions.
  * upload_domain **required** `string`: The URL domain used to upload the release.
  * url_encoded_token **required** `string`: The access token used for upload permissions (URL encoded to use as a single query parameter).

### CreateStoreSecretRequest
* CreateStoreSecretRequest `object`
  * secret_json `object`
    * id_token `string`: the id token of user
    * refresh_token `string`: the refresh token for user
    * refresh_token_expiry `string`: the expiry of refresh token
  * tenant_id `string`: the tenant id for user

### CreateStoreSecretResponse
* CreateStoreSecretResponse `object`
  * secret_id `string`: the secret id for store secret

### CustomProperty
* CustomProperty `object`
  * name **required** `string`
  * type **required** `string`

### CustomPropertyLog
* CustomPropertyLog `object`: Set or remove custom properties.
  * properties `array`: Custom property changes.
    * items `object`
      * name **required** `string`
      * type **required** `string`
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### CustomPropertyLog_Diagnostics
* CustomPropertyLog_Diagnostics `object`: Set or remove custom properties.
  * properties `array`: Custom property changes.
    * items `object`
      * name **required** `string`
      * type **required** `string`
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### CustomProperty_Diagnostics
* CustomProperty_Diagnostics `object`
  * name **required** `string`
  * type **required** `string`

### DailySession
* DailySession `object`
  * count `integer`
  * datetime `string`: The ISO 8601 datetime.

### DataSubjectRighBlobContainerInfo
* DataSubjectRighBlobContainerInfo `object`
  * blobPath **required** `string`
  * sasUri **required** `string`

### DataSubjectRightCustomerIdRequest
* DataSubjectRightCustomerIdRequest `object`
  * dataSubjectIdentifier `string`: customer account id (b2c identifier) / customer user id (free form text) depending on the value of the fied `type`
  * type `string` (values: CustomerAccountId, CustomerUserId): type of the customer dataSubjectIdentifier

### DataSubjectRightEmailRequest
* DataSubjectRightEmailRequest `object`
  * email **required** `string`: Email used for cancel delete with x-authz-bypass headers

### DataSubjectRightOperation
* DataSubjectRightOperation `object`
  * appId `string`: Application identifier if applicable
  * context **required** `string`: JSON object decribing what to delete (TODO - make separate definition?)
  * operationId **required** `string`: Unique operation identifier
  * participant **required** `string`: Participant to execute the response
  * participantData `string`: String field to be used by participant for any intermediate statuses or data they need to save
  * requestId **required** `string`: Unique request identifier
  * requestType **required** `string` (values: Unsupported, Delete, Purge, UndoDelete, Scheduled, AppDelete, AppPurge, AppUndoDelete, Export, CustomerAccountDelete, CustomerAccountExport, CustomerUserDelete, CustomerUserExport): Request type
  * status **required** `string` (values: None, Created, Queued, InProgress, Completed, Failed): Operation status

### DataSubjectRightQueueInfo
* DataSubjectRightQueueInfo `object`
  * expiresAt **required** `string`
  * queueName **required** `string`
  * sasUri **required** `string`

### DataSubjectRightResponse
* DataSubjectRightResponse `object`
  * createdAt **required** `string`: ISO 8601 format timestamp of when request was created.
  * token **required** `string`: Unique request identifier

### DataSubjectRightStatusResponse
* DataSubjectRightStatusResponse `object`
  * message **required** `string`: explanation message of the status
  * sasUrl `string`: Azure Storage shared access signature (SAS) URL for exported user data.
  * sasUrlExpired `boolean`: Whether Azure Storage shared access signature (SAS) URL has expired or not.
  * status **required** `string` (values: None, Created, Queued, InProgress, Completed, Failed): Status of data subject right request

### DataSubjectRightUpdateStatusOperation
* DataSubjectRightUpdateStatusOperation `object`
  * participantData `string`: String field to be used by participant for any intermediate statuses or data they need to save
  * requestId **required** `string`: Request identifier of the operation
  * status **required** `string` (values: None, Created, Queued, InProgress, Completed, Failed): Operation status

### DateTimeCounts
* DateTimeCounts `object`
  * count `integer`: Count of the object.
  * datetime `string`: The ISO 8601 datetime.

### DateTimeDecimalCounts
* DateTimeDecimalCounts `object`
  * count `number`: Decimal count of the object.
  * datetime `string`: The ISO 8601 datetime.

### DateTimeDownloadReleaseCount
* DateTimeDownloadReleaseCount `object`
  * datetime `string`: The ISO 8601 datetime.
  * total `integer`
  * unique `integer`

### DateTimeDownloadReleaseCounts
* DateTimeDownloadReleaseCounts `object`
  * counts `array`: Release counts per day.
    * items `object`
      * datetime `string`: The ISO 8601 datetime.
      * total `integer`
      * unique `integer`
  * total `integer`
  * unique `integer`

### DateTimePercentages
* DateTimePercentages `object`
  * datetime `string`: The ISO 8601 datetime.
  * percentage `number`: Percentage of the object.

### DateTimeProperty
* DateTimeProperty `object`: Date and time property.
  * value **required** `string`: Date time property value.
  * name **required** `string`
  * type **required** `string`

### DateTimeProperty_Diagnostics
* DateTimeProperty_Diagnostics `object`: Date and time property.
  * value **required** `string`: Date time property value.
  * name **required** `string`
  * type **required** `string`

### DeleteReleasesContainer
* DeleteReleasesContainer `object`
  * releases **required** `array`
    * items `object`
      * release **required** `string`: Release Id.

### Deployment
* Deployment `object`
  * key `string`
  * latest_release
    * description `string`
    * is_disabled `boolean`
    * is_mandatory `boolean`
    * rollout `integer`
    * target_binary_range `string`
    * blob_url `string`
    * diff_package_map `object`
    * label `string`
    * original_deployment `string`: Set on 'Promote'
    * original_label `string`: Set on 'Promote' and 'Rollback'
    * package_hash `string`
    * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
    * released_by `string`
    * size `number`
    * upload_time `integer`
  * name **required** `string`

### DeploymentInternal
* DeploymentInternal `object`
  * id `string`
  * key `string`
  * latest_release
    * description `string`
    * is_disabled `boolean`
    * is_mandatory `boolean`
    * rollout `integer`
    * target_binary_range `string`
    * blob_url `string`
    * diff_package_map `object`
    * label `string`
    * original_deployment `string`: Set on 'Promote'
    * original_label `string`: Set on 'Promote' and 'Rollback'
    * package_hash `string`
    * release_method `string` (values: Upload, Promote, Rollback): The release method is unknown if unspecified
    * released_by `string`
    * size `number`
    * upload_time `integer`
  * name **required** `string`

### DeploymentModification
* DeploymentModification `object`
  * name **required** `string`

### Destination
* Destination
  * id **required** `string`: ID identifying a unique distribution group.
  * name `string`: A name identifying a unique distribution group.
  * is_latest `boolean`: Is the containing release the latest one in this distribution group.
  * id **required** `string`: ID identifying a unique distribution store.
  * name `string`: A name identifying a unique distribution store.
  * publishing_status `string`: publishing status of the release in the store.
  * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
  * is_latest `boolean`: Is the containing release the latest one in this distribution store.
  * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
  * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
  * destination_type `string` (values: group, store, tester): Destination can be either store or group.
  * display_name `string`: Display name for the group or tester

### DestinationDetails
* DestinationDetails `object`: Destination details for distributing build releases
  * id **required** `string`
  * type **required** `string` (values: store, group, tester)

### DestinationError
* DestinationError `object`
  * code `string`: Error Codes:<br>
  * id `string`
  * message `string`
  * name `string`

### DestinationId
* DestinationId `object`: A unique identifier for a destination. A destination can be identified by an ID (guid) or by a name. DestinationId encapsulates both options. A destination can be either a distribution group or a store.
  * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
  * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.

### Device
* Device `object`: Device characteristics.
  * app_build **required** `string`: The app's build number, e.g. 42.
  * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
  * app_version **required** `string`: Application version name, e.g. 1.1.0
  * carrier_code `string`: Carrier country code (for mobile devices).
  * carrier_country `string`: Carrier country.
  * carrier_name `string`: Carrier name (for mobile devices).
  * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
  * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
  * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
  * locale **required** `string`: Language code (example: en_US).
  * model `string`: Device model (example: iPad2,3).
  * oem_name `string`: Device manufacturer (example: HTC).
  * os_api_level `integer`: API level when applicable like in Android (example: 15).
  * os_build `string`: OS build code (example: LMY47X).
  * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
  * os_version **required** `string`: OS version (example: 9.3.0).
  * screen_size `string`: Screen size of the device in pixels (example: 640x480).
  * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
  * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
  * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
  * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
  * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
  * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.

### DeviceAvailability
* DeviceAvailability `object`: ...
  * available **required** `number`
  * maximum **required** `number`
  * registered **required** `number`

### DeviceConfiguration
* DeviceConfiguration `object`
  * id `string`: The unique id of the device configuration
  * image `object`
    * full `string`
    * thumb `string`
  * marketShare `number`
  * model `object`
    * availabilityCount `number`
    * cpu `object`: CPU data for device
      * core `string`
      * frequency `string`
      * text `string`
    * deviceFrame `object`
      * full `object`
        * frameUrl `string`
        * height `number`
        * screen `array`
          * items `number`
        * width `number`
      * grid `object`
        * frameUrl `string`
        * height `number`
        * screen `array`
          * items `number`
        * width `number`
    * dimensions `object`: Physical device dimensions
      * depth `object`
      * height `object`
      * width `object`
    * formFactor `string`
    * manufacturer `string`
    * memory `object`: Memory data for device
      * formattedSize `string`
    * model `string`
    * name `string`
    * platform `string`
    * releaseDate `string`
    * resolution `object`: Device screen resolution
      * height `string`
      * ppi `string`
      * width `string`
    * screenRotation `number`
    * screenSize `object`: Physical device screen dimensions
      * cm `string`
      * in `string`
  * name `string`: The name of the device model and OS version
  * os `string`
  * osName `string`
  * tier `number`: The tier

### DeviceConfigurationResponse
* DeviceConfigurationResponse `object`: A response containing the fully encoded binary blob for a mobileconfig
  * data_url **required** `string`: A data URL containing a signed mobileconfig profile

### DeviceCpu
* DeviceCpu `object`: CPU data for device
  * core `string`
  * frequency `string`
  * text `string`

### DeviceDimensions
* DeviceDimensions `object`: Physical device dimensions
  * depth `object`
  * height `object`
  * width `object`

### DeviceFrame
* DeviceFrame `object`
  * full `object`
    * frameUrl `string`
    * height `number`
    * screen `array`
      * items `number`
    * width `number`
  * grid `object`
    * frameUrl `string`
    * height `number`
    * screen `array`
      * items `number`
    * width `number`

### DeviceFrameDefinition
* DeviceFrameDefinition `object`
  * frameUrl `string`
  * height `number`
  * screen `array`
    * items `number`
  * width `number`

### DeviceInfoRequest
* DeviceInfoRequest `object`: The information for a single iOS device
  * imei `string`: The device's International Mobile Equipment Identity number. Always empty or undefined at present.
  * model **required** `string`: The model identifier of the device, in the format iDeviceM,N
  * os_build `string`: The build number of the last known OS version running on the device
  * os_version `string`: The last known OS version running on the device
  * owner_id `string`: The user ID of the device owner.
  * serial `string`: The device's serial number. Always empty or undefined at present.
  * udid **required** `string`: The Unique Device IDentifier of the device

### DeviceInfoResponse
* DeviceInfoResponse `object`: The information for a single iOS device
  * device_name **required** `string`: The device description, in the format "iPhone 7 Plus (A1784)"
  * full_device_name `string`: A combination of the device model name and the owner name.
  * imei `string`: The device's International Mobile Equipment Identity number. Always empty or undefined at present.
  * model **required** `string`: The model identifier of the device, in the format iDeviceM,N
  * os_build **required** `string`: The last known OS version running on the device
  * os_version **required** `string`: The last known OS version running on the device
  * owner_id `string`: The user ID of the device owner.
  * registered_at `string`: Timestamp of when the device was registered in ISO format.
  * serial `string`: The device's serial number. Always empty or undefined at present.
  * status **required** `string`: The provisioning status of the device.
  * udid **required** `string`: The Unique Device IDentifier of the device

### DeviceList
* Device List `object`: A list of device IDs
  * devices **required** `array`
    * items `string`

### DeviceMemory
* DeviceMemory `object`: Memory data for device
  * formattedSize `string`

### DeviceModel
* DeviceModel `object`
  * availabilityCount `number`
  * cpu `object`: CPU data for device
    * core `string`
    * frequency `string`
    * text `string`
  * deviceFrame `object`
    * full `object`
      * frameUrl `string`
      * height `number`
      * screen `array`
        * items `number`
      * width `number`
    * grid `object`
      * frameUrl `string`
      * height `number`
      * screen `array`
        * items `number`
      * width `number`
  * dimensions `object`: Physical device dimensions
    * depth `object`
    * height `object`
    * width `object`
  * formFactor `string`
  * manufacturer `string`
  * memory `object`: Memory data for device
    * formattedSize `string`
  * model `string`
  * name `string`
  * platform `string`
  * releaseDate `string`
  * resolution `object`: Device screen resolution
    * height `string`
    * ppi `string`
    * width `string`
  * screenRotation `number`
  * screenSize `object`: Physical device screen dimensions
    * cm `string`
    * in `string`

### DeviceRegistrationUrl
* DeviceRegistrationUrl `object`: The url that can be navigated to in order to start the device registration process.
  * registration_url **required** `string`: The url that can be navigated to in order to start the device registration process.

### DeviceResolution
* DeviceResolution `object`: Device screen resolution
  * height `string`
  * ppi `string`
  * width `string`

### DeviceScreenSize
* DeviceScreenSize `object`: Physical device screen dimensions
  * cm `string`
  * in `string`

### DeviceSelection
* Device Selection `object`: Short ID for a list of device IDs
  * shortId **required** `string`: Identifier of the device selection

### DeviceSet
* Device Set `object`: The name and devices of the device set
  * deviceConfigurations **required** `array`
    * items `object`
      * id `string`: The unique id of the device configuration
      * image `object`
        * thumb `string`
      * model `object`
        * formFactor `string`
        * manufacturer `string`
        * name `string`
        * releaseDate `string`
      * os `string`
      * osName `string`
  * id **required** `string`: Identifier of the device set
  * manufacturerCount `number`: The number of manufacturers in the device set's device selection
  * name **required** `string`: Name of the device set
  * osVersionCount `number`: The number of os versions in the device set's device selection
  * owner **required** `object`: The owner of a device set
    * displayName `string`: Display name of the account
    * id **required** `string`: Account ID
    * name **required** `string`: Name of the account
    * type **required** `string`: Type of account
  * slug `string`: Slug of the device set

### DeviceSetConfiguration
* DeviceSetConfiguration `object`
  * id `string`: The unique id of the device configuration
  * image `object`
    * thumb `string`
  * model `object`
    * formFactor `string`
    * manufacturer `string`
    * name `string`
    * releaseDate `string`
  * os `string`
  * osName `string`

### DeviceSetModel
* DeviceSetModel `object`
  * formFactor `string`
  * manufacturer `string`
  * name `string`
  * releaseDate `string`

### DeviceSetOwner
* Device Set Owner `object`: The owner of a device set
  * displayName `string`: Display name of the account
  * id **required** `string`: Account ID
  * name **required** `string`: Name of the account
  * type **required** `string`: Type of account

### DeviceSetUpdate
* Device Set update information `object`: The name of the device set and the list of device IDs
  * devices **required** `array`: List of device IDs
    * items `string`
  * name **required** `string`: The name of the device set

### Device_Diagnostics
* Device_Diagnostics `object`: Device characteristics.
  * app_build **required** `string`: The app's build number, e.g. 42.
  * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
  * app_version **required** `string`: Application version name, e.g. 1.1.0
  * carrier_code `string`: Carrier country code (for mobile devices).
  * carrier_country `string`: Carrier country.
  * carrier_name `string`: Carrier name (for mobile devices).
  * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
  * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
  * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
  * locale **required** `string`: Language code (example: en_US).
  * model `string`: Device model (example: iPad2,3).
  * oem_name `string`: Device manufacturer (example: HTC).
  * os_api_level `integer`: API level when applicable like in Android (example: 15).
  * os_build `string`: OS build code (example: LMY47X).
  * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
  * os_version **required** `string`: OS version (example: 9.3.0).
  * screen_size `string`: Screen size of the device in pixels (example: 640x480).
  * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
  * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
  * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
  * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
  * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
  * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.

### DiagnosticIdResponse
* DiagnosticIdResponse `object`: The diagnostic id for the given publish action
  * diagnostic_id `string`: diagnostic id

### DiagnosticsException
* DiagnosticsException `object`: a exception
  * frames **required** `array`: frames of the excetpion
    * items `object`: a single frame of a stack trace
      * address `string`: address of the frame
      * app_code **required** `boolean`: this line isn't from any framework
      * class_method `boolean`: is a class method
      * class_name `string`: name of the class
      * code_formatted **required** `string`: Formatted frame string
      * code_raw **required** `string`: Raw frame string
      * file `string`: name of the file
      * framework_name `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * method_params `string`: parameters of the frames method
      * relevant `boolean`: frame should be shown always
  * inner_exceptions `array`
    * items [DiagnosticsException](#diagnosticsexception)
  * platform `string` (values: ios, android, xamarin, react-native, ndk, unity, other): SDK/Platform this thread is beeing generated from
  * reason `string`: Reason of the exception
  * relevant `boolean`: relevant exception (crashed)
  * type `string`: Type of the exception (NSSomethingException, NullPointerException)

### DiagnosticsStackFrame
* DiagnosticsStackFrame `object`: a single frame of a stack trace
  * address `string`: address of the frame
  * app_code **required** `boolean`: this line isn't from any framework
  * class_method `boolean`: is a class method
  * class_name `string`: name of the class
  * code_formatted **required** `string`: Formatted frame string
  * code_raw **required** `string`: Raw frame string
  * file `string`: name of the file
  * framework_name `string`: Name of the framework
  * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
  * line `integer`: line number
  * method `string`: name of the method
  * method_params `string`: parameters of the frames method
  * relevant `boolean`: frame should be shown always

### DiagnosticsStackTrace
* DiagnosticsStackTrace `object`: a stacktrace in a processed and prettyfied way
  * exception [DiagnosticsException](#diagnosticsexception)
  * reason `string`
  * threads `array`
    * items [DiagnosticsThread](#diagnosticsthread)
  * title `string`

### DiagnosticsThread
* DiagnosticsThread `object`: a thread representation
  * crashed `boolean`: True if this thread crashed
  * exception [DiagnosticsException](#diagnosticsexception)
  * frames **required** `array`: frames of that thread
    * items `object`: a single frame of a stack trace
      * address `string`: address of the frame
      * app_code **required** `boolean`: this line isn't from any framework
      * class_method `boolean`: is a class method
      * class_name `string`: name of the class
      * code_formatted **required** `string`: Formatted frame string
      * code_raw **required** `string`: Raw frame string
      * file `string`: name of the file
      * framework_name `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * method_params `string`: parameters of the frames method
      * relevant `boolean`: frame should be shown always
  * platform `string` (values: ios, android, xamarin, react-native, ndk, unity, other): SDK/Platform this thread is beeing generated from
  * relevant `boolean`: Shows if a thread is relevant or not. Is false if all frames are non relevant, otherwise true
  * title **required** `string`: name of the thread

### DistributionGroup
* DistributionGroup
  * id **required** `string`: ID identifying a unique distribution group.
  * name `string`: A name identifying a unique distribution group.
  * is_latest `boolean`: Is the containing release the latest one in this distribution group.

### DistributionGroupAADGroupBase
* DistributionGroupAADGroupBase `object`
  * aad_group_id `string`: The id of the aad group
  * display_name `string`: The display name of the aad group

### DistributionGroupAADGroupPostResponse
* DistributionGroupAADGroupPostResponse `object`
  * aad_group_id `string`: The AAD unique id (UUID) of the AAD group.
  * display_name `string`: The display name of the AAD group
  * id `string`: The internal unique id (UUID) of the AAD group.

### DistributionGroupAADGroupRequest
* DistributionGroupAADGroupRequest `object`
  * aad_groups `array`: The list of aad group ids and names to add
    * items `object`
      * aad_group_id `string`: The id of the aad group
      * display_name `string`: The display name of the aad group

### DistributionGroupAADGroupResponse
* DistributionGroupAADGroupResponse `object`
  * aad_group_id `string`: The AAD unique id (UUID) of the AAD group.
  * display_name `string`: The display name of the AAD group
  * distribution_group_name `string`: The distribution group of the AAD group
  * id `string`: The internal unique id (UUID) of the AAD group.
  * is_aad_group `boolean`

### DistributionGroupAADGroupsDeleteRequest
* DistributionGroupAADGroupsDeleteRequest `object`
  * aad_group_ids `array`: The list of aad group ids
    * items `string`

### DistributionGroupAadGroupsDeleteResponse
* DistributionGroupAadGroupsDeleteResponse `object`
  * aad_group_id `string`: The aad id of the group
  * code `string`: The code of the result
  * message `integer`: The message of the result
  * status **required** `integer`: The status code of the result

### DistributionGroupAppAddRequest
* DistributionGroupAppAddRequest `object`
  * apps `array`: The list of apps to add to distribution group
    * items `object`
      * name **required** `string`: The name of the app to be added to the distribution group

### DistributionGroupAppsDeleteRequest
* DistributionGroupAppsDeleteRequest `object`
  * apps `array`: The list of apps to delete from the distribution group
    * items `object`
      * name **required** `string`: The name of the app to be deleted from the distribution group

### DistributionGroupDetailsResponse
* DistributionGroupDetailsResponse
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group
  * group_type `string` (values: Default, HockeyAppDefault, MicrosoftDogfooding): Type of group (Default, HockeyAppDefault or MicrosoftDogfooding)
  * is_shared `boolean`: Whether the distribution group is shared group or not
  * notified_user_count `number`: The count of non-pending users in the distribution group who will be notified by new releases
  * total_apps_count `number`: The count of apps associated with this distribution group
  * total_user_count `number`: The count of users in the distribution group
  * users `array`: The distribution group users
    * items `object`
      * avatar_url `string`: The avatar URL of the user
      * can_change_password `boolean`: User is required to send an old password in order to change the password.
      * display_name `string`: The full name of the user. Might for example be first and last name
      * email **required** `string`: The email address of the user
      * id `string`: The unique id (UUID) of the user
      * invite_pending `boolean`: Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
      * name `string`: The unique name that is used to identify the user.

### DistributionGroupPatchRequest
* DistributionGroupPatchRequest `object`
  * is_public `boolean`: Whether the distribution group is public
  * name `string`: The name of the distribution group

### DistributionGroupPrivateResponse
* DistributionGroupPrivateResponse
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group
  * group_type `string` (values: Default, HockeyAppDefault, MicrosoftDogfooding): Type of group

### DistributionGroupRelease
* DistributionGroupRelease `object`: Response for getting a list of releases in a distribution group
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * id **required** `integer`: ID identifying this unique release.
  * is_external_build `boolean`: This value determines if a release is external or not.
  * mandatory_update **required** `boolean`: A boolean which determines whether the release is a mandatory update or not.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * short_version **required** `string`: The release's short version.<br>
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>

### DistributionGroupReleasesResponse
* DistributionGroupReleasesResponse `array`: Response for getting a list of releases in a distribution group
  * items `object`: Response for getting a list of releases in a distribution group
    * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
    * id **required** `integer`: ID identifying this unique release.
    * is_external_build `boolean`: This value determines if a release is external or not.
    * mandatory_update **required** `boolean`: A boolean which determines whether the release is a mandatory update or not.
    * origin `string` (values: hockeyapp, appcenter): The release's origin
    * short_version **required** `string`: The release's short version.<br>
    * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
    * version **required** `string`: The release's version.<br>

### DistributionGroupRequest
* DistributionGroupRequest `object`
  * display_name `string`: The display name of the distribution group. If not specified, the name will be used.
  * name **required** `string`: The name of the distribution group

### DistributionGroupResponse
* DistributionGroupResponse `object`
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group

### DistributionGroupTesterGetResponse
* DistributionGroupTesterGetResponse `object`
  * display_name `string`: The full name of the tester. Might for example be first and last name
  * email **required** `string`: The email address of the tester
  * name **required** `string`: The unique name that is used to identify the tester.

### DistributionGroupUserDeleteResponse
* DistributionGroupUserDeleteResponse `object`
  * code `string`: The code of the result
  * message `integer`: The message of the result
  * status **required** `integer`: The status code of the result
  * user_email `string`: The email of the user

### DistributionGroupUserGetResponse
* DistributionGroupUserGetResponse `object`
  * avatar_url `string`: The avatar URL of the user
  * can_change_password `boolean`: User is required to send an old password in order to change the password.
  * display_name `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * id `string`: The unique id (UUID) of the user
  * invite_pending `boolean`: Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
  * name `string`: The unique name that is used to identify the user.

### DistributionGroupUserPostResponse
* DistributionGroupUserPostResponse `object`
  * code `string`: The code of the result
  * invite_pending `boolean`: Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
  * message `string`: The message of the result
  * status **required** `integer`: The status code of the result
  * user_email `string`: The email of the user

### DistributionGroupUserRequest
* DistributionGroupUserRequest `object`
  * user_emails `array`: The list of emails of the users
    * items `string`

### DistributionGroupWithUsersResponse
* DistributionGroupWithUsersResponse `object`
  * aad_groups `array`: The distribution group aad groups
    * items `object`
      * aad_group_id `string`: The AAD unique id (UUID) of the AAD group.
      * display_name `string`: The display name of the AAD group
      * id `string`: The internal unique id (UUID) of the AAD group.
  * id **required** `string`: The unique ID of the distribution group
  * is_public `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * notified_user_count **required** `number`: The count of non-pending users in the distribution group who will be notified by new releases
  * total_groups_count `number`: The count of aad groups in the distribution group
  * total_user_count **required** `number`: The count of users in the distribution group
  * users **required** `array`: The distribution group users
    * items `object`
      * avatar_url `string`: The avatar URL of the user
      * can_change_password `boolean`: User is required to send an old password in order to change the password.
      * display_name `string`: The full name of the user. Might for example be first and last name
      * email **required** `string`: The email address of the user
      * id `string`: The unique id (UUID) of the user
      * invite_pending `boolean`: Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
      * name `string`: The unique name that is used to identify the user.

### DistributionGroupWithoutIsLatest
* DistributionGroupWithoutIsLatest `object`
  * id **required** `string`: ID identifying a unique distribution group.
  * name `string`: A name identifying a unique distribution group.

### DistributionGroupsUserVerifyRequest
* DistributionGroupsUserVerifyRequest `object`
  * distribution_group_ids **required** `array`: An array of distribution group ids
    * items `string`: The id of the distribution group

### DistributionRequest
* DistributionRequest `object`
  * destinations `array`: Array of objects {id:string, type:string} with "id" being the distribution group ID, store ID, or tester email, and "type" being "group", "store", or "tester"
    * items `object`: Destination details for distributing build releases
      * id **required** `string`
      * type **required** `string` (values: store, group, tester)
  * mandatoryUpdate `boolean`
  * notifyTesters `boolean`
  * releaseNotes `string`: The release notes

### DistributionResponse
* DistributionResponse `object`
  * status `string`: Status of the Request
  * upload_id `string`: A unique ID of the upload

### DistributionSettingsResponse
* DistributionSettingsResponse `object`
  * default_public **required** `boolean`: Is this app using the "Default to Public Distribution Groups" logic

### DistributionStartSessionLog
* DistributionStartSessionLog `object`: Log is used to update distribution group identifier for session (a marker event for analytics service).
  * distribution_group_id **required** `string`: Distribution Group ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### DistributionStore
* DistributionStore
  * id **required** `string`: ID identifying a unique distribution store.
  * name `string`: A name identifying a unique distribution store.
  * publishing_status `string`: publishing status of the release in the store.
  * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
  * is_latest `boolean`: Is the containing release the latest one in this distribution store.

### DistributionStoreWithoutIsLatest
* DistributionStoreWithoutIsLatest `object`
  * id **required** `string`: ID identifying a unique distribution store.
  * name `string`: A name identifying a unique distribution store.
  * publishing_status `string`: publishing status of the release in the store.
  * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.

### DownloadContainer
* DownloadContainer `object`: A download reference
  * uri **required** `string`: Download URI

### EmailVerificationRequest
* EmailVerificationRequest `object`
  * token **required** `string`: The verification token that was sent to the user

### Error
* Error `object`: Error
  * error `object`
    * code `integer` (values: 400, 403, 500): The status code return by the API. It can be 400 or 403 or 500.
    * message `string`: The reason for the request failed.

### ErrorAppBuilds
* ErrorAppBuilds `object`
  * appBuilds `array`
    * items `string`

### ErrorAttachment
* ErrorAttachment `object`
  * appId `string`
  * attachmentId `string`
  * blobLocation `string`
  * contentType `string`
  * crashId `string`
  * createdTime `string`
  * fileName `string`
  * size `integer`

### ErrorAttachmentLocation
* ErrorAttachmentLocation `object`
  * uri `string`

### ErrorAttachmentText
* ErrorAttachmentText `object`
  * content `string`

### ErrorAttachments
* ErrorAttachments `array`
  * items `object`
    * appId `string`
    * attachmentId `string`
    * blobLocation `string`
    * contentType `string`
    * crashId `string`
    * createdTime `string`
    * fileName `string`
    * size `integer`

### ErrorCounts
* ErrorCounts `object`
  * count `integer`: total error count
  * errors `array`: the total error count for day
    * items `object`
      * count `integer`: count of the object
      * datetime `string`: the ISO 8601 datetime

### ErrorDateTimeCounts
* ErrorDateTimeCounts `object`
  * count `integer`: count of the object
  * datetime `string`: the ISO 8601 datetime

### ErrorDateTimePercentages
* ErrorDateTimePercentages `object`
  * datetime `string`: the ISO 8601 datetime
  * percentage `number`: percentage of the object

### ErrorDeleteCounter
* ErrorDeleteCounter `object`
  * appId `string`
  * attachmentsDeleted `integer`
  * blobsFailed `integer`
  * blobsSucceeded `integer`
  * errorGroupId `string`
  * errorId `string`
  * errorsDeleted `integer`

### ErrorDetails
* ErrorDetails `object`
  * code **required** `string` (values: BadRequest, Conflict, NotAcceptable, NotFound, InternalServerError, Unauthorized, TooManyRequests)
  * message **required** `string`

### ErrorDetailsv2
* ErrorDetailsv2 `object`
  * code **required** `string` (values: BadRequest, Conflict, NotAcceptable, NotFound, InternalServerError, Unauthorized)
  * message **required** `string`

### ErrorDownload
* ErrorDownload `object`

### ErrorDownloadLink
* ErrorDownloadLink `object`
  * link **required** `string`

### ErrorFreeDevicePercentages
* ErrorFreeDevicePercentages `object`
  * averagePercentage `number`: Average percentage
  * dailyPercentages `array`: The error-free percentage per day.
    * items `object`
      * datetime `string`: the ISO 8601 datetime
      * percentage `number`: percentage of the object

### ErrorGroup
* ErrorGroup `object`
  * appBuild `string`
  * appVersion **required** `string`
  * codeRaw `string`
  * count **required** `integer`
  * deviceCount **required** `integer`
  * errorGroupId **required** `string`
  * exceptionAppCode `boolean`
  * exceptionClassMethod `boolean`
  * exceptionClassName `string`
  * exceptionFile `string`
  * exceptionLine `string`
  * exceptionMessage `string`
  * exceptionMethod `string`
  * exceptionType `string`
  * firstOccurrence **required** `string`
  * hidden `boolean`
  * lastOccurrence **required** `string`
  * reasonFrames `array`
    * items `object`
      * appCode `boolean`: this line isn't from any framework
      * classMethod `boolean`: is a class method
      * className `string`: name of the class
      * codeFormatted `string`: Formatted frame string
      * codeRaw `string`: Unformatted Frame string
      * exceptionType `string`: Exception type.
      * file `string`: name of the file
      * frameworkName `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * methodParams `string`: parameters of the frames method
      * osExceptionType `string`: OS exception type. (aka. SIGNAL)
  * annotation `string`
  * state **required** `string` (values: open, closed, ignored)

### ErrorGroupListItem
* ErrorGroupListItem `object`
  * appBuild `string`
  * appVersion **required** `string`
  * codeRaw `string`
  * count **required** `integer`
  * deviceCount **required** `integer`
  * errorGroupId **required** `string`
  * exceptionAppCode `boolean`
  * exceptionClassMethod `boolean`
  * exceptionClassName `string`
  * exceptionFile `string`
  * exceptionLine `string`
  * exceptionMessage `string`
  * exceptionMethod `string`
  * exceptionType `string`
  * firstOccurrence **required** `string`
  * hidden `boolean`
  * lastOccurrence **required** `string`
  * reasonFrames `array`
    * items `object`
      * appCode `boolean`: this line isn't from any framework
      * classMethod `boolean`: is a class method
      * className `string`: name of the class
      * codeFormatted `string`: Formatted frame string
      * codeRaw `string`: Unformatted Frame string
      * exceptionType `string`: Exception type.
      * file `string`: name of the file
      * frameworkName `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * methodParams `string`: parameters of the frames method
      * osExceptionType `string`: OS exception type. (aka. SIGNAL)
  * annotation `string`
  * state **required** `string` (values: open, closed, ignored)

### ErrorGroupModel
* ErrorGroupModel `object`
  * errorCount `integer`: count of errors in a model
  * modelCode `string`: model code
  * modelName `string`: model name

### ErrorGroupModels
* ErrorGroupModels `object`
  * errorCount `integer`
  * models `array`
    * items `object`
      * errorCount `integer`: count of errors in a model
      * modelCode `string`: model code
      * modelName `string`: model name

### ErrorGroupOperatingSystem
* ErrorGroupOperatingSystem `object`
  * errorCount `integer`: count of OS
  * operatingSystemName `string`: OS name

### ErrorGroupOperatingSystems
* ErrorGroupOperatingSystems `object`
  * errorCount `integer`
  * operatingSystems `array`
    * items `object`
      * errorCount `integer`: count of OS
      * operatingSystemName `string`: OS name

### ErrorGroupState
* ErrorGroupState `object`
  * annotation `string`
  * state **required** `string` (values: open, closed, ignored)

### ErrorGroups
* ErrorGroups `object`
  * errorGroups `array`
    * items `object`
      * appBuild `string`
      * appVersion **required** `string`
      * codeRaw `string`
      * count **required** `integer`
      * deviceCount **required** `integer`
      * errorGroupId **required** `string`
      * exceptionAppCode `boolean`
      * exceptionClassMethod `boolean`
      * exceptionClassName `string`
      * exceptionFile `string`
      * exceptionLine `string`
      * exceptionMessage `string`
      * exceptionMethod `string`
      * exceptionType `string`
      * firstOccurrence **required** `string`
      * hidden `boolean`
      * lastOccurrence **required** `string`
      * reasonFrames `array`
        * items `object`
          * appCode `boolean`: this line isn't from any framework
          * classMethod `boolean`: is a class method
          * className `string`: name of the class
          * codeFormatted `string`: Formatted frame string
          * codeRaw `string`: Unformatted Frame string
          * exceptionType `string`: Exception type.
          * file `string`: name of the file
          * frameworkName `string`: Name of the framework
          * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
          * line `integer`: line number
          * method `string`: name of the method
          * methodParams `string`: parameters of the frames method
          * osExceptionType `string`: OS exception type. (aka. SIGNAL)
      * annotation `string`
      * state **required** `string` (values: open, closed, ignored)
  * nextLink `string`

### ErrorGroupsSearchResult
* ErrorGroupsSearchResult `object`
  * errorGroups `array`
    * items `object`
      * appBuild `string`
      * appVersion **required** `string`
      * codeRaw `string`
      * count **required** `integer`
      * deviceCount **required** `integer`
      * errorGroupId **required** `string`
      * exceptionAppCode `boolean`
      * exceptionClassMethod `boolean`
      * exceptionClassName `string`
      * exceptionFile `string`
      * exceptionLine `string`
      * exceptionMessage `string`
      * exceptionMethod `string`
      * exceptionType `string`
      * firstOccurrence **required** `string`
      * hidden `boolean`
      * lastOccurrence **required** `string`
      * reasonFrames `array`
        * items `object`
          * appCode `boolean`: this line isn't from any framework
          * classMethod `boolean`: is a class method
          * className `string`: name of the class
          * codeFormatted `string`: Formatted frame string
          * codeRaw `string`: Unformatted Frame string
          * exceptionType `string`: Exception type.
          * file `string`: name of the file
          * frameworkName `string`: Name of the framework
          * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
          * line `integer`: line number
          * method `string`: name of the method
          * methodParams `string`: parameters of the frames method
          * osExceptionType `string`: OS exception type. (aka. SIGNAL)
      * annotation `string`
      * state **required** `string` (values: open, closed, ignored)
  * hasMoreResults `boolean`

### ErrorLocation
* ErrorLocation `object`
  * uri `string`

### ErrorLog
* ErrorLog `object`: Error log.
  * app_launch_toffset `integer`: Corresponds to the number of milliseconds elapsed between the time the error occurred and the app was launched.
  * id **required** `string`: Error identifier.
  * session_id **required** `string`: Session ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### ErrorLog_Diagnostics
* ErrorLog_Diagnostics `object`: Error log.
  * app_launch_toffset `integer`: Corresponds to the number of milliseconds elapsed between the time the error occurred and the app was launched.
  * id **required** `string`: Error identifier.
  * session_id **required** `string`: Session ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### ErrorResponse
* ErrorResponse `object`
  * error **required** `object`
    * code **required** `string` (values: BadRequest, Conflict, NotAcceptable, NotFound, InternalServerError, Unauthorized, TooManyRequests)
    * message **required** `string`

### ErrorResponsev2
* ErrorResponsev2 `object`
  * error **required** `object`
    * code **required** `string` (values: BadRequest, Conflict, NotAcceptable, NotFound, InternalServerError, Unauthorized)
    * message **required** `string`

### ErrorRetentionSettings
* ErrorRetentionSettings `object`
  * retention_in_days **required** `integer` (values: 28, 90)

### ErrorsSearchResult
* ErrorsSearchResult `object`
  * errors `array`
    * items `object`
      * country `string`
      * deviceName `string`
      * errorId `string`
      * hasAttachments `boolean`
      * hasBreadcrumbs `boolean`
      * language `string`
      * osType `string`
      * osVersion `string`
      * timestamp `string`
      * userId `string`
  * hasMoreResults `boolean`

### Event
* Event `object`
  * count `integer`
  * count_per_device `number`
  * count_per_session `number`
  * device_count `integer`
  * id `string`
  * name `string`
  * previous_count `integer`: The event count of previous time range of the event.
  * previous_device_count `integer`: The device count of previous time range of the event.

### EventCount
* EventCount `object`
  * count `array`
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * previous_total_count `integer`
  * total_count `integer`

### EventCountPerDevice
* EventCountPerDevice `object`
  * avg_count_per_device `number`
  * count_per_device `array`
    * items `object`
      * count `number`: Decimal count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * previous_avg_count_per_device `number`

### EventCountPerSession
* EventCountPerSession `object`
  * avg_count_per_session `number`
  * count_per_session `array`
    * items `object`
      * count `number`: Decimal count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * previous_avg_count_per_session `number`

### EventDeviceCount
* EventDeviceCount `object`
  * devices_count `array`
    * items `object`
      * count `integer`: Count of the object.
      * datetime `string`: The ISO 8601 datetime.
  * previous_total_devices_with_event `integer`
  * total_devices `integer`
  * total_devices_with_event `integer`

### EventLog
* EventLog `object`: Event log.
  * id **required** `string`: Unique identifier for this event.
  * name **required** `string`: Name of the event.
  * session_id **required** `string`: Session ID.
  * properties `object`: Additional key/value pair parameters.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### EventLog_Diagnostics
* EventLog_Diagnostics `object`: Event log.
  * id **required** `string`: Unique identifier for this event.
  * name **required** `string`: Name of the event.
  * session_id **required** `string`: Session ID.
  * properties `object`: Additional key/value pair parameters.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### EventProperties
* EventProperties `object`: Event properties during the time range.
  * event_properties `array`
    * items `string`: The event property.

### EventPropertyValue
* EventPropertyValue `object`: An event property value with counts.
  * count `integer`: The count of the the event property value.
  * name `string`: The event property value name.
  * previous_count `integer`: The count of previous time range of the event property value.

### EventPropertyValues
* EventPropertyValues `object`: Event property value counts during the time range in descending order.
  * total `integer`: The total property value counts.
  * values `array`: The event property values.
    * items `object`: An event property value with counts.
      * count `integer`: The count of the the event property value.
      * name `string`: The event property value name.
      * previous_count `integer`: The count of previous time range of the event property value.

### EventResponseResult
* EventResponseResult: Object returned in response to accepting an event occurance
  * request_id **required** `string`: Unique request identifier for tracking

### EventSetting
* EventSetting `object`: Event Setting
  * default_value `string` (values: Disabled, Individual, Daily, DailyAndIndividual): Default frequency of event
  * event_type **required** `string` (values: crash_newCrashGroupCreated): Event Name
  * value **required** `string` (values: Disabled, Individual, Daily, DailyAndIndividual, Default): Frequency of event

### Events
* Events `object`
  * events `array`
    * items `object`
      * count `integer`
      * count_per_device `number`
      * count_per_session `number`
      * device_count `integer`
      * id `string`
      * name `string`
      * previous_count `integer`: The event count of previous time range of the event.
      * previous_device_count `integer`: The device count of previous time range of the event.
  * total `integer`: The total count of events.
  * total_devices `integer`: The active device over this period.

### Exception
* Exception `object`: a exception
  * frames **required** `array`: frames of the excetpion
    * items `object`: a single frame of a stack trace
      * address `string`: address of the frame
      * app_code **required** `boolean`: this line isn't from any framework
      * class_method `boolean`: is a class method
      * class_name `string`: name of the class
      * code_formatted **required** `string`: Formatted frame string
      * code_raw **required** `string`: Raw frame string
      * file `string`: name of the file
      * framework_name `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * method_params `string`: parameters of the frames method
      * relevant `boolean`: frame should be shown always
  * inner_exceptions `array`
    * items [Exception](#exception)
  * platform `string` (values: ios, android, xamarin, react-native, ndk, unity, other): SDK/Platform this thread is beeing generated from
  * reason `string`: Reason of the exception
  * relevant `boolean`: relevant exception (crashed)
  * type `string`: Type of the exception (NSSomethingException, NullPointerException)

### ExportBlobConfiguration
* ExportBlobConfiguration `object`: Configuration for export to Blob Storage with blob format
  * blob_path_format_kind `string` (values: WithoutAppId, WithAppId): The path to the blob when enum set to 'WithoutAppId' is 'year/month/day/hour/minute' and when set to 'WithAppId' is 'appId/year/month/day/hour/minute'
  * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * resource_group `string`: The resource group name on azure
  * resource_name `string`: The resource name on azure
  * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration

### ExportConfig
* ExportConfig `object`: Generic export configuration.
  * blob_container_sas_uri **required** `string`: A shared access signature (SAS) URI with Read, Write and Delete permissions on a container.

### ExportConfiguration
* ExportConfiguration `object`: Export configuration
  * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * resource_group `string`: The resource group name on azure
  * resource_name `string`: The resource name on azure
  * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration

### ExportConfigurationAppInsightsKey
* ExportConfigurationAppInsightsKey `object`: Configuration for export to Application Insights resource with customer provided intrumentation key
  * instrumentation_key **required** `string`: Instrumentation key for Application Insights resource
  * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * resource_group `string`: The resource group name on azure
  * resource_name `string`: The resource name on azure
  * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration

### ExportConfigurationAppInsightsLinkedSubscription
* ExportConfigurationAppInsightsLinkedSubscription `object`: Configuration for export to Application Insights resource with customer linked subscription.
  * subscription_id **required** `string`: Id of customer subscription linked in App Center
  * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * resource_group `string`: The resource group name on azure
  * resource_name `string`: The resource name on azure
  * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration

### ExportConfigurationBlobStorageConnectionString
* ExportConfigurationBlobStorageConnectionString `object`: Configuration for export to Blob Storage with customer provided connection string
  * connection_string **required** `string`: Connection string for blob storage account
  * blob_path_format_kind `string` (values: WithoutAppId, WithAppId): The path to the blob when enum set to 'WithoutAppId' is 'year/month/day/hour/minute' and when set to 'WithAppId' is 'appId/year/month/day/hour/minute'
  * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * resource_group `string`: The resource group name on azure
  * resource_name `string`: The resource name on azure
  * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration

### ExportConfigurationBlobStorageLinkedSubscription
* ExportConfigurationBlobStorageLinkedSubscription `object`: Configuration for export to Blob Storage with customer linked subscription.
  * subscription_id **required** `string`: Id of customer subscription linked in App Center
  * blob_path_format_kind `string` (values: WithoutAppId, WithAppId): The path to the blob when enum set to 'WithoutAppId' is 'year/month/day/hour/minute' and when set to 'WithAppId' is 'appId/year/month/day/hour/minute'
  * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * resource_group `string`: The resource group name on azure
  * resource_name `string`: The resource name on azure
  * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration

### ExportConfigurationListResult
* ExportConfigurationListResult `object`: List of export configurations
  * nextLink `string`
  * total `integer`: the total count of exports
  * values **required** `array`
    * items `object`: Export configuration result
      * creation_time **required** `string`: Creation time in ISO 8601 format
      * export_configuration `object`: Export configuration
        * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
        * export_entities `array`
          * items `string` (values: crashes, errors, attachments, no_logs)
        * resource_group `string`: The resource group name on azure
        * resource_name `string`: The resource name on azure
        * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration
      * export_entities `array`
        * items `string` (values: crashes, errors, attachments, no_logs)
      * export_type **required** `string` (values: BlobStorage, AppInsights): Target resource type of export configuration
      * id **required** `string`: Export configuration id
      * last_run_time `string`: Latest time in ISO 8601 format when export completed successfully
      * resource_group `string`: resource group for the storage account/App Insights resource
      * resource_name `string`: Storage accout or Appinsights resource name
      * state **required** `string` (values: Enabled, Disabled, Pending, Deleted, Invalid): State of the export job
      * state_info `string`: Additional information about export configuration state

### ExportConfigurationResult
* ExportConfigurationResult `object`: Export configuration result
  * creation_time **required** `string`: Creation time in ISO 8601 format
  * export_configuration `object`: Export configuration
    * backfill `boolean`: Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
    * export_entities `array`
      * items `string` (values: crashes, errors, attachments, no_logs)
    * resource_group `string`: The resource group name on azure
    * resource_name `string`: The resource name on azure
    * type **required** `string` (values: blob_storage_connection_string, application_insights_instrumentation_key, blob_storage_linked_subscription, application_insights_linked_subscription): Type of export configuration
  * export_entities `array`
    * items `string` (values: crashes, errors, attachments, no_logs)
  * export_type **required** `string` (values: BlobStorage, AppInsights): Target resource type of export configuration
  * id **required** `string`: Export configuration id
  * last_run_time `string`: Latest time in ISO 8601 format when export completed successfully
  * resource_group `string`: resource group for the storage account/App Insights resource
  * resource_name `string`: Storage accout or Appinsights resource name
  * state **required** `string` (values: Enabled, Disabled, Pending, Deleted, Invalid): State of the export job
  * state_info `string`: Additional information about export configuration state

### ExportStartedResult
* ExportStartedResult `object`: Export started.
  * export_id **required** `string`: The unique export identifier.

### ExportStatusResult
* ExportStatusResult `object`: Export status
  * export_id **required** `string`: The unique export identifier.
  * status **required** `string` (values: InProgress, Completed, Failed): Status of the export.

### ExternalAppId
* ExternalAppId `object`
  * external_id `string`: The identifier for external apps that map to an App Center app

### ExternalRepositoryProvider
* ExternalRepositoryProvider `string` (values: github): Supported external providers of source control repositories

### ExternalStoreRequest
* ExternalStoreRequest `object`: ExternalStoreRequest
  * intune_details `object`
    * app_category `object`
      * name `string`: display name for the app category
    * secret_json `object`
      * id_token `string`: the id token of user
      * refresh_token `string`: the refresh token for user
      * refresh_token_expiry `string`: the expiry of refresh token
    * target_audience `object`
      * name `string`: display name for the target audience/group
    * tenant_id `string`: tenant id of the intune store
  * name `string`: name of the store. In case of googleplay, and Apple store this is fixed to Production.
  * service_connection_id `string`: Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
  * track `string` (values: production, alpha, beta, testflight-internal, testflight-external): track of the store. Can be production, alpha & beta for googleplay. Can be production, testflight-internal & testflight-external for Apple Store.
  * type `string` (values: googleplay, apple): store Type

### ExternalStoreResponse
* ExternalStoreResponse `object`: ExternalStoreResponse
  * created_by `string`: The ID of the principal that created the store.
  * created_by_principal_type `string`: The type of the principal that created the store.
  * id `string`: Store id
  * intune_details `object`: Store details for intune
    * app_category `object`
      * id `string`: ID for the category.
      * name `string`: display name for the app category
    * target_audience `object`
      * id `string`: ID for the target audience/group.
      * name `string`: display name for the target audience/group
  * name `string`: Store Name
  * service_connection_id `string`: Id for the shared service connection. In case of Apple / GooglePlay stores, this connection will be used to connect to the Apple / Google stores in App Center.
  * track `string` (values: production, alpha, beta, testflight-internal, testflight-external): Store track
  * type `string`: Store Type

### ExternalUserRequest
* ExternalUserRequest `object`
  * app_invitation `string`: The token of the app invitation which lead to signup
  * avatar_url `string`: The avatar URL of the user
  * display_name `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * name `string`: The unique name that is used to identify the user. If no explicit value is given, a default will be auto-generated from the `display_name` value
  * organization_invitation `string`: The token of the organization invitation which lead to signup
  * tester_invitation `string`: The token of the test invitation which lead to signup

### ExternallyHostedReleaseCreateRequest
* ExternallyHostedReleaseCreateRequest `object`: A request containing information for creating an externally hosted release.
  * build_number `string`: The build number of the uploaded binary
  * build_version **required** `string`: The build version of the uploaded binary
  * external_download_url **required** `string`: The external URL to the release's binary.

### Failure
* Failure `object`
  * message **required** `string`

### FeatureCreateRequest
* FeatureCreateRequest `object`
  * description `string`: The friendly name of the feature
  * display_name **required** `string`: The full (friendly) name of the feature.
  * name **required** `string`: The unique name of the feature
  * state `integer`: The state of the feature

### FeatureFlagsResponse
* FeatureFlagsResponse `object`
  * feature_flags **required** `array`
    * items `string`

### FeaturePatchRequest
* FeaturePatchRequest `object`
  * description `string`: The friendly name of the feature
  * display_name `string`: The full (friendly) name of the feature.
  * state `integer`: The state of the feature

### FeatureResponse
* FeatureResponse `object`
  * created_at `string`: The creation date of the feature
  * description `string`: The description of the feature
  * display_name **required** `string`: The friendly name of the feature
  * name **required** `string`: The unique name of the feature
  * state **required** `integer`: The state (unset, enabled, disabled) of the feature
  * updated_at `string`: The date the feature was last updated at

### FileAsset
* FileAsset `object`
  * id `string`
  * location `string`
  * token `string`
  * uploadDomain `string`
  * uploadWindowLocation `string`
  * urlEncodedToken `string`

### FileValidationDetails
* FileValidationDetails `object`: Additional details required for file validation
  * certificateUploadId `string`
  * p12password **required** `string`

### FilterReleasesContainer
* FilterReleasesContainer `object`
  * releases `array`
    * items `object`
      * release **required** `string`: Release Id.

### FilterVersionsContainer
* FilterVersionsContainer `object`
  * versions `array`
    * items `object`
      * build **required** `string`: App build number.
      * version **required** `string`: App version.

### GDPRInvitationDetailResponse
* GDPRInvitationDetailResponse `object`
  * app
    * description `string`: The description of the app
    * display_name **required** `string`: The display name of the app
    * icon_source `string`: The string representation of the source of the app's icon
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * id **required** `string`: The unique ID (UUID) of the app
    * name **required** `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * owner **required** `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
    * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
    * azure_subscription `object`
      * is_billable `boolean`: If the subscription can be used for billing
      * is_billing `boolean`: If the subscription is used for billing
      * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
      * subscription_id **required** `string`: The azure subscription id
      * subscription_name **required** `string`: The name of the azure subscription
      * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
    * created_at `string`: The created date of this app
    * member_permissions `array`: The permissions of the calling user
      * items `string` (values: manager, developer, viewer, tester)
    * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
    * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
    * updated_at `string`: The last updated date of this app
  * invitation_id **required** `string`: The id of the invitation
  * organization `object`
    * avatar_url `string`: The URL to a user-uploaded Avatar image
    * created_at **required** `string`: The creation date of this organization
    * display_name **required** `string`: The display name of the organization
    * id **required** `string`: The internal unique id (UUID) of the organization.
    * name **required** `string`: The slug name of the organization
    * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
    * updated_at **required** `string`: The date the organization was last updated at

### GDPRPurgeVerifyRequest
* GDPRPurgeVerifyRequest `object`
  * id **required** `string`: deployment id
  * key **required** `string`: deployment key

### GDPRPurgeVerifyResponse
* GDPRPurgeVerifyResponse `object`
  * success **required** `boolean`: indicate whether GDPR purge operation succeeds or not

### GDPRValidationRequest
* GDPRValidationRequest `object`: A request containing a set of release ids to validate
  * hockeyapp_release_ids `array`: a list of release ids to validate (HA flow)
    * items `integer`
  * release_ids **required** `array`: a list of release ids to validate (AC flow)
    * items `integer`
  * release_upload_ids `array`: a list of release uploads ids to validate
    * items `string`

### GdprVerificationResult
* GdprVerificationResult `object`: GDPR tests verification result
  * message `string`: Optional error message if the verification failed.
  * status `boolean`: Verification status. True means that the verification was successfull.

### GeneralDistributionGroupDetailsResponse
* GeneralDistributionGroupDetailsResponse
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group
  * is_shared `boolean`: Whether the distribution group is shared group or not
  * owner_app_id `string`: If distribution group is owned by an app, this is the unique app ID
  * owner_org_id `string`: If distribution group is owned by an org, this is the unique org ID

### GenericLog
* GenericLog `object`: Generic log.
  * account_id `string`: Account ID of the authenticated user.
  * auth_provider `string`: Auth service provider.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * event_id `string`: Event ID.
  * event_name `string`: Event name.
  * install_id **required** `string`: Install ID.
  * message_id `string`: Message ID.
  * properties `object`: event specific properties.
  * session_id `string`: Session ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### GenericLogContainer
* GenericLogContainer `object`
  * exceeded_max_limit `boolean`: indicates if the number of available logs are more than the max allowed return limit(100).
  * last_received_log_timestamp `string`: the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
  * logs **required** `array`: the list of logs
    * items `object`: Generic log.
      * account_id `string`: Account ID of the authenticated user.
      * auth_provider `string`: Auth service provider.
      * device **required** `object`: Device characteristics.
        * app_build **required** `string`: The app's build number, e.g. 42.
        * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
        * app_version **required** `string`: Application version name, e.g. 1.1.0
        * carrier_code `string`: Carrier country code (for mobile devices).
        * carrier_country `string`: Carrier country.
        * carrier_name `string`: Carrier name (for mobile devices).
        * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
        * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
        * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
        * locale **required** `string`: Language code (example: en_US).
        * model `string`: Device model (example: iPad2,3).
        * oem_name `string`: Device manufacturer (example: HTC).
        * os_api_level `integer`: API level when applicable like in Android (example: 15).
        * os_build `string`: OS build code (example: LMY47X).
        * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
        * os_version **required** `string`: OS version (example: 9.3.0).
        * screen_size `string`: Screen size of the device in pixels (example: 640x480).
        * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
        * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
        * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
        * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
        * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
        * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
      * event_id `string`: Event ID.
      * event_name `string`: Event name.
      * install_id **required** `string`: Install ID.
      * message_id `string`: Message ID.
      * properties `object`: event specific properties.
      * session_id `string`: Session ID.
      * timestamp **required** `string`: Log creation timestamp.
      * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### GenericLogContainer_Diagnostics
* GenericLogContainer_Diagnostics `object`
  * exceeded_max_limit `boolean`: indicates if the number of available logs are more than the max allowed return limit(100).
  * last_received_log_timestamp `string`: the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
  * logs **required** `array`: the list of logs
    * items `object`: Generic log.
      * device **required** `object`: Device characteristics.
        * app_build **required** `string`: The app's build number, e.g. 42.
        * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
        * app_version **required** `string`: Application version name, e.g. 1.1.0
        * carrier_code `string`: Carrier country code (for mobile devices).
        * carrier_country `string`: Carrier country.
        * carrier_name `string`: Carrier name (for mobile devices).
        * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
        * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
        * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
        * locale **required** `string`: Language code (example: en_US).
        * model `string`: Device model (example: iPad2,3).
        * oem_name `string`: Device manufacturer (example: HTC).
        * os_api_level `integer`: API level when applicable like in Android (example: 15).
        * os_build `string`: OS build code (example: LMY47X).
        * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
        * os_version **required** `string`: OS version (example: 9.3.0).
        * screen_size `string`: Screen size of the device in pixels (example: 640x480).
        * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
        * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
        * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
        * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
        * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
        * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
      * event_id `string`: Event ID.
      * event_name `string`: Event name.
      * install_id **required** `string`: Install ID.
      * message_id `string`: Message ID.
      * properties `object`: event specific properties.
      * session_id `string`: Session ID.
      * timestamp **required** `string`: Log creation timestamp.
      * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### GenericLog_Diagnostics
* GenericLog_Diagnostics `object`: Generic log.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * event_id `string`: Event ID.
  * event_name `string`: Event name.
  * install_id **required** `string`: Install ID.
  * message_id `string`: Message ID.
  * properties `object`: event specific properties.
  * session_id `string`: Session ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### GetInAppUpdateTokenResponse
* GetInAppUpdateTokenResponse `object`
  * token **required** `string`: The api token generated will not be accessible again

### GetOrCreateRepositoryProviderMappingRequest
* GetOrCreateRepositoryProviderMappingRequest `object`
  * external_account_name `string`: The account name given by the external provider. If provided, create an organization and the mapping. If not, create mapping with user.

### GetReleaseStatusResponse
* GetReleaseStatusResponse `object`
  * error_details `string`: Details describing what went wrong processing the upload. Will only be set if status = 'error'.
  * id **required** `string`: The ID for the upload.
  * release_distinct_id `number`: The distinct ID of the release. Will only be set when the status = 'readyToBePublished'.
  * upload_status **required** `string` (values: uploadStarted, uploadFinished, readyToBePublished, malwareDetected, error): The current upload status.

### GetReleasesContainer
* GetReleasesContainer `object`
  * releases **required** `array`
    * items `object`
      * distribution_group `string`: Distribution group Id.
      * release **required** `string`: Release Id.

### GitHubAccount
* GitHubAccount `object`: GitHub account information
  * accountType `string` (values: User, Organization): Type of GitHub account
  * id `integer`: Id of GitHub account

### GitHubAccountLite
* GitHubAccountLite `object`: The GitHub Installation
  * id `string`: GitHub Account Id
  * login `string`: GitHub Account Login Name
  * type `string`: GitHub Account Type
  * url `string`: GitHub Account Url

### GitHubBillingAccount
* GitHubBillingAccount `object`: App Center account details from GitHub billing
  * display_name **required** `string`: The account's display name
  * id **required** `string`: The unique id (UUID) of the account
  * name **required** `string`: The unique name that used to identify the owner
  * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'

### GitHubBranchLite
* GitHubBranchLite `object`: The lite version of GitHub branch
  * ref `string`: The repository name
  * repo `object`: The lite version of GitHub repository
    * id `number`: The repository id
  * sha `string`: The discription of repository

### GitHubInstallationLite
* GitHubInstallationLite `object`: The GitHub Installation
  * account `object`: The GitHub Installation
    * id `string`: GitHub Account Id
    * login `string`: GitHub Account Login Name
    * type `string`: GitHub Account Type
    * url `string`: GitHub Account Url
  * app_id `number`: GitHub Installation App Id
  * id `number`: GitHub Installation Id

### GitHubInstallationRepositories
* GitHubInstallationRepositories `array`: A list of the repositories which is accessible by GitHub App Installation
  * items `object`: The repository which is accessiable by GitHub App Installation
    * clone_url `string`: URL used to clone the repository
    * default_branch `string`: The default branch for the repo
    * description `string`: The discription of repository
    * fork `boolean`: Whether the repository is a fork
    * language `string`: The language in the repository
    * name `string`: The repository name
    * updated_at `string`: The repository updated time

### GitHubInstallationRepository
* GitHubInstallationRepository `object`: The repository which is accessiable by GitHub App Installation
  * clone_url `string`: URL used to clone the repository
  * default_branch `string`: The default branch for the repo
  * description `string`: The discription of repository
  * fork `boolean`: Whether the repository is a fork
  * language `string`: The language in the repository
  * name `string`: The repository name
  * updated_at `string`: The repository updated time

### GitHubMarketplacePlan
* GitHubMarketplacePlan `object`: GitHub Marketplace plan
  * id `integer`: Id of the GitHub plan

### GitHubMarketplacePurchase
* GitHubMarketplacePurchase `object`: GitHub Marketplace purchase
  * account `object`: GitHub account information
    * accountType `string` (values: User, Organization): Type of GitHub account
    * id `integer`: Id of GitHub account
  * plan `object`: GitHub Marketplace plan
    * id `integer`: Id of the GitHub plan

### GitHubPullRequestLite
* GitHubPullRequestLite `object`: The lite version of GitHub pull request
  * base `object`: The lite version of GitHub branch
    * ref `string`: The repository name
    * repo `object`: The lite version of GitHub repository
      * id `number`: The repository id
    * sha `string`: The discription of repository
  * head `object`: The lite version of GitHub branch
    * ref `string`: The repository name
    * repo `object`: The lite version of GitHub repository
      * id `number`: The repository id
    * sha `string`: The discription of repository

### GitHubRepositoryLite
* GitHubRepositoryLite `object`: The lite version of GitHub repository
  * id `number`: The repository id

### GlobalFeatureFlagsResponse
* GlobalFeatureFlagsResponse `object`
  * value **required** `object`: The dictionary of global state values indexed by feature flag names

### GooglePlayConnectionNonSecretResponse
* GooglePlayConnectionNonSecretResponse: Google Play non-secret data
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### GooglePlayConnectionSecretRequest
* GooglePlayConnectionSecretRequest `object`: Google Play connection secrets this should be the JSON file data which is provided by google play
  * data **required** `object`: google secret details
  * credentialType `string` (values: credentials, certificate): credential type of the shared connection. Values can be credentials|certificate
  * displayName `string`: display name of shared connection
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### GooglePlayConnectionSecretResponse
* GooglePlayConnectionSecretResponse `object`: Google Play connection secrets
  * data **required** `object`: google play secret details
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### GooglePlayCredentialNonSecretDetailsResponse
* GooglePlayCredentialNonSecretDetailsResponse `object`: Google Play credentials non-secret details
  * data **required** `object`: Google Play credentials non-secret details
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### GrantAdminRoleRequest
* GrantAdminRoleRequest `object`
  * admin_role **required** `string` (values: superAdmin, admin, devOps, customerSupport, notAdmin): The new admin_role

### HandledError
* HandledError `object`
  * country `string`
  * deviceName `string`
  * errorId `string`
  * hasAttachments `boolean`
  * hasBreadcrumbs `boolean`
  * language `string`
  * osType `string`
  * osVersion `string`
  * timestamp `string`
  * userId `string`

### HandledErrorDetails
* HandledErrorDetails `object`
  * appLaunchTimestamp `string`: Timestamp when the app was launched, example: '2017-03-13T18:05:42Z'.
  * carrierName `string`: Carrier name (for mobile devices).
  * jailbreak `boolean`: Flag indicating if device is jailbroken
  * name `string`
  * properties `object`
  * reasonFrames `array`
    * items `object`
      * appCode `boolean`: this line isn't from any framework
      * classMethod `boolean`: is a class method
      * className `string`: name of the class
      * codeFormatted `string`: Formatted frame string
      * codeRaw `string`: Unformatted Frame string
      * exceptionType `string`: Exception type.
      * file `string`: name of the file
      * frameworkName `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * methodParams `string`: parameters of the frames method
      * osExceptionType `string`: OS exception type. (aka. SIGNAL)
  * country `string`
  * deviceName `string`
  * errorId `string`
  * hasAttachments `boolean`
  * hasBreadcrumbs `boolean`
  * language `string`
  * osType `string`
  * osVersion `string`
  * timestamp `string`
  * userId `string`

### HandledErrorLog
* HandledErrorLog `object`: Required explicit begin session log (a marker event for analytics service).
  * error_id **required** `string`: Error ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### HandledErrorReasonFrame
* HandledErrorReasonFrame `object`
  * appCode `boolean`: this line isn't from any framework
  * classMethod `boolean`: is a class method
  * className `string`: name of the class
  * codeFormatted `string`: Formatted frame string
  * codeRaw `string`: Unformatted Frame string
  * exceptionType `string`: Exception type.
  * file `string`: name of the file
  * frameworkName `string`: Name of the framework
  * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
  * line `integer`: line number
  * method `string`: name of the method
  * methodParams `string`: parameters of the frames method
  * osExceptionType `string`: OS exception type. (aka. SIGNAL)

### HandledErrors
* HandledErrors `object`
  * errors `array`: Errors list.
    * items `object`
      * country `string`
      * deviceName `string`
      * errorId `string`
      * hasAttachments `boolean`
      * hasBreadcrumbs `boolean`
      * language `string`
      * osType `string`
      * osVersion `string`
      * timestamp `string`
      * userId `string`
  * nextLink `string`

### HanledErrorLog_Diagnostics
* HanledErrorLog_Diagnostics `object`: Required explicit begin session log (a marker event for analytics service).
  * error_id **required** `string`: Error ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### HasBuildUploadedResponse
* HasBuildUploadedResponse `object`: The response for the build uploaded check.
  * has_build_uploaded `boolean`: true if a build has been uploaded, false otherwise

### HasTestflightMetadataResponse
* HasTestflightMetadataResponse `object`: The response for the testflight metadata check.
  * has_testflight_metadata `boolean`: true if the app has the testflight metadata, false otherwise

### HockeyAppCompatibilityReleaseResponse
* HockeyAppCompatibilityReleaseResponse `object`
  * appsize `integer`
  * bundle_identifier `string`
  * device_family `string`
  * external `boolean`
  * id `integer`
  * install_url `string`
  * mandatory `boolean`
  * minimum_os_version `string`
  * notes `string`
  * shortversion `string`
  * uploaded_at `string`
  * version `string`

### InternalBulkAppResponse
* InternalBulkAppResponse `object`
  * app_name `string`: The name of the app
  * owner_display_name `string`: The display name of the owner

### InternalUserRequest
* InternalUserRequest `object`
  * app_invitation `string`: The token of the app invitation which lead to signup
  * avatar_url `string`: The avatar URL of the user
  * display_name `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * organization_invitation `string`: The token of the organization invitation which lead to signup
  * password **required** `string`: The password of the user. Needs to be at least 8 characters long and contain at least one lower- and one uppercase letter.
  * portal_subdomain `string` (values: install.): The sub-domain of the portal from which this request was made. Will be used to build the invitation link.
  * tester_invitation `string`: The token of the test invitation which lead to signup

### InternalUserSignupResponse
* InternalUserSignupResponse `object`
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * external_provider `string`: The name of the external auth provider
  * external_user_id `string`: The user ID given by the external provider
  * id **required** `string`: The unique id (UUID) of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * status `string` (values: Complete, NeedsVerification): The current status of the user record after signup

### IntuneAppCategory
* IntuneAppCategory `object`
  * name `string`: display name for the app category

### IntuneAppCategoryResponse
* IntuneAppCategoryResponse `object`
  * id `string`: ID for the category.
  * name `string`: display name for the app category

### IntuneAppsRequest
* IntuneAppsRequest `object`: IntuneAppsRequest
  * created_month `string`: PartitionKey year-month

### IntuneAppsResponse
* IntuneAppsResponse `object`: IntuneAppsResponse
  * app_id `string`: App id
  * created_month `string`: PartitionKey year-month
  * refreshStatus `string`: Refresh Status

### IntuneCategories
* IntuneCategories `object`
  * odata.context `string`: context
  * value `array`: categories for intune app
    * items `object`
      * displayName `string`: the display name for the category
      * id `string`: the id of the category
      * lastModifiedDateTime `string`: modified date for category

### IntuneCategoryValue
* IntuneCategoryValue `object`
  * displayName `string`: the display name for the category
  * id `string`: the id of the category
  * lastModifiedDateTime `string`: modified date for category

### IntuneGroup
* IntuneGroup `object`
  * displayName `string`: the display name of the group
  * id `string`: the id of the Group
  * securityEnabled `boolean`: species if it is a security group

### IntuneGroupValue
* IntuneGroupValue `object`
  * displayName `string`: the display name of the group
  * id `string`: the id of the Group

### IntuneGroups
* IntuneGroups `object`
  * odata.context `string`: context
  * value `array`: categories for intune app
    * items `object`
      * displayName `string`: the display name of the group
      * id `string`: the id of the Group

### IntuneSecretDetails
* IntuneSecretDetails `object`
  * id_token `string`: the id token of user
  * refresh_token `string`: the refresh token for user
  * refresh_token_expiry `string`: the expiry of refresh token

### IntuneStoreRequest
* IntuneStoreRequest `object`
  * app_category `object`
    * name `string`: display name for the app category
  * secret_json `object`
    * id_token `string`: the id token of user
    * refresh_token `string`: the refresh token for user
    * refresh_token_expiry `string`: the expiry of refresh token
  * target_audience `object`
    * name `string`: display name for the target audience/group
  * tenant_id `string`: tenant id of the intune store

### IntuneStoreResponse
* IntuneStoreResponse `object`
  * app_category `object`
    * id `string`: ID for the category.
    * name `string`: display name for the app category
  * target_audience `object`
    * id `string`: ID for the target audience/group.
    * name `string`: display name for the target audience/group

### IntuneTargetAudience
* IntuneTargetAudience `object`
  * name `string`: display name for the target audience/group

### IntuneTargetAudienceResponse
* IntuneTargetAudienceResponse `object`
  * id `string`: ID for the target audience/group.
  * name `string`: display name for the target audience/group

### InvitationDetailResponse
* InvitationDetailResponse `object`
  * app
    * description `string`: The description of the app
    * display_name **required** `string`: The display name of the app
    * icon_source `string`: The string representation of the source of the app's icon
    * icon_url `string`: The string representation of the URL pointing to the app's icon
    * id **required** `string`: The unique ID (UUID) of the app
    * name **required** `string`: The name of the app used in URLs
    * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
    * owner **required** `object`: The information about the app's owner
      * avatar_url `string`: The avatar URL of the owner
      * display_name **required** `string`: The owner's display name
      * email `string`: The owner's email address
      * id **required** `string`: The unique id (UUID) of the owner
      * name **required** `string`: The unique name that used to identify the owner
      * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
    * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
    * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
    * azure_subscription `object`
      * is_billable `boolean`: If the subscription can be used for billing
      * is_billing `boolean`: If the subscription is used for billing
      * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
      * subscription_id **required** `string`: The azure subscription id
      * subscription_name **required** `string`: The name of the azure subscription
      * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
    * created_at `string`: The created date of this app
    * member_permissions `array`: The permissions of the calling user
      * items `string` (values: manager, developer, viewer, tester)
    * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
    * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
    * updated_at `string`: The last updated date of this app
  * invitation_id **required** `string`: The id of the invitation
  * invited_by **required** `object`
    * avatar_url `string`: The avatar URL of the user
    * can_change_password `boolean`: User is required to send an old password in order to change the password.
    * display_name **required** `string`: The full name of the user. Might for example be first and last name
    * email **required** `string`: The email address of the user
    * id **required** `string`: The unique id (UUID) of the user
    * name **required** `string`: The unique name that is used to identify the user.
    * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
    * permissions `array`: The permissions the user has for the app
      * items `string` (values: manager, developer, viewer, tester)
  * organization `object`
    * avatar_url `string`: The URL to a user-uploaded Avatar image
    * created_at **required** `string`: The creation date of this organization
    * display_name **required** `string`: The display name of the organization
    * id **required** `string`: The internal unique id (UUID) of the organization.
    * name **required** `string`: The slug name of the organization
    * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
    * updated_at **required** `string`: The date the organization was last updated at

### IosAppExtensionInfo
* IosAppExtensionInfo `object`: App extension information
  * name **required** `string`: App extension name
  * targetBundleIdentifier **required** `string`: App extension bundle identifier

### ItunesAppsRequest
* ItunesAppsRequest `object`: Apple credentials with username, password or service_connection_id of the stored credentials is needed along with team_identifier.
  * cookie `string`: The 30-day session cookie for multi-factor authentication backed accounts.
  * password `string`: The password for the Apple Developer account.
  * service_connection_id `string`: The service_connection_id of the stored Apple credentials instead of username, password.
  * team_identifier `string`: Identifier of the team to use when logged in.
  * username `string`: The username for the Apple Developer account.

### ItunesTeamsRequest
* ItunesTeamsRequest `object`: Apple credentials with username, password or service_connection_id of the stored credentials is needed.
  * cookie `string`: The 30-day session cookie for multi-factor authentication backed accounts.
  * password `string`: The password for the Apple Developer account.
  * service_connection_id `string`: The service_connection_id of the stored Apple credentials instead of username, password.
  * username `string`: The username for the Apple Developer account.

### ItunesTeamsResponse
* ItunesTeamsResponse `object`: Itunes teams details .
  * teamId `string`: Itunes team id.
  * teamName `string`: Itunes Team Name

### JavaScriptBranchConfigurationProperties
* JavaScriptBranchConfigurationProperties `object`: Build configuration when React Native, or other JavaScript tech, is part of the build steps
  * packageJsonPath `string`: Path to package.json file for the main project, e.g. "package.json" or "myapp/package.json"
  * reactNativeVersion `string`: Version of React Native from package.json files
  * runTests `boolean`: Whether to run Jest unit tests, via npm test, during the build

### JavaScriptSolution
* JavaScriptSolution `object`
  * packageJsonPath **required** `string`: The path to the detected package.json
  * reactNativeVersion `string`: Version of React Native from package.json files

### JavaScriptToolset
* JavaScriptToolset `object`
  * javascriptSolutions `array`: The React Native solutions detected
    * items `object`
      * packageJsonPath **required** `string`: The path to the detected package.json
      * reactNativeVersion `string`: Version of React Native from package.json files
  * packageJsonPaths **required** `array`: Paths for detected package.json files
    * items `string`

### JiraConnectionNonSecretResponse
* JiraConnectionNonSecretResponse: Jira non-secret data
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### JiraConnectionSecretRequest
* JiraConnectionSecretRequest `object`: Jira connection secrets
  * data **required** `object`: jira secret details
    * baseUrl **required** `string`: baseUrl to connect to jira instance
    * password **required** `string`: password to connect to jira instance
    * username **required** `string`: username to connect to jira instance
  * credentialType `string` (values: credentials, certificate): credential type of the shared connection. Values can be credentials|certificate
  * displayName `string`: display name of shared connection
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### JiraConnectionSecretResponse
* JiraConnectionSecretResponse `object`: Jira connection secrets
  * data **required** `object`: jira secret details
    * baseUrl **required** `string`: baseUrl to connect to jira instance
    * username **required** `string`: username to connect to jira instance
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### JiraCredentialNonSecretDetailsResponse
* JiraCredentialNonSecretDetailsResponse `object`: Jira credentials non-secret details
  * data **required** `object`: Jira credentials non-secret details
    * baseUrl **required** `string`: baseUrl to connect to jira instance
    * username **required** `string`: username to connect to jira instance
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### JiraSecretDetails
* JiraSecretDetails `object`: Jira secret details
  * baseUrl **required** `string`: baseUrl to connect to jira instance
  * password **required** `string`: password to connect to jira instance
  * username **required** `string`: username to connect to jira instance

### JiraSecretDetailsResponse
* JiraSecretDetailsResponse `object`: Jira secret details
  * baseUrl **required** `string`: baseUrl to connect to jira instance
  * username **required** `string`: username to connect to jira instance

### Language
* Language `object`
  * count `integer`: Count current of language.
  * language_name `string`: Language's name.
  * previous_count `integer`: Count of previous lanugage.

### Languages
* Languages `object`
  * languages `array`
    * items `object`
      * count `integer`: Count current of language.
      * language_name `string`: Language's name.
      * previous_count `integer`: Count of previous lanugage.
  * total `integer`

### LegacyAccount
* LegacyAccount `object`
  * email `string`: The calling user's email.
  * linkedProviders `array`: Array of linked authentication providers associated with the account.
    * items `string`
  * name `string`: The account name of the calling user.

### LegacyAccountResponse
* LegacyAccountResponse `object`
  * account `object`: Object containing the account information.

### LegacyApp
* LegacyApp `object`
  * collaborators `object`
  * deployments `array`
    * items `string`
  * name `string`: The app name.

### LegacyAppListResponse
* LegacyAppListResponse `object`
  * apps `array`
    * items `object`
      * collaborators `object`
      * deployments `array`
        * items `string`
      * name `string`: The app name.

### LegacyAppResponse
* LegacyAppResponse `object`
  * app `object`
    * collaborators `object`
    * deployments `array`
      * items `string`
    * name `string`: The app name.

### LegacyAuthenticationResponse
* LegacyAuthenticationResponse `object`
  * authenticated `boolean`: The authentication status of the user.

### LegacyCodePushApp
* LegacyCodePushApp `object`
  * manuallyProvisionDeployments `boolean`: Whether the user provided their own deployments. Not currently in use.
  * name **required** `string`: The app name.
  * os `string`: The app os.
  * platform `string`: The app platform.

### LegacyCodePushRelease
* LegacyCodePushRelease `object`
  * appVersion `string`: The version of the release
  * blobUrl `string`: Location (URL) of release package
  * diffPackageMap `object`: Object containing URL and size of changed package hashes contained in the release
  * isDisabled `boolean`: Flag used to determine if release is disabled
  * isMandatory `boolean`: Flag used to determine if release is mandatory
  * label `string`: Release label (aka release name)
  * manifestBlobUrl `string`: The URL location of the package's manifest file.
  * releaseMethod `string`: Method used to deploy release
  * releasedByUserId `string`: User ID that triggered most recent release
  * rollout `integer`: Percentage (out of 100) that release is deployed to
  * size `integer`: Size of release package
  * uploadTime `integer`: Release upload time as epoch Unix timestamp

### LegacyCodePushReleaseInfo
* LegacyCodePushReleaseInfo `object`
  * appVersion `string`
  * description `string`
  * isDisabled `boolean`
  * isMandatory `boolean`
  * rollout `integer`

### LegacyCodePushReleaseModification
* LegacyCodePushReleaseModification `object`
  * packageInfo **required** `object`: The release package information

### LegacyCodePushReleaseResponse
* LegacyCodePushReleaseResponse `object`
  * package **required** `object`
    * appVersion `string`: The version of the release
    * blobUrl `string`: Location (URL) of release package
    * diffPackageMap `object`: Object containing URL and size of changed package hashes contained in the release
    * isDisabled `boolean`: Flag used to determine if release is disabled
    * isMandatory `boolean`: Flag used to determine if release is mandatory
    * label `string`: Release label (aka release name)
    * manifestBlobUrl `string`: The URL location of the package's manifest file.
    * releaseMethod `string`: Method used to deploy release
    * releasedByUserId `string`: User ID that triggered most recent release
    * rollout `integer`: Percentage (out of 100) that release is deployed to
    * size `integer`: Size of release package
    * uploadTime `integer`: Release upload time as epoch Unix timestamp

### LegacyCodePushStatusMetricMetadata
* LegacyCodePushStatusMetricMetadata `object`
  * appVersion `string`
  * clientUniqueId `string`
  * deploymentKey `string`
  * label `string`
  * previousDeploymentKey `string`
  * previousLabelOrAppVersion `string`
  * status `string`

### LegacyCollaborator
* LegacyCollaborator `object`
  * isCurrentAccount `boolean`: Is current collaborator the same as current account.
  * permission `string`: Which permission does current account has.

### LegacyCollaborators
* LegacyCollaborators `object`
  * collaborators `object`

### LegacyDeployment
* LegacyDeployment `object`
  * createdTime `integer`: Time at which the deployment was created as a Unix timestamp.
  * id `string`: The ID of the deployment (internal use only).
  * key `string`: Deployment key (aka Deployment Id)
  * name **required** `string`: Updated deployment name
  * package `object`
    * appVersion `string`: The version of the release
    * blobUrl `string`: Location (URL) of release package
    * diffPackageMap `object`: Object containing URL and size of changed package hashes contained in the release
    * isDisabled `boolean`: Flag used to determine if release is disabled
    * isMandatory `boolean`: Flag used to determine if release is mandatory
    * label `string`: Release label (aka release name)
    * manifestBlobUrl `string`: The URL location of the package's manifest file.
    * releaseMethod `string`: Method used to deploy release
    * releasedByUserId `string`: User ID that triggered most recent release
    * rollout `integer`: Percentage (out of 100) that release is deployed to
    * size `integer`: Size of release package
    * uploadTime `integer`: Release upload time as epoch Unix timestamp

### LegacyDeploymentHistory
* LegacyDeploymentHistory `object`: Information about a specific release.
  * allOf `object`
    * appVersion `string`: The version of the release
    * blobUrl `string`: Location (URL) of release package
    * diffPackageMap `object`: Object containing URL and size of changed package hashes contained in the release
    * isDisabled `boolean`: Flag used to determine if release is disabled
    * isMandatory `boolean`: Flag used to determine if release is mandatory
    * label `string`: Release label (aka release name)
    * manifestBlobUrl `string`: The URL location of the package's manifest file.
    * releaseMethod `string`: Method used to deploy release
    * releasedByUserId `string`: User ID that triggered most recent release
    * rollout `integer`: Percentage (out of 100) that release is deployed to
    * size `integer`: Size of release package
    * uploadTime `integer`: Release upload time as epoch Unix timestamp
  * description `string`: The description of the release.
  * originalDeployment `string`: The original deployment of the release, if it's ever been promoted.
  * originalLabel `string`: The original label of the release, if it's ever been updated.
  * packageHash `string`: The package's hash value (internal use).

### LegacyDeploymentHistoryResponse
* LegacyDeploymentHistoryResponse `object`
  * history `array`: Array containing the deployment's package history.
    * items `object`: Information about a specific release.
      * allOf `object`
        * appVersion `string`: The version of the release
        * blobUrl `string`: Location (URL) of release package
        * diffPackageMap `object`: Object containing URL and size of changed package hashes contained in the release
        * isDisabled `boolean`: Flag used to determine if release is disabled
        * isMandatory `boolean`: Flag used to determine if release is mandatory
        * label `string`: Release label (aka release name)
        * manifestBlobUrl `string`: The URL location of the package's manifest file.
        * releaseMethod `string`: Method used to deploy release
        * releasedByUserId `string`: User ID that triggered most recent release
        * rollout `integer`: Percentage (out of 100) that release is deployed to
        * size `integer`: Size of release package
        * uploadTime `integer`: Release upload time as epoch Unix timestamp
      * description `string`: The description of the release.
      * originalDeployment `string`: The original deployment of the release, if it's ever been promoted.
      * originalLabel `string`: The original label of the release, if it's ever been updated.
      * packageHash `string`: The package's hash value (internal use).

### LegacyDeploymentMetric
* LegacyDeploymentMetric `object`
  * active **required** `integer`: The number of devices that have this release installed currently
  * downloaded `integer`: The number of times this release has been downloaded
  * failed `integer`: The number of times this release has failed to be installed on a device
  * installed `integer`: The number of times this release has been installed on a device

### LegacyDeploymentMetricsResponse
* LegacyDeploymentMetricsResponse `object`
  * metrics `object`: Object containing a property named after each release label, which contains an object that contains that release's metrics.

### LegacyDeploymentResponse
* LegacyDeploymentResponse `object`
  * deployment `object`

### LegacyDeploymentsResponse
* LegacyDeploymentsResponse `object`
  * deployments `array`
    * items `object`
      * createdTime `integer`: Time at which the deployment was created as a Unix timestamp.
      * id `string`: The ID of the deployment (internal use only).
      * key `string`: Deployment key (aka Deployment Id)
      * name **required** `string`: Updated deployment name
      * package `object`
        * appVersion `string`: The version of the release
        * blobUrl `string`: Location (URL) of release package
        * diffPackageMap `object`: Object containing URL and size of changed package hashes contained in the release
        * isDisabled `boolean`: Flag used to determine if release is disabled
        * isMandatory `boolean`: Flag used to determine if release is mandatory
        * label `string`: Release label (aka release name)
        * manifestBlobUrl `string`: The URL location of the package's manifest file.
        * releaseMethod `string`: Method used to deploy release
        * releasedByUserId `string`: User ID that triggered most recent release
        * rollout `integer`: Percentage (out of 100) that release is deployed to
        * size `integer`: Size of release package
        * uploadTime `integer`: Release upload time as epoch Unix timestamp

### LegacyUpdateCheckResponse
* LegacyUpdateCheckResponse `object`
  * updateInfo **required**
    * appVersion `string`
    * description `string`
    * isDisabled `boolean`
    * isMandatory `boolean`
    * rollout `integer`
    * downloadURL `string`
    * isAvailable `boolean`
    * label `string`
    * packageHash `string`
    * packageSize `number`
    * shouldRunBinaryVersion `boolean`
    * updateAppVersion `boolean`

### LegacyUpdateInfoData
* LegacyUpdateInfoData
  * appVersion `string`
  * description `string`
  * isDisabled `boolean`
  * isMandatory `boolean`
  * rollout `integer`
  * downloadURL `string`
  * isAvailable `boolean`
  * label `string`
  * packageHash `string`
  * packageSize `number`
  * shouldRunBinaryVersion `boolean`
  * updateAppVersion `boolean`

### LinkAADtoUserRequest
* LinkAADtoUserRequest `object`
  * aad_tenant_ids **required** `array`: An array of AAD tenant data needed to link the user to the tenants
    * items `string`
  * role `string` (values: admin, collaborator, member): The role of the user to be added

### Log
* Log `object`
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogContainer
* LogContainer `object`
  * exceeded_max_limit `boolean`: indicates if the number of available logs are more than the max allowed return limit(100).
  * last_received_log_timestamp `string`: the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
  * logs **required** `array`: the list of logs
    * items `object`
      * device **required** `object`: Device characteristics.
        * app_build **required** `string`: The app's build number, e.g. 42.
        * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
        * app_version **required** `string`: Application version name, e.g. 1.1.0
        * carrier_code `string`: Carrier country code (for mobile devices).
        * carrier_country `string`: Carrier country.
        * carrier_name `string`: Carrier name (for mobile devices).
        * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
        * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
        * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
        * locale **required** `string`: Language code (example: en_US).
        * model `string`: Device model (example: iPad2,3).
        * oem_name `string`: Device manufacturer (example: HTC).
        * os_api_level `integer`: API level when applicable like in Android (example: 15).
        * os_build `string`: OS build code (example: LMY47X).
        * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
        * os_version **required** `string`: OS version (example: 9.3.0).
        * screen_size `string`: Screen size of the device in pixels (example: 640x480).
        * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
        * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
        * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
        * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
        * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
        * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
      * install_id **required** `string`: Install ID.
      * timestamp **required** `string`: Log creation timestamp.
      * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowBooleanProperty
* LogFlowBooleanProperty `object`: Boolean property.
  * value **required** `boolean`: Boolean property value.
  * name **required** `string`
  * type **required** `string`

### LogFlowClearProperty
* LogFlowClearProperty `object`: Clear an existing property.
  * name **required** `string`
  * type **required** `string`

### LogFlowCustomProperty
* LogFlowCustomProperty `object`
  * name **required** `string`
  * type **required** `string`

### LogFlowCustomPropertyLog
* LogFlowCustomPropertyLog `object`: Set or remove custom properties.
  * properties `array`: Custom property changes.
    * items `object`
      * name **required** `string`
      * type **required** `string`
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowDateTimeProperty
* LogFlowDateTimeProperty `object`: Date and time property.
  * value **required** `string`: Date time property value.
  * name **required** `string`
  * type **required** `string`

### LogFlowDevice
* LogFlowDevice `object`: Device characteristics.
  * app_build **required** `string`: The app's build number, e.g. 42.
  * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
  * app_version **required** `string`: Application version name, e.g. 1.1.0
  * carrier_code `string`: Carrier country code (for mobile devices).
  * carrier_country `string`: Carrier country.
  * carrier_name `string`: Carrier name (for mobile devices).
  * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
  * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
  * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
  * locale **required** `string`: Language code (example: en_US).
  * model `string`: Device model (example: iPad2,3).
  * oem_name `string`: Device manufacturer (example: HTC).
  * os_api_level `integer`: API level when applicable like in Android (example: 15).
  * os_build `string`: OS build code (example: LMY47X).
  * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
  * os_version **required** `string`: OS version (example: 9.3.0).
  * screen_size `string`: Screen size of the device in pixels (example: 640x480).
  * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
  * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
  * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
  * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
  * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
  * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.

### LogFlowErrorLog
* LogFlowErrorLog `object`: Error log.
  * app_launch_toffset `integer`: Corresponds to the number of milliseconds elapsed between the time the error occurred and the app was launched.
  * id **required** `string`: Error identifier.
  * session_id **required** `string`: Session ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowEventLog
* LogFlowEventLog `object`: Event log.
  * id **required** `string`: Unique identifier for this event.
  * name **required** `string`: Name of the event.
  * session_id **required** `string`: Session ID.
  * properties `object`: Additional key/value pair parameters.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowGenericLog
* LogFlowGenericLog `object`: Generic log.
  * account_id `string`: Account ID of the authenticated user.
  * auth_provider `string`: Auth service provider.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * event_id `string`: Event ID.
  * event_name `string`: Event name.
  * install_id **required** `string`: Install ID.
  * message_id `string`: Message ID.
  * properties `object`: event specific properties.
  * session_id `string`: Session ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowGenericLogContainer
* LogFlowGenericLogContainer `object`
  * exceeded_max_limit `boolean`: indicates if the number of available logs are more than the max allowed return limit(100).
  * last_received_log_timestamp `string`: the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
  * logs **required** `array`: the list of logs
    * items `object`: Generic log.
      * account_id `string`: Account ID of the authenticated user.
      * auth_provider `string`: Auth service provider.
      * device **required** `object`: Device characteristics.
        * app_build **required** `string`: The app's build number, e.g. 42.
        * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
        * app_version **required** `string`: Application version name, e.g. 1.1.0
        * carrier_code `string`: Carrier country code (for mobile devices).
        * carrier_country `string`: Carrier country.
        * carrier_name `string`: Carrier name (for mobile devices).
        * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
        * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
        * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
        * locale **required** `string`: Language code (example: en_US).
        * model `string`: Device model (example: iPad2,3).
        * oem_name `string`: Device manufacturer (example: HTC).
        * os_api_level `integer`: API level when applicable like in Android (example: 15).
        * os_build `string`: OS build code (example: LMY47X).
        * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
        * os_version **required** `string`: OS version (example: 9.3.0).
        * screen_size `string`: Screen size of the device in pixels (example: 640x480).
        * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
        * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
        * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
        * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
        * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
        * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
      * event_id `string`: Event ID.
      * event_name `string`: Event name.
      * install_id **required** `string`: Install ID.
      * message_id `string`: Message ID.
      * properties `object`: event specific properties.
      * session_id `string`: Session ID.
      * timestamp **required** `string`: Log creation timestamp.
      * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowLog
* LogFlowLog `object`
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowLogContainer
* LogFlowLogContainer `object`
  * exceeded_max_limit `boolean`: indicates if the number of available logs are more than the max allowed return limit(100).
  * last_received_log_timestamp `string`: the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
  * logs **required** `array`: the list of logs
    * items `object`
      * device **required** `object`: Device characteristics.
        * app_build **required** `string`: The app's build number, e.g. 42.
        * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
        * app_version **required** `string`: Application version name, e.g. 1.1.0
        * carrier_code `string`: Carrier country code (for mobile devices).
        * carrier_country `string`: Carrier country.
        * carrier_name `string`: Carrier name (for mobile devices).
        * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
        * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
        * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
        * locale **required** `string`: Language code (example: en_US).
        * model `string`: Device model (example: iPad2,3).
        * oem_name `string`: Device manufacturer (example: HTC).
        * os_api_level `integer`: API level when applicable like in Android (example: 15).
        * os_build `string`: OS build code (example: LMY47X).
        * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
        * os_version **required** `string`: OS version (example: 9.3.0).
        * screen_size `string`: Screen size of the device in pixels (example: 640x480).
        * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
        * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
        * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
        * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
        * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
        * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
      * install_id **required** `string`: Install ID.
      * timestamp **required** `string`: Log creation timestamp.
      * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowLogWithProperties
* LogFlowLogWithProperties `object`
  * properties `object`: Additional key/value pair parameters.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowNumberProperty
* LogFlowNumberProperty `object`: Number property.
  * value **required** `number`: Number property value.
  * name **required** `string`
  * type **required** `string`

### LogFlowPageLog
* LogFlowPageLog `object`: Page view log (as in screens or activities).
  * name **required** `string`: Name of the page.
  * session_id **required** `string`: Session ID.
  * properties `object`: Additional key/value pair parameters.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowPushInstallationLog
* LogFlowPushInstallationLog `object`: Push installation Information.
  * push_token **required** `string`: The PNS handle for this installation.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowStartServiceLog
* LogFlowStartServiceLog `object`: Describe a AppCenter.Start API call from the SDK.
  * services `array`: The list of services of the AppCenter Start API call.
    * items `string`
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowStartSessionLog
* LogFlowStartSessionLog `object`: Required explicit begin session log (a marker event for analytics service).
  * session_id **required** `string`: Session ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogFlowStringProperty
* LogFlowStringProperty `object`: String property.
  * value **required** `string`: String property value.
  * name **required** `string`
  * type **required** `string`

### LogTraceDefinition
* LogTraceDefinition `object`
  * app_secret **required** `string`
  * expiration `string`
  * install_id `string`

### LogWithProperties
* LogWithProperties `object`
  * properties `object`: Additional key/value pair parameters.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### LogWithProperties_Diagnostics
* LogWithProperties_Diagnostics `object`
  * properties `object`: Additional key/value pair parameters.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### Log_Diagnostics
* Log_Diagnostics `object`
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### MSAUser
* MSAUser `object`: an MSA user's hex CID
  * hexcid **required** `string`: the user's CID

### MalwareScanResultPayload
* MalwareScanResultPayload `object`: Malware scan result from Malware Scan service
  * requestId **required** `string`: Scan request identifier
  * result **required** `string` (values: clean, infected, error): Scan result

### ManagementReleaseDetailsResponse
* ManagementReleaseDetailsResponse `object`: Details of an uploaded release
  * buildVersion `string`: The release's buildVersion.<br>
  * createdAt `string`: UTC time the release was created in ISO 8601 format.
  * deletedAt `string`: UTC time the release was created in ISO 8601 format.
  * distinctId `integer`: ID identifying this unique release.
  * enabled `boolean`: This value determines the whether a release currently is enabled or disabled.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * sortVersion `string`: The release's sortVersion.
  * version `string`: The release's short version.<br>

### MemberDevicesInfoResponse
* MemberDevicesInfoResponse `object`: The information for a single distribution group member and their ios device
  * avatar_url `string`: The avatar URL of the user
  * can_change_password `boolean`: User is required to send an old password in order to change the password.
  * device_name **required** `string`: The device description, in the format "iPhone 7 Plus (A1784)"
  * display_name `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * full_device_name `string`: A combination of the device model name and the owner name.
  * id **required** `string`: The unique id (UUID) of the user
  * imei `string`: The device's International Mobile Equipment Identity number. Always empty or undefined at present.
  * invite_pending `boolean`: Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
  * model **required** `string`: The model identifier of the device, in the format iDeviceM,N
  * name `string`: The unique name that is used to identify the user.
  * os_build **required** `string`: The last known OS version running on the device
  * os_version **required** `string`: The last known OS version running on the device
  * owner_id `string`: The user ID of the device owner.
  * registered_at `string`: Timestamp of when the device was registered in ISO format.
  * serial `string`: The device's serial number. Always empty or undefined at present.
  * status **required** `string`: The provisioning status of the device.
  * udid **required** `string`: The Unique Device IDentifier of the device

### MessageEnvelope
* MessageEnvelope `object`: Envelope for messages sent to actors
  * message `object`: Body of the message
  * messageId `string`: Unique id of the message
  * messageType `string`: Type of the message

### MetricsValues
* MetricsValues `object`: A collection of named numeric values

### MetricsValuesByApp
* MetricsValuesByApp `object`: A collection of  named numeric values grouped by app

### Model
* Model `object`
  * count `integer`: Count current of model.
  * model_name `string`: Model's name.
  * previous_count `integer`: Count of previous model.

### Module
* Module `object`

### Modules
* Modules `object`
  * modules `object`

### NativeCrashLog
* NativeCrashLog `string`

### NewAppReleaseAlertingEvent
* NewAppReleaseAlertingEvent: New app release alerting event
  * event_id **required** `string`: A unique identifier for this event instance. Useful for deduplication
  * event_timestamp **required** `string`: ISO 8601 date time when event was generated
  * properties `object`: Obsolete. Use emailProperties.
  * app_release_properties `object`: Properties of new application release
    * app_display_name **required** `string`
    * app_name **required** `string`
    * bundle_identifier **required** `string`
    * distribution_group_id `string`
    * fingerprint `string`
    * icon_link `string`
    * install_link **required** `string`
    * installable `boolean`
    * mandatory_update `boolean`
    * min_os `string`
    * platform **required** `string`
    * provisioning_profile_name `string`
    * provisioning_profile_type `string`
    * release_id **required** `string`
    * release_notes `string`
    * short_version **required** `string`
    * size **required** `integer`
    * uploaded_at **required** `string`: Date and time in ISO 8601 format
    * version **required** `string`
  * disable_webhook `boolean`: indicate whether notify via webhook or not
  * user_ids `array`: List of users who need to receive an email notification. If this is not null, then only sending emails will be triggered even if the event requires calling webhooks or doing other actions.
    * items `string`

### NewCrashGroupAlertingEvent
* NewCrashGroupAlertingEvent: New crash group alerting event
  * event_id **required** `string`: A unique identifier for this event instance. Useful for deduplication
  * event_timestamp **required** `string`: ISO 8601 date time when event was generated
  * properties `object`: Obsolete. Use emailProperties.
  * crash_group_properties `object`: Properties of new crash group
    * app_display_name **required** `string`
    * app_platform **required** `string`
    * app_version **required** `string`
    * id **required** `string`
    * name **required** `string`
    * reason **required** `string`
    * stack_trace **required** `array`
      * items `string`
    * url **required** `string`

### NodeVersion
* NodeVersion `object`: The Node version
  * current `boolean`: If the Node version is default for AppCenter
  * name `string`: The version name

### NodeVersions
* NodeVersions `array`: A list of Node versions
  * items `object`: The Node version
    * current `boolean`: If the Node version is default for AppCenter
    * name `string`: The version name

### NotificationConfig
* NotificationConfig `object`: Type of notification config (NotificationConfigAppleToken, NotificationConfigGoogle, NotificationConfigWindows). The 'type' property must be set to a valid value and the object must include the correct properties for the specified type.
  * type **required** `string` (values: apns_token_config, gcm_config, wns_config)

### NotificationConfigApple
* NotificationConfigApple `object`: Apple notification certificate configuration.
  * cert_encoded **required** `string`: Base64 encoded certificate string.
  * cert_filename **required** `string`: Certificate file name
  * cert_key **required** `string`: Certificate password
  * endpoint_type **required** `string` (values: production, sandbox): Type of endpoint the certificate or token are associated with
  * type **required** `string` (values: apns_token_config, gcm_config, wns_config)

### NotificationConfigAppleResult
* NotificationConfigAppleResult `object`: Apple notification certificate configuration result.
  * cert_expiration **required** `string`: Certificate expiration date.
  * cert_filename **required** `string`: Certificate file name
  * endpoint_type **required** `string` (values: production, sandbox): Type of endpoint the certificate or token are associated with
  * type **required** `string`

### NotificationConfigAppleToken
* NotificationConfigAppleToken `object`: Apple notification auth token configuration. The 'type' property must be set to 'apns_token_config'.
  * endpoint_type **required** `string` (values: production, sandbox): Type of endpoint the certificate or token are associated with
  * id **required** `string`: Application ID.
  * key_id **required** `string`: A 10-character key identifier (kid).
  * prefix **required** `string`: Application prefix.
  * token **required** `string`: Provider Authentication Token.
  * type **required** `string` (values: apns_token_config, gcm_config, wns_config)

### NotificationConfigAppleTokenResult
* NotificationConfigAppleTokenResult `object`: Apple notification auth token configuration result.
  * endpoint_type **required** `string` (values: production, sandbox): Type of endpoint the certificate or token are associated with
  * id **required** `string`: Application ID.
  * key_id **required** `string`: A 10-character key identifier (kid).
  * prefix **required** `string`: Application Prefix.
  * type **required** `string`

### NotificationConfigGoogle
* NotificationConfigGoogle `object`: Google notification configuration. The 'type' property must be set to 'gcm_config'
  * google_api_key **required** `string`: GCM API key.
  * type **required** `string` (values: apns_token_config, gcm_config, wns_config)

### NotificationConfigGoogleResult
* NotificationConfigGoogleResult `object`: Google notification configuration result.
  * google_api_key **required** `string`: GCM API key.
  * type **required** `string`

### NotificationConfigResult
* NotificationConfigResult `object`: Generic notification configuration result.
  * type **required** `string`

### NotificationConfigWindows
* NotificationConfigWindows `object`: WNS notification configuration. The 'type' property must be set to 'wns_config'
  * package_sid **required** `string`: Package security identifier (SID).
  * secret_key **required** `string`: Secret key.
  * type **required** `string` (values: apns_token_config, gcm_config, wns_config)

### NotificationConfigWindowsResult
* NotificationConfigWindowsResult `object`: WNS notification configuration result.
  * package_sid **required** `string`: Package security identifier (SID).
  * secret_key `string`: windows push configuration secret key.
  * type **required** `string`

### NotificationContent
* NotificationContent `object`: Notification definition object
  * body `string`: Notification body
  * custom_data `object`: Notification custom data (such as badge, color, sound, etc.)
  * name **required** `string`: Notification name
  * title `string`: Notification title

### NotificationDefinition
* NotificationDefinition `object`: Notification definition object
  * notification_content **required** `object`: Notification definition object
    * body `string`: Notification body
    * custom_data `object`: Notification custom data (such as badge, color, sound, etc.)
    * name **required** `string`: Notification name
    * title `string`: Notification title
  * notification_target `object`: Type of Notification target (audiences, devices, user ids, account ids or broadcast). The object must include the correct properties for the specified target type except for broadcast.
    * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)

### NotificationDetailsResult
* NotificationDetailsResult `object`: Notification statistics
  * failure_outcomes `array`: Failture outcome counts
    * items `object`: Notification failure outcome count
      * count `integer`: count of this type of failure
      * failure_reason `string`: The reason of the notification failure
  * notification_content **required** `object`: Notification definition object
    * body `string`: Notification body
    * custom_data `object`: Notification custom data (such as badge, color, sound, etc.)
    * name **required** `string`: Notification name
    * title `string`: Notification title
  * name `string`: Notification name
  * notification_id **required** `string`: Notification id.
  * notification_target `object`: Type of Notification target (audiences, devices, user ids, account ids or broadcast). The object must include the correct properties for the specified target type except for broadcast.
    * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)
  * pns_send_failure `integer`: Number of the notifications failed to send to the push provider.
  * pns_send_success `integer`: Number of the notifications successfully sent to push the provider.
  * send_time `string`: Notification send time
  * state **required** `string` (values: Queued, Sending, Completed, Failed, NoTargetFound): State of the notification.

### NotificationFailureOutcomeCount
* NotificationFailureOutcomeCount `object`: Notification failure outcome count
  * count `integer`: count of this type of failure
  * failure_reason `string`: The reason of the notification failure

### NotificationIdList
* NotificationIdList `object`: List of notification Ids
  * values **required** `array`: List of notification Ids.
    * items `string`

### NotificationOverviewResult
* NotificationOverviewResult `object`: Notification statistics
  * name `string`: Notification name
  * notification_id **required** `string`: Notification id.
  * notification_target `object`: Type of Notification target (audiences, devices, user ids, account ids or broadcast). The object must include the correct properties for the specified target type except for broadcast.
    * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)
  * pns_send_failure `integer`: Number of the notifications failed to send to the push provider.
  * pns_send_success `integer`: Number of the notifications successfully sent to push the provider.
  * send_time `string`: Notification send time
  * state **required** `string` (values: Queued, Sending, Completed, Failed, NoTargetFound): State of the notification.

### NotificationPlatformType
* NotificationPlatformType `string` (values: apns, gcm, wns): Notification platform type

### NotificationSendSucceededResult
* NotificationSendSucceededResult `object`: Notification send succeeded.
  * notification_id **required** `string`: The unique notification identifier.

### NotificationTarget
* NotificationTarget `object`: Type of Notification target (audiences, devices, user ids, account ids or broadcast). The object must include the correct properties for the specified target type except for broadcast.
  * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)

### NotificationTargetAccountIds
* NotificationTargetAccountIds `object`: Notification per Account IDs
  * account_ids **required** `array`: List of account IDs to target
    * items `string`: Account Id.
  * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)

### NotificationTargetAudiences
* NotificationTargetAudiences `object`: Notification target audiences.
  * audiences **required** `array`: List of target audiences.
    * items `string`: Audience Id.
  * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)

### NotificationTargetBroadcast
* NotificationTargetBroadcast: Broadcast notification to all the devices
  * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)

### NotificationTargetDevices
* NotificationTargetDevices `object`: Notification target devices. If null, all devices will be targeted(broadcast).
  * devices **required** `array`: List of target devices.
    * items `string`: Device Id
  * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)

### NotificationTargetUserIds
* NotificationTargetUserIds `object`: Notification per User IDs
  * user_ids **required** `array`: List of user IDs to target
    * items `string`: User Id.
  * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)

### NotificationsListResult
* NotificationsListResult `object`: List of notifications
  * nextLink `string`
  * total `integer`: the total count of notifications
  * values **required** `array`
    * items `object`: Notification statistics
      * name `string`: Notification name
      * notification_id **required** `string`: Notification id.
      * notification_target `object`: Type of Notification target (audiences, devices, user ids, account ids or broadcast). The object must include the correct properties for the specified target type except for broadcast.
        * type **required** `string` (values: audiences_target, devices_target, user_ids_target, account_ids_target, broadcast_target)
      * pns_send_failure `integer`: Number of the notifications failed to send to the push provider.
      * pns_send_success `integer`: Number of the notifications successfully sent to push the provider.
      * send_time `string`: Notification send time
      * state **required** `string` (values: Queued, Sending, Completed, Failed, NoTargetFound): State of the notification.

### NotifyReleasesContainer
* NotifyReleasesContainer `object`
  * releases **required** `array`
    * items `object`
      * user_id `string`: Unique user Id.  Will generate a new user Id if not provided.
      * distribution_group `string`: Distribution group Id.
      * release **required** `string`: Release Id.

### NumberProperty
* NumberProperty `object`: Number property.
  * value **required** `number`: Number property value.
  * name **required** `string`
  * type **required** `string`

### NumberProperty_Diagnostics
* NumberProperty_Diagnostics `object`: Number property.
  * value **required** `number`: Number property value.
  * name **required** `string`
  * type **required** `string`

### OS
* OS `object`
  * count `integer`: Count current of OS.
  * os_name `string`: OS name.
  * previous_count `integer`: Count of previous OS.

### OSes
* OSes `object`
  * oses `array`
    * items `object`
      * count `integer`: Count current of OS.
      * os_name `string`: OS name.
      * previous_count `integer`: Count of previous OS.
  * total `integer`

### OperationStatus
* OperationStatus `string` (values: None, Created, Queued, InProgress, Completed, Failed): Operation status

### OptimizelyUserMetaDataRequest
* OptimizelyUserMetaDataRequest `object`
  * metadata `object`

### OptimizelyUserMetaDataResponse
* OptimizelyUserMetaDataResponse `object`
  * metadata `object`
  * userId `string`

### OrgComplianceSettingsRequest
* OrgComplianceSettingsRequest `object`: org settings Request
  * certificate_connection_id **required** `string`: certificate connection id to wrap and resign the app after wrapping

### OrgComplianceSettingsResponse
* OrgComplianceSettingsResponse `object`: org settings response
  * certificate_connection_id **required** `string`: certificate connection id to wrap and resign the app after wrapping
  * id **required** `string`: The internal unique id (UUID) of the organization compliance setting
  * is_mam_enabled `boolean`: flag to tell if mam warpping is enabled on the Org
  * org_id **required** `string`: The internal unique id (UUID) of the organization.

### OrgDistributionGroupAppResponse
* OrgDistributionGroupAppResponse
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * origin `string`: The creation origin of this app
  * platform `string`: The platform of the app

### OrgDistributionGroupDetailsResponse
* OrgDistributionGroupDetailsResponse
  * display_name `string`: The name of the distribution group
  * id **required** `string`: The unique ID of the distribution group
  * is_public **required** `boolean`: Whether the distribution group is public
  * name **required** `string`: The name of the distribution group used in URLs
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this distribution group
  * apps `array`: The apps associated with the distribution group
    * items
      * description `string`: The description of the app
      * display_name **required** `string`: The display name of the app
      * icon_source `string`: The string representation of the source of the app's icon
      * icon_url `string`: The string representation of the URL pointing to the app's icon
      * id **required** `string`: The unique ID (UUID) of the app
      * name **required** `string`: The name of the app used in URLs
      * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
      * owner **required** `object`: The information about the app's owner
        * avatar_url `string`: The avatar URL of the owner
        * display_name **required** `string`: The owner's display name
        * email `string`: The owner's email address
        * id **required** `string`: The unique id (UUID) of the owner
        * name **required** `string`: The unique name that used to identify the owner
        * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
      * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
      * app_secret `string`: A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
      * azure_subscription `object`
        * is_billable `boolean`: If the subscription can be used for billing
        * is_billing `boolean`: If the subscription is used for billing
        * is_microsoft_internal `boolean`: If the subscription is internal Microsoft subscription
        * subscription_id **required** `string`: The azure subscription id
        * subscription_name **required** `string`: The name of the azure subscription
        * tenant_id **required** `string`: The tenant id of the azure subscription belongs to
      * created_at `string`: The created date of this app
      * member_permissions `array`: The permissions of the calling user
        * items `string` (values: manager, developer, viewer, tester)
      * origin `string` (values: appcenter, hockeyapp, codepush): The creation origin of this app
      * platform `string` (values: Java, Objective-C-Swift, UWP, Cordova, React-Native, Unity, Electron, Xamarin, WPF, WinForms, Unknown, Custom): The platform of the app
      * updated_at `string`: The last updated date of this app
  * total_apps_count `number`: The count of apps associated with this distribution group
  * total_users_count `number`: The count of users in the distribution group

### OrgNameAvailabilityResponse
* OrgNameAvailabilityResponse `object`
  * available **required** `boolean`: The availability status of the requested org name
  * name **required** `string`: The generated org name

### OrgUserPermissionResponse
* OrgUserPermissionResponse `object`
  * orgId **required** `string`: The unique id (UUID) of the org
  * userRole **required** `string` (values: admin, collaborator): The user role for the org

### OrganizationAadGroupPatchRequest
* OrganizationAadGroupPatchRequest `object`
  * role `string` (values: admin, collaborator, member): The user's role in the organizatiion

### OrganizationInvitationDetailResponse
* OrganizationInvitationDetailResponse `object`
  * email **required** `string`: The email address of the invited user
  * id **required** `string`: The unique ID (UUID) of the invitation
  * invited_by **required** `object`
    * avatar_url `string`: The avatar URL of the user
    * can_change_password `boolean`: User is required to send an old password in order to change the password.
    * display_name **required** `string`: The full name of the user. Might for example be first and last name
    * email **required** `string`: The email address of the user
    * id **required** `string`: The unique id (UUID) of the user
    * name **required** `string`: The unique name that is used to identify the user.
    * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
    * permissions `array`: The permissions the user has for the app
      * items `string` (values: manager, developer, viewer, tester)
  * is_existing_user **required** `boolean`: Indicates whether the invited user already exists
  * organization **required** `object`
    * avatar_url `string`: The URL to a user-uploaded Avatar image
    * created_at **required** `string`: The creation date of this organization
    * display_name **required** `string`: The display name of the organization
    * id **required** `string`: The internal unique id (UUID) of the organization.
    * name **required** `string`: The slug name of the organization
    * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
    * updated_at **required** `string`: The date the organization was last updated at
  * role `string`: The role assigned to the invited user

### OrganizationInvitationSimpleDetailResponse
* OrganizationInvitationSimpleDetailResponse `object`
  * email **required** `string`: The email address of the invited user
  * id **required** `string`: The unique ID (UUID) of the invitation
  * role **required** `string`: The role assigned to the invited user

### OrganizationPatchRequest
* OrganizationPatchRequest `object`
  * display_name `string`: The full (friendly) name of the organization.
  * name `string`: The name of the organization used in URLs

### OrganizationRequest
* OrganizationRequest `object`
  * display_name `string`: The display name of the organization
  * name `string`: The name of the organization used in URLs

### OrganizationResponse
* OrganizationResponse `object`
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at

### OrganizationResponseInternal
* OrganizationResponseInternal
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at
  * feature_flags `array`: The feature flags that are enabled for this organization
    * items `string`

### OrganizationResponseManagement
* OrganizationResponseManagement
  * avatar_url `string`: The URL to a user-uploaded Avatar image
  * created_at **required** `string`: The creation date of this organization
  * display_name **required** `string`: The display name of the organization
  * id **required** `string`: The internal unique id (UUID) of the organization.
  * name **required** `string`: The slug name of the organization
  * origin **required** `string` (values: appcenter, hockeyapp): The creation origin of this organization
  * updated_at **required** `string`: The date the organization was last updated at
  * feature_flags `array`: The feature flags that are enabled for this organization
    * items `string`
  * created_at `string`: The date when the organization was created
  * email `string`: The organization email, if the app was synced from HockeyApp
  * updated_at `string`: The date when the organization was updated

### OrganizationUserPatchRequest
* OrganizationUserPatchRequest `object`
  * role `string` (values: admin, collaborator, member): The user's role in the organizatiion

### OrganizationUserResponse
* OrganizationUserResponse `object`
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * joined_at **required** `string`: The date when the user joined the organization
  * name **required** `string`: The unique name that is used to identify the user.
  * role **required** `string`: The role the user has within the organization

### Owner
* Owner `object`: The information about the app's owner
  * avatar_url `string`: The avatar URL of the owner
  * display_name **required** `string`: The owner's display name
  * email `string`: The owner's email address
  * id **required** `string`: The unique id (UUID) of the owner
  * name **required** `string`: The unique name that used to identify the owner
  * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'

### PackageHashToBlobInfoMap
* PackageHashToBlobInfoMap `object`

### PageLog
* PageLog `object`: Page view log (as in screens or activities).
  * name **required** `string`: Name of the page.
  * session_id **required** `string`: Session ID.
  * properties `object`: Additional key/value pair parameters.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### PageLog_Diagnostics
* PageLog_Diagnostics `object`: Page view log (as in screens or activities).
  * name **required** `string`: Name of the page.
  * session_id **required** `string`: Session ID.
  * properties `object`: Additional key/value pair parameters.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### PasswordUpdateRequest
* PasswordUpdateRequest `object`
  * new_password **required** `string`: The new password that will be set for the user. Needs to be at least 8 characters long and contain at least one lower- and one uppercase letter.
  * old_password `string`: The old password, if needed.

### PatchReleaseAssetIdRequest
* PatchReleaseAssetIdRequest `object`: Patch the asset id of a release request body
  * ipa_uuids `string`: The ipa UUIDs for this release, as a serialized JSON array
  * package_asset_id **required** `string`: The release new package id in ACFUS
  * upload_id **required** `string`: The release upload id used to upload the release

### PatchReleaseRequest
* PatchReleaseRequest `object`
  * dest_publish_id `string`: Destination Publish Id
  * error_contextId `string`: contextId for failed error message
  * error_details `string`: failure error details from store
  * is_wrapper_request `boolean`: request is for wrapping or not
  * status `string`: updated status of release
  * wrap_package_url `string`: package url for wrapping request

### PatchReleaseUploadStatusRequest
* PatchReleaseUploadStatusRequest `object`
  * upload_status **required** `string` (values: uploadFinished, uploadCanceled): The new status of the release upload

### PatchReleaseUploadStatusResponse
* PatchReleaseUploadStatusResponse `object`
  * id **required** `string`: The ID for the upload.
  * upload_status **required** `string` (values: uploadStarted, uploadFinished, uploadCanceled, readyToBePublished, malwareDetected, error): The current upload status.

### PatchRepoInfo
* PatchRepoInfo `object`
  * external_user_id `string`: The external user ID

### PerformanceReport
* Performance Report `object`: Report data for a single test (a.k.a. scenario)
  * device_snapshot_id `string`
  * performance_data `object`
    * elapsed-secs **required** `number`
    * elapsed-secs-end **required** `number`
    * elapsed-secs-start **required** `number`
    * id **required** `string`
    * steps **required** `array`
      * items `object`
        * avg-cpu `number`
        * avg-mem `number`
        * elapsed-secs `number`
        * elapsed-secs-end `number`
        * elapsed-secs-start `number`
        * id `string`
        * name `string`
        * samples `array`
          * items `object`
  * video `object`
    * video_metadata **required** `object`
      * events `array`
        * items `object`
          * id `string`
          * millis `number`
          * name `string`
          * type `string`
    * video_url **required** `string`

### Place
* Place `object`: The place code and the count.
  * code `string`: The place code.
  * count `integer`: The count of the this place.
  * previous_count `integer`: The count of previous time range of the place.

### Places
* Places `object`: Places and count during the time range in descending order.
  * places `array`
    * items `object`: The place code and the count.
      * code `string`: The place code.
      * count `integer`: The count of the this place.
      * previous_count `integer`: The count of previous time range of the place.
  * total `integer`

### PostCreateReleaseUploadRequest
* PostCreateReleaseUploadRequest `object`
  * build_number `string`: User defined build number
  * build_version `string`: User defined build version

### PostExternalDownloadUrl
* PostExternalDownloadUrl `object`: Set the download URL of an external build
  * download_url `string`: The new download URL

### PostPlaceholderReleaseUploadForDeleteRequest
* PostPlaceholderReleaseUploadForDeleteRequest `object`: Set additional details for the placeholder ReleaseUpload that will be scheduled for delete.
  * error_details `string`: Additional details to identify why the placeholder ReleaseUpload is being created.

### PostRepositoryProviderMappingRequest
* PostRepositoryProviderMappingRequest `object`
  * account_id **required** `string`: App Center account id to link to this provider and external id
  * external_account_id **required** `string`: Id of user in the external provider service
  * provider **required** `string` (values: github): Supported external providers of source control repositories

### PrivateAppleCertificateSecretResponse
* PrivateAppleCertificateSecretResponse `object`: private Apple connection secrets response
  * data **required** `object`: apple secret details
    * base64Certificate **required** `string`: The certificate contents in base 64 encoded string
    * certificateValidityEndDate **required** `string`: The date-time till which the certificate is valid
    * certificateValidityStartDate **required** `string`: The date-time from which the certificate is valid
    * displayName **required** `string`: The display name (CN) of the certificate
    * password **required** `string`: The password for the certificate
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### PrivateAppleCredentialsSecretResponse
* PrivateAppleCredentialsSecretResponse `object`: private Apple connection secrets response
  * data **required** `object`: apple secret details
    * authCode `string`: 6 digit auth code
    * password `string`: password to connect to apple store.
    * username `string`: username to connect to apple store.
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### PrivateAppleSecretResponse
* PrivateAppleSecretResponse: private Apple connection secrets response
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### PrivateBasicReleaseDetailsResponse
* PrivateBasicReleaseDetailsResponse `object`: Basic information on a release for private apis
  * destination_type `string` (values: group, store, tester): The destination type.<br>
  * distribution_group_id `string`: the destination id of release where it is distributed.
  * id `integer`: ID identifying this unique release.
  * is_external_build `boolean`: This value determines if a release is external or not.
  * is_latest `boolean`: Indicates if this is the latest release in the group.
  * mandatory_update `boolean`: A boolean which determines whether the release is a mandatory update or not.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * publishing_status `string`: the publishing status of the distributed release
  * short_version `string`: The release's short version.<br>
  * uploaded_at `string`: UTC time in ISO 8601 format of the uploaded time.
  * version `string`: The release's version.<br>

### PrivateCreateStoreRequest
* PrivateCreateStoreRequest `object`: create the store through private API. Used by UI.
  * intune_details `object`
    * app_category `object`
      * name `string`: display name for the app category
    * target_audience `object`
      * name `string`: display name for the target audience/group
    * tenant_id `string`: tenant id of the intune store
  * name `string`: name of the store.
  * type `string` (values: intune): store Type

### PrivateGooglePlayConnectionSecretResponse
* PrivateGooglePlayConnectionSecretResponse `object`: private google connection secrets response
  * data **required** `object`: google secret details
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### PrivateIntuneStoreRequest
* PrivateIntuneStoreRequest `object`
  * app_category `object`
    * name `string`: display name for the app category
  * target_audience `object`
    * name `string`: display name for the target audience/group
  * tenant_id `string`: tenant id of the intune store

### PrivateJiraConnectionSecretResponse
* PrivateJiraConnectionSecretResponse `object`: private Jira connection secrets response
  * data **required** `object`: jira secret details
    * baseUrl **required** `string`: baseUrl to connect to jira instance
    * password **required** `string`: password to connect to jira instance
    * username **required** `string`: username to connect to jira instance
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### PrivateReleaseDetailsResponse
* PrivateReleaseDetailsResponse `object`: Details of an uploaded release
  * android_min_api_level `string`: The release's minimum required Android API level.
  * app_display_name `string`: The app's display name.
  * app_icon_url `string`: A URL to the app's icon.
  * app_name `string`: The app's name (extracted from the uploaded release).
  * bundle_identifier `string`: The identifier of the apps bundle.
  * destination_type `string` (values: group, store, tester): The destination type.<br>
  * device_family `string`: The release's device family.
  * distribution_group_id `string`: the destination where release is distributed
  * download_url `string`: The URL that hosts the binary for this release.
  * fingerprint `string`: MD5 checksum of the release binary.
  * id `integer`: ID identifying this unique release.
  * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * is_external_build `boolean`: This value determines if a release is external or not.
  * is_provisioning_profile_syncing `boolean`: A flag that determines whether the release's provisioning profile is still extracted or not.
  * min_os `string`: The release's minimum required operating system.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * provisioning_profile_name `string`: The release's provisioning profile name.
  * provisioning_profile_type `string` (values: adhoc, enterprise, other): The type of the provisioning profile for the requested app version.
  * publishing_status `string`: the publishing status of the distributed release
  * release_notes `string`: The release's release notes.
  * short_version `string`: The release's short version.<br>
  * size `integer`: The release's size in bytes.
  * status `string` (values: available, unavailable): OBSOLETE. Will be removed in next version. The availability concept is now replaced with distributed. Any 'available' release will be associated with the default distribution group of an app.</br>
  * uploaded_at `string`: UTC time in ISO 8601 format of the uploaded time.
  * version `string`: The release's version.<br>

### PrivateReleaseUpdateRequest
* PrivateReleaseUpdateRequest `object`: A request containing information for updating a release.
  * publishing_status `string` (values: failed, processing, submitted, timeout): The store publishing status.

### PrivateSharedConnectionResponse
* PrivateSharedConnectionResponse `object`: PrivateSharedConnectionResponse
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### PrivateUpdateUploadDetails
* PrivateUpdateUploadDetails `object`: Details of the upload to patch
  * error_message **required** `string`: Message of the error
  * status **required** `string` (values: uploadStarted, uploadFinished, readyToBePublished, malwareDetected, error)

### ProvisioningProfile
* ProvisioningProfile `object`: An object containing information about an iOS provisioning profile.
  * application_identifier **required** `string`: The application identifier.
  * expired_at **required** `string`: The profile's expiration date in RFC 3339 format, i.e. 2017-07-21T17:32:28Z
  * name **required** `string`: The name of the provisioning profile.
  * profile_type **required** `string` (values: adhoc, enterprise, other)
  * team_identifier **required** `string`: The team identifier.
  * udids `array`
    * items `string`: A UDID of a provisioned device.

### ProvisioningProfileFile
* ProvisioningProfileFile `object`: Provisioning profile fetch and store information
  * fileId `string`: File id from secure file storage
  * fileName `string`: Name of uploaded provisioning profile
  * targetBundleIdentifier `string`: Target the provisioning profile is used to sign
  * uploadId `string`: Upload id to App Center File Upload Store

### ProvisioningProfileMigration
* ProvisioningProfileMigration `object`: Describes the migration schema for a provisioning profile defined in HockeyApp.
  * bundle_id **required** `string`: The bundle/application identifier.
  * expired_at `string`: The provisioning profile's expiration date in RFC 3339 format, i.e. 2017-07-21T17:32:28Z.
  * is_appex **required** `boolean`: A boolean value that indicates whether the provisioning profile represents an app extension.
  * name **required** `string`: The name of the provisioning profile.
  * team_identifier **required** `string`: The team identifier.
  * type **required** `integer` (values: 0, 1, 2): The type of provisoning profile.
  * udids `array`: A list of UDIDs of provisioned devices.
    * items `string`: A UDID of a provisioned device.
  * url `string`: A provisioning profile URL that indicates where to download it from.

### ProvisioningProfileResponse
* ProvisioningProfileResponse `object`: A response containing information about an iOS provisioning profile.
  * appex_profiles `array`: Array of provisioning profiles for any app extensions
    * items [ProvisioningProfileResponse](#provisioningprofileresponse)
  * provisioning_bundle_id `string`: The bundle identifier associated with the profile.
  * provisioning_profile_name `string`: The name of the provisioning profile.
  * provisioning_profile_type **required** `string` (values: adhoc, enterprise, other)
  * team_identifier `string`: The team identifier.
  * udids `array`
    * items `string`: A UDID of a provisioned device.

### PublicDistributionGroupsResponse
* PublicDistributionGroupsResponse `object`
  * id **required** `string`: The id of the distribution group

### PublishDevicesRequest
* PublishDevicesRequest `object`: The publising information.
  * account_service_connection_id `string`: The service_connection_id of the stored Apple credentials instead of username, password.
  * devices `array`: Array of device UDID's to be published to the Apple Developer account.
    * items `string`
  * password `string`: The password for the Apple Developer account to publish the devices to.
  * publish_all_devices `boolean`: When set to true, all unprovisioned devices will be published to the Apple Developer account.  When false, only the provided devices will be published to the Apple Developer account.
  * username `string`: The username for the Apple Developer account to publish the devices to.

### PublishDevicesResponse
* PublishDevicesResponse `object`: The information for a single iOS device
  * profile_file_name `string`: The file name for the provisioning profile.
  * profiles_zip_base64 **required** `string`: The updated provisioning profiles zip base64 encoded.

### PushInstallationLog
* PushInstallationLog `object`: Push installation Information.
  * push_token **required** `string`: The PNS handle for this installation.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### PushInstallationLog_Diagnostics
* PushInstallationLog_Diagnostics `object`: Push installation Information.
  * push_token **required** `string`: The PNS handle for this installation.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### RawCrashLog
* RawCrashLog `object`

### ReasonStackFrame
* ReasonStackFrame `object`: frame belonging to the reason of the crash
  * app_code `boolean`: this line isn't from any framework
  * class_method `boolean`: is a class method
  * class_name `string`: name of the class
  * code_formatted `string`: Formatted frame string
  * code_raw `string`: Unformatted Frame string
  * exception_type `string`: Exception type.
  * file `string`: name of the file
  * framework_name `string`: Name of the framework
  * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
  * line `integer`: line number
  * method `string`: name of the method
  * method_params `string`: parameters of the frames method
  * os_exception_type `string`: OS exception type. (aka. SIGNAL)

### Release
* Release `object`
  * release **required** `string`: Release Id.

### ReleaseCount
* ReleaseCount `object`
  * distribution_group `string`: Distribution group queried.
  * release_id **required** `string`
  * total_count **required** `integer`: Total count of downloads.
  * unique_count **required** `integer`: Count of unique downloads against user id.

### ReleaseCounts
* ReleaseCounts `object`
  * counts **required** `array`
    * items `object`
      * distribution_group `string`: Distribution group queried.
      * release_id **required** `string`
      * total_count **required** `integer`: Total count of downloads.
      * unique_count **required** `integer`: Count of unique downloads against user id.
  * total `integer`

### ReleaseCreateRequest
* ReleaseCreateRequest `object`: A request containing information for creating a release.
  * appex_provisioning_profiles `array`: iOS app extension provisioning profiles included in the release.
    * items `object`: An object containing information about an iOS provisioning profile.
      * application_identifier **required** `string`: The application identifier.
      * expired_at **required** `string`: The profile's expiration date in RFC 3339 format, i.e. 2017-07-21T17:32:28Z
      * name **required** `string`: The name of the provisioning profile.
      * profile_type **required** `string` (values: adhoc, enterprise, other)
      * team_identifier **required** `string`: The team identifier.
      * udids `array`
        * items `string`: A UDID of a provisioned device.
  * build_version `string`: The release's short version.<br>
  * device_family `string`: The release's device family.
  * file_extension `string`: The file extension of the asset. Does not include the initial period.
  * fingerprint **required** `string`: MD5 checksum of the release binary.
  * icon_asset_id `string`: The assetId associated with the icon uploaded to app center file upload service.
  * ipa_uuids `array`: A list of UUIDs for architectures for an iOS app.
    * items `object`: An object containing a UUID for an architecture for an iOS app.
      * architecture **required** `string`: The architecture that the UUID belongs to, i.e. armv7 or arm64.
      * uuid **required** `string`: The unique identifier.
  * languages `array`: The languages supported by the release. Limited to 510 characters in a serialized array.
    * items `string`
  * minimum_os_version `string`: The release's minimum required operating system.
  * package_url `string`: The URL to the release's binary.
  * provision `object`: An object containing information about an iOS provisioning profile.
    * application_identifier **required** `string`: The application identifier.
    * expired_at **required** `string`: The profile's expiration date in RFC 3339 format, i.e. 2017-07-21T17:32:28Z
    * name **required** `string`: The name of the provisioning profile.
    * profile_type **required** `string` (values: adhoc, enterprise, other)
    * team_identifier **required** `string`: The team identifier.
    * udids `array`
      * items `string`: A UDID of a provisioned device.
  * proxy_flow `boolean`: If true this release was uploaded to the AKS upload proxy
  * size **required** `integer`: The release's size in bytes.
  * unique_identifier `string`: The identifier of the app's bundle.
  * upload_id **required** `string`: The upload id associated with the release, to map to the releases upload table.
  * version `string`: The release's version.<br>

### ReleaseDailySessions
* ReleaseDailySessions `object`
  * avgSessionsPerDay `number`
  * sessions `array`: Sessions per day.
    * items `object`
      * count `integer`
      * datetime `string`: The ISO 8601 datetime.
  * totalSessionCounts `integer`

### ReleaseDestinationRequest
* ReleaseDestinationRequest `object`
  * id **required** `string`: Unique id of the release destination
  * mandatory_update `boolean`: Flag to mark the release for the provided destinations as mandatory
  * notify_testers `boolean`: Flag to enable or disable notifications to testers

### ReleaseDestinationResponse
* ReleaseDestinationResponse `object`
  * id **required** `string`: Unique id for the release destination
  * mandatory_update **required** `boolean`: Flag to mark the release for the provided destinations as mandatory
  * provisioning_status_url `string`: The url to check provisioning status.

### ReleaseDetailsResponse
* ReleaseDetailsResponse `object`: Details of an uploaded release
  * android_min_api_level `string`: The release's minimum required Android API level.
  * app_display_name **required** `string`: The app's display name.
  * app_icon_url **required** `string`: A URL to the app's icon.
  * app_name **required** `string`: The app's name (extracted from the uploaded release).
  * app_os `string`: The app's OS.
  * build `object`: Contains metadata about the build that produced the release being uploaded
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * bundle_identifier `string`: The identifier of the apps bundle.
  * can_resign `boolean`: In calls that allow passing `udid` in the query string, this value determines if a release can be re-signed. When true, after a re-sign, the tester will be able to install the release from his registered devices. Will not be returned for non-iOS platforms.
  * destination_type `string` (values: group, store, tester): OBSOLETE. Will be removed in next version. The destination type.<br>
  * destinations `array`: A list of distribution groups or stores.
    * items
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
      * is_latest `boolean`: Is the containing release the latest one in this distribution group.
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
      * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * destination_type `string` (values: group, store, tester): Destination can be either store or group.
      * display_name `string`: Display name for the group or tester
  * device_family `string`: The release's device family.
  * distribution_groups `array`: OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution group.
      * name `string`: A name identifying a unique distribution group.
  * distribution_stores `array`: OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release.
    * items `object`
      * id **required** `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay, apple, none): type of the distribution store currently stores type can be intune, googleplay or windows.
  * download_url `string`: The URL that hosts the binary for this release.
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * fingerprint `string`: MD5 checksum of the release binary.
  * id **required** `integer`: ID identifying this unique release.
  * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * is_external_build `boolean`: This value determines if a release is external or not.
  * is_provisioning_profile_syncing `boolean`: A flag that determines whether the release's provisioning profile is still extracted or not.
  * is_udid_provisioned `boolean`: In calls that allow passing `udid` in the query string, this value will hold the provisioning status of that UDID in this release. Will be ignored for non-iOS platforms.
  * min_os `string`: The release's minimum required operating system.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * package_hashes `array`: Hashes for the packages.
    * items `string`
  * provisioning_profile_expiry_date `string`: expiration date of provisioning profile in UTC format.
  * provisioning_profile_name `string`: The release's provisioning profile name.
  * provisioning_profile_type `string` (values: adhoc, enterprise, other): The type of the provisioning profile for the requested app version.
  * release_notes `string`: The release's release notes.
  * short_version **required** `string`: The release's short version.<br>
  * size `integer`: The release's size in bytes.
  * status `string`: Status of the release.
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>

### ReleaseDetailsUpdateRequest
* ReleaseDetailsUpdateRequest `object`: A request containing information for updating details of a release
  * build `object`: Contains metadata about the build that produced the release being uploaded
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * enabled `boolean`: Toggle this release to be enable distribute/download or not.
  * release_notes `string`: Release notes for this release.

### ReleaseDetailsUpdateResponse
* ReleaseDetailsUpdateResponse `object`: Response for updating release details
  * release_notes `string`

### ReleaseExternalUrlUpdateResponse
* ReleaseExternalUrlUpdateResponse `object`: Response for updating release external url
  * external_download_url `string`

### ReleaseMetadata
* ReleaseMetadata `object`: An object containing all the release metadata.
  * dsa_signature `string`: dsa signature of the release for the sparkle feed.
  * ed_signature `string`: edDSA signature of the release for the sparkle feed.

### ReleaseProvisionResponse
* ReleaseProvisionResponse `object`: Response for provisioning a release
  * status_url `string`: The url to check provisioning status.

### ReleasePublishErrorResponse
* ReleasePublishErrorResponse `object`: ReleasePublishErrorResponse
  * is_log_available `boolean`: boolean property to tell if logs are available for download
  * message `string`: error Details

### ReleaseRealTimeStatusResponse
* ReleaseRealTimeStatusResponse `object`: status of the app from store
  * app_id `string`: app id
  * release_id `string`: release id
  * status `object`: Status Data from store
    * status `string`: status from store
    * storetype `string`: store type
    * track `string`: track information from store
    * version `string`: version of the app from store

### ReleaseStoreDestinationRequest
* ReleaseStoreDestinationRequest `object`
  * id **required** `string`: Unique id of the release destination

### ReleaseStoreDestinationResponse
* ReleaseStoreDestinationResponse `object`
  * id **required** `string`: Unique id for the release destination

### ReleaseTesterDestinationRequest
* ReleaseTesterDestinationRequest `object`
  * email **required** `string`: Tester's email address
  * mandatory_update `boolean`: Flag to mark the release for the provided destinations as mandatory
  * notify_testers `boolean`: Flag to enable or disable notifications to testers

### ReleaseUpdateError
* ReleaseUpdateError
  * code **required** `string` (values: BadRequest, Conflict, NotAcceptable, NotFound, InternalServerError, Unauthorized, TooManyRequests)
  * message **required** `string`
  * destinations `array`
    * items `object`
      * code `string`: Error Codes:<br>
      * id `string`
      * message `string`
      * name `string`
  * mandatory_update `boolean`
  * release_notes `string`

### ReleaseUpdateRequest
* ReleaseUpdateRequest `object`: A request containing information for updating a release.
  * build `object`: Contains metadata about the build that produced the release being uploaded
    * branch_name `string`: The branch name of the build producing the release
    * commit_hash `string`: The commit hash of the build producing the release
    * commit_message `string`: The commit message of the build producing the release
  * destination_id `string`: OBSOLETE. Will be removed in future releases - use destinations instead. Id of a destination. The release will be associated with this destination. If the destination doesn't exist a 400 is returned. If both destination name and id are passed, the id is taking precedence.
  * destination_name `string`: OBSOLETE. Will be removed in future releases - use destinations instead. Name of a destination. The release will be associated with this destination. If the destination doesn't exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence.
  * destination_type `string`: Not used anymore.
  * destinations `array`: Distribute this release under the following list of destinations (store groups or distribution groups).
    * items `object`: A unique identifier for a destination. A destination can be identified by an ID (guid) or by a name. DestinationId encapsulates both options. A destination can be either a distribution group or a store.
      * id `string`: Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
      * name `string`: Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
  * distribution_group_id `string`: OBSOLETE. Will be removed in future releases - use destinations instead. Id of a distribution group. The release will be associated with this distribution group. If the distribution group doesn't exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence.
  * distribution_group_name `string`: OBSOLETE. Will be removed in future releases - use destinations instead. Name of a distribution group. The release will be associated with this distribution group. If the distribution group doesn't exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence.
  * mandatory_update `boolean`: A boolean which determines whether this version should be a mandatory update or not.
  * metadata `object`: An object containing all the release metadata.
    * dsa_signature `string`: dsa signature of the release for the sparkle feed.
    * ed_signature `string`: edDSA signature of the release for the sparkle feed.
  * notify_testers `boolean`: A boolean which determines whether to notify testers of a new release, default to true.
  * release_notes `string`: Release notes for this release.

### ReleaseUpdateResponse
* ReleaseUpdateResponse `object`: Response for updating a release
  * destinations `array`
    * items `object`
      * id `string`
      * name `string`
  * enabled `boolean`
  * mandatory_update `boolean`
  * provisioning_status_url `string`
  * release_notes `string`

### ReleaseUploadBeginRequest
* ReleaseUploadBeginRequest `object`: A request containing information pertaining to begin a release upload process
  * build_number `string`: The build number of the uploaded binary, used with build_version for macOS app support.
  * build_version `string`: The build version of the uploaded binary, used for macOS, Windows and Custom app support.
  * release_id `number`: Optional value for explicitly specifying the ID of existing release.

### ReleaseUploadBeginResponse
* ReleaseUploadBeginResponse `object`: A response containing information pertaining to starting a release upload process
  * asset_domain `string`: The URL for the current upload, reserved for future use
  * asset_id `string`: The ID for the current upload, reserved for future use
  * asset_token `string`: The token for the current upload, reserved for future use
  * upload_id **required** `string`: The ID for the current upload
  * upload_url **required** `string`: The URL where the client needs to upload the release to

### ReleaseUploadEndRequest
* ReleaseUploadEndRequest `object`: A request containing information pertaining to complete a release upload process
  * status **required** `string` (values: committed, aborted): The desired operation for the upload

### ReleaseUploadEndResponse
* ReleaseUploadEndResponse `object`: A response containing information about the uploaded release.
  * release_id `number`: The ID of the release.
  * release_url `string`: A URL to the new release. If upload was aborted will be null.

### ReleaseWithDistributionGroup
* ReleaseWithDistributionGroup `object`
  * distribution_group `string`: Distribution group Id.
  * release **required** `string`: Release Id.

### ReleaseWithDistributionGroupAndUserId
* ReleaseWithDistributionGroupAndUserId `object`
  * user_id `string`: Unique user Id.  Will generate a new user Id if not provided.
  * distribution_group `string`: Distribution group Id.
  * release **required** `string`: Release Id.

### RepoConfig
* RepoConfig `object`
  * id **required** `string`: Repository configuration identifier
  * state **required** `string` (values: unauthorized, inactive, active): State of the configuration
  * type **required** `string`: Type of repository
  * user_email `string`: Email of the user who linked the repository
  * installation_id `string`: The GitHub App Installation id. Required for repositories connected from GitHub App
  * external_user_id `string`: The external user id from the repository provider. Required for GitLab.com repositories
  * repo_id `string`: The repository id from the repository provider. Required for repositories connected from GitHub App and GitLab.com
  * repo_url `string`: The repository's git url, must be a HTTPS URL
  * service_connection_id `string`: The id of the service connection (private). Required for GitLab self-hosted repositories

### RepoConfigCommon
* RepoConfigCommon `object`
  * external_user_id `string`: The external user id from the repository provider. Required for GitLab.com repositories
  * repo_id `string`: The repository id from the repository provider. Required for repositories connected from GitHub App and GitLab.com
  * repo_url `string`: The repository's git url, must be a HTTPS URL
  * service_connection_id `string`: The id of the service connection (private). Required for GitLab self-hosted repositories

### RepoConfigPostRequest
* RepoConfigPostRequest `object`
  * installation_id `string`: The GitHub App Installation id. Required for repositories connected from GitHub App
  * external_user_id `string`: The external user id from the repository provider. Required for GitLab.com repositories
  * repo_id `string`: The repository id from the repository provider. Required for repositories connected from GitHub App and GitLab.com
  * repo_url `string`: The repository's git url, must be a HTTPS URL
  * service_connection_id `string`: The id of the service connection (private). Required for GitLab self-hosted repositories

### RepoConfigs
* RepoConfigs `array`: A list of repo configurations
  * items `object`
    * id **required** `string`: Repository configuration identifier
    * state **required** `string` (values: unauthorized, inactive, active): State of the configuration
    * type **required** `string`: Type of repository
    * user_email `string`: Email of the user who linked the repository
    * installation_id `string`: The GitHub App Installation id. Required for repositories connected from GitHub App
    * external_user_id `string`: The external user id from the repository provider. Required for GitLab.com repositories
    * repo_id `string`: The repository id from the repository provider. Required for repositories connected from GitHub App and GitLab.com
    * repo_url `string`: The repository's git url, must be a HTTPS URL
    * service_connection_id `string`: The id of the service connection (private). Required for GitLab self-hosted repositories

### RepoInfo
* RepoInfo `object`
  * external_user_id `string`: The external user ID
  * repo_url **required** `string`: The repository url

### RequestType
* RequestType `string` (values: Unsupported, Delete, Purge, UndoDelete, Scheduled, AppDelete, AppPurge, AppUndoDelete, Export, CustomerAccountDelete, CustomerAccountExport, CustomerUserDelete, CustomerUserExport): Request type

### ResendVerificationRequest
* ResendVerificationRequest `object`
  * name **required** `string`: The email or name of the user to resend verification

### ResetPasswordUsingTokenRequest
* ResetPasswordUsingTokenRequest `object`
  * new_password **required** `string`: The new password. Needs to be at least 8 characters long and contain at least one lower- and one uppercase letter.
  * token **required** `string`: The reset password token that was sent to the user

### ResignAttemptResponse
* ResignAttemptResponse `object`: URL that can be used to check the status of the update devices operation and the updated profiles.
  * appId **required** `string`: App ID that the resign operation is being performed against.
  * contextId **required** `string`: Context ID for the resigning operation.
  * destinations `array`: List of destinations that the resign operation is being performed against.
    * items `object`
  * errorCode `string`: Error code associated with the exception.
  * errorMessage `string`: Error message associated with the exception.
  * originalReleaseId **required** `number`: ID of the release which is being resigned.
  * resignId **required** `string`: ID of the resign operation.
  * startTime **required** `number`: The time that the resign operation was started.
  * status **required** `string`: The status of the resigning operation.
  * userId **required** `string`: ID of the user performing the resign operaiton.

### ResignInfo
* ResignInfo `object`: The information for a resign attempt.
  * certificate_expiration `string`: The expiration date of the certificate used for the resign attempt
  * certificate_name `string`: The name of the certificate used for the resign attempt
  * group_name `string`: The group name of the resign attempt
  * profile_name `string`: The provisioning profile name of group for the given resign attempt
  * profile_type `string`: The provisioning profile type of group for the given resign attempt

### ResignStatus
* ResignStatus `object`: The status of the resign operation.
  * error_code `string`: Error code for any error that occured during the resigning operation.
  * error_message `string`: Error message for any error that occured during the resigning operation.
  * status **required** `string`: The status of the resign

### RetentionSettings
* RetentionSettings `object`
  * retention_in_days **required** `integer` (values: 28, 90)

### SecretDetails
* SecretDetails `object`
  * id_token `string`: the id token of user
  * refresh_token `string`: the refresh token for user
  * refresh_token_expiry `string`: the expiry of refresh token

### SendNotificationRequest
* SendNotificationRequest `object`
  * userIds **required** `array`: user list to send email notification
    * items `string`

### ServiceBillingPlans
* ServiceBillingPlans `object`: Billing Plans for a single service
  * canSelectTrialPlan `boolean`: Can customer select trial plan for that service (if it exists)?
  * currentBillingPeriod `object`: Billing plans for a given period
    * byAccount `object`: Selection of a billing plan
      * count `integer`: Number of instances of the billing plan.
      * plan `object`: Billing Plan
        * attributes `object`: Collection of attribute values.
        * id `string`: The Billing Plan ID
        * limits `object`: A collection of named numeric values
        * parentId `string`
        * paymentSource `string` (values: None, AppCenter, GitHub, Xtc): Service that receives payments for this billing plan.
        * price `number`: Price of the Billing Plan
        * service `string` (values: Build, Test): Name of the service that the plan applies to.
        * version `string`: Version of the Billing Plan schema
    * endTime `string`: Exclusive end of the period.
    * startTime `string`: Inclusive start of the period
  * lastTrialPlanExpirationTime `string`: Expiration time of the last selected trial plan. Will be null if trial plan was not used.

### ServiceBusStatusResponse
* ServiceBusStatusResponse `object`
  * status **required** `string`
  * subscriptions `array`
    * items `object`
      * message_count **required** `number`: The number of messages in the subscription
      * name **required** `string`: The name of the subsciption (prefixed with the topic name)

### ServiceResourceUsage
* ServiceResourceUsage `object`: Resource usage for a single Mobile Center service
  * currentUsagePeriod `object`: Usage for a single period
    * byAccount `object`: A collection of named numeric values
    * byApp `object`: A collection of  named numeric values grouped by app
    * endTime `string`: Exclusive end time of the usage period.
    * startTime `string`: Inclusive start time of the usage period

### SessionCounts
* SessionCounts `array`
  * items `object`
    * count `integer`: Count of the object.
    * datetime `string`: The ISO 8601 datetime.

### SessionDurationsDistribution
* SessionDurationsDistribution `object`
  * average_duration `string`: The average session duration for current time range.
  * distribution `array`: The count of sessions in these buckets.
    * items `object`
      * bucket `string`: The bucket name.
      * count `integer`: The count of sessions in current bucket.
  * previous_average_duration `string`: The previous average session duration for previous time range.

### SessionsPerDevice
* SessionsPerDevice `object`
  * average_sessions_per_user `number`: Average seesion per user.
  * previous_average_sessions_per_user `number`: Previous average session per user.
  * previous_total_count `integer`: Previous total count.
  * sessions_per_user `array`: The session count for each interval per device.
    * items `object`
      * count `number`: Count.
      * datetime `string`: The ISO 8601 datetime.
  * total_count `integer`: Total session per device count.

### SharedConnectionPatchRequest
* SharedConnectionPatchRequest `object`: Shared connection patch request
  * data **required** `object`: Represents the data for connecting to service
  * displayName `string`: Display name of the shared connection

### SharedConnectionRequest
* SharedConnectionRequest `object`: SharedConnectionRequest
  * credentialType `string` (values: credentials, certificate): credential type of the shared connection. Values can be credentials|certificate
  * displayName `string`: display name of shared connection
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate

### SharedConnectionResponse
* SharedConnectionResponse `object`: SharedConnectionResponse
  * credentialType **required** `string` (values: credentials, certificate): the type of the credential
  * displayName `string`: display name of shared connection
  * id **required** `string`: id of the shared connection
  * is2FA `boolean`: if the account is a 2FA account or not
  * isValid `boolean`: whether the credentials are valid or not
  * serviceType **required** `string` (values: apple, jira, googleplay, gitlab): service type of shared connection can be apple|gitlab|googleplay|jira

### SigningConfig
* SigningConfig `object`
  * hasStoreFile `boolean`: Indicates if storeFile is specified in the signing configuration

### SkipValidationRequest
* SkipValidationRequest `object`: Wheither or not to skip the validation for this release
  * skip_validation `boolean`: true if we want to skip the validation, false otherwise

### SourceRepositories
* SourceRepositories `array`: A list of source repositories
  * items `object`: The source repository
    * clone_url `string`: URL used to clone the repository
    * name `string`: The repository name

### SourceRepository
* SourceRepository `object`: The source repository
  * clone_url `string`: URL used to clone the repository
  * name `string`: The repository name

### StackFrame
* StackFrame `object`: a single frame of a stack trace
  * address `string`: address of the frame
  * app_code **required** `boolean`: this line isn't from any framework
  * class_method `boolean`: is a class method
  * class_name `string`: name of the class
  * code_formatted **required** `string`: Formatted frame string
  * code_raw **required** `string`: Raw frame string
  * file `string`: name of the file
  * framework_name `string`: Name of the framework
  * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
  * line `integer`: line number
  * method `string`: name of the method
  * method_params `string`: parameters of the frames method
  * relevant `boolean`: frame should be shown always

### Stacktrace
* Stacktrace `object`: a stacktrace in a processed and prettyfied way
  * exception [Exception](#exception)
  * reason `string`
  * threads `array`
    * items [Thread](#thread)
  * title `string`

### StartServiceLog
* StartServiceLog `object`: Describe a AppCenter.Start API call from the SDK.
  * services `array`: The list of services of the AppCenter Start API call.
    * items `string`
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### StartServiceLog_Diagnostics
* StartServiceLog_Diagnostics `object`: Describe a AppCenter.Start API call from the SDK.
  * services `array`: The list of services of the AppCenter Start API call.
    * items `string`
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### StartSessionLog
* StartSessionLog `object`: Required explicit begin session log (a marker event for analytics service).
  * session_id **required** `string`: Session ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### StartSessionLog_Diagnostics
* StartSessionLog_Diagnostics `object`: Required explicit begin session log (a marker event for analytics service).
  * session_id **required** `string`: Session ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### Status
* Status `object`
  * status **required** `string`

### StatusData
* StatusData `object`: Status Data from store
  * status `string`: status from store
  * storetype `string`: store type
  * track `string`: track information from store
  * version `string`: version of the app from store

### StatusResponse
* StatusResponse `object`
  * status **required** `string`

### StepReport
* StepReport `object`
  * deviceScreenshots **required** `array`
    * items `object`
      * appium_log_file `string`
      * crash_data `array`
        * items `string`
      * device_snapshot_id `string`
      * id `string`
      * log_file `string`
      * raw_crash_data `array`
        * items `string`
      * screenshot `object`
        * landscape **required** `boolean`
        * rotation **required** `number`
        * urls **required** `object`
          * large **required** `string`
          * medium **required** `string`
          * original **required** `string`
          * small **required** `string`
      * stacktrace `array`
        * items `string`
      * status `string`
      * title `string`
  * finishedSnapshots **required** `array`
    * items `string`

### StoreDestinationDetails
* StoreDestinationDetails `object`
  * appId `string`: app id of application.
  * dest_publish_id `string`: destination ID identifying a unique id in distribution store.
  * store_type `string` (values: intune): type of store.

### StoreNotification
* StoreNotification `object`
  * service `string`
  * status `string`
  * valid_until `integer`

### StorePatchRequest
* StorePatchRequest `object`
  * service_connection_id **required** `string`: Service connection id to updated.

### StoreSecretResponse
* StoreSecretResponse `object`: StoreSecretResponse
  * id `string`: Store id
  * name `string`: Store Name
  * secret `string`: Secret Json
  * tenant_id `string`: Tenant Id for Intune
  * type `string`: Store Type

### StoresBasicDetails
* StoresBasicDetails `object`
  * id `string`: ID identifying a unique distribution store.
  * name `string`: A name identifying a unique distribution store.
  * publishing_status `string`: publishing status of the release in the store.
  * type `string` (values: intune, googleplay): type of the distribution store currently stores type can be intune or googleplay.

### StoresBasicReleaseDetails
* StoresBasicReleaseDetails `object`: Basic information on a release
  * destination_type `string` (values: group, store, tester): Destination for this release.
  * distribution_stores `array`: a list of distribution stores that are associated with this release.
    * items `object`
      * id `string`: ID identifying a unique distribution store.
      * is_latest `boolean`: Is the containing release the latest one in this distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: A status identifying the status of release in the distribution store.
      * type `string` (values: googleplay, intune, apple): A type identifying the type of distribution store.
  * id `number`: ID identifying this unique release.
  * short_version `string`: The release's short version.
  * uploaded_at `string`: UTC time in ISO 8601 format of the uploaded time.
  * version `string`: The release's version.

### StoresDetails
* StoresDetails `object`
  * id `string`: ID identifying a unique distribution store.
  * is_latest `boolean`: Is the containing release the latest one in this distribution store.
  * name `string`: A name identifying a unique distribution store.
  * publishing_status `string`: A status identifying the status of release in the distribution store.
  * type `string` (values: googleplay, intune, apple): A type identifying the type of distribution store.

### StoresReleaseDetails
* StoresReleaseDetails `object`: Details of an uploaded release
  * android_min_api_level `string`: The release's minimum required Android API level.
  * app_display_name `string`: The app's display name.
  * app_name `string`: The app's name (extracted from the uploaded release).
  * bundle_identifier `string`: The identifier of the apps bundle.
  * distribution_stores `array`: a list of distribution stores that are associated with this release.
    * items `object`
      * id `string`: ID identifying a unique distribution store.
      * name `string`: A name identifying a unique distribution store.
      * publishing_status `string`: publishing status of the release in the store.
      * type `string` (values: intune, googleplay): type of the distribution store currently stores type can be intune or googleplay.
  * download_url `string`: The URL that hosts the binary for this release.
  * fingerprint `string`: MD5 checksum of the release binary.
  * id `number`: ID identifying this unique release.
  * install_url `string` (values: group, store): The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * min_os `string`: The release's minimum required operating system.
  * release_notes `string`: The release's release notes.
  * short_version `string`: The release's short version.<br>
  * size `number`: The release's size in bytes.
  * status `string` (values: available, unavailable): OBSOLETE. Will be removed in next version. The availability concept is now replaced with distributed. Any 'available' release will be associated with the default distribution group of an app.</br>
  * uploaded_at `string`: UTC time in ISO 8601 format of the uploaded time.
  * version `string`: The release's version.<br>

### StringProperty
* StringProperty `object`: String property.
  * value **required** `string`: String property value.
  * name **required** `string`
  * type **required** `string`

### StringProperty_Diagnostics
* StringProperty_Diagnostics `object`: String property.
  * value **required** `string`: String property value.
  * name **required** `string`
  * type **required** `string`

### SubmitDsrOperationRequest
* SubmitDsrOperationRequest `object`
  * accountId `string`
  * appId `string`
  * operationId `string`: The DSR operation ID provided by the GDPR coordinator. Used for tracking only.
  * request `string` (values: Delete, Purge, UndoDelete, Export)
  * requestId `string`: Request ID provided by the GDPR coordinator. Used for tracking.

### SubmitDsrOperationResponse
* SubmitDsrOperationResponse `object`
  * status `string` (values: NotStarted, InProgress, Completed, Failure): The status of the DSR operation

### Subscription
* Subscription `object`: Subscription information
  * active `boolean`: Is the subscription currently active?
  * daysLeft `number`: The number of days left in the subscription
  * endsAt `string`: The date the subscription will end or ended
  * id `string`: Id of the subscription
  * startsAt `string`: The date the subscription began
  * tier `object`
    * name `string`: The name of the tier

### SubscriptionMetrics
* SubscriptionMetrics `object`
  * message_count **required** `number`: The number of messages in the subscription
  * name **required** `string`: The name of the subsciption (prefixed with the topic name)

### SuccessResponse
* SuccessResponse `object`
  * message **required** `string`

### Symbol
* Symbol `object`
  * alternate_symbol_ids **required** `array`: The other symbols in the same file
    * items `string`
  * app_id **required** `string`: The application that this symbol belongs to
  * build `string`: The build number. Optional for Apple. Required for Android.
  * origin **required** `string` (values: System, User): The origin of the symbol file
  * platform **required** `string`: The platform that this symbol is associated with
  * status **required** `string` (values: available, ignored): Whether the symbol is ignored.
  * symbol_id **required** `string`: The unique id for this symbol (uuid)
  * symbol_upload_id **required** `string`: The id of the symbol upload this symbol belongs to.
  * type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
  * url **required** `string`: The path name of the symbol file in blob storage
  * version `string`: The version number. Optional for Apple. Required for Android.

### SymbolLocation
* SymbolLocation `object`: Location for downloading symbol
  * uri **required** `string`

### SymbolStatusResponse
* SymbolStatusResponse `object`: A response containing information pertaining to a symbol status
  * app_id **required** `string`: The application that this symbol belongs to
  * status **required** `string` (values: available, ignored, missing): Whether the symbol is ignored.
  * symbol_id **required** `string`: The unique id for this symbol (uuid)

### SymbolUpload
* SymbolUpload `object`: A single symbol upload entity
  * app_id **required** `string`: The application that this symbol upload belongs to
  * file_name `string`: The file name for the symbol upload
  * file_size `number`: The size of the file in Mebibytes. This may be 0 until the status is indexed
  * origin `string` (values: User, System): The origin of the symbol upload
  * status **required** `string` (values: created, committed, aborted, processing, indexed, failed): The current status for the symbol upload
  * symbol_type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
  * symbol_upload_id **required** `string`: The id for the current symbol upload
  * symbols_uploaded `array`: The symbols found in the upload. This may be empty until the status is indexed
    * items `object`
      * platform **required** `string`: The platform the symbol is associated with
      * symbol_id **required** `string`: The symbol id of the symbol binary
  * timestamp `string`: When the symbol upload was committed, or last transaction time if not committed
  * user `object`: User information of the one who intitiated the symbol upload
    * display_name `string`: The full name of the user. Might for example be first and last name
    * email `string`: The email of the user

### SymbolUploadBeginRequest
* SymbolUploadBeginRequest `object`: A request containing information pertaining to starting a symbol upload process
  * build `string`: The build number. Optional for Apple. Required for Android.
  * client_callback `string`: The callback URL that the client can optionally provide to get status updates for the current symbol upload
  * file_name `string`: The file name for the symbol upload
  * symbol_type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
  * version `string`: The version number. Optional for Apple. Required for Android.

### SymbolUploadBeginResponse
* SymbolUploadBeginResponse `object`: A response containing information pertaining to starting a symbol upload process
  * expiration_date **required** `string`: Describes how long the upload_url is valid
  * symbol_upload_id **required** `string`: The id for the current upload
  * upload_url **required** `string`: The URL where the client needs to upload the symbol blob to

### SymbolUploadEndRequest
* SymbolUploadEndRequest `object`: A request containing information pertaining to completing a symbol upload process
  * status **required** `string` (values: committed, aborted): The desired operation for the symbol upload

### SymbolUploadLocation
* SymbolUploadLocation `object`: Location for downloading symbol upload
  * uri **required** `string`

### SymbolUploadUserInfo
* SymbolUploadUserInfo `object`
  * display_name `string`: The full name of the user. Might for example be first and last name
  * email `string`: The email of the user

### SymbolUploads
* SymbolUploads `array`: A set of symbol upload entities
  * items `object`: A single symbol upload entity
    * app_id **required** `string`: The application that this symbol upload belongs to
    * file_name `string`: The file name for the symbol upload
    * file_size `number`: The size of the file in Mebibytes. This may be 0 until the status is indexed
    * origin `string` (values: User, System): The origin of the symbol upload
    * status **required** `string` (values: created, committed, aborted, processing, indexed, failed): The current status for the symbol upload
    * symbol_type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
    * symbol_upload_id **required** `string`: The id for the current symbol upload
    * symbols_uploaded `array`: The symbols found in the upload. This may be empty until the status is indexed
      * items `object`
        * platform **required** `string`: The platform the symbol is associated with
        * symbol_id **required** `string`: The symbol id of the symbol binary
    * timestamp `string`: When the symbol upload was committed, or last transaction time if not committed
    * user `object`: User information of the one who intitiated the symbol upload
      * display_name `string`: The full name of the user. Might for example be first and last name
      * email `string`: The email of the user

### Symbols
* Symbols `array`: A response containing the list of symbols matching the specified filter (if any was provided)
  * items `object`
    * alternate_symbol_ids **required** `array`: The other symbols in the same file
      * items `string`
    * app_id **required** `string`: The application that this symbol belongs to
    * build `string`: The build number. Optional for Apple. Required for Android.
    * origin **required** `string` (values: System, User): The origin of the symbol file
    * platform **required** `string`: The platform that this symbol is associated with
    * status **required** `string` (values: available, ignored): Whether the symbol is ignored.
    * symbol_id **required** `string`: The unique id for this symbol (uuid)
    * symbol_upload_id **required** `string`: The id of the symbol upload this symbol belongs to.
    * type **required** `string` (values: Apple, JavaScript, Breakpad, AndroidProguard, UWP): The type of the symbol for the current symbol upload
    * url **required** `string`: The path name of the symbol file in blob storage
    * version `string`: The version number. Optional for Apple. Required for Android.

### SystemVersionNameGroup
* SystemVersionNameGroup `object`: A response represents information about symbol name group
  * name `string`: Name of version group
  * versions `array`
    * items `string`

### SystemVersionNameGroups
* SystemVersionNameGroups `array`: A list of symbol name group entities
  * items `object`: A response represents information about symbol name group
    * name `string`: Name of version group
    * versions `array`
      * items `string`

### TeamAppResponse
* TeamAppResponse
  * description `string`: The description of the team
  * display_name **required** `string`: The display name of the team
  * id **required** `string`: The internal unique id (UUID) of the team.
  * name **required** `string`: The name of the team
  * permissions `array`: The permissions the team has for the app
    * items `string` (values: manager, developer, viewer, tester)

### TeamAppUpdateRequest
* TeamAppUpdateRequest `object`
  * permissions **required** `array`: The permissions all members of the team have on the app
    * items `string` (values: manager, developer, viewer)

### TeamRequest
* TeamRequest `object`
  * description `string`: The description of the team
  * display_name **required** `string`: The display name of the team
  * name `string`: The name of the team

### TeamResponse
* TeamResponse `object`
  * description `string`: The description of the team
  * display_name **required** `string`: The display name of the team
  * id **required** `string`: The internal unique id (UUID) of the team.
  * name **required** `string`: The name of the team

### TeamUpdateRequest
* TeamUpdateRequest `object`
  * display_name **required** `string`: The new display name of the team

### TeamUserResponse
* TeamUserResponse `object`
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * role **required** `string` (values: maintainer, collaborator): The role of the user has within the team

### TestCloudErrorDetails
* Test Cloud Error Details `object`: Details of a failed operation
  * message **required** `string`: Human-readable message that describes the error
  * status **required** `string`: Status of the operation

### TestCloudFileHash
* Test Cloud File Hash `object`: Hash, type, path and byte range of a file that is required in test run
  * checksum **required** `string`: SHA256 hash of the file
  * fileType **required** `string` (values: dsym-file, app-file, test-file): Type of the file
  * relativePath **required** `string`: Relative path of the file

### TestCloudFileHashDeprecated
* Test Cloud File Hash `object`: Hash, type, path and byte range of a file that is required in test run
  * byte_range `string`: Range of bytes required to verify ownership of the file
  * checksum **required** `string`: SHA256 hash of the file
  * file_type **required** `string` (values: dsym-file, app-file, test-file): Type of the file
  * relative_path **required** `string`: Relative path of the file

### TestCloudFileHashResponse
* Test Cloud File Hash Response `object`: Response message for single uploaded file hash
  * checksum **required** `string`: SHA256 hash of the file
  * fileType **required** `string` (values: dsym-file, app-file, test-file): Type of the file
  * relativePath `string`: Relative path of the file
  * uploadStatus **required** `object`: Status of the upload
    * location `string`: URI that should be used to make POST request if file with given hash doesn't exist. This is set when status_code is equal to 412
    * statusCode **required** `number`: HTTP status code that represent result of upload

### TestCloudHashUploadStatus
* Test Cloud Hash Upload Status `object`: Result of uploading a single file hash
  * location `string`: URI that should be used to make POST request if file with given hash doesn't exist. This is set when status_code is equal to 412
  * statusCode **required** `number`: HTTP status code that represent result of upload

### TestCloudProject
* TestCloudProject `object`
  * frameworkProperties `object`
    * configurations `array`
      * items `string`
  * frameworkType **required** `string` (values: Appium, Calabash, Espresso, UITest, Generated)
  * path **required** `string`: The path to the TestCloud project

### TestCloudProjectFrameworkProperties
* TestCloudProjectFrameworkProperties `object`
  * configurations `array`
    * items `string`

### TestCloudStartTestRunOptions
* Test Cloud Start Test Run Options `object`: Options required to start the test run
  * device_selection **required** `string`: Device selection string.
  * language `string`: Language that should be used to run tests.
  * locale `string`: Locale that should be used to run tests.
  * test_framework **required** `string`: Test framework used by tests.
  * test_parameters `object`: A JSON dictionary with additional test parameters
  * test_series `string`: Name of the test series.

### TestCloudStartTestRunResult
* Test Cloud Test Run Start Result `object`: Result of starting a test run
  * accepted_devices `array`: List with names of accepted devices
    * items `string`
  * rejected_devices `array`: List with names and descriptions of rejected devices
    * items `string`

### TestCloudToolset
* TestCloudToolset `object`
  * projects **required** `array`: The TestCloud projects detected
    * items `object`
      * frameworkProperties `object`
        * configurations `array`
          * items `string`
      * frameworkType **required** `string` (values: Appium, Calabash, Espresso, UITest, Generated)
      * path **required** `string`: The path to the TestCloud project

### TestGDPRAccount
* TestGDPRAccount `object`
  * id `string`

### TestGDPRApp
* TestGDPRApp `object`
  * hash_files_url `string`

### TestGDPRFeatureFlag
* TestGDPRFeatureFlag `object`
  * name `string`
  * target_id `string`

### TestGDPRFileSetFile
* TestGDPRFileSetFile `object`
  * app_upload_id `string`
  * hash_file_id `string`
  * hash_file_url `string`
  * path `string`

### TestGDPRHashFile
* TestGDPRHashFile `object`
  * filename `string`
  * id `string`

### TestGDPRPipelineTest
* TestGDPRPipelineTest `object`
  * app_upload_id `string`
  * test_parameters `object`

### TestGDPRResourceList
* TestGDPRResourceList `object`
  * resources `array`
    * items `object`
      * path `string`
      * rel `string`

### TestGDPRTestRun
* TestGDPRTestRun `object`
  * app_hash_file_id `string`
  * app_hash_file_url `string`
  * app_icon_url `string`
  * dsym_hash_file_id `string`
  * dsym_hash_file_url `string`
  * id `string`
  * locale `string`

### TestReport
* TestReport `object`
  * app_upload_id **required** `string`
  * date **required** `string`
  * date_finished **required** `string`
  * device_logs **required** `array`
    * items `object`
      * appium_log `string`
      * device_log `string`
      * device_snapshot_id `string`
      * test_log `string`
  * errorMessage `string`
  * features **required** `array`
    * items `object`
      * failed `number`
      * name `string`
      * peakDuration `number`
      * peakMemory `number`
      * skipped `number`
      * tests `array`
        * items `object`
          * peakDuration `number`
          * peakMemory `number`
          * runs `array`
          * testName `string`
  * finished_device_snapshots **required** `array`
    * items `string`
  * id **required** `string`
  * platform **required** `string`
  * revision **required** `number`
  * schema_version **required** `number`
  * snapshot_fatal_errors `array`
    * items `object`
      * device_snapshot_id `string`
      * error_message `string`
      * error_title `string`
  * stats **required** `object`
    * artifacts `object`
    * devices **required** `number`
    * devices_failed **required** `number`
    * devices_finished **required** `number`
    * devices_not_runned **required** `number`
    * devices_skipped **required** `number`
    * failed **required** `number`
    * filesize **required** `number`
    * os **required** `number`
    * passed **required** `number`
    * skipped **required** `number`
    * step_count **required** `number`
    * total **required** `number`
    * totalDeviceMinutes **required** `number`
  * testType **required** `string`

### TestRun
* Test Run `object`: Summary single test run on Xamarin Test Cloud
  * appVersion `string`: The compiled version of the app binary
  * date `string`: The date and time the test was uploaded
  * description `string`: Human readable explanation of the current test status
  * id `string`: The unique id of the test upload
  * platform `string`: The device platform targeted by the test. Possible values are 'ios' or 'android'
  * resultStatus `string`: The passed/failed state
  * runStatus `string`: The current status of the test run, in relation to the various phases
  * state `string`: Deprecated. Use runStatus instead.
  * stats `object`: Summary single test run on Xamarin Test Cloud
    * devices `number`: Number of devices running the test
    * devicesFailed `number`: Number of failed devices
    * devicesFinished `number`: Number of finished devices
    * failed `number`: Number of failed tests
    * passed `number`: Number of passed tests
    * peakMemory `number`: The max amount of MB used during the test run
    * skipped `number`: Number of skipped tests
    * total `number`: Number of tests in total
    * totalDeviceMinutes `number`: The number of minutes of device time the test has been runnign
  * status `string`: Deprecated. Use resultStatus instead.
  * testSeries `string`: The name of the test series with which this test upload is associated
  * testType `string`: The name of the test framework used to run this test

### TestRunState
* Test Run State `object`: Current status of a test run
  * exit_code `integer`: The exit code that the client should use when exiting. Used for indicating status to the caller of the client.
  * message `array`: Multi-line message that describes the status
    * items `string`
  * wait_time `integer`: Time (in seconds) that the client should wait for before checking the status again

### TestRunStatistics
* Test Run Statistics `object`: Summary single test run on Xamarin Test Cloud
  * devices `number`: Number of devices running the test
  * devicesFailed `number`: Number of failed devices
  * devicesFinished `number`: Number of finished devices
  * failed `number`: Number of failed tests
  * passed `number`: Number of passed tests
  * peakMemory `number`: The max amount of MB used during the test run
  * skipped `number`: Number of skipped tests
  * total `number`: Number of tests in total
  * totalDeviceMinutes `number`: The number of minutes of device time the test has been runnign

### TestRunSummary
* Test Run Summary `object`: Most important information about a test run.
  * completed `boolean`: Tells whether the test run has completed
  * date `string`: Date of the test run.
  * failed `number`: Number of failed tests
  * passed `number`: Number of passed tests
  * statusDescription `string`: Human-readable status of the test run.

### TestSeries
* Test Series `object`: Summary of a single test series
  * mostRecentActivity `string`: Date of the latest test run that used this test series
  * name **required** `string`: Name of the test series
  * slug **required** `string`: Unique, human-readable identifier of the test series
  * testRuns `array`: Most recent test runs
    * items `object`: Most important information about a test run.
      * completed `boolean`: Tells whether the test run has completed
      * date `string`: Date of the test run.
      * failed `number`: Number of failed tests
      * passed `number`: Number of passed tests
      * statusDescription `string`: Human-readable status of the test run.

### TestSeriesName
* Name of the test series `object`
  * name **required** `string`: Name of the new test series

### TesterAppRelease
* TesterAppRelease
  * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
  * id **required** `integer`: ID identifying this unique release.
  * is_external_build `boolean`: This value determines if a release is external or not.
  * mandatory_update **required** `boolean`: A boolean which determines whether the release is a mandatory update or not.
  * origin `string` (values: hockeyapp, appcenter): The release's origin
  * short_version **required** `string`: The release's short version.<br>
  * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
  * version **required** `string`: The release's version.<br>
  * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
  * release_notes `string`: The release's release notes.
  * size **required** `integer`: The release's size in bytes.

### TesterAppResponse
* TesterAppResponse
  * description `string`: The description of the app
  * display_name **required** `string`: The display name of the app
  * icon_source `string`: The string representation of the source of the app's icon
  * icon_url `string`: The string representation of the URL pointing to the app's icon
  * id **required** `string`: The unique ID (UUID) of the app
  * name **required** `string`: The name of the app used in URLs
  * os **required** `string` (values: Android, iOS, macOS, Tizen, tvOS, Windows, Linux, Custom): The OS the app will be running on
  * owner **required** `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name **required** `string`: The owner's display name
    * email `string`: The owner's email address
    * id **required** `string`: The unique id (UUID) of the owner
    * name **required** `string`: The unique name that used to identify the owner
    * type **required** `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release_type `string`: A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
  * microsoft_internal `boolean`: it indicates if the app is microsoft internal
  * permissions `array`: The permissions associated with the app
    * items `string` (values: can_remove_from_app)

### TesterAppWithReleaseResponse
* TesterAppWithReleaseResponse `object`
  * description `string`: The description of the app
  * display_name `string`: The app's display name.
  * icon_url `string`: A URL to the app's icon.
  * id `string`: The unique ID (UUID) of the app
  * name `string`: The app's name.
  * os `string`: The app's os.
  * owner `object`: The information about the app's owner
    * avatar_url `string`: The avatar URL of the owner
    * display_name `string`: The owner's display name
    * email `string`: The owner's email address
    * id `string`: The unique id (UUID) of the owner
    * name `string`: The unique name that used to identify the owner
    * type `string` (values: org, user): The owner type. Can either be 'org' or 'user'
  * release
    * enabled **required** `boolean`: This value determines the whether a release currently is enabled or disabled.
    * id **required** `integer`: ID identifying this unique release.
    * is_external_build `boolean`: This value determines if a release is external or not.
    * mandatory_update **required** `boolean`: A boolean which determines whether the release is a mandatory update or not.
    * origin `string` (values: hockeyapp, appcenter): The release's origin
    * short_version **required** `string`: The release's short version.<br>
    * uploaded_at **required** `string`: UTC time in ISO 8601 format of the uploaded time.
    * version **required** `string`: The release's version.<br>
    * install_url `string`: The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&url=`
    * release_notes `string`: The release's release notes.
    * size **required** `integer`: The release's size in bytes.

### Thread
* Thread `object`: a thread representation
  * crashed `boolean`: True if this thread crashed
  * exception [Exception](#exception)
  * frames **required** `array`: frames of that thread
    * items `object`: a single frame of a stack trace
      * address `string`: address of the frame
      * app_code **required** `boolean`: this line isn't from any framework
      * class_method `boolean`: is a class method
      * class_name `string`: name of the class
      * code_formatted **required** `string`: Formatted frame string
      * code_raw **required** `string`: Raw frame string
      * file `string`: name of the file
      * framework_name `string`: Name of the framework
      * language `string` (values: JavaScript, CSharp, Objective-C, Objective-Cpp, Cpp, C, Swift, Java, Unknown): programming language of the frame
      * line `integer`: line number
      * method `string`: name of the method
      * method_params `string`: parameters of the frames method
      * relevant `boolean`: frame should be shown always
  * platform `string` (values: ios, android, xamarin, react-native, ndk, unity, other): SDK/Platform this thread is beeing generated from
  * relevant `boolean`: Shows if a thread is relevant or not. Is false if all frames are non relevant, otherwise true
  * title **required** `string`: name of the thread

### Tier
* Subscription Tier `object`
  * name `string`: The name of the tier

### TokenQueryResult
* TokenQueryResult `object`: Token query result.
  * tokens `array`: List of tokens.
    * items `string`

### ToolsetProject
* ToolsetProject `object`: Abstract platform project
  * name `string`
  * path `string`

### ToolsetProjects
* ToolsetProjects `object`: A collection of projects for each type of toolset
  * android `object`
    * androidModules **required** `array`: Android Gradle modules
      * items `object`
        * buildConfigurations `array`: The detected build configurations of the Android module
          * items `object`
        * buildTypes `array`: The detected build types of the Android module
          * items `string`
        * buildVariants `array`: The detected build variants of the Android module (matrix of product flavor + build type (debug|release))
          * items `string`
        * hasBundle `boolean`: Module contains bundle settings
        * isRoot `boolean`: Whether the module is at the root level of the project
        * name **required** `string`: Name of the Android module
        * productFlavors `array`: The product flavors of the Android module
          * items `string`
    * gradleWrapperPath `string`: The path of the Gradle wrapper
  * commit `string`: The commit hash of the analyzed commit
  * javascript `object`
    * javascriptSolutions `array`: The React Native solutions detected
      * items `object`
        * packageJsonPath **required** `string`: The path to the detected package.json
        * reactNativeVersion `string`: Version of React Native from package.json files
    * packageJsonPaths **required** `array`: Paths for detected package.json files
      * items `string`
  * testcloud `object`
    * projects **required** `array`: The TestCloud projects detected
      * items `object`
        * frameworkProperties `object`
          * configurations `array`
        * frameworkType **required** `string` (values: Appium, Calabash, Espresso, UITest, Generated)
        * path **required** `string`: The path to the TestCloud project
  * uwp `object`
    * uwpSolutions **required** `array`: The UWP solutions detected
      * items `object`
        * configurations **required** `array`: The possible configurations detected for the UWP solution
          * items `string`
        * path **required** `string`: The path to the UWP solution
  * xamarin `object`
    * xamarinSolutions **required** `array`: Xamarin solutions for the toolset
      * items `object`
        * configurations **required** `array`: Solution configurations
          * items `string`
        * defaultConfiguration `string`: Solution default configuration
        * path **required** `string`: Path to solution
  * xcode `object`
    * xcodeSchemeContainers **required** `array`: The Xcode scheme containers
      * items `object`
        * appExtensionTargets `array`: Information regarding project app extensions, if present
          * items `object`: App extension information
        * cartfilePath `string`: Path to Carthage file, if present
        * path **required** `string`: Path to project
        * podfilePath `string`: Path to CocoaPods file, if present
        * sharedSchemes **required** `array`: Project schemes
          * items `object`
        * workspaceProjectPaths `string`: Related projects paths for xcworkspace
        * xcodeProjectSha `string`: repo object Id of the pbxproject

### Toolsets
* Toolsets `object`: Set of toolsets available for app
  * node `array`: A list of Node versions
    * items `object`: The Node version
      * current `boolean`: If the Node version is default for AppCenter
      * name `string`: The version name
  * xamarin `array`: A list of Xamarin SDK bundles
    * items `object`: The Xamarin SDK bundle
      * current `boolean`: If the SDK is latest stable
      * monoVersion `string`: The Mono version
      * sdkBundle `string`: The Xamarin SDK version
      * stable `boolean`: If the SDK is stable
      * xcodeVersions `array`: Specific for iOS SDK. A list of Xcode versions supported by current SDK version
        * items `string`
  * xcode `array`: A list of Xcode versions
    * items `object`: The Xcode version
      * current `boolean`: If the Xcode is latest stable
      * name `string`: The version name

### TransferAppAdminRequest
* TransferAppAdminRequest `object`
  * new_owner_id **required** `string`: The internal unique id (UUID) of the user/org.

### UWPSolution
* UWPSolution `object`
  * configurations **required** `array`: The possible configurations detected for the UWP solution
    * items `string`
  * path **required** `string`: The path to the UWP solution

### UWPToolset
* UWPToolset `object`
  * uwpSolutions **required** `array`: The UWP solutions detected
    * items `object`
      * configurations **required** `array`: The possible configurations detected for the UWP solution
        * items `string`
      * path **required** `string`: The path to the UWP solution

### UnhandledErrorLog
* UnhandledErrorLog `object`: Required explicit begin session log (a marker event for analytics service).
  * error_id **required** `string`: Error ID.
  * device **required** `object`: Device characteristics.
    * app_build **required** `string`: The app's build number, e.g. 42.
    * app_namespace `string`: The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
    * app_version **required** `string`: Application version name, e.g. 1.1.0
    * carrier_code `string`: Carrier country code (for mobile devices).
    * carrier_country `string`: Carrier country.
    * carrier_name `string`: Carrier name (for mobile devices).
    * live_update_deployment_key `string`: Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
    * live_update_package_hash `string`: Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
    * live_update_release_label `string`: Label that is used to identify application code 'version' released via Live Update beacon running on device
    * locale **required** `string`: Language code (example: en_US).
    * model `string`: Device model (example: iPad2,3).
    * oem_name `string`: Device manufacturer (example: HTC).
    * os_api_level `integer`: API level when applicable like in Android (example: 15).
    * os_build `string`: OS build code (example: LMY47X).
    * os_name **required** `string`: OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
    * os_version **required** `string`: OS version (example: 9.3.0).
    * screen_size `string`: Screen size of the device in pixels (example: 640x480).
    * sdk_name **required** `string`: Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
    * sdk_version **required** `string`: Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
    * time_zone_offset **required** `integer`: The offset in minutes from UTC for the device time zone, including daylight savings time.
    * wrapper_runtime_version `string`: Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
    * wrapper_sdk_name `string`: Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
    * wrapper_sdk_version `string`: Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
  * install_id **required** `string`: Install ID.
  * timestamp **required** `string`: Log creation timestamp.
  * type **required** `string` (values: event, page, start_session, error, push_installation, start_service, custom_properties): Log type.

### UpdateCheckResponse
* UpdateCheckResponse `object`
  * update_info **required**
    * description `string`
    * is_disabled `boolean`
    * is_mandatory `boolean`
    * rollout `integer`
    * target_binary_range `string`
    * download_url `string`
    * is_available `boolean`
    * label `string`
    * package_hash `string`
    * package_size `number`
    * should_run_binary_version `boolean`
    * update_app_version `boolean`

### UpdateDevicesRequest
* UpdateDevicesRequest `object`: Information required to publish devices to the Apple Developer account and resign the application.
  * account_service_connection_id `string`: The service_connection_id of the stored Apple credentials instead of username, password.
  * destinations `array`: Array of distribution groups that the devices should be provisioned from.
    * items `object`
      * name `string`
  * devices `array`: Array of device UDID's to be published to the Apple Developer account.
    * items `string`
  * p12_base64 `string`: The certificate to use for resigning the application with the updated provisioning profiles.
  * p12_password `string`: The password certificate if one is needed.
  * p12_service_connection_id `string`: The service_connection_id of the stored Apple certificate instead of p12_base64 value.
  * password `string`: The password for the Apple Developer account to publish the devices to.
  * publish_all_devices `boolean`: When set to true, all unprovisioned devices will be published to the Apple Developer account.  When false, only the provided devices will be published to the Apple Developer account.
  * release_id `number`: When provided, will update the provided release with the new set of devices. By default the latest release of the distribution group is used when this property is omitted. If `release_id` is passed in the path, there is no need to pass in the body as well.
  * username `string`: The username for the Apple Developer account to publish the devices to.

### UpdateDevicesResponse
* UpdateDevicesResponse `object`: URL that can be used to check the status of the update devices operation and the updated profiles.
  * status_url **required** `string`: URL that can be used to check the status of the update devices operation.

### UpdateExternalUrlRequest
* UpdateExternalUrlRequest `object`: A request containing information for creating an externally hosted release.
  * external_download_url **required** `string`: The external URL to the release's binary.

### UpdateInfoData
* UpdateInfoData
  * description `string`
  * is_disabled `boolean`
  * is_mandatory `boolean`
  * rollout `integer`
  * target_binary_range `string`
  * download_url `string`
  * is_available `boolean`
  * label `string`
  * package_hash `string`
  * package_size `number`
  * should_run_binary_version `boolean`
  * update_app_version `boolean`

### UpdateResignStatusRequest
* UpdateResignStatusRequest `object`: Updates the status of the resign request
  * error_code `string`: Error code if an error occured in the resigning operation.
  * error_message `string`: Error message if an error occured in the resigning operation.
  * status **required** `string`: The updated status for the resigning request.

### UpdateResignStatusResponse
* UpdateResignStatusResponse `object`: URL that can be used to check the status of the update devices operation and the updated profiles.
  * profiles_zip_base64 `string`: A zip of the updated provisioning profiles. Base64 encoded.
  * status **required** `string`: The status.

### UploadedSymbolInfo
* UploadedSymbolInfo `object`
  * platform **required** `string`: The platform the symbol is associated with
  * symbol_id **required** `string`: The symbol id of the symbol binary

### UsagePeriod
* UsagePeriod `object`: Usage for a single period
  * byAccount `object`: A collection of named numeric values
  * byApp `object`: A collection of  named numeric values grouped by app
  * endTime `string`: Exclusive end time of the usage period.
  * startTime `string`: Inclusive start time of the usage period

### UsageRecordStatus
* UsageRecordStatus `object`: Status of the usage record creation
  * expectedLatestBuildExists `boolean`: Is the age of the most recent Build service usage record within expected limits
  * expectedLatestTestExists `boolean`: Is the age of the most recent Test service usage record within expected limits
  * latestBuildUsageRecordTime `string`: The time of the most recent Build service usage record
  * latestTestUsageRecordTime `string`: The time of the most recent Test service usage record

### UserAppPermissionsUpdateRequest
* UserAppPermissionsUpdateRequest `object`
  * permissions **required** `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer)

### UserAuthResponse
* UserAuthResponse `object`
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * external_provider `string`: The name of the external auth provider
  * external_user_id `string`: The user ID given by the external provider
  * id **required** `string`: The unique id (UUID) of the user
  * name **required** `string`: The unique name that is used to identify the user
  * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user

### UserDataResponse
* UserDataResponse `object`
  * avatar_url `string`: The url at which the user's avatar can be reached
  * display_name `string`: The display name of the user
  * id `string`: The unique id (UUID) of the user
  * name `string`: The name of the user

### UserEmailOrgRoleRequest
* UserEmailOrgRoleRequest `object`
  * role `string` (values: admin, collaborator, member): The user's role
  * user_email **required** `string`: The user's email address

### UserEmailRequest
* UserEmailRequest `object`
  * user_email **required** `string`: The user's email address

### UserInteractionMetricsResponse
* UserInteractionMetricsResponse `object`: Response for retrieving user interaction metrics.
  * has_more_than_1_release `boolean`: check if the user's whole apps has more than 1 releases.
  * less_than_100_apps `boolean`: check if the user has less than 100 apps.

### UserInvitationPermissionsUpdateRequest
* UserInvitationPermissionsUpdateRequest `object`
  * permissions **required** `array`: The permissions the user has for the app in the invitation
    * items `string` (values: manager, developer, viewer)

### UserLiteProfileResponse
* UserLiteProfileResponse `object`
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * id **required** `string`: The unique id (UUID) of the user

### UserNameAvailabilityResponse
* UserNameAvailabilityResponse `object`
  * available **required** `boolean`: The availability status of the requested user name
  * name **required** `string`: The requested user name

### UserNameUpdateRequest
* UserNameUpdateRequest `object`
  * name `string`: The new, unique name that is used to identify.

### UserProfileAdminResponse
* UserProfileAdminResponse
  * avatar_url `string`: The avatar URL of the user
  * can_change_password `boolean`: User is required to send an old password in order to change the password.
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * id **required** `string`: The unique id (UUID) of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
  * permissions `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer, tester)
  * role `string` (values: admin, collaborator, member): The user's role in the organization

### UserProfileResponse
* UserProfileResponse `object`
  * avatar_url `string`: The avatar URL of the user
  * can_change_password `boolean`: User is required to send an old password in order to change the password.
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * id **required** `string`: The unique id (UUID) of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
  * permissions `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer, tester)

### UserProfileResponseInternal
* UserProfileResponseInternal
  * avatar_url `string`: The avatar URL of the user
  * can_change_password `boolean`: User is required to send an old password in order to change the password.
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * id **required** `string`: The unique id (UUID) of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
  * permissions `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer, tester)
  * admin_role `string` (values: superAdmin, admin, devOps, customerSupport, notAdmin): The new admin_role
  * feature_flags `array`: The feature flags that are enabled for this app
    * items `string`
  * settings `object`: The user's settings
    * marketing_opt_in `string`: The marketing opt-in setting

### UserProfileResponseManagement
* UserProfileResponseManagement
  * avatar_url `string`: The avatar URL of the user
  * can_change_password `boolean`: User is required to send an old password in order to change the password.
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * id **required** `string`: The unique id (UUID) of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
  * permissions `array`: The permissions the user has for the app
    * items `string` (values: manager, developer, viewer, tester)
  * admin_role `string` (values: superAdmin, admin, devOps, customerSupport, notAdmin): The new admin_role
  * feature_flags `array`: The feature flags that are enabled for this app
    * items `string`
  * settings `object`: The user's settings
    * marketing_opt_in `string`: The marketing opt-in setting
  * identity_providers `array`: The identity providers associated with the user's account
    * items `object`
      * origin `string`: Whether the identity provider originated in HockeyApp or App Center
      * provider_name `string` (values: github, aad, facebook, google): The name of the identity provider type
  * updated_at `string`: The date when the app was last updated
  * verified `boolean`: A boolean flag that indicates if the user is already verified

### UserProfileResponsev2
* UserProfileResponsev2 `object`
  * admin_role `string` (values: superAdmin, admin, devOps, customerSupport, notAdmin): The new admin_role
  * avatar_url `string`: The avatar URL of the user
  * can_change_password `boolean`: User is required to send an old password in order to change the password.
  * created_at `string`: The created date of the user
  * display_name **required** `string`: The full name of the user. Might for example be first and last name
  * email **required** `string`: The email address of the user
  * feature_flags `array`: The feature flags that are enabled for this user
    * items `string`
  * id **required** `string`: The unique id (UUID) of the user
  * name **required** `string`: The unique name that is used to identify the user.
  * next_nps_survey_date `string`: The date in the future when the user should be checked again for NPS eligibility
  * origin **required** `string` (values: appcenter, hockeyapp, codepush): The creation origin of this user
  * session_hash `string`: The session hash of the user
  * settings `object`: The user's settings

### UserSettingRequest
* UserSettingRequest `object`
  * value **required** `string`: The setting value

### UserSettingResponse
* UserSettingResponse `object`: A user's setting
  * marketing_opt_in `string`: The marketing opt-in setting

### UserUpdateRequest
* UserUpdateRequest `object`
  * display_name `string`: The full name of the user. Might for example be first and last name

### UserUpdateRequestInternal
* UserUpdateRequestInternal `object`
  * display_name `string`: The full name of the user. Might for example be first and last name
  * email `string`: The email address for this user
  * name `string`: The new, unique name that is used to identify.
  * next_nps_survey_date `string`: The date in the future when the user should be checked again for NPS eligibility

### VSTSAccount
* VSTSAccount `object`: VSTS account with projects list and user info
  * accountId `string`: Account id
  * accountName `string`: Account name
  * accountStatus `string`: Account status
  * accountType `string`: Account type
  * accountUri `string`: Account uri
  * projects `array`: Account projects
    * items `object`: VSTS project
      * description `string`: Project description
      * id `string`: Project id
      * name `string`: Project name
      * state `string`: Project state
      * url `string`: Project URL
      * visibility `string`: Project visibility
  * user `object`: VSTS user profile
    * displayName `string`: Profile display name
    * emailAddress `string`: Profile email
    * id `string`: Profile id
    * publicAlias `string`: Profile alias

### VSTSAccounts
* VSTSAccounts `array`: A list of VSTS accounts with projects
  * items `object`: VSTS account with projects list and user info
    * accountId `string`: Account id
    * accountName `string`: Account name
    * accountStatus `string`: Account status
    * accountType `string`: Account type
    * accountUri `string`: Account uri
    * projects `array`: Account projects
      * items `object`: VSTS project
        * description `string`: Project description
        * id `string`: Project id
        * name `string`: Project name
        * state `string`: Project state
        * url `string`: Project URL
        * visibility `string`: Project visibility
    * user `object`: VSTS user profile
      * displayName `string`: Profile display name
      * emailAddress `string`: Profile email
      * id `string`: Profile id
      * publicAlias `string`: Profile alias

### VSTSProfile
* VSTSProfile `object`: VSTS user profile
  * displayName `string`: Profile display name
  * emailAddress `string`: Profile email
  * id `string`: Profile id
  * publicAlias `string`: Profile alias

### VSTSProject
* VSTSProject `object`: VSTS project
  * description `string`: Project description
  * id `string`: Project id
  * name `string`: Project name
  * state `string`: Project state
  * url `string`: Project URL
  * visibility `string`: Project visibility

### ValidatedApiTokenResponse
* ValidatedApiTokenResponse `object`
  * claims **required** `array`: Collection of attributes that describe the principal of the specified API Token
    * items `object`
      * claim_type `string` (values: user_email, user_origin, app_owner_name, app_name, app_origin, app_os, app_platform, app_secret)
      * claim_value `string`
  * principal_id **required** `string`: The ID of the owner of the API Token (user_id or app_id)
  * principal_type **required** `string` (values: app, user): Indicates the type of the principal (app or user)
  * token_id **required** `string`: The token's unique id (UUID)
  * token_scope **required** `array`: The token's scope. A list of allowed roles.
    * items `string` (values: all, in_app_update, viewer)

### ValidationErrorResponse
* ValidationErrorResponse `object`
  * code **required** `string`
  * id **required** `string`
  * message **required** `string`

### ValidationResponse
* ValidationResponse `object`: The response which contains the validation data that the connection is valid.
  * app_id `string`: app id
  * status `object`: Status Data from store
    * status `string`: status from store
    * storetype `string`: store type
    * track `string`: track information from store
    * version `string`: version of the app from store

### Version
* Version `object`
  * count `integer`: Version count.
  * previous_count `integer`: The count of previous time range of the version.
  * version `string`: Version.

### Version_Diagnostics
* Version_Diagnostics `object`
  * count `integer`: version count
  * previous_count `integer`: the count of previous time range of the version
  * version `string`: version

### VersionedBillingPlan
* VersionedBillingPlan `object`: Billing Plan with a version
  * document `object`: Billing Plan
    * attributes `object`: Collection of attribute values.
    * id `string`: The Billing Plan ID
    * limits `object`: A collection of named numeric values
    * parentId `string`
    * paymentSource `string` (values: None, AppCenter, GitHub, Xtc): Service that receives payments for this billing plan.
    * price `number`: Price of the Billing Plan
    * service `string` (values: Build, Test): Name of the service that the plan applies to.
    * version `string`: Version of the Billing Plan schema
  * etag `string`: The version of the object

### Versions
* Versions `object`
  * total `integer`: The total count of versions.
  * versions `array`: List of version count.
    * items `object`
      * count `integer`: Version count.
      * previous_count `integer`: The count of previous time range of the version.
      * version `string`: Version.

### Versions_Diagnostics
* Versions_Diagnostics `object`
  * total `integer`: the total count of versions
  * versions `array`: list of version count
    * items `object`
      * count `integer`: version count
      * previous_count `integer`: the count of previous time range of the version
      * version `string`: version

### WebSocketContainer
* WebSocketContainer `object`: A websocket reference
  * url **required** `string`: WebSocket URL

### XamarinBranchConfigurationProperties
* XamarinBranchConfigurationProperties `object`: Build configuration for Xamarin projects
  * args `string`
  * configuration `string`
  * isSimBuild `boolean`
  * monoVersion `string`
  * p12File `string`
  * p12Pwd `string`
  * provProfile `string`
  * sdkBundle `string`
  * slnPath `string`
  * symlink `string`: Symlink of the SDK Bundle and Mono installation.

### XamarinSDKBundle
* XamarinSDKBundle `object`: The Xamarin SDK bundle
  * current `boolean`: If the SDK is latest stable
  * monoVersion `string`: The Mono version
  * sdkBundle `string`: The Xamarin SDK version
  * stable `boolean`: If the SDK is stable
  * xcodeVersions `array`: Specific for iOS SDK. A list of Xcode versions supported by current SDK version
    * items `string`

### XamarinSDKBundles
* XamarinSDKBundles `array`: A list of Xamarin SDK bundles
  * items `object`: The Xamarin SDK bundle
    * current `boolean`: If the SDK is latest stable
    * monoVersion `string`: The Mono version
    * sdkBundle `string`: The Xamarin SDK version
    * stable `boolean`: If the SDK is stable
    * xcodeVersions `array`: Specific for iOS SDK. A list of Xcode versions supported by current SDK version
      * items `string`

### XamarinSolution
* XamarinSolution `object`
  * configurations **required** `array`: Solution configurations
    * items `string`
  * defaultConfiguration `string`: Solution default configuration
  * path **required** `string`: Path to solution

### XamarinToolset
* XamarinToolset `object`
  * xamarinSolutions **required** `array`: Xamarin solutions for the toolset
    * items `object`
      * configurations **required** `array`: Solution configurations
        * items `string`
      * defaultConfiguration `string`: Solution default configuration
      * path **required** `string`: Path to solution

### XcodeArchiveProject
* XcodeArchiveProject `object`
  * archiveTargetId **required** `string`: The Id of the target to archive
  * projectName **required** `string`: The project to archive container name
  * projectPath `string`: Full path of the target project

### XcodeBranchConfigurationProperties
* XcodeBranchConfigurationProperties `object`: Build configuration when Xcode is part of the build steps
  * appExtensionProvisioningProfileFiles `array`
    * items `object`: Provisioning profile fetch and store information
      * fileId `string`: File id from secure file storage
      * fileName `string`: Name of uploaded provisioning profile
      * targetBundleIdentifier `string`: Target the provisioning profile is used to sign
      * uploadId `string`: Upload id to App Center File Upload Store
  * archiveConfiguration `string`: The build configuration of the target to archive
  * automaticSigning `boolean`
  * cartfilePath `string`: Path to Carthage file, if present
  * certificateEncoded `string`
  * certificateFileId `string`
  * certificateFilename `string`
  * certificatePassword `string`
  * certificateUploadId `string`
  * forceLegacyBuildSystem `boolean`: Setting this to true forces the build to use Xcode legacy build system. Otherwise, the setting from workspace settings is used.
  * podfilePath `string`: Path to CococaPods file, if present
  * projectOrWorkspacePath `string`: Xcode project/workspace path
  * provisioningProfileEncoded `string`
  * provisioningProfileFileId `string`
  * provisioningProfileFilename `string`
  * provisioningProfileUploadId `string`
  * scheme `string`
  * targetToArchive `string`: The target id of the selected scheme to archive
  * teamId `string`
  * xcodeProjectSha `string`: The selected pbxproject hash to the repositroy
  * xcodeVersion `string`: Xcode version used to build. Available versions can be found in "/xcode_versions" API. Default is latest stable version, at the time when the configuration is set.

### XcodeScheme
* XcodeScheme `object`
  * archiveConfiguration `string`: Build configuration set in Archive action
  * archiveProject `object`
    * archiveTargetId **required** `string`: The Id of the target to archive
    * projectName **required** `string`: The project to archive container name
    * projectPath `string`: Full path of the target project
  * hasTestAction **required** `boolean`: Does scheme have a test action?
  * name **required** `string`: Scheme name

### XcodeSchemeContainer
* XcodeSchemeContainer `object`
  * appExtensionTargets `array`: Information regarding project app extensions, if present
    * items `object`: App extension information
      * name **required** `string`: App extension name
      * targetBundleIdentifier **required** `string`: App extension bundle identifier
  * cartfilePath `string`: Path to Carthage file, if present
  * path **required** `string`: Path to project
  * podfilePath `string`: Path to CocoaPods file, if present
  * sharedSchemes **required** `array`: Project schemes
    * items `object`
      * archiveConfiguration `string`: Build configuration set in Archive action
      * archiveProject `object`
        * archiveTargetId **required** `string`: The Id of the target to archive
        * projectName **required** `string`: The project to archive container name
        * projectPath `string`: Full path of the target project
      * hasTestAction **required** `boolean`: Does scheme have a test action?
      * name **required** `string`: Scheme name
  * workspaceProjectPaths `string`: Related projects paths for xcworkspace
  * xcodeProjectSha `string`: repo object Id of the pbxproject

### XcodeToolset
* XcodeToolset `object`
  * xcodeSchemeContainers **required** `array`: The Xcode scheme containers
    * items `object`
      * appExtensionTargets `array`: Information regarding project app extensions, if present
        * items `object`: App extension information
          * name **required** `string`: App extension name
          * targetBundleIdentifier **required** `string`: App extension bundle identifier
      * cartfilePath `string`: Path to Carthage file, if present
      * path **required** `string`: Path to project
      * podfilePath `string`: Path to CocoaPods file, if present
      * sharedSchemes **required** `array`: Project schemes
        * items `object`
          * archiveConfiguration `string`: Build configuration set in Archive action
          * archiveProject `object`
          * hasTestAction **required** `boolean`: Does scheme have a test action?
          * name **required** `string`: Scheme name
      * workspaceProjectPaths `string`: Related projects paths for xcworkspace
      * xcodeProjectSha `string`: repo object Id of the pbxproject

### XcodeVersion
* XcodeVersion `object`: The Xcode version
  * current `boolean`: If the Xcode is latest stable
  * name `string`: The version name

### XcodeVersions
* XcodeVersions `array`: A list of Xcode versions
  * items `object`: The Xcode version
    * current `boolean`: If the Xcode is latest stable
    * name `string`: The version name

### export_entity
* export_entity `string` (values: crashes, errors, attachments, no_logs)

### v2FailureResponse
* v2FailureResponse `object`: failure response object
  * code **required** `string`
  * message **required** `string`

### v2MissingSymbol
* v2MissingSymbol `object`: missing symbol
  * name **required** `string`: symbol name
  * platform `string`: symbol plarform
  * status **required** `string` (values: missing, ignored, available): symbol status
  * symbol_id **required** `string`: symbol id

### v2MissingSymbolCrashGroup
* v2MissingSymbolCrashGroup `object`: missing symbol crash group object
  * app_build **required** `string`: application build
  * app_id **required** `string`: application id
  * app_ver **required** `string`: application version
  * crash_count `integer`: number of crashes that belong to this group
  * error_count `integer`: number of errors that belong to this group
  * last_modified **required** `string`: last update date for the group
  * missing_symbols **required** `array`: list of missing symbols
    * items `object`: missing symbol
      * name **required** `string`: symbol name
      * platform `string`: symbol plarform
      * status **required** `string` (values: missing, ignored, available): symbol status
      * symbol_id **required** `string`: symbol id
  * status **required** `string` (values: active, pending, closed): group status
  * symbol_group_id **required** `string`: id of the symbol group

### v2MissingSymbolCrashGroupStatusEnum
* v2MissingSymbolCrashGroupStatusEnum `string` (values: active, pending, closed): enumeration of missing symbol grash group statuses

### v2MissingSymbolCrashGroups
* v2MissingSymbolCrashGroups `array`: A list of crash groups formed by missing symbols combination
  * items `object`: missing symbol crash group object
    * app_build **required** `string`: application build
    * app_id **required** `string`: application id
    * app_ver **required** `string`: application version
    * crash_count `integer`: number of crashes that belong to this group
    * error_count `integer`: number of errors that belong to this group
    * last_modified **required** `string`: last update date for the group
    * missing_symbols **required** `array`: list of missing symbols
      * items `object`: missing symbol
        * name **required** `string`: symbol name
        * platform `string`: symbol plarform
        * status **required** `string` (values: missing, ignored, available): symbol status
        * symbol_id **required** `string`: symbol id
    * status **required** `string` (values: active, pending, closed): group status
    * symbol_group_id **required** `string`: id of the symbol group

### v2MissingSymbolCrashGroupsInfoResponse
* v2MissingSymbolCrashGroupsInfoResponse `object`: missing symbol groups
  * total_crash_count **required** `integer`: total number of crashes for all missing symbol groups

### v2MissingSymbolCrashGroupsResponse
* v2MissingSymbolCrashGroupsResponse `object`: grouped by missing symbols crashes response object
  * groups **required** `array`: list of crash groups formed by missing symbols combination
    * items `object`: missing symbol crash group object
      * app_build **required** `string`: application build
      * app_id **required** `string`: application id
      * app_ver **required** `string`: application version
      * crash_count `integer`: number of crashes that belong to this group
      * error_count `integer`: number of errors that belong to this group
      * last_modified **required** `string`: last update date for the group
      * missing_symbols **required** `array`: list of missing symbols
        * items `object`: missing symbol
          * name **required** `string`: symbol name
          * platform `string`: symbol plarform
          * status **required** `string` (values: missing, ignored, available): symbol status
          * symbol_id **required** `string`: symbol id
      * status **required** `string` (values: active, pending, closed): group status
      * symbol_group_id **required** `string`: id of the symbol group
  * total_crash_count **required** `integer`: total number of crashes for all the groups

### v2MissingSymbols
* v2MissingSymbols `array`: A list of missing symbols
  * items `object`: missing symbol
    * name **required** `string`: symbol name
    * platform `string`: symbol plarform
    * status **required** `string` (values: missing, ignored, available): symbol status
    * symbol_id **required** `string`: symbol id

### v2StatusResponse
* v2StatusResponse `object`: status response object
  * status **required** `string`

### v2SymbolStatusEnum
* v2SymbolStatusEnum `string` (values: missing, ignored, available): enumeration of symbol statuses

### v2SymbolUpdateInfo
* v2SymbolUpdateInfo `object`: symbol update message
  * app_id **required** `string`: application id
  * status **required** `string` (values: missing, ignored, available): symbol upload status
  * symbol_id **required** `string`: UUID of the symbol

### v2SymbolUpdateInfoArray
* v2SymbolUpdateInfoArray `array`: symbols update message
  * items `object`: symbol update message
    * app_id **required** `string`: application id
    * status **required** `string` (values: missing, ignored, available): symbol upload status
    * symbol_id **required** `string`: UUID of the symbol


