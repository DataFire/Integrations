# @datafire/azure_security_discoveredsecuritysolutions

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_discoveredsecuritysolutions
```
```js
let azure_security_discoveredsecuritysolutions = require('@datafire/azure_security_discoveredsecuritysolutions').create({
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

### DiscoveredSecuritySolutions_List
Gets a list of discovered Security Solutions for the subscription.


```js
azure_security_discoveredsecuritysolutions.DiscoveredSecuritySolutions_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * api-version **required** `string`: API version for the operation

#### Output
* output [DiscoveredSecuritySolutionList](#discoveredsecuritysolutionlist)

### DiscoveredSecuritySolutions_ListByHomeRegion
Gets a list of discovered Security Solutions for the subscription and location.


```js
azure_security_discoveredsecuritysolutions.DiscoveredSecuritySolutions_ListByHomeRegion({
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
* output [DiscoveredSecuritySolutionList](#discoveredsecuritysolutionlist)

### DiscoveredSecuritySolutions_Get
Gets a specific discovered Security Solution.


```js
azure_security_discoveredsecuritysolutions.DiscoveredSecuritySolutions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "discoveredSecuritySolutionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * discoveredSecuritySolutionName **required** `string`: Name of a discovered security solution.
  * api-version **required** `string`: API version for the operation

#### Output
* output [DiscoveredSecuritySolution](#discoveredsecuritysolution)



## Definitions

### DiscoveredSecuritySolution
* DiscoveredSecuritySolution `object`
  * properties **required** [DiscoveredSecuritySolutionProperties](#discoveredsecuritysolutionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * location `string`: Location where the resource is stored

### DiscoveredSecuritySolutionList
* DiscoveredSecuritySolutionList `object`
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items [DiscoveredSecuritySolution](#discoveredsecuritysolution)

### DiscoveredSecuritySolutionProperties
* DiscoveredSecuritySolutionProperties `object`
  * offer **required** `string`: The security solutions' image offer
  * publisher **required** `string`: The security solutions' image publisher
  * securityFamily **required** `string` (values: Waf, Ngfw, SaasWaf, Va): The security family of the discovered solution
  * sku **required** `string`: The security solutions' image sku


