# @datafire/azure_arm_streamanalytics

Client library for StreamAnalyticsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_streamanalytics
```
```js
let azure_arm_streamanalytics = require('@datafire/azure_arm_streamanalytics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_streamanalytics.Functions_ListByStreamingJob({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### Functions_ListByStreamingJob
Lists all of the functions under the specified streaming job.


```js
azure_arm_streamanalytics.Functions_ListByStreamingJob({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * $select `string`: The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or “*” to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.

#### Output
* output [FunctionListResult](#functionlistresult)

### Functions_Delete
Deletes a function from the streaming job.


```js
azure_arm_streamanalytics.Functions_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * functionName **required** `string`: The name of the function.

#### Output
*Output schema unknown*

### Functions_Get
Gets details about the specified function.


```js
azure_arm_streamanalytics.Functions_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * functionName **required** `string`: The name of the function.

#### Output
* output [Function](#function)

### Functions_Update
Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.


```js
azure_arm_streamanalytics.Functions_Update({
  "function": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Input
* input `object`
  * function **required** [Function](#function)
  * If-Match `string`: The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwritting concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * functionName **required** `string`: The name of the function.

#### Output
* output [Function](#function)

### Functions_CreateOrReplace
Creates a function or replaces an already existing function under an existing streaming job.


```js
azure_arm_streamanalytics.Functions_CreateOrReplace({
  "function": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Input
* input `object`
  * function **required** [Function](#function)
  * If-Match `string`: The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwritting concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new function to be created, but to prevent updating an existing function. Other values will result in a 412 Pre-condition Failed response.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * functionName **required** `string`: The name of the function.

#### Output
* output [Function](#function)

### Functions_RetrieveDefaultDefinition
Retrieves the default definition of a function based on the parameters specified.


```js
azure_arm_streamanalytics.Functions_RetrieveDefaultDefinition({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Input
* input `object`
  * functionRetrieveDefaultDefinitionParameters [FunctionRetrieveDefaultDefinitionParameters](#functionretrievedefaultdefinitionparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * functionName **required** `string`: The name of the function.

#### Output
* output [Function](#function)

### Functions_Test
Tests if the information provided for a function is valid. This can range from testing the connection to the underlying web service behind the function or making sure the function code provided is syntactically correct.


```js
azure_arm_streamanalytics.Functions_Test({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "functionName": ""
}, context)
```

#### Input
* input `object`
  * function [Function](#function)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * functionName **required** `string`: The name of the function.

#### Output
* output `object`: Describes the status of the test operation along with error information, if applicable.
  * error [ErrorResponse](#errorresponse)
  * status `string`: The status of the test operation.



## Definitions

### AzureMachineLearningWebServiceFunctionBinding
* AzureMachineLearningWebServiceFunctionBinding `object`: The binding to an Azure Machine Learning web service.
  * properties [AzureMachineLearningWebServiceFunctionBindingProperties](#azuremachinelearningwebservicefunctionbindingproperties)
  * type `string`: Indicates the function binding type.

### AzureMachineLearningWebServiceFunctionBindingProperties
* AzureMachineLearningWebServiceFunctionBindingProperties `object`: The binding properties associated with an Azure Machine learning web service.
  * apiKey `string`: The API key used to authenticate with Request-Response endpoint.
  * batchSize `integer`: Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
  * endpoint `string`: The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
  * inputs [AzureMachineLearningWebServiceInputs](#azuremachinelearningwebserviceinputs)
  * outputs `array`: A list of outputs from the Azure Machine Learning web service endpoint execution.
    * items [AzureMachineLearningWebServiceOutputColumn](#azuremachinelearningwebserviceoutputcolumn)

### AzureMachineLearningWebServiceFunctionBindingRetrievalProperties
* AzureMachineLearningWebServiceFunctionBindingRetrievalProperties `object`: The binding retrieval properties associated with an Azure Machine learning web service.
  * executeEndpoint `string`: The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
  * udfType [UdfType](#udftype)

### AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters
* AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters `object`: The parameters needed to retrieve the default function definition for an Azure Machine Learning web service function.
  * bindingRetrievalProperties [AzureMachineLearningWebServiceFunctionBindingRetrievalProperties](#azuremachinelearningwebservicefunctionbindingretrievalproperties)
  * bindingType `string`: Indicates the function binding type.

### AzureMachineLearningWebServiceInputColumn
* AzureMachineLearningWebServiceInputColumn `object`: Describes an input column for the Azure Machine Learning web service endpoint.
  * dataType `string`: The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
  * mapTo `integer`: The zero based index of the function parameter this input maps to.
  * name `string`: The name of the input column.

### AzureMachineLearningWebServiceInputs
* AzureMachineLearningWebServiceInputs `object`: The inputs for the Azure Machine Learning web service endpoint.
  * columnNames `array`: A list of input columns for the Azure Machine Learning web service endpoint.
    * items [AzureMachineLearningWebServiceInputColumn](#azuremachinelearningwebserviceinputcolumn)
  * name `string`: The name of the input. This is the name provided while authoring the endpoint.

### AzureMachineLearningWebServiceOutputColumn
* AzureMachineLearningWebServiceOutputColumn `object`: Describes an output column for the Azure Machine Learning web service endpoint.
  * dataType `string`: The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
  * name `string`: The name of the output column.

### ErrorResponse
* ErrorResponse `object`

### Function
* Function `object`: A function object, containing all information associated with the named function. All functions are contained under a streaming job.
  * properties [FunctionProperties](#functionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### FunctionBinding
* FunctionBinding `object`: The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
  * type `string`: Indicates the function binding type.

### FunctionInput
* FunctionInput `object`: Describes one input parameter of a function.
  * dataType `string`: The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
  * isConfigurationParameter `boolean`: A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.

### FunctionListResult
* FunctionListResult `object`: Object containing a list of functions under a streaming job.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: A list of functions under a streaming job. Populated by a 'List' operation.
    * items [Function](#function)

### FunctionOutput
* FunctionOutput `object`: Describes the output of a function.
  * dataType `string`: The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx

### FunctionProperties
* FunctionProperties `object`: The properties that are associated with a function.
  * etag `string`: The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
  * type `string`: Indicates the type of function.

### FunctionRetrieveDefaultDefinitionParameters
* FunctionRetrieveDefaultDefinitionParameters `object`: Parameters used to specify the type of function to retrieve the default definition for.
  * bindingType `string`: Indicates the function binding type.

### JavaScriptFunctionBinding
* JavaScriptFunctionBinding `object`: The binding to a JavaScript function.
  * properties [JavaScriptFunctionBindingProperties](#javascriptfunctionbindingproperties)
  * type `string`: Indicates the function binding type.

### JavaScriptFunctionBindingProperties
* JavaScriptFunctionBindingProperties `object`: The binding properties associated with a JavaScript function.
  * script `string`: The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'

### JavaScriptFunctionBindingRetrievalProperties
* JavaScriptFunctionBindingRetrievalProperties `object`: The binding retrieval properties associated with a JavaScript function.
  * script `string`: The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'.
  * udfType [UdfType](#udftype)

### JavaScriptFunctionRetrieveDefaultDefinitionParameters
* JavaScriptFunctionRetrieveDefaultDefinitionParameters `object`: The parameters needed to retrieve the default function definition for a JavaScript function.
  * bindingRetrievalProperties [JavaScriptFunctionBindingRetrievalProperties](#javascriptfunctionbindingretrievalproperties)
  * bindingType `string`: Indicates the function binding type.

### ScalarFunctionConfiguration
* ScalarFunctionConfiguration `object`: Describes the configuration of the scalar function.
  * binding [FunctionBinding](#functionbinding)
  * inputs `array`: A list of inputs describing the parameters of the function.
    * items [FunctionInput](#functioninput)
  * output [FunctionOutput](#functionoutput)

### ScalarFunctionProperties
* ScalarFunctionProperties `object`: The properties that are associated with a scalar function.
  * properties [ScalarFunctionConfiguration](#scalarfunctionconfiguration)
  * etag `string`: The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
  * type `string`: Indicates the type of function.

### SubResource
* SubResource `object`: The base sub-resource model definition.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### UdfType
* UdfType `string` (values: Scalar): The function type.


