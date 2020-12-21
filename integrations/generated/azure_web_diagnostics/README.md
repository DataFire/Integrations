# @datafire/azure_web_diagnostics

Client library for Diagnostics API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_diagnostics
```
```js
let azure_web_diagnostics = require('@datafire/azure_web_diagnostics').create({
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

### Diagnostics_ListHostingEnvironmentDetectorResponses
List Hosting Environment Detector Responses


```js
azure_web_diagnostics.Diagnostics_ListHostingEnvironmentDetectorResponses({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Site Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DetectorResponseCollection](#detectorresponsecollection)

### Diagnostics_GetHostingEnvironmentDetectorResponse
Get Hosting Environment Detector Response


```js
azure_web_diagnostics.Diagnostics_GetHostingEnvironmentDetectorResponse({
  "resourceGroupName": "",
  "name": "",
  "detectorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: App Service Environment Name
  * detectorName **required** `string`: Detector Resource Name
  * startTime `string`: Start Time
  * endTime `string`: End Time
  * timeGrain `string`: Time Grain
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DetectorResponse](#detectorresponse)

### Diagnostics_ListSiteDetectorResponses
List Site Detector Responses


```js
azure_web_diagnostics.Diagnostics_ListSiteDetectorResponses({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DetectorResponseCollection](#detectorresponsecollection)

### Diagnostics_GetSiteDetectorResponse
Get site detector response


```js
azure_web_diagnostics.Diagnostics_GetSiteDetectorResponse({
  "resourceGroupName": "",
  "siteName": "",
  "detectorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * detectorName **required** `string`: Detector Resource Name
  * startTime `string`: Start Time
  * endTime `string`: End Time
  * timeGrain `string`: Time Grain
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DetectorResponse](#detectorresponse)

### Diagnostics_ListSiteDiagnosticCategories
Get Diagnostics Categories


```js
azure_web_diagnostics.Diagnostics_ListSiteDiagnosticCategories({
  "resourceGroupName": "",
  "siteName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticCategoryCollection](#diagnosticcategorycollection)

### Diagnostics_GetSiteDiagnosticCategory
Get Diagnostics Category


```js
azure_web_diagnostics.Diagnostics_GetSiteDiagnosticCategory({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticCategory](#diagnosticcategory)

### Diagnostics_ListSiteAnalyses
Get Site Analyses


```js
azure_web_diagnostics.Diagnostics_ListSiteAnalyses({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticAnalysisCollection](#diagnosticanalysiscollection)

### Diagnostics_GetSiteAnalysis
Get Site Analysis


```js
azure_web_diagnostics.Diagnostics_GetSiteAnalysis({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "analysisName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * analysisName **required** `string`: Analysis Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticAnalysis](#diagnosticanalysis)

### Diagnostics_ExecuteSiteAnalysis
Execute Analysis


```js
azure_web_diagnostics.Diagnostics_ExecuteSiteAnalysis({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "analysisName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Category Name
  * analysisName **required** `string`: Analysis Resource Name
  * startTime `string`: Start Time
  * endTime `string`: End Time
  * timeGrain `string`: Time Grain
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticAnalysis](#diagnosticanalysis)

### Diagnostics_ListSiteDetectors
Get Detectors


```js
azure_web_diagnostics.Diagnostics_ListSiteDetectors({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticDetectorCollection](#diagnosticdetectorcollection)

### Diagnostics_GetSiteDetector
Get Detector


```js
azure_web_diagnostics.Diagnostics_GetSiteDetector({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "detectorName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * detectorName **required** `string`: Detector Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticDetectorCollection](#diagnosticdetectorcollection)

### Diagnostics_ExecuteSiteDetector
Execute Detector


```js
azure_web_diagnostics.Diagnostics_ExecuteSiteDetector({
  "resourceGroupName": "",
  "siteName": "",
  "detectorName": "",
  "diagnosticCategory": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * detectorName **required** `string`: Detector Resource Name
  * diagnosticCategory **required** `string`: Category Name
  * startTime `string`: Start Time
  * endTime `string`: End Time
  * timeGrain `string`: Time Grain
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticDetectorResponse](#diagnosticdetectorresponse)

### Diagnostics_ListSiteDetectorResponsesSlot
List Site Detector Responses


```js
azure_web_diagnostics.Diagnostics_ListSiteDetectorResponsesSlot({
  "resourceGroupName": "",
  "siteName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * slot **required** `string`: Slot Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DetectorResponseCollection](#detectorresponsecollection)

### Diagnostics_GetSiteDetectorResponseSlot
Get site detector response


```js
azure_web_diagnostics.Diagnostics_GetSiteDetectorResponseSlot({
  "resourceGroupName": "",
  "siteName": "",
  "detectorName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * detectorName **required** `string`: Detector Resource Name
  * slot **required** `string`: Slot Name
  * startTime `string`: Start Time
  * endTime `string`: End Time
  * timeGrain `string`: Time Grain
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DetectorResponse](#detectorresponse)

### Diagnostics_ListSiteDiagnosticCategoriesSlot
Get Diagnostics Categories


```js
azure_web_diagnostics.Diagnostics_ListSiteDiagnosticCategoriesSlot({
  "resourceGroupName": "",
  "siteName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * slot **required** `string`: Slot Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticCategoryCollection](#diagnosticcategorycollection)

### Diagnostics_GetSiteDiagnosticCategorySlot
Get Diagnostics Category


```js
azure_web_diagnostics.Diagnostics_GetSiteDiagnosticCategorySlot({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * slot **required** `string`: Slot Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticCategory](#diagnosticcategory)

### Diagnostics_ListSiteAnalysesSlot
Get Site Analyses


```js
azure_web_diagnostics.Diagnostics_ListSiteAnalysesSlot({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * slot **required** `string`: Slot Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticAnalysisCollection](#diagnosticanalysiscollection)

### Diagnostics_GetSiteAnalysisSlot
Get Site Analysis


```js
azure_web_diagnostics.Diagnostics_GetSiteAnalysisSlot({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "analysisName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * analysisName **required** `string`: Analysis Name
  * slot **required** `string`: Slot - optional
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticAnalysis](#diagnosticanalysis)

### Diagnostics_ExecuteSiteAnalysisSlot
Execute Analysis


```js
azure_web_diagnostics.Diagnostics_ExecuteSiteAnalysisSlot({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "analysisName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Category Name
  * analysisName **required** `string`: Analysis Resource Name
  * slot **required** `string`: Slot Name
  * startTime `string`: Start Time
  * endTime `string`: End Time
  * timeGrain `string`: Time Grain
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticAnalysis](#diagnosticanalysis)

### Diagnostics_ListSiteDetectorsSlot
Get Detectors


```js
azure_web_diagnostics.Diagnostics_ListSiteDetectorsSlot({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * slot **required** `string`: Slot Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticDetectorCollection](#diagnosticdetectorcollection)

### Diagnostics_GetSiteDetectorSlot
Get Detector


```js
azure_web_diagnostics.Diagnostics_GetSiteDetectorSlot({
  "resourceGroupName": "",
  "siteName": "",
  "diagnosticCategory": "",
  "detectorName": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * diagnosticCategory **required** `string`: Diagnostic Category
  * detectorName **required** `string`: Detector Name
  * slot **required** `string`: Slot Name
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticDetectorCollection](#diagnosticdetectorcollection)

### Diagnostics_ExecuteSiteDetectorSlot
Execute Detector


```js
azure_web_diagnostics.Diagnostics_ExecuteSiteDetectorSlot({
  "resourceGroupName": "",
  "siteName": "",
  "detectorName": "",
  "diagnosticCategory": "",
  "slot": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * siteName **required** `string`: Site Name
  * detectorName **required** `string`: Detector Resource Name
  * diagnosticCategory **required** `string`: Category Name
  * slot **required** `string`: Slot Name
  * startTime `string`: Start Time
  * endTime `string`: End Time
  * timeGrain `string`: Time Grain
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [DiagnosticDetectorResponse](#diagnosticdetectorresponse)



## Definitions

### AbnormalTimePeriod
* AbnormalTimePeriod `object`: Class representing Abnormal Time Period identified in diagnosis
  * endTime `string`: End time of the downtime
  * events `array`: List of Possible Cause of downtime
    * items [DetectorAbnormalTimePeriod](#detectorabnormaltimeperiod)
  * solutions `array`: List of proposed solutions
    * items [Solution](#solution)
  * startTime `string`: Start time of the downtime

### AnalysisData
* AnalysisData `object`: Class Representing Detector Evidence used for analysis
  * data `array`: Additional Source Data
    * items `array`
      * items `object`: Name value pair.
        * name `string`: Pair name.
        * value `string`: Pair value.
  * detectorDefinition [DetectorDefinition](#detectordefinition)
  * detectorMetaData [ResponseMetaData](#responsemetadata)
  * metrics `array`: Source Metrics
    * items [DiagnosticMetricSet](#diagnosticmetricset)
  * source `string`: Name of the Detector

### AnalysisDefinition
* AnalysisDefinition `object`: Definition of Analysis
  * properties `object`: AnalysisDefinition resource specific properties
    * description `string`: Description of the Analysis
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DataSource
* DataSource `object`: Class representing data source used by the detectors
  * dataSourceUri `array`: Datasource Uri Links
    * items `object`: Name value pair.
      * name `string`: Pair name.
      * value `string`: Pair value.
  * instructions `array`: Instructions if any for the data source
    * items `string`

### DataTableResponseColumn
* DataTableResponseColumn `object`: Column definition
  * columnName `string`: Name of the column
  * columnType `string`: Column Type
  * dataType `string`: Data type which looks like 'String' or 'Int32'.

### DataTableResponseObject
* DataTableResponseObject `object`: Data Table which defines columns and raw row values
  * columns `array`: List of columns with data types
    * items [DataTableResponseColumn](#datatableresponsecolumn)
  * rows `array`: Raw row values
    * items `array`
      * items `string`
  * tableName `string`: Name of the table

### DetectorAbnormalTimePeriod
* DetectorAbnormalTimePeriod `object`: Class representing Abnormal Time Period detected.
  * endTime `string`: End time of the correlated event
  * message `string`: Message describing the event
  * metaData `array`: Downtime metadata
    * items `array`
      * items `object`: Name value pair.
        * name `string`: Pair name.
        * value `string`: Pair value.
  * priority `number`: Represents the rank of the Detector
  * solutions `array`: List of proposed solutions
    * items [Solution](#solution)
  * source `string`: Represents the name of the Detector
  * startTime `string`: Start time of the correlated event
  * type `string` (values: ServiceIncident, AppDeployment, AppCrash, RuntimeIssueDetected, AseDeployment, UserIssue, PlatformIssue, Other): Represents the type of the Detector

### DetectorDefinition
* DetectorDefinition `object`: Class representing detector definition
  * properties `object`: DetectorDefinition resource specific properties
    * description `string`: Description of the detector
    * displayName `string`: Display name of the detector
    * isEnabled `boolean`: Flag representing whether detector is enabled or not.
    * rank `number`: Detector Rank
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DetectorInfo
* DetectorInfo `object`: Definition of Detector
  * category `string`: Support Category
  * description `string`: Short description of the detector and its purpose
  * subCategory `string`: Support Sub Category
  * supportTopicId `string`: Support Topic Id

### DetectorResponse
* DetectorResponse `object`: Class representing Response from Detector
  * properties `object`: DetectorResponse resource specific properties
    * dataset `array`: Data Set
      * items [DiagnosticData](#diagnosticdata)
    * metadata [DetectorInfo](#detectorinfo)
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DetectorResponseCollection
* DetectorResponseCollection `object`: Collection of detector responses
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [DetectorResponse](#detectorresponse)

### DiagnosticAnalysis
* DiagnosticAnalysis `object`: Class representing a diagnostic analysis done on an application
  * properties `object`: DiagnosticAnalysis resource specific properties
    * abnormalTimePeriods `array`: List of time periods.
      * items [AbnormalTimePeriod](#abnormaltimeperiod)
    * endTime `string`: End time of the period
    * nonCorrelatedDetectors `array`: Data by each detector for detectors that did not corelate
      * items [DetectorDefinition](#detectordefinition)
    * payload `array`: Data by each detector
      * items [AnalysisData](#analysisdata)
    * startTime `string`: Start time of the period
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DiagnosticAnalysisCollection
* DiagnosticAnalysisCollection `object`: Collection of Diagnostic Analyses
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [AnalysisDefinition](#analysisdefinition)

### DiagnosticCategory
* DiagnosticCategory `object`: Class representing detector definition
  * properties `object`: DiagnosticCategory resource specific properties
    * description `string`: Description of the diagnostic category
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DiagnosticCategoryCollection
* DiagnosticCategoryCollection `object`: Collection of Diagnostic Categories
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [DiagnosticCategory](#diagnosticcategory)

### DiagnosticData
* DiagnosticData `object`: Set of data with rendering instructions
  * renderingProperties [Rendering](#rendering)
  * table [DataTableResponseObject](#datatableresponseobject)

### DiagnosticDetectorCollection
* DiagnosticDetectorCollection `object`: Collection of Diagnostic Detectors
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [DetectorDefinition](#detectordefinition)

### DiagnosticDetectorResponse
* DiagnosticDetectorResponse `object`: Class representing Response from Diagnostic Detectors
  * properties `object`: DiagnosticDetectorResponse resource specific properties
    * abnormalTimePeriods `array`: List of Correlated events found by the detector
      * items [DetectorAbnormalTimePeriod](#detectorabnormaltimeperiod)
    * data `array`: Additional Data that detector wants to send.
      * items `array`
        * items `object`: Name value pair.
          * name `string`: Pair name.
          * value `string`: Pair value.
    * detectorDefinition [DetectorDefinition](#detectordefinition)
    * endTime `string`: End time of the period
    * issueDetected `boolean`: Flag representing Issue was detected.
    * metrics `array`: Metrics provided by the detector
      * items [DiagnosticMetricSet](#diagnosticmetricset)
    * responseMetaData [ResponseMetaData](#responsemetadata)
    * startTime `string`: Start time of the period
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.

### DiagnosticMetricSample
* DiagnosticMetricSample `object`: Class representing Diagnostic Metric
  * isAggregated `boolean`: Whether the values are aggregates across all workers or not
  * maximum `number`: Maximum of the metric sampled during the time period
  * minimum `number`: Minimum of the metric sampled during the time period
  * roleInstance `string`: Role Instance. Null if this counter is not per instance 
  * timestamp `string`: Time at which metric is measured
  * total `number`: Total value of the metric. If multiple measurements are made this will have sum of all.

### DiagnosticMetricSet
* DiagnosticMetricSet `object`: Class representing Diagnostic Metric information
  * endTime `string`: End time of the period
  * name `string`: Name of the metric
  * startTime `string`: Start time of the period
  * timeGrain `string`: Presented time grain. Supported grains at the moment are PT1M, PT1H, P1D
  * unit `string`: Metric's unit
  * values `array`: Collection of metric values for the selected period based on the {Microsoft.Web.Hosting.Administration.DiagnosticMetricSet.TimeGrain}
    * items [DiagnosticMetricSample](#diagnosticmetricsample)

### Rendering
* Rendering `object`: Instructions for rendering the data
  * description `string`: Description of the data that will help it be interpreted
  * title `string`: Title of data
  * type `string` (values: NoGraph, Table, TimeSeries, TimeSeriesPerInstance): Rendering Type

### ResponseMetaData
* ResponseMetaData `object`
  * dataSource [DataSource](#datasource)

### Solution
* Solution `object`: Class Representing Solution for problems detected.
  * data `array`: Solution Data.
    * items `array`
      * items `object`: Name value pair.
        * name `string`: Pair name.
        * value `string`: Pair value.
  * description `string`: Description of the solution
  * displayName `string`: Display Name of the solution
  * id `number`: Solution Id.
  * metadata `array`: Solution Metadata.
    * items `array`
      * items `object`: Name value pair.
        * name `string`: Pair name.
        * value `string`: Pair value.
  * order `number`: Order of the solution.
  * type `string` (values: QuickSolution, DeepInvestigation, BestPractices): Type of Solution


