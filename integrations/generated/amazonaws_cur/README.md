# @datafire/amazonaws_cur

Client library for AWS Cost and Usage Report Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cur
```
```js
let amazonaws_cur = require('@datafire/amazonaws_cur').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_cur.DeleteReportDefinition({}).then(data => {
  console.log(data);
})
```

## Description

All public APIs for AWS Cost and Usage Report service

## Actions

### DeleteReportDefinition



```js
amazonaws_cur.DeleteReportDefinition({}, context)
```

#### Input
* input `object`
  * ReportName [ReportName](#reportname)

#### Output
* output [DeleteReportDefinitionResponse](#deletereportdefinitionresponse)

### DescribeReportDefinitions



```js
amazonaws_cur.DescribeReportDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

#### Output
* output [DescribeReportDefinitionsResponse](#describereportdefinitionsresponse)

### PutReportDefinition



```js
amazonaws_cur.PutReportDefinition({
  "ReportDefinition": {
    "ReportName": "",
    "TimeUnit": "",
    "Format": "",
    "Compression": "",
    "AdditionalSchemaElements": [],
    "S3Bucket": "",
    "S3Prefix": "",
    "S3Region": ""
  }
}, context)
```

#### Input
* input `object`
  * ReportDefinition **required** [ReportDefinition](#reportdefinition)

#### Output
* output [PutReportDefinitionResponse](#putreportdefinitionresponse)



## Definitions

### AWSRegion
* AWSRegion `string` (values: us-east-1, us-west-1, us-west-2, eu-central-1, eu-west-1, ap-southeast-1, ap-southeast-2, ap-northeast-1): Region of customer S3 bucket.

### AdditionalArtifact
* AdditionalArtifact `string` (values: REDSHIFT, QUICKSIGHT): Enable support for Redshift and/or QuickSight.

### AdditionalArtifactList
* AdditionalArtifactList `array`: A list of additional artifacts.
  * items [AdditionalArtifact](#additionalartifact)

### CompressionFormat
* CompressionFormat `string` (values: ZIP, GZIP): Preferred compression format for report.

### DeleteReportDefinitionRequest
* DeleteReportDefinitionRequest `object`: Request of DeleteReportDefinition
  * ReportName [ReportName](#reportname)

### DeleteReportDefinitionResponse
* DeleteReportDefinitionResponse `object`: Response of DeleteReportDefinition
  * ResponseMessage [DeleteResponseMessage](#deleteresponsemessage)

### DeleteResponseMessage
* DeleteResponseMessage `string`: A message indicates if the deletion is successful.

### DescribeReportDefinitionsRequest
* DescribeReportDefinitionsRequest `object`: Request of DescribeReportDefinitions
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

### DescribeReportDefinitionsResponse
* DescribeReportDefinitionsResponse `object`: Response of DescribeReportDefinitions
  * NextToken [GenericString](#genericstring)
  * ReportDefinitions [ReportDefinitionList](#reportdefinitionlist)

### DuplicateReportNameException
* DuplicateReportNameException `object`: This exception is thrown when putting a report preference with a name that already exists.
  * Message [ErrorMessage](#errormessage)

### ErrorMessage
* ErrorMessage `string`: A message to show the detail of the exception.

### GenericString
* GenericString `string`: A generic string.

### InternalErrorException
* InternalErrorException `object`: This exception is thrown on a known dependency failure.
  * Message [ErrorMessage](#errormessage)

### MaxResults
* MaxResults `integer`: The max number of results returned by the operation.

### PutReportDefinitionRequest
* PutReportDefinitionRequest `object`: Request of PutReportDefinition
  * ReportDefinition **required** [ReportDefinition](#reportdefinition)

### PutReportDefinitionResponse
* PutReportDefinitionResponse `object`: Response of PutReportDefinition

### ReportDefinition
* ReportDefinition `object`: The definition of AWS Cost and Usage Report. Customer can specify the report name, time unit, report format, compression format, S3 bucket and additional artifacts and schema elements in the definition.
  * AdditionalArtifacts [AdditionalArtifactList](#additionalartifactlist)
  * AdditionalSchemaElements **required** [SchemaElementList](#schemaelementlist)
  * Compression **required** [CompressionFormat](#compressionformat)
  * Format **required** [ReportFormat](#reportformat)
  * ReportName **required** [ReportName](#reportname)
  * S3Bucket **required** [S3Bucket](#s3bucket)
  * S3Prefix **required** [S3Prefix](#s3prefix)
  * S3Region **required** [AWSRegion](#awsregion)
  * TimeUnit **required** [TimeUnit](#timeunit)

### ReportDefinitionList
* ReportDefinitionList `array`: A list of report definitions.
  * items [ReportDefinition](#reportdefinition)

### ReportFormat
* ReportFormat `string` (values: textORcsv): Preferred format for report.

### ReportLimitReachedException
* ReportLimitReachedException `object`: This exception is thrown when the number of report preference reaches max limit. The max number is 5.
  * Message [ErrorMessage](#errormessage)

### ReportName
* ReportName `string`: Preferred name for a report, it has to be unique. Must starts with a number/letter, case sensitive. Limited to 256 characters.

### S3Bucket
* S3Bucket `string`: Name of customer S3 bucket.

### S3Prefix
* S3Prefix `string`: Preferred report path prefix. Limited to 256 characters.

### SchemaElement
* SchemaElement `string` (values: RESOURCES): Preference of including Resource IDs. You can include additional details about individual resource IDs in your report.

### SchemaElementList
* SchemaElementList `array`: A list of schema elements.
  * items [SchemaElement](#schemaelement)

### TimeUnit
* TimeUnit `string` (values: HOURLY, DAILY): The frequency on which report data are measured and displayed.

### ValidationException
* ValidationException `object`: This exception is thrown when providing an invalid input. eg. Put a report preference with an invalid report name, or Delete a report preference with an empty report name.
  * Message [ErrorMessage](#errormessage)


