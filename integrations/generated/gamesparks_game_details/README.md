# @datafire/gamesparks_game_details

Client library for GameSparks Game Details API

## Installation and Usage
```bash
npm install --save @datafire/gamesparks_game_details
```
```js
let gamesparks_game_details = require('@datafire/gamesparks_game_details').create({
  accessToken: "",
  username: "",
  password: "",
  jwt: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The API to manage the GameSparks game details

## Actions

### getRegionOptionsUsingGET
getRegionOptions


```js
gamesparks_game_details.getRegionOptionsUsingGET(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GameRegionOptionsDTO](#gameregionoptionsdto)

### getAnalyticsDataUsingGET
Returns the results of executed query defined by the parameters passed in


```js
gamesparks_game_details.getAnalyticsDataUsingGET({
  "apiKey": "",
  "stage": "",
  "dataType": "",
  "precision": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * stage **required** `string` (values: LIVE, PREVIEW): stage
  * dataType **required** `string` (values: activeDevices, activeLocations, activeUsers, averageBandwidthPerUser, averageDauOverMau, averageJsExecutionTime, averageRequestsPerUser, averageResponseTime, averageResponseTimePerType, scriptLogLevelsCount, sessionAnalytic, storagePerUser, customAnalyticTotal, customAnalyticUser, timedAnalyticTotal, sessionAnalyticTotal, connectedUsers): dataType
  * precision **required** `string` (values: HOURLY, DAILY, MONTHLY): precision
  * startDate **required** `string`: yyyy-MM-dd
  * endDate **required** `string`: yyyy-MM-dd
  * keys `string`: the keys to select. For example "ReturningUsers", "NewUsers", etc

#### Output
* output `array`
  * items [AnalyticsDataSwaggerModel](#analyticsdataswaggermodel)

### getDataCountUsingGET
Returns the count of executed query


```js
gamesparks_game_details.getDataCountUsingGET({
  "apiKey": "",
  "stage": "",
  "queryName": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * stage **required** `string` (values: LIVE, PREVIEW): stage
  * queryName **required** `string` (values: activeUsersNow, dailyActiveUsers, averageDailyActiveUsers, lastMonthlyActiveUsers, monthlyActiveUsers, averageSessionDuration): queryName

#### Output
* output [AnalyticsDataCountSwaggerModel](#analyticsdatacountswaggermodel)

### getRetentionUsingGET
Returns the percentage of user retention over the last 30 days


```js
gamesparks_game_details.getRetentionUsingGET({
  "apiKey": "",
  "stage": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * stage **required** `string` (values: LIVE, PREVIEW): stage

#### Output
* output [AnalyticsDataCountSwaggerModel](#analyticsdatacountswaggermodel)

### getBillingDetails
Retrieves the Billing Details.


```js
gamesparks_game_details.getBillingDetails({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output [BillingDetailsModel](#billingdetailsmodel)

### putBillingDetails
Updates the Billing Details.


```js
gamesparks_game_details.putBillingDetails({
  "apiKey": "",
  "billingDetails": {
    "building": "",
    "city": "",
    "companyName": "",
    "country": "",
    "email1": "",
    "firstName1": "",
    "lastName1": "",
    "postcode": "",
    "street": ""
  }
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * billingDetails **required** [BillingDetailsModel](#billingdetailsmodel)

#### Output
* output [BillingDetailsModel](#billingdetailsmodel)

### getGameSummaryUsingGET
getGameSummary


```js
gamesparks_game_details.getGameSummaryUsingGET({
  "apiKey": "",
  "stage": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * stage **required** `string` (values: LIVE, PREVIEW): stage
  * startDate **required** `string`: yyyy-MM-dd
  * endDate **required** `string`: yyyy-MM-dd

#### Output
* output [GameSummaryModel](#gamesummarymodel)

### testPushAmazonNotificationsUsingPOST
testPushAmazonNotifications


```js
gamesparks_game_details.testPushAmazonNotificationsUsingPOST({
  "apiKey": "",
  "messageDetails": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * messageDetails **required** [PushNotificationTestModel](#pushnotificationtestmodel)

#### Output
* output [PushNotificationTestSummaryListModel](#pushnotificationtestsummarylistmodel)

### testPushAppleDevNotificationsUsingPOST
testPushAppleDevNotifications


```js
gamesparks_game_details.testPushAppleDevNotificationsUsingPOST({
  "apiKey": "",
  "messageDetails": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * messageDetails **required** [PushNotificationTestModel](#pushnotificationtestmodel)

#### Output
* output [PushNotificationTestSummaryListModel](#pushnotificationtestsummarylistmodel)

### testPushAppleProdNotificationsUsingPOST
testPushAppleProdNotifications


```js
gamesparks_game_details.testPushAppleProdNotificationsUsingPOST({
  "apiKey": "",
  "messageDetails": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * messageDetails **required** [PushNotificationTestModel](#pushnotificationtestmodel)

#### Output
* output [PushNotificationTestSummaryListModel](#pushnotificationtestsummarylistmodel)

### testPushGoogleNotificationsUsingPOST
testPushGoogleNotifications


```js
gamesparks_game_details.testPushGoogleNotificationsUsingPOST({
  "apiKey": "",
  "messageDetails": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * messageDetails **required** [PushNotificationTestModel](#pushnotificationtestmodel)

#### Output
* output [PushNotificationTestSummaryListModel](#pushnotificationtestsummarylistmodel)

### testWindows8NotificationsUsingPOST
testWindows8Notifications


```js
gamesparks_game_details.testWindows8NotificationsUsingPOST({
  "apiKey": "",
  "messageDetails": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * messageDetails **required** [PushNotificationTestModel](#pushnotificationtestmodel)

#### Output
* output [PushNotificationTestSummaryListModel](#pushnotificationtestsummarylistmodel)

### testWindowsPhone8NotificationsUsingPOST
testWindowsPhone8Notifications


```js
gamesparks_game_details.testWindowsPhone8NotificationsUsingPOST({
  "apiKey": "",
  "messageDetails": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * messageDetails **required** [PushNotificationTestModel](#pushnotificationtestmodel)

#### Output
* output [PushNotificationTestSummaryListModel](#pushnotificationtestsummarylistmodel)

### testViberIntegrationNotificationsUsingPOST
testViberIntegrationNotifications


```js
gamesparks_game_details.testViberIntegrationNotificationsUsingPOST({
  "apiKey": "",
  "messageDetails": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * messageDetails **required** [PushNotificationTestModel](#pushnotificationtestmodel)

#### Output
* output [PushNotificationTestSummaryListModel](#pushnotificationtestsummarylistmodel)

### testViberProductionNotificationsUsingPOST
testViberProductionNotifications


```js
gamesparks_game_details.testViberProductionNotificationsUsingPOST({
  "apiKey": "",
  "messageDetails": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * messageDetails **required** [PushNotificationTestModel](#pushnotificationtestmodel)

#### Output
* output [PushNotificationTestSummaryListModel](#pushnotificationtestsummarylistmodel)

### getScriptDifferencesUsingGET
getScriptDifferences


```js
gamesparks_game_details.getScriptDifferencesUsingGET({
  "apiKey": "",
  "snapshotId1": "",
  "snapshotId2": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId1 **required** `string`: snapshotId1
  * snapshotId2 **required** `string`: snapshotId2

#### Output
* output [ScriptsDifferenceListModel](#scriptsdifferencelistmodel)

### exportZipUsingGET
exportZip


```js
gamesparks_game_details.exportZipUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
*Output schema unknown*

### importAcceptUsingPOST
importAccept


```js
gamesparks_game_details.importAcceptUsingPOST({
  "apiKey": "",
  "body": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * body **required** `string`: body
  * file **required** `string`, `object`: file
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [MessageModel](#messagemodel)

### importZipUsingPOST
importZip


```js
gamesparks_game_details.importZipUsingPOST({
  "apiKey": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * file **required** `string`, `object`: file
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [ScriptsDifferenceListModel](#scriptsdifferencelistmodel)

### getScriptVersionsUsingGET_1
getScriptVersions


```js
gamesparks_game_details.getScriptVersionsUsingGET_1({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * pageSize `integer`: pageSize

#### Output
* output [SnapshotScriptVersionListModel](#snapshotscriptversionlistmodel)

### getScriptVersionsUsingGET
getScriptVersions


```js
gamesparks_game_details.getScriptVersionsUsingGET({
  "apiKey": "",
  "page": 0
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * page **required** `integer`: page
  * pageSize `integer`: pageSize

#### Output
* output [SnapshotScriptVersionListModel](#snapshotscriptversionlistmodel)

### getSegmentQueryFiltersUsingGET
getSegmentQueryFilters


```js
gamesparks_game_details.getSegmentQueryFiltersUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output [SegmentQueryFilterListModel](#segmentqueryfilterlistmodel)

### getSegmentQueryFiltersConfigUsingGET
getSegmentQueryFiltersConfig


```js
gamesparks_game_details.getSegmentQueryFiltersConfigUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output [SegmentQueryFilterConfigModel](#segmentqueryfilterconfigmodel)

### updateSegmentQueryFiltersConfigUsingPUT
updateSegmentQueryFiltersConfig


```js
gamesparks_game_details.updateSegmentQueryFiltersConfigUsingPUT({
  "segmentQueryConfig": {},
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * segmentQueryConfig **required** [SegmentQueryFilterConfigModel](#segmentqueryfilterconfigmodel)
  * apiKey **required** `string`: apiKey

#### Output
* output [SegmentQueryFilterConfigModel](#segmentqueryfilterconfigmodel)

### getSegmentQueryStandardFiltersUsingGET
getSegmentQueryStandardFilters


```js
gamesparks_game_details.getSegmentQueryStandardFiltersUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output [SegmentQueryFilterListModel](#segmentqueryfilterlistmodel)

### getSnapshotsUsingGET_1
getSnapshots


```js
gamesparks_game_details.getSnapshotsUsingGET_1({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * pageSize `integer`: pageSize

#### Output
* output `array`
  * items [SnapshotModel](#snapshotmodel)

### createSnapshotsUsingPOST
createSnapshots


```js
gamesparks_game_details.createSnapshotsUsingPOST({
  "apiKey": "",
  "description": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * description **required** [SnapshotCreationModel](#snapshotcreationmodel)

#### Output
* output [SnapshotModel](#snapshotmodel)

### getLiveSnapshotIdUsingGET
getLiveSnapshotId


```js
gamesparks_game_details.getLiveSnapshotIdUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output [MessageModel](#messagemodel)

### getSnapshotsUsingGET
getSnapshots


```js
gamesparks_game_details.getSnapshotsUsingGET({
  "apiKey": "",
  "page": 0
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * page **required** `integer`: page
  * pageSize `integer`: pageSize

#### Output
* output `array`
  * items [SnapshotModel](#snapshotmodel)

### revertToSnapshotUsingPOST
revertToSnapshot


```js
gamesparks_game_details.revertToSnapshotUsingPOST({
  "apiKey": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId

#### Output
* output [MessageModel](#messagemodel)

### deleteSnapshotUsingDELETE_1
deleteSnapshot


```js
gamesparks_game_details.deleteSnapshotUsingDELETE_1({
  "apiKey": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId

#### Output
* output [MessageModel](#messagemodel)

### getSnapshotUsingGET
getSnapshot


```js
gamesparks_game_details.getSnapshotUsingGET({
  "apiKey": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId

#### Output
* output [SnapshotModel](#snapshotmodel)

### copySnapshotToNewGameUsingPOST
copySnapshotToNewGame


```js
gamesparks_game_details.copySnapshotToNewGameUsingPOST({
  "apiKey": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId
  * includeGameConfig `boolean`: includeGameConfig
  * includeMetadata `boolean`: includeMetadata
  * includeBinaries `boolean`: includeBinaries
  * includeCollaborators `boolean`: includeCollaborators

#### Output
* output [SnapshotCreationSuccessModel](#snapshotcreationsuccessmodel)

### copySnapshotToExistingGameUsingPOST_1
copySnapshotToExistingGame


```js
gamesparks_game_details.copySnapshotToExistingGameUsingPOST_1({
  "apiKey": "",
  "snapshotId": "",
  "targetApiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId
  * targetApiKey **required** `string`: targetApiKey
  * includeGameConfig `boolean`: includeGameConfig
  * includeMetadata `boolean`: includeMetadata
  * includeBinaries `boolean`: includeBinaries
  * includeCollaborators `boolean`: includeCollaborators

#### Output
* output [SnapshotCreationSuccessModel](#snapshotcreationsuccessmodel)

### publishSnapshotUsingPOST_1
publishSnapshot


```js
gamesparks_game_details.publishSnapshotUsingPOST_1({
  "apiKey": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId

#### Output
*Output schema unknown*

### unpublishSnapshotUsingPOST
unpublishSnapshot


```js
gamesparks_game_details.unpublishSnapshotUsingPOST({
  "apiKey": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId

#### Output
* output [MessageModel](#messagemodel)

### getTestHarnessScenariosUsingGET
getTestHarnessScenarios


```js
gamesparks_game_details.getTestHarnessScenariosUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output `array`
  * items [TestHarnessScenarioModel](#testharnessscenariomodel)

### createTestHarnessScenarioUsingPOST
createTestHarnessScenario


```js
gamesparks_game_details.createTestHarnessScenarioUsingPOST({
  "apiKey": "",
  "testHarnessScenarioDTO": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * testHarnessScenarioDTO **required** [TestHarnessScenarioModel](#testharnessscenariomodel)

#### Output
* output [TestHarnessScenarioModel](#testharnessscenariomodel)

### deleteTestHarnessScenarioUsingDELETE
deleteTestHarnessScenario


```js
gamesparks_game_details.deleteTestHarnessScenarioUsingDELETE({
  "apiKey": "",
  "scenarioName": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * scenarioName **required** `string`: scenarioName

#### Output
* output [MessageModel](#messagemodel)

### getTestHarnessScenarioUsingGET
getTestHarnessScenario


```js
gamesparks_game_details.getTestHarnessScenarioUsingGET({
  "apiKey": "",
  "scenarioName": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * scenarioName **required** `string`: scenarioName

#### Output
* output [TestHarnessScenarioModel](#testharnessscenariomodel)

### updateTestHarnessScenarioUsingPUT
updateTestHarnessScenario


```js
gamesparks_game_details.updateTestHarnessScenarioUsingPUT({
  "apiKey": "",
  "scenarioName": "",
  "testHarnessScenarioDTO": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * scenarioName **required** `string`: scenarioName
  * testHarnessScenarioDTO **required** [TestHarnessScenarioModel](#testharnessscenariomodel)

#### Output
* output [TestHarnessScenarioModel](#testharnessscenariomodel)

### updateCredentialSecretUsingPOST
Resets the secret of a credential


```js
gamesparks_game_details.updateCredentialSecretUsingPOST({
  "apiKey": "",
  "credentialName": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * credentialName **required** `string`: credentialName

#### Output
*Output schema unknown*

### getGamesEndpointsUsingGET
getGamesEndpoints


```js
gamesparks_game_details.getGamesEndpointsUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output [GameEndpointsModel](#gameendpointsmodel)

### getExperimentsUsingGET
getExperiments


```js
gamesparks_game_details.getExperimentsUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output `array`
  * items [ExperimentModel](#experimentmodel)

### createExperimentUsingPOST
createExperiment


```js
gamesparks_game_details.createExperimentUsingPOST({
  "apiKey": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * input **required** [ExperimentModel](#experimentmodel)

#### Output
* output [ExperimentModel](#experimentmodel)

### deleteExperimentUsingDELETE
deleteExperiment


```js
gamesparks_game_details.deleteExperimentUsingDELETE({
  "apiKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * id **required** `integer`: id

#### Output
* output [MessageModel](#messagemodel)

### getExperimentUsingGET
getExperiment


```js
gamesparks_game_details.getExperimentUsingGET({
  "apiKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * id **required** `integer`: id

#### Output
* output [ExperimentModel](#experimentmodel)

### updateExperimentUsingPUT
updateExperiment


```js
gamesparks_game_details.updateExperimentUsingPUT({
  "apiKey": "",
  "id": 0,
  "input": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * id **required** `integer`: id
  * input **required** [ExperimentModel](#experimentmodel)

#### Output
* output [ExperimentModel](#experimentmodel)

### doActionExperimentUsingPOST
doActionExperiment


```js
gamesparks_game_details.doActionExperimentUsingPOST({
  "apiKey": "",
  "id": 0,
  "action": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * id **required** `integer`: id
  * action **required** `string` (values: start, stop, publish, unpublish): action

#### Output
* output [ExperimentModel](#experimentmodel)

### listQueriesUsingGET
listQueries


```js
gamesparks_game_details.listQueriesUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output `array`
  * items [ManageItemSummary](#manageitemsummary)

### createQueryUsingPOST
createQuery


```js
gamesparks_game_details.createQueryUsingPOST({
  "apiKey": "",
  "query": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * query **required** [ManageQuery](#managequery)

#### Output
* output [ManageQuery](#managequery)

### deleteQueryUsingDELETE
deleteQuery


```js
gamesparks_game_details.deleteQueryUsingDELETE({
  "apiKey": "",
  "shortCode": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * shortCode **required** `string`: shortCode

#### Output
* output [ManageResult](#manageresult)

### getQueryUsingGET
getQuery


```js
gamesparks_game_details.getQueryUsingGET({
  "apiKey": "",
  "shortCode": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * shortCode **required** `string`: shortCode

#### Output
* output [ManageQuery](#managequery)

### updateQueryUsingPUT
updateQuery


```js
gamesparks_game_details.updateQueryUsingPUT({
  "apiKey": "",
  "shortCode": "",
  "query": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * shortCode **required** `string`: shortCode
  * query **required** [ManageQuery](#managequery)

#### Output
* output [ManageQuery](#managequery)

### listScreensUsingGET
listScreens


```js
gamesparks_game_details.listScreensUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output `array`
  * items [ManageItemSummary](#manageitemsummary)

### createScreenUsingPOST
createScreen


```js
gamesparks_game_details.createScreenUsingPOST({
  "apiKey": "",
  "screen": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * screen **required** [ManageScreen](#managescreen)

#### Output
* output [ManageScreen](#managescreen)

### listExecutableScreensUsingGET
listExecutableScreens


```js
gamesparks_game_details.listExecutableScreensUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output `array`
  * items [ManageItemSummary](#manageitemsummary)

### deleteScreenUsingDELETE
deleteScreen


```js
gamesparks_game_details.deleteScreenUsingDELETE({
  "apiKey": "",
  "shortCode": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * shortCode **required** `string`: shortCode

#### Output
* output [ManageResult](#manageresult)

### getScreenUsingGET
getScreen


```js
gamesparks_game_details.getScreenUsingGET({
  "apiKey": "",
  "shortCode": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * shortCode **required** `string`: shortCode

#### Output
* output [ManageScreen](#managescreen)

### updateScreenUsingPUT
updateScreen


```js
gamesparks_game_details.updateScreenUsingPUT({
  "apiKey": "",
  "shortCode": "",
  "screen": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * shortCode **required** `string`: shortCode
  * screen **required** [ManageScreen](#managescreen)

#### Output
* output [ManageScreen](#managescreen)

### listSnapshotsUsingGET
listSnapshots


```js
gamesparks_game_details.listSnapshotsUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output `array`
  * items [ManageSnapshot](#managesnapshot)

### createSnapshotUsingPOST
createSnapshot


```js
gamesparks_game_details.createSnapshotUsingPOST({
  "apiKey": "",
  "model": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * model **required** [SnapshotCreationModel](#snapshotcreationmodel)

#### Output
* output [ManageSnapshot](#managesnapshot)

### deleteSnapshotUsingDELETE
deleteSnapshot


```js
gamesparks_game_details.deleteSnapshotUsingDELETE({
  "apiKey": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId

#### Output
*Output schema unknown*

### copySnapshotToExistingGameUsingPOST
copySnapshotToExistingGame


```js
gamesparks_game_details.copySnapshotToExistingGameUsingPOST({
  "apiKey": "",
  "snapshotId": "",
  "targetApiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId
  * targetApiKey **required** `string`: targetApiKey

#### Output
* output [ManageResult](#manageresult)

### publishSnapshotUsingPOST
publishSnapshot


```js
gamesparks_game_details.publishSnapshotUsingPOST({
  "apiKey": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId

#### Output
* output [ManageResult](#manageresult)

### revertSnapshotUsingPOST
revertSnapshot


```js
gamesparks_game_details.revertSnapshotUsingPOST({
  "apiKey": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snapshotId **required** `string`: snapshotId

#### Output
* output [ManageResult](#manageresult)

### listSnippetsUsingGET
listSnippets


```js
gamesparks_game_details.listSnippetsUsingGET({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output `array`
  * items [ManageItemSummary](#manageitemsummary)

### createSnippetUsingPOST
createSnippet


```js
gamesparks_game_details.createSnippetUsingPOST({
  "apiKey": "",
  "snippet": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * snippet **required** [ManageSnippet](#managesnippet)

#### Output
* output [ManageSnippet](#managesnippet)

### deleteSnippetUsingDELETE
deleteSnippet


```js
gamesparks_game_details.deleteSnippetUsingDELETE({
  "apiKey": "",
  "shortCode": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * shortCode **required** `string`: shortCode

#### Output
* output [ManageResult](#manageresult)

### getSnippetUsingGET
getSnippet


```js
gamesparks_game_details.getSnippetUsingGET({
  "apiKey": "",
  "shortCode": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * shortCode **required** `string`: shortCode

#### Output
* output [ManageSnippet](#managesnippet)

### updateSnippetUsingPUT
updateSnippet


```js
gamesparks_game_details.updateSnippetUsingPUT({
  "apiKey": "",
  "shortCode": "",
  "snippet": {}
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey
  * shortCode **required** `string`: shortCode
  * snippet **required** [ManageSnippet](#managesnippet)

#### Output
* output [ManageSnippet](#managesnippet)

### restoreDeletedGameUsingPOST
restoreDeletedGame


```js
gamesparks_game_details.restoreDeletedGameUsingPOST({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: apiKey

#### Output
* output [MessageModel](#messagemodel)

### setGameRegionUsingPOST
setGameRegion


```js
gamesparks_game_details.setGameRegionUsingPOST({
  "gameApiKey": "",
  "regionCode": ""
}, context)
```

#### Input
* input `object`
  * gameApiKey **required** `string`: gameApiKey
  * regionCode **required** `string`: regionCode

#### Output
* output [RegionResult](#regionresult)

### getGameRegionOptionsUsingGET
getGameRegionOptions


```js
gamesparks_game_details.getGameRegionOptionsUsingGET({
  "gameApiKey": ""
}, context)
```

#### Input
* input `object`
  * gameApiKey **required** `string`: gameApiKey

#### Output
* output [GameRegionOptionsDTO](#gameregionoptionsdto)

### listUsingGET
list


```js
gamesparks_game_details.listUsingGET(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [GameModel](#gamemodel)

### listDeletedUsingGET
listDeleted


```js
gamesparks_game_details.listDeletedUsingGET(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [DeletedGameModel](#deletedgamemodel)



## Definitions

### AnalyticsDataCountSwaggerModel
* AnalyticsDataCountSwaggerModel `object`
  * result `string`

### AnalyticsDataSwaggerModel
* AnalyticsDataSwaggerModel `object`
  * _id `string`

### BillingDetailsModel
* BillingDetailsModel `object`
  * building **required** `string`
  * city **required** `string`
  * companyName **required** `string`
  * country **required** `string`
  * email1 **required** `string`
  * email2 `string`
  * email3 `string`
  * firstName1 **required** `string`
  * firstName2 `string`
  * firstName3 `string`
  * lastName1 **required** `string`
  * lastName2 `string`
  * lastName3 `string`
  * postcode **required** `string`
  * state `string`
  * street **required** `string`
  * taxNumber `string`

### DeletedGameModel
* DeletedGameModel `object`
  * apiKey `string`
  * name `string`

### ExperimentConfigModel
* ExperimentConfigModel `object`
  * playerMongoQuery `string`
  * playerQuery `string`
  * variants `string`

### ExperimentModel
* ExperimentModel `object`
  * active `boolean`
  * changedFieldsAndInitialValues `object`
  * complete `boolean`
  * config [ExperimentConfigModel](#experimentconfigmodel)
  * endDate `string`
  * id `integer`
  * measurements `string`
  * measurementsEsQuery `string`
  * name `string`
  * percentHash `string`
  * publishedStages `array`
    * items `string`
  * startDate `string`

### GameEndpointsModel
* GameEndpointsModel `object`
  * liveElasticSearch `string`
  * liveNosql `string`
  * previewElasticSearch `string`
  * previewNosql `string`

### GameModel
* GameModel `object`
  * @id `string`
  * name `string`

### GameRegionOptionDTO
* GameRegionOptionDTO `object`
  * regionCode `string`
  * regionName `string`
  * selected `boolean`

### GameRegionOptionsDTO
* GameRegionOptionsDTO `object`
  * locked `boolean`
  * options `array`
    * items [GameRegionOptionDTO](#gameregionoptiondto)

### GameSummaryModel
* GameSummaryModel `object`
  * logLevelData `array`
    * items `object`
  * logLevelSummary `array`
    * items [LogLevelSummaryModel](#loglevelsummarymodel)
  * message `string`

### LogLevelSummaryModel
* LogLevelSummaryModel `object`
  * count `integer`
  * level `string`

### ManageItemSummary
* ManageItemSummary `object`
  * name `string`
  * shortCode `string`

### ManageQuery
* ManageQuery `object`
  * esRules `string`
  * name `string`
  * qbRules `string`
  * shortCode `string`

### ManageResult
* ManageResult `object`
  * message `string`

### ManageScreen
* ManageScreen `object`
  * groups `array`
    * items `string`
  * name `string`
  * shortCode `string`
  * template `string`

### ManageSnapshot
* ManageSnapshot `object`
  * date `string`
  * description `string`
  * id `string`
  * published `boolean`

### ManageSnippet
* ManageSnippet `object`
  * groups `array`
    * items `string`
  * name `string`
  * script `string`
  * scriptData `string`
  * shortCode `string`
  * template `string`

### MessageModel
* MessageModel `object`
  * message `string`

### PushNotificationTestModel
* PushNotificationTestModel `object`
  * customJson `string`
  * messageId `string`
  * pushId `string`
  * subtitle `string`
  * summary `string`
  * title `string`

### PushNotificationTestSummaryListModel
* PushNotificationTestSummaryListModel `object`
  * summaries `array`
    * items [PushNotificationTestSummaryModel](#pushnotificationtestsummarymodel)

### PushNotificationTestSummaryModel
* PushNotificationTestSummaryModel `object`
  * error `boolean`
  * outgoingMessageParts `object`
  * resultParts `object`
  * title `string`

### RegionResult
* RegionResult `object`
  * message `string`

### ScriptsDifferenceListModel
* ScriptsDifferenceListModel `object`
  * differences `array`
    * items [ScriptsDifferenceModel](#scriptsdifferencemodel)

### ScriptsDifferenceModel
* ScriptsDifferenceModel `object`
  * bind `string`
  * changeType `string` (values: NOCHANGE, ADDED, CHANGED, DELETED, IGNORED, CHANGED_CODE_INVALID, CHANGED_NAME_INVALID)
  * fileName `string`
  * script1 `string`
  * script2 `string`
  * type `string`

### SegmentQueryFilterConfigModel
* SegmentQueryFilterConfigModel `object`
  * customFilters `array`
    * items [SegmentQueryFilterModel](#segmentqueryfiltermodel)
  * hiddenFilters `array`
    * items `string`

### SegmentQueryFilterListModel
* SegmentQueryFilterListModel `object`
  * filters `array`
    * items [SegmentQueryFilterModel](#segmentqueryfiltermodel)

### SegmentQueryFilterModel
* SegmentQueryFilterModel `object`
  * key `string`
  * name `string`
  * options `array`
    * items `object`
  * type `string`

### SnapshotCreationModel
* SnapshotCreationModel `object`
  * description `string`

### SnapshotCreationSuccessModel
* SnapshotCreationSuccessModel `object`
  * targetGameApiKey `string`

### SnapshotModel
* SnapshotModel `object`
  * created `string`
  * createdBy `string`
  * description `string`
  * id `string`
  * indexProgress `object`
  * published `boolean`
  * status `string`

### SnapshotScriptVersionListModel
* SnapshotScriptVersionListModel `object`
  * scriptVersions `array`
    * items [SnapshotScriptVersionModel](#snapshotscriptversionmodel)

### SnapshotScriptVersionModel
* SnapshotScriptVersionModel `object`
  * cloudCodeVersion `integer`
  * createdDate `string`
  * description `string`
  * id `string`
  * live `boolean`

### TestHarnessScenarioModel
* TestHarnessScenarioModel `object`
  * scenarioJson `object`
  * scenarioName `string`


