# @datafire/rebilly

Client library for Rebilly

## Installation and Usage
```bash
npm install --save datafire @datafire/rebilly
```

```js
let datafire = require('datafire');
let rebilly = require('@datafire/rebilly').actions;

let account = {
  ApiKey: "",
  username: "",
  password: "",
  RebAuth: "",
}
let context = new datafire.Context({
  accounts: {
    rebilly: account,
  }
})

rebilly.websites.get({}, context).then(data => {
  console.log(data);
})
```

## Description
# Introduction
The Rebilly API is built on HTTP.  Our API is RESTful.  It has predictable
resource URLs.  It returns HTTP response codes to indicate errors.  It also
accepts and returns JSON in the HTTP body.  You can use your favorite
HTTP/REST library for your programming language to use Rebilly's API, or
you can use one of our SDKs (currently available in [PHP](https://github.com/Rebilly/rebilly-php)
and [C#](https://github.com/Rebilly/rebilly-dotnet-client)).

# Authentication
When you sign up for an account, you are given your first API key.
You can generate additional API keys, and delete API keys (as you may
need to rotate your keys in the future). You authenticate to the
Rebilly API by providing your secret key in the request header.

Rebilly offers three forms of authentication:  private key, JSON Web Tokens, and
public key.
- private key: authenticates each request by searching for the presence
of an HTTP header: REB-APIKEY.
- JWT: authenticates each request by the HTTP header: Authorization.
- public key: authenticates by the HTTP header: REB-AUTH (read more on this below).

Rebilly also offers JSON Web Tokens (JWT) authentication, where you can control
the specific granular permissions and expiration for that JWT.  We call our resource
for generating JWT [Sessions](#tag/Sessions).

Rebilly also has a client-side authentication scheme that uses an
apiUser and HMAC-SHA1 signature (only for the Tokens resource), so
that you may safely create tokens from the client-side without compromising
your secret keys.

Never share your secret keys. Keep them guarded and secure.
The client-side authentication scheme uses one HTTP header named REB-AUTH.

<!-- ReDoc-Inject: <security-definitions> -->

# PHP SDK
For all PHP SDK examples provided in this spec you will need to configure `$client`.
You may do it like this:

```php
$client = new Rebilly\Client([
    'apiKey' => 'YourApiKeyHere',
    'baseUrl' => 'https://api.rebilly.com',
]);
```


## Actions
### 3dsecure.get
Retrieve a list of ThreeDSecure entries


```js
rebilly.3dsecure.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### 3dsecure.post
Create a ThreeDSecure entry



```js
rebilly.3dsecure.post({
  "body": {
    "enrolled": "",
    "enrollmentEci": "",
    "customerId": null,
    "gatewayAccountId": null,
    "paymentCardId": null,
    "websiteId": null,
    "currency": "",
    "amount": 0
  }
}, context)
```

#### Parameters
* body (object) **required**

### 3dsecure.id.get
Retrieve a ThreeDSecure entry with specified identifier string



```js
rebilly.3dsecure.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### activation.token.post
Sends a token to activate user account



```js
rebilly.activation.token.post({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - The token string

### api_keys.get
Retrieve a list of api keys



```js
rebilly.api_keys.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### api_keys.post
Create an api key



```js
rebilly.api_keys.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required** - API secret Key.

### api_keys.id.delete
Delete api key with predefined identifier string



```js
rebilly.api_keys.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### api_keys.id.get
Retrieve api key with specified identifier string



```js
rebilly.api_keys.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### api_keys.id.put
Create or update api key with predefined identifier string



```js
rebilly.api_keys.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required** - API secret Key.
* id (string) **required** - The resource identifier string

### attachments.get
Retrieve a list of Attachments



```js
rebilly.attachments.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* filter (string) - The collection items filter requires a special format.
* q (string) - The partial search of the text fields.
* expand (string) - Expand response to get full related object intead of ID.  See the expand guide for more info.
* fields (string) - Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
* sort (array) - The collection items sort field and order (prefix with "-" for descending sort).

### attachments.post
Create an Attachment



```js
rebilly.attachments.post({
  "body": {
    "fileId": "",
    "relatedId": "",
    "relatedType": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### attachments.id.delete
Delete the Attachment with predefined identifier string



```js
rebilly.attachments.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### attachments.id.get
Retrieve a Attachment with specified identifier string



```js
rebilly.attachments.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### attachments.id.put
Update the Attachment with predefined ID



```js
rebilly.attachments.id.put({
  "body": {
    "fileId": "",
    "relatedId": "",
    "relatedType": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### authentication_options.get
Read current authentication options



```js
rebilly.authentication_options.get(null, context)
```


### authentication_options.put
Change options



```js
rebilly.authentication_options.put({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### authentication_tokens.get
Retrieve a list of auth tokens



```js
rebilly.authentication_tokens.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### authentication_tokens.post
Login a user (customer)



```js
rebilly.authentication_tokens.post({
  "body": {
    "username": "",
    "password": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### authentication_tokens.token.delete
Logout a user



```js
rebilly.authentication_tokens.token.delete({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - The token identifier string

### authentication_tokens.token.get
Verify an authentication token



```js
rebilly.authentication_tokens.token.get({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - The token identifier string

### bank_accounts.get
Retrieve a list of Bank Accounts



```js
rebilly.bank_accounts.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### bank_accounts.post
Create a Bank Account



```js
rebilly.bank_accounts.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### bank_accounts.id.get
Retrieve a Bank Account with specified identifier string



```js
rebilly.bank_accounts.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### bank_accounts.id.put
Create or update a BankAccount with predefined identifier string



```js
rebilly.bank_accounts.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### bank_accounts.id.deactivation.post
Deactivate a Bank Account



```js
rebilly.bank_accounts.id.deactivation.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### blacklists.get
Retrieve a list of blacklists



```js
rebilly.blacklists.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### blacklists.post
Create a blacklist



```js
rebilly.blacklists.post({
  "body": {
    "type": "",
    "value": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### blacklists.id.delete
Delete a blacklist with predefined identifier string



```js
rebilly.blacklists.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### blacklists.id.get
Retrieve a blacklist with specified identifier string



```js
rebilly.blacklists.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### blacklists.id.put
Create a blacklist with predefined identifier string



```js
rebilly.blacklists.id.put({
  "body": {
    "type": "",
    "value": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### checkout_pages.get
Retrieve a list of checkout pages



```js
rebilly.checkout_pages.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### checkout_pages.post
Create a Checkout Page



```js
rebilly.checkout_pages.post({
  "body": {
    "name": "",
    "planId": "",
    "websiteId": "",
    "uriPath": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### checkout_pages.id.delete
Delete a Checkout Page with predefined identifier string



```js
rebilly.checkout_pages.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### checkout_pages.id.get
Retrieve a Checkout Page with specified identifier string



```js
rebilly.checkout_pages.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### checkout_pages.id.put
Create or update a Checkout Page with predefined identifier string



```js
rebilly.checkout_pages.id.put({
  "body": {
    "name": "",
    "planId": "",
    "websiteId": "",
    "uriPath": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### contacts.get
Retrieve a list of contacts



```js
rebilly.contacts.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### contacts.post
Create a contact



```js
rebilly.contacts.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### contacts.id.get
Retrieve a contact with specified identifier string



```js
rebilly.contacts.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### contacts.id.put
Create or update a contact with predefined identifier string



```js
rebilly.contacts.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### coupons.get
Retrieve a list of coupons



```js
rebilly.coupons.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* filter (string) - The collection items filter requires a special format.
* q (string) - The partial search of the text fields.
* criteria (string) - The json criteria for collection
* sort (array) - The collection items sort field and order (prefix with "-" for descending sort).

### coupons.post
Create a coupon



```js
rebilly.coupons.post({
  "body": {
    "discount": {},
    "issuedTime": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - Coupons and Discounts

### coupons_redemptions.get
Retrieve a list of coupon redemptions


```js
rebilly.coupons_redemptions.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* filter (string) - The collection items filter requires a special format.
* q (string) - The partial search of the text fields.
* criteria (string) - The json criteria for collection
* sort (array) - The collection items sort field and order (prefix with "-" for descending sort).

### coupons_redemptions.post
Redeem a coupon



```js
rebilly.coupons_redemptions.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required** - Coupons redemption log

### coupons_redemptions.id.get
Retrieve a coupon redemption with specified identifier string


```js
rebilly.coupons_redemptions.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### coupons_redemptions.id.cancel.post
Cancel a coupon redemption


```js
rebilly.coupons_redemptions.id.cancel.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### coupons.redemptionCode.get
Retrieve a coupon with specified redemption code string



```js
rebilly.coupons.redemptionCode.get({
  "redemptionCode": ""
}, context)
```

#### Parameters
* redemptionCode (string) **required** - The Coupon's redemption code

### coupons.redemptionCode.put
Create or update a coupon with predefined redemption code



```js
rebilly.coupons.redemptionCode.put({
  "body": {
    "discount": {},
    "issuedTime": ""
  },
  "redemptionCode": ""
}, context)
```

#### Parameters
* body (object) **required** - Coupons and Discounts
* redemptionCode (string) **required** - The Coupon's redemption code

### credential_hashes.emails.post
Create an email credential



```js
rebilly.credential_hashes.emails.post({
  "body": {
    "host": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - SMTP Credential

### credential_hashes.emails.hash.get
Retrieve an email credential with specified token identifier string



```js
rebilly.credential_hashes.emails.hash.get({
  "hash": ""
}, context)
```

#### Parameters
* hash (string) **required** - The token identifier string

### credential_hashes.webhooks.post
Create a webhook credential



```js
rebilly.credential_hashes.webhooks.post({
  "body": {
    "host": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - Webhook credential

### credential_hashes.webhooks.hash.get
Retrieve a webhook credential with specified token identifier string



```js
rebilly.credential_hashes.webhooks.hash.get({
  "hash": ""
}, context)
```

#### Parameters
* hash (string) **required** - The token identifier string

### credentials.get
Retrieve a list of credentials



```js
rebilly.credentials.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### credentials.post
Create a credential



```js
rebilly.credentials.post({
  "body": {
    "username": "",
    "password": "",
    "customerId": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### credentials.id.delete
Delete a credential with predefined identifier string



```js
rebilly.credentials.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### credentials.id.get
Retrieve a credential with specified identifier string



```js
rebilly.credentials.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### credentials.id.put
Create or update a credential with predefined identifier string



```js
rebilly.credentials.id.put({
  "body": {
    "username": "",
    "password": "",
    "customerId": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### custom_events.get
Retrieve a list of custom events



```js
rebilly.custom_events.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### custom_events.post
Create a custom event



```js
rebilly.custom_events.post({
  "body": {
    "eventType": "",
    "title": "",
    "chronology": "",
    "scheduleInstruction": {
      "method": ""
    }
  }
}, context)
```

#### Parameters
* body (object) **required**

### custom_events.id.delete
Delete a custom event with predefined identifier string



```js
rebilly.custom_events.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### custom_events.id.get
Retrieve a custom event with predefined identifier string



```js
rebilly.custom_events.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### custom_events.id.put
Create a custom event with predefined identifier string



```js
rebilly.custom_events.id.put({
  "body": {
    "eventType": "",
    "title": "",
    "chronology": "",
    "scheduleInstruction": {
      "method": ""
    }
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### custom_events.id.rules.get
Retrieve a list of rules for custom event


```js
rebilly.custom_events.id.rules.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### custom_events.id.rules.put
Update the rules for custom event


```js
rebilly.custom_events.id.rules.put({
  "body": {
    "rules": []
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required** - Set of rules for particular event
* id (string) **required** - The resource identifier string

### custom_events.id.rules.history.get
Retrieve the change history of the set of rules for the selected custom event.
The history is updated each time you change the rules.



```js
rebilly.custom_events.id.rules.history.get({
  "id": ""
}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* filter (string) - The collection items filter requires a special format.
* q (string) - The partial search of the text fields.
* sort (array) - The collection items sort field and order (prefix with "-" for descending sort).
* fields (string) - Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
* expand (string) - Expand response to get full related object intead of ID.  See the expand guide for more info.
* id (string) **required** - The resource identifier string

### custom_events.id.rules.history.version.get
Retrieve the record from the change history of the set of rules for the selected custom event.
A history record is created each time you change the rules.



```js
rebilly.custom_events.id.rules.history.version.get({
  "id": "",
  "version": 0
}, context)
```

#### Parameters
* fields (string) - Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
* expand (string) - Expand response to get full related object intead of ID.  See the expand guide for more info.
* id (string) **required** - The resource identifier string
* version (integer) **required** - The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.

### custom_events.id.rules.versions.version.get
Retrieve the version of the selected set of rules for the selected custom event.
The versions are created each time you change the rules.



```js
rebilly.custom_events.id.rules.versions.version.get({
  "id": "",
  "version": 0
}, context)
```

#### Parameters
* fields (string) - Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
* expand (string) - Expand response to get full related object intead of ID.  See the expand guide for more info.
* id (string) **required** - The resource identifier string
* version (integer) **required** - The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.

### custom_fields.resource.get
Retrieve a schema of Custom Fields for the given resource type



```js
rebilly.custom_fields.resource.get({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - The resource type string

### custom_fields.resource.name.delete
Delete a custom field by its name



```js
rebilly.custom_fields.resource.name.delete({
  "resource": "",
  "name": ""
}, context)
```

#### Parameters
* resource (string) **required** - The resource type string
* name (string) **required** - The custom field's identifier string

### custom_fields.resource.name.get
Retrieve a schema of the given Custom Field for the given resource type



```js
rebilly.custom_fields.resource.name.get({
  "resource": "",
  "name": ""
}, context)
```

#### Parameters
* resource (string) **required** - The resource type string
* name (string) **required** - The custom field's identifier string

### custom_fields.resource.name.put
Create or alter a schema of the given Custom Field for the given resource type.



```js
rebilly.custom_fields.resource.name.put({
  "body": {
    "name": "",
    "type": ""
  },
  "resource": "",
  "name": ""
}, context)
```

#### Parameters
* body (object) **required** - A separate Custom Field schema
* resource (string) **required** - The resource type string
* name (string) **required** - The custom field's identifier string

### customers.get
Retrieve a list of customers



```js
rebilly.customers.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* filter (string) - The collection items filter requires a special format.
* q (string) - The partial search of the text fields.
* expand (string) - Expand response to get full related object intead of ID.  See the expand guide for more info.
* fields (string) - Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
* sort (array) - The collection items sort field and order (prefix with "-" for descending sort).
* Accept (string) - The response media type

### customers.post
Create a customer



```js
rebilly.customers.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### customers.id.get
Retrieve a customer with specified identifier string



```js
rebilly.customers.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### customers.id.put
Create a customer with predefined identifier string



```js
rebilly.customers.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### customers.id.lead_source.delete
Delete a Lead Source that belongs to a certain customer



```js
rebilly.customers.id.lead_source.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### customers.id.lead_source.get
Retrieve a Lead Source of given customer



```js
rebilly.customers.id.lead_source.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### customers.id.lead_source.put
Create a Lead Source for a customer



```js
rebilly.customers.id.lead_source.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### disputes.get
Retrieve a list of disputes



```js
rebilly.disputes.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### disputes.post
Create a dispute



```js
rebilly.disputes.post({
  "body": {
    "currency": "",
    "transactionId": "",
    "postedTime": "",
    "type": "",
    "status": "",
    "reasonCode": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### disputes.id.get
Retrieve a dispute with specified identifier string



```js
rebilly.disputes.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### disputes.id.put
Create or update a Dispute with predefined identifier string



```js
rebilly.disputes.id.put({
  "body": {
    "currency": "",
    "transactionId": "",
    "postedTime": "",
    "type": "",
    "status": "",
    "reasonCode": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### events.get
Retrieve a list of existing events


```js
rebilly.events.get(null, context)
```


### events.eventType.get
Retrieve the event information


```js
rebilly.events.eventType.get({
  "eventType": ""
}, context)
```

#### Parameters
* eventType (string) **required** - The event type

### events.eventType.rules.get
Retrieve a list of rules for event


```js
rebilly.events.eventType.rules.get({
  "eventType": ""
}, context)
```

#### Parameters
* eventType (string) **required** - The event type

### events.eventType.rules.put
Update the rules for event


```js
rebilly.events.eventType.rules.put({
  "body": {
    "rules": []
  },
  "eventType": ""
}, context)
```

#### Parameters
* body (object) **required** - Set of rules for particular event
* eventType (string) **required** - The event type

### events.eventType.rules.history.get
Retrieve the change history of the selected set of rules.
The history is updated each time you change the rules.



```js
rebilly.events.eventType.rules.history.get({
  "eventType": ""
}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* filter (string) - The collection items filter requires a special format.
* q (string) - The partial search of the text fields.
* sort (array) - The collection items sort field and order (prefix with "-" for descending sort).
* fields (string) - Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
* expand (string) - Expand response to get full related object intead of ID.  See the expand guide for more info.
* eventType (string) **required** - The event type

### events.eventType.rules.history.version.get
Retrieve the record from the change history of the selected set of rules.
A history record is created each time you change the rules.



```js
rebilly.events.eventType.rules.history.version.get({
  "eventType": "",
  "version": 0
}, context)
```

#### Parameters
* fields (string) - Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
* expand (string) - Expand response to get full related object intead of ID.  See the expand guide for more info.
* eventType (string) **required** - The event type
* version (integer) **required** - The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.

### events.eventType.rules.versions.version.get
Retrieve the version of the selected set of rules.
The versions are created each time you change the rules.



```js
rebilly.events.eventType.rules.versions.version.get({
  "eventType": "",
  "version": 0
}, context)
```

#### Parameters
* fields (string) - Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
* expand (string) - Expand response to get full related object intead of ID.  See the expand guide for more info.
* eventType (string) **required** - The event type
* version (integer) **required** - The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.

### files.get
Retrieve a list of files



```js
rebilly.files.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* filter (string) - The collection items filter requires a special format.
* q (string) - The partial search of the text fields.
* expand (string) - Expand response to get full related object intead of ID.  See the expand guide for more info.
* fields (string) - Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
* sort (array) - The collection items sort field and order (prefix with "-" for descending sort).

### files.post
Create a file



```js
rebilly.files.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### files.id.delete
Delete the File with predefined identifier string



```js
rebilly.files.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### files.id.get
Retrieve a File with specified identifier string



```js
rebilly.files.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### files.id.put
Update the File with predefined ID



```js
rebilly.files.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### files.id.download.get
Retrieve a file



```js
rebilly.files.id.download.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### files.id.downloadextension.get
Used for converting images server-side



```js
rebilly.files.id.downloadextension.get({
  "id": "",
  "extension": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string
* extension (string) **required** - File extension which also indicates the desired file format

### forgot_password.post
Sends an email with a link containing a token to reset user password



```js
rebilly.forgot_password.post({
  "body": {
    "email": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### gateway_accounts.get
Retrieve a list of gateway accounts



```js
rebilly.gateway_accounts.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### gateway_accounts.post
Create a Gateway Account



```js
rebilly.gateway_accounts.post({
  "body": {
    "gatewayName": "",
    "acquirerName": "",
    "merchantCategoryCode": 0,
    "websites": [],
    "acceptedCurrencies": [],
    "organizationId": null
  }
}, context)
```

#### Parameters
* body (object) **required**

### gateway_accounts.id.delete
Delete a Gateway Account with predefined identifier string



```js
rebilly.gateway_accounts.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### gateway_accounts.id.get
Retrieve a Gateway Account with specified identifier string



```js
rebilly.gateway_accounts.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### gateway_accounts.id.patch
Update a GatewayAccount with predefined identifier string



```js
rebilly.gateway_accounts.id.patch({
  "body": {
    "gatewayName": "",
    "acquirerName": "",
    "merchantCategoryCode": 0,
    "websites": [],
    "acceptedCurrencies": [],
    "organizationId": null
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### gateway_accounts.id.put
Create or update a GatewayAccount with predefined identifier string



```js
rebilly.gateway_accounts.id.put({
  "body": {
    "gatewayName": "",
    "acquirerName": "",
    "merchantCategoryCode": 0,
    "websites": [],
    "acceptedCurrencies": [],
    "organizationId": null
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### invoices.get
Retrieve a list of invoices



```js
rebilly.invoices.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* Accept (string) - The response media type

### invoices.post
Create an invoice



```js
rebilly.invoices.post({
  "body": {
    "customerId": null,
    "websiteId": null,
    "currency": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### invoices.id.get
Retrieve an invoice with specified identifier string



```js
rebilly.invoices.id.get({
  "id": ""
}, context)
```

#### Parameters
* Accept (string) - The response media type
* id (string) **required** - The resource identifier string

### invoices.id.put
Create or update an invoice with predefined identifier string



```js
rebilly.invoices.id.put({
  "body": {
    "customerId": null,
    "websiteId": null,
    "currency": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### invoices.id.abandon.post
Abandon an invoice with specified identifier string



```js
rebilly.invoices.id.abandon.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### invoices.id.issue.post
Issue an invoice with specified identifier string



```js
rebilly.invoices.id.issue.post({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### invoices.id.items.get
Retrieve an invoice items with specified invoice identifier string



```js
rebilly.invoices.id.items.get({
  "id": ""
}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* id (string) **required** - The resource identifier string

### invoices.id.items.post
Create an invoice item



```js
rebilly.invoices.id.items.post({
  "body": {
    "type": "",
    "unitPrice": 0
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### invoices.id.lead_source.delete
Delete a Lead Source that belongs to a certain invoice



```js
rebilly.invoices.id.lead_source.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### invoices.id.lead_source.get
Retrieve a Lead Source of given invoice



```js
rebilly.invoices.id.lead_source.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### invoices.id.lead_source.put
Create a Lead Source for an invoice



```js
rebilly.invoices.id.lead_source.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### invoices.id.void.post
Void an invoice with specified identifier string



```js
rebilly.invoices.id.void.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### layouts.get
Retrieve a layout list



```js
rebilly.layouts.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### layouts.post
Create a layout



```js
rebilly.layouts.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### layouts.id.delete
Delete a layout with predefined identifier string



```js
rebilly.layouts.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### layouts.id.get
Retrieve a layout with specified identifier string



```js
rebilly.layouts.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### layouts.id.put
Create or update a layout with predefined identifier string



```js
rebilly.layouts.id.put({
  "body": {
    "name": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### lists.get
Retrieve a collection of Lists



```js
rebilly.lists.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* filter (string) - The collection items filter requires a special format.
* criteria (string) - The json criteria for collection
* sort (array) - The collection items sort field and order (prefix with "-" for descending sort).

### lists.post
Create a List



```js
rebilly.lists.post({
  "body": {
    "name": "",
    "values": []
  }
}, context)
```

#### Parameters
* body (object) **required**

### lists.id.delete
Delete a list with predefined identifier string



```js
rebilly.lists.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### lists.id.get
Retrieve latest version of List with specified identifier string



```js
rebilly.lists.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### lists.id.put
Create or update a list with predefined identifier string



```js
rebilly.lists.id.put({
  "body": {
    "name": "",
    "values": []
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### lists.id.version.get
Retrieve List's exact version


```js
rebilly.lists.id.version.get({
  "id": "",
  "version": 0
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string
* version (integer) **required** - List version

### notes.get
Retrieve a list of notes



```js
rebilly.notes.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### notes.post
Create a note



```js
rebilly.notes.post({
  "body": {
    "content": "",
    "relatedType": "",
    "relatedId": null
  }
}, context)
```

#### Parameters
* body (object) **required**

### notes.id.get
Retrieve a note with specified identifier string



```js
rebilly.notes.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### notes.id.put
Create or update a note with predefined identifier string



```js
rebilly.notes.id.put({
  "body": {
    "content": "",
    "relatedType": "",
    "relatedId": null
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### organizations.get
Retrieve a list of organizations



```js
rebilly.organizations.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### organizations.post
Create a organization



```js
rebilly.organizations.post({
  "body": {
    "name": "",
    "country": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### organizations.id.delete
Delete a organization with predefined identifier string



```js
rebilly.organizations.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### organizations.id.get
Retrieve a organization with specified identifier string



```js
rebilly.organizations.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### organizations.id.put
Create or update a organization with predefined identifier string



```js
rebilly.organizations.id.put({
  "body": {
    "name": "",
    "country": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### password_tokens.get
Retrieve a list of tokens



```js
rebilly.password_tokens.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### password_tokens.post
Create a Reset Password Token



```js
rebilly.password_tokens.post({
  "body": {
    "username": "",
    "password": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### password_tokens.id.delete
Delete a Reset Password Token with predefined identifier string



```js
rebilly.password_tokens.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### password_tokens.id.get
Retrieve a Reset Password Token with specified identifier string



```js
rebilly.password_tokens.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### payment_cards.get
Retrieve a list of Payments Cards



```js
rebilly.payment_cards.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### payment_cards.post
Create a Payment Card



```js
rebilly.payment_cards.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### payment_cards_migrations.get
Retrieve a list of payment cards ready for migration



```js
rebilly.payment_cards_migrations.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### payment_cards_migrations.migrate.post
Migrate payment cards to another gateway account



```js
rebilly.payment_cards_migrations.migrate.post({
  "body": {
    "fromGatewayAccountId": null,
    "toGatewayAccountId": null,
    "paymentCardIds": []
  }
}, context)
```

#### Parameters
* body (object) **required**

### payment_cards.id.get
Retrieve a Payment Card with specified identifier string



```js
rebilly.payment_cards.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### payment_cards.id.put
Create a payment card with predefined ID


```js
rebilly.payment_cards.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### payment_cards.id.authorization.post
Authorize a Payment Card



```js
rebilly.payment_cards.id.authorization.post({
  "body": {
    "websiteId": "",
    "currency": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### payment_cards.id.deactivation.post
Deactivate a Payment Card



```js
rebilly.payment_cards.id.deactivation.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### payments.get
Retrieve a payment list



```js
rebilly.payments.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* Accept (string) - The response media type

### payments.post
Create a payment



```js
rebilly.payments.post({
  "body": {
    "websiteId": null,
    "customerId": null,
    "currency": "",
    "amount": 0
  }
}, context)
```

#### Parameters
* body (object) **required**

### payments.id.get
Retrieve a payment with specified identifier string



```js
rebilly.payments.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### payments.id.put
Make a payment with predefined identifier string



```js
rebilly.payments.id.put({
  "body": {
    "websiteId": null,
    "customerId": null,
    "currency": "",
    "amount": 0
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### plans.get
Retrieve a list of plans



```js
rebilly.plans.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### plans.post
Create a plan



```js
rebilly.plans.post({
  "body": {
    "name": "",
    "currency": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### plans.id.delete
Delete a Plan with predefined identifier string



```js
rebilly.plans.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### plans.id.get
Retrieve a plan with specified identifier string



```js
rebilly.plans.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### plans.id.put
Create or update a Plan with predefined identifier string



```js
rebilly.plans.id.put({
  "body": {
    "name": "",
    "currency": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### previews.rule_actions.send_email.post
Send a test email



```js
rebilly.previews.rule_actions.send_email.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required** - Send a test email

### previews.rule_actions.trigger_webhook.post
Trigger a test webhook



```js
rebilly.previews.rule_actions.trigger_webhook.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required** - Trigger a test webhook

### previews.webhooks.post
Trigger a test webhook



```js
rebilly.previews.webhooks.post({
  "body": {
    "method": "",
    "url": "",
    "credentialHash": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### products.get
Retrieve a list of products



```js
rebilly.products.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### products.post
Create a Product



```js
rebilly.products.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - Your product includes digital goods, services, and physical goods.

### products.id.delete
Delete a product with predefined identifier string



```js
rebilly.products.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### products.id.get
Retrieve a product with specified identifier string



```js
rebilly.products.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### products.id.put
Create a product with predefined identifier string



```js
rebilly.products.id.put({
  "body": {
    "name": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required** - Your product includes digital goods, services, and physical goods.
* id (string) **required** - The resource identifier string

### profile.get
Retrieve user's profile



```js
rebilly.profile.get(null, context)
```


### profile.put
Update user's profile



```js
rebilly.profile.put({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### queue.custom_events.get
Retrieve a list of scheduled custom events



```js
rebilly.queue.custom_events.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### queue.custom_events.id.delete
Delete a scheduled custom event with predefined identifier string



```js
rebilly.queue.custom_events.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### queue.custom_events.id.get
Retrieve a scheduled custom event with predefined identifier string



```js
rebilly.queue.custom_events.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### queue.payments.get
Retrieve a scheduled payment list



```js
rebilly.queue.payments.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### queue.payments.id.get
Retrieve a payment with specified identifier string



```js
rebilly.queue.payments.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### queue.payments.id.put
Update pending payment


```js
rebilly.queue.payments.id.put({
  "body": {
    "websiteId": null,
    "customerId": null,
    "currency": "",
    "amount": 0
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### queue.payments.id.cancel.post
Cancel a scheduled payment with specified identifier string



```js
rebilly.queue.payments.id.cancel.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### sessions.get
Retrieve a list of sessions



```js
rebilly.sessions.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### sessions.post
Create a session



```js
rebilly.sessions.post({
  "body": {
    "permissions": null
  }
}, context)
```

#### Parameters
* body (object) **required**

### sessions.id.delete
Delete a Session with predefined identifier string



```js
rebilly.sessions.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### sessions.id.get
Retrieve a Session with specified identifier string



```js
rebilly.sessions.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### sessions.id.put
Create or update a Session with predefined identifier string



```js
rebilly.sessions.id.put({
  "body": {
    "permissions": null
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### shipping_zones.get
Retrieve a list of shipping zones



```js
rebilly.shipping_zones.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### shipping_zones.post
Create a Shipping Zone



```js
rebilly.shipping_zones.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### shipping_zones.id.delete
Delete a shipping zone with predefined identifier string



```js
rebilly.shipping_zones.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### shipping_zones.id.get
Retrieve a shipping zone with specified identifier string



```js
rebilly.shipping_zones.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### shipping_zones.id.put
Create a shipping zone with predefined identifier string



```js
rebilly.shipping_zones.id.put({
  "body": {
    "name": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### signin.post
Create a session with email and password



```js
rebilly.signin.post({
  "body": {
    "email": "",
    "password": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### signup.post
Creates a new user and sends an email confirmation



```js
rebilly.signup.post({
  "body": {
    "email": "",
    "company": "",
    "firstName": "",
    "lastName": "",
    "businessPhone": "",
    "password": "",
    "website": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### status.get
Retrieve API current status



```js
rebilly.status.get(null, context)
```


### subscriptions.get
Retrieve a list of subscriptions



```js
rebilly.subscriptions.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* Accept (string) - The response media type

### subscriptions.post
Create a subscription



```js
rebilly.subscriptions.post({
  "body": {
    "customerId": null,
    "planId": null,
    "websiteId": null
  }
}, context)
```

#### Parameters
* body (object) **required**

### subscriptions.id.get
Retrieve a subscription with specified identifier string



```js
rebilly.subscriptions.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### subscriptions.id.put
Create or update a subscription with predefined identifier string



```js
rebilly.subscriptions.id.put({
  "body": {
    "customerId": null,
    "planId": null,
    "websiteId": null
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### subscriptions.id.cancel.post
Cancel a subscription



```js
rebilly.subscriptions.id.cancel.post({
  "body": {
    "policy": "",
    "canceledBy": "",
    "cancelCategory": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### subscriptions.id.lead_source.delete
Delete a Lead Source that belongs to a certain Subscription



```js
rebilly.subscriptions.id.lead_source.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### subscriptions.id.lead_source.get
Retrieve a Lead Source of given subscription



```js
rebilly.subscriptions.id.lead_source.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### subscriptions.id.lead_source.put
Create a Lead Source for a Subscription



```js
rebilly.subscriptions.id.lead_source.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### subscriptions.id.switch.post
Switch a subscription



```js
rebilly.subscriptions.id.switch.post({
  "body": {
    "planId": null,
    "policy": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### tax_categories.get
Retrieve a list of tax categories



```js
rebilly.tax_categories.get(null, context)
```


### tokens.get
Retrieve a list of tokens



```js
rebilly.tokens.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### tokens.post
Create a token



```js
rebilly.tokens.post({
  "body": {
    "method": "",
    "paymentInstrument": {},
    "firstName": "",
    "lastName": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### tokens.token.get
Retrieve a token with specified identifier string



```js
rebilly.tokens.token.get({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - The token identifier string

### tokens.token.expiration.post
Expire a token



```js
rebilly.tokens.token.expiration.post({
  "body": {
    "method": "",
    "paymentInstrument": {},
    "firstName": "",
    "lastName": ""
  },
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* token (string) **required** - The token identifier string

### tracking.api.get
Retrieve a list of tracking API logs


```js
rebilly.tracking.api.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* Accept (string) - The response media type

### tracking.api.id.get
Retrieve a tracking API log with specified identifier string


```js
rebilly.tracking.api.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### tracking.lists.get
Retrieve Lists changes history


```js
rebilly.tracking.lists.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### tracking.subscriptions.get
Retrieve a list of tracking subscription logs


```js
rebilly.tracking.subscriptions.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### tracking.subscriptions.id.get
Retrieve a tracking subscription log with specified identifier string


```js
rebilly.tracking.subscriptions.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### tracking.website_webhooks.get
Retrieve a list of tracking webhook notifications


```js
rebilly.tracking.website_webhooks.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### tracking.website_webhooks.id.get
Retrieve a tracking webhook notification with specified identifier string


```js
rebilly.tracking.website_webhooks.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### transactions.get
Retrieve a list of transactions



```js
rebilly.transactions.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* filter (string) - The collection items filter requires a special format.
* sort (array) - The collection items sort field and order (prefix with "-" for descending sort).
* Accept (string) - The response media type

### transactions.id.get
Retrieve a Transaction with specified identifier string



```js
rebilly.transactions.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### transactions.id.gateway_logs.get
Retrieve Gateway communication Logs for Transaction with specified identifier string


```js
rebilly.transactions.id.gateway_logs.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### transactions.id.lead_source.delete
Delete a Lead Source that belongs to a certain transaction



```js
rebilly.transactions.id.lead_source.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### transactions.id.lead_source.get
Retrieve a Lead Source of given transaction



```js
rebilly.transactions.id.lead_source.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### transactions.id.lead_source.put
Create a Lead Source for a transaction



```js
rebilly.transactions.id.lead_source.put({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### transactions.id.refund.post
Refund a Transaction with specified identifier string.
Note that the refund will be in the same currency as the original transaction.



```js
rebilly.transactions.id.refund.post({
  "body": {
    "amount": 0
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### users.get
Retrieve a list of users



```js
rebilly.users.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### users.post
Create an user



```js
rebilly.users.post({
  "body": {
    "email": "",
    "firstName": "",
    "lastName": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### users.reset_password.token.post
Reset user password



```js
rebilly.users.reset_password.token.post({
  "body": {
    "newPassword": ""
  },
  "token": ""
}, context)
```

#### Parameters
* body (object) **required**
* token (string) **required** - The token string

### users.id.delete
Delete user with predefined identifier string



```js
rebilly.users.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### users.id.get
Retrieve user with specified identifier string



```js
rebilly.users.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### users.id.put
Create or update user with predefined identifier string



```js
rebilly.users.id.put({
  "body": {
    "email": "",
    "firstName": "",
    "lastName": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### users.id.password.post
Updates user's password with the specified newPassword. And checks if currentPassword matches the actual one.



```js
rebilly.users.id.password.post({
  "body": {},
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### users.id.totp_reset.post
Reset (renew) totpSecret



```js
rebilly.users.id.totp_reset.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### webhooks.get
Retrieve a list of webhooks



```js
rebilly.webhooks.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset

### webhooks.post
Create a webhook



```js
rebilly.webhooks.post({
  "body": {
    "method": "",
    "url": "",
    "credentialHash": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### webhooks.id.get
Retrieve a webhook with specified identifier string



```js
rebilly.webhooks.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### webhooks.id.put
Create or update a webhook with predefined identifier string



```js
rebilly.webhooks.id.put({
  "body": {
    "method": "",
    "url": "",
    "credentialHash": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### websites.get
Retrieve a list of websites



```js
rebilly.websites.get({}, context)
```

#### Parameters
* limit (integer) - The collection items limit
* offset (integer) - The collection items offset
* Accept (string) - The response media type

### websites.post
Create a website



```js
rebilly.websites.post({
  "body": {
    "name": "",
    "url": "",
    "servicePhone": "",
    "serviceEmail": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### websites.id.delete
Delete a website with predefined identifier string



```js
rebilly.websites.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### websites.id.get
Retrieve a website with specified identifier string



```js
rebilly.websites.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### websites.id.put
Create or update a website with predefined identifier string



```js
rebilly.websites.id.put({
  "body": {
    "name": "",
    "url": "",
    "servicePhone": "",
    "serviceEmail": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

### websites.id.webhook.delete
Delete a webhook that belongs to a website with predefined ID



```js
rebilly.websites.id.webhook.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### websites.id.webhook.get
Retrieve a webhook for website with specified identifier string



```js
rebilly.websites.id.webhook.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The resource identifier string

### websites.id.webhook.put
Create or update a webhook for website with predefined identifier string



```js
rebilly.websites.id.webhook.put({
  "body": {
    "webHookUrl": "",
    "webHookUsername": "",
    "webHookPassword": ""
  },
  "id": ""
}, context)
```

#### Parameters
* body (object) **required**
* id (string) **required** - The resource identifier string

