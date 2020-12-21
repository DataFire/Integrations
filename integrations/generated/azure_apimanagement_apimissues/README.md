# @datafire/azure_apimanagement_apimissues

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimissues
```
```js
let azure_apimanagement_apimissues = require('@datafire/azure_apimanagement_apimissues').create({
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

Use this REST API to get all the issues across an Azure Api Management service.

## Actions

### Issue_ListByService
Lists a collection of issues in the specified service instance.


```js
azure_apimanagement_apimissues.Issue_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter `string`: |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| apiId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| title | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| authorName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| state | filter | eq |     | </br>
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Paged Issue list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Issue values.
    * items `object`: Issue Contract details.
      * properties `object`: Issue contract Properties.
        * description **required** `string`: Text describing the issue.
        * title **required** `string`: The issue title.
        * userId **required** `string`: A resource identifier for the user created the issue.
        * apiId `string`: A resource identifier for the API the issue was created for.
        * createdDate `string`: Date and time when the issue was created.
        * state `string` (values: proposed, open, removed, resolved, closed): Status of the issue.
      * id `string`: Resource ID.
      * name `string`: Resource name.
      * type `string`: Resource type for API Management resource.

### Issue_Get
Gets API Management issue details


```js
azure_apimanagement_apimissues.Issue_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "issueId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * issueId **required** `string`: Issue identifier. Must be unique in the current API Management service instance.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `object`: Issue Contract details.
  * properties `object`: Issue contract Properties.
    * description **required** `string`: Text describing the issue.
    * title **required** `string`: The issue title.
    * userId **required** `string`: A resource identifier for the user created the issue.
    * apiId `string`: A resource identifier for the API the issue was created for.
    * createdDate `string`: Date and time when the issue was created.
    * state `string` (values: proposed, open, removed, resolved, closed): Status of the issue.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.



## Definitions

*This integration has no definitions*
