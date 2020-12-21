# @datafire/azure_authorization_authorization_classicadmincalls

Client library for AuthorizationManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_authorization_authorization_classicadmincalls
```
```js
let azure_authorization_authorization_classicadmincalls = require('@datafire/azure_authorization_authorization_classicadmincalls').create({
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

Role based access control provides you a way to apply granular level policy administration down to individual resources or resource groups. These operations enable you to manage role definitions and role assignments. A role definition describes the set of actions that can be performed on resources. A role assignment grants access to Azure Active Directory users.

## Actions

### ClassicAdministrators_List
Gets service administrator, account administrator, and co-administrators for the subscription.


```js
azure_authorization_authorization_classicadmincalls.ClassicAdministrators_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ClassicAdministratorListResult](#classicadministratorlistresult)



## Definitions

### ClassicAdministrator
* ClassicAdministrator `object`: Classic Administrators
  * id `string`: The ID of the administrator.
  * name `string`: The name of the administrator.
  * properties [ClassicAdministratorProperties](#classicadministratorproperties)
  * type `string`: The type of the administrator.

### ClassicAdministratorListResult
* ClassicAdministratorListResult `object`: ClassicAdministrator list result information.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of administrators.
    * items [ClassicAdministrator](#classicadministrator)

### ClassicAdministratorProperties
* ClassicAdministratorProperties `object`: Classic Administrator properties.
  * emailAddress `string`: The email address of the administrator.
  * role `string`: The role of the administrator.


