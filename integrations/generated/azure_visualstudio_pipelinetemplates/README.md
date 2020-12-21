# @datafire/azure_visualstudio_pipelinetemplates

Client library for Visual Studio Projects Resource Provider Client

## Installation and Usage
```bash
npm install --save @datafire/azure_visualstudio_pipelinetemplates
```
```js
let azure_visualstudio_pipelinetemplates = require('@datafire/azure_visualstudio_pipelinetemplates').create({
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

Use these APIs to manage Visual Studio Team Services resources through the Azure Resource Manager. All task operations conform to the HTTP/1.1 protocol specification and each operation returns an x-ms-request-id header that can be used to obtain information about the request. You must make sure that requests made to these resources are secure. For more information, see https://docs.microsoft.com/en-us/rest/api/index.

## Actions

### PipelineTemplates_List
Gets all pipeline templates which can be used to configure a CI/CD pipeline in a new or an existing Team Services project.


```js
azure_visualstudio_pipelinetemplates.PipelineTemplates_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API Version

#### Output
* output [PipelineTemplateResourceListResult](#pipelinetemplateresourcelistresult)



## Definitions

### InputDescriptor
* InputDescriptor `object`: Defines a pipeline template input.
  * description `string`: Description of what this input is used for.
  * id **required** `string`: Identifier for the input.
  * possibleValues `array`: Possible values that this input can take.
    * items [InputValue](#inputvalue)
  * type **required** `string` (values: String, SecureString, Int, Bool, Authorization): Data type of the input.

### InputValue
* InputValue `object`: Value for an input.
  * displayValue `string`: Display text to show for the value of an input.
  * value `string`: Value to store for an input.

### PipelineTemplate
* PipelineTemplate `object`: Defines a pipeline template resource.
  * description `string`: Description of the pipeline which this template enables.
  * id **required** `string`: Unique id of pipeline template.
  * inputs `array`: Inputs required by this template to create pipeline.
    * items [InputDescriptor](#inputdescriptor)

### PipelineTemplateResourceListResult
* PipelineTemplateResourceListResult `object`: The response to pipeline template resource list GET request.
  * value `array`: Array of resource details.
    * items [PipelineTemplate](#pipelinetemplate)


