# @datafire/azure_security_externalsecuritysolutions

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_externalsecuritysolutions
```
```js
let azure_security_externalsecuritysolutions = require('@datafire/azure_security_externalsecuritysolutions').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### ExternalSecuritySolutions_List
Gets a list of external security solutions for the subscription.


```js
azure_security_externalsecuritysolutions.ExternalSecuritySolutions_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [ExternalSecuritySolutionList](#externalsecuritysolutionlist)

### ExternalSecuritySolutions_ListByHomeRegion
Gets a list of external Security Solutions for the subscription and location.


```js
azure_security_externalsecuritysolutions.ExternalSecuritySolutions_ListByHomeRegion({
  "subscriptionId": "",
  "ascLocation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * api-version **required** `string`: API version for the operation

#### Output
* output [ExternalSecuritySolutionList](#externalsecuritysolutionlist)

### ExternalSecuritySolutions_Get
Gets a specific external Security Solution.


```js
azure_security_externalsecuritysolutions.ExternalSecuritySolutions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "externalSecuritySolutionsName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * externalSecuritySolutionsName **required** `string`: Name of an external security solution.
  * api-version **required** `string`: API version for the operation

#### Output
* output [ExternalSecuritySolution](#externalsecuritysolution)



## Definitions

### AadConnectivityState
* AadConnectivityState `object`: Describes an Azure resource with kind
  * connectivityState `string` (values: Discovered, NotLicensed, Connected)

### AadExternalSecuritySolution
* AadExternalSecuritySolution `object`: Represents an AAD identity protection solution which sends logs to an OMS workspace.
  * properties [AadSolutionProperties](#aadsolutionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * kind `string` (values: CEF, ATA, AAD): The kind of the external solution
  * location `string`: Location where the resource is stored

### AadSolutionProperties
* The external security solution properties for AAD solutions `object`
  * deviceType `string`
  * deviceVendor `string`
  * workspace [ConnectedWorkspace](#connectedworkspace)
  * connectivityState `string` (values: Discovered, NotLicensed, Connected)

### AtaExternalSecuritySolution
* AtaExternalSecuritySolution `object`: Represents an ATA security solution which sends logs to an OMS workspace
  * properties [AtaSolutionProperties](#atasolutionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * kind `string` (values: CEF, ATA, AAD): The kind of the external solution
  * location `string`: Location where the resource is stored

### AtaSolutionProperties
* The external security solution properties for ATA solutions `object`
  * lastEventReceived `string`
  * deviceType `string`
  * deviceVendor `string`
  * workspace [ConnectedWorkspace](#connectedworkspace)

### CefExternalSecuritySolution
* CefExternalSecuritySolution `object`: Represents a security solution which sends CEF logs to an OMS workspace
  * properties [CefSolutionProperties](#cefsolutionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * kind `string` (values: CEF, ATA, AAD): The kind of the external solution
  * location `string`: Location where the resource is stored

### CefSolutionProperties
* The external security solution properties for CEF solutions `object`
  * agent `string`
  * hostname `string`
  * lastEventReceived `string`
  * deviceType `string`
  * deviceVendor `string`
  * workspace [ConnectedWorkspace](#connectedworkspace)

### ConnectedWorkspace
* Represents an OMS workspace to which the solution is connected `object`
  * id `string`: Azure resource ID of the connected OMS workspace

### ExternalSecuritySolution
* ExternalSecuritySolution `object`: Represents a security solution external to Azure Security Center which sends information to an OMS workspace and whose data is displayed by Azure Security Center.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * kind `string` (values: CEF, ATA, AAD): The kind of the external solution
  * location `string`: Location where the resource is stored

### ExternalSecuritySolutionKind
* ExternalSecuritySolutionKind `object`: Describes an Azure resource with kind
  * kind `string` (values: CEF, ATA, AAD): The kind of the external solution

### ExternalSecuritySolutionList
* ExternalSecuritySolutionList `object`
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items [ExternalSecuritySolution](#externalsecuritysolution)

### ExternalSecuritySolutionProperties
* ExternalSecuritySolutionProperties `object`: The solution properties (correspond to the solution kind)
  * deviceType `string`
  * deviceVendor `string`
  * workspace [ConnectedWorkspace](#connectedworkspace)


