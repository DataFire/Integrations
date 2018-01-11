# @datafire/inboxroute

Client library for Mailsquad

## Installation and Usage
```bash
npm install --save @datafire/inboxroute
```
```js
let inboxroute = require('@datafire/inboxroute').create({
  mqApiKey: ""
});

inboxroute.contacts.lists.post({}).then(data => {
  console.log(data);
})
```

## Description

MailSquad offers an affordable and super easy way to create, send and track delightful emails.

## Actions

### contacts.get
Get a paged result of contacts from a list


```js
inboxroute.contacts.get({}, context)
```

#### Input
* input `object`
  * listid `string`: Unique 16 characters ID of the contact list to get contacts of
  * offset `integer`: Skip that many records
  * limit `integer`: Maximum number of items in page
  * sort `string`: Property to sort by. Append '-' for descending order.

#### Output
* output [ContactPage](#contactpage)

### contacts.lists.get
Get a paged result of contact lists.


```js
inboxroute.contacts.lists.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Skip that many records
  * limit `integer`: Maximum number of items in page
  * sort `string`: Property to sort by. Append '-' for descending order.

#### Output
* output [ContactListPage](#contactlistpage)

### contacts.lists.post
Add a new contact list


```js
inboxroute.contacts.lists.post({}, context)
```

#### Input
* input `object`
  * contactlist [ContactListUpdate](#contactlistupdate)

#### Output
* output [NewId](#newid)

### contacts.lists.listid.delete
Delete an existing contact list


```js
inboxroute.contacts.lists.listid.delete({
  "listid": ""
}, context)
```

#### Input
* input `object`
  * listid **required** `string`: Unique 16 characters ID of the contact list

#### Output
*Output schema unknown*

### contacts.lists.listid.put
Update an existing contact list


```js
inboxroute.contacts.lists.listid.put({
  "listid": ""
}, context)
```

#### Input
* input `object`
  * listid **required** `string`: Unique 16 characters ID of the contact list
  * contactlist [ContactListUpdate](#contactlistupdate)

#### Output
*Output schema unknown*

### contacts.contactid.delete
Delete an existing contact


```js
inboxroute.contacts.contactid.delete({
  "contactid": ""
}, context)
```

#### Input
* input `object`
  * contactid **required** `string`: Unique 16 characters ID of the contact

#### Output
*Output schema unknown*

### contacts.contactid.put
Update an existing contact


```js
inboxroute.contacts.contactid.put({
  "contactid": "",
  "contact": null
}, context)
```

#### Input
* input `object`
  * contactid **required** `string`: Unique 16 characters ID of the contact
  * contact **required** [ContactUpdate](#contactupdate)

#### Output
*Output schema unknown*

### subscription.listid.post
Subscribe an email address to a list. This api call has the same behavior as
a regular subscribe form. However, single opt-in is allowed for system integration
purposes.

- If email address does not exist, a new contact will be added to the list.
- If email address exists custom fields will be updated and status will be put
  to unconfirmed or active depending of singleoptin value.
- If current status if Active, this operation will only update the custom fields.
- If singleoptin is true, no email confirmation will be sent. In that case,
  you must provide the subscribe's origin ip and confirmation date-time.



```js
inboxroute.subscription.listid.post({
  "listid": "",
  "subscription": null
}, context)
```

#### Input
* input `object`
  * listid **required** `string`: Unique 16 characters ID of the contact list
  * subscription **required** [SubscriptionRequest](#subscriptionrequest)

#### Output
*Output schema unknown*



## Definitions

### Contact
* Contact `object`
  * _id `string`: Unique 16 characters ID
  * clientid `string`: Unique 16 characters ID of the client owner
  * confirmed `string`: Date+time subscriber confirmed his/her list opt-in
  * email `string`: Email address
  * fullname `string`: Full name (Last name, First Name) of the subscriber
  * ip `string`: Subscriber's IP address when he/she confirmed list opt-in
  * lang `string`: ISO 639-1 language code of the subscriber. When lang is one the supported system language, all communication
  * listid `string`: Unique 16 characters ID of the list owner
  * status `integer`: Status (

### ContactAdd
* ContactAdd `object`
  * confirmed `string`: Date+time subscriber confirmed his/her list opt-in
  * email **required** `string`: Email address
  * ip `string`: Subscriber's IP address when he/she confirmed list opt-in
  * listid **required** `string`: Unique 16 characters ID of the list owner
  * status `integer`: Status (

### ContactCustomFieldSchema
* ContactCustomFieldSchema `object`
  * key **required** `string`: equivalent to html form input name attribute
  * label **required** `string`: User friendly label describing the field
  * required `boolean`: Is field required
  * type **required** `integer`: Type (

### ContactList
* ContactList `object`
  * _id `string`: Unique 16 characters ID
  * clientid `string`: Unique 16 characters ID of the client owner
  * created `string`
  * customfields `array`: Array of ContactCustomFieldSchema
    * items [ContactCustomFieldSchema](#contactcustomfieldschema)
  * eventcustomizations `array`: Array of ContactListEventCustomization
    * items [ContactListEventCustomization](#contactlisteventcustomization)
  * name `string`: Name of the contact list

### ContactListEventCustomization
* ContactListEventCustomization `object`
  * redirecturl `string`: full url of the destination landing page
  * type **required** `integer`: Type (

### ContactListPage
* ContactListPage `object`
  * page `array`: Array of ContactList for that page
    * items [ContactList](#contactlist)
  * total `integer`: Total number of items in query

### ContactListUpdate
* ContactListUpdate `object`
  * customfields `array`: Array of ContactCustomFieldSchema
    * items [ContactCustomFieldSchema](#contactcustomfieldschema)
  * eventcustomizations `array`: Array of ContactListEventCustomization
    * items [ContactListEventCustomization](#contactlisteventcustomization)
  * name `string`: Name of the contact list

### ContactPage
* ContactPage `object`
  * page `array`: Array of Contact for that page
    * items [Contact](#contact)
  * total `integer`: Total number of items in query

### ContactUpdate
* ContactUpdate `object`
  * confirmed `string`: Date+time subscriber confirmed his/her list opt-in
  * email `string`: Email address
  * ip `string`: Subscriber's IP address when he/she confirmed list opt-in
  * status `integer`: Status (

### NewId
* NewId `object`
  * _id `string`: The created ressource id

### SubscriptionRequest
* SubscriptionRequest `object`
  * confirmed `string`: Date-time when subscriber opted-in. Required if singleoptin is true.
  * email **required** `string`: Email address of the subscriber
  * fullname `string`: Full name (Last name, First Name) of the subscriber
  * ip `string`: Origin Ip of the subscriber when he/she opted-in. Required if singleoptin is true.
  * lang `string`: ISO 639-1 language code of the subscriber. When lang is one the supported system language, all communication
  * singleoptin `boolean`: If true, no email will be sent asking user subscription confirmation. In that case, you must provide


