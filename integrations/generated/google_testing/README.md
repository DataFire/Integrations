# @datafire/google_testing

Client library for Google Cloud Testing

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

google_testing.projects.testMatrices.create({}).then(data => {
  console.log(data);
})
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

### projects.testMatrices.create
Request to run a matrix of tests according to the given specifications.
Unsupported environments will be returned in the state UNSUPPORTED.
Matrices are limited to at most 200 supported executions.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project
- INVALID_ARGUMENT - if the request is malformed or if the matrix expands
                     to more than 200 supported executions


```js
google_testing.projects.testMatrices.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [TestMatrix](#testmatrix)
  * projectId **required** `string`: The GCE project under which this job will run.
  * requestId `string`: A string id used to detect duplicated requests.
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
* output [TestMatrix](#testmatrix)

### projects.testMatrices.get
Check the status of a test matrix.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project
- INVALID_ARGUMENT - if the request is malformed
- NOT_FOUND - if the Test Matrix does not exist


```js
google_testing.projects.testMatrices.get({
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
* output [TestMatrix](#testmatrix)

### projects.testMatrices.cancel
Cancels unfinished test executions in a test matrix.
This call returns immediately and cancellation proceeds asychronously.
If the matrix is already final, this operation will have no effect.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project
- INVALID_ARGUMENT - if the request is malformed
- NOT_FOUND - if the Test Matrix does not exist


```js
google_testing.projects.testMatrices.cancel({
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
* output [CancelTestMatrixResponse](#canceltestmatrixresponse)

### testEnvironmentCatalog.get
Get the catalog of supported test environments.

May return any of the following canonical error codes:

- INVALID_ARGUMENT - if the request is malformed
- NOT_FOUND - if the environment type does not exist
- INTERNAL - if an internal error occurred


```js
google_testing.testEnvironmentCatalog.get({
  "environmentType": ""
}, context)
```

#### Input
* input `object`
  * environmentType **required** `string` (values: ENVIRONMENT_TYPE_UNSPECIFIED, ANDROID, NETWORK_CONFIGURATION): The type of environment that should be listed.
  * projectId `string`: For authorization, the cloud project requesting the TestEnvironmentCatalog.
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
* output [TestEnvironmentCatalog](#testenvironmentcatalog)



## Definitions

### Account
* Account `object`: Identifies an account and how to log into it
  * googleAuto [GoogleAuto](#googleauto)

### AndroidDevice
* AndroidDevice `object`: A single Android device.
  * androidModelId `string`: The id of the Android device to be used.
  * androidVersionId `string`: The id of the Android OS version to be used.
  * locale `string`: The locale the test device used for testing.
  * orientation `string`: How the device is oriented during the test.

### AndroidDeviceCatalog
* AndroidDeviceCatalog `object`: The currently supported Android devices.
  * models `array`: The set of supported Android device models.
    * items [AndroidModel](#androidmodel)
  * runtimeConfiguration [AndroidRuntimeConfiguration](#androidruntimeconfiguration)
  * versions `array`: The set of supported Android OS versions.
    * items [AndroidVersion](#androidversion)

### AndroidDeviceList
* AndroidDeviceList `object`: A list of Android device configurations in which the test is to be executed.
  * androidDevices `array`: A list of Android devices
    * items [AndroidDevice](#androiddevice)

### AndroidInstrumentationTest
* AndroidInstrumentationTest `object`: A test of an Android application that can control an Android component
  * appApk [FileReference](#filereference)
  * appPackageId `string`: The java package for the application under test.
  * orchestratorOption `string` (values: ORCHESTRATOR_OPTION_UNSPECIFIED, USE_ORCHESTRATOR, DO_NOT_USE_ORCHESTRATOR): The option of whether running each test within its own invocation of
  * testApk [FileReference](#filereference)
  * testPackageId `string`: The java package for the test to be executed.
  * testRunnerClass `string`: The InstrumentationTestRunner class.
  * testTargets `array`: Each target must be fully qualified with the package name or class name,
    * items `string`

### AndroidMatrix
* AndroidMatrix `object`: A set of Android device configuration permutations is defined by the
  * androidModelIds `array`: The ids of the set of Android device to be used.
    * items `string`
  * androidVersionIds `array`: The ids of the set of Android OS version to be used.
    * items `string`
  * locales `array`: The set of locales the test device will enable for testing.
    * items `string`
  * orientations `array`: The set of orientations to test with.
    * items `string`

### AndroidModel
* AndroidModel `object`: A description of an Android device tests may be run on.
  * brand `string`: The company that this device is branded with.
  * codename `string`: The name of the industrial design.
  * form `string` (values: DEVICE_FORM_UNSPECIFIED, VIRTUAL, PHYSICAL): Whether this device is virtual or physical.
  * id `string`: The unique opaque id for this model.
  * manufacturer `string`: The manufacturer of this device.
  * name `string`: The human-readable marketing name for this device model.
  * screenDensity `integer`: Screen density in DPI.
  * screenX `integer`: Screen size in the horizontal (X) dimension measured in pixels.
  * screenY `integer`: Screen size in the vertical (Y) dimension measured in pixels.
  * supportedAbis `array`: The list of supported ABIs for this device.
    * items `string`
  * supportedVersionIds `array`: The set of Android versions this device supports.
    * items `string`
  * tags `array`: Tags for this dimension.
    * items `string`

### AndroidRoboTest
* AndroidRoboTest `object`: A test of an android application that explores the application on a virtual
  * appApk [FileReference](#filereference)
  * appInitialActivity `string`: The initial activity that should be used to start the app.
  * appPackageId `string`: The java package for the application under test.
  * maxDepth `integer`: The max depth of the traversal stack Robo can explore. Needs to be at least
  * maxSteps `integer`: The max number of steps Robo can execute.
  * roboDirectives `array`: A set of directives Robo should apply during the crawl.
    * items [RoboDirective](#robodirective)

### AndroidRuntimeConfiguration
* AndroidRuntimeConfiguration `object`: Configuration that can be selected at the time a test is run.
  * locales `array`: The set of available locales.
    * items [Locale](#locale)
  * orientations `array`: The set of available orientations.
    * items [Orientation](#orientation)

### AndroidTestLoop
* AndroidTestLoop `object`: A test of an Android Application with a Test Loop.
  * appApk [FileReference](#filereference)
  * appPackageId `string`: The java package for the application under test.
  * scenarioLabels `array`: The list of scenario labels that should be run during the test.
    * items `string`
  * scenarios `array`: The list of scenarios that should be run during the test.
    * items `integer`

### AndroidVersion
* AndroidVersion `object`: A version of the Android OS
  * apiLevel `integer`: The API level for this Android version.
  * codeName `string`: The code name for this Android version.
  * distribution [Distribution](#distribution)
  * id `string`: An opaque id for this Android version.
  * releaseDate [Date](#date)
  * tags `array`: Tags for this dimension.
    * items `string`
  * versionString `string`: A string representing this version of the Android OS.

### CancelTestMatrixResponse
* CancelTestMatrixResponse `object`: Response containing the current state of the specified test matrix.
  * testState `string` (values: TEST_STATE_UNSPECIFIED, VALIDATING, PENDING, RUNNING, FINISHED, ERROR, UNSUPPORTED_ENVIRONMENT, INCOMPATIBLE_ENVIRONMENT, INCOMPATIBLE_ARCHITECTURE, CANCELLED, INVALID): The current rolled-up state of the test matrix.

### ClientInfo
* ClientInfo `object`: Information about the client which invoked the test.
  * clientInfoDetails `array`: The list of detailed information about client.
    * items [ClientInfoDetail](#clientinfodetail)
  * name `string`: Client name, such as gcloud.

### ClientInfoDetail
* ClientInfoDetail `object`: Key-value pair of detailed information about the client which invoked the
  * key `string`: The key of detailed client information.
  * value `string`: The value of detailed client information.

### Date
* Date `object`: Represents a whole calendar date, e.g. date of birth. The time of day and
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0
  * month `integer`: Month of year. Must be from 1 to 12.
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without

### DeviceFile
* DeviceFile `object`: A single device file description.
  * obbFile [ObbFile](#obbfile)

### Distribution
* Distribution `object`: Data about the relative number of devices running a
  * marketShare `number`: The estimated fraction (0-1) of the total market with this configuration.
  * measurementTime `string`: The time this distribution was measured.

### Environment
* Environment `object`: The environment in which the test is run.
  * androidDevice [AndroidDevice](#androiddevice)

### EnvironmentMatrix
* EnvironmentMatrix `object`: The matrix of environments in which the test is to be executed.
  * androidDeviceList [AndroidDeviceList](#androiddevicelist)
  * androidMatrix [AndroidMatrix](#androidmatrix)

### EnvironmentVariable
* EnvironmentVariable `object`: A key-value pair passed as an environment variable to the test
  * key `string`: Key for the environment variable
  * value `string`: Value for the environment variable

### FileReference
* FileReference `object`: A reference to a file, used for user inputs.
  * gcsPath `string`: A path to a file in Google Cloud Storage.

### GoogleAuto
* GoogleAuto `object`: Enables automatic Google account login.

### GoogleCloudStorage
* GoogleCloudStorage `object`: A storage location within Google cloud storage (GCS).
  * gcsPath `string`: The path to a directory in GCS that will

### Locale
* Locale `object`: A location/region designation for language.
  * id `string`: The id for this locale.
  * name `string`: A human-friendly name for this language/locale.
  * region `string`: A human-friendy string representing the region for this locale.
  * tags `array`: Tags for this dimension.
    * items `string`

### NetworkConfiguration
* NetworkConfiguration `object`
  * downRule [TrafficRule](#trafficrule)
  * id `string`: The unique opaque id for this network traffic configuration
  * upRule [TrafficRule](#trafficrule)

### NetworkConfigurationCatalog
* NetworkConfigurationCatalog `object`
  * configurations `array`
    * items [NetworkConfiguration](#networkconfiguration)

### ObbFile
* ObbFile `object`: An opaque binary blob file to install on the device before the test starts
  * obb [FileReference](#filereference)
  * obbFileName `string`: OBB file name which must conform to the format as specified by

### Orientation
* Orientation `object`: Screen orientation of the device.
  * id `string`: The id for this orientation.
  * name `string`: A human-friendly name for this orientation.
  * tags `array`: Tags for this dimension.
    * items `string`

### ResultStorage
* ResultStorage `object`: Locations where the results of running the test are stored.
  * googleCloudStorage [GoogleCloudStorage](#googlecloudstorage)
  * toolResultsExecution [ToolResultsExecution](#toolresultsexecution)
  * toolResultsHistory [ToolResultsHistory](#toolresultshistory)

### RoboDirective
* RoboDirective `object`: Directs Robo to interact with a specific UI element if it is encountered
  * actionType `string` (values: ACTION_TYPE_UNSPECIFIED, SINGLE_CLICK, ENTER_TEXT): The type of action that Robo should perform on the specified element.
  * inputText `string`: The text that Robo is directed to set. If left empty, the directive will be
  * resourceName `string`: The android resource name of the target UI element

### TestDetails
* TestDetails `object`: Additional details about the progress of the running test.
  * errorMessage `string`: If the TestState is ERROR, then this string will contain human-readable
  * progressMessages `array`: Human-readable, detailed descriptions of the test's progress.
    * items `string`

### TestEnvironmentCatalog
* TestEnvironmentCatalog `object`: A description of a test environment.
  * androidDeviceCatalog [AndroidDeviceCatalog](#androiddevicecatalog)
  * networkConfigurationCatalog [NetworkConfigurationCatalog](#networkconfigurationcatalog)

### TestExecution
* TestExecution `object`: Specifies a single test to be executed in a single environment.
  * environment [Environment](#environment)
  * id `string`: Unique id set by the backend.
  * matrixId `string`: Id of the containing TestMatrix.
  * projectId `string`: The cloud project that owns the test execution.
  * state `string` (values: TEST_STATE_UNSPECIFIED, VALIDATING, PENDING, RUNNING, FINISHED, ERROR, UNSUPPORTED_ENVIRONMENT, INCOMPATIBLE_ENVIRONMENT, INCOMPATIBLE_ARCHITECTURE, CANCELLED, INVALID): Indicates the current progress of the test execution (e.g., FINISHED).
  * testDetails [TestDetails](#testdetails)
  * testSpecification [TestSpecification](#testspecification)
  * timestamp `string`: The time this test execution was initially created.
  * toolResultsStep [ToolResultsStep](#toolresultsstep)

### TestMatrix
* TestMatrix `object`: A group of one or more TestExecutions, built by taking a
  * clientInfo [ClientInfo](#clientinfo)
  * environmentMatrix [EnvironmentMatrix](#environmentmatrix)
  * invalidMatrixDetails `string` (values: INVALID_MATRIX_DETAILS_UNSPECIFIED, DETAILS_UNAVAILABLE, MALFORMED_APK, MALFORMED_TEST_APK, NO_MANIFEST, NO_PACKAGE_NAME, TEST_SAME_AS_APP, NO_INSTRUMENTATION, NO_SIGNATURE, INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE, NO_TEST_RUNNER_CLASS, NO_LAUNCHER_ACTIVITY, FORBIDDEN_PERMISSIONS, INVALID_ROBO_DIRECTIVES, TEST_LOOP_INTENT_FILTER_NOT_FOUND, SCENARIO_LABEL_NOT_DECLARED, SCENARIO_LABEL_MALFORMED, SCENARIO_NOT_DECLARED, DEVICE_ADMIN_RECEIVER, TEST_ONLY_APK): Describes why the matrix is considered invalid.
  * projectId `string`: The cloud project that owns the test matrix.
  * resultStorage [ResultStorage](#resultstorage)
  * state `string` (values: TEST_STATE_UNSPECIFIED, VALIDATING, PENDING, RUNNING, FINISHED, ERROR, UNSUPPORTED_ENVIRONMENT, INCOMPATIBLE_ENVIRONMENT, INCOMPATIBLE_ARCHITECTURE, CANCELLED, INVALID): Indicates the current progress of the test matrix (e.g., FINISHED)
  * testExecutions `array`: The list of test executions that the service creates for this matrix.
    * items [TestExecution](#testexecution)
  * testMatrixId `string`: Unique id set by the service.
  * testSpecification [TestSpecification](#testspecification)
  * timestamp `string`: The time this test matrix was initially created.

### TestSetup
* TestSetup `object`: A description of how to set up the device prior to running the test
  * account [Account](#account)
  * directoriesToPull `array`: List of directories on the device to upload to GCS at the end of the test;
    * items `string`
  * environmentVariables `array`: Environment variables to set for the test (only applicable for
    * items [EnvironmentVariable](#environmentvariable)
  * filesToPush `array`: List of files to push to the device before starting the test.
    * items [DeviceFile](#devicefile)
  * networkProfile `string`: The network traffic profile used for running the test.

### TestSpecification
* TestSpecification `object`: A description of how to run the test.
  * androidInstrumentationTest [AndroidInstrumentationTest](#androidinstrumentationtest)
  * androidRoboTest [AndroidRoboTest](#androidrobotest)
  * androidTestLoop [AndroidTestLoop](#androidtestloop)
  * autoGoogleLogin `boolean`: Enables automatic Google account login.
  * disablePerformanceMetrics `boolean`: Disables performance metrics recording; may reduce test latency.
  * disableVideoRecording `boolean`: Disables video recording; may reduce test latency.
  * testSetup [TestSetup](#testsetup)
  * testTimeout `string`: Max time a test execution is allowed to run before it is

### ToolResultsExecution
* ToolResultsExecution `object`: Represents a tool results execution resource.
  * executionId `string`: A tool results execution ID.
  * historyId `string`: A tool results history ID.
  * projectId `string`: The cloud project that owns the tool results execution.

### ToolResultsHistory
* ToolResultsHistory `object`: Represents a tool results history resource.
  * historyId `string`: A tool results history ID.
  * projectId `string`: The cloud project that owns the tool results history.

### ToolResultsStep
* ToolResultsStep `object`: Represents a tool results step resource.
  * executionId `string`: A tool results execution ID.
  * historyId `string`: A tool results history ID.
  * projectId `string`: The cloud project that owns the tool results step.
  * stepId `string`: A tool results step ID.

### TrafficRule
* TrafficRule `object`: Network emulation parameters
  * bandwidth `number`: Bandwidth in kbits/second
  * burst `number`: Burst size in kbits
  * delay `string`: Packet delay, must be >= 0
  * packetDuplicationRatio `number`: Packet duplication ratio (0.0 - 1.0)
  * packetLossRatio `number`: Packet loss ratio (0.0 - 1.0)


