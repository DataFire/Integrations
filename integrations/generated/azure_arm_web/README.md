# @datafire/azure_arm_web
Use these APIs to manage Azure Websites resources through the Azure Resource Manager. All task operations conform to the HTTP/1.1 protocol specification and each operation returns an x-ms-request-id header that can be used to obtain information about the request. You must make sure that requests made to these resources are secure. For more information, see https://msdn.microsoft.com/en-us/library/azure/dn790557.aspx.

## Operation: Provider_GetPublishingUser
Gets publishing user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/User"
}
```
## Operation: Provider_UpdatePublishingUser
Updates publishing user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "requestMessage": {
      "$ref": "#/definitions/User"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "requestMessage",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: Provider_GetSourceControls
Gets the source controls available for Azure websites

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/SourceControlCollection"
}
```
## Operation: Provider_GetSourceControl
Gets source control token

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sourceControlType": {
      "type": "string",
      "description": "Type of source control"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "sourceControlType",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SourceControl"
}
```
## Operation: Provider_UpdateSourceControl
Updates source control token

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sourceControlType": {
      "type": "string",
      "description": "Type of source control"
    },
    "requestMessage": {
      "$ref": "#/definitions/SourceControl"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "sourceControlType",
    "requestMessage",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SourceControl"
}
```
## Operation: GlobalCertificateOrder_GetAllCertificateOrders
Lists all domains in a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/CertificateOrderCollection"
}
```
## Operation: GlobalCertificateOrder_ValidateCertificatePurchaseInformation
Validate certificate purchase information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "certificateOrder": {
      "$ref": "#/definitions/CertificateOrder"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "certificateOrder",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: GlobalDomainRegistration_CheckDomainAvailability
Checks if a domain is available for registration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "identifier": {
      "$ref": "#/definitions/NameIdentifier"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "identifier",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DomainAvailablilityCheckResult"
}
```
## Operation: GlobalDomainRegistration_GetAllDomains
Lists all domains in a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/DomainCollection"
}
```
## Operation: GlobalDomainRegistration_GetDomainControlCenterSsoRequest
Generates a single sign on request for domain management portal

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/DomainControlCenterSsoRequest"
}
```
## Operation: GlobalDomainRegistration_ListDomainRecommendations
Lists domain recommendations based on keywords

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/DomainRecommendationSearchParameters"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NameIdentifierCollection"
}
```
## Operation: TopLevelDomains_GetGetTopLevelDomains
Lists all top level domains supported for registration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/TopLevelDomainCollection"
}
```
## Operation: TopLevelDomains_GetTopLevelDomain
Gets details of a top level domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of the top level domain"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TopLevelDomain"
}
```
## Operation: TopLevelDomains_ListTopLevelDomainAgreements
Lists legal agreements that user needs to accept before purchasing domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of the top level domain"
    },
    "agreementOption": {
      "$ref": "#/definitions/TopLevelDomainAgreementOption"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "agreementOption",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TldLegalAgreementCollection"
}
```
## Operation: GlobalDomainRegistration_ValidateDomainPurchaseInformation
Validates domain registration information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domainRegistrationInput": {
      "$ref": "#/definitions/DomainRegistrationInput"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "domainRegistrationInput",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Global_GetAllCertificates
Get all certificates for a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/CertificateCollection"
}
```
## Operation: Global_CheckNameAvailability
Check if resource name is available

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "request": {
      "$ref": "#/definitions/ResourceNameAvailabilityRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "request",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceNameAvailability"
}
```
## Operation: Global_GetAllClassicMobileServices
Gets all mobile services for a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/ClassicMobileServiceCollection"
}
```
## Operation: Global_GetSubscriptionGeoRegions
Gets list of available geo regions

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string",
      "description": "Filter only to regions that support this sku"
    },
    "linuxWorkersEnabled": {
      "type": "boolean",
      "description": "Filter only to regions that support linux workers"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/GeoRegionCollection"
}
```
## Operation: Global_GetAllHostingEnvironments
Gets all hostingEnvironments (App Service Environment) for a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/HostingEnvironmentCollection"
}
```
## Operation: Global_IsHostingEnvironmentNameAvailable
Whether hosting environment name is available

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Hosting environment name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Global_IsHostingEnvironmentWithLegacyNameAvailable
Whether hosting environment name is available

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Hosting environment name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Global_GetAllManagedHostingEnvironments
Gets all managed hosting environments for a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/ManagedHostingEnvironmentCollection"
}
```
## Operation: Global_ListPremierAddOnOffers
List premier add on offers

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/Object"
}
```
## Operation: Global_GetSubscriptionPublishingCredentials
Gets publishing credentials for the subscription owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/User"
}
```
## Operation: Global_UpdateSubscriptionPublishingCredentials
Updates publishing credentials for the subscription owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "requestMessage": {
      "$ref": "#/definitions/User"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "requestMessage",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: Recommendations_GetRecommendationBySubscription
Gets a list of recommendations associated with the specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featured": {
      "type": "boolean",
      "description": "If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available"
    },
    "$filter": {
      "type": "string",
      "description": "Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification'"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "items": {
    "$ref": "#/definitions/Recommendation"
  },
  "type": "array"
}
```
## Operation: Global_GetAllServerFarms
Gets all App Service Plans for a subcription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "detailed": {
      "type": "boolean",
      "description": "False to return a subset of App Service Plan properties, true to return all of the properties.\r\n            Retrieval of all properties may increase the API latency."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/ServerFarmCollection"
}
```
## Operation: Global_GetAllSites
Gets all Web Apps for a subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/SiteCollection"
}
```
## Operation: GlobalResourceGroups_MoveResources


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "moveResourceEnvelope": {
      "$ref": "#/definitions/CsmMoveResourceEnvelope"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "moveResourceEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: CertificateOrders_GetCertificateOrders
Get certificate orders in a resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/CertificateOrderCollection"
}
```
## Operation: CertificateOrders_GetCertificates
List all certificates associated with a certificate order (only one certificate can be associated with an order at a time)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "certificateOrderName": {
      "type": "string",
      "description": "Certificate name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "certificateOrderName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CertificateOrderCertificateCollection"
}
```
## Operation: CertificateOrders_DeleteCertificate
Deletes the certificate associated with the certificate order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "certificateOrderName": {
      "type": "string",
      "description": "Certificate name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "certificateOrderName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: CertificateOrders_GetCertificate
Get certificate associated with the certificate order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "certificateOrderName": {
      "type": "string",
      "description": "Certificate name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "certificateOrderName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CertificateOrderCertificate"
}
```
## Operation: CertificateOrders_UpdateCertificate
Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "certificateOrderName": {
      "type": "string",
      "description": "Certificate name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "keyVaultCertificate": {
      "$ref": "#/definitions/CertificateOrderCertificate"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "certificateOrderName",
    "name",
    "keyVaultCertificate",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CertificateOrderCertificate"
}
```
## Operation: CertificateOrders_CreateOrUpdateCertificate
Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "certificateOrderName": {
      "type": "string",
      "description": "Certificate name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "keyVaultCertificate": {
      "$ref": "#/definitions/CertificateOrderCertificate"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "certificateOrderName",
    "name",
    "keyVaultCertificate",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CertificateOrderCertificate"
}
```
## Operation: CertificateOrders_DeleteCertificateOrder
Delete an existing certificate order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: CertificateOrders_GetCertificateOrder
Get a certificate order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CertificateOrder"
}
```
## Operation: CertificateOrders_UpdateCertificateOrder
Create or update a certificate purchase order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "certificateDistinguishedName": {
      "$ref": "#/definitions/CertificateOrder"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "certificateDistinguishedName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CertificateOrder"
}
```
## Operation: CertificateOrders_CreateOrUpdateCertificateOrder
Create or update a certificate purchase order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "certificateDistinguishedName": {
      "$ref": "#/definitions/CertificateOrder"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "certificateDistinguishedName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CertificateOrder"
}
```
## Operation: CertificateOrders_ReissueCertificateOrder
Reissue an existing certificate order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "reissueCertificateOrderRequest": {
      "$ref": "#/definitions/ReissueCertificateOrderRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "reissueCertificateOrderRequest",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: CertificateOrders_RenewCertificateOrder
Renew an existing certificate order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate name"
    },
    "renewCertificateOrderRequest": {
      "$ref": "#/definitions/RenewCertificateOrderRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "renewCertificateOrderRequest",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: CertificateOrders_ResendCertificateEmail
Resend certificate email

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate order name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: CertificateOrders_RetrieveCertificateActions
Retrieve the list of certificate actions

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate order name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CertificateOrderAction"
  },
  "type": "array"
}
```
## Operation: CertificateOrders_RetrieveCertificateEmailHistory
Retrive email history

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate order name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CertificateEmail"
  },
  "type": "array"
}
```
## Operation: CertificateOrders_VerifyDomainOwnership
Verify domain ownership for this certificate order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Azure resource group name"
    },
    "name": {
      "type": "string",
      "description": "Certificate order name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Domains_GetDomains
Lists domains under a resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/DomainCollection"
}
```
## Operation: Domains_DeleteDomain
Deletes a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "domainName": {
      "type": "string",
      "description": "Name of the domain"
    },
    "forceHardDeleteDomain": {
      "type": "boolean",
      "description": "If true then the domain will be deleted immediately instead of after 24 hours"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "domainName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Domains_GetDomain
Gets details of a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "domainName": {
      "type": "string",
      "description": "Name of the domain"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "domainName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Domain"
}
```
## Operation: Domains_UpdateDomain
Creates a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "&gt;Name of the resource group"
    },
    "domainName": {
      "type": "string",
      "description": "Name of the domain"
    },
    "domain": {
      "$ref": "#/definitions/Domain"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "domainName",
    "domain",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Domain"
}
```
## Operation: Domains_CreateOrUpdateDomain
Creates a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "&gt;Name of the resource group"
    },
    "domainName": {
      "type": "string",
      "description": "Name of the domain"
    },
    "domain": {
      "$ref": "#/definitions/Domain"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "domainName",
    "domain",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Domain"
}
```
## Operation: Domains_GetDomainOperation
Retrieves the latest status of a domain purchase operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "domainName": {
      "type": "string",
      "description": "Name of the domain"
    },
    "operationId": {
      "type": "string",
      "description": "Domain purchase operation Id"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "domainName",
    "operationId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Domain"
}
```
## Operation: Usage_GetUsage
Returns usage records for specified subscription and resource groups

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "environmentName": {
      "type": "string",
      "description": "Environment name"
    },
    "lastId": {
      "type": "string",
      "description": "Last marker that was returned from the batch"
    },
    "batchSize": {
      "type": "integer",
      "format": "int32",
      "description": "size of the batch to be returned."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "environmentName",
    "lastId",
    "batchSize",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Certificates_GetCertificates
Get certificates for a subscription in the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/CertificateCollection"
}
```
## Operation: Certificates_DeleteCertificate
Delete a certificate by name in a specificed subscription and resourcegroup.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the certificate to be deleted."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Certificates_GetCertificate
Get a certificate by certificate name for a subscription in the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the certificate."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Certificate"
}
```
## Operation: Certificates_UpdateCertificate
Creates or modifies an existing certificate.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the certificate."
    },
    "certificateEnvelope": {
      "$ref": "#/definitions/Certificate"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "certificateEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Certificate"
}
```
## Operation: Certificates_CreateOrUpdateCertificate
Creates or modifies an existing certificate.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the certificate."
    },
    "certificateEnvelope": {
      "$ref": "#/definitions/Certificate"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "certificateEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Certificate"
}
```
## Operation: ClassicMobileServices_GetClassicMobileServices
Get all mobile services in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/ClassicMobileServiceCollection"
}
```
## Operation: ClassicMobileServices_DeleteClassicMobileService
Delete a mobile service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of mobile service"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: ClassicMobileServices_GetClassicMobileService
Get a mobile service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of mobile service"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClassicMobileService"
}
```
## Operation: Certificates_GetCsrs
Gets the certificate signing requests for a subscription in the specified resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "items": {
    "$ref": "#/definitions/Csr"
  },
  "type": "array"
}
```
## Operation: Certificates_DeleteCsr
Delete the certificate signing request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the certificate signing request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Certificates_GetCsr
Gets a certificate signing request by certificate name for a subscription in the specified resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the certificate."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Csr"
}
```
## Operation: Certificates_UpdateCsr
Creates or modifies an existing certificate signing request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the certificate."
    },
    "csrEnvelope": {
      "$ref": "#/definitions/Csr"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "csrEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Csr"
}
```
## Operation: Certificates_CreateOrUpdateCsr
Creates or modifies an existing certificate signing request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the certificate."
    },
    "csrEnvelope": {
      "$ref": "#/definitions/Csr"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "csrEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Csr"
}
```
## Operation: Sites_GetDeletedSites
Gets deleted web apps in subscription

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "propertiesToInclude": {
      "type": "string",
      "description": "Additional web app properties included in the response"
    },
    "includeSiteTypes": {
      "type": "string",
      "description": "Types of apps included in the response"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/DeletedSiteCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironments
Get all hostingEnvironments (App Service Environments) in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/HostingEnvironmentCollection"
}
```
## Operation: HostingEnvironments_DeleteHostingEnvironment
Delete a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "forceDelete": {
      "type": "boolean",
      "description": "Delete even if the hostingEnvironment (App Service Environment) contains resources"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: HostingEnvironments_GetHostingEnvironment
Get properties of hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostingEnvironment"
}
```
## Operation: HostingEnvironments_CreateOrUpdateHostingEnvironment
Create or update a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "hostingEnvironmentEnvelope": {
      "$ref": "#/definitions/HostingEnvironment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "hostingEnvironmentEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostingEnvironment"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentCapacities
Get used, available, and total worker capacity for hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StampCapacityCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentVips
Get IP addresses assigned to the hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddressResponse"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentDiagnostics
Get diagnostic information for hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/HostingEnvironmentDiagnostics"
  },
  "type": "array"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentDiagnosticsItem
Get diagnostic information for hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "diagnosticsName": {
      "type": "string",
      "description": "Name of the diagnostics"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "diagnosticsName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostingEnvironmentDiagnostics"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentMetricDefinitions
Get global metric definitions of hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetricDefinition"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentMetrics
Get global metrics of hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "details": {
      "type": "boolean",
      "description": "Include instance details"
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceMetricCollection"
}
```
## Operation: HostingEnvironments_GetMultiRolePools
Get all multi role pools

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkerPoolCollection"
}
```
## Operation: HostingEnvironments_GetMultiRolePool
Get properties of a multiRool pool.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkerPool"
}
```
## Operation: HostingEnvironments_CreateOrUpdateMultiRolePool
Create or update a multiRole pool.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "multiRolePoolEnvelope": {
      "$ref": "#/definitions/WorkerPool"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "multiRolePoolEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkerPool"
}
```
## Operation: HostingEnvironments_GetMultiRolePoolInstanceMetricDefinitions
Get metric definitions for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "instance": {
      "type": "string",
      "description": "Name of instance in the multiRole pool&gt;"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "instance",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: HostingEnvironments_GetMultiRolePoolInstanceMetrics
Get metrics for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "instance": {
      "type": "string",
      "description": "Name of instance in the multiRole pool"
    },
    "details": {
      "type": "boolean",
      "description": "Include instance details"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "instance",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentMultiRoleMetricDefinitions
Get metric definitions for a multiRole pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetricDefinitionCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentMultiRoleMetrics
Get metrics for a multiRole pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "startTime": {
      "type": "string",
      "description": "Beginning time of metrics query"
    },
    "endTime": {
      "type": "string",
      "description": "End time of metrics query"
    },
    "timeGrain": {
      "type": "string",
      "description": "Time granularity of metrics query"
    },
    "details": {
      "type": "boolean",
      "description": "Include instance details"
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceMetricCollection"
}
```
## Operation: HostingEnvironments_GetMultiRolePoolSkus
Get available skus for scaling a multiRole pool.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SkuInfoCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentMultiRoleUsages
Get usages for a multiRole pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsageCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentOperations
List all currently running operations on the hostingEnvironment (App Service Environment)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentOperation
Get status of an operation on a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "operationId": {
      "type": "string",
      "description": "operation identifier GUID"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "operationId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: HostingEnvironments_RebootHostingEnvironment
Reboots all machines in a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: HostingEnvironments_ResumeHostingEnvironment
Resumes the hostingEnvironment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentServerFarms
Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServerFarmCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentSites
Get all sites on the hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "propertiesToInclude": {
      "type": "string",
      "description": "Comma separated list of site properties to include"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteCollection"
}
```
## Operation: HostingEnvironments_SuspendHostingEnvironment
Suspends the hostingEnvironment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentUsages
Get global usages of hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CsmUsageQuotaCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentWebHostingPlans
Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServerFarmCollection"
}
```
## Operation: HostingEnvironments_GetWorkerPools
Get all worker pools

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkerPoolCollection"
}
```
## Operation: HostingEnvironments_GetWorkerPool
Get properties of a worker pool.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "workerPoolName": {
      "type": "string",
      "description": "Name of worker pool"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "workerPoolName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkerPool"
}
```
## Operation: HostingEnvironments_CreateOrUpdateWorkerPool
Create or update a worker pool.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "workerPoolName": {
      "type": "string",
      "description": "Name of worker pool"
    },
    "workerPoolEnvelope": {
      "$ref": "#/definitions/WorkerPool"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "workerPoolName",
    "workerPoolEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkerPool"
}
```
## Operation: HostingEnvironments_GetWorkerPoolInstanceMetricDefinitions
Get metric definitions for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "workerPoolName": {
      "type": "string",
      "description": "Name of worker pool"
    },
    "instance": {
      "type": "string",
      "description": "Name of instance in the worker pool"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "workerPoolName",
    "instance",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: HostingEnvironments_GetWorkerPoolInstanceMetrics
Get metrics for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "workerPoolName": {
      "type": "string",
      "description": "Name of worker pool"
    },
    "instance": {
      "type": "string",
      "description": "Name of instance in the worker pool"
    },
    "details": {
      "type": "boolean",
      "description": "Include instance details"
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "workerPoolName",
    "instance",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentWebWorkerMetricDefinitions
Get metric definitions for a worker pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "workerPoolName": {
      "type": "string",
      "description": "Name of worker pool"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "workerPoolName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetricDefinitionCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentWebWorkerMetrics
Get metrics for a worker pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "workerPoolName": {
      "type": "string",
      "description": "Name of worker pool"
    },
    "details": {
      "type": "boolean",
      "description": "Include instance details"
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "workerPoolName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceMetricCollection"
}
```
## Operation: HostingEnvironments_GetWorkerPoolSkus
Get available skus for scaling a worker pool.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "workerPoolName": {
      "type": "string",
      "description": "Name of worker pool"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "workerPoolName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SkuInfoCollection"
}
```
## Operation: HostingEnvironments_GetHostingEnvironmentWebWorkerUsages
Get usages for a worker pool of a hostingEnvironment (App Service Environment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of hostingEnvironment (App Service Environment)"
    },
    "workerPoolName": {
      "type": "string",
      "description": "Name of worker pool"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "workerPoolName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsageCollection"
}
```
## Operation: ManagedHostingEnvironments_GetManagedHostingEnvironments
Get all managed hosting environments in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/HostingEnvironmentCollection"
}
```
## Operation: ManagedHostingEnvironments_DeleteManagedHostingEnvironment
Delete a managed hosting environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of managed hosting environment"
    },
    "forceDelete": {
      "type": "boolean",
      "description": "Delete even if the managed hosting environment contains resources"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: ManagedHostingEnvironments_GetManagedHostingEnvironment
Get properties of a managed hosting environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of managed hosting environment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ManagedHostingEnvironment"
}
```
## Operation: ManagedHostingEnvironments_CreateOrUpdateManagedHostingEnvironment
Create or update a managed hosting environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of managed hosting environment"
    },
    "ManagedHostingEnvironmentEnvelope": {
      "$ref": "#/definitions/HostingEnvironment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "ManagedHostingEnvironmentEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostingEnvironment"
}
```
## Operation: ManagedHostingEnvironments_GetManagedHostingEnvironmentVips
Get list of ip addresses assigned to a managed hosting environment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of managed hosting environment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddressResponse"
}
```
## Operation: ManagedHostingEnvironments_GetManagedHostingEnvironmentOperation
Get status of an operation on a managed hosting environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of managed hosting environment"
    },
    "operationId": {
      "type": "string",
      "description": "operation identifier GUID"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "operationId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: ManagedHostingEnvironments_GetManagedHostingEnvironmentServerFarms
Get all serverfarms (App Service Plans) on the managed hosting environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of managed hosting environment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServerFarmCollection"
}
```
## Operation: ManagedHostingEnvironments_GetManagedHostingEnvironmentSites
Get all sites on the managed hosting environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of managed hosting environment"
    },
    "propertiesToInclude": {
      "type": "string",
      "description": "Comma separated list of site properties to include"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteCollection"
}
```
## Operation: ManagedHostingEnvironments_GetManagedHostingEnvironmentWebHostingPlans
Get all serverfarms (App Service Plans) on the managed hosting environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of managed hosting environment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServerFarmCollection"
}
```
## Operation: ServerFarms_GetServerFarms
Gets collection of App Service Plans in a resource group for a given subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/ServerFarmCollection"
}
```
## Operation: ServerFarms_DeleteServerFarm
Deletes a App Service Plan

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: ServerFarms_GetServerFarm
Gets specified App Service Plan in a resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServerFarmWithRichSku"
}
```
## Operation: ServerFarms_CreateOrUpdateServerFarm
Creates or updates an App Service Plan

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "serverFarmEnvelope": {
      "$ref": "#/definitions/ServerFarmWithRichSku"
    },
    "allowPendingState": {
      "type": "boolean",
      "description": "OBSOLETE: If true, allow pending state for App Service Plan"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "serverFarmEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServerFarmWithRichSku"
}
```
## Operation: ServerFarms_GetServerFarmMetricDefintions
List of metrics that can be queried for an App Service Plan

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetricDefinitionCollection"
}
```
## Operation: ServerFarms_GetServerFarmMetrics
Queries for App Serice Plan metrics

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "details": {
      "type": "boolean",
      "description": "If true, metrics are broken down per App Service Plan instance"
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceMetricCollection"
}
```
## Operation: ServerFarms_GetServerFarmOperation
Gets a server farm operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of server farm"
    },
    "operationId": {
      "type": "string",
      "description": "Id of Server farm operation\"&gt;"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "operationId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServerFarmWithRichSku"
}
```
## Operation: ServerFarms_RestartSitesForServerFarm
Restarts web apps in a specified App Service Plan

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "softRestart": {
      "type": "boolean",
      "description": "Soft restart applies the configuration settings and restarts the apps if necessary. Hard restart always restarts and reprovisions the apps"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: ServerFarms_GetServerFarmSites
Gets list of Apps associated with an App Service Plan

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "$skipToken": {
      "type": "string",
      "description": "Skip to of web apps in a list. If specified, the resulting list will contain web apps starting from (including) the skipToken. Else, the resulting list contains web apps from the start of the list"
    },
    "$filter": {
      "type": "string",
      "description": "Supported filter: $filter=state eq running. Returns only web apps that are currently running"
    },
    "$top": {
      "type": "string",
      "description": "List page size. If specified, results are paged."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteCollection"
}
```
## Operation: ServerFarms_GetVnetsForServerFarm
Gets list of vnets associated with App Service Plan

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VnetInfo"
  },
  "type": "array"
}
```
## Operation: ServerFarms_GetVnetFromServerFarm
Gets a vnet associated with an App Service Plan

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "vnetName": {
      "type": "string",
      "description": "Name of virtual network"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetInfo"
}
```
## Operation: ServerFarms_GetServerFarmVnetGateway
Gets the vnet gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the App Service Plan"
    },
    "vnetName": {
      "type": "string",
      "description": "Name of the virtual network"
    },
    "gatewayName": {
      "type": "string",
      "description": "Name of the gateway. Only the 'primary' gateway is supported."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "gatewayName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetGateway"
}
```
## Operation: ServerFarms_UpdateServerFarmVnetGateway
Updates the vnet gateway

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group"
    },
    "name": {
      "type": "string",
      "description": "The name of the App Service Plan"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the virtual network"
    },
    "gatewayName": {
      "type": "string",
      "description": "The name of the gateway. Only 'primary' is supported."
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/VnetGateway"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "gatewayName",
    "connectionEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetGateway"
}
```
## Operation: ServerFarms_GetRoutesForVnet
Gets a list of all routes associated with a vnet, in an app service plan

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "vnetName": {
      "type": "string",
      "description": "Name of virtual network"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VnetRoute"
  },
  "type": "array"
}
```
## Operation: ServerFarms_DeleteVnetRoute
Deletes an existing route for a vnet in an app service plan.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "vnetName": {
      "type": "string",
      "description": "Name of virtual network"
    },
    "routeName": {
      "type": "string",
      "description": "Name of the virtual network route"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "routeName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: ServerFarms_GetRouteForVnet
Gets a specific route associated with a vnet, in an app service plan

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "vnetName": {
      "type": "string",
      "description": "Name of virtual network"
    },
    "routeName": {
      "type": "string",
      "description": "Name of the virtual network route"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "routeName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VnetRoute"
  },
  "type": "array"
}
```
## Operation: ServerFarms_UpdateVnetRoute
Creates a new route or updates an existing route for a vnet in an app service plan.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "vnetName": {
      "type": "string",
      "description": "Name of virtual network"
    },
    "routeName": {
      "type": "string",
      "description": "Name of the virtual network route"
    },
    "route": {
      "$ref": "#/definitions/VnetRoute"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "routeName",
    "route",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetRoute"
}
```
## Operation: ServerFarms_CreateOrUpdateVnetRoute
Creates a new route or updates an existing route for a vnet in an app service plan.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of App Service Plan"
    },
    "vnetName": {
      "type": "string",
      "description": "Name of virtual network"
    },
    "routeName": {
      "type": "string",
      "description": "Name of the virtual network route"
    },
    "route": {
      "$ref": "#/definitions/VnetRoute"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "routeName",
    "route",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetRoute"
}
```
## Operation: ServerFarms_RebootWorkerForServerFarm
Submit a reboot request for a worker machine in the specified server farm

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of server farm"
    },
    "workerName": {
      "type": "string",
      "description": "Name of worker machine, typically starts with RD"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "workerName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSites
Gets the web apps for a subscription in the specified resource group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "propertiesToInclude": {
      "type": "string",
      "description": "Additional web app properties included in the response"
    },
    "includeSiteTypes": {
      "type": "string",
      "description": "Types of apps included in the response"
    },
    "includeSlots": {
      "type": "boolean",
      "description": "Whether or not to include deployments slots in results"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
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
  "$ref": "#/definitions/SiteCollection"
}
```
## Operation: Sites_DeleteSite
Deletes a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "deleteMetrics": {
      "type": "string",
      "description": "If true, web app metrics are also deleted"
    },
    "deleteEmptyServerFarm": {
      "type": "string",
      "description": "If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted"
    },
    "skipDnsRegistration": {
      "type": "string",
      "description": "If true, DNS registration is skipped"
    },
    "deleteAllSlots": {
      "type": "string",
      "description": "If true, all slots associated with web app are also deleted"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSite
Get details of a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "propertiesToInclude": {
      "type": "string",
      "description": "Additional web app properties included in the response"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: Sites_CreateOrUpdateSite
Creates a new web app or modifies an existing web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the web app"
    },
    "siteEnvelope": {
      "$ref": "#/definitions/Site"
    },
    "skipDnsRegistration": {
      "type": "string",
      "description": "If true web app hostname is not registered with DNS on creation. This parameter is\r\n            only used for app creation"
    },
    "skipCustomDomainVerification": {
      "type": "string",
      "description": "If true, custom (non *.azurewebsites.net) domains associated with web app are not verified."
    },
    "forceDnsRegistration": {
      "type": "string",
      "description": "If true, web app hostname is force registered with DNS"
    },
    "ttlInSeconds": {
      "type": "string",
      "description": "Time to live in seconds for web app's default domain name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: Sites_ApplySlotConfigToProduction
Applies the configuration settings from the target slot onto the current slot

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slotSwapEntity": {
      "$ref": "#/definitions/CsmSlotEntity"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slotSwapEntity",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_BackupSite
Creates web app backup

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "request": {
      "$ref": "#/definitions/BackupRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "request",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItem"
}
```
## Operation: Sites_ListSiteBackups
Lists all available backups for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItemCollection"
}
```
## Operation: Sites_DiscoverSiteRestore
Discovers existing web app backups that can be restored

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "request": {
      "$ref": "#/definitions/RestoreRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "request",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestoreRequest"
}
```
## Operation: Sites_DeleteBackup
Deletes a backup from Azure Storage

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "backupId": {
      "type": "string",
      "description": "Id of backup"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "backupId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItem"
}
```
## Operation: Sites_GetSiteBackupStatus
Gets status of a web app backup that may be in progress.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "backupId": {
      "type": "string",
      "description": "Id of backup"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "backupId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItem"
}
```
## Operation: Sites_GetSiteBackupStatusSecrets
Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "backupId": {
      "type": "string",
      "description": "Id of backup"
    },
    "request": {
      "$ref": "#/definitions/BackupRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "backupId",
    "request",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItem"
}
```
## Operation: Sites_RestoreSite
Restores a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "backupId": {
      "type": "string",
      "description": "Id of backup to restore"
    },
    "request": {
      "$ref": "#/definitions/RestoreRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "backupId",
    "request",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestoreResponse"
}
```
## Operation: Sites_UpdateSiteAppSettings
Updates the application settings of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "appSettings": {
      "$ref": "#/definitions/StringDictionary"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "appSettings",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StringDictionary"
}
```
## Operation: Sites_ListSiteAppSettings
Gets the application settings of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StringDictionary"
}
```
## Operation: Sites_UpdateSiteAuthSettings
Updates the Authentication / Authorization settings associated with web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteAuthSettings": {
      "$ref": "#/definitions/SiteAuthSettings"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteAuthSettings",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteAuthSettings"
}
```
## Operation: Sites_ListSiteAuthSettings
Gets the Authentication / Authorization settings associated with web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteAuthSettings"
}
```
## Operation: Sites_UpdateSiteBackupConfiguration
Updates backup configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "request": {
      "$ref": "#/definitions/BackupRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "request",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupRequest"
}
```
## Operation: Sites_GetSiteBackupConfiguration
Gets the backup configuration for a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupRequest"
}
```
## Operation: Sites_UpdateSiteConnectionStrings
Updates the connection strings associated with web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "connectionStrings": {
      "$ref": "#/definitions/ConnectionStringDictionary"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "connectionStrings",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionStringDictionary"
}
```
## Operation: Sites_ListSiteConnectionStrings
Gets the connection strings associated with web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionStringDictionary"
}
```
## Operation: Sites_GetSiteLogsConfig
Gets the web app logs configuration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteLogsConfig"
}
```
## Operation: Sites_UpdateSiteLogsConfig
Updates the meta data for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteLogsConfig": {
      "$ref": "#/definitions/SiteLogsConfig"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteLogsConfig",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteLogsConfig"
}
```
## Operation: Sites_UpdateSiteMetadata
Updates the meta data for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "metadata": {
      "$ref": "#/definitions/StringDictionary"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "metadata",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StringDictionary"
}
```
## Operation: Sites_ListSiteMetadata
Gets the web app meta data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StringDictionary"
}
```
## Operation: Sites_ListSitePublishingCredentials
Gets the web app publishing credentials

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: Sites_GetSlotConfigNames
Gets the names of application settings and connection string that remain with the slot during swap operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SlotConfigNamesResource"
}
```
## Operation: Sites_UpdateSlotConfigNames
Updates the names of application settings and connection string that remain with the slot during swap operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slotConfigNames": {
      "$ref": "#/definitions/SlotConfigNamesResource"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slotConfigNames",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SlotConfigNamesResource"
}
```
## Operation: Sites_GetSiteConfig
Gets the configuration of the web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteConfig"
}
```
## Operation: Sites_UpdateSiteConfig
Update the configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteConfig": {
      "$ref": "#/definitions/SiteConfig"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteConfig",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteConfig"
}
```
## Operation: Sites_CreateOrUpdateSiteConfig
Update the configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteConfig": {
      "$ref": "#/definitions/SiteConfig"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteConfig",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteConfig"
}
```
## Operation: Sites_GetDeployments
List deployments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeploymentCollection"
}
```
## Operation: Sites_DeleteDeployment
Delete the deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetDeployment
Get the deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: Sites_CreateDeployment
Create a deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "deployment": {
      "$ref": "#/definitions/Deployment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "deployment",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: Sites_GetSiteHostNameBindings
Get web app hostname bindings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostNameBindingCollection"
}
```
## Operation: Sites_DeleteSiteHostNameBinding
Deletes a host name binding

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "hostName": {
      "type": "string",
      "description": "Name of host"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "hostName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteHostNameBinding
Get web app binding for a hostname

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "hostName": {
      "type": "string",
      "description": "Name of host"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "hostName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostNameBinding"
}
```
## Operation: Sites_CreateOrUpdateSiteHostNameBinding
Creates a web app hostname binding

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "hostName": {
      "type": "string",
      "description": "Name of host"
    },
    "hostNameBinding": {
      "$ref": "#/definitions/HostNameBinding"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "hostName",
    "hostNameBinding",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostNameBinding"
}
```
## Operation: Sites_ListSiteRelayServiceConnections
Retrieves all Biztalk Hybrid Connections associated with this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayServiceConnectionEntity"
}
```
## Operation: Sites_DeleteSiteRelayServiceConnection
Removes the association to a Biztalk Hybrid Connection, identified by its entity name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "entityName": {
      "type": "string",
      "description": "The name by which the Hybrid Connection is identified"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "entityName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteRelayServiceConnection
Retrieves a Biztalk Hybrid Connection identified by its entity name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "entityName": {
      "type": "string",
      "description": "The name by which the Hybrid Connection is identified"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "entityName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayServiceConnectionEntity"
}
```
## Operation: Sites_UpdateSiteRelayServiceConnection
Creates a new association to a Biztalk Hybrid Connection, or updates an existing one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "entityName": {
      "type": "string",
      "description": "The name by which the Hybrid Connection is identified"
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/RelayServiceConnectionEntity"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "entityName",
    "connectionEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayServiceConnectionEntity"
}
```
## Operation: Sites_CreateOrUpdateSiteRelayServiceConnection
Creates a new association to a Biztalk Hybrid Connection, or updates an existing one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "entityName": {
      "type": "string",
      "description": "The name by which the Hybrid Connection is identified"
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/RelayServiceConnectionEntity"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "entityName",
    "connectionEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayServiceConnectionEntity"
}
```
## Operation: Sites_GetSiteInstanceIdentifiers
Gets all instance of a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteInstanceCollection"
}
```
## Operation: Sites_GetInstanceDeployments
List deployments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "instanceId": {
      "type": "string",
      "description": "Id of web app instance"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "instanceId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeploymentCollection"
}
```
## Operation: Sites_DeleteInstanceDeployment
Delete the deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "instanceId": {
      "type": "string",
      "description": "Id of web app instance"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "instanceId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetInstanceDeployment
Get the deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "instanceId": {
      "type": "string",
      "description": "Id of web app instance"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "instanceId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: Sites_CreateInstanceDeployment
Create a deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "instanceId": {
      "type": "string",
      "description": "Id of web app instance"
    },
    "deployment": {
      "$ref": "#/definitions/Deployment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "instanceId",
    "deployment",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: Sites_IsSiteCloneable
Creates a new web app or modifies an existing web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteCloneability"
}
```
## Operation: Sites_GetSiteMetricDefinitions
Gets metric definitions for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetricDefinitionCollection"
}
```
## Operation: Sites_GetSiteMetrics
Gets metrics for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "details": {
      "type": "boolean",
      "description": "If true, metric details are included in response"
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceMetricCollection"
}
```
## Operation: Sites_GetSiteNetworkFeatures
Retrieves a view of all network features in use on this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "view": {
      "type": "string",
      "description": "The type of view. This can either be \"summary\" or \"detailed\"."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "view",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkFeatures"
}
```
## Operation: Sites_GenerateNewSitePublishingPassword
Generates new random app publishing password

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteOperation
Gets the operation for a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "operationId": {
      "type": "string",
      "description": "Id of an operation"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "operationId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_ListSitePremierAddOns


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_DeleteSitePremierAddOn


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "premierAddOnName": {
      "type": "string"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "premierAddOnName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSitePremierAddOn


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "premierAddOnName": {
      "type": "string"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "premierAddOnName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_AddSitePremierAddOn


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "premierAddOnName": {
      "type": "string"
    },
    "premierAddOn": {
      "$ref": "#/definitions/PremierAddOnRequest"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "premierAddOnName",
    "premierAddOn",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_ListSitePublishingProfileXml
Gets the publishing profile for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "options": {
      "$ref": "#/definitions/CsmPublishingProfileOptions"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "options",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "type": "file"
}
```
## Operation: Sites_RecoverSite
Recovers a deleted web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "recoveryEntity": {
      "$ref": "#/definitions/CsmSiteRecoveryEntity"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "recoveryEntity",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: Sites_ResetProductionSlotConfig
Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_RestartSite
Restarts web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "softRestart": {
      "type": "boolean",
      "description": "Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app"
    },
    "synchronous": {
      "type": "boolean",
      "description": "If true then the API will block until the app has been restarted"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteSlots
Gets all the slots for a web apps

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "propertiesToInclude": {
      "type": "string",
      "description": "List of app properties to include in the response"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteCollection"
}
```
## Operation: Sites_DeleteSiteSlot
Deletes a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "deleteMetrics": {
      "type": "string",
      "description": "If true, web app metrics are also deleted"
    },
    "deleteEmptyServerFarm": {
      "type": "string",
      "description": "If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted"
    },
    "skipDnsRegistration": {
      "type": "string",
      "description": "If true, DNS registration is skipped"
    },
    "deleteAllSlots": {
      "type": "string",
      "description": "If true, all slots associated with web app are also deleted"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteSlot
Get details of a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "propertiesToInclude": {
      "type": "string",
      "description": "Additional web app properties included in the response"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: Sites_CreateOrUpdateSiteSlot
Creates a new web app or modifies an existing web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the web app"
    },
    "siteEnvelope": {
      "$ref": "#/definitions/Site"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "skipDnsRegistration": {
      "type": "string",
      "description": "If true web app hostname is not registered with DNS on creation. This parameter is\r\n            only used for app creation"
    },
    "skipCustomDomainVerification": {
      "type": "string",
      "description": "If true, custom (non *.azurewebsites.net) domains associated with web app are not verified."
    },
    "forceDnsRegistration": {
      "type": "string",
      "description": "If true, web app hostname is force registered with DNS"
    },
    "ttlInSeconds": {
      "type": "string",
      "description": "Time to live in seconds for web app's default domain name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteEnvelope",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: Sites_ApplySlotConfigSlot
Applies the configuration settings from the target slot onto the current slot

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slotSwapEntity": {
      "$ref": "#/definitions/CsmSlotEntity"
    },
    "slot": {
      "type": "string",
      "description": "Name of the source slot. Settings from the target slot will be applied onto this slot"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slotSwapEntity",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_BackupSiteSlot
Creates web app backup

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "request": {
      "$ref": "#/definitions/BackupRequest"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "request",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItem"
}
```
## Operation: Sites_ListSiteBackupsSlot
Lists all available backups for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItemCollection"
}
```
## Operation: Sites_DiscoverSiteRestoreSlot
Discovers existing web app backups that can be restored

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "request": {
      "$ref": "#/definitions/RestoreRequest"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "request",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestoreRequest"
}
```
## Operation: Sites_DeleteBackupSlot
Deletes a backup from Azure Storage

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "backupId": {
      "type": "string",
      "description": "Id of backup"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "backupId",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItem"
}
```
## Operation: Sites_GetSiteBackupStatusSlot
Gets status of a web app backup that may be in progress.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "backupId": {
      "type": "string",
      "description": "Id of backup"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "backupId",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItem"
}
```
## Operation: Sites_GetSiteBackupStatusSecretsSlot
Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "backupId": {
      "type": "string",
      "description": "Id of backup"
    },
    "request": {
      "$ref": "#/definitions/BackupRequest"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "backupId",
    "request",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupItem"
}
```
## Operation: Sites_RestoreSiteSlot
Restores a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "backupId": {
      "type": "string",
      "description": "Id of backup to restore"
    },
    "request": {
      "$ref": "#/definitions/RestoreRequest"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "backupId",
    "request",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestoreResponse"
}
```
## Operation: Sites_UpdateSiteAppSettingsSlot
Updates the application settings of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "appSettings": {
      "$ref": "#/definitions/StringDictionary"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "appSettings",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StringDictionary"
}
```
## Operation: Sites_ListSiteAppSettingsSlot
Gets the application settings of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StringDictionary"
}
```
## Operation: Sites_UpdateSiteAuthSettingsSlot
Updates the Authentication / Authorization settings associated with web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteAuthSettings": {
      "$ref": "#/definitions/SiteAuthSettings"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteAuthSettings",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteAuthSettings"
}
```
## Operation: Sites_ListSiteAuthSettingsSlot
Gets the Authentication / Authorization settings associated with web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteAuthSettings"
}
```
## Operation: Sites_UpdateSiteBackupConfigurationSlot
Updates backup configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "request": {
      "$ref": "#/definitions/BackupRequest"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "request",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupRequest"
}
```
## Operation: Sites_GetSiteBackupConfigurationSlot
Gets the backup configuration for a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupRequest"
}
```
## Operation: Sites_UpdateSiteConnectionStringsSlot
Updates the connection strings associated with web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "connectionStrings": {
      "$ref": "#/definitions/ConnectionStringDictionary"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "connectionStrings",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionStringDictionary"
}
```
## Operation: Sites_ListSiteConnectionStringsSlot
Gets the connection strings associated with web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConnectionStringDictionary"
}
```
## Operation: Sites_GetSiteLogsConfigSlot
Gets the web app logs configuration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteLogsConfig"
}
```
## Operation: Sites_UpdateSiteLogsConfigSlot
Updates the meta data for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteLogsConfig": {
      "$ref": "#/definitions/SiteLogsConfig"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteLogsConfig",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteLogsConfig"
}
```
## Operation: Sites_UpdateSiteMetadataSlot
Updates the meta data for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "metadata": {
      "$ref": "#/definitions/StringDictionary"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "metadata",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StringDictionary"
}
```
## Operation: Sites_ListSiteMetadataSlot
Gets the web app meta data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StringDictionary"
}
```
## Operation: Sites_ListSitePublishingCredentialsSlot
Gets the web app publishing credentials

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: Sites_GetSiteConfigSlot
Gets the configuration of the web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteConfig"
}
```
## Operation: Sites_UpdateSiteConfigSlot
Update the configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteConfig": {
      "$ref": "#/definitions/SiteConfig"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteConfig",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteConfig"
}
```
## Operation: Sites_CreateOrUpdateSiteConfigSlot
Update the configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteConfig": {
      "$ref": "#/definitions/SiteConfig"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteConfig",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteConfig"
}
```
## Operation: Sites_GetDeploymentsSlot
List deployments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeploymentCollection"
}
```
## Operation: Sites_DeleteDeploymentSlot
Delete the deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetDeploymentSlot
Get the deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: Sites_CreateDeploymentSlot
Create a deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "deployment": {
      "$ref": "#/definitions/Deployment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "slot",
    "deployment",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: Sites_GetSiteHostNameBindingsSlot
Get web app hostname bindings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostNameBindingCollection"
}
```
## Operation: Sites_DeleteSiteHostNameBindingSlot
Deletes a host name binding

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "hostName": {
      "type": "string",
      "description": "Name of host"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "hostName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteHostNameBindingSlot
Get web app binding for a hostname

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "hostName": {
      "type": "string",
      "description": "Name of host"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "hostName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostNameBinding"
}
```
## Operation: Sites_CreateOrUpdateSiteHostNameBindingSlot
Creates a web app hostname binding

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "hostName": {
      "type": "string",
      "description": "Name of host"
    },
    "hostNameBinding": {
      "$ref": "#/definitions/HostNameBinding"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "hostName",
    "hostNameBinding",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostNameBinding"
}
```
## Operation: Sites_ListSiteRelayServiceConnectionsSlot
Retrieves all Biztalk Hybrid Connections associated with this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for the web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayServiceConnectionEntity"
}
```
## Operation: Sites_DeleteSiteRelayServiceConnectionSlot
Removes the association to a Biztalk Hybrid Connection, identified by its entity name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "entityName": {
      "type": "string",
      "description": "The name by which the Hybrid Connection is identified"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for the web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "entityName",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteRelayServiceConnectionSlot
Retrieves a Biztalk Hybrid Connection identified by its entity name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "entityName": {
      "type": "string",
      "description": "The name by which the Hybrid Connection is identified"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for the web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "entityName",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayServiceConnectionEntity"
}
```
## Operation: Sites_UpdateSiteRelayServiceConnectionSlot
Creates a new association to a Biztalk Hybrid Connection, or updates an existing one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "entityName": {
      "type": "string",
      "description": "The name by which the Hybrid Connection is identified"
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/RelayServiceConnectionEntity"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for the web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "entityName",
    "connectionEnvelope",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayServiceConnectionEntity"
}
```
## Operation: Sites_CreateOrUpdateSiteRelayServiceConnectionSlot
Creates a new association to a Biztalk Hybrid Connection, or updates an existing one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "entityName": {
      "type": "string",
      "description": "The name by which the Hybrid Connection is identified"
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/RelayServiceConnectionEntity"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for the web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "entityName",
    "connectionEnvelope",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RelayServiceConnectionEntity"
}
```
## Operation: Sites_GetSiteInstanceIdentifiersSlot
Gets all instance of a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteInstanceCollection"
}
```
## Operation: Sites_GetInstanceDeploymentsSlot
List deployments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "instanceId": {
      "type": "string",
      "description": "Id of web app instance"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "instanceId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeploymentCollection"
}
```
## Operation: Sites_DeleteInstanceDeploymentSlot
Delete the deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "instanceId": {
      "type": "string",
      "description": "Id of web app instance"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "slot",
    "instanceId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetInstanceDeploymentSlot
Get the deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "instanceId": {
      "type": "string",
      "description": "Id of web app instance"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "slot",
    "instanceId",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: Sites_CreateInstanceDeploymentSlot
Create a deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "id": {
      "type": "string",
      "description": "Id of the deployment"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "instanceId": {
      "type": "string",
      "description": "Id of web app instance"
    },
    "deployment": {
      "$ref": "#/definitions/Deployment"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "id",
    "slot",
    "instanceId",
    "deployment",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: Sites_IsSiteCloneableSlot
Creates a new web app or modifies an existing web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of the web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteCloneability"
}
```
## Operation: Sites_GetSiteMetricDefinitionsSlot
Gets metric definitions for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetricDefinitionCollection"
}
```
## Operation: Sites_GetSiteMetricsSlot
Gets metrics for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "details": {
      "type": "boolean",
      "description": "If true, metric details are included in response"
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceMetricCollection"
}
```
## Operation: Sites_GetSiteNetworkFeaturesSlot
Retrieves a view of all network features in use on this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "view": {
      "type": "string",
      "description": "The type of view. This can either be \"summary\" or \"detailed\"."
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for this web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "view",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NetworkFeatures"
}
```
## Operation: Sites_GenerateNewSitePublishingPasswordSlot
Generates new random app publishing password

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteOperationSlot
Gets the operation for a web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "operationId": {
      "type": "string",
      "description": "Id of an operation"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "operationId",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_ListSitePremierAddOnsSlot


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "slot": {
      "type": "string"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_DeleteSitePremierAddOnSlot


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "premierAddOnName": {
      "type": "string"
    },
    "slot": {
      "type": "string"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "premierAddOnName",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSitePremierAddOnSlot


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "premierAddOnName": {
      "type": "string"
    },
    "slot": {
      "type": "string"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "premierAddOnName",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_AddSitePremierAddOnSlot


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "premierAddOnName": {
      "type": "string"
    },
    "premierAddOn": {
      "$ref": "#/definitions/PremierAddOnRequest"
    },
    "slot": {
      "type": "string"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "premierAddOnName",
    "premierAddOn",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_ListSitePublishingProfileXmlSlot
Gets the publishing profile for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "options": {
      "$ref": "#/definitions/CsmPublishingProfileOptions"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "options",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "type": "file"
}
```
## Operation: Sites_RecoverSiteSlot
Recovers a deleted web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "recoveryEntity": {
      "$ref": "#/definitions/CsmSiteRecoveryEntity"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "recoveryEntity",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: Sites_ResetSlotConfigSlot
Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_RestartSiteSlot
Restarts web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "softRestart": {
      "type": "boolean",
      "description": "Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app"
    },
    "synchronous": {
      "type": "boolean",
      "description": "If true then the API will block until the app has been restarted"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSlotsDifferencesSlot
Get the difference in configuration settings between two web app slots

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slotSwapEntity": {
      "$ref": "#/definitions/CsmSlotEntity"
    },
    "slot": {
      "type": "string",
      "description": "Name of the source slot"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slotSwapEntity",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SlotDifferenceCollection"
}
```
## Operation: Sites_SwapSlotsSlot
Swaps web app slots

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slotSwapEntity": {
      "$ref": "#/definitions/CsmSlotEntity"
    },
    "slot": {
      "type": "string",
      "description": "Name of source slot for the swap"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slotSwapEntity",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteSnapshotsSlot
Returns all Snapshots to the user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Webspace"
    },
    "name": {
      "type": "string",
      "description": "Website Name"
    },
    "slot": {
      "type": "string",
      "description": "Website Slot"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_DeleteSiteSourceControlSlot
Delete source control configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteSourceControlSlot
Get the source control configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteSourceControl"
}
```
## Operation: Sites_UpdateSiteSourceControlSlot
Update the source control configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteSourceControl": {
      "$ref": "#/definitions/SiteSourceControl"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteSourceControl",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteSourceControl"
}
```
## Operation: Sites_CreateOrUpdateSiteSourceControlSlot
Update the source control configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteSourceControl": {
      "$ref": "#/definitions/SiteSourceControl"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteSourceControl",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteSourceControl"
}
```
## Operation: Sites_StartSiteSlot
Starts web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_StopSiteSlot
Stops web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_SyncSiteRepositorySlot


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "slot": {
      "type": "string"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteUsagesSlot
Gets the quota usage numbers for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slot": {
      "type": "string",
      "description": "Name of web app slot. If not specified then will default to production slot."
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CsmUsageQuotaCollection"
}
```
## Operation: Sites_GetSiteVNETConnectionsSlot
Retrieves a list of all Virtual Network Connections associated with this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for this web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VnetInfo"
  },
  "type": "array"
}
```
## Operation: Sites_DeleteSiteVNETConnectionSlot
Removes the specified Virtual Network Connection association from this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for this web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteVNETConnectionSlot
Retrieves a specific Virtual Network Connection associated with this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for this web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetInfo"
}
```
## Operation: Sites_UpdateSiteVNETConnectionSlot
Adds a Virtual Network Connection or updates it's properties.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/VnetInfo"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for this web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "connectionEnvelope",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetInfo"
}
```
## Operation: Sites_CreateOrUpdateSiteVNETConnectionSlot
Adds a Virtual Network Connection or updates it's properties.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/VnetInfo"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for this web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "connectionEnvelope",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetInfo"
}
```
## Operation: Sites_GetSiteVnetGatewaySlot
Retrieves a Virtual Network connection gateway associated with this web app and virtual network.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "gatewayName": {
      "type": "string",
      "description": "The name of the gateway. The only gateway that exists presently is \"primary\""
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for this web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "gatewayName",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_UpdateSiteVNETConnectionGatewaySlot
Updates the Virtual Network Gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "gatewayName": {
      "type": "string",
      "description": "The name of the gateway. The only gateway that exists presently is \"primary\""
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/VnetGateway"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for this web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "gatewayName",
    "connectionEnvelope",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetGateway"
}
```
## Operation: Sites_CreateOrUpdateSiteVNETConnectionGatewaySlot
Updates the Virtual Network Gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "gatewayName": {
      "type": "string",
      "description": "The name of the gateway. The only gateway that exists presently is \"primary\""
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/VnetGateway"
    },
    "slot": {
      "type": "string",
      "description": "The name of the slot for this web app."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "gatewayName",
    "connectionEnvelope",
    "slot",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetGateway"
}
```
## Operation: Sites_GetSlotsDifferencesFromProduction
Get the difference in configuration settings between two web app slots

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slotSwapEntity": {
      "$ref": "#/definitions/CsmSlotEntity"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slotSwapEntity",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SlotDifferenceCollection"
}
```
## Operation: Sites_SwapSlotWithProduction
Swaps web app slots

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "slotSwapEntity": {
      "$ref": "#/definitions/CsmSlotEntity"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "slotSwapEntity",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteSnapshots
Returns all Snapshots to the user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Webspace"
    },
    "name": {
      "type": "string",
      "description": "Website Name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_DeleteSiteSourceControl
Delete source control configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteSourceControl
Get the source control configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteSourceControl"
}
```
## Operation: Sites_UpdateSiteSourceControl
Update the source control configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteSourceControl": {
      "$ref": "#/definitions/SiteSourceControl"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteSourceControl",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteSourceControl"
}
```
## Operation: Sites_CreateOrUpdateSiteSourceControl
Update the source control configuration of web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "siteSourceControl": {
      "$ref": "#/definitions/SiteSourceControl"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "siteSourceControl",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SiteSourceControl"
}
```
## Operation: Sites_StartSite
Starts web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_StopSite
Stops web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_SyncSiteRepository


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteUsages
Gets the quota usage numbers for web app

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of resource group"
    },
    "name": {
      "type": "string",
      "description": "Name of web app"
    },
    "$filter": {
      "type": "string",
      "description": "Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CsmUsageQuotaCollection"
}
```
## Operation: Sites_GetSiteVNETConnections
Retrieves a list of all Virtual Network Connections associated with this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VnetInfo"
  },
  "type": "array"
}
```
## Operation: Sites_DeleteSiteVNETConnection
Removes the specified Virtual Network Connection association from this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_GetSiteVNETConnection
Retrieves a specific Virtual Network Connection associated with this web app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetInfo"
}
```
## Operation: Sites_UpdateSiteVNETConnection
Adds a Virtual Network Connection or updates it's properties.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/VnetInfo"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "connectionEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetInfo"
}
```
## Operation: Sites_CreateOrUpdateSiteVNETConnection
Adds a Virtual Network Connection or updates it's properties.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/VnetInfo"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "connectionEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetInfo"
}
```
## Operation: Sites_GetSiteVnetGateway
Retrieves a Virtual Network connection gateway associated with this web app and virtual network.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "gatewayName": {
      "type": "string",
      "description": "The name of the gateway. The only gateway that exists presently is \"primary\""
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "gatewayName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Sites_UpdateSiteVNETConnectionGateway
Updates the Virtual Network Gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "gatewayName": {
      "type": "string",
      "description": "The name of the gateway. The only gateway that exists presently is \"primary\""
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/VnetGateway"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "gatewayName",
    "connectionEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetGateway"
}
```
## Operation: Sites_CreateOrUpdateSiteVNETConnectionGateway
Updates the Virtual Network Gateway.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name"
    },
    "name": {
      "type": "string",
      "description": "The name of the web app"
    },
    "vnetName": {
      "type": "string",
      "description": "The name of the Virtual Network"
    },
    "gatewayName": {
      "type": "string",
      "description": "The name of the gateway. The only gateway that exists presently is \"primary\""
    },
    "connectionEnvelope": {
      "$ref": "#/definitions/VnetGateway"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "vnetName",
    "gatewayName",
    "connectionEnvelope",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VnetGateway"
}
```
## Operation: Recommendations_GetRecommendationHistoryForSite
Gets the list of past recommendations optionally specified by the time range.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name"
    },
    "siteName": {
      "type": "string",
      "description": "Site name"
    },
    "startTime": {
      "type": "string",
      "description": "The start time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z'"
    },
    "endTime": {
      "type": "string",
      "description": "The end time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z'"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "siteName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Recommendation"
  },
  "type": "array"
}
```
## Operation: Recommendations_GetRecommendedRulesForSite
Gets a list of recommendations associated with the specified web site.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name"
    },
    "siteName": {
      "type": "string",
      "description": "Site name"
    },
    "featured": {
      "type": "boolean",
      "description": "If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available"
    },
    "siteSku": {
      "type": "string",
      "description": "The name of site SKU."
    },
    "numSlots": {
      "type": "integer",
      "format": "int32",
      "description": "The number of site slots associated to the site"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "siteName",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Recommendation"
  },
  "type": "array"
}
```
## Operation: Recommendations_GetRuleDetailsBySiteName
Gets the detailed properties of the recommendation object for the specified web site.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Resource group name"
    },
    "siteName": {
      "type": "string",
      "description": "Site name"
    },
    "name": {
      "type": "string",
      "description": "Recommendation rule name"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription Id"
    },
    "api-version": {
      "type": "string",
      "description": "API Version"
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "siteName",
    "name",
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RecommendationRule"
}
```
