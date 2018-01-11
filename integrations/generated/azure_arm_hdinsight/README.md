# @datafire/azure_arm_hdinsight

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_hdinsight
```
```js
let azure_arm_hdinsight = require('@datafire/azure_arm_hdinsight').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_hdinsight.Operations_List({}).then(data => {
  console.log(data);
})
```

## Description

The HDInsight Management Client.

## Actions

### Operations_List
Lists all of the available HDInsight REST API operations.


```js
azure_arm_hdinsight.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### Operation
* Operation `object`: HDInsight REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.HDInsight
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list HDInsight operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of HDInsight operations supported by the HDInsight resource provider.
    * items [Operation](#operation)


