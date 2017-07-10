# @datafire/azure_arm_cdn
Use these APIs to manage Azure CDN resources through the Azure Resource Manager. You must make sure that requests made to these resources are secure.

## Operation: CheckNameAvailability
Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "checkNameAvailabilityInput": {
      "$ref": "#/definitions/CheckNameAvailabilityInput"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "checkNameAvailabilityInput",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckNameAvailabilityOutput"
}
```
## Operation: EdgeNodes_List
Lists all the edge nodes of a CDN service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EdgenodeResult"
}
```
## Operation: ListOperations
Lists all of the available CDN REST API operations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationListResult"
}
```
## Operation: ListResourceUsage
Check the quota and actual usage of the CDN profiles under the given subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceUsageListResult"
}
```
## Operation: Profiles_List
Lists all of the CDN profiles within an Azure subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProfileListResult"
}
```
## Operation: Profiles_ListByResourceGroup
Lists all of the CDN profiles within a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProfileListResult"
}
```
## Operation: Profiles_Delete
Deletes an existing CDN profile with the specified parameters. Deleting a profile will result in the deletion of all of the sub-resources including endpoints, origins and custom domains.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Profiles_Get
Gets a CDN profile with the specified profile name under the specified subscription and resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: Profiles_Update
Updates an existing CDN profile with the specified profile name under the specified subscription and resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "profileUpdateParameters": {
      "$ref": "#/definitions/ProfileUpdateParameters"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "profileUpdateParameters",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: Profiles_Create
Creates a new CDN profile with a profile name under the specified subscription and resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "profile": {
      "$ref": "#/definitions/Profile"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "profile",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: Profiles_ListResourceUsage
Checks the quota and actual usage of endpoints under the given CDN profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceUsageListResult"
}
```
## Operation: Endpoints_ListByProfile
Lists existing CDN endpoints.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EndpointListResult"
}
```
## Operation: Endpoints_Delete
Deletes an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Endpoints_Get
Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Endpoint"
}
```
## Operation: Endpoints_Update
Updates an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile. Only tags and Origin HostHeader can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update custom domains, use the Update Custom Domain operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "endpointUpdateProperties": {
      "$ref": "#/definitions/EndpointUpdateParameters"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "endpointUpdateProperties",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Endpoint"
}
```
## Operation: Endpoints_Create
Creates a new CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "endpoint": {
      "$ref": "#/definitions/Endpoint"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "endpoint",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Endpoint"
}
```
## Operation: Endpoints_ListResourceUsage
Checks the quota and usage of geo filters and custom domains under the given endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceUsageListResult"
}
```
## Operation: CustomDomains_ListByEndpoint
Lists all of the existing custom domains within an endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDomainListResult"
}
```
## Operation: CustomDomains_Delete
Deletes an existing custom domain within an endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "customDomainName": {
      "type": "string",
      "description": "Name of the custom domain within an endpoint."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "customDomainName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: CustomDomains_Get
Gets an exisitng custom domain within an endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "customDomainName": {
      "type": "string",
      "description": "Name of the custom domain within an endpoint."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "customDomainName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDomain"
}
```
## Operation: CustomDomains_Create
Creates a new custom domain within an endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "customDomainName": {
      "type": "string",
      "description": "Name of the custom domain within an endpoint."
    },
    "customDomainProperties": {
      "$ref": "#/definitions/CustomDomainParameters"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "customDomainName",
    "customDomainProperties",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomDomain"
}
```
## Operation: CustomDomains_DisableCustomHttps
Disable https delivery of the custom domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "customDomainName": {
      "type": "string",
      "description": "Name of the custom domain within an endpoint."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "customDomainName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: CustomDomains_EnableCustomHttps
Enable https delivery of the custom domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "customDomainName": {
      "type": "string",
      "description": "Name of the custom domain within an endpoint."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "customDomainName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Endpoints_LoadContent
Pre-loads a content to CDN. Available for Verizon Profiles.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "contentFilePaths": {
      "$ref": "#/definitions/LoadParameters"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "contentFilePaths",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Origins_ListByEndpoint
Lists all of the existing origins within an endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OriginListResult"
}
```
## Operation: Origins_Get
Gets an existing origin within an endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "originName": {
      "type": "string",
      "description": "Name of the origin which is unique within the endpoint."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "originName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Origin"
}
```
## Operation: Origins_Update
Updates an existing origin within an endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "originName": {
      "type": "string",
      "description": "Name of the origin which is unique within the endpoint."
    },
    "originUpdateProperties": {
      "$ref": "#/definitions/OriginUpdateParameters"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "originName",
    "originUpdateProperties",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Origin"
}
```
## Operation: Endpoints_PurgeContent
Removes a content from CDN.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "contentFilePaths": {
      "$ref": "#/definitions/PurgeParameters"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "contentFilePaths",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Endpoints_Start
Starts an existing CDN endpoint that is on a stopped state.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Endpoint"
}
```
## Operation: Endpoints_Stop
Stops an existing running CDN endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Endpoint"
}
```
## Operation: Endpoints_ValidateCustomDomain
Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "endpointName": {
      "type": "string",
      "description": "Name of the endpoint under the profile which is unique globally."
    },
    "customDomainProperties": {
      "$ref": "#/definitions/ValidateCustomDomainInput"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "endpointName",
    "customDomainProperties",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ValidateCustomDomainOutput"
}
```
## Operation: Profiles_GenerateSsoUri
Generates a dynamic SSO URI used to sign in to the CDN supplemental portal. Supplemnetal portal is used to configure advanced feature capabilities that are not yet available in the Azure portal, such as core reports in a standard profile; rules engine, advanced HTTP reports, and real-time stats and alerts in a premium profile. The SSO URI changes approximately every 10 minutes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the Resource group within the Azure subscription.",
      "pattern": "^[-\\w\\._\\(\\)]+$",
      "maxLength": 90,
      "minLength": 1
    },
    "profileName": {
      "type": "string",
      "description": "Name of the CDN profile which is unique within the resource group."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. Current version is 2016-10-02."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "profileName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SsoUri"
}
```
