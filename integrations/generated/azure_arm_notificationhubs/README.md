# @datafire/azure_arm_notificationhubs

Client library for NotificationHubsManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_notificationhubs
```

```js
let datafire = require('datafire');
let azure_arm_notificationhubs = require('@datafire/azure_arm_notificationhubs').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_notificationhubs: account,
  }
})

azure_arm_notificationhubs.Namespaces_CheckAvailability({}, context).then(data => {
  console.log(data);
})
```

## Description
Azure NotificationHub client

## Actions
### Namespaces_CheckAvailability
Checks the availability of the given service namespace across all Azure subscriptions. This is useful because the domain name is created based on the service namespace name.


```js
azure_arm_notificationhubs.Namespaces_CheckAvailability({
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* parameters (undefined) **required** - Parameters supplied to the Check Name Availability for Namespace and NotificationHubs.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListAll
Lists all the available namespaces within the subscription irrespective of the resourceGroups.


```js
azure_arm_notificationhubs.Namespaces_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_List
Lists the available namespaces within a resourceGroup.


```js
azure_arm_notificationhubs.Namespaces_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group. If resourceGroupName value is null the method lists all the namespaces within subscription
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_Delete
Deletes an existing namespace. This operation also removes all associated notificationHubs under the namespace.


```js
azure_arm_notificationhubs.Namespaces_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_Get
Returns the description for the specified namespace.


```js
azure_arm_notificationhubs.Namespaces_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_Patch
Patches the existing namespace


```js
azure_arm_notificationhubs.Namespaces_Patch({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* parameters (undefined) **required** - Parameters supplied to the Patch Namespace operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_CreateOrUpdate
Creates/Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.


```js
azure_arm_notificationhubs.Namespaces_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* parameters (undefined) **required** - Parameters supplied to the CreateOrUpdate Namespace operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListAuthorizationRules
Gets the authorization rules for a namespace.


```js
azure_arm_notificationhubs.Namespaces_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_DeleteAuthorizationRule
Deletes a namespace authorization rule


```js
azure_arm_notificationhubs.Namespaces_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* authorizationRuleName (string) **required** - Authorization Rule Name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_GetAuthorizationRule
Gets an authorization rule for a namespace by name.


```js
azure_arm_notificationhubs.Namespaces_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name
* authorizationRuleName (string) **required** - Authorization rule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_CreateOrUpdateAuthorizationRule
Creates an authorization rule for a namespace


```js
azure_arm_notificationhubs.Namespaces_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* authorizationRuleName (string) **required** - Aauthorization Rule Name.
* parameters (undefined) **required** - Parameters supplied to the CreateOrUpdate Namespace AuthorizationRules.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_ListKeys
Gets the Primary and Secondary ConnectionStrings to the namespace 


```js
azure_arm_notificationhubs.Namespaces_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* authorizationRuleName (string) **required** - The connection string of the namespace for the specified authorizationRule.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Namespaces_RegenerateKeys
Regenerates the Primary/Secondary Keys to the Namespace Authorization Rule


```js
azure_arm_notificationhubs.Namespaces_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* authorizationRuleName (string) **required** - The connection string of the namespace for the specified authorizationRule.
* parameters (undefined) **required** - Namespace/NotificationHub Regenerate Keys
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_CheckAvailability
Checks the availability of the given notificationHub in a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_CheckAvailability({
  "resourceGroupName": "",
  "namespaceName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* parameters (undefined) **required** - Parameters supplied to the Check Name Availability for Namespace and NotificationHubs.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_List
Lists the notification hubs associated with a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_List({
  "resourceGroupName": "",
  "namespaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_Delete
Deletes a notification hub associated with a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_Delete({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* notificationHubName (string) **required** - The notification hub name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_Get
Lists the notification hubs associated with a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_Get({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* notificationHubName (string) **required** - The notification hub name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_CreateOrUpdate
Creates/Update a NotificationHub in a namespace.


```js
azure_arm_notificationhubs.NotificationHubs_CreateOrUpdate({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* notificationHubName (string) **required** - The notification hub name.
* parameters (undefined) **required** - Parameters supplied to the CreateOrUpdate NotificationHub operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_ListAuthorizationRules
Gets the authorization rules for a NotificationHub.


```js
azure_arm_notificationhubs.NotificationHubs_ListAuthorizationRules({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name
* notificationHubName (string) **required** - The notification hub name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_DeleteAuthorizationRule
Deletes a notificationHub authorization rule


```js
azure_arm_notificationhubs.NotificationHubs_DeleteAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* notificationHubName (string) **required** - The notification hub name.
* authorizationRuleName (string) **required** - Authorization Rule Name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_GetAuthorizationRule
Gets an authorization rule for a NotificationHub by name.


```js
azure_arm_notificationhubs.NotificationHubs_GetAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name
* notificationHubName (string) **required** - The notification hub name.
* authorizationRuleName (string) **required** - authorization rule name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_CreateOrUpdateAuthorizationRule
Creates/Updates an authorization rule for a NotificationHub


```js
azure_arm_notificationhubs.NotificationHubs_CreateOrUpdateAuthorizationRule({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* notificationHubName (string) **required** - The notification hub name.
* authorizationRuleName (string) **required** - Authorization Rule Name.
* parameters (undefined) **required** - Parameters supplied to the CreateOrUpdate Namespace AuthorizationRules.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_ListKeys
Gets the Primary and Secondary ConnectionStrings to the NotificationHub 


```js
azure_arm_notificationhubs.NotificationHubs_ListKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* notificationHubName (string) **required** - The notification hub name.
* authorizationRuleName (string) **required** - The connection string of the NotificationHub for the specified authorizationRule.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_RegenerateKeys
Regenerates the Primary/Secondary Keys to the NotificationHub Authorization Rule


```js
azure_arm_notificationhubs.NotificationHubs_RegenerateKeys({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "authorizationRuleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* notificationHubName (string) **required** - The notification hub name.
* authorizationRuleName (string) **required** - The connection string of the NotificationHub for the specified authorizationRule.
* parameters (undefined) **required** - Namespace/NotificationHub Regenerate Keys
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### NotificationHubs_GetPnsCredentials
Lists the PNS Credentials associated with a notification hub .


```js
azure_arm_notificationhubs.NotificationHubs_GetPnsCredentials({
  "resourceGroupName": "",
  "namespaceName": "",
  "notificationHubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* namespaceName (string) **required** - The namespace name.
* notificationHubName (string) **required** - The notification hub name.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

