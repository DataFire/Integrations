# @datafire/amazonaws_cur

Client library for AWS Cost and Usage Report Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cur
```

```js
let datafire = require('datafire');
let amazonaws_cur = require('@datafire/amazonaws_cur').create();

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

#### Parameters
* ReportName (string) - Preferred name for a report, it has to be unique. Must starts with a number/letter, case sensitive. Limited to 256 characters.

### DescribeReportDefinitions



```js
amazonaws_cur.DescribeReportDefinitions({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer) - The max number of results returned by the operation.
* NextToken (string) - A generic string.

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

#### Parameters
* ReportDefinition (object) **required** - The definition of AWS Cost and Usage Report. Customer can specify the report name, time unit, report format, compression format, S3 bucket and additional artifacts and schema elements in the definition.

