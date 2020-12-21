# @datafire/azure_security_securitycontacts

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_securitycontacts
```
```js
let azure_security_securitycontacts = require('@datafire/azure_security_securitycontacts').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### SecurityContacts_List
Security contact configurations for the subscription


```js
azure_security_securitycontacts.SecurityContacts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [SecurityContactList](#securitycontactlist)

### SecurityContacts_Delete
Security contact configurations for the subscription


```js
azure_security_securitycontacts.SecurityContacts_Delete({
  "api-version": "",
  "subscriptionId": "",
  "securityContactName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * securityContactName **required** `string`: Name of the security contact object

#### Output
*Output schema unknown*

### SecurityContacts_Get
Security contact configurations for the subscription


```js
azure_security_securitycontacts.SecurityContacts_Get({
  "api-version": "",
  "subscriptionId": "",
  "securityContactName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * securityContactName **required** `string`: Name of the security contact object

#### Output
* output [SecurityContact](#securitycontact)

### SecurityContacts_Update
Security contact configurations for the subscription


```js
azure_security_securitycontacts.SecurityContacts_Update({
  "api-version": "",
  "subscriptionId": "",
  "securityContactName": "",
  "securityContact": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * securityContactName **required** `string`: Name of the security contact object
  * securityContact **required** [SecurityContact](#securitycontact)

#### Output
* output [SecurityContact](#securitycontact)

### SecurityContacts_Create
Security contact configurations for the subscription


```js
azure_security_securitycontacts.SecurityContacts_Create({
  "api-version": "",
  "subscriptionId": "",
  "securityContactName": "",
  "securityContact": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * securityContactName **required** `string`: Name of the security contact object
  * securityContact **required** [SecurityContact](#securitycontact)

#### Output
* output [SecurityContact](#securitycontact)



## Definitions

### SecurityContact
* SecurityContact `object`: Contact details for security issues
  * properties [SecurityContactProperties](#securitycontactproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SecurityContactList
* SecurityContactList `object`: List of security contacts response
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of security contacts
    * items [SecurityContact](#securitycontact)

### SecurityContactProperties
* SecurityContactProperties `object`: describes security contact properties
  * alertNotifications **required** `string` (values: On, Off): Whether to send security alerts notifications to the security contact
  * alertsToAdmins **required** `string` (values: On, Off): Whether to send security alerts notifications to subscription admins
  * email **required** `string`: The email of this security contact
  * phone `string`: The phone number of this security contact


