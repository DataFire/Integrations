# @datafire/inboxroute

Client library for Mailsquad

## Installation and Usage
```bash
npm install --save datafire @datafire/inboxroute
```

```js
let datafire = require('datafire');
let inboxroute = require('@datafire/inboxroute').actions;

let account = {
  mqApiKey: "",
}
let context = new datafire.Context({
  accounts: {
    inboxroute: account,
  }
})


inboxroute.contacts.lists.post({}, context).then(data => {
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


### contacts.lists.get
Get a paged result of contact lists.


```js
inboxroute.contacts.lists.get({}, context)
```


### contacts.lists.post
Add a new contact list


```js
inboxroute.contacts.lists.post({}, context)
```


### contacts.lists.listid.delete
Delete an existing contact list


```js
inboxroute.contacts.lists.listid.delete({
  "listid": ""
}, context)
```

#### Parameters
* listid (string) **required** - Unique 16 characters ID of the contact list

### contacts.lists.listid.put
Update an existing contact list


```js
inboxroute.contacts.lists.listid.put({
  "listid": ""
}, context)
```

#### Parameters
* listid (string) **required** - Unique 16 characters ID of the contact list
* contactlist (undefined)

### contacts.contactid.delete
Delete an existing contact


```js
inboxroute.contacts.contactid.delete({
  "contactid": ""
}, context)
```

#### Parameters
* contactid (string) **required** - Unique 16 characters ID of the contact

### contacts.contactid.put
Update an existing contact


```js
inboxroute.contacts.contactid.put({
  "contactid": "",
  "contact": null
}, context)
```

#### Parameters
* contactid (string) **required** - Unique 16 characters ID of the contact
* contact (undefined) **required**

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

#### Parameters
* listid (string) **required** - Unique 16 characters ID of the contact list
* subscription (undefined) **required**

