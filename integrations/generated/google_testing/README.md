# @datafire/google_testing

Client library for Cloud Testing API

## Installation and Usage
```bash
npm install --save @datafire/google_testing
```
```js
let google_testing = require('@datafire/google_testing').create({
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

Allows developers to run automated tests for their mobile applications on Google infrastructure.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_testing.oauthCallback({
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
google_testing.oauthRefresh(null, context)
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

### testing.applicationDetailService.getApkDetails
Gets the details of an Android application APK.


```js
google_testing.testing.applicationDetailService.getApkDetails({}, context)
```

#### Input
* input `object`
  * body [FileReference](#filereference)
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
* output [GetApkDetailsResponse](#getapkdetailsresponse)

### testing.projects.testMatrices.create
Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.


```js
google_testing.testing.projects.testMatrices.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The GCE project under which this job will run.
  * requestId `string`: A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended. Optional, but strongly recommended.
  * body [TestMatrix](#testmatrix)
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
* output [TestMatrix](#testmatrix)

### testing.projects.testMatrices.get
Checks the status of a test matrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist


```js
google_testing.testing.projects.testMatrices.get({
  "projectId": "",
  "testMatrixId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Cloud project that owns the test matrix.
  * testMatrixId **required** `string`: Unique test matrix id which was assigned by the service.
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
* output [TestMatrix](#testmatrix)

### testing.projects.testMatrices.cancel
Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist


```js
google_testing.testing.projects.testMatrices.cancel({
  "projectId": "",
  "testMatrixId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Cloud project that owns the test.
  * testMatrixId **required** `string`: Test matrix that will be canceled.
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
* output [CancelTestMatrixResponse](#canceltestmatrixresponse)

### testing.testEnvironmentCatalog.get
Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred


```js
google_testing.testing.testEnvironmentCatalog.get({
  "environmentType": ""
}, context)
```

#### Input
* input `object`
  * environmentType **required** `string` (values: ENVIRONMENT_TYPE_UNSPECIFIED, ANDROID, IOS, NETWORK_CONFIGURATION, PROVIDED_SOFTWARE, DEVICE_IP_BLOCKS): Required. The type of environment that should be listed.
  * projectId `string`: For authorization, the cloud project requesting the TestEnvironmentCatalog.
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
* output [TestEnvironmentCatalog](#testenvironmentcatalog)



## Definitions

### Account
* Account `object`: Identifies an account and how to log into it.
  * googleAuto [GoogleAuto](#googleauto)

### AndroidDevice
* AndroidDevice `object`: A single Android device.
  * androidModelId `string`: Required. The id of the Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options.
  * androidVersionId `string`: Required. The id of the Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options.
  * locale `string`: Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.
  * orientation `string`: Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.

### AndroidDeviceCatalog
* AndroidDeviceCatalog `object`: The currently supported Android devices.
  * models `array`: The set of supported Android device models.
    * items [AndroidModel](#androidmodel)
  * runtimeConfiguration [AndroidRuntimeConfiguration](#androidruntimeconfiguration)
  * versions `array`: The set of supported Android OS versions.
    * items [AndroidVersion](#androidversion)

### AndroidDeviceList
* AndroidDeviceList `object`: A list of Android device configurations in which the test is to be executed.
  * androidDevices `array`: Required. A list of Android devices.
    * items [AndroidDevice](#androiddevice)

### AndroidInstrumentationTest
* AndroidInstrumentationTest `object`: A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
  * appApk [FileReference](#filereference)
  * appBundle [AppBundle](#appbundle)
  * appPackageId `string`: The java package for the application under test. The default value is determined by examining the application's manifest.
  * orchestratorOption `string` (values: ORCHESTRATOR_OPTION_UNSPECIFIED, USE_ORCHESTRATOR, DO_NOT_USE_ORCHESTRATOR): The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.0 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator.
  * shardingOption [ShardingOption](#shardingoption)
  * testApk [FileReference](#filereference)
  * testPackageId `string`: The java package for the test to be executed. The default value is determined by examining the application's manifest.
  * testRunnerClass `string`: The InstrumentationTestRunner class. The default value is determined by examining the application's manifest.
  * testTargets `array`: Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.
    * items `string`

### AndroidMatrix
* AndroidMatrix `object`: A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
  * androidModelIds `array`: Required. The ids of the set of Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options.
    * items `string`
  * androidVersionIds `array`: Required. The ids of the set of Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options.
    * items `string`
  * locales `array`: Required. The set of locales the test device will enable for testing. Use the TestEnvironmentDiscoveryService to get supported options.
    * items `string`
  * orientations `array`: Required. The set of orientations to test with. Use the TestEnvironmentDiscoveryService to get supported options.
    * items `string`

### AndroidModel
* AndroidModel `object`: A description of an Android device tests may be run on.
  * tags `array`: Tags for this dimension. Examples: "default", "preview", "deprecated".
    * items `string`
  * brand `string`: The company that this device is branded with. Example: "Google", "Samsung".
  * codename `string`: The name of the industrial design. This corresponds to android.os.Build.DEVICE.
  * form `string` (values: DEVICE_FORM_UNSPECIFIED, VIRTUAL, PHYSICAL, EMULATOR): Whether this device is virtual or physical.
  * formFactor `string` (values: DEVICE_FORM_FACTOR_UNSPECIFIED, PHONE, TABLET, WEARABLE): Whether this device is a phone, tablet, wearable, etc.
  * id `string`: The unique opaque id for this model. Use this for invoking the TestExecutionService.
  * lowFpsVideoRecording `boolean`: True if and only if tests with this model are recorded by stitching together screenshots. See use_low_spec_video_recording in device config.
  * manufacturer `string`: The manufacturer of this device.
  * name `string`: The human-readable marketing name for this device model. Examples: "Nexus 5", "Galaxy S5".
  * screenDensity `integer`: Screen density in DPI. This corresponds to ro.sf.lcd_density
  * screenX `integer`: Screen size in the horizontal (X) dimension measured in pixels.
  * screenY `integer`: Screen size in the vertical (Y) dimension measured in pixels.
  * supportedAbis `array`: The list of supported ABIs for this device. This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first element in the list. Elements are optionally prefixed by "version_id:" (where version_id is the id of an AndroidVersion), denoting an ABI that is supported only on a particular version.
    * items `string`
  * supportedVersionIds `array`: The set of Android versions this device supports.
    * items `string`
  * thumbnailUrl `string`: URL of a thumbnail image (photo) of the device. e.g. https://lh3.googleusercontent.com/90WcauuJiCYABEl8U0lcZeuS5STUbf2yW...

### AndroidRoboTest
* AndroidRoboTest `object`: A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes. Next tag: 30
  * appApk [FileReference](#filereference)
  * appBundle [AppBundle](#appbundle)
  * appInitialActivity `string`: The initial activity that should be used to start the app.
  * appPackageId `string`: The java package for the application under test. The default value is determined by examining the application's manifest.
  * maxDepth `integer`: The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50.
  * maxSteps `integer`: The max number of steps Robo can execute. Default is no limit.
  * roboDirectives `array`: A set of directives Robo should apply during the crawl. This allows users to customize the crawl. For example, the username and password for a test account can be provided.
    * items [RoboDirective](#robodirective)
  * roboScript [FileReference](#filereference)
  * startingIntents `array`: The intents used to launch the app for the crawl. If none are provided, then the main launcher activity is launched. If some are provided, then only those provided are launched (the main launcher activity must be provided explicitly).
    * items [RoboStartingIntent](#robostartingintent)

### AndroidRuntimeConfiguration
* AndroidRuntimeConfiguration `object`: Android configuration that can be selected at the time a test is run.
  * locales `array`: The set of available locales.
    * items [Locale](#locale)
  * orientations `array`: The set of available orientations.
    * items [Orientation](#orientation)

### AndroidTestLoop
* AndroidTestLoop `object`: A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
  * appApk [FileReference](#filereference)
  * appBundle [AppBundle](#appbundle)
  * appPackageId `string`: The java package for the application under test. The default is determined by examining the application's manifest.
  * scenarioLabels `array`: The list of scenario labels that should be run during the test. The scenario labels should map to labels defined in the application's manifest. For example, player_experience and com.google.test.loops.player_experience add all of the loops labeled in the manifest with the com.google.test.loops.player_experience name to the execution. Scenarios can also be specified in the scenarios field.
    * items `string`
  * scenarios `array`: The list of scenarios that should be run during the test. The default is all test loops, derived from the application's manifest.
    * items `integer`

### AndroidVersion
* AndroidVersion `object`: A version of the Android OS.
  * tags `array`: Tags for this dimension. Examples: "default", "preview", "deprecated".
    * items `string`
  * apiLevel `integer`: The API level for this Android version. Examples: 18, 19.
  * codeName `string`: The code name for this Android version. Examples: "JellyBean", "KitKat".
  * distribution [Distribution](#distribution)
  * id `string`: An opaque id for this Android version. Use this id to invoke the TestExecutionService.
  * releaseDate [Date](#date)
  * versionString `string`: A string representing this version of the Android OS. Examples: "4.3", "4.4".

### Apk
* Apk `object`: An Android package file to install.
  * location [FileReference](#filereference)
  * packageName `string`: The java package for the APK to be installed. Value is determined by examining the application's manifest.

### ApkDetail
* ApkDetail `object`: Android application details based on application manifest and apk archive contents.
  * apkManifest [ApkManifest](#apkmanifest)

### ApkManifest
* ApkManifest `object`: An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
  * applicationLabel `string`: User-readable name for the application.
  * intentFilters `array`
    * items [IntentFilter](#intentfilter)
  * maxSdkVersion `integer`: Maximum API level on which the application is designed to run.
  * minSdkVersion `integer`: Minimum API level required for the application to run.
  * packageName `string`: Full Java-style package name for this application, e.g. "com.example.foo".
  * targetSdkVersion `integer`: Specifies the API Level on which the application is designed to run.

### AppBundle
* AppBundle `object`: An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.
  * bundleLocation [FileReference](#filereference)

### CancelTestMatrixResponse
* CancelTestMatrixResponse `object`: Response containing the current state of the specified test matrix.
  * testState `string` (values: TEST_STATE_UNSPECIFIED, VALIDATING, PENDING, RUNNING, FINISHED, ERROR, UNSUPPORTED_ENVIRONMENT, INCOMPATIBLE_ENVIRONMENT, INCOMPATIBLE_ARCHITECTURE, CANCELLED, INVALID): The current rolled-up state of the test matrix. If this state is already final, then the cancelation request will have no effect.

### ClientInfo
* ClientInfo `object`: Information about the client which invoked the test.
  * clientInfoDetails `array`: The list of detailed information about client.
    * items [ClientInfoDetail](#clientinfodetail)
  * name `string`: Required. Client name, such as gcloud.

### ClientInfoDetail
* ClientInfoDetail `object`: Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.
  * key `string`: Required. The key of detailed client information.
  * value `string`: Required. The value of detailed client information.

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### DeviceFile
* DeviceFile `object`: A single device file description.
  * obbFile [ObbFile](#obbfile)
  * regularFile [RegularFile](#regularfile)

### DeviceIpBlock
* DeviceIpBlock `object`: A single device IP block
  * addedDate [Date](#date)
  * block `string`: An IP address block in CIDR notation eg: 34.68.194.64/29
  * form `string` (values: DEVICE_FORM_UNSPECIFIED, VIRTUAL, PHYSICAL, EMULATOR): Whether this block is used by physical or virtual devices

### DeviceIpBlockCatalog
* DeviceIpBlockCatalog `object`: List of IP blocks used by the Firebase Test Lab
  * ipBlocks `array`: The device IP blocks used by Firebase Test Lab
    * items [DeviceIpBlock](#deviceipblock)

### Distribution
* Distribution `object`: Data about the relative number of devices running a given configuration of the Android platform.
  * marketShare `number`: Output only. The estimated fraction (0-1) of the total market with this configuration.
  * measurementTime `string`: Output only. The time this distribution was measured.

### Environment
* Environment `object`: The environment in which the test is run.
  * androidDevice [AndroidDevice](#androiddevice)
  * iosDevice [IosDevice](#iosdevice)

### EnvironmentMatrix
* EnvironmentMatrix `object`: The matrix of environments in which the test is to be executed.
  * androidDeviceList [AndroidDeviceList](#androiddevicelist)
  * androidMatrix [AndroidMatrix](#androidmatrix)
  * iosDeviceList [IosDeviceList](#iosdevicelist)

### EnvironmentVariable
* EnvironmentVariable `object`: A key-value pair passed as an environment variable to the test.
  * key `string`: Key for the environment variable.
  * value `string`: Value for the environment variable.

### FileReference
* FileReference `object`: A reference to a file, used for user inputs.
  * gcsPath `string`: A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding)

### GetApkDetailsResponse
* GetApkDetailsResponse `object`: Response containing the details of the specified Android application APK.
  * apkDetail [ApkDetail](#apkdetail)

### GoogleAuto
* GoogleAuto `object`: Enables automatic Google account login. If set, the service automatically generates a Google test account and adds it to the device, before executing the test. Note that test accounts might be reused. Many applications show their full set of functionalities when an account is present on the device. Logging into the device with these generated accounts allows testing more functionalities.

### GoogleCloudStorage
* GoogleCloudStorage `object`: A storage location within Google cloud storage (GCS).
  * gcsPath `string`: Required. The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path.

### IntentFilter
* IntentFilter `object`: The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html
  * actionNames `array`: The android:name value of the tag.
    * items `string`
  * categoryNames `array`: The android:name value of the tag.
    * items `string`
  * mimeType `string`: The android:mimeType value of the tag.

### IosDevice
* IosDevice `object`: A single iOS device.
  * iosModelId `string`: Required. The id of the iOS device to be used. Use the TestEnvironmentDiscoveryService to get supported options.
  * iosVersionId `string`: Required. The id of the iOS major software version to be used. Use the TestEnvironmentDiscoveryService to get supported options.
  * locale `string`: Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.
  * orientation `string`: Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.

### IosDeviceCatalog
* IosDeviceCatalog `object`: The currently supported iOS devices.
  * models `array`: The set of supported iOS device models.
    * items [IosModel](#iosmodel)
  * runtimeConfiguration [IosRuntimeConfiguration](#iosruntimeconfiguration)
  * versions `array`: The set of supported iOS software versions.
    * items [IosVersion](#iosversion)
  * xcodeVersions `array`: The set of supported Xcode versions.
    * items [XcodeVersion](#xcodeversion)

### IosDeviceFile
* IosDeviceFile `object`: A file or directory to install on the device before the test starts.
  * bundleId `string`: The bundle id of the app where this file lives. iOS apps sandbox their own filesystem, so app files must specify which app installed on the device.
  * content [FileReference](#filereference)
  * devicePath `string`: Location of the file on the device, inside the app's sandboxed filesystem

### IosDeviceList
* IosDeviceList `object`: A list of iOS device configurations in which the test is to be executed.
  * iosDevices `array`: Required. A list of iOS devices.
    * items [IosDevice](#iosdevice)

### IosModel
* IosModel `object`: A description of an iOS device tests may be run on.
  * tags `array`: Tags for this dimension. Examples: "default", "preview", "deprecated".
    * items `string`
  * deviceCapabilities `array`: Device capabilities. Copied from https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html
    * items `string`
  * formFactor `string` (values: DEVICE_FORM_FACTOR_UNSPECIFIED, PHONE, TABLET, WEARABLE): Whether this device is a phone, tablet, wearable, etc.
  * id `string`: The unique opaque id for this model. Use this for invoking the TestExecutionService.
  * name `string`: The human-readable name for this device model. Examples: "iPhone 4s", "iPad Mini 2".
  * screenDensity `integer`: Screen density in DPI.
  * screenX `integer`: Screen size in the horizontal (X) dimension measured in pixels.
  * screenY `integer`: Screen size in the vertical (Y) dimension measured in pixels.
  * supportedVersionIds `array`: The set of iOS major software versions this device supports.
    * items `string`

### IosRuntimeConfiguration
* IosRuntimeConfiguration `object`: iOS configuration that can be selected at the time a test is run.
  * locales `array`: The set of available locales.
    * items [Locale](#locale)
  * orientations `array`: The set of available orientations.
    * items [Orientation](#orientation)

### IosTestLoop
* IosTestLoop `object`: A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.
  * appBundleId `string`: Output only. The bundle id for the application under test.
  * appIpa [FileReference](#filereference)
  * scenarios `array`: The list of scenarios that should be run during the test. Defaults to the single scenario 0 if unspecified.
    * items `integer`

### IosTestSetup
* IosTestSetup `object`: A description of how to set up an iOS device prior to running the test.
  * additionalIpas `array`: iOS apps to install in addition to those being directly tested.
    * items [FileReference](#filereference)
  * networkProfile `string`: The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
  * pullDirectories `array`: List of directories on the device to upload to Cloud Storage at the end of the test. Directories should either be in a shared directory (e.g. /private/var/mobile/Media) or within an accessible directory inside the app's filesystem (e.g. /Documents) by specifying the bundle id.
    * items [IosDeviceFile](#iosdevicefile)
  * pushFiles `array`: List of files to push to the device before starting the test.
    * items [IosDeviceFile](#iosdevicefile)

### IosVersion
* IosVersion `object`: An iOS version.
  * tags `array`: Tags for this dimension. Examples: "default", "preview", "deprecated".
    * items `string`
  * id `string`: An opaque id for this iOS version. Use this id to invoke the TestExecutionService.
  * majorVersion `integer`: An integer representing the major iOS version. Examples: "8", "9".
  * minorVersion `integer`: An integer representing the minor iOS version. Examples: "1", "2".
  * supportedXcodeVersionIds `array`: The available Xcode versions for this version.
    * items `string`

### IosXcTest
* IosXcTest `object`: A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.
  * appBundleId `string`: Output only. The bundle id for the application under test.
  * testSpecialEntitlements `boolean`: The option to test special app entitlements. Setting this would re-sign the app having special entitlements with an explicit application-identifier. Currently supports testing aps-environment entitlement.
  * testsZip [FileReference](#filereference)
  * xcodeVersion `string`: The Xcode version that should be used for the test. Use the TestEnvironmentDiscoveryService to get supported options. Defaults to the latest Xcode version Firebase Test Lab supports.
  * xctestrun [FileReference](#filereference)

### LauncherActivityIntent
* LauncherActivityIntent `object`: Specifies an intent that starts the main launcher activity.

### Locale
* Locale `object`: A location/region designation for language.
  * tags `array`: Tags for this dimension. Example: "default".
    * items `string`
  * id `string`: The id for this locale. Example: "en_US".
  * name `string`: A human-friendly name for this language/locale. Example: "English".
  * region `string`: A human-friendly string representing the region for this locale. Example: "United States". Not present for every locale.

### ManualSharding
* ManualSharding `object`: Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.
  * testTargetsForShard `array`: Required. Group of packages, classes, and/or test methods to be run for each shard. When any physical devices are selected, the number of test_targets_for_shard must be >= 1 and <= 50. When no physical devices are selected, the number must be >= 1 and <= 500.
    * items [TestTargetsForShard](#testtargetsforshard)

### NetworkConfiguration
* NetworkConfiguration `object`
  * downRule [TrafficRule](#trafficrule)
  * id `string`: The unique opaque id for this network traffic configuration.
  * upRule [TrafficRule](#trafficrule)

### NetworkConfigurationCatalog
* NetworkConfigurationCatalog `object`
  * configurations `array`
    * items [NetworkConfiguration](#networkconfiguration)

### ObbFile
* ObbFile `object`: An opaque binary blob file to install on the device before the test starts.
  * obb [FileReference](#filereference)
  * obbFileName `string`: Required. OBB file name which must conform to the format as specified by Android e.g. [main|patch].0300110.com.example.android.obb which will be installed into \/Android/obb/\/ on the device.

### Orientation
* Orientation `object`: Screen orientation of the device.
  * tags `array`: Tags for this dimension. Example: "default".
    * items `string`
  * id `string`: The id for this orientation. Example: "portrait".
  * name `string`: A human-friendly name for this orientation. Example: "portrait".

### ProvidedSoftwareCatalog
* ProvidedSoftwareCatalog `object`: The currently provided software environment on the devices under test.
  * orchestratorVersion `string`: A string representing the current version of Android Test Orchestrator that is provided by TestExecutionService. Example: "1.0.2 beta".

### RegularFile
* RegularFile `object`: A file or directory to install on the device before the test starts.
  * content [FileReference](#filereference)
  * devicePath `string`: Required. Where to put the content on the device. Must be an absolute, allowlisted path. If the file exists, it will be replaced. The following device-side directories and any of their subdirectories are allowlisted: ${EXTERNAL_STORAGE}, /sdcard, or /storage ${ANDROID_DATA}/local/tmp, or /data/local/tmp Specifying a path outside of these directory trees is invalid. The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device and copy the file there. It is strongly advised to use the Environment API in app and test code to access files on the device in a portable way.

### ResultStorage
* ResultStorage `object`: Locations where the results of running the test are stored.
  * googleCloudStorage [GoogleCloudStorage](#googlecloudstorage)
  * resultsUrl `string`: Output only. URL to the results in the Firebase Web Console.
  * toolResultsExecution [ToolResultsExecution](#toolresultsexecution)
  * toolResultsHistory [ToolResultsHistory](#toolresultshistory)

### RoboDirective
* RoboDirective `object`: Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.
  * actionType `string` (values: ACTION_TYPE_UNSPECIFIED, SINGLE_CLICK, ENTER_TEXT, IGNORE): Required. The type of action that Robo should perform on the specified element.
  * inputText `string`: The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name.
  * resourceName `string`: Required. The android resource name of the target UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html

### RoboStartingIntent
* RoboStartingIntent `object`: Message for specifying the start activities to crawl.
  * launcherActivity [LauncherActivityIntent](#launcheractivityintent)
  * startActivity [StartActivityIntent](#startactivityintent)
  * timeout `string`: Timeout in seconds for each intent.

### Shard
* Shard `object`: Output only. Details about the shard.
  * numShards `integer`: Output only. The total number of shards.
  * shardIndex `integer`: Output only. The index of the shard among all the shards.
  * testTargetsForShard [TestTargetsForShard](#testtargetsforshard)

### ShardingOption
* ShardingOption `object`: Options for enabling sharding.
  * manualSharding [ManualSharding](#manualsharding)
  * uniformSharding [UniformSharding](#uniformsharding)

### StartActivityIntent
* StartActivityIntent `object`: A starting intent specified by an action, uri, and categories.
  * action `string`: Action name. Required for START_ACTIVITY.
  * categories `array`: Intent categories to set on the intent.
    * items `string`
  * uri `string`: URI for the action.

### SystraceSetup
* SystraceSetup `object`
  * durationSeconds `integer`: Systrace duration in seconds. Should be between 1 and 30 seconds. 0 disables systrace.

### TestDetails
* TestDetails `object`: Additional details about the progress of the running test.
  * errorMessage `string`: Output only. If the TestState is ERROR, then this string will contain human-readable details about the error.
  * progressMessages `array`: Output only. Human-readable, detailed descriptions of the test's progress. For example: "Provisioning a device", "Starting Test". During the course of execution new data may be appended to the end of progress_messages.
    * items `string`

### TestEnvironmentCatalog
* TestEnvironmentCatalog `object`: A description of a test environment.
  * androidDeviceCatalog [AndroidDeviceCatalog](#androiddevicecatalog)
  * deviceIpBlockCatalog [DeviceIpBlockCatalog](#deviceipblockcatalog)
  * iosDeviceCatalog [IosDeviceCatalog](#iosdevicecatalog)
  * networkConfigurationCatalog [NetworkConfigurationCatalog](#networkconfigurationcatalog)
  * softwareCatalog [ProvidedSoftwareCatalog](#providedsoftwarecatalog)

### TestExecution
* TestExecution `object`: A single test executed in a single environment.
  * environment [Environment](#environment)
  * id `string`: Output only. Unique id set by the service.
  * matrixId `string`: Output only. Id of the containing TestMatrix.
  * projectId `string`: Output only. The cloud project that owns the test execution.
  * shard [Shard](#shard)
  * state `string` (values: TEST_STATE_UNSPECIFIED, VALIDATING, PENDING, RUNNING, FINISHED, ERROR, UNSUPPORTED_ENVIRONMENT, INCOMPATIBLE_ENVIRONMENT, INCOMPATIBLE_ARCHITECTURE, CANCELLED, INVALID): Output only. Indicates the current progress of the test execution (e.g., FINISHED).
  * testDetails [TestDetails](#testdetails)
  * testSpecification [TestSpecification](#testspecification)
  * timestamp `string`: Output only. The time this test execution was initially created.
  * toolResultsStep [ToolResultsStep](#toolresultsstep)

### TestMatrix
* TestMatrix `object`: TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome.
  * clientInfo [ClientInfo](#clientinfo)
  * environmentMatrix [EnvironmentMatrix](#environmentmatrix)
  * failFast `boolean`: If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation.
  * flakyTestAttempts `integer`: The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns.
  * invalidMatrixDetails `string` (values: INVALID_MATRIX_DETAILS_UNSPECIFIED, DETAILS_UNAVAILABLE, MALFORMED_APK, MALFORMED_TEST_APK, NO_MANIFEST, NO_PACKAGE_NAME, INVALID_PACKAGE_NAME, TEST_SAME_AS_APP, NO_INSTRUMENTATION, NO_SIGNATURE, INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE, NO_TEST_RUNNER_CLASS, NO_LAUNCHER_ACTIVITY, FORBIDDEN_PERMISSIONS, INVALID_ROBO_DIRECTIVES, INVALID_RESOURCE_NAME, INVALID_DIRECTIVE_ACTION, TEST_LOOP_INTENT_FILTER_NOT_FOUND, SCENARIO_LABEL_NOT_DECLARED, SCENARIO_LABEL_MALFORMED, SCENARIO_NOT_DECLARED, DEVICE_ADMIN_RECEIVER, MALFORMED_XC_TEST_ZIP, BUILT_FOR_IOS_SIMULATOR, NO_TESTS_IN_XC_TEST_ZIP, USE_DESTINATION_ARTIFACTS, TEST_NOT_APP_HOSTED, PLIST_CANNOT_BE_PARSED, TEST_ONLY_APK, MALFORMED_IPA, MISSING_URL_SCHEME, MALFORMED_APP_BUNDLE, NO_CODE_APK, INVALID_INPUT_APK, INVALID_APK_PREVIEW_SDK): Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state.
  * outcomeSummary `string` (values: OUTCOME_SUMMARY_UNSPECIFIED, SUCCESS, FAILURE, INCONCLUSIVE, SKIPPED): Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED.
  * projectId `string`: The cloud project that owns the test matrix.
  * resultStorage [ResultStorage](#resultstorage)
  * state `string` (values: TEST_STATE_UNSPECIFIED, VALIDATING, PENDING, RUNNING, FINISHED, ERROR, UNSUPPORTED_ENVIRONMENT, INCOMPATIBLE_ENVIRONMENT, INCOMPATIBLE_ARCHITECTURE, CANCELLED, INVALID): Output only. Indicates the current progress of the test matrix.
  * testExecutions `array`: Output only. The list of test executions that the service creates for this matrix.
    * items [TestExecution](#testexecution)
  * testMatrixId `string`: Output only. Unique id set by the service.
  * testSpecification [TestSpecification](#testspecification)
  * timestamp `string`: Output only. The time this test matrix was initially created.

### TestSetup
* TestSetup `object`: A description of how to set up the Android device prior to running the test.
  * account [Account](#account)
  * additionalApks `array`: APKs to install in addition to those being directly tested. Currently capped at 100.
    * items [Apk](#apk)
  * directoriesToPull `array`: List of directories on the device to upload to GCS at the end of the test; they must be absolute paths under /sdcard, /storage or /data/local/tmp. Path names are restricted to characters a-z A-Z 0-9 _ - . + and / Note: The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device.
    * items `string`
  * dontAutograntPermissions `boolean`: Whether to prevent all runtime permissions to be granted at app install
  * environmentVariables `array`: Environment variables to set for the test (only applicable for instrumentation tests).
    * items [EnvironmentVariable](#environmentvariable)
  * filesToPush `array`: List of files to push to the device before starting the test.
    * items [DeviceFile](#devicefile)
  * networkProfile `string`: The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
  * systrace [SystraceSetup](#systracesetup)

### TestSpecification
* TestSpecification `object`: A description of how to run the test.
  * androidInstrumentationTest [AndroidInstrumentationTest](#androidinstrumentationtest)
  * androidRoboTest [AndroidRoboTest](#androidrobotest)
  * androidTestLoop [AndroidTestLoop](#androidtestloop)
  * disablePerformanceMetrics `boolean`: Disables performance metrics recording. May reduce test latency.
  * disableVideoRecording `boolean`: Disables video recording. May reduce test latency.
  * iosTestLoop [IosTestLoop](#iostestloop)
  * iosTestSetup [IosTestSetup](#iostestsetup)
  * iosXcTest [IosXcTest](#iosxctest)
  * testSetup [TestSetup](#testsetup)
  * testTimeout `string`: Max time a test execution is allowed to run before it is automatically cancelled. The default value is 5 min.

### TestTargetsForShard
* TestTargetsForShard `object`: Test targets for a shard.
  * testTargets `array`: Group of packages, classes, and/or test methods to be run for each shard. The targets need to be specified in AndroidJUnitRunner argument format. For example, "package com.my.packages" "class com.my.package.MyClass". The number of shard_test_targets must be greater than 0.
    * items `string`

### ToolResultsExecution
* ToolResultsExecution `object`: Represents a tool results execution resource. This has the results of a TestMatrix.
  * executionId `string`: Output only. A tool results execution ID.
  * historyId `string`: Output only. A tool results history ID.
  * projectId `string`: Output only. The cloud project that owns the tool results execution.

### ToolResultsHistory
* ToolResultsHistory `object`: Represents a tool results history resource.
  * historyId `string`: Required. A tool results history ID.
  * projectId `string`: Required. The cloud project that owns the tool results history.

### ToolResultsStep
* ToolResultsStep `object`: Represents a tool results step resource. This has the results of a TestExecution.
  * executionId `string`: Output only. A tool results execution ID.
  * historyId `string`: Output only. A tool results history ID.
  * projectId `string`: Output only. The cloud project that owns the tool results step.
  * stepId `string`: Output only. A tool results step ID.

### TrafficRule
* TrafficRule `object`: Network emulation parameters.
  * bandwidth `number`: Bandwidth in kbits/second.
  * burst `number`: Burst size in kbits.
  * delay `string`: Packet delay, must be >= 0.
  * packetDuplicationRatio `number`: Packet duplication ratio (0.0 - 1.0).
  * packetLossRatio `number`: Packet loss ratio (0.0 - 1.0).

### UniformSharding
* UniformSharding `object`: Uniformly shards test cases given a total number of shards. For Instrumentation test, it will be translated to "-e numShard" "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying these sharding arguments via environment_variables is invalid.
  * numShards `integer`: Required. Total number of shards. When any physical devices are selected, the number must be >= 1 and <= 50. When no physical devices are selected, the number must be >= 1 and <= 500.

### XcodeVersion
* XcodeVersion `object`: An Xcode version that an iOS version is compatible with.
  * tags `array`: Tags for this Xcode version. Example: "default".
    * items `string`
  * version `string`: The id for this version. Example: "9.2".


