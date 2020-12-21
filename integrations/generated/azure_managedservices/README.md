# @datafire/azure_managedservices

Client library for ManagedServicesClient

## Installation and Usage
```bash
npm install --save @datafire/azure_managedservices
```
```js
let azure_managedservices = require('@datafire/azure_managedservices').create({
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

Specification for ManagedServices.

## Actions

### Operations_List
Gets a list of the operations.


```js
azure_managedservices.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [OperationList](#operationlist)

### RegistrationAssignments_List
Gets a list of the registration assignments.


```js
azure_managedservices.RegistrationAssignments_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: Scope of the resource.
  * $expandRegistrationDefinition `boolean`: Tells whether to return registration definition details also along with registration assignment details.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RegistrationAssignmentList](#registrationassignmentlist)

### RegistrationAssignments_Delete
Deletes the specified registration assignment.


```js
azure_managedservices.RegistrationAssignments_Delete({
  "scope": "",
  "registrationAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: Scope of the resource.
  * registrationAssignmentId **required** `string`: Guid of the registration assignment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### RegistrationAssignments_Get
Gets the details of specified registration assignment.


```js
azure_managedservices.RegistrationAssignments_Get({
  "scope": "",
  "registrationAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: Scope of the resource.
  * registrationAssignmentId **required** `string`: Guid of the registration assignment.
  * $expandRegistrationDefinition `boolean`: Tells whether to return registration definition details also along with registration assignment details.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RegistrationAssignment](#registrationassignment)

### RegistrationAssignments_CreateOrUpdate
Creates or updates a registration assignment.


```js
azure_managedservices.RegistrationAssignments_CreateOrUpdate({
  "scope": "",
  "registrationAssignmentId": "",
  "api-version": "",
  "requestBody": {}
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: Scope of the resource.
  * registrationAssignmentId **required** `string`: Guid of the registration assignment.
  * api-version **required** `string`: The API version to use for this operation.
  * requestBody **required** [RegistrationAssignment](#registrationassignment)

#### Output
* output [RegistrationAssignment](#registrationassignment)

### RegistrationDefinitions_List
Gets a list of the registration definitions.


```js
azure_managedservices.RegistrationDefinitions_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: Scope of the resource.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RegistrationDefinitionList](#registrationdefinitionlist)

### RegistrationDefinitions_Delete
Deletes the registration definition.


```js
azure_managedservices.RegistrationDefinitions_Delete({
  "registrationDefinitionId": "",
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * registrationDefinitionId **required** `string`: Guid of the registration definition.
  * api-version **required** `string`: The API version to use for this operation.
  * scope **required** `string`: Scope of the resource.

#### Output
*Output schema unknown*

### RegistrationDefinitions_Get
Gets the registration definition details.


```js
azure_managedservices.RegistrationDefinitions_Get({
  "scope": "",
  "registrationDefinitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: Scope of the resource.
  * registrationDefinitionId **required** `string`: Guid of the registration definition.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RegistrationDefinition](#registrationdefinition)

### RegistrationDefinitions_CreateOrUpdate
Creates or updates a registration definition.


```js
azure_managedservices.RegistrationDefinitions_CreateOrUpdate({
  "registrationDefinitionId": "",
  "api-version": "",
  "scope": "",
  "requestBody": {}
}, context)
```

#### Input
* input `object`
  * registrationDefinitionId **required** `string`: Guid of the registration definition.
  * api-version **required** `string`: The API version to use for this operation.
  * scope **required** `string`: Scope of the resource.
  * requestBody **required** [RegistrationDefinition](#registrationdefinition)

#### Output
* output [RegistrationDefinition](#registrationdefinition)



## Definitions

### Authorization
* Authorization `object`: Authorization tuple containing principal Id (of user/service principal/security group) and role definition id.
  * principalId **required** `string`: Principal Id of the security group/service principal/user that would be assigned permissions to the projected subscription
  * roleDefinitionId **required** `string`: The role definition identifier. This role will define all the permissions that the security group/service principal/user must have on the projected subscription. This role cannot be an owner role.

### ErrorResponse
* ErrorResponse `object`: Error response.
  * error `object`: Error response indicates Azure Resource Manager is not able to process the incoming request. The reason is provided in the error message.
    * code **required** `string`: Error code.
    * message **required** `string`: Error message indicating why the operation failed.

### Operation
* Operation `object`: Object that describes a single Microsoft.ManagedServices operation.
  * display `object`: The object that represents the operation.
    * description `string`: Description of the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.ManagedServices
    * resource `string`: Resource on which the operation is performed: Registration definition, registration assignment etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationList
* OperationList `object`: List of the operations.
  * value `array`: List of Microsoft.ManagedServices operations.
    * items [Operation](#operation)

### Plan
* Plan `object`: Plan details for the managed services.
  * name **required** `string`: The plan name.
  * product **required** `string`: The product code.
  * publisher **required** `string`: The publisher ID.
  * version **required** `string`: The plan's version.

### RegistrationAssignment
* RegistrationAssignment `object`: Registration assignment.
  * id `string`: The fully qualified path of the registration assignment.
  * name `string`: Name of the registration assignment.
  * properties [RegistrationAssignmentProperties](#registrationassignmentproperties)
  * type `string`: Type of the resource.

### RegistrationAssignmentList
* RegistrationAssignmentList `object`: List of registration assignments.
  * nextLink `string`: Link to next page of registration assignments.
  * value `array`: List of registration assignments.
    * items [RegistrationAssignment](#registrationassignment)

### RegistrationAssignmentProperties
* RegistrationAssignmentProperties `object`: Properties of a registration assignment.
  * provisioningState `string` (values: NotSpecified, Accepted, Running, Ready, Creating, Created, Deleting, Deleted, Canceled, Failed, Succeeded, Updating): Current state of the registration assignment.
  * registrationDefinition `object`: Registration definition inside registration assignment.
    * id `string`: Fully qualified path of the registration definition.
    * name `string`: Name of the registration definition.
    * plan [Plan](#plan)
    * properties `object`: Properties of registration definition inside registration assignment.
      * authorizations `array`: Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
        * items [Authorization](#authorization)
      * description `string`: Description of the registration definition.
      * managedByTenantId `string`: Id of the managedBy tenant.
      * managedByTenantName `string`: Name of the managedBy tenant.
      * manageeTenantId `string`: Id of the home tenant.
      * manageeTenantName `string`: Name of the home tenant.
      * provisioningState `string` (values: NotSpecified, Accepted, Running, Ready, Creating, Created, Deleting, Deleted, Canceled, Failed, Succeeded, Updating): Current state of the registration definition.
      * registrationDefinitionName `string`: Name of the registration definition.
    * type `string`: Type of the resource (Microsoft.ManagedServices/registrationDefinitions).
  * registrationDefinitionId **required** `string`: Fully qualified path of the registration definition.

### RegistrationDefinition
* RegistrationDefinition `object`: Registration definition.
  * id `string`: Fully qualified path of the registration definition.
  * name `string`: Name of the registration definition.
  * plan [Plan](#plan)
  * properties [RegistrationDefinitionProperties](#registrationdefinitionproperties)
  * type `string`: Type of the resource.

### RegistrationDefinitionList
* RegistrationDefinitionList `object`: List of registration definitions.
  * nextLink `string`: Link to next page of registration definitions.
  * value `array`: List of registration definitions.
    * items [RegistrationDefinition](#registrationdefinition)

### RegistrationDefinitionProperties
* RegistrationDefinitionProperties `object`: Properties of a registration definition.
  * authorizations **required** `array`: Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
    * items [Authorization](#authorization)
  * description `string`: Description of the registration definition.
  * managedByTenantId **required** `string`: Id of the managedBy tenant.
  * managedByTenantName `string`: Name of the managedBy tenant.
  * provisioningState `string` (values: NotSpecified, Accepted, Running, Ready, Creating, Created, Deleting, Deleted, Canceled, Failed, Succeeded, Updating): Current state of the registration definition.
  * registrationDefinitionName `string`: Name of the registration definition.


