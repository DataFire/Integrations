# @datafire/azure_machinelearning_webservices

Client library for Azure ML Web Services Management Client

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearning_webservices
```
```js
let azure_machinelearning_webservices = require('@datafire/azure_machinelearning_webservices').create();

azure_machinelearning_webservices.WebServices_ListBySubscriptionId({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

These APIs allow end users to operate on Azure Machine Learning Web Services resources. They support the following operations:<ul><li>Create or update a web service</li><li>Get a web service</li><li>Patch a web service</li><li>Delete a web service</li><li>Get All Web Services in a Resource Group </li><li>Get All Web Services in a Subscription</li><li>Get Web Services Keys</li></ul>

## Actions

### WebServices_ListBySubscriptionId
Gets the web services in the specified subscription.


```js
azure_machinelearning_webservices.WebServices_ListBySubscriptionId({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $skiptoken `string`: Continuation token for pagination.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [PaginatedWebServicesList](#paginatedwebserviceslist)

### WebServices_ListByResourceGroup
Gets the web services in the specified resource group.


```js
azure_machinelearning_webservices.WebServices_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group in which the web service is located.
  * $skiptoken `string`: Continuation token for pagination.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [PaginatedWebServicesList](#paginatedwebserviceslist)

### WebServices_Remove
Deletes the specified web service.


```js
azure_machinelearning_webservices.WebServices_Remove({
  "resourceGroupName": "",
  "webServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group in which the web service is located.
  * webServiceName **required** `string`: The name of the web service.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
*Output schema unknown*

### WebServices_Get
Gets the Web Service Definition as specified by a subscription, resource group, and name. Note that the storage credentials and web service keys are not returned by this call. To get the web service access keys, call List Keys.


```js
azure_machinelearning_webservices.WebServices_Get({
  "resourceGroupName": "",
  "webServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group in which the web service is located.
  * webServiceName **required** `string`: The name of the web service.
  * region `string`: The region for which encrypted credential parameters are valid.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [WebService](#webservice)

### WebServices_Patch
Modifies an existing web service resource. The PATCH API call is an asynchronous operation. To determine whether it has completed successfully, you must perform a Get operation.


```js
azure_machinelearning_webservices.WebServices_Patch({
  "resourceGroupName": "",
  "webServiceName": "",
  "patchPayload": {
    "properties": {
      "packageType": ""
    }
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group in which the web service is located.
  * webServiceName **required** `string`: The name of the web service.
  * patchPayload **required** [WebService](#webservice)
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [WebService](#webservice)

### WebServices_CreateOrUpdate
Create or update a web service. This call will overwrite an existing web service. Note that there is no warning or confirmation. This is a nonrecoverable operation. If your intent is to create a new web service, call the Get operation first to verify that it does not exist.


```js
azure_machinelearning_webservices.WebServices_CreateOrUpdate({
  "resourceGroupName": "",
  "webServiceName": "",
  "createOrUpdatePayload": {
    "properties": {
      "packageType": ""
    }
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group in which the web service is located.
  * webServiceName **required** `string`: The name of the web service.
  * createOrUpdatePayload **required** [WebService](#webservice)
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [WebService](#webservice)

### WebServices_CreateRegionalProperties
Creates an encrypted credentials parameter blob for the specified region. To get the web service from a region other than the region in which it has been created, you must first call Create Regional Web Services Properties to create a copy of the encrypted credential parameter blob in that region. You only need to do this before the first time that you get the web service in the new region.


```js
azure_machinelearning_webservices.WebServices_CreateRegionalProperties({
  "resourceGroupName": "",
  "webServiceName": "",
  "region": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group in which the web service is located.
  * webServiceName **required** `string`: The name of the web service.
  * region **required** `string`: The region for which encrypted credential parameters are created.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

### WebServices_ListKeys
Gets the access keys for the specified web service.


```js
azure_machinelearning_webservices.WebServices_ListKeys({
  "resourceGroupName": "",
  "webServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group in which the web service is located.
  * webServiceName **required** `string`: The name of the web service.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [WebServiceKeys](#webservicekeys)



## Definitions

### AssetItem
* AssetItem `object`: Information about an asset associated with the web service.
  * id `string`: Asset's Id.
  * inputPorts `object`: Information about the asset's input ports.
  * locationInfo **required** [BlobLocation](#bloblocation)
  * metadata `object`: If the asset is a custom module, this holds the module's metadata.
  * name **required** `string`: Asset's friendly name.
  * outputPorts `object`: Information about the asset's output ports.
  * parameters `array`: If the asset is a custom module, this holds the module's parameters.
    * items [ModuleAssetParameter](#moduleassetparameter)
  * type **required** `string` (values: Module, Resource): Asset's type.

### AsyncOperationErrorInfo
* AsyncOperationErrorInfo `object`: The error detail information for async operation
  * code `string`: The error code.
  * details `array`: An array containing error information.
    * items [AsyncOperationErrorInfo](#asyncoperationerrorinfo)
  * message `string`: The error message.
  * target `string`: The error target.

### AsyncOperationStatus
* AsyncOperationStatus `object`: Azure async operation status.
  * endTime `string`: The date time that the async operation finished.
  * errorInfo [AsyncOperationErrorInfo](#asyncoperationerrorinfo)
  * id `string`: Async operation id.
  * name `string`: Async operation name.
  * percentComplete `number`: Async operation progress.
  * provisioningState `string` (values: Unknown, Provisioning, Succeeded, Failed): Read Only: The provisioning state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed.
  * startTime `string`: The date time that the async operation started.

### BlobLocation
* BlobLocation `object`: Describes the access location for a blob.
  * credentials `string`: Access credentials for the blob, if applicable (e.g. blob specified by storage account connection string + blob URI)
  * uri **required** `string`: The URI from which the blob is accessible from. For example, aml://abc for system assets or https://xyz for user assets or payload.

### ColumnSpecification
* ColumnSpecification `object`: Swagger 2.0 schema for a column within the data table representing a web service input or output. See Swagger specification: http://swagger.io/specification/
  * enum `array`: If the data type is categorical, this provides the list of accepted categories.
    * items `object`
  * format `string` (values: Byte, Char, Complex64, Complex128, Date-time, Date-timeOffset, Double, Duration, Float, Int8, Int16, Int32, Int64, Uint8, Uint16, Uint32, Uint64): Additional format information for the data type.
  * type **required** `string` (values: Boolean, Integer, Number, String): Data type of the column.
  * x-ms-isnullable `boolean`: Flag indicating if the type supports null values or not.
  * x-ms-isordered `boolean`: Flag indicating whether the categories are treated as an ordered set or not, if this is a categorical column.

### CommitmentPlan
* CommitmentPlan `object`: Information about the machine learning commitment plan associated with the web service.
  * id **required** `string`: Specifies the Azure Resource Manager ID of the commitment plan associated with the web service.

### DiagnosticsConfiguration
* DiagnosticsConfiguration `object`: Diagnostics settings for an Azure ML web service.
  * expiry `string`: Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited.
  * level **required** `string` (values: None, Error, All): Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr).

### ExampleRequest
* ExampleRequest `object`: Sample input data for the service's input(s).
  * globalParameters `object`: Sample input data for the web service's global parameters
  * inputs `object`: Sample input data for the web service's input(s) given as an input name to sample input values matrix map.

### GraphEdge
* GraphEdge `object`: Defines an edge within the web service's graph.
  * sourceNodeId `string`: The source graph node's identifier.
  * sourcePortId `string`: The identifier of the source node's port that the edge connects from.
  * targetNodeId `string`: The destination graph node's identifier.
  * targetPortId `string`: The identifier of the destination node's port that the edge connects into.

### GraphNode
* GraphNode `object`: Specifies a node in the web service graph. The node can either be an input, output or asset node, so only one of the corresponding id properties is populated at any given time.
  * assetId `string`: The id of the asset represented by this node.
  * inputId `string`: The id of the input element represented by this node.
  * outputId `string`: The id of the output element represented by this node.
  * parameters `object`: If applicable, parameters of the node. Global graph parameters map into these, with values set at runtime.

### GraphPackage
* GraphPackage `object`: Defines the graph of modules making up the machine learning solution.
  * edges `array`: The list of edges making up the graph.
    * items [GraphEdge](#graphedge)
  * graphParameters `object`: The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level.
  * nodes `object`: The set of nodes making up the graph, provided as a nodeId to GraphNode map

### GraphParameter
* GraphParameter `object`: Defines a global parameter in the graph.
  * description `string`: Description of this graph parameter.
  * links **required** `array`: Association links for this parameter to nodes in the graph.
    * items [GraphParameterLink](#graphparameterlink)
  * type **required** `string` (values: String, Int, Float, Enumerated, Script, Mode, Credential, Boolean, Double, ColumnPicker, ParameterRange, DataGatewayName): Graph parameter's type.

### GraphParameterLink
* GraphParameterLink `object`: Association link for a graph global parameter to a node in the graph.
  * nodeId **required** `string`: The graph node's identifier
  * parameterKey **required** `string`: The identifier of the node parameter that the global parameter maps to.

### InputPort
* InputPort `object`: Asset input port
  * type `string` (values: Dataset): Port data type.

### MachineLearningWorkspace
* MachineLearningWorkspace `object`: Information about the machine learning workspace containing the experiment that is source for the web service.
  * id **required** `string`: Specifies the workspace ID of the machine learning workspace associated with the web service

### ModeValueInfo
* ModeValueInfo `object`: Nested parameter definition.
  * interfaceString `string`: The interface string name for the nested parameter.
  * parameters `array`: The definition of the parameter.
    * items [ModuleAssetParameter](#moduleassetparameter)

### ModuleAssetParameter
* ModuleAssetParameter `object`: Parameter definition for a module asset.
  * modeValuesInfo `object`: Definitions for nested interface parameters if this is a complex module parameter.
  * name `string`: Parameter name.
  * parameterType `string`: Parameter type.

### OutputPort
* OutputPort `object`: Asset output port
  * type `string` (values: Dataset): Port data type.

### PaginatedWebServicesList
* PaginatedWebServicesList `object`: Paginated list of web services.
  * nextLink `string`: A continuation link (absolute URI) to the next page of results in the list.
  * value `array`: An array of web service objects.
    * items [WebService](#webservice)

### RealtimeConfiguration
* RealtimeConfiguration `object`: Holds the available configuration options for an Azure ML web service endpoint.
  * maxConcurrentCalls `integer`: Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200.

### Resource
* Resource `object`: Azure resource.
  * id `string`: Specifies the resource ID.
  * location **required** `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### ServiceInputOutputSpecification
* ServiceInputOutputSpecification `object`: The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/
  * description `string`: The description of the Swagger schema.
  * properties **required** `object`: Specifies a collection that contains the column schema for each input or output of the web service. For more information, see the Swagger specification.
  * title `string`: The title of your Swagger schema.
  * type **required** `string`: The type of the entity described in swagger. Always 'object'.

### StorageAccount
* StorageAccount `object`: Access information for a storage account.
  * key `string`: Specifies the key used to access the storage account.
  * name `string`: Specifies the name of the storage account.

### TableSpecification
* TableSpecification `object`: The swagger 2.0 schema describing a single service input or output. See Swagger specification: http://swagger.io/specification/
  * description `string`: Swagger schema description.
  * format `string`: The format, if 'type' is not 'object'
  * properties `object`: The set of columns within the data table.
  * title `string`: Swagger schema title.
  * type **required** `string`: The type of the entity described in swagger.

### WebService
* WebService `object`: Instance of an Azure ML web service resource.
  * properties **required** [WebServiceProperties](#webserviceproperties)
  * id `string`: Specifies the resource ID.
  * location **required** `string`: Specifies the location of the resource.
  * name `string`: Specifies the name of the resource.
  * tags `object`: Contains resource tags defined as key/value pairs.
  * type `string`: Specifies the type of the resource.

### WebServiceKeys
* WebServiceKeys `object`: Access keys for the web service calls.
  * primary `string`: The primary access key.
  * secondary `string`: The secondary access key.

### WebServiceParameter
* WebServiceParameter `object`: Web Service Parameter object for node and global parameter
  * certificateThumbprint `string`: If the parameter value in 'value' field is encrypted, the thumbprint of the certificate should be put here.
  * value `object`: The parameter value

### WebServiceProperties
* WebServiceProperties `object`: The set of properties specific to the Azure ML web service resource.
  * assets `object`: Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs.
  * commitmentPlan [CommitmentPlan](#commitmentplan)
  * createdOn `string`: Read Only: The date and time when the web service was created.
  * description `string`: The description of the web service.
  * diagnostics [DiagnosticsConfiguration](#diagnosticsconfiguration)
  * exampleRequest [ExampleRequest](#examplerequest)
  * exposeSampleData `boolean`: When set to true, sample data is included in the web service's swagger definition. The default value is true.
  * input [ServiceInputOutputSpecification](#serviceinputoutputspecification)
  * keys [WebServiceKeys](#webservicekeys)
  * machineLearningWorkspace [MachineLearningWorkspace](#machinelearningworkspace)
  * modifiedOn `string`: Read Only: The date and time when the web service was last modified.
  * output [ServiceInputOutputSpecification](#serviceinputoutputspecification)
  * packageType **required** `string` (values: Graph): Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time.
  * parameters `object`: The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required.
  * payloadsInBlobStorage `boolean`: When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output, Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest.
  * payloadsLocation [BlobLocation](#bloblocation)
  * provisioningState `string` (values: Unknown, Provisioning, Succeeded, Failed): Read Only: The provision state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed.
  * readOnly `boolean`: When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value.
  * realtimeConfiguration [RealtimeConfiguration](#realtimeconfiguration)
  * storageAccount [StorageAccount](#storageaccount)
  * swaggerLocation `string`: Read Only: Contains the URI of the swagger spec associated with this web service.
  * title `string`: The title of the web service.

### WebServicePropertiesForGraph
* WebServicePropertiesForGraph `object`: Properties specific to a Graph based web service.
  * package [GraphPackage](#graphpackage)
  * assets `object`: Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs.
  * commitmentPlan [CommitmentPlan](#commitmentplan)
  * createdOn `string`: Read Only: The date and time when the web service was created.
  * description `string`: The description of the web service.
  * diagnostics [DiagnosticsConfiguration](#diagnosticsconfiguration)
  * exampleRequest [ExampleRequest](#examplerequest)
  * exposeSampleData `boolean`: When set to true, sample data is included in the web service's swagger definition. The default value is true.
  * input [ServiceInputOutputSpecification](#serviceinputoutputspecification)
  * keys [WebServiceKeys](#webservicekeys)
  * machineLearningWorkspace [MachineLearningWorkspace](#machinelearningworkspace)
  * modifiedOn `string`: Read Only: The date and time when the web service was last modified.
  * output [ServiceInputOutputSpecification](#serviceinputoutputspecification)
  * packageType **required** `string` (values: Graph): Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time.
  * parameters `object`: The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required.
  * payloadsInBlobStorage `boolean`: When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output, Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest.
  * payloadsLocation [BlobLocation](#bloblocation)
  * provisioningState `string` (values: Unknown, Provisioning, Succeeded, Failed): Read Only: The provision state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed.
  * readOnly `boolean`: When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value.
  * realtimeConfiguration [RealtimeConfiguration](#realtimeconfiguration)
  * storageAccount [StorageAccount](#storageaccount)
  * swaggerLocation `string`: Read Only: Contains the URI of the swagger spec associated with this web service.
  * title `string`: The title of the web service.


