# @datafire/rebilly

Client library for Rebilly

## Installation and Usage
```bash
npm install --save @datafire/rebilly
```
```js
let rebilly = require('@datafire/rebilly').create({
  ApiKey: "",
  username: "",
  password: "",
  RebAuth: ""
});

rebilly.websites.get({}).then(data => {
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

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [ThreeDSecure](#threedsecure)

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

#### Input
* input `object`
  * body **required** [ThreeDSecure](#threedsecure)

#### Output
* output [ThreeDSecure](#threedsecure)

### 3dsecure.id.get
Retrieve a ThreeDSecure entry with specified identifier string



```js
rebilly.3dsecure.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [ThreeDSecure](#threedsecure)

### activation.token.post
Sends a token to activate user account



```js
rebilly.activation.token.post({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token string

#### Output
*Output schema unknown*

### api_keys.get
Retrieve a list of api keys



```js
rebilly.api_keys.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [ApiKey](#apikey)

### api_keys.post
Create an api key



```js
rebilly.api_keys.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ApiKey](#apikey)

#### Output
* output [ApiKey](#apikey)

### api_keys.id.delete
Delete api key with predefined identifier string



```js
rebilly.api_keys.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### api_keys.id.get
Retrieve api key with specified identifier string



```js
rebilly.api_keys.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [ApiKey](#apikey)

### api_keys.id.put
Create or update api key with predefined identifier string



```js
rebilly.api_keys.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ApiKey](#apikey)
  * id **required** `string`: The resource identifier string

#### Output
* output [ApiKey](#apikey)

### attachments.get
Retrieve a list of Attachments



```js
rebilly.attachments.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * expand `string`: Expand response to get full related object intead of ID.  See the expand guide for more info.
  * fields `string`: Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).

#### Output
* output `array`
  * items [Attachment](#attachment)

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

#### Input
* input `object`
  * body **required** [Attachment](#attachment)

#### Output
* output [Attachment](#attachment)

### attachments.id.delete
Delete the Attachment with predefined identifier string



```js
rebilly.attachments.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### attachments.id.get
Retrieve a Attachment with specified identifier string



```js
rebilly.attachments.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Attachment](#attachment)

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

#### Input
* input `object`
  * body **required** [Attachment](#attachment)
  * id **required** `string`: The resource identifier string

#### Output
* output [Attachment](#attachment)

### authentication_options.get
Read current authentication options



```js
rebilly.authentication_options.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [AuthenticationOptions](#authenticationoptions)

### authentication_options.put
Change options



```js
rebilly.authentication_options.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [AuthenticationOptions](#authenticationoptions)

#### Output
* output [AuthenticationOptions](#authenticationoptions)

### authentication_tokens.get
Retrieve a list of auth tokens



```js
rebilly.authentication_tokens.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [AuthenticationToken](#authenticationtoken)

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

#### Input
* input `object`
  * body **required** [AuthenticationToken](#authenticationtoken)

#### Output
* output [AuthenticationToken](#authenticationtoken)

### authentication_tokens.token.delete
Logout a user



```js
rebilly.authentication_tokens.token.delete({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token identifier string

#### Output
*Output schema unknown*

### authentication_tokens.token.get
Verify an authentication token



```js
rebilly.authentication_tokens.token.get({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token identifier string

#### Output
* output [AuthenticationToken](#authenticationtoken)

### bank_accounts.get
Retrieve a list of Bank Accounts



```js
rebilly.bank_accounts.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [BankAccount](#bankaccount)

### bank_accounts.post
Create a Bank Account



```js
rebilly.bank_accounts.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [BankAccount](#bankaccount)

#### Output
* output [BankAccount](#bankaccount)

### bank_accounts.id.get
Retrieve a Bank Account with specified identifier string



```js
rebilly.bank_accounts.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [BankAccount](#bankaccount)

### bank_accounts.id.put
Create or update a BankAccount with predefined identifier string



```js
rebilly.bank_accounts.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [BankAccount](#bankaccount)
  * id **required** `string`: The resource identifier string

#### Output
* output [BankAccount](#bankaccount)

### bank_accounts.id.deactivation.post
Deactivate a Bank Account



```js
rebilly.bank_accounts.id.deactivation.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [BankAccount](#bankaccount)

### blacklists.get
Retrieve a list of blacklists



```js
rebilly.blacklists.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Blacklist](#blacklist)

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

#### Input
* input `object`
  * body **required** [Blacklist](#blacklist)

#### Output
* output [Blacklist](#blacklist)

### blacklists.id.delete
Delete a blacklist with predefined identifier string



```js
rebilly.blacklists.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### blacklists.id.get
Retrieve a blacklist with specified identifier string



```js
rebilly.blacklists.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Blacklist](#blacklist)

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

#### Input
* input `object`
  * body **required** [Blacklist](#blacklist)
  * id **required** `string`: The resource identifier string

#### Output
* output [Blacklist](#blacklist)

### checkout_pages.get
Retrieve a list of checkout pages



```js
rebilly.checkout_pages.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [CheckoutPage](#checkoutpage)

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

#### Input
* input `object`
  * body **required** [CheckoutPage](#checkoutpage)

#### Output
* output [CheckoutPage](#checkoutpage)

### checkout_pages.id.delete
Delete a Checkout Page with predefined identifier string



```js
rebilly.checkout_pages.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### checkout_pages.id.get
Retrieve a Checkout Page with specified identifier string



```js
rebilly.checkout_pages.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [CheckoutPage](#checkoutpage)

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

#### Input
* input `object`
  * body **required** [CheckoutPage](#checkoutpage)
  * id **required** `string`: The resource identifier string

#### Output
* output [CheckoutPage](#checkoutpage)

### contacts.get
Retrieve a list of contacts



```js
rebilly.contacts.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Contact](#contact)

### contacts.post
Create a contact



```js
rebilly.contacts.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Contact](#contact)

#### Output
* output [Contact](#contact)

### contacts.id.delete
Delete a contact with predefined identifier string



```js
rebilly.contacts.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### contacts.id.get
Retrieve a contact with specified identifier string



```js
rebilly.contacts.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Contact](#contact)

### contacts.id.put
Create or update a contact with predefined identifier string



```js
rebilly.contacts.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Contact](#contact)
  * id **required** `string`: The resource identifier string

#### Output
* output [Contact](#contact)

### coupons.get
Retrieve a list of coupons



```js
rebilly.coupons.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * criteria `string`: The json criteria for collection
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).

#### Output
* output `array`
  * items [Coupon](#coupon)

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

#### Input
* input `object`
  * body **required** [Coupon](#coupon)

#### Output
* output [Coupon](#coupon)

### coupons_redemptions.get
Retrieve a list of coupon redemptions


```js
rebilly.coupons_redemptions.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * criteria `string`: The json criteria for collection
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).

#### Output
* output `array`
  * items [CouponRedemption](#couponredemption)

### coupons_redemptions.post
Redeem a coupon



```js
rebilly.coupons_redemptions.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CouponRedemption](#couponredemption)

#### Output
* output [CouponRedemption](#couponredemption)

### coupons_redemptions.id.get
Retrieve a coupon redemption with specified identifier string


```js
rebilly.coupons_redemptions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [CouponRedemption](#couponredemption)

### coupons_redemptions.id.cancel.post
Cancel a coupon redemption


```js
rebilly.coupons_redemptions.id.cancel.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### coupons.redemptionCode.get
Retrieve a coupon with specified redemption code string



```js
rebilly.coupons.redemptionCode.get({
  "redemptionCode": ""
}, context)
```

#### Input
* input `object`
  * redemptionCode **required** `string`: The Coupon's redemption code

#### Output
* output [Coupon](#coupon)

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

#### Input
* input `object`
  * body **required** [Coupon](#coupon)
  * redemptionCode **required** `string`: The Coupon's redemption code

#### Output
* output [Coupon](#coupon)

### coupons.redemptionCode.expiration.post
Set a coupon's expiry time with the specified redemption code.
The expiredTime of a coupon must be greater than its issuedTime.
This cannot be performed on expired coupons.



```js
rebilly.coupons.redemptionCode.expiration.post({
  "redemptionCode": ""
}, context)
```

#### Input
* input `object`
  * body [CouponExpiration](#couponexpiration)
  * redemptionCode **required** `string`: The Coupon's redemption code

#### Output
* output [Coupon](#coupon)

### credential_hashes.emails.post
Create an email credential



```js
rebilly.credential_hashes.emails.post({
  "body": {
    "host": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SmtpCredential](#smtpcredential)

#### Output
* output [SmtpCredential](#smtpcredential)

### credential_hashes.emails.hash.get
Retrieve an email credential with specified token identifier string



```js
rebilly.credential_hashes.emails.hash.get({
  "hash": ""
}, context)
```

#### Input
* input `object`
  * hash **required** `string`: The token identifier string

#### Output
* output [SmtpCredential](#smtpcredential)

### credential_hashes.webhooks.post
Create a webhook credential



```js
rebilly.credential_hashes.webhooks.post({
  "body": {
    "host": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WebhookCredential](#webhookcredential)

#### Output
* output [WebhookCredential](#webhookcredential)

### credential_hashes.webhooks.hash.get
Retrieve a webhook credential with specified token identifier string



```js
rebilly.credential_hashes.webhooks.hash.get({
  "hash": ""
}, context)
```

#### Input
* input `object`
  * hash **required** `string`: The token identifier string

#### Output
* output [WebhookCredential](#webhookcredential)

### credentials.get
Retrieve a list of credentials



```js
rebilly.credentials.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Credential](#credential)

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

#### Input
* input `object`
  * body **required** [Credential](#credential)

#### Output
* output [Credential](#credential)

### credentials.id.delete
Delete a credential with predefined identifier string



```js
rebilly.credentials.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### credentials.id.get
Retrieve a credential with specified identifier string



```js
rebilly.credentials.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Credential](#credential)

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

#### Input
* input `object`
  * body **required** [Credential](#credential)
  * id **required** `string`: The resource identifier string

#### Output
* output [Credential](#credential)

### custom_events.get
Retrieve a list of custom events



```js
rebilly.custom_events.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).

#### Output
* output `array`
  * items [CustomEvent](#customevent)

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

#### Input
* input `object`
  * body **required** [CustomEvent](#customevent)

#### Output
* output [CustomEvent](#customevent)

### custom_events.id.delete
Delete a custom event with predefined identifier string



```js
rebilly.custom_events.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### custom_events.id.get
Retrieve a custom event with predefined identifier string



```js
rebilly.custom_events.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [CustomEvent](#customevent)

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

#### Input
* input `object`
  * body **required** [CustomEvent](#customevent)
  * id **required** `string`: The resource identifier string

#### Output
* output [CustomEvent](#customevent)

### custom_events.id.rules.get
Retrieve a list of rules for custom event


```js
rebilly.custom_events.id.rules.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [RuleSet](#ruleset)

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

#### Input
* input `object`
  * body **required** [RuleSet](#ruleset)
  * id **required** `string`: The resource identifier string

#### Output
* output [RuleSet](#ruleset)

### custom_events.id.rules.history.get
Retrieve the change history of the set of rules for the selected custom event.
The history is updated each time you change the rules.



```js
rebilly.custom_events.id.rules.history.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * fields `string`: Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
  * expand `string`: Expand response to get full related object intead of ID.  See the expand guide for more info.
  * id **required** `string`: The resource identifier string

#### Output
* output `array`
  * items [RuleSetHistoryItem](#rulesethistoryitem)

### custom_events.id.rules.history.version.get
Retrieve the record from the change history of the set of rules for the selected custom event.
A history record is created each time you change the rules.



```js
rebilly.custom_events.id.rules.history.version.get({
  "id": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * fields `string`: Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
  * expand `string`: Expand response to get full related object intead of ID.  See the expand guide for more info.
  * id **required** `string`: The resource identifier string
  * version **required** `integer`: The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.

#### Output
* output [RuleSetHistoryItem](#rulesethistoryitem)

### custom_events.id.rules.versions.version.get
Retrieve the version of the selected set of rules for the selected custom event.
The versions are created each time you change the rules.



```js
rebilly.custom_events.id.rules.versions.version.get({
  "id": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * fields `string`: Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
  * expand `string`: Expand response to get full related object intead of ID.  See the expand guide for more info.
  * id **required** `string`: The resource identifier string
  * version **required** `integer`: The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.

#### Output
* output [RuleSetVersion](#rulesetversion)

### custom_fields.resource.get
Retrieve a schema of Custom Fields for the given resource type



```js
rebilly.custom_fields.resource.get({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string` (values: customers, payment-cards, subscriptions, transactions, websites, contacts, products): The resource type string

#### Output
* output `array`: The list of custom fields
  * items [CustomField](#customfield)

### custom_fields.resource.name.delete
Delete a custom field by its name



```js
rebilly.custom_fields.resource.name.delete({
  "resource": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string` (values: customers, payment-cards, subscriptions, transactions, websites, contacts, products): The resource type string
  * name **required** `string`: The custom field's identifier string

#### Output
*Output schema unknown*

### custom_fields.resource.name.get
Retrieve a schema of the given Custom Field for the given resource type



```js
rebilly.custom_fields.resource.name.get({
  "resource": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string` (values: customers, payment-cards, subscriptions, transactions, websites, contacts, products): The resource type string
  * name **required** `string`: The custom field's identifier string

#### Output
* output [CustomField](#customfield)

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

#### Input
* input `object`
  * body **required** [CustomField](#customfield)
  * resource **required** `string` (values: customers, payment-cards, subscriptions, transactions, websites, contacts, products): The resource type string
  * name **required** `string`: The custom field's identifier string

#### Output
* output [CustomField](#customfield)

### customers.get
Retrieve a list of customers



```js
rebilly.customers.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * expand `string`: Expand response to get full related object intead of ID.  See the expand guide for more info.
  * fields `string`: Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Accept `string` (values: application/json, text/csv): The response media type

#### Output
* output `array`
  * items [Customer](#customer)

### customers.post
Create a customer



```js
rebilly.customers.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Customer](#customer)

#### Output
* output [Customer](#customer)

### customers.id.get
Retrieve a customer with specified identifier string



```js
rebilly.customers.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Customer](#customer)

### customers.id.put
Create a customer with predefined identifier string



```js
rebilly.customers.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Customer](#customer)
  * id **required** `string`: The resource identifier string

#### Output
* output [Customer](#customer)

### customers.id.lead_source.delete
Delete a Lead Source that belongs to a certain customer



```js
rebilly.customers.id.lead_source.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### customers.id.lead_source.get
Retrieve a Lead Source of given customer



```js
rebilly.customers.id.lead_source.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [LeadSource](#leadsource)

### customers.id.lead_source.put
Create a Lead Source for a customer



```js
rebilly.customers.id.lead_source.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [LeadSource](#leadsource)
  * id **required** `string`: The resource identifier string

#### Output
* output [LeadSource](#leadsource)

### disputes.get
Retrieve a list of disputes



```js
rebilly.disputes.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Dispute](#dispute)

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

#### Input
* input `object`
  * body **required** [Dispute](#dispute)

#### Output
* output [Dispute](#dispute)

### disputes.id.get
Retrieve a dispute with specified identifier string



```js
rebilly.disputes.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Dispute](#dispute)

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

#### Input
* input `object`
  * body **required** [Dispute](#dispute)
  * id **required** `string`: The resource identifier string

#### Output
* output [Dispute](#dispute)

### events.get
Retrieve a list of existing events


```js
rebilly.events.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [SystemEvent](#systemevent)

### events.eventType.get
Retrieve the event information


```js
rebilly.events.eventType.get({
  "eventType": ""
}, context)
```

#### Input
* input `object`
  * eventType **required** `string`: The event type

#### Output
* output [SystemEvent](#systemevent)

### events.eventType.rules.get
Retrieve a list of rules for event


```js
rebilly.events.eventType.rules.get({
  "eventType": ""
}, context)
```

#### Input
* input `object`
  * eventType **required** `string`: The event type

#### Output
* output [RuleSet](#ruleset)

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

#### Input
* input `object`
  * body **required** [RuleSet](#ruleset)
  * eventType **required** `string`: The event type

#### Output
* output [RuleSet](#ruleset)

### events.eventType.rules.history.get
Retrieve the change history of the selected set of rules.
The history is updated each time you change the rules.



```js
rebilly.events.eventType.rules.history.get({
  "eventType": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * fields `string`: Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
  * expand `string`: Expand response to get full related object intead of ID.  See the expand guide for more info.
  * eventType **required** `string`: The event type

#### Output
* output `array`
  * items [RuleSetHistoryItem](#rulesethistoryitem)

### events.eventType.rules.history.version.get
Retrieve the record from the change history of the selected set of rules.
A history record is created each time you change the rules.



```js
rebilly.events.eventType.rules.history.version.get({
  "eventType": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * fields `string`: Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
  * expand `string`: Expand response to get full related object intead of ID.  See the expand guide for more info.
  * eventType **required** `string`: The event type
  * version **required** `integer`: The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.

#### Output
* output [RuleSetHistoryItem](#rulesethistoryitem)

### events.eventType.rules.versions.version.get
Retrieve the version of the selected set of rules.
The versions are created each time you change the rules.



```js
rebilly.events.eventType.rules.versions.version.get({
  "eventType": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * fields `string`: Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
  * expand `string`: Expand response to get full related object intead of ID.  See the expand guide for more info.
  * eventType **required** `string`: The event type
  * version **required** `integer`: The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.

#### Output
* output [RuleSetVersion](#rulesetversion)

### files.get
Retrieve a list of files



```js
rebilly.files.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * expand `string`: Expand response to get full related object intead of ID.  See the expand guide for more info.
  * fields `string`: Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).

#### Output
* output `array`
  * items [File](#file)

### files.post
Create a file



```js
rebilly.files.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * url `string`: The file URL

#### Output
* output [File](#file)

### files.id.delete
Delete the File with predefined identifier string



```js
rebilly.files.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### files.id.get
Retrieve a File with specified identifier string



```js
rebilly.files.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [File](#file)

### files.id.put
Update the File with predefined ID



```js
rebilly.files.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [File](#file)
  * id **required** `string`: The resource identifier string

#### Output
* output [File](#file)

### files.id.download.get
Retrieve a file



```js
rebilly.files.id.download.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output `string`

### files.id.downloadextension.get
Used for converting images server-side



```js
rebilly.files.id.downloadextension.get({
  "id": "",
  "extension": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * extension **required** `string` (values: .png, .jpg): File extension which also indicates the desired file format

#### Output
* output `string`

### forgot_password.post
Sends an email with a link containing a token to reset user password



```js
rebilly.forgot_password.post({
  "body": {
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Email](#email)

#### Output
*Output schema unknown*

### gateway_accounts.get
Retrieve a list of gateway accounts



```js
rebilly.gateway_accounts.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [GatewayAccount](#gatewayaccount)

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

#### Input
* input `object`
  * body **required** [GatewayAccount](#gatewayaccount)

#### Output
* output [GatewayAccount](#gatewayaccount)

### gateway_accounts.id.delete
Delete a Gateway Account with predefined identifier string



```js
rebilly.gateway_accounts.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### gateway_accounts.id.get
Retrieve a Gateway Account with specified identifier string



```js
rebilly.gateway_accounts.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [GatewayAccount](#gatewayaccount)

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

#### Input
* input `object`
  * body **required** [GatewayAccount](#gatewayaccount)
  * id **required** `string`: The resource identifier string

#### Output
* output [GatewayAccount](#gatewayaccount)

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

#### Input
* input `object`
  * body **required** [GatewayAccount](#gatewayaccount)
  * id **required** `string`: The resource identifier string

#### Output
* output [GatewayAccount](#gatewayaccount)

### invoices.get
Retrieve a list of invoices



```js
rebilly.invoices.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Accept `string` (values: application/json, text/csv): The response media type

#### Output
* output `array`
  * items [Invoice](#invoice)

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

#### Input
* input `object`
  * body **required** [Invoice](#invoice)

#### Output
* output [Invoice](#invoice)

### invoices.id.get
Retrieve an invoice with specified identifier string



```js
rebilly.invoices.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept `string` (values: application/json, application/pdf): The response media type
  * id **required** `string`: The resource identifier string

#### Output
* output [Invoice](#invoice)

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

#### Input
* input `object`
  * body **required** [Invoice](#invoice)
  * id **required** `string`: The resource identifier string

#### Output
* output [Invoice](#invoice)

### invoices.id.abandon.post
Abandon an invoice with specified identifier string



```js
rebilly.invoices.id.abandon.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Invoice](#invoice)

### invoices.id.issue.post
Issue an invoice with specified identifier string



```js
rebilly.invoices.id.issue.post({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [InvoiceIssue](#invoiceissue)
  * id **required** `string`: The resource identifier string

#### Output
* output [Invoice](#invoice)

### invoices.id.items.get
Retrieve an invoice items with specified invoice identifier string



```js
rebilly.invoices.id.items.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * id **required** `string`: The resource identifier string

#### Output
* output `array`
  * items [InvoiceItem](#invoiceitem)

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

#### Input
* input `object`
  * body **required** [InvoiceItem](#invoiceitem)
  * id **required** `string`: The resource identifier string

#### Output
* output [InvoiceItem](#invoiceitem)

### invoices.id.lead_source.delete
Delete a Lead Source that belongs to a certain invoice



```js
rebilly.invoices.id.lead_source.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### invoices.id.lead_source.get
Retrieve a Lead Source of given invoice



```js
rebilly.invoices.id.lead_source.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [LeadSource](#leadsource)

### invoices.id.lead_source.put
Create a Lead Source for an invoice



```js
rebilly.invoices.id.lead_source.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [LeadSource](#leadsource)
  * id **required** `string`: The resource identifier string

#### Output
* output [LeadSource](#leadsource)

### invoices.id.void.post
Void an invoice with specified identifier string



```js
rebilly.invoices.id.void.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Invoice](#invoice)

### layouts.get
Retrieve a layout list



```js
rebilly.layouts.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Layout](#layout)

### layouts.post
Create a layout



```js
rebilly.layouts.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Layout](#layout)

#### Output
* output [Layout](#layout)

### layouts.id.delete
Delete a layout with predefined identifier string



```js
rebilly.layouts.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### layouts.id.get
Retrieve a layout with specified identifier string



```js
rebilly.layouts.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Layout](#layout)

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

#### Input
* input `object`
  * body **required** [Layout](#layout)
  * id **required** `string`: The resource identifier string

#### Output
* output [Layout](#layout)

### lists.get
Retrieve a collection of Lists



```js
rebilly.lists.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * criteria `string`: The json criteria for collection
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).

#### Output
* output `array`
  * items [List](#list)

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

#### Input
* input `object`
  * body **required** [List](#list)

#### Output
* output [List](#list)

### lists.id.delete
Delete a list with predefined identifier string



```js
rebilly.lists.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### lists.id.get
Retrieve latest version of List with specified identifier string



```js
rebilly.lists.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [List](#list)

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

#### Input
* input `object`
  * body **required** [List](#list)
  * id **required** `string`: The resource identifier string

#### Output
* output [List](#list)

### lists.id.version.get
Retrieve List's exact version


```js
rebilly.lists.id.version.get({
  "id": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * version **required** `integer`: List version

#### Output
* output [List](#list)

### notes.get
Retrieve a list of notes



```js
rebilly.notes.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Note](#note)

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

#### Input
* input `object`
  * body **required** [Note](#note)

#### Output
* output [Note](#note)

### notes.id.get
Retrieve a note with specified identifier string



```js
rebilly.notes.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Note](#note)

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

#### Input
* input `object`
  * body **required** [Note](#note)
  * id **required** `string`: The resource identifier string

#### Output
* output [Note](#note)

### organizations.get
Retrieve a list of organizations



```js
rebilly.organizations.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Organization](#organization)

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

#### Input
* input `object`
  * body **required** [Organization](#organization)

#### Output
* output [Organization](#organization)

### organizations.id.delete
Delete a organization with predefined identifier string



```js
rebilly.organizations.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### organizations.id.get
Retrieve a organization with specified identifier string



```js
rebilly.organizations.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Organization](#organization)

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

#### Input
* input `object`
  * body **required** [Organization](#organization)
  * id **required** `string`: The resource identifier string

#### Output
* output [Organization](#organization)

### password_tokens.get
Retrieve a list of tokens



```js
rebilly.password_tokens.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [ResetPasswordToken](#resetpasswordtoken)

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

#### Input
* input `object`
  * body **required** [ResetPasswordToken](#resetpasswordtoken)

#### Output
* output [ResetPasswordToken](#resetpasswordtoken)

### password_tokens.id.delete
Delete a Reset Password Token with predefined identifier string



```js
rebilly.password_tokens.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### password_tokens.id.get
Retrieve a Reset Password Token with specified identifier string



```js
rebilly.password_tokens.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [ResetPasswordToken](#resetpasswordtoken)

### payment_cards.get
Retrieve a list of Payments Cards



```js
rebilly.payment_cards.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [PaymentCard](#paymentcard)

### payment_cards.post
Create a Payment Card



```js
rebilly.payment_cards.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [PaymentCard](#paymentcard)

#### Output
* output [PaymentCard](#paymentcard)

### payment_cards_migrations.get
Retrieve a list of payment cards ready for migration



```js
rebilly.payment_cards_migrations.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [PaymentCard](#paymentcard)

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

#### Input
* input `object`
  * body **required** [PaymentCardMigrationRequest](#paymentcardmigrationrequest)

#### Output
* output [PaymentCardMigrationResponse](#paymentcardmigrationresponse)

### payment_cards.id.get
Retrieve a Payment Card with specified identifier string



```js
rebilly.payment_cards.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [PaymentCard](#paymentcard)

### payment_cards.id.patch
Update a payment card's cvv value with predefined identifier string



```js
rebilly.payment_cards.id.patch({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * cvv `string`: Card's cvv (card verification value).
  * id **required** `string`: The resource identifier string

#### Output
* output [PaymentCard](#paymentcard)

### payment_cards.id.put
Create a payment card with predefined ID


```js
rebilly.payment_cards.id.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [PaymentCard](#paymentcard)
  * id **required** `string`: The resource identifier string

#### Output
* output [PaymentCard](#paymentcard)

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

#### Input
* input `object`
  * body **required** `object`
    * amount `number`: Amount
    * currency **required** `string`: Currency (three letter code)
    * gatewayAccountId `string`: The Gateway account ID
    * websiteId **required** `string`: The Website ID
  * id **required** `string`: The resource identifier string

#### Output
* output [PaymentCard](#paymentcard)

### payment_cards.id.deactivation.post
Deactivate a Payment Card



```js
rebilly.payment_cards.id.deactivation.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [PaymentCard](#paymentcard)

### payments.get
Retrieve a payment list



```js
rebilly.payments.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Accept `string` (values: application/json, text/csv): The response media type

#### Output
* output `array`
  * items [Payment](#payment)

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

#### Input
* input `object`
  * body **required** [Payment](#payment)

#### Output
* output `array`
  * items [Payment](#payment)

### payments.id.get
Retrieve a payment with specified identifier string



```js
rebilly.payments.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Payment](#payment)

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

#### Input
* input `object`
  * body **required** [Payment](#payment)
  * id **required** `string`: The resource identifier string

#### Output
* output `array`
  * items [Payment](#payment)

### paypal_accounts.get
Retrieve a list of PayPal Accounts



```js
rebilly.paypal_accounts.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [PayPalAccount](#paypalaccount)

### paypal_accounts.post
Create a PayPal Account



```js
rebilly.paypal_accounts.post({
  "body": {
    "customerId": null,
    "billingAddress": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PayPalAccount](#paypalaccount)

#### Output
* output [PayPalAccount](#paypalaccount)

### paypal_accounts.id.get
Retrieve a PayPal Account with specified identifier string



```js
rebilly.paypal_accounts.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [PayPalAccount](#paypalaccount)

### paypal_accounts.id.put
Create a PayPal account with predefined ID


```js
rebilly.paypal_accounts.id.put({
  "body": {
    "customerId": null,
    "billingAddress": null
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [PayPalAccount](#paypalaccount)
  * id **required** `string`: The resource identifier string

#### Output
* output [PayPalAccount](#paypalaccount)

### paypal_accounts.id.activation.post
Activate a PayPal Account



```js
rebilly.paypal_accounts.id.activation.post({
  "body": {
    "websiteId": "",
    "currency": ""
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * amount `number`: The amount to authorize
    * currency **required** `string`: Currency (three letter code)
    * gatewayAccountId `string`: The Gateway Account ID which use to send transactions
    * redirectURLs `object`: Redirect URLs
    * websiteId **required** `string`: The Website ID
  * id **required** `string`: The resource identifier string

#### Output
* output [PayPalAccount](#paypalaccount)

### paypal_accounts.id.deactivation.post
Deactivate a PayPal Account



```js
rebilly.paypal_accounts.id.deactivation.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [PayPalAccount](#paypalaccount)

### plans.get
Retrieve a list of plans



```js
rebilly.plans.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Plan](#plan)

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

#### Input
* input `object`
  * body **required** [Plan](#plan)

#### Output
* output [Plan](#plan)

### plans.id.delete
Delete a Plan with predefined identifier string



```js
rebilly.plans.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### plans.id.get
Retrieve a plan with specified identifier string



```js
rebilly.plans.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Plan](#plan)

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

#### Input
* input `object`
  * body **required** [Plan](#plan)
  * id **required** `string`: The resource identifier string

#### Output
* output [Plan](#plan)

### previews.rule_actions.send_email.post
Send a test email



```js
rebilly.previews.rule_actions.send_email.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [SendTestEmail](#sendtestemail)

#### Output
* output [SendTestEmail](#sendtestemail)

### previews.rule_actions.trigger_webhook.post
Trigger a test webhook



```js
rebilly.previews.rule_actions.trigger_webhook.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [SendPreviewWebhook](#sendpreviewwebhook)

#### Output
* output [SendPreviewWebhook](#sendpreviewwebhook)

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

#### Input
* input `object`
  * body **required** [GlobalWebhook](#globalwebhook)

#### Output
*Output schema unknown*

### products.get
Retrieve a list of products



```js
rebilly.products.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Product](#product)

### products.post
Create a Product



```js
rebilly.products.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Product](#product)

#### Output
* output [Product](#product)

### products.id.delete
Delete a product with predefined identifier string



```js
rebilly.products.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### products.id.get
Retrieve a product with specified identifier string



```js
rebilly.products.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Product](#product)

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

#### Input
* input `object`
  * body **required** [Product](#product)
  * id **required** `string`: The resource identifier string

#### Output
* output [Product](#product)

### profile.get
Retrieve user's profile



```js
rebilly.profile.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Profile](#profile)

### profile.put
Update user's profile



```js
rebilly.profile.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Profile](#profile)

#### Output
* output [Profile](#profile)

### profile.password.post
Updates user's password with the specified newPassword. And checks if currentPassword matches the actual one.



```js
rebilly.profile.password.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [UpdatePassword](#updatepassword)

#### Output
* output [Profile](#profile)

### profile.totp_reset.post
Reset (renew) totpSecret



```js
rebilly.profile.totp_reset.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Profile](#profile)

### queue.custom_events.get
Retrieve a list of scheduled custom events



```js
rebilly.queue.custom_events.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [CustomEvent](#customevent)

### queue.custom_events.id.delete
Delete a scheduled custom event with predefined identifier string



```js
rebilly.queue.custom_events.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### queue.custom_events.id.get
Retrieve a scheduled custom event with predefined identifier string



```js
rebilly.queue.custom_events.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [CustomEvent](#customevent)

### queue.payments.get
Retrieve a scheduled payment list



```js
rebilly.queue.payments.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Payment](#payment)

### queue.payments.id.get
Retrieve a payment with specified identifier string



```js
rebilly.queue.payments.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Payment](#payment)

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

#### Input
* input `object`
  * body **required** [Payment](#payment)
  * id **required** `string`: The resource identifier string

#### Output
* output [Payment](#payment)

### sessions.get
Retrieve a list of sessions



```js
rebilly.sessions.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [Session](#session)

### sessions.post
Create a session



```js
rebilly.sessions.post({
  "body": {
    "permissions": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Session](#session)

#### Output
* output [Session](#session)

### sessions.id.delete
Delete a Session with predefined identifier string



```js
rebilly.sessions.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### sessions.id.get
Retrieve a Session with specified identifier string



```js
rebilly.sessions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Session](#session)

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

#### Input
* input `object`
  * body **required** [Session](#session)
  * id **required** `string`: The resource identifier string

#### Output
* output [Session](#session)

### shipping_zones.get
Retrieve a list of shipping zones



```js
rebilly.shipping_zones.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [ShippingZone](#shippingzone)

### shipping_zones.post
Create a Shipping Zone



```js
rebilly.shipping_zones.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ShippingZone](#shippingzone)

#### Output
* output [ShippingZone](#shippingzone)

### shipping_zones.id.delete
Delete a shipping zone with predefined identifier string



```js
rebilly.shipping_zones.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### shipping_zones.id.get
Retrieve a shipping zone with specified identifier string



```js
rebilly.shipping_zones.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [ShippingZone](#shippingzone)

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

#### Input
* input `object`
  * body **required** [ShippingZone](#shippingzone)
  * id **required** `string`: The resource identifier string

#### Output
* output [ShippingZone](#shippingzone)

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

#### Input
* input `object`
  * body **required** [Signin](#signin)

#### Output
* output [Session](#session)

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

#### Input
* input `object`
  * body **required** [Signup](#signup)

#### Output
* output [User](#user)

### status.get
Retrieve API current status



```js
rebilly.status.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Status](#status)

### subscriptions.get
Retrieve a list of subscriptions



```js
rebilly.subscriptions.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Accept `string` (values: application/json, text/csv): The response media type

#### Output
* output `array`
  * items [Subscription](#subscription)

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

#### Input
* input `object`
  * body **required** [Subscription](#subscription)

#### Output
* output [Subscription](#subscription)

### subscriptions.id.get
Retrieve a subscription with specified identifier string



```js
rebilly.subscriptions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Subscription](#subscription)

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

#### Input
* input `object`
  * body **required** [Subscription](#subscription)
  * id **required** `string`: The resource identifier string

#### Output
* output [Subscription](#subscription)

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

#### Input
* input `object`
  * body **required** [SubscriptionCancel](#subscriptioncancel)
  * id **required** `string`: The resource identifier string

#### Output
* output [Subscription](#subscription)

### subscriptions.id.lead_source.delete
Delete a Lead Source that belongs to a certain Subscription



```js
rebilly.subscriptions.id.lead_source.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### subscriptions.id.lead_source.get
Retrieve a Lead Source of given subscription



```js
rebilly.subscriptions.id.lead_source.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [LeadSource](#leadsource)

### subscriptions.id.lead_source.put
Create a Lead Source for a Subscription



```js
rebilly.subscriptions.id.lead_source.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [LeadSource](#leadsource)
  * id **required** `string`: The resource identifier string

#### Output
* output [LeadSource](#leadsource)

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

#### Input
* input `object`
  * body **required** [SubscriptionSwitch](#subscriptionswitch)
  * id **required** `string`: The resource identifier string

#### Output
* output [Subscription](#subscription)

### tax_categories.get
Retrieve a list of tax categories



```js
rebilly.tax_categories.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TaxCategory](#taxcategory)

### tokens.get
Retrieve a list of tokens



```js
rebilly.tokens.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [PaymentToken](#paymenttoken)

### tokens.post
Create a token



```js
rebilly.tokens.post({
  "body": {
    "method": "",
    "paymentInstrument": {}
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PaymentToken](#paymenttoken)

#### Output
* output [PaymentToken](#paymenttoken)

### tokens.token.get
Retrieve a token with specified identifier string



```js
rebilly.tokens.token.get({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token identifier string

#### Output
* output [PaymentToken](#paymenttoken)

### tokens.token.expiration.post
Expire a token



```js
rebilly.tokens.token.expiration.post({
  "body": {
    "method": "",
    "paymentInstrument": {}
  },
  "token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [PaymentToken](#paymenttoken)
  * token **required** `string`: The token identifier string

#### Output
* output [PaymentToken](#paymenttoken)

### tracking.api.get
Retrieve a list of tracking API logs


```js
rebilly.tracking.api.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Accept `string` (values: application/json, text/csv): The response media type

#### Output
* output `array`
  * items [ApiTracking](#apitracking)

### tracking.api.id.get
Retrieve a tracking API log with specified identifier string


```js
rebilly.tracking.api.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [ApiTracking](#apitracking)

### tracking.lists.get
Retrieve Lists changes history


```js
rebilly.tracking.lists.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [List](#list)

### tracking.subscriptions.get
Retrieve a list of tracking subscription logs


```js
rebilly.tracking.subscriptions.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [SubscriptionTracking](#subscriptiontracking)

### tracking.subscriptions.id.get
Retrieve a tracking subscription log with specified identifier string


```js
rebilly.tracking.subscriptions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [SubscriptionTracking](#subscriptiontracking)

### tracking.webhooks.get
Retrieve a list of tracking webhook notifications


```js
rebilly.tracking.webhooks.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * filter `string`: The collection items filter requires a special format.
  * criteria `string`: The json criteria for collection

#### Output
* output `array`
  * items [WebhookTracking](#webhooktracking)

### tracking.webhooks.id.get
Retrieve a tracking webhook notification with specified identifier string


```js
rebilly.tracking.webhooks.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [WebhookTracking](#webhooktracking)

### tracking.webhooks.id.history.get
Retrieve related webhook attempts for specified webhook tracking.


```js
rebilly.tracking.webhooks.id.history.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output `array`
  * items [WebhookTracking](#webhooktracking)

### tracking.website_webhooks.get
Retrieve a list of tracking webhook notifications


```js
rebilly.tracking.website_webhooks.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [WebsiteWebhookTracking](#websitewebhooktracking)

### tracking.website_webhooks.id.get
Retrieve a tracking webhook notification with specified identifier string


```js
rebilly.tracking.website_webhooks.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [WebsiteWebhookTracking](#websitewebhooktracking)

### transactions.get
Retrieve a list of transactions



```js
rebilly.transactions.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * criteria `string`: The json criteria for collection
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Accept `string` (values: application/json, text/csv): The response media type

#### Output
* output `array`
  * items [Transaction](#transaction)

### transactions.id.get
Retrieve a Transaction with specified identifier string



```js
rebilly.transactions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Transaction](#transaction)

### transactions.id.cancel.post
Cancel a scheduled transaction. Once handled a transaction cannot be canceled


```js
rebilly.transactions.id.cancel.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Transaction](#transaction)

### transactions.id.gateway_logs.get
Retrieve Gateway communication Logs for Transaction with specified identifier string


```js
rebilly.transactions.id.gateway_logs.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [TransactionGatewayLog](#transactiongatewaylog)

### transactions.id.lead_source.delete
Delete a Lead Source that belongs to a certain transaction



```js
rebilly.transactions.id.lead_source.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### transactions.id.lead_source.get
Retrieve a Lead Source of given transaction



```js
rebilly.transactions.id.lead_source.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [LeadSource](#leadsource)

### transactions.id.lead_source.put
Create a Lead Source for a transaction



```js
rebilly.transactions.id.lead_source.put({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [LeadSource](#leadsource)
  * id **required** `string`: The resource identifier string

#### Output
* output [LeadSource](#leadsource)

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

#### Input
* input `object`
  * body **required** [TransactionRefund](#transactionrefund)
  * id **required** `string`: The resource identifier string

#### Output
* output [Transaction](#transaction)

### users.get
Retrieve a list of users



```js
rebilly.users.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [User](#user)

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

#### Input
* input `object`
  * body **required** [User](#user)

#### Output
* output [User](#user)

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

#### Input
* input `object`
  * body **required** [ResetPassword](#resetpassword)
  * token **required** `string`: The token string

#### Output
* output [User](#user)

### users.id.delete
Delete user with predefined identifier string



```js
rebilly.users.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### users.id.get
Retrieve user with specified identifier string



```js
rebilly.users.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [User](#user)

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

#### Input
* input `object`
  * body **required** [User](#user)
  * id **required** `string`: The resource identifier string

#### Output
* output [User](#user)

### users.id.password.post
Updates user's password with the specified newPassword. And checks if currentPassword matches the actual one.



```js
rebilly.users.id.password.post({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [UpdatePassword](#updatepassword)
  * id **required** `string`: The resource identifier string

#### Output
* output [User](#user)

### users.id.totp_reset.post
Reset (renew) totpSecret



```js
rebilly.users.id.totp_reset.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [User](#user)

### webhooks.get
Retrieve a list of webhooks



```js
rebilly.webhooks.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset

#### Output
* output `array`
  * items [GlobalWebhook](#globalwebhook)

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

#### Input
* input `object`
  * body **required** [GlobalWebhook](#globalwebhook)

#### Output
* output [GlobalWebhook](#globalwebhook)

### webhooks.id.get
Retrieve a webhook with specified identifier string



```js
rebilly.webhooks.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [GlobalWebhook](#globalwebhook)

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

#### Input
* input `object`
  * body **required** [GlobalWebhook](#globalwebhook)
  * id **required** `string`: The resource identifier string

#### Output
* output [GlobalWebhook](#globalwebhook)

### websites.get
Retrieve a list of websites



```js
rebilly.websites.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Accept `string` (values: application/json, text/csv): The response media type

#### Output
* output `array`
  * items [Website](#website)

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

#### Input
* input `object`
  * body **required** [Website](#website)

#### Output
* output [Website](#website)

### websites.id.delete
Delete a website with predefined identifier string



```js
rebilly.websites.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### websites.id.get
Retrieve a website with specified identifier string



```js
rebilly.websites.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [Website](#website)

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

#### Input
* input `object`
  * body **required** [Website](#website)
  * id **required** `string`: The resource identifier string

#### Output
* output [Website](#website)

### websites.id.webhook.delete
Delete a webhook that belongs to a website with predefined ID



```js
rebilly.websites.id.webhook.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
*Output schema unknown*

### websites.id.webhook.get
Retrieve a webhook for website with specified identifier string



```js
rebilly.websites.id.webhook.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string

#### Output
* output [WebsiteWebhook](#websitewebhook)

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

#### Input
* input `object`
  * body **required** [WebsiteWebhook](#websitewebhook)
  * id **required** `string`: The resource identifier string

#### Output
* output [WebsiteWebhook](#websitewebhook)



## Definitions

### A1Gateway


### A1GatewayMpis
* A1GatewayMpis `object`: A1Gateway Mpis
  * name **required** `string` (values: Other)

### AcquirerName
* AcquirerName `string` (values: Alipay, AIB, B+S, Bank of America, Bank of Moscow, Bank of Rebilly, Bank One, Beanstream, BMO Harris Bank, Borgun, BraintreePayments, Catalunya Caixa, Chase, ChinaUnionPay, CIM, Credorax, Elavon, EMS, Fifth Third Bank, First Data Buypass, First Data Nashville, First Data North, First Data Omaha, Flexepin, Forte, FundSend, GlobalCollect, Global East, Gpaysafe, Heartland, HSBC, iCheque, Ilixium, Intuit, Jeton, Masapay, Merrick, Mission Valley Bank, Moneris, NATWEST, NMI, OchaPay, Other, Panda Bank, PayPal, Payr, Payvision, Peoples Trust Company, Privatbank, RBC, RBS WorldPay, RealTime, RebillyProcessor, SMSVoucher, State Bank of Mauritius, Stripe, TBI, TrustPay, TSYS, UPayCard, Vantiv, VoicePay, WeChat Pay, Wells Fargo, Wing Hang Bank, Wirecard, WorldPay): Acquirer name

### AmexVPC


### AmountAdjustment
* AmountAdjustment `object`
  * method **required** `string` (values: none, partial, discount)

### ApiKey
* ApiKey `object`: API secret Key.
  * _links `array`: The links related to resource

  * apiUser `string`: API user name
  * datetimeFormat `string` (values: mysql, iso8601): Date time format
  * description `string`: API key description
  * secretKey `string`: API secret key's value

### ApiTracking
* ApiTracking `object`: Tracking API Requests.
  * _links `array`: The links related to resource

  * duration `integer`: Request duration in milliseconds
  * method `string` (values: HEAD, GET, POST, PUT, DELETE, PATCH): HTTP method
  * request `string`: Request JSON-string
  * requestHeaders `object`
  * response `string`: Response JSON-string
  * responseHeaders `object`
  * status `integer`: HTTP response code
  * url `string`: API request address
  * user `object`: The user who has made a request
    * email `string`: The user email
    * fingerprint `string`: The user device fingerprint hash
    * firstName `string`: The user first name
    * ipAddress `string`: Client IP address
    * isSupport `boolean`: If user from support
    * lastName `string`: The user last name
    * userAgent `string`: The software that is acting on behalf of a user

### ApprovalUrlLink
* ApprovalUrlLink `object`
  * rel **required** `string` (values: approvalUrl): The link type
  * href **required** `string`: The link URL

### Attachment
* Attachment `object`
  * _links `array`: The links related to resource

  * description `string`: The Attachment description
  * fileId **required** `string`: Linked File object id
  * name `string`: The Original Attachment name
  * relatedId **required** `string`: Linked object Id
  * relatedType **required** `string` (values: customer, dispute, invoice, note, payment, plan, product, subscription, transaction): Linked object type

### AttachmentResourceLink
* AttachmentResourceLink `object`
  * rel **required** `string` (values: customer, dispute, invoice, note, payment, plan, product, subscription, transaction): The link type
  * href **required** `string`: The link URL

### AuthenticationOptions
* AuthenticationOptions `object`
  * authTokenTtl `integer`: The default lifetime of the auth-token in seconds
  * credentialTtl `integer`: The default lifetime of the credential in seconds
  * passwordPattern `string`: Allowed password pattern
  * resetTokenTtl `integer`: The default lifetime of the reset-token in seconds

### AuthenticationToken
* AuthenticationToken `object`
  * _links `array`: The links related to resource

  * expiredTime `string`: Token's expired time
  * password **required** `string`: The token's password (write-only)
  * token `string`: The token identifier string
  * username **required** `string`: The token's username

### AuthorizeNet


### BankAccount
* BankAccount `object`
  * _links `array`: The links related to resource

  * accountNumber `string`: Bank's Account Number. Required if bank account is not created from Token. This field is write-only
  * accountType `string`: Banks's Account type. Required if bank account is not created from Token
  * bankName `string`: Bank's name.
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * routingNumber `string`: Bank's Routing Number. Required if bank account is not created from Token. This field is write-only
  * status `string` (values: active, deactivated): Bank Account status
  * token `string`: Bank Account Token. Use without any other fields

### BankAccountLink
* BankAccountLink `object`
  * rel **required** `string` (values: bankAccount): The link type
  * href **required** `string`: The link URL

### Beanstream


### BillingContactLink
* BillingContactLink `object`
  * rel **required** `string` (values: billingContact): The link type
  * href **required** `string`: The link URL

### Blacklist
* Blacklist `object`
  * _links `array`: The links related to resource

  * expiredTime `string`: The blacklist expired time
  * type **required** `string` (values: payment-card-id, customer-id, email, ip-address, country, fingerprint, bin): The blacklist type
  * value **required** `string`: The blacklist value

### BraintreePayments


### CancelUrlLink
* CancelUrlLink `object`
  * rel **required** `string` (values: cancelUrl): The link type
  * href **required** `string`: The link URL

### CardinalCommerce


### Cashflows


### Cayan


### Chase


### CheckoutPage
* CheckoutPage `object`
  * _links `array`: The links related to resource

  * allowCustomCustomerId `boolean`: If to enable your own customer ID in requests
  * isActive `boolean`: If checkout page active
  * name **required** `string`: Checkout page name
  * planId **required** `string`: Checkout page plan ID
  * redirectTimeout `integer`: Checkout page redirect timeout
  * redirectUrl `string`: Checkout page url
  * uriPath **required** `string`: Your own custom uri path for this Checkout Page. It will be appended to checkout url https://checkout.rebilly.com/website/<uriPath>
  * websiteId **required** `string`: Checkout page website ID

### ChinaUnionPay


### CommonScheduleInstruction
* CommonScheduleInstruction `object`: The calculation instruction of scheduled time
  * method **required** `string` (values: auto, immediately, date-interval, day-of-month, day-of-week)

### Condition
* Condition `object`
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation

### Contact
* Contact `object`
  * _links `array`: The links related to resource

  * address `string`: The contact street address
  * address2 `string`: The contact street address (second line)
  * city `string`: The contact city
  * country `string`: The contact country ISO Alpha-2 code
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * emails [ContactEmails](#contactemails)
  * firstName `string`: The contact first name
  * isOutdated `boolean`: Is contact outdated
  * lastName `string`: The contact last name
  * organization `string`: The contact organization
  * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
  * postalCode `string`: The contact postal code
  * region `string`: The contact region (state)

### ContactEmails
* ContactEmails `array`: The contact emails
  * items `object`
    * label **required** `string`: The email label
    * primary `boolean`: True if email is primary
    * value **required** `string`: The email value

### ContactLink
* ContactLink `object`
  * rel **required** `string` (values: contact): The link type
  * href **required** `string`: The link URL

### ContactObject
* ContactObject `object`
  * address `string`: The contact street address
  * address2 `string`: The contact street address (second line)
  * city `string`: The contact city
  * country `string`: The contact country ISO Alpha-2 code
  * emails [ContactEmails](#contactemails)
  * firstName `string`: The contact first name
  * lastName `string`: The contact last name
  * organization `string`: The contact organization
  * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
  * postalCode `string`: The contact postal code
  * region `string`: The contact region (state)

### ContactPhoneNumbers
* ContactPhoneNumbers `array`: The contact phone numbers
  * items `object`
    * label **required** `string`: The phone label
    * primary `boolean`: True if phone is primary
    * value **required** `string`: The phone value

### Coupon
* Coupon `object`: Coupons and Discounts
  * _links `array`: The links related to resource

  * description `string`: Your coupon description. When it is not empty this is used for invoice discount item description,
  * discount **required** [Discount](#discount)
  * expiredTime `string`: Coupon's expire time (end time)
  * issuedTime **required** `string`: Coupon's issued time (start time)
  * redemptionsCount `integer`: Coupon's redemptions count
  * restrictions `array`: Coupon restrictions

  * status `string` (values: issued, expired): If coupon enabled

### CouponExpiration
* CouponExpiration `object`
  * expiredTime **required** `string`: The coupon's expiry time, must be greater than the issued time. Null or empty string will immediately expire the coupon.

### CouponRedemption
* CouponRedemption `object`: Coupons redemption log
  * _links `array`: The links related to resource

  * additionalRestrictions `array`: Additional restrictions for coupon's redemptions


### CouponRestriction
* CouponRestriction `object`: Coupon restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, total-redemptions): Coupon's restriction type

### Credential
* Credential `object`
  * _links `array`: The links related to resource

  * customerId **required** `string`: The credential's customer ID
  * expiredTime `string`: The credential's expired time
  * password **required** `string`: The credential's password
  * username **required** `string`: Credential's username

### Credorax


### CustomEvent
* CustomEvent `object`
  * chronology **required** `string` (values: before, after): The emitting time of the custom event relatively to the system event
  * createdTime [ServerTimestamp](#servertimestamp)
  * description `string`: The custom event description
  * eventType **required** `string` (values: subscription-ended, subscription-trial-ended, subscription-renewed, payment-card-expired, invoice-past-due, invoice-issued, invoice-voided, invoice-paid, invoice-abandoned): The system event type
  * rulesCount `integer`
  * scheduleInstruction **required** [CustomEventScheduleInstruction](#customeventscheduleinstruction)
  * title **required** `string`: The custom event title

### CustomEventScheduleInstruction
* CustomEventScheduleInstruction `object`: The calculation instruction of scheduled time
  * method **required** `string` (values: date-interval, day-of-month, day-of-week)

### CustomField
* CustomField `object`: A separate Custom Field schema
  * _links `array`: The links related to resource

  * description `string`: The custom field description
  * isUsed `boolean`: A flag to represent that the custom field is used on a record of the resource.
  * name **required** `string`: The name of the custom field
  * type **required** `string` (values: array, boolean, datetime, integer, number, string, monetary): Type value    | Description

### Customer
* Customer `object`
  * _links `array`: The links related to resource

  * customFields [ResourceCustomFields](#resourcecustomfields)
  * defaultPaymentInstrument [PaymentInstrument](#paymentinstrument)
  * primaryAddress [ContactObject](#contactobject)

### CustomerLink
* CustomerLink `object`
  * rel **required** `string` (values: customer): The link type
  * href **required** `string`: The link URL

### DataCash


### DataCashMpi


### DataCashMpis
* DataCashMpis `object`: DataCash Mpis
  * name **required** `string` (values: DataCashMpi)

### DayOfWeek
* DayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)

### DefaultPaymentInstrumentLink
* DefaultPaymentInstrumentLink `object`
  * rel **required** `string` (values: defaultPaymentInstrument): The link type
  * href **required** `string`: The link URL

### DeliveryContactLink
* DeliveryContactLink `object`
  * rel **required** `string` (values: deliveryContact): The link type
  * href **required** `string`: The link URL

### Dengi


### Discount
* Discount `object`
  * type `string` (values: fixed, percent): Discount type

### Dispute
* Dispute `object`
  * _links `array`: The links related to resource

  * acquirerReferenceNumber `string`: The dispute's acquirer reference number
  * amount `number`: The dispute amount
  * category `string` (values: fraud, unrecognized, product-not-received, product-unacceptable, product-not-refunded, duplicate, subscription-canceled, uncategorized): The dispute's category
  * currency **required** `string`: The dispute currency ISO Alpha code
  * customerId `string`: The dispute's customer ID
  * deadlineTime `string`: Dispute deadline time
  * postedTime **required** `string`: Dispute posted time
  * rawResponse `string`: Dispute raw response from gateway
  * reasonCode **required** `string` (values: 1000, 12, 2, 30, 31, 35, 37, 40, 41, 42, 46, 47, 49, 50, 53, 54, 55, 57, 59, 60, 62, 7, 70, 71, 72, 73, 74, 75, 76, 77, 79, 8, 80, 81, 82, 83, 85, 86, 93, 00, 63, A01, A02, A08, F10, F14, F22, F24, F29, C02, C04, C05, C08, C14, C18, C28, C31, C32, M10, M49, P01, P03, P04, P05, P07, P08, P22, P23, R03, R13, M01, FR1, FR4, FR6, AL, AP, AW, CA, CD, CR, DA, DP, DP1, EX, IC, IN, IS, LP, N, NA, NC, P, RG, RM, RN1, RN2, SV, TF, TNM, UA01, UA02, UA32, UA99, UA03, UA10, UA11, UA12, UA18, UA20, UA21, UA22, UA23, UA28, UA30, UA31, UA38, duplicate, fraudulent, subscription_canceled, product_unacceptable, product_not_received, unrecognized, credit_not_processed, customer_initiated, incorrect_account_details, insufficient_funds, bank_cannot_process, debit_not_authorized, general): The dispute's reason code
  * status **required** `string` (values: response-needed, under-review, forfeited, won, lost, unknown): The dispute's status
  * transactionId **required** `string`: The dispute's transaction ID
  * type **required** `string` (values: information-request, first-chargeback, second-chargeback, arbitration): The dispute's type

### DisputeEvidence
* DisputeEvidence `object`
  * accessLogs `string`: The id of a file upload with the access logs showing the customer activity.
  * additionalFile `string`: Any additional evidence as a file upload id.
  * customerCommunication `string`: The id of a file upload showing communication with the customer (for example emails).
  * customerSignature `string`: The id of a file upload showing the signed contract or signed delivery receipt.
  * deliveryProof `string`: The id of a file upload showing the proof of delivery.
  * explanation `string`: An explanation relevant to the category of dispute.
  * policy `string`: The id of a file upload with the policy materials (may include the cancellation policy, refund policy, and terms of use).

### DisputeLink
* DisputeLink `object`
  * rel **required** `string` (values: dispute): The link type
  * href **required** `string`: The link URL

### Email
* Email `object`
  * email **required** `string`: Email

### EmailNotification
* EmailNotification `object`
  * bcc `array`: The hidden recipients addresses. The template palceholders are allowed.
    * items `string`
  * bodyHtml **required** `string`: Leave empty to recieve "text/plain" email.
  * bodyText **required** `string`: Leave empty to use text from "bodyHtml" without tags.
  * cc `array`: The recipients addresses. The template palceholders are allowed.
    * items `string`
  * credentialHash **required** `string`: SMTP Credential identifier string.
  * recipients **required** `array`: The recipients addresses. The template palceholders are allowed.
    * items `string`
  * sender **required** `string`: The sender address. The template palceholders are allowed.
  * subject **required** `string`: The message subject. The template palceholders are allowed.

### Error
* Error `object`
  * error `string`
  * status `integer`

### EventType
* EventType `string` (values: dispute-created, gateway-account-requested, transaction-processed, subscription-activated, subscription-canceled, subscription-created, subscription-renewed, payment-card-expired, invoice-past-due, payment-declined, transaction-process-requested, risk-score-changed): Rebilly event type

### File
* File `object`
  * _links `array`: The links related to resource

  * description `string`: The File description
  * extension `string`: The File extension
  * height `integer`: Image height, applicable to images only
  * mime `string` (values: image/png, image/jpeg, image/gif, application/pdf, audio/mpeg): The mime type
  * name `string`: Original File name
  * sha1 `string`: Hash sum of the file
  * size `integer`: The File size in bytes
  * tags `array`: The tags list
    * items `string`
  * url `string`: Write-only. If defined on POST, this would be used as a file source.
  * width `integer`: Image width, applicable to images only

### FileLink
* FileLink `object`
  * rel **required** `string` (values: file): The link type
  * href **required** `string`: The link URL

### Flexepin


### Forte


### FundSend


### GET


### GETMpis
* GETMpis `object`: GET Mpis
  * name **required** `string` (values: Other)

### GatewayAccount
* GatewayAccount `object`
  * _links `array`: The links related to resource

  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [AcquirerName](#acquirername)
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * downtimeEnd `string`: Gateway account downtime end
  * downtimeStart `string`: Gateway account downtime start
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [GatewayName](#gatewayname)
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [Method](#method)
  * monthlyLimit `number`: Monthly Limit
  * paymentCardSchemes `array`: Accepted payment card brands
    * items `string` (values: Visa, MasterCard, American Express, Discover, Maestro, Solo, Electron, JCB, Voyager, Diners Club, Switch, Laser, China Unionpay)
  * status `string` (values: active, inactive, pending): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * websites **required** `array`: Websites IDs


### GatewayAccountLink
* GatewayAccountLink `object`
  * rel **required** `string` (values: gatewayAccount): The link type
  * href **required** `string`: The link URL

### GatewayAccountPickInstruction
* GatewayAccountPickInstruction `object`
  * method **required** `string` (values: gateway-account-weights, gateway-acquirer-weights)

### GatewayName
* GatewayName `string` (values: A1Gateway, AmexVPC, AuthorizeNet, Beanstream, BraintreePayments, Cashflows, Cayan, Chase, ChinaUnionPay, Credorax, DataCash, Dengi, eMerchantPay, Flexepin, FundSend, Forte, GET, GlobalCollect, GlobalOne, Gpaysafe, iCheque, Ilixium, Intuit, JetPay, Jeton, Moneris, NMI, OchaPay, Optimal, PandaGateway, Payeezy, Payflow, PayPal, Payr, Payvision, Plugnpay, Realex, RealTime, RebillyProcessor, Redsys, RPN, Sagepay, SMSVoucher, Stripe, UPayCard, USAePay, VantivLitle, vegaaH, Walpay, Wirecard, Worldpay): The gateway name

### GlobalCollect


### GlobalCollectMpi


### GlobalCollectMpis
* GlobalCollectMpis `object`: GlobalCollect Mpis
  * name **required** `string` (values: GlobalCollectMpi)

### GlobalOne


### GlobalWebhook
* GlobalWebhook `object`
  * _links `array`: Links related to resource

  * credentialHash **required** `string`: Hash from Credentials which is used for authentication by the given URL
  * eventsFilter `array`: An array of System event type
    * items [GlobalWebhookEventType](#globalwebhookeventtype)
  * headers `object`: Map of elements with header name - header value association
  * method **required** `string` (values: GET, POST, PUT, PATCH, DELETE)
  * status [OnOff](#onoff)
  * url **required** `string`: URL that will be triggered when the given event occurs.

### GlobalWebhookEventType
* GlobalWebhookEventType `string` (values: gateway-account-requested, subscription-trial-ended, subscription-activated, subscription-canceled, subscription-renewed, transaction-processed, payment-card-expired, payment-declined, invoice-modified, invoice-created, dispute-created, suspended-payment-completed): Rebilly webhooks event type

### Gpaysafe


### Ilixium


### IlixiumMpi


### IlixiumMpis
* IlixiumMpis `object`: IlixiumMpis Mpis
  * name **required** `string` (values: IlixiumMpi)

### Intuit


### InvalidError


### Invoice
* Invoice `object`
  * _links `array`: The links related to resource

  * amount `number`: The Invoice's amount
  * collectionPeriod `integer`: Collection Period - difference between paidTime and issuedTime in days.
  * currency **required** `string`: The currency three letter code
  * delinquentCollectionPeriod `integer`: Delinquent Collection Period - difference between paidTime and dueTime in days.
  * discounts `array`: Discounts applied

  * items `array`: Invoice items array
    * items `string`
  * notes `string`: Notes for the customer which will display on the invoice
  * shippingAmount `number`: The Invoice's shipping amount
  * status `string` (values: draft, issued, past-due, paid, abandoned, voided): Invoice status.
  * taxes `array`: Taxes applied to this invoice


### InvoiceDiscount
* InvoiceDiscount `object`
  * amount `number`: Total amount that was discounted by this Coupon
  * description `string`: Discount description

### InvoiceIssue
* InvoiceIssue `object`
  * issuedTime `string`

### InvoiceItem
* InvoiceItem `object`
  * _links `array`: The links related to resource

  * description `string`: Invoice item's description
  * discountAmount `number`: Invoice item discount amount
  * periodEndTime `string`: End time
  * periodStartTime `string`: Start time
  * quantity `integer`: Invoice item's quantity
  * type **required** `string` (values: debit, credit): Invoice item's type
  * unitPrice **required** `number`: Invoice item's price

### InvoiceTax
* InvoiceTax `object`
  * amount `number`: Tax amount
  * description `string`: Tax description

### ItemsLink
* ItemsLink `object`
  * rel **required** `string` (values: items): The link type
  * href **required** `string`: The link URL

### JetPay


### Jeton


### Layout
* Layout `object`
  * _links `array`: The links related to resource

  * items `array`: The array of layout items (planId and starred)
    * items [LayoutItem](#layoutitem)
  * name **required** `string`: The name of the layout string

### LayoutItem
* LayoutItem `object`
  * _links `array`: The links related to resource

  * order `integer`: Item's order in Layout
  * starred `boolean`: Boolean if the plan should be starred (special callout presentation)

### LeadSource
* LeadSource `object`
  * _links `array`: The links related to resource

  * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
  * amount `number`: The amount that the lead cost
  * campaign `string`: Lead Source's campaign (eg go-big-123)
  * clickId `string`: Lead Source's click id (may come from an ad server)
  * content `string`: Lead Source's content (eg smiley faces)
  * currency `string`: Currency (three letter ISO 4217 alpha code) (eg USD, EUR)
  * ipAddress `string`: Customer's IP Address
  * medium `string`: Lead Source's medium (eg search, display)
  * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
  * salesAgent `string`: Lead Source's sales agent (eg James Bond)
  * source `string`: Lead Source's source (eg google, yahoo)
  * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
  * term `string`: Lead Source's term (eg salt shakers)

### LeadSourceLink
* LeadSourceLink `object`
  * rel **required** `string` (values: leadSource): The link type
  * href **required** `string`: The link URL

### List
* List `object`
  * _links `array`: Links related to resource

  * name **required** `string`: List name
  * values **required** `array`: List values
    * items `string`
  * version `integer`: List version

### Method
* Method `string` (values: ach, cash, payment-card, paypal, Alipay, China UnionPay, Flexepin, Gpaysafe, Jeton, OchaPay, SMSVoucher, UPayCard, WeChat Pay): The payment method

### Moneris


### MpiName
* MpiName `string` (values: PayvisionMpi, WirecardMpi, IlixiumMpi, DataCashMpi, OptimalMpi, GlobalCollectMpi, CardinalCommerce, Other): The Merchant plug-in Name

### NMI


### NMIMpis
* NMIMpis `object`: NMI Mpis
  * name **required** `string` (values: Other)

### NewLink
* NewLink `object`
  * href **required** `string`: The link URL

### Note
* Note `object`
  * _links `array`: The links related to resource

  * archived `boolean`: Is the note archived (excluded from List method)
  * content **required** `string`: The note's name
  * createdBy `string`: The note's creator
  * relatedType **required** `string` (values: customer, payment-card, payment-gateway, subscription, transaction): The note's related resource type

### NotesLink
* NotesLink `object`
  * rel **required** `string` (values: notes): The link type
  * href **required** `string`: The link URL

### OchaPay


### OnBoardingUrlLink
* OnBoardingUrlLink `object`
  * rel **required** `string` (values: onBoardingUrl): The link type
  * href **required** `string`: The link URL

### OnOff
* OnOff `string` (values: active, inactive)

### Optimal


### OptimalMpi


### OptimalMpis
* OptimalMpis `object`: Optimal Mpis
  * name **required** `string` (values: OptimalMpi)

### Organization
* Organization `object`
  * _links `array`: The links related to resource

  * address `string`: The organization street address
  * address2 `string`: The organization street address
  * city `string`: The organization city
  * country **required** `string`: The organization country ISO Alpha-2 code
  * createdTime [ServerTimestamp](#servertimestamp)
  * name **required** `string`: The organization name
  * postalCode `string`: The organization postal code
  * region `string`: The organization region (state)

### OrganizationLink
* OrganizationLink `object`
  * rel **required** `string` (values: organization): The link type
  * href **required** `string`: The link URL

### Other


### PandaGateway


### ParentTransactionLink
* ParentTransactionLink `object`
  * rel **required** `string` (values: parentTransaction): The link type
  * href **required** `string`: The link URL

### PayPal


### PayPalAccount
* PayPalAccount `object`
  * _links `array`: The links related to resource

  * customFields [ResourceCustomFields](#resourcecustomfields)
  * status `string` (values: inactive, active, deactivated): PayPal Account status
  * username `string`: PayPal username.

### Payeezy


### Payflow


### Payment
* Payment `object`
  * _links `array`: The links related to resource

  * amount **required** `number`: The payment amount
  * createdBy `string`: The process that created this payment
  * currency **required** `string`: The payment currency ISO Alpha code
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * description `string`: The payment description
  * invoiceIds `array`: The array of invoice identifiers
    * items [ResourceId](#resourceid)
  * paymentInstrument [PaymentInstrument](#paymentinstrument)
  * result `string` (values: approved, declined, canceled, unknown): Payment result
  * retryInstruction [PaymentRetry](#paymentretry)
  * retryNumber `integer`: The position in the sequence of retries
  * scheduledTime `string`: The time the payment is scheduled for collection
  * status `string` (values: scheduled, queued, in-progress, incomplete, waiting-gateway, suspended, completed): Payment status
  * updatedBy `string`: The process that updated this payment

### PaymentCard
* PaymentCard `object`
  * _links `array`: The links related to resource

  * bankCountry `string`: Payment Card bank country
  * bankName `string`: Payment Card bank name
  * bin `string`: The card's bin (the PAN's first 6 digits)
  * brand `string` (values: Visa, MasterCard, American Express, Discover, Maestro, Solo, Electron, JCB, Voyager, Diners Club, Switch, Laser, China UnionPay): Payment Card brand
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * cvv `string`: Card's cvv (card verification value). Required if card is creating not from Token
  * expMonth `integer`: Card's expiry month. Required if card is creating not from Token
  * expYear `integer`: Card's expiry year. Required if card is creating not from Token
  * last4 `string`: The PAN's last 4 digits
  * pan `string`: The card PAN (Primary Account Number). Required if card is creating not from Token
  * safeHash `string`: The card's hash. Based on bin and last 4 digits of the PAN
  * status `string` (values: active, expired, inactive, deactivated, pending): Payment Card status
  * token `string`: PaymentCardToken. Use without any other fields

### PaymentCardLink
* PaymentCardLink `object`
  * rel **required** `string` (values: paymentCard): The link type
  * href **required** `string`: The link URL

### PaymentCardMigrationRequest
* PaymentCardMigrationRequest `object`
  * paymentCardIds **required** `array`


### PaymentCardMigrationResponse
* PaymentCardMigrationResponse `object`
  * migratedCards `integer`: Amount of cards that were successfully migrated

### PaymentInstrument
* PaymentInstrument `object`
  * method **required** [Method](#method)

### PaymentLink
* PaymentLink `object`
  * rel **required** `string` (values: payment): The link type
  * href **required** `string`: The link URL

### PaymentRetry
* PaymentRetry `object`
  * afterAttemptPolicy **required** `string` (values: none, change-subscription-renewal-time): The policy on the attempt finishes
  * afterRetryEndPolicy **required** `string` (values: none, cancel-subscription): The policy on the retry ends
  * attempts **required** `array`
    * items `object`
      * paymentInstruction **required** [AmountAdjustment](#amountadjustment)
      * scheduleInstruction **required** [CommonScheduleInstruction](#commonscheduleinstruction)

### PaymentToken
* PaymentToken `object`
  * _links `array`: The links related to resource

  * fingerprint `string`: Device fingerprint hash
  * method **required** [Method](#method)
  * paymentInstrument **required** [PaymentTokenInstrument](#paymenttokeninstrument)

### PaymentTokenInstrument
* PaymentTokenInstrument `object`: Payment Token instrument object
  * accountNumber `integer`: AccountNumber
  * accountType `string`: Account Type
  * bankName `string`: Bank name
  * cvv `string`: The CVV/CVC of the payment card
  * expMonth `integer`: Card's expiry month
  * expYear `integer`: Card's expiry year
  * pan `string`: The card PAN (Primary Account Number)
  * routingNumber `integer`: Routing Number

### Payr


### Payvision


### PayvisionMpi


### PayvisionMpis
* PayvisionMpis `object`: Payvision Mpis
  * name **required** `string` (values: PayvisionMpi, CardinalCommerce, Other)

### PermalinkLink
* PermalinkLink `object`
  * rel **required** `string` (values: permalink): The link type
  * href **required** `string`: The link URL

### Plan
* Plan `object`
  * _links `array`: The links related to resource

  * contractTermLength `integer`: The length that corresponds with the contractTermUnit
  * contractTermUnit `string` (values: day, week, month, year): The unit of time
  * currency **required** `string`: Currency (three letter ISO 4217 code)
  * currencySign `string`: Currency sign
  * description `string`: The plan description
  * expiredTime `string`: Time when the plan is not longer valid
  * isActive `boolean`: If the plan is not active, customers cannot subscribe to the plan (default to true)
  * maxQuantity `integer`: Maximum quantity per order (NULL if no maximum)
  * minQuantity `integer`: Minimum quantity per order, defaults to 1
  * name **required** `string`: The plan name
  * recurringAmount `number`: The amount that recurs according to the schedule
  * recurringPeriodLength `integer`: The length of time (used with the recurringPeriodUnit)
  * recurringPeriodLimit `integer`: The number of times a subscription will rebill until the contract is over
  * recurringPeriodUnit `string` (values: day, week, month, year): The unit of time
  * richDescription `string`: The plan rich description - supports HTML
  * setupAmount `number`: The amount of a trial - 0 is a valid value (for free)
  * trialAmount `number`: The amount of a trial - 0 is a valid value (for free)
  * trialPeriodLength `integer`: The length of time (used with the trialPeriodUnit)
  * trialPeriodUnit `string` (values: day, week, month, year): The unit of time

### PlanLink
* PlanLink `object`
  * rel **required** `string` (values: plan): The link type
  * href **required** `string`: The link URL

### Plugnpay


### PriceBasedShippingRate
* PriceBasedShippingRate `object`
  * _links `array`: The links related to resource

  * currency **required** `string`: Currency (three letter ISO 4217 code)
  * maxOrderSubtotal `number`: Maximum order subtotal for which this shipping rate is applicable (NULL if no maximum)
  * minOrderSubtotal `number`: Minimum order subtotal for which this shipping rate is applicable, defaults to 0.00
  * name **required** `string`: The shipping rate name
  * price **required** `number`: The shipping price - 0 is a valid value (for free)

### Product
* Product `object`: Your product includes digital goods, services, and physical goods.
  * _links `array`: The links related to resource

  * accountingCode `string`: The product accounting code
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * description `string`: The product description
  * name **required** `string`: The product name
  * requiresShipping `boolean`: If the product requires shipping, shipping calculations will be applied
  * taxCategoryId `string` (values: 99999, 20010, 40030, 51020, 51010, 31000, 30070): The product's tax category identifier string

### Profile
* Profile `object`
  * availableCurrencies `array`: An array of reporting currencies enabled for the merchant
    * items `string`
  * businessPhone `string`: The user business phone number
  * country `string`: The user country setting - two letter code
  * email `string`: The user email
  * firstName `string`: User's first name
  * lastName `string`: User's last name
  * mobilePhone `string`: The user mobile phone number
  * preferences `object`: User preferences like timezone, language and many more. This is an object with custom properties.
  * reportingCurrency `string`: The user's ISO Alpha-3 code used for reports
  * totpRequired `boolean`: The user setting of two-factor authentification
  * totpSecret `string`: The user TOTP key for authentification app (if TOTP enabled)
  * totpUrl `string`: The user link to QR-code for TOTP authentification app (if TOTP enabled)

### RPN


### RealTime


### Realex


### RebillyProcessor


### RebillyProcessorMpi


### RebillyProcessorMpis
* RebillyProcessorMpis `object`: RebillyProcessorMpis Mpis
  * name **required** `string` (values: RebillySandboxMpi)

### RedemptionRestriction
* RedemptionRestriction `object`: Redemption restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions): Redemption's additional restriction type

### RedirectUrls
* RedirectUrls `object`: The redirect URIs
  * cancel **required** `string`
  * decline **required** `string`
  * error **required** `string`
  * success **required** `string`

### Redsys


### RefundUrlLink
* RefundUrlLink `object`
  * rel **required** `string` (values: refundUrl): The link type
  * href **required** `string`: The link URL

### ResetPassword
* ResetPassword `object`
  * newPassword **required** `string`: New password

### ResetPasswordToken
* ResetPasswordToken `object`
  * _links `array`: The links related to resource

  * credential `string`: Token's credential ID
  * expiredTime `string`: Password expired time
  * password **required** `string`: Token's password (only for POST)
  * token `string`: The token's identifier string
  * username **required** `string`: The token's username

### ResourceCustomFields
* ResourceCustomFields `object`: "Custom Fields list as a map `{"custom field name": "custom field value", ...}"`.

### ResourceId
* ResourceId `string`: The resource ID. Defaults to UUID v4

### RetriedTransactionLink
* RetriedTransactionLink `object`
  * rel **required** `string` (values: retriedTransaction): The link type
  * href **required** `string`: The link URL

### RiskMetadata
* RiskMetadata `object`
  * accuracyRadius `integer`: Accuracy radius for specified ipAddress (kilometers)
  * city `string`: City for specified ipAddress
  * country `string`: Country ISO Alpha-2 code for specified ipAddress
  * distance `integer`: Distance between IP Address and Billing Address geolocation (kilometers)
  * fingerprint `string`: The fingerprint
  * httpHeaders `object`: HTTP headers
  * ipAddress `string`: The customer's IP
  * isHosting `boolean`: True if customer's ip address is related to hosting
  * isProxy `boolean`: True if customer's ip address is related to proxy
  * isTor `boolean`: True if customer's ip address is related to TOR
  * isVpn `boolean`: True if customer's ip address is related to VPN
  * isp `string`: Internet Service Provider name, if available
  * latitude `number`: Latitude for specified ipAddress
  * longitude `number`: Longitude for specified ipAddress
  * postalCode `string`: Postal code for specified ipAddress
  * timeZone `string`: Time zone for specified ipAddress
  * vpnServiceName `string`: VPN service name, if available

### Rule
* Rule `object`: The rule
  * actions **required** `array`
    * items [RuleAction](#ruleaction)
  * criteria [Condition](#condition)
  * final `boolean`: Whether rule is final, meaning stop further matching rules if this is matched
  * name **required** `string`
  * status [OnOff](#onoff)

### RuleAction
* RuleAction `object`
  * name **required** `string` (values: blacklist, cancel-scheduled-payments, guess-payment-card-expiration, pick-gateway-account, schedule-payment-retry, schedule-payment, send-email, trigger-webhook, stop-subscriptions, add-risk-score): The action name
  * status [OnOff](#onoff)

### RuleSet
* RuleSet `object`: Set of rules for particular event
  * _links `array`: The links related to resource

  * rules **required** `array`
    * items [Rule](#rule)
  * updatedTime [ServerTimestamp](#servertimestamp)
  * version `integer`

### RuleSetHistoryItem
* RuleSetHistoryItem `object`: Version of rules
  * _links `array`: The links related to a resource

  * createdTime [ServerTimestamp](#servertimestamp)
  * version `integer`

### RuleSetVersion
* RuleSetVersion `object`: Version of rules
  * _links `array`: The links related to resource

  * createdTime [ServerTimestamp](#servertimestamp)
  * rules `array`
    * items [Rule](#rule)
  * version `integer`

### RuleSetVersionLink
* RuleSetVersionLink `object`
  * rel **required** `string` (values: rules): The link type
  * href **required** `string`: The link URL

### SMSVoucher


### Sagepay


### SelfLink
* SelfLink `object`
  * rel **required** `string` (values: self): The link type
  * href **required** `string`: The link URL

### SendPreviewWebhook


### SendTestEmail


### ServerTimestamp
* ServerTimestamp `string`: Read-only timestamp, automatically assigned on back-end.

### Session
* Session `object`
  * _links `array`: The links related to resource

  * expiredTime `string`: Session expired time. Defaults to one hour
  * token `string`: The session's token used for authentication

### ShippingZone
* ShippingZone `object`
  * _links `array`: The links related to resource

  * countries `array`: Countries covered by the shipping zone. A country can only belong to one shipping zone (no overlapping).
    * items `string`: Country ISO Alpha-2 code
  * name **required** `string`: The shipping zone name
  * rates `array`: Price-based shipping rate instructions


### Signin
* Signin `object`
  * email **required** `string`: Email
  * expiredTime `string`: Session expired time. Defaults to one hour
  * password **required** `string`: Password

### Signup
* Signup `object`
  * businessPhone **required** `string`: The user business phone number
  * company **required** `string`: The user's company name
  * currencies `array`: An array of currencies codes
    * items `string`: 3 letters ISO 4217 currency code
  * email **required** `string`: The user email
  * firstName **required** `string`: The user first name
  * lastName **required** `string`: The user last name
  * merchantCategoryCode `integer`: Merchant category code. Defaults to "Computer Software Stores"
  * password **required** `string`: The user password
  * website **required** `string`: The user's website address

### SmtpAuthorization
* SmtpAuthorization `object`
  * type `string` (values: none, plain, login, cram-md5)

### SmtpCredential
* SmtpCredential `object`: SMTP Credential
  * _links `array`: The links related to resource

  * auth [SmtpAuthorization](#smtpauthorization)
  * encryption `string` (values: none, tls, ssl): The encryption value
  * host **required** `string`: The host name
  * port `integer`: The port value

### Status
* Status `object`
  * status `string` (values: ok): The API status. If everything is ok - value is 'ok'

### Stripe


### Subscription
* Subscription `object`
  * _links `array`: The links related to resource

  * autopay `boolean`: Autopay determines if a payment attempt will be automatic
  * cancelCategory `string` (values: billing-failure, did-not-use, did-not-want, missing-features, bugs-or-problems, do-not-remember, risk-warning, contract-expired, too-expensive, never-started, switched-plan, other): Cancel category
  * cancelDescription `string`: Cancel reason description in free form
  * canceledBy `string` (values: merchant, customer, rebilly): Canceled by
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * inTrial `boolean`: True if the subscription is currently in a trial period
  * quantity `integer`: Quantity for each subscription. Default value to 1
  * rebillNumber `integer`: The current period number
  * renewalTime `string`: Subscription renewal time
  * startTime `string`: Subscription start time
  * status `string`: Subscription status

### SubscriptionCancel
* SubscriptionCancel `object`
  * cancelCategory **required** `string` (values: did-not-use, did-not-want, missing-features, bugs-or-problems, do-not-remember, risk-warning, contract-expired, too-expensive, other): Cancel category
  * cancelDescription `string`: Cancel reason description in free form
  * canceledBy **required** `string` (values: merchant, customer): Canceled by
  * policy **required** `string` (values: at-next-renewal, now-with-prorata-credit, now): Cancel policy

### SubscriptionLink
* SubscriptionLink `object`
  * rel **required** `string` (values: subscription): The link type
  * href **required** `string`: The link URL

### SubscriptionSwitch
* SubscriptionSwitch `object`
  * policy **required** `string` (values: at-next-renewal, now-with-prorata-credit, now): Switch policy
  * quantity `integer`: Quantity for each subscription. Default value to 1

### SubscriptionTracking
* SubscriptionTracking `object`: Tracking subscription log
  * _links `array`: The links related to resource

  * message `string`: It contains the transaction number and renewal time
  * result `string` (values: created, postponed, stopped, error): Subscription's result

### SystemEvent
* SystemEvent `object`: The application event
  * _links `array`: The links related to resource

  * description `string`
  * eventType [EventType](#eventtype)
  * rulesCount `integer`
  * title `string`

### TaxCategory
* TaxCategory `object`
  * _links `array`: The links related to resource

  * description `string`: The tax category description
  * id `string` (values: 99999, 20010, 40030, 51020, 51010, 31000, 30070): The tax category identifier string
  * taxProvider `string` (values: tax-jar): The tax category maps to a provider

### ThreeDSecure
* ThreeDSecure `object`
  * _links `array`: The links related to resource

  * amount **required** `number`: Transaction amount
  * cavv `string`: The 3D Secure entry cardholder authentication verification value
  * currency **required** `string`: The currency three letter code
  * eci `integer`: The 3D Secure entry electronic commerce indicator
  * enrolled **required** `string` (values: Y, N, U): Is the cardholder enrolled in 3DSecure
  * enrollmentEci **required** `string`: The 3D Secure entry enrollment eci
  * payerAuthResponseStatus `string` (values: Y, N, U, A): The 3D Secure entry Auth Response Status
  * signatureVerification `string` (values: Y, N): If signature was verified
  * xid `string`: The 3D Secure entry transaction Id

### ThreeDSecureResult
* ThreeDSecureResult `object`
  * authenticated **required** `string` (values: yes, no, not applicable, attempted): The 3D Secure entry Auth Response Status
  * enrolled **required** `string` (values: yes, no, invalid card/timeout, unavailable): Is the cardholder enrolled in 3D Secure
  * liability **required** `string` (values: protected, not protected, protected (attempt))

### Time
* Time `string`

### TimeUnit
* TimeUnit `string` (values: second, seconds, minute, minutes, hour, hours, day, days, month, months, year, years)

### Transaction
* Transaction `object`
  * _links `array`: The links related to resource

  * acquirerName `string`: Acquirer name, available only when transaction use gateway, else null
  * amount `number`: The transactions's amount
  * bin `string`: Payment Card BIN
  * childTransactions `array`: The child transaction IDs

  * currency `string`: The transactions's currency
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * dcc `object`: Dynamic Currency Conversion detailed information. Null if hasDcc is false
    * base `object`: Initial amount and currency to convert from
      * amount `number`
      * currency `string`
    * outcome `string` (values: rejected, selected, unknown): Dynamic Currency Conversion outcome
    * quote `object`: Suggested amount and currency to convert to
      * amount `number`
      * currency `string`
    * usdMarkup `number`: The amount of markup translated to USD
  * description `string`: The payment description
  * gateway `object`: The related gateway information
    * avsResponse `object`: The AVS gateway's response
      * code `string`: The raw response code
      * message `string`: The raw response message
    * cvvResponse `object`: The CVV gateway's response
      * code `string`: The raw response code
      * message `string`: The raw response message
    * response `object`: The gateway's response
      * code `string`: The gateway's response code
      * message `string`: The gateway's response message
      * originalCode `string`: The raw, unmapped gateway's response code
      * originalMessage `string`: The raw, unmapped gateway's response message
      * type `string`: The gateway's response type
  * gatewayName `string`: Payment Gateway name, available only when transaction use gateway, else null
  * has3ds `boolean`
  * hasDcc `boolean`: True if transaction has Dynamic Currency Conversion applied
  * invoiceIds `array`: The invoice IDs related to transaction

  * isDisputed `boolean`: True if transaction is disputed
  * isRebill `boolean`
  * paymentInstrument [PaymentInstrument](#paymentinstrument)
  * rebillNumber `integer`: The transactions's rebill number
  * redirectUrls [RedirectUrls](#redirecturls)
  * result `string` (values: approved, canceled, declined, unknown): Transaction result
  * retryInstruction [PaymentRetry](#paymentretry)
  * retryNumber `integer`: The position in the sequence of retries
  * riskScore `number`: The transactions's risk score
  * scheduledTime `string`: The time the transaction is scheduled for collection
  * status `string` (values: completed, connection-error, never-sent, pending, sending, suspended, timeout, waiting-capture, waiting-refund): Transaction status
  * subscriptionIds `array`: The subscription IDs related to transaction

  * type `string` (values: authorize, capture, credit, refund, sale, void): Transaction type
  * velocity `number`: The number of transactions by the same customer in the past 24 hours

### TransactionGatewayLog
* TransactionGatewayLog `object`
  * _links `array`: The links related to resource

  * duration `integer`: The request time, msec
  * headers `array`: The request headers
    * items `string`
  * request `string`: The request body
  * response `string`: The response body
  * url `string`: The request URL

### TransactionLink
* TransactionLink `object`
  * rel **required** `string` (values: transaction): The link type
  * href **required** `string`: The link URL

### TransactionRefund
* TransactionRefund `object`
  * amount **required** `number`: Refund amount

### UPayCard


### USAePay


### UpdatePassword
* UpdatePassword `object`
  * currentPassword `string`: Current user's password - used when requesting password change
  * newPassword `string`: New user's password - used when requesting password change

### User
* User `object`
  * _links `array`: The links related to resource

  * availableCurrencies `array`: An array of reporting currencies enabled for the merchant
    * items `string`
  * businessPhone `string`: The user business phone number
  * country `string`: The user country setting - two letter code
  * email **required** `string`: The user email
  * firstName **required** `string`: User's first name
  * lastName **required** `string`: User's last name
  * mobilePhone `string`: The user mobile phone number
  * password `string`: User's password. If not provided, password reset email will be sent
  * preferences `object`: User preferences like timezone, language and many more. This is an object with custom properties.
  * reportingCurrency `string`: The user's ISO Alpha-3 code used for reports
  * status `string` (values: active, inactive, pending-confirmation): The user status
  * totpRequired `boolean`: The user setting of two-factor authentification
  * totpSecret `string`: The user TOTP key for authentification app (if TOTP enabled)
  * totpUrl `string`: The user link to QR-code for TOTP authentification app (if TOTP enabled)

### UserPasswordAuthorization
* UserPasswordAuthorization `object`
  * password **required** `string`
  * username **required** `string`

### UserPermissions
* UserPermissions `array`
  * items `object`
    * methods `array`
      * items `string` (values: HEAD, GET, POST, PUT, DELETE, PATCH)
    * resourceIds `array`
      * items [ResourceId](#resourceid)
    * resourceName `string` (values: 3dsecure, api-keys, api-tracking, authentication-options, authentication-tokens, bank-accounts, blacklists, checkout-pages, contacts, coupons, coupons-redemptions, credentials, custom-events, custom-fields, customers, disputes, events, gateway-accounts, invoices, layouts, lead-sources, lists, matched-rules, notes, oct-batch, organizations, password-tokens, payments, payment-cards, payment-cards-migrations, paypal-accounts, plans, reports, reset-sandbox, rulesets, sessions, subscriptions, subscription-tracking, tokens, transactions, users, webhook, webhook-tracking, websites)

### VantivLitle


### VantivLitleMpis
* VantivLitleMpis `object`: VantivLitle Mpis
  * name **required** `string` (values: Other)

### Walpay


### WalpayMpis
* WalpayMpis `object`: WalpayMpis Mpis
  * name **required** `string` (values: Other)

### Webhook
* Webhook `object`
  * body `string`
  * credentialHash `string`: Webhook Credential identifier string.
  * headers `array`
    * items [WebhookHeader](#webhookheader)
  * method **required** `string` (values: GET, POST, PUT, PATCH, DELETE)
  * query `object`: The URI parameters
  * url **required** `string`

### WebhookAuthorization
* WebhookAuthorization `object`
  * type **required** `string` (values: none, basic, digest, oauth1): The authorization type

### WebhookCredential
* WebhookCredential `object`: Webhook credential
  * auth [WebhookAuthorization](#webhookauthorization)
  * host **required** `string`: The host name

### WebhookHeader
* WebhookHeader `object`
  * name **required** `string`
  * status [OnOff](#onoff)
  * value **required** `string`

### WebhookTracking
* WebhookTracking `object`: Webhook Tracking Requests.
  * _links `array`: The links related to resource

  * attempt `integer`: The Webhook's attempt number
  * eventType [EventType](#eventtype)
  * headers `object`: HTTP headers which were used to send webhook
  * method `string`: HTTP method which was used to send webhook
  * payload `string`: Webhook's payload
  * responseBody `string`: Response body received
  * responseCode `integer`: HTTP code response
  * source `string` (values: webhooks, rules): The Webhook's source
  * url `string`: Url where webhook was sent

### Website
* Website `object`
  * _links `array`: The links related to resource

  * checkoutPageUri `string`: Your own custom URI for this Checkout Page
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * name **required** `string`: The website's name
  * serviceEmail **required** `string`: The website's customer service email address
  * servicePhone **required** `string`: The website's customer service phone number
  * url **required** `string`: The website's domain address

### WebsiteLink
* WebsiteLink `object`
  * rel **required** `string` (values: website): The link type
  * href **required** `string`: The link URL

### WebsiteWebhook
* WebsiteWebhook `object`
  * webHookPassword **required** `string`: Webhook HTTP Authentication Password. An empty string will be returned in the response
  * webHookUrl **required** `string`: Webhook Url
  * webHookUsername **required** `string`: Webhook HTTP Authentication Username

### WebsiteWebhookTracking
* WebsiteWebhookTracking `object`: Webhook Tracking Requests.
  * _links `array`: The links related to resource

  * eventName `string`: Event name for which webhook was called
  * pushData `string`: Event's data information JSON-string
  * response `integer`: HTTP code response
  * status `string` (values: fail, success): Event's status

### Wirecard


### WirecardMpi


### WirecardMpis
* WirecardMpis `object`: Wirecard Mpis
  * name **required** `string` (values: WirecardMpi)

### Worldpay


### WorldpayMpis
* WorldpayMpis `object`: Worldpay Mpis
  * name **required** `string` (values: Other)

### ach


### add-risk-score


### and
* and `object`: Logical AND
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * conditions **required** `array`
    * items [Condition](#condition)

### auto


### basic


### between
* between `object`: Between condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * max **required** `string`
  * min **required** `string`
  * path **required** `string`

### blacklist


### cancel-scheduled-payments


### cash


### compare
* compare `object`
  * path **required** `string`
  * value **required** `string`

### cram-md5


### date-interval


### day-of-month


### day-of-week


### digest


### discount


### discounts-per-redemption


### eMerchantPay


### eMerchantPayMpis
* eMerchantPayMpis `object`: eMerchantPay Mpis
  * name **required** `string` (values: Other)

### equals
* equals `object`: Equals condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * path **required** `string`
  * value **required** `string`

### fixed


### gateway-account-weights


### gateway-acquirer-weights


### gt
* gt `object`: Greater than condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * path **required** `string`
  * value **required** `string`

### gte
* gte `object`: Greater than or equals condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * path **required** `string`
  * value **required** `string`

### guess-payment-card-expiration


### iCheque


### immediately


### in
* in `object`: In condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * path **required** `string`
  * values **required** `array`
    * items `string`

### logical
* logical `object`
  * conditions **required** `array`
    * items [Condition](#condition)

### logical-not
* logical-not `object`
  * condition **required** [Condition](#condition)

### login


### lt
* lt `object`: Less than condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * path **required** `string`
  * value **required** `string`

### lte
* lte `object`: Less than or equals condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * path **required** `string`
  * value **required** `string`

### minimum-order-amount


### none


### not
* not `object`: Logical NOT
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * condition **required** [Condition](#condition)

### oauth1


### or
* or `object`: Logical OR
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * conditions **required** `array`
    * items [Condition](#condition)

### partial


### payment-card


### paypal


### percent


### pick-gateway-account


### plain


### redemptions-per-customer


### restrict-to-invoices


### restrict-to-plans


### restrict-to-subscriptions


### schedule-payment


### schedule-payment-retry


### send-email


### stop-subscriptions


### total-redemptions


### trigger-webhook


### vegaaH



