# @datafire/azure_authorization_authorization_elevateaccesscalls

Client library for AuthorizationManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_authorization_authorization_elevateaccesscalls
```
```js
let azure_authorization_authorization_elevateaccesscalls = require('@datafire/azure_authorization_authorization_elevateaccesscalls').create({
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

### GlobalAdministrator_ElevateAccess
Elevates access for a Global Administrator.


```js
azure_authorization_authorization_elevateaccesscalls.GlobalAdministrator_ElevateAccess({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
