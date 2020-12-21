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

.then(data => {
  console.log(data);
});
```

## Description

<p>The AWS Cost and Usage Report API enables you to programmatically create, query, and delete AWS Cost and Usage report definitions.</p> <p>AWS Cost and Usage reports track the monthly AWS costs and usage associated with your AWS account. The report contains line items for each unique combination of AWS product, usage type, and operation that your AWS account uses. You can configure the AWS Cost and Usage report to show only the data that you want, using the AWS Cost and Usage API.</p> <p>Service Endpoint</p> <p>The AWS Cost and Usage Report API provides the following endpoint:</p> <ul> <li> <p>cur.us-east-1.amazonaws.com</p> </li> </ul>

## Actions

### DeleteReportDefinition



```js
amazonaws_cur.DeleteReportDefinition({}, context)
```

#### Input
* input `object`
  * ReportName

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

### ModifyReportDefinition



```js
amazonaws_cur.ModifyReportDefinition({
  "ReportName": "",
  "ReportDefinition": {
    "ReportName": "",
    "TimeUnit": "",
    "Format": "",
    "Compression": "",
    "AdditionalSchemaElements": null,
    "S3Bucket": "",
    "S3Prefix": "",
    "S3Region": ""
  }
}, context)
```

#### Input
* input `object`
  * ReportDefinition **required** [ReportDefinition](#reportdefinition)
  * ReportName **required** [ReportName](#reportname)

#### Output
* output [ModifyReportDefinitionResponse](#modifyreportdefinitionresponse)

### PutReportDefinition



```js
amazonaws_cur.PutReportDefinition({
  "ReportDefinition": null
}, context)
```

#### Input
* input `object`
  * ReportDefinition **required**
    * AdditionalArtifacts
      * items [AdditionalArtifact](#additionalartifact)
    * AdditionalSchemaElements **required**
      * items [SchemaElement](#schemaelement)
    * Compression **required** [CompressionFormat](#compressionformat)
    * Format **required** [ReportFormat](#reportformat)
    * RefreshClosedReports
    * ReportName **required** [ReportName](#reportname)
    * ReportVersioning
    * S3Bucket **required** [S3Bucket](#s3bucket)
    * S3Prefix **required** [S3Prefix](#s3prefix)
    * S3Region **required** [AWSRegion](#awsregion)
    * TimeUnit **required** [TimeUnit](#timeunit)

#### Output
* output [PutReportDefinitionResponse](#putreportdefinitionresponse)



## Definitions

### AWSRegion
* AWSRegion `string` (values: af-south-1, ap-east-1, ap-south-1, ap-southeast-1, ap-southeast-2, ap-northeast-1, ap-northeast-2, ap-northeast-3, ca-central-1, eu-central-1, eu-west-1, eu-west-2, eu-west-3, eu-north-1, eu-south-1, me-south-1, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2, cn-north-1, cn-northwest-1): The region of the S3 bucket that AWS delivers the report into.

### AdditionalArtifact
* AdditionalArtifact `string` (values: REDSHIFT, QUICKSIGHT, ATHENA): The types of manifest that you want AWS to create for this report.

### AdditionalArtifactList
* AdditionalArtifactList `array`: A list of additional artifacts.
  * items [AdditionalArtifact](#additionalartifact)

### CompressionFormat
* CompressionFormat `string` (values: ZIP, GZIP, Parquet): The compression format that AWS uses for the report.

### DeleteReportDefinitionRequest
* DeleteReportDefinitionRequest `object`: Deletes the specified report.
  * ReportName

### DeleteReportDefinitionResponse
* DeleteReportDefinitionResponse `object`: If the action is successful, the service sends back an HTTP 200 response.
  * ResponseMessage [DeleteResponseMessage](#deleteresponsemessage)

### DeleteResponseMessage
* DeleteResponseMessage `string`: Whether the deletion was successful or not.

### DescribeReportDefinitionsRequest
* DescribeReportDefinitionsRequest `object`: Requests a list of AWS Cost and Usage reports owned by the account.
  * MaxResults [MaxResults](#maxresults)
  * NextToken [GenericString](#genericstring)

### DescribeReportDefinitionsResponse
* DescribeReportDefinitionsResponse `object`: If the action is successful, the service sends back an HTTP 200 response.
  * NextToken [GenericString](#genericstring)
  * ReportDefinitions
    * items [ReportDefinition](#reportdefinition)

### DuplicateReportNameException


### GenericString
* GenericString `string`: A generic string.

### InternalErrorException


### MaxResults
* MaxResults `integer`: The maximum number of results that AWS returns for the operation.

### ModifyReportDefinitionRequest
* ModifyReportDefinitionRequest `object`
  * ReportDefinition **required** [ReportDefinition](#reportdefinition)
  * ReportName **required** [ReportName](#reportname)

### ModifyReportDefinitionResponse
* ModifyReportDefinitionResponse `object`

### PutReportDefinitionRequest
* PutReportDefinitionRequest `object`: Creates a Cost and Usage Report.
  * ReportDefinition **required**
    * AdditionalArtifacts
      * items [AdditionalArtifact](#additionalartifact)
    * AdditionalSchemaElements **required**
      * items [SchemaElement](#schemaelement)
    * Compression **required** [CompressionFormat](#compressionformat)
    * Format **required** [ReportFormat](#reportformat)
    * RefreshClosedReports
    * ReportName **required** [ReportName](#reportname)
    * ReportVersioning
    * S3Bucket **required** [S3Bucket](#s3bucket)
    * S3Prefix **required** [S3Prefix](#s3prefix)
    * S3Region **required** [AWSRegion](#awsregion)
    * TimeUnit **required** [TimeUnit](#timeunit)

### PutReportDefinitionResponse
* PutReportDefinitionResponse `object`: If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

### RefreshClosedReports
* RefreshClosedReports `boolean`

### ReportDefinition
* ReportDefinition `object`: The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. 
  * AdditionalArtifacts
    * items [AdditionalArtifact](#additionalartifact)
  * AdditionalSchemaElements **required**
    * items [SchemaElement](#schemaelement)
  * Compression **required** [CompressionFormat](#compressionformat)
  * Format **required** [ReportFormat](#reportformat)
  * RefreshClosedReports
  * ReportName **required** [ReportName](#reportname)
  * ReportVersioning
  * S3Bucket **required** [S3Bucket](#s3bucket)
  * S3Prefix **required** [S3Prefix](#s3prefix)
  * S3Region **required** [AWSRegion](#awsregion)
  * TimeUnit **required** [TimeUnit](#timeunit)

### ReportDefinitionList
* ReportDefinitionList `array`: A list of report definitions.
  * items [ReportDefinition](#reportdefinition)

### ReportFormat
* ReportFormat `string` (values: textORcsv, Parquet): The format that AWS saves the report in.

### ReportLimitReachedException


### ReportName
* ReportName `string`: The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces. 

### ReportVersioning
* ReportVersioning `string` (values: CREATE_NEW_REPORT, OVERWRITE_REPORT)

### S3Bucket
* S3Bucket `string`: The S3 bucket where AWS delivers the report.

### S3Prefix
* S3Prefix `string`: The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.

### SchemaElement
* SchemaElement `string` (values: RESOURCES): Whether or not AWS includes resource IDs in the report. 

### SchemaElementList
* SchemaElementList `array`: A list of strings that indicate the content that is included in the report, such as service or usage type.
  * items [SchemaElement](#schemaelement)

### TimeUnit
* TimeUnit `string` (values: HOURLY, DAILY, MONTHLY): The length of time covered by the report. 

### ValidationException



