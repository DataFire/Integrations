# @datafire/azure_apimanagement_apimnetworkstatus

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimnetworkstatus
```
```js
let azure_apimanagement_apimnetworkstatus = require('@datafire/azure_apimanagement_apimnetworkstatus').create({
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

Use these REST APIs for getting the network connectivity status of your Azure API Management deployment. When the API Management service is deployed inside a Virtual Network, it needs to have access to other Azure resources it depends on. This also gives details about the DNS Servers visible to Azure API Management deployment.

## Actions

### NetworkStatus_ListByLocation
Gets the Connectivity Status to the external resources on which the Api Management service depends from inside the Cloud Service. This also returns the DNS Servers as visible to the CloudService.


```js
azure_apimanagement_apimnetworkstatus.NetworkStatus_ListByLocation({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "locationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * locationName **required** `string`: Location in which the API Management service is deployed. This is one of the Azure Regions like West US, East US, South Central US.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [NetworkStatusContract](#networkstatuscontract)

### NetworkStatus_ListByService
Gets the Connectivity Status to the external resources on which the Api Management service depends from inside the Cloud Service. This also returns the DNS Servers as visible to the CloudService.


```js
azure_apimanagement_apimnetworkstatus.NetworkStatus_ListByService({
  "subscriptionId": "",
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output `array`: List of Network Status values.
  * items [NetworkStatusContractByLocation](#networkstatuscontractbylocation)



## Definitions

### ConnectivityStatusContract
* ConnectivityStatusContract `object`: Details about connectivity to a resource.
  * error `string`: Error details of the connectivity to the resource.
  * lastStatusChange **required** `string`: The date when the resource connectivity status last Changed from success to failure or vice-versa. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * lastUpdated **required** `string`: The date when the resource connectivity status was last updated. This status should be updated every 15 minutes. If this status has not been updated, then it means that the service has lost network connectivity to the resource, from inside the Virtual Network.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
  * name **required** `string`: The hostname of the resource which the service depends on. This can be the database, storage or any other azure resource on which the service depends upon.
  * status **required** `string` (values: initializing, success, failure): Resource Connectivity Status Type identifier.

### NetworkStatusContract
* NetworkStatusContract `object`: Network Status details.
  * connectivityStatus **required** `array`: Gets the list of Connectivity Status to the Resources on which the service depends upon.
    * items [ConnectivityStatusContract](#connectivitystatuscontract)
  * dnsServers **required** `array`: Gets the list of DNS servers IPV4 addresses.
    * items `string`

### NetworkStatusContractByLocation
* NetworkStatusContractByLocation `object`: Network Status in the Location
  * location `string`: Location of service
  * networkStatus [NetworkStatusContract](#networkstatuscontract)


