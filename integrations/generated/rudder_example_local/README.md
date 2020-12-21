# @datafire/rudder_example_local

Client library for Rudder API

## Installation and Usage
```bash
npm install --save @datafire/rudder_example_local
```
```js
let rudder_example_local = require('@datafire/rudder_example_local').create({
  "API-Tokens": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Download OpenAPI specification: [openapi.yml](openapi.yml)

# Introduction

Rudder exposes a REST API, enabling the user to interact with Rudder without using the webapp, for example in scripts or cronjobs.

## Versioning

Each time the API is extended with new features (new functions, new parameters, new responses, ...), it will be assigned a new version number. This will allow you
to keep your existing scripts (based on previous behavior). Versions will always be integers (no 2.1 or 3.3, just 2, 3, 4, ...) or `latest`.

You can change the version of the API used by setting it either within the url or in a header:

* the URL: each URL is prefixed by its version id, like `/api/version/function`.


    # Version 10
    curl -X GET -H "X-API-Token: yourToken" https://rudder.example.com/rudder/api/10/rules
    # Latest
    curl -X GET -H "X-API-Token: yourToken" https://rudder.example.com/rudder/api/latest/rules
    # Wrong (not an integer) => 404 not found
    curl -X GET -H "X-API-Token: yourToken" https://rudder.example.com/rudder/api/3.14/rules


* the HTTP headers. You can add the **X-API-Version** header to your request. The value needs to be an integer or `latest`.


    # Version 10
    curl -X GET -H "X-API-Token: yourToken" -H "X-API-Version: 10" https://rudder.example.com/rudder/api/rules
    # Wrong => Error response indicating which versions are available
    curl -X GET -H "X-API-Token: yourToken" -H "X-API-Version: 3.14" https://rudder.example.com/rudder/api/rules


In the future, we may declare some versions as deprecated, in order to remove them in a later version of Rudder, but we will never remove any versions without warning, or without a safe
period of time to allow migration from previous versions.


<h4>Existing versions</h4>
<table>
  <thead>
    <tr>
      <th style="width: 20%">Version</th>
      <th style="width: 20%">Rudder versions it appeared in</th>
      <th style="width: 70%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="code">1</td>
      <td class="code">Never released (for internal use only)</td>
      <td>Experimental version</td>
    </tr>
    <tr>
      <td class="code">2 to 10 (deprecated)</td>
      <td class="code">4.3 and before</td>
      <td>These versions provided the core set of API features for rules, directives, nodes global parameters, change requests and compliance, rudder settings and system API</td>
    </tr>
    <tr>
      <td class="code">11</td>
      <td class="code">5.0</td>
      <td>New system API (replacing old localhost v1 api): status, maintenance operations and server behavior</td>
    </tr>
    <tr>
      <td class="code">12</td>
      <td class="code">6.0</td>
      <td>Node key management</td>
    </tr>

  </tbody>
</table>


## Response format

All responses from the API are in the JSON format.


    {
      "action": The name of the called function,
      "id": The ID of the element you want, if relevant,
      "result": The result of your action: success or error,
      "data": Only present if this is a success and depends on the function, it's usually a JSON object,
      "errorDetails": Only present if this is an error, it contains the error message
    }



* __Success__ responses are sent with the 200 HTTP (Success) code

* __Error__ responses are sent with a HTTP error code (mostly 5xx...)


## HTTP method

Rudder's REST API is based on the usage of [HTTP methods](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html). We use them to indicate what action will be done by the request. Currently, we use four of them:


* **GET**: search or retrieve information (get rule details, get a group, ...)

* **PUT**: add new objects (create a directive, clone a Rule, ...)

* **DELETE**: remove objects (delete a node, delete a parameter, ...)

* **POST**: update existing objects (update a directive, reload a group, ...)


## Parameters

To use Rudder API, you may need to pass data attributes to the API. Most of them depends on the called function and will be described below, in the corresponding function's section. Some are common to almost all functions and are described here:

### Passing parameters

Parameters to the API can be sent:


* As part of the URL

* As request arguments

* Directly in JSON format


#### As part of the URL

Parameters in URLs are used to indicate which data you want to interact with. The function will not work if this data is missing.


    # Get the Rule of ID "id"
    curl -H "X-API-Token: yourToken" https://rudder.example.com/rudder/api/latest/rules/id


#### Request parameters

In most cases, data will be sent using request parameters. for all data you want to change, you need to pass one parameter.

Parameters follow the following schema:


    key=value


You can pass parameters by two means:

* As query parameters: At the end of your url, put a **?** then your first parameter and then a **&** before next parameters


    # Update the Rule 'id' with a new name, disabled, and setting it one directive 
    curl -X POST -H "X-API-Token: yourToken"  https://rudder.example.com/rudder/api/rules/latest/{id}?"displayName=my new name"&"enabled=false"&"directives=aDirectiveId"


* As request data: You can pass those parameters in the request data, they won't figure in the URL, making it lighter to read, You can pass a file that contains data.


    # Update the Rule 'id' with a new name, disabled, and setting it one directive (in file directive-info.json)
    curl -X POST -H "X-API-Token: yourToken"
    https://rudder.example.com/rudder/api/rules/latest/{id} -d "displayName=my new name" -d "enabled=false" -d @directive-info.json


#### Directly in JSON format

Instead of passing parameters one by one, you can instead supply a JSON object containing all you want to do. You'll also have to set the *Content-Type* header to **application/json** (without it the JSON content would be ignored).

The supplied file must contain a valid JSON: strings need quotes, booleans and integers
don't, ...

The (human readable) format is:


    {
      "key1": "value1",
      "key2": false,
      "key3": 42
    }


Here is an example with inlined data:



    # Update the Rule 'id' with a new name, disabled, and setting it one directive
    curl -X POST -H "X-API-Token: yourToken" -H  "Content-Type: application/json"
      https://rudder.example.com/rudder/api/rules/latest/{id} 
      -d '{ "displayName": "new name", "enabled": false, "directives": "directiveId"}'



You can also pass a supply the JSON in a file:


    # Update the Rule 'id' with a new name, disabled, and setting it one directive 
    curl -X POST -H "X-API-Token: yourToken" -H "Content-Type: application/json" https://rudder.example.com/rudder/api/rules/latest/{id} -d @jsonParam


Note that some parameters cannot be passed in a JSON (general parameters, it will be precised when necessary), and you will need to pass them a URL parameters if you want them to be taken into account (you can't mix JSON and request parameters)


    # Update the Rule 'id' with a new name, disabled, and setting it one directive with reason message "Reason used" 
    curl -X POST -H "X-API-Token: yourToken" -H "Content-Type: application/json" "https://rudder.example.com/rudder/api/rules/latest/{id}?reason=Reason used" -d @jsonParam -d "reason=Reason ignored"


### General parameters

Some parameters are available for almost all API functions. They will be described in this section.
They must be part of the query and can't be submitted in a JSON form.

#### Available for all requests

<table>
  <thead>
    <tr>
      <th style="width: 30%">Field</th>
      <th style="width: 10%">Type</th>
      <th style="width: 70%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="code">prettify</td>
      <td><b>boolean</b><br><i>optional</i></td>
      <td>
        Determine if the answer should be prettified (human friendly) or not. We recommend using this for debugging purposes, but not for general script usage as this does add some unnecessary load on the server side.
        <p class="default-value">Default value: <code>false</code></p>
      </td>
    </tr>
  </tbody>
</table>


#### Available for modification requests (PUT/POST/DELETE)

<table>
  <thead>
    <tr>
      <th style="width: 25%">Field</th>
      <th style="width: 12%">Type</th>
      <th style="width: 70%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="code">reason</td>
      <td><b>string</b><br><i>optional</i> or <i>required</i></td>
      <td>
        Set a message to explain the change. If you set the reason messages to be mandatory in the web interface, failing to supply this value will lead to an error.
        <p class="default-value">Default value: <code>""</code></p>
      </td>
    </tr>
    <tr>
      <td class="code">changeRequestName</td>
      <td><b>string</b><br><i>optional</i></td>
      <td>
        Set the change request name, is used only if workflows are enabled. The default value depends on the function called
        <p class="default-value">Default value: <code>A default string for each function</code></p>
      </td>
    </tr>
    <tr>
      <td class="code">changeRequestDescription</td>
      <td><b>string</b><br><i>optional</i></td>
      <td>
        Set the change request description, is used only if workflows are enabled.
        <p class="default-value">Default value: <code>""</code></p>
      </td>
    </tr>
  </tbody>
</table>


## Actions

### listChangeRequests
List all change requests


```js
rudder_example_local.listChangeRequests(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: listChangeRequests): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [change-request](#change-request)
  * result **required** `string` (values: success, error): Result of the request

### getBrandingConf
Get all web interface customization parameters


```js
rudder_example_local.getBrandingConf(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getBrandingConf): The id of the action
  * data **required** `object`
    * branding **required** [branding-conf](#branding-conf)
  * result **required** `string` (values: success, error): Result of the request

### updateBRandingConf
change color, logo, label etc.


```js
rudder_example_local.updateBRandingConf({
  "barColor": {},
  "displayBar": true,
  "displayBarLogin": true,
  "displayLabel": true,
  "displayMotd": true,
  "labelColor": {},
  "labelText": "",
  "motd": "",
  "smallLogo": {},
  "wideLogo": {}
}, context)
```

#### Input
* input `object`
  * barColor **required** `object`
  * displayBar **required** `boolean`: Whether header bar is displayed or not
  * displayBarLogin **required** `boolean`: Whether header bar is displayed in loggin page or not
  * displayLabel **required** `boolean`: Whether header bar's label is displayed or not
  * displayMotd **required** `boolean`: Whether the message of the day is displayed in loggin page or not
  * labelColor **required** `object`
  * labelText **required** `string`: The header bar's label title
  * motd **required** `string`: Message of the day in loggin page
  * smallLogo **required** `object`
  * wideLogo **required** `object`

#### Output
* output `object`
  * action **required** `string` (values: updateBRandingConf): The id of the action
  * data **required** `object`
    * branding **required** [branding-conf](#branding-conf)
  * result **required** `string` (values: success, error): Result of the request

### reloadBrandingConf
Reload the configuration from file


```js
rudder_example_local.reloadBrandingConf(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getBrandingConf): The id of the action
  * data **required** `object`
    * branding **required** [branding-conf](#branding-conf)
  * result **required** `string` (values: success, error): Result of the request

### declineChangeRequest
Refuse a change request


```js
rudder_example_local.declineChangeRequest({
  "changeRequestId": 0
}, context)
```

#### Input
* input `object`
  * changeRequestId **required** `integer`: Change request id

#### Output
* output `object`
  * action **required** `string` (values: declineChangeRequest): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [change-request](#change-request)
  * result **required** `string` (values: success, error): Result of the request

### changeRequestDetails
Get a change request details


```js
rudder_example_local.changeRequestDetails({
  "changeRequestId": 0
}, context)
```

#### Input
* input `object`
  * changeRequestId **required** `integer`: Change request id

#### Output
* output `object`
  * action **required** `string` (values: changeRequestDetails): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [change-request](#change-request)
  * result **required** `string` (values: success, error): Result of the request

### updateChangeRequest
Update a change request


```js
rudder_example_local.updateChangeRequest({
  "changeRequestId": 0
}, context)
```

#### Input
* input `object`
  * changeRequestId **required** `integer`: Change request id
  * description `string`: Change request description
  * name `string`: Change request name

#### Output
* output `object`
  * action **required** `string` (values: updateChangeRequest): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [change-request](#change-request)
  * result **required** `string` (values: success, error): Result of the request

### acceptChangeRequest
Accept a change request


```js
rudder_example_local.acceptChangeRequest({
  "changeRequestId": 0
}, context)
```

#### Input
* input `object`
  * changeRequestId **required** `integer`: Change request id
  * status `string` (values: pending deployment, deployed): New status of the change request

#### Output
* output `object`
  * action **required** `string` (values: acceptChangeRequest): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [change-request](#change-request)
  * result **required** `string` (values: success, error): Result of the request

### getGlobalCompliance
Get current global compliance of a Rudder server


```js
rudder_example_local.getGlobalCompliance(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getGlobalCompliance): The id of the action
  * data **required** `object`
    * globalCompliance **required** `object`
      * compliance **required** `number`: Global compliance level (`-1` when no policies are defined)
      * complianceDetails `object`
        * error `number`
        * noReport `number`
        * successAlreadyOK `number`
        * successNotApplicable `number`
        * successRepaired `number`
        * unexpectedMissingComponent `number`
        * unexpectedUnknownComponent `number`
  * result **required** `string` (values: success, error): Result of the request

### getNodesCompliance
Get current compliance of all the nodes of a Rudder server


```js
rudder_example_local.getNodesCompliance({}, context)
```

#### Input
* input `object`
  * level `integer`: Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)

#### Output
* output `object`
  * action **required** `string` (values: getNodesCompliance): The id of the action
  * data **required** `object`
    * nodes **required** `array`
      * items `object`
        * compliance **required** `number`: Rule compliance level
        * complianceDetails **required** `object`
          * error `number`
          * noReport `number`
          * successAlreadyOK `number`
          * successNotApplicable `number`
          * successRepaired `number`
          * unexpectedMissingComponent `number`
          * unexpectedUnknownComponent `number`
        * id **required** `string`: id of the node
        * mode **required** `string` (values: full-compliance, changes-only, reports-disabled)
  * result **required** `string` (values: success, error): Result of the request

### getNodeCompliance
Get current compliance of a node of a Rudder server


```js
rudder_example_local.getNodeCompliance({
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * level `integer`: Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)
  * nodeId **required** `string`: Id of the target node

#### Output
* output `object`
  * action **required** `string` (values: getNodeCompliance): The id of the action
  * data **required** `object`
    * nodes **required** `array`
      * items `object`
        * compliance **required** `number`: Rule compliance level
        * complianceDetails **required** `object`
          * error `number`
          * noReport `number`
          * successAlreadyOK `number`
          * successNotApplicable `number`
          * successRepaired `number`
          * unexpectedMissingComponent `number`
          * unexpectedUnknownComponent `number`
        * id **required** `string`: id of the node
        * mode **required** `string` (values: full-compliance, changes-only, reports-disabled)
  * result **required** `string` (values: success, error): Result of the request

### getRulesCompliance
Get current compliance of all the rules of a Rudder server


```js
rudder_example_local.getRulesCompliance({}, context)
```

#### Input
* input `object`
  * level `integer`: Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)

#### Output
* output `object`
  * action **required** `string` (values: getRulesCompliance): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items `object`
        * compliance **required** `number`: Rule compliance level
        * complianceDetails **required** `object`
          * error `number`
          * noReport `number`
          * successAlreadyOK `number`
          * successNotApplicable `number`
          * successRepaired `number`
          * unexpectedMissingComponent `number`
          * unexpectedUnknownComponent `number`
        * id **required** `string`: id of the rule
        * mode **required** `string` (values: full-compliance, changes-only, reports-disabled)
  * result **required** `string` (values: success, error): Result of the request

### getRuleCompliance
Get current compliance of a rule of a Rudder server


```js
rudder_example_local.getRuleCompliance({
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * level `integer`: Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)
  * ruleId **required** `string`: Id of the target rule

#### Output
* output `object`
  * action **required** `string` (values: getRuleCompliance): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items `object`
        * compliance **required** `number`: Rule compliance level
        * complianceDetails **required** `object`
          * error `number`
          * noReport `number`
          * successAlreadyOK `number`
          * successNotApplicable `number`
          * successRepaired `number`
          * unexpectedMissingComponent `number`
          * unexpectedUnknownComponent `number`
        * id **required** `string`: id of the rule
        * mode **required** `string` (values: full-compliance, changes-only, reports-disabled)
  * result **required** `string` (values: success, error): Result of the request

### createNodes
Create a new node


```js
rudder_example_local.createNodes({}, context)
```

#### Input
* input `object`

#### Output
* output `object`
  * action **required** `string` (values: createNodes): The id of the action
  * data **required** `object`
    * created **required** `array`
      * items `string`: created nodes ID
    * failed **required** `array`
      * items `string`: failed nodes ID
  * result **required** `string` (values: success, error): Result of the request

### getAllCve
Get all CVE details


```js
rudder_example_local.getAllCve(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getAllCve): The id of the action
  * data **required** `object`
    * CVEs **required** `array`
      * items [cveDetails](#cvedetails)
  * result **required** `string` (values: success, error): Result of the request

### checkCVE
Trigger a CVE check


```js
rudder_example_local.checkCVE(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: checkCVE): The id of the action
  * data **required** `object`
    * cveChecks **required** `array`
      * items [cveCheck](#cvecheck)
  * result **required** `string` (values: success, error): Result of the request

### getCVECheckConfiguration
Get CVE check config


```js
rudder_example_local.getCVECheckConfiguration(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getCVECheckConfiguration): The id of the action
  * data **required** `object`
    * apiKey `string`: Token used by to contact the API to check CVE
    * url `string`: Url used to check CVE
  * result **required** `string` (values: success, error): Result of the request

### updateCVECheckConfiguration
Update cve check config


```js
rudder_example_local.updateCVECheckConfiguration({}, context)
```

#### Input
* input `object`
  * body `object`: CVE check config
    * apiKey `string`: Token used by to contact the API to check CVE
    * url `string`: Url used to check CVE

#### Output
* output `object`
  * action **required** `string` (values: updateCVECheckConfiguration): The id of the action
  * data **required** `object`
    * apiKey `string`: Token used by to contact the API to check CVE
    * url `string`: Url used to check CVE
  * result **required** `string` (values: success, error): Result of the request

### getLastCVECheck
Get last CVE check result


```js
rudder_example_local.getLastCVECheck(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getLastCVECheck): The id of the action
  * data **required** `object`
    * CVEChecks **required** `array`
      * items [cveCheck](#cvecheck)
  * result **required** `string` (values: success, error): Result of the request

### getCVEList
Get CVE details, from a list passed a paremeter


```js
rudder_example_local.getCVEList({}, context)
```

#### Input
* input `object`
  * body `object`: cveList
    * cveIds `array`
      * items `string`: CVE id

#### Output
* output `object`
  * action **required** `string` (values: getCVEList): The id of the action
  * data **required** `object`
    * CVEs **required** `array`
      * items [cveDetails](#cvedetails)
  * result **required** `string` (values: success, error): Result of the request

### updateCVE
Update CVE database from remote source


```js
rudder_example_local.updateCVE({}, context)
```

#### Input
* input `object`
  * body `object`: CVE update config
    * url `string`: Url used to update CVE, will default to one set in config
    * years `array`
      * items `string`: Year of the CVE archive to download

#### Output
* output `object`
  * action **required** `string` (values: updateCVE): The id of the action
  * data **required** `object`
    * CVEs **required** `integer`
  * result **required** `string` (values: success, error): Result of the request

### readCVEfromFS
Update CVE database from file system


```js
rudder_example_local.readCVEfromFS(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: readCVEfromFS): The id of the action
  * data **required** `object`
    * CVEs **required** `integer`
  * result **required** `string` (values: success, error): Result of the request

### getAllDataSources
Get the configuration of all present data sources


```js
rudder_example_local.getAllDataSources(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getAllDataSources): The id of the action
  * data **required** `object`
    * datasources **required** `array`
      * items [datasource](#datasource)
  * result **required** `string` (values: success, error): Result of the request

### createDataSource
Create a new data source


```js
rudder_example_local.createDataSource({}, context)
```

#### Input
* input `object`
  * body [datasource](#datasource)

#### Output
* output `object`
  * action **required** `string` (values: createDataSource): The id of the action
  * data **required** `object`: Information about the data sources
    * datasources **required** `array`
      * items [datasource](#datasource)
  * result **required** `string` (values: success, error): Result of the request

### ReloadAllDatasourcesAllNodes
Update properties from all data source on all nodes. The call is asynchronous.


```js
rudder_example_local.ReloadAllDatasourcesAllNodes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: ReloadAllDatasourcesAllNodes): The id of the action
  * data **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### ReloadOneDatasourceAllNodes
Update properties from all data source on all nodes. The call is asynchronous.


```js
rudder_example_local.ReloadOneDatasourceAllNodes({
  "datasourceId": ""
}, context)
```

#### Input
* input `object`
  * datasourceId **required** `string`: Id of the data source

#### Output
* output `object`
  * action **required** `string` (values: ReloadOneDatasourceAllNodes): The id of the action
  * data **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### deleteDataSource
Delete a data source configuration


```js
rudder_example_local.deleteDataSource({
  "datasourceId": ""
}, context)
```

#### Input
* input `object`
  * datasourceId **required** `string`: Id of the data source

#### Output
* output `object`
  * action **required** `string` (values: deleteDataSource): The id of the action
  * data **required** `object`
    * datasources **required** `array`
      * items [datasource](#datasource)
  * result **required** `string` (values: success, error): Result of the request

### getDataSource
Get the configuration of a data source


```js
rudder_example_local.getDataSource({
  "datasourceId": ""
}, context)
```

#### Input
* input `object`
  * datasourceId **required** `string`: Id of the data source

#### Output
* output `object`
  * action **required** `string` (values: getDataSource): The id of the action
  * data **required** `object`
    * datasources **required** `array`
      * items [datasource](#datasource)
  * result **required** `string` (values: success, error): Result of the request

### updateDataSource
Update the configuration of a data source


```js
rudder_example_local.updateDataSource({
  "datasourceId": ""
}, context)
```

#### Input
* input `object`
  * datasourceId **required** `string`: Id of the data source
  * body [datasource](#datasource)

#### Output
* output `object`
  * action **required** `string` (values: updateDataSource): The id of the action
  * data **required** `object`
    * datasources **required** `array`
      * items [datasource](#datasource)
  * result **required** `string` (values: success, error): Result of the request

### listDirectives
List all directives


```js
rudder_example_local.listDirectives(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: listDirectives): The id of the action
  * data **required** `object`
    * directives **required** `array`
      * items [directive](#directive)
  * result **required** `string` (values: success, error): Result of the request

### createDirective
Create a new directive from provided parameters. You can specify a source directive to clone it.


```js
rudder_example_local.createDirective({}, context)
```

#### Input
* input `object`
  * body [directive-new](#directive-new)

#### Output
* output `object`
  * action **required** `string` (values: createDirective): The id of the action
  * data **required** `object`
    * directives **required** `array`
      * items [directive](#directive)
  * result **required** `string` (values: success, error): Result of the request

### deleteDirective
Delete a directive


```js
rudder_example_local.deleteDirective({
  "directiveId": ""
}, context)
```

#### Input
* input `object`
  * directiveId **required** `string`: Id of the directive

#### Output
* output `object`
  * action **required** `string` (values: deleteDirective): The id of the action
  * data **required** `object`
    * directives **required** `array`
      * items [directive](#directive)
  * result **required** `string` (values: success, error): Result of the request

### directiveDetails
Get all information about a given directive


```js
rudder_example_local.directiveDetails({
  "directiveId": ""
}, context)
```

#### Input
* input `object`
  * directiveId **required** `string`: Id of the directive

#### Output
* output `object`
  * action **required** `string` (values: directiveDetails): The id of the action
  * data **required** `object`
    * directives **required** `array`
      * items [directive](#directive)
  * result **required** `string` (values: success, error): Result of the request

### updateDirective
Update directive information


```js
rudder_example_local.updateDirective({
  "directiveId": ""
}, context)
```

#### Input
* input `object`
  * directiveId **required** `string`: Id of the directive
  * displayName `string`: Human readable name of the directive
  * enabled `boolean`: Is the directive enabled
  * id `string`: Directive id
  * longDescription `string`: Description of the technique (rendered as markdown)
  * parameters `object`: Directive parameters (depends on the source technique)
  * policyMode `string` (values: enforce, audit): Policy mode of the directive
  * priority `integer`: Directive priority. `0` has highest priority.
  * shortDescription `string`: One line directive description
  * system `boolean`: If true it is an internal Rudder directive
  * tags `array`
  * techniqueName `string`: Directive id
  * techniqueVersion `string`: Directive id

#### Output
* output `object`
  * action **required** `string` (values: updateDirective): The id of the action
  * data **required** `object`
    * directives **required** `array`
      * items [directive](#directive)
  * result **required** `string` (values: success, error): Result of the request

### checkDirective
Check that update on a directive is valid


```js
rudder_example_local.checkDirective({
  "directiveId": ""
}, context)
```

#### Input
* input `object`
  * directiveId **required** `string`: Id of the directive
  * displayName `string`: Human readable name of the directive
  * enabled `boolean`: Is the directive enabled
  * id `string`: Directive id
  * longDescription `string`: Description of the technique (rendered as markdown)
  * parameters `object`: Directive parameters (depends on the source technique)
  * policyMode `string` (values: enforce, audit): Policy mode of the directive
  * priority `integer`: Directive priority. `0` has highest priority.
  * shortDescription `string`: One line directive description
  * system `boolean`: If true it is an internal Rudder directive
  * tags `array`
  * techniqueName `string`: Directive id
  * techniqueVersion `string`: Directive id

#### Output
* output `object`
  * action **required** `string` (values: checkDirective): The id of the action
  * data **required** `object`
    * directives **required** `array`
      * items [directive](#directive)
  * result **required** `string` (values: success, error): Result of the request

### listGroups
List all groups


```js
rudder_example_local.listGroups(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: listGroups): The id of the action
  * data **required** `object`
    * groups **required** `array`
      * items [group](#group)
  * result **required** `string` (values: success, error): Result of the request

### createGroup
Create a new group based in provided parameters


```js
rudder_example_local.createGroup({}, context)
```

#### Input
* input `object`
  * body [group](#group)

#### Output
* output `object`
  * action **required** `string` (values: createGroup): The id of the action
  * data **required** `object`
    * groups **required** `array`
      * items [group-new](#group-new)
  * result **required** `string` (values: success, error): Result of the request

### CreateGroupCategory
Create a new group category


```js
rudder_example_local.CreateGroupCategory({
  "name": "",
  "parent": ""
}, context)
```

#### Input
* input `object`
  * description `string`: Group category description
  * id `string`: Group category id, only provide it when needed.
  * name **required** `string`: Name of the group category
  * parent **required** `string`: The parent category of the groups

#### Output
* output `object`
  * action **required** `string` (values: CreateGroupCategory): The id of the action
  * data **required** `object`
    * groupCategories **required** `array`
      * items [group-category](#group-category)
  * result **required** `string` (values: success, error): Result of the request

### DeleteGroupCategory
Delete a group category. It must have no child groups and no children categories.


```js
rudder_example_local.DeleteGroupCategory({
  "groupCategoryId": ""
}, context)
```

#### Input
* input `object`
  * groupCategoryId **required** `string`: Group category id

#### Output
* output `object`
  * action **required** `string` (values: DeleteGroupCategory): The id of the action
  * data **required** `object`
    * groupCategories **required** `array`
      * items [group-category](#group-category)
  * result **required** `string` (values: success, error): Result of the request

### GetGroupCategoryDetails
Get detailed information about a group category


```js
rudder_example_local.GetGroupCategoryDetails({
  "groupCategoryId": ""
}, context)
```

#### Input
* input `object`
  * groupCategoryId **required** `string`: Group category id

#### Output
* output `object`
  * action **required** `string` (values: GetGroupCategoryDetails): The id of the action
  * data **required** `object`
    * groupCategories **required** `array`
      * items [group-category](#group-category)
  * result **required** `string` (values: success, error): Result of the request

### UpdateGroupCategory
Update detailed information about a group category


```js
rudder_example_local.UpdateGroupCategory({
  "groupCategoryId": "",
  "name": "",
  "parent": ""
}, context)
```

#### Input
* input `object`
  * groupCategoryId **required** `string`: Group category id
  * description `string`: Group category description
  * name **required** `string`: Name of the group category
  * parent **required** `string`: The parent category of the groups

#### Output
* output `object`
  * action **required** `string` (values: UpdateGroupCategory): The id of the action
  * data **required** `object`
    * groupCategories **required** `array`
      * items [group-category](#group-category)
  * result **required** `string` (values: success, error): Result of the request

### GetGroupTree
Get all available groups and their categories in a tree


```js
rudder_example_local.GetGroupTree(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: GetGroupTree): The id of the action
  * data **required** `object`
    * groupCategories **required** `object`: Group tree
  * result **required** `string` (values: success, error): Result of the request

### deleteGroup
Update detailed information about a group


```js
rudder_example_local.deleteGroup({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Id of the group

#### Output
* output `object`
  * action **required** `string` (values: deleteGroup): The id of the action
  * data **required** `object`
    * groups **required** `array`
      * items [group](#group)
  * result **required** `string` (values: success, error): Result of the request

### groupDetails
Get detailed information about a group


```js
rudder_example_local.groupDetails({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Id of the group

#### Output
* output `object`
  * action **required** `string` (values: groupDetails): The id of the action
  * data **required** `object`
    * groups **required** `array`
      * items [group](#group)
  * result **required** `string` (values: success, error): Result of the request

### updateGroup
Update detailed information about a group


```js
rudder_example_local.updateGroup({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Id of the group
  * category `string`: Id of the new group's category
  * description `string`: Group description
  * displayName `string`: Name of the group
  * dynamic `boolean`: Should the group be dynamically refreshed (if not, it is a static group)
  * enabled `boolean`: Enable or disable the group
  * query `object`: The criteria defining the group. If not provided, the group will be empty.

#### Output
* output `object`
  * action **required** `string` (values: updateGroup): The id of the action
  * data **required** `object`
    * groups **required** `array`
      * items [group](#group)
  * result **required** `string` (values: success, error): Result of the request

### reloadGroup
Recompute the content of a group


```js
rudder_example_local.reloadGroup({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Id of the group

#### Output
* output `object`
  * action **required** `string` (values: reloadGroup): The id of the action
  * data **required** `object`
    * groups **required** `array`
      * items [group](#group)
  * result **required** `string` (values: success, error): Result of the request

### queueInformation
Provide information about the current state of the inventory processor


```js
rudder_example_local.queueInformation(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: queueInformation): The id of the action
  * data **required** `object`: Information about the service
    * queueMaxSize **required** `integer`
    * queueSaturated **required** `boolean`: Is the inventory queue full
  * result **required** `string` (values: success, error): Result of the request

### uploadInventory
Upload an inventory to the web application


```js
rudder_example_local.uploadInventory({}, context)
```

#### Input
* input `object`
  * file `string`
  * signature `string`

#### Output
* output `object`
  * action **required** `string` (values: uploadInventory): The id of the action
  * data **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### fileWatcherRestart
Restart the inventory watcher if necessary


```js
rudder_example_local.fileWatcherRestart(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: fileWatcherRestart): The id of the action
  * data **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### fileWatcherStart
Start the inventory watcher if necessary


```js
rudder_example_local.fileWatcherStart(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: fileWatcherStart): The id of the action
  * data **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### fileWatcherStop
Stop the inventory watcher if necessary


```js
rudder_example_local.fileWatcherStop(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: fileWatcherStop): The id of the action
  * data **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### listAcceptedNodes
Get information about the nodes managed by the target server


```js
rudder_example_local.listAcceptedNodes({}, context)
```

#### Input
* input `object`
  * include `string`: Level of information to include from the node inventory. Some base levels are defined (**minimal**, **default**, **full**). You can add fields you want to a base level by adding them to the list, possible values are keys from json answer. If you don't provide a base level, they will be added to `default` level, so if you only want os details, use `minimal,os` as the value for this parameter.
  * composition `string` (values: and, or): Boolean operator to use between each  `where` criteria.
  * select `string`: What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.

#### Output
* output `object`
  * action **required** `string` (values: listAcceptedNodes): The id of the action
  * data **required** `object`: Information about the nodes
    * nodes **required** `array`
      * items [node-full](#node-full)
  * result **required** `string` (values: success, error): Result of the request

### applyPolicyAllNodes
This API allows to trigger an agent run on all nodes. Response contains a json stating if agent could be started on each node, but not if the run went fine and do not display any output from it. You can see the result of the run in Rudder web interface or in the each agent logs.


```js
rudder_example_local.applyPolicyAllNodes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: applyPolicyAllNodes): The id of the action
  * data **required** `array`
    * items `object`
      * hostname `string`: Node hostname
      * id `string`: Rudder id of the node
      * result `string`: Result or policy application trigger
  * result **required** `string` (values: success, error): Result of the request

### changePendingNodeStatus
Accept or refuse a pending node


```js
rudder_example_local.changePendingNodeStatus({
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * nodeId **required** `string`: Id of the target node
  * status `string` (values: accepted, refused): New status of the pending node

#### Output
* output `object`
  * action **required** `string` (values: changePendingNodeStatus): The id of the action
  * data **required** `object`: Information about the node
    * nodes **required** `array`
      * items [node-full](#node-full)
  * result **required** `string` (values: success, error): Result of the request

### deleteNode
Remove a node from the Rudder server. It won't be managed anymore.


```js
rudder_example_local.deleteNode({
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * nodeId **required** `string`: Id of the target node

#### Output
* output `object`
  * action **required** `string` (values: deleteNode): The id of the action
  * data **required** `object`: Information about the node
    * nodes **required** `array`
      * items [node-full](#node-full)
  * result **required** `string` (values: success, error): Result of the request

### nodeDetails
Get details about a given node


```js
rudder_example_local.nodeDetails({
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * nodeId **required** `string`: Id of the target node
  * include `string`: Level of information to include from the node inventory. Some base levels are defined (**minimal**, **default**, **full**). You can add fields you want to a base level by adding them to the list, possible values are keys from json answer. If you don't provide a base level, they will be added to `default` level, so if you only want os details, use `minimal,os` as the value for this parameter.

#### Output
* output `object`
  * action **required** `string` (values: nodeDetails): The id of the action
  * data **required** `object`: Information about the node
    * nodes **required** `array`
      * items [node-full](#node-full)
  * result **required** `string` (values: success, error): Result of the request

### updateNode
Update node settings and properties


```js
rudder_example_local.updateNode({
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * nodeId **required** `string`: Id of the target node
  * body [node-settings](#node-settings)

#### Output
* output `object`
  * action **required** `string` (values: updateNode): The id of the action
  * data **required** `object`: Information about the node
    * nodes **required** `array`
      * items [node-full](#node-full)
  * result **required** `string` (values: success, error): Result of the request

### applyNode
This API allows to trigger an agent run on the target node. Response is a stream of the actual agent run on the node.


```js
rudder_example_local.applyNode({
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * nodeId **required** `string`: Id of the target node

#### Output
* output `string`

### ReloadAllDatasourcesOneNode
Update properties from all data sources on one nodes. The call is asynchronous.


```js
rudder_example_local.ReloadAllDatasourcesOneNode({
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * nodeId **required** `string`: Id of the target node

#### Output
* output `object`
  * action **required** `string` (values: ReloadAllDatasourcesOneNode): The id of the action
  * data **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### ReloadOneDatasourceOneNode
Update properties from a data source on one nodes. The call is asynchronous.


```js
rudder_example_local.ReloadOneDatasourceOneNode({
  "nodeId": "",
  "datasourceId": ""
}, context)
```

#### Input
* input `object`
  * nodeId **required** `string`: Id of the target node
  * datasourceId **required** `string`: Id of the data source

#### Output
* output `object`
  * action **required** `string` (values: ReloadOneDatasourceOneNode): The id of the action
  * data **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### listParameters
Get the current value of all the global parameters


```js
rudder_example_local.listParameters(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: listParameters): The id of the action
  * data **required** `object`: Parameters
    * parameters **required** `array`
      * items [parameter](#parameter)
  * result **required** `string` (values: success, error): Result of the request

### createParameter
Create a new global parameter


```js
rudder_example_local.createParameter({
  "id": ""
}, context)
```

#### Input
* input `object`
  * description `string`: Description of the parameter
  * id **required** `string`: Name of the parameter
  * overridable `boolean`: Is the global parameter overridable by node

#### Output
* output `object`
  * action **required** `string` (values: createParameter): The id of the action
  * data **required** `object`: Parameters
    * parameters **required** `array`
      * items [parameter](#parameter)
  * id **required** `string`: Id of the parameter
  * result **required** `string` (values: success, error): Result of the request

### deleteParameter
Delete an existing parameter


```js
rudder_example_local.deleteParameter({
  "parameterId": ""
}, context)
```

#### Input
* input `object`
  * parameterId **required** `string`: Id of the parameter to manage

#### Output
* output `object`
  * action **required** `string` (values: deleteParameter): The id of the action
  * data **required** `object`: Parameters
    * parameters **required** `array`
      * items [parameter](#parameter)
  * id **required** `string`: Id of the parameter
  * result **required** `string` (values: success, error): Result of the request

### parameterDetails
Get the current value of a given parameter


```js
rudder_example_local.parameterDetails({
  "parameterId": ""
}, context)
```

#### Input
* input `object`
  * parameterId **required** `string`: Id of the parameter to manage

#### Output
* output `object`
  * action **required** `string` (values: parameterDetails): The id of the action
  * data **required** `object`: Parameters
    * parameters **required** `array`
      * items [parameter](#parameter)
  * id **required** `string`: Id of the parameter
  * result **required** `string` (values: success, error): Result of the request

### updateParameter
Update the properties of a parameter


```js
rudder_example_local.updateParameter({
  "parameterId": ""
}, context)
```

#### Input
* input `object`
  * parameterId **required** `string`: Id of the parameter to manage

#### Output
* output `object`
  * action **required** `string` (values: updateParameter): The id of the action
  * data **required** `object`: Parameters
    * parameters **required** `array`
      * items [parameter](#parameter)
  * id **required** `string`: Id of the parameter
  * result **required** `string` (values: success, error): Result of the request

### regeneratePolicies
Trigger a full policy generation


```js
rudder_example_local.regeneratePolicies(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: regeneratePolicies): The id of the action
  * data **required** `object`
    * policies **required** `string` (values: Started)
  * result **required** `string` (values: success, error): Result of the request

### reloadGroups
Reload dynamic groups


```js
rudder_example_local.reloadGroups(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: reloadGroups): The id of the action
  * data **required** `object`
    * groups **required** `string` (values: Started)
  * result **required** `string` (values: success, error): Result of the request

### reloadTechniques
Reload techniques from local technique library


```js
rudder_example_local.reloadTechniques(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: reloadTechniques): The id of the action
  * data **required** `object`
    * techniques **required** `string` (values: Started)
  * result **required** `string` (values: success, error): Result of the request

### listRules
List all rules


```js
rudder_example_local.listRules(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: listRules): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [rule](#rule)
  * result **required** `string` (values: success, error): Result of the request

### createRule
Create a new rule. You can specify a source rule to clone it.


```js
rudder_example_local.createRule({}, context)
```

#### Input
* input `object`
  * body [rule-new](#rule-new)

#### Output
* output `object`
  * action **required** `string` (values: createRule): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [rule](#rule)
  * result **required** `string` (values: success, error): Result of the request

### CreateRuleCategory
Create a new rule category


```js
rudder_example_local.CreateRuleCategory({
  "name": "",
  "parent": ""
}, context)
```

#### Input
* input `object`
  * description `string`: Rules category description
  * id `string`: Rule category id, only provide it when needed.
  * name **required** `string`: Name of the rule category
  * parent **required** `string`: The parent category of the rules

#### Output
* output `object`
  * action **required** `string` (values: CreateRuleCategory): The id of the action
  * data **required** `object`
    * ruleCategories **required** `array`
      * items [rule-category](#rule-category)
  * result **required** `string` (values: success, error): Result of the request

### DeleteRuleCategory
Delete a group category. It must have no child groups and no children categories.


```js
rudder_example_local.DeleteRuleCategory({
  "ruleCategoryId": ""
}, context)
```

#### Input
* input `object`
  * ruleCategoryId **required** `string`: Rule category id

#### Output
* output `object`
  * action **required** `string` (values: DeleteRuleCategory): The id of the action
  * data **required** `object`
    * groupCategories **required** `array`
      * items [rule-category](#rule-category)
  * result **required** `string` (values: success, error): Result of the request

### GetRuleCategoryDetails
Get detailed information about a rule category


```js
rudder_example_local.GetRuleCategoryDetails({
  "ruleCategoryId": ""
}, context)
```

#### Input
* input `object`
  * ruleCategoryId **required** `string`: Rule category id

#### Output
* output `object`
  * action **required** `string` (values: GetRuleCategoryDetails): The id of the action
  * data **required** `object`
    * rulesCategories **required** `array`
      * items [rule-category](#rule-category)
  * result **required** `string` (values: success, error): Result of the request

### UpdateRuleCategory
Update detailed information about a rule category


```js
rudder_example_local.UpdateRuleCategory({
  "ruleCategoryId": "",
  "name": "",
  "parent": ""
}, context)
```

#### Input
* input `object`
  * ruleCategoryId **required** `string`: Rule category id
  * description `string`: Rules category description
  * name **required** `string`: Name of the rule category
  * parent **required** `string`: The parent category of the rules

#### Output
* output `object`
  * action **required** `string` (values: UpdateRuleCategory): The id of the action
  * data **required** `object`
    * ruleCategories **required** `array`
      * items [rule-category](#rule-category)
  * result **required** `string` (values: success, error): Result of the request

### GetRuleTree
Get all available rules and their categories in a tree


```js
rudder_example_local.GetRuleTree(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: GetRuleTree): The id of the action
  * data **required** `object`
    * ruleCategories **required** `object`: Rule tree
  * result **required** `string` (values: success, error): Result of the request

### deleteRule
Delete a rule.


```js
rudder_example_local.deleteRule({
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * ruleId **required** `string`: Id of the target rule

#### Output
* output `object`
  * action **required** `string` (values: deleteRule): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [rule](#rule)
  * result **required** `string` (values: success, error): Result of the request

### ruleDetails
Get the details of a rule


```js
rudder_example_local.ruleDetails({
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * ruleId **required** `string`: Id of the target rule

#### Output
* output `object`
  * action **required** `string` (values: ruleDetails): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [rule](#rule)
  * result **required** `string` (values: success, error): Result of the request

### updateRule
Update the details of a rule


```js
rudder_example_local.updateRule({
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * ruleId **required** `string`: Id of the target rule
  * category `string`: The parent category id.
  * directives `array`: Directives linked to the rule
  * displayName `string`: Rule name
  * enabled `boolean`: Is the rule enabled
  * id `string`: Rule id
  * longDescription `string`: Rule documentation
  * shortDescription `string`: One line rule description
  * system `boolean`: If true it is an internal Rudder rule
  * tags `array`
  * targets `array`: Groups linked to the rule

#### Output
* output `object`
  * action **required** `string` (values: updateRule): The id of the action
  * data **required** `object`
    * rules **required** `array`
      * items [rule-with-category](#rule-with-category)
  * result **required** `string` (values: success, error): Result of the request

### promoteToRelay
Promote a node to relay


```js
rudder_example_local.promoteToRelay({
  "nodeId": ""
}, context)
```

#### Input
* input `object`
  * nodeId **required** `string`: Id of the target node

#### Output
* output `object`
  * action **required** `string` (values: promoteToRelay): The id of the action
  * data **required** `string`: Success or error message
  * result **required** `string` (values: success, error): Result of the request

### getAllSettings
Get the current value of all the settings


```js
rudder_example_local.getAllSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getAllSettings): The id of the action
  * data **required** `object`: Information about the setting
    * settings **required** `object`
      * allowed_networks `array`: List of allowed networks for each policy server (root and relays)
        * items `object`
          * allowed_networks `array`: List of allowed networks
          * id `string`: Rudder id of the policy server
      * change_message_prompt `string`: Explanation to display
      * display_recent_changes_graphs `boolean`: Display changes graphs
      * enable_change_message `boolean`: Enable change audit logs
      * enable_change_request `boolean`: Enable Change Requests
      * enable_javascript_directives `string`: Enable script evaluation in Directives
      * enable_self_deployment `boolean`: Allow self deployment
      * enable_self_validation `boolean`: Allow self validation
      * first_run_hour `integer`: First agent run time - hour
      * first_run_minute `integer`: First agent run time - minute
      * global_policy_mode `string` (values: enforce, audit): Define the default setting for global policy mode
      * global_policy_mode_overridable `boolean`: Allow overrides on this default setting
      * heartbeat_frequency `integer`: Send heartbeat every heartbeat_frequency runs (only on **changes-only** compliance mode)
      * log_all_reports `boolean`: Log all reports received to `/var/log/rudder/reports/all.log`
      * mandatory_change_message `boolean`: Make message mandatory
      * modified_file_ttl `integer`: Number of days to retain modified files
      * node_accept_duplicated_hostname `boolean`: Allow acceptation of a pending node when another one with the same hostname is already accepted
      * node_onaccept_default_policyMode `string` (values: default, enforce, audit): Default policy mode for accepted node
      * node_onaccept_default_state `string` (values: enabled, ignored, empty-policies, initializing, preparing-eol): Set default state for node when they are accepted within Rudder
      * output_file_ttl `integer`: Number of days to retain agent output files
      * relay_server_synchronization_method `string` (values: classic, rsync, disabled): Method used to synchronize data between server and relays, either "classic" (agent protocol, default), "rsync" (use rsync to synchronize, that you'll need to be manually set up), or "disabled" (use third party system to transmit data)
      * relay_server_synchronize_policies `boolean`: If **rsync** is set as a synchronization method, use rsync to synchronize policies between Rudder server and relays. If false, you'll have to synchronize policies yourself.
      * relay_server_synchronize_shared_files `boolean`: If **rsync** is set as a synchronization method, use rsync to synchronize shared files between Rudder server and relays. If false, you'll have to synchronize shared files yourself.
      * reporting_mode `string` (values: full-compliance, changes-only, reports-disabled): Compliance reporting mode
      * require_time_synchronization `boolean`: Require time synchronization between nodes and policy server
      * rsyslog_reporting_protocol `string` (values: TCP, UDP): Protocol used for syslog communication between node and server
      * rudder_compute_changes `boolean`: Compute list of changes (repaired reports) per rule
      * rudder_generation_compute_dyngroups `boolean`: Recompute all dynamic groups at the start of policy generation
      * rudder_generation_continue_on_error `boolean`: Policy generation continues on error during NodeConfiguration evaluation
      * rudder_generation_js_timeout `integer`: Policy generation JS evaluation of directive parameter timeout in seconds
      * rudder_generation_max_parallelism `string`: Set the policy generation parallelism, either as an number of thread (i.e. 4), or a multiplicative of the number of core (x0.5)
      * rudder_report_protocol_default `string` (values: HTTPS, SYSLOG): Default reporting protocol used
      * rudder_save_db_compliance_details `boolean`: Store all compliance details in database
      * rudder_save_db_compliance_levels `boolean`: Store all compliance levels in database
      * run_frequency `integer`: Agent run schedule - time between agent runs (in minutes)
      * send_metrics `string`: Send anonymous usage statistics
      * splay_time `integer`: Maximum delay after scheduled run time (random interval)
      * syslog_protocol_disabled `boolean`: Completely disable syslog protocol
      * unexpected_allows_duplicate `boolean`: Ignore duplicated compliance reports
      * unexpected_unbound_var_values `boolean`: Allows multiple reports for configuration based on a multivalued variable
  * result **required** `string` (values: success, error): Result of the request

### getSetting
Get the current value of a specific setting


```js
rudder_example_local.getSetting({
  "settingId": ""
}, context)
```

#### Input
* input `object`
  * settingId **required** `string`: Id of the setting to set

#### Output
* output `object`
  * action **required** `string` (values: getSetting): The id of the action
  * data **required** `object`: Information about the setting
    * settingId `string`: Id and value of the property
  * id **required** `string`: Id of the setting
  * result **required** `string` (values: success, error): Result of the request

### modifySetting
Set the current value of a specific setting


```js
rudder_example_local.modifySetting({
  "settingId": ""
}, context)
```

#### Input
* input `object`
  * settingId **required** `string`: Id of the setting to set
  * value `string`: New value of the setting

#### Output
* output `object`
  * action **required** `string` (values: modifySetting): The id of the action
  * data **required** `object`: Information about the setting
    * settingId `string`: Id and value of the property
  * id **required** `string`: Id of the setting
  * result **required** `string` (values: success, error): Result of the request

### listArchives
List configuration archives


```js
rudder_example_local.listArchives({
  "archiveKind": ""
}, context)
```

#### Input
* input `object`
  * archiveKind **required** `string` (values: full, groups, rules, directives, parameters): Type of archive to make

#### Output
* output `object`
  * action **required** `string` (values: archiveFull, archiveGroups, archiveRules, archiveDirectives, archiveParameters): The kind of the archive
  * data **required** `object`
    * full **required** `array`
      * items `object`
        * commiter **required** `string`
        * gitCommit **required** `string`
        * id **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### createArchive
Create new archive of the given kind


```js
rudder_example_local.createArchive({
  "archiveKind": ""
}, context)
```

#### Input
* input `object`
  * archiveKind **required** `string` (values: full, groups, rules, directives, parameters): Type of archive to make

#### Output
* output `object`
  * action **required** `string` (values: archiveFull, archiveGroups, archiveRules, archiveDirectives, archiveParameters): The kind of the archive
  * data **required** `object`
    * full **required** `object`
      * commiter **required** `string`
      * gitCommit **required** `string`
      * id **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### restoreArchive
Restore an archive of the given kind for the given moment


```js
rudder_example_local.restoreArchive({
  "archiveKind": "",
  "archiveRestoreKind": ""
}, context)
```

#### Input
* input `object`
  * archiveKind **required** `string` (values: full, groups, rules, directives, parameters): Type of archive to make
  * archiveRestoreKind **required** `string` (values: latestArchive, latestCommit, archive ID): What archive to restore (latest archive, latest commit in configuration repository, or archive with ID as given by listArchive)

#### Output
* output `object`
  * action **required** `string` (values: restoreFullLatestArchive, restoreGroupLatestArchive, restoreRulesLatestArchive, restoreDirectivesLatestArchive, restoreParametersLatestArchive, restoreFullLatestCommit, restoreGroupLatestCommit, restoreRulesLatestCommit, restoreDirectivesLatestCommit, restoreParametersLatestCommit, archiveFullDateRestore, archiveGroupDateRestore, archiveRulesDateRestore, archiveDirectivesDateRestore, archiveParametersDateRestore): The kind of the archive
  * data **required** `object`
    * parameters `string`
    * directive `string`
    * full `string`
    * groups `string`
    * rules `string`
  * result **required** `string` (values: success, error): Result of the request

### getZipArchive
Get an archive of the given kind as a zip


```js
rudder_example_local.getZipArchive({
  "archiveKind": "",
  "commitId": ""
}, context)
```

#### Input
* input `object`
  * archiveKind **required** `string` (values: full, groups, rules, directives, parameters): Type of archive to make
  * commitId **required** `string`: commit ID of the archive to get as a ZIP file

#### Output
* output `string`

### getSystemInfo
Get information about the server version


```js
rudder_example_local.getSystemInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getSystemInfo): The id of the action
  * data **required** `object`: Information about the service
    * rudder **required** `object`
      * build-time **required** `string`
      * full-version **required** `string`
      * major-version **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### reloadAll
Reload both techniques and dynamic groups


```js
rudder_example_local.reloadAll(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: reloadAll): The id of the action
  * data **required** `object`
    * groups **required** `string` (values: Started)
    * techniques **required** `string` (values: Started)
  * result **required** `string` (values: success, error): Result of the request

### getStatus
Get information about current server status


```js
rudder_example_local.getStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getStatus): The id of the action
  * data **required** `object`: Status of the service
    * global `string` (values: OK)
  * result **required** `string` (values: success, error): Result of the request

### updatePolicies
Update configuration policies if needed


```js
rudder_example_local.updatePolicies(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: updatePolicies): The id of the action
  * data **required** `object`
    * policies **required** `string` (values: Started)
  * result **required** `string` (values: success, error): Result of the request

### listTechniques
List all technique with their versions


```js
rudder_example_local.listTechniques(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: listTechniques): The id of the action
  * data **required** `object`
    * techniques **required** [techniques](#techniques)
  * result **required** `string` (values: success, error): Result of the request

### listTechniquesDirectives
List all directives based on all version of a technique


```js
rudder_example_local.listTechniquesDirectives({
  "techniqueName": ""
}, context)
```

#### Input
* input `object`
  * techniqueName **required** `string`: Technique name

#### Output
* output `object`
  * action **required** `string` (values: listTechniquesDirectives): The id of the action
  * data **required** `object`
    * directives **required** `array`
      * items [directive](#directive)
  * result **required** `string` (values: success, error): Result of the request

### listTechniqueVersionDirectives
List all directives based on a version of a technique


```js
rudder_example_local.listTechniqueVersionDirectives({
  "techniqueName": "",
  "techniqueVersion": ""
}, context)
```

#### Input
* input `object`
  * techniqueName **required** `string`: Technique name
  * techniqueVersion **required** `string`: Technique version

#### Output
* output `object`
  * action **required** `string` (values: listTechniqueDirectives): The id of the action
  * data **required** `object`
    * directives **required** `array`
      * items [directive](#directive)
  * result **required** `string` (values: success, error): Result of the request

### addUser
Add a new user


```js
rudder_example_local.addUser({}, context)
```

#### Input
* input `object`
  * isPreHahed `boolean` (values: false, true): If you want to provide hashed password set this propertie to `true` otherwise we will hash the plain password and store the hash
  * password `string`: this password will be hashed for you if the `isPreHashed` is set on false
  * role `array`: Defined user's permissions
  * username `string`

#### Output
* output `object`
  * action **required** `string` (values: addUser): The id of the action
  * data **required** `object`
    * addedUser **required** `object`
      * password `string`: this password will be hashed for you if the `isPreHashed` is set on false
      * role `array`: defined user's permissions
        * items `string`
      * username `string`
  * result **required** `string` (values: success, error): Result of the request

### getRole
Get all available roles and their rights


```js
rudder_example_local.getRole(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getRole): The id of the action
  * data **required** `array`
    * items `object`
      * id **required** `string` (values: inventory, compliance, administrator, etc): Name of the role
      * rights **required** `array`: Role's rights
        * items `string` (values: node_read, userAccount_all)
  * result **required** `string` (values: success, error): Result of the request

### updateUser
Rename, change password (pre-hashed or not) and change permission of an user. If a parameter is empty, it will be ignored.


```js
rudder_example_local.updateUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Username of an user (unique)
  * isPreHahed `boolean` (values: false, true): If you want to provide hashed password set this propertie to `true` otherwise we will hash the plain password and store the hash
  * password `string`: this password will be hashed for you if the `isPreHashed` is set on false
  * role `array`: Defined user's permissions
  * username_formData `string`

#### Output
* output `object`
  * action **required** `string` (values: updateUser): The id of the action
  * data **required** `object`
    * updatedUser **required** `object`
      * password **required** `string`: New password given
      * role **required** `array`: defined user's permissions
        * items `string`
      * username **required** `string`: New Username
  * result **required** `string` (values: success, error): Result of the request

### getUserInfo
Get the list of all present users and their permissions


```js
rudder_example_local.getUserInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: getUserInfo): The id of the action
  * data **required** `object`
    * digest **required** `string` (values: BCRYPT, SHA512, SHA256, SHA1, MD5)
    * users **required** `array`
      * items [users](#users)
  * result **required** `string` (values: success, error): Result of the request

### reloadUserConf
Reload the users from the file system, in the configuration file


```js
rudder_example_local.reloadUserConf(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: reloadUserConf): The id of the action
  * data **required** `object`
    * reload **required** `object`
      * status **required** `string`
  * result **required** `string` (values: success, error): Result of the request

### deleteUser
Delete the user and his permissions


```js
rudder_example_local.deleteUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Username of an user (unique)

#### Output
* output `object`
  * action **required** `string` (values: deleteUser): The id of the action
  * data **required** `object`
    * deletedUser **required** `object`
      * username **required** `string`: Username of the deleted user
  * result **required** `string` (values: success, error): Result of the request

### listUsers
List all validated and unvalidated users


```js
rudder_example_local.listUsers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * action **required** `string` (values: listUsers): The id of the action
  * data **required** `array`
    * items [validated-user](#validated-user)
  * result **required** `string` (values: success, error): Result of the request

### saveWorkflowUser
Add and remove user from validated users


```js
rudder_example_local.saveWorkflowUser({
  "validatedUsers": []
}, context)
```

#### Input
* input `object`
  * validatedUsers **required** `array`: list of user to put in validated list

#### Output
* output `object`
  * action **required** `string` (values: addUser): The id of the action
  * data **required** [validated-user](#validated-user)
  * result **required** `string` (values: success, error): Result of the request

### removeValidatedUser
The user is again subject to workflow validation


```js
rudder_example_local.removeValidatedUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Username of an user (unique)

#### Output
* output `object`
  * action **required** `string` (values: listUsers): The id of the action
  * data **required** `string`: the user removed from validated list
  * result **required** `string` (values: success, error): Result of the request



## Definitions

### agent-key
* agent-key `object`: Information about agent key or certificate
  * status `string` (values: certified, undefined): Certification status of the security token (reset to `undefined` to trust a new certificate). If "certified", inventory signature check will be enforced
  * value **required** `string`: Certificate (or public key for <6.0 agents) used by the agent. Be careful write a "\n" after header line and before footer line, JSON does not keep formating in string.

### branding-conf
* branding-conf `object`
  * barColor **required** [color](#color)
  * displayBar **required** `boolean`: Whether header bar is displayed or not
  * displayBarLogin **required** `boolean`: Whether header bar is displayed in loggin page or not
  * displayLabel **required** `boolean`: Whether header bar's label is displayed or not
  * displayMotd **required** `boolean`: Whether the message of the day is displayed in loggin page or not
  * labelColor **required** [color](#color)
  * labelText **required** `string`: The header bar's label title
  * motd **required** `string`: Message of the day in loggin page
  * smallLogo **required** [logo](#logo)
  * wideLogo **required** [logo](#logo)

### change-request
* change-request `object`: Content of the change request
  * acceptable `boolean`
  * changes `object`
    * rules `array`
      * items `object`
        * action `string`
  * created by `string`
  * description `string`
  * id `integer`
  * name `string`
  * status `string` (values: Deployed, Pending deployment, Cancelled, Pending validation, Open)

### color
* color `object`
  * alpha **required** `number`: percentage of opacity
  * blue **required** `number`: percentage of blue component
  * green **required** `number`: percentage of green component
  * red **required** `number`: percentage of red component

### cveCheck
* cveCheck `object`
  * cveId `string`: CVE id
  * nodes `array`: Id of Nodes affected by this CVE
    * items `string`: Node id
  * packages `array`: packages affected by this CVE
    * items `object`: Packages affected by this CVE
      * name `string`: Name of the package affected
      * version `string`: Version of the package affected

### cveDetails
* cveDetails `object`
  * cvssv2 `object`: CVSS V2 of the CVE
    * baseScore `integer`: CVSS V2 base score
    * vector `string`: CVSS V2 vector
  * cvssv3 `object`: CVSS V3 of the CVE
    * baseScore `number`: CVSS V3 base score
    * baseSeverity `string` (values: critical, high, medium, low, none): CVSS V3 Severity
    * vector `string`: CVSS V3 vector
  * cweIds `array`: List of CWE (Common Weakness Enumeration) of the CVE
    * items `string`: id of a CWE
  * description `string`: CVE Description
  * id `string`: CVE id
  * lastModifiedDate `string`: last Date the CVE was modified
  * publishedDate `string`: Date the CVE was published

### datasource
* datasource `object`
  * description `string`: Description of the goal of the data source to create.
  * enabled `boolean`: Enable or disable data source.
  * id `string`: Unique identifier of the data source to create.
  * name `string`: The human readable name of the data source to create.
  * runParameters `object`: Parameters to configure when the data source is fetched to update node properties.
    * onGeneration `boolean`: Trigger a fetch at the beginning of a policy generation
    * onNewNode `boolean`: Trigger a fetch when a new node is accepted, for that node
    * schedule `object`: Configure if data source should be fetch periodically
      * type `string` (values: scheduled, notscheduled): `scheduled` enables periodic update, `notscheduled` disables them
  * type `object`: Define and configure data source type.
    * parameters `object`: You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)
      * checkSsl `boolean`: Check SSL certificate validity for https. Must be set to false for self-signed certificate
      * headers `array`: Represent HTTP headers for the query. Rudder expansion available.
        * items `object`
          * name `string`: Name of the header
          * value `string`: Value of the header
      * path `string`: JSON path (as defined in [the specification](https://github.com/jayway/JsonPath/), without the leading `$.`) to find the interesting sub-json or string/number/boolean value in the answer. Let empty to use the whole answer as value.
      * requestMethod `string` (values: GET, POST): HTTP method to use to contact the URL.
      * requestMode `object`: Configure the strategy used to query the HTTP data source.
        * name `string` (values: byNode): Node by node strategy
      * requestTimeout `integer`: Timeout in seconds for each HTTP request
      * url `string`: URL to contact. Rudder expansion available.
    * name `string` (values: HTTP): Data source type name
  * updateTimeout `integer`: Duration in seconds before aborting data source update. The main goal is to prevent never ending requests. If a periodicity if configured, you should set that timeout at a lower value.

### directive
* directive `object`
  * parameters `object`: Directive parameters (depends on the source technique)
  * tags `array`
    * items `object`
      * name `string`: Value of the `name` key
  * displayName `string`: Human readable name of the directive
  * enabled `boolean`: Is the directive enabled
  * id `string`: Directive id
  * longDescription `string`: Description of the technique (rendered as markdown)
  * policyMode `string` (values: enforce, audit): Policy mode of the directive
  * priority `integer`: Directive priority. `0` has highest priority.
  * shortDescription `string`: One line directive description
  * system `boolean`: If true it is an internal Rudder directive
  * techniqueName `string`: Directive id
  * techniqueVersion `string`: Directive id

### directive-new
* directive-new `object`
  * parameters `object`: Directive parameters (depends on the source technique)
  * tags `array`
    * items `object`
      * name `string`: Value of the `name` key
  * displayName `string`: Human readable name of the directive
  * enabled `boolean`: Is the directive enabled
  * id `string`: Directive id
  * longDescription `string`: Description of the technique (rendered as markdown)
  * priority `integer`: Directive priority. `0` has highest priority.
  * shortDescription `string`: One line directive description
  * source `string`: The id of the directive the clone will be based onto. If this parameter if provided,  the new directive will be a clone of this source. Other value will override values from the source.
  * system `boolean`: If true it is an internal Rudder directive
  * techniqueName `string`: Directive id
  * techniqueVersion `string`: Directive id

### group
* group `object`
  * description `string`: Group description
  * displayName `string`: Name of the group
  * dynamic `boolean`: Should the group be dynamically refreshed (if not, it is a static group)
  * enabled `boolean`: Enable or disable the group
  * groupClass `array`
    * items `string`: Conditions defined on nodes in the groups. There is one based on the group id, and one based on the group name.
  * id `string`: Group id
  * nodeIds `array`: List of nodes in the group
    * items `string`: Node in the group
  * properties `array`: Group properties
    * items `object`
      * name **required** `string`: Property name
  * query `object`: The criteria defining the group
    * composition `string` (values: and, or): Boolean operator to use between each  `where` criteria.
    * select `string`: What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.
    * where `array`: List of criteria
      * items `object`
        * attribute `string`: Attribute to compare
        * comparator `string`: Comparator to use
        * objectType `string`: Type of the object
        * value `string`: Value to compare against

### group-category
* group-category `object`
  * description `string`: Group category description
  * id `string`: Group category id, only provide it when needed.
  * name **required** `string`: Name of the group category
  * parent **required** `string`: The parent category of the groups

### group-category-update
* group-category-update `object`
  * description `string`: Group category description
  * name **required** `string`: Name of the group category
  * parent **required** `string`: The parent category of the groups

### group-new
* group-new `object`
  * category **required** `string`: Id of the new group's category
  * description `string`: Group description
  * displayName **required** `string`: Name of the group
  * dynamic `boolean`: Should the group be dynamically refreshed (if not, it is a static group)
  * enabled `boolean`: Enable or disable the group
  * id `string`: Group id, only provide it when needed.
  * properties `array`: Group properties
    * items `object`
      * name **required** `string`: Property name
  * query `object`: The criteria defining the group. If not provided, the group will be empty.
    * composition `string` (values: and, or): Boolean operator to use between each  `where` criteria.
    * select `string`: What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.
    * where `array`: List of criteria
      * items `object`
        * attribute `string`: Attribute to compare
        * comparator `string`: Comparator to use
        * objectType `string`: Type of the object
        * value `string`: Value to compare against
  * source `string`: The id of the group the clone will be based onto. If this parameter if provided,  the new group will be a clone of this source. Other value will override values from the source.

### group-update
* group-update `object`
  * category `string`: Id of the new group's category
  * description `string`: Group description
  * displayName `string`: Name of the group
  * dynamic `boolean`: Should the group be dynamically refreshed (if not, it is a static group)
  * enabled `boolean`: Enable or disable the group
  * query `object`: The criteria defining the group. If not provided, the group will be empty.
    * composition `string` (values: and, or): Boolean operator to use between each  `where` criteria.
    * select `string`: What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.
    * where `array`: List of criteria
      * items `object`
        * attribute `string`: Attribute to compare
        * comparator `string`: Comparator to use
        * objectType `string`: Type of the object
        * value `string`: Value to compare against

### logo
* logo `object`
  * enable **required** `boolean`: Whether the wide logo is displayed or not

### node-add
* node-add `array`
  * items `object`
    * agentKey [agent-key](#agent-key)
    * hostname **required** `string`: The fully qualified name of the node
    * id **required** `string`: The Rudder node unique identifier in /opt/rudder/etc/uuid.hive
    * ipAddresses **required** `array`: an array of IPs.
      * items `string`
    * machineType **required** `string` (values: vmware, physical, vm, solariszone, qemu, xen, aixlpar, hyperv, bsdjail): The kind of machine for the node (use vm for a generic VM)
    * os **required** [os](#os)
    * policyMode `string` (values: enforce, audit): The policy mode for the node. Can only be specified when status=accepted. If not specified, the default (global) mode will be used
    * policyServerId `string`: The policy server ID for that node. By default, "root"
    * properties **required** `object`: Node properties in "key":"value" format, where "key" is a string, and "value" is either a string, a json array, or a json object.
      * tags `array`
        * items `string` (values: some, tags)
      * env `string`
      * vars `object`
        * var1 `string`
        * vars2 `string`
    * state `string` (values: enable, ignored, empty-policies, initializing, preparing-eol): Node lifecycle state. Can only be specified when status=accepted. If not specified, enable is used
    * status **required** `string` (values: accepted, pending): Target status of the node
    * timezone [timezone](#timezone)

### node-full
* node-full `object`
  * accounts `array`: User accounts declared in the node
    * items `string`: User present on the system
  * architectureDescription `string`: Information about CPU architecture (32/64 bits)
  * bios `object`: BIOS information
    * description `string`: System provided description of the BIOS (long name)
    * editor `string`: BIOS editor
    * name `string`: BIOS name
    * quantity `integer`: Number of BIOS on the machine
    * releaseDate `string`: Release date of the BIOS
    * version `string`: BIOS version
  * controllers `array`: Physical controller information
    * items `object`
      * description `string`: System provided description of the controller
      * manufacturer `string`: Controller manufacturer
      * name `string`: Controller name
      * quantity `integer`: Quantity of that controller
      * type `string`: Controller type
  * description `string`: A human intended description of the node (not used)
  * environmentVariables `array`: Environment variables defined on the node in the context of the agent
    * items `object`
      * name `string`: Environment variable name
      * value `string`: Environment variable value
  * fileSystems `array`: File system declared on the node
    * items `object`
      * description `string`: Description of the file system
      * fileCount `integer`: Number of files
      * freeSpace `integer`: Free space remaining
      * mountPoint `string`: Mount point
      * name `string`: Type of file system (`ext4`, `swap`, etc.)
      * totalSpace `integer`: Total space
  * hostname **required** `string`: Fully qualified name of the node
  * id **required** `string`: Unique id of the node
  * ipAddresses **required** `array`: IP addresses of the node (IPv4 and IPv6)
    * items `string`: IP of the node
  * lastInventoryDate `string`: Date and time of the latest generated inventory, if one is available (node time). Up to API v11, format was: "YYYY-MM-dd HH:mm"
  * lastRunDate `string`: Date and time of the latest run, if one is available (node time). Up to API v11, format was: "YYYY-MM-dd HH:mm"
  * machine `object`: Information about the underlying machine
    * id `string`: Rudder unique identifier for the machine
    * manufacturer `string`: Information about machine manufacturer
    * provider `string`: In the case of VM, the VM technology
    * serialNumber `string`: If available, a unique identifier provided by the machine
    * type `string` (values: Physical, Virtual): Type of the machine
  * managementTechnology **required** `array`: Management agents running on the node
    * items `object`
      * capabilities `array`: List of agent capabilities
        * items `string`: Special capacities of the agent, like parsing xml or yaml, support of advanced acl, etc.
      * name **required** `string`: Agent name
      * nodeKind `string`: kind of node for the management engine, like `root`, `relay`, `node`, `root-component`
      * rootComponents `array`: Roles fullfilled by the agent
        * items `string`: A role that node fulfills in management technology
      * version `string`: Agent version
  * managementTechnologyDetails `object`: Additional information about management technology
    * cfengineKeys `array`: Certificates used by the agent
      * items `string`: Certificate (or public key for <6.0 agents) used by the agent
    * cfengineUser `string`: Local user account used by the agent
  * memories `array`: Memory slots
    * items `object`: Memory slots
      * capacity `integer`: Size of modules
      * caption `string`: Manufacturer provided information about the module
      * description `string`: System provided description
      * name `string`: Name of the memory slot or memory module
      * quantity `string`: Number of modules in that slot
      * serialNumber `string`: Serial number of the module
      * slotNumber `integer`: Slot number
      * speed `integer`: Memory speed (frequency)
      * type `string`: Memory slot type
  * networkInterfaces `array`: Detailed information about registered network interfaces on the node
    * items `object`
      * dhcpServer `string`: DHCP server managing that network interface
      * ipAddresses `array`: IP addresses of the network interface
        * items `string`: IP address
      * macAddress `string`: MAC address of the network interface
      * mask `array`
        * items `string`: Network interface mask
      * name `string`: Interface name (for ex "eth0")
      * speed `string`: Information about synchronization speed
      * status `string`: network interface status (enabled or not, up or down)
      * type `string`: Information about the type of network interface
  * os `object`: Information about the operating system
    * fullName **required** `string`: Full operating system name
    * kernelVersion **required** `string`: Version of the OS kernel
    * name **required** `string`: Operating system name (distribution on Linux, etc.)
    * servicePack `string`: If relevant, the service pack of the OS
    * type **required** `string` (values: Windows, Linux, AIX, FreeBSD): Family of the OS
    * version **required** `string`: OS version
  * policyMode `string` (values: enforce, audit, default): Rudder policy mode for the node (`default` follows the global configuration)
  * policyServerId **required** `string`: Rudder policy server managing the node
  * ports `array`: Physical port information objects
    * items `object`
      * description `string`: System provided description of the port
      * name `string`: Port name
      * quantity `integer`: Quantity of similar ports
      * type `string`: Port type
  * processes `array`: Process running (at inventory time)
    * items `object`: Process information
      * cpuUsage `integer`: CPU used by the process (at inventory time)
      * description `string`: System provided description about the process
      * memory `number`: Memory allocated to the process (at inventory time)
      * name `string`: Process name
      * pid `integer`: PID of the process
      * started `string`: Started date and time of the process
      * tty `string`: TTY to which the process is
      * user `string`: User account who started the process
      * virtualMemory `integer`: Virtual memory allocated to the process (at inventory time)
  * processors `array`: CPU information
    * items `object`
      * arch `string`: CPU architecture
      * core `integer`: Number of core for that CPU
      * cpuid `string`: Identifier of the CPU
      * description `string`: System provided description of the CPU
      * externalClock `string`: External clock used by the CPU
      * familyName `string`: CPU family
      * manufacturer `string`: CPU manufacturer
      * model `integer`: CPU model
      * name `string`: CPU name
      * quantity `integer`: Number of CPU with these features
      * speed `integer`: Speed (frequency) of the CPU
      * stepping `integer`: Stepping or power management information
      * thread `integer`: Number of thread by core for the CPU
  * properties **required** `array`: Node properties (either set by user or filled by third party sources)
    * items `object`
      * name **required** `string`: Property name
  * ram `integer`: Size of RAM in MB
  * slots `array`: Physical extension slot information
    * items `object`
      * description `string`: System provided description of the slots
      * name `string`: Slot name or identifier
      * quantity `integer`: Quantity of similar slots
      * status `string`: Slot status (used, powered, etc)
  * software `array`: Software installed on the node (can have thousands items)
    * items `object`
      * description `string`: A description of the software
      * editor `string`: Editor of the software
      * license `object`: Information about the license
        * description `string`: License description
        * expirationDate `string`: License expiration date
        * name `string`: License name
        * oem `string`: Is this an OEM license (and information)
        * productId `string`: License product identifier
        * productKey `string`: License key
      * name `string`: Name of the software (as reported by the node)
      * releaseDate `string`: Release date of the software
      * version `string`: Version of the software
  * sound `array`: Sound card information
    * items `object`
      * description `string`: System provided description of the sound card
      * name `string`: Sound card name
      * quantity `integer`: Quantity of similar sound cards
  * status **required** `string` (values: pending, accepted, deleted): Status of the node
  * storage `array`: Storage (disks) information objects
    * items `object`
      * description `string`: System provided information about the storage
      * firmware `string`: Storage firmware information
      * manufacturer `string`: Storage manufacturer
      * model `string`: Storage model
      * name `string`: Storage name
      * quantity `integer`: Quantity of similar storage
      * serialNumber `string`: Storage serial number
      * size `integer`: Storage size in MB
      * type `string`: Storage type
  * timezone `object`
    * name **required** `string`: Timezone name
    * offset `string`: Timezone offset to UTC
  * videos `array`: Video card information
    * items `object`
      * chipset `string`: information about video card chipset
      * description `string`: System provided description for that video card
      * memory `string`: Quantity of memory for that video card
      * name `string`: Video card name
      * quantity `integer`: Quantity of similar video cards
      * resolution `string`: Resolution used by that video card at inventory time
  * virtualMachines `array`: Hosted virtual machine information
    * items `object`
      * description `string`: System provided description of the hosted virtual machine
      * memory `string`: Memory allocated to the hosted virtual machine
      * name `string`: Name of the hosted virtual machine
      * owner `string`: Owner of the hosted virtual machine
      * status `string`: Status (up, starting, etc) of the hosted virtual machine
      * subsystem `string`: Technology of the hosted virtual machine
      * type `string`: Type of the hosted virtual machine
      * uuid `string`: Unique identifier of the hosted virtual machine
      * vcpu `string`: Number of virtual CPU allocated to the hosted virtual machine

### node-settings
* node-settings `object`
  * agentKey [agent-key](#agent-key)
  * policyMode `string` (values: audit, enforce, default): In which mode the node will apply its configuration policy. Use `default` to use the global mode.
  * properties `array`
    * items `object`
      * name **required** `string`: Property name
  * state `string` (values: enabled, ignored, empty-policies, initializing, preparing-eol): The node life cycle state. See [dedicated doc](https://docs.rudder.io/reference/current/usage/advanced_node_management.html#node-lifecycle) for more information.

### os
* os `object`
  * fullName **required** `string`: The long description name of the os
  * name **required** `string` (values: debian, ubuntu, redhat, centos, fedora, suse, oracle, scientific, slackware, xp, vista, seven, 10, 2000, 2003, 2008 r2, 2012, 2012 r2, 2016): For Linux, a distribution, for Windows, the commercial name
  * servicePack `string`: a service pack informationnal string
  * type **required** `string` (values: linux, windows, solaris, aix, freebsd, unknown)
  * version **required** `string`: A string representation of the version

### parameter
* parameter `object`
  * description `string`: Description of the parameter
  * id **required** `string`: Name of the parameter
  * overridable `boolean`: Is the global parameter overridable by node

### rule
* rule `object`
  * tags `array`
    * items `object`
      * name `string`: Value of the `name` key
  * directives `array`: Directives linked to the rule
    * items `string`: Directive id
  * displayName `string`: Rule name
  * enabled `boolean`: Is the rule enabled
  * id `string`: Rule id
  * longDescription `string`: Rule documentation
  * shortDescription `string`: One line rule description
  * system `boolean`: If true it is an internal Rudder rule
  * targets `array`: Groups linked to the rule
    * items `string`: Group id

### rule-category
* rule-category `object`
  * description `string`: Rules category description
  * id `string`: Rule category id, only provide it when needed.
  * name **required** `string`: Name of the rule category
  * parent **required** `string`: The parent category of the rules

### rule-category-update
* rule-category-update `object`
  * description `string`: Rules category description
  * name **required** `string`: Name of the rule category
  * parent **required** `string`: The parent category of the rules

### rule-new
* rule-new `object`
  * tags `array`
    * items `object`
      * name `string`: Value of the `name` key
  * category `string`: The parent category id. If provided, the new rule will be in this parent category
  * directives `array`: Directives linked to the rule
    * items `string`: Directive id
  * displayName `string`: Rule name
  * enabled `boolean`: Is the rule enabled
  * id `string`: Rule id
  * longDescription `string`: Rule documentation
  * shortDescription `string`: One line rule description
  * source `string`: The id of the rule the clone will be based onto. If this parameter if provided, the new rule will be a clone of this source. Other value will override values from the source.
  * system `boolean`: If true it is an internal Rudder rule
  * targets `array`: Groups linked to the rule
    * items `string`: Group id

### rule-with-category
* rule-with-category `object`
  * tags `array`
    * items `object`
      * name `string`: Value of the `name` key
  * category `string`: The parent category id.
  * directives `array`: Directives linked to the rule
    * items `string`: Directive id
  * displayName `string`: Rule name
  * enabled `boolean`: Is the rule enabled
  * id `string`: Rule id
  * longDescription `string`: Rule documentation
  * shortDescription `string`: One line rule description
  * system `boolean`: If true it is an internal Rudder rule
  * targets `array`: Groups linked to the rule
    * items `string`: Group id

### techniques
* techniques `array`
  * items `object`
    * name `string`: Technique name
    * versions `array`: Available versions for this technique
      * items `string`: Technique version

### timezone
* timezone `object`: Timezone information of the node.
  * name **required** `string`: The standard name of the timezone
  * offset **required** `string`: Timezone offset compared to UTC, in +/-HHMM format

### users
* users `object`
  * isPreHahed `boolean` (values: false, true): If you want to provide hashed password set this propertie to `true` otherwise we will hash the plain password and store the hash
  * password `string`: this password will be hashed for you if the `isPreHashed` is set on false
  * role `array`: Defined user's permissions
    * items `string`
  * username `string`

### validated-user
* validated-user `object`: list of users with their workflow settings
  * isValidated **required** `boolean`: whether the user's actions generate chanque-request or not
  * userExists **required** `boolean`: whether the user exists in file or not
  * username **required** `string`


