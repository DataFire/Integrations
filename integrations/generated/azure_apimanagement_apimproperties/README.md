# @datafire/azure_apimanagement_apimproperties

Client library for ApiManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_apimanagement_apimproperties
```
```js
let azure_apimanagement_apimproperties = require('@datafire/azure_apimanagement_apimproperties').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_apimanagement_apimproperties.Property_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Use these REST APIs for performing operations on Property entity associated with your Azure API Management deployment. API Management policies are a powerful capability of the system that allow the publisher to change the behavior of the API through configuration. Policies are a collection of statements that are executed sequentially on the request or response of an API. Policy statements can be constructed using literal text values, policy expressions, and properties. Each API Management service instance has a properties collection of key/value pairs that are global to the service instance. These properties can be used to manage constant string values across all API configuration and policies.

## Actions

### Property_ListByService
Lists a collection of properties defined within a service instance.


```js
azure_apimanagement_apimproperties.Property_ListByService({
  "resourceGroupName": "",
  "serviceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * $filter `string`: | Field | Supported operators    | Supported functions                                   |
  * $top `integer`: Number of records to return.
  * $skip `integer`: Number of records to skip.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PropertyCollection](#propertycollection)

### Property_Delete
Deletes specific property from the the API Management service instance.


```js
azure_apimanagement_apimproperties.Property_Delete({
  "resourceGroupName": "",
  "serviceName": "",
  "propId": "",
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * propId **required** `string`: Identifier of the property.
  * If-Match **required** `string`: The entity state (Etag) version of the property to delete. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Property_Get
Gets the details of the property specified by its identifier.


```js
azure_apimanagement_apimproperties.Property_Get({
  "resourceGroupName": "",
  "serviceName": "",
  "propId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * propId **required** `string`: Identifier of the property.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PropertyContract](#propertycontract)

### Property_GetEntityTag
Gets the entity state (Etag) version of the property specified by its identifier.


```js
azure_apimanagement_apimproperties.Property_GetEntityTag({
  "resourceGroupName": "",
  "serviceName": "",
  "propId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * propId **required** `string`: Identifier of the property.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Property_Update
Updates the specific property.


```js
azure_apimanagement_apimproperties.Property_Update({
  "resourceGroupName": "",
  "serviceName": "",
  "propId": "",
  "parameters": null,
  "If-Match": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * propId **required** `string`: Identifier of the property.
  * parameters **required** [PropertyUpdateParameters](#propertyupdateparameters)
  * If-Match **required** `string`: The entity state (Etag) version of the property to update. A value of "*" can be used for If-Match to unconditionally apply the operation.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Property_CreateOrUpdate
Creates or updates a property.


```js
azure_apimanagement_apimproperties.Property_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceName": "",
  "propId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceName **required** `string`: The name of the API Management service.
  * propId **required** `string`: Identifier of the property.
  * parameters **required** [PropertyContract](#propertycontract)
  * api-version **required** `string`: Version of the API to be used with the client request.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PropertyContract](#propertycontract)



## Definitions

### PropertyCollection
* PropertyCollection `object`: Paged Property list representation.
  * nextLink `string`: Next page link if any.
  * value `array`: Page values.
    * items [PropertyContract](#propertycontract)

### PropertyContract
* PropertyContract `object`: Property details.
  * properties [PropertyContractProperties](#propertycontractproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type for API Management resource.

### PropertyContractProperties
* PropertyContractProperties `object`: Property Contract properties.
  * displayName **required** `string`: Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
  * value **required** `string`: Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
  * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
  * tags `array`: Optional tags that when provided can be used to filter the property list.
    * items `string`

### PropertyEntityBaseParameters
* PropertyEntityBaseParameters `object`: Property Entity Base Parameters set.
  * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
  * tags `array`: Optional tags that when provided can be used to filter the property list.
    * items `string`

### PropertyUpdateParameterProperties
* PropertyUpdateParameterProperties `object`: Property Contract properties.
  * displayName `string`: Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
  * value `string`: Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
  * secret `boolean`: Determines whether the value is a secret and should be encrypted or not. Default value is false.
  * tags `array`: Optional tags that when provided can be used to filter the property list.
    * items `string`

### PropertyUpdateParameters
* PropertyUpdateParameters `object`: Property update Parameters.
  * properties [PropertyUpdateParameterProperties](#propertyupdateparameterproperties)


