# @datafire/azure_managementpartner_managementpartner

Client library for ACE Provisioning ManagementPartner

## Installation and Usage
```bash
npm install --save @datafire/azure_managementpartner_managementpartner
```
```js
let azure_managementpartner_managementpartner = require('@datafire/azure_managementpartner_managementpartner').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_managementpartner_managementpartner.Operation_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

This API describe ACE Provisioning ManagementPartner

## Actions

### Operation_List
List all the operations.


```js
azure_managementpartner_managementpartner.Operation_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Supported version.

#### Output
* output [OperationList](#operationlist)

### Partner_Delete
Delete the management partner for the objectId and tenantId.


```js
azure_managementpartner_managementpartner.Partner_Delete({
  "partnerId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Id of the Partner
  * api-version **required** `string`: Supported version.

#### Output
*Output schema unknown*

### Partner_Get
Get the management partner using the partnerId, objectId and tenantId.


```js
azure_managementpartner_managementpartner.Partner_Get({
  "partnerId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Id of the Partner
  * api-version **required** `string`: Supported version.

#### Output
* output [PartnerResponse](#partnerresponse)

### Partner_Update
Update the management partner for the objectId and tenantId.


```js
azure_managementpartner_managementpartner.Partner_Update({
  "partnerId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Id of the Partner
  * api-version **required** `string`: Supported version.

#### Output
* output [PartnerResponse](#partnerresponse)

### Partner_Create
Create a management partner for the objectId and tenantId.


```js
azure_managementpartner_managementpartner.Partner_Create({
  "partnerId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * partnerId **required** `string`: Id of the Partner
  * api-version **required** `string`: Supported version.

#### Output
* output [PartnerResponse](#partnerresponse)



## Definitions

### Error
* Error `object`: this is the management partner operations error
  * error [ExtendedErrorInfo](#extendederrorinfo)

### ErrorResponseCode
* ErrorResponseCode `string` (values: NotFound, Conflict, BadRequest): this is the error response code that management partner operations may return

### ExtendedErrorInfo
* ExtendedErrorInfo `object`: this is the extended error info
  * code [ErrorResponseCode](#errorresponsecode)
  * message `string`: this is the extended error info message

### ManagementPartnerState
* ManagementPartnerState `string` (values: Active, Deleted): this is the management partner state: Active or Deleted

### OperationDisplay
* OperationDisplay `object`: this is the management partner operation
  * description `string`: the is management partner operation description
  * operation `string`: the is management partner operation
  * provider `string`: the is management partner provider
  * resource `string`: the is management partner resource

### OperationList
* OperationList `object`: this is the management partner operations list
  * nextLink `string`: Url to get the next page of items.
  * value `array`: this is the operation response list
    * items [OperationResponse](#operationresponse)

### OperationResponse
* OperationResponse `object`: this is the management partner operations response
  * display [OperationDisplay](#operationdisplay)
  * name `string`: this is the operation response name
  * origin `string`: the is operation response origin information

### PartnerProperties
* PartnerProperties `object`: this is the management partner properties
  * createdTime `string`: This is the DateTime when the partner was created.
  * objectId `string`: This is the object id.
  * partnerId `string`: This is the partner id
  * partnerName `string`: This is the partner name
  * state [ManagementPartnerState](#managementpartnerstate)
  * tenantId `string`: This is the tenant id.
  * updatedTime `string`: This is the DateTime when the partner was updated.
  * version `string`: This is the version.

### PartnerResponse
* PartnerResponse `object`: this is the management partner operations response
  * etag `integer`: Type of the partner
  * id `string`: Identifier of the partner
  * name `string`: Name of the partner
  * properties [PartnerProperties](#partnerproperties)
  * type `string`: Type of resource. "Microsoft.ManagementPartner/partners"


