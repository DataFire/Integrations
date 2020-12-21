# @datafire/openlinksw_osdb

Client library for OSDB REST API v1

## Installation and Usage
```bash
npm install --save @datafire/openlinksw_osdb
```
```js
let openlinksw_osdb = require('@datafire/openlinksw_osdb').create();

.then(data => {
  console.log(data);
});
```

## Description

An OpenAPI description of the OpenLink Smart Data Bot REST API v1

## Actions

### listActions
Returns an array of action descriptions for the actions supported by the given service


```js
openlinksw_osdb.listActions({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: Service ID of the service for which actions are to be listed

#### Output
* output [ListActionsResponse](#listactionsresponse)

### describeAction
Returns a description of a given service action.


```js
openlinksw_osdb.describeAction({
  "serviceId": "",
  "actionId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: Service ID of the service supporting the action.
  * actionId **required** `string`: Action ID of the action to describe.

#### Output
* output [DescribeActionResponse](#describeactionresponse)

### executeAction
Executes a registered service action and returns any output from the action.
The data returned in the POST response body may be: 
* the raw action output, 
* a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET), 
* RDF generated from the action output,
* a URL to an RDF viewer's display of the generated RDF.

Any parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: "query", "header", "uri", "path" and "body".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, 'Execute action' accepts some OSDB-specific parameters.<br/><br/>

**Examples**
* ```curl -ik -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```  
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"generate_rdf", "osdb:response_format":"application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"display_rdf" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:response_format": "application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:output_type": "url_only" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "Content-Location": "http://demo.openlinksw.co.uk/pubs", "osdb:body_data_src_url": "http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv", "extractor": "csv", "osdb:response_format": "application/rdf+xml", "osdb:body_data_encoding": "text/csv" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```


```js
openlinksw_osdb.executeAction({
  "serviceId": "",
  "actionId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: Service ID of the service supporting the action.
  * actionId **required** `string`: Action ID of the action to execute.
  * body [ExecBody](#execbody)

#### Output
*Output schema unknown*

### actionHelp
Returns the help text for a given service action


```js
openlinksw_osdb.actionHelp({
  "serviceId": "",
  "actionId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: Service ID of the service supporting the action.
  * actionId **required** `string`: Action ID of the action for which help text is being requested.

#### Output
* output [ActionHelpResponse](#actionhelpresponse)

### login
Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid


```js
openlinksw_osdb.login(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [LoginResponse](#loginresponse)

### logout
Logs a user out of the OSDB server, ending their OSDB session


```js
openlinksw_osdb.logout(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [LogoutResponse](#logoutresponse)

### listServices
Returns descriptions of all services registered with the OSDB server.


```js
openlinksw_osdb.listServices(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ListServicesResponse](#listservicesresponse)

### loadService
Loads a service description into the OSDB Service Registry


```js
openlinksw_osdb.loadService({}, context)
```

#### Input
* input `object`
  * body `object`
    * service_description_url **required** `string`: The URL of the resource containing the service description to load.
    * service_moniker `string`: Service ID to be used to uniquely identify the service. (Optional: Required for anonymous services or to override the service name in the service description.)

#### Output
* output `object`
  * api **required** `string`: The path of the REST API method
  * method **required** `string`: The name of the REST API method
  * response **required** `string`: Confirmation message
  * status **required** `string` (values: success)

### unloadService
Removes a service description from the OSDB Service Registry


```js
openlinksw_osdb.unloadService({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: Service ID of the service to be unloaded

#### Output
* output `object`
  * api **required** `string`: The path of the REST API method
  * method **required** `string`: The name of the REST API method
  * response **required** `string`: Confirmation message
  * status **required** `string` (values: success)

### describeService
Returns a description of a given service


```js
openlinksw_osdb.describeService({
  "serviceId": ""
}, context)
```

#### Input
* input `object`
  * serviceId **required** `string`: Service ID of the service to describe.

#### Output
* output [DescribeServiceResponse](#describeserviceresponse)



## Definitions

### ActionDescription
* ActionDescription `object`
  * action_id **required** `string`: A unique one word identifier for the action.
  * description `string`: A short description of the action.
  * entry_point **required** [EntryPoint](#entrypoint)

### ActionHelp
* ActionHelp `object`
  * action_id **required** `string`: A unique one word identifier for the action.
  * help_text **required** `string`: The help text for the action.
  * service_id **required** `string`: A unique one word identifier for the service.

### ActionHelpResponse
* ActionHelpResponse `object`
  * api **required** `string`: The path of the REST API method
  * method **required** `string`: The name of the REST API method
  * response **required** [ActionHelp](#actionhelp)
  * status **required** `string` (values: success)

### DescribeActionResponse
* DescribeActionResponse `object`
  * api **required** `string`: The path of the REST API method
  * method **required** `string`: The name of the REST API method
  * response **required** [ActionDescription](#actiondescription)
  * status **required** `string` (values: success)

### DescribeServiceResponse
* DescribeServiceResponse `object`
  * api **required** `string`: The path of the REST API method
  * method **required** `string`: The name of the REST API method
  * response **required** [ServiceDescription](#servicedescription)
  * status **required** `string` (values: success)

### EntryPoint
* EntryPoint `object`
  * parameters **required** `array`: Descriptions of the EntryPoint parameters. Null if not applicable.
    * items [EntryPointParameter](#entrypointparameter)
  * content_types **required** `array`: The supported MIME type(s) for an EntryPoint response.
    * items `string`
  * description **required** `string`: A short description of the action. Optional - may be null.
  * encoding_types **required** `array`: The supported MIME type(s) for an EntryPoint request. Null if not applicable.
    * items `string`
  * http_method **required** `string` (values: GET, PUT, POST, DELETE): The HTTP method used by the EntryPoint.
  * name **required** `string`: A word or short phrase to be used as the action's display name. Optional - may be null.
  * url **required** `string`: The EntryPoint URL. It will be non-null if url_template is null.
  * url_template **required** `string`: The EntryPoint's URL template. Only required if the entry point URL is parameterized. Property 'url' will be null if url_template is non-null.

### EntryPointParameter
* EntryPointParameter `object`
  * description **required** `string`: A short description of the parameter for use in the OSDB Action Console. Optional - may be null.
  * display_name **required** `string`: The parameter's display name in the OSDB Action Console. Optional - may be null.
  * parameter_name **required** `string`: The parameter name as present in the HTTP request. e.g. the key name in a query string key-value pair.
  * permitted_values **required** `array`: If the parameter accepts only a limited set of values, the allowed set of values. Null if not applicable.
    * items `string`
  * required **required** `integer`: A flag indicating if the parameter is optional.
  * type **required** `string` (values: query, header, uri, path, body): The type of the parameter, indicating its location in the HTTP request.

### ErrorModel
* ErrorModel `object`
  * api `string`: The path of the REST API method reporting the error
  * method `string`: The name of the REST API method reporting the error
  * response `string`: A message describing the error
  * status `string` (values: error)

### ExecBody
* ExecBody `object`
  * action_specific_property1 `string`: An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value.
  * action_specific_property2 `string`: An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value.
  * osdb:body_data_encoding `string`: The media type of the data associated with osdb:body_data_raw or osdb:body_data_src_url. In the case of osdb:body_data_raw, this is the media type before base64 encoding.
  * osdb:body_data_raw `string`: Input data for the action (e.g. CSV data). The data must be base64 encoded by the client. Alternatively, clients can use osdb:body_data_src_url to supply the input data via a web-accessible document.
  * osdb:body_data_src_url `string`: URL of a resource containing input data for the action (e.g. CSV data). Clients can instead use osdb:body_data_raw to supply the input data directly.
  * osdb:output_type `string` (values: url_only, generate_rdf, display_rdf): An OSDB-specific parameter controlling the action output type. If omitted, the native action output is returned.
  * osdb:response_format `string`: Preferred response MIME type. This must be an output MIME type supported natively by the action or, if 'osdb:output_type' is set to 'generate_rdf', a Virtuoso Sponger output format. i.e. 'application/ld+json', 'text/turtle' or 'application/rdf+xml'.

### ListActionsResponse
* ListActionsResponse `object`
  * api **required** `string`: The path of the REST API method
  * method **required** `string`: The name of the REST API method
  * response **required** `array`
    * items [ActionDescription](#actiondescription)
  * status **required** `string` (values: success)

### ListServicesResponse
* ListServicesResponse `object`
  * api **required** `string`: The path of the REST API method
  * method **required** `string`: The name of the REST API method
  * response **required** `array`
    * items [ServiceDescription](#servicedescription)
  * status **required** `string` (values: success)

### LoginResponse
* LoginResponse `object`
  * api **required** `string`: The path of the REST API method
  * method **required** `string`: The name of the REST API method
  * response **required** `object`
    * user **required** `string`: The WebID of the user who has logged in.
  * status **required** `string` (values: success)

### LogoutResponse
* LogoutResponse `object`
  * api **required** `string`: The path of the REST API method
  * method **required** `string`: The name of the REST API method
  * response **required** `object`
    * user **required** `string`: The WebID of the user who has logged out.
  * status **required** `string` (values: success)

### ServiceDescription
* ServiceDescription `object`
  * description `string`: A short description of the service.
  * import_source_uri **required** `string`: The URI of the source service description document used to load the service into OSDB.
  * service_id **required** `string`: A unique one word identifier for the service.
  * service_name **required** `string`: A word or phrase naming the service.


