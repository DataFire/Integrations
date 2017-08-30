# @datafire/amazonaws_athena

Client library for Amazon Athena

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_athena
```

```js
let datafire = require('datafire');
let amazonaws_athena = require('@datafire/amazonaws_athena').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_athena.BatchGetNamedQuery({}).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

## Actions
### BatchGetNamedQuery



```js
amazonaws_athena.BatchGetNamedQuery({
  "NamedQueryIds": []
}, context)
```

#### Parameters
* NamedQueryIds (array) **required**

### BatchGetQueryExecution



```js
amazonaws_athena.BatchGetQueryExecution({
  "QueryExecutionIds": []
}, context)
```

#### Parameters
* QueryExecutionIds (array) **required**

### CreateNamedQuery



```js
amazonaws_athena.CreateNamedQuery({
  "Name": "",
  "Database": "",
  "QueryString": ""
}, context)
```

#### Parameters
* ClientRequestToken (string)
* Database (string) **required**
* Description (string)
* Name (string) **required**
* QueryString (string) **required**

### DeleteNamedQuery



```js
amazonaws_athena.DeleteNamedQuery({
  "NamedQueryId": ""
}, context)
```

#### Parameters
* NamedQueryId (string) **required**

### GetNamedQuery



```js
amazonaws_athena.GetNamedQuery({
  "NamedQueryId": ""
}, context)
```

#### Parameters
* NamedQueryId (string) **required**

### GetQueryExecution



```js
amazonaws_athena.GetQueryExecution({
  "QueryExecutionId": ""
}, context)
```

#### Parameters
* QueryExecutionId (string) **required**

### GetQueryResults



```js
amazonaws_athena.GetQueryResults({
  "QueryExecutionId": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* QueryExecutionId (string) **required**

### ListNamedQueries



```js
amazonaws_athena.ListNamedQueries({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### ListQueryExecutions



```js
amazonaws_athena.ListQueryExecutions({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)

### StartQueryExecution



```js
amazonaws_athena.StartQueryExecution({
  "QueryString": "",
  "ResultConfiguration": {
    "OutputLocation": ""
  }
}, context)
```

#### Parameters
* ClientRequestToken (string)
* QueryExecutionContext (object) - The database in which the query execution occurs.
* QueryString (string) **required**
* ResultConfiguration (object) **required** - The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.

### StopQueryExecution



```js
amazonaws_athena.StopQueryExecution({
  "QueryExecutionId": ""
}, context)
```

#### Parameters
* QueryExecutionId (string) **required**

