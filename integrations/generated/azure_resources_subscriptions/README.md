# @datafire/azure_resources_subscriptions

Client library for SubscriptionClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_subscriptions
```
```js
let azure_resources_subscriptions = require('@datafire/azure_resources_subscriptions').create({
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

All resource groups and resources exist within subscriptions. These operation enable you get information about your subscriptions and tenants. A tenant is a dedicated instance of Azure Active Directory (Azure AD) for your organization.

## Actions

### Operations_List
Lists all of the available Microsoft.Resources REST API operations.


```js
azure_resources_subscriptions.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [OperationListResult](#operationlistresult)

### Subscriptions_List
Gets all subscriptions for a tenant.


```js
azure_resources_subscriptions.Subscriptions_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [SubscriptionListResult](#subscriptionlistresult)

### Subscriptions_Get
Gets details about a specified subscription.


```js
azure_resources_subscriptions.Subscriptions_Get({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [Subscription](#subscription)

### Subscriptions_ListLocations
This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list.


```js
azure_resources_subscriptions.Subscriptions_ListLocations({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [LocationListResult](#locationlistresult)

### Tenants_List
Gets the tenants for your account.


```js
azure_resources_subscriptions.Tenants_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [TenantListResult](#tenantlistresult)



## Definitions

### Location
* Location `object`: Location information.
  * displayName `string`: The display name of the location.
  * id `string`: The fully qualified ID of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus.
  * latitude `string`: The latitude of the location.
  * longitude `string`: The longitude of the location.
  * name `string`: The location name.
  * subscriptionId `string`: The subscription ID.

### LocationListResult
* LocationListResult `object`: Location list operation response.
  * value `array`: An array of locations.
    * items [Location](#location)

### ManagedByTenant
* ManagedByTenant `object`: Information about a tenant managing the subscription.
  * tenantId `string`: The tenant ID of the managing tenant. This is a GUID.

### Operation
* Operation `object`: Microsoft.Resources operation
  * display `object`: The object that represents the operation.
    * description `string`: Description of the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Resources
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Microsoft.Resources operations.
    * items [Operation](#operation)

### Subscription
* Subscription `object`: Subscription information.
  * authorizationSource `string`: The authorization source of the request. Valid values are one or more combinations of Legacy, RoleBased, Bypassed, Direct and Management. For example, 'Legacy, RoleBased'.
  * displayName `string`: The subscription display name.
  * id `string`: The fully qualified ID for the subscription. For example, /subscriptions/00000000-0000-0000-0000-000000000000.
  * managedByTenants `array`: An array containing the tenants managing the subscription.
    * items [ManagedByTenant](#managedbytenant)
  * state `string` (values: Enabled, Warned, PastDue, Disabled, Deleted): The subscription state. Possible values are Enabled, Warned, PastDue, Disabled, and Deleted.
  * subscriptionId `string`: The subscription ID.
  * subscriptionPolicies [SubscriptionPolicies](#subscriptionpolicies)
  * tenantId `string`: The subscription tenant ID.

### SubscriptionListResult
* SubscriptionListResult `object`: Subscription list operation response.
  * nextLink **required** `string`: The URL to get the next set of results.
  * value `array`: An array of subscriptions.
    * items [Subscription](#subscription)

### SubscriptionPolicies
* SubscriptionPolicies `object`: Subscription policies.
  * locationPlacementId `string`: The subscription location placement ID. The ID indicates which regions are visible for a subscription. For example, a subscription with a location placement Id of Public_2014-09-01 has access to Azure public regions.
  * quotaId `string`: The subscription quota ID.
  * spendingLimit `string` (values: On, Off, CurrentPeriodOff): The subscription spending limit.

### TenantIdDescription
* TenantIdDescription `object`: Tenant Id information.
  * id `string`: The fully qualified ID of the tenant. For example, /tenants/00000000-0000-0000-0000-000000000000.
  * tenantId `string`: The tenant ID. For example, 00000000-0000-0000-0000-000000000000.

### TenantListResult
* TenantListResult `object`: Tenant Ids information.
  * nextLink **required** `string`: The URL to use for getting the next set of results.
  * value `array`: An array of tenants.
    * items [TenantIdDescription](#tenantiddescription)


