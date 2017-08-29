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


### DescribeReportDefinitions



```js
amazonaws_cur.DescribeReportDefinitions({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### PutReportDefinition



```js
amazonaws_cur.PutReportDefinition({}, context)
```


