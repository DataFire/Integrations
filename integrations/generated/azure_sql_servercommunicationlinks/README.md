# @datafire/azure_sql_servercommunicationlinks

Client library for Azure SQL Database

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_servercommunicationlinks
```
```js
let azure_sql_servercommunicationlinks = require('@datafire/azure_sql_servercommunicationlinks').create({
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

Provides create, read, update and delete functionality Azure SQL server communication links.

## Actions

### ServerCommunicationLinks_ListByServer
Gets a list of server communication links.


```js
azure_sql_servercommunicationlinks.ServerCommunicationLinks_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [ServerCommunicationLinkListResult](#servercommunicationlinklistresult)

### ServerCommunicationLinks_Delete
Deletes a server communication link.


```js
azure_sql_servercommunicationlinks.ServerCommunicationLinks_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "communicationLinkName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * communicationLinkName **required** `string`: The name of the server communication link.

#### Output
*Output schema unknown*

### ServerCommunicationLinks_Get
Returns a server communication link.


```js
azure_sql_servercommunicationlinks.ServerCommunicationLinks_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "communicationLinkName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * communicationLinkName **required** `string`: The name of the server communication link.

#### Output
* output [ServerCommunicationLink](#servercommunicationlink)

### ServerCommunicationLinks_CreateOrUpdate
Creates a server communication link.


```js
azure_sql_servercommunicationlinks.ServerCommunicationLinks_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "communicationLinkName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * communicationLinkName **required** `string`: The name of the server communication link.
  * parameters **required** [ServerCommunicationLink](#servercommunicationlink)

#### Output
* output [ServerCommunicationLink](#servercommunicationlink)



## Definitions

### ServerCommunicationLink
* ServerCommunicationLink `object`: Server communication link.
  * kind `string`: Communication link kind.  This property is used for Azure Portal metadata.
  * location `string`: Communication link location.
  * properties [ServerCommunicationLinkProperties](#servercommunicationlinkproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ServerCommunicationLinkListResult
* ServerCommunicationLinkListResult `object`: A list of server communication links.
  * value `array`: The list of server communication links.
    * items [ServerCommunicationLink](#servercommunicationlink)

### ServerCommunicationLinkProperties
* ServerCommunicationLinkProperties `object`: The properties of a server communication link.
  * partnerServer **required** `string`: The name of the partner server.
  * state `string`: The state.


