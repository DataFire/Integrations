# @datafire/azure_hdinsight_operations

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_operations
```
```js
let azure_hdinsight_operations = require('@datafire/azure_hdinsight_operations').create({
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

The HDInsight Management Client.

## Actions

### Operations_List
Lists all of the available HDInsight REST API operations.


```js
azure_hdinsight_operations.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### Operation
* Operation `object`: The HDInsight REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: The operation type: read, write, delete, etc.
    * provider `string`: The service provider: Microsoft.HDInsight
    * resource `string`: The resource on which the operation is performed: Cluster, Applications, etc.
  * name `string`: The operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list HDInsight operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: The URL to get the next set of operation list results if there are any.
  * value `array`: The list of HDInsight operations supported by the HDInsight resource provider.
    * items [Operation](#operation)


