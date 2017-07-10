# @datafire/azure_arm_network
The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Operation: ApplicationGateways_ListAll
The List ApplicationGateway operation retrieves all the application gateways in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationGatewayListResult"
}
```
## Operation: ExpressRouteCircuits_ListAll
The List ExpressRouteCircuit operation retrieves all the ExpressRouteCircuits in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitListResult"
}
```
## Operation: ExpressRouteServiceProviders_List
The List ExpressRouteServiceProvider operation retrieves all the available ExpressRouteServiceProviders.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteServiceProviderListResult"
}
```
## Operation: LoadBalancers_ListAll
The List loadBalancer operation retrieves all the load balancers in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LoadBalancerListResult"
}
```
## Operation: CheckDnsNameAvailability
Checks whether a domain name in the cloudapp.net zone is available for use.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The location of the domain name"
    },
    "domainNameLabel": {
      "type": "string",
      "description": "The domain name to be verified. It must conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DnsNameAvailabilityResult"
}
```
## Operation: Usages_List
Lists compute usages for a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The location upon which resource usage is queried.",
      "pattern": "^[-\\w\\._]+$"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsagesListResult"
}
```
## Operation: NetworkInterfaces_ListAll
The List networkInterfaces operation retrieves all the networkInterfaces in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkInterfaceListResult"
}
```
## Operation: NetworkSecurityGroups_ListAll
The list NetworkSecurityGroups returns all network security groups in a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkSecurityGroupListResult"
}
```
## Operation: PublicIPAddresses_ListAll
The List publicIpAddress operation retrieves all the publicIpAddresses in a subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PublicIPAddressListResult"
}
```
## Operation: RouteTables_ListAll
The list RouteTables returns all route tables in a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RouteTableListResult"
}
```
## Operation: VirtualNetworks_ListAll
The list VirtualNetwork returns all Virtual Networks in a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkListResult"
}
```
## Operation: ApplicationGateways_List
The List ApplicationGateway operation retrieves all the application gateways in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationGatewayListResult"
}
```
## Operation: ApplicationGateways_Delete
The delete ApplicationGateway operation deletes the specified application gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "applicationGatewayName": {
      "type": "string",
      "description": "The name of the application gateway."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "applicationGatewayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ApplicationGateways_Get
The Get ApplicationGateway operation retrieves information about the specified application gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "applicationGatewayName": {
      "type": "string",
      "description": "The name of the application gateway."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "applicationGatewayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationGateway"
}
```
## Operation: ApplicationGateways_CreateOrUpdate
The Put ApplicationGateway operation creates/updates a ApplicationGateway

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "applicationGatewayName": {
      "type": "string",
      "description": "The name of the ApplicationGateway."
    },
    "parameters": {
      "$ref": "#/definitions/ApplicationGateway"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "applicationGatewayName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationGateway"
}
```
## Operation: ApplicationGateways_Start
The Start ApplicationGateway operation starts application gateway in the specified resource group through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "applicationGatewayName": {
      "type": "string",
      "description": "The name of the application gateway."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "applicationGatewayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ApplicationGateways_Stop
The STOP ApplicationGateway operation stops application gateway in the specified resource group through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "applicationGatewayName": {
      "type": "string",
      "description": "The name of the application gateway."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "applicationGatewayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualNetworkGatewayConnections_List
The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways connections created.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkGatewayConnectionListResult"
}
```
## Operation: VirtualNetworkGatewayConnections_GetSharedKey
The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the specified virtual network gateway connection shared key through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "connectionSharedKeyName": {
      "type": "string",
      "description": "The virtual network gateway connection shared key name."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "connectionSharedKeyName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionSharedKeyResult"
}
```
## Operation: VirtualNetworkGatewayConnections_Delete
The Delete VirtualNetworkGatewayConnection operation deletes the specified virtual network Gateway connection through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayConnectionName": {
      "type": "string",
      "description": "The name of the virtual network gateway connection."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayConnectionName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualNetworkGatewayConnections_Get
The Get VirtualNetworkGatewayConnection operation retrieves information about the specified virtual network gateway connection through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayConnectionName": {
      "type": "string",
      "description": "The name of the virtual network gateway connection."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayConnectionName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkGatewayConnection"
}
```
## Operation: VirtualNetworkGatewayConnections_CreateOrUpdate
The Put VirtualNetworkGatewayConnection operation creates/updates a virtual network gateway connection in the specified resource group through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayConnectionName": {
      "type": "string",
      "description": "The name of the virtual network gateway connection."
    },
    "parameters": {
      "$ref": "#/definitions/VirtualNetworkGatewayConnection"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayConnectionName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkGatewayConnection"
}
```
## Operation: VirtualNetworkGatewayConnections_SetSharedKey
The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayConnectionName": {
      "type": "string",
      "description": "The virtual network gateway connection name."
    },
    "parameters": {
      "$ref": "#/definitions/ConnectionSharedKey"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayConnectionName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionSharedKey"
}
```
## Operation: VirtualNetworkGatewayConnections_ResetSharedKey
The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayConnectionName": {
      "type": "string",
      "description": "The virtual network gateway connection reset shared key Name."
    },
    "parameters": {
      "$ref": "#/definitions/ConnectionResetSharedKey"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayConnectionName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionResetSharedKey"
}
```
## Operation: ExpressRouteCircuits_List
The List ExpressRouteCircuit operation retrieves all the ExpressRouteCircuits in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitListResult"
}
```
## Operation: ExpressRouteCircuits_Delete
The delete ExpressRouteCircuit operation deletes the specified ExpressRouteCircuit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the express route Circuit."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ExpressRouteCircuits_Get
The Get ExpressRouteCircuit operation retrieves information about the specified ExpressRouteCircuit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the circuit."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuit"
}
```
## Operation: ExpressRouteCircuits_CreateOrUpdate
The Put ExpressRouteCircuit operation creates/updates a ExpressRouteCircuit

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the circuit."
    },
    "parameters": {
      "$ref": "#/definitions/ExpressRouteCircuit"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuit"
}
```
## Operation: ExpressRouteCircuitAuthorizations_List
The List authorization operation retrieves all the authorizations in an ExpressRouteCircuit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the circuit."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationListResult"
}
```
## Operation: ExpressRouteCircuitAuthorizations_Delete
The delete authorization operation deletes the specified authorization from the specified ExpressRouteCircuit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the express route circuit."
    },
    "authorizationName": {
      "type": "string",
      "description": "The name of the authorization."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "authorizationName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ExpressRouteCircuitAuthorizations_Get
The GET authorization operation retrieves the specified authorization from the specified ExpressRouteCircuit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the express route circuit."
    },
    "authorizationName": {
      "type": "string",
      "description": "The name of the authorization."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "authorizationName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitAuthorization"
}
```
## Operation: ExpressRouteCircuitAuthorizations_CreateOrUpdate
The Put Authorization operation creates/updates an authorization in the specified ExpressRouteCircuits

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the express route circuit."
    },
    "authorizationName": {
      "type": "string",
      "description": "The name of the authorization."
    },
    "authorizationParameters": {
      "$ref": "#/definitions/ExpressRouteCircuitAuthorization"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "authorizationName",
    "authorizationParameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitAuthorization"
}
```
## Operation: ExpressRouteCircuitPeerings_List
The List peering operation retrieves all the peerings in an ExpressRouteCircuit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the circuit."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitPeeringListResult"
}
```
## Operation: ExpressRouteCircuitPeerings_Delete
The delete peering operation deletes the specified peering from the ExpressRouteCircuit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the express route circuit."
    },
    "peeringName": {
      "type": "string",
      "description": "The name of the peering."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "peeringName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ExpressRouteCircuitPeerings_Get
The GET peering operation retrieves the specified authorization from the ExpressRouteCircuit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the express route circuit."
    },
    "peeringName": {
      "type": "string",
      "description": "The name of the peering."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "peeringName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitPeering"
}
```
## Operation: ExpressRouteCircuitPeerings_CreateOrUpdate
The Put Peering operation creates/updates an peering in the specified ExpressRouteCircuits

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the express route circuit."
    },
    "peeringName": {
      "type": "string",
      "description": "The name of the peering."
    },
    "peeringParameters": {
      "$ref": "#/definitions/ExpressRouteCircuitPeering"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "peeringName",
    "peeringParameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitPeering"
}
```
## Operation: ExpressRouteCircuits_ListArpTable
The ListArpTable from ExpressRouteCircuit operation retrieves the currently advertised arp table associated with the ExpressRouteCircuits in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the circuit."
    },
    "peeringName": {
      "type": "string",
      "description": "The name of the peering."
    },
    "devicePath": {
      "type": "string",
      "description": "The path of the device."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "peeringName",
    "devicePath",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitsArpTableListResult"
}
```
## Operation: ExpressRouteCircuits_ListRoutesTable
The ListRoutesTable from ExpressRouteCircuit operation retrieves the currently advertised routes table associated with the ExpressRouteCircuits in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the circuit."
    },
    "peeringName": {
      "type": "string",
      "description": "The name of the peering."
    },
    "devicePath": {
      "type": "string",
      "description": "The path of the device."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "peeringName",
    "devicePath",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitsRoutesTableListResult"
}
```
## Operation: ExpressRouteCircuits_ListRoutesTableSummary
The ListRoutesTable from ExpressRouteCircuit operation retrieves the currently advertised routes table associated with the ExpressRouteCircuits in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the circuit."
    },
    "peeringName": {
      "type": "string",
      "description": "The name of the peering."
    },
    "devicePath": {
      "type": "string",
      "description": "The path of the device."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "peeringName",
    "devicePath",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitsRoutesTableSummaryListResult"
}
```
## Operation: ExpressRouteCircuits_GetPeeringStats
The List stats ExpressRouteCircuit operation retrieves all the stats from a ExpressRouteCircuits in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the circuit."
    },
    "peeringName": {
      "type": "string",
      "description": "The name of the peering."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "peeringName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitStats"
}
```
## Operation: ExpressRouteCircuits_GetStats
The List stats ExpressRouteCircuit operation retrieves all the stats from a ExpressRouteCircuits in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "circuitName": {
      "type": "string",
      "description": "The name of the circuit."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "circuitName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpressRouteCircuitStats"
}
```
## Operation: LoadBalancers_List
The List loadBalancer operation retrieves all the load balancers in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LoadBalancerListResult"
}
```
## Operation: LoadBalancers_Delete
The delete LoadBalancer operation deletes the specified load balancer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "loadBalancerName": {
      "type": "string",
      "description": "The name of the loadBalancer."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "loadBalancerName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: LoadBalancers_Get
The Get LoadBalancer operation retrieves information about the specified LoadBalancer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "loadBalancerName": {
      "type": "string",
      "description": "The name of the loadBalancer."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "$expand": {
      "type": "string",
      "description": "expand references resources."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "loadBalancerName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LoadBalancer"
}
```
## Operation: LoadBalancers_CreateOrUpdate
The Put LoadBalancer operation creates/updates a LoadBalancer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "loadBalancerName": {
      "type": "string",
      "description": "The name of the loadBalancer."
    },
    "parameters": {
      "$ref": "#/definitions/LoadBalancer"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "loadBalancerName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LoadBalancer"
}
```
## Operation: LocalNetworkGateways_List
The List LocalNetworkGateways operation retrieves all the local network gateways stored.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LocalNetworkGatewayListResult"
}
```
## Operation: LocalNetworkGateways_Delete
The Delete LocalNetworkGateway operation deletes the specified local network Gateway through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "localNetworkGatewayName": {
      "type": "string",
      "description": "The name of the local network gateway."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "localNetworkGatewayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: LocalNetworkGateways_Get
The Get LocalNetworkGateway operation retrieves information about the specified local network gateway through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "localNetworkGatewayName": {
      "type": "string",
      "description": "The name of the local network gateway."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "localNetworkGatewayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LocalNetworkGateway"
}
```
## Operation: LocalNetworkGateways_CreateOrUpdate
The Put LocalNetworkGateway operation creates/updates a local network gateway in the specified resource group through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "localNetworkGatewayName": {
      "type": "string",
      "description": "The name of the local network gateway."
    },
    "parameters": {
      "$ref": "#/definitions/LocalNetworkGateway"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "localNetworkGatewayName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LocalNetworkGateway"
}
```
## Operation: NetworkInterfaces_List
The List networkInterfaces operation retrieves all the networkInterfaces in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkInterfaceListResult"
}
```
## Operation: NetworkInterfaces_Delete
The delete netwokInterface operation deletes the specified netwokInterface.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkInterfaceName": {
      "type": "string",
      "description": "The name of the network interface."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkInterfaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: NetworkInterfaces_Get
The Get network interface operation retrieves information about the specified network interface.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkInterfaceName": {
      "type": "string",
      "description": "The name of the network interface."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "$expand": {
      "type": "string",
      "description": "expand references resources."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkInterfaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkInterface"
}
```
## Operation: NetworkInterfaces_CreateOrUpdate
The Put NetworkInterface operation creates/updates a networkInterface

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkInterfaceName": {
      "type": "string",
      "description": "The name of the network interface."
    },
    "parameters": {
      "$ref": "#/definitions/NetworkInterface"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkInterfaceName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkInterface"
}
```
## Operation: NetworkInterfaces_ListEffectiveNetworkSecurityGroups
The list effective network security group operation retrieves all the network security groups applied on a networkInterface.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkInterfaceName": {
      "type": "string",
      "description": "The name of the network interface."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkInterfaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EffectiveNetworkSecurityGroupListResult"
}
```
## Operation: NetworkInterfaces_GetEffectiveRouteTable
The get effective routetable operation retrieves all the route tables applied on a networkInterface.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkInterfaceName": {
      "type": "string",
      "description": "The name of the network interface."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkInterfaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EffectiveRouteListResult"
}
```
## Operation: NetworkSecurityGroups_List
The list NetworkSecurityGroups returns all network security groups in a resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkSecurityGroupListResult"
}
```
## Operation: NetworkSecurityGroups_Delete
The Delete NetworkSecurityGroup operation deletes the specified network security group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkSecurityGroupName": {
      "type": "string",
      "description": "The name of the network security group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkSecurityGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: NetworkSecurityGroups_Get
The Get NetworkSecurityGroups operation retrieves information about the specified network security group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkSecurityGroupName": {
      "type": "string",
      "description": "The name of the network security group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "$expand": {
      "type": "string",
      "description": "expand references resources."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkSecurityGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkSecurityGroup"
}
```
## Operation: NetworkSecurityGroups_CreateOrUpdate
The Put NetworkSecurityGroup operation creates/updates a network security group in the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkSecurityGroupName": {
      "type": "string",
      "description": "The name of the network security group."
    },
    "parameters": {
      "$ref": "#/definitions/NetworkSecurityGroup"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkSecurityGroupName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkSecurityGroup"
}
```
## Operation: SecurityRules_List
The List network security rule operation retrieves all the security rules in a network security group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkSecurityGroupName": {
      "type": "string",
      "description": "The name of the network security group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkSecurityGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SecurityRuleListResult"
}
```
## Operation: SecurityRules_Delete
The delete network security rule operation deletes the specified network security rule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkSecurityGroupName": {
      "type": "string",
      "description": "The name of the network security group."
    },
    "securityRuleName": {
      "type": "string",
      "description": "The name of the security rule."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkSecurityGroupName",
    "securityRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: SecurityRules_Get
The Get NetworkSecurityRule operation retrieves information about the specified network security rule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkSecurityGroupName": {
      "type": "string",
      "description": "The name of the network security group."
    },
    "securityRuleName": {
      "type": "string",
      "description": "The name of the security rule."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkSecurityGroupName",
    "securityRuleName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SecurityRule"
}
```
## Operation: SecurityRules_CreateOrUpdate
The Put network security rule operation creates/updates a security rule in the specified network security group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "networkSecurityGroupName": {
      "type": "string",
      "description": "The name of the network security group."
    },
    "securityRuleName": {
      "type": "string",
      "description": "The name of the security rule."
    },
    "securityRuleParameters": {
      "$ref": "#/definitions/SecurityRule"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "networkSecurityGroupName",
    "securityRuleName",
    "securityRuleParameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SecurityRule"
}
```
## Operation: PublicIPAddresses_List
The List publicIpAddress operation retrieves all the publicIpAddresses in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PublicIPAddressListResult"
}
```
## Operation: PublicIPAddresses_Delete
The delete publicIpAddress operation deletes the specified publicIpAddress.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "publicIpAddressName": {
      "type": "string",
      "description": "The name of the subnet."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "publicIpAddressName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: PublicIPAddresses_Get
The Get publicIpAddress operation retrieves information about the specified pubicIpAddress

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "publicIpAddressName": {
      "type": "string",
      "description": "The name of the subnet."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "$expand": {
      "type": "string",
      "description": "expand references resources."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "publicIpAddressName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PublicIPAddress"
}
```
## Operation: PublicIPAddresses_CreateOrUpdate
The Put PublicIPAddress operation creates/updates a stable/dynamic PublicIP address

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "publicIpAddressName": {
      "type": "string",
      "description": "The name of the publicIpAddress."
    },
    "parameters": {
      "$ref": "#/definitions/PublicIPAddress"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "publicIpAddressName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PublicIPAddress"
}
```
## Operation: RouteTables_List
The list RouteTables returns all route tables in a resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RouteTableListResult"
}
```
## Operation: RouteTables_Delete
The Delete RouteTable operation deletes the specified Route Table

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "routeTableName": {
      "type": "string",
      "description": "The name of the route table."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "routeTableName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: RouteTables_Get
The Get RouteTables operation retrieves information about the specified route table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "routeTableName": {
      "type": "string",
      "description": "The name of the route table."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "$expand": {
      "type": "string",
      "description": "expand references resources."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "routeTableName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RouteTable"
}
```
## Operation: RouteTables_CreateOrUpdate
The Put RouteTable operation creates/updates a route table in the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "routeTableName": {
      "type": "string",
      "description": "The name of the route table."
    },
    "parameters": {
      "$ref": "#/definitions/RouteTable"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "routeTableName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RouteTable"
}
```
## Operation: Routes_List
The List network security rule operation retrieves all the routes in a route table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "routeTableName": {
      "type": "string",
      "description": "The name of the route table."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "routeTableName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RouteListResult"
}
```
## Operation: Routes_Delete
The delete route operation deletes the specified route from a route table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "routeTableName": {
      "type": "string",
      "description": "The name of the route table."
    },
    "routeName": {
      "type": "string",
      "description": "The name of the route."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "routeTableName",
    "routeName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Routes_Get
The Get route operation retrieves information about the specified route from the route table.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "routeTableName": {
      "type": "string",
      "description": "The name of the route table."
    },
    "routeName": {
      "type": "string",
      "description": "The name of the route."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "routeTableName",
    "routeName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Route"
}
```
## Operation: Routes_CreateOrUpdate
The Put route operation creates/updates a route in the specified route table

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "routeTableName": {
      "type": "string",
      "description": "The name of the route table."
    },
    "routeName": {
      "type": "string",
      "description": "The name of the route."
    },
    "routeParameters": {
      "$ref": "#/definitions/Route"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "routeTableName",
    "routeName",
    "routeParameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Route"
}
```
## Operation: VirtualNetworkGateways_List
The List VirtualNetworkGateways operation retrieves all the virtual network gateways stored.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkGatewayListResult"
}
```
## Operation: VirtualNetworkGateways_Delete
The Delete VirtualNetworkGateway operation deletes the specified virtual network Gateway through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayName": {
      "type": "string",
      "description": "The name of the virtual network gateway."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualNetworkGateways_Get
The Get VirtualNetworkGateway operation retrieves information about the specified virtual network gateway through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayName": {
      "type": "string",
      "description": "The name of the virtual network gateway."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkGateway"
}
```
## Operation: VirtualNetworkGateways_CreateOrUpdate
The Put VirtualNetworkGateway operation creates/updates a virtual network gateway in the specified resource group through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayName": {
      "type": "string",
      "description": "The name of the virtual network gateway."
    },
    "parameters": {
      "$ref": "#/definitions/VirtualNetworkGateway"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkGateway"
}
```
## Operation: VirtualNetworkGateways_Generatevpnclientpackage
The Generatevpnclientpackage operation generates Vpn client package for P2S client of the virtual network gateway in the specified resource group through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayName": {
      "type": "string",
      "description": "The name of the virtual network gateway."
    },
    "parameters": {
      "$ref": "#/definitions/VpnClientParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: VirtualNetworkGateways_Reset
The Reset VirtualNetworkGateway operation resets the primary of the virtual network gateway in the specified resource group through Network resource provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkGatewayName": {
      "type": "string",
      "description": "The name of the virtual network gateway."
    },
    "parameters": {
      "$ref": "#/definitions/VirtualNetworkGateway"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkGatewayName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkGateway"
}
```
## Operation: VirtualNetworks_List
The list VirtualNetwork returns all Virtual Networks in a resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkListResult"
}
```
## Operation: VirtualNetworks_Delete
The Delete VirtualNetwork operation deletes the specified virtual network

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualNetworks_Get
The Get VirtualNetwork operation retrieves information about the specified virtual network.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "$expand": {
      "type": "string",
      "description": "expand references resources."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetwork"
}
```
## Operation: VirtualNetworks_CreateOrUpdate
The Put VirtualNetwork operation creates/updates a virtual network in the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "parameters": {
      "$ref": "#/definitions/VirtualNetwork"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetwork"
}
```
## Operation: VirtualNetworks_CheckIPAddressAvailability
Checks whether a private Ip address is available for use.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ipAddress": {
      "type": "string",
      "description": "The private IP address to be verified."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IPAddressAvailabilityResult"
}
```
## Operation: Subnets_List
The List subnets operation retrieves all the subnets in a virtual network.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubnetListResult"
}
```
## Operation: Subnets_Delete
The delete subnet operation deletes the specified subnet.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "subnetName": {
      "type": "string",
      "description": "The name of the subnet."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "subnetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Subnets_Get
The Get subnet operation retrieves information about the specified subnet.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "subnetName": {
      "type": "string",
      "description": "The name of the subnet."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "$expand": {
      "type": "string",
      "description": "expand references resources."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "subnetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subnet"
}
```
## Operation: Subnets_CreateOrUpdate
The Put Subnet operation creates/updates a subnet in the specified virtual network

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "subnetName": {
      "type": "string",
      "description": "The name of the subnet."
    },
    "subnetParameters": {
      "$ref": "#/definitions/Subnet"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "subnetName",
    "subnetParameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subnet"
}
```
## Operation: VirtualNetworkPeerings_List
The List virtual network peerings operation retrieves all the peerings in a virtual network.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkPeeringListResult"
}
```
## Operation: VirtualNetworkPeerings_Delete
The delete virtual network peering operation deletes the specified peering.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "virtualNetworkPeeringName": {
      "type": "string",
      "description": "The name of the virtual network peering."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "virtualNetworkPeeringName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: VirtualNetworkPeerings_Get
The Get virtual network peering operation retrieves information about the specified virtual network peering.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "virtualNetworkPeeringName": {
      "type": "string",
      "description": "The name of the virtual network peering."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "virtualNetworkPeeringName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkPeering"
}
```
## Operation: VirtualNetworkPeerings_CreateOrUpdate
The Put virtual network peering operation creates/updates a peering in the specified virtual network

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualNetworkName": {
      "type": "string",
      "description": "The name of the virtual network."
    },
    "virtualNetworkPeeringName": {
      "type": "string",
      "description": "The name of the peering."
    },
    "VirtualNetworkPeeringParameters": {
      "$ref": "#/definitions/VirtualNetworkPeering"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualNetworkName",
    "virtualNetworkPeeringName",
    "VirtualNetworkPeeringParameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualNetworkPeering"
}
```
## Operation: NetworkInterfaces_ListVirtualMachineScaleSetNetworkInterfaces
The list network interface operation retrieves information about all network interfaces in a virtual machine scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualMachineScaleSetName": {
      "type": "string",
      "description": "The name of the virtual machine scale set."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualMachineScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkInterfaceListResult"
}
```
## Operation: NetworkInterfaces_ListVirtualMachineScaleSetVMNetworkInterfaces
The list network interface operation retrieves information about all network interfaces in a virtual machine from a virtual machine scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualMachineScaleSetName": {
      "type": "string",
      "description": "The name of the virtual machine scale set."
    },
    "virtualmachineIndex": {
      "type": "string",
      "description": "The virtual machine index."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualMachineScaleSetName",
    "virtualmachineIndex",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkInterfaceListResult"
}
```
## Operation: NetworkInterfaces_GetVirtualMachineScaleSetNetworkInterface
The Get network interface operation retrieves information about the specified network interface in a virtual machine scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualMachineScaleSetName": {
      "type": "string",
      "description": "The name of the virtual machine scale set."
    },
    "virtualmachineIndex": {
      "type": "string",
      "description": "The virtual machine index."
    },
    "networkInterfaceName": {
      "type": "string",
      "description": "The name of the network interface."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "$expand": {
      "type": "string",
      "description": "expand references resources."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualMachineScaleSetName",
    "virtualmachineIndex",
    "networkInterfaceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkInterface"
}
```
