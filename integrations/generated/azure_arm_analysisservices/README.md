# @datafire/azure_arm_analysisservices

Client library for AzureAnalysisServices

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_analysisservices
```

```js
let datafire = require('datafire');
let azure_arm_analysisservices = require('@datafire/azure_arm_analysisservices').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_analysisservices.Servers_List({}).then(data => {
  console.log(data);
})
```

## Description
The Azure Analysis Services Web API provides a RESTful set of web services that enables users to create, retrieve, update, and delete Analysis Services servers

## Actions
### Servers_List
Lists all the Analysis Services servers for the given subscription.


```js
azure_arm_analysisservices.Servers_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Servers_ListByResourceGroup
Gets all the Analysis Services servers for the given resource group.


```js
azure_arm_analysisservices.Servers_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Servers_Delete
Deletes the specified Analysis Services server.


```js
azure_arm_analysisservices.Servers_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
* serverName (string) **required** - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Servers_GetDetails
Gets details about the specified Analysis Services server.


```js
azure_arm_analysisservices.Servers_GetDetails({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
* serverName (string) **required** - The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Servers_Update
Updates the current state of the specified Analysis Services server.


```js
azure_arm_analysisservices.Servers_Update({
  "resourceGroupName": "",
  "serverName": "",
  "serverUpdateParameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
* serverName (string) **required** - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
* serverUpdateParameters (object) **required** - Provision request specification
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Servers_Create
Provisions the specified Analysis Services server based on the configuration specified in the request.


```js
azure_arm_analysisservices.Servers_Create({
  "resourceGroupName": "",
  "serverName": "",
  "serverParameters": {
    "location": "",
    "sku": {
      "name": ""
    }
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
* serverName (string) **required** - The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
* serverParameters (object) **required** - Represents an instance of an Analysis Services resource.
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Servers_Resume
Resumes operation of the specified Analysis Services server instance.


```js
azure_arm_analysisservices.Servers_Resume({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
* serverName (string) **required** - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Servers_Suspend
Supends operation of the specified Analysis Services server instance.


```js
azure_arm_analysisservices.Servers_Suspend({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
* serverName (string) **required** - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
* api-version (string) **required** - The client API version.
* subscriptionId (string) **required** - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

