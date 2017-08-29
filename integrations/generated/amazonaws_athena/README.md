# @datafire/amazonaws_athena

Client library for Amazon Athena

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_athena
```

```js
let datafire = require('datafire');
let amazonaws_athena = require('@datafire/amazonaws_athena').create();

amazonaws_athena.BatchGetNamedQuery({}).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

## Actions
### BatchGetNamedQuery



```js
amazonaws_athena.BatchGetNamedQuery({}, context)
```


### BatchGetQueryExecution



```js
amazonaws_athena.BatchGetQueryExecution({}, context)
```


### CreateNamedQuery



```js
amazonaws_athena.CreateNamedQuery({}, context)
```


### DeleteNamedQuery



```js
amazonaws_athena.DeleteNamedQuery({}, context)
```


### GetNamedQuery



```js
amazonaws_athena.GetNamedQuery({}, context)
```


### GetQueryExecution



```js
amazonaws_athena.GetQueryExecution({}, context)
```


### GetQueryResults



```js
amazonaws_athena.GetQueryResults({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListNamedQueries



```js
amazonaws_athena.ListNamedQueries({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListQueryExecutions



```js
amazonaws_athena.ListQueryExecutions({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### StartQueryExecution



```js
amazonaws_athena.StartQueryExecution({}, context)
```


### StopQueryExecution



```js
amazonaws_athena.StopQueryExecution({}, context)
```


