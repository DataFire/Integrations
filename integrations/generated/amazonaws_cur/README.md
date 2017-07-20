# @datafire/amazonaws_cur

Client library for AWS Cost and Usage Report Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cur
```

```js
let datafire = require('datafire');
let amazonaws_cur = require('@datafire/amazonaws_cur').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_cur: account,
  }
})


amazonaws_cur.DeleteReportDefinition({}, context).then(data => {
  console.log(data);
})
```

## Description
All public APIs for AWS Cost and Usage Report service

## Actions
### DeleteReportDefinition
Delete a specified report definition


```js
amazonaws_cur.DeleteReportDefinition({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of DeleteReportDefinition
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeReportDefinitions
Describe a list of report definitions owned by the account


```js
amazonaws_cur.DescribeReportDefinitions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of DescribeReportDefinitions
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### PutReportDefinition
Create a new report definition


```js
amazonaws_cur.PutReportDefinition({
  "body": {
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
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request of PutReportDefinition
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

