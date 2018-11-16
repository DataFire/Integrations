# @datafire/hubspot

Client library for hubspot

## Installation and Usage
```bash
npm install --save @datafire/hubspot
```
```js
let hubspot = require('@datafire/hubspot').create({
  api_key: "",
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

hubspot.getRecentlyModifiedContacts({}).then(data => {
  console.log(data);
});
```

## Description

Integrate with Hubspot

## Actions

### getAllCompanies



```js
hubspot.getAllCompanies({}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of records to return. Defaults to 100, has a maximum value of 250.
  * offset `string`: Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.

#### Output
*Output schema unknown*

### getCompanyById



```js
hubspot.getCompanyById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: company Id

#### Output
*Output schema unknown*

### getRecentlyCreatedCompanies



```js
hubspot.getRecentlyCreatedCompanies({}, context)
```

#### Input
* input `object`
  * offset `string`: Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.
  * count `number`: Specifies the number of companies to be returned. Default: 100

#### Output
*Output schema unknown*

### getRecentlyModifiedCompanies



```js
hubspot.getRecentlyModifiedCompanies({}, context)
```

#### Input
* input `object`
  * offset `string`: Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.
  * count `integer`: Specifies the number of companies to be returned. Default: 100

#### Output
*Output schema unknown*

### getCompanyByDomain



```js
hubspot.getCompanyByDomain({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: domain of the company

#### Output
*Output schema unknown*

### getComapnyContactsByCompanyId



```js
hubspot.getComapnyContactsByCompanyId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: your company id
  * vidOffset `string`: The vid to offset the query by.
  * count `integer`: Specifies the number of contacts to be returned. Supports a maximum value of 600. Default is 600

#### Output
*Output schema unknown*

### getContactIdsByCompanyId



```js
hubspot.getContactIdsByCompanyId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: your company id
  * vidOffset `string`: The vid to offset the query by.
  * count `integer`: Specifies the number of contacts to be returned. Supports a maximum value of 600. Default is 600

#### Output
*Output schema unknown*

### getAllCompanyProperties



```js
hubspot.getAllCompanyProperties(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getCompanyPropertyByName



```js
hubspot.getCompanyPropertyByName({
  "property_name": ""
}, context)
```

#### Input
* input `object`
  * property_name **required** `string`: The API name of the property that you wish to see metadata for.

#### Output
*Output schema unknown*

### getCompanyPropertyGroups



```js
hubspot.getCompanyPropertyGroups({}, context)
```

#### Input
* input `object`
  * include_properties `boolean`: True or False, Returns all of the properties for each company property group.Default is true

#### Output
*Output schema unknown*

### getAllContacts



```js
hubspot.getAllContacts({}, context)
```

#### Input
* input `object`
  * count `integer`: This parameter lets you specify the amount of contacts to return in your API call. The default for this parameter (if it isn't specified) is 20 contacts. The maximum amount of contacts you can have returned to you via this parameter is 100.
  * contact_offset `integer`: Used to page through the contacts. Every call to this endpoint will return a vid-offset value. This value is used in the vidOffset parameter of the next call to get the next page of contacts.
  * property_mode `string`: One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is “value_only”
  * form_submission_mode `string` (values: all, none, newest, oldest): One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is “newest
  * list_memberships `boolean`: 	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is false

#### Output
*Output schema unknown*

### getContactByEmail



```js
hubspot.getContactByEmail({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: The email address for the contact that you're searching for.

#### Output
*Output schema unknown*

### getContactById



```js
hubspot.getContactById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Unique identifier for a particular contact. In HubSpot's contact system, contact ID's are called vid

#### Output
*Output schema unknown*

### getContactByToken



```js
hubspot.getContactByToken({
  "utk": ""
}, context)
```

#### Input
* input `object`
  * utk **required** `string`: The user token (HubSpot cookie) for the contact that you're searching for.

#### Output
*Output schema unknown*

### getRecentlyCreatedContact



```js
hubspot.getRecentlyCreatedContact({}, context)
```

#### Input
* input `object`
  * property_mode `string`: One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is value_and_history
  * form_submission_mode `string`: One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is all
  * list_memberships `boolean`: 	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is true

#### Output
*Output schema unknown*

### getRecentlyModifiedContacts



```js
hubspot.getRecentlyModifiedContacts({}, context)
```

#### Input
* input `object`
  * count `integer`: This parameter lets you specify the amount of contacts to return in your API call. The default for this parameter (if it isn't specified) is 20 contacts. The maximum amount of contacts you can have returned to you via this parameter is 100.
  * time_offset `string`: Used in conjunction with the vidOffset paramter to page through the recent contacts. Every call to this endpoint will return a time-offset value. This value is used in the timeOffset parameter of the next call to get the next page of contacts.
  * contact_offset `string`: Used in conjunction with the timeOffset paramter to page through the recent contacts. Every call to this endpoint will return a vid-offset value. This value is used in the vidOffset parameter of the next call to get the next page of contacts.
  * property_mode `string`: One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is “value_only”
  * form_submission_mode `string`: One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is “newest
  * list_memberships `boolean`: 	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is false

#### Output
*Output schema unknown*

### getAllContactProperties



```js
hubspot.getAllContactProperties(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getContactPropertiesByName



```js
hubspot.getContactPropertiesByName({
  "property_name": ""
}, context)
```

#### Input
* input `object`
  * property_name **required** `string`: Contact property name

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
